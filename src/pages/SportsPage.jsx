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
  ChevronRight,
  LayoutGrid,
  Menu,
  ArrowRight,
  FileText,
  Phone
} from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

// Import Sports Images
import s1 from '../assets/sports/S-1.webp'
import s2 from '../assets/sports/s-2.webp'
import s3 from '../assets/sports/s-3.webp'
import s4 from '../assets/sports/s-4.webp'
import s5 from '../assets/sports/s-5.webp'
import s6 from '../assets/sports/s-6.webp'
import s7 from '../assets/sports/s-7.webp'
import s8 from '../assets/sports/s-8.webp'

const sportsImages = [s1, s2, s3, s4, s5, s6, s7, s8];

// Dynamic import for 6th KIOT Trophy images
const trophyImages = Object.values(import.meta.glob('../assets/sports/6TH KIOT TROPHY2025-26/*.webp', { eager: true, import: 'default' }));

// Dynamic import for Chess Tournament images
const chessImages = Object.values(import.meta.glob('../assets/sports/State level chess tournament  2026/*.webp', { eager: true, import: 'default' }));

// Dynamic import for CM Trophy images
const cmTrophyImages = Object.values(import.meta.glob('../assets/sports/CM TROPHY PHOTOS/*.webp', { eager: true, import: 'default' }));

// Dynamic import for District Level images
const districtImages = Object.values(import.meta.glob('../assets/sports/DISTRICT LEVEL PHOTOS/*.webp', { eager: true, import: 'default' }));

// Dynamic import for National Level images
const nationalLevelImages = Object.values(import.meta.glob('../assets/sports/national_level_photos/*.webp', { eager: true, import: 'default' }));

// Dynamic import for Faculty Open Tournament images
const facultyOpenImages = Object.values(import.meta.glob('../assets/sports/open_tournament_faculty/*.webp', { eager: true, import: 'default' }));

// Dynamic import for International Open Tournament images
const internationalOpenImages = Object.values(import.meta.glob('../assets/sports/open_tournament_international/*.webp', { eager: true, import: 'default' }));

// Dynamic import for Sports Day 2025-26 images
const sportsDayImages = Object.values(import.meta.glob('../assets/sports/sports_day_2025_26/*.webp', { eager: true, import: 'default' }));





const getGalleryItemDetails = (tab, idx) => {
    const cleanTab = tab.trim().toUpperCase();
    
    // Icon SVGs
    const chessIcon = (
        <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current">
            <path d="M19 22H5a1 1 0 0 1-1-1v-1.5a2.5 2.5 0 0 1 2.5-2.5h11a2.5 2.5 0 0 1 2.5 2.5V21a1 1 0 0 1-1 1zm-4.75-6a4.5 4.5 0 0 0 1.25-3c0-2-1.5-3.5-3.5-3.5S8.5 11 8.5 13a4.5 4.5 0 0 0 1.25 3h4.5zM12 9a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5z" />
        </svg>
    );
    const volleyballIcon = (
        <svg viewBox="0 0 24 24" className="w-4 h-4 fill-none stroke-current" strokeWidth="2">
            <circle cx="12" cy="12" r="10" />
            <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10M12 2a15.3 15.3 0 0 0-4 10 15.3 15.3 0 0 0 4 10M2 12h20" />
        </svg>
    );
    const runnerIcon = (
        <svg viewBox="0 0 24 24" className="w-4 h-4 fill-none stroke-current" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="18" cy="5" r="1.5" fill="currentColor" />
            <path d="M14 7a2 2 0 0 0-2-2H9c-1.1 0-2 .9-2 2v3M11 18v-4l-3-2V9l6 3 2-2M15 14v4l3 2" />
        </svg>
    );
    const tennisIcon = (
        <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current">
            <path d="M14.5 2A5.5 5.5 0 0 0 9 7.5c0 1.94.99 3.65 2.5 4.67v3.33a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2v-3.33a5.5 5.5 0 0 0-3-10.17zM14.5 11c-1.93 0-3.5-1.57-3.5-3.5S12.57 4 14.5 4 18 5.57 18 7.5 16.43 11 14.5 11zM6.5 16a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5z" />
        </svg>
    );
    const cricketIcon = (
        <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current">
            <path d="M18.5 2a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 14.5l8-8 3 3-8 8-3-3zm1.5 5.5L2 22l2-4 2 2z" />
        </svg>
    );

    if (cleanTab === 'STATE LEVEL CHESS TOURNAMENT 2026') {
        return { label: 'CHESS TOURNAMENT', icon: chessIcon };
    }

    if (cleanTab === '6TH KIOT TROPHY 2025-26') {
        const items = [
            { label: 'VOLLEYBALL MATCH', icon: volleyballIcon },
            { label: 'KABADDI MATCH', icon: runnerIcon },
            { label: 'ATHLETICS', icon: runnerIcon },
            { label: 'TABLE TENNIS', icon: tennisIcon }
        ];
        return items[idx % items.length];
    }

    if (cleanTab === 'CM TROPHY PHOTOS') {
        const items = [
            { label: 'BADMINTON MATCH', icon: tennisIcon },
            { label: 'CHESS TOURNAMENT', icon: chessIcon },
            { label: 'VOLLEYBALL MATCH', icon: volleyballIcon },
            { label: 'ATHLETICS', icon: runnerIcon }
        ];
        return items[idx % items.length];
    }

    if (cleanTab === 'DISTRICT LEVEL PHOTOS') {
        const items = [
            { label: 'BOXING TOURNAMENT', icon: runnerIcon },
            { label: 'BADMINTON MATCH', icon: tennisIcon },
            { label: 'JUDO MATCH', icon: runnerIcon },
            { label: 'TABLE TENNIS', icon: tennisIcon }
        ];
        return items[idx % items.length];
    }

    if (cleanTab === 'NATIONAL LEVEL PHOTOS') {
        const items = [
            { label: 'SHOOTING BALL', icon: volleyballIcon },
            { label: 'BADMINTON MATCH', icon: tennisIcon },
            { label: 'TABLE TENNIS', icon: tennisIcon }
        ];
        return items[idx % items.length];
    }

    if (cleanTab === 'OPEN TOURNAMENT FACULTY') {
        const items = [
            { label: 'BADMINTON MATCH', icon: tennisIcon },
            { label: 'CRICKET TOURNAMENT', icon: cricketIcon }
        ];
        return items[idx % items.length];
    }

    if (cleanTab === 'OPEN TOURNAMENT INTERNATIONAL') {
        const items = [
            { label: 'KICK BOXING', icon: runnerIcon },
            { label: 'HANDBALL MATCH', icon: volleyballIcon },
            { label: 'CHESS TOURNAMENT', icon: chessIcon }
        ];
        return items[idx % items.length];
    }

    // Default or SPORTS DAY 2025-26
    const items = [
        { label: 'CHESS TOURNAMENT', icon: chessIcon },
        { label: 'VOLLEYBALL MATCH', icon: volleyballIcon },
        { label: 'ATHLETICS', icon: runnerIcon },
        { label: 'TABLE TENNIS', icon: tennisIcon }
    ];
    return items[idx % items.length];
};

const SportsPage = () => {
    const navigate = useNavigate();
    const [currentIndex, setCurrentIndex] = useState(0)
    const [selectedImage, setSelectedImage] = useState(null)
    const [activeTab, setActiveTab] = useState('6TH KIOT TROPHY 2025-26')

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
                            className="relative max-w-5xl w-full rounded-2xl overflow-hidden shadow-2xl"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <img src={selectedImage} className="w-full max-h-[85vh] object-contain mx-auto shadow-2xl" alt="Full view" />
                            <button 
                                onClick={() => setSelectedImage(null)}
                                className="absolute top-4 right-4 w-8 h-8 rounded-full bg-black/50 hover:bg-[#ffc107] text-white hover:text-[#224292] flex items-center justify-center backdrop-blur-md transition-all z-50 shadow-lg"
                            >
                                <X size={16} strokeWidth={3} />
                            </button>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Hero Section */}
            <div className="relative h-[25vh] flex items-center justify-center overflow-hidden bg-[#224292]">
                <div className="absolute inset-0">
                    <img 
                        src="https://images.unsplash.com/photo-1459749411177-0421800673d6?q=80&w=1920&auto=format&fit=crop" 
                        className="w-full h-full object-cover opacity-50" 
                        alt="Sports"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-[#224292]/90 via-[#224292]/70 to-transparent" />
                </div>
                
                <div className="relative z-10 text-center px-6">
                    <motion.div
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.8 }}
                        className="flex flex-col items-center"
                    >
                        <p className="text-[#ffc107] text-[12px] md:text-[14px] font-black tracking-[4px] mb-3 drop-shadow-lg">
                            Department of Physical Education
                        </p>
                        <h1 className="text-3xl md:text-5xl font-black text-white tracking-tight leading-none mb-6">
                            Sports & <span className="text-[#ffc107]">Games</span>
                        </h1>
                        

                    </motion.div>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-6 py-10 md:py-16 relative z-20 space-y-16 md:space-y-24">

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
                        
                        <div className="absolute inset-0 bg-gradient-to-t from-[#224292]/60 via-transparent to-transparent flex items-end p-8">
                            <div className="w-full flex flex-col md:flex-row justify-between items-end gap-4">
                                <div>
                                    <h3 className="text-white text-lg md:text-xl font-black tracking-tight">Gallery Showcase</h3>
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

                    {/* Right: Quick Access Hub */}
                    <div className="space-y-6">
                        <div className="bg-[#224292] p-7 rounded-3xl shadow-2xl relative overflow-hidden group">
                            <div className="absolute -right-8 -bottom-8 w-32 h-32 bg-white/5 rounded-full group-hover:scale-150 transition-transform duration-700" />
                            <h2 className="text-white text-lg font-black tracking-widest mb-6 flex items-center gap-3">
                                <Menu size={20} className="text-[#ffc107]" />
                                Directories
                            </h2>
                            <div className="space-y-3">
                                {[
                                    { title: 'Faculty Details', icon: <Users size={18} />, path: '/campus-life/sports/faculty' },
                                    { title: 'Ground Facilities', icon: <MapPin size={18} />, path: '/campus-life/sports/facilities' },
                                    { title: 'Department Contact', icon: <Phone size={18} />, path: 'tel:+919894701234', sub: '+91 98947 01234', isContact: true },
                                ].map((item, idx) => (
                                    <button
                                        key={idx}
                                        onClick={() => item.isContact ? (window.location.href = item.path) : navigate(item.path)}
                                        className={`w-full p-4 rounded-2xl flex items-center justify-between group/btn transition-all border border-white/5 backdrop-blur-sm ${
                                            item.isContact ? 'bg-[#ffc107]/10 hover:bg-[#ffc107]/20 border-[#ffc107]/20' : 'bg-white/10 hover:bg-white/20'
                                        }`}
                                    >
                                        <div className="flex items-center gap-4 text-white">
                                            <div className={`w-10 h-10 rounded-xl flex items-center justify-center transition-all ${
                                                item.isContact ? 'bg-[#ffc107] text-[#224292]' : 'bg-white/10 text-[#ffc107] group-hover/btn:bg-[#ffc107] group-hover/btn:text-[#224292]'
                                            }`}>
                                                {item.icon}
                                            </div>
                                            <div className="flex flex-col items-start">
                                                <span className="font-black text-[12px] tracking-wider">{item.title}</span>
                                                {item.sub && <span className="text-[11px] font-bold text-[#ffc107]">{item.sub}</span>}
                                            </div>
                                        </div>
                                        <ArrowRight size={18} className={`transition-all ${item.isContact ? 'text-[#ffc107] hidden sm:block' : 'text-white/40 group-hover/btn:translate-x-1 group-hover/btn:text-white'}`} />
                                    </button>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Vision & Mission (3rd) */}
                <div className="grid lg:grid-cols-2 gap-6">
                    {/* Vision Section */}
                    <motion.div 
                        whileHover={{ y: -5 }}
                        className="relative bg-white p-7 rounded-2xl shadow-xl border border-slate-100 flex items-start gap-6 overflow-hidden group"
                    >
                        <div className="absolute top-0 right-0 w-24 h-24 bg-[#224292]/5 rounded-full -translate-x-[-20%] -translate-y-[20%] group-hover:scale-150 transition-transform duration-700" />
                        <div className="hidden sm:flex flex-shrink-0 w-12 h-12 rounded-xl bg-[#224292] text-[#ffc107] items-center justify-center shadow-lg">
                            <Eye size={22} />
                        </div>
                        <div className="relative z-10">
                            <h3 className="text-sm font-black text-[#224292] tracking-[2px] mb-3 flex items-center gap-2">
                                Vision
                                <div className="w-6 h-0.5 bg-[#ffc107]" />
                            </h3>
                            <p className="text-black text-[12.5px] leading-relaxed font-bold text-justify">
                                We aim to lead Physical Education, Health Education, and Sports Science education locally, regionally, and ultimately internationally. We focus on excellence through educational research, development, and innovation. We will continue to nurture outstanding, responsible, and caring educators and professionals who contribute to social progress and human well-being.
                            </p>
                        </div>
                    </motion.div>

                    {/* Mission Section */}
                    <motion.div 
                        whileHover={{ y: -5 }}
                        className="relative bg-white p-7 rounded-2xl shadow-xl border border-slate-100 flex items-start gap-6 overflow-hidden group"
                    >
                        <div className="absolute top-0 right-0 w-24 h-24 bg-[#ffc107]/5 rounded-full -translate-x-[-20%] -translate-y-[20%] group-hover:scale-150 transition-transform duration-700" />
                        <div className="hidden sm:flex flex-shrink-0 w-12 h-12 rounded-xl bg-[#ffc107] text-[#224292] items-center justify-center shadow-lg">
                            <Target size={22} />
                        </div>
                        <div className="relative z-10">
                            <h3 className="text-sm font-black text-[#224292] tracking-[2px] mb-3 flex items-center gap-2">
                                Mission
                                <div className="w-6 h-0.5 bg-[#224292]" />
                            </h3>
                            <p className="text-black text-[12.5px] leading-relaxed font-bold text-justify">
                                Nurturing quality Physical Education teachers, sports and health professionals who are self-reliant and life-long learners. We equip them to integrate theory and practice, serve as role models, and promote healthy personal and professional behaviors. The department is committed to innovatively and strategically strengthening its leadership in the field of Physical Education, Health, and Sports Science.
                            </p>
                        </div>
                    </motion.div>
                </div>

                {/* Achievements & Events (4th) */}
                <div className="space-y-12">
                    <div className="flex items-center gap-4">
                        <div className="w-10 h-10 bg-[#224292] text-[#ffc107] rounded-xl flex items-center justify-center shadow-lg">
                            <Trophy size={20} />
                        </div>
                        <div>
                            <h2 className="text-2xl font-black text-[#224292] tracking-tight">Achievements & Events</h2>

                        </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {[
                            { title: 'Achievements', icon: <Trophy size={20} /> },
                            { title: 'Zone Level', icon: <Medal size={20} /> },
                            { title: 'Open Tournaments (Faculty)', icon: <Users size={20} />, path: 'open-tournaments-faculty' },
                            { title: 'Open Tournaments (Students)', icon: <Users size={20} />, path: 'open-tournaments-students' },
                            { title: 'CM Trophy', icon: <Award size={20} /> },
                            { title: 'Organized Tournaments', icon: <Calendar size={20} /> },
                            { title: 'Sports Day', icon: <Calendar size={20} />, path: 'sports-day' }
                        ].map((item, idx) => (
                            <motion.div
                                key={idx}
                                whileHover={{ y: -5, x: 5 }}
                                onClick={() => navigate(`/campus-life/sports/achievements/${item.path || item.title.toLowerCase().replace(/ /g, '-')}`)} // Pass category to detail page
                                className="group relative bg-white py-4 px-6 rounded-xl border border-slate-100 shadow-xl hover:shadow-slate-300/50 transition-all duration-500 overflow-hidden h-full cursor-pointer"
                            >
                                {/* Corner Accents */}
                                <div className="absolute top-0 right-0 w-20 h-20 bg-[#224292] translate-x-10 -translate-y-10 rotate-45 group-hover:scale-110 transition-transform duration-500" />
                                <div className="absolute top-0 right-0 w-14 h-14 bg-[#ffc107] translate-x-7 -translate-y-7 rotate-45 group-hover:scale-110 transition-transform duration-700 shadow-xl" />

                                <div className="relative z-10 flex flex-col items-center justify-center h-full text-center">
                                    <div className="w-8 h-8 rounded-lg bg-slate-50 border border-slate-100 text-[#224292] flex items-center justify-center group-hover:bg-[#224292] group-hover:text-[#ffc107] transition-all duration-500 mb-3 shadow-inner">
                                        {item.icon}
                                    </div>
                                    
                                    <div className="space-y-1">
                                        <h4 className="text-[16px] font-normal text-[#224292] tracking-tight leading-tight">
                                            {item.title}
                                            <div className="w-8 h-1 bg-[#ffc107] mt-1 mx-auto rounded-full" />
                                        </h4>
                                    </div>

                                    <div className="mt-4 flex justify-center">
                                        <div className="w-7 h-7 rounded-full bg-[#224292] flex items-center justify-center text-white group-hover:bg-[#ffc107] group-hover:text-[#224292] transition-all shadow-md">
                                            <ArrowUpRight size={12} />
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* Sports Gallery (5th) */}
                <div className="space-y-12">
                    <div className="text-center space-y-4">
                        <div className="w-14 h-14 bg-[#ffc107] text-[#224292] rounded-2xl flex items-center justify-center shadow-xl shadow-[#ffc107]/20 mx-auto mb-4">
                            <LayoutGrid size={28} />
                        </div>
                        <h2 className="text-4xl font-black text-[#224292] tracking-tight mb-2">Sports Gallery</h2>
                        <div className="flex justify-center items-center gap-1.5">
                            <div className="w-6 h-1 bg-[#224292] rounded-full" />
                            <div className="w-16 h-1.5 bg-[#ffc107] rounded-full" />
                            <div className="w-6 h-1 bg-[#224292] rounded-full" />
                        </div>
                    </div>

                    <div className="space-y-8">
                        {/* Category Tabs - Wrapped and Centered */}
                        <div className="flex flex-wrap gap-2 justify-center">
                            {[
                                "6TH KIOT TROPHY 2025-26",
                                "STATE LEVEL CHESS TOURNAMENT 2026",
                                "CM TROPHY PHOTOS",
                                "DISTRICT LEVEL PHOTOS",
                                "NATIONAL LEVEL PHOTOS",
                                "OPEN TOURNAMENT FACULTY",
                                "OPEN TOURNAMENT INTERNATIONAL",
                                "SPORTS DAY 2025-26"
                            ].map((tab) => (
                                <button
                                    key={tab}
                                    onClick={() => setActiveTab(tab)}
                                    className={`px-4 py-2 rounded-lg text-[12px] font-black tracking-wider transition-all border ${
                                        activeTab === tab 
                                        ? 'bg-[#224292] text-white border-[#224292] shadow-lg' 
                                        : 'bg-white text-[#224292] border-slate-100 hover:border-[#ffc107]'
                                    }`}
                                >
                                    {tab}
                                </button>
                            ))}
                        </div>
                    </div>

                    <motion.div 
                        layout
                        className="grid grid-cols-2 md:grid-cols-4 gap-4"
                    >
                        {(() => {
                            if (activeTab === '6TH KIOT TROPHY 2025-26') return trophyImages;
                            if (activeTab === 'STATE LEVEL CHESS TOURNAMENT 2026') return chessImages;
                            if (activeTab === 'CM TROPHY PHOTOS') return cmTrophyImages;
                            if (activeTab === 'DISTRICT LEVEL PHOTOS') return districtImages;
                            if (activeTab.trim() === 'NATIONAL LEVEL PHOTOS') return nationalLevelImages;
                            if (activeTab.trim() === 'OPEN TOURNAMENT FACULTY') return facultyOpenImages;
                            if (activeTab.trim() === 'OPEN TOURNAMENT INTERNATIONAL') return internationalOpenImages;
                            if (activeTab.trim() === 'SPORTS DAY 2025-26') return [...sportsDayImages].reverse();
                            return sportsImages;
                        })().map((img, idx) => {
                            const details = getGalleryItemDetails(activeTab, idx);
                            return (
                                <motion.div
                                    layout
                                    key={`${activeTab}-${idx}`}
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{ duration: 0.4 }}
                                    whileHover={{ scale: 1.02, y: -5 }}
                                    className="flex flex-col bg-white rounded-3xl overflow-hidden border border-slate-100 shadow-xl hover:shadow-2xl transition-all duration-300"
                                >
                                    <div 
                                        onClick={() => setSelectedImage(img)}
                                        className="relative aspect-[4/3] w-full overflow-hidden cursor-pointer group border-b border-slate-100"
                                    >
                                        <img src={img} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" alt={`${details.label} ${idx + 1}`} />
                                        <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                                            <div className="w-8 h-8 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white">
                                                <Eye size={16} />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="bg-[#224292] px-4 py-3 flex items-center gap-3 border-t border-[#224292]">
                                        <div className="w-8 h-8 rounded-full bg-[#ffc107] text-[#224292] flex items-center justify-center shrink-0 shadow-md">
                                            {details.icon}
                                        </div>
                                        <span className="text-white font-bold font-graphik text-[12px] tracking-wider truncate uppercase">
                                            {details.label}
                                        </span>
                                    </div>
                                </motion.div>
                            );
                        })}
                    </motion.div>
                </div>
            </div>
        </div>
    )
}

export default SportsPage
