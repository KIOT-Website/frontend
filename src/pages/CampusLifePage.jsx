import React from 'react'
import { useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
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
  BookOpenCheck
} from 'lucide-react'

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

    return (
        <div className="min-h-screen bg-[#F8FAFC] font-graphik pb-24">
            {/* 🔷 Fixed Banner - Reduced Height */}
            <div className="relative h-[35vh] flex items-center justify-center overflow-hidden bg-[#18357a]">
                <div className="absolute inset-0">
                    <img 
                        src="https://images.unsplash.com/photo-1523050335392-9bc0ad7c9f83?q=80&w=1920&auto=format&fit=crop" 
                        className="w-full h-full object-cover opacity-40" 
                        alt="Campus"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-[#18357a]/80 via-[#18357a]/60 to-transparent" />
                </div>
                
                <div className="relative z-10 text-center px-6">
                    <motion.div
                        initial={{ y: 30, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.8 }}
                    >
                        <h1 className="text-4xl md:text-6xl font-black text-white uppercase tracking-tighter leading-none mb-3 font-display">
                            CAMPUS <span className="text-[#ffc107]">LIFE</span>
                        </h1>
                        <p className="text-white/60 font-medium text-[10px] md:text-sm max-w-2xl mx-auto uppercase tracking-widest leading-loose">
                            Explore the world-class facilities and vibrant <br className="hidden md:block"/> ecosystem at KIOT.
                        </p>
                    </motion.div>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-6 pt-12 pb-12 relative z-20">
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <p className="text-[#18357a] font-black text-[13px] uppercase tracking-[0.6em] mb-2 font-display bg-[#ffc107] py-3 inline-block px-12 rounded-xl border-2 border-[#18357a]/10">CAMPUS HIGHLIGHTS</p>
                    <p className="text-slate-900 font-black text-lg max-w-2xl mx-auto uppercase tracking-wide leading-relaxed">
                        Our campus blends advanced facilities with a supportive <br className="hidden md:block"/> and inspiring learning atmosphere.
                    </p>
                </motion.div>

                <div className="space-y-40">
                    {[
                        { 
                            t: "Advanced Infrastructure", 
                            d: "Cutting-edge classrooms, fully equipped labs, and smart learning environments designed for modern education. Our infrastructure is built to support innovation and high-performance academic research.",
                            icon: Monitor,
                            c: "#18357a",
                            img: "https://images.unsplash.com/photo-1632833075677-2f1f6cba9c1e?q=80&w=1200&auto=format&fit=crop"
                        },
                        { 
                            t: "Dynamic Campus Life", 
                            d: "A welcoming and diverse community that encourages collaboration, creativity, and cultural engagement. Student-led initiatives and global exposure programs define our vibrant campus ecosystem.",
                            icon: Compass,
                            c: "#ffc107",
                            img: "https://images.unsplash.com/photo-1620912189865-1e8a33da4c5e?q=80&w=1200&auto=format&fit=crop"
                        },
                        { 
                            t: "Excellence in Sports", 
                            d: "Top-tier sports facilities and expert guidance to develop skills, fitness, and competitive spirit. We provide professional coaching and international-standard arenas for every athlete.",
                            icon: Trophy,
                            c: "#18357a",
                            img: "https://images.unsplash.com/photo-1541258283038-f80e7d953049?q=80&w=1200&auto=format&fit=crop"
                        }
                    ].map((item, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className={`flex flex-col ${idx % 2 !== 0 ? 'md:flex-row-reverse' : 'md:flex-row'} items-center gap-16 lg:gap-24`}
                        >
                            {/* Image Part - Reduced Size */}
                            <div className="w-full md:w-[42%] relative group">
                                <div className="absolute -inset-3 bg-slate-100 rounded-[2rem] -rotate-1 group-hover:rotate-0 transition-transform duration-500" />
                                <div className="relative rounded-[1.8rem] overflow-hidden shadow-xl aspect-[16/11]">
                                    <img src={item.img} alt={item.t} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                                    <div className="absolute inset-0 bg-gradient-to-t from-[#18357a]/30 to-transparent" />
                                </div>
                            </div>

                            {/* Text Part - Expanded Focus */}
                            <div className="w-full md:w-[58%] space-y-6">
                                <div className="flex items-center gap-4">
                                    <div className="h-0.5 w-10" style={{ backgroundColor: item.c }} />
                                    <span className="text-[10px] font-black uppercase tracking-[4px]" style={{ color: item.c }}>Institutional Excellence</span>
                                </div>
                                <h3 className="text-3xl md:text-5xl font-black text-[#18357a] uppercase tracking-tighter leading-none">
                                    {item.t.split(' ')[0]} <br/> 
                                    <span className="text-[#ffc107]">{item.t.split(' ').slice(1).join(' ')}</span>
                                </h3>
                                <p className="text-[14px] md:text-[15px] font-black text-black leading-relaxed tracking-wide text-justify">
                                    {item.d}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
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
                                    <p className="text-[11px] font-black uppercase tracking-[3px] text-white/70 leading-tight">
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
                    <p className="text-[11px] font-black text-slate-900 uppercase tracking-[4px] mt-2 leading-none">
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
                                    <h3 className="text-[14px] font-black text-[#18357a] uppercase tracking-tight leading-none group-hover:text-[#ffc107] transition-colors">{hub.title}</h3>
                                    <p className="text-[10px] font-black text-black uppercase tracking-widest leading-tight opacity-80">{hub.subtitle}</p>
                                    <div className="flex items-center justify-center gap-2 pt-3 transition-all -translate-x-1 group-hover:translate-x-0">
                                        <span className="text-[8px] font-black text-[#18357a] uppercase tracking-widest">Access Hub</span>
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
