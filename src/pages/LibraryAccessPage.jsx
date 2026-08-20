import React from 'react'
import { motion } from 'framer-motion'
import { 
  ShieldCheck, 
  Monitor, 
  ExternalLink, 
  BookOpen,
  Library,
  Globe,
  Layers,
  Sparkles
} from 'lucide-react'
import { useNavigate } from 'react-router-dom'

const LibraryAccessPage = () => {
    const navigate = useNavigate();

    return (
        <div className="min-h-screen bg-[#FCFDFD] font-graphik pb-20">
            {/* Header */}
            <div className="py-10 md:py-12 px-4 sm:px-8 md:px-12 lg:px-16 bg-[#18357a] text-white shadow-md">
                <div className="w-full max-w-7xl mx-auto flex flex-col items-center justify-center text-center">
                    <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight leading-none text-white">
                        Library <span className="text-[#ffc107]">Access</span>
                    </h1>
                    <p className="text-xs sm:text-sm font-medium text-slate-200 uppercase tracking-wider mt-3 max-w-3xl">
                        Integrated Library Management System & Open Access Digital Repositories
                    </p>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 py-8 md:py-12 space-y-10 md:space-y-14">
                
                {/* Section 2: ILMS (Left) & Salient Features (Right) */}
                <div className="grid lg:grid-cols-12 gap-8 items-stretch">
                    {/* Left: ILMS Card */}
                    <div className="lg:col-span-6 p-6 sm:p-8 bg-white rounded-2xl border border-slate-200/90 shadow-lg shadow-slate-900/5 relative overflow-hidden flex flex-col justify-between">
                        <div>
                            <div className="flex items-center gap-4 mb-6">
                                <div className="w-12 h-12 bg-[#18357a] rounded-xl flex items-center justify-center text-[#ffc107] shadow-md shadow-[#18357a]/20 shrink-0">
                                    <Library size={24} />
                                </div>
                                <div>
                                    <h2 className="text-lg md:text-xl font-bold text-[#18357a] tracking-tight leading-tight">Integrated Library (ILMS)</h2>
                                    <p className="text-xs font-normal text-black mt-0.5">Automated Central Library Software</p>
                                </div>
                            </div>

                            <div className="grid grid-cols-2 gap-3.5 mb-6">
                                {[
                                    { label: 'Software Name', value: 'CampesiLIB', icon: Monitor },
                                    { label: 'Automation Status', value: 'Fully Automated', icon: ShieldCheck },
                                    { label: 'System Version', value: 'v8.6.9', icon: BookOpen },
                                    { label: 'Implementation', value: 'Since 2009', icon: Globe }
                                ].map((item, idx) => (
                                    <div key={idx} className="p-3.5 bg-slate-50/80 rounded-xl border border-slate-200/70 flex items-center gap-3">
                                        <div className="w-9 h-9 rounded-lg bg-white flex items-center justify-center text-[#18357a] border border-slate-200/60 shrink-0 shadow-xs">
                                            <item.icon size={16} />
                                        </div>
                                        <div>
                                            <p className="text-[10px] font-medium text-black uppercase tracking-wider leading-none mb-1">{item.label}</p>
                                            <p className="text-sm font-semibold text-black leading-tight">{item.value}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="p-4 sm:p-5 bg-slate-50 rounded-xl border-l-4 border-l-[#18357a] border-y border-r border-slate-200/60 mt-2">
                            <p className="text-xs sm:text-[13px] font-normal text-black leading-relaxed">
                                "CampesiLIB is an ILMS software designed to manage the institutional library system efficiently. It captures almost every activity related to the library and maintains records of books, periodicals, and other materials."
                            </p>
                        </div>
                    </div>

                    {/* Right: Salient Features Card */}
                    <div className="lg:col-span-6 p-6 sm:p-8 bg-white rounded-2xl border border-slate-200/90 shadow-lg shadow-slate-900/5 flex flex-col justify-between">
                        <div>
                            <div className="flex items-center gap-4 mb-6">
                                <div className="w-12 h-12 bg-[#18357a] rounded-xl flex items-center justify-center text-[#ffc107] shadow-md shadow-[#18357a]/20 shrink-0">
                                    <Layers size={24} />
                                </div>
                                <div>
                                    <h2 className="text-lg md:text-xl font-bold text-[#18357a] tracking-tight leading-tight">Salient Features</h2>
                                    <p className="text-xs font-normal text-black mt-0.5">Core Functionalities of CampesiLIB</p>
                                </div>
                            </div>
                            
                            <div className="grid sm:grid-cols-2 gap-3.5">
                                {[
                                    { t: 'Student Gate Entry', d: 'Online module with barcode/RFID tracking.' },
                                    { t: 'Cataloguing Database', d: 'Organize resources by subject & department.' },
                                    { t: 'OPAC Search Portal', d: 'Access resources by title, author, or keywords.' },
                                    { t: 'Circulation Control', d: 'Issue, return, renewal, and reservation mgmt.' },
                                    { t: 'Stock Verification', d: 'Real-time tracking of asset availability.' },
                                    { t: 'Reporting Suite', d: 'Automated daily transaction insights.' }
                                ].map((feat, i) => (
                                    <div key={i} className="p-3.5 bg-slate-50/80 border border-slate-200/70 hover:border-[#18357a]/30 hover:bg-blue-50/40 rounded-xl transition-all flex items-start gap-3 group">
                                        <div className="w-2 h-2 rounded-full bg-[#18357a] mt-1.5 shrink-0 group-hover:bg-[#ffc107] transition-colors" />
                                        <div>
                                            <p className="text-sm font-semibold text-black mb-0.5">{feat.t}</p>
                                            <p className="text-xs font-normal text-black leading-relaxed">{feat.d}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Section 3: Open Access Resources (Single Full-Width Section) */}
                <div className="bg-[#18357a] p-6 sm:p-8 md:p-12 rounded-2xl text-white shadow-xl relative overflow-hidden border border-[#18357a]">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8 pb-6 border-b border-white/15">
                        <div className="flex items-center gap-4">
                            <div className="w-12 h-12 bg-[#ffc107] rounded-xl flex items-center justify-center text-[#18357a] shadow-md shadow-black/10 shrink-0">
                                <Globe size={24} />
                            </div>
                            <div>
                                <h2 className="text-xl md:text-2xl font-bold tracking-tight text-white">Open Access Resources</h2>
                                <p className="text-xs sm:text-sm font-medium text-slate-200 mt-0.5">Free Online Academic Repositories & Research Portals</p>
                            </div>
                        </div>
                    </div>

                    <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start">
                        {/* Open Access Books */}
                        <div>
                            <div className="flex items-center gap-2 mb-4">
                                <span className="w-1.5 h-4 bg-[#ffc107] rounded-full inline-block" />
                                <h4 className="text-xs sm:text-sm font-semibold uppercase tracking-wider text-[#ffc107]">Open Access Books</h4>
                            </div>
                            <div className="grid sm:grid-cols-2 gap-3">
                                {[
                                    { n: 'DOA Books', u: 'https://doabooks.org' },
                                    { n: 'World Bank', u: 'https://openknowledge.worldbank.org/' },
                                    { n: 'ePG Pathshala', u: 'https://epgp.inflibnet.ac.in/' },
                                    { n: 'OAPEN Repository', u: 'https://www.oapen.org/' },
                                    { n: 'Academic Tutorials', u: 'https://www.academictutorials.com' },
                                    { n: 'PDF Drive (TMH)', u: 'https://www.pdfdrive.com/tata-mcgraw-hill-books.html/' },
                                    { n: 'LibriVox Audio', u: 'https://librivox.org/' }
                                ].map((link, idx) => (
                                    <a 
                                        key={idx} 
                                        href={link.u} 
                                        target="_blank" 
                                        rel="noreferrer" 
                                        className="group px-4 py-3 bg-white/10 hover:bg-white rounded-xl border border-white/15 transition-all flex items-center justify-between shadow-xs cursor-pointer"
                                    >
                                        <span className="text-xs sm:text-sm font-medium text-white group-hover:text-[#18357a] transition-colors truncate pr-2">{link.n}</span>
                                        <ExternalLink size={14} className="text-[#ffc107] group-hover:text-[#18357a] shrink-0 transition-colors" />
                                    </a>
                                ))}
                            </div>
                        </div>

                        {/* Scholarly Journals */}
                        <div>
                            <div className="flex items-center gap-2 mb-4">
                                <span className="w-1.5 h-4 bg-[#ffc107] rounded-full inline-block" />
                                <h4 className="text-xs sm:text-sm font-semibold uppercase tracking-wider text-[#ffc107]">Scholarly Journals</h4>
                            </div>
                            <div className="grid sm:grid-cols-2 gap-3">
                                {[
                                    { n: 'DOAJ Core', u: 'https://doaj.org/' },
                                    { n: 'Cambridge OA', u: 'https://www.cambridge.org/core/what-we-publish/open-access' },
                                    { n: 'Project Euclid', u: 'https://projecteuclid.org/librarians/lib_oa' },
                                    { n: 'IAS Journals', u: 'https://www.ias.ac.in/' },
                                    { n: 'OALib Repository', u: 'https://www.oalib.com/' },
                                    { n: 'SSRN Center', u: 'https://www.ssrn.com/index.cfm/en/' },
                                    { n: 'AGRIS Global', u: 'https://agris.fao.org/agris-search/index.do' },
                                    { n: 'Springer Open', u: 'https://www.springeropen.com/' },
                                    { n: 'PubMed Central', u: 'https://www.ncbi.nlm.nih.gov/pmc/' },
                                    { n: 'Wiley Services', u: 'https://authorservices.wiley.com/open-research/open-access/index.html' }
                                ].map((link, idx) => (
                                    <a 
                                        key={idx} 
                                        href={link.u} 
                                        target="_blank" 
                                        rel="noreferrer" 
                                        className="group px-4 py-3 bg-white/10 hover:bg-[#ffc107] rounded-xl border border-white/15 transition-all flex items-center justify-between shadow-xs cursor-pointer"
                                    >
                                        <span className="text-xs sm:text-sm font-medium text-white group-hover:text-[#18357a] transition-colors truncate pr-2">{link.n}</span>
                                        <ExternalLink size={14} className="text-[#ffc107] group-hover:text-[#18357a] shrink-0 transition-colors" />
                                    </a>
                                ))}
                            </div>
                        </div>

                    </div>
                </div>

            </div>
        </div>
    )
}

export default LibraryAccessPage;
