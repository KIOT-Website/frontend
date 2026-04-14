import React from 'react'
import { useNavigate } from 'react-router-dom'
import { 
  Trophy, 
  Eye, 
  Target, 
  ArrowLeft,
  ArrowUpRight
} from 'lucide-react'
import { motion } from 'framer-motion'

const SportsPage = () => {
    const navigate = useNavigate();
    return (
        <div className="min-h-screen bg-[#FCFDFD] font-graphik pb-24">
            {/* 🔷 Shared Hero Section (Consistent across Hub) */}
            <div className="relative h-[40vh] flex items-center justify-center overflow-hidden bg-[#18357a]">
                <div className="absolute inset-0">
                    <img 
                        src="https://images.unsplash.com/photo-1459749411177-0421800673d6?q=80&w=1920&auto=format&fit=crop" 
                        className="w-full h-full object-cover opacity-50 scale-110 transition-transform duration-1000" 
                        alt="Sports"
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
                            <span className="text-[10px] font-black uppercase tracking-[2px]">Back to Hub</span>
                        </button>
                        <h1 className="text-3xl md:text-5xl font-black text-white uppercase tracking-tighter leading-none mb-3">
                            SPORTS & <span className="text-[#ffc107]">GAMES</span>
                        </h1>
                    </motion.div>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-6 py-16 relative z-20 space-y-12">
                <div className="flex items-center gap-4 mb-4">
                    <div className="w-10 h-10 bg-[#18357a] text-[#ffc107] rounded-xl flex items-center justify-center shadow-lg">
                        <Trophy size={20} />
                    </div>
                    <div>
                        <h2 className="text-2xl font-black text-[#18357a] uppercase tracking-tight">Sports & Games</h2>
                        <p className="text-[9px] font-black text-[#ffc107] uppercase tracking-[3px]">Department of Physical Education</p>
                    </div>
                </div>
                <div className="grid lg:grid-cols-2 gap-8 items-stretch font-graphik">
                    {/* Vision Section */}
                    <div className="relative group p-8 rounded-2xl bg-white border border-slate-100 shadow-xl shadow-[#18357a]/5 flex flex-col">
                        <div className="flex items-center gap-4 mb-6">
                            <div className="w-12 h-12 bg-[#18357a] text-[#ffc107] rounded-xl flex items-center justify-center shadow-lg">
                                <Eye size={24} />
                            </div>
                            <div>
                                <h3 className="text-xl font-black text-[#18357a] uppercase tracking-tight">Vision</h3>
                                <p className="text-[10px] font-black text-[#ffc107] uppercase tracking-[3px]">Our Future Horizon</p>
                            </div>
                        </div>
                        <p className="text-black text-[15px] leading-[1.8] text-justify font-medium">
                            Our Vision is to lead physical education, health education, and sports science education locally, regionally, and ultimately internationally with a focus on educational research, development and innovation. We will continue to nurture outstanding and caring educators and professionals to have a sustained impact on social progress and human betterment.
                        </p>
                    </div>

                    {/* Mission Section */}
                    <div className="relative group p-8 rounded-2xl bg-white border border-slate-100 shadow-xl shadow-[#18357a]/5 flex flex-col">
                        <div className="flex items-center gap-4 mb-6">
                            <div className="w-12 h-12 bg-[#ffc107] text-[#18357a] rounded-xl flex items-center justify-center shadow-lg">
                                <Target size={24} />
                            </div>
                            <div>
                                <h3 className="text-xl font-black text-[#18357a] uppercase tracking-tight">Mission</h3>
                                <p className="text-[10px] font-black text-slate-400 uppercase tracking-[3px]">Our Core Purpose</p>
                            </div>
                        </div>
                        <p className="text-black text-[15px] leading-[1.8] text-justify font-black">
                            Our Mission is to nurture quality PE teachers as well as sports and health professionals who are self-reliant life-long learners capable of integrating theory and practice to serve as role models and encourage personal and professional healthy behaviors; and innovatively and strategically enhancing the department's leading role in the field.
                        </p>
                    </div>
                </div>

                {/* Directory & Image Section */}
                <div className="grid lg:grid-cols-2 gap-8 items-center">
                    {/* Left: Image Placeholder */}
                    <div className="relative rounded-[1.5rem] overflow-hidden shadow-2xl border-4 border-white aspect-[4/3] group">
                        <img 
                            src="https://images.unsplash.com/photo-1541252260730-0412e8e2108e?q=80&w=1200&auto=format&fit=crop" 
                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                            alt="Sports Excellence" 
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#18357a]/80 via-transparent to-transparent flex items-end p-10">
                            <div>
                                <p className="text-[#ffc107] font-black text-[10px] uppercase tracking-[4px] mb-2">Athletic Excellence</p>
                                <h3 className="text-white text-2xl font-black uppercase tracking-tight">Department of Physical Education</h3>
                            </div>
                        </div>
                    </div>

                    {/* Right: Directory Table */}
                    <div className="overflow-hidden rounded-[1.5rem] border border-slate-100 bg-white shadow-2xl shadow-slate-200/20">
                        <table className="w-full text-left border-collapse">
                            <thead>
                                <tr className="bg-[#18357a]">
                                    <th className="px-8 py-6 text-[11px] font-black text-white uppercase tracking-[3px]">Departmental Directories</th>
                                    <th className="px-8 py-6 text-[11px] font-black text-white uppercase tracking-[3px] text-right">Action</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-slate-50">
                                {[
                                    { d: 'FACULTY DETAILS', link: '/campus-life/sports/faculty' },
                                    { d: 'GROUND FACILITIES', link: '/campus-life/sports/facilities' }
                                ].map((row, i) => (
                                    <tr key={i} className="group hover:bg-slate-50 transition-colors">
                                        <td className="px-8 py-6 text-[15px] font-black text-[#18357a] uppercase tracking-tight">{row.d}</td>
                                        <td className="px-8 py-6 text-right">
                                            <button 
                                                onClick={() => row.link !== '#' && navigate(row.link)}
                                                className="inline-flex items-center gap-2 text-[#18357a] font-black text-[10px] uppercase tracking-widest px-6 py-2.5 bg-[#ffc107] rounded-xl hover:bg-[#18357a] hover:text-white transition-all group/btn shadow-lg shadow-[#ffc107]/20"
                                            >
                                                Click here
                                                <ArrowUpRight size={14} className="group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SportsPage
