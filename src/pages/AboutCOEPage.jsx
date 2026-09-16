import React from 'react'
import { motion } from 'framer-motion'
import { 
    Users,
    ShieldCheck,
    Calendar,
    UserCheck,
    Building2,
    Settings,
    TrendingUp,
    Star,
    ClipboardCheck,
    FileCheck
} from 'lucide-react'
import { useNavigate } from 'react-router-dom'

const AboutCOEPage = () => {
    const navigate = useNavigate()

    const officials = [
        { name: "Dr. Visagavel K", qualification: "M.E., Ph.D.", designation: "Principal & Chief Controller of Examinations" },
        { name: "Dr. Ilangkumaran M", qualification: "M.E., Ph.D.", designation: "Controller of Examinations" },
        { name: "Dr. Panneerselvam N", qualification: "M.E., Ph.D.", designation: "Deputy Controller of Examinations" },
        { name: "Mr. Raja T", qualification: "M.Sc., M.Phil., SET", designation: "Assistant Controller of Examinations" },
        { name: "Mr. Balamurugan U", qualification: "M.Sc., M.Phil.", designation: "Assistant Controller of Examinations" },
        { name: "Mr. Ganeshkumar B", qualification: "M.Sc., M.Phil., SET", designation: "Assistant Controller of Examinations" },
        { name: "Mr. Dhineshkumar P", qualification: "M.Sc., M.Phil.", designation: "Assistant Controller of Examinations" },
        { name: "Mr. Dhamodharan K", qualification: "MCA, M.E.", designation: "Assistant Controller of Examinations" }
    ]

    const staffDetails = [
        { name: "Mr. Venkatesan L", qualification: "M.Sc., M.Phil.", designation: "Junior Assistant" },
        { name: "Ms. Rathinam P", qualification: "B.Com., D. Co.Op.", designation: "Programmer" },
        { name: "Mr. Varadharajuperumal P", qualification: "M.Sc.", designation: "Programmer" },
        { name: "Mr. Prabu G", qualification: "M.Sc., M.Phil., B.Ed.", designation: "Programmer" },
        { name: "Ms. Banu S", qualification: "B.Com (CA)", designation: "Office Assistant" }
    ]

    const visionPoints = [
        { icon: Building2, text: "The Office of the Controller of Examinations (COE) was established in the academic year 2022-2023. It is a key administrative unit in educational institutions, especially those with autonomy, overseeing all examination-related activities." },
        { icon: UserCheck, text: "It is led by the Controller of Examinations, who reports directly to the head of the institution." },
        { icon: Calendar, text: "The office plans, schedules and conducts examinations as per the academic calendar, maintaining fairness, transparency and integrity." },
        { icon: FileCheck, text: "It handles evaluation, result declaration, and payments to examiners." },
        { icon: Settings, text: "Compile Grades and declare results after approval by Result Passing Board (RPB), Issuing certificates such as Statement of Grade, Consolidated Statements of Grade." },
        { icon: ShieldCheck, text: "Academic standards are upheld through secure processes and best practices." }
    ]

    return (
        <div className="min-h-screen bg-[#FDFDFD] font-graphik pb-16">
            
            {/* ─── PAGE HEADER ─── */}
            <div className="max-w-[1400px] mx-auto px-6 py-10 text-center">
                <div className="inline-flex items-center gap-4 mb-4">
                    <div className="h-[2px] w-12 bg-[#ffc107]" />
                    <h1 className="text-3xl md:text-5xl font-black text-[#224292] tracking-tight">
                        Controller of <span className="text-[#ffc107]">Examinations</span>
                    </h1>
                    <div className="h-[2px] w-12 bg-[#ffc107]" />
                </div>
            </div>
            
            {/* ─── VISION SECTION ─── */}
            <div className="max-w-[1400px] mx-auto px-4 sm:px-6 relative z-20">
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="bg-white rounded-2xl border border-slate-100 shadow-xl shadow-slate-200/50 overflow-hidden relative"
                >
                    <div className="flex flex-col lg:flex-row items-stretch">
                        <div className="lg:w-3/5 p-6 sm:p-12 space-y-6 lg:space-y-8 relative z-10 bg-[radial-gradient(#d1d5db_1px,transparent_1px)] [background-size:24px_24px]">
                            <div className="space-y-6 lg:space-y-8 relative">
                                <div className="absolute left-[20px] top-4 bottom-4 w-0 border-l-[1.5px] border-dashed border-[#224292]/10 z-0 hidden sm:block" />
                                {visionPoints.map((point, i) => (
                                    <div key={i} className="flex gap-4 group items-start relative z-10">
                                        <div className="w-10 h-10 bg-[#224292] rounded-full flex items-center justify-center text-white shrink-0 shadow-md ring-4 ring-white transition-transform group-hover:scale-110">
                                            <point.icon size={16} />
                                        </div>
                                        <p className="text-[13.5px] lg:text-[15px] text-slate-800 font-medium leading-relaxed pt-1.5 text-justify">
                                            {point.text}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="hidden lg:flex lg:w-2/5 flex-col justify-center items-center relative overflow-hidden bg-slate-50/50 p-12">
                            <div className="relative scale-105">
                                <img src="/coe-illustration-clean.webp" alt="COE Vision" className="w-full max-w-sm h-auto relative z-10" />
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>

            {/* ─── TABLES SECTION ─── */}
            <section className="max-w-[1400px] mx-auto px-4 sm:px-6 mt-14 lg:mt-16">
                <div className="flex items-center gap-3 mb-8 px-2 sm:px-0">
                    <div className="w-1.5 h-6 bg-[#224292] rounded-full" />
                    <h3 className="text-xl md:text-2xl font-black text-[#224292] tracking-tight">Examination Administration</h3>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-10 items-start">
                    {/* Officials Table */}
                    <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="bg-white rounded-2xl border border-slate-200 shadow-xl shadow-slate-200/40 overflow-hidden flex flex-col"
                    >
                        <div className="bg-[#224292] px-6 py-4 flex items-center gap-3">
                            <div className="w-9 h-9 rounded-lg bg-white/10 flex items-center justify-center text-white">
                                <UserCheck size={20} />
                            </div>
                            <h3 className="text-white text-base font-bold tracking-wide">Officials of COE</h3>
                        </div>
                        <div className="h-1 bg-[#ffc107] w-full" />
                        
                        <div className="overflow-x-auto">
                            <table className="w-full text-left border-collapse min-w-[520px]">
                                <thead>
                                    <tr className="bg-[#f0f4f8] border-b border-slate-200">
                                        <th className="w-[42%] px-5 py-3.5 text-[11px] font-extrabold text-[#224292] uppercase tracking-wider">Faculty Name</th>
                                        <th className="w-[25%] px-4 py-3.5 text-[11px] font-extrabold text-[#224292] uppercase tracking-wider">Qualification</th>
                                        <th className="w-[33%] px-4 py-3.5 text-[11px] font-extrabold text-[#224292] uppercase tracking-wider">Designation</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-slate-100">
                                    {officials.map((staff, idx) => (
                                        <tr key={idx} className={`hover:bg-blue-50/40 transition-colors group ${idx % 2 === 1 ? 'bg-slate-50/40' : 'bg-white'}`}>
                                            <td className="px-5 py-3.5">
                                                <div className="flex items-center gap-3">
                                                    <div className="w-7 h-7 rounded-full bg-[#224292]/10 flex items-center justify-center text-[#224292] group-hover:bg-[#224292] group-hover:text-white transition-colors shrink-0">
                                                        <UserCheck size={13} />
                                                    </div>
                                                    <span className="text-[13px] font-bold text-slate-800 tracking-tight">{staff.name}</span>
                                                </div>
                                            </td>
                                            <td className="px-4 py-3.5 text-[12px] font-medium text-slate-600 break-words">{staff.qualification}</td>
                                            <td className="px-4 py-3.5">
                                                <span className="text-[12px] font-bold text-[#224292] tracking-tight leading-snug block break-words">{staff.designation}</span>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </motion.div>

                    {/* Staff Table */}
                    <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="bg-white rounded-2xl border border-slate-200 shadow-xl shadow-slate-200/40 overflow-hidden flex flex-col"
                    >
                        <div className="bg-[#224292] px-6 py-4 flex items-center gap-3">
                            <div className="w-9 h-9 rounded-lg bg-white/10 flex items-center justify-center text-white">
                                <Users size={20} />
                            </div>
                            <h3 className="text-white text-base font-bold tracking-wide">Staff Details</h3>
                        </div>
                        <div className="h-1 bg-[#ffc107] w-full" />
                        
                        <div className="overflow-x-auto">
                            <table className="w-full text-left border-collapse min-w-[520px]">
                                <thead>
                                    <tr className="bg-[#f0f4f8] border-b border-slate-200">
                                        <th className="w-[42%] px-5 py-3.5 text-[11px] font-extrabold text-[#224292] uppercase tracking-wider">Faculty Name</th>
                                        <th className="w-[25%] px-4 py-3.5 text-[11px] font-extrabold text-[#224292] uppercase tracking-wider">Qualification</th>
                                        <th className="w-[33%] px-4 py-3.5 text-[11px] font-extrabold text-[#224292] uppercase tracking-wider">Designation</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-slate-100">
                                    {staffDetails.map((staff, idx) => (
                                        <tr key={idx} className={`hover:bg-amber-50/30 transition-colors group ${idx % 2 === 1 ? 'bg-slate-50/40' : 'bg-white'}`}>
                                            <td className="px-5 py-3.5">
                                                <div className="flex items-center gap-3">
                                                    <div className="w-7 h-7 rounded-full bg-amber-500/10 flex items-center justify-center text-[#d97706] group-hover:bg-[#d97706] group-hover:text-white transition-colors shrink-0">
                                                        <UserCheck size={13} />
                                                    </div>
                                                    <span className="text-[13px] font-bold text-slate-800 tracking-tight">{staff.name}</span>
                                                </div>
                                            </td>
                                            <td className="px-4 py-3.5 text-[12px] font-medium text-slate-600 break-words">{staff.qualification}</td>
                                            <td className="px-4 py-3.5">
                                                <span className="text-[12px] font-bold text-[#224292] tracking-tight leading-snug block break-words">{staff.designation}</span>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </motion.div>
                </div>
            </section>

        </div>
    )
}

export default AboutCOEPage
