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
  Award,
  Medal
} from 'lucide-react'
import { useNavigate } from 'react-router-dom'

const MAGAZINES = [
    "Corporate Citizen",
    "Down to Earth",
    "Sportstar",
    "Frontline",
    "Thannambikkai",
    "Civil Services Chronicle",
    "Digit",
    "Data Quest",
    "PC Quest",
    "Voice & Data",
    "Electronics For You",
    "Open Source For You",
    "Stuff India",
    "Auto Car India",
    "Industrial Automation",
    "Industrial Safety Review",
    "Industrial Safety Chronicle",
    "Nanayam Vikatan (Tamil)",
    "Industrial Product Finder",
    "Motor India",
    "Builders Voice",
    "Builders Line",
    "Forbes India",
    "Overdrive",
    "Business Manager",
    "India Today",
    "Business Today",
    "Reader’s Digest",
    "The Week",
    "Entrepreneur",
    "The Franchising World",
    "Employment Service (Tamil Weekly)",
    "Electrical India",
    "Electronics World",
    "Shaastra",
    "Tamil Computer",
    "CSIR News",
    "Science Reporter",
    "Kalanjium",
    "Competition Success Review",
    "General Knowledge Today",
    "Engineering Success Review",
    "Employment News"
]

const AWARDS = {
    "2025-2026": [
        { n: "T.Heema Gouri", c: "IV B.E EEE" },
        { n: "S.Janani", c: "III B.E ECE - A" },
        { n: "G.S.Subasree", c: "IV B.E CSE - C" },
        { n: "S.Naveenkumar", c: "III B.E Mech. - B" },
        { n: "S.Sathya", c: "II B.E Civil" },
        { n: "U.Pavithra", c: "IV B.Tech. IT" },
        { n: "V.Poojashree", c: "IV B.Tech. CSBS" },
        { n: "A.Mohammed Riyaz", c: "II B.Tech. AI&DS - A" },
        { n: "N.Girija", c: "I B.E ECX" },
        { n: "P.M.Prasannamohan", c: "II M.E ISE" },
        { n: "M.Priyanka", c: "I M.E SE" },
        { n: "V.Dhanush", c: "II MBA" },
        { n: "S.K.Raghulkumar", c: "II MBA-IEV" }
    ],
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
    const [activeYear, setActiveYear] = useState('2025-2026')
    const [searchQuery, setSearchQuery] = useState('')

    return (
        <div className="min-h-screen bg-[#FCFDFD] pb-24 font-graphik">
            {/* Hero Header */}
            <div className="py-10 md:py-12 px-4 sm:px-8 md:px-12 lg:px-16 bg-[#18357a] text-white shadow-md">
                <div className="w-full max-w-7xl mx-auto flex flex-col items-center md:items-start md:flex-row md:justify-between gap-6 text-center md:text-left">
                    <div className="space-y-1.5 flex flex-col items-center md:items-start">
                        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight leading-none text-white">
                            Magazines & <span className="text-[#ffc107]">Honors</span>
                        </h1>
                        <p className="text-xs sm:text-sm font-medium text-slate-200 uppercase tracking-wider">
                            Periodical Subscriptions & Outstanding Library Borrower Awards
                        </p>
                    </div>

                    <div className="flex bg-white/10 p-1.5 rounded-xl border border-white/15 self-center md:self-auto backdrop-blur-xs">
                        {[
                            { id: 'magazines', label: 'Magazines', icon: BookOpen },
                            { id: 'awards', label: 'Borrower Awards', icon: Trophy }
                        ].map(tab => (
                            <button
                                key={tab.id}
                                onClick={() => setActiveTab(tab.id)}
                                className={`flex items-center gap-2.5 px-4 sm:px-5 py-2.5 rounded-lg text-xs sm:text-sm font-semibold tracking-normal transition-all cursor-pointer ${
                                    activeTab === tab.id 
                                    ? 'bg-[#ffc107] text-[#18357a] font-bold shadow-md shadow-black/10' 
                                    : 'text-white/80 hover:text-white hover:bg-white/10'
                                }`}
                            >
                                <tab.icon size={15} />
                                <span>{tab.label}</span>
                            </button>
                        ))}
                    </div>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 py-8 md:py-12">
                <AnimatePresence mode="wait">
                    {activeTab === 'magazines' ? (
                        <motion.div
                            key="magazines"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            className="space-y-6 max-w-6xl mx-auto"
                        >
                            {/* Heading & Search */}
                            <div className="flex flex-col items-center sm:items-start sm:flex-row sm:justify-between gap-4 text-center sm:text-left">
                                <div className="space-y-1 flex flex-col items-center sm:items-start">
                                    <div className="flex items-center justify-center sm:justify-start gap-3">
                                        <span className="w-1.5 h-6 bg-[#ffc107] rounded-full inline-block shrink-0" />
                                        <h2 className="text-xl md:text-2xl font-bold text-[#18357a] tracking-tight leading-tight">Magazines</h2>
                                    </div>
                                    <p className="text-xs font-medium text-[#64779F] uppercase tracking-wider sm:pl-4">Indexed Periodicals & Technical Publications (Total: {MAGAZINES.length})</p>
                                </div>

                                <div className="relative flex-1 max-w-md w-full self-center sm:self-auto">
                                    <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={16} />
                                    <input 
                                        type="text" 
                                        placeholder="Search by magazine title..."
                                        value={searchQuery}
                                        onChange={(e) => setSearchQuery(e.target.value)}
                                        className="w-full pl-11 pr-4 py-2.5 bg-white border border-slate-200 rounded-xl text-xs font-medium focus:outline-none focus:ring-2 focus:ring-[#18357a]/20 focus:border-[#18357a] transition-all shadow-sm"
                                    />
                                </div>
                            </div>

                            {/* Magazine Small Cards Grid */}
                            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-3">
                                {MAGAZINES.filter(m => m.toLowerCase().includes(searchQuery.toLowerCase())).map((name, i) => (
                                    <div 
                                        key={i} 
                                        className="group p-3 sm:p-3.5 bg-white border border-slate-200/80 hover:border-[#18357a]/40 hover:bg-slate-50/80 rounded-xl transition-all shadow-xs flex items-center justify-between gap-2.5"
                                    >
                                        <div className="flex items-center gap-2.5 min-w-0">
                                            <div className="w-6 h-6 rounded-md bg-[#18357a]/10 group-hover:bg-[#18357a] group-hover:text-white flex items-center justify-center text-[#18357a] font-bold text-[11px] shrink-0 transition-colors">
                                                {i + 1}
                                            </div>
                                            <span className="text-xs sm:text-[13px] font-medium text-slate-800 group-hover:text-[#18357a] transition-colors truncate">
                                                {name}
                                            </span>
                                        </div>
                                        <BookOpen size={14} className="text-slate-300 group-hover:text-[#ffc107] shrink-0 transition-colors" />
                                    </div>
                                ))}
                                {MAGAZINES.filter(m => m.toLowerCase().includes(searchQuery.toLowerCase())).length === 0 && (
                                    <div className="col-span-full p-8 text-center bg-white rounded-xl border border-slate-200 text-slate-500 font-medium text-xs">
                                        No magazines found matching "{searchQuery}"
                                    </div>
                                )}
                            </div>
                        </motion.div>
                    ) : (
                        <motion.div
                            key="awards"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            className="space-y-8 max-w-6xl mx-auto"
                        >
                            {/* Heading & Cycle Filter */}
                            <div className="flex flex-col items-center sm:items-start sm:flex-row sm:justify-between gap-4 text-center sm:text-left">
                                <div className="space-y-1 flex flex-col items-center sm:items-start">
                                    <div className="flex items-center justify-center sm:justify-start gap-3">
                                        <span className="w-1.5 h-6 bg-[#ffc107] rounded-full inline-block shrink-0" />
                                        <h2 className="text-xl md:text-2xl font-bold text-[#18357a] tracking-tight leading-tight">Borrower Awards</h2>
                                    </div>
                                    <p className="text-xs font-medium text-[#64779F] uppercase tracking-wider sm:pl-4">Recognizing Most Active Student Readers ({activeYear})</p>
                                </div>

                                <div className="flex flex-wrap items-center justify-center gap-2 self-center sm:self-auto">
                                    {Object.keys(AWARDS).map(year => (
                                        <button
                                            key={year}
                                            onClick={() => setActiveYear(year)}
                                            className={`px-4 py-2 rounded-lg text-xs font-semibold tracking-normal transition-all cursor-pointer ${
                                                activeYear === year 
                                                ? 'bg-[#18357a] text-white shadow-md shadow-[#18357a]/20 font-bold' 
                                                : 'bg-white border border-slate-200 text-slate-700 hover:border-[#18357a]/40 hover:text-[#18357a]'
                                            }`}
                                        >
                                            {year}
                                        </button>
                                    ))}
                                </div>
                            </div>

                            {/* Table Card */}
                            <div className="bg-white rounded-xl border border-slate-200 shadow-lg shadow-slate-900/5 overflow-hidden">
                                <div className="overflow-x-auto">
                                    <table className="w-full min-w-[550px] text-left font-graphik border-collapse">
                                        <thead>
                                            <tr className="bg-[#18357a] text-white">
                                                <th className="px-6 py-3.5 text-xs md:text-sm font-semibold uppercase tracking-wider w-24 text-center">S. No.</th>
                                                <th className="px-6 py-3.5 text-xs md:text-sm font-semibold uppercase tracking-wider text-left">Student Name</th>
                                                <th className="px-6 py-3.5 text-xs md:text-sm font-semibold uppercase tracking-wider text-left">Class & Branch / Department</th>
                                            </tr>
                                        </thead>
                                        <tbody className="text-sm">
                                            {AWARDS[activeYear]?.map((student, i) => (
                                                <tr key={i} className="odd:bg-white even:bg-[#f4f6fa] border-b border-slate-200/70 hover:bg-slate-100/80 transition-colors">
                                                    <td className="px-6 py-3.5 text-center font-semibold text-[#18357a] whitespace-nowrap">{i + 1}</td>
                                                    <td className="px-6 py-3.5 text-left font-semibold text-slate-900">
                                                        <div className="flex items-center gap-3">
                                                            <div className="w-7 h-7 rounded-full bg-[#18357a]/10 flex items-center justify-center text-[#18357a] text-xs font-bold shrink-0">
                                                                {student.n.charAt(0)}
                                                            </div>
                                                            <span>{student.n}</span>
                                                        </div>
                                                    </td>
                                                    <td className="px-6 py-3.5 text-left font-medium text-slate-700">
                                                        <span className="inline-flex items-center px-2.5 py-1 rounded-md text-xs font-medium bg-slate-100 text-slate-800 border border-slate-200/60">
                                                            {student.c}
                                                        </span>
                                                    </td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
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
