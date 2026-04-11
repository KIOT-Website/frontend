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
        }
    ]

    const activeResearchAreas = [
        "AI in Healthcare", "Renewable Energy Systems", "Smart Manufacturing", 
        "IoT & Embedded Systems", "Structural Health Monitoring", "VLSI & Chip Design", 
        "Data Science & Analytics", "Composite Materials"
    ]

    return (
        <div className="min-h-screen bg-white font-sans">
            <div className="max-w-7xl mx-auto px-6 py-16 lg:py-24">
                
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-start">
                    {/* LEFT COLUMN: INTRO + RECOGNITION */}
                    <div className="space-y-12">
                        {/* Block 1: Page Title & Intro */}
                        <motion.div 
                            initial={{ opacity: 0, x: -30 }}
                            animate={{ opacity: 1, x: 0 }}
                        >
                            <h1 
                                className="text-4xl lg:text-5xl font-black text-[#18357a] uppercase leading-[1.1] mb-8"
                                style={{ wordSpacing: '0.3rem' }}
                            >
                                Departmentwise <br />
                                <span className="text-[#ffc107]">Research Initiatives</span>
                            </h1>

                            <div className="max-w-xl border-l-4 border-[#ffc107] pl-8">
                                <p className="text-[#64779F] text-[16px] font-bold leading-relaxed">
                                    The primary duties of any higher education institution are to carry out research and to generate new knowledge, dissemination of knowledge, and nurturing students. In this front, Research is the major focus at KIOT. At least one center of excellence in each department will be created to carry out cutting-edge research.
                                </p>
                            </div>
                        </motion.div>

                        {/* Block 2: Recognition Banner (Smaller Size) */}
                        <motion.div 
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                        >
                            <div className="max-w-md w-full bg-[#18357a] rounded-[2rem] p-8 md:p-10 flex flex-col items-center md:items-start gap-8 shadow-xl shadow-blue-900/10 border border-white/10 relative overflow-hidden group">
                                <div className="absolute top-0 right-0 w-24 h-24 bg-white/5 rounded-full -mr-12 -mt-12 blur-2xl" />
                                
                                <div className="w-14 h-14 bg-[#ffc107] rounded-2xl flex items-center justify-center shadow-lg transform rotate-3 group-hover:rotate-0 transition-transform">
                                    <Award className="text-[#18357a]" size={28} />
                                </div>

                                <div className="text-center md:text-left">
                                    <div className="flex items-center justify-center md:justify-start gap-2 mb-3">
                                        <div className="w-1.5 h-1.5 rounded-full bg-[#ffc107] animate-pulse" />
                                        <span className="text-[#ffc107] font-black text-[12px] uppercase">Anna University, Chennai</span>
                                    </div>
                                    <h2 
                                        className="text-2xl font-black text-white uppercase mb-4 leading-tight"
                                        style={{ wordSpacing: '0.4rem' }}
                                    >
                                        Recognized R&D Centre
                                    </h2>
                                    <div className="flex flex-col gap-3 text-blue-100/60 text-[11px] font-black uppercase mb-8">
                                        <div className="flex items-center gap-2">
                                            <div className="w-1.5 h-1.5 rounded-full bg-blue-400/50" />
                                            Recognition No: 4265300
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <div className="w-1.5 h-1.5 rounded-full bg-blue-400/50" />
                                            Valid upto: December 2027
                                        </div>
                                    </div>
                                    <a 
                                        href="https://res.cloudinary.com/dlk8yp5fv/image/upload/v1775728566/KIOT_RIR_rieaxk.webp"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center gap-3 px-8 py-3 bg-[#ffc107] text-[#18357a] rounded-xl font-black text-xs uppercase hover:bg-white transition-all shadow-lg active:scale-95"
                                    >
                                        View Details <ChevronRight size={16} />
                                    </a>
                                </div>
                            </div>
                        </motion.div>
                    </div>

                    {/* RIGHT COLUMN: DIRECTORY TABLE (Moved Up) */}
                    <div>
                        <motion.div 
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="bg-white rounded-[2rem] border-2 border-slate-100 overflow-hidden shadow-sm hover:shadow-xl hover:shadow-blue-900/5 transition-all"
                        >
                            <table className="w-full border-collapse">
                                <thead className="bg-[#18357a]">
                                    <tr>
                                        <th className="px-8 py-4 text-center text-[13px] font-black text-white uppercase">
                                            Department Directory
                                        </th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-slate-100">
                                    {departments.map((dept, idx) => (
                                        <tr 
                                            key={idx} 
                                            onClick={() => navigate(`/research/${dept.name.split(' (')[0].replace(/ /g, '-').toLowerCase()}`)}
                                            className="group hover:bg-slate-50 transition-all cursor-pointer"
                                        >
                                            <td className="px-8 py-3.5">
                                                <div className="flex justify-center">
                                                    <div className="flex items-center gap-6 w-full max-w-sm">
                                                        <div className={`w-9 h-9 rounded-xl ${dept.color} flex items-center justify-center group-hover:scale-110 transition-transform shadow-sm shrink-0`}>
                                                            <dept.icon size={18} />
                                                        </div>
                                                        <span className="text-[15px] font-black text-[#18357a] transition-colors group-hover:text-[#ffc107] text-left leading-tight">
                                                            {dept.name}
                                                        </span>
                                                    </div>
                                                </div>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </motion.div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ResearchPage
