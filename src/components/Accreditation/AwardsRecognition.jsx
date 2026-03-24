import React from 'react'
import { motion } from 'framer-motion'
import { Trophy, Clock, Medal, ArrowLeft } from 'lucide-react'
import { Link } from 'react-router-dom'

const AwardsRecognition = () => {
  return (
    <div className="relative bg-[#FCFDFD] pt-16 pb-32 min-h-[80vh] flex items-center justify-center overflow-hidden">
      
      {/* Background Graphic elements */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-to-bl from-[#18357a]/5 to-transparent rounded-bl-full pointer-events-none" />
      <div className="absolute -top-10 -left-10 w-40 h-40 bg-[radial-gradient(#18357a_2px,transparent_2px)] [background-size:16px_16px] opacity-10" />

      <section className="relative px-6 z-10 max-w-4xl mx-auto text-center">
        
        {/* Animated Trophy Icon Wrapper */}
        <motion.div 
           initial={{ scale: 0.8, opacity: 0 }}
           animate={{ scale: 1, opacity: 1 }}
           transition={{ duration: 0.8, ease: "easeOut" }}
           className="relative inline-block mb-12"
        >
           <div className="absolute inset-0 bg-[#ffc107]/20 rounded-full blur-3xl animate-pulse" />
           <div className="relative w-32 h-32 md:w-40 md:h-40 rounded-[2.5rem] bg-white border border-[#D5E2F4]/50 shadow-[0_30px_60px_rgba(24,53,122,0.1)] flex items-center justify-center text-[#18357a] group">
              <Trophy size={64} className="group-hover:rotate-12 transition-transform duration-500" />
              <div className="absolute -top-2 -right-2 bg-[#ffc107] p-2 rounded-xl shadow-lg">
                 <Clock size={20} className="text-[#18357a] animate-spin-slow" />
              </div>
           </div>
        </motion.div>

        {/* Content */}
        <motion.div
           initial={{ opacity: 0, y: 30 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ delay: 0.2, duration: 0.6 }}
        >
           <div className="inline-flex items-center gap-2.5 px-6 py-2.5 rounded-full bg-white border border-[#D5E2F4]/80 shadow-sm mb-8 hover:shadow-md transition-shadow cursor-default group">
              <div className="w-2 h-2 rounded-full bg-[#ffc107] animate-pulse" />
              <span className="text-sm font-black text-[#18357a] uppercase tracking-[0.2em]">Institutional Achievements</span>
           </div>

           <h1 className="text-4xl md:text-5xl lg:text-[3.5rem] font-black text-[#18357a] mb-6 tracking-tighter leading-tight uppercase px-4">
             Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#18357a] via-[#4666B4] to-[#ffc107]">Achievements</span>
           </h1>

           <div className="w-24 h-1.5 bg-gradient-to-r from-[#18357a] to-[#ffc107] mx-auto rounded-full mb-10" />

           <h2 className="text-3xl md:text-4xl font-black text-[#18357a] mb-6 tracking-tight uppercase">
             Section Under Construction
           </h2>

           <p className="text-[#64779F] text-lg md:text-xl font-medium leading-relaxed max-w-2xl mx-auto mb-16 px-4">
             We are currently cataloging our latest faculty awards, student achievements, and national recognitions. This honors section will be updated soon.
           </p>

           {/* Actions */}
           <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <Link 
                to="/"
                className="group flex items-center gap-3 bg-[#18357a] text-white px-10 py-5 rounded-2xl font-black text-sm uppercase tracking-widest hover:bg-[#224292] shadow-2xl hover:shadow-[#18357a]/40 transition-all active:scale-95"
              >
                 <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" />
                 Explore Campus Life
              </Link>
              
              <div className="flex items-center gap-4 text-[#18357a] font-black uppercase tracking-widest text-xs py-5 px-8 rounded-2xl border border-[#D5E2F4]/80 bg-white/50 backdrop-blur-sm">
                 <Medal size={18} className="text-[#ffc107]" />
                 Verified Credentials
              </div>
           </div>
        </motion.div>

      </section>

      {/* Aesthetic Accents */}
      <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-[#F8FAFC] to-transparent pointer-events-none" />
    </div>
  )
}

export default AwardsRecognition
