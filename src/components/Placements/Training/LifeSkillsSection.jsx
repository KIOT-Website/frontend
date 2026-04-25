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
    points: [
      "Self-confidence, adaptability, and emotional intelligence",
      "Positive mindset and stress management techniques"
    ],
    metric: { value: "95%", label: "Better adaptability in corporate teams", icon: Award }
  },
  {
    title: "Values & Ethics",
    hours: "40 Hours",
    icon: ShieldCheck,
    color: "#18357a",
    points: [
      "Awareness of professional ethics and workplace discipline",
      "Instilling honesty, responsibility, and social commitment"
    ],
    metric: { value: "100%", label: "Awareness of professional conduct", icon: CheckCircle2 }
  },
  {
    title: "Interpersonal Skills",
    hours: "30 Hours",
    icon: Users,
    color: "#ffc107",
    points: [
      "Building strong relationships and teamwork skills",
      "Conflict resolution and empathy in communication"
    ],
    metric: { value: "88%", label: "Improvement in conflict resolution", icon: TrendingUp }
  },
  {
    title: "Entrepreneurial Skills",
    hours: "60 Hours",
    icon: Lightbulb,
    color: "#18357a",
    points: [
      "Developing initiative, decision-making, and leadership qualities",
      "Exposure to entrepreneurial thinking, innovation, and management practices"
    ],
    metric: { value: "75%", label: "Develop leadership qualities", icon: Target }
  },
  {
    title: "Personal Finance Planning",
    hours: "20 Hours",
    icon: Wallet,
    color: "#ffc107",
    points: [
      "Basics of savings, investments, and financial literacy",
      "Building financial discipline for long-term stability"
    ],
    metric: { value: "92%", label: "Gain financial literacy basics", icon: BarChart }
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
      <div className="mb-10">
        <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-slate-50 border border-slate-100 mb-6">
           <Heart size={14} className="text-[#18357a]" />
           <span className="text-[10px] font-bold text-[#18357a]">Personal Excellence</span>
        </div>
        <h2 className="text-4xl md:text-5xl font-black text-[#0A1A3F] tracking-tighter mb-4">
          Life Skills <span className="text-[#ffc107]">Track</span>
        </h2>
        <div className="w-16 h-1 bg-[#ffc107] mb-6 rounded-full" />
      </div>

      {/* Cards Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
        {lifeSkills.map((card, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1 }}
            className="bg-white rounded-2xl border border-slate-100 shadow-[0_20px_60px_rgba(24,53,122,0.04)] overflow-hidden flex flex-col h-full hover:border-[#ffc107]/20 transition-all duration-500"
          >
            {/* Top accent line */}
            <div className="h-1.5 w-full" style={{ backgroundColor: card.color }} />

            <div className="p-6 pb-2 flex-1">
               <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 rounded-xl bg-slate-50 flex items-center justify-center text-[#18357a] border border-slate-100/50">
                     <card.icon size={20} strokeWidth={1.5} />
                  </div>
                  <div className="flex items-center gap-1 px-3 py-1 rounded-full bg-[#ffc107] shadow-sm">
                     <Clock size={10} className="text-black" />
                     <span className="text-[9px] font-bold text-black tracking-wider">{card.hours}</span>
                  </div>
               </div>

               <h3 className="text-xl font-black text-[#0A1A3F] mb-4 tracking-tight leading-tight">{card.title}</h3>
               
               <div className="space-y-3 mb-6">
                  {card.points.map((point, pIdx) => (
                    <div key={pIdx} className="flex items-start gap-2.5">
                       <ArrowRight size={14} className="mt-0.5 text-[#ffc107] shrink-0" />
                       <p className="text-black font-black text-[13px] leading-snug">{point}</p>
                    </div>
                  ))}
               </div>
            </div>

            {/* Metric Footer */}
            <div className="px-6 pb-6 mt-auto">
               <div className="bg-slate-50/80 rounded-xl p-3 border border-slate-100 flex items-center gap-3">
                  <div className="flex-1">
                     <div className="flex items-baseline gap-2">
                        <span className="text-xl font-black text-[#0A1A3F] tracking-tighter">{card.metric.value}</span>
                        <div className="w-px h-3 bg-slate-200" />
                        <p className="text-[11px] font-black text-black leading-tight tracking-tight">{card.metric.label}</p>
                     </div>
                  </div>
               </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Why It Matters Bar - Moved here and styled with larger font and black icons/text */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="bg-white rounded-[2.5rem] border border-slate-100 shadow-[0_40px_120px_rgba(24,53,122,0.08)] p-8 lg:p-6"
      >
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-center">
           <div className="lg:col-span-1 flex items-center gap-5 px-6 border-r border-slate-100">
              <div className="w-14 h-14 rounded-2xl bg-[#ffc107] flex items-center justify-center text-[#18357a] shrink-0 shadow-lg shadow-[#ffc107]/20">
                 <Trophy size={28} />
              </div>
              <div>
                 <h4 className="text-lg font-black text-black font-graphik leading-tight">Why It<br/>Matters</h4>
              </div>
           </div>

           <div className="lg:col-span-4 grid sm:grid-cols-2 xl:grid-cols-4 gap-6 px-4">
              {benefits.map((benefit, i) => (
                <div key={i} className="flex items-center gap-4 group">
                   <div className="w-10 h-10 rounded-xl bg-slate-50 flex items-center justify-center text-black shrink-0 border border-slate-100 group-hover:bg-[#18357a] group-hover:text-white transition-all duration-300">
                      <benefit.icon size={20} />
                   </div>
                   <p className="text-sm font-black text-black leading-snug font-graphik">{benefit.title}</p>
                </div>
              ))}
           </div>
        </div>
      </motion.div>
    </div>
  )
}

export default LifeSkillsSection
