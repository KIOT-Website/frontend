import React, { useRef } from 'react'
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'
import { 
  Trophy, TrendingUp, Briefcase, GraduationCap, 
  Calendar, Users, UserCheck, Landmark, ArrowUpRight
} from 'lucide-react'

const statsData = [
  { text: "Within Top 50 Position In Admission", sub: "TNEA 2025", icon: Trophy, accent: "#18357a", metric: "50", unit: "th", size: "small" },
  { text: "95% Placements In every Year", sub: "Strategic Growth", icon: TrendingUp, accent: "#ffc107", metric: "95", unit: "%", size: "large" },
  { text: "150+ Companies for placements", sub: "Global Partners", icon: Briefcase, accent: "#18357a", metric: "150", unit: "+", size: "small" },
  { text: "Career Development Training", sub: "1200 Hours Skill-up", icon: GraduationCap, accent: "#ffc107", metric: "1.2", unit: "k", size: "medium" },
  { text: "Academic Excellence", sub: "Since 2009", icon: Calendar, accent: "#18357a", metric: "17", unit: "+", size: "medium" },
  { text: "Dedicated Faculty", sub: "Ratio 1:15", icon: Users, accent: "#ffc107", metric: "250", unit: "+", size: "medium" },
  { text: "Alumni across the globe", sub: "Global Network", icon: UserCheck, accent: "#18357a", metric: "8000", unit: "+", size: "large" },
  { text: "Top 10% Colleges in TN", sub: "Elite Standing", icon: Landmark, accent: "#ffc107", metric: "10", unit: "%", size: "small" }
];

const StatCard = ({ item, index }) => {
  const isLarge = item.size === 'large';
  const cardRef = useRef(null);
  
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  
  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);
  
  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["8deg", "-8deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-8deg", "8deg"]);

  const spotlightX = useSpring(useMotionValue(0));
  const spotlightY = useSpring(useMotionValue(0));

  const handleMouseMove = (e) => {
    const rect = cardRef.current.getBoundingClientRect();
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    x.set((mouseX / rect.width) - 0.5);
    y.set((mouseY / rect.height) - 0.5);
    spotlightX.set(mouseX);
    spotlightY.set(mouseY);
  };

  const handleMouseLeave = () => {
    x.set(0); y.set(0);
  };

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: index * 0.05, ease: [0.16, 1, 0.3, 1] }}
      viewport={{ once: true }}
      className={`relative group ${isLarge ? 'md:col-span-2' : 'col-span-1'}`}
      style={{ perspective: "1200px" }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <motion.div
        style={{ rotateX, rotateY }}
        className="relative h-full w-full rounded-[2rem] p-[1.5px] overflow-hidden transition-all duration-700 bg-white shadow-[0_20px_50px_rgba(24,53,122,0.06)]"
      >
        {/* Prismatic Border */}
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"
             style={{ background: `conic-gradient(from 0deg at 50% 50%, #18357a 0deg, #ffc107 180deg, #18357a 360deg)`, animation: 'spin 3s linear infinite' }} />

        <div className={`relative h-full w-full rounded-[1.9rem] p-6 lg:p-8 flex flex-col z-10 
          ${item.accent === '#18357a' ? 'bg-gradient-to-br from-[#18357a] to-[#224292]' : 'bg-white'}
        `}>
          {/* Spotlight */}
          <motion.div className="absolute inset-0 pointer-events-none transition-opacity duration-300 opacity-0 group-hover:opacity-100"
            style={{ background: useTransform([spotlightX, spotlightY], ([lx, ly]) => `radial-gradient(400px circle at ${lx}px ${ly}px, ${item.accent === '#18357a' ? 'rgba(255,193,7,0.12)' : 'rgba(24,53,122,0.06)'}, transparent 40%)`) }} />

          {/* Header */}
          <div className="flex justify-between items-start mb-10">
            <div className={`w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-500 group-hover:scale-110 shadow-xl
              ${item.accent === '#18357a' ? 'bg-white/10 text-[#ffc107]' : 'bg-[#18357a]/5 text-[#18357a]'}
            `}>
              <item.icon size={22} strokeWidth={2} />
            </div>
            <div className={`w-8 h-8 rounded-full border flex items-center justify-center transition-all opacity-20 group-hover:opacity-100
              ${item.accent === '#18357a' ? 'border-white text-white' : 'border-[#18357a] text-[#18357a]'}
            `}>
               <ArrowUpRight size={14} />
            </div>
          </div>

          {/* Metric */}
          <div className="flex flex-col mb-2">
            <div className="flex items-baseline gap-1.5">
              <span className={`font-display font-black tracking-tighter leading-none transition-all duration-500
                ${isLarge ? 'text-5xl md:text-7xl' : 'text-4xl md:text-5xl'}
                ${item.accent === '#18357a' ? 'text-white' : 'text-[#18357a]'}
              `}>
                {item.metric}
              </span>
              <span className="font-display font-black text-lg md:text-xl text-[#ffc107] uppercase">
                {item.unit}
              </span>
            </div>
            <div className={`mt-4 inline-flex self-start px-2 py-0.5 rounded-full text-[8px] font-black tracking-widest uppercase
              ${item.accent === '#18357a' ? 'bg-white/10 text-[#ffc107]' : 'bg-[#18357a]/5 text-[#18357a]/50'}
            `}>
              {item.sub}
            </div>
          </div>

          <p className={`mt-auto text-sm md:text-base font-bold leading-tight transition-all duration-300
            ${item.accent === '#18357a' ? 'text-white/80 group-hover:text-white' : 'text-[#18357a]/70 group-hover:text-[#18357a]'}
          `}>
            {item.text}
          </p>
        </div>

        <div className={`absolute -bottom-6 -right-6 w-24 h-24 opacity-[0.03] group-hover:opacity-[0.06] transition-all duration-700 pointer-events-none rotate-[-15deg] group-hover:rotate-0
          ${item.accent === '#18357a' ? 'text-white' : 'text-[#18357a]'}
        `}>
           <item.icon className="w-full h-full" />
        </div>
      </motion.div>
    </motion.div>
  );
};

const GlobalStats = () => {
  return (
    <section className="relative py-16 px-4 md:px-8 bg-[#FCFDFD]">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {statsData.map((item, index) => (
            <StatCard key={index} item={item} index={index} />
          ))}
        </div>
      </div>
      <style>{`@keyframes spin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }`}</style>
    </section>
  )
}

export default GlobalStats


