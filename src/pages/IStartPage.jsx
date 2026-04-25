import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  Microscope, Target, Lightbulb, Users, Rocket, Award, 
  ChevronRight, GraduationCap, Building2, X as CloseIcon,
  Zap, Compass, ArrowRight, Star, Settings, Briefcase, Trophy
} from 'lucide-react'

import achImg1 from '../assets/iStart/Achievements.webp'
import achImg2 from '../assets/iStart/Dronacharyas.webp'
import achImg3 from '../assets/iStart/IP-Yatra.webp'
import achImg4 from '../assets/iStart/Olimayam-2.0.webp'
import achImg5 from '../assets/iStart/Young-India.webp'
import achImg6 from '../assets/iStart/iStart-Hackathon-winner-1.webp'
import achImg7 from '../assets/iStart/iStart-Hackathon-winner-2.webp'

const IStartPage = () => {
    const [selectedImg, setSelectedImg] = useState(null)

    const activities = [
        { img: achImg1, title: "Achievements" },
        { img: achImg2, title: "Team Dronacharyas" },
        { img: achImg3, title: "IP Yatra" },
        { img: achImg4, title: "Olimayam 2.0" },
        { img: achImg5, title: "Young India" },
        { img: achImg6, title: "Hackathon Winner 1" },
        { img: achImg7, title: "Hackathon Winner 2" },
    ]

    const features = [
      { title: "Ideate", desc: "Turn ideas into possibilities", icon: Rocket },
      { title: "Innovate", desc: "Work, prototype and iterate", icon: Lightbulb },
      { title: "Incubate", desc: "Mentorship and resources", icon: Users },
      { title: "Impact", desc: "Create solutions that matter", icon: Target }
    ]

    const HighlightText = ({ children }) => (
        <span className="font-bold text-[#18357a]">
            {children}
        </span>
    )

    return (
        <div className="min-h-screen bg-[#FCFDFD] font-graphik text-black selection:bg-[#ffc107]/30">
            
            {/* 1. Compact Premium Hero Section */}
            <section className="relative w-full bg-white overflow-hidden py-6 lg:py-12 flex items-center">
                <div className="absolute top-10 right-10 w-20 h-20 bg-[#ffc107] rounded-3xl -rotate-12 opacity-80 hidden lg:block" />
                
                <div className="mx-auto max-w-[1600px] w-full px-6 lg:px-12">
                    <div className="grid lg:grid-cols-12 gap-8 items-center">
                        
                        {/* Left Column: Content (Darkened Text) */}
                        <div className="lg:col-span-5 relative z-20">
                            <motion.div
                                initial={{ opacity: 0, x: -50 }}
                                animate={{ opacity: 1, x: 0 }}
                                className="inline-flex items-center gap-2 mb-4 px-3 py-1.5 rounded-full bg-[#18357a]/5 border border-[#18357a]/10"
                            >
                                <Lightbulb size={12} className="text-[#18357a]" />
                                <span className="text-[9px] font-black uppercase tracking-[0.2em] text-[#18357a]">Research & Innovation</span>
                            </motion.div>
                            
                            <motion.h1
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                className="text-5xl md:text-[5.5rem] font-black text-[#18357a] leading-[0.85] tracking-tighter mb-6"
                            >
                                IIC & <span className="text-[#ffc107]">iStart</span>
                            </motion.h1>

                            <div className="space-y-4 mb-10">
                                <h3 className="text-2xl md:text-3xl font-black text-black leading-tight">
                                    Empowering Ideas. <br/> Enabling Innovation.
                                </h3>
                                <p className="text-black font-black text-sm md:text-base leading-tight max-w-xl">
                                    IIC and iStart foster a culture of innovation, entrepreneurship, and research among students to solve real-world challenges.
                                </p>
                            </div>

                            {/* Features Grid (Colored Icons & Normal Case) */}
                            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-10">
                                {[
                                    { title: "Ideate", desc: "Turn ideas into possibilities", icon: Rocket, color: "#ef4444" },
                                    { title: "Innovate", desc: "Work, prototype and iterate", icon: Settings, color: "#3b82f6" },
                                    { title: "Incubate", desc: "Mentorship and resources", icon: Users, color: "#f59e0b" },
                                    { title: "Impact", desc: "Create solutions that matter", icon: Target, color: "#10b981" }
                                ].map((f, i) => (
                                    <div key={i} className="flex flex-col items-center text-center">
                                        <div className="w-14 h-14 rounded-full bg-white shadow-lg border border-slate-50 flex items-center justify-center mb-3">
                                            <f.icon size={26} style={{ color: f.color }} />
                                        </div>
                                        <h4 className="text-[15px] font-black text-[#18357a] mb-1">{f.title}</h4>
                                        <p className="text-[10px] text-black font-black leading-tight px-1 max-w-[100px]">{f.desc}</p>
                                    </div>
                                ))}
                            </div>

                            <div className="flex flex-wrap gap-4">
                                <button className="px-7 py-4 bg-[#18357a] text-white rounded-xl font-black text-[12px] tracking-tight flex items-center gap-3 shadow-xl hover:scale-105 transition-all">
                                    Explore Initiatives
                                    <ArrowRight size={16} />
                                </button>
                                <button className="px-7 py-4 bg-white text-[#18357a] border-2 border-[#18357a]/10 rounded-xl font-black text-[12px] tracking-tight flex items-center gap-3 hover:bg-[#18357a] hover:text-white transition-all">
                                    View Success Stories
                                    <ArrowRight size={16} />
                                </button>
                            </div>
                        </div>

                        {/* Right Column: Visual Layout (Reduced Card Sizes) */}
                        <div className="lg:col-span-7 relative h-[450px] lg:h-[550px] flex items-center">
                            {/* Main Image Card (Indian Faces) */}
                            <motion.div
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                className="w-full h-[400px] lg:h-[480px] rounded-[3rem] overflow-hidden shadow-2xl relative z-10"
                            >
                                <img 
                                    src="/indian_students_innovation_group.png" 
                                    alt="Indian Innovation Lab" 
                                    className="w-full h-full object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-[#18357a]/30 to-transparent" />
                            </motion.div>

                            {/* Floating Card 1: Building Innovators (Reduced) */}
                            <motion.div
                                initial={{ x: -50, opacity: 0 }}
                                animate={{ x: 0, opacity: 1 }}
                                className="absolute bottom-6 left-0 lg:-left-6 bg-[#18357a] rounded-[2rem] p-6 shadow-2xl z-30 max-w-[240px] text-white"
                            >
                                <div className="flex items-center gap-3 mb-4">
                                    <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center shrink-0">
                                        <Users className="text-[#ffc107]" size={20} />
                                    </div>
                                    <h4 className="text-base font-black leading-tight tracking-tight">Building <br/>Innovators</h4>
                                </div>
                                <p className="text-white/70 text-[10px] font-black uppercase tracking-tight mb-4">Where curiosity meets creativity.</p>
                                <div className="w-8 h-1 bg-[#ffc107] rounded-full" />
                            </motion.div>

                            {/* Floating Card 2: Innovation in Action (Hidden on Mobile) */}
                            <motion.div
                                initial={{ x: 50, opacity: 0 }}
                                animate={{ x: 0, opacity: 1 }}
                                className="hidden lg:block absolute top-10 right-0 lg:-right-6 bg-white rounded-[2rem] p-6 shadow-2xl z-30 max-w-[240px] border border-slate-100"
                            >
                                <TrendingUp className="text-[#ffc107] mb-3" size={32} />
                                <h4 className="text-xl font-black text-[#18357a] tracking-tighter leading-none mb-3">Innovation <br/>in Action</h4>
                                <div className="space-y-2">
                                    {["Student ideas.", "Real impact."].map((t, i) => (
                                        <div key={i} className="flex items-center gap-2">
                                            <div className="w-1.5 h-1.5 bg-[#ffc107] rounded-full" />
                                            <span className="text-[9px] font-black text-black uppercase tracking-widest">{t}</span>
                                        </div>
                                    ))}
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 2. Overview, Vision & Mission */}
            <section id="overview" className="py-12 bg-white border-t border-slate-100">
                <div className="mx-auto max-w-7xl px-6 lg:px-10">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
                        {/* Overview Column */}
                        <div className="relative">
                            <div className="flex items-center gap-4 mb-8">
                                <div className="h-8 w-1.5 bg-[#ffc107] rounded-full" />
                                <h2 className="text-3xl font-black text-[#18357a] tracking-tight">Overview</h2>
                            </div>
                            <div className="space-y-6 text-sm md:text-base leading-relaxed text-black text-justify font-black">
                                <p>
                                    At <HighlightText>Knowledge Institute of Technology (KIOT)</HighlightText>, innovation is not treated as an add-on—it is part of how students learn, build, and grow.
                                </p>
                                <p>
                                    The <HighlightText>Institution’s Innovation Council (IIC)</HighlightText> at <HighlightText>KIOT</HighlightText>, established under the guidance of the Ministry of Education, Government of India, drives a structured approach to nurturing creativity, entrepreneurship, and problem-solving among students.
                                </p>
                                <p>
                                    Complementing this, <HighlightText>iStart</HighlightText> functions as a dynamic student-driven initiative that promotes strategic thinking, innovation mindset, and real-world application of ideas.
                                </p>
                                <p>
                                    From ideation sessions and workshops to pre-incubation support and industry connect, our ecosystem empowers students to <HighlightText>explore, experiment, and excel.</HighlightText>
                                </p>
                            </div>
                        </div>

                        {/* Vision & Mission Cards Column */}
                        <div className="grid grid-cols-1 gap-8">
                            <motion.div 
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                className="bg-white p-8 rounded-[2rem] shadow-xl border border-slate-100 relative overflow-hidden"
                            >
                                <div className="flex items-center gap-4 mb-6">
                                    <div className="w-12 h-12 rounded-xl bg-[#18357a]/5 flex items-center justify-center shrink-0">
                                        <Target className="text-[#18357a]" size={24} />
                                    </div>
                                    <div className="flex flex-col">
                                        <h3 className="text-2xl font-black text-[#18357a] tracking-tight">Vision</h3>
                                        <div className="h-1 w-8 bg-[#ffc107] mt-1" />
                                    </div>
                                </div>
                                <p className="text-black text-base md:text-lg leading-relaxed text-justify font-black">
                                    To foster a culture of innovation and entrepreneurship at <HighlightText>KIOT</HighlightText> by nurturing ideas into sustainable startups that create real-world impact.
                                </p>
                            </motion.div>

                            <motion.div 
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.1 }}
                                viewport={{ once: true }}
                                className="bg-[#18357a] p-8 rounded-[2rem] shadow-2xl relative overflow-hidden text-white"
                            >
                                <div className="flex items-center gap-4 mb-8">
                                    <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center shrink-0">
                                        <Rocket className="text-[#ffc107]" size={24} />
                                    </div>
                                    <div className="flex flex-col">
                                        <h3 className="text-2xl font-black text-white tracking-tight">Mission</h3>
                                        <div className="h-1 w-8 bg-[#ffc107] mt-1" />
                                    </div>
                                </div>
                                <ul className="space-y-0 text-white/90">
                                    {[
                                        "To build a supportive ecosystem that encourages innovation, critical thinking, and entrepreneurial mindset among students.",
                                        "To provide structured programs, workshops, and bootcamps that strengthen startup skills and industry readiness.",
                                        "To connect students with mentors, industry experts, and resources to transform ideas into impactful solutions.",
                                        "To promote a culture of collaboration, experimentation, and continuous learning."
                                    ].map((text, i) => (
                                        <li key={i} className={`flex items-start gap-3 py-4 ${i !== 3 ? 'border-b border-white/10' : ''}`}>
                                            <ChevronRight size={16} className="text-[#ffc107] shrink-0 mt-1" />
                                            <span className="text-sm md:text-base font-black leading-relaxed">{text}</span>
                                        </li>
                                    ))}
                                </ul>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 3. Leadership Team */}
            <section id="team" className="py-12 bg-[#F8FAFC] font-graphik">
                <div className="mx-auto max-w-7xl px-6 lg:px-10">
                    <div className="flex flex-col gap-1 mb-10">
                        <div className="flex items-center gap-3">
                            <div className="h-8 w-1.5 bg-[#ffc107] rounded-full" />
                            <h2 className="text-3xl font-black text-[#18357a] tracking-tight">Leadership Team</h2>
                        </div>
                        <p className="text-slate-500 font-black text-[10px] uppercase tracking-widest pl-5">Guiding innovation, inspiring excellence.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
                        {[
                            { name: "Dr.PSS.Srinivasan", role: "Executive Chairman, KIOT", iic: "Managing Director – iStart MXIF", icon: Briefcase },
                            { name: "Dr.K.Visagavel", role: "Principal", iic: "IIC President - KIOT", icon: Award },
                            { name: "Mr.A.Sekar M.E., (Ph.D)", role: "Head Incubation", iic: "IIC Vice President – KIOT", icon: Users },
                            { name: "Mr.M.Dinesh Kumar", role: "Incubation Lead", iic: "Strategy & Operations", icon: Settings },
                            { name: "Mrs.P.Geetha", role: "Incubation Manager", iic: "Community Engagement", icon: Users },
                            { name: "Mr.M.M.Barat Kumar", role: "Incubation Associate", iic: "Technical Support", icon: Lightbulb }
                        ].map((m, i) => (
                            <div key={i} className="group relative bg-white rounded-[1.2rem] p-4 shadow-[0_10px_30px_-15px_rgba(0,0,0,0.05)] border border-slate-100 flex flex-col overflow-hidden transition-all duration-500 hover:shadow-xl">
                                <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-[#18357a]" />
                                
                                <div className="flex items-center gap-4">
                                    <div className="w-10 h-10 rounded-full bg-slate-50 border border-slate-100 flex items-center justify-center shrink-0">
                                        <Users className="text-[#18357a]" size={20} />
                                    </div>
                                    <div className="flex flex-col">
                                        <h4 className="text-[17px] font-black text-[#0A1A3F] leading-tight mb-0.5">{m.name}</h4>
                                        <div className="h-0.5 w-6 bg-[#ffc107] mb-1" />
                                        <p className="text-black font-black text-[10px] tracking-tight mb-2 leading-none">{m.role}</p>
                                        
                                        {m.iic && (
                                            <div className="flex items-center gap-2">
                                                <div className="w-5 h-5 rounded bg-[#ffc107]/10 flex items-center justify-center">
                                                    <m.icon className="text-[#ffc107]" size={10} />
                                                </div>
                                                <p className="text-[#18357a] font-black text-[11px] tracking-tight leading-none">{m.iic}</p>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Faculty Coordinators Section (Deep Blue Background) */}
                <div className="bg-[#0A1A3F] py-12 relative overflow-hidden font-graphik">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,193,7,0.1),transparent)]" />
                    <div className="mx-auto max-w-7xl px-6 lg:px-10 relative z-10">
                        <div className="flex flex-col gap-1 mb-12">
                            <div className="flex items-center gap-3">
                                <div className="h-8 w-1.5 bg-[#ffc107] rounded-full" />
                                <h2 className="text-3xl font-black text-white tracking-tight">Faculty Coordinators & IIC Members</h2>
                            </div>
                            <p className="text-white/50 font-black text-[11px] tracking-widest pl-5 uppercase">Working together to drive innovation and impact.</p>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
                            {[
                                { name: "Mr.S.Santhosh", dept: "AP/MECH", role: "IPR Activity Coordinator", icon: Star },
                                { name: "Mr.M.K.Sampath", dept: "AP/CSE", role: "YUKTI Coordinator", icon: Trophy },
                                { name: "Mr.A.Silambarasan", dept: "AP/ECE", role: "IIC Convenor", icon: Award },
                                { name: "Mr.R.Madhan Raj", dept: "AP/EEE", role: "Innovation Activity Coordinator", icon: Zap },
                                { name: "Mr.S.Arulkesavan", dept: "AP/CIVIL", role: "Internship Activity Coordinator", icon: Building2 },
                                { name: "Mr.R.Ayyappan", dept: "AP/IT", role: "Social Media Coordinator", icon: Users },
                                { name: "Mrs. P. Raga Keerthana", dept: "AP/CSBS", role: "Member", icon: Users },
                                { name: "Mr.R.Rameshkumar", dept: "AP/AIDS", role: "NIRF – IR Coordinator", icon: Target },
                                { name: "Mr.M.Gowrishankar", dept: "AP/MBA-IEV", role: "Member", icon: Users }
                            ].map((m, i) => (
                                <motion.div 
                                    key={i}
                                    initial={{ opacity: 0, y: 15 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ delay: i * 0.03 }}
                                    viewport={{ once: true }}
                                    className="bg-white rounded-[1.2rem] p-4 shadow-2xl flex flex-col hover:scale-105 transition-transform duration-300"
                                >
                                    <div className="flex items-center gap-4">
                                        <div className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center shrink-0 border border-slate-100">
                                            <Users className="text-[#18357a]" size={20} />
                                        </div>
                                        <div className="flex flex-col">
                                            <h4 className="text-[14px] font-black text-[#0A1A3F] leading-tight mb-0.5">{m.name}</h4>
                                            <p className="text-black font-black text-[10px] tracking-tight leading-none mb-2">{m.dept}</p>
                                            <div className="flex items-center gap-2">
                                                <m.icon className="text-[#ffc107]" size={10} />
                                                <p className="text-[#18357a] font-black text-[11px] tracking-tight leading-none">{m.role}</p>
                                            </div>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* 4. Programs & Events */}
            <section id="programs" className="py-12 bg-white">
                <div className="mx-auto max-w-7xl px-6 lg:px-10">
                    <div className="flex items-center gap-4 mb-12">
                        <div className="h-8 w-1.5 bg-[#ffc107] rounded-full" />
                        <h2 className="text-4xl font-black text-[#18357a] tracking-tight">Programs & Events</h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                        <div className="bg-white p-10 rounded-[2.5rem] shadow-xl border border-slate-100 relative overflow-hidden group">
                            <h3 className="text-2xl font-black text-[#18357a] mb-8">Flagship Activities</h3>
                            <ul className="space-y-6">
                                {[
                                    { t: "Ideation Workshops", d: "Deep dive sessions into problem identification." },
                                    { t: "Innovation Challenges", d: "Internal hackathons and design thinking competitions." },
                                    { t: "Expert Lectures", d: "Interactions with successful entrepreneurs." }
                                ].map((item, i) => (
                                    <li key={i} className="flex items-start gap-4">
                                        <div className="mt-1.5 w-2.5 h-2.5 bg-[#ffc107] rounded-full shadow-[0_0_10px_rgba(255,193,7,0.5)] shrink-0" />
                                        <div>
                                            <p className="font-black text-[#18357a] text-base uppercase tracking-tight">{item.t}</p>
                                            <p className="text-black mt-0.5 font-black text-xs">{item.d}</p>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div id="pre-incubation" className="bg-[#18357a] p-10 rounded-[2.5rem] shadow-2xl text-white relative overflow-hidden">
                            <h3 className="text-2xl font-black text-[#ffc107] mb-8">Pre-Incubation Support</h3>
                            <p className="text-white/80 mb-8 text-base font-black leading-relaxed">
                                Moving ideas from concept to early-stage MVP with full mentorship and prototyping lab access.
                            </p>
                            <div className="grid grid-cols-2 gap-3">
                                {[
                                    "Mentorship", "Prototyping Lab", "IP Support", "Business Modeling"
                                ].map((tag) => (
                                    <div key={tag} className="px-4 py-3 bg-white/10 rounded-xl border border-white/20 text-[9px] font-black uppercase tracking-widest text-center hover:bg-[#ffc107] hover:text-[#18357a] transition-all">
                                        {tag}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 5. Achievements Grid */}
            <section id="achievements" className="py-12 bg-white border-t border-slate-100">
                <div className="mx-auto max-w-7xl px-6 lg:px-10">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <h2 className="text-4xl font-black text-[#18357a] mb-4 tracking-tight">iStart Achievements</h2>
                        <p className="text-slate-500 font-black text-[10px] uppercase tracking-[0.3em]">Witnessing the innovation journey at <HighlightText>KIOT</HighlightText></p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {activities.map((act, i) => (
                            <motion.div 
                                key={i} 
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: i * 0.1 }}
                                onClick={() => setSelectedImg(act)}
                                className="group relative aspect-[4/5] rounded-[2rem] overflow-hidden shadow-xl cursor-pointer"
                            >
                                <img 
                                    src={act.img} 
                                    alt={act.title} 
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-[#18357a] via-[#18357a]/20 to-transparent opacity-80 transition-opacity" />
                                <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-2 group-hover:translate-y-0 transition-all">
                                    <h4 className="text-white font-black text-lg leading-tight">{act.title}</h4>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Lightbox Modal */}
            <AnimatePresence>
                {selectedImg && (
                    <div className="fixed inset-0 z-[200] flex items-center justify-center p-4 md:p-10">
                        <motion.div 
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setSelectedImg(null)}
                            className="absolute inset-0 bg-black/95 backdrop-blur-md"
                        />
                        <motion.button
                            initial={{ opacity: 0, scale: 0.5 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.5 }}
                            onClick={() => setSelectedImg(null)}
                            className="absolute top-6 right-6 z-[210] w-10 h-10 flex items-center justify-center rounded-full bg-white/10 text-white hover:bg-[#ffc107] hover:text-[#18357a] transition-all"
                        >
                            <CloseIcon size={20} />
                        </motion.button>
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9, y: 20 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.9, y: 20 }}
                            className="relative z-[205] max-w-7xl max-h-full overflow-hidden rounded-2xl shadow-2xl bg-black"
                        >
                            <img 
                                src={selectedImg.img} 
                                alt={selectedImg.title}
                                className="max-w-full max-h-[85vh] object-contain mx-auto"
                            />
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>
        </div>
    )
}

const TrendingUp = ({ className, size }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className={className}
  >
    <polyline points="23 6 13.5 15.5 8.5 10.5 1 18"></polyline>
    <polyline points="17 6 23 6 23 12"></polyline>
  </svg>
)

export default IStartPage
