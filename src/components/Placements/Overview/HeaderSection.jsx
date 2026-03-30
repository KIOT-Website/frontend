import React from 'react'
import { motion } from 'framer-motion'

const HeaderSection = () => {
  return (
    <div className="text-center mb-24">
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="inline-flex items-center gap-2.5 px-6 py-2.5 rounded-full bg-white border border-[#D5E2F4]/80 shadow-sm mb-8">
            <span className="text-sm font-black text-[#18357a] uppercase tracking-[0.2em]">Institutional Excellence</span>
        </div>
        
        <h1 className="text-4xl md:text-5xl lg:text-[3.5rem] font-black text-[#18357a] mb-8 tracking-tighter leading-[1.1]">
          Shaping Careers <br className="hidden md:block" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#18357a] via-[#224292] to-[#ffc107] uppercase inline-block mt-2">with Purpose</span>
        </h1>
        
        <div className="max-w-4xl mx-auto p-8 rounded-[2.5rem] bg-white border-2 border-transparent border-l-4 border-l-[#ffc107] shadow-xl relative hover:border-[#ffc107] transition-all duration-500 group">
          <p className="text-[#64779F] font-bold text-sm md:text-base leading-relaxed text-left italic">
            At Knowledge Institute of Technology (KIOT), Training and Placement is not a final step — it is a continuous journey. From the first year to graduation, students are guided, trained, and positioned to meet real industry expectations with confidence.
          </p>
        </div>
      </motion.div>
    </div>
  )
}

export default HeaderSection
