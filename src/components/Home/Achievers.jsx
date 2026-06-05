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
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  return (
    <section className="relative py-6 lg:py-10 bg-[#F8FAFC] overflow-hidden">
      
      {/* Background Subtle Gradient */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#ffc107]/[0.03] rounded-full blur-[100px] -mr-64 -mt-64" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#224292]/[0.03] rounded-full blur-[100px] -ml-64 -mb-64" />

      <div className="relative z-10 mx-auto w-full max-w-[1400px] px-4 md:px-8">
        
        {/* Header Section - Refined Kongu Style */}
        <div className="text-center mb-8">
           <h2 className="text-3xl lg:text-5xl font-semibold text-[#224292] font-graphik tracking-tight leading-tight">
             Achievements That <span className="text-[#ffc107]">Inspire</span>
           </h2>
        </div>

        {/* STATIC 2-COLUMN GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {achievements.map((achievement, idx) => (
            <motion.div
              key={achievement.id}
              initial={isMobile ? {} : { opacity: 0, x: idx === 0 ? -50 : 50, y: 30 }}
              whileInView={isMobile ? {} : { opacity: 1, x: 0, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={isMobile ? {} : { duration: 1, delay: idx * 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="group relative h-[400px] lg:h-[500px] rounded-[6rem_1rem_6rem_1rem] overflow-hidden shadow-2xl border-4 border-[#224292]/20 hover:border-[#ffc107]/50 transition-all duration-500"
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
                <div className="flex items-center gap-3 px-4 py-2 bg-[#ffc107] text-[#224292] rounded-full shadow-lg">
                  <Medal size={16} strokeWidth={3} />
                  <span className="text-[10px] font-black uppercase tracking-widest">{achievement.tag}</span>
                </div>
              </div>

              {/* Content Overlay */}
              <div className="absolute bottom-6 left-10 right-10 z-20">
                <Quote className="text-[#ffc107]/40 h-6 w-6 mb-3 rotate-180" strokeWidth={3} />
                <h3 className="text-xl lg:text-3xl font-semibold text-white mb-2 leading-tight font-graphik">
                  {achievement.title}
                </h3>
                {achievement.name && (
                  <div className="flex items-center gap-4">
                    <div className="h-[2px] w-12 bg-[#ffc107]" />
                    <div>
                      <p className="text-white text-base font-black tracking-widest">{achievement.name}</p>
                      <p className="text-[#ffc107] text-[10px] font-bold tracking-widest">{achievement.dept}</p>
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
