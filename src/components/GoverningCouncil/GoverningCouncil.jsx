import React from 'react'
import { motion } from 'framer-motion'
import { Users, ShieldCheck, Award, GraduationCap } from 'lucide-react'

const GoverningCouncil = () => {
  const councilMembers = [
    { name: "Dr. PSS Sreenivasan", role: "Chairman", category: "Trust Management" },
    { name: "Smt. K Prabhavathi", role: "Member", category: "Trust Management" },
    { name: "Shri. S Selvarajan", role: "Member", category: "Trust Management" },
    { name: "Dr. K Visagavel", role: "Member Secretary", category: "Principal, KIOT" },
    { name: "University Nominee", role: "Member", category: "Anna University" },
    { name: "AICTE Nominee", role: "Member", category: "AICTE Regional Office" },
    { name: "State Govt Nominee", role: "Member", category: "DOTE / Govt of Tamil Nadu" },
    { name: "Industrialist", role: "Member", category: "Industry Expert" },
    { name: "Academician", role: "Member", category: "Higher Education Expert" },
  ];

  return (
    <div className="relative bg-[#FCFDFD] pt-16 pb-32 min-h-screen overflow-hidden">
      
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-to-bl from-[#18357a]/5 to-transparent rounded-bl-full pointer-events-none" />
      <div className="absolute bottom-1/4 left-0 w-[600px] h-[600px] bg-gradient-to-tr from-[#ffc107]/5 to-transparent rounded-tr-full pointer-events-none" />

      <section className="relative px-6 sm:px-10 lg:px-20 z-10 max-w-7xl mx-auto">
        
        {/* Page Header */}
        <div className="text-center mb-24">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <div className="inline-flex items-center gap-2.5 px-6 py-2.5 rounded-full bg-white border border-[#D5E2F4]/80 shadow-sm mb-8 hover:shadow-md transition-shadow cursor-default group">
               <div className="w-2 h-2 rounded-full bg-[#ffc107] animate-pulse" />
               <span className="text-sm font-black text-[#18357a] uppercase tracking-[0.2em]">Institutional Governance</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-[3.5rem] font-black text-[#18357a] mb-6 tracking-tighter leading-tight relative inline-block group uppercase">
              Governing <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#18357a] via-[#4666B4] to-[#ffc107]">Council</span>
              <span className="absolute -bottom-2 left-0 w-0 h-1 bg-[#ffc107] transition-all duration-700 group-hover:w-full" />
            </h1>
            
            <p className="text-[#64779F] text-xl lg:text-2xl max-w-2xl mx-auto font-medium leading-relaxed mt-4">
              Providing strategic leadership and ensuring the highest standards of transparency and excellence.
            </p>
          </motion.div>
        </div>

        {/* Council Table Section */}
        <div className="max-w-5xl mx-auto">
           <motion.div 
             initial={{ opacity: 0, y: 40 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             transition={{ duration: 0.8 }}
             className="bg-white rounded-[2.5rem] overflow-hidden shadow-[0_30px_80px_rgba(24,53,122,0.06)] border border-[#D5E2F4]/50"
           >
              <div className="overflow-x-auto">
                <table className="w-full text-left">
                  <thead>
                    <tr className="bg-[#18357a] text-white">
                      <th className="px-8 py-6 text-sm font-black uppercase tracking-widest">Member Name</th>
                      <th className="px-8 py-6 text-sm font-black uppercase tracking-widest">Position</th>
                      <th className="px-8 py-6 text-sm font-black uppercase tracking-widest">Representing</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-[#D5E2F4]/50">
                    {councilMembers.map((member, idx) => (
                      <motion.tr 
                        key={idx}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: idx * 0.05 }}
                        className="group hover:bg-[#18357a]/[0.02] transition-colors"
                      >
                        <td className="px-8 py-5">
                          <div className="flex items-center gap-4">
                             <div className="w-10 h-10 rounded-full bg-[#18357a]/5 flex items-center justify-center text-[#18357a] group-hover:bg-[#ffc107] group-hover:text-white transition-all">
                                <Users size={18} />
                             </div>
                             <span className="font-bold text-[#18357a]">{member.name}</span>
                          </div>
                        </td>
                        <td className="px-8 py-5">
                          <span className="px-4 py-1.5 rounded-full bg-[#ffc107]/10 text-[#e0a800] text-[11px] font-black uppercase tracking-wider">
                            {member.role}
                          </span>
                        </td>
                        <td className="px-8 py-5">
                          <span className="text-[#64779F] font-semibold">{member.category}</span>
                        </td>
                      </motion.tr>
                    ))}
                  </tbody>
                </table>
              </div>
           </motion.div>

           {/* Policy Note Footer */}
           <div className="mt-16 flex flex-col md:flex-row items-center gap-8 p-8 md:p-12 rounded-[2.5rem] bg-[#18357a]/5 border border-[#18357a]/10 relative overflow-hidden group">
              <div className="w-16 h-16 rounded-2xl bg-[#ffc107] flex items-center justify-center text-[#18357a] shrink-0 group-hover:scale-110 transition-transform">
                 <ShieldCheck size={32} />
              </div>
              <div className="flex-1 space-y-2">
                 <h4 className="text-xl font-black text-[#18357a] uppercase tracking-tight">Our Governance Standards</h4>
                 <p className="text-[#64779F] font-medium leading-relaxed">
                   The Governing Council of KIOT meets regularly to review policies, academic progress, and institutional development, ensuring alignment with global educational benchmarks.
                 </p>
              </div>
           </div>
        </div>

      </section>
    </div>
  )
}

export default GoverningCouncil
