import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Briefcase, Loader2, Image as ImageIcon, X, ArrowLeft } from 'lucide-react'
import axios from 'axios'
import { Link } from 'react-router-dom'

const API_BASE_URL = 'http://localhost:8000'

const Recruitment = () => {
    const [drives, setDrives] = useState([])
    const [loading, setLoading] = useState(true)
    const [selectedPoster, setSelectedPoster] = useState(null)

    useEffect(() => {
        window.scrollTo(0, 0)
        const fetchDrives = async () => {
            try {
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
                
                // Sort by serial_number (manual order)
                const sorted = mapped.sort((a, b) => a.serial_number - b.serial_number)
                setDrives(sorted)
            } catch (err) {
                console.error("Failed to fetch recruitment drives:", err)
            } finally {
                setLoading(false)
            }
        }
        fetchDrives()
    }, [])

    return (
        <div className="min-h-screen bg-[#F8FAFC] pb-20 pt-32 font-sans">
            <div className="mx-auto max-w-7xl px-6 lg:px-10">
                <div className="mb-12">
                    <Link to="/" className="inline-flex items-center gap-2 text-[#64779F] hover:text-[#18357a] font-bold text-sm transition-colors mb-8 group">
                        <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" />
                        Back to Home
                    </Link>
                    
                    <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
                        <div>
                            <div className="inline-flex items-center gap-2 mb-4 px-4 py-1.5 rounded-full bg-[#18357a]/5 border border-[#18357a]/10">
                                <Briefcase size={14} className="text-[#18357a]" />
                                <span className="text-[10px] font-black uppercase tracking-[0.2em] text-[#18357a]">Placement Cell</span>
                            </div>
                            <h1 className="text-4xl lg:text-6xl font-black text-[#18357a] leading-tight">
                                All Recruitment <span className="text-[#ffc107]">Drives</span>
                            </h1>
                            <p className="text-[#64779F] font-bold text-sm lg:text-base mt-4 max-w-2xl">
                                Explore all active and upcoming recruitment notices and institutional posters.
                            </p>
                        </div>

                    </div>
                </div>

                {loading ? (
                    <div className="py-40 flex flex-col items-center justify-center">
                        <Loader2 size={48} className="animate-spin text-[#18357a] mb-4" />
                        <p className="text-[10px] font-black uppercase tracking-widest opacity-40">Loading Database...</p>
                    </div>
                ) : drives.length === 0 ? (
                    <div className="py-40 text-center flex flex-col items-center opacity-30">
                        <ImageIcon size={64} className="text-[#18357a] mb-6" />
                        <h2 className="text-2xl font-black text-[#18357a] uppercase tracking-tight">No Posters Found</h2>
                        <p className="font-bold text-sm mt-2">Publish from admin panel to see content here.</p>
                    </div>
                ) : (
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                        {drives.map((drive, idx) => (
                            <motion.div
                                key={drive.id}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: idx * 0.05 }}
                                onClick={() => setSelectedPoster(drive)}
                                className="group relative bg-white rounded-xl overflow-hidden border border-slate-200 shadow-[0_15px_40px_-15px_rgba(0,0,0,0.3)] hover:shadow-[0_25px_50px_-12px_rgba(0,0,0,0.4)] transition-all duration-300 cursor-pointer"
                            >
                                <div className="relative overflow-hidden bg-white flex items-center justify-center p-2">
                                    {drive.media_url ? (
                                        drive.media_type === 'video' ? (
                                            <video src={drive.media_url} autoPlay muted loop playsInline className="w-full h-auto object-contain rounded-lg" />
                                        ) : (
                                            <img src={drive.media_url} alt="" className="w-full h-auto object-contain rounded-lg" />
                                        )
                                    ) : (
                                        <div className="py-20">
                                            <ImageIcon size={48} className="opacity-10" />
                                        </div>
                                    )}

                                </div>
                            </motion.div>
                        ))}
                    </div>
                )}
            </div>

            {/* Lightbox Pop-up */}
            <AnimatePresence>
                {selectedPoster && (
                    <div className="fixed inset-0 z-[1000] flex items-center justify-center p-2 md:p-10">
                        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setSelectedPoster(null)} className="absolute inset-0 bg-black/80 backdrop-blur-md" />
                        <motion.div initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.9, opacity: 0 }} className="relative max-w-4xl w-full h-full flex flex-col items-center justify-center pointer-events-none">
                            <div className="relative pointer-events-auto bg-white rounded-xl p-1 shadow-2xl">
                                <button 
                                    onClick={() => setSelectedPoster(null)} 
                                    className="absolute -top-3 -right-3 md:-top-4 md:-right-4 bg-red-500 hover:bg-red-600 text-white rounded-full p-2 shadow-xl transition-all z-[1001]"
                                >
                                    <X size={20} />
                                </button>
                                {selectedPoster.media_type === 'video' ? (
                                    <video src={selectedPoster.media_url} controls autoPlay className="max-w-full max-h-[85vh] rounded-lg" />
                                ) : (
                                    <img src={selectedPoster.media_url} alt="" className="max-w-full max-h-[85vh] object-contain rounded-lg" />
                                )}
                            </div>
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>
        </div>
    )
}

export default Recruitment
