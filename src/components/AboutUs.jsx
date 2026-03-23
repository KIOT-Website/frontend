import React from 'react'
import { motion } from 'framer-motion'
import { BookOpen, Users, Trophy, Target, CheckCircle2, ArrowRight } from 'lucide-react'
import campusImg from '../assets/about campus.png'

const AboutUs = () => {
  return (
    <div className="relative bg-[#FCFDFD] pt-16 pb-20 min-h-screen overflow-hidden">
      
      {/* Decorative Brand Background */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-to-bl from-[#18357a]/5 to-transparent rounded-bl-full pointer-events-none" />
      <div className="absolute bottom-1/4 left-0 w-[600px] h-[600px] bg-gradient-to-tr from-[#ffc107]/5 to-transparent rounded-tr-full pointer-events-none" />
      <div className="absolute -top-10 -left-10 w-40 h-40 bg-[radial-gradient(#18357a_2px,transparent_2px)] [background-size:16px_16px] opacity-10" />

      <section className="relative px-5 sm:px-10 lg:px-20 z-10 max-w-7xl mx-auto">
        
        {/* Page Header */}
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
               <span className="text-sm font-black text-[#18357a] uppercase tracking-[0.15em]">Our Heritage</span>
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-[5rem] font-black text-[#18357a] mb-8 tracking-tighter leading-[1.05]">
              About <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#18357a] via-[#224292] to-[#ffc107] inline-block">KIOT</span>
            </h1>
            <p className="text-[#64779F] text-xl lg:text-2xl max-w-3xl mx-auto font-medium leading-relaxed">
              A premier institution committed to nurturing the next generation of engineers, innovators, and leaders through world-class academic standards.
            </p>
          </motion.div>
        </div>

        {/* Story Section */}
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center mb-16">
           {/* Left Image Side */}
           <motion.div 
             initial={{ opacity: 0, x: -40 }}
             whileInView={{ opacity: 1, x: 0 }}
             viewport={{ once: true }}
             transition={{ duration: 0.7 }}
             className="relative"
           >
              <div className="relative rounded-[2.5rem] overflow-hidden border-4 border-white shadow-[0_30px_60px_rgba(34,66,146,0.12)]">
                <img src={campusImg} alt="KIOT Campus" className="w-full h-auto aspect-[4/5] sm:aspect-square object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#18357a]/60 to-transparent" />
              </div>
              
              {/* Floating Stat Card */}
              <div className="absolute -bottom-8 -right-4 sm:-right-8 bg-white p-6 rounded-3xl shadow-[0_20px_40px_rgba(0,0,0,0.1)] border border-[#F1F5F9] max-w-[200px] animate-[bounce_6s_infinite]">
                 <div className="w-12 h-12 bg-[#ffc107]/20 rounded-2xl flex items-center justify-center text-[#e0a800] mb-4">
                    <Trophy size={24} />
                 </div>
                 <h4 className="text-3xl font-black text-[#18357a] mb-1 leading-none">A Grade</h4>
                 <p className="text-xs font-bold text-[#64779F] uppercase tracking-widest">NAAC Accredited</p>
              </div>
           </motion.div>

           {/* Right Content */}
           <motion.div 
             initial={{ opacity: 0, x: 40 }}
             whileInView={{ opacity: 1, x: 0 }}
             viewport={{ once: true }}
             transition={{ duration: 0.7 }}
           >
              <h2 className="text-3xl lg:text-4xl font-black text-[#18357a] mb-8 leading-tight">
                Empowering the future through <span className="text-[#ffc107]">innovative learning.</span>
              </h2>
              <div className="space-y-6 text-[#64779F] text-[17px] leading-relaxed font-medium">
                <p>
                  Knowledge Institute of Technology (KIOT) was established with a clear vision: to create a transformative educational environment that goes beyond textbooks. We focus on hands-on practical learning, ethical values, and industry readiness.
                </p>
                <p>
                  Situated in a sprawling, lush green campus, KIOT provides state-of-the-art infrastructure, advanced research laboratories, and a rich library to foster academic excellence and intellectual growth.
                </p>
              </div>

              <div className="mt-10 grid sm:grid-cols-2 gap-6">
                <div className="flex items-center gap-4">
                   <div className="w-10 h-10 rounded-full bg-[#18357a]/5 flex items-center justify-center flex-shrink-0 text-[#18357a]">
                     <CheckCircle2 size={20} />
                   </div>
                   <span className="font-bold text-[#18357a]">Autonomous Status</span>
                </div>
                <div className="flex items-center gap-4">
                   <div className="w-10 h-10 rounded-full bg-[#18357a]/5 flex items-center justify-center flex-shrink-0 text-[#18357a]">
                     <CheckCircle2 size={20} />
                   </div>
                   <span className="font-bold text-[#18357a]">Elite Faculty Team</span>
                </div>
                <div className="flex items-center gap-4">
                   <div className="w-10 h-10 rounded-full bg-[#18357a]/5 flex items-center justify-center flex-shrink-0 text-[#18357a]">
                     <CheckCircle2 size={20} />
                   </div>
                   <span className="font-bold text-[#18357a]">Industry Tie-ups</span>
                </div>
                <div className="flex items-center gap-4">
                   <div className="w-10 h-10 rounded-full bg-[#18357a]/5 flex items-center justify-center flex-shrink-0 text-[#18357a]">
                     <CheckCircle2 size={20} />
                   </div>
                   <span className="font-bold text-[#18357a]">Global Placements</span>
                </div>
              </div>
           </motion.div>
        </div>

      </section>
    </div>
  )
}

export default AboutUs
