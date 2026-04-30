import React from 'react'
import { motion } from 'framer-motion'
import { 
    ChevronRight, 
    FileText,
    GraduationCap,
    CheckCircle2,
    Calendar,
    Search,
    ArrowRight,
    Building2,
    Lock,
    FileCheck,
    ClipboardList,
    Percent,
    FolderSync,
    Bell,
    Clock,
    Award
} from 'lucide-react'
import { useNavigate } from 'react-router-dom'

const COEPage = () => {
    const navigate = useNavigate()

    const quickAccess = [
        { title: "About COE", icon: Building2, color: "bg-blue-50", iconColor: "text-blue-600", circleColor: "bg-blue-100", btnColor: "bg-blue-600", path: "/exams/about-coe" },
        { title: "Circulars", icon: Bell, color: "bg-purple-50", iconColor: "text-purple-600", circleColor: "bg-purple-100", btnColor: "bg-purple-600", path: "/exams/circulars" },
        { title: "End Sem Exams", icon: Calendar, color: "bg-indigo-50", iconColor: "text-indigo-600", circleColor: "bg-indigo-100", btnColor: "bg-indigo-600", path: "/exams/schedules" },
        { title: "Semester Results", icon: CheckCircle2, color: "bg-green-50", iconColor: "text-green-600", circleColor: "bg-green-100", btnColor: "bg-green-600", path: "/exams/results" },
        { title: "Faculty Login", icon: Lock, color: "bg-orange-50", iconColor: "text-orange-600", circleColor: "bg-orange-100", btnColor: "bg-orange-600" },
        { title: "Grade Sheet Correction", icon: FileCheck, color: "bg-cyan-50", iconColor: "text-cyan-600", circleColor: "bg-cyan-100", btnColor: "bg-cyan-600" },
        { title: "Duplicate Grade Sheet", icon: FileText, color: "bg-yellow-50", iconColor: "text-yellow-600", circleColor: "bg-yellow-100", btnColor: "bg-yellow-600" },
        { title: "Application for Transcripts", icon: ClipboardList, color: "bg-slate-50", iconColor: "text-slate-600", circleColor: "bg-slate-100", btnColor: "bg-slate-600" },
        { title: "CGPA to Percentage", icon: Percent, color: "bg-rose-50", iconColor: "text-rose-600", circleColor: "bg-rose-100", btnColor: "bg-rose-600" },
        { title: "Application for Withdrawal", icon: FolderSync, color: "bg-emerald-50", iconColor: "text-emerald-600", circleColor: "bg-emerald-100", btnColor: "bg-emerald-600" }
    ]

    return (
        <div className="min-h-screen bg-[#FDFDFD] font-graphik pb-24">
            
            {/* ─── HERO SECTION ─── */}
            <div className="bg-[#224292] pt-16 pb-32 relative overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:32px_32px] opacity-10" />
                <div className="max-w-[1400px] mx-auto px-6 relative z-10 text-center">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md px-6 py-2 rounded-full border border-white/20 text-[#ffc107] mb-8"
                    >
                        <GraduationCap size={18} />
                        <span className="text-[11px] font-black uppercase tracking-[0.3em]">Autonomous Examination Portal</span>
                    </motion.div>
                    
                    <motion.h1 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-5xl md:text-7xl font-black text-white tracking-tighter mb-6"
                    >
                        Office of the <span className="text-[#ffc107]">Controller of Examinations</span>
                    </motion.h1>
                    
                    <motion.p 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="text-white/60 text-xl font-medium max-w-3xl mx-auto leading-relaxed"
                    >
                        A centralized hub for all examination activities, results, and academic certifications. Maintaining excellence through transparency and integrity.
                    </motion.p>
                </div>

                {/* Decorative Elements */}
                <div className="absolute top-1/2 left-0 w-64 h-64 bg-[#ffc107]/20 rounded-full blur-[120px] -translate-x-1/2 -translate-y-1/2" />
                <div className="absolute top-1/2 right-0 w-64 h-64 bg-blue-400/20 rounded-full blur-[120px] translate-x-1/2 -translate-y-1/2" />
            </div>

            {/* ─── HUB GRID SECTION ─── */}
            <div className="max-w-[1550px] mx-auto px-6 -mt-20 relative z-20">
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
                    {quickAccess.map((item, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 + idx * 0.05 }}
                            whileHover={{ y: -8, scale: 1.02 }}
                            onClick={() => item.path && navigate(item.path)}
                            className={`${item.color} p-8 rounded-[2rem] border border-white shadow-xl hover:shadow-2xl transition-all group cursor-pointer flex flex-col justify-between min-h-[220px] relative overflow-hidden`}
                        >
                            {/* Decorative Background Circles */}
                            <div className={`absolute -right-6 -bottom-6 w-32 h-32 ${item.circleColor} rounded-full opacity-20 blur-3xl group-hover:scale-150 transition-transform`} />
                            
                            <div>
                                <div className={`w-16 h-16 ${item.circleColor} rounded-[1.2rem] flex items-center justify-center ${item.iconColor} mb-6 shadow-inner group-hover:rotate-12 transition-transform`}>
                                    <item.icon size={30} />
                                </div>
                                <h4 className="text-[15px] font-black text-[#224292] leading-tight pr-4">
                                    {item.title}
                                </h4>
                            </div>
                            
                            <div className="flex items-center gap-2 mt-4 text-[#224292]/40 group-hover:text-[#224292] transition-colors">
                                <span className="text-[10px] font-black uppercase tracking-widest">Access Now</span>
                                <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                            </div>

                            <div className={`absolute top-4 right-4 w-2 h-2 ${item.btnColor} rounded-full opacity-0 group-hover:opacity-100 transition-opacity`} />
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* ─── HELP DESK / FOOTER CTA ─── */}
            <section className="max-w-[1400px] mx-auto px-6 mt-24">
                <div className="bg-[#f8fafc] rounded-[2.5rem] p-12 border border-slate-100 flex flex-col lg:flex-row items-center justify-between gap-12 relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-[#224292]/5 rounded-full blur-[80px] -mr-32 -mt-32" />
                    
                    <div className="flex-1 text-center lg:text-left">
                        <h3 className="text-3xl font-black text-[#224292] mb-4">Need Assistance?</h3>
                        <p className="text-slate-500 font-bold max-w-xl">
                            Our team is here to help you with any examination-related queries, certificate requests, or technical issues with the portal.
                        </p>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-4 shrink-0">
                        <button className="px-10 py-5 bg-[#224292] text-white rounded-2xl font-black text-[13px] uppercase tracking-widest hover:bg-[#ffc107] hover:text-[#224292] transition-all shadow-xl shadow-blue-900/10">
                            Contact Help Desk
                        </button>
                        <button className="px-10 py-5 bg-white text-[#224292] border border-slate-200 rounded-2xl font-black text-[13px] uppercase tracking-widest hover:bg-slate-50 transition-all">
                            FAQ & Guides
                        </button>
                    </div>
                </div>
            </section>

        </div>
    )
}

export default COEPage
