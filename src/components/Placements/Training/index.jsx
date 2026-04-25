import React from 'react'
import HeaderSection from './HeaderSection'
import TracksSection from './TracksSection'
import LifeSkillsSection from './LifeSkillsSection'
import TrainingTeamSection from './TrainingTeamSection'
import { motion } from 'framer-motion'
import { Sparkles, BookOpen, Monitor, Briefcase, Trophy, Library, Code2, Building2, Users } from 'lucide-react'

const roadmap = [
  { 
    year: "Year 1", 
    title: "Foundation Skills", 
    icon: BookOpen,
    bottomIcon: Library,
    color: "#18357a",
    points: [
      "Aptitude & Logical Reasoning",
      "Communication Skills",
      "Language Fundamentals",
      "Personal Development"
    ]
  },
  { 
    year: "Year 2", 
    title: "Advanced Training", 
    icon: Monitor,
    bottomIcon: Code2,
    color: "#ffc107",
    points: [
      "Technical Core Subjects",
      "Quantitative & Analytical Skills",
      "Problem-Solving Techniques",
      "Project-Based Learning"
    ]
  },
  { 
    year: "Year 3", 
    title: "Industry Exposure", 
    icon: Briefcase,
    bottomIcon: Building2,
    color: "#18357a",
    points: [
      "Internships & Live Projects",
      "Workshops & Hackathons",
      "Industry Certifications",
      "Expert Interactions"
    ]
  },
  { 
    year: "Final Year", 
    title: "Placement Readiness", 
    icon: Trophy,
    bottomIcon: Users,
    color: "#ffc107",
    points: [
      "Resume & Profile Building",
      "Mock Interviews",
      "HR Mentoring & Guidance",
      "Final Placements"
    ]
  }
]

const TrainingFlow = () => {
  return (
    <div className="mb-24">
       {/* Header */}
       <div className="flex flex-col items-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#18357a]/5 border border-[#18357a]/10 mb-6">
             <div className="w-6 h-6 rounded-full bg-[#18357a] flex items-center justify-center text-white">
                <Sparkles size={12} />
             </div>
             <span className="text-[10px] font-black text-[#18357a] uppercase tracking-widest">Training Roadmap</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-[#0A1A3F] tracking-tighter text-center mb-4 leading-tight">
             Student Success <span className="text-[#ffc107]">Journey</span>
          </h2>
          <div className="w-16 h-1.5 bg-[#ffc107] mb-6 rounded-full" />
          <p className="max-w-2xl text-center text-black font-bold text-sm leading-relaxed px-6">
             A step-by-step journey designed to build skills, gain experience, and unlock career opportunities.
          </p>
       </div>

       {/* Roadmap Grid */}
       <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-[1440px] mx-auto px-6 relative mb-16">
          {roadmap.map((step, idx) => (
            <motion.div 
               key={idx}
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ delay: idx * 0.1 }}
               className="bg-white rounded-[2rem] border border-slate-100 shadow-[0_20px_50px_rgba(0,0,0,0.03)] flex flex-col items-center relative overflow-hidden group hover:border-[#ffc107]/20 transition-all duration-500"
            >
               {/* Accent top line */}
               <div className="absolute top-0 left-0 w-full h-1" style={{ backgroundColor: step.color }} />
               
               <div className="px-6 py-8 w-full flex flex-col items-center">
                  <div className="w-10 h-10 rounded-xl bg-slate-50 flex items-center justify-center mb-6 border border-slate-100 group-hover:scale-110 transition-transform duration-500" style={{ color: step.color }}>
                     <step.icon size={20} />
                  </div>

                  <p className="text-[11px] font-black uppercase tracking-[0.2em] mb-2" style={{ color: step.color }}>{step.year}</p>
                  <h3 className="text-xl font-black text-[#0A1A3F] mb-4 tracking-tighter text-center leading-tight">{step.title}</h3>
                  <div className="w-8 h-0.5 bg-slate-200 mb-6 rounded-full" />
                  
                  <div className="w-full space-y-2 mb-2">
                     {step.points.map((point, pIdx) => (
                       <div key={pIdx} className="flex items-center gap-3">
                          <div className="w-1.5 h-1.5 rounded-full shrink-0" style={{ backgroundColor: step.color }} />
                          <p className="text-[13px] font-black text-black tracking-tight">{point}</p>
                       </div>
                     ))}
                  </div>
               </div>
            </motion.div>
          ))}
       </div>
    </div>
  )
}

const TrainingOverview = () => {
  return (
    <div className="relative bg-[#F8FAFC] py-8 min-h-screen overflow-hidden font-graphik">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-gradient-to-bl from-[#18357a]/5 via-transparent to-transparent rounded-full blur-3xl pointer-events-none" />
      
      <section className="relative z-10 max-w-7xl mx-auto">
        <HeaderSection />
        <TracksSection />
        <LifeSkillsSection />
        <div className="px-6 sm:px-10 lg:px-12">
          <TrainingFlow />
        </div>
        <TrainingTeamSection />
      </section>
    </div>
  )
}

export default TrainingOverview
