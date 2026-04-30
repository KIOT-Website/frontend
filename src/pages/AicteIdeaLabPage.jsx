import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { 
    Wrench, 
    Lightbulb, 
    Target, 
    Users, 
    Cpu, 
    ShieldCheck, 
    ChevronRight,
    ArrowRight,
    Settings,
    Layers,
    FlaskConical,
    Microscope,
    PenTool,
    Zap,
    CircuitBoard,
    Radio,
    Box,
    Brain,
    Globe,
    Handshake,
    Code,
    Rocket,
    X,
    Search,
    ExternalLink,
    ArrowUpRight
} from 'lucide-react'
import { useNavigate } from 'react-router-dom'

// Importing assets from the 'idea lap' folder
import printersImg from '../assets/idea lap/3D Printers.webp'
import modelingImg from '../assets/idea lap/3d modelling wing.webp'
import cncImg from '../assets/idea lap/CNC Wood Router Machine.webp'
import laserImg from '../assets/idea lap/Co2 Laser Cutter Machine.webp'
import inaugurationImg from '../assets/idea lap/Inauguration ceremony.webp'
import iotImg from '../assets/idea lap/IoT Design wing.webp'
import pcbImg from '../assets/idea lap/PCB  Design wing.webp'
import specialMachineImg from '../assets/idea lap/Special Machine wing.webp'
import ambassadors24Img from '../assets/idea lap/Student Ambassadors  2024-25.webp'
import ambassadors25Img from '../assets/idea lap/Student Ambassadors2025-26.webp'
import sublimationImg from '../assets/idea lap/Sublimation Printing unit.webp'
import run1 from '../assets/idea lap/run1.png'
import run2 from '../assets/idea lap/run2.png'
import aicteLogo from '../assets/idea lap/aicte_official_logo.png'
import govtEmblem from '../assets/idea lap/govt_india_emblem.png'
import ideaLabLogo from '../assets/idea lap/aicte_idea_lab_logo.png'

const IdeaLabPage = () => {
    const navigate = useNavigate()
    const [selectedImage, setSelectedImage] = useState(null)

    const features = [
        {
            title: "IDEA Lab Initiative",
            description: "Government-supported innovation hub",
            icon: Lightbulb,
        },
        {
            title: "Top 113 Institution",
            description: "Among India's premier labs",
            icon: Target,
        },
        {
            title: "Hands-on STEM Learning",
            description: "Practical skill development",
            icon: Wrench,
        },
        {
            title: "Maker Culture",
            description: "Collaborative innovation space",
            icon: Users,
        }
    ]

    const galleryItems = [
        { title: "Inauguration Ceremony", desc: "Official launch of KIOT AICTE IDEA Lab", img: inaugurationImg },
        { title: "Student Ambassadors 2024-25", desc: "Our first batch of student ambassadors", img: ambassadors24Img },
        { title: "Student Ambassadors 2025-26", desc: "Current student ambassadors", img: ambassadors25Img },
        { title: "3D Printers", desc: "Advanced 3D printing facilities", img: printersImg },
        { title: "3D Modelling Wing", desc: "Digital design and rapid prototyping", img: modelingImg },
        { title: "CNC Wood Router Machine", desc: "Precision wood carving and routing", img: cncImg },
        { title: "CO2 Laser Cutter Machine", desc: "Laser cutting and engraving unit", img: laserImg },
        { title: "IoT Design Wing", desc: "Smart systems and sensor integration", img: iotImg },
        { title: "PCB Design Wing", desc: "Circuit design and fabrication", img: pcbImg },
        { title: "Special Machine Wing", desc: "Advanced manufacturing tools", img: specialMachineImg },
        { title: "Sublimation Printing Unit", desc: "Custom fabric and mug printing", img: sublimationImg }
    ]

    return (
        <div className="min-h-screen bg-white font-sans overflow-x-hidden">
            {/* LIGHTBOX POPUP */}
            <AnimatePresence>
                {selectedImage && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setSelectedImage(null)}
                        className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-xl flex items-center justify-center p-6 lg:p-12 cursor-zoom-out"
                    >
                        <motion.button
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            className="absolute top-8 right-8 w-14 h-14 bg-white/10 hover:bg-white text-white hover:text-[#224292] rounded-full flex items-center justify-center transition-all z-[110]"
                        >
                            <X size={28} />
                        </motion.button>
                        
                        <motion.img
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            src={selectedImage}
                            className="max-w-full max-h-full object-contain rounded-2xl shadow-2xl"
                        />
                    </motion.div>
                )}
            </AnimatePresence>
            {/* HERO SECTION - COMPACTED DESIGN */}
            <div className="relative bg-[#224292] pt-12 pb-20 overflow-hidden rounded-b-[3rem] lg:rounded-b-[4rem] font-graphik">
                {/* Background decorative circles */}
                <div className="absolute top-10 right-10 w-48 h-48 border border-white/5 rounded-full" />
                <div className="absolute top-20 right-20 w-80 h-80 border border-white/5 rounded-full" />

                <div className="relative z-10 w-full max-w-[1500px] mx-auto px-6 lg:px-12">
                    <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-20">
                        {/* Left Content */}
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                            className="lg:w-1/2 text-left"
                        >
                            <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/5 border border-white/10 rounded-full mb-6">
                                <div className="w-4 h-4 rounded-full bg-[#ffc107] flex items-center justify-center">
                                    <Lightbulb size={10} className="text-[#224292]" />
                                </div>
                                <span className="text-[9px] font-black text-white tracking-widest">Research & Innovations</span>
                            </div>

                            <h1 className="text-4xl lg:text-6xl font-black text-white leading-none mb-4 tracking-tight">
                                AICTE <span className="text-[#ffc107]">IDEA LAB</span>
                            </h1>
                            <p className="text-xl lg:text-2xl font-black mb-4 leading-tight text-white/90">
                                Innovate. Build. Transform.
                            </p>
                            <div className="h-1 w-16 bg-[#ffc107] mb-6" />
                            
                            <p className="text-white text-sm lg:text-base font-black leading-relaxed max-w-xl mb-6">
                                A collaborative maker space to turn ideas into real-world prototypes. Government-supported innovation hub for hands-on STEM learning.
                            </p>

                            {/* 4-Step Innovation Journey (Main Words Only) */}
                            <div className="grid grid-cols-2 gap-y-4 gap-x-6">
                                {[
                                    { title: "Ideate", icon: Lightbulb, color: "#ef4444" },
                                    { title: "Innovate", icon: Settings, color: "#3b82f6" },
                                    { title: "Collaborate", icon: Users, color: "#f59e0b" },
                                    { title: "Impact", icon: Target, color: "#10b981" }
                                ].map((f, i) => (
                                    <div key={i} className="flex items-center gap-3">
                                        <div className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center shrink-0">
                                            <f.icon size={14} style={{ color: f.color }} />
                                        </div>
                                        <h4 className="text-sm font-black text-white leading-none">{f.title}</h4>
                                    </div>
                                ))}
                            </div>
                        </motion.div>

                        {/* Right Content: Drawn Line Art Cards (Exactly matching reference style) */}
                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 1 }}
                            className="hidden lg:flex lg:w-1/2 items-center justify-center gap-4"
                        >
                            <div className="relative group w-60 h-80 bg-[#224292] rounded-[1.5rem] border border-[#3b82f6]/30 p-6 flex flex-col items-center justify-center text-center shadow-[0_0_50px_rgba(59,130,246,0.15)] overflow-hidden transition-all duration-500 hover:border-[#3b82f6]/60">
                                <div className="w-full h-full flex items-center justify-center">
                                    <img src={run1} alt="IDEA Lab Logo" className="w-full h-full object-contain relative z-20 scale-110 drop-shadow-[0_0_15px_rgba(59,130,246,0.5)]" />
                                </div>
                            </div>

                            <div className="relative group w-60 h-80 bg-[#224292] rounded-[1.5rem] border border-[#ffc107]/30 p-6 flex flex-col items-center justify-center text-center shadow-[0_0_50px_rgba(255,193,7,0.15)] overflow-hidden transition-all duration-500 hover:border-[#ffc107]/60 lg:mt-12">
                                <div className="w-full h-full flex items-center justify-center">
                                    <img src={run2} alt="AICTE Logo" className="w-full h-full object-contain relative z-20 scale-125" />
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>

            {/* FEATURE CARDS - COMPACTED STATS GRID */}
            <div className="relative -mt-12 z-20 w-full max-w-7xl mx-auto px-6 font-graphik">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                    {features.map((feature, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                            className="bg-white p-6 rounded-[1.5rem] group cursor-default shadow-xl border border-slate-50 flex flex-col items-center text-center relative overflow-hidden"
                        >
                            <div className="w-12 h-12 rounded-full bg-[#224292] flex items-center justify-center mb-4 shadow-lg shrink-0">
                                <feature.icon className="text-[#ffc107]" size={22} strokeWidth={2} />
                            </div>
                            <h3 className="text-[#224292] text-[16px] font-black mb-1 tracking-tight">{feature.title}</h3>
                            <p className="text-slate-500 text-[11px] font-black mb-4 leading-tight">{feature.description}</p>
                            <div className="w-10 h-1 bg-[#ffc107] rounded-full" />
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* ABOUT SECTION - MODERNIZED 2-COLUMN DESIGN */}
            <section className="py-10 bg-[#224292] overflow-hidden font-graphik mt-8">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="flex flex-col lg:flex-row items-center gap-16">
                        <div className="lg:w-1/2">
                            <h2 className="text-white text-[15px] font-black tracking-[0.3em] mb-2 opacity-80">About</h2>
                            <h2 className="text-4xl lg:text-5xl font-black text-white leading-tight mb-6">
                                <span className="text-[#ffc107]">IDEA</span> LAB
                            </h2>
                            <div className="space-y-6 text-white text-base leading-relaxed font-black text-left">
                                <p>
                                    The AICTE IDEA Lab at KIOT is a <span className="text-[#ffc107]">state-of-the-art maker space</span> designed to foster innovation and entrepreneurship among students.
                                </p>
                                <p>
                                    Equipped with <span className="text-[#ffc107]">cutting-edge tools and technologies</span>, the lab provides hands-on experience in <span className="text-[#ffc107]">prototyping, IoT, embedded systems</span>, and <span className="text-[#ffc107]">rapid manufacturing</span>. Our mission is to bridge the gap between academic learning and industry requirements.
                                </p>
                            </div>
                        </div>

                        <div className="lg:w-1/2 grid grid-cols-2 gap-4 w-full">
                            {[
                                { title: "Innovate", desc: "Encouraging creative ideas and solutions", icon: Lightbulb, bg: "bg-[#1e3c8a]/40", ic: "text-white", tc: "text-white/90" },
                                { title: "Build", desc: "Building prototypes and real-world models", icon: Settings, bg: "bg-[#ffc107]", ic: "text-[#224292]", tc: "text-[#224292]/80" },
                                { title: "Collaborate", desc: "Working together to grow better", icon: Users, bg: "bg-white", ic: "text-[#224292]", tc: "text-[#224292]/80" },
                                { title: "Impact", desc: "Creating solutions that make a difference", icon: Zap, bg: "bg-[#224292] border border-white/10", ic: "text-white", tc: "text-white/90" }
                            ].map((item, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: true }}
                                    className={`${item.bg} p-6 rounded-[2rem] flex flex-col items-center text-center shadow-xl group hover:scale-105 transition-all h-[180px] justify-center`}
                                >
                                    <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center mb-4 backdrop-blur-md">
                                        <item.icon className={item.ic} size={24} />
                                    </div>
                                    <h3 className={`text-[18px] font-black mb-1 ${item.ic}`}>{item.title}</h3>
                                    <p className={`text-[13px] font-black leading-tight max-w-[140px] ${item.tc}`}>{item.desc}</p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* OUR OBJECTIVES - CLEAN GRID DESIGN */}
            <section className="py-10 bg-[#f8fafc] font-graphik">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="flex items-center justify-center gap-4 mb-12">
                        <div className="h-[2px] w-16 bg-[#ffc107] rounded-full" />
                        <h2 className="text-2xl md:text-3xl font-black text-[#224292] tracking-tight">Our Objectives</h2>
                        <div className="h-[2px] w-16 bg-[#ffc107] rounded-full" />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {[
                            { title: "Prototype Development", desc: "Convert ideas into working models", icon: Box, color: "#1e3c8a" },
                            { title: "Skill Building", desc: "Enhancing skills in emerging technologies", icon: Brain, color: "#f59e0b" },
                            { title: "Interdisciplinary Learning", desc: "Encouraging cross-domain collaboration", icon: Globe, color: "#3b82f6" },
                            { title: "Industry Connect", desc: "Bridging the gap between academia and industry", icon: Handshake, color: "#f59e0b" }
                        ].map((obj, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className="bg-white p-6 rounded-[2rem] flex flex-col items-center text-center shadow-sm border border-slate-100 relative overflow-hidden group hover:shadow-2xl transition-all"
                            >
                                <div className="w-14 h-14 rounded-full flex items-center justify-center mb-4 shrink-0 shadow-inner group-hover:scale-110 transition-transform" style={{ backgroundColor: `${obj.color}15` }}>
                                    <obj.icon size={26} style={{ color: obj.color }} />
                                </div>
                                <h3 className="text-[#224292] text-[18px] font-black mb-3 tracking-tight leading-tight">{obj.title}</h3>
                                <p className="text-[#224292] font-black text-[13px] leading-tight mb-4 max-w-[180px]">{obj.desc}</p>
                                <div className="w-8 h-1 bg-[#ffc107] rounded-full" />
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* OUR TEAM - MODERNIZED WITH BADGES */}
            <section className="py-10 bg-[#f8fafc] font-graphik">
                <div className="max-w-7xl mx-auto px-6 text-center">
                    <div className="flex items-center justify-center gap-4 mb-12">
                        <div className="h-[2px] w-16 bg-[#ffc107] rounded-full" />
                        <h2 className="text-2xl md:text-3xl font-black text-[#224292] tracking-tight">Our Team</h2>
                        <div className="h-[2px] w-16 bg-[#ffc107] rounded-full" />
                    </div>
                    
                    {/* LEADERSHIP & COORDINATORS WRAPPER */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto mb-20">
                        {/* LEADERSHIP */}
                        <div>
                            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-[#1e3c8a]/10 border border-[#1e3c8a]/20 rounded-full mb-6">
                                <ShieldCheck size={14} className="text-[#1e3c8a]" />
                                <span className="text-[13px] font-black text-[#1e3c8a] tracking-widest">Leadership</span>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left">
                                {[
                                    { name: "Dr. PSS. Srinivasan", roles: ["Executive Chairman, KIOT", "Chief Advisor, KIOT AICTE IDEA LAB"], initials: "PS" },
                                    { name: "Dr. K. Visagavel", roles: ["Principal, KIOT", "Chief Mentor, KIOT AICTE IDEA LAB"], initials: "KV" }
                                ].map((leader, i) => (
                                    <div key={i} className="bg-[#224292] p-6 rounded-[2rem] flex items-center gap-4 relative overflow-hidden group shadow-xl">
                                        <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center text-white text-[18px] font-black border border-white/20 shrink-0 group-hover:bg-[#ffc107] group-hover:text-[#224292] transition-all">
                                            {leader.initials}
                                        </div>
                                        <div className="min-w-0">
                                            <h4 className="text-white text-[15px] font-black leading-tight mb-1 whitespace-nowrap">{leader.name}</h4>
                                            {leader.roles.map((role, ri) => (
                                                <p key={ri} className={`text-[13px] ${ri === 0 ? 'text-white' : 'text-[#ffc107]'} font-black leading-tight`}>{role}</p>
                                            ))}
                                        </div>
                                        <div className="absolute top-4 right-4">
                                            <ShieldCheck size={16} className="text-[#ffc107] opacity-50" />
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* COORDINATORS */}
                        <div>
                            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-[#ffc107]/10 border border-[#ffc107]/20 rounded-full mb-6">
                                <Users size={14} className="text-[#ffc107]" />
                                <span className="text-[13px] font-black text-[#ffc107] tracking-widest">Coordinators</span>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left">
                                {[
                                    { name: "Mr. M. Jagadeeshraja", roles: ["AP/EEE", "Coordinator, KIOT AICTE IDEA LAB"], initials: "MJ" },
                                    { name: "Mr. M. Dineshkumar", roles: ["AP/ECE", "Co-Coordinator, KIOT AICTE IDEA LAB"], initials: "MD" }
                                ].map((coord, i) => (
                                    <div key={i} className="bg-white p-6 rounded-[2rem] flex items-center gap-4 border border-slate-100 shadow-sm group hover:shadow-xl transition-all">
                                        <div className="w-12 h-12 bg-[#224292]/5 rounded-full flex items-center justify-center text-[#224292] text-[18px] font-black border border-[#224292]/10 shrink-0 group-hover:bg-[#224292] group-hover:text-white transition-all">
                                            {coord.initials}
                                        </div>
                                        <div className="min-w-0">
                                            <h4 className="text-[#224292] text-[15px] font-black leading-tight mb-1 whitespace-nowrap">{coord.name}</h4>
                                            {coord.roles.map((role, ri) => (
                                                <p key={ri} className={`text-[13px] ${ri === 0 ? 'text-[#224292]' : 'text-[#1e3c8a]'} font-black leading-tight`}>{role}</p>
                                            ))}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* TECHGURUS GRID */}
                    <div className="pt-12 border-t border-slate-200">
                        <div className="flex items-center justify-center gap-4 mb-12">
                            <div className="h-[2px] w-16 bg-[#ffc107] rounded-full" />
                            <h3 className="text-2xl md:text-3xl font-black text-[#224292] tracking-tight text-center">Techgurus of KIOT AICTE IDEA Lab</h3>
                            <div className="h-[2px] w-16 bg-[#ffc107] rounded-full" />
                        </div>
                        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
                            {[
                                { n: "Mr. BST. Ragu", d: "AP/ECE" },
                                { n: "Mr. A. Gajendran", d: "AP/MECH" },
                                { n: "Mrs. S. Sasidevi", d: "AP/ECE" },
                                { n: "Mr. M. Rajkumar", d: "AP/EEE" },
                                { n: "Mr. S. Rajeshkumar", d: "AP/CIVIL" },
                                { n: "Mr. R. Ayyappan", d: "AP/IT" },
                                { n: "Mr. R. Sivaguru", d: "AP/CSE" },
                                { n: "Mr. M. Gopikumaran", d: "AP/CSBS" },
                                { n: "Mr. R. Ramesh", d: "AP/AI&DS" },
                                { n: "Mr. M. Karthi", d: "Teaching Assistant" }
                            ].map((guru, i) => (
                                <div key={i} className="bg-white p-5 rounded-2xl border border-slate-100 text-left hover:border-[#ffc107] transition-all flex flex-col gap-2 group shadow-sm hover:shadow-lg">
                                    <div className="w-8 h-8 rounded-full bg-slate-50 flex items-center justify-center text-[#224292] group-hover:bg-[#ffc107] transition-all">
                                        <Users size={14} />
                                    </div>
                                    <div>
                                        <h5 className="text-[#224292] text-[13px] font-black leading-tight">{guru.n}</h5>
                                        <p className="text-[#224292] text-[13px] font-black leading-tight mt-1">{guru.d}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* WING TUTORIALS - FULL 4-CARD MODERNIZED GRID */}
            <section className="py-16 bg-white font-graphik">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="flex items-center justify-center gap-4 mb-12">
                        <div className="h-[2px] w-16 bg-[#ffc107] rounded-full" />
                        <h2 className="text-2xl md:text-3xl font-black text-[#224292] tracking-tight">Wing Tutorials</h2>
                        <div className="h-[2px] w-16 bg-[#ffc107] rounded-full" />
                    </div>
                    
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                        {/* PCB DESIGN WING */}
                        <div className="bg-[#f8fafc] p-1 rounded-[2.5rem] border border-slate-100 shadow-sm">
                            <div className="bg-white p-8 rounded-[2.2rem] h-full">
                                <div className="flex items-center gap-4 mb-8">
                                    <div className="w-12 h-12 bg-[#1e3c8a] rounded-2xl flex items-center justify-center text-white">
                                        <CircuitBoard size={24} />
                                    </div>
                                    <h3 className="text-[#224292] text-[16px] font-black tracking-tight">PCB Design Wing</h3>
                                </div>
                                <div className="space-y-3">
                                    {[
                                        { t: "KiCad Software", i: Code, l: "" },
                                        { t: "Design sample circuit using KiCad", i: Cpu, l: "https://www.youtube.com/watch?v=0rKLRx804-Y" },
                                        { t: "PCB Fabrication process", i: Layers, l: "https://www.youtube.com/watch?v=4HlRi756gwk" }
                                    ].map((item, idx) => (
                                        <div key={idx} onClick={() => item.l && window.open(item.l, '_blank')} className="flex items-center justify-between p-4 bg-[#f8fafc] rounded-2xl group hover:bg-[#1e3c8a]/5 transition-all cursor-pointer border border-transparent hover:border-[#1e3c8a]/10">
                                            <div className="flex items-center gap-4">
                                                <div className="w-10 h-10 bg-white shadow-sm rounded-xl flex items-center justify-center text-[#1e3c8a] group-hover:bg-[#1e3c8a] group-hover:text-white transition-all">
                                                    <item.i size={18} />
                                                </div>
                                                <span className="text-[#224292] font-black text-sm">{item.t}</span>
                                            </div>
                                            <ChevronRight size={16} className="text-slate-300 group-hover:text-[#1e3c8a] transition-all" />
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* 3D MODELLING WING */}
                        <div className="bg-[#fff9e6] p-1 rounded-[2.5rem] border border-[#ffc107]/20 shadow-sm">
                            <div className="bg-white p-8 rounded-[2.2rem] h-full">
                                <div className="flex items-center gap-4 mb-8">
                                    <div className="w-12 h-12 bg-[#ffc107] rounded-2xl flex items-center justify-center text-[#224292]">
                                        <Box size={24} />
                                    </div>
                                    <h3 className="text-[#224292] text-[16px] font-black tracking-tight">3D Modelling Wing</h3>
                                </div>
                                <div className="space-y-3">
                                    {[
                                        { t: "Introduction to 3D Printing (P-1)", i: Box, l: "https://www.youtube.com/watch?v=sd3I7I9X62I" },
                                        { t: "Introduction to 3D Printing (P-2)", i: Box, l: "https://www.youtube.com/watch?v=eIIjoo08uwU" },
                                        { t: "3D Modelling using Fusion 360", i: Settings, l: "" }
                                    ].map((item, idx) => (
                                        <div key={idx} onClick={() => item.l && window.open(item.l, '_blank')} className="flex items-center justify-between p-4 bg-[#fff9e6]/30 rounded-2xl group hover:bg-[#ffc107]/10 transition-all cursor-pointer border border-transparent hover:border-[#ffc107]/20">
                                            <div className="flex items-center gap-4">
                                                <div className="w-10 h-10 bg-white shadow-sm rounded-xl flex items-center justify-center text-[#ffc107] group-hover:bg-[#ffc107] group-hover:text-white transition-all">
                                                    <item.i size={18} />
                                                </div>
                                                <span className="text-[#224292] font-black text-sm">{item.t}</span>
                                            </div>
                                            <ChevronRight size={16} className="text-[#ffc107]/50 group-hover:text-[#ffc107] transition-all" />
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* IOT DESIGN WING */}
                        <div className="bg-[#e0f2fe] p-1 rounded-[2.5rem] border border-[#3b82f6]/20 shadow-sm">
                            <div className="bg-white p-8 rounded-[2.2rem] h-full">
                                <div className="flex items-center gap-4 mb-8">
                                    <div className="w-12 h-12 bg-[#3b82f6] rounded-2xl flex items-center justify-center text-white">
                                        <Globe size={24} />
                                    </div>
                                    <h3 className="text-[#224292] text-[16px] font-black tracking-tight">IOT Design Wing</h3>
                                </div>
                                <div className="space-y-3">
                                    {[
                                        { t: "Arduino IDE Software", i: Code, l: "https://www.youtube.com/watch?v=0MdwdgaHUx8" },
                                        { t: "Introduction to IoT", i: Cpu, l: "https://www.youtube.com/watch?v=FSA9qGZ6-Yo" },
                                        { t: "Sample Project in IoT", i: Zap, l: "" }
                                    ].map((item, idx) => (
                                        <div key={idx} onClick={() => item.l && window.open(item.l, '_blank')} className="flex items-center justify-between p-4 bg-[#e0f2fe]/30 rounded-2xl group hover:bg-[#3b82f6]/10 transition-all cursor-pointer border border-transparent hover:border-[#3b82f6]/20">
                                            <div className="flex items-center gap-4">
                                                <div className="w-10 h-10 bg-white shadow-sm rounded-xl flex items-center justify-center text-[#3b82f6] group-hover:bg-[#3b82f6] group-hover:text-white transition-all">
                                                    <item.i size={18} />
                                                </div>
                                                <span className="text-[#224292] font-black text-sm">{item.t}</span>
                                            </div>
                                            <ChevronRight size={16} className="text-[#3b82f6]/50 group-hover:text-[#3b82f6] transition-all" />
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* SPECIAL MACHINE WING */}
                        <div className="bg-[#f0fdf4] p-1 rounded-[2.5rem] border border-[#22c55e]/20 shadow-sm">
                            <div className="bg-white p-8 rounded-[2.2rem] h-full">
                                <div className="flex items-center gap-4 mb-8">
                                    <div className="w-12 h-12 bg-[#22c55e] rounded-2xl flex items-center justify-center text-white">
                                        <Settings size={24} />
                                    </div>
                                    <h3 className="text-[#224292] text-[16px] font-black tracking-tight">Special Machine Wing</h3>
                                </div>
                                <div className="space-y-3">
                                    {[
                                        { t: "Laser cutter and Engraving demo", i: Zap, l: "https://www.youtube.com/watch?v=U4qZWNl0c60&list=PLbvThpbHXeuo4vBQvKnnIxPpzEl9Yf8WX" },
                                        { t: "Sublimation Mug Printing demo", i: Settings, l: "https://www.youtube.com/watch?v=H2lh3oVOcOo&list=PLbvThpbHXeuo4vBQvKnnIxPpzEl9Yf8WX&index=2" }
                                    ].map((item, idx) => (
                                        <div key={idx} onClick={() => item.l && window.open(item.l, '_blank')} className="flex items-center justify-between p-4 bg-[#f0fdf4]/30 rounded-2xl group hover:bg-[#22c55e]/10 transition-all cursor-pointer border border-transparent hover:border-[#22c55e]/20">
                                            <div className="flex items-center gap-4">
                                                <div className="w-10 h-10 bg-white shadow-sm rounded-xl flex items-center justify-center text-[#22c55e] group-hover:bg-[#22c55e] group-hover:text-white transition-all">
                                                    <item.i size={18} />
                                                </div>
                                                <span className="text-[#224292] font-black text-sm">{item.t}</span>
                                            </div>
                                            <ChevronRight size={16} className="text-[#22c55e]/50 group-hover:text-[#22c55e] transition-all" />
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* FACILITIES GALLERY SECTION - RESTORED ORIGINAL CONTENT */}
            <section id="facilities" className="py-16 bg-white font-graphik">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="flex items-center justify-center gap-4 mb-12">
                        <div className="h-[2px] w-16 bg-[#ffc107] rounded-full" />
                        <h2 className="text-2xl md:text-3xl font-black text-[#224292] tracking-tight">Facilities</h2>
                        <div className="h-[2px] w-16 bg-[#ffc107] rounded-full" />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {galleryItems.map((item, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.05 }}
                                onClick={() => setSelectedImage(item.img)}
                                className="group relative h-[220px] rounded-[2rem] overflow-hidden cursor-pointer shadow-lg transition-all duration-500 hover:shadow-2xl"
                            >
                                <img 
                                    src={item.img} 
                                    alt={item.title} 
                                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-[#224292] via-[#224292]/20 to-transparent flex flex-col justify-end p-6 translate-y-2 group-hover:translate-y-0 transition-transform">
                                    <h4 className="text-white text-sm font-black leading-tight tracking-tight mb-0.5">
                                        {item.title}
                                    </h4>
                                    <p className="text-white text-[13px] font-bold opacity-0 group-hover:opacity-100 transition-opacity">{item.desc}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* BOTTOM CTA - MODERN PILL */}
            <div className="pb-16 flex justify-center font-graphik">
                <div className="bg-[#224292] text-white px-10 py-5 rounded-full flex items-center gap-6 shadow-2xl shadow-[#224292]/20 group hover:scale-105 transition-all">
                    <div className="w-10 h-10 bg-[#ffc107] rounded-full flex items-center justify-center text-[#224292]">
                        <Lightbulb size={20} className="animate-pulse" />
                    </div>
                    <span className="text-[16px] font-black tracking-tight">Empowering Ideas. Building Innovations. Creating Impact.</span>
                </div>
            </div>

        </div>
    )
}

export default IdeaLabPage
