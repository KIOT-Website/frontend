import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Calendar, ChevronRight, Loader2, Image as ImageIcon, X } from 'lucide-react'
import axios from 'axios'
import { Link } from 'react-router-dom'

const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:8000'

const DEFAULT_POSTER_IMAGE = 'https://images.unsplash.com/photo-1540575861501-7ad0582371f3?auto=format&fit=crop&q=80&w=800';

function getMediaUrl(url) {
  if (!url || typeof url !== 'string' || !url.trim()) return DEFAULT_POSTER_IMAGE;
  let cleanUrl = url.trim();

  if (cleanUrl.startsWith('http://')) {
    cleanUrl = cleanUrl.replace(/^http:\/\//i, 'https://');
  }

  if (cleanUrl.startsWith('//')) {
    cleanUrl = 'https:' + cleanUrl;
  }

  if (cleanUrl.includes('localhost:8000') || cleanUrl.includes('127.0.0.1:8000') || cleanUrl.includes('localhost:5000')) {
    const apiHost = API_BASE_URL.replace(/\/$/, '');
    cleanUrl = cleanUrl.replace(/^https?:\/\/(localhost|127\.0\.0\.1):(8000|5000)/i, apiHost);
  }

  if (cleanUrl.startsWith('/')) {
    const apiHost = API_BASE_URL.replace(/\/$/, '');
    cleanUrl = `${apiHost}${cleanUrl}`;
  } else if (!cleanUrl.startsWith('http://') && !cleanUrl.startsWith('https://') && !cleanUrl.startsWith('data:')) {
    const apiHost = API_BASE_URL.replace(/\/$/, '');
    cleanUrl = `${apiHost}/${cleanUrl}`;
  }

  return cleanUrl;
}

function formatDate(d) {
  try {
    return new Date(d).toLocaleDateString("en-IN", {
      day: "numeric", month: "long", year: "numeric",
    });
  } catch (e) {
    return d;
  }
}

const RecruitmentDrives = () => {
    const [drives, setDrives] = useState([])
    const [loading, setLoading] = useState(true)
    const [selectedPoster, setSelectedPoster] = useState(null)

    useEffect(() => {
        const fetchDrives = async () => {
            try {
                // Fetching from Posters endpoint
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
                
                const sorted = mapped.sort((a, b) => b.id - a.id)
                
                const today = new Date()
                today.setHours(0, 0, 0, 0)
                
                const activeDrives = sorted.filter(drive => {
                    if (!drive.drive_date) return true
                    const driveDate = new Date(drive.drive_date)
                    driveDate.setHours(0, 0, 0, 0)
                    return driveDate >= today
                })
                
                setDrives(activeDrives.slice(0, 3)) // Limit to 3 posters as requested
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
        <section id="recruitment-drives" className="relative pt-0 pb-6 bg-white overflow-hidden font-sans">
            <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden">
                <div className="absolute top-[-10%] right-[-5%] w-[40%] h-[40%] bg-[#224292]/[0.02] rounded-full blur-[100px]" />
                <div className="absolute bottom-[-10%] left-[-5%] w-[40%] h-[40%] bg-[#ffc107]/[0.03] rounded-full blur-[100px]" />
            </div>

            <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-10">
                
                {/* Centered Header */}
                <div className="text-center mb-8 lg:mb-10 px-4">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="flex flex-col items-center"
                    >
                        <h2 className="text-3xl lg:text-5xl font-semibold text-[#224292] font-graphik leading-tight tracking-tight">
                            Institutional <span className="text-[#ffc107]">Posters</span>
                        </h2>
                        <div className="h-1 w-24 bg-gradient-to-r from-transparent via-[#ffc107] to-transparent mt-4 rounded-full" />
                    </motion.div>
                </div>

                {loading ? (
                    <div className="py-20 flex flex-col items-center justify-center opacity-30">
                        <Loader2 size={40} className="animate-spin text-[#224292] mb-4" />
                        <p className="text-[10px] font-black uppercase tracking-widest text-[#224292]">Loading Posters...</p>
                    </div>
                ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10 justify-items-center">
                        {displayDrives.map((drive, idx) => (
                            <motion.div
                                key={drive.id}
                                initial={{ opacity: 0, y: 40, scale: 0.9 }}
                                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                                viewport={{ once: true, margin: "-50px" }}
                                transition={{ duration: 0.7, delay: idx * 0.2, ease: [0.22, 1, 0.36, 1] }}
                                onClick={() => setSelectedPoster(drive)}
                                className="w-full max-w-[360px] group relative bg-white rounded-2xl overflow-hidden border border-[#ffc107]/30 hover:border-[#ffc107]/60 hover:shadow-xl transition-all duration-300 cursor-pointer"
                            >
                                <div className="h-[360px] relative overflow-hidden bg-slate-50 flex items-center justify-center">
                                    {drive.media_url ? (
                                        drive.media_type === 'video' ? (
                                            <video 
                                                src={getMediaUrl(drive.media_url)} 
                                                className="w-full h-full object-cover"
                                                autoPlay muted loop playsInline
                                            />
                                        ) : (
                                            <img 
                                                src={getMediaUrl(drive.media_url)} 
                                                alt={drive.company_name}
                                                className="w-full h-full object-contain p-2 transition-transform duration-700 group-hover:scale-[1.03]"
                                                onError={(e) => {
                                                    e.currentTarget.onerror = null;
                                                    e.currentTarget.src = DEFAULT_POSTER_IMAGE;
                                                }}
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
                        className="text-center mt-10 md:mt-12"
                    >
                        <Link 
                            to="/recruitment"
                            className="group relative inline-flex items-center gap-3 px-6 py-3 bg-[#224292] text-white border border-[#224292] rounded-none font-black text-[12px] uppercase tracking-[0.25em] shadow-[0_10px_30px_rgba(34,66,146,0.1)] hover:shadow-[0_20px_60px_rgba(255,193,7,0.2)] hover:bg-[#ffc107] hover:text-white hover:border-[#ffc107] transition-all duration-500 active:scale-95"
                        >
                            <span className="text-white">View All Posters</span>
                            <ChevronRight size={14} className="text-white transition-transform duration-500 group-hover:translate-x-2" />
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
                            className="absolute inset-0 bg-[#224292]/90 backdrop-blur-xl"
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
                                        src={getMediaUrl(selectedPoster.media_url)} 
                                        controls autoPlay
                                        className="max-w-full max-h-full"
                                    />
                                ) : (
                                    <img 
                                        src={getMediaUrl(selectedPoster.media_url)} 
                                        alt=""
                                        className="max-w-full max-h-full object-contain"
                                        onError={(e) => {
                                            e.currentTarget.onerror = null;
                                            e.currentTarget.src = DEFAULT_POSTER_IMAGE;
                                        }}
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
