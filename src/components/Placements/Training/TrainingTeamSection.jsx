import React from 'react'
import { motion } from 'framer-motion'
import { Users, Mail, ShieldCheck, GraduationCap, Award } from 'lucide-react'

// Image Imports
import imgThangavel from '../../../assets/trainning team/Dr.M.Thangavel B.E., M.E., M.B.A., Ph.D.,.webp'
import imgKarthikeyan from '../../../assets/trainning team/Prof. P. Karthikeyan B.E., M.E.,(Ph.D) MISTE..webp'
import imgSakthivel from '../../../assets/trainning team/Dr.M.Sakthivel B.E., M.E., Ph.D.,.webp'
import imgGunasekar from '../../../assets/trainning team/Mr.B.Gunasekar B.E.,M.E.,.webp'
import imgKrishnan from '../../../assets/trainning team/Mr.L.Krishnan B.E.,M.E.,.webp'
import imgKathiresan from '../../../assets/trainning team/Mr.R.Kathiresan B.E.,M.E.,.webp'
import imgVeerakumar from '../../../assets/trainning team/Mr.S.Veerakumar B.E.,M.E.,.webp'
import imgSudha from '../../../assets/trainning team/Mrs. B.Sudha M.Sc.,M.Ed.,.webp'
import imgSaranya from '../../../assets/trainning team/Mrs. M. SARANYA B.E.,M.E..webp'
import imgRubigha from '../../../assets/trainning team/Mrs.M.Rubigha B.E., M.E.,.webp'
import imgMahalakshmi from '../../../assets/trainning team/Mrs.P.Mahalakshmi M.A.,.webp'
import imgYudhayapriya from '../../../assets/trainning team/Mrs.R.Yudhayapriya B.E.,M.E.,.webp'

const trainingTeam = [
  { name: "Dr. M. Thangavel B.E., M.E., M.B.A., Ph.D.", desig: "Head – Training & Development", resp: "Core Training Strategy", image: imgThangavel },
  { name: "Prof. P. Karthikeyan B.E., M.E., (Ph.D.)", desig: "Placement & Training Officer", resp: "Technical & Aptitude Lead", image: imgKarthikeyan },
  { name: "Dr. M. Sakthivel B.E., M.E., Ph.D.", desig: "Assistant Professor", resp: "Technical Training Coordinator", image: imgSakthivel },
  { name: "Mr. B. Gunasekar B.E., M.E.", desig: "Assistant Professor", resp: "Skill Development Mentor", image: imgGunasekar },
  { name: "Mr. L. Krishnan B.E., M.E.", desig: "Assistant Professor", resp: "Industry Projects Lead", image: imgKrishnan },
  { name: "Mr. R. Kathiresan B.E., M.E.", desig: "Assistant Professor", resp: "Aptitude Training Specialist", image: imgKathiresan },
  { name: "Mr. S. Veerakumar B.E., M.E.", desig: "Assistant Professor", resp: "Coding & Technical Mentor", image: imgVeerakumar },
  { name: "Mrs. B. Sudha M.Sc., M.Ed.", desig: "Soft Skills Trainer", resp: "Communication & Verbal Lead", image: imgSudha },
  { name: "Mrs. M. Saranya B.E., M.E.", desig: "Assistant Professor", resp: "Placement Coordinator", image: imgSaranya },
  { name: "Mrs. M. Rubigha B.E., M.E.", desig: "Assistant Professor", resp: "Technical Mentor", image: imgRubigha },
  { name: "Mrs. P. Mahalakshmi M.A.", desig: "Assistant Professor", resp: "Verbal Ability Trainer", image: imgMahalakshmi },
  { name: "Mrs. R. Yudhayapriya B.E., M.E.", desig: "Assistant Professor", resp: "Technical Training Specialist", image: imgYudhayapriya }
];

const TrainingTeamSection = () => {
  return (
    <div className="mb-24 px-6 sm:px-10 lg:px-12">
      <div className="flex flex-col items-center mb-16">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#224292]/5 border border-[#224292]/10 mb-6">
          <GraduationCap size={16} className="text-[#224292]" />
          <span className="text-[11px] font-bold text-[#224292] tracking-widest">Our Expertise</span>
        </div>
        <h2 className="text-4xl md:text-5xl font-black text-[#224292] tracking-tighter text-center leading-tight">
          Dedicated <span className="text-[#ffc107]">Training Team</span>
        </h2>
      </div>

      {/* Desktop view: Table Design with Premium Look */}
      <motion.div 
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="hidden md:block bg-white rounded-[2rem] overflow-hidden shadow-2xl shadow-black/[0.03] border border-slate-100"
      >
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-[#224292] text-white">
              <th className="px-10 py-6 text-xs font-black tracking-[0.2em]">Expert Faculty</th>
              <th className="px-10 py-6 text-xs font-black tracking-[0.2em]">Specialization</th>
              <th className="px-10 py-6 text-xs font-black tracking-[0.2em] text-center">Responsibility</th>
            </tr>
          </thead>
          <tbody>
            {trainingTeam.map((member, idx) => (
              <tr 
                key={idx} 
                className={`group transition-all duration-300 ${idx % 2 === 0 ? 'bg-slate-50/50' : 'bg-white'} hover:bg-[#ffc107]/5`}
              >
                <td className="px-10 py-5">
                  <div className="flex items-center gap-5">
                    <div className="relative h-16 w-16 shrink-0 overflow-hidden rounded-2xl border-2 border-slate-100 group-hover:border-[#ffc107] transition-all duration-500 bg-white shadow-sm">
                      {member.image ? (
                        <img src={member.image} alt={member.name} className="h-full w-full object-cover" />
                      ) : (
                        <div className="h-full w-full flex items-center justify-center bg-slate-50 text-slate-300">
                          <Users size={24} />
                        </div>
                      )}
                    </div>
                    <div>
                      <div className="font-black text-black text-base tracking-tight leading-tight mb-1 group-hover:text-[#224292] transition-colors">{member.name}</div>
                      <div className="text-[#224292] text-[10px] font-black tracking-widest">{member.desig}</div>
                    </div>
                  </div>
                </td>
                <td className="px-10 py-5">
                   <div className="flex items-center gap-2">
                      <Award size={14} className="text-[#ffc107]" />
                      <span className="text-black font-bold text-sm uppercase tracking-tight">{member.resp}</span>
                   </div>
                </td>
                <td className="px-10 py-5 text-center">
                  <span className="inline-flex items-center gap-2 px-5 py-2 rounded-xl bg-white border border-slate-100 text-[#224292] text-[10px] font-black uppercase tracking-widest shadow-sm group-hover:bg-[#224292] group-hover:text-white group-hover:border-[#224292] transition-all duration-300">
                    <ShieldCheck size={14} />
                    Active Mentor
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </motion.div>

      {/* Mobile view: Premium Cards */}
      <div className="md:hidden grid gap-6">
        {trainingTeam.map((member, idx) => (
          <motion.div 
            key={idx}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="bg-white rounded-3xl p-6 shadow-xl shadow-black/[0.02] border border-slate-100 flex flex-col items-center text-center group"
          >
            <div className="w-24 h-24 rounded-[2rem] overflow-hidden border-4 border-white shadow-lg mb-4 group-hover:rotate-3 transition-transform duration-500">
              <img src={member.image} alt={member.name} className="w-full h-full object-cover" />
            </div>
            <h3 className="text-lg font-black text-black leading-tight mb-1">{member.name}</h3>
            <p className="text-[#224292] text-[10px] font-black uppercase tracking-widest mb-4">{member.desig}</p>
            <div className="w-full pt-4 border-t border-slate-50 flex flex-col items-center gap-2">
               <span className="text-[10px] font-black text-black tracking-widest">Responsibility</span>
               <p className="text-sm font-black text-black">{member.resp}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

export default TrainingTeamSection
