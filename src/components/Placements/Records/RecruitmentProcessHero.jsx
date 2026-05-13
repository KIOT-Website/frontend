import React from 'react'
import { motion } from 'framer-motion'
import { 
  UserPlus, FileSearch, ClipboardCheck, Users2, CheckCircle2, 
  Sparkles, Building2, GraduationCap, Trophy, Briefcase
} from 'lucide-react'

const steps = [
  {
    number: 1,
    title: "Registration",
    desc: "Students register and create their profiles.",
    icon: UserPlus,
    color: "#224292"
  },
  {
    number: 2,
    title: "Profile Screening",
    desc: "Resumes are screened by our placement team.",
    icon: FileSearch,
    color: "#ffc107"
  },
  {
    number: 3,
    title: "Assessments",
    desc: "Aptitude, technical & psychometric tests to evaluate skills.",
    icon: ClipboardCheck,
    color: "#224292"
  },
  {
    number: 4,
    title: "Interviews",
    desc: "Technical and HR interviews with recruitment partners.",
    icon: Users2,
    color: "#ffc107"
  },
  {
    number: 5,
    title: "Offer & Onboarding",
    desc: "Technical extended and students begin their career journey.",
    icon: CheckCircle2,
    color: "#224292"
  }
]

const stats = [
  { label: "Recruiters On Campus", value: "500+", icon: Building2, color: "#224292" },
  { label: "Offers Extended", value: "1000+", icon: GraduationCap, color: "#ffc107" },
  { label: "Placement Success Rate", value: "95%", icon: Trophy, color: "#224292" },
  { label: "Highest Package Offered", value: "25 LPA", icon: Briefcase, color: "#ffc107" }
]

const RecruitmentProcessHero = () => {
  return (
    <div className="relative py-20 bg-white overflow-hidden font-graphik">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
        
        {/* Top Layout Grid */}
        <div className="grid lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Header + Steps + Features */}
          <div className="lg:col-span-7 flex flex-col pt-4">
            {/* Badge */}
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-[#224292]/5 border border-[#224292]/10 mb-8 self-start"
            >
              <Sparkles size={14} className="text-[#224292]" />
              <span className="text-[10px] font-black text-[#224292] uppercase tracking-[0.3em]">Placement Ecosystem</span>
            </motion.div>

            {/* Header */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
            >
              <h1 className="text-3xl md:text-4xl lg:text-[40px] font-semibold text-[#224292] tracking-tighter leading-tight mb-8">
                Recruitment <span className="text-[#ffc107]">Process</span>
              </h1>
              <div className="w-16 h-1.5 bg-[#ffc107] mb-8 rounded-full" />
              <p className="max-w-2xl text-black font-medium text-lg md:text-xl leading-relaxed mb-16">
                A precision-engineered journey transforming academic potential into professional excellence, step by step.
              </p>
            </motion.div>

            {/* Steps Flow */}
            <div className="relative mb-24">
              {/* Connecting Dotted Line */}
              <div className="absolute top-12 left-10 right-10 h-px border-t-2 border-dashed border-slate-200 -z-0 hidden md:block" />
              
              <div className="grid grid-cols-2 md:grid-cols-5 gap-10 relative z-10">
                {steps.map((step, idx) => (
                  <motion.div 
                    key={idx}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 + idx * 0.1 }}
                    className="flex flex-col items-center text-center group"
                  >
                    {/* Number & Icon Circle */}
                    <div className="relative mb-8">
                      <div className="absolute -top-2 -left-2 w-6 h-6 rounded-full bg-[#224292] text-white text-[10px] font-black flex items-center justify-center z-10 shadow-lg">
                        {step.number}
                      </div>
                      <div className="w-20 h-20 md:w-22 md:h-22 rounded-full bg-slate-50 flex items-center justify-center border-2 border-slate-100 group-hover:border-[#ffc107]/50 group-hover:bg-white group-hover:scale-110 transition-all duration-500 shadow-sm" style={{ color: step.color }}>
                        <step.icon size={28} />
                      </div>
                    </div>
                    
                    <h3 className="text-lg font-semibold text-[#224292] mb-3 tracking-tight leading-tight">{step.title}</h3>
                    <p className="text-[14px] font-medium text-black leading-snug tracking-tight px-1">
                      {step.desc}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Image + Stats */}
          <div className="lg:col-span-5 flex flex-col gap-8 lg:sticky lg:top-32">
            
            {/* Main Image with Overlay */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="relative rounded-[3rem] overflow-hidden shadow-2xl group"
            >
              <img 
                src="/students_placements_discussion.webp" 
                alt="Placement Training" 
                className="w-full h-[500px] object-cover group-hover:scale-105 transition-transform duration-1000"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#224292]/40 to-transparent" />
              
              {/* Image Overlay Card */}
              <div className="absolute bottom-8 left-8 right-8">
                <motion.div 
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.5 }}
                  className="bg-white/95 backdrop-blur-md rounded-2xl p-6 border border-white/20 shadow-2xl flex items-center gap-6"
                >
                  <div className="w-14 h-14 rounded-full bg-[#224292] flex items-center justify-center text-[#ffc107] shadow-lg">
                    <Users2 size={24} />
                  </div>
                  <div>
                    <p className="text-[10px] font-semibold text-[#224292] uppercase tracking-[0.3em] mb-1">Recruitment Cycle</p>
                    <h4 className="text-xl font-semibold text-[#224292] tracking-tighter uppercase">Step-by-step flow</h4>
                  </div>
                </motion.div>
              </div>
            </motion.div>

            {/* Stats Grid Footer (Right side below image) */}
            <div className="bg-white rounded-[2.5rem] border border-slate-100 shadow-[0_20px_50px_rgba(0,0,0,0.03)] p-8 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-2 xl:grid-cols-4 gap-6">
              {stats.map((stat, idx) => (
                <div key={idx} className="flex flex-col items-center text-center group">
                  <div className="w-10 h-10 rounded-xl bg-slate-50 flex items-center justify-center mb-4 border border-slate-100 group-hover:bg-white group-hover:scale-110 transition-all duration-500 shadow-sm" style={{ color: stat.color }}>
                    <stat.icon size={18} />
                  </div>
                  <div className="space-y-1">
                    <p className="text-2xl font-semibold text-[#224292] tracking-tighter leading-none">{stat.value}</p>
                    <p className="text-[9px] font-semibold text-black uppercase tracking-widest leading-tight">{stat.label}</p>
                  </div>
                </div>
              ))}
            </div>

          </div>

        </div>
      </div>
    </div>
  )
}

export default RecruitmentProcessHero
