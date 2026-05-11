import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { useParams, Link } from 'react-router-dom'
import { 
    ChevronRight, 
    ArrowLeft,
    Search,
    Presentation,
    Calendar,
    Users,
    Globe,
    Award
} from 'lucide-react'

const ConferencesPage = () => {
    const { deptName } = useParams()
    const [searchTerm, setSearchTerm] = useState('')

    const formatDeptName = (name) => {
        if (!name) return "Departmentwise"
        return name.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')
    }

    const allConferences = {
        'electronics-&-communication-engineering': [
            // 2024-25
            { id: 1, author: "Dr. V. Saravanan, Dr. N. Santhiyakumari", title: "Artificial Intelligence based New Approaches for Impulsive Noise Reduction Techniques", conference: "21st EURECA International Engineering Research Conference", location: "Taylor's University, Malaysia", type: "International", date: "July 24-26, 2024" },
            { id: 2, author: "G.S. Kavya, S. Kumarganesh", title: "A Novel Approach for Retinal Vessel Extraction Using Multi-Scale Deep Learning", conference: "IEEE International Conference on Computing and Intelligent Reality Technologies", location: "Karunya Institute, Coimbatore", type: "International", date: "Dec 5-6, 2024" },
            { id: 3, author: "S Kumarganesh, A. Gopalakrishnan, B. Ragavendran et al.", title: "Enhancing Optical Sensor Image Classification Through Deep Learning with CNN", conference: "ICRDICCT'25", location: "EGS Pillay College, Nagapattinam", type: "International", date: "April 4-5, 2025" },
            { id: 4, author: "Nithya C, Elarmathi S, Kavya G S et al.", title: "A Systematic Approach of a Various Natural Acid-Base Indicator on Fruits using CNN", conference: "ICRDICCT'25", location: "EGS Pillay College, Nagapattinam", type: "International", date: "April 4-5, 2025" },
            { id: 5, author: "B. Ragavendran, S. Kumarganesh, S. Loganathan et al.", title: "An Efficient Multi-user Secured Encryption Storage Algorithm used in Encrypted cloud data", conference: "International Conference Additive Manufacturing Technologies", location: "Mahendra Institute, Namakkal", type: "International", date: "Oct 17-18, 2024" },
            { id: 6, author: "G Divya Bharathi, S. Kumarganesh, A Gopalakrishnan", title: "Automatic detection on Rheumatoid arthritis using machine Learning", conference: "International Conference Additive Manufacturing Technologies", location: "Mahendra Institute, Namakkal", type: "International", date: "Oct 17-18, 2024" },
            { id: 7, author: "S. Santhosh, S. Poornesh, M. Abisheak Sabari et al.", title: "Automated Ultraviolet Sterile Station For Healthcare Sector", conference: "2ndMRIET", location: "Knowledge Institute of Technology", type: "National", date: "April 4, 2025" },
            { id: 8, author: "K. Sanjay, B. Ganesh Raj, B. Manikandan et al.", title: "Automated Glove Donning For Infection Control In Hospitals", conference: "2ndMRIET", location: "Knowledge Institute of Technology", type: "National", date: "April 4, 2025" },
            { id: 9, author: "S. Subashini, K. Lingeshwaran, S. Shahid Suhail et al.", title: "AI-Based Silent Communication System For Mute People Using Opencv", conference: "2ndMRIET", location: "Knowledge Institute of Technology", type: "National", date: "April 4, 2025" },
            { id: 10, author: "G. Divya shree, S. kousika, M. Santhosh et al.", title: "AI & GSM Enabled Overload Monitoring System For Vehicles", conference: "2ndMRIET", location: "Knowledge Institute of Technology", type: "National", date: "April 4, 2025" },
            { id: 11, author: "M. Boomika, M. Sowndharya, T. Guru Vignesh et al.", title: "Smart Water Level And Quality Monitoring System", conference: "2ndMRIET", location: "Knowledge Institute of Technology", type: "National", date: "April 4, 2025" },
            { id: 12, author: "S. Hemamalini, M. Harish, V.Jagadeeshwaran et al.", title: "Women Safety Footwear With Embedded SOS System", conference: "2ndMRIET", location: "Knowledge Institute of Technology", type: "National", date: "April 4, 2025" },

            // 2023-24
            { id: 101, author: "Dr.N.Santhiyakumari, Revathy V et al.", title: "Emerging Methods for early detection of forest fires", conference: "International conference on AI trending towards automation 4.0", location: "Knowledge Institute of Technology", type: "International", date: "2023" },
            { id: 102, author: "Dr.M.Thangavel, Harini V et al.", title: "Automatic Car Parking System based on Embedded system", conference: "NCSCV’23", location: "Knowledge Institute of Technology", type: "National", date: "May 2023" },
            { id: 103, author: "Mr.R.Shanmugasundaram et al.", title: "AI-Based Drowsiness Detection and Autonomous Driving", conference: "ICARICT2023", location: "Online", type: "International", date: "June 2023" },
            { id: 104, author: "Mr.M.Dineshkumar et al.", title: "Smart Wastage segregator using IOT", conference: "AI automation 4.0", location: "KIOT", type: "International", date: "2023" },
            { id: 105, author: "Mr.G.Rajamanickam et al.", title: "Smart Guest Receiving using IOT", conference: "AI automation 4.0", location: "KIOT", type: "International", date: "2023" },

            // 2021-22
            { id: 201, author: "Dr.N.Santhiyakumari", title: "Augmented Reality Based Gesture Controlled Virtual Board", conference: "ETEDM 22", location: "KIOT", type: "National", date: "2022" },
            { id: 202, author: "Dr.M.Thangavel", title: "Leaf Disease Detection Using Machine Learning", conference: "ETEDM 22", location: "KIOT", type: "National", date: "2022" },
            { id: 203, author: "Dr. S Kumarganesh", title: "An Efficient Detection And Classification Of Covid -19 Using Deep Learning Approach", conference: "ETEDM 22", location: "KIOT", type: "National", date: "2022" }
        ]
    }

    const currentConferences = allConferences[deptName?.toLowerCase()] || []

    const filteredConferences = currentConferences.filter(conf => 
        conf.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
        conf.author.toLowerCase().includes(searchTerm.toLowerCase()) ||
        conf.conference.toLowerCase().includes(searchTerm.toLowerCase())
    )

    return (
        <div className="min-h-screen bg-[#f6f9fc] font-sans pb-20">
            {/* Breadcrumbs */}
            <div className="bg-white border-b border-slate-200 py-4">
                <div className="max-w-6xl mx-auto px-6 flex items-center gap-4">
                    <Link to="/research" className="text-slate-400 hover:text-[#0f172a] text-xs font-bold uppercase tracking-wider transition-colors pt-0.5">
                        Research Initiatives
                    </Link>
                    <ChevronRight size={14} className="text-slate-300" />
                    <Link to={`/research/${deptName}`} className="text-slate-400 hover:text-[#0f172a] text-xs font-bold uppercase tracking-wider transition-colors pt-0.5">
                        Research in {formatDeptName(deptName)}
                    </Link>
                    <ChevronRight size={14} className="text-slate-300" />
                    <span className="text-[#0f172a] text-xs font-bold uppercase tracking-wider pt-0.5">
                        Conference Publications
                    </span>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-6 py-12 lg:py-16">
                
                {/* Header Section */}
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mb-12"
                >


                    <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8">
                        <div>
                            <h1 className="text-3xl lg:text-5xl font-bold text-[#224292] uppercase leading-tight mb-6">
                                Scholarly <span className="text-[#ffc107]">Conferences</span>
                            </h1>
                            <div className="max-w-2xl border-l-4 border-[#ffc107] pl-8 py-1">
                                <p className="text-[#1e293b] text-base font-semibold leading-relaxed">
                                    Comprehensive record of research papers presented by {formatDeptName(deptName)} faculty and students at national and international technical symposiums.
                                </p>
                            </div>
                        </div>

                        {/* Search Bar */}
                        <div className="relative group min-w-[320px]">
                            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-[#ffc107] transition-colors" size={18} />
                            <input 
                                type="text"
                                placeholder="Search Author, Title..."
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                                className="w-full bg-white border border-slate-200 rounded-2xl py-4 pl-12 pr-6 text-sm font-semibold text-[#0f172a] focus:ring-2 focus:ring-[#ffc107]/20 focus:border-[#ffc107] outline-none transition-all shadow-xl shadow-blue-900/5 placeholder:text-slate-300"
                            />
                        </div>
                    </div>
                </motion.div>

                {/* Grid of Conference Papers */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {filteredConferences.length > 0 ? (
                        filteredConferences.map((conf, idx) => (
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: idx * 0.05 }}
                                key={conf.id}
                                className="group bg-white rounded-[2rem] border border-slate-200/60 shadow-xl shadow-blue-900/5 hover:border-[#ffc107] transition-all p-8 flex flex-col justify-between"
                            >
                                <div>
                                    <div className="flex justify-between items-start mb-6">
                                        <div className="flex items-center gap-2 px-3 py-1 bg-[#224292] rounded-full text-white text-[9px] font-black uppercase tracking-widest">
                                            {conf.type === 'International' ? <Globe size={10} /> : <Award size={10} />}
                                            {conf.type}
                                        </div>
                                        <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">{conf.date}</span>
                                    </div>
                                    <h3 className="text-base font-bold text-[#0f172a] uppercase leading-snug italic mb-4 line-clamp-3">
                                        "{conf.title}"
                                    </h3>
                                    <div className="flex items-center gap-2 mb-6">
                                        <Users size={14} className="text-slate-300" />
                                        <span className="text-[11px] font-bold text-[#64779F] uppercase tracking-wider">{conf.author}</span>
                                    </div>
                                </div>
                                <div className="pt-6 border-t border-slate-50">
                                    <div className="flex items-start gap-3">
                                        <Presentation size={16} className="text-[#ffc107] shrink-0 mt-0.5" />
                                        <div>
                                            <p className="text-[12px] font-bold text-[#1e293b] leading-tight mb-1">{conf.conference}</p>
                                            <p className="text-[10px] font-bold text-[#64779F] uppercase italic">{conf.location}</p>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        ))
                    ) : (
                        <div className="col-span-2 py-32 text-center text-slate-300 font-bold uppercase text-sm tracking-widest">
                            No conference papers found matching your search
                        </div>
                    )}
                </div>

            </div>
        </div>
    )
}

export default ConferencesPage
