import React from 'react'
import { useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Compass, Monitor, ShieldCheck, ArrowLeft } from 'lucide-react'

const TourPage = () => {
    const navigate = useNavigate();
    return (
        <div className="min-h-screen bg-[#FCFDFD] pb-24">
            {/* 🔷 Shared Hero Section (Consistent across Hub) */}
            <div className="relative h-[32vh] flex items-center justify-center overflow-hidden bg-[#224292]">
                <div className="absolute inset-0">
                    <img 
                        src="https://images.unsplash.com/photo-1523050335392-9bc0ad7c9f83?q=80&w=1920&auto=format&fit=crop" 
                        className="w-full h-full object-cover opacity-100" 
                        alt="Campus"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-[#224292]/80 via-[#224292]/60 to-transparent" />
                </div>
                
                <div className="relative z-10 text-center px-6">
                    <motion.div
                        initial={{ y: 30, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.8 }}
                    >

                        <h1 className="text-3xl md:text-5xl font-black text-white tracking-tighter leading-none mb-3">
                            Campus <span className="text-[#ffc107]">Tour</span>
                        </h1>
                    </motion.div>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-6 py-16 relative z-20">
                <div className="flex items-center gap-4 mb-8">
                    <div className="w-10 h-10 bg-[#224292] text-[#ffc107] rounded-xl flex items-center justify-center shadow-lg">
                        <Compass size={20} />
                    </div>
                    <div>
                        <h2 className="text-2xl font-black text-[#224292] tracking-tight">Campus Tour</h2>
                        <p className="text-xs font-black text-[#ffc107] uppercase tracking-[3px]">360° Immersive Experience</p>
                    </div>
                </div>
                <div className="p-12 bg-white rounded-[2.5rem] border border-slate-100 shadow-2xl shadow-[#224292]/5 text-center">
                    <div className="inline-flex items-center gap-3 px-4 py-2 bg-[#224292]/5 rounded-full mb-8">
                        <Compass size={14} className="text-[#224292]" />
                        <span className="text-xs font-black text-[#224292] uppercase tracking-widest leading-none">Virtual Experience</span>
                    </div>
                    <h2 className="text-4xl font-black text-[#224292] tracking-tight leading-none mb-6">
                        360° Campus <span className="text-[#ffc107]">Navigation</span>
                    </h2>
                    <div className="max-w-2xl mx-auto space-y-8">
                        <p className="text-black font-bold text-lg leading-relaxed">
                            Prepare for a fully immersive virtual tour. Our team is capturing 4K panoramic views of every department, hub, and facility within the KIOT campus.
                        </p>
                        <div className="grid md:grid-cols-3 gap-6">
                            <div className="p-6 bg-slate-50 rounded-2xl border border-slate-100 flex flex-col items-center gap-2">
                                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-[#224292] shadow-md"><Monitor size={20} /></div>
                                <span className="text-xs font-black text-[#224292] uppercase tracking-widest">VR Ready</span>
                            </div>
                            <div className="p-6 bg-slate-50 rounded-2xl border border-slate-100 flex flex-col items-center gap-2">
                                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-[#224292] shadow-md"><ShieldCheck size={20} /></div>
                                <span className="text-xs font-black text-[#224292] uppercase tracking-widest">Guided Info</span>
                            </div>
                            <div className="p-6 bg-slate-50 rounded-2xl border border-slate-100 flex flex-col items-center gap-2">
                                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-[#224292] shadow-md"><Compass size={20} /></div>
                                <span className="text-xs font-black text-[#224292] uppercase tracking-widest">Multi-View</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TourPage
