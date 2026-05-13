import React from 'react'
import { motion } from 'framer-motion'
import alumniTech from '../../assets/alumni/alu.png'

const AlumniHero = () => {
  return (
    <section className="relative w-full h-[350px] md:h-[400px] lg:h-[500px] overflow-hidden">
      <motion.img 
        initial={{ opacity: 0, scale: 1.05 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        src={alumniTech} 
        alt="KIOT Alumni Banner" 
        className="w-full h-full object-cover object-center sm:object-top"
      />
    </section>
  )
}

export default AlumniHero

