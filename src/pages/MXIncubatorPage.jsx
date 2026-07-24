import { useState } from 'react'
import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'
import { Zap, Sprout, Cpu, HeartPulse, Building2, ShieldCheck, Handshake, FileText, Lightbulb } from 'lucide-react'

import ist2Logo from '../assets/iStart/ist2.webp'
import mxi1 from '../assets/iStart/mxi-1.webp'
import serviceImg1 from '../assets/iStart/istart.webp'
import serviceImg2 from '../assets/iStart/istart2.webp'
import serviceImg3 from '../assets/iStart/iStart-Hackathon-winner-1.webp'

const MXIncubatorPage = () => {
    const navigate = useNavigate()
    const [activeIprTab, setActiveIprTab] = useState('YUKTHI')

    const preincubatees = [
        { id: "ASN 1863", company: "DroneTribes", student: "Guna P", details: "Custom Drone Manufacturing, Identify the defects in Power Plants" },
        { id: "ASN 1864", company: "Visecure", student: "Viyasan S", details: "Cyber Security Platform" },
        { id: "ASN 3682", company: "Systematic Squad", student: "Tamilselvan C", details: "Landside Monitoring Robot" },
        { id: "ASN 3683", company: "Tono_Lite", student: "Govarthanahari N", details: "Portal Device for Glaucoma Patient" },
        { id: "ASN 3684", company: "Agrixnova", student: "Devisubaa S", details: "Software application for coconut farming and data analysis and prediction" },
        { id: "ASN 1909", company: "eNowatiX Technologies", student: "Aswika. N", details: "Embedded Technology Solution for Industry and academia" },
        { id: "ASN 3676", company: "Falcon Fleet", student: "Shahana Sri K S", details: "Eagle eye: Multispectral imaging smart drone for orchard management" },
        { id: "ASN 3677", company: "Hemotexhh", student: "Dharshini S", details: "Non-Invasive Blood Group Prediction and Health Monitoring System" },
        { id: "ASN 3678", company: "Automaters", student: "Nisha S", details: "Dynamic wireless power transmission for e-vehicle" },
        { id: "ASN 3679", company: "Mindmesh", student: "Jayashree N", details: "Rising child anemia cases in rural blocks" },
        { id: "ASN 3680", company: "Neural Ninjas", student: "Sudharsana K", details: "Let AI speak to your money / AI Monitored Digital Payments" },
        { id: "ASN 3681", company: "InnovateX", student: "Dhaksana R", details: "Climatic GenAI: An AI-Driven System for Predicting Wildlife Migration" },
        { id: "ASN 3685", company: "Ryzaq Innovators", student: "Kishore Kumar S", details: "Alternate Medium for Wifi / Bluetooth - Data Transmission" }
    ]

    return (
        <div className="min-h-screen bg-[#F8FAFC] font-graphik pb-6">
            <div className="max-w-7xl mx-auto px-4 lg:px-10 py-4">
                
                <div className="space-y-8">
                    {/* Hero Section */}
                    <div className="grid lg:grid-cols-2 gap-8 items-start">
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

                    {/* IPR Cell Section */}
                    <div className="space-y-8 py-8 border-t border-slate-200">
                        <div className="flex flex-col gap-1">
                            <div className="flex items-center gap-3">
                                <div className="h-8 w-1.5 bg-[#ffc107] rounded-full" />
                                <h2 className="text-3xl font-black text-[#224292] tracking-tight">IPR CELL</h2>
                            </div>
                            <p className="text-slate-500 font-black text-[10px] uppercase tracking-widest pl-5">Intellectual Property Rights and Innovation Repository</p>
                        </div>

                        {/* Tab Switcher */}
                        <div className="flex border-b border-slate-200">
                            {[
                                { id: 'YUKTHI', label: 'YUKTHI Innovation Repository', icon: Lightbulb },
                                { id: 'KAPILA', label: 'KAPILA IP Literacy Program', icon: ShieldCheck }
                            ].map((tab) => {
                                const Icon = tab.icon
                                const isActive = activeIprTab === tab.id
                                return (
                                    <button
                                        key={tab.id}
                                        onClick={() => setActiveIprTab(tab.id)}
                                        className={`flex items-center gap-2 px-6 py-4 text-sm font-black transition-all border-b-2 -mb-[2px] ${
                                            isActive
                                                ? 'border-[#224292] text-[#224292]'
                                                : 'border-transparent text-slate-400 hover:text-slate-600'
                                        }`}
                                    >
                                        <Icon size={16} />
                                        {tab.label}
                                    </button>
                                )
                            })}
                        </div>

                        {/* Tab Content */}
                        <div className="pt-4">
                            {activeIprTab === 'YUKTHI' ? (
                                <div className="space-y-6">
                                    <p className="text-black/70 text-sm font-bold leading-relaxed text-justify">
                                        YUKTHI (Youth Undergraduate Kit for Technology Innovation) Innovation Repository is an initiative by the Ministry of Education (MoE) Innovation Cell. It aims to build a robust repository of innovations, student start-ups, and technology solutions developed across higher education institutions to provide mentorship, funding, and growth opportunities.
                                    </p>
                                    
                                    {/* Preincubatees Table */}
                                    <div className="space-y-4 pt-2">
                                        <h4 className="text-lg font-black text-[#224292] tracking-tight uppercase">PREINCUBATEES</h4>
                                        <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-xl shadow-slate-200/50">
                                            <div className="overflow-x-auto">
                                                <table className="w-full text-left border-collapse">
                                                    <thead>
                                                        <tr className="bg-[#224292] text-white">
                                                            <th className="px-6 py-5 text-[11px] font-black tracking-widest border-r border-white/10 uppercase">Preincubatee ID</th>
                                                            <th className="px-6 py-5 text-[11px] font-black tracking-widest border-r border-white/10 uppercase">Company Name</th>
                                                            <th className="px-6 py-5 text-[11px] font-black tracking-widest border-r border-white/10 uppercase">Student Name</th>
                                                            <th className="px-6 py-5 text-[11px] font-black tracking-widest uppercase">Idea / Product Details</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody className="divide-y divide-slate-100">
                                                        {preincubatees.map((item, idx) => (
                                                            <tr key={idx} className="hover:bg-slate-50 transition-colors group">
                                                                <td className="px-6 py-4 text-sm font-black text-[#224292] border-r border-slate-50">{item.id}</td>
                                                                <td className="px-6 py-4 text-sm font-bold text-black border-r border-slate-50">{item.company}</td>
                                                                <td className="px-6 py-4 text-sm font-bold text-black border-r border-slate-50">{item.student}</td>
                                                                <td className="px-6 py-4 text-xs font-bold text-black/70 leading-relaxed">{item.details}</td>
                                                            </tr>
                                                        ))}
                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ) : (
                                <div className="space-y-6">
                                    <p className="text-black/70 text-sm font-bold leading-relaxed text-justify">
                                        KAPILA (Kalam Program for IP Literacy and Awareness Campaign) is a flagship scheme of the Government of India designed to promote intellectual property (IP) literacy and awareness in higher educational institutions. It encourages faculty and students to protect their creative inventions and innovations through patent, copyright, and design filings, offering financial support and institutional assistance.
                                    </p>
                                    
                                    {/* KAPILA Highlights Cards */}
                                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4">
                                        <div className="p-6 bg-white rounded-2xl border border-slate-150 shadow-sm flex flex-col space-y-3">
                                            <div className="w-10 h-10 rounded-xl bg-amber-50 flex items-center justify-center text-amber-600">
                                                <FileText size={20} />
                                            </div>
                                            <h4 className="text-sm font-black text-[#224292]">IP Awareness</h4>
                                            <p className="text-[11px] font-bold text-black/60 leading-relaxed text-justify">
                                                Regular seminars, workshops, and training programs to educate students and faculty on patent search, draft creation, and filing processes.
                                            </p>
                                        </div>
                                        
                                        <div className="p-6 bg-white rounded-2xl border border-slate-150 shadow-sm flex flex-col space-y-3">
                                            <div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center text-blue-600">
                                                <ShieldCheck size={20} />
                                            </div>
                                            <h4 className="text-sm font-black text-[#224292]">Patent Filing Support</h4>
                                            <p className="text-[11px] font-bold text-black/60 leading-relaxed text-justify">
                                                Financial assistance and institutional guidance for filing national and international patents, protecting novel concepts and products.
                                            </p>
                                        </div>
                                        
                                        <div className="p-6 bg-white rounded-2xl border border-slate-150 shadow-sm flex flex-col space-y-3">
                                            <div className="w-10 h-10 rounded-xl bg-emerald-50 flex items-center justify-center text-emerald-600">
                                                <Building2 size={20} />
                                            </div>
                                            <h4 className="text-sm font-black text-[#224292]">Commercialization</h4>
                                            <p className="text-[11px] font-bold text-black/60 leading-relaxed text-justify">
                                                Assisting researchers and startup founders in licensing patented technologies and bridging the gap from research labs to the industry market.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MXIncubatorPage
