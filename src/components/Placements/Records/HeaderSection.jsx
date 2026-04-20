import React from 'react'
import { motion } from 'framer-motion'
import { Activity, Sparkles } from 'lucide-react'

const HeaderSection = () => {
  return (
    <div className="relative text-center mb-24 lg:mb-32">
      {/* Decorative Background Elements */}
      <div className="absolute -top-10 left-1/2 -translate-x-1/2 w-full h-full pointer-events-none -z-10 overflow-hidden">
        <div className="absolute top-0 left-1/4 w-64 h-64 bg-[#18357a]/5 rounded-full blur-[80px] animate-pulse" />
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-[#ffc107]/10 rounded-full blur-[100px]" style={{ animationDelay: '2s' }} />
      </div>

      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="flex flex-col items-center"
      >
        {/* Floating Badge */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2 }}
          className="inline-flex items-center gap-2.5 px-6 py-2 rounded-full bg-white/40 backdrop-blur-md border border-white/60 shadow-[0_8px_32px_rgba(24,53,122,0.06)] mb-10 group"
        >
            <div className="relative">
              <Activity size={14} className="text-[#18357a] relative z-10" />
              <div className="absolute inset-0 bg-[#18357a]/20 blur-md rounded-full animate-ping" />
            </div>
            <span className="text-[10px] font-black text-[#18357a] uppercase tracking-[0.25em]">Placement Intelligence Matrix</span>
            <Sparkles size={14} className="text-[#ffc107] group-hover:rotate-12 transition-transform" />
        </motion.div>
        
        {/* Main Title */}
        <h1 className="text-5xl md:text-7xl lg:text-[5.5rem] font-black text-[#18357a] mb-10 tracking-tighter leading-[0.95] font-display">
            <span className="relative inline-block">
              <span className="relative z-10 text-transparent bg-clip-text bg-gradient-to-r from-[#18357a] via-[#224292] to-[#ffc107] animate-gradient-x">
                Outcomes
              </span>
              <div className="absolute -bottom-2 left-0 w-full h-3 bg-[#ffc107]/20 -skew-x-12 -z-10" />
            </span>
        </h1>
        
        {/* Quote Box with Glassmorphism */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4 }}
          className="max-w-4xl mx-auto relative group"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-[#18357a]/5 via-[#ffc107]/5 to-[#18357a]/5 blur-3xl rounded-[4rem] group-hover:opacity-100 transition-opacity opacity-50" />
          
          <div className="relative bg-white/40 backdrop-blur-xl px-12 py-10 rounded-[3rem] border border-white/80 shadow-[0_32px_64px_rgba(24,53,122,0.08)] overflow-hidden">
            {/* Subtle Texture */}
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[radial-gradient(#18357a_1px,transparent_1px)] [background-size:24px_24px]" />
            
            <p className="text-[#64779F] font-bold text-lg md:text-xl leading-relaxed text-center italic relative z-10">
              <span className="text-3xl font-serif text-[#18357a]/20 absolute -top-2 -left-4">"</span>
              Quantifying excellence through a decade of consistent growth, global industry alignment, and student-centric engineering success.
              <span className="text-3xl font-serif text-[#18357a]/20 absolute -bottom-6 -right-4">"</span>
            </p>
          </div>
        </motion.div>
      </motion.div>
    </div>
  )
}

export default HeaderSection
