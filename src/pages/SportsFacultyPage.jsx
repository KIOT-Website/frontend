import React from 'react'
import { motion } from 'framer-motion'
import { Trophy, ArrowLeft, User, GraduationCap, Award, Star } from 'lucide-react'
import { useNavigate } from 'react-router-dom'

// Import Images
import devi from '../assets/sports/devi.webp'
import manikandan from '../assets/sports/manikandan.webp'
import navaneethakrishnan from '../assets/Faculity/MECH/Dr. P. Navaneethakrishnan.webp'

const SportsFacultyPage = () => {
  const navigate = useNavigate()

  const facultyData = [
    {
      id: "pd-navaneethakrishnan",
      name: "Dr. P. Navaneethakrishnan",
      image: navaneethakrishnan,
      designation: "Professor Incharge",
      qualification: "B.E., M.E., Ph.D.",
      specialization: "Sports Administration",
      sections: []
    },
    {
      id: "pd-devi",
      name: "Devi R",
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
      name: "Manikandan P",
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
    <div className="min-h-screen bg-[#FCFDFD] pb-24 pt-0 md:pt-6">
      <div className="max-w-7xl mx-auto px-0 md:px-6 relative z-20 pt-4 md:pt-6">
        <div className="space-y-6 md:space-y-10">
          <div className="flex items-center gap-4 border-b border-slate-100 pb-6 px-6 md:px-0">
            <div className="w-12 h-12 bg-[#224292] text-[#ffc107] rounded-xl flex items-center justify-center shadow-lg">
              <Star size={24} />
            </div>
            <div>
              <h2 className="text-2xl font-black text-[#224292] tracking-tight">Faculty Profiles</h2>
            </div>
          </div>
          <div className="space-y-0 md:space-y-12">
            {facultyData.map((faculty, idx) => (
              <motion.div 
                key={faculty.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-white rounded-none md:rounded-[2rem] p-6 md:p-12 border-x-0 md:border border-slate-100 shadow-2xl space-y-10 relative overflow-hidden group"
              >
                {/* Background Pattern */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-[#224292]/5 rounded-full -translate-x-[-30%] -translate-y-[30%] group-hover:scale-110 transition-transform duration-700" />
                
                {/* Header Section */}
                <div className={`flex flex-col md:flex-row items-center md:items-end gap-10 px-6 md:px-0 ${
                    faculty.sections && faculty.sections.length > 0 ? 'border-b border-slate-100 pb-12' : ''
                }`}>
                    <div className="w-48 h-48 rounded-[2.5rem] bg-[#224292] overflow-hidden shadow-2xl border-4 border-white flex items-center justify-center shrink-0">
                        {faculty.image ? (
                            <img src={faculty.image} className="w-full h-full object-cover" alt={faculty.name} />
                        ) : (
                            <User size={60} className="text-[#ffc107]" />
                        )}
                    </div>
                    
                    <div className="text-center md:text-left flex-1 space-y-4">
                        {faculty.designation && (
                            <span className="inline-block px-4 py-1.5 bg-[#224292]/10 text-[#224292] rounded-full text-xs font-black tracking-wider uppercase mb-1">
                                {faculty.designation}
                            </span>
                        )}
                        <h3 className="text-2xl md:text-3xl font-black text-[#224292] tracking-tight leading-tight">{faculty.name}</h3>
                        
                        <div className="flex items-center justify-center md:justify-start gap-3 text-slate-800 text-sm md:text-base font-bold">
                            <GraduationCap size={20} className="text-[#224292]" />
                            {faculty.qualification}
                        </div>
                    </div>

                    <div className="w-full md:w-80 bg-slate-50 px-8 py-6 rounded-3xl border border-slate-100 shadow-sm">
                        <div className="flex items-center gap-4 mb-3">
                            <Award size={24} className="text-[#224292]" />
                            <p className="text-xs font-black text-[#224292] tracking-[2px]">Specialization</p>
                        </div>
                        <p className="text-[15px] font-black text-slate-700 leading-tight tracking-tight">{faculty.specialization}</p>
                    </div>
                </div>

                {/* Achievements Grid */}
                {faculty.sections && faculty.sections.length > 0 && (
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {faculty.sections.map((section, sidx) => (
                            <div key={sidx} className="space-y-6">
                                <div className="flex items-center gap-3">
                                    <div className="w-8 h-8 rounded-lg bg-[#224292]/10 flex items-center justify-center text-[#224292]">
                                        <Trophy size={16} />
                                    </div>
                                    <h4 className="text-xs font-black text-[#224292] tracking-[2px]">
                                        {section.title}
                                        <div className="w-6 h-0.5 bg-[#ffc107] mt-1" />
                                    </h4>
                                </div>
                                <ul className="space-y-4">
                                    {section.items.map((item, iidx) => (
                                        <li key={iidx} className="text-[13px] leading-relaxed font-bold text-slate-700 flex gap-4 group/item">
                                            <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#ffc107] shrink-0 group-hover/item:scale-150 transition-transform" />
                                            <span dangerouslySetInnerHTML={{ __html: item }} />
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default SportsFacultyPage
