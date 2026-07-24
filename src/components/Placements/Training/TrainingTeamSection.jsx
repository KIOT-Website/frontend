import React from 'react'
import { motion } from 'framer-motion'
import { Users, Mail, ShieldCheck, Award } from 'lucide-react'
import cdeLast from '../../../assets/placements/CDT/cde last.webp'

// Image Imports from pteam folder
import imgThangavel from '../../../assets/placements/pteam/Dr.M.Thangavel B.E., M.E., M.B.A., Ph.D.,.webp'
import imgSakthivel from '../../../assets/placements/pteam/Dr.M.Sakthivel B.E., M.E., Ph.D.,.webp'
import imgLavanya from '../../../assets/placements/pteam/Mrs.S.Lavanya B.E., M.E., (Ph.D).webp'
import imgSangavi from '../../../assets/placements/pteam/Mrs. K. Sangavi B.Tech..webp'
import imgKrishnapriya from '../../../assets/placements/pteam/Mrs. K. Krishnapriya M.A., B.Ed.,.webp'
import imgHemalatha from '../../../assets/placements/pteam/Mrs.M. Hemalatha M.A.,NET.,.webp'
import imgVeerakumar from '../../../assets/placements/pteam/Mr.S.Veerakumar B.E.,M.E.,.webp'
import imgSaranya from '../../../assets/placements/pteam/Mrs. M. Saranya B.E.,M.E..webp'
import imgKathiresan from '../../../assets/placements/pteam/Mr.R.Kathiresan B.E.,M.E.,.webp'
import imgSurendar from '../../../assets/placements/pteam/Mr.S.Surendar B.E.,M.E.,.webp'
import imgRubigha from '../../../assets/placements/pteam/Mrs.M.Rubigha B.E., M.E.,.webp'
import imgYudhayapriya from '../../../assets/placements/pteam/Mrs.R.Yudhayapriya B.E.,M.E.,.webp'
import imgGunasekar from '../../../assets/placements/pteam/Mr.B.Gunasekar B.E.,M.E.,.webp'
import imgMahalakshmi from '../../../assets/placements/pteam/Mrs.P.Mahalakshmi M.A.,.webp'
import imgSudha from '../../../assets/placements/pteam/Mrs. B.Sudha M.Sc.,M.Ed.,.webp'

const trainingTeam = [
  { sNo: 1, name: "Dr. M. Thangavel B.E., M.E., M.B.A., Ph.D.", desig: "Professor / ECE", resp: "Director (C-CDT)", email: "directorcdt@kiot.ac.in", phone: "97510 71717 & 97900 71717", image: imgThangavel },
  { sNo: 2, name: "Dr. M. Sakthivel B.E., M.E., Ph.D.", desig: "Associate Professor / CSE", resp: "Deputy Director (C-CDT)", email: "ddcdt@kiot.ac.in", image: imgSakthivel },
  { sNo: 3, name: "Mrs. S. Lavanya B.E., M.E., Ph.D", desig: "Assistant Professor / IT", resp: "Technical Trainer - CDT", email: "slait@kiot.ac.in", image: imgLavanya },
  { sNo: 4, name: "Mrs. K. Sangavi B.Tech.", desig: "Aptitude trainer - CDT", email: "skcdt@kiot.ac.in", image: imgSangavi },
  { sNo: 5, name: "Mrs. K. Krishnapriya M.A., B.Ed.", desig: "Communication Trainer", email: "kkcdt@kiot.ac.in", image: imgKrishnapriya },
  { sNo: 6, name: "Mrs. M. Hemalatha M.A., NET.,", desig: "Assistant Professor / EEE-S&H", resp: "Communication Trainer", email: "mheng@kiot.ac.in", image: imgHemalatha },
  { sNo: 7, name: "Mr. S. Veerakumar B.E., M.E.", desig: "Assistant Professor / ECE", resp: "Training Coordinator / ECE", email: "svkece@kiot.ac.in", image: imgVeerakumar },
  { sNo: 8, name: "Mrs. M. Saranya B.E., M.E.", desig: "Assistant Professor / CSE", resp: "Training Coordinator / CSE", email: "msarcse@kiot.ac.in", image: imgSaranya },
  { sNo: 9, name: "Mr. R. Kathiresan B.E., M.E.", desig: "Assistant Professor / EEE", resp: "Training Coordinator / EEE", email: "rkeee@kiot.ac.in", image: imgKathiresan },
  { sNo: 10, name: "Mr. S. Surendar B.E., M.E.", desig: "Assistant Professor / MECH", resp: "Training Coordinator / MECH", email: "ssumech@kiot.ac.in", image: imgSurendar },
  { sNo: 11, name: "Mrs. M. Rubigha B.E., M.E.", desig: "Assistant Professor / IT", resp: "Training Coordinator / IT", email: "mrit@kiot.ac.in", image: imgRubigha },
  { sNo: 13, name: "Mrs. R. Yudhayapriya B.E., M.E.", desig: "Assistant Professor / CSBS", resp: "Training Coordinator / CSBS", email: "krcsbs@kiot.ac.in", image: imgYudhayapriya },
  { sNo: 14, name: "Mr. B. Gunasekar B.E., M.E.", desig: "Assistant Professor / AI&DS", resp: "Training Coordinator / AI&DS", email: "bgaids@kiot.ac.in", image: imgGunasekar },
  { sNo: 15, name: "Mrs. P. Mahalakshmi M.A.", desig: "Programmer", resp: "Administrative Support", email: "toa@kiot.ac.in", image: imgMahalakshmi },
  { sNo: 16, name: "Mrs. B. Sudha M.Sc., M.Ed.", desig: "Junior Assistant", resp: "Administrative Support", email: "cdtdeo@kiot.ac.in", image: imgSudha }
];

const TrainingTeamSection = () => {
  return (
    <div className="max-w-7xl mx-auto px-6 mb-24 font-graphik">
      <div className="flex flex-col mb-12">
        <h2 className="text-4xl md:text-5xl font-black text-[#224292] tracking-tighter leading-tight">
          Dedicated <span className="text-[#ffc107]">Training Team</span>
        </h2>
      </div>

      {/* Desktop view: Table Design */}
      <motion.div 
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="hidden md:block bg-white rounded-[2rem] overflow-hidden shadow-2xl shadow-black/[0.03] border border-slate-100"
      >
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-[#224292] text-white">
              <th className="px-8 py-6 text-[14px] font-black tracking-tight">Faculty</th>
              <th className="px-8 py-6 text-[14px] font-black tracking-tight">Role & Responsibility</th>
              <th className="px-8 py-6 text-[14px] font-black tracking-tight">Contact Details</th>
            </tr>
          </thead>
          <tbody>
            {trainingTeam.map((member, idx) => (
              <tr 
                key={idx} 
                className={`group transition-all duration-300 ${idx % 2 === 0 ? 'bg-slate-50/50' : 'bg-white'} hover:bg-[#ffc107]/5`}
              >
                <td className="px-8 py-5">
                  <div className="flex items-center gap-5">
                    <div className="relative h-20 w-16 shrink-0 overflow-hidden rounded-2xl border-2 border-slate-100 group-hover:border-[#ffc107] transition-all duration-500 bg-white shadow-sm">
                      {member.image ? (
                        <img src={member.image} alt={member.name} className="h-full w-full object-cover object-top" />
                      ) : (
                        <div className="h-full w-full flex items-center justify-center bg-slate-50 text-slate-300 uppercase font-black text-[10px]">
                           {member.desig.charAt(0)}
                        </div>
                      )}
                    </div>
                    <div>
                      <div className="font-black text-black text-[14px] tracking-tight leading-tight mb-1 group-hover:text-[#224292] transition-colors">{member.name}</div>
                      <div className="text-[#224292] text-[13px] font-bold tracking-tight">{member.desig}</div>
                    </div>
                  </div>
                </td>
                <td className="px-8 py-5">
                   <div className="flex items-center gap-2">
                      <Award size={14} className="text-[#ffc107]" />
                      <span className="text-black font-bold text-[13px] tracking-tight">{member.resp || "CDT Trainer"}</span>
                   </div>
                </td>
                <td className="px-8 py-5">
                   <div className="space-y-1">
                      <div className="flex items-center gap-2 text-black transition-colors">
                         <Mail size={12} />
                         <span className="text-[13px] font-bold">{member.email}</span>
                      </div>
                      {member.phone && (
                         <div className="text-[13px] font-bold text-black tracking-tight ml-5">{member.phone}</div>
                      )}
                   </div>
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
            <div className="w-24 h-24 rounded-[2rem] overflow-hidden border-4 border-white shadow-lg mb-4 group-hover:rotate-3 transition-transform duration-500 bg-slate-50">
              {member.image ? (
                <img src={member.image} alt={member.name} className="w-full h-full object-cover object-top" />
              ) : (
                <div className="w-full h-full flex items-center justify-center text-slate-300 font-black text-2xl uppercase">
                  {member.desig.charAt(0)}
                </div>
              )}
            </div>
            <h3 className="text-lg font-black text-black leading-tight mb-1">{member.name}</h3>
            <p className="text-[#224292] text-[10px] font-black uppercase tracking-widest mb-4">{member.desig}</p>
            <div className="w-full pt-4 border-t border-slate-50 flex flex-col items-center gap-2">
               <span className="text-[11px] font-black text-black tracking-tight">{member.resp || "CDT Trainer"}</span>
               <p className="text-[11px] font-bold text-black">{member.email}</p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* CDE Banner Image */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="mt-12"
      >
        <img
          src={cdeLast}
          alt="CDE Training Program"
          className="w-full rounded-[2rem] shadow-2xl shadow-black/10 border border-slate-100 object-cover"
        />
      </motion.div>
    </div>
  )
}

export default TrainingTeamSection
