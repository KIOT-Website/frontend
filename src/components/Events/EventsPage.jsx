import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Calendar, ArrowLeft, Mic2, Brain, Megaphone, CheckCircle2, Trophy, MonitorPlay, Loader2, MapPin } from 'lucide-react'
import axios from 'axios'
import { Link } from 'react-router-dom'

const API_BASE_URL = 'http://localhost:8000'

const EventsPage = () => {
  const [dbEvents, setDbEvents] = useState([])
  const [loading, setLoading] = useState(true)

  const slugify = (text) => {
    return text.toString().toLowerCase()
      .replace(/\s+/g, '-')
      .replace(/[^\w\-]+/g, '')
      .replace(/\-\-+/g, '-')
      .replace(/^-+/, '')
      .replace(/-+$/, '');
  }

  useEffect(() => {
    window.scrollTo(0, 0)
    const fetchEvents = async () => {
      try {
        const res = await axios.get(`${API_BASE_URL}/events/`)
        setDbEvents(res.data)
      } catch (err) {
        console.error("Failed to fetch events:", err)
      } finally {
        setLoading(false)
      }
    }
    fetchEvents()
  }, [])

  const formatDate = (dateStr) => {
    try {
      const date = new Date(dateStr)
      return date.toLocaleDateString('en-US', {
        month: 'short',
        day: '2-digit',
        year: 'numeric'
      })
    } catch (e) {
      return dateStr
    }
  }



  const records = dbEvents

  return (
    <div className="min-h-screen bg-[#FCFDFD] pb-20">
      
      {/* Page Header */}
      <div className="bg-[#18357a] text-white py-12 lg:py-16 relative overflow-hidden">
        {/* Abstract Background Elements */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#ffc107]/10 rounded-full blur-[100px] translate-x-1/3 -translate-y-1/3" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#224292] rounded-full blur-[120px] -translate-x-1/3 translate-y-1/3 z-0" />
        
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10 text-center">
           <motion.div
             initial={{ opacity: 0, y: 20 }}
             animate={{ opacity: 1, y: 0 }}
           >
             <h1 className="text-4xl md:text-5xl lg:text-6xl font-black font-display mb-0">College <span className="text-[#ffc107]">Events & News</span></h1>
           </motion.div>
        </div>
      </div>

        {/* Dynamic Event Cards Grid - Slightly down from hero */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 min-h-[400px] mt-16 max-w-7xl mx-auto px-6 lg:px-10 items-start">
           {loading ? (
              <div className="col-span-full flex flex-col items-center justify-center py-20 opacity-30">
                <Loader2 size={48} className="animate-spin text-[#18357a] mb-4" />
                <p className="text-xs font-black uppercase tracking-[0.4em] text-[#18357a]">Fetching Events...</p>
              </div>
           ) : records.length === 0 ? (
               <div className="col-span-full py-20 text-center">
                  <Calendar size={48} className="mx-auto text-slate-200 mb-6" />
                  <h3 className="text-xl font-bold text-[#18357a] mb-2">No Events Found</h3>
                  <p className="text-slate-400 text-sm">Stay tuned for upcoming updates and news.</p>
               </div>
           ) : (
              <AnimatePresence mode="popLayout">
                {records.map((ev, idx) => (
                  <motion.div
                    key={ev.id}
                    initial={{ opacity: 0, scale: 0.9, y: 20 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.9, y: 20 }}
                    transition={{ duration: 0.4, delay: idx * 0.1 }}
                    className="bg-white rounded-2xl overflow-hidden border border-[#D5E2F4]/60 shadow-[0_20px_50px_rgba(34,66,146,0.06)] hover:shadow-[0_40px_80px_rgba(34,66,146,0.12)] transition-all duration-500 group flex flex-col"
                  >
                    {/* Card Image */}
                    <div className="aspect-video w-full relative overflow-hidden">
                        {ev.media_type === 'video' ? (
                          <video 
                            src={ev.media_url} 
                            muted loop playsInline 
                            className="w-full h-full object-cover transition-all duration-700" 
                            onMouseOver={e => e.target.play()}
                            onMouseOut={e => e.target.pause()}
                          />
                        ) : (
                          <img 
                            src={ev.media_url} 
                            alt={ev.event_name} 
                            className="w-full h-full object-cover transition-all duration-700" 
                          />
                        )}
                        <div className="absolute inset-0 bg-gradient-to-t from-[#18357a]/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                        
                        <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
                          <div className="px-4 py-2 bg-[#18357a] text-white text-[10px] font-black uppercase tracking-widest flex items-center gap-2 shadow-[0_8px_16px_rgba(0,0,0,0.5)] group-hover:bg-[#ffc107] group-hover:text-[#18357a] transition-all duration-500 rounded-lg">
                             <Calendar size={14} />
                             {formatDate(ev.event_date)}
                          </div>
                          <div className="h-2.5 w-2.5 rounded-full bg-[#ffc107] shadow-[0_0_10px_rgba(255,193,7,0.8)] animate-pulse" />
                        </div>
                    </div>

                    {/* Card Body */}
                    <div className="pt-3 px-5 pb-1 flex flex-col text-left">
                        <div className="mb-2">
                          <h3 className="text-lg lg:text-xl font-black text-[#18357a] font-display leading-[1.2] mb-0 group-hover:text-[#ffc107] transition-colors line-clamp-1">
                             {ev.event_name}
                          </h3>
                        </div>

                        <div className="pt-2 border-t border-[#D5E2F4]/50 flex items-center justify-between">
                          <div className="flex items-center gap-2 text-[#64779F]">
                             <MapPin size={14} className="text-[#ffc107]" />
                             <span className="text-xs font-bold uppercase tracking-wider">{ev.venue || 'KIOT Campus'}</span>
                          </div>
                          
                          <Link 
                            to={`/events/${slugify(ev.event_name)}`}
                            state={{ from: 'gallery', eventId: ev.id }}
                            className="text-[10px] font-black text-[#18357a] uppercase tracking-widest hover:text-[#ffc107] transition-colors flex items-center gap-2 group/btn"
                          >
                             View More
                             <ArrowLeft className="h-3 w-3 rotate-180 group-hover/btn:translate-x-1 transition-transform" />
                          </Link>
                        </div>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
           )}

      </div>
    </div>
  )
}

export default EventsPage
