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
      
      {/* ─── NEW HIGH-FIDELITY HERO BANNER ─── */}
      <section className="relative overflow-hidden bg-[#0A1A3F] min-h-[450px] lg:h-[85vh] flex items-start pt-4 lg:pt-8">
        {/* Background Image / Building View */}
        <div className="absolute top-0 right-0 w-full lg:w-3/5 h-full z-0 overflow-hidden">
          <img 
            src={campusImage} 
            className="w-full h-full object-cover lg:object-[25%_center] opacity-60 lg:opacity-100" 
            alt="KIOT Campus" 
          />
          {/* Wave Transition (Simulating the image's curve) */}
          <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-[#0A1A3F] to-transparent hidden lg:block" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0A1A3F] via-[#0A1A3F]/80 lg:via-transparent to-transparent" />
        </div>

        {/* Decorative Wave/Curve Wrapper */}
        <div className="absolute inset-y-0 left-0 w-full lg:w-[45%] z-10">
            <div className="absolute inset-0 bg-[#0A1A3F] lg:rounded-r-[10rem] shadow-[20px_0_100px_rgba(0,0,0,0.5)] border-r-0 lg:border-r-[8px] border-[#ffc107]" />
            
            {/* The Badge Circle from the image */}
            <div className="absolute top-1/2 right-0 -translate-y-1/2 translate-x-1/2 z-20 hidden lg:block">
                <div className="w-48 h-48 lg:w-52 lg:h-52 rounded-full bg-[#0A1A3F] border-[3px] border-[#ffc107] shadow-[0_0_50px_rgba(255,193,7,0.2)] flex flex-col items-center justify-center text-center relative group transition-all duration-700 hover:rotate-3">
                     {/* Inner Dashed Ring */}
                     <div className="absolute inset-2 rounded-full border-[1px] border-white/20 border-dashed" />
                     
                     <div className="relative z-10 flex flex-col items-center scale-90 lg:scale-100">
                        <Star size={24} className="text-[#ffc107] mb-1.5 fill-[#ffc107] drop-shadow-[0_0_10px_rgba(255,193,7,0.4)]" />
                        <p className="text-white text-[12px] font-black uppercase tracking-widest leading-[1.1]">SHAPE</p>
                        <p className="text-white text-[12px] font-black uppercase tracking-widest leading-[1.1] mb-1.5">YOUR FUTURE</p>
                        
                        <div className="flex items-center gap-2 mb-1">
                           <div className="h-[1px] w-4 bg-[#ffc107]" />
                           <span className="text-[#ffc107] text-[15px] font-serif italic lowercase leading-none">with</span>
                           <div className="h-[1px] w-4 bg-[#ffc107]" />
                        </div>
                        
                        <h2 className="text-white text-5xl font-black tracking-tighter leading-none mt-1">KIOT</h2>
                     </div>
                </div>
            </div>
        </div>

        <div className="max-w-[1400px] mx-auto px-6 sm:px-10 lg:pl-16 lg:pr-20 relative z-20 w-full pt-4 lg:pt-0">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="max-w-2xl"
          >
            {/* Tamil Slogan */}
            <div className="mb-6">
                <p className="text-[#ffc107] font-graphik font-bold text-[18px] lg:text-[22px] leading-tight">உங்கள் கனவுகளுக்கு</p>
                <p className="text-white font-graphik font-bold text-[18px] lg:text-[22px] leading-tight">ஒரு உறுதியான துவக்கம்!</p>
            </div>

            {/* Main Title */}
            <div className="mb-6">
                <h1 className="text-3xl lg:text-5xl font-black text-white leading-none tracking-tight mb-1">ADMISSIONS</h1>
                <div className="flex items-center gap-4">
                    <h1 className="text-5xl lg:text-7xl font-black text-[#ffc107] leading-none tracking-tight">OPEN</h1>
                    <div className="px-3 py-1.5 rounded-lg border-2 border-white/20 text-white font-black text-sm lg:text-xl tracking-widest">
                        2026 - 27
                    </div>
                </div>
            </div>

            {/* Subtitle */}
            <div className="mb-8 pl-1">
                <div className="flex items-center gap-3 mb-1">
                    <p className="text-white/80 font-medium text-[12px] lg:text-base tracking-wide uppercase">Build Your Future at</p>
                </div>
                <h2 className="text-lg lg:text-2xl font-black text-white uppercase tracking-tighter leading-tight">
                    KNOWLEDGE INSTITUTE <br className="hidden sm:block"/>
                    <span className="text-[#ffc107]">OF TECHNOLOGY</span>
                </h2>
            </div>

            {/* Quick Action Cards */}
            <div className="grid grid-cols-2 gap-3 max-w-lg mb-4 lg:mb-0">
               <motion.div 
                 whileHover={{ y: -5 }}
                 onClick={() => navigate('/admissions/ug-registration')}
                 className="bg-white rounded-xl p-3 sm:p-4 flex items-center gap-3 sm:gap-4 cursor-pointer shadow-2xl group transition-all"
               >
                 <div className="w-10 h-10 sm:w-12 sm:h-12 bg-[#0A1A3F] rounded-lg flex items-center justify-center text-[#ffc107] group-hover:scale-110 transition-transform shrink-0">
                    <GraduationCap size={20} className="sm:w-6 sm:h-6" />
                 </div>
                 <div>
                    <h4 className="text-[#0A1A3F] font-black text-[9px] lg:text-[11px] uppercase tracking-widest">UG PROGRAMS</h4>
                    <motion.p 
                      animate={{ opacity: [1, 0.4, 1] }}
                      transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                      className="text-red-600 text-[9px] lg:text-[12px] font-black tracking-widest uppercase"
                    >
                      APPLY NOW
                    </motion.p>
                 </div>
               </motion.div>

               <motion.div 
                 whileHover={{ y: -5 }}
                 onClick={() => navigate('/admissions/pg-registration')}
                 className="bg-white rounded-xl p-3 sm:p-4 flex items-center gap-3 sm:gap-4 cursor-pointer shadow-2xl group transition-all"
               >
                 <div className="w-10 h-10 sm:w-12 sm:h-12 bg-[#0A1A3F] rounded-lg flex items-center justify-center text-[#ffc107] group-hover:scale-110 transition-transform shrink-0">
                    <Users size={20} className="sm:w-6 sm:h-6" />
                 </div>
                 <div>
                    <h4 className="text-[#0A1A3F] font-black text-[9px] lg:text-[11px] uppercase tracking-widest">PG PROGRAMS</h4>
                    <motion.p 
                      animate={{ opacity: [1, 0.4, 1] }}
                      transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                      className="text-red-600 text-[9px] lg:text-[12px] font-black tracking-widest uppercase"
                    >
                      APPLY NOW
                    </motion.p>
                 </div>
               </motion.div>
            </div>

          </motion.div>
        </div>

        {/* Bottom Bar Design */}
        <div className="absolute bottom-0 left-0 right-0 h-20 lg:h-24 bg-[#0A1A3F]/90 backdrop-blur-md z-30 border-t border-white/10 hidden lg:flex items-center">
            <div className="max-w-[1400px] mx-auto w-full px-6 lg:px-10 flex flex-col lg:flex-row items-center justify-between gap-4">
                <div className="flex items-center gap-6 lg:gap-10">
                    {/* Tamilnadu Map & Text Section from the image */}
                    <div className="hidden lg:flex items-center gap-4 border-r border-white/20 pr-10">
                        <div className="space-y-0.5">
                            <p className="text-white font-graphik font-bold text-[14px] leading-tight">தமிழ்நாட்டின் முன்னணி</p>
                            <p className="text-[#ffc107] font-graphik font-black text-[15px] leading-tight">தொழில்நுட்பக் கல்விக் கழகம்</p>
                        </div>
                    </div>

                    {/* Highlights moved to bottom bar */}
                    <div className="hidden xl:flex items-center gap-6 border-r border-white/10 pr-8">
                        {[
                            { icon: Award, label: "NAAC A" },
                            { icon: Briefcase, label: "100% Placement" },
                            { icon: Globe, label: "Global Presence" }
                        ].map((item, i) => (
                            <div key={i} className="flex items-center gap-2">
                                <item.icon size={16} className="text-[#ffc107]" />
                                <span className="text-white text-[10px] font-bold uppercase tracking-widest whitespace-nowrap">{item.label}</span>
                            </div>
                        ))}
                    </div>

                    <div className="flex items-center gap-6 lg:gap-8">
                        <div className="flex items-center gap-3">
                        <div className="w-8 h-8 lg:w-10 lg:h-10 rounded-lg bg-[#ffc107]/10 flex items-center justify-center text-[#ffc107]">
                            <Calendar size={20} />
                        </div>
                        <div>
                            <p className="text-white text-[11px] lg:text-[12px] font-black uppercase tracking-widest">APPLICATIONS</p>
                            <p className="text-[#ffc107] text-[10px] font-bold">NOW OPEN</p>
                        </div>
                    </div>
                    </div>
                </div>

                <div className="flex items-center gap-4 lg:gap-6">
                    <button 
                        onClick={() => navigate('/admissions/ug-registration')}
                        className="px-6 lg:px-10 py-3 lg:py-4 bg-[#ffc107] text-[#0A1A3F] rounded-xl font-black text-[10px] lg:text-[12px] uppercase tracking-widest shadow-xl shadow-[#ffc107]/20 hover:scale-105 transition-all flex items-center gap-2 lg:gap-3"
                    >
                        <FileText size={16} /> APPLY NOW
                    </button>
                </div>
            </div>
        </div>
      </section>

      {/* ─── OVERVIEW SECTION ─── */}
      <section id="Overview" className="py-4 lg:py-10 relative overflow-hidden bg-white">
         <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-20">
            <div className="grid lg:grid-cols-2 gap-4 lg:gap-24 items-center">
               <motion.div
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
               >
                 <div className="inline-block px-5 py-2 rounded-full bg-[#18357a]/5 text-[#18357a] font-bold text-[10px] uppercase tracking-[3px] mb-8 border border-[#18357a]/10">
                    Admission Overview
                 </div>
                  <h2 className="text-3xl md:text-5xl font-black leading-tight tracking-tighter mb-8 font-graphik">
                    <span className="text-[#0A1A3F]">Your Future</span> <br />
                    <span className="text-[#ffc107]">Starts Here</span>
                  </h2>
                  <div className="w-16 h-1 bg-[#ffc107] mb-8" />
                  <p className="text-[#333333]/90 font-medium text-lg lg:text-xl mb-4 lg:mb-12 leading-relaxed max-w-xl font-graphik text-justify">
                    At Knowledge Institute of Technology, we go beyond traditional learning to shape industry-ready professionals. Our admission process is designed to identify passionate students and provide them with the right opportunities.
                  </p>
               </motion.div>

               <motion.div 
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                  className="relative group lg:mt-0"
               >
                  <div className="relative z-10 rounded-[2rem] bg-white p-5 shadow-[0_50px_100px_-20px_rgba(24,53,122,0.15)] border border-slate-100 overflow-hidden">
                     <img src={campusImage} className="w-full h-auto rounded-[1.5rem] object-cover hover:scale-105 transition-transform duration-1000" alt="KIOT Campus" />
                  </div>
               </motion.div>
            </div>
         </div>
      </section>

      {/* ─── KEY HIGHLIGHTS BAR ─── */}
      <section className="bg-[#18357a] py-6 border-y border-white/10">
         <div className="max-w-7xl mx-auto px-6 lg:px-10">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-0 divide-y md:divide-y-0 lg:divide-x divide-white/10">
               {[
                  { value: "₹ 12.00 Lakhs", label: "HIGHEST SALARY" },
                  { value: "₹ 4.30 Lakhs", label: "AVERAGE SALARY" },
                  { value: "150+", label: "COMPANIES VISITED" },
                  { value: "91%", label: "% PLACEMENT" }
               ].map((stat, i) => (
                  <div key={i} className="flex flex-col items-center justify-center text-center p-6 lg:px-12 group hover:bg-white/5 transition-all cursor-default font-graphik">
                     <h3 className="text-4xl lg:text-5xl font-black text-[#ffc107] mb-4 tracking-tighter drop-shadow-lg group-hover:scale-105 transition-transform">{stat.value}</h3>
                     <p className="text-white font-black text-xs lg:text-[14px] tracking-[3px] uppercase leading-tight opacity-90">{stat.label}</p>
                  </div>
               ))}
            </div>
         </div>
      </section>

      {/* ─── WHY CHOOSE KIOT SECTION ─── */}
      <section id="WhyChoose" className="py-10 bg-slate-50 relative overflow-hidden">
         <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-20">
            <div className="text-center mb-10 relative">
               <motion.div initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }}>

                  <h2 className="text-4xl md:text-5xl font-black text-[#0A1A3F] leading-tight tracking-tighter font-graphik">
                     Why Choose <span className="text-[#ffc107]">KIOT</span>
                  </h2>
               </motion.div>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
               {[
                  { title: "100% Placement Assistance", desc: "Dedicated placement cell ensuring top-tier corporate matching.", icon: Briefcase, color: "#18357a" },
                  { title: "NAAC A Accredited", desc: "Recognized for academic excellence and institutional quality.", icon: Award, color: "#ffc107" },
                  { title: "Industry-Oriented Curriculum", desc: "Syllabus designed in collaboration with global tech giants.", icon: Globe, color: "#18357a" },
                  { title: "Modern Infrastructure", desc: "State-of-the-art labs and high-tech research centers.", icon: ShieldCheck, color: "#ffc107" },
                  { title: "Experienced Faculty", desc: "Guided by Ph.D. scholars and veteran industry professionals.", icon: Users, color: "#18357a" },
                  { title: "Elite Career Hub", desc: "Access to exclusive internships and global career paths.", icon: Star, color: "#ffc107" }
               ].map((feature, i) => (
                  <motion.div
                    key={i} 
                    initial={{ opacity: 0, y: 20 }} 
                    whileInView={{ opacity: 1, y: 0 }} 
                    viewport={{ once: true }} 
                    transition={{ delay: i * 0.1 }}
                    className="relative group bg-white rounded-3xl p-8 shadow-[0_15px_40px_rgba(24,53,122,0.06)] border border-slate-100 hover:shadow-2xl transition-all duration-500 overflow-hidden text-center"
                  >
                     {/* Signature Top Accent */}
                     <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-[#18357a] via-[#18357a] to-[#ffc107] opacity-80" />
                     
                     {/* Subtle Background Pattern */}
                     <div className="absolute inset-0 z-0 opacity-40 pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, #E5EDF8 1px, transparent 0)', backgroundSize: '24px 24px' }} />

                     <div className="relative z-10 flex flex-col items-center">
                        <div className="w-16 h-16 rounded-full mb-6 flex items-center justify-center bg-slate-50 border border-slate-100 text-[#18357a] group-hover:bg-[#18357a] group-hover:text-white transition-all duration-500 shadow-inner group-hover:scale-105">
                           <feature.icon size={28} strokeWidth={1.5} />
                        </div>
                        
                        <h4 className="text-[17px] font-black text-[#18357a] mb-3 tracking-tighter leading-tight uppercase font-graphik">
                           {feature.title}
                        </h4>
                        
                        <div className="w-10 h-0.5 bg-[#ffc107] mb-4 rounded-full group-hover:w-16 transition-all duration-500" />
                        
                        <p className="text-black text-[13px] leading-snug font-bold opacity-90 max-w-[220px]">
                           {feature.desc}
                        </p>
                     </div>

                     {/* Background Watermark Icon */}
                     <feature.icon 
                        size={100} 
                        className="absolute -bottom-6 -right-6 text-[#18357a]/[0.03] group-hover:text-[#ffc107]/10 transition-colors duration-700 pointer-events-none -rotate-12" 
                     />
                  </motion.div>
               ))}
            </div>
         </div>
      </section>

      {/* ─── PROGRAMMES OFFERED SECTION ─── */}
      <section id="Programmes" className="py-10 bg-white">
         <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-20 text-center">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-16">
               <h2 className="text-4xl md:text-5xl font-black text-[#0A1A3F] leading-tight tracking-tighter mb-8 font-graphik">Programmes <span className="text-[#ffc107]">Offered</span></h2>
               <div className="flex flex-wrap items-center justify-center gap-4">
                  <button onClick={() => setActiveProgramTab('ug')} className={`px-10 py-4 rounded-xl font-bold text-[11px] uppercase tracking-[3px] transition-all shadow-xl ${activeProgramTab === 'ug' ? 'bg-[#ffc107] text-[#18357a]' : 'bg-white text-slate-400 border border-slate-200'}`}>Undergraduate</button>
                  <button onClick={() => setActiveProgramTab('pg')} className={`px-10 py-4 rounded-xl font-bold text-[11px] uppercase tracking-[3px] transition-all shadow-xl ${activeProgramTab === 'pg' ? 'bg-[#ffc107] text-[#18357a]' : 'bg-white text-slate-400 border border-slate-200'}`}>Postgraduate</button>
               </div>
            </motion.div>

            <div className="relative min-h-[400px]">
               <AnimatePresence mode="wait">
                  {activeProgramTab === 'ug' ? (
                     <motion.div key="ug" initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: 20 }} className="overflow-hidden rounded-2xl border border-slate-100 bg-white">
                        <table className="w-full text-left">
                           <thead>
                              <tr className="bg-[#18357a] text-white font-bold">
                                 <th className="px-8 py-4 text-[11px] uppercase w-[60%]">Programme Name</th>
                                 <th className="hidden md:table-cell px-8 py-4 text-[11px] uppercase text-center w-40">Duration</th>
                                 <th className="px-8 py-4 text-[11px] uppercase text-center w-40">Action</th>
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
                                    <td className="px-8 py-4 font-bold text-[15px] uppercase text-[#18357a]">
                                       <button onClick={() => { window.scrollTo(0, 0); navigate(item.id ? `/academics/course/${item.id}` : '#') }} className="hover:text-[#ffc107] transition-all text-left font-bold">{item.name}</button>
                                    </td>
                                    <td className="hidden md:table-cell px-8 py-4 text-center text-sm font-bold text-slate-500">4 Years</td>
                                    <td className="px-8 py-4 text-center">
                                       <button onClick={() => navigate('/admissions/ug-registration')} className="px-4 py-1.5 bg-[#ffc107] text-[#18357a] rounded-lg font-bold text-[10px] uppercase tracking-widest hover:bg-[#18357a] hover:text-white transition-all transform hover:scale-105">Apply Now</button>
                                    </td>
                                 </tr>
                              ))}
                           </tbody>
                        </table>
                     </motion.div>
                  ) : (
                     <motion.div key="pg" initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: 20 }} className="overflow-hidden rounded-2xl border border-slate-100 bg-white">
                        <table className="w-full text-left">
                           <thead>
                              <tr className="bg-[#18357a] text-white font-bold">
                                 <th className="px-8 py-4 text-[11px] uppercase w-[60%]">Programme Name</th>
                                 <th className="hidden md:table-cell px-8 py-4 text-[11px] uppercase text-center w-40">Duration</th>
                                 <th className="px-8 py-4 text-[11px] uppercase text-center w-40">Action</th>
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
                                    <td className="px-8 py-4 font-bold text-[15px] uppercase text-[#18357a]">
                                       <button onClick={() => { window.scrollTo(0, 0); navigate(`/academics/course/${item.id}`) }} className="hover:text-[#ffc107] transition-all text-left font-bold">{item.name}</button>
                                    </td>
                                    <td className="hidden md:table-cell px-8 py-4 text-center text-sm font-bold text-slate-500">2 Years</td>
                                    <td className="px-8 py-4 text-center">
                                       <button onClick={() => navigate('/admissions/pg-registration')} className="px-4 py-1.5 bg-[#ffc107] text-[#18357a] rounded-lg font-bold text-[10px] uppercase tracking-widest hover:bg-[#18357a] hover:text-white transition-all transform hover:scale-105">Apply Now</button>
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
      <section id="Eligibility" className="py-10 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-20">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-12 text-center">

               <h2 className="text-4xl md:text-5xl font-black text-[#0A1A3F] leading-tight tracking-tighter font-graphik">Eligibility <span className="text-[#ffc107]">Criteria</span></h2>
            </motion.div>

            {/* 1. Cut-off Calculation & Interactive Calculator */}
            <motion.div 
               initial={{ opacity: 0, y: 20 }} 
               whileInView={{ opacity: 1, y: 0 }} 
               viewport={{ once: true }}
               className="bg-transparent md:bg-white rounded-none md:rounded-2xl border-none md:border border-slate-100 shadow-none md:shadow-xl mb-12 overflow-hidden"
            >
               <div className="grid lg:grid-cols-[1fr_400px]">
                  {/* Left: Calculation Norms */}
                  <div className="p-0 md:p-12 border-none md:border-r border-slate-100">
                     <h3 className="text-2xl font-bold text-[#18357a] mb-8 border-l-4 border-[#ffc107] pl-6 tracking-tight">Cut-off Calculation <span className="text-slate-400 font-medium text-sm ml-4">(State Board / CBSE)</span></h3>
                     <div className="space-y-6">
                        {[
                           { subject: "Mathematics (M)", formula: "M1 = Maths Reduced to 100", color: "#18357a", icon: "×" },
                           { subject: "Physics (P)", formula: "P1 = Physics Reduced to 50", color: "#ffc107", icon: "÷" },
                           { subject: "Chemistry (C)", formula: "C1 = Chemistry Reduced to 50", color: "#18357a", icon: "÷" }
                        ].map((item, idx) => (
                           <div key={idx} className="flex items-center gap-6 p-6 rounded-xl bg-slate-50 border border-slate-200">
                              <div className="w-12 h-12 rounded-lg bg-white border border-slate-200 flex items-center justify-center text-xl font-bold text-[#18357a]">
                                 {item.icon}
                              </div>
                              <div>
                                 <p className="font-bold text-[#18357a] text-sm uppercase mb-1">{item.subject}</p>
                                 <p className="text-black font-bold text-lg">{item.formula}</p>
                              </div>
                           </div>
                        ))}
                     </div>
                     <div className="mt-8 p-6 bg-[#18357a] rounded-xl text-center">
                        <p className="text-white font-bold uppercase tracking-widest text-lg">Engineering Cut-Off Mark = M1 + P1 + C1</p>
                     </div>
                  </div>

                  {/* Right: Stylish Modern Calculator */}
                  <div className="p-0 py-8 md:p-12 bg-transparent md:bg-slate-50 flex flex-col justify-center">
                     <div className="bg-[#18357a] rounded-2xl p-8 shadow-2xl relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-bl-[80px]" />
                        <h4 className="text-white font-bold uppercase text-[10px] tracking-[4px] mb-8 block text-center">Calculate Your Mark</h4>
                        
                        <div className="space-y-5 mb-8">
                           {[
                              { label: "Mathematics", id: "maths", placeholder: "/ 100", showReduced: false },
                              { label: "Physics", id: "physics", placeholder: "/ 100", showReduced: true },
                              { label: "Chemistry", id: "chemistry", placeholder: "/ 100", showReduced: true }
                           ].map((input) => (
                              <div key={input.id} className="space-y-2">
                                 <div className="flex justify-between items-center px-1">
                                    <label className="text-[10px] font-bold text-white/50 uppercase tracking-widest">{input.label}</label>
                                    {input.showReduced && (
                                       <span className="text-[10px] font-bold text-[#ffc107]/60 uppercase tracking-tighter">
                                          Reduced: <span id={`reduced-${input.id}`} className="text-[#ffc107]">0.00</span>
                                       </span>
                                    )}
                                 </div>
                                 <input 
                                    type="number" 
                                    id={`calc-${input.id}`}
                                    placeholder={input.placeholder}
                                    onInput={(e) => {
                                       const val = parseFloat(e.target.value) || 0;
                                       
                                       // Update reduced text if applicable
                                       const reducedEl = document.getElementById(`reduced-${input.id}`);
                                       if (reducedEl) {
                                          reducedEl.innerText = (val / 2).toFixed(2);
                                       }

                                       // Global calculation
                                       const m = parseFloat(document.getElementById('calc-maths').value) || 0;
                                       const p = parseFloat(document.getElementById('calc-physics').value) || 0;
                                       const c = parseFloat(document.getElementById('calc-chemistry').value) || 0;
                                       const total = m + (p/2) + (c/2);
                                       document.getElementById('cutoff-result').innerText = total.toFixed(2);
                                    }}
                                    className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3.5 text-white font-bold focus:outline-none focus:border-[#ffc107] transition-all [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                                 />
                              </div>
                           ))}
                        </div>

                        <div className="bg-white/10 border border-white/20 rounded-2xl p-6 text-center backdrop-blur-sm">
                           <p className="text-white/60 font-bold text-[10px] uppercase tracking-widest mb-1">Your Engineering Cut-off</p>
                           <p className="text-5xl font-bold text-[#ffc107] tracking-tighter" id="cutoff-result">0.00</p>
                           <p className="text-white/30 font-bold text-[8px] uppercase tracking-[3px] mt-2">Out of 200.00</p>
                        </div>
                     </div>
                  </div>
               </div>
            </motion.div>

            {/* 2. BE Admissions Table */}
            <motion.div 
               initial={{ opacity: 0, y: 20 }} 
               whileInView={{ opacity: 1, y: 0 }} 
               viewport={{ once: true }}
               className="bg-transparent md:bg-white rounded-none md:rounded-2xl overflow-hidden border-none md:border border-slate-100 shadow-none md:shadow-xl mb-12"
            >
               <div className="p-5 bg-[#18357a]">
                  <h3 className="text-xl font-bold text-white uppercase tracking-tight">Eligibility for B.E Admissions</h3>
               </div>
               <div className="overflow-x-auto">
                  <table className="w-full text-left">
                     <thead>
                        <tr className="bg-slate-50 text-[#18357a] text-[12px] font-black uppercase">
                           <th className="px-4 sm:px-10 py-5">Community</th>
                           <th className="px-4 sm:px-10 py-5 text-center">HSC Academic<br/><span className="lowercase text-[8px] font-bold text-black">(Avg of Mat, Phy, Che)</span></th>
                           <th className="px-4 sm:px-10 py-5 text-center">HSC Vocational<br/><span className="lowercase text-[8px] font-bold text-black">(Avg of Voc T&P*)</span></th>
                           <th className="px-4 sm:px-10 py-5 text-center">Lateral<br/><span className="lowercase text-[8px] font-bold text-black">(Overall % in Diploma)</span></th>
                        </tr>
                     </thead>
                     <tbody className="divide-y divide-slate-100">
                        {[
                           { community: 'General', academic: '50%', vocational: '50%', lateral: '55%' },
                           { community: 'BC / BCM', academic: '45%', vocational: '45%', lateral: '50%' },
                           { community: 'MBC / DNC', academic: '40%', vocational: '40%', lateral: '45%' },
                           { community: 'SC / SCA / ST', academic: '40%', vocational: '40%', lateral: 'Pass' }
                        ].map((row, idx) => (
                           <tr key={idx} className="hover:bg-slate-50/50 transition-colors">
                              <td className="px-4 sm:px-10 py-5 text-[14px] sm:text-[15px] font-bold text-black uppercase tracking-tight">{row.community}</td>
                              <td className="px-4 sm:px-10 py-5 text-center text-[14px] sm:text-[15px] font-bold text-black">{row.academic}</td>
                              <td className="px-4 sm:px-10 py-5 text-center text-[14px] sm:text-[15px] font-bold text-black">{row.vocational}</td>
                              <td className="px-4 sm:px-10 py-5 text-center text-[14px] sm:text-[15px] font-bold text-black">{row.lateral}</td>
                           </tr>
                        ))}
                     </tbody>
                  </table>
               </div>
            </motion.div>

            <div className="grid lg:grid-cols-2 gap-12">
               {/* 3. ME Eligibility */}
               <motion.div 
                  initial={{ opacity: 0, x: -30 }} 
                  whileInView={{ opacity: 1, x: 0 }} 
                  viewport={{ once: true }}
                  className="bg-transparent md:bg-white rounded-none md:rounded-[2rem] p-0 md:p-10 border-none md:border border-slate-100 shadow-none md:shadow-xl"
               >
                  <div className="flex items-center gap-4 mb-8">
                     <div className="w-12 h-12 rounded-2xl bg-[#ffc107]/10 flex items-center justify-center text-[#ffc107]"><GraduationCap size={24} /></div>
                     <h4 className="text-[20px] font-bold text-[#18357a] uppercase tracking-tight">Eligibility for M.E Programs</h4>
                  </div>
                  <p className="text-[14px] font-semibold text-black leading-relaxed text-justify bg-slate-50 p-6 rounded-2xl border border-dotted border-slate-200">
                     A Pass in a recognized Bachelor's degree or equivalent in the relevant field and obtained at least 50% (45% in the case of candidates belonging to reserved category) in the qualifying degree examination.
                  </p>
               </motion.div>

               {/* 4. Reservation Policy */}
               <motion.div 
                  initial={{ opacity: 0, x: 30 }} 
                  whileInView={{ opacity: 1, x: 0 }} 
                  viewport={{ once: true }}
                  className="bg-transparent md:bg-white rounded-none md:rounded-[2rem] overflow-hidden border-none md:border border-slate-100 shadow-none md:shadow-xl"
               >
                  <div className="p-6 bg-slate-50 border-b border-slate-100">
                     <h4 className="text-[16px] font-bold text-[#18357a] uppercase flex items-center gap-3">
                        <ShieldCheck size={20} className="text-[#ffc107]" /> Reservation Information
                     </h4>
                  </div>
                  <table className="w-full text-left">
                     <thead>
                        <tr className="text-[12px] font-black text-black uppercase tracking-wider border-b border-slate-100">
                           <th className="px-6 py-4">Reserved Category</th>
                           <th className="px-6 py-4 text-center">Percentage</th>
                        </tr>
                     </thead>
                     <tbody className="divide-y divide-slate-50">
                        {[
                           { name: 'Backward Class', value: '30%' },
                           { name: 'MBC and DNC', value: '20%' },
                           { name: 'Scheduled Caste', value: '18%' },
                           { name: 'Scheduled Tribes', value: '1%' }
                        ].map((row, i) => (
                           <tr key={i} className="hover:bg-slate-50/50">
                              <td className="px-6 py-4 text-xs font-bold text-[#18357a] uppercase">{row.name}</td>
                              <td className="px-6 py-4 text-center text-xs font-bold text-[#ffc107]">{row.value}</td>
                           </tr>
                        ))}
                     </tbody>
                  </table>
               </motion.div>
            </div>
        </div>
      </section>



      {/* ─── DOCUMENTS REQUIRED SECTION ─── */}
      <section id="Documents" className="py-10 bg-slate-50 overflow-hidden">
          <div className="max-w-4xl mx-auto px-6 sm:px-10">
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-center mb-10"
             >
                <span className="text-[#18357a] font-bold uppercase text-[10px] tracking-[4px] mb-6 block">📄 Checklist</span>
                <h2 className="text-4xl md:text-5xl font-black text-[#0A1A3F] leading-tight tracking-tighter mb-8 font-graphik">Required <span className="text-[#ffc107]">Documents</span></h2>
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
