import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import {
  Sparkles,
  Users,
  Award,
  GraduationCap,
  Calendar,
  X,
  Target,
  TrendingUp,
  Globe,
  Briefcase,
  Lightbulb,
  CheckCircle2,
  BookOpen,
  UserCheck
} from 'lucide-react'
import "./studentLife.css"

// Import gallery images from assets/club/Businessclub
import clubImg1 from '../assets/club/Businessclub/Business Insight Club (1).jpg'
import clubImg2 from '../assets/club/Businessclub/Business Insight Club (2).jpg'
import clubImg3 from '../assets/club/Businessclub/Business Insight Club (3).jpg'
import clubImg4 from '../assets/club/Businessclub/Business Insight Club (4).jpg'
import clubImg5 from '../assets/club/Businessclub/Business Insight Club (5).jpg'
import clubImg6 from '../assets/club/Businessclub/Business Insight Club (6).jpg'
import clubImg7 from '../assets/club/Businessclub/Business Insight Club (7).jpg'
import clubImg8 from '../assets/club/Businessclub/Business Insight Club (8).jpg'
import clubImg9 from '../assets/club/Businessclub/Business Insight Club (9).jpg'
import clubImg10 from '../assets/club/Businessclub/Business Insight Club (10).jpg'
import clubImg11 from '../assets/club/Businessclub/Business Insight Club (11).jpg'
import clubImg12 from '../assets/club/Businessclub/Business Insight Club (12).jpg'
import clubImg13 from '../assets/club/Businessclub/Business Insight Club (13).jpg'

export default function BusinessInsightsClubPage() {

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
      title: "Experiential Learning & Real-World Practice",
      desc: "To bridge the gap between academic learning and real-world business practices through experiential learning and practical exposure.",
      icon: BookOpen,
      color: "from-blue-500/10 to-blue-100/50",
      iconColor: "text-[#224292]"
    },
    {
      title: "Managerial & Leadership Skills",
      desc: "To enhance students' managerial, analytical, leadership, and strategic decision-making skills required for corporate leadership.",
      icon: TrendingUp,
      color: "from-emerald-500/10 to-teal-100/50",
      iconColor: "text-emerald-700"
    },
    {
      title: "International Talk Series Exposure",
      desc: "To provide exposure to emerging business trends through industry interactions and the flagship International Talk Series.",
      icon: Globe,
      color: "from-purple-500/10 to-indigo-100/50",
      iconColor: "text-purple-700"
    },
    {
      title: "Innovation & Ethical Practices",
      desc: "To promote innovation, entrepreneurship, ethical business practices, and critical thinking among MBA students.",
      icon: Lightbulb,
      color: "from-amber-500/10 to-orange-100/50",
      iconColor: "text-amber-600"
    },
    {
      title: "Global Industry Readiness",
      desc: "To prepare students as globally competent, ethical, and industry-ready management professionals.",
      icon: Briefcase,
      color: "from-rose-500/10 to-pink-100/50",
      iconColor: "text-rose-600"
    }
  ]

  const compositionMembers = [
    {
      sno: 1,
      name: "Mrs. T. Suganya",
      affiliation: "Assistant Professor",
      position: "Faculty Coordinator",
      badgeColor: "bg-blue-100 text-[#224292] border-blue-200"
    },
    {
      sno: 2,
      name: "Ganapathisrikanth R",
      affiliation: "Student",
      position: "Coordinator",
      badgeColor: "bg-amber-100 text-amber-900 border-amber-200"
    },
    {
      sno: 3,
      name: "Madhumitha G",
      affiliation: "Student",
      position: "Co-Coordinator",
      badgeColor: "bg-emerald-100 text-emerald-900 border-emerald-200"
    },
    {
      sno: 4,
      name: "Sabana Assmi H",
      affiliation: "Student",
      position: "Executive Member",
      badgeColor: "bg-slate-100 text-slate-800 border-slate-200"
    },
    {
      sno: 5,
      name: "Sudharsan C",
      affiliation: "Student",
      position: "Executive Member",
      badgeColor: "bg-slate-100 text-slate-800 border-slate-200"
    }
  ]

  const [activeYear, setActiveYear] = useState('2025-2026')
  const [selectedImage, setSelectedImage] = useState(null)

  const galleryImages = [
    { src: clubImg1, title: "Business Insights Club - International Connect Faculty Series" },
    { src: clubImg2, title: "Business Insights Club - Interactive Student Seminar" },
    { src: clubImg3, title: "Business Insights Club - Industry Expert Guest Presentation" },
    { src: clubImg4, title: "Business Insights Club - Global Expert Address" },
    { src: clubImg5, title: "Business Insights Club - Executive Mentorship & Talk Series" },
    { src: clubImg6, title: "Business Insights Club - Sustainable Entrepreneurship Forum" },
    { src: clubImg7, title: "Business Insights Club - GenAI in Business Leadership Session" },
    { src: clubImg8, title: "Business Insights Club - Career Growth & Electives Guidance" },
    { src: clubImg9, title: "Business Insights Club - Business Student to Business Star Event" },
    { src: clubImg10, title: "Business Insights Club - Corporate Trainer Keynote Session" },
    { src: clubImg11, title: "Business Insights Club - Faculty Coordinators & Student Office Bearers" },
    { src: clubImg12, title: "Business Insights Club - Valedictory & Certificate Distribution" },
    { src: clubImg13, title: "Business Insights Club - MBA Student Leadership Community" }
  ]

  const activitiesData = {
    "2025-2026": [
      {
        sno: 1,
        date: "30.03.2026",
        event: "Managing in the age of AI: How GenAI is redefining Business and IT Leadership",
        guest: "Dr. Ganesh Kumar Sivasubramanian\nSenior Manager, Cognizant Technology Solutions\nCorporate Instructor, Cognizant Academy, U.S. Corporation, USA.",
        participants: 120
      },
      {
        sno: 2,
        date: "14.05.2026",
        event: "Sustainable Entrepreneurship: Creating Business Value and Social Impact",
        guest: "Dr. Ch. Whidya Utami\nProfessor, Faculty of Economics and Business\nAhmad Dahlan University, Indonesia.",
        participants: 127
      }
    ],
    "2024-2025": [
      {
        sno: 1,
        date: "28.10.2024",
        event: "“Business Student to Business Star”",
        guest: "Mr. DTM. Ramki Vijayan\nCorporate Trainer & Motivational Speaker",
        participants: 105
      },
      {
        sno: 2,
        date: "05.02.2025",
        event: "Importance of Electives for Career Growth and Skill Development",
        guest: "Dr. P. SureshKumar\nMentor & Director,\n(Research and Industrial Consultancy)",
        participants: 105
      }
    ],
    "2023-2024": [
      {
        sno: 1,
        date: "28.12.2023",
        event: "INTERNATIONAL CONNECT FACULTY SERIES-1",
        guest: "Dr. Tamilselvan Mahalingam\nQuality Assurance Manager, Accreditation & Compliance,\nBusiness Faculty, Faculty of Business,\nHigher Colleges of Technology, UAE",
        participants: "100+"
      },
      {
        sno: 2,
        date: "22.01.2024",
        event: "INTERNATIONAL CONNECT FACULTY SERIES-2",
        guest: "Dr. Sharan Kumar Shetty\nDeputy Vice-Chancellor,\nTexila American University, Zambia, South Africa.",
        participants: "100+"
      },
      {
        sno: 3,
        date: "29.02.2024",
        event: "INTERNATIONAL CONNECT FACULTY SERIES-3",
        guest: "Dr. Dini Yuniarti\nAssociate Professor,\nUniversitas Ahmad Dahlan, Indonesia.",
        participants: "100+"
      },
      {
        sno: 4,
        date: "06.04.2024",
        event: "INTERNATIONAL CONNECT FACULTY SERIES-4",
        guest: "Avanidhar (Subra) Subrahmanyam\nDistinguished Professor of Finance,\nGoldyne and Irwin Hearsh Chair in Money and Banking, USA",
        participants: "100+"
      }
    ]
  }

  const consolidatedReport = [
    { year: "2025 - 2026", count: 2, participants: 247 },
    { year: "2024 - 2025", count: 2, participants: 210 },
    { year: "2023 - 2024", count: 4, participants: "400+" }
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
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="max-w-3xl text-center mx-auto"
          >
            <span className="inline-block bg-[#ffc107] text-[#224292] font-black text-[10px] uppercase tracking-widest px-3.5 py-1 rounded-full mb-4 shadow-sm">
              Management Studies (MBA)
            </span>
            <h1 className="font-black tracking-tight leading-none mb-3 text-[#ffc107]" style={{ fontSize: 'clamp(2rem, 5vw, 3rem)' }}>
              Business Insights Club
            </h1>

            <p className="font-bold tracking-wide uppercase mb-3 text-white/90" style={{ fontSize: 'clamp(0.85rem, 1.8vw, 1.1rem)', letterSpacing: '0.05em' }}>
              International Talk Series & Global Management Excellence
            </p>
            <p className="font-semibold text-white/70 text-xs sm:text-sm text-center">
              Period: <span className="text-[#ffc107] font-bold">June 2025 – May 2026</span>
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
              Purpose of the Club
            </div>

            <h2 className="font-extrabold tracking-tight leading-tight" style={{ fontSize: 'clamp(1.4rem, 2.5vw, 1.85rem)', color: '#224292' }}>
              Bridging Academic Learning with Global Business Practices
            </h2>

            <div className="space-y-4 text-[14px] font-normal text-slate-800 leading-[25.2px] text-justify">
              <p>
                The <strong>Business Insights Club</strong> provides MBA students with a dynamic platform to connect academic learning with real-world business practices through industry-focused activities and experiential learning.
              </p>
              <p>
                As a flagship initiative, the club organizes the <strong>International Talk Series</strong>, featuring global academicians, corporate leaders, and industry experts to enhance students' business knowledge, managerial leadership skills, and global strategic perspectives.
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
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
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

      {/* ─── COMPOSITION AND MEMBERS SECTION ─── */}
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-10 mt-16">
        <div className="text-center max-w-2xl mx-auto mb-8">
          <h2 className="font-black tracking-tight text-[#224292]" style={{ fontSize: 'clamp(1.4rem, 3vw, 2.1rem)' }}>
            Composition and Members
          </h2>
          <p className="text-slate-500 font-semibold text-sm mt-1">
            Academic Period: <span className="text-[#224292] font-bold">June 2025 to May 2026</span>
          </p>
          <div className="w-20 h-1.5 rounded-full mx-auto mt-4" style={{ backgroundColor: '#ffc107' }} />
        </div>

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
                  <th className="px-6 py-4 text-[11px] font-bold uppercase tracking-wider text-center w-20 border-r border-white/10">S. No.</th>
                  <th className="px-6 py-4 text-[11px] font-bold uppercase tracking-wider border-r border-white/10">Name of the Member</th>
                  <th className="px-6 py-4 text-[11px] font-bold uppercase tracking-wider border-r border-white/10">Affiliation</th>
                  <th className="px-6 py-4 text-[11px] font-bold uppercase tracking-wider">Position</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {compositionMembers.map((member, idx) => (
                  <tr
                    key={idx}
                    className={`group transition-colors ${idx % 2 === 0 ? 'bg-black/[0.01]' : 'bg-transparent'} hover:bg-[#ffc107]/5`}
                  >
                    <td className="px-6 py-4 text-center text-sm font-bold text-[#224292] border-r border-slate-100">{member.sno}</td>
                    <td className="px-6 py-4 text-sm font-bold text-slate-800 border-r border-slate-100 flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-[#224292] shrink-0">
                        <UserCheck size={16} />
                      </div>
                      <span>{member.name}</span>
                    </td>
                    <td className="px-6 py-4 text-sm text-slate-600 font-medium border-r border-slate-100">{member.affiliation}</td>
                    <td className="px-6 py-4 text-sm">
                      <span className={`inline-block px-3 py-1 rounded-full font-bold text-xs border ${member.badgeColor}`}>
                        {member.position}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>
      </div>

      {/* ─── LIST OF ACTIVITIES SECTION ─── */}
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-10 mt-16 mb-8">
        <div className="text-center max-w-2xl mx-auto mb-6">
          <h2 className="font-black tracking-tight" style={{ fontSize: 'clamp(1.4rem, 3vw, 2.1rem)', color: '#224292' }}>
            International Talk Series & Club Activities
          </h2>
          <div className="w-20 h-1.5 rounded-full mx-auto mt-4" style={{ backgroundColor: '#ffc107' }} />
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
              Academic Year : {year}
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
                  <th className="px-4 py-3.5 text-[11px] font-black tracking-wider border-r border-white/10 w-16 text-center">S.No</th>
                  <th className="px-4 py-3.5 text-[11px] font-black tracking-wider border-r border-white/10 w-32 text-center">Date</th>
                  <th className="px-4 py-3.5 text-[11px] font-black tracking-wider border-r border-white/10 text-left">Event Name / Topic</th>
                  <th className="px-4 py-3.5 text-[11px] font-black tracking-wider border-r border-white/10 text-left">Guest Details / Resource Person</th>
                  <th className="px-4 py-3.5 text-[11px] font-black tracking-wider w-36 text-center">No. of Participants</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {activitiesData[activeYear].map((item, idx) => (
                  <tr key={idx} className="hover:bg-slate-50 transition-colors group">
                    <td className="px-4 py-4 text-[14px] font-bold text-center text-[#224292] border-r border-slate-100">{item.sno}</td>
                    <td className="px-4 py-4 text-[14px] font-semibold text-center text-slate-700 border-r border-slate-100">
                      <div className="flex items-center justify-center gap-2">
                        <Calendar size={14} className="text-[#ffc107] shrink-0" />
                        <span>{item.date}</span>
                      </div>
                    </td>
                    <td className="px-4 py-4 text-[14px] font-bold text-left text-[#224292] border-r border-slate-100 leading-relaxed">
                      {item.event}
                    </td>
                    <td className="px-4 py-4 text-[14px] font-normal text-left text-slate-800 border-r border-slate-100 leading-relaxed whitespace-pre-line">
                      {item.guest}
                    </td>
                    <td className="px-4 py-4 text-[14px] font-bold text-center text-[#224292] bg-slate-50/50 group-hover:bg-slate-50 transition-colors">
                      <span className="inline-block px-3 py-1 bg-amber-100 text-amber-900 rounded-full text-xs font-black">
                        {item.participants}
                      </span>
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
                <th className="px-6 py-4 text-xs font-bold uppercase tracking-wider text-center">Number of Activities</th>
                <th className="px-6 py-4 text-xs font-bold uppercase tracking-wider text-center">Total Beneficiaries</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {consolidatedReport.map((row, idx) => (
                <tr key={idx} className="hover:bg-slate-50 transition-colors">
                  <td className="px-6 py-4 text-[14px] font-semibold text-slate-800 text-center">{row.year}</td>
                  <td className="px-6 py-4 text-[14px] font-bold text-[#224292] text-center">{row.count}</td>
                  <td className="px-6 py-4 text-[14px] font-bold text-emerald-700 text-center">{row.participants}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* ─── GALLERY SECTION ─── */}
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-10 mt-16 mb-8 gallery-section">
        <div className="text-center max-w-2xl mx-auto mb-6 gallery-header">
          <h2 className="font-black tracking-tight" style={{ fontSize: 'clamp(1.4rem, 3vw, 2.1rem)', color: '#224292' }}>
            Event Gallery
          </h2>
          <div className="w-20 h-1.5 rounded-full mx-auto mt-4" style={{ backgroundColor: '#ffc107' }} />
          <p className="mt-4 text-slate-600 font-medium text-sm">Glimpses of International Talk Series, interactive workshops, and activities of the Business Insights Club.</p>
        </div>

        <div className="gallery-grid">
          {galleryImages.map((img, idx) => (
            <div key={idx} className="gallery-item relative overflow-hidden cursor-pointer group rounded-2xl shadow-md border border-slate-100" onClick={() => setSelectedImage(img)}>
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
                Business Insights Event
              </div>
              <p className="text-[14px] font-semibold text-slate-800 leading-[25.2px] text-justify whitespace-pre-line">
                {selectedImage.title}
              </p>
            </div>
          </div>
        </div>
      )}

    </div>
  )
}
