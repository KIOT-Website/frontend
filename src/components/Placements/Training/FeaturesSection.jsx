import React from 'react'
import { motion } from 'framer-motion'
import { CheckCircle, Award, Target, Zap, Globe, Languages } from 'lucide-react'

const features = [
  { title: "Aptitude & Logical", desc: "Rigorous daily training in quantitative and verbal reasoning from day one.", icon: Target },
  { title: "Cognizant Soft Skills", desc: "Corporate communication, body language, and professional etiquette mentoring.", icon: Zap },
  { title: "Technical COE Training", desc: "Specialized training through Centers of Excellence like Microsoft, Cisco, and AWS.", icon: Award },
  { title: "Foreign Language Proficiency", desc: "Exclusive Japanese language training for overseas placement opportunities.", icon: Languages },
  { title: "Industry Hackathons", desc: "Real-time problem solving through national level contests and hackathons.", icon: Globe },
  { title: "Mock Interview Drills", desc: "Interview simulations with HR leaders and technical architects.", icon: CheckCircle }
]

const FeaturesSection = () => {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24">
      {features.map((f, i) => (
        <motion.div
           key={i}
           initial={{ opacity: 0, scale: 0.9 }}
           whileInView={{ opacity: 1, scale: 1 }}
           transition={{ delay: i * 0.1 }}
           className="bg-white/60 backdrop-blur-lg p-10 rounded-[3rem] shadow-2xl shadow-[#18357a]/5 border border-white group hover:border-[#18357a]/20 transition-all hover:-translate-y-2"
        >
          <div className="w-14 h-14 rounded-2xl bg-white shadow-lg flex items-center justify-center text-[#18357a] group-hover:scale-110 transition-transform mb-8 border border-[#D5E2F4]/30">
             <f.icon size={26} />
          </div>
          <h3 className="text-2xl font-black text-[#18357a] mb-4 tracking-tight uppercase leading-none">{f.title}</h3>
          <p className="text-[#64779F] text-sm font-semibold leading-relaxed">{f.desc}</p>
        </motion.div>
      ))}
    </div>
  )
}

export default FeaturesSection
