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
  ArrowLeft,
  ChevronRight,
  User
} from 'lucide-react'
import { motion } from 'framer-motion'

const LibraryPage = () => {
    const navigate = useNavigate();

    return (
      <div className="min-h-screen bg-[#F8FAFF] pb-24 font-graphik">
        {/* Minimal Header (Removed Hero) */}
        <div className="relative pt-10 pb-6 px-6 bg-gradient-to-b from-[#18357a]/5 to-transparent overflow-hidden">
            <div className="absolute top-0 right-0 w-96 h-96 bg-[#ffc107]/5 blur-[100px] rounded-full -translate-y-1/2 translate-x-1/2" />
            <div className="max-w-7xl mx-auto flex flex-col items-center text-center">
                <motion.h1 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                    className="text-4xl md:text-6xl font-bold text-[#18357a] tracking-tighter leading-none mb-6"
                >
                    Library <span className="text-[#ffc107]">Resource Center</span>
                </motion.h1>
                
                <motion.button
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.2 }}
                    onClick={() => navigate('/campus-life')}
                    className="flex items-center gap-2 text-xs font-bold text-[#64779F] tracking-widest hover:text-[#18357a] transition-colors"
                >
                    <ArrowLeft size={14} /> Back to Hub
                </motion.button>
            </div>
        </div>

        <div className="max-w-7xl mx-auto px-6 py-12 relative z-20 space-y-12">
            
            {/* Header with Dots Pattern */}
            <div className="relative flex items-center justify-between">
                <div className="flex items-center gap-4">
                    <div className="w-14 h-14 bg-[#18357a] text-[#ffc107] rounded-2xl flex items-center justify-center shadow-xl">
                        <Library size={28} />
                    </div>
                    <div>
                        <h2 className="text-3xl font-bold text-[#18357a] tracking-tight">Central Library</h2>
                        <p className="text-base font-bold text-[#ffc107] tracking-[1px]">Resource & Knowledge Center</p>
                    </div>
                </div>
            </div>

            {/* Vision & Mission Grid */}
            <div className="grid lg:grid-cols-2 gap-10">
                <div className="space-y-10">
                    <h2 className="text-4xl font-bold text-[#18357a] tracking-tight leading-none">Vision & <span className="text-[#ffc107]">Mission</span></h2>
                    
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        {/* Vision Card */}
                        <div className="relative p-8 bg-white rounded-3xl shadow-[0_20px_50px_rgba(24,53,122,0.06)] border border-slate-50 group hover:-translate-y-1 transition-all overflow-hidden">
                            <div className="absolute bottom-0 left-0 right-0 h-2 bg-gradient-to-r from-blue-400 to-transparent" />
                            <div className="flex items-center gap-4 mb-6">
                                <div className="w-12 h-12 rounded-2xl bg-blue-50 flex items-center justify-center text-blue-600 shadow-sm border border-blue-100">
                                    <Eye size={24} />
                                </div>
                                <div className="space-y-1">
                                    <span className="text-sm font-bold tracking-[1px] text-[#18357a]">Vision</span>
                                    <div className="h-0.5 w-8 bg-blue-400 rounded-full" />
                                </div>
                            </div>
                            <div className="space-y-2">
                                <div className="h-1.5 w-full bg-slate-100 rounded-full" />
                                <div className="h-1.5 w-3/4 bg-slate-100 rounded-full" />
                                <p className="text-base text-slate-700 font-bold leading-relaxed mt-4">To nurture research scholars and promote knowledge enrichment.</p>
                            </div>
                        </div>

                        {/* Mission Card */}
                        <div className="relative p-8 bg-white rounded-3xl shadow-[0_20px_50px_rgba(24,53,122,0.06)] border border-slate-50 group hover:-translate-y-1 transition-all overflow-hidden">
                            <div className="absolute bottom-0 left-0 right-0 h-2 bg-gradient-to-r from-[#ffc107] to-transparent" />
                            <div className="flex items-center gap-4 mb-6">
                                <div className="w-12 h-12 rounded-2xl bg-orange-50 flex items-center justify-center text-orange-500 shadow-sm border border-orange-100">
                                    <Target size={24} />
                                </div>
                                <div className="space-y-1">
                                    <span className="text-sm font-bold tracking-[1px] text-[#18357a]">Mission</span>
                                    <div className="h-0.5 w-8 bg-orange-400 rounded-full" />
                                </div>
                            </div>
                            <div className="space-y-2">
                                <div className="h-1.5 w-full bg-slate-100 rounded-full" />
                                <div className="h-1.5 w-3/4 bg-slate-100 rounded-full" />
                                <p className="text-base text-slate-700 font-bold leading-relaxed mt-4">To provide world-class knowledge for holistic excellence.</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Hero Image with Floating Button */}
                <div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl group border-8 border-white min-h-[350px]">
                    <img 
                        src="https://images.unsplash.com/photo-1521587760476-6c12a4b040da?q=80&w=1200&auto=format&fit=crop" 
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000" 
                        alt="Library" 
                    />
                    {/* Floating Center Icon Wrapper */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                        <div className="w-24 h-24 rounded-full bg-white/20 backdrop-blur-md border border-white flex items-center justify-center shadow-2xl relative">
                            <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center text-[#18357a] shadow-lg">
                                <BookOpen size={30} />
                            </div>
                        </div>
                    </div>
                    
                    {/* Bottom OPAC Link */}
                    <div className="absolute bottom-8 left-1/2 -translate-x-1/2 w-full max-w-[280px] px-6">
                        <a 
                            href="http://115.244.103.83/webopac" 
                            target="_blank" 
                            rel="noreferrer" 
                            className="flex items-center justify-center gap-4 bg-[#18357a] text-white px-8 py-4 rounded-2xl font-bold text-sm tracking-widest hover:bg-[#ffc107] hover:text-[#18357a] transition-all shadow-[0_15px_30px_rgba(24,53,122,0.3)] group overflow-hidden relative"
                        >
                            Web OPAC Access
                            <ExternalLink size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                        </a>
                    </div>
                </div>
            </div>

            {/* Feature Row - Modern Mockup Style */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {[
                    { t: 'Library Access', p: '/campus-life/library/access', i: Library, c: 'bg-blue-50 text-blue-600 border-blue-100', s: 'blue' },
                    { t: 'Books & Collections', p: '/campus-life/library/collections', i: BookOpen, c: 'bg-orange-50 text-orange-500 border-orange-100', s: 'orange' },
                    { t: 'Journals & Digital', p: '/campus-life/library/journals', i: Monitor, c: 'bg-indigo-50 text-indigo-600 border-indigo-100', s: 'indigo' },
                    { t: 'Periodicals', p: '/campus-life/library/achievements', i: Trophy, c: 'bg-purple-50 text-purple-600 border-purple-100', s: 'purple' }
                ].map((item, idx) => (
                    <div 
                        key={idx} 
                        onClick={() => navigate(item.p)}
                        className="group bg-white p-8 rounded-[2rem] border border-slate-50 shadow-[0_10px_30px_rgba(24,53,122,0.03)] hover:shadow-[0_20px_50px_rgba(24,53,122,0.08)] hover:-translate-y-1 transition-all cursor-pointer flex items-center gap-6"
                    >
                        <div className={`w-16 h-16 rounded-2xl flex items-center justify-center shrink-0 border transition-all ${item.c}`}>
                            <item.i size={28} />
                        </div>
                        <div className="flex-1 space-y-3">
                            <div className="space-y-1">
                                <h4 className="text-base font-bold text-[#18357a] tracking-tight">{item.t}</h4>
                                <div className={`h-0.5 w-8 rounded-full ${item.s === 'blue' ? 'bg-blue-400' : item.s === 'orange' ? 'bg-orange-400' : item.s === 'indigo' ? 'bg-indigo-400' : 'bg-purple-400'}`} />
                            </div>
                            <div className="flex items-center gap-2 text-[#18357a] group-hover:gap-3 transition-all">
                                <span className="text-xs font-bold tracking-widest">View details</span>
                                <ArrowLeft size={12} className="rotate-180" />
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Bottom Grid: Team and Regulations */}
            <div className="grid lg:grid-cols-2 gap-10">
                {/* Expert Team Card */}
                <div className="bg-white p-10 rounded-[3rem] shadow-[0_25px_60px_rgba(24,53,122,0.06)] border border-slate-50 relative overflow-hidden">
                    <div className="flex items-center gap-4 mb-10">
                        <div className="w-12 h-12 rounded-2xl bg-blue-50 flex items-center justify-center text-blue-600">
                            <Users size={24} />
                        </div>
                        <div className="space-y-1">
                            <h3 className="text-xl font-bold text-[#18357a]">Expert Team</h3>
                            <div className="h-1 w-10 bg-blue-600 rounded-full" />
                        </div>
                    </div>
                    
                    <div className="space-y-6">
                        {[
                            { n: 'Mr. M. Gunasekaran', d: 'Librarian', c: 'bg-blue-600' },
                            { n: 'Mr. C. Ramesh', d: 'Assistant Librarian', c: 'bg-orange-600' },
                            { n: 'Mrs. N. Indumathi', d: 'Library Assistant', c: 'bg-purple-600' },
                            { n: 'Mrs. T. Banumathi', d: 'Library Assistant', c: 'bg-green-600' },
                            { n: 'Mr. P. Sakthivel', d: 'Library Assistant', c: 'bg-red-600' }
                        ].map((member, i) => (
                            <div key={i} className="flex items-center justify-between group cursor-default py-2 border-b border-slate-50 last:border-0">
                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 rounded-full bg-slate-50 flex items-center justify-center text-[#18357a] border border-slate-100 group-hover:bg-blue-600 group-hover:text-white transition-all">
                                        <User size={24} />
                                    </div>
                                    <div className="space-y-0.5">
                                        <p className="text-base font-bold text-black">{member.n}</p>
                                        <p className="text-xs font-bold text-slate-600 tracking-widest">{member.d}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Library Regulations Card */}
                <div className="bg-[#FFFDF8] p-10 rounded-[3rem] shadow-[0_25px_60px_rgba(245,158,11,0.06)] border border-orange-50 relative overflow-hidden">
                    <div className="flex items-center gap-4 mb-10">
                        <div className="w-12 h-12 rounded-2xl bg-orange-50 flex items-center justify-center text-orange-500">
                            <ShieldCheck size={24} />
                        </div>
                        <div className="space-y-1">
                            <h3 className="text-xl font-bold text-[#18357a]">Library Regulations</h3>
                            <div className="h-1 w-10 bg-[#ffc107] rounded-full" />
                        </div>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-4">
                        {[
                            { i: VolumeX, t: 'Absolute silence inside premises.' },
                            { i: Smartphone, t: 'Mobile Phones are prohibited.' },
                            { i: IdCard, t: 'Identity Card is mandatory.' },
                            { i: Fingerprint, t: 'Sign electronic gate entry register.' },
                            { i: PenTool, t: 'Resources return without marks.' },
                            { i: Sofa, t: 'Furniture should not move.' }
                        ].map((rule, idx) => (
                            <div key={idx} className="bg-white p-5 rounded-2xl border border-orange-100 flex items-center gap-4 group hover:border-[#ffc107] transition-all">
                                <div className="w-10 h-10 rounded-xl bg-orange-50 flex items-center justify-center text-orange-500 group-hover:bg-[#ffc107] group-hover:text-[#18357a] transition-all">
                                    <rule.i size={20} />
                                </div>
                                <p className="text-sm font-bold text-black leading-snug">{rule.t}</p>
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
