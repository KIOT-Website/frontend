import React, { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence, useInView } from 'framer-motion'
import { useNavigate } from 'react-router-dom'
import brochurePdf from '../../assets/KIOT Brochure 2026 copy.pdf'
import prospectsPdf from '../../assets/KIOT Prospects MAY 2026 .pdf'

const AnimatedCounter = ({ to, duration = 1.5, decimals = 0 }) => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-50px" })
  const [count, setCount] = useState(0)
  const [hasAnimated, setHasAnimated] = useState(false)

  useEffect(() => {
    if (isInView && !hasAnimated) {
      setHasAnimated(true)
      let startTime = null
      const end = parseFloat(to)
      
      const animate = (timestamp) => {
        if (!startTime) startTime = timestamp
        const progress = Math.min((timestamp - startTime) / (duration * 1000), 1)
        const ease = progress * (2 - progress)
        setCount(ease * end)
        if (progress < 1) {
          requestAnimationFrame(animate)
        } else {
          setCount(end)
        }
      }
      requestAnimationFrame(animate)
    }
  }, [isInView, hasAnimated, to, duration])

  return <span ref={ref}>{count.toFixed(decimals)}</span>
}
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
  Globe,
  Cpu,
  Building2,
  FlaskConical,
  Target,
  Languages,
  Sparkles
} from 'lucide-react'
import logo from '../../assets/main/logo.webp'
import bannerAdmission from '../../assets/Admissions/admission1 (2).png'
import admission2 from '../../assets/Admissions/autonomus3.png'

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
    <div className="min-h-screen bg-[#FDFEFE] text-[14px] text-[#1a1a1a] leading-[1.7] pb-10 selection:bg-[#ffc107]/30">
      
      {/* ─── NEW HIGH-FIDELITY HERO BANNER ─── */}
      <section className="relative overflow-hidden bg-[#224292] min-h-[350px] lg:h-[80vh] flex items-center pt-8 lg:pt-0">
        {/* Background Image / Building View */}
        <div className="absolute top-0 right-0 w-full lg:w-3/5 h-full z-0 overflow-hidden">
          <img 
            src={bannerAdmission} 
            className="w-full h-full object-cover lg:object-center opacity-100" 
            alt="KIOT Campus" 
          />
        </div>

        {/* Decorative Wave/Curve Wrapper */}
        <div className="absolute inset-y-0 left-0 w-full lg:w-[45%] z-10">
            <div className="absolute inset-0 bg-[#224292] lg:rounded-r-[8rem] shadow-[20px_0_100px_rgba(0,0,0,0.5)] border-r-0 lg:border-r-[6px] border-[#ffc107]" />
            
            {/* The Badge Circle from the image */}
            <div className="absolute top-1/2 right-0 -translate-y-1/2 translate-x-1/2 z-20 hidden lg:block">
                <div className="w-40 h-40 lg:w-44 lg:h-44 rounded-full bg-[#224292] border-[2px] border-[#ffc107] shadow-[0_0_40px_rgba(255,193,7,0.2)] flex flex-col items-center justify-center text-center relative group transition-all duration-700 hover:rotate-3">
                     {/* Inner Dashed Ring */}
                     <div className="absolute inset-2 rounded-full border-[1px] border-white/20 border-dashed" />
                     
                     <div className="relative z-10 flex flex-col items-center scale-90 lg:scale-100">
                        <Star size={20} className="text-[#ffc107] mb-1.5 fill-[#ffc107]" />
                        <p className="text-white text-[11px] font-black uppercase tracking-widest leading-[1.1]">SHAPE</p>
                        <p className="text-white text-[11px] font-black uppercase tracking-widest leading-[1.1] mb-1.5">YOUR FUTURE</p>
                        
                        <div className="flex items-center gap-2 mb-1">
                           <div className="h-[1px] w-4 bg-[#ffc107]" />
                           <span className="text-[#ffc107] text-[13px] font-serif italic lowercase leading-none">with</span>
                           <div className="h-[1px] w-4 bg-[#ffc107]" />
                        </div>
                        
                        <h2 className="text-white text-4xl font-black tracking-tighter leading-none mt-1">KIOT</h2>
                     </div>
                </div>
            </div>
        </div>

        <div className="max-w-[1400px] mx-auto px-6 sm:px-10 lg:pl-16 lg:pr-20 relative z-20 w-full">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="max-w-2xl"
          >


            {/* Main Title */}
            <div className="mb-4 lg:mb-6">
                <h1 className="text-2xl lg:text-4xl font-black text-white leading-none tracking-tight mb-1">ADMISSIONS</h1>
                <div className="flex items-center gap-4">
                    <h1 className="text-4xl lg:text-6xl font-black text-[#ffc107] leading-none tracking-tight">OPEN</h1>
                    <div className="px-2.5 py-1 rounded-lg border border-white/40 text-white font-black text-xs lg:text-lg tracking-widest">
                        2026 - 27
                    </div>
                </div>
            </div>

            {/* Subtitle */}
            <div className="mb-6 lg:mb-8 pl-1">
                <div className="flex items-center gap-3 mb-1">
                    <p className="text-white font-bold text-[11px] lg:text-sm tracking-wide uppercase">Build Your Future at</p>
                </div>
                <h2 className="text-base lg:text-xl font-black text-white uppercase tracking-tighter leading-tight">
                    KNOWLEDGE INSTITUTE <br className="hidden sm:block"/>
                    <span className="text-[#ffc107]">OF TECHNOLOGY</span>
                </h2>
            </div>

            {/* Quick Action Cards */}
            <div className="grid grid-cols-2 gap-3 max-w-lg mb-4 lg:mb-0">
               <motion.div 
                 whileHover={{ y: -5 }}
                 onClick={() => navigate('/admissions/ug-registration')}
                 className="bg-white rounded-xl p-3.5 sm:p-4 flex items-center gap-3 cursor-pointer shadow-2xl group transition-all"
               >
                 <div className="w-10 h-10 sm:w-12 sm:h-12 bg-[#224292] rounded-lg flex items-center justify-center text-[#ffc107] group-hover:scale-110 transition-transform shrink-0">
                    <GraduationCap size={20} className="sm:w-6 sm:h-6" />
                 </div>
                 <div>
                    <h4 className="text-[#224292] font-black text-[10px] lg:text-[11px] uppercase tracking-widest">UG PROGRAMS</h4>
                    <motion.p 
                      animate={{ opacity: [1, 0.4, 1] }}
                      transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                      className="text-red-600 text-[10px] lg:text-[11px] font-black tracking-widest uppercase"
                    >
                      APPLY NOW
                    </motion.p>
                 </div>
               </motion.div>

               <motion.div 
                 whileHover={{ y: -5 }}
                 onClick={() => navigate('/admissions/pg-registration')}
                 className="bg-white rounded-xl p-3.5 sm:p-4 flex items-center gap-3 cursor-pointer shadow-2xl group transition-all"
               >
                 <div className="w-10 h-10 sm:w-12 sm:h-12 bg-[#224292] rounded-lg flex items-center justify-center text-[#ffc107] group-hover:scale-110 transition-transform shrink-0">
                    <Users size={20} className="sm:w-6 sm:h-6" />
                 </div>
                 <div>
                    <h4 className="text-[#224292] font-black text-[10px] lg:text-[11px] uppercase tracking-widest">PG PROGRAMS</h4>
                    <motion.p 
                      animate={{ opacity: [1, 0.4, 1] }}
                      transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                      className="text-red-600 text-[10px] lg:text-[11px] font-black tracking-widest uppercase"
                    >
                      APPLY NOW
                    </motion.p>
                 </div>
               </motion.div>
            </div>

            {/* Download Buttons for Hero (mobile view only) */}
            <div className="flex gap-3 max-w-lg mt-4 lg:hidden">
                <a 
                    href={brochurePdf}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 px-4 py-3.5 bg-white/10 hover:bg-white/20 text-white border border-white/20 rounded-xl font-black text-[10px] sm:text-xs uppercase tracking-widest hover:scale-102 transition-all flex items-center justify-center gap-2"
                    style={{ color: 'white' }}
                >
                    <Download size={14} /> Brochure
                </a>
                <a 
                    href={prospectsPdf}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 px-4 py-3.5 bg-white/10 hover:bg-white/20 text-white border border-white/20 rounded-xl font-black text-[10px] sm:text-xs uppercase tracking-widest hover:scale-102 transition-all flex items-center justify-center gap-2"
                    style={{ color: 'white' }}
                >
                    <Download size={14} /> Prospects
                </a>
            </div>

          </motion.div>
        </div>

        {/* Bottom Bar Design */}
        <div className="absolute bottom-0 left-0 right-0 h-16 lg:h-20 bg-[#224292] z-30 border-t border-white/10 hidden lg:flex items-center">
            <div className="max-w-[1400px] mx-auto w-full px-6 lg:px-10 flex flex-col lg:flex-row items-center justify-between gap-4">
                <div className="flex items-center gap-6 lg:gap-10">
                    <div className="hidden lg:flex items-center gap-4 border-r border-white/10 pr-10">
                        <div className="space-y-0.5">
                            <p className="text-white font-bold text-xs leading-tight">A Strong Start</p>
                            <p className="text-[#ffc107] font-black text-sm leading-tight uppercase">To Your Dreams!</p>
                        </div>
                    </div>

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
                            <p className="text-white text-[10px] font-black uppercase tracking-widest">APPLICATIONS</p>
                            <p className="text-[#ffc107] text-[10px] font-bold">NOW OPEN</p>
                        </div>
                    </div>
                    </div>
                </div>

                <div className="flex items-center gap-4">
                    <a 
                        href={brochurePdf}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-6 py-3.5 bg-white/10 hover:bg-white/20 text-white border border-white/25 rounded-xl font-black text-xs uppercase tracking-widest hover:scale-105 transition-all flex items-center justify-center gap-2 w-48"
                        style={{ color: 'white' }}
                    >
                        <Download size={16} /> Brochure
                    </a>
                    <a 
                        href={prospectsPdf}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-6 py-3.5 bg-white/10 hover:bg-white/20 text-white border border-white/25 rounded-xl font-black text-xs uppercase tracking-widest hover:scale-105 transition-all flex items-center justify-center gap-2 w-48"
                        style={{ color: 'white' }}
                    >
                        <Download size={16} /> Prospects
                    </a>
                </div>
            </div>
        </div>
      </section>

      {/* ─── OVERVIEW SECTION ─── */}
      <section id="Overview" className="py-4 relative overflow-hidden bg-white">
         <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-20">
            <div className="grid lg:grid-cols-[1.1fr_1fr] gap-12 lg:gap-20 items-center">
                <motion.div 
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                  className="relative group lg:mt-0 order-2 lg:order-1"
                >
                  {/* MAIN DECORATIVE CONTAINER */}
                  <div className="relative w-full aspect-[4/3] bg-[#0A1D4D] rounded-[1.5rem] overflow-hidden shadow-2xl">
                     
                     {/* Background Accents */}
                     <div className="absolute top-4 right-4 grid grid-cols-4 gap-1.5 opacity-20">
                        {[...Array(16)].map((_, i) => (
                           <div key={i} className="w-1 h-1 rounded-full bg-white" />
                        ))}
                     </div>
                     <div className="absolute bottom-4 left-4 grid grid-cols-4 gap-1.5 opacity-20">
                        {[...Array(16)].map((_, i) => (
                           <div key={i} className="w-1 h-1 rounded-full bg-[#ffc107]" />
                        ))}
                     </div>

                     {/* Image with Slimmer Inset & Standard Rounded Corners */}
                     <div className="absolute inset-1.5 lg:inset-2.5 rounded-[1.2rem] overflow-hidden border border-white/10 group-hover:scale-[1.01] transition-transform duration-700">
                        <img 
                           src={admission2} 
                           className="w-full h-full object-cover" 
                           alt="KIOT Admissions" 
                        />
                     </div>

                     {/* Glow Accent */}
                     <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-[#ffc107] rounded-full blur-3xl opacity-20" />
                  </div>
                </motion.div>

               <motion.div
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                  className="order-1 lg:order-2"
               >
                  <h2 className="text-2xl md:text-3xl font-bold leading-tight tracking-tight mb-6 text-[#224292]">
                    Transforming <br />
                    <span className="text-[#ffc107]">Dreams Into Careers</span>
                  </h2>
                  <p className="text-[#1a1a1a] font-medium text-sm lg:text-[15px] mb-4 lg:mb-8 leading-relaxed max-w-xl text-justify">
                    <span className="text-[#224292] font-black">Knowledge Institute of Technology</span>, we believe education is the foundation for a successful future. Our institution provides a dynamic learning environment focused on innovation, practical knowledge, and academic excellence. With experienced faculty and modern facilities, students gain the skills needed to excel in today’s competitive world. We encourage creativity, leadership, and industry-oriented learning through every program. Our commitment is to shape confident professionals ready to achieve their goals and make a meaningful impact.
                  </p>
               </motion.div>
            </div>
         </div>
      </section>

      {/* ─── KEY HIGHLIGHTS BAR ─── */}
      <section className="bg-[#224292] py-10 border-y border-white/10">
         <div className="max-w-7xl mx-auto px-6 lg:px-10">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-0 lg:divide-x divide-white/10">
                { [
                   { prefix: "₹ ", value: 12.00, suffix: " Lakhs", decimals: 2, label: "HIGHEST SALARY" },
                   { prefix: "₹ ", value: 4.30, suffix: " Lakhs", decimals: 2, label: "AVERAGE SALARY" },
                   { prefix: "", value: 150, suffix: "+", decimals: 0, label: "COMPANIES VISITED" },
                   { prefix: "", value: 95, suffix: "%", decimals: 0, label: "% PLACEMENT" }
                ].map((stat, i) => (
                   <motion.div 
                     key={i} 
                     initial={{ opacity: 0, y: 20 }}
                     whileInView={{ opacity: 1, y: 0 }}
                     viewport={{ once: true }}
                     transition={{ delay: i * 0.1 }}
                     className="flex flex-col items-center justify-center text-center p-4 sm:p-6 lg:px-10 group hover:bg-white/5 transition-all cursor-default"
                   >
                      <h3 className="text-2xl sm:text-3xl lg:text-4xl font-black text-[#ffc107] mb-3 tracking-tighter group-hover:scale-105 transition-transform">
                         {stat.prefix}
                         <AnimatedCounter to={stat.value} decimals={stat.decimals} />
                         {stat.suffix}
                      </h3>
                      <p className="text-white font-black text-[10px] sm:text-xs lg:text-sm tracking-[2px] uppercase leading-tight">{stat.label}</p>
                   </motion.div>
                ))}
            </div>
         </div>
      </section>

      {/* ─── WHY CHOOSE KIOT SECTION ─── */}
      <section id="WhyChoose" className="pt-10 pb-6 bg-slate-50 relative overflow-hidden">
         <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-20">
            <div className="text-center mb-12 relative">
               <motion.div initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }}>
                  <h2 className="text-xl md:text-2xl font-bold text-[#224292] leading-tight tracking-tight uppercase">
                     Why Choose
                  </h2>
                  <h2 className="text-lg md:text-xl font-bold text-[#ffc107] leading-tight tracking-tight mt-1">
                     Knowledge Institute of Technology
                  </h2>
               </motion.div>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
               {[
                  { title: "Industry-Ready AI Enabled Curriculum", desc: "Cutting-edge syllabus integrated with Artificial Intelligence across all programs.", icon: Cpu },
                  { title: "30+ Centres of Excellence (CoEs) & iStart Incubation", desc: "Fostering innovation through dedicated centres and startup incubation support.", icon: Building2 },
                  { title: "Emerging Technology Laboratories", desc: "Hands-on experience with next-gen technologies in state-of-the-art labs.", icon: FlaskConical },
                  { title: "NAAC Accredited ('A' Grade)", desc: "Recognized for academic excellence and institutional quality with 'A' Grade accreditation.", icon: Award },
                  { title: "Experienced Faculty", desc: "Highly Qualified & Experienced faculty with Ph.D. / Post Graduation.", icon: Users },
                  { title: "360 Degree Career Development Program", desc: "1200+ hours of Training on Employability Skills & Life Skills.", icon: Target },
                  { title: "Foreign Languages", desc: "International certification on Japanese and German Languages with exclusive placements.", icon: Languages },
                  { title: "Good Placements", desc: "More than 90% Placements in leading CORE & IT Companies.", icon: Briefcase },
                  { title: "Experiential Learning Ambience", desc: "70+ Clubs & Forums in-line with World Class Universities.", icon: Sparkles }
               ].map((feature, i) => (
                  <motion.div
                    key={i} 
                    initial={{ opacity: 0, y: 20 }} 
                    whileInView={{ opacity: 1, y: 0 }} 
                    viewport={{ once: true }} 
                    transition={{ delay: i * 0.1 }}
                    className="relative group bg-white rounded-2xl p-6 shadow-md border border-slate-100 hover:shadow-xl transition-all duration-500 overflow-hidden text-center flex flex-col justify-center h-full"
                  >
                     <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-[#224292] to-[#ffc107]" />
                     <div className="relative z-10 flex flex-col items-center">
                        <h4 className="text-base font-black text-[#224292] mb-3 tracking-tighter leading-tight uppercase mt-2">
                           {feature.title}
                        </h4>
                        <div className="w-10 h-1 bg-[#ffc107] mb-4 rounded-full group-hover:w-16 transition-all duration-500" />
                        <p className="text-[#1a1a1a] text-sm leading-snug font-medium">
                           {feature.desc}
                        </p>
                     </div>
                  </motion.div>
               ))}
            </div>
         </div>
      </section>

      {/* ─── PROGRAMMES OFFERED SECTION ─── */}
      <section id="Programmes" className="pt-2 pb-10 bg-white">
         <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-20 text-center">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-12">
               <h2 className="text-2xl md:text-3xl font-bold text-[#224292] leading-tight tracking-tight mb-8">Programmes <span className="text-[#ffc107]">Offered</span></h2>
               <div className="flex flex-wrap items-center justify-center gap-4">
                  <button onClick={() => setActiveProgramTab('ug')} className={`px-10 py-4 rounded-xl font-black text-xs uppercase tracking-[2px] transition-all shadow-lg ${activeProgramTab === 'ug' ? 'bg-[#ffc107] text-[#224292]' : 'bg-slate-50 text-slate-500 border border-slate-200'}`}>Undergraduate</button>
                  <button onClick={() => setActiveProgramTab('pg')} className={`px-10 py-4 rounded-xl font-black text-xs uppercase tracking-[2px] transition-all shadow-lg ${activeProgramTab === 'pg' ? 'bg-[#ffc107] text-[#224292]' : 'bg-slate-50 text-slate-500 border border-slate-200'}`}>Postgraduate</button>
               </div>
            </motion.div>

            <div className="relative min-h-[400px]">
               <AnimatePresence mode="wait">
                  {activeProgramTab === 'ug' ? (
                     <motion.div key="ug" initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: 20 }} className="overflow-hidden rounded-xl border border-slate-100 bg-white shadow-xl max-w-4xl mx-auto">
                        <table className="w-full text-left">
                           <thead>
                              <tr className="bg-[#224292] text-white font-black">
                                 <th className="px-8 py-5 text-xs uppercase w-[70%]">Programme Name</th>
                                 <th className="hidden md:table-cell px-8 py-5 text-xs uppercase text-left w-[30%]">Duration</th>
                              </tr>
                           </thead>
                           <tbody className="divide-y divide-slate-100">
                              {[
                                 { name: 'B.E. Computer Science and Engineering', id: 'be-cse' },
                                 { name: 'B.Tech. Information Technology', id: 'btech-it' },
                                 { name: 'B.Tech. Artificial Intelligence and Data Science', id: 'btech-aids' },
                                 { name: 'B.Tech. Computer Science and Business Systems', id: 'btech-csbs' },
                                 { name: 'B.E. Electronics and Communication Engineering', id: 'be-ece' },
                                 { name: 'B.E. Electrical and Electronics Engineering', id: 'be-eee' },
                                 { name: 'B.E. Electronics and Computer Engineering', id: 'be-ecx' },
                                 { name: 'B.E. Mechanical Engineering', id: 'be-mechanical' },
                                 { name: 'B.E. Civil Engineering', id: 'be-civil' }
                              ].map((item, i) => (
                                  <motion.tr 
                                     key={i} 
                                     initial={{ opacity: 0, y: 10 }}
                                     whileInView={{ opacity: 1, y: 0 }}
                                     viewport={{ once: true }}
                                     transition={{ delay: i * 0.05 }}
                                     className="group hover:bg-slate-50/50 transition-colors"
                                  >
                                     <td className="px-8 py-5 font-semibold text-sm text-[#224292]">
                                        <button onClick={() => { window.scrollTo(0, 0); navigate(item.id ? `/academics/course/${item.id}` : '#') }} className="hover:text-[#ffc107] transition-all text-left">{item.name}</button>
                                     </td>
                                     <td className="hidden md:table-cell px-8 py-5 text-left text-sm font-bold text-slate-600">4 Years</td>
                                  </motion.tr>
                              ))}
                           </tbody>
                        </table>
                     </motion.div>
                  ) : (
                     <motion.div key="pg" initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: 20 }} className="overflow-hidden rounded-xl border border-slate-100 bg-white shadow-xl max-w-4xl mx-auto">
                        <table className="w-full text-left">
                           <thead>
                              <tr className="bg-[#224292] text-white font-black">
                                 <th className="px-8 py-5 text-xs uppercase w-[70%]">Programme Name</th>
                                 <th className="hidden md:table-cell px-8 py-5 text-xs uppercase text-left w-[30%]">Duration</th>
                              </tr>
                           </thead>
                           <tbody className="divide-y divide-slate-100">
                              {[
                                 { name: 'Master of Business Administration', id: 'mba-general' },
                                 { name: 'MBA (IEV)', id: 'mba-iev' },
                                 { name: 'MCA', id: 'mca' },
                                 { name: 'M.E. Industrial Safety Engineering', id: 'me-ise' },
                                 { name: 'M.E. Automotive Electronics', id: 'me-ae' },
                                 { name: 'M.E. Power Electronics and Drives', id: 'me-ped' },
                                 { name: 'M.E. Software Engineering', id: 'me-se' }
                              ].map((item, i) => (
                                  <motion.tr 
                                     key={i} 
                                     initial={{ opacity: 0, y: 10 }}
                                     whileInView={{ opacity: 1, y: 0 }}
                                     viewport={{ once: true }}
                                     transition={{ delay: i * 0.05 }}
                                     className="group hover:bg-slate-50/50 transition-colors"
                                  >
                                     <td className="px-8 py-5 font-semibold text-sm text-[#224292]">
                                        <button onClick={() => { window.scrollTo(0, 0); navigate(`/academics/course/${item.id}`) }} className="hover:text-[#ffc107] transition-all text-left">{item.name}</button>
                                     </td>
                                     <td className="hidden md:table-cell px-8 py-5 text-left text-sm font-bold text-slate-600">2 Years</td>
                                  </motion.tr>
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
      <section id="Eligibility" className="pt-2 pb-10 bg-slate-50">
         <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-20">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-12 text-center">
               <h2 className="text-2xl md:text-3xl font-bold text-[#224292] leading-tight tracking-tight">Eligibility <span className="text-[#ffc107]">Criteria</span></h2>
            </motion.div>

            <motion.div 
               initial={{ opacity: 0, y: 20 }} 
               whileInView={{ opacity: 1, y: 0 }} 
               viewport={{ once: true }}
               className="mb-16"
            >
               <div className="grid lg:grid-cols-[1fr_400px] gap-12 lg:gap-16">
                  {/* Left: Calculation Norms */}
                  <div className="flex flex-col justify-center">
                     <h3 className="text-xl font-bold text-[#224292] mb-8 border-l-4 border-[#ffc107] pl-6 tracking-tight">Cut-off Calculation</h3>
                     <div className="space-y-5">
                        {[
                           { subject: "Mathematics (M)", formula: "M1 = Maths Reduced to 100", icon: "×" },
                           { subject: "Physics (P)", formula: "P1 = Physics Reduced to 50", icon: "÷" },
                           { subject: "Chemistry (C)", formula: "C1 = Chemistry Reduced to 50", icon: "÷" }
                        ].map((item, idx) => (
                           <motion.div 
                             key={idx} 
                             initial={{ opacity: 0, x: -20 }}
                             whileInView={{ opacity: 1, x: 0 }}
                             viewport={{ once: true }}
                             transition={{ delay: idx * 0.1 }}
                             className="flex items-center gap-6 p-6 rounded-2xl bg-white shadow-sm border border-slate-100"
                           >
                              <div className="w-12 h-12 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center text-xl font-bold text-[#224292]">
                                 {item.icon}
                              </div>
                              <div>
                                 <p className="font-semibold text-[#224292] text-base mb-1">{item.subject}</p>
                                 <p className="text-[#1a1a1a] font-medium text-base">{item.formula}</p>
                              </div>
                           </motion.div>
                        ))}
                     </div>
                     <div className="mt-8 p-6 bg-[#224292] rounded-2xl text-center shadow-lg">
                        <p className="text-white font-semibold text-lg">Cut-Off Mark = M1 + P1 + C1</p>
                     </div>
                  </div>
 
                  {/* Right: Calculator */}
                  <div className="flex flex-col justify-center">
                     <div className="bg-[#224292] rounded-[2rem] p-8 shadow-2xl relative overflow-hidden">
                        <h4 className="text-white font-bold text-lg mb-8 block text-center">Calculator</h4>
                        
                        <div className="space-y-5 mb-8">
                           {[
                              { label: "Mathematics", id: "maths", placeholder: "/ 100" },
                              { label: "Physics", id: "physics", placeholder: "/ 100" },
                              { label: "Chemistry", id: "chemistry", placeholder: "/ 100" }
                           ].map((input) => (
                              <div key={input.id} className="space-y-1.5">
                                 <label className="text-sm font-semibold text-white pl-1">{input.label}</label>
                                 <input 
                                    type="number" 
                                    id={`calc-${input.id}`}
                                    placeholder={input.placeholder}
                                    onInput={(e) => {
                                       const m = parseFloat(document.getElementById('calc-maths').value) || 0;
                                       const p = parseFloat(document.getElementById('calc-physics').value) || 0;
                                       const c = parseFloat(document.getElementById('calc-chemistry').value) || 0;
                                       const total = m + (p/2) + (c/2);
                                       document.getElementById('cutoff-result').innerText = total.toFixed(2);
                                    }}
                                    className="w-full bg-white/10 border border-white/20 rounded-xl px-5 py-3 text-white font-bold text-base focus:outline-none focus:border-[#ffc107] transition-all"
                                 />
                              </div>
                           ))}
                        </div>

                        <div className="bg-white p-6 rounded-2xl text-center shadow-xl">
                           <p className="text-[#224292] font-semibold text-sm mb-1">Your Cut-off</p>
                           <p className="text-4xl font-bold text-[#224292] tracking-tighter" id="cutoff-result">0.00</p>
                        </div>
                     </div>
                  </div>
               </div>
            </motion.div>

            {/* Table */}
            <motion.div 
               initial={{ opacity: 0, y: 20 }} 
               whileInView={{ opacity: 1, y: 0 }} 
               viewport={{ once: true }}
               className="bg-white rounded-3xl overflow-hidden border border-slate-100 shadow-xl mb-12"
            >
               <div className="p-6 bg-[#224292] text-center">
                  <h3 className="text-xl font-black text-white uppercase tracking-tight">Eligibility for B.E Admissions</h3>
               </div>
               <div className="overflow-x-auto">
                  <table className="w-full text-left">
                     <thead>
                        <tr className="bg-slate-50 text-[#224292] text-sm font-bold border-b border-slate-100">
                           <th className="px-8 py-5">Community</th>
                           <th className="px-8 py-5 text-center">Academic</th>
                           <th className="px-8 py-5 text-center">Vocational</th>
                           <th className="px-8 py-5 text-center">Lateral</th>
                        </tr>
                     </thead>
                     <tbody className="divide-y divide-slate-100">
                        {[
                           { community: 'General Category', academic: '50%', vocational: '50%', lateral: '55%' },
                           { community: 'BC / BCM', academic: '45%', vocational: '45%', lateral: '50%' },
                           { community: 'MBC / DNC', academic: '40%', vocational: '40%', lateral: '45%' },
                           { community: 'SC / SCA / ST', academic: '40%', vocational: '40%', lateral: 'Pass' }
                        ].map((row, idx) => (
                           <tr key={idx} className="hover:bg-slate-50/50 transition-colors">
                              <td className="px-8 py-5 text-base font-semibold text-[#1a1a1a]">{row.community}</td>
                              <td className="px-8 py-5 text-center text-base font-medium text-[#1a1a1a]">{row.academic}</td>
                              <td className="px-8 py-5 text-center text-base font-medium text-[#1a1a1a]">{row.vocational}</td>
                              <td className="px-8 py-5 text-center text-base font-medium text-[#1a1a1a]">{row.lateral}</td>
                           </tr>
                        ))}
                     </tbody>
                  </table>
               </div>
            </motion.div>
        </div>
      </section>

      {/* ─── DOCUMENTS REQUIRED SECTION ─── */}
      <section id="Documents" className="py-10 bg-white overflow-hidden">
          <div className="max-w-4xl mx-auto px-6 sm:px-10 text-center">
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="mb-12"
             >
                <h2 className="text-2xl md:text-3xl font-bold text-[#224292] leading-tight tracking-tight mb-6">Required <span className="text-[#ffc107]">Documents</span></h2>
                <p className="text-[#1a1a1a] font-bold text-base leading-relaxed max-w-xl mx-auto">Ensure you have scanned copies of the following documents ready before starting your registration.</p>
             </motion.div>

             <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 text-left">
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
                     className="flex items-center gap-4 p-6 rounded-2xl bg-slate-50 border border-slate-100 hover:border-[#ffc107] hover:shadow-xl transition-all group"
                   >
                      <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center text-[#ffc107] shadow-sm group-hover:bg-[#224292] transition-all">
                         <FileText size={20} />
                      </div>
                      <span className="text-[11px] font-black text-[#224292] uppercase tracking-wider">{doc}</span>
                   </motion.div>
                ))}
             </div>
          </div>
       </section>


    </div>
  )
}

export default AdmissionsPage
