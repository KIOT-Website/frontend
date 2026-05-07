import React from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, Star, UserCheck, Briefcase, CheckCircle2, Trophy, FileText, Users } from 'lucide-react'
import GdImage from '../../../assets/placements/CDT/Gd.png'

const features = [
  {
    title: "Industry-Aligned Training",
    desc: "Curriculum designed with real industry insights to build in-demand skills.",
    icon: Star,
    color: "#ffc107"
  },
  {
    title: "Dedicated Placement Support",
    desc: "Mock interviews, resume building & personalized mentoring support.",
    icon: UserCheck,
    color: "#ffc107"
  },
  {
    title: "Internships & Live Projects",
    desc: "Hands-on exposure through internships and real-world projects.",
    icon: Briefcase,
    color: "#ffc107"
  }
]

const HeaderSection = () => {
  return (
    <div className="relative w-full bg-white overflow-hidden font-graphik min-h-[450px] lg:min-h-[500px] flex items-center">
      
      <div className="grid lg:grid-cols-12 w-full h-full items-center relative">
        
        {/* Left Column: Content Area */}
        <div className="lg:col-span-5 relative z-20 flex justify-end">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="max-w-xl w-full px-8 lg:px-12 py-6"
          >
            {/* Tag Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#224292]/5 border border-[#224292]/10 shadow-sm mb-4">
               <Trophy size={12} className="text-[#224292]" />
               <span className="text-[9px] font-black text-[#224292] uppercase tracking-[0.2em]">Institutional Excellence</span>
            </div>
            
            {/* Main Header */}
            <h1 className="text-4xl md:text-5xl font-black text-[#224292] mb-4 tracking-tighter leading-[0.9]">
              Placement <br/> <span className="text-[#ffc107]">Excellence</span>
            </h1>
            
            {/* Description */}
            <p className="text-black font-black text-sm md:text-base leading-tight mb-8 max-w-md">
              At KIOT, placement is a continuous journey driven by structured training, skill development, and industry alignment from day one.
            </p>

            {/* Premium Features List */}
            <div className="space-y-4 mb-8">
              {features.map((feature, idx) => (
                <motion.div 
                  key={idx}
                  className="flex gap-4 group"
                >
                  <div className={`w-10 h-10 rounded-full bg-white flex items-center justify-center shrink-0 border border-slate-100 shadow-sm transition-all`} style={{ color: feature.color }}>
                    <feature.icon size={18} />
                  </div>
                  <div className="flex items-center">
                    <h4 className="text-base font-black text-[#224292] tracking-tight">{feature.title}</h4>
                  </div>
                </motion.div>
              ))}
            </div>

          </motion.div>
        </div>

        {/* Right Column: Refined Image Layout */}
        <div className="lg:col-span-7 relative h-full min-h-[450px] lg:min-h-[600px] flex items-center p-8 lg:p-16">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="relative w-full h-full"
          >
            {/* Decorative Corner Shapes */}
            <div className="absolute -top-6 -left-6 w-32 h-32 bg-[#224292] rounded-3xl -z-10" />
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-[#ffc107] rounded-3xl -z-10" />

            <div className="relative w-full h-full rounded-[8rem_2rem_8rem_2rem] overflow-hidden border-8 border-white shadow-2xl shadow-blue-900/10">
              <img 
                src={GdImage} 
                alt="Placement Training" 
                className="w-full h-full object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#224292]/20 to-transparent" />
            </div>
          </motion.div>
        </div>

      </div>
    </div>
  )
}

export default HeaderSection
