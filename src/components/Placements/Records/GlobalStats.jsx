import React from 'react'
import { motion } from 'framer-motion'
import { Trophy, TrendingUp as TrendIcon, Users } from 'lucide-react'

const statsData = [
  { title: "Highest Package", val: "₹18.5 LPA", icon: Trophy, desc: "Outsourcing Technologies, Japan", color: "#ffc107" },
  { title: "Success Rate", val: "95%+", icon: TrendIcon, desc: "Consistent annual excellence", color: "#ffc107" },
  { title: "Global Network", val: "2500+", icon: Users, desc: "Alumni in top multinationals", color: "#18357a" }
];

const GlobalStats = () => {
  return (
    <div className="grid md:grid-cols-3 gap-8 mb-20">
       {statsData.map((stat, i) => (
         <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            viewport={{ once: true }}
            className="bg-white/60 backdrop-blur-lg p-10 rounded-[3rem] shadow-2xl shadow-[#18357a]/5 border border-white group hover:border-[#18357a]/20 transition-all text-center relative overflow-hidden"
         >
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-transparent to-[#18357a]/5 rounded-bl-[5rem]" />
            <div className="w-14 h-14 rounded-2xl bg-white shadow-lg flex items-center justify-center text-[#18357a] group-hover:scale-110 transition-transform mx-auto mb-6 relative z-10 border border-[#D5E2F4]/30">
               <stat.icon size={28} />
            </div>
            <div className="text-4xl font-black text-[#18357a] mb-2 tracking-tight">{stat.val}</div>
            <div className="text-[10px] font-black uppercase tracking-widest mb-4 opacity-50">{stat.title}</div>
            <p className="text-[#64779F] text-xs font-semibold leading-relaxed">{stat.desc}</p>
         </motion.div>
       ))}
    </div>
  )
}

export default GlobalStats
