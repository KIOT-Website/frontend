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



    const displayDrives = drives

    if (!loading && displayDrives.length === 0) return null;

    return (
        <section id="recruitment-drives" className="relative py-6 lg:py-10 bg-white overflow-hidden font-sans">
            <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden">
                <div className="absolute top-[-10%] right-[-5%] w-[40%] h-[40%] bg-[#18357a]/[0.02] rounded-full blur-[100px]" />
                <div className="absolute bottom-[-10%] left-[-5%] w-[40%] h-[40%] bg-[#ffc107]/[0.03] rounded-full blur-[100px]" />
            </div>

            <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-10">
                <div className="text-center mb-10 lg:mb-12 px-4">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="flex flex-col items-center"
                    >
                        <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-[#18357a] leading-tight">
                            Recruitment <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ffc107] to-[#e0a800]">Drives</span>
                        </h2>
                        <div className="h-1 w-24 bg-gradient-to-r from-transparent via-[#ffc107] to-transparent mt-6 rounded-full" />
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

                {/* View All Button - Centered at Bottom */}
                {!loading && (
                    <motion.div 
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 }}
                        className="text-center mt-12 md:mt-16"
                    >
                        <Link 
                            to="/recruitment"
                            className="group relative inline-flex items-center gap-6 px-10 py-5 bg-[#18357a] text-white border border-[#18357a] rounded-none font-black text-[12px] uppercase tracking-[0.25em] shadow-[0_10px_30px_rgba(34,66,146,0.1)] hover:shadow-[0_20px_60px_rgba(255,193,7,0.2)] hover:bg-[#ffc107] hover:text-white hover:border-[#ffc107] transition-all duration-500 active:scale-95"
                        >
                            <span className="text-white">View All Drives</span>
                            <ChevronRight size={18} className="text-white transition-transform duration-500 group-hover:translate-x-2" />
                        </Link>
                    </motion.div>
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
