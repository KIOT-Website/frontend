import React from 'react'
import { motion } from 'framer-motion'
import { Trophy, GraduationCap, UserCheck, Briefcase, ArrowRight, Download, Users, TrendingUp, IndianRupee } from 'lucide-react'
import placementImage from '../../../assets/placements/CDT/placement.webp'

const features = [
  {
    title: "Industry-Aligned Training",
    desc: "Build in-demand skills for tomorrow",
    icon: GraduationCap,
    bgColor: "bg-blue-50",
    iconColor: "text-[#224292]"
  },
  {
    title: "Dedicated Placement Support",
    desc: "Guidance at every step of your journey",
    icon: UserCheck,
    bgColor: "bg-yellow-50",
    iconColor: "text-[#ffc107]"
  },
  {
    title: "Internships & Live Projects",
    desc: "Real experience that builds confidence",
    icon: Briefcase,
    bgColor: "bg-blue-50",
    iconColor: "text-[#224292]"
  }
]

const HeaderSection = () => {
  return (
    <div className="relative w-full bg-slate-50/50 overflow-hidden font-graphik min-h-[450px] lg:min-h-[600px] flex items-center">
      
      {/* Background Decorative Blob */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-blue-100/40 rounded-l-full blur-3xl -z-10" />

      <div className="grid lg:grid-cols-12 w-full h-full items-center relative max-w-[1400px] mx-auto">
        
        {/* Left Column: Content Area */}
        <div className="lg:col-span-7 relative z-20 flex justify-center flex-col px-6 sm:px-10 lg:pl-16 py-6 lg:py-10">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="w-full"
          >
            {/* Tag Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 border border-blue-100 shadow-sm mb-6">
               <Trophy size={14} className="text-[#224292]" />
               <span className="text-[10px] sm:text-xs font-black text-[#224292] uppercase tracking-widest">PLACEMENT EXCELLENCE</span>
            </div>
            
            {/* Main Header */}
            <h1 className="text-4xl md:text-5xl lg:text-[56px] font-black text-[#224292] mb-5 tracking-tighter leading-tight">
              Launch Your Career <br className="hidden md:block" />
              with <span className="text-[#ffc107]">Confidence</span>
            </h1>

            {/* Small yellow line */}
            <div className="w-16 h-1.5 bg-[#ffc107] mb-6 rounded-full" />
            
            {/* Description */}
            <p className="text-slate-600 font-medium text-base lg:text-lg leading-relaxed mb-10 max-w-xl">
              Industry-oriented training, real-world exposure, and dedicated placement support to help you achieve your dream career.
            </p>

            {/* Premium Features List - Horizontal */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-10">
              {features.map((feature, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="flex flex-row sm:flex-col items-start gap-4"
                >
                  <div className={`w-12 h-12 rounded-full flex items-center justify-center shrink-0 shadow-sm border border-slate-100 ${feature.bgColor} ${feature.iconColor}`}>
                    <feature.icon size={20} />
                  </div>
                  <div className="flex flex-col">
                    <h4 className="text-sm font-bold text-[#224292] leading-tight mb-1">{feature.title}</h4>
                    <p className="text-xs text-slate-500 font-medium leading-relaxed">{feature.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4">
               <button className="flex items-center gap-2 px-8 py-3.5 bg-[#0a2351] hover:bg-[#224292] text-white rounded-full font-bold text-sm transition-all shadow-lg hover:shadow-xl group">
                  <Download size={18} className="group-hover:scale-110 transition-transform" /> Placement Brochure <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
               </button>
            </div>

          </motion.div>
        </div>

        {/* Right Column: Refined Image Layout */}
        <div className="lg:col-span-5 relative h-full flex items-center justify-start p-6 lg:p-10 lg:pl-0 pr-8">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="relative w-full h-[80%] max-h-[480px]"
          >
            {/* The Main Image */}
            <div className="relative w-full h-full rounded-[2.5rem] overflow-hidden shadow-2xl">
              <img 
                src={placementImage} 
                alt="Placement Training" 
                className="w-full h-full object-cover object-center"
              />
            </div>

            {/* Floating Stats Cards */}
            <div className="absolute top-[60%] -translate-y-1/2 -right-24 flex flex-col gap-5 z-30">
               
               {/* 95% Placement Record */}
               <motion.div 
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 }}
                  className="bg-white rounded-2xl shadow-xl p-4 pr-6 flex items-center gap-4 border border-slate-50 w-48"
               >
                  <div className="w-12 h-12 rounded-full bg-[#1a3673] flex items-center justify-center text-white shrink-0 shadow-inner">
                     <TrendingUp size={20} />
                  </div>
                  <div>
                     <h4 className="font-black text-[#1a3673] text-[22px] leading-tight">95%</h4>
                     <p className="text-[11px] text-slate-500 font-bold leading-tight mt-0.5">Placement<br/>Record</p>
                  </div>
               </motion.div>

               {/* 25 LPA Highest Package */}
               <motion.div 
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.5 }}
                  className="bg-white rounded-2xl shadow-xl p-4 pr-6 flex items-center gap-4 border border-slate-50 w-48"
               >
                  <div className="w-12 h-12 rounded-full bg-[#ffc107] flex items-center justify-center text-white shrink-0 shadow-inner">
                     <IndianRupee size={20} />
                  </div>
                  <div>
                     <h4 className="font-black text-[#ffc107] text-[22px] leading-tight">25 LPA</h4>
                     <p className="text-[11px] text-slate-500 font-bold leading-tight mt-0.5">Highest<br/>Package</p>
                  </div>
               </motion.div>

               {/* 150+ Recruiters */}
               <motion.div 
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.7 }}
                  className="bg-white rounded-2xl shadow-xl p-4 pr-6 flex items-center gap-4 border border-slate-50 w-48"
               >
                  <div className="w-12 h-12 rounded-full bg-[#1a3673] flex items-center justify-center text-white shrink-0 shadow-inner">
                     <Users size={20} />
                  </div>
                  <div>
                     <h4 className="font-black text-[#1a3673] text-[22px] leading-tight">150+</h4>
                     <p className="text-[11px] text-slate-500 font-bold leading-tight mt-0.5">Recruiters</p>
                  </div>
               </motion.div>
            </div>
          </motion.div>
        </div>

      </div>
    </div>
  )
}

export default HeaderSection
