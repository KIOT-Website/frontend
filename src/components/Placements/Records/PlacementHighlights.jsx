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

        {/* Main Cards Grid - Compact Rectangular Design */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {mainStats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="group relative bg-white rounded-2xl border border-slate-100 flex flex-col items-center p-6 py-7 min-h-[170px] justify-center text-center overflow-hidden transition-all duration-300 hover:border-slate-200 hover:-translate-y-1.5 shadow-md shadow-black/10 hover:shadow-xl hover:shadow-black/15"
            >
              {/* Top Accent Bar */}
              <div className="absolute top-0 left-0 right-0 h-1 transition-all duration-300" style={{ backgroundColor: stat.color }} />

              {/* Icon Circle */}
              <div 
                className="w-11 h-11 rounded-full flex items-center justify-center mb-3.5 shadow-sm transition-transform duration-500 group-hover:scale-110"
                style={{ backgroundColor: stat.color === '#ffc107' ? '#ffc107' : '#224292', color: stat.color === '#ffc107' ? '#224292' : 'white' }}
              >
                <stat.icon size={18} />
              </div>

              {/* Label */}
              <h3 className="text-[9px] font-black text-[#224292] tracking-[0.15em] uppercase mb-2 opacity-90">{stat.label}</h3>
              
              {/* Thin Yellow Separator Line */}
              <div className="w-6 h-[1.5px] bg-[#ffc107] mb-3" />

              {/* Value */}
              <div className="text-xl lg:text-2xl font-black text-[#224292] tracking-tighter leading-tight">
                {stat.value.split(' ').map((part, idx) => (
                  <span key={idx} className={idx > 0 ? "block text-xs lg:text-sm mt-0.5" : ""}>{part} </span>
                ))}
              </div>

              {/* Soft Radial Background Glow */}
              <div 
                className="absolute -bottom-10 -right-10 w-24 h-24 rounded-full blur-2xl opacity-0 group-hover:opacity-20 transition-opacity duration-500 pointer-events-none" 
                style={{ backgroundColor: stat.color }} 
              />

              {/* Unique Corner Ring Outlines */}
              <div 
                className="absolute -bottom-6 -right-6 w-16 h-16 rounded-full border border-dashed opacity-10 group-hover:opacity-25 group-hover:scale-105 group-hover:rotate-45 transition-all duration-700 pointer-events-none" 
                style={{ borderColor: stat.color }} 
              />
              <div 
                className="absolute -bottom-10 -right-10 w-20 h-20 rounded-full border opacity-5 group-hover:opacity-15 group-hover:scale-110 group-hover:-rotate-45 transition-all duration-700 pointer-events-none" 
                style={{ borderColor: stat.color }} 
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default PlacementHighlights
