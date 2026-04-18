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
                            className="absolute top-8 right-8 w-14 h-14 bg-white/10 hover:bg-white text-white hover:text-[#18357a] rounded-full flex items-center justify-center transition-all z-[110]"
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
            {/* HERO SECTION - COMPACT DESIGN WITH IMAGES */}
            <div className="relative bg-gradient-to-r from-[#1e3c8a] to-[#152e6d] pt-12 pb-6 lg:pt-20 lg:pb-8 overflow-hidden">
                <div className="relative z-10 w-full max-w-[1400px] mx-auto px-4 lg:px-12 flex flex-col lg:flex-row items-center justify-start gap-12 lg:gap-24">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        className="lg:w-3/5 text-left"
                    >
                        <h1 className="text-4xl lg:text-5xl font-black text-white leading-tight mb-2 tracking-tight">
                            AICTE IDEA <span className="text-[#ffc107]">LAB</span>
                        </h1>
                        <p className="text-white text-xl lg:text-2xl font-medium mb-8 opacity-90">
                            Innovate. Build. Transform.
                        </p>
                        <p className="text-white/80 text-base lg:text-lg font-medium leading-relaxed max-w-2xl">
                            A collaborative maker space to turn ideas into real-world prototypes. Government-supported innovation hub for hands-on STEM learning.
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1 }}
                        className="lg:w-2/5 flex items-center justify-center lg:justify-start gap-4"
                    >
                        <div className="relative w-36 h-36 lg:w-52 lg:h-52 rounded-2xl overflow-hidden bg-white/5 backdrop-blur-sm border border-white/10 shadow-2xl transition-all duration-300 p-4">
                            <img src={run1} alt="Innovation 1" className="w-full h-full object-contain" />
                        </div>
                        <div className="relative w-36 h-36 lg:w-52 lg:h-52 rounded-2xl overflow-hidden bg-white/5 backdrop-blur-sm border border-white/10 shadow-2xl transition-all duration-300 p-4">
                            <img src={run2} alt="Innovation 2" className="w-full h-full object-contain" />
                        </div>
                    </motion.div>
                </div>
            </div>

            {/* FEATURE CARDS - COMPACT & SEPARATED */}
            <div className="relative my-4 max-w-7xl mx-auto px-6">
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                    {features.map((feature, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                            className="bg-[#f0f4f8] p-6 rounded-2xl group cursor-default shadow-sm border border-white/20 transition-all hover:bg-white hover:shadow-lg"
                        >
                            <div className="w-10 h-10 flex items-center justify-center mb-4">
                                <feature.icon className="text-[#18357a]" size={32} strokeWidth={1.5} />
                            </div>
                            <h3 className="text-[#18357a] text-sm font-black mb-1 leading-tight uppercase tracking-tight">{feature.title}</h3>
                            <p className="text-[#18357a]/60 text-[10px] font-bold leading-relaxed">{feature.description}</p>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* ABOUT SECTION - MATCHING IMAGE 3 */}
            <section className="py-6 bg-white">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-32">
                        <div className="lg:w-1/2">
                            <h2 className="text-3xl lg:text-4xl font-black text-[#18357a] uppercase tracking-tighter mb-10">
                                ABOUT IDEA LAB
                            </h2>
                            <div className="space-y-6 text-black text-lg leading-relaxed font-medium text-left">
                                <p>
                                    The <span className="font-black text-[#18357a]">AICTE IDEA Lab</span> at KIOT is a <span className="font-black text-[#18357a]">state-of-the-art maker space</span> designed to foster innovation and entrepreneurship among students.
                                </p>
                                <p>
                                    Equipped with <span className="font-black text-[#18357a]">cutting-edge tools</span> and technologies, the lab provides hands-on experience in <span className="font-black text-[#18357a]">prototyping, IoT, embedded systems</span>, and rapid manufacturing. Our mission is to bridge the gap between academic learning and industry requirements by providing practical exposure to emerging technologies.
                                </p>
                            </div>
                        </div>

                        <div className="lg:w-1/2 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-2 gap-4 w-full">
                            {[
                                { icon: Lightbulb, color: "bg-[#18357a]" },
                                { icon: Cpu, color: "bg-[#ffc107]" },
                                { icon: Settings, color: "bg-[#ffc107]" },
                                { icon: Zap, color: "bg-[#18357a]" }
                            ].map((item, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.1 }}
                                    className={`${item.color} h-32 md:h-28 lg:h-36 rounded-2xl lg:rounded-3xl flex items-center justify-center shadow-lg group hover:scale-105 transition-transform duration-500`}
                                >
                                    <item.icon className={item.color === 'bg-[#18357a]' ? 'text-[#ffc107]' : 'text-[#18357a]'} size={40} strokeWidth={2} />
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* OBJECTIVES SECTION - MATCHING IMAGE 4 */}
            <section className="py-6 bg-[#f8fafc]">
                <div className="max-w-7xl mx-auto px-6 text-center">
                    <h2 className="text-3xl lg:text-4xl font-black text-[#18357a] uppercase tracking-tighter mb-20">
                        OUR OBJECTIVES
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {[
                            { title: "Prototype Development", desc: "Convert ideas into working models", icon: Box },
                            { title: "Skill Building", desc: "Critical thinking & innovation", icon: Brain },
                            { title: "Interdisciplinary Learning", desc: "Cross-domain collaboration", icon: Globe },
                            { title: "Industry Connect", desc: "Real-world exposure", icon: Handshake }
                        ].map((obj, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                className="bg-white p-8 rounded-3xl flex items-center gap-8 shadow-sm border border-slate-100 group hover:shadow-xl transition-all"
                            >
                                <div className="w-16 h-16 bg-[#18357a] rounded-2xl flex items-center justify-center shrink-0 text-white group-hover:bg-[#ffc107] group-hover:text-[#18357a] transition-all duration-500">
                                    <obj.icon size={32} strokeWidth={1.5} />
                                </div>
                                <div className="text-left">
                                    <h3 className="text-[#18357a] text-xl font-black mb-1 uppercase tracking-tight">{obj.title}</h3>
                                    <p className="text-slate-400 font-bold text-sm tracking-tight">{obj.desc}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* TEAM SECTION - MATCHING IMAGES 5 & 6 */}
            <section className="py-10 bg-white overflow-hidden">
                <div className="max-w-7xl mx-auto px-6 text-center">
                    <h2 className="text-3xl lg:text-4xl font-black text-[#18357a] uppercase tracking-tighter mb-12">
                        OUR TEAM
                    </h2>
                    
                    {/* LEADERSHIP */}
                    <div className="mb-12">
                        <h3 className="text-[#18357a] font-black text-sm uppercase mb-8">LEADERSHIP</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto text-left">
                            {[
                                { name: "Dr. PSS. Srinivasan", roles: ["Executive Chairman - KIOT", "Chief Advisor, KIOT AICTE IDEA LAB"], initials: "PS" },
                                { name: "Dr. K. Visagavel", roles: ["Principal - KIOT", "Chief Mentor, KIOT AICTE IDEA LAB"], initials: "KV" }
                            ].map((leader, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, scale: 0.95 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: true }}
                                    className="bg-[#18357a] p-6 rounded-[2rem] flex items-center gap-6 shadow-xl relative overflow-hidden group"
                                >
                                    <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center text-white text-2xl font-black border border-white/20 shrink-0 group-hover:bg-[#ffc107] group-hover:text-[#18357a] transition-all duration-500">
                                        {leader.initials}
                                    </div>
                                    <div className="relative z-10">
                                        <h4 className="text-white text-xl font-bold tracking-tight mb-1 group-hover:text-[#ffc107] transition-colors">{leader.name}</h4>
                                        {leader.roles.map((role, ri) => (
                                            <p key={ri} className={`text-[12px] ${ri === 0 ? 'text-white/60' : 'text-[#ffc107]'} font-semibold tracking-tight`}>{role}</p>
                                        ))}
                                    </div>
                                    <div className="absolute -top-4 -right-4 opacity-5">
                                        <ShieldCheck size={80} className="text-white" />
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    {/* COORDINATORS */}
                    <div className="mb-16">
                        <h3 className="text-[#18357a] font-black text-sm uppercase mb-8">COORDINATORS</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto text-left">
                            {[
                                { name: "Mr. M. Jagadeeshraja", roles: ["AP/EEE", "Coordinator, KIOT AICTE IDEA LAB"], initials: "MJ" },
                                { name: "Mr. M. Dineshkumar", roles: ["AP/ECE", "Co-Coordinator, KIOT AICTE IDEA LAB"], initials: "MD" }
                            ].map((coord, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, scale: 0.95 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: true }}
                                    className="bg-[#f8fafc] p-6 rounded-[2rem] flex items-center gap-6 border border-slate-100 group hover:bg-white hover:shadow-2xl transition-all duration-500"
                                >
                                    <div className="w-16 h-16 bg-[#18357a]/5 rounded-full flex items-center justify-center text-[#18357a] text-2xl font-black border border-[#18357a]/10 shrink-0 group-hover:bg-[#18357a] group-hover:text-white transition-all duration-500">
                                        {coord.initials}
                                    </div>
                                    <div>
                                        <h4 className="text-[#18357a] text-xl font-bold tracking-tight mb-1">{coord.name}</h4>
                                        {coord.roles.map((role, ri) => (
                                            <p key={ri} className={`text-[12px] ${ri === 0 ? 'text-slate-400' : 'text-[#18357a]'} font-semibold tracking-tight`}>{role}</p>
                                        ))}
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    {/* TECHGURUS */}
                    <div>
                        <h3 className="text-[#18357a] font-black text-sm uppercase mb-8">TECHGURUS OF KIOT AICTE IDEA LAB</h3>
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
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, y: 10 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.05 }}
                                    className="bg-[oklch(0.844171_0.0152028_0.171486_/_0.2)] p-4 rounded-xl border border-slate-100/50 text-left hover:bg-[#ffc107]/5 hover:border-[#ffc107] transition-all group"
                                >
                                    <h5 className="text-[#18357a] text-[13px] font-bold tracking-tight">{guru.n}</h5>
                                    <p className="text-[#18357a]/70 text-[11px] font-medium tracking-tight mt-0.5">{guru.d}</p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* WING TUTORIALS SECTION - MATCHING IMAGES 7 & 8 */}
            <section className="py-12 bg-[#f8fafc]">
                <div className="max-w-7xl mx-auto px-6">
                    <h2 className="text-3xl lg:text-4xl font-black text-[#18357a] uppercase tracking-tighter mb-12 text-center">
                        WING TUTORIALS
                    </h2>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {/* PCB DESIGN WING */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="bg-white p-8 rounded-[2rem] shadow-sm border border-slate-100"
                        >
                            <h3 className="text-[#18357a] text-lg font-black mb-6 uppercase tracking-tight">PCB DESIGN WING</h3>
                                <div className="space-y-3">
                                {[
                                    { t: "KiCad Software", i: Code, l: "" },
                                    { t: "Design a sample circuit using KiCad Software", i: Cpu, l: "https://www.youtube.com/watch?v=0rKLRx804-Y" },
                                    { t: "PCB Fabrication process", i: Layers, l: "https://www.youtube.com/watch?v=4HlRi756gwk" }
                                ].map((item, idx) => (
                                    <div 
                                        key={idx} 
                                        onClick={() => item.l && window.open(item.l, '_blank')}
                                        className={`flex items-center justify-between p-4 bg-[#f8fafc] rounded-xl group transition-all duration-300 ${item.l ? 'cursor-pointer hover:bg-slate-200/50' : ''}`}
                                    >
                                        <div className="flex items-center gap-4">
                                            <div className="w-10 h-10 bg-[#18357a] rounded-lg flex items-center justify-center text-[#ffc107] shrink-0">
                                                <item.i size={20} />
                                            </div>
                                            <span className="text-black font-bold text-sm lg:text-base tracking-tight">{item.t}</span>
                                        </div>
                                        {item.l && <ArrowUpRight size={18} className="text-[#18357a]/30 group-hover:text-[#18357a] transition-colors" />}
                                    </div>
                                ))}
                            </div>
                        </motion.div>

                        {/* 3D MODELLING WING */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="bg-white p-8 rounded-[2rem] shadow-sm border border-slate-100"
                        >
                            <h3 className="text-[#18357a] text-lg font-black mb-6 uppercase tracking-tight">3D MODELLING WING</h3>
                            <div className="space-y-3">
                                {[
                                    { t: "Introduction to 3D Printing (Part - 1)", i: Box, l: "https://www.youtube.com/watch?v=sd3I7I9X62I" },
                                    { t: "Introduction to 3D Printing (Part - 2)", i: Box, l: "https://www.youtube.com/watch?v=eIIjoo08uwU" }
                                ].map((item, idx) => (
                                    <div 
                                        key={idx} 
                                        onClick={() => item.l && window.open(item.l, '_blank')}
                                        className={`flex items-center justify-between p-4 bg-[#f8fafc] rounded-xl group transition-all duration-300 ${item.l ? 'cursor-pointer hover:bg-slate-200/50' : ''}`}
                                    >
                                        <div className="flex items-center gap-4">
                                            <div className="w-10 h-10 bg-[#18357a] rounded-lg flex items-center justify-center text-[#ffc107] shrink-0">
                                                <item.i size={20} />
                                            </div>
                                            <span className="text-black font-bold text-sm lg:text-base tracking-tight">{item.t}</span>
                                        </div>
                                        {item.l && <ArrowUpRight size={18} className="text-[#18357a]/30 group-hover:text-[#18357a] transition-colors" />}
                                    </div>
                                ))}
                            </div>
                        </motion.div>

                        {/* IOT DESIGN WING */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            className="bg-white p-8 rounded-[2rem] shadow-sm border border-slate-100"
                        >
                            <h3 className="text-[#18357a] text-lg font-black mb-6 uppercase tracking-tight">IOT DESIGN WING</h3>
                            <div className="space-y-3">
                                {[
                                    { t: "Arduino IDE Software", i: Cpu, l: "https://www.youtube.com/watch?v=0MdwdgaHUx8" },
                                    { t: "Introduction to IoT", i: Globe, l: "https://www.youtube.com/watch?v=FSA9qGZ6-Yo" },
                                    { t: "Sample Project in IoT", i: Rocket, l: "" }
                                ].map((item, idx) => (
                                    <div 
                                        key={idx} 
                                        onClick={() => item.l && window.open(item.l, '_blank')}
                                        className={`flex items-center justify-between p-4 bg-[#f8fafc] rounded-xl group transition-all duration-300 ${item.l ? 'cursor-pointer hover:bg-slate-200/50' : ''}`}
                                    >
                                        <div className="flex items-center gap-4">
                                            <div className="w-10 h-10 bg-[#18357a] rounded-lg flex items-center justify-center text-[#ffc107] shrink-0">
                                                <item.i size={20} />
                                            </div>
                                            <span className="text-black font-bold text-sm lg:text-base tracking-tight">{item.t}</span>
                                        </div>
                                        {item.l && <ArrowUpRight size={18} className="text-[#18357a]/30 group-hover:text-[#18357a] transition-colors" />}
                                    </div>
                                ))}
                            </div>
                        </motion.div>

                        {/* SPECIAL MACHINE WING */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.3 }}
                            className="bg-white p-8 rounded-[2rem] shadow-sm border border-slate-100"
                        >
                            <h3 className="text-[#18357a] text-lg font-black mb-6 uppercase tracking-tight">SPECIAL MACHINE WING</h3>
                            <div className="space-y-3">
                                {[
                                    { t: "Demo of Laser cutter and Engraving machine", i: Zap, l: "https://www.youtube.com/watch?v=U4qZWNl0c60&list=PLbvThpbHXeuo4vBQvKnnIxPpzEl9Yf8WX" },
                                    { t: "Demo of Sublimation Mug Printing", i: Settings, l: "https://www.youtube.com/watch?v=H2lh3oVOcOo&list=PLbvThpbHXeuo4vBQvKnnIxPpzEl9Yf8WX&index=2" }
                                ].map((item, idx) => (
                                    <div 
                                        key={idx} 
                                        onClick={() => item.l && window.open(item.l, '_blank')}
                                        className={`flex items-center justify-between p-4 bg-[#f8fafc] rounded-xl group transition-all duration-300 ${item.l ? 'cursor-pointer hover:bg-slate-200/50' : ''}`}
                                    >
                                        <div className="flex items-center gap-4">
                                            <div className="w-10 h-10 bg-[#18357a] rounded-lg flex items-center justify-center text-[#ffc107] shrink-0">
                                                <item.i size={20} />
                                            </div>
                                            <span className="text-black font-bold text-sm lg:text-base tracking-tight">{item.t}</span>
                                        </div>
                                        {item.l && <ArrowUpRight size={18} className="text-[#18357a]/30 group-hover:text-[#18357a] transition-colors" />}
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* FACILITIES GALLERY SECTION - MATCHING IMAGE 9 */}
            <section id="facilities" className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-6">
                    <h2 className="text-3xl lg:text-4xl font-black text-[#18357a] uppercase tracking-tighter mb-24 text-center">
                        FACILITIES
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {galleryItems.map((item, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.05 }}
                                onClick={() => setSelectedImage(item.img)}
                                className="group relative h-[260px] rounded-xl overflow-hidden cursor-pointer shadow-2xl shadow-black/10 transition-all duration-500"
                            >
                                <img 
                                    src={item.img} 
                                    alt={item.title} 
                                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-end p-6">
                                    <h4 className="text-white text-lg font-black leading-tight tracking-tight mb-0.5">
                                        {item.title}
                                    </h4>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

        </div>
    )
}

export default IdeaLabPage
