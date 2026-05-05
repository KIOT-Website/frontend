import { motion } from 'framer-motion'
import { Briefcase, Target, Rocket, Check, ArrowLeft, Globe } from 'lucide-react'
import { useNavigate } from 'react-router-dom'

const MXIncubatorPage = () => {
    const navigate = useNavigate()

    return (
        <div className="min-h-screen bg-white font-graphik pb-20">
            {/* Header / Navigation */}
            <div className="bg-[#224292] py-4 px-6 sticky top-0 z-[100] shadow-xl">
                <div className="max-w-7xl mx-auto flex items-center justify-between">
                    <button 
                        onClick={() => navigate('/research-innovation/istart')}
                        className="flex items-center gap-2 text-white hover:text-[#ffc107] transition-colors font-black text-sm"
                    >
                        <ArrowLeft size={18} />
                        Back to Innovation Hub
                    </button>
                    <div className="text-white/50 text-[10px] font-black uppercase tracking-widest hidden md:block">
                        iStartKIOT MX Incubator Foundation
                    </div>
                </div>
            </div>

            {/* Hero Section */}
            <section className="relative py-24 overflow-hidden bg-[#224292] text-white">
                <div className="absolute top-0 right-0 w-1/2 h-full bg-white/5 rounded-bl-[20rem] pointer-events-none" />
                <div className="mx-auto max-w-7xl px-6 lg:px-10 relative z-10">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <div>
                            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 text-[#ffc107] mb-8">
                                <Briefcase size={16} />
                                <span className="text-xs font-black uppercase tracking-widest">Section 8 Company</span>
                            </div>
                            <h1 className="text-5xl md:text-7xl font-black text-white leading-tight tracking-tighter mb-8">
                                MX <br/>
                                <span className="text-[#ffc107]">Incubator</span>
                            </h1>
                            <p className="text-white/80 text-lg font-bold leading-relaxed text-justify mb-10">
                                The iStartKIOT MX Incubator Foundation is a dedicated platform for high-growth startup acceleration. As a Section 8 company, we provide the global-scale infrastructure and investor networks required for startups to reach the next level of success.
                            </p>
                        </div>
                        <div className="relative">
                            <div className="aspect-square rounded-[5rem] bg-white overflow-hidden shadow-2xl relative">
                                <div className="absolute inset-0 bg-gradient-to-br from-[#224292]/10 to-transparent flex items-center justify-center p-20">
                                    <Globe size={200} className="text-[#224292] opacity-10" />
                                </div>
                            </div>
                            <div className="absolute top-10 -right-10 bg-[#ffc107] p-8 rounded-3xl shadow-2xl text-[#224292] max-w-xs rotate-6">
                                <h4 className="text-3xl font-black leading-none mb-2">Global Scale</h4>
                                <p className="text-[#224292]/70 text-[10px] font-black uppercase tracking-widest">Acceleration & Growth</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Acceleration Track */}
            <section className="py-24 bg-[#F8FAFC]">
                <div className="mx-auto max-w-7xl px-6 lg:px-10">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-black text-[#224292] mb-4">Acceleration Pathway</h2>
                        <div className="h-1.5 w-20 bg-[#ffc107] mx-auto rounded-full" />
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            { 
                                step: "01",
                                title: "Acceleration", 
                                desc: "Intensive programs to rapidly scale business operations and product market fit.",
                                icon: Rocket
                            },
                            { 
                                step: "02",
                                title: "Investment", 
                                desc: "Connecting startups with angel networks, venture capitalists, and seed funds.",
                                icon: Target
                            },
                            { 
                                step: "03",
                                title: "Global Exposure", 
                                desc: "Facilitating international partnerships and access to global markets.",
                                icon: Globe
                            }
                        ].map((track, i) => (
                            <div key={i} className="group p-10 rounded-[2.5rem] bg-white border border-slate-100 shadow-xl hover:bg-[#224292] transition-all duration-500">
                                <div className="flex items-center justify-between mb-8">
                                    <div className="w-16 h-16 rounded-2xl bg-slate-50 flex items-center justify-center group-hover:bg-white/10 transition-colors">
                                        <track.icon className="text-[#224292] group-hover:text-[#ffc107]" size={30} />
                                    </div>
                                    <span className="text-4xl font-black text-slate-100 group-hover:text-white/10">{track.step}</span>
                                </div>
                                <h3 className="text-2xl font-black text-[#224292] group-hover:text-white mb-4">{track.title}</h3>
                                <p className="text-black/60 group-hover:text-white/70 text-sm font-bold leading-relaxed">{track.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    )
}

export default MXIncubatorPage
