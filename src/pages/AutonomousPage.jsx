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

const AutonomousPage = () => {
    const [activeTab, setActiveTab] = useState('overview')
    const [schedules, setSchedules] = useState([])
    const [loadingSchedules, setLoadingSchedules] = useState(true)
    const [expandedCommittee, setExpandedCommittee] = useState(null)
    const [showMinutes, setShowMinutes] = useState(null)
    const [isSticky, setIsSticky] = useState(false)
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
        { name: 'Curriculum & Syllabi', id: 'syllabi', icon: BookOpen },
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

    const minorDegrees = []

    const handleTabChange = (id) => {
        setActiveTab(id);
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <div className="min-h-screen bg-[#F8FAFC] font-graphik text-[#1a1a1a]">
            {/* ─── PREMIUM HERO SECTION ─── */}
            <section className="relative h-[45vh] flex flex-col justify-end bg-[#224292]">
                <div className="absolute inset-0">
                    <img src={campusImg} alt="Campus" className="w-full h-full object-cover opacity-60" />
                    <div className="absolute inset-0 bg-gradient-to-r from-[#1a3370] via-[#224292] to-transparent opacity-95" />
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#224292]/30 to-[#224292]" />
                </div>
                
                <div className="relative z-10 max-w-7xl mx-auto px-6 w-full mb-12">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <h1 className="text-4xl md:text-6xl font-black text-white tracking-tighter mb-4 uppercase">Autonomous</h1>
                        <p className="text-lg font-bold text-[#ffc107] italic mb-6">Academic Autonomy for Excellence</p>

                    </motion.div>
                </div>

                {/* ─── SCROLL SENTINEL (Placed inside hero to trigger stickiness exactly at the bottom) ─── */}
                <div ref={sentinelRef} className="h-px w-full" />

                {/* ─── STICKY ANCHOR NAVIGATION (Part of Hero initially) ─── */}
                <div 
                    className={`${isSticky ? 'fixed top-[104px] shadow-2xl bg-[#224292]/95 backdrop-blur-md' : 'relative bg-[#224292]'} z-[45] w-full border-t border-white/10 border-b transition-all duration-300`}
                >
                    <div className="max-w-[1400px] mx-auto px-2 lg:px-4">
                        <div className="grid grid-cols-3 md:grid-cols-5 lg:grid-cols-9 gap-1 py-4 w-full">
                            {tabs.map((tab) => (
                                <button
                                    key={tab.id}
                                    onClick={() => handleTabChange(tab.id)}
                                    className={`flex items-center justify-center px-2 py-3 transition-all group shrink-0 rounded-xl ${
                                        activeTab === tab.id 
                                        ? 'bg-white text-[#224292] shadow-inner' 
                                        : 'bg-[#ffc107] hover:bg-white/90 text-[#224292]'
                                    }`}
                                >
                                    <span className="text-[11px] font-bold tracking-tight text-center leading-tight">{tab.name}</span>
                                </button>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* SPACER FOR FIXED NAV */}
            {isSticky && <div className="h-[73px]" />}

            {/* ─── CONTENT BLOCKS ─── */}
            <div className="max-w-7xl mx-auto px-6 py-12 min-h-[60vh]">
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
                                
                                <div className="space-y-8 text-black text-[15px] font-semibold leading-relaxed text-justify">
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
                                </div>
                            </motion.section>
                        )}

                        {activeTab === 'approvals' && (
                            <motion.section 
                                key="approvals"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                transition={{ duration: 0.3 }}
                                id="approvals" 
                                className="scroll-mt-32"
                            >
                                <div className="text-center mb-12">
                                    <h2 className="text-4xl font-black text-[#224292] tracking-tighter">Formal Approvals</h2>
                                </div>

                            <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
                                {[
                                    { name: 'UGC', full: 'University Grants Commission', file: ugcFile },
                                    { name: 'AICTE', full: 'All India Council for Technical Education', file: null },
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
                                                    <div className="bg-slate-50 border border-slate-100 rounded-3xl p-8 lg:p-12">
                                                        <table className="w-full text-left">
                                                            <thead>
                                                                <tr className="border-b border-slate-200">
                                                                    <th className="pb-6 text-[10px] font-black text-[#224292] uppercase tracking-[0.2em]">Meeting No. / Date</th>
                                                                    <th className="pb-6 text-[10px] font-black text-[#224292] uppercase tracking-[0.2em] text-right">Minutes of Meeting</th>
                                                                </tr>
                                                            </thead>
                                                            <tbody className="divide-y divide-slate-100">
                                                                {[
                                                                    { no: '1st', date: '25.07.2023', file: '#' },
                                                                    { no: '2nd', date: '12.12.2023', file: '#' },
                                                                    { no: '3rd', date: '18.04.2024', file: '#' }
                                                                ].map((m, idx) => (
                                                                    <tr key={idx} className="group/row">
                                                                        <td className="py-6">
                                                                            <p className="text-[14px] font-black text-black">Academic Council Meeting - {m.no}</p>
                                                                            <p className="text-[11px] font-bold text-slate-400 mt-1">{m.date}</p>
                                                                        </td>
                                                                        <td className="py-6 text-right">
                                                                            <button className="inline-flex items-center gap-2 px-5 py-2.5 bg-white border border-slate-200 rounded-xl text-[10px] font-black text-[#224292] uppercase tracking-widest hover:bg-[#224292] hover:text-white hover:border-[#224292] transition-all group/v">
                                                                                <FileText size={14} className="text-red-500 group-hover/v:text-white" />
                                                                                View PDF
                                                                            </button>
                                                                        </td>
                                                                    </tr>
                                                                ))}
                                                            </tbody>
                                                        </table>
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
                            <div className="bg-[#224292] rounded-[4rem] p-16 text-white relative overflow-hidden">
                                <div className="absolute top-0 right-0 p-24 opacity-5 rotate-12">
                                    <Building2 size={300} />
                                </div>
                                <div className="relative z-10 grid lg:grid-cols-2 gap-24 items-center">
                                    <div>
                                        <div className="inline-flex items-center gap-3 px-4 py-2 bg-white/10 rounded-full mb-8 backdrop-blur-md">
                                            <Building2 size={16} className="text-[#ffc107]" />
                                            <span className="text-[10px] font-black uppercase tracking-widest text-[#ffc107]">Academic Hub</span>
                                        </div>
                                        <h2 className="text-4xl md:text-5xl font-black tracking-tighter mb-8 leading-tight">Centre for Curriculum Design Delivery and Assessment (CDDA)</h2>
                                        <p className="text-white/60 text-lg font-medium leading-relaxed mb-12">
                                            The CDDA coordinates and strengthens the academic processes of the Institute. It ensures quality 
                                            curriculum planning, effective teaching-learning, and transparent assessment practices.
                                        </p>
                                        <div className="flex gap-8">
                                            <div className="p-6 bg-white/5 rounded-3xl border border-white/10">
                                                <p className="text-[9px] font-black text-[#ffc107] uppercase tracking-[0.2em] mb-2">Academic Director</p>
                                                <p className="text-lg font-black">Dr. V. Karthikeyan</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="grid gap-3">
                                        {[
                                            'Formation of Institutional Regulations',
                                            'Designing innovative UG and PG curricula.',
                                            'Organizing Statutory Council & Board meetings.',
                                            'Strict adherence to Academic Schedules.',
                                            'Managing departmental syllabus attestations.',
                                            'Innovative and industry-oriented pedagogy.',
                                            'Coordinating centralized internal assessments.',
                                            'Maintaining global academic compliance.'
                                        ].map((func, i) => (
                                            <motion.div 
                                                key={i} 
                                                initial={{ opacity: 0, x: 20 }}
                                                whileInView={{ opacity: 1, x: 0 }}
                                                viewport={{ once: true }}
                                                transition={{ delay: i * 0.1 }}
                                                className="flex items-center gap-5 p-5 bg-white/5 rounded-2xl border border-white/5 hover:bg-white hover:text-[#224292] transition-all group"
                                            >
                                                <div className="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center text-[#ffc107] font-black text-sm group-hover:bg-[#224292] group-hover:text-white transition-all shadow-inner">
                                                    {i + 1}
                                                </div>
                                                <span className="text-[13px] font-black uppercase tracking-wide leading-tight">{func}</span>
                                            </motion.div>
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
                            <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
                                <div>
                                    <div className="flex items-center gap-4 mb-4">
                                        <div className="w-14 h-14 bg-amber-50 rounded-[1.5rem] flex items-center justify-center text-amber-600">
                                            <FileText size={28} />
                                        </div>
                                        <h2 className="text-4xl font-black text-[#224292] tracking-tighter">Academic Regulations</h2>
                                    </div>
                                    <p className="text-slate-500 font-medium max-w-xl">Guidelines and policies governing the academic journey of every KIOT graduate.</p>
                                </div>
                                <button 
                                    onClick={() => window.open('https://drive.google.com/drive/folders/15kf1Sq3msAHM34SXpdlFPqH8UwCTZJ8h', '_blank')}
                                    className="px-8 py-4 bg-[#224292] text-white rounded-2xl font-black text-[10px] uppercase tracking-[0.2em] hover:shadow-2xl hover:shadow-blue-900/40 transition-all flex items-center gap-3"
                                >
                                    <ExternalLink size={14} /> Open Shared Drive
                                </button>
                            </div>
                            <div className="grid md:grid-cols-3 gap-8">
                                {[
                                    { title: 'Regulation 2023', year: 'R-2023', desc: 'Current framework for all degree-granting departments.' },
                                    { title: 'Regulation 2024', year: 'R-2024', desc: 'Updated regulations for the incoming academic batches.' },
                                    { title: 'Institutional Amendments', year: 'R-2023/24', desc: 'Periodic updates and critical academic revisions.' }
                                ].map((reg, i) => (
                                    <div key={i} className="p-10 bg-white border border-slate-100 rounded-[3rem] shadow-sm hover:shadow-2xl transition-all group">
                                        <div className="w-16 h-16 bg-slate-50 rounded-2xl flex items-center justify-center text-[#224292] mb-10 group-hover:bg-[#ffc107] transition-all">
                                            <FileText size={32} />
                                        </div>
                                        <h3 className="text-2xl font-black text-[#224292] mb-3">{reg.title}</h3>
                                        <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-6">{reg.year}</p>
                                        <p className="text-sm font-medium text-slate-500 leading-relaxed mb-10">{reg.desc}</p>
                                        <button className="w-full py-5 bg-slate-50 text-[#224292] rounded-2xl text-[10px] font-black uppercase tracking-[0.2em] hover:bg-[#224292] hover:text-white transition-all flex items-center justify-center gap-3">
                                            <Download size={16} className="text-red-500 group-hover:text-white transition-colors" /> Download PDF
                                        </button>
                                    </div>
                                ))}
                            </div>
                        </motion.section>
                    )}

                    {activeTab === 'syllabi' && (
                        <motion.section 
                            key="syllabi"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.3 }}
                            id="syllabi" 
                            className="scroll-mt-32"
                        >
                            <div className="text-center mb-16">
                                <h2 className="text-4xl font-black text-[#224292] tracking-tighter">Curriculum & Syllabi</h2>
                            </div>
                            <div className="grid lg:grid-cols-2 gap-12">
                                <div className="bg-white border border-slate-100 rounded-[3.5rem] p-12 shadow-sm hover:shadow-xl transition-all">
                                    <div className="flex items-center gap-6 mb-12">
                                        <div className="w-16 h-16 bg-blue-50 rounded-3xl flex items-center justify-center text-[#224292]">
                                            <GraduationCap size={32} />
                                        </div>
                                        <div>
                                            <h3 className="text-3xl font-black text-[#224292]">B.E. / B.Tech.</h3>
                                            <p className="text-xs font-black text-slate-400 uppercase tracking-widest mt-1">Undergraduate Programs</p>
                                        </div>
                                    </div>
                                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                                        {['Mechanical', 'ECE', 'EEE', 'CSE', 'Civil', 'IT', 'CSBS', 'AI&DS', 'ECX'].map((dept) => (
                                            <div key={dept} className="p-4 bg-slate-50 border border-slate-100 rounded-2xl text-[10px] font-black text-slate-600 uppercase tracking-[0.2em] text-center hover:bg-[#224292] hover:text-white transition-all cursor-default">
                                                {dept}
                                            </div>
                                        ))}
                                    </div>
                                    <button className="w-full mt-12 py-5 bg-[#224292] text-white rounded-2xl font-black text-[10px] uppercase tracking-[0.3em] hover:shadow-xl hover:shadow-blue-900/30 transition-all flex items-center justify-center gap-3">
                                        <Download size={16} /> Download Full UG Syllabi
                                    </button>
                                </div>

                                <div className="bg-white border border-slate-100 rounded-[3.5rem] p-12 shadow-sm hover:shadow-xl transition-all flex flex-col justify-between">
                                    <div>
                                        <div className="flex items-center gap-6 mb-12">
                                            <div className="w-16 h-16 bg-purple-50 rounded-3xl flex items-center justify-center text-purple-600">
                                                <Award size={32} />
                                            </div>
                                            <div>
                                                <h3 className="text-3xl font-black text-[#224292]">M.E. / M.Tech. & MBA</h3>
                                                <p className="text-xs font-black text-slate-400 uppercase tracking-widest mt-1">Postgraduate & Professional</p>
                                            </div>
                                        </div>
                                        <div className="space-y-10">
                                            <div>
                                                <p className="text-[10px] font-black text-slate-300 uppercase tracking-[0.3em] mb-6 flex items-center gap-3">
                                                    <div className="w-8 h-px bg-slate-100" /> Technical Domains
                                                </p>
                                                <div className="flex flex-wrap gap-3">
                                                    {['ISE', 'VLSI', 'AE', 'EST', 'PED', 'CSE', 'SE'].map((spec) => (
                                                        <div key={spec} className="px-5 py-3 bg-purple-50 rounded-xl text-[11px] font-black text-purple-600 uppercase tracking-widest hover:bg-purple-600 hover:text-white transition-all cursor-default">
                                                            {spec}
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>
                                            <div>
                                                <p className="text-[10px] font-black text-slate-300 uppercase tracking-[0.3em] mb-6 flex items-center gap-3">
                                                    <div className="w-8 h-px bg-slate-100" /> Management Studies
                                                </p>
                                                <div className="flex flex-wrap gap-3">
                                                    {['MBA (General)', 'MBA (IEV)'].map((m) => (
                                                        <div key={m} className="px-5 py-3 bg-amber-50 rounded-xl text-[11px] font-black text-amber-600 uppercase tracking-widest hover:bg-amber-600 hover:text-white transition-all cursor-default">
                                                            {m}
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <button className="w-full mt-12 py-5 bg-slate-50 text-[#224292] rounded-2xl font-black text-[10px] uppercase tracking-[0.3em] hover:bg-[#224292] hover:text-white transition-all flex items-center justify-center gap-3">
                                        <Download size={16} /> View PG Prospectus
                                    </button>
                                </div>
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
                            <div className="max-w-5xl mx-auto">
                                <div className="bg-white border border-slate-100 rounded-[4rem] overflow-hidden shadow-2xl relative">
                                    <div className="bg-[#224292] p-12 text-white relative">
                                        <div className="absolute top-0 right-0 p-12 opacity-10">
                                            <Calendar size={150} />
                                        </div>
                                        <div className="relative z-10 text-center">
                                            <h3 className="text-4xl font-black tracking-tighter leading-none mb-3">Institutional Calendar</h3>
                                            <p className="text-white/60 text-[13px] font-medium uppercase tracking-widest">Academic Schedule for 2023-26 Batches</p>
                                        </div>
                                    </div>
                                    <div className="p-12">
                                        <div className="overflow-x-auto no-scrollbar">
                                            <table className="w-full text-left">
                                                <thead>
                                                    <tr className="border-b border-slate-100">
                                                        <th className="px-8 py-6 text-[10px] font-black text-[#224292] uppercase tracking-[0.3em]">Academic Year</th>
                                                        <th className="px-8 py-6 text-[10px] font-black text-[#224292] uppercase tracking-[0.3em]">Semester Phase</th>
                                                        <th className="px-8 py-6 text-[10px] font-black text-[#224292] uppercase tracking-[0.3em] text-right">Action</th>
                                                    </tr>
                                                </thead>
                                                <tbody className="divide-y divide-slate-50">
                                                    {loadingSchedules ? (
                                                        <tr>
                                                            <td colSpan="3" className="px-8 py-32 text-center">
                                                                <div className="flex flex-col items-center gap-4">
                                                                    <div className="w-12 h-12 border-4 border-[#ffc107] border-t-transparent rounded-full animate-spin" />
                                                                    <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Syncing with server...</span>
                                                                </div>
                                                            </td>
                                                        </tr>
                                                    ) : (
                                                        schedules.length > 0 ? (
                                                            schedules.map((row, i) => (
                                                                <tr key={i} className="hover:bg-slate-50 transition-all group">
                                                                    <td className="px-8 py-8">
                                                                        <span className="text-lg font-black text-[#224292] group-hover:text-[#ffc107] transition-colors">{row.year_or_version}</span>
                                                                    </td>
                                                                    <td className="px-8 py-8">
                                                                        <span className="px-4 py-1.5 bg-slate-50 rounded-full text-[10px] font-black text-slate-400 uppercase tracking-widest group-hover:bg-[#224292]/5 group-hover:text-[#224292] transition-all">
                                                                            {row.semester}
                                                                        </span>
                                                                    </td>
                                                                    <td className="px-8 py-8 text-right">
                                                                        <button 
                                                                            onClick={() => window.open(row.pdf_url, '_blank')}
                                                                            className="w-12 h-12 rounded-2xl bg-slate-50 flex items-center justify-center text-[#224292] hover:bg-[#ffc107] hover:shadow-xl transition-all ml-auto group/dl"
                                                                        >
                                                                            <Download size={20} className="group-hover/dl:scale-110 transition-transform" />
                                                                        </button>
                                                                    </td>
                                                                </tr>
                                                            ))
                                                        ) : (
                                                            <tr>
                                                                <td colSpan="3" className="px-8 py-20 text-center">
                                                                    <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">No records found.</span>
                                                                </td>
                                                            </tr>
                                                        )
                                                    )}
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </div>
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
                                    <div className="bg-[#224292] p-12 rounded-[4rem] text-white relative overflow-hidden shadow-2xl h-full flex flex-col justify-between">
                                        <div className="absolute -bottom-20 -right-20 opacity-10">
                                            <UserCheck size={400} />
                                        </div>
                                        <div className="relative z-10">
                                            <div className="w-16 h-16 bg-white/10 rounded-3xl flex items-center justify-center mb-10 backdrop-blur-md">
                                                <UserCheck size={32} className="text-[#ffc107]" />
                                            </div>
                                            <h3 className="text-4xl font-black tracking-tighter mb-8 leading-tight">Credits Equivalence Committee (CEC)</h3>
                                            <p className="text-white/60 text-lg font-medium leading-relaxed mb-16">
                                                Ensuring academic standards for external certifications and credit transfers across diverse academic streams.
                                            </p>
                                        </div>
                                        <div className="relative z-10 space-y-4">
                                            <p className="text-[10px] font-black text-[#ffc107] uppercase tracking-[0.3em] mb-4">Board Composition</p>
                                            {[
                                                { role: 'Institutional Chairman', name: 'Senior Professor' },
                                                { role: 'Member Secretary', name: 'Director, CDDA' },
                                                { role: 'Subject Expert', name: 'Concerned Head of the Department' }
                                            ].map((m, i) => (
                                                <div key={i} className="flex items-center gap-5 p-4 bg-white/5 rounded-3xl border border-white/5">
                                                    <div className="w-10 h-10 bg-white/10 rounded-2xl flex items-center justify-center">
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
                                    <div className="bg-white border border-slate-100 rounded-[4rem] p-12 shadow-sm h-full">
                                        <h4 className="text-3xl font-black text-[#224292] mb-12 tracking-tight">Institutional Functions</h4>
                                        <div className="grid sm:grid-cols-2 gap-8">
                                            {[
                                                'Approve credit transfers for hybrid and off-campus certifications.',
                                                'Validating external course alignment with KIOT curriculum.',
                                                'Standardizing assessment and marks conversion protocols.',
                                                'Credit categorization for professional elective exemptions.',
                                                'Approving foreign language certifications for academic credits.',
                                                'Evaluating academic equivalence for transfer students.',
                                                'Reviewing corporate-aligned industry course integration.',
                                                'Updating credit guidelines per global regulatory changes.'
                                            ].map((func, i) => (
                                                <div key={i} className="flex items-start gap-5 p-6 rounded-[2rem] hover:bg-slate-50 border border-transparent hover:border-slate-100 transition-all group">
                                                    <div className="w-8 h-8 rounded-xl bg-emerald-50 flex items-center justify-center text-emerald-500 shrink-0 group-hover:bg-emerald-500 group-hover:text-white transition-all shadow-inner">
                                                        <CheckCircle2 size={16} />
                                                    </div>
                                                    <p className="text-[13px] font-bold text-slate-600 leading-relaxed">{func}</p>
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
                            <div className="text-center max-w-3xl mx-auto mb-20">
                                <div className="inline-flex items-center gap-3 px-4 py-2 bg-amber-50 rounded-full mb-6">
                                    <Trophy size={16} className="text-amber-600" />
                                    <span className="text-[10px] font-black text-amber-600 uppercase tracking-widest">Optional Excellence Pathway</span>
                                </div>
                                <h2 className="text-4xl md:text-5xl font-black text-[#224292] tracking-tighter mb-6 leading-tight">Advanced Degree Specializations</h2>
                                <p className="text-slate-500 font-medium leading-relaxed">
                                    Elevate your professional profile with additional credits in core verticals or multidisciplinary domains.
                                </p>
                            </div>

                            <div className="grid md:grid-cols-2 gap-12 mb-24">
                                <div className="bg-white border border-slate-100 rounded-[4rem] p-12 shadow-sm relative overflow-hidden group hover:shadow-2xl transition-all">
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
                                        <p className="text-[15px] font-bold text-slate-600 leading-relaxed mb-10">
                                            Earn an additional 18 credits within the <span className="text-[#224292]">SAME Faculty</span> to gain deep specialized expertise in your primary discipline.
                                        </p>
                                        <div className="space-y-4 mb-12">
                                            {[
                                                'Minimum CGPA of 7.50 at end of 3rd sem.',
                                                'No history of standing arrears.',
                                                'All courses passed in the first attempt.',
                                                'Optional path towards research & innovation.'
                                            ].map((item, i) => (
                                                <div key={i} className="flex items-center gap-4 text-[13px] font-black text-slate-500">
                                                    <div className="w-2 h-2 bg-amber-400 rounded-full" />
                                                    {item}
                                                </div>
                                            ))}
                                        </div>
                                        <div className="p-6 bg-slate-50 rounded-[2rem] flex items-center justify-between">
                                            <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Requirement</span>
                                            <span className="text-lg font-black text-[#224292]">18 Credits</span>
                                        </div>
                                    </div>
                                </div>

                                <div className="bg-white border border-slate-100 rounded-[4rem] p-12 shadow-sm relative overflow-hidden group hover:shadow-2xl transition-all">
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
                                        <p className="text-[15px] font-bold text-slate-600 leading-relaxed mb-10">
                                            Broaden your horizons by earning 18 additional credits from a <span className="text-[#224292]">DIFFERENT Faculty</span> or Discipline.
                                        </p>
                                        <div className="space-y-4 mb-12">
                                            {[
                                                'Minimum CGPA of 7.50 without arrears.',
                                                'Exposure to diverse industrial domains.',
                                                'Integration of emerging tech specializations.',
                                                'Flexible elective pathway for graduates.'
                                            ].map((item, i) => (
                                                <div key={i} className="flex items-center gap-4 text-[13px] font-black text-slate-500">
                                                    <div className="w-2 h-2 bg-emerald-400 rounded-full" />
                                                    {item}
                                                </div>
                                            ))}
                                        </div>
                                        <div className="p-6 bg-slate-50 rounded-[2rem] flex items-center justify-between">
                                            <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Requirement</span>
                                            <span className="text-lg font-black text-[#224292]">18 Credits</span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="max-w-4xl mx-auto">
                                <div className="bg-white border border-slate-100 rounded-[4rem] overflow-hidden shadow-2xl">
                                    <div className="bg-[#224292] p-10 text-white flex items-center justify-between">
                                        <div>
                                            <h4 className="text-3xl font-black tracking-tight">Minor Specialization Domains</h4>
                                            <p className="text-white/50 text-[11px] font-black uppercase tracking-[0.3em] mt-2">Available for Other Departments</p>
                                        </div>
                                        <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center">
                                            <Settings size={32} className="text-[#ffc107] animate-spin-slow" />
                                        </div>
                                    </div>
                                    <div className="p-8">
                                        <table className="w-full text-left">
                                            <thead>
                                                <tr className="border-b border-slate-100">
                                                    <th className="px-8 py-6 text-[10px] font-black text-[#224292] uppercase tracking-[0.3em]">Offering Department</th>
                                                    <th className="px-8 py-6 text-[10px] font-black text-[#224292] uppercase tracking-[0.3em]">Domain Specialization</th>
                                                </tr>
                                            </thead>
                                            <tbody className="divide-y divide-slate-50">
                                                {minorDegrees.length > 0 ? (
                                                    minorDegrees.map((m, i) => (
                                                        <tr key={i} className="hover:bg-slate-50/50 transition-all group">
                                                            <td className="px-8 py-8 text-sm font-black text-[#224292]">{m.dept}</td>
                                                            <td className="px-8 py-8">
                                                                <div className="flex items-center gap-4">
                                                                    <div className="w-3 h-3 bg-[#ffc107] rounded-full group-hover:scale-150 transition-transform" />
                                                                    <span className="text-[15px] font-bold text-slate-600">{m.spec}</span>
                                                                </div>
                                                            </td>
                                                        </tr>
                                                    ))
                                                ) : (
                                                    <tr>
                                                        <td colSpan="2" className="px-8 py-20 text-center">
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
    )
}

export default AutonomousPage
