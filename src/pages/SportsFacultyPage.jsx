import React from 'react'
import { motion } from 'framer-motion'
import { Trophy, ArrowLeft, User, GraduationCap, Award, Star } from 'lucide-react'
import { useNavigate } from 'react-router-dom'

const SportsFacultyPage = () => {
  const navigate = useNavigate()

  const facultyData = [
    {
      id: "pd",
      name: "R. DEVI",
      designation: "Director of Physical Education",
      qualification: "B.Com., M.P.Ed., M.Sc Yoga",
      specialization: "Badminton, Table Tennis, Kho-Kho",
      achievements: [
        "Tamilnadu State Athletic Official",
        "Tamilnadu state Badminton Official",
        "Tamilnadu Table Tennis Official",
        "Salem District Table Tennis Association Chief Refree",
        "Inter Physical Education Kho-Kho Tournament 2011-2012, 1st Place",
        "Inter Physical Education Ball Badminton Tournament 2011-2012, 1st Place",
        "Inter Physical Education Badminton Tournament 2010-2011, 2nd Place",
        "Inter Physical Education Kho-Kho Tournament 2010-2011, 2nd Place",
        "District Level Women Sports Handball Tournament 2010-2011, 2nd Place",
        "4th Inter State Yoga Competition 2010-2011, Participated",
        "7th National Senior Fencing Championship 2009-2010, Participated",
        "Periyar University Inter Collegiate Fencing Tournament 2009-2010, 3rd Place"
      ]
    },
    {
      id: "pd1",
      name: "P. MANIKANDAN",
      designation: "Physical Director",
      qualification: "M.Com., M.P.Ed., PG Dip. in Yoga",
      specialization: "Handball, Hockey",
      achievements: [
        "Coaches Training Program Level -1 for promotion of sport & games for the disabled 2013",
        "Inter College Power Lifting 2010 3rd Place",
        "Inter College Handball 2008, 3rd Place",
        "Divisional Level Handball 2007, 4th Place",
        "District Level Handball Championship for Boys 2006"
      ]
    },
    {
      id: "pd2",
      name: "S. VASANTHAKUMAR",
      designation: "Asst. Physical Director",
      qualification: "B.Sc., M.P.Ed., PG Dip. in Yoga",
      specialization: "Volleyball",
      achievements: [
        "Tamilnadu State Athletic Official",
        "Salem District Level Championship Volleyball Tournament 2022, 1st Place",
        "Salem College Level Volleyball Tournament 2018, 1st Place",
        "Periyar University Inter Collegiate Volleyball Tournament 2018, 2nd Place",
        "SDAT State Level Competition 2017, 1st Place",
        "State Championship Volleyball Tournament 2022, Participated"
      ]
    }
  ]

  return (
    <div className="min-h-screen bg-[#FCFDFD] font-graphik pb-24">
      {/* 🔷 Shared Hero Section (Consistent across Hub) */}
      <div className="relative h-[35vh] flex items-center justify-center overflow-hidden bg-[#18357a]">
          <div className="absolute inset-0">
              <img 
                  src="https://images.unsplash.com/photo-1523050335392-9bc0ad7c9f83?q=80&w=1920&auto=format&fit=crop" 
                  className="w-full h-full object-cover opacity-40" 
                  alt="Campus"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-[#18357a]/80 via-[#18357a]/60 to-transparent" />
          </div>
          
          <div className="relative z-10 text-center px-6">
              <motion.div
                  initial={{ y: 30, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.8 }}
              >
                  <button 
                      onClick={() => navigate('/campus-life/sports')}
                      className="inline-flex items-center gap-2 text-[#ffc107] hover:text-white transition-colors mb-6 group border border-[#ffc107]/30 px-4 py-1.5 rounded-full bg-[#18357a]/50 backdrop-blur-sm"
                  >
                      <ArrowLeft size={14} className="group-hover:-translate-x-1 transition-transform" />
                      <span className="text-[10px] font-black uppercase tracking-[2px]">Back to Sports & Games</span>
                  </button>
                  <h1 className="text-4xl md:text-6xl font-black text-white uppercase tracking-tighter leading-none mb-3 font-display">
                      CAMPUS <span className="text-[#ffc107]">LIFE</span>
                  </h1>
                  <p className="text-white/60 font-medium text-[10px] md:text-sm max-w-2xl mx-auto uppercase tracking-widest leading-loose">
                      Institutional Infrastructure & Ecosystem
                  </p>
              </motion.div>
          </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-16 relative z-20">
        <div className="flex items-center gap-4 mb-20">
            <div className="w-10 h-10 bg-[#18357a] text-[#ffc107] rounded-xl flex items-center justify-center shadow-lg">
                <Trophy size={20} />
            </div>
            <div>
                <h2 className="text-2xl font-black text-[#18357a] uppercase tracking-tight">Physical Education</h2>
                <p className="text-[9px] font-black text-[#ffc107] uppercase tracking-[3px]">Expert Faculty Directory</p>
            </div>
        </div>

        <div className="bg-white rounded-2xl p-8 border border-slate-100 shadow-2xl space-y-16">
          <div className="flex items-center gap-4 border-b border-slate-50 pb-8">
            <div className="w-12 h-12 bg-[#18357a] text-[#ffc107] rounded-xl flex items-center justify-center shadow-lg">
              <Star size={24} />
            </div>
            <div>
              <h2 className="text-2xl font-black text-[#18357a] uppercase tracking-tight">Faculty Profiles</h2>
              <p className="text-[10px] font-black text-[#ffc107] uppercase tracking-[4px]">Leadership & Coaching Team</p>
            </div>
          </div>

          <div className="space-y-20">
            {facultyData.map((faculty, idx) => (
              <motion.div 
                key={faculty.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="grid lg:grid-cols-[1fr_2fr] gap-12 items-start group border-b border-slate-50 pb-20 last:border-0"
              >
                {/* Left: Summary Card / Image placeholder */}
                <div className="space-y-6">
                    <div className="relative aspect-square bg-slate-100 rounded-xl overflow-hidden border-4 border-white shadow-2xl flex items-center justify-center text-[#18357a]/5">
                        <User size={180} strokeWidth={1} />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#18357a]/20 to-transparent" />
                    </div>
                </div>

                {/* Right: Detailed Info */}
                <div className="space-y-8">
                    <div className="space-y-2">
                        <h3 className="text-3xl font-black text-[#18357a] uppercase tracking-tight leading-none mb-1">{faculty.name}</h3>
                        <p className="text-[#ffc107] font-black text-sm uppercase tracking-[4px] mb-6">{faculty.designation}</p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                        <div className="flex gap-4 p-5 rounded-xl bg-slate-50 border border-slate-100 h-fit">
                            <div className="text-[#18357a] shrink-0"><GraduationCap size={20} /></div>
                            <div>
                                <p className="text-[10px] font-black text-[#18357a]/40 uppercase tracking-widest mb-1">Qualification</p>
                                <p className="text-sm font-black text-black uppercase leading-tight">{faculty.qualification}</p>
                            </div>
                        </div>
                        <div className="flex gap-4 p-5 rounded-xl bg-white border border-slate-100 shadow-sm h-fit">
                            <div className="text-[#18357a] shrink-0"><Award size={20} /></div>
                            <div>
                                <p className="text-[10px] font-black text-[#18357a]/40 uppercase tracking-widest mb-1">Specialization</p>
                                <p className="text-sm font-black text-black uppercase leading-tight">{faculty.specialization}</p>
                            </div>
                        </div>
                    </div>

                    <div className="bg-[#18357a] p-8 rounded-xl text-white relative overflow-hidden shadow-xl">
                        <Trophy className="absolute -right-4 -bottom-4 text-white/5 w-32 h-32 rotate-12" />
                        <h4 className="text-[10px] font-black text-[#ffc107] uppercase tracking-[4px] mb-6 border-b border-white/10 pb-4">Key Achievements</h4>
                        <ul className="space-y-3 relative z-10">
                            {faculty.achievements.map((achievement, aIdx) => (
                                <li key={aIdx} className="flex gap-3 text-[11px] font-black leading-relaxed group/item">
                                    <div className="w-1.5 h-1.5 rounded-full bg-[#ffc107] shrink-0 mt-1.5 group-hover/item:scale-125 transition-transform" />
                                    <span className="text-white/80 group-hover/item:text-white transition-colors uppercase">{achievement}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
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
