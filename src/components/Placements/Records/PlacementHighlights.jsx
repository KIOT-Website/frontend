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
              className="group relative bg-white rounded-[2rem] shadow-[0_15px_40px_rgba(34,66,146,0.05)] border border-slate-50 flex flex-col items-center p-7 py-9 min-h-[240px] justify-center text-center overflow-hidden hover:shadow-[0_20px_50px_rgba(34,66,146,0.08)] transition-all duration-500"
            >
              {/* Icon Circle */}
              <div 
                className="w-14 h-14 rounded-full flex items-center justify-center mb-5 shadow-sm transition-transform duration-500 group-hover:scale-110"
                style={{ backgroundColor: stat.color === '#ffc107' ? '#ffc107' : '#224292', color: stat.color === '#ffc107' ? '#224292' : 'white' }}
              >
                <stat.icon size={24} />
              </div>

              {/* Label */}
              <h3 className="text-[10px] font-black text-[#224292] tracking-[0.15em] uppercase mb-2 opacity-90">{stat.label}</h3>
              
              {/* Thin Yellow Separator Line */}
              <div className="w-8 h-[2px] bg-[#ffc107] mb-4" />

              {/* Value */}
              <div className="text-2xl lg:text-3xl font-black text-[#224292] tracking-tighter leading-tight">
                {stat.value.split(' ').map((part, idx) => (
                  <span key={idx} className={idx > 0 ? "block text-sm lg:text-base mt-1" : ""}>{part} </span>
                ))}
              </div>

              {/* Decorative Corner Flourish */}
              <div className={`absolute bottom-0 right-0 w-16 h-16 ${stat.cornerColor} rounded-tl-[60px] transition-transform duration-500 group-hover:scale-110`} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default PlacementHighlights
