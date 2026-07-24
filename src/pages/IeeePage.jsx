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

import unnamed1 from '../assets/iee/unnamed (1).jpg'
import unnamed2 from '../assets/iee/unnamed (2).jpg'
import unnamed3 from '../assets/iee/unnamed (3).jpg'
import unnamed4 from '../assets/iee/unnamed (4).jpg'

export default function IeeePage() {

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
      title: "Promote Technical Education",
      desc: "To promote and strengthen technical education among students.",
      icon: Target,
      color: "from-blue-500/10 to-blue-100/50",
      iconColor: "text-[#224292]"
    },
    {
      title: "Flexible Learning",
      desc: "To provide flexible learning opportunities that support self-paced development.",
      icon: Users,
      color: "from-yellow-400/10 to-yellow-100/50",
      iconColor: "text-[#d4a017]"
    },
    {
      title: "Continuous Growth",
      desc: "To facilitate continuous growth in skills and knowledge.",
      icon: GraduationCap,
      color: "from-amber-500/10 to-orange-100/50",
      iconColor: "text-amber-600"
    }
  ]

  const facultyIncharges = [
    {
      name: "Dr. N. Santhiyakumari",
      role: "Professor / ECE, KIOT",
      label: "IEEE SB Counsellor"
    },
    {
      name: "Mrs. R. Hemalatha",
      role: "Assistant Professor / ECE, KIOT",
      label: "Staff Coordinator"
    }
  ]

  const studentOfficeBearers = [
    { name: "Mr. S. L. Prathosh", role: "Chairman" },
    { name: "Mr. K. Surya Narayanan", role: "Vice-Chairman" },
    { name: "Ms. A. M. Janani", role: "Treasurer" },
    { name: "Mr. S. Krishnakumar", role: "Secretary" },
    { name: "Ms. S. Shalini", role: "Joint-Secretary" },
    { name: "Ms. Afsheen Rashik", role: "Web Master" }
  ]

  const [activeYear, setActiveYear] = useState('2025-2026')
  const [selectedImage, setSelectedImage] = useState(null)

  const galleryImages = [
    { src: unnamed1, title: "IEEE MAS Sponsored National Level Workshop titled “Design-To-Device Practical Workshop on VLSI Design Flow” on 23.01.2026." },
    { src: unnamed2, title: "Knowledge Fest-2K25 “Robotricks”" },
    { src: unnamed3, title: "IEEE Day Celebration-2025 (IEEE Knowledge and Engineering Challenge) on 07.10.2025." },
    { src: unnamed4, title: "Workshop on “Altera DE1 Implementation using Quartus Prime Lite Edition” on 07.11.2025." }
  ]

  const activitiesData = {
    "2025-2026": [
      { sno: 1, event: "Technical Talk on “5G and Beyond: Key Technologies in Wireless Communication”", date: "10.04.2026", participants: 30, guest: "Mr.S.L.Prathosh (IEEE SB Chairman), Mr.S.Krishnakumar (IEEE SB Secretary), Ms.S.Shalini (IEEE SB Executive Member, KIOT)" },
      { sno: 2, event: "Technical Discussion on DSP Processor Programming for Beginners", date: "09.04.2026", participants: 120, guest: "Mr.R.Shanmugasundaram, Mrs.M.Vasanthi, Mrs.R.Hemalatha (Assistant Professors/ ECE, KIOT)" },
      { sno: 3, event: "Awareness Session on “Beyond the Classroom: Building Your Future with IEEE”", date: "08.04.2026", participants: 85, guest: "Dr.N.Santhiyakumari (IEEE SB Counselor, KIOT)" },
      { sno: 4, event: "Workshop on “MATLAB Essentials: From Basics to Applications”", date: "19.02.2026", participants: 46, guest: "Mr.S.L.Prathosh (IEEE Student Branch Chairman, KIOT)" },
      { sno: 5, event: "Awareness Session on “IEEE: Your Pathway to Global Engineering Community”", date: "29.01.2026", participants: 90, guest: "Dr.N.Santhiyakumari (IEEE SB Counselor, KIOT)" },
      { sno: 6, event: "IEEE Sponsored National Level Workshop on “Design-To-Device: Practical Workshop on VLSI Design Flow Using EDA Tools”", date: "23.01.2026", participants: 127, guest: "Mr. Aasaithambi Durairajan (Senior Staff Engineer, Qualcomm India Pvt Ltd., Bangalore)" },
      { sno: 7, event: "IEEE SB Office Bearers Meeting", date: "20.01.2026", participants: 18, guest: "Mrs.R.Hemalatha (IEEE SB Faculty Incharge, KIOT) & IEEE SB Office Bearers" },
      { sno: 8, event: "Knowledge Fest-2K25 “Robotricks”", date: "21.11.2025 & 22.11.2025", participants: 55, guest: "Mr.A.Gopalakrishnan (Senior Software Developer, DXC technology, Chennai) & Ms.S.Lysiya Merlin (Director, Karmer Industrial Automation, Salem)" },
      { sno: 9, event: "Workshop on “Altera DE1 Implementation using Quartus Prime Lite Edition”", date: "07.11.2025", participants: 50, guest: "Mr.K.Padmanaban (Software Enabling & Optimization Engineer, Academic Ambassador for Altera University Program, Intel Corporation, Bangalore)" },
      { sno: 10, event: "IEEE Xtreme 19.0, the 24-hour global coding competition", date: "25.10.2025", participants: 65, guest: "Dr.N.Santhiyakumari (IEEE SB Counselor, KIOT) & Ms.Janani. A.M (IEEE Student Ambassador - IEEE Xtreme 19.0)" },
      { sno: 11, event: "Guest Lecture on “Emerging Pathways in Electronics”", date: "16.10.2025", participants: 70, guest: "Mr.Balajee Seshadri (Consultant, Infineon Technologies, Chennai)" },
      { sno: 12, event: "IEEE Day Celebration-2025 (IEEE Knowledge and Engineering Challenge)", date: "07.10.2025", participants: 110, guest: "IEEE Executive Members, KIOT" },
      { sno: 13, event: "IEEE Spectrum Analysis Titled “Unravelling 5G Complexity”", date: "26.09.2025", participants: 42, guest: "Mrs.R.Hemalatha (IEEE-SB Faculty Incharge, KIOT)" },
      { sno: 14, date: "13.08.2025", event: "Technical Debate on “Is AI making us Lazy?”", guest: "Mr.S.Sabarinathan, IEEE Faculty Incharge/ECE, KIOT.", participants: 33 },
      { sno: 15, date: "04.08.2025", event: "Awareness session on “IEEE Xtreme 19.0 – The Global 24-Hour Coding Challenge”", guest: "Ms.A.M.Janani, IEEE Xtreme 19.0 Ambassador, IEEE SB Executive Member-KIOT", participants: 118 },
      { sno: 16, date: "31.07.2025", event: "IEEE Spectrum Analysis Talk titled “Autonomous Vehicles”", guest: "Mr.S.L.Prathosh, Vice Chair- IEEE SB, KIOT & Mr.Surya Narayanan, Executive Member- KIOT IEEE SB, KIOT", participants: 66 },
      { sno: 17, date: "22.07.2025 & 23.07.2025", event: "Workshop on “Canva Fundamentals: Build a Strong Design Foundation”", guest: "Mr.Surya Narayanan, IEEE SB -Vice Chair, KIOT & Ms.Afsheen Rashik, IEEE Executive Member, KIOT", participants: 68 },
      { sno: 18, date: "21.07.2025", event: "IEEE SB office bearers meeting", guest: "Dr.N.Santhiyakumari, IEEE SB Counselor, KIOT & IEEE Executive Members", participants: 15 }
    ],
    "2024-2025": [
      { sno: 1, date: "24.04.25", event: "Workshop on “Unlock the Power of Wokwi”", guest: "Mrs.R.Hemalatha, IEEE SB Faculty Incharge, KIOT & Mr.S.Sabarinathan, IEEE SB Faculty Incharge/ ECE, KIOT", participants: 51 },
      { sno: 2, date: "22.01.25", event: "IEEE: Empowering Young Engineers and Fostering Membership Growth", guest: "Mrs.R.Hemalatha, IEEE SB Faculty Incharge & Mr.S.Sabarinathan, IEEE SB Faculty Incharge/ ECE, KIOT", participants: 160 },
      { sno: 3, date: "20.11.24", event: "IEEE TechZooka Hackathon-2024 Preliminary round (Innovation at Every Step)", guest: "Mr.A.Sekar, Head-Incubations, iStart, Assistant Professor/CSE, KIOT.", participants: 20 },
      { sno: 4, date: "15.11.24 & 16.11.24", event: "Knowledge Fest-2K24 “Robotricks”", guest: "Mr.A.Gopalakrishnan, Senior Software Developer, DXC technology, Chennai & Ms.S.Lysiya Merlin, Director, Karmer Industrial Automation, Salem", participants: 34 },
      { sno: 5, date: "07.11.24", event: "Unlock the Power of TinkerCAD: 3D Modelling Basics", guest: "Mrs.R.Hemalatha, IEEE SB Faculty Incharge & Mr.S.Sabarinathan, IEEE SB Faculty Incharge/ ECE, KIOT", participants: 47 },
      { sno: 6, date: "28.10.24", event: "Workshop on “IoT Applications using Raspberry Pi”", guest: "Mr.M.Jagadeeshraja, Assistant Professor/EEE, KIOT.", participants: 37 },
      { sno: 7, date: "26.10.24", event: "Online Programming Contest “IEEE Xtreme - 18.0 Programming Competition”", guest: "Dr.N.Santhiyakumari, IEEE SB Counselor, KIOT", participants: 28 },
      { sno: 8, date: "15.10.24", event: "Building IoT Solutions with MSP430 Microcontrollers", guest: "Mr.S.Santhosh & Mr.Kamalesh, IEEE PES Student Members, Department of EEE, KIOT", participants: 34 },
      { sno: 9, date: "09.10.24", event: "PCB Assembly Techniques for Embedded Systems", guest: "Mr.A.Gowtham, IEEE Executive Member, KIOT", participants: 37 },
      { sno: 10, date: "01.10.24", event: "IEEE Day Celebration – 2024 “Leveraging Technology for a Better Tomorrow”", guest: "Dr.N.Santhiyakumari, IEEE SB Counsellor & Dr.C.Muniraj, IEEE PES SB Advisor, KIOT", participants: 60 },
      { sno: 11, date: "04.09.24", event: "IEEE-Empowering the Young Engineers and Membership", guest: "Mrs.R.Hemalatha, IEEE SB Faculty Incharge, KIOT", participants: 70 }
    ],
    "2023-2024": [
      { sno: 1, date: "23.05.2024", event: "Seminar on “Exploring STM32”", guest: "Mr.S.Sabarinathan, IEEE Faculty Incharge /ECE, KIOT & Mr.A.Gowtham, IEEE Executive Member/ KIOT", participants: 35 },
      { sno: 2, date: "14.05.2024", event: "Debate on “Career’s opportunities in Core vs IT”", guest: "IEEE SB Executive Members, KIOT", participants: 31 },
      { sno: 3, date: "22.03.2024", event: "Awareness session on “Building Bridge – Connecting IEEE Minds”", guest: "Mr.K. Lingeshwaran, IEEE SB Treasurer, KIOT", participants: 15 },
      { sno: 4, date: "21.02.2024", event: "Workshop on “VLSI Low Power Methodologies”", guest: "Mr.S. Santhosh, IEEE SB Vice – Chairman, KIOT", participants: 22 },
      { sno: 5, date: "20.12.2023", event: "Workshop on “ESP32”", guest: "Mr.S. Santhosh, IEEE SB Vice - Chairman & Mr.K. Lingeshwaran, IEEE SB Treasurer, KIOT", participants: 41 },
      { sno: 6, date: "01.11.2023", event: "School Tech Connect “Tech Opportunities Awaits You”", guest: "Mr.M.Dineshkumar, IEEE SB Faculty Incharge & IEEE SB Executive Members, KIOT", participants: 50 },
      { sno: 7, date: "30.10.2023", event: "Spectrum Talk on “Block Chain and its Algorithm”", guest: "Mr.M.Dineshkumar, IEEE SB Faculty Incharge & Mr.S.Sabarinathan, IEEE Faculty Incharge /ECE, KIOT", participants: 25 },
      { sno: 8, date: "20.09.2023", event: "National Level seminar on “Internet of Things and Artificial Intelligence: Role, Challenges and Application in Smart Health”", guest: "Dr.N.Santhiyakumari, IEEE SB Counselor, KIOT, Dr.V.Saravanan, Associate Professor/ECE, KIOT & Dr.P.Shanmugasundaram, Associate Professor/ECE, KIOT", participants: 92 },
      { sno: 9, date: "25.08.2023", event: "Project competition for school students “Knowledge fest – ROBOTRICKS’ 23”", guest: "Mr.A.Gopalakrishnan, Senior Software Developer, DXC technology, Chennai & Ms.S.Lysiya Merlin, Director, Karmer Industrial Automation, Salem", participants: 29 }
    ]
  }

  const consolidatedReport = [
    { year: "2025 - 2026", count: 18 },
    { year: "2024 - 2025", count: 11 },
    { year: "2023 - 2024", count: 9 }
  ]

  const memberData = [
    { year: "2025 - 2026", count: 188 },
    { year: "2024 - 2025", count: 120 },
    { year: "2023 - 2024", count: 40 }
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
              IEEE Student Branch
            </h1>

            <p className="font-bold tracking-wide uppercase mb-3 text-white/90" style={{ fontSize: 'clamp(0.85rem, 1.8vw, 1.1rem)', letterSpacing: '0.05em' }}>
              Institute of Electrical and Electronics Engineers
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
              KIOT IEEE Student Branch (Established in 2011)
            </h2>

            <p className="text-[14px] font-normal text-slate-800 leading-[25.2px] text-justify">
              The KIOT IEEE Student Branch, established in 2011, has been actively promoting technical excellence and professional development among students. As a part of IEEE, the branch serves as a vibrant platform for engineering students to enhance their knowledge, skills, and leadership qualities. It regularly organizes technical events, workshops, seminars, and competitions that foster innovation and practical learning. The branch empowers students to contribute effectively to technological advancements for the benefit of society. Our KIOT IEEE Student Branch is committed to developing globally competent professionals by fostering technical innovation, research excellence and leadership, in alignment with the mission of IEEE to advance technology for the benefit of humanity.
            </p>
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
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-5xl mx-auto"
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
              IEEE Student Members count
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
          <p className="mt-6 text-slate-600 font-medium">Glimpses of activities, seminars, and robotricks exhibitions of IEEE Student Branch.</p>
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
                IEEE Event Gallery
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
