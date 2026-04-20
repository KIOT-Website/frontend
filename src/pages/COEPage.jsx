import React from 'react'
import { motion } from 'framer-motion'
import { 
    ChevronRight, 
    Home as HomeIcon,
    FileText,
    Users,
    ShieldCheck,
    GraduationCap,
    Clock,
    CheckCircle2
} from 'lucide-react'
import { useNavigate } from 'react-router-dom'


const COEPage = () => {
    const officeBearers = [
        { name: "Dr. M. Ilangkumaran", designation: "COE" },
        { name: "Dr. N. Panneerselvam", designation: "Deputy COE" },
        { name: "Mr. S. Ramesh", designation: "Assistant COE" },
        { name: "Mr. T. Raja", designation: "Assistant COE" },
        { name: "Mr. U. Balamurugan", designation: "Assistant COE" },
        { name: "Mr. P. R. Karthik", designation: "Assistant COE" },
        { name: "Mr. L. Venkatesan", designation: "Junior Assistant" },
        { name: "Mrs. P. Rathinam", designation: "Programmer" },
        { name: "Mr. R. Dhanasekaran", designation: "Programmer" },
        { name: "Mr. P. Varadharajuperumal", designation: "Programmer" },
        { name: "Ms. Sowmiya", designation: "Office Assistant" }
    ]
    const navigate = useNavigate()


    return (
        <div className="min-h-screen bg-white">
            <div className="max-w-7xl mx-auto px-6 py-16 lg:py-24">
                <div className="flex flex-col lg:flex-row gap-16 items-start">
                    
                    {/* ─── LEFT CONTENT: DESCRIPTION ─── */}
                    <div className="lg:w-1/2">
                        <motion.div 
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            className="space-y-8"
                        >
                            <div className="inline-flex items-center gap-3 px-4 py-2 bg-[#18357a]/5 rounded-full">
                                <ShieldCheck size={14} className="text-[#18357a]" />
                                <span className="text-[10px] font-graphik font-bold text-[#18357a] uppercase tracking-[2px]">Statutory Office</span>
                            </div>

                            <h1 className="text-3xl lg:text-5xl font-graphik font-semibold text-[#18357a] leading-[1.1] tracking-tighter">
                                Controller of <br />
                                <span className="text-[#ffc107]">Examinations (Exams)</span>
                            </h1>

                            <div className="space-y-6">
                                <p className="text-xl font-graphik font-medium text-[#18357a] leading-relaxed italic border-l-8 border-[#ffc107] pl-8 py-3 bg-[#18357a]/[0.02] rounded-r-3xl">
                                    The Office of the Controller of Examinations was established in the Academic year 2022-2023.
                                </p>
                                
                                <p className="text-[17px] font-graphik font-normal text-slate-700 leading-relaxed text-justify">
                                    The office is responsible for conducting Internal Assessment Test (IAT) and End Semester Examination (ESE) for UG, PG and Ph.D. programs. 
                                    The COE office is also responsible for publishing results and issue of mark sheets for UG, PG and Ph.D programs.
                                </p>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-4">
                                    {[
                                        { icon: Clock, text: "Examination Schedules", path: "/exams/schedules" },
                                        { icon: CheckCircle2, text: "Result Publication", path: "/exams/results" },
                                        { icon: FileText, text: "Marksheet Issuance", path: "/exams/marksheet" },
                                        { icon: GraduationCap, text: "PhD Coordination", path: "/exams/phd" }
                                    ].map((feature, i) => (
                                        <div 
                                            key={i} 
                                            onClick={() => feature.path && navigate(feature.path)}
                                            className="flex items-center gap-5 p-6 bg-white rounded-[1.5rem] border-2 border-slate-100 group hover:border-[#18357a] transition-all duration-500 cursor-pointer shadow-[0_10px_40px_rgba(0,0,0,0.08)] hover:shadow-[0_20px_60px_rgba(0,0,0,0.15)] active:scale-95 relative overflow-hidden"
                                        >
                                            <div className="absolute top-0 right-0 w-24 h-24 bg-black/[0.02] -mr-12 -mt-12 rounded-full group-hover:bg-[#18357a]/5 transition-colors" />
                                            <div className="w-14 h-14 bg-slate-50 rounded-2xl flex items-center justify-center text-[#18357a] shadow-sm group-hover:bg-[#18357a] group-hover:text-white transition-all duration-500 shrink-0 border border-slate-100">
                                                <feature.icon size={24} />
                                            </div>
                                            <span className="text-[13px] font-graphik font-semibold text-[#18357a] uppercase tracking-tight leading-tight group-hover:translate-x-1 transition-transform">{feature.text}</span>
                                        </div>
                                    ))}

                                </div>

                                <p className="text-[14px] font-graphik font-normal text-slate-600 bg-[#f8fafc] p-8 rounded-[2.5rem] border-2 border-slate-100 italic leading-relaxed text-justify">
                                    The Office of the Controller of Examinations is headed by the Controller of Examinations (COE), supported by Deputy COE, Assistant COE, Technical and Administrative staff. The Controller of Examinations office and Examination Management Systems are working together under one roof.
                                </p>
                            </div>
                        </motion.div>
                    </div>

                    {/* ─── RIGHT CONTENT: OFFICE BEARERS ─── */}
                    <div className="lg:w-1/2 w-full">
                        <div className="mb-10 text-center sm:text-left px-6 sm:px-0">
                            <h3 className="text-3xl font-graphik font-semibold text-[#18357a] tracking-tighter leading-tight mb-2">List of <span className="text-[#ffc107]">Office Bearers</span></h3>
                            <p className="text-[10px] font-graphik font-bold text-slate-400 uppercase tracking-[4px]">Statutory Committees & Members</p>
                        </div>

                        <motion.div 
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.2 }}
                            className="bg-white rounded-[2rem] sm:rounded-3xl border border-slate-100 shadow-2xl shadow-slate-200/40 overflow-hidden mx-0"
                        >
                            <div className="p-0">
                                <div className="overflow-hidden border-0">
                                    <table className="w-full text-left border-collapse">
                                        <thead>
                                            <tr className="bg-[#18357a]">
                                                <th className="px-3 sm:px-6 py-4 text-[10px] font-graphik font-bold text-white uppercase tracking-[1px] sm:tracking-[2px] w-12 sm:w-20 text-center border-r border-white/10">S.No</th>
                                                <th className="px-4 sm:px-8 py-4 text-[10px] font-graphik font-bold text-white uppercase tracking-[1px] sm:tracking-[2px] border-r border-white/10">Name of the Staff</th>
                                                <th className="px-3 py-4 text-[10px] font-graphik font-bold text-white uppercase tracking-[1px] sm:tracking-[2px] text-center">Designation</th>
                                            </tr>
                                        </thead>
                                        <tbody className="divide-y divide-slate-100">
                                            {officeBearers.map((staff, idx) => (
                                                <tr 
                                                    key={idx} 
                                                    className={`hover:bg-[#18357a]/5 transition-all duration-300 group ${idx % 2 === 1 ? 'bg-[#18357a]/[0.06]' : 'bg-white'}`}
                                                >
                                                    <td className="px-3 sm:px-6 py-4 text-center border-r border-slate-50">
                                                        <span className="text-[12px] sm:text-[13px] font-graphik font-semibold text-[#64779F] group-hover:text-[#18357a] transition-all">
                                                            {idx + 1}
                                                        </span>
                                                    </td>
                                                    <td className="px-4 sm:px-8 py-4 border-r border-slate-50">
                                                        <span className="text-[11px] sm:text-[13px] font-graphik font-semibold text-[#18357a] tracking-tight group-hover:text-[#ffc107] transition-all cursor-default">
                                                            {staff.name}
                                                        </span>
                                                    </td>
                                                    <td className="px-3 py-4 text-center">
                                                        <div className="inline-flex px-2 sm:px-3 py-1 rounded-lg bg-slate-50 group-hover:bg-[#18357a] group-hover:text-white transition-all">
                                                            <span className="text-[8px] sm:text-[9px] font-graphik font-bold uppercase tracking-[1px]">
                                                                {staff.designation}
                                                            </span>
                                                        </div>
                                                    </td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </motion.div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default COEPage
