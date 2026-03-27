import React from 'react'
import { School, Building2, TrendingUp, Award, ShieldCheck, Heart, ClipboardList, Brain, Target, Cpu, Users, FileCheck, GraduationCap } from 'lucide-react'

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
import virtusaLogo from '../../assets/company logo/virtusa.png'
import cognizantLogo from '../../assets/company logo/cognizant.png'
import accentureLogo from '../../assets/company logo/accenture.png'
import ibmLogo from '../../assets/company logo/ibm.png'
import lumenLogo from '../../assets/company logo/lumen.png'
import amiLogo from '../../assets/company logo/ami.png'
import aspireLogo from '../../assets/company logo/aspire.png'
import softsquareLogo from '../../assets/company logo/softsquare.png'
import embedurLogo from '../../assets/company logo/embedur.png'
import brakesindiaLogo from '../../assets/company logo/brakesindia.png'
import fujitecLogo from '../../assets/company logo/fujitec.png'
import montbleuLogo from '../../assets/company logo/montbleu.png'
import edveonLogo from '../../assets/company logo/edveon.png'
import hirotecLogo from '../../assets/company logo/hirotec.png'
import spicLogo from '../../assets/company logo/spic.png'
import infoedgeLogo from '../../assets/company logo/infoedge.png'
import danaLogo from '../../assets/company logo/dana.png'
import arunexcelloLogo from '../../assets/company logo/arunexcello.png'
import ujjivanbankLogo from '../../assets/company logo/ujjivanbank.png'
import veritasfinanceLogo from '../../assets/company logo/veritasfinance.png'
import viLogo from '../../assets/company logo/vi.png'
import koneLogo from '../../assets/company logo/kone.png'
import aggregateintelLogo from '../../assets/company logo/aggregateintel.png'

const RecruitmentProcess = () => {
  const steps = [
    {
      title: "Registration",
      desc: "Enroll with the placement cell.",
      icon: <ClipboardList size={18} className="text-[#18357a]" />,
      color: "#ffc107"
    },
    {
      title: "Training",
      desc: "Aptitude & Technical sessions.",
      icon: <Brain size={18} className="text-[#18357a]" />,
      color: "#18357a"
    },
    {
      title: "Aptitude",
      desc: "Analytical & Problem solving.",
      icon: <Target size={18} className="text-[#18357a]" />,
      color: "#ffc107"
    },
    {
      title: "Technical",
      desc: "Practical subject assessment.",
      icon: <Cpu size={18} className="text-[#18357a]" />,
      color: "#18357a"
    },
    {
      title: "HR",
      desc: "Confidence & Fitment evaluation.",
      icon: <Users size={18} className="text-[#18357a]" />,
      color: "#ffc107"
    },
    {
      title: "Offer Letter",
      desc: "Final selection & issuance.",
      icon: <FileCheck size={18} className="text-[#18357a]" />,
      color: "#18357a"
    }
  ];

  return (
    <div className="pt-20 pb-32 bg-white relative overflow-hidden">
        {/* Abstract Background Accents */}
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-gradient-to-bl from-[#18357a]/5 to-transparent rounded-full -translate-y-1/2 translate-x-1/2 pointer-events-none" />

        <div className="relative z-10 max-w-7xl mx-auto px-6">
           {/* Section Header */}
           <div className="text-center mb-12">
              <div className="flex flex-col items-center">
                 <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-[#D5E2F4] shadow-sm mb-6">
                    <span className="text-[10px] font-black text-[#18357a] uppercase tracking-[0.25em]">Placement Ecosystem</span>
                 </div>
                 <h1 className="text-4xl md:text-5xl lg:text-[3.5rem] font-black text-[#18357a] mb-8 tracking-tighter leading-[1.1]">
                    Recruitment <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#18357a] via-[#224292] to-[#ffc107] uppercase">Pathway</span>
                 </h1>
                 <div className="max-w-2xl mx-auto p-6 rounded-[2.5rem] bg-white border-2 border-transparent border-l-4 border-l-[#ffc107] shadow-xl relative mt-4 hover:border-[#ffc107] transition-all duration-500 group">
                    <p className="text-[#64779F] font-bold text-sm md:text-base leading-relaxed text-left italic">
                       A precision-engineered journey transforming academic potential into professional excellence, step by step.
                    </p>
                 </div>
              </div>
           </div>

           {/* Horizontal Journey Timeline - Improved for Mobile Visibility */}
           <div className="relative mt-40 md:mt-72 mb-40 md:mb-64 max-w-6xl mx-auto px-10 md:px-0">
              {/* Main Horizontal Track - Thicker for mobile visibility */}
              <div className="absolute top-1/2 left-0 w-full h-[6px] md:h-[4px] bg-[#18357a]/10 -translate-y-1/2 rounded-full overflow-hidden">
                 <div className="h-full w-full bg-gradient-to-r from-[#18357a] via-[#ffc107] to-[#18357a] shadow-[0_0_20px_rgba(255,193,7,0.4)]" />
              </div>

              {/* Edge Icons: Institution to Industry Landmarks */}
              <div className="absolute left-[-20px] md:left-[-50px] top-1/2 -translate-y-1/2 z-10 flex flex-col items-center">
                 <div className="p-1.5 md:p-2 rounded-lg bg-white border border-[#18357a]/10 shadow-sm">
                    <GraduationCap size={16} className="text-[#18357a]" />
                 </div>
                 <span className="text-[8px] md:text-[9px] font-black uppercase text-[#18357a] mt-1 tracking-widest">KIOT</span>
              </div>

              <div className="absolute right-[-20px] md:right-[-50px] top-1/2 -translate-y-1/2 z-10 flex flex-col items-center">
                 <div className="p-1.5 md:p-2 rounded-lg bg-white border border-[#18357a]/10 shadow-sm">
                    <Building2 size={16} className="text-[#18357a]" />
                 </div>
                 <span className="text-[8px] md:text-[9px] font-black uppercase text-[#18357a] mt-1 tracking-widest">COMPANY</span>
              </div>

              {/* The Timeline Steps Grid */}
              <div className="relative flex justify-between items-center z-10">
                 {steps.map((step, i) => (
                    <div key={i} className="flex-1 relative flex flex-col items-center group">
                       {/* Node Point */}
                       <div className={`w-10 h-10 md:w-12 md:h-12 rounded-full bg-white shadow-lg border-2 flex items-center justify-center relative z-20 transition-all duration-500 group-hover:scale-110 ${i % 2 === 0 ? 'border-[#ffc107]' : 'border-[#18357a]'}`}>
                          <div className="scale-75 md:scale-95 group-hover:scale-110 transition-transform duration-300">
                              {step.icon}
                          </div>
                       </div>

                       {/* Information Card - Responsive Position and Width */}
                       <div className={`absolute ${i % 2 === 0 ? 'bottom-full mb-6 md:mb-8 -translate-y-1/2' : 'top-full mt-6 md:mt-8 translate-y-1/2'} w-[70px] xs:w-24 md:w-56 bg-white/95 backdrop-blur-2xl px-2 py-3 md:px-5 md:py-4 rounded-xl md:rounded-[1.5rem] shadow-xl border border-[#D5E2F4] z-50 overflow-hidden text-center hover:scale-105 transition-all`}>
                          <h3 className={`text-[8px] md:text-base font-black leading-tight uppercase tracking-tighter text-center ${i % 2 === 0 ? 'text-[#ffc107] md:text-[#18357a]' : 'text-[#18357a]'}`}>
                             {step.title}
                          </h3>
                       </div>
                    </div>
                 ))}
              </div>
           </div>

           {/* Final Upgrade Message */}
           <div className="mt-10 mb-24 text-center">
              <div className="inline-block px-10 py-5 rounded-[2rem] bg-[#18357a] text-white shadow-2xl relative overflow-hidden group">
                 <div className="absolute inset-0 bg-[#ffc107]/10 translate-x-full group-hover:translate-x-0 transition-transform duration-700" />
                 <p className="relative z-10 font-black uppercase tracking-widest text-[10px] flex items-center gap-4">
                    <ShieldCheck size={18} className="text-[#ffc107]" />
                    Each stage is designed to progressively prepare students for real-world recruitment.
                 </p>
              </div>
           </div>
        </div>

         {/* Category-Wise Recruiter Marquees - Optimized with Dual Track for Mobile */}
         <div className="space-y-24 md:space-y-40 max-w-full overflow-hidden pt-10 md:pt-20 border-t border-[#D5E2F4]/40 pb-32 bg-white md:bg-[#f8fafc]/20 transition-colors">
            
            {/* Section 1: IT Recruiters */}
            <div className="space-y-8">
               <div className="max-w-7xl mx-auto px-6 mb-12">
                  <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
                     <div>
                        <div className="flex items-center gap-3 text-[#18357a] font-black text-[10px] uppercase tracking-[0.3em] mb-3">
                           <span className="w-10 h-[2px] bg-[#18357a]" /> Technology Sector
                        </div>
                        <h2 className="text-3xl md:text-4xl font-black text-[#18357a] tracking-tighter uppercase leading-none">Key Recruiters <br /><span className="px-5 py-1.5 bg-[#18357a] text-white rounded-xl inline-block mt-2">IT</span></h2>
                     </div>
                     <div className="px-6 py-4 bg-white rounded-2xl border border-[#D5E2F4]/50 shadow-sm backdrop-blur-md">
                        <span className="text-[#64779F] text-[10px] uppercase font-black tracking-widest block mb-1">Salary Range</span>
                        <span className="text-[#18357a] font-extrabold text-lg md:text-xl tracking-tight">₹3.75 to ₹12.75 <span className="text-xs uppercase font-bold text-[#64779F]">LPA</span></span>
                     </div>
                  </div>
               </div>

               <div className="relative group/marquee select-none space-y-4 md:space-y-6">
                  {/* Row 1: Left to Right — First half of IT companies */}
                  <div className="flex overflow-hidden gap-6 mask-fade-edges">
                     <div className="flex flex-nowrap gap-6 min-w-max px-3 animate-marquee-slower hover:pause">
                        {[...Array(2)].map((_, idx) => (
                           <div key={idx} className="flex gap-6">
                              {[
                                 { name: "Zoho Corporation", logo: zohoLogo },
                                 { name: "Virtusa Consulting", logo: virtusaLogo },
                                 { name: "Tech Mahindra", logo: techMahindraLogo },
                                 { name: "American Megatrends", logo: amiLogo },
                                 { name: "Aspire Systems", logo: aspireLogo },
                                 { name: "Cognizant", logo: cognizantLogo },
                                 { name: "IBM", logo: ibmLogo },
                                 { name: "iNeuron" },
                                 { name: "Codingmart Technologies", logo: codingmartLogo },
                              ].map((c, i) => <MarqueeItem key={i} item={c} />)}
                           </div>
                        ))}
                     </div>
                  </div>

                  {/* Row 2: Right to Left — Second half of IT companies */}
                  <div className="flex overflow-hidden gap-6 mask-fade-edges">
                     <div className="flex flex-nowrap gap-6 min-w-max px-3 animate-marquee-reverse-slower hover:pause">
                        {[...Array(2)].map((_, idx) => (
                           <div key={idx} className="flex gap-6">
                              {[
                                 { name: "Lumen Technologies", logo: lumenLogo },
                                 { name: "RapL Technologies", logo: raplLogo },
                                 { name: "Hexaware Technologies", logo: hexawareLogo },
                                 { name: "TCS", logo: tcsLogo },
                                 { name: "Softsquare", logo: softsquareLogo },
                                 { name: "Flowserv" },
                                 { name: "Expleo Solutions", logo: ecpleoLogo },
                                 { name: "Think Innov Solutions" },
                                 { name: "Jasmin Infotech" },
                                 { name: "Accenture", logo: accentureLogo },
                              ].map((c, i) => <MarqueeItem key={i} item={c} />)}
                           </div>
                        ))}
                     </div>
                  </div>
               </div>
            </div>

            {/* Section 2: Core Recruiters */}
            <div className="space-y-8">
               <div className="max-w-7xl mx-auto px-6 mb-12">
                  <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
                     <div>
                        <div className="flex items-center gap-3 text-[#4666B4] font-black text-[10px] uppercase tracking-[0.3em] mb-3">
                           <span className="w-10 h-[2px] bg-[#4666B4]" /> Engineering Services
                        </div>
                        <h2 className="text-3xl md:text-4xl font-black text-[#18357a] tracking-tighter uppercase leading-none">Key Recruiters <br /><span className="px-5 py-1.5 bg-[#4666B4] text-white rounded-xl inline-block mt-2">Core</span></h2>
                     </div>
                     <div className="px-6 py-4 bg-white rounded-2xl border border-[#D5E2F4]/50 shadow-sm backdrop-blur-md">
                        <span className="text-[#64779F] text-[10px] uppercase font-black tracking-widest block mb-1">Salary Range</span>
                        <span className="text-[#18357a] font-extrabold text-lg md:text-xl tracking-tight">₹3.00 to ₹8.50 <span className="text-xs uppercase font-bold text-[#64779F]">LPA</span></span>
                     </div>
                  </div>
               </div>

               <div className="relative group/marquee select-none space-y-4 md:space-y-6">
                  {/* Row 1: Right to Left — First half of Core companies */}
                  <div className="flex overflow-hidden gap-6 mask-fade-edges">
                     <div className="flex flex-nowrap gap-6 min-w-max px-3 animate-marquee-reverse-slower hover:pause">
                        {[...Array(2)].map((_, idx) => (
                           <div key={idx} className="flex gap-6">
                              {[
                                 { name: "EmbedUR", logo: embedurLogo },
                                 { name: "Harita Techserv", logo: haritaLogo },
                                 { name: "Renault Nissan" },
                                 { name: "Tessolve Semiconductor", logo: tessolveLogo },
                                 { name: "Brakes India Pvt. Ltd.", logo: brakesindiaLogo },
                                 { name: "VVDN Technologies" },
                                 { name: "Montbleu", logo: montbleuLogo },
                              ].map((c, i) => <MarqueeItem key={i} item={c} />)}
                           </div>
                        ))}
                     </div>
                  </div>

                  {/* Row 2: Left to Right — Second half of Core companies */}
                  <div className="flex overflow-hidden gap-6 mask-fade-edges">
                     <div className="flex flex-nowrap gap-6 min-w-max px-3 animate-marquee-slower hover:pause">
                        {[...Array(2)].map((_, idx) => (
                           <div key={idx} className="flex gap-6">
                              {[
                                 { name: "Fujitec", logo: fujitecLogo },
                                 { name: "Bonfiglioli" },
                                 { name: "Edveon Technologies", logo: edveonLogo },
                                 { name: "Hirotec", logo: hirotecLogo },
                                 { name: "Southern Petrochemical", logo: spicLogo },
                                 { name: "BMS Engineering Pvt. Ltd." },
                                 { name: "Expleo Solutions", logo: ecpleoLogo },
                              ].map((c, i) => <MarqueeItem key={i} item={c} />)}
                           </div>
                        ))}
                     </div>
                  </div>
               </div>
            </div>

            {/* Section 3: MBA Recruiters */}
            <div className="space-y-8">
               <div className="max-w-7xl mx-auto px-6 mb-12">
                  <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
                     <div>
                        <div className="flex items-center gap-3 text-emerald-600 font-black text-[10px] uppercase tracking-[0.3em] mb-3">
                           <span className="w-10 h-[2px] bg-emerald-600" /> Management Sector
                        </div>
                        <h2 className="text-3xl md:text-4xl font-black text-[#18357a] tracking-tighter uppercase leading-none">Key Recruiters <br /><span className="px-5 py-1.5 bg-emerald-600 text-white rounded-xl inline-block mt-2">MBA</span></h2>
                     </div>
                     <div className="px-6 py-4 bg-white rounded-2xl border border-[#D5E2F4]/50 shadow-sm backdrop-blur-md">
                        <span className="text-[#64779F] text-[10px] uppercase font-black tracking-widest block mb-1">Salary Range</span>
                        <span className="text-[#18357a] font-extrabold text-lg md:text-xl tracking-tight">₹3.00 to ₹10.00 <span className="text-xs uppercase font-bold text-[#64779F]">LPA</span></span>
                     </div>
                  </div>
               </div>

               <div className="relative group/marquee select-none space-y-4 md:space-y-6">
                  {/* Row 1: Left to Right — First half of MBA companies */}
                  <div className="flex overflow-hidden gap-6 mask-fade-edges">
                     <div className="flex flex-nowrap gap-6 min-w-max px-3 animate-marquee-slower hover:pause">
                        {[...Array(2)].map((_, idx) => (
                           <div key={idx} className="flex gap-6">
                              {[
                                 { name: "City Union Bank" },
                                 { name: "Ramco Cements" },
                                 { name: "Info Edge", logo: infoedgeLogo },
                                 { name: "Dana Corporations", logo: danaLogo },
                                 { name: "Arun Excello", logo: arunexcelloLogo },
                                 { name: "Flipkart" },
                                 { name: "Mahindra Rural Home Finance" },
                              ].map((c, i) => <MarqueeItem key={i} item={c} />)}
                           </div>
                        ))}
                     </div>
                  </div>

                  {/* Row 2: Right to Left — Second half of MBA companies */}
                  <div className="flex overflow-hidden gap-6 mask-fade-edges">
                     <div className="flex flex-nowrap gap-6 min-w-max px-3 animate-marquee-reverse-slower hover:pause">
                        {[...Array(2)].map((_, idx) => (
                           <div key={idx} className="flex gap-6">
                              {[
                                 { name: "Ujjivan Small Finance Bank", logo: ujjivanbankLogo },
                                 { name: "Veritas Finance", logo: veritasfinanceLogo },
                                 { name: "Dialogy Solutions" },
                                 { name: "Nebula Cloud Technologies" },
                                 { name: "Rinex Technologies" },
                                 { name: "Vodafone Idea", logo: viLogo },
                                 { name: "PENTOZ Technology" },
                              ].map((c, i) => <MarqueeItem key={i} item={c} />)}
                           </div>
                        ))}
                     </div>
                  </div>
               </div>
            </div>

            {/* Section 4: Internships */}
            <div className="space-y-8">
               <div className="max-w-7xl mx-auto px-6 mb-12">
                  <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
                     <div>
                        <div className="flex items-center gap-3 text-indigo-600 font-black text-[10px] uppercase tracking-[0.3em] mb-3">
                           <span className="w-10 h-[2px] bg-indigo-600" /> Industry Training
                        </div>
                        <h2 className="text-3xl md:text-4xl font-black text-[#18357a] tracking-tighter uppercase leading-none">Companies Offered <br /><span className="px-5 py-1.5 bg-indigo-600 text-white rounded-xl inline-block mt-2">Internships</span></h2>
                     </div>
                     <div className="px-6 py-4 bg-white rounded-2xl border border-[#D5E2F4]/50 shadow-sm backdrop-blur-md">
                        <span className="text-[#64779F] text-[10px] uppercase font-black tracking-widest block mb-1">Impact Record</span>
                        <span className="text-[#18357a] font-extrabold text-lg md:text-xl tracking-tight">50+ Global <span className="text-xs uppercase font-bold text-[#64779F]">Partners</span></span>
                     </div>
                  </div>
               </div>

               <div className="relative group/marquee select-none space-y-4 md:space-y-6">
                  {/* Row 1: Right to Left — First half of Internship companies */}
                  <div className="flex overflow-hidden gap-6 mask-fade-edges">
                     <div className="flex flex-nowrap gap-6 min-w-max px-3 animate-marquee-reverse-slower hover:pause">
                        {[...Array(2)].map((_, idx) => (
                           <div key={idx} className="flex gap-6">
                              {[
                                 { name: "CISCO" },
                                 { name: "Hyundai" },
                                 { name: "Simpson" },
                                 { name: "Aggregate Intelligence", logo: aggregateintelLogo },
                                 { name: "Kone Elevators", logo: koneLogo },
                                 { name: "Celebrare" },
                                 { name: "Ashok Leyland" },
                                 { name: "Robert Bosch" },
                                 { name: "R R Electronics" },
                              ].map((c, i) => <MarqueeItem key={i} item={c} />)}
                           </div>
                        ))}
                     </div>
                  </div>

                  {/* Row 2: Left to Right — Second half of Internship companies */}
                  <div className="flex overflow-hidden gap-6 mask-fade-edges">
                     <div className="flex flex-nowrap gap-6 min-w-max px-3 animate-marquee-slower hover:pause">
                        {[...Array(2)].map((_, idx) => (
                           <div key={idx} className="flex gap-6">
                              {[
                                 { name: "Zoho Corporation", logo: zohoLogo },
                                 { name: "VVDN Technologies" },
                                 { name: "American Megatrends", logo: amiLogo },
                                 { name: "Virtusa Corporation", logo: virtusaLogo },
                                 { name: "Aspire Systems", logo: aspireLogo },
                                 { name: "Concert IDC" },
                                 { name: "Skysolar" },
                                 { name: "Cygnus Marketing" },
                              ].map((c, i) => <MarqueeItem key={i} item={c} />)}
                           </div>
                        ))}
                     </div>
                  </div>
               </div>
            </div>
         </div>
         {/* Background decoration bottom (Yellow Purged) */}

         <style dangerouslySetInnerHTML={{ __html: `
            .mask-fade-edges {
               mask-image: linear-gradient(to right, transparent, black 15%, black 85%, transparent);
               -webkit-mask-image: linear-gradient(to right, transparent, black 15%, black 85%, transparent);
            }
            @keyframes marquee { 0% { transform: translateX(0); } 100% { transform: translateX(-50%); } }
            @keyframes marquee-reverse { 0% { transform: translateX(-50%); } 100% { transform: translateX(0); } }
            .animate-marquee-slower { animation: marquee 35s linear infinite; }
            .animate-marquee-reverse-slower { animation: marquee-reverse 40s linear infinite; }
            .pause:hover { animation-play-state: paused; }
         `}} />
      </div>
   )
}

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
