import React from 'react'
import { motion } from 'framer-motion'
import alumniTech from '../../assets/alumni/alumni_tech.png'

const AlumniHero = () => {
  return (
    <section className="relative min-h-[450px] md:min-h-[550px] bg-[#18357a] overflow-hidden flex items-center">
      
      {/* Integrated Background Design */}
      <div className="absolute inset-0 z-0">
        {/* Stronger gradient to create a clean 'gap' for the text */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#18357a] via-[#18357a]/90 to-transparent z-10" />
        
        <motion.img 
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 0.6, x: 0 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          src={alumniTech} 
          alt="KIOT Digital Background" 
          className="absolute right-[-5%] top-0 h-full w-full lg:w-3/5 object-cover object-right opacity-60"
        />
        
        {/* Subtle Glow Overlay */}
        <div className="absolute top-1/2 right-10 -translate-y-1/2 w-[400px] h-[400px] bg-[#ffc107]/15 blur-[120px] rounded-full pointer-events-none" />
      </div>

      <div className="relative z-20 max-w-7xl mx-auto px-6 lg:px-10 w-full py-16">
        <div className="max-w-2xl lg:max-w-3xl">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-4 mb-8"
          >
            <div className="w-12 h-[2px] bg-[#ffc107]/80" />
            <span className="text-[#ffc107] text-sm font-black uppercase tracking-[0.5em] font-graphik">KIOT Alumni Association</span>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl md:text-7xl lg:text-[100px] font-black leading-[0.9] tracking-tighter mb-10"
          >
            <span className="text-white drop-shadow-2xl">Once</span> <span className="text-[#ffc107] drop-shadow-2xl">KIOT.</span> <br />
            <span className="text-[#ffc107] drop-shadow-2xl">Always</span> <span className="text-white drop-shadow-2xl">KIOT.</span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg md:text-2xl text-white/95 font-medium leading-relaxed max-w-xl font-graphik"
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

