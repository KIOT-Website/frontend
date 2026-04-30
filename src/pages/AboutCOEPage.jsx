import React from 'react'
import { motion } from 'framer-motion'
import { 
    FileText,
    Users,
    ShieldCheck,
    GraduationCap,
    CheckCircle2,
    Calendar,
    UserCheck,
    Building2,
    Settings,
    TrendingUp,
    Star,
    ClipboardCheck,
    ArrowLeft,
    FileCheck,
    ChevronRight
} from 'lucide-react'
import { useNavigate } from 'react-router-dom'

const AboutCOEPage = () => {
    const navigate = useNavigate()

    const officials = [
        { name: "Dr. K. Visagavel", qualification: "M.E., Ph.D.", designation: "Principal & Chief Controller of Examinations" },
        { name: "Dr. M. Ilangkumaran", qualification: "M.E., Ph.D.", designation: "Controller of Examinations" },
        { name: "Dr. N. Panneerselvam", qualification: "M.E., Ph.D.", designation: "Controller of Examinations" },
        { name: "Mr. T. Raja", qualification: "M.Sc., M.Phil., SET", designation: "Deputy Controller of Examinations" },
        { name: "Mr. U. Balamurugan", qualification: "M.Sc., M.Phil.", designation: "Assistant Controller of Examinations" },
        { name: "Mr. B. Ganeshkumar", qualification: "M.Sc., M.Phil., SET", designation: "Assistant Controller of Examinations" },
        { name: "Mr. P. Dhineshkumar", qualification: "M.Sc., M.Phil.", designation: "Assistant Controller of Examinations" },
        { name: "Mr. K. Dhamodharan", qualification: "MCA, M.E.", designation: "Assistant Controller of Examinations" }
    ]

    const staffDetails = [
        { name: "Mr. L. Venkatesan", qualification: "M.Sc., M.Phil.", designation: "Junior Assistant" },
        { name: "Mrs. P. Rathinam", qualification: "B.Com., D. Co.Op.", designation: "Programmer" },
        { name: "Mr. P. Varadharajuperumal", qualification: "M.Sc.", designation: "Programmer" },
        { name: "Mr. G. Prabu", qualification: "M.Sc., M.Phil., B.Ed.", designation: "Programmer" },
        { name: "Mrs. S. Banu", qualification: "B. Com (CA) ", designation: "Office Assistant" }
    ]

    const visionPoints = [
        { icon: Building2, text: "The Office of the Controller of Examinations (COE) was established in the academic year 2022-2023. It is a key administrative unit in educational institutions, especially those with autonomy, overseeing all examination-related activities." },
        { icon: UserCheck, text: "It is led by the Controller of Examinations, who reports directly to the head of the institution." },
        { icon: Calendar, text: "The office plans, schedules and conducts examinations as per the academic calendar, maintaining fairness, transparency and integrity." },
        { icon: FileCheck, text: "It handles evaluation, result declaration, and payments to examiners." },
        { icon: Settings, text: "Compile Grades and declare results after approval by Result Passing Board (RPB), Issuing certificates such as Statement of Grade, Consolidated Statements of Grade." },
        { icon: ShieldCheck, text: "Academic standards are upheld through secure processes and best practices." }
    ]

    const highlights = [
        { icon: ClipboardCheck, text: "Fairness & Transparency" },
        { icon: ShieldCheck, text: "Integrity & Accountability" },
        { icon: TrendingUp, text: "Quality Improvement" },
        { icon: Star, text: "Excellence in Examinations" }
    ]

    return (
        <div className="min-h-screen bg-[#FDFDFD] font-graphik pb-10 pt-10">
            
            {/* ─── VISION SECTION ─── */}
            <div className="max-w-[1400px] mx-auto px-6 relative z-20">
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="bg-white rounded-[2rem] border border-slate-100 shadow-2xl shadow-slate-200/50 overflow-hidden relative"
                >
                    <div className="flex flex-col lg:flex-row items-stretch">
                        <div className="lg:w-3/5 p-8 lg:p-12 space-y-12 relative z-10 bg-[radial-gradient(#d1d5db_1px,transparent_1px)] [background-size:24px_24px]">
                            <div className="space-y-12 relative">
                                <div className="absolute left-[20px] top-4 bottom-4 w-0 border-l-[1.5px] border-dashed border-[#224292]/10 z-0" />
                                {visionPoints.map((point, i) => (
                                    <div key={i} className="flex gap-6 group items-start relative z-10">
                                        <div className="w-10 h-10 bg-[#224292] rounded-full flex items-center justify-center text-white shrink-0 shadow-lg ring-[8px] ring-white transition-transform group-hover:scale-110">
                                            <point.icon size={16} />
                                        </div>
                                        <p className="text-[15px] text-slate-600 font-medium leading-relaxed pt-2">
                                            {point.text}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="lg:w-2/5 flex flex-col justify-between relative overflow-hidden bg-slate-50/30">
                            <div className="p-12 flex justify-center items-center flex-1">
                                <div className="relative scale-110">
                                    <div className="absolute inset-0 bg-[#224292]/5 rounded-full blur-3xl scale-150" />
                                    <img src="/coe-illustration.png" alt="COE Vision" className="w-full max-w-sm h-auto relative z-10 mix-blend-multiply" />
                                </div>
                            </div>
                            <div className="bg-[#224292] grid grid-cols-2 relative z-20">
                                {highlights.map((item, i) => (
                                    <div key={i} className="flex flex-col items-center text-center gap-3 p-8 border-r border-t border-white/5 last:border-r-0">
                                        <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center text-white group-hover:bg-[#ffc107] group-hover:text-[#224292] transition-all duration-300 shadow-inner">
                                            <item.icon size={18} />
                                        </div>
                                        <span className="text-[10px] font-black text-white/90 uppercase tracking-[0.1em] leading-tight max-w-[100px]">
                                            {item.text}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>

            {/* ─── TABLES SECTION ─── */}
            <section className="max-w-[1400px] mx-auto px-6 mt-20">
                <div className="flex items-center gap-3 mb-10">
                    <div className="w-1.5 h-6 bg-[#224292] rounded-full" />
                    <h3 className="text-2xl font-black text-[#224292] tracking-tight">Examination Administration</h3>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-stretch">
                    {/* Officials Table */}
                    <motion.div 
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="bg-white rounded-[1.5rem] border border-slate-100 shadow-2xl shadow-slate-200/50 overflow-hidden"
                    >
                        <div className="bg-[#224292] p-5 flex items-center gap-4">
                            <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white shadow-inner">
                                <UserCheck size={20} />
                            </div>
                            <h3 className="text-white text-[13px] font-black uppercase tracking-widest leading-tight">Officials of Office of COE</h3>
                        </div>
                        <div className="h-1 bg-[#ffc107] w-full" />
                        <div className="overflow-x-auto">
                            <table className="w-full text-left border-collapse">
                                <thead>
                                    <tr className="bg-[#f0f4f8] border-b border-slate-200 h-12">
                                        <th className="px-8 text-[9px] font-black text-[#224292] uppercase tracking-[0.15em] border-r border-slate-200">Faculty Name</th>
                                        <th className="px-5 text-[9px] font-black text-[#224292] uppercase tracking-[0.15em] border-r border-slate-200">Qualification</th>
                                        <th className="px-5 text-[9px] font-black text-[#224292] uppercase tracking-[0.15em]">Designation</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-slate-100">
                                    {officials.map((staff, idx) => (
                                        <tr key={idx} className={`hover:bg-[#224292]/5 transition-colors group h-14 ${idx % 2 === 1 ? 'bg-slate-50/50' : 'bg-white'}`}>
                                            <td className="px-8 border-r border-slate-100">
                                                <div className="flex items-center gap-5">
                                                    <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center text-[#224292] group-hover:bg-[#224292] group-hover:text-white transition-all shadow-sm border border-slate-100">
                                                        <UserCheck size={12} />
                                                    </div>
                                                    <span className="text-[13px] font-bold text-slate-800 tracking-tight whitespace-nowrap">{staff.name}</span>
                                                </div>
                                            </td>
                                            <td className="px-5 text-[11.5px] font-bold text-slate-500 border-r border-slate-100">{staff.qualification}</td>
                                            <td className="px-5">
                                                <span className="text-[11px] font-bold text-[#224292] uppercase tracking-tight leading-tight block">{staff.designation}</span>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </motion.div>

                    {/* Staff Table */}
                    <motion.div 
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="bg-white rounded-[1.5rem] border border-slate-100 shadow-2xl shadow-slate-200/50 overflow-hidden flex flex-col"
                    >
                        <div className="bg-[#224292] p-5 flex items-center gap-4">
                            <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white shadow-inner">
                                <Users size={20} />
                            </div>
                            <h3 className="text-white text-[13px] font-black uppercase tracking-widest leading-tight">Staff Details</h3>
                        </div>
                        <div className="h-1 bg-[#ffc107] w-full" />
                        <div className="overflow-x-auto flex-1">
                            <table className="w-full text-left border-collapse">
                                <thead>
                                    <tr className="bg-[#f0f4f8] border-b border-slate-200 h-12">
                                        <th className="px-8 text-[9px] font-black text-[#224292] uppercase tracking-[0.15em] border-r border-slate-200">Faculty Name</th>
                                        <th className="px-5 text-[9px] font-black text-[#224292] uppercase tracking-[0.15em] border-r border-slate-200">Qualification</th>
                                        <th className="px-5 text-[9px] font-black text-[#224292] uppercase tracking-[0.15em]">Designation</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-slate-100">
                                    {staffDetails.map((staff, idx) => (
                                        <tr key={idx} className={`hover:bg-[#ffc107]/5 transition-colors group h-14 ${idx % 2 === 1 ? 'bg-slate-50/50' : 'bg-white'}`}>
                                            <td className="px-8 border-r border-slate-100">
                                                <div className="flex items-center gap-5">
                                                    <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center text-[#ffc107] group-hover:bg-[#ffc107] group-hover:text-white transition-all shadow-sm border border-[#ffc107]/20">
                                                        <UserCheck size={12} />
                                                    </div>
                                                    <span className="text-[13px] font-bold text-slate-800 tracking-tight whitespace-nowrap">{staff.name}</span>
                                                </div>
                                            </td>
                                            <td className="px-5 text-[11.5px] font-bold text-slate-500 border-r border-slate-100">{staff.qualification}</td>
                                            <td className="px-5">
                                                <span className="text-[11px] font-bold text-[#224292] uppercase tracking-tight leading-tight block">{staff.designation}</span>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                        <div className="p-8 flex justify-center items-end relative overflow-hidden bg-slate-50/30 mt-auto">
                            <div className="absolute bottom-0 inset-x-0 h-16 bg-gradient-to-t from-slate-100/80 to-transparent z-0" />
                            <img src="/staff-sub-illustration.png" alt="Staff Support" className="w-full max-w-[280px] h-auto relative z-10 mix-blend-multiply" />
                        </div>
                    </motion.div>
                </div>
            </section>

        </div>
    )
}

export default AboutCOEPage
