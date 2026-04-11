import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { BookOpen, FlaskConical, Home, Trophy, Utensils, Bus, ArrowUpRight, Sparkles, Dumbbell, Zap, GraduationCap } from 'lucide-react'
import React from 'react'

// Asset imports from life@kiot
import labImg from '../../assets/life@kiot/Lab.webp'
import cafeteriaImg from '../../assets/life@kiot/cafeteria.webp'
import hostelImg from '../../assets/life@kiot/hostal.webp'
import sportsImg from '../../assets/life@kiot/sports.webp'
import trainingImg from '../../assets/life@kiot/training.webp'
import transportImg from '../../assets/life@kiot/transport.webp'
import gymImg from '../../assets/life@kiot/gym.webp'
import istartImg from '../../assets/life@kiot/istart.webp'

const facilities = [
  {
    id: 1,
    title: "Sports",
    desc: "Extensive indoor and outdoor sports arenas designed for holistic clinical and physical health.",
    image: sportsImg,
    icon: Trophy,
    tag: "Active Campus",
    path: "/campus-life?section=sports"
  },
  {
    id: 2,
    title: "GYM",
    desc: "Modern fitness center equipped with advanced strength and cardio training machinery.",
    image: gymImg,
    icon: Dumbbell,
    tag: "Fitness Hub"
  },
  {
    id: 3,
    title: "Transport",
    desc: "A sprawling fleet of modern buses ensuring safe and timely commute across the region.",
    image: transportImg,
    icon: Bus,
    tag: "Swift Access",
    path: "/campus-life?section=transport"
  },
  {
    id: 4,
    title: "Cafeteria",
    desc: "A vibrant social hub serving nutritious, hygienic multi-cuisine meals in a grand setting.",
    image: cafeteriaImg,
    icon: Utensils,
    tag: "Food & Social"
  },
  {
    id: 5,
    title: "Training Hall",
    desc: "A massive digital and physical archive designed for deep immersive learning and research.",
    image: trainingImg,
    icon: GraduationCap,
    tag: "Learning Hub"
  },
  {
    id: 6,
    title: "Hostel",
    desc: "Hygienic, comfortable and secure student-focused living spaces that feel like home.",
    image: hostelImg,
    icon: Home,
    tag: "Home Away"
  },
  {
    id: 7,
    title: "iStart",
    desc: "Innovation and startup hub fostering entrepreneurial spirit and creative problem-solving.",
    image: istartImg,
    icon: Zap,
    tag: "Innovation Center"
  },
  {
    id: 8,
    title: "Lab",
    desc: "State-of-the-art specialized labs providing hands-on experience with modern industry equipment.",
    image: labImg,
    icon: FlaskConical,
    tag: "R&D Center"
  }
]

const CampusLife = () => {
  return (
    <section className="relative py-20 lg:py-24 bg-white overflow-hidden">
      
      {/* Subtle Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-gradient-to-b from-[#18357a]/5 to-transparent pointer-events-none -z-10" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16 lg:mb-20">
           <div className="max-w-2xl">
              <motion.div
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                className="inline-flex items-center gap-2 mb-4 bg-[#18357a]/5 px-3 py-1 rounded-full border border-[#18357a]/10"
              >
                <div className="h-1 w-4 bg-[#ffc107] rounded-full" />
                <span className="text-[10px] font-black uppercase tracking-[0.2em] text-[#18357a]">Life At KIOT</span>
              </motion.div>
              <h2 className="text-4xl lg:text-5xl font-black text-[#18357a] font-display leading-[1.1] uppercase tracking-tighter">
                Everything You Need, <br />
                <span className="text-[#ffc107]">All in One Campus</span>
              </h2>
           </div>
           <p className="text-[#64779F] max-w-sm text-sm lg:text-base font-medium opacity-80 leading-relaxed border-l-2 border-[#ffc107]/30 pl-6">
             Beyond classrooms, we provide a vibrant ecosystem designed to nurture your academic growth and personal well-being.
           </p>
        </div>

        {/* Facility Grid — Clean Design as requested */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
           {facilities.map((fac, idx) => (
             <motion.div
               key={fac.id}
               initial={{ opacity: 0, y: 30 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ delay: idx * 0.1 }}
               className="group flex flex-col rounded-[32px] overflow-hidden bg-white border border-[#e8eef7] shadow-[0_15px_45px_rgba(24,53,122,0.05)] hover:shadow-[0_25px_65px_rgba(24,53,122,0.12)] hover:-translate-y-2 transition-all duration-500"
             >
                <Link to={fac.path || "#"} className="flex flex-col h-full">
                    {/* Image Area */}
                    <div className="relative h-60 lg:h-64 overflow-hidden">
                      <img
                          src={fac.image}
                          alt={fac.title}
                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                          loading="lazy"
                      />
                      {/* Subdued Gradient overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-60" />

                      {/* Tag pill (top-left) */}
                      <div className="absolute top-5 left-5">
                          <span className="inline-flex items-center px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white text-[9px] font-black uppercase tracking-widest shadow-xl">
                              {fac.tag}
                          </span>
                      </div>
                    </div>

                    {/* Floating Icon badge */}
                    <div className="relative">
                      <div className="absolute -top-7 right-7 z-10">
                          <div className="h-14 w-14 rounded-2xl bg-[#18357a] text-white flex items-center justify-center shadow-[0_10px_30px_rgba(24,53,122,0.3)] group-hover:bg-[#ffc107] group-hover:text-[#18357a] transition-all duration-500 border-[3px] border-white">
                              <fac.icon size={24} />
                          </div>
                      </div>
                    </div>

                    {/* Content Area */}
                    <div className="flex flex-col flex-1 px-8 pt-10 pb-8">
                      {/* Yellow Accent Line */}
                      <div className="w-10 h-1 rounded-full bg-[#ffc107] mb-5 group-hover:w-16 transition-all duration-500" />

                      <h3 className="text-2xl font-black text-[#18357a] font-display mb-3 leading-tight tracking-tight uppercase">
                          {fac.title}
                      </h3>
                      <p className="text-sm font-bold text-[#64779F] leading-relaxed flex-1 opacity-80">
                          {fac.desc}
                      </p>

                      {/* Explore link */}
                      <div className="mt-6 flex items-center gap-2 text-[#18357a] text-[10px] font-black uppercase tracking-widest opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-400">
                          <span>Explore Space</span>
                          <ArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" />
                      </div>
                    </div>
                </Link>
             </motion.div>
           ))}
        </div>

        {/* Global Standard Banner */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="mt-24 p-12 rounded-[4rem] bg-[#18357a] relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-10"
        >
           <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl -mr-32 -mt-32" />
           
           <div className="relative z-10 flex gap-6 italic">
              <Sparkles className="text-[#ffc107] h-10 w-10 shrink-0" strokeWidth={2.5} />
              <p className="text-xl lg:text-2xl font-black text-white leading-tight uppercase max-w-xl">
                "We provide environments where potential turns into achievement."
              </p>
           </div>
           
           <div className="relative z-10 flex flex-col items-center md:items-end md:pl-10 md:border-l border-white/20">
              <div className="px-6 py-2 rounded-full bg-[#ffc107] mb-3">
                 <p className="text-base font-black text-[#18357a] tracking-tight">ISO CERTIFIED</p>
              </div>
              <p className="text-[10px] uppercase font-black tracking-[0.4em] text-white/50">Global Quality Standard</p>
           </div>
        </motion.div>

      </div>
    </section>
  )
}

export default CampusLife

