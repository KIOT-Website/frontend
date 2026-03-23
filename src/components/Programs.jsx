import { motion } from 'framer-motion'
import { 
  GraduationCap, Layers, 
  Settings, Radio, Zap, Monitor, Building2, Globe, Briefcase, Brain, Cpu,
  ShieldCheck, CircuitBoard, CarFront, Code, TrendingUp, AppWindow, Rocket, FileCode2,
  ArrowRight
} from 'lucide-react'

const programsData = [
  {
    id: 'UG',
    title: 'Undergraduate',
    subtitle: 'B.E. / B.Tech Programmes',
    description: 'Foundation for technical brilliance and engineering innovation.',
    courses: [
      { name: "B.E. Mechanical Engineering", icon: Settings },
      { name: "B.E. Electronics and Communication", icon: Radio },
      { name: "B.E. Electrical and Electronics", icon: Zap },
      { name: "B.E. Computer Science and Engineering", icon: Monitor },
      { name: "B.E. Civil Engineering", icon: Building2 },
      { name: "B.Tech Information Technology", icon: Globe },
      { name: "B.Tech Computer Science & Business", icon: Briefcase },
      { name: "B.Tech AI and Data Science", icon: Brain },
      { name: "B.E. Electronics and Computer Eng.", icon: Cpu }
    ],
    theme: 'bg-white',
    accent: '#ffc107'
  },
  {
    id: 'PG',
    title: 'Postgraduate',
    subtitle: 'M.E. / MBA / MCA Programmes',
    description: 'Advanced specialization and leadership in technology & management.',
    courses: [
      { name: "M.E. Industrial Safety Engineering", icon: ShieldCheck },
      { name: "M.E. VLSI Design", icon: CircuitBoard },
      { name: "M.E. Automotive Electronics", icon: CarFront },
      { name: "M.E. Embedded System Tech.", icon: Cpu },
      { name: "M.E. Computer Science and Eng.", icon: Code },
      { name: "Master of Business (MBA)", icon: TrendingUp },
      { name: "MCA - Computer Applications", icon: AppWindow },
      { name: "MBA in Innovation & Entrepreneurship", icon: Rocket },
      { name: "M.E. Software Engineering", icon: FileCode2 }
    ],
    theme: 'bg-[#18357a]',
    accent: '#ffc107'
  }
]

const Programs = () => {
  return (
    <section id="academics" className="relative py-12 lg:py-20 bg-[#F8FAFC]">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        
        {/* Header Content */}
        <div className="flex flex-col md:flex-row items-center md:items-end justify-between gap-6 mb-12 lg:mb-16">
          <div className="max-w-2xl text-center md:text-left">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 mb-4 bg-[#18357a]/5 px-3 py-1 rounded-full border border-[#18357a]/10"
            >
              <div className="h-1 w-4 bg-[#ffc107] rounded-full" />
              <span className="text-[10px] font-black uppercase tracking-[0.2em] text-[#18357a]">Academic Excellence</span>
            </motion.div>
            <h2 className="text-3xl lg:text-5xl font-black text-[#18357a] font-display leading-[1.1]">
              Diverse <span className="text-[#ffc107]">Programmes</span> <br />
              Tailored for Success
            </h2>
          </div>
          <p className="text-[#64779F] max-w-sm text-sm lg:text-base font-medium opacity-80 leading-relaxed text-center md:text-right">
            Choose from our industry-aligned undergraduate and postgraduate courses designed to bridge the gap between academia and career.
          </p>
        </div>

        {/* New Grid Layout */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-10">
          {programsData.map((prog, idx) => (
            <motion.div
              key={prog.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.2 }}
              className={`relative rounded-[40px] p-8 lg:p-12 overflow-hidden shadow-2xl border ${
                prog.id === 'UG' 
                ? 'bg-white border-white' 
                : 'bg-[#18357a] border-[#1e3a8a] text-white'
              }`}
            >
              {/* Background abstract element */}
              <div className={`absolute top-0 right-0 w-64 h-64 rounded-full blur-[100px] pointer-events-none ${
                prog.id === 'UG' ? 'bg-[#ffc107]/10' : 'bg-white/5'
              }`} />

              <div className="relative z-10 flex flex-col h-full">
                <div className="flex items-center gap-4 mb-8">
                  <div className={`w-14 h-14 rounded-2xl flex items-center justify-center shadow-lg ${
                    prog.id === 'UG' ? 'bg-[#18357a] text-[#ffc107]' : 'bg-[#ffc107] text-[#18357a]'
                  }`}>
                    {prog.id === 'UG' ? <GraduationCap size={28} /> : <Layers size={28} />}
                  </div>
                  <div>
                    <h3 className={`text-2xl lg:text-3xl font-black font-display leading-none mb-2 ${
                      prog.id === 'UG' ? 'text-[#18357a]' : 'text-white'
                    }`}>
                      {prog.title}
                    </h3>
                    <p className={`text-[10px] font-black uppercase tracking-[0.2em] ${
                      prog.id === 'UG' ? 'text-[#ffc107]' : 'text-[#ffc107]'
                    }`}>
                      {prog.subtitle}
                    </p>
                  </div>
                </div>

                <p className={`text-sm lg:text-base font-medium mb-10 opacity-70 leading-relaxed ${
                  prog.id === 'UG' ? 'text-[#64779F]' : 'text-white/70'
                }`}>
                  {prog.description}
                </p>

                {/* Course List */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-4 mb-10">
                  {prog.courses.map((course) => (
                    <div key={course.name} className="flex items-start gap-3 group cursor-pointer">
                      <div className={`mt-1 h-1.5 w-1.5 rounded-full shrink-0 group-hover:scale-150 transition-transform ${
                        prog.id === 'UG' ? 'bg-[#18357a]/20 group-hover:bg-[#ffc107]' : 'bg-white/20 group-hover:bg-[#ffc107]'
                      }`} />
                      <span className={`text-[13px] lg:text-[14px] font-bold leading-tight transition-colors ${
                        prog.id === 'UG' 
                        ? 'text-[#64779F] group-hover:text-[#18357a]' 
                        : 'text-white/60 group-hover:text-[#ffc107]'
                      }`}>
                        {course.name}
                      </span>
                    </div>
                  ))}
                </div>

                {/* View Details CTA */}
                <div className="mt-auto">
                    <button className={`inline-flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.2em] group transition-all ${
                      prog.id === 'UG' ? 'text-[#18357a]' : 'text-[#ffc107]'
                    }`}>
                      View Programme Details
                      <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                    </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  )
}

export default Programs
