import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { CheckCircle2, Quote, X, GraduationCap, Briefcase, Microscope, Heart } from 'lucide-react'

// Asset imports (Assuming these will be copied correctly)
import chairmanImg from '../assets/leader_chairman.png'
import directorImg from '../assets/leader_director.png'
import principalImg from '../assets/leader_principal.png'

const leaders = [
  {
    id: 1,
    name: "Dr. PSS. Srinivasan",
    role: "Chairman",
    designation: "Chairman, KIOT Group of Institutions",
    image: chairmanImg,
    preview: "Education is not just learning, but a journey of transformation...",
    fullMessage: [
      "Education is not just learning, but a journey of transformation that prepares young minds for a life of purpose and excellence. At KIOT, we don't just teach engineering; we cultivate the spirit of innovation and the foundation of character.",
      "Since our inception, our mission has been to bridge the gap between rural potential and global opportunities. We believe every student has a unique spark that, when nurtured with the right environment and mentorship, can illuminate the world.",
      "Our focus on discipline, practical exposure, and ethical values ensures that our graduates are not just successful professionals, but responsible citizens of tomorrow."
    ]
  },
  {
    id: 2,
    name: "Dr. K. Visagavel",
    role: "Director",
    designation: "Director, Academic Excellence",
    image: directorImg,
    preview: "We believe in shaping disciplined professionals who lead with integrity...",
    fullMessage: [
      "We believe in shaping disciplined professionals who lead with integrity. Our academic frameworks are designed to challenge the status quo and push the boundaries of traditional learning.",
      "By integrating industry需求 directly into our curriculum, we ensure that every student at KIOT is career-ready from day one. Our partnerships with top-tier global corporations provide a launchpad for our students' dreams.",
      "Education here is a collaborative effort between dedicated faculty and motivated students, fueled by our state-of-the-art infrastructure."
    ]
  },
  {
    id: 3,
    name: "Dr. P. Rajendran",
    role: "Principal",
    designation: "Principal, KIOT",
    image: principalImg,
    preview: "Fostering a culture of innovation, research, and holistic growth...",
    fullMessage: [
      "Fostering a culture of innovation, research, and holistic growth is at the core of our institutional DNA. As Principal, it is my pride to see our campus buzzing with energy, creativity, and the pursuit of knowledge.",
      "We emphasize 'Learning by Doing'. Our advanced laboratories and research centers are where theory meets practice, and where problems find sustainable solutions.",
      "Join us in this journey of making KIOT a beacon of technical education and a home for future-ready innovators."
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

  return (
    <div className="relative bg-[#FCFDFD] pt-32 pb-20 min-h-screen overflow-hidden">
      
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-to-bl from-[#18357a]/5 to-transparent rounded-bl-full pointer-events-none" />
      <div className="absolute bottom-1/4 left-0 w-[600px] h-[600px] bg-gradient-to-tr from-[#ffc107]/5 to-transparent rounded-tr-full pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10">
        
        {/* Header Section */}
        <div className="text-center mb-16 lg:mb-24">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#18357a]/5 border border-[#18357a]/10 mb-6"
          >
             <span className="text-[10px] font-black uppercase tracking-[0.3em] text-[#18357a]">The Minds Behind KIOT</span>
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl lg:text-6xl font-black text-[#18357a] font-display mb-6 tracking-tight"
          >
            Leadership <span className="text-[#ffc107]">Voices</span>
          </motion.h1>
          <p className="text-[#64779F] text-lg lg:text-xl max-w-2xl mx-auto font-medium leading-relaxed">
            Meet the visionaries who are steering KIOT towards a future of global excellence and technical leadership.
          </p>
        </div>

        {/* Leadership Grid - Option 1: Profile Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12 mb-20 lg:mb-32">
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
                 <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-white shadow-xl">
                    <img src={leader.image} alt={leader.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                 </div>
              </div>

              {/* Info */}
              <h3 className="text-2xl lg:text-3xl font-black text-[#18357a] font-display mb-1">{leader.name}</h3>
              <p className="text-[#ffc107] text-[11px] font-black uppercase tracking-[0.2em] mb-6">{leader.role}</p>
              
              <div className="bg-[#F8FAFC] p-6 rounded-[32px] mb-8 w-full group-hover:bg-[#18357a]/5 transition-colors">
                 <p className="text-[#64779F] text-sm italic font-medium leading-relaxed">
                   "{leader.preview}"
                 </p>
              </div>

              <button 
                onClick={() => setSelectedLeader(leader)}
                className="mt-auto px-8 py-3.5 bg-white border-2 border-[#18357a]/10 rounded-full text-[#18357a] text-[11px] font-black uppercase tracking-widest hover:bg-[#18357a] hover:text-white transition-all transform hover:-translate-y-1"
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
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-6 sm:p-10">
            <motion.div 
               initial={{ opacity: 0 }}
               animate={{ opacity: 1 }}
               exit={{ opacity: 0 }}
               onClick={() => setSelectedLeader(null)}
               className="absolute inset-0 bg-[#18357a]/40 backdrop-blur-md"
            />
            <motion.div
              layoutId={selectedLeader.id}
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="relative w-full max-w-4xl bg-white rounded-[48px] shadow-2xl overflow-hidden flex flex-col md:flex-row h-full max-h-[85vh] md:h-auto"
            >
               <button 
                 onClick={() => setSelectedLeader(null)}
                 className="absolute top-6 right-6 z-10 p-4 bg-[#F8FAFC] rounded-full text-[#18357a] hover:bg-red-50 hover:text-red-500 transition-colors"
               >
                 <X size={24} />
               </button>

               {/* Left Sidebar in Modal */}
               <div className="w-full md:w-[320px] bg-[#18357a] p-10 flex flex-col items-center text-center overflow-y-auto">
                  <div className="w-32 h-32 lg:w-40 lg:h-40 rounded-full overflow-hidden border-4 border-white/20 mb-6 shadow-2xl">
                    <img src={selectedLeader.image} alt={selectedLeader.name} className="w-full h-full object-cover" />
                  </div>
                  <h3 className="text-xl lg:text-2xl font-black text-white font-display mb-2">{selectedLeader.name}</h3>
                  <p className="text-[#ffc107] text-[10px] font-black uppercase tracking-[0.2em] mb-8 leading-relaxed">
                    {selectedLeader.designation}
                  </p>
                  
                  <div className="space-y-4 w-full">
                     <div className="flex items-center gap-3 p-3 bg-white/5 rounded-xl border border-white/10 text-white/70">
                        <CheckCircle2 size={16} className="text-[#ffc107]" />
                        <span className="text-[10px] font-bold uppercase tracking-widest text-left">Academic Quality</span>
                     </div>
                     <div className="flex items-center gap-3 p-3 bg-white/5 rounded-xl border border-white/10 text-white/70">
                        <CheckCircle2 size={16} className="text-[#ffc107]" />
                        <span className="text-[10px] font-bold uppercase tracking-widest text-left">Research Focus</span>
                     </div>
                  </div>
               </div>

               {/* Message Body */}
               <div className="flex-1 p-10 lg:p-16 overflow-y-auto">
                  <Quote size={48} className="text-[#ffc107]/20 mb-6" />
                  <h2 className="text-2xl lg:text-3xl font-black text-[#18357a] font-display mb-8">Management Message</h2>
                  <div className="space-y-6">
                    {selectedLeader.fullMessage.map((p, i) => (
                      <p key={i} className="text-[#64779F] text-base lg:text-lg font-medium leading-relaxed">
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
