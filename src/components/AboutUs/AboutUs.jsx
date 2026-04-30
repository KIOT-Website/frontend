import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { BookOpen, Users, Trophy, Target, CheckCircle2, ArrowRight, ArrowDown } from 'lucide-react'
import campusImg from '../../assets/main/campus .webp'
import VisionMission from '../VisionMission/VisionMission'

const AboutUs = () => {
  const [showAcademicStats, setShowAcademicStats] = useState(false);

  return (
    <div className="relative bg-[#FCFDFD] pt-10 md:pt-16 pb-10 md:pb-16 min-h-screen overflow-hidden">
      
      {/* Decorative Brand Background */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-to-bl from-[#224292]/5 to-transparent rounded-bl-full pointer-events-none" />
      <div className="absolute -top-10 -left-10 w-40 h-40 bg-[radial-gradient(#224292_2px,transparent_2px)] [background-size:16px_16px] opacity-10" />

      <section className="relative px-5 sm:px-10 lg:px-20 z-10 max-w-7xl mx-auto">
        
        {/* Page Header - Centered */}
        <div className="text-center mb-12 lg:mb-16">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex flex-col items-center"
          >
            <h1 className="text-4xl md:text-5xl lg:text-[4rem] font-graphik font-bold text-[#224292] mb-4 tracking-tighter leading-tight">
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
          className="max-w-7xl mx-auto mb-10 md:mb-16 px-4 md:px-0"
        >
          <div className="relative rounded-2xl md:rounded-[2rem] overflow-hidden shadow-2xl border-0 md:border-4 border-white h-[320px] md:h-auto md:aspect-[3/1]">
            <img src={campusImg} alt="KIOT Campus" className="w-full h-full object-cover object-[70%_center] md:object-center" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#224292]/40 via-transparent to-transparent" />
            
            {/* Subtle Overlay Lens Flare effect */}
            <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-tr from-transparent via-white/5 to-transparent pointer-events-none" />
          </div>
        </motion.div>

        {/* Full Width Paragraph Section */}
        <div className="max-w-5xl mx-auto mb-10 md:mb-14 bg-transparent md:bg-white p-0 md:p-16 rounded-none md:rounded-[3rem] border-none md:border border-slate-100 shadow-none md:shadow-xl shadow-black/5">
           <motion.div 
             initial={{ opacity: 0, y: 30 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             transition={{ duration: 0.7 }}
             className="space-y-8 text-[#333333] text-[15px] sm:text-[16px] leading-[1.7] font-normal font-graphik text-justify"
           >
              <p>
                Knowledge Institute of Technology (KIOT) was established by Knowledge Institute of Technology Trust (KIOT Trust) in 2009. Dr. PSS. Srinivasan is the Founder of the Trust. The KIOT Trust is a 41-member team: 20 of them are professors in engineering education and 21 of them are budding entrepreneurs.
              </p>
              <p>
                The Founder and President of the Trust, Dr. PSS. Srinivasan, is an IITian with 30+ years of rich academic, administrative and research experience and a recipient of Best Engineering College Principal Award from ISTE New Delhi and CSI Mumbai Chapter. He has visited 30+ Foreign Universities and 100+ Indian Institutions and has Global Exposure in Higher Education. At present, he is also the President of KIOT and takes care of Strategic Planning and Execution, Curriculum Design and Delivery, Research and Consultancy, International Connect and Incubation & Startups.
              </p>

              <div className="pt-6 border-t border-slate-100">
                <div className="p-8 rounded-[2rem] bg-[#f0f9f6] border border-[#d1e7dd]">
                  <h3 className="text-[#198754] text-xl font-graphik font-bold mb-4 tracking-wider">Academic Excellence</h3>
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
                  { label: "1308 Intake / Year", icon: CheckCircle2, color: "#224292" },
                  { label: "3500+ UG Students", icon: Users, color: "#224292" },
                  { label: "350+ PG Students", icon: Trophy, color: "#224292" },
                  { label: "50+ Ph.D. Scholars", icon: Target, color: "#224292" },
                  { label: "230+ Faculty", icon: BookOpen, color: "#224292" },
                  { label: "200+ Staff", icon: Users, color: "#224292" },
                ].map((stat, idx) => (
                  <motion.div 
                    key={idx} 
                    whileHover={{ y: -5 }}
                    className="relative group bg-[#FCFDFD] rounded-2xl p-6 border border-[#224292]/5 hover:border-[#224292]/20 transition-all duration-300 min-h-[120px] flex items-center shadow-sm hover:shadow-xl hover:shadow-[#224292]/5"
                  >
                     {/* Clean minimalist design - No background pattern */}
                     <div className="flex items-center gap-5 w-full">
                        <div className="w-14 h-14 rounded-xl bg-white border border-[#224292]/10 flex items-center justify-center text-[#224292] group-hover:bg-[#224292] group-hover:text-white transition-all duration-500 flex-shrink-0 shadow-sm">
                           <stat.icon size={26} strokeWidth={1.5} />
                        </div>
                        
                        <div className="flex flex-col">
                           <span className="text-[28px] font-graphik font-bold text-[#224292] leading-tight">
                              {stat.label.split(' ')[0]}
                           </span>
                           <span className="text-[12px] font-graphik font-bold text-[#64779F] tracking-wider leading-tight">
                              {stat.label.split(' ').slice(1).join(' ')}
                           </span>
                        </div>
                     </div>

                     {/* Subtle corner accent */}
                     <div className="absolute top-0 right-0 w-12 h-12 bg-gradient-to-bl from-[#ffc107]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-tr-2xl" />
                  </motion.div>
                ))}
              </div>
           </motion.div>
        </div>

        {/* Vision Mission (Institutional Values) Section - Merged */}
        <div className="mb-10 md:mb-12 -mx-5 sm:-mx-10 lg:-mx-20">
           <div className="text-center mb-10">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-graphik font-bold text-[#224292] tracking-tight">
                Our Institutional <span className="text-[#ffc107]">Values</span>
              </h2>
           </div>
           <VisionMission hideHeader={true} />
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
                    <span className="text-[9px] sm:text-[10px] font-graphik font-bold text-[#224292] tracking-widest">Experience KIOT</span>
                 </div>
                 <h2 className="text-xl sm:text-2xl font-graphik font-bold text-[#224292] tracking-normal">Institutional <span className="text-[#224292]">Walkthrough</span></h2>
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
                 <p className="text-[11px] font-graphik font-bold text-slate-400 tracking-[0.25em]">A journey through Salem's premier technical hub</p>
              </div>
           </div>
        </motion.div>
      </section>
    </div>
  )
}

export default AboutUs

