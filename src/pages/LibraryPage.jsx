import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { 
  Library, 
  Eye, 
  Target, 
  ExternalLink, 
  ShieldCheck, 
  BookOpen, 
  Monitor, 
  Trophy, 
  Users, 
  VolumeX, 
  Smartphone, 
  IdCard, 
  Fingerprint, 
  PenTool, 
  Sofa, 
  Handshake, 
  Backpack,
  CheckCircle,
  ArrowLeft
} from 'lucide-react'
import { motion } from 'framer-motion'

const LibraryPage = () => {
    const navigate = useNavigate();

    return (
      <div className="min-h-screen bg-[#FCFDFD] font-graphik pb-24">
        {/* 🔷 Shared Hero Section (Consistent across Hub) */}
        <div className="relative h-[35vh] flex items-center justify-center overflow-hidden bg-[#18357a]">
            <div className="absolute inset-0">
                <img 
                    src="https://images.unsplash.com/photo-1521587760476-6c12a4b040da?q=80&w=1920&auto=format&fit=crop" 
                    className="w-full h-full object-cover opacity-30" 
                    alt="Library Resource Center"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-[#18357a]/90 via-[#18357a]/70 to-transparent" />
            </div>
            
            <div className="relative z-10 text-center px-6">
                <motion.div
                    initial={{ y: 30, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.8 }}
                    className="flex flex-col items-center"
                >
                    <h1 className="text-3xl md:text-5xl font-black text-white uppercase tracking-tighter leading-none mb-8">
                        <span className="block">Library</span>
                        <span className="text-[#ffc107]">Resource Center</span>
                    </h1>

                    <button 
                        onClick={() => navigate('/campus-life')}
                        className="inline-flex items-center gap-2 text-white hover:text-[#18357a] transition-all group border border-white/30 px-5 py-2 rounded-full bg-white/10 hover:bg-[#ffc107] hover:border-[#ffc107] backdrop-blur-md shadow-2xl"
                    >
                        <ArrowLeft size={14} className="group-hover:-translate-x-1 transition-transform" />
                        <span className="text-[10px] font-black uppercase tracking-[2px]">Back to Hub</span>
                    </button>
                </motion.div>
            </div>
        </div>

        <div className="max-w-7xl mx-auto px-6 py-16 relative z-20 space-y-8">
            <div className="flex items-center gap-4 mb-4">
                <div className="w-10 h-10 bg-[#18357a] text-[#ffc107] rounded-xl flex items-center justify-center shadow-lg">
                    <Library size={20} />
                </div>
                <div>
                    <h2 className="text-2xl font-black text-[#18357a] uppercase tracking-tight">Central Library</h2>
                    <p className="text-[9px] font-black text-[#ffc107] uppercase tracking-[3px]">Resource & Knowledge Center</p>
                </div>
            </div>
            {/* Intro Grid */}
            <div className="relative p-10 bg-white rounded-[2rem] border border-slate-100 shadow-2xl shadow-[#18357a]/5">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    <div className="space-y-6">
                        <h2 className="text-3xl font-black text-[#18357a] uppercase tracking-tight leading-none">Vision & <span className="text-[#ffc107]">Mission</span></h2>
                        <div className="grid grid-cols-2 gap-6">
                            <div className="p-6 bg-slate-50 rounded-2xl border border-slate-100">
                                <div className="flex items-center gap-3 mb-4 text-[#18357a]">
                                    <div className="w-10 h-10 rounded-lg bg-white flex items-center justify-center shadow-sm">
                                        <Eye size={20} />
                                    </div>
                                    <span className="text-[11px] font-black uppercase tracking-[2px]">Vision</span>
                                </div>
                                <p className="text-sm text-black leading-relaxed font-medium">To nurture research scholars and promote knowledge enrichment.</p>
                            </div>
                            <div className="p-6 bg-slate-50 rounded-2xl border border-slate-100">
                                <div className="flex items-center gap-3 mb-4 text-[#18357a]">
                                    <div className="w-10 h-10 rounded-lg bg-white flex items-center justify-center shadow-sm">
                                        <Target size={20} />
                                    </div>
                                    <span className="text-[11px] font-black uppercase tracking-[2px]">Mission</span>
                                </div>
                                <p className="text-sm text-black leading-relaxed font-medium">To provide world-class knowledge for holistic excellence.</p>
                            </div>
                        </div>
                    </div>
                    <div className="relative rounded-2xl overflow-hidden shadow-xl border-4 border-white aspect-video">
                        <img src="https://images.unsplash.com/photo-1521587760476-6c12a4b040da?q=80&w=1200&auto=format&fit=crop" className="w-full h-full object-cover" alt="Library" />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#18357a]/60 to-transparent flex items-end p-8">
                            <a href="http://115.244.103.83/webopac" target="_blank" rel="noreferrer" className="flex items-center gap-3 bg-[#ffc107] px-6 py-3 rounded-xl font-black text-xs uppercase tracking-widest text-[#18357a] hover:bg-white transition-all shadow-xl group">
                                Web OPAC Access
                                <ExternalLink size={16} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            {/* Quick Access Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {[
                    { id: 'access', title: 'Library Access', path: '/campus-life/library/access', icon: ShieldCheck },
                    { id: 'books', title: 'Books & Collections', path: '/campus-life/library/collections', icon: BookOpen },
                    { id: 'journals', title: 'Journals & Digital', path: '/campus-life/library/journals', icon: Monitor },
                    { id: 'magazines', title: 'Periodicals', path: '/campus-life/library/achievements', icon: Trophy }
                ].map((cat, i) => (
                    <button 
                        key={i} 
                        onClick={() => navigate(cat.path)} 
                        className="p-10 rounded-3xl bg-white border border-slate-100 text-center group transition-all duration-500 hover:-translate-y-2 shadow-2xl shadow-[#18357a]/5 flex flex-col items-center justify-center min-h-[220px]"
                    >
                        <div className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6 mx-auto bg-slate-50 text-[#18357a] group-hover:bg-[#18357a] group-hover:text-white transition-all duration-500 shadow-inner">
                            <cat.icon size={28} />
                        </div>
                        <div className="space-y-4">
                            <h3 className="text-[15px] font-black uppercase tracking-tight text-[#18357a]">{cat.title}</h3>
                            <div className="flex items-center justify-center gap-2 px-4 py-1.5 bg-[#ffc107]/10 rounded-full border border-[#ffc107]/20 transition-all duration-300 group-hover:bg-[#ffc107] group-hover:text-[#18357a]">
                                <span className="text-[10px] font-black uppercase tracking-widest">View Details</span>
                                <ExternalLink size={12} className="shrink-0" />
                            </div>
                        </div>
                    </button>
                ))}
            </div>

            {/* Combined Team and Rules */}
            <div className="grid lg:grid-cols-[1fr_2fr] gap-8">
                {/* Team */}
                <div className="bg-white p-8 rounded-2xl border border-slate-100 shadow-xl overflow-hidden">
                    <h3 className="text-xl font-black text-[#18357a] uppercase tracking-tight mb-8">Expert Team</h3>
                    <div className="space-y-4">
                        {[
                            { n: 'MR. M. GUNASEKARAN', d: 'Librarian' },
                            { n: 'MR. C. RAMESH', d: 'Asst Librarian' },
                            { n: 'MRS. N. INDUMATHI', d: 'Library Asst' },
                            { n: 'MRS. T. BANUMATHI', d: 'Library Asst' },
                            { n: 'MR. P. SAKTHIVEL', d: 'Library Asst' }
                        ].map((row, i) => (
                            <div key={i} className="flex justify-between items-center py-3 border-b border-slate-50 last:border-0 grow">
                                <p className="text-[13px] font-black text-[#18357a] uppercase">{row.n}</p>
                                <p className="text-[11px] font-bold text-[#ffc107] uppercase tracking-widest">{row.d}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Rules */}
                <div className="bg-white p-8 rounded-2xl border border-slate-100 shadow-xl">
                    <h3 className="text-xl font-black text-[#18357a] uppercase tracking-tight mb-8">Library Regulations</h3>
                    <div className="grid md:grid-cols-2 gap-6">
                        {[
                            { i: VolumeX, t: 'Absolute silence inside premises.' },
                            { i: Smartphone, t: 'Mobile Phones are prohibited.' },
                            { i: IdCard, t: 'Identity Card is mandatory.' },
                            { i: Fingerprint, t: 'Sign electronic gate entry register.' },
                            { i: PenTool, t: 'Resources return without marks.' },
                            { i: Sofa, t: 'Furniture should not move.' }
                        ].map((rule, idx) => (
                            <div key={idx} className="flex gap-4 p-5 bg-slate-50 rounded-xl border border-slate-100">
                                <rule.i size={24} className="text-[#ffc107] shrink-0" />
                                <p className="text-sm font-black text-[#18357a] leading-relaxed uppercase tracking-tight">{rule.t}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
      </div>
    )
}

export default LibraryPage
