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

    const mhrdPrograms = [
        { id: 1, title: "Research Methodologies", dept: "Mech", agency: "MHRD", duration: "25.06.2012 to 04.07.2012", fund: "1,42,719" },
        { id: 2, title: "Engineering Thermodynamics", dept: "Mech", agency: "MHRD", duration: "11.12.2012 to 21.12.2012", fund: "2,44,685" },
        { id: 3, title: "Research Methods in Education Technology", dept: "Mech", agency: "MHRD", duration: "02.02.2013 & 09.02.2013", fund: "7,000" },
        { id: 4, title: "Database Management Systems", dept: "CSE", agency: "MHRD", duration: "21.05.2013 to 31.05.2013", fund: "1,31,616" },
        { id: 5, title: "Analog Electronics", dept: "ECE", agency: "MHRD", duration: "04.06.2013 to 14.06.2013", fund: "1,61,578" },
        { id: 6, title: "Green Building Awareness", dept: "Civil", agency: "MHRD", duration: "24.08.2013", fund: "3,000" },
        { id: 7, title: "Engineering Mechanics", dept: "Mech", agency: "MHRD", duration: "26.11.2013 to 06.11.2013", fund: "1,95,706" },
        { id: 8, title: "Signals & Systems", dept: "ECE", agency: "MHRD", duration: "02.01.2014 to 12.01.2014", fund: "1,55,073" },
        { id: 9, title: "Fluid Mechanics", dept: "Mech", agency: "MHRD", duration: "20.05.2014 to 30.05.2014", fund: "2,07,001" },
        { id: 10, title: "Computer Programming", dept: "CSE", agency: "MHRD", duration: "16.06.2014 to 21.06.2014", fund: "81,422" },
        { id: 11, title: "Computer Networking", dept: "CSE", agency: "MHRD", duration: "30.06.2014 to 05.07.2014", fund: "96,886" },
        { id: 12, title: "Cyber Security", dept: "CSE", agency: "MHRD", duration: "10.07.2014 to 20.07.2014", fund: "1,64,626" },
        { id: 13, title: "Control Systems", dept: "EEE", agency: "MHRD", duration: "02.12.2014 to 12.12.2014", fund: "1,76,970" },
        { id: 14, title: "Pedagogy for Effective use of ICT in Engineering Education", dept: "Mech", agency: "MHRD", duration: "05.01.2015 to 07.01.2015 & 19.01.2015 to 21.01.2015", fund: "71,330" },
        { id: 15, title: "Introduction to Design of Algorithms", dept: "CSE", agency: "MHRD", duration: "25.05.2015 to 30.05.2015", fund: "88,600" },
        { id: 16, title: "Environmental Studies", dept: "CIVIL", agency: "MHRD", duration: "02.06.2015 to 12.06.2015", fund: "2,02,000" },
        { id: 17, title: "Technical Communication", dept: "Mech", agency: "MHRD", duration: "30.11.2015 to 05.12.2015", fund: "-" },
        { id: 18, title: "Engineering Physics", dept: "Mech", agency: "MHRD", duration: "08.12.2015 to 18.12.2015", fund: "1,41,099" },
        { id: 19, title: "Introduction to Structural Engineering", dept: "Civil", agency: "MHRD", duration: "04.01.2016 to 09.01.2016", fund: "91,000" },
        { id: 20, title: "Usage of ICT in Education for Online and Blended Learning", dept: "Mech", agency: "MHRD", duration: "02.05.2016 to 10.07.2016", fund: "-" },
        { id: 21, title: "College to Corporate", dept: "Mech", agency: "MHRD", duration: "26.11.2016", fund: "-" },
        { id: 22, title: "CMOS, Mixed Signal RF, VLSI Design", dept: "ECE", agency: "MHRD", duration: "30.01.2017 To 04.02.2017", fund: "87,680" },
        { id: 23, title: "AICTE-ISTE Online Teaching and Learning Pedagogy - Phase I", dept: "Mech", agency: "AICTE-ISTE", duration: "01.03.2021 to 06.03.2021", fund: "93,000" },
        { id: 24, title: "AICTE-ISTE Online Teaching and Learning Pedagogy - Phase II", dept: "Mech", agency: "AICTE-ISTE", duration: "05.04.2021 to 12.04.2021", fund: "93,000" },
        { id: 25, title: "AICTE-ISTE Online Teaching and Learning Pedagogy - Phase III", dept: "Mech", agency: "AICTE-ISTE", duration: "03.05.2021 to 08.05.2021", fund: "93,000" },
        { id: 26, title: "FDTP on ME8391- Engineering Thermodynamics", dept: "Mech", agency: "Anna University", duration: "12.07.2021-17.07.2021", fund: "30,000" }
    ]

    const mhrdSummary = "27,58,991"

    const sponsoredProjects = [
        { id: 1, faculty: "Mr.K.Mugundhan", title: "Commercialicing Sustainable Bio-Energy Technologies", agency: "CSIR", amount: "30,000", period: "08.03.2013 to 09.03.2013" },
        { id: 2, faculty: "Mr.T.Dheenathayalan", title: "Environmental Health and safety in Organisation", agency: "CSIR", amount: "30,000", period: "14.03.2013 to 15.03.2013" },
        { id: 3, faculty: "Mr.M.Sathyanathan & Mr.N.Kamalakkannan", title: "Seminar on Sustainable Composites", agency: "IET", amount: "6,000", period: "20.01.2018" },
        { id: 4, faculty: "Dr.K.Visagavel & Mr.N.Kamalakkannan", title: "Seminar on Industrial Internet of Things in manufacturing", agency: "IET", amount: "10,000", period: "19.07.2018" },
        { id: 5, faculty: "Dr.M. Ilangkumaran, Dr. V. Sivakumar, Dr.N.Panneerselvam", title: "Current Trends in Recycling of Textile / Apparel Waste in Eco - Sustainable Aspects", agency: "CSIR", amount: "20,000", period: "05.08.2022 to 06.08.2022" }
    ]

    const tnscstProjects = [
        { id: 1, year: "2019-2020", title: "Quad – copter UAV assisted fertilizer and pesticide spraying system", mentor: "Mr.D.Manikandan", agency: "TNSCST", grant: "7,500", duration: "12 Months" },
        { id: 2, year: "2019-2020", title: "Smart helmet – an accident preventer", mentor: "Mr.M.A.Rajeshkumar", agency: "TNSCST", grant: "7,500", duration: "12 Months" },
        { id: 3, year: "2017-2018", title: "Portable crop cutting machine", mentor: "Mr.P.Kalaiselvan", agency: "TNSCST", grant: "8,400", duration: "12 Months" },
        { id: 4, year: "2017-2018", title: "Design and fabrication of mobile bucket milking machine with aid of solar system", mentor: "Mr.M.Loganathan", agency: "TNSCST", grant: "4,900", duration: "12 Months" },
        { id: 5, year: "2017-2018", title: "Tonic gas defender in automobile", mentor: "Mr.M.A.Rajesh Kumar", agency: "TNSCST", grant: "8,300", duration: "12 Months" },
        { id: 6, year: "2017-2018", title: "Design and Implementation of low cost intelligent wheelchair", mentor: "Mr.N.Kamalakannan", agency: "TNSCST", grant: "9,100", duration: "12 Months" },
        { id: 7, year: "2016-2017", title: "Fabrication and performance measurement of manually powered fodder cutter", mentor: "Mr.P.Kalaiselvan", agency: "TNSCST", grant: "10,000", duration: "12 Months" },
        { id: 8, year: "2016-2017", title: "Fabrication of semi-automated multipurpose wheel hoe with aid of Solar system for agriculture", mentor: "Mr.M.Loganathan", agency: "TNSCST", grant: "10,000", duration: "12 Months" },
        { id: 9, year: "2016-2017", title: "Smart Helmet with Alcohol detection", mentor: "Mr.C.Eswaramoorthy", agency: "TNSCST", grant: "10,000", duration: "12 Months" }
    ]

    const consultancyWork = [
        { id: 1, faculty: "Dr.V.Sivakumar, Mr.A.Selvakumar", title: "Implementation of Total Quality Management", period: "10.11.2021 to 12.11.2021", client: "Spintec Enterprises Private Limited, Coimbatore", amount: "25,000" },
        { id: 2, faculty: "Dr.M.Ilangkumaran, Mr.S.Nandha Kumar", title: "Implementation of Total Quality Management", period: "20.01.2022 to 22.01.2022", client: "Fluid Engineering Works, Coimbatore, Tamil Nadu", amount: "25,000" },
        { id: 3, faculty: "Mr.A.Selvakumar, Mr.J.Prakash", title: "Training on Total Quality Management and 5S System", period: "12.04.2022 to 14.04.2022", client: "Sri Pone Arasalamman Battery Works, Dharmapuri", amount: "25,000" },
        { id: 4, faculty: "Mr.A.Selvakumar, Mr.J.Prakash", title: "Training on Total Quality Management and 5S System", period: "21.04.2022 to 23.04.2022", client: "RnGn Batteries Private Limited, Dharmapuri", amount: "25,000" },
        { id: 5, faculty: "Dr.K.S.Prabhakaran, Mr.G.Thangaraj", title: "Safety Audit", period: "04.10.2022 to 06.10.2022", client: "Vijay Blue Metal, Salem, Tamil Nadu", amount: "25,000" },
        { id: 6, faculty: "Dr.N.Panneerselvam, Mr.G.Thangaraj", title: "Safety Audit", period: "17.11.2022 to 19.11.2022", client: "Senthil Blue Metals, Salem, Tamil Nadu", amount: "25,000" },
        { id: 7, faculty: "Mr.A.Selvakumar, Mr.J.Prakash", title: "Design and Fabrication of Pick and Place Robot Arm", period: "On going", client: "Kaapi Stop, Salem, Tamil Nadu", amount: "1,47,950" }
    ]

    const isMechanical = deptName?.toLowerCase() === 'mechanical-engineering'

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
                        {deptName?.toUpperCase()}
                    </Link>
                    <ChevronRight size={14} className="text-slate-300" />
                    <span className="text-[#0f172a] text-xs font-bold uppercase tracking-wider pt-0.5">
                        Sponsored Projects
                    </span>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-6 py-12 lg:py-16">
                
                {/* Header Section */}
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mb-16"
                >
                    <Link 
                        to={`/research/${deptName}`}
                        className="inline-flex items-center gap-2 text-[#0f172a] font-bold text-[10px] uppercase tracking-wider mb-6 hover:translate-x-[-4px] transition-transform"
                    >
                        <ArrowLeft size={14} /> Back to Repository
                    </Link>

                    <h1 className="text-3xl lg:text-5xl font-bold text-[#18357a] uppercase leading-tight mb-6">
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
                            <p className="text-[10px] font-bold text-[#64779F] uppercase tracking-widest leading-none mt-1">Remote Centre Coordination: Dr. K. Visagavel</p>
                        </div>
                    </div>

                    <div className="bg-white rounded-[2rem] shadow-2xl shadow-blue-900/5 border border-slate-200/60 overflow-hidden">
                        <div className="overflow-x-auto">
                            <table className="w-full border-collapse">
                                <thead>
                                    <tr className="text-white">
                                        <th className="bg-black px-6 py-5 text-left text-[11px] font-bold uppercase tracking-[2px] w-16">S.No.</th>
                                        <th className="bg-black px-6 py-5 text-left text-[11px] font-bold uppercase tracking-[2px]">Workshop / Program Title</th>
                                        <th className="bg-black px-6 py-5 text-left text-[11px] font-bold uppercase tracking-[2px]">Duration</th>
                                        <th className="bg-black px-6 py-5 text-right text-[11px] font-bold text-[#ffc107] uppercase tracking-[2px] pr-8">Grant (Rs)</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-slate-100 italic font-semibold text-[#1e293b]">
                                    {isMechanical && mhrdPrograms.map((item, idx) => (
                                        <tr key={item.id} className="hover:bg-[#fafcff] transition-all duration-300">
                                            <td className="px-6 py-4">
                                                <div className="w-8 h-8 bg-blue-50/50 rounded flex items-center justify-center text-black font-black text-xs group-hover:bg-black group-hover:text-white transition-all duration-300">
                                                    {idx + 1 < 10 ? `0${idx + 1}` : idx + 1}
                                                </div>
                                            </td>
                                            <td className="px-6 py-4 text-[13px] uppercase tracking-tight">{item.title}</td>
                                            <td className="px-6 py-4 text-xs">{item.duration}</td>
                                            <td className="px-6 py-4 text-right pr-8 text-xs font-bold text-[#0f172a]">{item.fund}</td>
                                        </tr>
                                    ))}
                                    <tr className="bg-slate-50">
                                        <td colSpan="3" className="px-6 py-5 text-right text-xs font-bold text-[#0f172a] uppercase tracking-[2px]">Total Grant Received</td>
                                        <td className="px-6 py-5 text-right pr-8 text-base font-bold text-[#ffc107] tracking-tight">₹ {mhrdSummary}</td>
                                    </tr>
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
                            <table className="w-full border-collapse">
                                <thead>
                                    <tr className="text-white">
                                        <th className="bg-black px-6 py-5 text-left text-[11px] font-bold uppercase tracking-[2px] w-16">S.No.</th>
                                        <th className="bg-black px-6 py-5 text-left text-[11px] font-bold uppercase tracking-[2px]">Project Detail</th>
                                        <th className="bg-black px-6 py-5 text-left text-[11px] font-bold uppercase tracking-[2px]">Agency</th>
                                        <th className="bg-black px-6 py-5 text-right text-[11px] font-bold text-[#ffc107] uppercase tracking-[2px] pr-8">Funding</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-slate-100">
                                    {isMechanical && sponsoredProjects.map((item, idx) => (
                                        <tr key={item.id} className="hover:bg-[#fafcff] transition-all">
                                            <td className="px-6 py-5 align-top pt-8"><span className="text-xs font-bold text-[#0f172a]">0{idx + 1}</span></td>
                                            <td className="px-6 py-5 max-w-sm">
                                                <div className="text-[14px] font-bold text-[#0f172a] uppercase leading-tight mb-2 italic">"{item.title}"</div>
                                                <div className="text-[10px] font-bold text-[#64779F] uppercase tracking-widest">{item.faculty}</div>
                                            </td>
                                            <td className="px-6 py-5 align-top pt-8 italic font-semibold text-[#1e293b] text-xs">{item.agency}</td>
                                            <td className="px-6 py-5 text-right pr-8 align-top pt-7">
                                                <div className="text-[13px] font-bold text-[#0f172a]">₹ {item.amount}</div>
                                                <div className="text-[10px] font-semibold text-slate-400">{item.period}</div>
                                            </td>
                                        </tr>
                                    ))}
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
                                        <th className="bg-black px-6 py-5 text-left text-[11px] font-bold uppercase tracking-[2px] w-16">S.No.</th>
                                        <th className="bg-black px-6 py-5 text-left text-[11px] font-bold uppercase tracking-[2px]">Project & Client</th>
                                        <th className="bg-black px-6 py-5 text-left text-[11px] font-bold uppercase tracking-[2px]">Faculty in Charge</th>
                                        <th className="bg-black px-6 py-5 text-right text-[11px] font-bold text-[#ffc107] uppercase tracking-[2px] pr-8">Consultancy Fee</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-slate-100">
                                    {isMechanical && consultancyWork.map((item, idx) => (
                                        <tr key={item.id} className="hover:bg-[#fafcff] transition-all group">
                                            <td className="px-6 py-5">
                                                <div className="w-8 h-8 bg-blue-50/50 rounded flex items-center justify-center text-[#18357a] font-black text-xs group-hover:bg-black group-hover:text-white transition-all duration-300">
                                                    {idx + 1 < 10 ? `0${idx + 1}` : idx + 1}
                                                </div>
                                            </td>
                                            <td className="px-6 py-5">
                                                <div className="text-[13px] font-bold text-[#0f172a] uppercase leading-tight mb-1">{item.title}</div>
                                                <div className="text-[10px] font-semibold text-[#64779F] italic line-clamp-1">{item.client}</div>
                                            </td>
                                            <td className="px-6 py-5 text-[11px] font-bold text-[#1e293b] uppercase italic">{item.faculty}</td>
                                            <td className="px-6 py-5 text-right pr-8">
                                                <div className="text-[13px] font-bold text-[#0f172a]">₹ {item.amount}</div>
                                                <div className="text-[10px] font-semibold text-slate-400">{item.period}</div>
                                            </td>
                                        </tr>
                                    ))}
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
                        {isMechanical && tnscstProjects.map((item) => (
                            <motion.div 
                                whileHover={{ y: -5 }}
                                key={item.id}
                                className="bg-white p-6 rounded-[1.5rem] border border-slate-200 shadow-xl shadow-blue-900/5"
                            >
                                <div className="flex justify-between items-start mb-4">
                                    <span className="px-3 py-1 bg-blue-50 text-[#0f172a] text-[9px] font-bold uppercase tracking-widest rounded-full">{item.year}</span>
                                    <span className="text-[14px] font-bold text-[#ffc107]">₹ {item.grant}</span>
                                </div>
                                <h3 className="text-sm font-bold text-[#0f172a] uppercase leading-tight mb-4 italic line-clamp-3">"{item.title}"</h3>
                                <div className="pt-4 border-t border-slate-50 flex items-center gap-3">
                                    <div className="w-8 h-8 rounded-full bg-slate-50 flex items-center justify-center text-[#0f172a] font-bold text-[10px]">M</div>
                                    <div>
                                        <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Mentor</p>
                                        <p className="text-[11px] font-bold text-[#1e293b] uppercase leading-none">{item.mentor}</p>
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
