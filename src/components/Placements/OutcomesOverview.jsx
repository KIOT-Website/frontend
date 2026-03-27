import React, { useRef, useState, useEffect, useMemo } from 'react'
import { Trophy, TrendingUp, Users, ShieldCheck, Activity, BarChart3, TrendingUp as TrendIcon, Target } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

// Animated Trend Line Chart for Placement Statistics
const SleekTrendChart = ({ data, maxVal = 4.5 }) => {
  const [isHovered, setIsHovered] = useState(null);
  
  // Calculate SVG path for the area and line
  const points = useMemo(() => {
    return data.map((d, i) => ({
      x: (i / (data.length - 1)) * 100,
      y: 100 - (d.lpa / maxVal) * 100
    }));
  }, [data, maxVal]);

  const pathD = useMemo(() => {
    if (points.length === 0) return '';
    return `M ${points[0].x},${points[0].y} ` + 
      points.slice(1).map(p => `L ${p.x},${p.y}`).join(' ');
  }, [points]);

  const areaD = useMemo(() => {
    if (points.length === 0) return '';
    return `${pathD} L 100,100 L 0,100 Z`;
  }, [pathD, points]);

  return (
    <div className="relative h-80 w-full group/chart">
      {/* Background Grid Lines */}
      <div className="absolute inset-0 flex flex-col justify-between pointer-events-none opacity-20">
        {[0, 1, 2, 3, 4].map((v) => (
          <div key={v} className="w-full h-px bg-[#18357a]/20 border-t border-dashed border-[#18357a]/40" />
        ))}
      </div>

      <svg viewBox="0 0 100 100" preserveAspectRatio="none" className="absolute inset-0 w-full h-full overflow-visible">
        <defs>
          <linearGradient id="areaGradient" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#18357a" stopOpacity="0.3" />
            <stop offset="100%" stopColor="#18357a" stopOpacity="0.01" />
          </linearGradient>
          <linearGradient id="lineGradient" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#18357a" />
            <stop offset="50%" stopColor="#224292" />
            <stop offset="100%" stopColor="#ffc107" />
          </linearGradient>
          <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="1.5" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
        </defs>

        {/* Area fill */}
        <motion.path
          d={areaD}
          fill="url(#areaGradient)"
          initial={{ opacity: 0, d: `M 0,100 L 100,100 L 100,100 L 0,100 Z` }}
          whileInView={{ opacity: 1, d: areaD }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          viewport={{ once: true }}
        />

        {/* Main Trend Line */}
        <motion.path
          d={pathD}
          fill="none"
          stroke="url(#lineGradient)"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          initial={{ pathLength: 0, opacity: 0 }}
          whileInView={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 2, ease: "easeInOut" }}
          viewport={{ once: true }}
        />

        {/* Data Points */}
        {points.map((p, i) => (
          <motion.g key={i} initial={{ opacity: 0, scale: 0 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ delay: 0.5 + i * 0.05 }} viewport={{ once: true }}>
            <circle
              cx={p.x} cy={p.y} r="1.2"
              fill={data[i].lpa === 4.05 ? "#ffc107" : "#18357a"}
              className="cursor-pointer transition-all duration-300 hover:r-[2]"
              onMouseEnter={() => setIsHovered(i)}
              onMouseLeave={() => setIsHovered(null)}
            />
            {isHovered === i && (
              <circle cx={p.x} cy={p.y} r="2.5" fill="none" stroke={data[i].lpa === 4.05 ? "#ffc107" : "#18357a"} strokeWidth="0.5" strokeOpacity="0.4" />
            )}
          </motion.g>
        ))}
      </svg>

      {/* Interactive Overlay & Tooltips */}
      <div className="absolute inset-0 flex justify-between items-end px-1 overflow-visible">
        {data.map((d, i) => (
          <div 
            key={i} 
            className="flex-1 h-full relative group/data-point"
            onMouseEnter={() => setIsHovered(i)}
            onMouseLeave={() => setIsHovered(null)}
          >
            {/* Year Label */}
            <div className={`absolute bottom-[-2.5rem] left-1/2 -translate-x-1/2 text-[8px] font-bold uppercase transition-all duration-300 ${isHovered === i ? 'text-white scale-110' : 'text-white/60'}`}>
              {d.year}
            </div>

            {/* Custom Tooltip */}
            <AnimatePresence>
              {isHovered === i && (
                <motion.div
                  initial={{ opacity: 0, y: 10, scale: 0.9 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 10, scale: 0.9 }}
                  className="absolute z-50 pointer-events-none whitespace-nowrap"
                  style={{ 
                    left: '50%', 
                    bottom: `${(d.lpa / maxVal) * 100}%`,
                    transform: 'translateX(-50%) translateY(-20px)'
                  }}
                >
                  <div className="bg-[#18357a] text-white px-3 py-1.5 rounded-xl shadow-2xl border border-white/10 flex flex-col items-center">
                    <span className="text-[10px] font-black">{d.lpa} LPA</span>
                    <span className="text-[7px] font-bold text-white/50 uppercase">{d.year}</span>
                    <div className="absolute bottom-[-4px] left-1/2 -translate-x-1/2 w-2 h-2 bg-[#18357a] rotate-45 border-r border-b border-white/10" />
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </div>
  );
};

// Premium Grouped Capsule Chart for Placement Efficiency
const EliteEfficiencyChart = ({ data }) => {
  const [hoverIndex, setHoverIndex] = useState(null);

  return (
    <div className="relative h-80 w-full flex items-end justify-between px-2 gap-4">
      <div className="absolute left-[-40px] top-[40%] -translate-y-1/2 -rotate-90 text-[10px] font-black uppercase tracking-[0.35em] text-white/30">
        Volume
      </div>

      {data.map((d, i) => (
        <div 
          key={i} 
          className="flex-1 flex flex-col items-center h-full group/col relative"
          onMouseEnter={() => setHoverIndex(i)}
          onMouseLeave={() => setHoverIndex(null)}
        >
          <div className="flex items-end gap-2 h-full w-full justify-center">
            {/* Opted Column */}
            <div className="relative flex-1 flex flex-col items-center justify-end h-full">
              <motion.div
                initial={{ height: 0 }}
                whileInView={{ height: `${(d.opted / 800) * 100}%` }}
                transition={{ duration: 1, delay: i * 0.1, ease: [0.34, 1.56, 0.64, 1] }}
                viewport={{ once: true }}
                className="w-full bg-[#18357a]/20 border border-[#18357a]/30 rounded-full relative group/item overflow-hidden"
              >
                <motion.div 
                  className="absolute inset-0 bg-gradient-to-t from-[#18357a]/40 to-[#18357a]/10 opacity-80"
                  initial={{ opacity: 0.4 }}
                  animate={{ opacity: hoverIndex === i ? 1 : 0.8 }}
                />
                {/* Visual texture */}
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.1),transparent)] pointer-events-none" />
              </motion.div>
            </div>
 
            {/* Placed Column */}
            <div className="relative flex-1 flex flex-col items-center justify-end h-full">
              <motion.div
                initial={{ height: 0 }}
                whileInView={{ height: `${(d.placed / 800) * 100}%` }}
                transition={{ duration: 1, delay: i * 0.1 + 0.1, ease: [0.34, 1.56, 0.64, 1] }}
                viewport={{ once: true }}
                className="w-full bg-[#ffc107]/20 border border-[#ffc107]/30 rounded-full relative group/item overflow-hidden"
              >
                <motion.div 
                  className="absolute inset-0 bg-gradient-to-t from-[#ffc107] to-[#ffd54f]"
                  initial={{ opacity: 0.1 }}
                  animate={{ opacity: hoverIndex === i ? 1 : 0.9 }}
                />
              </motion.div>
            </div>
          </div>

          {/* Labels & Tooltips */}
          <div className="mt-6 flex flex-col items-center">
            <span className={`text-[8px] font-black uppercase transition-all duration-300 ${hoverIndex === i ? 'text-white scale-110' : 'text-white/40'}`}>
              {d.year}
            </span>
          </div>

          <AnimatePresence>
            {hoverIndex === i && (
              <motion.div
                initial={{ opacity: 0, y: 10, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 10, scale: 0.95 }}
                className="absolute -top-12 z-50 bg-white p-3 rounded-2xl shadow-xl border border-[#D5E2F4] min-w-[120px]"
              >
                <div className="flex flex-col gap-2">
                  <div className="flex items-center justify-between gap-4">
                    <span className="text-[9px] font-bold text-[#64779F]">OPTED</span>
                    <span className="text-[11px] font-black text-[#18357a]">{d.opted}</span>
                  </div>
                  <div className="flex items-center justify-between gap-4">
                    <span className="text-[9px] font-bold text-[#64779F]">PLACED</span>
                    <span className="text-[11px] font-black text-[#ffc107]">{d.placed}</span>
                  </div>
                  <div className="h-px bg-[#D5E2F4]/50 my-1" />
                  <div className="flex items-center justify-between">
                    <span className="text-[9px] font-bold text-[#64779F]">RATE</span>
                    <span className="text-[10px] font-black text-[#18357a]">{Math.round((d.placed / d.opted) * 100)}%</span>
                  </div>
                </div>
                <div className="absolute bottom-[-6px] left-1/2 -translate-x-1/2 w-3 h-3 bg-white rotate-45 border-r border-b border-[#D5E2F4]" />
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      ))}
    </div>
  );
};

// Animated Donut Chart — improved with motion and better gradients
const AnimatedDonut = ({ segments, circumference, radius, strokeWidth, centerLabel, dark }) => {
  const ref = useRef(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); observer.disconnect() } },
      { threshold: 0.4 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <div ref={ref} className="relative w-56 h-56 group/donut">
      <svg viewBox="0 0 100 100" className="w-full h-full -rotate-90">
        <defs>
          <filter id="donutGlow" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="2" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
        </defs>
        {segments.map((seg, i) => {
          const finalOffset = circumference * (1 - seg.pct)
          return (
            <motion.circle
              key={i}
              cx="50" cy="50" r={radius}
              fill="none"
              stroke={seg.color}
              strokeWidth={strokeWidth}
              strokeLinecap="round"
              strokeDasharray={circumference}
              strokeDashoffset={visible ? finalOffset : circumference}
              initial={{ rotate: -90 }}
              animate={{ 
                strokeDashoffset: visible ? finalOffset : circumference,
                rotate: 360 * seg.start - 90
              }}
              transition={{
                delay: i * 0.15,
                duration: 1.2,
                ease: [0.34, 1.56, 0.64, 1]
              }}
              style={{
                transformOrigin: 'center',
                filter: 'drop-shadow(0 0 2px rgba(0,0,0,0.1))'
              }}
              className="hover:stroke-[14] transition-all duration-300"
            />
          )
        })}
      </svg>
      <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
        <motion.span 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={visible ? { opacity: 1, scale: 1 } : {}}
          className={`text-3xl font-black ${dark ? 'text-white' : 'text-[#18357a]'}`}
        >
          {centerLabel}
        </motion.span>
        {dark && <div className="text-[10px] font-black text-white/30 uppercase tracking-[0.2em] mt-1">Batch</div>}
      </div>
    </div>
  )
}

const OutcomesOverview = () => {
  const statsData = [
    { year: "2013-14", lpa: 1.85 }, { year: "2014-15", lpa: 2.01 }, { year: "2015-16", lpa: 2.16 },
    { year: "2016-17", lpa: 2.43 }, { year: "2017-18", lpa: 2.57 }, { year: "2018-19", lpa: 2.82 },
    { year: "2019-20", lpa: 3.02 }, { year: "2020-21", lpa: 3.02 }, { year: "2021-22", lpa: 3.58 },
    { year: "2022-23", lpa: 3.68 }, { year: "2023-24", lpa: 3.72 }, { year: "2024-25", lpa: 4.05 }
  ];

  const efficiencyData = [
    { year: "2014-15", opted: 385, placed: 368 }, { year: "2016-17", opted: 580, placed: 549 },
    { year: "2018-19", opted: 559, placed: 521 }, { year: "2020-21", opted: 515, placed: 489 },
    { year: "2022-23", opted: 426, placed: 398 }, { year: "2024-25", opted: 674, placed: 610 }
  ];

  return (
    <div className="relative bg-[#F8FAFC] pt-16 pb-20 min-h-screen overflow-hidden">
      
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-gradient-to-bl from-[#18357a]/5 via-transparent to-transparent rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-[#ffc107]/5 rounded-full blur-3xl pointer-events-none" />
      
      <section className="relative px-6 sm:px-10 lg:px-20 z-10 max-w-7xl mx-auto">
        
        {/* Header Section */}
        <div className="text-center mb-16">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="flex flex-col items-center"
          >
            <div className="inline-flex items-center gap-2.5 px-6 py-2.5 rounded-full bg-white border border-[#D5E2F4]/50 shadow-sm mb-8">
               <Activity size={16} className="text-[#18357a]" />
               <span className="text-xs font-black text-[#18357a] uppercase tracking-[0.2em]">Institutional Transparency</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-[4rem] font-black text-[#18357a] mb-8 tracking-tighter leading-[1] uppercase">
               Placement <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#18357a] to-[#ffc107]">Outcomes</span>
            </h1>
            
            <div className="max-w-3xl mx-auto p-1 bg-gradient-to-r from-[#18357a]/10 via-[#ffc107]/10 to-[#18357a]/10 rounded-[3rem] mb-12">
              <div className="bg-white/80 backdrop-blur-md px-10 py-8 rounded-[2.9rem] border border-white/50 shadow-xl">
                <p className="text-[#64779F] font-bold text-base md:text-lg leading-relaxed text-center italic">
                  "Quantifying excellence through a década of consistent growth, global industry alignment, and student-centric engineering success."
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Global Stats Dashboard */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
           {[
             { title: "Highest Package", val: "₹18.5 LPA", icon: Trophy, desc: "Outsourcing Technologies, Japan", color: "#ffc107" },
             { title: "Success Rate", val: "95%+", icon: TrendIcon, desc: "Consistent annual excellence", color: "#ffc107" },
             { title: "Global Network", val: "2500+", icon: Users, desc: "Alumni in top multinationals", color: "#18357a" }
           ].map((stat, i) => (
             <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className="bg-white/60 backdrop-blur-lg p-10 rounded-[3rem] shadow-2xl shadow-[#18357a]/5 border border-white group hover:border-[#18357a]/20 transition-all text-center relative overflow-hidden"
             >
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-transparent to-[#18357a]/5 rounded-bl-[5rem]" />
                <div className="w-14 h-14 rounded-2xl bg-white shadow-lg flex items-center justify-center text-[#18357a] group-hover:scale-110 transition-transform mx-auto mb-6 relative z-10 border border-[#D5E2F4]/30">
                   <stat.icon size={28} />
                </div>
                <div className="text-4xl font-black text-[#18357a] mb-2 tracking-tight">{stat.val}</div>
                <div className="text-[10px] font-black uppercase tracking-widest mb-4 opacity-50">{stat.title}</div>
                <p className="text-[#64779F] text-xs font-semibold leading-relaxed">{stat.desc}</p>
             </motion.div>
           ))}
        </div>

        {/* Analytics Grid */}
        <div className="grid lg:grid-cols-2 gap-10 mb-40">
           
           {/* Section 1: Placement Statistics */}
           <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex flex-col bg-white p-1 rounded-[4rem] border border-[#18357a]/10"
           >
              <div className="p-8 md:p-12 flex flex-col h-full">
                <div className="flex items-start justify-between mb-12">
                   <div>
                      <div className="flex items-center gap-2 mb-4">
                        <BarChart3 size={18} className="text-[#ffc107]" />
                        <span className="text-[10px] font-black uppercase tracking-[0.4em] text-[#18357a]">Growth Matrix</span>
                      </div>
                      <h2 className="text-3xl font-black text-[#18357a] uppercase tracking-tighter">Placement <span className="text-[#ffc107]">Statistics</span></h2>
                   </div>
                   <div className="flex flex-col items-end gap-2">
                      <div className="px-5 py-2 rounded-2xl bg-[#18357a] text-white font-black text-xs">
                         MAX 4.05
                      </div>
                      <span className="text-[10px] font-black text-[#ffc107]">AVG 2.92 LPA</span>
                   </div>
                </div>

                <div className="flex-1 min-h-[320px] pb-10">
                   <SleekTrendChart data={statsData} />
                </div>
              </div>
           </motion.div>

           {/* Section 2: Efficiency Insights */}
           <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex flex-col bg-[#18357a] p-1 rounded-[4rem] shadow-2xl shadow-[#18357a]/20 overflow-hidden relative"
           >
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,193,7,0.1),transparent)]" />
              <div className="p-8 md:p-12 flex flex-col h-full relative z-10">
                <div className="flex items-start justify-between mb-12">
                   <div>
                      <div className="flex items-center gap-2 mb-4">
                        <Target size={18} className="text-[#ffc107]" />
                        <span className="text-[10px] font-black uppercase tracking-[0.4em] text-white/50">Engagement Ratio</span>
                      </div>
                      <h2 className="text-3xl font-black text-white uppercase tracking-tighter">Placement <span className="text-[#ffc107]">Efficiency</span></h2>
                   </div>
                   <div className="flex gap-4">
                      <div className="flex items-center gap-1.5">
                        <div className="w-2.5 h-2.5 rounded-full bg-white/20 border border-white/40" />
                        <span className="text-[10px] font-black text-white/60">OPTED</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <div className="w-2.5 h-2.5 rounded-full bg-[#ffc107]" />
                        <span className="text-[10px] font-black text-white/60">PLACED</span>
                      </div>
                   </div>
                </div>

                <div className="flex-1 min-h-[320px] pb-10 invert-[0.1] brightness-[1.2]">
                   <EliteEfficiencyChart data={efficiencyData} />
                </div>
              </div>
           </motion.div>
        </div>

        {/* Donut Distribution Charts */}
        <div className="max-w-7xl mx-auto mb-40">
           <div className="text-center mb-20">
              <div className="flex items-center justify-center gap-3 text-[#ffc107] font-black text-[10px] uppercase tracking-[0.4em] mb-4">
                 <span className="w-10 h-[1px] bg-[#ffc107]/30" /> Distribution Matrix <span className="w-10 h-[1px] bg-[#ffc107]/30" />
              </div>
              <h2 className="text-4xl md:text-5xl font-black text-[#18357a] tracking-tighter uppercase mb-2">Placement <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#18357a] to-[#ffc107]">Impact</span> 2024-25</h2>
              <div className="h-1 w-20 bg-gradient-to-r from-[#18357a] to-[#ffc107] mx-auto rounded-full" />
           </div>
 
           <div className="grid md:grid-cols-2 gap-12">
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                className="bg-white/40 backdrop-blur-xl p-12 rounded-[5rem] shadow-[0_40px_100px_rgba(24,53,122,0.08)] border border-white/60 relative group overflow-hidden"
              >
                 <div className="absolute -top-10 -right-10 w-40 h-40 bg-[#18357a]/5 rounded-full blur-2xl group-hover:bg-[#18357a]/10 transition-all duration-700" />
                 <h3 className="text-sm font-black text-[#18357a]/40 uppercase tracking-[0.3em] text-center mb-12">Sectoral Allocation</h3>
                 <div className="flex flex-col md:flex-row items-center justify-center gap-12">
                     <AnimatedDonut
                        radius={40}
                        circumference={251.2}
                        strokeWidth={12}
                        centerLabel="100%"
                        dark={false}
                        segments={[
                          { pct: 0.52, color: '#18357a', start: 0 },
                          { pct: 0.34, color: '#ffc107', start: 0.52 },
                          { pct: 0.14, color: '#64779F', start: 0.86 }
                        ]}
                     />
                    <div className="flex flex-col gap-6">
                       {[
                          { label: "IT Sector", val: "52%", color: "#18357a", icon: Activity },
                          { label: "Core Sector", val: "34%", color: "#ffc107", icon: Target },
                          { label: "Management", val: "14%", color: "#64779F", icon: Users }
                       ].map((item, i) => (
                          <div key={i} className="flex items-center gap-4 group/item">
                             <div className="w-10 h-10 rounded-xl shadow-md flex items-center justify-center transition-all group-hover/item:scale-110" style={{ backgroundColor: `${item.color}15`, color: item.color }}>
                                <item.icon size={20} />
                             </div>
                             <div>
                                <div className="text-xl font-black text-[#18357a] leading-none mb-1">{item.val}</div>
                                <div className="text-[9px] font-black text-[#64779F] uppercase tracking-widest">{item.label}</div>
                             </div>
                          </div>
                       ))}
                    </div>
                 </div>
              </motion.div>
 
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="bg-[#18357a] p-12 rounded-[5rem] shadow-[0_40px_100px_rgba(24,53,122,0.2)] relative overflow-hidden group"
              >
                 <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(255,193,7,0.1),transparent)]" />
                 <h3 className="text-sm font-black text-white/20 uppercase tracking-[0.3em] text-center mb-12 relative z-10">Recruitment Influx</h3>
                 <div className="flex flex-col md:flex-row items-center justify-center gap-10 relative z-10">
                     <AnimatedDonut
                        radius={38}
                        circumference={238.76}
                        strokeWidth={10}
                        centerLabel="2025"
                        dark={true}
                        segments={[
                          { pct: 0.35, color: '#ffc107', start: 0 },
                          { pct: 0.25, color: '#60A5FA', start: 0.35 },
                          { pct: 0.15, color: '#FFFFFF', start: 0.60 },
                          { pct: 0.14, color: '#A78BFA', start: 0.75 },
                          { pct: 0.11, color: '#3B82F6', start: 0.89 }
                        ]}
                     />
                    <div className="grid grid-cols-2 gap-x-12 gap-y-6">
                       {[
                          { label: "On-Campus", val: "35%", color: "#ffc107" },
                          { label: "COE Hiring", val: "25%", color: "#60A5FA" },
                          { label: "Internship", val: "15%", color: "#FFFFFF" },
                          { label: "Off-Campus", val: "14%", color: "#A78BFA" },
                          { label: "Corporate Contest", val: "11%", color: "#3B82F6" }
                       ].map((item, i) => (
                          <div key={i} className="flex items-center gap-3">
                             <div className="w-2.5 h-2.5 rounded-full ring-2 ring-white/10" style={{ backgroundColor: item.color }} />
                             <div>
                                <div className="text-base font-black text-white leading-none mb-1">{item.val}</div>
                                <div className="text-[8px] font-black text-white/30 uppercase tracking-widest">{item.label}</div>
                             </div>
                          </div>
                       ))}
                    </div>
                 </div>
              </motion.div>
           </div>
        </div>

        {/* Hiring Models */}
        <div className="max-w-7xl mx-auto mb-40 px-6">
           <div className="bg-white rounded-[5rem] p-12 md:p-20 shadow-2xl shadow-[#18357a]/5 border border-[#D5E2F4]/50 flex flex-col md:flex-row gap-16 md:items-center relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-[#ffc107]/5 rounded-bl-full pointer-events-none" />
              <div className="md:w-5/12 relative z-10">
                 <div className="flex items-center gap-2 mb-4">
                    <div className="h-px w-8 bg-[#ffc107]" />
                    <span className="text-[10px] font-black uppercase tracking-[0.4em] text-[#ffc107]">Strategic Access</span>
                 </div>
                 <h2 className="text-4xl md:text-5xl font-black text-[#18357a] tracking-tighter uppercase mb-6 leading-[0.9]">Hiring <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#18357a] to-[#ffc107]">Gateways</span></h2>
                 <p className="text-[#64779F] text-base font-bold leading-relaxed italic opacity-80">
                    Proprietary hiring frameworks engineered to bridge the gap between academic brilliance and global corporate mandates.
                 </p>
              </div>
              <div className="md:w-7/12 flex flex-wrap gap-4 relative z-10">
                 {[
                    "On-Campus / Off-Campus Hiring",
                    "Contest-Based Hiring",
                    "Bilingual Hiring (Global)",
                    "Internship-Based Placement",
                    "COE-Based Exclusive Hiring"
                 ].map((model, i) => (
                    <motion.div 
                        key={i} 
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ delay: i * 0.1 }}
                        className="px-8 py-5 rounded-full border border-[#18357a]/5 bg-gradient-to-br from-white to-[#F8FAFC] text-xs font-black uppercase tracking-widest text-[#18357a] hover:from-[#18357a] hover:to-[#18357a] hover:text-white hover:scale-105 transition-all cursor-default shadow-sm hover:shadow-none"
                    >
                       {model}
                    </motion.div>
                 ))}
              </div>
           </div>
        </div>
 
        {/* Closing */}
        <div className="text-center">
           <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="inline-block px-12 py-6 rounded-full bg-[#18357a] text-white shadow-3xl shadow-[#18357a]/40 relative group overflow-hidden"
           >
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
              <p className="relative z-10 font-bold uppercase tracking-widest text-[10px] md:text-xs flex items-center gap-5">
                 <ShieldCheck size={20} className="text-[#ffc107]" />
                 Transforming Potential into Institutional Legacy since inception.
              </p>
           </motion.div>
        </div>
      </section>
    </div>
  )
}

export default OutcomesOverview
