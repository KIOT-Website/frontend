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
import campusImg from '../assets/main/kiot-campus.webp'

const AutonomousPage = () => {
    const [schedules, setSchedules] = useState([])
    const [loadingSchedules, setLoadingSchedules] = useState(true)
    const [expandedCommittee, setExpandedCommittee] = useState(null)
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
            desc: 'The principal academic authority responsible for maintaining quality and planning curriculum.',
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
            ],
            mom: true
        },
        {
            name: 'Board of Studies (BoS)',
            desc: 'Departmental academic body responsible for curriculum planning and departmental excellence.',
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
            ],
            mom: true
        },
        {
            name: 'Finance Committee',
            desc: 'Statutory body responsible for planning and monitoring financial resources.',
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
            ],
            mom: true
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
        { dept: 'ECE', spec: 'Automotive Electronics' },
    ]

    const scrollToSection = (id) => {
        const element = document.getElementById(id);
        if (element) {
            const offset = 180; // Account for both main header and sticky sub-nav
            const bodyRect = document.body.getBoundingClientRect().top;
            const elementRect = element.getBoundingClientRect().top;
            const elementPosition = elementRect - bodyRect;
            const offsetPosition = elementPosition - offset;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        }
    };

    return (
        <div className="min-h-screen bg-[#F8FAFC] font-graphik text-[#1a1a1a]">
            {/* ─── PREMIUM HERO SECTION ─── */}
            <section className="relative h-[45vh] flex flex-col justify-end bg-[#224292]">
                <div className="absolute inset-0">
                    <img src={campusImg} alt="Campus" className="w-full h-full object-cover opacity-40 mix-blend-overlay" />
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#224292]/40 to-[#224292]" />
                </div>
                
                <div className="relative z-10 max-w-7xl mx-auto px-6 w-full mb-12">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <h1 className="text-4xl md:text-6xl font-black text-white tracking-tighter mb-4 uppercase">Autonomous</h1>
                        <p className="text-lg font-bold text-[#ffc107] italic mb-6">Academic Autonomy for Excellence</p>
                        <p className="text-white/70 text-sm leading-relaxed font-medium max-w-2xl">
                            Our autonomous status empowers the institution to design industry-aligned curriculum, 
                            innovative pedagogy, and outcome-based education for producing globally competent professionals.
                        </p>
                    </motion.div>
                </div>

                {/* ─── SCROLL SENTINEL (Placed inside hero to trigger stickiness exactly at the bottom) ─── */}
                <div ref={sentinelRef} className="h-px w-full" />

                {/* ─── STICKY ANCHOR NAVIGATION (Part of Hero initially) ─── */}
                <div 
                    className={`${isSticky ? 'fixed top-[104px] shadow-2xl bg-[#224292]/95 backdrop-blur-md' : 'relative bg-[#224292]'} z-[45] w-full border-t border-white/10 border-b transition-all duration-300`}
                >
                    <div className="max-w-[1400px] mx-auto px-2 lg:px-4">
                        <div className="flex items-center justify-center gap-2 lg:gap-3 py-4">
                            {tabs.map((tab) => (
                                <button
                                    key={tab.id}
                                    onClick={() => scrollToSection(tab.id)}
                                    className="flex items-center gap-2 px-3 lg:px-5 py-2 rounded-full bg-[#ffc107] hover:bg-white text-[#224292] transition-all shadow-md group shrink-0"
                                >
                                    <tab.icon size={13} className="text-[#224292] font-black hidden lg:block" />
                                    <span className="text-[9px] lg:text-[10px] font-black uppercase tracking-tight whitespace-nowrap">{tab.name}</span>
                                </button>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* SPACER FOR FIXED NAV */}
            {isSticky && <div className="h-[73px]" />}

            {/* ─── CONTENT BLOCKS ─── */}
            <div className="max-w-7xl mx-auto px-6 space-y-32 py-24">
                
                {/* 1. OVERVIEW SECTION */}
                <section id="overview" className="scroll-mt-32">
                    <div className="max-w-4xl mb-16">
                        <div className="flex items-center gap-4 mb-8">
                            <div className="w-14 h-14 bg-blue-50 rounded-[1.5rem] flex items-center justify-center text-[#224292]">
                                <Layout size={28} />
                            </div>
                            <div>
                                <h2 className="text-4xl font-black text-[#224292] tracking-tighter">Academic Overview</h2>
                                <p className="text-xs font-black text-slate-400 uppercase tracking-widest mt-1">Foundations of Excellence</p>
                            </div>
                        </div>
                        <p className="text-xl font-bold text-slate-600 leading-relaxed mb-12">
                            Autonomous status granted by UGC, AICTE and Anna University enables us to achieve academic excellence 
                            through flexibility, innovation and industry-oriented education.
                        </p>
                        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                            {[
                                { title: 'Academic Freedom', desc: 'Design and deliver need based and industry aligned curriculum.', icon: GraduationCap, color: 'text-blue-600', bg: 'bg-blue-50' },
                                { title: 'Outcome Based Education', desc: 'Focus on measurable outcomes and continuous improvement.', icon: Activity, color: 'text-emerald-600', bg: 'bg-emerald-50' },
                                { title: 'Industry Aligned', desc: 'Curriculum integrates emerging technologies and industry practices.', icon: Zap, color: 'text-orange-600', bg: 'bg-orange-50' },
                                { title: 'Quality Assurance', desc: 'Comply with NBA / NAAC standards for quality education.', icon: ShieldCheck, color: 'text-purple-600', bg: 'bg-purple-50' }
                            ].map((card, i) => (
                                <motion.div 
                                    key={i} 
                                    whileHover={{ y: -10 }}
                                    className="p-8 bg-white border border-slate-100 rounded-[2.5rem] shadow-sm hover:shadow-2xl transition-all group"
                                >
                                    <div className={`w-12 h-12 ${card.bg} ${card.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                                        <card.icon size={24} />
                                    </div>
                                    <h4 className="text-[13px] font-black mb-4 text-[#224292]">{card.title}</h4>
                                    <p className="text-[11px] text-slate-500 font-bold leading-relaxed">{card.desc}</p>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    {/* Six-Leg Model */}
                    <div className="pt-24 border-t border-slate-100">
                        <div className="text-center max-w-3xl mx-auto mb-16">
                            <h3 className="text-3xl font-black text-[#224292] mb-6">Unique Six-LEG Model Curriculum</h3>
                            <p className="text-slate-500 font-medium leading-relaxed">
                                Nurturing technically strong, digitally empowered, industry-ready professionals with Higher-Order Thinking Skills (HOTS) 
                                and multi-disciplinary exposure.
                            </p>
                        </div>
                        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
                            {legModel.map((leg) => (
                                <div key={leg.id} className="flex flex-col items-center text-center group">
                                    <div className="relative mb-6">
                                        <div className={`w-20 h-20 ${leg.color} rounded-[2rem] flex items-center justify-center text-white font-black text-xl group-hover:rotate-12 transition-transform shadow-lg relative z-10`}>
                                            {leg.id}
                                        </div>
                                        <div className="absolute inset-0 bg-slate-200 rounded-[2rem] blur-xl opacity-20 group-hover:opacity-40 transition-opacity" />
                                    </div>
                                    <span className="text-[9px] font-black uppercase tracking-[0.2em] text-slate-400 mb-2">Stage {leg.id}</span>
                                    <p className="text-[13px] font-black text-[#224292] leading-tight px-2">{leg.title}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* 2. APPROVALS SECTION */}
                <section id="approvals" className="scroll-mt-32">
                    <div className="flex items-center gap-4 mb-12">
                        <div className="w-14 h-14 bg-emerald-50 rounded-[1.5rem] flex items-center justify-center text-emerald-600">
                            <ShieldCheck size={28} />
                        </div>
                        <div>
                            <h2 className="text-4xl font-black text-[#224292] tracking-tighter">Formal Approvals</h2>
                            <p className="text-xs font-black text-slate-400 uppercase tracking-widest mt-1">Accreditations & Certifications</p>
                        </div>
                    </div>
                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            { name: 'UGC', full: 'University Grants Commission', desc: 'Autonomous Status Conferment (2022)', file: ugcFile },
                            { name: 'AICTE', full: 'Technical Education Council', desc: 'Approved for Engineering Programs', file: null },
                            { name: 'Anna University', full: 'Affiliated University', desc: 'Institutional Affiliation & Clearance', file: auFile }
                        ].map((app, i) => (
                            <div key={i} className="p-10 bg-white border border-slate-100 rounded-[3rem] shadow-sm hover:shadow-2xl transition-all group relative overflow-hidden">
                                <div className="absolute -top-10 -right-10 w-32 h-32 bg-slate-50 rounded-full group-hover:scale-150 transition-transform duration-500" />
                                <div className="relative z-10">
                                    <div className="w-16 h-16 bg-slate-50 rounded-2xl flex items-center justify-center mb-8 text-[#224292] group-hover:bg-[#224292] group-hover:text-[#ffc107] transition-all">
                                        <ShieldCheck size={32} />
                                    </div>
                                    <h3 className="text-2xl font-black text-[#224292] mb-2">{app.name}</h3>
                                    <p className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] mb-6">{app.full}</p>
                                    <div className="flex items-center gap-2 mb-10">
                                        <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse" />
                                        <span className="text-[10px] font-black text-emerald-600 uppercase tracking-widest">Active Approval</span>
                                    </div>
                                    {app.file && (
                                        <button 
                                            onClick={() => window.open(app.file, '_blank')}
                                            className="px-6 py-4 bg-[#224292]/5 hover:bg-[#224292] text-[#224292] hover:text-white rounded-2xl text-[10px] font-black uppercase tracking-[0.2em] transition-all w-full flex items-center justify-center gap-3"
                                        >
                                            <Download size={14} /> View Certificate
                                        </button>
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* 3. STATUTORY COMMITTEES */}
                <section id="committees" className="scroll-mt-32">
                    <div className="flex items-center gap-4 mb-12">
                        <div className="w-14 h-14 bg-purple-50 rounded-[1.5rem] flex items-center justify-center text-purple-600">
                            <Users size={28} />
                        </div>
                        <div>
                            <h2 className="text-4xl font-black text-[#224292] tracking-tighter">Statutory Committees</h2>
                            <p className="text-xs font-black text-slate-400 uppercase tracking-widest mt-1">Governance & Academic Oversight</p>
                        </div>
                    </div>
                    <div className="grid gap-6">
                        {committees.map((c, i) => (
                            <div key={i} className="bg-white border border-slate-100 rounded-[3rem] overflow-hidden shadow-sm hover:shadow-xl transition-all">
                                <button 
                                    onClick={() => setExpandedCommittee(expandedCommittee === i ? null : i)}
                                    className="w-full px-10 py-10 flex flex-col md:flex-row md:items-center justify-between text-left group gap-6"
                                >
                                    <div className="flex items-center gap-8">
                                        <div className="w-16 h-16 bg-slate-50 rounded-3xl flex items-center justify-center text-[#224292] group-hover:bg-[#224292] group-hover:text-white transition-all shadow-inner">
                                            <Users size={32} />
                                        </div>
                                        <div>
                                            <h3 className="text-2xl font-black text-[#224292] mb-2">{c.name}</h3>
                                            <p className="text-sm font-medium text-slate-500 max-w-xl">{c.desc}</p>
                                        </div>
                                    </div>
                                    <div className={`w-12 h-12 rounded-full bg-slate-50 flex items-center justify-center transition-all ${expandedCommittee === i ? 'rotate-180 bg-[#ffc107] text-[#224292]' : 'text-slate-300'}`}>
                                        <ChevronDown size={24} />
                                    </div>
                                </button>
                                <AnimatePresence>
                                    {expandedCommittee === i && (
                                        <motion.div
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{ height: 'auto', opacity: 1 }}
                                            exit={{ height: 0, opacity: 0 }}
                                            className="overflow-hidden bg-slate-50/50"
                                        >
                                            <div className="px-10 pb-12 pt-6 grid lg:grid-cols-12 gap-12">
                                                <div className="lg:col-span-7">
                                                    <h4 className="text-[11px] font-black uppercase tracking-[0.2em] text-[#224292] mb-8 flex items-center gap-3">
                                                        <div className="w-6 h-1 bg-[#ffc107] rounded-full" />
                                                        Primary Functions
                                                    </h4>
                                                    <div className="grid sm:grid-cols-1 gap-4">
                                                        {c.functions.map((f, j) => (
                                                            <div key={j} className="flex items-start gap-4 p-4 bg-white rounded-2xl border border-slate-100/50 shadow-sm">
                                                                <div className="w-5 h-5 bg-emerald-50 rounded-full flex items-center justify-center text-emerald-500 shrink-0 mt-0.5">
                                                                    <CheckCircle2 size={12} />
                                                                </div>
                                                                <p className="text-[13px] font-bold text-slate-600 leading-relaxed">{f}</p>
                                                            </div>
                                                        ))}
                                                    </div>
                                                </div>
                                                <div className="lg:col-span-5 space-y-12">
                                                    <div>
                                                        <h4 className="text-[11px] font-black uppercase tracking-[0.2em] text-[#224292] mb-8 flex items-center gap-3">
                                                            <div className="w-6 h-1 bg-[#ffc107] rounded-full" />
                                                            Institutional Records
                                                        </h4>
                                                        <div className="grid grid-cols-2 gap-4">
                                                            <button className="p-6 bg-white border border-slate-100 rounded-[2rem] flex flex-col items-center gap-4 hover:shadow-xl transition-all group/btn">
                                                                <div className="w-12 h-12 bg-slate-50 rounded-2xl flex items-center justify-center text-slate-400 group-hover/btn:text-[#224292] transition-colors">
                                                                    <UserCheck size={24} />
                                                                </div>
                                                                <span className="text-[10px] font-black uppercase tracking-widest text-slate-400 group-hover/btn:text-[#224292]">Members List</span>
                                                            </button>
                                                            <button className="p-6 bg-white border border-slate-100 rounded-[2rem] flex flex-col items-center gap-4 hover:shadow-xl transition-all group/btn">
                                                                <div className="w-12 h-12 bg-slate-50 rounded-2xl flex items-center justify-center text-slate-400 group-hover/btn:text-red-500 transition-colors">
                                                                    <FileText size={24} />
                                                                </div>
                                                                <span className="text-[10px] font-black uppercase tracking-widest text-slate-400 group-hover/btn:text-[#224292]">Minutes (MoM)</span>
                                                            </button>
                                                        </div>
                                                    </div>
                                                    {c.name === 'Board of Studies (BoS)' && (
                                                        <div>
                                                            <h4 className="text-[11px] font-black uppercase tracking-[0.2em] text-[#224292] mb-8 flex items-center gap-3">
                                                                <div className="w-6 h-1 bg-[#ffc107] rounded-full" />
                                                                Departmental Boards
                                                            </h4>
                                                            <div className="space-y-2">
                                                                {[
                                                                    { name: "Mechanical Engineering", file: mechBos },
                                                                    { name: "Electronics & Comm. (ECE)", file: eceBos },
                                                                    { name: "Electrical & Electronics (EEE)", file: eeeBos },
                                                                    { name: "Computer Science (CSE)", file: cseBos },
                                                                    { name: "Civil Engineering", file: civilBos },
                                                                    { name: "Science and Humanities", file: shBos },
                                                                    { name: "Management Studies (MBA)", file: mbaBos }
                                                                ].map((faculty, idx) => (
                                                                    <button 
                                                                        key={idx}
                                                                        onClick={() => window.open(faculty.file, '_blank')}
                                                                        className="w-full px-6 py-4 bg-white border border-slate-100 rounded-2xl flex items-center justify-between hover:border-[#224292] transition-all group/sub shadow-sm"
                                                                    >
                                                                        <span className="text-xs font-black text-slate-600 group-hover/sub:text-[#224292] uppercase tracking-wide">{faculty.name}</span>
                                                                        <Download size={14} className="text-slate-300 group-hover/sub:text-[#ffc107] transition-colors" />
                                                                    </button>
                                                                ))}
                                                            </div>
                                                        </div>
                                                    )}
                                                </div>
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>
                        ))}
                    </div>
                </section>

                {/* 4. CDDA SECTION */}
                <section id="cdda" className="scroll-mt-32">
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
                </section>

                {/* 5. REGULATIONS SECTION */}
                <section id="regulations" className="scroll-mt-32">
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
                </section>

                {/* 6. CURRICULUM & SYLLABI */}
                <section id="syllabi" className="scroll-mt-32">
                    <div className="flex items-center gap-4 mb-16 text-center md:text-left justify-center md:justify-start">
                        <div className="w-14 h-14 bg-rose-50 rounded-[1.5rem] flex items-center justify-center text-rose-600">
                            <BookOpen size={28} />
                        </div>
                        <div>
                            <h2 className="text-4xl font-black text-[#224292] tracking-tighter">Curriculum & Syllabi</h2>
                            <p className="text-xs font-black text-slate-400 uppercase tracking-widest mt-1">Institutional Study Schemes</p>
                        </div>
                    </div>
                    <div className="grid lg:grid-cols-2 gap-12">
                        {/* UG Syllabi */}
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

                        {/* PG Syllabi */}
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
                </section>

                {/* 7. ACADEMIC SCHEDULE */}
                <section id="schedule" className="scroll-mt-32">
                    <div className="max-w-5xl mx-auto">
                        <div className="bg-white border border-slate-100 rounded-[4rem] overflow-hidden shadow-2xl relative">
                            <div className="bg-[#224292] p-12 text-white relative">
                                <div className="absolute top-0 right-0 p-12 opacity-10">
                                    <Calendar size={150} />
                                </div>
                                <div className="relative z-10 flex items-center gap-8">
                                    <div className="w-20 h-20 bg-white/10 rounded-3xl flex items-center justify-center text-[#ffc107] backdrop-blur-md border border-white/10">
                                        <Calendar size={40} />
                                    </div>
                                    <div>
                                        <h3 className="text-4xl font-black tracking-tighter leading-none mb-3">Institutional Calendar</h3>
                                        <p className="text-white/60 text-[13px] font-medium uppercase tracking-widest">Academic Schedule for 2023-26 Batches</p>
                                    </div>
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
                                            )}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* 8. CEC SECTION */}
                <section id="cec" className="scroll-mt-32">
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
                </section>

                {/* 9. HONOURS/MINOR DEGREE */}
                <section id="honours" className="scroll-mt-32">
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
                        {/* Honours */}
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

                        {/* Minor */}
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

                    {/* Specializations Table */}
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
                                        {minorDegrees.map((m, i) => (
                                            <tr key={i} className="hover:bg-slate-50/50 transition-all group">
                                                <td className="px-8 py-8 text-sm font-black text-[#224292]">{m.dept}</td>
                                                <td className="px-8 py-8">
                                                    <div className="flex items-center gap-4">
                                                        <div className="w-3 h-3 bg-[#ffc107] rounded-full group-hover:scale-150 transition-transform" />
                                                        <span className="text-[15px] font-bold text-slate-600">{m.spec}</span>
                                                    </div>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </section>

            </div>

            {/* ─── FINAL FOOTER CTA ─── */}
            <section className="bg-[#224292] py-24 px-6 relative overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:32px_32px] opacity-[0.05]" />
                <div className="max-w-4xl mx-auto text-center relative z-10">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-5xl md:text-6xl font-black text-white tracking-tighter mb-8 leading-tight">Empowering Innovation Through Autonomy.</h2>
                        <p className="text-white/60 text-lg font-medium leading-relaxed mb-12 max-w-2xl mx-auto">
                            Join the ranks of thousands of graduates who have benefited from KIOT's forward-thinking academic framework 
                            and industry-integrated curriculum.
                        </p>
                        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                            <button className="px-12 py-6 bg-[#ffc107] text-[#224292] rounded-[2rem] font-black text-[12px] uppercase tracking-[0.3em] hover:scale-105 transition-all shadow-2xl shadow-yellow-500/20">
                                Contact Academic Council
                            </button>
                            <button className="px-12 py-6 bg-white/10 text-white rounded-[2rem] font-black text-[12px] uppercase tracking-[0.3em] hover:bg-white/20 transition-all border border-white/20">
                                Download Prospectus
                            </button>
                        </div>
                    </motion.div>
                </div>
            </section>
        </div>
    )
}

export default AutonomousPage
