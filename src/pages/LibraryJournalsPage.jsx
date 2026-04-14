import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  ArrowLeft,
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
import { useNavigate } from 'react-router-dom'

const JOURNAL_STATS = [
    { deg: 'B.E', c: 'Civil Engineering', nj: 6, ij: 23 },
    { deg: 'B.E', c: 'Computer Science & Engineering', nj: 6, ij: 32 },
    { deg: 'B.E', c: 'Electronics & Communication Engineering', nj: 6, ij: 12 },
    { deg: 'B.E', c: 'Electrical & Electronics Engineering', nj: 6, ij: 9 },
    { deg: 'B.E', c: 'Mechanical Engineering', nj: 6, ij: 61 },
    { deg: 'B.E', c: 'Electronics and Computer Engineering', nj: 6, ij: 9 },
    { deg: 'B.Tech', c: 'Information Technology', nj: 6, ij: 15 },
    { deg: 'B.Tech', c: 'Computer Science and Business Systems', nj: 6, ij: 12 },
    { deg: 'B.Tech', c: 'Artificial Intelligence & Data Science', nj: 6, ij: 9 },
    { deg: 'M.E', c: 'Industrial Safety Engineering', nj: 6, ij: 21 },
    { deg: 'M.E', c: 'Computer Science & Engineering', nj: 6, ij: 18 },
    { deg: 'M.E', c: 'VLSI', nj: 6, ij: 9 },
    { deg: 'M.E', c: 'Embedded Systems', nj: 6, ij: 6 },
    { deg: 'M.E', c: 'Automotive Electronics', nj: 6, ij: 7 },
    { deg: 'M.E', c: 'Power Electronics and Drives', nj: 6, ij: 7 },
    { deg: 'M.E', c: 'Software Engineering', nj: 6, ij: 10 },
    { deg: 'MBA', c: 'Master of Business Administration', nj: 6, ij: 33 },
    { deg: 'MBA-IEV', c: 'Honors in IEV Development', nj: 6, ij: 10 },
    { deg: 'MCA', c: 'Master of Computer Applications', nj: 6, ij: 11 }
]

const JOURNAL_LIST = [
    "Indian journal of Materials and Structural System", "Indian Concrete Institute Journal", "Journal of Indian Water Works Association",
    "Journal of Structural Engineering", "Journal of The Institution of Engineers (India) : Series A - Civil Engineering",
    "Journal of Construction Engineering, Technology & Management", "Journal of Image Processing and Artificial Intelligence",
    "Indian Journal of Mobile Communication and Networking", "Indian Journal of Neural Networks Research", "Indian Journal of Robotics Application",
    "Indian Journal of Applied Computational Intelligence and Soft Computing", "Indian Journal of Data Mining and Warehouse",
    "Journal of Electronic Networks, Devices and Fields", "Indian Journal of Signal and Image Processing", "IETE Journal of Research",
    "Journal of Network and Information Security", "Indian Journal of Pure and Applied Physics", "Recent Trends in Sensor Research & Technology",
    "Journal of Energy, Environment & Carbon Credits", "Indian Welding Journal", "International Journal of Composite Materials and Matrices",
    "Indian Journal of Heat and Mass Transfer", "Indian Journal of Fluid Engineering and Mechanical Engineering",
    "Journal of The Institution of Engineers (India) : Series C - Mechanical, Production, Aerospace, Marine Engineering",
    "Indian Journal of Power and Energy System Engineering", "International Journal of Advances in Electrical Engineering",
    "Indian Journal of Industrial Electronics and Control", "Journal of Recent Trends in Electrical Power System",
    "Journal of control System and its Recent Developments", "International Journal of Power Electronics and Drive Systems",
    "Journal of Advance Research in Applied Artificial Intelligence and Neural Network", "Journal of Data Science",
    "Journal of Intelligent Computing", "Journal of Information Technology Review", "International Journal of Artificial Intelligence and Computational Research",
    "International Journal of Applied Artificial Intelligence and in Engineering System", "International Journal of Business Management and Information Technology",
    "Indian Journal of Business Information Systems", "Indian Journal of Computer Science", "Advances in Computational Sciences and Technology",
    "Indian Journal of Intelligent Information Processing", "Recent Trends in Programming Languages", "Indian Journal of Wireless and Mobile Computing",
    "International Journal of Computer Vision and Image Processing", "International Journal of Artificial Intelligence and Machine Learning",
    "Indian Journal of Advance Multimedia and Image Processing", "Indian Journal of Neural Networks and Techniques",
    "International Journal of Distributed Computing and Technology", "Indian Journal of Computation Theory", "Indian Journal of Speech and Language Processing",
    "Indian Journals of Computer Simulation", "Journal of Computer Networking, Wireless and Mobile Communications",
    "Journal of Computer Science Engineering and Information Technology Research", "Journal of Mathematics and Computer Applications Research",
    "Journal of Interdisciplinary Cycle Research", "Indian Journal of Engineering and Materials Sciences", "Defence Science Journal",
    "Indian Journal of Environmental Science: Development and Monitoring", "Journal of Organizations & Human Behaviour",
    "Journal of Supply Chain Management Systems", "Indian Journal of VLSI design research and development", "Indian Journal of VLSI Design and Embedded System",
    "Journal of Advance Research in Microelectronics and VLSI", "Indian Journal of VLSI and Circuit Design", "Indian Journal of VLSI Design",
    "Indian Journal of Advance Computer & VLSI Design", "Journal of IoT Security and Smart Technologies", "Indian Journal of Embedded and Microprocessor",
    "Indian Journal of Embedded Systems", "IETE Technical Review", "Indian Journal of Embedded System in Engineering Research",
    "International Journal of Embedded Software and Open Source Systems", "Indian Journal of Marketing", "Prabandhan : Indian Journal of Management",
    "Indian Journal of Finance", "Arthshastra Indian Journal of Economics and Research", "Indian Journal of Research in Capital Markets",
    "Global Business Review", "AMC Indian Journal of Entrepreneurship", "Asian Journal of Management Cases", "Journal of Entrepreneurship",
    "South Asian Journal of Business and Management Cases", "South Asian Journal of Human Resource Management",
    "Journal of Entrepreneurship and Innovation in Emerging economics", "International Journal of Computer Technology and Electronics Engineering",
    "Journal of Advanced Research in Computer Technology and Software Applications", "Journal of Advanced Research in Cloud Computing, Virtualization and Web Applications",
    "Journal of Advanced Research in Semiconductor Technology and Circuits", "Journal of Research in Robotics, Networking and Artificial Intelligence",
    "Indian Journal of Computer and Electronics Engineering", "International Journal of Software Engineering and Knowledge Engineering",
    "International Journal of Scientific Research in Computer Sciences and Engineering", "International Journal of Internet of Things and Information Technology",
    "Journal of Advance Software Engineering", "Indian Journal of Computing and Software Technology", "International Journal of Software Computing and Testing",
    "Journal of Advanced Research in Automotive Technology and Transportation System", "Journal of Advanced Research in Electronics Automation & Innovations",
    "International Journal of Research in Circuits, Devices and Systems", "Indian Journal of Automotive Technology", "Journal of Electronics Design and Technology",
    "Indian Journal of Automation & Robotics", "Indonesian Journal of Electrical Engineering and Informatics", "International Journal of Applied Power Engineering",
    "Journal of Electrical Engineering", "Journal of Advanced Research in Power Electronics and Power Systems", "Journal of Electrical Systems",
    "Indian Journal of Advances in Power Electronics", "International Journal of Computer Science and Mobile Computing",
    "International Journal of Cloud Computing and Database Management", "Journal of Cloud Computing and Data Science",
    "Indian Journal of Adavnce in Computer Science and Technology", "International Journal of Internet and computer Security",
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
        <div className="min-h-screen bg-[#FCFDFD] font-graphik pb-24">
            {/* 🔷 Shared Hero Section (Consistent across Hub) */}
            <div className="relative h-[35vh] flex items-center justify-center overflow-hidden bg-[#18357a]">
                <div className="absolute inset-0">
                    <img 
                        src="https://images.unsplash.com/photo-1523050335392-9bc0ad7c9f83?q=80&w=1920&auto=format&fit=crop" 
                        className="w-full h-full object-cover opacity-40" 
                        alt="Campus"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-[#18357a]/80 via-[#18357a]/60 to-transparent" />
                </div>
                
                <div className="relative z-10 text-center px-6">
                    <motion.div
                        initial={{ y: 30, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.8 }}
                    >
                        <button 
                            onClick={() => navigate('/campus-life')}
                            className="inline-flex items-center gap-2 text-[#ffc107] hover:text-white transition-colors mb-6 group border border-[#ffc107]/30 px-4 py-1.5 rounded-full bg-[#18357a]/50 backdrop-blur-sm"
                        >
                            <ArrowLeft size={14} className="group-hover:-translate-x-1 transition-transform" />
                            <span className="text-[10px] font-black uppercase tracking-[2px]">Back to Hub</span>
                        </button>
                        <h1 className="text-4xl md:text-6xl font-black text-white uppercase tracking-tighter leading-none mb-3 font-display">
                            CAMPUS <span className="text-[#ffc107]">LIFE</span>
                        </h1>
                        <p className="text-white/60 font-medium text-[10px] md:text-sm max-w-2xl mx-auto uppercase tracking-widest leading-loose">
                            Institutional Infrastructure & Ecosystem
                        </p>
                    </motion.div>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-6 py-12 space-y-12">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-8 pt-8 border-t border-slate-100">
                    <div>
                        <h2 className="text-3xl font-black text-[#18357a] uppercase tracking-tighter leading-none">
                            Journals & <span className="text-[#ffc107]">E-Digital</span>
                        </h2>
                        <p className="text-[10px] font-black text-slate-400 uppercase tracking-[4px] mt-2">Resource Publication Network</p>
                    </div>

                    <div className="flex flex-wrap bg-slate-100 p-1.5 rounded-[1.5rem] gap-1 shadow-inner">
                        {[
                            { id: 'stats', label: 'Journal Stats', icon: FileText },
                            { id: 'directory', label: 'Journal Hub', icon: Bookmark },
                            { id: 'digital', label: 'Digital Hub', icon: Monitor }
                        ].map(tab => (
                            <button
                                key={tab.id}
                                onClick={() => setActiveTab(tab.id)}
                                className={`flex items-center gap-3 px-6 py-4 rounded-xl text-[11px] font-black uppercase tracking-widest transition-all ${
                                    activeTab === tab.id 
                                    ? 'bg-[#18357a] text-white shadow-xl shadow-[#18357a]/30' 
                                    : 'text-slate-500 hover:text-[#18357a] hover:bg-white'
                                }`}
                            >
                                <tab.icon size={16} />
                                <span className={activeTab === tab.id ? 'opacity-100' : 'opacity-60'}>{tab.label}</span>
                            </button>
                        ))}
                    </div>
                </div>

            <div className="max-w-7xl mx-auto px-6 py-12">
                <AnimatePresence mode="wait">
                    {activeTab === 'stats' && (
                        <motion.div
                            key="stats"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            className="bg-white rounded-[3rem] border border-slate-100 shadow-2xl shadow-[#18357a]/5 overflow-hidden"
                        >
                            <div className="p-10 bg-slate-100/80 border-b border-slate-200/50 flex flex-col md:flex-row md:items-center justify-between gap-8 rounded-t-[2.5rem] relative overflow-hidden group">
                                <div className="absolute top-0 left-0 w-64 h-64 bg-[#18357a]/5 blur-[80px] rounded-full -translate-x-1/2 -translate-y-1/2 pointer-events-none" />
                                
                                <div className="flex items-center gap-6 relative z-10">
                                    <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center text-[#18357a] shadow-xl shadow-black/5 border border-slate-100 group-hover:scale-110 transition-all duration-500">
                                        <FileText size={28} />
                                    </div>
                                    <div>
                                        <h2 className="text-2xl font-black text-[#18357a] uppercase tracking-tight leading-none mb-2">Accession Distribution</h2>
                                        <div className="flex items-center gap-2">
                                            <span className="w-1.5 h-1.5 rounded-full bg-[#ffc107]" />
                                            <p className="text-[10px] font-black text-slate-400 uppercase tracking-[4px]">Verified Network Growth</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="text-right relative z-10">
                                    <p className="text-[10px] font-black text-slate-400 uppercase tracking-[4px] leading-none mb-2 text-[#ffc107]">Active Records</p>
                                    <p className="text-4xl font-black text-[#18357a]">428</p>
                                </div>
                            </div>
                            
                            <div className="overflow-x-auto">
                                <table className="w-full text-left">
                                    <thead>
                                        <tr className="bg-[#18357a] border-b border-[#18357a]/10 shadow-md">
                                            <th className="px-8 py-5 text-[11px] font-black text-white uppercase tracking-[2px]">Degree</th>
                                            <th className="px-8 py-5 text-[11px] font-black text-white uppercase tracking-[2px]">Department / Specialization</th>
                                            <th className="px-8 py-5 text-[11px] font-black text-white uppercase tracking-[2px] text-center bg-white/5">National</th>
                                            <th className="px-8 py-5 text-[11px] font-black text-white uppercase tracking-[2px] text-center">International</th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-slate-50 transition-all">
                                        {JOURNAL_STATS.map((row, i) => (
                                            <tr key={i} className="hover:bg-[#18357a]/5 transition-colors group even:bg-slate-50/50">
                                                <td className="px-8 py-5 font-black text-[#18357a] text-[11px] opacity-40 uppercase">{row.deg}</td>
                                                <td className="px-8 py-5 font-black text-[#18357a] text-base uppercase group-hover:text-[#ffc107] transition-colors">{row.c}</td>
                                                <td className="px-8 py-5 text-center font-bold text-slate-400 text-base group-hover:bg-[#18357a]/5 transition-colors">{row.nj}</td>
                                                <td className="px-8 py-5 text-center font-black text-[#18357a] text-base">{row.ij}</td>
                                            </tr>
                                        ))}
                                        <tr className="bg-[#18357a]/5">
                                            <td colSpan="2" className="px-8 py-6 font-black text-[#18357a] text-xl uppercase tracking-tighter">Aggregated Network Volume</td>
                                            <td className="px-8 py-6 text-center font-black text-[#ffc107] text-2xl">114</td>
                                            <td className="px-8 py-6 text-center font-black text-[#18357a] text-2xl">314</td>
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
                            className="bg-white rounded-[3rem] border border-slate-100 shadow-2xl shadow-[#18357a]/5 overflow-hidden"
                        >
                            <div className="p-10 bg-slate-100/80 border-b border-slate-200/50 flex flex-col md:flex-row md:items-center justify-between gap-8 rounded-t-[2.5rem] relative overflow-hidden group">
                                <div className="absolute top-0 right-0 w-64 h-64 bg-[#ffc107]/5 blur-[80px] rounded-full translate-x-1/2 -translate-y-1/2 pointer-events-none" />
                                
                                <div className="flex items-center gap-6 relative z-10">
                                    <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center text-[#ffc107] shadow-xl shadow-black/5 border border-slate-100 group-hover:scale-110 transition-all duration-500">
                                        <Bookmark size={28} />
                                    </div>
                                    <div>
                                        <h2 className="text-2xl font-black text-[#18357a] uppercase tracking-tight leading-none mb-2">Active Publications</h2>
                                        <div className="flex items-center gap-2">
                                            <span className="w-1.5 h-1.5 rounded-full bg-[#ffc107]" />
                                            <p className="text-[10px] font-black text-slate-400 uppercase tracking-[4px]">Serial Resource Hub</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="relative flex-1 max-w-lg z-10">
                                    <Search size={18} className="absolute left-6 top-1/2 -translate-y-1/2 text-slate-400" />
                                    <input 
                                        type="text" 
                                        placeholder="SEARCH JOURNAL DIRECTORY..."
                                        value={searchQuery}
                                        onChange={(e) => setSearchQuery(e.target.value)}
                                        className="w-full pl-14 pr-8 py-5 bg-white border border-slate-200 rounded-[1.5rem] text-[11px] font-black uppercase tracking-widest focus:outline-none focus:ring-4 focus:ring-[#18357a]/5 focus:border-[#18357a] transition-all shadow-sm"
                                    />
                                </div>
                            </div>
                            
                            <div className="p-8 grid grid-cols-1 md:grid-cols-2 gap-4 max-h-[700px] overflow-y-auto custom-scrollbar">
                                {JOURNAL_LIST.filter(j => j.toLowerCase().includes(searchQuery.toLowerCase())).map((journal, i) => (
                                    <div key={i} className="group flex items-start gap-5 p-5 bg-slate-50/50 hover:bg-[#18357a] rounded-2xl border border-slate-100 transition-all duration-500 hover:-translate-y-1">
                                        <div className="w-8 h-8 rounded-lg bg-white group-hover:bg-[#ffc107] flex items-center justify-center shadow-sm shrink-0 transition-all">
                                            <span className="text-[10px] font-black text-[#18357a]">{i+1}</span>
                                        </div>
                                        <p className="text-[11px] font-black text-[#18357a] group-hover:text-white uppercase leading-relaxed tracking-wider transition-colors">
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
                                <div className="lg:col-span-1 p-10 bg-[#18357a] rounded-[3rem] text-white shadow-2xl relative overflow-hidden flex flex-col justify-between group">
                                    <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-bl-[100%] transition-transform duration-700 group-hover:scale-110" />
                                    <div className="relative z-10 space-y-8">
                                        <div className="w-16 h-16 bg-[#ffc107] rounded-3xl flex items-center justify-center shadow-xl shadow-[#ffc107]/20">
                                            <Monitor size={32} className="text-[#18357a]" />
                                        </div>
                                        <div>
                                            <h3 className="text-3xl font-black uppercase tracking-tighter mb-4">Digital Library Lab</h3>
                                            <p className="text-white/60 font-bold text-sm leading-relaxed">
                                                Our state-of-the-art digital hub features 30 high-speed computing nodes designed for seamless academic research and global citation access.
                                            </p>
                                        </div>
                                    </div>
                                    <div className="relative z-10 pt-12 space-y-4">
                                        <div className="flex items-center gap-4 p-4 bg-white/5 rounded-2xl border border-white/10">
                                            <Headphones size={20} className="text-[#ffc107]" />
                                            <p className="text-[10px] font-black uppercase tracking-widest text-[#ffc107]">Audio Learning Nodes (10 Available)</p>
                                        </div>
                                        <div className="flex items-center gap-4 p-4 bg-white/5 rounded-2xl border border-white/10">
                                            <Globe size={20} className="text-[#ffc107]" />
                                            <p className="text-[10px] font-black uppercase tracking-widest text-[#ffc107]">High Speed Fiber Ready</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="lg:col-span-2 space-y-8">
                                    {/* Operational Hours */}
                                    <div className="p-10 bg-white rounded-[3rem] border border-slate-100 shadow-xl shadow-[#18357a]/5 flex flex-col md:flex-row md:items-center justify-between gap-10">
                                        <div className="flex items-center gap-6">
                                            <div className="w-14 h-14 bg-slate-50 rounded-2xl flex items-center justify-center text-[#18357a] border border-slate-100 shadow-sm">
                                                <Clock size={28} />
                                            </div>
                                            <div>
                                                <h4 className="text-xl font-black text-[#18357a] uppercase tracking-tight">Laboratory Access Hours</h4>
                                                <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mt-1 italic">Real-time facility availability</p>
                                            </div>
                                        </div>
                                        <div className="grid grid-cols-2 gap-8 border-l border-slate-100 pl-10">
                                            <div>
                                                <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">Working Days</p>
                                                <p className="font-black text-[#18357a]">09:30 AM - 06:30 PM</p>
                                            </div>
                                            <div>
                                                <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">Public Holidays</p>
                                                <p className="font-black text-[#ffc107]">09:30 AM - 03:30 PM</p>
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
                                                className="group p-8 bg-white border border-slate-100 hover:border-[#18357a] hover:bg-[#18357a] rounded-[2.5rem] shadow-lg shadow-black/5 flex flex-col justify-between gap-8 transition-all duration-500 hover:-translate-y-2 overflow-hidden relative"
                                            >
                                                <div className="absolute top-0 right-0 w-24 h-24 bg-slate-50 group-hover:bg-white/5 rounded-bl-[100%] transition-colors" />
                                                <div className="relative z-10 flex items-center justify-between">
                                                    <div className="text-left">
                                                        <p className="text-[13px] font-black text-[#18357a] group-hover:text-[#ffc107] uppercase tracking-widest leading-none mb-1">{link.n}</p>
                                                        <p className="text-[10px] font-bold text-slate-400 group-hover:text-white/50 uppercase tracking-tight mt-1">{link.d}</p>
                                                    </div>
                                                    <div className="flex flex-col items-center gap-2">
                                                        <div className="p-3 bg-slate-50 group-hover:bg-[#ffc107] rounded-xl transition-colors shrink-0">
                                                            <ExternalLink size={18} className="text-[#18357a] group-hover:text-[#18357a]" />
                                                        </div>
                                                        <span className="text-[8px] font-black uppercase text-[#ffc107] group-hover:text-white transition-colors">View</span>
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
