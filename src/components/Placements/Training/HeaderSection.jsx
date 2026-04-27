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
  { 
    title: "Placement Support", 
    desc: "Dedicated training and 100% placement assistance", 
    icon: BarChart 
  }
];

const stats = [
  { label: "Recruiters", value: "200+", icon: Users },
  { label: "Placement Assistance", value: "100%", icon: GraduationCap },
  { label: "Students Placed", value: "5000+", icon: Award },
  { label: "Highest Package", value: "25 LPA", icon: BarChart }
];

const HeaderSection = () => {
  return (
    <div className="max-w-[1440px] mx-auto px-6 lg:px-12 py-4">
      <div className="grid lg:grid-cols-2 gap-16 items-center mb-6">
        {/* Left Content */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#18357a]/5 border border-[#18357a]/10 mb-8">
            <Award size={16} className="text-[#18357a]" />
            <span className="text-[11px] font-bold text-[#18357a] uppercase tracking-wider">Our Commitment</span>
          </div>

          <h1 className="text-5xl md:text-6xl font-black text-[#0A1A3F] leading-[1.1] tracking-tighter mb-8 font-graphik">
            Shaping Competent<br />
            <span className="text-[#ffc107]">Professionals</span>
          </h1>

          <p className="text-black font-bold text-lg leading-relaxed mb-12 max-w-xl text-justify font-graphik">
            At KIOT, we go beyond academics to build industry-ready professionals. Through continuous training, mentorship, and real-world exposure, we empower students to succeed in their careers.
          </p>

          <div className="grid sm:grid-cols-2 gap-x-8 gap-y-10 mb-12">
            {features.map((f, i) => (
              <div key={i} className="flex gap-4">
                <div className="w-12 h-12 rounded-full bg-[#0A1A3F] flex items-center justify-center shrink-0 shadow-lg">
                  <f.icon size={22} className="text-white" />
                </div>
                <div>
                  <h4 className="text-[15px] font-black text-[#0A1A3F] mb-1 font-graphik">{f.title}</h4>
                  <p className="text-[12px] font-black text-black leading-tight font-graphik">{f.desc}</p>
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
              src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=2070&auto=format&fit=crop" 
              alt="Successful Students" 
              className="w-full h-[600px] object-cover"
            />
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#0A1A3F]/60 via-transparent to-transparent" />
            
            {/* Floating Slogan */}
            <div className="absolute top-12 right-12 text-right">
               <div className="space-y-1">
                 <p className="text-2xl font-black text-white/90 drop-shadow-md">Building Skills.</p>
                 <p className="text-2xl font-black text-white/90 drop-shadow-md">Building Futures.</p>
                 <p className="text-3xl font-black text-[#ffc107] drop-shadow-md">Building Success.</p>
               </div>
            </div>

            {/* Placement Badge Overlay */}
            <div className="absolute bottom-12 right-12">
               <div className="relative w-48 h-48 bg-white/90 backdrop-blur-md rounded-full border-[10px] border-[#0A1A3F]/5 flex flex-col items-center justify-center p-6 text-center shadow-2xl overflow-hidden group">
                  <div className="absolute inset-0 border-[3px] border-dashed border-[#ffc107]/20 rounded-full animate-spin-slow" />
                  <div className="relative z-10">
                    <p className="text-4xl font-black text-[#0A1A3F] mb-1 tracking-tighter">91%</p>
                    <p className="text-[10px] font-black text-[#0A1A3F] uppercase leading-tight tracking-widest mb-4">Placement<br/>Success Rate</p>
                    <div className="w-10 h-0.5 bg-[#ffc107] mx-auto mb-3" />
                    <p className="text-[8px] font-black text-slate-500 uppercase tracking-widest leading-tight">Strong Connections.<br/>Bright Careers.</p>
                  </div>
               </div>
            </div>

            {/* Decorative Yellow Arrow/Path Line (Simplified) */}
            <div className="absolute bottom-20 left-0 w-full px-12 pointer-events-none opacity-40">
               <svg viewBox="0 0 500 100" className="w-full h-auto text-[#ffc107] fill-none">
                  <path d="M0 80 Q 150 70 250 50 T 500 20" stroke="currentColor" strokeWidth="4" strokeDasharray="12 8" />
               </svg>
            </div>
          </div>
        </motion.div>
      </div>


    </div>
  )
}

export default HeaderSection
