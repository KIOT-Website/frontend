import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { BookOpen, Users, Trophy, Target, CheckCircle2, ArrowRight, ArrowDown } from 'lucide-react'
import campusImg from '../../assets/about campus.webp'

const AboutUs = () => {
  const [showAcademicStats, setShowAcademicStats] = useState(false);

  return (
    <div className="relative bg-[#FCFDFD] pt-32 pb-20 min-h-screen overflow-hidden">
      
      {/* Decorative Brand Background */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-to-bl from-[#18357a]/5 to-transparent rounded-bl-full pointer-events-none" />
      <div className="absolute -top-10 -left-10 w-40 h-40 bg-[radial-gradient(#18357a_2px,transparent_2px)] [background-size:16px_16px] opacity-10" />

      <section className="relative px-5 sm:px-10 lg:px-20 z-10 max-w-7xl mx-auto">
        
        {/* Page Header */}
        <div className="text-center mb-16 lg:mb-24">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex flex-col items-center"
          >
            <div className="inline-flex items-center gap-2.5 px-6 py-2.5 rounded-full bg-white border border-[#D5E2F4]/80 shadow-sm mb-8 hover:shadow-md transition-shadow cursor-default">
               <span className="relative flex h-3.5 w-3.5">
                 <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#ffc107] opacity-60"></span>
                 <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-[#e0a800]"></span>
               </span>
               <span className="text-sm font-black text-[#18357a] uppercase tracking-[0.15em]">Our Heritage</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-[3.5rem] font-black text-[#18357a] mb-8 tracking-tighter leading-[1.1] text-wrap">
              About the <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#18357a] via-[#224292] to-[#ffc107] inline-block uppercase">KIOT Institution</span>
            </h1>
          </motion.div>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-[#64779F] text-lg lg:text-[22px] max-w-3xl mx-auto font-medium leading-relaxed"
          >
            A premier institution committed to nurturing the next generation of engineers, innovators, and leaders through world-class academic standards.
          </motion.p>
        </div>

        {/* Story Section */}
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start mb-24">
           {/* Left Image Side */}
           <motion.div 
             initial={{ opacity: 0, x: -40 }}
             whileInView={{ opacity: 1, x: 0 }}
             viewport={{ once: true }}
             transition={{ duration: 0.7 }}
             className="relative lg:sticky lg:top-32"
           >
              <div className="relative rounded-[2.5rem] overflow-hidden border-4 border-white shadow-[0_30px_60px_rgba(34,66,146,0.12)]">
                <img src={campusImg} alt="KIOT Campus" className="w-full h-auto aspect-[4/5] sm:aspect-square object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#18357a]/40 to-transparent" />
              </div>
              
              {/* Floating Stat Card */}
              <div className="absolute -bottom-8 -right-4 sm:-right-8 bg-white p-6 rounded-3xl shadow-[0_20px_40px_rgba(0,0,0,0.1)] border border-[#F1F5F9] max-w-[200px] animate-[bounce_6s_infinite]">
                 <div className="w-12 h-12 bg-[#ffc107]/20 rounded-2xl flex items-center justify-center text-[#e0a800] mb-4">
                    <Trophy size={24} />
                 </div>
                 <h4 className="text-3xl font-black text-[#18357a] mb-1 leading-none">A Grade</h4>
                 <p className="text-xs font-bold text-[#64779F] uppercase tracking-widest">NAAC Accredited</p>
              </div>
           </motion.div>

           {/* Right Content */}
           <motion.div 
             initial={{ opacity: 0, x: 40 }}
             whileInView={{ opacity: 1, x: 0 }}
             viewport={{ once: true }}
             transition={{ duration: 0.7 }}
           >
              <h2 className="text-3xl lg:text-4xl font-black text-[#18357a] mb-8 leading-tight uppercase tracking-tight">
                Our Foundation & <span className="text-[#ffc107]">Leadership</span>
              </h2>
              <div className="space-y-6 text-[#64779F] text-[17px] leading-relaxed font-medium">
                <p>
                  Knowledge Institute of Technology (KIOT) was established by Knowledge Institute of Technology Trust (KIOT Trust) in 2009. Dr. PSS. Srinivasan is the Founder of the Trust. The KIOT Trust is a 41-member team: 20 of them are professors in engineering education and 21 of them are budding entrepreneurs.
                </p>
                <p>
                  The Founder and President of the Trust, Dr. PSS. Srinivasan, is an IITian with 30+ years of rich academic, administrative and research experience and a recipient of Best Engineering College Principal Award from ISTE New Delhi and CSI Mumbai Chapter. He has visited 30+ Foreign Universities and 100+ Indian Institutions and has Global Exposure in Higher Education. At present, he is also the Executive Chairman of KIOT and takes care of Strategic Planning and Execution, Curriculum Design and Delivery, Research and Consultancy, International Connect and Incubation & Startups.
                </p>
              </div>

              {!showAcademicStats && (
                <button 
                  onClick={() => setShowAcademicStats(true)}
                  className="mt-10 group inline-flex items-center gap-3 bg-[#18357a] text-white px-8 py-4 rounded-2xl font-black text-sm uppercase tracking-widest hover:bg-[#224292] transition-all shadow-lg hover:shadow-[#18357a]/30 active:scale-95"
                >
                  Read More
                  <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </button>
              )}

              <AnimatePresence>
                {showAcademicStats && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                    className="overflow-hidden"
                  >
                    <div className="pt-10 space-y-8">
                       <div className="p-8 rounded-[2rem] bg-[#f0f9f6] border border-[#d1e7dd]">
                          <h3 className="text-[#198754] text-xl font-black mb-4 uppercase tracking-wider">Academic Excellence</h3>
                          <div className="space-y-4 text-[#64779F] font-medium leading-relaxed">
                            <p>
                              Knowledge Institute of Technology (KIOT) is an Autonomous Institution, Affiliated to Anna University, Chennai and Approved by AICTE, New Delhi and UGC, New Delhi. The college offers nine B.E. / B.Tech. programs, four M.E. / M.Tech. programs in Engineering and Technology, MBA - Regular, MBA - IEV, MCA programs and Ph.D. programs in all the departments.
                            </p>
                            <p>
                              B.E. / B.Tech. programs are of 4 years duration with a total intake of 990. M.E., MBA and MCA programs are of 2 years duration with a total intake of 78 in M.E., 180 in MBA and 60 in MCA.
                            </p>
                          </div>
                       </div>

                       <div className="grid sm:grid-cols-2 gap-4">
                          {[
                            { label: "1308 Intake / Year", color: "#18357a" },
                            { label: "3000+ UG Students", color: "#e0a800" },
                            { label: "350+ PG Students", color: "#18357a" },
                            { label: "50+ Ph.D. Scholars", color: "#e0a800" },
                            { label: "230+ Faculty", color: "#18357a" },
                            { label: "200+ Staff", color: "#e0a800" },
                          ].map((stat, idx) => (
                            <div key={idx} className="flex items-center gap-4 bg-white p-4 rounded-2xl border border-[#F1F5F9] shadow-sm">
                               <div className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0" style={{ backgroundColor: `${stat.color}10`, color: stat.color }}>
                                 <CheckCircle2 size={20} />
                               </div>
                               <span className="font-bold text-[#18357a]">{stat.label}</span>
                            </div>
                          ))}
                       </div>

                       <button 
                        onClick={() => setShowAcademicStats(false)}
                        className="group inline-flex items-center gap-3 text-[#18357a] font-black text-sm uppercase tracking-widest hover:text-[#224292] transition-all"
                      >
                        Show Less
                        <ArrowDown size={18} className="rotate-180 group-hover:-translate-y-1 transition-transform" />
                      </button>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
           </motion.div>
        </div>

        {/* YouTube Video Section */}
        <motion.div
           initial={{ opacity: 0, y: 30 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 0.8 }}
           className="mt-16 lg:mt-24 max-w-4xl mx-auto px-4"
        >
           <div className="relative w-full aspect-video rounded-[2.5rem] overflow-hidden border-4 border-white">
              <iframe
                 className="absolute inset-0 w-full h-full"
                 src="https://www.youtube.com/embed/EaYFykcBtEs"
                 title="KIOT Institutional Video"
                 frameBorder="0"
                 allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                 allowFullScreen
              ></iframe>
           </div>
           <div className="text-center mt-8">
              <p className="text-sm font-black text-[#64779F] uppercase tracking-[0.2em]">Experience our campus life</p>
           </div>
        </motion.div>

      </section>
    </div>
  )
}

export default AboutUs

