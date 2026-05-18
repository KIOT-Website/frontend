import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Compass, Monitor, ShieldCheck, ArrowLeft, Play } from 'lucide-react'

import campusMain from '../assets/main/campus .webp'
import kiotLab from '../assets/life@kiot/smart classrooms.png'

const TourPage = () => {
    const navigate = useNavigate();
    const [playing, setPlaying] = useState({ v1: false, v2: false });

    return (
        <div className="min-h-[40vh] bg-[#FCFDFD] pb-8">
            <div className="max-w-7xl mx-auto px-6 py-8 relative z-20">
                <div className="flex flex-col items-center gap-12">
                    <div className="text-center space-y-4">
                        <h2 className="text-4xl md:text-5xl font-black text-[#224292] tracking-tight leading-tight">
                            Explore our <span className="text-[#ffc107]">Campus Legacy</span>
                        </h2>
                    </div>

                    <div className="w-full grid md:grid-cols-2 gap-8 lg:gap-12">
                        <motion.div 
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            whileHover={{ y: -8 }}
                            className="aspect-video rounded-2xl overflow-hidden shadow-[0_20px_50px_rgba(34,66,146,0.15)] border-4 border-white bg-slate-100 relative group transition-all duration-500 cursor-pointer"
                        >
                            {!playing.v1 ? (
                                <div className="absolute inset-0 z-20" onClick={() => setPlaying({ ...playing, v1: true })}>
                                    <img src={campusMain} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" alt="Video 1 Thumbnail" />
                                    <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition-colors duration-500" />
                                    <div className="absolute inset-0 flex items-center justify-center">
                                        <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center text-[#224292] shadow-2xl group-hover:bg-[#ffc107] group-hover:scale-110 transition-all duration-500">
                                            <Play size={32} fill="currentColor" className="ml-1" />
                                        </div>
                                    </div>
                                    <div className="absolute bottom-6 left-6">
                                        <p className="text-white font-black text-sm uppercase tracking-widest drop-shadow-lg">Campus Tour 2026</p>
                                    </div>
                                </div>
                            ) : (
                                <iframe 
                                    width="100%" 
                                    height="100%" 
                                    src="https://www.youtube.com/embed/_yZ1gwGMsoc?autoplay=1" 
                                    title="KIOT Campus Tour" 
                                    frameBorder="0" 
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                                    allowFullScreen
                                    className="relative z-10"
                                ></iframe>
                            )}
                        </motion.div>

                        <motion.div 
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            whileHover={{ y: -8 }}
                            className="aspect-video rounded-2xl overflow-hidden shadow-[0_20px_50px_rgba(34,66,146,0.15)] border-4 border-white bg-slate-100 relative group transition-all duration-500 cursor-pointer"
                        >
                            {!playing.v2 ? (
                                <div className="absolute inset-0 z-20" onClick={() => setPlaying({ ...playing, v2: true })}>
                                    <img src={kiotLab} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" alt="Video 2 Thumbnail" />
                                    <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition-colors duration-500" />
                                    <div className="absolute inset-0 flex items-center justify-center">
                                        <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center text-[#224292] shadow-2xl group-hover:bg-[#ffc107] group-hover:scale-110 transition-all duration-500">
                                            <Play size={32} fill="currentColor" className="ml-1" />
                                        </div>
                                    </div>
                                    <div className="absolute bottom-6 left-6">
                                        <p className="text-white font-black text-sm uppercase tracking-widest drop-shadow-lg">Institutional Highlights</p>
                                    </div>
                                </div>
                            ) : (
                                <iframe 
                                    width="100%" 
                                    height="100%" 
                                    src="https://www.youtube.com/embed/06txGrZieTQ?autoplay=1" 
                                    title="KIOT Highlights" 
                                    frameBorder="0" 
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                                    allowFullScreen
                                    className="relative z-10"
                                ></iframe>
                            )}
                        </motion.div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TourPage
