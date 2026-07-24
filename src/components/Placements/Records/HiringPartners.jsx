import React from 'react'
import { motion } from 'framer-motion'

// Dynamically import all images from the companies folder
const imageModules = import.meta.glob('../../../assets/placements/companies/*.{png,jpg,jpeg,svg,webp}', { eager: true });
import designBg from '../../../assets/placements/companies/design.webp'

// Convert the object to an array of objects with name and logo
const partners = Object.entries(imageModules)
  .filter(([path]) => !path.includes('design.webp')) // Exclude the background image from the logo grid
  .map(([path, module]) => {
    // Extract filename and clean it up for the name tag
    const fileName = path.split('/').pop().split('.')[0];
    // Remove leading numbers and hyphens (e.g., "1-cts" -> "cts")
    const cleanName = fileName.replace(/^\d+-/, '').replace(/_/g, ' ').replace(/-/g, ' ');
    
    return {
      name: cleanName,
      logo: module.default
    };
  });

const HiringPartners = () => {
  return (
    <div className="relative max-w-7xl mx-auto mb-16 px-6 py-12 rounded-[4rem] overflow-hidden">
      {/* Background Image Layer */}
      <div className="absolute inset-0 z-0">
        <img 
          src={designBg} 
          alt="" 
          className="w-full h-full object-cover opacity-[0.03] mix-blend-multiply pointer-events-none" 
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#F8FAFC] via-transparent to-[#F8FAFC]" />
      </div>

      <div className="relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 mb-4">
            <div className="h-px w-8 bg-[#224292]" />
            <span className="text-[10px] font-black uppercase tracking-[0.4em] text-[#224292]">Industry Network</span>
            <div className="h-px w-8 bg-[#224292]" />
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-[#224292] tracking-tighter mb-6 leading-[0.9]">Hiring Partners</h2>
          <p className="text-[#224292] text-sm font-bold max-w-2xl mx-auto">
            We collaborate with global industry leaders to provide our students with the best-in-class career opportunities across diverse sectors.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 gap-4 md:gap-6">
          {partners.map((partner, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: (i % 10) * 0.05 }}
              className="group relative bg-white/80 backdrop-blur-sm rounded-2xl p-3 border border-[#224292]/10 hover:border-[#ffc107] hover:bg-white transition-all duration-500 flex items-center justify-center h-28 shadow-sm hover:shadow-xl hover:shadow-blue-900/5"
            >
              <img 
                src={partner.logo} 
                alt={partner.name} 
                className="max-h-full max-w-full object-contain transition-all duration-500 scale-100 group-hover:scale-110" 
              />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default HiringPartners
