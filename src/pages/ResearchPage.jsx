import React from 'react'
import { motion } from 'framer-motion'
import { 
    ChevronRight, 
    Home as HomeIcon,
    Search,
    Award,
    Lightbulb,
    Microscope,
    Factory,
    Cpu,
    Zap,
    Computer,
    Building2,
    Database,
    Binary,
    FlaskConical,
    LineChart,
    Mail,
    Phone,
    Link as LinkIcon
} from 'lucide-react'
import { useNavigate } from 'react-router-dom'
import openImage from '../assets/iStart/open.JPG'

const ResearchPage = () => {
    const navigate = useNavigate()

    const departments = [
        {
            name: "Mechanical Engineering",
            focus: ["Advanced Manufacturing", "Thermal Engineering", "CFD"],
            icon: Factory,
            color: "bg-blue-50 text-blue-600"
        },
        {
            name: "Electronics & Communication Engineering",
            focus: ["VLSI Design", "Embedded Systems", "Signal Processing"],
            icon: Cpu,
            color: "bg-indigo-50 text-indigo-600"
        },
        {
            name: "Electrical & Electronics Engineering",
            focus: ["Power Systems", "Renewable Energy", "Smart Grids"],
            icon: Zap,
            color: "bg-yellow-50 text-yellow-600"
        },
        {
            name: "Computer Science & Engineering",
            focus: ["AI/ML", "Blockchain", "Cloud Computing"],
            icon: Computer,
            color: "bg-emerald-50 text-emerald-600"
        },
        {
            name: "Civil Engineering",
            focus: ["Structural Health", "Geotechnical Engg", "Smart Materials"],
            icon: Building2,
            color: "bg-orange-50 text-orange-600"
        },
        {
            name: "Information Technology",
            focus: ["Cybersecurity", "Data Analytics", "IoT"],
            icon: Database,
            color: "bg-cyan-50 text-cyan-600"
        },
        {
            name: "Artificial Intelligence & Data Science",
            focus: ["Deep Learning", "Computer Vision", "Big Data"],
            icon: Binary,
            color: "bg-purple-50 text-purple-600"
        },
        {
            name: "Computer Science & Business Systems",
            focus: ["Enterprise Systems", "Business Analytics"],
            icon: LineChart,
            color: "bg-rose-50 text-rose-600"
        },
        {
            name: "Science & Humanities",
            focus: ["Nanomaterials", "Applied Mathematics", "Sensor Development"],
            icon: FlaskConical,
            color: "bg-violet-50 text-violet-600"
        },
        {
            name: "Management Sciences",
            focus: ["Operations Research", "Finance Analytics", "HR Tech"],
            icon: LineChart,
            color: "bg-slate-50 text-slate-600"
        },
        {
            name: "Master of Computer Applications",
            focus: ["Software Development", "Web Technologies", "AI & ML"],
            icon: Computer,
            color: "bg-teal-50 text-teal-600"
        }
    ]

    const activeResearchAreas = [
        "AI in Healthcare", "Renewable Energy Systems", "Smart Manufacturing", 
        "IoT & Embedded Systems", "Structural Health Monitoring", "VLSI & Chip Design", 
        "Data Science & Analytics", "Composite Materials"
    ]

    return (
        <div className="min-h-screen bg-slate-50/30 font-sans">
            {/* Hero Section */}
            <div className="relative bg-[#224292] pt-6 md:pt-10 pb-12 overflow-hidden rounded-b-[2rem] md:rounded-b-[3rem] font-graphik mb-8">
                {/* Background decorative circles */}
                <div className="absolute top-10 right-10 w-48 h-48 border border-white/5 rounded-full" />
                <div className="absolute top-20 right-20 w-80 h-80 border border-white/5 rounded-full" />
                <div className="absolute inset-0 opacity-[0.03] pointer-events-none" 
                     style={{ backgroundImage: 'radial-gradient(white 0.5px, transparent 0.5px)', backgroundSize: '30px 30px' }} />

                <div className="relative z-10 w-full max-w-[1500px] mx-auto px-6 lg:px-12">
                    <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
                        {/* Left Column: Heading and Description */}
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                            className="md:col-span-7 text-left flex flex-col items-start"
                        >
                            <h1 className="text-3xl lg:text-4xl font-black text-white leading-tight mb-3 tracking-tight text-left">
                                Research & <span className="text-[#ffc107]">Innovations</span>
                            </h1>
                            <div className="h-1 w-16 bg-[#ffc107] mb-6" />
                            
                            <p className="text-white/90 text-xs md:text-sm font-medium leading-relaxed max-w-2xl text-justify font-graphik">
                                At Knowledge Institute of Technology, we foster a rich ecosystem of inquiry and discovery. Our departments drive cutting-edge research, secure government grants, and support innovative projects to build future-ready solutions for industry and society.
                            </p>
                        </motion.div>

                        {/* Right Column: R&D Centre Card */}
                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                            className="md:col-span-5 flex justify-center md:justify-end w-full"
                        >
                            <div className="w-full max-w-sm text-left">
                                <div className="flex items-center gap-2 mb-2">
                                    <Award className="text-[#ffc107]" size={18} />
                                    <span className="text-[#ffc107] font-black text-[11px] tracking-wider uppercase font-graphik">
                                        Anna University, Chennai
                                    </span>
                                </div>
                                <h2 className="text-2xl font-black text-white mb-3 leading-tight font-graphik">
                                    Recognized R&D Centre
                                </h2>
                                <div className="flex flex-col gap-2.5 text-white/80 text-[11px] font-semibold mb-5 font-graphik">
                                    <div className="flex items-center gap-1.5">
                                        <div className="w-1.5 h-1.5 rounded-full bg-[#ffc107]" />
                                        Recognition No: 4265300
                                    </div>
                                    <div className="flex items-center gap-1.5">
                                        <div className="w-1.5 h-1.5 rounded-full bg-[#ffc107]" />
                                        Valid upto: December 2027
                                    </div>
                                </div>
                                <a 
                                    href="https://res.cloudinary.com/dlk8yp5fv/image/upload/v1775728566/KIOT_RIR_rieaxk.webp"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#ffc107] text-[#224292] rounded-lg font-black text-xs hover:bg-white transition-all shadow-md active:scale-95 font-graphik"
                                >
                                    View Details <ChevronRight size={14} />
                                </a>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-6 pb-16">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
                    {/* LEFT COLUMN: INTRO + IMAGE */}
                    <div className="space-y-8">
                        {/* Page Title & Intro */}
                        <motion.div 
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                        >
                            <h2 
                                className="text-3xl lg:text-4xl font-bold text-[#224292] leading-tight mb-4 tracking-tighter"
                            >
                                Departmentwise <span className="text-[#ffc107]">Research Initiatives</span>
                            </h2>
                            <p className="text-black font-medium text-sm lg:text-base leading-relaxed text-justify mb-2">
                                Each academic department at KIOT functions as a hub for innovation, encouraging students and faculty members to engage in industry-relevant investigations, publish research papers in indexed journals, and obtain intellectual property patents.
                            </p>
                        </motion.div>

                        {/* Open.JPG Image Section */}
                        <motion.div 
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="w-full rounded-2xl overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 border border-slate-200"
                        >
                            <img 
                                src={openImage} 
                                alt="Research Initiatives" 
                                className="w-full h-[280px] md:h-[350px] object-cover"
                            />
                        </motion.div>
                    </div>

                    {/* RIGHT COLUMN: DEPARTMENT DIRECTORY */}
                    <div>
                        <motion.div 
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="bg-white rounded-[2rem] border-2 border-slate-100 overflow-hidden shadow-sm hover:shadow-xl hover:shadow-blue-900/5 transition-all"
                        >
                            <div className="bg-[#224292] py-4 text-center text-[13px] font-semibold text-white font-graphik">
                                Department Directory
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-slate-100">
                                <table className="w-full border-collapse">
                                    <tbody className="divide-y divide-slate-100">
                                        {departments.slice(0, 6).map((dept, idx) => (
                                            <tr 
                                                key={idx} 
                                                onClick={() => navigate(`/research/${dept.name.split(' (')[0].replace(/ /g, '-').toLowerCase()}`)}
                                                className="group hover:bg-slate-50 transition-all cursor-pointer"
                                            >
                                                <td className="px-6 py-3.5">
                                                    <div className="flex items-center gap-4">
                                                        <div className={`w-9 h-9 rounded-xl ${dept.color} flex items-center justify-center group-hover:scale-110 transition-transform shadow-sm shrink-0`}>
                                                            <dept.icon size={18} />
                                                        </div>
                                                        <span className="text-[14px] font-medium text-[#224292] transition-colors group-hover:text-[#ffc107] text-left leading-tight font-graphik">
                                                            {dept.name}
                                                        </span>
                                                    </div>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                                <table className="w-full border-collapse">
                                    <tbody className="divide-y divide-slate-100">
                                        {departments.slice(6).map((dept, idx) => (
                                            <tr 
                                                key={idx} 
                                                onClick={() => navigate(`/research/${dept.name.split(' (')[0].replace(/ /g, '-').toLowerCase()}`)}
                                                className="group hover:bg-slate-50 transition-all cursor-pointer"
                                            >
                                                <td className="px-6 py-3.5">
                                                    <div className="flex items-center gap-4">
                                                        <div className={`w-9 h-9 rounded-xl ${dept.color} flex items-center justify-center group-hover:scale-110 transition-transform shadow-sm shrink-0`}>
                                                            <dept.icon size={18} />
                                                        </div>
                                                        <span className="text-[14px] font-medium text-[#224292] transition-colors group-hover:text-[#ffc107] text-left leading-tight font-graphik">
                                                            {dept.name}
                                                        </span>
                                                    </div>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ResearchPage
