import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import {
  Sparkles,
  Users,
  Award,
  GraduationCap,
  User,
  Calendar,
  X,
  Target
} from 'lucide-react'
import "./studentLife.css"

import asset4 from '../assets/student life/Asset 4.webp'
import asset5 from '../assets/student life/Asset 5.webp'
import asset12 from '../assets/student life/Asset 12.webp'
import asset13 from '../assets/student life/Asset 13.webp'
import asset14 from '../assets/student life/Asset 14.webp'
import asset20 from '../assets/student life/Asset 20.webp'
import asset21 from '../assets/student life/Asset 21 (2).webp'
import asset22 from '../assets/student life/Asset 22 (2).webp'
import asset23 from '../assets/student life/Asset 23 (3).webp'
import asset24 from '../assets/student life/Asset 24.webp'
import asset25 from '../assets/student life/Asset 25 (2).webp'
import asset26 from '../assets/student life/Asset 26.webp'

export default function BdbiPage() {

  useEffect(() => {
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
      title: "Emerging Area Excellence",
      desc: "To excel in the emerging areas like Big Data, Data Science, and Machine Learning.",
      icon: Target,
      color: "from-blue-500/10 to-blue-100/50",
      iconColor: "text-[#224292]"
    },
    {
      title: "Student Community",
      desc: "Forming a collaborative community of students having similar technical goals.",
      icon: Users,
      color: "from-yellow-400/10 to-yellow-100/50",
      iconColor: "text-[#d4a017]"
    },
    {
      title: "Data Scientist Training",
      desc: "To train the students systematically to become competent, expert Data Scientists.",
      icon: GraduationCap,
      color: "from-amber-500/10 to-orange-100/50",
      iconColor: "text-amber-600"
    },
    {
      title: "Algorithm Optimization",
      desc: "To choose the best algorithm and achieve high accuracy for solving real-time problems.",
      icon: Award,
      color: "from-purple-500/10 to-purple-100/50",
      iconColor: "text-purple-600"
    }
  ]

  const facultyIncharges = [
    {
      name: "Mr. K. Praveen",
      role: "Assistant Professor / CSE",
      label: "BDBI Club Faculty Incharge"
    },
    {
      name: "Mrs. E. Kirthika",
      role: "Assistant Professor / CSE",
      label: "BDBI Club Faculty Incharge"
    }
  ]

  const studentOfficeBearers = [
    { name: "Rathikasri S K", class: "III Year CSE" },
    { name: "Jaganathan V", class: "III Year CSE" },
    { name: "Kirithik U", class: "II Year CSE" },
    { name: "Madhan E", class: "II Year CSE" }
  ]

  const [activeYear, setActiveYear] = useState('2025-2026')
  const [selectedImage, setSelectedImage] = useState(null)

  const galleryImages = [
    { src: asset4, title: "BDBI Power BI Explorer Series Session" },
    { src: asset5, title: "DATACON Symposium coding challenges" },
    { src: asset12, title: "Python for Data Science Bootcamp classes" },
    { src: asset13, title: "Hands-on Power BI Workshop activity" },
    { src: asset14, title: "GenAI and Data Governance Lecture guest presentation" },
    { src: asset20, title: "Exploratory Data Analysis coding lab practice" },
    { src: asset21, title: "Campus Coders League Contest prize announcement" },
    { src: asset22, title: "Student Machine Learning projects demo" },
    { src: asset23, title: "Data Visualization models review session" },
    { src: asset24, title: "BDBI Club Inauguration Ceremony" },
    { src: asset25, title: "Valedictory Celebration meeting" },
    { src: asset26, title: "Expert Speaker panel discussion" }
  ]

  const activitiesData = {
    "2025-2026": [
      { sno: 1, date: "07.08.2025 to 08.08.2025", event: "Power BI Explorer Series – Phase I", level: "Department Level", guest: "Mr. Praveen K\nAssistant Professor,\nKnowledge Institute of Technology, Salem.", participants: "BDBI Club Members (40)" },
      { sno: 2, date: "10.10.2025", event: "CODE-A-THON", level: "Institute Level", guest: "Mr. Praveen K\nAssistant Professor,\nKnowledge Institute of Technology, Salem.", participants: "External Participants (50)" },
      { sno: 3, date: "25.10.2025", event: "Machine Learning and Data Analytics", level: "Department Level", guest: "Mr. P. Gokulnath\nAssociate Professor of Practice,\nKnowledge Institute of Technology, Salem.", participants: "II CSE Students (50)" },
      { sno: 4, date: "09.01.2026", event: "Campus Coders League (CCL)", level: "Institute Level", guest: "Dr. K. Visagavel\nPrincipal,\nKnowledge Institute of Technology, Salem.", participants: "Internal KIOT Participants (84)" },
      { sno: 5, date: "09.04.2026", event: "Building Interactive Power BI Dashboards", level: "Department Level", guest: "Mr. Praveen K\nAssistant Professor,\nKnowledge Institute of Technology, Salem.", participants: "BDBI Club Members (40)" }
    ],
    "2024-2025": [
      { sno: 1, date: "27.02.2025 to 28.02.2025", event: "Power BI Bootcamp: Unlocking Data Magic", level: "Institute Level", guest: "Mr. Praveen K\nAssistant Professor,\nKnowledge Institute of Technology, Salem.", participants: "External participants (30)" },
      { sno: 2, date: "04.10.2024 to 08.10.2024", event: "Microsoft Power BI Workshop: Series 1", level: "Department Level", guest: "Mr. Praveen K\nAssistant Professor,\nKnowledge Institute of Technology, Salem.", participants: "BDBI Club Members & Data Science Vertical Opted Students (40)" }
    ],
    "2023-2024": [
      { sno: 1, date: "25.04.2024", event: "Session-1 of Data Science & Analytics - A Sneak Peak into GenAI and Data Governance", level: "Department Level", guest: "Mr. Pradeep Narayanamoorthy\nHead of Data Engineering and Governance", participants: "10 CSE + Faculty Members" },
      { sno: 2, date: "08.02.2024 to 09.02.2024", event: "Workshop Series II on \"Microsoft Power BI\"", level: "Department Level", guest: "Mr. Praveen K\nAssistant Professor,\nKnowledge Institute of Technology, Salem.", participants: "BDBI Club Members & Data Science Vertical Opted Students (44)" },
      { sno: 3, date: "19.10.2023", event: "Guest Lecture on Roadmap for an AI/ML & Data Science Career", level: "Department Level", guest: "Mr. Illamparithi Muthusamy\nStaff Software Engineer | BigData at Uber, Bengaluru, Karnataka, India.", participants: "BDBI Club Members & Data Science Vertical Opted Students (44)" },
      { sno: 4, date: "31.08.2023", event: "Knowledge Transfer Session on Git & GitHub", level: "Department Level", guest: "Mr. Praveen K\nAssistant Professor,\nKnowledge Institute of Technology, Salem.", participants: "BDBI Club Members & Data Science Vertical Opted Students (44)" },
      { sno: 5, date: "10.08.2023 to 11.08.2023", event: "Workshop on \"Microsoft Power BI\"", level: "Department Level", guest: "Mr. Praveen K\nAssistant Professor,\nKnowledge Institute of Technology, Salem.", participants: "BDBI Club Members & Data Science Vertical Opted Students (44)" },
      { sno: 6, date: "07.08.2023 to 25.08.2023", event: "Hands-on-session on Microsoft Power BI", level: "College Level", guest: "Mr. Sathishkumar Paramasivam\nFounder and CEO, I18n Solutions, Organizer GDG Salem.", participants: "IV CSE, IT, CSBS & EEE Students (40)" },
      { sno: 7, date: "20.07.2023 to 21.07.2023", event: "Workshop on \"Exploratory Data Analysis\"", level: "Department Level", guest: "Mr. Praveen K\nAssistant Professor,\nKnowledge Institute of Technology, Salem.", participants: "BDBI Club Members & Data Science Vertical Opted Students (44)" }
    ],
    "2022-2023": [
      { sno: 1, date: "20.04.2023", event: "Knowledge Transfer session on \"Machine Learning\"", level: "Department Level", guest: "Mr. Praveen K\nAssistant Professor,\nKnowledge Institute of Technology, Salem.", participants: "BDBI Club Members (41)" },
      { sno: 2, date: "09.03.2023", event: "Workshop on \"Machine Learning\"", level: "Department Level", guest: "Mr. Praveen K\nAssistant Professor,\nKnowledge Institute of Technology, Salem.", participants: "BDBI Club Members (41)" },
      { sno: 3, date: "05.04.2023 to 07.04.2023", event: "Guest Lecture on \"Insights on Data Science\"", level: "Department Level", guest: "Mr. Sathishkumar Paramasivam\nFounder and CEO, I18n Solutions, Organizer GDG Salem.", participants: "III CSE Students" },
      { sno: 4, date: "21.12.2022 to 28.12.2022", event: "Workshop on \"Problem Solving and Python Programming\"", level: "Department Level", guest: "Mr. Ravikumar K, Mrs. Malarvizhli P, Mrs. Sathyapriya R, Mrs. Satyapriya V, Mr. Praveen K\nAssistant Professors, CSE,\nKnowledge Institute of Technology, Salem.", participants: "I CSE Students" }
    ],
    "2021-2022": [
      { sno: 1, date: "07.03.2022", event: "Women's Day Celebration at Virtusa - Online Event", level: "College Level", guest: "Dr. Malvika Iyer\nCorporate Trainer, TEDx Speaker", participants: "III-year Girl Students" },
      { sno: 2, date: "11.02.2022", event: "Workshop on Big Data Applications and Data Science Packages", level: "Department Level", guest: "Mr. Praveen K\nAssistant Professor,\nKnowledge Institute of Technology, Salem.", participants: "BDBI Club Members (34)" },
      { sno: 3, date: "06.01.2022", event: "Master Class Webinar on Data Science by NASSCOM", level: "College Level", guest: "Mr. Ramachandran Meenakshisundaram\nChief Technology Officer, Virtusa Corporation.", participants: "Virtusa Placed Students" }
    ]
  }

  const consolidatedReport = [
    { year: "2025 - 2026", count: 5 },
    { year: "2024 - 2025", count: 2 },
    { year: "2023 - 2024", count: 7 },
    { year: "2022 - 2023", count: 4 },
    { year: "2021 - 2022", count: 3 }
  ]

  return (
    <div className="min-h-screen bg-[#F8FAFC] pb-24 selection:bg-[#ffc107]/20">

      {/* ─── HERO HEADER SECTION ─── */}
      <div
        className="relative pt-16 pb-20 overflow-hidden rounded-b-[3rem] lg:rounded-b-[4rem]"
        style={{ backgroundColor: '#224292' }}
      >
        {/* Background Grid Ornament */}
        <div className="absolute inset-0 pointer-events-none" style={{
          backgroundImage: 'linear-gradient(to right, rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.04) 1px, transparent 1px)',
          backgroundSize: '40px 40px'
        }} />

        {/* Gradient Orbs */}
        <div className="absolute -top-40 -right-40 w-96 h-96 rounded-full pointer-events-none" style={{ backgroundColor: 'rgba(34,66,146,0.3)', filter: 'blur(100px)' }} />
        <div className="absolute -bottom-40 -left-40 w-96 h-96 rounded-full pointer-events-none" style={{ backgroundColor: 'rgba(255,193,7,0.1)', filter: 'blur(100px)' }} />

        <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-10 relative z-10">

          {/* Title & Tagline */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="max-w-3xl text-center mx-auto"
          >
            <h1 className="font-black tracking-tight leading-none mb-3" style={{ fontSize: 'clamp(2rem, 5vw, 3rem)', color: '#ffc107' }}>
              BDBI
            </h1>

            <p className="font-bold tracking-wide uppercase mb-3 text-white/90" style={{ fontSize: 'clamp(0.85rem, 1.8vw, 1.1rem)', letterSpacing: '0.05em' }}>
              Big Data Big Insights Club
            </p>
            <p className="font-semibold text-white/70 text-xs sm:text-sm text-center">
              (An Autonomous Institution)
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
          className="bg-white rounded-[1.5rem] sm:rounded-[2.5rem] border border-slate-100 p-5 sm:p-8 lg:p-16"
          style={{ boxShadow: '0 50px 100px -20px rgba(10,26,63,0.08)' }}
        >
          <div className="space-y-6">

            <div className="inline-flex items-center gap-1.5 uppercase font-black" style={{ fontSize: '0.7rem', letterSpacing: '0.15em', color: '#224292' }}>
              <Sparkles size={14} style={{ color: '#ffc107' }} />
              About the Club
            </div>

            <h2 className="font-extrabold tracking-tight leading-tight" style={{ fontSize: 'clamp(1.4rem, 2.5vw, 1.85rem)', color: '#224292' }}>
              About Us – BDBI Club (Big Data Big Insights Club)
            </h2>

            <div className="space-y-4 text-[14px] font-normal text-slate-800 leading-[25.2px] text-justify">
              <p>
                The Big Data Big Insights (BDBI) Club is a student-driven technical community dedicated to exploring the rapidly evolving fields of Big Data, Data Science, Machine Learning, and Artificial Intelligence. The club provides a collaborative platform where students with similar interests come together to learn, innovate, and solve real-world challenges using data-driven technologies.
              </p>
              <p>
                Our mission is to bridge the gap between academic learning and industry requirements by organizing hands-on workshops, coding sessions, expert talks, hackathons, and project-based learning activities. Through continuous learning and practical exposure, we aim to develop skilled and industry-ready data professionals capable of building intelligent solutions for real-world problems.
              </p>
            </div>
          </div>
        </motion.div>
      </div>

      {/* ─── OBJECTIVES / PILLARS SECTION ─── */}
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-10 mt-10">
        <div className="text-center max-w-2xl mx-auto mb-8">
          <h2 className="font-black tracking-tight" style={{ fontSize: 'clamp(1.4rem, 3vw, 2.1rem)', color: '#224292' }}>
            Objectives
          </h2>
          <div className="w-20 h-1.5 rounded-full mx-auto mt-6" style={{ backgroundColor: '#ffc107' }} />
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6"
        >
          {objectives.map((obj, idx) => {
            const Icon = obj.icon
            return (
              <motion.div
                key={idx}
                variants={itemVariants}
                className="bg-white rounded-2xl flex flex-col group relative overflow-hidden transition-all duration-500 hover:-translate-y-2"
                style={{ padding: '1.4rem 1.6rem', boxShadow: '0 8px 24px rgba(0,0,0,0.12), 0 2px 6px rgba(0,0,0,0.08)', border: '1px solid #f1f5f9' }}
                onMouseEnter={e => e.currentTarget.style.boxShadow = '0 16px 40px rgba(0,0,0,0.22), 0 4px 10px rgba(0,0,0,0.14)'}
                onMouseLeave={e => e.currentTarget.style.boxShadow = '0 8px 24px rgba(0,0,0,0.12), 0 2px 6px rgba(0,0,0,0.08)'}
              >
                {/* Decorative background */}
                <div className="absolute top-0 right-0 w-16 h-16 rounded-bl-[2.5rem] transition-all duration-500 group-hover:scale-110" style={{ background: 'linear-gradient(135deg, #f8fafc, rgba(241,245,249,0.5))' }} />

                <div className={`w-10 h-10 rounded-xl flex items-center justify-center mb-4 relative z-10 bg-gradient-to-br ${obj.color}`}>
                  <Icon size={18} className={obj.iconColor} />
                </div>

                <h3 className="font-black mb-3 relative z-10 transition-colors duration-300 group-hover:text-[#ffc107]" style={{ fontSize: '0.95rem', color: '#224292' }}>
                  {obj.title}
                </h3>

                <p className="text-[13px] font-normal leading-[22px] text-slate-800 relative z-10 flex-grow">
                  {obj.desc}
                </p>
              </motion.div>
            )
          })}
        </motion.div>
      </div>

      {/* ─── LEADERSHIP & FACULTY SECTION ─── */}
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-10 mt-12">
        <div className="text-center max-w-2xl mx-auto mb-8">
          <h2 className="font-black tracking-tight" style={{ fontSize: 'clamp(1.4rem, 3vw, 2.1rem)', color: '#224292' }}>
            Faculty Incharges & Student Bearers
          </h2>
          <div className="w-20 h-1.5 rounded-full mx-auto mt-6" style={{ backgroundColor: '#ffc107' }} />
        </div>

        {/* Faculty Incharges Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto mb-10">
          {facultyIncharges.map((fac, idx) => (
            <motion.div
              key={idx}
              variants={itemVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="bg-white rounded-2xl p-6 flex items-center gap-6 border border-slate-100 relative overflow-hidden transition-all duration-500 hover:-translate-y-1"
              style={{ boxShadow: '0 8px 24px rgba(0,0,0,0.12), 0 2px 6px rgba(0,0,0,0.08)' }}
            >
              <div className="w-14 h-14 rounded-2xl flex items-center justify-center flex-shrink-0" style={{ backgroundColor: 'rgba(34, 66, 146, 0.08)' }}>
                <GraduationCap size={28} style={{ color: '#224292' }} />
              </div>
              <div>
                <span className="uppercase font-black tracking-wider text-xs block mb-1" style={{ color: '#ffc107' }}>
                  {fac.label}
                </span>
                <h3 className="font-black text-lg mb-1" style={{ color: '#224292' }}>
                  {fac.name}
                </h3>
                <p className="font-medium text-xs text-slate-500">
                  {fac.role}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Student Office Bearers Grid */}
        <div>
          <h3 className="font-black text-center text-md mb-8 uppercase tracking-wider" style={{ color: '#224292' }}>
            Office Bearers
          </h3>
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto"
          >
            {studentOfficeBearers.map((bearer, idx) => (
              <motion.div
                key={idx}
                variants={itemVariants}
                className="bg-white rounded-xl p-4 flex items-center gap-4 border border-slate-100 transition-all duration-300 hover:shadow-lg"
                style={{ boxShadow: '0 4px 12px rgba(0,0,0,0.08)' }}
              >
                <div className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0" style={{ backgroundColor: 'rgba(34, 66, 146, 0.04)' }}>
                  <User size={16} style={{ color: '#224292' }} />
                </div>
                <div className="min-w-0 flex-1">
                  <h4 className="text-[14px] font-normal leading-[25.2px] text-slate-800 truncate">
                    {bearer.name}
                  </h4>
                  <span className="text-[10px] font-bold text-slate-500 uppercase tracking-wider">
                    {bearer.class}
                  </span>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* ─── LIST OF ACTIVITIES SECTION ─── */}
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-10 mt-12 mb-8">
        <div className="text-center max-w-2xl mx-auto mb-6">
          <h2 className="font-black tracking-tight" style={{ fontSize: 'clamp(1.4rem, 3vw, 2.1rem)', color: '#224292' }}>
            Club Activities
          </h2>
          <div className="w-20 h-1.5 rounded-full mx-auto mt-6" style={{ backgroundColor: '#ffc107' }} />
        </div>

        {/* Tab Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-6">
          {Object.keys(activitiesData).map((year) => (
            <button
              key={year}
              onClick={() => setActiveYear(year)}
              className="px-6 py-3 rounded-full font-black text-xs transition-all duration-300 transform active:scale-95 shadow-md"
              style={{
                backgroundColor: activeYear === year ? '#224292' : '#ffffff',
                color: activeYear === year ? '#ffffff' : '#224292',
                border: `2px solid ${activeYear === year ? '#224292' : 'rgba(34, 66, 146, 0.15)'}`,
                boxShadow: activeYear === year ? '0 10px 20px rgba(34, 66, 146, 0.2)' : '0 4px 6px rgba(0, 0, 0, 0.05)'
              }}
            >
              {year}
            </button>
          ))}
        </div>

        {/* Table Container */}
        <motion.div
          key={activeYear}
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-xl shadow-slate-200/50"
        >
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-[#224292] text-white">
                  <th className="px-4 py-3.5 text-[11px] font-black tracking-wider border-r border-white/10 w-12 text-center">S.No</th>
                  <th className="px-4 py-3.5 text-[11px] font-black tracking-wider border-r border-white/10 w-28 text-center">Date</th>
                  <th className="px-4 py-3.5 text-[11px] font-black tracking-wider border-r border-white/10 w-64 text-left">Name of the Event</th>
                  <th className="px-4 py-3.5 text-[11px] font-black tracking-wider border-r border-white/10 w-36 text-left">Level</th>
                  <th className="px-4 py-3.5 text-[11px] font-black tracking-wider border-r border-white/10 text-left">Resource Person</th>
                  <th className="px-4 py-3.5 text-[11px] font-black tracking-wider w-44 text-center">No. of Participants</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {activitiesData[activeYear].map((item, idx) => (
                  <tr key={idx} className="hover:bg-slate-50 transition-colors group">
                    <td className="px-4 py-3 text-[14px] font-normal text-center text-slate-800 border-r border-slate-50 leading-[25.2px]">{item.sno}</td>
                    <td className="px-4 py-3 text-[14px] font-normal text-center text-slate-800 border-r border-slate-50 leading-[25.2px]">
                      <div className="flex items-center justify-center gap-2">
                        <Calendar size={14} className="text-slate-400 shrink-0" />
                        <span>{item.date}</span>
                      </div>
                    </td>
                    <td className="px-4 py-3 text-[14px] font-semibold text-left text-[#224292] border-r border-slate-50 leading-[25.2px]">
                      {item.event}
                    </td>
                    <td className="px-4 py-3 text-[14px] font-normal text-left text-slate-800 border-r border-slate-50 leading-[25.2px]">
                      {item.level}
                    </td>
                    <td className="px-4 py-3 text-[14px] font-normal text-left text-slate-800 border-r border-slate-50 leading-[25.2px] whitespace-pre-line">
                      {item.guest}
                    </td>
                    <td className="px-4 py-3 text-[14px] font-normal text-center text-slate-800 border-r border-slate-50 leading-[25.2px] bg-slate-50/50 group-hover:bg-slate-50 transition-colors">
                      {item.participants}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>
      </div>

      {/* ─── CONSOLIDATED YEAR-WISE REPORT SECTION ─── */}
      <div className="max-w-xl mx-auto px-3 sm:px-6 mt-12 mb-8">
        <div className="text-center mb-6">
          <h2 className="font-black tracking-tight" style={{ fontSize: 'clamp(1.2rem, 2.5vw, 1.8rem)', color: '#224292' }}>
            Consolidated Activities Report
          </h2>
          <div className="w-16 h-1 rounded-full mx-auto mt-4" style={{ backgroundColor: '#ffc107' }} />
        </div>

        <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-xl shadow-slate-200/50">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-slate-100 text-slate-800 border-b border-slate-200">
                <th className="px-6 py-4 text-xs font-bold uppercase tracking-wider text-center">Academic Year</th>
                <th className="px-6 py-4 text-xs font-bold uppercase tracking-wider text-center">Number of Activities Conducted</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {consolidatedReport.map((row, idx) => (
                <tr key={idx} className="hover:bg-slate-50 transition-colors">
                  <td className="px-6 py-4 text-[14px] font-normal text-slate-800 text-center">{row.year}</td>
                  <td className="px-6 py-4 text-[14px] font-normal text-slate-800 text-center font-bold">{row.count}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* ─── GALLERY SECTION ─── */}
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-10 mt-12 mb-8 gallery-section">
        <div className="text-center max-w-2xl mx-auto mb-6 gallery-header">
          <h2 className="font-black tracking-tight" style={{ fontSize: 'clamp(1.4rem, 3vw, 2.1rem)', color: '#224292' }}>
            Event Gallery
          </h2>
          <div className="w-20 h-1.5 rounded-full mx-auto mt-6" style={{ backgroundColor: '#ffc107' }} />
          <p className="mt-6 text-slate-600 font-medium">Glimpses of activities, workshops, and achievements of the BDBI Club.</p>
        </div>

        <div className="gallery-grid">
          {galleryImages.map((img, idx) => (
            <div key={idx} className="gallery-item relative overflow-hidden cursor-pointer group" onClick={() => setSelectedImage(img)}>
              <img src={img.src} alt={img.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#224292]/95 via-[#224292]/40 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 flex flex-col justify-end p-4">
                <p className="text-white font-bold text-xs leading-snug line-clamp-3">{img.title}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* LIGHTBOX POPUP */}
      {selectedImage && (
        <div className="lightbox-overlay" onClick={() => setSelectedImage(null)}>
          <div 
            className="bg-white rounded-3xl overflow-hidden shadow-2xl flex flex-col md:flex-row max-w-5xl w-full max-h-[90vh] md:max-h-[80vh] relative" 
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button 
              className="absolute top-4 right-4 z-50 w-10 h-10 rounded-full bg-slate-100 hover:bg-slate-200 flex items-center justify-center text-slate-800 transition-colors shadow"
              onClick={() => setSelectedImage(null)}
            >
              <X size={20} />
            </button>

            {/* Left side: Image */}
            <div className="md:w-3/5 bg-slate-950 flex items-center justify-center p-2 relative min-h-[300px] md:min-h-0">
              <img 
                src={selectedImage.src} 
                alt={selectedImage.title} 
                className="max-w-full max-h-[40vh] md:max-h-[75vh] object-contain rounded-lg" 
              />
            </div>

            {/* Right side: Content */}
            <div className="md:w-2/5 p-8 sm:p-10 flex flex-col justify-center bg-white overflow-y-auto">
              <div className="inline-flex items-center gap-1.5 uppercase font-black text-xs mb-4 text-[#224292]">
                <Calendar size={14} style={{ color: '#ffc107' }} />
                Major Activity
              </div>
              <h3 className="font-extrabold text-xl sm:text-2xl text-[#224292] leading-tight mb-4">
                BDBI Event Gallery
              </h3>
              <p className="text-[14px] font-normal text-slate-800 leading-[25.2px] text-justify whitespace-pre-line">
                {selectedImage.title}
              </p>
            </div>
          </div>
        </div>
      )}

    </div>
  )
}
