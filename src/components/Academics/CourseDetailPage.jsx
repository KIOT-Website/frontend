import { useState, useRef, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import {
  GraduationCap, Clock, Users, ChevronDown, ChevronRight,
  Download, ArrowLeft, Briefcase, FlaskConical, BookOpen,
  Award, Building2, CheckCircle, ArrowRight, ExternalLink,
  Microscope, Star, MapPin, Layers, Cpu, Globe, Wrench,
  BarChart3, FileText
} from 'lucide-react'

// ─── Course Data ────────────────────────────────────────────────────────────
const courseData = {
  'be-mechanical': {
    name: 'B.E Mechanical Engineering',
    short: 'Mechanical Engineering',
    duration: '4 Years (8 Semesters)',
    intake: 120,
    affiliation: 'Anna University',
    accreditation: 'NBA Accredited',
    placement: '92%',
    avgPackage: '4.2 LPA',
    topPackage: '12 LPA',
    icon: Wrench,
    color: '#18357a',
    tagline: 'Design, Build, Innovate',
    overview: 'B.E Mechanical Engineering at KIOT provides a comprehensive foundation in thermodynamics, fluid mechanics, machine design, manufacturing processes and modern CAD/CAM technologies. Our graduates are sought after by leading automotive, aerospace and energy companies.',
    whyChoose: [
      'NBA Accredited Program',
      'State-of-the-art CAD/CAM & CNC labs',
      '100% placement assistance',
      'Industry-experienced faculty',
      'Live project collaborations with companies',
      'MSME Innovation Hub partnership',
    ],
    curriculum: [
      {
        year: 'Year 1 – Foundation',
        semesters: ['Engineering Mathematics I & II', 'Engineering Physics & Chemistry', 'Engineering Graphics', 'Programming in C', 'Workshop Practice', 'Environmental Science'],
      },
      {
        year: 'Year 2 – Core Concepts',
        semesters: ['Engineering Thermodynamics', 'Fluid Mechanics', 'Manufacturing Technology', 'Strength of Materials', 'Electrical & Electronics Engineering', 'Metrology & Measurements'],
      },
      {
        year: 'Year 3 – Specialisation',
        semesters: ['Heat & Mass Transfer', 'Design of Machine Elements', 'Dynamics of Machinery', 'CAD/CAM', 'Industrial Engineering', 'Robotics & Automation (Elective)'],
      },
      {
        year: 'Year 4 – Industry Ready',
        semesters: ['Finite Element Analysis', 'Project Management', 'Elective: EV Technology', 'Elective: Additive Manufacturing', 'Internship Project', 'Final Year Project'],
      },
    ],
    faculty: [
      { name: 'Dr. S. Ramesh Kumar', designation: 'HoD & Professor', experience: '22 Years', specialization: 'Thermal Engineering', rating: 4.9 },
      { name: 'Dr. A. Sathish', designation: 'Associate Professor', experience: '14 Years', specialization: 'CAD/CAM & Robotics', rating: 4.7 },
      { name: 'Mrs. K. Priya', designation: 'Assistant Professor', experience: '8 Years', specialization: 'Manufacturing Processes', rating: 4.8 },
      { name: 'Mr. T. Vignesh', designation: 'Assistant Professor', experience: '6 Years', specialization: 'Fluid Mechanics', rating: 4.6 },
    ],
    labs: [
      { name: 'CAD/CAM Lab', equipment: 'CATIA, SolidWorks, UG NX — 40 workstations', icon: Cpu },
      { name: 'Dynamics Lab', equipment: 'Vibration test rigs, balancing machines, governor set-ups', icon: FlaskConical },
      { name: 'Thermal Engineering Lab', equipment: 'IC Engines, heat exchangers, refrigeration set-up', icon: Microscope },
      { name: 'Manufacturing Lab', equipment: 'Lathe, milling, CNC turning & machining centres', icon: Wrench },
    ],
    companies: ['TATA Motors', 'L&T', 'Ashok Leyland', 'TVS Motor', 'Ford India', 'Caterpillar', 'BHEL', 'Hyundai'],
    placementStats: { placed: '92%', avg: '4.2 LPA', top: '12 LPA', companies: '60+' },
    projects: [
      'Design of Hybrid Electric Vehicle Chassis',
      'IoT-Based Predictive Maintenance System',
      'Biodiesel Extraction from Algae',
      'Automated Pick-and-Place Robot',
    ],
    eligibility: [
      '10+2 with Physics, Chemistry, Math (PCM)',
      'Minimum 50% aggregate in PCM',
      'TNEA rank / Valid TANCET score',
      'No upper age limit',
    ],
  },
  'be-cse': {
    name: 'B.E Computer Science & Engineering',
    short: 'Computer Science & Engineering',
    duration: '4 Years (8 Semesters)',
    intake: 240,
    affiliation: 'Anna University',
    accreditation: 'NBA Accredited',
    placement: '96%',
    avgPackage: '5.8 LPA',
    topPackage: '24 LPA',
    icon: Cpu,
    color: '#18357a',
    tagline: 'Code. Create. Conquer.',
    overview: 'B.E Computer Science & Engineering is the flagship program at KIOT. With a curriculum updated annually with industry inputs, students gain hands-on experience in full-stack development, cloud computing, AI/ML, and cybersecurity. Our graduates work at the world\'s leading tech companies.',
    whyChoose: [
      'NBA Accredited flagship program',
      'Industry 4.0 aligned curriculum',
      'Dedicated Placement Cell with 200+ recruiters',
      'Google, Microsoft and AWS certified labs',
      'Hackathons, coding competitions & startup incubation',
      'Average package of 5.8 LPA',
    ],
    curriculum: [
      {
        year: 'Year 1 – Foundation',
        semesters: ['Engineering Mathematics I & II', 'Problem Solving Using Python', 'Engineering Physics & Chemistry', 'English for Engineers', 'Digital Logic Circuits', 'Web Technologies'],
      },
      {
        year: 'Year 2 – Core Computing',
        semesters: ['Data Structures', 'Computer Organisation', 'DBMS', 'Object Oriented Programming (Java)', 'Operating Systems', 'Computer Networks'],
      },
      {
        year: 'Year 3 – Advanced Domains',
        semesters: ['Design & Analysis of Algorithms', 'Software Engineering', 'Machine Learning', 'Cloud Computing', 'Information Security', 'Open Elective I'],
      },
      {
        year: 'Year 4 – Industry Ready',
        semesters: ['Big Data Analytics', 'DevOps & Containerisation', 'Elective: Generative AI', 'Elective: Blockchain', 'Internship Project', 'Final Year Project'],
      },
    ],
    faculty: [
      { name: 'Dr. K. Vijayalakshmi', designation: 'HoD & Professor', experience: '20 Years', specialization: 'Machine Learning & AI', rating: 4.9 },
      { name: 'Dr. R. Arun', designation: 'Associate Professor', experience: '12 Years', specialization: 'Cloud Computing', rating: 4.8 },
      { name: 'Mrs. S. Janani', designation: 'Assistant Professor', experience: '7 Years', specialization: 'Full Stack Development', rating: 4.7 },
      { name: 'Mr. P. Karthik', designation: 'Assistant Professor', experience: '5 Years', specialization: 'Cybersecurity', rating: 4.6 },
    ],
    labs: [
      { name: 'Cloud Computing Lab', equipment: 'AWS, Azure, GCP — 60 workstations', icon: Globe },
      { name: 'AI/ML Research Lab', equipment: 'NVIDIA GPUs, TensorFlow, PyTorch environment', icon: FlaskConical },
      { name: 'Networking Lab', equipment: 'Cisco routers, switches, firewall equipment', icon: Layers },
      { name: 'Software Development Lab', equipment: 'IDE stations, Git servers, CI/CD pipelines', icon: Cpu },
    ],
    companies: ['TCS', 'Infosys', 'Wipro', 'HCLTech', 'Cognizant', 'Zoho', 'Capgemini', 'Accenture', 'IBM', 'Amazon'],
    placementStats: { placed: '96%', avg: '5.8 LPA', top: '24 LPA', companies: '100+' },
    projects: [
      'Real-time Traffic Management using AI',
      'Smart Campus IoT Monitoring System',
      'NLP-powered Chatbot for Student Services',
      'Blockchain-based Certificate Verification',
    ],
    eligibility: [
      '10+2 with Math, Physics, Chemistry / Biology / CS',
      'Minimum 50% aggregate',
      'TNEA rank / Valid TANCET score',
      'No upper age limit',
    ],
  },
  'be-ece': {
    name: 'B.E Electronics & Communication Engineering',
    short: 'Electronics & Communication',
    duration: '4 Years (8 Semesters)',
    intake: 180,
    affiliation: 'Anna University',
    accreditation: 'NBA Accredited',
    placement: '90%',
    avgPackage: '4.8 LPA',
    topPackage: '18 LPA',
    icon: Globe,
    color: '#18357a',
    tagline: 'Connect the World.',
    overview: 'The ECE department focuses on cellular communications, embedded systems, and VLSI design, preparing students for the rapidly evolving telecommunications industry.',
    whyChoose: ['High-tech VLSI labs', 'Communication focus', 'Expert faculty'],
    curriculum: [{ year: 'Year 1', semesters: ['Maths', 'Physics', 'Circuits'] }],
    faculty: [{ name: 'Dr. R. Sundaram', designation: 'HoD', experience: '20 Years', specialization: 'VLSI', rating: 4.8 }],
    labs: [{ name: 'VLSI Lab', equipment: 'Cadence Tools', icon: Cpu }],
    companies: ['Intel', 'Qualcomm', 'Samsung'],
    placementStats: { placed: '90%', avg: '4.8 LPA', top: '18 LPA', companies: '50+' },
    projects: ['IoT Based Smart Home'],
    eligibility: ['10+2 with PCM'],
  },
  'btech-it': {
    name: 'B.Tech Information Technology',
    short: 'Information Technology',
    duration: '4 Years (8 Semesters)',
    intake: 120,
    affiliation: 'Anna University',
    accreditation: 'NBA Accredited',
    placement: '94%',
    avgPackage: '5.2 LPA',
    topPackage: '20 LPA',
    icon: BookOpen,
    color: '#18357a',
    tagline: 'Manage Information. Drive Innovation.',
    overview: 'IT focuses on application development, networking, and data management, ensuring students are industry-ready for software and services sectors.',
    whyChoose: ['Strong coding culture', 'Software focused', 'Industry tie-ups'],
    curriculum: [{ year: 'Year 1', semesters: ['Python', 'Discrete Maths', 'Digital Logic'] }],
    faculty: [{ name: 'Dr. M. Senthil', designation: 'HoD', experience: '18 Years', specialization: 'Networks', rating: 4.7 }],
    labs: [{ name: 'Networks Lab', equipment: 'Configurable Routers', icon: Layers }],
    companies: ['Zoho', 'Freshworks', 'Amazon'],
    placementStats: { placed: '94%', avg: '5.2 LPA', top: '20 LPA', companies: '80+' },
    projects: ['Cloud-based ERP'],
    eligibility: ['10+2 with PCM'],
  },
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

const TABS = ['Overview', 'Curriculum', 'Faculty', 'Labs', 'Placements', 'Admissions']

// ─── Accordion Item ──────────────────────────────────────────────────────────
function AccordionItem({ title, children, defaultOpen = false }) {
  const [open, setOpen] = useState(defaultOpen)
  return (
    <div className="border border-[#E5EDF8] rounded-2xl overflow-hidden">
      <button
        onClick={() => setOpen(o => !o)}
        className="w-full flex items-center justify-between p-5 bg-white hover:bg-[#F8FAFC] transition-colors text-left"
      >
        <span className="font-bold text-[#18357a] text-[15px]">{title}</span>
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
  const tabsRef = useRef(null)

  const course = courseData[courseId] || defaultCourse(courseId)
  const Icon = course.icon

  const scrollToTab = () => {
    if (tabsRef.current) {
      tabsRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  return (
    <div className="min-h-screen bg-[#F8FAFC]" style={{ fontFamily: "'Inter', 'Outfit', sans-serif" }}>

      {/* Hero */}
      <section className="relative overflow-hidden bg-[#18357a] pt-8 pb-10 md:pt-12 md:pb-14">
        <div className="absolute inset-0 opacity-10" style={{
          backgroundImage: 'radial-gradient(circle at 70% 80%, #ffc107 1.5px, transparent 1.5px)',
          backgroundSize: '48px 48px'
        }} />
        <div className="absolute -right-32 -top-32 w-[500px] h-[500px] rounded-full bg-[#ffc107]/6 pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Back button */}
          <button
            onClick={() => navigate('/academics')}
            className="mb-6 inline-flex items-center gap-2 text-white/60 hover:text-white text-[13px] font-semibold transition-colors"
          >
            <ArrowLeft size={15} /> Back to Academics
          </button>

          <div className="flex flex-col lg:flex-row lg:items-center gap-8">
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-4 flex-wrap">
                <span className="px-3 py-1 rounded-full bg-[#ffc107]/20 border border-[#ffc107]/30 text-[#ffc107] text-xs font-bold">
                  {course.affiliation}
                </span>
                <span className="px-3 py-1 rounded-full bg-emerald-500/20 border border-emerald-500/30 text-emerald-300 text-xs font-bold">
                  {course.accreditation}
                </span>
              </div>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white mb-3 leading-tight">
                {course.name}
              </h1>
              <p className="text-[#ffc107] font-semibold text-lg mb-6">{course.tagline}</p>

              <div className="flex flex-wrap gap-6 mb-8">
                <div className="flex items-center gap-2 text-white/80">
                  <Clock size={16} className="text-[#ffc107]" />
                  <span className="text-sm font-medium">{course.duration}</span>
                </div>
                <div className="flex items-center gap-2 text-white/80">
                  <Users size={16} className="text-[#ffc107]" />
                  <span className="text-sm font-medium">{course.intake} Seats</span>
                </div>
                <div className="flex items-center gap-2 text-white/80">
                  <Award size={16} className="text-[#ffc107]" />
                  <span className="text-sm font-medium">{course.placement} Placement</span>
                </div>
              </div>

              <div className="flex flex-wrap gap-3">
                <button
                  onClick={() => navigate('/admissions')}
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#ffc107] text-[#18357a] font-bold text-[14px] hover:bg-[#ffca2c] transition-all shadow-lg shadow-[#ffc107]/20"
                >
                  Quick Apply <ArrowRight size={15} />
                </button>
                <button className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-white/20 text-white font-semibold text-[14px] hover:bg-white/10 transition-all">
                  <Download size={15} /> Download Brochure
                </button>
              </div>
            </div>

            {/* Stats card */}
            <div className="lg:w-72 shrink-0">
              <div className="bg-white/10 backdrop-blur-sm border border-white/15 rounded-2xl p-6 grid grid-cols-2 gap-4">
                {[
                  { label: 'Duration', value: course.duration.split(' ')[0] + ' Yrs' },
                  { label: 'Seats', value: course.intake },
                  { label: 'Avg Package', value: course.avgPackage },
                  { label: 'Top Package', value: course.topPackage },
                ].map(s => (
                  <div key={s.label} className="text-center">
                    <p className="text-2xl font-extrabold text-[#ffc107]">{s.value}</p>
                    <p className="text-white/60 text-[12px] font-medium mt-0.5">{s.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tab Navigation */}
      <div ref={tabsRef} className="sticky top-[104px] z-30 bg-white border-b border-[#E5EDF8] shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex gap-1 overflow-x-auto scrollbar-hide py-1">
            {TABS.map(tab => (
              <button
                key={tab}
                onClick={() => { setActiveTab(tab); scrollToTab() }}
                className={`whitespace-nowrap px-5 py-3.5 text-[14px] font-bold transition-all rounded-t-lg ${
                  activeTab === tab
                    ? 'text-[#18357a] border-b-2 border-[#ffc107] bg-[#18357a]/4'
                    : 'text-[#64779F] hover:text-[#18357a] hover:bg-[#F8FAFC]'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Tab Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
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
                <div className="lg:col-span-2 space-y-6">
                  <div className="bg-white rounded-2xl border border-[#E5EDF8] p-6 md:p-8">
                    <h2 className="text-xl font-extrabold text-[#18357a] mb-4">About the Program</h2>
                    <p className="text-[#64779F] leading-relaxed text-[15px]">{course.overview}</p>
                  </div>
                  <div className="bg-white rounded-2xl border border-[#E5EDF8] p-6 md:p-8">
                    <h2 className="text-xl font-extrabold text-[#18357a] mb-5">Why Choose This Program?</h2>
                    <div className="grid sm:grid-cols-2 gap-3">
                      {course.whyChoose.map(item => (
                        <div key={item} className="flex items-start gap-3 p-3 rounded-xl bg-[#F8FAFC] border border-[#E5EDF8]">
                          <CheckCircle size={16} className="text-[#ffc107] mt-0.5 shrink-0" />
                          <span className="text-[14px] font-semibold text-[#18357a]">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="bg-[#18357a] rounded-2xl p-6 text-white">
                    <h3 className="font-extrabold mb-4 text-lg">Quick Info</h3>
                    {[
                      { label: 'Duration', value: course.duration },
                      { label: 'Total Intake', value: `${course.intake} Students` },
                      { label: 'Affiliation', value: course.affiliation },
                      { label: 'Accreditation', value: course.accreditation },
                    ].map(item => (
                      <div key={item.label} className="flex justify-between py-2.5 border-b border-white/10 last:border-0">
                        <span className="text-white/60 text-[13px]">{item.label}</span>
                        <span className="text-white font-bold text-[13px]">{item.value}</span>
                      </div>
                    ))}
                  </div>
                  <button className="w-full flex items-center justify-center gap-2 p-4 rounded-2xl bg-[#ffc107] text-[#18357a] font-bold text-[15px] hover:bg-[#ffca2c] transition-all">
                    <Download size={16} /> Download Brochure
                  </button>
                  <button
                    onClick={() => navigate('/admissions')}
                    className="w-full flex items-center justify-center gap-2 p-4 rounded-2xl bg-[#18357a] text-white font-bold text-[15px] hover:bg-[#1e42a0] transition-all"
                  >
                    Apply Now <ArrowRight size={16} />
                  </button>
                </div>
              </div>
            )}

            {/* ── CURRICULUM ── */}
            {activeTab === 'Curriculum' && (
              <div className="space-y-4 max-w-3xl mx-auto">
                <div className="mb-6">
                  <h2 className="text-2xl font-extrabold text-[#18357a] mb-1">Year-wise Curriculum</h2>
                  <p className="text-[#64779F]">Expand each year to see the subjects covered each semester</p>
                </div>
                {course.curriculum.map((year, i) => (
                  <AccordionItem key={year.year} title={year.year} defaultOpen={i === 0}>
                    <ul className="grid sm:grid-cols-2 gap-2">
                      {year.semesters.map(subj => (
                        <li key={subj} className="flex items-start gap-2.5 text-[13px] text-[#64779F]">
                          <div className="w-1.5 h-1.5 rounded-full bg-[#ffc107] mt-1.5 shrink-0" />
                          {subj}
                        </li>
                      ))}
                    </ul>
                  </AccordionItem>
                ))}
                <div className="mt-6 p-5 rounded-2xl bg-[#18357a] text-white flex items-center gap-4">
                  <FileText size={22} className="text-[#ffc107] shrink-0" />
                  <div className="flex-1">
                    <p className="font-bold">Download Full Syllabus</p>
                    <p className="text-white/60 text-[13px]">Anna University Regulation 2021</p>
                  </div>
                  <button className="bg-[#ffc107] text-[#18357a] px-4 py-2 rounded-xl font-bold text-[13px] whitespace-nowrap flex items-center gap-1.5">
                    <Download size={13} /> PDF
                  </button>
                </div>
              </div>
            )}

            {/* ── FACULTY ── */}
            {activeTab === 'Faculty' && (
              <div>
                <div className="mb-6">
                  <h2 className="text-2xl font-extrabold text-[#18357a] mb-1">Our Faculty</h2>
                  <p className="text-[#64779F]">Industry-experienced academics committed to your success</p>
                </div>
                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
                  {course.faculty.map((f, i) => (
                    <motion.div
                      key={f.name}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: i * 0.1 }}
                      className="bg-white rounded-2xl border border-[#E5EDF8] p-6 text-center hover:border-[#18357a]/30 hover:shadow-lg transition-all"
                    >
                      <div className="w-16 h-16 rounded-2xl bg-[#18357a]/8 flex items-center justify-center mx-auto mb-4">
                        <GraduationCap size={28} className="text-[#18357a]" />
                      </div>
                      <h3 className="font-extrabold text-[#18357a] text-[14px] mb-1">{f.name}</h3>
                      <p className="text-[#ffc107] text-[12px] font-bold mb-1">{f.designation}</p>
                      <p className="text-[#64779F] text-[12px] mb-3">{f.specialization}</p>
                      <div className="flex items-center justify-center gap-4 text-[11px] text-[#A9B1C3] font-semibold">
                        <span>{f.experience}</span>
                        <span className="flex items-center gap-0.5">
                          <Star size={10} className="text-[#ffc107] fill-[#ffc107]" /> {f.rating}
                        </span>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            )}

            {/* ── LABS ── */}
            {activeTab === 'Labs' && (
              <div>
                <div className="mb-6">
                  <h2 className="text-2xl font-extrabold text-[#18357a] mb-1">Labs & Facilities</h2>
                  <p className="text-[#64779F]">World-class infrastructure for hands-on learning</p>
                </div>
                <div className="grid sm:grid-cols-2 gap-5">
                  {course.labs.map((lab, i) => (
                    <motion.div
                      key={lab.name}
                      initial={{ opacity: 0, scale: 0.97 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: i * 0.1 }}
                      className="bg-white rounded-2xl border border-[#E5EDF8] p-6 hover:border-[#18357a]/30 hover:shadow-lg transition-all flex gap-4"
                    >
                      <div className="w-12 h-12 rounded-xl bg-[#18357a]/8 flex items-center justify-center shrink-0">
                        <lab.icon size={22} className="text-[#18357a]" />
                      </div>
                      <div>
                        <h3 className="font-extrabold text-[#18357a] text-[15px] mb-1.5">{lab.name}</h3>
                        <p className="text-[#64779F] text-[13px] leading-relaxed">{lab.equipment}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            )}

            {/* ── PLACEMENTS ── */}
            {activeTab === 'Placements' && (
              <div>
                <div className="mb-6">
                  <h2 className="text-2xl font-extrabold text-[#18357a] mb-1">Placement Record</h2>
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
                      <p className="text-2xl font-extrabold text-[#ffc107]">{s.value}</p>
                      <p className="text-white/70 text-[12px] font-medium mt-1">{s.label}</p>
                    </div>
                  ))}
                </div>
                {/* Company Logos / Tags */}
                <div className="bg-white rounded-2xl border border-[#E5EDF8] p-6 mb-6">
                  <h3 className="font-extrabold text-[#18357a] mb-4 text-[15px]">Top Recruiting Companies</h3>
                  <div className="flex flex-wrap gap-2.5">
                    {course.companies.map(c => (
                      <span key={c} className="px-4 py-2 rounded-xl bg-[#F8FAFC] border border-[#E5EDF8] text-[#18357a] font-bold text-[13px]">
                        {c}
                      </span>
                    ))}
                  </div>
                </div>
                {/* Projects */}
                <div className="bg-white rounded-2xl border border-[#E5EDF8] p-6">
                  <h3 className="font-extrabold text-[#18357a] mb-4 text-[15px]">Notable Final Year Projects</h3>
                  <div className="space-y-2">
                    {course.projects.map(p => (
                      <div key={p} className="flex items-center gap-3 p-3 rounded-xl bg-[#F8FAFC] border border-[#E5EDF8]">
                        <div className="w-2 h-2 rounded-full bg-[#ffc107] shrink-0" />
                        <span className="text-[14px] font-semibold text-[#18357a]">{p}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* ── ADMISSIONS ── */}
            {activeTab === 'Admissions' && (
              <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                <div className="bg-white rounded-2xl border border-[#E5EDF8] p-6">
                  <h2 className="text-xl font-extrabold text-[#18357a] mb-5 flex items-center gap-2">
                    <CheckCircle size={18} className="text-[#ffc107]" /> Eligibility Criteria
                  </h2>
                  <ul className="space-y-3">
                    {course.eligibility.map(item => (
                      <li key={item} className="flex items-start gap-3 p-3 rounded-xl bg-[#F8FAFC]">
                        <ChevronRight size={15} className="text-[#ffc107] mt-0.5 shrink-0" />
                        <span className="text-[14px] font-semibold text-[#18357a]">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="space-y-4">
                  <div className="bg-[#18357a] rounded-2xl p-6 text-white">
                    <h3 className="font-extrabold text-lg mb-3">Ready to Apply?</h3>
                    <p className="text-white/70 text-[14px] mb-5">Join thousands of students building their future at KIOT.</p>
                    <button
                      onClick={() => navigate('/admissions')}
                      className="w-full flex items-center justify-center gap-2 py-3.5 rounded-xl bg-[#ffc107] text-[#18357a] font-bold hover:bg-[#ffca2c] transition-all"
                    >
                      Start Application <ArrowRight size={15} />
                    </button>
                  </div>
                  <div className="bg-white rounded-2xl border border-[#E5EDF8] p-6">
                    <h3 className="font-extrabold text-[#18357a] mb-3">Need Help?</h3>
                    <p className="text-[#64779F] text-[13px] mb-4">Our admissions team is here to guide you through the process.</p>
                    <a href="tel:9894701234" className="flex items-center gap-2 text-[#18357a] font-bold text-[14px] hover:text-[#ffc107] transition-colors">
                      <MapPin size={15} className="text-[#ffc107]" /> +91 98947 01234
                    </a>
                  </div>
                </div>
              </div>
            )}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  )
}
