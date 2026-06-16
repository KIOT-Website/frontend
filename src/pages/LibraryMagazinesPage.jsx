import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  Trophy,
  BookOpen,
  User,
  GraduationCap,
  Calendar,
  Grid,
  Search,
  Award
} from 'lucide-react'
import { useNavigate } from 'react-router-dom'

const MAGAZINES = [
    "Corporate Citizen", "Down to Earth", "Sportstar", "Frontline", "Thannambikkai", "Civil Services Chronicle", 
    "Digit", "Data Quest", "PC Quest", "Voice & Data", "Electronics For You", "Open Source For You", 
    "Stuff India", "Auto Car India", "Industrial Automation", "Industrial Safety Review", 
    "Industrial Safety Chronicle", "Motor Vikatan", "Industrial Product Finder", "Motor India", 
    "Builders Voice", "Builders Line", "Forbes India", "Overdrive", "Business Manager", 
    "India Today", "Business Today", "Reader’s Digest", "The Week", "Entrepreneur", 
    "Retailer", "Employment Service", "Electrical India", "Electronics World", "Shaastra", 
    "Tamil Computer", "CSIR News", "Science Reporter", "Competition Success Review", 
    "General Knowledge Today", "Engineering Success Review", "Employment News"
]

const AWARDS = {
    "2024-2025": [
        { n: "T.Heema Gouri", c: "III B.E EEE" },
        { n: "S.Gokulraj", c: "IV B.E ECE - A" },
        { n: "M.Pooja", c: "II B.E CSE - B" },
        { n: "T.M.Karthick Krishna", c: "III B.E Mech. - A" },
        { n: "R.Gowsalya", c: "IV B.E Civil" },
        { n: "V.Abikrishna", c: "III B.Tech. IT" },
        { n: "K.Subhasrilekha", c: "IV B.Tech. CSBS" },
        { n: "N.Maheswari", c: "III B.Tech. AI&DS" },
        { n: "J.Arthipriyadharshini", c: "II M.E CSE" },
        { n: "V.Avinash Vasuthev", c: "II MBA" }
    ],
    "2023-2024": [
        { n: "A.Keerthika", c: "IV B.E EEE" },
        { n: "R.Gowsalya", c: "III B.E Civil" },
        { n: "N.Maheswari", c: "II B.Tech. AI&DS" },
        { n: "S.Ramya", c: "III B.Tech. CSBS" },
        { n: "S.Gokulraj", c: "III B.E ECE - A" },
        { n: "S.Harish", c: "IV B.Tech. IT" },
        { n: "S.Prabhakaran", c: "IV B.E Mech. - B" },
        { n: "M.Thamaraikannan", c: "IV B.E CSE - C" },
        { n: "N.Dharshini", c: "II M.E CSE" },
        { n: "C.Pavithra", c: "II M.E EST" },
        { n: "M.Girithar", c: "II M.E VLSI" },
        { n: "K.Karthick", c: "II M.E ISE" },
        { n: "R.Sumithra", c: "II MBA" }
    ],
    "2022-2023": [
        { n: "V.Thirumalai", c: "III B.E EEE" },
        { n: "S.Prabhakaran", c: "III B.E Mech. - B" },
        { n: "K.Sowmiya", c: "III B.E CSE - C" },
        { n: "M.F.Antony Daniel", c: "II B.Tech. AI&DS" },
        { n: "S.Hariharan", c: "II ECE - B" },
        { n: "S.Harish", c: "III B.Tech. IT" },
        { n: "S.Rooban", c: "IV B.E Civil" },
        { n: "K.Gokul", c: "II B.Tech. CSBS" },
        { n: "D.Rishikesan", c: "II M.E EST" },
        { n: "S.Sabarinathan", c: "II M.E VLSI" },
        { n: "E.Kiruthika", c: "II M.E CSE" },
        { n: "S.Anishkumaran", c: "II M.E ISE" },
        { n: "S.Reshma Supriya", c: "II MBA - B" }
    ]
}

const LibraryMagazinesPage = () => {
    const navigate = useNavigate();
    const [activeTab, setActiveTab] = useState('magazines')
    const [activeYear, setActiveYear] = useState('2024-2025')
    const [searchQuery, setSearchQuery] = useState('')

    return (
        <div className="min-h-screen bg-[#FCFDFD] font-graphik">
            {/* Header */}
            <div className="pt-6 pb-6 px-6 bg-white border-b border-slate-100">
                <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:items-center justify-between gap-6">
                    <div className="space-y-2">
                        <h1 className="text-4xl font-bold text-[#224292] tracking-tighter leading-none">
                            Magazines & <span className="text-[#ffc107]">Honors</span>
                        </h1>
                    </div>

                    <div className="flex bg-slate-100 p-1.5 rounded-2xl">
                        {[
                            { id: 'magazines', label: 'Magazines', icon: Grid },
                            { id: 'awards', label: 'Borrower Awards', icon: Trophy }
                        ].map(tab => (
                            <button
                                key={tab.id}
                                onClick={() => setActiveTab(tab.id)}
                                className={`flex items-center gap-3 px-6 py-3 rounded-xl text-xs font-bold tracking-widest transition-all ${
                                    activeTab === tab.id 
                                    ? 'bg-[#224292] text-white shadow-lg shadow-[#224292]/20' 
                                    : 'text-slate-700 hover:bg-[#ffc107] hover:text-[#224292]'
                                }`}
                            >
                                <tab.icon size={14} />
                                {tab.label}
                            </button>
                        ))}
                    </div>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-3 md:px-6 py-6 md:py-12">
                <AnimatePresence mode="wait">
                    {activeTab === 'magazines' ? (
                        <motion.div
                            key="magazines"
                            initial={{ opacity: 0, scale: 0.98 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.98 }}
                            className="space-y-8"
                        >
                            <div className="bg-white rounded-[2rem] md:rounded-[2.5rem] border border-slate-100 shadow-2xl shadow-[#224292]/5 overflow-hidden">
                                <div className="p-4 md:p-8 border-b border-slate-100 bg-slate-50/50 flex flex-col md:flex-row md:items-center justify-between gap-6">
                                    <h2 className="text-lg font-bold text-[#224292] tracking-tight">Periodical Repository</h2>
                                    <div className="relative flex-1 max-w-sm">
                                        <Search size={16} className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-500" />
                                        <input 
                                            type="text" 
                                            placeholder="Search magazines..."
                                            value={searchQuery}
                                            onChange={(e) => setSearchQuery(e.target.value)}
                                            className="w-full pl-12 pr-6 py-4 bg-white border border-slate-200 rounded-2xl text-xs font-bold tracking-widest focus:ring-4 focus:ring-[#224292]/5 transition-all"
                                        />
                                    </div>
                                </div>
                                
                                <div className="p-4 md:p-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                                    {MAGAZINES.filter(m => m.toLowerCase().includes(searchQuery.toLowerCase())).map((name, i) => (
                                        <div key={i} className="group p-5 bg-white border border-slate-50 hover:border-[#224292] rounded-2xl transition-all flex items-center justify-between shadow-sm hover:shadow-xl hover:shadow-[#224292]/5">
                                            <div className="flex items-center gap-4">
                                                <div className="w-2 h-2 rounded-full bg-[#ffc107] group-hover:scale-150 transition-all" />
                                                <span className="text-[13px] font-bold text-[#224292] leading-none tracking-wide">{name}</span>
                                            </div>
                                            <BookOpen size={14} className="text-slate-300 group-hover:text-[#224292] transition-colors" />
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    ) : (
                        <motion.div
                            key="awards"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            className="space-y-12"
                        >
                            {/* Award Selection Controls */}
                            <div className="flex flex-wrap justify-center gap-4">
                                {Object.keys(AWARDS).map(year => (
                                    <button
                                        key={year}
                                        onClick={() => setActiveYear(year)}
                                        className={`px-8 py-4 rounded-3xl text-xs font-bold tracking-widest transition-all ${
                                            activeYear === year 
                                            ? 'bg-[#ffc107] text-[#224292] shadow-[0_15px_40px_rgba(255,193,7,0.3)]' 
                                            : 'bg-white border border-slate-100 text-slate-700 hover:text-[#224292]'
                                        }`}
                                    >
                                        Most Books Borrower {year}
                                    </button>
                                ))}
                            </div>

                            {/* Hall of Fame Visuals */}
                            <div className="bg-[#224292] rounded-[2rem] md:rounded-[3rem] p-5 md:p-12 text-white shadow-2xl relative overflow-hidden">
                                <div className="absolute top-0 right-0 w-64 h-64 bg-white opacity-[0.03] rounded-bl-full pointer-events-none" />
                                
                                <div className="relative z-10 flex flex-col md:flex-row md:items-end justify-between gap-12 mb-16">
                                    <div className="space-y-6">
                                        <div className="inline-flex items-center gap-3 px-5 py-2 bg-white/10 rounded-full border border-white/10">
                                            <Award size={14} className="text-[#ffc107]" />
                                            <span className="text-xs font-bold tracking-[3px]">Institutional Honor</span>
                                        </div>
                                        <h2 className="text-4xl md:text-5xl font-bold tracking-tighter leading-none">
                                            Borrower's <br /><span className="text-[#ffc107]">Hall of Fame</span>
                                        </h2>
                                    </div>
                                    <div className="p-4 md:p-8 bg-white/5 rounded-3xl border border-white/10 text-right backdrop-blur-md">
                                        <Calendar size={32} className="text-[#ffc107] mb-4 ml-auto" />
                                        <p className="text-xs font-bold text-white tracking-[4px]">Academic Cycle</p>
                                        <p className="text-2xl font-bold text-white">{activeYear}</p>
                                    </div>
                                </div>

                                <div className="grid md:grid-cols-2 gap-6 relative z-10">
                                    {AWARDS[activeYear].map((student, i) => (
                                        <motion.div 
                                            key={i} 
                                            layout
                                            initial={{ opacity: 0, x: -10 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            transition={{ delay: i * 0.05 }}
                                            className="group flex items-center p-3 md:p-4 bg-white/5 hover:bg-white rounded-xl md:rounded-[1.5rem] border border-white/5 transition-all duration-500"
                                        >
                                            <div className="flex items-center gap-4">
                                                <div className="w-9 h-9 rounded-xl bg-white/10 group-hover:bg-[#ffc107] flex items-center justify-center text-white group-hover:text-[#224292] transition-all duration-500 shadow-sm shrink-0">
                                                    <User size={16} />
                                                </div>
                                                <div>
                                                    <p className="text-xs md:text-sm font-bold text-white group-hover:text-[#224292] transition-colors">{student.n}</p>
                                                    <div className="flex items-center gap-1.5 mt-0.5">
                                                        <GraduationCap size={10} className="text-[#ffc107]" />
                                                        <p className="text-[10px] font-semibold text-white/80 group-hover:text-[#224292]/80 tracking-wider">{student.c}</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </motion.div>
                                    ))}
                                </div>

                                <div className="mt-16 pt-8 border-t border-white/10 text-center relative z-10">
                                    <p className="text-xs font-bold text-white tracking-[5px]">Recognizing Academic Excellence & Library Engagement</p>
                                </div>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </div>
    )
}

export default LibraryMagazinesPage;
