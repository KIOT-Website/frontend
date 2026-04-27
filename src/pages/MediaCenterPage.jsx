import React from 'react'
import { useNavigate } from 'react-router-dom'
import { 
  Video, 
  ArrowLeft,
  Camera,
  Layers,
  MonitorPlay,
  PlayCircle,
  Hash,
  List
} from 'lucide-react'
import { motion } from 'framer-motion'

const MediaCenterPage = () => {
    const navigate = useNavigate();

    const facilities = [
        { sno: '1', desc: 'Sony Video Camera HXR-NX3/1 E32', qty: '1' },
        { sno: '2', desc: 'Nikon Camera D90', qty: '1' },
        { sno: '3', desc: 'Nikon Camera P610', qty: '1' },
        { sno: '4', desc: 'Sony Handycam', qty: '5' },
        { sno: '5', desc: 'Speaker – Creative Inspire', qty: '10' },
        { sno: '6', desc: 'PA Wireless Amplifier, Neckband PA System', qty: '5' },
        { sno: '7', desc: 'Raptor – Interactive White Board - 80"', qty: '5' }
    ];

    const topics = [
        { t: "Role Play on Selection Sort | Data Structures", url: "https://www.youtube.com/watch?v=elCpJR-gldU" },
        { t: "Role Play on Quick Sort", url: "https://www.youtube.com/watch?v=ZirRe8Ko0oc" },
        { t: "Demonstration of Power Transformers", url: "https://www.youtube.com/watch?v=yefszLQL9O4" },
        { t: "Watchdog Timer in Embedded Systems", url: "https://www.youtube.com/watch?v=N-93WqQTlxs" },
        { t: "Demonstration of logic gates using Xilinx Software", url: "https://www.youtube.com/watch?v=YvNU0Gla0pk" },
        { t: "Micro-controller Interfacing with humidity sensor", url: "https://www.youtube.com/watch?v=Nf0pU0n9Kho" },
        { t: "Simulation of SCR using Circuitmod", url: "https://www.youtube.com/watch?v=SkGNk5S8b28" },
        { t: "Effective Learning", url: "https://www.youtube.com/watch?v=xIBXE5pXiLw" },
        { t: "Mind Map Techniques", url: "https://www.youtube.com/watch?v=xY09uimEqoA" },
        { t: "Computer Aided Diagnosis System - II", url: "https://www.youtube.com/watch?v=qZr9LNuR0OI" },
        { t: "Computer Aided Diagnosis System - I", url: "https://www.youtube.com/watch?v=W4fo6DzNKw8" },
        { t: "Medical Image Analysis", url: "https://www.youtube.com/watch?v=yfIOmDePinA" },
        { t: "Results Of Improved Dynamic Programming Method", url: "https://www.youtube.com/watch?v=OgjUx6uLQho" },
        { t: "Active Contour Segmentation Techniques", url: "https://www.youtube.com/watch?v=YmA8jn-NQyY" },
        { t: "Contour Extraction Techniques", url: "https://www.youtube.com/watch?v=PgSxgCTh45Y" },
        { t: "Interpretation", url: "https://www.youtube.com/watch?v=L9QBE862mzk" },
        { t: "Image Acquisition", url: "https://www.youtube.com/watch?v=_mS-GTA8uag" },
        { t: "CAD System for Common Carotid Artery Images", url: "https://www.youtube.com/watch?v=IW7eVXtYbYQ" },
        { t: "Industry Linked Labs", url: "https://www.youtube.com/watch?v=RfDU-O4xWAM" },
        { t: "Teaching Learning Methodology", url: "https://www.youtube.com/watch?v=8s88IRKMdvU" },
        { t: "What is EEE?", url: "https://www.youtube.com/watch?v=ErqGXqlOEZw" },
        { t: "Virtusa COE", url: "https://www.youtube.com/watch?v=Hraqq6Bsjyg" },
        { t: "What is Mechanical Engineering?", url: "https://www.youtube.com/watch?v=KJvtv2Pa_wM" },
        { t: "Precast Construction Technique", url: "https://www.youtube.com/watch?v=fMDVpmrRh_I" },
        { t: "Training and Placement", url: "https://www.youtube.com/watch?v=Yn-PrxtsE00" },
        { i: 26, t: "Foreign Language Training - Japanese", url: "https://www.youtube.com/watch?v=Ehdcku-J85M" },
        { i: 27, t: "Foreign Language Training - German", url: "https://www.youtube.com/watch?v=jPJ6lO_e1yY" },
        { i: 28, t: "Enterpreneurship Development Cell (EDC)", url: "https://www.youtube.com/watch?v=guTk40edyvM" },
        { i: 29, t: "Pipelining Computer Architecture", url: "https://www.youtube.com/watch?v=DFPrY-Gsk0s" }
    ];

    return (
        <div className="min-h-screen bg-[#FCFDFD] pb-24">
            {/* 🔷 Hero Section */}
            <div className="relative h-[35vh] flex items-center justify-center overflow-hidden bg-[#18357a]">
                <div className="absolute inset-0">
                    <img 
                        src="https://images.unsplash.com/photo-1574717024458-388ee7023efd?q=80&w=1920&auto=format&fit=crop" 
                        className="w-full h-full object-cover opacity-100" 
                        alt="Media Center"
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
                            <span className="text-xs font-black tracking-[2px]">Back to Hub</span>
                        </button>
                        <h1 className="text-3xl md:text-5xl font-black text-white tracking-tighter leading-none mb-3">
                            Media <span className="text-[#ffc107]">Center</span>
                        </h1>
                    </motion.div>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-6 py-16 relative z-20 space-y-24">
                
                {/* Available Facilities Table */}
                <div className="space-y-8">
                    <div className="flex items-center justify-between border-b-2 border-slate-100 pb-6">
                        <div className="flex items-center gap-4">
                            <div className="w-12 h-12 bg-[#18357a] rounded-xl flex items-center justify-center text-[#ffc107] shadow-lg">
                                <Camera size={24} />
                            </div>
                            <div>
                                <h2 className="text-2xl font-black text-[#18357a] tracking-tight">Facilities Available</h2>
                                <p className="text-xs font-black text-[#ffc107] uppercase tracking-[3px]">Multimedia Infrastructure</p>
                            </div>
                        </div>
                    </div>

                    <div className="overflow-hidden rounded-xl md:rounded-[2rem] border border-slate-200 bg-white shadow-2xl shadow-slate-200/20">
                        <table className="w-full text-left border-collapse">
                            <thead className="hidden md:table-header-group">
                                <tr className="bg-[#18357a]">
                                    <th className="px-8 py-5 text-xs font-black text-white uppercase tracking-[3px] w-24">S.No</th>
                                    <th className="px-8 py-5 text-xs font-black text-white uppercase tracking-[3px]">Description</th>
                                    <th className="px-8 py-5 text-xs font-black text-white uppercase tracking-[3px] text-right w-32">Qty</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-slate-100">
                                {facilities.map((item, i) => (
                                    <tr key={i} className="group hover:bg-slate-50 transition-colors">
                                        <td className="hidden md:table-cell px-8 py-5 text-[13px] font-black text-[#18357a]">{item.sno}</td>
                                        <td className="px-5 md:px-8 py-5 text-[14px] font-bold text-slate-800 tracking-tight">{item.desc}</td>
                                        <td className="px-5 md:px-8 py-5 text-[15px] font-black text-[#ffc107] text-right">{item.qty}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>

                {/* Video Lecture Topics */}
                <div className="space-y-12">
                    <div className="text-center space-y-4">
                        <div className="inline-flex items-center gap-4 py-2 px-6 bg-slate-100 rounded-full border border-slate-200">
                            <MonitorPlay size={18} className="text-[#18357a]" />
                            <span className="text-xs font-black text-[#18357a] uppercase tracking-widest">E-Learning Resource</span>
                        </div>
                        <h2 className="text-3xl md:text-5xl font-black text-[#18357a] tracking-tighter">Multimedia <span className="text-[#ffc107]">Lecture Topics</span></h2>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                        {topics.map((topic, i) => (
                            <motion.a
                                key={i}
                                href={topic.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                initial={{ opacity: 0, scale: 0.95 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: (i % 10) * 0.05 }}
                                className="group bg-white p-5 rounded-2xl border border-slate-100 shadow-sm hover:border-[#ffc107]/40 hover:shadow-xl transition-all flex items-start gap-4 cursor-pointer"
                            >
                                <div className="w-8 h-8 rounded-lg bg-[#ef4444]/10 flex items-center justify-center shrink-0 group-hover:bg-[#ef4444]/20 transition-colors font-bold">
                                    <PlayCircle size={16} className="text-[#ef4444] transition-colors" />
                                </div>
                                <div className="space-y-1">
                                    <p className="text-[13px] font-bold text-slate-800 leading-tight group-hover:text-[#18357a] transition-colors">{topic.t}</p>
                                    <p className="text-[10px] font-black text-slate-500 uppercase tracking-widest">Multimedia Module {i+1}</p>
                                </div>
                            </motion.a>
                        ))}
                    </div>
                </div>

            </div>
        </div>
    )
}

export default MediaCenterPage
