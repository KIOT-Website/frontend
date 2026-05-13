import React from 'react'
import { motion } from 'framer-motion'
import alumniTech from '../../assets/alumni/alu.png'

const AlumniHero = () => {
  return (
    <section className="relative w-full h-[250px] md:h-[350px] lg:h-[450px] overflow-hidden">
      <motion.img 
        initial={{ opacity: 0, scale: 1.05 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        src={alumniTech} 
        alt="KIOT Alumni Banner" 
        className="w-full h-full object-cover object-center"
      />
    </section>
  )
}

export default AlumniHero

