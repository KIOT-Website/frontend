import React from 'react'
import { motion } from 'framer-motion'
import { Users, Calendar, Award, Sparkles, GraduationCap, Briefcase } from 'lucide-react'

const highlights = [
  {
    icon: Calendar,
    title: "Annual & Decade Meets",
    desc: "Grand reunions bringing batches together to celebrate memories and shared journeys."
  },
  {
    icon: GraduationCap,
    title: "Student Mentorship",
    desc: "Alumni-led induction days, guest lectures, and knowledge-sharing workshops."
  },
  {
    icon: Briefcase,
    title: "Career & Placement Guidance",
    desc: "Mock interviews, project reviews, and direct corporate referral pathways."
  }
]

const AlumniIntro = () => {
  return (
    <section className="py-12 md:py-16 bg-[#FCFDFD] overflow-hidden border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        
        {/* Top Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#18357a]/5 border border-[#18357a]/15 text-[#18357a] text-xs font-black uppercase tracking-widest mb-4"
          >
            <Sparkles size={14} className="text-[#ffc107]" />
            <span>KIOT Alumni Association (AAS)</span>
          </motion.div>

          <motion.h2 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl lg:text-5xl font-black text-[#18357a] tracking-tight font-graphik mb-4"
          >
            Bridging Past Excellence with <span className="text-[#ffc107]">Future Ambition</span>
          </motion.h2>
          <div className="w-16 h-1 bg-[#ffc107] mx-auto rounded-full" />
        </div>

        {/* 2-Column Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Left Narrative Card */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 bg-white p-7 sm:p-9 rounded-3xl border border-slate-200/80 shadow-xl shadow-slate-900/5 relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-[#18357a]/5 to-[#ffc107]/10 rounded-bl-full pointer-events-none" />
            
            <h3 className="text-xl sm:text-2xl font-bold text-[#18357a] mb-4 font-graphik">
              A Lifelong Link Between Graduates & Alma Mater
            </h3>

            <div className="space-y-4 text-slate-700 font-medium text-sm sm:text-[15px] leading-relaxed text-justify">
              <p>
                Representing all KIOT graduates, the institution's active and registered Alumni Association is a vital link between past and present. The KIOT AAS General Body plans activities that ensure this long-term connection thrives through guest lectures, knowledge sharing, and structured student engagement programs.
              </p>
              <p>
                The association regularly hosts initiatives such as Alumni Induction Day, mentoring sessions, and global networking forums. Alumni actively contribute through career guidance, mock interviews, project support, and job referrals via our dedicated portal, accelerating overall institutional and student growth.
              </p>
            </div>
          </motion.div>

          {/* Right Pillar Cards */}
          <div className="lg:col-span-5 space-y-4">
            {highlights.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.15, duration: 0.5 }}
                className="bg-white p-5 sm:p-6 rounded-2xl border border-slate-200/80 shadow-md shadow-slate-900/5 hover:shadow-xl hover:border-[#18357a]/40 transition-all duration-300 flex items-start gap-4 group"
              >
                <div className="w-12 h-12 rounded-xl bg-[#18357a]/5 text-[#18357a] group-hover:bg-[#18357a] group-hover:text-white transition-colors duration-300 flex items-center justify-center shrink-0 shadow-inner">
                  <item.icon size={22} />
                </div>
                <div>
                  <h4 className="text-base font-bold text-[#18357a] mb-1 font-graphik">
                    {item.title}
                  </h4>
                  <p className="text-xs sm:text-[13px] text-slate-600 font-medium leading-snug">
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

        </div>

      </div>
    </section>
  )
}

export default AlumniIntro
