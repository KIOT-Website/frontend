import React from 'react'
import HeaderSection from './HeaderSection'
import TracksSection from './TracksSection'
import { motion } from 'framer-motion'
import { Sparkles } from 'lucide-react'

const roadmap = [
  { year: "Year 1", title: "Foundation Skills", desc: "Focus on basic aptitude, professional communication, and language fundamentals." },
  { year: "Year 2", title: "Advanced Training", desc: "Technical COE enrollment and intensive quantitative reasoning development." },
  { year: "Year 3", title: "Industry Exposure", desc: "Practical internships, hackathons, and global industry certifications." },
  { year: "Final Year", title: "Placement Readiness", desc: "Intensive mock interviews, HR mentoring, and actual recruitment drives." }
]

const TrainingFlow = () => {
  return (
    <div className="mb-32">
       <div className="flex flex-col items-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#ffc107]/10 border border-[#ffc107]/20 mb-6">
             <Sparkles size={14} className="text-[#18357a]" />
             <span className="text-[10px] font-bold text-[#18357a] uppercase tracking-widest">Training Roadmap</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-black tracking-tight text-center uppercase">Student Success <span className="text-[#ffc107]">Journey</span></h2>
          <div className="w-16 h-1.5 bg-[#ffc107] mt-5 rounded-full" />
       </div>

       <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto px-6 relative">
          {/* Connecting Line (Desktop) */}
          <div className="hidden lg:block absolute top-[60px] left-20 right-20 h-0.5 bg-slate-200/50 -z-0" />

          {roadmap.map((step, idx) => (
            <motion.div 
               key={idx}
               initial={{ opacity: 0, scale: 0.95 }}
               whileInView={{ opacity: 1, scale: 1 }}
               viewport={{ once: true }}
               transition={{ delay: idx * 0.1 }}
               className="bg-white p-10 rounded-2xl border border-slate-100 shadow-xl shadow-black/[0.03] text-center group hover:bg-[#18357a] transition-all duration-500 relative z-10"
            >
               <div className="w-12 h-12 rounded-full bg-[#18357a] text-[#ffc107] font-bold flex items-center justify-center mx-auto mb-8 group-hover:bg-[#ffc107] group-hover:text-[#18357a] transition-all duration-500 shadow-lg relative z-20">
                  {idx + 1}
               </div>
               <p className="text-[10px] font-bold text-[#ffc107] uppercase tracking-[0.2em] mb-3">{step.year}</p>
               <h3 className="text-lg font-bold text-black mb-4 tracking-tight group-hover:text-white transition-colors">{step.title}</h3>
               <p className="text-black/60 font-medium text-sm leading-relaxed group-hover:text-white/70 transition-colors">{step.desc}</p>
            </motion.div>
          ))}
       </div>
    </div>
  )
}

const TrainingOverview = () => {
  return (
    <div className="relative bg-[#F8FAFC] py-16 min-h-screen overflow-hidden font-graphik">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-gradient-to-bl from-[#18357a]/5 via-transparent to-transparent rounded-full blur-3xl pointer-events-none" />
      
      <section className="relative z-10 max-w-7xl mx-auto">
        <HeaderSection />
        <TracksSection />
        <div className="px-6 sm:px-10 lg:px-12">
          <TrainingFlow />
        </div>
      </section>
    </div>
  )
}

export default TrainingOverview
