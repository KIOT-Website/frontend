import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import {
  Sparkles,
  Users,
  Compass,
  Award,
  GraduationCap,
  Shield,
  User,
  Calendar,
  X
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

export default function ScintelPage() {

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' })
  }, [])

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1
      }
    }
  }

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
    }
  }

  const pillars = [
    {
      title: "Industry Interaction",
      desc: "To interact with industries in all possible ways, bridging the gap between academia and real-world practice.",
      icon: Compass,
      color: "from-blue-500/10 to-blue-100/50",
      iconColor: "text-[#224292]"
    },
    {
      title: "Research & Development",
      desc: "To build research and development activities, encouraging students to innovate and explore emerging technologies.",
      icon: Award,
      color: "from-yellow-400/10 to-yellow-100/50",
      iconColor: "text-[#d4a017]"
    },
    {
      title: "Practical Knowledge",
      desc: "To enrich the students' practical knowledge through workshops, coding events, and hands-on technical sessions.",
      icon: Users,
      color: "from-amber-500/10 to-orange-100/50",
      iconColor: "text-amber-600"
    }
  ]

  const coreLeaders = [
    {
      role: "Secretary",
      name: "HARISH B",
      class: "IV CSE C"
    },
    {
      role: "Joint Secretary",
      name: "KAVYA S",
      class: "IV CSE A"
    },
    {
      role: "Joint Secretary",
      name: "GIRI N",
      class: "III CSE A"
    },
    {
      role: "Treasurer",
      name: "PRIYANKA S S",
      class: "IV CSE B"
    },
    {
      role: "Joint Treasurer",
      name: "NEGA SRI R",
      class: "III CSE C"
    },
    {
      role: "Joint Treasurer",
      name: "ROHITH S",
      class: "III CSE B"
    }
  ]

  const officeBearers = [
    { name: "HARIPRASATH E", class: "IV CSE A" },
    { name: "INDHUVADHANI Y", class: "IV CSE A" },
    { name: "MUTHURAJAN G", class: "IV CSE B" },
    { name: "NAMITHA M", class: "IV CSE B" },
    { name: "SUBASREE G S", class: "IV CSE C" },
    { name: "SUDHARSAN S", class: "IV CSE C" },
    { name: "DHANUSHIYA S", class: "III CSE A" },
    { name: "DHINESHKUMAR M", class: "III CSE A" },
    { name: "JAYITRI S", class: "III CSE B" },
    { name: "KANISHK A", class: "III CSE B" },
    { name: "SABARNA M", class: "III CSE C" },
    { name: "SANTHOSH R", class: "III CSE C" },
    { name: "AVISHSHARAN S A", class: "II CSE A" },
    { name: "DHESMASHRI S", class: "II CSE A" },
    { name: "JEEVA P", class: "II CSE B" },
    { name: "LAKSHANA G", class: "II CSE B" },
    { name: "PRASANNA KRISHNA T A", class: "II CSE C" },
    { name: "SANDHIYA M", class: "II CSE C" },
    { name: "SESHATHRI S", class: "II CSE D" },
    { name: "SURUTHI K S", class: "II CSE D" }
  ]

  const [activeYear, setActiveYear] = useState('2025-2026')
  const [selectedImage, setSelectedImage] = useState(null)

  const galleryImages = [
    { src: asset4, title: "SCINTEL Event 1" },
    { src: asset5, title: "SCINTEL Event 2" },
    { src: asset12, title: "SCINTEL Event 3" },
    { src: asset13, title: "SCINTEL Event 4" },
    { src: asset14, title: "SCINTEL Event 5" },
    { src: asset20, title: "SCINTEL Event 6" },
    { src: asset21, title: "SCINTEL Event 7" },
    { src: asset22, title: "SCINTEL Event 8" },
    { src: asset23, title: "SCINTEL Event 9" },
    { src: asset24, title: "SCINTEL Event 10" },
    { src: asset25, title: "SCINTEL Event 11" },
    { src: asset26, title: "SCINTEL Event 12" }
  ]

  const activitiesData = {
    "2025-2026": [
      { sno: 1, date: "08.09.2025", event: "Teacher's Day Celebration", level: "Institute Level", guest: "-", participants: 30 },
      { sno: 2, date: "14.08.2025", event: "Independence Day Celebration", level: "Institute Level", guest: "-", participants: 11 },
      { sno: 3, date: "16.09.2025", event: "SCINTEL Association Inauguration", level: "Institute Level", guest: "Mr. NAVEEN KUMAR BAKTHAVATCHALAM\nSenior Manager – Campus Specialist,\nGlobal HR, Global Mobility,\nRelevantz, Chennai.", participants: 400 },
      { sno: 4, date: "20.09.2025", event: "Industry Connect Program on You-r-SuperPower", level: "Institute Level", guest: "Mrs. VIDHYA PRABHU\nAssociate Director,\nKyndryl Solutions Pvt., Ltd., Chennai.", participants: 350 },
      { sno: 5, date: "07.10.2025\nto\n10.10.2025", event: "TechTalk", level: "Institute Level", guest: "-", participants: 240 },
      { sno: 6, date: "10.10.2025", event: "CODE-A-THON", level: "National Level", guest: "-", participants: 50 },
      { sno: 7, date: "08.10.2025 &\n09.10.2025", event: "Knowledge Transfer Session on GPT Unveiling", level: "Institute Level", guest: "Mr. Arun Vignesh V\nMs. Madhumitha K\nMs. Subasree G S\n\nIV CSE Students", participants: 249 },
      { sno: 8, date: "13.10.2025", event: "Freshman Fiesta", level: "Institute Level", guest: "Mr. Harish B\nMs. Kavya S\nMr. Giri N\nMs. Priyanka S S\nMs. Nega Sri R\nMr. Rohith S\n\nIV & III CSE Students", participants: 240 },
      { sno: 9, date: "17.10.2025", event: "Diwali Day Celebration", level: "Institute Level", guest: "-", participants: 70 },
      { sno: 10, date: "26.12.2025", event: "Campus Coders League", level: "Institute Level", guest: "-", participants: 84 },
      { sno: 11, date: "19.01.2025", event: "SCINTEL Logo Designing Event", level: "Institute Level", guest: "-", participants: 22 },
      { sno: 12, date: "13.02.2026", event: "National Level Technical Symposium \"ARIVOLI 26\"", level: "National Level", guest: "BALIRAM K MUTAGEKAR\nCEO and Co-Founder,\nSaksham, Pune.\n\nRAHUL DIXIT\nCampus Recruitment,\nQuest Global, Bengaluru.", participants: 545 },
      { sno: 13, date: "20.02.2026 &\n23.02.2026", event: "Career Catalyst Session", level: "Institute Level", guest: "Mr. Hariprasath E\nMs. Haridharshini S\nMr. Harish S\nMr. Muthurajan G\n\nIV CSE Students", participants: 209 },
      { sno: 14, date: "10.03.2026\nto\n12.03.2026", event: "Resume Building Session", level: "Institute Level", guest: "Mr. ARUN VIGNESH V\nMr. MONISH KANNA K\nMr. THARUN K\n\nIV CSE Students", participants: 138 },
      { sno: 15, date: "02.04.2026", event: "Seminar on Exploring the Power of AI & ML", level: "Institute Level", guest: "Mr. JAYASURYA GNANVEL\nFounder & CEO,\nCybernaut EdTech Pvt., Ltd., Karur.", participants: 300 },
      { sno: 16, date: "13.04.2026", event: "SCINTEL Association Valedictory & Farewell", level: "Institute Level", guest: "-", participants: 400 }
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
              SCINTEL
            </h1>

            <p className="font-bold tracking-wide uppercase mb-3 text-white/90" style={{ fontSize: 'clamp(0.85rem, 1.8vw, 1.1rem)', letterSpacing: '0.05em' }}>
              Students Association – Department of CSE
            </p>
            <p className="font-semibold text-white/70 text-xs sm:text-sm">
              Knowledge Institute of Technology (Autonomous), Salem
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
              About the Association
            </div>

            <h2 className="font-extrabold tracking-tight leading-tight" style={{ fontSize: 'clamp(1.4rem, 2.5vw, 1.85rem)', color: '#224292' }}>
              Promoting Technical Learning, Innovation & Leadership
            </h2>

            <p className="text-[14px] font-normal text-slate-800 leading-[25.2px] text-justify">
              The SCINTEL Students Association of the CSE Department is a student-led forum that promotes technical learning, innovation and leadership. It organizes workshops, coding events and seminars to help students enhance their skills and prepare for successful careers in technology.
            </p>
          </div>
        </motion.div>
      </div>

      {/* ─── THREE CORE PILLARS SECTION ─── */}
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-10 mt-10">
        <div className="text-center max-w-2xl mx-auto mb-8">
          <h2 className="font-black tracking-tight" style={{ fontSize: 'clamp(1.4rem, 3vw, 2.1rem)', color: '#224292' }}>
            Our Objectives
          </h2>
          <div className="w-20 h-1.5 rounded-full mx-auto mt-6" style={{ backgroundColor: '#ffc107' }} />
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {pillars.map((pillar, idx) => {
            const Icon = pillar.icon
            return (
              <motion.div
                key={idx}
                variants={itemVariants}
                className="bg-white rounded-2xl flex flex-col group relative overflow-hidden transition-all duration-500 hover:-translate-y-2"
                style={{ padding: '1.4rem 1.6rem', boxShadow: '0 8px 24px rgba(0,0,0,0.22), 0 2px 6px rgba(0,0,0,0.14)', border: '1px solid #f1f5f9' }}
                onMouseEnter={e => e.currentTarget.style.boxShadow = '0 16px 40px rgba(0,0,0,0.32), 0 4px 10px rgba(0,0,0,0.18)'}
                onMouseLeave={e => e.currentTarget.style.boxShadow = '0 8px 24px rgba(0,0,0,0.22), 0 2px 6px rgba(0,0,0,0.14)'}
              >
                {/* Background decorative pill */}
                <div className="absolute top-0 right-0 w-20 h-20 rounded-bl-[3rem] transition-all duration-500 group-hover:scale-110" style={{ background: 'linear-gradient(135deg, #f8fafc, rgba(241,245,249,0.5))' }} />

                <div className={`w-10 h-10 rounded-xl flex items-center justify-center mb-4 relative z-10 bg-gradient-to-br ${pillar.color}`}>
                  <Icon size={18} className={pillar.iconColor} />
                </div>

                <h3 className="font-black mb-3 relative z-10 transition-colors duration-300 group-hover:text-[#ffc107]" style={{ fontSize: '1rem', color: '#224292' }}>
                  {pillar.title}
                </h3>

                <p className="text-[14px] font-normal leading-[25.2px] text-slate-800 relative z-10 flex-grow">
                  {pillar.desc}
                </p>
              </motion.div>
            )
          })}
        </motion.div>
      </div>

      {/* ─── ASSOCIATION LEADERSHIP & OFFICE BEARERS SECTION ─── */}
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-10 mt-12">
        <div className="text-center max-w-2xl mx-auto mb-8">
          <h2 className="font-black tracking-tight" style={{ fontSize: 'clamp(1.4rem, 3vw, 2.1rem)', color: '#224292' }}>
            Office Bearers
          </h2>
          <div className="w-20 h-1.5 rounded-full mx-auto mt-6" style={{ backgroundColor: '#ffc107' }} />
        </div>

        {/* Faculty Coordinator Card */}
        <div className="flex justify-center mb-8">
          <motion.div
            variants={itemVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="bg-white rounded-2xl p-6 md:p-8 flex flex-col md:flex-row items-center gap-6 border border-slate-100 relative overflow-hidden transition-all duration-500 hover:-translate-y-1 w-full max-w-xl"
            style={{ boxShadow: '0 8px 24px rgba(0,0,0,0.12), 0 2px 6px rgba(0,0,0,0.08)' }}
          >
            <div className="w-14 h-14 rounded-2xl flex items-center justify-center flex-shrink-0" style={{ backgroundColor: 'rgba(34, 66, 146, 0.08)' }}>
              <GraduationCap size={28} style={{ color: '#224292' }} />
            </div>
            <div className="text-center md:text-left">
              <span className="uppercase font-black tracking-wider text-xs block mb-1" style={{ color: '#ffc107' }}>
                Faculty Coordinator
              </span>
              <h3 className="font-black text-xl mb-1" style={{ color: '#224292' }}>
                Mr. P. Sasikumar
              </h3>
              <p className="font-medium text-sm text-slate-500">
                Assistant Professor / CSE
              </p>
            </div>
          </motion.div>
        </div>

        {/* Executive Committee Grid */}
        <div className="mb-10">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {coreLeaders.map((leader, idx) => (
              <motion.div
                key={idx}
                variants={itemVariants}
                className="bg-white rounded-2xl p-4 text-center flex flex-col items-center justify-center border border-slate-100 transition-all duration-500 hover:-translate-y-2"
                style={{ boxShadow: '0 8px 24px rgba(0,0,0,0.15), 0 2px 6px rgba(0,0,0,0.08)' }}
              >
                <span className="uppercase font-black tracking-wider text-[10px] block mb-2" style={{ color: '#ffc107', letterSpacing: '0.1em' }}>
                  {leader.role}
                </span>
                <h4 className="text-[14px] font-normal leading-[25.2px] text-slate-800 mb-1">
                  {leader.name}
                </h4>
                <span className="text-[11px] font-bold text-slate-500 mt-2 block uppercase tracking-wider">
                  {leader.class}
                </span>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Executive Members Grid */}
        <div>
          <h3 className="font-black text-center text-lg mb-8 uppercase tracking-wider" style={{ color: '#224292' }}>
            Executive Members
          </h3>
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
          >
            {officeBearers.map((bearer, idx) => (
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
                  <th className="px-4 py-3.5 text-[11px] font-black tracking-wider border-r border-white/10 w-28">Date</th>
                  <th className="px-4 py-3.5 text-[11px] font-black tracking-wider border-r border-white/10 w-64">Event Name</th>
                  <th className="px-4 py-3.5 text-[11px] font-black tracking-wider border-r border-white/10 w-28">Level</th>
                  <th className="px-4 py-3.5 text-[11px] font-black tracking-wider border-r border-white/10">Resource Person</th>
                  <th className="px-4 py-3.5 text-[11px] font-black tracking-wider w-24 text-center">Participants</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {activitiesData[activeYear].map((item, idx) => (
                  <tr key={idx} className="hover:bg-slate-50 transition-colors group">
                    <td className="px-4 py-3 text-[14px] font-normal text-center text-slate-800 border-r border-slate-50 leading-[25.2px]">{item.sno}</td>
                    <td className="px-4 py-3 text-[14px] font-normal text-slate-800 border-r border-slate-50 leading-[25.2px]">
                      <div className="flex items-center gap-2">
                        <Calendar size={14} className="text-slate-400 shrink-0" />
                        <span className="whitespace-pre-line">{item.date}</span>
                      </div>
                    </td>
                    <td className="px-4 py-3 text-[14px] font-normal text-left text-slate-800 border-r border-slate-50 leading-[25.2px]">
                      {item.event}
                    </td>
                    <td className="px-4 py-3 text-[14px] font-normal text-left text-slate-800 border-r border-slate-50 leading-[25.2px]">
                      <span className={`px-2 py-1 rounded-full text-[11px] font-bold ${item.level === "National Level" ? "bg-amber-100 text-amber-700" : "bg-blue-50 text-blue-700"}`}>
                        {item.level}
                      </span>
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

      {/* ─── GALLERY SECTION ─── */}
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-10 mt-12 mb-8 gallery-section">
        <div className="text-center max-w-2xl mx-auto mb-6 gallery-header">
          <h2 className="font-black tracking-tight" style={{ fontSize: 'clamp(1.4rem, 3vw, 2.1rem)', color: '#224292' }}>
            Event Gallery
          </h2>
          <div className="w-20 h-1.5 rounded-full mx-auto mt-6" style={{ backgroundColor: '#ffc107' }} />
          <p className="mt-6 text-slate-600 font-medium">Glimpses of activities, symposiums, and achievements of the SCINTEL Association.</p>
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
                Major Activity: AY {activeYear}
              </div>
              <h3 className="font-extrabold text-xl sm:text-2xl text-[#224292] leading-tight mb-4">
                SCINTEL Event Gallery
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
