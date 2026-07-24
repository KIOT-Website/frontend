import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { 
    Bell, FileText, ExternalLink, Calendar, Loader2 
} from 'lucide-react'

const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:8000'

const CircularsPage = () => {
    const [circulars, setCirculars] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        const fetchCirculars = async () => {
            try {
                const res = await fetch(`${API_BASE_URL}/coe-circulars/`)
                if (res.ok) {
                    const data = await res.json()
                    setCirculars(data)
                }
            } catch (err) {
                console.error("Failed to fetch circulars", err)
            } finally {
                setIsLoading(false)
            }
        }
        fetchCirculars()
    }, [])

    return (
        <div className="min-h-screen bg-[#F8FAFC] font-graphik pb-24">
            
            {/* ─── HEADER SECTION ─── */}
            <div className="bg-[#224292] pt-12 pb-20 relative overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:32px_32px] opacity-5" />
                <div className="max-w-[1400px] mx-auto px-6 relative z-10 text-center md:text-left">
                    <div className="max-w-3xl">
                        <div className="flex items-center justify-center md:justify-start gap-4 mb-4">
                            <div className="w-12 h-1 bg-[#ffc107] rounded-full" />
                            <span className="text-[#ffc107] text-[12px] font-black uppercase tracking-[0.3em]">Official Notifications</span>
                        </div>
                        <h1 className="text-4xl md:text-5xl font-black text-white tracking-tighter mb-4 leading-tight">
                            Circulars & <span className="text-[#ffc107]">Announcements</span>
                        </h1>
                        {/* Removed static text and hero marquee to keep header compact */}
                    </div>
                </div>
            </div>

            {/* ─── CONTENT SECTION ─── */}
            <div className="max-w-[1400px] mx-auto px-6 -mt-10 relative z-20">
                {isLoading ? (
                    <div className="bg-white rounded-3xl p-24 border border-slate-100/50 shadow-xl shadow-slate-200/40 text-center flex flex-col items-center justify-center space-y-4 max-w-4xl mx-auto">
                        <Loader2 className="animate-spin text-[#224292]" size={40} />
                        <span className="text-[10px] font-black text-[#224292] uppercase tracking-[0.3em] opacity-40">Loading Notifications...</span>
                    </div>
                ) : circulars.length === 0 ? (
                    <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4 }}
                        className="bg-white p-16 rounded-3xl border border-slate-100 text-center shadow-xl shadow-slate-200/40 max-w-4xl mx-auto"
                    >
                        <div className="w-20 h-20 bg-slate-50 rounded-full flex items-center justify-center text-[#224292] mx-auto mb-6 shadow-inner">
                            <Bell size={32} className="text-[#ffc107]" />
                        </div>
                        <h3 className="text-2xl font-black text-[#224292] mb-3">No Active Circulars</h3>
                        <p className="text-slate-400 font-bold max-w-md mx-auto leading-relaxed">
                            Upcoming exam circulars, academic notices, and official announcements will be published here in the future.
                        </p>
                    </motion.div>
                ) : (
                    <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4 }}
                        className="bg-white p-6 md:p-8 rounded-3xl border border-slate-100 shadow-xl shadow-slate-200/40 max-w-2xl mx-auto overflow-hidden"
                    >
                        <marquee 
                            direction="up" 
                            scrollamount="1.5" 
                            height="180px" 
                            className="w-full"
                            onMouseOver={(e) => e.currentTarget.stop()} 
                            onMouseOut={(e) => e.currentTarget.start()}
                        >
                            {circulars.map((item) => (
                                <div
                                    key={item.id}
                                    className="group flex flex-col md:flex-row md:items-center justify-between gap-4 py-4 border-b border-slate-100 last:border-0"
                                >
                                    <div className="flex items-center gap-3.5">
                                        <div className="w-10 h-10 rounded-lg bg-red-50 text-red-600 flex items-center justify-center transition-all duration-300 shadow-inner shrink-0">
                                            <FileText size={18} />
                                        </div>
                                        <div>
                                            <h3 className="text-sm md:text-base font-extrabold text-[#224292] leading-snug transition-colors duration-300 uppercase tracking-wide">
                                                {item.title}
                                            </h3>
                                            <div className="flex items-center gap-1.5 mt-1 text-slate-400 font-bold text-[10px] uppercase tracking-wider">
                                                <Calendar size={11} className="text-[#ffc107]" />
                                                <span>Date: {item.date}</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="shrink-0 flex items-center">
                                        <a 
                                            href={item.pdf_url} 
                                            target="_blank" 
                                            rel="noreferrer" 
                                            className="w-full md:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg font-black text-[10px] uppercase tracking-widest transition-all shadow-sm"
                                            style={{ backgroundColor: '#ffc107', color: '#224292' }}
                                        >
                                            <span style={{ color: '#224292' }} className="font-black">View PDF</span>
                                            <ExternalLink size={12} style={{ color: '#224292' }} />
                                        </a>
                                    </div>
                                </div>
                            ))}
                        </marquee>
                    </motion.div>
                )}
            </div>

        </div>
    )
}

export default CircularsPage
