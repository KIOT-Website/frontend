import React from 'react'
import { motion } from 'framer-motion'
import { Trophy, GraduationCap, UserCheck, Briefcase, ArrowRight, Download, Users, TrendingUp, IndianRupee } from 'lucide-react'
import placementImage from '../../../assets/placements/CDT/placement.webp'

const features = [
  {
    title: "Career Development Support",
    desc: "Personalized guidance sessions, career planning assistance, and counselling to help students choose the right career path.",
    icon: GraduationCap,
    bgColor: "bg-blue-50",
    iconColor: "text-[#224292]"
  },
  {
    title: "Industry Interaction",
    desc: "Strong collaborations with reputed companies for internships, industrial visits, workshops, seminars, and campus recruitment drives.",
    icon: Users,
    bgColor: "bg-yellow-50",
    iconColor: "text-[#ffc107]"
  },
  {
    title: "Placement Assistance",
    desc: "Dedicated support for job opportunities, placement training, resume building, and interview readiness to improve employability.",
    icon: UserCheck,
    bgColor: "bg-blue-50",
    iconColor: "text-[#224292]"
  },
  {
    title: "Skill Enhancement Programs",
    desc: "Regular training sessions designed to strengthen technical knowledge, leadership qualities, teamwork, and professional communication.",
    icon: Briefcase,
    bgColor: "bg-yellow-50",
    iconColor: "text-[#ffc107]"
  }
]

const HeaderSection = () => {
  return (
    <div className="relative w-full bg-slate-50/50 overflow-hidden font-graphik min-h-[450px] lg:min-h-[600px] flex items-center">
      

      <div className="grid lg:grid-cols-12 w-full h-full items-center relative max-w-[1400px] mx-auto">
        
        {/* Left Column: Content Area */}
        <div className="lg:col-span-7 relative z-20 flex justify-center flex-col px-6 sm:px-10 lg:pl-16 py-6 lg:py-10">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="w-full"
          >
            
            {/* Main Header */}
            <h1 className="text-3xl md:text-4xl lg:text-[42px] font-semibold text-[#224292] mb-5 tracking-tighter leading-tight">
              Training & <span className="text-[#ffc107]">Placement Cell</span>
            </h1>

            {/* Small yellow line */}
            <div className="w-16 h-1.5 bg-[#ffc107] mb-6 rounded-full" />
            
            {/* Description */}
            <p className="text-black font-medium text-sm lg:text-base leading-relaxed mb-6 max-w-2xl text-justify">
              The Training and Placement Cell plays a vital role in preparing students for successful professional careers by bridging the gap between academic learning and industry expectations. Our mission is to empower students with the right skills, confidence, and practical exposure needed to excel in today’s competitive job market.
            </p>
            <p className="text-black font-medium text-sm lg:text-base leading-relaxed mb-8 max-w-2xl text-justify">
              We provide continuous training programs focused on technical development, communication skills, aptitude improvement, personality enhancement, and interview preparation. Through expert mentoring and career-focused activities, students are guided towards achieving their professional goals with clarity and confidence.
            </p>

            <h3 className="text-lg font-bold text-[#224292] mb-6 flex items-center gap-3">
              <div className="w-8 h-[2px] bg-[#ffc107]" />
              Key Highlights
            </h3>

            {/* Premium Features List - Horizontal */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-8 mb-10">
              {features.map((feature, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="flex flex-row sm:flex-col items-start gap-4"
                >
                  <div className={`w-12 h-12 rounded-full flex items-center justify-center shrink-0 border border-slate-100 ${feature.bgColor} ${feature.iconColor}`}>
                    <feature.icon size={20} />
                  </div>
                  <div className="flex flex-col">
                    <h4 className="text-sm font-semibold text-[#224292] leading-tight mb-1">{feature.title}</h4>
                    <p className="text-xs text-black font-medium leading-relaxed text-justify">{feature.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>



            <div className="flex flex-wrap items-center gap-4">
               <button className="flex items-center gap-2 px-8 py-3.5 bg-[#0a2351] hover:bg-[#224292] text-white rounded-full font-semibold text-sm transition-all shadow-lg hover:shadow-xl group">
                  <Download size={18} className="group-hover:scale-110 transition-transform" /> Placement Brochure <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
               </button>
               <button className="flex items-center gap-2 px-8 py-3.5 bg-white border-2 border-[#224292] text-[#224292] hover:bg-[#224292] hover:text-white rounded-full font-semibold text-sm transition-all shadow-sm hover:shadow-lg group">
                  <GraduationCap size={18} className="group-hover:scale-110 transition-transform" /> Placement Training <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
               </button>
            </div>

            {/* Mobile Stats Grid - Only visible on small screens */}
            <div className="grid grid-cols-2 gap-4 mt-8 lg:hidden">
              {[
                { label: "Placement", value: "95%", icon: TrendingUp, color: "bg-[#1a3673]" },
                { label: "Highest PKG", value: "25 LPA", icon: IndianRupee, color: "bg-[#ffc107]" },
                { label: "Recruiters", value: "150+", icon: Users, color: "bg-[#1a3673]" }
              ].map((stat, i) => (
                <div key={i} className="bg-white rounded-xl shadow-md p-3 flex items-center gap-3 border border-slate-50">
                  <div className={`w-8 h-8 rounded-full ${stat.color} flex items-center justify-center text-white shrink-0 shadow-sm`}>
                    <stat.icon size={14} />
                  </div>
                  <div>
                    <div className="font-bold text-sm text-slate-800">{stat.value}</div>
                    <div className="text-[9px] text-slate-500 font-bold leading-tight uppercase">{stat.label}</div>
                  </div>
                </div>
              ))}
            </div>

          </motion.div>
        </div>

        {/* Right Column: Refined Image Layout */}
        <div className="lg:col-span-5 relative h-full flex items-center justify-center lg:justify-start p-6 lg:p-10 lg:pl-0">
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

            {/* Floating Stats Cards - Desktop Only */}
            <div className="hidden lg:flex absolute top-[60%] -translate-y-1/2 -right-24 flex-col gap-5 z-30">
               
               {/* 95% Placement Record */}
               <motion.div 
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 }}
                  className="bg-white rounded-2xl p-4 pr-6 flex items-center gap-4 border border-slate-50 w-48"
               >
                  <div className="w-12 h-12 rounded-full bg-[#1a3673] flex items-center justify-center text-white shrink-0 shadow-inner">
                     <TrendingUp size={20} />
                  </div>
                  <div>
                     <h4 className="font-semibold text-[#1a3673] text-[22px] leading-tight">95%</h4>
                     <p className="text-[11px] text-slate-500 font-semibold leading-tight mt-0.5">Placement<br/>Record</p>
                  </div>
               </motion.div>

               {/* 25 LPA Highest Package */}
               <motion.div 
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.5 }}
                  className="bg-white rounded-2xl p-4 pr-6 flex items-center gap-4 border border-slate-50 w-48"
               >
                  <div className="w-12 h-12 rounded-full bg-[#ffc107] flex items-center justify-center text-white shrink-0 shadow-inner">
                     <IndianRupee size={20} />
                  </div>
                  <div>
                     <h4 className="font-semibold text-[#ffc107] text-[22px] leading-tight">25 LPA</h4>
                     <p className="text-[11px] text-slate-500 font-semibold leading-tight mt-0.5">Highest<br/>Package</p>
                  </div>
               </motion.div>

               {/* 150+ Recruiters */}
               <motion.div 
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.7 }}
                  className="bg-white rounded-2xl p-4 pr-6 flex items-center gap-4 border border-slate-50 w-48"
               >
                  <div className="w-12 h-12 rounded-full bg-[#1a3673] flex items-center justify-center text-white shrink-0 shadow-inner">
                     <Users size={20} />
                  </div>
                  <div>
                     <h4 className="font-semibold text-[#1a3673] text-[22px] leading-tight">150+</h4>
                     <p className="text-[11px] text-slate-500 font-semibold leading-tight mt-0.5">Recruiters</p>
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
