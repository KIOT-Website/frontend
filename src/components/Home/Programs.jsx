import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  GraduationCap, Layers, 
  Settings, Radio, Zap, Monitor, Building2, Globe, Briefcase, Brain, Cpu,
  ShieldCheck, CircuitBoard, CarFront, Code, TrendingUp, AppWindow, Rocket, FileCode2,
  ArrowRight, Search, Beaker, Landmark, Atom
} from 'lucide-react'

const programsData = {
  UG: {
    title: 'Undergraduate',
    subtitle: 'B.E. / B.Tech Programmes',
    icon: GraduationCap,
    description: 'Foundation for technical brilliance and engineering innovation.',
    accent: '#ffc107',
    courses: [
      { name: "Mechanical Engineering", icon: Settings, code: "MECH", duration: "4 Years", phd: true },
      { name: "Electronics & Communication", icon: Radio, code: "ECE", duration: "4 Years", phd: true },
      { name: "Electrical & Electronics", icon: Zap, code: "EEE", duration: "4 Years", phd: true },
      { name: "Computer Science & Engineering", icon: Monitor, code: "CSE", duration: "4 Years", phd: true },
      { name: "Civil Engineering", icon: Building2, code: "CIVIL", duration: "4 Years", phd: true },
      { name: "Information Technology", icon: Globe, code: "IT", duration: "4 Years", phd: true },
      { name: "Computer Science & Business", icon: Briefcase, code: "CSBS", duration: "4 Years", phd: true },
      { name: "AI and Data Science", icon: Brain, code: "AIDS", duration: "4 Years", phd: true },
      { name: "Electronics & Computer Eng.", icon: Cpu, code: "ECC", duration: "4 Years", phd: true }
    ]
  },
  PG: {
    title: 'Postgraduate',
    subtitle: 'M.E. / MBA / MCA Programmes',
    icon: Layers,
    description: 'Advanced specialization and leadership in technology & management.',
    accent: '#18357a',
    courses: [
      { name: "Industrial Safety Engineering", icon: ShieldCheck, code: "ISE", duration: "2 Years", phd: true },
      { name: "VLSI Design", icon: CircuitBoard, code: "VLSI", duration: "2 Years", phd: true },
      { name: "Automotive Electronics", icon: CarFront, code: "AE", duration: "2 Years", phd: true },
      { name: "Embedded System Tech.", icon: Cpu, code: "EST", duration: "2 Years", phd: true },
      { name: "Computer Science & Eng.", icon: Code, code: "MCSE", duration: "2 Years", phd: true },
      { name: "Master of Business (MBA)", icon: TrendingUp, code: "MBA", duration: "2 Years", phd: true },
      { name: "Computer Applications (MCA)", icon: AppWindow, code: "MCA", duration: "2 Years", phd: true },
      { name: "Innovation & Entrepreneurship", icon: Rocket, code: "MIE", duration: "2 Years", phd: true },
      { name: "Software Engineering", icon: FileCode2, code: "MSE", duration: "2 Years", phd: true }
    ]
  },
  PHD: {
    title: 'Ph.D.',
    subtitle: 'Doctoral / Research Depts',
    icon: Search,
    description: 'Recognized Research Centers for advanced doctoral studies and innovation across all disciplines.',
    accent: '#ffc107',
    courses: [
      { name: "Engineering & Technology", icon: Settings, code: "PhD-ENG", duration: "Full Time / Part Time", phd: true },
      { name: "Management Studies", icon: Landmark, code: "PhD-MS", duration: "Full Time / Part Time", phd: true },
      { name: "Science & Humanities", icon: Beaker, code: "PhD-SNH", duration: "Full Time / Part Time", phd: true },
      { name: "Mathematics", icon: TrendingUp, code: "PhD-MA", duration: "Full Time / Part Time", phd: true }
    ]
  }
}

const Programs = () => {
  const [activeTab, setActiveTab] = useState('UG')

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
           
           {/* Left Info Column */}
           <motion.div
             key={`info-${activeTab}`}
             initial={{ opacity: 0, x: -20 }}
             animate={{ opacity: 1, x: 0 }}
             className="lg:sticky lg:top-32"
           >
              <div className="space-y-8">
                 <div className="w-16 h-16 lg:w-20 lg:h-20 rounded-2xl lg:rounded-3xl bg-[#18357a] flex items-center justify-center text-[#ffc107] shadow-xl shadow-[#18357a]/20">
                    <div className="scale-110 lg:scale-125">
                       {activeTab === 'UG' ? (
                          <GraduationCap className="w-8 h-8 lg:w-10 lg:h-10" />
                       ) : activeTab === 'PG' ? (
                          <Layers className="w-8 h-8 lg:w-10 lg:h-10" />
                       ) : (
                          <Search className="w-8 h-8 lg:w-10 lg:h-10" />
                       )}
                    </div>
                 </div>
                 
                 <div>
                    <h3 className="text-2xl lg:text-4xl font-black text-[#18357a] mb-4">{programsData[activeTab].subtitle}</h3>
                    <p className="text-[#64779F] font-medium leading-relaxed">
                       {programsData[activeTab].description}
                    </p>
                 </div>

                 <div className="flex flex-col gap-4 text-sm font-bold text-[#18357a]">
                    <div className="flex items-center gap-3">
                       <div className="w-1.5 h-1.5 rounded-full bg-[#ffc107]" />
                       <span>Recognized Research Centers</span>
                    </div>
                    <div className="flex items-center gap-3">
                       <div className="w-1.5 h-1.5 rounded-full bg-[#ffc107]" />
                       <span>Industry-Linked Curriculum</span>
                    </div>
                    <div className="flex items-center gap-3">
                       <div className="w-1.5 h-1.5 rounded-full bg-[#ffc107]" />
                       <span>Advanced Lab Facilities</span>
                    </div>
                 </div>

                 <button className="flex items-center gap-3 text-xs font-black uppercase tracking-widest text-[#18357a] group mt-8">
                    View full prospectus
                    <ArrowRight size={16} className="text-[#ffc107] group-hover:translate-x-1 transition-transform" />
                 </button>
              </div>
           </motion.div>

           {/* Right Course Grid */}
           <div className="grid sm:grid-cols-2 gap-5">
              <AnimatePresence mode="popLayout">
                 {programsData[activeTab].courses.map((course, idx) => (
                    <motion.div
                      key={course.name}
                      layout
                      initial={{ opacity: 0, scale: 0.9, y: 10 }}
                      animate={{ opacity: 1, scale: 1, y: 0 }}
                      exit={{ opacity: 0, scale: 0.9, y: -10 }}
                      transition={{ 
                        duration: 0.3, 
                        delay: idx * 0.05,
                        layout: { duration: 0.3 }
                      }}
                      whileHover={{ y: -5 }}
                      className="group bg-white p-7 rounded-[32px] border border-[#D5E2F4]/60 shadow-[0_15px_35px_rgba(24,53,122,0.03)] transition-all cursor-pointer relative overflow-hidden"
                    >
                       {/* Abstract Accent */}
                       <div className="absolute top-0 right-0 w-24 h-24 bg-[#18357a]/[0.02] rounded-full translate-x-1/2 -translate-y-1/2 transition-colors group-hover:bg-[#ffc107]/10" />
                       
                       <div className="flex items-start justify-between mb-6">
                          <div className="w-12 h-12 rounded-2xl bg-[#18357a]/5 flex items-center justify-center text-[#ffc107] transition-all group-hover:bg-[#18357a]">
                             <course.icon size={22} />
                          </div>
                          <span className="text-[9px] font-black text-[#64779F]/40 tracking-widest uppercase">{course.code}</span>
                       </div>

                       <h4 className="text-[17px] font-black text-[#18357a] mb-2 leading-tight group-hover:text-[#18357a] transition-colors pr-8">
                          {course.name}
                       </h4>
                       <div className="flex flex-wrap items-center gap-2 text-[10px] font-bold text-[#64779F] opacity-70 group-hover:opacity-100 transition-opacity">
                          <span>{course.duration}</span>
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
