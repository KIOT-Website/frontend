import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  Library, 
  Monitor, 
  Trophy, 
  Compass, 
  Bus,
  LayoutGrid,
  ArrowUpRight,
  Users,
  Landmark,
  CalendarDays,
  ShieldCheck,
  Video,
  Zap,
  Wifi,
  BookOpenCheck,
  X
} from 'lucide-react'

import campusTourVid from '../assets/main/campus tour.mp4'

// Local Assets for Campus Essentials (Tamil Nadu / KIOT based)
import kiotLibrary from '../assets/life@kiot/library1.png'
import kiotSports from '../assets/life@kiot/sports ground.png'
import kiotTransport from '../assets/life@kiot/collge bus.png'
import kiotLab from '../assets/life@kiot/smart classrooms.png'
import kiotCafeteria from '../assets/main/kiot_cafeteria.webp'
import kiotSymposium from '../assets/life@kiot/media center.png'
import campusMain from '../assets/main/campus .webp'

const CAMPUS_HUBS = [
  {
    id: 'library',
    title: 'Library',
    subtitle: 'Gateway to Knowledge',
    icon: Library,
    image: kiotLibrary,
    link: '/campus-life/library',
    color: '#224292'
  },
  {
    id: 'classroom',
    title: 'Smart Classroom',
    subtitle: 'Future Ready Learning',
    icon: null,
    image: kiotLab,
    link: '/campus-life/classroom',
    color: '#ffc107'
  },
  {
    id: 'sports',
    title: 'Sports & Games',
    subtitle: 'Excellence in Action',
    icon: Trophy,
    image: kiotSports,
    link: '/campus-life/sports',
    color: '#224292'
  },
  {
    id: 'tour',
    title: 'Campus Tour',
    subtitle: 'Explore our legacy',
    icon: Compass,
    image: campusMain,
    link: '/campus-life/tour',
    color: '#ffc107'
  },
  {
    id: 'transport',
    title: 'Transport',
    subtitle: 'Safe & Reliable Commute',
    icon: Bus,
    image: kiotTransport,
    link: '/campus-life/transport',
    color: '#224292'
  },
  {
    id: 'amenities',
    title: 'Amenities',
    subtitle: 'Campus Life Services',
    icon: LayoutGrid,
    image: kiotCafeteria,
    link: '/campus-life/amenities',
    color: '#ffc107'
  },
  {
    id: 'media',
    title: 'Media Center',
    subtitle: 'Multimedia Excellence',
    icon: Video,
    image: kiotSymposium,
    link: '/campus-life/media',
    color: '#224292'
  },
  {
    id: 'energy',
    title: 'Energy Initiatives',
    subtitle: 'Sustainable Campus',
    icon: Zap,
    image: 'https://images.unsplash.com/photo-1613665813446-82a78c468a1d?q=80&w=800&auto=format&fit=crop', // Realistic Solar Farm
    link: '/campus-life/energy',
    color: '#ffc107'
  },
  {
    id: 'internet',
    title: 'Internet & Computing',
    subtitle: '24/7 Digital Hub',
    icon: Wifi,
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=800&auto=format&fit=crop', // Kept as requested
    link: '/campus-life/internet',
    color: '#224292'
  }
]

const CampusLifePage = () => {
    const navigate = useNavigate()
    const [showVideo, setShowVideo] = useState(false)

    return (
        <div className="min-h-screen bg-white pb-24 relative">
            <AnimatePresence>
                {showVideo && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-[9999] flex items-center justify-center bg-black backdrop-blur-xl p-4 md:p-10"
                    >
                        <motion.div
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.9, opacity: 0 }}
                            className="relative w-full max-w-6xl aspect-video rounded-3xl overflow-hidden shadow-2xl border border-white/20"
                        >
                            <button 
                                onClick={() => setShowVideo(false)}
                                className="absolute top-6 right-6 z-50 w-12 h-12 rounded-full bg-white flex items-center justify-center text-[#224292] hover:bg-[#ffc107] transition-all shadow-xl"
                            >
                                <X size={24} strokeWidth={3} />
                            </button>
                            <video 
                                src={campusTourVid} 
                                className="w-full h-full object-contain"
                                controls
                                autoPlay
                                playsInline
                            />
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>

            <div className="w-full px-6 lg:px-12 pt-6 md:pt-24 pb-10 md:pb-24 relative z-20">
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24"
                >
                    <div className="w-full lg:w-[45%] space-y-8">
                        <h3 className="text-4xl md:text-6xl font-black text-[#224292] tracking-tighter leading-none">
                            Building <span className="text-[#ffc107]">Legacy</span> <br/> 
                            Through Innovation
                        </h3>
                        <div className="space-y-6">
                           <p className="text-[#1a1a1a] text-lg leading-relaxed font-bold text-justify">
                                At KIOT, excellence is built through advanced infrastructure, vibrant campus life, and a strong sports culture. Smart classrooms, modern labs, and innovation-driven spaces support academic growth, while a dynamic student community encourages creativity, collaboration, and global exposure.
                           </p>
                           <p className="text-[#1a1a1a] text-lg leading-relaxed font-bold text-justify">
                                With top-tier sports facilities and professional training, students grow both physically and mentally, creating a well-rounded environment focused on performance, passion, and progress.
                           </p>
                        </div>
                    </div>

                    <div className="w-full lg:w-[55%] relative group">
                        <div className="absolute -inset-4 bg-slate-100 rounded-[2rem] -rotate-1 group-hover:rotate-0 transition-transform duration-500" />
                        <div 
                          onClick={() => setShowVideo(true)}
                          className="relative rounded-2xl overflow-hidden shadow-2xl aspect-video cursor-pointer border-4 border-white group-hover:border-[#ffc107]/20 transition-all duration-500"
                        >
                            <img 
                              src={campusMain} 
                              alt="Campus Tour" 
                              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-[#224292]/60 to-transparent" />
                            <div className="absolute inset-0 flex flex-col items-center justify-center">
                               <motion.div 
                                 whileHover={{ scale: 1.1 }}
                                 whileTap={{ scale: 0.9 }}
                                 className="w-20 h-20 rounded-full bg-white flex items-center justify-center text-[#224292] shadow-2xl group-hover:bg-[#ffc107] transition-colors duration-500"
                               >
                                  <Video size={32} fill="currentColor" className="ml-1" />
                               </motion.div>
                               <span className="mt-4 text-xs font-black text-white tracking-[4px] drop-shadow-lg uppercase">Watch Campus Tour</span>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>

            <div className="bg-slate-50/50 py-12 md:py-24 relative z-20 overflow-hidden">
                <div className="w-full px-6 lg:px-12 relative z-10">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {[
                            { v: "12,000+", l: "Active Students", i: Users, d: "Diverse community of learners and achievers.", c: "#224292" },
                            { v: "150+", l: "Student Clubs", i: Landmark, d: "Nurturing talents beyond the classroom walls.", c: "#ffc107" },
                            { v: "25+", l: "Sports Teams", i: Trophy, d: "Striving for excellence in state & national levels.", c: "#224292" },
                            { v: "500+", l: "Annual Events", i: CalendarDays, d: "A vibrant calendar filled with tech & culturals.", c: "#ffc107" }
                        ].map((stat, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className="flex flex-col bg-white rounded-3xl shadow-xl shadow-slate-200/60 overflow-hidden border border-slate-100 group hover:-translate-y-2 transition-all duration-500"
                            >
                                <div className="p-5 md:p-8 md:pb-12 flex flex-col items-center text-center space-y-6">
                                    <div 
                                        className="w-16 h-16 rounded-2xl flex items-center justify-center shadow-lg transition-transform group-hover:rotate-6 duration-500"
                                        style={{ backgroundColor: stat.c, color: stat.c === '#ffc107' ? '#224292' : '#fff' }}
                                    >
                                        <stat.i size={28} />
                                    </div>
                                    <div className="space-y-2">
                                        <p className="text-[10px] font-black text-black uppercase tracking-[3px]">{stat.l}</p>
                                        <p className="text-4xl lg:text-5xl font-black text-[#224292] tracking-tighter leading-none">
                                            {stat.v}
                                        </p>
                                    </div>
                                </div>
                                <div 
                                    className="p-4 md:p-6 text-center mt-auto"
                                    style={{ backgroundColor: stat.c }}
                                >
                                    <p className={`text-[10px] font-black uppercase tracking-widest leading-relaxed ${stat.c === '#ffc107' ? 'text-[#224292]' : 'text-white'}`}>
                                        {stat.d}
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>

            <div className="w-full px-6 lg:px-12 py-12 md:py-16 relative z-20">
                <div className="flex items-center justify-center gap-4 mb-16">
                    <div className="h-[2px] w-16 bg-[#ffc107] rounded-full" />
                    <h2 className="text-3xl font-black text-[#224292] tracking-tight text-center">Campus <span className="text-[#ffc107]">Essentials</span></h2>
                    <div className="h-[2px] w-16 bg-[#ffc107] rounded-full" />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 xl:gap-8">
                    {CAMPUS_HUBS.map((hub, idx) => (
                        <motion.div
                            key={hub.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.05 }}
                            onClick={() => navigate(hub.link)}
                            className="group bg-white rounded-xl border-l-[3px] border-b-[3px] border-[#224292] transition-all duration-500 cursor-pointer overflow-hidden flex flex-col relative shadow-lg hover:shadow-2xl"
                        >
                            <div className="absolute top-0 left-0 w-full h-[3px] bg-[#ffc107] z-30" />
                            <div className="absolute top-0 right-0 h-full w-[3px] bg-[#ffc107] z-30" />

                            <div className="relative w-full h-32 md:h-40 overflow-hidden">
                                <img 
                                  src={hub.image} 
                                  alt={hub.title} 
                                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" 
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-[#224292]/40 to-transparent" />
                                
                                {hub.icon && (
                                    <div 
                                      className="absolute bottom-3 left-4 w-10 h-10 rounded-xl flex items-center justify-center shadow-2xl backdrop-blur-md border border-white/20 transition-all group-hover:scale-110"
                                      style={{ backgroundColor: `${hub.color}CC`, color: '#fff' }}
                                    >
                                        <hub.icon size={20} strokeWidth={2.5} />
                                    </div>
                                )}
                            </div>

                            <div className="p-4 md:p-5 flex-1 flex flex-col bg-white">
                                <h4 className="text-[16px] font-black text-[#224292] leading-tight mb-1.5">{hub.title}</h4>
                                <p className="text-[11px] text-slate-500 font-bold leading-relaxed mb-4">{hub.subtitle}</p>
                                
                                <div className="text-[#ffc107] flex items-center gap-2 text-[11px] font-black uppercase tracking-widest mt-auto">
                                    <span className="text-[#224292]">Explore</span>
                                    <ArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" />
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default CampusLifePage
