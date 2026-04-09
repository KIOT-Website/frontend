import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { CheckCircle2, Quote, X, GraduationCap, Briefcase, Microscope, Heart } from 'lucide-react'

// Asset imports
import chairmanImg from '../../assets/Executive-Chairman.webp'
import principalImg from '../../assets/KIOT-Principal-Message-Web-2025.webp'
import secretaryImg from '../../assets/Secretarys-Message-KIOTT.webp'

const leaders = [
  {
    id: 1,
    name: "Dr. PSS. Srinivasan",
    role: "Chairman",
    designation: "Founder & Executive Chairman (B.E., M.Tech. (IIT-B), Ph.D., MISTE., ISHMT., FMFPI.)",
    image: chairmanImg,
    fullMessage: [
      "Welcome to the Trend Setters’ Paradise,",
      "God has created the earth, you and me create a heaven on it. Every individual has innate talents. It is only our attitude that decides outcome.",
      "Yes, we at KIOT have got rich experience on Engineering Education in India and abroad. We know the art of identifying individual talents, nurture them as talented engineers and professionals and make them world class professionals. If you are prepared to be a path breaking professionals poised to make miracles on the earth, the right destination is KIOT. Learn from the masters who know nothing less than excellence. Come on; let us all make a happy heaven on the earth.",
      "With love and affection,"
    ]
  },
  {
    id: 3,
    name: "Dr. K. Visagavel",
    role: "Principal",
    designation: "Principal, KIOT (B.E., M.E., Ph.D., FIE.)",
    image: principalImg,
    fullMessage: [
      "Dear Students, Welcome to the Knowledge Institute of Technology, Salem!",
      "At KIOT, we aim to provide a transformative education that blends academic rigor with practical skills to shape the leaders of tomorrow.",
      "We at KIOT are committed to fostering a holistic learning environment, enriched by state-of-the-art infrastructure, industry collaborations, and extracurricular opportunities. I encourage you to actively participate in academic and co-curricular activities, network with peers and mentors, and embrace the culture of continuous learning.",
      "Remember, your journey at KIOT is not just about earning a degree; it is about transforming your potential into purpose. Together, let us strive to make a positive difference in our communities and the world.",
      "Wishing you a fulfilling and successful academic journey ahead!"
    ]
  },
  {
    id: 5,
    name: "Dr. J. Kumar",
    role: "Secretary",
    designation: "Secretary, KIOTT (B.E., M.Tech. (IIT-M), Ph.D., FIE.)",
    image: secretaryImg,
    fullMessage: [
      "Greetings!",
      "We are dedicated to providing our students with a world-class learning experience that prepares them for the challenges ahead, in addition to delivering a superior education. Through our collaborations with universities worldwide, we have come to understand education as a journey that goes beyond just academic achievement.",
      "The latest curriculum, paired with modern insights into engineering, technology, and research, along with innovative facilities, ensures that each student gains a substantial edge in advanced technical expertise and competencies. I extend a warm welcome to you at KIOT and all the opportunities it presents. Join us and immerse yourself in the KIOT experience!"
    ]
  }
]

const visionGoals = [
  { text: "Student-Centric Education", icon: GraduationCap },
  { text: "Industry Collaboration", icon: Briefcase },
  { text: "Innovation & Research", icon: Microscope },
  { text: "Ethical Values", icon: Heart }
]

const Leadership = () => {
  const [selectedLeader, setSelectedLeader] = useState(null)
 
  // Disable body scroll when modal is open
  useEffect(() => {
    if (selectedLeader) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => { document.body.style.overflow = '' }
  }, [selectedLeader])

  return (
    <div className="relative bg-[#FCFDFD] pt-16 pb-20 min-h-screen overflow-hidden">
      
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-to-bl from-[#18357a]/5 to-transparent rounded-bl-full pointer-events-none" />

      <div className="relative z-10 w-full px-6 lg:px-12">
        
        {/* Main Page Header - Refined to match About Us style */}
        <div className="text-center mb-16 lg:mb-24 pt-10">
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
               <span className="text-sm font-black text-[#18357a] uppercase tracking-[0.15em]">Management & Governance</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-[3.5rem] font-black text-[#18357a] mb-8 tracking-tight leading-[1.1] text-wrap">
              Institutional <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#18357a] via-[#224292] to-[#ffc107] inline-block uppercase">Leadership</span>
            </h1>
          </motion.div>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-[#333333] text-[16px] leading-[28.8px] font-normal font-inter max-w-3xl mx-auto"
          >
            Meet the collective wisdom of researchers, academicians, and entrepreneurs driving KIOT towards a future of global excellence and technical leadership.
          </motion.p>
        </div>

        {/* Promoters' Profile Section */}
        <div className="mb-20">
          <div className="relative z-10 w-full">
            {/* Minimalist Section Header Design (Updated) */}
            <div className="flex flex-col items-center mb-16 text-center">
               <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-[#18357a] uppercase tracking-tighter mb-12">
                  The Trust <span className="text-[#ffc107]">Collective</span>
               </h2>
            </div>

            <div className="px-4">
              {/* Introduction Text - Standardized Styling */}
              <div className="mx-auto mb-16 max-w-4xl space-y-6">
                <p className="text-[#333333] text-[15px] leading-[26px] font-normal font-inter text-justify">
                  KIOT Trust is the right combination of 22 Academicians in Engineering, 7 working Professionals in India and Abroad and 15 Budding First-Generation Entrepreneurs with a strong acumen to achieve greater heights in life.
                </p>
                <p className="text-[#333333] text-[15px] leading-[26px] font-normal font-inter text-justify">
                  Most of the promoters have rich experience in Teaching, Research and Administration of Engineering Institutions with National and International Exposure. The composition of the team itself is a testimony to the Quality of Education offered at KIOT. Most of the promoters themselves directly engage in teaching and career moulding of students.
                </p>
              </div>

              {/* Composition Dashboards */}
              <div className="grid lg:grid-cols-2 gap-8 mb-16">
                 {/* Table 1: Qualification */}
                 <motion.div 
                    whileHover={{ scale: 1.01 }}
                    className="bg-white rounded-[2.5rem] border border-[#D5E2F4]/60 p-8 shadow-xl shadow-slate-200/20 flex flex-col transition-all duration-500"
                 >
                    <h3 className="text-[#18357a] font-black text-[12px] uppercase tracking-[0.2em] mb-8 flex items-center gap-3">
                       <div className="w-1 h-6 bg-[#ffc107] rounded-full" />
                       Composition By Qualification
                    </h3>
                    <div className="space-y-1 flex-1">
                       {[
                         { label: "Ph.D. in Engineering and Technology", value: "22" },
                         { label: "B.E./M.E.", value: "14" },
                         { label: "Diploma in Engineering and Technology", value: "04" },
                         { label: "Ph.D. in Science", value: "02" },
                         { label: "UG/PG degree in Arts and Science", value: "05" }
                       ].map((item, i) => (
                         <div key={i} className="flex items-center justify-between py-2.5 border-b border-slate-50 last:border-0 hover:bg-slate-50 transition-colors px-4 rounded-xl group/row">
                            <span className="text-[13px] font-bold text-[#64779F] group-hover/row:text-[#18357a] transition-colors">{item.label}</span>
                            <span className="text-[#18357a] font-black text-base">{item.value}</span>
                         </div>
                       ))}
                    </div>
                 </motion.div>

                 {/* Table 2: Activity */}
                 <motion.div 
                    whileHover={{ scale: 1.01 }}
                    className="bg-white rounded-[2.5rem] border border-[#D5E2F4]/60 p-8 shadow-xl shadow-slate-200/20 flex flex-col transition-all duration-500"
                 >
                    <h3 className="text-[#18357a] font-black text-[12px] uppercase tracking-[0.2em] mb-8 flex items-center gap-3">
                       <div className="w-1 h-6 bg-[#18357a] rounded-full" />
                       Composition by Activity
                    </h3>
                    <div className="space-y-1 flex-1">
                       {[
                         { label: "Principals of Leading Institutions", value: "05" },
                         { label: "Faculty with 10 to 25 yrs of experience", value: "17" },
                         { label: "Professionals Employed Abroad", value: "05" },
                         { label: "Professionals Employed in India", value: "02" },
                         { label: "Budding Entrepreneurs & Businessmen", value: "15" }
                       ].map((item, i) => (
                         <div key={i} className="flex items-center justify-between py-2.5 border-b border-slate-50 last:border-0 hover:bg-slate-50 transition-colors px-4 rounded-xl group/row">
                            <span className="text-[13px] font-bold text-[#64779F] group-hover/row:text-[#18357a] transition-colors">{item.label}</span>
                            <span className="text-[#18357a] font-black text-base">{item.value}</span>
                         </div>
                       ))}
                    </div>
                 </motion.div>
              </div>

              {/* Trust Members List - Two Columns */}
              <div className="bg-[#18357a] rounded-[3.5rem] p-10 lg:p-16 relative overflow-hidden">
                <div className="absolute bottom-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-[100px] -mr-48 -mb-48" />
                <h3 className="text-[#ffc107] font-black text-[10px] uppercase tracking-[0.4em] mb-12 text-center">Directory of KIOT Trust Members</h3>
                
                <div className="grid md:grid-cols-2 gap-x-12 gap-y-0.5">
                   <div className="space-y-0.5">
                      {[
                        "Dr. PSS. Srinivasan B.E., M.Tech. (IIT-B), Ph.D., MISTE., ISHMT., FMFPI.",
                        "Dr.J.Kumar B.E., M.Tech. (IIT-M), Ph.D., FIE",
                        "Mr. V. Sureshkumar B.E.",
                        "Mr. R. Muthusamy",
                        "Mr.N.P.Sivaprasad B.E.,",
                        "Mr. C. Balakrishnan D.M.E.",
                        "Mr. P. Sengottuvel B.E.",
                        "Mr. P. Rathinam D.P.E.",
                        "Dr. P. Rajendran M.E., Ph.D.",
                        "Dr.P.Navaneetha Krishnan B.E., M.E., Ph.D.",
                        "Dr. M. Thangavel B.E., M.E., Ph.D.",
                        "Dr. V. Kumar B.E., M.E., Ph.D.",
                        "Dr.K.Visagavel B.E., M.E., Ph.D.",
                        "Mr.K.K.Elavarasan M.E., M.S.",
                        "Mrs.K.Indhirani",
                        "Mr.Karuppiah Muthu B.A."
                      ].map((name, i) => (
                        <div key={i} className="flex gap-4 p-3 rounded-xl hover:bg-white/5 transition-colors border-b border-white/5 last:border-0 group">
                           <span className="text-[#ffc107] font-black text-[10px] shrink-0 w-6 opacity-30 group-hover:opacity-100">{i + 1}</span>
                           <span className="text-white font-bold text-[12px] leading-tight">{name}</span>
                        </div>
                      ))}
                   </div>
                   <div className="space-y-0.5">
                      {[
                        "Mrs.S.Kavitha B.A.",
                        "Mrs.Kokila Tirunavukkarasu B.Sc., MBA",
                        "Mr.E.Krishnamoorthy B.E.",
                        "Mr. R. Mahalingam D.T.T.",
                        "Mrs.R.Pavayee",
                        "Mrs.S.Pavayee",
                        "Mr. S. Prabhakaran B.E.",
                        "Mr. M.P. Prabhu B.E., MBA",
                        "Mr. G.S. Ramakrishnan B.E., Dip.(SAP)",
                        "Prof.D.Sakthivel B.E., M.E., D.B.A., MISTE",
                        "Mrs. V. Sangeetha B.A., M.A. (Eng.Lit.)",
                        "Mr. N. Sezhiyan B.E., M.Tech.",
                        "Dr. A. Velumani B.E., M.E., Ph.D.",
                        "Mr.PSS.Vignesh",
                        "Mrs. S. Vijaya B.Sc.",
                        "Dr.AMJ Md. Zubair Rahman B.E., M.E., Ph.D."
                      ].map((name, i) => (
                        <div key={i + 17} className="flex gap-4 p-3 rounded-xl hover:bg-white/5 transition-colors border-b border-white/5 last:border-0 group">
                           <span className="text-[#ffc107] font-black text-[10px] shrink-0 w-6 opacity-30 group-hover:opacity-100">{i + 17}</span>
                           <span className="text-white font-bold text-[12px] leading-tight">{name}</span>
                        </div>
                      ))}
                   </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Leadership Voices Section */}
        <div className="text-center mb-16">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-3xl md:text-5xl font-black text-[#18357a] mb-6 tracking-tighter uppercase">
              Leadership <span className="text-[#ffc107]">Voices</span>
            </h1>
            <p className="text-[#64779F] text-[15px] font-bold max-w-2xl mx-auto text-center">
              Guidance and perspective from the leaders shaping the institutional vision and daily excellence of KIOT.
            </p>
          </motion.div>
        </div>

        {/* Leadership Grid - Option 1: Profile Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-16 mb-10 px-4">
          {leaders.map((leader, idx) => (
            <motion.div
              key={leader.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="relative group bg-white pt-10 pb-10 px-8 flex flex-col items-center text-center transition-all duration-500 rounded-[3rem]"
            >
              <div className="absolute inset-0 border-[3px] border-slate-100 rounded-[3rem] transition-all duration-500 group-hover:border-[#18357a]/10" />
              <div className="absolute top-0 right-0 w-24 h-24 border-t-[3px] border-r-[3px] border-[#18357a]/40 rounded-tr-[3rem] -mr-[1px] -mt-[1px] transition-all duration-700 group-hover:border-[#18357a]" />
              <div className="absolute bottom-0 left-0 w-24 h-24 border-b-[3px] border-l-[3px] border-[#ffc107]/40 rounded-bl-[3rem] -ml-[1px] -mb-[1px] transition-all duration-700 group-hover:border-[#ffc107]" />

              <div className="relative w-40 h-40 lg:w-48 lg:h-48 mb-6 flex items-center justify-center z-10">
                 <div className="absolute inset-[-10px] rounded-full border border-slate-100 group-hover:rotate-180 transition-transform duration-1000 border-dashed" />
                 <div className="absolute inset-[-5px] rounded-full p-[2px] bg-gradient-to-b from-[#18357a] via-[#1a3a8a]/20 to-transparent group-hover:rotate-90 transition-transform duration-700">
                    <div className="w-full h-full rounded-full bg-white" />
                 </div>
                 <div className="relative w-full h-full rounded-full overflow-hidden border-[1px] border-[#18357a]/10 shadow-2xl bg-white z-10">
                    <img src={leader.image} alt={leader.name} className="w-full h-full object-cover" />
                 </div>
              </div>

              <h3 className="text-xl lg:text-2xl font-black text-[#18357a] font-display mb-1">{leader.name}</h3>
              <p className="text-[#ffc107] text-[10px] font-black uppercase tracking-[0.2em] mb-6">{leader.role}</p>

              <button 
                onClick={() => setSelectedLeader(leader)}
                className="relative z-10 px-8 py-3.5 bg-white border-2 border-[#18357a]/10 rounded-full text-[#18357a] text-[11px] font-black uppercase tracking-widest hover:bg-[#18357a] hover:text-white transition-all transform hover:-translate-y-1 shadow-sm"
              >
                Read Message →
              </button>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Modal / Expanded Message */}
      <AnimatePresence>
        {selectedLeader && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-6 sm:p-10 overflow-hidden">
            <motion.div 
               initial={{ opacity: 0 }}
               animate={{ opacity: 1 }}
               exit={{ opacity: 0 }}
               onClick={() => setSelectedLeader(null)}
               className="absolute inset-0 bg-[#18357a]/50 backdrop-blur-xl"
            />
            <motion.div
              layoutId={selectedLeader.id}
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="relative w-full max-w-5xl bg-white rounded-[40px] shadow-[0_50px_100px_rgba(24,53,122,0.25)] overflow-hidden flex flex-col md:flex-row max-h-[90vh]"
            >
               <button 
                 onClick={() => setSelectedLeader(null)}
                 className="absolute top-6 right-6 z-10 p-4 bg-[#F8FAFC] rounded-full text-[#18357a] hover:bg-red-50 hover:text-red-500 transition-colors"
               >
                 <X size={24} />
               </button>

               {/* Left Sidebar in Modal */}
               <div className="w-full md:w-[350px] bg-[#18357a] p-10 py-16 flex flex-col items-center justify-center text-center shrink-0">
                  <div className="w-40 h-40 lg:w-48 lg:h-48 rounded-full overflow-hidden border-8 border-white/10 mb-8 shadow-2xl bg-white">
                    <img 
                      src={selectedLeader.image} 
                      alt={selectedLeader.name} 
                      className={`w-full h-full object-cover ${selectedLeader.role !== 'Chairman' ? 'scale-[1.1]' : ''}`} 
                      style={selectedLeader.role !== 'Chairman' ? { objectPosition: 'center 15%' } : {}}
                    />
                  </div>
                  <h3 className="text-xl lg:text-2xl font-black text-white font-display mb-2">{selectedLeader.name}</h3>
                  <p className="text-[#ffc107] text-[10px] font-black uppercase tracking-[0.2em] mb-8 leading-relaxed">
                    {selectedLeader.designation}
                  </p>
                  
                  {/* Qualifications/Badges Removed as requested */}
               </div>

               {/* Message Body */}
               <div className="flex-1 p-10 lg:p-16 overflow-y-auto custom-scrollbar">
                  <Quote size={48} className="text-[#ffc107]/20 mb-6" />
                  <h2 className="text-2xl lg:text-3xl font-black text-[#18357a] font-display mb-8">{selectedLeader.role} Message</h2>
                  <div className="space-y-6">
                    {selectedLeader.fullMessage.map((p, i) => (
                      <p key={i} className="text-[#333333] text-[16px] leading-[28.8px] font-normal font-inter text-justify">
                        {p}
                      </p>
                    ))}
                  </div>
                  <div className="mt-12 pt-8 border-t border-[#D5E2F4]">
                     <p className="text-[#18357a] font-black italic">Warm Regards,</p>
                     <p className="text-[#18357a] font-black text-xl mt-1">{selectedLeader.name}</p>
                  </div>
               </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </div>
  )
}

export default Leadership