import React from 'react'
import { motion } from 'framer-motion'
import { Users, ShieldCheck, CheckCircle2 } from 'lucide-react'

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
    <div className="relative bg-[#FCFDFD] pt-2 pb-32 min-h-screen overflow-hidden font-graphik">
      
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-to-bl from-[#224292]/5 to-transparent rounded-bl-full pointer-events-none" />
      <div className="absolute bottom-1/4 left-0 w-[600px] h-[600px] bg-gradient-to-tr from-[#ffc107]/5 to-transparent rounded-tr-full pointer-events-none" />

      <section className="relative px-6 sm:px-10 lg:px-20 z-10 w-full font-graphik">
        
        {/* Standardized Header */}
        <div className="text-center mb-8">
          <div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="font-graphik"
          >
            {/* Badge Removed per request */}
            
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-graphik font-semibold text-[#224292] mb-4 tracking-tighter leading-tight">
              Governing <span className="text-[#ffc107]">Council</span>
            </h1>
            
          </div>
        </div>

        {/* Functions Section */}
        <div className="w-full mb-20 font-graphik">
           <div className="hidden md:block text-center md:text-left mb-10 font-graphik">
              <h3 className="text-xl font-graphik font-semibold text-[#224292] tracking-tight mb-2">Functions of the Council</h3>
              <div className="w-16 h-1 bg-[#ffc107] mx-auto md:mx-0 rounded-full" />
           </div>

           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 font-graphik">
              {functions.map((item, idx) => (
                <div 
                   key={idx}
                   className="bg-[#F8FAFC] p-5 rounded-2xl border border-slate-100 flex items-start gap-4 hover:border-[#224292]/20 transition-all duration-300 group shadow-sm font-graphik"
                >
                   <CheckCircle2 size={16} className="text-[#ffc107] shrink-0 mt-0.5" />
                   <span className="text-[13px] font-medium text-[#333333] leading-[1.4] font-graphik group-hover:text-[#224292] transition-colors">{item}</span>
                </div>
              ))}
           </div>
        </div>

        {/* Council Members Section */}
        <div className="max-w-5xl mx-auto font-graphik">
           <h3 className="text-xl font-graphik font-semibold text-[#224292] mb-10 flex items-center justify-center md:justify-start gap-4 tracking-tight">
              <Users className="text-[#224292]" />
              Members of Governing Council
           </h3>
           
                   <div className="md:hidden space-y-6 font-graphik">
              {councilMembers.map((member, idx) => (
                <div 
                   key={`mobile-${idx}`}
                   className="bg-white rounded-xl p-8 border border-[#D5E2F4]/50 flex flex-col items-center text-center space-y-4 font-graphik"
                >
                   <div className="space-y-2 font-graphik">
                      <div className="text-lg font-graphik font-bold text-[#224292] leading-tight px-4">{member.name}</div>
                      <div className="text-[#333333] text-xs font-semibold leading-relaxed tracking-wide px-4 opacity-80 font-graphik">{member.desc}</div>
                   </div>
                   <div className="pt-2 font-graphik">
                      <span className="inline-block px-5 py-2 rounded-full bg-[#224292]/5 text-[#224292] text-[10px] font-graphik font-bold tracking-widest border border-[#ffc107]/20 shadow-sm">
                         {member.role}
                      </span>
                   </div>
                </div>
              ))}
           </div>

           {/* Desktop View: Premium Table */}
           <div 
             className="hidden md:block bg-white rounded-xl overflow-hidden border border-[#D5E2F4]/50 font-graphik"
           >
              <div className="overflow-x-auto font-graphik">
                <table className="w-full text-left border-collapse font-graphik">
                   <thead>
                     <tr className="bg-[#224292] text-white font-graphik">
                       <th className="px-10 py-7 text-sm font-graphik font-bold tracking-widest min-w-[300px]">Name & Designation</th>
                       <th className="px-10 py-7 text-sm font-graphik font-bold tracking-widest min-w-[200px]">Position</th>
                     </tr>
                   </thead>
                   <tbody className="divide-y divide-[#D5E2F4]/50 font-graphik">
                     {councilMembers.map((member, idx) => (
                       <tr 
                         key={`desktop-${idx}`}
                         className="group transition-colors font-graphik"
                       >
                         <td className="px-10 py-7 font-graphik">
                           <div className="space-y-1 font-graphik">
                              <div className="text-[17px] font-graphik font-bold text-[#224292] transition-colors font-graphik">{member.name}</div>
                              <div className="text-[#333333] text-xs font-semibold leading-relaxed tracking-wide max-w-lg opacity-80 font-graphik">{member.desc}</div>
                           </div>
                         </td>
                         <td className="px-10 py-7 font-graphik">
                           <span className="inline-block px-5 py-2 rounded-full bg-[#224292]/5 text-[#224292] text-[11px] font-graphik font-bold tracking-wider border border-[#ffc107]/5 transition-all duration-300 font-graphik">
                             {member.role}
                           </span>
                         </td>
                       </tr>
                     ))}
                   </tbody>
                </table>
              </div>
           </div>
        </div>

      </section>
    </div>
  )
}

export default GoverningCouncil
