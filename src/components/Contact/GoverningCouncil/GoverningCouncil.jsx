import React from 'react'
import { motion } from 'framer-motion'
import { Users, ShieldCheck, CheckCircle2 } from 'lucide-react'

const GoverningCouncil = () => {
  const functions = [
    "To monitor the academic and other related activities of the college",
    "To consider the recommendations of the Staff Selection Committee",
    "To review the important communications and policy decisions received from the University, Government, AICTE, etc.",
    "To pass the annual budget of the college",
    "To review the audited statements of accounts of the institute",
    "To consider the introduction of new courses and changes in intake for the next academic year",
    "To review the MOUs signed and industry collaborations",
    "To review the state-of-the-art equipment procured",
    "To review the faculty position of the college",
    "To review the faculty development initiatives and programmes",
    "To review the admissions of the institute",
    "To review the academic performance of the students",
    "To review the students’ development activities",
    "To review the placement activities",
    "To approve activities related to the Autonomous Institution (if Applicable)"
  ];

  const councilMembers = [
    {
      sno: 1,
      name: "Dr.J. Kumar Ph.D.",
      desc: "Secretary, KIOT Trust, Salem",
      role: "Chairman (Trust)",
      contact: "85085 28000"
    },
    {
      sno: 2,
      name: "Dr.PSS.Srinivasan M.Tech., Ph.D.",
      desc: "Executive Chairman, KIOT Trust, Salem",
      role: "Member (Trust)",
      contact: "97900 41414"
    },
    {
      sno: 3,
      name: "Mr.V.Suresh Kumar B.E.",
      desc: "Treasurer, KIOT Trust",
      role: "Member (Trust)",
      contact: "9095540346"
    },
    {
      sno: 4,
      name: "Mr.E.Krishnamoorthy B.E.",
      desc: "Member, KIOT Trust",
      role: "Member (Trust)",
      contact: "99444 52210"
    },
    {
      sno: 5,
      name: "Mr.P.Sengottuvel B.E.",
      desc: "Executive Member, KIOT Trust",
      role: "Member (Trust)",
      contact: "94430 50567"
    },
    {
      sno: 6,
      name: "Dr.M.Raj Mohan Ph.D.",
      desc: "Professor, Department of Industrial Engineering, CEG Campus, Guindy, Anna University, Chennai - 600 025",
      role: "Member (University Nominee)",
      contact: "94444 36272"
    },
    {
      sno: 7,
      name: "Yet to Nominate from DOTE",
      desc: "",
      role: "Member (DOTE Nominee)",
      contact: "-"
    },
    {
      sno: 8,
      name: "Dr. Sanjib Kumar Patnaik M.E., Ph.D.",
      desc: "Professor, Dept. of Electrical and Electronics Engg., College of Engineering Guindy, Anna University, Chennai – 25.",
      role: "Member (Academic)",
      contact: "94442 17627"
    },
    {
      sno: 9,
      name: "Dr.K.Ravi Kumar Ph.D.",
      desc: "Associate Professor, Department of Energy Science and Engineering, IIT - Delhi",
      role: "Member (Academic)",
      contact: "99010 44450"
    },
    {
      sno: 10,
      name: "Dr. V.Sankaran Ph.D.",
      desc: "Senior Consultant, IIT Madras Pravartak Technologies, IIT Madras Research Park, Chennai.",
      role: "Member (Industry)",
      contact: "99401 40571"
    },
    {
      sno: 11,
      name: "Dr.S.Jayakumar M.Tech., Ph.D.",
      desc: "Digital Signal Processing Engineer, Mistral Solutions Pvt. Ltd., Bangalore.",
      role: "Member (Industry)",
      contact: "98452 90024"
    },
    {
      sno: 12,
      name: "Mr.D.Sakthivel M.E.",
      desc: "Director – Administration, KIOT Trust",
      role: "Member (Administration)",
      contact: "97900 18181"
    },
    {
      sno: 13,
      name: "Dr.P.Navaneethakrishnan M.E., Ph.D.",
      desc: "Director – Student Affairs, KIOT Trust",
      role: "Member (Faculty)",
      contact: "98429 50323"
    },
    {
      sno: 14,
      name: "Dr.M.Thangavel M.E., Ph.D.",
      desc: "Director – CDT, KIOT Trust",
      role: "Member (Faculty)",
      contact: "97900 71717"
    },
    {
      sno: 15,
      name: "Dr.B.Sasikumar M.E., (Ph.D.)",
      desc: "HOD / AI&DS",
      role: "Member (Faculty)",
      contact: "98948 24645"
    },
    {
      sno: 16,
      name: "Dr.M.Sathyanathan M.E., Ph.D",
      desc: "Director - IQAC",
      role: "Member (Faculty)",
      contact: "99940 91421"
    },
    {
      sno: 17,
      name: "Dr.K.Visagavel M.E., Ph.D.",
      desc: "Principal, KIOT Trust",
      role: "Member (Secretary)",
      contact: "97900 41414"
    }
  ];

  return (
    <div className="relative bg-[#FCFDFD] pt-2 pb-32 min-h-screen overflow-hidden font-graphik">
      
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-to-bl from-[#224292]/5 to-transparent rounded-bl-full pointer-events-none" />
      <div className="absolute bottom-1/4 left-0 w-[600px] h-[600px] bg-gradient-to-tr from-[#ffc107]/5 to-transparent rounded-tr-full pointer-events-none" />

      <section className="relative px-6 sm:px-10 lg:px-20 z-10 w-full font-graphik">
        
        {/* Standardized Header */}
        <div className="text-center mb-8">
          <div className="font-graphik">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-graphik font-semibold text-[#224292] mb-6 tracking-tighter leading-tight">
              Governing <span className="text-[#ffc107]">Council</span>
            </h1>
          </div>
        </div>

        {/* Objectives and Procedure Section */}
        <div className="w-full mb-16 font-graphik">
           <div className="text-center md:text-left mb-6 font-graphik">
              <h3 className="text-xl font-graphik font-semibold text-[#224292] tracking-tight mb-2">Objectives and Procedure</h3>
              <div className="w-16 h-1 bg-[#ffc107] mx-auto md:mx-0 rounded-full" />
           </div>
           <div className="bg-[#224292]/5 p-6 rounded-2xl border-l-4 border-l-[#224292] border-y border-r border-slate-100 flex items-start gap-4 hover:bg-[#224292]/10 transition-all duration-300 shadow-sm font-graphik">
              <ShieldCheck size={20} className="text-[#ffc107] shrink-0 mt-0.5" />
              <p className="text-[14px] font-semibold text-[#333333] leading-relaxed font-graphik text-justify">
                To device, approve and review the progress of function of the HEI in the area viz., Academics, Faculty and Staff selection, Students, Faculty and Staff development, budget and Audited Statement of accounts, Adherence of the HEI with respect to norms of statutory bodies (AICTE, AU, UGC, DOTE) and other related matters.
              </p>
           </div>
        </div>

        {/* Roles and Responsibilities Section */}
        <div className="w-full mb-20 font-graphik">
           <div className="hidden md:block text-center md:text-left mb-10 font-graphik">
              <h3 className="text-xl font-graphik font-semibold text-[#224292] tracking-tight mb-2">Roles and Responsibilities</h3>
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
        <div className="max-w-7xl mx-auto font-graphik">
           <h3 className="text-xl font-graphik font-semibold text-[#224292] mb-10 flex items-center justify-center md:justify-start gap-4 tracking-tight">
              <Users className="text-[#224292]" />
              Members of Governing Council
           </h3>
           
           <div className="md:hidden space-y-6 font-graphik">
              {councilMembers.map((member, idx) => (
                <div 
                   key={`mobile-${idx}`}
                   className="bg-white rounded-xl p-6 border border-[#D5E2F4]/50 flex flex-col space-y-3 font-graphik"
                >
                   <div className="flex items-center justify-between border-b border-slate-100 pb-2">
                     <span className="text-[10px] font-black text-slate-400 uppercase">S.No. {member.sno}</span>
                     {member.contact && member.contact !== '-' && (
                       <span className="text-xs font-normal text-slate-500">{member.contact}</span>
                     )}
                   </div>
                   <div className="space-y-1.5 font-graphik">
                      <div className="text-[16px] font-graphik font-bold text-[#224292] leading-tight">{member.name}</div>
                      {member.desc && (
                        <div className="text-[#64779F] text-xs font-normal leading-relaxed tracking-wide font-graphik">{member.desc}</div>
                      )}
                   </div>
                   <div className="pt-1 font-graphik">
                      <span className="inline-block px-4 py-1.5 rounded-full bg-[#224292]/5 text-[#224292] text-[10px] font-graphik font-normal border border-[#ffc107]/20 shadow-sm">
                         {member.role}
                      </span>
                   </div>
                </div>
              ))}
           </div>

           {/* Desktop View: Premium Table */}
           <div 
             className="hidden md:block bg-white rounded-xl overflow-hidden border border-[#D5E2F4]/50 font-graphik shadow-md"
           >
              <div className="overflow-x-auto font-graphik">
                <table className="w-full text-left border-collapse font-graphik">
                   <thead>
                     <tr className="bg-[#224292] text-white font-graphik">
                       <th className="px-5 py-5 text-sm font-graphik font-bold tracking-wider w-16 text-center">S.No</th>
                       <th className="px-5 py-5 text-sm font-graphik font-bold tracking-wider">Name of the Member & Affiliation</th>
                       <th className="px-5 py-5 text-sm font-graphik font-bold tracking-wider min-w-[200px]">Position</th>
                       <th className="px-5 py-5 text-sm font-graphik font-bold tracking-wider min-w-[150px]">Contact Details</th>
                     </tr>
                   </thead>
                   <tbody className="divide-y divide-[#D5E2F4]/50 font-graphik">
                     {councilMembers.map((member, idx) => (
                       <tr 
                         key={`desktop-${idx}`}
                         className="group transition-colors hover:bg-slate-50/50 font-graphik"
                       >
                         <td className="px-5 py-5 font-graphik text-center text-sm font-normal text-slate-500">
                           {member.sno}
                         </td>
                         <td className="px-5 py-5 font-graphik">
                           <div className="space-y-1 font-graphik">
                              <div className="text-[16px] font-graphik font-bold text-[#224292] transition-colors font-graphik">{member.name}</div>
                              {member.desc && (
                                <div className="text-[#64779F] text-xs font-normal leading-relaxed tracking-wide max-w-2xl font-graphik">{member.desc}</div>
                              )}
                           </div>
                         </td>
                         <td className="px-5 py-5 font-graphik">
                           <span className="inline-block px-4 py-1.5 rounded-full bg-[#224292]/5 text-[#224292] text-[11px] font-graphik font-normal border border-[#ffc107]/5 transition-all duration-300 font-graphik">
                             {member.role}
                           </span>
                         </td>
                         <td className="px-5 py-5 font-graphik text-sm font-normal text-slate-600">
                           {member.contact}
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
