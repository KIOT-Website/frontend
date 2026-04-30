import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Trophy, Medal, Award, Clock, FileText, ExternalLink, Loader2, Sparkles, Star, ArrowLeft, Users, ChevronRight } from 'lucide-react'

const API_BASE = 'http://127.0.0.1:8000'

const DEPARTMENTS = [
  'B.E. COMPUTER SCIENCE AND ENGINEERING',
  'B.E. ELECTRONICS AND COMMUNICATION ENGINEERING',
  'B.E. MECHANICAL ENGINEERING',
  'B.E. ELECTRICAL AND ELECTRONICS ENGINEERING',
  'B.E. CIVIL ENGINEERING',
  'B.E. ELECTRONICS AND COMPUTER ENGINEERING',
  'B.TECH INFORMATION TECHNOLOGY',
  'B.TECH ARTIFICIAL INTELLIGENCE AND DATA SCIENCE',
  'B.TECH COMPUTER SCIENCE AND BUSINESS SYSTEMS',
  'MBA - GENERAL',
  'MBA (IEV)',
  'MCA',
]

const Achievements = () => {
  const [category, setCategory] = useState('AWARD') // AWARD, ACHIEVEMENT
  const [subCategory, setSubCategory] = useState('STUDENT')
  const [selectedDept, setSelectedDept] = useState(DEPARTMENTS[0])
  const [selectedYear, setSelectedYear] = useState('')
  const [studentType, setStudentType] = useState('RANK')
  const [years, setYears] = useState([])
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(false)

  const generateAcademicYears = () => {
    const list = []
    for (let yr = 2029; yr >= 2009; yr--) {
      list.push(`${yr}`)
    }
    return list
  }

  useEffect(() => {
    const yList = generateAcademicYears()
    setYears(yList)
    setSelectedYear(yList[0])
  }, [])

  const fetchData = async () => {
    if (!selectedYear) return
    setLoading(true)
    try {
      let url = `${API_BASE}/placement-achievements?category=${category}&sub_category=${subCategory}&year=${selectedYear}&department=${encodeURIComponent(selectedDept)}`
      if (category === 'ACHIEVEMENT' && subCategory === 'STUDENT') {
        url += `&type=${studentType}`
      }
      const res = await fetch(url)
      const json = await res.json()
      setData(json)
    } catch (err) {
      console.error(err)
      setData([])
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchData()
  }, [category, subCategory, selectedDept, selectedYear, studentType])

  return (
    <div className="min-h-screen bg-[#F8FAFC]">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-[#224292] py-20 lg:py-32">
        <div className="absolute inset-0 opacity-10" style={{
          backgroundImage: 'radial-gradient(circle at 20% 50%, #ffc107 1px, transparent 1px), radial-gradient(circle at 80% 20%, #ffc107 1px, transparent 1px)',
          backgroundSize: '60px 60px'
        }} />
        <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
            <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }}>
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#ffc107]/15 border border-[#ffc107]/30 text-[#ffc107] text-[10px] font-black uppercase tracking-widest mb-6">
                    <Sparkles size={14} /> KIOT Excellence Registry
                </div>
                <h1 className="text-4xl md:text-5xl lg:text-7xl font-black text-white leading-tight mb-8">
                    Institutional <span className="text-[#ffc107]">Milestones</span>
                </h1>
                <p className="text-white/60 text-lg max-w-2xl mx-auto font-medium">
                    A comprehensive record of honors, ranks, and technical accomplishments.
                </p>
            </motion.div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-6 -mt-12 relative z-20 pb-32">
        {/* Modern Control Bar */}
        <div className="bg-white p-4 md:p-8 rounded-[2.5rem] shadow-2xl shadow-blue-900/5 border border-slate-100 mb-12">
           <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 items-center">
              
              {/* Category Switcher */}
              <div className="flex bg-slate-50 p-1.5 rounded-2xl border border-slate-100">
                {['AWARD', 'ACHIEVEMENT'].map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setCategory(cat)}
                    className={`flex-1 py-3 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all ${
                      category === cat
                        ? 'bg-[#224292] text-white shadow-lg'
                        : 'text-[#64779F] hover:bg-white'
                    }`}
                  >
                    {cat}S
                  </button>
                ))}
              </div>

              {/* Department Dropdown */}
              <div className="relative group">
                 <select 
                   value={selectedDept}
                   onChange={e => setSelectedDept(e.target.value)}
                   className="w-full pl-12 pr-6 py-4 bg-slate-50 border border-slate-100 rounded-2xl outline-none focus:border-[#224292] appearance-none font-bold text-[#224292] text-xs uppercase tracking-wider"
                 >
                   {DEPARTMENTS.map(d => <option key={d} value={d}>{d}</option>)}
                 </select>
                 <Users className="absolute left-4 top-1/2 -translate-y-1/2 text-[#A9B1C3]" size={18} />
                 <ChevronRight className="absolute right-4 top-1/2 -translate-y-1/2 text-[#A9B1C3] rotate-90" size={16} />
              </div>

              {/* Year Dropdown */}
              <div className="relative group">
                 <select 
                   value={selectedYear}
                   onChange={e => setSelectedYear(e.target.value)}
                   className="w-full pl-12 pr-6 py-4 bg-slate-50 border border-slate-100 rounded-2xl outline-none focus:border-[#224292] appearance-none font-bold text-[#224292] text-xs uppercase tracking-wider"
                 >
                   {years.map(y => <option key={y} value={y}>{y}</option>)}
                 </select>
                 <Clock className="absolute left-4 top-1/2 -translate-y-1/2 text-[#A9B1C3]" size={18} />
                 <ChevronRight className="absolute right-4 top-1/2 -translate-y-1/2 text-[#A9B1C3] rotate-90" size={16} />
              </div>

              {/* Sub-Category Switcher */}
              <div className="flex bg-slate-50 p-1.5 rounded-2xl border border-slate-100">
                {['STUDENT', 'FACULTY'].map((sub) => (
                  <button
                    key={sub}
                    onClick={() => setSubCategory(sub)}
                    className={`flex-1 py-3 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all ${
                      subCategory === sub
                        ? 'bg-[#ffc107] text-[#224292] shadow-lg shadow-[#ffc107]/20'
                        : 'text-[#64779F] hover:bg-white'
                    }`}
                  >
                    {sub}
                  </button>
                ))}
              </div>
           </div>

           {/* Student Role Toggle (Only for Achievements) */}
           <AnimatePresence>
             {category === 'ACHIEVEMENT' && subCategory === 'STUDENT' && (
               <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="pt-6 mt-6 border-t border-slate-50 flex items-center gap-4">
                  <span className="text-[10px] font-black text-[#64779F] uppercase tracking-widest mr-2">Filter Type:</span>
                  <div className="flex gap-2">
                    {['RANK', 'CONTEST'].map(type => (
                      <button key={type} onClick={() => setStudentType(type)} className={`px-6 py-2 rounded-full text-[10px] font-black uppercase tracking-widest border transition-all ${studentType === type ? 'bg-[#224292] text-white border-[#224292]' : 'bg-white text-slate-400 border-slate-100 hover:border-slate-300'}`}>
                        {type}
                      </button>
                    ))}
                  </div>
               </motion.div>
             )}
           </AnimatePresence>
        </div>

        {/* Content Display */}
        {loading ? (
          <div className="flex flex-col items-center justify-center py-40 gap-4">
             <Loader2 size={40} className="animate-spin text-[#224292]" />
             <p className="font-black text-[#224292]/40 text-xs uppercase tracking-[0.2em] animate-pulse">Retrieving Hall of Fame Records...</p>
          </div>
        ) : data.length === 0 ? (
          <div className="bg-white rounded-[3rem] p-32 text-center border border-slate-100 shadow-sm relative overflow-hidden">
             <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'radial-gradient(#224292 1px, transparent 1px)', backgroundSize: '20px 20px' }} />
             <FileText size={64} className="mx-auto text-slate-100 mb-6" />
             <h3 className="text-2xl font-black text-[#224292] mb-2 uppercase tracking-tight">No Records Found</h3>
             <p className="text-[#64779F] font-bold text-sm italic">"Excellence is not a destination, it's a journey. Currently searching this sector."</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-2">
             {data.map((item, idx) => (
               <motion.div
                 key={item.id}
                 initial={{ opacity: 0, y: 20 }}
                 whileInView={{ opacity: 1, y: 0 }}
                 viewport={{ once: true }}
                 transition={{ delay: idx * 0.05 }}
                 className="group bg-white rounded-[2.5rem] p-10 border border-slate-100 shadow-sm hover:shadow-2xl hover:border-[#ffc107]/30 transition-all h-full flex flex-col relative"
               >
                 <div className="flex items-center justify-between mb-8">
                    <span className="px-4 py-1.5 rounded-lg bg-[#224292]/5 text-[#224292] text-[9px] font-black uppercase tracking-[0.15em]">
                       {item.department_name}
                    </span>
                    <div className="h-10 w-10 bg-amber-50 rounded-xl flex items-center justify-center text-amber-500 shadow-sm">
                       {category === 'AWARD' ? <Award size={20} /> : <Trophy size={20} />}
                    </div>
                 </div>

                 {category === 'AWARD' ? (
                   <>
                     <div className="h-14 w-1 bg-gradient-to-b from-[#ffc107] to-amber-600 rounded-full mb-8" />
                     <h3 className="text-2xl font-black text-[#224292] mb-4 leading-tight uppercase tracking-tight">{item.award_name}</h3>
                     <p className="text-sm font-bold text-[#64779F]/70 italic mb-10 group-hover:text-[#224292]/80 transition-colors">Distinguished recognition awarded for exceptional performance and technical leadership.</p>
                     <div className="mt-auto pt-8 border-t border-slate-50 flex items-center gap-4">
                        <div className="h-12 w-12 bg-slate-50 rounded-2xl flex items-center justify-center text-[#A9B1C3] group-hover:bg-[#224292] group-hover:text-white transition-all">
                           <Users size={20} />
                        </div>
                        <div>
                           <p className="text-[8px] font-black text-[#64779F] uppercase tracking-widest opacity-60">Recipient</p>
                           <p className="text-sm font-black text-[#224292] uppercase">{item.student_name || item.faculty_name}</p>
                        </div>
                     </div>
                   </>
                 ) : subCategory === 'FACULTY' ? (
                   <>
                     <div className="absolute top-0 right-0 p-8 text-[#224292]/5 opacity-0 group-hover:opacity-100 transition-opacity">
                        <Star size={40} />
                     </div>
                     <h3 className="text-2xl font-black text-[#224292] mb-8 leading-tight group-hover:text-amber-600 transition-colors uppercase tracking-tight">{item.description}</h3>
                     <div className="mt-auto space-y-4 pt-8 border-t border-slate-50">
                        <div className="p-6 bg-slate-50 rounded-[2rem] border border-transparent group-hover:border-blue-100 transition-all">
                           <p className="text-[10px] font-black text-[#64779F] uppercase mb-2 tracking-widest">Milestone Context</p>
                           <p className="text-sm font-bold text-[#224292] leading-relaxed italic opacity-80">Acknowledged for substantial contribution to institutional growth and domain expertise.</p>
                        </div>
                     </div>
                   </>
                 ) : studentType === 'RANK' ? (
                    <>
                       <div className="flex items-baseline gap-2 mb-2">
                          <h3 className="text-[3.5rem] font-black text-[#224292] tracking-tighter leading-none group-hover:text-[#ffc107] transition-colors">{item.university_rank}</h3>
                          <span className="text-sm font-black text-slate-400 uppercase tracking-widest">RANK</span>
                       </div>
                       <p className="text-amber-600 font-black text-[9px] uppercase tracking-[0.2em] mb-8 px-4 py-1.5 bg-amber-50 rounded-full inline-block border border-amber-100">University Premier</p>
                       <div className="space-y-4 mt-auto">
                          <div className="flex justify-between items-center py-3 border-b border-slate-50">
                             <span className="font-black text-[#64779F] uppercase text-[9px] tracking-widest">Candidate</span>
                             <span className="font-black text-[#224292] uppercase text-xs">{item.name}</span>
                          </div>
                          <div className="flex justify-between items-center py-3 border-b border-slate-50">
                             <span className="font-black text-[#64779F] uppercase text-[9px] tracking-widest">Evaluation</span>
                             <span className="font-black text-emerald-600 text-sm">{item.cgpa} <span className="text-[10px] opacity-60">CGPA</span></span>
                          </div>
                       </div>
                    </>
                 ) : (
                   <>
                     <div className="h-14 w-14 bg-blue-50 text-blue-600 rounded-3xl flex items-center justify-center mb-8 shadow-sm group-hover:bg-[#224292] group-hover:text-white transition-all">
                        <FileText size={28} />
                     </div>
                     <h3 className="text-2xl font-black text-[#224292] mb-4 uppercase tracking-tight">Contest Honor</h3>
                     <p className="text-sm font-bold text-[#64779F]/70 mb-10 italic leading-relaxed">Meritorious recognition achieved in high-level technical symposium / competition.</p>
                     <div className="mt-auto pt-8 border-t border-slate-50 flex justify-end">
                        {item.image_url && (
                          <a href={item.image_url} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 px-8 py-3.5 bg-[#224292] text-white rounded-2xl text-[10px] font-black uppercase tracking-widest shadow-xl shadow-blue-900/10 hover:bg-[#224292] hover:scale-105 active:scale-95 transition-all">
                             View Certificate <ExternalLink size={14} />
                          </a>
                        )}
                     </div>
                   </>
                 )}
               </motion.div>
             ))}
          </div>
        )}
      </div>
    </div>
  )
}

export default Achievements
