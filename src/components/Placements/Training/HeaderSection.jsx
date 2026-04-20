import React from 'react'
import { motion } from 'framer-motion'
import { Briefcase, GraduationCap } from 'lucide-react'

const HeaderSection = () => {
  return (
    <div className="max-w-7xl mx-auto px-6 mb-24">
      <div className="grid lg:grid-cols-2 gap-12 items-start">
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="flex flex-col"
        >
          <div className="inline-flex items-center gap-2.5 px-5 py-1.5 rounded-full bg-[#18357a]/5 border border-[#18357a]/10 shadow-sm mb-6 w-fit">
             <GraduationCap size={16} className="text-[#18357a]" />
             <span className="text-[10px] font-bold text-[#18357a] uppercase tracking-[0.1em]">Centre for Career Development and Training</span>
          </div>
          
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-black mb-8 tracking-tighter leading-tight">
             Shaping <span className="text-[#ffc107]">Competent Professionals</span>
          </h1>
          
          <div className="space-y-6">
            <p className="text-black font-semibold text-lg leading-relaxed text-justify">
              The Centre for Career Development and Training (CDT) at Knowledge Institute of Technology (KIOT), Salem, is dedicated to shaping students into competent professionals and responsible individuals.
            </p>
            <p className="text-black/70 font-medium text-base leading-relaxed text-justify">
              It focuses on building both employability skills and life skills through a comprehensive, structured, and progressive training program spread across four years.
            </p>
            <div className="p-6 bg-[#18357a] rounded-2xl border border-[#18357a]/10 shadow-xl shadow-[#18357a]/20">
               <p className="text-white font-medium text-base leading-relaxed italic">
                 "With more than 1200 hours of training, the program has been meticulously designed to ensure students are prepared not just for their first job, but also for lifelong success in their personal and professional lives."
               </p>
            </div>
          </div>
        </motion.div>

        <motion.div
           initial={{ opacity: 0, scale: 0.95 }}
           whileInView={{ opacity: 1, scale: 1 }}
           viewport={{ once: true }}
           className="relative lg:sticky lg:top-32"
        >
          <div className="absolute top-0 right-0 w-48 h-48 bg-[#18357a]/5 rounded-full -mr-24 -mt-24 blur-3xl opacity-50" />
          <div className="relative rounded-2xl overflow-hidden border-4 border-white shadow-2xl shadow-black/10">
             <img 
               src="https://images.unsplash.com/photo-1544717297-fa95b3d9d634?q=80&w=1200&auto=format&fit=crop" 
               alt="CDT Training" 
               className="w-full h-[450px] object-cover"
             />
             <div className="absolute inset-0 bg-gradient-to-tr from-[#18357a]/40 via-transparent to-transparent" />
             
             {/* Stats Overlay */}
             <div className="absolute bottom-8 left-8 p-6 bg-white/95 backdrop-blur-md rounded-2xl border border-white shadow-2xl">
                <p className="text-[10px] font-bold text-black/40 uppercase tracking-[0.2em] mb-2">Total Program Intensity</p>
                <div className="flex items-baseline gap-2">
                   <span className="text-4xl font-bold text-[#18357a]">1200+</span>
                   <span className="text-lg font-bold text-black uppercase tracking-tight">Hours</span>
                </div>
                <p className="text-xs font-semibold text-black/60 mt-1 italic">Meticulously Designed for Success</p>
             </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default HeaderSection
