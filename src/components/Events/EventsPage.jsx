import { useState, useEffect, useMemo } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Calendar, ArrowLeft, Loader2, MapPin, X, Clock, Award, Mail } from 'lucide-react'
import axios from 'axios'
import { Link } from 'react-router-dom'

const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:8000'

const STATUS_CONFIG = {
  upcoming:  { label: "Upcoming",  color: "text-sky-600",    border: "border-sky-200",     bg: "bg-sky-50",    dotColor: "bg-sky-500"    },
  ongoing:   { label: "Live Now",  color: "text-green-600",  border: "border-green-200",   bg: "bg-green-50",  dotColor: "bg-green-500"  },
  completed: { label: "Completed", color: "text-slate-500",  border: "border-slate-200",   bg: "bg-slate-50",  dotColor: "bg-slate-400"  },
};

// ─── Utilities ────────────────────────────────────────────────────────────────

function formatDate(d) {
  try {
    return new Date(d).toLocaleDateString("en-IN", {
      day: "numeric", month: "long", year: "numeric",
    });
  } catch (e) {
    return d;
  }
}

function formatDateShort(d) {
  try {
    return new Date(d).toLocaleDateString("en-IN", {
      day: "numeric", month: "short",
    });
  } catch (e) {
    return d;
  }
}

// ─── Badges ──────────────────────────────────────────────────

function StatusBadge({ status }) {
  const c = STATUS_CONFIG[status];
  return (
    <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[10px] font-black border ${c.bg} ${c.border} ${c.color} tracking-wide`}>
      <span className={`w-1.5 h-1.5 rounded-full ${c.dotColor} ${status === 'ongoing' ? 'animate-pulse' : ''}`} />
      {c.label}
    </span>
  );
}

// ─── EventCard ────────────────────────────────────────────────────────────────

function EventCard({ event, onOpen }) {
  const isPast = event.status === "completed";

  return (
    <motion.article
      layout
      initial={{ opacity: 0, scale: 0.97 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.96 }}
      whileHover={!isPast ? { y: -5 } : {}}
      transition={{ duration: 0.25 }}
      onClick={onOpen}
      className={`group relative bg-white border border-[#ffc107]/30 hover:border-[#ffc107]/60 rounded-2xl overflow-hidden cursor-pointer transition-all duration-300 ${!isPast ? 'hover:shadow-xl' : ''}`}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => e.key === "Enter" && onOpen()}
    >
      {/* Black fade overlay for past events */}
      {isPast && (
        <div className="absolute inset-0 bg-black/50 z-20 pointer-events-none flex items-center justify-center transition-all duration-300 group-hover:bg-black/45">
          <span className="bg-black/60 text-white border border-white/20 px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest shadow-lg">
            Completed
          </span>
        </div>
      )}

      {/* Image */}
      <div className="relative h-48 overflow-hidden bg-slate-100">
        <img
          src={event.image || 'https://images.unsplash.com/photo-1540575861501-7ad0582371f3?auto=format&fit=crop&q=80&w=800'}
          alt={event.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.06]"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />

        {/* Date Overlay */}
        <div className="absolute bottom-3 left-3 z-10">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-[#224292] text-white text-[10px] font-black uppercase tracking-wider rounded-lg shadow-md border border-white/10">
            <Calendar size={12} />
            {formatDateShort(event.date)}
          </div>
        </div>

        {/* Status Badge - only displayed if NOT past */}
        {!isPast && (
          <div className="absolute top-3 right-3 z-10">
            <StatusBadge status={event.status} />
          </div>
        )}
      </div>

      {/* Body */}
      <div className="p-5 flex flex-col min-h-[150px]">
        <h3
          className="text-[#224292] font-semibold text-[15px] leading-snug mb-4 group-hover:text-[#ffc107] transition-colors line-clamp-2"
        >
          {event.title}
        </h3>
        
        {/* Bottom Location and View More */}
        <div className="pt-3 border-t border-slate-100 flex items-center justify-between mt-auto">
          <div className="flex items-center gap-1.5 text-slate-500 font-medium truncate max-w-[180px]">
            <MapPin size={12} className="text-[#224292]/70 flex-shrink-0" />
            <span className="text-xs font-semibold truncate">{event.venue || 'Main Campus'}</span>
          </div>
          <button
            onClick={(e) => { e.stopPropagation(); onOpen(); }}
            className="text-[10px] font-black text-[#224292] uppercase tracking-widest hover:text-[#ffc107] transition-colors flex items-center gap-1 group/btn flex-shrink-0"
          >
            View More
            <ArrowLeft size={10} className="rotate-180 group-hover/btn:translate-x-0.5 transition-transform" />
          </button>
        </div>
      </div>
    </motion.article>
  );
}

// ─── EventModal ───────────────────────────────────────────────────────────────

function EventModal({ event, onClose }) {
  useEffect(() => {
    document.body.style.overflow = "hidden";
    const onKey = (e) => { if (e.key === "Escape") onClose(); };
    document.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      document.removeEventListener("keydown", onKey);
    };
  }, [onClose]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[1000] flex items-center justify-center p-4"
      onClick={onClose}
    >
      <div className="absolute inset-0 bg-black/60 backdrop-blur-md" />
      <motion.div
        initial={{ opacity: 0, scale: 0.94, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.94, y: 16 }}
        transition={{ duration: 0.3 }}
        onClick={(e) => e.stopPropagation()}
        className="relative bg-white border border-slate-100 rounded-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto shadow-2xl"
        role="dialog"
        aria-modal="true"
        style={{ scrollbarWidth: "none" }}
      >
        {/* Hero image */}
        <div className="relative h-56 overflow-hidden rounded-t-2xl bg-slate-100">
          <img src={event.image} alt={event.title} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
          <div className="absolute top-4 left-4 flex flex-wrap gap-2">
            <StatusBadge status={event.status} />
          </div>
          <button
            onClick={onClose}
            className="absolute top-4 right-4 w-8 h-8 rounded-full bg-black/40 hover:bg-black/60 border border-white/20 flex items-center justify-center text-white transition-all backdrop-blur-sm"
          >
            <X size={14} />
          </button>
        </div>

        <div className="p-6 space-y-6">
          {/* Title */}
          <div>
            <h2 className="text-2xl font-semibold text-[#224292] mb-2 leading-snug">
              {event.title}
            </h2>
            <p className="text-slate-600 text-sm leading-relaxed whitespace-pre-wrap">{event.description}</p>
          </div>

          {/* Details grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              { Icon: Calendar, label: "Date", val: formatDate(event.date) + (event.endDate ? ` – ${formatDate(event.endDate)}` : "") },
              { Icon: MapPin,   label: "Venue", val: event.venue || 'Main Campus Auditorium' },
            ].map(({ Icon, label, val }) => (
              <div key={label} className="bg-slate-50 border border-slate-100/50 rounded-xl p-3 flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-[#224292]/5 flex items-center justify-center flex-shrink-0 text-[#224292]">
                  <Icon size={14} />
                </div>
                <div>
                  <span className="text-[9px] text-slate-400 uppercase tracking-widest font-black block mb-0.5">{label}</span>
                  <span className="text-xs text-[#224292] font-semibold">{val}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

// ─── Main Component ────────────────────────────────────────────────────────────

const EventsPage = () => {
  const [dbEvents, setDbEvents] = useState([])
  const [loading, setLoading] = useState(true)
  const [selectedEvent, setSelectedEvent] = useState(null)

  const getEventStatus = (eventDate, endDate) => {
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    
    const start = new Date(eventDate);
    start.setHours(0, 0, 0, 0);
    
    const end = endDate ? new Date(endDate) : start;
    end.setHours(0, 0, 0, 0);
    
    if (today >= start && today <= end) {
      return "ongoing";
    } else if (today > end) {
      return "completed";
    } else {
      return "upcoming";
    }
  }

  useEffect(() => {
    window.scrollTo(0, 0)
    const fetchEvents = async () => {
      try {
        const res = await axios.get(`${API_BASE_URL}/events/`)
        const items = Array.isArray(res.data) ? res.data : []
        const mapped = items.map(e => {
          const status = getEventStatus(e.event_date, e.end_date);
          return {
            id: e.id,
            title: e.event_name,
            subtitle: e.short_description || "",
            date: e.event_date,
            endDate: e.end_date || undefined,
            time: e.event_time || "09:00 AM",
            venue: e.venue || "Main Campus",
            status: status,
            image: e.media_url || "",
            description: e.short_description || "",
          }
        })
        
        // Sort: upcoming & ongoing first (ascending), then completed (descending)
        const upcoming = mapped.filter(e => e.status !== "completed").sort((a, b) => new Date(a.date) - new Date(b.date));
        const completed = mapped.filter(e => e.status === "completed").sort((a, b) => new Date(b.date) - new Date(a.date));
        
        setDbEvents([...upcoming, ...completed])
      } catch (err) {
        console.error("Failed to fetch events:", err)
      } finally {
        setLoading(false)
      }
    }
    fetchEvents()
  }, [])

  return (
    <div className="min-h-screen bg-[#FCFDFD] pb-20 font-sans">
      
      {/* Page Header */}
      <div className="bg-[#224292] text-white py-12 lg:py-16 relative overflow-hidden">
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

      {/* Dynamic Event Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 min-h-[400px] mt-16 max-w-7xl mx-auto px-6 lg:px-10 items-start">
         {loading ? (
            <div className="col-span-full flex flex-col items-center justify-center py-20 opacity-30">
              <Loader2 size={48} className="animate-spin text-[#224292] mb-4" />
              <p className="text-xs font-black uppercase tracking-widest text-[#224292]">Fetching Events...</p>
            </div>
         ) : dbEvents.length === 0 ? (
             <div className="col-span-full py-20 text-center">
                <Calendar size={48} className="mx-auto text-slate-200 mb-6" />
                <h3 className="text-xl font-bold text-[#224292] mb-2">No Events Found</h3>
                <p className="text-slate-400 text-sm">Stay tuned for upcoming updates and news.</p>
             </div>
         ) : (
            <AnimatePresence mode="popLayout">
              {dbEvents.map((event) => (
                <EventCard key={event.id} event={event} onOpen={() => setSelectedEvent(event)} />
              ))}
            </AnimatePresence>
         )}
      </div>

      {/* Pop-up Modal */}
      <AnimatePresence>
        {selectedEvent && (
          <EventModal event={selectedEvent} onClose={() => setSelectedEvent(null)} />
        )}
      </AnimatePresence>
    </div>
  )
}

export default EventsPage
