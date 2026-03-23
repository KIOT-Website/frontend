import React from 'react'
import { motion } from 'framer-motion'
import { Eye, Target, Award, ShieldCheck, CheckCircle, Zap } from 'lucide-react'

const VisionMission = () => {
  return (
    <div className="relative bg-[#FCFDFD] pt-32 pb-32 min-h-screen overflow-hidden">


      <section id="vision-mission" className="relative px-5 sm:px-10 lg:px-28 z-10 w-full max-w-[1600px] mx-auto">
        <div className="max-w-7xl mx-auto">
          
          {/* Header */}
          <div className="text-center mb-24">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              <div className="inline-flex items-center gap-2.5 px-6 py-2.5 rounded-full bg-white border border-[#D5E2F4]/80 shadow-sm mb-8 hover:shadow-md transition-shadow cursor-default">
                 <span className="relative flex h-3.5 w-3.5">
                   <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#ffc107] opacity-60"></span>
                   <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-[#e0a800]"></span>
                 </span>
                 <span className="text-sm font-black text-[#18357a] uppercase tracking-[0.15em]">Philosophy & Identity</span>
              </div>
              <h1 className="text-5xl md:text-6xl lg:text-[5rem] font-black text-[#18357a] mb-8 tracking-tighter leading-[1.05]">
                Institution <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#18357a] via-[#224292] to-[#ffc107] inline-block relative">Philosophy
                  <svg className="absolute w-full h-4 -bottom-1.5 left-0 text-[#ffc107]/30 scale-110" viewBox="0 0 100 20" preserveAspectRatio="none">
                    <path d="M0,15 Q50,0 100,15" stroke="currentColor" strokeWidth="6" strokeLinecap="round" fill="none" />
                  </svg>
                </span>
              </h1>
              <p className="text-[#64779F] text-xl lg:text-2xl max-w-3xl mx-auto font-medium leading-relaxed">
                The guiding principles that shape our vision, drive our mission, and define the core of KIOT's pursuit of excellence.
              </p>
            </motion.div>
          </div>

          {/* Split Cards: Vision & Mission */}
          <div className="grid md:grid-cols-2 gap-8 lg:gap-10 mb-8 lg:mb-10">
            
            {/* Vision Card */}
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6 }}
              whileHover={{ y: -10, scale: 1.01 }}
              className="group relative bg-white/70 backdrop-blur-xl rounded-[2.5rem] p-10 lg:p-14 border border-white/80 shadow-[0_20px_60px_rgba(34,66,146,0.06)] overflow-hidden transition-all duration-500"
            >
              <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-gradient-to-bl from-[#ffc107]/10 via-[#ffc107]/5 to-transparent rounded-bl-full -z-10 group-hover:scale-125 transition-transform duration-700 pointer-events-none"></div>
              
              <div className="mb-12">
                <div className="w-20 h-20 rounded-[1.5rem] bg-gradient-to-br from-white to-[#ffc107]/15 border border-[#ffc107]/20 flex items-center justify-center shadow-[0_10px_30px_rgba(255,193,7,0.15)] group-hover:shadow-[0_15px_40px_rgba(255,193,7,0.25)] group-hover:-translate-y-1 transition-all duration-300 relative">
                  <div className="absolute inset-0 bg-white rounded-[1.5rem] blur-md opacity-40"></div>
                  <Eye className="w-10 h-10 text-[#e0a800] relative z-10 group-hover:scale-110 transition-transform duration-300" />
                </div>
              </div>
              
              <h3 className="text-3xl font-black text-[#18357a] mb-6 tracking-tight group-hover:text-[#224292] transition-colors">Our Vision</h3>
              <p className="text-[#64779F] text-lg leading-relaxed font-semibold">
                To be a world class institution to impart value and need based professional education to the aspiring youth and carving them into disciplined world class professionals who have quest for excellence, achievement orientation and social responsibilities.
              </p>
            </motion.div>

            {/* Mission Card */}
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: 0.1 }}
              whileHover={{ y: -10, scale: 1.01 }}
              className="group relative bg-white/70 backdrop-blur-xl rounded-[2.5rem] p-10 lg:p-14 border border-white/80 shadow-[0_20px_60px_rgba(34,66,146,0.06)] overflow-hidden transition-all duration-500"
            >
              <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-gradient-to-bl from-[#18357a]/10 via-[#18357a]/5 to-transparent rounded-bl-full -z-10 group-hover:scale-125 transition-transform duration-700 pointer-events-none"></div>
              
              <div className="mb-12">
                <div className="w-20 h-20 rounded-[1.5rem] bg-gradient-to-br from-white to-[#18357a]/10 border border-[#18357a]/10 flex items-center justify-center shadow-[0_10px_30px_rgba(24,53,122,0.1)] group-hover:shadow-[0_15px_40px_rgba(24,53,122,0.15)] group-hover:-translate-y-1 transition-all duration-300 relative">
                  <div className="absolute inset-0 bg-white rounded-[1.5rem] blur-md opacity-40"></div>
                  <Target className="w-10 h-10 text-[#18357a] relative z-10 group-hover:scale-110 transition-transform duration-300" />
                </div>
              </div>
              
              <h3 className="text-3xl font-black text-[#18357a] mb-6 tracking-tight group-hover:text-[#224292] transition-colors">Our Mission</h3>
              <p className="text-[#64779F] text-lg leading-relaxed font-semibold">
                To promote academic growth by offering state-of-the-art undergraduate, postgraduate and doctoral programs and to generate new knowledge by engaging in cutting-edge research.
              </p>
            </motion.div>

          </div>

          {/* Split Cards: Commitment & Values */}
          <div className="grid md:grid-cols-[1.1fr_0.9fr] lg:grid-cols-[1.2fr_0.8fr] gap-8 lg:gap-10 mb-14">
            
            {/* Commitment Card */}
            <motion.div 
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.7 }}
              whileHover={{ y: -8 }}
              className="group relative rounded-[2.5rem] p-10 lg:p-14 shadow-[0_30px_70px_rgba(24,53,122,0.25)] overflow-hidden bg-[#122A63]"
            >
              {/* Premium Dark Gradient Background */}
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(34,66,146,0.9)_0%,rgba(18,42,99,1)_70%)] -z-20"></div>
              {/* Abstract Shape Overlay */}
              <div className="absolute top-0 right-0 w-full h-[200%] bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHdpZHRoPScxMDAlJyBoZWlnaHQ9JzEwMCUnPgo8cGF0aCBkPSdNNTAwLDBIMTBWMTAwSFYwWicgZmlsbD0nbm9uZScgc3Ryb2tlPSdyZ2JhKDI1NSwyNTUsMjU1LDAuMDMpJyBzdHJva2Utd2lkdGg9JzEnLz4KPC9zdmc+')] opacity-20 -z-10 group-hover:opacity-40 transition-opacity duration-1000 rotate-12 origin-top-right mix-blend-overlay"></div>
              
              <div className="flex flex-col sm:flex-row items-start gap-10 lg:gap-14 relative z-10 h-full">
                <div className="flex-shrink-0 w-24 h-24 lg:w-28 lg:h-28 rounded-3xl bg-white/10 backdrop-blur-xl border border-white/20 flex items-center justify-center shadow-[0_20px_40px_rgba(0,0,0,0.2)] group-hover:bg-white/15 transition-all duration-300">
                  <ShieldCheck className="w-12 h-12 lg:w-14 lg:h-14 text-[#ffc107] drop-shadow-lg" />
                </div>
                
                <div className="flex-1 w-full flex flex-col justify-center h-full">
                  <h3 className="text-3xl lg:text-4xl font-black text-white mb-8 md:mb-10 tracking-tight drop-shadow-sm">Our Commitment</h3>
                  <div className="grid sm:grid-cols-2 gap-x-6 gap-y-5 lg:gap-y-6">
                    {[
                      "World Class Education",
                      "Culture of Innovation & Creativity",
                      "Degree On Time 100% Placement",
                      "360' Personality Development",
                      "Ethics & Values Based Education"
                    ].map((item, index) => (
                      <div key={index} className="flex items-center gap-4 bg-white/[0.03] border border-white/5 p-4 lg:p-5 rounded-2xl hover:bg-white/10 hover:border-white/10 transition-all duration-300 hover:-translate-y-1 shadow-sm backdrop-blur-sm">
                        <div className="w-8 h-8 rounded-full bg-[#ffc107]/20 flex items-center justify-center flex-shrink-0 shadow-inner">
                           <CheckCircle className="w-4 h-4 text-[#ffc107]" />
                        </div>
                        <span className="text-white/95 font-bold tracking-wide text-[15px] lg:text-[16px] drop-shadow-sm">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Values Card */}
            <motion.div 
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.7, delay: 0.15 }}
              whileHover={{ y: -8 }}
              className="group relative bg-white/70 backdrop-blur-xl rounded-[2.5rem] p-10 lg:p-14 border border-white/80 shadow-[0_20px_60px_rgba(34,66,146,0.06)] overflow-hidden transition-all duration-500 flex flex-col justify-center"
            >
              <div className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-[#F8FAFC]/80 to-transparent -z-10 pointer-events-none"></div>

              <div className="flex items-center gap-6 mb-10">
                <div className="w-20 h-20 rounded-[1.5rem] bg-white border border-[#E8EFF7] flex items-center justify-center group-hover:bg-[#18357a] group-hover:border-[#18357a] transition-all duration-500 shadow-sm relative">
                  <div className="absolute inset-0 bg-[#F8FAFC] rounded-[1.5rem] blur opacity-50"></div>
                  <Award className="w-10 h-10 text-[#18357a] group-hover:text-white transition-colors duration-500 relative z-10" />
                </div>
                <h3 className="text-3xl font-black text-[#18357a] tracking-tight">Core Values</h3>
              </div>
              
              <p className="text-[#64779F] text-[17px] lg:text-lg leading-relaxed font-semibold mt-2">
                To pursue global standards of excellence in all our endeavors namely teaching, research, consultancy, continuing education and support functions.
              </p>
            </motion.div>

          </div>

          {/* Promise Highlight Strip */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.98, y: 30 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            whileHover={{ scale: 1.015 }}
            className="w-full bg-gradient-to-r from-[#18357a] via-[#1a3a82] to-[#18357a] rounded-[2.5rem] p-8 md:p-12 lg:p-14 flex flex-col md:flex-row items-center justify-center gap-8 lg:gap-14 shadow-[0_30px_70px_rgba(34,66,146,0.3)] border border-white/10 relative overflow-hidden group"
          >
            {/* Dynamic Light Sweep */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -skew-x-12 translate-x-[-150%] transition-transform duration-1000 group-hover:animate-[shimmer_2s_infinite] pointer-events-none"></div>

            <div className="flex flex-col md:flex-row items-center gap-8 lg:gap-10 z-10 w-full justify-center text-center">
               <div className="w-20 h-20 lg:w-24 lg:h-24 rounded-full bg-gradient-to-br from-[#ffc107] to-[#e0a800] flex items-center justify-center shrink-0 shadow-[0_0_50px_rgba(255,193,7,0.5)] group-hover:scale-110 transition-transform duration-500 relative">
                 <div className="absolute inset-0 rounded-full border-4 border-white/20 scale-110 animate-spin-slow"></div>
                 <Zap className="w-10 h-10 lg:w-12 lg:h-12 text-[#18357a] fill-[#18357a]" />
               </div>
               
               <div className="space-y-3">
                 <h4 className="text-[#ffc107] text-sm md:text-base font-black uppercase tracking-[0.25em] drop-shadow-md">Our Ultimate Promise</h4>
                 <h2 className="text-[1.6rem] md:text-3xl lg:text-[2.2rem] leading-tight font-black text-white tracking-tight drop-shadow-lg">
                   <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ffc107] via-[#FFF1B8] to-[#ffc107]">100% Placement</span> <span className="opacity-100 hidden sm:inline-block">| Ethics & Value Based Education</span>
                 </h2>
                 <p className="text-white/90 font-bold text-xl sm:hidden tracking-wide mt-2">Ethics & Value Based Education</p>
               </div>
            </div>
          </motion.div>

        </div>
      </section>
    </div>
  )
}

export default VisionMission
