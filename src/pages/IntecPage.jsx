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
  Cpu
} from 'lucide-react'
import "./studentLife.css"

import ecxGallery1 from '../assets/be-ecx/unnamed (7).jpg'
import ecxGallery2 from '../assets/be-ecx/unnamed (8).jpg'

export default function IntecPage() {

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
      title: "Technical Knowledge & Skills",
      desc: "To promote technical knowledge and practical skills through workshops, seminars, and competitions.",
      icon: Cpu,
      color: "from-blue-500/10 to-blue-100/50",
      iconColor: "text-[#224292]"
    },
    {
      title: "Innovation & Research",
      desc: "To encourage innovation and research-oriented thinking among students.",
      icon: Sparkles,
      color: "from-purple-500/10 to-purple-100/50",
      iconColor: "text-purple-600"
    },
    {
      title: "Leadership & Collaboration",
      desc: "To develop leadership, teamwork, and communication skills through active participation.",
      icon: Users,
      color: "from-yellow-400/10 to-yellow-100/50",
      iconColor: "text-[#d4a017]"
    },
    {
      title: "Industry Connection",
      desc: "To connect students with industry experts and expose them to current technological advancements.",
      icon: Compass,
      color: "from-amber-500/10 to-orange-100/50",
      iconColor: "text-amber-600"
    }
  ]

  const coreLeaders = [
    {
      role: "Secretary",
      name: "Logeshwaran S",
      class: "IV ECE A"
    },
    {
      role: "Joint Secretary",
      name: "Harini R G",
      class: "III ECE A"
    },
    {
      role: "Joint Secretary",
      name: "Govarthanahari N",
      class: "III ECE B"
    },
    {
      role: "Treasurer",
      name: "Bharani Dharan A B",
      class: "IV ECE B"
    }
  ]

  const officeBearers = [
    { name: "Vaijayanthi R", class: "III ECE B" },
    { name: "Jegan Athithiya S", class: "III ECE B" },
    { name: "Sreeja S", class: "III ECE B" },
    { name: "Giridhar Y", class: "III ECE A" },
    { name: "Vignesh P", class: "III ECE A" },
    { name: "Hemalatha S", class: "III ECE A" },
    { name: "Janani A M", class: "II ECE A" },
    { name: "Abishek N", class: "II ECE A" },
    { name: "Prasannavengat K", class: "II ECE B" },
    { name: "Prathosh S L", class: "II ECE B" }
  ]

  const [activeYear, setActiveYear] = useState('2025-2026')
  const [selectedImage, setSelectedImage] = useState(null)

  const galleryImages = [
    {
      src: ecxGallery1,
      title: "EPICS Association Inauguration and Technical Activities at Knowledge Institute of Technology."
    },
    {
      src: ecxGallery2,
      title: "Student Technical Workshop and Hands-on Domain Training organized by EPICS Association."
    }
  ]

  const activitiesData = {
    "2025-2026": [
      { sno: 1, date: "17.07.2025", event: "II and III Year ECE Students Technical Talk-II", guest: "-", participants: 335 },
      { sno: 2, date: "08.09.2025", event: "Teachers Day Celebration 2025", guest: "Alumni's of KIOT", participants: 60 },
      { sno: 3, date: "15.09.2025", event: "INTEC Association Inauguration", guest: "Mr. Wilson Anandaraj,\nSenior Vice President Infinite Computer Solutions (India) Limited, Chennai", participants: 356 },
      { sno: 4, date: "15.09.2025", event: "Emerging Career Trends in Telecommunication", guest: "Mr. Wilson Anandaraj,\nSenior Vice President Infinite Computer Solutions (India) Limited, Chennai", participants: 356 },
      { sno: 5, date: "16.10.2025", event: "Guest Lecture on Emerging Pathways in Electronics", guest: "Mr.Balajee Seshadri,\nConsultant,\nInfineon Technologies, Chennai", participants: 198 },
      { sno: 6, date: "17.10.2025", event: "Circuit Design Challenge", guest: "-", participants: 180 },
      { sno: 7, date: "07.11.2025", event: "Workshop - Altera DE1 Implementation using Quartus Prime Lite Edition", guest: "Mr.K.Padmanaban,\nSoftware Enabling & Optimization Engineer,\nAcademic Ambassador for Altera University Program,\nIntel Corporation, Bangalore", participants: 50 },
      { sno: 8, date: "10.02.2026", event: "Technical Symposium", guest: "Mr. Shaik Aleem Ur Rehaman, ASIC Design and Verification Engineer, Microsoft, Bengaluru.\n\nMs.VG Shri Rajini Prriya, Vice President & Global HR Head, iMerit Technology, Coimbatore.", participants: 503 },
      { sno: 9, date: "18.03.2026", event: "Bridging Theory to Practice: Hands-on Session on Microprocessor & Microcontroller", guest: "Mr.S.Premkumar, AP/ECE,\nMr.V.Vimalraj, AP/ECE,\nMrs.T.Devika, AP/ECE,\nKnowledge Institute of Technology, Salem.", participants: 180 },
      { sno: 10, date: "02.04.2026", event: "II and III Year ECE Students Technical Talk-II", guest: "-", participants: 335 },
      { sno: 11, date: "09.04.2026", event: "Signal Processing: Transforming concepts into Real-Time Applications", guest: "Mr.R.Shanmugasundaram, AP/ECE,\nKnowledge Institute of Technology, Salem.", participants: 198 },
      { sno: 12, date: "13.04.2026", event: "Association Valedictory Function", guest: "-", participants: 450 }
    ],
    "2024-2025": [
      { sno: 1, date: "05-08-24", event: "Guest Lecture on VLSI and Chip Design", guest: "Dr. S. Jayakumar,\nDSP Engineer,\nMistral Solutions Pvt. Ltd., Bengaluru.", participants: 121 },
      { sno: 2, date: "08-08-24", event: "II and III Year ECE Students Technical Talk", guest: "-", participants: 254 },
      { sno: 3, date: "09-08-24", event: "Integration of AI in Digital Healthcare Technologies", guest: "Mr.Srinivasan Thanukrishnan,\nCTO and Director,\nGlosys Technology Solutions Pvt. Ltd., Chennai.", participants: 121 },
      { sno: 4, date: "14.08.2024", event: "Independence Day Celebration - Drawing Competition", guest: "Dr.T.K.Shanthi, AP/Eng,\nMrs.S.Saranya, AP/Maths,\nKnowledge Institute of Technology, Salem.", participants: 25 },
      { sno: 5, date: "05-09-24", event: "Teachers Day Celebration 2024 - Debate", guest: "Mr.R.Shanmugasundaram, AP/ECE,\nMrs.M.Vasanthi, AP/ECE,\nMrs.L.Chitirap Paavai, AP/ECE,\nKnowledge Institute of Technology, Salem.", participants: 30 },
      { sno: 6, date: "05-09-24", event: "Teachers Day Celebration 2024 - Role Reversal Activity", guest: "Mr.V.Vimal Raj, AP/ECE,\nMr.M.Duraisamy, AP/ECE,\nMr.T.PraveenKumar, AP/ECE,\nKnowledge Institute of Technology, Salem.", participants: 40 },
      { sno: 7, date: "05-09-24", event: "Teachers Day Celebration 2024 - Social Media Appreciation", guest: "Mrs.V.Vadivu, AP/ECE,\nMrs.S.Sasidevi, AP/ECE,\nMr.S.Sabarinathan, AP/ECE,\nKnowledge Institute of Technology, Salem.", participants: 25 },
      { sno: 8, date: "30.09.2024", event: "INTEC Association Inauguration", guest: "Mr.S.Saravanan Manikandan,\nSenior Program Manager,\nINTELSAT LLP Services, Chennai.", participants: 467 },
      { sno: 9, date: "22-02-25", event: "National Level Technical Symposium - 2K'25 - ARIVOLI", guest: "Mr.Riyaz Hameed,\nSenior Director,\nLTI Mind Tree, Chennai.", participants: 337 },
      { sno: 10, date: "23-01-25", event: "Guest Lecture on Embedded System", guest: "Mr.Hareesh Jankiraman,\nHouston, Texas, USA", participants: 133 },
      { sno: 11, date: "09-04-25", event: "Industry Visiting Faculty Lecture on Fundamental of Low Power IC Design", guest: "Mr. S. Chellakumar,\nPrincipal CAD Engineer,\nEnphase Energy, Bengaluru.", participants: 172 },
      { sno: 12, date: "19-05-25", event: "Association Valedictory Function", guest: "-", participants: 337 }
    ],
    "2023-2024": [
      { sno: 1, date: "19.09.23", event: "Technical seminar on Embedded System Design with IoT Integration", guest: "Mr.E.Boopalan,\nOM Technocrafts Corporation, Coimbatore-641 014", participants: 121 },
      { sno: 2, date: "26.09.23", event: "Special Lecture on Opportunities in Automotive Software Engineering", guest: "Mr.C.Annamalai,\nFounder /Director-ANCIT Consulting Pvt, Bengaluru", participants: 133 },
      { sno: 3, date: "13.10.23", event: "Guest Lecture on Embedded IOT with Think Speak for Process Automation", guest: "Er.GunaSeelaManikandan, Project Engineer,\n& Er.NiveshKumar, Technical Lead, Innovate Engineering Products, Hosur, Tamil Nadu - 635109", participants: 120 },
      { sno: 4, date: "01.11.23", event: "Special Lecture on The Evolution of Artificial Intelligence : Past, present, Future of Healthcare Industry and Future of AI powered World", guest: "Ms.S.Chitra,\nAssociate Director,\nOdugaaTech private limited, Coimbatore", participants: 120 },
      { sno: 5, date: "14.11.23 to 18.11.23", event: "Hands on Training on VLSI Design and Verification", guest: "Mr.Nepolean Mani, Senior Design Engineer, Tessolve Semiconductor Pvt. Ltd, Bangalore", participants: 54 },
      { sno: 6, date: "27.01.24", event: "Online Seminar on Decoding the Developer's Journey: From College to Career", guest: "Mr.A.Gopalakrishnan (Alumni Batch: 2015), Senior Consultant, Thoughtworks Technologies Pvt Ltd", participants: 130 },
      { sno: 7, date: "09.02.24", event: "Guest Lecture on VLSI Methodologies - Applications and its Recent Trends", guest: "Mr.B.K.Shivaprasad, Execution Manager,\nMr.H.Soma Shekhar, Product Manager, Entuple Technologies Pvt. Ltd., Bengaluru", participants: 130 },
      { sno: 8, date: "21.02.24 to 23.02.24", event: "Hands on Training on PCB Design", guest: "Mr.M.N.Hari, Executive Director, SLM Infotech, Salem - 636 002", participants: 120 },
      { sno: 9, date: "09.03.24", event: "Online Seminar on Presentation - Career Insight in Digital Marketing", guest: "Mr.B.K.Praveen Kumar,\nExecutive Digital Marketing,\nData Tracks Services Private Limited", participants: 121 },
      { sno: 10, date: "15.04.24 to 18.04.24 & 22.04.24 to 23.04.24", event: "Guest Lecture on Embedded IoT and Industrial Automation", guest: "Mr.Madhavpandian, Design-Lead (Embedded Technology), Tessolve Semiconductors.", participants: 130 },
      { sno: 11, date: "24.05.24", event: "International Guest Lecture on Radio Frequency Energy Harvesting", guest: "Dr.Manee Sangaran, Faculty of Innovation & Technology, Taylors University, Malaysia", participants: 130 },
      { sno: 12, date: "27.05.24", event: "Online Seminar on Tools Used in Automotive Software Development", guest: "Mr.A.Manzoor,\nSenior Automotive Software Developer - ANCIT", participants: 121 }
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
            className="max-w-4xl text-center mx-auto"
          >
            <h1 className="font-black tracking-tight leading-none mb-6" style={{ fontSize: 'clamp(3rem, 8vw, 5rem)', color: '#ffc107' }}>
              EPICS
            </h1>

            <p className="font-bold tracking-wide uppercase" style={{ fontSize: 'clamp(1rem, 2vw, 1.25rem)', color: '#ffffff', letterSpacing: '0.05em' }}>
              Enterprising Professionals in Integrated Circuits and Software
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
              About EPICS Association
            </div>

            <h2 className="font-extrabold tracking-tight leading-tight" style={{ fontSize: 'clamp(1.4rem, 2.5vw, 1.85rem)', color: '#224292' }}>
              Enterprising Professionals in Integrated Circuits and Software
            </h2>

            <p className="text-[14px] font-normal text-slate-800 leading-[25.2px] text-justify">
              The Enterprising Professionals in Integrated Circuits and Software (EPICS) Association is a vibrant student-driven platform that promotes technical excellence, innovation and professional development in the fields of electronics and software. It provides students with opportunities to explore emerging technologies through workshops, seminars, hackathons, coding events, and expert interactions. These activities encourage them to transform ideas into practical solutions.
            </p>

            <p className="text-[14px] font-normal text-slate-800 leading-[25.2px] text-justify">
              Beyond technical learning, EPICS nurtures leadership, teamwork, creativity, problem-solving, and communication skills through active student participation in organizing and executing various activities. The association also encourages interdisciplinary learning by bringing together concepts from integrated circuits, embedded systems, software development, artificial intelligence, IoT, and other emerging domains. Overall, the association serves as a bridge between academic knowledge, technological innovation, and entrepreneurial thinking, empowering students to become enterprising professionals and future-ready engineers.
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
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
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
                Mr. A. Tamilselvan
              </h3>
              <p className="font-medium text-sm text-slate-500">
                Assistant Professor / ECE
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
            Gallery (Major activity: AY 2025-2026)
          </h2>
          <div className="w-20 h-1.5 rounded-full mx-auto mt-6" style={{ backgroundColor: '#ffc107' }} />
          <p className="mt-6 text-slate-600 font-medium">Glimpses of activities, symposiums, and achievements of the EPICS Association.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {galleryImages.map((img, idx) => (
            <div key={idx} className="gallery-item relative overflow-hidden cursor-pointer group rounded-2xl shadow-md h-72" onClick={() => setSelectedImage(img)}>
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
                Major Activity: AY 2025-2026
              </div>
              <h3 className="font-extrabold text-xl sm:text-2xl text-[#224292] leading-tight mb-4">
                EPICS Event Gallery
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
