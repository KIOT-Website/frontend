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
        return name.split('-').map(word => {
            if (word === "&") return "&"
            return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
        }).join(' ')
    }

    const allSupervisors = {
        'mechanical-engineering': [
            { id: 1, name: "Dr.PSS.Srinivasan", university: "Anna University", department: "MECH", researchArea: "Heat transfer, CFD", supervisorId: "9920479", email: "chairman@kiot.ac.in", guided: "16", guiding: "1" },
            { id: 2, name: "Dr.K.Visagavel", university: "Anna University", department: "MECH", researchArea: "Thermal Engineering, Solar Energy", supervisorId: "2420553", email: "principal@kiot.ac.in", guided: "5", guiding: "7" },
            { id: 3, name: "Dr.P.Navaneethakrishnan", university: "Anna University", department: "MECH", researchArea: "Design, CAD/CAM, FEA", supervisorId: "2220288", email: "pnkmech@kiot.ac.in", guided: "9", guiding: "5" },
            { id: 4, name: "Dr.M. Ilangkumaran", university: "Anna University", department: "MECH", researchArea: "Maintenance Engineering, MCDM", supervisorId: "2120119", email: "mikmech@kiot.ac.in", guided: "6", guiding: "4" }
        ],
        'electronics-&-communication-engineering': [
            { id: 1, name: "Dr.N.Santhiyakumari", university: "Anna University", department: "ECE", researchArea: "Biomedical Image Processing", supervisorId: "2340297", email: "dirrd@kiot.ac.in", guided: "6", guiding: "6" },
            { id: 2, name: "Dr.S. Kumarganesh", university: "Anna University", department: "ECE", researchArea: "Signal Processing and Communication", supervisorId: "3340060", email: "skgece@kiot.ac.in", guided: "-", guiding: "6" }
        ],
        'electrical-&-electronics-engineering': [
            { id: 1, name: "Dr.C.Muniraj", university: "Anna University", department: "EEE", researchArea: "AC Drives and High Voltage Engineering", supervisorId: "2230136", email: "hod.eee@kiot.ac.in", guided: "4", guiding: "7" },
            { id: 2, name: "Dr.V.Kamatchi Kannan", university: "Anna University", department: "EEE", researchArea: "Power Converters, Power Quality", supervisorId: "2330080", email: "vkkeee@kiot.ac.in", guided: "3", guiding: "6" },
            { id: 3, name: "Dr.P.A.Gowri Sankar", university: "Anna University", department: "EEE", researchArea: "Control, Nano Materials and Sensors", supervisorId: "2830026", email: "pagseee@kiot.ac.in", guided: "-", guiding: "6" }
        ],
        'computer-science-&-engineering': [
            { id: 1, name: "Dr.P.Rajendran", university: "Anna University", department: "CSE", researchArea: "Image Mining, Data Mining", supervisorId: "2340253", email: "peerajendran@gmail.com", guided: "8", guiding: "8" },
            { id: 2, name: "Dr.R.Kumar", university: "Anna University", department: "CSE", researchArea: "E-Learning, Knowledge Engineering", supervisorId: "2840019", email: "rkumarnkl@gmail.com", guided: "-", guiding: "3" },
            { id: 3, name: "Dr.P.Vijayalakshmi", university: "Anna University", department: "CSE", researchArea: "Wireless Sensor Networks", supervisorId: "4140063", email: "vijii_s@yahoo.co.in", guided: "-", guiding: "4" }
        ]
    }

    const currentSupervisors = allSupervisors[deptName?.toLowerCase()] || []

    return (
        <div className="min-h-screen bg-[#f6f9fc] font-sans pb-20">


            <div className="max-w-7xl mx-auto px-6 py-12 lg:py-16">
                
                {/* Header Section */}
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mb-12"
                >

                    <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8">
                        <div>
                            <h1 className="text-3xl lg:text-5xl font-bold text-[#224292] leading-tight mb-6">
                                List of Ph.D <span className="text-[#ffc107]">Supervisors</span>
                            </h1>
                            <div className="max-w-2xl border-l-4 border-[#ffc107] pl-8 py-1">
                                <p className="text-[#1e293b] text-base font-semibold leading-relaxed">
                                    Official registry of recognized doctoral supervisors for the {formatDeptName(deptName)}. Empowering the next generation of researchers.
                                </p>
                            </div>
                        </div>

                        {/* Search Bar - Aesthetic */}
                        <div className="relative group min-w-[320px]">
                            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-[#ffc107] transition-colors" size={18} />
                            <input 
                                type="text"
                                placeholder="Search by name or area..."
                                className="w-full bg-white border border-slate-200 rounded-2xl py-4 pl-12 pr-6 text-sm font-semibold text-[#0f172a] focus:ring-2 focus:ring-[#ffc107]/20 focus:border-[#ffc107] outline-none transition-all shadow-xl shadow-blue-900/5 placeholder:text-slate-300"
                            />
                        </div>
                    </div>
                </motion.div>

                {/* Main Content: Supervisor Cards */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {currentSupervisors.map((supervisor, idx) => (
                        <motion.div
                            initial={{ opacity: 0, x: idx % 2 === 0 ? -20 : 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: idx * 0.1 }}
                            key={supervisor.id}
                            className="bg-white rounded-[2.5rem] p-8 border border-slate-200 shadow-2xl shadow-blue-900/5 hover:border-[#ffc107] transition-all group overflow-hidden relative"
                        >
                            {/* Decorative ID Background */}
                            <div className="absolute -right-4 -top-8 text-[120px] font-black text-slate-50 opacity-50 group-hover:text-amber-50 group-hover:scale-110 transition-all duration-500 select-none">
                                {supervisor.id < 10 ? `0${supervisor.id}` : supervisor.id}
                            </div>

                            <div className="relative z-10">
                                <div className="flex items-start justify-between mb-8">
                                    <div className="flex items-center gap-4">
                                        <div className="w-16 h-16 rounded-[1.5rem] bg-[#224292] flex items-center justify-center text-white shadow-xl shadow-blue-900/20 group-hover:rotate-6 transition-transform">
                                            <GraduationCap size={32} />
                                        </div>
                                        <div>
                                            <h3 className="text-xl font-black text-[#0f172a] tracking-tight group-hover:text-[#224292] transition-colors">
                                                {supervisor.name}
                                            </h3>
                                            <div className="flex items-center gap-2 mt-1 px-3 py-1 bg-slate-50 rounded-full border border-slate-100 group-hover:bg-[#ffc107]/10 transition-colors w-fit">
                                                <Fingerprint size={12} className="text-[#ffc107]" />
                                                <span className="text-[10px] font-bold text-[#64779F] uppercase tracking-widest leading-none">ID: {supervisor.supervisorId}</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                                    <div className="p-5 bg-slate-50 rounded-[1.5rem] border border-slate-100 group-hover:bg-white transition-colors duration-300">
                                        <div className="flex items-center gap-2 mb-3">
                                            <BookOpen size={16} className="text-[#ffc107]" />
                                            <span className="text-[10px] font-black text-[#0f172a] uppercase tracking-widest">Research Areas</span>
                                        </div>
                                        <p className="text-xs font-bold text-[#224292] leading-relaxed uppercase">
                                            {supervisor.researchArea}
                                        </p>
                                    </div>

                                    <div className="p-5 bg-slate-50 rounded-[1.5rem] border border-slate-100 group-hover:bg-white transition-colors duration-300">
                                        <div className="flex items-center gap-2 mb-3">
                                            <Mail size={16} className="text-[#ffc107]" />
                                            <span className="text-[10px] font-black text-[#0f172a] uppercase tracking-widest leading-none">Scientific Liaison</span>
                                        </div>
                                        <p className="text-sm font-black text-[#224292] tracking-tight">{supervisor.email}</p>
                                    </div>
                                </div>

                                {/* Metrics Section */}
                                <div className="grid grid-cols-3 gap-4 pt-6 border-t border-slate-100">
                                    <div className="text-center">
                                        <div className="text-2xl font-black text-[#224292] italic">{supervisor.guided}</div>
                                        <p className="text-[9px] font-black text-slate-400 uppercase tracking-widest">Ph.Ds Guided</p>
                                    </div>
                                    <div className="text-center border-x border-slate-100 flex flex-col justify-center">
                                        <div className="text-2xl font-black text-[#ffc107] italic">{supervisor.guiding}</div>
                                        <p className="text-[9px] font-black text-slate-400 uppercase tracking-widest">Active Scholars</p>
                                    </div>
                                    <div className="text-center flex flex-col justify-center">
                                        <div className="text-[12px] font-black text-[#0f172a] italic">{supervisor.university}</div>
                                        <p className="text-[9px] font-black text-slate-400 tracking-widest">Affiliation</p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Empty State */}
                {currentSupervisors.length === 0 && (
                    <div className="text-center py-20 bg-white rounded-[3rem] border border-dashed border-slate-300">
                        <Users size={40} className="mx-auto text-slate-200 mb-4" />
                        <h3 className="text-xl font-bold text-slate-400 uppercase italic">Supervisor Data Pending</h3>
                        <p className="text-slate-300 text-sm font-semibold">We are currently updating our doctoral registry for this department.</p>
                    </div>
                )}
            </div>
        </div>
    )
}

export default PhdSupervisorsPage
