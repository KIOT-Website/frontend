import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  Calendar, 
  Newspaper, 
  Image as ImageIcon, 
  Trophy, 
  Megaphone,
  ArrowRight,
  Clock,
  MapPin,
  ExternalLink,
  ChevronLeft,
  ChevronRight,
  Mail
} from 'lucide-react'

const NewsEventsPage = () => {
    const [activeTab, setActiveTab] = useState('Latest News')

    const tabs = [
        { name: 'Latest News', icon: Newspaper },
        { name: 'Upcoming Events', icon: Calendar },
        { name: 'Gallery', icon: ImageIcon },
        { name: 'Achievements', icon: Trophy },
        { name: 'Announcements', icon: Megaphone }
    ]

    const newsData = []
    const eventsData = []
    const announcements = []
    const galleryData = []

    return (
        <div className="min-h-screen bg-[#F8FAFF]">
            {/* ─── HERO SECTION ─── */}
            <div className="relative h-[45vh] flex items-center overflow-hidden bg-[#0A1A3F]">
                <div className="absolute inset-0">
                    <img 
                        src="https://images.unsplash.com/photo-1541339907198-e08756ebafe3?q=80&w=1920&auto=format&fit=crop" 
                        className="w-full h-full object-cover" 
                        alt="Campus"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-[#0A1A3F] via-[#0A1A3F]/80 to-transparent" />
                </div>
                
                <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
                    <motion.div
                        initial={{ x: -50, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ duration: 0.8 }}
                    >
                        <h1 className="text-5xl md:text-7xl font-black text-white tracking-tighter mb-4">
                            News <span className="text-[#ffc107]">& Events</span>
                        </h1>
                        <p className="text-white text-lg md:text-xl max-w-xl font-bold leading-relaxed">
                            Stay updated with the latest happenings, achievements and exciting events at our campus.
                        </p>
                        <div className="mt-8 h-1.5 w-20 bg-[#ffc107] rounded-full" />
                    </motion.div>
                </div>
            </div>

            {/* ─── TAB NAVIGATION ─── */}
            <div className="bg-white border-b border-slate-100 sticky top-[104px] z-30 shadow-sm">
                <div className="max-w-7xl mx-auto px-4 overflow-x-auto scrollbar-hide">
                    <div className="flex items-center gap-2 py-4 min-w-max">
                        {tabs.map((tab) => (
                            <button
                                key={tab.name}
                                onClick={() => setActiveTab(tab.name)}
                                className={`flex items-center gap-3 px-6 py-3 rounded-xl transition-all duration-300 font-black text-sm tracking-widest ${
                                    activeTab === tab.name 
                                    ? 'bg-[#0A1A3F] text-[#ffc107] shadow-lg' 
                                    : 'text-slate-600 hover:bg-slate-50'
                                }`}
                            >
                                <tab.icon size={18} />
                                <span className="uppercase">{tab.name}</span>
                            </button>
                        ))}
                    </div>
                </div>
            </div>

            {/* ─── MAIN CONTENT GRID ─── */}
            <div className="max-w-7xl mx-auto px-6 py-12">
                <div className="grid lg:grid-cols-[1.8fr_1fr] gap-12">
                    
                    {/* Left Column: Latest News */}
                    <div className="space-y-8">
                        <div className="flex items-center justify-between mb-2">
                            <h2 className="text-3xl font-black text-[#0A1A3F] tracking-tight">Latest News</h2>
                            <button className="flex items-center gap-2 text-sm font-black text-[#18357a] hover:text-[#0A1A3F] tracking-widest transition-colors group uppercase">
                                View All News <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                            </button>
                        </div>

                        <div className="space-y-6">
                            {newsData.length > 0 ? newsData.map((news) => (
                                <motion.div 
                                    key={news.id}
                                    initial={{ y: 20, opacity: 0 }}
                                    whileInView={{ y: 0, opacity: 1 }}
                                    viewport={{ once: true }}
                                    className="bg-white rounded-2xl overflow-hidden border border-slate-50 shadow-[0_10px_40px_rgba(10,26,63,0.03)] hover:shadow-[0_20px_60px_rgba(10,26,63,0.08)] transition-all flex flex-col md:flex-row group cursor-pointer"
                                >
                                    <div className="md:w-56 h-48 md:h-auto overflow-hidden relative">
                                        <img src={news.image} alt={news.title} className="w-full h-full object-cover transition-transform duration-700" />
                                        <div className="absolute top-4 left-4 bg-[#ffc107] px-3 py-1.5 rounded-lg text-[#0A1A3F] text-xs font-black tracking-widest">
                                            {news.category}
                                        </div>
                                    </div>
                                    <div className="flex-1 p-6 flex justify-between items-center">
                                        <div className="space-y-3">
                                            <h3 className="text-2xl font-black text-[#0A1A3F] leading-tight group-hover:text-blue-600 transition-colors">{news.title}</h3>
                                            <p className="text-slate-700 text-base font-bold leading-relaxed max-w-md line-clamp-2">{news.excerpt}</p>
                                        </div>
                                        <div className="bg-slate-50 p-5 rounded-2xl flex flex-col items-center justify-center min-w-[100px] border border-slate-100">
                                            <span className="text-xs font-black text-slate-700 uppercase tracking-widest">{news.date.split(' ')[0]}</span>
                                            <span className="text-3xl font-black text-[#0A1A3F] leading-none my-1">{news.date.split(' ')[1].replace(',', '')}</span>
                                            <span className="text-xs font-black text-slate-700 uppercase tracking-widest">{news.date.split(' ')[2]}</span>
                                        </div>
                                    </div>
                                </motion.div>
                            )) : (
                                <div className="bg-white p-12 rounded-[2.5rem] border-2 border-dashed border-slate-100 flex flex-col items-center justify-center text-center space-y-4">
                                    <div className="w-16 h-16 rounded-2xl bg-slate-50 flex items-center justify-center text-slate-300">
                                        <Newspaper size={32} />
                                    </div>
                                    <div>
                                        <p className="text-xl font-black text-[#0A1A3F]">No News Posted Yet</p>
                                        <p className="text-slate-500 font-bold">Check back soon for the latest campus updates.</p>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>

                    {/* Right Column: Events & Announcements */}
                    <div className="space-y-12">
                        {/* Upcoming Events */}
                        <div className="space-y-8">
                            <div className="flex items-center justify-between mb-2">
                                <h2 className="text-3xl font-black text-[#0A1A3F] tracking-tight">Upcoming Events</h2>
                                <button className="flex items-center gap-2 text-sm font-black text-[#18357a] hover:text-[#0A1A3F] tracking-widest transition-colors group uppercase">
                                    View All Events <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                                </button>
                            </div>

                            <div className="space-y-4">
                                {eventsData.length > 0 ? eventsData.map((event) => (
                                    <motion.div 
                                        key={event.id}
                                        initial={{ x: 20, opacity: 0 }}
                                        whileInView={{ x: 0, opacity: 1 }}
                                        viewport={{ once: true }}
                                        className="bg-white p-5 rounded-2xl border border-slate-50 shadow-[0_10px_30px_rgba(10,26,63,0.02)] hover:shadow-[0_15px_40px_rgba(10,26,63,0.06)] transition-all flex items-center gap-6 group cursor-pointer"
                                    >
                                        <div className={`w-24 h-28 ${event.color} rounded-2xl flex flex-col items-center justify-center text-white shrink-0 shadow-lg`}>
                                            <span className="text-xs font-black tracking-widest uppercase">{event.month}</span>
                                            <span className="text-4xl font-black leading-none my-1">{event.day}</span>
                                            <span className="text-xs font-black tracking-widest">{event.year}</span>
                                        </div>
                                        <div className="space-y-2">
                                            <span className={`text-[11px] font-black tracking-widest px-3 py-1 rounded-md bg-slate-50 ${event.color.replace('bg-', 'text-')}`}>
                                                {event.category}
                                            </span>
                                            <h3 className="text-xl font-black text-[#0A1A3F] leading-tight group-hover:text-blue-600 transition-colors">{event.title}</h3>
                                            <div className="flex flex-col gap-1">
                                                <div className="flex items-center gap-2 text-xs font-bold text-slate-700">
                                                    <Clock size={14} /> {event.time}
                                                </div>
                                                <div className="flex items-center gap-2 text-xs font-bold text-slate-700">
                                                    <MapPin size={14} /> {event.location}
                                                </div>
                                            </div>
                                        </div>
                                    </motion.div>
                                )) : (
                                    <div className="bg-white p-8 rounded-2xl border border-dashed border-slate-100 text-center">
                                        <p className="text-slate-400 font-bold">Stay tuned for upcoming events!</p>
                                    </div>
                                )}
                            </div>
                        </div>

                        {/* Announcements Section */}
                        <div className="bg-white p-8 rounded-2xl shadow-[0_30px_70px_rgba(10,26,63,0.05)] border border-slate-100 relative overflow-hidden">
                            <div className="flex items-center gap-4 mb-8">
                                <div className="w-12 h-12 rounded-2xl bg-slate-50 flex items-center justify-center text-[#0A1A3F] shadow-sm">
                                    <Megaphone size={24} />
                                </div>
                                <h3 className="text-2xl font-black text-[#0A1A3F] tracking-tight">Announcements</h3>
                            </div>

                            <div className="space-y-6">
                                {announcements.length > 0 ? announcements.map((ann, i) => (
                                    <div key={i} className="flex gap-4 group cursor-pointer">
                                        <div className="w-2 h-2 rounded-full bg-[#ffc107] mt-2 shrink-0" />
                                        <div className="space-y-1">
                                            <p className="text-base font-bold text-slate-800 leading-snug group-hover:text-[#0A1A3F] transition-colors">
                                                {ann.text}
                                                {ann.isNew && (
                                                    <span className="ml-2 bg-[#ffc107] text-[#0A1A3F] text-[10px] font-black px-2 py-0.5 rounded-md">NEW</span>
                                                )}
                                            </p>
                                        </div>
                                    </div>
                                )) : (
                                    <p className="text-slate-400 font-bold text-sm italic">No active announcements.</p>
                                )}
                            </div>
                        </div>
                    </div>
                </div>

                {/* ─── GALLERY SECTION ─── */}
                <div className="mt-24 space-y-10">
                    <div className="flex items-center justify-between">
                        <h2 className="text-4xl font-black text-[#0A1A3F] tracking-tight">Event Gallery</h2>
                        <button className="flex items-center gap-2 text-sm font-black text-[#18357a] hover:text-[#0A1A3F] tracking-widest transition-colors group uppercase">
                            View Gallery <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                        </button>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {galleryData.length > 0 ? galleryData.map((item, i) => (
                            <motion.div 
                                key={i}
                                initial={{ y: 30, opacity: 0 }}
                                whileInView={{ y: 0, opacity: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className="group cursor-pointer"
                            >
                                <div className="aspect-[4/3] rounded-2xl overflow-hidden border-4 border-white shadow-xl mb-4">
                                    <img src={item.image} alt={item.title} className="w-full h-full object-cover transition-transform duration-700" />
                                </div>
                                <h4 className="text-base font-black text-[#0A1A3F] text-center px-4 leading-tight">{item.title}</h4>
                            </motion.div>
                        )) : (
                            <div className="col-span-full bg-white p-12 rounded-[2.5rem] border border-dashed border-slate-100 text-center">
                                <p className="text-slate-400 font-bold">Gallery will be updated soon with latest event photos.</p>
                            </div>
                        )}
                    </div>
                </div>
            </div>

            {/* ─── FOOTER BANNER ─── */}
            <div className="bg-[#0A1A3F] py-24 mt-12 relative overflow-hidden">
                <div className="max-w-7xl mx-auto px-6 relative z-10 text-center space-y-12">
                    <div className="space-y-4">
                        <h2 className="text-4xl md:text-5xl font-black text-white tracking-tight">Stay Updated!</h2>
                        <p className="text-white text-xl font-bold">Subscribe to our newsletter and get the latest updates.</p>
                    </div>
                    <div className="flex flex-col md:flex-row max-w-2xl mx-auto items-center gap-4">
                        <input 
                            type="email" 
                            placeholder="Enter your email address" 
                            className="bg-white border border-white rounded-2xl px-8 py-5 text-[#0A1A3F] w-full outline-none font-bold shadow-2xl"
                        />
                        <button className="bg-[#ffc107] text-[#0A1A3F] px-12 py-5 rounded-2xl font-black text-sm uppercase tracking-widest hover:bg-white transition-all shadow-2xl w-full md:w-auto shrink-0">
                            Subscribe
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NewsEventsPage
