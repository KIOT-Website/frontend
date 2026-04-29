import { useState } from 'react'
import { motion } from 'framer-motion'
import { 
  ShieldCheck, Calendar, Award, Target, BookOpen, Users, FileText, 
  Eye, Settings, Star, CheckCircle2, TrendingUp, GraduationCap, 
  MessageSquare, Share2, ClipboardList, Database, Search, FileCheck,
  ChevronRight, Users2, Building2, Lightbulb, Link, ExternalLink, Download
} from 'lucide-react'

export default function IQACPage() {
  const [activeReport, setActiveReport] = useState('aaa')
  
  return (
    <div className="min-h-screen bg-[#F8FAFC] font-graphik pb-20">
      
      {/* ─── HERO SECTION ─── */}
      <section className="relative overflow-hidden bg-[#0A1A3F] pt-8 pb-12 md:pt-12 md:pb-16">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_2px_2px,rgba(255,193,7,0.05)_1px,transparent_0)] [background-size:32px_32px]" />
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#18357a]/20 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/3" />
        
        <div className="w-full px-6 lg:px-12 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_0.8fr] gap-12 lg:gap-16 items-center">
            
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-[#ffc107]">
                  <ShieldCheck size={24} />
                </div>
                <span className="text-[#ffc107] text-[10px] font-black tracking-widest uppercase bg-white/5 px-4 py-1.5 rounded-full border border-white/10">
                  Quality Assurance
                </span>
              </div>
              
              <h1 className="text-4xl md:text-6xl font-black text-white leading-[1.1] mb-8 tracking-tight">
                Internal Quality Assurance <br />
                <span className="text-[#ffc107]">Cell (IQAC)</span>
              </h1>
              
              <div className="flex items-center gap-3 text-white text-[15px] font-medium mb-8">
                <Calendar size={20} className="text-[#ffc107]" />
                <span>Established on 09 September 2015</span>
              </div>

              <p className="text-white text-[15px] font-medium leading-relaxed max-w-xl text-justify">
                IQAC is committed to fostering a culture of quality through continuous improvement in academic and administrative processes, ensuring excellence in higher education.
              </p>
            </motion.div>

            {/* Right Content: Circular Emblem & Features (Reduced size and shifted further left) */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative flex items-center justify-center lg:pr-64"
            >
              {/* Central Emblem */}
              <div className="relative w-56 h-56 md:w-72 md:h-72 rounded-full bg-white flex flex-col items-center justify-center border-[6px] border-[#ffc107] shadow-[0_0_50px_rgba(255,193,7,0.3)] z-10">
                 <div className="w-16 h-16 md:w-20 md:h-20 rounded-2xl bg-[#0A1A3F]/5 flex items-center justify-center text-[#0A1A3F] mb-3">
                    <ShieldCheck size={40} strokeWidth={1.5} />
                 </div>
                 <h2 className="text-2xl md:text-3xl font-black text-[#0A1A3F] leading-none mb-1.5 tracking-tighter">IQAC</h2>
                 <p className="text-[10px] md:text-[12px] font-bold text-[#0A1A3F]/80 text-center px-4 leading-tight font-graphik">
                    Driving Quality,<br />Enhancing Excellence
                 </p>
              </div>

            </motion.div>

          </div>
        </div>
      </section>

      {/* ─── MAIN 4-CARD GRID ─── */}
      <section className="w-full px-6 lg:px-12 py-8 relative z-20">
        <div className="max-w-[1400px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            
            {/* Vision */}
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="bg-[#0A1A3F]/5 p-8 rounded-2xl border border-slate-100 group font-graphik">
               <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-[#0A1A3F] flex items-center justify-center text-white">
                     <Eye size={24} />
                  </div>
                  <h3 className="text-lg font-black text-[#0A1A3F] uppercase tracking-widest">Vision</h3>
               </div>
               <p className="text-black font-medium text-[15px] leading-relaxed text-justify">
                  To ensure quality culture as the prime concern for the Higher Education Institutions through institutionalizing and internalizing all the initiatives taken with internal and external support.
               </p>
            </motion.div>

            {/* Objectives */}
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }} className="bg-[#0A1A3F]/5 p-8 rounded-2xl border border-slate-100 group font-graphik">
               <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-[#0A1A3F] flex items-center justify-center text-white">
                     <Target size={24} />
                  </div>
                  <h3 className="text-lg font-black text-[#0A1A3F] uppercase tracking-widest">Objectives</h3>
               </div>
               <ul className="space-y-4">
                  {[
                    "To develop a system for conscious, consistent and catalytic action to improve the academic and administrative performance.",
                    "To promote measures for institutional functioning towards quality enhancement through internalization of quality culture and institutionalization of best practices."
                  ].map((text, i) => (
                    <li key={i} className="flex gap-3 text-black font-medium text-[15px] leading-relaxed text-justify">
                       <div className="w-1.5 h-1.5 rounded-full bg-[#ffc107] mt-1.5 shrink-0" />
                       {text}
                    </li>
                  ))}
               </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ─── STRATEGIES SECTION ─── */}
      <section className="w-full px-6 lg:px-12 py-10 bg-[#F8FAFC]">
         <div className="max-w-[1400px] mx-auto">
            <div className="text-center mb-16">
               <span className="inline-block px-4 py-1.5 bg-white border border-slate-200 rounded-full text-[10px] font-black text-[#0A1A3F] tracking-widest uppercase mb-4 shadow-sm">
                  <span className="inline-block w-2 h-2 rounded-full bg-[#ffc107] mr-2" />
                  Our Approach
               </span>
               <h2 className="text-4xl md:text-5xl font-black text-[#0A1A3F] mb-4">
                  Strategies of <span className="text-[#ffc107]">IQAC</span>
               </h2>
               <p className="text-slate-500 font-medium text-sm">IQAC shall evolve mechanisms and procedures for:</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-7 gap-4">
               {[
                 { id: "01", icon: TrendingUp, title: "Performance Efficiency", desc: "Ensuring timely, efficient and progressive performance of academic, administrative and financial tasks." },
                 { id: "02", icon: GraduationCap, title: "Academic & Research Quality", desc: "Relevant and quality academic/ research programmes." },
                 { id: "03", icon: Users, title: "Accessibility & Affordability", desc: "Equitable access to and affordability of academic programmes for various sections of society." },
                 { id: "04", icon: Lightbulb, title: "Teaching & Learning Methods", desc: "Optimization and integration of modern methods of teaching and learning." },
                 { id: "05", icon: ClipboardList, title: "Assessment & Evaluation", desc: "The credibility of assessment and evaluation process." },
                 { id: "06", icon: Building2, title: "Infrastructure & Support", desc: "Ensuring the adequacy, maintenance and proper allocation of support structure and services." },
                 { id: "07", icon: Share2, title: "Research & Collaboration", desc: "Sharing of research findings and networking with other institutions in India and abroad." }
               ].map((item, idx) => (
                 <motion.div
                   key={idx}
                   initial={{ opacity: 0, y: 20 }}
                   whileInView={{ opacity: 1, y: 0 }}
                   viewport={{ once: true }}
                   transition={{ delay: idx * 0.1 }}
                   className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm relative group hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
                 >
                    <div className="flex flex-col items-center text-center mt-2">
                       <div className="hidden md:flex w-16 h-16 rounded-full bg-white border border-slate-100 shadow-inner items-center justify-center text-[#0A1A3F] mb-6 group-hover:bg-[#0A1A3F] group-hover:text-white transition-colors duration-300">
                          <item.icon size={28} />
                       </div>
                       <h4 className="text-[16px] font-black text-[#0A1A3F] mb-3 leading-tight h-10 flex items-center">{item.title}</h4>
                       <p className="text-[12px] font-medium text-black leading-relaxed text-justify">
                          {item.desc}
                       </p>
                    </div>
                 </motion.div>
               ))}
            </div>
         </div>
      </section>

      {/* ─── FUNCTIONS SECTION ─── */}
      <section className="w-full px-6 lg:px-12 py-10 bg-white">
         <div className="max-w-[1200px] mx-auto">
            <div className="text-center mb-16">
               <h2 className="text-4xl md:text-5xl font-black text-[#0A1A3F] mb-4">
                  Functions of <span className="text-[#ffc107]">IQAC</span>
               </h2>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-8 gap-y-4">
               {[
                 { id: "01", icon: Award, title: "Quality Benchmarks", desc: "Development and application of quality benchmarks." },
                 { id: "02", icon: FileText, title: "Academic Parameters", desc: "Parameters for various academic and administrative activities of the institution." },
                 { id: "03", icon: Users2, title: "Learner-Centric Environment", desc: "Facilitating the creation of a learner-centric environment conducive to quality education and faculty maturation to adopt the required knowledge and technology for participatory teaching and learning process." },
                 { id: "04", icon: MessageSquare, title: "Feedback System", desc: "Collection and analysis of feedback from all stakeholders on quality-related institutional processes." },
                 { id: "05", icon: Share2, title: "Information Dissemination", desc: "Dissemination of information on various quality parameters to all stakeholders." },
                 { id: "06", icon: Users, title: "Workshops & Seminars", desc: "Organization of inter and intra institutional workshops, seminars on quality related themes and promotion of quality circles." },
                 { id: "07", icon: BookOpen, title: "Documentation", desc: "Documentation of the various programmes/activities leading to quality improvement." },
                 { id: "08", icon: Link, title: "Coordination & Best Practices", desc: "Acting as a nodal agency of the Institution for coordinating quality-related activities, including adoption and dissemination of best practices." },
                 { id: "09", icon: Database, title: "MIS & Database", desc: "Development and maintenance of institutional database through MIS for the purpose of maintaining /enhancing the institutional quality." },
                 { id: "10", icon: Search, title: "Academic & Administrative Audit", desc: "Periodical conduct of Academic and Administrative Audit and its follow-up." },
                 { id: "11", icon: FileCheck, title: "AQAR Report", desc: "Preparation and submission of the Annual Quality Assurance Report (AQAR) as per guidelines and parameters of NAAC." }
               ].map((item, idx) => (
                 <motion.div
                   key={idx}
                   initial={{ opacity: 0, x: -20 }}
                   whileInView={{ opacity: 1, x: 0 }}
                   viewport={{ once: true }}
                   transition={{ delay: idx * 0.05 }}
                   className="flex gap-5 bg-[#0A1A3F]/5 p-4 rounded-xl hover:bg-[#0A1A3F]/10 transition-colors duration-300"
                 >
                   <div className="hidden md:flex shrink-0 w-14 h-14 rounded-xl bg-[#0A1A3F] items-center justify-center text-white shadow-lg mt-1">
                       <item.icon size={22} />
                    </div>
                    <div className="flex-1">
                       <h4 className="text-[16px] font-black text-[#0A1A3F] mb-1 leading-tight">
                          {item.title}
                       </h4>
                       <p className="text-[13px] font-medium text-black leading-relaxed text-justify">
                          {item.desc}
                       </p>
                    </div>
                 </motion.div>
               ))}
            </div>
         </div>
      </section>

      {/* ─── IQAC MEMBERS SECTION ─── */}
      <section className="w-full px-6 lg:px-12 pt-6 pb-12 bg-[#F8FAFC]">
         <div className="max-w-[1400px] mx-auto">
            <div className="text-center mb-10">
               <h2 className="text-4xl md:text-5xl font-black text-[#0A1A3F] mb-4">
                  IQAC <span className="text-[#ffc107]">Members</span>
               </h2>
               <p className="text-black font-normal text-[15px]">Academic Year 2024-25 to 2025-26</p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
               {[
                 { id: "01", name: "Dr.K.Visagavel M.E., Ph.D.", desc: "Principal, KIOT, Salem", pos: "Chairperson - IQAC" },
                 { id: "02", name: "Dr.PSS.Srinivasan M.Tech., Ph.D.", desc: "Founder & President, KIOT, Salem", pos: "Member from Management" },
                 { id: "03", name: "Mr.V.Suresh Kumar B.E.", desc: "Treasurer, KIOT Trust, Salem", pos: "Member from Management" },
                 { id: "04", name: "Dr.M.Thangavel M.E., Ph.D.", desc: "Director - CDT, KIOT, Salem", pos: "Teaching Faculty" },
                 { id: "05", name: "Dr.A.Stephen M.B.A., Ph.D.", desc: "Director / MBA, KIOT, Salem", pos: "Teaching Faculty" },
                 { id: "06", name: "Dr.P.Rajendran M.E., Ph.D.", desc: "Director - Placement & III, KIOT, Salem", pos: "Teaching Faculty" },
                 { id: "07", name: "Dr.P.Navaneethakrishnan M.E., Ph.D.", desc: "Director - Student Affairs, KIOT, Salem", pos: "Teaching Faculty" },
                 { id: "08", name: "Dr.R.Kumar", desc: "Director / Consultancy, KIOT", pos: "Teaching Faculty" },
                 { id: "09", name: "Dr.M.Ilangkumaran M.E., Ph.D.", desc: "COE, KIOT, Salem", pos: "Teaching Faculty" },
                 { id: "10", name: "Dr.S. Kalpana Devi M.E., Ph.D.", desc: "Director - CDDA, KIOT, Salem", pos: "Teaching Faculty" },
                 { id: "11", name: "Dr.P. Shanmuga Sundaram M.E., Ph.D.", desc: "Director - Outreach & Admissions, KIOT, Salem", pos: "Teaching Faculty" },
                 { id: "12", name: "Dr.N.Santhiyakumari M.Tech., Ph.D.", desc: "Director R&D, KIOT, Salem", pos: "Teaching Faculty" },
                 { id: "13", name: "Dr.V.Kumar M.E., Ph.D.", desc: "Director - Infra. Management, KIOT, Salem", pos: "Teaching Faculty" },
                 { id: "14", name: "Dr.R.Kumar M.Tech., Ph.D.", desc: "Director - Consultancy , KIOT, Salem", pos: "Teaching Faculty" },
                 { id: "15", name: "Dr.R.Vijayaraghavan", desc: "Prof./ECE, KIOT", pos: "Teaching Faculty" },
                 { id: "16", name: "Dr.K.S. Prabhakaran M.E., Ph.D.", desc: "HOD / MECH, KIOT, Salem", pos: "Teaching Faculty" },
                 { id: "17", name: "Dr.C.Muniraj M.E., Ph.D.", desc: "HOD / EEE, KIOT, Salem", pos: "Teaching Faculty" },
                 { id: "18", name: "Dr.V.Saravanan M.E., Ph.D.", desc: "HOD / ECE, KIOT, Salem", pos: "Teaching Faculty" },
                 { id: "19", name: "Dr.P.Prasath M.E.,Ph.D.", desc: "HOD / Civil, KIOT, Salem", pos: "Teaching Faculty" },
                 { id: "20", name: "Prof.T.Karthikeyan M.E., (Ph.D.)", desc: "HOD / CSE, KIOT, Salem", pos: "Teaching Faculty" },
                 { id: "21", name: "Dr.P.Sachidhanandam M.E., Ph.D.", desc: "HOD / IT, KIOT, Salem", pos: "Teaching Faculty" },
                 { id: "22", name: "Prof.B.Sasikumar M.E.,(Ph.D.)", desc: "HOD / AI & DS, KIOT, Salem", pos: "Teaching Faculty" },
                 { id: "23", name: "Dr.M.Ramkumar M.E., Ph.D.", desc: "HOD /CSBS, KIOT, Salem", pos: "Teaching Faculty" },
                 { id: "24", name: "Dr.T.Venkatesan MBA., Ph.D.", desc: "HOD / MBA, KIOT, Salem", pos: "Teaching Faculty" },
                 { id: "25", name: "Dr.S.Vijayakumar", desc: "HOD-Incharge/MBAIEV, KIOT", pos: "Teaching Faculty" },
                 { id: "26", name: "Dr.S.Mohanapriya", desc: "HOD / MCA, KIOT", pos: "Teaching Faculty" },
                 { id: "27", name: "Prof.M.Prasath", desc: "HOD / S&H, KIOT", pos: "Teaching Faculty" },
                 { id: "28", name: "Mr.D.Sakthivel M.E.", desc: "Administrative Director, KIOT Trust, Salem", pos: "Member (Administration)" },
                 { id: "29", name: "Mr.M.Gunasekaran M.L.I.S, M.Phil.", desc: "Librarian, KIOT, Salem", pos: "Member (Administration)" },
                 { id: "30", name: "Dr.S.Ashok", desc: "Saravana Hospital, Salem", pos: "Member from Local Society" },
                 { id: "31", name: "Mr.N.Giri", desc: "III Year, B.E. CSE, KIOT", pos: "Student Member" },
                 { id: "32", name: "Mr. S.Alaguvai ravasundaram", desc: "Alumni EEE, Lead Engineer, Stellantis India", pos: "Alumni Member" },
                 { id: "33", name: "Mr.A.R.Arirai", desc: "General Manager HR/Admin, JSW, Salem", pos: "Employer" },
                 { id: "34", name: "Mr. Srinivasan Manickam", desc: "CEO, Adept engineering Solutions", pos: "Industrialist" },
                 { id: "35", name: "Mr.V.V.Yuvaraj", desc: "Managing Director, 2D Tours, Salem", pos: "Parent Member" },
                 { id: "36", name: "Prof.S.Dheepak M.E. (Ph.D.)", desc: "AP / Mech., KIOT, Salem", pos: "Teaching Faculty (Co-coordinator)" },
                 { id: "37", name: "Dr.M.Sathyanathan M.E.,Ph.D.", desc: "Director - IQAC, KIOT, Salem", pos: "Director - IQAC" }
               ].map((member, idx) => (
                 <motion.div
                   key={idx}
                   initial={{ opacity: 0, y: 10 }}
                   whileInView={{ opacity: 1, y: 0 }}
                   viewport={{ once: true }}
                   transition={{ delay: idx * 0.02 }}
                   className="flex items-center gap-4 bg-white p-4 rounded-xl border border-slate-100 shadow-sm group hover:border-[#ffc107]/30 transition-all"
                 >
                    <div className="shrink-0 w-10 h-10 rounded-full bg-[#0A1A3F] flex items-center justify-center text-white text-[12px] font-bold">
                       {member.id}
                    </div>
                    <div className="flex-1 min-w-0">
                       <h4 className="text-[14px] font-bold text-[#0A1A3F] truncate">{member.name}</h4>
                       <p className="text-[11px] text-black truncate">{member.desc}</p>
                    </div>
                    <div className="text-right shrink-0">
                       <span className="inline-block px-3 py-1 bg-[#ffc107]/10 text-black text-[11px] font-medium rounded-full">
                          {member.pos}
                       </span>
                    </div>
                 </motion.div>
               ))}
            </div>
         </div>
      </section>
      {/* ─── AAA SECTION ─── */}
      <section className="w-full px-6 lg:px-12 pt-8 pb-20 bg-white">
         <div className="max-w-[1400px] mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.5fr] gap-16 items-center">
               
               <motion.div
                 initial={{ opacity: 0, x: -30 }}
                 whileInView={{ opacity: 1, x: 0 }}
                 viewport={{ once: true }}
               >
                  <div className="flex items-center gap-3 mb-6">
                     <div className="w-10 h-10 rounded-lg bg-[#0A1A3F]/5 flex items-center justify-center text-[#0A1A3F]">
                        <Search size={22} />
                     </div>
                     <span className="text-[#0A1A3F] text-[10px] font-black tracking-widest uppercase">Quality Review</span>
                  </div>
                  
                  <h2 className="text-4xl md:text-5xl font-black text-[#0A1A3F] leading-[1.1] mb-8">
                     Academic and <br />
                     Administrative <span className="text-[#ffc107]">Audit (AAA)</span>
                  </h2>
                  
                  <p className="text-black font-medium text-[15px] leading-relaxed text-justify mb-8">
                     The Academic and Administrative Audit is a core quality sustenance measure of IQAC. It involves a systematic review of the institutional processes by internal and external experts to ensure that standards of excellence are maintained across all departments.
                  </p>

                  <div className="space-y-4">
                     {[
                       { id: 'aaa', title: "AAA (Internal & External)", desc: "Systematic review reports of institutional academic and administrative processes." },
                       { id: 'financial', title: "Financial Reports", desc: "Annual financial statements and audit reports for transparency and accountability." },
                       { id: 'minutes', title: "IQAC Minutes of Meeting", desc: "Detailed records of quality assurance meetings and strategic decisions." }
                     ].map((item, i) => (
                       <button 
                         key={i} 
                         onClick={() => setActiveReport(item.id)}
                         className={`w-full flex text-left gap-4 p-4 rounded-xl border transition-all ${
                           activeReport === item.id 
                           ? 'bg-[#0A1A3F] text-white border-[#0A1A3F] shadow-lg translate-x-2' 
                           : 'bg-[#F8FAFC] text-[#0A1A3F] border-slate-100 hover:border-[#ffc107]/30'
                         }`}
                       >
                          <div className={`w-10 h-10 rounded-lg flex items-center justify-center shrink-0 ${
                            activeReport === item.id ? 'bg-[#ffc107] text-[#0A1A3F]' : 'bg-[#0A1A3F] text-[#ffc107]'
                          }`}>
                             <FileText size={20} />
                          </div>
                          <div>
                             <h4 className={`text-[14px] font-black mb-1 ${activeReport === item.id ? 'text-white' : 'text-[#0A1A3F]'}`}>{item.title}</h4>
                             <p className={`text-[12px] font-medium ${activeReport === item.id ? 'text-white/70' : 'text-black'}`}>{item.desc}</p>
                          </div>
                       </button>
                     ))}
                  </div>
               </motion.div>

               <motion.div
                 key={activeReport}
                 initial={{ opacity: 0, y: 20 }}
                 animate={{ opacity: 1, y: 0 }}
                 className="relative"
               >
                  <div className="bg-[#0A1A3F] rounded-[40px] p-8 md:p-12 text-white relative overflow-hidden shadow-2xl min-h-[500px]">
                     <div className="absolute top-0 right-0 w-64 h-64 bg-[#ffc107]/10 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2" />
                     
                     <div className="flex items-center justify-between mb-8 relative z-10">
                        <h3 className="text-2xl font-black uppercase tracking-tight">
                           {activeReport === 'aaa' && <>AAA <span className="text-[#ffc107]">Reports</span></>}
                           {activeReport === 'financial' && <>Financial <span className="text-[#ffc107]">Audit</span></>}
                           {activeReport === 'minutes' && <>IQAC <span className="text-[#ffc107]">Minutes</span></>}
                        </h3>
                        <div className="flex items-center gap-2 text-[#ffc107] text-[10px] font-black uppercase tracking-widest">
                           <span className="w-2 h-2 rounded-full bg-[#ffc107] animate-pulse" />
                           Direct Links
                        </div>
                     </div>

                     <div className="overflow-x-auto relative z-10">
                        {activeReport === 'aaa' && (
                          <table className="w-full text-left border-collapse">
                             <thead>
                                <tr className="border-b border-white/10">
                                   <th className="py-4 text-[13px] font-black uppercase text-[#ffc107]">Academic Year</th>
                                   <th className="py-4 text-[13px] font-black uppercase text-[#ffc107] text-right">Action</th>
                                </tr>
                             </thead>
                             <tbody>
                                {[
                                  { year: "2025-26", link: "#" },
                                  { year: "2024-25", link: "#" },
                                  { year: "2023-24", link: "#" }
                                ].map((row, i) => (
                                  <tr key={i} className="border-b border-white/5 group hover:bg-white/5 transition-colors">
                                     <td className="py-4 text-[14px] font-bold">{row.year}</td>
                                     <td className="py-4 text-right">
                                        <a href={row.link} className="inline-flex items-center gap-2 bg-[#ffc107]/10 text-white border border-[#ffc107]/30 px-4 py-1.5 rounded-lg text-[11px] font-black uppercase hover:bg-[#ffc107] hover:text-[#0A1A3F] transition-all">
                                           View <ExternalLink size={14} />
                                        </a>
                                     </td>
                                  </tr>
                                ))}
                             </tbody>
                          </table>
                        )}

                        {activeReport === 'financial' && (
                          <table className="w-full text-left border-collapse">
                             <thead>
                                <tr className="border-b border-white/10">
                                   <th className="py-4 text-[13px] font-black uppercase text-[#ffc107]">Particulars</th>
                                   <th className="py-4 text-[13px] font-black uppercase text-[#ffc107] text-right">Action</th>
                                </tr>
                             </thead>
                             <tbody>
                                {[
                                  { title: "External Audit (2024-25)", link: "https://kiot.ac.in/home-naac/audit-statements/" },
                                  { title: "Internal Audit (2024-25)", link: "https://kiot.ac.in/home-naac/audit-statements/" }
                                ].map((row, i) => (
                                  <tr key={i} className="border-b border-white/5 group hover:bg-white/5 transition-colors">
                                     <td className="py-4 text-[14px] font-bold">{row.title}</td>
                                     <td className="py-4 text-right">
                                        <a href={row.link} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-[#ffc107]/10 text-white border border-[#ffc107]/30 px-4 py-1.5 rounded-lg text-[11px] font-black uppercase hover:bg-[#ffc107] hover:text-[#0A1A3F] transition-all">
                                           View <ExternalLink size={14} />
                                        </a>
                                     </td>
                                  </tr>
                                ))}
                             </tbody>
                          </table>
                        )}

                        {activeReport === 'minutes' && (
                          <table className="w-full text-left border-collapse">
                             <thead>
                                <tr className="border-b border-white/10">
                                   <th className="py-4 text-[13px] font-black uppercase text-[#ffc107]">Academic Year</th>
                                   <th className="py-4 text-[13px] font-black uppercase text-[#ffc107]">Meeting</th>
                                   <th className="py-4 text-[13px] font-black uppercase text-[#ffc107] text-right">Action</th>
                                </tr>
                             </thead>
                             <tbody>
                                {[
                                  { year: "2025-26", meetings: ["Meeting-1", "Meeting-2"], link: "https://kiot.ac.in/iqac/iqac-minutes-of-meeting-2/" },
                                  { year: "2024-25", meetings: ["Meeting-1", "Meeting-2"], link: "https://kiot.ac.in/iqac/iqac-minutes-of-meeting-2/" }
                                ].map((row, i) => (
                                  <>
                                    <tr key={`${i}-1`} className="border-b border-white/5 group hover:bg-white/5 transition-colors">
                                       <td rowSpan={2} className="py-4 text-[14px] font-bold border-r border-white/5">{row.year}</td>
                                       <td className="py-4 px-4 text-[13px]">{row.meetings[0]}</td>
                                       <td className="py-4 text-right">
                                          <a href={row.link} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-[#ffc107]/10 text-white border border-[#ffc107]/30 px-4 py-1.5 rounded-lg text-[11px] font-black uppercase hover:bg-[#ffc107] hover:text-[#0A1A3F] transition-all">
                                             View <ExternalLink size={14} />
                                          </a>
                                       </td>
                                    </tr>
                                    <tr key={`${i}-2`} className="border-b border-white/5 group hover:bg-white/5 transition-colors">
                                       <td className="py-4 px-4 text-[13px]">{row.meetings[1]}</td>
                                       <td className="py-4 text-right">
                                          <a href={row.link} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-[#ffc107]/10 text-white border border-[#ffc107]/30 px-4 py-1.5 rounded-lg text-[11px] font-black uppercase hover:bg-[#ffc107] hover:text-[#0A1A3F] transition-all">
                                             View <ExternalLink size={14} />
                                          </a>
                                       </td>
                                    </tr>
                                  </>
                                ))}
                             </tbody>
                          </table>
                        )}
                     </div>

                     <div className="mt-auto pt-10 relative z-10">
                        <div className="p-4 rounded-xl bg-white/5 border border-white/10 flex items-center gap-4">
                           <div className="w-8 h-8 rounded-full bg-[#ffc107]/10 flex items-center justify-center text-[#ffc107]">
                              <Link size={16} />
                           </div>
                           <p className="text-[11px] text-white/50 italic">Note: These reports are institutional assets and are updated periodically by the IQAC Cell.</p>
                        </div>
                     </div>
                  </div>
               </motion.div>

            </div>
         </div>
      </section>

    </div>
  )
}
