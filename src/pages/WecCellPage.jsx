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

  const internalCommitteeMembers = [
    { sno: 1, name: "Dr. T.K. Santhi", affiliation: "ASP / English", position: "Presiding Officer", contact: "tkseng@kiot.ac.in" },
    { sno: 2, name: "Dr. N. Santhiyakumari", affiliation: "Professor / ECE", position: "Member", contact: "dirrd@kiot.ac.in" },
    { sno: 3, name: "Dr. P. Navaneethakrishnan", affiliation: "Professor / MECH.", position: "Member", contact: "directorsa@kiot.ac.in" },
    { sno: 4, name: "Ms. B. Jayashree", affiliation: "Advocate, Salem", position: "External Member", contact: "jayashreebaskar3@gmail.com" },
    { sno: 5, name: "Mrs. R. Pushpalatha", affiliation: "AP / CSE", position: "Member", contact: "rplcse@kiot.ac.in" },
    { sno: 6, name: "Dr. A. Gomathi", affiliation: "ASP / AI&DS", position: "Member", contact: "agit@kiot.ac.in" },
    { sno: 7, name: "Mrs. A. Elavarasi", affiliation: "AP / MECH.", position: "Member", contact: "aemech@kiot.ac.in" },
    { sno: 8, name: "Mrs. K. Sudha", affiliation: "AP / Maths (S&H)", position: "Member", contact: "ksmat@kiot.ac.in" },
    { sno: 9, name: "Ms. D. Senchulakshmi", affiliation: "AP / MBA", position: "Member", contact: "dsmba@kiot.ac.in" },
    { sno: 10, name: "Mr. R. Sekar", affiliation: "LT / MECH.", position: "Member", contact: "mechoa@kiot.ac.in" },
    { sno: 11, name: "Mrs. P. Rathinam", affiliation: "Programmer/EMS", position: "Member", contact: "rathinamnatarajan01@gmail.com" },
    { sno: 12, name: "Ms. M. Manju", affiliation: "B.E. II year Mech.", position: "Member (Student)", contact: "2k25me056@kiot.ac.in" },
    { sno: 13, name: "Ms. A. Rekha", affiliation: "B.E. II year ECE", position: "Member (Student)", contact: "2k25ece124@kiot.ac.in" },
    { sno: 14, name: "Mr. K. Jeevanathan", affiliation: "B.E. II year CSE", position: "Member (Student)", contact: "2k25cse097@kiot.ac.in" },
    { sno: 15, name: "Mr. B. Nithish", affiliation: "B.Tech. II year IT", position: "Member (Student)", contact: "2k25it067@kiot.ac.in" }
  ]

  const activities = [
    {
      sno: 1,
      nature: "Celebration",
      name: "Women's Equality Day Celebration 2023\nCompetition Themes:\n1. Poster Presentation (My Exemplary Woman Leader / Women's Rights are Human Rights)\n2. Nail Art (Any creative, appealing and original artwork)\n3. Speech Competition (English or Tamil: Embrace Equity / Women in Leadership)",
      date: "26.08.2023",
      resourcePerson: "1. Dr. N. Santhiyakumari (Professor/Head, Department of ECE & Chairperson - ICC)\n2. Dr. T. K. Santhi (ASP/English)\n3. Mrs. P. Malarvizhi (AP/CSE)\n4. Mrs. S. Saranya (AP/Maths)"
    },
    {
      sno: 2,
      nature: "Motivational Lecture",
      name: "Celebration of International Day of the Girl Child 2023",
      date: "11.10.2023",
      resourcePerson: "Mrs. Roja Ramani (Clinical Psychologist, AP Medical)"
    },
    {
      sno: 3,
      nature: "Awareness Program",
      name: "POSH/ ICC Awareness & Grievances Redressal Meeting",
      date: "04.11.2023",
      resourcePerson: "Dr. N. Santhiyakumari (Chairperson - POSH/ICC)"
    },
    {
      sno: 4,
      nature: "Motivational Speech",
      name: "Motivational Speech on Empower HER",
      date: "14.12.2023",
      resourcePerson: "Ms. Bhuvana Nakul (IT Corporate mid-career)"
    },
    {
      sno: 5,
      nature: "Competition",
      name: "Competition in Mehandi and Rangoli",
      date: "27.12.2023",
      resourcePerson: "Internal Jury members"
    },
    {
      sno: 6,
      nature: "Competition",
      name: "Competition on We Empower One Another",
      date: "10.01.2024",
      resourcePerson: "Internal Jury members"
    },
    {
      sno: 7,
      nature: "Awareness Program",
      name: "Awareness Program on Ritu Vidhya Women's Health & Hygiene",
      date: "21.02.2024",
      resourcePerson: "Dr. Gayathri Devi Kannan (K.G. Siddha, Kaviraj)"
    },
    {
      sno: 8,
      nature: "Motivational Program",
      name: "Motivational Program on Inspire Inclusion",
      date: "08.03.2024",
      resourcePerson: "Mrs. N. Anicham Kanimozhi (Entrepreneur & Social Activist)"
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
        <h3 className="font-bold text-[#224292] text-xl mb-4 max-w-5xl mx-auto mt-12">Student Office Bearers</h3>
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

      {/* ─── ACTIVITIES SECTION ─── */}
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-10 mt-16 mb-8">
        <div className="text-center max-w-2xl mx-auto mb-8">
          <h2 className="font-black tracking-tight text-[#224292]" style={{ fontSize: 'clamp(1.4rem, 3vw, 2.1rem)' }}>
            Women Empowerment Cell Activities
          </h2>
          <p className="font-bold text-slate-600 mt-2">2023 - 2024</p>
          <div className="w-20 h-1.5 rounded-full mx-auto mt-4" style={{ backgroundColor: '#ffc107' }} />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-xl shadow-slate-200/50 max-w-7xl mx-auto"
        >
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-[#224292] text-white">
                  <th className="px-6 py-4 text-[11px] font-bold uppercase tracking-wider text-center w-20 border-r border-white/10 whitespace-nowrap">S.No.</th>
                  <th className="px-6 py-4 text-[11px] font-bold uppercase tracking-wider border-r border-white/10 whitespace-nowrap">Nature of the Program</th>
                  <th className="px-6 py-4 text-[11px] font-bold uppercase tracking-wider border-r border-white/10 min-w-[300px]">Name of the Program</th>
                  <th className="px-6 py-4 text-[11px] font-bold uppercase tracking-wider border-r border-white/10 whitespace-nowrap">Date</th>
                  <th className="px-6 py-4 text-[11px] font-bold uppercase tracking-wider min-w-[250px]">Resource Person</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {activities.map((activity, idx) => (
                  <tr
                    key={idx}
                    className={`group transition-colors ${idx % 2 === 0 ? 'bg-black/[0.01]' : 'bg-transparent'} hover:bg-[#ffc107]/5`}
                  >
                    <td className="px-6 py-4 text-center text-sm font-bold text-[#224292] border-r border-slate-100 align-top">{activity.sno}</td>
                    <td className="px-6 py-4 text-sm font-bold text-slate-800 border-r border-slate-100 align-top">
                      {activity.nature}
                    </td>
                    <td className="px-6 py-4 text-sm text-slate-600 font-medium whitespace-pre-line border-r border-slate-100 align-top">
                      {activity.name}
                    </td>
                    <td className="px-6 py-4 text-sm font-bold text-[#224292] border-r border-slate-100 align-top whitespace-nowrap">
                      {activity.date}
                    </td>
                    <td className="px-6 py-4 text-sm text-slate-600 font-medium whitespace-pre-line align-top">
                      {activity.resourcePerson}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>
      </div>

      {/* ─── INTERNAL COMMITTEE SECTION ─── */}
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-10 mt-16 mb-16">
        <div className="text-center max-w-4xl mx-auto mb-8">
          <h2 className="font-black tracking-tight text-[#224292]" style={{ fontSize: 'clamp(1.4rem, 3vw, 2.1rem)' }}>
            Internal Committee (IC)
          </h2>
          <p className="font-bold text-slate-600 mt-2 text-sm sm:text-base">
            (As per POSH Act 2013) <br className="hidden sm:block" />
            (The Sexual Harassment (Prevention, Prohibition and Redressal) Act 2013)
          </p>
          <div className="w-20 h-1.5 rounded-full mx-auto mt-4" style={{ backgroundColor: '#ffc107' }} />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-white rounded-2xl shadow-xl shadow-slate-200/50 border border-slate-200 p-6 md:p-10 max-w-5xl mx-auto"
        >
          <p className="text-slate-700 leading-relaxed text-justify sm:text-left text-sm sm:text-base mb-8">
            Knowledge Institute of Technology, Salem, an autonomous institution, is dedicated to fostering a secure academic and professional environment for all its women students and employees. In strict compliance with the guidelines stipulated by the University Grants Commission (UGC) and the All India Council for Technical Education (AICTE), and in accordance with the Sexual Harassment of Women at Workplace (Prevention, Prohibition & Redressal) Act, 2013, an Internal Committee was formally constituted at the institution in 2018.
          </p>

          <div className="space-y-8">
            <div>
              <h3 className="font-bold text-[#224292] text-lg mb-4 flex items-center gap-2">
                <Target size={20} className="text-[#ffc107]" /> Objectives
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#ffc107] mt-2 shrink-0"></span>
                  <span className="text-slate-700 text-sm sm:text-base leading-relaxed">
                    To provide a safe, secure and congenial atmosphere to all the women students and staff members of the institution.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#ffc107] mt-2 shrink-0"></span>
                  <span className="text-slate-700 text-sm sm:text-base leading-relaxed">
                    To provide a neutral, confidential and supportive environment for members of the campus who may have been sexually harassed.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#ffc107] mt-2 shrink-0"></span>
                  <span className="text-slate-700 text-sm sm:text-base leading-relaxed">
                    The Internal Committee (IC) aims to eliminate workplace sexual harassment by raising awareness on the Sexual Harassment of Women at Workplace (Prevention, Prohibition & Redressal) Act, 2013 (POSH Act) to all the students and employees.
                  </span>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-bold text-[#224292] text-lg mb-4 flex items-center gap-2">
                <Briefcase size={20} className="text-[#ffc107]" /> Roles and Responsibilities
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#ffc107] mt-2 shrink-0"></span>
                  <span className="text-slate-700 text-sm sm:text-base leading-relaxed">
                    Formulate and widely disseminate an internal policy or declaration for prohibition, prevention and redressal of sexual harassment at the workplace.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#ffc107] mt-2 shrink-0"></span>
                  <span className="text-slate-700 text-sm sm:text-base leading-relaxed">
                    Conduct awareness activities like trainings, seminars etc., to sensitize students and employees about Sexual Harassment Act. 2013.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#ffc107] mt-2 shrink-0"></span>
                  <span className="text-slate-700 text-sm sm:text-base leading-relaxed">
                    Create awareness among all students and employees of the institution about SH Act 2013 by organizing workshop, lecture, poster, etc.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#ffc107] mt-2 shrink-0"></span>
                  <span className="text-slate-700 text-sm sm:text-base leading-relaxed">
                    Implement Zero Tolerance Policy (ZTP) against sexual harassment in the institution.
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </motion.div>

        {/* IC Members Table */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-xl shadow-slate-200/50 max-w-5xl mx-auto mt-12"
        >
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-[#224292] text-white">
                  <th className="px-6 py-4 text-[11px] font-bold uppercase tracking-wider text-center w-20 border-r border-white/10">S.No.</th>
                  <th className="px-6 py-4 text-[11px] font-bold uppercase tracking-wider border-r border-white/10">Name</th>
                  <th className="px-6 py-4 text-[11px] font-bold uppercase tracking-wider border-r border-white/10">Affiliation</th>
                  <th className="px-6 py-4 text-[11px] font-bold uppercase tracking-wider border-r border-white/10">Position</th>
                  <th className="px-6 py-4 text-[11px] font-bold uppercase tracking-wider">Contact Details</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {internalCommitteeMembers.map((member, idx) => (
                  <tr
                    key={idx}
                    className={`group transition-colors ${idx % 2 === 0 ? 'bg-black/[0.01]' : 'bg-transparent'} hover:bg-[#ffc107]/5`}
                  >
                    <td className="px-6 py-4 text-center text-sm font-bold text-[#224292] border-r border-slate-100">{member.sno}</td>
                    <td className="px-6 py-4 text-sm font-bold text-slate-800 border-r border-slate-100 whitespace-nowrap">{member.name}</td>
                    <td className="px-6 py-4 text-sm text-slate-600 font-medium border-r border-slate-100 whitespace-nowrap">{member.affiliation}</td>
                    <td className="px-6 py-4 text-sm text-slate-600 font-medium border-r border-slate-100 whitespace-nowrap">{member.position}</td>
                    <td className="px-6 py-4 text-sm font-bold text-[#224292]">{member.contact}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>

        {/* Additional Details Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12 max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-2xl shadow-xl shadow-slate-200/50 border border-slate-200 p-6 md:p-8"
          >
            <h3 className="font-bold text-[#224292] text-lg mb-6 pb-4 border-b border-slate-100 flex items-center gap-2">
              <UserCheck size={20} className="text-[#ffc107]" /> Tenure of IC Members
            </h3>
            <div className="space-y-4">
              <div className="flex justify-between items-center bg-slate-50 p-4 rounded-xl border border-slate-100">
                <span className="font-semibold text-slate-700">Internal members</span>
                <span className="font-bold text-[#224292] bg-blue-100/50 px-3 py-1 rounded-full text-sm">3 years</span>
              </div>
              <div className="flex justify-between items-center bg-slate-50 p-4 rounded-xl border border-slate-100">
                <span className="font-semibold text-slate-700">External Members</span>
                <span className="font-bold text-[#224292] bg-blue-100/50 px-3 py-1 rounded-full text-sm">3 Years</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="bg-white rounded-2xl shadow-xl shadow-slate-200/50 border border-slate-200 p-6 md:p-8"
          >
            <h3 className="font-bold text-[#224292] text-lg mb-6 pb-4 border-b border-slate-100 flex items-center gap-2">
              <Target size={20} className="text-[#ffc107]" /> Frequency of Meeting
            </h3>
            <div className="space-y-4">
              <p className="font-bold text-[#224292] text-center bg-blue-50 p-3 rounded-xl text-sm border border-blue-100">
                3 meetings per year (or more frequently, if needed)
              </p>
              <ul className="space-y-3 mt-4">
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#ffc107] mt-2 shrink-0"></span>
                  <span className="text-slate-700 text-sm leading-relaxed">
                    Activities plan for the current academic year
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#ffc107] mt-2 shrink-0"></span>
                  <span className="text-slate-700 text-sm leading-relaxed">
                    Issues on SH, grievances, etc.
                  </span>
                </li>
              </ul>
            </div>
          </motion.div>
        </div>

      </div>

    </div>
  )
}
