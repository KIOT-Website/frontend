import { useState, useRef, useEffect, useLayoutEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import {
  GraduationCap, Clock, Users, ChevronDown, ChevronRight,
  Download, ArrowLeft, Briefcase, FlaskConical, BookOpen,
  Award, Building2, CheckCircle, ArrowRight, ExternalLink,
  Microscope, Star, MapPin, Layers, Cpu, Globe, Wrench, ShieldCheck,
  BarChart3, FileText, Mail, X, Target, TrendingUp, Loader2, Trophy, Plus,
  Calendar, Zap
} from 'lucide-react'
import { courseData } from '../../data/courseData'
import cseImage from '../../assets/main/CSE .webp'

const API_BASE = 'http://127.0.0.1:8000'

const ACHIEVEMENT_DEPARTMENT_OVERRIDES = {
  'be-mechanical': 'B.E. MECHANICAL ENGINEERING',
  'be-cse': 'B.E. COMPUTER SCIENCE AND ENGINEERING',
  'be-ece': 'B.E. ELECTRONICS AND COMMUNICATION ENGINEERING',
  'btech-it': 'B.TECH INFORMATION TECHNOLOGY',
  'btech-aids': 'B.TECH ARTIFICIAL INTELLIGENCE AND DATA SCIENCE',
  'be-eee': 'B.E. ELECTRICAL AND ELECTRONICS ENGINEERING',
  'btech-csbs': 'B.TECH COMPUTER SCIENCE AND BUSINESS SYSTEMS',
  'be-civil': 'B.E. CIVIL ENGINEERING',
}

const getAchievementDepartmentName = (courseId, courseName) => {
  if (ACHIEVEMENT_DEPARTMENT_OVERRIDES[courseId]) {
    return ACHIEVEMENT_DEPARTMENT_OVERRIDES[courseId]
  }

  return courseName
    .toUpperCase()
    .replace(/^B\.?\s*E\.?\s+/, 'B.E. ')
    .replace(/^B\.?\s*TECH\.?\s+/, 'B.TECH ')
    .replace(/\s*&\s*/g, ' AND ')
    .replace(/\s+/g, ' ')
    .trim()
}

// Fallback for courses without full data
const defaultCourse = (id) => ({
  name: id.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' '),
  short: 'Engineering Program',
  duration: '4 Years (8 Semesters)',
  intake: 60,
  affiliation: 'Anna University',
  accreditation: 'NBA Accredited',
  placement: '92%',
  avgPackage: '4.8 LPA',
  topPackage: '20 LPA',
  icon: BookOpen,
  color: '#18357a',
  tagline: 'Learn. Grow. Succeed.',
  overview: 'This program offers a rigorous academic curriculum combined with industry-relevant hands-on training, preparing students for high-impact careers.',
  whyChoose: ['NBA Accredited', 'Experienced faculty', 'Industry partnerships', 'Placement assistance'],
  curriculum: [
    { year: 'Year 1 – Foundation', semesters: ['Mathematics', 'Physics', 'Engineering Graphics', 'Programming Basics'] },
    { year: 'Year 2 – Core', semesters: ['Core Subject I', 'Core Subject II', 'Core Subject III', 'Core Subject IV'] },
    { year: 'Year 3 – Specialisation', semesters: ['Advanced Core I', 'Advanced Core II', 'Electives', 'Mini Project'] },
    { year: 'Year 4 – Capstone', semesters: ['Internship', 'Final Project', 'Advanced Electives', 'Industry Training'] },
  ],
  faculty: [
    { name: 'Dr. Faculty 1', designation: 'HoD & Professor', experience: '18 Years', specialization: 'Core Domain', rating: 4.8 },
    { name: 'Mrs. Faculty 2', designation: 'Associate Professor', experience: '10 Years', specialization: 'Applied Domain', rating: 4.6 },
  ],
  labs: [
    { name: 'Core Lab', equipment: 'Modern equipment and instruments', icon: FlaskConical },
    { name: 'Specialization Lab', equipment: 'Advanced domain-specific tools', icon: Cpu },
  ],
  companies: ['TCS', 'Infosys', 'Wipro', 'L&T', 'HCLTech'],
  placementStats: { placed: '90%', avg: '4.5 LPA', top: '15 LPA', companies: '50+' },
  projects: ['Industry-sponsored Capstone Project', 'Research & Innovation Project', 'Mini Project (Sem 6)'],
  eligibility: ['10+2 with PCM / relevant subjects', 'Minimum 50% aggregate', 'TNEA rank required'],
})

const TABS = ['Overview', 'Vision & Mission', 'Curriculum', 'Faculty', 'Labs', 'Patents', 'Placements', 'Achievements']

// ─── Accordion Item ──────────────────────────────────────────────────────────
function AccordionItem({ title, children, defaultOpen = false }) {
  const [open, setOpen] = useState(defaultOpen)
  return (
    <div className="border border-[#E5EDF8] rounded-2xl overflow-hidden">
      <button
        onClick={() => setOpen(o => !o)}
        className="w-full flex items-center justify-between p-5 bg-white hover:bg-[#F8FAFC] transition-colors text-left"
      >
        <span className="font-bold font-graphik text-[#18357a] text-[15px]">{title}</span>
        <ChevronDown size={18} className={`text-[#ffc107] transition-transform duration-300 ${open ? 'rotate-180' : ''}`} />
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0 }}
            animate={{ height: 'auto' }}
            exit={{ height: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <div className="border-t border-[#E5EDF8] bg-[#F8FAFC] px-5 py-4">
              {children}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

// ─── Main Component ──────────────────────────────────────────────────────────
export default function CourseDetailPage() {
  const { courseId } = useParams()
  const navigate = useNavigate()
  const [activeTab, setActiveTab] = useState('Overview')
  const [outcomeTab, setOutcomeTab] = useState(null)
  const [selectedFaculty, setSelectedFaculty] = useState(null)
  const [openLabIndices, setOpenLabIndices] = useState([0])
  const tabsRef = useRef(null)
  const labsDetailRef = useRef(null)

  const course = courseData[courseId] || defaultCourse(courseId)
  const Icon = course.icon

  const [activeObjectiveTab, setActiveObjectiveTab] = useState('PEO')

  const objectiveData = [
    { id: 'PEO', icon: Target, title: 'Program Educational Objectives', content: course.peo, color: 'text-[#18357a]', bg: 'bg-[#18357a]/5', activeBg: 'bg-[#18357a]', iconColor: 'text-[#ffc107]' },
    { id: 'PO', icon: Layers, title: 'Program Outcomes', content: course.po, color: 'text-[#ffc107]', bg: 'bg-[#ffc107]/5', activeBg: 'bg-[#ffc107]', iconColor: 'text-[#18357a]' },
    { id: 'PSO', icon: Star, title: 'Program Specific Outcomes', content: course.pso, color: 'text-[#18357a]', bg: 'bg-[#18357a]/5', activeBg: 'bg-[#18357a]', iconColor: 'text-[#ffc107]' }
  ]

  // Force window to scroll to absolute top on initial page load and course change
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
    setActiveTab('Overview'); // Reset to first tab for new departments
    
    // Safety delay to override any browser-native scroll restoration
    const timer = setTimeout(() => {
      window.scrollTo(0, 0);
    }, 5);
    return () => clearTimeout(timer);
  }, [courseId]);

  const activeObj = objectiveData.find(o => o.id === activeObjectiveTab)

  // Ensure tab content always scrolls to top when switching
  const isFirstMount = useRef(true);

  // Handle scroll to tabs ONLY when the user clicks a tab manually
  useEffect(() => {
    // If it's the first time the department loads, OR we are just on 'Overview', don't scroll down
    if (isFirstMount.current || activeTab === 'Overview') {
      isFirstMount.current = false;
      return;
    }

    if (tabsRef.current) {
      const headerOffset = 150; 
      const element = tabsRef.current;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
      
      setTimeout(() => {
        const currentTop = element.getBoundingClientRect().top + window.pageYOffset - headerOffset;
        if (Math.abs(window.pageYOffset - currentTop) > 10) {
            window.scrollTo({ top: currentTop, behavior: 'instant' });
        }
      }, 300);
    }
  }, [activeTab]);

  return (
    <div className="min-h-screen bg-[#F8FAFC] font-graphik text-[#333333]">

      {/* Hero */}
      <section className="relative overflow-hidden bg-[#18357a] pt-8 pb-10 md:pt-12 md:pb-16">
        {/* Background Image / Pattern Layer */}
        {/* Background Visuals - Clean Institutional Theme */}
        <div className="absolute inset-0 z-0 opacity-10 pointer-events-none">
          <div className="absolute inset-0" style={{ 
            backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
            backgroundSize: '32px 32px'
          }} />
        </div>
        <div className="absolute -right-32 -top-32 w-[500px] h-[500px] rounded-full bg-[#ffc107]/5 blur-[100px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Back button */}
          <button
            onClick={() => {
              const category = (courseId && (courseId.startsWith('be-') || courseId.startsWith('btech-'))) ? 'undergraduate' : 'postgraduate';
              navigate(`/academics/${category}`);
            }}
            className="mb-6 inline-flex items-center gap-2 text-white/60 hover:text-white text-[13px] font-bold font-graphik transition-colors"
          >
            <ArrowLeft size={15} /> Back to Academics
          </button>

          <div className="flex flex-col lg:flex-row lg:items-center gap-8">
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-4 flex-wrap">
                <span className="px-3 py-1 rounded-full bg-[#ffc107]/20 border border-[#ffc107]/30 text-[#ffc107] text-xs font-bold font-graphik">
                  {course.affiliation}
                </span>
                {course.accreditation && (
                  <span className="px-3 py-1 rounded-full bg-emerald-500/20 border border-emerald-500/30 text-emerald-300 text-xs font-bold font-graphik">
                    {course.accreditation}
                  </span>
                )}
              </div>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold font-graphik text-white mb-3 leading-tight">
                {course.name}
              </h1>
              <p className="text-[#ffc107] font-semibold font-graphik text-lg mb-6">{course.tagline}</p>

              {/* Course CTA Buttons */}
              <div className="flex flex-wrap gap-4">
                <button
                  onClick={() => navigate('/admissions')}
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#ffc107] text-[#18357a] font-bold font-graphik text-[14px] hover:bg-[#ffca2c] transition-all shadow-lg shadow-[#ffc107]/20"
                >
                  Quick Apply <ArrowRight size={15} />
                </button>
              </div>
            </div>

            {/* Right Column: Expansive Leaf Visual + Stats */}
            <div className="lg:w-[500px] flex flex-col gap-6 shrink-0 relative">
              {/* Massive Leaf-Shaped Branding Visual */}
              <div className="relative group">
                <div className="absolute -inset-4 bg-[#ffc107]/10 rounded-[10rem_3rem_10rem_3rem] blur-3xl opacity-0 group-hover:opacity-100 transition-duration-1000" />
                <div className="relative h-[300px] lg:h-[350px] w-full rounded-[10rem_3.5rem_10rem_3.5rem] overflow-hidden border-4 border-white/20 shadow-[0_50px_100px_-20px_rgba(0,0,0,0.5)] backdrop-blur-sm transition-transform duration-700 hover:scale-[1.02] hover:-rotate-1">
                  <img 
                    src={course.bannerImage || "https://images.unsplash.com/photo-1562774053-701939374585?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"} 
                    alt={course.name} 
                    className="w-full h-full object-cover scale-105 group-hover:scale-100 transition-transform duration-1000"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#18357a]/50 via-transparent to-transparent" />
                </div>
              </div>


            </div>
          </div>
        </div>
      </section>

      {/* ─── MOBILE TAB NAVIGATION (Pill Style) ─── */}
      <div className="md:hidden bg-[#18357a] py-8 px-6 border-t border-white/10">
        <div className="flex flex-wrap justify-center gap-3">
          {TABS.map(tab => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-5 py-2.5 rounded-full text-[12px] font-bold font-graphik transition-all border-2 ${
                activeTab === tab
                  ? 'bg-[#ffc107] border-[#ffc107] text-[#18357a] shadow-lg shadow-[#ffc107]/20 scale-105'
                  : 'bg-white/5 border-white/20 text-white hover:bg-white/10'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>

      {/* ─── DESKTOP TAB NAVIGATION (Pill Design) ─── */}
      <div ref={tabsRef} className="hidden md:block sticky top-[104px] z-30 bg-[#18357a] border-b border-white/10 shadow-xl">
        <div className="w-full px-6 lg:px-12 py-5">
          <div className="flex flex-wrap justify-center gap-3 lg:gap-4 max-w-7xl mx-auto">
            {TABS.map(tab => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`whitespace-nowrap px-6 py-2.5 text-[13px] font-black font-graphik transition-all rounded-full border-2 tracking-wide uppercase ${
                  activeTab === tab
                    ? 'bg-[#ffc107] border-[#ffc107] text-[#18357a] shadow-lg shadow-[#ffc107]/20 scale-105'
                    : 'bg-transparent border-white/20 text-white hover:border-white/50 hover:bg-white/5'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Tab Content */}
      <div className="w-full px-6 lg:px-12 py-10">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.3 }}
          >
            {/* ── OVERVIEW ── */}
            {activeTab === 'Overview' && (
              <div className="grid lg:grid-cols-3 gap-8">
                <div className="lg:col-span-2 space-y-8">


                    <div className="bg-transparent md:bg-white md:rounded-[2.5rem] md:border md:border-[#DEE7F4] p-0 md:p-14 md:shadow-2xl md:shadow-blue-900/5 transition-all relative overflow-hidden group">
                      {/* Decorative Background Pattern */}
                      <div className="absolute top-0 right-0 w-64 h-64 bg-slate-50 rounded-full -mr-32 -mt-32 blur-3xl group-hover:bg-blue-50 transition-colors duration-700" />
                      <div className="absolute bottom-0 left-0 w-32 h-32 bg-[#ffc107]/5 rounded-full -ml-16 -mb-16 blur-2xl" />

                      <div className="inline-flex items-center gap-3 px-5 py-2 rounded-full bg-[#18357a]/5 border border-[#18357a]/10 text-[#18357a] text-[9px] font-bold font-graphik uppercase tracking-[0.3em] mb-8">
                         <BookOpen size={14} className="text-[#18357a]" />
                         Program Roadmap
                      </div>

                      <h2 className="text-2xl md:text-3xl font-bold font-graphik text-[#18357a] mb-8 flex items-center gap-3 tracking-tighter">
                        About the Program
                      </h2>

                    <div className="relative z-10">
                      {Array.isArray(course.overview) ? (
                        <div className="space-y-6">
                          {course.overview.map((para, idx) => (
                           <p key={idx} className="text-black leading-relaxed text-[16px] font-medium font-graphik text-justify">
                              {para}
                            </p>
                          ))}
                        </div>
                      ) : (
                        <p className="text-black leading-relaxed text-[16px] font-medium font-graphik text-justify">
                          {course.overview}
                        </p>
                      )}
                    </div>

                    {/* Program Highlight Bar */}
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mt-12 pt-8 border-t border-slate-100">
                       <div className="space-y-1">
                          <p className="text-[10px] font-bold font-graphik uppercase tracking-[0.2em] text-[#A9B1C3]">Recognition</p>
                          <p className="text-[#18357a] font-bold font-graphik text-sm flex items-center gap-2">
                             <CheckCircle size={14} className="text-emerald-500" />
                             {course.accreditation}
                          </p>
                       </div>
                       <div className="space-y-1">
                          <p className="text-[10px] font-bold font-graphik uppercase tracking-[0.2em] text-[#A9B1C3]">Research Focus</p>
                          <p className="text-[#18357a] font-bold font-graphik text-sm flex items-center gap-2">
                             <Microscope size={14} className="text-blue-500" />
                             Modern Lab Infra
                          </p>
                       </div>
                       <div className="space-y-1">
                          <p className="text-[10px] font-bold font-graphik uppercase tracking-[0.2em] text-[#A9B1C3]">Career Path</p>
                          <p className="text-[#18357a] font-bold font-graphik text-sm flex items-center gap-2">
                             <Briefcase size={14} className="text-amber-500" />
                             Globally Networked
                          </p>
                       </div>
                    </div>
                  </div>
                  
                </div>

                <div className="space-y-6 flex flex-col">

                  {/* Modern Quick Info Card */}
                  <div className="bg-gradient-to-br from-[#18357a] to-[#0A1A3F] rounded-[2.5rem] p-8 text-white shadow-2xl shadow-[#18357a]/30 relative overflow-hidden">
                    <div className="absolute bottom-0 right-0 w-32 h-32 bg-white/5 rounded-full -mb-16 -mr-16 blur-2xl" />
                    <h3 className="font-bold font-graphik mb-8 text-[11px] uppercase tracking-[0.4em] text-[#ffc107]">Quick Insight</h3>
                    
                    <div className="space-y-6">
                      {[
                        { label: 'Timeframe', value: course.duration, icon: Clock },
                        { label: 'Intake', value: `${course.intake} Students`, icon: Users },
                        { label: 'Affiliations', value: course.affiliation, icon: Building2 },
                        { label: 'Standard', value: course.accreditation, icon: Award },
                      ].map(item => (
                        <div key={item.label} className="group cursor-default">
                          <p className="text-white/40 text-[10px] font-bold font-graphik uppercase tracking-widest mb-1 group-hover:text-[#ffc107] transition-colors">{item.label}</p>
                          <div className="flex items-center gap-3">
                             <item.icon size={16} className="text-white/20" />
                             <span className="text-white font-bold font-graphik text-sm tracking-tight">{item.value}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Sidebar Actions */}
                  <div className="space-y-4">
                    <button
                      onClick={() => navigate('/admissions')}
                      className="w-full flex items-center justify-center gap-3 p-5 rounded-2xl bg-white border-2 border-[#18357a] text-[#18357a] font-bold font-graphik text-[13px] uppercase tracking-widest hover:bg-[#18357a] hover:text-white transition-all shadow-sm"
                    >
                      Enroll Now <ArrowRight size={18} />
                    </button>

                  </div>
                </div>
              </div>
            )}

            {/* ── VISION & MISSION ── */}
            {activeTab === 'Vision & Mission' && (
                <>
                  <div className="space-y-16 py-12">
                    <div className="text-center mb-12">
                       <h2 className="text-3xl md:text-4xl font-bold font-graphik tracking-tight leading-tight">
                         <span className="text-[#18357a]">Strategic</span> <span className="text-[#ffc107]">Outlook</span>
                       </h2>
                    </div>

                    <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
                        {/* Vision Card - Refined Compact Design */}
                        <motion.div 
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="group relative bg-[#18357a] rounded-[2.5rem] p-8 md:p-10 shadow-[0_20px_40px_rgba(10,26,63,0.2)] overflow-hidden transition-all duration-700 hover:scale-[1.02]"
                        >
                            <div className="absolute inset-0 bg-gradient-to-br from-[#18357a] via-[#1d3c8c] to-[#0A1A3F] opacity-50" />
                            <Globe size={200} className="absolute -bottom-10 -right-10 text-white/5 opacity-0 group-hover:opacity-10 transition-all duration-700 rotate-12 group-hover:rotate-0" />
                            
                            <div className="relative z-10">
                                <div className="inline-flex items-center gap-2.5 px-5 py-2 rounded-full bg-white/10 backdrop-blur-xl border border-white/20 text-[#ffc107] text-[9px] font-bold font-graphik uppercase tracking-[0.3em] mb-8">
                                    <div className="w-2 h-2 rounded-full bg-[#ffc107] animate-pulse" />
                                    Perspective
                                </div>

                                <h3 className="text-3xl md:text-4xl font-bold font-graphik text-white mb-6 tracking-tighter uppercase leading-none">
                                    Our <span className="text-[#ffc107]">Vision</span>
                                </h3>

                                <div className="space-y-6">
                                    <div className="w-12 h-1 bg-[#ffc107] rounded-full group-hover:w-32 transition-all duration-700" />
                                    <p className="text-white/90 leading-relaxed text-[16px] md:text-[17px] font-medium font-graphik italic tracking-tight border-l-4 border-[#ffc107]/20 pl-6">
                                        "{course.vision || 'To provide a world-class academic environment for creating global leaders.'}"
                                    </p>
                                </div>
                            </div>
                        </motion.div>

                        {/* Mission Card - Refined Compact Design */}
                        <motion.div 
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="group relative bg-white rounded-[2.5rem] p-8 md:p-10 shadow-[0_20px_40px_rgba(10,26,63,0.05)] border border-[#DEE7F4] overflow-hidden transition-all duration-700 hover:scale-[1.02]"
                        >
                            <div className="absolute inset-0 bg-gradient-to-tr from-slate-50 to-white opacity-50" />
                            <Target size={200} className="absolute -bottom-10 -right-10 text-[#18357a]/5 opacity-0 group-hover:opacity-10 transition-all duration-700 rotate-12 group-hover:rotate-0" />

                            <div className="relative z-10">
                                <div className="inline-flex items-center gap-2.5 px-5 py-2 rounded-full bg-[#18357a]/5 border border-[#18357a]/10 text-[#18357a] text-[9px] font-bold font-graphik uppercase tracking-[0.3em] mb-8">
                                    <div className="w-2 h-2 rounded-full bg-[#18357a] animate-pulse" />
                                    Execution
                                </div>

                                <h3 className="text-3xl md:text-4xl font-bold font-graphik text-[#18357a] mb-6 tracking-tighter uppercase leading-none">
                                    Our <span className="text-[#ffc107]">Mission</span>
                                </h3>

                                <div className="space-y-6">
                                    <div className="w-12 h-1 bg-[#18357a] rounded-full group-hover:w-32 transition-all duration-700" />
                                    <p className="text-[#333333] leading-relaxed text-[16px] md:text-[17px] font-medium font-graphik tracking-tight text-justify border-l-4 border-slate-100 pl-6 whitespace-pre-line">
                                        {course.mission || 'To promote institutional excellence by fostering innovation, research, and high-quality teaching methodologies.'}
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>

                  <div className="bg-white rounded-[2.5rem] border border-[#DEE7F4] p-10 md:p-14 overflow-hidden mt-16">
                    <div className="flex flex-col xl:flex-row xl:items-end justify-between gap-10 mb-12 px-2">
                       <div>
                          <div className="inline-flex items-center gap-3 px-5 py-2 rounded-full bg-[#ffc107]/10 border border-[#ffc107]/20 text-[#18357a] text-[9px] font-bold font-graphik uppercase tracking-[0.3em] mb-4">
                             <Award size={14} className="text-[#18357a]" />
                             Quality Framework
                          </div>
                          <h2 className="text-2xl md:text-3xl font-bold font-graphik text-[#18357a] uppercase tracking-tighter">Academic Objectives</h2>
                       </div>
                       
                       <div className="flex flex-wrap items-center gap-3 bg-slate-50/50 p-2 rounded-[2rem] border border-slate-100">
                          {objectiveData.map((obj) => (
                            <button
                              key={obj.id}
                              onClick={() => setActiveObjectiveTab(obj.id)}
                              className={`px-8 py-4 rounded-[1.5rem] flex items-center gap-3 text-[10px] font-bold font-graphik uppercase tracking-[0.2em] transition-all duration-500 shadow-sm ${
                                activeObjectiveTab === obj.id
                                  ? `${obj.activeBg} text-white shadow-xl shadow-blue-900/10 scale-[1.03] translate-y-[-2px]`
                                  : 'bg-white text-[#64779F] hover:bg-white/80'
                              }`}
                            >
                               <obj.icon size={16} className={activeObjectiveTab === obj.id ? obj.iconColor : 'text-[#A9B1C3]'} />
                               {obj.id}
                            </button>
                          ))}
                       </div>
                    </div>

                    <div className="relative min-h-[300px]">
                      <AnimatePresence mode="wait">
                         <motion.div
                           key={activeObjectiveTab}
                           initial={{ opacity: 0, x: 20 }}
                           animate={{ opacity: 1, x: 0 }}
                           exit={{ opacity: 0, x: -20 }}
                           transition={{ duration: 0.4 }}
                           className="p-8 sm:p-10 rounded-[2.5rem] bg-slate-50/50 border border-[#DEE7F4]/50 group"
                         >
                            <div className="flex items-center gap-5 mb-10 pb-10 border-b border-slate-200/50">
                               <div className={`w-16 h-16 rounded-2xl ${activeObj.bg} flex items-center justify-center ${activeObj.color} group-hover:scale-110 transition-transform duration-500`}>
                                  <activeObj.icon size={32} />
                               </div>
                               <div>
                                  <h3 className="text-[13px] font-bold font-graphik tracking-[0.3em] text-[#18357a] uppercase">
                                    {activeObj.title}
                                  </h3>
                               </div>
                            </div>

                            <div className="space-y-4 font-graphik">
                                {(() => {
                                  const text = activeObj.content || 'Data current being optimized for digital view.';
                                  
                                  // Split by specific academic markers to ensure labels like PEO/PO/PSO are not fragmented
                                  // Updated regex to support multi-digit labels like PO-10, PO-11, etc.
                                  const points = text.split(/(?=(?:PEO|PO|PSO)\s*[-–]\s*\d+:)/g).map(p => p.trim()).filter(p => p.length > 0);
                                  
                                  return points.map((point, idx) => {
                                    // Check if this is an intro paragraph (doesn't start with a marker)
                                    const isIntro = !/^(?:PEO|PO|PSO)\s*[-–]\s*\d+:/i.test(point);
                                    
                                    if (isIntro) {
                                      return (
                                        <p key={idx} className="text-[#333333] font-medium font-graphik leading-relaxed text-[15px] sm:text-[16px] mb-6 border-b border-slate-100 pb-4">
                                          {point}
                                        </p>
                                      );
                                    }

                                    return (
                                      <div key={idx} className="flex gap-4 p-4 rounded-xl bg-white border border-slate-100 shadow-sm hover:shadow-md transition-all group/point">
                                        <div className="w-1.5 h-1.5 rounded-full bg-[#ffc107] mt-2.5 shrink-0 group-hover/point:scale-125 transition-transform" />
                                        <span className="text-[#333333] font-medium font-graphik leading-[1.8] text-[15px] sm:text-[16px]">
                                          {point}
                                        </span>
                                      </div>
                                    );
                                  });
                                })()}
                             </div>
                         </motion.div>
                      </AnimatePresence>
                     </div>
                  </div>
                </>
              )}

            {/* ── CURRICULUM ── */}
            {activeTab === 'Curriculum' && (
              <CurriculumSection courseId={courseId} courseName={course.name} />
            )}

            {/* ── FACULTY ── */}
            {activeTab === 'Faculty' && (
              <div>
                <div className="mb-6">
                  <h2 className="text-2xl font-extrabold font-graphik text-[#18357a] mb-1">Our Faculty</h2>
                  <p className="text-[#64779F]">Industry-experienced academics committed to your success</p>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5">
                  {course.faculty.map((f, i) => (
                    <motion.div
                      key={f.name}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: i * 0.05 }}
                      onClick={() => setSelectedFaculty(f)}
                      className="bg-white group cursor-pointer border-2 border-[#E5EDF8] shadow-lg shadow-black/[0.08] hover:shadow-2xl hover:shadow-black/20 transition-all flex flex-col h-full overflow-hidden rounded-[14px] font-graphik"
                    >
                      <div className="w-full aspect-[4/5] bg-slate-100 overflow-hidden">
                        {f.image ? (
                          <img 
                            src={f.image} 
                            alt={f.name} 
                            className="w-full h-full object-cover grayscale-[10%] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-500" 
                          />
                        ) : (
                          <div className="w-full h-full flex items-center justify-center text-slate-300">
                             <GraduationCap size={44} />
                          </div>
                        )}
                      </div>
                      
                      <div className="p-[13px] flex flex-col flex-1">
                        <h3 className="font-bold font-graphik text-[#18357a] text-[14px] mb-0.5 leading-tight group-hover:text-[#ffc107] transition-colors line-clamp-1">
                          {f.name}
                        </h3>
                        <p className="text-slate-500 text-[10px] font-bold font-graphik leading-tight mb-2.5 line-clamp-2">
                          {f.designation}
                        </p>
                        
                        <div className="mt-auto">
                           <span className="inline-block text-[9px] font-bold font-graphik uppercase tracking-[0.15em] text-[#18357a] group-hover:text-[#ffc107] transition-all bg-[#18357a]/5 px-2 py-1 rounded">
                              View Bio →
                           </span>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            )}

            {/* ── LABS ── */}
            {activeTab === 'Labs' && (
              <div className="w-full">
                {/* DESKTOP VIEW: Sidebar + Detail Panel (Visible only on lg and above) */}
                <div className="hidden lg:flex flex-row gap-8">
                  {/* Left Sidebar: Lab List */}
                  <div className="lg:w-1/3 xl:w-1/4 space-y-3 max-h-[750px] overflow-y-auto px-4 py-2 scrollbar-hide">
                    <div className="mb-6 px-1">
                       <h2 className="text-xl font-bold font-graphik text-[#18357a] uppercase tracking-tight mb-1">Labs & Facilities</h2>
                       <p className="text-[#64779F] text-xs font-bold font-graphik leading-relaxed">Select a facility to view full technical specifications.</p>
                    </div>
                    {course.labs.map((lab, i) => {
                      const LabIcon = lab.icon;
                      const isDesktopSelected = openLabIndices[0] === i;
                      return (
                        <button
                          key={lab.name}
                          onClick={() => setOpenLabIndices([i])}
                          className={`w-full p-4 rounded-2xl border-2 transition-all flex items-center gap-4 text-left group ${
                            isDesktopSelected 
                              ? 'bg-[#18357a] border-[#18357a] text-white shadow-xl shadow-[#18357a]/20' 
                              : 'bg-white border-[#E5EDF8] text-[#18357a] hover:border-[#18357a]/30'
                          }`}
                        >
                           <div className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 transition-all ${
                              isDesktopSelected ? 'bg-[#ffc107] text-[#18357a]' : 'bg-[#18357a]/5 text-[#18357a] group-hover:bg-[#18357a] group-hover:text-white'
                           }`}>
                             {LabIcon && <LabIcon size={20} />}
                           </div>
                           <span className="text-[13px] font-bold font-graphik uppercase tracking-tight leading-tight flex-1">{lab.name}</span>
                           <ChevronRight size={14} className={isDesktopSelected ? 'text-[#ffc107]' : 'text-[#64779F] opacity-40'} />
                        </button>
                      );
                    })}
                  </div>

                  {/* Right Panel: Lab Details (Desktop only shows the first active index) */}
                  <div ref={labsDetailRef} className="flex-1 min-h-[600px]">
                    <AnimatePresence mode="wait">
                      {openLabIndices[0] !== null && course.labs[openLabIndices[0]] && (() => {
                        const activeLab = course.labs[openLabIndices[0]];
                        return (
                        <motion.div
                          key={openLabIndices[0]}
                          initial={{ opacity: 0, x: 20 }}
                          animate={{ opacity: 1, x: 0 }}
                          exit={{ opacity: 0, x: -20 }}
                          className="bg-white rounded-[2.5rem] border border-[#DEE7F4] shadow-2xl shadow-blue-900/5 h-full overflow-hidden flex flex-col"
                        >
                           {/* Lab Header */}
                           <div className="bg-[#18357a] p-4 md:p-5 relative overflow-hidden shrink-0">
                              <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -mr-32 -mt-32 blur-3xl" />
                              <div className="relative z-10 flex flex-col md:flex-row items-center gap-5">
                                 <div className="w-12 h-12 md:w-14 md:h-14 rounded-xl bg-white/10 flex items-center justify-center border border-white/20">
                                    {activeLab.icon && (
                                       (() => {
                                          const LargeIcon = activeLab.icon;
                                          return <LargeIcon size={24} className="text-[#ffc107]" />;
                                       })()
                                    )}
                                 </div>
                                 <div className="text-center md:text-left">
                                    <h3 className="text-lg md:text-xl font-bold font-graphik text-white uppercase tracking-tight mb-0.5">{activeLab.name}</h3>
                                    <div className="flex items-center gap-2 justify-center md:justify-start">
                                       <Building2 size={12} className="text-[#ffc107]" />
                                       <p className="text-white/60 text-[9px] font-bold font-graphik uppercase tracking-widest leading-none">{course.name}</p>
                                    </div>
                                 </div>
                              </div>
                           </div>

                           {/* Lab Content Scrollable Area */}
                           <div className="p-8 md:p-12 space-y-10 flex-1 overflow-y-auto custom-scrollbar">
                              {/* Inventory / Equipment */}
                              <div>
                                 <div className="flex items-center gap-3 mb-6">
                                    <div className="w-1.5 h-6 bg-[#ffc107] rounded-full" />
                                    <h4 className="text-[12px] font-bold font-graphik text-[#18357a] uppercase tracking-[0.2em]">Technical Inventory & Tools</h4>
                                 </div>
                                 <div className="grid sm:grid-cols-2 gap-3">
                                    {activeLab.equipments?.map((item, idx) => (
                                      <div key={idx} className="flex gap-3 p-4 rounded-2xl bg-slate-50 border border-slate-100 items-start group hover:bg-white hover:border-[#ffc107]/20 transition-all">
                                         <div className="w-2 h-2 rounded-full bg-[#ffc107] mt-1.5 shrink-0 group-hover:scale-125 transition-all" />
                                         <span className="text-[14px] font-bold font-graphik text-[#18357a] leading-tight">{item}</span>
                                      </div>
                                    )) || (
                                      <p className="text-[#64779F] italic text-sm">Main specialized equipment list is being updated.</p>
                                    )}
                                 </div>
                              </div>

                              {/* Personnel / Staff */}
                              {courseId !== 'be-cse' && (
                                <div className="pt-10 border-t border-slate-100 grid md:grid-cols-2 gap-8">
                                   <div className="bg-[#18357a]/5 p-6 rounded-2xl border border-[#18357a]/10">
                                      <p className="text-[10px] font-bold font-graphik uppercase tracking-widest text-[#64779F] mb-3">Facility In-Charge</p>
                                      <p className="text-[#18357a] font-bold font-graphik text-[16px]">{activeLab.incharge || 'Department HOD'}</p>
                                   </div>
                                   <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200">
                                      <p className="text-[10px] font-bold font-graphik uppercase tracking-widest text-[#64779F] mb-3">Technical Staff</p>
                                      <p className="text-[#18357a] font-bold font-graphik text-[16px]">{activeLab.technician || 'Engineering Technician'}</p>
                                   </div>
                                </div>
                              )}
                           </div>
                        </motion.div>
                        );
                      })()}
                    </AnimatePresence>
                  </div>
                </div>

                {/* MOBILE VIEW: Multi-Expandable Accordion List (Visible only below lg) */}
                <div className="lg:hidden space-y-4 px-2 pb-10">
                   <div className="mb-6 px-1">
                      <h2 className="text-xl font-bold font-graphik text-[#18357a] uppercase tracking-tight mb-1">Labs & Facilities</h2>
                      <p className="text-[#64779F] text-xs font-bold font-graphik leading-relaxed">Expand Multiple facilities to compare inventory.</p>
                   </div>
                   {course.labs.map((lab, i) => {
                      const LabIcon = lab.icon;
                      const isOpen = openLabIndices.includes(i);
                      return (
                        <div key={lab.name} className="flex flex-col">
                           <button
                             onClick={(e) => {
                               if (isOpen) {
                                  // Close it
                                  setOpenLabIndices(prev => prev.filter(idx => idx !== i));
                               } else {
                                  // Open it (Add to set, so others don't close)
                                  setOpenLabIndices(prev => [...prev, i].sort());
                                  // Also scroll it into view after a tiny moment
                                  setTimeout(() => {
                                     e.currentTarget.scrollIntoView({ behavior: 'smooth', block: 'start' });
                                  }, 100);
                               }
                             }}
                             className={`w-full p-4 rounded-2xl border-2 transition-all flex items-center gap-4 text-left ${
                               isOpen 
                                 ? 'bg-[#18357a] border-[#18357a] text-white shadow-xl shadow-[#18357a]/20 rounded-b-none' 
                                 : 'bg-white border-[#E5EDF8] text-[#18357a] hover:border-[#18357a]/30'
                             }`}
                           >
                              <div className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 transition-all ${
                                 isOpen ? 'bg-[#ffc107] text-[#18357a]' : 'bg-[#18357a]/5 text-[#18357a]'
                              }`}>
                                {LabIcon && <LabIcon size={20} />}
                              </div>
                              <span className="text-[13px] font-bold font-graphik uppercase tracking-tight leading-tight flex-1">{lab.name}</span>
                              <ChevronDown size={18} className={`transition-transform duration-300 ${isOpen ? 'rotate-180 text-[#ffc107]' : 'text-[#64779F] opacity-40'}`} />
                           </button>

                           <AnimatePresence>
                              {isOpen && (
                                <motion.div
                                  initial={{ height: 0, opacity: 0 }}
                                  animate={{ height: "auto", opacity: 1 }}
                                  exit={{ height: 0, opacity: 0 }}
                                  className="bg-white border-2 border-t-0 border-[#18357a] rounded-b-2xl overflow-hidden"
                                >
                                   <div className="p-6 space-y-8">
                                      {/* Mobile Content Display */}
                                      <div className="flex items-center gap-3 pb-4 border-b border-slate-100">
                                         <Building2 size={14} className="text-[#ffc107]" />
                                         <p className="text-[#64779F] text-[10px] font-bold font-graphik uppercase tracking-widest">{course.name}</p>
                                      </div>

                                      <div>
                                         <div className="flex items-center gap-2 mb-4">
                                            <div className="w-1 h-4 bg-[#ffc107] rounded-full" />
                                            <h4 className="text-[11px] font-bold font-graphik text-[#18357a] uppercase tracking-wider">Inventory & Tools</h4>
                                         </div>
                                         <div className="grid gap-2">
                                            {lab.equipments?.map((item, idx) => (
                                              <div key={idx} className="flex gap-3 p-3 rounded-xl bg-slate-50 border border-slate-100 items-start">
                                                 <div className="w-1.5 h-1.5 rounded-full bg-[#ffc107] mt-1.5 shrink-0" />
                                                 <span className="text-[13px] font-bold font-graphik text-[#18357a] leading-tight">{item}</span>
                                              </div>
                                            ))}
                                         </div>
                                      </div>

                                      {courseId !== 'be-cse' && (
                                        <div className="grid gap-3 pt-4 border-t border-slate-100">
                                           <div className="bg-[#18357a]/5 p-4 rounded-xl border border-[#18357a]/10">
                                              <p className="text-[9px] font-bold font-graphik uppercase tracking-widest text-[#64779F] mb-1">In-Charge</p>
                                              <p className="text-[#18357a] font-bold font-graphik text-[14px]">{lab.incharge}</p>
                                           </div>
                                           <div className="bg-slate-50 p-4 rounded-xl border border-slate-200">
                                              <p className="text-[9px] font-bold font-graphik uppercase tracking-widest text-[#64779F] mb-1">Technician</p>
                                              <p className="text-[#18357a] font-bold font-graphik text-[14px]">{lab.technician}</p>
                                           </div>
                                        </div>
                                      )}
                                   </div>
                                </motion.div>
                              )}
                           </AnimatePresence>
                        </div>
                      );
                   })}
                </div>
              </div>
            )}

            {/* ── PATENTS ── */}
            {activeTab === 'Patents' && (
              <div className="space-y-10">
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-slate-100">
                  <div>
                    <h2 className="text-3xl md:text-5xl font-bold font-graphik text-[#18357a] uppercase tracking-tight mb-2">
                       Intellectual <span className="text-[#ffc107]">Property</span>
                    </h2>
                    <p className="text-black font-medium font-graphik text-sm tracking-wide">Patents, Copyrights and Publications of the Department</p>
                  </div>
                  <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#18357a]/5 rounded-xl border border-[#18357a]/10 text-[#18357a] text-[10px] font-bold font-graphik uppercase tracking-widest">
                     <ShieldCheck size={14} /> Registered Assets
                  </div>
                </div>

                <div className="grid lg:grid-cols-2 gap-8">
                    <motion.div 
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      whileHover={{ y: -10, scale: 1.01 }}
                      viewport={{ once: true }}
                      className="group relative bg-white p-7 rounded-[2rem] border border-[#E5EDF8] shadow-2xl shadow-blue-900/5 flex flex-col items-center text-center transition-all duration-500"
                    >
                       <div className="absolute top-0 left-0 w-8 h-8 border-t-4 border-l-4 border-dashed border-[#18357a]/20 rounded-tl-[2rem]" />
                       <div className="w-16 h-16 rounded-2xl bg-[#18357a]/5 border border-[#18357a]/10 flex items-center justify-center mb-6 group-hover:bg-[#18357a] group-hover:text-white transition-all duration-500">
                          <FileText size={32} className="text-[#18357a] group-hover:text-white transition-colors" />
                       </div>
                       <h3 className="text-lg font-bold font-graphik text-[#18357a] uppercase mb-3">Official Patents</h3>
                       <p className="text-[#64779F] text-sm font-medium font-graphik leading-relaxed">
                          Our faculty and students are actively involved in research leading to patents. Detailed patent registrations for this department are currently being updated.
                       </p>
                       <div className="mt-6 pt-5 border-t border-slate-50 w-full text-[9px] font-bold font-graphik text-[#A9B1C3] uppercase tracking-[0.2em]">
                          Academic Year 2024-25
                       </div>
                    </motion.div>

                    <motion.div 
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      whileHover={{ y: -10, scale: 1.01 }}
                      transition={{ delay: 0.1 }}
                      viewport={{ once: true }}
                      className="group bg-gradient-to-br from-[#18357a] to-[#0A1A3F] rounded-[2rem] p-7 text-white shadow-2xl shadow-blue-900/20 relative overflow-hidden transition-all duration-500"
                    >
                       <div className="absolute -bottom-1 -right-1 w-12 h-12 border-b-4 border-r-4 border-dashed border-[#ffc107]/30 rounded-br-[2rem]" />
                       <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full -mr-16 -mt-16 blur-2xl" />
                       <div className="relative z-10">
                         <div className="w-14 h-14 rounded-xl bg-white/10 flex items-center justify-center mb-6 border border-white/20 group-hover:border-[#ffc107] transition-all">
                            <Award size={28} className="text-[#ffc107]" />
                         </div>
                         <h3 className="text-lg font-bold font-graphik uppercase mb-3 tracking-tight">Research Excellence</h3>
                         <p className="text-white/70 text-sm font-medium font-graphik leading-relaxed mb-6">
                            We foster innovation. All patent applications and IPR are managed through the Institutional Research & Development Cell.
                         </p>
                         <button className="flex items-center gap-3 px-5 py-2.5 bg-white/10 hover:bg-white/20 border border-white/20 rounded-xl text-[9px] font-bold font-graphik uppercase tracking-widest transition-all">
                            Contact R&D <ArrowRight size={14} />
                         </button>
                       </div>
                    </motion.div>
                </div>
              </div>
            )}

            {/* ── PLACEMENTS ── */}
            {activeTab === 'Placements' && (
              <div>
                <div className="mb-6">
                  <h2 className="text-2xl font-extrabold font-graphik text-[#18357a] mb-1">Placement Record</h2>
                  <p className="text-[#64779F]">Consistent track record of placing students in top companies</p>
                </div>
                {/* Stat Cards */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                  {[
                    { label: 'Placement Rate', value: course.placementStats.placed },
                    { label: 'Avg Package', value: course.placementStats.avg },
                    { label: 'Top Package', value: course.placementStats.top },
                    { label: 'Companies', value: course.placementStats.companies },
                  ].map(s => (
                    <div key={s.label} className="bg-[#18357a] rounded-2xl p-5 text-center">
                      <p className="text-2xl font-extrabold font-graphik text-[#ffc107]">{s.value}</p>
                      <p className="text-white/70 text-[12px] font-medium font-graphik mt-1">{s.label}</p>
                    </div>
                  ))}
                </div>
                {/* Company Logos / Tags */}
                <div className="bg-white rounded-2xl border border-[#E5EDF8] p-6 mb-6">
                  <h3 className="font-extrabold font-graphik text-[#18357a] mb-4 text-[15px]">Top Recruiting Companies</h3>
                  <div className="flex flex-wrap gap-2.5">
                    {course.companies.map(c => (
                      <span key={c} className="px-4 py-2 rounded-xl bg-[#F8FAFC] border border-[#E5EDF8] text-[#18357a] font-bold font-graphik text-[13px]">
                        {c}
                      </span>
                    ))}
                  </div>
                </div>
                {/* Projects */}
                <div className="bg-white rounded-2xl border border-[#E5EDF8] p-6">
                  <h3 className="font-extrabold font-graphik text-[#18357a] mb-4 text-[15px]">Notable Final Year Projects</h3>
                  <div className="space-y-2">
                    {course.projects.map(p => (
                      <div key={p} className="flex items-center gap-3 p-3 rounded-xl bg-[#F8FAFC] border border-[#E5EDF8]">
                        <div className="w-2 h-2 rounded-full bg-[#ffc107] shrink-0" />
                        <span className="text-[14px] font-semibold font-graphik text-[#18357a]">{p}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'Achievements' && (
              <AchievementSection courseId={courseId} courseName={course.name} />
            )}

            {/* ── ADMISSIONS ── */}
            {activeTab === 'Admissions' && (
              <div className="grid md:grid-cols-2 gap-8">
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="relative group"
                >
                  <div className="absolute inset-0 border-2 border-[#18357a]/10 rotate-[4deg] rounded-[2rem] pointer-events-none" />
                  <div className="relative bg-white rounded-2xl border border-[#E5EDF8] p-8 shadow-xl shadow-blue-900/5 z-10">
                    <div className="absolute top-0 left-0 -translate-x-1/4 -translate-y-1/2 px-6 py-2 bg-[#18357a] text-white rounded-full text-[9px] font-bold font-graphik uppercase tracking-widest shadow-lg">
                       Eligibility
                    </div>
                    <ul className="space-y-4 mt-4">
                      {course.eligibility.map(item => (
                        <li key={item} className="flex items-start gap-4 p-4 rounded-xl bg-slate-50/50 hover:bg-white hover:shadow-md transition-all border border-transparent hover:border-slate-100">
                          <CheckCircle size={18} className="text-[#ffc107] mt-0.5 shrink-0" />
                          <span className="text-[14px] font-bold font-graphik text-[#18357a] leading-relaxed">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
                <div className="space-y-4">
                  <div className="bg-[#18357a] rounded-2xl p-6 text-white">
                    <h3 className="font-extrabold font-graphik text-lg mb-3">Ready to Apply?</h3>
                    <p className="text-white/70 text-[14px] mb-5">Join thousands of students building their future at KIOT.</p>
                    <button
                      onClick={() => navigate('/admissions')}
                      className="w-full flex items-center justify-center gap-2 py-3.5 rounded-xl bg-[#ffc107] text-[#18357a] font-bold font-graphik hover:bg-[#ffca2c] transition-all"
                    >
                      Start Application <ArrowRight size={15} />
                    </button>
                  </div>
                  <div className="bg-white rounded-2xl border border-[#E5EDF8] p-6">
                    <h3 className="font-extrabold font-graphik text-[#18357a] mb-3">Need Help?</h3>
                    <p className="text-[#64779F] text-[13px] mb-4">Our admissions team is here to guide you through the process.</p>
                    <a href="tel:9894701234" className="flex items-center gap-2 text-[#18357a] font-bold font-graphik text-[14px] hover:text-[#ffc107] transition-colors">
                      <MapPin size={15} className="text-[#ffc107]" /> +91 98947 01234
                    </a>
                  </div>
                </div>
              </div>
            )}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Faculty Profile Modal */}
      <AnimatePresence>
        {selectedFaculty && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[300] bg-black/60 backdrop-blur-md flex items-center justify-center p-4"
            onClick={() => setSelectedFaculty(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              onClick={e => e.stopPropagation()}
              className="bg-white w-full max-w-2xl rounded-[2.5rem] shadow-2xl overflow-hidden max-h-[90vh] flex flex-col"
            >
              <div className="overflow-y-auto scrollbar-hide flex-1 pb-10">
                <div className="bg-[#18357a] p-6 md:p-8 relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-64 h-64 bg-[#ffc107]/5 rounded-full -mr-20 -mt-20 blur-3xl" />
                  
                  {/* Top Right Close Button */}
                  <button 
                    onClick={() => setSelectedFaculty(null)}
                    className="absolute top-6 right-6 z-20 w-10 h-10 flex items-center justify-center rounded-xl bg-white/10 text-white/70 hover:bg-white/20 hover:text-white transition-all backdrop-blur-sm border border-white/10"
                  >
                    <X size={20} />
                  </button>

                  <div className="relative z-10 flex flex-col md:flex-row items-center gap-8">
                    <div className="w-32 h-32 md:w-40 md:h-40 rounded-3xl bg-white/10 flex items-center justify-center shrink-0 border border-white/20 overflow-hidden">
                      {selectedFaculty.image ? (
                        <img src={selectedFaculty.image} alt={selectedFaculty.name} className="w-full h-full object-cover" />
                      ) : (
                        <GraduationCap size={64} className="text-[#ffc107]" />
                      )}
                    </div>
                    <div className="text-center md:text-left">
                      <h2 className="text-2xl md:text-3xl font-bold font-graphik text-white mb-2 leading-tight tracking-tight">
                        {selectedFaculty.name}
                      </h2>
                      <p className="text-[#ffc107] font-bold font-graphik text-lg md:text-xl">{selectedFaculty.designation}</p>
                    </div>
                  </div>
                </div>

                <div className="p-8 md:p-12">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
                    <div className="space-y-6">
                      {selectedFaculty.qualification && (
                        <div>
                          <p className="text-[10px] font-medium font-graphik uppercase tracking-widest text-[#18357a] mb-2">Academic Credentials</p>
                          <p className="text-black font-medium font-graphik text-[15px]">{selectedFaculty.qualification}</p>
                        </div>
                      )}
                      {selectedFaculty.specialization && selectedFaculty.specialization !== 'N/A' && (
                        <div>
                          <p className="text-[10px] font-medium font-graphik uppercase tracking-widest text-[#18357a] mb-2">Area of Specialization</p>
                          <p className="text-black font-medium font-graphik text-[15px]">{selectedFaculty.specialization}</p>
                        </div>
                      )}
                      {selectedFaculty.experience && (
                        <div>
                          <p className="text-[10px] font-medium font-graphik uppercase tracking-widest text-[#18357a] mb-2">Work Experience</p>
                          <div className="flex items-center gap-2 text-black">
                            <Clock size={16} className="text-[#18357a]" />
                            <span className="font-medium font-graphik text-[15px]">{selectedFaculty.experience}</span>
                          </div>
                        </div>
                      )}
                      {selectedFaculty.joiningDate && (
                        <div>
                          <p className="text-[10px] font-medium font-graphik uppercase tracking-widest text-[#18357a] mb-2">Date of Joining</p>
                          <p className="text-black font-medium font-graphik text-[15px]">{selectedFaculty.joiningDate}</p>
                        </div>
                      )}
                    </div>

                    <div className="space-y-6">
                      {selectedFaculty.email && selectedFaculty.email !== 'N/A' && (
                        <div>
                          <p className="text-[10px] font-medium font-graphik uppercase tracking-widest text-[#18357a] mb-2">E-Mail Address</p>
                          <a href={`mailto:${selectedFaculty.email}`} className="flex items-center gap-2 text-black font-medium font-graphik text-[15px] hover:text-[#18357a] transition-colors">
                            <Mail size={16} className="text-[#18357a]" />
                            {selectedFaculty.email}
                          </a>
                        </div>
                      )}
                      {selectedFaculty.association && (
                        <div>
                          <p className="text-[10px] font-medium font-graphik uppercase tracking-widest text-[#18357a] mb-2">Nature of Association</p>
                          <span className="inline-block px-3 py-1 rounded-lg bg-emerald-50 text-emerald-600 text-xs font-medium font-graphik uppercase tracking-widest">
                            {selectedFaculty.association}
                          </span>
                        </div>
                      )}
                      <div className="p-6 bg-[#F8FAFC] border border-[#E5EDF8] rounded-2xl">
                        <div className="flex items-center gap-2 mb-4">
                          <Award size={18} className="text-[#ffc107]" />
                          <p className="text-[11px] font-bold font-graphik tracking-widest text-[#18357a] uppercase">Member Recognition</p>
                        </div>
                        <div className="flex items-center gap-0.5">
                          {[...Array(5)].map((_, idx) => (
                            <Star key={idx} size={14} className={idx < Math.floor(selectedFaculty.rating) ? "text-[#ffc107] fill-[#ffc107]" : "text-[#E5EDF8] fill-[#E5EDF8]"} />
                          ))}
                          <span className="ml-2 font-bold font-graphik text-[#18357a] text-sm">{selectedFaculty.rating}</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {selectedFaculty.publications && (
                    <div className="mt-8 pt-8 border-t border-[#E5EDF8]">
                      <p className="text-[10px] font-medium font-graphik uppercase tracking-widest text-[#18357a] mb-4">Research & Publications</p>
                      <div className="p-5 bg-[#18357a]/5 border border-[#18357a]/10 rounded-2xl">
                        <p className="text-black font-medium font-graphik text-[14px] leading-relaxed italic">
                          {selectedFaculty.publications}
                        </p>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

// ─── Achievement Section Component ──────────────────────────────────────────
function AchievementSection({ courseId, courseName }) {
  const [activeSubTab, setActiveSubTab] = useState('AWARD')
  const [activeAudience, setActiveAudience] = useState('STUDENT')
  const [selectedYear, setSelectedYear] = useState(null)
  const [years, setYears] = useState([])
  const [records, setRecords] = useState({ STUDENT: [], FACULTY: [] })
  const [loading, setLoading] = useState(false)

  const audienceTabs = [
    { id: 'STUDENT', label: 'Student' },
    { id: 'FACULTY', label: 'Faculty' },
  ]

  const visibleData = records[activeAudience] || []

  const fetchYears = async () => {
    try {
      const res = await fetch(`${API_BASE}/placement-achievements/years?category=${activeSubTab}`)
      const json = await res.json()
      setYears(json.years || [])
    } catch (err) {
      console.error(err)
    }
  }

  useEffect(() => {
    fetchYears()
    setSelectedYear(null)
  }, [activeSubTab])

  useEffect(() => {
    if (!selectedYear) return
    const fetchAchievementsData = async () => {
      try {
        setLoading(true)
        const finalDept = getAchievementDepartmentName(courseId, courseName)
        const [studentRes, facultyRes] = await Promise.all([
          fetch(`${API_BASE}/placement-achievements/?category=${activeSubTab}&sub_category=STUDENT&department=${encodeURIComponent(finalDept)}&year=${selectedYear}`),
          fetch(`${API_BASE}/placement-achievements/?category=${activeSubTab}&sub_category=FACULTY&department=${encodeURIComponent(finalDept)}&year=${selectedYear}`)
        ])
        const studentData = studentRes.ok ? await studentRes.json() : []
        const facultyData = facultyRes.ok ? await facultyRes.json() : []
        setRecords({
          STUDENT: studentData.sort((a, b) => (a.serial_number || 999) - (b.serial_number || 999)),
          FACULTY: facultyData.sort((a, b) => (a.serial_number || 999) - (b.serial_number || 999)),
        })
      } catch (err) {
        console.error('FETCH ERROR:', err)
        setRecords({ STUDENT: [], FACULTY: [] })
      } finally {
        setLoading(false)
      }
    }
    fetchAchievementsData()
  }, [activeSubTab, selectedYear, courseId, courseName])

  return (
    <div className="space-y-12">
      <div className="flex flex-col xl:flex-row xl:items-end justify-between gap-8 pb-8 border-b border-[#D5E2F4]/50">
        <div>
          <div className="flex items-center gap-4 mb-4">
            <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#18357a] to-[#0A1A3F] flex items-center justify-center shadow-xl shadow-[#18357a]/20">
              <Trophy size={28} className="text-[#ffc107]" />
            </div>
            <div>
              <h3 className="text-4xl font-bold font-graphik text-[#18357a] uppercase tracking-tight leading-none mb-1">Department Honors</h3>
              <p className="text-black font-medium font-graphik text-sm tracking-wide">Celebrating academic and professional milestones</p>
            </div>
          </div>
          <p className="text-[#A9B1C3] text-[11px] font-bold font-graphik uppercase tracking-[0.2em]">Department of {courseName.split('Engineering')[0]}</p>
        </div>
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
          <div className="bg-white p-1 rounded-2xl flex border border-[#D5E2F4] shadow-xl shadow-blue-900/5">
            {['AWARD', 'ACHIEVEMENT'].map(tab => (
              <button key={tab} onClick={() => setActiveSubTab(tab)} className={`px-8 py-3 rounded-xl text-[10px] font-bold font-graphik uppercase tracking-[0.2em] transition-all duration-300 ${activeSubTab === tab ? 'bg-[#18357a] text-white shadow-lg shadow-[#18357a]/20 translate-y-[-1px]' : 'text-[#64779F] hover:bg-slate-50 hover:text-[#18357a]'}`}>
                {tab === 'AWARD' ? 'Awards' : 'Achievements'}
              </button>
            ))}
          </div>
          {selectedYear && (
            <div className="bg-white p-1 rounded-2xl flex border border-[#D5E2F4] shadow-xl shadow-blue-900/5">
              {audienceTabs.map(tab => (
                <button key={tab.id} onClick={() => setActiveAudience(tab.id)} className={`px-6 py-3 rounded-xl text-[10px] font-bold font-graphik uppercase tracking-[0.2em] transition-all duration-300 ${activeAudience === tab.id ? 'bg-[#ffc107] text-[#18357a] shadow-lg shadow-[#ffc107]/20 translate-y-[-1px]' : 'text-[#64779F] hover:bg-slate-50 hover:text-[#18357a]'}`}>
                  {tab.id === 'STUDENT' ? 'Student' : 'Faculty'}
                </button>
              ))}
            </div>
          )}
        </div>
      </div>

      {!selectedYear ? (
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6 pt-6">
          {years.length === 0 ? (
            <div className="col-span-full py-12 text-center text-[#64779F]">No academic folders found for this category.</div>
          ) : (
            years.map(yr => (
              <button key={yr} onClick={() => setSelectedYear(yr)} className="bg-white p-8 rounded-[2rem] border border-[#E5EDF8] shadow-sm hover:shadow-xl hover:border-[#18357a]/20 transition-all flex flex-col items-center group">
                <div className="h-12 w-12 bg-slate-50 flex items-center justify-center rounded-xl mb-3 group-hover:scale-110 transition-transform">
                  <Star size={24} className="text-[#ffc107]" />
                </div>
                <span className="text-xl font-bold font-graphik text-[#18357a]">{yr}</span>
                <span className="text-[10px] font-bold font-graphik uppercase tracking-[0.1em] text-[#A9B1C3] mt-1 opacity-60">View Folders</span>
              </button>
            ))
          )}
        </div>
      ) : (
        <>
          <div className="flex items-center gap-4 -mt-4">
            <button onClick={() => setSelectedYear(null)} className="flex items-center gap-2 px-4 py-2 bg-white rounded-xl text-[10px] font-bold font-graphik uppercase tracking-widest text-[#18357a] border-2 border-[#E2E8F0] hover:bg-slate-50 hover:translate-x-[-4px] transition-all">
              <ArrowLeft size={14} /> Back to Years
            </button>
            <span className="px-4 py-2 bg-[#ffc107] text-[#18357a] text-[10px] font-bold font-graphik uppercase rounded-xl tracking-widest">Selected: {selectedYear}</span>
          </div>

          {loading ? (
            <div className="py-24 flex flex-col items-center justify-center gap-5">
              <div className="w-16 h-16 rounded-full border-4 border-[#18357a]/10 border-t-[#ffc107] animate-spin" />
              <p className="text-[11px] font-bold font-graphik uppercase tracking-[0.3em] text-[#18357a]/40">Fetching Records...</p>
            </div>
          ) : visibleData.length === 0 ? (
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="py-24 px-8 rounded-[3rem] bg-white border border-[#D5E2F4]/50 shadow-2xl shadow-blue-900/5 flex flex-col items-center text-center group">
              <div className="w-24 h-24 rounded-3xl bg-[#F8FAFC] border border-[#E5EDF8] flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-500">
                <div className="relative">
                  <Users size={48} className="text-[#A9B1C3]/40" />
                  <Star size={20} className="absolute -top-1 -right-1 text-[#ffc107] animate-bounce" />
                </div>
              </div>
              <h4 className="text-xl font-bold font-graphik text-[#18357a] uppercase mb-3">No records found</h4>
              <p className="text-[#64779F] font-bold font-graphik text-sm">Nothing recorded for this folder yet.</p>
            </motion.div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <AnimatePresence mode="popLayout">
                {visibleData.map((item, idx) => {
                  const isAward = activeSubTab === 'AWARD';
                  const isStudent = activeAudience === 'STUDENT';
                  const isRank = !isAward && isStudent && item.type === 'RANK';
                  const isContest = !isAward && isStudent && item.type === 'CONTEST';
                  const fileUrl = item.pdf_url || item.image_url;

                  return (
                    <motion.div key={`${activeAudience}-${item.id}`} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: idx * 0.08 }} className="bg-white rounded-[2rem] p-7 border border-[#E5EDF8] shadow-sm hover:shadow-xl hover:border-[#18357a]/20 transition-all group">
                      <div className="flex items-start justify-between mb-6 gap-4">
                        <div className="h-12 w-12 rounded-xl bg-[#18357a]/5 flex items-center justify-center text-[#18357a] group-hover:bg-[#18357a] group-hover:text-[#ffc107] transition-all shrink-0">
                          {isAward ? <Award size={22} /> : (activeAudience === 'FACULTY' ? <Users size={22} /> : <Trophy size={22} />)}
                        </div>
                        <span className="text-[10px] font-bold font-graphik text-[#64779F] uppercase tracking-widest bg-slate-50 px-3 py-1 rounded-lg">
                          {item.year || item.academic_year || item.batch || 'Record'}
                        </span>
                      </div>

                      <h4 className="text-lg font-bold font-graphik text-[#18357a] mb-2 leading-tight uppercase">{isAward ? item.award_name : item.description}</h4>
                      <p className="text-[#64779F] text-sm font-semibold font-graphik italic mb-6 opacity-80">{isStudent ? (isAward ? item.student_name : item.name) : item.faculty_name}</p>

                      {isRank && (
                        <div className="grid grid-cols-2 gap-3 mb-6">
                          <div className="bg-slate-50 p-3 rounded-xl border border-slate-100">
                             <p className="text-[9px] font-bold font-graphik text-[#A9B1C3] uppercase mb-1">Rank</p>
                             <p className="text-sm font-bold font-graphik text-[#18357a]">{item.university_rank}</p>
                          </div>
                          <div className="bg-teal-50 p-3 rounded-xl border border-teal-100">
                             <p className="text-[9px] font-bold font-graphik text-[#A9B1C3] uppercase mb-1">CGPA</p>
                             <p className="text-sm font-bold font-graphik text-teal-600">{item.cgpa}</p>
                          </div>
                        </div>
                      )}

                      {fileUrl && (
                        <a href={fileUrl} target="_blank" rel="noreferrer" className="flex items-center justify-center gap-2 w-full py-3 bg-[#F8FAFC] border border-[#E5EDF8] rounded-xl text-[10px] font-bold font-graphik uppercase tracking-widest text-[#18357a] hover:bg-[#18357a] hover:text-white transition-all">
                          View PDF <ExternalLink size={12} />
                        </a>
                      )}
                    </motion.div>
                  );
                })}
              </AnimatePresence>
            </div>
          )}
        </>
      )}
    </div>
  );
}

// ─── Curriculum Section Component ──────────────────────────────────────────
function CurriculumSection({ courseId, courseName }) {
  const [curriculumTab, setCurriculumTab] = useState('Regulations')
  const [records, setRecords] = useState([])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    const fetchCurriculumData = async () => {
      try {
        setLoading(true)
        const finalDept = getAchievementDepartmentName(courseId, courseName)
        const res = await fetch(`${API_BASE}/curriculum-records/?category=${curriculumTab}&department=${encodeURIComponent(finalDept)}`)
        if (res.ok) {
          const data = await res.json()
          setRecords(data)
        } else {
          setRecords([])
        }
      } catch (err) {
        console.error('FETCH ERROR:', err)
        setRecords([])
      } finally {
        setLoading(false)
      }
    }
    fetchCurriculumData()
  }, [curriculumTab, courseId, courseName])

  return (
    <div className="max-w-6xl mx-auto px-4 md:px-0">
      <div className="flex flex-col md:flex-row md:items-center justify-between mb-12 gap-8 pb-8 border-b border-[#D5E2F4]/50">
        <div>
           <div className="flex items-center gap-4 mb-2">
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#18357a] to-[#0A1A3F] flex items-center justify-center shadow-lg shadow-[#18357a]/20">
                 <BookOpen size={24} className="text-[#ffc107]" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold font-graphik text-[#18357a] uppercase tracking-tight">Academic <span className="text-[#ffc107]">Curriculum</span></h2>
           </div>
           <p className="text-black font-medium font-graphik text-sm tracking-wide ml-16">Department of {courseName.split('Engineering')[0]}</p>
        </div>

        <div className="flex bg-slate-100/80 p-1.5 rounded-2xl border border-slate-200 self-start md:self-center">
          {['Regulations', 'Syllabus'].map((t) => (
            <button
              key={t}
              onClick={() => setCurriculumTab(t)}
              className={`px-8 py-3 rounded-xl text-[10px] font-bold font-graphik uppercase tracking-[0.2em] transition-all duration-300 ${
                curriculumTab === t
                  ? 'bg-white text-[#18357a] shadow-xl shadow-blue-900/10 scale-[1.02] translate-y-[-1px]'
                  : 'text-[#64779F] hover:text-[#18357a]'
              }`}
            >
              {t}
            </button>
          ))}
        </div>
      </div>

      {loading ? (
        <div className="py-24 flex flex-col items-center justify-center gap-5">
           <div className="w-16 h-16 rounded-full border-4 border-[#18357a]/10 border-t-[#ffc107] animate-spin" />
           <p className="text-[11px] font-bold font-graphik uppercase tracking-[0.3em] text-[#18357a]/40">Indexing Academic Files...</p>
        </div>
      ) : records.length === 0 ? (
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="py-20 px-8 rounded-[3rem] bg-white border border-[#D5E2F4]/50 shadow-2xl shadow-blue-900/5 flex flex-col items-center text-center">
           <div className="w-20 h-20 rounded-[2rem] bg-[#F8FAFC] flex items-center justify-center mb-8">
              <FileText size={40} className="text-[#A9B1C3]/30" />
           </div>
           <h4 className="text-xl font-bold font-graphik text-[#18357a] uppercase mb-2">No {curriculumTab} Found</h4>
           <p className="text-[#64779F] font-bold font-graphik text-sm">Official documentation for this department is being updated.</p>
        </motion.div>
      ) : (
        <div className="bg-white border border-[#D5E2F4]/80 rounded-[2rem] overflow-hidden">
           <table className="w-full text-left border-collapse">
              <thead>
                 <tr className="bg-[#18357a] border-b border-[#18357a]">
                    <th className="px-8 py-5 text-[10px] font-bold font-graphik uppercase tracking-[0.2em] text-white">Document Info</th>
                    <th className="px-6 py-5 text-[10px] font-bold font-graphik uppercase tracking-[0.2em] text-white">Ref Year/Batch</th>
                    {curriculumTab === 'Syllabus' && <th className="px-6 py-5 text-[10px] font-bold font-graphik uppercase tracking-[0.2em] text-white">Semester</th>}
                    <th className="px-8 py-5 text-[10px] font-bold font-graphik uppercase tracking-[0.2em] text-white text-right">Actions</th>
                 </tr>
              </thead>
              <tbody className="divide-y divide-[#D5E2F4]/40">
                {records.map((item, i) => (
                  <motion.tr 
                    key={item.id}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05 }}
                    className="hover:bg-[#ffc107]/5 transition-colors group"
                  >
                    <td className="px-5 py-3.5">
                       <div className="flex items-center gap-3">
                          <div className={`w-9 h-9 rounded-lg flex items-center justify-center shrink-0 ${
                             curriculumTab === 'Regulations' ? 'bg-blue-50 text-[#18357a]' : 'bg-[#ffc107]/10 text-[#18357a]'
                          }`}>
                            {curriculumTab === 'Regulations' ? <ShieldCheck size={18} /> : <BookOpen size={18} />}
                          </div>
                          <span className="text-sm font-bold font-graphik text-[#18357a] group-hover:text-[#18357a] transition-colors uppercase">{item.title}</span>
                       </div>
                    </td>
                    <td className="px-3 py-3.5">
                       <div className="flex items-center gap-2">
                          <Calendar size={12} className="text-[#ffc107]" />
                          <span className="text-[10px] font-bold font-graphik uppercase tracking-widest text-[#64779F]">{item.year_or_version}</span>
                       </div>
                    </td>
                    {curriculumTab === 'Syllabus' && (
                       <td className="px-3 py-3.5">
                          <span className="px-2.5 py-1 rounded-md bg-slate-50 border border-slate-100 text-[9px] font-bold font-graphik text-[#18357a] group-hover:bg-[#18357a] group-hover:text-white transition-all">
                             SEM - {item.semester}
                          </span>
                       </td>
                    )}
                    <td className="px-5 py-3.5 text-right">
                       <div className="flex items-center justify-end gap-3">
                          {/* View Link - Yellow Hover */}
                          <a 
                            href={item.pdf_url} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="p-2.5 rounded-xl bg-blue-50 text-[#18357a] hover:bg-[#ffc107] hover:shadow-lg transition-all transform active:scale-95"
                            title="View Document"
                          >
                             <ExternalLink size={16} />
                          </a>

                          {/* Download Button - Force Attachment */}
                          <button 
                            onClick={() => {
                               // Cloudinary trick: inject fl_attachment to force download
                               const downloadUrl = item.pdf_url.includes('/upload/') 
                                 ? item.pdf_url.replace('/upload/', '/upload/fl_attachment/')
                                 : item.pdf_url;
                                 
                               window.open(downloadUrl, '_blank');
                            }}
                            className="p-2.5 rounded-xl bg-[#ffc107]/20 text-[#18357a] hover:bg-[#ffc107] transition-all transform active:scale-95 shadow-sm"
                            title="Download Document"
                          >
                             <Download size={16} />
                          </button>
                       </div>
                    </td>
                  </motion.tr>
                ))}
              </tbody>
           </table>
        </div>
      )}
    </div>
  )
}
