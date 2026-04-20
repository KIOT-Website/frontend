import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Calendar, Mic2, Brain, Megaphone, ArrowRight, Timer, Loader2, ChevronRight, MapPin } from 'lucide-react'
import axios from 'axios'
import { Link } from 'react-router-dom'

const API_BASE_URL = 'http://localhost:8000'

const Events = ({ onEventsClick }) => {
  const [dbEvents, setDbEvents] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const res = await axios.get(`${API_BASE_URL}/events/`)
        // Sort by date descending and take top 3 for home page
        const sorted = res.data.sort((a, b) => new Date(b.event_date) - new Date(a.event_date))
        setDbEvents(sorted.slice(0, 3))
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

  // Fallback data if DB is empty or fetching fails
  const fallbackEvents = [
    {
      id: "f1",
      event_name: "National Tech Symposium",
      event_date: "2026-03-18",
      short_description: "Explore groundbreaking innovations, coding competitions, and expert-led tech talks from industry leaders.",
      media_type: "image",
      media_url: "https://images.unsplash.com/photo-1540575861501-7ad0582371f3?auto=format&fit=crop&q=80&w=800",
    },
    {
      id: "f2",
      event_name: "AI & Machine Learning Workshop",
      event_date: "2026-03-12",
      short_description: "Hands-on training session with real-world datasets and model building using industry-standard tools.",
      media_type: "image",
      media_url: "https://images.unsplash.com/photo-1591453089816-0fbb971bac45?auto=format&fit=crop&q=80&w=800",
    },
    {
      id: "f3",
      event_name: "Admissions Open 2026",
      event_date: "2026-03-05",
      short_description: "Apply now for academic year 2026.",
      media_type: "image",
      media_url: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&q=80&w=800",
    }
  ]

  const records = dbEvents.length > 0 ? dbEvents : (loading ? [] : fallbackEvents)

  const slugify = (text) => {
    return text.toString().toLowerCase()
      .replace(/\s+/g, '-')           // Replace spaces with -
      .replace(/[^\w\-]+/g, '')       // Remove all non-word chars
      .replace(/\-\-+/g, '-')         // Replace multiple - with single -
      .replace(/^-+/, '')             // Trim - from start of text
      .replace(/-+$/, '');            // Trim - from end of text
  }

  return (
    <section id="events" className="relative py-16 lg:py-24 bg-[#FCFDFD] overflow-hidden">
      
      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-10">
        
        {/* Centered Header Section */}
        <div className="text-center mb-16 lg:mb-20 px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col items-center"
          >
            <div className="inline-flex items-center gap-2 mb-6 px-5 py-2 rounded-full bg-[#18357a]/5 border border-[#18357a]/10">
              <Timer size={14} className="text-[#ffc107]" />
              <span className="text-[10px] font-black uppercase tracking-[0.3em] text-[#18357a]">Institutional Hub</span>
            </div>
            
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-[#18357a] font-display leading-tight tracking-tight">
              Upcoming <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ffc107] to-[#e0a800]">Events</span>
            </h2>
            
            <div className="h-1 w-24 bg-gradient-to-r from-transparent via-[#ffc107] to-transparent mt-6 rounded-full" />
          </motion.div>
        </div>

        {/* CARD GRID LAYOUT */}
        <div className="max-w-7xl mx-auto">
           {loading ? (
             <div className="flex flex-col items-center justify-center py-24 opacity-30">
                <Loader2 size={48} className="animate-spin text-[#18357a] mb-6" />
                <p className="text-xs font-black uppercase tracking-[0.4em] text-[#18357a]">Fetching Latest Buzz...</p>
             </div>
           ) : records.length === 0 ? (
             <div className="text-center py-20 bg-slate-50 rounded-[2.5rem] border-2 border-dashed border-slate-100">
                <Calendar size={48} className="mx-auto text-slate-200 mb-4" />
                <p className="font-black text-[10px] uppercase tracking-widest text-slate-400">No events found at the moment</p>
             </div>
           ) : (
             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
                {records.map((event, idx) => (
                  <motion.div
                    key={event.id}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: idx * 0.1 }}
                  >
                    <Link 
                      to={`/events/${slugify(event.event_name)}`} 
                      state={{ from: 'home', eventId: event.id }}
                      className="group flex flex-col bg-white rounded-2xl overflow-hidden border border-slate-100 shadow-[0_15px_40px_rgba(34,66,146,0.04)] hover:shadow-[0_40px_80px_rgba(34,66,146,0.12)] hover:border-[#ffc107]/20 transition-all duration-700 h-full active:scale-[0.98]"
                    >
                       {/* Image with Integrated Date Badge */}
                       <div className="relative aspect-video overflow-hidden">
                          <img 
                            src={event.media_url || 'https://images.unsplash.com/photo-1540575861501-7ad0582371f3?auto=format&fit=crop&q=80&w=800'} 
                            alt={event.event_name}
                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-40 group-hover:opacity-60 transition-opacity" />
                          
                          {/* Kongu-Style Date Badge (Bottom Left) */}
                          <div className="absolute bottom-6 left-6 z-20">
                             <div className="inline-flex items-center gap-3 px-5 py-2 bg-[#ffc107] rounded-full shadow-[0_10px_30px_rgba(255,193,7,0.3)] border-2 border-white/20">
                                <span className="text-[10px] font-black text-[#18357a] uppercase tracking-widest">
                                  {formatDate(event.event_date).split(' ')[0]} {formatDate(event.event_date).split(' ')[1].replace(',', '')}, {formatDate(event.event_date).split(' ')[2]}
                                </span>
                             </div>
                          </div>
                       </div>

                       {/* Event Title Below Image - Reduced Padding */}
                       <div className="p-6 flex flex-grow items-center">
                          <h3 className="text-lg lg:text-xl font-black text-[#18357a] group-hover:text-[#ffc107] transition-colors duration-500 leading-tight">
                            {event.event_name}
                          </h3>
                       </div>
                    </Link>
                  </motion.div>
                ))}
             </div>
           )}
        </div>

        {/* View All Button - Centered at Bottom */}
        {!loading && records.length > 0 && (
           <motion.div 
             initial={{ opacity: 0, y: 30 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             transition={{ delay: 0.3 }}
             className="text-center mt-12"
           >
              <Link 
                to="/events"
                className="group relative inline-flex items-center gap-6 px-10 py-5 bg-[#18357a] text-white border border-[#18357a] rounded-none font-black text-[12px] uppercase tracking-[0.25em] shadow-[0_10px_30px_rgba(34,66,146,0.1)] hover:shadow-[0_20px_60px_rgba(255,193,7,0.2)] hover:bg-[#ffc107] hover:text-white hover:border-[#ffc107] transition-all duration-500 active:scale-95"
              >
                 <span className="text-white">View All Events</span>
                 <ArrowRight size={18} className="text-white transition-transform duration-500 group-hover:translate-x-2" />
              </Link>
           </motion.div>
        )}
      </div>
    </section>
  )
}

export default Events
