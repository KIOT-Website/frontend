import React from 'react'
import { motion } from 'framer-motion'
import { useParams, Link } from 'react-router-dom'
import { 
    ChevronRight, 
    ArrowLeft,
    Handshake,
    Building2,
    Calendar,
    BadgeDollarSign,
    Zap,
    Users,
    Stethoscope,
    Cpu
} from 'lucide-react'

const ConsultancyPage = () => {
    const { deptName } = useParams()

    const formatDeptName = (name) => {
        if (!name) return "Departmentwise"
        return name.split('-').map(word => {
            if (word === "&") return "&"
            return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
        }).join(' ')
    }

    const allConsultancy = {
        'electronics-&-communication-engineering': [
            // 2024-2025
            { id: 1, year: "2024-2025", title: "Automated Glove Donning for Infection Control", industry: "SKS Hospital, Salem", status: "Prototype completed / Testing in progress", domain: "Healthcare", revenue: "-", icon: <Stethoscope size={20} /> },
            { id: 2, year: "2024-2025", title: "Automated Ultraviolet Sterile Station", industry: "SKS Hospital, Salem", status: "Prototype completed / Testing in progress", domain: "Healthcare", revenue: "-", icon: <Zap size={20} /> },
            
            // 2023-2024
            { id: 3, year: "2023-2024", title: "Software Solution Development", industry: "Blackflex LLP Services, Chennai", status: "Completed", domain: "Software Application", revenue: "3,00,000", pi: "Dr. V.Saravanan, Dr. S. Maragtharaj, Mr. K. Rajesh", icon: <Building2 size={20} /> },
            { id: 4, year: "2023-2024", title: "IoT Solution for Medical devices", industry: "Medpro Service, Salem", status: "Completed", domain: "IoT / Medical", revenue: "1,00,000", pi: "Dr. P.Shanmuga Sundaram, Dr. S.Kumarganesh, Mr. R. Shanmuga Sundaram", icon: <Cpu size={20} /> },

            // 2021-2022
            { id: 5, year: "2021-2022", title: "Design and Simulation of Electronics Circuits", industry: "Medpro Service, Salem", status: "Completed", domain: "Training Program", revenue: "1,00,000", pi: "V.Saravanan, S.Veerakumar", icon: <Users size={20} /> },
            { id: 6, year: "2021-2022", title: "Testing and Verification of Electronic Boards", industry: "Medpro Service, Salem", status: "Completed", domain: "Training Program", revenue: "25,000", pi: "Dr. P.Shanmuga Sundaram, T.Devika", icon: <Users size={20} /> },
            { id: 7, year: "2021-2022", title: "Fault Diagnosis in Electronics Circuits", industry: "SKS MEDI Tech, Erode", status: "Completed", domain: "Training Program", revenue: "25,000", pi: "R Shanmuga Sundaram, S. Premkumar", icon: <Users size={20} /> },
            { id: 8, year: "2021-2022", title: "Electronics Product Circuits Design and Verification", industry: "SKS MEDI Tech, Erode", status: "Completed", domain: "Training Program", revenue: "25,000", pi: "M.Chandraman, A. Arun", icon: <Users size={20} /> }
        ]
    }

    const currentConsultancy = allConsultancy[deptName?.toLowerCase()] || []

    return (
        <div className="min-h-screen bg-[#f6f9fc] font-sans pb-20">
            {/* Breadcrumbs */}
            <div className="bg-white border-b border-slate-200 py-4">
                <div className="max-w-6xl mx-auto px-6 flex items-center gap-4">
                    <Link to="/research" className="text-slate-400 hover:text-[#0f172a] text-[13px] font-bold uppercase tracking-wider transition-colors pt-0.5">
                        Research Initiatives
                    </Link>
                    <ChevronRight size={14} className="text-slate-300" />
                    <Link to={`/research/${deptName}`} className="text-slate-400 hover:text-[#0f172a] text-[13px] font-bold uppercase tracking-wider transition-colors pt-0.5">
                        Research in {formatDeptName(deptName)}
                    </Link>
                    <ChevronRight size={14} className="text-slate-300" />
                    <span className="text-[#0f172a] text-[13px] font-bold uppercase tracking-wider pt-0.5">
                        Industrial Consultancy
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


                    <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8">
                        <div>
                            <h1 className="text-3xl lg:text-5xl font-bold text-[#224292] uppercase leading-tight mb-6 italic">
                                Industrial <span className="text-[#ffc107]">Consultancy</span>
                            </h1>
                            <div className="max-w-2xl border-l-4 border-[#ffc107] pl-8 py-1">
                                <p className="text-[#1e293b] text-base font-semibold leading-relaxed">
                                    Strategic collaborations between {formatDeptName(deptName)} and global industry leaders for technology transfer, training, and specialized product development.
                                </p>
                            </div>
                        </div>

                        <div className="bg-[#0f172a] rounded-2xl p-6 text-white shadow-2xl border-b-4 border-[#ffc107]">
                            <p className="text-[12px] font-black uppercase tracking-widest text-[#ffc107] mb-1">Impact Metric</p>
                            <div className="text-2xl font-black italic tracking-tight">₹ 5,75,000+</div>
                            <p className="text-[11px] font-bold opacity-50 uppercase tracking-widest mt-1">Total Consultancy Revenue</p>
                        </div>
                    </div>
                </motion.div>

                {/* Grid of Consultancy Projects */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {currentConsultancy.map((item, idx) => (
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: idx * 0.1 }}
                            key={item.id}
                            className="group bg-white rounded-2xl border border-slate-200/60 shadow-xl shadow-blue-900/5 hover:border-[#ffc107] transition-all p-7 flex flex-col"
                        >
                            <div className="flex justify-between items-start mb-6">
                                <div className="w-14 h-14 rounded-2xl bg-slate-50 flex items-center justify-center text-[#ffc107] group-hover:bg-[#0f172a] group-hover:text-white transition-all duration-500">
                                    {item.icon}
                                </div>
                                <div className="text-right">
                                    <span className="inline-flex items-center px-3 py-1 bg-[#224292] text-white text-[11px] font-black uppercase rounded-full tracking-widest mb-2 italic">
                                        {item.status}
                                    </span>
                                    <div className="flex items-center justify-end gap-2 text-[12px] font-bold text-slate-400 uppercase tracking-widest leading-none">
                                        <Calendar size={12} className="text-[#ffc107]" /> {item.year}
                                    </div>
                                </div>
                            </div>

                            <div className="flex-1">
                                <h3 className="text-lg font-black text-[#0f172a] uppercase leading-tight mb-4 group-hover:text-[#224292] transition-colors italic">
                                    "{item.title}"
                                </h3>
                                
                                <div className="space-y-3 mb-6">
                                    <div className="flex items-start gap-4 p-4 bg-slate-50 rounded-2xl border border-slate-100/50">
                                        <Building2 size={16} className="text-slate-300 mt-0.5 shrink-0" />
                                        <div>
                                            <p className="text-[12px] font-bold text-slate-400 uppercase tracking-widest mb-1">Industry Partner</p>
                                            <p className="text-[14px] font-bold text-[#1e293b] uppercase tracking-tight">{item.industry}</p>
                                        </div>
                                    </div>
                                    
                                    <div className="flex items-start gap-4 p-4 bg-slate-50 rounded-2xl border border-slate-100/50">
                                        <Handshake size={16} className="text-[#ffc107] mt-0.5 shrink-0" />
                                        <div>
                                            <p className="text-[12px] font-bold text-slate-400 uppercase tracking-widest mb-1">Domain Expertise</p>
                                            <p className="text-[14px] font-bold text-[#1e293b] uppercase tracking-tight">{item.domain}</p>
                                        </div>
                                    </div>

                                    {item.pi && (
                                        <div className="flex items-start gap-4 p-4 bg-slate-50 rounded-2xl border border-slate-100/50">
                                            <Users size={16} className="text-slate-300 mt-0.5 shrink-0" />
                                            <div>
                                                <p className="text-[12px] font-bold text-slate-400 uppercase tracking-widest mb-1">Consultants (PI / Co-PI)</p>
                                                <p className="text-[12px] font-bold text-[#1e293b] uppercase tracking-tight leading-relaxed">{item.pi}</p>
                                            </div>
                                        </div>
                                    )}
                                </div>
                            </div>

                            <div className="pt-6 border-t border-slate-100 flex items-center justify-between">
                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 rounded-full bg-[#ffc107]/10 flex items-center justify-center text-[#ffc107]">
                                        <BadgeDollarSign size={20} />
                                    </div>
                                    <div>
                                        <p className="text-[11px] font-bold text-slate-400 uppercase tracking-[2px]">Revenue Generated</p>
                                        <p className="text-lg font-black text-[#224292] tracking-tight group-hover:text-[#ffc107] transition-colors italic">₹ {item.revenue}</p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

            </div>
        </div>
    )
}

export default ConsultancyPage
