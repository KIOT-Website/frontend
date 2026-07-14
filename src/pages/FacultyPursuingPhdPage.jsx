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
        if (!name) return 'Departmentwise'
        const decoded = decodeURIComponent(name).toLowerCase()
        if (decoded === 'computer-science-&-business-systems' || decoded === 'computer-science-and-business-systems') {
            return 'Computer Science & Business Systems'
        }
        return decodeURIComponent(name)
            .split('-')
            .map((word) => {
                if (word === '&') return '&'
                return word.charAt(0).toUpperCase() + word.slice(1)
            })
            .join(' ')
    }

    const allPursuingFaculty = {
        'mechanical-engineering': [
            {
                id: 1,
                name: "Mr. J.Prakash",
                topic: "Design and Development of Intelligent gripper through grasping stability analysis",
                supervisor: "Dr. M.Ilangkumaran",
                registration: "Jan & 2011",
                university: "Anna University"
            },
            {
                id: 2,
                name: "Mr. K.Mugundan",
                topic: "Investigation and Process Optimization of Aluminium Alloy 2024 / TiB2 in Stir Casting Composite",
                supervisor: "Dr. P.Sureshkumar",
                registration: "Jul & 2017",
                university: "Anna University"
            },
            {
                id: 3,
                name: "Mr. A.Selvakumar",
                topic: "Investigation of Natural Convection and Thermal Diffusion in an Indoor Environment",
                supervisor: "Dr. K.Visagavel",
                registration: "Jul & 2017",
                university: "Anna University"
            },
            {
                id: 4,
                name: "Mr. A.Gajendran",
                topic: "Investigation on the effects of Biofduel-Diesel Emulsions in A DI Diesel Engine",
                supervisor: "Dr. S.M.Sivagami",
                registration: "Jan & 2019",
                university: "Anna University"
            },
            {
                id: 5,
                name: "Mr. M.Vinoth",
                topic: "Battery Management System",
                supervisor: "Dr. K.Visagavel",
                registration: "Jul & 2023",
                university: "Anna University"
            },
            {
                id: 6,
                name: "Mr. P.Karthikeyan",
                topic: "Material Science",
                supervisor: "Dr. K.Visagavel",
                registration: "Jul & 2023",
                university: "Anna University"
            },
            {
                id: 7,
                name: "Mr. S.Naveenkumar",
                topic: "Indoor Air Quality",
                supervisor: "Dr. K.Visagavel",
                registration: "Jul & 2023",
                university: "Anna University"
            },
            {
                id: 8,
                name: "Ms. A.Elavarasi",
                topic: "Composite Materials",
                supervisor: "Dr. M.Ilangkumaran",
                registration: "Jan & 2024",
                university: "Anna University"
            },
            {
                id: 9,
                name: "Mr. S.Dheepak",
                topic: "Bio Materials",
                supervisor: "Dr. N.Panneerselvam",
                registration: "Jul & 2024",
                university: "Anna University"
            },
            {
                id: 10,
                name: "Mr. A.Kamalakkannan",
                topic: "Composite Materials",
                supervisor: "Dr. M.Ilangkumaran",
                registration: "Jul & 2024",
                university: "Anna University"
            },
            {
                id: 11,
                name: "Mr. S.Rajeshkanna",
                topic: "Composite Materials",
                supervisor: "Dr. M.Ilangkumaran",
                registration: "Jul & 2024",
                university: "Anna University"
            },
            {
                id: 12,
                name: "Mr. K.N.Karthick",
                topic: "Composite Materials",
                supervisor: "Dr. M.Bharathiraja",
                registration: "Jan & 2021",
                university: "Anna University"
            }
        ],
        'electronics-&-communication-engineering': [
            {
                id: 1,
                name: "Mr. S.Premkumar",
                topic: "Medical Image Processing",
                supervisor: "Dr. N.Santhiyakumari",
                registration: "Jul & 2023",
                university: "Anna University"
            },
            {
                id: 2,
                name: "Mr. M.Dineshkumar",
                topic: "Data Security",
                supervisor: "Dr. N.Santhiyakumari",
                registration: "Jul & 2023",
                university: "Anna University"
            },
            {
                id: 3,
                name: "Ms. T.Devika",
                topic: "Internet of Things",
                supervisor: "Dr. N.Santhiyakumari",
                registration: "Jul & 2023",
                university: "Anna University"
            },
            {
                id: 4,
                name: "Mr. S.Veerakumar",
                topic: "Internet of Things",
                supervisor: "Dr. N.Santhiyakumari",
                registration: "Jul & 2023",
                university: "Anna University"
            },
            {
                id: 5,
                name: "Mr. M.Chandraman",
                topic: "Medical Image Processing",
                supervisor: "Dr. N.Santhiyakumari",
                registration: "Jul & 2023",
                university: "Anna University"
            },
            {
                id: 6,
                name: "Mr. A.Arun",
                topic: "Image Retrieval Algorithms",
                supervisor: "Dr. Nirmala Devi P",
                registration: "Jan & 2018",
                university: "Anna University"
            },
            {
                id: 7,
                name: "Mr. T.Raja",
                topic: "Intuitionistic Fuzzy Sets",
                supervisor: "Dr. S.Thilagavathy",
                registration: "Jan & 2024",
                university: "Bharathiar University"
            },
            {
                id: 8,
                name: "Mr. A.Tamilselvan",
                topic: "Configuration of SOC in IoT Industry",
                supervisor: "Dr. J.Samson Immanuel",
                registration: "Jan & 2024",
                university: "Karunya University"
            },
            {
                id: 9,
                name: "Mr. Rajesh K",
                topic: "Low Power VLSI Design",
                supervisor: "Dr. H.Victor Du John",
                registration: "Jan & 2024",
                university: "Karunya University"
            },
            {
                id: 10,
                name: "Mr. S.Elarmathi",
                topic: "Image Processing",
                supervisor: "Dr. S.Kumarganesh",
                registration: "Jan & 2025",
                university: "Anna University"
            },
            {
                id: 11,
                name: "Ms. Preethi A",
                topic: "Nanoparticles -Supercapacitor application",
                supervisor: "Dr. K.Balachandran",
                registration: "Jan & 2021",
                university: "Anna University"
            }
        ],
        'electrical-&-electronics-engineering': [
            { id: 1, name: "Mr. B.Dhinesh", topic: "Electric Vehicle", supervisor: "Dr. C.Muniraj", registration: "2022", university: "Anna University" },
            { id: 2, name: "Mr. S.E.Murthy", topic: "Electric Vehicle", supervisor: "Dr. C.Muniraj", registration: "2022", university: "Anna University" },
            { id: 3, name: "Mr. M.Jagadeeshraja", topic: "Embedded Systems", supervisor: "Dr. C.Muniraj", registration: "2023", university: "Anna University" },
            { id: 4, name: "Mr. M.Rajkumar", topic: "Power Systems", supervisor: "Dr. C.Muniraj", registration: "2023", university: "Anna University" },
            { id: 5, name: "Mr. G.Karthikeyan", topic: "Power Electronics", supervisor: "Dr. A.Jagadeeshwaran", registration: "2019", university: "Anna University" },
            { id: 6, name: "Mr. R.Kathiresan", topic: "Electric Vehicle", supervisor: "Dr. C.Govindaraju", registration: "2022", university: "Anna University" },
            { id: 7, name: "Mr. P.Balaji", topic: "Power Electronics", supervisor: "Dr. P.Rajalakshmy", registration: "2023", university: "Karunya University" },
            { id: 8, name: "Mr. R.Madhanraj", topic: "Control & Instrumentation", supervisor: "Dr. P.Anantha Christu Raj", registration: "2023", university: "Karunya University" },
            { id: 9, name: "Ms. N.Divya", topic: "Power Electronics", supervisor: "Dr. V.Kamatchi Kannan", registration: "2024", university: "Anna University" },
            { id: 10, name: "Ms. P.Rekha", topic: "Embedded Systems", supervisor: "Dr. V.Kamatchi Kannan", registration: "2024", university: "Anna University" }
        ],
        'computer-science-&-engineering': [
            { id: 1, name: "Prof. T.Karthikeyan", topic: "Computer Science", supervisor: "Dr. T.Sitamahalakshmi", registration: "23244697170", university: "GITAM University", status: "Thesis Submitted" },
            { id: 2, name: "Ms. V.Sathyapriya", topic: "Computer Science", supervisor: "Dr. P.Rajendran", registration: "23244697170", university: "Anna University", status: "Course work Pursuing" },
            { id: 3, name: "Mr. Sivaguru", topic: "Computer Science", supervisor: "Dr. R.Thangarajan", registration: "21144697479", university: "Anna University", status: "Course Work Completed" },
            { id: 4, name: "Ms. Subha N", topic: "Computer Science", supervisor: "Dr. P.Rajendran", registration: "24244691328", university: "Anna University", status: "Course work Pursuing" },
            { id: 5, name: "Ms. R.Pushpalatha", topic: "Computer Science", supervisor: "Dr. P.Rajendran", registration: "24234691437", university: "Anna University", status: "Course work Pursuing" },
            { id: 6, name: "Mr. A.Sekar", topic: "Computer Science", supervisor: "Dr. P.Vijayalakshmi", registration: "24144691403", university: "Anna University", status: "Course work Pursuing" },
            { id: 7, name: "Ms. D.Ramya", topic: "Computer Science", supervisor: "Dr. P.Vijayalakshmi", registration: "24244697415", university: "Anna University", status: "Course work Pursuing" },
            { id: 8, name: "Ms. G.Eswari @ Pechiammal", topic: "Computer Science", supervisor: "Dr. Pabitha P", registration: "23244397295", university: "Anna University", status: "Course work completed" },
            { id: 9, name: "Mr. P.Nareshkumar", topic: "Computer Science", supervisor: "Dr. M.Kumaresan", registration: "JU2025RPHD10492", university: "Jain University", status: "Course work Pursuing" },
            { id: 10, name: "Ms. A.Kasthuri", topic: "Computer Science", supervisor: "Dr. J.Gowrishankar", registration: "23PHREN043", university: "Jain University", status: "Course work Pursuing" }
        ],
        'information-technology': [
            {
                id: 1,
                name: "Ms. R.V.Sudha",
                topic: "Wireless sensor Network",
                supervisor: "Dr.S.Saktivel, ASP/CSE, Sona college of technology, Salem",
                registration: "24121691132",
                university: "Anna University"
            },
            {
                id: 2,
                name: "Ms. S.Lalithambikai",
                topic: "Wireless sensor Network",
                supervisor: "Dr.P.Rajendran, Professor & Director PAT(III) / CSE, Knowledge Institute of Technology, Salem",
                registration: "24234691278",
                university: "Anna University"
            },
            {
                id: 3,
                name: "Ms. B.Manjubashini",
                topic: "Wireless Sensor Network",
                supervisor: "Dr. Murali babu, Department of ECE, Paavai Engineering College, Namakkal",
                registration: "22244697187",
                university: "Anna University"
            }
        ],
        'artificial-intelligence-&-data-science': [
            { id: 1, name: "Dr. Sasikumar B", topic: "Image Processing", supervisor: "Dr. P.Rajendran", registration: "-", university: "Anna University" },
            { id: 2, name: "Mr. Gopalakrishnan A", topic: "Medical Image Processing", supervisor: "Dr. Kumarganesh S", registration: "-", university: "Anna University" },
            { id: 3, name: "Ms. Brindha V", topic: "Medical Image Processing", supervisor: "Dr. P.Rajendran", registration: "-", university: "Anna University" },
            { id: 4, name: "Ms. Bhuvaneswari B", topic: "Image Processing", supervisor: "Dr. R.Kumar", registration: "-", university: "Anna University" },
            { id: 5, name: "Ms. Deepa M", topic: "Network Security", supervisor: "Dr. E.Sathish Kumar", registration: "-", university: "Anna University" },
            { id: 6, name: "Ms. Esther Rani P J", topic: "Wireless Sensor Network", supervisor: "Dr. P.Rajendran", registration: "-", university: "Anna University" },
            { id: 7, name: "Ms. Sudha S", topic: "AI in Special Education", supervisor: "Dr. R.Kumar", registration: "-", university: "Anna University" }
        ],
        'civil-engineering': [
            { id: 10, name: "Mr. S.Pradeep Kumar", topic: "Civil Engineering", supervisor: "Dr. P.M.Shanmugavadivu", registration: "July 2024", university: "Anna University" },
            { id: 1, name: "Mr. L.Krishnan", topic: "Structural Engineering", supervisor: "Dr. Gulshan Taj M N A", registration: "Jan & 2020", university: "Anna University" },
            { id: 2, name: "Mr. S.Arulkesavan", topic: "Concrete Structures", supervisor: "Dr. S.Ramesh", registration: "Jan & 2025", university: "Anna University" },
            { id: 3, name: "Mr. R.Elavarasan", topic: "Concrete Structures", supervisor: "Dr. P.Mageshkumar", registration: "Jan & 2024", university: "Anna University" },
            { id: 4, name: "Mr. L.M.Nirmal", topic: "Concrete Technology", supervisor: "Dr. P.Mageshkumar", registration: "Jan & 2025", university: "Anna University" }
        ],

        'computer-science-&-business-systems': [
            {
                id: 1,
                name: "R.V.Sudha",
                topic: "Wireless sensor Network",
                supervisor: "Dr.S.Sakthivel, Sona College of Technology, Salem",
                registration: "2022",
                university: "Anna University"
            },
            {
                id: 2,
                name: "R.Karthick",
                topic: "Machine Learning",
                supervisor: "Dr.P.VijayaLakshmi, Knowledge Institute Of Technology, Salem",
                registration: "2023",
                university: "Anna University"
            },
            {
                id: 3,
                name: "Ms. Reena K",
                topic: "Deep learning in health care",
                supervisor: "Dr. S. Nagendra Prabhu, SRM IST, Kattankulathur Campus",
                registration: "2023",
                university: "Anna University"
            },
            {
                id: 4,
                name: "Ms. Nithya C",
                topic: "Data Security",
                supervisor: "Dr.S. Kumarganesh, Knowledge Institute Of Technology, Salem",
                registration: "2025",
                university: "Anna University"
            }
        ],
        'science-&-humanities': [
            {
                id: 1,
                name: "S.Geetha",
                topic: "Graph Theory",
                supervisor: "Dr. S.Manimekalai",
                registration: "June 2024",
                university: "Bharathiar University"
            },
            {
                id: 2,
                name: "M.Sivaperumal",
                topic: "Nanomaterials",
                supervisor: "Dr. G.Raja",
                registration: "Jan 2023",
                university: "Anna University"
            },
            {
                id: 3,
                name: "M.Prasath",
                topic: "Inventory Control Theory",
                supervisor: "Dr. R.Vijaykrishnaraj",
                registration: "Jan 2025",
                university: "Bharath University"
            },
            {
                id: 4,
                name: "A.Preethi",
                topic: "NanoParticles",
                supervisor: "Dr. K.Balachandran",
                registration: "Feb 2021",
                university: "Anna University"
            },
            {
                id: 5,
                name: "K.Vasanthakumar",
                topic: "Eduthuraippiyal Nokkil Natrinai",
                supervisor: "Dr. V.Ramarajapandian",
                registration: "Sep/2014",
                university: "Periyar University"
            },
            {
                id: 6,
                name: "T.Raja",
                topic: "Decision Making using Fuzzy Logic",
                supervisor: "Dr. S.Thilagavathi",
                registration: "June 2024",
                university: "Bharathiar University"
            },
            {
                id: 7,
                name: "S.Sasi Kumar",
                topic: "Thin Film Technology",
                supervisor: "Dr. K.S.Mohan",
                registration: "January 2025",
                university: "Anna University"
            }
        ]
    }

    const getDisplayFaculty = () => {
        if (!deptName) return []
        const decoded = decodeURIComponent(deptName).toLowerCase()
        const normalized = decoded.replace(/-and-/g, '-&-')
        return allPursuingFaculty[normalized] || allPursuingFaculty[decoded] || allPursuingFaculty[deptName.toLowerCase()] || []
    }

    const displayFaculty = getDisplayFaculty()

    return (
        <div className="min-h-screen bg-[#f6f9fc] font-sans pb-20">


            <div className="max-w-6xl mx-auto px-6 py-12 lg:py-16">
                
                {/* Header Section */}
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mb-12"
                >


                    <h1 className="text-3xl lg:text-5xl font-bold text-[#224292] leading-tight mb-6">
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
                    className="bg-white rounded-2xl shadow-2xl shadow-blue-900/5 border border-slate-200/60 overflow-hidden"
                >
                    <div className="overflow-x-auto">
                        <table className="w-full border-collapse text-left">
                            <thead>
                                <tr className="text-white">
                                    <th className="bg-[#0f172a] px-6 py-5 text-left text-[13px] font-semibold font-graphik tracking-wider w-16 border-r border-white/5">S.No.</th>
                                    <th className="bg-[#0f172a] px-6 py-5 text-left text-[13px] font-semibold font-graphik tracking-wider border-r border-white/5">Name of the Scholar</th>
                                    <th className="bg-[#0f172a] px-6 py-5 text-left text-[13px] font-semibold font-graphik tracking-wider border-r border-white/5">Research Domain</th>
                                    <th className="bg-[#0f172a] px-6 py-5 text-left text-[13px] font-semibold font-graphik tracking-wider border-r border-white/5">Supervisor</th>
                                    <th className="bg-[#0f172a] px-6 py-5 text-left text-[13px] font-semibold font-graphik text-[#ffc107] tracking-wider pr-8">Registration No. & Affiliation</th>
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
                                                <div className="w-10 h-10 bg-[#224292]/5 rounded-xl flex items-center justify-center text-[#224292] font-black text-xs group-hover:bg-[#ffc107] group-hover:text-[#224292] transition-all duration-300 shadow-inner">
                                                    {idx + 1 < 10 ? `0${idx + 1}` : idx + 1}
                                                </div>
                                            </td>
                                            <td className="px-6 py-5">
                                                <div className="flex items-center gap-3">
                                                    <div className="text-[#0f172a] group-hover:text-[#ffc107] transition-colors"><Users size={18} /></div>
                                                    <span className="text-[13px] font-bold text-[#0f172a] tracking-tight">{faculty.name}</span>
                                                </div>
                                            </td>
                                            <td className="px-6 py-5">
                                                <div className="max-w-[280px]">
                                                    <p className="text-[12px] font-semibold text-[#1e293b] leading-relaxed italic">
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
                                            <td className="px-6 py-5 pr-8">
                                                <div className="flex flex-col gap-1">
                                                    <span className="text-[12px] font-bold text-[#0f172a]">{faculty.registration}</span>
                                                    <span className="text-[10px] font-semibold text-[#475569]">{faculty.university}</span>
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
                        <span className="text-[11px] font-black text-[#224292] uppercase tracking-wider">{displayFaculty.length} Research Scholars</span>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default FacultyPursuingPhdPage
