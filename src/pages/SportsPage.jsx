import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { 
  Trophy, 
  Eye, 
  Target, 
  ArrowLeft,
  ArrowUpRight,
  X,
  Medal,
  Users,
  Award,
  Calendar,
  Flag,
  Star,
  MapPin,
  ChevronLeft,
  ChevronRight
} from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

// Import Sports Images
import s1 from '../assets/sports/S-1.jpeg'
import s2 from '../assets/sports/s-2.jpeg'
import s3 from '../assets/sports/s-3.jpeg'
import s4 from '../assets/sports/s-4.jpeg'
import s5 from '../assets/sports/s-5.jpeg'
import s6 from '../assets/sports/s-6.jpeg'
import s7 from '../assets/sports/s-7.jpeg'
import s8 from '../assets/sports/s-8.jpeg'

const sportsImages = [s1, s2, s3, s4, s5, s6, s7, s8];

const SportsPage = () => {
    const navigate = useNavigate();
    const [currentIndex, setCurrentIndex] = useState(0)
    const [selectedImage, setSelectedImage] = useState(null)

    // Auto-slide effect
    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % sportsImages.length)
        }, 4000)
        return () => clearInterval(timer)
    }, [])

    return (
        <div className="min-h-screen bg-[#FCFDFD] font-graphik pb-24">
            {/* Image Popup Modal */}
            <AnimatePresence>
                {selectedImage && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setSelectedImage(null)}
                        className="fixed inset-0 z-[9999] bg-black/95 backdrop-blur-md flex items-center justify-center p-4 md:p-12"
                    >
                        <motion.div
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.9, opacity: 0 }}
                            className="relative max-w-5xl w-full rounded-3xl overflow-hidden shadow-2xl"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <img src={selectedImage} className="w-full max-h-[85vh] object-contain mx-auto shadow-2xl" alt="Full view" />
                            <button 
                                onClick={() => setSelectedImage(null)}
                                className="absolute top-6 right-6 w-12 h-12 rounded-full bg-white/10 hover:bg-[#ffc107] text-white hover:text-[#18357a] flex items-center justify-center backdrop-blur-md transition-all shadow-xl"
                            >
                                <X size={24} strokeWidth={3} />
                            </button>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Hero Section */}
            <div className="relative h-[25vh] flex items-center justify-center overflow-hidden bg-[#18357a]">
                <div className="absolute inset-0">
                    <img 
                        src="https://images.unsplash.com/photo-1459749411177-0421800673d6?q=80&w=1920&auto=format&fit=crop" 
                        className="w-full h-full object-cover opacity-50" 
                        alt="Sports"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-[#18357a]/90 via-[#18357a]/70 to-transparent" />
                </div>
                
                <div className="relative z-10 text-center px-6">
                    <motion.div
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.8 }}
                    >
                        <button 
                            onClick={() => navigate('/campus-life')}
                            className="inline-flex items-center gap-2 text-[#ffc107] hover:text-white transition-colors mb-4 group border border-[#ffc107]/30 px-3 py-1 rounded-full bg-[#18357a]/50 backdrop-blur-sm"
                        >
                            <ArrowLeft size={12} className="group-hover:-translate-x-1 transition-transform" />
                            <span className="text-[9px] font-black uppercase tracking-[2px]">Back to Hub</span>
                        </button>
                        <p className="text-[#ffc107] text-[9px] md:text-[10px] font-black uppercase tracking-[5px] mb-2 opacity-90">Department of Physical Education</p>
                        <h1 className="text-2xl md:text-4xl font-black text-white uppercase tracking-tighter leading-none mb-2">
                            SPORTS & <span className="text-[#ffc107]">GAMES</span>
                        </h1>
                    </motion.div>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-6 py-16 relative z-20 space-y-24">

                {/* Directory & Image Section (2nd) */}
                <div className="grid lg:grid-cols-[1fr_0.6fr] gap-12 items-start">
                    {/* Left: Image Slider */}
                    <div 
                        className="relative rounded-[1.5rem] overflow-hidden shadow-2xl border-4 border-white aspect-video bg-slate-100 group cursor-pointer"
                        onClick={() => setSelectedImage(sportsImages[currentIndex])}
                    >
                        <AnimatePresence mode="wait">
                            <motion.img 
                                key={currentIndex}
                                initial={{ opacity: 0, scale: 1.05 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.95 }}
                                transition={{ duration: 0.8, ease: "easeInOut" }}
                                src={sportsImages[currentIndex]} 
                                className="w-full h-full object-contain drop-shadow-2xl" 
                                alt={`Sports Excellence ${currentIndex + 1}`} 
                            />
                        </AnimatePresence>
                        
                        <div className="absolute inset-0 bg-gradient-to-t from-[#18357a]/60 via-transparent to-transparent flex items-end p-8">
                            <div className="w-full flex flex-col md:flex-row justify-between items-end gap-4">
                                <div>
                                    <h3 className="text-white text-lg md:text-xl font-black uppercase tracking-tight">Gallery Showcase</h3>
                                </div>
                                {/* Dots Indicator */}
                                <div className="flex gap-2 pb-1">
                                    {sportsImages.map((_, i) => (
                                        <div 
                                            key={i}
                                            onClick={(e) => {
                                                e.stopPropagation();
                                                setCurrentIndex(i);
                                            }}
                                            className={`h-1 rounded-full transition-all duration-500 ${i === currentIndex ? 'bg-[#ffc107] w-6' : 'bg-white/40 w-1'}`}
                                        />
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right: Directory Table */}
                    <div className="overflow-hidden rounded-xl border border-slate-100 bg-white shadow-2xl">
                        <table className="w-full text-left border-collapse">
                            <thead>
                                <tr className="bg-[#18357a]">
                                    <th className="px-6 py-5 text-[10px] font-black text-white uppercase tracking-[3px]">Directories</th>
                                    <th className="px-6 py-5 text-[10px] font-black text-white uppercase tracking-[3px] text-right">Link</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-slate-50">
                                {[
                                    { d: 'FACULTY DETAILS', link: '/campus-life/sports/faculty' },
                                    { d: 'GROUND FACILITIES', link: '/campus-life/sports/facilities' }
                                ].map((row, i) => (
                                    <tr key={i} className="group hover:bg-slate-50 transition-colors">
                                        <td className="px-6 py-5 text-[13px] font-black text-[#18357a] uppercase tracking-tight">{row.d}</td>
                                        <td className="px-6 py-5 text-right">
                                            <button 
                                                onClick={() => row.link !== '#' && navigate(row.link)}
                                                className="inline-flex items-center gap-2 text-[#18357a] font-black text-[9px] uppercase tracking-widest px-4 py-2 bg-[#ffc107] rounded-lg hover:bg-[#18357a] hover:text-white transition-all group/btn shadow-md"
                                            >
                                                Go
                                                <ArrowUpRight size={12} className="group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>

                {/* Vision & Mission (3rd) */}
                <div className="grid lg:grid-cols-2 gap-12 items-stretch">
                    {/* Vision Section */}
                    <motion.div 
                        whileHover={{ y: -5 }}
                        className="relative group bg-white p-8 rounded-xl shadow-2xl flex flex-col items-center border border-slate-100 transition-all duration-500"
                    >
                        <div className="w-16 h-16 rounded-full bg-[#18357a] flex items-center justify-center text-[#ffc107] mb-6 shadow-xl">
                            <Eye size={28} />
                        </div>
                        <h3 className="text-2xl font-black text-[#18357a] tracking-tighter uppercase mb-4">Vision</h3>
                        <p className="text-slate-600 text-[14px] leading-relaxed font-bold text-justify uppercase">
                            We aim to lead Physical Education, Health Education, and Sports Science education locally, regionally, and ultimately internationally. We focus on excellence through educational research, development, and innovation. We will continue to nurture outstanding, responsible, and caring educators and professionals who contribute to social progress and human well-being.
                        </p>
                    </motion.div>

                    {/* Mission Section */}
                    <motion.div 
                        whileHover={{ y: -5 }}
                        className="relative group bg-white p-8 rounded-xl shadow-2xl flex flex-col items-center border border-slate-100 transition-all duration-500"
                    >
                        <div className="w-16 h-16 rounded-full bg-[#18357a] flex items-center justify-center text-[#ffc107] mb-6 shadow-xl">
                            <Target size={28} />
                        </div>
                        <h3 className="text-2xl font-black text-[#18357a] tracking-tighter uppercase mb-4">Mission</h3>
                        <p className="text-slate-600 text-[14px] leading-relaxed font-bold text-justify uppercase">
                            Nurturing quality Physical Education teachers, sports and health professionals who are self-reliant and life-long learners. We equip them to integrate theory and practice, serve as role models, and promote healthy personal and professional behaviors. The department is committed to innovatively and strategically strengthening its leadership in the field of Physical Education, Health, and Sports Science.
                        </p>
                    </motion.div>
                </div>

                {/* Achievements & Events (4th) */}
                <div className="space-y-12">
                    <div className="flex items-center gap-4">
                        <div className="w-10 h-10 bg-[#18357a] text-[#ffc107] rounded-xl flex items-center justify-center shadow-lg">
                            <Trophy size={20} />
                        </div>
                        <div>
                            <h2 className="text-2xl font-black text-[#18357a] tracking-tight uppercase">Achievements & Events</h2>
                            <p className="text-[9px] font-black text-[#ffc107] uppercase tracking-[3px]">Institutional Sports Excellence</p>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {[
                            { title: 'Achievements', icon: <Trophy size={20} />, desc: 'Anna University & All India Level Excellence.' },
                            { title: 'Zone Level', icon: <Medal size={20} />, desc: 'Regional Competitive Excellence.' },
                            { title: 'Inter Zone Level', icon: <Star size={20} />, desc: 'Cross-University Zonal Championships.' },
                            { title: 'Open Tournaments', icon: <Users size={20} />, desc: 'National & State Level Competitions.' },
                            { title: 'CM Trophy', icon: <Award size={20} />, desc: 'Salem District Level Representations.' },
                            { title: 'Organized Events', icon: <Calendar size={20} />, desc: 'Campus Tournaments & Festivals.' },
                            { title: 'Sports Day', icon: <Flag size={20} />, desc: 'Annual Institutional Sports Meet.' }
                        ].map((item, idx) => (
                            <motion.div
                                key={idx}
                                whileHover={{ y: -5, x: 5 }}
                                onClick={() => navigate(`/campus-life/sports/achievements`)} // All point to unified achievements page
                                className="group relative bg-white py-4 px-6 rounded-xl border border-slate-100 shadow-xl hover:shadow-slate-300/50 transition-all duration-500 overflow-hidden h-full cursor-pointer"
                            >
                                {/* Corner Accents */}
                                <div className="absolute top-0 right-0 w-20 h-20 bg-[#18357a] translate-x-10 -translate-y-10 rotate-45 group-hover:scale-110 transition-transform duration-500" />
                                <div className="absolute top-0 right-0 w-14 h-14 bg-[#ffc107] translate-x-7 -translate-y-7 rotate-45 group-hover:scale-110 transition-transform duration-700 shadow-xl" />

                                <div className="relative z-10 flex flex-col h-full pr-8">
                                    <div className="w-8 h-8 rounded-lg bg-slate-50 border border-slate-100 text-[#18357a] flex items-center justify-center group-hover:bg-[#18357a] group-hover:text-[#ffc107] transition-all duration-500 mb-3 shadow-inner">
                                        {item.icon}
                                    </div>
                                    
                                    <div className="space-y-1">
                                        <h4 className="text-[16px] font-black text-[#18357a] tracking-tight leading-tight uppercase">
                                            {item.title}
                                            <div className="w-8 h-1 bg-[#ffc107] mt-1 rounded-full" />
                                        </h4>
                                        <p className="text-[11px] text-slate-800 font-bold leading-relaxed uppercase">
                                            {item.desc}
                                        </p>
                                    </div>

                                    <div className="mt-4 flex items-center">
                                        <div className="w-7 h-7 rounded-full bg-[#18357a] flex items-center justify-center text-white group-hover:bg-[#ffc107] group-hover:text-[#18357a] transition-all shadow-md">
                                            <ArrowUpRight size={12} />
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SportsPage
