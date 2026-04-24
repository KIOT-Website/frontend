import React from 'react'
import { motion } from 'framer-motion'
import { Handshake, Briefcase, Mic2, Globe } from 'lucide-react'

const purposes = [
  {
    icon: Handshake,
    title: "Strong Connections",
    description: "Bridging alumni and institution"
  },
  {
    icon: Briefcase,
    title: "Career Support",
    description: "Internships, placements, referrals"
  },
  {
    icon: Mic2,
    title: "Mentorship",
    description: "Workshops, talks, guidance"
  },
  {
    icon: Globe,
    title: "Representation",
    description: "Expanding KIOT presence globally"
  }
]

const AlumniCorePurpose = () => {
  return (
    <section className="py-8 md:py-10 bg-[#FCFDFD]">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        
        {/* Section Heading */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-sm font-black text-[#ffc107] uppercase tracking-[0.4em] mb-4">Our Mission</h2>
            <h3 className="text-4xl md:text-5xl font-black text-[#18357a] tracking-tighter leading-none">
              Core Purpose of <br />
              Alumni Association
            </h3>
          </div>
          <p className="text-slate-500 font-medium max-w-sm">
            Fostering a lifelong bond between the institution and its global community of achievers.
          </p>
        </div>

        {/* Purpose Cards Grid - Business Card Style */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {purposes.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="relative aspect-[1.6/1] md:aspect-[1.4/1] rounded-2xl md:rounded-3xl overflow-hidden group shadow-[0_10px_30px_rgba(24,53,122,0.1)] hover:shadow-[0_20px_50px_rgba(24,53,122,0.2)] transition-all duration-500"
            >
              {/* Background Split - Deep Blue and Yellow */}
              <div className="absolute inset-0 bg-[#18357a]" />
              
              {/* The Angled Yellow Accent - inspired by the business card design */}
              <div 
                className="absolute top-0 right-0 w-[55%] h-full bg-[#ffc107] transition-transform duration-700 group-hover:scale-110 group-hover:rotate-2 origin-top-right" 
                style={{ clipPath: 'polygon(30% 0, 100% 0, 100% 100%, 0% 100%)' }}
              />

              {/* Card Content */}
              <div className="relative h-full p-6 md:p-8 flex flex-col justify-between z-10">
                <div className="w-12 h-12 rounded-xl bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white mb-4 group-hover:bg-[#ffc107] group-hover:border-[#18357a]/20 group-hover:text-[#18357a] transition-all duration-500">
                  <item.icon size={24} />
                </div>
                
                <div>
                  <h4 className="text-lg font-black text-white uppercase tracking-tight mb-2">
                    {item.title}
                  </h4>
                  <p className="text-xs md:text-[13px] font-bold text-white uppercase tracking-widest leading-tight">
                    {item.description}
                  </p>
                </div>
              </div>

              {/* Subtle Overlay on Hover */}
              <div className="absolute inset-0 bg-white/0 group-hover:bg-white/5 transition-colors duration-500 pointer-events-none" />
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  )
}

export default AlumniCorePurpose
