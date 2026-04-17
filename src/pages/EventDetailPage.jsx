import { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Calendar, ArrowLeft, Timer, MapPin, Loader2, Phone, Mail } from 'lucide-react'
import axios from 'axios'

const API_BASE_URL = 'http://localhost:8000'

const EventDetailPage = () => {
    const { eventSlug } = useParams()
    const [event, setEvent] = useState(null)
    const [loading, setLoading] = useState(true)

    const slugify = (text) => {
        return text.toString().toLowerCase()
          .replace(/\s+/g, '-')
          .replace(/[^\w\-]+/g, '')
          .replace(/\-\-+/g, '-')
          .replace(/^-+/, '')
          .replace(/-+$/, '');
    }

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

    useEffect(() => {
        window.scrollTo(0, 0)
        const fetchEvent = async () => {
            try {
                const res = await axios.get(`${API_BASE_URL}/events/`)
                const found = res.data.find(e => slugify(e.event_name) === eventSlug)
                setEvent(found)
            } catch (err) {
                console.error("Failed to fetch event details:", err)
            } finally {
                setLoading(false)
            }
        }
        fetchEvent()
    }, [eventSlug])

    if (loading) {
        return (
            <div className="min-h-screen flex flex-col items-center justify-center bg-white" style={{ fontFamily: "'Lato', sans-serif" }}>
                <Loader2 size={48} className="animate-spin text-[#18357a] mb-6" />
                <p className="text-xs font-black uppercase tracking-[0.4em] text-[#18357a]">Loading Event Detail...</p>
            </div>
        )
    }

    if (!event) {
        return (
            <div className="min-h-screen flex flex-col items-center justify-center bg-white p-6 text-center" style={{ fontFamily: "'Lato', sans-serif" }}>
                <Calendar size={64} className="text-slate-100 mb-6" />
                <h2 className="text-2xl font-black text-[#18357a] mb-4">Event Not Found</h2>
                <Link to="/#events" className="bg-[#18357a] text-white px-8 py-4 rounded-2xl font-black text-[10px] uppercase tracking-widest hover:bg-[#ffc107] hover:text-[#18357a] transition-all">
                    Back to Upcoming Events
                </Link>
            </div>
        )
    }

    return (
        <motion.div 
          key="event-detail"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="min-h-screen bg-white pb-20 pt-10"
          style={{ fontFamily: "'Lato', sans-serif" }}
        >
            <div className="max-w-4xl mx-auto px-6 lg:px-10">
                
                {/* Back Button */}
                <Link 
                    to="/#events" 
                    className="inline-flex items-center gap-2 mb-10 text-[#18357a] hover:text-[#ffc107] transition-all text-[10px] font-black uppercase tracking-widest group"
                >
                    <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" /> Back to Upcoming Events
                </Link>

                {/* Event Image - ONLY if it exists */}
                {event.media_url && (
                    <motion.div 
                        initial={{ opacity: 0, scale: 0.98 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="w-full rounded-[2.5rem] overflow-hidden shadow-2xl mb-12 bg-slate-100 aspect-video lg:aspect-[21/9]"
                    >
                        {event.media_type === 'video' ? (
                            <video src={event.media_url} controls autoPlay loop muted playsInline className="w-full h-full object-cover" />
                        ) : (
                            <img src={event.media_url} alt={event.event_name} className="w-full h-full object-cover" />
                        )}
                    </motion.div>
                )}

                {/* Event Header */}
                <div className="mb-12">
                    <div className="flex items-center gap-3 mb-4">
                        <div className="h-1.5 w-1.5 rounded-full bg-green-500 animate-pulse" />
                        <span className="text-[10px] font-black uppercase tracking-[0.3em] text-[#ffc107]">Active Institutional Event</span>
                    </div>
                    <h1 className="text-4xl md:text-5xl lg:text-5xl font-black text-[#18357a] font-display leading-[1.1] mb-6">
                        {event.event_name}
                    </h1>
                </div>

                {/* Info Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-6 mb-16">
                    <div className="p-8 bg-slate-50 rounded-3xl border border-slate-100 flex items-start gap-5">
                        <div className="h-12 w-12 rounded-2xl bg-white flex items-center justify-center text-[#ffc107] shadow-sm">
                            <Timer size={24} />
                        </div>
                        <div>
                            <span className="text-[9px] font-black text-[#64779F] uppercase tracking-widest block mb-1">Time Schedule</span>
                            <p className="text-sm font-black text-[#18357a] uppercase tracking-wider">
                                {formatDate(event.event_date)}
                                {event.end_date && event.end_date !== event.event_date && ` - ${formatDate(event.end_date)}`}
                            </p>
                        </div>
                    </div>

                    <div className="p-8 bg-slate-50 rounded-3xl border border-slate-100 flex items-start gap-5">
                        <div className="h-12 w-12 rounded-2xl bg-white flex items-center justify-center text-[#ffc107] shadow-sm">
                            <MapPin size={24} />
                        </div>
                        <div>
                            <span className="text-[9px] font-black text-[#64779F] uppercase tracking-widest block mb-1">Venue Location</span>
                            <p className="text-sm font-black text-[#18357a] uppercase tracking-wider">{event.venue || 'Main Campus Auditorium'}</p>
                        </div>
                    </div>
                </div>

                {/* Description */}
                <div className="space-y-8 mb-20">
                    <div className="flex items-center gap-4">
                        <h3 className="text-sm font-black text-[#18357a] uppercase tracking-[0.3em]">Brief Description</h3>
                        <div className="flex-1 h-px bg-slate-100" />
                    </div>
                    <div className="prose prose-slate max-w-none">
                        <p className="text-lg lg:text-xl font-medium text-black leading-relaxed italic border-l-4 border-[#ffc107] pl-8 py-2 bg-slate-50/50 pr-4 rounded-r-2xl">
                            {event.short_description}
                        </p>
                    </div>
                </div>

                {/* Contact Section - Removed Register Now */}
                <div className="p-10 lg:p-14 bg-[#18357a] rounded-[3rem] text-white relative overflow-hidden group shadow-2xl">
                    <div className="absolute top-0 right-0 w-48 h-48 bg-white/[0.03] rounded-bl-full -mr-16 -mt-16 group-hover:scale-110 transition-transform duration-700" />
                    
                    <h4 className="text-2xl font-black font-display mb-8 tracking-tight flex items-center gap-3">
                        Reach Out <span className="text-[#ffc107]">For Details</span>
                    </h4>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 relative z-10">
                        <div className="flex items-center gap-5 group/item">
                            <div className="h-12 w-12 rounded-2xl bg-white/10 flex items-center justify-center text-[#ffc107] group-hover/item:bg-[#ffc107] group-hover/item:text-[#18357a] transition-all">
                                <Phone size={20} />
                            </div>
                            <div>
                                <span className="text-[8px] font-black uppercase tracking-widest text-white/50 block mb-1">Helpline</span>
                                <p className="text-sm font-black tracking-widest">+91 427 243 3900</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-5 group/item">
                            <div className="h-12 w-12 rounded-2xl bg-white/10 flex items-center justify-center text-[#ffc107] group-hover/item:bg-[#ffc107] group-hover/item:text-[#18357a] transition-all">
                                <Mail size={20} />
                            </div>
                            <div>
                                <span className="text-[8px] font-black uppercase tracking-widest text-white/50 block mb-1">Inquiry</span>
                                <p className="text-sm font-black tracking-widest lowercase">info@kiot.ac.in</p>
                            </div>
                        </div>
                    </div>

                    <div className="mt-12 pt-8 border-t border-white/10">
                        <p className="text-[10px] font-bold text-white/40 uppercase tracking-[0.2em] text-center md:text-left">
                            Please contact the event coordinator for specific registration requirements and guidelines.
                        </p>
                    </div>
                </div>

            </div>
        </motion.div>
    )
}

export default EventDetailPage
