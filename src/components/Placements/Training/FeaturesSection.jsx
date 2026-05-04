import React from 'react'
import { motion } from 'framer-motion'
import { CheckCircle2, Star } from 'lucide-react'

const features = [
  "1200+ hours of structured and progressive training spread across all four years",
  "Training programs integrated into the autonomous curriculum for seamless learning",
  "Industry-oriented curriculum aligned with current market demands",
  "Dedicated training in Employability Skills and Life Skills for well-rounded development",
  "Mock interviews and company-specific training to enhance placement readiness",
  "Continuous assessment and feedback to ensure measurable improvement"
]

const FeaturesSection = () => {
  return (
    <div className="max-w-7xl mx-auto px-6 mb-24 font-graphik">
       <div className="mb-10">
          <h2 className="text-4xl md:text-5xl font-black text-[#224292] tracking-tighter mb-4">
             Salient Features of <span className="text-[#ffc107]">CDT</span>
          </h2>
       </div>

       <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, idx) => (
            <motion.div 
               key={idx}
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ delay: idx * 0.1 }}
               className="flex flex-col p-6 bg-white rounded-3xl border border-slate-100 shadow-xl shadow-slate-200/40 hover:border-[#ffc107]/40 transition-all duration-500 group"
            >
               <div className="w-10 h-10 rounded-xl bg-slate-50 flex items-center justify-center mb-5 border border-slate-100 group-hover:bg-[#224292] transition-colors duration-500">
                  <CheckCircle2 size={20} className="text-[#224292] group-hover:text-[#ffc107]" />
               </div>
               
               <div className="flex-1">
                  <p className="text-[14.5px] font-bold text-black leading-relaxed tracking-tight">
                     {feature}
                  </p>
               </div>
            </motion.div>
          ))}
       </div>
    </div>
  )
}

export default FeaturesSection
