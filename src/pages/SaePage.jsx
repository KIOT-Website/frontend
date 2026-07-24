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

import img10 from '../assets/iee/10.png'
import img11 from '../assets/iee/11.jpg'
import img12 from '../assets/iee/12.jpg'
import img13 from '../assets/iee/13.jpg'
import img14 from '../assets/iee/14.jpg'
import img15 from '../assets/iee/15.jpg'

export default function SaePage() {

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
      title: "Mobility Excellence",
      desc: "To promote excellence in mobility engineering by providing a platform for knowledge sharing, innovation, research, and professional development in the automotive, aerospace, and commercial vehicle sectors.",
      icon: Target,
      color: "from-blue-500/10 to-blue-100/50",
      iconColor: "text-[#224292]"
    },
    {
      title: "Technical Skills & Competitions",
      desc: "To encourage students to develop technical skills, leadership qualities, and innovative thinking through engineering projects, competitions, workshops, and industry collaboration under SAE.",
      icon: Award,
      color: "from-yellow-400/10 to-yellow-100/50",
      iconColor: "text-[#d4a017]"
    },
    {
      title: "Engineering Community",
      desc: "To create a vibrant engineering community that fosters teamwork, professional growth, and the exchange of ideas, contributing to advancements in transportation and mobility technologies.",
      icon: Users,
      color: "from-purple-500/10 to-purple-100/50",
      iconColor: "text-purple-600"
    }
  ]

  const facultyIncharges = [
    {
      name: "Dr. K. Visagavel",
      role: "Professor / MECH, KIOT",
      label: "SAE Counsellor"
    },
    {
      name: "Mr. S. Naveenkumar",
      role: "Assistant Professor / MECH, EEE, KIOT",
      label: "Staff Coordinator"
    }
  ]

  const studentOfficeBearers = [
    { name: "Harish A", role: "Secretary", dept: "IV MECH A" },
    { name: "Saran V", role: "Joint Secretary", dept: "IV MECH B" },
    { name: "Santhosh R", role: "Joint Secretary", dept: "III MECH B" },
    { name: "Karthi VS", role: "Treasurer", dept: "IV MECH A" },
    { name: "Yashwanth K", role: "Office Bearer", dept: "III MECH B" },
    { name: "Bhubesh SS", role: "Office Bearer", dept: "III MECH A" },
    { name: "Santhosh S", role: "Office Bearer", dept: "III MECH B" },
    { name: "Vaishnavi V", role: "Office Bearer", dept: "III MECH B" },
    { name: "Dhanushkumar S", role: "Office Bearer", dept: "III MECH A" },
    { name: "Kathiravan P", role: "Office Bearer", dept: "III MECH A" },
    { name: "Vishal SA", role: "Office Bearer", dept: "III MECH B" },
    { name: "Maheshraj P", role: "Office Bearer", dept: "III MECH B" },
    { name: "Santhosh G", role: "Office Bearer", dept: "III MECH B" },
    { name: "Syedzubair S", role: "Office Bearer", dept: "III MECH B" }
  ]

  const [activeYear, setActiveYear] = useState('2025-2026')
  const [selectedImage, setSelectedImage] = useState(null)

  const galleryImages = [
    { src: img10, title: "Electric Bike Design Challenge (EBDC), Coimbatore on 23.09.2025 to 26.09.2025" },
    { src: img11, title: "SAEISS ETWDC Electric TWO wheeler design challenge, Chennai on 07.03.2026 to 08.03.2026" },
    { src: img12, title: "E-KART Event, Coimbatore on 16.03.2026 to 19.03.2026" },
    { src: img13, title: "National Level Go-kart event, AIMS Academy, Coimbatore on 15.02.2025 to 18.02.2025" },
    { src: img14, title: "National Level Bicycle Design Challenge 2024-25 at KIOT on 26.10.2024 to 27.10.2024" },
    { src: img15, title: "National Level Electric Bike design challenge 24 conducted by Mechatron motors with Ramakrishna Institute of Technology." }
  ]

  const activitiesData = {
    "2025-2026": [
      { sno: 1, date: "05.07.2025", event: "SAEISS National level competition on Engineering Design", guest: "SAEISS Champions", participants: 5 },
      { sno: 2, date: "19.09.2025", event: "National Level mini bike design and fabrication contest", guest: "Mini Bike Champions", participants: 10 },
      { sno: 3, date: "19.09.2025", event: "National Level mini bike design and fabrication contest", guest: "Mini Bike Champions", participants: 29 },
      { sno: 4, date: "23.09.2025 To 26.09.2025", event: "Electric Bike Design Challenge (EBDC)", guest: "SAEISS Champions", participants: 27 },
      { sno: 5, date: "27.09.2025 To 28.09.2025", event: "Drone Design Challenge (DDC)", guest: "SAEISS Champions", participants: 10 },
      { sno: 6, date: "27.09.2025 To 28.09.2025", event: "SAEISS Bicycle design challenge (BDC) 2025-26", guest: "SAEISS Champions", participants: 14 },
      { sno: 7, date: "01.10.2025 To 04.10.2025", event: "Hindusthan formula karting championship-season-5", guest: "Formula karting Champions", participants: 32 },
      { sno: 8, date: "01.10.2025 To 04.10.2025", event: "Indian E-bike Championship", guest: "E-bike Champions", participants: 31 },
      { sno: 9, date: "11.10.2025 To 12.10.2025", event: "SAEISS Electric four wheeler design challenge", guest: "SAEISS Champions", participants: 26 },
      { sno: 10, date: "07.03.2026 To 08.03.2026", event: "SAEISS ETWDC Electric TWO wheeler design challenge", guest: "SAEISS Champions", participants: 10 },
      { sno: 11, date: "26.02.2026", event: "EKVC – Go-Kart Event", guest: "EKVC Champions", participants: 18 },
      { sno: 12, date: "26.02.2026", event: "EKVC – E-Kart Event", guest: "EKVC Champions", participants: 27 },
      { sno: 13, date: "13.03.2026 To 14.03.2026", event: "Dirt Bike", guest: "Dirt Bike Champions", participants: 21 },
      { sno: 14, date: "16.03.2026 To 19.03.2026", event: "AIMS", guest: "AIMS Champions", participants: 33 },
      { sno: 15, date: "18.03.2026", event: "National Level Electric bike and Dirt bike Design & Racing Challenge 2026", guest: "Dirt Bike Champions", participants: 12 },
      { sno: 16, date: "27.03.2026 To 28.03.2026", event: "India E- Bike Challenge 2026", guest: "E- Bike Champions", participants: 10 },
      { sno: 17, date: "11/04/2026 To 12/04/2026", event: "SAEISS Bicycle design challenge (BDC) 2026-27", guest: "SAEISS Champions", participants: 14 }
    ],
    "2024-2025": [
      { sno: 1, date: "03.08.2024 To 04.08.2024", event: "SAEISS Bicycle Design Challenge Competition-2024 Workshop", guest: "SAEISS Champions", participants: 14 },
      { sno: 2, date: "21.09.2024", event: "Student Convention Tier-2 Event", guest: "SAEISS Champions", participants: 13 },
      { sno: 3, date: "24.09.2024 To 27.09.2024", event: "National Level Electric Bike design challenge 2024", guest: "Mechatron motors along with Ramakrishna Institute of Technology, Coimbatore.", participants: 26 },
      { sno: 4, date: "26.10.2024 To 27.10.2024", event: "SAEISS Bicycle Design Challenge Competition-2024", guest: "SAEISS Champions", participants: 14 },
      { sno: 5, date: "25.01.2025 To 26.01.2025", event: "SAEISS Electric Two wheeler Design Challenge Competition-2025", guest: "SAEISS Champions", participants: 10 },
      { sno: 6, date: "15.02.2025 To 18.02.2025", event: "Go-kart Competition", guest: "AIMS Champions", participants: 30 },
      { sno: 7, date: "26.02.2025 To 28.02.2025", event: "E-Bike Event", guest: "AIMS Champions", participants: 26 },
      { sno: 8, date: "22.03.2025", event: "E-Bike Event", guest: "E- Bike Champions", participants: 16 },
      { sno: 9, date: "11.04.2025 To 13.04.2025", event: "E-Bike Event", guest: "E- Bike Champions", participants: 21 },
      { sno: 10, date: "11.04.2025 To 13.04.2025", event: "Go-kart Competition", guest: "AIMS Champions", participants: 22 }
    ],
    "2023-2024": [
      { sno: 1, date: "18.06.2023", event: "National Level Tier-3 Event", guest: "SAEISS Champions", participants: 3 },
      { sno: 2, date: "21.07.2023 To 23.07.2023", event: "Aero Design Challenge 2023 National Level", guest: "SAEISS Champions", participants: 10 },
      { sno: 3, date: "22.07.2023 To 23.07.2023", event: "National Level E-Bike design challenge 2023", guest: "SAEISS Champions", participants: 10 },
      { sno: 4, date: "09.09.2023 To 10.09.2023", event: "National Level Trek", guest: "SAEISS Champions", participants: 52 },
      { sno: 5, date: "10.02.2024", event: "National Level Tier-2 Event", guest: "SAEISS Champions", participants: 22 },
      { sno: 6, date: "17.02.2024 To 18.02.2024", event: "National Level E-Bike design challenge 2024", guest: "SAEISS Champions", participants: 10 },
      { sno: 7, date: "24.02.2024 To 25.02.2024", event: "SAEISS Bicycle Design Challenge Competition", guest: "SAEISS Champions", participants: 7 },
      { sno: 8, date: "15.03.2024 To 16.03.2024", event: "National Level Tier-3 Event", guest: "SAEISS Champions", participants: 17 },
      { sno: 9, date: "06.03.2024 to 09.03.2024", event: "National Level on Go-kart event", guest: "GO-Kart Champions", participants: 25 },
      { sno: 10, date: "21.03.2024", event: "National level mini dirt bike championship", guest: "Dirt Bike Champions", participants: 12 },
      { sno: 11, date: "06.04.2024 To 07.04.2024", event: "National Level Event Reverse Engineering", guest: "SAEISS Champions", participants: 5 }
    ]
  }

  const consolidatedReport = [
    { year: "2025 - 2026", count: 17 },
    { year: "2024 - 2025", count: 10 },
    { year: "2023 - 2024", count: 11 }
  ]

  const memberData = [
    { year: "2025 - 2026", count: 103 },
    { year: "2024 - 2025", count: 72 },
    { year: "2023 - 2024", count: 63 }
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
              Society of Automotive Engineers (SAE)
            </h1>

            <p className="font-bold tracking-wide uppercase mb-3 text-white/90" style={{ fontSize: 'clamp(0.85rem, 1.8vw, 1.1rem)', letterSpacing: '0.05em' }}>
              SAE Collegiate Club
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
              SAE Collegiate Club & Innovation Forum
            </h2>

            <div className="space-y-4 text-[14px] font-normal text-slate-800 leading-[25.2px] text-justify">
              <p>
                A dynamic space for automotive enthusiasts, aspiring engineers, and innovators to connect, collaborate, and share knowledge. Our forum serves as the central hub for discussions, resources, and events related to automotive engineering, motorsports, and cutting-edge vehicle technologies.
              </p>
              <ul className="list-disc pl-6 space-y-2 text-slate-700">
                <li><strong>Exchange Ideas:</strong> Discuss concepts, troubleshoot design challenges, and share technical insights.</li>
                <li><strong>Collaborate on Projects:</strong> Connect with team members, mentors, and peers on SAE competitions and initiatives.</li>
                <li><strong>Access Resources:</strong> Find guides, tutorials, reference materials, and updates from the automotive industry.</li>
              </ul>
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
                <div className="absolute top-0 right-0 w-16 h-16 rounded-bl-[2.5rem] transition-all duration-500 group-hover:scale-110" style={{ background: 'linear-gradient(135deg, #f8fafc, rgba(241,245,249,0.5))' }} />

                <div className={`w-10 h-10 rounded-xl flex items-center justify-center mb-4 relative z-10 bg-gradient-to-br ${obj.color}`}>
                  <Icon size={18} className={obj.iconColor} />
                </div>

                <h3 className="font-black mb-3 relative z-10 transition-colors duration-300 group-hover:text-[#ffc107]" style={{ fontSize: '0.95rem', color: '#224292' }}>
                  {obj.title}
                </h3>

                <p className="text-[13px] font-normal leading-[22px] text-slate-800 relative z-10 flex-grow text-justify">
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
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 max-w-6xl mx-auto"
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
                  <th className="px-4 py-3.5 text-[11px] font-black tracking-wider border-r border-white/10 w-44 text-center">Date / Period</th>
                  <th className="px-4 py-3.5 text-[11px] font-black tracking-wider border-r border-white/10 w-96 text-left">Event Name</th>
                  <th className="px-4 py-3.5 text-[11px] font-black tracking-wider border-r border-white/10 text-left">Organizing Committee / Champions</th>
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
                    <td className="px-4 py-3 text-[14px] font-normal text-left text-slate-800 border-r border-slate-50 leading-[25.2px]">
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
              SAE Student Members count
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
          <p className="mt-6 text-slate-600 font-medium">Glimpses of activities, e-kart champions, bicycle challenges, and design championships under SAE Collegiate Club.</p>
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
                SAE Event Gallery
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
