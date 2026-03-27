import React from 'react'
import { motion } from 'framer-motion'
import { GraduationCap, Code, MessageCircle, Lightbulb, Users as UsersIcon, ShieldCheck, Heart, PieChart, Briefcase, Globe } from 'lucide-react'

// Training Team Images Imports
import imgThangavel from '../../assets/trainning team/Dr.M.Thangavel B.E., M.E., M.B.A., Ph.D.,.webp'
import imgSakthivel from '../../assets/trainning team/Dr.M.Sakthivel B.E., M.E., Ph.D.,.webp'
import imgVeerakumar from '../../assets/trainning team/Mr.S.Veerakumar B.E.,M.E.,.webp'
import imgSaranya from '../../assets/trainning team/Mrs. M. SARANYA B.E.,M.E..webp'
import imgKathiresan from '../../assets/trainning team/Mr.R.Kathiresan B.E.,M.E.,.webp'
import imgKarthikeyan from '../../assets/trainning team/Prof. P. Karthikeyan B.E., M.E.,(Ph.D) MISTE..webp'
import imgRubigha from '../../assets/trainning team/Mrs.M.Rubigha B.E., M.E.,.webp'
import imgKrishnan from '../../assets/trainning team/Mr.L.Krishnan B.E.,M.E.,.webp'
import imgYudhayapriya from '../../assets/trainning team/Mrs.R.Yudhayapriya B.E.,M.E.,.webp'
import imgGunasekar from '../../assets/trainning team/Mr.B.Gunasekar B.E.,M.E.,.webp'
import imgMahalakshmi from '../../assets/trainning team/Mrs.P.Mahalakshmi M.A.,.webp'
import imgSudha from '../../assets/trainning team/Mrs. B.Sudha M.Sc.,M.Ed.,.webp'

const TrainingOverview = () => {
  const employabilitySkills = [
    { title: "Communication", desc: "Spoken and written English proficiency, business communication, and professional etiquette.", icon: MessageCircle },
    { title: "Problem Solving", desc: "Aptitude, logical reasoning, and data interpretation for industry assessments.", icon: TargetIcon },
    { title: "Programming", desc: "C, Python, Java, and Data Structures with industry-focused coding practice.", icon: Code },
    { title: "Group Discussions", desc: "Critical thinking, articulation, team communication, and idea defense.", icon: UsersIcon },
    { title: "Interviews", desc: "Mock HR & technical interviews focusing on confidence, body language, and clarity.", icon: Briefcase }
  ];

  const lifeSkills = [
    { title: "Soft Skills", desc: "Confidence, adaptability, emotional intelligence, and stress management techniques.", icon: Heart },
    { title: "Values & Ethics", desc: "Professional responsibility, integrity, and social awareness.", icon: ShieldCheck },
    { title: "Interpersonal Skills", desc: "Teamwork, relationship building, and conflict resolution.", icon: UsersIcon },
    { title: "Entrepreneurship", desc: "Leadership, decision-making, innovation, and business thinking.", icon: Lightbulb },
    { title: "Financial Literacy", desc: "Basics of savings, investments, and personal financial discipline.", icon: PieChart }
  ];

  const trainingTeam = [
    { name: "Dr. M. Thangavel B.E., M.E., M.B.A., Ph.D.", desig: "Professor / ECE", resp: "Director (C-CDT)", email: "directorcdt@kiot.ac.in", image: imgThangavel },
    { name: "Dr. M. Sakthivel B.E., M.E., Ph.D.", desig: "Associate Professor / CSE", resp: "Deputy Director (C-CDT)", email: "ddcdt@kiot.ac.in", image: imgSakthivel },
    { name: "Mr. S. Veerakumar B.E., M.E.", desig: "Assistant Professor / ECE", resp: "Training Coordinator / ECE", email: "svkece@kiot.ac.in", image: imgVeerakumar },
    { name: "Mrs. M. Saranya B.E., M.E.", desig: "Assistant Professor / CSE", resp: "Training Coordinator / CSE", email: "msarcse@kiot.ac.in", image: imgSaranya },
    { name: "Mr. R. Kathiresan B.E., M.E.", desig: "Assistant Professor / EEE", resp: "Training Coordinator / EEE", email: "rkeee@kiot.ac.in", image: imgKathiresan },
    { name: "Prof. P. Karthikeyan B.E., M.E., (Ph.D) MISTE.", desig: "Assistant Professor / MECH", resp: "Training Coordinator / MECH", email: "pkmech@kiot.ac.in", image: imgKarthikeyan },
    { name: "Mrs. M. Rubigha B.E., M.E.", desig: "Assistant Professor / IT", resp: "Training Coordinator / IT", email: "mrit@kiot.ac.in", image: imgRubigha },
    { name: "Mr. L. Krishnan B.E., M.E.", desig: "Assistant Professor / CIVIL", resp: "Training Coordinator / CIVIL", email: "lkcivil@gmail.com", image: imgKrishnan },
    { name: "Mrs. R. Yudhayapriya B.E., M.E.", desig: "Assistant Professor / CSBS", resp: "Training Coordinator / CSBS", email: "krcsbs@kiot.ac.in", image: imgYudhayapriya },
    { name: "Mr. B. Gunasekar B.E., M.E.", desig: "Assistant Professor / AI&DS", resp: "Training Coordinator / AI&DS", email: "bgaids@kiot.ac.in", image: imgGunasekar },
    { name: "Mrs. P. Mahalakshmi M.A.", desig: "Programmer", resp: "Programmer", email: "toa@kiot.ac.in", image: imgMahalakshmi },
    { name: "Mrs. B. Sudha M.Sc., M.Ed.", desig: "Junior Assistant", resp: "Administration", email: "cdtdeo@kiot.ac.in", image: imgSudha }
  ];

  return (
    <div className="relative bg-white pt-16 pb-20 min-h-screen overflow-hidden">
      
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-bl from-[#18357a]/5 to-transparent rounded-bl-full pointer-events-none" />
      
      <section className="relative px-6 sm:px-10 lg:px-20 z-10 max-w-7xl mx-auto">
        
        {/* Header Section */}
        <div className="text-center mb-12">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2.5 px-6 py-2.5 rounded-full bg-white border border-[#D5E2F4]/80 shadow-sm mb-8">
               <span className="text-sm font-black text-[#18357a] uppercase tracking-[0.2em]">Institutional Excellence</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-[3.5rem] font-black text-[#18357a] mb-8 tracking-tighter leading-[1.1]">
              Career Development <br className="hidden md:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#18357a] via-[#224292] to-[#ffc107] uppercase inline-block mt-2">& Training</span>
            </h1>
            
            <h2 className="text-xl md:text-2xl font-black text-[#64779F] mb-10 uppercase tracking-widest">
              Centre for Career Development and Training (CDT)
            </h2>
            
            <div className="max-w-4xl mx-auto p-8 rounded-[2.5rem] bg-white border-2 border-transparent border-l-4 border-l-[#ffc107] shadow-xl relative mt-4 hover:border-[#ffc107] transition-all duration-500 group">
              <p className="text-[#64779F] font-bold text-sm md:text-base leading-relaxed text-left italic">
                At Knowledge Institute of Technology (KIOT), Salem, the Centre for Career Development and Training focuses on building capable professionals through a structured and progressive learning journey. The program integrates employability skills and life skills, ensuring students are prepared not only for placements, but for long-term success.
              </p>
            </div>
          </motion.div>
        </div>

        {/* 1200+ Hours Highlight */}
        <div className="mb-20 text-center py-12 relative">
           <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#18357a]/5 to-transparent skew-y-1" />
           <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="relative"
           >
              <div className="text-5xl md:text-7xl font-black text-[#18357a] mb-4 tracking-tighter">
                 1200<span className="text-[#ffc107]">+</span>
              </div>
              <div className="text-xl md:text-2xl font-black text-[#64779F] uppercase tracking-[0.3em]">
                 Hours of Training
              </div>
              <p className="mt-8 text-[#64779F] font-bold text-lg max-w-2xl mx-auto">
                 A Structured Learning Journey across four years — building confidence, competence, and clarity in your career path.
              </p>
           </motion.div>
        </div>

        {/* Two Core Tracks Section (Split Layout) */}
        <div className="mb-24">
           <div className="flex flex-col items-center mb-16">
              <h2 className="text-3xl font-black text-[#18357a] flex items-center justify-center gap-4 uppercase tracking-tight">
                <TargetIcon size={32} className="text-[#ffc107]" />
                Two Core Tracks
              </h2>
              <div className="w-16 h-1 bg-[#ffc107] mt-4 rounded-full" />
           </div>

           <div className="grid lg:grid-cols-2 gap-20 lg:gap-32 items-start max-w-6xl mx-auto mb-20">
              
              {/* Track 01: Employability Skills */}
              <motion.div 
                 initial={{ opacity: 0, x: -30 }}
                 whileInView={{ opacity: 1, x: 0 }}
                 viewport={{ once: true }}
                 transition={{ duration: 0.8 }}
              >
                 <div className="flex flex-col items-center mb-16">
                    <h3 className="text-2xl font-black text-[#18357a] uppercase tracking-tight text-center">Employability Skills</h3>
                    <p className="text-[#ffc107] font-bold uppercase tracking-widest text-[10px] mt-1 text-center">Academics to Industry</p>
                 </div>

                 <div className="space-y-16">
                    {[
                      { title: "Communication", items: ["Spoken and written English proficiency", "Business communication & presentations", "Professional etiquette"], icon: MessageCircle },
                      { title: "Problem Solving", items: ["Aptitude, logical reasoning, data interpretation", "Analytical thinking for assessments"], icon: TargetIcon },
                      { title: "Programming", items: ["C, Python, Java, Data Structures", "Industry-focused coding practice"], icon: Code },
                      { title: "Group Discussions", items: ["Critical thinking and articulation", "Team communication and idea defense"], icon: UsersIcon },
                      { title: "Interviews", items: ["Mock HR & technical interviews", "Confidence, body language, and clarity"], icon: Briefcase }
                    ].map((skill, idx) => (
                      <div key={idx} className="group flex items-start gap-8 last:border-0 border-b border-[#D5E2F4]/40 pb-12">
                         <div className="w-12 h-12 shrink-0 rounded-2xl bg-[#18357a]/5 flex items-center justify-center text-[#18357a] group-hover:bg-[#18357a] group-hover:text-white transition-all duration-500">
                            <skill.icon size={22} className="group-hover:scale-110 transition-transform" />
                         </div>
                         <div>
                            <h4 className="text-xl font-black text-[#18357a] mb-4 uppercase tracking-tight group-hover:text-[#4666B4] transition-colors">
                               {skill.title}
                            </h4>
                            <ul className="space-y-2">
                               {skill.items.map((item, i) => (
                                 <li key={i} className="flex items-center gap-3 text-[#64779F] text-sm font-semibold italic">
                                    <div className="w-1.5 h-1.5 rounded-full bg-[#ffc107]" />
                                    {item}
                                 </li>
                               ))}
                            </ul>
                         </div>
                      </div>
                    ))}
                 </div>
              </motion.div>

              {/* Track 02: Life Skills */}
              <motion.div 
                 initial={{ opacity: 0, x: 30 }}
                 whileInView={{ opacity: 1, x: 0 }}
                 viewport={{ once: true }}
                 transition={{ duration: 0.8 }}
              >
                 <div className="flex flex-col items-center mb-16">
                    <h3 className="text-2xl font-black text-[#18357a] uppercase tracking-tight text-center">Life Skills</h3>
                    <p className="text-[#ffc107] font-bold uppercase tracking-widest text-[10px] mt-1 text-center">Growth & Adaptability</p>
                 </div>

                 <div className="space-y-16">
                    {[
                      { title: "Soft Skills", items: ["Confidence, adaptability, emotional intelligence", "Stress management techniques"], icon: Heart },
                      { title: "Values & Ethics", items: ["Professional responsibility and discipline", "Integrity and social awareness"], icon: ShieldCheck },
                      { title: "Interpersonal Skills", items: ["Teamwork and relationship building", "Conflict resolution and communication"], icon: UsersIcon },
                      { title: "Entrepreneurship", items: ["Leadership and decision-making", "Innovation and business thinking"], icon: Lightbulb },
                      { title: "Financial Literacy", items: ["Basics of savings and investments", "Personal financial discipline"], icon: PieChart }
                    ].map((skill, idx) => (
                      <div key={idx} className="group flex items-start gap-8 last:border-0 border-b border-[#D5E2F4]/40 pb-12">
                         <div className="w-12 h-12 shrink-0 rounded-2xl bg-[#18357a]/5 flex items-center justify-center text-[#18357a] group-hover:bg-[#ffc107] group-hover:text-[#18357a] transition-all duration-500">
                            <skill.icon size={22} className="group-hover:scale-110 transition-transform" />
                         </div>
                         <div>
                            <h4 className="text-xl font-black text-[#18357a] mb-4 uppercase tracking-tight group-hover:text-[#4666B4] transition-colors">
                               {skill.title}
                            </h4>
                            <ul className="space-y-2">
                               {skill.items.map((item, i) => (
                                 <li key={i} className="flex items-center gap-3 text-[#64779F] text-sm font-semibold italic">
                                    <div className="w-1.5 h-1.5 rounded-full bg-[#ffc107]" />
                                    {item}
                                 </li>
                               ))}
                            </ul>
                         </div>
                      </div>
                    ))}
                 </div>
              </motion.div>

           </div>
        </div>

        {/* Centre for Foreign Languages (CFL) Section */}
        <div className="mb-24">
           {/* Section Header */}
           <div className="flex flex-col items-center mb-16">
              <h2 className="text-3xl font-black text-[#18357a] flex items-center justify-center gap-4 uppercase tracking-tight">
                <Globe className="text-[#ffc107]" size={32} />
                Centre for Foreign Languages (CFL)
              </h2>
              <div className="w-16 h-1 bg-[#ffc107] mt-4 rounded-full" />
           </div>

           <div className="grid lg:grid-cols-2 gap-20 items-start max-w-7xl mx-auto">
              
              {/* Left Column: Narrative Content */}
              <motion.div
                 initial={{ opacity: 0, x: -30 }}
                 whileInView={{ opacity: 1, x: 0 }}
                 viewport={{ once: true }}
                 transition={{ duration: 0.8 }}
                 className="space-y-10"
              >
                 <div className="p-10 bg-[#18357a]/5 rounded-[2.5rem] border-l-8 border-[#ffc107] relative overflow-hidden">
                    <p className="text-[#64779F] text-lg font-semibold leading-relaxed relative z-10">
                       The Centre for Foreign Languages (CFL) has been functioning in the institution to offer certificate courses in foreign languages such as **Japanese and German** to the students of KIOT to help them qualify in international examination, get placements in Multinational National Companies and enable them to pursue higher studies in international universities.
                    </p>
                    <Globe size={180} className="absolute -bottom-10 -right-10 text-[#18357a]/5 z-0" />
                 </div>

                 <div className="space-y-8">
                    <h3 className="text-2xl font-black text-[#18357a] uppercase tracking-tight flex items-center gap-3">
                       <ShieldCheck className="text-[#ffc107]" size={26} />
                       Japanese Language Training
                    </h3>
                    
                    <div className="space-y-6">
                       <p className="text-[#64779F] font-medium leading-relaxed">
                          CFL of KIOT has been offering **N5, N4 & N3, Q5 & Q4** certificate courses in Japanese language since 2013. We have signed a Memorandum of Understanding (MOU) with **ABK AOTS DOSOKAI** (Erode Chapter). 
                       </p>
                       <p className="text-[#64779F] font-medium leading-relaxed">
                          The programmes are conducted by well-experienced and certified trainers from **India and Japan**. CFL also regularly invites native Japanese entrepreneurs and recruiters to create awareness about job opportunities.
                       </p>
                    </div>

                    <div className="p-6 bg-[#ffc107]/5 rounded-3xl border border-[#ffc107]/20">
                       <p className="text-[#18357a] text-sm font-bold leading-relaxed italic">
                          "Every year, more than 250 students successfully complete the certificate courses and qualify in N5, N4 & N3 examinations conducted by Japanese Foundation."
                       </p>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                       <div className="p-4 bg-[#18357a]/5 rounded-2xl border border-[#18357a]/10">
                          <div className="text-[#18357a] font-black text-xs uppercase tracking-widest mb-1">Partners</div>
                          <div className="text-[#64779F] text-[11px] font-bold">ABK AOTS DOSOKAI</div>
                       </div>
                       <div className="p-4 bg-[#18357a]/5 rounded-2xl border border-[#18357a]/10">
                          <div className="text-[#18357a] font-black text-xs uppercase tracking-widest mb-1">Certifications</div>
                          <div className="text-[#64779F] text-[11px] font-bold">N5, N4, N3, Q5, Q4</div>
                       </div>
                    </div>
                 </div>
              </motion.div>

              {/* Right Column: Data & Stats */}
              <motion.div
                 initial={{ opacity: 0, x: 30 }}
                 whileInView={{ opacity: 1, x: 0 }}
                 viewport={{ once: true }}
                 transition={{ duration: 0.8 }}
                 className="space-y-10"
              >
                 {/* Attendance Table (Now at Top) */}
                 <div className="bg-white rounded-[2.5rem] overflow-hidden shadow-[0_30px_70px_rgba(24,53,122,0.04)] border border-[#D5E2F4]/60">
                    <div className="bg-[#18357a] px-8 py-5 flex items-center justify-between">
                       <h4 className="text-white text-[11px] font-black uppercase tracking-[0.2em]">Attendance Record</h4>
                       <div className="text-[#ffc107] text-[10px] font-bold uppercase tracking-widest">CFL Training</div>
                    </div>
                    <table className="w-full text-left">
                       <tbody className="divide-y divide-[#D5E2F4]/40">
                          {[
                             { year: "2024-25", course: "Japanese Language Proficiency Training (N4, N5)", count: "151" },
                             { year: "2023-24", course: "Japanese Language Proficiency Training (N4, N5)", count: "130" },
                             { year: "2022-23", course: "Japanese Language Proficiency Training (N4, N5)", count: "110" },
                             { year: "2021-22", course: "Japanese Language Proficiency Training N5", count: "37" },
                             { year: "2020-21", course: "Japanese Language Proficiency Training N5", count: "101" },
                             { year: "2019-20", course: "Japanese Language Proficiency Training (N3, N4 & N5)", count: "162" },
                             { year: "2018-19", course: "Japanese Language Proficiency Training (N4 & N5)", count: "337" },
                             { year: "2017-18", course: "Japanese Language Proficiency Training (N4 & N5)", count: "111" },
                             { year: "2016-17", course: "Japanese Language Proficiency Training (N4 & N5)", count: "112" }
                          ].map((row, idx) => (
                             <tr key={idx} className="hover:bg-[#18357a]/[0.02] transition-colors">
                                <td className="px-8 py-4 font-black text-[#18357a] text-xs leading-none whitespace-nowrap pr-4">{row.year}</td>
                                <td className="px-8 py-4 text-[#64779F] text-[10px] font-bold uppercase tracking-wide">{row.course}</td>
                                <td className="px-8 py-4 text-right font-black text-[#ffc107] text-xs">{row.count}</td>
                             </tr>
                          ))}
                       </tbody>
                    </table>
                    <div className="bg-[#18357a]/5 px-8 py-4 text-center">
                       <span className="text-[#64779F] text-[10px] font-bold italic">Historical records maintained since 2013</span>
                    </div>
                 </div>

                 {/* Placement High-end Cards (Now below Table) */}
                 <div className="grid sm:grid-cols-2 gap-6">
                    <div className="bg-white p-8 rounded-[2rem] shadow-[0_20px_50px_rgba(24,53,122,0.06)] border border-[#D5E2F4]/50">
                       <div className="text-3xl font-black text-[#18357a] mb-2 tracking-tighter">₹18.5 LPA</div>
                       <div className="text-[#ffc107] font-bold uppercase tracking-[0.15em] text-[10px] mb-3">Highest Package</div>
                       <p className="text-[#64779F] text-[11px] font-semibold leading-relaxed">
                          Outsourcing Technologies, Japan (2020 Batch)
                       </p>
                    </div>
                    <div className="bg-[#18357a] p-8 rounded-[2rem] text-white">
                       <div className="text-3xl font-black mb-2 tracking-tighter">250+</div>
                       <div className="text-[#ffc107] font-bold uppercase tracking-[0.15em] text-[10px] mb-3">Certified Annually</div>
                       <p className="text-white/70 text-[11px] font-medium leading-relaxed">
                          Japanese Foundation & Senmonkyouiku Qualifiers
                       </p>
                    </div>
                 </div>

              </motion.div>
           </div>
        </div>

        {/* Training Team Section */}
        <div className="mb-12">
           <div className="flex flex-col items-center mb-16">
              <h2 className="text-2xl font-black text-[#18357a] flex items-center justify-center gap-4 uppercase tracking-tight">
                <UsersIcon size={28} className="text-[#ffc107]" />
                Training Team
              </h2>
              <div className="w-16 h-1 bg-[#ffc107] mt-4 rounded-full" />
           </div>

           {/* Desktop view: Table */}
           <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="hidden md:block bg-white rounded-[2.5rem] overflow-hidden shadow-[0_30px_80px_rgba(24,53,122,0.06)] border border-[#D5E2F4]/50"
           >
              <table className="w-full text-left border-collapse">
                 <thead>
                    <tr className="bg-[#18357a] text-white">
                       <th className="px-8 py-6 text-sm font-black uppercase tracking-widest">Name & Designation</th>
                       <th className="px-8 py-6 text-sm font-black uppercase tracking-widest">Responsibility</th>
                       <th className="px-8 py-6 text-sm font-black uppercase tracking-widest text-right">E-Mail ID</th>
                    </tr>
                 </thead>
                 <tbody className="divide-y divide-[#D5E2F4]/40">
                    {trainingTeam.map((member, idx) => (
                      <tr key={idx} className="group hover:bg-[#18357a]/[0.02] transition-colors">
                         <td className="px-8 py-6">
                            <div className="flex items-center gap-4">
                               <div className="relative h-[70px] w-[70px] shrink-0 overflow-hidden rounded-full border-2 border-[#18357a]/10 group-hover:border-[#ffc107] transition-all duration-500 bg-white flex items-center justify-center">
                                  {member.image ? (
                                    <img src={member.image} alt={member.name} className="h-full w-full object-contain" />
                                  ) : (
                                    <UsersIcon className="text-[#18357a]/20" size={32} />
                                  )}
                               </div>
                               <div>
                                  <div className="font-black text-[#18357a] group-hover:text-[#ffc107] transition-colors">{member.name}</div>
                                  <div className="text-[#64779F] text-xs font-semibold uppercase tracking-wider mt-0.5">{member.desig}</div>
                               </div>
                            </div>
                         </td>
                         <td className="px-8 py-6">
                            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#18357a]/5 text-[#18357a] text-[11px] font-black uppercase tracking-wide border border-[#18357a]/10 group-hover:bg-[#18357a] group-hover:text-white transition-all">
                               <ShieldCheck size={12} />
                               {member.resp}
                            </span>
                         </td>
                         <td className="px-8 py-6 text-right">
                           <a href={`mailto:${member.email}`} className="flex items-center justify-end gap-2 text-[#64779F] hover:text-[#ffc107] text-[13px] font-bold transition-colors">
                              <MessageCircle size={14} />
                              {member.email}
                           </a>
                         </td>
                      </tr>
                    ))}
                 </tbody>
              </table>
           </motion.div>

           {/* Mobile view: Cards */}
           <div className="md:hidden space-y-6">
              {trainingTeam.map((member, idx) => (
                 <motion.div 
                    key={idx}
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="bg-white rounded-3xl p-8 shadow-[0_20px_50px_rgba(24,53,122,0.04)] border border-[#D5E2F4]/50 flex flex-col items-center text-center space-y-6"
                 >
                    {/* Header: Image + Basic Info Stacked Centered */}
                    <div className="flex flex-col items-center space-y-4">
                       <div className="h-28 w-28 shrink-0 overflow-hidden rounded-3xl border-2 border-[#18357a]/10 bg-white flex items-center justify-center text-[#18357a]/20 shadow-sm">
                          {member.image ? (
                            <img src={member.image} alt={member.name} className="h-full w-full object-contain" />
                          ) : (
                            <UsersIcon size={32} />
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

                    {/* Contact Info: Directly below position */}
                    <div className="w-full pt-6 border-t border-[#D5E2F4]/50 flex flex-col items-center gap-4">
                       {member.email && (
                         <a href={`mailto:${member.email}`} className="flex items-center gap-3 text-[#18357a] text-[13px] font-black hover:text-[#ffc107] transition-colors">
                            <MessageCircle size={16} className="text-[#ffc107]" />
                            {member.email}
                         </a>
                       )}
                    </div>
                 </motion.div>
              ))}
           </div>
        </div>

      </section>
      
      {/* Background decoration bottom */}
    </div>
  )
}

const TargetIcon = (props) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <circle cx="12" cy="12" r="10" />
    <circle cx="12" cy="12" r="6" />
    <circle cx="12" cy="12" r="2" />
  </svg>
);

export default TrainingOverview
