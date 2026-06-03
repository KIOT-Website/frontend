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

// Import PDF Resources
import ugcFile from '../assets/resources/UGC-CONFIRMENT.pdf'
import auFile from '../assets/resources/ANNA-UNIVERSITY.pdf'
import mechBos from '../assets/resources/1.-MECH-BOS-Committee-Members.pdf'
import eceBos from '../assets/resources/2.-ECE-BOS-Composition.pdf'
import eeeBos from '../assets/resources/3.-EEE-BOS-Members.pdf'
import cseBos from '../assets/resources/4.-CSE-BOS-Compositions.pdf'
import civilBos from '../assets/resources/5.-Civil-BOS-Committee-Members-list.pdf'
import shBos from '../assets/resources/6.-SH-BOS-Members-list.pdf'
import mbaBos from '../assets/resources/7.-MBA-BOS-Members-list.pdf'
import campusImg from '../assets/main/indian_campus_hero.png'
import sixLegImg from '../assets/academics/Six-Leg.png'

// Import AICTE Approvals PDFs
import aicte25_26 from '../assets/idea lap/approvels/AICTE-2025-26.pdf'
import aicte24_25 from '../assets/idea lap/approvels/AICTE-2024-25.pdf'
import aicte23_24 from '../assets/idea lap/approvels/EOA-Report-2023-24.pdf'
import aicte22_23 from '../assets/idea lap/approvels/EOA-Report_22-23.pdf'
import aicte21_22 from '../assets/idea lap/approvels/EOA-Report_21-22.pdf'
import aicte20_21 from '../assets/idea lap/approvels/AICTE-2020-21.pdf'
import aicte15_16 from '../assets/idea lap/approvels/AICTE-2015-16.pdf'
import aicte14_15 from '../assets/idea lap/approvels/AICTE-2014-15.pdf'
import aicte13_14 from '../assets/idea lap/approvels/AICTE-2013-14.pdf'
import aicte12_13 from '../assets/idea lap/approvels/AICTE-2012-13.pdf'
import aicte11_12 from '../assets/idea lap/approvels/AICTE-2011-12.pdf'

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
                const response = await fetch('http://127.0.0.1:8000/curriculum-records/?category=Academic Schedule&department=INSTITUTIONAL')
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
        { name: 'Academic Schedule', id: 'schedule', icon: Calendar },
        { name: 'Credits Equivalence Committee', id: 'cec', icon: UserCheck },
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
            {/* On Mobile: Header title since we don't have hero section */}
            <div className="lg:hidden bg-[#224292] text-white py-8 px-6 text-center">
                <h1 className="text-3xl font-black uppercase tracking-tighter mb-2">Autonomous</h1>
                <p className="text-sm font-bold text-[#ffc107] italic">Academic Autonomy for Excellence</p>
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
                    <div className="hidden lg:block w-[300px] shrink-0 sticky top-[120px] self-start bg-white rounded-2xl border border-slate-100 p-4 shadow-sm z-20">
                        <div className="mb-4 pb-3 border-b border-slate-100">
                            <h1 className="text-xl font-black text-[#224292] uppercase tracking-tight">Autonomous</h1>
                            <p className="text-[10px] font-bold text-[#ffc107] italic mt-0.5">Academic Autonomy</p>
                        </div>
                        <div className="flex flex-col gap-1.5">
                            {tabs.map((tab) => {
                                const IconComponent = tab.icon;
                                return (
                                    <button
                                        key={tab.id}
                                        onClick={() => handleTabChange(tab.id)}
                                        className={`flex items-center gap-2.5 w-full px-3 py-2.5 rounded-xl border transition-all text-left group ${
                                            activeTab === tab.id 
                                            ? 'bg-[#224292] text-white border-[#224292] shadow-md shadow-[#224292]/10' 
                                            : 'bg-slate-50/50 hover:bg-white text-[#4a5568] hover:text-[#224292] border-slate-100 hover:border-[#224292]/20'
                                        }`}
                                    >
                                        <IconComponent size={16} className={activeTab === tab.id ? 'text-[#ffc107]' : 'text-slate-400 group-hover:text-[#224292]'} />
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
                                <div className="mb-8">
                                    <h2 className="text-4xl font-black text-[#224292] tracking-tighter">Academic Overview</h2>
                                </div>
                                
                                <div className="space-y-8 text-black text-[13px] font-bold leading-relaxed text-justify mb-24">
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

                                <div className="pt-24 border-t border-slate-100">
                                <div className="w-full text-center">
                                    <h3 className="text-3xl font-black mb-6 leading-tight max-w-4xl mx-auto">
                                        <span className="text-[#224292]">Curriculum</span>{' '}
                                        <span className="text-[#ffc107]">Excellence</span>
                                    </h3>
                                    <div className="space-y-6 max-w-4xl mx-auto mb-16">
                                        <p className="text-[13px] font-bold text-black leading-relaxed text-justify">
                                            The KIOT offers a Unique and Structured Six-LEG Model Curriculum aligned with industry requirements integrating engineering fundamentals, domain expertise, emerging technologies, employability skills, innovation, and higher-order thinking among graduates.
                                        </p>
                                        <p className="text-[13px] font-bold text-[#224292] leading-relaxed text-justify bg-blue-50/50 p-5 rounded-xl border-l-4 border-[#224292]">
                                            The Curriculum nurtures Technically Strong, Digitally Empowered, Industry-Ready Professionals with Higher-Order Thinking Skills (HOTS) and Multi-Disciplinary exposure
                                        </p>
                                    </div>

                                    <div className="mt-16 flex justify-center">
                                        <img src={sixLegImg} alt="Six-Leg Model" className="max-w-5xl w-full rounded-3xl shadow-2xl" />
                                    </div>

                                    <div className="mt-24 text-left">
                                        <h4 className="text-[10px] font-black uppercase tracking-widest text-[#224292] mb-12 text-center">Curriculum Structure & Credit Distribution</h4>
                                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                                            {[
                                                { title: 'BSEC', subtitle: 'Basic Science & Engineering Courses', points: ['Builds strong engineering fundamentals', 'Covers common core subjects'], credits: '25 Cr' },
                                                { title: 'PCC', subtitle: 'Professional Core Courses', points: ['Focuses on deep core domain learning', 'Strengthens professional technical knowledge'], credits: '50–60 Cr' },
                                                { title: 'IRT (DIV)', subtitle: 'Industry Ready Track', points: ['Department Industry Vertical based learning', 'Makes students industry-ready in one domain'], credits: '18 Cr' },
                                                { title: 'IDT (EmTV)', subtitle: 'Interdisciplinary Track', points: ['Emerging Technology Vertical based learning', 'Encourages interdisciplinary technology exposure'], credits: '09 Cr' },
                                                { title: 'DAIT', subtitle: 'Digital & AI Track', points: ['Develops digital and AI competencies', 'Enhances future-ready technical skills'], credits: '26 Cr' },
                                                { title: 'ICT', subtitle: 'Innovation & Creativity Track', points: ['Encourages innovation and product development', 'Supports startup and creative thinking skills'], credits: '15 Cr' },
                                                { title: 'EE & LST', subtitle: 'Employability & Life Skills', points: ['Improves employability and professional skills', 'Focuses on communication and life skills'], credits: '13 Cr' },
                                                { title: 'TLP (HOTS)', subtitle: 'Teaching Learning Practices', points: ['Develops higher-order thinking skills', 'Enhances analytical and problem-solving abilities'], credits: 'Integrated' },
                                                { title: 'Honours / Minor', subtitle: 'Degree Options', points: ['Additional specialization opportunities', 'Supports advanced academic pathways'], credits: 'Optional' }
                                            ].map((track, i) => (
                                                <div key={i} className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm hover:shadow-xl hover:translate-y-[-4px] transition-all group">
                                                    <div className="flex justify-between items-start mb-6">
                                                        <h5 className="text-lg font-bold text-[#224292]">{track.title}</h5>
                                                    </div>
                                                    <ul className="space-y-4">
                                                        {track.points.map((p, j) => (
                                                            <li key={j} className="flex items-start gap-3 text-[13px] font-semibold text-black leading-tight">
                                                                <div className="w-4 h-4 bg-blue-50 rounded-full flex items-center justify-center text-[#224292] shrink-0 mt-0.5">
                                                                    <CheckCircle2 size={10} />
                                                                </div>
                                                                {p}
                                                            </li>
                                                        ))}
                                                    </ul>
                                                </div>
                                            ))}
                                        </div>

                                        <div className="mt-12 p-8 bg-[#224292] rounded-[2rem] text-white flex flex-col md:flex-row justify-between items-center gap-8">
                                            <div>
                                                <h5 className="text-2xl font-black mb-2">Total Credit Requirement</h5>
                                                <p className="text-white/60 font-bold">Overall Academic Completion Milestone</p>
                                            </div>
                                            <div className="text-4xl font-black text-[#ffc107]">
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
                                <div className="text-center mb-12">
                                    <h2 className="text-4xl font-black text-[#224292] tracking-tighter">Formal Approvals</h2>
                                </div>

                            <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
                                {[
                                    { name: 'UGC', full: 'University Grants Commission', file: ugcFile },
                                    { name: 'Anna University', full: 'Affiliated University', file: auFile }
                                ].map((app, i) => (
                                    <div key={i} className="p-6 bg-white border border-slate-100 rounded-2xl shadow-sm hover:shadow-lg transition-all group flex flex-col items-center text-center">
                                        <div className="w-16 h-16 bg-red-50 rounded-xl flex items-center justify-center mb-4 text-red-600 transition-all">
                                            <FileText size={32} />
                                        </div>
                                        <h3 className="text-xl font-black text-[#224292] mb-1">{app.name}</h3>
                                        <p className="text-[9px] font-black text-slate-400 uppercase tracking-widest mb-6 leading-tight">{app.full}</p>
                                        
                                        <button 
                                            onClick={() => app.file && window.open(app.file, '_blank')}
                                            disabled={!app.file}
                                            className={`mt-auto w-full py-2.5 rounded-lg font-black text-[9px] uppercase tracking-widest transition-all flex items-center justify-center gap-2 ${
                                                app.file 
                                                ? 'bg-[#224292] text-white hover:bg-red-600 shadow-md' 
                                                : 'bg-slate-50 text-slate-300 cursor-not-allowed border border-slate-100'
                                            }`}
                                        >
                                            {app.file ? 'View' : 'Not Available'}
                                            {app.file && <ChevronRight size={12} />}
                                        </button>
                                    </div>
                                ))}
                            </div>

                            <div className="mt-16 max-w-3xl mx-auto">
                                <div className="flex items-center justify-center gap-4 mb-8">
                                    <div className="h-[2px] w-12 bg-[#ffc107] rounded-full" />
                                    <h3 className="text-2xl font-black text-[#224292] tracking-tight">AICTE Approvals</h3>
                                    <div className="h-[2px] w-12 bg-[#ffc107] rounded-full" />
                                </div>
                                
                                <div className="bg-white border border-slate-100 rounded-2xl shadow-xl shadow-black/5 overflow-hidden">
                                    <table className="w-full text-left border-collapse">
                                        <thead>
                                            <tr className="bg-[#224292] text-white">
                                                <th className="py-4 px-6 text-[10px] font-black uppercase text-white tracking-wider">Academic Year</th>
                                                <th className="py-4 px-6 text-[10px] font-black uppercase text-white tracking-wider">Approval Status</th>
                                                <th className="py-4 px-6 text-[10px] font-black uppercase text-white tracking-wider text-right">Action</th>
                                            </tr>
                                        </thead>
                                        <tbody className="divide-y divide-slate-100">
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
                                                <tr key={idx} className="hover:bg-slate-50/50 transition-colors group">
                                                    <td className="py-4 px-6 text-[13px] font-bold text-black">{row.year}</td>
                                                    <td className="py-4 px-6 text-[12px] font-bold text-slate-500">{row.status}</td>
                                                    <td className="py-4 px-6 text-right">
                                                        <button
                                                            onClick={() => window.open(row.file, '_blank')}
                                                            className="inline-flex items-center gap-2 bg-[#224292]/5 text-[#224292] border border-[#224292]/10 px-4 py-2 rounded-xl text-[9px] font-black uppercase hover:bg-[#ffc107] hover:text-[#224292] hover:border-[#ffc107] transition-all group-hover:shadow-md"
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
                            <div className="text-center mb-12">
                                <h2 className="text-4xl font-black text-[#224292] tracking-tighter">Statutory Committees</h2>
                            </div>
                            
                            <div className="space-y-24">
                                {committees.map((c, i) => (
                                    <div key={i} className="mb-24 last:mb-0">
                                        <div className="flex flex-col lg:flex-row justify-between items-start gap-12 mb-16">
                                            <div className="max-w-3xl">
                                            <h3 className="text-3xl font-black mb-6 leading-tight">
                                                {c.name === 'Academic Council' && (
                                                    <>
                                                        <span className="text-[#224292]">Academic</span>{' '}
                                                        <span className="text-[#ffc107]">Council</span>
                                                    </>
                                                )}
                                                {c.name === 'Board of Studies (BoS)' && (
                                                    <>
                                                        <span className="text-[#224292]">Board of</span>{' '}
                                                        <span className="text-[#ffc107]">Studies (BoS)</span>
                                                    </>
                                                )}
                                                {c.name === 'Finance Committee' && (
                                                    <>
                                                        <span className="text-[#224292]">Finance</span>{' '}
                                                        <span className="text-[#ffc107]">Committee</span>
                                                    </>
                                                )}
                                            </h3>
                                                <p className="text-[13px] font-bold text-black leading-relaxed">{c.desc}</p>
                                            </div>
                                            
                                            <div className="flex flex-col sm:flex-row gap-4 shrink-0 w-full lg:w-auto">
                                                <button className="flex items-center gap-4 px-6 py-4 bg-white border border-blue-100 rounded-2xl shadow-lg transition-all group/btn">
                                                    <div className="w-10 h-10 bg-blue-50 rounded-xl flex items-center justify-center text-[#224292] transition-all">
                                                        <UserCheck size={20} />
                                                    </div>
                                                    <span className="text-[10px] font-black uppercase tracking-widest text-[#224292]">Members List</span>
                                                    <ChevronRight size={12} className="ml-4 text-[#ffc107]" />
                                                </button>
                                                <button 
                                                    onClick={() => setShowMinutes(showMinutes === i ? null : i)}
                                                    className={`flex items-center gap-4 px-6 py-4 border rounded-2xl shadow-lg transition-all group/btn ${showMinutes === i ? 'bg-[#224292] text-white border-[#224292]' : 'bg-white text-[#224292] border-blue-100'}`}
                                                >
                                                    <div className={`w-10 h-10 rounded-xl flex items-center justify-center transition-all ${showMinutes === i ? 'bg-white/10 text-[#ffc107]' : 'bg-blue-50 text-[#224292]'}`}>
                                                        <FileText size={20} />
                                                    </div>
                                                    <span className={`text-[10px] font-black uppercase tracking-widest ${showMinutes === i ? 'text-white' : 'text-[#224292]'}`}>Meeting Minutes</span>
                                                    <ChevronRight size={12} className={`ml-4 transition-transform ${showMinutes === i ? 'rotate-90 text-[#ffc107]' : 'text-[#ffc107]'}`} />
                                                </button>
                                            </div>
                                        </div>

                                        <AnimatePresence>
                                            {showMinutes === i && (
                                                <motion.div
                                                    initial={{ height: 0, opacity: 0 }}
                                                    animate={{ height: 'auto', opacity: 1 }}
                                                    exit={{ height: 0, opacity: 0 }}
                                                    className="overflow-hidden mb-16"
                                                >
                                                    <div className="max-w-4xl mx-auto bg-slate-50/50 border border-slate-100 rounded-[2.5rem] p-6 lg:p-8">
                                                        <div className="grid gap-3">
                                                            {[
                                                                { no: '1st', date: '25.07.2023', file: '#' },
                                                                { no: '2nd', date: '12.12.2023', file: '#' },
                                                                { no: '3rd', date: '18.04.2024', file: '#' }
                                                            ].map((m, idx) => (
                                                                <div key={idx} className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-5 bg-white rounded-2xl border border-slate-200/60 hover:border-[#224292]/30 hover:shadow-xl hover:shadow-[#224292]/5 transition-all group/row">
                                                                    <div className="flex items-center gap-4">
                                                                        <div className="w-10 h-10 bg-blue-50 rounded-xl flex items-center justify-center text-[#224292] group-hover/row:bg-[#224292] group-hover/row:text-white transition-all">
                                                                            <Calendar size={18} />
                                                                        </div>
                                                                        <div>
                                                                            <p className="text-[14px] font-black text-black leading-tight">{c.name} Meeting - {m.no}</p>
                                                                            <p className="text-[10px] font-bold text-slate-400 mt-0.5 uppercase tracking-widest">{m.date}</p>
                                                                        </div>
                                                                    </div>
                                                                    <button className="flex items-center justify-center gap-2.5 px-5 py-2.5 bg-slate-50 border border-slate-100 rounded-xl text-[9px] font-black text-[#224292] uppercase tracking-widest hover:bg-[#224292] hover:text-white hover:border-[#224292] transition-all group/v">
                                                                        <FileText size={14} className="text-red-500 group-hover/v:text-white transition-colors" />
                                                                        View PDF
                                                                    </button>
                                                                </div>
                                                            ))}
                                                        </div>
                                                    </div>
                                                </motion.div>
                                            )}
                                        </AnimatePresence>

                                        <div>
                                            <h4 className="text-[10px] font-black uppercase tracking-widest text-[#224292] mb-8">
                                                Primary Functions & Responsibilities
                                            </h4>
                                            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-6">
                                                {c.functions.map((f, j) => (
                                                    <div key={j} className="flex items-start gap-3 py-1">
                                                        <div className="w-4 h-4 bg-emerald-100 rounded-full flex items-center justify-center text-emerald-600 shrink-0 mt-0.5">
                                                            <CheckCircle2 size={10} />
                                                        </div>
                                                        <p className="text-[13px] font-bold text-black leading-relaxed">{f}</p>
                                                    </div>
                                                ))}
                                            </div>
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
                            <div className="mb-24 last:mb-0">
                                <div className="flex flex-col lg:flex-row justify-between items-start gap-12 mb-16">
                                    <div className="max-w-3xl">
                                        <h3 className="text-3xl font-black mb-6 leading-tight">
                                            <span className="text-[#224292]">Centre for Curriculum</span>{' '}
                                            <span className="text-[#ffc107]">Design Delivery and Assessment</span>
                                        </h3>
                                        <p className="text-[13px] font-bold text-black leading-relaxed text-justify">
                                            The Centre for Curriculum Design, Delivery and Assessment (CDDA) coordinates and strengthens the academic processes of the Institute. It ensures quality curriculum planning, effective teaching-learning, and transparent assessment practices in alignment with institutional objectives and regulatory standards.
                                        </p>
                                    </div>
                                    
                                    <div className="flex flex-col sm:flex-row gap-4 shrink-0 w-full lg:w-auto">
                                        <div className="flex items-center gap-4 px-6 py-4 bg-white border border-blue-100 rounded-2xl shadow-lg transition-all group/btn">
                                            <div className="w-10 h-10 bg-blue-50 rounded-xl flex items-center justify-center text-[#224292] transition-all">
                                                <Building2 size={20} />
                                            </div>
                                            <div>
                                                <p className="text-[8px] font-black uppercase tracking-widest text-[#ffc107] mb-0.5">Academic Director</p>
                                                <span className="text-[10px] font-black uppercase tracking-widest text-[#224292]">Dr. V. Karthikeyan</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div>
                                    <h4 className="text-[10px] font-black uppercase tracking-widest text-[#224292] mb-8">
                                        Primary Functions & Responsibilities
                                    </h4>
                                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
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
                                            <div key={j} className="flex items-start gap-3 p-4 bg-slate-50/50 rounded-2xl border border-slate-100 hover:bg-white hover:shadow-lg hover:shadow-blue-900/5 transition-all group">
                                                <div className="w-5 h-5 bg-emerald-50 rounded-full flex items-center justify-center text-emerald-500 shrink-0 mt-0.5">
                                                    <CheckCircle2 size={12} />
                                                </div>
                                                <p className="text-[13px] font-bold text-black leading-tight">{f}</p>
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
                            <div className="mb-12">
                                <div className="flex items-center gap-4 mb-4">
                                    <div className="w-14 h-14 bg-amber-50 rounded-[1.5rem] flex items-center justify-center text-amber-600">
                                        <FileText size={28} />
                                    </div>
                                    <h2 className="text-4xl font-black text-[#224292] tracking-tighter">Academic Regulations</h2>
                                </div>
                                <p className="text-black text-[13px] font-bold">Guidelines and policies governing the academic journey of every KIOT graduate.</p>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-10">
                                {[
                                    { title: 'B.E. / B.Tech' },
                                    { title: 'M.E. / M.Tech / M.C.A' },
                                    { title: 'MBA' },
                                    { title: 'MBA (IEV)' }
                                ].map((reg, i) => (
                                    <button key={i} className="flex items-center gap-4 p-4 bg-white border border-slate-100 rounded-xl shadow-sm hover:shadow-xl hover:translate-y-[-2px] transition-all group w-full text-left">
                                        <div className="w-10 h-10 bg-red-50 rounded-lg flex items-center justify-center text-red-500 shrink-0 group-hover:bg-red-500 group-hover:text-white transition-all">
                                            <FileText size={20} />
                                        </div>
                                        <div className="flex-1 min-w-0">
                                            <p className="text-[14px] font-black text-[#224292] leading-tight">{reg.title}</p>
                                        </div>
                                    </button>
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
                                <div className="flex items-center gap-4 mb-4">
                                    <div className="w-14 h-14 bg-amber-50 rounded-[1.5rem] flex items-center justify-center text-amber-600">
                                        <Calendar size={28} />
                                    </div>
                                    <h2 className="text-4xl font-black text-[#224292] tracking-tighter">Academic Schedule</h2>
                                </div>
                                <p className="text-black text-[13px] font-bold max-w-xl mb-12">Institutional academic calendar and semester schedules for all degree programmes.</p>

                                {loadingSchedules ? (
                                    <div className="flex flex-col items-center py-20 bg-white border border-slate-100 rounded-3xl shadow-sm">
                                        <div className="w-10 h-10 border-4 border-[#ffc107] border-t-transparent rounded-full animate-spin mb-4" />
                                        <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Loading Records...</span>
                                    </div>
                                ) : (
                                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                                        {schedules.map((row, i) => (
                                            <button 
                                                key={i} 
                                                onClick={() => window.open(row.pdf_url, '_blank')}
                                                className="flex items-center gap-4 p-4 bg-white border border-slate-100 rounded-xl shadow-sm hover:shadow-xl hover:translate-y-[-2px] transition-all group w-full text-left"
                                            >
                                                <div className="w-10 h-10 bg-red-50 rounded-lg flex items-center justify-center text-red-500 shrink-0 group-hover:bg-red-500 group-hover:text-white transition-all">
                                                    <FileText size={20} />
                                                </div>
                                                <div className="flex-1 min-w-0">
                                                    <p className="text-[14px] font-bold text-[#224292] truncate leading-tight">{row.year_or_version}</p>
                                                    <p className="text-[11px] font-medium text-slate-400 mt-0.5">{row.semester}</p>
                                                </div>
                                                <Download size={14} className="text-slate-300 group-hover:text-[#224292] transition-colors shrink-0" />
                                            </button>
                                        ))}
                                        {schedules.length === 0 && (
                                            <div className="col-span-full py-12 text-center bg-slate-50/50 rounded-xl border border-dashed border-slate-200">
                                                <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">No schedules available.</span>
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
                            <div className="grid lg:grid-cols-12 gap-12 items-start">
                                <div className="lg:col-span-5">
                                    <div className="bg-[#224292] p-10 rounded-3xl text-white relative overflow-hidden shadow-2xl h-full flex flex-col justify-between">
                                        <div className="absolute -bottom-20 -right-20 opacity-10">
                                            <UserCheck size={400} />
                                        </div>
                                        <div className="relative z-10">
                                            <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center mb-8 backdrop-blur-md">
                                                <UserCheck size={32} className="text-[#ffc107]" />
                                            </div>
                                            <h3 className="text-4xl font-black tracking-tighter mb-6 leading-tight">Credits Equivalence Committee (CEC)</h3>
                                            <p className="text-white/60 text-lg font-medium leading-relaxed mb-12">
                                                Institute-level committee constituted to evaluate and approve credit equivalence requests for external, online, and special academic courses.
                                            </p>
                                        </div>
                                        <div className="relative z-10 space-y-3">
                                            <p className="text-[10px] font-black text-[#ffc107] uppercase tracking-[0.3em] mb-4">Committee Composition</p>
                                            {[
                                                { role: 'Chairman', name: 'Senior Professor nominated by the Principal' },
                                                { role: 'Convenor', name: 'Director, CDDA' },
                                                { role: 'Member', name: 'Concerned Head of the Department' }
                                            ].map((m, i) => (
                                                <div key={i} className="flex items-center gap-5 p-4 bg-white/5 rounded-2xl border border-white/5">
                                                    <div className="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center">
                                                        <UserCheck size={18} className="text-[#ffc107]" />
                                                    </div>
                                                    <div>
                                                        <p className="text-[9px] font-black uppercase text-white/40 mb-1">{m.role}</p>
                                                        <p className="text-sm font-black">{m.name}</p>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                                <div className="lg:col-span-7">
                                    <div className="bg-white border border-slate-100 rounded-3xl p-10 shadow-sm h-full">
                                        <h4 className="text-3xl font-black text-[#224292] mb-10 tracking-tight">Functions of CEC</h4>
                                        <div className="grid grid-cols-1 gap-6">
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
                                                <div key={i} className="flex items-start gap-5 p-5 rounded-2xl hover:bg-slate-50 border border-slate-50 hover:border-slate-100 transition-all group w-full">
                                                    <div className="w-8 h-8 rounded-lg bg-emerald-50 flex items-center justify-center text-emerald-500 shrink-0 group-hover:bg-emerald-500 group-hover:text-white transition-all shadow-inner">
                                                        <CheckCircle2 size={16} />
                                                    </div>
                                                    <p className="text-[15px] font-bold text-slate-600 leading-relaxed">{func}</p>
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
                            <div className="text-center max-w-3xl mx-auto mb-12">
                                <div className="inline-flex items-center gap-3 px-4 py-2 bg-amber-50 rounded-full mb-6">
                                    <Trophy size={16} className="text-amber-600" />
                                    <span className="text-[10px] font-black text-amber-600 uppercase tracking-widest">Optional Excellence Pathway</span>
                                </div>
                                <h2 className="text-4xl md:text-5xl font-black text-[#224292] tracking-tighter mb-6 leading-tight">Advanced Degree Specializations</h2>
                                <p className="text-slate-500 font-medium leading-relaxed">
                                    Elevate your professional profile with additional credits in core verticals or multidisciplinary domains.
                                </p>
                            </div>

                            <div className="grid md:grid-cols-2 gap-12 mb-12">
                                <div className="bg-white border border-slate-100 rounded-3xl p-8 shadow-sm relative overflow-hidden group hover:shadow-2xl transition-all">
                                    <div className="absolute top-0 right-0 p-12 opacity-[0.02] group-hover:opacity-[0.05] transition-opacity">
                                        <Trophy size={250} />
                                    </div>
                                    <div className="relative z-10">
                                        <div className="flex items-center gap-6 mb-10">
                                            <div className="w-16 h-16 bg-amber-50 rounded-3xl flex items-center justify-center text-amber-600 shadow-inner">
                                                <Trophy size={32} />
                                            </div>
                                            <div>
                                                <h3 className="text-3xl font-black text-[#224292]">Honours Degree</h3>
                                                <p className="text-xs font-black text-slate-400 uppercase tracking-widest mt-1">Intra-Departmental Vertical</p>
                                            </div>
                                        </div>
                                        <p className="text-[14px] font-bold text-black leading-relaxed mb-10">
                                            Earn an additional 18 credits within the <span className="text-[#224292]">SAME Faculty</span> to gain deep specialized expertise in your primary discipline.
                                        </p>
                                        <div className="space-y-4 mb-6">
                                            {[
                                                'Earn 18 additional credits from same programme verticals.',
                                                'Max 6 online credits (NPTEL) above regular limit.',
                                                'Min CGPA of 7.50 at end of 3rd sem with no arrears.',
                                                'Must pass all courses in the first attempt.',
                                                'Option to convert to Professional Electives if incomplete.',
                                                'Higher grades considered for CGPA if credits exceed 18.'
                                            ].map((item, i) => (
                                                <div key={i} className="flex items-start gap-4 text-[14px] font-bold text-black">
                                                    <div className="w-2 h-2 bg-amber-400 rounded-full mt-2 shrink-0" />
                                                    <span className="leading-relaxed">{item}</span>
                                                </div>
                                            ))}
                                        </div>
                                        <div className="p-6 bg-slate-50 rounded-2xl flex items-center justify-between">
                                            <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Requirement</span>
                                            <span className="text-lg font-black text-[#224292]">18 Credits</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="bg-white border border-slate-100 rounded-3xl p-8 shadow-sm relative overflow-hidden group hover:shadow-2xl transition-all">
                                    <div className="absolute top-0 right-0 p-12 opacity-[0.02] group-hover:opacity-[0.05] transition-opacity">
                                        <Award size={250} />
                                    </div>
                                    <div className="relative z-10">
                                        <div className="flex items-center gap-6 mb-10">
                                            <div className="w-16 h-16 bg-emerald-50 rounded-3xl flex items-center justify-center text-emerald-600 shadow-inner">
                                                <Award size={32} />
                                            </div>
                                            <div>
                                                <h3 className="text-3xl font-black text-[#224292]">Minor Degree</h3>
                                                <p className="text-xs font-black text-slate-400 uppercase tracking-widest mt-1">Cross-Disciplinary Pathway</p>
                                            </div>
                                        </div>
                                        <p className="text-[14px] font-bold text-black leading-relaxed mb-10">
                                            Broaden your horizons by earning 18 additional credits from a <span className="text-[#224292]">DIFFERENT Faculty</span> or Discipline.
                                        </p>
                                        <div className="space-y-4 mb-6">
                                            {[
                                                'Earn 18 additional credits from OTHER programmes.',
                                                'Max 6 online credits (NPTEL) above regular limit.',
                                                'Min CGPA of 7.50 at end of 3rd sem with no arrears.',
                                                'Option to convert to Open Electives if incomplete.',
                                                'Excess credits treated as Audit Courses.'
                                            ].map((item, i) => (
                                                <div key={i} className="flex items-start gap-4 text-[14px] font-bold text-black">
                                                    <div className="w-2 h-2 bg-emerald-400 rounded-full mt-2 shrink-0" />
                                                    <span className="leading-relaxed">{item}</span>
                                                </div>
                                            ))}
                                        </div>
                                        <div className="p-6 bg-slate-50 rounded-2xl flex items-center justify-between">
                                            <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Requirement</span>
                                            <span className="text-lg font-black text-[#224292]">18 Credits</span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="max-w-4xl mx-auto">
                                <div className="bg-white border border-slate-100 rounded-3xl overflow-hidden shadow-2xl">
                                    <div className="bg-[#224292] p-8 text-white flex items-center justify-between">
                                        <div>
                                            <h4 className="text-3xl font-black tracking-tight">Minor Specialization Domains</h4>
                                            <p className="text-white/50 text-[11px] font-black uppercase tracking-[0.3em] mt-2">Available for Other Departments</p>
                                        </div>
                                        <div className="w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center">
                                            <Settings size={28} className="text-[#ffc107] animate-spin-slow" />
                                        </div>
                                    </div>
                                    <div className="p-4">
                                        <table className="w-full text-left">
                                            <thead>
                                                <tr className="border-b border-slate-100">
                                                    <th className="px-8 py-4 text-[10px] font-black text-[#224292] uppercase tracking-[0.3em]">Offering Department</th>
                                                    <th className="px-8 py-4 text-[10px] font-black text-[#224292] uppercase tracking-[0.3em]">Domain Specialization</th>
                                                </tr>
                                            </thead>
                                            <tbody className="divide-y divide-slate-50">
                                                {minorDegrees.length > 0 ? (
                                                    minorDegrees.map((m, i) => (
                                                        <tr key={i} className="hover:bg-slate-50/50 transition-all group">
                                                            <td className="px-8 py-5 text-sm font-black text-[#224292]">{m.dept}</td>
                                                            <td className="px-8 py-5">
                                                                <div className="flex items-center gap-4">
                                                                    <div className="w-3 h-3 bg-[#ffc107] rounded-full group-hover:scale-150 transition-transform" />
                                                                    <span className="text-[15px] font-bold text-slate-600">{m.spec}</span>
                                                                </div>
                                                            </td>
                                                        </tr>
                                                    ))
                                                ) : (
                                                    <tr>
                                                        <td colSpan="2" className="px-8 py-16 text-center">
                                                            <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">No domains listed.</span>
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
