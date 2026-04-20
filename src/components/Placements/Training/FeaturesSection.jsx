import React from 'react'
import { motion } from 'framer-motion'
import { CheckCircle, Award, Target, Zap, Globe, Languages, Sparkles, Code } from 'lucide-react'

const categories = [
  {
    title: "Skill Development",
    icon: Sparkles,
    items: [
      { 
        title: "Aptitude & Logical", 
        desc: "Rigorous daily training in quantitative and verbal reasoning from day one.", 
        hint: "Improves placement test performance",
        icon: Target 
      },
      { 
        title: "Soft Skills", 
        desc: "Mentoring in corporate communication, body language, and professional etiquette.", 
        hint: "Boosts confidence in HR interviews",
        icon: Zap 
      },
      { 
        title: "Foreign Language", 
        desc: "Exclusive Japanese language training for overseas placement opportunities.", 
        hint: "Opens global career opportunities",
        icon: Languages 
      }
    ]
  },
  {
    title: "Career Preparation",
    icon: Code,
    items: [
      { 
        title: "Technical COE", 
        desc: "Specialized training through Centers of Excellence like Microsoft, Cisco, and AWS.", 
        hint: "Industry-standard technical expertise",
        icon: Award 
      },
      { 
        title: "Industry Hackathons", 
        desc: "Real-time problem solving through national level contests and industry challenges.", 
        hint: "Enhances solution-building skills",
        icon: Globe 
      },
      { 
        title: "Mock Interview Drills", 
        desc: "Interview simulations with HR leaders and technical architects.", 
        hint: "Prepares for actual recruitment rounds",
        icon: CheckCircle 
      }
    ]
  }
]

const FeaturesSection = () => {
  return (
    <div className="space-y-24 mb-32">
      {categories.map((cat, catIdx) => (
        <div key={catIdx}>
           <div className="flex items-center gap-4 mb-12">
              <div className="w-10 h-10 rounded-xl bg-[#18357a] text-white flex items-center justify-center shadow-lg"><cat.icon size={20} /></div>
              <h2 className="text-2xl font-bold text-black uppercase tracking-tight">{cat.title}</h2>
              <div className="h-px flex-1 bg-slate-200" />
           </div>

           <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {cat.items.map((item, i) => (
                <motion.div
                   key={i}
                   initial={{ opacity: 0, y: 20 }}
                   whileInView={{ opacity: 1, y: 0 }}
                   whileHover={{ y: -8 }}
                   viewport={{ once: true }}
                   transition={{ delay: i * 0.1, duration: 0.5 }}
                   className="bg-white p-8 rounded-2xl border border-slate-100 shadow-xl shadow-black/[0.03] group hover:border-[#18357a]/20 hover:shadow-black/[0.06] transition-all duration-500"
                >
                  <div className="w-16 h-16 rounded-xl bg-slate-50 flex items-center justify-center text-[#18357a] group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 mb-8 border border-slate-100 shadow-sm">
                     <item.icon size={28} strokeWidth={1.5} />
                  </div>
                  
                  <h3 className="text-xl font-bold text-black mb-4 tracking-tight leading-tight">{item.title}</h3>
                  <p className="text-black/60 font-medium text-sm leading-relaxed mb-6">{item.desc}</p>
                  
                  <div className="pt-4 border-t border-slate-50">
                     <div className="flex items-center gap-2 text-[#ffc107]">
                        <CheckCircle size={14} />
                        <span className="text-[11px] font-bold text-black uppercase tracking-wider">{item.hint}</span>
                     </div>
                  </div>
                </motion.div>
              ))}
           </div>
        </div>
      ))}
    </div>
  )
}

export default FeaturesSection
