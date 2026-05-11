import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { useParams, Link } from 'react-router-dom'
import { 
    ChevronRight, 
    ArrowLeft,
    BookOpen,
    Search,
    FileText,
    Calendar,
    Users
} from 'lucide-react'

const NonIndexedPublicationsPage = () => {
    const { deptName } = useParams()
    const [searchTerm, setSearchTerm] = useState('')

    const formatDeptName = (name) => {
        if (!name) return "Departmentwise"
        return name.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')
    }

    const allPublications = {
        'electronics-&-communication-engineering': [
            // 2023-24
            { id: 1, author: "Dr.N.Santhiyakumari", title: "Emerging Methods for early detection of forest fires", journal: "Dogo Rangsang Research Journal", volume: "Vol 13, Issue 6", issn: "2347-7180", year: "June 2023" },
            { id: 2, author: "Dr.S.Kumarganesh", title: "Systematic Approach for Healthcare Monitoring System Using IOT", journal: "Journal of Emerging Technologies and Innovative Research", volume: "Vol 10, Issue 6", issn: "2349-5162", year: "June 2023" },
            { id: 3, author: "Mr.R.Shanmugasundaram", title: "AI-Based Drowsiness Detection and Autonomous Driving", journal: "Journal of Emerging Technologies and Innovative Research", volume: "Vol 10, Issue 6", issn: "2349-5162", year: "June 2023" },
            { id: 4, author: "Dr.V.Saravanan", title: "Digital Naturalist Using Hybrid Learning Model", journal: "Journal of Emerging Technologies and Innovative Research", volume: "Vol 10, Issue 6", issn: "2349-5162", year: "June 2023" },
            { id: 5, author: "Mr.K.Rajesh", title: "IoT Harvest HUB Transforming Agriculture market", journal: "International Research Journal of Modernization in Engineering technology and Science", volume: "06, 05", issn: "2582–5208", year: "2024" },
            { id: 6, author: "Mr.A.Tamilselvan", title: "Smart Crop Protection System for Agriculture", journal: "International Journal of New Innovations in Engineering and Technology", volume: "Vol 22, Issue 1", issn: "2319-6319", year: "April 2023" },
            { id: 7, author: "Mr.S.Veerakumar", title: "Portable ECG monitoring system using AD8232(IoMT)", journal: "International Journal of New Innovations in Engineering and Technology", volume: "Vol 22, Issue 1", issn: "2319-6319", year: "April 2023" },
            { id: 8, author: "Mrs. S. Elarmathi / Mrs. V.Vadivu", title: "Soil Nutrients Monitoring and Analyzing System For Agriculture", journal: "International Journal of New Innovations in Engineering and Technology", volume: "Vol 22, Issue 1", issn: "2319-6319", year: "April 2023" },
            { id: 9, author: "Mrs. S. Sasidevi / Mrs. M. Vasanthi", title: "Intelligent Street Lighting: An IOT Based System for adaptive brightness and fault management", journal: "Journal of IoT in social, Mobile, Analytics and Cloud", volume: "06, 03", issn: "2582–1369", year: "2024" },
            
            // 2022-23
            { id: 10, author: "Dr.N.Santhiyakumari", title: "Augmented Reality Based Gesture Controlled Virtual Board", journal: "International Journal of Engineering Research & Technology", volume: "Vol 10, Issue 08", issn: "2278-0181", year: "July 2022" },
            { id: 11, author: "Mr. V. Saravanan", title: "Design And Implementation of Online Grocery Shop", journal: "International Journal of Engineering Research & Technology", volume: "Vol 10, Issue 08", issn: "2278-0181", year: "July 2022" },
            { id: 12, author: "Dr.P. Shanmugasundaram", title: "Non-Invasive Quantification of Human Throat Analysis In Endoscopy Scanning Method", journal: "International Journal of Research Publication and Reviews", volume: "Vol 3, Issue 06", issn: "2582-7421", year: "July 2022" },
            { id: 13, author: "Mr.R. Shanmugasundaram", title: "Fire and smoke detection without sensors. Image processing based approved.", journal: "International Journal of Engineering Research & Technology", volume: "Vol 10, Issue 08", issn: "2278-0181", year: "July 2022" },
            { id: 14, author: "Mr. R. Shanmugasundaram", title: "IoT Based Humidity And Temperature Monitoring System Using Arduino Uno", journal: "International Journal of Engineering Research & Technology", volume: "Vol 10, Issue 08", issn: "2278-0181", year: "July 2022" },
            { id: 15, author: "Mr.M.Chandraman", title: "Smart Wireless Water Meter With WEB DB Using Internet of Things", journal: "International Journal of Engineering Research & Technology", volume: "Vol 10, Issue 08", issn: "2278-0181", year: "July 2022" },
            { id: 16, author: "Mr.A.Arun", title: "Wireless Controlled Distribution Transformer Load Management System", journal: "International Journal of Engineering Research & Technology", volume: "Vol 10, Issue 08", issn: "2278-0181", year: "July 2022" },
            { id: 17, author: "Mrs. L. Chitrapaavai", title: "Hydroponics Irrigation System using IoT", journal: "International Journal of Engineering Research & Technology", volume: "Vol 10, Issue 08", issn: "2278-0181", year: "July 2022" }
        ],
        'civil-engineering': [
            { id: 1, author: "Dr.P.M.Shanmugavadivu", title: "Structural behaviour of quarry dust concrete with super cover", journal: "Indian Concrete Journal", volume: "Vol.84, No.6", issn: "-", year: "2010" },
            { id: 2, author: "Dr.P.M.Shanmugavadivu", title: "Rice Husk Ash Paver Blocks", journal: "CIT journal of Research", volume: "Vol.1, No.4", issn: "-", year: "2010-11" },
            { id: 3, author: "Dr.P.M.Shanmugavadivu", title: "Effect of gradation of manufactured sand in acid attack of concrete", journal: "Asian Journal of Chemistry", volume: "Vol.26, No.1", issn: "0970-7077", year: "2014" },
            { id: 4, author: "Dr.P.M.Shanmugavadivu", title: "An Experimental study on light transmitting concrete", journal: "International Journal of Research in Engineering & Technology", volume: "Vol.3, No.11", issn: "2321-7308", year: "2014" },
            { id: 5, author: "Dr.G. Siva Natarajan", title: "Statistical Analysis for Hydrogeochemical Data Interpretation in Upper Thirumanimuthar Sub Basin, Cauvery River", journal: "Journal of Annamalai University", volume: "Vol.46", issn: "-", year: "2010" },
            { id: 6, author: "Dr.G. Siva Natarajan", title: "GIS Study for Locating Village wise Suitable Groundwater Quality Zones in Parts of Veeranam Catchments Area", journal: "Journal of Applied Geochemistry", volume: "Vol.12, No.1", issn: "0972-1967", year: "2009" },
            { id: 7, author: "Dr.G. Siva Natarajan", title: "Aquifer Zone Thickness Identification for Artificial Rercharge Studies Through Geophysics in GIS at Upper Manimuktha Sub Basin", journal: "Journal of Geological Association & Research Centre", volume: "Vol.16, No.1", issn: "-", year: "2009" },
            { id: 8, author: "Dr.G. Siva Natarajan", title: "Statistical Analysis for Hydrogeochemical Data Interpretation in Upper Thirumanimuthar Sub Basin, Cauvery River", journal: "Journal of Annamalai University", volume: "Vol.46", issn: "-", year: "2010" },
            { id: 9, author: "K. Uma Shankar, S. Pradeep Kumar, K. Arun Prakash", title: "Experimental Study On The Behaviour Of Retempered Concrete", journal: "International Journal of Research in Engineering & Technology", volume: "Vol.3, No 11", issn: "2319-1163", year: "2014" }
        ]
    }

    const currentPublications = allPublications[deptName?.toLowerCase()] || []

    const filteredPublications = currentPublications.filter(pub => 
        pub.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
        pub.author.toLowerCase().includes(searchTerm.toLowerCase()) ||
        pub.journal.toLowerCase().includes(searchTerm.toLowerCase())
    )

    return (
        <div className="min-h-screen bg-[#f6f9fc] font-sans pb-20">


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
                                Non-Indexed <span className="text-[#ffc107]">Publications</span>
                            </h1>
                            <div className="max-w-2xl border-l-4 border-[#ffc107] pl-8 py-1">
                                <p className="text-[#1e293b] text-base font-semibold leading-relaxed">
                                    Comprehensive record of research articles published in national and peer-reviewed journals beyond the major citation indexes for {formatDeptName(deptName)}.
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

                {/* Table Section */}
                <motion.div 
                    initial={{ opacity: 0, scale: 0.98 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="bg-white rounded-2xl shadow-2xl shadow-blue-900/5 border border-slate-200/60 overflow-hidden"
                >
                    <div className="overflow-x-auto">
                        <table className="w-full border-collapse text-left">
                            <thead>
                                <tr className="text-white">
                                    <th className="bg-[#0f172a] px-6 py-5 text-[10px] font-black uppercase tracking-[2px] w-16 border-r border-white/5">#</th>
                                    <th className="bg-[#0f172a] px-6 py-5 text-[10px] font-black uppercase tracking-[2px]">Publication Metadata</th>
                                    <th className="bg-[#0f172a] px-6 py-5 text-[10px] font-black uppercase tracking-[2px]">Journal Details</th>
                                    <th className="bg-[#0f172a] px-6 py-5 text-right text-[10px] font-black text-[#ffc107] uppercase tracking-[2px] pr-8">Period</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-slate-100 italic">
                                {filteredPublications.length > 0 ? (
                                    filteredPublications.map((pub, idx) => (
                                        <tr key={pub.id} className="group hover:bg-[#fafcff] transition-all duration-300">
                                            <td className="px-6 py-8 align-top border-r border-slate-50">
                                                <div className="w-8 h-8 bg-[#224292]/5 rounded-lg flex items-center justify-center text-[#224292] font-black text-xs group-hover:bg-[#ffc107] group-hover:text-[#224292] transition-all duration-300 shadow-inner">
                                                    {idx + 1 < 10 ? `0${idx + 1}` : idx + 1}
                                                </div>
                                            </td>
                                            <td className="px-6 py-8">
                                                <div className="flex flex-col gap-4">
                                                    <div className="flex items-start gap-4">
                                                        <div className="w-10 h-10 rounded-xl bg-slate-50 flex items-center justify-center text-[#ffc107] shrink-0 border border-slate-100">
                                                            <FileText size={18} />
                                                        </div>
                                                        <h3 className="text-[14px] font-bold text-[#0f172a] uppercase leading-tight italic tracking-tight">
                                                            "{pub.title}"
                                                        </h3>
                                                    </div>
                                                    <div className="flex items-center gap-2 pl-14">
                                                        <Users size={14} className="text-slate-300" />
                                                        <span className="text-[11px] font-bold text-[#64779F] uppercase tracking-wider">{pub.author}</span>
                                                    </div>
                                                </div>
                                            </td>
                                            <td className="px-6 py-8 max-w-xs">
                                                <div className="flex items-start gap-3">
                                                    <BookOpen size={16} className="text-[#ffc107] shrink-0 mt-0.5" />
                                                    <div className="flex flex-col gap-1">
                                                        <p className="text-[12px] font-bold text-[#1e293b] leading-tight">
                                                            {pub.journal}
                                                        </p>
                                                        <p className="text-[10px] font-bold text-[#64779F] uppercase tracking-wide">
                                                            {pub.volume} | ISSN: {pub.issn}
                                                        </p>
                                                    </div>
                                                </div>
                                            </td>
                                            <td className="px-6 py-8 text-right pr-8">
                                                <div className="flex flex-col items-end gap-1.5">
                                                    <div className="flex items-center gap-2 px-3 py-1 bg-slate-50 rounded-full text-[#0f172a] text-[10px] font-bold uppercase border border-slate-100 italic">
                                                        <Calendar size={12} className="text-[#ffc107]" /> {pub.year}
                                                    </div>
                                                </div>
                                            </td>
                                        </tr>
                                    ))
                                ) : (
                                    <tr>
                                        <td colSpan="4" className="px-6 py-32 text-center text-slate-300 font-bold uppercase text-sm tracking-widest">
                                            No publications found matching your search
                                        </td>
                                    </tr>
                                )}
                            </tbody>
                        </table>
                    </div>
                </motion.div>

            </div>
        </div>
    )
}

export default NonIndexedPublicationsPage
