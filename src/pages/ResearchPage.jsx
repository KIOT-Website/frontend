import React from 'react'
import { motion } from 'framer-motion'
import { 
    ChevronRight, 
    Home as HomeIcon,
    Search,
    Award,
    Lightbulb,
    Microscope,
    Factory,
    Cpu,
    Zap,
    Computer,
    Building2,
    Database,
    Binary,
    FlaskConical,
    LineChart,
    Mail,
    Phone,
    Link as LinkIcon
} from 'lucide-react'
import { useNavigate } from 'react-router-dom'
import openImage from '../assets/iStart/open.JPG'

const ResearchPage = () => {
    const navigate = useNavigate()

    const departments = [
        {
            name: "Mechanical Engineering",
            focus: ["Advanced Manufacturing", "Thermal Engineering", "CFD"],
            icon: Factory,
            color: "bg-blue-50 text-blue-600"
        },
        {
            name: "Electronics & Communication Engineering",
            focus: ["VLSI Design", "Embedded Systems", "Signal Processing"],
            icon: Cpu,
            color: "bg-indigo-50 text-indigo-600"
        },
        {
            name: "Electrical & Electronics Engineering",
            focus: ["Power Systems", "Renewable Energy", "Smart Grids"],
            icon: Zap,
            color: "bg-yellow-50 text-yellow-600"
        },
        {
            name: "Computer Science & Engineering",
            focus: ["AI/ML", "Blockchain", "Cloud Computing"],
            icon: Computer,
            color: "bg-emerald-50 text-emerald-600"
        },
        {
            name: "Civil Engineering",
            focus: ["Structural Health", "Geotechnical Engg", "Smart Materials"],
            icon: Building2,
            color: "bg-orange-50 text-orange-600"
        },
        {
            name: "Information Technology",
            focus: ["Cybersecurity", "Data Analytics", "IoT"],
            icon: Database,
            color: "bg-cyan-50 text-cyan-600"
        },
        {
            name: "Artificial Intelligence & Data Science",
            focus: ["Deep Learning", "Computer Vision", "Big Data"],
            icon: Binary,
            color: "bg-purple-50 text-purple-600"
        },
        {
            name: "Computer Science & Business Systems",
            focus: ["Enterprise Systems", "Business Analytics"],
            icon: LineChart,
            color: "bg-rose-50 text-rose-600"
        },
        {
            name: "Science & Humanities",
            focus: ["Nanomaterials", "Applied Mathematics", "Sensor Development"],
            icon: FlaskConical,
            color: "bg-violet-50 text-violet-600"
        },
        {
            name: "Management Sciences",
            focus: ["Operations Research", "Finance Analytics", "HR Tech"],
            icon: LineChart,
            color: "bg-slate-50 text-slate-600"
        },
        {
            name: "Master of Computer Applications",
            focus: ["Software Development", "Web Technologies", "AI & ML"],
            icon: Computer,
            color: "bg-teal-50 text-teal-600"
        }
    ]

    const activeResearchAreas = [
        "AI in Healthcare", "Renewable Energy Systems", "Smart Manufacturing", 
        "IoT & Embedded Systems", "Structural Health Monitoring", "VLSI & Chip Design", 
        "Data Science & Analytics", "Composite Materials"
    ]

    const researchPrograms = [
        {
            sno: 1,
            title: "Discussion on Improving Research work at KIOT",
            mode: "OFFLINE",
            resourcePerson: "Dr.PSS.Srinivasan, Executive Chairman, KIOT",
            dates: "24.09.2025",
            facultyBenefited: 45,
            studentsParticipated: "-"
        },
        {
            sno: 2,
            title: "Research Skill Development Series-1",
            mode: "OFFLINE",
            resourcePerson: "Dr.N.Santhiyakumari, Professor, ECE & Director-R&D",
            dates: "27.09.2025",
            facultyBenefited: 40,
            studentsParticipated: "10"
        },
        {
            sno: 3,
            title: "Research Skill Development Series-2",
            mode: "OFFLINE",
            resourcePerson: "Dr.N.Santhiyakumari, Professor, ECE & Director-R&D",
            dates: "11.10.2025",
            facultyBenefited: 30,
            studentsParticipated: "10"
        },
        {
            sno: 4,
            title: "Research Skill Development Series-3",
            mode: "OFFLINE",
            resourcePerson: "Dr.N.Santhiyakumari, Professor, ECE & Director-R&D",
            dates: "11.10.2025",
            facultyBenefited: 30,
            studentsParticipated: "10"
        },
        {
            sno: 5,
            title: "Research Skill Development Series-4",
            mode: "OFFLINE",
            resourcePerson: "Dr.N.Santhiyakumari, Professor, ECE & Director-R&D",
            dates: "14.10.2025",
            facultyBenefited: 30,
            studentsParticipated: "10"
        },
        {
            sno: 6,
            title: "Exploring Collaborative opportunities - Online Interactive",
            mode: "OFFLINE",
            resourcePerson: "Dr.B.Vinodhkumar, CEO of CDIIC, Coimbatore for",
            dates: "23.10.2025",
            facultyBenefited: 40,
            studentsParticipated: "-"
        },
        {
            sno: 8,
            title: "Best Practices for fostering R&D in Engineering Institutions",
            mode: "OFFLINE",
            resourcePerson: "Dr.Senthilkumar Arumugam, Professor, School of Mechanical Engineering, VIT, Chennai",
            dates: "13.11.2025",
            facultyBenefited: 50,
            studentsParticipated: "35"
        },
        {
            sno: 9,
            title: "Ongoing Schemes for Anusandhan and Upcoming Schemes for Anusandhan",
            mode: "OFFLINE",
            resourcePerson: "Dr.R.Vijayaraghavan, Professor, ECE, DRDO-Rtd Scientist KIOT.",
            dates: "14.11.2025",
            facultyBenefited: 45,
            studentsParticipated: "-"
        },
        {
            sno: 10,
            title: "Discussion on Improving Research work at KIOT",
            mode: "OFFLINE",
            resourcePerson: "Dr.PSS.Srinivasan, Executive Chairman, KIOT",
            dates: "24.01.2026",
            facultyBenefited: 45,
            studentsParticipated: "-"
        }
    ]

    return (
        <div className="min-h-screen bg-slate-50/30 font-sans">
            {/* Hero Section */}
            <div className="relative bg-[#224292] pt-6 md:pt-10 pb-12 overflow-hidden rounded-b-[2rem] md:rounded-b-[3rem] font-graphik mb-8">
                {/* Background decorative circles */}
                <div className="absolute top-10 right-10 w-48 h-48 border border-white/5 rounded-full" />
                <div className="absolute top-20 right-20 w-80 h-80 border border-white/5 rounded-full" />
                <div className="absolute inset-0 opacity-[0.03] pointer-events-none" 
                     style={{ backgroundImage: 'radial-gradient(white 0.5px, transparent 0.5px)', backgroundSize: '30px 30px' }} />

                <div className="relative z-10 w-full max-w-[1500px] mx-auto px-6 lg:px-12">
                    <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
                        {/* Left Column: Heading and Description */}
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                            className="md:col-span-12 text-left flex flex-col items-start"
                        >
                            <h1 className="text-3xl lg:text-4xl font-black text-white leading-tight mb-3 tracking-tight text-left">
                                Research & <span className="text-[#ffc107]">Innovations</span>
                            </h1>
                            <div className="h-1 w-16 bg-[#ffc107] mb-6" />
                            
                            <p className="text-white/90 text-xs md:text-sm font-medium leading-relaxed max-w-2xl text-justify font-graphik">
                                At Knowledge Institute of Technology, we foster a rich ecosystem of inquiry and discovery. Our departments drive cutting-edge research, secure government grants, and support innovative projects to build future-ready solutions for industry and society.
                            </p>
                        </motion.div>
                    </div>
                </div>
            </div>

            {/* ── Departmentwise Research Initiatives Section ── */}
            <div className="max-w-[1400px] mx-auto px-6 pb-20">

                {/* Full-width header */}
                <motion.div
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-12"
                >
                    <h2 className="text-3xl lg:text-4xl font-extrabold text-[#224292] leading-tight mb-4 tracking-tight font-graphik">
                        Departmentwise{' '}
                        <span className="text-[#ffc107]">Research Initiatives</span>
                    </h2>
                    <div className="mx-auto h-1 w-20 rounded-full bg-[#ffc107] mb-5" />
                    <p className="max-w-3xl mx-auto text-gray-600 text-sm lg:text-base leading-relaxed text-center font-graphik">
                        Each academic department at KIOT functions as a hub for innovation, encouraging students
                        and faculty members to engage in industry-relevant investigations, publish research papers
                        in indexed journals, and obtain intellectual property patents.
                    </p>
                </motion.div>

                {/* Main content: cards grid + sticky image panel */}
                <div className="flex flex-col lg:flex-row gap-10 items-start">

                    {/* LEFT: masonry-style 2-column department cards */}
                    <div className="flex-1 columns-1 sm:columns-2 gap-5 space-y-0">
                        {departments.map((dept, idx) => {
                            // Extract the colour classes for border accent
                            const borderColor = dept.color.replace('bg-', 'border-').replace(/\s+text-\S+/, '')
                            const tall = idx % 3 === 1   // every 3rd card is taller for masonry feel
                            return (
                                <motion.div
                                    key={idx}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.45, delay: idx * 0.05 }}
                                    onClick={() => navigate(`/research/${dept.name.split(' (')[0].replace(/ /g, '-').toLowerCase()}`)}
                                    className={`break-inside-avoid mb-5 group cursor-pointer bg-white rounded-2xl border-l-4 border-[#ffc107] shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 overflow-hidden`}
                                >
                                    <div className={`px-5 ${tall ? 'py-7' : 'py-5'}`}>
                                        {/* Icon + name row */}
                                        <div className="flex items-start gap-4 mb-3">
                                            <div className={`w-10 h-10 rounded-xl ${dept.color} flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform shadow-sm`}>
                                                <dept.icon size={18} />
                                            </div>
                                            <p className="text-[13px] font-bold text-[#224292] leading-snug font-graphik group-hover:text-[#1a3578] transition-colors">
                                                {dept.name}
                                            </p>
                                        </div>
                                        {/* Focus tags */}
                                        <div className="flex flex-wrap gap-1.5 mt-1">
                                            {dept.focus.map((tag, ti) => (
                                                <span
                                                    key={ti}
                                                    className="px-2.5 py-0.5 rounded-full text-[10px] font-semibold bg-slate-100 text-slate-500 font-graphik"
                                                >
                                                    {tag}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                    {/* Bottom hover bar */}
                                    <div className={`h-0.5 w-0 group-hover:w-full transition-all duration-500 ${dept.color.replace('bg-', 'bg-').split(' ')[0]}`} />
                                </motion.div>
                            )
                        })}
                    </div>

                    {/* RIGHT: sticky image panel */}
                    <motion.div
                        initial={{ opacity: 0, x: 40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7 }}
                        className="lg:w-[360px] xl:w-[420px] shrink-0 lg:sticky lg:top-28 self-start"
                    >
                        {/* Image */}
                        <div className="rounded-3xl overflow-hidden shadow-xl border border-slate-200">
                            <img
                                src={openImage}
                                alt="Research Initiatives at KIOT"
                                className="w-full h-[260px] lg:h-[320px] object-cover"
                            />
                        </div>

                        {/* Stats strip */}
                        <div className="mt-4 grid grid-cols-3 gap-3">
                            {[
                                { label: 'Departments', value: '11+' },
                                { label: 'Publications', value: '500+' },
                                { label: 'Patents Filed', value: '80+' },
                            ].map((s, i) => (
                                <div key={i} className="bg-white rounded-xl py-4 text-center shadow-sm border border-slate-100">
                                    <p className="text-[#224292] font-extrabold text-lg font-graphik">{s.value}</p>
                                    <p className="text-gray-500 text-[10px] font-semibold font-graphik">{s.label}</p>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                </div>
                
                {/* Research Programs Table Section */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="mt-16 w-full"
                >
                    <h3 className="text-2xl font-extrabold text-[#224292] mb-6 font-graphik text-center md:text-left">
                        Recent Research <span className="text-[#ffc107]">Programs & Workshops</span>
                    </h3>
                    
                    <div className="overflow-x-auto rounded-2xl shadow-sm border border-slate-200">
                        <table className="w-full text-left border-collapse min-w-[800px]">
                            <thead>
                                <tr className="bg-[#224292] text-white">
                                    <th className="p-4 font-bold text-sm text-center">S.NO.</th>
                                    <th className="p-4 font-bold text-sm">TITLE OF THE PROGRAM</th>
                                    <th className="p-4 font-bold text-sm text-center">MODE</th>
                                    <th className="p-4 font-bold text-sm">RESOURCE PERSON DETAILS</th>
                                    <th className="p-4 font-bold text-sm text-center">DATES</th>
                                    <th className="p-4 font-bold text-sm text-center">FACULTY BENEFITED</th>
                                    <th className="p-4 font-bold text-sm text-center">STUDENTS PARTICIPATED</th>
                                </tr>
                            </thead>
                            <tbody className="bg-white divide-y divide-slate-100">
                                {researchPrograms.map((program, idx) => (
                                    <tr key={idx} className="hover:bg-slate-50 transition-colors">
                                        <td className="p-4 text-sm text-slate-600 text-center font-medium">{program.sno}</td>
                                        <td className="p-4 text-sm text-[#224292] font-semibold">{program.title}</td>
                                        <td className="p-4 text-sm text-slate-600 text-center">
                                            <span className="px-2.5 py-1 bg-slate-100 text-slate-600 rounded-full text-[10px] font-bold tracking-wider">
                                                {program.mode}
                                            </span>
                                        </td>
                                        <td className="p-4 text-sm text-slate-600 leading-relaxed max-w-[250px]">{program.resourcePerson}</td>
                                        <td className="p-4 text-sm text-slate-600 text-center whitespace-nowrap">{program.dates}</td>
                                        <td className="p-4 text-sm text-slate-600 text-center font-medium">{program.facultyBenefited}</td>
                                        <td className="p-4 text-sm text-slate-600 text-center font-medium">{program.studentsParticipated}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </motion.div>
            </div>
        </div>
    )
}

export default ResearchPage
