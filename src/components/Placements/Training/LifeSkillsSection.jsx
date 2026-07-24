import React from 'react'
import { motion } from 'framer-motion'
import { 
  Zap, ShieldCheck, Users, Lightbulb, Wallet, 
  Clock, Award, CheckCircle2, TrendingUp, Target, BarChart, Heart, Trophy, Briefcase, ArrowRight
} from 'lucide-react'

const lifeSkills = [
  {
    title: "Soft Skills for Life",
    hours: "30 Hours",
    icon: Zap,
    color: "#ffc107",
    desc: "Building confidence, adaptability, and professional etiquette."
  },
  {
    title: "Values & Ethics",
    hours: "40 Hours",
    icon: ShieldCheck,
    color: "#224292",
    desc: "Instilling integrity, responsibility, and ethical decision-making."
  },
  {
    title: "Interpersonal Skills",
    hours: "30 Hours",
    icon: Users,
    color: "#ffc107",
    desc: "Enhancing teamwork, relationship-building, and communication in diverse environments."
  },
  {
    title: "Leadership & Entrepreneurial Skills",
    hours: "60 Hours",
    icon: Lightbulb,
    color: "#224292",
    desc: "Developing leadership mindset and innovation-driven thinking."
  },
  {
    title: "Personal Finance Planning",
    hours: "20 Hours",
    icon: Wallet,
    color: "#ffc107",
    desc: "Educating students on financial literacy and responsible money management."
  }
];

const benefits = [
  { title: "Industry-ready skills from day one", icon: Briefcase },
  { title: "Better opportunities with top recruiters", icon: Zap },
  { title: "Higher confidence and career growth", icon: TrendingUp },
  { title: "Stronger foundation for lifelong success", icon: Award }
];

const LifeSkillsSection = () => {
  return (
    <div className="max-w-7xl mx-auto px-6 mb-12 font-graphik">
      {/* Header Section */}
      <div className="mb-8">
        <h2 className="text-4xl md:text-5xl font-black text-[#224292] tracking-tighter mb-4">
          Life Skills <span className="text-[#ffc107]">Track</span>
        </h2>
        <p className="max-w-3xl text-black font-bold text-[15px] leading-relaxed mb-6">
          This track nurtures personal growth, emotional intelligence, and leadership qualities essential for long-term success.
        </p>
      </div>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
        {lifeSkills.map((card, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.05 }}
            className={`bg-white rounded-2xl border border-slate-100 shadow-xl shadow-slate-200/50 overflow-hidden flex flex-col hover:border-[#ffc107]/40 transition-all duration-500 ${idx >= 3 ? 'lg:translate-x-[50%]' : ''} ${idx >= 3 ? 'lg:max-w-[calc(100%-24px)]' : ''}`}
          >
            {/* Top accent line */}
            <div className="h-1.5 w-full" style={{ backgroundColor: card.color }} />

            <div className="p-5 flex-1">
               <div className="flex items-center justify-between mb-4">
                  <div className="w-9 h-9 rounded-xl bg-slate-50 flex items-center justify-center text-[#224292] border border-slate-100/50">
                     <card.icon size={18} strokeWidth={2} />
                  </div>
                  <div className="flex items-center gap-1 px-2 py-0.5 rounded-full bg-[#ffc107] shadow-sm">
                     <Clock size={10} className="text-black" />
                     <span className="text-[9px] font-black text-black tracking-wider">{card.hours}</span>
                  </div>
               </div>

               <h3 className="text-[17px] font-black text-[#224292] mb-3 tracking-tight leading-tight">{card.title}</h3>
               <p className="text-[12.5px] font-bold text-black leading-snug tracking-tight text-justify">
                  {card.desc}
               </p>
            </div>
          </motion.div>
        ))}
      </div>

    </div>
  )
}

export default LifeSkillsSection
