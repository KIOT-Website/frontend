import React from 'react'
import { motion } from 'framer-motion'
import { Calendar, Download, Search, MapPin, ArrowLeft, FileText } from 'lucide-react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:8000'

const ExamSchedulesPage = () => {
    const navigate = useNavigate();
    const [schedules, setSchedules] = React.useState([])
    const [loading, setLoading] = React.useState(true)
    const [searchTerm, setSearchTerm] = React.useState('')

    React.useEffect(() => {
        const fetchData = async () => {
            try {
                const [theoryRes, practicalRes] = await Promise.all([
                    axios.get(`${API_BASE_URL}/coe-schedules/`),
                    axios.get(`${API_BASE_URL}/coe-practical/`)
                ])
                
                // Combine them with a flag to distinguish
                const combined = [
                    ...theoryRes.data.map(s => ({ ...s, type: 'theory' })),
                    ...practicalRes.data.map(s => ({ ...s, type: 'practical' }))
                ]
                console.log("Fetched schedules:", combined)
                setSchedules(combined)
            } catch (err) {
                console.error("Error fetching schedules:", err)
            } finally {
                setLoading(false)
            }
        }
        fetchData()
    }, [])

    const filteredSchedules = schedules.filter(item => {
        const search = searchTerm.toLowerCase();
        const inTitle = (item.title || "").toLowerCase().includes(search);
        const inReg = (item.regulation || "").toLowerCase().includes(search);
        const inExam = (item.batch || "").toLowerCase().includes(search);
        return inTitle || inReg || inExam;
    });

    return (
        <div className="min-h-screen bg-[#F4F7FE] pt-6 md:pt-12 pb-24">
            <div className="max-w-7xl mx-auto px-6">
                


                {/* ─── HEADER ─── */}
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
                    <div className="max-w-2xl">

                        <h1 className="text-4xl lg:text-5xl font-black text-[#224292] tracking-tight leading-tight">
                            Examination <span className="text-[#ffc107]">Schedules</span>
                        </h1>
                    </div>

                    <div className="flex items-center gap-3">
                        <div className="relative group self-end">
                            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-[#224292]/30 group-focus-within:text-[#224292] transition-colors" size={18} />
                            <input 
                                type="text" 
                                placeholder="Search schedules..." 
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                                className="pl-12 pr-6 py-4 bg-white rounded-2xl border border-slate-200/60 shadow-xl shadow-blue-900/5 focus:ring-2 focus:ring-[#224292]/5 focus:border-[#224292]/20 outline-none w-full md:w-80 font-bold text-xs"
                            />
                        </div>
                    </div>
                </div>

                {/* ─── END SEMESTER EXAMS TABLE ─── */}
                <div className="mb-16">
                    <div className="flex items-center gap-3 mb-6">
                        <div className="w-1.5 h-6 bg-[#224292] rounded-full" />
                        <h3 className="text-xl font-black text-[#224292] tracking-tight">End Semester Exams</h3>
                    </div>
                    <div className="bg-white rounded-2xl shadow-2xl shadow-blue-900/5 border border-slate-100 overflow-hidden">
                        {loading ? (
                            <div className="flex flex-col items-center justify-center py-24 space-y-4">
                                <div className="w-10 h-10 border-4 border-[#ffc107] border-t-transparent rounded-full animate-spin" />
                                <p className="text-[10px] font-black text-[#224292] uppercase tracking-widest">Syncing with server...</p>
                            </div>
                        ) : filteredSchedules.filter(s => s.type === 'theory').length === 0 ? (
                           <div className="p-24 flex flex-col items-center text-center">
                                <FileText size={48} className="text-slate-100 mb-4" />
                                <h3 className="text-lg font-black text-[#224292] uppercase mb-1">No Theory Schedules</h3>
                                <p className="text-[#64779F] font-bold text-[9px] uppercase tracking-widest transition-colors">Adjust your search or check back later.</p>
                           </div>
                        ) : (
                            <div className="overflow-x-auto">
                                <table className="w-full text-left border-collapse">
                                    <thead>
                                        <tr className="bg-[#224292] text-white font-black text-[10px] uppercase tracking-[0.2em]">
                                            <th className="px-10 py-5 border-r border-white/5">Examination</th>
                                            <th className="px-10 py-5 text-right">DOCUMENT</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {filteredSchedules.filter(s => s.type === 'theory').map((item, i) => (
                                            <motion.tr
                                                key={item.id || i}
                                                initial={{ opacity: 0 }}
                                                whileInView={{ opacity: 1 }}
                                                onClick={() => window.open(item.pdf_url, '_blank')}
                                                className="group hover:bg-[#ffc107]/5 transition-colors border-b border-slate-50 last:border-0 cursor-pointer"
                                            >
                                                <td className="px-10 py-4">
                                                    <div className="flex items-center gap-4">
                                                        <div className="w-8 h-8 rounded-lg bg-red-50 flex items-center justify-center text-red-600 group-hover:bg-[#224292] group-hover:text-white transition-all border border-red-100/50">
                                                            <FileText size={16} />
                                                        </div>
                                                        <span className="font-semibold text-[#333333] text-[14px] tracking-wide uppercase leading-[28.8px] max-w-sm">
                                                            {item.batch || (item.title && item.title.includes(' - ') ? item.title.substring(item.title.indexOf(' - ') + 3) : item.title)}
                                                        </span>
                                                    </div>
                                                </td>
                                                <td className="px-10 py-4 text-right" onClick={(e) => e.stopPropagation()}>
                                                    <a 
                                                        href={item.pdf_url.replace('/upload/', '/upload/fl_attachment/')} 
                                                        download={`${item.title}.pdf`}
                                                        target="_blank" 
                                                        rel="noreferrer"
                                                        style={{ color: '#FFFFFF' }}
                                                        className="inline-flex items-center gap-2 px-6 py-3 bg-[#224292] rounded-xl font-black text-[9px] uppercase tracking-[0.1em] hover:bg-[#ffc107] hover:text-[#224292] transition-all active:scale-95 shadow-xl shadow-blue-900/20"
                                                    >
                                                        <Download size={14} style={{ color: '#FFFFFF' }} />
                                                        DOWNLOAD
                                                    </a>
                                                </td>
                                            </motion.tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        )}
                    </div>
                </div>

                {/* ─── PRACTICAL EXAMS TABLE ─── */}
                <div className="mb-16">
                    <div className="flex items-center gap-3 mb-6">
                        <div className="w-1.5 h-6 bg-[#ffc107] rounded-full" />
                        <h3 className="text-xl font-black text-[#224292] tracking-tight">Practical Exams</h3>
                    </div>
                    <div className="bg-white rounded-2xl shadow-2xl shadow-blue-900/5 border border-slate-100 overflow-hidden">
                        {loading ? (
                            <div className="flex flex-col items-center justify-center py-24 space-y-4">
                                <div className="w-10 h-10 border-4 border-[#ffc107] border-t-transparent rounded-full animate-spin" />
                                <p className="text-[10px] font-black text-[#224292] uppercase tracking-widest">Syncing with server...</p>
                            </div>
                        ) : filteredSchedules.filter(s => s.type === 'practical').length === 0 ? (
                           <div className="p-24 flex flex-col items-center text-center">
                                <FileText size={48} className="text-slate-100 mb-4" />
                                <h3 className="text-lg font-black text-[#224292] uppercase mb-1">No Practical Schedules</h3>
                                <p className="text-[#64779F] font-bold text-[9px] uppercase tracking-widest transition-colors">Adjust your search or check back later.</p>
                           </div>
                        ) : (
                            <div className="overflow-x-auto">
                                <table className="w-full text-left border-collapse">
                                    <thead>
                                        <tr className="bg-[#224292] text-white font-black text-[10px] uppercase tracking-[0.2em]">
                                            <th className="px-10 py-5 border-r border-white/5">Examination</th>
                                            <th className="px-10 py-5 text-right">DOCUMENT</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {filteredSchedules.filter(s => s.type === 'practical').map((item, i) => (
                                            <motion.tr
                                                key={item.id || i}
                                                initial={{ opacity: 0 }}
                                                whileInView={{ opacity: 1 }}
                                                onClick={() => window.open(item.pdf_url, '_blank')}
                                                className="group hover:bg-[#ffc107]/5 transition-colors border-b border-slate-50 last:border-0 cursor-pointer"
                                            >
                                                <td className="px-10 py-4">
                                                    <div className="flex items-center gap-4">
                                                        <div className="w-8 h-8 rounded-lg bg-red-50 flex items-center justify-center text-red-600 group-hover:bg-[#224292] group-hover:text-white transition-all border border-red-100/50">
                                                            <FileText size={16} />
                                                        </div>
                                                        <span className="font-semibold text-[#333333] text-[14px] tracking-wide uppercase leading-[28.8px] max-w-sm">
                                                            {item.batch || (item.title && item.title.includes(' - ') ? item.title.substring(item.title.indexOf(' - ') + 3) : item.title)}
                                                        </span>
                                                    </div>
                                                </td>
                                                <td className="px-10 py-4 text-right" onClick={(e) => e.stopPropagation()}>
                                                    <a 
                                                        href={item.pdf_url.replace('/upload/', '/upload/fl_attachment/')} 
                                                        download={`${item.title}.pdf`}
                                                        target="_blank" 
                                                        rel="noreferrer"
                                                        style={{ color: '#FFFFFF' }}
                                                        className="inline-flex items-center gap-2 px-6 py-3 bg-[#224292] rounded-xl font-black text-[9px] uppercase tracking-[0.1em] hover:bg-[#ffc107] hover:text-[#224292] transition-all active:scale-95 shadow-xl shadow-blue-900/20"
                                                    >
                                                        <Download size={14} style={{ color: '#FFFFFF' }} />
                                                        DOWNLOAD
                                                    </a>
                                                </td>
                                            </motion.tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        )}
                    </div>
                </div>



            </div>
        </div>
    )
}

export default ExamSchedulesPage
