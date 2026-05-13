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
import academicHero from '../../assets/Admissions/academic.png'

const ugPrograms = [
  {
    id: 'be-cse',
    name: 'B.E. Computer Science & Engineering',
    short: 'CSE',
    duration: '4 Years',
    intake: 240,
    category: 'Engineering',
    icon: Cpu,
    color: '#224292',
    accent: '#ffc107',
    placement: '96%',
    description: 'Core computing, algorithms, data structures, and software systems.'
  },
  {
    id: 'btech-it',
    name: 'B.Tech. Information Technology',
    short: 'IT',
    duration: '4 Years',
    intake: 120,
    category: 'Technology',
    icon: BookOpen,
    color: '#224292',
    accent: '#ffc107',
    placement: '94%',
    description: 'Software development, networking, cloud computing, and cyber security.'
  },
  {
    id: 'btech-aids',
    name: 'B.Tech. Artificial Intelligence and Data Science',
    short: 'AI&DS',
    duration: '4 Years',
    intake: 120,
    category: 'Technology',
    icon: FlaskConical,
    color: '#224292',
    accent: '#ffc107',
    placement: '95%',
    description: 'Machine learning, data analytics, and intelligent systems engineering.'
  },
  {
    id: 'btech-csbs',
    name: 'B.Tech. Computer Science and Business Systems',
    short: 'CSBS',
    duration: '4 Years',
    intake: 60,
    category: 'Technology',
    icon: BarChart3,
    color: '#224292',
    accent: '#ffc107',
    placement: '93%',
    description: 'Bridging computer science with business analytics and systems thinking.'
  },
  {
    id: 'be-ece',
    name: 'B.E. Electronics & Communication Engineering',
    short: 'ECE',
    duration: '4 Years',
    intake: 180,
    category: 'Engineering',
    icon: Globe,
    color: '#224292',
    accent: '#ffc107',
    placement: '90%',
    description: 'Electronics, embedded systems, VLSI, and communication technologies.'
  },
  {
    id: 'be-eee',
    name: 'B.E. Electrical & Electronics Engineering',
    short: 'EEE',
    duration: '4 Years',
    intake: 120,
    category: 'Engineering',
    icon: Zap,
    color: '#224292',
    accent: '#ffc107',
    placement: '89%',
    description: 'Power systems, electrical machines, control systems and power electronics.'
  },
  {
    id: 'be-ecm',
    name: 'B.E. Electronics & Computer Engineering',
    short: 'ECX',
    duration: '4 Years',
    intake: 60,
    category: 'Engineering',
    icon: Cpu,
    color: '#224292',
    accent: '#ffc107',
    placement: '90%',
    description: 'Integration of electronics engineering with computer science fundamentals.'
  },
  {
    id: 'be-mechanical',
    name: 'B.E. Mechanical Engineering',
    short: 'MECH',
    duration: '4 Years',
    intake: 120,
    category: 'Engineering',
    icon: Wrench,
    color: '#224292',
    accent: '#ffc107',
    placement: '92%',
    description: 'Design, analysis, and manufacturing of mechanical systems and machines.'
  },
  {
    id: 'be-civil',
    name: 'B.E. Civil Engineering',
    short: 'CIVIL',
    duration: '4 Years',
    intake: 60,
    category: 'Engineering',
    icon: Layers,
    color: '#224292',
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
    name: 'MBA - Innovation, Entrepreneurship and Venture Development',
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
    name: 'M.E. Industrial Safety Engineering',
    short: 'M.E. ISE',
    duration: '2 Years',
    intake: 24,
    category: 'M.E. Engineering',
    icon: ShieldCheck,
    color: '#224292',
    accent: '#ffc107',
    placement: '95%',
    description: 'Specialised program in industrial safety, risk assessment, and management.'
  },
  {
    id: 'me-ae',
    name: 'M.E. Automotive Electronics',
    short: 'M.E. AE',
    duration: '2 Years',
    intake: 18,
    category: 'M.E. Engineering',
    icon: Car,
    color: '#224292',
    accent: '#ffc107',
    placement: '92%',
    description: 'Design and development of electronic systems for the automotive industry.'
  },
  {
    id: 'me-ped',
    name: 'M.E. Power Electronics and Drives',
    short: 'M.E. PED',
    duration: '2 Years',
    intake: 18,
    category: 'M.E. Engineering',
    icon: Zap,
    color: '#224292',
    accent: '#ffc107',
    placement: '91%',
    description: 'Advanced study of power conversion, motor drives, and control systems.'
  },
  {
    id: 'me-se',
    name: 'M.E. Software Engineering',
    short: 'M.E. SE',
    duration: '2 Years',
    intake: 18,
    category: 'M.E. Engineering',
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
    intake: '',
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
    const path = window.location.pathname
    const program = searchParams.get('program') || searchParams.get('type') || 
                    (path.includes('undergraduate') || path.includes('ug-programs') ? 'ug' : 
                     path.includes('postgraduate') || path.includes('pg-programs') ? 'pg' : null)
    
    if (program?.toLowerCase() === 'ug') setProgramTab('UG Programs')
    if (program?.toLowerCase() === 'pg') setProgramTab('PG Programs')

    if (program || path.includes('programs') || path.includes('undergraduate') || path.includes('postgraduate')) {
      window.scrollTo({ top: 0, behavior: 'smooth' })
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
    <div className="min-h-screen bg-[#F8FAFC] font-graphik">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-[#224292] py-10 md:py-14">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0">
          <img 
            src={academicHero} 
            alt="KIOT Academics" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/20" />
        </div>

        {/* Geometric Patterns */}
        <div className="absolute inset-0 opacity-[0.08]" style={{
          backgroundImage: 'radial-gradient(circle at 2px 2px, #ffc107 1px, transparent 0)',
          backgroundSize: '48px 48px'
        }} />
        
        {/* Abstract Floating Circle */}

        <div className="w-full px-6 lg:pl-64 lg:pr-12 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-left max-w-2xl"
          >
            <motion.span 
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 backdrop-blur-md border border-white/10 text-[#ffc107] text-[11px] font-bold tracking-widest uppercase mb-5"
            >
              <GraduationCap size={14} className="animate-bounce" /> Academic Excellence
            </motion.span>
            
            <h1 className="text-xl md:text-3xl lg:text-4xl font-black text-white leading-[1.1] mb-6 tracking-tight">
              {programTab === 'PG Programs' ? 'Driven by Knowledge.' : 'Shape Your Future with'}
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ffc107] via-[#fff1cc] to-[#ffc107] animate-gradient">
                {programTab === 'PG Programs' 
                  ? 'Defined by Excellence.' 
                  : (searchParams.get('program') || searchParams.get('type') 
                      ? (programTab === 'UG Programs' ? 'UG Engineering' : 'PG Specializations') 
                      : 'World-Class Education')}
              </span>
            </h1>

            <div className="flex flex-wrap items-center gap-4 mt-8">
              <motion.button
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => navigate('/admissions')}
                className="group relative inline-flex items-center gap-3 px-8 py-4 rounded-2xl bg-[#ffc107] text-black font-medium font-graphik text-sm uppercase tracking-widest hover:bg-[#ffca2c] transition-all shadow-[0_10px_40px_-10px_rgba(255,193,7,0.4)]"
              >
                Apply Now <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </motion.button>
              
              <motion.button
                whileHover={{ scale: 1.05, bg: "rgba(255,255,255,0.1)" }}
                onClick={() => document.getElementById('academics-content')?.scrollIntoView({ behavior: 'smooth' })}
                className="px-6 py-3 rounded-xl border border-white/20 text-white font-bold text-xs uppercase tracking-widest backdrop-blur-sm transition-all"
              >
                Explore Programs
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>

      <div className="w-full px-6 lg:px-12 py-20" id="academics-content">
        <motion.div
           key="programs"
           initial={{ opacity: 0 }}
           animate={{ opacity: 1 }}
           transition={{ duration: 0.5 }}
        >
          {/* Modern Tab Selector */}
          {(!searchParams.get('program') && !searchParams.get('type') && !window.location.pathname.includes('undergraduate') && !window.location.pathname.includes('postgraduate')) && (
            <div className="flex justify-center mb-16">
              <div className="bg-white p-2 rounded-[2rem] flex gap-2 border border-[#D5E2F4]/50 shadow-2xl shadow-blue-900/5">
                {['UG Programs', 'PG Programs'].map(t => (
                  <button
                    key={t}
                    onClick={() => setProgramTab(t)}
                    className={`px-10 py-4 rounded-[1.5rem] text-sm font-black uppercase tracking-widest transition-all duration-300 ${
                      programTab === t
                        ? 'bg-[#224292] text-white shadow-xl shadow-[#224292]/20 scale-105'
                        : 'text-[#64779F] hover:bg-slate-50 hover:text-[#224292]'
                    }`}
                  >
                    {t}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Modern Row and Column Based (Table) Layout */}
          <div className="max-w-5xl mx-auto bg-transparent md:bg-white rounded-none md:rounded-[2rem] border-none md:border border-[#D5E2F4]/50 shadow-none md:shadow-2xl shadow-blue-900/5 overflow-hidden">
            <div className="px-5 sm:px-8 pt-6 md:pt-10 pb-6 border-b border-slate-50">
                <h2 className="text-xl md:text-2xl font-black text-[#224292] uppercase tracking-normal mb-1">
                   {programTab === 'UG Programs' ? 'B.E. / B.Tech.' : 'Postgraduate'} <span className="block md:inline text-[#ffc107] md:ml-4">Programmes</span>
                </h2>

            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-[#224292] border-b border-[#224292]/10">
                    <th className="px-5 sm:px-8 py-6 text-[10px] font-black text-white uppercase tracking-[0.2em]">Program</th>
                    <th className="px-8 py-6 text-[10px] font-black text-white uppercase tracking-[0.2em] text-center hidden md:table-cell">Category</th>
                    <th className="px-5 sm:px-8 py-6 text-[10px] font-black text-[#ffc107] uppercase tracking-[0.2em] text-center">Intake</th>
                    <th className="px-8 py-6 text-[10px] font-black text-white uppercase tracking-[0.2em] text-right hidden sm:table-cell"></th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-50">
                  {currentPrograms.map((prog, i) => {
                    const inCompare = compareList.find(p => p.id === prog.id)
                    return (
                       <motion.tr
                        key={prog.id}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: i * 0.03 }}
                        className="group hover:bg-[#224292]/[0.02] transition-all cursor-pointer"
                        onClick={() => {
                          const base = programTab === 'UG Programs' ? 'undergraduate' : 'postgraduate'
                          navigate(`/academics/${base}/${prog.id}`)
                        }}
                      >
                        {/* Column 1: Program (Icon + Name) */}
                        <td className="px-5 sm:px-8 py-4">
                          <div className="flex items-center gap-3 sm:gap-4">
                            <div className="w-10 h-10 rounded-xl bg-[#224292]/5 flex items-center justify-center group-hover:bg-[#224292] transition-all duration-300 shrink-0">
                              <prog.icon size={18} className="text-[#224292] group-hover:text-white transition-colors" />
                            </div>
                             <div>
                              <h3 className="text-[#224292] group-hover:text-[#ffc107] text-[12px] sm:text-[13px] font-medium font-graphik leading-tight transition-colors duration-300">
                                 {prog.name}
                               </h3>
                               <p className="text-[#ffc107] group-hover:text-[#224292] text-[10px] font-semibold font-graphik tracking-widest tracking-wider transition-colors duration-300">{prog.short}</p>
                            </div>
                          </div>
                        </td>
 
                        {/* Column 2: Category (Hidden on Mobile) */}
                        <td className="px-8 py-4 text-center hidden md:table-cell">
                          <span className="inline-block whitespace-nowrap px-3 py-1 rounded-full bg-[#224292]/5 text-[#224292] text-[9px] font-black uppercase tracking-widest">
                            {prog.category}
                          </span>
                        </td>

                        {/* Column 3: Intake */}
                        <td className="px-5 sm:px-8 py-4 text-center">
                          {prog.id !== 'phd' && (
                            <>
                               <span className="text-black font-medium font-graphik text-sm text-[13px]">{prog.intake}</span>
                               <span className="ml-1 text-[#224292] font-medium font-graphik text-[10px] tracking-wide uppercase tracking-widest hidden lg:inline font-graphik">Seats</span>
                            </>
                          )}
                        </td>

                        {/* Column 4: Actions (Hidden on Mobile/Small screens) */}
                        <td className="px-8 py-4 hidden sm:table-cell">
                          <div className="flex items-center justify-end gap-3">
                             <button
                                onClick={(e) => { e.stopPropagation(); toggleCompare(prog); }}
                                className={`w-9 h-9 flex items-center justify-center rounded-lg border transition-all ${
                                  inCompare
                                    ? 'bg-[#ffc107] border-[#ffc107] text-[#224292] shadow-md shadow-[#ffc107]/20'
                                    : 'bg-white border-[#E5EDF8] text-[#A9B1C3] hover:border-[#224292]/30 hover:text-[#224292]'
                                }`}
                                title={inCompare ? 'Remove' : 'Compare'}
                              >
                                <BarChart3 size={14} />
                             </button>
                             <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#224292] text-white text-[10px] font-black uppercase tracking-widest hover:bg-[#ffc107] hover:text-[#224292] transition-all transform shadow-md shadow-blue-900/10">
                                View <ArrowRight size={12} className="hidden lg:block" />
                             </div>
                          </div>
                        </td>
                      </motion.tr>
                    )
                  })}
                </tbody>
              </table>
            </div>
          </div>

          {/* Floating Compare Button */}
          {compareList.length > 0 && (
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50 px-6 py-4 rounded-3xl bg-[#224292] text-white shadow-2xl flex items-center gap-6"
            >
              <div className="flex -space-x-3">
                {compareList.map(p => (
                  <div key={p.id} className="w-10 h-10 rounded-full bg-white border-2 border-[#224292] flex items-center justify-center">
                    <p.icon size={16} className="text-[#224292]" />
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
                  className={`px-5 py-2 rounded-xl bg-[#ffc107] text-[#224292] text-xs font-bold transition-all ${
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
              <div className="bg-[#224292] p-6">
                <h2 className="text-white font-extrabold text-xl">Course Comparison</h2>
                <p className="text-white/60 text-sm">Side-by-side comparison to help you choose</p>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="bg-[#F8FAFC] border-b border-[#E5EDF8]">
                      <th className="text-left p-4 text-[#224292] font-medium font-graphik text-[10px] tracking-wide uppercase tracking-wide">Feature</th>
                      {compareList.map(p => (
                        <th key={p.id} className="p-4 text-center">
                          <div className="font-extrabold text-[#224292] text-[14px]">{p.short}</div>
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
                          <td key={p.id} className="p-4 text-center text-[14px] font-semibold text-[#224292]">
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
                  className="px-5 py-2.5 rounded-xl bg-[#224292] text-white font-bold text-[14px] hover:bg-[#1e42a0]"
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
