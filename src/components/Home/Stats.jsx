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
    initial={isMobile ? { opacity: 1 } : { opacity: 0, scale: 0.9 }}
    whileInView={isMobile ? { opacity: 1 } : { opacity: 1, scale: 1 }}
    viewport={{ once: true }}
    transition={{ duration: 0.8, delay, ease: [0.16, 1, 0.3, 1] }}
    whileHover={{ y: -12 }}
    className="group relative h-full w-full"
  >
    {/* Decorative Background Shape */}
    <div className="absolute top-0 right-0 w-32 h-32 bg-[#18357a]/5 rounded-bl-full translate-x-10 -translate-y-10 group-hover:bg-[#ffc107]/10 transition-colors duration-700" />
    
    <div className="relative h-full bg-white/80 backdrop-blur-sm border border-slate-200/60 p-6 lg:p-8 rounded-[3rem_1rem_3rem_1rem] shadow-[0_20px_60px_-15px_rgba(0,0,0,0.08)] flex flex-col items-center text-center justify-between gap-6 transition-all duration-700 group-hover:shadow-[0_40px_80px_-20px_rgba(24,53,122,0.2)] group-hover:border-[#18357a]/20 overflow-hidden group-hover:bg-white scale-100 group-hover:scale-[1.02]">
       
       {/* Background Institutional Seal (Hidden Icon Parallax) */}
       <div className="absolute -left-12 -top-12 opacity-[0.02] group-hover:opacity-[0.05] transition-all duration-1000 group-hover:rotate-12 group-hover:scale-150">
          <Icon size={160} strokeWidth={0.5} />
       </div>

       {/* Icon Container - Leaf Shape Design */}
       <div className="relative">
          <motion.div 
            whileHover={{ rotate: [-5, 5, -5, 0] }}
            className="relative w-16 h-16 rounded-[1.5rem_0.5rem_1.5rem_0.5rem] bg-gradient-to-br from-[#18357a] to-[#0d1c43] flex items-center justify-center text-[#ffc107] shadow-[0_15px_30px_-5px_rgba(24,53,122,0.4)] transition-all duration-500 group-hover:scale-110 group-hover:rotate-6 group-hover:shadow-[#ffc107]/20"
          >
             <Icon size={24} strokeWidth={2.5} />
          </motion.div>
          {/* Active Pulse Ring */}
          <div className="absolute inset-0 rounded-[1.5rem_0.5rem_1.5rem_0.5rem] border-2 border-[#ffc107]/0 group-hover:border-[#ffc107]/40 group-hover:scale-125 transition-all duration-700" />
       </div>

       <div className="space-y-4 relative z-10 w-full">
          <p className="text-[14px] lg:text-[16px] font-black text-black font-graphik leading-tight tracking-tight uppercase group-hover:text-[#18357a] transition-colors duration-300">
             {text}
          </p>
          
          <div className="flex justify-center items-center gap-1">
             <div className="w-1 h-1 rounded-full bg-[#ffc107]" />
             <div className="w-2 h-1 rounded-full bg-[#18357a] group-hover:w-8 transition-all duration-700" />
             <div className="w-1 h-1 rounded-full bg-[#ffc107]" />
          </div>
       </div>

       {/* Bottom Institution Accent Line */}
       <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-1.5 bg-[#ffc107] group-hover:w-1/2 transition-all duration-700 rounded-t-full" />

       {/* Corner Light Sweep Animation */}
       <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out pointer-events-none" />
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
    <section className="relative pt-2 pb-8 md:py-10 lg:py-16 bg-[#FCFDFD] overflow-hidden">
      {/* Decorative Elements - Clean Version */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full pointer-events-none z-0">
         <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(#18357a05_1px,transparent_1px)] [background-size:32px_32px]" />
         <div className="absolute top-[-10%] left-[-10%] w-[600px] h-[600px] bg-[#D5E2F4]/30 rounded-full blur-[120px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-10">
        <div className="text-center mb-6 md:mb-12">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 mb-4 px-4 py-1.5 rounded-full bg-[#18357a]/5 border border-[#18357a]/10"
          >
            <div className="h-1.5 w-1.5 bg-[#18357a] rounded-full animate-pulse" />
            <span className="text-[10px] font-black uppercase tracking-[0.3em] text-black">The KIOT Advantage</span>
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
        <div className="md:hidden flex flex-col gap-6 relative px-10">
          {/* Row 1: Sliding Right (Enter from left) */}
          <div className="h-[185px] w-full relative">
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
          <div className="h-[185px] w-full relative">
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
