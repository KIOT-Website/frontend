import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useNavigate } from 'react-router-dom'
import { 
  GraduationCap, Layers, 
  Settings, Radio, Zap, Monitor, Building2, Globe, Briefcase, Brain, Cpu,
  ShieldCheck, CircuitBoard, CarFront, Code, TrendingUp, AppWindow, Rocket, FileCode2,
  ArrowRight, Search, Beaker, Landmark, Atom, Microscope
} from 'lucide-react'

import courseBg from '../../assets/main/home course.png'

const programsData = {
  UG: {
    title: 'Undergraduate',
    subtitle: 'B.E. / B.Tech Programmes',
    icon: GraduationCap,
    description: 'Foundation for technical brilliance and engineering innovation.',
    accent: '#ffc107',
    courses: [
      { id: 'be-mechanical', name: "Mechanical Engineering", icon: Settings, code: "MECH", duration: "4 Years", phd: true },
      { id: 'be-ece', name: "Electronics & Communication", icon: Radio, code: "ECE", duration: "4 Years", phd: true },
      { id: 'be-eee', name: "Electrical & Electronics", icon: Zap, code: "EEE", duration: "4 Years", phd: true },
      { id: 'be-cse', name: "Computer Science & Engineering", icon: Monitor, code: "CSE", duration: "4 Years", phd: true },
      { id: 'be-civil', name: "Civil Engineering", icon: Building2, code: "CIVIL", duration: "4 Years", phd: true },
      { id: 'btech-it', name: "Information Technology", icon: Globe, code: "IT", duration: "4 Years", phd: true },
      { id: 'btech-csbs', name: "Computer Science & Business", icon: Briefcase, code: "CSBS", duration: "4 Years", phd: true },
      { id: 'btech-aids', name: "AI and Data Science", icon: Brain, code: "AIDS", duration: "4 Years", phd: true },
      { id: 'be-ecm', name: "Electronics & Computer Eng.", icon: Cpu, code: "ECC", duration: "4 Years", phd: true }
    ]
  },
  PG: {
    title: 'Postgraduate',
    subtitle: 'M.E. / MBA / MCA Programmes',
    icon: Layers,
    description: 'Advanced specialization and leadership in technology & management.',
    accent: '#18357a',
    courses: [
      { id: 'me-ise', name: "Industrial Safety Engineering", icon: ShieldCheck, code: "ISE", duration: "2 Years", phd: true },
      { id: 'me-ped', name: "Power Electronics & Drives", icon: Zap, code: "PED", duration: "2 Years", phd: true },
      { id: 'me-ae', name: "Automotive Electronics", icon: CarFront, code: "AE", duration: "2 Years", phd: true },
      { id: 'me-se', name: "M.E Software Engineering", icon: FileCode2, code: "MSE", duration: "2 Years", phd: true },
      { id: 'mba-general', name: "Master of Business (MBA)", icon: TrendingUp, code: "MBA", duration: "2 Years", phd: true },
      { id: 'mca', name: "Computer Applications (MCA)", icon: AppWindow, code: "MCA", duration: "2 Years", phd: true },
      { id: 'mba-iev', name: "Innovation & Entrepreneurship", icon: Rocket, code: "MIE", duration: "2 Years", phd: true },
      { id: 'phd', name: "Ph.D. ALL Departments", icon: Microscope, code: "PhD", duration: "Part-Time / Full Time", phd: true }
    ]
  },
  PHD: {
    title: 'Ph.D.',
    subtitle: 'Doctoral / Research Depts',
    icon: Search,
    description: 'Recognized Research Centers for advanced doctoral studies and innovation across all disciplines.',
    accent: '#ffc107',
    courses: [
      { id: 'phd', name: "Engineering & Technology", icon: Settings, code: "PhD-ENG", duration: "Full Time / Part Time", phd: true },
      { id: 'phd', name: "Management Studies", icon: Landmark, code: "PhD-MS", duration: "Full Time / Part Time", phd: true },
      { id: 'phd', name: "Science & Humanities", icon: Beaker, code: "PhD-SNH", duration: "Full Time / Part Time", phd: true },
      { id: 'phd', name: "Mathematics", icon: TrendingUp, code: "PhD-MA", duration: "Full Time / Part Time", phd: true }
    ]
  }
}

const Programs = () => {
  const [activeTab, setActiveTab] = useState('UG')
  const navigate = useNavigate()


  return (
    <section id="academics" className="relative py-16 lg:py-32 bg-[#FCFDFD] overflow-hidden">
      
      <div className="absolute bottom-0 left-0 w-full h-[300px] bg-gradient-to-t from-white to-transparent -z-10" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-10">
        
        {/* Modern Header Section */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 lg:gap-12 mb-16 lg:mb-28">
           <div className="max-w-3xl">
              <motion.div
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="inline-flex items-center gap-2 mb-5 lg:mb-6 bg-[#18357a]/5 px-4 py-1.5 rounded-full border border-[#18357a]/10"
              >
                <div className="h-1.5 w-1.5 rounded-full bg-[#ffc107] animate-pulse" />
                <span className="text-[9px] lg:text-[10px] font-black uppercase tracking-[0.3em] text-[#18357a]">Academic Excellence</span>
              </motion.div>
              
              <h2 className="text-3xl sm:text-4xl lg:text-6xl font-black text-[#18357a] font-display mb-6 lg:mb-8 leading-[1.1] lg:leading-[1.05]">
                Shape Your <span className="text-[#ffc107]">Future</span> <br className="hidden lg:block" />
                With Expert Learning
              </h2>
              
              <p className="text-sm lg:text-lg font-medium text-[#64779F] leading-relaxed max-w-xl">
                 Discover a spectrum of industry-leading programmes designed to cultivate next-gen engineers and leaders.
              </p>
           </div>

           {/* Tab Controls - Step-by-Step Mobile View */}
           <div className="w-full lg:w-auto">
             <div className="flex flex-col sm:flex-row p-1 bg-[#18357a]/5 rounded-[24px] lg:rounded-[24px] border border-[#18357a]/10">
                {Object.entries(programsData).map(([key, data]) => (
                   <button
                     key={key}
                     onClick={() => setActiveTab(key)}
                     className={`relative flex-1 lg:flex-none px-8 py-4 lg:py-3.5 rounded-2xl text-[11px] font-black uppercase tracking-widest transition-all duration-300 ${
                       activeTab === key 
                       ? 'text-white' 
                       : 'text-[#18357a] hover:bg-white/50'
                     }`}
                   >
                      {activeTab === key && (
                         <motion.div 
                           layoutId="tab-bg"
                           transition={{ type: "spring", bounce: 0.15, duration: 0.5 }}
                           className="absolute inset-0 bg-[#18357a] rounded-2xl shadow-lg"
                         />
                      )}
                      <span className="relative z-10">{data.title}</span>
                   </button>
                ))}
             </div>
           </div>
        </div>

        {/* Category Features */}
        <div className="grid lg:grid-cols-[0.7fr_1.3fr] gap-12 lg:gap-20 items-start">
           
           {/* Left Info Column - Wrapped to keep CTA below card in first column */}
           <div className="lg:sticky lg:top-32 relative">
              <motion.div
                key={`info-${activeTab}`}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="relative rounded-[3rem] overflow-hidden shadow-[0_30px_70px_rgba(0,0,0,0.25)] group min-h-[500px] flex flex-col justify-end"
              >
              {/* The "Full" Background Image */}
              <div className="absolute inset-0 z-0 rounded-[3rem] overflow-hidden">
                 <img src={courseBg} alt="" className="w-full h-full object-cover rounded-[3rem] transition-transform duration-700 group-hover:scale-105" />
                 {/* Dark Gradient Overlay for Readability */}
                 <div className="absolute inset-0 bg-gradient-to-t from-[#18357a]/95 via-[#18357a]/50 to-transparent rounded-[3rem]" />
              </div>

              <div className="space-y-8 relative z-10 p-10 lg:p-12">
                 <div>
                    <h3 className="text-3xl lg:text-4xl font-black text-white mb-4 leading-tight">{programsData[activeTab].subtitle}</h3>
                    <p className="text-white/90 font-medium leading-relaxed max-w-sm">
                       {programsData[activeTab].description}
                    </p>
                 </div>
              </div>
           </motion.div>

           {/* Hanging Admission Sign - Refined Creative Design */}
           <motion.div 
             initial={{ opacity: 0, y: -20 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             transition={{ duration: 1, type: "spring", bounce: 0.4 }}
             className="relative -mt-6 flex flex-col items-center group cursor-pointer z-20"
             onClick={() => navigate('/registration')}
           >
              {/* Triangular Hanging Rope */}
              <svg width="120" height="60" viewBox="0 0 120 60" className="mb-[-2px]">
                 <path d="M60 0 L10 60 M60 0 L110 60" stroke="#CBD5E1" strokeWidth="2" fill="none" />
                 <circle cx="60" cy="0" r="4" fill="#64779F" />
              </svg>

              {/* The Sign Board - More Rectangular */}
              <motion.div 
                animate={{ rotate: [0, 1, -1, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                className="bg-white px-12 py-10 rounded-[1.5rem] shadow-[0_20px_50px_rgba(0,0,0,0.12)] border border-slate-100 flex flex-col items-center text-center relative hover:shadow-[0_25px_60px_rgba(0,0,0,0.18)] transition-all"
              >
                  <span className="text-[14px] font-black text-red-600 uppercase tracking-[0.4em] mb-2">Admission</span>
                  <h4 className="text-5xl font-black text-[#18357a] uppercase mb-6 tracking-tight">Open</h4>
                  
                  <button className="flex items-center gap-3 px-8 py-4 bg-[#18357a] hover:bg-[#ffc107] text-white hover:text-[#18357a] rounded-2xl transition-all duration-300 shadow-lg shadow-black/10 scale-110">
                      <div className="w-2 h-2 rounded-full bg-[#ffc107] group-hover:bg-[#18357a] animate-pulse" />
                      <span className="text-[11px] font-black uppercase tracking-widest">Apply Now</span>
                  </button>

                  {/* Attachment Screws */}
                  <div className="absolute top-4 left-0 right-0 flex justify-between px-6">
                     <div className="w-2.5 h-2.5 rounded-full bg-slate-200 border border-slate-300 shadow-inner" />
                     <div className="w-2.5 h-2.5 rounded-full bg-slate-200 border border-slate-300 shadow-inner" />
                  </div>
              </motion.div>

              <p className="mt-6 text-[11px] font-black text-slate-400 uppercase tracking-[0.4em]">Academic Session 2025-26</p>
           </motion.div>
        </div>

           {/* Right Course Grid */}
           <div className="grid sm:grid-cols-2 gap-5">
              <AnimatePresence mode="popLayout">
                 {programsData[activeTab].courses.map((course, idx) => (
                    <motion.div
                      key={course.name}
                      layout
                      initial={{ opacity: 0, scale: 0.9, y: 30 }}
                      animate={{ opacity: 1, scale: 1, y: 0 }}
                      exit={{ opacity: 0, scale: 0.9, y: -30 }}
                      transition={{ 
                        duration: 0.4, 
                        delay: idx * 0.05,
                        layout: { duration: 0.3 }
                      }}
                      whileHover={{ y: -5 }}
                      onClick={() => {
                        const base = activeTab === 'UG' ? 'undergraduate' : 'postgraduate'
                        navigate(`/academics/${base}/${course.id}`)
                      }}
                      className="group bg-white p-7 rounded-[32px] border border-slate-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_20px_50px_rgba(24,53,122,0.1)] transition-all cursor-pointer relative overflow-hidden"
                    >
                       {/* Background Polish */}
                       <div className="absolute inset-0 bg-gradient-to-br from-white via-white to-slate-50/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                       <div className="absolute top-0 right-0 w-32 h-32 bg-[#18357a]/[0.02] rounded-full translate-x-1/2 -translate-y-1/2 group-hover:bg-[#ffc107]/5 transition-colors duration-500" />
                       
                       <div className="relative z-10">
                          <div className="flex items-center justify-between mb-6">
                             <div className="w-14 h-14 rounded-2xl bg-[#18357a]/5 flex items-center justify-center text-[#18357a] group-hover:bg-[#18357a] group-hover:text-white transition-all duration-300 transform group-hover:rotate-6">
                                <course.icon size={26} />
                             </div>
                             <div className="px-3 py-1 rounded-full bg-slate-100 group-hover:bg-[#ffc107]/20 transition-colors">
                                <span className="text-[8px] font-black text-[#64779F] group-hover:text-[#18357a] tracking-[0.2em] uppercase">Course Details</span>
                             </div>
                          </div>

                          <h4 className="text-[18px] font-black text-[#18357a] mb-2 leading-tight group-hover:translate-x-1 transition-transform duration-300">
                             {course.name}
                          </h4>
                          
                          <div className="flex items-center gap-2 mt-4">
                             <div className="h-1.5 w-1.5 rounded-full bg-[#ffc107]" />
                             <span className="text-[10px] font-black text-[#64779F] uppercase tracking-widest">{course.duration} Program</span>
                          </div>
                       </div>
                    </motion.div>
                 ))}
              </AnimatePresence>
           </div>

        </div>

      </div>
    </section>
  )
}

export default Programs
