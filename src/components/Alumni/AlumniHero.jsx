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
      <div className="relative z-20 max-w-7xl mx-auto px-6 lg:px-10 w-full mb-8">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-4 mb-4"
          >
            <span className="text-[#ffc107] text-[10px] md:text-[11px] font-black uppercase tracking-[0.4em]">KIOT Alumni Association</span>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-3xl md:text-4xl lg:text-[60px] font-black leading-[1.05] tracking-tighter mb-5"
          >
            <span className="text-white">Once</span> <span className="text-[#ffc107]">KIOT.</span><br />
            <span className="text-[#ffc107]">Always</span> <span className="text-white">KIOT.</span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="hidden md:block text-sm md:text-base text-white/90 font-medium leading-relaxed max-w-xl mb-8"
          >
            A lifelong network of achievers, mentors, and innovators. 
            Reconnect, celebrate, and shape the future together.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-wrap gap-4"
          >
            <a 
              href="https://alumni.kiot.ac.in/user/signup.dz" 
              target="_blank" 
              rel="noopener noreferrer"
              className="px-6 py-2.5 bg-[#ffc107] text-[#224292] text-xs font-black uppercase tracking-widest rounded-xl hover:bg-white transition-all transform hover:scale-105 active:scale-95 shadow-lg flex items-center justify-center"
            >
              Join the Network
            </a>
            <a 
              href="https://alumni.kiot.ac.in/home.dz" 
              target="_blank" 
              rel="noopener noreferrer"
              className="px-6 py-2.5 bg-white text-[#224292] text-xs font-black uppercase tracking-widest rounded-xl hover:bg-[#ffc107] transition-all transform hover:scale-105 active:scale-95 flex items-center justify-center shadow-lg"
            >
              Visit Portal
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default AlumniHero

