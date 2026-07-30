import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import {
  Sparkles,
  Award,
  ArrowUpRight,
  Heart,
  Palette,
  Users,
  Compass,
  Smile,
  Shield,
  Lightbulb,
  BookOpen,
  Zap,
  Globe
} from 'lucide-react';
import "./studentLife.css";

export default function ExtraCurricularPage() {
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
      title: "Social Service & Responsibility",
      desc: "NSS, YRC, RRC, and UBA initiatives driving community development, blood donation, and rural upliftment.",
      icon: Heart,
      iconBg: "bg-rose-50 text-rose-700",
      borderColor: "border-rose-100"
    },
    {
      title: "Cultural & Literary Arts",
      desc: "Promoting fine arts, Tamil literature, public speaking, yoga, and holistic student wellness.",
      icon: Palette,
      iconBg: "bg-amber-50 text-[#d4a017]",
      borderColor: "border-amber-100"
    },
    {
      title: "Leadership & Innovation",
      desc: "EDC-SEED, Women Empowerment Cell, Rotaract, and Hackathon club nurturing leaders and change-makers.",
      icon: Award,
      iconBg: "bg-blue-50 text-[#224292]",
      borderColor: "border-blue-100"
    }
  ];

  const clubs = [
    {
      name: "KIOT Fine Arts Club",
      dept: "CIVIL",
      tag: "FINE ARTS",
      icon: Palette,
      color: "bg-gradient-to-r from-rose-700 to-pink-800",
      tagColor: "bg-rose-100 text-rose-950 border-rose-200",
      desc: "Promotes artistic talents, music, dance, theatrical performances, and cultural celebrations across the campus.",
      route: null
    },
    {
      name: "National Service Scheme (NSS)",
      dept: "CIVIL",
      tag: "NSS",
      icon: Users,
      color: "bg-gradient-to-r from-blue-700 to-indigo-800",
      tagColor: "bg-blue-100 text-blue-900 border-blue-200",
      desc: "Engages students in social service, rural development camps, environmental awareness drives, and community welfare.",
      route: null
    },
    {
      name: "Youth Red Cross (YRC) & Red Ribbon Club (RRC)",
      dept: "MECH / CSE",
      tag: "YRC & RRC",
      icon: Heart,
      color: "bg-gradient-to-r from-red-700 to-rose-800",
      tagColor: "bg-red-100 text-red-950 border-red-200",
      desc: "Organizes voluntary blood donation camps, health awareness programs, first-aid training, and humanitarian service.",
      route: null
    },
    {
      name: "Unnat Bharat Abhiyan (UBA)",
      dept: "CSBS",
      tag: "UBA",
      icon: Globe,
      color: "bg-gradient-to-r from-emerald-700 to-teal-800",
      tagColor: "bg-emerald-100 text-emerald-950 border-emerald-200",
      desc: "Connects higher education institutions with rural communities for sustainable development and village empowerment.",
      route: null
    },
    {
      name: "Tamil Mandram",
      dept: "MECH",
      tag: "TAMIL",
      icon: BookOpen,
      color: "bg-gradient-to-r from-amber-600 to-yellow-700",
      tagColor: "bg-amber-100 text-amber-950 border-amber-200",
      desc: "Celebrates Tamil language, literature, traditional arts, debate competitions, and cultural heritage events.",
      route: null
    },
    {
      name: "Women Empowerment Cell (WEC)",
      dept: "ECE / CSE",
      tag: "WEC",
      icon: Shield,
      color: "bg-gradient-to-r from-purple-700 to-indigo-800",
      tagColor: "bg-purple-100 text-purple-950 border-purple-200",
      desc: "Fosters gender equality, safety awareness, female student leadership, health seminars, and career mentorship.",
      route: null
    },
    {
      name: "Universal Human Values (UHV) Cell",
      dept: "IT",
      tag: "UHV",
      icon: Smile,
      color: "bg-gradient-to-r from-cyan-700 to-blue-800",
      tagColor: "bg-cyan-100 text-cyan-950 border-cyan-200",
      desc: "Instills ethical values, interpersonal harmony, self-exploration, and holistic humanistic education.",
      route: null
    },
    {
      name: "Entrepreneurship Development Cell (EDC-SEED)",
      dept: "MBA-G / MBA-IEV",
      tag: "EDC",
      icon: Lightbulb,
      color: "bg-gradient-to-r from-amber-700 to-orange-800",
      tagColor: "bg-amber-100 text-amber-950 border-amber-200",
      desc: "Nurtures startup ideas, business incubation, pitch competitions, funding guidance, and entrepreneurial mindset.",
      route: "/resources/student-life/edc-cell"
    },
    {
      name: "Yoga and Meditation Club",
      dept: "MECH",
      tag: "YOGA",
      icon: Compass,
      color: "bg-gradient-to-r from-teal-700 to-emerald-800",
      tagColor: "bg-teal-100 text-teal-950 border-teal-200",
      desc: "Promotes physical health, mental clarity, stress relief, and mindfulness through daily yoga and meditation sessions.",
      route: null
    },
    {
      name: "Rotaract Club",
      dept: "EEE",
      tag: "ROTARACT",
      icon: Users,
      color: "bg-gradient-to-r from-indigo-700 to-blue-800",
      tagColor: "bg-indigo-100 text-indigo-950 border-indigo-200",
      desc: "Fosters leadership, community development, international fellowship, and professional skills among youth.",
      route: null
    },
    {
      name: "Frontier Area Awareness Club",
      dept: "CENTRAL",
      tag: "FRONTIER",
      icon: Compass,
      color: "bg-gradient-to-r from-sky-700 to-blue-900",
      tagColor: "bg-sky-100 text-sky-950 border-sky-200",
      desc: "Spreads awareness on emerging frontier domains, space exploration, defense tech, and advanced scientific fields.",
      route: null
    },
    {
      name: "Hackathon Club",
      dept: "CENTRAL",
      tag: "HACKATHON",
      icon: Zap,
      color: "bg-gradient-to-r from-blue-800 to-indigo-900",
      tagColor: "bg-blue-100 text-blue-950 border-blue-200",
      desc: "Prepares students for national hackathons, rapid prototyping, problem-solving marathons, and coding challenges.",
      route: null
    },
    {
      name: "Science Club",
      dept: "S&H",
      tag: "SCIENCE",
      icon: Sparkles,
      color: "bg-gradient-to-r from-violet-700 to-purple-800",
      tagColor: "bg-violet-100 text-violet-950 border-violet-200",
      desc: "Promotes fundamental scientific inquiry, physics/chemistry experiments, science day exhibitions, and research curiosity.",
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
              Extra-Curricular and <span className="text-[#ffc107]">Social Clubs</span>
            </h1>

            <p className="text-xs sm:text-sm text-slate-800 font-medium leading-relaxed max-w-2xl mx-auto">
              Empowering students through fine arts, social service, cultural heritage, women empowerment, health & wellness, and entrepreneurial leadership at KIOT.
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

      {/* CLUBS CARDS GRID */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="text-center mb-6">
          <h2 className="text-xl sm:text-2xl font-bold text-black mb-1">Our Extra-Curricular & Social Clubs</h2>
          <p className="text-slate-800 text-xs sm:text-sm font-medium max-w-xl mx-auto">
            Discover student forums dedicated to arts, community service, leadership, and personal development.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {clubs.map((club, idx) => {
            const Icon = club.icon;
            const isClickable = Boolean(club.route);

            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: idx * 0.04 }}
                onClick={() => {
                  if (isClickable) navigate(club.route);
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
                    <span className={`px-2.5 py-0.5 rounded border font-['Graphik-Medium',sans-serif] font-medium text-[11px] uppercase tracking-wider ${club.tagColor}`}>
                      {club.dept}
                    </span>
                    {isClickable && (
                      <span className="w-7 h-7 rounded-full bg-slate-100 group-hover:bg-[#224292] text-slate-700 group-hover:text-white flex items-center justify-center transition-all duration-300">
                        <ArrowUpRight size={15} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" />
                      </span>
                    )}
                  </div>

                  {/* Title & Icon */}
                  <div className="flex items-center gap-3 mb-2.5">
                    <div className={`w-9 h-9 rounded-xl ${club.color} flex items-center justify-center text-white font-medium shrink-0 shadow-xs`}>
                      <Icon size={18} />
                    </div>
                    <h3 className="font-['Graphik-Medium',sans-serif] text-base font-semibold text-slate-900 group-hover:text-[#224292] transition-colors leading-snug">
                      {club.name}
                    </h3>
                  </div>

                  {/* Concise Description */}
                  <p className="font-['Graphik',sans-serif] text-slate-600 text-xs sm:text-sm font-normal leading-relaxed">
                    {club.desc}
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
