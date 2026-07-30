import React from 'react'
import { motion } from 'framer-motion'
import { Users, Mail, Phone, ShieldCheck } from 'lucide-react'

// Image Imports
import imgRajendran from '../../../assets/placements/placement team/Placement-Director.webp'
import imgBalachandran from '../../../assets/placements/placement team/Balachandran B.Sc.,M.A.,.webp'
import imgRajesh from '../../../assets/placements/placement team/Mr.I.Rajesh M.E.,Ph.D.webp'
import imgAvila from '../../../assets/placements/placement team/Ms Avila Edward M.A., M.Phil.,.webp'
import imgAndril from '../../../assets/placements/placement team/Mrs.Andril Alagusabai M.E.,(Ph.D).webp'
import imgKaalijoothi from '../../../assets/placements/placement team/Mrs. S.J. Kaalijoothi M.A., M.Phil.,.webp'
import imgSuresh from '../../../assets/placements/placement team/Dr.S. Suresh Balaji B.E., M.E., Ph.D.,.webp'
import imgPremkumar from '../../../assets/placements/placement team/Mr.S.Premkumar B.E., M.E., (Ph.D.).,.webp'
import imgDhinesh from '../../../assets/placements/placement team/Mr. B. Dhinesh B.E., M.E.,(Ph.D).webp'
import imgElavarasan from '../../../assets/placements/placement team/Mr. R. Elavarasan B.E.,M.E..webp'
import imgVenkatraman from '../../../assets/placements/placement team/Mr.R. Venkatraman B.E.,M.E.,.webp'
import imgRanjith from '../../../assets/placements/placement team/Mr. M.Ranjith Kumar B.E.,M.E.,.webp'
import imgJayaprakash from '../../../assets/placements/placement team/Mr. S. Jayaprakash B.E., M.E.,.webp'
import imgNaresh from '../../../assets/placements/placement team/Mr. P.NareshkumarB.E.,M.E.,.webp'
import imgBhuvaneswaran from '../../../assets/placements/placement team/Mr.T.Bhuvaneswaran B.E.,M.E..webp'
import imgMusthaffa from '../../../assets/placements/placement team/Mr.A.Musthaffa, MBA., M.Phil..webp'
import imgImmanuel from '../../../assets/placements/placement team/Dr.D.Immanuel, MBA., Ph.D..webp'
import imgPadmanaban from '../../../assets/placements/placement team/Prof.G.Padmanaban, MBA., (PhD),.webp'
import imgSumathi from '../../../assets/placements/placement team/Mrs. P.Sumathi B.A.,.webp'
import imgRuthrakumar from '../../../assets/placements/placement team/Mr. S. RUTHRAKUMAR B.E.,.webp'
import imgMonisha from '../../../assets/placements/placement team/Ms. D.Monisha, M.Sc.,.webp'

const teamMembers = [
  { name: "Dr. P. Rajendran M.E., Ph.D.", desig: "Professor / CSE", resp: "Director – Placement & IR", email: "pat@kiot.ac.in", phone: "+91 99941 33333", image: imgRajendran },
  { name: "Mr. N.C. Balachandran B.Sc., M.A.", desig: "Director - External Industry Relations (Core Industry)", resp: "Director - External Industry Relations", email: "scpat@kiot.ac.in", phone: "", image: imgBalachandran },
  { name: "Dr. I. Rajesh M.E., Ph.D.", desig: "Associate Professor / CSE", resp: "Deputy Director - Placement & IR", email: "ddpat@kiot.ac.in", phone: "96003 39332", image: imgRajesh },
  { name: "Ms. Avila Edward M.A., M.Phil.", desig: "Industry Relationship Manager", resp: "Industry Relationship Manager", email: "industryrelations@kiot.ac.in", phone: "90039 10009", image: imgAvila },
  { name: "Mrs. Andril Alagusabai M.E., (Ph.D)", desig: "Assistant Professor / EEE", resp: "Manager - Corporate Relations", email: "crmpat@kiot.ac.in", phone: "97900 61616", image: imgAndril },
  { name: "Mr. B. Dhinesh B.E., M.E., (Ph.D)", desig: "Assistant Professor / EEE", resp: "Industry Relation Manager", email: "irpat@kiot.ac.in", phone: "82372 17971", image: imgDhinesh },
  { name: "Mrs. S.J. Kaalijoothi M.A., M.Phil.", desig: "Assistant Professor / ENGLISH", resp: "Overall Placement Manager", email: "placementcell@kiot.ac.in", phone: "93429 75269", image: imgKaalijoothi },
  { name: "Dr. S. Suresh Balaji M.E., Ph.D.", desig: "Assistant Professor / MECH", resp: "Placement Manager / MECH", email: "po.mech@kiot.ac.in", phone: "98427 75097", image: imgSuresh },
  { name: "Mr. R. Elavarasan B.E., M.E.", desig: "Assistant Professor / CIVIL", resp: "Placement Manager / CIVIL", email: "po.civil@kiot.ac.in", phone: "98949 73393", image: imgElavarasan },
  { name: "Mr. R. Venkatraman B.E., M.E.", desig: "Assistant Professor / MECH", resp: "Placement Manager / MECH", email: "po.mech@kiot.ac.in", phone: "99949 54277", image: imgVenkatraman },
  { name: "Mr. S. Premkumar B.E., M.E.", desig: "Assistant Professor / ECE", resp: "Placement Manager / ECE", email: "po.ece@kiot.ac.in", phone: "99940 09788", image: imgPremkumar },
  { name: "Mr. M. Ranjith Kumar B.E., M.E.", desig: "Assistant Professor / CSBS", resp: "Placement Manager/ CSBS", email: "po.csbs@kiot.ac.in", phone: "99526 05627", image: imgRanjith },
  { name: "Mr. T. Bhuvaneswaran B.E., M.E.", desig: "Assistant Professor / IT", resp: "Placement Manager / IT", email: "po.it@kiot.ac.in", phone: "99650 26270", image: imgBhuvaneswaran },
  { name: "Mr. S. Jayaprakash B.E., M.E.", desig: "Assistant Professor / AI&DS", resp: "Placement Manager / AI&DS", email: "po.ai&ds@kiot.ac.in", phone: "99440 30114", image: imgJayaprakash },
  { name: "Mr. P. Nareshkumar B.E., M.E.", desig: "Assistant Professor / CSE", resp: "Placement Manager / CSE", email: "po.cse@kiot.ac.in", phone: "80725 38366", image: imgNaresh },
  { name: "Mr. A. Musthaffa, MBA., M.Phil.", desig: "Assistant Professor / MBA", resp: "Placement Manager / MBA", email: "po.kbss@kiot.ac.in", phone: "81108 90181", image: imgMusthaffa },
  { name: "Dr. D. Immanuel, MBA., Ph.D.", desig: "Professor / MBA", resp: "Senior Manager - Placement & IR", email: "kbssplacement@kiot.ac.in", phone: "76392 45777", image: imgImmanuel },
  { name: "Prof. G. Padmanaban, MBA., (PhD)", desig: "Assistant Professor / MBA", resp: "Manager - Placement & IR", email: "kbssplacement@kiot.ac.in", phone: "88256 21808", image: imgPadmanaban },
  { name: "Mr. S. Ruthrakumar B.E.", desig: "Placement Executive", resp: "Placement Executive", email: "campus@kiot.ac.in", phone: "", image: imgRuthrakumar },
  { name: "Ms. D. Monisha, M.Sc.", desig: "Junior Assistant", resp: "Junior Assistant", email: "patoa@kiot.ac.in", phone: "", image: imgMonisha },
  { name: "Mrs. P. Sumathi B.A.", desig: "Office Assistant", resp: "Office Assistant", email: "patoa@kiot.ac.in", phone: "", image: imgSumathi }
];

const TeamSection = () => {
  return (
    <div className="mb-12">
       <div className="flex flex-col items-center mb-16">
          <h2 className="text-2xl font-semibold text-[#224292] flex items-center justify-center gap-4 tracking-tight">
            <Users size={28} className="text-[#ffc107]" />
            Placement Team
          </h2>
          <div className="w-16 h-1 bg-[#ffc107] mt-4 rounded-full" />
       </div>

       {/* Desktop view: Table */}
       <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="hidden md:block bg-white rounded-2xl overflow-hidden shadow-xl shadow-black/[0.04] border border-slate-200"
       >
          <table className="w-full text-left border-collapse">
             <thead>
                <tr className="bg-[#224292] text-white">
                   <th className="px-8 py-5 text-sm font-semibold uppercase tracking-widest">Name & Designation</th>
                   <th className="px-8 py-5 text-sm font-semibold uppercase tracking-widest">Responsibility</th>
                   <th className="px-8 py-5 text-sm font-semibold uppercase tracking-widest text-right">Contact Info</th>
                </tr>
             </thead>
             <tbody className="">
                {teamMembers.map((member, idx) => (
                  <tr 
                    key={idx} 
                    className={`group transition-colors ${idx % 2 === 0 ? 'bg-black/[0.02]' : 'bg-transparent'} hover:bg-[#ffc107]/5`}
                  >
                     <td className="px-8 py-4">
                        <div className="flex items-center gap-4">
                           <div className="relative h-[60px] w-[60px] shrink-0 overflow-hidden rounded-xl border-2 border-[#224292]/10 group-hover:border-[#ffc107] transition-all duration-500 bg-white flex items-center justify-center shadow-sm">
                              {member.image ? (
                                <img src={member.image} alt={member.name} className="h-full w-full object-contain" />
                              ) : (
                                <Users className="text-[#224292]/20" size={28} />
                              )}
                           </div>
                           <div>
                              <div className="font-semibold text-black group-hover:text-[#224292] transition-colors text-[15px]">{member.name}</div>
                              <div className="text-[#224292] text-[11px] font-medium tracking-wider mt-0.5">{member.desig}</div>
                           </div>
                        </div>
                     </td>
                     <td className="px-8 py-4">
                        <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-lg bg-white text-[#224292] text-[10px] font-semibold tracking-wide border border-slate-200 group-hover:bg-[#224292] group-hover:text-white transition-all shadow-sm">
                           <ShieldCheck size={12} />
                           {member.resp}
                        </span>
                     </td>
                     <td className="px-8 py-4">
                        <div className="flex flex-col items-end gap-1">
                           {member.email && (
                             <a href={`mailto:${member.email}`} className="flex items-center gap-2 text-black/60 hover:text-[#ffc107] text-[12px] font-normal transition-colors">
                                <Mail size={13} />
                                {member.email}
                             </a>
                           )}
                        </div>
                     </td>
                  </tr>
                ))}
             </tbody>
          </table>
       </motion.div>

       {/* Mobile view: Cards */}
       <div className="md:hidden space-y-6">
          {teamMembers.map((member, idx) => (
             <motion.div 
                key={idx}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="bg-white rounded-3xl p-8 shadow-[0_20px_50px_rgba(24,53,122,0.04)] border border-[#D5E2F4]/50 flex flex-col items-center text-center space-y-6"
             >
                <div className="flex flex-col items-center space-y-4">
                   <div className="h-28 w-28 shrink-0 overflow-hidden rounded-3xl border-2 border-[#224292]/10 bg-white flex items-center justify-center text-[#224292]/20 shadow-sm">
                      {member.image ? (
                        <img src={member.image} alt={member.name} className="h-full w-full object-contain" />
                      ) : (
                        <Users size={32} />
                      )}
                   </div>
                   
                   <div className="space-y-2">
                      <div className="text-xl font-semibold text-[#224292] leading-tight px-2">{member.name}</div>
                      <div className="text-[#224292] text-[11px] font-semibold tracking-wider">{member.desig}</div>
                      <div className="pt-2">
                         <span className="text-[10px] font-semibold tracking-widest text-[#ffc107] px-4 py-1.5 bg-[#224292] rounded-lg shadow-md inline-block">
                           {member.resp}
                         </span>
                      </div>
                   </div>
                </div>

                <div className="w-full pt-6 border-t border-[#D5E2F4]/50 flex flex-col items-center gap-4">
                   {member.email && (
                     <a href={`mailto:${member.email}`} className="flex items-center gap-3 text-[#64779F] text-[13px] font-semibold hover:text-[#ffc107] transition-colors">
                        <Mail size={16} className="text-[#224292]" />
                        {member.email}
                     </a>
                   )}
                </div>
             </motion.div>
          ))}
       </div>
    </div>
  )
}

export default TeamSection
