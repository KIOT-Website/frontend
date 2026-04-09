import React from 'react'
import { motion } from 'framer-motion'
import { useParams, Link } from 'react-router-dom'
import { 
    ChevronRight, 
    Home as HomeIcon,
    Users,
    Microchip,
    Calendar,
    ArrowLeft,
    GraduationCap,
    Clock,
    Search
} from 'lucide-react'

const FacultyPursuingPhdPage = () => {
    const { deptName } = useParams()

    const formatDeptName = (name) => {
        if (!name) return "Departmentwise"
        return name.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')
    }

    const pursuingFaculty = [
        {
            id: 1,
            name: "Mr.J.Prakash",
            topic: "Design and Development of Intelligent gripper through grasping stability analysis",
            supervisor: "Dr.M.Ilangkumaran",
            registration: "Jan & 2011",
            university: "Anna University"
        },
        {
            id: 2,
            name: "Mr.K.Mugundan",
            topic: "Investigation and Process Optimization of Aluminium Alloy 2024 / TiB2 in Stir Casting Composite",
            supervisor: "Dr.P.Sureshkumar",
            registration: "Jul & 2017",
            university: "Anna University"
        },
        {
            id: 3,
            name: "Mr.A.Selvakumar",
            topic: "Investigation of Natural Convection and Thermal Diffusion in an Indoor Environment",
            supervisor: "Dr.K.Visagavel",
            registration: "Jul & 2017",
            university: "Anna University"
        },
        {
            id: 4,
            name: "Mr.A.Gajendran",
            topic: "Investigation on the effects of Biofduel-Diesel Emulsions in A DI Diesel Engine",
            supervisor: "Dr.S.M.Sivagami",
            registration: "Jan & 2019",
            university: "Anna University"
        },
        {
            id: 5,
            name: "Mr.M.Vinoth",
            topic: "Battery Management System",
            supervisor: "Dr.K.Visagavel",
            registration: "Jul & 2023",
            university: "Anna University"
        },
        {
            id: 6,
            name: "Mr.P.Karthikeyan",
            topic: "Material Science",
            supervisor: "Dr.K.Visagavel",
            registration: "Jul & 2023",
            university: "Anna University"
        },
        {
            id: 7,
            name: "Mr.S.Naveenkumar",
            topic: "Indoor Air Quality",
            supervisor: "Dr.K.Visagavel",
            registration: "Jul & 2023",
            university: "Anna University"
        },
        {
            id: 8,
            name: "Ms.A.Elavarasi",
            topic: "Composite Materials",
            supervisor: "Dr.M.Ilangkumaran",
            registration: "Jan & 2024",
            university: "Anna University"
        },
        {
            id: 9,
            name: "Mr.S.Dheepak",
            topic: "Bio Materials",
            supervisor: "Dr.N.Panneerselvam",
            registration: "Jul & 2024",
            university: "Anna University"
        },
        {
            id: 10,
            name: "Mr.A.Kamalakkannan",
            topic: "Composite Materials",
            supervisor: "Dr.M.Ilangkumaran",
            registration: "Jul & 2024",
            university: "Anna University"
        },
        {
            id: 11,
            name: "Mr.S.Rajeshkanna",
            topic: "Composite Materials",
            supervisor: "Dr.M.Ilangkumaran",
            registration: "Jul & 2024",
            university: "Anna University"
        },
        {
            id: 12,
            name: "Mr.K.N.Karthick",
            topic: "Composite Materials",
            supervisor: "Dr.M.Bharathiraja",
            registration: "Jan & 2021",
            university: "Anna University"
        }
    ]

    const isMechanical = deptName?.toLowerCase() === 'mechanical-engineering'
    const displayFaculty = isMechanical ? pursuingFaculty : []

    return (
        <div className="min-h-screen bg-[#f6f9fc] font-sans pb-20">
            {/* Breadcrumbs */}
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
                        Scholars in Progress
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
                        Faculty <span className="text-[#ffc107]">Pursuing Ph.D</span>
                    </h1>

                    <div className="max-w-3xl border-l-4 border-[#ffc107] pl-8 py-1">
                        <p className="text-[#1e293b] text-base font-semibold leading-relaxed">
                            Directory of faculty scholars from {formatDeptName(deptName)} currently enrolled in doctoral research. Highlighting academic progression and specialized thesis domains under expert supervision.
                        </p>
                    </div>
                </motion.div>

                {/* Progress Table */}
                <motion.div 
                    initial={{ opacity: 0, scale: 0.98 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="bg-white rounded-[2rem] shadow-2xl shadow-blue-900/5 border border-slate-200/60 overflow-hidden"
                >
                    <div className="overflow-x-auto">
                        <table className="w-full border-collapse text-left">
                            <thead>
                                <tr className="text-white">
                                    <th className="bg-black px-6 py-5 text-left text-[11px] font-bold uppercase tracking-[2px] w-16">S.No.</th>
                                    <th className="bg-black px-6 py-5 text-left text-[11px] font-bold uppercase tracking-[2px]">Supervision Detail</th>
                                    <th className="bg-black px-6 py-5 text-left text-[11px] font-bold uppercase tracking-[2px]">Research Scholar & Topic</th>
                                    <th className="bg-black px-6 py-5 text-left text-[11px] font-bold uppercase tracking-[2px]">Supervisor Affiliate</th>
                                    <th className="bg-black px-6 py-5 text-right text-[11px] font-bold text-[#ffc107] uppercase tracking-[2px] pr-8">Year / Batch</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-slate-100">
                                {displayFaculty.length > 0 ? (
                                    displayFaculty.map((faculty, idx) => (
                                        <tr 
                                            key={faculty.id}
                                            className="group hover:bg-[#fafcff] transition-all duration-300"
                                        >
                                            <td className="px-6 py-5">
                                                <div className="w-8 h-8 bg-blue-50/50 rounded flex items-center justify-center text-black font-black text-xs group-hover:bg-black group-hover:text-white transition-all duration-300">
                                                    {idx + 1 < 10 ? `0${idx + 1}` : idx + 1}
                                                </div>
                                            </td>
                                            <td className="px-6 py-5">
                                                <div className="flex items-center gap-3">
                                                    <div className="text-[#0f172a] group-hover:text-[#ffc107] transition-colors"><Users size={18} /></div>
                                                    <div>
                                                        <div className="text-[13px] font-bold text-[#0f172a] uppercase tracking-tight">{faculty.name}</div>
                                                        <div className="text-[10px] font-bold text-[#334155] uppercase">{faculty.university}</div>
                                                    </div>
                                                </div>
                                            </td>
                                            <td className="px-6 py-5">
                                                <div className="max-w-[280px]">
                                                    <p className="text-[12px] font-semibold text-[#1e293b] leading-relaxed line-clamp-2 italic">
                                                        "{faculty.topic}"
                                                    </p>
                                                </div>
                                            </td>
                                            <td className="px-6 py-5">
                                                <div className="flex items-center gap-2">
                                                    <div className="w-7 h-7 bg-amber-50 rounded-lg flex items-center justify-center text-[#ffc107]">
                                                        <GraduationCap size={14} />
                                                    </div>
                                                    <span className="text-[12px] font-bold text-[#0f172a] uppercase tracking-tight">{faculty.supervisor}</span>
                                                </div>
                                            </td>
                                            <td className="px-6 py-5">
                                                <div className="flex flex-col gap-0.5">
                                                    <div className="flex items-center gap-1.5 text-[#0f172a] text-[11px] font-bold uppercase">
                                                        <Calendar size={12} className="text-[#ffc107]" /> {faculty.registration.split(' & ')[1]}
                                                    </div>
                                                    <div className="flex items-center gap-1.5 text-[#334155] text-[10px] font-bold uppercase">
                                                        <Clock size={12} /> {faculty.registration.split(' & ')[0]} Batch
                                                    </div>
                                                </div>
                                            </td>
                                        </tr>
                                    ))
                                ) : (
                                    <tr>
                                        <td colSpan="5" className="px-6 py-20 text-center text-slate-400 font-bold uppercase text-xs">
                                            No scholars found for this department.
                                        </td>
                                    </tr>
                                )}
                            </tbody>
                        </table>
                    </div>
                </motion.div>

                {/* Batch Distribution Info */}
                <div className="mt-10 flex flex-wrap items-center gap-6">
                    <div className="px-6 py-3 bg-white border border-slate-200 rounded-full flex items-center gap-3 shadow-sm">
                        <Microchip size={16} className="text-[#ffc107]" />
                        <span className="text-[11px] font-black text-[#18357a] uppercase tracking-wider">{displayFaculty.length} Research Scholars</span>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default FacultyPursuingPhdPage
