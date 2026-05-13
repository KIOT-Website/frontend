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
      footerBg: "bg-[#224292]"
    },
    {
      label: "TOTAL STUDENTS PLACED",
      value: "1383",
      desc: "Empowering students to build successful careers.",
      icon: Users,
      color: "#ffc107",
      footerBg: "bg-[#ffc107]"
    },
    {
      label: "HIGHEST SALARY",
      value: "₹ 12.00 Lakhs",
      desc: "Outstanding packages from leading organizations.",
      icon: Trophy,
      color: "#224292",
      footerBg: "bg-[#224292]"
    }
  ]


  return (
    <section className="py-12 bg-[#F8FAFC] font-graphik relative overflow-hidden">
      {/* Background Decorative Dots */}
      <div className="absolute top-10 left-10 opacity-20 hidden lg:block">
        <div className="grid grid-cols-5 gap-2">
          {[...Array(25)].map((_, i) => <div key={i} className="w-1 h-1 bg-[#224292] rounded-full" />)}
        </div>
      </div>
      <div className="absolute top-10 right-10 opacity-20 hidden lg:block">
        <div className="grid grid-cols-5 gap-2">
          {[...Array(25)].map((_, i) => <div key={i} className="w-1 h-1 bg-[#224292] rounded-full" />)}
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6 lg:px-12 relative z-10">
        {/* Header */}
        <div className="text-center mb-10">
          <motion.h2 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-4xl font-bold text-[#224292] tracking-tighter mb-4"
          >
            Driving Careers. <span className="text-[#ffc107]">Delivering Success.</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="max-w-xl mx-auto text-black font-medium text-base leading-relaxed"
          >
            Strong industry connections and career-focused training continue to open doors to exceptional opportunities for our students.
          </motion.p>
        </div>

        {/* Main Cards Grid */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {mainStats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="bg-white rounded-[1.5rem] overflow-hidden shadow-[0_15px_40px_rgba(0,0,0,0.04)] border border-slate-100 flex flex-col"
            >
              <div className="p-6 md:p-8 flex flex-col items-center flex-1">
                <div 
                  className="w-12 h-12 rounded-full flex items-center justify-center mb-5 shadow-md"
                  style={{ backgroundColor: stat.color, color: stat.color === '#ffc107' ? '#224292' : 'white' }}
                >
                  <stat.icon size={24} />
                </div>
                <h3 className="text-[10px] font-bold text-[#224292] tracking-widest uppercase mb-3 text-center">{stat.label}</h3>
                <div className="text-3xl md:text-4xl font-bold text-[#224292] tracking-tighter mb-3">{stat.value}</div>
              </div>
              <div className={`${stat.footerBg} px-6 py-4 text-center`}>
                <p className="text-sm font-semibold tracking-tight text-white uppercase">
                  {stat.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>


      </div>
    </section>
  )
}

export default PlacementHighlights
