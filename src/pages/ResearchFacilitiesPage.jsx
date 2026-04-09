import React from 'react'
import { motion } from 'framer-motion'
import { useParams, Link } from 'react-router-dom'
import { 
    ChevronRight, 
    FlaskConical,
    ShieldCheck,
    Cpu,
    ArrowLeft,
    Microscope,
    Box,
    HardHat
} from 'lucide-react'

const ResearchFacilitiesPage = () => {
    const { deptName } = useParams()

    const formatDeptName = (name) => {
        if (!name) return "Departmentwise"
        return name.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')
    }

    const facilities = [
        {
            id: 1,
            lab: "Composite Research Centre for Product Design, Digital Manufacturing and Technical Documentation",
            equipment: "Catia v6, Delmia V5 and 3DVia",
            domain: "Design",
            icon: Cpu
        },
        {
            id: 2,
            lab: "Centre for Environmental Health and safety",
            equipment: "Vibration test facility, Whirling speed of shaft, Exhaust gas analyzer, Smoke meter, Friction tester, Impact tester, High volume sampler",
            domain: "Industrial Safety Engg.",
            icon: ShieldCheck
        }
    ]

    const isMechanical = deptName?.toLowerCase() === 'mechanical-engineering'
    const displayFacilities = isMechanical ? facilities : []

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
                        {deptName?.toUpperCase()}
                    </Link>
                    <ChevronRight size={14} className="text-slate-300" />
                    <span className="text-[#0f172a] text-xs font-bold uppercase tracking-wider pt-0.5">
                        Research Facilities
                    </span>
                </div>
            </div>

            <div className="max-w-6xl mx-auto px-6 py-12 lg:py-16">
                
                {/* Header Section */}
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mb-12 text-center md:text-left"
                >
                    <Link 
                        to={`/research/${deptName}`}
                        className="inline-flex items-center gap-2 text-[#0f172a] font-bold text-[10px] uppercase tracking-wider mb-6 hover:translate-x-[-4px] transition-transform"
                    >
                        <ArrowLeft size={14} /> Back to Repository
                    </Link>

                    <h1 className="text-3xl lg:text-5xl font-bold text-[#18357a] uppercase leading-tight mb-6">
                        Advanced <span className="text-[#ffc107]">Research Facilities</span>
                    </h1>

                    <div className="max-w-3xl border-l-4 border-[#ffc107] pl-8 py-1">
                        <p className="text-[#1e293b] text-base font-semibold leading-relaxed">
                            KIOT's {formatDeptName(deptName)} is equipped with specialized R&D centers and cutting-edge laboratory facilities to support high-impact technical investigations and product development.
                        </p>
                    </div>
                </motion.div>

                {/* Facilities List */}
                <div className="space-y-6">
                    {displayFacilities.length > 0 ? (
                        displayFacilities.map((facility, idx) => (
                            <motion.div
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: idx * 0.1 }}
                                key={facility.id}
                                className="group bg-white rounded-[2rem] border border-slate-200/60 shadow-xl shadow-blue-900/5 hover:border-[#ffc107] transition-all duration-300 overflow-hidden"
                            >
                                <div className="flex flex-col md:flex-row divide-y md:divide-y-0 md:divide-x divide-slate-100">
                                    <div className="p-8 md:w-3/5">
                                        <div className="flex items-start gap-5 mb-6">
                                            <div className="w-14 h-14 bg-slate-50 rounded-2xl flex items-center justify-center text-[#ffc107] shadow-inner group-hover:bg-[#0f172a] transition-all">
                                                <facility.icon size={28} />
                                            </div>
                                            <div>
                                                <span className="text-[10px] font-bold text-[#ffc107] uppercase tracking-[2px] block mb-2">Centre of Excellence 0{idx + 1}</span>
                                                <h3 className="text-xl font-bold text-[#0f172a] uppercase leading-tight">{facility.lab}</h3>
                                            </div>
                                        </div>
                                        <div className="bg-slate-50/50 rounded-xl p-5 border border-slate-100">
                                            <span className="text-[10px] font-bold text-[#1e293b] uppercase tracking-wider block mb-3 opacity-60">High-End Equipment & Software</span>
                                            <p className="text-[14px] font-semibold text-[#334155] leading-relaxed">
                                                {facility.equipment}
                                            </p>
                                        </div>
                                    </div>
                                    <div className="p-8 md:w-2/5 flex flex-col justify-center bg-[#fafcff]">
                                        <span className="text-[10px] font-bold text-[#64779F] uppercase tracking-widest block mb-4">Core Research Domain</span>
                                        <div className="flex items-center gap-4">
                                            <div className="w-10 h-10 rounded-xl bg-white border border-slate-200 flex items-center justify-center text-[#0f172a] shadow-sm">
                                                <Microscope size={20} />
                                            </div>
                                            <span className="text-lg font-bold text-[#18357a] uppercase tracking-tight italic">"{facility.domain}"</span>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        ))
                    ) : (
                        <div className="bg-white rounded-[2rem] p-20 text-center border border-slate-200 shadow-sm">
                            <Box size={40} className="mx-auto text-slate-200 mb-4" />
                            <p className="text-[#0f172a] font-bold uppercase text-xs">Facility Data Coming Soon</p>
                        </div>
                    )}
                </div>

            </div>
        </div>
    )
}

export default ResearchFacilitiesPage
