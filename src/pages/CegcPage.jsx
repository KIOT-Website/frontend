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
  Target,
  Briefcase
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

export default function CegcPage() {

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
      title: "Higher Studies Knowledge",
      desc: "To Acquire the knowledge in Higher Studies.",
      icon: GraduationCap,
      color: "from-blue-500/10 to-blue-100/50",
      iconColor: "text-[#224292]"
    },
    {
      title: "Competitive Exams Orientation",
      desc: "To Create the knowledge about competitive Exams like CAT, MAT, TOEFL & TNPSC.",
      icon: Target,
      color: "from-yellow-400/10 to-yellow-100/50",
      iconColor: "text-[#d4a017]"
    },
    {
      title: "Career Development Foundation",
      desc: "To develop an individual inventory of valuable career development foundation skills.",
      icon: Award,
      color: "from-amber-500/10 to-orange-100/50",
      iconColor: "text-amber-600"
    }
  ]

  const facultyIncharges = [
    {
      name: "Mrs. P. Rekha",
      role: "Assistant Professor / EEE",
      label: "CEGC Staff Coordinator"
    }
  ]

  const [activeYear, setActiveYear] = useState('2025-2026')
  const [activeStudentYear, setActiveStudentYear] = useState('2025-2026')
  const [selectedImage, setSelectedImage] = useState(null)

  const galleryImages = [
    { 
      src: asset4, 
      title: "Career Awareness Program on Civil Services Examination (IAS, IPS & IFS) by Ms. Sujeetha Salman, IPS, Superintendent of Police, Hassan District, Karnataka on 18.09.2025." 
    },
    { 
      src: asset5, 
      title: "GATE Preparation Strategies by Mr.S.Shanmugam, Professor of Practice, Mechanical Engineering, KIOT, Salem on 28.01.2026." 
    },
    { 
      src: asset12, 
      title: "Awareness Program on Job Opportunities in Government Sectors by Mr. M.Krishnakumar, Administrator and Mr.A.Premkumar, Marketing Manager, Future Vision Academy, Salem on 15.10.24." 
    },
    { 
      src: asset13, 
      title: "Awareness Program on CAT and Careers in Management by Mr. B.Gunasekar, Founder and Managing Director, The Institute of Career Excellence Academy, Salem on 02.04.2025." 
    },
    { 
      src: asset14, 
      title: "Career Opportunities as Officers in Indian Armed Forces by Assistant Commandant S Saravana Selvan (Retired), Indian Coast Guard on 19.10.2023." 
    },
    { 
      src: asset20, 
      title: "Awareness Program on Competitive Exams by Mr.A.Mahendra Varman and Mr.U.Surendar, Veranda Race Academy Salem on 07.03.24." 
    }
  ]

  const activitiesData = {
    "2025-2026": [
      { sno: 1, date: "18.09.2025", event: "Career Awareness Program on Civil Services Examination(IAS,IPS &IFS)", guest: "Ms. Sujeetha Salman, IPS\nSuperintendent of Police, Hassan District, Karnataka\n\nMr. M Senthil Kumar\nDirector, Aram IAS Academy, Chennai\n\nMr. Muthu Kumar\nFaculty and Mentor, Aram IAS Academy, Chennai.", participants: 140 },
      { sno: 2, date: "28.01.2026", event: "GATE Preparation Strategies", guest: "Mr.S.Shanmugam\nProfessor of Practice, Mechanical Engineering, KIOT, Salem.", participants: 45 },
      { sno: 3, date: "11.02.2026", event: "GATE Preparation Strategies", guest: "Mr.S.Shanmugam\nProfessor of Practice, Mechanical Engineering, KIOT, Salem.", participants: 52 },
      { sno: 4, date: "19.02.2026", event: "GATE Preparation Strategies", guest: "Mr.S.Shanmugam\nProfessor of Practice, Mechanical Engineering, KIOT, Salem.", participants: 69 },
      { sno: 5, date: "05.03.2026", event: "GATE Preparation Strategies", guest: "Mr.S.Shanmugam\nProfessor of Practice, Mechanical Engineering, KIOT, Salem.", participants: 50 },
      { sno: 6, date: "26.03.2026", event: "GATE Preparation Strategies", guest: "Mr.S.Shanmugam\nProfessor of Practice, Mechanical Engineering, KIOT, Salem.", participants: 40 },
      { sno: 7, date: "01.04.2026", event: "GATE Preparation Strategies", guest: "Mr.S.Shanmugam\nProfessor of Practice, Mechanical Engineering, KIOT, Salem.", participants: 35 }
    ],
    "2024-2025": [
      { sno: 1, date: "15.10.2024", event: "Awareness Program on \"Job Opportunities in Government Sectors\"", guest: "Mr. M.Krishnakumar, Administrator\nMr.A.Premkumar, Marketing Manager\nFuture Vision Academy, Salem.", participants: 220 },
      { sno: 2, date: "27.09.2024", event: "Awareness Program on GATE Examinations for Undergraduate students", guest: "Mr.Jayaprakash\nSr. Faculty Member, ACE Engineering Academy, Chennai.", participants: 100 },
      { sno: 3, date: "02.04.2025", event: "Awareness Program on CAT and Careers in Management", guest: "Mr.B.Gunasekar\nFounder and Managing Director\nThe Institute of Career Excellence Academy, Salem.", participants: 107 }
    ],
    "2023-2024": [
      { sno: 1, date: "02.09.2023", event: "KIOT-Higher Education Conclave", guest: "Lugar Academy\nTrinity Educational Consultants\nRR Overseas Education\nShankar IAS Academy\nACE Engineering Academy\nidp-IELTS\nETS TOEFL", participants: 263 },
      { sno: 2, date: "12.10.2023", event: "Awareness Program on \"NTPC (National Thermal Power Corporation) & Power Grid Recruitment Process\"", guest: "Dept. CEGC Coordinator", participants: 600 },
      { sno: 3, date: "19.10.2023", event: "Career Opportunities as Officers in Indian Armed Forces", guest: "Assistant Commandant S Saravana Selvan (Retired)\nIndian Coast Guard (Ministry of Defence), Programme Head,\nDefence and Leadership Awakening Movement, Chennai.", participants: 120 },
      { sno: 4, date: "07.03.2024", event: "Awareness Program on Competitive Exams", guest: "Mr.A.Mahendra Varman, Banking Team Leader\nMr.U.Surendar, SSC & TNPSC Team Leader\nVeranda Race Academy, Salem.", participants: 101 },
      { sno: 5, date: "13.04.2024", event: "Webinar on \"Opportunities After Engineering through GATE/ESE/PSU\"", guest: "Mr.Kaushik\nSr. Faculty Member, ACE Engineering Academy, Hyderabad.", participants: 85 },
      { sno: 6, date: "28.05.2024", event: "Awareness Program on Career Development and Opportunities", guest: "Mr.B.Gunasekar\nDirector, The Institute of Career Excellence, Salem.", participants: 139 }
    ]
  }

  const consolidatedReport = [
    { year: "2025 - 2026", count: 7 },
    { year: "2024 - 2025", count: 3 },
    { year: "2023 - 2024", count: 6 }
  ]

  const examDetails = [
    { year: "2024 - 2025", exam1: "16", exam2: "3", exam3: "-", exam4: "-" },
    { year: "2023 - 2024", exam1: "10", exam2: "2", exam3: "-", exam4: "-" },
    { year: "2022 - 2023", exam1: "7", exam2: "1", exam3: "3", exam4: "-" }
  ]

  const studentWorkingData = {
    "2025-2026": [
      { sno: 1, batch: "2020-24", sector: "TNEB", designation: "Field Assistant", remarks: "2 students selected" },
      { sno: 2, batch: "2021-25", sector: "TNEB", designation: "Field Assistant", remarks: "1 student selected" },
      { sno: 3, batch: "2021-25", sector: "RRB", designation: "Associate Software QA Analyst", remarks: "2 Students" }
    ],
    "2024-2025": [
      { sno: 1, batch: "2014-18", sector: "Indian Bank", designation: "Customer service Associate", remarks: "1 student selected" },
      { sno: 2, batch: "2014-18", sector: "TNUSRB", designation: "Police constable", remarks: "2 students" },
      { sno: 3, batch: "2014-18", sector: "TWAD Board, Govt. of Tamil Nadu", designation: "Junior Draught Engineer", remarks: "1 student selected" },
      { sno: 4, batch: "2015-19", sector: "Govt. of Tamil Nadu, AD Welfare", designation: "Special Overseer", remarks: "1 student selected" },
      { sno: 5, batch: "2016-20", sector: "Post Office", designation: "Branch Post Master", remarks: "1 student selected" },
      { sno: 6, batch: "2016-20", sector: "Town Planning Dept., Govt. of Tamil Nadu", designation: "Junior Draught Engineer", remarks: "1 student selected" },
      { sno: 7, batch: "2017-21", sector: "IBPS Bank", designation: "Assistant Manager", remarks: "1 student selected" },
      { sno: 8, batch: "2017-21", sector: "Govt. of Tamil Nadu, AD Welfare", designation: "Special Overseer", remarks: "1 student selected" },
      { sno: 9, batch: "2017-21", sector: "TNPSC Group 4", designation: "Junior Assistant", remarks: "1 student selected" },
      { sno: 10, batch: "2018-22", sector: "Post Office", designation: "Branch Post Master", remarks: "1 student selected" }
    ],
    "2023-2024": [
      { sno: 1, batch: "2009-13", sector: "TNUSRB", designation: "Police constable", remarks: "1 student selected" },
      { sno: 2, batch: "2009-13", sector: "TNUSRB", designation: "Sub Inspector", remarks: "1 student selected" },
      { sno: 3, batch: "2010-14", sector: "TNPSC", designation: "Assistant Engineer", remarks: "1 student selected" },
      { sno: 4, batch: "2011-15", sector: "Post Office", designation: "Branch Post Master", remarks: "1 student selected" },
      { sno: 5, batch: "2011-15", sector: "TN PWD", designation: "Graduate & Technician Apprentice", remarks: "1 student selected" },
      { sno: 6, batch: "2011-15", sector: "Cooperative Bank", designation: "Assistant (Banking)", remarks: "1 student selected" },
      { sno: 7, batch: "2012-16", sector: "TNPSC", designation: "Assistant Engineer", remarks: "1 student selected" },
      { sno: 8, batch: "2012-16", sector: "Rural Development, Govt. of Tamil Nadu", designation: "Overseer", remarks: "1 student selected" }
    ]
  }

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
              CEGC
            </h1>

            <p className="font-bold tracking-wide uppercase mb-3 text-white/90" style={{ fontSize: 'clamp(0.85rem, 1.8vw, 1.1rem)', letterSpacing: '0.05em' }}>
              Competitive Examinations Guidance Cell
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
              About the Cell
            </div>

            <h2 className="font-extrabold tracking-tight leading-tight" style={{ fontSize: 'clamp(1.4rem, 2.5vw, 1.85rem)', color: '#224292' }}>
              About the Competitive Examinations Guidance Cell
            </h2>

            <div className="space-y-4 text-[14px] font-normal text-slate-800 leading-[25.2px] text-justify">
              <p>
                The Competitive Examinations Guidance Cell is established to support students in preparing for various national, state and sector-specific competitive examinations. The cell creates awareness about career opportunities and provides guidance, training and expert mentoring to enhance students' aptitude, reasoning, communication and problem-solving skills.
              </p>
              <p>
                It motivates students to confidently appear for examinations such as UPSC, TNPSC, GATE, Banking, SSC, RRB, CAT, TANCET, and other recruitment and higher education entrance examinations. Through regular coaching sessions and career guidance activities, the cell aims to improve students' employability, higher education prospects and overall career development.
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
          className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto"
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
            Staff Coordinator
          </h2>
          <div className="w-20 h-1.5 rounded-full mx-auto mt-6" style={{ backgroundColor: '#ffc107' }} />
        </div>

        {/* Faculty Incharges Grid */}
        <div className="flex justify-center mb-10">
          {facultyIncharges.map((fac, idx) => (
            <motion.div
              key={idx}
              variants={itemVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="bg-white rounded-2xl p-6 flex items-center gap-6 border border-slate-100 relative overflow-hidden transition-all duration-500 hover:-translate-y-1 w-full max-w-md"
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
      </div>

      {/* ─── LIST OF ACTIVITIES SECTION ─── */}
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-10 mt-12 mb-8">
        <div className="text-center max-w-2xl mx-auto mb-6">
          <h2 className="font-black tracking-tight" style={{ fontSize: 'clamp(1.4rem, 3vw, 2.1rem)', color: '#224292' }}>
            List of Activities
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
                  <th className="px-4 py-3.5 text-[11px] font-black tracking-wider border-r border-white/10 w-64 text-left">Event Name</th>
                  <th className="px-4 py-3.5 text-[11px] font-black tracking-wider border-r border-white/10 text-left">Guest Name & Designation</th>
                  <th className="px-4 py-3.5 text-[11px] font-black tracking-wider w-40 text-center">Total No. of Participants</th>
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
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto px-3 sm:px-6 mt-12 mb-8">
        <div>
          <div className="text-center mb-6">
            <h2 className="font-black tracking-tight text-lg" style={{ color: '#224292' }}>
              Consolidated Activities Report
            </h2>
            <div className="w-16 h-1 rounded-full mx-auto mt-4" style={{ backgroundColor: '#ffc107' }} />
          </div>

          <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-xl shadow-slate-200/50">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-slate-100 text-slate-800 border-b border-slate-200">
                  <th className="px-6 py-4 text-xs font-bold uppercase tracking-wider text-center">Academic Year</th>
                  <th className="px-6 py-4 text-xs font-bold uppercase tracking-wider text-center">Activities Conducted</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {consolidatedReport.map((row, idx) => (
                  <tr key={idx} className="hover:bg-slate-50 transition-colors">
                    <td className="px-6 py-4 text-[14px] font-normal text-slate-800 text-center">{row.year}</td>
                    <td className="px-6 py-4 text-[14px] font-bold text-slate-800 text-center">{row.count}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div>
          <div className="text-center mb-6">
            <h2 className="font-black tracking-tight text-lg" style={{ color: '#224292' }}>
              Competitive Exams Details
            </h2>
            <div className="w-16 h-1 rounded-full mx-auto mt-4" style={{ backgroundColor: '#ffc107' }} />
          </div>

          <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-xl shadow-slate-200/50">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-slate-100 text-slate-800 border-b border-slate-200">
                  <th className="px-3 py-4 text-xs font-bold uppercase tracking-wider text-center">Academic Year</th>
                  <th className="px-3 py-4 text-xs font-bold uppercase tracking-wider text-center">GATE</th>
                  <th className="px-3 py-4 text-xs font-bold uppercase tracking-wider text-center">TANCET</th>
                  <th className="px-3 py-4 text-xs font-bold uppercase tracking-wider text-center">GRE/TOEFL</th>
                  <th className="px-3 py-4 text-xs font-bold uppercase tracking-wider text-center">Others</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {examDetails.map((row, idx) => (
                  <tr key={idx} className="hover:bg-slate-50 transition-colors">
                    <td className="px-3 py-4 text-[14px] font-normal text-slate-800 text-center">{row.year}</td>
                    <td className="px-3 py-4 text-[14px] font-semibold text-slate-800 text-center">{row.exam1}</td>
                    <td className="px-3 py-4 text-[14px] font-semibold text-slate-800 text-center">{row.exam2}</td>
                    <td className="px-3 py-4 text-[14px] font-semibold text-slate-800 text-center">{row.exam3}</td>
                    <td className="px-3 py-4 text-[14px] font-semibold text-slate-800 text-center">{row.exam4}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* ─── STUDENTS SELECTION DETAILS SECTION ─── */}
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-10 mt-12 mb-8">
        <div className="text-center max-w-2xl mx-auto mb-6">
          <h2 className="font-black tracking-tight" style={{ fontSize: 'clamp(1.4rem, 3vw, 2.1rem)', color: '#224292' }}>
            Selected Students working in Govt/Public Sectors
          </h2>
          <div className="w-20 h-1.5 rounded-full mx-auto mt-6" style={{ backgroundColor: '#ffc107' }} />
        </div>

        {/* Tab Buttons for Students Year */}
        <div className="flex flex-wrap justify-center gap-4 mb-6">
          {Object.keys(studentWorkingData).map((year) => (
            <button
              key={year}
              onClick={() => setActiveStudentYear(year)}
              className="px-6 py-2.5 rounded-full font-black text-xs transition-all duration-300 transform active:scale-95 shadow-md"
              style={{
                backgroundColor: activeStudentYear === year ? '#224292' : '#ffffff',
                color: activeStudentYear === year ? '#ffffff' : '#224292',
                border: `2px solid ${activeStudentYear === year ? '#224292' : 'rgba(34, 66, 146, 0.15)'}`,
                boxShadow: activeStudentYear === year ? '0 10px 20px rgba(34, 66, 146, 0.2)' : '0 4px 6px rgba(0, 0, 0, 0.05)'
              }}
            >
              {year} Placements
            </button>
          ))}
        </div>

        {/* Table Container for Placements */}
        <motion.div
          key={activeStudentYear}
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
                  <th className="px-4 py-3.5 text-[11px] font-black tracking-wider border-r border-white/10 w-24 text-center">Batch</th>
                  <th className="px-4 py-3.5 text-[11px] font-black tracking-wider border-r border-white/10 w-80 text-left">Sector / Employer Name</th>
                  <th className="px-4 py-3.5 text-[11px] font-black tracking-wider border-r border-white/10 text-left">Designation</th>
                  <th className="px-4 py-3.5 text-[11px] font-black tracking-wider text-center">Remarks</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {studentWorkingData[activeStudentYear].map((item, idx) => (
                  <tr key={idx} className="hover:bg-slate-50 transition-colors group">
                    <td className="px-4 py-3 text-[14px] font-normal text-center text-slate-800 border-r border-slate-50 leading-[25.2px]">{item.sno}</td>
                    <td className="px-4 py-3 text-[14px] font-normal text-center text-slate-800 border-r border-slate-50 leading-[25.2px]">
                      {item.batch}
                    </td>
                    <td className="px-4 py-3 text-[14px] font-semibold text-left text-slate-800 border-r border-slate-50 leading-[25.2px]">
                      {item.sector}
                    </td>
                    <td className="px-4 py-3 text-[14px] font-normal text-left text-slate-800 border-r border-slate-50 leading-[25.2px]">
                      {item.designation}
                    </td>
                    <td className="px-4 py-3 text-[14px] font-normal text-center text-slate-800 leading-[25.2px]">
                      {item.remarks || "-"}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>
      </div>

      {/* ─── GALLERY SECTION ─── */}
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-10 mt-12 mb-8 gallery-section">
        <div className="text-center max-w-2xl mx-auto mb-6 gallery-header">
          <h2 className="font-black tracking-tight" style={{ fontSize: 'clamp(1.4rem, 3vw, 2.1rem)', color: '#224292' }}>
            Event Gallery
          </h2>
          <div className="w-20 h-1.5 rounded-full mx-auto mt-6" style={{ backgroundColor: '#ffc107' }} />
          <p className="mt-6 text-slate-600 font-medium">Glimpses of activities, workshops, and achievements of the CEGC.</p>
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
                CEGC Event Gallery
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
