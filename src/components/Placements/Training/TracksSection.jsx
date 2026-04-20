import React from 'react'
import { motion } from 'framer-motion'
import { 
  MessageSquare, Brain, Code, Users, Search, 
  Smile, ShieldCheck, Heart, Lightbulb, Wallet,
  Clock, ArrowRight
} from 'lucide-react'

const tracks = [
  {
    title: "Employability Track",
    subtitle: "Bridging the gap between academics and industry expectations",
    color: "#18357a",
    sections: [
      {
        title: "Communication Skills",
        hours: "300+ Hours",
        icon: MessageSquare,
        points: ["Mastery of spoken and written English", "Business communication and presentation skills", "Professional etiquette and confidence building"]
      },
      {
        title: "Problem-Solving Skills",
        hours: "Intensive",
        icon: Brain,
        points: ["Quantitative aptitude, logical reasoning, and data interpretation", "Analytical problem-solving to clear competitive exams and placement tests"]
      },
      {
        title: "Programming Skills",
        hours: "350 Hours",
        icon: Code,
        points: ["Strong foundation in programming languages and coding practices", "Exposure to problem-solving using C, Python, Java, Data Structures etc.", "Hands-on coding exercises aligned with industry needs"]
      },
      {
        title: "Group Discussion Skills",
        hours: "50 Hours",
        icon: Users,
        points: ["Developing articulation, critical thinking, and listening skills", "Training in handling stress, defending ideas, and teamwork"]
      },
      {
        title: "Interview Skills",
        hours: "50 Hours",
        icon: Search,
        points: ["Mock interviews for HR and technical rounds", "Grooming for body language, confidence, and articulation", "Preparation for core and IT companies’ hiring processes"]
      }
    ]
  },
  {
    title: "Life Skills Track",
    subtitle: "Equipping students with personal growth and adaptability",
    color: "#ffc107",
    sections: [
      {
        title: "Soft Skills for Life",
        hours: "30 Hours",
        icon: Smile,
        points: ["Self-confidence, adaptability, and emotional intelligence", "Positive mindset and stress management techniques"]
      },
      {
        title: "Values & Ethics",
        hours: "40 Hours",
        icon: ShieldCheck,
        points: ["Awareness of professional ethics and workplace discipline", "Instilling honesty, responsibility, and social commitment"]
      },
      {
        title: "Interpersonal Skills",
        hours: "30 Hours",
        icon: Heart,
        points: ["Building strong relationships and teamwork skills", "Conflict resolution and empathy in communication"]
      },
      {
        title: "Entrepreneurial Skills",
        hours: "60 Hours",
        icon: Lightbulb,
        points: ["Developing initiative, decision-making, and leadership qualities", "Exposure to entrepreneurial thinking, innovation, and management practices"]
      },
      {
        title: "Personal Finance Planning",
        hours: "20 Hours",
        icon: Wallet,
        points: ["Basics of savings, investments, and financial literacy", "Building financial discipline for long-term stability"]
      }
    ]
  }
]

const TracksSection = () => {
  return (
    <div className="space-y-32 mb-32 px-6">
      {tracks.map((track, trackIdx) => (
        <div key={trackIdx} className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
             <div className="max-w-2xl">
                <div className={`text-[10px] font-bold uppercase tracking-[0.2em] mb-3 px-3 py-1 rounded-md inline-block ${
                  trackIdx === 0 ? 'bg-[#18357a]/5 text-[#18357a]' : 'bg-[#ffc107]/10 text-[#18357a]'
                }`}>
                   Academic Excellence
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-black tracking-tight uppercase">
                   {track.title.split(' ')[0]} <span className={trackIdx === 0 ? 'text-[#18357a]' : 'text-[#ffc107]'}>{track.title.split(' ').slice(1).join(' ')}</span>
                </h2>
                <p className="text-black/60 font-medium text-base mt-2">{track.subtitle}</p>
             </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
             {track.sections.map((section, sectionIdx) => (
               <motion.div
                  key={sectionIdx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: sectionIdx * 0.1 }}
                  className="bg-white p-8 rounded-2xl border border-slate-100 shadow-xl shadow-black/[0.03] group hover:border-[#18357a]/20 transition-all duration-500 flex flex-col h-full"
               >
                  <div className="flex items-start justify-between mb-8">
                     <div className={`w-14 h-14 rounded-xl flex items-center justify-center text-white shadow-lg transition-transform group-hover:scale-110 ${
                        trackIdx === 0 ? 'bg-[#18357a]' : 'bg-[#ffc107]'
                     }`}>
                        <section.icon size={26} />
                     </div>
                     <div className="px-3 py-1 rounded-full bg-slate-50 border border-slate-100 flex items-center gap-1.5 shadow-sm">
                        <Clock size={12} className="text-black/40" />
                        <span className="text-[10px] font-bold text-black/60 uppercase tracking-wider">{section.hours}</span>
                     </div>
                  </div>

                  <h3 className="text-xl font-bold text-black mb-6 tracking-tight group-hover:text-[#18357a] transition-colors">{section.title}</h3>
                  
                  <div className="space-y-4 flex-1">
                     {section.points.map((point, pIdx) => (
                       <div key={pIdx} className="flex items-start gap-3">
                          <div className={`mt-1.5 w-1.5 h-1.5 rounded-full shrink-0 ${
                             trackIdx === 0 ? 'bg-[#18357a]/40' : 'bg-[#ffc107]'
                          }`} />
                          <p className="text-black font-medium text-[13px] leading-relaxed text-justify">{point}</p>
                       </div>
                     ))}
                  </div>
               </motion.div>
             ))}
          </div>
        </div>
      ))}
    </div>
  )
}

export default TracksSection
