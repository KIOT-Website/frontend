import React from 'react'
import { motion } from 'framer-motion'
import { FileText, ExternalLink } from 'lucide-react'

import structureImg from '../assets/main/strcutre1.jpg'
import governanceImg from '../assets/main/governance_meeting.webp'

// PDFs served from public/assets/policies/ — NOT imported as JS modules
const pdf1 = '/assets/policies/1.GENERAL SERVICE RULES.pdf'
const pdf2 = '/assets/policies/2.QUALIFICATION NORMS.pdf'
const pdf3 = '/assets/policies/3.RECRUITMENT PROCEDURE.pdf'
const pdf4 = '/assets/policies/4.ACADEMIC PROCEDURE.pdf'
const pdf5 = '/assets/policies/5.ROLES AND RESPONSIBILITIES.pdf'
const pdf6 = '/assets/policies/6.CODE OF CONDUCT.pdf'
const pdf7 = '/assets/policies/7.INCENTIVES AND WELFARE.pdf'
const pdf8 = '/assets/policies/8.CHECK MALPRACTICES.pdf'
const pdf9 = '/assets/policies/9.ADMISSION POLICY.pdf'
const pdf10 = '/assets/policies/10.GUIDELINES FOR SCHOLARSHIP.pdf'
const pdf11 = '/assets/policies/11.GUIDELINES FOR SCHOLARSHIP.pdf'
const pdf12 = '/assets/policies/12.PROMOTION POLICY.pdf'
const pdf13 = '/assets/policies/13.TRANSPARENCY.pdf'
const pdf14 = '/assets/policies/14.DECENTRALIZATION.pdf'
const pdf15 = '/assets/policies/15.STATUTORY AND NON-STATUTORY.pdf'
const pdf16 = '/assets/policies/16.GUIDELINES FOR PURCHASE OF EQUIPMENT.pdf'
const pdf17 = '/assets/policies/17.CONDUCT FOR STUDENTS.pdf'
const pdf18 = '/assets/policies/18.HOSTEL STUDENTS.pdf'
const pdf19 = '/assets/policies/19.GRIEVANCES AND REDRESSAL.pdf'
const pdf20 = '/assets/policies/20.POLICY ON FEEDBACK BASED GOVERNANCE.pdf'
const pdf21 = '/assets/policies/21.QUALITY POLICY.pdf'
const pdf22 = '/assets/policies/22.SUTAINABILITY AND GREEN ENERGY POLICY.pdf'
const pdf23 = '/assets/policies/23.IT Upgradation Policy.pdf'
const pdf24 = '/assets/policies/24.CONSULTANCY POLICY.pdf'
const pdf25 = '/assets/policies/25.POLICY ON FUNDS MOBILIZATION.pdf'
const pdf26 = '/assets/policies/26.REPAIR AND MAINTENANCE POLICY.pdf'
const pdf27 = '/assets/policies/27.WASTE MANAGEMENT POLICY.pdf'

const GuidelinesPage = () => {
  const policies = [
    { id: 1, title: "General Service Rules", file: pdf1 },
    { id: 2, title: "Qualification Norms", file: pdf2 },
    { id: 3, title: "Recruitment Procedure", file: pdf3 },
    { id: 4, title: "Academic Procedure", file: pdf4 },
    { id: 5, title: "Roles and Responsibilities", file: pdf5 },
    { id: 6, title: "Code of Conduct", file: pdf6 },
    { id: 7, title: "Incentives and Welfare", file: pdf7 },
    { id: 8, title: "Check Malpractices", file: pdf8 },
    { id: 9, title: "Admission", file: pdf9 },
    { id: 10, title: "Guidelines for Scholarship", file: pdf10 },
    { id: 11, title: "Scholarship Provided by GoTN and GoI", file: pdf11 },
    { id: 12, title: "Promotion", file: pdf12 },
    { id: 13, title: "Transparency", file: pdf13 },
    { id: 14, title: "Decentralization", file: pdf14 },
    { id: 15, title: "Statutory and Non-Statutory Committees", file: pdf15 },
    { id: 16, title: "Guidelines for Purchase of Equipment", file: pdf16 },
    { id: 17, title: "Conduct for Students", file: pdf17 },
    { id: 18, title: "Hostel Students", file: pdf18 },
    { id: 19, title: "Grievances and Redressal", file: pdf19 },
    { id: 20, title: "Feedback Based Governance", file: pdf20 },
    { id: 21, title: "Quality Policy", file: pdf21 },
    { id: 22, title: "Sustainability & Green Energy", file: pdf22 },
    { id: 23, title: "IT Upgradation", file: pdf23 },
    { id: 24, title: "Consultancy", file: pdf24 },
    { id: 25, title: "Funds Mobilization", file: pdf25 },
    { id: 26, title: "Repair & Maintenance", file: pdf26 },
    { id: 27, title: "Waste Management", file: pdf27 }
  ]

  return (
    <div className="bg-[#FCFDFD] min-h-screen font-graphik selection:bg-[#ffc107]/20">

      {/* 🔷 1. TOP SECTION (IMAGE + INTRO) */}
      <section className="relative pt-12 lg:pt-20 pb-6 border-b border-slate-100 font-graphik">
        <div className="max-w-[1440px] mx-auto px-4 lg:px-12 font-graphik">
          <div className="grid lg:grid-cols-2 gap-8 items-center font-graphik">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              className="space-y-6 font-graphik"
            >
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-graphik font-semibold text-[#224292] mb-4 tracking-tighter leading-tight">
                Governance & <span className="text-[#ffc107]">Policies</span>
              </h1>
              <div className="space-y-4 font-graphik">
                <p className="text-[#333333] text-base leading-[1.8] font-graphik font-medium text-justify">
                  The Institution has established a code of conduct for students, staff, faculty, and administrators to maintain discipline and integrity. These guidelines promote professionalism and responsible behavior across the campus. They ensure a respectful, safe, and productive academic environment for everyone.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="relative aspect-video rounded-2xl overflow-hidden bg-slate-50 border border-slate-100 shadow-2xl shadow-[#224292]/10"
            >
              <img
                src={governanceImg}
                alt="Institutional Governance Meeting"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#224292]/20 to-transparent" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* 🔷 2. POLICIES & GUIDELINES GRID SECTION */}
      <section className="max-w-[1440px] mx-auto px-4 lg:px-12 pt-12 pb-8">
        <div className="mb-10">
          <h2 className="text-2xl lg:text-4xl font-bold text-[#224292] tracking-tight mb-2 font-graphik">
            Institutional <span className="text-[#ffc107]">Guidelines</span>
          </h2>
          <p className="text-slate-500 text-sm font-medium">Click on any document to view the official guidelines in detail.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {policies.map((policy) => (
            <motion.a
              key={policy.id}
              href={policy.file}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              whileHover={{ y: -4 }}
              className="group flex items-center p-4 bg-slate-50/10 border border-slate-200/40 rounded-lg shadow-sm hover:shadow-md hover:border-red-100/60 transition-all duration-300 cursor-pointer"
            >
              <div className="w-10 h-10 bg-red-50/30 text-red-600 rounded-xl flex items-center justify-center shrink-0 mr-3.5 group-hover:bg-red-600 group-hover:text-white transition-colors duration-300">
                <FileText size={20} className="stroke-[2.5]" />
              </div>
              <div className="min-w-0 flex-1">
                <h4 className="text-slate-800 text-xs sm:text-sm font-semibold group-hover:text-[#224292] transition-colors leading-snug">
                  {policy.title}
                </h4>
              </div>
              <ExternalLink size={14} className="text-slate-300 group-hover:text-slate-500 transition-colors ml-2 shrink-0" />
            </motion.a>
          ))}
        </div>
      </section>

      {/* 🔷 3. ORGANIZATIONAL STRUCTURE SECTION */}
      <section className="max-w-[1440px] mx-auto px-4 lg:px-12 pt-8 pb-16">
        <section id="structure" className="scroll-mt-32 font-graphik w-full border-t border-slate-100 pt-12">
          <div className="mb-10">
            <h2 className="text-2xl lg:text-4xl font-bold text-[#224292] tracking-tight mb-6 font-graphik">
              Organizational <span className="text-[#ffc107]">Structure</span>
            </h2>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative rounded-2xl overflow-hidden shadow-[0_40px_100px_rgba(24,53,122,0.08)] border border-slate-100 bg-white"
          >
            <img
              src={structureImg}
              alt="KIOT Organizational Structure"
              className="w-full h-auto object-contain"
            />
          </motion.div>
        </section>
      </section>

    </div>
  )
}

export default GuidelinesPage
