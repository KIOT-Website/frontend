import React from 'react'
import { motion } from 'framer-motion'
import { Trophy, ArrowLeft, User, GraduationCap, Award, Star } from 'lucide-react'
import { useNavigate } from 'react-router-dom'

// Import Images
import devi from '../assets/sports/devi.webp'
import manikandan from '../assets/sports/manikandan.webp'

const SportsFacultyPage = () => {
  const navigate = useNavigate()

  const facultyData = [
    {
      id: "pd-devi",
      name: "R. Devi",
      image: devi,
      designation: "Physical Directress",
      qualification: "B.Com., M.P.Ed., M.Sc Yoga.,",
      specialization: "Badminton, Table Tennis, Athletics, Kho-Kho",
      sections: [
        {
          title: "Specialization Achievements",
          items: [
            "Tamilnadu State <span class='text-[#ffc107] font-bold'>Athletic Official</span>",
            "Tamilnadu state <span class='text-[#ffc107] font-bold'>Badminton Official</span>",
            "Tamilnadu <span class='text-[#ffc107] font-bold'>Table Tennis Official</span>",
            "Salem District Table Tennis Association <span class='text-[#ffc107] font-bold'>Chief Referee</span>"
          ]
        },
        {
          title: "Anna University Level Achievements",
          subtitle: "Coaching, Team Manager and Selection Committee",
          items: [
            "Selected as the <span class='text-[#ffc107] font-bold'>Coach</span> for the Boys Shooting and Women Table Tennis Teams of Anna University. The team participated in the <span class='text-[#ffc107] font-bold'>Khelo India University Games (National Level) 2025</span>.",
            "Selected as the <span class='text-[#ffc107] font-bold'>Coach</span> for the Women Table Tennis of Anna University Team. The team participated in <span class='text-[#ffc107] font-bold'>South Zone & All India Inter University</span> Table Tennis Tournament 2023-25.",
            "Selected as a <span class='text-[#ffc107] font-bold'>Selection Committee Member</span> by Anna University for the Interzone Table Tennis, Fencing, Boxing, Power Lifting Tournament (Men & Women) 2023-25"
          ]
        },
        {
          title: "Sports & Games Achievements",
          items: [
            "Inter Physical Education Kho-Kho Tournament 2011-2012, <span class='text-[#ffc107] font-bold'>1st Place</span>",
            "Inter Physical Education Ball Badminton Tournament 2011-2012, <span class='text-[#ffc107] font-bold'>1st Place</span>",
            "Inter Physical Education Badminton Tournament 2010-2011, <span class='text-[#ffc107] font-bold'>2nd Place</span>",
            "Inter Physical Education Kho-Kho Tournament 2010-2011, <span class='text-[#ffc107] font-bold'>2nd Place</span>",
            "District Level Women Sports Handball Tournament 2010-2011, <span class='text-[#ffc107] font-bold'>2nd Place</span>",
            "4th Inter State Yoga Competition 2010-2011, <span class='text-[#ffc107] font-bold'>Participated</span>",
            "7th National Senior Fencing Championship 2009-2010, <span class='text-[#ffc107] font-bold'>Participated</span>",
            "Periyar University Inter Collegiate Fencing Tournament 2009-2010, <span class='text-[#ffc107] font-bold'>3rd Place</span>"
          ]
        }
      ]
    },
    {
      id: "pd-manikandan",
      name: "P. Manikandan",
      image: manikandan,
      designation: "Physical Director",
      qualification: "M.Com., M.P.Ed., PG Dip. in Yoga",
      specialization: "Handball, Hockey",
      sections: [
        {
          title: "Achievements",
          items: [
            "<span class='text-[#ffc107] font-bold'>Coaches Training Program Level -1</span> for promotion of sport & games for the disabled 2013",
            "Inter College Power Lifting 2010 <span class='text-[#ffc107] font-bold'>3rd Place</span>",
            "Inter College Handball 2008, <span class='text-[#ffc107] font-bold'>3rd Place</span>",
            "Divisional Level Handball 2007, <span class='text-[#ffc107] font-bold'>4th Place</span>",
            "District Level Handball Championship for Boys 2006"
          ]
        }
      ]
    }
  ]

  return (
    <div className="min-h-screen bg-[#FCFDFD] font-graphik pb-24">
      {/* 🔷 Shared Hero Section (Consistent across Hub) */}
      <div className="relative h-[22vh] flex items-center justify-center overflow-hidden bg-[#18357a]">
          <div className="absolute inset-0">
              <img 
                  src="https://images.unsplash.com/photo-1523050335392-9bc0ad7c9f83?q=80&w=1920&auto=format&fit=crop" 
                  className="w-full h-full object-cover opacity-40" 
                  alt="Campus"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-[#18357a]/80 via-[#18357a]/60 to-transparent" />
          </div>
          
          <div className="relative z-10 text-center px-6 pt-4">
              <motion.div
                  initial={{ y: 30, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.8 }}
              >
                  <button 
                      onClick={() => navigate('/campus-life/sports')}
                      className="inline-flex items-center gap-2 text-[#ffc107] hover:text-white transition-colors mb-4 group border border-[#ffc107]/30 px-4 py-1 rounded-full bg-[#18357a]/50 backdrop-blur-sm"
                  >
                      <ArrowLeft size={14} className="group-hover:-translate-x-1 transition-transform" />
                      <span className="text-[9px] font-black uppercase tracking-[2px]">Back to Sports & Games</span>
                  </button>
                  <h1 className="text-3xl md:text-5xl font-black text-white uppercase tracking-tighter leading-none mb-2">
                      CAMPUS <span className="text-[#ffc107]">LIFE</span>
                  </h1>
                  <p className="text-white/60 font-medium text-[9px] md:text-xs max-w-2xl mx-auto uppercase tracking-widest leading-loose">
                      Institutional Infrastructure & Ecosystem
                  </p>
              </motion.div>
          </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 pt-10 pb-16 relative z-20">

        <div className="bg-white rounded-3xl p-8 md:p-12 border border-slate-100 shadow-2xl space-y-10">
          <div className="flex items-center gap-4 border-b border-slate-50 pb-6">
            <div className="w-12 h-12 bg-[#18357a] text-[#ffc107] rounded-xl flex items-center justify-center shadow-lg">
              <Star size={24} />
            </div>
            <div>
              <h2 className="text-2xl font-black text-[#18357a] uppercase tracking-tight">Faculty Profiles</h2>
            </div>
          </div>          <div className="space-y-12">
            {facultyData.map((faculty, idx) => (
              <motion.div 
                key={faculty.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-white rounded-[2rem] p-8 md:p-12 border border-slate-100 shadow-2xl space-y-10 relative overflow-hidden group"
              >
                {/* Background Pattern */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-[#18357a]/5 rounded-full -translate-x-[-30%] -translate-y-[30%] group-hover:scale-110 transition-transform duration-700" />
                
                {/* Header Section */}
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 border-b border-slate-100 pb-10">
                    <div className="flex items-center gap-6">
                        <div className="w-20 h-20 rounded-2xl bg-[#18357a] flex items-center justify-center text-[#ffc107] shadow-2xl transform group-hover:rotate-6 transition-transform duration-500">
                            <User size={40} />
                        </div>
                        <div>
                            <h3 className="text-4xl font-black text-[#18357a] uppercase tracking-tight leading-none mb-3">{faculty.name}</h3>
                            <div className="flex items-center gap-3">
                                <p className="text-[#ffc107] font-black text-xs uppercase tracking-[4px]">{faculty.designation}</p>
                                <div className="w-1.5 h-1.5 rounded-full bg-slate-300" />
                                <div className="flex items-center gap-2 text-slate-500 text-[10px] font-black uppercase tracking-widest">
                                    <GraduationCap size={14} className="text-[#18357a]" />
                                    {faculty.qualification}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex items-center gap-4 bg-slate-50 px-6 py-4 rounded-2xl border border-slate-100">
                        <Award size={20} className="text-[#18357a]" />
                        <div>
                            <p className="text-[9px] font-black text-slate-400 uppercase tracking-widest mb-0.5">Specialization</p>
                            <p className="text-[12px] font-bold text-[#18357a] uppercase">{faculty.specialization}</p>
                        </div>
                    </div>
                </div>

                {/* Achievements Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {faculty.sections.map((section, sidx) => (
                        <div key={sidx} className="space-y-6">
                            <div className="flex items-center gap-3">
                                <div className="w-8 h-8 rounded-lg bg-[#18357a]/10 flex items-center justify-center text-[#18357a]">
                                    <Trophy size={16} />
                                </div>
                                <h4 className="text-[11px] font-black text-[#18357a] uppercase tracking-[2px]">
                                    {section.title}
                                    <div className="w-6 h-0.5 bg-[#ffc107] mt-1" />
                                </h4>
                            </div>
                            <ul className="space-y-4">
                                {section.items.map((item, iidx) => (
                                    <li key={iidx} className="text-[12px] leading-relaxed font-bold text-slate-600 flex gap-4 group/item">
                                        <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#ffc107] shrink-0 group-hover/item:scale-150 transition-transform" />
                                        <span dangerouslySetInnerHTML={{ __html: item }} />
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default SportsFacultyPage
