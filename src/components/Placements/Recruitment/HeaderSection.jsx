import React from 'react'
import { motion } from 'framer-motion'
import { Settings, Users } from 'lucide-react'

const HeaderSection = () => {
  return (
    <div className="max-w-7xl mx-auto px-6 mb-24">
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex flex-col"
        >
          <div className="inline-flex items-center gap-2.5 px-5 py-1.5 rounded-full bg-[#224292]/5 border border-[#224292]/10 shadow-sm mb-6 w-fit">
             <Settings size={14} className="text-[#224292]" />
             <span className="text-[10px] font-bold text-[#224292] uppercase tracking-[0.1em]">Placement Ecosystem</span>
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-5xl font-bold text-black mb-8 tracking-tighter leading-tight">
             Recruitment <span className="text-[#ffc107]">Process</span>
          </h1>
          
          <div className="relative pl-8 border-l-4 border-[#ffc107]">
            <p className="text-black font-semibold text-lg md:text-xl leading-relaxed text-justify italic">
              "A precision-engineered journey transforming academic potential into professional excellence, step by step."
            </p>
          </div>
        </motion.div>

        <motion.div
           initial={{ opacity: 0, scale: 0.95 }}
           whileInView={{ opacity: 1, scale: 1 }}
           viewport={{ once: true }}
           transition={{ duration: 1 }}
           className="relative group"
        >
          <div className="absolute top-0 right-0 w-48 h-48 bg-[#224292]/5 rounded-full -mr-24 -mt-24 blur-3xl opacity-50 transition-all group-hover:bg-[#ffc107]/10" />
          <div className="relative rounded-2xl overflow-hidden border-4 border-white shadow-2xl shadow-black/10 transition-all duration-700">
             <img 
               src="https://images.unsplash.com/photo-1543269865-cbf427effbad?q=80&w=1200&auto=format&fit=crop" 
               alt="Recruitment Cycle" 
               className="w-full h-[380px] object-cover group-hover:scale-105 transition-transform duration-1000"
             />
             <div className="absolute inset-0 bg-gradient-to-tr from-[#224292]/30 via-transparent to-transparent" />
             
             {/* Abstract Badge */}
             <div className="absolute bottom-6 right-6 p-5 bg-white/95 backdrop-blur-md rounded-2xl border border-white shadow-xl">
                <div className="flex items-center gap-4">
                   <div className="w-12 h-12 rounded-full bg-[#224292] text-[#ffc107] flex items-center justify-center shadow-lg"><Users size={22} /></div>
                   <div>
                      <p className="text-[10px] font-bold text-black/40 uppercase tracking-widest mb-0.5">Recruitment Cycle</p>
                      <p className="text-sm font-bold text-black uppercase tracking-tight">Step-by-Step Flow</p>
                   </div>
                </div>
             </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default HeaderSection
