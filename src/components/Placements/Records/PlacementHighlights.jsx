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
      desc: "Empowering students to build successful careers.",
      icon: Users,
      color: "#ffc107",
      textColor: "text-[#224292]",
      cornerColor: "bg-[#ffc107]"
    },
    {
      label: "HIGHEST SALARY",
      value: "₹ 12.00 Lakhs",
      desc: "Outstanding packages from leading organizations.",
      icon: Trophy,
      color: "#224292",
      textColor: "text-white",
      cornerColor: "bg-[#224292]"
    }
  ]


  return (
    <section className="py-20 bg-white font-graphik relative overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-[#224292]/5 rounded-full -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute top-20 left-10 opacity-20 hidden lg:block">
        <div className="grid grid-cols-5 gap-2">
          {[...Array(25)].map((_, i) => <div key={i} className="w-1 h-1 bg-[#224292] rounded-full" />)}
        </div>
      </div>
      <div className="absolute top-20 right-10 opacity-20 hidden lg:block">
        <div className="grid grid-cols-5 gap-2">
          {[...Array(25)].map((_, i) => <div key={i} className="w-1 h-1 bg-[#224292] rounded-full" />)}
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
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
            Strong industry connections and career-focused training continue to open doors to exceptional opportunities for our students.
          </motion.p>
        </div>

        {/* Main Cards Grid */}
        <div className="grid md:grid-cols-3 gap-8 lg:gap-10 max-w-6xl mx-auto">
          {mainStats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="group relative bg-white rounded-3xl shadow-[0_25px_60px_rgba(34,66,146,0.08)] border border-slate-100 flex flex-col h-full hover:shadow-[0_30px_70px_rgba(34,66,146,0.12)] transition-all duration-500"
            >
              <div className="p-10 flex flex-col items-center flex-1 relative z-10">
                <div 
                  className="w-16 h-16 rounded-full flex items-center justify-center mb-6 shadow-lg transition-transform duration-500 group-hover:scale-110"
                  style={{ backgroundColor: stat.color, color: stat.color === '#ffc107' ? '#224292' : 'white' }}
                >
                  <stat.icon size={28} />
                </div>
                
                <h3 className="text-[12px] font-black text-[#224292] tracking-[0.2em] uppercase mb-4 text-center opacity-80">{stat.label}</h3>
                
                {/* Separator */}
                <div className="w-12 h-1 bg-[#ffc107]/20 rounded-full mb-6" />

                <div className="text-4xl lg:text-5xl font-black text-[#224292] tracking-tighter mb-4">{stat.value}</div>
              </div>

              {/* Card Footer */}
              <div className={`relative ${stat.cornerColor === 'bg-[#ffc107]' ? 'bg-[#ffc107]' : 'bg-[#224292]'} p-6 mt-auto overflow-hidden`}>
                <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                <p className={`text-[11px] lg:text-[12px] font-black tracking-widest text-center uppercase leading-tight ${stat.textColor} relative z-10`}>
                  {stat.desc}
                </p>
              </div>

              {/* Decorative Corner Floursish */}
              <div className={`absolute bottom-0 right-0 w-24 h-24 ${stat.cornerColor} opacity-10 rounded-tl-[100px] z-0`} />
              <div className={`absolute top-0 left-0 w-16 h-16 ${stat.cornerColor} opacity-5 rounded-br-full z-0`} />
            </motion.div>
          ))}
        </div>
      </div>

      {/* Large background decorative wave/shape */}
      <div className="absolute -bottom-24 -right-24 w-[600px] h-[600px] bg-[#224292]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -top-24 -left-24 w-[400px] h-[400px] bg-[#ffc107]/5 rounded-full blur-3xl pointer-events-none" />
    </section>
  )
}

export default PlacementHighlights
