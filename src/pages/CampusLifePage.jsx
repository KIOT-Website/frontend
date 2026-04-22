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

const CAMPUS_HUBS = [
  {
    id: 'library',
    title: 'Library',
    subtitle: 'Gateway to Knowledge',
    icon: Library,
    image: 'https://images.unsplash.com/photo-1521587760476-6c12a4b040da?q=80&w=1200&auto=format&fit=crop',
    link: '/campus-life/library',
    color: '#3b82f6' // Vibrant Blue
  },
  {
    id: 'classroom',
    title: 'Smart Classroom',
    subtitle: 'Future Ready Learning',
    icon: Monitor,
    image: 'https://images.unsplash.com/photo-1577891729319-3359938c8230?q=80&w=1200&auto=format&fit=crop',
    link: '/campus-life/classroom',
    color: '#f59e0b' // Vibrant Gold
  },
  {
    id: 'sports',
    title: 'Sports & Games',
    subtitle: 'Excellence in Action',
    icon: Trophy,
    image: 'https://images.unsplash.com/photo-1517649763962-0c623066013b?q=80&w=1200&auto=format&fit=crop',
    link: '/campus-life/sports',
    color: '#ef4444' // Vibrant Red
  },
  {
    id: 'tour',
    title: 'Campus Tour',
    subtitle: 'Explore our legacy',
    icon: Compass,
    image: 'https://images.unsplash.com/photo-1541339907198-e08756eaa539?q=80&w=1200&auto=format&fit=crop',
    link: '/campus-life/tour',
    color: '#10b981' // Vibrant Emerald
  },
  {
    id: 'transport',
    title: 'Transport',
    subtitle: 'Safe & Reliable Commute',
    icon: Bus,
    image: 'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?q=80&w=1200&auto=format&fit=crop',
    link: '/campus-life/transport',
    color: '#6366f1' // Vibrant Indigo
  },
  {
    id: 'amenities',
    title: 'Amenities',
    subtitle: 'Campus Life Services',
    icon: LayoutGrid,
    image: 'https://images.unsplash.com/photo-1555529669-e69e7aa0ba9a?q=80&w=1200&auto=format&fit=crop',
    link: '/campus-life/amenities',
    color: '#ec4899' // Vibrant Pink
  },
  {
    id: 'media',
    title: 'Media Center',
    subtitle: 'Multimedia Excellence',
    icon: Video,
    link: '/campus-life/media',
    color: '#ef4444' // Red
  },
  {
    id: 'energy',
    title: 'ENERGY INITIATIVES',
    subtitle: 'Sustainable Campus',
    icon: Zap,
    link: '/campus-life/energy',
    color: '#f59e0b' // Gold
  },
  {
    id: 'internet',
    title: 'INTERNET & COMPUTING FACILITIES',
    subtitle: '24/7 Digital Hub',
    icon: Wifi,
    link: '/campus-life/internet',
    color: '#3b82f6' // Blue
  }
]

const CampusLifePage = () => {
    const navigate = useNavigate()
    const [showVideo, setShowVideo] = useState(false)

    return (
        <div className="min-h-screen bg-[#F8FAFC] font-graphik pb-24 relative">
            {/* Video Modal - Global Stacking Context */}
            <AnimatePresence>
                {showVideo && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/95 backdrop-blur-xl p-4 md:p-10"
                    >
                        <motion.div
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.9, opacity: 0 }}
                            className="relative w-full max-w-6xl aspect-video rounded-3xl overflow-hidden shadow-2xl border border-white/10"
                        >
                            {/* Close Button */}
                            <button 
                                onClick={() => setShowVideo(false)}
                                className="absolute top-6 right-6 z-50 w-12 h-12 rounded-full bg-white/10 hover:bg-[#ffc107] text-white hover:text-[#18357a] flex items-center justify-center transition-all shadow-xl backdrop-blur-md"
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
            {/* 🔷 Cinematic Hero Banner - Compact Refined Style */}
            <section className="relative min-h-[380px] md:min-h-[420px] bg-[#18357a] overflow-hidden flex items-center">
                {/* Integrated Background Design */}
                <div className="absolute inset-0 z-0">
                    <div className="absolute inset-0 bg-gradient-to-r from-[#18357a] via-[#18357a]/90 to-transparent z-10" />
                    
                    <motion.img 
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 0.7, x: 0 }}
                        transition={{ duration: 1.5, ease: "easeOut" }}
                        src="/src/assets/main/indian_college_students_campus.webp" 
                        alt="KIOT Indian Campus Life" 
                        className="absolute right-[-2%] top-0 h-full w-full lg:w-[60%] object-cover object-center opacity-70"
                    />
                    
                    {/* Subtle Glow Overlay */}
                    <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[300px] h-[300px] bg-[#ffc107]/10 blur-[100px] rounded-full pointer-events-none" />
                </div>

                <div className="relative z-20 max-w-7xl mx-auto px-6 lg:px-10 w-full py-12">
                    <div className="max-w-2xl lg:max-w-4xl">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6 }}
                            className="flex items-center gap-4 mb-6"
                        >
                            <div className="w-10 h-[2px] bg-[#ffc107]" />
                            <span className="text-[#ffc107] text-[14px] font-black uppercase tracking-[0.5em] font-graphik italic">Explore the Ecosystem</span>
                        </motion.div>

                        <motion.h1 
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="text-5xl md:text-6xl lg:text-[75px] font-black leading-[0.9] tracking-tighter mb-8"
                        >
                            <span className="text-white">Campus</span> <br />
                            <span className="text-[#ffc107]">Life.</span>
                        </motion.h1>

                        <motion.p 
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.4 }}
                            className="text-base md:text-lg text-white/80 font-medium leading-[1.5] max-w-xl font-graphik"
                        >
                            Explore the world-class facilities and vibrant ecosystem at KIOT. 
                            Experience a learning environment where innovation meets tradition.
                        </motion.p>
                    </div>
                </div>
            </section>

            <div className="max-w-7xl mx-auto px-6 pt-12 pb-24 relative z-20">
                
                {/* ─── NEW INSTITUTIONAL EXCELLENCE SECTION ─── */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24"
                >
                    {/* Text Part - Comprehensive Institutional Narrative */}
                    <div className="w-full lg:w-[55%] space-y-8">
                        <div className="flex items-center gap-4">
                            <div className="h-0.5 w-10 bg-[#18357a]" />
                            <span className="text-[14px] font-black uppercase tracking-[4px] text-[#18357a]">Institutional Excellence</span>
                        </div>
                        <h3 className="text-4xl md:text-6xl font-black text-[#18357a] uppercase tracking-tighter leading-none">
                            BUILDING <span className="text-[#ffc107]">LEGACY</span> <br/> 
                            THROUGH INNOVATION
                        </h3>
                        <div className="space-y-6">
                           <p className="text-[#333333] text-[16px] leading-[28.8px] font-normal font-graphik text-justify">
                               At KIOT, excellence is built through advanced infrastructure, vibrant campus life, and a strong sports culture. Smart classrooms, modern labs, and innovation-driven spaces support academic growth, while a dynamic student community encourages creativity, collaboration, and global exposure.
                           </p>
                           <p className="text-[#333333] text-[16px] leading-[28.8px] font-normal font-graphik text-justify">
                               With top-tier sports facilities and professional training, students grow both physically and mentally, creating a well-well-rounded environment focused on performance, passion, and progress.
                           </p>
                        </div>
                    </div>

                    {/* Video Part - Cinematic Campus Tour */}
                    <div className="w-full lg:w-[45%] relative group">
                        <div className="absolute -inset-4 bg-slate-100 rounded-[2.5rem] -rotate-1 group-hover:rotate-0 transition-transform duration-500" />
                        <div 
                          onClick={() => setShowVideo(true)}
                          className="relative rounded-[2rem] overflow-hidden shadow-2xl aspect-video cursor-pointer border-4 border-white group-hover:border-[#ffc107]/20 transition-all duration-500"
                        >
                            {/* Real Campus Image as Thumbnail */}
                            <img 
                              src="/src/assets/main/campus .webp" 
                              alt="Campus Tour" 
                              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-[#18357a]/40 to-transparent" />
                            
                            {/* Play Button Overlay */}
                            <div className="absolute inset-0 flex flex-col items-center justify-center">
                               <motion.div 
                                 whileHover={{ scale: 1.1 }}
                                 whileTap={{ scale: 0.9 }}
                                 className="w-20 h-20 rounded-full bg-white flex items-center justify-center text-[#18357a] shadow-2xl group-hover:bg-[#ffc107] transition-colors duration-500"
                               >
                                  <Video size={32} fill="currentColor" className="ml-1" />
                               </motion.div>
                               <span className="mt-4 text-[10px] font-black text-white uppercase tracking-[4px] drop-shadow-lg font-graphik">Watch Campus Tour</span>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>

            {/* 🔷 Institutional Impact Stats - Pixel Perfect match to design */}
            <div className="bg-[#1b2a60] py-20 relative z-20 overflow-hidden border-y border-white/5 shadow-2xl">
                {/* Visual Artifacts: Dotted Pattern Overlay */}
                <div className="absolute inset-0 opacity-[0.06]" style={{ backgroundImage: 'radial-gradient(circle, #ffffff 1px, transparent 1px)', backgroundSize: '16px 16px' }} />

                <div className="max-w-7xl mx-auto px-6 relative z-10">
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
                        {[
                            { v: "12,000+", l: "ACTIVE STUDENTS", i: Users },
                            { v: "150+", l: "STUDENT CLUBS", i: Landmark },
                            { v: "25+", l: "SPORTS TEAMS", i: Trophy },
                            { v: "500+", l: "ANNUAL EVENTS", i: CalendarDays }
                        ].map((stat, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className="flex flex-col items-center text-center space-y-6"
                            >
                                {/* Circular Icon Badge */}
                                <div className="w-16 h-16 rounded-full bg-white/5 border border-white/10 flex items-center justify-center shadow-2xl backdrop-blur-md transition-transform hover:scale-110 duration-500">
                                    <stat.i size={28} className="text-[#ffc107]" />
                                </div>
                                <div className="space-y-1">
                                    <p className="text-4xl lg:text-5xl font-black text-white tracking-tighter leading-none">
                                        {stat.v}
                                    </p>
                                    <p className="text-[13px] font-black uppercase tracking-[3px] text-white/70 leading-tight">
                                        {stat.l}
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-6 py-12 md:py-20 relative z-20">
                {/* Hub Cards Section Heading - Centered on Mobile */}
                <div className="mb-12 text-center md:text-left border-l-0 md:border-l-4 border-[#ffc107] md:pl-6 py-2">
                    <h2 className="text-3xl md:text-4xl font-black text-[#18357a] uppercase tracking-tighter">
                        Campus <span className="text-[#ffc107]">Essentials</span>
                    </h2>
                    <p className="text-[13px] font-black text-slate-900 uppercase tracking-[4px] mt-2 leading-none">
                        Built for excellence in learning, living, and growth
                    </p>
                </div>

                {/* Hub Cards Grid - Centered on Mobile */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {CAMPUS_HUBS.map((hub, idx) => (
                        <motion.div
                            key={hub.id}
                            initial={{ opacity: 0, scale: 0.98 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.05 }}
                        >
                            <button 
                                onClick={() => navigate(hub.link)}
                                className="w-full group bg-white rounded-[1.5rem] border border-slate-200 shadow-xl shadow-slate-200/20 overflow-hidden flex flex-col items-center text-center p-6 transition-all hover:border-[#18357a]/20 hover:-translate-y-1 duration-500 h-full gap-5"
                            >
                                <div 
                                  className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0 shadow-inner transition-all group-hover:scale-110 duration-500"
                                  style={{ backgroundColor: `${hub.color}15`, color: hub.color }}
                                >
                                    <hub.icon size={22} strokeWidth={2.5} />
                                </div>
                                <div className="space-y-1.5 w-full">
                                    <h3 className="text-[18px] font-black text-[#18357a] uppercase tracking-tight leading-none group-hover:text-[#ffc107] transition-colors">{hub.title}</h3>
                                    <p className="text-[12px] font-black text-black uppercase tracking-widest leading-tight opacity-80">{hub.subtitle}</p>
                                    <div className="flex items-center justify-center gap-2 pt-3 transition-all -translate-x-1 group-hover:translate-x-0">
                                        <span className="text-[11px] font-black text-[#18357a] uppercase tracking-widest">Access Hub</span>
                                        <ArrowUpRight size={10} className="text-[#ffc107]" />
                                    </div>
                                </div>
                            </button>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default CampusLifePage
