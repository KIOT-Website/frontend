import React from 'react'
import { motion } from 'framer-motion'
import alumniTech from '../../assets/alumni/alu.png'

const AlumniHero = () => {
  return (
    <section className="relative w-full h-[300px] md:h-[400px] lg:h-[450px] overflow-hidden flex items-center">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-[#224292]/90 via-[#224292]/60 to-transparent z-10" />
        <motion.img 
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          src={alumniTech} 
          alt="KIOT Alumni Banner" 
          className="w-full h-full object-cover object-center"
        />
      </div>

      {/* Content Overlay */}
      <div className="relative z-20 max-w-7xl mx-auto px-6 lg:px-10 w-full">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-4 mb-4"
          >
            <div className="w-10 h-[2px] bg-[#ffc107]" />
            <span className="text-[#ffc107] text-[10px] md:text-[12px] font-black uppercase tracking-[0.4em]">KIOT Alumni Association</span>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-3xl md:text-5xl lg:text-7xl font-black leading-[1.1] tracking-tighter mb-6"
          >
            <span className="text-white">Once</span> <span className="text-[#ffc107]">KIOT.</span><br />
            <span className="text-[#ffc107]">Always</span> <span className="text-white">KIOT.</span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-sm md:text-base text-white/90 font-medium leading-relaxed max-w-xl"
          >
            A lifelong network of achievers, mentors, and innovators. 
            Reconnect, celebrate, and shape the future together.
          </motion.p>
        </div>
      </div>
    </section>
    </section>
  )
}

export default AlumniHero

