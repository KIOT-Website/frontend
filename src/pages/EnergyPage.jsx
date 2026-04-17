import React from 'react'
import { useNavigate } from 'react-router-dom'
import { 
  Zap, 
  ArrowLeft,
  Trash2,
  Droplets,
  CloudRain,
  Recycle,
  HardDrive,
  BarChart3,
  CheckCircle2,
  Container
} from 'lucide-react'
import { motion } from 'framer-motion'

const EnergyPage = () => {
    const navigate = useNavigate();

    const wasteInitiatives = [
        {
            title: "Solid Waste Management",
            icon: Trash2,
            items: [
                "Collection of metals scraps, plastic and paper waste via dedicated mechanism.",
                "Disposal of all non-biodegradable solid waste through authorized vendors.",
                "Routine debris clearing and tree-dropping management by housekeeping staff.",
                "Food & vegetable waste collection for outside cattle feeding/farming.",
                "Mandatory plastic-free campus policy orientation for all new students."
            ]
        },
        {
            title: "Liquid Waste Management",
            icon: Droplets,
            items: [
                "45,000 Litres/Day Sewage Treatment Plant (STP) in hostel vicinity.",
                "Efficient Effluent Treatment (ETP) for laboratory chemical disposal.",
                "Secondary use of treated water for campus lawns and drip irrigation.",
                "Advanced dilution mechanisms for environmental and chemistry labs.",
                "Curricular integration of wastewater safe-disposal methodology."
            ]
        },
        {
            title: "E-Waste Management",
            icon: HardDrive,
            items: [
                "Centralized collection of broken/unwanted electronic appliances.",
                "Maintenance-team supervised categorization of E-waste components.",
                "Safety-certified disposal of obsolete hardware through specialized vendors.",
                "Digital appliance awareness orientation for students and staff.",
                "Environmental impact curriculum focused on IT hardware recycling."
            ]
        }
    ];

    const rwhBenefits = [
        "Elimination of dependency on premium tanker lorry water services.",
        "Sustainable groundwater recharge satisfying domestic campus requirements.",
        "Annual savings of approximately one lakh rupees in water expenses.",
        "Significant reduction in surface runoffs and campus waterlogging.",
        "Future-proofing against 'Day Zero' scenarios through local recharge pits."
    ];

    return (
        <div className="min-h-screen bg-[#FCFDFD] font-graphik pb-24">
            {/* 🔷 Hero Section */}
            <div className="relative h-[40vh] flex items-center justify-center overflow-hidden bg-[#18357a]">
                <div className="absolute inset-0">
                    <img 
                        src="https://images.unsplash.com/photo-1466611653911-954ffea11271?q=80&w=1920&auto=format&fit=crop" 
                        className="w-full h-full object-cover opacity-50 scale-110 transition-transform duration-1000" 
                        alt="Energy Initiatives"
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
                            ENERGY <span className="text-[#ffc107]">INITIATIVES</span>
                        </h1>
                    </motion.div>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-6 py-16 relative z-20 space-y-24">
                
                {/* ♻️ Waste Management Section */}
                <div className="space-y-12">
                    <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-6">
                        <div className="space-y-2">
                            <h2 className="text-3xl md:text-5xl font-black text-[#18357a] uppercase tracking-tighter">Waste <span className="text-[#ffc107]">Management</span></h2>
                            <div className="h-1 w-24 bg-[#ffc107]" />
                        </div>
                        <p className="max-w-xl text-black text-sm font-black uppercase leading-relaxed text-justify opacity-80">
                            Waste management involves the collection, transportation, processing, and monitoring of materials. 
                            In KIOT campus, strategic initiatives target solid, liquid, and E-waste excellence.
                        </p>
                    </div>

                    <div className="grid lg:grid-cols-3 gap-8">
                        {wasteInitiatives.map((waste, idx) => (
                            <motion.div 
                                key={idx}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.1 }}
                                className="bg-white rounded-[2.5rem] border border-slate-100 shadow-xl p-8 hover:border-[#18357a]/20 transition-all group"
                            >
                                <div className="w-14 h-14 bg-slate-50 rounded-2xl flex items-center justify-center text-[#18357a] mb-8 group-hover:bg-[#18357a] group-hover:text-white transition-all duration-500">
                                    <waste.icon size={28} />
                                </div>
                                <h3 className="text-xl font-black text-[#18357a] uppercase tracking-tight mb-6">{waste.title}</h3>
                                <div className="space-y-4">
                                    {waste.items.map((item, i) => (
                                        <div key={i} className="flex gap-3 items-start">
                                            <div className="w-1.5 h-1.5 rounded-full bg-[#ffc107] mt-1.5 shrink-0" />
                                            <p className="text-[12px] font-black text-black uppercase leading-relaxed tracking-tight opacity-90">{item}</p>
                                        </div>
                                    ))}
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* 🌧️ Rain Water Harvesting Section */}
                <div className="space-y-16">
                    <div className="bg-[#18357a] rounded-[3.5rem] p-12 lg:p-20 text-white relative overflow-hidden shadow-2xl">
                        <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full translate-x-1/2 -translate-y-1/2" />
                        
                        <div className="grid lg:grid-cols-2 gap-16 relative z-10">
                            <div className="space-y-8 text-center lg:text-left">
                                <div className="inline-flex items-center gap-3 px-6 py-2 bg-white/10 rounded-full border border-white/20">
                                    <CloudRain size={20} className="text-[#ffc107]" />
                                    <span className="text-[10px] font-black uppercase tracking-[3px]">Resource Harvesting</span>
                                </div>
                                <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter leading-none">
                                    Rain Water <br/> <span className="text-[#ffc107]">Harvesting</span>
                                </h2>
                                <p className="text-white/70 text-sm font-black uppercase leading-relaxed tracking-wide text-justify italic">
                                    Groundwater is mission-critical. To mitigate over-exploitation, KIOT has scaled ground water recharge 
                                    pits across institutional buildings, balancing water table depletion with intelligent surface-runoff collection.
                                </p>
                                <div className="grid grid-cols-2 gap-6 pt-4">
                                    <div className="p-6 bg-white/5 rounded-3xl border border-white/10 hover:bg-white/10 transition-colors">
                                        <div className="text-3xl font-black text-[#ffc107]">771 MM</div>
                                        <div className="text-[9px] font-black uppercase tracking-widest leading-none mt-2">Annual Rainfall Average</div>
                                    </div>
                                    <div className="p-6 bg-white/5 rounded-3xl border border-white/10 hover:bg-white/10 transition-colors">
                                        <div className="text-3xl font-black text-[#ffc107]">0.338 MCFT</div>
                                        <div className="text-[9px] font-black uppercase tracking-widest leading-none mt-2">Annual Collection Volume</div>
                                    </div>
                                </div>
                            </div>

                            <div className="space-y-10 order-first lg:order-last">
                                <div className="space-y-6">
                                    <div className="flex items-center gap-4 border-b border-white/10 pb-4">
                                        <Recycle size={22} className="text-[#ffc107]" />
                                        <h3 className="text-xl font-black uppercase">Collection Methodology</h3>
                                    </div>
                                    <p className="text-white/60 text-[13px] font-black uppercase leading-relaxed text-justify">
                                        Our methodology involves collection, channelization, filtering, and storage. Roof top water is properly drained 
                                        to recharge points, while surface runoffs are channelized towards recharge pits and bore wells through filters.
                                    </p>
                                </div>
                                
                                <div className="grid md:grid-cols-2 gap-4">
                                    <div className="flex gap-4 p-5 bg-white rounded-3xl items-center text-[#18357a] hover:scale-105 transition-transform shadow-lg">
                                        <Container className="shrink-0" />
                                        <div className="font-black text-[11px] uppercase tracking-tight">60ft Open Well (C-Block)</div>
                                    </div>
                                    <div className="flex gap-4 p-5 bg-white rounded-3xl items-center text-[#18357a] hover:scale-105 transition-transform shadow-lg">
                                        <BarChart3 className="shrink-0" />
                                        <div className="font-black text-[11px] uppercase tracking-tight">3 Strategic Bore Wells</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Key Benefits Grid */}
                    <div className="space-y-10">
                        <div className="text-center">
                            <h3 className="text-3xl font-black text-[#18357a] uppercase tracking-tighter">Strategic <span className="text-[#ffc107]">Benefits</span></h3>
                        </div>
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {rwhBenefits.map((benefit, i) => (
                                <motion.div 
                                    key={i}
                                    whileHover={{ scale: 1.02 }}
                                    className="p-8 bg-white rounded-[2rem] border border-slate-100 shadow-lg flex items-start gap-5 relative overflow-hidden group"
                                >
                                    <div className="absolute top-0 right-0 w-16 h-16 bg-slate-50 rounded-bl-[2rem] group-hover:bg-[#ffc107]/20 transition-colors" />
                                    <CheckCircle2 className="text-[#ffc107] shrink-0 mt-1" size={20} />
                                    <p className="text-black text-[12px] font-black uppercase leading-[1.8] tracking-tight relative z-10">{benefit}</p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default EnergyPage
