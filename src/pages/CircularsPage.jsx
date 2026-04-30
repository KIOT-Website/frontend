import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { 
    FileText, 
    Download, 
    Search, 
    Calendar, 
    Bell, 
    ArrowLeft,
    ExternalLink,
    Filter,
    ChevronRight,
    Building2,
    GraduationCap,
    Clock
} from 'lucide-react'
import { useNavigate } from 'react-router-dom'

const CircularsPage = () => {
    const navigate = useNavigate()
    const [searchTerm, setSearchTerm] = useState('')

    const circulars = [
        { id: 1, title: "Semester End Examination Schedule - Nov/Dec 2026", date: "Oct 25, 2026", category: "Exams", type: "PDF" },
        { id: 2, title: "Revised Guidelines for PhD Thesis Submission", date: "Oct 20, 2026", category: "Research", type: "PDF" },
        { id: 3, title: "Instruction for Malpractice Prevention in Exams", date: "Oct 15, 2026", category: "Exams", type: "PDF" },
        { id: 4, title: "Academic Calendar for Even Semester 2026-27", date: "Oct 10, 2026", category: "General", type: "PDF" },
        { id: 5, title: "Fee Structure for Revaluation and Script Copy", date: "Oct 05, 2026", category: "Fees", type: "PDF" },
        { id: 6, title: "Notification for Supplementary Examinations", date: "Sep 28, 2026", category: "Exams", type: "PDF" },
        { id: 7, title: "Scholarship Application Deadlines - Year 2026", date: "Sep 20, 2026", category: "General", type: "PDF" },
        { id: 8, title: "Graduation Day Ceremony - Official Invite", date: "Sep 15, 2026", category: "Events", type: "PDF" }
    ]

    const filteredCirculars = circulars.filter(c => 
        c.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        c.category.toLowerCase().includes(searchTerm.toLowerCase())
    )

    return (
        <div className="min-h-screen bg-[#FDFDFD] font-graphik pb-24">
            
            {/* ─── HEADER SECTION ─── */}
            <div className="bg-[#224292] pt-12 pb-24 relative overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:32px_32px] opacity-5" />
                <div className="max-w-[1400px] mx-auto px-6 relative z-10">
                    <button 
                        onClick={() => navigate('/exams')}
                        className="inline-flex items-center gap-2 text-white/60 hover:text-[#ffc107] transition-colors mb-8 group"
                    >
                        <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" />
                        <span className="text-[12px] font-black uppercase tracking-[0.2em]">Back to COE Portal</span>
                    </button>
                    
                    <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
                        <div>
                            <div className="flex items-center gap-4 mb-4">
                                <div className="w-12 h-1 bg-[#ffc107] rounded-full" />
                                <span className="text-[#ffc107] text-[12px] font-black uppercase tracking-[0.3em]">Official Notification</span>
                            </div>
                            <h1 className="text-4xl md:text-5xl font-black text-white tracking-tighter mb-4">
                                Circulars & <span className="text-[#ffc107]">Announcements</span>
                            </h1>
                            <p className="text-white/60 text-lg font-medium max-w-2xl leading-relaxed">
                                Stay updated with the latest examination schedules, academic notifications, and official announcements from the Controller of Examinations.
                            </p>
                        </div>
                        
                        {/* Search Bar */}
                        <div className="relative group">
                            <div className="absolute inset-0 bg-[#ffc107] rounded-2xl blur-xl opacity-0 group-focus-within:opacity-20 transition-all" />
                            <div className="relative flex items-center bg-white/5 border border-white/10 rounded-2xl p-1 backdrop-blur-md">
                                <div className="pl-4 text-white/40">
                                    <Search size={20} />
                                </div>
                                <input 
                                    type="text" 
                                    placeholder="Search circulars..."
                                    value={searchTerm}
                                    onChange={(e) => setSearchTerm(e.target.value)}
                                    className="bg-transparent border-none text-white px-4 py-3 w-[300px] focus:ring-0 placeholder:text-white/20 font-bold"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* ─── CONTENT SECTION ─── */}
            <div className="max-w-[1400px] mx-auto px-6 -mt-12 relative z-20">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    
                    {/* Main Circulars List */}
                    <div className="lg:col-span-2 space-y-4">
                        {filteredCirculars.map((c, idx) => (
                            <motion.div
                                key={c.id}
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: idx * 0.05 }}
                                className="bg-white p-6 rounded-2xl border border-slate-100 shadow-xl shadow-slate-200/40 group hover:border-[#224292] transition-all flex items-center gap-6"
                            >
                                <div className="w-14 h-14 rounded-2xl bg-slate-50 flex items-center justify-center text-[#224292] group-hover:bg-[#224292] group-hover:text-white transition-all shadow-inner border border-slate-100 shrink-0">
                                    <FileText size={24} />
                                </div>
                                
                                <div className="flex-1 min-w-0">
                                    <div className="flex items-center gap-3 mb-1">
                                        <span className="text-[10px] font-black text-[#224292]/40 uppercase tracking-widest">{c.category}</span>
                                        <div className="w-1 h-1 bg-slate-200 rounded-full" />
                                        <span className="text-[10px] font-bold text-slate-400">{c.date}</span>
                                    </div>
                                    <h3 className="text-[15px] font-black text-[#224292] group-hover:text-[#224292] transition-colors line-clamp-1">
                                        {c.title}
                                    </h3>
                                </div>
                                
                                <div className="flex items-center gap-3">
                                    <button className="flex items-center gap-2 bg-slate-50 text-[#224292] px-4 py-2.5 rounded-xl text-[11px] font-black uppercase tracking-widest hover:bg-[#224292] hover:text-white transition-all border border-slate-100">
                                        <Download size={14} />
                                        {c.type}
                                    </button>
                                </div>
                            </motion.div>
                        ))}

                        {filteredCirculars.length === 0 && (
                            <div className="bg-white p-20 rounded-3xl border border-slate-100 text-center">
                                <div className="w-20 h-20 bg-slate-50 rounded-full flex items-center justify-center text-slate-300 mx-auto mb-6">
                                    <Search size={32} />
                                </div>
                                <h3 className="text-xl font-black text-[#224292] mb-2">No results found</h3>
                                <p className="text-slate-400 font-bold">Try adjusting your search terms</p>
                            </div>
                        )}
                    </div>

                    {/* Sidebar / Statistics */}
                    <div className="space-y-8">
                        {/* Quick Stats Card */}
                        <div className="bg-white p-8 rounded-3xl border border-slate-100 shadow-2xl shadow-slate-200/50 relative overflow-hidden">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-[#ffc107]/5 rounded-full -mr-16 -mt-16" />
                            <h3 className="text-lg font-black text-[#224292] mb-6 flex items-center gap-3">
                                <Bell size={20} className="text-[#ffc107]" />
                                Portal Insights
                            </h3>
                            
                            <div className="space-y-6">
                                {[
                                    { label: "Active Circulars", value: "142", color: "bg-blue-500" },
                                    { label: "Exam Notifications", value: "28", color: "bg-[#ffc107]" },
                                    { label: "Total Downloads", value: "1.2K", color: "bg-green-500" }
                                ].map((stat, i) => (
                                    <div key={i} className="flex items-center justify-between">
                                        <span className="text-[12px] font-black text-slate-400 uppercase tracking-widest">{stat.label}</span>
                                        <span className="text-xl font-black text-[#224292]">{stat.value}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Recent Highlights */}
                        <div className="bg-[#224292] p-8 rounded-3xl shadow-2xl shadow-blue-900/20 relative overflow-hidden group">
                            <div className="absolute inset-0 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:20px_20px] opacity-5" />
                            <h3 className="text-white text-lg font-black mb-6 relative z-10">Important Highlights</h3>
                            <div className="space-y-5 relative z-10">
                                {[
                                    "Nov 2026 Exam Registration is now live",
                                    "Hall Tickets available for download",
                                    "Result Publication for Even Sem (Aug 2026)"
                                ].map((text, i) => (
                                    <div key={i} className="flex items-start gap-3 group/item">
                                        <div className="w-5 h-5 rounded-full bg-white/10 flex items-center justify-center text-[#ffc107] shrink-0 mt-0.5 group-hover/item:bg-[#ffc107] group-hover/item:text-[#224292] transition-all">
                                            <ChevronRight size={12} />
                                        </div>
                                        <p className="text-white/80 text-[13px] font-bold leading-snug group-hover/item:text-white transition-colors cursor-default">
                                            {text}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default CircularsPage
