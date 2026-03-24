import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Calendar, Mic2, Brain, Megaphone, ArrowRight, UserCheck, Timer } from 'lucide-react'

// Assets
import symposiumImg from '../../assets/kiot_symposium.webp'
import labImg from '../../assets/kiot_lab.webp'
import campusImg from '../../assets/kiot-campus.webp'

const events = [
  {
    id: 1,
    date: "Mar 18, 2026",
    title: "National Tech Symposium",
    desc: "Explore groundbreaking innovations, coding competitions, and expert-led tech talks from industry leaders.",
    type: "Events",
    icon: Mic2,
    image: symposiumImg,
    status: "Upcoming"
  },
  {
    id: 2,
    date: "Mar 12, 2026",
    title: "AI & Machine Learning Workshop",
    desc: "Hands-on training session with real-world datasets and model building using industry-standard tools.",
    type: "Workshops",
    icon: Brain,
    image: labImg,
    status: "Live Registration"
  },
  {
    id: 3,
    date: "Mar 05, 2026",
    title: "Admissions Open 2026",
    desc: "Apply now for various Engineering (UG) and Management (PG) programs for the upcoming academic session.",
    type: "Announcements",
    icon: Megaphone,
    image: campusImg,
    status: "Urgent"
  }
]

const Events = ({ onEventsClick }) => {
  const displayEvents = events.slice(0, 3)

  return (
    <section className="relative py-10 lg:py-16 bg-[#FCFDFD] overflow-hidden">
      
      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-10">
        
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-10 mb-12 lg:mb-16">
           {/* Section Header */}
            <div className="max-w-2xl">
              <motion.div
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                className="inline-flex items-center gap-2 mb-4 bg-[#18357a]/5 px-3 py-1 rounded-full border border-[#18357a]/10"
              >
                <Timer size={14} className="text-[#ffc107]" />
                <span className="text-[10px] font-black uppercase tracking-[0.2em] text-[#18357a]">Campus Buzz</span>
              </motion.div>
              <h2 className="text-3xl lg:text-5xl font-black text-[#18357a] font-display leading-[1.1]">
                Upcoming <br />
                <span className="text-[#ffc107]">Events</span>
              </h2>
           </div>
        </div>

        {/* SIDE-BY-SIDE GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto">
           <AnimatePresence mode="popLayout">
              {displayEvents.map((event, idx) => (
                <motion.div
                  key={event.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="group relative bg-white rounded-3xl p-6 lg:p-8 border border-[#D5E2F4]/60 shadow-[0_20px_50px_rgba(34,66,146,0.04)] hover:shadow-[0_40px_100px_rgba(34,66,146,0.1)] transition-all duration-500 overflow-hidden flex flex-col h-full"
                >
                   {/* Image Area */}
                   <div className="w-full h-[200px] lg:h-[220px] relative rounded-2xl overflow-hidden mb-6">
                      <img 
                        src={event.image} 
                        alt={event.title} 
                        className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0" 
                      />
                      <div className="absolute inset-0 bg-[#18357a]/10 group-hover:bg-transparent transition-all" />
                      
                      {/* Corner Type Tag */}
                      <div className="absolute top-3 left-3 px-3 py-1 bg-white/90 backdrop-blur-md rounded-md text-[9px] font-black uppercase tracking-widest text-[#18357a] shadow-sm">
                          {event.type}
                      </div>
                   </div>

                   {/* Content Area */}
                   <div className="flex-grow flex flex-col">
                      <p className="text-[10px] lg:text-[11px] font-black text-[#ffc107] uppercase tracking-[0.2em] mb-3 flex items-center gap-2">
                         <Calendar size={14} /> 
                         {event.date}
                      </p>
                      
                      <h3 className="text-xl lg:text-2xl font-black text-[#18357a] font-display mb-3 leading-tight group-hover:text-[#ffc107] transition-colors">
                        {event.title}
                      </h3>
                      
                      <p className="text-xs lg:text-sm font-medium text-[#64779F] leading-relaxed mb-6 opacity-80 flex-grow">
                        {event.desc}
                      </p>
                      
                      {/* Bottom Footer */}
                      <div className="pt-5 border-t border-[#18357a]/5 flex items-center justify-between mt-auto">
                         <div className="flex items-center gap-2">
                            <div className={`h-2 w-2 rounded-full ${event.status === 'Urgent' ? 'bg-red-500' : 'bg-green-500'} animate-pulse`} />
                            <span className="text-[9px] font-black uppercase text-[#18357a]/60 tracking-widest">{event.status}</span>
                         </div>
                         <div className="flex items-center gap-1 group/btn cursor-pointer">
                           <span className="text-[10px] font-black text-[#18357a] uppercase tracking-widest group-hover/btn:text-[#ffc107] transition-colors">Details</span>
                           <ArrowRight size={14} className="text-[#18357a] group-hover/btn:translate-x-1 group-hover/btn:text-[#ffc107] transition-all" />
                         </div>
                      </div>
                   </div>
                </motion.div>
              ))}
           </AnimatePresence>
        </div>

        {/* VIEW ALL CTA */}
        <div className="mt-16 lg:mt-24 text-center">
           <button 
             onClick={onEventsClick}
             className="group relative px-10 lg:px-12 py-4 lg:py-5 bg-[#18357a] text-white rounded-full font-black uppercase tracking-[0.2em] text-[10px] overflow-hidden shadow-2xl hover:bg-[#ffc107] hover:text-[#18357a] transition-all duration-300"
           >
              <span className="relative z-10 flex items-center gap-3 justify-center">
                 View All Events
                 <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </span>
           </button>
        </div>

      </div>

    </section>
  )
}

export default Events
