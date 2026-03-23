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
      <div className="absolute bottom-1/4 left-0 w-[600px] h-[600px] bg-gradient-to-tr from-[#ffc107]/5 to-transparent rounded-tr-full pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10">
        
        {/* Header Section */}
        <div className="text-center mb-16">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <div className="inline-flex items-center gap-2.5 px-6 py-2.5 rounded-full bg-white border border-[#D5E2F4]/80 shadow-sm mb-8 hover:shadow-md transition-shadow cursor-default">
               <span className="relative flex h-3.5 w-3.5">
                 <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#ffc107] opacity-60"></span>
                 <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-[#e0a800]"></span>
               </span>
               <span className="text-sm font-black text-[#18357a] uppercase tracking-[0.15em]">The Minds Behind KIOT</span>
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-[5rem] font-black text-[#18357a] mb-8 tracking-tighter leading-[1.15] py-2">
              Leadership <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#18357a] via-[#224292] to-[#ffc107] inline-block px-4 pb-4">Voices</span>
            </h1>
            <p className="text-[#64779F] text-xl lg:text-2xl max-w-3xl mx-auto font-medium leading-relaxed">
              Meet the visionaries who are steering KIOT towards a future of global excellence and technical leadership.
            </p>
          </motion.div>
        </div>

        {/* Leadership Grid - Option 1: Profile Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12 mb-16">
          {leaders.map((leader, idx) => (
            <motion.div
              key={leader.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="group bg-white rounded-[40px] overflow-hidden shadow-[0_20px_50px_rgba(34,66,146,0.06)] hover:shadow-[0_40px_100px_rgba(34,66,146,0.12)] border border-[#D5E2F4]/40 transition-all duration-500 flex flex-col items-center p-8 text-center"
            >
              {/* Photo */}
              <div className="relative w-48 h-48 lg:w-56 lg:h-56 mb-8">
                 <div className="absolute inset-0 bg-[#ffc107] rounded-full rotate-6 scale-105 opacity-20 group-hover:rotate-12 transition-transform duration-500" />
                 <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-white shadow-xl bg-white">
                    <img 
                      src={leader.image} 
                      alt={leader.name} 
                      className={`w-full h-full object-cover ${leader.role !== 'Chairman' ? 'scale-[1.1]' : ''}`} 
                      style={leader.role !== 'Chairman' ? { objectPosition: 'center 15%' } : {}}
                    />
                 </div>
              </div>

              {/* Info */}
              <h3 className="text-2xl lg:text-3xl font-black text-[#18357a] font-display mb-1">{leader.name}</h3>
              <p className="text-[#ffc107] text-[11px] font-black uppercase tracking-[0.2em] mb-8">{leader.role}</p>

              <button 
                onClick={() => setSelectedLeader(leader)}
                className="mt-4 px-8 py-3.5 bg-white border-2 border-[#18357a]/10 rounded-full text-[#18357a] text-[11px] font-black uppercase tracking-widest hover:bg-[#18357a] hover:text-white transition-all transform hover:-translate-y-1"
              >
                Read Message →
              </button>
            </motion.div>
          ))}
        </div>

        {/* Vision Section */}
        <div className="bg-white rounded-[50px] p-10 lg:p-20 shadow-[0_40px_100px_rgba(34,66,146,0.08)] border border-[#D5E2F4]/40 relative overflow-hidden">
           <div className="absolute top-0 right-0 w-64 h-64 bg-[#ffc107]/10 rounded-full blur-[100px] -z-10" />
           <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-black text-[#18357a] font-display mb-4">Leadership Vision & Goals</h2>
              <div className="h-1.5 w-16 bg-[#ffc107] mx-auto rounded-full" />
           </div>

           <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-10">
              {visionGoals.map((goal, idx) => (
                <div key={idx} className="flex flex-col items-center text-center p-8 rounded-[40px] bg-[#F8FAFC] border border-white hover:border-[#ffc107]/30 hover:bg-white hover:shadow-2xl transition-all duration-500 group">
                   <div className="w-16 h-16 rounded-2xl bg-[#18357a] text-[#ffc107] flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform">
                      <goal.icon size={32} />
                   </div>
                   <span className="text-[12px] lg:text-[14px] font-black text-[#18357a] uppercase tracking-wider leading-relaxed pr-2">
                     {goal.text}
                   </span>
                </div>
              ))}
           </div>
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
                      <p key={i} className="text-[#64779F] text-sm lg:text-base font-medium leading-relaxed">
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
