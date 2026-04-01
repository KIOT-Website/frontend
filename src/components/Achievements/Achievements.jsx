import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Trophy, Medal, Award, Clock, FileText, ExternalLink, Loader2, Sparkles, Star, ArrowLeft, Users, ChevronRight } from 'lucide-react'

const API_BASE = 'http://127.0.0.1:8000'

const Achievements = () => {
  const [view, setView] = useState('HUB') // HUB, YEARS, RECORDS
  const [category, setCategory] = useState('AWARD') // AWARD, ACHIEVEMENT
  const [subCategory, setSubCategory] = useState('STUDENT')
  const [studentType, setStudentType] = useState('RANK')
  const [years, setYears] = useState([])
  const [selectedYear, setSelectedYear] = useState(null)
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(false)

  const fetchYears = async (cat) => {
    setLoading(true)
    try {
      const res = await fetch(`${API_BASE}/placement-achievements/years?category=${cat}`)
      const json = await res.json()
      setYears(json.years || [])
    } catch (err) {
      console.error(err)
    } finally {
      setLoading(false)
    }
  }

  const fetchData = async () => {
    if (!selectedYear) return
    setLoading(true)
    try {
      let url = `${API_BASE}/placement-achievements?category=${category}&sub_category=${subCategory}&year=${selectedYear}`
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
    if (view === 'RECORDS') fetchData()
  }, [view, subCategory, studentType, selectedYear])

  const enterCategory = (cat) => {
    setCategory(cat)
    setSubCategory('STUDENT')
    setStudentType('RANK')
    fetchYears(cat)
    setView('YEARS')
  }

  const enterYear = (yr) => {
    setSelectedYear(yr)
    setView('RECORDS')
  }

  return (
    <div className="min-h-screen bg-[#F8FAFC]">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-[#18357a] py-20 lg:py-28">
        <div className="absolute inset-0 opacity-10" style={{
          backgroundImage: 'radial-gradient(circle at 20% 50%, #ffc107 1px, transparent 1px), radial-gradient(circle at 80% 20%, #ffc107 1px, transparent 1px)',
          backgroundSize: '60px 60px'
        }} />
        <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#ffc107]/15 border border-[#ffc107]/30 text-[#ffc107] text-xs font-black uppercase tracking-widest mb-6">
                    <Sparkles size={14} /> KIOT Hall of Fame
                </div>
                <h1 className="text-4xl md:text-5xl lg:text-7xl font-black text-white leading-tight mb-8">
                    Celebrating <span className="text-[#ffc107]">Excellence</span>
                </h1>
                <p className="text-white/60 text-lg max-w-2xl mx-auto font-medium">
                    A record of engineering milestones and outstanding accomplishments.
                </p>
            </motion.div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-6 -mt-12 relative z-20 pb-32">
        <AnimatePresence mode="wait">
          {view === 'HUB' && (
            <motion.div key="hub" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} className="grid md:grid-cols-2 gap-8 pt-8">
               <button onClick={() => enterCategory('AWARD')} className="group bg-white p-10 rounded-[3rem] shadow-2xl border border-transparent hover:border-[#ffc107]/20 transition-all text-left relative overflow-hidden">
                  <div className="absolute top-0 right-0 p-8 text-[#18357a]/5 group-hover:text-[#ffc107]/10 transition-colors">
                    <Award size={120} strokeWidth={1} />
                  </div>
                  <div className="h-16 w-16 bg-[#ffc107]/10 text-[#ffc107] rounded-2xl flex items-center justify-center mb-8">
                    <Award size={32} />
                  </div>
                  <h3 className="text-3xl font-black text-[#18357a] mb-4">Awards</h3>
                  <p className="text-[#64779F] font-bold leading-relaxed mb-8 opacity-80">Recognition for exceptional performance and technical contributions.</p>
                  <div className="inline-flex items-center gap-2 text-[#18357a] font-black uppercase tracking-widest text-xs group-hover:gap-4 transition-all">
                    Browse Recognition <ChevronRight size={16} />
                  </div>
               </button>

               <button onClick={() => enterCategory('ACHIEVEMENT')} className="group bg-white p-10 rounded-[3rem] shadow-2xl border border-transparent hover:border-blue-200 transition-all text-left relative overflow-hidden">
                  <div className="absolute top-0 right-0 p-8 text-[#18357a]/5 group-hover:text-[#18357a]/10 transition-colors">
                    <Trophy size={120} strokeWidth={1} />
                  </div>
                  <div className="h-16 w-16 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center mb-8">
                    <Trophy size={32} />
                  </div>
                  <h3 className="text-3xl font-black text-[#18357a] mb-4">Achievements</h3>
                  <p className="text-[#64779F] font-bold leading-relaxed mb-8 opacity-80">Industry contest wins, faculty milestones, and university ranks.</p>
                  <div className="inline-flex items-center gap-2 text-[#18357a] font-black uppercase tracking-widest text-xs group-hover:gap-4 transition-all">
                    Browse Milestones <ChevronRight size={16} />
                  </div>
               </button>
            </motion.div>
          )}

          {view === 'YEARS' && (
            <motion.div key="years" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="pt-8">
               <button onClick={() => setView('HUB')} className="flex items-center gap-2 text-[#18357a] font-black uppercase tracking-widest text-[10px] mb-8 hover:-translate-x-2 transition-transform">
                 <ArrowLeft size={16} /> Back to Hub
               </button>
               
               <div className="mb-12">
                  <h2 className="text-3xl font-black text-[#18357a] mb-2">{category === 'AWARD' ? 'Award' : 'Achievement'} Folders</h2>
                  <p className="text-[#64779F] font-bold">Select an academic year to view specific records.</p>
               </div>

               {loading ? (
                 <div className="flex justify-center py-24"><Loader2 className="animate-spin text-[#18357a]" size={32} /></div>
               ) : years.length === 0 ? (
                 <div className="bg-white rounded-[2.5rem] p-24 text-center border-2 border-dashed border-gray-100">
                    <Clock size={48} className="mx-auto text-gray-200 mb-4" />
                    <p className="text-gray-400 font-bold uppercase tracking-widest text-xs">No folders found</p>
                 </div>
               ) : (
                 <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
                    {years.map(y => (
                      <button 
                        key={y} 
                        onClick={() => enterYear(y)}
                        className="bg-white p-8 rounded-[2rem] shadow-sm border border-gray-100 hover:shadow-xl hover:-translate-y-2 transition-all group flex flex-col items-center"
                      >
                         <div className="h-14 w-14 bg-slate-50 flex items-center justify-center rounded-2xl mb-4 group-hover:scale-110 transition-transform">
                            <Star size={24} className="text-[#ffc107]" />
                         </div>
                         <span className="text-xl font-black text-[#18357a]">{y}</span>
                         <span className="text-[9px] font-black uppercase tracking-widest text-[#64779F] mt-1 opacity-50">Records</span>
                      </button>
                    ))}
                 </div>
               )}
            </motion.div>
          )}

          {view === 'RECORDS' && (
            <motion.div key="records" initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="pt-8">
               <div className="flex flex-col md:flex-row md:items-center justify-between mb-12 gap-8">
                  <div>
                    <button onClick={() => setView('YEARS')} className="flex items-center gap-2 text-[#18357a] font-black uppercase tracking-widest text-[10px] mb-4 hover:-translate-x-2 transition-transform">
                      <ArrowLeft size={16} /> Change Year
                    </button>
                    <h2 className="text-3xl font-black text-[#18357a] flex items-center gap-3">
                       {category === 'AWARD' ? 'Awards' : 'Achievements'}
                       <span className="px-3 py-1 bg-[#18357a]/5 text-[#18357a] text-sm rounded-lg">{selectedYear}</span>
                    </h2>
                  </div>

                  <div className="flex flex-wrap items-center gap-4 bg-white p-1.5 rounded-2xl shadow-sm border border-gray-100">
                     <button onClick={() => setSubCategory('STUDENT')} className={`px-5 py-2 rounded-xl text-[11px] font-black uppercase tracking-widest transition-all ${subCategory === 'STUDENT' ? 'bg-[#18357a] text-white shadow-lg' : 'text-[#64779F] hover:bg-slate-50'}`}>Student</button>
                     <button onClick={() => setSubCategory('FACULTY')} className={`px-5 py-2 rounded-xl text-[11px] font-black uppercase tracking-widest transition-all ${subCategory === 'FACULTY' ? 'bg-[#18357a] text-white shadow-lg' : 'text-[#64779F] hover:bg-slate-50'}`}>Faculty</button>
                     
                     {category === 'ACHIEVEMENT' && subCategory === 'STUDENT' && (
                       <div className="h-6 w-[2px] bg-gray-100 mx-1" />
                     )}
                     {category === 'ACHIEVEMENT' && subCategory === 'STUDENT' && (
                       <div className="flex gap-2">
                         <button onClick={() => setStudentType('RANK')} className={`px-4 py-2 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all ${studentType === 'RANK' ? 'bg-[#ffc107] text-[#18357a]' : 'text-[#64779F]'}`}>Rank</button>
                         <button onClick={() => setStudentType('CONTEST')} className={`px-4 py-2 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all ${studentType === 'CONTEST' ? 'bg-[#ffc107] text-[#18357a]' : 'text-[#64779F]'}`}>Contest</button>
                       </div>
                     )}
                  </div>
               </div>

               {loading ? (
                  <div className="flex justify-center py-24"><Loader2 className="animate-spin text-[#18357a]" size={32} /></div>
               ) : data.length === 0 ? (
                  <div className="bg-white rounded-[3rem] p-32 text-center border-2 border-dashed border-gray-100">
                     <FileText size={52} className="mx-auto text-gray-200 mb-4 opacity-50" />
                     <h3 className="text-xl font-black text-[#18357a]">No records found</h3>
                     <p className="text-[#64779F] font-bold text-sm">Nothing recorded for this folder yet.</p>
                  </div>
               ) : (
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                     {data.map((item, idx) => (
                       <motion.div
                         key={item.id}
                         initial={{ opacity: 0, y: 20 }}
                         animate={{ opacity: 1, y: 0 }}
                         transition={{ delay: idx * 0.05 }}
                         className="group bg-white rounded-[2.5rem] p-8 border border-gray-100 shadow-sm hover:shadow-2xl transition-all h-full flex flex-col"
                       >
                         <div className="flex items-center justify-between mb-8">
                            <span className="px-4 py-1.5 rounded-lg bg-[#18357a]/5 text-[#18357a] text-[10px] font-black uppercase tracking-widest">
                               {item.department_name}
                            </span>
                            <div className="h-10 w-10 bg-amber-50 rounded-xl flex items-center justify-center text-amber-500">
                               {category === 'AWARD' ? <Award size={20} /> : <Trophy size={20} />}
                            </div>
                         </div>

                         {category === 'AWARD' ? (
                           <>
                             <div className="h-12 w-1 bg-[#ffc107] rounded-full mb-6" />
                             <h3 className="text-2xl font-black text-[#18357a] mb-3 leading-tight">{item.award_name}</h3>
                             <p className="text-sm font-bold text-[#64779F]/70 italic mb-8">"{item.award_name} awarded for excellence in honors and technical performance."</p>
                             <div className="mt-auto pt-6 border-t border-slate-50 flex items-center gap-3">
                                <div className="h-10 w-10 bg-slate-50 rounded-full flex items-center justify-center text-[#A9B1C3]">
                                   <Users size={18} />
                                </div>
                                <div>
                                   <p className="text-[8px] font-black text-[#64779F] uppercase tracking-widest">Honoree</p>
                                   <p className="text-sm font-black text-[#18357a]">{item.student_name || item.faculty_name}</p>
                                </div>
                             </div>
                           </>
                         ) : subCategory === 'FACULTY' ? (
                           <>
                             <h3 className="text-2xl font-black text-[#18357a] mb-6 leading-tight group-hover:text-blue-700 transition-colors uppercase tracking-tight">{item.description}</h3>
                             <div className="mt-auto space-y-4 pt-6 border-t border-slate-50">
                                <div className="p-5 bg-slate-50 rounded-[2rem] border-2 border-transparent group-hover:border-[#ffc107] transition-all">
                                   <p className="text-[10px] font-black text-[#64779F] uppercase mb-2">Milestone Detail</p>
                                   <p className="text-sm font-bold text-[#18357a] leading-relaxed italic">Recognition for distinguished academic and research field activities.</p>
                                </div>
                             </div>
                           </>
                         ) : studentType === 'RANK' ? (
                            <>
                               <h3 className="text-3xl font-black text-[#18357a] mb-2">{item.university_rank}</h3>
                               <p className="text-amber-600 font-extrabold text-[10px] uppercase tracking-widest mb-6 px-3 py-1 bg-amber-50 rounded-full inline-block">University Topper</p>
                               <div className="space-y-3">
                                  <div className="flex justify-between items-center text-sm">
                                     <span className="font-black text-[#64779F] uppercase text-[9px]">Name</span>
                                     <span className="font-black text-[#18357a]">{item.name}</span>
                                  </div>
                                  <div className="flex justify-between items-center text-sm">
                                     <span className="font-black text-[#64779F] uppercase text-[9px]">CGPA</span>
                                     <span className="font-black text-teal-600">{item.cgpa}</span>
                                  </div>
                               </div>
                            </>
                         ) : (
                           <>
                             <div className="h-12 w-12 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center mb-6">
                                <FileText size={24} />
                             </div>
                             <h3 className="text-xl font-black text-[#18357a] mb-2">Contest Recognition</h3>
                             <p className="text-sm font-bold text-[#64779F]/70 mb-8 italic">Distinctive achievement certificate earned in technical competition.</p>
                             <div className="mt-auto pt-6 border-t border-slate-50 flex justify-end">
                                {item.image_url && (
                                  <a href={item.image_url} target="_blank" className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-xl text-[10px] font-black uppercase tracking-widest shadow-lg shadow-blue-600/20">
                                     PDF <ExternalLink size={14} />
                                  </a>
                                )}
                             </div>
                           </>
                         )}
                       </motion.div>
                     ))}
                  </div>
               )}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  )
}

export default Achievements
