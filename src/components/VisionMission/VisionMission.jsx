import React from 'react'
import { motion } from 'framer-motion'
import { Eye, Target, Sparkles, Heart, ShieldCheck } from 'lucide-react'

const ValueCard = ({ title, content, icon: Icon, idx }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.95 }}
    whileInView={{ opacity: 1, scale: 1 }}
    viewport={{ once: true }}
    transition={{ delay: idx * 0.1, duration: 0.6 }}
    className="relative group bg-white pt-8 pb-10 px-10 flex flex-col items-center text-center lg:items-start lg:text-left transition-all duration-500 rounded-xl h-full border border-slate-100 shadow-[0_10px_40px_rgba(0,0,0,0.08)] hover:shadow-[0_30px_70px_rgba(0,0,0,0.15)] overflow-hidden"
  >
    {/* Top Right Folded Corner Effect */}
    <div className="absolute top-0 right-0 w-0 h-0 border-t-[30px] border-t-[#ffc107]/20 border-l-[30px] border-l-transparent group-hover:border-t-[#ffc107] transition-all duration-500" />
    
    {/* New Geometric Accent - Golden "Status" Notch instead of Blue Line */}
    <div className="absolute top-10 left-0 w-1.5 h-12 bg-gradient-to-b from-[#D4AF37] to-[#FFD700] rounded-r-full shadow-[0_0_10px_rgba(212,175,55,0.4)] group-hover:h-20 transition-all duration-500" />
    
    {/* Side "Wings" - Enhanced presence */}
    <div className="absolute top-[30%] bottom-[30%] left-0 w-6 bg-[#ffc107] opacity-[0.03] group-hover:opacity-[0.08] transition-all duration-500 pointer-events-none" 
         style={{ clipPath: 'polygon(0 0, 100% 50%, 0 100%)' }} />
    <div className="absolute top-[30%] bottom-[30%] right-0 w-6 bg-[#ffc107] opacity-[0.03] group-hover:opacity-[0.08] transition-all duration-500 pointer-events-none" 
         style={{ clipPath: 'polygon(100% 0, 0 50%, 100% 100%)' }} />

    {/* Background Decorative Lines */}
    <div className="absolute inset-0 opacity-[0.015] pointer-events-none" 
         style={{ backgroundImage: 'repeating-linear-gradient(90deg, #224292 0, #224292 1px, transparent 0, transparent 40px)' }} />

    {/* Content */}
    <div className="relative z-10 w-full flex flex-col">
      {/* Icon Box - Reduced Spacing to decrease height */}
      <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#224292] to-[#224292] text-[#224292] flex items-center justify-center mb-6 shadow-lg shadow-[#224292]/20 border-4 border-white group-hover:border-[#ffc107]/50 transition-all duration-500 mx-auto lg:mx-0">
         <Icon size={26} />
      </div>
      
      <h3 className="text-xl lg:text-2xl font-graphik font-bold text-[#224292] tracking-normal mb-3">
        {title}
      </h3>
      
      {/* Metallic Gold Divider */}
      <div className="h-[2px] w-12 bg-gradient-to-r from-[#D4AF37] via-[#FFD700] to-transparent mb-6 rounded-full group-hover:w-24 transition-all duration-1000 shadow-[0_0_8px_rgba(212,175,55,0.3)]" />
      
      <p className="text-[#444444] font-medium text-[14px] lg:text-[15px] leading-[24px] lg:leading-[28px] text-justify lg:text-left">
        {content}
      </p>
    </div>

    {/* Metallic Shine Animation */}
    <div className="absolute -inset-[100%] bg-gradient-to-r from-transparent via-white/40 to-transparent opacity-0 group-hover:opacity-100 transform rotate-[35deg] pointer-events-none animate-[shine_2s_infinite]" />
    
    <style dangerouslySetInnerHTML={{ __html: `
      @keyframes shine {
        0% { transform: translate(-100%, -100%) rotate(35deg); }
        100% { transform: translate(100%, 100%) rotate(35deg); }
      }
    `}} />
  </motion.div>
)




const VisionMission = ({ hideHeader = false }) => {
  const valuesData = [
    {
      title: "Our Vision",
      icon: Eye,
      content: "To be a world class institution imparting value-based education to aspiring youth and shaping them into disciplined world class professionals."
    },
    {
      title: "Our Mission",
      icon: Target,
      content: "To promote academic growth by offering state-of-the-art undergraduate, postgraduate and doctoral programs."
    },
    {
      title: "Our Promise",
      icon: Sparkles,
      content: "100% Placement | Ethics & Value Based Education."
    },
    {
      title: "Our Values",
      icon: Heart,
      content: "To pursue global standards of excellence in all our endeavors."
    },
    {
      title: "Our Commitment",
      icon: ShieldCheck,
      content: "World Class Education | Culture of Innovation & Creativity | Degree On Time."
    }
  ]

  return (
    <div id="values" className="relative bg-white pt-2 md:pt-4 pb-4 md:pb-6 border-t border-slate-100 mt-4 md:mt-6">
      
      {/* Background Graphic Decoration - Removed to ensure pure white experience */}
      <section className="relative px-4 lg:px-12 z-10 w-full max-w-[1600px] mx-auto">
        
        {/* Header Section - Sub Heading Style */}
        {!hideHeader && (
          <div className="text-center mb-10 lg:mb-14 px-4 overflow-hidden">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex flex-col items-center"
            >
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-graphik font-semibold text-[#224292] mb-4 tracking-tighter leading-tight break-words">
                Our Institutional <span className="text-[#ffc107]">Values</span>
              </h2>
            </motion.div>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-[#333333] text-[14px] sm:text-[15px] leading-relaxed font-normal max-w-2xl mx-auto"
            >
              The core principles and aspirations that drive our commitment to academic excellence, innovative research, and student success.
            </motion.p>
          </div>
        )}

        {/* ─── NEW DIAMOND ZIG-ZAG INFOGRAPHIC ─── */}
        <div className="relative w-full mx-auto px-4 py-4 lg:py-8">
          <div className="flex flex-wrap lg:flex-nowrap justify-center gap-28 lg:gap-16 relative z-10 px-4">
            {valuesData.map((val, i) => {
              const isEven = i % 2 !== 0; // 0, 2, 4 are top | 1, 3 are bottom
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: isEven ? 50 : -50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.8 }}
                  className={`relative flex-shrink-0 w-full lg:w-48 xl:w-56 max-w-[280px] flex flex-col items-center pt-7 ${isEven ? 'lg:mt-16' : 'lg:mb-16'}`}
                >
                  {/* Connecting Line - Only on Large Screens */}
                  {i < valuesData.length - 1 && (
                    <div className={`hidden lg:block absolute top-1/2 left-full w-full h-[2px] bg-[#ffc107]/30 z-0 origin-left ${isEven ? '-rotate-[30deg] translate-y-[-100%] translate-x-[-10%]' : 'rotate-[30deg] translate-y-[100%] translate-x-[-10%]'}`} style={{ width: 'calc(100% + 4rem)' }} />
                  )}

                  {/* Floating Number Badge – outside overflow container so it's always visible */}
                  <div
                    className="absolute top-0 left-1/2 -translate-x-1/2 w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center font-graphik font-bold text-white text-[10px] sm:text-sm z-30 shadow-md"
                    style={{ backgroundColor: i % 2 === 0 ? '#224292' : '#ffc107' }}
                  >
                    {String(i + 1).padStart(2, '0')}
                  </div>

                  {/* The Diamond Container – overflow-hidden keeps shape uniform */}
                  <div className="relative bg-white aspect-square w-56 sm:w-56 lg:w-48 xl:w-56 rounded-[2rem] border-2 border-[#ffc107] transform rotate-45 flex items-center justify-center group transition-all duration-500 mx-auto shadow-sm z-10 overflow-hidden">
                    
                    {/* Stylish Inner Border Line */}
                    <div className="absolute inset-2 border border-dashed border-[#224292]/10 rounded-[1.5rem] group-hover:border-[#ffc107]/20 transition-colors duration-500 pointer-events-none" />
                    
                    {/* Corner Accent Detail */}
                    <div className="absolute top-0 right-0 w-8 h-8 bg-gradient-to-br from-[#ffc107]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    
                    {/* Background Shine */}
                    <div className="absolute inset-0 bg-gradient-to-br from-white via-[#224292]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                    
                    {/* Inner content – wider width and no line-clamp to ensure full text visibility */}
                    <div className="transform -rotate-45 w-[82%] text-center flex flex-col items-center gap-1 px-1">
                       <h3 className="text-[#224292] font-graphik font-bold text-[13px] sm:text-[14px] tracking-wide leading-tight">
                         {val.title}
                       </h3>
                       <p className="text-black text-[10px] sm:text-[11px] font-semibold leading-snug">
                         {val.content}
                       </p>
                       <val.icon size={18} className="text-[#224292] mt-1 shrink-0" />
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
        
        {/* Centering the last two cards on desktop if needed, or just let them wrap */}

      </section>
    </div>
  )
}

export default VisionMission
