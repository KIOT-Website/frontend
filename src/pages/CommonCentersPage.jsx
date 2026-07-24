import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import {
  Sparkles,
  Compass,
  Award,
  ArrowUpRight,
  BookOpen,
  Globe,
  GraduationCap,
  Trophy,
  Users2,
  Share2,
  Languages,
  UserCheck,
  HeartHandshake
} from 'lucide-react';
import "./studentLife.css";

export default function CommonCentersPage() {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.04
      }
    }
  };

  const itemVariants = {
    hidden: { y: 12, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.4, ease: 'easeOut' }
    }
  };

  const pillars = [
    {
      title: "Career & Exam Guidance",
      desc: "Comprehensive coaching, mock tests, and mentorship for GATE, UPSC, TNPSC, GRE, and TOEFL exams.",
      icon: GraduationCap,
      iconBg: "bg-blue-50 text-[#224292]",
      borderColor: "border-blue-100"
    },
    {
      title: "Global Education & Contests",
      desc: "Guiding students for international studies, university tie-ups, hackathons, and corporate competitions.",
      icon: Globe,
      iconBg: "bg-amber-50 text-[#d4a017]",
      borderColor: "border-amber-100"
    },
    {
      title: "Institutional Growth & Inclusion",
      desc: "Strengthening faculty development, foreign language proficiency, student mentorship, and digital branding.",
      icon: Award,
      iconBg: "bg-emerald-50 text-emerald-700",
      borderColor: "border-emerald-100"
    }
  ];

  const centers = [
    {
      name: "Centre for Foreign Languages (CFL)",
      dept: "CDT",
      tag: "CFL",
      icon: Languages,
      color: "bg-gradient-to-r from-violet-700 to-purple-800",
      tagColor: "bg-violet-100 text-violet-950 border-violet-200",
      desc: "Offers training in Japanese, German, French, and BEC certifications to enhance global communication and employment opportunities.",
      route: null
    },
    {
      name: "Human Resource Development (HRD) Cell",
      dept: "R&D / IQAC",
      tag: "HRD",
      icon: Users2,
      color: "bg-gradient-to-r from-emerald-700 to-teal-800",
      tagColor: "bg-emerald-100 text-emerald-950 border-emerald-200",
      desc: "Strengthens faculty development programs, pedagogical training, skill enhancement, and organizational capability growth.",
      route: null
    },
    {
      name: "Social Media Cell",
      dept: "CSBS",
      tag: "MEDIA",
      icon: Share2,
      color: "bg-gradient-to-r from-rose-700 to-pink-800",
      tagColor: "bg-rose-100 text-rose-950 border-rose-200",
      desc: "Manages institutional digital branding, event publicity, student achievement highlights, and official social media engagement.",
      route: null
    },
    {
      name: "i-Can Club for Slow Learners",
      dept: "MECH",
      tag: "SUPPORT",
      icon: HeartHandshake,
      color: "bg-gradient-to-r from-sky-700 to-blue-900",
      tagColor: "bg-sky-100 text-sky-950 border-sky-200",
      desc: "Dedicated academic support cell providing peer tutoring, remedial guidance, and confidence-building workshops for students.",
      route: null
    },
    {
      name: "Higher Education Cell (India)",
      dept: "CSE",
      tag: "HEC INDIA",
      icon: GraduationCap,
      color: "bg-gradient-to-r from-indigo-700 to-purple-800",
      tagColor: "bg-indigo-100 text-indigo-950 border-indigo-200",
      desc: "Guides students for post-graduate opportunities, M.E./M.Tech, MBA, and PhD admissions in premier Indian institutes.",
      route: "/resources/student-life/higher-education-india"
    },
    {
      name: "Higher Education Cell (Abroad)",
      dept: "MECH",
      tag: "HEC ABROAD",
      icon: Globe,
      color: "bg-gradient-to-r from-cyan-700 to-blue-800",
      tagColor: "bg-cyan-100 text-cyan-900 border-cyan-200",
      desc: "Supports students pursuing international education, foreign admissions, GRE/IELTS/TOEFL coaching, and visa guidance.",
      route: "/resources/student-life/higher-education-abroad"
    },
    {
      name: "Competitive Examinations Guidance Cell",
      dept: "EEE",
      tag: "EXAM CELL",
      icon: BookOpen,
      color: "bg-gradient-to-r from-blue-700 to-indigo-800",
      tagColor: "bg-blue-100 text-blue-900 border-blue-200",
      desc: "Provides guidance, training, and resources for GATE, UPSC, TNPSC, Banking, SSC, and state/national level competitive exams.",
      route: "/resources/student-life/cegc"
    },
    {
      name: "Corporate Contest Cell",
      dept: "PAT / ECE",
      tag: "CONTEST",
      icon: Trophy,
      color: "bg-gradient-to-r from-amber-600 to-yellow-700",
      tagColor: "bg-amber-100 text-amber-950 border-amber-200",
      desc: "Encourages and prepares students to participate in national/international hackathons, coding challenges, and corporate competitions.",
      route: "/resources/student-life/corporate-contest-cell"
    }
  ];

  return (
    <div className="bg-[#f8fafc] text-slate-900 min-h-screen font-['Graphik',sans-serif] pb-12">
      {/* HERO SECTION - LIGHT THEME, COMPACT */}
      <section className="bg-gradient-to-br from-[#f5f7fb] via-[#eef2f8] to-slate-100 pt-8 pb-6 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="text-center max-w-3xl mx-auto"
          >
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-[#224292] text-xs font-bold uppercase tracking-wider mb-2.5">
              <Sparkles size={13} className="text-[#ffc107]" />
              <span>KIOT Student Life</span>
            </div>

            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#224292] tracking-tight mb-2">
              College Level / Common <span className="text-[#ffc107]">Centers & Forums</span>
            </h1>

            <p className="text-xs sm:text-sm text-slate-800 font-medium leading-relaxed max-w-2xl mx-auto">
              Institutional cells, guidance forums, and common centers empowering students through career preparation, competitive exams, higher education, skill development, and global opportunities.
            </p>
          </motion.div>

          {/* PILLARS GRID */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-5"
          >
            {pillars.map((item, idx) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={idx}
                  variants={itemVariants}
                  className="p-4 rounded-2xl bg-white border border-slate-100 shadow-[0_10px_25px_rgba(0,0,0,0.05)] hover:shadow-lg hover:shadow-slate-200/60 transition-all duration-300 flex items-start gap-3.5"
                >
                  <div className={`w-9 h-9 rounded-xl ${item.iconBg} flex items-center justify-center shrink-0`}>
                    <Icon size={18} />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-black mb-0.5">{item.title}</h3>
                    <p className="text-xs text-slate-800 leading-normal">{item.desc}</p>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* CENTERS CARDS GRID */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="text-center mb-6">
          <h2 className="text-xl sm:text-2xl font-bold text-black mb-1">Institutional Centers & Guidance Cells</h2>
          <p className="text-slate-800 text-xs sm:text-sm font-medium max-w-xl mx-auto">
            Explore dedicated college-level cells supporting student excellence, competitive exams, and career pathways.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {centers.map((center, idx) => {
            const Icon = center.icon;
            const isClickable = Boolean(center.route);

            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: idx * 0.04 }}
                onClick={() => {
                  if (isClickable) navigate(center.route);
                }}
                className={`relative rounded-2xl bg-white border border-slate-100 p-6 flex flex-col justify-between shadow-[0_10px_30px_rgba(0,0,0,0.06)] transition-all duration-300 ${
                  isClickable
                    ? 'cursor-pointer hover:shadow-2xl hover:shadow-[#224292]/12 hover:border-[#224292] hover:-translate-y-1 group'
                    : ''
                }`}
              >
                <div>
                  {/* Card Header Tag & Arrow */}
                  <div className="flex items-center justify-between mb-3">
                    <span className={`px-2.5 py-0.5 rounded border font-['Graphik-Medium',sans-serif] font-medium text-[11px] uppercase tracking-wider ${center.tagColor}`}>
                      {center.dept}
                    </span>
                    {isClickable && (
                      <span className="w-7 h-7 rounded-full bg-slate-100 group-hover:bg-[#224292] text-slate-700 group-hover:text-white flex items-center justify-center transition-all duration-300">
                        <ArrowUpRight size={15} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" />
                      </span>
                    )}
                  </div>

                  {/* Title & Icon */}
                  <div className="flex items-center gap-3 mb-2.5">
                    <div className={`w-9 h-9 rounded-xl ${center.color} flex items-center justify-center text-white font-medium shrink-0 shadow-xs`}>
                      <Icon size={18} />
                    </div>
                    <h3 className="font-['Graphik-Medium',sans-serif] text-base font-semibold text-slate-900 group-hover:text-[#224292] transition-colors leading-snug">
                      {center.name}
                    </h3>
                  </div>

                  {/* Concise Description */}
                  <p className="font-['Graphik',sans-serif] text-slate-600 text-xs sm:text-sm font-normal leading-relaxed">
                    {center.desc}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </section>
    </div>
  );
}
