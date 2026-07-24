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
  X,
  Building
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

export default function PacePage() {

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

  const objectives = [
    {
      title: "National Level Exposure",
      desc: "To provide a platform for students to explore their technical skills in Civil Engineering domain by conducting multi dimensional events at National level.",
      icon: Compass,
      color: "from-blue-500/10 to-blue-100/50",
      iconColor: "text-[#224292]"
    },
    {
      title: "Excellence in Knowledge",
      desc: "To enrich the students for excellence in technical knowledge at professional level through innovative programs.",
      icon: Award,
      color: "from-yellow-400/10 to-yellow-100/50",
      iconColor: "text-[#d4a017]"
    },
    {
      title: "Domain Expertise",
      desc: "To enable the student potentials at various domain specified streams and make them expertise in Civil Engineering profession.",
      icon: GraduationCap,
      color: "from-amber-500/10 to-orange-100/50",
      iconColor: "text-amber-600"
    }
  ]

  const coreLeaders = [
    {
      role: "Secretary",
      name: "Mr. V. Sivasanjay",
      class: "IV CIVIL"
    },
    {
      role: "Joint Secretary",
      name: "Mr. A. Kalaipriyan",
      class: "III CIVIL"
    },
    {
      role: "Treasurer",
      name: "Ms. C. Dharshini",
      class: "IV CIVIL"
    },
    {
      role: "Treasurer",
      name: "Mr. K. Vignesh",
      class: "III CIVIL"
    }
  ]

  const officeBearers = [
    { name: "Mr. J. B. Dheeshith", class: "III CIVIL" },
    { name: "Ms. P. A. Rashieha", class: "III CIVIL" },
    { name: "Mr. P. Ashon", class: "III CIVIL" },
    { name: "Ms. S. Sudharshana", class: "III CIVIL" },
    { name: "Mr. J. R. Bharathkumar", class: "II CIVIL" },
    { name: "Ms. D. R. Lakshna", class: "II CIVIL" },
    { name: "Mr. A. Logeswaran", class: "II CIVIL" },
    { name: "Mr. G. Priyadharshini", class: "II CIVIL" }
  ]

  const [activeYear, setActiveYear] = useState('2025-2026')
  const [selectedImage, setSelectedImage] = useState(null)

  const galleryImages = [
    { src: asset4, title: "PACE Technical Symposium - CAD Contest" },
    { src: asset5, title: "PACE Guest Lecture on Infrastructure Planning" },
    { src: asset12, title: "Hands-on Surveying Session using Total Station" },
    { src: asset13, title: "Concrete Mix Design Demonstration in Lab" },
    { src: asset14, title: "Environmental Engineering Field Study Visit" },
    { src: asset20, title: "PACE Valedictory Function & Prize Distribution" },
    { src: asset21, title: "Workshop on Building Information Modeling (BIM)" },
    { src: asset22, title: "Civil Engineering Model Expo - Student Showcase" },
    { src: asset23, title: "Expert Seminar on Smart Cities & Transport Systems" },
    { src: asset24, title: "PACE Engineer's Day Celebration & Quiz" },
    { src: asset25, title: "National Level Symposium CIVICON Inauguration" },
    { src: asset26, title: "Alumni Career Orientation Session for Civil Students" }
  ]

  const activitiesData = {
    "2025-2026": [
      { sno: 1, date: "16.09.2025", event: "Independence Day (Poster Competition)", guest: "Participants - All Civil Students", participants: 121 },
      { sno: 2, date: "04.07.2025", event: "Building Information Modelling", guest: "Mr. R. Elavarasan,\nParticipants - All Civil Students", participants: 63 },
      { sno: 3, date: "15.09.2025", event: "MAP Expo", guest: "Mr. S. Arul Kesavan,\nParticipants - All Civil Students", participants: "-" },
      { sno: 4, date: "06.10.2025 to 10.10.2025", event: "Structural Analysis and design using STAAD. Pro.", guest: "Mr. P. Selva Kumar, Assistant Professor, KIOT", participants: 58 },
      { sno: 5, date: "14.10.2025", event: "PACE Association Inauguration", guest: "Mr. Balachandar Raveendran, Regional BIM Manager, Surbana Jurong Consultants", participants: 121 },
      { sno: 6, date: "13.11.2025 to 14.11.2025", event: "Vaastu", guest: "Mr. P. Selva Kumar, Assistant Professor, KIOT", participants: 33 },
      { sno: 7, date: "22.02.2026", event: "Arivoli Symposium", guest: "Participants – All External Civil Students", participants: 45 }
    ],
    "2024-2025": [
      { sno: 1, date: "05.09.2024", event: "Teachers Day Celebration", guest: "Participants - All Civil Students", participants: 121 },
      { sno: 2, date: "09.10.2024", event: "PACE Association Inauguration", guest: "Mr. Balachandar Raveendran, Regional BIM Manager, Surbana Jurong Consultants", participants: 121 },
      { sno: 3, date: "14.10.2024", event: "Tech Talk Series", guest: "Participants - II & III Year Civil", participants: 63 },
      { sno: 4, date: "22.02.2025", event: "Technical Symposium - Arivoli 2K25 (CADD Contest)", guest: "Participants - External College Students", participants: 52 },
      { sno: 5, date: "14.05.2025", event: "Association Valedictory", guest: "Dr. P. Prasath, Head of the Department, Civil", participants: 118 }
    ],
    "2023-2024": [
      { sno: 1, date: "11.10.2023", event: "CIVIL – PACE Association Inauguration 2023-24", guest: "Mr. Balachandar Reveendran, Senior Executive BIM, Surbana Jurong Singapore", participants: 96 },
      { sno: 2, date: "15.09.2023", event: "Engineers day celebration 2023", guest: "Er. T. Kulothungan M.E., Assistant Divisional Engineer, National Highways Salem.", participants: 84 },
      { sno: 3, date: "03.04.2024", event: "CAISSON 2K24 – A National Level Technical Symposium", guest: "Mr. M. Balasubramaniam, General Manger – True Network Alliance Chennai", participants: 55 },
      { sno: 4, date: "11.10.2023", event: "Tech Talk 1", guest: "II Year Students", participants: 26 },
      { sno: 5, date: "12.10.2023", event: "Tech Talk 1", guest: "III Year Students", participants: 22 },
      { sno: 6, date: "05.03.2024", event: "Tech Talk 2", guest: "III Year Students", participants: 24 },
      { sno: 7, date: "06.03.2024", event: "Tech Talk 2", guest: "III Year Students", participants: 24 },
      { sno: 8, date: "18.04.2024", event: "CIVIL – PACE Association Valedictory", guest: "Mr. A. Rangaraj, HOD / CIVIL", participants: 96 }
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
            <h1 className="font-black tracking-tight leading-none mb-6" style={{ fontSize: 'clamp(3rem, 8vw, 5rem)', color: '#ffc107' }}>
              PACE
            </h1>

            <p className="font-bold tracking-wide uppercase" style={{ fontSize: 'clamp(1rem, 2vw, 1.25rem)', color: '#ffffff', letterSpacing: '0.05em' }}>
              Passionate Association of Civil Engineers
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
              Nurturing Excellence in Infrastructure & Civil Engineering
            </h2>

            <p className="text-[14px] font-normal text-slate-800 leading-[25.2px] text-justify">
              The Passionate Association of Civil Engineers (PACE) is a dynamic student-driven forum of the Department of Civil Engineering, dedicated to nurturing technical excellence, innovation, and professional growth among aspiring civil engineers. PACE serves as a vibrant platform where students actively engage in a wide range of academic, technical, and co-curricular activities that enhance their knowledge and practical skills.
            </p>
          </div>
        </motion.div>
      </div>

      {/* ─── OBJECTIVES SECTION ─── */}
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
          {objectives.map((obj, idx) => {
            const Icon = obj.icon
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

                <div className={`w-10 h-10 rounded-xl flex items-center justify-center mb-4 relative z-10 bg-gradient-to-br ${obj.color}`}>
                  <Icon size={18} className={obj.iconColor} />
                </div>

                <h3 className="font-black mb-3 relative z-10 transition-colors duration-300 group-hover:text-[#ffc107]" style={{ fontSize: '1rem', color: '#224292' }}>
                  {obj.title}
                </h3>

                <p className="text-[14px] font-normal leading-[25.2px] text-slate-800 relative z-10 flex-grow">
                  {obj.desc}
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
                Association Coordinator
              </span>
              <h3 className="font-black text-xl mb-1" style={{ color: '#224292' }}>
                Mr. S. Rajeshkumar
              </h3>
              <p className="font-medium text-sm text-slate-500">
                Assistant Professor / Civil Engineering
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
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
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

        {/* Office Bearers Grid */}
        <div>
          <h3 className="font-black text-center text-lg mb-8 uppercase tracking-wider" style={{ color: '#224292' }}>
            Committee Members
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
                  <th className="px-4 py-3.5 text-[11px] font-black tracking-wider border-r border-white/10">Guest Details / Target Students</th>
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
                        <span>{item.date}</span>
                      </div>
                    </td>
                    <td className="px-4 py-3 text-[14px] font-normal text-left text-slate-800 border-r border-slate-50 leading-[25.2px]">
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

      {/* ─── GALLERY SECTION ─── */}
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-10 mt-12 mb-8 gallery-section">
        <div className="text-center max-w-2xl mx-auto mb-6 gallery-header">
          <h2 className="font-black tracking-tight" style={{ fontSize: 'clamp(1.4rem, 3vw, 2.1rem)', color: '#224292' }}>
            Event Gallery
          </h2>
          <div className="w-20 h-1.5 rounded-full mx-auto mt-6" style={{ backgroundColor: '#ffc107' }} />
          <p className="mt-6 text-slate-600 font-medium">Glimpses of activities, symposiums, and achievements of the PACE Association.</p>
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
                PACE Event Gallery
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
