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
  Terminal,
  Cpu,
  Globe,
  Layers,
  X
} from 'lucide-react';
import "./studentLife.css";

import unnamed1 from '../assets/iee/unnamed (1).jpg';
import unnamed2 from '../assets/iee/unnamed (2).jpg';
import unnamed3 from '../assets/iee/unnamed (3).jpg';
import unnamed4 from '../assets/iee/unnamed (4).jpg';

export default function CodewarePage() {
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
      title: "Logical Thinking & Programming Skills",
      desc: "Help students to think logically, build analytical reasoning, and continuously improve their core programming capabilities.",
      icon: Terminal,
      color: "from-blue-500/10 to-blue-100/50",
      iconColor: "text-[#224292]"
    },
    {
      title: "Algorithms & Data Structures",
      desc: "Build strong foundational and advanced skills in algorithms, complexity analysis, and efficient data structure design.",
      icon: Code,
      color: "from-yellow-400/10 to-yellow-100/50",
      iconColor: "text-[#d4a017]"
    },
    {
      title: "Competitive Coding & Hackathons",
      desc: "Encourage active participation in national and global coding competitions across various platforms like TechGig, LeetCode, and HackerRank.",
      icon: Award,
      color: "from-purple-500/10 to-purple-100/50",
      iconColor: "text-purple-600"
    }
  ];

  const additionalObjectives = [
    "Foster teamwork, peer learning, and collaborative knowledge-sharing among students with diverse skill levels and academic backgrounds."
  ];

  const activitiesData = {
    '2025-2026': [
      {
        sno: 1,
        date: "03.02.2026 to 13.02.2026",
        event: "Refresher Program on C Programming",
        level: "Department Level",
        resource: "Mr. K. Ravikumar, ASP/CSE & Codeware Club Members",
        participants: "I year CSE Students (30)"
      },
      {
        sno: 2,
        date: "04.11.2025",
        event: "Workshop on Data Structures and Algorithms",
        level: "Department Level",
        resource: "Dr. B. Ezhilavan, Associate Professor of Practice – CSE, Founder & CEO, VEI Technologies Pvt. Ltd., Chennai",
        participants: "II year CSE Students"
      },
      {
        sno: 3,
        date: "25.09.2025",
        event: "Coding Arena in C Programming",
        level: "Department Level",
        resource: "Codeware Club Office Bearers",
        participants: "II year CSE Students (30)"
      }
    ],
    '2024-2025': [
      {
        sno: 1,
        date: "24.02.2025 to 27.02.2025",
        event: "Workshop on Mastering C Programming",
        level: "Department Level",
        resource: "Mr. K. Ravikumar, ASP/CSE & Mr. K. Praveen, AP/CSE",
        participants: "I year CSE Students (236)"
      },
      {
        sno: 2,
        date: "15.10.2024 to 23.10.2024",
        event: "Coding Arena in C Programming",
        level: "Department Level",
        resource: "Selvaganapathy VM, Saravanan S, Subasri C, Yuvasree M (Placed in TechMahindra & Hexaware Technologies)",
        participants: "II year CSE Students (201)"
      },
      {
        sno: 3,
        date: "09.08.2024",
        event: "Seminar on Foundation on DevOps lifecycle",
        level: "Department Level",
        resource: "Mr. C. Balakrishnan, Senior DevOps Engineer, VVDN Technologies, Pollachi",
        participants: "II year CSE Students (30)"
      }
    ],
    '2023-2024': [
      {
        sno: 1,
        date: "20.05.2024 to 24.05.2024",
        event: "Hands on Session on Coding Mastery in C Programming",
        level: "Department Level",
        resource: "Mrs. R. Sathyapriya, Mrs. V. Sathiyapriya, Mrs. A. Anitha",
        participants: "II year CSE Students (181)"
      },
      {
        sno: 2,
        date: "Every Sunday (From 29.02.2024)",
        event: "Coding Arena: Weekly Programming Day",
        level: "Department Level",
        resource: "Online Techgig Platform",
        participants: "III year CSE Students (202)"
      },
      {
        sno: 3,
        date: "29.02.2024 to 11.03.2024",
        event: "Refresher Session on C Programming",
        level: "Department Level",
        resource: "Mrs. E. Kiruthika, Mrs. K. Saranya, Mrs. S. Deepa, Assistant Professors, KIOT",
        participants: "I year CSE Students (187)"
      },
      {
        sno: 4,
        date: "18.10.2023 to 20.10.2023",
        event: "Refresher Program on C Programming - Phase II",
        level: "Department Level",
        resource: "Codeware Club Members",
        participants: "III year CSE Students (202)"
      },
      {
        sno: 5,
        date: "13.10.2023 to 24.10.2023",
        event: "Coding Contest - Techgig Geekgoddess 2023",
        level: "College Level",
        resource: "Online Contest",
        participants: "All department Girl Students (30)"
      },
      {
        sno: 6,
        date: "21.09.2023 to 23.09.2023",
        event: "Refresher Program on C Programming",
        level: "Department Level",
        resource: "Codeware Club Members",
        participants: "III year CSE Students (202)"
      },
      {
        sno: 7,
        date: "01.08.2023 & 07.08.2023",
        event: "Build Logic to Solve a Problem",
        level: "Department Level",
        resource: "Mr. K. Ravikumar, Associate Professor, KIOT, Salem",
        participants: "III year Codeware Club members (40)"
      },
      {
        sno: 8,
        date: "21.07.2023",
        event: "TechnoQuest in C Programming",
        level: "Department Level",
        resource: "Codeware Club Mentors",
        participants: "I yr CSE and I yr IT students (240)"
      }
    ]
  };

  const galleryImages = [
    { src: unnamed1, title: "Refresher Program & C Programming Workshop" },
    { src: unnamed2, title: "Data Structures & Algorithms Hands-on Session" },
    { src: unnamed3, title: "Coding Arena & Competitive Programming Day" },
    { src: unnamed4, title: "Techgig Geekgoddess Coding Contest & DevOps Seminar" }
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
              <Code size={14} />
              <span>Department of Computer Science and Engineering (CSE)</span>
            </div>

            <h1 className="font-['Graphik-Medium',sans-serif] font-semibold tracking-tight leading-none mb-3 text-amber-400" style={{ fontSize: 'clamp(1.8rem, 4.5vw, 2.8rem)' }}>
              Codeware Development Club
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
              About Codeware Development Club
            </div>

            <h2 className="font-['Graphik-Medium',sans-serif] font-semibold tracking-tight leading-tight text-xl sm:text-2xl" style={{ color: '#224292' }}>
              Enhancing Programming, Logical Thinking & Competitive Problem-Solving Skills
            </h2>

            <div className="space-y-4 text-[14px] font-normal text-slate-800 leading-[25.2px] text-justify">
              <p>
                The Codeware Development Club is a student-driven technical club that enhances programming, logical thinking, and problem-solving skills. It provides a platform for students to learn algorithms, data structures, and modern coding practices through hands-on activities. The club encourages participation in coding competitions, hackathons, and technical events to build confidence and competitive spirit.
              </p>
              <p>
                It promotes peer learning, teamwork, and knowledge sharing among students with diverse skills and interests. Regular workshops, coding challenges, and project-based learning help members gain practical programming experience. The club aims to develop industry-ready programmers equipped with strong technical, analytical, and collaborative skills.
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

      {/* ─── FACULTY INCHARGE & OFFICE BEARERS ─── */}
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-10 mt-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {/* FACULTY INCHARGE */}
          <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-blue-50 text-[#224292] flex items-center justify-center font-medium shrink-0 border border-blue-200">
              <User size={22} />
            </div>
            <div>
              <span className="text-[10px] uppercase font-semibold tracking-wider text-amber-600 bg-amber-50 px-2 py-0.5 rounded border border-amber-200">
                Faculty Incharge
              </span>
              <h3 className="font-['Graphik-Medium',sans-serif] text-base font-semibold text-[#224292] mt-1">
                Mrs. G. Eswari @ Petchiammal
              </h3>
              <p className="text-xs text-slate-600 font-normal">
                Assistant Professor / Department of CSE
              </p>
            </div>
          </div>

          {/* OFFICE BEARERS */}
          <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-amber-50 text-amber-600 flex items-center justify-center font-medium shrink-0 border border-amber-200">
              <Users size={22} />
            </div>
            <div>
              <span className="text-[10px] uppercase font-semibold tracking-wider text-[#224292] bg-blue-50 px-2 py-0.5 rounded border border-blue-200">
                Office Bearers
              </span>
              <h3 className="font-['Graphik-Medium',sans-serif] text-base font-semibold text-[#224292] mt-1">
                S. Balasubramaniyam & S. Kaviya
              </h3>
              <p className="text-xs text-slate-600 font-normal">
                Student Coordinators / Codeware Development Club
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* ─── CLUB ACTIVITIES SECTION WITH YEAR FILTER ─── */}
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-10 mt-14">
        <div className="text-center max-w-2xl mx-auto mb-8">
          <h2 className="font-['Graphik-Medium',sans-serif] font-semibold tracking-tight text-2xl sm:text-3xl" style={{ color: '#224292' }}>
            Club Activities
          </h2>
          <div className="w-20 h-1.5 rounded-full mx-auto mt-3" style={{ backgroundColor: '#ffc107' }} />
        </div>

        {/* YEAR FILTER BUTTONS */}
        <div className="flex justify-center gap-3 mb-8">
          {['2025-2026', '2024-2025', '2023-2024'].map((yr) => (
            <button
              key={yr}
              onClick={() => setSelectedYear(yr)}
              className={`px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold border transition-all ${
                selectedYear === yr
                  ? "bg-[#224292] text-white border-[#224292] shadow-sm font-['Graphik-Medium']"
                  : "bg-white text-slate-600 border-slate-200 hover:border-blue-300"
              }`}
            >
              Academic Year {yr}
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
                  <th className="py-3.5 px-4 border-b border-blue-900 w-32">Level</th>
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
                      <span className="inline-block px-2.5 py-0.5 rounded font-medium text-[11px] bg-blue-50 text-[#224292] border border-blue-200">
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
            Glimpses of C programming refresher sessions, Data Structures workshops, Coding Arena challenges, and TechGig Goddess hackathons by Codeware Development Club.
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
                Codeware Activity Highlight
              </div>
              <h3 className="font-['Graphik-Medium',sans-serif] font-semibold text-lg text-[#224292] leading-snug mb-3">
                Codeware Development Club
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
