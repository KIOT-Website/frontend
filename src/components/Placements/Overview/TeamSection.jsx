import React from 'react'
import { motion } from 'framer-motion'
import { Users, Mail, Phone, ShieldCheck } from 'lucide-react'

// Image Imports
import imgRajendran from '../../../assets/placement team/Placement-Director.webp'
import imgBalachandran from '../../../assets/placement team/Balachandran B.Sc.,M.A.,.webp'
import imgRajesh from '../../../assets/placement team/Mr.I.Rajesh M.E.,Ph.D.webp'
import imgAvila from '../../../assets/placement team/Ms Avila Edward M.A., M.Phil.,.webp'
import imgAndril from '../../../assets/placement team/Mrs.Andril Alagusabai M.E.,(Ph.D).webp'
import imgKaalijoothi from '../../../assets/placement team/Mrs. S.J. Kaalijoothi M.A., M.Phil.,.webp'
import imgSuresh from '../../../assets/placement team/Dr.S. Suresh Balaji B.E., M.E., Ph.D.,.webp'
import imgPremkumar from '../../../assets/placement team/Mr.S.Premkumar B.E., M.E., (Ph.D.).,.webp'
import imgDhinesh from '../../../assets/placement team/Mr. B. Dhinesh B.E., M.E.,(Ph.D).webp'
import imgElavarasan from '../../../assets/placement team/Mr. R. Elavarasan B.E.,M.E..webp'
import imgVenkatraman from '../../../assets/placement team/Mr.R. Venkatraman B.E.,M.E.,.webp'
import imgRanjith from '../../../assets/placement team/Mr. M.Ranjith Kumar B.E.,M.E.,.webp'
import imgJayaprakash from '../../../assets/placement team/Mr. S. Jayaprakash B.E., M.E.,.webp'
import imgNaresh from '../../../assets/placement team/Mr. P.NareshkumarB.E.,M.E.,.webp'
import imgBhuvaneswaran from '../../../assets/placement team/Mr.T.Bhuvaneswaran B.E.,M.E..webp'
import imgMusthaffa from '../../../assets/placement team/Mr.A.Musthaffa, MBA., M.Phil..webp'
import imgImmanuel from '../../../assets/placement team/Dr.D.Immanuel, MBA., Ph.D..webp'
import imgPadmanaban from '../../../assets/placement team/Prof.G.Padmanaban, MBA., (PhD),.webp'
import imgSumathi from '../../../assets/placement team/Mrs. P.Sumathi B.A.,.webp'
import imgRuthrakumar from '../../../assets/placement team/Mr. S. RUTHRAKUMAR B.E.,.webp'
import imgMonisha from '../../../assets/placement team/Ms. D.Monisha, M.Sc.,.webp'

const teamMembers = [
  { name: "Dr. P. Rajendran M.E., Ph.D.", desig: "Professor / CSE", resp: "Director – Placement & III", email: "pat@kiot.ac.in", phone: "+91 99941 33333", image: imgRajendran },
  { name: "Mr. N.C. Balachandran B.Sc., M.A.", desig: "Director - External Industry Relations (Core Industry)", resp: "Director", email: "scpat@kiot.ac.in", phone: "", image: imgBalachandran },
  { name: "Mr. I. Rajesh M.E., Ph.D.", desig: "Associate Professor / CSE", resp: "Industry Relation Manager", email: "po.cse@kiot.ac.in", phone: "98947 90284", image: imgRajesh },
  { name: "Ms Avila Edward M.A., M.Phil.", desig: "Industry Relationship Manager", resp: "Industry Relationship Manager", email: "industryrelations@kiot.ac.in", phone: "90039 10009", image: imgAvila },
  { name: "Mrs. Andril Alagusabai M.E., (Ph.D)", desig: "Assistant Professor / EEE", resp: "Manager - Corporate Relations", email: "crmpat@kiot.ac.in", phone: "97900 61616", image: imgAndril },
  { name: "Mrs. S.J. Kaalijoothi M.A., M.Phil.", desig: "Assistant Professor / ENGLISH", resp: "Manager - Corporate Relations", email: "placementcell@kiot.ac.in", phone: "97900 61616", image: imgKaalijoothi },
  { name: "Dr. S. Suresh Balaji B.E., M.E., Ph.D.", desig: "Assistant Professor / MECH", resp: "Placement Manager / MECH", email: "po.mech@kiot.ac.in", phone: "98427 75097", image: imgSuresh },
  { name: "Mr. S. Premkumar B.E., M.E., (Ph.D.)", desig: "Assistant Professor / ECE", resp: "Placement Coordinator / ECE", email: "po.ece@kiot.ac.in", phone: "99940 09788", image: imgPremkumar },
  { name: "Mr. B. Dhinesh B.E., M.E., (Ph.D)", desig: "Assistant Professor / EEE", resp: "Placement Manager / EEE", email: "po.eee@kiot.ac.in", phone: "82372 17971", image: imgDhinesh },
  { name: "Mr. R. Elavarasan B.E., M.E.", desig: "Assistant Professor / CIVIL", resp: "Placement Coordinator / CIVIL", email: "po.civil@kiot.ac.in", phone: "97870 77997", image: imgElavarasan },
  { name: "Mr. R. Venkatraman B.E., M.E.", desig: "Assistant Professor / MECH", resp: "Placement Manager / MECH", email: "po.mech@kiot.ac.in", phone: "99949 54277", image: imgVenkatraman },
  { name: "Mr. M. Ranjith Kumar B.E., M.E.", desig: "Assistant Professor / CSBS", resp: "Placement Manager / CSBS", email: "po.csbs@kiot.ac.in", phone: "99526 05627", image: imgRanjith },
  { name: "Mr. S. Jayaprakash B.E., M.E.", desig: "Assistant Professor / AI&DS", resp: "Placement Manager / AI&DS", email: "po.ai&ds@kiot.ac.in", phone: "99440 30114", image: imgJayaprakash },
  { name: "Mr. P. Nareshkumar B.E., M.E.", desig: "Assistant Professor / CSE", resp: "Placement Manager / CSE", email: "po.cse@kiot.ac.in", phone: "80725 38366", image: imgNaresh },
  { name: "Mr. T. Bhuvaneswaran B.E., M.E.", desig: "Assistant Professor / IT", resp: "Placement Manager / IT", email: "po.it@kiot.ac.in", phone: "99650 26270", image: imgBhuvaneswaran },
  { name: "Mr. A. Musthaffa MBA., M.Phil.", desig: "Assistant Professor / MBA", resp: "Placement Manager / MBA", email: "po.kbss@kiot.ac.in", phone: "81108 90181", image: imgMusthaffa },
  { name: "Dr. D. Immanuel MBA., Ph.D.", desig: "Professor / MBA", resp: "Senior Manager - Placement & IR", email: "kbssplacement@kiot.ac.in", phone: "76392 45777", image: imgImmanuel },
  { name: "Prof. G. Padmanaban MBA., (PhD)", desig: "Assistant Professor / MBA", resp: "Manager - Placement & IR", email: "kbssplacement@kiot.ac.in", phone: "88256 21808", image: imgPadmanaban },
  { name: "Mrs. P. Sumathi B.A.", desig: "Junior Assistant", resp: "Administration", email: "patoa@kiot.ac.in", phone: "", image: imgSumathi },
  { name: "Mr. S. RUTHRAKUMAR B.E.", desig: "Placement Executive", resp: "Executive", email: "campus1@kiot.ac.in", phone: "", image: imgRuthrakumar },
  { name: "Ms. D. Monisha M.Sc.", desig: "Junior Assistant", resp: "Administration", email: "patoa@kiot.ac.in", phone: "", image: imgMonisha }
];

const TeamSection = () => {
  return (
    <div className="mb-20">
       <div className="flex flex-col items-center mb-16">
          <h2 className="text-2xl font-black text-[#18357a] flex items-center justify-center gap-4 uppercase tracking-tight">
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
                <tr className="bg-[#18357a] text-white">
                   <th className="px-8 py-5 text-sm font-bold uppercase tracking-widest">Name & Designation</th>
                   <th className="px-8 py-5 text-sm font-bold uppercase tracking-widest">Responsibility</th>
                   <th className="px-8 py-5 text-sm font-bold uppercase tracking-widest text-right">Contact Info</th>
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
                           <div className="relative h-[60px] w-[60px] shrink-0 overflow-hidden rounded-xl border-2 border-[#18357a]/10 group-hover:border-[#ffc107] transition-all duration-500 bg-white flex items-center justify-center shadow-sm">
                              {member.image ? (
                                <img src={member.image} alt={member.name} className="h-full w-full object-contain" />
                              ) : (
                                <Users className="text-[#18357a]/20" size={28} />
                              )}
                           </div>
                           <div>
                              <div className="font-bold text-black group-hover:text-[#18357a] transition-colors text-[15px]">{member.name}</div>
                              <div className="text-[#64779F] text-[11px] font-semibold uppercase tracking-wider mt-0.5">{member.desig}</div>
                           </div>
                        </div>
                     </td>
                     <td className="px-8 py-4">
                        <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-lg bg-white text-[#18357a] text-[10px] font-bold uppercase tracking-wide border border-slate-200 group-hover:bg-[#18357a] group-hover:text-white transition-all shadow-sm">
                           <ShieldCheck size={12} />
                           {member.resp}
                        </span>
                     </td>
                     <td className="px-8 py-4">
                        <div className="flex flex-col items-end gap-1">
                           {member.email && (
                             <a href={`mailto:${member.email}`} className="flex items-center gap-2 text-black/60 hover:text-[#ffc107] text-[12px] font-semibold transition-colors">
                                <Mail size={13} />
                                {member.email}
                             </a>
                           )}
                           {member.phone && (
                             <a href={`tel:${member.phone.replace(/\s+/g, '')}`} className="flex items-center gap-2 text-black font-bold text-[12px] transition-colors">
                                <Phone size={13} className="text-[#ffc107]" />
                                {member.phone}
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
                   <div className="h-28 w-28 shrink-0 overflow-hidden rounded-3xl border-2 border-[#18357a]/10 bg-white flex items-center justify-center text-[#18357a]/20 shadow-sm">
                      {member.image ? (
                        <img src={member.image} alt={member.name} className="h-full w-full object-contain" />
                      ) : (
                        <Users size={32} />
                      )}
                   </div>
                   
                   <div className="space-y-2">
                      <div className="text-xl font-black text-[#18357a] leading-tight px-2">{member.name}</div>
                      <div className="text-[#64779F] text-[11px] font-bold uppercase tracking-wider">{member.desig}</div>
                      <div className="pt-2">
                         <span className="text-[10px] font-black uppercase tracking-widest text-[#ffc107] px-4 py-1.5 bg-[#18357a] rounded-lg shadow-md inline-block">
                           {member.resp}
                         </span>
                      </div>
                   </div>
                </div>

                <div className="w-full pt-6 border-t border-[#D5E2F4]/50 flex flex-col items-center gap-4">
                   {member.email && (
                     <a href={`mailto:${member.email}`} className="flex items-center gap-3 text-[#64779F] text-[13px] font-bold hover:text-[#ffc107] transition-colors">
                        <Mail size={16} className="text-[#18357a]" />
                        {member.email}
                     </a>
                   )}
                   {member.phone && (
                     <a href={`tel:${member.phone.replace(/\s+/g, '')}`} className="flex items-center gap-3 text-[#18357a] text-[13px] font-black hover:text-[#ffc107] transition-colors">
                        <Phone size={16} className="text-[#ffc107]" />
                        {member.phone}
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
