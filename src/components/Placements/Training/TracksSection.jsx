import React from 'react'
import { motion } from 'framer-motion'
import { 
  MessageSquare, Brain, Code, Clock, 
  BarChart, Trophy, Star, Target,
  Briefcase, Zap, TrendingUp, Award, ArrowRight
} from 'lucide-react'

const trackData = {
  title: "Employability Track",
  subtitle: "Bridging the gap between academics and industry expectations through structured training and real-world exposure.",
  cards: [
    {
      title: "Communication Skills",
      hours: "300+ Hours",
      icon: MessageSquare,
      color: "#ffc107",
      points: [
        "Mastery of spoken and written English",
        "Business communication and presentation skills",
        "Professional etiquette and confidence building",
        "Group discussions and interview preparation"
      ],
      metric: { value: "90%", label: "Improvement in communication confidence", icon: BarChart }
    },
    {
      title: "Problem-Solving Skills",
      hours: "Intensive",
      icon: Brain,
      color: "#224292",
      points: [
        "Quantitative aptitude, logical reasoning, and data interpretation",
        "Analytical problem-solving for competitive exams and placement tests",
        "Case studies and real-world problem analyses",
        "Decision-making and critical thinking"
      ],
      metric: { value: "85%", label: "Better analytical thinking skills", icon: Trophy }
    },
    {
      title: "Programming Skills",
      hours: "350+ Hours",
      icon: Code,
      color: "#ffc107",
      points: [
        "Strong foundation in programming languages and coding practices",
        "Exposure to problem-solving using C, Python, Java, Data Structures etc.",
        "Hands-on coding exercises aligned with industry needs",
        "Mini projects and coding challenges"
      ],
      metric: { value: "80%", label: "Practical coding proficiency", icon: Star }
    }
  ]
};

const TracksSection = () => {
  return (
    <div className="max-w-7xl mx-auto px-6 mb-12 font-graphik">
      {/* Header Section */}
      <div className="mb-10">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-50 border border-slate-100 mb-4">
           <Briefcase size={14} className="text-[#224292]" />
           <span className="text-[10px] font-bold text-[#224292]">{trackData.badge || "Academic Excellence"}</span>
        </div>
        <h2 className="text-4xl md:text-5xl font-black text-[#224292] tracking-tighter mb-4">
          Employability <span className="text-[#ffc107]">Track</span>
        </h2>
      </div>

      {/* Cards Grid */}
      <div className="grid lg:grid-cols-3 gap-8 mb-16">
        {trackData.cards.map((card, idx) => (
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
                  <div className="w-10 h-10 rounded-xl bg-slate-50 flex items-center justify-center text-[#224292] border border-slate-100/50">
                     <card.icon size={20} strokeWidth={1.5} />
                  </div>
                  <div className="flex items-center gap-1 px-3 py-1 rounded-full bg-[#ffc107] shadow-sm">
                     <Clock size={10} className="text-black" />
                     <span className="text-[9px] font-bold text-black tracking-wider">{card.hours}</span>
                  </div>
               </div>

               <h3 className="text-xl font-black text-[#224292] mb-4 tracking-tight leading-tight">{card.title}</h3>
               
               <div className="space-y-3 mb-6">
                  {card.points.map((point, pIdx) => (
                    <div key={pIdx} className="flex items-start gap-2.5">
                       <ArrowRight size={14} className="mt-0.5 text-[#ffc107] shrink-0" />
                       <p className="text-black font-black text-[13px] leading-snug">{point}</p>
                    </div>
                  ))}
               </div>
            </div>

            {/* Metric Footer - Exact replica of design */}
            <div className="px-6 pb-6 mt-auto">
               <div className="bg-slate-50/80 rounded-xl p-3 border border-slate-100 flex items-center gap-3">
                  <div className="flex-1">
                     <div className="flex items-baseline gap-2">
                        <span className="text-xl font-black text-[#224292] tracking-tighter">{card.metric.value}</span>
                        <div className="w-px h-3 bg-slate-200" />
                        <p className="text-[11px] font-black text-black leading-tight tracking-tight">{card.metric.label}</p>
                     </div>
                  </div>
               </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

export default TracksSection
