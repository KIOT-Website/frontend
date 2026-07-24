import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import {
  Sparkles,
  Users,
  User,
  Award,
  GraduationCap,
  Calendar,
  X,
  Target
} from 'lucide-react'
import "./studentLife.css"

import unnamed4 from '../assets/iee/unnamed (4).png'
import unnamed5 from '../assets/iee/unnamed (5).png'
import unnamed6 from '../assets/iee/unnamed (6).png'
import unnamed7 from '../assets/iee/unnamed (7).png'
import unnamed8 from '../assets/iee/unnamed (8).png'
import unnamed9 from '../assets/iee/unnamed (9).png'
import unnamed10 from '../assets/iee/unnamed (10).png'

export default function IeeePesPage() {

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
      title: "Power & Energy Systems",
      desc: "Enhance technical knowledge in power and energy systems.",
      icon: Target,
      color: "from-blue-500/10 to-blue-100/50",
      iconColor: "text-[#224292]"
    },
    {
      title: "Research & Innovation",
      desc: "Promote research, innovation, and knowledge sharing.",
      icon: Sparkles,
      color: "from-yellow-400/10 to-yellow-100/50",
      iconColor: "text-[#d4a017]"
    },
    {
      title: "Professional Networking",
      desc: "Facilitate networking with industry experts and professionals.",
      icon: Users,
      color: "from-[#224292]/10 to-[#224292]/5",
      iconColor: "text-[#224292]"
    },
    {
      title: "Skill Development",
      desc: "Develop technical, leadership, and communication skills.",
      icon: GraduationCap,
      color: "from-amber-500/10 to-orange-100/50",
      iconColor: "text-amber-600"
    },
    {
      title: "Smart Energy Solutions",
      desc: "Encourage sustainable and smart energy solutions.",
      icon: Award,
      color: "from-purple-500/10 to-purple-100/50",
      iconColor: "text-purple-600"
    }
  ]

  const facultyIncharges = [
    {
      name: "Dr. N. Santhiyakumari",
      role: "Professor / ECE, KIOT",
      label: "IEEE Counselor"
    },
    {
      name: "Dr. C. Muniraj",
      role: "Director Academics / KIOT",
      label: "IEEE PES SB Advisor"
    },
    {
      name: "Mrs. P. Rekha",
      role: "Assistant Professor / EEE, KIOT",
      label: "Staff Coordinator"
    }
  ]

  const studentOfficeBearers = [
    { name: "Sachin J P", role: "Chair", dept: "III EEE" },
    { name: "Vijayvignesh S", role: "Secretary", dept: "III EEE" },
    { name: "Baraneedharan S", role: "Treasurer", dept: "III EEE" },
    { name: "Devkrishna V", role: "Vice Chair", dept: "III EEE" },
    { name: "Poovarasu S", role: "Webmaster", dept: "III EEE" }
  ]

  const [activeYear, setActiveYear] = useState('2025-2026')
  const [selectedImage, setSelectedImage] = useState(null)

  const galleryImages = [
    { src: unnamed4, title: "Two days workshop on “IEEE STEM Innovation Challenge: Renewable Energy & Smart systems for Next-Gen Engineers” on 07.11.25 & 08.11.25" },
    { src: unnamed5, title: "Guest Lecture on Role of AI in Power Systems Protection on 13.03.26" },
    { src: unnamed6, title: "IEEE PES Day 2026-Powering the future :Guest Talk & Interactive Technical Events on 24.04.26" },
    { src: unnamed7, title: "IEEE Membership: Connecting Minds, Creating the Future on 16.04.25" },
    { src: unnamed8, title: "8 Hrs. Internal Hackathon on \"Powering Tomorrow: Simple Innovations for a Smart Grid\" on 24.04.25" },
    { src: unnamed9, title: "Workshop on IoT applications using Raspberry Pi on 28.10.24" },
    { src: unnamed10, title: "Hands-on Training in “Integrating Embedded Processors and Peripherals in Automobile Design” on 02.09.23" }
  ]

  const activitiesData = {
    "2025-2026": [
      { sno: 1, date: "11.09.25", event: "Poster Presentation on Sustainable energy, Smart Grid and Green Technologies", guest: "Mr.Kishanraaj K, IEEE PES Chairman, KIOT", participants: 17 },
      { sno: 2, date: "07.11.25 & 08.11.25", event: "Two days workshop on “IEEE STEM Innovation Challenge: Renewable Energy & Smart systems for Next-Gen Engineers”", guest: "Dr.M.Venkateshkumar (Chair IEEE PES, IEEE Madras Section) & Dr.Shivashankar Sukumar (Consultant, Global India Logic, Chennai)", participants: 90 },
      { sno: 3, date: "06.02.26", event: "Awareness program on empowering future power engineers with IEEE PES", guest: "Mr.Kishanraaj K, IEEE PES Chairman, KIOT", participants: 61 },
      { sno: 4, date: "13.02.26", event: "National Level Technical Symposium ARIVOLI'26", guest: "1. Mr.Baliram K.Mutagekar (CEO and Co-Founder, Saksham, Pune) & 2. Mr.Rahul Dixit (Campus Recruitment, Quest Global, Bengaluru)", participants: 380 },
      { sno: 5, date: "13.03.26", event: "Guest Lecture on Role of AI in Power Systems Protection", guest: "Dr. Ankur Singh Rana, Assistant Professor/EEE, NIT, Trichy.", participants: 30 },
      { sno: 6, date: "25.02.26", event: "Seminar on Introduction to Sensors Using Arduino UNO", guest: "IEEE PES Members", participants: 42 },
      { sno: 7, date: "10.04.26", event: "Third National Conference on Multidisciplinary Research and Innovations in Engineering and Technology", guest: "Mr. Arvind Jayabal (Independent Technology Consultant, Electronics Manufacturing and Design Ecosystem, Chennai) & Dr. Ankur Singh Rana (Assistant Professor/EEE, NIT, Trichy)", participants: 120 },
      { sno: 8, date: "10.04.26", event: "Seminar on Professional Branding and Interview skills", guest: "Mr.Sachin J P, IEEE PES Chairman, KIOT", participants: 61 },
      { sno: 9, date: "24.04.26", event: "IEEE PES Day 2026-Powering the future :Guest Talk & Interactive Technical Events", guest: "Dr.C.Muniraj (IEEE PES SB Advisor, Dir-Academics, KIOT) & Dr.V.Kamatchi Kannan (HOD/EEE, KIOT)", participants: 56 }
    ],
    "2024-2025": [
      { sno: 1, date: "04.09.24", event: "IEEE Empowering the Young Engineering & Membership awareness session", guest: "Mrs.P.Rekha (AP/EEE) & Mrs.R.Hemalatha (AP/ECE, KIOT)", participants: 60 },
      { sno: 2, date: "01.10.24", event: "IEEE Day Celebration 2024-Leveraging Technology for a better tomorrow", guest: "Dr.N.Santhiyakumari (IEEE SB Counsellor) & Dr.C.Muniraj (IEEE PES SB Advisor, KIOT)", participants: 16 },
      { sno: 3, date: "9.10.24", event: "Spectrum analysis on PCB assembly techniques for embedded systems", guest: "Mr.A.Gowtham, Executive Member, IEEE student branch, KIOT.", participants: 16 },
      { sno: 4, date: "15.10.24", event: "Seminar on Building IoT Solutions with MSP430 Microcontroller", guest: "Mr.S.Santhosh & Mr.S K.Kamalesh, IEEE Member, KIOT.", participants: 40 },
      { sno: 5, date: "28.10.24", event: "Workshop on IoT applications using Raspberry Pi", guest: "Mr.M.Jagadeeshraja, AP/EEE, KIOT", participants: 54 },
      { sno: 6, date: "28.10.24", event: "Hands-On Training on Building Real World Solutions with STM32 Microcontrollers", guest: "Mr.A. Prabhakaran, Consultant and University Relations Partner, ZED Digital, Coimbatore.", participants: 65 },
      { sno: 7, date: "25.03.25 to 29.03.25", event: "MATLAB Programming and Machine Learning Tools", guest: "Dr.C.Muniraj, Prof & Head/EEE", participants: 35 },
      { sno: 8, date: "16.04.25", event: "IEEE Membership: Connecting Minds, Creating the Future", guest: "IEEE PES SB Members", participants: 64 },
      { sno: 9, date: "17.04.25", event: "Virtual Workshop: Introduction to STM32 microcontrollers and Its Practical use in Embedded Systems", guest: "Mr.A. Prabhakaran, Consultant and University Relations Partner, ZED Digital, Coimbatore.", participants: 65 },
      { sno: 10, date: "24.04.25", event: "8 Hrs. Internal Hackathon on \"Powering Tomorrow: Simple Innovations for a Smart Grid\"", guest: "Dr.C.Muniraj (Prof&Head/EEE) & Mr.G.Karthikeyan (AP/EEE)", participants: 16 }
    ],
    "2023-2024": [
      { sno: 1, date: "02.09.23", event: "Hands-on Training in “Integrating Embedded Processors and Peripherals in Automobile Design”", guest: "Mr.A. Prabhakaran, Consultant and University Relations Partner, ZED Digital, Coimbatore.", participants: 64 },
      { sno: 2, date: "28.12.23", event: "One day Workshop on “Energy Auditing”", guest: "Mr.R.Girish, Manager – Power Quality Training, Fluke Technologies, Bengaluru.", participants: 50 },
      { sno: 3, date: "03.11.23", event: "Spectrum Analysis Talk on “Future Power Systems”", guest: "IEEE PES Members", participants: 16 },
      { sno: 4, date: "14.12.23", event: "National Energy Conservation day celebrations \"Drawing Competition\"", guest: "Jury Members: Mr.P.Balaji & Mr.B.Dhinesh", participants: 45 },
      { sno: 5, date: "30.10.23", event: "Spectrum Analysis Talk titled “Blokchain and its Algorithm”", guest: "IEEE SB members", participants: 16 },
      { sno: 6, date: "20.09.23", event: "IEEE MAS Sponsored one day National Level Seminar titled \"Internet of Things and Artificial Intelligence : Roles, Challenges and Applications in smart health", guest: "Dr.N.Santhiyakumari, Mr.S.Premkumar, Dr.V.Saravanan & Dr.P.Shamugasundaram", participants: 150 },
      { sno: 7, date: "01.11.23", event: "School Tech Connect-Tech Opportunities Awaits You", guest: "IEEE SB members", participants: 30 },
      { sno: 8, date: "20.12.23", event: "Workshop on ESP32", guest: "Mr.Lingeswaran K & Mr.Santhosh S, IEEE SB Members", participants: 52 },
      { sno: 9, date: "21.02.24", event: "Awareness program on Engineering Excellence:IEEE membership for Growth & Networking", guest: "IEEE PES Members", participants: 62 },
      { sno: 10, date: "21.02.24", event: "Workshop on VLSI Low Power Methodology", guest: "Subhashini S & Madhumitha B, IEEE SB Members", participants: 53 },
      { sno: 11, date: "22.03.24", event: "Building bridges:Connecting IEEE Minds", guest: "IEEE SB members", participants: 16 },
      { sno: 12, date: "24.05.24", event: "Spectrum Analysis Talk on Recent Technology in Electrical Engineering", guest: "IEEE SB members", participants: 16 }
    ]
  }

  const consolidatedReport = [
    { year: "2025 - 2026", count: 9 },
    { year: "2024 - 2025", count: 10 },
    { year: "2023 - 2024", count: 12 }
  ]

  const memberData = [
    { year: "2025 - 2026", count: 19 },
    { year: "2024 - 2025", count: 16 },
    { year: "2023 - 2024", count: 16 }
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

        <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-10 relative z-10 text-center">

          {/* Title & Tagline */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="max-w-3xl mx-auto"
          >
            <h1 className="font-black tracking-tight leading-none mb-3" style={{ fontSize: 'clamp(2rem, 5vw, 3rem)', color: '#ffc107' }}>
              IEEE PES Student Branch Chapter
            </h1>

            <p className="font-bold tracking-wide uppercase mb-3 text-white/90" style={{ fontSize: 'clamp(0.85rem, 1.8vw, 1.1rem)', letterSpacing: '0.05em' }}>
              IEEE Power & Energy Society (IEEE PES)
            </p>
            <p className="font-semibold text-white/70 text-xs sm:text-sm">
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
              About the Forum
            </div>

            <h2 className="font-extrabold tracking-tight leading-tight" style={{ fontSize: 'clamp(1.4rem, 2.5vw, 1.85rem)', color: '#224292' }}>
              IEEE Power & Energy Society (IEEE PES)
            </h2>

            <div className="space-y-4 text-[14px] font-normal text-slate-800 leading-[25.2px] text-justify">
              <p>
                The IEEE Power & Energy Society (IEEE PES) provides significant benefits to students by helping them develop both technical knowledge and professional skills. Through the forum, students can attend expert talks, technical sessions, workshops, and webinars to learn about the latest advancements in power systems, renewable energy, smart grids, and sustainable technologies.
              </p>
              <p>
                It offers opportunities to interact with experienced engineers, researchers, and industry professionals, enabling students to build valuable professional networks and gain career guidance. Students can also present research papers, participate in competitions, and collaborate on innovative projects, which enhances their communication, leadership, and problem-solving skills.
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
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-6"
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
                <div className="absolute top-0 right-0 w-16 h-16 rounded-bl-[2.5rem] transition-all duration-500 group-hover:scale-110" style={{ background: 'linear-gradient(135deg, #f8fafc, rgba(241,245,249,0.5))' }} />

                <div className={`w-10 h-10 rounded-xl flex items-center justify-center mb-4 relative z-10 bg-gradient-to-br ${obj.color}`}>
                  <Icon size={18} className={obj.iconColor} />
                </div>

                <h3 className="font-black mb-3 relative z-10 transition-colors duration-300 group-hover:text-[#ffc107]" style={{ fontSize: '0.9rem', color: '#224292' }}>
                  {obj.title}
                </h3>

                <p className="text-[12.5px] font-normal leading-[20px] text-slate-800 relative z-10 flex-grow text-justify">
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
            Faculty & Bearers
          </h2>
          <div className="w-20 h-1.5 rounded-full mx-auto mt-6" style={{ backgroundColor: '#ffc107' }} />
        </div>

        {/* Faculty Incharges Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-10">
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
                <h3 className="font-black text-base mb-1" style={{ color: '#224292' }}>
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
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-6 max-w-5xl mx-auto"
          >
            {studentOfficeBearers.map((bearer, idx) => (
              <motion.div
                key={idx}
                variants={itemVariants}
                className="bg-white rounded-xl p-4 flex flex-col items-center text-center border border-slate-100 transition-all duration-300 hover:shadow-lg"
                style={{ boxShadow: '0 4px 12px rgba(0,0,0,0.08)' }}
              >
                <div className="w-10 h-10 rounded-full flex items-center justify-center mb-3" style={{ backgroundColor: 'rgba(34, 66, 146, 0.04)' }}>
                  <User size={18} style={{ color: '#224292' }} />
                </div>
                <div className="min-w-0">
                  <span className="uppercase font-black tracking-wider text-[9px] block mb-1" style={{ color: '#ffc107' }}>
                    {bearer.role}
                  </span>
                  <h4 className="text-[14px] font-semibold text-slate-800 truncate">
                    {bearer.name}
                  </h4>
                  <p className="text-[11px] font-medium text-slate-400 mt-0.5">
                    {bearer.dept}
                  </p>
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

      {/* ─── STATISTICS TABLES SECTION ─── */}
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
              IEEE PES Student Members count
            </h2>
            <div className="w-16 h-1 rounded-full mx-auto mt-4" style={{ backgroundColor: '#ffc107' }} />
          </div>

          <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-xl shadow-slate-200/50">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-slate-100 text-slate-800 border-b border-slate-200">
                  <th className="px-6 py-4 text-xs font-bold uppercase tracking-wider text-center">Academic Year</th>
                  <th className="px-6 py-4 text-xs font-bold uppercase tracking-wider text-center">Total Members</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {memberData.map((row, idx) => (
                  <tr key={idx} className="hover:bg-slate-50 transition-colors">
                    <td className="px-6 py-4 text-[14px] font-normal text-slate-800 text-center">{row.year}</td>
                    <td className="px-6 py-4 text-[14px] font-bold text-slate-800 text-center">{row.count}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* ─── GALLERY SECTION ─── */}
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-10 mt-12 mb-8 gallery-section">
        <div className="text-center max-w-2xl mx-auto mb-6 gallery-header">
          <h2 className="font-black tracking-tight" style={{ fontSize: 'clamp(1.4rem, 3vw, 2.1rem)', color: '#224292' }}>
            Event Gallery
          </h2>
          <div className="w-20 h-1.5 rounded-full mx-auto mt-6" style={{ backgroundColor: '#ffc107' }} />
          <p className="mt-6 text-slate-600 font-medium">Glimpses of activities, energy challenges, energy auditing, and workshops by IEEE PES Student Branch Chapter.</p>
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
                IEEE PES Event Gallery
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
