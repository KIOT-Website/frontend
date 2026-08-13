import React, { useEffect } from 'react'
import { motion } from 'framer-motion'
import {
  Sparkles,
  Shield,
  Heart,
  Target,
  UserCheck,
  Lightbulb,
  BookOpen,
  Briefcase
} from 'lucide-react'
import "./studentLife.css"

export default function WecCellPage() {

  useEffect(() => {
    document.title = 'Women Empowerment Cell (WEC) - KIOT'
    window.scrollTo({ top: 0, behavior: 'instant' })
  }, [])

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1
      }
    }
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] }
    }
  }

  const objectives = [
    {
      title: "Cultivate Leaders",
      desc: "Mentor promising female changemakers.",
      icon: Target,
      color: "from-purple-500/10 to-indigo-100/50",
      iconColor: "text-purple-600"
    },
    {
      title: "Foster Inclusion",
      desc: "Build a fair, respectful culture.",
      icon: Heart,
      color: "from-rose-500/10 to-pink-100/50",
      iconColor: "text-rose-600"
    },
    {
      title: "Support Development",
      desc: "Advance financial, mental, and emotional health.",
      icon: Lightbulb,
      color: "from-amber-500/10 to-orange-100/50",
      iconColor: "text-amber-600"
    },
    {
      title: "Secure Safety",
      desc: "Enforce zero-tolerance harassment policies through training.",
      icon: Shield,
      color: "from-emerald-500/10 to-teal-100/50",
      iconColor: "text-emerald-700"
    },
    {
      title: "Advance Skills",
      desc: "Host high-impact modern industry workshops.",
      icon: Briefcase,
      color: "from-blue-500/10 to-cyan-100/50",
      iconColor: "text-blue-600"
    },
    {
      title: "Prioritize Wellness",
      desc: "Advocate for physical health and hygiene.",
      icon: UserCheck,
      color: "from-red-500/10 to-rose-100/50",
      iconColor: "text-red-600"
    },
    {
      title: "Drive Growth",
      desc: "Use diverse education for societal impact.",
      icon: BookOpen,
      color: "from-indigo-500/10 to-purple-100/50",
      iconColor: "text-indigo-600"
    }
  ]

  const roles = [
    {
      title: "Psychological Support",
      desc: "Provide expert-led counseling and empathy workshops.",
      icon: Heart,
      color: "from-rose-500/10 to-pink-100/50",
      iconColor: "text-rose-600"
    },
    {
      title: "Legal Awareness",
      desc: "Organize rights-based panels and student competitions.",
      icon: BookOpen,
      color: "from-amber-500/10 to-orange-100/50",
      iconColor: "text-amber-600"
    },
    {
      title: "Campus Compliance",
      desc: "Execute mandatory terminal POSH Act training.",
      icon: Shield,
      color: "from-emerald-500/10 to-teal-100/50",
      iconColor: "text-emerald-700"
    },
    {
      title: "Cultural Diversity",
      desc: "Sponsor continuous equity dialogues and artistic exhibitions.",
      icon: UserCheck,
      color: "from-blue-500/10 to-cyan-100/50",
      iconColor: "text-blue-600"
    },
    {
      title: "Capability Building",
      desc: "Deliver technical bootcamps to upgrade modern skillsets.",
      icon: Lightbulb,
      color: "from-purple-500/10 to-indigo-100/50",
      iconColor: "text-purple-600"
    },
    {
      title: "Professional Advancement",
      desc: "Facilitate executive mentorship and corporate placement readiness.",
      icon: Briefcase,
      color: "from-indigo-500/10 to-purple-100/50",
      iconColor: "text-indigo-600"
    }
  ]

  const facultyMembers = [
    {
      sno: 1,
      name: "Dr. T. Aruna Christy",
      designation: "ASP/Phy/CSE\\nMember",
      email: "tacphy@kiot.ac.in"
    },
    {
      sno: 2,
      name: "Mrs. A. Preethi",
      designation: "AP/Chem/ECE\\nMember",
      email: "apchem@kiot.ac.in"
    },
    {
      sno: 3,
      name: "Mrs. K. V. Manjula",
      designation: "AP/Eng/EEE\\nMember (EEE & MCA)",
      email: "kvmeng@kiot.ac.in"
    },
    {
      sno: 4,
      name: "Mrs. P. Shyamala Devi",
      designation: "AP/Phy/IT\\nMember",
      email: "psphy@kiot.ac.in"
    },
    {
      sno: 5,
      name: "Mrs. V. Gomathi",
      designation: "AP/Mat/AI&DS\\nMember",
      email: "vgmat@kiot.ac.in"
    },
    {
      sno: 6,
      name: "Dr. M. Sindhu",
      designation: "ASP/Mat/Mech\\nMember (MECH & CIVIL)",
      email: "msmat@kiot.ac.in"
    },
    {
      sno: 7,
      name: "Dr. K. Priyamol",
      designation: "AP/Eng/ECX\\nMember (CSBS & ECX)",
      email: "kpeng@kiot.ac.in"
    },
    {
      sno: 8,
      name: "Dr. G. Sathya Priyanka",
      designation: "AP/Mat/AI&DS\\nMember ((MBA & MBA (IEV)))",
      email: "gspmat@kiot.ac.in"
    }
  ]

  const studentOfficeBearers = [
    {
      sno: 1,
      name: "Geethika Shree S",
      designation: "II CSE A",
      coordinatingDepartment: "President"
    },
    {
      sno: 2,
      name: "Shivesa N.P",
      designation: "II ECE C",
      coordinatingDepartment: "Secretary"
    },
    {
      sno: 3,
      name: "Hasini S",
      designation: "II IT A",
      coordinatingDepartment: "Joint Secretary"
    },
    {
      sno: 4,
      name: "Srinisha T",
      designation: "II EEE",
      coordinatingDepartment: "Treasurer"
    },
    {
      sno: 5,
      name: "Koushiga R",
      designation: "II AI&DS A",
      coordinatingDepartment: "Executive Member"
    },
    {
      sno: 6,
      name: "Dharsini S",
      designation: "II CSBS",
      coordinatingDepartment: "Executive Member"
    },
    {
      sno: 7,
      name: "Supreetha S",
      designation: "II Mech. B",
      coordinatingDepartment: "Executive Member"
    },
    {
      sno: 8,
      name: "Kavya S",
      designation: "II Civil",
      coordinatingDepartment: "Executive Member"
    },
    {
      sno: 9,
      name: "Ramya Priya M.",
      designation: "II ECX",
      coordinatingDepartment: "Executive Member"
    }
  ]

  return (
    <div className="min-h-screen bg-[#F8FAFC] pb-24 selection:bg-[#ffc107]/20">

      {/* ─── HERO HEADER SECTION ─── */}
      <div
        className="relative pt-16 pb-20 overflow-hidden rounded-b-[3rem] lg:rounded-b-[4rem]"
        style={{ backgroundColor: '#224292' }} // A purple shade for Women Empowerment
      >
        {/* Background Grid Ornament */}
        <div className="absolute inset-0 pointer-events-none" style={{
          backgroundImage: 'linear-gradient(to right, rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.04) 1px, transparent 1px)',
          backgroundSize: '40px 40px'
        }} />

        {/* Gradient Orbs */}
        <div className="absolute -top-40 -right-40 w-96 h-96 rounded-full pointer-events-none" style={{ backgroundColor: 'rgba(34, 66, 146, 0.3)', filter: 'blur(100px)' }} />
        <div className="absolute -bottom-40 -left-40 w-96 h-96 rounded-full pointer-events-none" style={{ backgroundColor: 'rgba(255,193,7,0.1)', filter: 'blur(100px)' }} />

        <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-10 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="max-w-3xl text-center mx-auto"
          >
            <span className="inline-block bg-[#ffc107] text-[#224292] font-black text-[10px] uppercase tracking-widest px-3.5 py-1 rounded-full mb-4 shadow-sm">
              WEC & Women Empowerment
            </span>
            <h1 className="font-black tracking-tight leading-none mb-3 text-[#ffc107]" style={{ fontSize: 'clamp(1.8rem, 4.5vw, 2.8rem)' }}>
              Women Empowerment Cell (WEC)
            </h1>

            <p className="font-bold tracking-wide uppercase mb-3 text-white/90" style={{ fontSize: 'clamp(0.85rem, 1.8vw, 1.1rem)', letterSpacing: '0.05em' }}>
              Safety, Progress, and Inclusivity on Campus
            </p>
          </motion.div>
        </div>
      </div>

      {/* ─── ABOUT SECTION ─── */}
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-10 -mt-12 relative z-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="bg-white rounded-[1.5rem] sm:rounded-[2.5rem] border border-slate-100 p-5 sm:p-8 lg:p-16 relative overflow-hidden"
          style={{ boxShadow: '0 50px 100px -20px rgba(10,26,63,0.08)' }}
        >
          <div className="space-y-6">
            <div className="inline-flex items-center gap-1.5 uppercase font-black" style={{ fontSize: '0.7rem', letterSpacing: '0.15em', color: '#224292' }}>
              <Sparkles size={14} style={{ color: '#ffc107' }} />
              Introduction
            </div>

            <h2 className="font-extrabold tracking-tight leading-tight" style={{ fontSize: 'clamp(1.4rem, 2.5vw, 1.85rem)', color: '#224292' }}>
              To create awareness of the Women’s Right and to empower Women
            </h2>

            <div className="space-y-4 text-[14px] font-normal text-slate-800 leading-[25.2px] text-justify">
              <p>
                A <strong>Women Empowerment Cell (WEC)</strong> was established in our college during 2011–2012 which represents safety, progress, and inclusivity on campus. Created to protect and empower female students and faculty, the WEC builds a harmonious culture through gender-awareness initiatives.
              </p>
              <p>
                It is more than just a support system; it is a dynamic platform where women can freely share their views and advocate for equality. Through its welfare and developmental programs, the cell prepares women to become confident, competent professionals ready to lead.
              </p>
            </div>
          </div>
        </motion.div>
      </div>

      {/* ─── OBJECTIVES SECTION ─── */}
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-10 mt-12">
        <div className="text-center max-w-2xl mx-auto mb-8">
          <h2 className="font-black tracking-tight" style={{ fontSize: 'clamp(1.4rem, 3vw, 2.1rem)', color: '#224292' }}>
            Objectives
          </h2>
          <div className="w-20 h-1.5 rounded-full mx-auto mt-4" style={{ backgroundColor: '#ffc107' }} />
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6"
        >
          {objectives.map((obj, idx) => {
            const Icon = obj.icon
            return (
              <motion.div
                key={idx}
                variants={itemVariants}
                className="bg-white rounded-2xl flex flex-col group relative overflow-hidden transition-all duration-500 hover:-translate-y-2 p-6"
                style={{ boxShadow: '0 8px 24px rgba(0,0,0,0.06)', border: '1px solid #f1f5f9' }}
              >
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 relative z-10 bg-gradient-to-br ${obj.color}`}>
                  <Icon size={22} className={obj.iconColor} />
                </div>

                <h3 className="font-black mb-2 relative z-10 transition-colors duration-300 group-hover:text-[#ffc107]" style={{ fontSize: '1rem', color: '#224292' }}>
                  {obj.title}
                </h3>

                <p className="text-[13px] font-normal leading-[22px] text-slate-700 relative z-10 flex-grow">
                  {obj.desc}
                </p>
              </motion.div>
            )
          })}
        </motion.div>
      </div>

      {/* ─── ROLES AND RESPONSIBILITIES SECTION ─── */}
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-10 mt-16 mb-8">
        <div className="text-center max-w-2xl mx-auto mb-8">
          <h2 className="font-black tracking-tight" style={{ fontSize: 'clamp(1.4rem, 3vw, 2.1rem)', color: '#224292' }}>
            Roles and Responsibilities
          </h2>
          <div className="w-20 h-1.5 rounded-full mx-auto mt-4" style={{ backgroundColor: '#ffc107' }} />
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {roles.map((role, idx) => {
            const Icon = role.icon
            return (
              <motion.div
                key={idx}
                variants={itemVariants}
                className="bg-white rounded-2xl flex flex-col group relative overflow-hidden transition-all duration-500 hover:-translate-y-2 p-6"
                style={{ boxShadow: '0 8px 24px rgba(0,0,0,0.06)', border: '1px solid #f1f5f9' }}
              >
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 relative z-10 bg-gradient-to-br ${role.color}`}>
                  <Icon size={22} className={role.iconColor} />
                </div>

                <h3 className="font-black mb-2 relative z-10 transition-colors duration-300 group-hover:text-[#ffc107]" style={{ fontSize: '1rem', color: '#224292' }}>
                  {role.title}
                </h3>

                <p className="text-[13px] font-normal leading-[22px] text-slate-700 relative z-10 flex-grow">
                  {role.desc}
                </p>
              </motion.div>
            )
          })}
        </motion.div>
      </div>

      {/* ─── COMPOSITION AND MEMBERS SECTION ─── */}
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-10 mt-16">
        <div className="text-center max-w-2xl mx-auto mb-8">
          <h2 className="font-black tracking-tight text-[#224292]" style={{ fontSize: 'clamp(1.4rem, 3vw, 2.1rem)' }}>
            Composition and Members
          </h2>
          <div className="w-20 h-1.5 rounded-full mx-auto mt-4" style={{ backgroundColor: '#ffc107' }} />
        </div>

        {/* Director and Coordinator */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col gap-4 max-w-5xl mx-auto mb-10"
        >
          <div className="bg-white rounded-2xl border border-blue-100 p-6 flex flex-col sm:flex-row items-center gap-4 sm:gap-6 shadow-md hover:shadow-lg transition-shadow">
            <div className="w-14 h-14 rounded-full bg-blue-100 text-[#224292] flex items-center justify-center shrink-0">
              <UserCheck size={28} />
            </div>
            <div className="text-center sm:text-left">
              <h3 className="font-bold text-[#224292] text-lg">Dr. N. Santhiyakumari, M.Tech., Ph.D</h3>
              <p className="text-slate-600 font-medium">Director - WEC</p>
            </div>
          </div>
          
          <div className="bg-white rounded-2xl border border-blue-100 p-6 flex flex-col sm:flex-row items-center gap-4 sm:gap-6 shadow-md hover:shadow-lg transition-shadow">
            <div className="w-14 h-14 rounded-full bg-blue-100 text-[#224292] flex items-center justify-center shrink-0">
              <UserCheck size={28} />
            </div>
            <div className="text-center sm:text-left">
              <h3 className="font-bold text-[#224292] text-lg">Dr. S. Rekha, MSc., M.Phil., Ph.D</h3>
              <p className="text-slate-600 font-medium whitespace-pre-line">Co-ordinator{"\n"}Associate Professor/Chemistry</p>
            </div>
          </div>
        </motion.div>

        {/* Faculty Members Table */}
        <h3 className="font-bold text-[#224292] text-xl mb-4 max-w-5xl mx-auto">Members of Women Empowerment Cell</h3>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-xl shadow-slate-200/50 max-w-5xl mx-auto mb-12"
        >
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-[#224292] text-white">
                  <th className="px-6 py-4 text-[11px] font-bold uppercase tracking-wider text-center w-20 border-r border-white/10">S.No.</th>
                  <th className="px-6 py-4 text-[11px] font-bold uppercase tracking-wider border-r border-white/10">Name</th>
                  <th className="px-6 py-4 text-[11px] font-bold uppercase tracking-wider border-r border-white/10">Designation</th>
                  <th className="px-6 py-4 text-[11px] font-bold uppercase tracking-wider">E Mail</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {facultyMembers.map((member, idx) => (
                  <tr
                    key={idx}
                    className={`group transition-colors ${idx % 2 === 0 ? 'bg-black/[0.01]' : 'bg-transparent'} hover:bg-[#ffc107]/5`}
                  >
                    <td className="px-6 py-4 text-center text-sm font-bold text-[#224292] border-r border-slate-100">{member.sno}</td>
                    <td className="px-6 py-4 text-sm font-bold text-slate-800 border-r border-slate-100">
                      {member.name}
                    </td>
                    <td className="px-6 py-4 text-sm text-slate-600 font-medium whitespace-pre-line border-r border-slate-100">{member.designation}</td>
                    <td className="px-6 py-4 text-sm font-medium">
                      <a href={`mailto:${member.email}`} className="text-blue-600 hover:underline">{member.email}</a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>

        {/* Student Office Bearers Table */}
        <h3 className="font-bold text-[#224292] text-xl mb-4 max-w-5xl mx-auto">Student Office Bearers</h3>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-xl shadow-slate-200/50 max-w-5xl mx-auto"
        >
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-[#224292] text-white">
                  <th className="px-6 py-4 text-[11px] font-bold uppercase tracking-wider text-center w-20 border-r border-white/10">S.No.</th>
                  <th className="px-6 py-4 text-[11px] font-bold uppercase tracking-wider border-r border-white/10">Name</th>
                  <th className="px-6 py-4 text-[11px] font-bold uppercase tracking-wider border-r border-white/10">Designation</th>
                  <th className="px-6 py-4 text-[11px] font-bold uppercase tracking-wider">Coordinating department</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {studentOfficeBearers.map((student, idx) => (
                  <tr
                    key={idx}
                    className={`group transition-colors ${idx % 2 === 0 ? 'bg-black/[0.01]' : 'bg-transparent'} hover:bg-[#ffc107]/5`}
                  >
                    <td className="px-6 py-4 text-center text-sm font-bold text-[#224292] border-r border-slate-100">{student.sno}</td>
                    <td className="px-6 py-4 text-sm font-bold text-slate-800 border-r border-slate-100">
                      {student.name}
                    </td>
                    <td className="px-6 py-4 text-sm text-slate-600 font-medium border-r border-slate-100">{student.designation}</td>
                    <td className="px-6 py-4 text-sm font-bold text-[#224292]">{student.coordinatingDepartment}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>
      </div>

    </div>
  )
}
