import React from 'react'
import { motion } from 'framer-motion'
import { useParams, Link } from 'react-router-dom'
import { 
    ChevronRight, 
    Home as HomeIcon,
    Users,
    Mail,
    Fingerprint,
    BookOpen,
    GraduationCap,
    ArrowLeft,
    Search
} from 'lucide-react'

const PhdSupervisorsPage = () => {
    const { deptName } = useParams()

    const formatDeptName = (name) => {
        if (!name) return "Departmentwise"
        return name.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')
    }

    const supervisors = [
        {
            id: 1,
            name: "Dr.PSS.Srinivasan",
            university: "Anna University",
            department: "Mechanical Engineering",
            researchArea: "Heat transfer, CFD",
            supervisorId: "9920479",
            email: "chairman@kiot.ac.in"
        },
        {
            id: 2,
            name: "Dr.K.Visagavel",
            university: "Anna University",
            department: "Mechanical Engineering",
            researchArea: "Thermal Engineering, Heat Transfer, CFD and Solar Energy",
            supervisorId: "2420553",
            email: "principal@kiot.ac.in"
        },
        {
            id: 3,
            name: "Dr.P.Navaneethakrishnan",
            university: "Anna University",
            department: "Mechanical Engineering",
            researchArea: "Design, CAD/CAM, Finite Element Analysis, Computational Fluid Dynamics",
            supervisorId: "2220288",
            email: "pnkmech@kiot.ac.in"
        },
        {
            id: 4,
            name: "Dr.M. Ilangkumaran",
            university: "Anna University",
            department: "Mechanical Engineering",
            researchArea: "Maintenance Engineering, Multi Criteria Decision Making",
            supervisorId: "2120119",
            email: "mikmech@kiot.ac.in"
        },
        {
            id: 5,
            name: "Dr.N.Panneerselvam",
            university: "Anna University",
            department: "Mechanical Engineering",
            researchArea: "Energy & Composite Materials",
            supervisorId: "4120109",
            email: "npsmech@kiot.ac.in"
        }
    ]

    const filteredSupervisors = supervisors.filter(sup => 
        sup.department.toLowerCase().replace(/ /g, '-') === deptName?.toLowerCase()
    )

    return (
        <div className="min-h-screen bg-[#f6f9fc] font-sans pb-20">
            {/* Navigation & Breadcrumbs */}
            <div className="bg-white border-b border-slate-200 py-4">
                <div className="max-w-6xl mx-auto px-6 flex items-center gap-4">
                    <Link to="/research" className="text-slate-400 hover:text-[#18357a] text-xs font-black uppercase tracking-wider transition-colors pt-0.5">
                        Research Initiatives
                    </Link>
                    <ChevronRight size={14} className="text-slate-300" />
                    <Link to={`/research/${deptName}`} className="text-slate-400 hover:text-[#18357a] text-xs font-black uppercase tracking-wider transition-colors pt-0.5">
                        {deptName?.toUpperCase()}
                    </Link>
                    <ChevronRight size={14} className="text-slate-300" />
                    <span className="text-[#18357a] text-xs font-black uppercase tracking-wider pt-0.5">
                        Ph.D Supervisors
                    </span>
                </div>
            </div>

            <div className="max-w-6xl mx-auto px-6 py-12 lg:py-16">
                
                {/* Header Section */}
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mb-12"
                >
                    <Link 
                        to={`/research/${deptName}`}
                        className="inline-flex items-center gap-2 text-[#18357a] font-black text-[10px] uppercase tracking-wider mb-6 hover:translate-x-[-4px] transition-transform"
                    >
                        <ArrowLeft size={14} /> Back to Repository
                    </Link>

                    <h1 className="text-3xl lg:text-5xl font-bold text-[#18357a] uppercase leading-tight mb-6">
                        List of <span className="text-[#ffc107]">Ph.D Supervisors</span>
                    </h1>

                    <div className="max-w-3xl border-l-4 border-[#ffc107] pl-8 py-1">
                        <p className="text-[#1e293b] text-base font-semibold leading-relaxed">
                            Profile of recognized research supervisors at {formatDeptName(deptName)}. Guiding the next generation of innovators through specialized research domains.
                        </p>
                    </div>
                </motion.div>

                {/* Supervisor Directory Table */}
                <motion.div 
                    initial={{ opacity: 0, scale: 0.98 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="bg-white rounded-[2rem] shadow-2xl shadow-blue-900/5 border border-slate-200/60 overflow-hidden"
                >
                    <div className="overflow-x-auto">
                        <table className="w-full border-collapse text-left">
                            <thead>
                                <tr>
                                    <th className="bg-black px-6 py-5 text-left text-[11px] font-bold text-white uppercase tracking-[2px] w-16">S. No.</th>
                                    <th className="bg-black px-6 py-5 text-left text-[11px] font-bold text-white uppercase tracking-[2px]">Faculty Details</th>
                                    <th className="bg-black px-6 py-5 text-left text-[11px] font-bold text-white uppercase tracking-[2px]">Topic / Domain Expertise</th>
                                    <th className="bg-black px-6 py-5 text-right text-[11px] font-bold text-[#ffc107] uppercase tracking-[2px] pr-8">Research Metrics</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-slate-100">
                                {filteredSupervisors.length > 0 ? (
                                    filteredSupervisors.map((sup, idx) => (
                                        <tr 
                                            key={sup.id}
                                            className="group hover:bg-[#fafcff] transition-all duration-300"
                                        >
                                            <td className="px-6 py-5">
                                                <div className="w-8 h-8 bg-blue-50/50 rounded flex items-center justify-center text-black font-black text-xs group-hover:bg-black group-hover:text-white transition-all duration-300">
                                                    {idx + 1 < 10 ? `0${idx + 1}` : idx + 1}
                                                </div>
                                            </td>
                                        <td className="px-6 py-4">
                                            <div>
                                                <div className="text-[14px] font-bold text-[#18357a] uppercase tracking-tight mb-1 group-hover:text-[#ffc107] transition-colors">{sup.name}</div>
                                                <div className="flex flex-col gap-0.5">
                                                    <div className="flex items-center gap-1.5 text-[#18357a]/70 text-[11px] font-semibold">
                                                        <GraduationCap size={13} className="text-[#ffc107]" /> {sup.university}
                                                    </div>
                                                    <div className="flex items-center gap-1.5 text-[#18357a]/70 text-[11px] font-semibold">
                                                        <BookOpen size={13} className="text-[#ffc107]" /> {sup.department}
                                                    </div>
                                                </div>
                                            </div>
                                        </td>
                                        <td className="px-6 py-4">
                                            <div className="max-w-[280px]">
                                                <p className="text-[12px] font-semibold text-[#1e293b] leading-relaxed line-clamp-2 italic">
                                                    "{sup.researchArea}"
                                                </p>
                                            </div>
                                        </td>
                                        <td className="px-6 py-4 text-right pr-8">
                                            <div className="flex flex-col items-end gap-1.5">
                                                <div className="flex items-center gap-2 px-3 py-1 bg-[#0f172a]/5 rounded-full text-[#0f172a] text-[10px] font-bold uppercase tracking-wider">
                                                    <Fingerprint size={12} className="text-[#ffc107]" /> {sup.supervisorId}
                                                </div>
                                                <a 
                                                    href={`mailto:${sup.email}`}
                                                    className="flex items-center gap-2 px-3 py-1 bg-white border border-slate-200 rounded-full text-[#334155] text-[10px] font-bold uppercase tracking-wider hover:bg-[#0f172a] hover:text-white hover:border-[#0f172a] transition-all group/mail"
                                                >
                                                    <Mail size={12} className="text-[#ffc107] group-hover/mail:text-white" /> {sup.email}
                                                </a>
                                            </div>
                                        </td>
                                    </tr>
                                    ))
                                ) : (
                                    <tr>
                                        <td colSpan="4" className="px-6 py-20 text-center">
                                            <div className="flex flex-col items-center gap-4">
                                                <Search size={40} className="text-[#ffc107]/20" />
                                                <p className="text-[#18357a] font-black uppercase text-sm tracking-wider">
                                                    No supervisor data found for {formatDeptName(deptName)}
                                                </p>
                                                <p className="text-[#64779F] font-bold text-[11px]">
                                                    We are currently updating our research repository. Please check back later.
                                                </p>
                                            </div>
                                        </td>
                                    </tr>
                                )}
                            </tbody>
                        </table>
                    </div>
                </motion.div>

                {/* Footer Insight */}
                <div className="mt-10 flex flex-wrap items-center justify-between gap-6 border-t border-slate-200 pt-10">
                    <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-white border border-slate-200 rounded-xl flex items-center justify-center shadow-sm">
                            <Users size={20} className="text-[#ffc107]" />
                        </div>
                        <div>
                            <span className="text-[10px] font-black text-[#64779F] uppercase tracking-wider block">Total Directory</span>
                            <span className="text-sm font-black text-[#18357a] uppercase">
                                {filteredSupervisors.length < 10 ? `0${filteredSupervisors.length}` : filteredSupervisors.length} Active Supervisors
                            </span>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default PhdSupervisorsPage
