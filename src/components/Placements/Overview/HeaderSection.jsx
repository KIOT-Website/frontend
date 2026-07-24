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
    <div className="relative w-full bg-[#FCFDFD] overflow-hidden font-graphik min-h-[450px] lg:min-h-[600px] flex items-center py-12">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-bl from-[#224292]/5 via-transparent to-transparent rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#ffc107]/5 via-transparent to-transparent rounded-full blur-[80px] pointer-events-none" />
      <div className="absolute inset-0 opacity-[0.015] pointer-events-none" 
           style={{ backgroundImage: 'radial-gradient(#224292 0.5px, transparent 0.5px)', backgroundSize: '24px 24px' }} />

      <div className="grid lg:grid-cols-12 w-full h-full items-center relative max-w-[1400px] mx-auto z-10">
        
        {/* Left Column: Content Area */}
        <div className="lg:col-span-7 relative z-20 flex items-center lg:items-start justify-center flex-col px-6 sm:px-10 lg:pl-16 py-6 lg:py-10 text-center lg:text-left">
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
            <div className="w-16 h-1.5 bg-[#ffc107] mb-6 rounded-full mx-auto lg:mx-0" />
            
            {/* Description */}
            <p className="text-black font-medium text-sm lg:text-base leading-relaxed mb-6 max-w-2xl text-center lg:text-justify">
              The Training and Placement Cell plays a vital role in preparing students for successful professional careers by bridging the gap between academic learning and industry expectations. Our mission is to empower students with the right skills, confidence, and practical exposure needed to excel in today’s competitive job market.
            </p>
            <p className="text-black font-medium text-sm lg:text-base leading-relaxed mb-8 max-w-2xl text-center lg:text-justify">
              We provide continuous training programs focused on technical development, communication skills, aptitude improvement, personality enhancement, and interview preparation. Through expert mentoring and career-focused activities, students are guided towards achieving their professional goals with clarity and confidence.
            </p>

            <h3 className="text-lg font-bold text-[#224292] mb-6 flex items-center justify-center lg:justify-start gap-3">
              <div className="w-8 h-[2px] bg-[#ffc107]" />
              Key Highlights
            </h3>

            {/* Premium Features List - Cards Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-10">
              {features.map((feature, idx) => {
                const isBlue = feature.iconColor === "text-[#224292]";
                return (
                  <motion.div 
                    key={idx}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.08 }}
                    whileHover={{ y: -4, transition: { duration: 0.2 } }}
                    className={`bg-white p-5 rounded-2xl border border-slate-100/80 shadow-md hover:shadow-xl flex items-start gap-4 transition-all duration-300 group relative overflow-hidden ${
                      isBlue ? 'border-l-4 border-l-[#224292] hover:border-[#224292]/30' : 'border-l-4 border-l-[#ffc107] hover:border-[#ffc107]/40'
                    }`}
                  >
                    <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-br ${
                      isBlue ? 'from-white via-white to-blue-50/20' : 'from-white via-white to-amber-50/20'
                    }`} />
                    
                    <div className={`w-11 h-11 rounded-xl flex items-center justify-center shrink-0 transition-all duration-300 z-10 ${
                      isBlue 
                        ? 'bg-[#224292]/5 text-[#224292] group-hover:bg-[#224292] group-hover:text-white' 
                        : 'bg-[#ffc107]/10 text-[#a37c00] group-hover:bg-[#ffc107] group-hover:text-[#224292]'
                    }`}>
                      <feature.icon size={20} className="group-hover:scale-110 transition-transform duration-300" />
                    </div>
                    <div className="flex flex-col z-10">
                      <h4 className="text-[15px] font-bold text-[#224292] leading-tight mb-1.5 transition-colors">{feature.title}</h4>
                      <p className="text-[12.5px] text-slate-600 font-medium leading-relaxed text-left font-graphik">{feature.desc}</p>
                    </div>
                  </motion.div>
                );
              })}
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
