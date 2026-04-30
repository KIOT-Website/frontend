import React from 'react'
import { motion } from 'framer-motion'
import { TrendingUp, Users, Award, Target, Sparkles, ArrowUpRight, GraduationCap } from 'lucide-react'

const stats = [
  {
    label: "Total Offers Generated",
    value: "5000+",
    icon: Award,
    color: "#224292",
    desc: "Cumulative placement offers across all disciplines."
  },
  {
    label: "Multiple Offers",
    value: "1200+",
    icon: Sparkles,
    color: "#ffc107",
    desc: "Students receiving more than two job offers."
  },
  {
    label: "Highest Package",
    value: "25 LPA",
    icon: TrendingUp,
    color: "#224292",
    desc: "The record-breaking CTC offered this session."
  },
  {
    label: "Unique Placements",
    value: "3800+",
    icon: Users,
    color: "#ffc107",
    desc: "Successful individual student career transitions."
  }
]

const OutcomesHero = () => {
  return (
    <div className="relative py-20 overflow-hidden font-graphik bg-[#F8FAFC]">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-[#224292]/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-[-10%] left-[-5%] w-[400px] h-[400px] bg-[#ffc107]/5 rounded-full blur-[100px]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header Section */}
        <div className="flex flex-col items-center text-center mb-20">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white border border-slate-100 shadow-sm mb-8"
          >
            <GraduationCap size={16} className="text-[#224292]" />
            <span className="text-[11px] font-black text-[#224292] uppercase tracking-[0.2em]">Placement Outcomes</span>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-7xl font-black text-[#224292] tracking-tighter mb-6 leading-[0.95]"
          >
            Defining Success <br/>Through <span className="text-[#ffc107]">Excellence.</span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="max-w-2xl text-black font-black text-lg md:text-xl opacity-90 leading-relaxed mb-8"
          >
            Our consistent placement records reflect the quality of education and the rigorous industry-readiness training provided to our students.
          </motion.p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 + idx * 0.1 }}
              whileHover={{ y: -10 }}
              className="bg-white p-10 rounded-[2.5rem] border border-slate-100 shadow-[0_20px_50px_rgba(0,0,0,0.03)] group hover:border-[#ffc107]/30 transition-all duration-500 relative overflow-hidden"
            >
              {/* Top Accent */}
              <div className="absolute top-0 left-0 w-full h-1.5" style={{ backgroundColor: stat.color }} />
              
              <div className="relative z-10 flex flex-col items-center text-center">
                <div className="w-16 h-16 rounded-2xl bg-slate-50 flex items-center justify-center mb-8 border border-slate-100 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500" style={{ color: stat.color }}>
                  <stat.icon size={32} />
                </div>

                <div className="space-y-1 mb-6">
                  <h3 className="text-4xl md:text-5xl font-black text-[#224292] tracking-tighter leading-none">{stat.value}</h3>
                  <p className="text-[12px] font-black text-black uppercase tracking-widest">{stat.label}</p>
                </div>

                <div className="w-8 h-1 bg-slate-100 mb-6 rounded-full group-hover:w-16 group-hover:bg-[#ffc107] transition-all duration-500" />
                
                <p className="text-[13px] font-black text-black leading-relaxed opacity-80">
                  {stat.desc}
                </p>
              </div>

              {/* Subtle background icon */}
              <stat.icon className="absolute -bottom-8 -right-8 w-32 h-32 opacity-[0.02] -rotate-12 group-hover:opacity-[0.05] group-hover:scale-110 transition-all duration-700" style={{ color: stat.color }} />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default OutcomesHero
