import React from 'react'
import { useNavigate } from 'react-router-dom'
import { 
  ShieldCheck, 
  ArrowLeft,
  HeartHandshake,
  Stethoscope,
  ClipboardList,
  AlertTriangle,
  FileText,
  CalendarDays
} from 'lucide-react'
import { motion } from 'framer-motion'

const InsurancePage = () => {
    const navigate = useNavigate();

    const claimDocs = {
        medical: [
            "Claim form duly signed",
            "Policy copy",
            "Claim notification",
            "Discharge summary",
            "Hospitalization Reports, Bills",
            "Medicines bills with Dr's Prescription",
            "Hospital payment receipt",
            "Lab reports, if any"
        ],
        fatal: [
            "Claim form duly signed",
            "Policy copy",
            "Hospitalization Reports, Bills",
            "F.I.R",
            "Post Mortem Report",
            "Death Certificate",
            "Legal Heir Certificate",
            "And other relevant documents"
        ]
    };

    return (
        <div className="min-h-screen bg-[#FCFDFD] font-graphik pb-24">
            {/* 🔷 Hero Section */}
            <div className="relative h-[35vh] flex items-center justify-center overflow-hidden bg-[#18357a]">
                <div className="absolute inset-0">
                    <img 
                        src="https://images.unsplash.com/photo-1454165833767-027eeea160d7?q=80&w=1920&auto=format&fit=crop" 
                        className="w-full h-full object-cover opacity-30" 
                        alt="Campus"
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
                        <h1 className="text-4xl md:text-6xl font-black text-white uppercase tracking-tighter leading-none mb-3 font-display">
                            CAMPUS <span className="text-[#ffc107]">INSURANCE</span>
                        </h1>
                        <p className="text-white/60 font-medium text-[10px] md:text-sm max-w-2xl mx-auto uppercase tracking-widest leading-loose">
                            PROTECTIVE COVERAGE FOR STUDENTS & STAFF
                        </p>
                    </motion.div>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-6 py-16 relative z-20 space-y-16">
                
                {/* Intro Section */}
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    <div className="space-y-6">
                        <div className="inline-flex items-center gap-4 py-2 px-6 bg-[#ffc107]/10 border border-[#ffc107]/20 rounded-full">
                            <ShieldCheck size={18} className="text-[#ffc107]" />
                            <span className="text-[10px] font-black text-[#18357a] uppercase tracking-widest">Institutional Care</span>
                        </div>
                        <h2 className="text-3xl md:text-5xl font-black text-[#18357a] uppercase tracking-tighter leading-none">
                            Insurance for <br/> <span className="text-[#ffc107]">Students & Staff</span>
                        </h2>
                        <p className="text-black text-lg font-black leading-relaxed text-justify italic">
                            KIOT is associated with leading insurance companies for the benefit of students, faculty and supporting staff and the college pays premium for the same.
                        </p>
                    </div>
                    <div className="relative rounded-[2rem] overflow-hidden shadow-2xl aspect-video group">
                        <img 
                            src="https://images.unsplash.com/photo-1542382156909-9ae37b3f56fd?q=80&w=1200&auto=format&fit=crop" 
                            className="w-full h-full object-cover grayscale transition-all group-hover:grayscale-0 duration-700 hover:scale-105"
                            alt="Insurance"
                        />
                    </div>
                </div>

                {/* Features & Benefits Grid */}
                <div className="grid md:grid-cols-2 gap-8">
                    {/* Special Features */}
                    <motion.div 
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="bg-white p-10 rounded-[2.5rem] border border-slate-100 shadow-xl shadow-slate-200/40 relative overflow-hidden group"
                    >
                        <div className="absolute top-0 right-0 w-32 h-32 bg-[#ffc107]/5 rounded-bl-[5rem] transition-all group-hover:scale-110" />
                        <div className="flex items-center gap-4 mb-8">
                            <div className="w-12 h-12 bg-[#18357a] rounded-xl flex items-center justify-center text-[#ffc107] shadow-lg">
                                <AlertTriangle size={24} />
                            </div>
                            <h3 className="text-xl font-black text-[#18357a] uppercase tracking-tight">Special Features</h3>
                        </div>
                        <ul className="space-y-4">
                            {[
                                "Covers accidents involving two-wheelers, heavy vehicles, and air traffic.",
                                "Comprehensive coverage for natural calamities (Tsunami, Earthquake, floods).",
                                "Zero limit on the number of accidents claimable within a policy year."
                            ].map((item, i) => (
                                <li key={i} className="flex gap-4 items-start">
                                    <div className="w-1.5 h-1.5 rounded-full bg-[#ffc107] mt-2 shrink-0" />
                                    <p className="text-black text-[14px] font-black uppercase tracking-tight leading-relaxed">{item}</p>
                                </li>
                            ))}
                        </ul>
                    </motion.div>

                    {/* Benefits */}
                    <motion.div 
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="bg-[#18357a] p-10 rounded-[2.5rem] border border-[#18357a] shadow-xl shadow-[#18357a]/20 relative overflow-hidden group"
                    >
                        <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-bl-[5rem] transition-all group-hover:scale-110" />
                        <div className="flex items-center gap-4 mb-8">
                            <div className="w-12 h-12 bg-[#ffc107] rounded-xl flex items-center justify-center text-[#18357a] shadow-lg">
                                <HeartHandshake size={24} />
                            </div>
                            <h3 className="text-xl font-black text-white uppercase tracking-tight">Financial Benefits</h3>
                        </div>
                        <div className="space-y-6">
                            {[
                                { t: "Hospitalization Cover", v: "Rs. 40,000/- per accident" },
                                { t: "Educational Grant", v: "Rs. 2,00,000/- for accidental parent loss" },
                                { t: "Accidental Death", v: "Rs. 50,000/- (For Students & Staff)" }
                            ].map((item, i) => (
                                <div key={i} className="border-l-2 border-[#ffc107] pl-4 space-y-1">
                                    <p className="text-[10px] text-white/60 font-black uppercase tracking-widest">{item.t}</p>
                                    <p className="text-xl font-black text-[#ffc107]">{item.v}</p>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                </div>

                {/* Treatment & Claim Section */}
                <div className="space-y-12">
                    <div className="bg-slate-50 p-12 rounded-[3rem] border border-slate-200">
                        <div className="grid lg:grid-cols-3 gap-12">
                            <div className="lg:col-span-1 space-y-6">
                                <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center text-[#18357a] shadow-xl">
                                    <Stethoscope size={28} />
                                </div>
                                <h3 className="text-2xl font-black text-[#18357a] uppercase tracking-tighter">Treatment Policy</h3>
                                <p className="text-black text-[14px] font-black leading-relaxed text-justify">
                                    Treatment can be taken in any network or non-network Hospitals of the insurance company in India. 
                                    College ID card and a letter from the office is sufficient for admission.
                                </p>
                                <div className="p-4 bg-white rounded-xl border border-blue-100 italic font-black text-[12px] text-blue-800">
                                    Reimbursement is applicable for non-network hospitals.
                                </div>
                            </div>

                            <div className="lg:col-span-2 space-y-8">
                                <div className="flex items-center gap-4">
                                    <ClipboardList size={22} className="text-[#ffc107]" />
                                    <h3 className="text-2xl font-black text-[#18357a] uppercase tracking-tighter">Claim Procedures</h3>
                                </div>
                                
                                <div className="grid md:grid-cols-2 gap-8">
                                    <div className="bg-white p-8 rounded-[1.5rem] shadow-sm border border-slate-100">
                                        <p className="text-[#18357a] font-black text-[12px] uppercase tracking-widest mb-4 border-b border-slate-100 pb-2">Accidental Medical</p>
                                        <ul className="space-y-3">
                                            {claimDocs.medical.map((doc, i) => (
                                                <li key={i} className="flex gap-2 items-center text-[11px] font-black text-black uppercase">
                                                    <FileText size={12} className="text-[#ffc107]" />
                                                    {doc}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                    <div className="bg-white p-8 rounded-[1.5rem] shadow-sm border border-slate-100">
                                        <p className="text-[#18357a] font-black text-[12px] uppercase tracking-widest mb-4 border-b border-slate-100 pb-2">Fatal Accidents</p>
                                        <ul className="space-y-3">
                                            {claimDocs.fatal.map((doc, i) => (
                                                <li key={i} className="flex gap-2 items-center text-[11px] font-black text-black uppercase">
                                                    <FileText size={12} className="text-[#ffc107]" />
                                                    {doc}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Settlement Footer */}
                    <div className="flex flex-col md:flex-row items-center justify-between p-8 bg-[#18357a] rounded-[2rem] gap-6">
                        <div className="flex items-center gap-4">
                            <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center text-[#ffc107]">
                                <CalendarDays size={24} />
                            </div>
                            <div>
                                <h4 className="text-white font-black text-[12px] uppercase tracking-widest">Normal Settlement Period</h4>
                                <p className="text-2xl font-black text-[#ffc107]">Six to Nine Months</p>
                            </div>
                        </div>
                        <p className="text-white/40 text-[10px] font-black uppercase tracking-[2px] max-w-xs text-right hidden md:block">
                            Subject to proper documentation and institutional verification.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default InsurancePage
