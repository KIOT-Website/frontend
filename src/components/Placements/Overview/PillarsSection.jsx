import React from 'react'
import { motion } from 'framer-motion'
import { Target } from 'lucide-react'

const pillars = [
  {
    title: "Preparation",
    desc: "Focused training in aptitude, communication, and technical skills to build a strong foundation."
  },
  {
    title: "Exposure",
    desc: "Regular interaction with industry through internships, workshops, and live opportunities."
  },
  {
    title: "Placement",
    desc: "Structured recruitment support connecting students with leading organizations."
  }
];

const PillarsSection = () => {
  return (
    <div className="mb-32">
       <div className="flex flex-col items-center mb-16">
          <h2 className="text-2xl font-black text-[#18357a] flex items-center justify-center gap-4 uppercase tracking-tight">
            <Target size={28} className="text-[#ffc107]" />
            Three Pillars
          </h2>
          <div className="w-16 h-1 bg-[#ffc107] mt-4 rounded-full" />
       </div>
       
       <div className="grid lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {pillars.map((pillar, idx) => (
            <motion.div 
               key={idx}
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ delay: idx * 0.1, duration: 0.6 }}
               className="relative group bg-white p-8 rounded-[2rem] border border-[#D5E2F4]/50 shadow-[0_20px_50px_rgba(24,53,122,0.03)] hover:shadow-[0_30px_70px_rgba(24,53,122,0.08)] hover:scale-[1.02] transition-all duration-500 overflow-hidden"
            >
               <div className="absolute top-0 left-0 w-1.5 h-full bg-[#18357a]/10 group-hover:bg-[#ffc107] transition-all duration-500" />
               <div className="relative z-10 text-center">
                  <h3 className="text-2xl font-black text-[#18357a] mb-5 group-hover:text-[#4666B4] transition-colors uppercase leading-none px-2">
                     {pillar.title}
                  </h3>
                  <p className="text-[#64779F] font-semibold text-[15px] leading-relaxed">
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
