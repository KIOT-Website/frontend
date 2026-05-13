import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence, useInView, useSpring } from 'framer-motion'
import { CheckCircle2, Quote, X, GraduationCap, Briefcase, Microscope, Heart } from 'lucide-react'

const CountUpNumber = ({ value, duration = 2 }) => {
  const [count, setCount] = useState(0)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })
  
  useEffect(() => {
    if (isInView) {
      let start = 0
      const end = parseInt(value)
      if (start === end) return
      
      let totalMiliseconds = duration * 1000
      let incrementTime = totalMiliseconds / end
      
      let timer = setInterval(() => {
        start += 1
        setCount(start)
        if (start === end) clearInterval(timer)
      }, incrementTime)
      
      return () => clearInterval(timer)
    }
  }, [isInView, value, duration])
  
  return <span ref={ref}>{count}</span>
}

// Asset imports
import chairmanImg from '../../assets/main/srinivasan.webp'
import principalImg from '../../assets/main/KIOT-Principal-Message-Web-2025.webp'
import secretaryImg from '../../assets/main/Secretarys-Message-KIOTT.webp'
import treasurerImg from '../../assets/main/Mr.V.Sureshkumar, Treasurer.webp'

const leaders = [
  {
    id: 1,
    name: "Dr. PSS. Srinivasan",
    role: "Founder and President",
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
    id: 4,
    name: "Mr. V. Sureshkumar",
    role: "Treasurer",
    designation: "Treasurer, KIOTT (B.E.)",
    image: treasurerImg,
    fullMessage: [
      "Greetings!",
      "We are dedicated to providing our students with a world-class learning experience that prepares them for the challenges ahead, in addition to delivering a superior education. Through our collaborations with universities worldwide, we have come to understand education as a journey that goes beyond just academic achievement.",
      "The latest curriculum, paired with modern insights into engineering, technology, and research, along with innovative facilities, ensures that each student gains a substantial edge in advanced technical expertise and competencies.",
      "I extend a warm welcome to you at KIOT and all the opportunities it presents. Join us and immerse yourself in the KIOT experience!"
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
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-gradient-to-bl from-[#224292]/5 via-transparent to-transparent rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-[40%] right-[-5%] w-[400px] h-[400px] bg-[#224292]/3 rounded-full blur-[80px] pointer-events-none" />
      
      {/* Subtle Grid Pattern Overlay */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" 
           style={{ backgroundImage: 'radial-gradient(#224292 0.5px, transparent 0.5px)', backgroundSize: '30px 30px' }} />

      {/* Side Background Graphics - Hex/Circle shapes from the reference image */}
      <div className="absolute top-[10%] right-[-120px] w-[600px] h-[600px] opacity-[0.04] pointer-events-none hidden lg:block select-none">
         <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="w-full h-full fill-[#ffc107]">
            <path d="M44.7,-76.4C58.1,-69.2,70.1,-58.5,77.4,-45.4C84.7,-32.3,87.2,-16.1,86.1,-0.6C85,14.8,80.3,29.7,72.4,42.4C64.5,55.1,53.4,65.6,40.3,72.1C27.2,78.6,13.6,81,0.1,80.8C-13.4,80.6,-26.8,77.7,-39.5,71.1C-52.2,64.5,-64.1,54.1,-71.8,41.5C-79.5,28.8,-83,14.4,-82.7,0.2C-82.4,-14.1,-78.2,-28.1,-70.3,-40.4C-62.4,-52.7,-50.8,-63.3,-37.6,-70.7C-24.3,-78.1,-12.2,-82.3,1.3,-84.5C14.7,-86.7,29.4,-87,44.7,-76.4Z" transform="translate(100 100)" />
         </svg>
      </div>
      <div className="absolute top-[15%] right-[-50px] w-[300px] h-[300px] opacity-[0.02] pointer-events-none hidden lg:block select-none scale-150">
         <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="0.5" className="w-full h-full text-[#ffc107]">
            <path d="M12 2L2 7L2 17L12 22L22 17L22 7L12 2Z" />
         </svg>
      </div>

      <div className="relative z-10 w-full px-6 lg:px-12">
                {/* SECTION 1: CINEMATIC HERO SECTION */}
        <div className="relative pt-16 pb-24 mb-6 overflow-hidden">
          {/* Background Graphics like the image */}
          <div className="absolute top-10 left-10 opacity-20 hidden lg:block">
            <div className="grid grid-cols-4 gap-2">
              {[...Array(16)].map((_, i) => <div key={i} className="w-1 h-1 bg-[#224292] rounded-full" />)}
            </div>
          </div>
          <div className="absolute bottom-20 right-10 opacity-20 hidden lg:block">
            <div className="grid grid-cols-4 gap-2">
              {[...Array(16)].map((_, i) => <div key={i} className="w-1 h-1 bg-[#224292] rounded-full" />)}
            </div>
          </div>
          
          <div className="max-w-7xl mx-auto flex flex-col items-center text-center">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="flex flex-col items-center"
            >
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-graphik font-semibold text-[#224292] mb-4 tracking-tighter leading-tight">
                Institutional <span className="text-[#ffc107]">Leadership</span>
              </h1>

              {/* Heading Divider with Dot */}
              <div className="flex items-center gap-2 mb-8">
                <div className="w-12 h-[1px] bg-[#ffc107]" />
                <div className="w-2 h-2 rounded-full bg-[#ffc107]" />
                <div className="w-12 h-[1px] bg-[#ffc107]" />
              </div>
              

              <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-10 mt-12 max-w-6xl mx-auto w-full px-4">
                 {[
                   { label: "Academicians", value: "22", icon: GraduationCap, desc: "Experienced academicians driving academic excellence and innovation.", color: "#224292" },
                   { label: "Professionals", value: "07", icon: Briefcase, desc: "Industry professionals contributing expertise and practical insights.", color: "#ffc107" },
                   { label: "Entrepreneurs", value: "15", icon: Microscope, desc: "Visionary entrepreneurs inspiring innovation and leadership.", color: "#224292" }
                 ].map((stat, i) => (
                   <div key={i} className="bg-white rounded-[2rem] p-8 pt-12 shadow-[0_15px_40px_rgba(0,0,0,0.04)] border border-slate-100 flex flex-col items-center text-center relative group hover:-translate-y-2 transition-all duration-500">
                      {/* Top Icon Box - Always Blue in the image */}
                      <div className="absolute top-0 -translate-y-1/2 w-16 h-16 bg-[#1e3a8a] text-white rounded-2xl flex items-center justify-center shadow-[0_10px_30px_rgba(30,58,138,0.3)] z-20">
                         <stat.icon size={28} />
                      </div>
                      
                      {/* Content */}
                      <div className="flex-1 flex flex-col items-center justify-center">
                        <div className="flex items-center justify-center gap-1 mb-2">
                           <span className="text-4xl font-bold text-[#1e3a8a] tracking-tighter">
                             <CountUpNumber value={stat.value} />
                           </span>
                           <span className="text-[#ffc107] text-3xl font-bold">+</span>
                        </div>
                        <h4 className="text-[13px] font-bold text-[#1e3a8a] uppercase tracking-[0.2em] mb-4">{stat.label}</h4>
                        <p className="text-[12px] text-black font-medium leading-relaxed px-4">{stat.desc}</p>
                      </div>

                      {/* Thick Curved Bottom Accent */}
                      <div 
                        className="absolute bottom-0 left-0 right-0 h-8 rounded-b-[2rem] opacity-90" 
                        style={{ 
                          backgroundColor: stat.color === '#224292' ? '#1e3a8a' : '#ffc107',
                          clipPath: 'ellipse(100% 100% at 50% 100%)' 
                        }} 
                      />
                   </div>
                 ))}
              </div>
            </motion.div>
          </div>
        </div>


        {/* SECTION 2: KIOT TRUST COMPOSITION (MODERN DATA CARDS) - Tinted Background */}
        <div className="max-w-7xl mx-auto mb-12 relative">
          {/* Subtle Background Tint for Section Contrast */}
          <div className="absolute inset-x-[-100vw] top-[-20px] bottom-[-20px] bg-[#224292]/[0.02] pointer-events-none" />
          
          <div className="bg-transparent md:bg-white rounded-none md:rounded-[3rem] p-0 md:p-16 border-none md:border border-[#D5E2F4]/60 relative overflow-hidden">
             <div className="absolute top-0 right-0 w-64 h-64 bg-[#ffc107]/5 rounded-full -mr-32 -mt-32 blur-3xl" />
             
             <div className="relative z-10 grid lg:grid-cols-2 gap-12 items-start">
                <div className="space-y-8">
                   <div className="inline-block px-4 py-1.5 bg-[#224292]/5 rounded-lg">
                      <span className="text-[11px] font-bold text-[#224292] tracking-widest">About the Trust</span>
                   </div>
                    <h2 className="text-3xl lg:text-[42px] font-semibold text-[#224292] tracking-tighter leading-tight">
                       The Foundation of <span className="text-[#ffc107]">Excellence</span>
                    </h2>
                     <div className="space-y-6 text-black text-[15px] sm:text-[16px] leading-[1.7] font-normal text-left md:text-justify">
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
                   <div className="group bg-[#FCFDFD] p-8 rounded-3xl border border-slate-100 hover:border-[#224292]/20 transition-all duration-300">
                      <div className="flex items-center gap-4 mb-6">
                         <div className="w-12 h-12 rounded-xl bg-[#224292] text-white flex items-center justify-center">
                            <GraduationCap size={24} />
                         </div>
                         <h3 className="text-lg font-bold text-[#224292] tracking-tight">Academic Core</h3>
                      </div>
                      <div className="space-y-4">
                         {[
                           { label: "Ph.D. in Engineering & Tech", value: "22", percent: 60 },
                           { label: "Ph.D. in Science", value: "02", percent: 10 }
                         ].map((item, i) => (
                           <div key={i} className="space-y-2">
                              <div className="flex justify-between text-[13px] font-bold text-black">
                                 <span>{item.label}</span>
                                 <span className="text-[#224292]">{item.value} Members</span>
                              </div>
                              <div className="h-1.5 w-full bg-slate-100 rounded-full overflow-hidden">
                                 <motion.div 
                                   initial={{ width: 0 }}
                                   whileInView={{ width: `${item.percent}%` }}
                                   className="h-full bg-[#224292] rounded-full"
                                 />
                              </div>
                           </div>
                         ))}
                      </div>
                   </div>

                   {/* Modern Composition Card 2 */}
                   <div className="group bg-[#FCFDFD] p-8 rounded-3xl border border-slate-100 hover:border-[#ffc107]/20 transition-all duration-300">
                      <div className="flex items-center gap-4 mb-6">
                         <div className="w-12 h-12 rounded-xl bg-[#ffc107] text-[#224292] flex items-center justify-center">
                            <Briefcase size={24} />
                         </div>
                         <h3 className="text-lg font-bold text-[#224292] tracking-tight">Industry & Enterprise</h3>
                      </div>
                      <div className="space-y-4">
                         {[
                           { label: "Entrepreneurs & Businessmen", value: "15", percent: 45 },
                           { label: "Global Professionals", value: "07", percent: 25 }
                         ].map((item, i) => (
                           <div key={i} className="space-y-2">
                              <div className="flex justify-between text-[13px] font-bold text-black">
                                 <span>{item.label}</span>
                                 <span className="text-[#224292]">{item.value} Members</span>
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
              <h3 className="text-xl font-graphik font-semibold text-[#224292] tracking-tight mb-2">Directory of KIOT Trust Members</h3>
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
                  className="bg-[#F8FAFC] p-5 rounded-2xl border border-slate-100 flex items-start gap-4 hover:border-[#224292]/20 transition-all duration-300 group"
                >
                   <span className="text-[13px] font-medium text-black leading-[1.4] font-graphik group-hover:text-[#224292] transition-colors">{name}</span>
                </div>
              ))}
           </div>
        </div>

        {/* Leadership Voices Section */}
        <div className="text-center mb-8">
          <div>
            <h1 className="text-3xl md:text-4xl lg:text-[42px] font-semibold text-[#224292] mb-4 tracking-tighter font-graphik">
              Voices of <span className="text-[#ffc107]">Leadership</span>
            </h1>
            <p className="text-black text-[15px] font-bold max-w-2xl mx-auto text-center opacity-90 font-graphik">
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
                 <div className="absolute inset-[-5px] rounded-full p-[2px] bg-gradient-to-b from-[#224292] via-[#1a3a8a]/20 to-transparent group-hover:rotate-90 transition-transform duration-700">
                    <div className="w-full h-full rounded-full bg-white" />
                 </div>
                 <div className="relative w-full h-full rounded-full overflow-hidden border-[1px] border-[#224292]/10 shadow-2xl bg-white z-10">
                    <img 
                      src={leader.image} 
                      alt={leader.name} 
                      className={`w-full h-full object-cover ${(leader.name.includes('Kumar') || leader.name.includes('Visagavel')) ? 'scale-[1.12]' : ''}`} 
                    />
                 </div>
              </div>
              <div className="flex flex-col items-center">
                <h3 className="text-xl lg:text-2xl font-graphik font-bold text-black mb-2 text-center leading-tight">
                  {leader.name}
                </h3>
                <p className="text-[14px] font-graphik font-bold text-black mb-6 text-center opacity-80">
                  {leader.role}
                </p>
                <button 
                  onClick={() => setSelectedLeader(leader)}
                  className="px-8 py-3 bg-[#224292] text-white rounded-full text-[12px] font-graphik font-bold tracking-widest hover:bg-[#ffc107] hover:text-[#224292] transition-all duration-300"
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
               className="absolute inset-0 bg-[#224292]/50 backdrop-blur-xl"
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
                 className="absolute top-6 right-6 z-10 p-4 bg-[#F8FAFC] rounded-full text-[#224292] hover:bg-red-50 hover:text-red-500 transition-colors"
               >
                 <X size={24} />
               </button>

               {/* Top/Left Sidebar in Modal - Reduced vertical footprint on mobile */}
               <div className="w-full md:w-[320px] bg-[#224292] p-8 md:py-16 flex flex-col items-center justify-center text-center shrink-0">
                  <div className="w-32 h-32 lg:w-48 lg:h-48 rounded-full overflow-hidden border-4 md:border-8 border-white/10 mb-4 md:mb-8 shadow-2xl bg-white">
                    <img 
                      src={selectedLeader.image} 
                      alt={selectedLeader.name} 
                      className={`w-full h-full object-cover ${selectedLeader.role !== 'President' ? 'scale-[1.1]' : ''}`} 
                      style={selectedLeader.role !== 'President' ? { objectPosition: 'center 15%' } : {}}
                    />
                  </div>
                  <h3 className="text-lg lg:text-2xl font-graphik font-bold text-white font-graphik mb-1">{selectedLeader.name}</h3>
                  <p className="text-[#224292] text-[9px] sm:text-[10px] font-graphik font-bold tracking-[0.2em] mb-2 md:mb-8 leading-relaxed px-4">
                    {selectedLeader.designation}
                  </p>
               </div>

                {/* Message Body - Expanded space */}
                <div className="flex-1 p-8 sm:p-10 lg:p-16 overflow-y-auto custom-scrollbar">
                   <Quote size={40} className="text-[#224292]/20 mb-4" />
                   <h2 className="text-xl lg:text-3xl font-graphik font-bold text-[#224292] font-graphik mb-6">{selectedLeader.role} Message</h2>
                  <div className="space-y-6">
                    {selectedLeader.fullMessage.map((p, i) => (
                      <p key={i} className="text-black text-[16px] leading-[28.8px] font-normal font-graphik text-justify">
                        {p}
                      </p>
                    ))}
                  </div>
                  <div className="mt-12 pt-8 border-t border-[#D5E2F4]">
                     <p className="text-[#224292] font-graphik font-bold italic">Warm Regards,</p>
                     <p className="text-[#224292] font-graphik font-bold text-xl mt-1">{selectedLeader.name}</p>
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
