import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Briefcase, Calendar, MapPin, ChevronRight, Loader2, Image as ImageIcon, X } from 'lucide-react'
import axios from 'axios'
import { Link } from 'react-router-dom'

const API_BASE_URL = 'http://localhost:8000'

const RecruitmentDrives = () => {
    const [drives, setDrives] = useState([])
    const [loading, setLoading] = useState(true)
    const [selectedPoster, setSelectedPoster] = useState(null)

    useEffect(() => {
        const fetchDrives = async () => {
            try {
                // Fetching from Posters endpoint as requested: "admin side poster is the frontend recruitment section"
                const res = await axios.get(`${API_BASE_URL}/posters/`)
                const items = Array.isArray(res.data) ? res.data : []
                const mapped = items.map(p => ({
                    id: p.id,
                    company_name: p.poster_name,
                    drive_date: p.poster_date,
                    media_url: p.media_url,
                    media_type: p.media_type || 'image',
                    serial_number: p.serial_number || 999
                }))
                
                const sorted = mapped.sort((a, b) => a.serial_number - b.serial_number)
                setDrives(sorted.slice(0, 2)) // Limit to 2 posters as requested
            } catch (err) {
                console.error("Failed to fetch recruitment drives from posters:", err)
                setDrives([]) 
            } finally {
                setLoading(false)
            }
        }
        fetchDrives()
    }, [])

    const fallbackDrives = [
        {
            id: 'fb1',
            company_name: 'Tech Mahindra',
            drive_date: '2026-04-25',
            media_url: 'https://images.unsplash.com/photo-1521737711867-e3b97375f902?q=80&w=800',
            media_type: 'image',
            serial_number: 1
        },
        {
            id: 'fb2',
            company_name: 'Cognizant',
            drive_date: '2026-05-10',
            media_url: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=800',
            media_type: 'image',
            serial_number: 2
        }
    ]

    const displayDrives = drives.length > 0 ? drives : fallbackDrives

    return (
        <section id="recruitment-drives" className="relative pb-24 lg:pb-32 pt-4 lg:pt-8 bg-white overflow-hidden font-sans">
            <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden">
                <div className="absolute top-[-10%] right-[-5%] w-[40%] h-[40%] bg-[#18357a]/[0.02] rounded-full blur-[100px]" />
                <div className="absolute bottom-[-10%] left-[-5%] w-[40%] h-[40%] bg-[#ffc107]/[0.03] rounded-full blur-[100px]" />
            </div>

            <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-10">
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-6">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="max-w-2xl"
                    >
                        <div className="inline-flex items-center gap-2 mb-4 px-4 py-1.5 rounded-full bg-[#18357a]/5 border border-[#18357a]/10">
                            <Briefcase size={14} className="text-[#18357a]" />
                            <span className="text-[10px] font-black uppercase tracking-[0.2em] text-[#18357a]">Placement Cell</span>
                        </div>
                        <h2 className="text-3xl lg:text-5xl font-black text-[#18357a] leading-tight">
                            Recruitment <span className="text-[#ffc107]">Drives</span>
                        </h2>
                        <p className="text-[#64779F] font-bold text-sm lg:text-base mt-4 max-w-xl">
                            Empowering our students with premium career opportunities.
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <Link to="/recruitment" className="group flex items-center gap-3 px-8 py-4 bg-[#ffc107] text-[#18357a] rounded-2xl font-black text-[10px] uppercase tracking-[0.2em] shadow-xl shadow-yellow-500/10 hover:bg-[#18357a] hover:text-white transition-all active:scale-95 no-underline">
                            View All Drives
                            <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform" />
                        </Link>
                    </motion.div>
                </div>

                {loading ? (
                    <div className="py-20 flex flex-col items-center justify-center opacity-30">
                        <Loader2 size={40} className="animate-spin text-[#18357a] mb-4" />
                        <p className="text-[10px] font-black uppercase tracking-widest">Loading Opportunities...</p>
                    </div>
                ) : (
                    <div className="flex flex-wrap lg:flex-nowrap justify-center gap-8 lg:gap-12">
                        {displayDrives.map((drive, idx) => (
                            <motion.div
                                key={drive.id}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: idx * 0.1 }}
                                onClick={() => setSelectedPoster(drive)}
                                className="w-full md:w-[450px] group relative bg-white rounded-2xl overflow-hidden border border-slate-100 hover:shadow-2xl transition-all duration-500 cursor-pointer"
                            >
                                <div className="aspect-[3/4] relative overflow-hidden bg-slate-50 flex items-center justify-center">
                                    {drive.media_url ? (
                                        drive.media_type === 'video' ? (
                                            <video 
                                                src={drive.media_url} 
                                                className="w-full h-full object-cover"
                                                autoPlay muted loop playsInline
                                            />
                                        ) : (
                                            <img 
                                                src={drive.media_url} 
                                                alt={drive.company_name}
                                                className="w-full h-full object-contain transition-transform duration-700"
                                            />
                                        )
                                    ) : (
                                        <div className="flex flex-col items-center gap-3 opacity-20">
                                            <ImageIcon size={48} />
                                            <span className="text-[10px] font-black uppercase tracking-widest">No Poster Image</span>
                                        </div>
                                    )}
                                </div>
                            </motion.div>
                        ))}
                    </div>
                )}
            </div>

            {/* Poster Pop-up Modal */}
            <AnimatePresence>
                {selectedPoster && (
                    <div className="fixed inset-0 z-[1000] flex items-center justify-center p-4 md:p-10">
                        <motion.div 
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setSelectedPoster(null)}
                            className="absolute inset-0 bg-[#18357a]/90 backdrop-blur-xl"
                        />
                        <motion.div 
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.9, opacity: 0 }}
                            className="relative max-w-5xl w-full h-full flex flex-col items-center justify-center"
                        >
                            <button 
                                onClick={() => setSelectedPoster(null)}
                                className="absolute top-0 right-0 md:-top-16 md:-right-16 bg-white/10 hover:bg-white/20 text-white rounded-full p-4 transition-all"
                            >
                                <X size={32} />
                            </button>
                            
                            <div className="w-full h-full rounded-2xl overflow-hidden bg-black/20 flex items-center justify-center">
                                {selectedPoster.media_type === 'video' ? (
                                    <video 
                                        src={selectedPoster.media_url} 
                                        controls autoPlay
                                        className="max-w-full max-h-full"
                                    />
                                ) : (
                                    <img 
                                        src={selectedPoster.media_url} 
                                        alt=""
                                        className="max-w-full max-h-full object-contain"
                                    />
                                )}
                            </div>
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>
        </section>
    )
}

export default RecruitmentDrives
