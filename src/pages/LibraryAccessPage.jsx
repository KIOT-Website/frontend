import React from 'react'
import { motion } from 'framer-motion'
import { 
  ShieldCheck, 
  Monitor, 
  ExternalLink, 
  BookOpen,
  Library,
  Globe
} from 'lucide-react'
import { useNavigate } from 'react-router-dom'

const LibraryAccessPage = () => {
    const navigate = useNavigate();

    return (
        <div className="min-h-screen bg-white font-graphik">
            {/* Minimal Hero Header */}
            <div className="relative pt-6 pb-2 px-6 bg-gradient-to-b from-[#224292]/5 to-transparent overflow-hidden">
                <div className="absolute top-0 right-0 w-96 h-96 bg-[#ffc107]/5 blur-[100px] rounded-full -translate-y-1/2 translate-x-1/2" />
                <div className="max-w-7xl mx-auto flex flex-col items-center text-center">
                    <motion.h1 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-4xl md:text-6xl font-semibold text-[#224292] tracking-tight leading-none mb-2"
                    >
                        Library <span className="text-[#ffc107] font-normal">Access</span>
                    </motion.h1>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-3 md:px-6 py-6">
                <div className="grid lg:grid-cols-2 gap-12 items-start">
                    {/* ILMS Section */}
                    <motion.div 
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="space-y-8 px-0"
                    >
                        <div className="p-5 md:p-10 bg-white rounded-[3rem] border border-slate-100 shadow-2xl shadow-slate-200/40 relative overflow-hidden group hover:border-[#224292]/20 transition-all duration-500">
                             <div className="absolute top-0 right-0 w-32 h-32 bg-[#224292]/5 rounded-bl-[100%] transition-transform duration-700 group-hover:scale-125" />
                             
                             <div className="flex items-center gap-4 mb-10 relative z-10">
                                <div className="w-14 h-14 bg-[#224292] rounded-2xl flex items-center justify-center text-white shadow-xl shadow-[#224292]/20">
                                    <Library size={28} />
                                </div>
                                <div>
                                    <h2 className="text-2xl font-semibold text-[#224292] tracking-tight leading-none">Integrated Library (ILMS)</h2>
                                </div>
                             </div>

                             <div className="grid grid-cols-2 gap-6 mb-10 relative z-10">
                                {[
                                    { label: 'Software Name', value: 'CampesiLIB', icon: Monitor },
                                    { label: 'Automation Status', value: 'Fully Automated', icon: ShieldCheck },
                                    { label: 'System Version', value: 'v8.3.6', icon: BookOpen },
                                    { label: 'Implementation', value: 'Since 2009', icon: Globe }
                                ].map((item, idx) => (
                                    <div key={idx} className="flex gap-4 items-center">
                                        <div className="w-10 h-10 rounded-xl bg-slate-50 flex items-center justify-center text-[#224292] border border-slate-100">
                                            <item.icon size={18} />
                                        </div>
                                         <div>
                                            <p className="text-xs font-normal text-[#224292] tracking-widest leading-none mb-1">{item.label}</p>
                                            <p className="text-lg font-semibold text-black">{item.value}</p>
                                         </div>
                                    </div>
                                ))}
                             </div>

                             <div className="p-6 bg-slate-50 rounded-2xl border border-slate-100 relative z-10">
                                <p className="text-base font-normal text-slate-700 leading-relaxed italic">
                                    "CampesiLIB is an ILMS software designed to manage the institutional library system efficiently. It captures almost every activity related to the library and maintains records of books, periodicals, and other materials."
                                </p>
                             </div>
                        </div>

                        {/* Salient Features Dashboard */}
                        <div className="p-5 md:p-10 bg-white rounded-[3rem] border border-slate-100 shadow-xl shadow-slate-200/20">
                             <div className="flex items-center justify-between mb-8">
                                <h3 className="text-sm font-semibold text-[#ffc107] tracking-[5px]">Salient Features</h3>
                                <div className="h-px flex-1 bg-slate-100 ml-6" />
                             </div>
                             
                             <div className="grid gap-4">
                                {[
                                    { t: 'Student Gate Entry', d: 'Online module with barcode/RFID tracking.' },
                                    { t: 'Cataloguing Database', d: 'Organize resources by subject & department.' },
                                    { t: 'OPAC Search Portal', d: 'Access resources by title, author, or keywords.' },
                                    { t: 'Circulation Control', d: 'Issue, return, renewal, and reservation mgmt.' },
                                    { t: 'Stock Verification', d: 'Real-time tracking of asset availability.' },
                                    { t: 'Reporting Suite', d: 'Automated daily transaction insights.' }
                                ].map((feat, i) => (
                                    <div key={i} className="group p-5 bg-white border border-slate-100 hover:border-[#224292]/20 hover:bg-slate-50/50 rounded-2xl transition-all flex items-center">
                                        <div className="flex items-center gap-4">
                                            <div className="w-1.5 h-1.5 rounded-full bg-[#224292] group-hover:bg-[#ffc107] group-hover:scale-150 transition-all" />
                                            <div>
                                                <p className="text-lg font-semibold text-[#224292] mb-0.5">{feat.t}</p>
                                                <p className="text-sm font-normal text-slate-600 group-hover:text-slate-800 transition-colors tracking-tight">{feat.d}</p>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                             </div>
                        </div>
                    </motion.div>

                    {/* Open Access Directory */}
                    <motion.div 
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="space-y-8 h-full w-full"
                    >
                        <div className="bg-[#224292] p-4 md:p-12 rounded-[2rem] md:rounded-[3.5rem] text-white shadow-2xl relative overflow-hidden min-h-[600px] flex flex-col border border-[#224292]">
                             <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-white opacity-[0.02] rounded-full -translate-y-1/2 translate-x-1/2" />
                             
                             <div className="relative z-10 flex items-center gap-6 mb-12">
                                <div className="w-16 h-16 bg-[#ffc107] rounded-[1.5rem] flex items-center justify-center text-[#224292] shadow-[0_15px_40px_rgba(255,193,7,0.4)]">
                                    <Globe size={32} />
                                </div>
                                <div>
                                    <h2 className="text-3xl font-normal tracking-tight">Open Access</h2>
                                </div>
                             </div>

                             <div className="relative z-10 flex-1 space-y-10">
                                <div>
                                    <div className="inline-flex items-center gap-3 px-4 py-2 bg-white/10 rounded-full border border-white/20 mb-6 font-semibold text-[10px] tracking-[3px] text-[#ffc107]">
                                        <span className="w-1.5 h-1.5 rounded-full bg-[#ffc107]" /> Open Access Books
                                    </div>
                                    <div className="grid grid-cols-2 gap-3 relative z-10">
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
                                                className="group px-4 py-3 md:px-6 md:py-4 bg-white/5 hover:bg-white rounded-2xl border border-white/10 transition-all flex items-center justify-between shadow-sm"
                                            >
                                                <span className="text-xs xs:text-sm font-semibold tracking-wide text-white group-hover:text-[#224292] transition-colors">{link.n}</span>
                                                <div className="flex items-center gap-2 text-[#ffc107] group-hover:text-[#224292] transition-colors">
                                                    <span className="text-[10px] font-normal tracking-widest hidden sm:block">View</span>
                                                    <ExternalLink size={14} className="opacity-100 group-hover:opacity-100" />
                                                </div>
                                            </a>
                                        ))}
                                    </div>
                                </div>

                                <div className="h-px bg-white/20 w-full" />

                                <div>
                                    <div className="inline-flex items-center gap-3 px-4 py-2 bg-white/10 rounded-full border border-white/20 mb-6 font-semibold text-[10px] tracking-[3px] text-[#ffc107]">
                                        <span className="w-1.5 h-1.5 rounded-full bg-[#ffc107]" /> Scholarly Journals
                                    </div>
                                    <div className="grid grid-cols-2 gap-3 relative z-10">
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
                                                className="group px-4 py-3 md:px-6 md:py-4 bg-white/5 hover:bg-[#ffc107] rounded-2xl border border-white/10 transition-all flex items-center justify-between"
                                            >
                                                <span className="text-xs xs:text-sm font-semibold tracking-wide text-white group-hover:text-[#224292] transition-colors">{link.n}</span>
                                                <div className="flex items-center gap-2 text-[#ffc107] group-hover:text-[#224292] transition-colors">
                                                    <span className="text-[10px] font-normal tracking-widest hidden sm:block">View</span>
                                                    <ExternalLink size={12} className="opacity-100 group-hover:opacity-100" />
                                                </div>
                                            </a>
                                        ))}
                                    </div>
                                </div>
                             </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
    )
}

export default LibraryAccessPage;
