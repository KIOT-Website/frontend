import React, { useRef, useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Activity, Target, Users } from 'lucide-react'

const AnimatedDonut = ({ segments, circumference, radius, strokeWidth, centerLabel, dark }) => {
  const ref = useRef(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setVisible(true); observer.disconnect() } }, { threshold: 0.4 })
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <div ref={ref} className="relative w-56 h-56 group/donut">
      <svg viewBox="0 0 100 100" className="w-full h-full -rotate-90">
        {segments.map((seg, i) => {
          const finalOffset = circumference * (1 - seg.pct)
          return (
            <motion.circle
              key={i} cx="50" cy="50" r={radius} fill="none" stroke={seg.color} strokeWidth={strokeWidth} strokeLinecap="round" strokeDasharray={circumference}
              strokeDashoffset={visible ? finalOffset : circumference}
              initial={{ rotate: -90 }}
              animate={{ strokeDashoffset: visible ? finalOffset : circumference, rotate: 360 * seg.start - 90 }}
              transition={{ delay: i * 0.15, duration: 1.2, ease: [0.34, 1.56, 0.64, 1] }}
              style={{ transformOrigin: 'center' }}
              className="hover:stroke-[14] transition-all duration-300"
            />
          )
        })}
      </svg>
      <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
        <motion.span initial={{ opacity: 0, scale: 0.8 }} animate={visible ? { opacity: 1, scale: 1 } : {}} className={`text-3xl font-semibold ${dark ? 'text-white' : 'text-[#224292]'}`}>
          {centerLabel}
        </motion.span>
        {dark && <div className="text-[10px] font-semibold text-white/30 uppercase tracking-[0.2em] mt-1">Batch</div>}
      </div>
    </div>
  )
}

const ImpactDistribution = () => {
  return (
    <div className="max-w-6xl mx-auto mb-40">
       <div className="text-center mb-20">
          <div className="flex items-center justify-center gap-3 text-[#ffc107] font-semibold text-[10px] uppercase tracking-[0.4em] mb-4">
             <span className="w-10 h-[1px] bg-[#ffc107]/30" /> Distribution Matrix <span className="w-10 h-[1px] bg-[#ffc107]/30" />
          </div>
          <h2 className="text-2xl md:text-4xl font-semibold text-[#224292] tracking-tighter mb-2">Placement Impact <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#224292] to-[#ffc107]">2024-25</span></h2>
       </div>

       <div className="grid md:grid-cols-2 gap-12">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} className="bg-transparent md:bg-white/40 backdrop-blur-none md:backdrop-blur-xl p-0 md:p-12 rounded-none md:rounded-[5rem] border-none md:border border-white/60 relative group overflow-hidden">
             <h3 className="text-sm font-semibold text-[#224292]/60 uppercase tracking-[0.3em] text-center mb-12">Sectoral Allocation</h3>
             <div className="flex flex-col md:flex-row items-center justify-center gap-12">
                 <AnimatedDonut radius={40} circumference={251.2} strokeWidth={12} centerLabel="100%" dark={false}
                    segments={[
                      { pct: 0.52, color: '#224292', start: 0 },
                      { pct: 0.34, color: '#ffc107', start: 0.52 },
                      { pct: 0.14, color: '#64779F', start: 0.86 }
                    ]} />
                <div className="flex flex-col gap-6">
                   {[
                      { label: "IT Sector", val: "52%", color: "#224292", icon: Activity },
                      { label: "Core Sector", val: "34%", color: "#ffc107", icon: Target },
                      { label: "Management", val: "14%", color: "#64779F", icon: Users }
                   ].map((item, i) => (
                      <div key={i} className="flex items-center gap-4">
                         <div className="w-10 h-10 rounded-xl shadow-md flex items-center justify-center" style={{ backgroundColor: `${item.color}15`, color: item.color }}> <item.icon size={20} /> </div>
                         <div>
                            <div className="text-xl font-semibold text-[#224292] leading-none mb-1">{item.val}</div>
                            <div className="text-[9px] font-semibold text-[#64779F] uppercase tracking-widest">{item.label}</div>
                         </div>
                      </div>
                   ))}
                </div>
             </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="bg-[#224292] p-0 md:p-12 rounded-none md:rounded-[5rem] shadow-none md:shadow-2xl relative overflow-hidden group">
             <h3 className="text-sm font-semibold text-white/40 uppercase tracking-[0.3em] text-center mb-12 relative z-10">Recruitment Influx</h3>
             <div className="flex flex-col md:flex-row items-center justify-center gap-10 relative z-10">
                 <AnimatedDonut radius={38} circumference={238.76} strokeWidth={10} centerLabel="2025" dark={true}
                    segments={[
                      { pct: 0.35, color: '#ffc107', start: 0 },
                      { pct: 0.25, color: '#60A5FA', start: 0.35 },
                      { pct: 0.15, color: '#FFFFFF', start: 0.60 },
                      { pct: 0.14, color: '#A78BFA', start: 0.75 },
                      { pct: 0.11, color: '#3B82F6', start: 0.89 }
                    ]} />
                <div className="grid grid-cols-2 gap-x-12 gap-y-6">
                   {[
                      { label: "On-Campus", val: "35%", color: "#ffc107" },
                      { label: "COE Hiring", val: "25%", color: "#60A5FA" },
                      { label: "Internship", val: "15%", color: "#FFFFFF" },
                      { label: "Off-Campus", val: "14%", color: "#A78BFA" },
                      { label: "Corporate Contest", val: "11%", color: "#3B82F6" }
                   ].map((item, i) => (
                      <div key={i} className="flex items-center gap-3">
                         <div className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: item.color }} />
                         <div>
                            <div className="text-base font-semibold text-white leading-none mb-1">{item.val}</div>
                            <div className="text-[8px] font-semibold text-white/30 uppercase tracking-widest">{item.label}</div>
                         </div>
                      </div>
                   ))}
                </div>
             </div>
          </motion.div>
       </div>
    </div>
  )
}

export default ImpactDistribution
