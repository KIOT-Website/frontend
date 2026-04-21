import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Trophy, ArrowLeft, ArrowRight, Quote, Medal, Sparkles } from 'lucide-react'

// Actual images from achievements assets
import tnStartupImg from '../../assets/achievements/tnstartup.webp'
import saeImg from '../../assets/achievements/sae.webp'

const achievements = [
  {
    id: 1,
    title: "StartupTN – Preincubation Centre",
    desc: "KIOT received sanction letter to establish the StartupTN – Preincubation Centre with Rs.7.50 Lakh Grant.",
    name: "",
    dept: "",
    image: tnStartupImg,
    tag: "Rs.7.50 Lakh Grant"
  },
  {
    id: 2,
    title: "SAE Best Host Institution Award",
    desc: "Received by Dr.K.Visagavel Principal, KIOT, Chairman of SAEISS Salem division.",
    name: "",
    dept: "",
    image: saeImg,
    tag: "SAE Global Award"
  }
]

const Achievers = () => {
  return (
    <section className="relative py-8 lg:py-12 bg-[#F8FAFC] overflow-hidden">
      
      {/* Background Subtle Gradient */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#ffc107]/[0.03] rounded-full blur-[100px] -mr-64 -mt-64" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#18357a]/[0.03] rounded-full blur-[100px] -ml-64 -mb-64" />

      <div className="relative z-10 mx-auto w-full max-w-[1400px] px-4 md:px-8">
        
        {/* Header Section - Refined Kongu Style */}
        <div className="text-center mb-8">
           <motion.div
             initial={{ opacity: 0, y: 10 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             className="inline-flex items-center gap-2 mb-4 px-5 py-2 rounded-full bg-[#18357a]/5 border border-[#18357a]/10"
           >
             <Sparkles size={14} className="text-[#ffc107]" />
             <span className="text-[10px] font-black uppercase tracking-[0.3em] text-[#18357a]">Institutional Excellence</span>
           </motion.div>
           <h2 className="text-3xl lg:text-5xl font-black text-[#18357a] font-graphik tracking-tight leading-tight">
             Achievements That <span className="text-[#ffc107]">Inspire</span>
           </h2>
        </div>

        {/* STATIC 2-COLUMN GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {achievements.map((achievement, idx) => (
            <motion.div
              key={achievement.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: idx * 0.2 }}
              className="group relative h-[400px] lg:h-[500px] rounded-[1.2rem] overflow-hidden shadow-2xl border-4 border-[#18357a]/20 hover:border-[#ffc107]/50 transition-all duration-500"
            >
              {/* Achievement Image */}
              <img 
                src={achievement.image} 
                alt={achievement.title}
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
              />
              
              {/* Gradient Overlay - Subtle Bottom Fade */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-70 group-hover:opacity-80 transition-opacity duration-500" />
              
              {/* Badge */}
              <div className="absolute top-8 left-8 z-20">
                <div className="flex items-center gap-3 px-4 py-2 bg-[#ffc107] text-[#18357a] rounded-full shadow-lg">
                  <Medal size={16} strokeWidth={3} />
                  <span className="text-[10px] font-black uppercase tracking-widest">{achievement.tag}</span>
                </div>
              </div>

              {/* Content Overlay */}
              <div className="absolute bottom-6 left-10 right-10 z-20">
                <Quote className="text-[#ffc107]/40 h-6 w-6 mb-3 rotate-180" strokeWidth={3} />
                <h3 className="text-xl lg:text-2xl font-black text-white mb-2 leading-tight font-graphik">
                  {achievement.title}
                </h3>
                <p className="text-white/80 text-[12px] md:text-sm font-bold leading-relaxed mb-4 max-w-md">
                  {achievement.desc}
                </p>
                {achievement.name && (
                  <div className="flex items-center gap-4">
                    <div className="h-[2px] w-12 bg-[#ffc107]" />
                    <div>
                      <p className="text-white text-base font-black uppercase tracking-widest">{achievement.name}</p>
                      <p className="text-[#ffc107] text-[10px] font-bold uppercase tracking-widest">{achievement.dept}</p>
                    </div>
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>

      </div>

    </section>
  )
}

export default Achievers
