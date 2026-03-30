import React, { useState, useMemo } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { BarChart3, Target } from 'lucide-react'

// Animated Trend Line Chart
const SleekTrendChart = ({ data, maxVal = 4.5 }) => {
  const [isHovered, setIsHovered] = useState(null);
  const points = useMemo(() => data.map((d, i) => ({
    x: (i / (data.length - 1)) * 100,
    y: 100 - (d.lpa / maxVal) * 100
  })), [data, maxVal]);

  const pathD = useMemo(() => {
    if (points.length === 0) return '';
    return `M ${points[0].x},${points[0].y} ` + points.slice(1).map(p => `L ${p.x},${p.y}`).join(' ');
  }, [points]);

  const areaD = useMemo(() => {
    if (points.length === 0) return '';
    return `${pathD} L 100,100 L 0,100 Z`;
  }, [pathD, points]);

  return (
    <div className="relative h-80 w-full group/chart">
      <div className="absolute inset-0 flex flex-col justify-between pointer-events-none opacity-20">
        {[0, 1, 2, 3, 4].map((v) => <div key={v} className="w-full h-px bg-[#18357a]/20 border-t border-dashed border-[#18357a]/40" />)}
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
        </defs>
        <motion.path d={areaD} fill="url(#areaGradient)" initial={{ opacity: 0, d: `M 0,100 L 100,100 L 100,100 L 0,100 Z` }} whileInView={{ opacity: 1, d: areaD }} transition={{ duration: 1.5 }} viewport={{ once: true }} />
        <motion.path d={pathD} fill="none" stroke="url(#lineGradient)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" initial={{ pathLength: 0, opacity: 0 }} whileInView={{ pathLength: 1, opacity: 1 }} transition={{ duration: 2 }} viewport={{ once: true }} />
        {points.map((p, i) => (
          <motion.g key={i} initial={{ opacity: 0, scale: 0 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ delay: 0.5 + i * 0.05 }} viewport={{ once: true }}>
            <circle cx={p.x} cy={p.y} r="1.2" fill={data[i].lpa === 4.05 ? "#ffc107" : "#18357a"} onMouseEnter={() => setIsHovered(i)} onMouseLeave={() => setIsHovered(null)} />
          </motion.g>
        ))}
      </svg>
      <div className="absolute inset-0 flex justify-between items-end px-1 overflow-visible">
        {data.map((d, i) => (
          <div key={i} className="flex-1 h-full relative group/data-point" onMouseEnter={() => setIsHovered(i)} onMouseLeave={() => setIsHovered(null)}>
            <div className={`absolute bottom-[-2.5rem] left-1/2 -translate-x-1/2 text-[8px] font-bold uppercase transition-all duration-300 ${isHovered === i ? 'text-[#18357a] scale-110' : 'text-[#18357a]/60'}`}>
              {d.year}
            </div>
            <AnimatePresence>
              {isHovered === i && (
                <motion.div initial={{ opacity: 0, y: 10, scale: 0.9 }} animate={{ opacity: 1, y: 0, scale: 1 }} exit={{ opacity: 0, y: 10, scale: 0.9 }} className="absolute z-50 pointer-events-none whitespace-nowrap" style={{ left: '50%', bottom: `${(d.lpa / maxVal) * 100}%`, transform: 'translateX(-50%) translateY(-20px)' }}>
                  <div className="bg-[#18357a] text-white px-3 py-1.5 rounded-xl shadow-2xl border border-white/10 flex flex-col items-center">
                    <span className="text-[10px] font-black">{d.lpa} LPA</span>
                    <span className="text-[7px] font-bold text-white/50 uppercase">{d.year}</span>
                    <div className="absolute bottom-[-4px] left-1/2 -translate-x-1/2 w-2 h-2 bg-[#18357a] rotate-45" />
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

// Premium Grouped Capsule Chart
const EliteEfficiencyChart = ({ data }) => {
  const [hoverIndex, setHoverIndex] = useState(null);
  return (
    <div className="relative h-80 w-full flex items-end justify-between px-2 gap-4">
      {data.map((d, i) => (
        <div key={i} className="flex-1 flex flex-col items-center h-full group/col relative" onMouseEnter={() => setHoverIndex(i)} onMouseLeave={() => setHoverIndex(null)}>
          <div className="flex items-end gap-2 h-full w-full justify-center">
            <div className="relative flex-1 flex flex-col items-center justify-end h-full">
              <motion.div initial={{ height: 0 }} whileInView={{ height: `${(d.opted / 800) * 100}%` }} transition={{ duration: 1, delay: i * 0.1 }} viewport={{ once: true }} className="w-full bg-white/10 border border-white/20 rounded-full relative overflow-hidden" />
            </div>
            <div className="relative flex-1 flex flex-col items-center justify-end h-full">
              <motion.div initial={{ height: 0 }} whileInView={{ height: `${(d.placed / 800) * 100}%` }} transition={{ duration: 1, delay: i * 0.1 + 0.1 }} viewport={{ once: true }} className="w-full bg-[#ffc107]/20 border border-[#ffc107]/30 rounded-full relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-[#ffc107] to-[#ffd54f]" />
              </motion.div>
            </div>
          </div>
          <div className="mt-6">
            <span className={`text-[8px] font-black uppercase transition-all duration-300 ${hoverIndex === i ? 'text-white scale-110' : 'text-white/40'}`}>
              {d.year}
            </span>
          </div>
          <AnimatePresence>
            {hoverIndex === i && (
              <motion.div initial={{ opacity: 0, y: 10, scale: 0.95 }} animate={{ opacity: 1, y: 0, scale: 1 }} exit={{ opacity: 0, y: 10, scale: 0.95 }} className="absolute -top-12 z-50 bg-white p-3 rounded-2xl shadow-xl border border-[#D5E2F4] min-w-[120px]">
                <div className="flex flex-col gap-2">
                  <div className="flex items-center justify-between gap-4">
                    <span className="text-[9px] font-bold text-[#64779F]">OPTED</span>
                    <span className="text-[11px] font-black text-[#18357a]">{d.opted}</span>
                  </div>
                  <div className="flex items-center justify-between gap-4">
                    <span className="text-[9px] font-bold text-[#64779F]">PLACED</span>
                    <span className="text-[11px] font-black text-[#ffc107]">{d.placed}</span>
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

const AnalyticsCharts = ({ statsData, efficiencyData }) => {
  return (
    <div className="grid lg:grid-cols-2 gap-10 mb-40">
       <motion.div initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="flex flex-col bg-white p-1 rounded-[4rem] border border-[#18357a]/10">
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
                  <div className="px-5 py-2 rounded-2xl bg-[#18357a] text-white font-black text-xs">MAX 4.05</div>
                  <span className="text-[10px] font-black text-[#ffc107]">AVG 2.92 LPA</span>
               </div>
            </div>
            <div className="flex-1 min-h-[320px] pb-10">
               <SleekTrendChart data={statsData} />
            </div>
          </div>
       </motion.div>

       <motion.div initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="flex flex-col bg-[#18357a] p-1 rounded-[4rem] shadow-2xl shadow-[#18357a]/20 overflow-hidden relative">
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
            <div className="flex-1 min-h-[320px] pb-10">
               <EliteEfficiencyChart data={efficiencyData} />
            </div>
          </div>
       </motion.div>
    </div>
  )
}

export default AnalyticsCharts
