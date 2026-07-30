import { useState, useEffect, useMemo } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Calendar, Clock, MapPin, Award, ArrowRight, X, Loader2 } from 'lucide-react'
import axios from 'axios'
import { Link } from 'react-router-dom'

const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:8000'

// ─── Config ───────────────────────────────────────────────────────────────────

const STATUS_CONFIG = {
  upcoming:  { label: "Upcoming",  color: "text-sky-600",    border: "border-sky-200",     bg: "bg-sky-50",    dotColor: "bg-sky-500"    },
  ongoing:   { label: "Live Now",  color: "text-green-600",  border: "border-green-200",   bg: "bg-green-50",  dotColor: "bg-green-500"  },
  completed: { label: "Completed", color: "text-slate-500",  border: "border-slate-200",   bg: "bg-slate-50",  dotColor: "bg-slate-400"  },
};

const DEFAULT_EVENT_IMAGE = 'https://images.unsplash.com/photo-1540575861501-7ad0582371f3?auto=format&fit=crop&q=80&w=800';

function getMediaUrl(url) {
  if (!url || typeof url !== 'string' || !url.trim()) return DEFAULT_EVENT_IMAGE;
  let cleanUrl = url.trim();

  // If a Cloudinary raw pdf URL was mistakenly created for an image file
  if (cleanUrl.includes('res.cloudinary.com') && cleanUrl.includes('/raw/upload/') && /\.(jpe?g|png|webp|gif)_.*\.pdf$/i.test(cleanUrl)) {
    cleanUrl = cleanUrl.replace('/raw/upload/', '/image/upload/').replace(/\.pdf$/i, '');
  }

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

function formatEventDateRangeShort(startDateStr, endDateStr) {
  if (!startDateStr) return '';
  try {
    const start = new Date(startDateStr);
    if (isNaN(start.getTime())) return startDateStr;

    const startDay = start.getDate();
    const startMonth = start.toLocaleDateString("en-IN", { month: "short" }).toUpperCase();

    if (!endDateStr) {
      return `${startDay} ${startMonth}`;
    }

    const end = new Date(endDateStr);
    if (isNaN(end.getTime()) || start.toDateString() === end.toDateString()) {
      return `${startDay} ${startMonth}`;
    }

    const endDay = end.getDate();
    const endMonth = end.toLocaleDateString("en-IN", { month: "short" }).toUpperCase();

    if (start.getMonth() === end.getMonth() && start.getFullYear() === end.getFullYear()) {
      return `${startDay} - ${endDay} ${startMonth}`;
    }

    return `${startDay} ${startMonth} - ${endDay} ${endMonth}`;
  } catch (e) {
    return startDateStr;
  }
}

function formatEventDateRangeLong(startDateStr, endDateStr) {
  if (!startDateStr) return '';
  try {
    const start = new Date(startDateStr);
    if (isNaN(start.getTime())) return startDateStr;

    const startFormatted = start.toLocaleDateString("en-IN", { day: "numeric", month: "long", year: "numeric" });

    if (!endDateStr) return startFormatted;

    const end = new Date(endDateStr);
    if (isNaN(end.getTime()) || start.toDateString() === end.toDateString()) {
      return startFormatted;
    }

    const endFormatted = end.toLocaleDateString("en-IN", { day: "numeric", month: "long", year: "numeric" });

    if (start.getMonth() === end.getMonth() && start.getFullYear() === end.getFullYear()) {
      const monthYear = start.toLocaleDateString("en-IN", { month: "long", year: "numeric" });
      return `${start.getDate()} – ${end.getDate()} ${monthYear}`;
    }

    return `${startFormatted} – ${endFormatted}`;
  } catch (e) {
    return startDateStr;
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
      whileHover={{ y: -5 }}
      transition={{ duration: 0.25 }}
      onClick={onOpen}
      className="group relative bg-white border border-[#ffc107]/30 hover:border-[#ffc107]/60 rounded-2xl overflow-hidden cursor-pointer transition-all duration-300 hover:shadow-xl flex flex-col h-full"
      role="button"
      tabIndex={0}
      onKeyDown={(e) => e.key === "Enter" && onOpen()}
    >
      {/* Image */}
      <div className="relative h-48 overflow-hidden bg-slate-100">
        <img
          src={getMediaUrl(event.image)}
          alt={event.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.06]"
          loading="lazy"
          onError={(e) => {
            e.currentTarget.onerror = null;
            e.currentTarget.src = DEFAULT_EVENT_IMAGE;
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />

        {/* Date Overlay */}
        <div className="absolute bottom-3 left-3 z-10">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-[#224292] text-white text-[10px] font-black uppercase tracking-wider rounded-lg shadow-md border border-white/10">
            <Calendar size={12} />
            {formatEventDateRangeShort(event.date, event.endDate)}
          </div>
        </div>

        {/* Status Badge */}
        <div className="absolute top-3 right-3 z-10">
          <StatusBadge status={event.status} />
        </div>
      </div>

      {/* Body */}
      <div className="p-5 flex flex-col flex-1">
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
            <ArrowRight size={10} className="group-hover/btn:translate-x-0.5 transition-transform" />
          </button>
        </div>
      </div>
    </motion.article>
  );
}

// ─── CompletedEventCard (For Marquee) ────────────────────────────────────────

function CompletedEventCard({ event, onOpen }) {
  return (
    <div
      onClick={onOpen}
      className="group/c flex-shrink-0 w-[290px] sm:w-[330px] bg-white border border-slate-200/80 hover:border-[#ffc107] rounded-2xl overflow-hidden cursor-pointer shadow-sm hover:shadow-xl transition-all duration-300 mx-3 select-none"
    >
      <div className="relative h-40 overflow-hidden bg-slate-100">
        <img
          src={getMediaUrl(event.image)}
          alt={event.title}
          className="w-full h-full object-cover group-hover/c:scale-105 transition-transform duration-500"
          loading="lazy"
          onError={(e) => {
            e.currentTarget.onerror = null;
            e.currentTarget.src = DEFAULT_EVENT_IMAGE;
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
        <div className="absolute top-3 left-3">
          <span className="bg-black/60 backdrop-blur-md text-white border border-white/20 px-2.5 py-0.5 rounded-full text-[9px] font-black uppercase tracking-wider">
            Completed
          </span>
        </div>
        <div className="absolute bottom-3 left-3 right-3 text-white">
          <span className="text-[10px] font-bold uppercase tracking-wider text-amber-300 block mb-0.5">
            {formatEventDateRangeShort(event.date, event.endDate)}
          </span>
          <h4 className="font-bold text-sm leading-tight text-white line-clamp-1 group-hover/c:text-[#ffc107] transition-colors">
            {event.title}
          </h4>
        </div>
      </div>
      <div className="p-3.5 bg-slate-50/50 flex items-center justify-between">
        <div className="flex items-center gap-1.5 text-slate-500 text-xs font-semibold truncate max-w-[180px]">
          <MapPin size={12} className="text-[#224292] flex-shrink-0" />
          <span className="truncate">{event.venue || 'Main Campus'}</span>
        </div>
        <span className="text-[10px] font-black text-[#224292] uppercase tracking-widest group-hover/c:text-[#ffc107] flex items-center gap-1">
          Details <ArrowRight size={10} />
        </span>
      </div>
    </div>
  );
}

function CompletedEventsMarquee({ completedEvents, onOpen, hasUpcoming }) {
  if (!completedEvents || completedEvents.length === 0) return null;

  let marqueeItems = [...completedEvents];
  while (marqueeItems.length < 6) {
    marqueeItems = [...marqueeItems, ...completedEvents];
  }
  const duplicatedList = [...marqueeItems, ...marqueeItems];

  return (
    <div className={hasUpcoming ? "mt-12 pt-8 border-t border-slate-200/60" : "mt-2"}>
      <div className="flex flex-col items-center mb-6 text-center px-4">
        <h3 className="text-xl md:text-2xl font-bold text-[#224292]">
          Events <span className="text-[#ffc107]">Highlights</span>
        </h3>
      </div>

      <div className="relative w-full overflow-hidden py-4 select-none">
        <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-[#FCFDFD] to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-[#FCFDFD] to-transparent z-10 pointer-events-none" />

        <div className="flex w-max animate-marquee hover:[animation-play-state:paused]">
          {duplicatedList.map((event, idx) => (
            <CompletedEventCard key={`${event.id}-${idx}`} event={event} onOpen={() => onOpen(event)} />
          ))}
        </div>
      </div>
    </div>
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
          <img
            src={getMediaUrl(event.image)}
            alt={event.title}
            className="w-full h-full object-cover"
            onError={(e) => {
              e.currentTarget.onerror = null;
              e.currentTarget.src = DEFAULT_EVENT_IMAGE;
            }}
          />
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
              { Icon: Calendar, label: "Date", val: formatEventDateRangeLong(event.date, event.endDate) },
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

const Events = () => {
  const [upcomingEvents, setUpcomingEvents] = useState([])
  const [completedEvents, setCompletedEvents] = useState([])
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
    const fetchEvents = async () => {
      try {
        const res = await axios.get(`${API_BASE_URL}/events/`).catch(() => null)
        if (res && res.data) {
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

          const upcoming = mapped.filter(e => e.status !== "completed").sort((a, b) => new Date(a.date) - new Date(b.date));
          const completed = mapped.filter(e => e.status === "completed").sort((a, b) => new Date(b.date) - new Date(a.date));

          setUpcomingEvents(upcoming);
          setCompletedEvents(completed);
        }
      } catch (err) {
        // Silently handle backend offline state
      } finally {
        setLoading(false)
      }
    }
    fetchEvents()
  }, [])

  if (!loading && upcomingEvents.length === 0 && completedEvents.length === 0) return null;

  return (
    <section id="events" className="relative pt-6 pb-2 bg-[#FCFDFD] overflow-hidden font-sans">
      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-10">
        
        {/* Header */}
        <div className="text-center mb-8 lg:mb-10 px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col items-center"
          >
            <h2 className="text-3xl lg:text-5xl font-semibold text-[#224292] font-graphik leading-tight tracking-tight">
              What's <span className="text-[#ffc107]">Happening</span> on Campus
            </h2>
            <div className="h-1 w-24 bg-gradient-to-r from-transparent via-[#ffc107] to-transparent mt-4 rounded-full" />
          </motion.div>
        </div>

        {/* Active Events Grid */}
        <div className="max-w-7xl mx-auto">
          {loading ? (
            <div className="flex flex-col items-center justify-center py-20 opacity-30">
              <Loader2 size={40} className="animate-spin text-[#224292] mb-4" />
              <p className="text-xs font-black uppercase tracking-widest text-[#224292]">Fetching Latest Buzz...</p>
            </div>
          ) : (
            <>
              {upcomingEvents.length > 0 && (
                <>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                    <AnimatePresence mode="popLayout">
                      {upcomingEvents.slice(0, 3).map((event) => (
                        <EventCard key={event.id} event={event} onOpen={() => setSelectedEvent(event)} />
                      ))}
                    </AnimatePresence>
                  </div>

                  {/* View All Button */}
                  <motion.div 
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                    className="text-center mt-10"
                  >
                    <Link 
                      to="/events"
                      className="group relative inline-flex items-center gap-3 px-6 py-3 bg-[#224292] text-white border border-[#224292] rounded-none font-black text-[12px] uppercase tracking-[0.25em] shadow-[0_10px_30px_rgba(34,66,146,0.1)] hover:shadow-[0_20px_60px_rgba(255,193,7,0.2)] hover:bg-[#ffc107] hover:text-white hover:border-[#ffc107] transition-all duration-500 active:scale-95"
                    >
                      <span className="text-white">View All Events</span>
                      <ArrowRight size={14} className="text-white transition-transform duration-500 group-hover:translate-x-2" />
                    </Link>
                  </motion.div>
                </>
              )}

              {/* Completed Events Marquee (Running Right to Left) */}
              {completedEvents.length > 0 && (
                <CompletedEventsMarquee completedEvents={completedEvents} onOpen={(ev) => setSelectedEvent(ev)} hasUpcoming={upcomingEvents.length > 0} />
              )}
            </>
          )}
        </div>
      </div>

      {/* Pop-up Modal */}
      <AnimatePresence>
        {selectedEvent && (
          <EventModal event={selectedEvent} onClose={() => setSelectedEvent(null)} />
        )}
      </AnimatePresence>
    </section>
  )
}

export default Events
