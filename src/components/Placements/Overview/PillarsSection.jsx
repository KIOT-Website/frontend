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
    color: "#224292"
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
          <h2 className="text-4xl md:text-5xl font-black text-[#224292] leading-tight tracking-tighter font-graphik uppercase">
            Three <span className="text-[#ffc107]">Pillars</span>
          </h2>
          <div className="w-16 h-1 bg-[#ffc107] mt-4 rounded-full" />
       </div>
        <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
           {pillars.map((pillar, idx) => (
             <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                whileHover={{ y: -12 }}
                transition={{ delay: idx * 0.1, duration: 0.6 }}
                className="relative group bg-white p-10 rounded-[2.5rem] border border-slate-100 shadow-[0_20px_50px_rgba(24,53,122,0.04)] hover:shadow-[0_40px_80px_rgba(24,53,122,0.08)] transition-all duration-700 overflow-hidden"
             >
                {/* Decorative Numbering */}
                <div className="absolute top-8 right-10 text-6xl font-black text-slate-50 group-hover:text-[#ffc107]/10 transition-colors duration-700 select-none">
                   0{idx + 1}
                </div>

                <div className="relative z-10 flex flex-col items-center text-center">
                   <div className="w-20 h-20 rounded-3xl mb-8 flex items-center justify-center transition-all duration-700 bg-slate-50 border border-slate-100 group-hover:scale-110 group-hover:bg-white group-hover:shadow-2xl">
                      <pillar.icon size={32} strokeWidth={1.5} className="text-[#224292] group-hover:text-[#ffc107] transition-colors" />
                   </div>
                   
                   <h3 className="text-2xl font-black text-[#224292] mb-4 tracking-tighter uppercase font-graphik">
                      {pillar.title}
                   </h3>
                   
                   <div className="w-10 h-0.5 bg-[#ffc107] mb-6 rounded-full group-hover:w-16 transition-all duration-700" />
                   
                   <p className="text-black font-bold text-[14px] leading-relaxed opacity-90">
                      {pillar.desc}
                   </p>
                </div>

                {/* Bottom Accent */}
                <div className="absolute bottom-0 left-0 right-0 h-1.5 bg-gradient-to-r from-[#224292] to-[#ffc107] translate-y-1.5 group-hover:translate-y-0 transition-transform duration-700" />
             </motion.div>
           ))}
        </div>
    </div>
  )
}

export default PillarsSection
