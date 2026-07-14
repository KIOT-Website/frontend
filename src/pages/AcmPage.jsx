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

import unnamed3 from '../assets/iee/unnamed (3).png'
import unnamed4 from '../assets/iee/unnamed (4).png'
import unnamed5 from '../assets/iee/unnamed (5).png'
import unnamed6 from '../assets/iee/unnamed (6).png'
import unnamed7 from '../assets/iee/unnamed (7).png'

export default function AcmPage() {

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
      title: "Technical Thinking",
      desc: "To foster a high level of technical thinking, innovation and leadership among computer science students.",
      icon: Target,
      color: "from-blue-500/10 to-blue-100/50",
      iconColor: "text-[#224292]"
    },
    {
      title: "Research & Development",
      desc: "To promote practical research, project innovation, and hands-on software development activities.",
      icon: Sparkles,
      color: "from-yellow-400/10 to-yellow-100/50",
      iconColor: "text-[#d4a017]"
    },
    {
      title: "Student Guidance",
      desc: "To guide and support the student community in preparing for successful careers in the software industry.",
      icon: GraduationCap,
      color: "from-purple-500/10 to-purple-100/50",
      iconColor: "text-purple-600"
    }
  ]

  const facultyIncharges = [
    {
      name: "Mr. R. Sivaguru",
      role: "Assistant Professor / CSE, KIOT",
      label: "Faculty Coordinator"
    }
  ]

  const studentOfficeBearers = [
    { name: "Harish S", role: "Chairman", dept: "IV CSE A" },
    { name: "Kaviya S", role: "Joint Secretary", dept: "IV CSE A" },
    { name: "Varun", role: "Joint Secretary", dept: "III CSE A" },
    { name: "Priyadharshini", role: "Treasurer", dept: "IV CSE B" },
    { name: "Kirubashini", role: "Joint Treasurer", dept: "III CSE B" },
    { name: "Kiruthic", role: "Joint Treasurer", dept: "IV CSE B" },
    { name: "Archana Devi B", role: "Executive Member", dept: "IV CSE A" },
    { name: "Priyadharshini V", role: "Executive Member", dept: "IV CSE A" },
    { name: "Keerthana S", role: "Executive Member", dept: "IV CSE A" },
    { name: "Nivetha M", role: "Executive Member", dept: "IV CSE B" },
    { name: "Manojkumar", role: "Executive Member", dept: "IV CSE B" },
    { name: "Sudharsan S", role: "Executive Member", dept: "IV CSE B" },
    { name: "Dineshraj M", role: "Executive Member", dept: "III CSE A" },
    { name: "Dharanidharan M", role: "Executive Member", dept: "III CSE A" },
    { name: "Jayasurya", role: "Executive Member", dept: "III CSE B" },
    { name: "Tanusri A", role: "Executive Member", dept: "III CSE B" },
    { name: "Vignesh M", role: "Executive Member", dept: "III CSE B" },
    { name: "Santhosh R", role: "Executive Member", dept: "III CSE B" },
    { name: "Anbumani R A", role: "Executive Member", dept: "II CSE A" },
    { name: "Gowtham S", role: "Executive Member", dept: "II CSE A" },
    { name: "Jeeva S P", role: "Executive Member", dept: "II CSE B" },
    { name: "Yogarajan", role: "Executive Member", dept: "II CSE B" },
    { name: "Chandra Kishore T G", role: "Executive Member", dept: "II CSE B" },
    { name: "Sandhiya V", role: "Executive Member", dept: "II CSE B" },
    { name: "Abhinaya M", role: "Executive Member", dept: "II CSE A" },
    { name: "Vignesh S K", role: "Executive Member", dept: "II CSE B" }
  ]

  const [selectedImage, setSelectedImage] = useState(null)

  const galleryImages = [
    { src: unnamed3, title: "Network Toy Celebration held on 09.08.2023" },
    { src: unnamed4, title: "Hands-on workshop on Raspberry Pi and Python on 14.10.2023 by Mrs. Pratibha Prabhakaran" },
    { src: unnamed5, title: "Tech talk on 26.10.2023 & 27.10.2023" },
    { src: unnamed6, title: "Knowledge sharing Seminar on IoT hardware on 07.11.2023 & 08.11.2023" },
    { src: unnamed7, title: "Seminar on exploring the software industry on 12.03.2026 by Ms. Janani M" }
  ]

  const activities = [
    { sno: 1, date: "09.08.2023", event: "Network Toy Celebration", guest: "ACM Coordinators / CSE Faculty", level: "Institute Level", participants: 70 },
    { sno: 2, date: "15.09.2023", event: "Interactive coding Competition", guest: "CSE Faculty", level: "Institute Level", participants: 35 },
    { sno: 3, date: "28.09.2023", event: "ACMM/Non-career guidance", guest: "Mr. GOWRISHANKAR VIGNESHWARAN (Senior Manager, Contract Specialist, GLOBAL INDIA LOGISTICS, Chennai)", level: "Institute Level", participants: 120 },
    { sno: 4, date: "14.10.2023", event: "Hands-on workshop on Raspberry Pi and Python", guest: "Mrs. PRATIBHA PRABHAKARAN (Associate Professor, Amrita Vishwa Vidyapeetham, Coimbatore)", level: "Institute Level", participants: 140 },
    { sno: 5, date: "26.10.2023 & 27.10.2023", event: "Tech talk", guest: "CSE Industry Experts", level: "Institute Level", participants: 55 },
    { sno: 6, date: "12.10.2023", event: "Code-A-Thon", guest: "ACM Team", level: "National Level", participants: 75 },
    { sno: 7, date: "07.11.2023 & 08.11.2023", event: "Knowledge sharing Seminar on IoT hardware", guest: "Mr. Gopi Vignesh V, Ms. Sudha, Mr. Dileep Kumar S (IV CSE Students)", level: "Institute Level", participants: 275 },
    { sno: 8, date: "09.11.2023", event: "Seminar on Java", guest: "Ms. Harini B, Ms. Reema S, Mr. Sanjay S, Mr. Pravin, Mr. Harish (IV & III CSE Students)", level: "Institute Level", participants: 212 },
    { sno: 9, date: "12.10.2023", event: "Project Expo (Code-A-Thon)", guest: "ACM Coordinators", level: "Institute Level", participants: 75 },
    { sno: 10, date: "21.11.2023", event: "Campus Coders League", guest: "CSE ACM members", level: "Institute Level", participants: 68 },
    { sno: 11, date: "09.01.2024", event: "National Level Database Design Contest", guest: "External Evaluators", level: "Institute Level", participants: 56 },
    { sno: 12, date: "23.01.2026", event: "National level Technical Symposium ARIVOLI'26", guest: "1. Mr. Baliram K. Mutagekar (CEO and Co-founder, Saksham, Pune) & 2. Mr. Rahul Campus (Recruitment, Quest Global, Bengaluru)", level: "National Level", participants: 380 },
    { sno: 13, date: "12.02.2026 & 13.02.2026", event: "Canva Creative Session", guest: "Ms. Haripriya R, Ms. Preethi M, Mr. Harish M, Mr. Sanjay G (IV CSE Students)", level: "Institute Level", participants: 218 },
    { sno: 14, date: "07.03.2026 & 08.03.2026", event: "Techpreneur Bootcamp Session", guest: "Ms. Abinaya V, Ms. Nandhini S, Mr. Premkumar K (IV CSE Students)", level: "Institute Level", participants: 120 },
    { sno: 15, date: "12.03.2026", event: "Seminar on exploring the software industry", guest: "Ms. Janani M (Associate Engineer, Cybersoft Technologies, Salem)", level: "Institute Level", participants: 110 },
    { sno: 16, date: "10.04.2026", event: "Alumni Association Valedictory & Farewell", guest: "CSE Alumni Members", level: "Institute Level", participants: 450 }
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
              ACF (ACM) Student Chapter
            </h1>

            <p className="font-bold tracking-wide uppercase mb-3 text-white/90" style={{ fontSize: 'clamp(0.85rem, 1.8vw, 1.1rem)', letterSpacing: '0.05em' }}>
              Department of Computer Science and Engineering
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
              About the Club
            </div>

            <h2 className="font-extrabold tracking-tight leading-tight" style={{ fontSize: 'clamp(1.4rem, 2.5vw, 1.85rem)', color: '#224292' }}>
              ACM Collegiate Club & Software Engineering Innovation
            </h2>

            <div className="space-y-4 text-[14px] font-normal text-slate-800 leading-[25.2px] text-justify">
              <p>
                The ACF (ACM) Association functions under the CSE Department. It is organized to foster a high level of technical thinking, innovation and leadership. It conducts workshops, coding events, and seminars to help and guide the student community prepare for careers in the software industry.
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
                  <h4 className="text-[13.5px] font-semibold text-slate-800 truncate">
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
            List of Activities (AY: 2023-2026)
          </h2>
          <div className="w-20 h-1.5 rounded-full mx-auto mt-6" style={{ backgroundColor: '#ffc107' }} />
        </div>

        {/* Table Container */}
        <motion.div
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
                  <th className="px-4 py-3.5 text-[11px] font-black tracking-wider border-r border-white/10 w-36 text-center">Date</th>
                  <th className="px-4 py-3.5 text-[11px] font-black tracking-wider border-r border-white/10 w-64 text-left">Event Name</th>
                  <th className="px-4 py-3.5 text-[11px] font-black tracking-wider border-r border-white/10 text-center">Affiliation Level</th>
                  <th className="px-4 py-3.5 text-[11px] font-black tracking-wider border-r border-white/10 text-left">Resource Person</th>
                  <th className="px-4 py-3.5 text-[11px] font-black tracking-wider w-40 text-center">No. of Participants</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {activities.map((item, idx) => (
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
                    <td className="px-4 py-3 text-[13px] font-medium text-center text-slate-500 border-r border-slate-50 leading-[25.2px]">
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

      {/* ─── GALLERY SECTION ─── */}
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-10 mt-12 mb-8 gallery-section">
        <div className="text-center max-w-2xl mx-auto mb-6 gallery-header">
          <h2 className="font-black tracking-tight" style={{ fontSize: 'clamp(1.4rem, 3vw, 2.1rem)', color: '#224292' }}>
            Event Gallery
          </h2>
          <div className="w-20 h-1.5 rounded-full mx-auto mt-6" style={{ backgroundColor: '#ffc107' }} />
          <p className="mt-6 text-slate-600 font-medium">Glimpses of activities, coding workshops, and seminars at ACF (ACM) Student Chapter.</p>
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
                ACM Student Chapter Event Gallery
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
