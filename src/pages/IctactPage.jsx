import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import {
  Sparkles,
  Users,
  User,
  Award,
  GraduationCap,
  Calendar,
  X,
  Target,
  BookOpen,
  Cpu,
  Shield,
  Layers,
  Zap,
  Globe,
  Briefcase,
  CheckCircle2
} from 'lucide-react';
import "./studentLife.css";

export default function IctactPage() {
  const [activeTab, setActiveTab] = useState('2025-2026');

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
      title: "Industry Collaboration",
      desc: "To promote collaboration between industry and academic institutions, bridging the gap between education and real-world employment.",
      icon: Target,
      color: "from-blue-500/10 to-blue-100/50",
      iconColor: "text-[#224292]"
    },
    {
      title: "Emerging Technologies",
      desc: "To discuss and train in emerging technologies such as Artificial Intelligence, Cloud Computing, Cyber Security, Data Science, and Digital Transformation.",
      icon: Cpu,
      color: "from-yellow-400/10 to-yellow-100/50",
      iconColor: "text-[#d4a017]"
    },
    {
      title: "Skill & Faculty Development",
      desc: "To enhance student employability, support faculty development, foster entrepreneurship, and provide global networking opportunities.",
      icon: Users,
      color: "from-purple-500/10 to-purple-100/50",
      iconColor: "text-purple-600"
    }
  ];

  const facultyIncharges = [
    {
      name: "Prof. T. Karthikeyan",
      role: "HoD / CSE, KIOT",
      label: "Staff Coordinator"
    },
    {
      name: "Mr. T. Palani Raja",
      role: "Assistant Professor / CSE, KIOT",
      label: "Faculty Incharge"
    },
    {
      name: "Ms. P. Vikneshwary",
      role: "Assistant Professor / CSE, KIOT",
      label: "Faculty Incharge"
    },
    {
      name: "Ms. M. Selvi",
      role: "Assistant Professor / AI&DS, KIOT",
      label: "Faculty Incharge"
    },
    {
      name: "Mrs. P. Raga Keerthana",
      role: "Assistant Professor / CSBS, KIOT",
      label: "Faculty Incharge"
    },
    {
      name: "Mr. S. Dhamodaran",
      role: "Assistant Professor / IT, KIOT",
      label: "Faculty Incharge"
    },
    {
      name: "Dr. P. A. Gowri Sankar",
      role: "Associate Professor / EEE, KIOT",
      label: "Faculty Incharge"
    },
    {
      name: "Dr. G. Rajamanickam",
      role: "Assistant Professor / ECE, KIOT",
      label: "Faculty Incharge"
    },
    {
      name: "Mr. S. Santhosh",
      role: "Assistant Professor / MECH, KIOT",
      label: "Faculty Incharge"
    },
    {
      name: "Mr. R. Elavarasan",
      role: "Assistant Professor / CIVIL, KIOT",
      label: "Faculty Incharge"
    }
  ];

  const activities = [
    {
      sno: 1,
      date: "01.08.2025 to 30.08.2025",
      event: "Learnathon - 2025",
      objectives: "Self Learning Course for students with 11 Modules",
      participants: 516
    },
    {
      sno: 2,
      date: "05.09.2025",
      event: "Youth Talk - 2025",
      objectives: "1. Develop communication skills, 2. Build leadership qualities, 3. Inspire youth.",
      participants: 38
    },
    {
      sno: 3,
      date: "08.01.2026 to 09.01.2026",
      event: "Umagine TN - 2025",
      objectives: "1. Accelerate Tamil Nadu's technology growth, 2. Promote emerging technologies, 3. Strengthening the start-up ecosystem, 4. Academia collaboration, 5. Attractive investments, 6. Showcase innovative products and solutions, 7. Promote skill development and employability, 8. Support sustainable and inclusive development, 9. Position Tamil Nadu as a global technology hub.",
      participants: 20
    },
    {
      sno: 4,
      date: "20.04.2026",
      event: "Celonis - 25",
      objectives: "A Self Learning Course with 3 Modules: 1. Rising Star Business, 2. Rising Star Technical, 3. Rising Star Automation",
      participants: 168
    },
    {
      sno: 5,
      date: "13.10.2025 to 17.10.2025",
      event: "FDP on Cyber Security (CISCO)",
      objectives: "Objectives of 5 Days FDP: 1. Cyber Security Fundamentals, 2. Network Security, 3. Endpoint and Cloud Security, 4. Threat Detection and Incident Response, 5. Hands-on Labs and Certification Preparation",
      participants: 45
    },
    {
      sno: 6,
      date: "16.03.2026 to 20.03.2026",
      event: "FDP on VLSI Design Flow from RTL to GDSII",
      objectives: "Objectives of 5 Days FDP: 1. Introduction to VLSI Design Flow, 2. Front-End Design and Verification, 3. Physical Design Flow, 4. Timing Closure and Sign-Off, 5. Design-for-Testability and Tape-Out",
      participants: 48
    }
  ];

  return (
    <div className="min-h-screen bg-[#F8FAFC] pb-24 selection:bg-[#ffc107]/20 font-['Graphik',sans-serif]">

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
            <h1 className="font-['Graphik-Bold',sans-serif] font-black tracking-tight leading-none mb-3 text-amber-400" style={{ fontSize: 'clamp(2rem, 5vw, 3rem)' }}>
              ICT Academy (ICTACT)
            </h1>

            <p className="font-['Graphik-Medium',sans-serif] font-bold tracking-wide uppercase mb-3 text-white/90" style={{ fontSize: 'clamp(0.85rem, 1.8vw, 1.1rem)', letterSpacing: '0.05em' }}>
              KNOWLEDGE INSTITUTE OF TECHNOLOGY, SALEM – 637 504
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

            <div className="inline-flex items-center gap-1.5 uppercase font-black" style={{ fontSize: '0.75rem', letterSpacing: '0.15em', color: '#224292' }}>
              <Sparkles size={14} style={{ color: '#ffc107' }} />
              About ICT Academy
            </div>

            <h2 className="font-['Graphik-Bold',sans-serif] font-extrabold tracking-tight leading-tight" style={{ fontSize: 'clamp(1.4rem, 2.5vw, 1.85rem)', color: '#224292' }}>
              Bridging Academic Education & Industry Excellence
            </h2>

            <div className="space-y-4 text-[14px] font-normal text-slate-800 leading-[25.2px] text-justify">
              <p>
                ICT Academy is a not-for-profit organization established in 2009 as a Public–Private Partnership (PPP) initiative of the Government of India in collaboration with state governments and industry partners. Its primary goal is to bridge the gap between academic education and industry requirements by developing industry-ready talent through training, research, and industry–academia collaboration.
              </p>
            </div>
          </div>
        </motion.div>
      </div>

      {/* ─── OBJECTIVES / PILLARS SECTION ─── */}
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-10 mt-10">
        <div className="text-center max-w-2xl mx-auto mb-8">
          <h2 className="font-['Graphik-Bold',sans-serif] font-black tracking-tight" style={{ fontSize: 'clamp(1.4rem, 3vw, 2.1rem)', color: '#224292' }}>
            Key Objectives
          </h2>
          <div className="w-20 h-1.5 rounded-full mx-auto mt-4" style={{ backgroundColor: '#ffc107' }} />
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto"
        >
          {objectives.map((obj, idx) => {
            const Icon = obj.icon;
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

                <h3 className="font-['Graphik-Bold',sans-serif] font-bold text-base mb-2 relative z-10" style={{ color: '#224292' }}>
                  {obj.title}
                </h3>

                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed relative z-10">
                  {obj.desc}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>

      {/* ─── FACULTY INCHARGE SECTION ─── */}
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-10 mt-16">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <h2 className="font-['Graphik-Bold',sans-serif] font-black tracking-tight" style={{ fontSize: 'clamp(1.4rem, 3vw, 2.1rem)', color: '#224292' }}>
            Coordinators & Faculty Incharge
          </h2>
          <p className="text-slate-500 text-xs sm:text-sm mt-2 font-medium">
            Faculty leadership driving ICT Academy activities across all engineering departments
          </p>
          <div className="w-20 h-1.5 rounded-full mx-auto mt-4" style={{ backgroundColor: '#ffc107' }} />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {facultyIncharges.map((fac, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.05 }}
              className="bg-white rounded-2xl p-6 border border-slate-100 flex items-start gap-4 transition-all duration-300 hover:shadow-lg hover:border-blue-200"
              style={{ boxShadow: '0 4px 14px rgba(0,0,0,0.05)' }}
            >
              <div className="w-12 h-12 rounded-xl bg-blue-50 text-[#224292] flex items-center justify-center font-bold text-lg shrink-0 border border-blue-100">
                <User size={22} />
              </div>
              <div>
                <span className="inline-block px-2.5 py-0.5 rounded-full bg-amber-100 text-amber-900 border border-amber-300 font-bold text-[10px] uppercase mb-1">
                  {fac.label}
                </span>
                <h4 className="font-['Graphik-Bold',sans-serif] font-bold text-sm text-[#224292]">{fac.name}</h4>
                <p className="text-slate-500 text-xs font-medium mt-0.5">{fac.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* ─── DETAILS OF ACTIVITY (2025 - 2026) ─── */}
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-10 mt-16">
        <div className="text-center max-w-2xl mx-auto mb-8">
          <h2 className="font-['Graphik-Bold',sans-serif] font-black tracking-tight" style={{ fontSize: 'clamp(1.4rem, 3vw, 2.1rem)', color: '#224292' }}>
            Details of Activity (2025 - 2026)
          </h2>
          <p className="text-slate-500 text-xs sm:text-sm mt-2 font-medium">
            Learnathons, Youth Talks, FDPs, and Technology Events
          </p>
          <div className="w-20 h-1.5 rounded-full mx-auto mt-4" style={{ backgroundColor: '#ffc107' }} />
        </div>

        <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-lg">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-[#224292] text-white text-xs sm:text-sm font-bold uppercase tracking-wider">
                  <th className="py-4 px-6 border-b border-blue-900 w-16 text-center">S.No</th>
                  <th className="py-4 px-6 border-b border-blue-900 w-48">Date</th>
                  <th className="py-4 px-6 border-b border-blue-900 w-60">Event Name</th>
                  <th className="py-4 px-6 border-b border-blue-900">Objectives</th>
                  <th className="py-4 px-6 border-b border-blue-900 w-36 text-center">Total Participants</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-sm font-medium text-slate-700">
                {activities.map((act, idx) => (
                  <tr key={idx} className="hover:bg-slate-50 transition-colors">
                    <td className="py-4 px-6 font-bold text-slate-500 text-center">{act.sno}</td>
                    <td className="py-4 px-6 font-semibold text-slate-800 whitespace-nowrap">{act.date}</td>
                    <td className="py-4 px-6 font-bold text-[#224292]">{act.event}</td>
                    <td className="py-4 px-6 text-xs sm:text-sm leading-relaxed text-slate-600">{act.objectives}</td>
                    <td className="py-4 px-6 text-center">
                      <span className="inline-block px-3 py-1 rounded-full bg-amber-100 text-amber-900 border border-amber-300 font-bold text-xs">
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

    </div>
  );
}
