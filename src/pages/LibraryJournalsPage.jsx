import React, { useState } from 'react'
import { 
  FileText,
  Bookmark,
  ExternalLink,
  Cpu,
  Monitor,
  Search,
  Clock,
  Headphones,
  Globe
} from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import { useNavigate } from 'react-router-dom'

const JOURNAL_STATS = [
    { deg: 'B.E', c: 'Civil Engineering', nj: 6, ij: 24 },
    { deg: 'B.E', c: 'Computer Science & Engineering', nj: 6, ij: 41 },
    { deg: 'B.E', c: 'Electronics & Communication Engineering', nj: 6, ij: 23 },
    { deg: 'B.E', c: 'Electrical & Electronics Engineering', nj: 6, ij: 8 },
    { deg: 'B.E', c: 'Mechanical Engineering', nj: 6, ij: 71 },
    { deg: 'B.E', c: 'Electronics and Computer Engineering', nj: 6, ij: 9 },
    { deg: 'B.Tech.', c: 'Information Technology', nj: 6, ij: 14 },
    { deg: 'B.Tech.', c: 'Computer Science and Business Systems', nj: 6, ij: 12 },
    { deg: 'B.Tech.', c: 'Artificial Intelligence & Data Science', nj: 6, ij: 9 },
    { deg: 'M.E', c: 'Industrial Safety Engineering', nj: 6, ij: 20 },
    { deg: 'M.E', c: 'Automotive Electronics', nj: 6, ij: 12 },
    { deg: 'M.E', c: 'Power Electronics and Drives', nj: 6, ij: 9 },
    { deg: 'M.E', c: 'Software Engineering', nj: 6, ij: 14 },
    { deg: 'MBA', c: 'Master of Business Administration', nj: 6, ij: 32 },
    { deg: 'MBA-IEV', c: 'Honors in IEV Development', nj: 6, ij: 11 },
    { deg: 'MCA', c: 'Master of Computer Applications', nj: 6, ij: 15 }
]

const JOURNAL_LIST = [
    "Indian journal of Materials and Structural System",
    "Indian Concrete Institute Journal",
    "Journal of Indian Water Works Association",
    "Journal of Structural Engineering",
    "Journal of The Institution of Engineers (India) : Series A - Civil Engineering",
    "Journal of Construction Engineering, Technology & Management",
    "Journal of Image Processing and Artificial Intelligence",
    "Indian Journal of Mobile Communication and Networking",
    "Indian Journal of Neural Networks Research",
    "Indian Journal of Robotics Application",
    "Indian Journal of Applied Computational Intelligence and Soft Computing",
    "Indian Journal of Data Mining and Warehouse",
    "Journal of Advanced Research in Semiconductor Technology and Circuits",
    "Journal of Electronic Networks, Devices and Fields",
    "IETE Journal of Research",
    "Journal of Network and Information Security",
    "International Journal of Image Processing and Applications",
    "Recent Trends in Sensor Research & Technology",
    "International Journal of Computer Technology and Electronics Engineering",
    "Journal of Advanced Research in Computer Technology and Software Applications",
    "Journal of Advanced Research in Cloud Computing, Virtualization and Web Applications",
    "International Journal of Semiconductor Science & Technology",
    "Journal of Research in Robotics, Networking and Artificial Intelligence",
    "Indian Journal of Computer and Electronics Engineering",
    "Indian Journal of Power and Energy System Engineering",
    "Journal of Advanced Research in Modeling and Simulation",
    "International Journal of Power Electronics and Drive Systems",
    "International Journal of Advances in Electrical Engineering",
    "Journal of Recent Trends in Electrical Power System",
    "Journal of control System and its Recent Developments",
    "Journal of Energy, Environment & Carbon Credits",
    "Jounal of Advanced Research in Sustainable Material Science and Engineering",
    "Indian Journal of Heat and Mass Transfer",
    "Indian Journal of Fluid Engineering and Mechanical Engineering",
    "Journal of The Institution of Engineers (India) : Series C - Mechanical,Production,Aerospace, Marine Engineering",
    "International Journal of Composite Materials and Matrices",
    "Journal of Advanced Research in Applied Artificial Intelligence and Neural Network",
    "Journal of Data Science",
    "Journal of Intelligent Computing(JIC)",
    "Journal of Information Technology Review",
    "International Journal of Artificial Intelligence and Computational Research",
    "International Journal of Applied Artificial Intelligence and in Engineering System",
    "International Journal of Business Management and Information Technology",
    "Indian Journal of Business Information Systems",
    "Indian Journal of Computer Science",
    "Advances in Computational Sciences and Technology",
    "Indian Journal of Intelligent Information Processing",
    "Recent Trends in Programming Languages",
    "International journal of Communication Systems and Information Security",
    "International Journal of Computer Vision and Image Processing",
    "International Journal of Wireless and Mobile Computing",
    "International Journal of Internet of Things and Information Technology",
    "International Journal of Wireless Communications and Networking",
    "Indian Journal of Neural Networks and Techniques",
    "Journal of Advanced Research in Automotive Technology and Transportation System",
    "Journal of Advanced Research in Electronics Automation and Innovations",
    "International Journal of Research in Circuits, Devices and Systems",
    "Indian Journal of Automotive Technology",
    "Journal of Electronics Design and Technology",
    "Indian Journal of Automation & Robotics",
    "Journal of Interdisciplinary Cycle Research",
    "Indian Journal of Engineering and Materials Sciences",
    "Defence Science Journal",
    "Indian Journal of Environmental Science: Development and Monitoring",
    "Journal of Organizations & Human Behaviour",
    "Journal of Supply Chain Management Systems",
    "International Journal of Advances in Science, Engineering and Technology",
    "Journal of Advanced Research in Power Electronics and Power Systems",
    "Advance Research in Power Electronics and Devices",
    "Indian Journal of Advances in Power Electronics",
    "Journal of Advanced Research in Artificial Intelligence & It's Applications",
    "IETE Technical Review",
    "Indian Journal of Computation Theory",
    "Indian Journal of Speech and Language Processing",
    "Indian journal of Computer Simulation",
    "Journal of Computer Networking, Wireless and Mobile Communications",
    "Journal of Computer Science Engineering and Information Technology Research",
    "Journal of Mathematics and Computer Applications Research",
    "Journal of Research and Review in Purchasing and Supply Management",
    "Journal on Management",
    "Journal of Business Analytics and Data Visualization",
    "Indian Journal of Marketing",
    "Indian Journal of Finance",
    "Asia Pacific Journal of Management Research and Innovation",
    "AMC Indian Journal of Entrepreneurship",
    "Asian Journal of Management Cases",
    "Journal of Entrepreneurship",
    "Journal of Entrepreneurship and Innovation in Emerging Economies",
    "SMS Journal of Entrepreneurship & Innovation",
    "Indian Economic Review",
    "International Journal of Computer Science and Mobile Computing",
    "International Journal of Cloud Computing and Database Management",
    "Journal of Cloud Computing and Data Science",
    "Indian Journal of Adavnces in Computer Science and Technology",
    "International Journal of Internet and computer Security",
    "Indian Journal of Advance in Wireless & Mobile Communications"
]

const E_RESOURCES = [
    { n: 'Springer Nature E-Journals', u: 'https://link.springer.com/', d: 'Eng - 197, CS - 107, Biz - 57' },
    { n: 'e-shodhganga', u: 'https://shodhganga.inflibnet.ac.in/', d: 'Theses and Dissertations' },
    { n: 'Springer Nature E-Books', u: 'https://link.springer.com/', d: 'Academic Repositories' },
    { n: 'DELNET Services', u: 'http://www.delnet.in/', d: 'Institutional Membership' },
    { n: 'NDLI Repository', u: 'https://ndl.iitkgp.ac.in/', d: 'Institutional Registration' },
    { n: 'IEEE Xplore', u: 'https://www.ieee.org/', d: 'Flagship Research Portal' }
]

const LibraryJournalsPage = () => {
    const navigate = useNavigate();
    const [activeTab, setActiveTab] = useState('stats')
    const [searchQuery, setSearchQuery] = useState('')

    return (
        <div className="min-h-screen bg-[#FCFDFD] pb-24 font-graphik">
            {/* Minimal Header (Removed Hero) */}
            <div className="relative pt-6 pb-2 px-6 bg-gradient-to-b from-[#224292]/5 to-transparent overflow-hidden">
                <div className="absolute top-0 right-0 w-96 h-96 bg-[#ffc107]/5 blur-[100px] rounded-full -translate-y-1/2 translate-x-1/2" />
                <div className="max-w-7xl mx-auto flex flex-col items-center text-center">
                    <motion.h1 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-3xl md:text-4xl font-bold text-[#224292] tracking-normal leading-none mb-2"
                    >
                        Journals & <span className="text-[#ffc107]">E-Digital</span>
                    </motion.h1>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 md:px-6 py-2">
                <div className="flex flex-col md:flex-row md:items-center justify-center gap-4 pt-4 border-t border-slate-100">
                    <div className="flex flex-col md:flex-row bg-slate-100 p-1.5 rounded-xl gap-1.5 md:gap-1 shadow-inner w-full md:w-auto">
                        {[
                            { id: 'stats', label: 'Journal Stats', icon: FileText },
                            { id: 'directory', label: 'Journal Hub', icon: Bookmark },
                            { id: 'digital', label: 'Digital Hub', icon: Monitor }
                        ].map(tab => (
                            <button
                                key={tab.id}
                                onClick={() => setActiveTab(tab.id)}
                                className={`flex items-center justify-center gap-3 px-6 py-4 rounded-xl text-xs font-bold tracking-widest transition-all w-full md:w-auto shrink-0 ${
                                    activeTab === tab.id 
                                    ? 'bg-[#224292] text-white shadow-xl shadow-[#224292]/30' 
                                    : 'text-slate-700 hover:text-[#224292] hover:bg-white'
                                }`}
                            >
                                <tab.icon size={16} />
                                <span>{tab.label}</span>
                            </button>
                        ))}
                    </div>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-3 md:px-6 py-6 md:py-12">
                <AnimatePresence mode="wait">
                    {activeTab === 'stats' && (
                        <motion.div
                            key="stats"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            className="bg-white rounded-2xl border border-slate-100 shadow-2xl shadow-[#224292]/5 overflow-hidden"
                        >
                            <div className="p-4 md:p-10 bg-slate-100/80 border-b border-slate-200/50 flex flex-col md:flex-row md:items-center justify-between gap-6 md:gap-8 rounded-t-2xl relative overflow-hidden group">
                                <div className="absolute top-0 left-0 w-64 h-64 bg-[#224292]/5 blur-[80px] rounded-full -translate-x-1/2 -translate-y-1/2 pointer-events-none" />
                                
                                <div className="flex items-center gap-6 relative z-10">
                                    <div className="w-14 h-14 bg-white rounded-xl flex items-center justify-center text-[#224292] shadow-xl shadow-black/5 border border-slate-100 group-hover:scale-110 transition-all duration-500">
                                        <FileText size={28} />
                                    </div>
                                    <div>
                                        <h2 className="text-lg font-bold text-[#224292] tracking-tight leading-none mb-2">Accession Distribution</h2>
                                        <div className="flex items-center gap-2">
                                            <span className="w-1.5 h-1.5 rounded-full bg-[#ffc107]" />
                                            <p className="text-xs font-bold text-slate-500 tracking-normal">Verified Network Growth (As of 13.07.2026)</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="text-left md:text-right relative z-10">
                                    <p className="text-xs font-bold text-slate-500 tracking-normal leading-none mb-2">Active Records</p>
                                    <p className="text-3xl font-bold text-[#224292]">420</p>
                                </div>
                             </div>
                            
                             <div className="overflow-x-auto">
                                <table className="w-full min-w-[700px] md:min-w-full text-left">
                                     <thead>
                                        <tr className="bg-slate-100 border-b border-slate-200">
                                            <th className="px-4 md:px-8 py-3 text-xs font-bold text-[#224292] tracking-normal">Degree</th>
                                            <th className="px-4 md:px-8 py-3 text-xs font-bold text-[#224292] tracking-normal">Department / Specialization</th>
                                            <th className="px-4 md:px-8 py-3 text-xs font-bold text-[#224292] tracking-normal text-center">National</th>
                                            <th className="px-4 md:px-8 py-3 text-xs font-bold text-[#224292] tracking-normal text-center">International</th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-slate-100 transition-all">
                                        {JOURNAL_STATS.map((row, i) => (
                                            <tr key={i} className="hover:bg-[#224292]/5 transition-colors group even:bg-slate-50/50">
                                                <td className="px-4 md:px-8 py-4 md:py-5 font-normal text-[#224292] text-xs">{row.deg}</td>
                                                <td className="px-4 md:px-8 py-4 md:py-5 font-normal text-slate-800 text-base group-hover:text-[#224292] transition-colors">{row.c}</td>
                                                <td className="px-4 md:px-8 py-4 md:py-5 text-center font-normal text-slate-600 text-base">{row.nj}</td>
                                                <td className="px-4 md:px-8 py-4 md:py-5 text-center font-normal text-[#224292] text-base">{row.ij}</td>
                                            </tr>
                                        ))}
                                        <tr className="bg-[#224292]/5">
                                            <td colSpan="2" className="px-4 md:px-8 py-5 md:py-6 font-bold text-[#224292] text-xl tracking-tighter">Aggregated Network Volume</td>
                                            <td className="px-4 md:px-8 py-5 md:py-6 text-center font-bold text-[#ffc107] text-2xl">96</td>
                                            <td className="px-4 md:px-8 py-5 md:py-6 text-center font-bold text-[#224292] text-2xl">324</td>
                                        </tr>
                                    </tbody>
                                </table>
                             </div>
                        </motion.div>
                    )}

                    {activeTab === 'directory' && (
                        <motion.div
                            key="directory"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            className="bg-white rounded-2xl border border-slate-100 shadow-2xl shadow-[#224292]/5 overflow-hidden"
                        >
                            <div className="p-4 md:p-10 bg-slate-100/80 border-b border-slate-200/50 flex flex-col md:flex-row md:items-center justify-between gap-6 md:gap-8 rounded-t-2xl relative overflow-hidden group">
                                <div className="absolute top-0 right-0 w-64 h-64 bg-[#ffc107]/5 blur-[80px] rounded-full translate-x-1/2 -translate-y-1/2 pointer-events-none" />
                                
                                <div className="flex items-center gap-6 relative z-10">
                                    <div className="w-14 h-14 bg-white rounded-xl flex items-center justify-center text-[#ffc107] shadow-xl shadow-black/5 border border-slate-100 group-hover:scale-110 transition-all duration-500">
                                        <Bookmark size={28} />
                                    </div>
                                    <div>
                                        <h2 className="text-lg font-bold text-[#224292] tracking-tight leading-none mb-2">Active Publications</h2>
                                        <div className="flex items-center gap-2">
                                            <span className="w-1.5 h-1.5 rounded-full bg-[#ffc107]" />
                                            <p className="text-xs font-bold text-slate-500 tracking-normal">Serial Resource Hub</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="relative flex-1 max-w-lg z-10">
                                    <Search size={18} className="absolute left-6 top-1/2 -translate-y-1/2 text-slate-500" />
                                    <input 
                                        type="text" 
                                        placeholder="Search journal directory..."
                                        value={searchQuery}
                                        onChange={(e) => setSearchQuery(e.target.value)}
                                        className="w-full pl-14 pr-8 py-5 bg-white border border-slate-200 rounded-xl text-xs font-bold tracking-normal focus:outline-none focus:ring-4 focus:ring-[#224292]/5 focus:border-[#224292] transition-all shadow-sm"
                                    />
                                </div>
                            </div>
                            
                            <div className="p-4 md:p-8 grid grid-cols-1 md:grid-cols-2 gap-4 max-h-[700px] overflow-y-auto custom-scrollbar">
                                {JOURNAL_LIST.filter(j => j.toLowerCase().includes(searchQuery.toLowerCase())).map((journal, i) => (
                                    <div key={i} className="group flex items-start gap-5 p-5 bg-white hover:bg-[#224292] rounded-xl border border-slate-100 shadow-sm transition-all duration-500 hover:-translate-y-1">
                                        <div className="w-8 h-8 rounded-lg bg-slate-50 group-hover:bg-[#ffc107] flex items-center justify-center shadow-sm shrink-0 transition-all">
                                            <span className="text-xs font-bold text-[#224292]">{i+1}</span>
                                        </div>
                                        <p className="text-[13px] font-bold text-slate-800 group-hover:text-white leading-relaxed tracking-tight transition-colors">
                                            {journal}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    )}

                    {activeTab === 'digital' && (
                        <motion.div
                            key="digital"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            className="space-y-8"
                        >
                            {/* Infrastructure Overview */}
                            <div className="grid lg:grid-cols-3 gap-8">
                                <div className="lg:col-span-1 p-6 md:p-10 bg-[#224292] rounded-2xl text-white shadow-2xl relative overflow-hidden flex flex-col justify-between group">
                                    <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-bl-[100%] transition-transform duration-700 group-hover:scale-110" />
                                    <div className="relative z-10 space-y-8">
                                        <div className="w-16 h-16 bg-[#ffc107] rounded-xl flex items-center justify-center shadow-xl shadow-[#ffc107]/20">
                                            <Monitor size={32} className="text-[#224292]" />
                                        </div>
                                        <div>
                                            <h3 className="text-xl font-bold tracking-normal mb-4">Digital Library Lab</h3>
                                            <p className="text-white font-bold text-base leading-relaxed">
                                                Our state-of-the-art digital hub features 30 high-speed computing nodes designed for seamless academic research and global citation access.
                                            </p>
                                        </div>
                                    </div>
                                    <div className="relative z-10 pt-12 space-y-4">
                                        <div className="flex items-center gap-4 p-4 bg-white/5 rounded-xl border border-white/10">
                                            <Headphones size={20} className="text-[#ffc107]" />
                                            <p className="text-xs font-bold tracking-normal text-[#ffc107]">Audio Learning Nodes (10 Available)</p>
                                        </div>
                                        <div className="flex items-center gap-4 p-4 bg-white/5 rounded-xl border border-white/10">
                                            <Globe size={20} className="text-[#ffc107]" />
                                            <p className="text-xs font-bold tracking-normal text-[#ffc107]">High Speed Fiber Ready</p>
                                        </div>
                                    </div>
                                </div>
 
                                <div className="lg:col-span-2 space-y-8">
                                    {/* Operational Hours */}
                                    <div className="p-6 md:p-10 bg-white rounded-2xl border border-slate-100 shadow-xl shadow-[#224292]/5 flex flex-col md:flex-row md:items-center justify-between gap-10">
                                        <div className="flex items-center gap-6">
                                            <div className="w-14 h-14 bg-slate-50 rounded-xl flex items-center justify-center text-[#224292] border border-slate-100 shadow-sm">
                                                <Clock size={28} />
                                            </div>
                                            <div>
                                                <h4 className="text-lg font-bold text-[#224292] tracking-normal">Laboratory Access Hours</h4>
                                                <p className="text-xs font-bold text-slate-500 tracking-normal mt-1 italic">Real-time facility availability</p>
                                            </div>
                                        </div>
                                        <div className="grid grid-cols-2 gap-8 border-l border-slate-100 pl-10">
                                            <div>
                                                <p className="text-xs font-bold text-slate-500 tracking-normal mb-1">Working Days</p>
                                                <p className="font-bold text-[#224292]">09:30 AM - 06:30 PM</p>
                                            </div>
                                            <div>
                                                <p className="text-xs font-bold text-slate-500 tracking-normal mb-1">Public Holidays</p>
                                                <p className="font-bold text-[#ffc107]">09:30 AM - 03:30 PM</p>
                                            </div>
                                        </div>
                                    </div>
 
                                    {/* Link Portal */}
                                    <div className="grid md:grid-cols-2 gap-6">
                                        {E_RESOURCES.map((link, i) => (
                                            <a 
                                                key={i} 
                                                href={link.u} 
                                                target="_blank" 
                                                rel="noreferrer" 
                                                className="group p-6 md:p-8 bg-white border border-slate-100 hover:border-[#224292] hover:bg-[#224292] rounded-2xl shadow-lg shadow-black/5 flex flex-col justify-between gap-8 transition-all duration-500 hover:-translate-y-2 overflow-hidden relative"
                                            >
                                                <div className="absolute top-0 right-0 w-24 h-24 bg-slate-50 group-hover:bg-white/5 rounded-bl-[100%] transition-colors" />
                                                <div className="relative z-10 flex items-center justify-between">
                                                    <div className="text-left">
                                                        <p className="text-xs font-bold text-[#224292] group-hover:text-[#ffc107] tracking-normal leading-none mb-1">{link.n}</p>
                                                        <p className="text-xs font-bold text-slate-500 group-hover:text-white/70 tracking-tight mt-1">{link.d}</p>
                                                    </div>
                                                    <div className="flex flex-col items-center gap-2">
                                                        <div className="p-3 bg-slate-50 group-hover:bg-[#ffc107] rounded-xl transition-colors shrink-0">
                                                            <ExternalLink size={18} className="text-[#224292] group-hover:text-[#224292]" />
                                                        </div>
                                                        <span className="text-xs font-bold text-[#ffc107] group-hover:text-white transition-colors">View</span>
                                                    </div>
                                                </div>
                                            </a>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </div>
    )
}

export default LibraryJournalsPage;
