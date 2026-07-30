import React from 'react'
import { useNavigate } from 'react-router-dom'
import { 
  Library, Eye, Target, ExternalLink, ShieldCheck, BookOpen, Monitor, 
  Trophy, Users, VolumeX, Smartphone, IdCard, Fingerprint, PenTool, Sofa, 
  ArrowLeft, ArrowRight, User, Search, FileText, Clock, GraduationCap
} from 'lucide-react'
import { motion } from 'framer-motion'

import heroImg from '../assets/student life/library.webp'
import libraryImg from '../assets/student life/libary.png'

const LibraryPage = () => {
    const navigate = useNavigate();

    return (
      <div className="min-h-screen bg-[#F8FAFF] pb-24 font-graphik">
        {/* Hero Section */}
        <div className="relative w-full h-[320px] sm:h-[400px] md:h-[500px] bg-black overflow-hidden">
            <div className="absolute inset-0 z-0">
                <img 
                    src={heroImg} 
                    className="w-full h-full object-cover object-center"
                    alt="Library"
                />
                <div className="absolute inset-0 bg-black/45 md:bg-gradient-to-r md:from-black/80 md:via-black/40 md:to-transparent" />
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-6 h-full flex flex-col justify-center pb-12 md:pb-20">
                <motion.p 
                    initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
                    className="text-[#ffc107] font-bold tracking-widest text-[10px] md:text-sm mb-2 md:mb-4"
                >
                    LEARN. RESEARCH. GROW.
                </motion.p>
                <motion.h1 
                    initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
                    className="text-3xl md:text-5xl font-bold text-white leading-tight mb-2 md:mb-4"
                >
                    Library <br className="hidden md:block" />
                    <span className="text-[#ffc107]">Resource Center</span>
                </motion.h1>
                <motion.p 
                    initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}
                    className="text-slate-200 max-w-xl text-xs md:text-base leading-relaxed mb-2 md:mb-4"
                >
                    Your gateway to knowledge, innovation, and academic excellence. Explore a world of resources to fuel your curiosity and research.
                </motion.p>
            </div>

            {/* Stats Bar */}
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-6xl px-6 hidden md:block">
                <div className="bg-[#224292] border border-slate-700/50 rounded-t-2xl backdrop-blur-md p-6 flex items-center justify-between gap-6 shadow-[0_-10px_40px_rgba(0,0,0,0.2)]">
                    {[
                        { count: "39,553+", label: "Volumes", icon: BookOpen },
                        { count: "8,569+", label: "Book Titles", icon: FileText },
                        { count: "1,526+", label: "E-Journals", icon: Clock },
                        { count: "30+", label: "Digital PCs", icon: GraduationCap }
                    ].map((stat, idx) => (
                        <div key={idx} className="flex items-center gap-4 flex-1 justify-center lg:border-r border-slate-700/50 last:border-0">
                            <div className="text-[#ffc107]"><stat.icon size={28} strokeWidth={1.5} /></div>
                            <div>
                                <h4 className="text-white font-bold text-lg leading-tight">{stat.count}</h4>
                                <p className="text-slate-400 text-xs font-medium">{stat.label}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>

        <div className="max-w-7xl mx-auto px-3 sm:px-6 py-6 sm:py-12 relative z-20 space-y-8 sm:space-y-16">
            
            {/* Central Library Overview Section */}
            <div className="bg-white rounded-2xl sm:rounded-3xl p-4 sm:p-6 md:p-12 border border-slate-100 shadow-xl shadow-slate-200/40 space-y-6 sm:space-y-8">
                <div className="flex items-center gap-3">
                    <span className="w-1.5 h-8 bg-[#ffc107] rounded-full inline-block shrink-0" />
                    <div>
                        <h2 className="text-2xl md:text-3xl font-bold text-[#224292] tracking-tight">Central <span className="text-[#ffc107]">Library</span></h2>
                        <p className="text-[11px] sm:text-xs md:text-sm font-bold text-[#64779F] uppercase tracking-wider mt-0.5">Air-Conditioned Digital Library & Academic Resource Hub</p>
                    </div>
                </div>

                <div className="grid lg:grid-cols-12 gap-6 sm:gap-8 items-stretch">
                    {/* 4 Content Cards */}
                    <div className="lg:col-span-8 grid md:grid-cols-2 gap-4 sm:gap-6 text-[#333333] font-graphik text-sm md:text-[14.5px] leading-relaxed text-justify">
                        <div className="p-4 sm:p-6 rounded-xl sm:rounded-2xl bg-slate-50 border border-slate-100 space-y-3 hover:border-[#224292]/30 transition-all flex flex-col justify-between">
                            <div>
                                <h3 className="font-bold text-[#224292] text-base flex items-center gap-2 mb-2">
                                    <span className="w-2 h-2 rounded-full bg-[#ffc107] shrink-0" />
                                    Vast Collection & Titles
                                </h3>
                                <p className="text-justify">
                                    The Air-Conditioned Digital Library at Knowledge Institute of Technology offers an extensive collection of books, journals, and academic resources across Engineering and Technology, Management, and Science & Humanities. The library houses more than 8,569 titles with over 39,553 volumes, supporting the academic and research needs of students and faculty members.
                                </p>
                            </div>
                        </div>

                        <div className="p-4 sm:p-6 rounded-xl sm:rounded-2xl bg-slate-50 border border-slate-100 space-y-3 hover:border-[#224292]/30 transition-all flex flex-col justify-between">
                            <div>
                                <h3 className="font-bold text-[#224292] text-base flex items-center gap-2 mb-2">
                                    <span className="w-2 h-2 rounded-full bg-[#ffc107] shrink-0" />
                                    Journals & OPAC System
                                </h3>
                                <p className="text-justify">
                                    The library provides access to 1,526 e-journals and 96 print journals, along with magazines and other reference materials. An Online Public Access Catalogue (OPAC) facility enables users to easily search and access books and other learning resources. The computerized library management system further streamlines the borrowing and returning process.
                                </p>
                            </div>
                        </div>

                        <div className="p-4 sm:p-6 rounded-xl sm:rounded-2xl bg-slate-50 border border-slate-100 space-y-3 hover:border-[#224292]/30 transition-all flex flex-col justify-between">
                            <div>
                                <h3 className="font-bold text-[#224292] text-base flex items-center gap-2 mb-2">
                                    <span className="w-2 h-2 rounded-full bg-[#ffc107] shrink-0" />
                                    Digital Section & NDLI/DELNET
                                </h3>
                                <p className="text-justify">
                                    The digital section of the library is equipped with more than 30 computers with headset facilities, ensuring convenient access to a wide range of online academic resources. The institution is also an active member of NDLI and DELNET, enabling users to explore a broader collection of digital learning materials and research databases.
                                </p>
                            </div>
                        </div>

                        <div className="p-4 sm:p-6 rounded-xl sm:rounded-2xl bg-slate-50 border border-slate-100 space-y-3 hover:border-[#224292]/30 transition-all flex flex-col justify-between">
                            <div>
                                <h3 className="font-bold text-[#224292] text-base flex items-center gap-2 mb-2">
                                    <span className="w-2 h-2 rounded-full bg-[#ffc107] shrink-0" />
                                    Plagiarism & Reprography
                                </h3>
                                <p className="text-justify">
                                    In addition, the library offers Turnitin plagiarism checking facilities to support academic integrity and quality research practices among students and faculty members. A reprographic facility is also available for reproducing documents, research papers, articles, and book chapters, which is highly beneficial for academic and research purposes.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Girl Library Image (Permanent Vibrant Effect) */}
                    <div className="lg:col-span-4 relative rounded-2xl sm:rounded-3xl overflow-hidden min-h-[300px] sm:min-h-[350px] lg:min-h-full shadow-2xl shadow-blue-900/15 border-2 border-[#224292]/15 group">
                        <img 
                            src={libraryImg} 
                            className="w-full h-full object-cover object-center transform scale-105 transition-transform duration-700" 
                            alt="Library Interior" 
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#224292]/30 via-transparent to-transparent pointer-events-none" />
                    </div>
                </div>
            </div>

            {/* Vision & Mission section */}
            <div className="space-y-8">
                <h2 className="text-2xl md:text-3xl font-bold text-[#224292] tracking-tight">Vision & <span className="text-[#ffc107]">Mission</span></h2>
                
                <div className="grid sm:grid-cols-3 gap-6">
                    {/* Vision Card */}
                    <div className="bg-white p-6 sm:p-8 rounded-2xl shadow-lg sm:shadow-[0_10px_40px_rgba(0,0,0,0.04)] border border-slate-100/80 flex flex-col items-start gap-4 hover:-translate-y-1 transition-all duration-300">
                        <div className="w-12 h-12 rounded-full bg-[#224292] text-white flex items-center justify-center mb-2">
                            <Eye size={20} />
                        </div>
                        <h3 className="text-[#224292] font-semibold text-lg">Our Vision</h3>
                        <p className="text-black text-sm leading-relaxed flex-1 text-justify sm:text-left">
                            To nurture research scholars and promote knowledge enrichment through world-class learning resources and services.
                        </p>
                        <div className="w-8 h-1 bg-[#224292] rounded-full mt-2" />
                    </div>

                    {/* Mission Card */}
                    <div className="bg-white p-6 sm:p-8 rounded-2xl shadow-lg sm:shadow-[0_10px_40px_rgba(0,0,0,0.04)] border border-slate-100/80 flex flex-col items-start gap-4 hover:-translate-y-1 transition-all duration-300">
                        <div className="w-12 h-12 rounded-full bg-[#ffc107] text-[#224292] flex items-center justify-center mb-2">
                            <Target size={20} />
                        </div>
                        <h3 className="text-[#224292] font-semibold text-lg">Our Mission</h3>
                        <p className="text-black text-sm leading-relaxed flex-1 text-justify sm:text-left">
                            To provide world-class knowledge resources and innovative services for holistic academic growth and lifelong learning.
                        </p>
                        <div className="w-8 h-1 bg-[#ffc107] rounded-full mt-2" />
                    </div>

                    {/* Web OPAC Access Card */}
                    <a 
                        href="http://115.244.103.83/webopac" 
                        target="_blank" 
                        rel="noreferrer" 
                        className="bg-white p-6 sm:p-8 rounded-2xl shadow-lg sm:shadow-[0_10px_40px_rgba(0,0,0,0.04)] border border-slate-100/80 flex flex-col items-start gap-4 hover:-translate-y-1 transition-all duration-300 group cursor-pointer"
                    >
                        <div className="w-12 h-12 rounded-full bg-[#224292] text-white flex items-center justify-center mb-2 group-hover:bg-[#ffc107] group-hover:text-[#224292] transition-colors">
                            <BookOpen size={20} className="text-white group-hover:text-[#224292] transition-colors" />
                        </div>
                        <h3 className="text-[#224292] font-semibold text-lg flex items-center gap-1.5">
                            Web OPAC <ExternalLink size={14} className="text-[#ffc107] shrink-0" />
                        </h3>
                        <p className="text-black text-sm leading-relaxed flex-1 text-justify sm:text-left">
                            Search books, view availability, and manage your library account online from anywhere.
                        </p>
                        <div className="w-8 h-1 bg-[#224292] rounded-full mt-2 group-hover:bg-[#ffc107] transition-colors" />
                    </a>
                </div>
            </div>

            {/* Library Services */}
            <div className="space-y-8 pt-6">
                <div>
                    <h2 className="text-2xl md:text-3xl font-bold text-[#224292] tracking-tight">Library <span className="text-[#ffc107]">Services</span></h2>
                </div>

                <div className="grid lg:grid-cols-2 gap-6">
                    {[
                        { t: 'Library Access', d: 'Access e-books, journals and digital resources anytime, anywhere.', p: '/campus-life/library/access', i: Library, img: 'https://images.unsplash.com/photo-1568667256549-094345857637?w=500&auto=format&fit=crop' },
                        { t: 'Books & Collections', d: 'Explore a vast collection of national and international books.', p: '/campus-life/library/collections', i: BookOpen, img: 'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=500&auto=format&fit=crop' },
                        { t: 'Journals & Digital', d: 'Open access to research papers, publications and theses.', p: '/campus-life/library/journals', i: Monitor, img: 'https://images.unsplash.com/photo-1507842217343-583bb7270b66?w=500&auto=format&fit=crop' },
                        { t: 'Periodicals', d: 'Quiet and comfortable spaces designed for focused learning.', p: '/campus-life/library/achievements', i: Trophy, img: 'https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?w=500&auto=format&fit=crop' }
                    ].map((item, idx) => (
                        <div 
                            key={idx} 
                            onClick={() => navigate(item.p)}
                            className="group bg-white rounded-xl border border-slate-100 shadow-[0_10px_30px_rgba(0,0,0,0.03)] hover:shadow-[0_20px_50px_rgba(0,0,0,0.08)] transition-all cursor-pointer overflow-hidden flex relative min-h-[160px]"
                        >
                            <div className="p-6 md:p-8 flex-1 relative z-10 w-[60%] bg-gradient-to-r from-white via-white to-transparent">
                                <div className="flex items-center gap-3 mb-3">
                                    <div className="w-10 h-10 rounded-full bg-[#224292] text-white flex items-center justify-center shrink-0">
                                        <item.i size={18} />
                                    </div>
                                    <h4 className="text-base font-bold text-[#224292]">{item.t}</h4>
                                </div>
                                <p className="text-xs text-slate-500 font-medium leading-relaxed max-w-[200px] mb-4">{item.d}</p>
                                <div className="text-[#ffc107]">
                                    <ArrowRight size={18} className="group-hover:translate-x-2 transition-transform" />
                                </div>
                            </div>
                            <div className="absolute right-0 top-0 bottom-0 w-[50%] z-0">
                                <img src={item.img} alt={item.t} className="w-full h-full object-cover object-center" />
                                <div className="absolute inset-0 bg-gradient-to-r from-white via-white/70 to-transparent" />
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Bottom Grid: Team and Regulations (Retained Original Content) */}
            <div className="grid lg:grid-cols-2 gap-10 pt-6">
                {/* Expert Team Card */}
                <div className="bg-white p-8 md:p-10 rounded-2xl shadow-[0_15px_40px_rgba(10,25,47,0.04)] border border-slate-100 relative overflow-hidden">
                    <div className="flex items-center gap-4 mb-8">
                        <div className="w-12 h-12 rounded-2xl bg-[#224292] flex items-center justify-center text-white">
                            <Users size={24} />
                        </div>
                        <div className="space-y-1">
                            <h3 className="text-xl font-bold text-[#224292]">Expert Team</h3>
                            <div className="h-1 w-10 bg-[#ffc107] rounded-full" />
                        </div>
                    </div>
                    
                    <div className="space-y-4">
                        {[
                            { n: 'Mr. M. Gunasekaran', d: 'Librarian' },
                            { n: 'Mr. C. Ramesh', d: 'Assistant Librarian' },
                            { n: 'Mrs. N. Indumathi', d: 'Library Assistant' },
                            { n: 'Mrs. T. Banumathi', d: 'Library Assistant' },
                            { n: 'Mr. R.J. Vinoth', d: 'Library Assistant' }
                        ].map((member, i) => (
                            <div key={i} className="flex items-center justify-between group cursor-default py-3 border-b border-slate-100 last:border-0">
                                <div className="flex items-center gap-4">
                                    <div className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center text-[#224292] border border-slate-200 group-hover:bg-[#224292] group-hover:text-white transition-all">
                                        <User size={18} />
                                    </div>
                                    <div className="space-y-0.5">
                                        <p className="text-sm font-bold text-[#224292]">{member.n}</p>
                                        <p className="text-[11px] font-bold text-slate-500 uppercase tracking-wider">{member.d}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Library Regulations Card */}
                <div className="bg-[#224292] p-8 md:p-10 rounded-2xl shadow-2xl relative overflow-hidden">
                    <div className="flex items-center gap-4 mb-8">
                        <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center text-[#ffc107]">
                            <ShieldCheck size={24} />
                        </div>
                        <div className="space-y-1">
                            <h3 className="text-xl font-bold text-white">Library Regulations</h3>
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
                            <div key={idx} className="bg-white/5 p-4 rounded-xl border border-white/10 flex items-start gap-4 hover:border-[#ffc107]/50 transition-all">
                                <div className="text-[#ffc107] mt-0.5">
                                    <rule.i size={18} />
                                </div>
                                <p className="text-sm font-medium text-slate-300 leading-snug">{rule.t}</p>
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
