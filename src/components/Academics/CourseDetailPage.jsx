import { useState, useRef, useEffect, useLayoutEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  ChevronLeft, GraduationCap, Building2, Users, BookOpen, 
  MapPin, Clock, Calendar, Award, CheckCircle2, ChevronRight,
  BarChart3, FileText, Mail, X, Target, TrendingUp, Loader2, Trophy, Plus,
  Wrench, Layers, FlaskConical, Cpu, ChevronDown, Download, ArrowLeft, Briefcase, ExternalLink,
  Microscope, Star, Globe, ShieldCheck, ArrowRight
} from 'lucide-react';
import facultyBg from '../../assets/Faculity/background faculty.webp';
import { courseData } from '../../data/courseData'
import cseImage from '../../assets/main/CSE .webp'
import { getDepartmentSchematic } from './DepartmentSchematics'

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
  color: '#224292',
  tagline: 'Learn. Grow. Succeed.',
  overview: 'This program offers a rigorous academic curriculum combined with industry-relevant hands-on training, preparing students for high-impact careers.',
  whyChoose: ['NBA Accredited', 'Experienced faculty', 'Industry partnerships', 'Placement assistance'],
  curriculum: [
    { year: 'Year 1 â€“ Foundation', semesters: ['Mathematics', 'Physics', 'Engineering Graphics', 'Programming Basics'] },
    { year: 'Year 2 â€“ Core', semesters: ['Core Subject I', 'Core Subject II', 'Core Subject III', 'Core Subject IV'] },
    { year: 'Year 3 â€“ Specialisation', semesters: ['Advanced Core I', 'Advanced Core II', 'Electives', 'Mini Project'] },
    { year: 'Year 4 â€“ Capstone', semesters: ['Internship', 'Final Project', 'Advanced Electives', 'Industry Training'] },
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

const TABS = ['Overview', 'Vision & Mission', 'Curriculum', 'Faculty', 'Labs', 'Patents', 'Achievements', 'Innovative Practices']

// â”€â”€â”€ Accordion Item â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
function AccordionItem({ title, children, defaultOpen = false }) {
  const [open, setOpen] = useState(defaultOpen)
  return (
    <div className="border border-[#E5EDF8] rounded-2xl overflow-hidden">
      <button
        onClick={() => setOpen(o => !o)}
        className="w-full flex items-center justify-between p-5 bg-white hover:bg-[#F8FAFC] transition-colors text-left"
      >
        <span className="font-bold font-graphik text-[#224292] text-[15px]">{title}</span>
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

// â”€â”€â”€ Main Component â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
export default function CourseDetailPage({ overrides }) {
  const { courseId: paramCourseId } = useParams()
  const courseId = overrides?.courseId || paramCourseId
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
    { id: 'PEO', icon: Target, title: 'Program Educational Objectives', content: course.peo, color: 'text-[#224292]', bg: 'bg-[#224292]/5', activeBg: 'bg-[#224292]', iconColor: 'text-[#ffc107]' },
    { id: 'PO', icon: Layers, title: 'Program Outcomes', content: course.po, color: 'text-[#ffc107]', bg: 'bg-[#ffc107]/5', activeBg: 'bg-[#ffc107]', iconColor: 'text-[#224292]' },
    { id: 'PSO', icon: Star, title: 'Program Specific Outcomes', content: course.pso, color: 'text-[#224292]', bg: 'bg-[#224292]/5', activeBg: 'bg-[#224292]', iconColor: 'text-[#ffc107]' }
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
      <section className="relative overflow-hidden bg-[#224292] pt-4 pb-6 md:pt-8 md:pb-10">
        {/* Tech Lining / Circuit Background Layer */}
        <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
           <svg width="100%" height="100%" className="absolute inset-0">
             <defs>
               <linearGradient id="lineGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                 <stop offset="0%" stopColor="#ffffff" stopOpacity="0.05" />
                 <stop offset="50%" stopColor="#ffc107" stopOpacity="0.25" />
                 <stop offset="100%" stopColor="#ffffff" stopOpacity="0.05" />
               </linearGradient>
               <filter id="glow">
                  <feGaussianBlur stdDeviation="2.5" result="coloredBlur"/>
                  <feMerge>
                      <feMergeNode in="coloredBlur"/>
                      <feMergeNode in="SourceGraphic"/>
                  </feMerge>
               </filter>
             </defs>
             
             {/* Branched Circuit Lines - Bottom Focus */}
             <g stroke="url(#lineGrad)" strokeWidth="1" fill="none" className="opacity-30">
                <path d="M-100 280 L200 280 L240 240 L600 240 L640 280 L1400 280" />
                <path d="M-100 320 L150 320 L200 370 L500 370 L550 320 L1400 320" />
                <path d="M0 380 L400 380 L440 420 L900 420 L940 380 L1400 380" />
                <path d="M-100 150 L100 150 L140 110 L400 110" />
                <path d="M1400 150 L1100 150 L1060 110 L800 110" />
             </g>
           </svg>
        </div>

        <div className="absolute -right-32 -top-32 w-[500px] h-[500px] rounded-full bg-[#ffc107]/5 blur-[100px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Back button */}
          <button
            onClick={() => {
              const category = (courseId === 'science-humanities') ? 'undergraduate' : ((courseId && (courseId.startsWith('be-') || courseId.startsWith('btech-'))) ? 'undergraduate' : 'postgraduate');
              navigate(`/academics/${category}`);
            }}
            className="mb-4 inline-flex items-center gap-2 text-white/60 hover:text-white text-[13px] font-bold font-graphik transition-colors"
          >
            <ArrowLeft size={15} /> Back to Academics
          </button>

          <div className="flex flex-col lg:flex-row lg:items-center gap-8 lg:gap-12">
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-5 flex-wrap">
                <span className="px-3.5 py-1.5 rounded-full bg-[#ffc107]/20 border border-[#ffc107]/40 text-[#ffc107] text-xs font-bold font-graphik">
                  {course.affiliation}
                </span>
                {course.accreditation && (
                  <span className="px-3.5 py-1.5 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-emerald-300 text-xs font-bold font-graphik">
                    {course.accreditation}
                  </span>
                )}
              </div>
              <h1 className="text-2xl md:text-3xl lg:text-[2.6rem] font-bold font-graphik text-white mb-3 leading-[1.15]">
                {course.name}
              </h1>
              <p className="text-[#ffc107] font-semibold font-graphik text-base md:text-lg mb-6">{course.tagline}</p>

              {/* Course CTA Buttons */}
              <div className="flex flex-wrap gap-4">
                <button
                  onClick={() => navigate('/admissions')}
                  className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-[#ffc107] text-[#224292] font-bold font-graphik text-[14px] hover:bg-[#ffca2c] hover:shadow-xl transition-all shadow-lg shadow-[#ffc107]/25 hover:scale-[1.02]"
                >
                  Quick Apply <ArrowRight size={15} />
                </button>
              </div>
            </div>

            {/* Right Column: Rounded Rectangle Image with Gold Border */}
            <div className="lg:w-[480px] xl:w-[520px] flex flex-col gap-6 shrink-0 relative">
              <div className="relative group">
                {/* Glow effect behind image */}
                <div className="absolute -inset-3 bg-[#ffc107]/15 rounded-[2rem] blur-2xl opacity-0 group-hover:opacity-100 transition-all duration-700" />
                <div className="relative h-[260px] lg:h-[320px] w-full rounded-[1.5rem] overflow-hidden border-[3px] border-[#ffc107]/80 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.4)] transition-transform duration-700 hover:scale-[1.02]">
                  <img 
                    src={course.bannerImage || "https://images.unsplash.com/photo-1562774053-701939374585?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"} 
                    alt={course.name} 
                    className="w-full h-full object-cover scale-105 group-hover:scale-100 transition-transform duration-1000"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0a1a40]/40 via-transparent to-transparent" />
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Hand-drawn department-specific schematic/pencil drawing at the bottom left of the hero */}
        <div className="absolute bottom-[-10px] left-[18%] w-full lg:w-[60%] max-w-[750px] h-[130px] opacity-[0.24] pointer-events-none z-0">
          {getDepartmentSchematic(courseId)}
        </div>
      </section>

      {/* --- MOBILE TAB NAVIGATION (Pill Style) --- */}
      <div className="md:hidden bg-[#224292] py-8 px-6 border-t border-white/10">
        <div className="flex flex-wrap justify-center gap-3">
          {TABS.map(tab => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-5 py-2.5 rounded-full text-[12px] font-bold font-graphik transition-all border-2 ${
                activeTab === tab
                  ? 'bg-[#ffc107] border-[#ffc107] text-[#224292] shadow-lg shadow-[#ffc107]/20 scale-105'
                  : 'bg-white/5 border-white/20 text-white hover:bg-white/10'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>

      {/* --- DESKTOP TAB NAVIGATION (Pill Design) --- */}
      <div ref={tabsRef} className="hidden md:block sticky top-[104px] z-30 bg-[#224292] border-b border-white/10 shadow-xl">
        <div className="w-full px-6 lg:px-12 py-5">
          <div className="flex flex-wrap justify-center gap-3 lg:gap-4 max-w-7xl mx-auto">
            {TABS.map(tab => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`whitespace-nowrap px-6 py-2.5 text-[13px] font-black font-graphik transition-all rounded-full border-2 tracking-wide ${
                  activeTab === tab
                    ? 'bg-[#ffc107] border-[#ffc107] text-[#224292] shadow-lg shadow-[#ffc107]/20 scale-105'
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
            {/* --- OVERVIEW --- */}
            {activeTab === 'Overview' && (
              <div className="space-y-8">
                {/* Full Width About Section */}
                <div className="bg-transparent md:bg-white md:rounded-[2.5rem] md:border md:border-[#DEE7F4] p-0 md:p-14 md:shadow-2xl md:shadow-blue-900/5 transition-all relative overflow-hidden group">
                  {/* Decorative Background Pattern */}
                  <div className="absolute top-0 right-0 w-64 h-64 bg-slate-50 rounded-full -mr-32 -mt-32 blur-3xl group-hover:bg-blue-50 transition-colors duration-700" />
                  <div className="absolute bottom-0 left-0 w-32 h-32 bg-[#ffc107]/5 rounded-full -ml-16 -mb-16 blur-2xl" />



                  <h2 className="text-2xl md:text-3xl font-bold font-graphik mb-8 flex items-center gap-3 tracking-tighter not-italic normal-case">
                    <span className="text-[#224292]">About the</span> <span className="text-[#ffc107]">Program</span>
                  </h2>

                  <div className="relative z-10 mb-12">
                    {Array.isArray(course.overview) ? (
                      <div className="space-y-6">
                        {course.overview.map((para, idx) => (
                         <p key={idx} className="text-black leading-relaxed text-[16px] font-normal font-graphik text-justify not-italic">
                            {para}
                          </p>
                        ))}
                      </div>
                    ) : (
                      <p className="text-black leading-relaxed text-[16px] font-normal font-graphik text-justify not-italic">
                        {course.overview}
                      </p>
                    )}
                  </div>

                  {/* Integrated Quick Insight Metrics - 4 Column Row */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 pt-10 border-t border-slate-100">
                    {[
                      { label: 'Timeframe', value: course.duration, icon: Clock, color: 'text-blue-600', bg: 'bg-blue-100' },
                      { label: 'Intake', value: `${course.intake} Students`, icon: Users, color: 'text-amber-600', bg: 'bg-amber-100' },
                      { label: 'Affiliations', value: course.affiliation, icon: Building2, color: 'text-emerald-600', bg: 'bg-emerald-100' },
                      { label: 'Standard', value: course.accreditation, icon: Award, color: 'text-purple-600', bg: 'bg-purple-100' },
                    ].map(item => (
                      <div key={item.label} className="group p-6 rounded-xl border border-slate-200 bg-slate-50/50 hover:bg-white hover:border-[#ffc107] hover:shadow-xl transition-all duration-300 flex flex-col justify-between">
                        <div>
                          <p className="text-black font-black text-[9px] tracking-[0.2em] mb-4 opacity-40 group-hover:opacity-100 transition-opacity">{item.label}</p>
                          <div className="flex items-center gap-4">
                             <div className={`w-10 h-10 rounded-lg ${item.bg} flex items-center justify-center ${item.color} group-hover:bg-[#ffc107] group-hover:text-[#224292] transition-all duration-500`}>
                                <item.icon size={20} />
                             </div>
                             <span className="text-black font-bold font-graphik text-[14px] leading-tight">{item.value}</span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Enrollment CTA */}
                <div className="flex justify-center pt-4">
                  <button
                    onClick={() => navigate('/admissions')}
                    className="inline-flex items-center gap-3 px-10 py-5 rounded-2xl bg-[#224292] text-white font-bold font-graphik text-[15px] hover:bg-[#ffc107] hover:text-[#224292] transition-all duration-500 shadow-xl shadow-blue-900/10 group/btn"
                  >
                    Enroll Now <ArrowRight size={20} className="group-hover/btn:translate-x-2 transition-transform" />
                  </button>
                </div>
              </div>
            )}

            {/* --- VISION & MISSION --- */}
            {activeTab === 'Vision & Mission' && (
              <>
                <div className="space-y-8 py-8">
                  <div className="grid lg:grid-cols-2 gap-8">
                      {/* Vision Card */}
                      <motion.div 
                          initial={{ opacity: 0, y: 20 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true }}
                          className="group relative rounded-[2rem] p-10 bg-white border border-slate-100 shadow-xl shadow-black/5 overflow-hidden transition-all duration-500 hover:border-[#224292]/30"
                      >
                          <div className="relative z-10 flex flex-col h-full">
                              <h3 className="text-2xl font-bold font-graphik text-[#224292] mb-6 flex items-center gap-3">
                                 <div className="w-1.5 h-6 bg-[#ffc107] rounded-full" />
                                 Our Vision
                              </h3>

                              <div className="space-y-6 flex-grow">
                                  <p className="text-[#333333] leading-relaxed text-[16px] font-normal font-graphik text-justify not-italic">
                                      {course.vision || 'To provide a world-class academic environment for creating global leaders.'}
                                  </p>
                              </div>
                          </div>
                      </motion.div>

                      {/* Mission Card */}
                      <motion.div 
                          initial={{ opacity: 0, y: 20 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: 0.1 }}
                          className="group relative bg-white rounded-[2rem] p-10 shadow-xl shadow-black/5 border border-slate-100 overflow-hidden transition-all duration-500 hover:border-[#ffc107]/30"
                      >
                          <div className="relative z-10 flex flex-col h-full">
                              <h3 className="text-2xl font-bold font-graphik text-[#ffc107] mb-6 flex items-center gap-3">
                                  <div className="w-1.5 h-6 bg-[#224292] rounded-full" />
                                  Our Mission
                              </h3>

                              <div className="space-y-6 flex-grow">
                                  {(course.mission || 'To promote institutional excellence by fostering innovation, research, and high-quality teaching methodologies.').split('\n').map((para, idx) => (
                                      <div key={idx} className="flex gap-4 items-start">
                                          <div className="w-6 h-6 rounded-lg bg-[#224292]/5 flex items-center justify-center shrink-0 mt-0.5 group-hover:bg-[#ffc107]/20 transition-colors">
                                              <CheckCircle2 size={14} className="text-[#224292] transition-colors" />
                                          </div>
                                          <p className="text-[#333333] leading-relaxed text-[15px] md:text-[16px] font-normal font-graphik text-justify not-italic flex-1">
                                              {para.trim().replace(/^M\d+:\s*/i, '')}
                                          </p>
                                      </div>
                                  ))}
                              </div>
                          </div>
                      </motion.div>
                  </div>
                </div>

                <div className="px-2 py-8 sm:px-10 md:p-14 overflow-hidden mt-8">
                  <div className="flex flex-col xl:flex-row xl:items-end justify-between gap-10 mb-12 px-2">
                     <div>
                        <h2 className="text-2xl md:text-3xl font-bold font-graphik text-[#224292] tracking-tighter">Academic Objectives</h2>
                     </div>
                     
                     <div className="grid grid-cols-3 md:flex md:items-center gap-2 md:gap-3 bg-slate-50/50 p-1.5 md:p-2 rounded-2xl md:rounded-[2rem] border border-slate-100">
                        {objectiveData.map((obj) => (
                          <button
                            key={obj.id}
                            onClick={() => setActiveObjectiveTab(obj.id)}
                            className={`px-2 md:px-8 py-3 md:py-4 rounded-xl md:rounded-[1.5rem] flex items-center justify-center md:justify-start gap-1.5 md:gap-3 text-[8px] md:text-[10px] font-bold font-graphik uppercase tracking-tight md:tracking-[0.2em] transition-all duration-500 shadow-sm ${
                              activeObjectiveTab === obj.id
                                ? `${obj.activeBg} text-white shadow-xl shadow-blue-900/10 scale-[1.03] translate-y-[-2px]`
                                : 'bg-white text-[#224292] hover:bg-white/80'
                            }`}
                          >
                             <obj.icon size={14} className={activeObjectiveTab === obj.id ? obj.iconColor : 'text-[#224292]/60'} />
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
                         className="py-4 group"
                       >
                          <div className="space-y-4 font-graphik">
                              {(() => {
                                const text = activeObj.content || 'Data current being optimized for digital view.';
                                const lines = text.split('\n').map(l => l.trim()).filter(l => l.length > 0);
                                
                                // Detect if first line is a preamble
                                const hasPreamble = lines.length > 1 && (lines[0].endsWith(':') || lines[0].includes('will be able to') || lines[0].includes('completion of'));
                                const preamble = hasPreamble ? lines[0] : null;
                                const rawPoints = hasPreamble ? lines.slice(1) : lines;

                                return (
                                  <div className="space-y-4">
                                    {preamble && (
                                      <p className="px-4 text-[#64779F] font-bold text-[13px] mb-6 italic leading-relaxed">{preamble}</p>
                                    )}
                                    {rawPoints.map((point, idx) => {
                                      const match = point.match(/^((?:PEO|PO|PSO|M)\s*[-]?\s*(?:\d+|[IVXLC]+):?)\s*(.*)/i);
                                      const label = match ? match[1] : '';
                                      const description = match ? match[2] : point;

                                      return (
                                        <motion.div 
                                          key={idx} 
                                          whileHover={{ x: 10 }}
                                          className="flex gap-3 md:gap-5 px-4 py-5 md:p-6 rounded-2xl bg-white border border-slate-100 shadow-sm hover:shadow-xl hover:border-blue-100 transition-all group/point"
                                        >
                                          <div className="flex-shrink-0 mt-1">
                                              <div className="w-8 h-8 rounded-lg bg-blue-50 flex items-center justify-center group-hover/point:bg-[#ffc107]/10 transition-colors">
                                                  <CheckCircle2 size={16} className="text-[#224292] group-hover/point:text-[#ffc107] transition-colors" />
                                              </div>
                                          </div>
                                          <div className="space-y-1 flex-1">
                                            {label && (
                                              <span className="block text-[11px] font-black font-graphik text-[#224292] uppercase tracking-[0.2em]">
                                                {label.replace(':', '')}
                                              </span>
                                            )}
                                            <p className="text-[#333333] font-medium font-graphik leading-relaxed text-[14px] sm:text-[16px] text-justify">
                                              {description}
                                            </p>
                                          </div>
                                        </motion.div>
                                      );
                                    })}
                                  </div>
                                );
                              })()}
                           </div>
                       </motion.div>
                    </AnimatePresence>
                   </div>
                </div>
              </>
            )}

            {/* --- CURRICULUM --- */}
            {activeTab === 'Curriculum' && (
              <CurriculumSection courseId={courseId} courseName={course.name} />
            )}

            {/* --- FACULTY --- */}
            {activeTab === 'Faculty' && (
              <div>
                {courseId === 'science-humanities' ? (
                  // ── S&H: Subject-grouped sections ──
                  <div className="space-y-14">
                    {['Mathematics', 'English', 'Physics', 'Chemistry', 'Tamil'].map((subject) => {
                      const subjectFaculty = course.faculty.filter(f => f.subject === subject)
                      if (!subjectFaculty.length) return null

                      const subjectConfig = {
                        Mathematics: { emoji: '∑', color: 'from-blue-600 to-indigo-700', light: 'bg-blue-50 border-blue-100', badge: 'bg-blue-100 text-blue-800' },
                        English:     { emoji: '✍', color: 'from-emerald-600 to-teal-700', light: 'bg-emerald-50 border-emerald-100', badge: 'bg-emerald-100 text-emerald-800' },
                        Physics:     { emoji: '⚛', color: 'from-purple-600 to-violet-700', light: 'bg-purple-50 border-purple-100', badge: 'bg-purple-100 text-purple-800' },
                        Chemistry:   { emoji: '⚗', color: 'from-orange-500 to-amber-600', light: 'bg-orange-50 border-orange-100', badge: 'bg-orange-100 text-orange-800' },
                        Tamil:       { emoji: '📖', color: 'from-rose-500 to-red-600', light: 'bg-rose-50 border-rose-100', badge: 'bg-rose-100 text-rose-800' },
                      }
                      const cfg = subjectConfig[subject]

                      return (
                        <div key={subject}>
                          {/* Subject Heading */}
                          <div className={`flex items-center gap-4 mb-6 pb-4 border-b-2 ${cfg.light.split(' ')[1]}`}>
                            <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${cfg.color} flex items-center justify-center text-white text-2xl font-bold shadow-lg`}>
                              {cfg.emoji}
                            </div>
                            <div>
                              <h2 className="text-xl font-black font-graphik text-[#224292] tracking-tight">
                                Faculty of {subject}
                              </h2>
                              <p className="text-[#64779F] text-sm font-medium">
                                {subjectFaculty.length} faculty member{subjectFaculty.length !== 1 ? 's' : ''}
                              </p>
                            </div>
                            <span className={`ml-auto px-3 py-1 rounded-full text-xs font-black uppercase tracking-widest ${cfg.badge}`}>
                              {subject}
                            </span>
                          </div>

                          {/* Faculty Cards Grid */}
                          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
                            {subjectFaculty.map((f, i) => (
                              <motion.div
                                key={f.name + i}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: i * 0.04 }}
                                onClick={() => setSelectedFaculty(f)}
                                className="bg-white group cursor-pointer border-2 border-[#E5EDF8] shadow-lg shadow-black/[0.08] hover:shadow-2xl hover:shadow-black/20 transition-all flex flex-col h-full overflow-hidden rounded-[14px] font-graphik"
                              >
                                <div
                                  className="w-full aspect-square bg-slate-100 overflow-hidden relative"
                                  style={{ backgroundImage: `url(${facultyBg})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
                                >
                                  {f.image ? (
                                    <img src={f.image} alt={f.name} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                                  ) : (
                                    <div className="w-full h-full flex items-center justify-center text-slate-300">
                                      <GraduationCap size={44} />
                                    </div>
                                  )}
                                </div>
                                <div className="p-[13px] flex flex-col flex-1">
                                  <h3 className="font-bold font-graphik text-[#224292] text-[13px] mb-0.5 leading-tight group-hover:text-[#ffc107] transition-colors line-clamp-2">
                                    {f.name}
                                  </h3>
                                  <p className="text-slate-500 text-[11.5px] font-semibold font-graphik leading-tight mb-2.5 line-clamp-2">
                                    {f.designation}
                                  </p>
                                  <div className="mt-auto">
                                    <span className="inline-block text-[8.5px] font-medium font-graphik uppercase tracking-[0.1em] text-[#224292] group-hover:text-[#ffc107] transition-all bg-[#224292]/5 px-2 py-0.5 rounded">
                                      View Bio
                                    </span>
                                  </div>
                                </div>
                              </motion.div>
                            ))}
                          </div>
                        </div>
                      )
                    })}
                  </div>
                ) : (
                  // ── Other departments: original flat layout ──
                  <div>
                    <div className="mb-6">
                      <h2 className="text-2xl font-extrabold font-graphik text-[#224292] mb-1">Our Faculty</h2>
                      <p className="text-[#64779F]">Industry-experienced academics committed to your success</p>
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5">
                      {course.faculty.filter(f => f.category !== 'S&H').map((f, i) => (
                        <motion.div
                          key={f.name}
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: i * 0.05 }}
                          onClick={() => setSelectedFaculty(f)}
                          className="bg-white group cursor-pointer border-2 border-[#E5EDF8] shadow-lg shadow-black/[0.08] hover:shadow-2xl hover:shadow-black/20 transition-all flex flex-col h-full overflow-hidden rounded-[14px] font-graphik"
                        >
                          <div
                            className="w-full aspect-square bg-slate-100 overflow-hidden relative"
                            style={{ backgroundImage: `url(${facultyBg})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
                          >
                            {f.image ? (
                              <img src={f.image} alt={f.name} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                            ) : (
                              <div className="w-full h-full flex items-center justify-center text-slate-300">
                                <GraduationCap size={44} />
                              </div>
                            )}
                          </div>
                          <div className="p-[13px] flex flex-col flex-1">
                            <h3 className="font-bold font-graphik text-[#224292] text-[14px] mb-0.5 leading-tight group-hover:text-[#ffc107] transition-colors line-clamp-1">
                              {f.name}
                            </h3>
                            <p className="text-slate-500 text-[12.5px] font-semibold font-graphik leading-tight mb-2.5 line-clamp-2">
                              {f.designation}
                            </p>
                            <div className="mt-auto">
                              <span className="inline-block text-[8.5px] font-medium font-graphik uppercase tracking-[0.1em] text-[#224292] group-hover:text-[#ffc107] transition-all bg-[#224292]/5 px-2 py-0.5 rounded">
                                View Bio
                              </span>
                            </div>
                          </div>
                        </motion.div>
                      ))}
                    </div>

                    {course.faculty.some(f => f.category === 'S&H') && (
                      <>
                        <div className="mb-6 mt-12 pt-6 border-t border-[#E5EDF8]">
                          <h2 className="text-2xl font-extrabold font-graphik text-[#224292] mb-1">Science & Humanities Faculty</h2>
                          <p className="text-[#64779F]">Specialized educators supporting foundational sciences and communication skills</p>
                        </div>
                        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5">
                          {course.faculty.filter(f => f.category === 'S&H').map((f, i) => (
                            <motion.div
                              key={f.name}
                              initial={{ opacity: 0, y: 20 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ delay: i * 0.05 }}
                              onClick={() => setSelectedFaculty(f)}
                              className="bg-white group cursor-pointer border-2 border-[#E5EDF8] shadow-lg shadow-black/[0.08] hover:shadow-2xl hover:shadow-black/20 transition-all flex flex-col h-full overflow-hidden rounded-[14px] font-graphik"
                            >
                              <div
                                className="w-full aspect-square bg-slate-100 overflow-hidden relative"
                                style={{ backgroundImage: `url(${facultyBg})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
                              >
                                {f.image ? (
                                  <img src={f.image} alt={f.name} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                                ) : (
                                  <div className="w-full h-full flex items-center justify-center text-slate-300">
                                    <GraduationCap size={44} />
                                  </div>
                                )}
                              </div>
                              <div className="p-[13px] flex flex-col flex-1">
                                <h3 className="font-bold font-graphik text-[#224292] text-[14px] mb-0.5 leading-tight group-hover:text-[#ffc107] transition-colors line-clamp-1">
                                  {f.name}
                                </h3>
                                <p className="text-slate-500 text-[12.5px] font-semibold font-graphik leading-tight mb-2.5 line-clamp-2">
                                  {f.designation}
                                </p>
                                <div className="mt-auto">
                                  <span className="inline-block text-[8.5px] font-medium font-graphik uppercase tracking-[0.1em] text-[#224292] group-hover:text-[#ffc107] transition-all bg-[#224292]/5 px-2 py-0.5 rounded">
                                    View Bio
                                  </span>
                                </div>
                              </div>
                            </motion.div>
                          ))}
                        </div>
                      </>
                    )}
                  </div>
                )}
              </div>
            )}

            {/* --- LABS --- */}
            {activeTab === 'Labs' && (
              <div className="w-full">
                {/* DESKTOP VIEW: Sidebar + Detail Panel (Visible only on lg and above) */}
                <div className="hidden lg:flex flex-row gap-8">
                  {/* Left Sidebar: Lab List */}
                  <div className="lg:w-1/3 xl:w-1/4 space-y-3 max-h-[750px] overflow-y-auto px-4 py-2 pr-2">
                    <div className="mb-6 px-1">
                       <h2 className="text-xl font-bold font-graphik text-[#224292] tracking-tight mb-1">Labs & Facilities</h2>
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
                              ? 'bg-[#224292] border-[#224292] text-white shadow-xl shadow-[#224292]/20' 
                              : 'bg-white border-[#E5EDF8] text-[#224292] hover:border-[#224292]/30'
                          }`}
                        >
                           <div className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 transition-all ${
                              isDesktopSelected ? 'bg-[#ffc107] text-[#224292]' : 'bg-[#224292]/5 text-[#224292] group-hover:bg-[#224292] group-hover:text-white'
                           }`}>
                             {LabIcon && <LabIcon size={20} />}
                           </div>
                           <span className="text-[14px] font-bold font-graphik tracking-tight leading-tight flex-1">{lab.name}</span>
                           <ChevronRight size={14} className={isDesktopSelected ? 'text-[#ffc107]' : 'text-[#64779F] opacity-40'} />
                        </button>
                      );
                    })}
                  </div>

                  {/* Right Panel: Lab Details (Desktop only shows the first active index) */}
                  <div ref={labsDetailRef} className="flex-1">
                    <AnimatePresence mode="wait">
                      {openLabIndices[0] !== null && course.labs[openLabIndices[0]] && (() => {
                        const activeLab = course.labs[openLabIndices[0]];
                        return (
                        <motion.div
                          key={openLabIndices[0]}
                          initial={{ opacity: 0, x: 20 }}
                          animate={{ opacity: 1, x: 0 }}
                          exit={{ opacity: 0, x: -20 }}
                          className="bg-white rounded-2xl border border-[#DEE7F4] shadow-2xl shadow-blue-900/5 overflow-hidden flex flex-col"
                        >
                           {/* Lab Header */}
                           <div className="bg-[#224292] p-3 md:p-4 relative overflow-hidden shrink-0">
                              <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -mr-32 -mt-32 blur-3xl" />
                              <div className="relative z-10 flex flex-col md:flex-row items-center gap-5">
                                 <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl bg-white/10 flex items-center justify-center border border-white/20">
                                    {activeLab.icon && (
                                       (() => {
                                          const LargeIcon = activeLab.icon;
                                          return <LargeIcon size={22} className="text-[#ffc107]" />;
                                       })()
                                    )}
                                 </div>
                                 <div className="text-center md:text-left">
                                    <h3 className="text-lg md:text-xl font-bold font-graphik text-white tracking-tight mb-0.5">{activeLab.name}</h3>
                                 </div>
                              </div>
                           </div>

                           {/* Lab Content Scrollable Area */}
                           <div className="p-8 md:p-12 space-y-10 overflow-y-auto custom-scrollbar">
                              {/* Inventory / Equipment */}
                              <div>
                                 <div className="flex items-center gap-3 mb-6">
                                    <div className="w-1.5 h-6 bg-[#ffc107] rounded-full" />
                                    <h4 className="text-[14px] font-bold font-graphik text-[#64779F] tracking-[0.1em]">Technical Inventory & Tools</h4>
                                 </div>
                                 <div className="grid sm:grid-cols-2 gap-3">
                                    {activeLab.equipments?.map((item, idx) => (
                                      <div key={idx} className="flex gap-3 p-4 rounded-2xl bg-slate-50 border border-slate-100 items-start group hover:bg-white hover:border-[#ffc107]/20 transition-all">
                                         <div className="w-2 h-2 rounded-full bg-[#ffc107] mt-1.5 shrink-0 group-hover:scale-125 transition-all" />
                                         <span className="text-[14px] font-medium font-graphik text-slate-600 leading-tight tracking-tight">{item}</span>
                                      </div>
                                    )) || (
                                      <p className="text-[#64779F] italic text-sm">Main specialized equipment list is being updated.</p>
                                    )}
                                 </div>
                              </div>

                              {/* Personnel / Staff */}
                              {courseId !== 'be-cse' && (
                                <div className="pt-10 border-t border-slate-100 grid md:grid-cols-2 gap-8">
                                   <div className="bg-[#224292]/5 p-6 rounded-2xl border border-[#224292]/10">
                                      <p className="text-[14px] font-bold font-graphik tracking-widest text-[#64779F] mb-3">Facility In-Charge</p>
                                      <p className="text-[#224292] font-bold font-graphik text-[14px]">{activeLab.incharge || 'Department HOD'}</p>
                                   </div>
                                   <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200">
                                      <p className="text-[14px] font-bold font-graphik tracking-widest text-[#64779F] mb-3">Technical Staff</p>
                                      <p className="text-[#224292] font-bold font-graphik text-[14px]">{activeLab.technician || 'Engineering Technician'}</p>
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
                      <h2 className="text-xl font-bold font-graphik text-[#224292] tracking-tight mb-1">Labs & Facilities</h2>
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
                                 ? 'bg-[#224292] border-[#224292] text-white shadow-xl shadow-[#224292]/20 rounded-b-none' 
                                 : 'bg-white border-[#E5EDF8] text-[#224292] hover:border-[#224292]/30'
                             }`}
                           >
                              <div className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 transition-all ${
                                 isOpen ? 'bg-[#ffc107] text-[#224292]' : 'bg-[#224292]/5 text-[#224292]'
                              }`}>
                                {LabIcon && <LabIcon size={20} />}
                              </div>
                              <span className="text-[14px] font-bold font-graphik tracking-tight leading-tight flex-1">{lab.name}</span>
                              <ChevronDown size={18} className={`transition-transform duration-300 ${isOpen ? 'rotate-180 text-[#ffc107]' : 'text-[#64779F] opacity-40'}`} />
                           </button>

                           <AnimatePresence>
                              {isOpen && (
                                <motion.div
                                  initial={{ height: 0, opacity: 0 }}
                                  animate={{ height: "auto", opacity: 1 }}
                                  exit={{ height: 0, opacity: 0 }}
                                  className="bg-white border-2 border-t-0 border-[#224292] rounded-b-2xl overflow-hidden"
                                >
                                   <div className="p-6 space-y-8">
                                      {/* Mobile Content Display */}
                                      <div className="flex items-center gap-3 pb-4 border-b border-slate-100">
                                         <Building2 size={14} className="text-[#ffc107]" />
                                         <p className="text-[#64779F] text-[14px] font-bold font-graphik tracking-widest">{course.name}</p>
                                      </div>

                                      <div>
                                         <div className="flex items-center gap-2 mb-4">
                                            <div className="w-1 h-4 bg-[#ffc107] rounded-full" />
                                            <h4 className="text-[14px] font-bold font-graphik text-[#64779F] tracking-wider">Inventory & Tools</h4>
                                         </div>
                                         <div className="grid gap-2">
                                            {lab.equipments?.map((item, idx) => (
                                              <div key={idx} className="flex gap-3 p-3 rounded-xl bg-slate-50 border border-slate-100 items-start">
                                                 <div className="w-1.5 h-1.5 rounded-full bg-[#ffc107] mt-1.5 shrink-0" />
                                                 <span className="text-[14px] font-medium font-graphik text-slate-600 leading-tight tracking-tight">{item}</span>
                                              </div>
                                            ))}
                                         </div>
                                      </div>

                                      {courseId !== 'be-cse' && (
                                        <div className="grid gap-3 pt-4 border-t border-slate-100">
                                           <div className="bg-[#224292]/5 p-4 rounded-xl border border-[#224292]/10">
                                              <p className="text-[14px] font-bold font-graphik uppercase tracking-widest text-[#64779F] mb-1">In-Charge</p>
                                              <p className="text-[#224292] font-bold font-graphik text-[14px]">{lab.incharge}</p>
                                           </div>
                                           <div className="bg-slate-50 p-4 rounded-xl border border-slate-200">
                                              <p className="text-[14px] font-bold font-graphik uppercase tracking-widest text-[#64779F] mb-1">Technician</p>
                                              <p className="text-[#224292] font-bold font-graphik text-[14px]">{lab.technician}</p>
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

            {/* --- PATENTS --- */}
            {activeTab === 'Patents' && (
              <div className="space-y-10">
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-slate-100">
                  <div>
                    <h2 className="text-3xl md:text-5xl font-bold font-graphik text-[#224292] tracking-tight mb-2">
                       Department <span className="text-[#ffc107]">Patents</span>
                    </h2>
                  </div>
                  <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#224292]/5 rounded-xl border border-[#224292]/10 text-[#224292] text-[10px] font-bold font-graphik uppercase tracking-widest">
                     <ShieldCheck size={14} /> Registered Assets
                  </div>
                </div>

                {course.patents && course.patents.length > 0 ? (
                  <div className="space-y-12">
                      <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="bg-white rounded-2xl border border-[#E5EDF8] shadow-2xl shadow-blue-900/5 overflow-hidden"
                      >
                        <div className="bg-[#224292] px-8 py-5 flex items-center justify-between">
                          <h3 className="text-white font-bold font-graphik text-lg tracking-tight">Official Department Patents</h3>
                        </div>
                        
                        <div className="overflow-x-auto">
                          <table className="w-full text-left border-collapse">
                            <thead>
                              <tr className="bg-slate-50 border-b border-slate-100">
                                <th className="px-6 py-4 text-[11px] font-black text-[#224292] uppercase tracking-widest">Applicant & Inventor</th>
                                <th className="px-6 py-4 text-[11px] font-black text-[#224292] uppercase tracking-widest">Patent Title</th>
                                <th className="px-6 py-4 text-[11px] font-black text-[#224292] uppercase tracking-widest">Type</th>
                                <th className="px-6 py-4 text-[11px] font-black text-[#224292] uppercase tracking-widest">Application/Design No</th>
                                <th className="px-6 py-4 text-[11px] font-black text-[#224292] uppercase tracking-widest">Date</th>
                                <th className="px-6 py-4 text-[11px] font-black text-[#224292] uppercase tracking-widest">Status</th>
                              </tr>
                            </thead>
                            <tbody className="divide-y divide-slate-100">
                              {course.patents.map((yearGroup) => (
                                yearGroup.data.map((patent, pIdx) => (
                                  <tr key={`${yearGroup.year}-${pIdx}`} className="hover:bg-blue-50/30 transition-colors group">
                                    <td className="px-6 py-5">
                                      <p className="text-[13px] font-bold text-black leading-tight mb-1">{patent.inventors}</p>
                                    </td>
                                    <td className="px-6 py-5">
                                      <p className="text-[13px] font-medium text-black leading-snug max-w-md">{patent.title}</p>
                                    </td>
                                    <td className="px-6 py-5">
                                      <span className="text-[11px] font-bold text-[#64779F]">{patent.type}</span>
                                    </td>
                                    <td className="px-6 py-5">
                                      <code className="text-[12px] font-bold text-[#224292] bg-slate-100 px-2 py-1 rounded">{patent.appNo}</code>
                                    </td>
                                    <td className="px-6 py-5 text-sm font-medium text-slate-600 whitespace-nowrap">{patent.date}</td>
                                    <td className="px-6 py-5">
                                      <span className={`inline-block px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest ${
                                        patent.status === 'Granted' ? 'bg-emerald-100 text-emerald-700' : 'bg-blue-100 text-blue-700'
                                      }`}>
                                        {patent.status}
                                      </span>
                                    </td>
                                  </tr>
                                ))
                              ))}
                            </tbody>
                          </table>
                        </div>
                      </motion.div>
                  </div>
                ) : (
                  <div className="grid lg:grid-cols-2 gap-8">
                      <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        whileHover={{ y: -10, scale: 1.01 }}
                        viewport={{ once: true }}
                        className="group relative bg-white p-7 rounded-2xl border border-[#E5EDF8] shadow-2xl shadow-blue-900/5 flex flex-col items-center text-center transition-all duration-500"
                      >
                         <div className="absolute top-0 left-0 w-8 h-8 border-t-4 border-l-4 border-dashed border-[#224292]/20 rounded-tl-2xl" />
                         <div className="w-16 h-16 rounded-2xl bg-[#224292]/5 border border-[#224292]/10 flex items-center justify-center mb-6 group-hover:bg-[#224292] group-hover:text-white transition-all duration-500">
                            <FileText size={32} className="text-[#224292] group-hover:text-white transition-colors" />
                         </div>
                         <h3 className="text-lg font-bold font-graphik text-[#224292] mb-3">Official Patents</h3>
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
                        className="group bg-gradient-to-br from-[#224292] to-[#224292] rounded-2xl p-7 text-white shadow-2xl shadow-blue-900/20 relative overflow-hidden transition-all duration-500"
                      >
                         <div className="absolute -bottom-1 -right-1 w-12 h-12 border-b-4 border-r-4 border-dashed border-[#ffc107]/30 rounded-br-2xl" />
                         <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full -mr-16 -mt-16 blur-2xl" />
                         <div className="relative z-10">
                           <div className="w-14 h-14 rounded-xl bg-white/10 flex items-center justify-center mb-6 border border-white/20 group-hover:border-[#ffc107] transition-all">
                              <Award size={28} className="text-[#ffc107]" />
                           </div>
                           <h3 className="text-lg font-bold font-graphik mb-3 tracking-tight">Research Excellence</h3>
                           <p className="text-white/70 text-sm font-medium font-graphik leading-relaxed mb-6">
                              We foster innovation. All patent applications and IPR are managed through the Institutional Research & Development Cell.
                           </p>
                           <button className="flex items-center gap-3 px-5 py-2.5 bg-white/10 hover:bg-white/20 border border-white/20 rounded-xl text-[9px] font-bold font-graphik uppercase tracking-widest transition-all">
                              Contact R&D <ArrowRight size={14} />
                           </button>
                         </div>
                      </motion.div>
                  </div>
                )}
              </div>
            )}


            {activeTab === 'Achievements' && (
              <AchievementSection courseId={courseId} courseName={course.name} />
            )}

            {activeTab === 'Innovative Practices' && (
              <InnovativePracticesSection courseId={courseId} courseName={course.name} />
            )}

            {/* --- ADMISSIONS --- */}
            {activeTab === 'Admissions' && (
              <div className="grid md:grid-cols-2 gap-8">
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="relative group"
                >
                  <div className="absolute inset-0 border-2 border-[#224292]/10 rotate-[4deg] rounded-[2rem] pointer-events-none" />
                  <div className="relative bg-white rounded-2xl border border-[#E5EDF8] p-8 shadow-xl shadow-blue-900/5 z-10">
                    <div className="absolute top-0 left-0 -translate-x-1/4 -translate-y-1/2 px-6 py-2 bg-[#224292] text-white rounded-full text-[9px] font-bold font-graphik uppercase tracking-widest shadow-lg">
                       Eligibility
                    </div>
                    <ul className="space-y-4 mt-4">
                      {course.eligibility.map(item => (
                        <li key={item} className="flex items-start gap-4 p-4 rounded-xl bg-slate-50/50 hover:bg-white hover:shadow-md transition-all border border-transparent hover:border-slate-100">
                          <CheckCircle size={18} className="text-[#ffc107] mt-0.5 shrink-0" />
                          <span className="text-[14px] font-bold font-graphik text-[#224292] leading-relaxed">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
                <div className="space-y-4">
                  <div className="bg-[#224292] rounded-2xl p-6 text-white">
                    <h3 className="font-extrabold font-graphik text-lg mb-3">Ready to Apply?</h3>
                    <p className="text-white/70 text-[14px] mb-5">Join thousands of students building their future at KIOT.</p>
                    <button
                      onClick={() => navigate('/admissions')}
                      className="w-full flex items-center justify-center gap-2 py-3.5 rounded-xl bg-[#ffc107] text-[#224292] font-bold font-graphik hover:bg-[#ffca2c] transition-all"
                    >
                      Start Application <ArrowRight size={15} />
                    </button>
                  </div>
                  <div className="bg-white rounded-2xl border border-[#E5EDF8] p-6">
                    <h3 className="font-extrabold font-graphik text-[#224292] mb-3">Need Help?</h3>
                    <p className="text-[#64779F] text-[13px] mb-4">Our admissions team is here to guide you through the process.</p>
                    <a href="tel:9894701234" className="flex items-center gap-2 text-[#224292] font-bold font-graphik text-[14px] hover:text-[#ffc107] transition-colors">
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
              className="bg-white w-full max-w-2xl rounded-lg shadow-2xl overflow-hidden max-h-[90vh] flex flex-col"
            >
              <div className="overflow-y-auto scrollbar-hide flex-1 pb-10">
                <div className="bg-[#224292] p-3 md:p-4 relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-64 h-64 bg-[#ffc107]/5 rounded-full -mr-20 -mt-20 blur-3xl" />
                  
                  {/* Top Right Close Button */}
                  <button 
                    onClick={() => setSelectedFaculty(null)}
                    className="absolute top-3 right-3 z-20 w-7 h-7 flex items-center justify-center rounded-md bg-white/10 text-white/70 hover:bg-white/20 hover:text-white transition-all backdrop-blur-sm border border-white/10"
                  >
                    <X size={14} />
                  </button>

                  <div className="relative z-10 flex flex-col md:flex-row items-center gap-4">
                    <div 
                      className="w-14 h-14 md:w-16 md:h-16 rounded-md bg-white/10 flex items-center justify-center shrink-0 border border-white/20 overflow-hidden"
                      style={{ 
                        backgroundImage: `url(${facultyBg})`, 
                        backgroundSize: 'cover', 
                        backgroundPosition: 'center' 
                      }}
                    >
                      {selectedFaculty.image ? (
                        <img src={selectedFaculty.image} alt={selectedFaculty.name} className="w-full h-full object-cover" />
                      ) : (
                        <GraduationCap size={28} className="text-[#ffc107]" />
                      )}
                    </div>
                    <div className="text-center md:text-left">
                      <h2 className="text-lg md:text-xl font-bold font-graphik text-white mb-1 leading-tight tracking-tight">
                        {selectedFaculty.name}
                      </h2>
                      <p className="text-[#ffc107] font-bold font-graphik text-xs md:text-sm">{selectedFaculty.designation}</p>
                    </div>
                  </div>
                </div>

                <div className="p-6 md:p-8">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
                    <div className="space-y-4">
                      {selectedFaculty.qualification && (
                        <div>
                          <p className="text-[13.5px] font-semibold font-graphik text-[#224292] mb-1">Academic Credentials</p>
                          <p className="text-black font-medium font-graphik text-[12.5px]">{selectedFaculty.qualification}</p>
                        </div>
                      )}
                      {selectedFaculty.specialization && selectedFaculty.specialization !== 'N/A' && (
                        <div>
                          <p className="text-[13.5px] font-semibold font-graphik text-[#224292] mb-1">Area of Specialization</p>
                          <p className="text-black font-medium font-graphik text-[12.5px]">{selectedFaculty.specialization}</p>
                        </div>
                      )}
                      {selectedFaculty.experience && (
                        <div>
                          <p className="text-[13.5px] font-semibold font-graphik text-[#224292] mb-1">Work Experience</p>
                          <div className="flex items-center gap-2 text-black">
                            <Clock size={14} className="text-black/80" />
                            <span className="font-medium font-graphik text-[12.5px]">{selectedFaculty.experience}</span>
                          </div>
                        </div>
                      )}
                       {(selectedFaculty.joiningDate || selectedFaculty.doj) && (
                        <div>
                          <p className="text-[13.5px] font-semibold font-graphik text-[#224292] mb-1">Date of Joining</p>
                          <p className="text-black font-medium font-graphik text-[12.5px]">{selectedFaculty.joiningDate || selectedFaculty.doj}</p>
                        </div>
                      )}
                    </div>

                    <div className="space-y-4">
                      {selectedFaculty.email && selectedFaculty.email !== 'N/A' && (
                        <div>
                          <p className="text-[13.5px] font-semibold font-graphik text-[#224292] mb-1">E-Mail Address</p>
                          <a href={`mailto:${selectedFaculty.email}`} className="flex items-center gap-2 text-black font-medium font-graphik text-[12.5px] hover:text-[#224292] transition-colors">
                            <Mail size={14} className="text-black/80" />
                            {selectedFaculty.email}
                          </a>
                        </div>
                      )}
                      {selectedFaculty.phone && (
                        <div>
                          <p className="text-[13.5px] font-semibold font-graphik text-[#224292] mb-1">Contact Number</p>
                          <a href={`tel:${selectedFaculty.phone}`} className="flex items-center gap-2 text-black font-medium font-graphik text-[12.5px] hover:text-[#224292] transition-colors">
                            <MapPin size={14} className="text-black/80" />
                            {selectedFaculty.phone}
                          </a>
                        </div>
                      )}
                      {selectedFaculty.association && (
                        <div>
                          <p className="text-[13.5px] font-semibold font-graphik text-[#224292] mb-1">Nature of Association</p>
                          <span className="inline-block px-3 py-1 rounded-md bg-slate-100 text-black text-[11px] font-semibold font-graphik tracking-wide">
                            {selectedFaculty.association}
                          </span>
                        </div>
                      )}
                    </div>
                  </div>

                  {selectedFaculty.publications && (
                    <div className="mt-8 pt-8 border-t border-[#E5EDF8]">
                      <p className="text-[15px] font-semibold font-graphik text-[#224292] mb-2">Research & Publications</p>
                      <div className="p-5 bg-slate-50 border border-slate-200 rounded-xl">
                        <p className="text-black font-medium font-graphik text-[13px] leading-relaxed italic">
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

// â”€â”€â”€ Achievement Section Component â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
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
            <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#224292] to-[#224292] flex items-center justify-center shadow-xl shadow-[#224292]/20">
              <Trophy size={28} className="text-[#ffc107]" />
            </div>
            <div>
              <h3 className="text-4xl font-bold font-graphik text-[#224292] tracking-tight leading-none mb-1">Department Honors</h3>
              <p className="text-black font-medium font-graphik text-sm tracking-wide">Celebrating academic and professional milestones</p>
            </div>
          </div>
          <p className="text-[#A9B1C3] text-[11px] font-bold font-graphik tracking-[0.2em]">Department of {courseName.split('Engineering')[0]}</p>
        </div>
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
          <div className="bg-white p-1 rounded-2xl flex border border-[#D5E2F4] shadow-xl shadow-blue-900/5">
            {['AWARD', 'ACHIEVEMENT'].map(tab => (
              <button key={tab} onClick={() => setActiveSubTab(tab)} className={`px-8 py-3 rounded-xl text-[10px] font-bold font-graphik tracking-[0.2em] transition-all duration-300 ${activeSubTab === tab ? 'bg-[#224292] text-white shadow-lg shadow-[#224292]/20 translate-y-[-1px]' : 'text-[#64779F] hover:bg-slate-50 hover:text-[#224292]'}`}>
                {tab === 'AWARD' ? 'Awards' : 'Achievements'}
              </button>
            ))}
          </div>
          {selectedYear && (
            <div className="bg-white p-1 rounded-2xl flex border border-[#D5E2F4] shadow-xl shadow-blue-900/5">
              {audienceTabs.map(tab => (
                <button key={tab.id} onClick={() => setActiveAudience(tab.id)} className={`px-6 py-3 rounded-xl text-[10px] font-bold font-graphik tracking-[0.2em] transition-all duration-300 ${activeAudience === tab.id ? 'bg-[#ffc107] text-[#224292] shadow-lg shadow-[#ffc107]/20 translate-y-[-1px]' : 'text-[#64779F] hover:bg-slate-50 hover:text-[#224292]'}`}>
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
              <button key={yr} onClick={() => setSelectedYear(yr)} className="bg-white p-8 rounded-[2rem] border border-[#E5EDF8] shadow-sm hover:shadow-xl hover:border-[#224292]/20 transition-all flex flex-col items-center group">
                <div className="h-12 w-12 bg-slate-50 flex items-center justify-center rounded-xl mb-3 group-hover:scale-110 transition-transform">
                  <Star size={24} className="text-[#ffc107]" />
                </div>
                <span className="text-xl font-bold font-graphik text-[#224292]">{yr}</span>
                <span className="text-[10px] font-bold font-graphik tracking-[0.1em] text-[#A9B1C3] mt-1 opacity-60">View Folders</span>
              </button>
            ))
          )}
        </div>
      ) : (
        <>
          <div className="flex items-center gap-4 -mt-4">
            <button onClick={() => setSelectedYear(null)} className="flex items-center gap-2 px-4 py-2 bg-white rounded-xl text-[10px] font-bold font-graphik tracking-widest text-[#224292] border-2 border-[#E2E8F0] hover:bg-slate-50 hover:translate-x-[-4px] transition-all">
              <ArrowLeft size={14} /> Back to Years
            </button>
            <span className="px-4 py-2 bg-[#ffc107] text-[#224292] text-[10px] font-bold font-graphik uppercase rounded-xl tracking-widest">Selected: {selectedYear}</span>
          </div>

          {loading ? (
            <div className="py-24 flex flex-col items-center justify-center gap-5">
              <div className="w-16 h-16 rounded-full border-4 border-[#224292]/10 border-t-[#ffc107] animate-spin" />
              <p className="text-[11px] font-bold font-graphik uppercase tracking-[0.3em] text-[#224292]/40">Fetching Records...</p>
            </div>
          ) : visibleData.length === 0 ? (
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="py-24 px-8 rounded-[3rem] bg-white border border-[#D5E2F4]/50 shadow-2xl shadow-blue-900/5 flex flex-col items-center text-center group">
              <div className="w-24 h-24 rounded-3xl bg-[#F8FAFC] border border-[#E5EDF8] flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-500">
                <div className="relative">
                  <Users size={48} className="text-[#A9B1C3]/40" />
                  <Star size={20} className="absolute -top-1 -right-1 text-[#ffc107] animate-bounce" />
                </div>
              </div>
              <h4 className="text-xl font-bold font-graphik text-[#224292] mb-3">No records found</h4>
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
                    <motion.div key={`${activeAudience}-${item.id}`} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: idx * 0.08 }} className="bg-white rounded-[2rem] p-7 border border-[#E5EDF8] shadow-sm hover:shadow-xl hover:border-[#224292]/20 transition-all group">
                      <div className="flex items-start justify-between mb-6 gap-4">
                        <div className="h-12 w-12 rounded-xl bg-[#224292]/5 flex items-center justify-center text-[#224292] group-hover:bg-[#224292] group-hover:text-[#ffc107] transition-all shrink-0">
                          {isAward ? <Award size={22} /> : (activeAudience === 'FACULTY' ? <Users size={22} /> : <Trophy size={22} />)}
                        </div>
                        <span className="text-[10px] font-bold font-graphik text-[#64779F] uppercase tracking-widest bg-slate-50 px-3 py-1 rounded-lg">
                          {item.year || item.academic_year || item.batch || 'Record'}
                        </span>
                      </div>

                      <h4 className="text-lg font-bold font-graphik text-[#224292] mb-2 leading-tight">{isAward ? item.award_name : item.description}</h4>
                      <p className="text-[#64779F] text-sm font-semibold font-graphik italic mb-6 opacity-80">{isStudent ? (isAward ? item.student_name : item.name) : item.faculty_name}</p>

                      {isRank && (
                        <div className="grid grid-cols-2 gap-3 mb-6">
                          <div className="bg-slate-50 p-3 rounded-xl border border-slate-100">
                             <p className="text-[9px] font-bold font-graphik text-[#A9B1C3] uppercase mb-1">Rank</p>
                             <p className="text-sm font-bold font-graphik text-[#224292]">{item.university_rank}</p>
                          </div>
                          <div className="bg-teal-50 p-3 rounded-xl border border-teal-100">
                             <p className="text-[9px] font-bold font-graphik text-[#A9B1C3] uppercase mb-1">CGPA</p>
                             <p className="text-sm font-bold font-graphik text-teal-600">{item.cgpa}</p>
                          </div>
                        </div>
                      )}

                      {fileUrl && (
                        <a href={fileUrl} target="_blank" rel="noreferrer" className="flex items-center justify-center gap-2 w-full py-3 bg-[#F8FAFC] border border-[#E5EDF8] rounded-xl text-[10px] font-bold font-graphik uppercase tracking-widest text-[#224292] hover:bg-[#224292] hover:text-white transition-all">
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

// ─── Innovative Practices Section Component ──────────────────────────────────
function InnovativePracticesSection({ courseId, courseName }) {
  const [records, setRecords] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const finalDept = getAchievementDepartmentName(courseId, courseName);
        const res = await fetch(`${API_BASE}/curriculum-innovative-practices/?department=${encodeURIComponent(finalDept)}`);
        if (res.ok) {
          const data = await res.json();
          setRecords(data);
        }
      } catch (err) {
        console.error("Error fetching curriculum innovative practices:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [courseId, courseName]);

  const isComputing = ['be-cse', 'btech-it', 'btech-aids', 'btech-csbs', 'mca'].includes(courseId);
  const isElectronics = ['be-ece', 'be-eee', 'be-ecm', 'me-ae', 'me-ped'].includes(courseId);
  const isCoreEng = ['be-mechanical', 'be-civil', 'me-ise'].includes(courseId);

  let mockPractices = [];
  if (isComputing) {
    mockPractices = [
      {
        title: "Project-Based Learning & Hackathons",
        description: "Students work on real-world software applications and participate in national hackathons (like Smart India Hackathon) as a core part of their learning journey.",
        details: "Development of fully functional projects, GitHub version control tracking, and mandatory team coding sprints.",
        icon: Cpu
      },
      {
        title: "ICT Enabled Teaching with Coding Playgrounds",
        description: "Integration of interactive coding playgrounds (HackerRank, LeetCode) and virtual classrooms (Google Classroom) for real-time assessments and programming challenges.",
        details: "Virtual coding sandboxes, online quizzes, programming contests, and automated grading systems.",
        icon: Cpu
      },
      {
        title: "Peer-to-Peer Learning & Technical Coding Clubs",
        description: "Active student-led programming clubs where senior students mentor juniors in advanced algorithms, competitive programming, and web development.",
        details: "Weekly coding meetups, group discussions, and bootcamps on full-stack frameworks.",
        icon: Users
      },
      {
        title: "Flipped Classroom & Interactive Quizzes",
        description: "Students study core concepts via pre-recorded high-quality video lectures, and classroom sessions are dedicated to problem-solving, debugging, and system design.",
        details: "Interactive Kahoot quizzes, collaborative system design board sessions, and group presentations.",
        icon: Star
      }
    ];
  } else if (isElectronics) {
    mockPractices = [
      {
        title: "Simulation-Based Learning",
        description: "Mandatory design and analysis of circuit diagrams using standard industry software simulation tools (like MATLAB, Multisim, Proteus, Keil) before physical assembly.",
        details: "Virtual simulation environments, schematic verification, and wave analysis.",
        icon: FlaskConical
      },
      {
        title: "Hands-on Classroom Demonstrations",
        description: "Integrating hardware kits (Arduino, Raspberry Pi, FPGA boards) directly into theoretical lecture hours to bridge mathematical models with physical reality.",
        details: "Live demonstrations of signal waveforms, embedded sensor readings, and real-time debug sessions.",
        icon: Wrench
      },
      {
        title: "Design Contests & Maker Labs",
        description: "Fostering prototyping culture via design challenges, IoT product design hackathons, and PCB fabrication workshops in the department's dedicated design spaces.",
        details: "Product mockup designs, PCB layout fabrication, and micro-controller programming challenges.",
        icon: Layers
      },
      {
        title: "Collaborative Project Clusters",
        description: "Interdisciplinary project teams building smart automation, smart grids, and e-mobility solutions under joint guidance of faculty mentors.",
        details: "Hardware prototype exhibitions, joint research papers, and patents filing support.",
        icon: Cpu
      }
    ];
  } else if (isCoreEng) {
    mockPractices = [
      {
        title: "Computer-Aided Design (CAD) & Analysis Contests",
        description: "Fostering computational analysis skill through regular design sprints on AutoCAD, SolidWorks, and ANSYS software packages.",
        details: "3D part modeling, finite element analysis (FEA) testing, and thermal simulation contests.",
        icon: Wrench
      },
      {
        title: "Experimental Learning & Model Making",
        description: "Students design and construct physical scale models and structural prototypes to understand complex mechanisms and building physics.",
        details: "Prototype bridge building, assembly/disassembly of engine components, and materials testing.",
        icon: Layers
      },
      {
        title: "Industrial Site Visits & Experiential Learning",
        description: "Aligning academic coursework with construction sites, manufacturing assembly lines, and thermal power station operations through mandatory field study visits.",
        details: "On-site documentation, safety audits, and expert interactions during field visits.",
        icon: Building2
      },
      {
        title: "Sustainable Solution Projects",
        description: "Encouraging students to build eco-friendly green concrete, energy-efficient mechanical devices, and smart waste management systems.",
        details: "Bio-degradable material testing, solar-hybrid vehicle prototypes, and waste recycling projects.",
        icon: Target
      }
    ];
  } else {
    mockPractices = [
      {
        title: "Case-Based Pedagogical Approach",
        description: "Analyzing actual business case studies from Harvard Business Review, MIT Sloan, and leading business journals to build strategic thinking.",
        details: "Harvard Case studies, business strategy games, and financial portfolio analysis.",
        icon: Briefcase
      },
      {
        title: "Business Simulations & Role Plays",
        description: "Interactive marketing games, mock board meetings, stock market simulations, and organizational behavior role plays.",
        details: "Virtual stock trading, customer negotiation simulations, and HR conflict resolution role plays.",
        icon: TrendingUp
      },
      {
        title: "Flipped Classroom & Interactive Quizzes",
        description: "Students study core concepts via online videos and reference material, using class hours for group discussions, mock pitches, and presentations.",
        details: "Kahoot quizzes, business plan presentations, and case defense sessions.",
        icon: Target
      },
      {
        title: "Mentorship & Executive Interactions",
        description: "Exclusive interactions with entrepreneurs, start-up incubation mentors (iStart), and industry experts to align students with market practices.",
        details: "Weekly expert lectures, venture capital feedback sessions, and startup incubator access.",
        icon: Users
      }
    ];
  }

  return (
    <div className="space-y-12">
      <div className="flex flex-col xl:flex-row xl:items-end justify-between gap-8 pb-8 border-b border-[#D5E2F4]/50">
        <div>
          <div className="flex items-center gap-4 mb-4">
            <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#224292] to-[#224292] flex items-center justify-center shadow-xl shadow-[#224292]/20">
              <Star size={28} className="text-[#ffc107]" />
            </div>
            <div>
              <h3 className="text-4xl font-bold font-graphik text-[#224292] tracking-tight leading-none mb-1">Innovative Practices</h3>
              <p className="text-black font-medium font-graphik text-sm tracking-wide">Modern pedagogical methodologies and active learning strategies</p>
            </div>
          </div>
        </div>
      </div>

      {loading ? (
        <div className="py-24 flex flex-col items-center justify-center gap-5">
          <div className="w-16 h-16 rounded-full border-4 border-[#224292]/10 border-t-[#ffc107] animate-spin" />
          <p className="text-[11px] font-bold font-graphik uppercase tracking-[0.3em] text-[#224292]/40">Fetching Innovative Practices...</p>
        </div>
      ) : records.length > 0 ? (
        <div className="max-w-4xl mx-auto overflow-x-auto max-h-[600px] border border-[#E5EDF8] rounded-xl shadow-sm custom-scrollbar bg-white">
          <table className="w-full text-left border-collapse">
            <thead className="sticky top-0 bg-[#224292] text-white z-10 shadow-sm">
              <tr>
                <th className="px-8 py-3 text-[10px] font-bold font-graphik uppercase tracking-[0.2em] w-[10%]">S.No</th>
                <th className="px-8 py-3 text-[10px] font-bold font-graphik uppercase tracking-[0.2em] w-[25%]">Staff Name</th>
                <th className="px-8 py-3 text-[10px] font-bold font-graphik uppercase tracking-[0.2em] w-[15%]">Year</th>
                <th className="px-8 py-3 text-[10px] font-bold font-graphik uppercase tracking-[0.2em] w-[50%]">Achievements</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#D5E2F4]/40">
              {records.map((item, idx) => (
                <tr key={item.sno || idx} className="hover:bg-slate-50/50 transition-colors">
                  <td className="px-8 py-2.5 text-sm font-bold text-slate-400">{idx + 1}</td>
                  <td className="px-8 py-2.5 text-sm font-bold text-[#224292]">{item.staff_name}</td>
                  <td className="px-8 py-2.5 text-sm font-bold text-black">{item.year}</td>
                  <td className="px-8 py-2.5 text-sm font-medium text-slate-700 leading-relaxed whitespace-pre-wrap">
                    <div className="flex items-center justify-between gap-4">
                      <span>{item.achievements}</span>
                      {item.pdf_url && (
                        <a
                          href={item.pdf_url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-[#ffc107]/20 hover:bg-[#ffc107] text-[#224292] font-bold text-[10px] uppercase tracking-wider rounded-lg transition-all shrink-0"
                        >
                          <FileText size={12} /> View PDF
                        </a>
                      )}
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {mockPractices.map((practice, idx) => {
            const PracticeIcon = practice.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.08 }}
                className="bg-white rounded-[2rem] p-8 border border-[#E5EDF8] shadow-sm hover:shadow-xl hover:border-[#224292]/20 transition-all flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="h-12 w-12 rounded-xl bg-[#224292]/5 flex items-center justify-center text-[#224292] group-hover:bg-[#224292] group-hover:text-[#ffc107] transition-all">
                      <PracticeIcon size={22} />
                    </div>
                    <span className="text-[10px] font-black font-graphik text-[#ffc107] uppercase tracking-widest bg-[#224292] px-3.5 py-1.5 rounded-full">
                      Practice {idx + 1}
                    </span>
                  </div>
                  <h4 className="text-lg font-bold font-graphik text-[#224292] mb-3 group-hover:text-[#ffc107] transition-colors">{practice.title}</h4>
                  <p className="text-black font-normal font-graphik text-[15px] leading-relaxed text-justify mb-6">{practice.description}</p>
                </div>
                <div className="bg-slate-50/80 p-5 rounded-2xl border border-slate-100 mt-auto">
                  <p className="text-[10px] font-bold font-graphik text-[#64779F] uppercase tracking-wider mb-1.5">Key Implementation Details</p>
                  <p className="text-black font-medium font-graphik text-[13.5px] leading-relaxed italic">{practice.details}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
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
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#224292] to-[#224292] flex items-center justify-center shadow-lg shadow-[#224292]/20">
                 <BookOpen size={24} className="text-[#ffc107]" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold font-graphik text-[#224292] tracking-tight">Academic <span className="text-[#ffc107]">Curriculum</span></h2>
           </div>
        </div>

        <div className="flex bg-slate-100/80 p-1.5 rounded-2xl border border-slate-200 self-start md:self-center">
          {['Regulations', 'Syllabus'].map((t) => (
            <button
              key={t}
              onClick={() => setCurriculumTab(t)}
              className={`px-8 py-3 rounded-xl text-[10px] font-bold font-graphik uppercase tracking-[0.2em] transition-all duration-300 ${
                curriculumTab === t
                  ? 'bg-white text-[#224292] shadow-xl shadow-blue-900/10 scale-[1.02] translate-y-[-1px]'
                  : 'text-[#64779F] hover:text-[#224292]'
              }`}
            >
              {t}
            </button>
          ))}
        </div>
      </div>

      {loading ? (
        <div className="py-24 flex flex-col items-center justify-center gap-5">
           <div className="w-16 h-16 rounded-full border-4 border-[#224292]/10 border-t-[#ffc107] animate-spin" />
           <p className="text-[11px] font-bold font-graphik uppercase tracking-[0.3em] text-[#224292]/40">Indexing Academic Files...</p>
        </div>
      ) : records.length === 0 ? (
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="py-20 px-8 rounded-[3rem] bg-white border border-[#D5E2F4]/50 shadow-2xl shadow-blue-900/5 flex flex-col items-center text-center">
           <div className="w-20 h-20 rounded-[2rem] bg-[#F8FAFC] flex items-center justify-center mb-8">
              <FileText size={40} className="text-[#A9B1C3]/30" />
           </div>
           <h4 className="text-xl font-bold font-graphik text-[#224292] uppercase mb-2">No {curriculumTab} Found</h4>
           <p className="text-[#64779F] font-bold font-graphik text-sm">Official documentation for this department is being updated.</p>
        </motion.div>
      ) : (
        <div className="space-y-6">
           {/* Desktop Table View (Visible on Medium screens and above) */}
           <div className="hidden md:block bg-white border border-[#D5E2F4]/80 rounded-xl overflow-hidden shadow-sm">
              <table className="w-full text-left border-collapse">
                 <thead>
                    <tr className="bg-[#224292] border-b border-[#224292]">
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
                                curriculumTab === 'Regulations' ? 'bg-blue-50 text-[#224292]' : 'bg-[#ffc107]/10 text-[#224292]'
                             }`}>
                               {curriculumTab === 'Regulations' ? <ShieldCheck size={18} /> : <BookOpen size={18} />}
                             </div>
                             <span className="text-sm font-bold font-graphik text-black transition-colors">{item.title}</span>
                          </div>
                       </td>
                       <td className="px-3 py-3.5">
                          <div className="flex items-center gap-2">
                             <Calendar size={12} className="text-[#ffc107]" />
                             <span className="text-[10px] font-bold font-graphik uppercase tracking-widest text-black">{item.year_or_version}</span>
                          </div>
                       </td>
                       {curriculumTab === 'Syllabus' && (
                          <td className="px-3 py-3.5">
                             <span className="px-2.5 py-1 rounded-md bg-slate-50 border border-slate-100 text-[9px] font-bold font-graphik text-[#224292] group-hover:bg-[#224292] group-hover:text-white transition-all">
                                SEM - {item.semester}
                             </span>
                          </td>
                       )}
                       <td className="px-5 py-3.5 text-right">
                          <div className="flex items-center justify-end gap-3">
                             <a 
                               href={item.pdf_url} 
                               target="_blank" 
                               rel="noopener noreferrer"
                               className="p-2.5 rounded-xl bg-blue-50 text-[#224292] hover:bg-[#ffc107] hover:shadow-lg transition-all transform active:scale-95"
                               title="View Document"
                             >
                                <ExternalLink size={16} />
                             </a>
                             <button 
                               onClick={() => {
                                  const downloadUrl = item.pdf_url.includes('/upload/') 
                                    ? item.pdf_url.replace('/upload/', '/upload/fl_attachment/')
                                    : item.pdf_url;
                                  window.open(downloadUrl, '_blank');
                                }}
                               className="p-2.5 rounded-xl bg-[#ffc107]/20 text-[#224292] hover:bg-[#ffc107] transition-all transform active:scale-95 shadow-sm"
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

           {/* Mobile List View (Visible only on mobile) */}
           <div className="md:hidden space-y-4">
              {records.map((item, i) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.05 }}
                  className="bg-white border border-[#D5E2F4] rounded-2xl p-5 shadow-sm active:scale-[0.98] transition-transform"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div className={`w-11 h-11 rounded-xl flex items-center justify-center shrink-0 ${
                         curriculumTab === 'Regulations' ? 'bg-blue-50 text-[#224292]' : 'bg-[#ffc107]/10 text-[#224292]'
                      }`}>
                        {curriculumTab === 'Regulations' ? <ShieldCheck size={20} /> : <BookOpen size={20} />}
                      </div>
                      <div className="space-y-1">
                        <h4 className="text-[14px] font-bold font-graphik text-black leading-tight">{item.title}</h4>
                        <div className="flex items-center gap-2">
                          <Calendar size={11} className="text-[#ffc107]" />
                          <span className="text-[10px] font-bold font-graphik uppercase tracking-widest text-black/50">{item.year_or_version}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex items-center pt-4 border-t border-slate-50 gap-4">
                    {curriculumTab === 'Syllabus' && (
                      <span className="px-3 py-1 rounded-lg bg-slate-50 border border-slate-100 text-[10px] font-bold font-graphik text-[#224292]">
                         SEM - {item.semester}
                      </span>
                    )}
                    <div className="flex items-center gap-3">
                      <a 
                        href={item.pdf_url} 
                        target="_blank" 
                        rel="noreferrer" 
                        className="flex items-center gap-2 px-4 py-2.5 bg-blue-50 text-[#224292] rounded-xl text-[10px] font-bold font-graphik uppercase tracking-wider"
                      >
                         View <ExternalLink size={14} />
                      </a>
                      <button 
                        onClick={() => {
                          const downloadUrl = item.pdf_url.includes('/upload/') ? item.pdf_url.replace('/upload/', '/upload/fl_attachment/') : item.pdf_url;
                          window.open(downloadUrl, '_blank');
                        }}
                        className="flex items-center gap-2 px-4 py-2.5 bg-[#ffc107] text-[#224292] rounded-xl text-[10px] font-bold font-graphik uppercase tracking-wider shadow-sm shadow-[#ffc107]/20"
                      >
                         Download <Download size={14} />
                      </button>
                    </div>
                  </div>
                </motion.div>
              ))}
           </div>
        </div>
      )}
    </div>
  )
}
