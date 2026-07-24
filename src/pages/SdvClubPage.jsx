import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import {
  Sparkles,
  Users,
  User,
  Award,
  GraduationCap,
  Calendar,
  Target,
  BookOpen,
  CheckCircle2,
  Phone,
  Mail,
  Truck,
  Cpu,
  ShieldCheck,
  Zap,
  Globe,
  Layers,
  X
} from 'lucide-react';
import "./studentLife.css";

import unnamed5 from '../assets/iee/unnamed (5).png';
import unnamed6 from '../assets/iee/unnamed (6).png';
import img11 from '../assets/iee/11.jpg';
import img12 from '../assets/iee/12.jpg';

export default function SdvClubPage() {
  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] }
    }
  };

  const objectives = [
    {
      title: "Technical Competencies & Experiential Learning",
      desc: "To develop strong technical competencies in Software Defined Vehicles (SDV), Embedded Systems, ECU Design, AUTOSAR, and Automotive Communication Protocols through experiential learning.",
      icon: Cpu,
      color: "from-blue-500/10 to-blue-100/50",
      iconColor: "text-[#224292]"
    },
    {
      title: "Innovation & Product Development",
      desc: "To promote innovation and product development by encouraging students to undertake industry-relevant projects, hackathons, prototype development, and technical competitions.",
      icon: Target,
      color: "from-yellow-400/10 to-yellow-100/50",
      iconColor: "text-[#d4a017]"
    },
    {
      title: "Industry Readiness & Collaborations",
      desc: "To strengthen industry readiness through expert lectures, industrial visits, internships, certification programs, and collaboration with automotive companies and research organizations.",
      icon: GraduationCap,
      color: "from-purple-500/10 to-purple-100/50",
      iconColor: "text-purple-600"
    }
  ];

  const additionalObjectives = [
    "To foster research, publication, and entrepreneurship in emerging domains such as Connected Vehicles, ADAS, Electric Vehicles (EVs), AI, IoT, Functional Safety, and Automotive Cybersecurity.",
    "To enhance leadership, teamwork, communication, and problem-solving skills by organizing technical events, collaborative activities, mentoring programs, and student-led initiatives that support lifelong learning and professional growth."
  ];

  const activities = [
    {
      sno: 1,
      date: "22.03.2026",
      event: "Industry Mentor Interaction",
      guest: "Mr. Dinesh Kumar, Technical Lead, Pixel Expert Technologies, Chennai",
      participants: 34
    }
  ];

  const projects = [
    {
      sno: 1,
      title: "SMART PARKING FINDER",
      guide: "MR. P. SASI KUMAR, AP/CSE",
      sdg: "9, 11, 13",
      students: [
        "ARAVINTH G (III CSE A)",
        "ARAVINTH KARTHIC K (III CSE A)",
        "DHIYANESH SUNDAR (III CSE A)",
        "TAMIL KUMARAN K (III MECH)",
        "BHAVESHNA S V (III ECE A)"
      ]
    },
    {
      sno: 2,
      title: "ACCIDENT DETECTION AND EMERGENCY ALERT SYSTEM",
      guide: "MR. M. DURAISAMY, AP/ECE",
      sdg: "3, 9, 11",
      students: [
        "ANISH M R (III ECE A)",
        "HARISH KUMAR G (III ECE A)",
        "ASHWIN J S (III ECE A)",
        "PREMKUMAR K (III CIVIL)",
        "SUBHASHREE V P (III CSE)",
        "SUDHARSANA K (III CSE)"
      ]
    },
    {
      sno: 3,
      title: "SMART GREEN DRIVING FEEDBACK AND ASSISTANCE SYSTEM",
      guide: "MR. V. VIMAL RAJ, AP/ECE",
      sdg: "11, 12, 13",
      students: [
        "BHARATH B (III ECE A)",
        "MANI BHARATHI S (III ECE A)",
        "ABISHEK S (III ECE A)",
        "DHIVISHA S (III CSBS)",
        "SANJAY KANTH K B (III AIDS)",
        "DEEPAK P S (III AIDS)"
      ]
    },
    {
      sno: 4,
      title: "REAL-TIME VEHICLE INCIDENT DETECTION AND GEO-LOCATION ALERT SYSTEM FOR MOUNTAIN ROADS",
      guide: "MR. S. SABARINATHAN, AP/ECE",
      sdg: "3, 9, 11",
      students: [
        "JEEVA K S (III ECE A)",
        "ABISHEAK S (III ECE A)",
        "DURGAA M S (III ECE A)",
        "BOOMINATHAN V (III CIVIL)",
        "HRITHICK V (III AIDS)",
        "VAISHALI N (III IT)"
      ]
    },
    {
      sno: 5,
      title: "SDV-ENABLED SMART EMERGENCY COMMUNICATION AND QUEUE MANAGEMENT SYSTEM",
      guide: "MR. R. SHANMUGA SUNDARAM, AP/ECE",
      sdg: "3, 9, 11",
      students: [
        "YENGESWARAN M (III ECE B)",
        "SUDHARSAN R (III ECE B)",
        "NIRAIMATHI A (III CSE)",
        "MADHUPARKAVE A D (III CSE)",
        "NIVETHA S (III CSE)"
      ]
    },
    {
      sno: 6,
      title: "SOFTWARE DEFINED VEHICLE INTEGRATED VITAL SIGN MONITORING SYSTEM",
      guide: "MRS. S. ELARMATHI, AP/ECE",
      sdg: "3, 9, 11",
      students: [
        "KRITHIKA G M (III ECE A)",
        "RENUKA G (III ECE B)",
        "PREDEESHA M (III ECE B)",
        "JANARANJITH S V (III MECH)",
        "ROHITH S (III CSE)",
        "LAKSHANA K (III CSE)"
      ]
    }
  ];

  const galleryImages = [
    { src: unnamed5, title: "Software Defined Vehicles (SDV) Club Technical Workshop & Prototype Demonstration" },
    { src: unnamed6, title: "Hands-on Embedded Systems & ECU Architecture Seminar by Department of ECE" },
    { src: img11, title: "Industry Mentor Interaction Session with Mr. Dinesh Kumar, Technical Lead, Pixel Expert Tech" },
    { src: img12, title: "Student Innovation Project Showcase & SDG Aligned Embedded Systems Exhibition" }
  ];

  return (
    <div className="min-h-screen bg-[#F8FAFC] pb-24 selection:bg-[#ffc107]/20 font-['Graphik',sans-serif]">

      {/* ─── HERO HEADER SECTION ─── */}
      <div
        className="relative pt-16 pb-20 overflow-hidden rounded-b-[3rem] lg:rounded-b-[4rem]"
        style={{ backgroundColor: '#224292' }}
      >
        <div className="absolute inset-0 pointer-events-none" style={{
          backgroundImage: 'linear-gradient(to right, rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.04) 1px, transparent 1px)',
          backgroundSize: '40px 40px'
        }} />

        <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-10 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="max-w-3xl mx-auto"
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-amber-400 text-xs font-semibold uppercase tracking-wider mb-4">
              <Truck size={14} />
              <span>Department of Electronics and Communication Engineering (ECE)</span>
            </div>

            <h1 className="font-['Graphik-Medium',sans-serif] font-semibold tracking-tight leading-none mb-3 text-amber-400" style={{ fontSize: 'clamp(1.8rem, 4.5vw, 2.8rem)' }}>
              Software Defined Vehicles (SDV) Club
            </h1>

            <p className="font-['Graphik-Medium',sans-serif] font-medium tracking-wide uppercase mb-3 text-white/90" style={{ fontSize: 'clamp(0.85rem, 1.8vw, 1.1rem)', letterSpacing: '0.05em' }}>
              KNOWLEDGE INSTITUTE OF TECHNOLOGY, SALEM – 637 504
            </p>
            <p className="font-normal text-white/70 text-xs sm:text-sm">
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
          className="bg-white rounded-[1.5rem] sm:rounded-[2.5rem] border border-slate-100 p-5 sm:p-8 lg:p-14"
          style={{ boxShadow: '0 50px 100px -20px rgba(10,26,63,0.08)' }}
        >
          <div className="space-y-6">
            <div className="inline-flex items-center gap-1.5 uppercase font-semibold text-xs" style={{ letterSpacing: '0.15em', color: '#224292' }}>
              <Sparkles size={14} style={{ color: '#ffc107' }} />
              About the SDV Club
            </div>

            <h2 className="font-['Graphik-Medium',sans-serif] font-semibold tracking-tight leading-tight text-xl sm:text-2xl" style={{ color: '#224292' }}>
              Next-Generation Automotive & Embedded Software Excellence
            </h2>

            <div className="space-y-4 text-[14px] font-normal text-slate-800 leading-[25.2px] text-justify">
              <p>
                The Software Defined Vehicles (SDV) Club is a student-driven technical forum established by the Department of Electronics and Communication Engineering (ECE) to foster excellence in next-generation automotive technologies. The club serves as a platform for students to explore the transformation of conventional vehicles into intelligent, connected, and software-driven systems.
              </p>
              <p>
                It focuses on developing expertise in embedded systems, Electronic Control Unit (ECU) design, AUTOSAR, automotive communication protocols (CAN, LIN, FlexRay, Automotive Ethernet), diagnostics, cybersecurity, functional safety (ISO 26262), Artificial Intelligence (AI), Internet of Things (IoT), Advanced Driver Assistance Systems (ADAS), and Software Defined Vehicle (SDV) architectures. Through hands-on workshops, technical seminars, industrial collaborations, hackathons, innovation challenges, and research-oriented projects, students gain practical exposure to real-world automotive development.
              </p>
              <p>
                The club encourages interdisciplinary learning, innovation, and teamwork while bridging the gap between academic knowledge and industry expectations. It aims to prepare students with the technical competencies, professional skills, and research mindset required to excel in the rapidly evolving mobility and automotive technology ecosystem.
              </p>
            </div>
          </div>
        </motion.div>
      </div>

      {/* ─── OBJECTIVES SECTION ─── */}
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-10 mt-12">
        <div className="text-center max-w-2xl mx-auto mb-8">
          <h2 className="font-['Graphik-Medium',sans-serif] font-semibold tracking-tight text-2xl sm:text-3xl" style={{ color: '#224292' }}>
            Objectives
          </h2>
          <div className="w-20 h-1.5 rounded-full mx-auto mt-3" style={{ backgroundColor: '#ffc107' }} />
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto mb-6"
        >
          {objectives.map((obj, idx) => {
            const Icon = obj.icon;
            return (
              <motion.div
                key={idx}
                variants={itemVariants}
                className="bg-white rounded-2xl flex flex-col group relative overflow-hidden transition-all duration-300 hover:-translate-y-1 p-6"
                style={{ boxShadow: '0 8px 24px rgba(0,0,0,0.06)', border: '1px solid #f1f5f9' }}
              >
                <div className={`w-10 h-10 rounded-xl flex items-center justify-center mb-4 bg-gradient-to-br ${obj.color}`}>
                  <Icon size={18} className={obj.iconColor} />
                </div>
                <h3 className="font-['Graphik-Medium',sans-serif] font-semibold text-base mb-2" style={{ color: '#224292' }}>
                  {obj.title}
                </h3>
                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                  {obj.desc}
                </p>
              </motion.div>
            );
          })}
        </motion.div>

        <div className="max-w-6xl mx-auto space-y-3">
          {additionalObjectives.map((objText, idx) => (
            <div key={idx} className="flex items-start gap-3 p-4 rounded-xl bg-white border border-slate-100 shadow-xs">
              <CheckCircle2 size={18} className="text-amber-500 shrink-0 mt-0.5" />
              <p className="text-slate-700 text-xs sm:text-sm font-medium leading-relaxed">{objText}</p>
            </div>
          ))}
        </div>
      </div>

      {/* ─── STAFF COORDINATOR CARD ─── */}
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-10 mt-12">
        <div className="max-w-xl mx-auto bg-white rounded-2xl border border-slate-200 p-6 shadow-sm flex items-center gap-4">
          <div className="w-12 h-12 rounded-full bg-blue-50 text-[#224292] flex items-center justify-center font-medium shrink-0 border border-blue-200">
            <User size={22} />
          </div>
          <div>
            <span className="text-[10px] uppercase font-semibold tracking-wider text-amber-600 bg-amber-50 px-2 py-0.5 rounded border border-amber-200">
              Staff Coordinator
            </span>
            <h3 className="font-['Graphik-Medium',sans-serif] text-base font-semibold text-[#224292] mt-1">
              Mr. V. Vimalraj
            </h3>
            <p className="text-xs text-slate-600 font-normal">
              Assistant Professor / Department of ECE
            </p>
          </div>
        </div>
      </div>

      {/* ─── ACTIVITIES TABLE (2025–2026) - REGULAR / MEDIUM FONT ─── */}
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-10 mt-14">
        <div className="text-center max-w-2xl mx-auto mb-8">
          <h2 className="font-['Graphik-Medium',sans-serif] font-semibold tracking-tight text-2xl sm:text-3xl" style={{ color: '#224292' }}>
            Club Activities (2025 – 2026)
          </h2>
          <div className="w-20 h-1.5 rounded-full mx-auto mt-3" style={{ backgroundColor: '#ffc107' }} />
        </div>

        <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm max-w-6xl mx-auto">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-[#224292] text-white text-xs font-semibold tracking-wider uppercase">
                  <th className="py-3.5 px-4 border-b border-blue-900 w-14 text-center">S.No</th>
                  <th className="py-3.5 px-4 border-b border-blue-900 w-28">Date</th>
                  <th className="py-3.5 px-4 border-b border-blue-900">Event Name</th>
                  <th className="py-3.5 px-4 border-b border-blue-900">Guest Name & Designation</th>
                  <th className="py-3.5 px-4 border-b border-blue-900 w-32 text-center">Participants</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-xs sm:text-sm font-normal text-slate-700">
                {activities.map((act, idx) => (
                  <tr key={idx} className="hover:bg-slate-50 transition-colors">
                    <td className="py-4 px-4 font-normal text-slate-500 text-center">{act.sno}</td>
                    <td className="py-4 px-4 whitespace-nowrap font-medium text-slate-800">{act.date}</td>
                    <td className="py-4 px-4 font-medium text-[#224292]">{act.event}</td>
                    <td className="py-4 px-4 text-xs leading-relaxed text-slate-600">{act.guest}</td>
                    <td className="py-4 px-4 text-center">
                      <span className="inline-block px-2.5 py-1 rounded-full bg-amber-100 text-amber-900 border border-amber-300 font-medium text-xs">
                        {act.participants}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* ─── DETAILS OF PROJECTS TABLE - REGULAR / MEDIUM FONT ─── */}
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-10 mt-14">
        <div className="text-center max-w-2xl mx-auto mb-8">
          <h2 className="font-['Graphik-Medium',sans-serif] font-semibold tracking-tight text-2xl sm:text-3xl" style={{ color: '#224292' }}>
            Details of Projects
          </h2>
          <p className="text-slate-500 text-xs sm:text-sm mt-1 font-normal">Interdisciplinary student innovation projects aligned with UN Sustainable Development Goals (SDGs)</p>
          <div className="w-20 h-1.5 rounded-full mx-auto mt-3" style={{ backgroundColor: '#ffc107' }} />
        </div>

        <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm max-w-6xl mx-auto">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-[#224292] text-white text-xs font-semibold tracking-wider uppercase">
                  <th className="py-3.5 px-4 border-b border-blue-900 w-14 text-center">S.No</th>
                  <th className="py-3.5 px-4 border-b border-blue-900">Project Title</th>
                  <th className="py-3.5 px-4 border-b border-blue-900">MAP Guide</th>
                  <th className="py-3.5 px-4 border-b border-blue-900">Name of Students</th>
                  <th className="py-3.5 px-4 border-b border-blue-900 w-28 text-center">SDG Aligned</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-xs sm:text-sm font-normal text-slate-700">
                {projects.map((proj, idx) => (
                  <tr key={idx} className="hover:bg-slate-50 transition-colors">
                    <td className="py-4 px-4 font-normal text-slate-500 text-center">{proj.sno}</td>
                    <td className="py-4 px-4 font-medium text-[#224292] max-w-xs">{proj.title}</td>
                    <td className="py-4 px-4 font-medium text-slate-800 whitespace-nowrap">{proj.guide}</td>
                    <td className="py-4 px-4 text-xs text-slate-700 space-y-1">
                      {proj.students.map((st, sIdx) => (
                        <div key={sIdx} className="flex items-center gap-1.5">
                          <span className="w-1.5 h-1.5 rounded-full bg-amber-400 shrink-0" />
                          <span>{st}</span>
                        </div>
                      ))}
                    </td>
                    <td className="py-4 px-4 text-center">
                      <span className="inline-block px-2.5 py-1 rounded-full bg-emerald-100 text-emerald-900 border border-emerald-300 font-medium text-xs">
                        SDG {proj.sdg}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* ─── EVENT GALLERY SECTION (AFTER TABLES) ─── */}
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-10 mt-16 mb-8">
        <div className="text-center max-w-2xl mx-auto mb-8">
          <h2 className="font-['Graphik-Medium',sans-serif] font-semibold text-2xl sm:text-3xl" style={{ color: '#224292' }}>
            Event & Activity Gallery
          </h2>
          <div className="w-20 h-1.5 rounded-full mx-auto mt-3" style={{ backgroundColor: '#ffc107' }} />
          <p className="mt-3 text-slate-600 font-normal text-xs sm:text-sm">
            Glimpses of technical workshops, ECU programming sessions, industry mentor interactions, and project demonstrations by SDV Club.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 max-w-6xl mx-auto">
          {galleryImages.map((img, idx) => (
            <div
              key={idx}
              className="group relative h-60 rounded-2xl overflow-hidden cursor-pointer border border-slate-200 bg-slate-900 shadow-sm hover:shadow-xl transition-all duration-300"
              onClick={() => setSelectedImage(img)}
            >
              <img
                src={img.src}
                alt={img.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#224292]/90 via-[#224292]/30 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 flex flex-col justify-end p-4">
                <p className="text-white font-medium text-xs leading-snug line-clamp-3 font-['Graphik']">{img.title}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* LIGHTBOX POPUP MODAL */}
      {selectedImage && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-xs flex items-center justify-center p-4" onClick={() => setSelectedImage(null)}>
          <div
            className="bg-white rounded-3xl overflow-hidden shadow-2xl flex flex-col md:flex-row max-w-4xl w-full max-h-[90vh] relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="absolute top-4 right-4 z-50 w-9 h-9 rounded-full bg-slate-100 hover:bg-slate-200 flex items-center justify-center text-slate-800 transition-colors shadow-xs"
              onClick={() => setSelectedImage(null)}
            >
              <X size={18} />
            </button>

            <div className="md:w-3/5 bg-slate-950 flex items-center justify-center p-3 relative min-h-[260px]">
              <img
                src={selectedImage.src}
                alt={selectedImage.title}
                className="max-w-full max-h-[70vh] object-contain rounded-lg"
              />
            </div>

            <div className="md:w-2/5 p-6 sm:p-8 flex flex-col justify-center bg-white">
              <div className="inline-flex items-center gap-1.5 uppercase font-semibold text-xs mb-3 text-[#224292]">
                <Calendar size={14} className="text-amber-500" />
                SDV Activity Highlight
              </div>
              <h3 className="font-['Graphik-Medium',sans-serif] font-semibold text-lg text-[#224292] leading-snug mb-3">
                Software Defined Vehicles (SDV) Club
              </h3>
              <p className="text-xs sm:text-sm font-normal text-slate-700 leading-relaxed font-['Graphik']">
                {selectedImage.title}
              </p>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}
