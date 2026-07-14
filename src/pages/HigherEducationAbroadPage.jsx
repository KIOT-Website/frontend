import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import {
  Sparkles,
  Users,
  Compass,
  Award,
  GraduationCap,
  Calendar,
  X,
  Target,
  User,
  Phone,
  Mail
} from 'lucide-react'
import "./studentLife.css"

import a1 from '../assets/iee/a1.jpg'
import a2 from '../assets/iee/a2.png'
import A3 from '../assets/iee/A3.jpg'
import A4 from '../assets/iee/A4.jpg'
import A5 from '../assets/iee/A5.jpg'
import A6 from '../assets/iee/A6.png'

export default function HigherEducationAbroadPage() {

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
    "To create awareness about higher education opportunities in various countries.",
    "To provide necessary support and information for students aspiring to take higher studies abroad.",
    "To guide students in selecting suitable universities and programs.",
    "To provide information on admission procedures, eligibility criteria, financial aid and application processes.",
    "To assist students in preparing for standardized tests such as IELTS, TOEFL, GRE, GMAT, and others.",
    "To facilitate interactions with international universities and educational consultants.",
    "To organize seminars, workshops, counseling sessions, and awareness programs on overseas education."
  ]

  const coordinators = [
    {
      name: "Mrs. A. Elavarasi",
      dept: "AP/MECH",
      role: "Coordinator",
      phone: "9894461464",
      email: "aemech@kiot.ac.in"
    },
    {
      name: "Mr. S. Walter Vetrivel",
      dept: "AP/CSE",
      role: "Member",
      phone: "9342758053",
      email: "pvwcse@kiot.ac.in"
    },
    {
      name: "Mrs. S. Sasidevi",
      dept: "AP/ECE",
      role: "Member",
      phone: "9538968805",
      email: "ssdece@kiot.ac.in"
    },
    {
      name: "Mrs. P. Rekha",
      dept: "AP/EEE",
      role: "Member",
      phone: "9789913095",
      email: "preee@kiot.ac.in"
    },
    {
      name: "Mr. S. Arulkesavan",
      dept: "AP/CIVIL",
      role: "Member",
      phone: "9787751075",
      email: "sakcivil@kiot.ac.in"
    },
    {
      name: "Mrs. V. Rajapriya",
      dept: "AP/IT",
      role: "Member",
      phone: "8056910240",
      email: "rvit@kiot.ac.in"
    },
    {
      name: "Mr. B. Venkata Ramanen",
      dept: "AP/CSBS",
      role: "Member",
      phone: "8428781084",
      email: "bvcsbs@kiot.ac.in"
    },
    {
      name: "Mr. B. Gunasekar",
      dept: "AP/AIDS",
      role: "Member",
      phone: "7845544603",
      email: "bgaids@kiot.ac.in"
    }
  ]

  const [activeYear, setActiveYear] = useState('2025-2026')
  const [selectedImage, setSelectedImage] = useState(null)

  const galleryImages = [
    {
      src: a1,
      title: "Individual Counselling Session on \"Higher Education Abroad (All Countries)\" by Premadevi S, Branch Manager, New Zealand Gateway, Coimbatore Branch on 13.02.2026."
    },
    {
      src: a2,
      title: "Awareness Program on \"Higher Education Opportunities in New Zealand\" & Individual Counselling by Premadevi S, Branch Manager, New Zealand Gateway, Coimbatore Branch on 23.07.2025."
    },
    {
      src: A3,
      title: "MoU Signing with Gateways Migration and Education Pvt. Ltd., Mumbai & Awareness Program on \"Higher Education Opportunities in New Zealand\" by Mr. Riddhish Jani, Managing Director, Gateways Migration and Education Pvt. Ltd., Mumbai, India on 10.06.2025."
    },
    {
      src: A4,
      title: "MoU Signing with K-KCCS India Pvt. Ltd. (Indo-Japan Bridge Organization) - A Program on \"Career Opportunities in Japan for Engineering Graduates & Management Graduates\" by Karunanithi Kasinathan, Founder & Chairman, K-KCCS India Pvt. Ltd., Chennai on 19.11.2024."
    },
    {
      src: A5,
      title: "Awareness Programme on \"Higher Education Opportunities in Foreign Countries\" by Aadhityaa Mohanavelu, PhD Candidate (Osman Lab), Civil and Environmental Engineering, Stanford University, Stanford, CA, USA on 09.09.2024."
    },
    {
      src: A6,
      title: "Overseas Education Fair by Mrs. Soujanya Philips Co-Founder, True Focuz, Hyderabad, Ms. Maneesha Jakku Manager South Asia, Macromedia University of Applied Sciences, Germany, Mr. Mahammad Imran Regional Recruitment Manager South India, Hartwick College-USA, and Mr. Abhisek Munnusamy International Business Manager Layon University, France on 04.05.2024."
    },
    {
      src: a1,
      title: "KIOT - Higher Education Conclave (Awareness on \"Higher Education Opportunities in India & Abroad and Competitive Exams\") on 02.09.2023."
    }
  ]

  const activitiesData = {
    "2025-2026": [
      {
        sno: 1,
        date: "13.02.2026",
        event: "Individual Counselling Session on \"Higher Education Abroad (All Countries)\"",
        guest: "Premadevi S\nBranch Manager, New Zealand Gateway, Coimbatore Branch.",
        participants: 100
      },
      {
        sno: 2,
        date: "23.07.2025",
        event: "Awareness Program on \"Higher Education Opportunities in New Zealand\" &\nIndividual Counselling",
        guest: "Premadevi S\nBranch Manager, New Zealand Gateway, Coimbatore Branch.",
        participants: 110
      },
      {
        sno: 3,
        date: "10.06.2025",
        event: "MoU Signing with Gateways Migration and Education Pvt. Ltd., Mumbai &\nAwareness Program on \"Higher Education Opportunities in New Zealand\"",
        guest: "Mr. Riddhish Jani\nManaging Director, Gateways Migration and Education Pvt. Ltd., Mumbai, India.",
        participants: 200
      }
    ],
    "2024-2025": [
      {
        sno: 1,
        date: "19.11.2024",
        event: "MoU Signing with K-KCCS India Pvt. Ltd. (Indo-Japan Bridge Organization)",
        guest: "Mr. Karunanidhi Kasinathan\nFounder & Chairman, K-KCCS India Pvt. Ltd., Chennai.",
        participants: 150
      },
      {
        sno: 2,
        date: "09.09.2024",
        event: "Awareness Programme on \"Higher Education Opportunities in Foreign Countries\"",
        guest: "Aadhityaa Mohanavelu\nPhD Candidate (Osman Lab), Civil and Environmental Engineering, Stanford University, Stanford, USA.",
        participants: 80
      }
    ],
    "2023-2024": [
      {
        sno: 1,
        date: "06.01.2024",
        event: "Higher Education Abroad Cell - Higher Education Opportunities in USA",
        guest: "Dr. Jey Veerasamy\nProfessor, Department of Computer Science, The University of Texas.",
        participants: 100
      },
      {
        sno: 2,
        date: "02.09.2023",
        event: "KIOT - Higher Education Conclave",
        guest: "Lugar Academy, Salem.\nBluestone Overseas Consultants, Salem.\nTrinity Educational Consultants, Salem.\nRR Overseas Education, Salem.\nShankar IAS Academy, Salem.\nACE Engineering Academy, Hyderabad.\nidp – IELTS, Coimbatore.\nETS TOEFL, Coimbatore.",
        participants: 300
      },
      {
        sno: 3,
        date: "04.05.2024",
        event: "Overseas Education Fair",
        guest: "Mrs. Soujanya Philips (Co-Founder, True Focuz, Hyderabad)\nMs. Maneesha Jakku (Manager South Asia, Macromedia University of Applied Sciences, Germany)\nMr. Mahammad Imran (Regional Recruitment Manager South India, Hartwick College-USA)\nMr. Abhisek Munnusamy (International Business Manager Layon University, France).",
        participants: 350
      },
      {
        sno: 4,
        date: "28.03.2024",
        event: "GRE Mock Test & Awareness Program on \"Masters at Top Universities World Wide\"",
        guest: "Mr. Gowtham Sekaran\nSr. Manager-Sales & Marketing Galvanize Global Education, Chennai.",
        participants: 150
      }
    ]
  }

  const studentsData = {
    "2025-2026": [],
    "2024-2025": [
      { sno: 1, batch: "2020 - 2024", university: "Oxford Brook University, UK", degree: "M.S", branch: "Sports Engineering" }
    ],
    "2023-2024": [
      { sno: 1, batch: "2018 - 2022", university: "Arizona University, USA", degree: "M.S", branch: "Data Science" }
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
              HEC (Abroad)
            </h1>

            <p className="font-bold tracking-wide uppercase mb-3 text-white/90" style={{ fontSize: 'clamp(0.85rem, 1.8vw, 1.1rem)', letterSpacing: '0.05em' }}>
              Higher Education Cell (Abroad)
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
              About the Cell
            </div>

            <h2 className="font-extrabold tracking-tight leading-tight" style={{ fontSize: 'clamp(1.4rem, 2.5vw, 1.85rem)', color: '#224292' }}>
              Guiding Aspirations Beyond Borders
            </h2>

            <p className="text-[14px] font-normal text-slate-800 leading-[25.2px] text-justify">
              The Higher Education Abroad Cell is established to support and guide students who aspire to pursue higher studies in foreign universities. The cell serves as a bridge between students and international educational institutions by providing information on academic programs, admission requirements, scholarships, entrance examinations, visa procedures, and career opportunities abroad. It organizes awareness programs, counseling sessions, seminars, workshops, and interactions with educational experts and university representatives to help students make informed decisions about their future.
            </p>
            <p className="text-[14px] font-normal text-slate-800 leading-[25.2px] text-justify">
              The cell also assists students in identifying suitable universities based on their academic interests and career goals, thereby enhancing their global exposure, research opportunities, and employability. Through these initiatives, the Higher Education Abroad Cell aims to encourage students to achieve academic excellence and develop the skills required to succeed in an increasingly globalized world.
            </p>
          </div>
        </motion.div>
      </div>

      {/* ─── OBJECTIVES SECTION ─── */}
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
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {objectives.map((obj, idx) => (
            <motion.div
              key={idx}
              variants={itemVariants}
              className="bg-white rounded-2xl p-6 border border-slate-100 flex items-start gap-4 transition-all duration-300 hover:shadow-md"
              style={{ boxShadow: '0 4px 12px rgba(0,0,0,0.04)' }}
            >
              <div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center shrink-0">
                <Target size={20} className="text-[#224292]" />
              </div>
              <p className="text-[14px] text-slate-800 font-normal leading-[22px]">{obj}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* ─── STAFF COORDINATORS SECTION ─── */}
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-10 mt-12">
        <div className="text-center max-w-2xl mx-auto mb-8">
          <h2 className="font-black tracking-tight" style={{ fontSize: 'clamp(1.4rem, 3vw, 2.1rem)', color: '#224292' }}>
            Faculty Advisors & In-charges
          </h2>
          <div className="w-20 h-1.5 rounded-full mx-auto mt-6" style={{ backgroundColor: '#ffc107' }} />
        </div>

        {/* Coordinators Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {coordinators.map((coordinator, idx) => (
            <motion.div
              key={idx}
              variants={itemVariants}
              className="bg-white rounded-2xl p-5 border border-slate-100 flex flex-col justify-between transition-all duration-500 hover:-translate-y-1"
              style={{ boxShadow: '0 8px 24px rgba(0,0,0,0.06)' }}
            >
              <div>
                <span className={`uppercase font-black tracking-wider text-[10px] block mb-2 ${coordinator.role === 'Coordinator' ? 'text-amber-500' : 'text-[#224292]'}`}>
                  {coordinator.role}
                </span>
                <h4 className="text-[15px] font-bold text-slate-800 mb-1">
                  {coordinator.name}
                </h4>
                <span className="text-[11px] font-semibold text-slate-500 block uppercase tracking-wider mb-4">
                  {coordinator.dept}
                </span>
              </div>
              <div className="pt-4 border-t border-slate-100 space-y-2">
                <div className="flex items-center gap-2 text-xs text-slate-600">
                  <Phone size={13} className="text-slate-400" />
                  <span>{coordinator.phone}</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-slate-600 truncate">
                  <Mail size={13} className="text-slate-400" />
                  <a href={`mailto:${coordinator.email}`} className="hover:underline">{coordinator.email}</a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* ─── LIST OF ACTIVITIES SECTION ─── */}
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-10 mt-16 mb-8">
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
          key={`activities-${activeYear}`}
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
                  <th className="px-4 py-3.5 text-[11px] font-black tracking-wider border-r border-white/10 w-72">Event Name</th>
                  <th className="px-4 py-3.5 text-[11px] font-black tracking-wider border-r border-white/10">Guest Name & Designation</th>
                  <th className="px-4 py-3.5 text-[11px] font-black tracking-wider w-24 text-center">Participants</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {activitiesData[activeYear].length > 0 ? (
                  activitiesData[activeYear].map((item, idx) => (
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
                      <td className="px-4 py-3 text-[14px] font-normal text-left text-slate-800 border-r border-slate-50 leading-[25.2px] whitespace-pre-line">
                        {item.guest}
                      </td>
                      <td className="px-4 py-3 text-[14px] font-normal text-center text-slate-800 border-r border-slate-50 leading-[25.2px] bg-slate-50/50 group-hover:bg-slate-50 transition-colors">
                        {item.participants}
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="5" className="px-4 py-8 text-center text-slate-400 font-medium">No activities recorded for this academic year.</td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </motion.div>
      </div>

      {/* ─── STUDENTS PURSUING HIGHER STUDIES SECTION ─── */}
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-10 mt-16 mb-8">
        <div className="text-center max-w-2xl mx-auto mb-6">
          <h2 className="font-black tracking-tight" style={{ fontSize: 'clamp(1.4rem, 3vw, 2.1rem)', color: '#224292' }}>
            Students Pursuing Higher Studies
          </h2>
          <div className="w-20 h-1.5 rounded-full mx-auto mt-6" style={{ backgroundColor: '#ffc107' }} />
        </div>

        {/* Table Container */}
        <motion.div
          key={`students-${activeYear}`}
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
                  <th className="px-4 py-3.5 text-[11px] font-black tracking-wider border-r border-white/10 w-32 text-center">Batch</th>
                  <th className="px-4 py-3.5 text-[11px] font-black tracking-wider border-r border-white/10">College / University Name</th>
                  <th className="px-4 py-3.5 text-[11px] font-black tracking-wider border-r border-white/10 w-24 text-center">Degree</th>
                  <th className="px-4 py-3.5 text-[11px] font-black tracking-wider w-48">Branch</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {studentsData[activeYear] && studentsData[activeYear].length > 0 ? (
                  studentsData[activeYear].map((item, idx) => (
                    <tr key={idx} className="hover:bg-slate-50 transition-colors">
                      <td className="px-4 py-3 text-[14px] font-normal text-center text-slate-800 border-r border-slate-50 leading-[25.2px]">{item.sno}</td>
                      <td className="px-4 py-3 text-[14px] font-normal text-center text-slate-800 border-r border-slate-50 leading-[25.2px]">
                        {item.batch}
                      </td>
                      <td className="px-4 py-3 text-[14px] font-normal text-left text-slate-800 border-r border-slate-50 leading-[25.2px]">
                        {item.university}
                      </td>
                      <td className="px-4 py-3 text-[14px] font-normal text-center text-slate-800 border-r border-slate-50 leading-[25.2px]">
                        <span className="px-2 py-0.5 rounded bg-amber-50 text-amber-700 text-xs font-bold border border-amber-100">
                          {item.degree}
                        </span>
                      </td>
                      <td className="px-4 py-3 text-[14px] font-normal text-left text-slate-800 leading-[25.2px]">
                        {item.branch}
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="5" className="px-4 py-8 text-center text-slate-400 font-medium">No students registered/pursuing studies for this academic year.</td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </motion.div>
      </div>

      {/* ─── GALLERY SECTION ─── */}
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-10 mt-16 mb-8 gallery-section">
        <div className="text-center max-w-2xl mx-auto mb-6 gallery-header">
          <h2 className="font-black tracking-tight" style={{ fontSize: 'clamp(1.4rem, 3vw, 2.1rem)', color: '#224292' }}>
            Event Gallery
          </h2>
          <div className="w-20 h-1.5 rounded-full mx-auto mt-6" style={{ backgroundColor: '#ffc107' }} />
          <p className="mt-6 text-slate-600 font-medium">Glimpses of activities, MoU signings, and counseling sessions organized by the Higher Education Abroad Cell.</p>
        </div>

        <div className="gallery-grid">
          {galleryImages.map((img, idx) => (
            <div key={idx} className="gallery-item relative overflow-hidden cursor-pointer group" onClick={() => setSelectedImage(img)}>
              <img src={img.src} alt="Higher Education Abroad" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
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
                alt="Selected Event" 
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
                Higher Education Abroad
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
