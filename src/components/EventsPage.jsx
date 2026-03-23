import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Calendar, ArrowLeft, Mic2, Brain, Megaphone, CheckCircle2, Trophy, MonitorPlay } from 'lucide-react'

import symposiumImg from '../assets/kiot_symposium.png'
import labImg from '../assets/kiot_lab.png'
import campusImg from '../assets/kiot-campus.png'

const eventDatabase = {
  "College Symposium": [
    {
      id: 1,
      date: "Mar 18, 2026",
      title: "National Tech Symposium 2026",
      desc: "Explore groundbreaking innovations, coding competitions, and expert-led tech talks from industry leaders.",
      icon: Trophy,
      image: symposiumImg,
      status: "Upcoming"
    },
    {
      id: 2,
      date: "Apr 20, 2026",
      title: "Innovation Hackathon",
      desc: "A 48-hour intense coding hackathon for students to solve real-world problems.",
      icon: MonitorPlay,
      image: labImg,
      status: "Registration Open"
    }
  ],
  "Workshops": [
    {
      id: 3,
      date: "Mar 12, 2026",
      title: "AI & Machine Learning Lab",
      desc: "Hands-on training session with real-world datasets and model building using industry-standard tools.",
      icon: Brain,
      image: labImg,
      status: "Live Registration"
    },
    {
      id: 4,
      date: "May 15, 2026",
      title: "Cloud Computing Fundamentals",
      desc: "Learn AWS and Azure deployment architectures directly from certified cloud architects.",
      icon: MonitorPlay,
      image: campusImg,
      status: "Upcoming"
    }
  ],
  "Seminars": [
    {
      id: 5,
      date: "Jun 05, 2026",
      title: "Future of Blockchain",
      desc: "An expert seminar focusing on Web3 ecosystems and smart contract vulnerabilities.",
      icon: Mic2,
      image: symposiumImg,
      status: "Upcoming"
    }
  ],
  "Announcements": [
    {
      id: 6,
      date: "Mar 05, 2026",
      title: "Admissions Open 2026",
      desc: "Apply now for various Engineering (UG) and Management (PG) programs for the upcoming academic session.",
      icon: Megaphone,
      image: campusImg,
      status: "Urgent"
    },
    {
      id: 7,
      date: "Aug 10, 2026",
      title: "Semester Orientation",
      desc: "Mandatory orientation for all first-year incoming students at the main auditorium.",
      icon: CheckCircle2,
      image: campusImg,
      status: "Scheduled"
    }
  ]
}

const categories = ["College Symposium", "Workshops", "Seminars", "Announcements"]

const EventsPage = () => {
  const [activeCategory, setActiveCategory] = useState(categories[0])

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="min-h-screen bg-[#FCFDFD] pt-10 pb-20">
      
      {/* Page Header */}
      <div className="bg-[#18357a] text-white py-16 lg:py-24 relative overflow-hidden">
        {/* Abstract Background Elements */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#ffc107]/10 rounded-full blur-[100px] translate-x-1/3 -translate-y-1/3" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#224292] rounded-full blur-[120px] -translate-x-1/3 translate-y-1/3 z-0" />
        
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10 text-center">
           <motion.div
             initial={{ opacity: 0, y: 20 }}
             animate={{ opacity: 1, y: 0 }}
           >
             <h1 className="text-4xl md:text-5xl lg:text-6xl font-black font-display mb-6">College <span className="text-[#ffc107]">Events & News</span></h1>
             <p className="max-w-2xl mx-auto text-white/80 text-lg">Stay connected with everything happening around our vibrant campus, from major symposiums to crucial academic announcements.</p>
           </motion.div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-10 mt-12">
        
        {/* Navigation Tabs */}
        <div className="flex flex-wrap justify-center gap-3 lg:gap-4 mb-16">
          {categories.map(cat => (
             <button
               key={cat}
               onClick={() => setActiveCategory(cat)}
               className={`relative px-6 py-3 rounded-xl text-xs md:text-sm font-black uppercase tracking-widest transition-all ${activeCategory === cat ? 'text-white' : 'text-[#64779F] bg-white border border-[#D5E2F4]/60 hover:border-[#18357a]/30 hover:bg-[#18357a]/5'}`}
             >
                {activeCategory === cat && (
                  <motion.div 
                    layoutId="eventPageTab"
                    className="absolute inset-0 bg-[#18357a] rounded-xl -z-10 shadow-lg"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
                <span className="relative z-10">{cat}</span>
             </button>
          ))}
        </div>

        {/* Dynamic Event Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
           <AnimatePresence mode="popLayout">
              {eventDatabase[activeCategory].map((ev, idx) => (
                <motion.div
                   key={ev.id}
                   initial={{ opacity: 0, scale: 0.9, y: 20 }}
                   animate={{ opacity: 1, scale: 1, y: 0 }}
                   exit={{ opacity: 0, scale: 0.9, y: 20 }}
                   transition={{ duration: 0.4, delay: idx * 0.1 }}
                   className="bg-white rounded-[32px] overflow-hidden border border-[#D5E2F4]/60 shadow-[0_20px_50px_rgba(34,66,146,0.06)] hover:shadow-[0_40px_80px_rgba(34,66,146,0.12)] transition-all duration-500 group flex flex-col h-full"
                >
                   {/* Card Image */}
                   <div className="h-56 w-full relative overflow-hidden">
                      <img src={ev.image} alt={ev.title} className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0" />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#18357a]/80 to-transparent" />
                      
                      <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
                         <div className="px-3 py-1.5 bg-white/20 backdrop-blur-md rounded-lg text-white text-xs font-black uppercase tracking-widest flex items-center gap-2">
                           <Calendar size={14} className="text-[#ffc107]" />
                           {ev.date}
                         </div>
                         <div className={`h-2.5 w-2.5 rounded-full ${ev.status === 'Urgent' ? 'bg-red-500 shadow-[0_0_10px_rgba(239,68,68,0.8)]' : 'bg-[#ffc107] shadow-[0_0_10px_rgba(255,193,7,0.8)]'} animate-pulse`} />
                      </div>
                   </div>

                   {/* Card Body */}
                   <div className="p-8 flex flex-col flex-grow">
                      <div className="mb-4">
                         <h3 className="text-xl lg:text-2xl font-black text-[#18357a] font-display leading-[1.2] mb-3 group-hover:text-[#ffc107] transition-colors">
                           {ev.title}
                         </h3>
                         <p className="text-[#64779F] text-sm leading-relaxed">
                           {ev.desc}
                         </p>
                      </div>

                      <div className="mt-auto pt-6 border-t border-[#D5E2F4]/50 flex items-center justify-between">
                         <span className="text-[10px] font-black text-[#18357a] uppercase tracking-widest">
                            {ev.status}
                         </span>
                         <div className="h-10 w-10 rounded-full bg-[#18357a]/5 flex items-center justify-center text-[#18357a] group-hover:bg-[#18357a] group-hover:text-white transition-colors cursor-pointer">
                            <ArrowLeft className="h-4 w-4 rotate-180" />
                         </div>
                      </div>
                   </div>
                </motion.div>
              ))}
           </AnimatePresence>
        </div>

      </div>
    </div>
  )
}

export default EventsPage
