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
    <section className="py-20 bg-white font-graphik relative overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute top-20 left-10 opacity-10">
        <div className="grid grid-cols-5 gap-2">
          {[...Array(25)].map((_, i) => <div key={i} className="w-1 h-1 bg-[#224292] rounded-full" />)}
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-3xl lg:text-5xl font-black text-[#224292] tracking-tighter mb-6"
          >
            Driving Careers. <span className="text-[#ffc107]">Delivering Success.</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="max-w-2xl mx-auto text-slate-600 font-bold text-lg leading-relaxed"
          >
            Strong industry connections and career-focused training continue to open doors to exceptional opportunities.
          </motion.p>
        </div>

        {/* Main Cards Grid - Square-ish design */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {mainStats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="group relative bg-white rounded-[2.5rem] shadow-[0_20px_50px_rgba(34,66,146,0.06)] border border-slate-50 flex flex-col items-center p-8 aspect-square justify-center text-center overflow-hidden hover:shadow-[0_25px_60px_rgba(34,66,146,0.1)] transition-all duration-500"
            >
              {/* Icon Circle */}
              <div 
                className="w-16 h-16 rounded-full flex items-center justify-center mb-6 shadow-sm transition-transform duration-500 group-hover:scale-110"
                style={{ backgroundColor: stat.color === '#ffc107' ? '#ffc107' : '#224292', color: stat.color === '#ffc107' ? '#224292' : 'white' }}
              >
                <stat.icon size={28} />
              </div>

              {/* Label */}
              <h3 className="text-[10px] font-black text-[#224292] tracking-[0.2em] uppercase mb-3 opacity-90">{stat.label}</h3>
              
              {/* Thin Yellow Separator Line */}
              <div className="w-10 h-[2px] bg-[#ffc107] mb-6" />

              {/* Value */}
              <div className="text-3xl lg:text-4xl font-black text-[#224292] tracking-tighter mb-2 leading-tight">
                {stat.value.split(' ').map((part, idx) => (
                  <span key={idx} className={idx > 0 ? "block text-lg lg:text-xl" : ""}>{part} </span>
                ))}
              </div>

              {/* Decorative Corner Flourish (Match Screenshot) */}
              <div className={`absolute bottom-0 right-0 w-20 h-20 ${stat.cornerColor} rounded-tl-[80px] transition-transform duration-500 group-hover:scale-110`} />
              
              {/* Floating decorative elements for premium feel */}
              <div className="absolute top-6 right-6 opacity-10">
                <div className="grid grid-cols-3 gap-1">
                  {[...Array(9)].map((_, i) => <div key={i} className="w-0.5 h-0.5 bg-[#224292] rounded-full" />)}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Decorative Wave-like path in background */}
      <svg className="absolute bottom-0 right-0 w-full h-auto z-0 pointer-events-none opacity-10" viewBox="0 0 1440 320" fill="none">
        <path d="M0,160L48,176C96,192,192,224,288,213.3C384,203,480,149,576,149.3C672,149,768,203,864,229.3C960,256,1056,256,1152,229.3C1248,203,1344,149,1392,122.7L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z" fill="#224292" />
      </svg>
    </section>
  )
}

export default PlacementHighlights
