import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useNavigate } from 'react-router-dom'
import { 
  Users,
  CheckCircle2, 
  ArrowRight, 
  Download, 
  MessageCircle, 
  ShieldCheck, 
  GraduationCap, 
  Clock, 
  FileText, 
  X,
  CreditCard,
  Trophy,
  ChevronDown,
  Calendar,
  Send,
  Star,
  Award,
  Briefcase,
  Globe
} from 'lucide-react'
import logo from '../../assets/main/logo.webp'
import campusImage from '../../assets/main/indian_college_students_campus.webp'

// ─── Data Construction ────────────────────────────────────────────────────────

const ADMISSION_STEPS = [
  { 
    id: 1, 
    title: 'Choose Program', 
    desc: 'Explore our UG & PG engineering courses that align with your career goals.', 
    icon: GraduationCap 
  },
  { 
    id: 2, 
    title: 'Check Eligibility', 
    desc: 'Verify if you meet the academic criteria for your selected program.', 
    icon: CheckCircle2 
  },
  { 
    id: 3, 
    title: 'Fill Application', 
    desc: 'Complete the online application form with your personal and academic details.', 
    icon: FileText 
  },
  { 
    id: 4, 
    title: 'Upload Documents', 
    desc: 'Upload scanned copies of required certificates and identification proof.', 
    icon: CreditCard 
  },
  { 
    id: 5, 
    title: 'Confirm Admission', 
    desc: 'Pay the processing fee and receive your provisional admission letter.', 
    icon: Trophy 
  }
]

// ─── Main Component ──────────────────────────────────────────────────────────

const AdmissionsPage = () => {
  const navigate = useNavigate()
  const [showApplyModal, setShowApplyModal] = useState(false)
  const [formSubmitted, setFormSubmitted] = useState(false)
  const [activeProgramTab, setActiveProgramTab] = useState('ug')

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '')
      if (hash === 'Apply') {
        setShowApplyModal(true)
      } else if (hash) {
        const el = document.getElementById(hash)
        if (el) {
          const offset = 120
          const elementPosition = el.getBoundingClientRect().top + window.pageYOffset
          window.scrollTo({ top: elementPosition - offset, behavior: 'smooth' })
        }
      }
    }
    
    handleHashChange()
    window.addEventListener('hashchange', handleHashChange)
    return () => window.removeEventListener('hashchange', handleHashChange)
  }, [])

  const openWhatsApp = () => {
    const msg = encodeURIComponent("Hello, I would like to enquire about admissions for 2026–27 at Knowledge Institute of Technology. Please share details about courses, eligibility, fees, and the application process.");
    window.open(`https://wa.me/919894701234?text=${msg}`, '_blank');
  }

  return (
    <div className="min-h-screen bg-[#FDFEFE] font-graphik text-[16px] text-[#333333] leading-[1.8] pb-10 selection:bg-[#ffc107]/30">
      
      {/* ─── HERO SECTION ─── */}
      <section className="relative h-[60vh] flex items-center overflow-hidden bg-[#0A1A3F]">
        <div className="absolute inset-0 z-0">
          <img 
            src={campusImage} 
            className="w-full h-full object-cover opacity-40 transition-opacity duration-1000 scale-105" 
            alt="KIOT Admissions" 
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#18357a]/95 via-[#18357a]/80 to-[#18357a]/40" />
        </div>

        <div className="max-w-[1400px] mx-auto px-6 sm:px-10 lg:pl-12 lg:pr-20 relative z-10 w-full">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex flex-wrap items-center gap-4 mb-6">
              <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-[#ffc107] text-[#18357a] font-bold text-[10px] uppercase tracking-widest shadow-2xl shadow-[#ffc107]/20">
                <Calendar size={12} className="animate-pulse" /> Admission Portal 2026-27
              </div>
            </div>
            
            <h1 className="text-3xl md:text-5xl lg:text-5xl font-bold text-white leading-tight tracking-tighter mb-8 max-w-5xl uppercase">
              SHAPE YOUR FUTURE AT <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ffc107] via-[#fff3cc] to-[#ffc107] pr-4">KNOWLEDGE INSTITUTE OF TECHNOLOGY</span>
            </h1>

            <div className="flex flex-wrap items-center gap-4">
              <button 
                onClick={() => navigate('/admissions/ug-registration')}
                className="group inline-flex items-center gap-3 px-8 py-3.5 bg-[#ffc107] text-[#18357a] rounded-full font-bold text-[11px] uppercase tracking-[3px] hover:bg-white transition-all transform hover:scale-105 shadow-2xl shadow-[#ffc107]/30"
              >
                UG Registration
              </button>
              <button 
                onClick={() => navigate('/admissions/pg-registration')}
                className="group inline-flex items-center gap-3 px-8 py-3.5 bg-white/10 backdrop-blur-md border border-white/20 text-white rounded-full font-bold text-[11px] uppercase tracking-[3px] hover:bg-white hover:text-[#18357a] transition-all transform hover:scale-105 shadow-2xl"
              >
                PG Registration
              </button>
              <button onClick={openWhatsApp} className="flex items-center gap-3 px-10 py-4 bg-[#18357a]/40 backdrop-blur-md border border-white/10 text-white rounded-full font-bold text-[11px] uppercase tracking-[3px] hover:bg-[#ffc107] hover:text-[#18357a] transition-all shadow-xl">
                <MessageCircle size={18} /> Support Desk
              </button>
            </div>
          </motion.div>
        </div>
      </section>
      
      {/* ─── OVERVIEW SECTION ─── */}
      <section id="Overview" className="py-16 md:py-24 relative overflow-hidden bg-white">
         <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-20">
            <div className="grid lg:grid-cols-2 gap-10 lg:gap-24 items-center">
               <motion.div
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
               >
                 <div className="inline-block px-5 py-2 rounded-full bg-[#18357a]/5 text-[#18357a] font-bold text-[10px] uppercase tracking-[3px] mb-8 border border-[#18357a]/10">
                    Admission Overview
                 </div>
                 <h2 className="text-4xl md:text-5xl font-bold text-black uppercase leading-tight tracking-tighter mb-10 pl-10 border-l-8 border-[#ffc107]">
                    YOUR FUTURE <span className="text-[#ffc107]">STARTS HERE</span>
                 </h2>
                 <p className="text-black font-semibold text-lg mb-12 leading-[1.8] max-w-xl text-justify">
                   At Knowledge Institute of Technology, we go beyond traditional learning to shape industry-ready professionals. Our admission process is designed to identify passionate students and provide them with the right opportunities.
                 </p>
                 
                 <div className="flex flex-wrap items-center gap-6">
                    <div className="space-y-3">
                        <motion.button 
                        whileHover={{ scale: 1.05, y: -2 }}
                        whileTap={{ scale: 0.98 }}
                        onClick={() => document.getElementById('WhyChoose').scrollIntoView({ behavior: 'smooth' })}
                        className="group inline-flex items-center gap-4 px-10 py-5 bg-[#18357a] text-white rounded-full font-bold text-[11px] uppercase tracking-[3px] shadow-2xl shadow-blue-900/30 hover:bg-[#ffc107] hover:text-[#18357a] transition-all"
                        >
                        Explore KIOT Advantage
                        </motion.button>
                        <p className="text-[10px] font-semibold text-red-600 uppercase tracking-widest pl-4 animate-pulse">
                            ● Limited seats available for 2026-27
                        </p>
                    </div>
                 </div>
               </motion.div>

               <motion.div 
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                  className="relative group lg:mt-0 mt-6"
               >
                  <div className="relative z-10 rounded-[4rem] bg-white p-5 shadow-[0_50px_100px_-20px_rgba(24,53,122,0.15)] border border-slate-100 overflow-hidden">
                     <img src={campusImage} className="w-full h-auto rounded-[3rem] object-cover hover:scale-105 transition-transform duration-1000" alt="KIOT Campus" />
                  </div>
               </motion.div>
            </div>
         </div>
      </section>

      {/* ─── WHY CHOOSE KIOT SECTION ─── */}
      <section id="WhyChoose" className="py-16 md:py-24 bg-slate-50 relative overflow-hidden">
         <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-20">
            <div className="text-center mb-20 relative">
               <motion.div initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }}>
                  <span className="text-[#18357a] font-bold uppercase text-[10px] tracking-[4px] mb-6 block">The KIOT Advantage</span>
                  <h2 className="text-4xl md:text-5xl lg:text-5xl font-bold text-black uppercase leading-tight tracking-tighter">
                     Why Choose <span className="text-[#ffc107]">Knowledge Institute of Technology</span>
                  </h2>
               </motion.div>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
               {[
                  { title: "100% Placement Assistance", desc: "Dedicated placement cell ensuring top-tier corporate matching.", icon: Briefcase, color: "#18357a" },
                  { title: "NAAC A+ Accredited", desc: "Recognized for academic excellence and institutional quality.", icon: Award, color: "#ffc107" },
                  { title: "Industry-Oriented Curriculum", desc: "Syllabus designed in collaboration with global tech giants.", icon: Globe, color: "#18357a" },
                  { title: "Modern Infrastructure", desc: "State-of-the-art labs and high-tech research centers.", icon: ShieldCheck, color: "#ffc107" },
                  { title: "Experienced Faculty", desc: "Guided by Ph.D. scholars and veteran industry professionals.", icon: Users, color: "#18357a" },
                  { title: "Elite Career Hub", desc: "Access to exclusive internships and global career paths.", icon: Star, color: "#ffc107" }
               ].map((feature, i) => (
                  <motion.div
                    key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                    className="p-10 rounded-[2.5rem] bg-white border border-slate-100 hover:border-[#ffc107]/30 hover:shadow-2xl transition-all group"
                  >
                     <div className="w-14 h-14 rounded-2xl mb-8 flex items-center justify-center transition-transform group-hover:scale-110" style={{ backgroundColor: `${feature.color}15`, color: feature.color }}>
                        <feature.icon size={28} />
                     </div>
                     <h4 className="text-[17px] font-bold text-[#18357a] uppercase mb-4 tracking-tight leading-tight group-hover:text-[#ffc107] transition-colors">{feature.title}</h4>
                     <p className="text-black text-[13px] leading-relaxed font-semibold">{feature.desc}</p>
                  </motion.div>
               ))}
            </div>
         </div>
      </section>

      {/* ─── PROGRAMMES OFFERED SECTION ─── */}
      <section id="Programmes" className="py-16 md:py-24 bg-white">
         <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-20 text-center">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-16">
               <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-black uppercase leading-tight tracking-tighter mb-8">Programmes <span className="text-[#ffc107]">Offered</span></h2>
               <div className="flex flex-wrap items-center justify-center gap-4">
                  <button onClick={() => setActiveProgramTab('ug')} className={`px-10 py-4 rounded-xl font-bold text-[11px] uppercase tracking-[3px] transition-all shadow-xl ${activeProgramTab === 'ug' ? 'bg-[#ffc107] text-[#18357a]' : 'bg-white text-slate-400 border border-slate-200'}`}>Undergraduate</button>
                  <button onClick={() => setActiveProgramTab('pg')} className={`px-10 py-4 rounded-xl font-bold text-[11px] uppercase tracking-[3px] transition-all shadow-xl ${activeProgramTab === 'pg' ? 'bg-[#ffc107] text-[#18357a]' : 'bg-white text-slate-400 border border-slate-200'}`}>Postgraduate</button>
               </div>
            </motion.div>

            <div className="relative min-h-[400px]">
               <AnimatePresence mode="wait">
                  {activeProgramTab === 'ug' ? (
                     <motion.div key="ug" initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: 20 }} className="overflow-hidden rounded-[2.5rem] border border-slate-100 shadow-2xl bg-white">
                        <table className="w-full text-left">
                           <thead>
                              <tr className="bg-[#18357a] text-white">
                                 <th className="hidden md:table-cell px-8 py-6 text-[10px] font-bold uppercase text-center w-24">S.No</th>
                                 <th className="px-8 py-6 text-[10px] font-bold uppercase">Programme Name</th>
                                 <th className="hidden md:table-cell px-8 py-6 text-[10px] font-bold uppercase text-center w-32">Duration</th>
                                 <th className="px-8 py-6 text-[10px] font-bold uppercase text-center w-40">Action</th>
                              </tr>
                           </thead>
                           <tbody className="divide-y divide-slate-50">
                              {[
                                 { name: 'B.E. Computer Science and Engineering', id: 'be-cse' },
                                 { name: 'B.E. Mechanical Engineering', id: 'be-mechanical' },
                                 { name: 'B.E. Electrical and Electronics Engineering', id: 'be-eee' },
                                 { name: 'B.E. Electronics and Communication Engineering', id: 'be-ece' },
                                 { name: 'B.E. Civil Engineering', id: 'be-civil' },
                                 { name: 'B.E. Biomedical Engineering', id: '' },
                                 { name: 'B.Tech. Information Technology', id: 'btech-it' },
                                 { name: 'B.Tech. Artificial Intelligence and Data Science', id: 'btech-aids' },
                                 { name: 'B.Tech. Computer Science and Business Systems', id: 'btech-csbs' }
                              ].map((item, i) => (
                                 <tr key={i} className="group hover:bg-slate-50/50 transition-colors">
                                    <td className="hidden md:table-cell px-8 py-6 text-center text-xs font-bold text-slate-300 group-hover:text-[#18357a]">{i + 1}</td>
                                    <td className="px-8 py-6 font-bold text-[13px] uppercase text-[#18357a]">
                                       <button onClick={() => { window.scrollTo(0, 0); navigate(item.id ? `/academics/course/${item.id}` : '#') }} className="hover:text-[#ffc107] transition-all text-left font-bold">{item.name}</button>
                                    </td>
                                    <td className="hidden md:table-cell px-8 py-6 text-center text-xs font-bold text-slate-400">4 Years</td>
                                    <td className="px-8 py-6 text-center">
                                       <button onClick={() => navigate('/admissions/ug-registration')} className="px-6 py-2 bg-[#ffc107] text-[#18357a] rounded-lg font-bold text-[9px] uppercase tracking-widest hover:bg-[#18357a] hover:text-white transition-all transform hover:scale-105">Apply Now</button>
                                    </td>
                                 </tr>
                              ))}
                           </tbody>
                        </table>
                     </motion.div>
                  ) : (
                     <motion.div key="pg" initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: 20 }} className="overflow-hidden rounded-[2.5rem] border border-slate-100 shadow-2xl bg-white">
                        <table className="w-full text-left">
                           <thead>
                              <tr className="bg-[#18357a] text-white">
                                 <th className="hidden md:table-cell px-8 py-6 text-[10px] font-bold uppercase text-center w-24">S.No</th>
                                 <th className="px-8 py-6 text-[10px] font-bold uppercase">Programme Name</th>
                                 <th className="hidden md:table-cell px-8 py-6 text-[10px] font-bold uppercase text-center w-32">Duration</th>
                                 <th className="px-8 py-6 text-[10px] font-bold uppercase text-center w-40">Action</th>
                              </tr>
                           </thead>
                           <tbody className="divide-y divide-slate-50">
                              {[
                                 { name: 'MBA - GENERAL', id: 'mba-general' },
                                 { name: 'MBA (IEV)', id: 'mba-iev' },
                                 { name: 'MCA', id: 'mca' },
                                 { name: 'M.E. INDUSTRIAL SAFETY ENGINEERING', id: 'me-ise' },
                                 { name: 'M.E. AUTOMOTIVE ELECTRONICS', id: 'me-ae' },
                                 { name: 'M.E. POWER ELECTRONICS AND DRIVES', id: 'me-ped' },
                                 { name: 'M.E. SOFTWARE ENGINEERING', id: 'me-se' }
                              ].map((item, i) => (
                                 <tr key={i} className="group hover:bg-slate-50/50 transition-colors">
                                    <td className="hidden md:table-cell px-8 py-6 text-center text-xs font-bold text-slate-300 group-hover:text-[#18357a]">{i + 1}</td>
                                    <td className="px-8 py-6 font-bold text-[13px] uppercase text-[#18357a]">
                                       <button onClick={() => { window.scrollTo(0, 0); navigate(`/academics/course/${item.id}`) }} className="hover:text-[#ffc107] transition-all text-left font-bold">{item.name}</button>
                                    </td>
                                    <td className="hidden md:table-cell px-8 py-6 text-center text-xs font-bold text-slate-400">2 Years</td>
                                    <td className="px-8 py-6 text-center">
                                       <button onClick={() => navigate('/admissions/pg-registration')} className="px-6 py-2 bg-[#ffc107] text-[#18357a] rounded-lg font-bold text-[9px] uppercase tracking-widest hover:bg-[#18357a] hover:text-white transition-all transform hover:scale-105">Apply Now</button>
                                    </td>
                                 </tr>
                              ))}
                           </tbody>
                        </table>
                     </motion.div>
                  )}
               </AnimatePresence>
            </div>
         </div>
      </section>

      {/* ─── ELIGIBILITY CRITERIA SECTION ─── */}
      <section id="Eligibility" className="py-16 md:py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-20 text-center">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-16">
               <span className="text-[#18357a] font-bold uppercase text-[10px] tracking-[4px] mb-6 block">📘 Qualifications</span>
               <h2 className="text-4xl md:text-5xl lg:text-5xl font-bold text-black uppercase leading-tight tracking-tighter">Eligibility <span className="text-[#ffc107]">Criteria</span></h2>
            </motion.div>
            <div className="grid lg:grid-cols-2 gap-12 text-left">
               <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="bg-white rounded-[3rem] p-10 md:p-14 border border-slate-100 shadow-xl relative group overflow-hidden">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-[#ffc107]/5 rounded-bl-[100px] transition-colors" />
                  <div className="flex items-center gap-4 mb-10">
                     <div className="w-12 h-12 rounded-2xl bg-[#ffc107]/10 flex items-center justify-center text-[#ffc107]"><GraduationCap size={24} /></div>
                     <h4 className="text-[20px] font-bold text-[#18357a] uppercase">UG (B.E / B.Tech)</h4>
                  </div>
                  <ul className="space-y-6">
                     {[
                        "A pass in HSC (Academic / Vocational) with minimum average in PCM.",
                        "OC: 45% average, BC/BCM/MBC/DNC/SC/SCA/ST: 40% average in PCM.",
                        "Accepted Boards: CBSE, ISC, State Board, or any equivalent board."
                     ].map((t, i) => <li key={i} className="flex gap-4 items-start"><CheckCircle2 size={16} className="text-[#ffc107] mt-1 shrink-0" /><p className="text-[14px] font-semibold text-black leading-relaxed">{t}</p></li>)}
                  </ul>
               </motion.div>
               <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="bg-white rounded-[3rem] p-10 md:p-14 border border-slate-100 shadow-xl relative group overflow-hidden">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-[#18357a]/5 rounded-bl-[100px] transition-colors" />
                  <div className="flex items-center gap-4 mb-10">
                     <div className="w-12 h-12 rounded-2xl bg-[#18357a]/10 flex items-center justify-center text-[#18357a]"><Briefcase size={24} /></div>
                     <h4 className="text-[20px] font-bold text-[#18357a] uppercase">PG (M.E / MBA / MCA)</h4>
                  </div>
                  <ul className="space-y-6">
                     {[
                        "M.E: Relevant B.E. / B.Tech. with valid GATE / TANCET score.",
                        "MBA/MCA: Recognized degree with 50% (45% for reserved categories).",
                        "Must have appeared for TANCET or equivalent common entrance tests."
                     ].map((t, i) => <li key={i} className="flex gap-4 items-start"><CheckCircle2 size={16} className="text-[#18357a] mt-1 shrink-0" /><p className="text-[14px] font-semibold text-black leading-relaxed">{t}</p></li>)}
                  </ul>
               </motion.div>
            </div>
        </div>
      </section>

      {/* ─── ADMISSION WORKFLOW SECTION ─── */}
      <section id="Process" className="py-12 md:py-16 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-20 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <div className="inline-flex items-center gap-3 px-6 py-2 rounded-full bg-slate-50 border border-slate-100 shadow-sm mb-6">
               <span className="w-2 h-2 rounded-full bg-[#18357a] animate-pulse" />
               <span className="text-[10px] font-bold text-[#18357a] uppercase tracking-[3px]">Admission Workflow</span>
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-5xl font-bold text-black uppercase leading-tight tracking-tighter">
              Pathway to <span className="text-[#ffc107]">Your Future</span>
            </h2>
          </motion.div>
          
          <div className="relative">
            <div className="grid lg:grid-cols-5 gap-12 lg:gap-4 relative px-4">
              {ADMISSION_STEPS.map((step, i) => (
                <motion.div 
                  key={step.id}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.15, type: "spring", stiffness: 100 }}
                  className="flex flex-col items-center group"
                >
                  <div className="relative mb-8">
                     <motion.div 
                        animate={{ rotate: [45, 55, 45] }}
                        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                        className="w-24 h-24 border-2 border-[#D5E2F4] rounded-[2rem] flex items-center justify-center bg-white relative group-hover:border-[#ffc107] transition-all duration-500 shadow-xl shadow-blue-900/5 group-hover:shadow-[#ffc107]/20"
                     >
                        <div className="w-16 h-16 rotate-[-45deg] flex flex-col items-center justify-center text-[#18357a]">
                           <span className="text-[10px] font-bold opacity-30 group-hover:opacity-100 transition-opacity mb-1 block">0{i+1}</span>
                           <step.icon size={20} className="group-hover:scale-110 group-hover:text-[#ffc107] transition-all duration-500" />
                        </div>
                     </motion.div>
                  </div>

                  <div className="text-center px-4">
                    <h4 className="text-[14px] font-bold text-[#18357a] uppercase mb-3 tracking-tighter leading-none pr-1">
                       {step.title}
                    </h4>
                    <p className="text-black text-[11px] leading-[1.6] font-semibold max-w-[150px] mx-auto transition-opacity duration-500 group-hover:opacity-90">
                      {step.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── DOCUMENTS REQUIRED SECTION ─── */}
      <section id="Documents" className="py-12 md:py-16 bg-slate-50 overflow-hidden">
          <div className="max-w-4xl mx-auto px-6 sm:px-10">
             <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-center mb-16"
             >
                <span className="text-[#18357a] font-bold uppercase text-[10px] tracking-[4px] mb-6 block">📄 Checklist</span>
                <h2 className="text-4xl md:text-5xl font-bold text-black uppercase leading-tight tracking-tighter mb-8">Required <span className="text-[#ffc107]">Documents</span></h2>
                <p className="text-black font-semibold text-sm leading-relaxed max-w-2xl mx-auto">Ensure you have scanned copies of the following documents ready before starting your registration for a smooth application process.</p>
             </motion.div>

             <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                   "10th & 12th Marksheet",
                   "Transfer Certificate (TC)",
                   "Community Certificate",
                   "Permanent Residence Proof",
                   "Entrance Exam Scorecard",
                   "Passport Size Photographs"
                ].map((doc, i) => (
                   <motion.div 
                     key={i} 
                     initial={{ opacity: 0, scale: 0.95 }}
                     whileInView={{ opacity: 1, scale: 1 }}
                     viewport={{ once: true }}
                     transition={{ delay: i * 0.05 }}
                     className="flex items-center gap-4 p-6 rounded-2xl bg-white border border-slate-100 hover:border-[#ffc107]/30 hover:shadow-xl transition-all"
                   >
                      <div className="w-10 h-10 rounded-xl bg-slate-50 flex items-center justify-center text-[#ffc107] shadow-sm">
                         <FileText size={18} />
                      </div>
                      <span className="text-[12px] font-bold text-[#18357a] uppercase tracking-tight">{doc}</span>
                   </motion.div>
                ))}
             </div>
          </div>
       </section>

      {/* ─── FINAL CTA SECTION ─── */}
      <section className="py-10 mb-10 px-6">
         <div className="max-w-5xl mx-auto">
            <motion.div 
               initial={{ opacity: 0, scale: 0.95 }}
               whileInView={{ opacity: 1, scale: 1 }}
               viewport={{ once: true }}
               className="bg-[#18357a] rounded-[2.5rem] p-8 md:p-10 relative overflow-hidden group text-center shadow-2xl"
            >
               <div className="absolute inset-0 bg-gradient-to-br from-[#18357a] via-[#1d3c8c] to-[#0A1A3F]" />
               <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-blue-400 rounded-full blur-[150px] opacity-10 -z-10" />
               
               <div className="relative z-10">
                  <h3 className="text-2xl md:text-4xl font-bold text-white uppercase leading-tight tracking-tighter mb-8">
                     Ready to <span className="text-[#ffc107]">Apply?</span> <br/>
                     Start Your Journey Today
                  </h3>
                  
                  <div className="flex flex-wrap items-center justify-center gap-4">
                      <button onClick={() => setShowApplyModal(true)} className="px-10 py-4 bg-[#ffc107] text-[#18357a] rounded-xl font-bold text-[10px] uppercase tracking-[3px] hover:bg-white transition-all shadow-xl shadow-[#ffc107]/20 transform hover:scale-105">
                         Apply Online Now
                      </button>
                      <button onClick={openWhatsApp} className="px-10 py-4 bg-white/10 backdrop-blur-xl border border-white/20 text-white rounded-xl font-bold text-[10px] uppercase tracking-[3px] hover:bg-white hover:text-[#18357a] transition-all transform hover:scale-105">
                         Chat on WhatsApp
                      </button>
                  </div>

                  <p className="mt-8 text-white/50 font-bold text-[9px] uppercase tracking-[2px]">
                     Institution Code: 2653 • AICTE Approved • NBA Accredited
                  </p>
               </div>
            </motion.div>
         </div>
      </section>

      {/* ─── STICKY APPLY BAR (MOBILE) ─── */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-slate-100 p-4 z-[200] flex gap-3 shadow-2xl">
         <button onClick={openWhatsApp} className="flex-1 py-4 bg-[#18357a]/5 text-[#18357a] border border-[#18357a]/10 rounded-xl font-bold text-[10px] uppercase tracking-widest flex items-center justify-center gap-2">
            <MessageCircle size={18} /> WhatsApp
         </button>
         <button onClick={() => setShowApplyModal(true)} className="flex-[2] py-4 bg-[#18357a] text-white rounded-xl font-bold text-[10px] uppercase tracking-widest">
            Apply Online Now
         </button>
      </div>

      {/* ─── APPLY MODAL ─── */}
      <AnimatePresence>
        {showApplyModal && (
          <div className="fixed inset-0 z-[1000] flex items-center justify-center p-4">
            <motion.div 
              initial={{ opacity: 0 }} 
              animate={{ opacity: 1 }} 
              exit={{ opacity: 0 }}
              onClick={() => setShowApplyModal(false)}
              className="absolute inset-0 bg-[#0A1A3F]/80 backdrop-blur-md" 
            />
            
            <motion.div 
              initial={{ scale: 0.9, opacity: 0, y: 30 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 30 }}
              className="relative w-full max-w-xl bg-white rounded-[2rem] shadow-2xl overflow-hidden flex flex-col"
            >
              <div className="relative h-44 bg-[#ffc107] overflow-hidden shrink-0">
                  <svg className="absolute inset-0 w-full h-full text-white fill-current pointer-events-none" viewBox="0 0 1000 100" preserveAspectRatio="none">
                    <path d="M600 0C700 40 900 60 1000 100V0H600Z" className="opacity-20" />
                    <path d="M0 100C400 100 600 0 1000 0V100H0Z" />
                  </svg>
                  
                  <div className="absolute inset-0 p-10 flex flex-col justify-center">
                      <img src={logo} alt="KIOT" className="h-10 w-auto object-contain mb-4 filter brightness-0" />
                      <h2 className="text-3xl font-bold text-[#18357a] uppercase tracking-tighter leading-none">Admission 2026</h2>
                      <p className="text-[#18357a]/60 font-bold text-[10px] uppercase tracking-[3px] mt-2">Registration Portal</p>
                  </div>
                  <button 
                    onClick={() => setShowApplyModal(false)}
                    className="absolute top-6 right-6 w-10 h-10 rounded-xl bg-[#18357a]/10 flex items-center justify-center text-[#18357a] hover:bg-[#18357a] hover:text-white transition-all z-20"
                  >
                    <X size={20} />
                  </button>
              </div>

              <div className="p-10 pb-16 flex-1">
                {formSubmitted ? (
                  <div className="text-center py-10">
                     <div className="w-20 h-20 bg-slate-50 rounded-full flex items-center justify-center mx-auto mb-6 shadow-inner">
                        <CheckCircle2 size={40} className="text-[#18357a]" />
                     </div>
                     <h3 className="text-2xl font-bold text-[#18357a] uppercase mb-4 tracking-tighter">Success!</h3>
                     <p className="text-slate-500 font-semibold text-sm leading-relaxed max-w-[280px] mx-auto">Your application request has been received. Our team will contact you within 24 hours.</p>
                     <button onClick={() => setShowApplyModal(false)} className="mt-10 px-8 py-3 bg-[#18357a] text-white rounded-xl text-[10px] font-bold uppercase tracking-widest active:scale-95 transition-all">Close Window</button>
                  </div>
                ) : (
                  <form onSubmit={(e) => { e.preventDefault(); setFormSubmitted(true); }} className="space-y-6">
                     <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-1.5">
                           <label className="text-[9px] font-bold text-slate-400 uppercase tracking-widest flex items-center gap-2">Full Name <div className="w-1 h-1 rounded-full bg-[#ffc107]" /></label>
                           <input required type="text" placeholder="John Doe" className="w-full px-5 py-4 bg-slate-50 border border-slate-100 rounded-xl text-sm font-semibold focus:outline-none focus:border-[#18357a] transition-all" />
                        </div>
                        <div className="space-y-1.5">
                           <label className="text-[9px] font-bold text-slate-400 uppercase tracking-widest flex items-center gap-2">Phone Number <div className="w-1 h-1 rounded-full bg-[#ffc107]" /></label>
                           <input required type="tel" placeholder="+91 99XXX XXXXX" className="w-full px-5 py-4 bg-slate-50 border border-slate-100 rounded-xl text-sm font-semibold focus:outline-none focus:border-[#18357a] transition-all" />
                        </div>
                     </div>
                     <div className="space-y-1.5">
                        <label className="text-[9px] font-bold text-slate-400 uppercase tracking-widest flex items-center gap-2">Email Address <div className="w-1 h-1 rounded-full bg-[#ffc107]" /></label>
                        <input required type="email" placeholder="john@example.com" className="w-full px-5 py-4 bg-slate-50 border border-slate-100 rounded-xl text-sm font-semibold focus:outline-none focus:border-[#18357a] transition-all" />
                     </div>
                     <div className="space-y-1.5">
                        <label className="text-[9px] font-bold text-slate-400 uppercase tracking-widest flex items-center gap-2">Target Program <div className="w-1 h-1 rounded-full bg-[#ffc107]" /></label>
                        <div className="relative">
                           <select className="w-full px-5 py-4 bg-slate-50 border border-slate-100 rounded-xl text-[11px] font-bold uppercase tracking-widest text-[#18357a] appearance-none focus:outline-none focus:border-[#18357a]">
                              <option>B.E. Computer Science</option>
                              <option>B.E. Mechanical Engg</option>
                              <option>B.E. ECE</option>
                              <option>B.Tech IT</option>
                              <option>B.Tech AI & DS</option>
                              <option>MBA / MCA</option>
                           </select>
                           <ChevronDown className="absolute right-5 top-1/2 -translate-y-1/2 text-slate-400" size={16} />
                        </div>
                     </div>
                     <button type="submit" className="w-full py-5 bg-[#18357a] text-white rounded-xl font-bold text-[12px] uppercase tracking-[3px] hover:bg-[#1d3a82] transition-all shadow-xl shadow-blue-900/10 active:scale-95 flex items-center justify-center gap-3">
                        Submit Application <Send size={18} />
                     </button>
                  </form>
                )}
              </div>

              <div className="relative h-20 bg-[#18357a] overflow-hidden shrink-0">
                  <svg className="absolute inset-0 w-full h-full text-white fill-current pointer-events-none" viewBox="0 0 1000 100" preserveAspectRatio="none">
                    <path d="M0 0C400 0 600 100 1000 100V0H0Z" />
                    <path d="M400 100C300 60 100 40 0 0V100H400Z" className="opacity-10" />
                  </svg>
                  <div className="absolute inset-0 flex items-center justify-center px-10">
                     <p className="text-white text-[9px] font-bold uppercase tracking-[2px] mt-4 relative z-10">Confidence Through Knowledge</p>
                  </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default AdmissionsPage
