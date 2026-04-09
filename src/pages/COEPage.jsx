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
                                <span className="text-[10px] font-black text-[#18357a] uppercase tracking-[2px]">Statutory Office</span>
                            </div>

                            <h1 className="text-3xl lg:text-5xl font-black text-[#18357a] leading-[1.1] uppercase tracking-tighter">
                                Controller of <br />
                                <span className="text-[#ffc107]">Examination (COE)</span>
                            </h1>

                            <div className="space-y-6">
                                <p className="text-xl font-black text-[#18357a] leading-relaxed italic border-l-8 border-[#ffc107] pl-8 py-3 bg-[#18357a]/[0.02] rounded-r-3xl">
                                    The Office of the Controller of Examinations was established in the Academic year 2022-2023.
                                </p>
                                
                                <p className="text-[17px] font-black text-[#18357a]/90 leading-relaxed text-slate-800">
                                    The office is responsible for conducting Internal Assessment Test (IAT) and End Semester Examination (ESE) for UG, PG and Ph.D. programs. 
                                    The COE office is also responsible for publishing results and issue of mark sheets for UG, PG and Ph.D programs.
                                </p>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-4">
                                    {[
                                        { icon: Clock, text: "Examination Schedules", path: "/coe/exam-schedules" },
                                        { icon: CheckCircle2, text: "Result Publication", path: "/coe/results" },
                                        { icon: FileText, text: "Marksheet Issuance", path: "/coe/marksheet" },
                                        { icon: GraduationCap, text: "PhD Coordination", path: "/coe/phd" }
                                    ].map((feature, i) => (
                                        <div 
                                            key={i} 
                                            onClick={() => feature.path && navigate(feature.path)}
                                            className="flex items-center gap-3 p-4 bg-slate-50 rounded-2xl border border-slate-100 group hover:border-[#ffc107] transition-all cursor-pointer hover:shadow-md active:scale-95"
                                        >
                                            <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center text-[#18357a] shadow-sm group-hover:bg-[#18357a] group-hover:text-white transition-all">
                                                <feature.icon size={18} />
                                            </div>
                                            <span className="text-xs font-black text-[#18357a] uppercase tracking-wider">{feature.text}</span>
                                        </div>
                                    ))}

                                </div>

                                <p className="text-[14px] font-black text-[#18357a]/80 bg-[#f8fafc] p-8 rounded-[2.5rem] border-2 border-slate-100 italic leading-relaxed">
                                    The Office of the Controller of Examinations is headed by the Controller of Examinations(COE), Supported by Deputy COE, Assistant COE, Technical and Administrative staff. The Controller of Examinations office and Examination Management Systems are working together Under one roof.
                                </p>
                            </div>
                        </motion.div>
                    </div>

                    {/* ─── RIGHT CONTENT: OFFICE BEARERS ─── */}
                    <div className="lg:w-1/2 w-full">
                        <motion.div 
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.2 }}
                            className="bg-white rounded-[2.5rem] border border-slate-100 shadow-2xl shadow-slate-200/40 overflow-hidden"
                        >
                            <div className="bg-[#18357a] p-5 text-center border-b-4 border-[#ffc107]">
                                <Users size={24} className="text-[#ffc107] mx-auto mb-2" />
                                <h3 className="text-lg font-black text-white uppercase tracking-tight">List of Office Bearers</h3>
                                <p className="text-[9px] font-bold text-white/50 uppercase tracking-[2px] mt-0.5">COE Administration Team</p>
                            </div>

                            <div className="p-4 sm:p-8">
                                <div className="overflow-hidden rounded-2xl border border-slate-50">
                                    <table className="w-full text-center border-collapse">
                                        <thead>
                                            <tr className="bg-slate-50">
                                                <th className="px-6 py-4 text-[10px] font-black text-[#18357a] uppercase tracking-[2px] w-20 text-center">S.No</th>
                                                <th className="px-6 py-4 text-[10px] font-black text-[#18357a] uppercase tracking-[2px] text-center">Name of the Staff</th>
                                                <th className="px-6 py-4 text-[10px] font-black text-[#18357a] uppercase tracking-[2px] text-center">Designation</th>
                                            </tr>
                                        </thead>
                                        <tbody className="divide-y divide-slate-50">
                                            {officeBearers.map((staff, idx) => (
                                                <tr 
                                                    key={idx} 
                                                    className={`hover:bg-[#18357a]/5 transition-all duration-300 group ${idx % 2 === 1 ? 'bg-[#18357a]/[0.06]' : 'bg-white'}`}
                                                >
                                                    <td className="px-6 py-3.5 text-center">
                                                        <span className="text-[13px] font-black text-[#18357a] group-hover:text-[#ffc107] transition-all">
                                                            {idx + 1}
                                                        </span>
                                                    </td>
                                                    <td className="px-6 py-3.5 text-center">
                                                        <span className="text-[13px] font-black text-[#18357a] uppercase tracking-tight group-hover:text-[#ffc107] transition-all">
                                                            {staff.name}
                                                        </span>
                                                    </td>
                                                    <td className="px-6 py-3.5 text-center">
                                                        <div className="inline-flex px-3 py-1 rounded-lg bg-slate-50 group-hover:bg-[#18357a] group-hover:text-white transition-all">
                                                            <span className="text-[9px] font-black uppercase tracking-[1px]">
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
