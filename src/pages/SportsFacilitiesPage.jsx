import React from 'react'
import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'
import { ArrowLeft, Trophy, MapPin, ExternalLink } from 'lucide-react'

const FACILITIES = [
    { n: 'KIOT Fitness Center For Boys', v: 'MBA Block' },
    { n: 'KIOT Fitness Center For Girls', v: 'C Block' },
    { n: 'Athletics', v: 'Football Field' },
    { n: 'Badminton Out Door Men', v: 'Near Open Auditorium' },
    { n: 'Badminton Out Door Women - 2', v: 'Girls Play Area' },
    { n: 'Ball Badminton Men', v: 'Near By A Block' },
    { n: 'Ball Badminton Women', v: 'Girls Play Area' },
    { n: 'Basketball', v: 'Near By C Block' },
    { n: 'Carrom', v: 'PD Room' },
    { n: 'Chess', v: 'PD Room' },
    { n: 'Cricket Nets', v: 'In front of MBA Block' },
    { n: 'Football', v: 'Near By Security Gate 1' },
    { n: 'Handball', v: 'Football Field' },
    { n: 'Hockey', v: 'Football Field' },
    { n: 'Kabaddi', v: 'Near By A Block' },
    { n: 'Table Tennis', v: 'C Block Annexure Indoor' },
    { n: 'Volley Ball Men', v: 'Near Security Gate 2' },
    { n: 'Volley Ball Women', v: 'Girls Play Area' }
]

const SportsFacilitiesPage = () => {
    const navigate = useNavigate();

    return (
        <div className="min-h-screen bg-[#FCFDFD] font-graphik py-12 md:py-20">
            <div className="max-w-5xl mx-auto px-6">
                {/* Minimal Header */}
                <div className="mb-12 flex flex-col md:flex-row md:items-end justify-between gap-8">
                    <div className="space-y-4">
                        <motion.button
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            onClick={() => navigate('/campus-life/sports')}
                            className="inline-flex items-center gap-2 text-[10px] font-black text-[#64779F] uppercase tracking-widest hover:text-[#18357a] transition-colors"
                        >
                            <ArrowLeft size={14} /> Back to Sports
                        </motion.button>
                        <h1 className="text-4xl md:text-5xl font-black text-[#18357a] uppercase tracking-tighter leading-none">
                            Ground <span className="text-[#ffc107]">Facilities</span>
                        </h1>
                    </div>
                </div>

                {/* Facilities Table */}
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="bg-white rounded-xl border border-slate-100 shadow-2xl shadow-slate-200/20 overflow-hidden"
                >
                    <div className="overflow-x-auto">
                        <table className="w-full text-left">
                            <thead>
                                <tr className="bg-[#18357a]">
                                    <th className="px-8 py-5 text-[10px] font-black text-white uppercase tracking-[3px]">Name of the Ground</th>
                                    <th className="px-8 py-5 text-[10px] font-black text-white uppercase tracking-[3px]">Venue / Location</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-slate-50">
                                {FACILITIES.map((item, i) => (
                                    <tr key={i} className="group hover:bg-slate-50 transition-colors">
                                        <td className="px-8 py-4">
                                            <span className="text-[14px] font-black text-[#18357a] uppercase tracking-tight">{item.n}</span>
                                        </td>
                                        <td className="px-8 py-4">
                                            <div className="flex items-center gap-3 text-slate-800 font-bold group-hover:text-[#18357a] transition-colors">
                                                <MapPin size={14} className="text-[#ffc107]" />
                                                <span className="text-[12px] uppercase tracking-wide">{item.v}</span>
                                            </div>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </motion.div>
                
                <div className="mt-12 text-center">
                    <p className="text-[10px] font-black text-slate-300 uppercase tracking-[5px]">Department of Physical Education • Infrastructure Registry</p>
                </div>
            </div>
        </div>
    )
}

export default SportsFacilitiesPage;
