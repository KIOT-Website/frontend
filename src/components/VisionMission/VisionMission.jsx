import React from 'react'
import { motion } from 'framer-motion'
import { Eye, Target, CheckCircle2, Globe, Zap } from 'lucide-react'

const VisionMission = () => {
  const missionPoints = [
    "To promote academic growth by offering state-of-the-art undergraduate, postgraduate and doctoral programmes and to generate new knowledge by engaging in cutting-edge research",
    "To nurture talent, entrepreneurship, all-round personality and value system among the students and to foster global competitiveness among students",
    "To pursue global standards of excellence in all our endeavours namely teaching, research, consultancy, continuing education and support functions",
    "To undertake collaborative projects which offer opportunities for long-term interaction with academia and industry"
  ];

  const visionPoints = [
    "To be a world class institution to impart value and need based professional education to the aspiring youth",
    "Carving them into disciplined world class professionals who have quest for excellence, achievement orientation and social responsibilities"
  ];

  return (
    <div className="relative bg-[#FCFDFD] pt-12 pb-24 min-h-screen font-['Inter']">
      
      {/* Background Graphic Decoration */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-to-bl from-[#18357a]/5 to-transparent rounded-bl-full pointer-events-none opacity-50" />
      <div className="absolute bottom-1/4 left-0 w-[600px] h-[600px] bg-gradient-to-tr from-[#ffc107]/5 to-transparent rounded-tr-full pointer-events-none opacity-50" />

      <section className="relative px-6 sm:px-10 lg:px-20 z-10 w-full max-w-5xl mx-auto">
        
        {/* Header Section */}
        <div className="text-center mb-16">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="inline-flex items-center gap-2 px-6 py-2 bg-white border border-slate-100 shadow-sm mb-6 rounded-full">
               <span className="w-2 h-2 rounded-full bg-[#ffc107]" />
               <span className="text-[10px] font-black text-[#18357a] uppercase tracking-widest">Since 2009</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-black text-[#18357a] mb-6 tracking-tight uppercase leading-[0.9]">
              Vision & <span className="text-[#ffc107]">Mission</span>
            </h1>
          </motion.div>
        </div>

        {/* MODERN GRID LAYOUT (Side by Side) */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-10">
          
          {/* VISION CARD - Elegant White */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="group bg-white rounded-[2.5rem] p-8 lg:p-10 border border-slate-100 shadow-[0_20px_50px_rgba(34,66,146,0.04)] hover:shadow-[0_40px_80px_rgba(34,66,146,0.08)] transition-all duration-500 relative overflow-hidden flex flex-col h-full"
          >
             {/* Decorative Background Icon */}
             <div className="absolute -top-10 -right-10 text-slate-50 opacity-50 transition-transform duration-700 group-hover:scale-110 group-hover:rotate-12 pointer-events-none">
                <Eye size={200} strokeWidth={1} />
             </div>
             
             <div className="relative z-10 flex flex-col h-full">
                <div className="flex items-center gap-4 mb-10">
                   <div className="w-14 h-14 rounded-2xl bg-[#18357a] text-[#ffc107] flex items-center justify-center shadow-xl shadow-[#18357a]/20 border border-white/10 group-hover:scale-110 transition-transform duration-500">
                      <Eye size={28} />
                   </div>
                   <div>
                      <h2 className="text-2xl font-black text-[#18357a] tracking-tight uppercase leading-none">Vision</h2>
                      <p className="text-[9px] font-black text-[#ffc107] uppercase tracking-[3px] mt-1.5 opacity-80">Institutional Future</p>
                   </div>
                </div>

                <div className="space-y-6 flex-1">
                   {visionPoints.map((point, idx) => (
                     <div key={idx} className="flex gap-4 items-start group/item">
                        <div className="mt-1 w-6 h-6 rounded-lg bg-slate-50 flex items-center justify-center shrink-0 border border-slate-100 group-hover/item:bg-[#ffc107] transition-colors duration-300">
                           <CheckCircle2 size={12} className="text-[#18357a]" />
                        </div>
                        <p className="text-[#18357a] text-[14px] leading-relaxed opacity-80 group-hover/item:opacity-100 transition-opacity">{point}</p>
                     </div>
                   ))}
                </div>
                
                <div className="mt-10 pt-8 border-t border-slate-50">
                    <div className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-[#ffc107] animate-pulse" />
                        <span className="text-[10px] font-black text-[#64779F] uppercase tracking-widest">Global Academic Standard</span>
                    </div>
                </div>
             </div>
          </motion.div>

          {/* MISSION CARD - Professional Navy */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="group bg-[#18357a] rounded-[2.5rem] p-8 lg:p-10 shadow-[0_40px_100px_rgba(24,53,122,0.2)] text-white relative overflow-hidden flex flex-col h-full"
          >
             {/* Decorative Background Icon */}
             <div className="absolute -top-10 -right-10 text-white/[0.03] transition-transform duration-700 group-hover:scale-110 group-hover:-rotate-12 pointer-events-none">
                <Target size={240} strokeWidth={1} />
             </div>
             
             <div className="relative z-10 flex flex-col h-full">
                <div className="flex items-center gap-4 mb-10">
                   <div className="w-14 h-14 rounded-2xl bg-[#ffc107] text-[#18357a] flex items-center justify-center shadow-xl shadow-[#ffc107]/20 border border-white/20 group-hover:scale-110 transition-transform duration-500">
                      <Target size={28} />
                   </div>
                   <div>
                      <h2 className="text-2xl font-black text-white tracking-tight uppercase leading-none">Mission</h2>
                      <p className="text-[9px] font-black text-[#ffc107] uppercase tracking-[3px] mt-1.5 opacity-80">Execution Pathway</p>
                   </div>
                </div>

                <div className="space-y-5 flex-1">
                   {missionPoints.map((point, idx) => (
                     <div key={idx} className="flex gap-4 items-start group/item">
                        <div className="mt-1 w-6 h-6 rounded-lg bg-white/10 flex items-center justify-center shrink-0 border border-white/5 group-hover/item:bg-[#ffc107] transition-colors duration-300">
                           <CheckCircle2 size={12} className="text-white group-hover/item:text-[#18357a]" />
                        </div>
                        <p className="text-white/80 font-medium text-[13px] leading-relaxed group-hover/item:text-white transition-colors">{point}</p>
                     </div>
                   ))}
                </div>

                <div className="mt-10 pt-8 border-t border-white/5">
                    <div className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-[#ffc107] animate-pulse" />
                        <span className="text-[10px] font-black text-white/40 uppercase tracking-widest">Innovation Powered Education</span>
                    </div>
                </div>
             </div>
          </motion.div>

        </div>

        {/* STATIC HIGHLIGHTS (Centered) */}
        <div className="mt-24 pt-20 border-t border-slate-100 flex flex-col items-center">
           <div className="grid md:grid-cols-3 gap-12 w-full">
              {[
                { title: 'Global Standards', desc: 'Implementing international benchmarks in pedagogy.', icon: <Globe size={28}/> },
                { title: 'Innovation Culture', desc: 'Fostering creativity and technical expertise.', icon: <Zap size={28}/> },
                { title: 'Ethical Integrity', desc: 'Building strong moral and social values.', icon: <CheckCircle2 size={28}/> }
              ].map((item, i) => (
                <div key={i} className="flex flex-col items-center text-center gap-6">
                   <div className="w-16 h-16 bg-slate-50 text-[#18357a] flex items-center justify-center rounded-2xl border border-slate-100 shadow-sm">{item.icon}</div>
                   <h4 className="text-lg font-black text-[#18357a] uppercase tracking-tighter">{item.title}</h4>
                   <p className="text-[#64779F] font-bold text-sm leading-relaxed max-w-[240px]">{item.desc}</p>
                </div>
              ))}
           </div>
        </div>

      </section>
    </div>
  )
}

export default VisionMission
