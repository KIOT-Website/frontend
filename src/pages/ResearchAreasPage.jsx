import React from 'react'
import { motion } from 'framer-motion'
import { useParams, Link } from 'react-router-dom'
import {
    ChevronRight,
    Target,
    ArrowLeft,
    Lightbulb,
    FlaskConical
} from 'lucide-react'

const ResearchAreasPage = () => {
    const { deptName } = useParams()

    const formatDeptName = (name) => {
        if (!name) return 'Departmentwise'
        return name.split('-').map((word) => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')
    }

    const isCivilDepartment = deptName?.toLowerCase() === 'civil-engineering'

    const researchAreas = {
        'mechanical-engineering': [
            'Heat Transfer Enhancement',
            'Waste Heat Recovery',
            'Phase Change Material',
            'Energy Efficient Technologies',
            'Hybrid Solar Hot Water Systems',
            'Solar Passive Cooling of Buildings',
            'Multi Criteria Decision Making Application',
            'Indoor Air and Environmental Quality',
            'Environmental Health and Safety',
            'Composite Material',
            'Optimization Technique',
            'Maintenance Engineering',
            'Supply Chain Management'
        ],
        'electronics-&-communication-engineering': [
            'Signal & Image Processing',
            'VLSI & Circuit design',
            'Biomedical Imaging and Sensing',
            'Wireless Sensor Networks',
            'Artificial Intelligence'
        ],
        'electrical-&-electronics-engineering': [
            'Power System Engineering',
            'Power Electronics and Drives',
            'Control and Instrumentation',
            'Renewable Energy',
            'Embedded systems',
            'High Voltage Engineering'
        ],
        'computer-science-&-engineering': [
            'Wireless Sensor Networks',
            'Data Mining',
            'Image Processing',
            'Image Mining',
            'Big Data Analytics',
            'Cloud Computing',
            'Information and Communication Theory'
        ]
    }

    const civilResearchAreaRows = [
        {
            leftNo: '1',
            leftArea: 'Concrete Technology',
            rightNo: '4',
            rightArea: 'Remote Sensing and GIS'
        },
        {
            leftNo: '2',
            leftArea: 'Construction Materials',
            rightNo: '5',
            rightArea: 'Structural Engineering'
        },
        {
            leftNo: '3',
            leftArea: 'Green Building',
            rightNo: '',
            rightArea: ''
        }
    ]

    const displayAreas = researchAreas[deptName?.toLowerCase()] || []

    if (isCivilDepartment) {
        return (
            <div className="min-h-screen bg-[#f6f9fc] font-sans pb-20">
                <div className="bg-white border-b border-slate-200 py-4">
                    <div className="max-w-6xl mx-auto px-6 flex flex-wrap items-center gap-4">
                        <Link to="/" className="text-slate-400 hover:text-[#18357a] text-xs font-black uppercase tracking-wider transition-colors pt-0.5">
                            Home
                        </Link>
                        <ChevronRight size={14} className="text-slate-300" />
                        <Link to="/research" className="text-slate-400 hover:text-[#18357a] text-xs font-black uppercase tracking-wider transition-colors pt-0.5">
                            Departmentwise Research Initiatives
                        </Link>
                        <ChevronRight size={14} className="text-slate-300" />
                        <Link to={`/research/${deptName}`} className="text-slate-400 hover:text-[#18357a] text-xs font-black uppercase tracking-wider transition-colors pt-0.5">
                            Research in {formatDeptName(deptName)}
                        </Link>
                        <ChevronRight size={14} className="text-slate-300" />
                        <span className="text-[#18357a] text-xs font-black uppercase tracking-wider pt-0.5">
                            Major Research Areas of Civil Department
                        </span>
                    </div>
                </div>

                <div className="max-w-6xl mx-auto px-6 py-12 lg:py-16">
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
                            Major Research Areas of <span className="text-[#ffc107]">Civil Department</span>
                        </h1>

                        <div className="max-w-3xl border-l-4 border-[#ffc107] pl-8 py-1">
                            <p className="text-[#1e293b] text-base font-semibold leading-relaxed">
                                Civil Engineering research domains presented in the same visual style as the other department research pages.
                            </p>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.98 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="bg-white rounded-[2rem] shadow-2xl shadow-blue-900/5 border border-slate-200/60 overflow-hidden"
                    >
                        <div className="px-6 sm:px-8 py-6 bg-[#18357a]">
                            <h2 className="text-white text-lg sm:text-xl font-black uppercase tracking-[0.15em]">
                                Major Research Areas
                            </h2>
                        </div>

                        <div className="overflow-x-auto">
                            <table className="w-full border-collapse">
                                <thead>
                                    <tr>
                                        <th className="bg-black px-4 sm:px-6 py-4 text-center text-[11px] font-black text-white uppercase tracking-[2px] w-20">S. No.</th>
                                        <th className="bg-black px-4 sm:px-6 py-4 text-left text-[11px] font-black text-white uppercase tracking-[2px]">Research Areas</th>
                                        <th className="bg-black px-4 sm:px-6 py-4 text-center text-[11px] font-black text-white uppercase tracking-[2px] w-20">S. No.</th>
                                        <th className="bg-black px-4 sm:px-6 py-4 text-left text-[11px] font-black text-white uppercase tracking-[2px]">Research Areas</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-slate-100">
                                    {civilResearchAreaRows.map((row, idx) => (
                                        <tr key={idx} className="hover:bg-[#fafcff] transition-colors">
                                            <td className="px-4 sm:px-6 py-5 text-center">
                                                <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-blue-50/50 text-black font-black text-xs">
                                                    {row.leftNo}
                                                </span>
                                            </td>
                                            <td className="px-4 sm:px-6 py-5 text-[13px] font-bold text-[#0f172a] uppercase tracking-tight">
                                                {row.leftArea}
                                            </td>
                                            <td className="px-4 sm:px-6 py-5 text-center">
                                                {row.rightNo ? (
                                                    <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-blue-50/50 text-black font-black text-xs">
                                                        {row.rightNo}
                                                    </span>
                                                ) : null}
                                            </td>
                                            <td className="px-4 sm:px-6 py-5 text-[13px] font-bold text-[#0f172a] uppercase tracking-tight">
                                                {row.rightArea}
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </motion.div>
                </div>
            </div>
        )
    }

    return (
        <div className="min-h-screen bg-[#f6f9fc] font-sans pb-20">
            <div className="bg-white border-b border-slate-200 py-4">
                <div className="max-w-6xl mx-auto px-6 flex items-center gap-4">
                    <Link to="/research" className="text-slate-400 hover:text-[#18357a] text-xs font-black uppercase tracking-wider transition-colors pt-0.5">
                        Research Initiatives
                    </Link>
                    <ChevronRight size={14} className="text-slate-300" />
                    <Link to={`/research/${deptName}`} className="text-slate-400 hover:text-[#18357a] text-xs font-black uppercase tracking-wider transition-colors pt-0.5">
                        Research in {formatDeptName(deptName)}
                    </Link>
                    <ChevronRight size={14} className="text-slate-300" />
                    <span className="text-[#18357a] text-xs font-black uppercase tracking-wider pt-0.5">
                        Major Research Areas
                    </span>
                </div>
            </div>

            <div className="max-w-5xl mx-auto px-6 py-12 lg:py-16">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mb-12 text-center md:text-left"
                >
                    <Link
                        to={`/research/${deptName}`}
                        className="inline-flex items-center gap-2 text-[#18357a] font-black text-[10px] uppercase tracking-wider mb-6 hover:translate-x-[-4px] transition-transform"
                    >
                        <ArrowLeft size={14} /> Back to Repository
                    </Link>

                    <h1 className="text-3xl lg:text-5xl font-bold text-[#18357a] uppercase leading-tight mb-6">
                        Major <span className="text-[#ffc107]">Research Areas</span>
                    </h1>

                    <div className="max-w-3xl border-l-4 border-[#ffc107] pl-8 py-1">
                        <p className="text-[#1e293b] text-base font-semibold leading-relaxed">
                            Pioneering research domains at {formatDeptName(deptName)}. Focused on energy transition, sustainable materials, and industrial optimization to address global challenges.
                        </p>
                    </div>
                </motion.div>

                {displayAreas.length > 0 ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {displayAreas.map((area, idx) => (
                            <motion.div
                                initial={{ opacity: 0, x: idx % 2 === 0 ? -20 : 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: idx * 0.05 }}
                                key={idx}
                                className="group bg-white p-5 rounded-2xl border border-slate-200/60 shadow-sm hover:shadow-xl hover:shadow-blue-900/5 hover:-translate-y-1 transition-all duration-300 flex items-center gap-5"
                            >
                                <div className="w-12 h-12 bg-slate-50 rounded-xl flex items-center justify-center text-[#18357a] group-hover:bg-[#18357a] group-hover:text-white transition-all shadow-inner">
                                    {idx % 3 === 0 ? <Lightbulb size={22} /> : idx % 3 === 1 ? <Target size={22} /> : <FlaskConical size={22} />}
                                </div>
                                <div>
                                    <span className="text-[10px] font-bold text-[#ffc107] uppercase tracking-wider block mb-1">Focus Zone 0{idx + 1}</span>
                                    <h3 className="text-sm font-bold text-[#18357a] uppercase leading-tight tracking-tight">{area}</h3>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                ) : (
                    <div className="bg-white rounded-[2rem] p-20 text-center border border-slate-200/60 shadow-2xl shadow-blue-900/5">
                        <div className="flex flex-col items-center gap-4">
                            <Target size={48} className="text-[#18357a]/10" />
                            <h3 className="text-[#18357a] font-black uppercase tracking-wider">No Research Areas Listed</h3>
                            <p className="text-[#64779F] text-xs font-bold">Data update for {formatDeptName(deptName)} is in progress.</p>
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}

export default ResearchAreasPage
