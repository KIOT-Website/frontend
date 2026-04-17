import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { CheckCircle2, Quote, X, GraduationCap, Briefcase, Microscope, Heart } from 'lucide-react'

// Asset imports
import chairmanImg from '../../assets/main/Executive-Chairman.webp'
import principalImg from '../../assets/main/KIOT-Principal-Message-Web-2025.webp'
import secretaryImg from '../../assets/main/Secretarys-Message-KIOTT.webp'

const leaders = [
  {
    id: 1,
    name: "Dr. PSS. Srinivasan",
    role: "President",
    designation: "Founder & President (B.E., M.Tech. (IIT-B), Ph.D., MISTE., ISHMT., FMFPI.)",
    image: chairmanImg,
    fullMessage: [
      "Welcome to the Trend Setters’ Paradise,",
      "God has created the earth, you and me create a heaven on it. Every individual has innate talents. It is only our attitude that decides outcome.",
      "Yes, we at KIOT have got rich experience on Engineering Education in India and abroad. We know the art of identifying individual talents, nurture them as talented engineers and professionals and make them world class professionals. If you are prepared to be a path breaking professionals poised to make miracles on the earth, the right destination is KIOT. Learn from the masters who know nothing less than excellence. Come on; let us all make a happy heaven on the earth.",
      "With love and affection,"
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
    <div className="relative bg-[#FCFDFD] pt-10 pb-20 min-h-screen overflow-hidden font-graphik">
      
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-to-bl from-[#18357a]/5 to-transparent rounded-bl-full pointer-events-none" />

      <div className="relative z-10 w-full px-6 lg:px-12">
        
        {/* Main Page Header - Refined to match About Us style */}
        <div className="text-center mb-12 lg:mb-16 pt-5">
          <div className="flex flex-col items-center">
            <div className="inline-flex items-center gap-2.5 px-6 py-2.5 rounded-full bg-white border border-[#D5E2F4]/80 shadow-sm mb-8 transition-shadow cursor-default font-graphik">
               <span className="relative flex h-3.5 w-3.5">
                 <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-[#18357a]"></span>
               </span>
               <span className="text-sm font-bold text-[#18357a] uppercase tracking-[0.15em]">Management & Governance</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-[3.5rem] font-bold text-[#18357a] mb-8 tracking-tight leading-[1.1] text-wrap font-graphik">
              Institutional <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#18357a] via-[#18357a] to-[#18357a] inline-block">Leadership</span>
            </h1>
          </div>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-[#333333] text-[16px] leading-[28.8px] font-normal font-graphik max-w-3xl mx-auto"
          >
            Meet the collective wisdom of researchers, academicians, and entrepreneurs driving KIOT towards a future of global excellence and technical leadership.
          </motion.p>
        </div>

        {/* Promoters' Profile Section */}
        <div className="mb-10">
          <div className="relative z-10 w-full">
            {/* Minimalist Section Header Design (Updated) */}
            <div className="flex flex-col items-center mb-4 text-center">
               <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#18357a] tracking-tighter mb-4 font-graphik">
                  KIOT <span className="text-[#18357a]">Trust</span>
               </h2>
            </div>

            <div className="px-4">
              {/* Introduction Text - Standardized Styling */}
              <div className="mx-auto mb-16 max-w-4xl space-y-6">
                <p className="text-[#333333] text-[15px] leading-[26px] font-normal font-graphik text-justify">
                  KIOT Trust is the right combination of 22 Academicians in Engineering, 7 working Professionals in India and Abroad and 15 Budding First-Generation Entrepreneurs with a strong acumen to achieve greater heights in life.
                </p>
                <p className="text-[#333333] text-[15px] leading-[26px] font-normal font-graphik text-justify">
                  Most of the promoters have rich experience in Teaching, Research and Administration of Engineering Institutions with National and International Exposure. The composition of the team itself is a testimony to the Quality of Education offered at KIOT. Most of the promoters themselves directly engage in teaching and career moulding of students.
                </p>
              </div>

              {/* Composition Dashboards */}
              <div className="grid lg:grid-cols-2 gap-8 mb-16">
                 {/* Table 1: Qualification */}
                 <div 
                    
                    className="bg-white rounded-xl border border-[#D5E2F4]/60 p-8 shadow-xl shadow-slate-200/20 flex flex-col transition-all duration-500"
                 >
                    <h3 className="text-[#18357a] font-graphik font-bold text-[12px] uppercase tracking-[0.2em] mb-8 flex items-center gap-3">
                       <div className="w-1 h-6 bg-[#18357a] rounded-full" />
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
                            <span className="text-[#18357a] font-graphik font-bold text-base">{item.value}</span>
                         </div>
                       ))}
                    </div>
                 </div>

                 {/* Table 2: Activity */}
                 <div 
                    
                    className="bg-white rounded-xl border border-[#D5E2F4]/60 p-8 shadow-xl shadow-slate-200/20 flex flex-col transition-all duration-500"
                 >
                    <h3 className="text-[#18357a] font-graphik font-bold text-[12px] uppercase tracking-[0.2em] mb-8 flex items-center gap-3">
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
                            <span className="text-[#18357a] font-graphik font-bold text-base">{item.value}</span>
                         </div>
                       ))}
                    </div>
                 </div>
              </div>

              {/* Trust Members List - Two Columns - Full width on mobile */}
              <div className="bg-[#18357a] rounded-2xl p-8 sm:p-12 lg:p-16 relative overflow-hidden -mx-4 sm:mx-0 font-graphik">
                <div className="absolute bottom-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-[100px] -mr-48 -mb-48" />
                <h3 className="text-white font-bold text-[15px] sm:text-[18px] lg:text-[20px] uppercase tracking-[0.4em] mb-12 text-center px-4 leading-relaxed font-graphik">
                   Directory of KIOT Trust Members
                </h3>
                
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
                        <div key={i} className="flex gap-4 p-3 rounded-xl border-b border-white/5 last:border-0">
                           <span className="text-white/30 font-bold text-[10px] shrink-0 w-6 font-graphik">{i + 1}</span>
                           <span className="text-white font-medium text-[12px] leading-tight font-graphik">{name}</span>
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
                        <div key={i + 17} className="flex gap-4 p-3 rounded-xl border-b border-white/5 last:border-0">
                           <span className="text-white/30 font-bold text-[10px] shrink-0 w-6 font-graphik">{i + 17}</span>
                           <span className="text-white font-medium text-[12px] leading-tight font-graphik">{name}</span>
                        </div>
                      ))}
                   </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Leadership Voices Section */}
        <div className="text-center mb-8">
          <div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-3xl md:text-5xl font-bold text-[#18357a] mb-6 tracking-tighter font-graphik">
              Leadership <span className="text-[#18357a]">Voices</span>
            </h1>
            <p className="text-[#64779F] text-[15px] font-bold max-w-2xl mx-auto text-center">
              Guidance and perspective from the leaders shaping the institutional vision and daily excellence of KIOT.
            </p>
          </div>
        </div>

        {/* Leadership Grid - Option 1: Profile Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-16 mb-10 px-4">
          {leaders.map((leader, idx) => (
            <div
              key={leader.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="relative group bg-white pt-10 pb-10 px-8 flex flex-col items-center text-center rounded-2xl border border-slate-100 shadow-sm font-graphik"
            >
              {/* Simplified Layout */}

              <div className="relative w-40 h-40 lg:w-48 lg:h-48 mb-6 flex items-center justify-center z-10">
                 <div className="absolute inset-[-10px] rounded-full border border-slate-100 group-hover:rotate-180 transition-transform duration-1000 border-dashed" />
                 <div className="absolute inset-[-5px] rounded-full p-[2px] bg-gradient-to-b from-[#18357a] via-[#1a3a8a]/20 to-transparent group-hover:rotate-90 transition-transform duration-700">
                    <div className="w-full h-full rounded-full bg-white" />
                 </div>
                 <div className="relative w-full h-full rounded-full overflow-hidden border-[1px] border-[#18357a]/10 shadow-2xl bg-white z-10">
                    <img src={leader.image} alt={leader.name} className="w-full h-full object-cover" />
                 </div>
              </div>

              <h3 className="text-xl lg:text-2xl font-bold text-[#18357a] mb-1 font-graphik">{leader.name}</h3>
              <p className="text-[#18357a] text-[10px] font-bold uppercase tracking-[0.2em] mb-6 font-graphik">{leader.role}</p>

              <button 
                onClick={() => setSelectedLeader(leader)}
                className="relative z-10 px-8 py-3.5 bg-[#18357a] rounded-full text-white text-[11px] font-bold uppercase tracking-widest hover:bg-[#224292] transition-colors shadow-sm font-graphik"
              >
                Read Message
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Modal / Expanded Message */}
      <AnimatePresence>
        {selectedLeader && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-6 sm:p-10 overflow-hidden">
            <div 
               initial={{ opacity: 0 }}
               animate={{ opacity: 1 }}
               exit={{ opacity: 0 }}
               onClick={() => setSelectedLeader(null)}
               className="absolute inset-0 bg-[#18357a]/50 backdrop-blur-xl"
            />
            <div
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

               {/* Top/Left Sidebar in Modal - Reduced vertical footprint on mobile */}
               <div className="w-full md:w-[320px] bg-[#18357a] p-8 md:py-16 flex flex-col items-center justify-center text-center shrink-0">
                  <div className="w-32 h-32 lg:w-48 lg:h-48 rounded-full overflow-hidden border-4 md:border-8 border-white/10 mb-4 md:mb-8 shadow-2xl bg-white">
                    <img 
                      src={selectedLeader.image} 
                      alt={selectedLeader.name} 
                      className={`w-full h-full object-cover ${selectedLeader.role !== 'President' ? 'scale-[1.1]' : ''}`} 
                      style={selectedLeader.role !== 'President' ? { objectPosition: 'center 15%' } : {}}
                    />
                  </div>
                  <h3 className="text-lg lg:text-2xl font-graphik font-bold text-white font-graphik mb-1">{selectedLeader.name}</h3>
                  <p className="text-[#18357a] text-[9px] sm:text-[10px] font-graphik font-bold uppercase tracking-[0.2em] mb-2 md:mb-8 leading-relaxed px-4">
                    {selectedLeader.designation}
                  </p>
               </div>

                {/* Message Body - Expanded space */}
                <div className="flex-1 p-8 sm:p-10 lg:p-16 overflow-y-auto custom-scrollbar">
                   <Quote size={40} className="text-[#18357a]/20 mb-4" />
                   <h2 className="text-xl lg:text-3xl font-graphik font-bold text-[#18357a] font-graphik mb-6">{selectedLeader.role} Message</h2>
                  <div className="space-y-6">
                    {selectedLeader.fullMessage.map((p, i) => (
                      <p key={i} className="text-[#333333] text-[16px] leading-[28.8px] font-normal font-inter text-justify">
                        {p}
                      </p>
                    ))}
                  </div>
                  <div className="mt-12 pt-8 border-t border-[#D5E2F4]">
                     <p className="text-[#18357a] font-graphik font-bold italic">Warm Regards,</p>
                     <p className="text-[#18357a] font-graphik font-bold text-xl mt-1">{selectedLeader.name}</p>
                  </div>
               </div>
            </div>
          </div>
        )}
      </AnimatePresence>

    </div>
  )
}

export default Leadership
