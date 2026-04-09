import React from 'react'
import { motion } from 'framer-motion'
import { Calendar, Download, Search, MapPin, ArrowLeft, FileText } from 'lucide-react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

const API_BASE_URL = 'http://localhost:8000'

const ExamSchedulesPage = () => {
    const navigate = useNavigate();
    const [schedules, setSchedules] = React.useState([])
    const [loading, setLoading] = React.useState(true)
    const [searchTerm, setSearchTerm] = React.useState('')

    React.useEffect(() => {
        const fetchSchedules = async () => {
            try {
                const res = await axios.get(`${API_BASE_URL}/coe-schedules/`)
                setSchedules(res.data)
            } catch (err) {
                console.error("Error fetching schedules:", err)
            } finally {
                setLoading(false)
            }
        }
        fetchSchedules()
    }, [])

    const filteredSchedules = schedules.filter(item => {
        const search = searchTerm.toLowerCase();
        const inTitle = (item.title || "").toLowerCase().includes(search);
        const inReg = (item.regulation || "").toLowerCase().includes(search);
        const inExam = (item.batch || "").toLowerCase().includes(search);
        return inTitle || inReg || inExam;
    });

    return (
        <div className="min-h-screen bg-[#F4F7FE] pt-12 pb-24">
            <div className="max-w-7xl mx-auto px-6">
                
                {/* ─── BACK BUTTON ─── */}
                <div className="mb-12">
                    <button 
                        onClick={() => navigate('/coe')}
                        className="group flex items-center gap-2 text-[#18357a]/60 hover:text-[#18357a] transition-all"
                    >
                        <div className="w-8 h-8 rounded-full bg-white shadow-sm flex items-center justify-center group-hover:bg-[#18357a] group-hover:text-white transition-all">
                           <ArrowLeft size={16} />
                        </div>
                        <span className="text-xs font-black uppercase tracking-widest">Back to COE</span>
                    </button>
                </div>

                {/* ─── HEADER ─── */}
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
                    <div className="max-w-2xl">
                        <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-white border border-[#D5E2F4]/50 shadow-sm mb-6">
                            <Calendar size={14} className="text-[#ffc107]" />
                            <span className="text-[10px] font-black text-[#18357a] uppercase tracking-wider">Controller Office</span>
                        </div>
                        <h1 className="text-4xl lg:text-5xl font-black text-[#18357a] tracking-tight leading-tight uppercase">
                            Examination <span className="text-[#ffc107]">Schedules</span>
                        </h1>
                        <p className="mt-4 text-[#64779F] font-bold text-xs uppercase tracking-widest">
                            Official examination timelines and schedules for current academic sessions.
                        </p>
                    </div>

                    <div className="flex items-center gap-3">
                        <div className="relative group self-end">
                            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-[#18357a]/30 group-focus-within:text-[#18357a] transition-colors" size={18} />
                            <input 
                                type="text" 
                                placeholder="Search schedules..." 
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                                className="pl-12 pr-6 py-4 bg-white rounded-2xl border border-slate-200/60 shadow-xl shadow-blue-900/5 focus:ring-2 focus:ring-[#18357a]/5 focus:border-[#18357a]/20 outline-none w-full md:w-80 font-bold text-xs"
                            />
                        </div>
                    </div>
                </div>

                {/* ─── SCHEDULES TABLE ─── */}
                <div className="bg-white rounded-[2.5rem] shadow-2xl shadow-blue-900/5 border border-slate-100 overflow-hidden">
                    {loading ? (
                        <div className="flex flex-col items-center justify-center py-24 space-y-4">
                            <div className="w-10 h-10 border-4 border-[#ffc107] border-t-transparent rounded-full animate-spin" />
                            <p className="text-[10px] font-black text-[#18357a] uppercase tracking-widest">Syncing with server...</p>
                        </div>
                    ) : filteredSchedules.length === 0 ? (
                       <div className="p-24 flex flex-col items-center text-center">
                            <FileText size={48} className="text-slate-100 mb-4" />
                            <h3 className="text-lg font-black text-[#18357a] uppercase mb-1">No Schedules Found</h3>
                            <p className="text-[#64779F] font-bold text-[9px] uppercase tracking-widest transition-colors">Adjust your search or check back later.</p>
                       </div>
                    ) : (
                        <div className="overflow-x-auto">
                            <table className="w-full text-left border-collapse">
                                <thead>
                                    <tr className="bg-[#18357a] text-white font-black text-[10px] uppercase tracking-[0.2em]">
                                        <th className="px-10 py-4 border-r border-white/5">S.NO</th>
                                        <th className="px-10 py-4 border-r border-white/5">REGULATION</th>
                                        <th className="px-10 py-4 border-r border-white/5">EXAMINATION NAME</th>
                                        <th className="px-10 py-4 text-right">DOCUMENT</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {filteredSchedules.map((item, i) => (
                                        <motion.tr
                                            key={item.id || i}
                                            initial={{ opacity: 0 }}
                                            whileInView={{ opacity: 1 }}
                                            onClick={() => window.open(item.pdf_url, '_blank')}
                                            className="group hover:bg-[#ffc107]/5 transition-colors border-b border-slate-50 last:border-0 cursor-pointer"
                                        >
                                            <td className="px-10 py-4 text-[13px] font-bold text-[#333333]">{i + 1}</td>
                                            <td className="px-10 py-4">
                                                <span className="font-bold text-[#333333] text-[13px] uppercase tracking-wider">
                                                    {item.regulation || (item.title && item.title.includes(' - ') ? item.title.split(' - ')[0] : 'OFFICIAL')}
                                                </span>
                                            </td>
                                            <td className="px-10 py-4">
                                                <div className="flex items-center gap-4">
                                                    <div className="w-8 h-8 rounded-lg bg-red-50 flex items-center justify-center text-red-600 group-hover:bg-[#18357a] group-hover:text-white transition-all border border-red-100/50">
                                                        <FileText size={16} />
                                                    </div>
                                                    <span className="font-semibold text-[#333333] text-[14px] tracking-wide uppercase leading-[28.8px] max-w-sm">
                                                        {item.batch || (item.title && item.title.includes(' - ') ? item.title.split(' - ')[1] : item.title)}
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
                                                    className="inline-flex items-center gap-2 px-6 py-3 bg-[#18357a] rounded-xl font-black text-[9px] uppercase tracking-[0.1em] hover:bg-[#ffc107] hover:text-[#18357a] transition-all active:scale-95 shadow-xl shadow-blue-900/20"
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

                {/* ─── INFO SECTION ─── */}
                <div className="mt-20 bg-[#18357a] rounded-[3rem] p-8 md:p-12 relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full translate-x-1/2 -translate-y-1/2" />
                    <div className="absolute bottom-0 left-0 w-32 h-32 bg-[#ffc107]/10 rounded-full -translate-x-1/2 translate-y-1/2" />
                    
                    <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-10">
                        <div className="max-w-xl text-center lg:text-left">
                            <h2 className="text-2xl md:text-3xl font-black text-white uppercase tracking-tight mb-4">
                                Office Of The Controller
                            </h2>
                            <p className="text-white/70 font-bold text-sm leading-relaxed max-w-lg">
                                All schedules are final as of the release date. Students are required to download and keep a physical copy for reference during exams.
                            </p>
                        </div>
                        <div className="flex flex-col sm:flex-row gap-4">
                            <div className="flex items-center gap-4 bg-white/10 backdrop-blur-md border border-white/10 px-6 py-4 rounded-2xl">
                                <div className="w-10 h-10 rounded-full bg-[#ffc107] flex items-center justify-center shadow-lg shadow-[#ffc107]/20">
                                    <MapPin size={18} className="text-[#18357a]" />
                                </div>
                                <div>
                                    <div className="text-[8px] font-black text-white/50 uppercase tracking-widest">Location</div>
                                    <div className="text-[11px] font-black text-white">Main Block, Ground Floor</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default ExamSchedulesPage
