import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Link, useNavigate } from 'react-router-dom'
import { 
  Microscope, Target, Lightbulb, Users, Rocket, Award, 
  ChevronRight, GraduationCap, Building2, X as CloseIcon,
  Zap, Compass, ArrowRight, Star, Settings, Briefcase, Trophy,
  Check
} from 'lucide-react'

import achImg1 from '../assets/iStart/Achievements.webp'
import achImg2 from '../assets/iStart/Dronacharyas.webp'
import achImg3 from '../assets/iStart/IP-Yatra.webp'
import achImg4 from '../assets/iStart/Olimayam-2.0.webp'
import achImg5 from '../assets/iStart/Young-India.webp'
import achImg6 from '../assets/iStart/iStart-Hackathon-winner-1.webp'
import achImg7 from '../assets/iStart/iStart-Hackathon-winner-2.webp'
import istartLogo from '../assets/iStart/istart.webp'

const IStartPage = () => {
    const [selectedImg, setSelectedImg] = useState(null)
    const navigate = useNavigate()

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
        <span className="font-bold text-[#224292]">
            {children}
        </span>
    )

    return (
        <div className="min-h-screen bg-[#FCFDFD] font-graphik text-black selection:bg-[#ffc107]/30">
            
            {/* 1. Compact Premium Hero Section */}
            <section className="relative w-full bg-white overflow-hidden py-6 lg:py-12 flex items-center">

                
                <div className="mx-auto max-w-[1600px] w-full px-6 lg:px-12">
                    <div className="grid lg:grid-cols-12 gap-8 items-center">
                        
                        {/* Left Column: Content (Darkened Text) */}
                        <div className="lg:col-span-5 relative z-20 flex flex-col items-center lg:items-start text-center lg:text-left">
                            
                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                className="mb-10"
                            >
                                <img src={istartLogo} alt="iStart Official Logo" className="w-full max-w-md md:max-w-xl lg:max-w-2xl h-auto" />
                            </motion.div>

                            <div className="space-y-4 mb-10">
                                <h3 className="text-2xl md:text-3xl font-black text-black leading-tight">
                                    Empowering Ideas. <br/> Enabling Innovation.
                                </h3>
                                <div className="space-y-4 text-black font-bold text-[13px] md:text-sm leading-relaxed max-w-2xl text-justify">
                                    <p>
                                        Knowledge Institute of Technology (KIOT) has established a comprehensive innovation and startup ecosystem comprising the Institution’s Innovation Council (IIC), StartupTN Pre-Incubation Centre, MSME Business Incubator, and the iStartKIOT MX Incubator Foundation (a Section 8 company).
                                    </p>
                                    <p>
                                        In addition, the KIOT IPR Cell actively promotes awareness, protection, and commercialization of intellectual property among students, faculty, and researchers. Through StartupTN’s PIC, TBC, and MSME BI initiatives, KIOT provides end-to-end support, including idea validation, seed funding, and MVP development.
                                    </p>
                                </div>
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
                                        <h4 className="text-[15px] font-black text-[#224292] mb-1">{f.title}</h4>
                                        <p className="text-[10px] text-black font-black leading-tight px-1 max-w-[100px]">{f.desc}</p>
                                    </div>
                                ))}
                            </div>


                        </div>

                        {/* Right Column: Visual Layout (Premium Leaf Design) */}
                        <div className="lg:col-span-7 relative h-[450px] lg:h-[600px] flex items-center justify-center">
                            {/* Decorative Corner Shapes */}
                            <div className="absolute top-10 left-10 w-24 h-24 bg-[#224292] rounded-3xl -z-0 opacity-20 lg:opacity-100" />
                            <div className="absolute bottom-10 right-10 w-24 h-24 bg-[#ffc107] rounded-3xl -z-0 opacity-20 lg:opacity-100" />

                            {/* Main Image Card (Premium Leaf Shape) */}
                            <motion.div
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                className="w-full max-w-[600px] h-[400px] lg:h-[480px] rounded-[8rem_2rem_8rem_2rem] overflow-hidden shadow-2xl relative z-10 border-8 border-white"
                            >
                                <img 
                                    src="/indian_students_innovation_group.webp" 
                                    alt="Indian Innovation Lab" 
                                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-1000"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-[#224292]/30 to-transparent" />
                            </motion.div>


                        </div>
                    </div>
                </div>
            </section>

            {/* 4. Centre for Innovation & Startups */}
            <section id="centre" className="py-8 md:py-12 relative overflow-hidden font-graphik bg-[#F8FAFC]">
                {/* Decorative Background Elements */}
                <div className="absolute top-10 right-10 opacity-20 pointer-events-none">
                    <div className="grid grid-cols-6 gap-2">
                        {[...Array(30)].map((_, i) => (
                            <div key={i} className="w-1.5 h-1.5 rounded-full bg-[#224292]" />
                        ))}
                    </div>
                </div>
                <div className="absolute -left-20 top-[20%] w-64 h-64 bg-[#224292]/5 rounded-full blur-3xl pointer-events-none" />


                <div className="mx-auto max-w-7xl px-6 lg:px-10 relative z-10">
                    <div className="flex flex-col items-center text-center mb-8">
                        <div className="px-6 py-2 rounded-full bg-[#224292] text-white text-[10px] font-black uppercase tracking-[0.3em] mb-4 shadow-xl shadow-blue-900/20">
                            Empowering Innovation
                        </div>
                        <h2 className="text-2xl md:text-4xl font-black text-[#224292] tracking-tighter mb-6 leading-tight">
                            Centre for <span className="text-[#224292]">Innovation</span> <span className="text-[#ffc107]">&</span> Startups
                        </h2>
                        <p className="text-black/60 text-[15px] font-bold max-w-2xl leading-relaxed">
                            A multi-dimensional ecosystem providing end-to-end support for the next generation of entrepreneurs and innovators.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                        {[
                            { 
                                title: "Institution’s Innovation Council (IIC)", 
                                desc: "Under the Ministry of Education, fostering a structured approach to creativity and problem-solving.",
                                icon: Lightbulb,
                                color: "#ffc107", // Gold (Brand)
                                points: ["Promotes Innovation Culture", "Structured Framework", "Impactful Collaboration"],
                                link: "/research-innovation/iic"
                            },
                            { 
                                title: "StartupTN Pre-Incubation Centre", 
                                desc: "Idea validation and early-stage support for transformative student-led startups.",
                                icon: Rocket,
                                color: "#3b82f6",
                                points: ["Idea Validation", "Mentorship & Guidance", "Pre-Incubation Support"],
                                link: "/research-innovation/startuptn"
                            },
                            { 
                                title: "MSME Business Incubator", 
                                desc: "Providing seed funding and industry-aligned incubation for sustainable business growth.",
                                icon: Building2,
                                color: "#10b981",
                                points: ["Seed Funding Access", "Industry Alignment", "Sustainable Growth"],
                                link: "/research-innovation/msme-bi"
                            },
                            { 
                                title: "iStartKIOT MXincubator Foundation", 
                                desc: "A Section 8 company dedicated to global-scale startup acceleration and investment readiness.",
                                icon: Briefcase,
                                color: "#224292", // Deep Blue (Brand)
                                points: ["Startup Acceleration", "Investment Readiness", "Global Opportunities"],
                                link: "/research-innovation/mx-incubator"
                            }
                        ].map((item, i) => (
                            <motion.div 
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: i * 0.1 }}
                                viewport={{ once: true }}
                                className="group relative bg-white rounded-xl p-5 shadow-2xl shadow-slate-200/50 flex flex-col h-full overflow-hidden border border-slate-50"
                            >
                                {/* Top Accent Bar */}
                                <div className="absolute top-0 left-0 right-0 h-1" style={{ backgroundColor: item.color }} />
                                
                                <div className="mb-4 relative">
                                    <h3 className="text-[17px] font-black text-[#224292] leading-tight mt-2 mb-2 min-h-[2.5rem]">
                                        {item.title}
                                    </h3>
                                    <div className="h-0.5 w-8 bg-[#224292] mb-4" />
                                    <p className="text-black text-[12px] font-bold leading-relaxed mb-4">
                                        {item.desc}
                                    </p>
                                    
                                    <ul className="space-y-2 mb-6">
                                        {item.points.map((pt, idx) => (
                                            <li key={idx} className="flex items-center gap-2">
                                                <div className="w-4 h-4 rounded-full flex items-center justify-center shrink-0 border border-slate-100" style={{ color: item.color }}>
                                                    <Check className="w-2.5 h-2.5 stroke-[4]" />
                                                </div>
                                                <span className="text-[12px] font-black text-black">{pt}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                <div 
                                    onClick={() => item.link && navigate(item.link)}
                                    className={`flex items-center gap-2 group/btn ${item.link ? 'cursor-pointer' : 'opacity-50 cursor-default'}`}
                                >
                                    <span className="text-[13px] font-bold tracking-tight transition-colors" style={{ color: item.color }}>View more</span>
                                    <ArrowRight size={14} className="transition-transform group-hover/btn:translate-x-1" style={{ color: item.color }} />
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 2. Overview, Vision & Mission */}
            <section id="overview" className="py-8 bg-white border-t border-slate-100">
                <div className="mx-auto max-w-7xl px-6 lg:px-10">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
                        {/* Vision Card */}
                        <motion.div 
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="bg-white p-8 rounded-[2rem] shadow-xl border border-slate-100 relative overflow-hidden h-full"
                        >
                            <div className="flex items-center gap-4 mb-6">
                                <div className="w-12 h-12 rounded-xl bg-[#224292]/5 flex items-center justify-center shrink-0">
                                    <Target className="text-[#224292]" size={24} />
                                </div>
                                <div className="flex flex-col">
                                    <h3 className="text-2xl font-black text-[#224292] tracking-tight">Vision</h3>
                                    <div className="h-1 w-8 bg-[#ffc107] mt-1" />
                                </div>
                            </div>
                            <p className="text-black text-[15px] leading-relaxed text-justify font-bold">
                                To foster a culture of innovation and entrepreneurship at <HighlightText>KIOT</HighlightText> by nurturing ideas into sustainable startups that create real-world impact.
                            </p>
                        </motion.div>

                        {/* Mission Card */}
                        <motion.div 
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 }}
                            viewport={{ once: true }}
                            className="bg-[#224292] p-8 rounded-[2rem] shadow-2xl relative overflow-hidden text-white h-full"
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
                                    "To build a supportive ecosystem that encourages innovation, critical thinking, and entrepreneurial mindset.",
                                    "To provide structured programs that strengthen startup skills and industry readiness.",
                                    "To connect students with mentors and resources to transform ideas into impactful solutions.",
                                    "To promote a culture of collaboration and experimentation."
                                ].map((text, i) => (
                                    <li key={i} className={`flex items-start gap-3 py-3 ${i !== 3 ? 'border-b border-white/10' : ''}`}>
                                        <ChevronRight size={16} className="text-[#ffc107] shrink-0 mt-1" />
                                        <span className="text-[15px] leading-relaxed">{text}</span>
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* 3. Leadership Team */}
            <section id="team" className="py-8 bg-[#F8FAFC] font-graphik">
                <div className="mx-auto max-w-7xl px-6 lg:px-10">
                    <div className="flex flex-col gap-1 mb-6">
                        <div className="flex items-center gap-3">
                            <div className="h-8 w-1.5 bg-[#ffc107] rounded-full" />
                            <h2 className="text-3xl font-black text-[#224292] tracking-tight">Leadership Team</h2>
                        </div>
                        <p className="text-slate-500 font-black text-[10px] uppercase tracking-widest pl-5">Guiding innovation, inspiring excellence.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
                        {[
                            { name: "Dr. PSS.Srinivasan", role: "Executive Chairman, KIOT", iic: "Managing Director – iStart MXIF", icon: Briefcase },
                            { name: "Dr. K.Visagavel", role: "Principal", iic: "IIC President - KIOT", icon: Award },
                            { name: "Mr. A.Sekar M.E., (Ph.D)", role: "Head Incubation", iic: "IIC Vice President – KIOT", icon: Users },
                            { name: "Mr. M.Dinesh Kumar", role: "Incubation Lead", iic: "Strategy & Operations", icon: Settings },
                            { name: "Mr. M.M.Barat Kumar", role: "Incubation Associate", iic: "Technical Support", icon: Lightbulb }
                        ].map((m, i) => (
                            <div key={i} className="group relative bg-white rounded-[1.2rem] p-4 shadow-[0_10px_30px_-15px_rgba(0,0,0,0.05)] border border-slate-100 flex flex-col overflow-hidden transition-all duration-500 hover:shadow-xl">
                                <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-[#224292]" />
                                
                                <div className="flex items-center gap-4">
                                    <div className="w-10 h-10 rounded-full bg-slate-50 border border-slate-100 flex items-center justify-center shrink-0">
                                        <Users className="text-[#224292]" size={20} />
                                    </div>
                                    <div className="flex flex-col">
                                        <h4 className="text-[17px] font-black text-[#224292] leading-tight mb-0.5">{m.name}</h4>
                                        <div className="h-0.5 w-6 bg-[#ffc107] mb-1" />
                                        <p className="text-black font-black text-[10px] tracking-tight mb-2 leading-none">{m.role}</p>
                                        
                                        {m.iic && (
                                            <div className="flex items-center gap-2">
                                                <div className="w-5 h-5 rounded bg-[#ffc107]/10 flex items-center justify-center">
                                                    <m.icon className="text-[#ffc107]" size={10} />
                                                </div>
                                                <p className="text-[#224292] font-black text-[11px] tracking-tight leading-none">{m.iic}</p>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Faculty Coordinators Section (Deep Blue Background) */}
                <div className="bg-[#224292] py-8 relative overflow-hidden font-graphik">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,193,7,0.1),transparent)]" />
                    <div className="mx-auto max-w-7xl px-6 lg:px-10 relative z-10">
                        <div className="flex flex-col gap-1 mb-6">
                            <div className="flex items-center gap-3">
                                <div className="h-8 w-1.5 bg-[#ffc107] rounded-full" />
                                <h2 className="text-3xl font-black text-white tracking-tight">Faculty Coordinators & IIC Members</h2>
                            </div>
                            <p className="text-white/50 font-black text-[11px] tracking-widest pl-5 uppercase">Working together to drive innovation and impact.</p>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
                            {[
                                { name: "Mr. S.Santhosh", dept: "AP/MECH", role: "IPR Activity Coordinator", icon: Star },
                                { name: "Mr. M.K.Sampath", dept: "AP/CSE", role: "YUKTI Coordinator", icon: Trophy },
                                { name: "Mr. A.Silambarasan", dept: "AP/ECE", role: "IIC Convenor", icon: Award },
                                { name: "Mr. R.Madhan Raj", dept: "AP/EEE", role: "Innovation Activity Coordinator", icon: Zap },
                                { name: "Mr. S.Arulkesavan", dept: "AP/CIVIL", role: "Internship Activity Coordinator", icon: Building2 },
                                { name: "Mr. R.Ayyappan", dept: "AP/IT", role: "Social Media Coordinator", icon: Users },
                                { name: "Ms. Raga Keerthana P", dept: "AP/CSBS", role: "Member", icon: Users },
                                { name: "Mr. R.Rameshkumar", dept: "AP/AIDS", role: "NIRF – IR Coordinator", icon: Target },
                                { name: "Mr. M.Gowrishankar", dept: "AP/MBA-IEV", role: "Member", icon: Users }
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
                                            <Users className="text-[#224292]" size={20} />
                                        </div>
                                        <div className="flex flex-col">
                                            <h4 className="text-[14px] font-black text-[#224292] leading-tight mb-0.5">{m.name}</h4>
                                            <p className="text-black font-black text-[10px] tracking-tight leading-none mb-2">{m.dept}</p>
                                            <div className="flex items-center gap-2">
                                                <m.icon className="text-[#ffc107]" size={10} />
                                                <p className="text-[#224292] font-black text-[11px] tracking-tight leading-none">{m.role}</p>
                                            </div>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>


            {/* 5. Achievements Grid */}
            <section id="achievements" className="py-8 bg-white border-t border-slate-100">
                <div className="mx-auto max-w-7xl px-6 lg:px-10">
                    <div className="text-center max-w-3xl mx-auto mb-8">
                        <h2 className="text-4xl font-black text-[#224292] mb-4 tracking-tight">iStart Achievements</h2>
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
                                <div className="absolute inset-0 bg-gradient-to-t from-[#224292] via-[#224292]/20 to-transparent opacity-80 transition-opacity" />
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
                            className="absolute top-6 right-6 z-[210] w-10 h-10 flex items-center justify-center rounded-full bg-white/10 text-white hover:bg-[#ffc107] hover:text-[#224292] transition-all"
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
