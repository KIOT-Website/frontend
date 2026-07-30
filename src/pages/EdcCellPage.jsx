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
  UserCheck,
  Lightbulb,
  Rocket,
  TrendingUp,
  Building2,
  CheckCircle2,
  BookOpen,
  Briefcase
} from 'lucide-react'
import "./studentLife.css"

// Import gallery images from assets/club/Entrepreneurship Development Cell (EDC)
import edcImg1 from '../assets/club/Entrepreneurship Development Cell (EDC)/MBA - EDC (1).jpeg'
import edcImg2 from '../assets/club/Entrepreneurship Development Cell (EDC)/MBA - EDC (2).jpeg'
import edcImg3 from '../assets/club/Entrepreneurship Development Cell (EDC)/MBA - EDC (3).jpeg'
import edcImg4 from '../assets/club/Entrepreneurship Development Cell (EDC)/MBA - EDC (4).jpeg'
import edcImg5 from '../assets/club/Entrepreneurship Development Cell (EDC)/MBA - EDC (5).jpeg'
import edcImg6 from '../assets/club/Entrepreneurship Development Cell (EDC)/MBA - EDC (6).jpeg'
import edcImg7 from '../assets/club/Entrepreneurship Development Cell (EDC)/MBA - EDC (7).jpeg'
import edcImg8 from '../assets/club/Entrepreneurship Development Cell (EDC)/MBA - EDC (8).jpeg'
import edcImg9 from '../assets/club/Entrepreneurship Development Cell (EDC)/MBA - EDC (9).jpeg'
import edcImg10 from '../assets/club/Entrepreneurship Development Cell (EDC)/MBA - EDC (10).jpeg'
import edcImg11 from '../assets/club/Entrepreneurship Development Cell (EDC)/MBA - EDC (11).jpeg'
import edcImg12 from '../assets/club/Entrepreneurship Development Cell (EDC)/MBA - EDC (12).jpeg'
import edcImg13 from '../assets/club/Entrepreneurship Development Cell (EDC)/MBA - EDC (13).png'
import edcImg14 from '../assets/club/Entrepreneurship Development Cell (EDC)/MBA - EDC (14).png'
import edcImg15 from '../assets/club/Entrepreneurship Development Cell (EDC)/MBA - EDC (15).png'
import edcImg16 from '../assets/club/Entrepreneurship Development Cell (EDC)/MBA - EDC (16).png'
import edcImg17 from '../assets/club/Entrepreneurship Development Cell (EDC)/MBA - EDC (17).jpeg'
import edcImg18 from '../assets/club/Entrepreneurship Development Cell (EDC)/MBA - EDC (18).jpeg'
import edcImg19 from '../assets/club/Entrepreneurship Development Cell (EDC)/MBA - EDC (19).jpeg'
import edcImg20 from '../assets/club/Entrepreneurship Development Cell (EDC)/MBA - EDC (20).jpeg'
import edcImg21 from '../assets/club/Entrepreneurship Development Cell (EDC)/MBA - EDC (21).jpeg'
import edcImg22 from '../assets/club/Entrepreneurship Development Cell (EDC)/MBA - EDC (22).jpeg'
import edcImg23 from '../assets/club/Entrepreneurship Development Cell (EDC)/MBA - EDC (23).jpeg'
import edcImg24 from '../assets/club/Entrepreneurship Development Cell (EDC)/MBA - EDC (24).jpeg'

export default function EdcCellPage() {

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
      title: "Entrepreneurship & Innovation Concepts",
      desc: "To enhance students' understanding of entrepreneurship concepts and their practical applications in business development and innovation.",
      icon: Lightbulb,
      color: "from-amber-500/10 to-orange-100/50",
      iconColor: "text-amber-600"
    },
    {
      title: "Experiential Learning & Mentorship",
      desc: "To bridge the gap between theoretical knowledge and real-world entrepreneurial practices through hands-on activities, mentorship, and experiential learning.",
      icon: Rocket,
      color: "from-blue-500/10 to-indigo-100/50",
      iconColor: "text-[#224292]"
    },
    {
      title: "Problem Solving & Startup Mindset",
      desc: "To foster an entrepreneurial mindset among students by encouraging innovation, creative problem-solving, and risk-taking in a supportive environment.",
      icon: TrendingUp,
      color: "from-emerald-500/10 to-teal-100/50",
      iconColor: "text-emerald-700"
    }
  ]

  const compositionMembers = [
    {
      sno: 1,
      name: "Mr. P. Manikandan",
      affiliation: "Assistant Professor",
      position: "Faculty Coordinator",
      badgeColor: "bg-blue-100 text-[#224292] border-blue-200"
    },
    {
      sno: 2,
      name: "Sudharsan V",
      affiliation: "Student",
      position: "Coordinator",
      badgeColor: "bg-amber-100 text-amber-900 border-amber-200"
    },
    {
      sno: 3,
      name: "Badri M",
      affiliation: "Student",
      position: "Co-Coordinator",
      badgeColor: "bg-emerald-100 text-emerald-900 border-emerald-200"
    },
    {
      sno: 4,
      name: "Thennarashi S K",
      affiliation: "Student",
      position: "Executive Member",
      badgeColor: "bg-slate-100 text-slate-800 border-slate-200"
    },
    {
      sno: 5,
      name: "Harini B K",
      affiliation: "Student",
      position: "Executive Member",
      badgeColor: "bg-slate-100 text-slate-800 border-slate-200"
    }
  ]

  const [activeYear, setActiveYear] = useState('2024-2025')
  const [selectedImage, setSelectedImage] = useState(null)

  const galleryImages = [
    { src: edcImg1, title: "Entrepreneurship Development Cell - Business Idea and Problem Solution Fit Seminar" },
    { src: edcImg2, title: "Entrepreneurship Development Cell - Address by MSME Assistant Director Mr. D. Balaguru" },
    { src: edcImg3, title: "Entrepreneurship Development Cell - Steps Behind My Success Guest Talk" },
    { src: edcImg4, title: "Entrepreneurship Development Cell - Essential Financial Insights for Startups Session" },
    { src: edcImg5, title: "Entrepreneurship Development Cell - Success Mantras Workshop by JCI Zone Trainer" },
    { src: edcImg6, title: "Entrepreneurship Development Cell - Entrepreneurial Eco System Lecture by Dr. Jayshree Suresh" },
    { src: edcImg7, title: "Entrepreneurship Development Cell - Think Like A CEO Start Without Fear Workshop" },
    { src: edcImg8, title: "Entrepreneurship Development Cell - My Edupreneurial Journey Keynote by Dr. PSS. Srinivasan" },
    { src: edcImg9, title: "Entrepreneurship Development Cell - MBA IEV Student Interactive Discussion" },
    { src: edcImg10, title: "Entrepreneurship Development Cell - Guest Felicitation & Memento Presentation" },
    { src: edcImg11, title: "Entrepreneurship Development Cell - Student Startup Pitching Session" },
    { src: edcImg12, title: "Entrepreneurship Development Cell - Faculty Coordinator & Student Leaders" },
    { src: edcImg13, title: "Entrepreneurship Development Cell - MSME Govt. of India Workshop Group Photo" },
    { src: edcImg14, title: "Entrepreneurship Development Cell - Executive Chairman Address to MBA Students" },
    { src: edcImg15, title: "Entrepreneurship Development Cell - Corporate Finance & Working Capital Seminar" },
    { src: edcImg16, title: "Entrepreneurship Development Cell - Entrepreneurship Coach Interaction" },
    { src: edcImg17, title: "Entrepreneurship Development Cell - Startup Eco-system Q&A Forum" },
    { src: edcImg18, title: "Entrepreneurship Development Cell - Motivational Speaker Keynote Session" },
    { src: edcImg19, title: "Entrepreneurship Development Cell - Business Plan Prototyping Workshop" },
    { src: edcImg20, title: "Entrepreneurship Development Cell - Industry Mentorship Interaction" },
    { src: edcImg21, title: "Entrepreneurship Development Cell - Edupreneurship Session Certificate Distribution" },
    { src: edcImg22, title: "Entrepreneurship Development Cell - Sustainable Entrepreneurship Focus Group" },
    { src: edcImg23, title: "Entrepreneurship Development Cell - Student Startup Founders & Innovators" },
    { src: edcImg24, title: "Entrepreneurship Development Cell - Valedictory Function & Group Photo" }
  ]

  const activitiesData = {
    "2024-2025": [
      {
        sno: 1,
        date: "07.11.2024",
        event: "“Business Idea and Problem Solution Fit” (A goal towards Sustainable Entrepreneurship)",
        guest: "Mr. D. Balaguru\nAssistant Director, Process Product Development Centre,\nMinistry of MSME, Govt. of India Organization, Coimbatore\nTarget: MBA IEV Students",
        participants: 29
      },
      {
        sno: 2,
        date: "09.11.2024",
        event: "Steps Behind My Success",
        guest: "Mr. R. Gowri Shankar\nManaging Director, Raja Agencies, Bearing Wholesale, Salem\nTarget: MBA IEV Students",
        participants: 29
      },
      {
        sno: 3,
        date: "16.11.2024",
        event: "Essential financial Insights for Entrepreneurial Success in Startups",
        guest: "Mr. Kamalakkannan Srinivasan\nSenior Manager, Business Relationship Manager, Working capital,\nKotak Mahindra Bank, Salem\nTarget: MBA IEV Students",
        participants: 21
      },
      {
        sno: 4,
        date: "22.11.2024",
        event: "Success Mantras",
        guest: "JFM Prathap Chandrasekar\nZone Trainer, JCI Erode Galaxy, HR Manager, Ortho Life Hospital, Erode\nTarget: MBA IEV Students",
        participants: 27
      },
      {
        sno: 5,
        date: "02.12.2024",
        event: "Entrepreneurial Eco System",
        guest: "Dr. Jayshree Suresh\nFormer Dean - SRM School of Management,\nVisiting Faculty at LIBA & Crescent School of Business\nTarget: MBA IEV Students",
        participants: 21
      },
      {
        sno: 6,
        date: "18.01.2025",
        event: "Think Like A CEO Start Without Fear",
        guest: "JC Sen CS. Muthukumar\nEntrepreneurship Coach, Salem\nTarget: MBA IEV Students",
        participants: 28
      },
      {
        sno: 7,
        date: "27.01.2025",
        event: "My Edupreneurial Journey",
        guest: "Dr. PSS. Srinivasan\nExecutive Chairman, Knowledge Institute of Technology - Salem\nTarget: MBA & MBA IEV Students",
        participants: 121
      }
    ]
  }

  const consolidatedReport = [
    { year: "2024 - 2025", count: 7, participants: 276 }
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
              EDC-SEED & MBA Innovation
            </span>
            <h1 className="font-black tracking-tight leading-none mb-3 text-[#ffc107]" style={{ fontSize: 'clamp(1.8rem, 4.5vw, 2.8rem)' }}>
              Entrepreneurship Development Cell (EDC)
            </h1>

            <p className="font-bold tracking-wide uppercase mb-3 text-white/90" style={{ fontSize: 'clamp(0.85rem, 1.8vw, 1.1rem)', letterSpacing: '0.05em' }}>
              Fostering Entrepreneurial Mindset, Startups & Innovation
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
              Promoting Entrepreneurial Culture, Innovation & New Venture Creation
            </h2>

            <div className="space-y-4 text-[14px] font-normal text-slate-800 leading-[25.2px] text-justify">
              <p>
                The <strong>Entrepreneurship Development Cell (EDC)</strong> is established to promote an entrepreneurial culture among students by encouraging innovation, creativity, and self-employment.
              </p>
              <p>
                It helps students develop the knowledge, skills, and confidence needed to identify business opportunities, start new ventures, and contribute to economic and social development through hands-on activities, expert lectures, MSME workshops, and mentorship.
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
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
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
            Club Activities
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
                  <th className="px-4 py-3.5 text-[11px] font-black tracking-wider border-r border-white/10 text-left">Event Name</th>
                  <th className="px-4 py-3.5 text-[11px] font-black tracking-wider border-r border-white/10 text-left">Guest Details / Target Students</th>
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
          <p className="mt-4 text-slate-600 font-medium text-sm">Glimpses of MSME workshops, startup seminars, and activities of the Entrepreneurship Development Cell (EDC).</p>
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
                Entrepreneurship Development Cell Event
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
