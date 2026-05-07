import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'
import { Zap, Sprout, Cpu, HeartPulse, Building2, ShieldCheck, Handshake } from 'lucide-react'

import ist2Logo from '../assets/iStart/ist2.png'
import mxi1 from '../assets/iStart/mxi-1.jpg'
import serviceImg1 from '../assets/iStart/istart.png'
import serviceImg2 from '../assets/iStart/istart2.png'
import serviceImg3 from '../assets/iStart/iStart-Hackathon-winner-1.webp'

const MXIncubatorPage = () => {
    const navigate = useNavigate()

    return (
        <div className="min-h-screen bg-[#F8FAFC] font-graphik pb-10">
            <div className="max-w-7xl mx-auto px-4 lg:px-10 py-8">
                
                <div className="space-y-12">
                    {/* Hero Section */}
                    <div className="grid lg:grid-cols-2 gap-10 items-start">
                        {/* Left Content */}
                        <div className="space-y-6">
                            <div className="space-y-2">
                                <h1 className="text-3xl lg:text-5xl font-black text-[#224292] leading-[1.1] tracking-tighter">
                                    iStart <span className="text-[#ffc107]">MXIncubator</span> Foundation
                                </h1>
                            </div>

                            <div className="space-y-8">
                                <p className="text-black text-[16px] font-black leading-relaxed text-justify">
                                    iStartKIOT MXincubator Foundation is a Section 8 (Non Profit) Company established by the Knowledge Institute of Technology (KIOT) to foster innovation, creativity, entrepreneurship and there by creating new startups.
                                </p>

                                {/* Feature Points */}
                                <div className="space-y-6 pt-4">
                                    {[
                                        {
                                            icon: Building2,
                                            color: "text-blue-600",
                                            text: <><span className="font-black text-[#224292]">iStart</span> offers a <span className="font-black text-[#224292]">4,000 sq. ft.</span> dedicated space for innovation and start-ups, featuring 10 private cubicles and 100+ Coworking seats to foster collaboration, creativity and growth</>
                                        },
                                        {
                                            icon: Zap,
                                            color: "text-amber-500",
                                            text: <><span className="font-black text-[#224292]">AICTE IDEA Lab (7000 sq.ft.)</span> – equipped with 3D Printers, IoT & Manufacturing facilities for prototype development</>
                                        },
                                        {
                                            icon: ShieldCheck,
                                            color: "text-emerald-600",
                                            text: <><span className="font-black text-[#224292]">KIOT IPR Cell:</span> The KIOT IPR Cell, in collaboration with the iStart promotes awareness, protection, and commercialization of innovations, fostering an intellectual property culture among students, faculty and researchers</>
                                        },
                                        {
                                            icon: Handshake,
                                            color: "text-indigo-600",
                                            text: <><span className="font-black text-[#224292]">StartupTN - PIC & TBC</span> and MSME Business Incubator for idea validation, seed funds, MVP/Prototype development and centre development</>
                                        }
                                    ].map((point, i) => (
                                        <div key={i} className="flex gap-5 items-start">
                                            <div className="p-3 bg-white rounded-xl shadow-sm border border-slate-100 shrink-0">
                                                <point.icon size={20} className={point.color} />
                                            </div>
                                            <p className="text-[14px] font-bold text-black/80 leading-relaxed pt-1 text-justify">
                                                {point.text}
                                            </p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Right Image Container */}
                        <div className="relative group lg:pl-10 lg:pt-32">
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[110%] h-[110%] bg-[#224292]/5 rounded-full blur-3xl -z-10" />
                            <div className="relative rounded-[2rem] overflow-hidden shadow-2xl border-8 border-white bg-white group-hover:scale-[1.02] transition-transform duration-500">
                                <img 
                                    src={mxi1} 
                                    alt="MXIncubator" 
                                    className="w-full h-full object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-[#224292]/10 to-transparent pointer-events-none" />
                            </div>
                        </div>
                    </div>

                    {/* Focus Areas Section */}
                    <div className="space-y-6">
                        <div className="flex items-center gap-4">
                            <h2 className="text-3xl font-black text-[#224292] tracking-tighter">
                                Focus <span className="text-[#ffc107]">Areas</span>
                            </h2>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
                            {[
                                { 
                                    title: "Sustainable Energy & Mobility", 
                                    desc: "Renewable energy solutions, energy-efficient systems, and electric mobility innovations",
                                    icon: Zap,
                                    color: "bg-emerald-50 border-emerald-200 text-emerald-700"
                                },
                                { 
                                    title: "Agriculture & Food Tech", 
                                    desc: "Precision farming, agri-drones, food processing, and water-efficient agri-solutions",
                                    icon: Sprout,
                                    color: "bg-amber-50 border-amber-200 text-amber-700"
                                },
                                { 
                                    title: "Smart Systems & Digital Tech", 
                                    desc: "IoT, AI/ML applications, Industry 4.0, Predictive analytics and Defence Tech",
                                    icon: Cpu,
                                    color: "bg-blue-50 border-blue-200 text-blue-700"
                                },
                                { 
                                    title: "Healthcare Technology", 
                                    desc: "Wearables, AI diagnostics, assistive tech, telemedicine, and health data security",
                                    icon: HeartPulse,
                                    color: "bg-purple-50 border-purple-200 text-purple-700"
                                },
                                { 
                                    title: "Sustainable Infrastructure", 
                                    desc: "Green construction, intelligent transport, and disaster-resilient solutions",
                                    icon: Building2,
                                    color: "bg-green-50 border-green-200 text-green-800"
                                }
                            ].map((area, idx) => {
                                const Icon = area.icon

                                return (
                                    <div key={idx} className={`p-6 rounded-[1.5rem] border-2 ${area.color} shadow-sm hover:shadow-md transition-all text-left flex flex-col items-start space-y-4`}>
                                        <div className="p-2.5 bg-white rounded-xl shadow-inner text-[#224292]">
                                            <Icon size={24} />
                                        </div>
                                        <h3 className="text-[14px] font-black leading-tight">{area.title}</h3>
                                        <p className="text-[11px] font-black leading-relaxed text-black text-justify">{area.desc}</p>
                                    </div>
                                )
                            })}
                        </div>
                    </div>

                    {/* Services Section */}
                    <div className="space-y-8 py-4">
                        {/* Main Section Header */}
                        <div className="flex justify-center mb-6">
                            <div className="bg-[#224292] px-8 py-4 rounded-3xl shadow-xl border-4 border-white">
                                <h2 className="text-xl md:text-2xl font-black text-white text-center tracking-tight">
                                    iStart: Nurturing Entrepreneurs (What do we do for start‑ups?)
                                </h2>
                            </div>
                        </div>

                        {/* Top Row */}
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            {[
                                {
                                    title: "Ideation",
                                    icon: "Lightbulb",
                                    color: "bg-[#F0FDF4] border-green-100",
                                    titleColor: "text-green-700",
                                    points: ["Market Research", "Market-Problem Fit", "Problem-Founder Fit", "Problem-Solution Fit"]
                                },
                                {
                                    title: "Prototype Development",
                                    icon: "Settings",
                                    color: "bg-[#F0F9FF] border-blue-100",
                                    titleColor: "text-blue-700",
                                    points: ["MVP making", "Product-Market Fit", "Project to Product Strategy", "Go-to-Market Strategy", "MVP Validation"]
                                },
                                {
                                    title: "Business Model Development",
                                    icon: "TrendingUp",
                                    color: "bg-[#FFFBEB] border-yellow-100",
                                    titleColor: "text-yellow-700",
                                    points: ["Business Sustainability", "Investment Strategy", "Job & Market Strategy", "Revenue Generation Model"]
                                }
                            ].map((service, i) => (
                                <div key={i} className={`p-6 rounded-[1.5rem] border-2 ${service.color} flex flex-col items-center text-center shadow-sm hover:shadow-md transition-shadow bg-white/50 backdrop-blur-sm`}>
                                    <h3 className={`text-[18px] font-black mb-6 ${service.titleColor}`}>{service.title}</h3>
                                    <div className="w-full flex justify-center">
                                        <ul className="space-y-2 text-left inline-block">
                                            {service.points.map((p, idx) => {
                                                const Icon = service.icon === "Lightbulb" ? Zap : 
                                                             service.icon === "Settings" ? Cpu : 
                                                             service.icon === "TrendingUp" ? Sprout : Zap
                                                return (
                                                    <li key={idx} className="text-[12px] font-black flex items-start gap-2">
                                                        <Icon size={10} className={`mt-1 shrink-0 ${service.titleColor}`} />
                                                        <span className="text-black/80">{p}</span>
                                                    </li>
                                                )
                                            })}
                                        </ul>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Bottom Row */}
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            {[
                                {
                                    title: "Incubation Support",
                                    icon: "Handshake",
                                    color: "bg-[#FFF7ED] border-orange-100",
                                    titleColor: "text-orange-700",
                                    points: ["Prototype development & validation", "Access to IDEA Lab facilities and other labs", "Cubicles & co-working spaces", "Seed funding via StartupTN and other programs"]
                                },
                                {
                                    title: "Startup Creation",
                                    icon: "Users",
                                    color: "bg-[#F5F3FF] border-purple-100",
                                    titleColor: "text-purple-700",
                                    points: ["Company formation & legal compliance", "Initial customer traction support", "Hiring & scaling operations", "Financial planning and compliance"]
                                },
                                {
                                    title: "Expert Mentoring",
                                    icon: "UserCheck",
                                    color: "bg-[#FFF1F2] border-rose-100",
                                    titleColor: "text-rose-700",
                                    points: ["Continuous mentoring and guidance", "Mentor and industry connections", "Investor networking", "Scaling & long-term sustainability"]
                                }
                            ].map((service, i) => (
                                <div key={i} className={`p-6 rounded-[1.5rem] border-2 ${service.color} flex flex-col items-center text-center shadow-sm hover:shadow-md transition-shadow bg-white/50 backdrop-blur-sm`}>
                                    <h3 className={`text-[18px] font-black mb-6 ${service.titleColor}`}>{service.title}</h3>
                                    <div className="w-full flex justify-center">
                                        <ul className="space-y-2 text-left inline-block">
                                            {service.points.map((p, idx) => {
                                                const Icon = service.icon === "Handshake" ? Handshake : 
                                                             service.icon === "Users" ? ShieldCheck : 
                                                             service.icon === "UserCheck" ? HeartPulse : Handshake
                                                return (
                                                    <li key={idx} className="text-[12px] font-black flex items-start gap-2">
                                                        <Icon size={10} className={`mt-1 shrink-0 ${service.titleColor}`} />
                                                        <span className="text-black/80">{p}</span>
                                                    </li>
                                                )
                                            })}
                                        </ul>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MXIncubatorPage
