import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useNavigate, useSearchParams } from 'react-router-dom'
import {
  GraduationCap, FlaskConical, Cpu, Wrench, Globe, BarChart3,
  ChevronRight, BookOpen, Users, Award, Microscope, Layers,
  ArrowRight, Scale, CheckCircle, Download, TrendingUp,
  Briefcase, MessageSquare, Star, LayoutGrid, Building2,
  Zap, ShieldCheck, Car
} from 'lucide-react'

const ugPrograms = [
  {
    id: 'be-cse',
    name: 'B.E Computer Science & Engineering',
    short: 'CSE',
    duration: '4 Years',
    intake: 240,
    category: 'Engineering',
    icon: Cpu,
    color: '#18357a',
    accent: '#ffc107',
    placement: '96%',
    description: 'Core computing, algorithms, data structures, and software systems.'
  },
  {
    id: 'be-ece',
    name: 'B.E Electronics & Communication Engineering',
    short: 'ECE',
    duration: '4 Years',
    intake: 180,
    category: 'Engineering',
    icon: Globe,
    color: '#18357a',
    accent: '#ffc107',
    placement: '90%',
    description: 'Electronics, embedded systems, VLSI, and communication technologies.'
  },
  {
    id: 'be-mechanical',
    name: 'B.E Mechanical Engineering',
    short: 'Mechanical',
    duration: '4 Years',
    intake: 120,
    category: 'Engineering',
    icon: Wrench,
    color: '#18357a',
    accent: '#ffc107',
    placement: '92%',
    description: 'Design, analysis, and manufacturing of mechanical systems and machines.'
  },
  {
    id: 'btech-it',
    name: 'B.Tech Information Technology',
    short: 'IT',
    duration: '4 Years',
    intake: 120,
    category: 'Technology',
    icon: BookOpen,
    color: '#18357a',
    accent: '#ffc107',
    placement: '94%',
    description: 'Software development, networking, cloud computing, and cyber security.'
  },
  {
    id: 'btech-aids',
    name: 'B.Tech AI & Data Science',
    short: 'AI & DS',
    duration: '4 Years',
    intake: 120,
    category: 'Technology',
    icon: FlaskConical,
    color: '#18357a',
    accent: '#ffc107',
    placement: '95%',
    description: 'Machine learning, data analytics, and intelligent systems engineering.'
  },
  {
    id: 'be-eee',
    name: 'B.E Electrical & Electronics Engineering',
    short: 'EEE',
    duration: '4 Years',
    intake: 60,
    category: 'Engineering',
    icon: Zap,
    color: '#18357a',
    accent: '#ffc107',
    placement: '89%',
    description: 'Power systems, electrical machines, control systems and power electronics.'
  },
  {
    id: 'btech-csbs',
    name: 'B.Tech CS & Business Systems',
    short: 'CSBS',
    duration: '4 Years',
    intake: 60,
    category: 'Technology',
    icon: BarChart3,
    color: '#18357a',
    accent: '#ffc107',
    placement: '93%',
    description: 'Bridging computer science with business analytics and systems thinking.'
  },
  {
    id: 'be-ecm',
    name: 'B.E Electronics & Computer Engineering',
    short: 'ECM',
    duration: '4 Years',
    intake: 60,
    category: 'Engineering',
    icon: Cpu,
    color: '#18357a',
    accent: '#ffc107',
    placement: '90%',
    description: 'Integration of electronics engineering with computer science fundamentals.'
  },
  {
    id: 'be-civil',
    name: 'B.E Civil Engineering',
    short: 'Civil',
    duration: '4 Years',
    intake: 30,
    category: 'Engineering',
    icon: Layers,
    color: '#18357a',
    accent: '#ffc107',
    placement: '88%',
    description: 'Infrastructure planning, structural design, and sustainable construction.'
  },
]

const pgPrograms = [
  {
    id: 'mba-general',
    name: 'MBA - General',
    short: 'MBA',
    duration: '2 Years',
    intake: 120,
    category: 'Management',
    icon: Award,
    color: '#224292',
    accent: '#ffc107',
    placement: '89%',
    description: 'Finance, Marketing, HR, Business Analytics, and Operations specialsations.'
  },
  {
    id: 'mba-iev',
    name: 'MBA (IEV)',
    short: 'MBA IEV',
    duration: '2 Years',
    intake: 60,
    category: 'Management',
    icon: TrendingUp,
    color: '#224292',
    accent: '#ffc107',
    placement: '90%',
    description: 'Innovation, Entrepreneurship and Venture Development program.'
  },
  {
    id: 'mca',
    name: 'Master of Computer Applications',
    short: 'MCA',
    duration: '2 Years',
    intake: 60,
    category: 'Computer Applications',
    icon: BookOpen,
    color: '#224292',
    accent: '#ffc107',
    placement: '90%',
    description: 'Advanced software development, databases, and enterprise application design.'
  },
  {
    id: 'me-ise',
    name: 'M.E Industrial Safety Engineering',
    short: 'M.E ISE',
    duration: '2 Years',
    intake: 24,
    category: 'M.E Engineering',
    icon: ShieldCheck,
    color: '#224292',
    accent: '#ffc107',
    placement: '95%',
    description: 'Specialised program in industrial safety, risk assessment, and management.'
  },
  {
    id: 'me-ae',
    name: 'M.E Automotive Electronics',
    short: 'M.E AE',
    duration: '2 Years',
    intake: 18,
    category: 'M.E Engineering',
    icon: Car,
    color: '#224292',
    accent: '#ffc107',
    placement: '92%',
    description: 'Design and development of electronic systems for the automotive industry.'
  },
  {
    id: 'me-ped',
    name: 'M.E Power Electronics and Drives',
    short: 'M.E PED',
    duration: '2 Years',
    intake: 18,
    category: 'M.E Engineering',
    icon: Zap,
    color: '#224292',
    accent: '#ffc107',
    placement: '91%',
    description: 'Advanced study of power conversion, motor drives, and control systems.'
  },
  {
    id: 'me-se',
    name: 'M.E Software Engineering',
    short: 'M.E SE',
    duration: '2 Years',
    intake: 18,
    category: 'M.E Engineering',
    icon: Cpu,
    color: '#224292',
    accent: '#ffc107',
    placement: '93%',
    description: 'Systematic approach to software development, quality, and management.'
  },
  {
    id: 'phd',
    name: 'Ph.D. ALL Departments',
    short: 'Ph.D.',
    duration: 'Part-Time / Full Time',
    intake: 'As per Norms',
    category: 'Research',
    icon: Microscope,
    color: '#224292',
    accent: '#ffc107',
    placement: 'N/A',
    description: 'Doctoral research opportunities across all engineering and management departments.'
  },
]

export default function AcademicsPage() {
  const [searchParams] = useSearchParams()
  const [programTab, setProgramTab] = useState('UG Programs')
  const [compareList, setCompareList] = useState([])
  const [showCompare, setShowCompare] = useState(false)
  const navigate = useNavigate()

  useEffect(() => {
    const program = searchParams.get('program') || searchParams.get('type')
    
    if (program?.toLowerCase() === 'ug') setProgramTab('UG Programs')
    if (program?.toLowerCase() === 'pg') setProgramTab('PG Programs')

    if (program) {
      document.getElementById('academics-content')?.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }, [searchParams])

  const toggleCompare = (program) => {
    setCompareList(prev => {
      if (prev.find(p => p.id === program.id)) {
        return prev.filter(p => p.id !== program.id)
      }
      if (prev.length >= 3) return prev
      return [...prev, program]
    })
  }

  const currentPrograms = programTab === 'UG Programs' ? ugPrograms : pgPrograms

  return (
    <div className="min-h-screen bg-[#F8FAFC]" style={{ fontFamily: "'Inter', 'Outfit', sans-serif" }}>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-[#18357a] py-20 md:py-28">
        <div className="absolute inset-0 opacity-10" style={{
          backgroundImage: 'radial-gradient(circle at 20% 50%, #ffc107 1px, transparent 1px), radial-gradient(circle at 80% 20%, #ffc107 1px, transparent 1px)',
          backgroundSize: '60px 60px'
        }} />
        <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full bg-[#ffc107]/5 -translate-y-1/2 translate-x-1/4 pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-center"
          >
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#ffc107]/15 border border-[#ffc107]/30 text-[#ffc107] text-sm font-semibold mb-6">
              <GraduationCap size={15} /> Academics at KIOT
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-6">
              Shape Your Future with<br />
              <span className="text-[#ffc107]">
                {searchParams.get('program') || searchParams.get('type') 
                  ? (programTab === 'UG Programs' ? 'UG Engineering Programs' : 'PG Specialization Programs') 
                  : 'World-Class Education'}
              </span>
            </h1>
            <p className="text-white/70 text-lg md:text-xl max-w-2xl mx-auto mb-10">
              Explore our diverse range of undergraduate and postgraduate programs designed to ignite innovation and career excellence.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <button
                onClick={() => navigate('/admissions')}
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-[#ffc107] text-[#18357a] font-bold text-[15px] hover:bg-[#ffca2c] transition-all hover:scale-105 shadow-lg shadow-[#ffc107]/20"
              >
                Apply Now <ArrowRight size={16} />
              </button>
              <button
                onClick={() => document.getElementById('programs-section')?.scrollIntoView({ behavior: 'smooth' })}
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl border border-white/20 text-white font-semibold text-[15px] hover:bg-white/10 transition-all"
              >
                Explore Programs
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12" id="academics-content">
        <motion.div
           key="programs"
           initial={{ opacity: 0, y: 20 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.4 }}
        >
          {/* Program Type Tabs - Only show if not specifically requested via URL */}
          {(!searchParams.get('program') && !searchParams.get('type')) && (
            <div className="flex gap-3 mb-8 flex-wrap">
              {['UG Programs', 'PG Programs'].map(t => (
                <button
                  key={t}
                  onClick={() => setProgramTab(t)}
                  className={`px-5 py-2.5 rounded-xl text-[14px] font-bold transition-all ${
                    programTab === t
                      ? 'bg-[#18357a] text-white shadow-lg shadow-[#18357a]/20'
                      : 'bg-white text-[#64779F] border border-[#E5EDF8] hover:border-[#18357a]/30 hover:text-[#18357a]'
                  }`}
                >
                  {t}
                </button>
              ))}
            </div>
          )}

          {/* Program Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {currentPrograms.map((prog, i) => {
              const inCompare = compareList.find(p => p.id === prog.id)
              return (
                <motion.div
                  key={prog.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.07 }}
                  className="group bg-white rounded-2xl border border-[#E5EDF8] hover:border-[#18357a]/30 hover:shadow-xl hover:shadow-[#18357a]/8 transition-all duration-300 overflow-hidden flex flex-col"
                >
                  {/* Card Top */}
                  <div className="relative p-6 pb-4">
                    <div className="flex items-start justify-between mb-4">
                      <span className="inline-block px-3 py-1 rounded-lg bg-[#18357a]/8 text-[#18357a] text-xs font-bold">
                        {prog.category}
                      </span>
                      <span className="inline-flex items-center gap-1 text-xs font-bold text-emerald-600 bg-emerald-50 px-2.5 py-1 rounded-lg">
                        <CheckCircle size={11} /> {prog.placement} Placed
                      </span>
                    </div>
                    <div 
                      className="flex items-center gap-4 mb-3 cursor-pointer group/title"
                      onClick={() => navigate(`/academics/course/${prog.id}`)}
                    >
                      <div className="w-12 h-12 rounded-xl bg-[#18357a]/8 flex items-center justify-center shrink-0 group-hover/title:bg-[#18357a] transition-colors">
                        <prog.icon size={22} className="text-[#18357a] group-hover/title:text-white transition-colors" />
                      </div>
                      <h3 className="text-[16px] font-extrabold text-[#18357a] leading-tight group-hover/title:text-[#ffc107] transition-colors">
                        {prog.name}
                      </h3>
                    </div>
                    <p className="text-sm text-[#64779F] leading-relaxed">{prog.description}</p>
                  </div>

                  {/* Divider */}
                  <div className="h-px bg-[#E5EDF8] mx-6" />

                  {/* Meta Details */}
                  <div className="px-6 py-4 flex gap-6">
                    <div>
                      <p className="text-[11px] text-[#A9B1C3] font-semibold uppercase tracking-wide">Duration</p>
                      <p className="text-[14px] font-bold text-[#18357a]">{prog.duration}</p>
                    </div>
                    <div>
                      <p className="text-[11px] text-[#A9B1C3] font-semibold uppercase tracking-wide">Intake</p>
                      <p className="text-[14px] font-bold text-[#18357a]">{prog.intake} Seats</p>
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="px-6 pb-6 mt-auto flex gap-2">
                    <button
                      onClick={() => navigate(`/academics/course/${prog.id}`)}
                      className="flex-1 flex items-center justify-center gap-2 py-2.5 rounded-xl bg-[#18357a] text-white text-[13px] font-bold hover:bg-[#1e42a0] transition-all"
                    >
                      View Details & Faculty <ChevronRight size={14} />
                    </button>
                    <button
                      onClick={() => toggleCompare(prog)}
                      className={`w-11 h-11 flex items-center justify-center rounded-xl border transition-all ${
                        inCompare
                          ? 'bg-[#ffc107]/10 border-[#ffc107] text-[#18357a]'
                          : 'bg-white border-[#E5EDF8] text-[#A9B1C3] hover:border-[#18357a]/30 hover:text-[#18357a]'
                      }`}
                      title={inCompare ? 'Remove from Compare' : 'Add to Compare'}
                    >
                      <BarChart3 size={18} />
                    </button>
                  </div>
                </motion.div>
              )
            })}
          </div>

          {/* Floating Compare Button */}
          {compareList.length > 0 && (
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50 px-6 py-4 rounded-3xl bg-[#18357a] text-white shadow-2xl flex items-center gap-6"
            >
              <div className="flex -space-x-3">
                {compareList.map(p => (
                  <div key={p.id} className="w-10 h-10 rounded-full bg-white border-2 border-[#18357a] flex items-center justify-center">
                    <p.icon size={16} className="text-[#18357a]" />
                  </div>
                ))}
              </div>
              <p className="text-sm font-bold">{compareList.length} Courses Selected</p>
              <div className="flex gap-2">
                <button
                  onClick={() => setCompareList([])}
                  className="px-4 py-2 rounded-xl bg-white/10 hover:bg-white/20 text-xs font-bold transition-all"
                >
                  Clear
                </button>
                <button
                  disabled={compareList.length < 2}
                  onClick={() => setShowCompare(true)}
                  className={`px-5 py-2 rounded-xl bg-[#ffc107] text-[#18357a] text-xs font-bold transition-all ${
                    compareList.length < 2 ? 'opacity-50 cursor-not-allowed' : 'hover:scale-105'
                  }`}
                >
                  Compare Now
                </button>
              </div>
            </motion.div>
          )}
        </motion.div>
      </div>

      {/* Compare Modal */}
      <AnimatePresence>
        {showCompare && compareList.length >= 2 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[200] bg-black/50 backdrop-blur-sm flex items-center justify-center p-4"
            onClick={() => setShowCompare(false)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={e => e.stopPropagation()}
              className="bg-white rounded-3xl shadow-2xl max-w-4xl w-full overflow-hidden"
            >
              <div className="bg-[#18357a] p-6">
                <h2 className="text-white font-extrabold text-xl">Course Comparison</h2>
                <p className="text-white/60 text-sm">Side-by-side comparison to help you choose</p>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="bg-[#F8FAFC] border-b border-[#E5EDF8]">
                      <th className="text-left p-4 text-[#64779F] font-bold text-[13px] uppercase tracking-wide">Feature</th>
                      {compareList.map(p => (
                        <th key={p.id} className="p-4 text-center">
                          <div className="font-extrabold text-[#18357a] text-[14px]">{p.short}</div>
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-[#E5EDF8]">
                    {[
                      { label: 'Full Name', key: 'name' },
                      { label: 'Duration', key: 'duration' },
                      { label: 'Intake', key: 'intake', suffix: ' Seats' },
                      { label: 'Category', key: 'category' },
                      { label: 'Placement', key: 'placement' },
                    ].map(row => (
                      <tr key={row.label} className="hover:bg-[#F8FAFC]">
                        <td className="p-4 text-[13px] font-bold text-[#64779F]">{row.label}</td>
                        {compareList.map(p => (
                          <td key={p.id} className="p-4 text-center text-[14px] font-semibold text-[#18357a]">
                            {p[row.key]}{row.suffix || ''}
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <div className="p-6 flex justify-end gap-3">
                <button
                  onClick={() => { setShowCompare(false); setCompareList([]); }}
                  className="px-5 py-2.5 rounded-xl border border-[#E5EDF8] text-[#64779F] font-bold text-[14px] hover:bg-[#F8FAFC]"
                >
                  Close
                </button>
                <button
                  onClick={() => navigate('/admissions')}
                  className="px-5 py-2.5 rounded-xl bg-[#18357a] text-white font-bold text-[14px] hover:bg-[#1e42a0]"
                >
                  Apply Now
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
