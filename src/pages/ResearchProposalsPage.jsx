import React from 'react'
import { motion } from 'framer-motion'
import { useParams, Link } from 'react-router-dom'
import { 
    ChevronRight, 
    ArrowLeft,
    FileEdit,
    ShieldCheck,
    Coins,
    Calendar,
    BadgeCheck,
    Zap,
    History,
    Users
} from 'lucide-react'

const ResearchProposalsPage = () => {
    const { deptName } = useParams()

    const formatDeptName = (name) => {
        if (!name) return "Departmentwise"
        return name.split('-').map(word => {
            if (word === "&") return "&"
            return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
        }).join(' ')
    }

    const allProposals = {
        'electronics-&-communication-engineering': [
            // 2024-25
            { id: 1, title: "Next-Gen SoC Architectures: Pioneering AI Integration in Signal Processing", pi: "Dr.N. Santhiyakumari, Mr.S.Maragatharaj", agency: "SERB", amount: "0.50 Lakhs", status: "Granted and Completed", type: "Seminar Grant" },
            { id: 2, title: "Harnessing Digital Healthcare Technologies: Biomarkers, IoT, Date Analytics and AI", pi: "Dr.N. Santhiyakumari, Dr.V.Saravanan", agency: "AICTE ATAL", amount: "6 Lakhs", status: "Granted and Completed", type: "FDP Grant" },
            { id: 3, title: "AI and Reconfigurable SOC Architectures – Hardware Security for Defence", pi: "Dr.N. Santhiyakumari, Dr.V.Saravanan", agency: "DRDO", amount: "0.50 Lakhs", status: "Granted and Completed", type: "Seminar Grant" },
            { id: 4, title: "AICTE – IBIP (Inter Institutional Biomedical Innovation Programme)", pi: "Dr.N. Santhiyakumari, Dr.V.Saravanan", agency: "AICTE", amount: "10 Lakhs", status: "Submitted", type: "Research Grant" },
            { id: 5, title: "AICTE – Grant for Organising Conference (Med-AI)", pi: "Dr.N. Santhiyakumari, Dr.V.Saravanan", agency: "AICTE", amount: "2 Lakhs", status: "Submitted", type: "Conference Grant" },
            { id: 6, title: "AICTE – Grant for Organising Conference (Smart Comm)", pi: "Dr.S.Kumarganesh, R.Shanmugasundaram", agency: "AICTE", amount: "3 Lakhs", status: "Submitted", type: "Conference Grant" },
            { id: 7, title: "VLSI Architectures for Smart Wearable Devices: Security and Reliability", pi: "Mr.S.Maragatharaj", agency: "AICTE ATAL", amount: "6 Lakhs", status: "Granted and Completed", type: "FDP Grant" },

            // 2023-24
            { id: 101, title: "AI based Medical Decision Making System for Cardio/Cerebrovascular Disease", pi: "Dr.N. Santhiyakumari, Dr. V.Saravanan", agency: "SERB-SURE", amount: "12.94 Lakhs", status: "Submitted", type: "Research Proposal" },
            { id: 102, title: "Socio-Psychological Analysis of Entrepreneurship Among Educated Women", pi: "Dr.N. Santhiyakumari, Mr.S.Maragatharaj", agency: "ICSSR", amount: "10 Lakhs", status: "Submitted", type: "Research Proposal" },
            { id: 104, title: "Artificial Intelligence based Noise Suppression System in Domestic Appliances", pi: "Dr.N. Santhiyakumari, Dr. V.Saravanan", agency: "SERB-SUPRA", amount: "51.46 Lakhs", status: "Submitted", type: "Research Proposal" },
            { id: 107, title: "AI-Powered Plant Health: Nutrient Deficiency Diagnosis & Recommendation", pi: "Dr.N. Santhiyakumari, Mrs.T.Devika", agency: "SERB-POWER", amount: "27.18 Lakhs", status: "Submitted", type: "Research Proposal" }
        ],
        'mechanical-engineering': [
             // Add mechanical proposals if available
        ]
    }

    const currentProposals = allProposals[deptName?.toLowerCase()] || []

    return (
        <div className="min-h-screen bg-[#f6f9fc] font-sans pb-20">
            {/* Breadcrumbs */}
            <div className="bg-white border-b border-slate-200 py-4">
                <div className="max-w-6xl mx-auto px-6 flex items-center gap-4">
                    <Link to="/research" className="text-slate-400 hover:text-[#0f172a] text-xs font-bold uppercase tracking-wider transition-colors pt-0.5">
                        Research Initiatives
                    </Link>
                    <ChevronRight size={14} className="text-slate-300" />
                    <Link to={`/research/${deptName}`} className="text-slate-400 hover:text-[#0f172a] text-xs font-bold uppercase tracking-wider transition-colors pt-0.5">
                        Research in {formatDeptName(deptName)}
                    </Link>
                    <ChevronRight size={14} className="text-slate-300" />
                    <span className="text-[#0f172a] text-xs font-bold uppercase tracking-wider pt-0.5">
                        Research Proposals
                    </span>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-6 py-12 lg:py-16">
                
                {/* Header Section */}
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mb-16"
                >
                    <Link 
                        to={`/research/${deptName}`}
                        className="inline-flex items-center gap-2 text-[#0f172a] font-bold text-[10px] uppercase tracking-wider mb-6 hover:translate-x-[-4px] transition-transform"
                    >
                        <ArrowLeft size={14} /> Back to Repository
                    </Link>

                    <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8">
                        <div>
                            <h1 className="text-3xl lg:text-5xl font-bold text-[#224292] uppercase leading-tight mb-6 italic">
                                Funded <span className="text-[#ffc107]">Proposals</span>
                            </h1>
                            <div className="max-w-2xl border-l-4 border-[#ffc107] pl-8 py-1">
                                <p className="text-[#1e293b] text-base font-semibold leading-relaxed">
                                    Strategic tracking of research funding applications submitted to major government bodies including SERB, AICTE, DRDO, and ICSSR by {formatDeptName(deptName)}.
                                </p>
                            </div>
                        </div>

                        <div className="flex gap-4">
                            <div className="px-6 py-4 bg-white rounded-2xl shadow-xl border border-slate-100 text-center">
                                <div className="text-2xl font-black text-[#224292]">₹ 130L+</div>
                                <div className="text-[10px] font-bold text-[#64779F] uppercase tracking-widest">Total Pipeline</div>
                            </div>
                            <div className="px-6 py-4 bg-[#0f172a] rounded-2xl shadow-xl border-b-4 border-[#ffc107] text-white text-center">
                                <div className="text-2xl font-black text-[#ffc107]">{currentProposals.length}</div>
                                <div className="text-[10px] font-bold opacity-70 uppercase tracking-widest">Active Proposals</div>
                            </div>
                        </div>
                    </div>
                </motion.div>

                {/* Proposals Content */}
                <div className="space-y-6">
                    {currentProposals.length > 0 ? (
                        currentProposals.map((proposal, idx) => (
                            <motion.div
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: idx * 0.1 }}
                                key={proposal.id}
                                className={`group bg-white rounded-[2rem] border-2 ${(proposal.status || "").includes('Granted') ? 'border-[#ffc107]/20 hover:border-[#ffc107]' : 'border-slate-100 hover:border-blue-200'} shadow-xl shadow-blue-900/5 transition-all p-8`}
                            >
                                <div className="flex flex-col lg:flex-row gap-10 items-center">
                                    <div className="lg:w-16 h-16 rounded-2xl bg-slate-50 flex items-center justify-center text-[#ffc107] shrink-0 border border-slate-100 group-hover:bg-[#0f172a] transition-all">
                                        {(proposal.status || "").includes('Granted') ? <BadgeCheck size={32} /> : <Zap size={32} className="opacity-40" />}
                                    </div>
                                    <div className="flex-1">
                                        <div className="flex flex-wrap items-center gap-4 mb-4">
                                            <span className={`px-3 py-1 ${(proposal.status || "").includes('Granted') ? 'bg-green-50 text-green-700' : 'bg-blue-50 text-blue-700'} text-[9px] font-black uppercase tracking-widest rounded-full border border-current opacity-70`}>
                                                {proposal.status}
                                            </span>
                                            <span className="text-[10px] font-bold text-[#64779F] uppercase tracking-widest flex items-center gap-2">
                                                <ShieldCheck size={14} className="text-[#ffc107]" /> {proposal.agency}
                                            </span>
                                        </div>
                                        <h3 className="text-lg font-bold text-[#0f172a] uppercase leading-tight mb-4 italic">
                                            "{proposal.title}"
                                        </h3>
                                        <div className="flex flex-wrap items-center gap-8">
                                            <div className="flex items-center gap-2">
                                                <History size={14} className="text-slate-300" />
                                                <span className="text-[11px] font-bold text-[#64779F] uppercase tracking-wider">{proposal.type}</span>
                                            </div>
                                            <div className="flex items-center gap-2">
                                                <Users size={14} className="text-slate-300" />
                                                <span className="text-[11px] font-bold text-[#64779F] uppercase tracking-wider">{proposal.pi}</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="lg:w-48 text-right shrink-0">
                                        <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">Proposed Value</div>
                                        <div className="text-2xl font-black text-[#224292] flex items-center justify-end gap-2 group-hover:text-[#ffc107] transition-colors">
                                            <Coins size={20} /> {proposal.amount}
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        ))
                    ) : (
                        <div className="py-32 text-center text-slate-300 font-bold uppercase text-sm tracking-widest bg-white rounded-[2rem] border border-slate-100">
                            No active proposals found for this department
                        </div>
                    )}
                </div>

            </div>
        </div>
    )
}

export default ResearchProposalsPage
