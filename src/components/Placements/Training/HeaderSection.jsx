import React from 'react'
import { motion } from 'framer-motion'
import { Award, GraduationCap, Users, Briefcase, Globe, BarChart, ArrowRight, CheckCircle2 } from 'lucide-react'

const features = [
  { 
    title: "Skill Development", 
    desc: "Industry-oriented training and certifications", 
    icon: GraduationCap 
  },
  { 
    title: "Expert Mentorship", 
    desc: "Guidance from experienced faculty and industry experts", 
    icon: Users 
  },
  { 
    title: "Industry Exposure", 
    desc: "Internships, live projects and workshops", 
    icon: Briefcase 
  },
];

const HeaderSection = () => {
  return (
    <div className="relative pt-12 md:pt-16 pb-20 overflow-hidden bg-white">
      
      <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
        {/* Left Text Content */}
        <motion.div
           initial={{ opacity: 0, x: -50 }}
           whileInView={{ opacity: 1, x: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 0.8 }}
        >

          <h1 className="text-2xl md:text-3xl lg:text-4xl font-extrabold text-[#224292] leading-[1.2] mb-6 tracking-tight">
            Centre for Career Development <br />
            and <span className="text-[#ffc107]">Training (CDT)</span>
          </h1>

          <div className="text-black font-medium leading-relaxed space-y-4 mb-10 max-w-xl text-justify text-sm md:text-base">
            <p>
              The Centre for Career Development and Training (CDT) at Knowledge Institute of Technology is committed to developing students into confident, competent, and industry-ready professionals. With a strong focus on holistic growth, CDT integrates technical, analytical, and life skills into a structured and continuous learning experience.
            </p>
            <p>
              CDT delivers 1200+ hours of intensive training over four years, ensuring that every student is equipped not only for placements but also for lifelong success. The program is carefully designed to balance Employability Skills and Life Skills, creating well-rounded individuals ready to thrive in dynamic professional environments.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {features.map((feature, idx) => (
              <div key={idx} className="flex items-start gap-4 p-4 rounded-2xl bg-white border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
                 <div className="p-3 rounded-xl bg-[#224292]/5 text-[#224292]">
                    <feature.icon size={20} />
                 </div>
                 <div>
                    <h3 className="font-semibold text-[#1A1A1A] text-sm mb-1">{feature.title}</h3>
                    <p className="text-xs text-black font-medium leading-normal">{feature.desc}</p>
                 </div>
              </div>
            ))}
          </div>

        </motion.div>

        {/* Right Image Content */}
        <motion.div
           initial={{ opacity: 0, scale: 0.95 }}
           whileInView={{ opacity: 1, scale: 1 }}
           viewport={{ once: true }}
           transition={{ duration: 0.8 }}
           className="relative"
        >
          <div className="relative rounded-[3rem] overflow-hidden border-8 border-white shadow-2xl">
            <img 
              src="/indian-students-training.webp" 
              alt="CDT Training Session" 
              className="w-full h-[600px] object-cover"
            />
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#224292]/60 via-transparent to-transparent" />
          </div>
        </motion.div>
      </div>


    </div>
  )
}

export default HeaderSection
