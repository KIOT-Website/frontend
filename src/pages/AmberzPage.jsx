import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import {
  Sparkles,
  Users,
  Compass,
  Award,
  GraduationCap,
  User,
  Calendar,
  X,
  Zap,
  Cpu
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

export default function AmberzPage() {

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
      title: "Technical Knowledge",
      desc: "To promote technical knowledge and practical skills among EEE students through workshops, seminars, and projects.",
      icon: Cpu,
      color: "from-blue-500/10 to-blue-100/50",
      iconColor: "text-[#224292]"
    },
    {
      title: "Innovation & Research",
      desc: "To encourage innovation, research culture, and entrepreneurship in electrical and allied domains.",
      icon: Sparkles,
      color: "from-purple-500/10 to-purple-100/50",
      iconColor: "text-purple-600"
    },
    {
      title: "Industry Connection",
      desc: "To enhance industry–institute interaction through guest lectures, industrial visits, and internships.",
      icon: Compass,
      color: "from-yellow-400/10 to-yellow-100/50",
      iconColor: "text-[#d4a017]"
    },
    {
      title: "Leadership & Collaboration",
      desc: "To develop leadership, teamwork, and communication skills among students.",
      icon: Users,
      color: "from-amber-500/10 to-orange-100/50",
      iconColor: "text-amber-600"
    },
    {
      title: "Holistic Development",
      desc: "To organize co-curricular and extracurricular activities for holistic student development.",
      icon: Award,
      color: "from-green-500/10 to-green-100/50",
      iconColor: "text-green-600"
    }
  ]

  const coordinatorData = {
    "2025-2026": {
      name: "Mr.R.Madhanraj",
      role: "Association Coordinator",
      designation: "Assistant Professor / EEE"
    },
    "2024-2025": {
      name: "Mr.R.Madhanraj",
      role: "Association Coordinator",
      designation: "Assistant Professor / EEE"
    },
    "2023-2024": {
      name: "Mr.R.Madhanraj",
      role: "Association Coordinator",
      designation: "Assistant Professor / EEE"
    }
  }

  const coreLeadersData = {
    "2025-2026": [
      { role: "Secretary", name: "Ms.S.Roopika", class: "IV EEE" },
      { role: "Joint Secretary", name: "Ms.Kavya S", class: "III EEE" },
      { role: "Treasurer", name: "Ms.S.Priyanka", class: "IV EEE" },
      { role: "Joint Treasurer", name: "Ms.Janani D", class: "III EEE" }
    ],
    "2024-2025": [
      { role: "Secretary", name: "Ms.L.Jasmin", class: "IV EEE" },
      { role: "Joint Secretary", name: "Ms.S.Roopika", class: "III EEE" },
      { role: "Treasurer", name: "Mr.S.Deepak", class: "IV EEE" },
      { role: "Joint Treasurer", name: "Ms.S.Priyanka", class: "III EEE" }
    ],
    "2023-2024": [
      { role: "Secretary", name: "Mr.E.Prasanna sekaran", class: "IV EEE" },
      { role: "Joint Secretary", name: "Ms.L.Jasmin", class: "III EEE" },
      { role: "Treasurer", name: "Ms.P.Parvathi", class: "IV EEE" },
      { role: "Joint Treasurer", name: "Mr.S.Deepak", class: "III EEE" }
    ]
  }

  const officeBearersData = {
    "2025-2026": [
      { name: "Ms.S.Poovizhi", class: "IV EEE" },
      { name: "Mr.S K Kamalesh", class: "IV EEE" },
      { name: "Ms.V.G.Agalya", class: "IV EEE" },
      { name: "Mr.A.Lenin John Paul", class: "IV EEE" },
      { name: "Mr.P.C.Dinesh", class: "IV EEE" },
      { name: "Ms.Deivasri A", class: "III EEE" },
      { name: "Mr.Aswin Sivakumar", class: "III EEE" },
      { name: "Mr.Gokulraj G", class: "III EEE" },
      { name: "Mr.Sivaramkrishnan", class: "III EEE" },
      { name: "Ms.J.R.Devisri", class: "II EEE" },
      { name: "Mr.S.Kaushik Raam", class: "II EEE" },
      { name: "Ms.K.P.Laksanaa", class: "II EEE" },
      { name: "Mr.R.Mahakarthikeyan", class: "II EEE" },
      { name: "Mr.K.Ruban", class: "II EEE" },
      { name: "Ms.M.Sabhareeswari", class: "II EEE" },
      { name: "Mr.A.S.Vijaivendhan", class: "II EEE" }
    ],
    "2024-2025": [
      { name: "Mr.M.Dhanusheswaran", class: "IV EEE" },
      { name: "Ms.P.V.Hemappriya", class: "IV EEE" },
      { name: "Mr.K.Muralivenkatesh", class: "IV EEE" },
      { name: "Mr.J.Meharaj Mohammed", class: "IV EEE" },
      { name: "Ms.S.Deepitha", class: "IV EEE" },
      { name: "Ms.S.Poovizhi", class: "III EEE" },
      { name: "Mr S K Kamalesh", class: "III EEE" },
      { name: "Ms.V.G.Agalya", class: "III EEE" },
      { name: "Mr.A.Lenin John Paul", class: "III EEE" },
      { name: "Mr.P.C.Dinesh", class: "II EEE" },
      { name: "Ms.Deivasri A", class: "II EEE" },
      { name: "Ms.Janani D", class: "II EEE" },
      { name: "Ms.Kavya S", class: "II EEE" },
      { name: "Mr.Aswin Sivakumar", class: "II EEE" },
      { name: "Mr.Gokulraj G", class: "II EEE" },
      { name: "Mr.Sivaramkrishnan", class: "II EEE" }
    ],
    "2023-2024": [
      { name: "Mr.G.Santhosh", class: "IV EEE" },
      { name: "Mr.S.Jaswanth", class: "IV EEE" },
      { name: "Ms.G.A.Sharmila", class: "IV EEE" },
      { name: "Ms.S.Aarthi", class: "IV EEE" },
      { name: "Mr.M.Mugilan", class: "IV EEE" },
      { name: "Mr.M.Dhanusheswaran", class: "III EEE" },
      { name: "Ms.P.V.Hemappriya", class: "III EEE" },
      { name: "Mr.K.Muralivenkatesh", class: "III EEE" },
      { name: "Mr.J.Meharaj Mohammed", class: "III EEE" },
      { name: "Ms.S.Deepitha", class: "II EEE" },
      { name: "Ms.S.Keerthiga", class: "II EEE" },
      { name: "Ms.S.Priyanka", class: "II EEE" },
      { name: "Ms.S.Roopika", class: "II EEE" },
      { name: "Mr.C.Naveen", class: "II EEE" },
      { name: "Mr.A.Lenin John Paul", class: "II EEE" },
      { name: "Mr.P.C.Dinesh", class: "II EEE" }
    ]
  }

  const [activeYear, setActiveYear] = useState('2025-2026')
  const [selectedImage, setSelectedImage] = useState(null)

  const galleryImages = [
    { src: asset4, title: "AMBERZ Seminar on Smart Grid" },
    { src: asset5, title: "EV Powertrain Hands-on Training" },
    { src: asset12, title: "Technical Presentation on Green Energy" },
    { src: asset13, title: "Industrial Drone Design Workshop" },
    { src: asset14, title: "National Level Symposium Inaugural Address" },
    { src: asset20, title: "Robotics Development & Automation Contest" },
    { src: asset21, title: "Renewable Energy Research Seminar" },
    { src: asset22, title: "Alumni Interaction Session on Core Placements" },
    { src: asset23, title: "IoT & Home Automation Demonstration" },
    { src: asset24, title: "Engineers Day Project Exhibition" },
    { src: asset25, title: "Industrial Site Visit Briefing" },
    { src: asset26, title: "AMBERZ Association Valedictory Function" }
  ]

  const activitiesData = {
    "2025-2026": [
      { sno: 1, date: "17.09.2025", event: "Association Inauguration", guest: "Mr BIJU P K\nHead of Idea & Incubation Office &\nGlobal IT Operations\n(India, Middle East & USA)\nLarsen & Toubro\nPower Transmission & Distribution, Chennai", participants: 240 },
      { sno: 2, date: "22.09.2025", event: "Fresher’s Welcome", guest: "AMBER’Z Office Bearers", participants: 65 },
      { sno: 3, date: "01.10.2025", event: "Friendship Day Event", guest: "III Year EEE Students", participants: 65 },
      { sno: 4, date: "29.01.2025", event: "Guest Lecture", guest: "Dr. DIVYAA RAMAN\nBusiness Partner - L&D,\nFuji Electric India Pvt. Ltd.", participants: 150 },
      { sno: 5, date: "24.11.2025", event: "Just a Min Talk", guest: "AMBER’Z Office Bearers", participants: 65 },
      { sno: 6, date: "26.08.2025", event: "Project Expo", guest: "Mr. Shaik Aleem Ur Rehaman\nSenior Executive – HR,\nBSH Home Appliances,\nChennai.", participants: 60 },
      { sno: 7, date: "10.02.2026", event: "Arivoli’26 National Level Technical Symposium", guest: "Ms. VG Shri Rajini Prriya\nDirector & Head of Human Resources,\nInsight software\nBengaluru.", participants: 385 },
      { sno: 8, date: "27.03.2026", event: "FAA Presentation", guest: "AMBER’Z Office Bearers", participants: 65 },
      { sno: 9, date: "03.02.2026", event: "Guest Lecture", guest: "Mr.G.Balaji\nAssistant Manager\nTata Electronics Pvt Ltd\nHosur", participants: 68 },
      { sno: 10, date: "27.09.2025", event: "Teacher Day Celebration", guest: "AMBER’Z Office Bearers", participants: 25 },
      { sno: 11, date: "13.04.2026", event: "Farewell Function", guest: "HOD-EEE", participants: 150 },
      { sno: 12, date: "13.04.2026", event: "Valedictory Function", guest: "Director - Academics", participants: 150 }
    ],
    "2024-2025": [
      { sno: 1, date: "16.08.2024", event: "Independence Day Activity\n(Poster Competition)", guest: "Participants - All EEE Students", participants: 60 },
      { sno: 2, date: "05.09.2024", event: "Teachers Day Activity\n(Debate & Speech)", guest: "Participants - All EEE Students", participants: 60 },
      { sno: 3, date: "03.10.2024", event: "Association Inaugural Function", guest: "Mr.Thiagarajan Varadharaju\nFounder and Managing Director\nKT Telematic Solutions Pvt. Ltd. Salem.", participants: 240 },
      { sno: 4, date: "03.10.2024", event: "MAP -Expo", guest: "Mr.Thiagarajan Varadharaju\nFounder and Managing Director\nKT Telematic Solutions Pvt. Ltd. Salem.", participants: 150 },
      { sno: 5, date: "08.10.2024", event: "Fresher’s Welcome", guest: "Association Office Bearers", participants: 60 },
      { sno: 6, date: "04.10.2024", event: "Guest Lecture on “Software Lifecycle Management and ECU Integration in Automotive Technology”", guest: "Mr.Alaguvairavasundharam\nLead Engineer,\nTelematics, Stellantis,\nBangalore", participants: 68 },
      { sno: 7, date: "08.10.2024", event: "Tech-Talk\nPresentation on the recent technology", guest: "Participants - II Year EEE Students", participants: 65 },
      { sno: 8, date: "17.10.2024", event: "International Poverty day Awareness Program", guest: "Association Office Bearers", participants: 20 },
      { sno: 9, date: "21.10.2024", event: "IAT Performance - Topper Award", guest: "Participants - II Year EEE Students", participants: 20 },
      { sno: 10, date: "21.11.2024", event: "Guest Lecture and Hands on\n“ Motor Windings”", guest: "Mr.G.Karthick\nSri Vinayaga Rewinding Industry, Salem\nParticipants - II Year EEE Students", participants: 68 },
      { sno: 11, date: "22.11.2024", event: "Guest Lecture on\n“Revolutionizing Industry: Insights into Automation and PLC\"", guest: "Mr.G.Balaji\nTeam Leader,\nCOGENT Automation,\nCoimbatore.", participants: 68 },
      { sno: 12, date: "10.12.2024", event: "Human Rights day drawing Competition", guest: "Participants - I Year EEE students", participants: 65 },
      { sno: 13, date: "23.01.2025", event: "Guest Lecture on “Design / Debugging on Embedded System”", guest: "Mr.Harresh Janakiraman\nDirector-Embedded Guru LLC, Houston, Texas,\nUnited States", participants: 180 },
      { sno: 14, date: "22.02.2025", event: "National Level Technical Symposium “ARIVOLI”", guest: "Participants - Students for different Institutions", participants: 350 },
      { sno: 15, date: "16.04.2025", event: "FAA – Paper Presentation", guest: "Participants – II Year EEE Students", participants: 60 },
      { sno: 16, date: "22.04.2025", event: "FAA – Paper Presentation", guest: "Participants – I Year EEE Students", participants: 65 },
      { sno: 17, date: "13.05.2025", event: "Idea Pitching", guest: "Participants – I Year EEE Students", participants: 60 },
      { sno: 18, date: "14.05.2025", event: "Valedictory", guest: "EEE Students", participants: 150 }
    ],
    "2023-2024": [
      { sno: 1, date: "05.09.2023", event: "Teachers Day Activity", guest: "Mr.R.Madhanraj\nAMBER’Z Association Incharge\nDepartment of EEE-KIOT\nStudents Conducted event for Faculty members", participants: 20 },
      { sno: 2, date: "12.09.2023", event: "Engineer’s Day Activity", guest: "Dr.V.KamatchiKannan\nProfessor/ EEE-KIOT", participants: 60 },
      { sno: 3, date: "09.10.2023", event: "Inauguration of Association", guest: "Mr.V.Vijay Karthik\nLead- SAS Technical Institute\nGE T&D India Ltd", participants: 240 },
      { sno: 4, date: "21.10.2023", event: "Hands-on Session – Embedded Processor", guest: "Mr.M.Parthiban\nTechnical Product Manager\nCaliber Embedded India Pvt.Ltd\nSalem.", participants: 60 },
      { sno: 5, date: "07.11.2023", event: "Electrifying Diwali Celebration", guest: "Mr.R.Madhanraj\nAMBER’Z Association Incharge\nDepartment of EEE-KIOT", participants: 180 },
      { sno: 6, date: "22.01.2024\n&\n24.01.2024", event: "Republic Day Activity", guest: "Dr.V.KamatchiKannan\nProfessor\nDepartment of EEE-KIOT", participants: 120 },
      { sno: 7, date: "29.01.2024", event: "Guest Lecture", guest: "Mr. Ramasamy Chockalingam\nDeputy Director,\nSemiconductor Process Development, Singapore.", participants: 120 },
      { sno: 8, date: "10.02.2024", event: "Tech. Talk", guest: "Mr.M.Jagadeshraja, AP/EEE\nMr.R.Madhanrah, AP/EEE", participants: 60 },
      { sno: 9, date: "23.02.2024", event: "Symposium- Electrico’24", guest: "Mr.Harish Vardhana\nFounder & CTO, KAL-M Robotics, Chennai.", participants: 240 },
      { sno: 10, date: "23.02.2024", event: "MAP’24 Expo", guest: "Dr.J.Darshan Kumar\nConsultant and Advisor,\nLandrotics Solutions Pvt. Ltd,\nCoimbatore", participants: 240 },
      { sno: 11, date: "30.04.2024", event: "Valedictory", guest: "Dr.C.Muniraj\nProfessor & Head\nDepartment of EEE- KIOT", participants: 180 }
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
              AMBERZ
            </h1>

            <p className="font-bold tracking-wide uppercase" style={{ fontSize: 'clamp(1rem, 2vw, 1.25rem)', color: '#ffffff', letterSpacing: '0.05em' }}>
              Active and Majestic Brain of Electrical Rambo’Z
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
              Empowering Excellence in Electrical & Electronics Engineering
            </h2>

            <p className="text-[14px] font-normal text-slate-800 leading-[25.2px] text-justify">
              AMBERZ Association – Active and Majestic Brain of Electrical Rambo’Z – is the official student association of the Department of Electrical and Electronics Engineering. It provides a vibrant platform for students to enhance technical knowledge, practical skills, and innovation through workshops, seminars, guest lectures, industrial visits, and project activities.
            </p>

            <p className="text-[14px] font-normal text-slate-800 leading-[25.2px] text-justify">
              The association promotes research, entrepreneurship, leadership, teamwork, and communication skills, ensuring the holistic development of students. AMBERZ empowers future engineers to become skilled professionals, innovators, and responsible leaders in the field of technology.
            </p>
          </div>
        </motion.div>
      </div>

      {/* ─── THREE CORE PILLARS SECTION ─── */}
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-10 mt-10">
        <div className="text-center max-w-2xl mx-auto mb-8">
          <h2 className="font-black tracking-tight" style={{ fontSize: 'clamp(1.4rem, 3vw, 2.1rem)', color: '#224292' }}>
            Our Core Pillars
          </h2>
          <div className="w-20 h-1.5 rounded-full mx-auto mt-6" style={{ backgroundColor: '#ffc107' }} />
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6"
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
                Association Coordinator
              </span>
              <h3 className="font-black text-xl mb-1" style={{ color: '#224292' }}>
                {coordinatorData[activeYear].name}
              </h3>
              <p className="font-medium text-sm text-slate-500">
                {coordinatorData[activeYear].designation}
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
            {coreLeadersData[activeYear].map((leader, idx) => (
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
            {officeBearersData[activeYear].map((bearer, idx) => (
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
          <p className="mt-6 text-slate-600 font-medium">Glimpses of activities, symposiums, and achievements of the AMBERZ Association.</p>
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
                AMBERZ Event Gallery
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
