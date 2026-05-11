import React from 'react'
import { motion } from 'framer-motion'
import { Award, GraduationCap, Users, Briefcase, Globe, BarChart, ArrowRight, CheckCircle2 } from 'lucide-react'

const features = [
  { 
    title: "Skill Development", 
    desc: "Industry-oriented training and certifications", 
    icon: GraduationCap 
  },
  { 
    title: "Expert Mentorship", 
    desc: "Guidance from experienced faculty and industry experts", 
    icon: Users 
  },
  { 
    title: "Industry Exposure", 
    desc: "Internships, live projects and workshops", 
    icon: Briefcase 
  },
];

const HeaderSection = () => {
  return (
    <div className="relative pt-32 pb-24 overflow-hidden bg-white">
      {/* Background Accents */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-slate-50 -z-10 skew-x-12 translate-x-24" />
      
      <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Left Text Content */}
        <motion.div
           initial={{ opacity: 0, x: -50 }}
           whileInView={{ opacity: 1, x: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#224292]/5 text-[#224292] text-xs font-bold tracking-widest uppercase mb-8 border border-[#224292]/10">
             <Award size={14} className="text-[#ffc107]" />
             Centre for Career Development and Training (CDT)
          </div>

          <h1 className="text-5xl lg:text-7xl font-black text-[#1A1A1A] leading-[1.1] mb-8 tracking-tight">
            Empowering Careers Through <span className="text-[#224292]">Excellence.</span>
          </h1>

          <p className="text-lg text-slate-600 leading-relaxed mb-12 max-w-xl">
             Comprehensive training programs designed to bridge the gap between academia 
             and industry, preparing students for global career opportunities.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {features.map((feature, idx) => (
              <div key={idx} className="flex items-start gap-4 p-4 rounded-2xl bg-white border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
                 <div className="p-3 rounded-xl bg-[#224292]/5 text-[#224292]">
                    <feature.icon size={20} />
                 </div>
                 <div>
                    <h3 className="font-bold text-[#1A1A1A] text-sm mb-1">{feature.title}</h3>
                    <p className="text-xs text-slate-500 leading-normal">{feature.desc}</p>
                 </div>
              </div>
            ))}
          </div>

        </motion.div>

        {/* Right Image Content */}
        <motion.div
           initial={{ opacity: 0, scale: 0.95 }}
           whileInView={{ opacity: 1, scale: 1 }}
           viewport={{ once: true }}
           transition={{ duration: 0.8 }}
           className="relative"
        >
          <div className="relative rounded-[3rem] overflow-hidden border-8 border-white shadow-2xl">
            <img 
              src="/indian-students-training.webp" 
              alt="CDT Training Session" 
              className="w-full h-[600px] object-cover"
            />
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#224292]/60 via-transparent to-transparent" />
          </div>
        </motion.div>
      </div>


    </div>
  )
}

export default HeaderSection
