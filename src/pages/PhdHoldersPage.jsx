import React from 'react'
import { motion } from 'framer-motion'
import { useParams, Link } from 'react-router-dom'
import { 
    ChevronRight, 
    Home as HomeIcon,
    Award,
    BookOpen,
    GraduationCap,
    ArrowLeft,
    BarChart,
    Search
} from 'lucide-react'

const PhdHoldersPage = () => {
    const { deptName } = useParams()

    const formatDeptName = (name) => {
        if (!name) return "Departmentwise"
        return name.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')
    }

    const allPhdHolders = {
        'mechanical-engineering': [
            {
                id: 1,
                name: "Dr.PSS.Srinivasan",
                topic: "Thermal Engineering, Heattransfer & CFD",
                year: "2002",
                university: "Bharathiyar University",
                publications: { ij: 60, ic: 65, nj: 52, nc: 134 },
                guided: 16,
                beingGuided: 1
            },
            {
                id: 2,
                name: "Dr.K.Visagavel",
                topic: "Thermal Engineering, Heat Transfer, CFD and Solar Energy",
                year: "2010",
                university: "Anna University, Chennai",
                publications: { ij: 47, ic: 2, nj: 11, nc: 80 },
                guided: 5,
                beingGuided: 7
            },
            {
                id: 3,
                name: "Dr.P.Navaneethakrishnan",
                topic: "Design, CAD/CAM, Finite Element Analysis, Computational Fluid Dynamics",
                year: "2009",
                university: "Bharathiyar University",
                publications: { ij: 41, ic: 10, nj: 15, nc: 50 },
                guided: 9,
                beingGuided: 5
            },
            {
                id: 4,
                name: "Dr.M.Ilangkumaran",
                topic: "Maintenance Engineering, Multi Criteria Decision Making Application",
                year: "2010",
                university: "Anna University, Chennai",
                publications: { ij: 55, ic: 15, nj: 5, nc: 3 },
                guided: 6,
                beingGuided: 5
            },
            {
                id: 5,
                name: "Dr.N.Panneerselvam",
                topic: "IC Engine, Composite Materials",
                year: "2018",
                university: "Anna University, Chennai",
                publications: { ij: 7, ic: "-", nj: "-", nc: 5 },
                guided: "-",
                beingGuided: "-"
            },
            {
                id: 6,
                name: "Dr. K.S.Prabhakaran",
                topic: "Evaporative cooling ; Ergonomics",
                year: "2021",
                university: "Anna University, Chennai",
                publications: { ij: 2, ic: 1, nj: 3, nc: 6 },
                guided: "-",
                beingGuided: "-"
            },
            {
                id: 7,
                name: "Dr.V. Sivakumar",
                topic: "Energy & CFD",
                year: "2020",
                university: "Anna University, Chennai",
                publications: { ij: 5, ic: 4, nj: 2, nc: 20 },
                guided: "-",
                beingGuided: "-"
            },
            {
                id: 8,
                name: "Dr.S.Sureshbalaji",
                topic: "Design, Optimization Techniques",
                year: "2023",
                university: "Anna University, Chennai",
                publications: { ij: 19, ic: 1, nj: "-", nc: 5 },
                guided: "-",
                beingGuided: "-"
            },
            {
                id: 9,
                name: "Dr. M.Sathyanathan",
                topic: "Composite Materials",
                year: "2025",
                university: "Anna University, Chennai",
                publications: { ij: 10, ic: 3, nj: "-", nc: 4 },
                guided: "-",
                beingGuided: "-"
            }
        ],
        'electronics-&-communication-engineering': [
            {
                id: 1,
                name: "Dr.N.Santhiyakumari",
                topic: "Implementation of Medical Decision Making System by classification of Ultrasound common Carotid Artery Images using Intima media thickness measurement",
                year: "2008",
                university: "Anna University, Chennai",
                publications: { ij: 48, ic: 52, nj: "-", nc: 49 },
                guided: "6",
                beingGuided: "6"
            },
            {
                id: 2,
                name: "Dr.M.Thangavel",
                topic: "Investigation on Carotid Wall Motion and Texture Classification of Plaques Using Multi-resolution Features",
                year: "2016",
                university: "Anna University, Chennai",
                publications: { ij: 8, ic: 3, nj: "-", nc: 15 },
                guided: "-",
                beingGuided: "-"
            },
            {
                id: 3,
                name: "Dr. R. Vijayaraghavan",
                topic: "Temporal Analysis of Remote Sensing Data for Identification of Some Tree and Shrub Species in Semiarid Region",
                year: "2008",
                university: "Jai Narain Vyas University Jodhpur",
                publications: { ij: 1, ic: "-", nj: "-", nc: 6 },
                guided: "-",
                beingGuided: "-"
            },
            {
                id: 4,
                name: "Dr. S. Kumarganesh",
                topic: "Certain Investigations on Segmentation and Compression of Brain Tumor Image",
                year: "2018",
                university: "Anna University, Chennai",
                publications: { ij: 41, ic: 19, nj: "-", nc: 5 },
                guided: "-",
                beingGuided: "6"
            },
            {
                id: 5,
                name: "Dr.P. Shanmugasundaram",
                topic: "Certain Investigations on Computer Aided Colon Cancer Detection in Wireless Capsule Endoscopy Images",
                year: "2021",
                university: "Anna University, Chennai",
                publications: { ij: 9, ic: 8, nj: 1, nc: 19 },
                guided: "-",
                beingGuided: "-"
            },
            {
                id: 6,
                name: "Dr.V.Saravanan",
                topic: "Certain investigations on active noise control systems for domestic applications by developing the step size of the FxLMS algorithm",
                year: "2022",
                university: "Anna University, Chennai",
                publications: { ij: 8, ic: 6, nj: "-", nc: 11 },
                guided: "-",
                beingGuided: "-"
            },
            {
                id: 7,
                name: "Dr.G.Rajamanickam",
                topic: "Wireless Communication",
                year: "2024",
                university: "Anna University, Chennai",
                publications: { ij: 4, ic: 2, nj: 1, nc: 2 },
                guided: "-",
                beingGuided: "-"
            },
            {
                id: 8,
                name: "Dr.S.Maragatharaj",
                topic: "Low Power VLSI",
                year: "2024",
                university: "Anna University, Chennai",
                publications: { ij: 11, ic: "-", nj: "-", nc: 9 },
                guided: "-",
                beingGuided: "-"
            },
            {
                id: 9,
                name: "Dr. T. K. Santhi",
                topic: "Womanism in the Select Works of Alice Walker",
                year: "2014",
                university: "Mother Teresa Women's University, Kodaikanal",
                publications: { ij: 2, ic: 4, nj: "-", nc: 6 },
                guided: "-",
                beingGuided: "-"
            },
            {
                id: 10,
                name: "Dr. K. Priya Mol",
                topic: "The Brutality of Civilization and the Struggle for Survival: A Study of Jack London’s Select Novels.",
                year: "2022",
                university: "Manonmaniam Sundaranar University",
                publications: { ij: 2, ic: 3, nj: 1, nc: 2 },
                guided: "-",
                beingGuided: "-"
            }
        ],
        'electrical-&-electronics-engineering': [
            { id: 1, name: "Dr.C.Muniraj", topic: "AC Drives and High Voltage Engineering", year: "2012", university: "Anna University", publications: { ij: 28, ic: 30, nj: 0, nc: 11 } },
            { id: 2, name: "Dr.V.Kamatchi Kannan", topic: "Power Quality Improvement using DSTATCOM", year: "2013", university: "Anna University", publications: { ij: 50, ic: 24, nj: 1, nc: 8 } },
            { id: 3, name: "Dr.P.A.Gowri Sankar", topic: "Control and Instrumentation, Nano Materials and Sensors", year: "2015", university: "Anna University", publications: { ij: 15, ic: 5, nj: 1, nc: 2 } },
            { id: 4, name: "Dr.S.Kalpana Devi", topic: "Renewable Energy Sources and Converter", year: "2024", university: "Anna University", publications: { ij: 4, ic: 4, nj: 35, nc: 5 } }
        ],
        'computer-science-&-engineering': [
            { id: 1, name: "Dr.V.Kumar", topic: "Design Of An Efficient MAC Protocol For Wireless Networks", year: "2011", university: "Anna University, Coimbatore", publications: { ij: 0, ic: 0, nj: 0, nc: 0 } },
            { id: 2, name: "Dr.P.Rajendran", topic: "Decision Support System For Brain Tumor using Image Mining", year: "2011", university: "Anna University, Coimbatore", publications: { ij: 48, ic: 52, nj: 0, nc: 49 }, guided: 8, beingGuided: 8 },
            { id: 3, name: "Dr.R.Kumar", topic: "Concept Map Based Formative Knowledge Assessment", year: "2014", university: "Anna University, Chennai", publications: { ij: 4, ic: 4, nj: 0, nc: 0 }, guided: 0, beingGuided: 3 },
            { id: 4, name: "Dr.M.Sakthivel", topic: "Agile Principles for Risk Reduction in Software Development", year: "2018", university: "Anna University, Chennai", publications: { ij: 5, ic: 5, nj: 0, nc: 0 } },
            { id: 5, name: "Dr.P.Vijayalakshmi", topic: "Topologically Adaptive Authorized Routing in WSN", year: "2018", university: "Anna University, Chennai", publications: { ij: 34, ic: 28, nj: 8, nc: 18 }, guided: 0, beingGuided: 4 },
            { id: 6, name: "Dr.S.Sakthivel", topic: "Diagnosis of Adenomyosis using Automated MRI Diagnosis Model", year: "2020", university: "Anna University, Chennai", publications: { ij: 0, ic: 0, nj: 0, nc: 0 } },
            { id: 7, name: "Dr.I.Rajesh", topic: "Poultry Meat Quality Assessment using Image Mining", year: "2025", university: "Anna University", publications: { ij: 0, ic: 0, nj: 0, nc: 0 } },
            { id: 8, name: "Dr.P.Malarvizhi", topic: "Energy Efficient Routing for Lifetime Maximization in WSN", year: "2025", university: "Anna University", publications: { ij: 0, ic: 0, nj: 0, nc: 0 } },
            { id: 9, name: "Dr.M.Lakshaga jyothi", topic: "Performance Evaluation on Enabling Intelligence using Deep Learning in IoT", year: "2025", university: "Vinayaka Mission's Research Foundation", publications: { ij: 0, ic: 0, nj: 0, nc: 0 } }
        ],
        'civil-engineering': [
            { id: 1, name: "Dr.P.Prasath", topic: "Fibre Reinforced Concrete.", year: "2020", university: "Anna University", publications: { ij: 10, ic: 0, nj: 0, nc: 0 }, guided: "-", beingGuided: "-" }
        ]
    }

    const displayHolders = allPhdHolders[deptName?.toLowerCase()] || []

    return (
        <div className="min-h-screen bg-[#f6f9fc] font-sans pb-20">
            {/* Breadcrumbs */}
            <div className="bg-white border-b border-slate-200 py-4">
                <div className="max-w-6xl mx-auto px-6 flex items-center gap-4">
                    <Link to="/research" className="text-slate-400 hover:text-[#18357a] text-xs font-black uppercase tracking-wider transition-colors pt-0.5">
                        Research Initiatives
                    </Link>
                    <ChevronRight size={14} className="text-slate-300" />
                    <Link to={`/research/${deptName}`} className="text-slate-400 hover:text-[#18357a] text-xs font-black uppercase tracking-wider transition-colors pt-0.5">
                        Research in {formatDeptName(deptName)}
                    </Link>
                    <ChevronRight size={14} className="text-slate-300" />
                    <span className="text-[#18357a] text-xs font-black uppercase tracking-wider pt-0.5">
                        Ph.D Holders List
                    </span>
                </div>
            </div>

            <div className="max-w-[95rem] mx-auto px-6 py-12 lg:py-16">
                
                {/* Header Section */}
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mb-12"
                >
                    <Link 
                        to={`/research/${deptName}`}
                        className="inline-flex items-center gap-2 text-[#18357a] font-black text-[10px] uppercase tracking-wider mb-6 hover:translate-x-[-4px] transition-transform"
                    >
                        <ArrowLeft size={14} /> Back to Repository
                    </Link>

                    <h1 className="text-3xl lg:text-5xl font-bold text-[#18357a] leading-tight mb-6">
                        List of <span className="text-[#ffc107]">Doctorate Holders</span>
                    </h1>

                    <div className="max-w-3xl border-l-4 border-[#ffc107] pl-8 py-1">
                        <p className="text-[#1e293b] text-base font-semibold leading-relaxed">
                            A directory of faculty members at {formatDeptName(deptName)} who have achieved scholarly excellence through Ph.D programs. Featuring research metrics, publications, and supervision records.
                        </p>
                    </div>
                </motion.div>

                {/* Dense Data Table */}
                <motion.div 
                    initial={{ opacity: 0, scale: 0.98 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="bg-white rounded-[2rem] shadow-2xl shadow-blue-900/5 border border-slate-200/60 overflow-hidden"
                >
                    <div className="overflow-x-auto">
                        <table className="w-full border-collapse text-left">
                            <thead>
                                <tr className="text-white">
                                    <th rowSpan="2" className="bg-[#0f172a] px-6 py-5 text-[10px] font-black tracking-[2px] w-16 border-r border-white/5">S.No.</th>
                                    <th rowSpan="2" className="bg-[#0f172a] px-6 py-5 text-[10px] font-black tracking-[2px] border-r border-white/5">Faculty Details</th>
                                    <th rowSpan="2" className="bg-[#0f172a] px-6 py-5 text-[10px] font-black tracking-[2px] border-r border-white/5">Research Topic</th>
                                    <th rowSpan="2" className="bg-[#0f172a] px-6 py-5 text-[10px] font-black tracking-[2px] border-r border-white/5">Year / University</th>
                                    <th colSpan="4" className="bg-[#0f172a] px-6 py-2 text-center text-[10px] font-black text-[#ffc107] tracking-[2px] border-b border-white/5 border-r border-white/5">Scholar Publications</th>
                                    <th colSpan="2" className="bg-[#0f172a] px-6 py-2 text-center text-[10px] font-black text-[#ffc107] tracking-[2px]">Supervision</th>
                                </tr>
                                <tr>
                                    <th className="bg-[#0f172a] px-4 py-3 text-center text-[9px] font-black text-white/60 border-r border-white/5">IJ</th>
                                    <th className="bg-[#0f172a] px-4 py-3 text-center text-[9px] font-black text-white/60 border-r border-white/5">IC</th>
                                    <th className="bg-[#0f172a] px-4 py-3 text-center text-[9px] font-black text-white/60 border-r border-white/5">NJ</th>
                                    <th className="bg-[#0f172a] px-4 py-3 text-center text-[9px] font-black text-white/60 border-r border-white/5">NC</th>
                                    <th className="bg-[#0f172a] px-4 py-3 text-center text-[9px] font-black text-white/60 border-r border-white/5">Guided</th>
                                    <th className="bg-[#0f172a] px-4 py-3 text-center text-[9px] font-black text-white/60">Being Guided</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-slate-100">
                                {displayHolders.length > 0 ? (
                                    displayHolders.map((holder, idx) => (
                                        <tr 
                                            key={holder.id}
                                            className="group hover:bg-[#fafcff] transition-all duration-300"
                                        >
                                            <td className="px-6 py-5 border-r border-slate-50">
                                                <div className="w-10 h-10 bg-[#18357a]/5 rounded-xl flex items-center justify-center text-[#18357a] font-black text-xs group-hover:bg-[#ffc107] group-hover:text-[#18357a] transition-all duration-300 shadow-inner">
                                                    {idx + 1 < 10 ? `0${idx + 1}` : idx + 1}
                                                </div>
                                            </td>
                                            <td className="px-6 py-4 border-r border-slate-50">
                                                <div className="flex items-center gap-3">
                                                    <div className="w-8 h-8 rounded-lg bg-blue-50 flex items-center justify-center text-[#0f172a] group-hover:bg-[#0f172a] group-hover:text-white transition-all">
                                                        <Award size={14} />
                                                    </div>
                                                    <span className="text-[13px] font-bold text-[#0f172a] tracking-tight">{holder.name}</span>
                                                </div>
                                            </td>
                                            <td className="px-6 py-4 border-r border-slate-50">
                                                <p className="text-[12px] font-semibold text-[#1e293b] italic leading-snug max-w-[200px]">
                                                    {holder.topic}
                                                </p>
                                            </td>
                                            <td className="px-6 py-4 border-r border-slate-50">
                                                <div>
                                                    <div className="text-[11px] font-bold text-[#0f172a] leading-none mb-1">{holder.year}</div>
                                                    <div className="text-[10px] font-bold text-[#334155]">{holder.university}</div>
                                                </div>
                                            </td>
                                            <td className="px-4 py-4 text-center border-r border-slate-50 bg-[#fafcff]/50 font-bold text-[#0f172a] text-xs">{holder.publications.ij}</td>
                                            <td className="px-4 py-4 text-center border-r border-slate-50 bg-[#fafcff]/50 font-bold text-[#0f172a] text-xs">{holder.publications.ic}</td>
                                            <td className="px-4 py-4 text-center border-r border-slate-50 bg-[#fafcff]/50 font-bold text-[#0f172a] text-xs">{holder.publications.nj}</td>
                                            <td className="px-4 py-4 text-center border-r border-slate-50 bg-[#fafcff]/50 font-bold text-[#0f172a] text-xs">{holder.publications.nc}</td>
                                            <td className="px-4 py-4 text-center border-r border-slate-50 bg-[#fffbeb]/30 font-bold text-[#ffc107] text-xs leading-none">{holder.guided}</td>
                                            <td className="px-4 py-4 text-center bg-[#fffbeb]/30 font-bold text-[#ffc107] text-xs leading-none">{holder.beingGuided}</td>
                                        </tr>
                                    ))
                                ) : (
                                    <tr>
                                        <td colSpan="10" className="px-6 py-20 text-center">
                                            <div className="flex flex-col items-center gap-4">
                                                <Search size={40} className="text-[#18357a]/10" />
                                                <p className="text-[#18357a] font-black uppercase text-xs tracking-wider">No Data Available for {formatDeptName(deptName)}</p>
                                            </div>
                                        </td>
                                    </tr>
                                )}
                            </tbody>
                        </table>
                    </div>
                </motion.div>

                {/* Faculty Metrics Summary */}
                <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-6">
                    <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm flex items-center gap-4">
                        <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center text-[#18357a]">
                            <BookOpen size={24} />
                        </div>
                        <div>
                            <span className="text-[9px] font-black text-[#64779F] uppercase tracking-wider block">Total Directory</span>
                            <span className="text-sm font-black text-[#18357a] uppercase">{displayHolders.length} Ph.D Holders</span>
                        </div>
                    </div>
                    <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm flex items-center gap-4">
                        <div className="w-12 h-12 bg-amber-50 rounded-xl flex items-center justify-center text-[#ffc107]">
                            <BarChart size={24} />
                        </div>
                        <div>
                            <span className="text-[9px] font-black text-[#64779F] uppercase tracking-wider block">Impact Metric</span>
                            <span className="text-sm font-black text-[#18357a] uppercase">Scholarly Excellence</span>
                        </div>
                    </div>
                    <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm flex items-center gap-4">
                        <div className="w-12 h-12 bg-indigo-50 rounded-xl flex items-center justify-center text-[#18357a]">
                            <GraduationCap size={24} />
                        </div>
                        <div>
                            <span className="text-[9px] font-black text-[#64779F] uppercase tracking-wider block">Recognition</span>
                            <span className="text-sm font-black text-[#18357a] uppercase">Recognized R&D Center</span>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default PhdHoldersPage
