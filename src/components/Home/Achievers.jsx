import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Trophy, ArrowLeft, ArrowRight, Quote, Medal, Sparkles } from 'lucide-react'

// Placeholder images from generated assets
import arunImg from '../../assets/main/achiever_arun_balaji.webp'
import nandhiniImg from '../../assets/main/achiever_nandhini_s.webp'
import sathishImg from '../../assets/main/achiever_sathish_kumar.webp'

const achievements = [
  {
    id: 1,
    title: "National Hackathon Champions 2025",
    desc: "Developed an AI-powered traffic system for KIOT smart campus project, securing 1st place among nationwide competitors.",
    name: "Arun Balaji",
    dept: "Computer Science and Engineering",
    image: arunImg,
    tag: "1st Place Winner"
  },
  {
    id: 2,
    title: "Inter-College Coding Champion",
    desc: "Secured top position among 200+ participants in the South-Zone Coding Summit representing KIOT Salem.",
    name: "Nandhini S",
    dept: "Information Technology",
    image: nandhiniImg,
    tag: "Coding Excellence"
  },
  {
    id: 3,
    title: "University Rank Holder",
    desc: "Achieved a prestigious top-10 university rank across all affiliated departments, bringing pride to KIOT.",
    name: "Sathish Kumar",
    dept: "Mechanical Engineering",
    image: sathishImg,
    tag: "Academic Topper"
  }
]

const Achievers = () => {
  const [current, setCurrent] = useState(0)
  const [isAutoPlay, setIsAutoPlay] = useState(true)

  useEffect(() => {
    if (!isAutoPlay) return
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % achievements.length)
    }, 6000)
    return () => clearInterval(interval)
  }, [isAutoPlay])

  const next = () => {
    setIsAutoPlay(false)
    setCurrent((prev) => (prev + 1) % achievements.length)
  }

  const prev = () => {
    setIsAutoPlay(false)
    setCurrent((prev) => (prev - 1 + achievements.length) % achievements.length)
  }

  return (
    <section className="relative py-10 lg:py-16 bg-[#FCFDFD] overflow-hidden">
      
      {/* Background Decorative Rings */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1200px] h-[1200px] border border-[#18357a]/5 rounded-full pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] border border-[#18357a]/5 rounded-full pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-10">
        
        {/* Header Section */}
        <div className="text-center mb-16 lg:mb-24">
           <motion.div
             initial={{ opacity: 0, scale: 0.9 }}
             whileInView={{ opacity: 1, scale: 1 }}
             className="inline-flex items-center gap-2 mb-4 px-4 py-1.5 rounded-full bg-[#18357a]/5 border border-[#18357a]/10"
           >
             <Sparkles size={14} className="text-[#ffc107]" />
             <span className="text-[10px] font-black uppercase tracking-[0.3em] text-[#18357a]">Hall of Achievers</span>
           </motion.div>
           <h2 className="text-3xl lg:text-5xl font-black text-[#18357a] font-display">
             Achievements That <span className="text-[#ffc107]">Inspire</span>
           </h2>
           <p className="mt-6 text-[#64779F] max-w-2xl mx-auto text-base lg:text-lg font-medium font-sans italic opacity-80">
             Celebrating the icons of tomorrow who are making their mark today.
           </p>
        </div>

        {/* SPOTLIGHT CAROUSEL WRAPPER */}
        <div className="relative max-w-5xl mx-auto">
          
           <div className="grid lg:grid-cols-[1fr_1.1fr] gap-8 lg:gap-16 items-center bg-white rounded-[32px] p-6 lg:p-10 shadow-[0_30px_70px_rgba(34,66,146,0.1)] border border-[#D5E2F4]/40 overflow-hidden relative">
              
              {/* Achievement Badge - Floating */}
              <div className="absolute top-8 right-8 z-20 hidden lg:block">
                 <div className="h-14 w-14 rounded-full bg-[#ffc107] flex items-center justify-center text-[#18357a] rotate-12 shadow-md">
                    <Medal size={28} strokeWidth={2.5} />
                 </div>
              </div>

              {/* IMAGE PORTION */}
              <div className="relative aspect-[4/5] lg:aspect-square overflow-hidden rounded-[24px] group">
                 <AnimatePresence mode="wait">
                    <motion.img
                      key={achievements[current].id}
                      src={achievements[current].image}
                      initial={{ opacity: 0, scale: 1.1, x: -20 }}
                      animate={{ opacity: 1, scale: 1, x: 0 }}
                      exit={{ opacity: 0, scale: 0.95, x: 20 }}
                      transition={{ duration: 0.8, ease: "circOut" }}
                      className="absolute inset-0 w-full h-full object-cover"
                    />
                 </AnimatePresence>
                 <div className="absolute inset-0 bg-gradient-to-t from-[#18357a]/80 via-[#18357a]/20 to-transparent" />
                 
                 {/* Student Label on Image */}
                 <div className="absolute bottom-8 left-8 right-8 z-10">
                    <motion.div
                      key={achievements[current].name}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="inline-block px-3 py-1.5 bg-white/10 backdrop-blur-md rounded-lg border border-white/20 mb-3"
                    >
                       <span className="text-[#ffc107] text-[10px] lg:text-xs font-black uppercase tracking-widest">{achievements[current].tag}</span>
                    </motion.div>
                    <motion.p
                      key={achievements[current].id + 'name'}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      className="text-white text-xl lg:text-2xl font-black font-display"
                    >
                       {achievements[current].name}
                    </motion.p>
                 </div>
              </div>

              {/* CONTENT PORTION */}
              <div className="flex flex-col justify-center">
                 <Quote className="text-[#ffc107]/20 h-12 w-12 mb-5" strokeWidth={3} />
                 
                 <AnimatePresence mode="wait">
                    <motion.div
                       key={achievements[current].id}
                       initial={{ opacity: 0, y: 20 }}
                       animate={{ opacity: 1, y: 0 }}
                       exit={{ opacity: 0, y: -20 }}
                       className="space-y-6"
                    >
                       <div>
                          <h3 className="text-xl lg:text-3xl font-black text-[#18357a] font-display leading-[1.2]">
                             {achievements[current].title}
                          </h3>
                       </div>

                       <p className="text-xl text-[#64779F] font-bold leading-relaxed pr-6">
                         "{achievements[current].desc}"
                       </p>

                       <div className="pt-6 border-t border-[#D5E2F4]">
                          <p className="text-sm font-black text-[#18357a] uppercase tracking-[0.2em]">
                             {achievements[current].dept}
                          </p>
                          <p className="text-xs font-medium text-[#64779F] mt-1">Class of 2024-25</p>
                       </div>
                    </motion.div>
                 </AnimatePresence>

                 {/* CONTROLS */}
                 <div className="flex items-center gap-6 mt-12 lg:mt-16">
                    <div className="flex gap-3">
                       <button 
                         onClick={prev}
                         className="h-14 w-14 rounded-full border-2 border-[#D5E2F4] flex items-center justify-center text-[#18357a] hover:bg-[#18357a] hover:text-white hover:border-[#18357a] transition-all"
                       >
                          <ArrowLeft size={24} />
                       </button>
                       <button 
                         onClick={next}
                         className="h-14 w-14 rounded-full border-2 border-[#18357a] bg-[#18357a] flex items-center justify-center text-white hover:bg-[#ffc107] hover:text-[#18357a] hover:border-[#ffc107] transition-all"
                       >
                          <ArrowRight size={24} />
                       </button>
                    </div>

                    {/* Progress Dots */}
                    <div className="flex gap-2">
                       {achievements.map((_, i) => (
                         <div 
                           key={i} 
                           className={`h-2 transition-all rounded-full ${current === i ? 'w-8 bg-[#ffc107]' : 'w-2 bg-[#D5E2F4]'}`} 
                         />
                       ))}
                    </div>
                 </div>
              </div>

           </div>

        </div>

        {/* FOOTER CTA */}
        <div className="mt-20 text-center">
           <button className="group relative px-10 py-5 bg-[#18357a] text-white rounded-full font-black uppercase tracking-[0.2em] text-xs overflow-hidden shadow-2xl hover:bg-[#ffc107] hover:text-[#18357a] transition-colors">
              <span className="relative z-10 flex items-center gap-3">
                 Explore Hall of Fame
                 <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </span>
           </button>
        </div>

      </div>

    </section>
  )
}

export default Achievers
