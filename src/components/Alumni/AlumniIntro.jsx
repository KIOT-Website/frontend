import React from 'react'
import { motion } from 'framer-motion'

const AlumniIntro = () => {
  return (
    <section className="py-8 md:py-12 bg-white overflow-hidden border-b border-slate-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        
        {/* Centered Heading */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-[#224292] tracking-tight uppercase font-graphik">
            ALUMNI ASSOCIATION (KIOT AAS)
          </h2>
          <div className="mt-4 w-16 h-1.5 bg-[#ffc107] mx-auto rounded-full" />
        </div>

        {/* Full-Width Detailed Content */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-5xl mx-auto space-y-8 text-center"
        >
          <div className="space-y-6">
            <p className="text-sm md:text-[15.5px] text-[#333333] font-graphik leading-relaxed font-normal text-justify md:text-center max-w-4xl mx-auto">
              Representing all KIOT graduates, the institution's active and registered Alumni Association is a vital link between past and present. The KIOT AAS General Body plans activities that ensure this long-term connection thrives. Alumni actively support current students through guest lectures, knowledge sharing, and various programs and services organized by the association, which also hosts annual Alumni Meets, Decade Meets, and an Annual Meet.
            </p>
            <p className="text-sm md:text-[15.5px] text-[#333333] font-graphik leading-relaxed font-normal text-justify md:text-center max-w-4xl mx-auto">
              The association regularly organizes initiatives such as Alumni Induction Day, mentoring sessions, and networking activities. Alumni also contribute through career guidance, mock interviews, project support, and job referrals, while engaging via the dedicated alumni portal. With continuous interaction, feedback, and collaborative efforts, the alumni network plays a vital role in enhancing learning, opportunities, and overall institutional development.
            </p>
          </div>
          
          <div className="pt-6 flex justify-center">
             <div className="w-32 h-[1px] bg-[#224292]/20" />
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default AlumniIntro
