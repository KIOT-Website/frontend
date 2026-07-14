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
  Cpu
} from 'lucide-react'
import "./studentLife.css"

import img1 from '../assets/iee/i1.png'
import img2 from '../assets/iee/i2.png'
import img3 from '../assets/iee/i3.jpg'
import img4 from '../assets/iee/i4.jpg'
import img6 from '../assets/iee/i6.jpg'

export default function SocClubPage() {

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
      title: "Semiconductor Fundamentals",
      desc: "Learn the fundamentals of CMOS VLSI, transistor operation, and semiconductor fabrication.",
      icon: Target,
      color: "from-blue-500/10 to-blue-100/50",
      iconColor: "text-[#224292]"
    },
    {
      title: "EDA Simulation & Design",
      desc: "Design and simulate digital circuits using Verilog or VHDL with industry-standard EDA tools.",
      icon: Cpu,
      color: "from-yellow-400/10 to-yellow-100/50",
      iconColor: "text-[#d4a017]"
    },
    {
      title: "FPGA Board Testing",
      desc: "Implement and test digital designs on FPGA development boards.",
      icon: GraduationCap,
      color: "from-amber-500/10 to-orange-100/50",
      iconColor: "text-amber-600"
    },
    {
      title: "Real-world VLSI Circuits",
      desc: "Develop low-power, high-performance, and reliable VLSI circuits for real-world applications.",
      icon: Award,
      color: "from-purple-500/10 to-purple-100/50",
      iconColor: "text-purple-600"
    }
  ]

  const facultyIncharges = [
    {
      name: "Mr. A. Tamilselvan",
      role: "Assistant Professor / ECE, KIOT",
      label: "Staff Coordinator"
    }
  ]

  const [selectedImage, setSelectedImage] = useState(null)

  const galleryImages = [
    { src: img1, title: "Altera DE1 FPGA hardware design lab session" },
    { src: img2, title: "Quartus Prime simulation workshop" },
    { src: img3, title: "Industry expert session on digital verification" },
    { src: img4, title: "Students presenting SoC mini-projects" },
    { src: img6, title: "FPGA implementation testing workshop" }
  ]

  const activities = [
    { sno: 1, date: "29.03.2026", event: "Industry Expert Session 1", guest: "Amsaveni Chandran (Senior verification engineer, Tessolve Semiconductor Pvt Ltd, Coimbatore)", participants: 29 },
    { sno: 2, date: "07.11.2025", event: "Workshop on “Altera DE1 Implementation using Quartus Prime Lite Edition”", guest: "Mr.K.Padmanaban (Software Enabling & Optimization Engineer, Academic Ambassador for Altera University Program, Intel Corporation, Bangalore)", participants: 50 }
  ]

  const projects = [
    {
      sno: 1,
      students: "Veerasowmiyaa S (III-ECE), Swetha C (III-ECE), Harishkumar (III-ECE), Vaishali N (III-IT), Pavithra S (III-CSE), Divakar Y N (III-CSBS)",
      guide: "Ms. C. Sri Kiruthika",
      title: "Eye-Gesture Controlled Assistive System for People with Disabilities",
      sdg: "3, 10"
    },
    {
      sno: 2,
      students: "Poovizhi S (III-ECE), Nandinipraba Y (III-ECE), Sri Monika M K (III-ECE), Gowtham S (III-Mech), Nithish G S (III-CSE), Umamaheshwari A (III-AI&DS)",
      guide: "Mrs. V. Vadivu",
      title: "IoT-Based Safety and Hazard Monitoring System for Sanitation Workers",
      sdg: "3, 6, 8"
    },
    {
      sno: 3,
      students: "Dharaneesh S M (III-ECE), Inbamani A S (III-ECE), Manigandan V (III-ECE), Hashvitha M (III-EEE), Maha Sruthy K N (III-CSE), Krithika S (III-CSE)",
      guide: "Mr. S. Sabarinathan",
      title: "Smart Child Tracking and Safety System",
      sdg: "3, 16"
    },
    {
      sno: 4,
      students: "Lakshaya V (III-ECE), Devashree S (III-ECE), Boomika M (III-ECE), Siva A (III-Mech), Shailu Shree S (III-CSE), Vinothan V A (III-CSE)",
      guide: "Dr. S. Kumarganesh",
      title: "SoC Powered Real-Time Public Transport Monitoring and Control System",
      sdg: "9, 11"
    },
    {
      sno: 5,
      students: "Syed Shihab Aakhil S (III-ECE), Saravanan C (III-ECE), Srinivasan K (III-ECE), Bharanidharan B (III-AI&DS), Gopika Sri K S (III-CSE)",
      guide: "Mr. S. Manoharan",
      title: "IoT-Based Public Transportation Optimization System",
      sdg: "9, 11, 13"
    }
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
              System on Chip (SoC) Club
            </h1>

            <p className="font-bold tracking-wide uppercase mb-3 text-white/90" style={{ fontSize: 'clamp(0.85rem, 1.8vw, 1.1rem)', letterSpacing: '0.05em' }}>
              Department of Electronics and Communication Engineering
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
              Platform for Semiconductor & Chip Design Technologies
            </h2>

            <div className="space-y-4 text-[14px] font-normal text-slate-800 leading-[25.2px] text-justify">
              <p>
                The System on Chip (SoC) Club is a platform where students learn and explore modern semiconductor and chip design technologies through practical activities. Students develop skills in digital circuit design, FPGA programming, ASIC design, System-on-Chip (SoC), and hardware verification by participating in hands-on learning activities guided by faculty members and industry experts. The club helps students connect classroom learning with real-world engineering applications.
              </p>
              <p>
                Students work together to understand these problems and develop hardware solutions using VLSI design tools and FPGA boards. They also participate in workshops, mini-projects, technical talks, industrial visits, hackathons, and research activities. These activities help students improve their technical knowledge, practical skills, creativity, teamwork, and problem-solving ability, preparing them for careers in the semiconductor and embedded systems industries. The club encourages students to identify real-world problems in areas such as electronics, automotive, healthcare, communication, and IoT.
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
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6"
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
            Faculty In-charge
          </h2>
          <div className="w-20 h-1.5 rounded-full mx-auto mt-6" style={{ backgroundColor: '#ffc107' }} />
        </div>

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
      </div>

      {/* ─── LIST OF ACTIVITIES SECTION ─── */}
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-10 mt-12 mb-8">
        <div className="text-center max-w-2xl mx-auto mb-6">
          <h2 className="font-black tracking-tight" style={{ fontSize: 'clamp(1.4rem, 3vw, 2.1rem)', color: '#224292' }}>
            Activities (2025 - 2026)
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
                  <th className="px-4 py-3.5 text-[11px] font-black tracking-wider border-r border-white/10 text-left">Guest Name & Designation</th>
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

      {/* ─── DETAILS OF PROJECTS SECTION ─── */}
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-10 mt-12 mb-8">
        <div className="text-center max-w-2xl mx-auto mb-6">
          <h2 className="font-black tracking-tight" style={{ fontSize: 'clamp(1.4rem, 3vw, 2.1rem)', color: '#224292' }}>
            Details of Projects (VLSI / SoC Development)
          </h2>
          <div className="w-20 h-1.5 rounded-full mx-auto mt-6" style={{ backgroundColor: '#ffc107' }} />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-xl shadow-slate-200/50"
        >
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-slate-100 text-slate-800 border-b border-slate-200">
                  <th className="px-4 py-3.5 text-[11px] font-bold uppercase tracking-wider border-r border-slate-200/60 w-12 text-center">S.No</th>
                  <th className="px-4 py-3.5 text-[11px] font-bold uppercase tracking-wider border-r border-slate-200/60 w-80 text-left">Name of the Students</th>
                  <th className="px-4 py-3.5 text-[11px] font-bold uppercase tracking-wider border-r border-slate-200/60 w-52 text-left">MAP Guide</th>
                  <th className="px-4 py-3.5 text-[11px] font-bold uppercase tracking-wider border-r border-slate-200/60 w-96 text-left">Project Title</th>
                  <th className="px-4 py-3.5 text-[11px] font-bold uppercase tracking-wider w-32 text-center">SDG Aligned</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {projects.map((row, idx) => (
                  <tr key={idx} className="hover:bg-slate-50 transition-colors">
                    <td className="px-4 py-4 text-[13.5px] font-normal text-center text-slate-800 border-r border-slate-50">{row.sno}</td>
                    <td className="px-4 py-4 text-[13.5px] font-normal text-left text-slate-800 border-r border-slate-50 leading-[22px]">{row.students}</td>
                    <td className="px-4 py-4 text-[13.5px] font-semibold text-left text-[#224292] border-r border-slate-50">{row.guide}</td>
                    <td className="px-4 py-4 text-[13.5px] font-medium text-left text-slate-800 border-r border-slate-50 leading-[22px]">{row.title}</td>
                    <td className="px-4 py-4 text-[13.5px] font-bold text-center text-slate-800 bg-slate-50/50">{row.sdg}</td>
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
          <p className="mt-6 text-slate-600 font-medium">Glimpses of activities, coding workshops, and certifications at SoC Club.</p>
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
                SoC Club Event Gallery
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
