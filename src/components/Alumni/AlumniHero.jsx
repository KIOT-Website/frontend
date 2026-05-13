import React from 'react'
import { motion } from 'framer-motion'
import alumniTech from '../../assets/alumni/alu.png'

const AlumniHero = () => {
  return (
    <section className="relative min-h-[300px] md:min-h-[350px] bg-[#224292] overflow-hidden flex items-center">
      
      {/* Integrated Background Design */}
      <div className="absolute inset-0 z-0">
        {/* Stronger gradient to create a clean 'gap' for the text */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#224292] via-[#224292]/70 to-transparent z-10" />
        
        <motion.img 
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 2, ease: "easeOut" }}
          src={alumniTech} 
          alt="KIOT Alumni Background" 
          className="absolute right-0 top-0 h-full w-full lg:w-2/3 object-cover object-right-top opacity-100"
        />
        
        {/* Subtle Glow Overlay */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#ffc107]/10 blur-[150px] rounded-full pointer-events-none" />
      </div>

      <div className="relative z-20 max-w-7xl mx-auto px-6 lg:px-10 w-full py-12">
        <div className="max-w-2xl lg:max-w-3xl">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-4 mb-6"
          >
            <div className="w-12 h-[2px] bg-[#ffc107]/80" />
            <span className="text-[#ffc107] text-[12px] font-black uppercase tracking-[0.5em] font-graphik">KIOT Alumni Association</span>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl md:text-5xl lg:text-[70px] font-black leading-[0.9] tracking-tighter mb-8"
          >
            <span className="text-white drop-shadow-2xl">Once</span> <span className="text-[#ffc107] drop-shadow-2xl">KIOT.</span> <br />
            <span className="text-[#ffc107] drop-shadow-2xl">Always</span> <span className="text-white drop-shadow-2xl">KIOT.</span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-sm md:text-base text-white/95 font-medium leading-relaxed max-w-xl font-graphik"
          >
            A lifelong network of achievers, mentors, and innovators. 
            Reconnect, celebrate, and shape the future together.
          </motion.p>
        </div>
      </div>
    </section>
  )
}

export default AlumniHero

