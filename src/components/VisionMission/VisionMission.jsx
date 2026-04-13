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
         style={{ backgroundImage: 'repeating-linear-gradient(90deg, #18357a 0, #18357a 1px, transparent 0, transparent 40px)' }} />

    {/* Content */}
    <div className="relative z-10 w-full flex flex-col">
      {/* Icon Box - Reduced Spacing to decrease height */}
      <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#18357a] to-[#224292] text-[#ffc107] flex items-center justify-center mb-6 shadow-lg shadow-[#18357a]/20 border-4 border-white group-hover:border-[#ffc107]/50 transition-all duration-500 mx-auto lg:mx-0">
         <Icon size={26} />
      </div>
      
      <h3 className="text-xl lg:text-2xl font-black text-[#18357a] uppercase tracking-normal mb-3">
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




const VisionMission = () => {
  const valuesData = [
    {
      title: "Our Vision",
      icon: Eye,
      content: "To be a world class institution to impart value and need based professional education to the aspiring youth and carving them into disciplined world class professionals who have quest for excellence, achievement orientation and social responsibilities."
    },
    {
      title: "Our Mission",
      icon: Target,
      content: "To promote academic growth by offering state-of-the-art undergraduate, postgraduate and doctoral programs and to generate new knowledge by engaging in cutting-edge research."
    },
    {
      title: "Our Promise",
      icon: Sparkles,
      content: "100% Placement | Ethics & Value Based Education"
    },
    {
      title: "Our Values",
      icon: Heart,
      content: "To pursue global standards of excellence in all our endeavors namely teaching, research, consultancy, continuing education and support functions."
    },
    {
      title: "Our Commitment",
      icon: ShieldCheck,
      content: "World Class Education | Culture of Innovation & Creativity | Degree On Time 100% Placement | 360′ Personality Development | Ethics & Values Based Education"
    }
  ]

  return (
    <div id="values" className="relative bg-[#FAFBFF] pt-16 pb-24 min-h-screen overflow-x-hidden border-t border-slate-100">
      
      {/* Background Graphic Decoration */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-to-bl from-[#18357a]/5 to-transparent rounded-bl-full pointer-events-none opacity-50" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-gradient-to-tr from-[#ffc107]/5 to-transparent rounded-tr-full pointer-events-none opacity-50" />

      <section className="relative px-4 lg:px-12 z-10 w-full max-w-[1600px] mx-auto overflow-x-hidden">
        
        {/* Header Section - Refined to match About Us style */}
        <div className="text-center mb-10 lg:mb-12 px-4 overflow-hidden">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex flex-col items-center"
          >
            <div className="inline-flex items-center gap-2.5 px-6 py-2.5 rounded-full bg-white border border-[#D5E2F4]/80 shadow-sm mb-8 hover:shadow-md transition-shadow cursor-default">
               <span className="relative flex h-3.5 w-3.5">
                 <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#ffc107] opacity-60"></span>
                 <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-[#e0a800]"></span>
               </span>
               <span className="text-sm font-black text-[#18357a] uppercase tracking-[0.15em]">Institutional Philosophy</span>
            </div>
            <h1 className="text-3xl md:text-5xl lg:text-[3.5rem] font-black text-[#18357a] mb-8 tracking-tight leading-[1.1] break-words">
              Our Institutional <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#18357a] via-[#224292] to-[#ffc107] inline-block uppercase">Values</span>
            </h1>
          </motion.div>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-[#333333] text-[15px] sm:text-[16px] leading-[26px] sm:leading-[28.8px] font-normal max-w-3xl mx-auto"
          >
            The core principles and aspirations that drive our commitment to academic excellence, innovative research, and student success.
          </motion.p>
        </div>

        {/* ─── NEW DIAMOND ZIG-ZAG INFOGRAPHIC ─── */}
        <div className="relative w-full mx-auto px-4 py-8 lg:py-16">
          {/* Connecting Dashed Lines Background */}
          <div className="absolute top-1/2 left-0 right-0 h-[2px] border-t-2 border-dashed border-slate-200 -translate-y-1/2 z-0 hidden lg:block mx-20" />
          
          <div className="flex flex-wrap lg:flex-nowrap justify-center gap-16 lg:gap-4 relative z-10 px-4">
            {valuesData.map((val, i) => {
              const isEven = i % 2 !== 0; // 0, 2, 4 are top | 1, 3 are bottom
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: isEven ? 50 : -50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.8 }}
                  className={`relative flex-shrink-0 w-full lg:w-48 xl:w-56 max-w-[240px] flex justify-center ${isEven ? 'lg:mt-32' : 'lg:mb-32'}`}
                >
                  {/* The Diamond Container */}
                  <div className="relative bg-white aspect-square w-48 sm:w-52 lg:w-48 xl:w-56 rounded-[2rem] border border-slate-100 shadow-[0_15px_40px_rgba(0,0,0,0.06)] transform rotate-45 flex items-center justify-center group hover:shadow-[0_25px_60px_rgba(24,53,122,0.12)] transition-all duration-500 mx-auto">
                    {/* Background Shine */}
                    <div className="absolute inset-0 bg-gradient-to-br from-white via-[#18357a]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                    
                    {/* Inner content (Counter-rotated back to normal) */}
                    <div className="transform -rotate-45 p-6 text-center flex flex-col items-center">
                       {/* Floating Number Circle */}
                       <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-[85%] w-10 h-10 sm:w-12 sm:h-12 rounded-full shadow-lg flex items-center justify-center font-black text-white text-[10px] sm:text-sm z-20"
                            style={{ backgroundColor: i % 2 === 0 ? '#18357a' : '#ffc107' }}>
                         {String(i + 1).padStart(2, '0')}
                       </div>

                       <h3 className="text-[#18357a] font-black text-[12px] sm:text-[14px] uppercase tracking-wide mb-3 leading-tight px-2">
                         {val.title}
                       </h3>
                       
                       <p className="text-[#64779F] text-[10px] sm:text-[11px] font-medium leading-relaxed mb-4">
                         {val.content.length > 80 ? val.content.substring(0, 80) + "..." : val.content}
                       </p>

                       {/* Icon at Bottom */}
                       <div className="mt-auto pt-2">
                         <val.icon size={20} className={i % 2 === 0 ? 'text-[#ffc107]' : 'text-[#18357a]'} />
                       </div>
                    </div>
                  </div>

                  {/* Connecting Dots for Mobile/Tablet */}
                  <div className="lg:hidden w-1 h-12 bg-dashed border-l border-dashed border-slate-300 mx-auto my-4" />
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
