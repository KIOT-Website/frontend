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
        // The API returns events sorted by date or ID. 
        // We'll take the first 3 for the home page.
        setDbEvents(res.data.slice(0, 3))
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
       short_description: "Apply now for various Engineering (UG) and Management (PG) programs for the upcoming academic session.",
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
        
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 lg:mb-20 gap-8">
            <div className="max-w-2xl">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                className="inline-flex items-center gap-2 mb-5 bg-[#18357a]/5 px-4 py-1.5 rounded-full border border-[#18357a]/10"
              >
                <Timer size={14} className="text-[#ffc107]" />
                <span className="text-[10px] font-black uppercase tracking-[0.3em] text-[#18357a]">Institutional Hub</span>
              </motion.div>
              <h2 className="text-4xl lg:text-6xl font-black text-[#18357a] font-display leading-[1.1]">
                Upcoming <span className="text-[#ffc107]">Events</span>
              </h2>
           </div>
           

        </div>

        {/* LIST LAYOUT */}
        <div className="max-w-5xl mx-auto space-y-6">
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
             <div className="space-y-4">
                {records.map((event, idx) => (
                  <motion.div
                    key={event.id}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: idx * 0.1 }}
                  >
                    <Link 
                      to={`/events/${slugify(event.event_name)}`} 
                      state={{ from: 'home', eventId: event.id }}
                      className="group bg-white rounded-3xl p-5 lg:p-6 border border-[#D5E2F4]/60 shadow-[0_10px_40px_rgba(34,66,146,0.03)] hover:shadow-[0_30px_70px_rgba(34,66,146,0.1)] hover:border-[#ffc107]/30 transition-all duration-500 flex flex-col md:flex-row md:items-center gap-6 lg:gap-10 relative overflow-hidden active:scale-[0.98]"
                    >
                       <div className="absolute top-0 right-0 w-32 h-32 bg-[#18357a]/[0.02] rounded-bl-full -mr-16 -mt-16 group-hover:bg-[#ffc107]/5 transition-colors" />
                       
                       {/* Date Badge */}
                       <div className="flex flex-col items-center justify-center min-w-[90px] h-[90px] md:min-w-[85px] md:h-[85px] bg-slate-50 rounded-2xl border border-slate-100 group-hover:bg-[#18357a] group-hover:border-[#18357a] transition-all duration-500 flex-shrink-0 self-center md:self-auto shadow-sm group-hover:shadow-lg group-hover:-translate-y-1 md:group-hover:translate-y-0">
                          <span className="text-[9px] font-black uppercase tracking-[0.2em] text-[#64779F] group-hover:text-white/70 mb-0.5 transition-colors">
                             {formatDate(event.event_date).split(' ')[0]}
                          </span>
                          <span className="text-3xl md:text-2xl font-black text-[#18357a] group-hover:text-[#ffc107] transition-colors">
                             {formatDate(event.event_date).split(' ')[1].replace(',', '')}
                          </span>
                          <span className="text-[9px] font-black uppercase tracking-[0.2em] text-[#18357a] group-hover:text-white transition-colors">
                             {formatDate(event.event_date).split(' ')[2]}
                          </span>
                       </div>

                       {/* Main Content */}
                       <div className="flex-grow text-center md:text-left">
                          <div className="flex items-center justify-center md:justify-start gap-2 mb-3">
                             <div className="h-1.5 w-1.5 rounded-full bg-green-500 animate-pulse shadow-[0_0_8px_rgba(34,197,94,0.6)]" />
                             <span className="text-[9px] font-black text-[#18357a] uppercase tracking-[0.25em] opacity-70">Registration Open</span>
                          </div>
                          
                          <h3 className="text-xl md:text-xl lg:text-2xl font-black text-[#18357a] md:group-hover:translate-x-2 transition-all duration-500 leading-tight mb-4">
                            {event.event_name}
                          </h3>
                          
                          <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4 sm:gap-6">
                             <div className="flex items-center gap-2 text-[#64779F]">
                                <div className="p-1.5 rounded-lg bg-[#ffc107]/10">
                                   <Calendar size={14} className="text-[#ffc107]" />
                                </div>
                                <span className="text-[11px] font-bold uppercase tracking-wider text-[#18357a]/80">
                                  {formatDate(event.event_date)}
                                  {event.end_date && event.end_date !== event.event_date && (
                                    ` - ${formatDate(event.end_date)}`
                                  )}
                                </span>
                             </div>
                             <div className="flex items-center gap-2 text-[#64779F]">
                                <div className="p-1.5 rounded-lg bg-[#18357a]/5">
                                   <MapPin size={14} className="text-[#18357a]" />
                                </div>
                                <span className="text-[11px] font-bold uppercase tracking-wider text-[#18357a]/80">{event.venue || 'Main Auditorium'}</span>
                             </div>
                          </div>
                       </div>

                       {/* Action */}
                       <div className="flex items-center justify-center md:justify-end gap-3 flex-shrink-0 md:ml-auto w-full md:w-auto pt-4 md:pt-0 border-t border-slate-50 md:border-0">
                          <span className="flex-grow md:flex-grow-0 text-center bg-[#18357a] text-white px-6 py-3 rounded-xl text-[10px] font-black uppercase tracking-[0.2em] group-hover:bg-[#ffc107] group-hover:text-[#18357a] transition-all duration-500 shadow-md group-hover:shadow-[#ffc107]/20">
                            View Details
                          </span>
                          <div className="h-12 w-12 rounded-full border border-slate-100 flex items-center justify-center group-hover:bg-[#18357a] group-hover:text-white group-hover:border-[#18357a] transition-all duration-500 shadow-sm hidden sm:flex">
                             <ChevronRight size={18} />
                          </div>
                       </div>
                    </Link>
                  </motion.div>
                ))}
             </div>
           )}
        </div>
      </div>
    </section>
  )
}

export default Events
