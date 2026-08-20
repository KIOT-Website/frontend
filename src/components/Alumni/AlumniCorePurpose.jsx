import React from 'react'
import { motion } from 'framer-motion'
import { Handshake, Briefcase, Mic2, Globe, Sparkles } from 'lucide-react'

const purposes = [
  {
    icon: Handshake,
    title: "Strong Connections",
    description: "Bridging alumni and alma mater through active networking, reunions, and enduring bonds.",
    badge: "Community"
  },
  {
    icon: Briefcase,
    title: "Career & Placement",
    description: "Unlocking internships, campus hiring pathways, and direct core industry job referrals.",
    badge: "Opportunities"
  },
  {
    icon: Mic2,
    title: "Student Mentorship",
    description: "Empowering current batches through guest talks, technical workshops, and mock interviews.",
    badge: "Guidance"
  },
  {
    icon: Globe,
    title: "Global Representation",
    description: "Expanding KIOT's global footprint and reputation across international industry chapters.",
    badge: "Outreach"
  }
]

const AlumniCorePurpose = () => {
  return (
    <section className="py-12 md:py-16 bg-white border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        
        {/* Section Heading */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 md:mb-14 gap-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#ffc107]/15 border border-[#ffc107]/30 text-[#18357a] text-xs font-black uppercase tracking-widest mb-3">
              <Sparkles size={13} className="text-[#18357a]" />
              <span>Core Mission</span>
            </div>
            <h3 className="text-3xl md:text-4xl lg:text-5xl font-black text-[#18357a] font-graphik tracking-tight">
              Core Purpose of <span className="text-[#ffc107]">Alumni Association</span>
            </h3>
          </div>
          <p className="text-slate-600 font-medium text-sm md:text-[15px] max-w-sm leading-relaxed">
            Fostering a lifelong bond between the institution and its vibrant global community of achievers.
          </p>
        </div>

        {/* Purpose Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {purposes.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              whileHover={{ y: -6 }}
              className="bg-[#FCFDFD] p-7 rounded-3xl border border-slate-200/80 shadow-lg shadow-slate-900/5 hover:shadow-2xl hover:border-[#18357a]/30 transition-all duration-300 flex flex-col justify-between group relative overflow-hidden"
            >
              {/* Top Corner Decorative Gradient */}
              <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-[#18357a]/5 to-transparent rounded-bl-full pointer-events-none group-hover:from-[#ffc107]/20 transition-all duration-500" />

              <div>
                {/* Header with Icon and Badge */}
                <div className="flex items-center justify-between mb-6">
                  <div className="w-13 h-13 rounded-2xl bg-[#18357a] text-[#ffc107] flex items-center justify-center shadow-md shadow-[#18357a]/20 group-hover:scale-105 transition-transform duration-300">
                    <item.icon size={24} />
                  </div>
                  <span className="text-[10.5px] font-bold uppercase tracking-wider text-slate-500 bg-slate-100 px-2.5 py-1 rounded-full group-hover:bg-[#18357a]/10 group-hover:text-[#18357a] transition-colors">
                    {item.badge}
                  </span>
                </div>
                
                {/* Title & Description */}
                <h4 className="text-lg font-bold text-[#18357a] font-graphik tracking-tight mb-2.5 group-hover:text-[#18357a]">
                  {item.title}
                </h4>
                <p className="text-xs sm:text-[13px] text-slate-600 font-medium leading-relaxed">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  )
}

export default AlumniCorePurpose
