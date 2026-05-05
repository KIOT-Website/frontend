import { motion } from 'framer-motion'
import { Rocket, Target, Users, Check, ArrowLeft } from 'lucide-react'
import { useNavigate } from 'react-router-dom'

const StartupTNPage = () => {
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
                        StartupTN Pre-Incubation Centre @ KIOT
                    </div>
                </div>
            </div>

            {/* Hero Section */}
            <section className="relative py-24 overflow-hidden bg-[#F8FAFC]">
                <div className="absolute top-0 right-0 w-1/2 h-full bg-[#3b82f6]/5 rounded-bl-[20rem] pointer-events-none" />
                <div className="mx-auto max-w-7xl px-6 lg:px-10 relative z-10">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <div>
                            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#3b82f6]/10 text-[#3b82f6] mb-8">
                                <Rocket size={16} />
                                <span className="text-xs font-black uppercase tracking-widest">Pre-Incubation Centre</span>
                            </div>
                            <h1 className="text-5xl md:text-7xl font-black text-[#224292] leading-tight tracking-tighter mb-8">
                                StartupTN <br/>
                                <span className="text-[#3b82f6]">Ecosystem</span>
                            </h1>
                            <p className="text-black text-lg font-bold leading-relaxed text-justify mb-10">
                                KIOT's StartupTN Pre-Incubation Centre serves as the vital bridge between a student's innovative idea and a market-ready prototype. We provide the structured environment needed to validate concepts and build early-stage traction.
                            </p>
                        </div>
                        <div className="relative">
                            <div className="aspect-square rounded-[4rem] bg-[#224292] overflow-hidden shadow-2xl rotate-3">
                                <div className="absolute inset-0 bg-gradient-to-br from-[#3b82f6]/40 to-transparent flex items-center justify-center p-20">
                                    <Rocket size={200} className="text-white opacity-20" />
                                </div>
                            </div>
                            <div className="absolute -bottom-10 -left-10 bg-white p-8 rounded-3xl shadow-2xl border border-slate-100 max-w-xs -rotate-3">
                                <div className="flex items-center gap-4 mb-4">
                                    <div className="w-12 h-12 rounded-2xl bg-[#3b82f6]/10 flex items-center justify-center">
                                        <Target className="text-[#3b82f6]" size={24} />
                                    </div>
                                    <h4 className="text-xl font-black text-[#224292]">Idea to MVP</h4>
                                </div>
                                <p className="text-black/60 text-sm font-bold">Comprehensive support for turning concepts into functional products.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Support Pillars */}
            <section className="py-24">
                <div className="mx-auto max-w-7xl px-6 lg:px-10">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-black text-[#224292] mb-4">Our Support Pillars</h2>
                        <div className="h-1.5 w-20 bg-[#3b82f6] mx-auto rounded-full" />
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            { 
                                title: "Idea Validation", 
                                desc: "Rigorous testing of problem-solution fit and market demand analysis.",
                                icon: Target
                            },
                            { 
                                title: "Mentorship", 
                                desc: "One-on-one guidance from industry experts and successful founders.",
                                icon: Users
                            },
                            { 
                                title: "Pre-Incubation", 
                                desc: "Infrastructure and technical support for early prototype development.",
                                icon: Check
                            }
                        ].map((pillar, i) => (
                            <div key={i} className="p-8 rounded-3xl bg-white border border-slate-100 shadow-xl shadow-slate-100 flex flex-col items-center text-center">
                                <div className="w-16 h-16 rounded-2xl bg-[#3b82f6]/5 flex items-center justify-center mb-6">
                                    <pillar.icon className="text-[#3b82f6]" size={30} />
                                </div>
                                <h3 className="text-2xl font-black text-[#224292] mb-4">{pillar.title}</h3>
                                <p className="text-black/70 text-sm font-bold leading-relaxed">{pillar.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    )
}

export default StartupTNPage
