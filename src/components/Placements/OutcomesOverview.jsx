import React, { useRef, useState, useEffect } from 'react'
import { Trophy, TrendingUp, Users, ShieldCheck } from 'lucide-react'

// Animated Donut Chart — segments draw in sequentially on scroll into view
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
    <div ref={ref} className="relative w-56 h-56">
      <svg viewBox="0 0 100 100" className="w-full h-full -rotate-90">
        {segments.map((seg, i) => {
          const finalOffset = circumference * (1 - seg.pct)
          return (
            <circle
              key={i}
              cx="50" cy="50" r={radius}
              fill="none"
              stroke={seg.color}
              strokeWidth={strokeWidth}
              strokeLinecap="butt"
              strokeDasharray={circumference}
              strokeDashoffset={visible ? finalOffset : circumference}
              style={{
                transformOrigin: 'center',
                rotate: `${360 * seg.start}deg`,
                transition: visible
                  ? `stroke-dashoffset 0.9s cubic-bezier(0.4, 0, 0.2, 1) ${i * 0.18}s`
                  : 'none'
              }}
            />
          )
        })}
      </svg>
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <span className={`text-3xl font-black ${dark ? 'text-white' : 'text-[#18357a]'}`}>{centerLabel}</span>
      </div>
    </div>
  )
}

const OutcomesOverview = () => {
  return (
    <div className="relative bg-white pt-16 pb-20 min-h-screen overflow-hidden">
      
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-bl from-[#18357a]/5 to-transparent rounded-bl-full pointer-events-none" />
      
      <section className="relative px-6 sm:px-10 lg:px-20 z-10 max-w-7xl mx-auto">
        
        {/* Header Section - Fixed Static */}
        <div className="text-center mb-16">
          <div className="flex flex-col items-center">
            <div className="inline-flex items-center gap-2.5 px-6 py-2.5 rounded-full bg-white border border-[#D5E2F4]/80 shadow-sm mb-8">
               <span className="text-sm font-black text-[#18357a] uppercase tracking-[0.2em]">Excellence Defined</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-[3.5rem] font-black text-[#18357a] mb-8 tracking-tighter leading-[1.1]">
               Placement <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#18357a] via-[#224292] to-[#ffc107] uppercase">Outcomes</span>
            </h1>
            
            <div className="max-w-2xl mx-auto p-8 rounded-[2.5rem] bg-white border-2 border-transparent border-l-4 border-l-[#ffc107] shadow-xl relative mt-4 hover:border-[#ffc107] transition-all duration-500 group">
              <p className="text-[#64779F] font-bold text-sm md:text-base leading-relaxed text-left italic">
                Showcasing the consistent success and global reach of our graduates as they embark on high-impact professional journeys.
              </p>
            </div>
          </div>
        </div>

        {/* Global Stats Dashboard - Fixed Static */}
        <div className="grid md:grid-cols-3 gap-8 mb-20 mx-auto max-w-6xl">
           {[
             { title: "Highest Package", val: "₹18.5 LPA", icon: Trophy, desc: "Outsourcing Technologies, Japan" },
             { title: "Success Rate", val: "95%+", icon: TrendingUp, desc: "Consistent annual placements" },
             { title: "Global Network", val: "2500+", icon: Users, desc: "Alumni in top multinationals" }
           ].map((stat, i) => (
             <div
                key={i}
                className="bg-white p-10 rounded-[2.5rem] shadow-[0_20px_50px_rgba(24,53,122,0.06)] border border-[#D5E2F4]/50 group hover:border-[#ffc107]/30 transition-all text-center"
             >
                <div className="w-12 h-12 rounded-2xl bg-[#18357a]/5 flex items-center justify-center text-[#18357a] group-hover:bg-[#18357a] group-hover:text-white transition-all mx-auto mb-6">
                   <stat.icon size={24} />
                </div>
                <div className="text-3xl font-black text-[#18357a] mb-2">{stat.val}</div>
                <div className="text-[#ffc107] text-[10px] font-black uppercase tracking-widest mb-4">{stat.title}</div>
                <p className="text-[#64779F] text-xs font-semibold">{stat.desc}</p>
             </div>
           ))}
        </div>

        {/* Analytics Dashboard Grid - Side-by-Side Wrapper */}
        <div className="grid lg:grid-cols-2 gap-8 mb-40 max-w-full overflow-hidden">
           
           {/* Section 1: Placement Statistics (Left) */}
           <div className="flex flex-col">
              <div className="text-center lg:text-left mb-8 px-4">
                 <div className="inline-flex items-center gap-2 mb-3 bg-[#18357a]/5 px-4 py-1.5 rounded-full border border-[#D5E2F4]/30">
                    <div className="h-2 w-2 rounded-full bg-[#ffc107]" />
                    <span className="text-[10px] font-black uppercase tracking-[0.3em] text-[#18357a]">Growth Analysis</span>
                 </div>
                 <h2 className="text-3xl md:text-4xl font-black text-[#18357a] tracking-tighter uppercase mb-4">
                    Placement <span className="text-[#ffc107]">Statistics</span>
                 </h2>
              </div>
              
              <div className="relative p-6 md:p-10 bg-white rounded-[3rem] shadow-[0_40px_80px_rgba(24,53,122,0.05)] border border-[#D5E2F4]/50 overflow-visible group flex-1">
                 <div className="flex items-center justify-between mb-12">
                    <div className="flex items-center gap-3 text-[10px] font-black uppercase tracking-widest text-[#64779F]">
                       <span className="flex items-center gap-1.5"><div className="w-2.5 h-2.5 rounded-sm bg-[#18357a]/20" /> Performance</span>
                       <span className="text-[#ffc107]">AVG: 2.92 LPA</span>
                    </div>
                    <div className="px-4 py-1.5 rounded-full bg-[#18357a] text-white font-black text-[10px] tracking-widest">
                       MAX: 4.05
                    </div>
                 </div>

                 <div className="relative h-80 pt-10"> {/* Added padding top for labels */}
                    <div className="absolute left-[-40px] md:left-[-35px] top-[40%] -translate-y-1/2 -rotate-90 origin-center text-[10px] md:text-[11px] font-black uppercase tracking-[0.35em] text-[#18357a] whitespace-nowrap z-0">
                       LPA
                    </div>

                    <div className="relative h-full ml-10 flex items-end justify-between px-2 gap-1.5">
                       <div className="absolute left-0 top-0 bottom-0 w-px bg-[#18357a]/20" />
                       <div className="absolute left-0 right-0 bottom-[calc(2.92/4.5*100%)] h-px border-t border-dashed border-[#ffc107]/30 z-20" />
                       
                       {[
                          { year: "2013-14", lpa: 1.85 }, { year: "2014-15", lpa: 2.01 }, { year: "2015-16", lpa: 2.16 },
                          { year: "2016-17", lpa: 2.43 }, { year: "2017-18", lpa: 2.57 }, { year: "2018-19", lpa: 2.82 },
                          { year: "2019-20", lpa: 3.02 }, { year: "2020-21", lpa: 3.02 }, { year: "2021-22", lpa: 3.58 },
                          { year: "2022-23", lpa: 3.68 }, { year: "2023-24", lpa: 3.72 }, { year: "2024-25", lpa: 4.05 }
                       ].map((data, i) => (
                          <div key={i} className="flex-1 flex flex-col items-center h-full justify-end relative group/bar">
                             <div 
                                style={{ height: `${(data.lpa / 4.5) * 100}%` }}
                                className={`w-full relative rounded-t-lg transition-all duration-700 ${data.lpa === 4.05 ? 'bg-gradient-to-t from-[#ffc107] to-[#ffd54f]' : 'bg-gradient-to-t from-[#18357a] to-[#224292]/60'} hover:brightness-110 z-10 shadow-lg`}
                             >
                                <span className="absolute -top-7 left-1/2 -translate-x-1/2 text-[10px] font-black text-[#18357a] opacity-0 group-hover/bar:opacity-100 transition-all duration-300 transform translate-y-1 group-hover/bar:translate-y-0 whitespace-nowrap z-50">
                                   {data.lpa}
                                </span>
                             </div>
                             <div className="mt-4 text-[7px] md:text-[8px] font-bold text-[#64779F] uppercase transform -rotate-45 md:rotate-0 whitespace-nowrap">{data.year}</div>
                          </div>
                       ))}
                    </div>
                 </div>
              </div>
           </div>

           {/* Section 2: Efficiency Insights (Right) */}
           <div className="flex flex-col">
              <div className="text-center lg:text-left mb-8 px-4">
                 <div className="inline-flex items-center gap-2 mb-3 bg-emerald-50 px-4 py-1.5 rounded-full border border-emerald-100">
                    <div className="h-2 w-2 rounded-full bg-emerald-500" />
                    <span className="text-[10px] font-black uppercase tracking-[0.3em] text-emerald-800">Efficiency Insights</span>
                 </div>
                 <h2 className="text-3xl md:text-4xl font-black text-[#18357a] tracking-tighter uppercase mb-4">
                    Placement <span className="text-emerald-500">Efficiency</span>
                 </h2>
              </div>

              <div className="relative p-6 md:p-10 bg-white rounded-[3rem] shadow-[0_40px_80px_rgba(24,53,122,0.05)] border border-[#D5E2F4]/50 overflow-visible group flex-1">
                 <div className="flex items-center justify-between mb-12">
                    <div className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-[#64779F]">
                       <span className="flex items-center gap-1.5"><div className="w-2.5 h-2.5 rounded-sm bg-emerald-500" /> Opted</span>
                       <span className="flex items-center gap-1.5"><div className="w-2.5 h-2.5 rounded-sm bg-[#18357a]" /> Placed</span>
                    </div>
                 </div>

                 <div className="relative h-80 pt-10">
                    <div className="absolute left-[-40px] md:left-[-35px] top-[40%] -translate-y-1/2 -rotate-90 origin-center text-[10px] md:text-[11px] font-black uppercase tracking-[0.35em] text-[#18357a] whitespace-nowrap z-0">
                       Headcount
                    </div>

                    <div className="relative h-full ml-10 flex items-end justify-between px-2 gap-4">
                       <div className="absolute left-0 top-0 bottom-0 w-px bg-[#18357a]/20" />
                       {[
                         { year: "2014-15", opted: 385, placed: 368 }, { year: "2016-17", opted: 580, placed: 549 },
                         { year: "2018-19", opted: 559, placed: 521 }, { year: "2020-21", opted: 515, placed: 489 },
                         { year: "2022-23", opted: 426, placed: 398 }, { year: "2024-25", opted: 674, placed: 610 }
                       ].map((data, i) => (
                          <div key={i} className="flex-1 flex flex-col items-center h-full relative group/col">
                             <div className="flex items-end gap-1.5 h-full w-full justify-center">
                                <div style={{ height: `${(data.opted / 800) * 100}%` }} className="flex-1 bg-emerald-500 rounded-t-lg relative group/tooltip shadow-md">
                                   <span className="absolute -top-7 left-1/2 -translate-x-1/2 text-[10px] font-black text-emerald-600 opacity-0 group-hover/col:opacity-100 transition-all duration-300 transform translate-y-1 group-hover/col:translate-y-0 whitespace-nowrap z-50">{data.opted}</span>
                                </div>
                                <div style={{ height: `${(data.placed / 800) * 100}%` }} className="flex-1 bg-[#18357a] rounded-t-lg relative group/tooltip shadow-md">
                                   <span className="absolute -top-7 left-1/2 -translate-x-1/2 text-[10px] font-black text-[#18357a] opacity-0 group-hover/col:opacity-100 transition-all duration-300 transform translate-y-1 group-hover/col:translate-y-0 whitespace-nowrap z-50">{data.placed}</span>
                                </div>
                             </div>
                             <div className="mt-4 text-[7px] md:text-[8px] font-bold text-[#18357a]/60 uppercase">{data.year}</div>
                          </div>
                       ))}
                    </div>
                 </div>
              </div>
           </div>
        </div>

        {/* Donut Distribution Charts - Fixed Static */}
        <div className="max-w-7xl mx-auto mb-40">
           <div className="text-center mb-20">
              <div className="flex items-center justify-center gap-3 text-[#ffc107] font-black text-[10px] uppercase tracking-[0.3em] mb-3">
                 <span className="w-10 h-[1px] bg-[#ffc107]" /> Distribution Analysis
              </div>
              <h2 className="text-4xl font-black text-[#18357a] tracking-tighter uppercase mb-4">Placement <span className="text-[#ffc107]">Impact</span> 2024-25</h2>
           </div>

           <div className="grid md:grid-cols-2 gap-12">
              <div className="bg-white p-12 rounded-[3.5rem] shadow-[0_30px_60px_rgba(24,53,122,0.06)] border border-[#D5E2F4]/50 relative">
                 <h3 className="text-xl font-black text-[#18357a]/30 uppercase tracking-widest text-center mb-12">Sector-Wise Impact</h3>
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
                          { label: "IT Sector", val: "52%", color: "#18357a" },
                          { label: "Core Sector", val: "34%", color: "#ffc107" },
                          { label: "Management", val: "14%", color: "#64779F" }
                       ].map((item, i) => (
                          <div key={i} className="flex items-center gap-4">
                             <div className="w-4 h-4 rounded-md shadow-sm" style={{ backgroundColor: item.color }} />
                             <div>
                                <div className="text-base font-black text-[#18357a] leading-none">{item.val}</div>
                                <div className="text-[10px] font-black text-[#64779F] uppercase tracking-wider">{item.label}</div>
                             </div>
                          </div>
                       ))}
                    </div>
                 </div>
              </div>

              <div className="bg-[#18357a] p-12 rounded-[3.5rem] shadow-[0_30px_60px_rgba(24,53,122,0.15)] relative overflow-hidden">
                 <h3 className="text-xl font-black text-white/20 uppercase tracking-widest text-center mb-12 relative z-10">Recruitment Channels</h3>
                 <div className="flex flex-col md:flex-row items-center justify-center gap-10 relative z-10">
                     <AnimatedDonut
                        radius={38}
                        circumference={238.76}
                        strokeWidth={10}
                        centerLabel="2025"
                        dark={true}
                        segments={[
                          { pct: 0.35, color: '#ffc107', start: 0 },
                          { pct: 0.25, color: '#4666B4', start: 0.35 },
                          { pct: 0.15, color: '#E8EDFF', start: 0.60 },
                          { pct: 0.14, color: '#A5B4FC', start: 0.75 },
                          { pct: 0.11, color: '#10B981', start: 0.89 }
                        ]}
                     />
                    <div className="grid grid-cols-2 gap-x-8 gap-y-4">
                       {[
                          { label: "On-Campus", val: "35%", color: "#ffc107" },
                          { label: "COE Hiring", val: "25%", color: "#4666B4" },
                          { label: "Internship", val: "15%", color: "#E8EDFF" },
                          { label: "Off-Campus", val: "14%", color: "#A5B4FC" },
                          { label: "Corporate Contest", val: "11%", color: "#10B981" }
                       ].map((item, i) => (
                          <div key={i} className="flex items-center gap-3">
                             <div className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: item.color }} />
                             <div>
                                <div className="text-sm font-black text-white leading-none">{item.val}</div>
                                <div className="text-[8px] font-black text-white/40 uppercase tracking-wider">{item.label}</div>
                             </div>
                          </div>
                       ))}
                    </div>
                 </div>
              </div>
           </div>
        </div>

        {/* Hiring Models - Fixed Static */}
        <div className="max-w-6xl mx-auto mb-40 px-6">
           <div className="flex flex-col md:flex-row gap-16 md:items-start">
              <div className="md:w-1/3">
                 <h2 className="text-4xl font-black text-[#18357a] tracking-tighter uppercase mb-6 leading-tight">Hiring <span className="text-[#ffc107]">Models</span></h2>
                 <p className="text-[#64779F] text-sm font-medium leading-relaxed">
                    We offer diverse recruitment channels tailored to identify and nurture top talent, ensuring a perfect match between student capabilities and industry requirements.
                 </p>
              </div>
              <div className="md:w-2/3 flex flex-wrap gap-4 pt-4">
                 {[
                    "On-Campus / Off-Campus Hiring",
                    "Contest-Based Hiring",
                    "Bilingual Hiring",
                    "Internship-Based Hiring",
                    "COE-Based Hiring"
                 ].map((model, i) => (
                    <div key={i} className="px-8 py-5 rounded-[2rem] border border-[#18357a]/10 text-[11px] md:text-[13px] font-black uppercase tracking-widest text-[#18357a] hover:bg-[#18357a] hover:text-white transition-all cursor-default shadow-sm">
                       {model}
                    </div>
                 ))}
              </div>
           </div>
        </div>

        {/* Closing - Fixed Static */}
        <div className="mt-40 text-center">
           <div className="inline-block px-10 py-5 rounded-[2rem] bg-[#18357a] text-white shadow-2xl relative overflow-hidden">
              <p className="relative z-10 font-black uppercase tracking-widest text-xs flex items-center gap-4">
                 <ShieldCheck size={18} className="text-[#ffc107]" />
                 Committed to shaping tomorrow's leaders through unparalleled industry integration.
              </p>
           </div>
        </div>
      </section>
    </div>
  )
}

export default OutcomesOverview
