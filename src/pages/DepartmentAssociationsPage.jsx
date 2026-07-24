import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import {
  Sparkles,
  Compass,
  Award,
  Layers,
  ArrowUpRight,
  BookOpen,
  Cpu,
  Zap,
  Code,
  Building2,
  Brain,
  Monitor,
  Briefcase
} from 'lucide-react';
import "./studentLife.css";

export default function DepartmentAssociationsPage() {
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
      title: "Technical Excellence",
      desc: "Conducting technical symposiums, workshops, coding marathons, and hands-on domain training.",
      icon: Cpu,
      iconBg: "bg-blue-50 text-[#224292]",
      borderColor: "border-blue-100"
    },
    {
      title: "Industry Exposure",
      desc: "Inviting industry experts for guest lectures, industrial visits, and real-world project mentorship.",
      icon: Compass,
      iconBg: "bg-amber-50 text-[#d4a017]",
      borderColor: "border-amber-100"
    },
    {
      title: "Student Leadership",
      desc: "Empowering students through office bearer roles, event management, and team collaboration.",
      icon: Award,
      iconBg: "bg-emerald-50 text-emerald-700",
      borderColor: "border-emerald-100"
    }
  ];

  const associations = [
    {
      name: "FLAME",
      fullName: "Forum for Mechanical Engineers",
      dept: "MECH",
      icon: Layers,
      color: "bg-gradient-to-r from-blue-700 to-indigo-800",
      tagColor: "bg-blue-100 text-blue-900 border-blue-200",
      desc: "Promotes innovation, technical skills, design expertise, and teamwork among Mechanical Engineering students.",
      route: "/resources/student-life/flame"
    },
    {
      name: "INTEC",
      fullName: "Association of Electronics & Communication Engineers",
      dept: "ECE",
      icon: Cpu,
      color: "bg-gradient-to-r from-cyan-700 to-blue-800",
      tagColor: "bg-cyan-100 text-cyan-900 border-cyan-200",
      desc: "Enhances electronics knowledge, VLSI design, communication systems, and technical excellence in ECE.",
      route: "/resources/student-life/intec"
    },
    {
      name: "AMBER'Z",
      fullName: "Association of Electrical & Electronics Engineers",
      dept: "EEE",
      icon: Zap,
      color: "bg-gradient-to-r from-amber-600 to-yellow-700",
      tagColor: "bg-amber-100 text-amber-950 border-amber-200",
      desc: "Encourages creativity, renewable energy innovations, and practical learning in Electrical & Electronics Engineering.",
      route: "/resources/student-life/amberz"
    },
    {
      name: "SCINTEL",
      fullName: "Society of Computer Science & Engineering",
      dept: "CSE",
      icon: Code,
      color: "bg-gradient-to-r from-indigo-700 to-purple-800",
      tagColor: "bg-indigo-100 text-indigo-950 border-indigo-200",
      desc: "Develops programming skills, full-stack development, cloud computing, and problem-solving among CSE students.",
      route: "/resources/student-life/scintel"
    },
    {
      name: "PACE",
      fullName: "Promoting Academic & Civil Excellence",
      dept: "CIVIL",
      icon: Building2,
      color: "bg-gradient-to-r from-emerald-700 to-teal-800",
      tagColor: "bg-emerald-100 text-emerald-950 border-emerald-200",
      desc: "Strengthens civil engineering knowledge through structural design, surveying, green building concepts, and teamwork.",
      route: "/resources/student-life/pace"
    },
    {
      name: "VIBES",
      fullName: "Visionary Association of Artificial Intelligence & Data Science",
      dept: "AI&DS",
      icon: Brain,
      color: "bg-gradient-to-r from-violet-700 to-purple-800",
      tagColor: "bg-violet-100 text-violet-950 border-violet-200",
      desc: "Promotes AI, Machine Learning, Data Analytics, and Deep Learning research through practical activities.",
      route: "/resources/student-life/vibes"
    },
    {
      name: "TECHTASTIC",
      fullName: "Information Technology Association",
      dept: "IT",
      icon: Monitor,
      color: "bg-gradient-to-r from-sky-700 to-blue-900",
      tagColor: "bg-sky-100 text-sky-950 border-sky-200",
      desc: "Supports IT students in emerging technologies, web & mobile app development, cloud infrastructure, and cybersecurity.",
      route: null
    },
    {
      name: "ACID",
      fullName: "Association of Computer Science & Business Systems",
      dept: "CSBS",
      icon: BookOpen,
      color: "bg-gradient-to-r from-rose-700 to-pink-800",
      tagColor: "bg-rose-100 text-rose-950 border-rose-200",
      desc: "Builds analytical thinking, enterprise business strategy, and technological innovation in CSBS.",
      route: null
    },
    {
      name: "MBA Association",
      fullName: "Management Studies Student Forum",
      dept: "MBA",
      icon: Briefcase,
      color: "bg-gradient-to-r from-orange-700 to-amber-800",
      tagColor: "bg-orange-100 text-orange-950 border-orange-200",
      desc: "Develops managerial leadership, strategic decision-making, marketing insights, and professional networking opportunities.",
      route: null
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
              Department <span className="text-[#ffc107]">Associations</span>
            </h1>

            <p className="text-xs sm:text-sm text-slate-800 font-medium leading-relaxed max-w-2xl mx-auto">
              Hub of technical innovation, departmental growth, and student leadership across all engineering and management disciplines at Knowledge Institute of Technology.
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

      {/* ASSOCIATIONS CARDS GRID */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="text-center mb-6">
          <h2 className="text-xl sm:text-2xl font-bold text-black mb-1">Our Department Associations</h2>
          <p className="text-slate-800 text-xs sm:text-sm font-medium max-w-xl mx-auto">
            Explore domain-specific technical forums nurturing student leadership and career excellence.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {associations.map((assoc, idx) => {
            const Icon = assoc.icon;
            const isClickable = Boolean(assoc.route);

            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: idx * 0.04 }}
                onClick={() => {
                  if (isClickable) navigate(assoc.route);
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
                    <span className={`px-2.5 py-0.5 rounded border font-['Graphik-Medium',sans-serif] font-medium text-[11px] uppercase tracking-wider ${assoc.tagColor}`}>
                      {assoc.dept}
                    </span>
                    {isClickable && (
                      <span className="w-7 h-7 rounded-full bg-slate-100 group-hover:bg-[#224292] text-slate-700 group-hover:text-white flex items-center justify-center transition-all duration-300">
                        <ArrowUpRight size={15} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" />
                      </span>
                    )}
                  </div>

                  {/* Title & Icon */}
                  <div className="flex items-center gap-3 mb-2.5">
                    <div className={`w-9 h-9 rounded-xl ${assoc.color} flex items-center justify-center text-white font-medium shrink-0 shadow-xs`}>
                      <Icon size={18} />
                    </div>
                    <h3 className="font-['Graphik-Medium',sans-serif] text-base font-semibold text-slate-900 group-hover:text-[#224292] transition-colors leading-snug">
                      {assoc.name}
                    </h3>
                  </div>

                  {/* Concise Description */}
                  <p className="font-['Graphik',sans-serif] text-slate-600 text-xs sm:text-sm font-normal leading-relaxed">
                    {assoc.desc}
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
