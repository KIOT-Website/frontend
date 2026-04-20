import React from 'react'
import { motion } from 'framer-motion'
import { Target, Globe, Briefcase, Sparkles } from 'lucide-react'

const pillars = [
  {
    title: "Preparation",
    desc: "Focused training in aptitude, communication, and technical skills to build a strong foundation.",
    icon: Target,
    color: "#ffc107"
  },
  {
    title: "Exposure",
    desc: "Regular interaction with industry through internships, workshops, and live opportunities.",
    icon: Globe,
    color: "#18357a"
  },
  {
    title: "Placement",
    desc: "Structured recruitment support connecting students with leading organizations.",
    icon: Briefcase,
    color: "#ffc107"
  }
];

const PillarsSection = () => {
  return (
    <div className="mb-32 px-6">
       <div className="flex flex-col items-center mb-16">
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-[#18357a]/5 border border-[#18357a]/10 mb-4"
          >
             <Sparkles size={12} className="text-[#ffc107]" />
             <span className="text-[10px] font-semibold text-[#18357a] tracking-[0.1em]">Core Philosophy</span>
          </motion.div>
          <h2 className="text-3xl md:text-4xl font-bold text-black tracking-tight text-center">
            Three <span className="text-[#ffc107]">Pillars</span>
          </h2>
          <div className="w-12 h-1 bg-[#ffc107] mt-4 rounded-full" />
       </div>
       
       <div className="grid lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {pillars.map((pillar, idx) => (
            <motion.div 
               key={idx}
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               whileHover={{ y: -8 }}
               transition={{ delay: idx * 0.1, duration: 0.5 }}
               className="relative group bg-white p-8 rounded-2xl border border-slate-100 shadow-xl shadow-black/[0.03] hover:border-[#18357a]/20 transition-all duration-500"
            >
               <div className="relative z-10 flex flex-col items-center text-center">
                  <div className={`w-16 h-16 rounded-xl mb-6 flex items-center justify-center transition-all duration-500 ${
                    idx === 1 ? 'bg-[#18357a] text-white shadow-lg' : 'bg-[#ffc107] text-[#18357a] shadow-lg shadow-[#ffc107]/20'
                  }`}>
                     <pillar.icon size={28} />
                  </div>
                  
                  <h3 className="text-xl font-bold text-black mb-3 tracking-tight">
                     {pillar.title}
                  </h3>
                  
                  <p className="text-black/70 font-medium text-[14px] leading-relaxed">
                     {pillar.desc}
                  </p>
               </div>
            </motion.div>
          ))}
       </div>
    </div>
  )
}

export default PillarsSection
