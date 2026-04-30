import React from 'react'
import { motion } from 'framer-motion'
import { useParams, Link } from 'react-router-dom'
import { 
    ChevronRight, 
    ArrowLeft,
    Stethoscope,
    ShieldCheck,
    Cpu,
    Microscope,
    Clock,
    BadgeDollarSign,
    Box,
    Terminal
} from 'lucide-react'

const MedicalImagingPage = () => {
    const { deptName } = useParams()
    const formatDeptName = (name) => {
        if (!name) return "Departmentwise"
        return name.split('-').map(word => {
            if (word === "&") return "&"
            return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
        }).join(' ')
    }

    const labData = {
        title: "Centre for Medical Imaging",
        infrastructure: "Research Laboratory",
        softwareList: [
            {
                id: 1,
                name: "Aphelion - Dev GUI and SDK software",
                description: "With color classification module & addon module for image processing and analysis.",
                cost: "3,00,000.00",
                year: "2013"
            },
            {
                id: 2,
                name: "Aphelion - Dev addon module software",
                description: "Additional computational modules for advanced medicinal image registration.",
                cost: "3,00,000.00",
                year: "2013"
            },
            {
                id: 3,
                name: "IAR-EW430-NW-EDU",
                description: "Advanced embedded workbench for healthcare device development and prototyping.",
                cost: "1,05,600.00",
                year: "2013"
            }
        ],
        totalInvestment: "7,05,600.00"
    }

    return (
        <div className="min-h-screen bg-[#f6f9fc] font-sans pb-20">
            {/* Breadcrumbs */}
            <div className="bg-white border-b border-slate-200 py-4">
                <div className="max-w-6xl mx-auto px-6 flex items-center gap-4">
                    <Link to="/research" className="text-slate-400 hover:text-[#0f172a] text-xs font-bold uppercase tracking-wider transition-colors pt-0.5">
                        Research Initiatives
                    </Link>
                    <ChevronRight size={14} className="text-slate-300" />
                    <Link to={`/research/${deptName}`} className="text-slate-400 hover:text-[#0f172a] text-xs font-bold uppercase tracking-wider transition-colors pt-0.5">
                        Research in {formatDeptName(deptName)}
                    </Link>
                    <ChevronRight size={14} className="text-slate-300" />
                    <span className="text-[#0f172a] text-xs font-bold uppercase tracking-wider pt-0.5">
                        Medical Imaging
                    </span>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-6 py-12 lg:py-16">
                
                {/* Header Section */}
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mb-12"
                >
                    <Link 
                        to={`/research/${deptName}`}
                        className="inline-flex items-center gap-2 text-[#0f172a] font-bold text-[10px] uppercase tracking-wider mb-6 hover:translate-x-[-4px] transition-transform"
                    >
                        <ArrowLeft size={14} /> Back to Repository
                    </Link>

                    <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8">
                        <div>
                            <h1 className="text-3xl lg:text-5xl font-bold text-[#224292] uppercase leading-tight mb-6 italic">
                                Centre for <span className="text-[#ffc107]">Medical Imaging</span>
                            </h1>
                            <div className="max-w-2xl border-l-4 border-[#ffc107] pl-8 py-1">
                                <p className="text-[#1e293b] text-base font-semibold leading-relaxed">
                                    Specialized research laboratory dedicated to advanced diagnostic software and embedded healthcare solutions beyond the standard academic syllabus.
                                </p>
                            </div>
                        </div>

                        <div className="px-6 py-4 bg-[#0f172a] rounded-xl border-b-4 border-[#ffc107] text-white shadow-xl">
                            <span className="text-[10px] font-black uppercase tracking-widest text-[#ffc107] block mb-1">Infrastructure Hub</span>
                            <div className="text-xl font-black uppercase italic tracking-tight">{labData.infrastructure}</div>
                        </div>
                    </div>
                </motion.div>

                {/* Software List Section */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
                    
                    {/* Main Content */}
                    <div className="lg:col-span-8 space-y-6">
                        <div className="flex items-center gap-4 mb-8">
                            <div className="w-10 h-10 bg-white shadow-sm border border-slate-100 rounded-xl flex items-center justify-center text-[#ffc107]">
                                <Terminal size={20} />
                            </div>
                            <h2 className="text-xl font-bold text-[#0f172a] uppercase tracking-tight">Advanced Software Ecosystem</h2>
                        </div>

                        {labData.softwareList.map((software, idx) => (
                            <motion.div
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: idx * 0.1 }}
                                key={software.id}
                                className="group bg-white rounded-2xl border border-slate-200/60 shadow-xl shadow-blue-900/5 hover:border-[#ffc107] transition-all duration-300 p-7"
                            >
                                <div className="flex flex-col md:flex-row gap-8">
                                    <div className="flex-1">
                                        <div className="flex items-center gap-3 mb-4">
                                            <div className="w-8 h-8 rounded-lg bg-slate-50 flex items-center justify-center text-[#224292] group-hover:bg-[#ffc107] transition-all">
                                                <Cpu size={18} />
                                            </div>
                                            <h3 className="text-lg font-bold text-[#0f172a] uppercase tracking-tight">{software.name}</h3>
                                        </div>
                                        <p className="text-[14px] font-semibold text-[#64779F] leading-relaxed italic mb-6">
                                            "{software.description}"
                                        </p>
                                        <div className="flex items-center gap-6">
                                            <div className="flex items-center gap-2 text-[11px] font-bold text-[#0f172a] uppercase">
                                                <Clock size={14} className="text-[#ffc107]" /> 
                                                <span>Commissioned {software.year}</span>
                                            </div>
                                            <div className="flex items-center gap-2 text-[11px] font-bold text-[#0f172a] uppercase">
                                                <ShieldCheck size={14} className="text-[#ffc107]" /> 
                                                <span>Beyond Syllabus</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="md:w-48 bg-[#fafcff] rounded-xl border border-slate-100 p-6 flex flex-col justify-center items-center text-center group-hover:bg-[#0f172a] transition-all duration-300">
                                        <BadgeDollarSign size={24} className="text-[#ffc107] mb-2" />
                                        <span className="text-[10px] font-bold text-[#64779F] uppercase tracking-widest group-hover:text-slate-400">Software Cost</span>
                                        <div className="text-lg font-black text-[#224292] group-hover:text-white">₹ {software.cost}</div>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    {/* Sidebar Stats */}
                    <div className="lg:col-span-4 space-y-6">
                        <div className="bg-[#224292] rounded-2xl p-8 text-white shadow-2xl relative overflow-hidden group">
                            <div className="absolute -right-10 -bottom-10 opacity-10 group-hover:scale-110 transition-transform duration-500">
                                <Stethoscope size={200} />
                            </div>
                            <div className="relative z-10">
                                <h4 className="text-[11px] font-bold uppercase tracking-[3px] text-[#ffc107] mb-8">Financial Overview</h4>
                                <div className="space-y-8">
                                    <div>
                                        <span className="text-xs font-semibold opacity-70 block mb-1">Total Hub Investment</span>
                                        <div className="text-3xl font-black italic tracking-tighter">₹ {labData.totalInvestment}</div>
                                    </div>
                                    <div className="pt-8 border-t border-white/10">
                                        <ul className="space-y-4">
                                            <li className="flex items-center gap-3 text-xs font-bold">
                                                <CheckCircle2 size={16} className="text-[#ffc107]" /> 
                                                3 Advanced SDK Licenses
                                            </li>
                                            <li className="flex items-center gap-3 text-xs font-bold">
                                                <CheckCircle2 size={16} className="text-[#ffc107]" /> 
                                                Multi-User Network Support
                                            </li>
                                            <li className="flex items-center gap-3 text-xs font-bold">
                                                <CheckCircle2 size={16} className="text-[#ffc107]" /> 
                                                24/7 Research Access
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="bg-white rounded-2xl p-8 border border-slate-200 shadow-xl overflow-hidden relative">
                            <div className="flex items-center gap-4 mb-6">
                                <div className="w-10 h-10 rounded-xl bg-slate-50 flex items-center justify-center text-[#ffc107]">
                                    <Microscope size={20} />
                                </div>
                                <h4 className="text-sm font-bold text-[#0f172a] uppercase">Research Capacity</h4>
                            </div>
                            <p className="text-xs font-semibold text-[#64779F] leading-relaxed mb-6">
                                The center facilitates post-graduate projects and doctoral research in high-resolution medical image segmentation and pattern recognition.
                            </p>
                            <div className="grid grid-cols-2 gap-4">
                                <div className="p-3 bg-slate-50 rounded-xl border border-slate-100 text-center">
                                    <div className="text-lg font-black text-[#224292]">100%</div>
                                    <div className="text-[8px] font-bold text-[#64779F] uppercase tracking-widest">Industry Standard</div>
                                </div>
                                <div className="p-3 bg-slate-50 rounded-xl border border-slate-100 text-center">
                                    <div className="text-lg font-black text-[#224292]">UG/PG</div>
                                    <div className="text-[8px] font-bold text-[#64779F] uppercase tracking-widest">Target Audience</div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>

                <div className="mt-12 p-6 bg-white border border-slate-200 rounded-3xl shadow-sm inline-flex items-center gap-4">
                   <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center text-[#224292]">
                       <Box size={20} />
                   </div>
                   <div>
                       <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Center Status</p>
                       <p className="text-xs font-bold text-[#1e293b] uppercase">Operational & Fully Licensed (Active)</p>
                   </div>
                </div>

            </div>
        </div>
    )
}

const CheckCircle2 = ({ size, className }) => (
    <svg 
        width={size} 
        height={size} 
        viewBox="0 0 24 24" 
        fill="none" 
        stroke="currentColor" 
        strokeWidth="3" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
        className={className}
    >
        <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" />
        <path d="m9 12 2 2 4-4" />
    </svg>
)

export default MedicalImagingPage
