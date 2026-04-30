import React from 'react';
import { motion } from 'framer-motion';
import { 
  FileText, 
  Download, 
  Award, 
  ShieldCheck, 
  CheckCircle, 
  Users, 
  Target, 
  TrendingUp,
  Medal,
  Star,
  ExternalLink,
  ChevronRight
} from 'lucide-react';

const AccreditationPage = () => {
  const documents = [
    {
      id: 1,
      title: "NAAC CERTIFICATE",
      subtitle: "★ NAAC A GRADE (UPTO 2028) ★",
      type: "PDF Document",
      desc: "Certificate of Accreditation awarded by NAAC with A Grade, valid up to 2028, recognizing the quality and standards of KIOT.",
      link: "/pdfs/NAAC-A-GRADE-UPTO-2028.pdf",
      iconColor: "text-red-500",
      ribbonColor: "bg-red-500"
    },
    {
      id: 2,
      title: "NAAC SSR",
      subtitle: "★ SELF STUDY REPORT ★",
      type: "PDF Document",
      desc: "Self Study Report (SSR) submitted to NAAC as part of the accreditation process, showcasing the institutional performance and quality initiatives.",
      link: "#",
      iconColor: "text-blue-600",
      ribbonColor: "bg-blue-600"
    },
    {
      id: 3,
      title: "NBA CERTIFICATE",
      subtitle: "★ NATIONAL BOARD OF ACCREDITATION ★",
      type: "PDF Document",
      desc: "Accreditation Certificate awarded by NBA for eligible programs, recognizing the quality in technical education and continuous improvement.",
      link: "/pdfs/NBA-Accreditation-2025.pdf.pdf",
      iconColor: "text-green-600",
      ribbonColor: "bg-green-600"
    },
    {
      id: 4,
      title: "NBA SAR",
      subtitle: "★ SELF ASSESSMENT REPORT ★",
      type: "PDF Document",
      desc: "Self Assessment Report (SAR) submitted to NBA for accredited programs, detailing the academic and institutional performance.",
      link: "#",
      iconColor: "text-purple-600",
      ribbonColor: "bg-purple-600"
    }
  ];

  return (
    <div className="min-h-screen bg-white font-graphik pt-12 pb-10">
      {/* ─── HEADER SECTION ─── */}
      <section className="max-w-[1400px] mx-auto px-6 text-center mb-16">

        <motion.h1 
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-[#224292] text-4xl md:text-6xl font-black mb-6 tracking-tighter"
        >
          KIOT – <span className="text-[#ffc107]">Committed to Excellence</span>
        </motion.h1>
        <motion.div 
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="w-48 h-px bg-[#D4AF37]/30 mx-auto rounded-full mb-12 relative"
        >
           <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-white px-3 text-[#D4AF37]">
              <div className="rotate-45 border-2 border-[#D4AF37] p-1 rounded-sm">
                 <div className="w-1.5 h-1.5 bg-[#D4AF37] rounded-full" />
              </div>
           </div>
        </motion.div>
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="text-black text-[15px] md:text-[16px] font-medium leading-relaxed max-w-4xl mx-auto text-justify"
        >
          At KIOT (Knowledge Institute of Technology), quality and continuous improvement are at the heart of everything we do. Our accreditations and recognitions reflect our dedication to academic excellence, infrastructure, research, and holistic development.
        </motion.p>
      </section>

      {/* ─── CARDS GRID ─── */}
      <section className="max-w-[1400px] mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
        {documents.map((doc, idx) => (
          <motion.div
            key={doc.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1 }}
            className="bg-white rounded-[2rem] shadow-[0_10px_40px_rgba(0,0,0,0.06)] border border-slate-100 p-5 flex flex-col items-center text-center group hover:shadow-2xl hover:-translate-y-1 transition-all duration-300"
          >
            {/* Document Icon Placeholder */}
            <div className="relative mb-4">
               <div className="w-20 h-24 bg-slate-50 rounded-xl border border-slate-100 flex items-center justify-center relative overflow-hidden">
                  <FileText size={36} className={doc.iconColor} />
                  <div className={`absolute top-1.5 left-1.5 px-1.5 py-0.5 rounded text-[7px] font-black text-white ${doc.ribbonColor}`}>PDF</div>
                  {/* Decorative ribbon bottom right */}
                  <div className={`absolute bottom-1.5 right-1.5 w-7 h-7 rounded-full border-4 border-white shadow-sm flex items-center justify-center text-white ${doc.ribbonColor}`}>
                     <CheckCircle size={12} />
                  </div>
               </div>
               {/* Background shadow circles */}
               <div className="absolute -z-10 -top-2 -left-2 w-24 h-24 bg-slate-50/50 rounded-full blur-2xl group-hover:bg-slate-100/50 transition-colors" />
            </div>

            <h3 className="text-[#224292] text-[16px] font-black mb-3 tracking-tight leading-none">{doc.title}</h3>
            
            <p className="text-black text-[11px] font-medium leading-relaxed mb-4 text-justify line-clamp-4">
              {doc.desc}
            </p>

            <a 
              href={doc.link} 
              target="_blank" 
              rel="noopener noreferrer"
              className="mt-auto w-full py-2.5 bg-[#ffc107] text-[#224292] rounded-2xl font-black text-[11px] uppercase tracking-widest flex items-center justify-center gap-2 hover:bg-[#224292] hover:text-white transition-all shadow-lg active:scale-95 group/btn"
            >
              <Download size={14} className="group-hover/btn:text-white transition-colors" />
              <span className="group-hover/btn:text-white transition-colors">Download PDF</span>
            </a>
          </motion.div>
        ))}
      </section>

      {/* ─── NIRF REPORTS ─── */}
      <section className="max-w-[1400px] mx-auto px-6 mb-16">
        <div className="flex items-center gap-4 mb-8">
           <div className="w-10 h-10 bg-[#224292] rounded-xl flex items-center justify-center text-[#ffc107]">
              <FileText size={20} />
           </div>
           <h2 className="text-3xl font-black text-[#224292] tracking-tight">NIRF <span className="text-[#ffc107]">Reports</span></h2>
        </div>
        
        <div className="bg-white rounded-2xl border border-slate-100 shadow-xl overflow-hidden">
           <table className="w-full text-left border-collapse">
              <thead>
                 <tr className="bg-[#224292]">
                    <th className="px-6 py-5 text-[11px] font-black text-white uppercase tracking-widest">Year</th>
                    <th className="px-6 py-5 text-[11px] font-black text-white uppercase tracking-widest text-center">Engineering</th>
                    <th className="px-6 py-5 text-[11px] font-black text-white uppercase tracking-widest text-center">Overall</th>
                    <th className="px-6 py-5 text-[11px] font-black text-white uppercase tracking-widest text-center">Innovation</th>
                    <th className="px-6 py-5 text-[11px] font-black text-white uppercase tracking-widest text-center">SDG</th>
                 </tr>
              </thead>
              <tbody className="divide-y divide-slate-50 font-graphik">
                 {[2026, 2025, 2024].map((year) => (
                    <tr key={year} className="hover:bg-slate-50/50 transition-colors">
                       <td className="px-6 py-5 text-[14px] font-black text-[#224292]">{year}</td>
                       {[1, 2, 3, 4].map((i) => (
                          <td key={i} className="px-6 py-5 text-center">
                             <a 
                               href="https://kiot.ac.in/iqac/nirf-reports/" 
                               target="_blank" 
                               rel="noopener noreferrer"
                               className="inline-flex items-center gap-2 px-4 py-2 bg-[#ffc107]/10 text-[#224292] border border-[#ffc107]/30 rounded-lg text-[10px] font-black uppercase hover:bg-[#ffc107] transition-all"
                             >
                                View Report <ExternalLink size={12} />
                             </a>
                          </td>
                       ))}
                    </tr>
                 ))}
              </tbody>
           </table>
        </div>
      </section>      {/* ─── AQAR REPORTS SECTION ─── */}
      <section className="max-w-[1400px] mx-auto px-6 mb-20">
        <div className="flex items-center gap-4 mb-8">
           <div className="w-10 h-10 bg-[#224292] rounded-xl flex items-center justify-center text-[#ffc107]">
              <Award size={20} />
           </div>
           <h2 className="text-3xl font-black text-[#224292] tracking-tight">Annual Quality <span className="text-[#ffc107]">Assurance Report (AQAR)</span></h2>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
           {/* LEFT: TABLE (2/3 width) */}
           <div className="lg:col-span-2 bg-white rounded-2xl border border-slate-100 shadow-xl overflow-hidden">
              <table className="w-full text-left border-collapse">
                 <thead>
                    <tr className="bg-[#224292]">
                       <th className="px-8 py-5 text-[11px] font-black text-white uppercase tracking-widest">Academic Year</th>
                       <th className="px-8 py-5 text-[11px] font-black text-white uppercase tracking-widest text-center">Report</th>
                    </tr>
                 </thead>
                 <tbody className="divide-y divide-slate-50 font-graphik">
                    {[
                      "2023 - 2024", "2022 - 2023", "2021 - 2022", "2020 - 2021", 
                      "2019 - 2020", "2018 - 2019", "2017 - 2018"
                    ].map((year, idx) => (
                       <tr key={year} className={`hover:bg-slate-50 transition-colors ${idx % 2 === 1 ? 'bg-[#224292]/5' : 'bg-white'}`}>
                          <td className="px-8 py-5 text-[14px] font-bold text-[#224292]">{year}</td>
                          <td className="px-8 py-5 text-center">
                             <a 
                               href="#" 
                               target="_blank" 
                               rel="noopener noreferrer"
                               className="inline-flex items-center gap-2 px-6 py-2 bg-slate-50 text-[#224292] border border-slate-100 rounded-full font-black text-[10px] uppercase tracking-wider hover:bg-[#224292] hover:text-white transition-all group"
                             >
                                VIEW <ExternalLink size={12} className="group-hover:translate-x-1 transition-transform" />
                             </a>
                          </td>
                       </tr>
                    ))}
                 </tbody>
              </table>
           </div>

           {/* RIGHT: ABOUT AQAR CARD (1/3 width) */}
           <div className="bg-white rounded-3xl border border-slate-100 shadow-xl p-8 flex flex-col relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#224292]/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
              
              <div className="mb-8 flex justify-center relative z-10">
                 <img src="/aqar-illustration.png" alt="About AQAR" className="w-44 h-auto drop-shadow-2xl mix-blend-multiply" />
              </div>
              
              <h3 className="text-[#224292] text-xl font-black mb-4 tracking-tight relative z-10">About AQAR</h3>
              <p className="text-black/60 text-[13px] font-medium leading-relaxed mb-8 text-justify relative z-10">
                 The Annual Quality Assurance Report (AQAR) is a self-assessment report that helps institutions track their academic and administrative performance.
              </p>

              <div className="space-y-6 relative z-10">
                 <div className="flex gap-4">
                    <div className="w-10 h-10 bg-slate-50 rounded-xl flex items-center justify-center text-[#224292] shrink-0 border border-slate-100 shadow-sm">
                       <FileText size={18} />
                    </div>
                    <div>
                       <h4 className="text-[13px] font-black text-[#224292] mb-0.5">Self-Assessment Report</h4>
                       <p className="text-black/50 text-[11px] font-medium leading-tight">Comprehensive evaluation of institutional performance.</p>
                    </div>
                 </div>

                 <div className="flex gap-4">
                    <div className="w-10 h-10 bg-slate-50 rounded-xl flex items-center justify-center text-[#ffc107] shrink-0 border border-slate-100 shadow-sm">
                       <TrendingUp size={18} />
                    </div>
                    <div>
                       <h4 className="text-[13px] font-black text-[#224292] mb-0.5">Quality Improvement</h4>
                       <p className="text-black/50 text-[11px] font-medium leading-tight">Identify strengths and areas for improvement.</p>
                    </div>
                 </div>

                 <div className="flex gap-4">
                    <div className="w-10 h-10 bg-slate-50 rounded-xl flex items-center justify-center text-[#224292] shrink-0 border border-slate-100 shadow-sm">
                       <ShieldCheck size={18} />
                    </div>
                    <div>
                       <h4 className="text-[13px] font-black text-[#224292] mb-0.5">Transparency & Accountability</h4>
                       <p className="text-black/50 text-[11px] font-medium leading-tight">Promotes transparency and accountability in higher education.</p>
                    </div>
                 </div>
              </div>
           </div>
        </div>
      </section>
    </div>
  );
};

export default AccreditationPage;
