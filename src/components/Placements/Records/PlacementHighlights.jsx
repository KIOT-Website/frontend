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
      textColor: "text-white",
      cornerColor: "bg-[#224292]"
    },
    {
      label: "TOTAL STUDENTS PLACED",
      value: "1383",
      desc: "Empowering students to build careers.",
      icon: Users,
      color: "#ffc107",
      textColor: "text-[#224292]",
      cornerColor: "bg-[#ffc107]"
    },
    {
      label: "HIGHEST SALARY",
      value: "₹ 12.00 Lakhs",
      desc: "Outstanding packages from organizations.",
      icon: Trophy,
      color: "#224292",
      textColor: "text-white",
      cornerColor: "bg-[#224292]"
    },
    {
      label: "AVERAGE SALARY",
      value: "₹ 4.30 Lakhs",
      desc: "Strong career growth for all students.",
      icon: IndianRupee,
      color: "#ffc107",
      textColor: "text-[#224292]",
      cornerColor: "bg-[#ffc107]"
    }
  ]


  return (
    <section className="py-16 bg-white font-graphik relative overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-[#224292]/5 rounded-full -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute top-20 left-10 opacity-20 hidden lg:block">
        <div className="grid grid-cols-5 gap-2">
          {[...Array(25)].map((_, i) => <div key={i} className="w-1 h-1 bg-[#224292] rounded-full" />)}
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-12">
          <motion.h2 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-3xl lg:text-5xl font-black text-[#224292] tracking-tighter mb-4"
          >
            Driving Careers. <span className="text-[#ffc107]">Delivering Success.</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="max-w-2xl mx-auto text-slate-600 font-bold text-base lg:text-lg leading-relaxed px-4"
          >
            Strong industry connections and career-focused training continue to open doors to exceptional opportunities for our students.
          </motion.p>
        </div>

        {/* Main Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-6 max-w-7xl mx-auto">
          {mainStats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="group relative bg-white rounded-3xl shadow-[0_15px_45px_rgba(34,66,146,0.08)] border border-slate-100 flex flex-col h-full hover:shadow-[0_20px_55px_rgba(34,66,146,0.12)] transition-all duration-500 overflow-hidden"
            >
              <div className="p-8 pb-6 flex flex-col items-center flex-1 relative z-10">
                <div 
                  className="w-14 h-14 rounded-full flex items-center justify-center mb-5 shadow-md transition-transform duration-500 group-hover:scale-110"
                  style={{ backgroundColor: stat.color, color: stat.color === '#ffc107' ? '#224292' : 'white' }}
                >
                  <stat.icon size={24} />
                </div>
                
                <h3 className="text-[10px] font-black text-[#224292] tracking-[0.15em] uppercase mb-3 text-center opacity-80">{stat.label}</h3>
                
                {/* Separator */}
                <div className="w-10 h-0.5 bg-[#ffc107]/30 rounded-full mb-5" />

                <div className="text-2xl lg:text-3xl font-black text-[#224292] tracking-tighter mb-4 text-center">{stat.value}</div>
              </div>

              {/* Card Footer */}
              <div className={`relative ${stat.cornerColor === 'bg-[#ffc107]' ? 'bg-[#ffc107]' : 'bg-[#224292]'} p-4 mt-auto overflow-hidden min-h-[70px] flex items-center justify-center`}>
                <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                <p className={`text-[10px] lg:text-[11px] font-black tracking-widest text-center uppercase leading-tight ${stat.textColor} relative z-10`}>
                  {stat.desc}
                </p>
              </div>

              {/* Decorative Corner Floursish */}
              <div className={`absolute bottom-0 right-0 w-20 h-20 ${stat.cornerColor} opacity-10 rounded-tl-[80px] z-0`} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default PlacementHighlights
