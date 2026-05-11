import React from 'react'
import { motion } from 'framer-motion'
import { useParams, Link } from 'react-router-dom'
import { 
    ChevronRight, 
    ArrowLeft,
    Handshake,
    ShieldCheck,
    Coins,
    Calendar,
    Award,
    Briefcase,
    Globe
} from 'lucide-react'

const SponsoredProjectsPage = () => {
    const { deptName } = useParams()

    const formatDeptName = (name) => {
        if (!name) return "Departmentwise"
        return name.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')
    }

    const allMhrdPrograms = {
        'mechanical-engineering': [
            { id: 1, title: "Research Methodologies", agency: "MHRD", duration: "2012", fund: "1,42,719" },
            { id: 2, title: "Engineering Thermodynamics", agency: "MHRD", duration: "2012", fund: "2,44,685" },
            { id: 3, title: "Research Methods in Education Technology", agency: "MHRD", duration: "2013", fund: "7,000" }
        ],
        'electronics-&-communication-engineering': [
            { id: 1, year: "2024-2025", faculty: "Mr. K. Rajesh", agency: "MSME Idea Hackathon 4.0", title: "Landslide Monitoring and Warning System", date: "27.06.2025", amount: "9,00,000" },
            { id: 2, year: "2024-2025", faculty: "Mr. A. Silambarasan", agency: "MSME Idea Hackathon 4.0", title: "TonoLITE", date: "27.06.2025", amount: "8,50,000" },
            { id: 3, year: "2024-2025", faculty: "Mrs. V. Vadivu", agency: "TNSCST", title: "Air and Water quality index and Environment monitoring system", date: "13.05.2025", amount: "7,500" },
            { id: 4, year: "2024-2025", faculty: "Mr.M.Chandraman", agency: "TNSDC NIRAL THIRUVIZHA 2.0", title: "IoT-Based Public Toilets Monitoring System", date: "05.03.2025", amount: "10,000" },
            { id: 5, year: "2024-2025", faculty: "Mr.S.Premkumar", agency: "TNSDC NIRAL THIRUVIZHA 2.0", title: "Medicine Supply Management System", date: "05.03.2025", amount: "10,000" },
            { id: 6, year: "2023-2024", faculty: "Mr.T.Praveen Kumar", agency: "TNSCST", title: "Login to windows computer using RFID tag and arduino", date: "01.10.2024", amount: "7,500" },
            { id: 7, year: "2018-2019", faculty: "Dr.N.Santhiyakumari", agency: "AICTE", title: "Modernization of Embedded Lab using IoT", date: "16.05.2019", amount: "12,93,210" },
            { id: 8, year: "2018-2019", faculty: "Mr.M.CHANDRAMAN", agency: "TNSCST", title: "Remote monitoring system for wildlife using IoT", date: "18.02.2019", amount: "7,500" },
            { id: 10, year: "2012-2013", faculty: "Dr.N.Santhiyakumari", agency: "AICTE", title: "Implementation of medical Decision System for CV & CB Disease", date: "21.03.2013", amount: "10,63,650" }
        ]
    }

    const allSponsoredProjects = {
        'mechanical-engineering': [
            { id: 1, faculty: "Mr.K.Mugundhan", title: "Commercialicing Sustainable Bio-Energy Technologies", agency: "CSIR", amount: "30,000", period: "2013" }
        ],
        'electronics-&-communication-engineering': [
            { id: 101, faculty: "Dr.N.Santhiyakumari", title: "Advanced Medical Imaging and Signal Processing Initiative", agency: "Institutional", amount: "In-Progress", period: "2024" }
        ],
        'civil-engineering': [
            { id: 1, faculty: "Dr.P.M.Shanmugavadivu", title: "Application of Geo spatial technology on impact of Climate changes in water resources", agency: "Ministry of Earth sciences", amount: "1,00,000", period: "Feb-15" }
        ]
    }

    const allTnscstProjects = {
        'mechanical-engineering': [
            { id: 1, year: "2019-2020", title: "Quad – copter UAV assisted fertilizer and pesticide spraying system", mentor: "Mr.D.Manikandan", agency: "TNSCST", grant: "7,500", duration: "12 Months" }
        ],
        'electronics-&-communication-engineering': [
            { id: 101, year: "2023-2024", title: "AI-driven emergency response systems for enhanced vehicle safety", mentor: "Dr.S. Kumarganesh", agency: "TNSCST", grant: "Ongoing", duration: "12 Months" }
        ]
    }

    const mhrdPrograms = allMhrdPrograms[deptName?.toLowerCase()] || []
    const sponsoredProjects = allSponsoredProjects[deptName?.toLowerCase()] || []
    const tnscstProjects = allTnscstProjects[deptName?.toLowerCase()] || []
    const consultancyWork = [] 

    const getMhrdSummary = () => {
        return mhrdPrograms.reduce((acc, curr) => {
            const valStr = curr.amount || curr.fund || "0"
            return acc + (parseInt(valStr.toString().replace(/,/g, '')) || 0)
        }, 0).toLocaleString()
    }

    return (
        <div className="min-h-screen bg-[#f6f9fc] font-sans pb-20">


            <div className="max-w-7xl mx-auto px-6 py-12 lg:py-16">
                
                {/* Header Section */}
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mb-16"
                >


                    <h1 className="text-3xl lg:text-5xl font-bold text-[#224292] uppercase leading-tight mb-6">
                        Research & <span className="text-[#ffc107]">Grant Ecosystem</span>
                    </h1>

                    <div className="max-w-3xl border-l-4 border-[#ffc107] pl-8 py-1">
                        <p className="text-[#1e293b] text-base font-semibold leading-relaxed">
                            A comprehensive overview of {formatDeptName(deptName)}'s externally funded projects, MHRD collaborations, TNSCST student grants, and industrial consultancy initiatives.
                        </p>
                    </div>
                </motion.div>

                {/* MHRD Sponsored Programs */}
                <section className="mb-20">
                    <div className="flex items-center gap-4 mb-8">
                        <div className="w-12 h-12 bg-white rounded-2xl shadow-sm border border-slate-100 flex items-center justify-center text-[#ffc107]">
                            <Globe size={24} />
                        </div>
                        <div>
                            <h2 className="text-2xl font-bold text-[#0f172a] uppercase tracking-tight">MHRD Sponsored Programs</h2>
                            <p className="text-[10px] font-bold text-[#64779F] tracking-widest leading-none mt-1">Remote Centre Coordination: Dr. K. Visagavel</p>
                        </div>
                    </div>

                    <div className="bg-white rounded-[2rem] shadow-2xl shadow-blue-900/5 border border-slate-200/60 overflow-hidden">
                        <div className="overflow-x-auto">
                            <table className="w-full border-collapse">
                                <thead>
                                    <tr className="text-white">
                                        <th className="bg-[#0f172a] px-6 py-5 text-left text-[10px] font-black uppercase tracking-[2px] w-16 border-r border-white/5">S.No.</th>
                                        <th className="bg-[#0f172a] px-6 py-5 text-left text-[10px] font-black uppercase tracking-[2px] border-r border-white/5">Workshop / Program Title</th>
                                        <th className="bg-[#0f172a] px-6 py-5 text-left text-[10px] font-black uppercase tracking-[2px] border-r border-white/5">Duration</th>
                                        <th className="bg-[#0f172a] px-6 py-5 text-right text-[10px] font-black text-[#ffc107] uppercase tracking-[2px] pr-8">Grant (Rs)</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-slate-100 italic font-semibold text-[#1e293b]">
                                    {mhrdPrograms.map((item, idx) => (
                                        <tr key={item.id} className="group hover:bg-[#fafcff] transition-all duration-300">
                                            <td className="px-6 py-5 border-r border-slate-50">
                                                <div className="w-10 h-10 bg-[#224292]/5 rounded-xl flex items-center justify-center text-[#224292] font-black text-xs group-hover:bg-[#ffc107] group-hover:text-[#224292] transition-all duration-300 shadow-inner">
                                                    {idx + 1 < 10 ? `0${idx + 1}` : idx + 1}
                                                </div>
                                            </td>
                                            <td className="px-6 py-5 text-[13px] uppercase tracking-tight group-hover:text-[#224292] transition-colors">{item.title}</td>
                                            <td className="px-6 py-5 text-xs font-bold text-slate-500 uppercase tracking-widest">{item.duration}</td>
                                            <td className="px-6 py-5 text-right pr-8">
                                                <span className="text-[14px] font-black text-[#0f172a] tracking-tight group-hover:text-[#ffc107] transition-colors">₹ {item.amount || item.fund}</span>
                                            </td>
                                        </tr>
                                    ))}
                                    {mhrdPrograms.length > 0 && (
                                        <tr className="bg-slate-50/80">
                                            <td colSpan="3" className="px-6 py-5 text-right text-xs font-black text-[#0f172a] uppercase tracking-[2px]">Total Grant Received</td>
                                            <td className="px-6 py-5 text-right pr-8 text-base font-black text-[#ffc107] tracking-tighter">₹ {getMhrdSummary()}</td>
                                        </tr>
                                    )}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </section>

                {/* CSIR / Sponsored Projects */}
                <section className="mb-20">
                    <div className="flex items-center gap-4 mb-8">
                        <div className="w-12 h-12 bg-white rounded-2xl shadow-sm border border-slate-100 flex items-center justify-center text-[#ffc107]">
                            <Handshake size={24} />
                        </div>
                        <h2 className="text-2xl font-bold text-[#0f172a] uppercase tracking-tight">CSIR & Institutional Projects</h2>
                    </div>

                    <div className="bg-white rounded-[2rem] shadow-2xl shadow-blue-900/5 border border-slate-200/60 overflow-hidden">
                        <div className="overflow-x-auto">
                            <table className="w-full border-collapse text-left">
                                <thead>
                                    <tr className="text-white italic">
                                        <th className="bg-[#0f172a] px-6 py-5 text-[10px] font-black uppercase tracking-[2px] w-16 border-r border-white/5">S.No</th>
                                        <th className="bg-[#0f172a] px-6 py-5 text-[10px] font-black uppercase tracking-[2px] border-r border-white/5">Project Details & Faculty</th>
                                        <th className="bg-[#0f172a] px-6 py-5 text-center text-[10px] font-black uppercase tracking-[2px] border-r border-white/5">Timeline / Year</th>
                                        <th className="bg-[#0f172a] px-6 py-5 text-right text-[10px] font-black text-[#ffc107] uppercase tracking-[2px] pr-8">Sanctioned Amount</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-slate-100">
                                    {sponsoredProjects.length > 0 ? sponsoredProjects.map((item, idx) => (
                                        <tr key={item.id} className="hover:bg-[#fafcff] transition-all group">
                                            <td className="px-6 py-5 align-top pt-6 border-r border-slate-50">
                                                <div className="w-10 h-10 bg-[#224292]/5 rounded-xl flex items-center justify-center text-[#224292] font-black text-xs group-hover:bg-[#ffc107] group-hover:text-[#224292] transition-all duration-300 shadow-inner">
                                                    {idx + 1 < 10 ? `0${idx + 1}` : idx + 1}
                                                </div>
                                            </td>
                                            <td className="px-6 py-5 max-w-sm">
                                                <p className="text-[13px] font-black text-[#224292] uppercase leading-tight mb-2 italic group-hover:text-[#ffc107] transition-colors">"{item.title}"</p>
                                                <div className="flex flex-col gap-1">
                                                    <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">{item.agency}</p>
                                                    {item.faculty && (
                                                        <p className="text-[10px] font-bold text-[#ffc107] italic bg-[#ffc107]/5 px-2 py-0.5 rounded w-fit">PI: {item.faculty}</p>
                                                    )}
                                                </div>
                                            </td>
                                            <td className="px-6 py-5 text-center border-x border-slate-50">
                                                <div className="flex flex-col items-center gap-1">
                                                    <span className="inline-flex items-center px-3 py-1 bg-[#0f172a] text-[#ffc107] text-[9px] font-black uppercase rounded-full border border-black/10 italic">
                                                        {item.year || item.period}
                                                    </span>
                                                    {item.date && (
                                                        <span className="text-[8px] font-bold text-slate-300 uppercase tracking-widest mt-1">{item.date}</span>
                                                    )}
                                                </div>
                                            </td>
                                            <td className="px-6 py-5 text-right pr-8">
                                                <span className="text-[14px] font-black text-[#0f172a] tracking-tight group-hover:text-[#ffc107] transition-colors">₹ {item.amount || item.fund}</span>
                                            </td>
                                        </tr>
                                    )) : (
                                        <tr>
                                            <td colSpan="4" className="px-6 py-10 text-center text-slate-400 font-bold uppercase text-xs tracking-widest italic">No Sponsored Projects Indexed for {formatDeptName(deptName)}</td>
                                        </tr>
                                    )}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </section>

                {/* consultancy projects */}
                <section className="mb-20">
                    <div className="flex items-center gap-4 mb-8">
                        <div className="w-12 h-12 bg-white rounded-2xl shadow-sm border border-slate-100 flex items-center justify-center text-[#ffc107]">
                            <Briefcase size={24} />
                        </div>
                        <h2 className="text-2xl font-bold text-[#0f172a] uppercase tracking-tight">Industrial Consultancy Work</h2>
                    </div>

                    <div className="bg-white rounded-[2rem] shadow-2xl shadow-blue-900/5 border border-slate-200/60 overflow-hidden">
                        <div className="overflow-x-auto">
                            <table className="w-full border-collapse">
                                <thead>
                                    <tr className="text-white">
                                        <th className="bg-[#0f172a] px-6 py-5 text-left text-[10px] font-black uppercase tracking-[2px] w-16 border-r border-white/5">S.No.</th>
                                        <th className="bg-[#0f172a] px-6 py-5 text-left text-[10px] font-black uppercase tracking-[2px] border-r border-white/5">Project & Client</th>
                                        <th className="bg-[#0f172a] px-6 py-5 text-left text-[10px] font-black tracking-[2px] border-r border-white/5">Faculty in Charge</th>
                                        <th className="bg-[#0f172a] px-6 py-5 text-right text-[10px] font-black text-[#ffc107] uppercase tracking-[2px] pr-8">Consultancy Fee</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-slate-100">
                                    {consultancyWork.length > 0 ? consultancyWork.map((item, idx) => (
                                        <tr key={item.id} className="hover:bg-[#fafcff] transition-all group">
                                            <td className="px-6 py-5 border-r border-slate-50">
                                                <div className="w-10 h-10 bg-[#224292]/5 rounded-xl flex items-center justify-center text-[#224292] font-black text-xs group-hover:bg-[#ffc107] group-hover:text-[#224292] transition-all duration-300 shadow-inner">
                                                    {idx + 1 < 10 ? `0${idx + 1}` : idx + 1}
                                                </div>
                                            </td>
                                            <td className="px-6 py-5">
                                                <div className="text-[13px] font-bold text-[#0f172a] uppercase leading-tight mb-1 group-hover:text-[#224292] transition-colors italic">"{item.title}"</div>
                                                <div className="text-[10px] font-bold text-[#64779F] uppercase tracking-widest line-clamp-1">{item.client}</div>
                                            </td>
                                            <td className="px-6 py-5 text-[11px] font-black text-[#1e293b] italic border-x border-slate-50">{item.faculty}</td>
                                            <td className="px-6 py-5 text-right pr-8">
                                                <div className="text-[14px] font-black text-[#0f172a] group-hover:text-[#ffc107] transition-colors">₹ {item.amount}</div>
                                                <div className="text-[9px] font-bold text-slate-400 uppercase tracking-widest mt-0.5">{item.period}</div>
                                            </td>
                                        </tr>
                                    )) : (
                                        <tr>
                                            <td colSpan="4" className="px-6 py-10 text-center text-slate-400 font-bold uppercase text-xs tracking-widest italic">No Active Consultancy work recorded for {formatDeptName(deptName)}</td>
                                        </tr>
                                    )}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </section>

                {/* TNSCST Projects */}
                <section>
                    <div className="flex items-center gap-4 mb-8">
                        <div className="w-12 h-12 bg-white rounded-2xl shadow-sm border border-slate-100 flex items-center justify-center text-[#ffc107]">
                            <Award size={24} />
                        </div>
                        <h2 className="text-2xl font-bold text-[#0f172a] uppercase tracking-tight">TNSCST Funded Student Projects</h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {tnscstProjects.map((item) => (
                            <motion.div 
                                whileHover={{ y: -5 }}
                                key={item.id}
                                className="bg-white p-6 rounded-[2rem] border border-slate-200 shadow-xl shadow-blue-900/5 hover:border-[#ffc107] transition-all"
                            >
                                <div className="flex justify-between items-start mb-4">
                                    <span className="px-3 py-1 bg-blue-50 text-[#224292] text-[9px] font-bold uppercase tracking-widest rounded-full">{item.year}</span>
                                    <span className="text-[14px] font-bold text-[#ffc107]">₹ {item.grant}</span>
                                </div>
                                <h3 className="text-sm font-bold text-[#224292] uppercase leading-tight mb-4 italic line-clamp-3">"{item.title}"</h3>
                                <div className="pt-4 border-t border-slate-50 flex items-center gap-3">
                                    <div className="w-8 h-8 rounded-full bg-slate-50 flex items-center justify-center text-[#224292] font-bold text-[10px]">M</div>
                                    <div>
                                        <p className="text-[10px] font-bold text-slate-400 tracking-widest">Mentor</p>
                                        <p className="text-[11px] font-bold text-black leading-none">{item.mentor}</p>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </section>

            </div>
        </div>
    )
}

export default SponsoredProjectsPage
