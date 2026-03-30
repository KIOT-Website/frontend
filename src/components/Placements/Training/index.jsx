import React from 'react'
import HeaderSection from './HeaderSection'
import FeaturesSection from './FeaturesSection'
import { ShieldCheck } from 'lucide-react'
import { motion } from 'framer-motion'

const TrainingOverview = () => {
  return (
    <div className="relative bg-[#F8FAFC] pt-16 pb-20 min-h-screen overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-gradient-to-bl from-[#18357a]/5 via-transparent to-transparent rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-[#ffc107]/5 rounded-full blur-3xl pointer-events-none" />
      
      <section className="relative px-6 sm:px-10 lg:px-20 z-10 max-w-7xl mx-auto">
        <HeaderSection />
        <FeaturesSection />

        <div className="text-center">
           <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="inline-block px-12 py-6 rounded-full bg-[#18357a] text-white shadow-3xl shadow-[#18357a]/40 relative group overflow-hidden"
           >
              <p className="relative z-10 font-bold uppercase tracking-widest text-[10px] md:text-xs flex items-center gap-5">
                 <ShieldCheck size={20} className="text-[#ffc107]" />
                 Transforming Potential into Global Industry Readiness.
              </p>
           </motion.div>
        </div>
      </section>
    </div>
  )
}

export default TrainingOverview
