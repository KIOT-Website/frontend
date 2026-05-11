import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  Trophy, TrendingUp, Briefcase, GraduationCap, 
  Calendar, Users, UserCheck, Landmark 
} from 'lucide-react'

const statData = [
  { value: "Top 50", label: "Position in Admission (TNEA 2025)", icon: Trophy, color: "#ffc107" },
  { value: "95%", label: "Placements in Every Year", icon: TrendingUp, color: "#224292" },
  { value: "150+", label: "Companies for Placements", icon: Briefcase, color: "#ffc107" },
  { value: "1200", label: "Hours of Career Development Training", icon: GraduationCap, color: "#224292" },
  { value: "17+", label: "Years of Academic Excellence", icon: Calendar, color: "#ffc107" },
  { value: "250+", label: "Expert Faculty Members", icon: Users, color: "#224292" },
  { value: "8000+", label: "Global Alumni Network", icon: UserCheck, color: "#ffc107" },
  { value: "Top 10%", label: "Best Colleges in Tamil Nadu", icon: Landmark, color: "#224292" }
]

const MiniStatCard = ({ value, label, icon: Icon, color, delay, isMobile, sectionViewed }) => {
  const numericValue = parseInt(value.replace(/[^0-9]/g, '')) || 0;
  const [displayValue, setDisplayValue] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const suffix = value.replace(/[0-9]/g, '');
  const isPrefix = value.startsWith('Top');

  useEffect(() => {
    if (sectionViewed && !hasAnimated) {
      setHasAnimated(true);
      let start = 0;
      const end = numericValue;
      const duration = 2000;
      let startTime = null;

      const animate = (currentTime) => {
        if (!startTime) startTime = currentTime;
        const progress = Math.min((currentTime - startTime) / duration, 1);
        setDisplayValue(Math.floor(progress * end));
        if (progress < 1) requestAnimationFrame(animate);
      };
      requestAnimationFrame(animate);
    } else if (hasAnimated || (sectionViewed && isMobile)) {
      setDisplayValue(numericValue);
    }
  }, [sectionViewed, hasAnimated, numericValue, isMobile]);

  return (
    <motion.div
      initial={isMobile ? { opacity: 1 } : { opacity: 0, y: 30 }}
      whileInView={isMobile ? { opacity: 1 } : { opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay, ease: [0.16, 1, 0.3, 1] }}
      whileHover={{ y: -12 }}
      className="group relative h-full w-full"
    >
      {/* Decorative Background Shape */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-[#224292]/5 rounded-bl-full translate-x-10 -translate-y-10 group-hover:bg-[#ffc107]/10 transition-colors duration-700" />
      
      <div className="relative h-full bg-white/80 backdrop-blur-sm border border-slate-200/60 p-6 lg:p-8 rounded-[3.5rem_1rem_3.5rem_1rem] shadow-[0_20px_60px_-15px_rgba(0,0,0,0.08)] flex flex-col items-center text-center justify-between gap-4 transition-all duration-700 group-hover:shadow-[0_40px_80px_-20px_rgba(24,53,122,0.2)] group-hover:border-[#224292]/20 overflow-hidden group-hover:bg-white scale-100 group-hover:scale-[1.02]">
         
         {/* Background Institutional Seal (Hidden Icon Parallax) */}
         <div className="absolute -left-12 -top-12 opacity-[0.02] group-hover:opacity-[0.05] transition-all duration-1000 group-hover:rotate-12 group-hover:scale-150">
            <Icon size={160} strokeWidth={0.5} />
         </div>

         {/* Icon Container - Leaf Shape Design */}
         <div className="relative">
            <motion.div 
              whileHover={{ rotate: [-5, 5, -5, 0] }}
              className="relative w-12 h-12 rounded-[1rem_0.3rem_1rem_0.3rem] bg-gradient-to-br from-[#224292] to-[#0d1c43] flex items-center justify-center text-[#ffc107] shadow-[0_10px_25px_-5px_rgba(24,53,122,0.3)] transition-all duration-500 group-hover:scale-110 group-hover:rotate-6"
            >
               <Icon size={18} strokeWidth={2.5} />
            </motion.div>
            {/* Active Pulse Ring */}
            <div className="absolute inset-0 rounded-[1rem_0.3rem_1rem_0.3rem] border-2 border-[#ffc107]/0 group-hover:border-[#ffc107]/40 group-hover:scale-125 transition-all duration-700" />
         </div>

         <div className="space-y-2 relative z-10 w-full text-center">
            <div className="text-[28px] lg:text-[40px] font-black text-[#224292] font-graphik leading-none tracking-tighter group-hover:text-[#ffc107] transition-colors duration-300">
               {isPrefix ? `Top ${displayValue}` : `${displayValue}${suffix}`}
            </div>
            <p className="text-[12px] lg:text-[14px] font-bold text-black font-graphik leading-tight transition-colors duration-300">
               {label}
            </p>
            
            <div className="flex justify-center items-center gap-1.5 pt-4">
               <div className="w-1 h-1 rounded-full bg-[#ffc107]" />
               <div className="w-8 h-1 rounded-full bg-[#224292]/10 group-hover:bg-[#ffc107] transition-all duration-700" />
               <div className="w-1 h-1 rounded-full bg-[#ffc107]" />
            </div>
         </div>

         {/* Bottom Institution Accent Line */}
         <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-1.5 bg-[#ffc107] group-hover:w-1/2 transition-all duration-700 rounded-t-full" />
      </div>
    </motion.div>
  )
}

const Stats = () => {
  const [index, setIndex] = useState(0)
  const [statsViewed, setStatsViewed] = useState(false)
  const row1 = statData.slice(0, 4)
  const row2 = statData.slice(4, 8)

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % 4)
    }, 4000)
    return () => clearInterval(timer)
  }, [])

  return (
    <motion.section 
      onViewportEnter={() => setStatsViewed(true)}
      viewport={{ once: true }}
      className="relative pt-8 pb-4 md:pt-0 md:pb-6 lg:py-6 bg-[#FCFDFD] overflow-hidden"
    >
      {/* Decorative Elements - Clean Version */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full pointer-events-none z-0">
         <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(#22429205_1px,transparent_1px)] [background-size:32px_32px]" />
         <div className="absolute top-[-10%] left-[-10%] w-[600px] h-[600px] bg-[#D5E2F4]/30 rounded-full blur-[120px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-10">
        <div className="text-center mb-6 md:mb-12">
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl lg:text-5xl font-semibold text-[#224292] mb-4 md:mb-8 font-graphik tracking-tight"
          >
            A Glimpse of our <span className="text-[#ffc107]">Legacy</span>
          </motion.h2>

        </div>

        {/* Desktop View: Grid */}
        <div className="hidden md:grid grid-cols-3 lg:grid-cols-4 gap-6 lg:gap-8">
          {statData.map((stat, idx) => (
            <div key={idx} className="h-full">
              <MiniStatCard 
                {...stat} 
                delay={idx * 0.05} 
                sectionViewed={statsViewed}
              />
            </div>
          ))}
        </div>

        {/* Mobile View: Changing One by One in Two Rows */}
        <div className="md:hidden flex flex-col gap-6 relative px-10">
          {/* Row 1: Sliding Right (Enter from left) */}
          <div className="h-[165px] w-full relative">
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
                <MiniStatCard {...row1[index]} delay={0} isMobile={true} sectionViewed={statsViewed} />
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Row 2: Sliding Left (Enter from right) */}
          <div className="h-[165px] w-full relative">
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
                <MiniStatCard {...row2[index]} delay={0} isMobile={true} sectionViewed={statsViewed} />
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Pagination Indicators */}
          <div className="flex justify-center gap-2 mt-4">
            {[0, 1, 2, 3].map((i) => (
              <div 
                key={i} 
                className={`h-1.5 transition-all duration-500 rounded-full ${i === index ? 'w-8 bg-[#ffc107]' : 'w-2 bg-[#224292]/20'}`}
              />
            ))}
          </div>
        </div>
      </div>
    </motion.section>
  )
}

export default Stats
