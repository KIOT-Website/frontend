import { useRef, useEffect } from 'react'
import { motion, useInView, useSpring, useTransform } from 'framer-motion'
import { Award, TrendingUp, Users, Handshake } from 'lucide-react'

const StatCard = ({ number, label, suffix = "", icon: Icon, delay = 0 }) => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  
  const springValue = useSpring(0, {
    stiffness: 40,
    damping: 20,
    restDelta: 0.001
  })
  
  const displayValue = useTransform(springValue, (latest) => 
    Math.floor(latest).toLocaleString()
  )

  useEffect(() => {
    if (isInView) {
      springValue.set(number)
    }
  }, [isInView, springValue, number])

  // Alternate colors for the cards
  const colorSchemes = [
    { base: 'bg-[#18357a]', text: 'text-[#18357a]', iconBg: 'bg-[#ffc107]', numColor: 'text-[#18357a]' },
    { base: 'bg-[#ffc107]', text: 'text-[#18357a]', iconBg: 'bg-[#18357a]', numColor: 'text-[#ffc107]' },
    { base: 'bg-[#18357a]', text: 'text-[#18357a]', iconBg: 'bg-[#ffc107]', numColor: 'text-[#18357a]' },
    { base: 'bg-[#ffc107]', text: 'text-[#18357a]', iconBg: 'bg-[#18357a]', numColor: 'text-[#ffc107]' },
  ]
  return (
    <div className="relative group pt-10 px-4 pb-8">
      {/* ─── U-WRAP BACKGROUND PLATE (DOWN ARROW SHAPE) ─── */}
      <div className="absolute bottom-0 left-0 right-0 h-[65%] bg-[#18357a] rounded-t-[1rem] transition-transform duration-500 group-hover:scale-y-105 origin-bottom shadow-lg" 
           style={{ clipPath: 'polygon(0% 0%, 100% 0%, 100% 90%, 50% 100%, 0% 90%)' }} />
      
      {/* ─── MAIN WHITE CARD ─── */}
      <motion.div
        ref={ref}
        initial={{ opacity: 0, scale: 0.95 }}
        animate={isInView ? { opacity: 1, scale: 1 } : {}}
        transition={{ duration: 0.8, delay }}
        whileHover={{ y: -8 }}
        className="relative z-10 bg-white rounded-[2rem] lg:rounded-[2.5rem] p-8 lg:p-10 shadow-2xl shadow-black/20 flex flex-col items-center text-center transition-all duration-500 h-full border border-[#18357a]/5"
      >
        {/* Top Centered Icon Circle */}
        <div className="absolute -top-10 left-1/2 -translate-x-1/2 w-20 h-20 bg-[#ffc107] rounded-full flex items-center justify-center shadow-lg border-4 border-white z-20">
          <Icon className="text-[#18357a]" size={32} />
        </div>

        {/* Content Area */}
        <div className="mt-8">
          <h4 className="text-[10px] lg:text-[11px] font-black uppercase tracking-[2px] mb-4 text-[#18357a] opacity-50">
             Institutional Focus
          </h4>
          
          <div className="flex items-baseline justify-center gap-1 mb-2">
            <motion.span className="text-3xl lg:text-4xl font-black text-[#18357a] tracking-tight">
              {displayValue}
            </motion.span>
            <span className="text-xl lg:text-2xl font-black text-[#ffc107]">{suffix}</span>
          </div>

          <p className="text-[#333333] text-[11px] lg:text-[12px] leading-relaxed font-inter font-medium opacity-80">
            {label}
          </p>
        </div>
      </motion.div>
    </div>
  )
}

const Stats = () => {
  const titleRef = useRef(null)
  const isTitleInView = useInView(titleRef, { once: true })

  const statData = [
    { number: 25, suffix: "+", label: "Years of Academic Excellence", icon: Award },
    { number: 95, suffix: "%", label: "Placement Success Rate", icon: TrendingUp },
    { number: 10000, suffix: "+", label: "Students Empowered", icon: Users },
    { number: 150, suffix: "+", label: "Trusted Hiring Partners", icon: Handshake },
  ]

  return (
    <section className="relative py-10 lg:py-16 bg-[#FCFDFD] overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full pointer-events-none z-0">
         <div className="absolute top-[5%] left-[5%] w-[250px] h-[250px] bg-[#D5E2F4]/20 rounded-full blur-[80px]" />
         <div className="absolute bottom-[5%] right-[5%] w-[200px] h-[200px] bg-[#ffc107]/5 rounded-full blur-[60px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-6xl px-6 lg:px-10">
        <div ref={titleRef} className="text-center mb-10 lg:mb-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={isTitleInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 mb-3 px-3 py-1 rounded-full bg-[#18357a]/5"
          >
            <div className="h-1 w-4 bg-[#ffc107] rounded-full" />
            <span className="text-[10px] font-black uppercase tracking-[0.2em] text-[#18357a] font-sans">Institutional Impact</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            animate={isTitleInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-3xl lg:text-5xl font-black text-[#18357a] mb-4 font-display"
          >
            Excellence You Can <span className="text-[#ffc107]">Measure</span>
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0 }}
            animate={isTitleInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-[#64779F] max-w-xl mx-auto text-xs lg:text-sm font-medium font-sans leading-relaxed"
          >
            A legacy of academic brilliance and consistent placement success over two decades.
          </motion.p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
          {statData.map((stat, idx) => (
            <StatCard 
              key={idx} 
              {...stat} 
              delay={0.2 + idx * 0.1} 
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Stats
