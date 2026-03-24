import React from 'react'
import { motion } from 'framer-motion'
import { Trophy, TrendingUp, Users, Award, ShieldCheck, Heart } from 'lucide-react'

const OutcomesOverview = () => {
  return (
    <div className="relative bg-white pt-16 pb-20 min-h-screen overflow-hidden">
      
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-bl from-[#18357a]/5 to-transparent rounded-bl-full pointer-events-none" />
      
      <section className="relative px-6 sm:px-10 lg:px-20 z-10 max-w-7xl mx-auto">
        
        {/* Header Section */}
        <div className="text-center mb-16">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2.5 px-6 py-2.5 rounded-full bg-white border border-[#D5E2F4]/80 shadow-sm mb-8">
               <span className="text-sm font-black text-[#18357a] uppercase tracking-[0.2em]">Excellence Defined</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-[#18357a] mb-6 tracking-tighter uppercase leading-tight">
               Placement <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#18357a] to-[#ffc107]">Outcomes</span>
            </h1>
            
            <p className="max-w-2xl mx-auto text-[#64779F] text-lg font-bold leading-relaxed italic border-l-4 border-[#ffc107] pl-8 py-4 bg-[#18357a]/5 rounded-r-2xl text-left">
               Showcasing the consistent success and global reach of our graduates as they embark on high-impact professional journeys.
            </p>
          </motion.div>
        </div>

        {/* Global Stats Dashboard */}
        <div className="grid md:grid-cols-3 gap-8 mb-20 mx-auto max-w-6xl">
           {[
             { title: "Highest Package", val: "₹18.5 LPA", icon: Trophy, desc: "Outsourcing Technologies, Japan" },
             { title: "Success Rate", val: "95%+", icon: TrendingUp, desc: "Consistent annual placements" },
             { title: "Global Network", val: "2500+", icon: Users, desc: "Alumni in top multinationals" }
           ].map((stat, i) => (
             <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-white p-10 rounded-[2.5rem] shadow-[0_20px_50px_rgba(24,53,122,0.06)] border border-[#D5E2F4]/50 group hover:border-[#ffc107]/30 transition-all text-center"
             >
                <div className="w-12 h-12 rounded-2xl bg-[#18357a]/5 flex items-center justify-center text-[#18357a] group-hover:bg-[#18357a] group-hover:text-white transition-all mx-auto mb-6">
                   <stat.icon size={24} />
                </div>
                <div className="text-3xl font-black text-[#18357a] mb-2">{stat.val}</div>
                <div className="text-[#ffc107] text-[10px] font-black uppercase tracking-widest mb-4">{stat.title}</div>
                <p className="text-[#64779F] text-xs font-semibold">{stat.desc}</p>
             </motion.div>
           ))}
        </div>        {/* Placement Statistics Growth Chart - Unified Institutional Model */}
        <div className="max-w-7xl mx-auto mb-40">
           <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-black text-[#18357a] border-b-4 border-[#ffc107] inline-block pb-2 px-12 uppercase tracking-tighter">
                Placement <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#18357a] to-[#4666B4]">Outcomes</span>
              </h2>
           </div>

           <div className="relative p-12 md:p-24 bg-white rounded-[4rem] shadow-[0_50px_100px_rgba(24,53,122,0.1)] border border-[#D5E2F4]/50 overflow-visible group h-[600px] max-w-6xl mx-auto">
              
              {/* Growth Narrative Tag - Moved to Top Right to avoid collision */}
              <div className="absolute top-8 right-8 flex items-center gap-4 py-2 px-6 rounded-full border border-[#18357a]/10 bg-white/50 backdrop-blur-sm shadow-sm z-30">
                 <span className="text-[9px] font-black text-[#18357a] uppercase tracking-[0.3em] whitespace-nowrap leading-none pt-0.5">Decade of Excellence</span>
                 <div className="w-6 h-[2px] bg-[#ffc107] rounded-full" />
                 <span className="text-[9px] font-bold text-[#64779F] leading-none uppercase pt-0.5">Growth Path</span>
              </div>

              {/* Thick Technical Axes */}
              <div className="absolute left-20 md:left-32 bottom-32 w-[calc(100%-120px)] md:w-[calc(100%-180px)] h-1.5 bg-[#18357a] z-20 rounded-full shadow-sm">
                 <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 border-l-[12px] border-l-[#18357a] border-y-[8px] border-y-transparent" />
              </div>
              <div className="absolute left-20 md:left-32 bottom-32 w-1.5 h-[410px] bg-[#18357a] z-20 rounded-full shadow-sm">
                 <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 border-b-[12px] border-b-[#18357a] border-x-[8px] border-x-transparent" />
              </div>

              {/* Y-Axis Label - Professional Institutional Font */}
              <div className="absolute left-4 md:left-10 top-[40%] -translate-y-1/2 -rotate-90 origin-center text-[10px] md:text-sm font-black uppercase tracking-[0.25em] text-[#18357a]/40">
                 SALARY: Rs. Lakhs per annum
              </div>

              {/* Technical Grid Support */}
              <div className="absolute inset-x-20 md:inset-x-32 bottom-32 h-[400px] flex flex-col-reverse justify-between pointer-events-none">
                 {[0, 0.50, 1.00, 1.50, 2.00, 2.50, 3.00, 3.50, 4.00, 4.50].map(val => (
                    <div key={val} className="relative w-full h-[1px] bg-[#18357a]/5">
                       <span className="absolute -left-12 md:-left-16 top-1/2 -translate-y-1/2 text-[10px] md:text-[11px] font-black text-[#18357a]/30">
                          {val === 0 ? "0.00" : val.toFixed(2)}
                       </span>
                    </div>
                 ))}
              </div>

              {/* The Data Visualization Area - Fixed Baseline at bottom-32 */}
              <div className="absolute inset-x-20 md:inset-x-32 bottom-32 h-[400px] flex items-end justify-between gap-1 md:gap-4 px-10 md:px-20 ml-12">
                 {[
                    { year: "2013-14", lpa: 1.85 },
                    { year: "2014-15", lpa: 2.01 },
                    { year: "2015-16", lpa: 2.16 },
                    { year: "2016-17", lpa: 2.43 },
                    { year: "2017-18", lpa: 2.57 },
                    { year: "2018-19", lpa: 2.82 },
                    { year: "2019-20", lpa: 3.02 },
                    { year: "2020-21", lpa: 3.02 },
                    { year: "2021-22", lpa: 3.58 },
                    { year: "2022-23", lpa: 3.68 },
                    { year: "2023-24", lpa: 3.72 },
                    { year: "2024-25", lpa: 4.05 }
                 ].map((data, i) => (
                    <div key={i} className="flex-1 flex flex-col items-center group/bar z-30 h-full justify-end relative">
                       {/* Value Label */}
                       <motion.div 
                          initial={{ opacity: 0, y: 10 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: 1 + (i * 0.05) }}
                          className={`mb-2 text-[10px] md:text-[13px] font-black ${data.lpa === 4.05 ? 'text-[#ffc107]' : 'text-[#18357a]'}`}
                       >
                          {data.lpa}
                       </motion.div>

                       {/* The Unified Styling Bar */}
                       <motion.div
                          initial={{ height: 0 }}
                          whileInView={{ height: `${(data.lpa / 4.5) * 100}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1.5, delay: i * 0.08, ease: "circOut" }}
                          className="w-full relative border-[2.5px] border-[#18357a] bg-[#18357a] hover:bg-[#4666B4] transition-all flex flex-col justify-end overflow-hidden group-hover/bar:translate-y-[-5px] shadow-[4px_4px_20px_rgba(24,53,122,0.1)]"
                       >
                          {/* Top Highlight Shine */}
                          <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-b from-white/20 to-transparent" />
                       </motion.div>

                       {/* Year Label - Clean X-Axis Typography */}
                       <div className="absolute top-[calc(100%+8px)] w-full text-center group-hover/bar:scale-110 transition-transform">
                          <span className="text-[7px] md:text-[11px] font-black text-[#18357a] uppercase tracking-tighter opacity-80 group-hover:opacity-100">
                             {data.year}
                          </span>
                       </div>
                    </div>
                  ))}
               </div>
           </div>
        </div>

        {/* Students Placed vs Opted Efficiency Chart */}
        <div className="max-w-7xl mx-auto mb-40">
           <div className="text-center mb-16">
              <div className="flex items-center justify-center gap-3 text-[#ffc107] font-black text-[10px] uppercase tracking-[0.3em] mb-3">
                 <span className="w-10 h-[1px] bg-[#ffc107]" /> Efficiency Highlights
              </div>
              <h2 className="text-4xl font-black text-[#18357a] tracking-tighter uppercase mb-4">Placement <span className="text-[#ffc107]">Success</span> Rate</h2>
              <p className="text-[#64779F] font-semibold text-xs max-w-lg mx-auto">Tracking the high-conversion success of our students from registration to final selection.</p>
           </div>           <div className="relative p-10 md:p-16 bg-white rounded-[4rem] shadow-[0_40px_80px_rgba(24,53,122,0.08)] border border-[#D5E2F4]/50 overflow-hidden group">
              {/* Chart Grid Lines with Labels */}
              <div className="absolute inset-x-14 md:inset-x-20 bottom-32 h-64 flex flex-col-reverse justify-between">
                 {[0, 100, 200, 300, 400, 500, 600, 700, 800].map(val => (
                    <div key={val} className="relative w-full h-[1px] bg-[#18357a]/5">
                       <span className="absolute -left-10 md:-left-12 top-1/2 -translate-y-1/2 text-[10px] font-bold text-[#18357a]/30">
                          {val}
                       </span>
                    </div>
                 ))}
              </div>

              {/* The Data Visualization Area */}
              <div className="relative h-64 flex items-end justify-between gap-1.5 md:gap-4 px-2 md:px-0 ml-10 md:ml-6 overflow-x-auto pb-4 scrollbar-hide">
                 {[
                    { year: "2014-15", opted: 385, placed: 368 },
                    { year: "2015-16", opted: 494, placed: 470 },
                    { year: "2016-17", opted: 580, placed: 549 },
                    { year: "2017-18", opted: 571, placed: 530 },
                    { year: "2018-19", opted: 559, placed: 521 },
                    { year: "2019-20", opted: 486, placed: 464 },
                    { year: "2020-21", opted: 515, placed: 489 },
                    { year: "2021-22", opted: 379, placed: 358 },
                    { year: "2022-23", opted: 426, optedColor: "#2e7d32", placed: 398 },
                    { year: "2023-24", opted: 609, placed: 568 },
                    { year: "2024-25", opted: 674, placed: 610 }
                 ].map((data, i) => (
                    <div key={i} className="flex-none md:flex-1 flex flex-col items-center group/pair z-10 px-1">
                       <div className="flex items-end gap-[2px] md:gap-2 h-full w-full">
                          {/* Opted Column */}
                          <div className="flex-1 flex flex-col justify-end items-center gap-1 h-full">
                             <motion.span 
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                transition={{ delay: 1 }}
                                className="text-[7px] md:text-[9px] font-black text-[#2e7d32] mb-1"
                             >
                                {data.opted}
                             </motion.span>
                             <motion.div
                                initial={{ height: 0 }}
                                whileInView={{ height: `${(data.opted / 800) * 100}%` }}
                                viewport={{ once: true }}
                                transition={{ duration: 1.2, delay: i * 0.1, ease: "easeOut" }}
                                className="w-full bg-[#2e7d32] rounded-t-sm shadow-sm transition-all"
                             />
                          </div>
                          {/* Placed Column */}
                          <div className="flex-1 flex flex-col justify-end items-center gap-1 h-full">
                             <motion.span 
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                transition={{ delay: 1.2 }}
                                className="text-[7px] md:text-[9px] font-black text-[#18357a] mb-1"
                             >
                                {data.placed}
                             </motion.span>
                             <motion.div
                                initial={{ height: 0 }}
                                whileInView={{ height: `${(data.placed / 800) * 100}%` }}
                                viewport={{ once: true }}
                                transition={{ duration: 1.2, delay: (i * 0.1) + 0.1, ease: "easeOut" }}
                                className="w-full bg-[#18357a] rounded-t-sm shadow-sm transition-all"
                             />
                          </div>
                       </div>

                       {/* Year Label */}
                       <div className="mt-4 pt-4 border-t border-[#D5E2F4] w-full text-center">
                          <span className="text-[7px] md:text-[11px] font-bold text-[#18357a]/60 tracking-tighter uppercase whitespace-nowrap">
                             {data.year}
                          </span>
                       </div>
                    </div>
                 ))}
              </div>

              {/* Legend with rounded squares */}
              <div className="mt-16 flex justify-center gap-12">
                 <div className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-lg bg-[#2e7d32] shadow-sm" />
                    <span className="text-[11px] font-black text-[#18357a] uppercase tracking-widest">Students Opted</span>
                 </div>
                 <div className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-lg bg-[#18357a] shadow-sm" />
                    <span className="text-[11px] font-black text-[#18357a] uppercase tracking-widest">Students Placed</span>
                 </div>
              </div>

              {/* Vertical Title (NO. OF STUDENTS) */}
              <div className="absolute left-6 md:left-8 top-[45%] -translate-y-1/2 -rotate-90 text-[8px] md:text-[10px] font-bold uppercase tracking-[0.5em] text-[#18357a]/20">
                 No. of Students
              </div>
           </div>
        </div>

        {/* New Donut Distribution Charts */}
        <div className="max-w-7xl mx-auto mb-40">
           <div className="text-center mb-20">
              <div className="flex items-center justify-center gap-3 text-[#ffc107] font-black text-[10px] uppercase tracking-[0.3em] mb-3">
                 <span className="w-10 h-[1px] bg-[#ffc107]" /> Distribution Analysis
              </div>
              <h2 className="text-4xl font-black text-[#18357a] tracking-tighter uppercase mb-4">Placement <span className="text-[#ffc107]">Impact</span> 2024-25</h2>
              <p className="text-[#64779F] font-semibold text-xs max-w-lg mx-auto">A comprehensive breakdown of our multi-sector hiring dominance and diverse recruitment pathways.</p>
           </div>

           <div className="grid md:grid-cols-2 gap-12">
              {/* Sector-Wise Impact Chart */}
              <div className="bg-white p-12 rounded-[3.5rem] shadow-[0_30px_60px_rgba(24,53,122,0.06)] border border-[#D5E2F4]/50 relative group">
                 <h3 className="text-xl font-black text-[#18357a]/30 uppercase tracking-widest text-center mb-12">Sector-Wise Impact</h3>
                 
                 <div className="flex flex-col md:flex-row items-center justify-center gap-12">
                    {/* Donut SVG */}
                    <div className="relative w-56 h-56">
                       <svg viewBox="0 0 100 100" className="w-full h-full -rotate-90">
                          {/* IT: 52% */}
                          <motion.circle 
                             cx="50" cy="50" r="40" fill="none" stroke="#18357a" strokeWidth="12"
                             strokeDasharray="251.2"
                             initial={{ strokeDashoffset: 251.2 }}
                             whileInView={{ strokeDashoffset: 251.2 * (1 - 0.52) }}
                             viewport={{ once: true }}
                             transition={{ duration: 1.5, delay: 0.2 }}
                          />
                          {/* Core: 34% */}
                          <motion.circle 
                             cx="50" cy="50" r="40" fill="none" stroke="#ffc107" strokeWidth="12"
                             strokeDasharray="251.2"
                             initial={{ strokeDashoffset: 251.2 }}
                             whileInView={{ strokeDashoffset: 251.2 * (1 - 0.34) }}
                             viewport={{ once: true }}
                             transition={{ duration: 1.5, delay: 0.2 }}
                             style={{ strokeDasharray: `251.2`, transformOrigin: 'center', rotate: `${360 * 0.52}deg` }}
                          />
                          {/* Management: 14% */}
                          <motion.circle 
                             cx="50" cy="50" r="40" fill="none" stroke="#64779F" strokeWidth="12"
                             strokeDasharray="251.2"
                             initial={{ strokeDashoffset: 251.2 }}
                             whileInView={{ strokeDashoffset: 251.2 * (1 - 0.14) }}
                             viewport={{ once: true }}
                             transition={{ duration: 1.5, delay: 0.2 }}
                             style={{ strokeDasharray: `251.2`, transformOrigin: 'center', rotate: `${360 * (0.52 + 0.34)}deg` }}
                          />
                       </svg>
                       <div className="absolute inset-0 flex flex-col items-center justify-center">
                          <span className="text-3xl font-black text-[#18357a]">100%</span>
                          <span className="text-[9px] font-bold text-[#64779F] uppercase tracking-widest">Total Hires</span>
                       </div>
                    </div>

                    {/* Legend Labels */}
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

              {/* Recruitment Channels Chart */}
              <div className="bg-[#18357a] p-12 rounded-[3.5rem] shadow-[0_30px_60px_rgba(24,53,122,0.15)] relative overflow-hidden group">
                 <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-white/[0.03] rounded-full -translate-y-1/2 translate-x-1/2" />
                 <h3 className="text-xl font-black text-white/20 uppercase tracking-widest text-center mb-12 relative z-10">Recruitment Channels</h3>
                 
                 <div className="flex flex-col md:flex-row items-center justify-center gap-10 relative z-10">
                    <div className="relative w-56 h-56">
                       <svg viewBox="0 0 100 100" className="w-full h-full -rotate-90">
                          {/* Donut rings logic... simplified for multi-segments */}
                          {[
                             { pct: 0.35, color: "#ffc107", start: 0, label: "On-Campus" },
                             { pct: 0.25, color: "#4666B4", start: 0.35, label: "COE Hiring" },
                             { pct: 0.15, color: "#E8EDFF", start: 0.60, label: "Internship" },
                             { pct: 0.14, color: "#A5B4FC", start: 0.75, label: "Off-Campus" },
                             { pct: 0.11, color: "#FBBF24", start: 0.89, label: "Contest" }
                          ].map((seg, i) => (
                             <motion.circle 
                                key={i} cx="50" cy="50" r="38" fill="none" stroke={seg.color} strokeWidth="10"
                                strokeDasharray="238.76"
                                initial={{ strokeDashoffset: 238.76 }}
                                whileInView={{ strokeDashoffset: 238.76 * (1 - seg.pct) }}
                                viewport={{ once: true }}
                                transition={{ duration: 1.5, delay: 0.5 }}
                                style={{ transformOrigin: 'center', rotate: `${360 * seg.start}deg` }}
                                className="drop-shadow-lg"
                             />
                          ))}
                       </svg>
                       <div className="absolute inset-0 flex flex-col items-center justify-center">
                          <span className="text-3xl font-black text-white">2025</span>
                          <span className="text-[9px] font-bold text-white/60 uppercase tracking-widest">Batch</span>
                       </div>
                    </div>

                    <div className="grid grid-cols-2 gap-x-8 gap-y-4">
                       {[
                          { label: "On-Campus", val: "35%", color: "#ffc107" },
                          { label: "COE Hiring", val: "25%", color: "#4666B4" },
                          { label: "Internship", val: "15%", color: "#E8EDFF" },
                          { label: "Off-Campus", val: "14%", color: "#A5B4FC" },
                          { label: "Corporate Contest", val: "11%", color: "#FBBF24" }
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

        {/* Minimalist Recruitment Hiring Models Section */}
        <div className="max-w-6xl mx-auto mb-40 px-6">
           <div className="flex flex-col md:flex-row gap-16 md:items-start">
              {/* Left Column: Context */}
              <div className="md:w-1/3">
                 <div className="flex items-center gap-3 text-[#ffc107] font-black text-[10px] uppercase tracking-[0.3em] mb-4">
                    <span className="w-10 h-[1px] bg-[#ffc107]" /> Dynamic Engagement
                 </div>
                 <h2 className="text-4xl font-black text-[#18357a] tracking-tighter uppercase mb-6 leading-tight">
                    Hiring <span className="text-[#ffc107]">Models</span>
                 </h2>
                 <p className="text-[#64779F] font-bold text-sm leading-relaxed border-l-2 border-[#18357a]/10 pl-6 py-2 italic">
                    We offer diverse recruitment pathways that allow companies to engage with students based on their specific hiring strategies and requirements.
                 </p>
              </div>

              {/* Right Column: The Flow Layout Pills */}
              <div className="md:w-2/3 flex flex-wrap gap-4 pt-4">
                 {[
                    "On-Campus / Off-Campus Hiring",
                    "Contest-Based Hiring",
                    "Bilingual Hiring",
                    "Internship-Based Hiring",
                    "COE-Based Hiring"
                 ].map((model, i) => (
                    <motion.div
                       key={i}
                       initial={{ opacity: 0, x: -20 }}
                       whileInView={{ opacity: 1, x: 0 }}
                       viewport={{ once: true }}
                       transition={{ duration: 0.6, delay: i * 0.12, ease: "easeOut" }}
                       className="group relative px-8 py-5 rounded-[2rem] border border-[#18357a]/10 hover:border-[#18357a] transition-all duration-300 cursor-default"
                    >
                       <div className="absolute inset-0 bg-[#18357a]/5 rounded-[2rem] scale-90 opacity-0 group-hover:scale-100 group-hover:opacity-100 transition-all duration-300" />
                       <span className="relative z-10 text-[11px] md:text-[13px] font-black uppercase tracking-widest text-[#18357a] group-hover:text-[#18357a] transition-colors">
                          {model}
                       </span>
                    </motion.div>
                 ))}
              </div>
           </div>
        </div>

        {/* Closing Note */}
        <div className="mt-40 text-center">
           <div className="inline-block px-10 py-5 rounded-[2rem] bg-[#18357a] text-white shadow-2xl relative overflow-hidden group">
              <div className="absolute inset-0 bg-[#ffc107]/10 translate-x-full group-hover:translate-x-0 transition-transform duration-700" />
              <p className="relative z-10 font-black uppercase tracking-widest text-xs flex items-center gap-4">
                 <ShieldCheck size={18} className="text-[#ffc107]" />
                 Committed to shaping tomorrow's leaders through unparalleled industry integration.
              </p>
           </div>
        </div>

      </section>

      {/* Decorative background bottom */}
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-gradient-to-tr from-[#ffc107]/5 to-transparent rounded-tr-full pointer-events-none" />
    </div>
  )
}

export default OutcomesOverview
