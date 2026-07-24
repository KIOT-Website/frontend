import React, { useState, useMemo } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  BarChart3, Target, TrendingUp, Star, Award, Zap, 
  GraduationCap, BookOpen, Building2, Briefcase, Users, Trophy 
} from 'lucide-react'

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
    <div className="relative h-64 w-full group/chart font-graphik">
      <div className="absolute inset-0 flex flex-col justify-between pointer-events-none">
        {[0, 1, 2, 3, 4, 5].map((v) => (
          <div key={v} className="flex items-center gap-4">
             <div className="flex-1 h-[1px] bg-slate-100" />
          </div>
        ))}
      </div>
      <svg viewBox="0 0 100 100" preserveAspectRatio="none" className="absolute left-6 sm:left-10 right-0 inset-y-0 w-[calc(100%-1.5rem)] sm:w-[calc(100%-2.5rem)] h-full overflow-visible">
        <defs>
          <linearGradient id="areaGradient" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#224292" stopOpacity="0.2" />
            <stop offset="100%" stopColor="#224292" stopOpacity="0.01" />
          </linearGradient>
          <linearGradient id="lineGradient" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#224292" />
            <stop offset="100%" stopColor="#ffc107" />
          </linearGradient>
        </defs>
        <motion.path d={areaD} fill="url(#areaGradient)" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 1.5 }} viewport={{ once: true }} />
        <motion.path d={pathD} fill="none" stroke="url(#lineGradient)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} transition={{ duration: 2 }} viewport={{ once: true }} />
        {points.map((p, i) => (
          <motion.g key={i} initial={{ opacity: 0, scale: 0 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ delay: 0.5 + i * 0.05 }} viewport={{ once: true }}>
            <circle cx={p.x} cy={p.y} r="1.5" fill={data[i].lpa > 3.5 ? "#ffc107" : "#224292"} stroke="white" strokeWidth="0.5" onMouseEnter={() => setIsHovered(i)} onMouseLeave={() => setIsHovered(null)} className="cursor-pointer transition-all hover:r-2 shadow-sm" />
          </motion.g>
        ))}
      </svg>
      <div className="absolute left-6 sm:left-10 right-0 bottom-[-2.5rem] flex justify-between px-1 w-[calc(100%-1.5rem)] sm:w-[calc(100%-2.5rem)]">
        {data.map((d, i) => (
          <div key={i} className="text-[8px] sm:text-[10px] font-black text-black uppercase tracking-tight -rotate-45 sm:rotate-0 origin-top-right mt-2 sm:mt-0">{d.year.replace('20', "'")}</div>
        ))}
      </div>
      <div className="absolute left-6 sm:left-10 right-0 inset-y-0 w-[calc(100%-1.5rem)] sm:w-[calc(100%-2.5rem)] flex justify-between overflow-visible">
        {data.map((d, i) => (
          <div key={i} className="flex-1 h-full relative group/data-point" onMouseEnter={() => setIsHovered(i)} onMouseLeave={() => setIsHovered(null)}>
            <AnimatePresence>
              {isHovered === i && (
                <motion.div initial={{ opacity: 0, y: 10, scale: 0.9 }} animate={{ opacity: 1, y: 0, scale: 1 }} exit={{ opacity: 0, y: 10, scale: 0.9 }} className="absolute z-50 pointer-events-none" style={{ left: '50%', bottom: `${(d.lpa / maxVal) * 100}%`, transform: 'translateX(-50%) translateY(-25px)' }}>
                  <div className="bg-[#224292] text-white px-4 py-2.5 rounded-2xl shadow-2xl border border-white/10 flex flex-col items-center">
                    <span className="text-[14px] font-black tracking-tight">{d.lpa} LPA</span>
                    <div className="absolute bottom-[-5px] left-1/2 -translate-x-1/2 w-3 h-3 bg-[#224292] rotate-45" />
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
  const icons = [GraduationCap, BookOpen, Building2, Briefcase, Users, Trophy];
  
  return (
    <div className="relative h-64 w-full flex items-end justify-between px-4 sm:px-8 gap-4 sm:gap-8 font-graphik">
      <div className="absolute inset-0 flex flex-col justify-between pointer-events-none">
        {[0, 25, 50, 75, 100].map((v) => (
          <div key={v} className="flex items-center gap-6">
             <div className="flex-1 h-[1px] bg-white/10" />
          </div>
        ))}
      </div>
      
      {data.map((d, i) => {
        const Icon = icons[i % icons.length];
        const optedPercent = (d.opted / 800) * 100;
        const placedPercent = (d.placed / 800) * 100;
        
        return (
          <div key={i} className="flex-1 flex flex-col items-center h-full group/col relative z-10" onMouseEnter={() => setHoverIndex(i)} onMouseLeave={() => setHoverIndex(null)}>
            <div className="flex items-end gap-1.5 h-full w-full justify-center pb-2">
              <div className="relative w-4 sm:w-6 flex flex-col items-center justify-end h-full">
                <span className="absolute top-[-25px] text-[10px] font-semibold text-white/70">{Math.round(optedPercent)}%</span>
                <motion.div initial={{ height: 0 }} whileInView={{ height: `${optedPercent}%` }} transition={{ duration: 1, delay: i * 0.1 }} viewport={{ once: true }} className="w-full bg-white/20 rounded-t-sm relative" />
              </div>
              <div className="relative w-4 sm:w-6 flex flex-col items-center justify-end h-full">
                <span className="absolute top-[-25px] text-[10px] font-semibold text-[#ffc107]">{Math.round(placedPercent)}%</span>
                <motion.div initial={{ height: 0 }} whileInView={{ height: `${placedPercent}%` }} transition={{ duration: 1, delay: i * 0.1 + 0.1 }} viewport={{ once: true }} className="w-full bg-[#ffc107] rounded-t-sm relative shadow-[0_0_20px_rgba(255,193,7,0.2)]" />
              </div>
            </div>
            
            <div className="w-8 h-8 rounded-lg bg-white/10 border border-white/10 flex items-center justify-center mb-2 mt-4 group-hover:bg-[#ffc107] group-hover:text-[#224292] transition-all duration-500">
               <Icon size={14} />
            </div>
            <span className={`text-[10px] font-semibold uppercase tracking-widest transition-all duration-300 text-white/70 group-hover:text-white`}>
              {d.year}
            </span>
          </div>
        );
      })}
    </div>
  );
};

const AnalyticsCharts = ({ statsData, efficiencyData }) => {
  return (
    <div className="w-full font-graphik py-12 bg-[#F8FAFC]">
      <div className="max-w-6xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 gap-12">
           {/* Left Card: Statistics */}
           <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="flex flex-col bg-transparent md:bg-white p-0 md:p-2 rounded-none md:rounded-[3rem] border-none md:border border-slate-100 shadow-none md:shadow-2xl">
              <div className="p-6 md:p-10 flex flex-col h-full">
                <div className="flex items-start justify-between mb-8">
                   <div>
                      <h2 className="text-2xl md:text-3xl font-bold text-[#224292] tracking-tighter leading-none">Placement <span className="text-[#ffc107]">Statistics</span></h2>
                   </div>
                </div>

                {/* Statistics Highlights */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
                   {[
                     { label: "Consistent Growth", sub: "Year over Year", icon: TrendingUp, color: "#224292" },
                     { label: "Max Package", sub: "4.05 LPA", icon: Star, color: "#ffc107" },
                     { label: "Strong Placement Rise", sub: "2021 onwards", icon: Award, color: "#224292" },
                     { label: "Industry Aligned", sub: "Career Ready", icon: Zap, color: "#ffc107" }
                   ].map((item, i) => (
                     <div key={i} className="flex flex-col gap-2 group">
                        <div className="w-8 h-8 flex items-center justify-center transition-transform duration-500" style={{ color: item.color }}>
                          <item.icon size={18} />
                        </div>
                        <div>
                          <p className="text-[11px] font-bold text-[#224292] leading-tight mb-0.5">{item.label}</p>
                          <p className="text-[10px] font-medium text-[#64779F] tracking-tight">{item.sub}</p>
                        </div>
                     </div>
                   ))}
                </div>

                <div className="flex-1 min-h-[300px] pb-6">
                   <SleekTrendChart data={statsData} />
                </div>
              </div>
           </motion.div>

           {/* Right Card: Efficiency */}
           <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="flex flex-col bg-[#224292] p-0 md:p-2 rounded-none md:rounded-[3rem] shadow-none md:shadow-2xl shadow-[#224292]/30 overflow-hidden relative text-white">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,193,7,0.15),transparent)]" />
              <div className="p-6 md:p-10 flex flex-col h-full relative z-10">
                <div className="flex items-start justify-between mb-8">
                   <div>
                      <h2 className="text-2xl md:text-3xl font-bold text-white tracking-tighter leading-none">Placement <span className="text-[#ffc107]">Efficiency</span></h2>
                   </div>
                    <div className="flex gap-4 pt-2">
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full border border-white/50" />
                        <span className="text-[9px] font-semibold text-white/50 uppercase tracking-widest">OPTED</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full bg-[#ffc107]" />
                        <span className="text-[9px] font-semibold text-white/50 uppercase tracking-widest">PLACED</span>
                      </div>
                    </div>
                </div>
                
                <p className="text-white font-medium text-sm mb-10 max-w-md leading-relaxed">
                   A steady rise in student participation and successful placements over the years.
                </p>

                <div className="flex-1 min-h-[300px] pb-6 mb-10">
                   <EliteEfficiencyChart data={efficiencyData} />
                </div>

                {/* Footer Section */}
                <div className="mt-auto border-t border-white/20 pt-8 flex items-center justify-between">
                   <div className="flex items-center gap-6 group">
                      <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center text-[#224292] shadow-[0_20px_50px_rgba(255,255,255,0.2)] group-hover:scale-110 transition-transform duration-700">
                        <TrendingUp size={32} />
                      </div>
                      <div>
                        <h4 className="text-xl font-black text-white leading-tight tracking-tighter uppercase">Growing Engagement.<br/><span className="text-[#ffc107]">Stronger Outcomes.</span></h4>
                      </div>
                   </div>
                   <div className="w-px h-12 bg-white/20 hidden xl:block" />
                   <p className="text-xs font-black text-white/70 max-w-[150px] leading-tight hidden xl:block uppercase tracking-tight">
                     More students opting in, more achieving success.
                   </p>
                </div>
              </div>
           </motion.div>
        </div>
      </div>
    </div>
  )
}

export default AnalyticsCharts
