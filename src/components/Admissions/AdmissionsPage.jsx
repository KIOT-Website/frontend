import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useNavigate } from 'react-router-dom'
import { 
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
  Award
} from 'lucide-react'
import logo from '../../assets/logo.webp'
import placement1 from '../../assets/placement 1.png'

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
    window.open('https://wa.me/91XXXXXXXXXX?text=Hi, I am interested in KIOT admissions.', '_blank')
  }

  return (
    <div className="min-h-screen bg-[#FDFEFE] font-['Inter'] pb-20">
      
      {/* ─── HERO SECTION ─── */}
      <section className="relative h-[65vh] flex items-center overflow-hidden bg-[#0A1A3F]">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1541339907198-e08756ebafe3?q=80&w=1920&auto=format&fit=crop" 
            className="w-full h-full object-cover opacity-30 mix-blend-overlay" 
            alt="KIOT Admissions" 
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0A1A3F] via-[#0A1A3F]/80 to-transparent" />
        </div>

        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-20 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex flex-wrap items-center gap-4 mb-8">
              <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-[#ffc107] text-[#18357a] font-black text-[11px] uppercase tracking-widest shadow-2xl shadow-[#ffc107]/20">
                <Calendar size={14} className="animate-bounce" /> Admission Portal 2026-27
              </div>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white leading-tight tracking-tighter mb-6 max-w-4xl">
              INSTITUTIONAL <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ffc107] via-[#fff3cc] to-[#ffc107] pr-4">ADMISSIONS</span>
            </h1>

            
            <div className="flex flex-wrap items-center gap-4">
              <button 
                onClick={() => navigate('/admissions/ug-registration')}
                className="group inline-flex items-center gap-3 px-8 py-4 bg-[#ffc107] text-[#18357a] rounded-2xl font-black text-[11px] uppercase tracking-widest hover:bg-white transition-all transform hover:scale-105 shadow-2xl shadow-[#ffc107]/20"
              >
                UG Registration
              </button>
              <button 
                onClick={() => navigate('/admissions/pg-registration')}
                className="group inline-flex items-center gap-3 px-8 py-4 bg-white text-[#18357a] rounded-2xl font-black text-[11px] uppercase tracking-widest hover:bg-[#ffc107] transition-all transform hover:scale-105 shadow-2xl"
              >
                PG Registration
              </button>
              <button onClick={openWhatsApp} className="flex items-center gap-3 px-8 py-4 bg-[#18357a] text-white rounded-2xl font-black text-[11px] uppercase tracking-widest hover:bg-[#1d3a82] transition-all border border-white/20">
                <MessageCircle size={18} /> Support Desk
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ─── OVERVIEW SECTION ─── */}
      <section id="Overview" className="py-20 relative overflow-hidden">
         {/* Background Shapes */}
         <div className="absolute top-0 right-0 w-1/2 h-full bg-[#18357a]/[0.02] -z-10 skew-x-12 transform origin-right" />
         
         <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-20">
            <div className="grid lg:grid-cols-2 gap-20 items-center">
               <motion.div
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
               >
                 <div className="inline-block px-4 py-1.5 rounded-full bg-[#ffc107]/10 text-[#18357a] font-black text-[10px] uppercase tracking-[3px] mb-6">
                    Admission Overview
                 </div>
                 <h2 className="text-4xl md:text-5xl lg:text-5xl font-black text-[#18357a] uppercase leading-tight tracking-tighter mb-10 pl-8 border-l-8 border-[#ffc107]">
                    TRANSFORMING <span className="text-[#ffc107] italic">POTENTIAL</span>
                 </h2>
                 <p className="text-[#64779F] font-bold text-lg mb-12 leading-relaxed max-w-xl">
                   At KIOT, we don't just teach engineering; we cultivate innovators. Our admission process is designed to find students who are ready to lead the future.
                 </p>
                 
                 <motion.button 
                   whileHover={{ scale: 1.05, y: -2 }}
                   whileTap={{ scale: 0.98 }}
                   onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                   className="group inline-flex items-center gap-4 px-10 py-5 bg-[#18357a] text-white rounded-[2rem] font-black text-xs uppercase tracking-[3px] shadow-2xl shadow-blue-900/20 hover:bg-[#ffc107] hover:text-[#18357a] transition-all"
                 >
                   Apply Now
                 </motion.button>
               </motion.div>

               <motion.div 
                  initial={{ opacity: 0, scale: 0.8, rotate: -2 }}
                  whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                  className="relative lg:-mt-48 mt-12"
               >
                  {/* Modern Frame for Image */}
                  <div className="relative z-10 rounded-[4rem] bg-white p-4 shadow-[0_50px_100px_-20px_rgba(24,53,122,0.15)] border border-slate-100 overflow-hidden">
                     <div className="absolute inset-0 bg-gradient-to-tr from-[#18357a]/10 to-transparent pointer-events-none" />
                     <img 
                       src={placement1} 
                       className="w-full h-auto rounded-[3rem] object-contain hover:scale-105 transition-transform duration-1000" 
                       alt="KIOT Campus" 
                     />
                  </div>

                  {/* Decorative Elements */}
                  <div className="absolute -top-10 -right-10 w-40 h-40 bg-[#ffc107] rounded-full blur-[80px] opacity-20" />
                  <div className="absolute -bottom-10 -left-10 w-60 h-60 bg-blue-600 rounded-full blur-[100px] opacity-10" />
               </motion.div>
            </div>
         </div>
      </section>

      {/* ─── PROCESS SECTION: MODERN TIMELINE ─── */}
      <section id="Process" className="py-20 bg-[#F8FAFC]">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-20 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="inline-block px-5 py-2 rounded-full bg-blue-100 text-[#18357a] font-black text-[10px] uppercase tracking-widest mb-6">Workflow</span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-[#18357a] uppercase leading-tight tracking-tighter mb-20">Admission <br/>Path</h2>
          </motion.div>
          
          <div className="grid lg:grid-cols-5 gap-4 relative">
            {/* Connection Line (Desktop) */}
            <div className="hidden lg:block absolute top-[40px] left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-slate-200 to-transparent -z-10" />
            
            {ADMISSION_STEPS.map((step, i) => (
              <motion.div 
                key={step.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="relative group"
              >
                <div className="flex flex-col items-center">
                  <div className="w-20 h-20 rounded-3xl bg-white shadow-2xl shadow-blue-900/5 flex items-center justify-center text-[#18357a] group-hover:bg-[#ffc107] group-hover:text-[#18357a] transition-all duration-500 mb-8 border border-slate-100 relative overflow-hidden">
                    <div className="absolute -bottom-2 -right-2 text-[40px] font-black opacity-[0.03] group-hover:opacity-[0.1] transition-opacity">{i+1}</div>
                    <step.icon size={28} className="relative z-10 group-hover:scale-110 transition-transform" />
                  </div>
                  <h4 className="text-[13px] font-black text-[#18357a] uppercase mb-3 tracking-wider group-hover:text-[#ffc107] transition-colors">{step.title}</h4>
                  <p className="text-[#64779F] font-bold text-[11px] leading-relaxed max-w-[170px] line-clamp-3 transition-colors">{step.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── PROGRAMMES OFFERED SECTION ─── */}
      <section id="Programmes" className="py-20 relative overflow-hidden bg-white">
         <div className="max-width-7xl mx-auto px-6 sm:px-10 lg:px-20">
            <div className="text-center mb-16">
               <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
               >
                  <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-[#18357a] uppercase leading-tight tracking-tighter mb-8">Programmes Offered</h2>
                  <p className="text-[#64779F] font-bold text-lg max-w-2xl mx-auto mb-10">Discover our diverse range of engineering and management disciplines designed to empower your professional journey.</p>
                  
                  {/* Category Selection Tabs */}
                  <div className="flex flex-wrap items-center justify-center gap-4">
                     <button 
                       onClick={() => setActiveProgramTab('ug')}
                       className={`px-10 py-4 rounded-xl font-black text-[11px] uppercase tracking-[3px] transition-all duration-500 shadow-xl ${activeProgramTab === 'ug' ? 'bg-[#ffc107] text-[#18357a]' : 'bg-slate-50 text-slate-400 border border-slate-200 hover:bg-slate-100 hover:text-[#18357a]'}`}
                     >
                       Undergraduate
                     </button>
                     <button 
                       onClick={() => setActiveProgramTab('pg')}
                       className={`px-10 py-4 rounded-xl font-black text-[11px] uppercase tracking-[3px] transition-all duration-500 shadow-xl ${activeProgramTab === 'pg' ? 'bg-[#ffc107] text-[#18357a]' : 'bg-slate-50 text-slate-400 border border-slate-200 hover:bg-slate-100 hover:text-[#18357a]'}`}
                     >
                       Postgraduate
                     </button>
                  </div>
               </motion.div>
            </div>

            <div className="relative min-h-[400px]">
               <AnimatePresence mode="wait">
                  {activeProgramTab === 'ug' ? (
                     /* Undergraduate Programmes */
                     <motion.div 
                        key="ug"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: 20 }}
                        transition={{ duration: 0.4 }}
                        className="relative"
                     >
                        <div className="flex items-center gap-6 mb-12">
                           <div className="w-12 h-12 rounded-2xl bg-[#18357a] flex items-center justify-center text-white shrink-0 shadow-lg shadow-blue-900/20">
                              <GraduationCap size={24} />
                           </div>
                           <div>
                              <h3 className="text-2xl font-black text-[#18357a] uppercase tracking-wide">Undergraduate (B.E. / B.Tech.)</h3>
                              <div className="h-1 w-24 bg-[#ffc107] rounded-full mt-1" />
                           </div>
                        </div>
                        
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
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
                              <motion.div 
                                key={i} 
                                whileHover={{ scale: 1.02, y: -5 }}
                                whileTap={{ scale: 0.98 }}
                                onClick={() => {
                                  window.scrollTo(0, 0);
                                  navigate(item.id ? `/academics/course/${item.id}` : '/academics');
                                }}
                                className="p-6 rounded-3xl bg-slate-50 border border-slate-100 group hover:bg-[#18357a] hover:border-[#18357a] transition-all duration-300 cursor-pointer"
                              >
                                 <div className="flex gap-4 items-start">
                                    <div className="p-2 rounded-xl bg-white shadow-sm text-[#18357a] group-hover:bg-white/10 group-hover:text-white transition-colors">
                                       <CheckCircle2 size={16} />
                                    </div>
                                    <p className="text-[13px] font-black leading-tight text-[#18357a] group-hover:text-white uppercase tracking-tight transition-colors">{item.name}</p>
                                 </div>
                              </motion.div>
                           ))}
                        </div>
                     </motion.div>
                  ) : (
                     /* Postgraduate Programmes */
                     <motion.div 
                        key="pg"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: 20 }}
                        transition={{ duration: 0.4 }}
                        className="relative"
                     >
                        <div className="flex items-center gap-6 mb-12">
                           <div className="w-12 h-12 rounded-2xl bg-[#ffc107] flex items-center justify-center text-[#18357a] shrink-0 shadow-lg shadow-yellow-500/20">
                              <ShieldCheck size={24} />
                           </div>
                           <div>
                              <h3 className="text-2xl font-black text-[#18357a] uppercase tracking-wide">Postgraduate (M.E. / MBA / MCA)</h3>
                              <div className="h-1 w-24 bg-[#18357a] rounded-full mt-1" />
                           </div>
                        </div>
                        
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                           {[
                              { name: 'MBA - GENERAL', id: 'mba-general' },
                              { name: 'MBA (IEV)', id: 'mba-iev' },
                              { name: 'MASTER OF COMPUTER APPLICATIONS (MCA)', id: 'mca' },
                              { name: 'M.E. INDUSTRIAL SAFETY ENGINEERING (M.E. ISE)', id: 'me-ise' },
                              { name: 'M.E. AUTOMOTIVE ELECTRONICS (M.E. AE)', id: 'me-ae' },
                              { name: 'M.E. POWER ELECTRONICS AND DRIVES (M.E. PED)', id: 'me-ped' },
                              { name: 'M.E. SOFTWARE ENGINEERING (M.E. SE)', id: 'me-se' }
                           ].map((item, i) => (
                              <motion.div 
                                key={i} 
                                whileHover={{ scale: 1.02, y: -5 }}
                                whileTap={{ scale: 0.98 }}
                                onClick={() => {
                                  window.scrollTo(0, 0);
                                  navigate(`/academics/course/${item.id}`);
                                }}
                                className="p-6 rounded-3xl bg-slate-50 border border-slate-100 group hover:bg-[#ffc107] hover:border-[#ffc107] transition-all duration-300 cursor-pointer"
                              >
                                 <div className="flex gap-4 items-start">
                                    <div className="p-2 rounded-xl bg-white shadow-sm text-[#ffc107] group-hover:bg-[#18357a] group-hover:text-white transition-colors">
                                       <CheckCircle2 size={16} />
                                    </div>
                                    <p className="text-[13px] font-black leading-tight text-[#18357a] group-hover:text-[#18357a] uppercase tracking-tight transition-colors">{item.name}</p>
                                 </div>
                              </motion.div>
                           ))}
                        </div>
                     </motion.div>
                  )}
               </AnimatePresence>
            </div>
         </div>
      </section>

      {/* ─── FEES SECTION: DARK PREMIUM ─── */}
      <section id="Fees" className="py-20 bg-[#0A1A3F] relative overflow-hidden min-h-[70vh] flex items-center">
        {/* Animated Background Gradients */}
        <div className="absolute top-1/2 left-1/4 w-[500px] h-[500px] bg-blue-600 rounded-full blur-[150px] opacity-20 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-[#ffc107] rounded-full blur-[150px] opacity-10" />

        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-20 relative z-10">
          <div className="grid lg:grid-cols-[2fr_3fr] gap-20 items-center">
             <motion.div
               initial={{ opacity: 0, x: -30 }}
               whileInView={{ opacity: 1, x: 0 }}
               viewport={{ once: true }}
             >
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 text-[#ffc107] font-black text-[10px] uppercase tracking-widest mb-8 border border-white/10">
                   <CreditCard size={14} /> Investment
                </div>
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white uppercase leading-tight tracking-tighter mb-8">Fees <br/>Package</h2>
                <p className="text-white/50 font-bold text-lg leading-relaxed max-w-sm">Transparent and competitive pricing structure for sustainable education excellence.</p>
             </motion.div>

             <motion.div 
               initial={{ opacity: 0, y: 50, rotateX: 10 }}
               whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
               viewport={{ once: true }}
               transition={{ duration: 0.8 }}
               className="bg-white/5 border border-white/10 rounded-[3rem] p-10 backdrop-blur-2xl shadow-3xl overflow-hidden relative group"
             >
                 {/* Internal Glass Highlights */}
                 <div className="absolute inset-x-0 top-0 h-[100px] bg-white opacity-[0.03] pointer-events-none" />
                 
                 <div className="grid sm:grid-cols-2 gap-x-12 gap-y-8 relative z-10">
                   {[
                     { label: 'Tuition Fee', val: 'University Norms' },
                     { label: 'Hostel Fee', val: '₹75K - ₹95K' },
                     { label: 'Transport Fee', val: 'Distance Based' },
                     { label: 'Development', val: 'Standardized' },
                     { label: 'Library Fee', val: 'Included' },
                     { label: 'Exam Fee', val: 'Per Semester' }
                   ].map((f, i) => (
                     <div key={i} className="group/item flex flex-col gap-2 border-b border-white/10 pb-4 last:border-0 hover:border-[#ffc107]/30 transition-colors">
                       <span className="text-white/40 font-black text-[10px] uppercase tracking-widest group-hover/item:text-[#ffc107] transition-colors">{f.label}</span>
                       <span className="text-white font-black text-lg tracking-tight">{f.val}</span>
                     </div>
                   ))}
                 </div>
                 
                 <div className="mt-12 p-6 rounded-2xl bg-white/[0.03] border border-white/5 text-center">
                    <p className="text-[10px] font-bold text-white/40 uppercase tracking-[4px]">Verified Information Portal</p>
                 </div>
             </motion.div>
          </div>
        </div>
      </section>

      {/* ─── SCHOLARSHIPS SECTION: BENTO GRID STYLE ─── */}
      <section id="Scholarships" className="py-20 bg-white relative">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-20">
           <div className="text-center max-w-2xl mx-auto mb-20">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <div className="inline-block px-5 py-2 rounded-full bg-[#ffc107]/10 text-[#18357a] font-black text-[10px] uppercase tracking-widest mb-6">Incentives</div>
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-[#18357a] uppercase leading-tight tracking-tighter mb-8">
                  Merit <br/><span className="text-[#ffc107]">Awards</span>
                </h2>
                <p className="text-[#64779F] font-bold text-lg">We believe talent should never be limited by boundaries. Explore our wide array of funding opportunities.</p>
              </motion.div>
           </div>

           <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
               {/* Large Highlight Card */}
               <motion.div 
                 initial={{ opacity: 0, scale: 0.9 }}
                 whileInView={{ opacity: 1, scale: 1 }}
                 viewport={{ once: true }}
                 className="md:col-span-2 lg:col-span-1 row-span-2 p-12 bg-[#ffc107] rounded-[3rem] text-[#18357a] relative overflow-hidden group flex flex-col justify-between"
               >
                  <Trophy size={100} className="absolute -top-10 -right-10 opacity-20 group-hover:scale-125 transition-transform duration-1000" />
                  <div>
                    <h3 className="text-4xl font-black uppercase tracking-tighter leading-none mb-6">Impact <br/>Funding</h3>
                    <p className="font-extrabold text-[#18357a]/70 text-lg leading-relaxed">Over ₹2.5 Crores disbursed annually to support academic excellence and social mobility.</p>
                  </div>
                  <div className="mt-20 p-8 bg-white/20 rounded-3xl border border-white/30 backdrop-blur-md">
                     <h4 className="text-4xl font-black text-[#18357a] mb-1">State Rankers</h4>
                     <p className="font-black uppercase text-[10px] tracking-widest opacity-60">100% Fee Waiver</p>
                  </div>
               </motion.div>

               {/* Grid Cards */}
               {[
                 { title: 'Merit List', desc: 'Financial support based on high TNEA cut-offs and competitive scores.', icon: Star },
                 { title: 'First Graduate', desc: 'Special government mandated support for first-gen learners.', icon: GraduationCap },
                 { title: 'Sports Quota', desc: 'Grants for District, State, and National level athletes.', icon: Trophy },
                 { title: 'Institutional', desc: 'Internal rewards for top-performing university candidates.', icon: Award }
               ].map((s, i) => (
                 <motion.div 
                   key={i}
                   initial={{ opacity: 0, y: 20 }}
                   whileInView={{ opacity: 1, y: 0 }}
                   viewport={{ once: true }}
                   transition={{ delay: 0.2 + (i * 0.1) }}
                   className="p-10 bg-slate-50 rounded-[2.5rem] border border-slate-100 hover:bg-[#18357a] hover:text-white transition-all duration-500 group"
                 >
                    <div className="w-14 h-14 rounded-2xl bg-white shadow-xl shadow-blue-900/5 flex items-center justify-center text-[#18357a] mb-8 group-hover:scale-110 transition-transform">
                       <s.icon size={28} />
                    </div>
                    <h4 className="text-xl font-black uppercase mb-4 tracking-tight leading-tight">{s.title}</h4>
                    <p className="text-[#64779F] group-hover:text-white/60 font-medium text-[13px] leading-relaxed transition-colors">{s.desc}</p>
                 </motion.div>
               ))}
           </div>
        </div>
      </section>

      {/* ─── DOWNLOADS SECTION ─── */}
      <section id="Downloads" className="py-20 relative">
         <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-20">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="bg-[#18357a] rounded-[4rem] p-12 md:p-24 relative overflow-hidden text-center group"
            >
                {/* Abstract Background Design */}
                <div className="absolute top-0 right-0 w-1/2 h-full bg-white/[0.02] skew-x-12" />
                <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-blue-500 rounded-full blur-[150px] opacity-20 -z-10" />

                <div className="relative z-10 max-w-2xl mx-auto">
                    <span className="text-[#ffc107] font-black uppercase text-[11px] tracking-[4px] mb-8 block">Documents</span>
                    <h3 className="text-4xl md:text-5xl lg:text-6xl font-black text-white uppercase leading-tight tracking-tighter mb-8">Secure Your <br/>Prospectus</h3>
                    <p className="text-white/50 font-bold text-lg mb-12">Download the comprehensive roadmap for 2026-27 including detailed intake and faculty information.</p>
                    
                    <div className="flex flex-wrap items-center justify-center gap-6">
                        <button className="flex items-center gap-4 px-10 py-5 bg-[#ffc107] text-[#18357a] rounded-3xl font-black text-xs uppercase tracking-widest hover:bg-white hover:scale-105 transition-all shadow-2xl shadow-[#ffc107]/20">
                          <Download size={20} /> Registration Guide
                        </button>
                        <button className="flex items-center gap-4 px-10 py-5 bg-white/10 backdrop-blur-xl border border-white/10 text-white rounded-3xl font-black text-xs uppercase tracking-widest hover:bg-white/20 transition-all">
                          <FileText size={20} /> Fee Handbook
                        </button>
                    </div>
                </div>
            </motion.div>
          </div>
      </section>

      {/* ─── STICKY APPLY BAR (MOBILE) ─── */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-slate-100 p-4 z-[200] flex gap-3 shadow-2xl">
         <button onClick={openWhatsApp} className="flex-1 py-4 bg-[#18357a]/5 text-[#18357a] border border-[#18357a]/10 rounded-xl font-black text-[10px] uppercase tracking-widest flex items-center justify-center gap-2">
            <MessageCircle size={18} /> WhatsApp
         </button>
         <button onClick={() => setShowApplyModal(true)} className="flex-[2] py-4 bg-[#18357a] text-white rounded-xl font-black text-[10px] uppercase tracking-widest">
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
                      <h2 className="text-3xl font-black text-[#18357a] uppercase tracking-tighter leading-none">Admission 2026</h2>
                      <p className="text-[#18357a]/60 font-black text-[10px] uppercase tracking-[3px] mt-2">Registration Portal</p>
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
                     <h3 className="text-2xl font-black text-[#18357a] uppercase mb-4 tracking-tighter">Success!</h3>
                     <p className="text-slate-500 font-bold text-sm leading-relaxed max-w-[280px] mx-auto">Your application request has been received. Our team will contact you within 24 hours.</p>
                     <button onClick={() => setShowApplyModal(false)} className="mt-10 px-8 py-3 bg-[#18357a] text-white rounded-xl text-[10px] font-black uppercase tracking-widest active:scale-95 transition-all">Close Window</button>
                  </div>
                ) : (
                  <form onSubmit={(e) => { e.preventDefault(); setFormSubmitted(true); }} className="space-y-6">
                     <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-1.5 transition-transform">
                           <label className="text-[9px] font-black text-slate-400 uppercase tracking-widest flex items-center gap-2">Full Name <div className="w-1 h-1 rounded-full bg-[#ffc107]" /></label>
                           <input required type="text" placeholder="John Doe" className="w-full px-5 py-4 bg-slate-50 border border-slate-100 rounded-xl text-sm font-bold focus:outline-none focus:border-[#18357a] transition-all" />
                        </div>
                        <div className="space-y-1.5 transition-transform">
                           <label className="text-[9px] font-black text-slate-400 uppercase tracking-widest flex items-center gap-2">Phone Number <div className="w-1 h-1 rounded-full bg-[#ffc107]" /></label>
                           <input required type="tel" placeholder="+91 99XXX XXXXX" className="w-full px-5 py-4 bg-slate-50 border border-slate-100 rounded-xl text-sm font-bold focus:outline-none focus:border-[#18357a] transition-all" />
                        </div>
                     </div>
                     <div className="space-y-1.5 transition-transform">
                        <label className="text-[9px] font-black text-slate-400 uppercase tracking-widest flex items-center gap-2">Email Address <div className="w-1 h-1 rounded-full bg-[#ffc107]" /></label>
                        <input required type="email" placeholder="john@example.com" className="w-full px-5 py-4 bg-slate-50 border border-slate-100 rounded-xl text-sm font-bold focus:outline-none focus:border-[#18357a] transition-all" />
                     </div>
                     <div className="space-y-1.5 transition-transform">
                        <label className="text-[9px] font-black text-slate-400 uppercase tracking-widest flex items-center gap-2">Target Program <div className="w-1 h-1 rounded-full bg-[#ffc107]" /></label>
                        <div className="relative">
                           <select className="w-full px-5 py-4 bg-slate-50 border border-slate-100 rounded-xl text-[11px] font-black uppercase tracking-widest text-[#18357a] appearance-none focus:outline-none focus:border-[#18357a]">
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
                     <button type="submit" className="w-full py-5 bg-[#18357a] text-white rounded-xl font-black text-[12px] uppercase tracking-[3px] hover:bg-[#1d3a82] transition-all shadow-xl shadow-blue-900/10 active:scale-95 flex items-center justify-center gap-3">
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
                     <p className="text-white text-[9px] font-black uppercase tracking-[2px] mt-4 relative z-10">Confidence Through Knowledge</p>
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
