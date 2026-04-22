import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { BookOpen, Users, Trophy, Target, CheckCircle2, ArrowRight, ArrowDown } from 'lucide-react'
import campusImg from '../../assets/main/campus .webp'
import VisionMission from '../VisionMission/VisionMission'

const AboutUs = () => {
  const [showAcademicStats, setShowAcademicStats] = useState(false);

  return (
    <div className="relative bg-[#FCFDFD] pt-20 pb-20 min-h-screen overflow-hidden">
      
      {/* Decorative Brand Background */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-to-bl from-[#18357a]/5 to-transparent rounded-bl-full pointer-events-none" />
      <div className="absolute -top-10 -left-10 w-40 h-40 bg-[radial-gradient(#18357a_2px,transparent_2px)] [background-size:16px_16px] opacity-10" />

      <section className="relative px-5 sm:px-10 lg:px-20 z-10 max-w-7xl mx-auto">
        
        {/* Page Header - Centered */}
        <div className="text-center mb-12 lg:mb-16">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex flex-col items-center"
          >
            <h1 className="text-5xl md:text-6xl lg:text-[5.5rem] font-graphik font-bold text-[#18357a] mb-4 tracking-tighter leading-[1.1]">
              About the <span className="text-[#ffc107]">KIOT</span>
            </h1>
          </motion.div>
        </div>

        {/* Centered Wide Cinematic Campus Image */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-7xl mx-auto mb-16 px-4 md:px-0"
        >
          <div className="relative rounded-[2rem] overflow-hidden shadow-2xl border-4 border-white aspect-[21/9] md:aspect-[3/1]">
            <img src={campusImg} alt="KIOT Campus" className="w-full h-full object-cover object-center" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#18357a]/40 via-transparent to-transparent" />
            
            {/* Subtle Overlay Lens Flare effect */}
            <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-tr from-transparent via-white/5 to-transparent pointer-events-none" />
          </div>
        </motion.div>

        {/* Full Width Paragraph Section */}
        <div className="max-w-5xl mx-auto mb-20 bg-white p-10 md:p-16 rounded-[3rem] border border-slate-100 shadow-xl shadow-black/5">
           <motion.div 
             initial={{ opacity: 0, y: 30 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             transition={{ duration: 0.7 }}
             className="space-y-8 text-[#333333] text-[16px] leading-[28.8px] font-normal font-graphik text-justify"
           >
              <p>
                Knowledge Institute of Technology (KIOT) was established by Knowledge Institute of Technology Trust (KIOT Trust) in 2009. Dr. PSS. Srinivasan is the Founder of the Trust. The KIOT Trust is a 41-member team: 20 of them are professors in engineering education and 21 of them are budding entrepreneurs.
              </p>
              <p>
                The Founder and President of the Trust, Dr. PSS. Srinivasan, is an IITian with 30+ years of rich academic, administrative and research experience and a recipient of Best Engineering College Principal Award from ISTE New Delhi and CSI Mumbai Chapter. He has visited 30+ Foreign Universities and 100+ Indian Institutions and has Global Exposure in Higher Education. At present, he is also the President of KIOT and takes care of Strategic Planning and Execution, Curriculum Design and Delivery, Research and Consultancy, International Connect and Incubation & Startups.
              </p>

              <div className="pt-6 border-t border-slate-100">
                <div className="p-8 rounded-[2rem] bg-[#f0f9f6] border border-[#d1e7dd]">
                  <h3 className="text-[#198754] text-xl font-graphik font-bold mb-4 tracking-wider uppercase">Academic Excellence</h3>
                    <p className="text-[#333333] text-[16px] leading-[28.8px] font-normal font-graphik">
                      Knowledge Institute of Technology (KIOT) is an Autonomous Institution, Affiliated to Anna University, Chennai and Approved by AICTE, New Delhi and UGC, New Delhi. The college offers nine B.E. / B.Tech. programs, four M.E. / M.Tech. programs in Engineering and Technology, MBA - Regular, MBA - IEV, MCA programs and Ph.D. programs in all the departments.
                    </p>
                    <p className="mt-4 text-[#333333] text-[16px] leading-[28.8px] font-normal font-graphik">
                      B.E. / B.Tech. programs are of 4 years duration with a total intake of 990. M.E., MBA and MCA programs are of 2 years duration with a total intake of 78 in M.E., 180 in MBA and 60 in MCA.
                    </p>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 pt-10">
                {[
                  { label: "1308 Intake / Year", icon: CheckCircle2 },
                  { label: "3500+ UG Students", icon: Users },
                  { label: "350+ PG Students", icon: Trophy },
                  { label: "50+ Ph.D. Scholars", icon: Target },
                  { label: "230+ Faculty", icon: BookOpen },
                  { label: "200+ Staff", icon: Users },
                ].map((stat, idx) => (
                  <motion.div 
                    key={idx} 
                    whileHover={{ scale: 1.02 }}
                    className="relative group overflow-hidden bg-white rounded-3xl p-5 border border-slate-200 shadow-lg hover:shadow-2xl transition-all duration-300 min-h-[140px] flex items-center"
                  >
                     {/* Permanent 3D Hexagon Background - Inspired by user image */}
                     <div className="absolute inset-0 z-0 opacity-20 pointer-events-none overflow-hidden bg-slate-50">
                        <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                           <defs>
                              <pattern id={`hexPattern-${idx}`} width="30" height="30" patternUnits="userSpaceOnUse" patternTransform="rotate(30)">
                                 {/* 3D Hexagon Shape */}
                                 <path d="M15 0 L28 7.5 L28 22.5 L15 30 L2 22.5 L2 7.5 Z" fill="white" stroke="#18357a" strokeWidth="0.8" />
                                 <path d="M15 0 L2 7.5 L2 22.5 L15 15 Z" fill="rgba(0,0,0,0.03)" /> {/* Side Shadow */}
                                 <circle cx="15" cy="15" r="1" fill="#ffc107" opacity="0.5" />
                              </pattern>
                           </defs>
                           <rect width="100" height="100" fill={`url(#hexPattern-${idx})`} />
                        </svg>
                     </div>

                     {/* Vibrant Blue Accent Strip */}
                     <div className="absolute top-0 left-0 bottom-0 w-1.5 bg-gradient-to-b from-[#18357a] to-[#ffc107]" />

                     {/* Content Layout - Compact */}
                     <div className="relative z-10 w-full flex items-center gap-5 px-3">
                        <div className="w-14 h-14 rounded-2xl bg-white shadow-md border border-slate-100 flex items-center justify-center text-[#18357a] group-hover:scale-110 transition-transform duration-500 flex-shrink-0">
                           <stat.icon size={26} />
                        </div>
                        
                        <div className="flex flex-col">
                           <span className="text-[24px] font-graphik font-black text-[#18357a] leading-none mb-1">
                              {stat.label.split(' ')[0]}
                           </span>
                           <span className="text-[11px] font-graphik font-black text-[#18357a] uppercase tracking-[0.1em] leading-tight opacity-90">
                              {stat.label.split(' ').slice(1).join(' ')}
                           </span>
                        </div>
                     </div>

                     {/* Hover Glow */}
                     <div className="absolute inset-0 bg-white/40 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
                  </motion.div>
                ))}
              </div>
           </motion.div>
        </div>

        {/* Vision Mission (Institutional Values) Section - Merged */}
        <div className="mb-16 -mx-5 sm:-mx-10 lg:-mx-20">
           <VisionMission />
        </div>

        {/* YouTube Video Section - Moved to Last */}
        <motion.div
           initial={{ opacity: 0, y: 30 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 0.8 }}
           className="max-w-7xl mx-auto px-2 sm:px-6"
        >
           <div className="bg-white p-4 sm:p-12 rounded-[2rem] sm:rounded-xl shadow-[0_40px_80px_rgba(24,53,122,0.08)] border border-slate-100 flex flex-col items-center gap-6 sm:gap-10">
              <div className="text-center">
                 <div className="inline-flex items-center gap-3 px-4 py-2 bg-[#ffc107]/5 rounded-full mb-2 sm:mb-4">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#ffc107]" />
                    <span className="text-[9px] sm:text-[10px] font-graphik font-bold text-[#18357a] uppercase tracking-widest">Experience KIOT</span>
                 </div>
                 <h2 className="text-xl sm:text-2xl font-graphik font-bold text-[#18357a] tracking-normal">Institutional <span className="text-[#18357a]">Walkthrough</span></h2>
              </div>

              <div className="relative w-full aspect-video rounded-2xl sm:rounded-[2rem] overflow-hidden border-2 sm:border-4 border-slate-50 shadow-inner group">
                 <iframe
                    className="absolute inset-0 w-full h-full"
                    src="https://www.youtube.com/embed/EaYFykcBtEs"
                    title="KIOT Institutional Video"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                 ></iframe>
              </div>

              <div className="text-center">
                 <p className="text-[11px] font-graphik font-bold text-slate-400 uppercase tracking-[0.25em]">A journey through Salem's premier technical hub</p>
              </div>
           </div>
        </motion.div>
      </section>
    </div>
  )
}

export default AboutUs

