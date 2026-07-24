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
  Code,
  Network,
  Cpu,
  Globe,
  Layers,
  X,
  Radio,
  ShieldCheck
} from 'lucide-react';
import "./studentLife.css";

import unnamed1 from '../assets/iee/unnamed (1).jpg';
import unnamed2 from '../assets/iee/unnamed (2).jpg';
import unnamed3 from '../assets/iee/unnamed (3).jpg';
import unnamed4 from '../assets/iee/unnamed (4).jpg';

export default function CiscoAcademyPage() {
  const [selectedYear, setSelectedYear] = useState('2025-2026');
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
      title: "Globally-Recognized Certifications",
      desc: "Cisco is uniquely positioned to offer globally-recognized networking courses, CCNA certifications, and hands-on skill development through the program.",
      icon: Award,
      color: "from-blue-500/10 to-blue-100/50",
      iconColor: "text-[#224292]"
    },
    {
      title: "System Connectivity & Networks",
      desc: "Revolves around establishing and maintaining effective communication and seamless connectivity between devices, systems, and enterprise users.",
      icon: Network,
      color: "from-amber-400/10 to-amber-100/50",
      iconColor: "text-[#d4a017]"
    },
    {
      title: "Networking Career Foundation",
      desc: "Equips students with comprehensive knowledge of modern networking tools, routing/switching protocols, SD-WAN, and cybersecurity to start successful careers.",
      icon: GraduationCap,
      color: "from-purple-500/10 to-purple-100/50",
      iconColor: "text-purple-600"
    }
  ];

  const activitiesData = {
    '2025-2026': [
      {
        sno: 1,
        date: "05.11.2025",
        event: 'Workshop on "BE23CS402 - Computer Networks"',
        level: "Institute Level",
        resource: "Mr. V. Hari Prasanna, Associate Professor of Practice – CSE, Proprietor, P2G Tech, Chennai",
        participants: "II B.E. CSE Students"
      },
      {
        sno: 2,
        date: "31.07.2025",
        event: 'Guest Lecture on "Job Opportunities in Networking"',
        level: "Institute Level",
        resource: "Mr. V. Hari Prasanna, Associate Professor of Practice – CSE, Proprietor, P2G Tech, Chennai",
        participants: "60 Students"
      }
    ],
    '2024-2025': [
      {
        sno: 1,
        date: "22.04.2025",
        event: 'Hands-on session on "How to Assemble and Disassemble a CPU"',
        level: "Institute Level",
        resource: "Mr. Sabarish, Non-Technical Staff, KIOT",
        participants: "II B.E. CSE Students (200)"
      },
      {
        sno: 2,
        date: "15.02.2025 to 13.03.2025",
        event: "Online Certification Courses",
        level: "International Level",
        resource: "CISCO Networking Academy",
        participants: "I, II, III B.E. / B.Tech. Students"
      },
      {
        sno: 3,
        date: "15.10.2024",
        event: "Guest Lecture on Cyber Crimes and Cyber Security",
        level: "Institute Level",
        resource: "R. Srinath, Founder & CEO, Inerdix, Salem",
        participants: "III B.E. / B.Tech. CSE+ Students"
      }
    ],
    '2023-2024': [
      {
        sno: 1,
        date: "24.01.2024",
        event: 'Session on "Discover CISCO"',
        level: "International Level",
        resource: "1. Priyanka Bhagat (Head- University Recruiting APJC), 2. Mukul Golash (Software Engineer), 3. Smruti Mohanty (Consulting Engineer)",
        participants: "All B.E. / B.Tech. Students"
      },
      {
        sno: 2,
        date: "19.01.2024",
        event: 'Seminar on "SD-WAN"',
        level: "Institute Level",
        resource: "Mr. Dhodduraju, Alumni 2013 Batch, Technical Consultant, Wipro Ltd., Bangalore",
        participants: "60 Students"
      },
      {
        sno: 3,
        date: "30.08.2023 to 02.09.2023",
        event: 'Guest Lecture on "Introduction to Networking"',
        level: "Institute Level",
        resource: "Mr. R. Dinesh, KIOT – System Admin",
        participants: "III CSE & IT Students"
      },
      {
        sno: 4,
        date: "18.07.2023",
        event: 'Webinar on "Enabling Skillsets of the Future"',
        level: "International Level",
        resource: "CISCO Networking Academy",
        participants: "99 Students"
      },
      {
        sno: 5,
        date: "02.06.2023 to 06.07.2023",
        event: "Certificate Course cum Virtual Internship Program (VIP) 2023 for Batch 2025",
        level: "International Level",
        resource: "CISCO Networking Academy",
        participants: "99 Students"
      }
    ],
    '2022-2023': [
      {
        sno: 1,
        date: "22.09.2022",
        event: "Summer Internship @ CISCO for Batch 2024",
        level: "International Level",
        resource: "CISCO Networking Academy",
        participants: "78 Students"
      }
    ],
    '2021-2022': [
      {
        sno: 1,
        date: "18.02.2022",
        event: 'Career Guidance Webinar – "Let’s talk Career"',
        level: "International Level",
        resource: "CISCO Networking Academy",
        participants: "40 Students"
      },
      {
        sno: 2,
        date: "29.12.2021",
        event: "Awareness on open – source software in Linux",
        level: "Institute Level",
        resource: "Mr. S. Baskar, Chief Executive Officer, LinuXpert Systems, Chennai",
        participants: "102 Students"
      }
    ]
  };

  const galleryImages = [
    { src: unnamed1, title: "Discover CISCO Session & Global Recruitment Overview" },
    { src: unnamed2, title: "SD-WAN Seminar & Industry Alumni Tech Talk" },
    { src: unnamed3, title: "Computer Networks & Hardware CPU Assembly Workshop" },
    { src: unnamed4, title: "CISCO Virtual Internship Program (VIP) & Cyber Security Seminar" }
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
              <Network size={14} />
              <span>Department of Computer Science and Engineering (CSE)</span>
            </div>

            <h1 className="font-['Graphik-Medium',sans-serif] font-semibold tracking-tight leading-none mb-3 text-amber-400" style={{ fontSize: 'clamp(1.8rem, 4.5vw, 2.8rem)' }}>
              KIOT CISCO Network Academy
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
              About KIOT CISCO Network Academy
            </div>

            <h2 className="font-['Graphik-Medium',sans-serif] font-semibold tracking-tight leading-tight text-xl sm:text-2xl" style={{ color: '#224292' }}>
              Global Computer Networking, CCNA Certifications & Virtual Internships
            </h2>

            <div className="space-y-4 text-[14px] font-normal text-slate-800 leading-[25.2px] text-justify">
              <p>
                KIOT CISCO Network Academy is a premier college-wide technical centre of excellence established under the Department of Computer Science and Engineering to empower students with world-class computer networking, routing, switching, SD-WAN, and cybersecurity capabilities.
              </p>
              <p>
                As an official Cisco Networking Academy partner, the academy provides globally-recognized courses, hands-on virtual internships, international certification paths, and expert-led technical webinars. Students gain essential hardware assembly knowledge, CCNA certification alignment, and real-world networking problem-solving skills required for high-demand IT careers.
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
          className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto"
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
      </div>

      {/* ─── FACULTY COORDINATOR & DETAILS CARD ─── */}
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-10 mt-12">
        <div className="max-w-xl mx-auto bg-white rounded-2xl border border-slate-200 p-6 shadow-sm flex items-center gap-4">
          <div className="w-12 h-12 rounded-full bg-blue-50 text-[#224292] flex items-center justify-center font-medium shrink-0 border border-blue-200">
            <User size={22} />
          </div>
          <div>
            <span className="text-[10px] uppercase font-semibold tracking-wider text-amber-600 bg-amber-50 px-2 py-0.5 rounded border border-amber-200">
              Faculty Coordinator
            </span>
            <h3 className="font-['Graphik-Medium',sans-serif] text-base font-semibold text-[#224292] mt-1">
              Mrs. T. Sowndarya
            </h3>
            <p className="text-xs text-slate-600 font-normal">
              Assistant Professor / Department of CSE
            </p>
          </div>
        </div>
      </div>

      {/* ─── CLUB ACTIVITIES SECTION WITH YEAR FILTER ─── */}
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-10 mt-14">
        <div className="text-center max-w-2xl mx-auto mb-8">
          <h2 className="font-['Graphik-Medium',sans-serif] font-semibold tracking-tight text-2xl sm:text-3xl" style={{ color: '#224292' }}>
            Academy Activities & Certifications
          </h2>
          <div className="w-20 h-1.5 rounded-full mx-auto mt-3" style={{ backgroundColor: '#ffc107' }} />
        </div>

        {/* YEAR FILTER BUTTONS */}
        <div className="flex flex-wrap justify-center gap-2.5 mb-8">
          {['2025-2026', '2024-2025', '2023-2024', '2022-2023', '2021-2022'].map((yr) => (
            <button
              key={yr}
              onClick={() => setSelectedYear(yr)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold border transition-all ${
                selectedYear === yr
                  ? "bg-[#224292] text-white border-[#224292] shadow-sm font-['Graphik-Medium']"
                  : "bg-white text-slate-600 border-slate-200 hover:border-blue-300"
              }`}
            >
              AY {yr}
            </button>
          ))}
        </div>

        {/* ACTIVITIES TABLE */}
        <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm max-w-6xl mx-auto">
          <div className="p-4 bg-slate-50 border-b border-slate-200 flex items-center justify-between">
            <h3 className="font-['Graphik-Medium',sans-serif] font-semibold text-sm sm:text-base text-[#224292]">
              Academic Year {selectedYear} Events ({activitiesData[selectedYear].length} Activities)
            </h3>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-[#224292] text-white text-xs font-semibold tracking-wider uppercase">
                  <th className="py-3.5 px-4 border-b border-blue-900 w-14 text-center">S.No</th>
                  <th className="py-3.5 px-4 border-b border-blue-900 w-36">Date</th>
                  <th className="py-3.5 px-4 border-b border-blue-900">Name of the Event</th>
                  <th className="py-3.5 px-4 border-b border-blue-900 w-36">Level</th>
                  <th className="py-3.5 px-4 border-b border-blue-900">Resource Person</th>
                  <th className="py-3.5 px-4 border-b border-blue-900 w-44">Participants</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-xs sm:text-sm font-normal text-slate-700">
                {activitiesData[selectedYear].map((act, idx) => (
                  <tr key={idx} className="hover:bg-slate-50 transition-colors">
                    <td className="py-4 px-4 font-normal text-slate-500 text-center">{act.sno}</td>
                    <td className="py-4 px-4 whitespace-nowrap font-medium text-slate-800">{act.date}</td>
                    <td className="py-4 px-4 font-medium text-[#224292]">{act.event}</td>
                    <td className="py-4 px-4">
                      <span className={`inline-block px-2.5 py-0.5 rounded font-medium text-[11px] ${
                        act.level === 'International Level'
                          ? 'bg-amber-100 text-amber-900 border border-amber-300 font-semibold'
                          : 'bg-blue-50 text-[#224292] border border-blue-200'
                      }`}>
                        {act.level}
                      </span>
                    </td>
                    <td className="py-4 px-4 text-xs leading-relaxed text-slate-600">{act.resource}</td>
                    <td className="py-4 px-4 text-xs font-medium text-slate-700">{act.participants}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* ─── EVENT GALLERY SECTION ─── */}
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-10 mt-16 mb-8">
        <div className="text-center max-w-2xl mx-auto mb-8">
          <h2 className="font-['Graphik-Medium',sans-serif] font-semibold text-2xl sm:text-3xl" style={{ color: '#224292' }}>
            Event & Activity Gallery
          </h2>
          <div className="w-20 h-1.5 rounded-full mx-auto mt-3" style={{ backgroundColor: '#ffc107' }} />
          <p className="mt-3 text-slate-600 font-normal text-xs sm:text-sm">
            Glimpses of Cisco recruitment sessions, SD-WAN seminars, Computer Networks workshops, and Virtual Internship Programs.
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
                CISCO Academy Activity Highlight
              </div>
              <h3 className="font-['Graphik-Medium',sans-serif] font-semibold text-lg text-[#224292] leading-snug mb-3">
                KIOT CISCO Network Academy
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
