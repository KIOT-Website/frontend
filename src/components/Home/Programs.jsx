import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useNavigate } from 'react-router-dom'
import { 
  GraduationCap, Layers, 
  Settings, Radio, Zap, Monitor, Building2, Globe, Briefcase, Brain, Cpu,
  ShieldCheck, CircuitBoard, CarFront, Code, TrendingUp, AppWindow, Rocket, FileCode2,
  ArrowRight, Search, Beaker, Landmark, Atom, Microscope,
  Play, X
} from 'lucide-react'

import courseBg from '../../assets/main/home course.webp'
import successVideo from '../../assets/main/susccess story.mp4'

const programsData = {
  UG: {
    title: 'UG',
    subtitle: 'B.E. / B.Tech Programmes',
    icon: GraduationCap,
    description: 'Foundation for technical brilliance and engineering innovation.',
    accent: '#ffc107',
    courses: [
      { id: 'be-mechanical', name: "Mechanical Engineering", icon: Settings, code: "MECH", duration: "4 Years", phd: true },
      { id: 'be-ece', name: "Electronics and Communication Engineering", icon: Radio, code: "ECE", duration: "4 Years", phd: true },
      { id: 'be-eee', name: "Electrical and Electronics Engineering", icon: Zap, code: "EEE", duration: "4 Years", phd: true },
      { id: 'be-cse', name: "Computer Science and Engineering", icon: Monitor, code: "CSE", duration: "4 Years", phd: true },
      { id: 'be-civil', name: "Civil Engineering", icon: Building2, code: "CIVIL", duration: "4 Years", phd: true },
      { id: 'btech-it', name: "Information Technology", icon: Globe, code: "IT", duration: "4 Years", phd: true },
      { id: 'btech-csbs', name: "Computer Science and Business Systems", icon: Briefcase, code: "CSBS", duration: "4 Years", phd: true },
      { id: 'btech-aids', name: "Artificial Intelligence and Data Science", icon: Brain, code: "AI&DS", duration: "4 Years", phd: true },
      { id: 'be-ecm', name: "Electronics and Computer Engineering", icon: Cpu, code: "ECX", duration: "4 Years", phd: true }
    ]
  },
  PG: {
    title: 'PG',
    subtitle: 'M.E. / MBA / MCA Programmes',
    icon: Layers,
    description: 'Advanced specialization and leadership in technology & management.',
    accent: '#224292',
    courses: [
      { id: 'me-ise', name: "Industrial Safety Engineering", icon: ShieldCheck, code: "ISE", duration: "2 Years", phd: true },
      { id: 'me-ae', name: "Automotive Electronics", icon: CarFront, code: "AE", duration: "2 Years", phd: true },
      { id: 'me-ped', name: "Power Electronics and Drives", icon: Zap, code: "PED", duration: "2 Years", phd: true },
      { id: 'me-se', name: "Software Engineering", icon: FileCode2, code: "SE", duration: "2 Years", phd: true },
      { id: 'mba-general', name: "MBA - Master of Business Administration (General)", icon: TrendingUp, code: "MBA-General", duration: "2 Years", phd: true },
      { id: 'mca', name: "MCA - Master of Computer Applications", icon: AppWindow, code: "MCA", duration: "2 Years", phd: true },
      { id: 'mba-iev', name: "MBA - Master of Business Administration (Innovation, Entrepreneurship and Venture Development)", icon: Rocket, code: "MBA-IEV", duration: "2 Years", phd: true },
      { id: 'phd', name: "Ph.D. All Departments", icon: Microscope, code: "", duration: "Part-Time / Full Time", phd: true }
    ]
  },
  PHD: {
    title: 'Ph.D.',
    subtitle: 'Doctoral / Research Depts',
    icon: Search,
    description: 'Recognized Research Centers for advanced doctoral studies and innovation across all disciplines.',
    accent: '#ffc107',
    courses: [
      { id: 'phd', name: "Engineering & Technology", icon: Settings, code: "", duration: "Full Time / Part Time", phd: true },
      { id: 'phd', name: "Management Studies", icon: Landmark, code: "", duration: "Full Time / Part Time", phd: true },
      { id: 'phd', name: "Science & Humanities", icon: Beaker, code: "", duration: "Full Time / Part Time", phd: true },
      { id: 'phd', name: "Mathematics", icon: TrendingUp, code: "", duration: "Full Time / Part Time", phd: true }
    ]
  }
}

const AdmissionSign = ({ navigate }) => (
  <motion.div 
    initial={{ opacity: 0, y: -20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 1, type: "spring", bounce: 0.4 }}
    className="relative mt-8 lg:-mt-6 flex flex-col items-center group z-20"
  >
     {/* Triangular Hanging Rope - Desktop Only */}
     <svg width="80" height="40" viewBox="0 0 100 50" className="mb-[-2px] hidden lg:block">
        <path d="M50 0 L15 50 M50 0 L85 50" stroke="#CBD5E1" strokeWidth="1.5" fill="none" />
        <circle cx="50" cy="0" r="3" fill="#64779F" />
     </svg>

     {/* The Sign Board */}
     <motion.div 
       animate={{ rotate: [0, 1, -1, 0] }}
       transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
       onClick={() => navigate('/admissions')}
       className="bg-[#F8FAFC] w-[190px] h-[170px] rounded-xl border border-slate-200 flex flex-col items-center justify-center text-center relative hover:bg-white transition-all cursor-pointer shadow-lg shadow-black/5"
     >
         <span className="text-[10px] font-black text-red-600 uppercase tracking-[0.3em] mb-1">Admission</span>
         <h4 className="text-3xl font-semibold text-[#224292] mb-4 tracking-tight font-graphik">Open</h4>
         
         <button className="flex items-center gap-2 px-5 py-2.5 bg-[#224292] hover:bg-[#ffc107] text-white hover:text-[#224292] rounded-lg transition-all duration-300 shadow-sm">
             <div className="w-1 h-1 rounded-full bg-[#ffc107] group-hover:bg-[#224292] animate-pulse" />
             <span className="text-[8px] font-black uppercase tracking-widest">Apply Now</span>
         </button>

         {/* Attachment Screws */}
         <div className="absolute top-3 left-0 right-0 flex justify-between px-4">
            <div className="w-1.5 h-1.5 rounded-full bg-slate-300 border border-slate-400 shadow-inner" />
            <div className="w-1.5 h-1.5 rounded-full bg-slate-300 border border-slate-400 shadow-inner" />
         </div>
     </motion.div>
  </motion.div>
)

const CourseGrid = ({ activeTab, navigate }) => (
  <div className="grid sm:grid-cols-2 gap-3">
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
             className="group bg-black/[0.02] p-3.5 rounded-xl border border-slate-200/60 hover:bg-white transition-all cursor-pointer relative overflow-hidden shadow-sm hover:shadow-lg"
           >
              <div className="absolute inset-0 bg-gradient-to-br-white via-white to-slate-50/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              {/* Top Right Blue Design Accent */}
              <div className="absolute top-0 right-0 w-10 h-10 bg-[#224292] clip-triangle" />
              <div className="absolute top-0 right-0 w-6 h-6 bg-[#ffc107] clip-triangle" />

              <div className="relative z-10">
                 <div className="flex items-center justify-between mb-3">
                    <div className="w-10 h-10 rounded-lg bg-[#224292]/5 flex items-center justify-center text-[#224292] group-hover:bg-[#224292] group-hover:text-white transition-all duration-300 transform group-hover:rotate-6">
                       <course.icon size={18} />
                    </div>
                 </div>

                 <h4 className="text-[13px] lg:text-[14px] font-bold text-black font-graphik mb-0.5 leading-tight group-hover:translate-x-1 transition-transform duration-300">
                    {course.name}
                 </h4>
                 {course.code && (
                    <p className="text-[9px] font-black text-[#224292] tracking-wider group-hover:translate-x-1 transition-transform duration-300 mb-1.5">
                       {course.code}
                    </p>
                 )}
                 
                 <div className="flex items-center gap-2 mt-2">
                    <div className="h-1 w-1 rounded-full bg-[#ffc107]" />
                    <span className="text-[8px] font-black text-black uppercase tracking-widest">{course.duration} Program</span>
                 </div>
              </div>
           </motion.div>
        ))}
     </AnimatePresence>
  </div>
)

const Programs = () => {
  const [activeTab, setActiveTab] = useState('UG')
  const [showVideo, setShowVideo] = useState(false)
  const navigate = useNavigate()


  return (
    <section id="academics" className="relative py-6 lg:py-8 bg-white overflow-hidden">
      
      <div className="absolute bottom-0 left-0 w-full h-[300px] bg-gradient-to-t from-white to-transparent -z-10" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-10">
        
        {/* Modern Header Section */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 lg:gap-12 mb-8 lg:mb-12">
           <div className="max-w-3xl">
              
              <h2 className="text-3xl lg:text-5xl font-semibold text-[#224292] font-graphik mb-6 lg:mb-8 leading-[1.1] lg:leading-[1.05]">
                Shape your future with <br className="hidden lg:block" />
                AI embedded <span className="text-[#ffc107]">Engineering <br className="hidden xl:block" /> & Management courses.</span>
              </h2>
              
              <p className="text-base lg:text-lg font-medium text-black leading-relaxed max-w-xl">
                 Discover a spectrum of industry-leading programmes designed to cultivate next-gen engineers and leaders.
              </p>
           </div>

           {/* Tab Controls - Step-by-Step Mobile View */}
           <div className="w-full lg:w-auto">
             <div className="flex flex-col sm:flex-row p-1 bg-[#224292]/5 rounded-[24px] lg:rounded-[24px] border border-[#224292]/10">
                {Object.entries(programsData).map(([key, data]) => (
                   <button
                     key={key}
                     onClick={() => setActiveTab(key)}
                     className={`relative flex-1 lg:flex-none px-8 py-4 lg:py-3.5 rounded-2xl text-[11px] font-black tracking-widest transition-all duration-300 ${
                       activeTab === key 
                       ? 'text-white' 
                       : 'text-[#224292] hover:bg-white/50'
                     }`}
                   >
                      {activeTab === key && (
                         <motion.div 
                           layoutId="tab-bg"
                           transition={{ type: "spring", bounce: 0.15, duration: 0.5 }}
                           className="absolute inset-0 bg-[#224292] rounded-2xl shadow-lg"
                         />
                      )}
                      <span className="relative z-10">{data.title}</span>
                   </button>
                ))}
             </div>
           </div>
        </div>

        {/* Main Content Area - Strategic Responsive Structure */}
        <div className="grid lg:grid-cols-[0.8fr_1.2fr] gap-12 lg:gap-20 items-start">
           
           {/* Column 1: Info & Contextual Features */}
           <div className="flex flex-col space-y-12">
              
              {/* Info Card - Always First (Order 1) */}
              <div className="order-1 w-full lg:sticky lg:top-32 relative">
                 <motion.div
                   key={`info-${activeTab}`}
                   initial={{ opacity: 0, y: 30 }}
                   animate={{ opacity: 1, y: 0 }}
                   transition={{ duration: 0.6, ease: "easeOut" }}
                   className="relative rounded-3xl overflow-hidden group min-h-[300px] md:min-h-[380px] flex flex-col justify-end border border-slate-100"
                 >
                   <div className="absolute inset-0 z-0 rounded-3xl overflow-hidden">
                      <img src={courseBg} alt="" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#224292]/95 via-[#224292]/50 to-transparent" />
                   </div>

                   <div className="space-y-4 relative z-10 p-8 lg:p-10">
                      <div>
                         <h3 className="text-2xl lg:text-3xl font-semibold text-white mb-4 leading-tight font-graphik">{programsData[activeTab].subtitle}</h3>
                         <p className="text-white/90 font-medium leading-relaxed max-w-sm">
                            {programsData[activeTab].description}
                         </p>
                      </div>
                   </div>
                 </motion.div>
              </div>

              {/* Course Grid Overlay for Mobile (Order 2) */}
              <div className="block lg:hidden order-2 w-full">
                 <CourseGrid activeTab={activeTab} navigate={navigate} />
              </div>

              {/* Features (Order 3 Mobile / Column 1 Desktop) */}
              <div className="order-3 flex flex-col space-y-2">
                 {/* Highlights List */}
                  <div className="space-y-0 w-full px-4 mb-8">
                    {[
                       { text: 'Industry Ready AI Enabled Curriculum', icon: Brain },
                       { text: '360 Degree Career Development Program', icon: Rocket },
                       { text: '30+ Centres of Excellence (COEs)', icon: Building2 },
                       { text: 'Industry Linked Advanced Labs', icon: Beaker },
                       { text: 'Culture of Innovation & Creativity', icon: Zap }
                    ].map((item, i) => (
                       <motion.div 
                         key={i}
                         initial={{ opacity: 0, x: -10 }}
                         whileInView={{ opacity: 1, x: 0 }}
                         transition={{ delay: i * 0.1 }}
                         className="flex items-center gap-4 py-4 border-b border-slate-100 last:border-0 group/item cursor-default"
                       >
                          <div className="h-10 w-10 rounded-full bg-[#ffc107] flex items-center justify-center text-[#224292] shadow-sm group-hover/item:scale-110 transition-transform shrink-0">
                             <item.icon size={18} />
                          </div>
                          <span className="text-[15px] font-semibold text-black tracking-tight leading-tight">
                             {item.text}
                          </span>
                       </motion.div>
                    ))}
                 </div>


              </div>
           </div>

           {/* Column 2: The Full Grid (Desktop Only Container) */}
           <div className="hidden lg:block">
              <CourseGrid activeTab={activeTab} navigate={navigate} />
           </div>

        </div>

      </div>

      {/* Video Modal - Global Stacking Context */}
      <AnimatePresence>
        {showVideo && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[9999] flex items-center justify-center p-4 md:p-10 bg-black/95 backdrop-blur-md"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative w-full max-w-6xl aspect-video bg-black rounded-3xl overflow-hidden shadow-[0_0_100px_rgba(0,0,0,0.5)] border border-white/10"
            >
              <button 
                onClick={() => setShowVideo(false)}
                className="absolute top-6 right-6 z-[10000] w-12 h-12 rounded-full bg-white/10 backdrop-blur-md text-white hover:bg-[#ffc107] hover:text-[#224292] flex items-center justify-center transition-all duration-300 shadow-xl"
              >
                <X size={28} strokeWidth={3} />
              </button>
              <video 
                src={successVideo} 
                autoPlay 
                controls 
                preload="metadata"
                className="w-full h-full object-contain"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}

export default Programs
