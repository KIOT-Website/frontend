import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  Trophy, TrendingUp, Briefcase, GraduationCap, 
  Calendar, Users, UserCheck, Landmark 
} from 'lucide-react'

const statData = [
  { text: "Within Top 50 Position in Admission (TNEA 2025)", icon: Trophy, color: "#ffc107" },
  { text: "95% Placements in every Year", icon: TrendingUp, color: "#18357a" },
  { text: "150+ Companies for placements", icon: Briefcase, color: "#ffc107" },
  { text: "Career Development (1200 hours Training)", icon: GraduationCap, color: "#18357a" },
  { text: "17+ Years of Experience", icon: Calendar, color: "#ffc107" },
  { text: "250+ Faculty (Faculty student ratio 1:15)", icon: Users, color: "#18357a" },
  { text: "8000+ Alumni", icon: UserCheck, color: "#ffc107" },
  { text: "Top 10% Colleges in Tamil Nadu", icon: Landmark, color: "#18357a" }
]

const MiniStatCard = ({ text, icon: Icon, color, delay, isMobile }) => (
  <motion.div
    initial={isMobile ? { opacity: 1 } : { opacity: 0, y: 30 }}
    whileInView={isMobile ? { opacity: 1 } : { opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6, delay }}
    whileHover={{ y: -10 }}
    className="group relative h-full w-full"
  >
    {/* Dynamic Background Glow */}
    <div className="absolute inset-0 bg-gradient-to-br from-[#18357a]/5 to-[#ffc107]/5 rounded-[2.5rem] blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
    
    <div className="relative h-full bg-white border border-slate-100 p-5 lg:p-7 rounded-[2rem] shadow-[0_10px_40px_rgba(0,0,0,0.12)] flex flex-col items-center text-center justify-between gap-4 lg:gap-6 transition-all duration-500 group-hover:shadow-[0_30px_60px_rgba(24,53,122,0.15)] group-hover:border-[#18357a]/10 overflow-hidden">
       
       {/* Floating Background Icon */}
       <div className="absolute -right-4 -bottom-4 opacity-[0.03] group-hover:opacity-[0.08] transition-opacity duration-500">
          <Icon size={100} strokeWidth={1} />
       </div>

       {/* Modern Icon Presentation */}
       <div className="relative">
          <div className="absolute inset-0 bg-[#ffc107] rounded-2xl blur-xl opacity-0 group-hover:opacity-30 transition-opacity duration-500" />
          <motion.div 
            whileHover={{ rotate: 15 }}
            className="relative w-12 h-12 rounded-xl bg-[#18357a] flex items-center justify-center text-[#ffc107] shadow-lg shadow-[#18357a]/20"
          >
             <Icon size={22} strokeWidth={2} />
          </motion.div>
       </div>

       <p className="relative z-10 text-[15px] lg:text-[17px] font-semibold text-[#18357a] font-graphik leading-snug tracking-tight transition-transform duration-500 group-hover:scale-105 italic">
          {text}
       </p>

       {/* Progress Indicator */}
       <div className="relative w-full h-1 bg-[#18357a]/5 rounded-full overflow-hidden">
          <motion.div 
            initial={{ width: 0 }}
            whileInView={{ width: '100%' }}
            transition={{ delay: delay + 0.3, duration: 1.5, ease: "circOut" }}
            className="h-full bg-gradient-to-r from-[#18357a] to-[#ffc107]"
          />
       </div>

       {/* Decorative Shine */}
       <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-tr from-transparent via-white/40 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out pointer-events-none" />
    </div>
  </motion.div>
)

const Stats = () => {
  const [index, setIndex] = useState(0)
  const row1 = statData.slice(0, 4)
  const row2 = statData.slice(4, 8)

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % 4)
    }, 4000)
    return () => clearInterval(timer)
  }, [])

  return (
    <section className="relative pt-4 pb-12 md:py-16 lg:py-28 bg-[#FCFDFD] overflow-hidden">
      {/* Decorative Elements - Clean Version */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full pointer-events-none z-0">
         <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(#18357a05_1px,transparent_1px)] [background-size:32px_32px]" />
         <div className="absolute top-[-10%] left-[-10%] w-[600px] h-[600px] bg-[#D5E2F4]/30 rounded-full blur-[120px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-10">
        <div className="text-center mb-6 md:mb-20">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 mb-4 px-4 py-1.5 rounded-full bg-[#18357a]/5 border border-[#18357a]/10"
          >
            <div className="h-1.5 w-1.5 bg-[#18357a] rounded-full animate-pulse" />
            <span className="text-[10px] font-black uppercase tracking-[0.3em] text-[#18357a]">The KIOT Advantage</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl lg:text-5xl font-semibold text-[#18357a] mb-4 md:mb-8 font-graphik tracking-tight"
          >
            A Glimpse of our <span className="text-[#ffc107]">Legacy</span>
          </motion.h2>
          <div className="h-2 w-24 bg-[#ffc107] mx-auto rounded-full" />
        </div>

        {/* Desktop View: Grid */}
        <div className="hidden md:grid grid-cols-3 lg:grid-cols-4 gap-6 lg:gap-8">
          {statData.map((stat, idx) => (
            <div key={idx} className="h-full">
              <MiniStatCard 
                {...stat} 
                delay={idx * 0.05} 
              />
            </div>
          ))}
        </div>

        {/* Mobile View: Changing One by One in Two Rows */}
        <div className="md:hidden flex flex-col gap-6 relative px-2">
          {/* Row 1: Sliding Right (Enter from left) */}
          <div className="h-[220px] w-full relative">
            <AnimatePresence mode="popLayout" initial={false}>
              <motion.div
                key={`row1-${index}`}
                initial={{ opacity: 0, x: -100, scale: 0.9 }}
                animate={{ opacity: 1, x: 0, scale: 1 }}
                exit={{ opacity: 0, x: 100, scale: 0.9 }}
                transition={{ 
                  duration: 0.8, 
                  ease: [0.16, 1, 0.3, 1] // Custom quintic ease
                }}
                className="w-full h-full"
              >
                <MiniStatCard {...row1[index]} delay={0} isMobile={true} />
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Row 2: Sliding Left (Enter from right) */}
          <div className="h-[220px] w-full relative">
            <AnimatePresence mode="popLayout" initial={false}>
              <motion.div
                key={`row2-${index}`}
                initial={{ opacity: 0, x: 100, scale: 0.9 }}
                animate={{ opacity: 1, x: 0, scale: 1 }}
                exit={{ opacity: 0, x: -100, scale: 0.9 }}
                transition={{ 
                  duration: 0.8, 
                  ease: [0.16, 1, 0.3, 1] 
                }}
                className="w-full h-full"
              >
                <MiniStatCard {...row2[index]} delay={0} isMobile={true} />
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Pagination Indicators */}
          <div className="flex justify-center gap-2 mt-4">
            {[0, 1, 2, 3].map((i) => (
              <div 
                key={i} 
                className={`h-1.5 transition-all duration-500 rounded-full ${i === index ? 'w-8 bg-[#ffc107]' : 'w-2 bg-[#18357a]/20'}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Stats
