import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import {
  Sparkles,
  Users,
  User,
  Award,
  GraduationCap,
  Calendar,
  Search,
  Target,
  BookOpen,
  Cpu,
  Shield,
  Layers,
  Zap,
  Globe,
  Briefcase,
  CheckCircle2,
  Lightbulb,
  TrendingUp,
  UserCheck,
  BrainCircuit
} from 'lucide-react';
import "./studentLife.css";

export default function IeiAidsPage() {
  const [searchQuery, setSearchQuery] = useState('');

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
      title: "Technical Excellence",
      desc: "Enhancing technical knowledge, emerging AI and data science algorithms, and practical engineering skills through workshops and seminars.",
      icon: Target,
      color: "from-blue-500/10 to-blue-100/50",
      iconColor: "text-[#224292]"
    },
    {
      title: "Innovation & Creativity",
      desc: "Encouraging innovative thinking, research development, hackathons, and real-world problem-solving using intelligent automation.",
      icon: Lightbulb,
      color: "from-yellow-400/10 to-yellow-100/50",
      iconColor: "text-[#d4a017]"
    },
    {
      title: "Professional Growth",
      desc: "Developing leadership, technical communication, professional ethics, and collaborative teamwork skills for global readiness.",
      icon: TrendingUp,
      color: "from-purple-500/10 to-purple-100/50",
      iconColor: "text-purple-600"
    }
  ];

  const facultyIncharges = [
    {
      name: "Dr. B. Sasikumar",
      role: "HOD / AI&DS, KIOT",
      label: "Head of Department",
      icon: GraduationCap,
      color: "text-[#224292] bg-blue-50 border-blue-100"
    },
    {
      name: "Ms. M. Selvi",
      role: "Assistant Professor / AI&DS, KIOT",
      label: "Faculty In-Charge",
      icon: UserCheck,
      color: "text-amber-700 bg-amber-50 border-amber-100"
    },
    {
      name: "Hari Krishnan G",
      role: "Student Ambassador / AI&DS",
      label: "Office Bearer",
      icon: Award,
      color: "text-emerald-700 bg-emerald-50 border-emerald-100"
    }
  ];

  const studentMembers = [
    "Ajay Kumar Ad", "Bhavatharini S", "Deepalakshmi S", "Deepika A", "Divyadharshini M",
    "Durga Sri S", "Harinie S", "Harinisri M", "Indhira D", "Induja G",
    "Jeeva K", "Karthika V", "Kaviya M", "Kaviyaa J J", "Koushiga R",
    "Kowshiya Barkath F", "Lishanya S", "Monika M", "Naveegaa N", "Noor He Nihar M",
    "Rethi Sai K", "Sruthika R", "Subhatra RK", "Swathi Priya D", "Swetha V",
    "Tamil Selvi K", "Tejal SR", "Thrishaanth Vikram S", "Varshini M", "Vettivel SR",
    "Vinothini G", "Moulidharan K A", "Mukesh J", "Sakunth M", "Thoushik D",
    "Siranjeevi", "Deepamayuri E", "Dhivya S", "Geerthana K", "Harshini S",
    "Ibrahim T", "Karthika R", "Karan Bhati R", "Hari Krishnan G", "Manjari.A",
    "Jeevitha R.C", "Elakiya.B", "Kanishka.S", "Bragadheswari.N", "Megasree.R.B",
    "Gobinath S"
  ];

  const filteredMembers = studentMembers.filter(name =>
    name.toLowerCase().includes(searchQuery.toLowerCase())
  );

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
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/20 text-[#ffc107] text-xs font-bold uppercase tracking-widest mb-4">
              <BrainCircuit size={14} />
              <span>Department of Artificial Intelligence & Data Science</span>
            </div>

            <h1 className="font-['Graphik-Bold',sans-serif] font-black tracking-tight leading-none mb-3 text-amber-400" style={{ fontSize: 'clamp(1.8rem, 4.5vw, 2.8rem)' }}>
              The Institution of Engineers (India)
            </h1>

            <p className="font-['Graphik-Medium',sans-serif] font-bold tracking-wide uppercase mb-2 text-white/90" style={{ fontSize: 'clamp(0.85rem, 1.8vw, 1.1rem)', letterSpacing: '0.05em' }}>
              IEI Students' Chapter • AI & DS Forum
            </p>
            <p className="font-semibold text-white/70 text-xs sm:text-sm">
              KNOWLEDGE INSTITUTE OF TECHNOLOGY, SALEM – 637 504 (An Autonomous Institution)
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
          className="bg-white rounded-[1.5rem] sm:rounded-[2.5rem] border border-slate-100 p-6 sm:p-10 lg:p-14"
          style={{ boxShadow: '0 50px 100px -20px rgba(10,26,63,0.08)' }}
        >
          <div className="space-y-6">

            <div className="inline-flex items-center gap-1.5 uppercase font-black" style={{ fontSize: '0.75rem', letterSpacing: '0.15em', color: '#224292' }}>
              <Sparkles size={14} style={{ color: '#ffc107' }} />
              About The Forum
            </div>

            <h2 className="font-['Graphik-Bold',sans-serif] font-extrabold tracking-tight leading-tight" style={{ fontSize: 'clamp(1.3rem, 2.5vw, 1.8rem)', color: '#224292' }}>
              The Institution of Engineers (India) – IEI Students' Chapter
            </h2>

            <div className="space-y-4 text-[14.5px] font-normal text-slate-800 leading-[26px] text-justify">
              <p>
                The <strong>Institution of Engineers (India) - IEI</strong> is a premier professional body of engineers established in 1920 and incorporated by Royal Charter in 1935. The IEI Students' Chapter under the <strong>Department of Artificial Intelligence & Data Science</strong> serves as a vibrant platform for technical learning, innovation, skill development, and professional growth through academic and industry-oriented engineering activities.
              </p>
              <p>
                The chapter aims to bridge the gap between academic theory and real-world engineering through specialized coding contests, technical symposiums, research seminars, design challenges, and industrial collaborations.
              </p>
            </div>
          </div>
        </motion.div>
      </div>

      {/* ─── OBJECTIVES SECTION ─── */}
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-10 mt-14">
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
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {objectives.map((obj, idx) => {
            const Icon = obj.icon;
            return (
              <motion.div
                key={idx}
                variants={itemVariants}
                className="bg-white rounded-2xl border border-slate-100 p-8 flex flex-col justify-between hover:shadow-xl hover:border-[#224292]/20 transition-all duration-300 group"
                style={{ boxShadow: '0 20px 40px -15px rgba(0,0,0,0.03)' }}
              >
                <div>
                  <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${obj.color} flex items-center justify-center mb-6 border border-slate-100 shadow-sm group-hover:scale-110 transition-transform duration-300`}>
                    <Icon size={26} className={obj.iconColor} />
                  </div>
                  <h3 className="font-['Graphik-Bold',sans-serif] text-lg font-bold text-slate-900 mb-3 group-hover:text-[#224292] transition-colors">
                    {obj.title}
                  </h3>
                  <p className="font-['Graphik',sans-serif] text-slate-600 text-[13.5px] leading-relaxed">
                    {obj.desc}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>

      {/* ─── FACULTY & BEARERS SECTION ─── */}
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-10 mt-16">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <h2 className="font-['Graphik-Bold',sans-serif] font-black tracking-tight" style={{ fontSize: 'clamp(1.4rem, 3vw, 2.1rem)', color: '#224292' }}>
            Faculty & Office Bearers
          </h2>
          <div className="w-20 h-1.5 rounded-full mx-auto mt-4" style={{ backgroundColor: '#ffc107' }} />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {facultyIncharges.map((item, idx) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="bg-white rounded-2xl border border-slate-100 p-6 flex items-center gap-4 hover:shadow-lg hover:border-[#224292]/30 transition-all duration-300 shadow-sm"
              >
                <div className={`w-13 h-13 rounded-2xl flex items-center justify-center border shrink-0 ${item.color} p-3`}>
                  <Icon size={24} />
                </div>
                <div>
                  <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest block mb-0.5">
                    {item.label}
                  </span>
                  <h3 className="font-['Graphik-Bold',sans-serif] text-base font-bold text-slate-900 leading-tight">
                    {item.name}
                  </h3>
                  <p className="text-xs text-slate-500 font-semibold mt-0.5">
                    {item.role}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* ─── REGISTERED STUDENT MEMBERS SECTION ─── */}
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-10 mt-16">
        <div className="bg-white rounded-[2rem] border border-slate-100 overflow-hidden" style={{ boxShadow: '0 30px 60px -15px rgba(0,0,0,0.05)' }}>
          {/* Header Banner */}
          <div className="bg-[#224292] px-6 sm:px-10 py-6 sm:py-8 flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <div className="flex items-center gap-3 mb-1.5 flex-wrap">
                <h2 className="text-xl sm:text-2xl font-bold font-['Graphik-Bold',sans-serif] text-white tracking-tight">
                  List of Student Members
                </h2>
                <span className="px-3.5 py-1 rounded-full bg-[#ffc107] text-[#224292] font-black text-xs tracking-wider">
                  {studentMembers.length} Members
                </span>
              </div>
              <p className="text-blue-100 text-xs sm:text-sm font-medium">
                Inducted on 10.03.2026 • Official IEI Student Membership Roll
              </p>
            </div>

            {/* Search Box */}
            <div className="relative w-full md:w-80">
              <Search size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
              <input
                type="text"
                placeholder="Search member name..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-11 pr-4 py-2.5 bg-white rounded-xl text-xs font-semibold text-slate-800 placeholder-slate-400 border border-transparent focus:border-[#ffc107] focus:outline-none shadow-md transition-all"
              />
            </div>
          </div>

          {/* Table View */}
          <div className="p-4 sm:p-8">
            {filteredMembers.length === 0 ? (
              <div className="py-16 text-center text-slate-400">
                <Users size={44} className="mx-auto mb-3 opacity-40" />
                <p className="font-semibold text-sm">No student members found matching "{searchQuery}"</p>
              </div>
            ) : (
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="border-b border-slate-200 bg-slate-50/80">
                      <th className="py-3.5 px-4 text-[11px] font-bold text-slate-500 uppercase tracking-wider font-['Graphik-Medium',sans-serif] w-16 text-center">S.No</th>
                      <th className="py-3.5 px-4 text-[11px] font-bold text-slate-500 uppercase tracking-wider font-['Graphik-Medium',sans-serif]">Date</th>
                      <th className="py-3.5 px-4 text-[11px] font-bold text-slate-500 uppercase tracking-wider font-['Graphik-Medium',sans-serif]">Student Name</th>
                      <th className="py-3.5 px-4 text-[11px] font-bold text-slate-500 uppercase tracking-wider font-['Graphik-Medium',sans-serif]">Event / Membership</th>
                      <th className="py-3.5 px-4 text-[11px] font-bold text-slate-500 uppercase tracking-wider font-['Graphik-Medium',sans-serif] text-center">Status</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100 font-['Graphik',sans-serif]">
                    {filteredMembers.map((name, idx) => {
                      const origIndex = studentMembers.indexOf(name) + 1;
                      return (
                        <tr key={name + idx} className="hover:bg-blue-50/40 transition-colors">
                          <td className="py-3 px-4 text-xs font-bold text-slate-400 text-center">{origIndex}</td>
                          <td className="py-3 px-4 text-xs font-semibold text-slate-600">10.03.2026</td>
                          <td className="py-3 px-4 text-[13.5px] font-bold text-slate-900">{name}</td>
                          <td className="py-3 px-4">
                            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-blue-50 text-[#224292] border border-blue-200">
                              IEI MEMBERS
                            </span>
                          </td>
                          <td className="py-3 px-4 text-center">
                            <span className="inline-flex items-center gap-1 text-[11px] font-bold text-emerald-700 bg-emerald-50 px-2.5 py-0.5 rounded-full border border-emerald-200">
                              <CheckCircle2 size={12} />
                              Active Member
                            </span>
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            )}
          </div>
        </div>
      </div>

    </div>
  );
}
