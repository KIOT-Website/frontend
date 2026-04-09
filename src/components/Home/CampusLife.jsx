import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { BookOpen, FlaskConical, Home, Trophy, Utensils, Bus, ArrowUpRight, Quote } from 'lucide-react'

// Asset imports
import libraryImg from '../../assets/main/kiot_library.webp'
import labImg from '../../assets/main/kiot_lab.webp'
import hostelImg from '../../assets/main/kiot_hostel.webp'
import sportsImg from '../../assets/main/kiot_sports.webp'
import cafeteriaImg from '../../assets/main/kiot_cafeteria.webp'
import transportImg from '../../assets/main/kiot_transport.webp'

const facilities = [
  {
    id: 1,
    title: "Smart Library",
    desc: "Digital and physical archives for deep learning.",
    image: libraryImg,
    icon: BookOpen,
    tag: "Learning Hub",
    path: "/campus-life?section=library"
  },
  {
    id: 2,
    title: "Advanced Labs",
    desc: "Hands-on experience with modern equipment.",
    image: labImg,
    icon: FlaskConical,
    tag: "R&D Center"
  },
  {
    id: 3,
    title: "Safe Hostel",
    desc: "Comfortable and safe student-focused living.",
    image: hostelImg,
    icon: Home,
    tag: "Home Away"
  },
  {
    id: 4,
    title: "Sports & Fitness",
    desc: "Indoor and outdoor arenas for holistic health.",
    image: sportsImg,
    icon: Trophy,
    tag: "Active Campus",
    path: "/campus-life?section=sports"
  },
  {
    id: 5,
    title: "Hygienic Cafeteria",
    desc: "Healthy meals in a spacious, social setting.",
    image: cafeteriaImg,
    icon: Utensils,
    tag: "Food & Social"
  },
  {
    id: 6,
    title: "Seamless Transport",
    desc: "Well-connected fleet for easy daily commute.",
    image: transportImg,
    icon: Bus,
    tag: "Swift Access",
    path: "/campus-life?section=transport"
  }
]

const CampusLife = () => {
  return (
    <section className="relative py-10 lg:py-16 bg-white overflow-hidden">
      
      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16 lg:mb-24">
           <div className="max-w-2xl">
              <motion.div
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                className="inline-flex items-center gap-2 mb-4 bg-[#18357a]/5 px-3 py-1 rounded-full border border-[#18357a]/10"
              >
                <div className="h-1 w-4 bg-[#ffc107] rounded-full" />
                <span className="text-[10px] font-black uppercase tracking-[0.2em] text-[#18357a]">Life At KIOT</span>
              </motion.div>
              <h2 className="text-3xl lg:text-5xl font-black text-[#18357a] font-display leading-[1.1]">
                Everything You Need, <br />
                <span className="text-[#ffc107]">All in One Campus</span>
              </h2>
           </div>
           <p className="text-[#64779F] max-w-sm text-sm lg:text-base font-medium opacity-80 leading-relaxed">
             Beyond classrooms, we provide a vibrant ecosystem designed to nurture your academic growth and personal well-being.
           </p>
        </div>

        {/* FACILITY GRID — Premium Image-Top Card Design */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
           {facilities.map((fac, idx) => (
             <motion.div
               key={fac.id}
               initial={{ opacity: 0, y: 30 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ delay: idx * 0.1, duration: 0.5 }}
               className="group flex flex-col rounded-[28px] overflow-hidden bg-white border border-[#e8eef7] shadow-[0_8px_32px_rgba(24,53,122,0.07)] hover:shadow-[0_24px_64px_rgba(24,53,122,0.16)] hover:-translate-y-2 transition-all duration-500"
             >
                <Link to={fac.path || "#"} className="flex flex-col h-full">
                    {/* Image Area */}
                    <div className="relative h-52 lg:h-60 overflow-hidden rounded-t-[28px]">
                    <img
                        src={fac.image}
                        alt={fac.title + " - campus facility at KIOT"}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-108"
                        style={{ transformOrigin: 'center center' }}
                        loading="lazy"
                    />
                    {/* Gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#18357a]/60 via-transparent to-transparent" />

                    {/* Tag pill (top-left) */}
                    <div className="absolute top-4 left-4">
                        <span className="inline-flex items-center px-3 py-1 rounded-full bg-white/15 backdrop-blur-sm border border-white/30 text-white text-[10px] font-bold uppercase tracking-widest">
                            {fac.tag}
                        </span>
                    </div>
                    </div>

                    {/* Icon badge */}
                    <div className="relative">
                    <div className="absolute -top-6 right-6 z-10">
                        <div className="h-12 w-12 rounded-2xl bg-[#18357a] text-white flex items-center justify-center shadow-[0_8px_24px_rgba(24,53,122,0.35)] group-hover:bg-[#ffc107] group-hover:text-[#18357a] transition-colors duration-500 border-2 border-white">
                            <fac.icon size={20} />
                        </div>
                    </div>
                    </div>

                    {/* Content Area */}
                    <div className="flex flex-col flex-1 px-6 pt-8 pb-6">
                    {/* Accent line */}
                    <div className="w-8 h-1 rounded-full bg-[#ffc107] mb-4 group-hover:w-14 transition-all duration-400" />

                    <h3 className="text-xl font-black text-[#18357a] font-display mb-2 leading-tight">
                        {fac.title}
                    </h3>
                    <p className="text-sm font-medium text-[#64779F] leading-relaxed flex-1">
                        {fac.desc}
                    </p>

                    {/* Explore link */}
                    <div className="mt-5 flex items-center gap-2 text-[#18357a] text-xs font-bold uppercase tracking-widest opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-400">
                        <span>Explore</span>
                        <ArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" />
                    </div>
                    </div>
                </Link>
             </motion.div>
           ))}
        </div>

        {/* Redesigned Experience Bar */}
        <div className="mt-20 lg:mt-32 p-10 lg:p-14 rounded-[32px] bg-white border border-[#D5E2F4]/40 shadow-[0_30px_60px_rgba(34,66,146,0.05)] relative overflow-hidden flex flex-col lg:flex-row items-center justify-between gap-10">
           {/* Subtle corner accent */}
           <div className="absolute top-0 right-0 w-32 h-32 bg-[#18357a]/5 rounded-bl-[100px] -z-10" />
           
           <div className="flex-1 flex gap-6 italic">
              <Quote className="text-[#ffc107]/20 h-10 w-10 shrink-0" strokeWidth={3} />
              <p className="text-base lg:text-xl font-bold text-[#18357a] leading-relaxed max-w-xl">
                "We don't just provide infrastructure; we build environments where potential turns into achievement."
              </p>
           </div>
           
           <div className="flex flex-col items-center lg:items-end lg:pl-10 lg:border-l border-[#D5E2F4]/60">
              <div className="flex items-center gap-3 mb-2">
                 <div className="h-2 w-2 rounded-full bg-[#ffc107]" />
                 <p className="text-2xl lg:text-3xl font-black font-display text-[#18357a] tracking-tight">ISO Certified</p>
              </div>
              <p className="text-[10px] uppercase font-black tracking-[0.3em] text-[#64779F]">Global Excellence Standard</p>
           </div>
        </div>

      </div>

    </section>
  )
}

export default CampusLife
