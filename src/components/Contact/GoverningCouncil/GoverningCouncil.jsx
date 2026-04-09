import React from 'react'
import { motion } from 'framer-motion'
import { Users, ShieldCheck } from 'lucide-react'

const GoverningCouncil = () => {
  const functions = [
    "To monitor the academic and other related activities of the college",
    "To consider the recommendations of the Staff Selection Committee",
    "To review the important communications, policy decisions received from the University, Government, AICTE, etc.",
    "To pass the annual budget of the college",
    "To review the audited statements of accounts of the institute",
    "To consider the introduction of new courses and changes in intake for the next academic year",
    "To review the MOUs signed and industry collaborations",
    "To review the state of the art equipment procured",
    "To review the faculty position of the college",
    "To review the faculty development initiatives and programmes",
    "To review the admissions of the institute",
    "To review the academic performance of the students",
    "To review the students development activities",
    "To review the placement activities"
  ];

  const councilMembers = [
    { name: "Dr.J. Kumar Ph.D.", desc: "Secretary, Knowledge Institute of Technology Trust, Salem.", role: "Chairman (Trust)" },
    { name: "Dr.PSS.Srinivasan M.Tech., Ph.D.", desc: "Founder & Executive Chairman, Knowledge Institute of Technology Salem.", role: "Member (Trust)" },
    { name: "Mr.V.Suresh Kumar B.E.", desc: "Treasurer, Knowledge Institute of Technology Trust, Salem.", role: "Member (Trust)" },
    { name: "Mr.R.Muthusamy, B.E.", desc: "Vice President Knowledge Institute of Technology Trust, Salem.", role: "Member (Trust)" },
    { name: "Mr.N.P.Sivaprasad B.E.", desc: "Joint Secretary, Knowledge Institute of Technology Trust", role: "Member (Trust)" },
    { name: "Mr.P.Sengottuvel B.E.", desc: "Executive Member, Knowledge Institute of Technology Trust, Salem.", role: "Member (Trust)" },
    { name: "Dr.M.Raj Mohan Ph.D.", desc: "Professor, Department of Industrial Engineering, CEG Campus, Guindy, Anna University, Chennai - 600 025", role: "University Nominee" },
    { name: "Dr.K.Sudha M.E., Ph.D", desc: "Professor (CAS), Government College of Engineering, Salem - 636 011", role: "DOTE Nominee" },
    { name: "Dr. Sanjib Kumar Patnaik M.E., Ph.D.", desc: "Professor, Dept. of Electrical and Electronics Engg., College of Engineering Guindy, Anna University, Chennai – 25.", role: "Member (Academic)" },
    { name: "Dr. S.T.Ramesh M.E., Ph.D", desc: "Professor, Department of Civil Engg., National Institute of Technology, Trichy - 15.", role: "Member (Academic)" },
    { name: "Dr. V.Sankaran Ph.D", desc: "Senior Consultant, IIT Madras Pravartak Technologies, IIT Madras Research Park, Chennai.", role: "Member (Industry)" },
    { name: "Dr. S.Paramasivam M.E., Ph.D.", desc: "General Manager (R&D), ESAB India Limited, Chennai.", role: "Member (Industry)" },
    { name: "Mr.D.Sakthivel M.E.", desc: "Director - Administration, Knowledge Institute of Technology Trust, Salem.", role: "Member (Administration)" },
    { name: "Dr.P.Navaneethakrishnan M.E., Ph.D.", desc: "Director – Student Affairs, Knowledge Institute of Technology, Salem.", role: "Member (Faculty)" },
    { name: "Dr.M.Thangavel M.E., Ph.D.", desc: "Director – Centre for Career, Development and Training, Knowledge Institute of Technology, Salem.", role: "Member (Faculty)" },
    { name: "Dr.B.Sasikumar M.E., Ph.D.", desc: "Associate Professor and HOD, Dept. of AI & DS, Knowledge Institute of Technology, Salem.", role: "Member (Faculty)" },
    { name: "Dr.M.Sathyanathan M.E., Ph.D.", desc: "Director – IQAC, Knowledge Institute of Technology, Salem.", role: "Member (Faculty)" },
    { name: "Dr.K.Visagavel M.E., Ph.D.", desc: "Principal, Knowledge Institute of Technology, Salem.", role: "Member Secretary" }
  ];

  return (
    <div className="relative bg-[#FCFDFD] pt-16 pb-32 min-h-screen overflow-hidden">
      
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-to-bl from-[#18357a]/5 to-transparent rounded-bl-full pointer-events-none" />
      <div className="absolute bottom-1/4 left-0 w-[600px] h-[600px] bg-gradient-to-tr from-[#ffc107]/5 to-transparent rounded-tr-full pointer-events-none" />

      <section className="relative px-6 sm:px-10 lg:px-20 z-10 w-full">
        
        {/* Standardized Header */}
        <div className="text-center mb-20">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <div className="inline-flex items-center gap-2.5 px-6 py-2.5 rounded-full bg-white border border-[#D5E2F4]/80 shadow-sm mb-8 hover:shadow-md transition-shadow cursor-default group">
               <span className="relative flex h-3.5 w-3.5">
                 <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#ffc107] opacity-60"></span>
                 <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-[#e0a800]"></span>
               </span>
               <span className="text-sm font-black text-[#18357a] uppercase tracking-[0.2em]">Institutional Governance</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-[3.5rem] font-black text-[#18357a] mb-8 tracking-tight leading-tight">
              Governing <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#18357a] via-[#4666B4] to-[#ffc107] uppercase">Council</span>
            </h1>
            
            <p className="text-[#64779F] text-xl lg:text-2xl max-w-4xl mx-auto font-medium leading-relaxed italic border-l-4 border-[#ffc107] pl-8 py-4 bg-[#18357a]/5 rounded-r-2xl">
              The Governing Council is the highest administrative body of the institute and it meets twice in a year to monitor academic excellence and institutional growth.
            </p>
          </motion.div>
        </div>

        {/* Functions Section */}
        <div className="w-full mb-28">
           <h3 className="text-2xl font-black text-[#18357a] mb-10 flex items-center justify-center md:justify-start gap-4 uppercase tracking-tight">
              <ShieldCheck className="text-[#ffc107]" />
              Functions of the Council
           </h3>
           <div className="grid md:grid-cols-2 gap-x-12 gap-y-4">
              {functions.map((item, idx) => (
                <motion.div 
                   key={idx}
                   initial={{ opacity: 0, x: -10 }}
                   whileInView={{ opacity: 1, x: 0 }}
                   viewport={{ once: true }}
                   transition={{ delay: idx * 0.05 }}
                   className="flex items-start gap-3 group"
                >
                   <div className="mt-1.5 w-2 h-2 rounded-full bg-[#ffc107] shrink-0 group-hover:scale-125 transition-transform" />
                   <span className="text-[#64779F] font-semibold text-[15px] leading-relaxed">{item}</span>
                </motion.div>
              ))}
           </div>
        </div>

        {/* Council Members Section */}
        <div className="max-w-5xl mx-auto">
           <h3 className="text-2xl font-black text-[#18357a] mb-10 flex items-center justify-center md:justify-start gap-4 uppercase tracking-tight">
              <Users className="text-[#ffc107]" />
              Members of Governing Council
           </h3>
           
           {/* Mobile View: Centered Cards */}
           <div className="md:hidden space-y-6">
              {councilMembers.map((member, idx) => (
                <motion.div 
                   key={`mobile-${idx}`}
                   initial={{ opacity: 0, y: 20 }}
                   whileInView={{ opacity: 1, y: 0 }}
                   viewport={{ once: true }}
                   transition={{ delay: idx * 0.05 }}
                   className="bg-white rounded-3xl p-8 shadow-[0_20px_50px_rgba(24,53,122,0.04)] border border-[#D5E2F4]/50 flex flex-col items-center text-center space-y-4"
                >
                   <div className="space-y-2">
                      <div className="text-lg font-black text-[#18357a] leading-tight px-4">{member.name}</div>
                      <div className="text-[#64779F] text-xs font-semibold leading-relaxed tracking-wide px-4">{member.desc}</div>
                   </div>
                   <div className="pt-2">
                      <span className="inline-block px-5 py-2 rounded-full bg-[#ffc107]/10 text-[#e0a800] text-[10px] font-black uppercase tracking-widest border border-[#ffc107]/20 shadow-sm">
                        {member.role}
                      </span>
                   </div>
                </motion.div>
              ))}
           </div>

           {/* Desktop View: Premium Table */}
           <motion.div 
             initial={{ opacity: 0, y: 40 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             transition={{ duration: 0.8 }}
             className="hidden md:block bg-white rounded-[2.5rem] overflow-hidden shadow-[0_30px_80px_rgba(24,53,122,0.06)] border border-[#D5E2F4]/50"
           >
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="bg-[#18357a] text-white">
                      <th className="px-10 py-7 text-sm font-black uppercase tracking-widest min-w-[300px]">Name & Designation</th>
                      <th className="px-10 py-7 text-sm font-black uppercase tracking-widest min-w-[200px]">Position</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-[#D5E2F4]/50">
                    {councilMembers.map((member, idx) => (
                      <motion.tr 
                        key={`desktop-${idx}`}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: idx * 0.05 }}
                        className="group hover:bg-[#18357a]/[0.02] transition-colors"
                      >
                        <td className="px-10 py-7">
                          <div className="space-y-1">
                             <div className="text-[17px] font-black text-[#18357a] group-hover:text-[#ffc107] transition-colors">{member.name}</div>
                             <div className="text-[#64779F] text-xs font-semibold leading-relaxed tracking-wide max-w-lg">{member.desc}</div>
                          </div>
                        </td>
                        <td className="px-10 py-7">
                          <span className="inline-block px-5 py-2 rounded-full bg-[#ffc107]/10 text-[#e0a800] text-[11px] font-black uppercase tracking-wider border border-[#ffc107]/5 group-hover:bg-[#ffc107] group-hover:text-white transition-all duration-300">
                            {member.role}
                          </span>
                        </td>
                      </motion.tr>
                    ))}
                  </tbody>
                </table>
              </div>
           </motion.div>
        </div>

      </section>
    </div>
  )
}

export default GoverningCouncil
