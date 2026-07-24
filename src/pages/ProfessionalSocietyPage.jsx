import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import {
  Sparkles,
  Compass,
  Award,
  ArrowUpRight,
  Globe,
  Briefcase,
  Layers,
  Cpu,
  Zap,
  Building,
  ShieldCheck,
  CheckCircle2,
  FileCheck,
  Activity,
  Flame,
  Users
} from 'lucide-react';
import "./studentLife.css";

export default function ProfessionalSocietyPage() {
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
      title: "Global Professional Bodies",
      desc: "Student chapters affiliated with IEEE, SAE, ISTE, IEI, and ISHRAE for international exposure and tech networking.",
      icon: Globe,
      iconBg: "bg-blue-50 text-[#224292]",
      borderColor: "border-blue-100"
    },
    {
      title: "Industry & Trade Councils",
      desc: "Partnerships with CII, Salem Productivity Council, ICCI, and MMA for executive lectures and industrial linkage.",
      icon: Briefcase,
      iconBg: "bg-amber-50 text-[#d4a017]",
      borderColor: "border-amber-100"
    },
    {
      title: "Standards & Safety Forums",
      desc: "Conducting professional skill development, BIS Standards awareness, ICT Academy courses, QCFI, and NSC initiatives.",
      icon: ShieldCheck,
      iconBg: "bg-emerald-50 text-emerald-700",
      borderColor: "border-emerald-100"
    }
  ];

  const societies = [
    {
      name: "Confederation of Indian Industry (CII) - Salem",
      dept: "MECH",
      tag: "CII",
      icon: Building,
      color: "bg-gradient-to-r from-blue-700 to-indigo-800",
      tagColor: "bg-blue-100 text-blue-900 border-blue-200",
      desc: "Promotes industry-academia collaboration, executive leadership talks, industrial exposure, and professional growth.",
      route: null
    },
    {
      name: "Salem Productivity Council (SPC) - Salem",
      dept: "MECH",
      tag: "SPC",
      icon: Compass,
      color: "bg-gradient-to-r from-violet-700 to-purple-800",
      tagColor: "bg-violet-100 text-violet-950 border-violet-200",
      desc: "Enhances productivity awareness, industrial efficiency, quality management systems, and practical industrial learning.",
      route: null
    },
    {
      name: "The Indian Chamber of Commerce & Industry (ICCI) - Salem",
      dept: "MECH",
      tag: "ICCI",
      icon: Briefcase,
      color: "bg-gradient-to-r from-sky-700 to-blue-900",
      tagColor: "bg-sky-100 text-sky-950 border-sky-200",
      desc: "Encourages business knowledge, entrepreneurship, trade insights, and industrial networking for engineering and management students.",
      route: null
    },
    {
      name: "Society of Automotive Engineers INDIA (SAE)",
      dept: "MECH",
      tag: "SAE",
      icon: Layers,
      color: "bg-gradient-to-r from-emerald-700 to-teal-800",
      tagColor: "bg-emerald-100 text-emerald-950 border-emerald-200",
      desc: "Supports automotive innovation, vehicle design competitions, Baja/Formula student events, and mobility engineering projects.",
      route: "/resources/student-life/sae"
    },
    {
      name: "Indian Society for Technical Education (ISTE) – Faculty Chapter",
      dept: "MECH / HRD",
      tag: "ISTE FACULTY",
      icon: Award,
      color: "bg-gradient-to-r from-rose-700 to-pink-800",
      tagColor: "bg-rose-100 text-rose-950 border-rose-200",
      desc: "Strengthens teaching excellence, faculty development programs, pedagogical workshops, and academic research.",
      route: null
    },
    {
      name: "Standards Club",
      dept: "MECH",
      tag: "BIS",
      icon: FileCheck,
      color: "bg-gradient-to-r from-teal-700 to-emerald-800",
      tagColor: "bg-teal-100 text-teal-950 border-teal-200",
      desc: "Promotes awareness of Bureau of Indian Standards (BIS), quality benchmarks, testing standards, and safety compliance.",
      route: null
    },
    {
      name: "The Indian Society of Heating, Refrigerating and Air Conditioning Engineers (ISHRAE)",
      dept: "MECH",
      tag: "ISHRAE",
      icon: Flame,
      color: "bg-gradient-to-r from-blue-600 to-cyan-700",
      tagColor: "bg-cyan-100 text-cyan-950 border-cyan-200",
      desc: "Develops HVAC knowledge, refrigeration engineering concepts, and sustainable indoor environmental practices.",
      route: null
    },
    {
      name: "Quality Circle Forum of India (QCFI)",
      dept: "MECH",
      tag: "QCFI",
      icon: CheckCircle2,
      color: "bg-gradient-to-r from-amber-600 to-yellow-700",
      tagColor: "bg-amber-100 text-amber-950 border-amber-200",
      desc: "Improves total quality management, quality circle concepts, kaizen methodologies, and industrial problem-solving skills.",
      route: null
    },
    {
      name: "National Safety Council (NSC)",
      dept: "MECH",
      tag: "NSC",
      icon: ShieldCheck,
      color: "bg-gradient-to-r from-indigo-700 to-blue-800",
      tagColor: "bg-indigo-100 text-indigo-950 border-indigo-200",
      desc: "Promotes occupational safety, industrial hazard awareness, environmental protection, and safety management practices.",
      route: null
    },
    {
      name: "The Institution of Engineers (India)",
      dept: "CIVIL",
      tag: "IEI",
      icon: CheckCircle2,
      color: "bg-gradient-to-r from-purple-700 to-indigo-800",
      tagColor: "bg-purple-100 text-purple-950 border-purple-200",
      desc: "Enhances professional engineering competency, technical lectures, paper presentations, and multidisciplinary engineering activities.",
      route: null
    },
    {
      name: "Indian Society for Technical Education (ISTE) – Student Chapter",
      dept: "CSE",
      tag: "ISTE STUDENT",
      icon: Users,
      color: "bg-gradient-to-r from-cyan-700 to-blue-800",
      tagColor: "bg-cyan-100 text-cyan-950 border-cyan-200",
      desc: "Fosters student technical paper presentations, national symposiums, coding contests, and technical skill enhancement.",
      route: null
    },
    {
      name: "IEEE Student Branch",
      dept: "ECE",
      tag: "IEEE",
      icon: Zap,
      color: "bg-gradient-to-r from-indigo-700 to-purple-800",
      tagColor: "bg-indigo-100 text-indigo-950 border-indigo-200",
      desc: "Promotes advanced technology learning, research papers, technical symposiums, and global networking across electrical & electronics domains.",
      route: "/resources/student-life/ieee"
    },
    {
      name: "IEEE - PES Student Branch",
      dept: "EEE",
      tag: "IEEE-PES",
      icon: Zap,
      color: "bg-gradient-to-r from-amber-600 to-yellow-700",
      tagColor: "bg-amber-100 text-amber-950 border-amber-200",
      desc: "Focuses on electric power engineering, renewable energy systems, smart grid technologies, and sustainable power advancements.",
      route: "/resources/student-life/ieee-pes"
    },
    {
      name: "ICT Academy (ICTACT)",
      dept: "CSE",
      tag: "ICTACT",
      icon: Cpu,
      color: "bg-gradient-to-r from-blue-700 to-cyan-800",
      tagColor: "bg-blue-100 text-blue-900 border-blue-200",
      desc: "Provides industry-focused skill development, cloud certifications, digital literacy, and technology training for students and faculty.",
      route: "/resources/student-life/ictact"
    },
    {
      name: "Madras Management Association (MMA) – Salem",
      dept: "MBA",
      tag: "MMA",
      icon: Briefcase,
      color: "bg-gradient-to-r from-orange-700 to-amber-800",
      tagColor: "bg-orange-100 text-orange-950 border-orange-200",
      desc: "Promotes management education, leadership summits, executive interactions, and business administration skills.",
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
              Professional Society <span className="text-[#ffc107]">Linked Clubs</span>
            </h1>

            <p className="text-xs sm:text-sm text-slate-800 font-medium leading-relaxed max-w-2xl mx-auto">
              Connecting students with global engineering bodies, industrial councils, and professional societies to enhance technical expertise, professional certifications, and industry networking.
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

      {/* SOCIETIES CARDS GRID */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="text-center mb-6">
          <h2 className="text-xl sm:text-2xl font-bold text-black mb-1">Our Professional Societies</h2>
          <p className="text-slate-800 text-xs sm:text-sm font-medium max-w-xl mx-auto">
            Connect with global technology bodies, student chapters, and industry forums.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {societies.map((soc, idx) => {
            const Icon = soc.icon;
            const isClickable = Boolean(soc.route);

            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: idx * 0.04 }}
                onClick={() => {
                  if (isClickable) navigate(soc.route);
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
                    <span className={`px-2.5 py-0.5 rounded border font-['Graphik-Medium',sans-serif] font-medium text-[11px] uppercase tracking-wider ${soc.tagColor}`}>
                      {soc.dept}
                    </span>
                    {isClickable && (
                      <span className="w-7 h-7 rounded-full bg-slate-100 group-hover:bg-[#224292] text-slate-700 group-hover:text-white flex items-center justify-center transition-all duration-300">
                        <ArrowUpRight size={15} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" />
                      </span>
                    )}
                  </div>

                  {/* Title & Icon */}
                  <div className="flex items-center gap-3 mb-2.5">
                    <div className={`w-9 h-9 rounded-xl ${soc.color} flex items-center justify-center text-white font-medium shrink-0 shadow-xs`}>
                      <Icon size={18} />
                    </div>
                    <h3 className="font-['Graphik-Medium',sans-serif] text-base font-semibold text-slate-900 group-hover:text-[#224292] transition-colors leading-snug">
                      {soc.name}
                    </h3>
                  </div>

                  {/* Concise Description */}
                  <p className="font-['Graphik',sans-serif] text-slate-600 text-xs sm:text-sm font-normal leading-relaxed">
                    {soc.desc}
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
