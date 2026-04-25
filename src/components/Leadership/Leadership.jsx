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
    role: "Trustee",
    designation: "Trustee, KIOT (B.E., M.E., Ph.D., FIE.)",
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
    <div className="relative bg-[#FCFDFD] pt-4 pb-20 min-h-screen overflow-hidden font-graphik">
            {/* Decorative Background Elements - To break the "too much white" feel */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-gradient-to-bl from-[#18357a]/5 via-transparent to-transparent rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-[40%] right-[-5%] w-[400px] h-[400px] bg-[#18357a]/3 rounded-full blur-[80px] pointer-events-none" />
      
      {/* Subtle Grid Pattern Overlay */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" 
           style={{ backgroundImage: 'radial-gradient(#18357a 0.5px, transparent 0.5px)', backgroundSize: '30px 30px' }} />

      <div className="relative z-10 w-full px-6 lg:px-12">
        
        {/* SECTION 1: CINEMATIC HERO SECTION */}
        <div className="relative pt-8 pb-12 mb-6 overflow-hidden">
          <div className="max-w-7xl mx-auto flex flex-col items-center text-center">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="flex flex-col items-center"
            >
              {/* Badge Removed per request */}
              
              <h1 className="text-4xl md:text-5xl lg:text-[4.5rem] font-graphik font-bold text-[#18357a] mb-6 tracking-tighter leading-tight">
                Institutional <span className="text-[#ffc107]">Leadership</span>
              </h1>
              
              <p className="text-[#333333] text-[17px] leading-[1.6] font-medium font-graphik max-w-4xl mx-auto mb-8 opacity-80">
                Driven by a collective vision of academic excellence and technical innovation, our leadership team brings together the expertise of world-class researchers and visionary entrepreneurs.
              </p>

              <div className="flex flex-wrap justify-center gap-6 mt-6">
                 {[
                   { label: "Academicians", value: "22", icon: GraduationCap },
                   { label: "Professionals", value: "07", icon: Briefcase },
                   { label: "Entrepreneurs", value: "15", icon: Microscope }
                 ].map((stat, i) => (
                   <div key={i} className="flex flex-col items-center group cursor-default">
                      <div className="px-6 py-2 bg-white border border-slate-100 rounded-full shadow-sm group-hover:border-[#ffc107]/50 transition-all duration-300">
                        <div className="text-xl font-bold text-[#18357a]">{stat.value}</div>
                      </div>
                      <div className="text-[9px] font-bold text-[#333333] uppercase tracking-[0.2em] mt-3 opacity-60 group-hover:opacity-100 transition-opacity font-graphik">{stat.label}</div>
                   </div>
                 ))}
              </div>
            </motion.div>
          </div>
        </div>

        {/* SECTION 2: KIOT TRUST COMPOSITION (MODERN DATA CARDS) - Tinted Background */}
        <div className="max-w-7xl mx-auto mb-12 relative">
          {/* Subtle Background Tint for Section Contrast */}
          <div className="absolute inset-x-[-100vw] top-[-20px] bottom-[-20px] bg-[#18357a]/[0.02] pointer-events-none" />
          
          <div className="bg-transparent md:bg-white rounded-none md:rounded-[3rem] p-0 md:p-16 border-none md:border border-[#D5E2F4]/60 relative overflow-hidden">
             <div className="absolute top-0 right-0 w-64 h-64 bg-[#ffc107]/5 rounded-full -mr-32 -mt-32 blur-3xl" />
             
             <div className="relative z-10 grid lg:grid-cols-2 gap-12 items-start">
                <div className="space-y-8">
                   <div className="inline-block px-4 py-1.5 bg-[#18357a]/5 rounded-lg">
                      <span className="text-[11px] font-bold text-[#18357a] uppercase tracking-widest">About the Trust</span>
                   </div>
                    <h2 className="text-4xl lg:text-6xl font-bold text-[#18357a] tracking-tighter leading-tight">
                       The Foundation of <span className="text-[#ffc107]">Excellence</span>
                    </h2>
                    <div className="space-y-6 text-[#333333] text-[15px] sm:text-[16px] leading-[1.7] font-normal text-left md:text-justify">
                      <p>
                        KIOT Trust is a unique synergy of 22 Academicians, 7 International Professionals, and 15 First-Generation Entrepreneurs. This diverse composition ensures that our education remains grounded in academic rigor while staying agile to industry demands.
                      </p>
                      <p>
                        Our promoters directly engage in teaching and career mentoring, bringing decades of research and administrative experience from across the globe to the classroom.
                      </p>
                   </div>
                </div>

                <div className="grid grid-cols-1 gap-6">
                   {/* Modern Composition Card 1 */}
                   <div className="group bg-[#FCFDFD] p-8 rounded-3xl border border-slate-100 hover:border-[#18357a]/20 transition-all duration-300">
                      <div className="flex items-center gap-4 mb-6">
                         <div className="w-12 h-12 rounded-xl bg-[#18357a] text-white flex items-center justify-center">
                            <GraduationCap size={24} />
                         </div>
                         <h3 className="text-lg font-bold text-[#18357a] uppercase tracking-tight">Academic Core</h3>
                      </div>
                      <div className="space-y-4">
                         {[
                           { label: "Ph.D. in Engineering & Tech", value: "22", percent: 60 },
                           { label: "Ph.D. in Science", value: "02", percent: 10 }
                         ].map((item, i) => (
                           <div key={i} className="space-y-2">
                              <div className="flex justify-between text-[13px] font-bold text-[#64779F]">
                                 <span>{item.label}</span>
                                 <span className="text-[#18357a]">{item.value} Members</span>
                              </div>
                              <div className="h-1.5 w-full bg-slate-100 rounded-full overflow-hidden">
                                 <motion.div 
                                   initial={{ width: 0 }}
                                   whileInView={{ width: `${item.percent}%` }}
                                   className="h-full bg-[#18357a] rounded-full"
                                 />
                              </div>
                           </div>
                         ))}
                      </div>
                   </div>

                   {/* Modern Composition Card 2 */}
                   <div className="group bg-[#FCFDFD] p-8 rounded-3xl border border-slate-100 hover:border-[#ffc107]/20 transition-all duration-300">
                      <div className="flex items-center gap-4 mb-6">
                         <div className="w-12 h-12 rounded-xl bg-[#ffc107] text-[#18357a] flex items-center justify-center">
                            <Briefcase size={24} />
                         </div>
                         <h3 className="text-lg font-bold text-[#18357a] uppercase tracking-tight">Industry & Enterprise</h3>
                      </div>
                      <div className="space-y-4">
                         {[
                           { label: "Entrepreneurs & Businessmen", value: "15", percent: 45 },
                           { label: "Global Professionals", value: "07", percent: 25 }
                         ].map((item, i) => (
                           <div key={i} className="space-y-2">
                              <div className="flex justify-between text-[13px] font-bold text-[#64779F]">
                                 <span>{item.label}</span>
                                 <span className="text-[#18357a]">{item.value} Members</span>
                              </div>
                              <div className="h-1.5 w-full bg-slate-100 rounded-full overflow-hidden">
                                 <motion.div 
                                   initial={{ width: 0 }}
                                   whileInView={{ width: `${item.percent}%` }}
                                   className="h-full bg-[#ffc107] rounded-full"
                                 />
                              </div>
                           </div>
                         ))}
                      </div>
                   </div>
                </div>
             </div>
          </div>
        </div>

        {/* SECTION 3: REFINED DIRECTORY LISTING - Modern Grid Format */}
        <div className="max-w-7xl mx-auto mb-16 px-4">
           <div className="text-center mb-10">
              <h3 className="text-2xl font-graphik font-bold text-[#18357a] tracking-tight mb-2">Directory of KIOT Trust Members</h3>
              <div className="w-16 h-1 bg-[#ffc107] mx-auto rounded-full" />
           </div>

           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
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
                "Mr.Karuppiah Muthu B.A.",
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
                <div 
                  key={i} 
                  className="bg-[#F8FAFC] p-5 rounded-2xl border border-slate-100 flex items-start gap-4 hover:border-[#18357a]/20 transition-all duration-300 group"
                >
                   <span className="text-[13px] font-medium text-[#333333] leading-[1.4] font-graphik group-hover:text-[#18357a] transition-colors">{name}</span>
                </div>
              ))}
           </div>
        </div>

        {/* Leadership Voices Section */}
        <div className="text-center mb-8">
          <div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#18357a] mb-4 tracking-tighter font-graphik">
              Voices of <span className="text-[#ffc107]">Leadership</span>
            </h1>
            <p className="text-[#333333] text-[15px] font-bold max-w-2xl mx-auto text-center opacity-80 font-graphik">
              Guidance and perspective from the leaders shaping the institutional vision and daily excellence of KIOT.
            </p>
          </div>
        </div>

        {/* Leadership Grid - Option 1: Profile Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-16 mb-10 px-4 relative">
           {/* Section specific design element */}
           <div className="absolute inset-x-[-100vw] top-0 bottom-0 bg-[#ffc107]/[0.015] -z-10" />
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
              <div className="flex flex-col items-center">
                <h3 className="text-xl lg:text-2xl font-graphik font-bold text-[#333333] mb-2 text-center leading-tight">
                  {leader.name}
                </h3>
                <p className="text-[14px] font-graphik font-bold text-[#333333] mb-6 text-center opacity-80">
                  {leader.role}
                </p>
                <button 
                  onClick={() => setSelectedLeader(leader)}
                  className="px-8 py-3 bg-[#18357a] text-white rounded-full text-[12px] font-graphik font-bold uppercase tracking-widest hover:bg-[#ffc107] hover:text-[#18357a] transition-all duration-300"
                >
                  Read Message
                </button>
              </div>
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
                      <p key={i} className="text-[#333333] text-[16px] leading-[28.8px] font-normal font-graphik text-justify">
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
