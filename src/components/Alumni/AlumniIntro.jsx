import React from 'react'
import { motion } from 'framer-motion'
import posterImg from '../../assets/main/testi_alumni.webp'

const AlumniIntro = () => {
  return (
    <section className="py-12 md:py-20 bg-white overflow-hidden border-b border-slate-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        
        {/* Centered Heading */}
        <div className="text-center mb-16">
          <h2 className="text-sm font-black text-[#ffc107] uppercase tracking-[0.4em] mb-4">The Association</h2>
          <h3 className="text-4xl lg:text-5xl font-black text-[#18357a] tracking-tighter">What is Alumni @ KIOT</h3>
          <div className="mt-4 w-12 h-1.5 bg-[#ffc107] mx-auto rounded-full" />
        </div>

        {/* Full-Width Detailed Content */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-5xl mx-auto space-y-10"
        >
          <div className="space-y-8">
            <p className="text-base md:text-xl text-black font-graphik leading-relaxed font-medium text-justify">
              The KIOT Alumni Association, established in 2013, fosters a strong and lasting connection between the institution and its graduates. It serves as a platform to build meaningful relationships, support student growth, and strengthen the institution’s community. Through mentorship, workshops, guest lectures, and placement support, alumni actively contribute to shaping current students into industry-ready professionals while representing KIOT across diverse sectors.
            </p>
            <p className="text-base md:text-xl text-black font-graphik leading-relaxed font-medium text-justify">
              The association regularly organizes initiatives such as Alumni Induction Day, the annual meet “Convergencia,” mentoring sessions, and networking activities. Alumni also contribute through career guidance, mock interviews, project support, and job referrals, while engaging via the dedicated alumni portal. With continuous interaction, feedback, and collaborative efforts, the alumni network plays a vital role in enhancing learning, opportunities, and overall institutional development.
            </p>
          </div>
          
          <div className="pt-8 flex justify-center">
             <div className="w-32 h-[1px] bg-[#18357a]/20" />
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default AlumniIntro
