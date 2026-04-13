import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Calendar, ArrowLeft, Mic2, Brain, Megaphone, CheckCircle2, Trophy, MonitorPlay, Loader2 } from 'lucide-react'
import axios from 'axios'

const API_BASE_URL = 'http://localhost:8000'

const EventsPage = () => {
  const [dbEvents, setDbEvents] = useState([])
  const [loading, setLoading] = useState(true)

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

  const fallbackEvents = [
    {
      id: "f1",
      event_name: "National Tech Symposium 2026",
      event_date: "2026-03-18",
      short_description: "Explore groundbreaking innovations, coding competitions, and expert-led tech talks from industry leaders.",
      media_url: "https://images.unsplash.com/photo-1540575861501-7ad0582371f3?auto=format&fit=crop&q=80&w=800",
      media_type: "image"
    },
    {
      id: "f2",
      event_name: "Innovation Hackathon",
      event_date: "2026-04-20",
      short_description: "A 48-hour intense coding hackathon for students to solve real-world problems.",
      media_url: "https://images.unsplash.com/photo-1591453089816-0fbb971bac45?auto=format&fit=crop&q=80&w=800",
      media_type: "image"
    }
  ]

  const records = dbEvents.length > 0 ? dbEvents : (loading ? [] : fallbackEvents)

  return (
    <div className="min-h-screen bg-[#FCFDFD] pt-10 pb-20">
      
      {/* Page Header */}
      <div className="bg-[#18357a] text-white py-16 lg:py-24 relative overflow-hidden">
        {/* Abstract Background Elements */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#ffc107]/10 rounded-full blur-[100px] translate-x-1/3 -translate-y-1/3" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#224292] rounded-full blur-[120px] -translate-x-1/3 translate-y-1/3 z-0" />
        
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10 text-center">
           <motion.div
             initial={{ opacity: 0, y: 20 }}
             animate={{ opacity: 1, y: 0 }}
           >
             <h1 className="text-4xl md:text-5xl lg:text-6xl font-black font-display mb-6">College <span className="text-[#ffc107]">Events & News</span></h1>
             <p className="max-w-2xl mx-auto text-white/80 text-lg">Stay connected with everything happening around our vibrant campus, from major symposiums to crucial academic announcements.</p>
           </motion.div>
        </div>
      </div>

        {/* Dynamic Event Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 min-h-[400px]">
           {loading ? (
              <div className="col-span-full flex flex-col items-center justify-center py-20 opacity-30">
                <Loader2 size={48} className="animate-spin text-[#18357a] mb-4" />
                <p className="text-xs font-black uppercase tracking-[0.4em] text-[#18357a]">Fetching Events...</p>
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
                    className="bg-white rounded-[32px] overflow-hidden border border-[#D5E2F4]/60 shadow-[0_20px_50px_rgba(34,66,146,0.06)] hover:shadow-[0_40px_80px_rgba(34,66,146,0.12)] transition-all duration-500 group flex flex-col h-full"
                  >
                    {/* Card Image */}
                    <div className="h-56 w-full relative overflow-hidden">
                        {ev.media_type === 'video' ? (
                          <video 
                            src={ev.media_url} 
                            muted loop playsInline 
                            className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700" 
                            onMouseOver={e => e.target.play()}
                            onMouseOut={e => e.target.pause()}
                          />
                        ) : (
                          <img 
                            src={ev.media_url} 
                            alt={ev.event_name} 
                            className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0" 
                          />
                        )}
                        <div className="absolute inset-0 bg-gradient-to-t from-[#18357a]/80 to-transparent" />
                        
                        <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
                          <div className="px-3 py-1.5 bg-white/20 backdrop-blur-md rounded-lg text-white text-[10px] font-black uppercase tracking-widest flex items-center gap-2">
                             <Calendar size={14} className="text-[#ffc107]" />
                             {formatDate(ev.event_date)}
                          </div>
                          <div className="h-2.5 w-2.5 rounded-full bg-[#ffc107] shadow-[0_0_10px_rgba(255,193,7,0.8)] animate-pulse" />
                        </div>
                    </div>

                    {/* Card Body */}
                    <div className="p-8 flex flex-col flex-grow">
                        <div className="mb-4">
                          <h3 className="text-xl lg:text-2xl font-black text-[#18357a] font-display leading-[1.2] mb-3 group-hover:text-[#ffc107] transition-colors line-clamp-2">
                             {ev.event_name}
                          </h3>
                          <p className="text-[#64779F] text-sm leading-relaxed line-clamp-4">
                             {ev.short_description}
                          </p>
                        </div>

                        <div className="mt-auto pt-6 border-t border-[#D5E2F4]/50 flex items-center justify-between">
                          <span className="text-[10px] font-black text-[#18357a] uppercase tracking-widest">
                             Institutional
                          </span>
                          <div className="h-10 w-10 rounded-full bg-[#18357a]/5 flex items-center justify-center text-[#18357a] group-hover:bg-[#18357a] group-hover:text-white transition-colors cursor-pointer">
                             <ArrowLeft className="h-4 w-4 rotate-180" />
                          </div>
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
