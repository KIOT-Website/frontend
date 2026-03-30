import React from 'react'
import { motion } from 'framer-motion'
import { Briefcase } from 'lucide-react'

const HeaderSection = () => {
  return (
    <div className="text-center mb-16">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="flex flex-col items-center"
      >
        <div className="inline-flex items-center gap-2.5 px-6 py-2.5 rounded-full bg-white border border-[#18357a]/10 shadow-sm mb-8">
           <Briefcase size={16} className="text-[#18357a]" />
           <span className="text-xs font-black text-[#18357a] uppercase tracking-[0.2em]">Institutional Empowerment</span>
        </div>
        
        <h1 className="text-4xl md:text-5xl lg:text-[4rem] font-black text-[#18357a] mb-8 tracking-tighter leading-[1] uppercase">
           Training <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#18357a] to-[#ffc107]">& Development</span>
        </h1>
        
        <div className="max-w-3xl mx-auto p-1 bg-gradient-to-r from-[#18357a]/10 via-[#ffc107]/10 to-[#18357a]/10 rounded-[3rem] mb-12">
          <div className="bg-white/80 backdrop-blur-md px-10 py-8 rounded-[2.9rem] border border-white/50 shadow-xl">
            <p className="text-[#64779F] font-bold text-base md:text-lg leading-relaxed text-center italic">
              "Systematically engineering global career readiness through multi-tiered technical, linguistic, and aptitude frameworks."
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  )
}

export default HeaderSection
