import React from 'react'
import { motion } from 'framer-motion'
import { useParams, useNavigate } from 'react-router-dom'
import { 
    ChevronRight, 
    Home as HomeIcon,
    FlaskConical, 
    GraduationCap, 
    Users, 
    Microchip, 
    HandCoins, 
    BookOpen,
    Info,
    ArrowRight,
    Search,
    UserCircle,
    Target,
    Award,
    UserCheck,
    Microscope,
    Handshake,
    Stethoscope,
    FileText,
    Presentation,
    FileEdit,
    CheckCircle2
} from 'lucide-react'

const ResearchResourcesPage = () => {
    const { deptName } = useParams()
    const navigate = useNavigate()

    const formatDeptName = (name) => {
        if (!name) return "Departmentwise"
        return name.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')
    }

    const getResourceItems = () => {
        const lowerDept = deptName?.toLowerCase()
        
        if (lowerDept === 'mechanical-engineering') {
            return [
                { id: 1, title: "List of Ph.D Supervisors", icon: Users },
                { id: 2, title: "Major Research Areas", icon: Target },
                { id: 3, title: "List of Ph.Ds in the Department", icon: Award },
                { id: 4, title: "List of Faculty pursuing Ph.D", icon: GraduationCap },
                { id: 5, title: "List of Ph.D Scholars Guided", icon: UserCheck },
                { id: 6, title: "Research Facilities", icon: Microscope },
                { id: 7, title: "Sponsored Research Projects", icon: Handshake }
            ]
        }

        if (lowerDept === 'electronics-&-communication-engineering') {
            return [
                { id: 1, title: 'List of Ph.D Supervisors', icon: Users },
                { id: 2, title: 'Major Research Areas', icon: Target },
                { id: 3, title: 'List of Ph.Ds in the Department', icon: Award },
                { id: 4, title: 'List of Faculty pursuing Ph.D', icon: GraduationCap },
                { id: 5, title: 'List of Ph.D Scholars Guided', icon: UserCheck },
                { id: 6, title: 'Research Facilities', icon: Microscope },
                { id: 7, title: 'Centre for Medical Imaging', icon: Stethoscope },
                { id: 8, title: 'Publication in Indexed Journal', icon: FileText },
                { id: 9, title: 'Publication in Non Indexed Journal', icon: FileText },
                { id: 10, title: 'Publication in Conference', icon: Presentation },
                { id: 11, title: 'Research Proposal', icon: FileEdit },
                { id: 12, title: 'Consultancy', icon: Handshake },
                { id: 13, title: 'Projects Sanctioned', icon: CheckCircle2 }
            ]
        }
        if (lowerDept === 'electrical-&-electronics-engineering') {
            return [
                { id: 1, title: 'List of Ph.D Supervisors', icon: Users },
                { id: 2, title: 'Major Research Areas', icon: Target },
                { id: 3, title: 'List of Ph.Ds in the Department', icon: Award },
                { id: 4, title: 'List of Faculty pursuing Ph.D', icon: GraduationCap },
                { id: 5, title: 'List of Ph.D Scholars Guided by the Department Supervisors', icon: UserCheck },
                { id: 6, title: 'Facilities for doing Research', icon: Microscope },
                { id: 7, title: 'List of Publications', icon: FileText }
            ]
        }
        if (lowerDept === 'computer-science-&-engineering') {
            return [
                { id: 1, title: 'List of Ph.D Supervisors', icon: Users },
                { id: 2, title: 'Major Research Areas', icon: Target },
                { id: 3, title: 'List of Ph.Ds in the Department', icon: Award },
                { id: 4, title: 'List of Faculty pursuing Ph.D', icon: GraduationCap },
                { id: 5, title: 'List of Ph.D Scholars Guided by the Department Supervisors', icon: UserCheck },
                { id: 6, title: 'Facilities for doing Research', icon: Microscope }
            ]
        }

        // Default
        return [
            { id: 1, title: "List of Ph.D Supervisors", icon: Users },
            { id: 2, title: "Major Research Areas of the Department", icon: Target },
            { id: 3, title: "List of Ph.Ds in the Department", icon: Award },
            { id: 4, title: "List of Faculty pursuing Ph.D", icon: GraduationCap },
            { id: 5, title: "List of Ph.D Scholars Guided", icon: UserCheck },
            { id: 6, title: "Facilities for doing Research", icon: Microscope },
            { id: 7, title: "List of Sponsored Projects", icon: Handshake },
            { id: 8, title: "List of Publications – International Journals", icon: BookOpen }
        ]
    }

    const resourceItems = getResourceItems()

    return (
        <div className="min-h-screen bg-[#f6f9fc] font-sans">
            <div className="max-w-6xl mx-auto px-6 py-16 lg:py-24">
                
                {/* Header Section */}
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mb-12"
                >
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#eef2ff] rounded-full text-[#1e4a76] text-[11px] font-black uppercase tracking-wider mb-6">
                        <Search size={14} />
                        <span>Research & Doctoral Initiatives</span>
                    </div>

                    <h1 className="text-3xl lg:text-5xl font-bold text-[#18357a] uppercase leading-tight mb-8">
                        {formatDeptName(deptName)} <span className="text-[#ffc107]">Research Repository</span>
                    </h1>

                    <div className="max-w-3xl border-l-4 border-[#ffc107] pl-8 py-1">
                        <p className="text-[#4a627a] text-lg lg:text-xl font-bold leading-relaxed">
                            Comprehensive academic documentation — Ph.D supervision, research areas, publications, facilities, and sponsored projects at a glance.
                        </p>
                    </div>
                </motion.div>

                {/* Elegant Table Container */}
                <motion.div 
                    initial={{ opacity: 0, scale: 0.98 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="bg-white rounded-xl shadow-2xl shadow-blue-900/5 border border-slate-200/60 overflow-hidden"
                >
                    <div className="">
                        <table className="w-full border-collapse">
                            <thead>
                                <tr>
                                    <th className="bg-black px-4 sm:px-8 py-5 text-left text-[11px] font-black text-white uppercase tracking-[2px] w-12 sm:w-24 hidden sm:table-cell">S.No.</th>
                                    <th className="bg-black px-4 sm:px-8 py-5 text-left text-[11px] font-black text-white uppercase tracking-[2px]">Details</th>
                                    <th className="bg-black px-4 sm:px-8 py-5 text-left text-[11px] font-black text-[#ffc107] uppercase tracking-[2px] text-right">Access</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-[#eef3fa]">
                                {resourceItems.map((item, idx) => (
                                    <tr 
                                        key={item.id}
                                        className="group hover:bg-[#fafcff] transition-all duration-300"
                                    >
                                        <td className="px-4 sm:px-8 py-5 hidden sm:table-cell">
                                            <div className="w-8 h-8 bg-blue-50/50 rounded flex items-center justify-center text-black font-black text-xs group-hover:bg-black group-hover:text-white transition-all duration-300">
                                                {idx + 1 < 10 ? `0${idx + 1}` : idx + 1}
                                            </div>
                                        </td>
                                        <td className="px-4 sm:px-8 py-3">
                                            <div className="flex items-center gap-3 sm:gap-4">
                                                <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-slate-50 flex items-center justify-center text-slate-400 group-hover:text-[#0f172a] transition-colors shrink-0">
                                                    <item.icon size={14} className="sm:w-[16px] sm:h-[16px]" />
                                                </div>
                                                <span className="text-[11px] sm:text-[14px] font-bold text-[#0f172a] uppercase tracking-tight group-hover:translate-x-1 transition-transform leading-tight">{item.title}</span>
                                            </div>
                                        </td>
                                        <td className="px-4 sm:px-8 py-3 text-right">
                                            <button 
                                                onClick={() => {
                                                    const lowerDept = deptName?.toLowerCase()
                                                    const isECE = lowerDept === 'electronics-&-communication-engineering'
                                                    const isEEE = lowerDept === 'electrical-&-electronics-engineering'
                                                    const isMech = lowerDept?.includes('mechanical')

                                                    if (isMech) {
                                                        if (item.id === 1) navigate(`/research/${deptName}/phd-supervisors`)
                                                        if (item.id === 2) navigate(`/research/${deptName}/research-areas`)
                                                        if (item.id === 3) navigate(`/research/${deptName}/phd-holders`)
                                                        if (item.id === 4) navigate(`/research/${deptName}/pursuing-phd`)
                                                        if (item.id === 5) navigate(`/research/${deptName}/guided-scholars`)
                                                        if (item.id === 6) navigate(`/research/${deptName}/facilities`)
                                                        if (item.id === 7) navigate(`/research/${deptName}/sponsored-projects`)
                                                        if (item.id === 8) navigate(`/research/${deptName}/international-publications`)
                                                    } else {
                                                        // ECE or EEE or other departments
                                                        if (item.id === 1) navigate(`/research/${deptName}/phd-supervisors`)
                                                        if (item.id === 2) navigate(`/research/${deptName}/research-areas`)
                                                        if (item.id === 3) navigate(`/research/${deptName}/phd-holders`)
                                                        if (item.id === 4) navigate(`/research/${deptName}/pursuing-phd`)
                                                        if (item.id === 5) navigate(`/research/${deptName}/guided-scholars`)
                                                        if (item.id === 6) navigate(`/research/${deptName}/facilities`)
                                                        
                                                        // Item 7: Medical Imaging for ECE, Publications for EEE
                                                        if (item.id === 7) {
                                                            if (isECE) navigate(`/research/${deptName}/medical-imaging`)
                                                            else if (isEEE) navigate(`/research/${deptName}/international-publications`)
                                                            else navigate(`/research/${deptName}/sponsored-projects`)
                                                        }
                                                        
                                                        if (item.id === 8) navigate(`/research/${deptName}/international-publications`)
                                                        if (item.id === 9) navigate(`/research/${deptName}/publications-non-indexed`)
                                                        if (item.id === 10) navigate(`/research/${deptName}/conferences`)
                                                        if (item.id === 11) navigate(`/research/${deptName}/research-proposals`)
                                                        if (item.id === 12) navigate(`/research/${deptName}/consultancy`)
                                                        if (item.id === 13) navigate(`/research/${deptName}/sponsored-projects`)
                                                    }
                                                }}
                                                className="inline-flex items-center gap-2 px-3 sm:px-6 py-2 sm:py-2.5 bg-white border border-slate-200 rounded-lg text-[#0f172a] text-[10px] font-bold uppercase tracking-wider hover:bg-[#ffc107] hover:border-[#ffc107] transition-all shadow-sm active:scale-95 group/btn"
                                            >
                                                <span className="hidden sm:inline">Click Here</span> <ArrowRight size={14} className="group-hover/btn:translate-x-1 transition-transform" />
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </motion.div>

                {/* Footer Info Strip */}
                <div className="mt-12 flex flex-wrap items-center justify-between gap-6">
                    <div className="flex items-center gap-4 text-[#527a9b] bg-[#eef3fa] px-6 py-3 rounded-full text-[11px] font-black uppercase tracking-wider">
                        <Info size={14} />
                        <span>8 research directories | Updated 2026</span>
                    </div>
                    <div className="flex items-center gap-4 text-[#527a9b] bg-[#eef3fa] px-6 py-3 rounded-full text-[11px] font-black uppercase tracking-wider">
                        <span>Interdisciplinary excellence</span>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default ResearchResourcesPage
