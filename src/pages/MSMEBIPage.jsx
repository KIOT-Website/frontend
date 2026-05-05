import { motion } from 'framer-motion'
import { Building2, Target, Briefcase, Check, ArrowLeft, Shield } from 'lucide-react'
import { useNavigate } from 'react-router-dom'

const MSMEBIPage = () => {
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
                        MSME Business Incubator @ KIOT
                    </div>
                </div>
            </div>

            {/* Hero Section */}
            <section className="relative py-24 overflow-hidden bg-[#F8FAFC]">
                <div className="absolute top-0 right-0 w-1/2 h-full bg-[#10b981]/5 rounded-bl-[20rem] pointer-events-none" />
                <div className="mx-auto max-w-7xl px-6 lg:px-10 relative z-10">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <div>
                            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#10b981]/10 text-[#10b981] mb-8">
                                <Building2 size={16} />
                                <span className="text-xs font-black uppercase tracking-widest">Business Incubator</span>
                            </div>
                            <h1 className="text-5xl md:text-7xl font-black text-[#224292] leading-tight tracking-tighter mb-8">
                                MSME <br/>
                                <span className="text-[#10b981]">Incubator</span>
                            </h1>
                            <p className="text-black text-lg font-bold leading-relaxed text-justify mb-10">
                                The MSME Business Incubator at KIOT provides essential resources and strategic funding for early-stage startups. We focus on transforming innovative prototypes into scalable business models through industry-aligned support.
                            </p>
                        </div>
                        <div className="relative">
                            <div className="aspect-video rounded-[3rem] bg-[#224292] overflow-hidden shadow-2xl">
                                <div className="absolute inset-0 bg-gradient-to-br from-[#10b981]/40 to-transparent flex items-center justify-center p-20">
                                    <Shield size={180} className="text-white opacity-20" />
                                </div>
                            </div>
                            <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-2xl shadow-2xl border border-slate-100 max-w-[200px]">
                                <h4 className="text-2xl font-black text-[#10b981] leading-none mb-2">Seed Funding</h4>
                                <p className="text-black/60 text-[10px] font-black uppercase tracking-widest">Financial Fuel for Growth</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Services Grid */}
            <section className="py-24">
                <div className="mx-auto max-w-7xl px-6 lg:px-10">
                    <div className="grid md:grid-cols-2 gap-12">
                        <div className="space-y-8">
                            <h2 className="text-4xl font-black text-[#224292]">Incubation Support</h2>
                            <p className="text-black/70 text-base font-bold leading-relaxed">
                                We provide a comprehensive suite of services designed to help MSME-aligned startups thrive in a competitive market.
                            </p>
                            <div className="space-y-4">
                                {[
                                    "Financial assistance and seed funding support",
                                    "Dedicated office space and infrastructure",
                                    "Business planning and strategy development",
                                    "Market linkage and networking opportunities"
                                ].map((item, i) => (
                                    <div key={i} className="flex items-center gap-4">
                                        <div className="w-6 h-6 rounded-full bg-[#10b981] flex items-center justify-center shrink-0">
                                            <Check className="text-white" size={12} />
                                        </div>
                                        <span className="text-black font-black text-sm">{item}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="bg-[#224292] rounded-[3rem] p-12 text-white relative overflow-hidden">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-bl-[5rem]" />
                            <h3 className="text-3xl font-black text-[#ffc107] mb-6">Industry Alignment</h3>
                            <p className="text-white/80 font-bold leading-relaxed mb-8">
                                Connecting startups with MSME clusters and industry bodies for real-world validation and commercialization support.
                            </p>
                            <button className="px-8 py-4 bg-[#ffc107] text-[#224292] rounded-xl font-black text-sm uppercase tracking-widest hover:bg-white transition-all">
                                Get Started
                            </button>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default MSMEBIPage
