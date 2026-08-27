import React, { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  FileText, ShieldCheck, ChevronRight, Download, ExternalLink, 
  Award, Calendar, Users, Layout, BookOpen, GraduationCap, 
  Settings, CheckCircle2, Info, Building2, UserCheck, 
  Trophy, Book, Clock, Activity, Zap, BarChart3, PieChart,
  ChevronDown, ChevronUp, Search, Filter
} from 'lucide-react'
import { Link } from 'react-router-dom'

// PDF Resources — served from public/ NOT bundled as JS imports
const ugcFile = '/assets/resources/UGC-CONFIRMENT.pdf'
const auFile = '/assets/resources/ANNA-UNIVERSITY.pdf'
const mechBos = '/assets/academics/BOS committe mambers/1.-MECH-BOS-Committee-Members.pdf'
const eceBos = '/assets/academics/BOS committe mambers/2.-ECE-BOS-Composition.pdf'
const eeeBos = '/assets/academics/BOS committe mambers/3.-EEE-BOS-Members.pdf'
const cseBos = '/assets/academics/BOS committe mambers/4.-CSE-BOS-Compositions.pdf'
const civilBos = '/assets/academics/BOS committe mambers/5.-Civil-BOS-Committee-Members-list.pdf'
const shBos = '/assets/academics/BOS committe mambers/6.-SH-BOS-Members-list.pdf'
const mbaBos = '/assets/academics/BOS committe mambers/7.-MBA-BOS-Members-list.pdf'

// Academic Council Minutes
const acm01 = '/assets/academics/Academic Council/ACM-01-MOM.pdf'
const acm02 = '/assets/academics/Academic Council/ACM-02-MOM.pdf'
const acm03 = '/assets/academics/Academic Council/ACM-03-MOM.pdf'
const acm04 = '/assets/academics/Academic Council/ACM-04-MOM.pdf'
const acm05 = '/assets/academics/Academic Council/ACM-05-MOM.pdf'
const acm06 = '/assets/academics/Academic Council/ACM-6-MOM.pdf'
const acm07 = '/assets/academics/Academic Council/ACM-7-MOM.pdf'
const acm08 = '/assets/academics/Academic Council/ACM-8-MOM.pdf'
import campusImg from '../assets/main/indian_campus_hero.webp'
import sixLegImg from '../assets/academics/6 LEG Model.jpg'
import autonoms5 from '../assets/Admissions/autonoms5.png'
const sixLegPdf = '/assets/academics/6 LEG Model-Details.pdf'

// AICTE Approval PDFs
const aicte25_26 = '/assets/idea lap/approvels/AICTE-2025-26.pdf'
const aicte24_25 = '/assets/idea lap/approvels/AICTE-2024-25.pdf'
const aicte23_24 = '/assets/idea lap/approvels/EOA-Report-2023-24.pdf'
const aicte22_23 = '/assets/idea lap/approvels/EOA-Report_22-23.pdf'
const aicte21_22 = '/assets/idea lap/approvels/EOA-Report_21-22.pdf'
const aicte20_21 = '/assets/idea lap/approvels/AICTE-2020-21.pdf'
const aicte15_16 = '/assets/idea lap/approvels/AICTE-2015-16.pdf'
const aicte14_15 = '/assets/idea lap/approvels/AICTE-2014-15.pdf'
const aicte13_14 = '/assets/idea lap/approvels/AICTE-2013-14.pdf'
const aicte12_13 = '/assets/idea lap/approvels/AICTE-2012-13.pdf'
const aicte11_12 = '/assets/idea lap/approvels/AICTE-2011-12.pdf'

// Academic Regulations
const beBtechReg = '/assets/Academic Regulations/BE_BTech_R2023_V5.pdf'
const meMtechMcaReg = '/assets/Academic Regulations/ME_MTech_MCA_R2023_V4.pdf'
const mbaReg = '/assets/Academic Regulations/MBA_R2023_V4.pdf'
const mbaIevReg = '/assets/Academic Regulations/MBA_IEV_R2024_V3.pdf'


// Import Curriculum & Syllabus PDFs
import mechPgSyllabus from '../assets/Curriculum Syllabus/1. MECH/PG - M.E.-ISE I-IV SEM (New).pdf'
import mechUgSyllabus from '../assets/Curriculum Syllabus/1. MECH/UG - MECH R23 - I - VI SEM - Syllabus.pdf'
import ecxSyllabus from '../assets/Curriculum Syllabus/10. ECX/B.E ELECTRONICS AND COMPUTER ENGINEERING SYALLABUS(I-IV).pdf'
import mbaGenSyllabus from '../assets/Curriculum Syllabus/11. MBA(General)/MBA (General ) - I - IV SEM SYLLABUS.pdf'
import mcaSyllabus from '../assets/Curriculum Syllabus/12. M.C.A/MCA - I - II SEM SYLLABUS.pdf'
import ecePgSyllabus from '../assets/Curriculum Syllabus/2. ECE/PG - AE SYLLABUS (I - IV SEM).pdf'
import eceUgSyllabus from '../assets/Curriculum Syllabus/2. ECE/UG - ECE - I - VI SEM- Syllabus.pdf'
import eeePgSyllabus from '../assets/Curriculum Syllabus/3. EEE/PG - PED - I - IV SEM SYLLABUS.pdf'
import eeeUgSyllabus from '../assets/Curriculum Syllabus/3. EEE/UG - EEE - I - VI SEM Syllabus.pdf'
import csePgSyllabus from '../assets/Curriculum Syllabus/4. CSE/PG- SE - I - IV SEM SYLLABUS.pdf'
import cseUgSyllabus from '../assets/Curriculum Syllabus/4. CSE/UG - CSE - I - VI SEM Syllabus.pdf'
import civilSyllabus from '../assets/Curriculum Syllabus/5. CIVIL/CIVIL - I - VI SEM SYLLABUS.pdf'
import itSyllabus from '../assets/Curriculum Syllabus/6. IT/IT - I - VI SEM SYLLABUS.pdf'
import csbsSyllabus from '../assets/Curriculum Syllabus/7. CSBS/CSBS - I - VI SEM SYLLABUS.pdf'
import aidsSyllabus from '../assets/Curriculum Syllabus/8. AI&DS/AI&DS I - VI SEM SYLLABUS.pdf'
import mbaIevSyllabus from '../assets/Curriculum Syllabus/9. MBA (IEV)/MBA (IEV) - I - IV SEM SYLLABUS.pdf'

const AutonomousPage = () => {
    const [activeTab, setActiveTab] = useState('overview')
    const [schedules, setSchedules] = useState([])
    const [loadingSchedules, setLoadingSchedules] = useState(true)
    const [expandedCommittee, setExpandedCommittee] = useState(null)
    const [showMinutes, setShowMinutes] = useState(null)
    const [isSticky, setIsSticky] = useState(false)
    const [selectedProgramme, setSelectedProgramme] = useState(null)
    const navRef = useRef(null)
    const sentinelRef = useRef(null)

    useEffect(() => {
        const handleScroll = () => {
            if (sentinelRef.current) {
                const rect = sentinelRef.current.getBoundingClientRect()
                setIsSticky(rect.top <= 104)
            }
        }
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    useEffect(() => {
        const fetchSchedules = async () => {
            try {
                const apiBase = import.meta.env.VITE_API_URL || 'http://localhost:8000'
                const response = await fetch(`${apiBase}/curriculum-records/?category=Academic Schedule&department=INSTITUTIONAL`)
                if (response.ok) {
                    const data = await response.json()
                    setSchedules(data)
                }
            } catch (error) {
                console.error('Error fetching schedules:', error)
            } finally {
                setLoadingSchedules(false)
            }
        }
        fetchSchedules()
    }, [])

    const tabs = [
        { name: 'Overview', id: 'overview', icon: Layout },
        { name: 'Approvals', id: 'approvals', icon: ShieldCheck },
        { name: 'Statutory Committees', id: 'committees', icon: Users },
        { name: 'CDDA', id: 'cdda', icon: Building2 },
        { name: 'Regulations', id: 'regulations', icon: FileText },
        { name: 'Curriculum', id: 'curriculum', icon: BookOpen },
        { name: 'Academic Schedule', id: 'schedule', icon: Calendar },
        { name: 'Credit Equivalence Committee', id: 'cec', icon: UserCheck },
        { name: 'Honours/Minor Degree', id: 'honours', icon: Trophy },
    ]

    const committees = [
        {
            name: 'Academic Council',
            desc: 'The Academic Council is the principal academic authority of an engineering college, especially in an autonomous institution. It is responsible for maintaining academic quality, planning curriculum, and ensuring effective teaching-learning processes.',
            functions: [
                'Highest academic authority of the institution.',
                'Approves curriculum, syllabus, and academic regulations.',
                'Revises courses based on industry needs and AICTE / UGC norms.',
                'Recommends new UG, PG, and certificate programmes.',
                'Approves credit system, attendance, grading, and degree requirements.',
                'Monitors teaching-learning process and academic quality.',
                'Reviews student performance and programme outcomes.',
                'Approves examination system and assessment methods.',
                'Supports internships, industrial visits, projects, and skill development.',
                'Considers feedback from students, faculty, alumni, and industry.',
                'Recommends major academic matters to the Governing Body.',
                'Ensures continuous improvement and academic excellence.',
                'Promotes research, innovation, patents, and publications.',
                'Approves academic calendar and exam schedules.',
                'Ensures NBA and NAAC quality standards.'
            ]
        },
        {
            name: 'Board of Studies (BoS)',
            desc: 'The Board of Studies (BoS) is the departmental academic body responsible for curriculum planning and development. It ensures the syllabus remains updated, industry-relevant, and aligned with AICTE / university norms, and forwards recommendations to the Academic Council for approval.',
            functions: [
                'Frames and revises curriculum and syllabus for the department.',
                'Recommends new courses, electives, and value-added programmes.',
                'Updates subjects based on industry trends and emerging technologies.',
                'Suggests laboratory courses, practical components, and project work.',
                'Recommends textbooks, reference books, and learning resources.',
                'Proposes teaching methods and assessment patterns.',
                'Reviews course outcomes and programme outcomes.',
                'Collects feedback from faculty, students, alumni, and industry experts.',
                'Ensures compliance with AICTE and university norms.',
                'Supports skill development, internships, and certification integration.',
                'Recommends academic improvements to the Academic Council.',
                'Promotes continuous curriculum enhancement and quality standards.'
            ]
        },
        {
            name: 'Finance Committee',
            desc: 'The Finance Committee is a statutory body of an autonomous institution responsible for planning, reviewing, and monitoring the financial resources of the institution. It ensures effective budgeting, proper utilization of funds, financial discipline, and supports academic growth through sound financial management. It also submits recommendations to the Governing Body for approval.',
            functions: [
                'Prepares and reviews annual budget of the institution.',
                'Recommends allocation of funds for departments and centres.',
                'Monitors income, expenditure, and financial performance.',
                'Reviews fees structure and other revenue sources.',
                'Recommends funding for laboratories, infrastructure, and academic facilities.',
                'Supports financial planning for new programmes and development projects.',
                'Reviews grants, scholarships, and sponsored project funds.',
                'Ensures proper utilization of funds as per norms and policies.',
                'Monitors purchase proposals and major capital expenditures.',
                'Ensures compliance with statutory audit and financial regulations.',
                'Reviews financial statements and audit reports.',
                'Recommends financial matters to the Governing Body.',
                'Promotes transparency, accountability, and financial sustainability.'
            ]
        }
    ]

    const legModel = [
        { id: 1, title: 'Engineering Fundamentals', color: 'bg-blue-500' },
        { id: 2, title: 'Domain Expertise', color: 'bg-emerald-500' },
        { id: 3, title: 'Emerging Technologies', color: 'bg-orange-500' },
        { id: 4, title: 'Employability Skills', color: 'bg-purple-500' },
        { id: 5, title: 'Innovation & Entrepreneurship', color: 'bg-rose-500' },
        { id: 6, title: 'Higher Order Thinking', color: 'bg-amber-500' },
    ]

    const minorDegrees = [
        { dept: 'AI&DS / CSBS', spec: 'Artificial Intelligence & Machine Learning' },
        { dept: 'CSE / IT', spec: 'Data Analytics' },
        { dept: 'ECE / EEE', spec: 'Internet of Things' },
        { dept: 'ECE', spec: 'Automotive Electronics' }
    ]

    const handleTabChange = (id) => {
        setActiveTab(id);
    };

    return (
        <div className="min-h-screen bg-[#F8FAFC] font-graphik text-[#1a1a1a]">
            {/* ─── HERO BANNER SECTION (DESKTOP: TITLE LEFT + IMAGE RIGHT TOUCHING END) ─── */}
            <div className="w-full bg-[#18357a] relative overflow-hidden border-b border-[#18357a]">
                <div className="w-full px-0 lg:pl-12 xl:pl-16 lg:pr-0">
                    <div className="flex flex-col lg:flex-row items-center justify-between gap-0 lg:gap-8">
                        {/* Desktop Only Left Heading */}
                        <div className="hidden lg:flex flex-col justify-center text-left py-6 xl:py-10 max-w-xl">
                            <h1 className="text-3xl xl:text-5xl font-extrabold text-white tracking-tight leading-tight uppercase">
                                Academic <span className="text-[#ffc107]">Autonomy</span>
                            </h1>
                            <p className="text-slate-200 text-xs xl:text-sm font-normal leading-relaxed mt-3">
                                Progressive, industry-focused academic structure with Choice Based Credit System (CBCS), Outcome-Based Education, and continuous curriculum enhancements.
                            </p>
                        </div>

                        {/* Image: Right on Desktop (touches the right end), Full-width Edge-to-Edge on Mobile */}
                        <div className="w-full lg:w-auto flex items-center justify-center lg:justify-end shrink-0 p-0">
                            <img 
                                src={autonoms5} 
                                className="w-full lg:w-auto h-auto max-h-[300px] sm:max-h-[340px] lg:max-h-[320px] object-cover sm:object-contain lg:object-right block ml-auto" 
                                alt="KIOT Academic Autonomy Banner" 
                            />
                        </div>
                    </div>
                </div>
            </div>

            {/* Mobile Tab Navigation - EXACTLY AS IT WAS BEFORE, ONLY SHOWN ON MOBILE */}
            <div className="lg:hidden bg-[#224292] z-[45] w-full border-t border-white/10 border-b sticky top-[108px] md:top-[108px]">
                <div className="max-w-[1400px] mx-auto px-2">
                    <div className="grid grid-cols-3 md:grid-cols-5 gap-1 py-4 w-full">
                        {tabs.map((tab) => (
                            <button
                                key={tab.id}
                                onClick={() => handleTabChange(tab.id)}
                                className={`flex items-center justify-center px-2 py-2 transition-all group shrink-0 rounded-lg border border-transparent ${
                                    activeTab === tab.id 
                                    ? 'bg-white text-[#224292] shadow-inner' 
                                    : 'bg-[#ffc107] hover:bg-white text-white hover:text-[#224292]'
                                }`}
                            >
                                <span className="text-[9px] font-black uppercase tracking-widest text-center leading-tight">{tab.name}</span>
                            </button>
                        ))}
                    </div>
                </div>
            </div>

            {/* Desktop and General Layout Container */}
            <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-12">
                <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-start">
                    
                    {/* Desktop Sidebar Tabs - Left Side (Visible only on lg and up) */}
                    <div className="hidden lg:block w-[300px] shrink-0 sticky top-[120px] self-start bg-white rounded-2xl border border-slate-200/80 shadow-lg shadow-slate-900/5 overflow-hidden z-20">
                        {/* Blue Header Bar */}
                        <div className="bg-[#18357a] px-5 py-4 text-white border-b border-[#18357a]">
                            <h1 className="text-lg font-bold text-white uppercase tracking-wider">Autonomous</h1>
                            <p className="text-[10px] font-semibold text-[#ffc107] uppercase tracking-widest mt-0.5">Academic Autonomy</p>
                        </div>
                        
                        <div className="p-3 flex flex-col gap-1.5">
                            {tabs.map((tab) => {
                                const IconComponent = tab.icon;
                                return (
                                    <button
                                        key={tab.id}
                                        onClick={() => handleTabChange(tab.id)}
                                        className={`flex items-center gap-2.5 w-full px-3.5 py-2.5 rounded-xl border transition-all text-left group cursor-pointer ${
                                            activeTab === tab.id 
                                            ? 'bg-[#18357a] text-white border-[#18357a] shadow-md shadow-[#18357a]/20' 
                                            : 'bg-slate-50/60 hover:bg-slate-100/80 text-slate-700 hover:text-[#18357a] border-slate-100 hover:border-[#18357a]/20'
                                        }`}
                                    >
                                        <IconComponent size={16} className={activeTab === tab.id ? 'text-[#ffc107]' : 'text-slate-400 group-hover:text-[#18357a]'} />
                                        <span className="text-[11px] font-bold uppercase tracking-wider leading-tight">{tab.name}</span>
                                    </button>
                                );
                            })}
                        </div>
                    </div>

                    {/* Main Content Area - Active Tab Content */}
                    <div className="flex-1 w-full min-h-[60vh] max-w-full overflow-hidden">
                        <AnimatePresence mode="wait">
                    {activeTab === 'overview' && (
                        <motion.section 
                            key="overview"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.3 }}
                            id="overview" 
                            className="scroll-mt-32"
                        >
                            <div className="max-w-4xl mx-auto mb-10 text-center">
                                <div className="mb-6">
                                    <h2 className="text-3xl sm:text-4xl font-bold text-[#18357a] tracking-tight">Academic Overview</h2>
                                </div>
                                
                                <div className="space-y-6 text-slate-700 text-sm sm:text-base font-normal leading-relaxed text-justify mb-16">
                                    <p>
                                        Knowledge Institute of Technology (KIOT), functioning with autonomous status, is dedicated to providing quality technical education through a progressive, industry-focused, and student-centered academic system. The autonomous framework enables the institution to design and continuously update its curriculum in accordance with the latest technological advancements, industry expectations, and global academic standards while adhering to the guidelines of UGC and AICTE.
                                    </p>
                                    <p>
                                        The institution follows an Outcome-Based Education (OBE) approach that emphasizes conceptual learning, practical exposure, innovation, research, and professional skill development. Curriculum and syllabi are periodically reviewed with inputs from academicians, industry experts, alumni, and employers to ensure students are equipped with both technical expertise and real-world problem-solving abilities.
                                    </p>
                                    <p>
                                        Knowledge Institute of Technology adopts a flexible Choice Based Credit System (CBCS), offering students opportunities to explore elective courses, interdisciplinary learning, internships, industrial training, project-based learning, value-added courses, and professional certifications. Modern teaching methodologies, digital learning platforms, continuous assessment practices, and experiential learning techniques are incorporated to create an engaging and effective academic environment.
                                    </p>
                                    <p>
                                        The institution also promotes research culture, entrepreneurship, and innovation through dedicated centres, industry collaborations, and advanced laboratory facilities. With experienced faculty members and a strong academic ecosystem, KIOT prepares students to become competent professionals, responsible citizens, and future leaders capable of meeting global challenges with confidence and excellence.
                                    </p>
                                </div>

                                <div className="pt-16 border-t border-slate-200">
                                <div className="w-full text-center">
                                    <h3 className="text-2xl sm:text-3xl font-bold mb-4 leading-tight max-w-4xl mx-auto">
                                        <span className="text-[#18357a]">Curriculum</span>{' '}
                                        <span className="text-[#ffc107]">Excellence</span>
                                    </h3>
                                    <div className="space-y-4 max-w-4xl mx-auto mb-12">
                                        <p className="text-sm sm:text-base font-normal text-slate-700 leading-relaxed text-justify">
                                            The KIOT offers a Unique and Structured Six-LEG Model Curriculum aligned with industry requirements integrating engineering fundamentals, domain expertise, emerging technologies, employability skills, innovation, and higher-order thinking among graduates.
                                        </p>
                                        <p className="text-sm font-medium text-[#18357a] leading-relaxed text-justify bg-blue-50/70 p-4 sm:p-5 rounded-xl border-l-4 border-[#18357a]">
                                            The Curriculum nurtures Technically Strong, Digitally Empowered, Industry-Ready Professionals with Higher-Order Thinking Skills (HOTS) and Multi-Disciplinary exposure.
                                        </p>
                                    </div>

                                    <div className="mt-12 flex justify-center">
                                        <img src={sixLegImg} alt="Six-Leg Model" className="max-w-5xl w-full rounded-2xl shadow-xl border border-slate-200/80" />
                                    </div>

                                    <div className="mt-16 text-left">
                                        <h4 className="text-xl sm:text-2xl font-bold text-[#18357a] mb-6 text-center">Curriculum Structure & Credit Distribution</h4>
                                        <div className="flex justify-center mb-8">
                                            <a href={sixLegPdf} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-3 bg-white border border-slate-200 rounded-xl p-2.5 pr-5 hover:border-[#18357a]/40 shadow-xs hover:shadow-md transition-all group">
                                                <div className="w-10 h-10 bg-red-50 rounded-lg flex items-center justify-center text-red-500 group-hover:scale-105 transition-transform">
                                                    <FileText size={20} />
                                                </div>
                                                <span className="font-semibold text-[#18357a] text-sm">6 LEG Model - Details</span>
                                                <Download size={16} className="text-slate-400 ml-1 group-hover:text-[#18357a] transition-colors" />
                                            </a>
                                        </div>
                                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                                            {[
                                                { title: 'BSEC', subtitle: 'Basic Science and Engineering Courses', points: ['To prepare the necessary basic concepts.'], credits: '25 Cr' },
                                                { title: 'PCC', subtitle: 'Professional Core Courses', points: ['To learn core domain concepts deeply'], credits: '50–60 Cr' },
                                                { title: 'IDT(EmTV)', subtitle: 'Inter Disciplinary Track / Emerging Technology Vertical', points: ['To learn interdisciplinary emerging technologies'], credits: '09 Cr' },
                                                { title: 'IRT (DIV)', subtitle: 'Industry Ready Track (Department Industry Vertical)', points: ['To become industry-ready in one domain'], credits: '18 Cr' },
                                                { title: 'DAIT', subtitle: 'Digital & Artificial Intelligence Track', points: ['To develop digital and AI competencies'], credits: '26 Cr' },
                                                { title: 'ICT', subtitle: 'Innovation and Creativity Track', points: ['To innovate, design, develop products and built Startups'], credits: '15 Cr' },
                                                { title: 'EE & LST', subtitle: 'Employability Enhancement & Life Skills Track', points: ['To enhance employability, professional and life skills'], credits: '13 Cr' },
                                                { title: 'TLP (HOTS)', subtitle: 'Teaching - Learning Practices with Higher Order Thinking Skills', points: ['To develop higher-order thinking skills'], credits: 'Integrated' },
                                                { title: 'Honours / Minor', subtitle: 'Degree options', points: ['Additional specialization opportunities', 'Supports advanced academic pathways'], credits: 'Optional' }
                                            ].map((track, i) => (
                                                <div key={i} className="bg-white p-5 rounded-xl border border-slate-200 shadow-xs hover:shadow-md hover:border-[#18357a]/30 transition-all group flex flex-col justify-between">
                                                    <div>
                                                        <div className="flex flex-col mb-3 gap-0.5">
                                                            <div className="flex items-center justify-between">
                                                                <h5 className="text-base font-bold text-[#18357a]">{track.title}</h5>
                                                                <span className="text-xs font-semibold px-2 py-0.5 rounded-md bg-blue-50 text-[#18357a] border border-blue-100">{track.credits}</span>
                                                            </div>
                                                            <p className="text-xs font-normal text-slate-500 leading-snug">{track.subtitle}</p>
                                                        </div>
                                                        <ul className="space-y-2 pt-2 border-t border-slate-100">
                                                            {track.points.map((p, j) => (
                                                                <li key={j} className="flex items-start gap-2 text-xs font-normal text-slate-700 leading-relaxed">
                                                                    <div className="w-3.5 h-3.5 bg-blue-50 rounded-full flex items-center justify-center text-[#18357a] shrink-0 mt-0.5">
                                                                        <CheckCircle2 size={10} />
                                                                    </div>
                                                                    {p}
                                                                </li>
                                                            ))}
                                                        </ul>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>

                                        <div className="mt-10 p-6 sm:p-8 bg-[#18357a] rounded-2xl text-white flex flex-col sm:flex-row justify-between items-center gap-6 shadow-lg shadow-[#18357a]/15">
                                            <div className="text-center sm:text-left">
                                                <h5 className="text-xl sm:text-2xl font-bold mb-1">Total Credit Requirement</h5>
                                                <p className="text-xs sm:text-sm text-slate-200 font-normal">Overall Academic Completion Milestone</p>
                                            </div>
                                            <div className="text-2xl sm:text-3xl font-bold text-[#ffc107]">
                                                160–170 Credits
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                </div>
                                </div>
                            </motion.section>
                        )}

                        {activeTab === 'approvals' && (
                            <motion.section 
                                key="approvals"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                transition={{ duration: 0.2 }}
                                id="approvals" 
                                className="scroll-mt-32"
                            >
                                <div className="text-center mb-8">
                                    <h2 className="text-3xl sm:text-4xl font-bold text-[#18357a] tracking-tight">Formal Approvals</h2>
                                </div>

                            <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto mb-12">
                                {[
                                    { name: 'UGC', full: 'University Grants Commission', file: ugcFile },
                                    { name: 'Anna University', full: 'Affiliated University', file: auFile }
                                ].map((app, i) => (
                                    <div key={i} className="p-6 bg-white border border-slate-200 rounded-2xl shadow-xs hover:shadow-md hover:border-[#18357a]/40 transition-all group flex flex-col items-center text-center">
                                        <div className="w-14 h-14 bg-red-50 rounded-xl flex items-center justify-center mb-3 text-red-600 transition-all">
                                            <FileText size={28} />
                                        </div>
                                        <h3 className="text-lg font-bold text-[#18357a] mb-0.5">{app.name}</h3>
                                        <p className="text-xs font-normal text-slate-500 mb-5 leading-tight">{app.full}</p>
                                        
                                        <button 
                                            onClick={() => app.file && window.open(app.file, '_blank')}
                                            disabled={!app.file}
                                            className={`mt-auto w-full py-2.5 rounded-xl font-semibold text-xs transition-all flex items-center justify-center gap-2 cursor-pointer ${
                                                app.file 
                                                ? 'bg-[#18357a] text-white hover:bg-[#ffc107] hover:text-[#18357a] shadow-xs' 
                                                : 'bg-slate-50 text-slate-400 cursor-not-allowed border border-slate-200'
                                            }`}
                                        >
                                            {app.file ? 'View Document' : 'Not Available'}
                                            {app.file && <ChevronRight size={14} />}
                                        </button>
                                    </div>
                                ))}
                            </div>

                            <div className="mt-12 max-w-3xl mx-auto">
                                <div className="flex items-center justify-center gap-3 mb-6">
                                    <div className="h-0.5 w-8 bg-[#ffc107] rounded-full" />
                                    <h3 className="text-xl sm:text-2xl font-bold text-[#18357a] tracking-tight">AICTE Approvals</h3>
                                    <div className="h-0.5 w-8 bg-[#ffc107] rounded-full" />
                                </div>
                                
                                <div className="bg-white border border-slate-200 rounded-xl shadow-lg shadow-slate-900/5 overflow-hidden">
                                    <table className="w-full text-left border-collapse font-graphik">
                                        <thead>
                                            <tr className="bg-[#18357a] text-white">
                                                <th className="py-3.5 px-6 text-xs font-semibold uppercase tracking-wider">Academic Year</th>
                                                <th className="py-3.5 px-6 text-xs font-semibold uppercase tracking-wider">Approval Status</th>
                                                <th className="py-3.5 px-6 text-xs font-semibold uppercase tracking-wider text-right">Action</th>
                                            </tr>
                                        </thead>
                                        <tbody className="divide-y divide-slate-100 text-sm">
                                            {[
                                                { year: '2025-26', status: 'Extension of Approval (EoA)', file: aicte25_26 },
                                                { year: '2024-25', status: 'Extension of Approval (EoA)', file: aicte24_25 },
                                                { year: '2023-24', status: 'Extension of Approval (EoA)', file: aicte23_24 },
                                                { year: '2022-23', status: 'Extension of Approval (EoA)', file: aicte22_23 },
                                                { year: '2021-22', status: 'Extension of Approval (EoA)', file: aicte21_22 },
                                                { year: '2020-21', status: 'Extension of Approval (EoA)', file: aicte20_21 },
                                                { year: '2015-16', status: 'Extension of Approval (EoA)', file: aicte15_16 },
                                                { year: '2014-15', status: 'Extension of Approval (EoA)', file: aicte14_15 },
                                                { year: '2013-14', status: 'Extension of Approval (EoA)', file: aicte13_14 },
                                                { year: '2012-13', status: 'Extension of Approval (EoA)', file: aicte12_13 },
                                                { year: '2011-12', status: 'Extension of Approval (EoA)', file: aicte11_12 }
                                            ].map((row, idx) => (
                                                <tr key={idx} className="odd:bg-white even:bg-[#f4f6fa] border-b border-slate-200/70 hover:bg-slate-100/80 transition-colors">
                                                    <td className="py-3.5 px-6 font-semibold text-[#18357a]">{row.year}</td>
                                                    <td className="py-3.5 px-6 font-normal text-slate-700">{row.status}</td>
                                                    <td className="py-3.5 px-6 text-right">
                                                        <button
                                                            onClick={() => window.open(row.file, '_blank')}
                                                            className="inline-flex items-center gap-1.5 bg-[#18357a]/10 text-[#18357a] hover:bg-[#18357a] hover:text-white px-3 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer"
                                                        >
                                                            View PDF <ExternalLink size={12} />
                                                        </button>
                                                    </td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </motion.section>
                    )}

                    {activeTab === 'committees' && (
                        <motion.section 
                            key="committees"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.3 }}
                            id="committees" 
                            className="scroll-mt-32"
                        >
                            <div className="text-center mb-10">
                                <h2 className="text-3xl sm:text-4xl font-bold text-[#18357a] tracking-tight">Statutory Committees</h2>
                            </div>
                            
                            <div className="space-y-16">
                                {committees.map((c, i) => (
                                    <div key={i} className="space-y-6">
                                        <div className="max-w-3xl">
                                            <h3 className="text-2xl font-bold text-[#18357a] mb-2 leading-tight">
                                                {c.name}
                                            </h3>
                                            <p className="text-sm font-normal text-slate-700 leading-relaxed">{c.desc}</p>
                                        </div>

                                        <div>
                                            <h4 className="text-xs font-bold uppercase tracking-wider text-[#18357a] mb-4">
                                                Primary Functions & Responsibilities
                                            </h4>
                                            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-3">
                                                {c.functions.map((f, j) => (
                                                    <div key={j} className="flex items-start gap-2.5 py-1">
                                                        <div className="w-4 h-4 bg-emerald-50 rounded-full flex items-center justify-center text-emerald-600 shrink-0 mt-0.5">
                                                            <CheckCircle2 size={11} />
                                                        </div>
                                                        <p className="text-xs sm:text-sm font-normal text-slate-700 leading-relaxed">{f}</p>
                                                    </div>
                                                ))}
                                            </div>
                                            {c.name === 'Board of Studies (BoS)' && (
                                                <div className="mt-8 overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm">
                                                    <div className="overflow-x-auto">
                                                        <table className="w-full text-left border-collapse font-graphik text-sm">
                                                            <thead>
                                                                <tr className="bg-[#18357a] text-white">
                                                                    <th className="py-3 px-6 font-semibold text-xs uppercase tracking-wider text-center w-20">S.No.</th>
                                                                    <th className="py-3 px-6 font-semibold text-xs uppercase tracking-wider">Board of Studies (BoS)</th>
                                                                    <th className="py-3 px-6 font-semibold text-xs uppercase tracking-wider text-center w-36">Committee</th>
                                                                </tr>
                                                            </thead>
                                                            <tbody>
                                                                {[
                                                                    { id: 1, name: 'Faculty of Mechanical Engineering (MECH)', link: mechBos },
                                                                    { id: 2, name: 'Faculty of Electronics and Communication Engineering (ECE)', link: eceBos },
                                                                    { id: 3, name: 'Faculty of Electrical Engineering (EEE)', link: eeeBos },
                                                                    { id: 4, name: 'Faculty of Computer Science and Engineering (CSE+)', link: cseBos },
                                                                    { id: 5, name: 'Faculty of Civil Engineering', link: civilBos },
                                                                    { id: 6, name: 'Faculty of Science and Humanities', link: shBos },
                                                                    { id: 7, name: 'Faculty of Management Sciences', link: mbaBos },
                                                                ].map((row, index) => (
                                                                    <tr key={index} className="odd:bg-white even:bg-[#f4f6fa] border-b border-slate-200/70 hover:bg-slate-100/80 transition-colors">
                                                                        <td className="py-3 px-6 text-slate-700 text-center font-medium">{row.id}</td>
                                                                        <td className="py-3 px-6 text-slate-800 font-normal">{row.name}</td>
                                                                        <td className="py-3 px-6 text-center">
                                                                            <a href={row.link} target="_blank" rel="noopener noreferrer" className="text-[#18357a] font-semibold hover:text-[#ffc107] hover:underline text-xs">
                                                                                Click here
                                                                            </a>
                                                                        </td>
                                                                    </tr>
                                                                ))}
                                                            </tbody>
                                                        </table>
                                                    </div>
                                                </div>
                                            )}
                                            {c.name === 'Academic Council' && (
                                                <div className="mt-8 overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm">
                                                    <div className="overflow-x-auto">
                                                        <table className="w-full text-left border-collapse font-graphik text-sm">
                                                            <thead>
                                                                <tr className="bg-[#18357a] text-white">
                                                                    <th className="py-3 px-6 font-semibold text-xs uppercase tracking-wider text-center w-1/3">Meeting No.</th>
                                                                    <th className="py-3 px-6 font-semibold text-xs uppercase tracking-wider text-center w-1/3">Date</th>
                                                                    <th className="py-3 px-6 font-semibold text-xs uppercase tracking-wider text-center w-1/3">Minutes of Meeting</th>
                                                                </tr>
                                                            </thead>
                                                            <tbody>
                                                                {[
                                                                    { no: 'ACM-01', date: '08.07.2023', link: acm01 },
                                                                    { no: 'ACM-02', date: '09.09.2023', link: acm02 },
                                                                    { no: 'ACM-03', date: '23.01.2024', link: acm03 },
                                                                    { no: 'ACM-04', date: '06.07.2024', link: acm04 },
                                                                    { no: 'ACM-05', date: '11.01.2025', link: acm05 },
                                                                    { no: 'ACM-06', date: '23.06.2025', link: acm06 },
                                                                    { no: 'ACM-07', date: '11.10.2025', link: acm07 },
                                                                    { no: 'ACM-08', date: '15.12.2025', link: acm08 },
                                                                ].map((row, index) => (
                                                                    <tr key={index} className="odd:bg-white even:bg-[#f4f6fa] border-b border-slate-200/70 hover:bg-slate-100/80 transition-colors">
                                                                        <td className="py-3 px-6 text-slate-700 text-center font-medium">{row.no}</td>
                                                                        <td className="py-3 px-6 text-slate-700 text-center font-normal">{row.date}</td>
                                                                        <td className="py-3 px-6 text-center">
                                                                            <a href={row.link} target="_blank" rel="noopener noreferrer" className="text-[#18357a] font-semibold hover:text-[#ffc107] hover:underline text-xs">
                                                                                Click here
                                                                            </a>
                                                                        </td>
                                                                    </tr>
                                                                ))}
                                                            </tbody>
                                                        </table>
                                                    </div>
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </motion.section>
                    )}

                    {activeTab === 'cdda' && (
                        <motion.section 
                            key="cdda"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.3 }}
                            id="cdda" 
                            className="scroll-mt-32"
                        >
                            <div className="space-y-8">
                                <div className="flex flex-col lg:flex-row justify-between items-start gap-8">
                                    <div className="max-w-3xl">
                                        <h3 className="text-2xl sm:text-3xl font-bold text-[#18357a] mb-3 leading-tight">
                                            Centre for Curriculum Design Delivery and Assessment (CDDA)
                                        </h3>
                                        <p className="text-sm font-normal text-slate-700 leading-relaxed text-justify">
                                            The Centre for Curriculum Design, Delivery and Assessment (CDDA) coordinates and strengthens the academic processes of the Institute. It ensures quality curriculum planning, effective teaching-learning, and transparent assessment practices in alignment with institutional objectives and regulatory standards.
                                        </p>
                                    </div>
                                    
                                    <div className="flex items-center gap-4 px-5 py-3.5 bg-white border border-slate-200 rounded-xl shadow-xs shrink-0">
                                        <div className="w-10 h-10 bg-blue-50 rounded-xl flex items-center justify-center text-[#18357a]">
                                            <Building2 size={20} />
                                        </div>
                                        <div>
                                            <p className="text-[10px] font-bold uppercase tracking-wider text-[#ffc107] mb-0.5">Director – CDDA</p>
                                            <span className="text-xs font-bold text-[#18357a]">Dr. S. Kalpana Devi</span>
                                        </div>
                                    </div>
                                </div>

                                <div>
                                    <h4 className="text-xs font-bold uppercase tracking-wider text-[#18357a] mb-4">
                                        Primary Functions & Responsibilities
                                    </h4>
                                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3.5">
                                        {[
                                            'Formation of Regulations',
                                            'Design and revise curriculum for UG and PG programmes.',
                                            'Organize Boards of Studies, Standing Committee, and Academic Council meetings.',
                                            'Fixing of Academic Schedule.',
                                            'Issue of Attested copies of the syllabus to the departments.',
                                            'Monitor curriculum delivery through lesson plans and reviews.',
                                            'Promote innovative and industry-oriented teaching practices.',
                                            'Coordinate internal and end-semester assessments.',
                                            'Maintain academic records and compliance documents.',
                                            'Support continuous quality improvement in academics.'
                                        ].map((f, j) => (
                                            <div key={j} className="flex items-start gap-2.5 p-3.5 bg-white rounded-xl border border-slate-200/80 shadow-xs hover:border-[#18357a]/30 transition-all">
                                                <div className="w-4 h-4 bg-emerald-50 rounded-full flex items-center justify-center text-emerald-600 shrink-0 mt-0.5">
                                                    <CheckCircle2 size={11} />
                                                </div>
                                                <p className="text-xs sm:text-sm font-normal text-slate-700 leading-snug">{f}</p>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </motion.section>
                    )}

                    {activeTab === 'regulations' && (
                        <motion.section 
                            key="regulations"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.3 }}
                            id="regulations" 
                            className="scroll-mt-32"
                        >
                            <div className="mb-8">
                                <div className="flex items-center gap-3 mb-2">
                                    <div className="w-10 h-10 bg-amber-50 rounded-xl flex items-center justify-center text-amber-600">
                                        <FileText size={22} />
                                    </div>
                                    <h2 className="text-2xl sm:text-3xl font-bold text-[#18357a]">Academic Regulations</h2>
                                </div>
                                <p className="text-sm font-normal text-slate-600">Guidelines and policies governing the academic journey of every KIOT graduate.</p>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-6">
                                {[
                                    { title: 'B.E. / B.Tech', file: beBtechReg },
                                    { title: 'M.E. / M.Tech / M.C.A', file: meMtechMcaReg },
                                    { title: 'MBA', file: mbaReg },
                                    { title: 'MBA (IEV)', file: mbaIevReg }
                                ].map((reg, i) => (
                                    <button 
                                        key={i} 
                                        onClick={() => window.open(reg.file, '_blank')}
                                        className="flex items-center gap-3.5 p-4 bg-white border border-slate-200/80 rounded-xl shadow-xs hover:border-[#18357a]/40 hover:bg-slate-50 transition-all group w-full text-left cursor-pointer"
                                    >
                                        <div className="w-9 h-9 bg-red-50 rounded-lg flex items-center justify-center text-red-500 shrink-0 group-hover:bg-red-500 group-hover:text-white transition-all">
                                            <FileText size={18} />
                                        </div>
                                        <div className="flex-1 min-w-0">
                                            <p className="text-xs sm:text-sm font-semibold text-[#18357a] leading-tight">{reg.title}</p>
                                        </div>
                                        <ExternalLink size={14} className="text-slate-400 group-hover:text-[#18357a] transition-colors shrink-0" />
                                    </button>
                                ))}
                            </div>
                        </motion.section>
                      )}

                    
                    {activeTab === 'curriculum' && (
                        <motion.section 
                            key="curriculum"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.3 }}
                            id="curriculum" 
                            className="scroll-mt-32"
                        >
                            <div className="mb-8">
                                <div className="flex items-center gap-3 mb-2">
                                    <div className="w-10 h-10 bg-blue-50 rounded-xl flex items-center justify-center text-blue-600 shrink-0">
                                        <BookOpen size={22} />
                                    </div>
                                    <h2 className="text-2xl sm:text-3xl font-bold text-[#18357a]">Curriculum & Syllabi</h2>
                                </div>
                                <p className="text-sm font-normal text-slate-600">Department-wise curriculum design and syllabus structure for all autonomous degree programmes.</p>
                            </div>

                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 mt-6">
                                {[
                                    {
                                        name: 'Computer Science and Engineering',
                                        code: 'CSE',
                                        syllabus: [
                                            { title: 'UG Syllabus (I - VI Sem)', file: cseUgSyllabus },
                                            { title: 'PG Syllabus (I - IV Sem)', file: csePgSyllabus }
                                        ]
                                    },
                                    {
                                        name: 'Electronics and Communication Engineering',
                                        code: 'ECE',
                                        syllabus: [
                                            { title: 'UG Syllabus (I - VI Sem)', file: eceUgSyllabus },
                                            { title: 'PG Syllabus (I - IV Sem)', file: ecePgSyllabus }
                                        ]
                                    },
                                    {
                                        name: 'Electrical and Electronics Engineering',
                                        code: 'EEE',
                                        syllabus: [
                                            { title: 'UG Syllabus (I - VI Sem)', file: eeeUgSyllabus },
                                            { title: 'PG Syllabus (I - IV Sem)', file: eeePgSyllabus }
                                        ]
                                    },
                                    {
                                        name: 'Mechanical Engineering',
                                        code: 'MECH',
                                        syllabus: [
                                            { title: 'UG Syllabus (I - VI Sem)', file: mechUgSyllabus },
                                            { title: 'PG Syllabus (I - IV Sem)', file: mechPgSyllabus }
                                        ]
                                    },
                                    {
                                        name: 'Information Technology',
                                        code: 'IT',
                                        syllabus: [
                                            { title: 'UG Syllabus (I - VI Sem)', file: itSyllabus }
                                        ]
                                    },
                                    {
                                        name: 'Civil Engineering',
                                        code: 'CIVIL',
                                        syllabus: [
                                            { title: 'UG Syllabus (I - VI Sem)', file: civilSyllabus }
                                        ]
                                    },
                                    {
                                        name: 'Artificial Intelligence & Data Science',
                                        code: 'AI&DS',
                                        syllabus: [
                                            { title: 'UG Syllabus (I - VI Sem)', file: aidsSyllabus }
                                        ]
                                    },
                                    {
                                        name: 'Computer Science & Business Systems',
                                        code: 'CSBS',
                                        syllabus: [
                                            { title: 'UG Syllabus (I - VI Sem)', file: csbsSyllabus }
                                        ]
                                    },
                                    {
                                        name: 'Electronics and Computer Engineering',
                                        code: 'ECX',
                                        syllabus: [
                                            { title: 'UG Syllabus (I - IV Sem)', file: ecxSyllabus }
                                        ]
                                    },
                                    {
                                        name: 'Master of Business Administration (General)',
                                        code: 'MBA',
                                        syllabus: [
                                            { title: 'PG Syllabus (I - IV Sem)', file: mbaGenSyllabus }
                                        ]
                                    },
                                    {
                                        name: 'Master of Business Administration (IEV)',
                                        code: 'MBA (IEV)',
                                        syllabus: [
                                            { title: 'PG Syllabus (I - IV Sem)', file: mbaIevSyllabus }
                                        ]
                                    },
                                    {
                                        name: 'Master of Computer Applications',
                                        code: 'MCA',
                                        syllabus: [
                                            { title: 'PG Syllabus (I - II Sem)', file: mcaSyllabus }
                                        ]
                                    }
                                ].map((dept, i) => (
                                    <div key={i} className="bg-white border border-slate-200/80 rounded-xl p-5 shadow-xs hover:border-[#18357a]/30 transition-all flex flex-col justify-between font-graphik h-full">
                                        <div>
                                            <div className="flex items-start justify-between gap-4 mb-4 border-b border-slate-100 pb-3">
                                                <h3 className="text-sm sm:text-base font-bold text-[#18357a] leading-snug" title={dept.name}>{dept.name}</h3>
                                            </div>
                                            <div className="space-y-2">
                                                {dept.syllabus.map((syl, idx) => (
                                                    <button 
                                                        key={idx} 
                                                        onClick={() => window.open(syl.file, '_blank')}
                                                        className="flex items-center gap-3 w-full p-2.5 bg-slate-50 hover:bg-red-50/60 hover:text-red-600 rounded-lg text-slate-700 text-xs font-medium transition-all group border border-slate-100 hover:border-red-100 cursor-pointer"
                                                    >
                                                        <FileText size={16} className="text-red-500 shrink-0 group-hover:scale-105 transition-transform" />
                                                        <span className="flex-1 text-left leading-relaxed">{syl.title}</span>
                                                    </button>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </motion.section>
                    )}

                    {activeTab === 'schedule' && (
                        <motion.section 
                            key="schedule"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.3 }}
                            id="schedule" 
                            className="scroll-mt-32"
                        >
                            <div className="max-w-[1400px] mx-auto">
                                <div className="flex items-center gap-3 mb-2">
                                    <div className="w-10 h-10 bg-amber-50 rounded-xl flex items-center justify-center text-amber-600">
                                        <Calendar size={22} />
                                    </div>
                                    <h2 className="text-2xl sm:text-3xl font-bold text-[#18357a]">Academic Schedule</h2>
                                </div>
                                <p className="text-sm font-normal text-slate-600 max-w-xl mb-8">Institutional academic calendar and semester schedules for all degree programmes.</p>

                                {loadingSchedules ? (
                                    <div className="flex flex-col items-center py-16 bg-white border border-slate-200 rounded-2xl shadow-xs">
                                        <div className="w-8 h-8 border-3 border-[#ffc107] border-t-transparent rounded-full animate-spin mb-3" />
                                        <span className="text-xs font-medium text-slate-500">Loading Records...</span>
                                    </div>
                                ) : (
                                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                                        {schedules.map((row, i) => (
                                            <button 
                                                key={i} 
                                                onClick={() => window.open(row.pdf_url, '_blank')}
                                                className="flex items-center gap-3.5 p-4 bg-white border border-slate-200/80 rounded-xl shadow-xs hover:border-[#18357a]/40 hover:bg-slate-50 transition-all group w-full text-left cursor-pointer"
                                            >
                                                <div className="w-9 h-9 bg-red-50 rounded-lg flex items-center justify-center text-red-500 shrink-0 group-hover:bg-red-500 group-hover:text-white transition-all">
                                                    <FileText size={18} />
                                                </div>
                                                <div className="flex-1 min-w-0">
                                                    <p className="text-xs sm:text-sm font-semibold text-[#18357a] truncate leading-tight">{row.year_or_version}</p>
                                                    <p className="text-[11px] font-normal text-slate-500 mt-0.5">{row.semester}</p>
                                                </div>
                                                <Download size={14} className="text-slate-400 group-hover:text-[#18357a] transition-colors shrink-0" />
                                            </button>
                                        ))}
                                        {schedules.length === 0 && (
                                            <div className="col-span-full py-12 text-center bg-slate-50 rounded-xl border border-dashed border-slate-200">
                                                <span className="text-xs font-medium text-slate-500">No schedules available.</span>
                                            </div>
                                        )}
                                    </div>
                                )}
                            </div>
                        </motion.section>
                    )}

                    {activeTab === 'cec' && (
                        <motion.section 
                            key="cec"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.3 }}
                            id="cec" 
                            className="scroll-mt-32"
                        >
                            <div className="grid lg:grid-cols-12 gap-8 items-start">
                                <div className="lg:col-span-5">
                                    <div className="bg-[#18357a] p-6 sm:p-8 rounded-2xl text-white shadow-xl h-full flex flex-col justify-between">
                                        <div>
                                            <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center mb-6">
                                                <UserCheck size={24} className="text-[#ffc107]" />
                                            </div>
                                            <h3 className="text-2xl sm:text-3xl font-bold tracking-tight mb-3 leading-tight">Credit Equivalence Committee (CEC)</h3>
                                            <p className="text-slate-200 text-xs sm:text-sm font-normal leading-relaxed mb-8">
                                                Institute-level committee constituted to evaluate and approve credit equivalence requests for external, online, and special academic courses.
                                            </p>
                                        </div>
                                        <div className="space-y-2.5 pt-6 border-t border-white/15">
                                            <p className="text-xs font-bold text-[#ffc107] uppercase tracking-wider mb-2">Committee Composition</p>
                                            {[
                                                { role: 'Chairman', name: 'Senior Professor nominated by the Principal' },
                                                { role: 'Convenor', name: 'Director, CDDA' },
                                                { role: 'Member', name: 'Concerned Head of the Department' }
                                            ].map((m, i) => (
                                                <div key={i} className="flex items-center gap-3 p-3 bg-white/10 rounded-xl border border-white/10">
                                                    <div className="w-7 h-7 bg-white/10 rounded-lg flex items-center justify-center shrink-0">
                                                        <UserCheck size={14} className="text-[#ffc107]" />
                                                    </div>
                                                    <div>
                                                        <p className="text-[10px] font-semibold uppercase text-slate-300">{m.role}</p>
                                                        <p className="text-xs font-medium text-white">{m.name}</p>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                                <div className="lg:col-span-7">
                                    <div className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 shadow-xs h-full">
                                        <h4 className="text-xl sm:text-2xl font-bold text-[#18357a] mb-6">Functions of CEC</h4>
                                        <div className="grid grid-cols-1 gap-3">
                                            {[
                                                'Approve credit transfer for online, off-campus, hybrid, and external courses.',
                                                'Decide if external courses can replace KIOT curriculum courses.',
                                                'Fix credit value, assessment method, marks conversion, and grades.',
                                                'Approve foreign language course credits under elective category.',
                                                'Approve addition or exemption of courses for transfer students.',
                                                'Consider changes in elective streams and alternate completion options.',
                                                'Review company certification and industry courses for academic credits.',
                                                'Ensure external courses meet quality standards and regulations.',
                                                'Recommend approved credits to CDDA / COE for student records.',
                                                'Update guidelines based on university and regulatory changes.'
                                            ].map((func, i) => (
                                                <div key={i} className="flex items-start gap-3 p-3 rounded-xl bg-slate-50/70 border border-slate-100 hover:bg-blue-50/30 transition-all">
                                                    <div className="w-5 h-5 rounded-md bg-emerald-50 flex items-center justify-center text-emerald-600 shrink-0 mt-0.5">
                                                        <CheckCircle2 size={12} />
                                                    </div>
                                                    <p className="text-xs sm:text-sm font-normal text-slate-700 leading-relaxed">{func}</p>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion.section>
                    )}

                    {activeTab === 'honours' && (
                        <motion.section 
                            key="honours"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.3 }}
                            id="honours" 
                            className="scroll-mt-32"
                        >
                            <div className="text-center max-w-3xl mx-auto mb-10">
                                <div className="inline-flex items-center gap-2 px-3 py-1 bg-amber-50 rounded-full mb-3 border border-amber-200/60">
                                    <Trophy size={14} className="text-amber-600" />
                                    <span className="text-[11px] font-semibold text-amber-700 uppercase tracking-wider">Optional Excellence Pathway</span>
                                </div>
                                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#18357a] tracking-tight mb-2">Advanced Degree Specializations</h2>
                                <p className="text-slate-600 text-xs sm:text-sm font-normal leading-relaxed">
                                    Elevate your professional profile with additional credits in core verticals or multidisciplinary domains.
                                </p>
                            </div>

                            <div className="grid md:grid-cols-2 gap-6 sm:gap-8 mb-10">
                                {/* Honours Degree Card */}
                                <div className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-7 shadow-xs relative overflow-hidden group hover:shadow-md hover:border-[#18357a]/40 transition-all">
                                    <div className="relative z-10">
                                        <div className="flex items-center gap-4 mb-6">
                                            <div className="w-12 h-12 bg-amber-50 rounded-xl flex items-center justify-center text-amber-600 shrink-0">
                                                <Trophy size={24} />
                                            </div>
                                            <div>
                                                <h3 className="text-xl font-bold text-[#18357a]">Honours Degree</h3>
                                                <p className="text-xs font-medium text-slate-500">No history of arrears</p>
                                            </div>
                                        </div>
                                        <p className="text-xs sm:text-sm font-normal text-slate-700 leading-relaxed mb-6">
                                            Earn an additional 18 credits within the <span className="font-semibold text-[#18357a]">SAME Faculty</span> to gain deep specialized expertise in your primary discipline.
                                        </p>
                                        <div className="space-y-3 mb-6">
                                            {[
                                                'Earn 18 additional credits from same programme verticals.',
                                                'Maximum 6 online credits (NPTEL) above regular limit.',
                                                'Minimum CGPA of 7.50 at end of 3rd sem with no arrears.',
                                                'Must pass all courses in the first attempt.',
                                                'Option to convert to Professional Electives if incomplete.',
                                                'Higher grades considered for CGPA if credits exceed 18.'
                                            ].map((item, i) => (
                                                <div key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
                                                    <div className="w-1.5 h-1.5 bg-amber-500 rounded-full mt-1.5 shrink-0" />
                                                    <span className="font-normal leading-relaxed">{item}</span>
                                                </div>
                                            ))}
                                        </div>
                                        <div className="p-4 bg-slate-50 rounded-xl flex items-center justify-between border border-slate-100">
                                            <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Requirement</span>
                                            <span className="text-sm sm:text-base font-bold text-[#18357a]">18 Credits</span>
                                        </div>
                                    </div>
                                </div>

                                {/* Minor Degree Card */}
                                <div className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-7 shadow-xs relative overflow-hidden group hover:shadow-md hover:border-[#18357a]/40 transition-all">
                                    <div className="relative z-10">
                                        <div className="flex items-center gap-4 mb-6">
                                            <div className="w-12 h-12 bg-emerald-50 rounded-xl flex items-center justify-center text-emerald-600 shrink-0">
                                                <Award size={24} />
                                            </div>
                                            <div>
                                                <h3 className="text-xl font-bold text-[#18357a]">Minor Degree</h3>
                                                <p className="text-xs font-medium text-slate-500">Cross-Disciplinary Pathway</p>
                                            </div>
                                        </div>
                                        <p className="text-xs sm:text-sm font-normal text-slate-700 leading-relaxed mb-6">
                                            Broaden your horizons by earning 18 additional credits from a <span className="font-semibold text-[#18357a]">DIFFERENT Faculty</span> or Discipline.
                                        </p>
                                        <div className="space-y-3 mb-6">
                                            {[
                                                'Earn 18 additional credits from OTHER programmes.',
                                                'Maximum 6 online credits (NPTEL) above regular limit.',
                                                'Minimum CGPA of 7.50 at end of 3rd sem with no arrears.',
                                                'Option to convert to Open Electives if incomplete.',
                                                'Excess credits treated as Audit Courses.'
                                            ].map((item, i) => (
                                                <div key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
                                                    <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full mt-1.5 shrink-0" />
                                                    <span className="font-normal leading-relaxed">{item}</span>
                                                </div>
                                            ))}
                                        </div>
                                        <div className="p-4 bg-slate-50 rounded-xl flex items-center justify-between border border-slate-100">
                                            <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Requirement</span>
                                            <span className="text-sm sm:text-base font-bold text-[#18357a]">18 Credits</span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Minor Specialization Domains Table */}
                            <div className="max-w-4xl mx-auto">
                                <div className="bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-lg shadow-slate-900/5">
                                    <div className="bg-[#18357a] p-5 sm:p-6 text-white flex items-center justify-between">
                                        <div>
                                            <h4 className="text-lg sm:text-xl font-bold tracking-tight text-white">Minor Specialization Domains</h4>
                                            <p className="text-slate-200 text-xs font-medium uppercase tracking-wider mt-1">Available for Other Departments</p>
                                        </div>
                                        <div className="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center shrink-0">
                                            <Settings size={20} className="text-[#ffc107]" />
                                        </div>
                                    </div>
                                    <div className="overflow-x-auto">
                                        <table className="w-full text-left font-graphik border-collapse">
                                            <thead>
                                                <tr className="bg-slate-100/80 border-b border-slate-200">
                                                    <th className="px-6 py-3.5 text-xs font-semibold text-[#18357a] uppercase tracking-wider w-1/3">Offering Department</th>
                                                    <th className="px-6 py-3.5 text-xs font-semibold text-[#18357a] uppercase tracking-wider">Domain Specialization</th>
                                                </tr>
                                            </thead>
                                            <tbody className="text-sm">
                                                {minorDegrees.length > 0 ? (
                                                    minorDegrees.map((m, i) => (
                                                        <tr key={i} className="odd:bg-white even:bg-[#f4f6fa] border-b border-slate-200/70 hover:bg-slate-100/80 transition-colors">
                                                            <td className="px-6 py-3.5 font-semibold text-[#18357a]">{m.dept}</td>
                                                            <td className="px-6 py-3.5">
                                                                <div className="flex items-center gap-2.5">
                                                                    <div className="w-2 h-2 bg-[#ffc107] rounded-full shrink-0" />
                                                                    <span className="font-normal text-slate-800">{m.spec}</span>
                                                                </div>
                                                            </td>
                                                        </tr>
                                                    ))
                                                ) : (
                                                    <tr>
                                                        <td colSpan="2" className="px-6 py-8 text-center text-slate-500 font-medium text-xs">
                                                            No domains listed.
                                                        </td>
                                                    </tr>
                                                )}
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </motion.section>
                    )}
                </AnimatePresence>
            </div>
                    </div>
                </div>
            </div>
    )
}

export default AutonomousPage
