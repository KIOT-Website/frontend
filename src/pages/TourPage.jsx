import React from 'react'
import { useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Compass, Monitor, ShieldCheck, ArrowLeft } from 'lucide-react'

const TourPage = () => {
    const navigate = useNavigate();
    return (
        <div className="min-h-screen bg-[#FCFDFD] font-graphik pb-24">
            {/* 🔷 Shared Hero Section (Consistent across Hub) */}
            <div className="relative h-[35vh] flex items-center justify-center overflow-hidden bg-[#18357a]">
                <div className="absolute inset-0">
                    <img 
                        src="https://images.unsplash.com/photo-1523050335392-9bc0ad7c9f83?q=80&w=1920&auto=format&fit=crop" 
                        className="w-full h-full object-cover opacity-40" 
                        alt="Campus"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-[#18357a]/80 via-[#18357a]/60 to-transparent" />
                </div>
                
                <div className="relative z-10 text-center px-6">
                    <motion.div
                        initial={{ y: 30, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.8 }}
                    >
                        <button 
                            onClick={() => navigate('/campus-life')}
                            className="inline-flex items-center gap-2 text-[#ffc107] hover:text-white transition-colors mb-6 group border border-[#ffc107]/30 px-4 py-1.5 rounded-full bg-[#18357a]/50 backdrop-blur-sm"
                        >
                            <ArrowLeft size={14} className="group-hover:-translate-x-1 transition-transform" />
                            <span className="text-[10px] font-black uppercase tracking-[2px]">Back to Hub</span>
                        </button>
                        <h1 className="text-3xl md:text-5xl font-black text-white uppercase tracking-tighter leading-none mb-3">
                            CAMPUS <span className="text-[#ffc107]">TOUR</span>
                        </h1>
                    </motion.div>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-6 py-16 relative z-20">
                <div className="flex items-center gap-4 mb-8">
                    <div className="w-10 h-10 bg-[#18357a] text-[#ffc107] rounded-xl flex items-center justify-center shadow-lg">
                        <Compass size={20} />
                    </div>
                    <div>
                        <h2 className="text-2xl font-black text-[#18357a] uppercase tracking-tight">Campus Tour</h2>
                        <p className="text-[9px] font-black text-[#ffc107] uppercase tracking-[3px]">360° Immersive Experience</p>
                    </div>
                </div>
                <div className="p-12 bg-white rounded-[2.5rem] border border-slate-100 shadow-2xl shadow-[#18357a]/5 text-center">
                    <div className="inline-flex items-center gap-3 px-4 py-2 bg-[#18357a]/5 rounded-full mb-8">
                        <Compass size={14} className="text-[#18357a]" />
                        <span className="text-[10px] font-black text-[#18357a] uppercase tracking-widest leading-none">Virtual Experience</span>
                    </div>
                    <h2 className="text-4xl font-black text-[#18357a] uppercase tracking-tight leading-none font-display mb-6">
                        360° Campus <span className="text-[#ffc107]">Navigation</span>
                    </h2>
                    <div className="max-w-2xl mx-auto space-y-8">
                        <p className="text-black font-bold text-lg leading-relaxed">
                            Prepare for a fully immersive virtual tour. Our team is capturing 4K panoramic views of every department, hub, and facility within the KIOT campus.
                        </p>
                        <div className="grid md:grid-cols-3 gap-6">
                            <div className="p-6 bg-slate-50 rounded-2xl border border-slate-100 flex flex-col items-center gap-2">
                                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-[#18357a] shadow-md"><Monitor size={20} /></div>
                                <span className="text-[11px] font-black text-[#18357a] uppercase tracking-widest">VR Ready</span>
                            </div>
                            <div className="p-6 bg-slate-50 rounded-2xl border border-slate-100 flex flex-col items-center gap-2">
                                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-[#18357a] shadow-md"><ShieldCheck size={20} /></div>
                                <span className="text-[11px] font-black text-[#18357a] uppercase tracking-widest">Guided Info</span>
                            </div>
                            <div className="p-6 bg-slate-50 rounded-2xl border border-slate-100 flex flex-col items-center gap-2">
                                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-[#18357a] shadow-md"><Compass size={20} /></div>
                                <span className="text-[11px] font-black text-[#18357a] uppercase tracking-widest">Multi-View</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TourPage
