import React from 'react'
import { motion, useScroll, useSpring } from 'framer-motion'
import { ClipboardList, BookOpen, Search, UserCheck, FileCheck, ShieldCheck, Users, TrendingUp, Award, Heart, School, Building2 } from 'lucide-react'

// Company Logos
import codingmartLogo from '../../assets/codingmart.webp'
import ecpleoLogo from '../../assets/ecpleo.webp'
import haritaLogo from '../../assets/harita.webp'
import hexawareLogo from '../../assets/hexaware.webp'
import raplLogo from '../../assets/rapl.webp'
import techMahindraLogo from '../../assets/tech mahendra.webp'
import tessolveLogo from '../../assets/tessolve.webp'
import itcLogo from '../../assets/itc.webp'

// New Section Logos
import tcsLogo from '../../assets/company logo/tcs.png'
import zohoLogo from '../../assets/company logo/zoho.png'
import virtusaLogo from '../../assets/company logo/VISTUSA.jpeg'
import cognizantLogo from '../../assets/company logo/COGNIZENT.jpg'
import accentureLogo from '../../assets/company logo/ACCENTURE.jpg'

const RecruitmentProcess = () => {
  const steps = [
    {
      title: "Registration",
      desc: "Enroll with the placement cell.",
      icon: <School size={18} className="text-[#18357a]" />,
      color: "#ffc107"
    },
    {
      title: "Training",
      desc: "Aptitude & Technical sessions.",
      icon: <TrendingUp size={18} className="text-[#18357a]" />,
      color: "#18357a"
    },
    {
      title: "Aptitude",
      desc: "Analytical & Problem solving.",
      icon: <Award size={18} className="text-[#18357a]" />,
      color: "#ffc107"
    },
    {
      title: "Technical",
      desc: "Practical subject assessment.",
      icon: <ShieldCheck size={18} className="text-[#18357a]" />,
      color: "#18357a"
    },
    {
      title: "HR",
      desc: "Confidence & Fitment evaluation.",
      icon: <Heart size={18} className="text-[#18357a]" />,
      color: "#ffc107"
    },
    {
       title: "Offer Letter",
       desc: "Final selection & issuance.",
       icon: <Building2 size={14} className="text-[#18357a]" />,
       color: "#18357a"
     }
  ];

  return (
    <div className="pt-20 pb-32 bg-white relative overflow-hidden">
        {/* Abstract Background Accents */}
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-gradient-to-bl from-[#18357a]/5 to-transparent rounded-full -translate-y-1/2 translate-x-1/2 pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-gradient-to-tr from-[#ffc107]/5 to-transparent rounded-full translate-y-1/4 -translate-x-1/4 pointer-events-none" />

        <div className="relative z-10 max-w-7xl mx-auto px-6">
           {/* Section Header */}
           <div className="text-center mb-12">
              <motion.div
                 initial={{ opacity: 0, scale: 0.9 }}
                 whileInView={{ opacity: 1, scale: 1 }}
                 transition={{ duration: 0.8 }}
                 viewport={{ once: true }}
                 className="flex flex-col items-center"
              >
                 <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-[#D5E2F4] shadow-sm mb-6">
                    <span className="text-[10px] font-black text-[#18357a] uppercase tracking-[0.25em]">Placement Ecosystem</span>
                 </div>
                 <h1 className="text-3xl md:text-5xl font-black text-[#18357a] mb-6 tracking-tighter uppercase leading-tight">
                    Recruitment <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#18357a] to-[#ffc107]">Pathway</span>
                 </h1>
                 <div className="max-w-2xl mx-auto p-6 rounded-[2.5rem] bg-white border-l-4 border-[#ffc107] shadow-xl relative">
                    <p className="text-[#64779F] font-bold text-sm md:text-base leading-relaxed text-left italic">
                       A precision-engineered journey transforming academic potential into professional excellence, step by step.
                    </p>
                 </div>
              </motion.div>
           </div>

           {/* Horizontal Journey Timeline */}
           <div className="relative mt-72 mb-64 max-w-6xl mx-auto">
              {/* Main Horizontal Track with Glow */}
              <div className="absolute top-1/2 left-0 w-full h-[4px] bg-[#18357a]/5 -translate-y-1/2 rounded-full overflow-hidden">
                 <motion.div 
                    initial={{ width: 0 }}
                    whileInView={{ width: "100%" }}
                    viewport={{ once: true }}
                    transition={{ duration: 9, ease: "linear" }}
                    className="h-full bg-gradient-to-r from-[#18357a] via-[#ffc107] to-[#18357a] shadow-[0_0_20px_rgba(255,193,7,0.5)]"
                 />
              </div>

              {/* Edge Icons: Institution to Industry Landmarks */}
              <div className="absolute left-[-50px] top-1/2 -translate-y-1/2 z-10 flex flex-col items-center">
                 <div className="p-2 rounded-lg bg-white border border-[#18357a]/10 shadow-sm">
                    <School size={16} className="text-[#18357a]" />
                 </div>
                 <span className="text-[9px] font-black uppercase text-[#18357a] mt-1 tracking-widest">KIOT</span>
              </div>

              <div className="absolute right-[-50px] top-1/2 -translate-y-1/2 z-10 flex flex-col items-center">
                 <div className="p-2 rounded-lg bg-white border border-[#18357a]/10 shadow-sm">
                    <Building2 size={16} className="text-[#18357a]" />
                 </div>
                 <span className="text-[9px] font-black uppercase text-[#18357a] mt-1 tracking-widest">CORPORATE</span>
              </div>

              {/* Choreographed Boy: Stable Movement dynamics */}
              <motion.div
                 initial={{ left: "-50px", opacity: 0 }}
                 whileInView={{ 
                    left: [
                       "-50px", "0%",      
                       "0%", "20%",    
                       "20%", "40%",    
                       "40%", "60%",    
                       "60%", "80%",    
                       "80%", "100%",   
                       "100%", "calc(100% + 50px)"
                    ],
                    opacity: 1
                 }}
                 viewport={{ once: true }}
                 transition={{ 
                    duration: 8, 
                    times: [
                       0, 0.08,         
                       0.12, 0.24,      
                       0.28, 0.40,      
                       0.44, 0.56,      
                       0.60, 0.72,      
                       0.76, 0.88,      
                       0.94, 1          
                    ],
                    ease: "easeInOut"
                 }}
                 className="absolute top-1/2 -translate-y-full -translate-x-1/2 z-30 pointer-events-none mb-1 mt-[-6px]"
              >
                 <div className="relative scale-90 md:scale-110 mb-2 drop-shadow-2xl">
                    <svg width="40" height="60" viewBox="0 0 40 60" fill="none">
                       <circle cx="20" cy="15" r="8" fill="#18357a" />
                       <rect x="12" y="25" width="16" height="20" rx="4" fill="#18357a" />
                       <rect x="8" y="28" width="8" height="15" rx="2" fill="#ffc107" stroke="#18357a" strokeWidth="1" />
                       <path d="M15 45 L13 56" stroke="#18357a" strokeWidth="6" strokeLinecap="round" />
                       <path d="M25 45 L27 56" stroke="#18357a" strokeWidth="6" strokeLinecap="round" />
                    </svg>
                 </div>
              </motion.div>

              {/* The Timeline Steps Grid */}
              <div className="relative flex justify-between items-center z-10 px-0">
                 {steps.map((step, i) => (
                    <div key={i} className="flex-1 relative flex flex-col items-center group">
                       {/* Node Point */}
                       <motion.div
                          initial={{ scale: 0, opacity: 0 }}
                          whileInView={{ scale: [0, 1, 1], opacity: [0, 1, 1] }}
                          viewport={{ once: true }}
                          transition={{ 
                             duration: 8,
                             times: [0, (i * 0.16) + 0.05, 1],
                             ease: "easeOut"
                          }}
                          className={`w-12 h-12 rounded-full bg-white shadow-lg border-2 flex items-center justify-center relative z-20 transition-all duration-500 group-hover:scale-110 ${i % 2 === 0 ? 'border-[#ffc107]' : 'border-[#18357a]'}`}
                       >
                          <div className="scale-90 group-hover:scale-110 transition-transform duration-300">
                              {step.icon}
                          </div>
                       </motion.div>

                       {/* Card (Minimalist Content: Title Only as requested) */}
                       <motion.div
                          initial={{ opacity: 0, scale: 0 }}
                          whileInView={{ 
                             opacity: [0, 0, 1, 1],
                             scale: [0, 0, 1, 1],
                             y: i % 2 === 0 ? [-100, -100, -50, -50] : [100, 100, 50, 50]
                          }}
                          viewport={{ once: true }}
                          transition={{ 
                             duration: 8,
                             times: [
                                0, 
                                (i * 0.16) + 0.04,    
                                (i * 0.16) + 0.08,
                                1
                             ],
                             ease: "spring(1, 100, 10, 10)" 
                          }}
                          className={`absolute ${i % 2 === 0 ? 'bottom-full mb-8' : 'top-full mt-8'} w-32 md:w-56 bg-white/95 backdrop-blur-2xl px-5 py-4 rounded-[1.5rem] shadow-xl border border-[#D5E2F4] z-50 overflow-hidden text-center hover:scale-105 transition-all`}
                       >
                          <h3 className="text-sm md:text-base font-black text-[#18357a] leading-tight uppercase group-hover:text-[#ffc107] tracking-tighter">
                             {step.title}
                          </h3>
                       </motion.div>
                    </div>
                 ))}
              </div>
           </div>

           {/* Final Upgrade Message */}
           <motion.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 1, duration: 1 }}
              className="mt-10 mb-24 text-center"
           >
              <div className="inline-block px-10 py-5 rounded-[2rem] bg-[#18357a] text-white shadow-2xl relative overflow-hidden group">
                 <div className="absolute inset-0 bg-[#ffc107]/10 translate-x-full group-hover:translate-x-0 transition-transform duration-700" />
                 <p className="relative z-10 font-black uppercase tracking-widest text-[10px] flex items-center gap-4">
                    <ShieldCheck size={18} className="text-[#ffc107]" />
                    Each stage is designed to progressively prepare students for real-world recruitment.
                 </p>
              </div>
           </motion.div>
        </div>

        {/* High-Performance Category-Wise Recruiter Marquees */}
        <div className="space-y-40 max-w-full overflow-hidden pt-20 border-t border-[#D5E2F4]/40 pb-32 bg-[#f8fafc]/20">
           
           {/* Section 1: IT Recruiters */}
           <div className="space-y-8">
              <div className="max-w-7xl mx-auto px-6 mb-12">
                 <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
                    <div>
                       <div className="flex items-center gap-3 text-[#18357a] font-black text-[10px] uppercase tracking-[0.3em] mb-3">
                          <span className="w-10 h-[2px] bg-[#18357a]" /> Technology Sector
                       </div>
                       <h2 className="text-4xl font-black text-[#18357a] tracking-tighter uppercase leading-none">Key Recruiters <br /><span className="px-5 py-1.5 bg-[#18357a] text-white rounded-xl inline-block mt-2">IT</span></h2>
                    </div>
                    <div className="px-6 py-4 bg-white rounded-2xl border border-[#D5E2F4]/50 shadow-sm backdrop-blur-md">
                       <span className="text-[#64779F] text-[10px] uppercase font-black tracking-widest block mb-1">Salary Range</span>
                       <span className="text-[#18357a] font-extrabold text-xl tracking-tight">₹3.75 to ₹12.75 <span className="text-xs uppercase font-bold text-[#64779F]">LPA</span></span>
                    </div>
                 </div>
              </div>

              {/* Row 1: Left to Right */}
              <div className="relative group/marquee select-none">
                 <div className="flex overflow-hidden gap-6 mask-fade-edges">
                    <motion.div 
                       animate={{ x: ["-50%", "0%"] }}
                       transition={{ duration: 35, repeat: Infinity, ease: "linear" }}
                       whileHover={{ animationPlayState: "paused" }}
                       className="flex flex-nowrap gap-6 min-w-max px-3"
                    >
                       {[...Array(2)].map((_, idx) => (
                          <div key={idx} className="flex gap-6">
                             {[
                                { name: "Zoho", logo: zohoLogo },
                                { name: "TCS", logo: tcsLogo },
                                { name: "Cognizant", logo: cognizantLogo },
                                { name: "Accenture", logo: accentureLogo },
                                { name: "Virtusa", logo: virtusaLogo },
                                { name: "Tech Mahindra", logo: techMahindraLogo }
                             ].map((c, i) => (
                                <MarqueeItem key={i} item={c} />
                             ))}
                          </div>
                       ))}
                    </motion.div>
                 </div>
              </div>

              {/* Row 2: Right to Left */}
              <div className="relative group/marquee select-none">
                 <div className="flex overflow-hidden gap-6 mask-fade-edges">
                    <motion.div 
                       animate={{ x: ["0%", "-50%"] }}
                       transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
                       whileHover={{ animationPlayState: "paused" }}
                       className="flex flex-nowrap gap-6 min-w-max px-3"
                    >
                       {[...Array(2)].map((_, idx) => (
                          <div key={idx} className="flex gap-6">
                             {[
                                { name: "RapL", logo: raplLogo },
                                { name: "Hexaware", logo: hexawareLogo },
                                { name: "IBM" },
                                { name: "Codingmart", logo: codingmartLogo },
                                { name: "Lumen" },
                                { name: "iNeuron" }
                             ].map((c, i) => (
                                <MarqueeItem key={i} item={c} />
                             ))}
                          </div>
                       ))}
                    </motion.div>
                 </div>
              </div>
           </div>

           {/* Section 2: Core Recruiters */}
           <div className="space-y-8">
              <div className="max-w-7xl mx-auto px-6 mb-12">
                 <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
                    <div>
                       <div className="flex items-center gap-3 text-[#ffc107] font-black text-[10px] uppercase tracking-[0.3em] mb-3">
                          <span className="w-10 h-[2px] bg-[#ffc107]" /> Engineering Services
                       </div>
                       <h2 className="text-4xl font-black text-[#18357a] tracking-tighter uppercase leading-none">Key Recruiters <br /><span className="px-5 py-1.5 bg-[#ffc107] text-[#18357a] rounded-xl inline-block mt-2">Core</span></h2>
                    </div>
                    <div className="px-6 py-4 bg-white rounded-2xl border border-[#D5E2F4]/50 shadow-sm backdrop-blur-md">
                       <span className="text-[#64779F] text-[10px] uppercase font-black tracking-widest block mb-1">Salary Range</span>
                       <span className="text-[#18357a] font-extrabold text-xl tracking-tight">₹3.00 to ₹8.50 <span className="text-xs uppercase font-bold text-[#64779F]">LPA</span></span>
                    </div>
                 </div>
              </div>

              {/* Row 1: Left to Right */}
              <div className="relative group/marquee select-none">
                 <div className="flex overflow-hidden gap-6 mask-fade-edges">
                    <motion.div 
                       animate={{ x: ["-50%", "0%"] }}
                       transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
                       whileHover={{ animationPlayState: "paused" }}
                       className="flex flex-nowrap gap-6 min-w-max px-3"
                    >
                       {[...Array(2)].map((_, idx) => (
                          <div key={idx} className="flex gap-6">
                             {[
                                { name: "Harita", logo: haritaLogo },
                                { name: "Tessolve", logo: tessolveLogo },
                                { name: "Expleo", logo: ecpleoLogo },
                                { name: "Renault Nissan" },
                                { name: "Brakes India" },
                                { name: "VVDN Tech" },
                                { name: "Robert Bosch" },
                                { name: "Hyundai" }
                             ].map((c, i) => (
                                <MarqueeItem key={i} item={c} />
                             ))}
                          </div>
                       ))}
                    </motion.div>
                 </div>
              </div>

              {/* Row 2: Right to Left */}
              <div className="relative group/marquee select-none">
                 <div className="flex overflow-hidden gap-6 mask-fade-edges">
                    <motion.div 
                       animate={{ x: ["0%", "-50%"] }}
                       transition={{ duration: 45, repeat: Infinity, ease: "linear" }}
                       whileHover={{ animationPlayState: "paused" }}
                       className="flex flex-nowrap gap-6 min-w-max px-3"
                    >
                       {[...Array(2)].map((_, idx) => (
                          <div key={idx} className="flex gap-6">
                             {[
                                { name: "Ashok Leyland" },
                                { name: "EmbedUR" },
                                { name: "Fujitec" },
                                { name: "Bonfiglioli" },
                                { name: "Hirotec" },
                                { name: "CISCO" },
                                { name: "Simpson" },
                                { name: "ITC Infotech", logo: itcLogo }
                             ].map((c, i) => (
                                <MarqueeItem key={i} item={c} />
                             ))}
                          </div>
                       ))}
                    </motion.div>
                 </div>
              </div>
           </div>

           {/* Section 3: MBA Recruiters */}
           <div className="space-y-8">
              <div className="max-w-7xl mx-auto px-6 mb-12">
                 <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
                    <div>
                       <div className="flex items-center gap-3 text-[#64779F] font-black text-[10px] uppercase tracking-[0.3em] mb-3">
                          <span className="w-10 h-[2px] bg-[#64779F]/30" /> Strategic Management
                       </div>
                       <h2 className="text-4xl font-black text-[#18357a] tracking-tighter uppercase leading-none">Key Recruiters <br /><span className="px-5 py-1.5 border-2 border-[#18357a] text-[#18357a] rounded-xl inline-block mt-2">MBA</span></h2>
                    </div>
                    <div className="px-6 py-4 bg-white rounded-2xl border border-[#D5E2F4]/50 shadow-sm backdrop-blur-md">
                       <span className="text-[#64779F] text-[10px] uppercase font-black tracking-widest block mb-1">Salary Range</span>
                       <span className="text-[#18357a] font-extrabold text-xl tracking-tight">₹3.00 to ₹10.00 <span className="text-xs uppercase font-bold text-[#64779F]">LPA</span></span>
                    </div>
                 </div>
              </div>

              {/* Row 1: Left to Right */}
              <div className="relative group/marquee select-none">
                 <div className="flex overflow-hidden gap-6 mask-fade-edges">
                    <motion.div 
                       animate={{ x: ["-50%", "0%"] }}
                       transition={{ duration: 45, repeat: Infinity, ease: "linear" }}
                       whileHover={{ animationPlayState: "paused" }}
                       className="flex flex-nowrap gap-6 min-w-max px-3"
                    >
                       {[...Array(2)].map((_, idx) => (
                          <div key={idx} className="flex gap-6">
                             {[
                                { name: "City Union Bank" },
                                { name: "Ramco Cements" },
                                { name: "Info Edge" },
                                { name: "Dana Corp" },
                                { name: "Arun Excello" },
                                { name: "Flipkart" },
                                { name: "Amazon" }
                             ].map((c, i) => (
                                <MarqueeItem key={i} item={c} />
                             ))}
                          </div>
                       ))}
                    </motion.div>
                 </div>
              </div>

              {/* Row 2: Right to Left */}
              <div className="relative group/marquee select-none">
                 <div className="flex overflow-hidden gap-6 mask-fade-edges">
                    <motion.div 
                       animate={{ x: ["0%", "-50%"] }}
                       transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
                       whileHover={{ animationPlayState: "paused" }}
                       className="flex flex-nowrap gap-6 min-w-max px-3"
                    >
                       {[...Array(2)].map((_, idx) => (
                          <div key={idx} className="flex gap-6">
                             {[
                                { name: "Softsquare" },
                                { name: "Flowserv" },
                                { name: "Ujjivan Small Bank" },
                                { name: "Veritas Finance" },
                                { name: "Vodafone Idea" },
                                { name: "Think Innov" },
                                { name: "PENTOZ Tech" }
                             ].map((c, i) => (
                                <MarqueeItem key={i} item={c} />
                             ))}
                          </div>
                       ))}
                    </motion.div>
                 </div>
              </div>
           </div>

         </div>

         {/* Background decoration bottom */}
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-gradient-to-tr from-[#ffc107]/5 to-transparent rounded-tr-full pointer-events-none" />

        {/* Global Styles for the Masking effect */}
        <style dangerouslySetInnerHTML={{ __html: `
           .mask-fade-edges {
              mask-image: linear-gradient(to right, transparent, black 15%, black 85%, transparent);
              -webkit-mask-image: linear-gradient(to right, transparent, black 15%, black 85%, transparent);
           }
        `}} />
     </div>
   )
 }

 // Reusable Marquee Item Component
 const MarqueeItem = ({ item }) => (
    <div className="group bg-white h-24 w-44 rounded-2xl border border-[#D5E2F4]/60 hover:border-[#ffc107]/50 shadow-sm hover:shadow-xl transition-all duration-500 flex flex-col items-center justify-center p-6 shrink-0 transform hover:-translate-y-1">
       {item.logo ? (
          <img src={item.logo} alt={item.name} className="max-h-12 w-full object-contain transition-all duration-500 transform group-hover:scale-110" />
       ) : (
          <span className="text-[#18357a] font-black text-xs uppercase tracking-tighter text-center leading-tight">
             {item.name}
          </span>
       )}
    </div>
 );

export default RecruitmentProcess
