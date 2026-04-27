import React from 'react'
import { motion } from 'framer-motion'
import { useParams, Link } from 'react-router-dom'
import { 
    ChevronRight, 
    Home as HomeIcon,
    Users,
    Microchip,
    Calendar,
    ArrowLeft,
    GraduationCap,
    Clock,
    Search
} from 'lucide-react'

const FacultyPursuingPhdPage = () => {
    const { deptName } = useParams()

    const formatDeptName = (name) => {
        if (!name) return "Departmentwise"
        return name.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')
    }

    const allPursuingFaculty = {
        'mechanical-engineering': [
            {
                id: 1,
                name: "Mr.J.Prakash",
                topic: "Design and Development of Intelligent gripper through grasping stability analysis",
                supervisor: "Dr.M.Ilangkumaran",
                registration: "Jan & 2011",
                university: "Anna University"
            },
            {
                id: 2,
                name: "Mr.K.Mugundan",
                topic: "Investigation and Process Optimization of Aluminium Alloy 2024 / TiB2 in Stir Casting Composite",
                supervisor: "Dr.P.Sureshkumar",
                registration: "Jul & 2017",
                university: "Anna University"
            },
            {
                id: 3,
                name: "Mr.A.Selvakumar",
                topic: "Investigation of Natural Convection and Thermal Diffusion in an Indoor Environment",
                supervisor: "Dr.K.Visagavel",
                registration: "Jul & 2017",
                university: "Anna University"
            },
            {
                id: 4,
                name: "Mr.A.Gajendran",
                topic: "Investigation on the effects of Biofduel-Diesel Emulsions in A DI Diesel Engine",
                supervisor: "Dr.S.M.Sivagami",
                registration: "Jan & 2019",
                university: "Anna University"
            },
            {
                id: 5,
                name: "Mr.M.Vinoth",
                topic: "Battery Management System",
                supervisor: "Dr.K.Visagavel",
                registration: "Jul & 2023",
                university: "Anna University"
            },
            {
                id: 6,
                name: "Mr.P.Karthikeyan",
                topic: "Material Science",
                supervisor: "Dr.K.Visagavel",
                registration: "Jul & 2023",
                university: "Anna University"
            },
            {
                id: 7,
                name: "Mr.S.Naveenkumar",
                topic: "Indoor Air Quality",
                supervisor: "Dr.K.Visagavel",
                registration: "Jul & 2023",
                university: "Anna University"
            },
            {
                id: 8,
                name: "Ms.A.Elavarasi",
                topic: "Composite Materials",
                supervisor: "Dr.M.Ilangkumaran",
                registration: "Jan & 2024",
                university: "Anna University"
            },
            {
                id: 9,
                name: "Mr.S.Dheepak",
                topic: "Bio Materials",
                supervisor: "Dr.N.Panneerselvam",
                registration: "Jul & 2024",
                university: "Anna University"
            },
            {
                id: 10,
                name: "Mr.A.Kamalakkannan",
                topic: "Composite Materials",
                supervisor: "Dr.M.Ilangkumaran",
                registration: "Jul & 2024",
                university: "Anna University"
            },
            {
                id: 11,
                name: "Mr.S.Rajeshkanna",
                topic: "Composite Materials",
                supervisor: "Dr.M.Ilangkumaran",
                registration: "Jul & 2024",
                university: "Anna University"
            },
            {
                id: 12,
                name: "Mr.K.N.Karthick",
                topic: "Composite Materials",
                supervisor: "Dr.M.Bharathiraja",
                registration: "Jan & 2021",
                university: "Anna University"
            }
        ],
        'electronics-&-communication-engineering': [
            {
                id: 1,
                name: "Mr.S.Premkumar",
                topic: "Medical Image Processing",
                supervisor: "Dr.N.Santhiyakumari",
                registration: "Jul & 2023",
                university: "Anna University"
            },
            {
                id: 2,
                name: "Mr.M.Dineshkumar",
                topic: "Data Security",
                supervisor: "Dr.N.Santhiyakumari",
                registration: "Jul & 2023",
                university: "Anna University"
            },
            {
                id: 3,
                name: "Mrs.T.Devika",
                topic: "Internet of Things",
                supervisor: "Dr.N.Santhiyakumari",
                registration: "Jul & 2023",
                university: "Anna University"
            },
            {
                id: 4,
                name: "Mr.S.Veerakumar",
                topic: "Internet of Things",
                supervisor: "Dr.N.Santhiyakumari",
                registration: "Jul & 2023",
                university: "Anna University"
            },
            {
                id: 5,
                name: "Mr.M.Chandraman",
                topic: "Medical Image Processing",
                supervisor: "Dr.N.Santhiyakumari",
                registration: "Jul & 2023",
                university: "Anna University"
            },
            {
                id: 6,
                name: "Mr. A.Arun",
                topic: "Image Retrieval Algorithms",
                supervisor: "Dr. P. Nirmala Devi",
                registration: "Jan & 2018",
                university: "Anna University"
            },
            {
                id: 7,
                name: "Mr.T.Raja",
                topic: "Intuitionistic Fuzzy Sets",
                supervisor: "Dr.S.Thilagavathy",
                registration: "Jan & 2024",
                university: "Bharathiar University"
            },
            {
                id: 8,
                name: "Mr.A.Tamilselvan",
                topic: "Configuration of SOC in IoT Industry",
                supervisor: "Dr.J.Samson Immanuel",
                registration: "Jan & 2024",
                university: "Karunya University"
            },
            {
                id: 9,
                name: "Mr.K. Rajesh",
                topic: "Low Power VLSI Design",
                supervisor: "Dr.H.Victor Du John",
                registration: "Jan & 2024",
                university: "Karunya University"
            },
            {
                id: 10,
                name: "Mr.S.Elarmathi",
                topic: "Image Processing",
                supervisor: "Dr.S.Kumarganesh",
                registration: "Jan & 2025",
                university: "Anna University"
            },
            {
                id: 11,
                name: "Mrs. A. Preethi",
                topic: "Nanoparticles -Supercapacitor application",
                supervisor: "Dr.K.Balachandran",
                registration: "Jan & 2021",
                university: "Anna University"
            }
        ],
        'electrical-&-electronics-engineering': [
            { id: 1, name: "Mr.B.Dhinesh", topic: "Electric Vehicle", supervisor: "Dr.C.Muniraj", registration: "2022", university: "Anna University" },
            { id: 2, name: "Mr.S.E.Murthy", topic: "Electric Vehicle", supervisor: "Dr.C.Muniraj", registration: "2022", university: "Anna University" },
            { id: 3, name: "Mr.M.Jagadeeshraja", topic: "Embedded Systems", supervisor: "Dr.C.Muniraj", registration: "2023", university: "Anna University" },
            { id: 4, name: "Mr.M.Rajkumar", topic: "Power Systems", supervisor: "Dr.C.Muniraj", registration: "2023", university: "Anna University" },
            { id: 5, name: "Mr.G.Karthikeyan", topic: "Power Electronics", supervisor: "Dr.A.Jagadeeshwaran", registration: "2019", university: "Anna University" },
            { id: 6, name: "Mr.R.Kathiresan", topic: "Electric Vehicle", supervisor: "Dr.C.Govindaraju", registration: "2022", university: "Anna University" },
            { id: 7, name: "Mr.P.Balaji", topic: "Power Electronics", supervisor: "Dr.P.Rajalakshmy", registration: "2023", university: "Karunya University" },
            { id: 8, name: "Mr.R.Madhanraj", topic: "Control & Instrumentation", supervisor: "Dr.P.Anantha Christu Raj", registration: "2023", university: "Karunya University" },
            { id: 9, name: "Mrs.N.Divya", topic: "Power Electronics", supervisor: "Dr.V.Kamatchi Kannan", registration: "2024", university: "Anna University" },
            { id: 10, name: "Mrs.P.Rekha", topic: "Embedded Systems", supervisor: "Dr.V.Kamatchi Kannan", registration: "2024", university: "Anna University" }
        ],
        'computer-science-&-engineering': [
            { id: 1, name: "Prof.T.Karthikeyan", topic: "Computer Science", supervisor: "Dr.T.Sitamahalakshmi", registration: "23244697170", university: "GITAM University", status: "Thesis Submitted" },
            { id: 2, name: "Mrs.V.Sathyapriya", topic: "Computer Science", supervisor: "Dr.P.Rajendran", registration: "23244697170", university: "Anna University", status: "Course work Pursuing" },
            { id: 3, name: "Mr.Sivaguru", topic: "Computer Science", supervisor: "Dr.R.Thangarajan", registration: "21144697479", university: "Anna University", status: "Course Work Completed" },
            { id: 4, name: "Mrs.N. Subha", topic: "Computer Science", supervisor: "Dr.P.Rajendran", registration: "24244691328", university: "Anna University", status: "Course work Pursuing" },
            { id: 5, name: "Mrs.R.Pushpalatha", topic: "Computer Science", supervisor: "Dr.P.Rajendran", registration: "24234691437", university: "Anna University", status: "Course work Pursuing" },
            { id: 6, name: "Mr.A.Sekar", topic: "Computer Science", supervisor: "Dr.P.Vijayalakshmi", registration: "24144691403", university: "Anna University", status: "Course work Pursuing" },
            { id: 7, name: "Mrs.D.Ramya", topic: "Computer Science", supervisor: "Dr.P.Vijayalakshmi", registration: "24244697415", university: "Anna University", status: "Course work Pursuing" },
            { id: 8, name: "Mrs.G.Eswari @ Pechiammal", topic: "Computer Science", supervisor: "Dr.P Pabitha", registration: "23244397295", university: "Anna University", status: "Course work completed" },
            { id: 9, name: "Mr.P.Nareshkumar", topic: "Computer Science", supervisor: "Dr.M.Kumaresan", registration: "JU2025RPHD10492", university: "Jain University", status: "Course work Pursuing" },
            { id: 10, name: "Mrs.A.Kasthuri", topic: "Computer Science", supervisor: "Dr.J.Gowrishankar", registration: "23PHREN043", university: "Jain University", status: "Course work Pursuing" }
        ],
        'civil-engineering': [
            { id: 1, name: "Mr.L.Krishnan", topic: "Structural Engineering", supervisor: "Dr.Gulshan Taj M N A", registration: "Jan & 2020", university: "Anna University" },
            { id: 2, name: "Mr. S.Arulkesavan", topic: "Concrete Structures", supervisor: "Dr.S.Ramesh", registration: "Jan & 2025", university: "Anna University" },
            { id: 3, name: "Mr. R.Elavarasan", topic: "Concrete Structures", supervisor: "Dr.P.Mageshkumar", registration: "Jan & 2024", university: "Anna University" },
            { id: 4, name: "Mr.L.M.Nirmal", topic: "Concrete Technology", supervisor: "Dr.P.Mageshkumar", registration: "Jan & 2025", university: "Anna University" }
        ]
    }

    const displayFaculty = allPursuingFaculty[deptName?.toLowerCase()] || []

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
                        Scholars in Progress
                    </span>
                </div>
            </div>

            <div className="max-w-6xl mx-auto px-6 py-12 lg:py-16">
                
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
                        Faculty <span className="text-[#ffc107]">Pursuing Ph.D</span>
                    </h1>

                    <div className="max-w-3xl border-l-4 border-[#ffc107] pl-8 py-1">
                        <p className="text-[#1e293b] text-base font-semibold leading-relaxed">
                            Directory of faculty scholars from {formatDeptName(deptName)} currently enrolled in doctoral research. Highlighting academic progression and specialized thesis domains under expert supervision.
                        </p>
                    </div>
                </motion.div>

                {/* Progress Table */}
                <motion.div 
                    initial={{ opacity: 0, scale: 0.98 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="bg-white rounded-[2rem] shadow-2xl shadow-blue-900/5 border border-slate-200/60 overflow-hidden"
                >
                    <div className="overflow-x-auto">
                        <table className="w-full border-collapse text-left">
                            <thead>
                                <tr className="text-white">
                                    <th className="bg-[#0f172a] px-6 py-5 text-left text-[10px] font-black tracking-[2px] w-16 border-r border-white/5">S.No.</th>
                                    <th className="bg-[#0f172a] px-6 py-5 text-left text-[10px] font-black tracking-[2px] border-r border-white/5">Supervision Detail</th>
                                    <th className="bg-[#0f172a] px-6 py-5 text-left text-[10px] font-black tracking-[2px] border-r border-white/5">Research Scholar & Topic</th>
                                    <th className="bg-[#0f172a] px-6 py-5 text-left text-[10px] font-black tracking-[2px] border-r border-white/5">Supervisor Affiliate</th>
                                    <th className="bg-[#0f172a] px-6 py-5 text-right text-[10px] font-black text-[#ffc107] tracking-[2px] pr-8">Year</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-slate-100">
                                {displayFaculty.length > 0 ? (
                                    displayFaculty.map((faculty, idx) => (
                                        <tr 
                                            key={faculty.id}
                                            className="group hover:bg-[#fafcff] transition-all duration-300"
                                        >
                                            <td className="px-6 py-5 border-r border-slate-50">
                                                <div className="w-10 h-10 bg-[#18357a]/5 rounded-xl flex items-center justify-center text-[#18357a] font-black text-xs group-hover:bg-[#ffc107] group-hover:text-[#18357a] transition-all duration-300 shadow-inner">
                                                    {idx + 1 < 10 ? `0${idx + 1}` : idx + 1}
                                                </div>
                                            </td>
                                            <td className="px-6 py-5">
                                                <div className="flex items-center gap-3">
                                                    <div className="text-[#0f172a] group-hover:text-[#ffc107] transition-colors"><Users size={18} /></div>
                                                    <div>
                                                        <div className="text-[13px] font-bold text-[#0f172a] tracking-tight">{faculty.name}</div>
                                                        <div className="text-[10px] font-bold text-[#334155]">{faculty.university}</div>
                                                    </div>
                                                </div>
                                            </td>
                                            <td className="px-6 py-5">
                                                <div className="max-w-[280px]">
                                                    <p className="text-[12px] font-semibold text-[#1e293b] leading-relaxed line-clamp-2 italic">
                                                        "{faculty.topic}"
                                                    </p>
                                                </div>
                                            </td>
                                            <td className="px-6 py-5">
                                                <div className="flex items-center gap-2">
                                                    <div className="w-7 h-7 bg-amber-50 rounded-lg flex items-center justify-center text-[#ffc107]">
                                                        <GraduationCap size={14} />
                                                    </div>
                                                    <span className="text-[12px] font-bold text-[#0f172a] tracking-tight">{faculty.supervisor}</span>
                                                </div>
                                            </td>
                                            <td className="px-6 py-5">
                                                <div className="flex items-center justify-end gap-1.5 text-[#0f172a] text-[13px] font-bold uppercase transition-colors group-hover:text-[#ffc107]">
                                                    <Calendar size={14} className="text-[#ffc107] group-hover:text-[#0f172a] transition-colors" /> {faculty.registration.split(' & ')[1]}
                                                </div>
                                            </td>
                                        </tr>
                                    ))
                                ) : (
                                    <tr>
                                        <td colSpan="5" className="px-6 py-20 text-center text-slate-400 font-bold uppercase text-xs">
                                            No scholars found for this department.
                                        </td>
                                    </tr>
                                )}
                            </tbody>
                        </table>
                    </div>
                </motion.div>

                {/* Batch Distribution Info */}
                <div className="mt-10 flex flex-wrap items-center gap-6">
                    <div className="px-6 py-3 bg-white border border-slate-200 rounded-full flex items-center gap-3 shadow-sm">
                        <Microchip size={16} className="text-[#ffc107]" />
                        <span className="text-[11px] font-black text-[#18357a] uppercase tracking-wider">{displayFaculty.length} Research Scholars</span>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default FacultyPursuingPhdPage
