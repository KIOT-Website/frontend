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
            {/* Header */}
            <div className="py-10 md:py-12 px-4 sm:px-8 md:px-12 lg:px-16 bg-[#18357a] text-white shadow-md">
                <div className="w-full max-w-7xl mx-auto flex flex-col items-center md:items-start md:flex-row md:justify-between gap-6 text-center md:text-left">
                    <div className="space-y-1.5 flex flex-col items-center md:items-start">
                        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight leading-none text-white">
                            Journals & <span className="text-[#ffc107]">Digital</span>
                        </h1>
                        <p className="text-xs sm:text-sm font-medium text-slate-200 uppercase tracking-wider">
                            National & International Journal Subscriptions & Digital Resources
                        </p>
                    </div>

                    <div className="flex bg-white/10 p-1.5 rounded-xl border border-white/15 self-center md:self-auto backdrop-blur-xs">
                        {[
                            { id: 'stats', label: 'Journal Stats', icon: FileText },
                            { id: 'directory', label: 'Journal Hub', icon: Bookmark },
                            { id: 'digital', label: 'Digital Hub', icon: Monitor }
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
                    {activeTab === 'stats' && (
                        <motion.div
                            key="stats"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            className="space-y-6 max-w-6xl mx-auto"
                        >
                            {/* Heading & Summary Stats */}
                            <div className="flex flex-col items-center sm:items-start sm:flex-row sm:justify-between gap-4 text-center sm:text-left">
                                <div className="space-y-1 flex flex-col items-center sm:items-start">
                                    <div className="flex items-center justify-center sm:justify-start gap-3">
                                        <span className="w-1.5 h-6 bg-[#ffc107] rounded-full inline-block shrink-0" />
                                        <h2 className="text-xl md:text-2xl font-bold text-[#18357a] tracking-tight leading-tight">Journal Statistics</h2>
                                    </div>
                                    <p className="text-xs font-medium text-[#64779F] uppercase tracking-wider sm:pl-4">Department-wise National & International Publications (As of 13.07.2026)</p>
                                </div>

                                <div className="bg-[#18357a] rounded-xl px-5 py-2 text-center sm:text-right shadow-md shadow-[#18357a]/20 self-center sm:self-auto flex items-center gap-6">
                                    <div>
                                        <p className="text-[10px] font-bold text-[#ffc107] uppercase tracking-wider">National</p>
                                        <p className="text-lg font-bold text-white leading-tight">96</p>
                                    </div>
                                    <div className="w-px h-8 bg-white/20" />
                                    <div>
                                        <p className="text-[10px] font-bold text-[#ffc107] uppercase tracking-wider">International</p>
                                        <p className="text-lg font-bold text-white leading-tight">324</p>
                                    </div>
                                </div>
                            </div>
                            
                            {/* Table Card */}
                            <div className="bg-white rounded-xl border border-slate-200 shadow-lg shadow-slate-900/5 overflow-hidden">
                                <div className="overflow-x-auto">
                                    <table className="w-full min-w-[650px] text-left font-graphik border-collapse">
                                        <thead>
                                            <tr className="bg-[#18357a] text-white">
                                                <th className="px-6 py-3.5 text-xs md:text-sm font-semibold uppercase tracking-wider w-28">Degree</th>
                                                <th className="px-6 py-3.5 text-xs md:text-sm font-semibold uppercase tracking-wider">Department / Specialization</th>
                                                <th className="px-6 py-3.5 text-xs md:text-sm font-semibold uppercase tracking-wider text-center w-28">National</th>
                                                <th className="px-6 py-3.5 text-xs md:text-sm font-semibold uppercase tracking-wider text-center w-36">International</th>
                                            </tr>
                                        </thead>
                                        <tbody className="text-sm">
                                            {JOURNAL_STATS.map((row, i) => (
                                                <tr key={i} className="odd:bg-white even:bg-[#f4f6fa] border-b border-slate-200/70 hover:bg-slate-100/80 transition-colors">
                                                    <td className="px-6 py-3.5 font-semibold text-[#18357a] whitespace-nowrap">{row.deg}</td>
                                                    <td className="px-6 py-3.5 font-medium text-slate-800">{row.c}</td>
                                                    <td className="px-6 py-3.5 text-center font-normal text-slate-700 whitespace-nowrap">{row.nj}</td>
                                                    <td className="px-6 py-3.5 text-center font-medium text-slate-900 whitespace-nowrap">{row.ij}</td>
                                                </tr>
                                            ))}
                                            <tr className="bg-[#e9eef7] border-t-2 border-slate-300">
                                                <td colSpan="2" className="px-6 py-4 font-bold text-[#18357a] text-base">Aggregated Network Volume</td>
                                                <td className="px-6 py-4 text-center font-bold text-slate-900 text-base">96</td>
                                                <td className="px-6 py-4 text-center font-bold text-[#18357a] text-lg">324</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </motion.div>
                    )}

                    {activeTab === 'directory' && (
                        <motion.div
                            key="directory"
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
                                        <h2 className="text-xl md:text-2xl font-bold text-[#18357a] tracking-tight leading-tight">Journal Hub</h2>
                                    </div>
                                    <p className="text-xs font-medium text-[#64779F] uppercase tracking-wider sm:pl-4">List of Subscribed Print & Electronic Journals (Total: 96)</p>
                                </div>

                                <div className="relative flex-1 max-w-md w-full self-center sm:self-auto">
                                    <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={16} />
                                    <input 
                                        type="text"
                                        value={searchQuery}
                                        onChange={(e) => setSearchQuery(e.target.value)}
                                        placeholder="Search by journal title..."
                                        className="w-full pl-11 pr-4 py-2.5 bg-white border border-slate-200 rounded-xl text-xs font-medium focus:outline-none focus:ring-2 focus:ring-[#18357a]/20 focus:border-[#18357a] transition-all shadow-sm"
                                    />
                                </div>
                            </div>
                            
                            {/* Table Card */}
                            <div className="bg-white rounded-xl border border-slate-200 shadow-lg shadow-slate-900/5 overflow-hidden">
                                <div className="overflow-x-auto">
                                    <table className="w-full min-w-[500px] text-left font-graphik border-collapse">
                                        <thead>
                                            <tr className="bg-[#18357a] text-white">
                                                <th className="px-6 py-3.5 text-xs md:text-sm font-semibold uppercase tracking-wider w-24 text-center">S. No.</th>
                                                <th className="px-6 py-3.5 text-xs md:text-sm font-semibold uppercase tracking-wider text-left">Title of the Journal</th>
                                            </tr>
                                        </thead>
                                        <tbody className="text-sm">
                                            {JOURNAL_LIST.filter(j => j.toLowerCase().includes(searchQuery.toLowerCase())).map((journal, i) => (
                                                <tr key={i} className="odd:bg-white even:bg-[#f4f6fa] border-b border-slate-200/70 hover:bg-slate-100/80 transition-colors">
                                                    <td className="px-6 py-3.5 text-center font-semibold text-[#18357a] whitespace-nowrap">{i + 1}</td>
                                                    <td className="px-6 py-3.5 text-left font-medium text-slate-800 leading-relaxed">{journal}</td>
                                                </tr>
                                            ))}
                                            {JOURNAL_LIST.filter(j => j.toLowerCase().includes(searchQuery.toLowerCase())).length === 0 && (
                                                <tr>
                                                    <td colSpan="2" className="px-6 py-8 text-center text-slate-500 font-medium">
                                                        No journals found matching "{searchQuery}"
                                                    </td>
                                                </tr>
                                            )}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </motion.div>
                    )}

                    {activeTab === 'digital' && (
                        <motion.div
                            key="digital"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            className="space-y-8 max-w-6xl mx-auto"
                        >
                            {/* Infrastructure Overview */}
                            <div className="grid lg:grid-cols-12 gap-8 items-stretch">
                                {/* Left Column: Digital Library Lab Card */}
                                <div className="lg:col-span-4 p-6 sm:p-8 bg-[#18357a] rounded-2xl text-white shadow-xl relative overflow-hidden flex flex-col justify-between border border-[#18357a]">
                                    <div>
                                        <div className="w-12 h-12 bg-[#ffc107] rounded-xl flex items-center justify-center text-[#18357a] shadow-md shadow-black/10 shrink-0 mb-6">
                                            <Monitor size={24} />
                                        </div>
                                        <h3 className="text-xl font-bold tracking-tight text-white mb-2.5">Digital Library Lab</h3>
                                        <p className="text-xs sm:text-sm font-normal text-slate-200 leading-relaxed">
                                            Our state-of-the-art digital hub features 30 high-speed computing nodes designed for seamless academic research and global citation access.
                                        </p>
                                    </div>

                                    <div className="pt-8 space-y-3">
                                        <div className="flex items-center gap-3 p-3.5 bg-white/10 rounded-xl border border-white/15">
                                            <Headphones size={18} className="text-[#ffc107] shrink-0" />
                                            <p className="text-xs font-medium text-white">Audio Learning Nodes (10 Available)</p>
                                        </div>
                                        <div className="flex items-center gap-3 p-3.5 bg-white/10 rounded-xl border border-white/15">
                                            <Globe size={18} className="text-[#ffc107] shrink-0" />
                                            <p className="text-xs font-medium text-white">High Speed Fiber Network</p>
                                        </div>
                                    </div>
                                </div>
 
                                {/* Right Column: Access Hours & E-Resources */}
                                <div className="lg:col-span-8 space-y-6 flex flex-col justify-between">
                                    {/* Operational Hours */}
                                    <div className="p-6 md:p-7 bg-white rounded-2xl border border-slate-200/90 shadow-lg shadow-slate-900/5 flex flex-col sm:flex-row sm:items-center justify-between gap-6">
                                        <div className="flex items-center gap-4">
                                            <div className="w-11 h-11 bg-slate-100 rounded-xl flex items-center justify-center text-[#18357a] shrink-0">
                                                <Clock size={22} />
                                            </div>
                                            <div>
                                                <h4 className="text-base font-bold text-[#18357a]">Laboratory Access Hours</h4>
                                                <p className="text-xs font-normal text-slate-500 mt-0.5">Facility availability schedule</p>
                                            </div>
                                        </div>
                                        <div className="grid grid-cols-2 gap-6 sm:border-l sm:border-slate-200 sm:pl-6">
                                            <div>
                                                <p className="text-[10px] font-semibold text-slate-500 uppercase tracking-wider mb-0.5">Working Days</p>
                                                <p className="font-semibold text-[#18357a] text-sm">09:30 AM - 06:30 PM</p>
                                            </div>
                                            <div>
                                                <p className="text-[10px] font-semibold text-slate-500 uppercase tracking-wider mb-0.5">Public Holidays</p>
                                                <p className="font-semibold text-slate-800 text-sm">09:30 AM - 03:30 PM</p>
                                            </div>
                                        </div>
                                    </div>
 
                                    {/* Link Portal */}
                                    <div className="grid sm:grid-cols-2 gap-3.5">
                                        {E_RESOURCES.map((link, i) => (
                                            <a 
                                                key={i} 
                                                href={link.u} 
                                                target="_blank" 
                                                rel="noreferrer" 
                                                className="group p-4 sm:p-5 bg-white border border-slate-200/80 hover:border-[#18357a]/40 hover:bg-slate-50 rounded-xl shadow-xs flex items-center justify-between transition-all"
                                            >
                                                <div className="pr-2">
                                                    <p className="text-xs sm:text-sm font-semibold text-[#18357a] transition-colors">{link.n}</p>
                                                    <p className="text-[11px] font-normal text-slate-500 mt-0.5">{link.d}</p>
                                                </div>
                                                <ExternalLink size={15} className="text-[#ffc107] group-hover:text-[#18357a] shrink-0 transition-colors" />
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
