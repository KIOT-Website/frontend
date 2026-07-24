import React, { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Building2, TrendingUp, Users, Award } from 'lucide-react'

// Dynamically import all images from the companies folder
const imageModules = import.meta.glob('../../assets/placements/companies/*.{png,jpg,jpeg,svg,webp}', { eager: true });

const allPartners = Object.entries(imageModules)
  .filter(([path]) => !path.includes('design.webp'))
  .map(([path, module]) => {
    const fileName = path.split('/').pop().split('.')[0];
    const cleanName = fileName.replace(/^\d+-/, '').replace(/_/g, ' ').replace(/-/g, ' ');
    return { name: cleanName, logo: module.default };
  });

const stats = [
  { icon: Building2,  value: '150+',  label: 'Recruitment Partners' },
  { icon: Users,      value: '679',   label: 'Campus Offers' },
  { icon: TrendingUp, value: '44%',   label: 'IT Sector Placements' },
  { icon: Award,      value: '40%',   label: 'Core Sector Placements' },
];

/* ---------- individual logo card ---------- */
const LogoCard = ({ item }) => (
  <div className="group relative shrink-0 mx-2 sm:mx-3">
    {/* glow ring on hover */}
    <div className="absolute -inset-px rounded-2xl bg-gradient-to-br from-[#ffc107]/0 to-[#224292]/0
                    group-hover:from-[#ffc107]/40 group-hover:to-white/20
                    transition-all duration-500 blur-sm" />
    <div className="relative h-20 w-36 sm:h-24 sm:w-44 rounded-2xl bg-white
                    border border-slate-100 group-hover:border-[#ffc107]/30
                    flex items-center justify-center p-4 sm:p-5
                    transition-all duration-500 transform group-hover:-translate-y-1.5 group-hover:scale-[1.04]">
      {item.logo ? (
        <img
          src={item.logo}
          alt={item.name}
          className="max-h-10 sm:max-h-11 w-full object-contain grayscale-[20%] group-hover:grayscale-0
                     transition-all duration-500 transform group-hover:scale-105"
        />
      ) : (
        <span className="text-[#224292] font-black text-[10px] sm:text-xs tracking-tight text-center leading-tight">
          {item.name}
        </span>
      )}
    </div>
  </div>
);

/* ---------- one infinite marquee row ---------- */
const MarqueeRow = ({ items, reverse = false, speed = 40 }) => {
  const cls = reverse ? 'ic-marquee-rev' : 'ic-marquee';
  const style = { '--ic-dur': `${speed}s` };
  return (
    <div className="flex overflow-hidden py-1 select-none">
      <div className={`flex flex-nowrap ${cls} pause-on-hover`} style={style}>
        {[...Array(2)].map((_, i) => (
          <div key={i} className="flex flex-nowrap">
            {items.map((item, j) => <LogoCard key={j} item={item} />)}
          </div>
        ))}
      </div>
    </div>
  );
};

/* ---------- animated stat pill ---------- */
const StatPill = ({ icon: Icon, value, label, delay }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30, scale: 0.9 }}
      animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
      transition={{ delay, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      className="group relative flex flex-col items-center justify-center gap-2
                 bg-white/5 backdrop-blur-sm rounded-3xl px-4 py-5 sm:px-8 sm:py-6
                 border border-white/10 hover:border-[#ffc107]/30
                 shadow-[0_4px_24px_rgba(0,0,0,0.2)]
                 hover:shadow-[0_16px_48px_rgba(255,255,255,0.05)]
                 transition-all duration-500 hover:-translate-y-1.5 cursor-default w-full"
    >
      {/* corner glow */}
      <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-bl from-[#ffc107]/15 to-transparent rounded-tr-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-white/10 flex items-center justify-center text-[#ffc107] group-hover:bg-[#ffc107] group-hover:text-[#224292] transition-all duration-400">
        <Icon size={16} sm={18} strokeWidth={2} />
      </div>
      <div className="text-xl sm:text-2xl font-black text-white font-graphik leading-none tracking-tighter group-hover:text-[#ffc107] transition-colors duration-300">
        {value}
      </div>
      <div className="text-[9px] sm:text-[10px] font-bold text-white/60 uppercase tracking-widest text-center">{label}</div>
    </motion.div>
  );
};

/* ---------- main section ---------- */
const IndustryCollaboration = () => {
  const headerRef = useRef(null);
  const headerInView = useInView(headerRef, { once: true, margin: '-80px' });

  const chunk1 = allPartners.filter((_, i) => i % 5 === 0);
  const chunk2 = allPartners.filter((_, i) => i % 5 === 1);
  const chunk3 = allPartners.filter((_, i) => i % 5 === 2);
  const chunk4 = allPartners.filter((_, i) => i % 5 === 3);
  const chunk5 = allPartners.filter((_, i) => i % 5 === 4);

  return (
    <section id="industry-collaboration" className="relative overflow-hidden bg-[#224292] py-10 lg:py-12 text-white">

      {/* ── background layer ── */}
      <div className="pointer-events-none absolute inset-0">
        {/* soft radial blobs */}
        <div className="absolute -top-32 -right-32 w-[600px] h-[600px] bg-white/[0.02] rounded-full blur-[120px]" />
        <div className="absolute -bottom-32 -left-32 w-[500px] h-[500px] bg-[#ffc107]/[0.05] rounded-full blur-[100px]" />
        {/* dot grid */}
        <div className="absolute inset-0 bg-[radial-gradient(rgba(255,255,255,0.06)_1px,transparent_1px)] [background-size:28px_28px]" />
        {/* golden/white diagonal stripe */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-full bg-gradient-to-b from-transparent via-[#ffc107]/10 to-transparent" />
      </div>

      {/* Absolute Marquees on the left side of the section (Desktop only) */}
      <div className="hidden lg:flex absolute left-0 top-0 bottom-0 w-1/2 flex-col justify-between py-10 lg:py-12 select-none overflow-hidden pointer-events-auto z-20 mask-ic-desktop">
        <MarqueeRow items={chunk1} reverse={false} speed={25} />
        <MarqueeRow items={chunk2} reverse={true}  speed={30} />
        <MarqueeRow items={chunk3} reverse={false} speed={23} />
        <MarqueeRow items={chunk4} reverse={true}  speed={28} />
        <MarqueeRow items={chunk5} reverse={false} speed={26} />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-stretch">
          
          {/* LEFT SIDE: Placeholder on desktop, actual marquees on mobile */}
          <div className="order-2 lg:order-1 lg:h-full">
            <div className="lg:hidden flex flex-col gap-4 py-2 select-none max-w-full mask-ic-mobile">
              <MarqueeRow items={chunk1} reverse={false} speed={25} />
              <MarqueeRow items={chunk2} reverse={true}  speed={30} />
              <MarqueeRow items={chunk3} reverse={false} speed={23} />
              <MarqueeRow items={chunk4} reverse={true}  speed={28} />
              <MarqueeRow items={chunk5} reverse={false} speed={26} />
            </div>
          </div>

          {/* RIGHT SIDE: Headings and Stats */}
          <div ref={headerRef} className="flex flex-col items-center justify-center text-center order-1 lg:order-2 space-y-6 lg:pl-12">
            {/* animated eyebrow pill */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={headerInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6, ease: 'backOut' }}
              className="inline-flex items-center gap-2 px-5 py-2 rounded-full
                         bg-white/5 border border-white/10 self-center"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-[#ffc107] animate-pulse" />
              <span className="text-[10px] font-black uppercase tracking-[0.25em] text-[#ffc107]">
                Industry Partners
              </span>
              <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
            </motion.div>

            {/* main heading */}
            <motion.h2
              initial={{ opacity: 0, y: 24 }}
              animate={headerInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.1, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="text-3xl lg:text-4xl xl:text-5xl font-semibold text-white font-graphik leading-tight tracking-tight"
            >
              Industry Collaboration & <span className="text-[#ffc107]">Recruitment Partners</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={headerInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.25, duration: 0.7 }}
              className="text-sm text-slate-200/90 font-medium leading-relaxed max-w-xl"
            >
              Connecting our graduates with global engineering and business giants to secure premium placements.
            </motion.p>

            {/* stat pills arranged in 2x2 grid */}
            <div className="grid grid-cols-2 gap-4 w-full pt-2">
              {stats.map((s, i) => (
                <StatPill key={i} {...s} delay={0.35 + i * 0.1} />
              ))}
            </div>
          </div>
          
        </div>
      </div>

      {/* ── keyframes & helpers ── */}
      <style dangerouslySetInnerHTML={{ __html: `
        .mask-ic-mobile {
          mask-image: linear-gradient(to right, transparent 0%, black 12%, black 88%, transparent 100%);
          -webkit-mask-image: linear-gradient(to right, transparent 0%, black 12%, black 88%, transparent 100%);
        }
        .mask-ic-desktop {
          mask-image: linear-gradient(to right, transparent 0%, black 5%, black 70%, transparent 95%);
          -webkit-mask-image: linear-gradient(to right, transparent 0%, black 5%, black 70%, transparent 95%);
        }
        @keyframes ic-scroll   { from { transform: translateX(0); }    to { transform: translateX(-50%); } }
        @keyframes ic-scroll-r { from { transform: translateX(-50%); } to { transform: translateX(0);    } }

        .ic-marquee     { animation: ic-scroll   var(--ic-dur, 40s) linear infinite; }
        .ic-marquee-rev { animation: ic-scroll-r var(--ic-dur, 40s) linear infinite; }
        .pause-on-hover:hover { animation-play-state: paused; }
      `}} />
    </section>
  );
};

export default IndustryCollaboration;
