import React from 'react'
import { useNavigate, Link } from 'react-router-dom'
import { Bus, Compass, ArrowLeft } from 'lucide-react'
import { motion } from 'framer-motion'

const TransportPage = () => {
    const navigate = useNavigate();
    return (
        <div className="min-h-screen bg-[#FCFDFD] font-graphik pb-24">
            {/* 🔷 Shared Hero Section (Consistent across Hub) */}
            <div className="relative h-[32vh] flex items-center justify-center overflow-hidden bg-[#18357a]">
                <div className="absolute inset-0">
                    <img 
                        src="https://images.unsplash.com/photo-1494515843206-f3117d3f51b7?q=80&w=1920&auto=format&fit=crop" 
                        className="w-full h-full object-cover opacity-50" 
                        alt="Campus Transport"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-[#18357a]/90 via-[#18357a]/70 to-transparent" />
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
                            <span className="text-[12px] font-black tracking-[2px]">Back to Hub</span>
                        </button>
                        <h1 className="text-3xl md:text-5xl font-black text-white tracking-tight leading-none mb-3">
                            Campus <span className="text-[#ffc107]">Transport</span>
                        </h1>
                    </motion.div>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-6 py-16 relative z-20">
                <div className="flex items-center gap-4 mb-8">
                    <div className="w-10 h-10 bg-[#18357a] text-[#ffc107] rounded-xl flex items-center justify-center shadow-lg">
                        <Bus size={20} />
                    </div>
                    <div>
                        <h2 className="text-2xl font-black text-[#18357a] tracking-tight">Campus Transport</h2>
                        <p className="text-[12px] font-black text-[#ffc107] tracking-[2px]">Institutional Fleet & Routes</p>
                    </div>
                </div>
                <div className="relative p-10 bg-white rounded-[2.5rem] border border-slate-100 shadow-2xl shadow-[#18357a]/5 overflow-hidden">
                    <div className="relative z-10 grid lg:grid-cols-2 gap-12 items-start">
                        <div className="space-y-6">
                            <div className="inline-flex items-center gap-3 px-4 py-2 bg-[#ffc107]/10 rounded-full">
                                <div className="w-2 h-2 rounded-full bg-[#ffc107] animate-pulse" />
                                <span className="text-[11px] font-black text-[#18357a] tracking-widest leading-none">Official KIOT Transport</span>
                            </div>
                            
                            <h2 className="text-4xl font-black text-[#18357a] tracking-tight leading-none font-display">
                                KIOT <span className="text-[#ffc107]">Transport</span>
                            </h2>
                            
                            <p className="text-black font-bold text-lg leading-relaxed">
                                KIOT operates extensive bus services for students and faculty, covering an 80 km radius across Salem, Namakkal, Dharmapuri, and Erode districts.
                            </p>

                            <div className="pt-6">
                                <Link to="/bus-routes" className="inline-flex items-center gap-4 px-8 py-5 bg-[#18357a] rounded-2xl group hover:bg-[#ffc107] transition-all shadow-xl shadow-[#18357a]/20">
                                    <Bus size={20} className="text-[#ffc107] group-hover:text-[#18357a] transition-colors" />
                                    <span className="text-sm font-black tracking-[2px] text-white group-hover:text-[#18357a] transition-colors">
                                        View Bus Routes
                                    </span>
                                </Link>
                            </div>
                        </div>

                        <div className="relative rounded-[2rem] overflow-hidden shadow-2xl group border-4 border-white aspect-video">
                            <img 
                                src="https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?q=80&w=1200&auto=format&fit=crop" 
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                                alt="KIOT Transport Fleet" 
                            />
                            <div className="absolute inset-0 bg-[#18357a]/20" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TransportPage
