import React from 'react'
import { motion } from 'framer-motion'
import { Eye, Target, Zap, CheckCircle2 } from 'lucide-react'

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
    <div className="relative bg-[#FCFDFD] pt-16 pb-32 min-h-screen overflow-hidden">
      
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-to-bl from-[#18357a]/5 to-transparent rounded-bl-full pointer-events-none" />
      <div className="absolute bottom-1/4 left-0 w-[600px] h-[600px] bg-gradient-to-tr from-[#ffc107]/5 to-transparent rounded-tr-full pointer-events-none" />

      <section id="vision-mission" className="relative px-5 sm:px-10 lg:px-28 z-10 w-full max-w-[1600px] mx-auto">
        <div className="max-w-7xl mx-auto">
          
          {/* Header */}
          <div className="text-center mb-16">
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
              <h1 className="text-4xl md:text-5xl lg:text-[3.5rem] font-black text-[#18357a] mb-8 tracking-tighter leading-[1.1] py-2">
                Institution <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#18357a] via-[#224292] to-[#ffc107] inline-block px-4 pb-4 uppercase">Philosophy</span>
              </h1>
              <p className="text-[#64779F] text-xl lg:text-2xl max-w-3xl mx-auto font-medium leading-relaxed">
                The guiding principles that shape our vision and drive our mission towards excellence.
              </p>
            </motion.div>
          </div>

          {/* Split Cards: Vision & Mission */}
          <div className="grid md:grid-cols-2 gap-8 lg:gap-10 items-stretch">
            
            {/* Vision Card */}
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6 }}
              whileHover={{ y: -5 }}
              className="group relative bg-white rounded-[2.5rem] p-10 lg:p-14 border border-[#D5E2F4]/60 shadow-[0_20px_60px_rgba(34,66,146,0.06)] overflow-hidden transition-all duration-500 flex flex-col h-full"
            >
              <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-gradient-to-bl from-[#ffc107]/5 to-transparent rounded-bl-full -z-10 transition-transform duration-700 pointer-events-none"></div>
              
              <div className="mb-10 flex items-center gap-6">
                <div className="w-16 h-16 rounded-2xl bg-[#ffc107]/10 flex items-center justify-center text-[#e0a800] group-hover:bg-[#ffc107] group-hover:text-white transition-all duration-300">
                  <Eye className="w-8 h-8" />
                </div>
                <h3 className="text-2xl lg:text-3xl font-black text-[#18357a] uppercase tracking-tight">Our Vision</h3>
              </div>
              
              <div className="space-y-6">
                {visionPoints.map((point, idx) => (
                  <div key={idx} className="flex gap-4">
                    <div className="mt-1.5 shrink-0 w-1.5 h-1.5 rounded-full bg-[#ffc107]" />
                    <p className="text-[#64779F] text-lg leading-relaxed font-semibold">
                      {point}
                    </p>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Mission Card */}
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: 0.1 }}
              whileHover={{ y: -5 }}
              className="group relative bg-[#18357a] rounded-[2.5rem] p-10 lg:p-14 shadow-[0_30px_70px_rgba(24,53,122,0.2)] overflow-hidden transition-all duration-500 flex flex-col h-full text-white"
            >
              <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-white/5 rounded-bl-full -z-10 pointer-events-none"></div>
              
              <div className="mb-10 flex items-center gap-6">
                <div className="w-16 h-16 rounded-2xl bg-white/10 flex items-center justify-center text-[#ffc107] group-hover:bg-white group-hover:text-[#18357a] transition-all duration-300">
                  <Target className="w-8 h-8" />
                </div>
                <h3 className="text-2xl lg:text-3xl font-black uppercase tracking-tight">Our Mission</h3>
              </div>
              
              <div className="space-y-6">
                {missionPoints.map((point, idx) => (
                  <div key={idx} className="flex gap-4 group/item">
                    <div className="mt-2 shrink-0">
                      <CheckCircle2 className="w-5 h-5 text-[#ffc107]" />
                    </div>
                    <p className="text-white/90 text-[16px] lg:text-lg leading-relaxed font-medium">
                      {point}
                    </p>
                  </div>
                ))}
              </div>
            </motion.div>

          </div>

          {/* Promise Highlight Strip */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.98, y: 30 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="mt-20 mx-auto max-w-4xl bg-gradient-to-r from-[#18357a] via-[#1a3a82] to-[#18357a] rounded-[2.5rem] p-6 md:p-10 flex flex-col md:flex-row items-center justify-center gap-6 lg:gap-10 shadow-[0_30px_70px_rgba(34,66,146,0.3)] border border-white/10 relative overflow-hidden group"
          >
            <div className="flex flex-col md:flex-row items-center gap-6 lg:gap-8 z-10 w-full justify-center text-center">
               <div className="w-16 h-16 lg:w-20 lg:h-20 rounded-full bg-gradient-to-br from-[#ffc107] to-[#e0a800] flex items-center justify-center shrink-0 shadow-[0_0_50px_rgba(255,193,7,0.4)] group-hover:scale-110 transition-transform duration-500 relative">
                 <Zap className="w-8 h-8 lg:w-10 lg:h-10 text-[#18357a] fill-[#18357a]" />
               </div>
               
               <div className="space-y-1.5">
                 <h2 className="text-[1.4rem] md:text-2xl lg:text-3xl leading-tight font-black text-white tracking-tight drop-shadow-lg">
                   <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ffc107] via-[#FFF1B8] to-[#ffc107] uppercase">100% Placement</span>
                 </h2>
                 <p className="text-white/80 font-bold text-sm lg:text-base tracking-widest uppercase">Ethics & Value Based Education</p>
               </div>
            </div>
          </motion.div>

        </div>
      </section>
    </div>
  )
}

export default VisionMission

