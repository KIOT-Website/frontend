import React from 'react'
import { useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Monitor, ArrowLeft } from 'lucide-react'

const ClassroomPage = () => {
    const navigate = useNavigate();
    return (
        <div className="min-h-screen bg-[#FCFDFD] pb-24">
            {/* 🔷 Shared Hero Section (Consistent across Hub) */}
            <div className="relative h-[32vh] flex items-center justify-center overflow-hidden bg-[#224292]">
                <div className="absolute inset-0">
                    <img 
                        src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=1920&auto=format&fit=crop" 
                        className="w-full h-full object-cover opacity-100" 
                        alt="Smart Classroom"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-[#224292]/90 via-[#224292]/70 to-transparent" />
                </div>
                
                <div className="relative z-10 text-center px-6">
                    <motion.div
                        initial={{ y: 30, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.8 }}
                    >

                        <h1 className="text-3xl md:text-5xl font-black text-white tracking-tighter leading-none mb-3">
                            Smart <span className="text-[#ffc107]">Classroom</span>
                        </h1>
                    </motion.div>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-6 py-16 relative z-20">
                <div className="flex items-center gap-4 mb-8">
                    <div className="w-10 h-10 bg-[#224292] text-[#ffc107] rounded-xl flex items-center justify-center shadow-lg">
                        <Monitor size={20} />
                    </div>
                    <div>
                        <h2 className="text-2xl font-black text-[#224292] tracking-tight">Smart Classrooms</h2>
                        <p className="text-xs font-black text-[#ffc107] uppercase tracking-[3px]">Digital Learning Ecosystem</p>
                    </div>
                </div>
                <div className="p-12 bg-white rounded-[2.5rem] border border-slate-100 shadow-2xl shadow-[#224292]/5">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <div className="space-y-8">
                            <div className="inline-flex items-center gap-3 px-4 py-2 bg-[#ffc107]/10 rounded-full">
                                <Monitor size={14} className="text-[#224292]" />
                                <span className="text-xs font-black text-[#224292] uppercase tracking-widest leading-none">Smart Learning Ecosystem</span>
                            </div>
                            <h2 className="text-4xl font-black text-[#224292] tracking-tight leading-none">
                                Smart <span className="text-[#ffc107]">Classrooms</span>
                            </h2>
                            <p className="text-slate-800 font-bold text-lg leading-relaxed">
                                We are integrating state-of-the-art interactive displays and lecture capture systems to create a truly future-ready academic environment.
                            </p>
                            <div className="grid grid-cols-2 gap-6">
                                {[
                                    { t: 'Projection', d: 'Ultra Short Throw UHD' },
                                    { t: 'Audio', d: 'Surround Sound Grid' },
                                    { t: 'Capture', d: 'Auto-tracking Cameras' },
                                    { t: 'Connect', d: 'Gigabit Fiber Uplink' }
                                ].map((feat, i) => (
                                    <div key={i} className="space-y-1">
                                        <p className="text-xs font-black uppercase text-[#ffc107] tracking-widest">{feat.t}</p>
                                        <p className="text-[15px] font-bold text-[#224292]">{feat.d}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="bg-[#224292]/5 rounded-[2.5rem] p-12 text-center space-y-4 border-2 border-dashed border-[#224292]/10">
                            <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mx-auto shadow-xl">
                                <Monitor size={40} className="text-[#224292]/20" />
                            </div>
                            <div>
                                <h3 className="text-[#224292] font-black tracking-tight">System Update</h3>
                                <p className="text-slate-500 font-bold text-xs max-w-xs mx-auto italic uppercase tracking-[2px] mt-2">Digital classroom features are being synchronized...</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ClassroomPage
