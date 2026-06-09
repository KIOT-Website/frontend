import React from 'react'
import { motion } from 'framer-motion'
import { Building2, Users, Trophy, IndianRupee, TrendingUp, Briefcase, Star, Sparkles } from 'lucide-react'

const PlacementHighlights = () => {
  const mainStats = [
    {
      label: "COMPANIES VISITED",
      value: "150+",
      desc: "Top recruiters across diverse industries.",
      icon: Building2,
      color: "#224292",
      cornerColor: "bg-[#224292]"
    },
    {
      label: "TOTAL STUDENTS PLACED",
      value: "1383",
      desc: "Empowering students to build careers.",
      icon: Users,
      color: "#ffc107",
      cornerColor: "bg-[#ffc107]"
    },
    {
      label: "HIGHEST SALARY",
      value: "₹ 12.00 Lakhs",
      desc: "Outstanding packages from organizations.",
      icon: Trophy,
      color: "#224292",
      cornerColor: "bg-[#224292]"
    },
    {
      label: "AVERAGE SALARY",
      value: "₹ 4.30 Lakhs",
      desc: "Strong career growth for all students.",
      icon: IndianRupee,
      color: "#ffc107",
      cornerColor: "bg-[#ffc107]"
    }
  ]


  return (
    <section className="py-12 bg-white font-graphik relative overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute top-10 left-10 opacity-10">
        <div className="grid grid-cols-5 gap-2">
          {[...Array(25)].map((_, i) => <div key={i} className="w-1 h-1 bg-[#224292] rounded-full" />)}
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-10">
          <motion.h2 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-3xl lg:text-4xl font-black text-[#224292] tracking-tighter mb-4"
          >
            Driving Careers. <span className="text-[#ffc107]">Delivering Success.</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="max-w-2xl mx-auto text-slate-600 font-bold text-base leading-relaxed"
          >
            Strong industry connections and career-focused training continue to open doors to exceptional opportunities.
          </motion.p>
        </div>

        {/* Main Cards Grid - Modern Premium Design */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 max-w-7xl mx-auto">
          {mainStats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group relative bg-white rounded-2xl sm:rounded-3xl border border-slate-100 flex flex-col p-4 sm:p-6 min-h-[190px] sm:min-h-[220px] justify-between transition-all duration-300 hover:border-slate-200 hover:-translate-y-1.5 shadow-md shadow-slate-100/50 hover:shadow-xl hover:shadow-blue-900/5 overflow-hidden"
            >
              {/* Top/Left Color Accent Line */}
              <div className="absolute top-0 left-0 right-0 h-1.5 transition-all duration-300" style={{ backgroundColor: stat.color }} />
              
              {/* Decorative subtle background gradient */}
              <div 
                className="absolute -top-10 -left-10 w-32 h-32 rounded-full blur-3xl opacity-5 group-hover:opacity-10 transition-opacity duration-500 pointer-events-none" 
                style={{ backgroundColor: stat.color }} 
              />

              <div className="flex flex-col items-start w-full">
                {/* Icon Container */}
                <div className="flex items-center justify-between w-full mb-3 sm:mb-5">
                  <div 
                    className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl flex items-center justify-center shadow-md transform transition-transform duration-500 group-hover:scale-105"
                    style={{ 
                      backgroundColor: stat.color === '#ffc107' ? '#fffbeb' : '#f0f3fa', 
                      color: stat.color 
                    }}
                  >
                    <stat.icon className="w-5 h-5 sm:w-6 sm:h-6 stroke-[2.5]" />
                  </div>
                  {/* Subtle Accent Mark */}
                  <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: stat.color }} />
                </div>

                {/* Label */}
                <h3 className="text-[8px] sm:text-[10px] font-black text-slate-400 tracking-[0.12em] uppercase mb-2">
                  {stat.label}
                </h3>
                
                {/* Value */}
                <div 
                  className="text-base sm:text-2xl lg:text-3xl font-black tracking-tight leading-none mb-3 font-graphik"
                  style={{ color: '#224292' }}
                >
                  {stat.value}
                </div>
              </div>

              {/* Description */}
              <p className="text-slate-500 text-[10px] sm:text-[11px] font-semibold leading-relaxed text-left border-t border-slate-100 pt-3 mt-1 font-graphik">
                {stat.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default PlacementHighlights
