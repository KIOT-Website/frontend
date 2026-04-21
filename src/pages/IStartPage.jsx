import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Microscope, Target, Lightbulb, Users, Rocket, Award, ChevronRight, GraduationCap, Building2, X as CloseIcon } from 'lucide-react'

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

    const sections = [
        { id: 'overview', name: 'Overview' },
        { id: 'team', name: 'Team' },
        { id: 'programs', name: 'Programs' },
        { id: 'pre-incubation', name: 'Pre-Incubation' },
        { id: 'achievements', name: 'Achievements' },
    ]

    const scrollToSection = (id) => {
        const element = document.getElementById(id)
        if (element) {
            const offset = 120
            const bodyRect = document.body.getBoundingClientRect().top
            const elementRect = element.getBoundingClientRect().top
            const elementPosition = elementRect - bodyRect
            window.scrollTo({
                top: elementPosition - offset,
                behavior: 'smooth'
            })
        }
    }

    const HighlightText = ({ children }) => (
        <span className="font-bold text-[#18357a]">
            {children}
        </span>
    )

    return (
        <div className="min-h-screen bg-[#FCFDFD] font-graphik text-black selection:bg-[#ffc107]/30">
            {/* Hero Section */}
            <section className="relative pt-12 pb-16 overflow-hidden bg-white">
                <div className="absolute inset-0 z-0">
                </div>

                <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-10">
                    <div className="max-w-4xl">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            className="inline-flex items-center gap-2 mb-6 px-4 py-1.5 rounded-full bg-[#18357a]/5 border border-[#18357a]/10"
                        >
                            <Lightbulb size={14} className="text-[#ffc107] fill-[#ffc107]/20" />
                            <span className="text-[10px] font-black uppercase tracking-[0.3em] text-[#18357a]">Research & Innovation</span>
                        </motion.div>
                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="text-4xl lg:text-6xl font-bold text-[#18357a] leading-[1.1] mb-8"
                        >
                            IIC & <span className="text-[#ffc107]">iStart</span>
                        </motion.h1>
                    </div>
                </div>
            </section>

            {/* 1. Overview */}
            <section id="overview" className="py-12 border-t border-slate-100">
                <div className="mx-auto max-w-7xl px-6 lg:px-10">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
                        <div>
                            <div className="flex items-center gap-4 mb-6">
                                <div className="h-10 w-1 bg-[#ffc107] rounded-full" />
                                <h2 className="text-3xl font-bold text-[#18357a]">Overview</h2>
                            </div>
                            <div className="space-y-6 text-base lg:text-lg leading-relaxed text-slate-800 text-justify">
                                <p>
                                    At <HighlightText>Knowledge Institute of Technology (KIOT)</HighlightText>, innovation is not treated as an add-on—it is part of how students learn, build, and grow.
                                </p>
                                <p>
                                    The <HighlightText>Institution’s Innovation Council (IIC)</HighlightText> at <HighlightText>KIOT</HighlightText>, established under the guidance of the Ministry of Education, Government of India, drives a structured approach to nurturing creativity, entrepreneurship, and problem-solving among students. It serves as a platform where ideas are encouraged, refined, and transformed into meaningful solutions.
                                </p>
                                <p>
                                    Complementing this, <HighlightText>iStart</HighlightText> functions as a dynamic student-driven initiative that promotes strategic thinking, innovation mindset, and real-world application of ideas. Together, <HighlightText>IIC</HighlightText> and <HighlightText>iStart</HighlightText> create an ecosystem where students move beyond theory and actively engage in innovation-led activities.
                                </p>
                                <p>
                                    From ideation sessions and workshops to pre-incubation support and startup exposure, <HighlightText>KIOT</HighlightText> ensures that students are equipped not just for placements, but for creating impact.
                                </p>
                            </div>
                        </div>

                        <div className="grid grid-cols-1 gap-8">
                            <div className="bg-white p-8 rounded-3xl shadow-xl border border-[#18357a]/5 relative overflow-hidden group">
                                <div className="absolute -right-8 -top-8 w-24 h-24 bg-[#ffc107]/10 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-700" />
                                <div className="p-4 bg-[#18357a]/5 rounded-2xl w-fit mb-6">
                                    <Target className="text-[#18357a]" size={24} />
                                </div>
                                <h3 className="text-xl font-bold text-[#18357a] mb-4">Vision</h3>
                                <p className="text-slate-700 text-justify">To foster a culture of innovation and entrepreneurship at <HighlightText>KIOT</HighlightText> by nurturing ideas into sustainable startups that create real-world impact.</p>
                            </div>
                            <div className="bg-[#18357a] p-8 rounded-3xl shadow-2xl relative overflow-hidden group text-white">
                                <div className="absolute -right-8 -top-8 w-32 h-32 bg-white/5 rounded-full blur-2xl" />
                                <div className="p-4 bg-white/10 rounded-2xl w-fit mb-6">
                                    <Rocket className="text-[#ffc107]" size={24} />
                                </div>
                                <h3 className="text-xl font-bold mb-4">Mission</h3>
                                <ul className="space-y-4 text-white/85 text-justify">
                                    <li className="flex items-start gap-3">
                                        <ChevronRight size={18} className="text-[#ffc107] shrink-0 mt-1" />
                                        <span>To build a supportive ecosystem that encourages innovation, critical thinking, and entrepreneurial mindset among students.</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <ChevronRight size={18} className="text-[#ffc107] shrink-0 mt-1" />
                                        <span>To provide structured programs, workshops, and bootcamps that strengthen startup skills and industry readiness.</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <ChevronRight size={18} className="text-[#ffc107] shrink-0 mt-1" />
                                        <span>To collaborate with national and international incubation centers and startup networks for greater exposure and growth opportunities.</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <ChevronRight size={18} className="text-[#ffc107] shrink-0 mt-1" />
                                        <span>To guide and support students from ideation to pre-incubation and beyond.</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 2. Team */}
            <section id="team" className="py-10 bg-white">
                <div className="mx-auto max-w-7xl px-6 lg:px-10">
                    <div className="flex items-center gap-4 mb-12">
                        <div className="h-10 w-1 bg-[#ffc107] rounded-full" />
                        <h2 className="text-3xl font-bold text-[#18357a]">Leadership Team</h2>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
                        {[
                            { name: "Dr.PSS.Srinivasan", role: "Executive Chairman, KIOT", iic: "Managing Director – iStart MXIF" },
                            { name: "Dr.K.Visagavel", role: "Principal", iic: "IIC President - KIOT" },
                            { name: "Mr.A.Sekar M.E., (Ph.D)", role: "Head Incubation", iic: "IIC Vice President – KIOT" },
                            { name: "Mr.M.Dinesh Kumar", role: "Incubation Lead", iic: "" },
                            { name: "Mrs.P.Geetha", role: "Incubation Manager", iic: "" },
                            { name: "Mr.M.M.Barat Kumar", role: "Incubation Associate", iic: "" }
                        ].map((m, i) => (
                            <div key={i} className="p-6 rounded-2xl border border-slate-100 bg-white shadow-md hover:shadow-xl transition-all border-l-4 border-l-[#18357a]">
                                <h4 className="text-lg font-bold text-black mb-1">{m.name}</h4>
                                <p className="text-slate-600 text-[10px] font-black uppercase tracking-widest mb-3">{m.role}</p>
                                {m.iic && (
                                    <div className="pt-3 border-t border-slate-50">
                                        <p className="text-[#18357a] font-bold text-xs">{m.iic}</p>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>

                    <div className="flex items-center gap-4 mb-12">
                        <div className="h-10 w-1 bg-[#ffc107] rounded-full" />
                        <h2 className="text-3xl font-bold text-[#18357a]">Faculty Coordinators & IIC Members</h2>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                        {[
                            { name: "Mr.S.Santhosh", dept: "AP/MECH", role: "IPR Activity Coordinator" },
                            { name: "Mr.M.K.Sampath", dept: "AP/CSE", role: "YUKTI Coordinator" },
                            { name: "Mr.A.Silambarasan", dept: "AP/ECE", role: "IIC Convenor" },
                            { name: "Mr.R.Madhan Raj", dept: "AP/EEE", role: "Innovation Activity Coordinator" },
                            { name: "Mr.S.Arulkesavan", dept: "AP/CIVIL", role: "Internship Activity Coordinator" },
                            { name: "Mr.R.Ayyappan", dept: "AP/IT", role: "Social Media Coordinator" },
                            { name: "Mrs. P. Raga Keerthana", dept: "AP/CSBS", role: "Member" },
                            { name: "Mr.R.Rameshkumar", dept: "AP/AIDS", role: "NIRF – IR Coordinator" },
                            { name: "Mr.M.Gowrishankar", dept: "AP/MBA-IEV", role: "Member" }
                        ].map((m, i) => (
                            <div key={i} className="p-6 rounded-2xl border border-[#ffc107]/10 bg-white shadow-[0_15px_40px_-15px_rgba(0,0,0,0.06)] hover:shadow-xl hover:border-[#ffc107]/40 transition-all duration-300">
                                <h4 className="text-[15px] font-bold text-black mb-1">{m.name}</h4>
                                <p className="text-slate-500 text-[10px] font-bold uppercase tracking-wide mb-2">{m.dept}</p>
                                <div className="pt-2 border-t border-slate-200/60">
                                    <p className="text-[#18357a] font-bold text-[11px] uppercase tracking-wider leading-tight">{m.role}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 3. Programs */}
            <section id="programs" className="py-12 bg-[#FCFDFD]">
                <div className="mx-auto max-w-7xl px-6 lg:px-10">
                    <div className="flex items-center gap-4 mb-16">
                        <div className="h-10 w-1 bg-[#ffc107] rounded-full" />
                        <h2 className="text-4xl font-bold text-[#18357a]">Programs & Events</h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                        <div className="group bg-white p-10 rounded-[3rem] shadow-xl border border-slate-100 relative overflow-hidden">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-[#18357a]/5 rounded-bl-full transition-transform group-hover:scale-110" />
                            <h3 className="text-2xl font-bold text-[#18357a] mb-6">Flagship Activities</h3>
                            <ul className="space-y-6">
                                {[
                                    { t: "Ideation Workshops", d: "Deep dive sessions into problem identification and solution brainstorming." },
                                    { t: "Innovation Challenges", d: "Internal hackathons and design thinking competitions." },
                                    { t: "Expert Lectures", d: "Interactions with successful entrepreneurs and innovation mentors." }
                                ].map((item, i) => (
                                    <li key={i} className="flex items-start gap-5">
                                        <div className="mt-1.5 relative flex items-center justify-center shrink-0">
                                            <div className="w-2.5 h-2.5 bg-[#ffc107] rounded-full shadow-[0_0_10px_rgba(255,193,7,0.4)]" />
                                            <div className="absolute w-5 h-5 border border-[#ffc107]/20 rounded-full animate-pulse" />
                                        </div>
                                        <div>
                                            <p className="font-bold text-[#18357a] text-sm uppercase tracking-wider">{item.t}</p>
                                            <p className="text-slate-600 mt-1">{item.d}</p>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div id="pre-incubation" className="group bg-[#18357a] p-10 rounded-[3rem] shadow-xl text-white relative overflow-hidden">
                            <div className="absolute bottom-0 right-0 w-40 h-40 bg-white/5 rounded-tl-full" />
                            <h3 className="text-2xl font-bold text-[#ffc107] mb-6">Pre-Incubation Support</h3>
                            <p className="text-white/80 mb-8 leading-relaxed">
                                Moving ideas from concept to early-stage MVP. We provide the mentorship and resources needed to validate prototypes and build business models.
                            </p>
                            <div className="grid grid-cols-2 gap-4">
                                {[
                                    "Mentorship", "Prototyping Lab", "IP Support", "Business Modeling"
                                ].map((tag) => (
                                    <div key={tag} className="px-4 py-3 bg-white/10 rounded-2xl border border-white/20 text-xs font-black uppercase tracking-widest text-center transition-colors hover:bg-[#ffc107] hover:text-[#18357a]">
                                        {tag}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 4. Activities Grid */}
            <section id="achievements" className="py-12 bg-white border-t border-slate-100">
                <div className="mx-auto max-w-7xl px-6 lg:px-10">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <h2 className="text-4xl lg:text-5xl font-bold text-[#18357a] mb-6">iStart Achievements</h2>
                        <p className="text-slate-600 font-bold text-sm uppercase tracking-widest tracking-loose">Witnessing the innovation journey at <HighlightText>KIOT</HighlightText></p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {activities.map((act, i) => (
                            <div 
                                key={i} 
                                onClick={() => setSelectedImg(act)}
                                className="group relative aspect-[4/5] rounded-2xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.15)] hover:shadow-2xl transition-all duration-500 cursor-pointer"
                            >
                                <img 
                                    src={act.img} 
                                    alt={act.title} 
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                                {/* Enhanced Bottom Gradient */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-90 transition-opacity" />
                                
                                <div className="absolute bottom-0 left-0 right-0 p-5 transform translate-y-1 group-hover:translate-y-0 transition-all">
                                    <h4 className="text-white font-bold text-lg leading-tight drop-shadow-md">{act.title}</h4>
                                </div>
                            </div>
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
                            className="absolute top-6 right-6 z-[210] w-12 h-12 flex items-center justify-center rounded-full bg-white/10 text-white hover:bg-[#ffc107] hover:text-[#18357a] transition-all"
                        >
                            <CloseIcon size={24} />
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
                            <div className="bg-white/5 backdrop-blur-xl border-t border-white/10 p-6">
                                <p className="text-[#ffc107] text-[10px] font-black uppercase tracking-[0.3em] mb-2 text-center">iStart Activity View</p>
                                <h3 className="text-white text-2xl font-bold text-center">{selectedImg.title}</h3>
                            </div>
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>
        </div>
    )
}

export default IStartPage
