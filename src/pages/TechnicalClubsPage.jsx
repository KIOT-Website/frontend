import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import {
  Sparkles,
  Compass,
  Award,
  ArrowUpRight,
  Cpu,
  Zap,
  Code,
  Building2,
  Brain,
  Monitor,
  Database,
  Cloud,
  Smartphone,
  Video,
  Bot,
  Truck,
  Heart,
  Activity,
  LineChart,
  BarChart3,
  Users,
  Leaf,
  Sprout,
  ShieldCheck,
  Radio,
  Share2,
  Recycle,
  GraduationCap,
  Volume2,
  TrendingUp,
  Target,
  Package,
  Layers,
  ChevronRight,
  Search,
  X,
  SlidersHorizontal
} from 'lucide-react';
import "./studentLife.css";

export default function TechnicalClubsPage() {
  const navigate = useNavigate();
  const [selectedDept, setSelectedDept] = useState('ALL');
  const [searchQuery, setSearchQuery] = useState('');

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
      title: "Advanced AI & Robotics",
      desc: "Developing intelligent autonomous bots, computer vision models, AR/VR platforms, and IoT hardware.",
      icon: Bot,
      iconBg: "bg-blue-50 text-[#224292]",
      borderColor: "border-blue-100"
    },
    {
      title: "Green Mobility & Clean Energy",
      desc: "Promoting electric vehicle design, smart grid management, drone engineering, and sustainable living tech.",
      icon: Zap,
      iconBg: "bg-amber-50 text-[#d4a017]",
      borderColor: "border-amber-100"
    },
    {
      title: "Cloud, Data & Analytics",
      desc: "Hands-on expertise in Big Data insights, cloud infrastructure, full-stack dev, and enterprise business analytics.",
      icon: Database,
      iconBg: "bg-emerald-50 text-emerald-700",
      borderColor: "border-emerald-100"
    }
  ];

  const departmentsList = [
    { id: 'ALL', name: 'All Departments', tag: '36 Clubs' },
    { id: 'MECH', name: 'Mechanical Engineering', tag: '4 Clubs' },
    { id: 'ECE', name: 'Electronics & Communication Engineering', tag: '5 Clubs' },
    { id: 'EEE', name: 'Electrical & Electronics Engineering', tag: '4 Clubs' },
    { id: 'CSE', name: 'Computer Science & Engineering', tag: '8 Clubs' },
    { id: 'CIVIL', name: 'Civil Engineering', tag: '3 Clubs' },
    { id: 'IT', name: 'Information Technology', tag: '2 Clubs' },
    { id: 'AI&DS', name: 'Artificial Intelligence & Data Science', tag: '2 Clubs' },
    { id: 'CSBS', name: 'Computer Science & Business Systems', tag: '1 Club' },
    { id: 'MBA', name: 'Management Studies (MBA)', tag: '8 Clubs' }
  ];

  const clubs = [
    // MECH
    {
      name: "Sustainable Engineering Club",
      dept: "MECH",
      tag: "SUSTAINABILITY",
      icon: Leaf,
      color: "bg-gradient-to-r from-emerald-700 to-teal-800",
      tagColor: "bg-emerald-100 text-emerald-950 border-emerald-200",
      desc: "Encourages eco-friendly engineering designs, green manufacturing, and sustainable industrial development practices.",
      route: null
    },
    {
      name: "Agricultural Automation Club",
      dept: "MECH",
      tag: "AGRI TECH",
      icon: Sprout,
      color: "bg-gradient-to-r from-green-700 to-emerald-800",
      tagColor: "bg-green-100 text-green-950 border-green-200",
      desc: "Promotes smart farming machinery, automated irrigation systems, and agricultural technology innovations.",
      route: null
    },
    {
      name: "Environmental Health and Safety (EHS) Club",
      dept: "MECH",
      tag: "EHS",
      icon: ShieldCheck,
      color: "bg-gradient-to-r from-teal-700 to-cyan-800",
      tagColor: "bg-teal-100 text-teal-950 border-teal-200",
      desc: "Focuses on industrial safety compliance, environmental health audits, workplace ergonomics, and hazard control.",
      route: null
    },
    {
      name: "Robotics, Automation and Industry 4.0 Club",
      dept: "MECH",
      tag: "INDUSTRY 4.0",
      icon: Bot,
      color: "bg-gradient-to-r from-blue-700 to-indigo-800",
      tagColor: "bg-blue-100 text-blue-950 border-blue-200",
      desc: "Develops industrial robotic manipulators, automated assembly lines, cyber-physical systems, and smart factory tech.",
      route: null
    },

    // ECE
    {
      name: "Software Defined Vehicle",
      dept: "ECE",
      tag: "AUTOMOTIVE ECE",
      icon: Truck,
      color: "bg-gradient-to-r from-cyan-700 to-blue-800",
      tagColor: "bg-cyan-100 text-cyan-950 border-cyan-200",
      desc: "Explores CAN bus protocols, automotive embedded OS, ECU programming, and connected autonomous vehicle software.",
      route: "/resources/student-life/sdv-club"
    },
    {
      name: "IoT Club",
      dept: "ECE",
      tag: "IoT",
      icon: Radio,
      color: "bg-gradient-to-r from-indigo-700 to-purple-800",
      tagColor: "bg-indigo-100 text-indigo-950 border-indigo-200",
      desc: "Builds smart home devices, sensor nodes, wireless telemetry systems, and connected IoT hardware applications.",
      route: null
    },
    {
      name: "Systems on Chip (SoC) Club",
      dept: "ECE",
      tag: "SoC",
      icon: Cpu,
      color: "bg-gradient-to-r from-purple-700 to-indigo-800",
      tagColor: "bg-purple-100 text-purple-950 border-purple-200",
      desc: "Promotes VLSI chip design, FPGA prototyping, embedded hardware architectures, and semiconductor innovation.",
      route: "/resources/student-life/soc-club"
    },
    {
      name: "Technology for Elderly Care and Child Care",
      dept: "ECE",
      tag: "HEALTH TECH",
      icon: Heart,
      color: "bg-gradient-to-r from-rose-700 to-pink-800",
      tagColor: "bg-rose-100 text-rose-950 border-rose-200",
      desc: "Develops assistive smart technologies, IoT monitoring tools, and safety solutions for elderly and child care support.",
      route: "/resources/student-life/elderly-childcare"
    },
    {
      name: "Wearable Devices and Health Monitoring Club",
      dept: "ECE",
      tag: "WEARABLES",
      icon: Activity,
      color: "bg-gradient-to-r from-pink-700 to-rose-800",
      tagColor: "bg-pink-100 text-pink-950 border-pink-200",
      desc: "Focuses on smart health bands, ECG sensors, vital signs tracking wearables, and patient remote monitoring systems.",
      route: null
    },

    // EEE
    {
      name: "Robotics and Intelligence Machines (RIM) Club",
      dept: "EEE",
      tag: "ROBOTICS",
      icon: Bot,
      color: "bg-gradient-to-r from-emerald-700 to-teal-800",
      tagColor: "bg-emerald-100 text-emerald-950 border-emerald-200",
      desc: "Encourages autonomous bot creation, industrial automation, sensor integration, and intelligent robotics design.",
      route: null
    },
    {
      name: "Electric Vehicles (EV) Club",
      dept: "EEE",
      tag: "EV TECH",
      icon: Truck,
      color: "bg-gradient-to-r from-amber-600 to-yellow-700",
      tagColor: "bg-amber-100 text-amber-950 border-amber-200",
      desc: "Promotes electric vehicle powertrain design, battery management systems, motor control, and green transportation.",
      route: null
    },
    {
      name: "Energy Management Club",
      dept: "EEE",
      tag: "ENERGY",
      icon: Zap,
      color: "bg-gradient-to-r from-blue-700 to-indigo-800",
      tagColor: "bg-blue-100 text-blue-950 border-blue-200",
      desc: "Focuses on energy audits, solar/renewable power management, smart grid efficiency, and sustainable energy usage.",
      route: "/resources/student-life/energy"
    },
    {
      name: "Drone Club",
      dept: "EEE",
      tag: "DRONE",
      icon: Zap,
      color: "bg-gradient-to-r from-purple-700 to-violet-800",
      tagColor: "bg-purple-100 text-purple-950 border-purple-200",
      desc: "Promotes drone assembly, flight controller programming, aerial surveying, and payload delivery technology.",
      route: null
    },

    // CSE
    {
      name: "Big Data Big Insights (BDBI) Club",
      dept: "CSE",
      tag: "BIG DATA",
      icon: Database,
      color: "bg-gradient-to-r from-blue-700 to-indigo-800",
      tagColor: "bg-blue-100 text-blue-900 border-blue-200",
      desc: "Enhances student knowledge in big data analysis, predictive modeling, machine learning, and intelligent data decision-making.",
      route: "/resources/student-life/bdbi"
    },
    {
      name: "Code ware Development Club",
      dept: "CSE",
      tag: "CODING",
      icon: Code,
      color: "bg-gradient-to-r from-indigo-700 to-purple-800",
      tagColor: "bg-indigo-100 text-indigo-950 border-indigo-200",
      desc: "Promotes software development skills, competitive coding challenges, Git workflows, and open-source project building.",
      route: "/resources/student-life/codeware"
    },
    {
      name: "Cloud Computing Tech Club",
      dept: "CSE",
      tag: "CLOUD",
      icon: Cloud,
      color: "bg-gradient-to-r from-sky-700 to-blue-900",
      tagColor: "bg-sky-100 text-sky-950 border-sky-200",
      desc: "Develops cloud platform knowledge (AWS, Azure, GCP), microservices, containerization, and modern cloud DevOps skills.",
      route: null
    },
    {
      name: "KIOT CISCO Network Academy",
      dept: "CSE",
      tag: "CISCO",
      icon: Code,
      color: "bg-gradient-to-r from-cyan-700 to-blue-800",
      tagColor: "bg-cyan-100 text-cyan-950 border-cyan-200",
      desc: "Provides hands-on computer networking, routing/switching, cybersecurity, and CCNA industry certification training.",
      route: "/resources/student-life/cisco-academy"
    },
    {
      name: "KIOT Oracle Academy",
      dept: "CSE",
      tag: "ORACLE",
      icon: Database,
      color: "bg-gradient-to-r from-amber-600 to-yellow-700",
      tagColor: "bg-amber-100 text-amber-950 border-amber-200",
      desc: "Enhances database management, SQL/PL-SQL proficiency, and enterprise cloud software learning through official Oracle courses.",
      route: "/resources/student-life/oracle-academy"
    },
    {
      name: "Web and Mobile App Developers Club",
      dept: "CSE",
      tag: "APP DEV",
      icon: Smartphone,
      color: "bg-gradient-to-r from-blue-600 to-cyan-700",
      tagColor: "bg-blue-100 text-blue-950 border-blue-200",
      desc: "Encourages mobile app development (Flutter, React Native) and full-stack web applications for real-world projects.",
      route: null
    },
    {
      name: "Creative Media Club",
      dept: "CSE",
      tag: "CREATIVE",
      icon: Video,
      color: "bg-gradient-to-r from-rose-700 to-pink-800",
      tagColor: "bg-rose-100 text-rose-950 border-rose-200",
      desc: "Promotes creativity in digital UI/UX design, graphic design, animation, video editing, and multimedia production.",
      route: null
    },
    {
      name: "Social Media Club",
      dept: "CSE",
      tag: "SOCIAL MEDIA",
      icon: Share2,
      color: "bg-gradient-to-r from-violet-700 to-purple-800",
      tagColor: "bg-violet-100 text-violet-950 border-violet-200",
      desc: "Builds communication and digital branding skills through social media content creation and online engagement.",
      route: null
    },

    // CIVIL
    {
      name: "Smart and Sustainable Living Club",
      dept: "CIVIL",
      tag: "SMART CIVIL",
      icon: Building2,
      color: "bg-gradient-to-r from-emerald-700 to-teal-800",
      tagColor: "bg-emerald-100 text-emerald-950 border-emerald-200",
      desc: "Promotes eco-friendly green buildings, smart city infrastructure, rainwater harvesting, and sustainable living concepts.",
      route: null
    },
    {
      name: "Technology for Waste Management",
      dept: "CIVIL",
      tag: "WASTE TECH",
      icon: Recycle,
      color: "bg-gradient-to-r from-teal-700 to-cyan-800",
      tagColor: "bg-teal-100 text-teal-950 border-teal-200",
      desc: "Focuses on solid waste recycling, e-waste handling, wastewater treatment technologies, and circular economy concepts.",
      route: null
    },
    {
      name: "Technology for Urban Traffic Management",
      dept: "CIVIL",
      tag: "TRAFFIC",
      icon: Compass,
      color: "bg-gradient-to-r from-amber-700 to-orange-800",
      tagColor: "bg-amber-100 text-amber-950 border-amber-200",
      desc: "Develops intelligent traffic signaling, urban mobility management, road safety systems, and smart transportation planning.",
      route: null
    },

    // IT & AI&DS
    {
      name: "Technology for Education",
      dept: "IT",
      tag: "ED TECH",
      icon: GraduationCap,
      color: "bg-gradient-to-r from-sky-700 to-blue-900",
      tagColor: "bg-sky-100 text-sky-950 border-sky-200",
      desc: "Promotes innovative digital learning tools, smart classroom applications, and e-learning technologies for education.",
      route: null
    },
    {
      name: "AR/VR Club",
      dept: "IT / AI&DS",
      tag: "AR/VR",
      icon: Monitor,
      color: "bg-gradient-to-r from-purple-700 to-indigo-800",
      tagColor: "bg-purple-100 text-purple-950 border-purple-200",
      desc: "Explores augmented & virtual reality environments, Unity/Unreal 3D design, and spatial computing applications.",
      route: null
    },

    // CSBS
    {
      name: "Technology for Continuous Monitoring (for pollutants cold chain)",
      dept: "CSBS",
      tag: "MONITORING",
      icon: Activity,
      color: "bg-gradient-to-r from-blue-700 to-indigo-800",
      tagColor: "bg-blue-100 text-blue-950 border-blue-200",
      desc: "Supports pollutant tracking, cold chain temperature monitoring, and smart environmental sensor networks.",
      route: "/resources/student-life/continuous-monitoring"
    },

    // AI&DS
    {
      name: "Image and Video Analytics Club",
      dept: "AI&DS",
      tag: "VISION AI",
      icon: Video,
      color: "bg-gradient-to-r from-rose-700 to-pink-800",
      tagColor: "bg-rose-100 text-rose-950 border-rose-200",
      desc: "Develops computer vision, OpenCV models, face recognition, object detection, and intelligent video analytics.",
      route: null
    },

    // MBA
    {
      name: "Leadership Forum",
      dept: "MBA",
      tag: "LEADERSHIP",
      icon: Award,
      color: "bg-gradient-to-r from-amber-600 to-yellow-700",
      tagColor: "bg-amber-100 text-amber-950 border-amber-200",
      desc: "Enhances managerial leadership qualities, strategic decision-making, team building, and executive ethics.",
      route: null
    },
    {
      name: "Business Analytics Club",
      dept: "MBA",
      tag: "ANALYTICS",
      icon: LineChart,
      color: "bg-gradient-to-r from-indigo-700 to-blue-800",
      tagColor: "bg-indigo-100 text-indigo-950 border-indigo-200",
      desc: "Promotes data-driven business decision-making, PowerBI/Tableau visualization, and analytical problem-solving skills.",
      route: null
    },
    {
      name: "Speakers Forum",
      dept: "MBA-G / MBA-IEV",
      tag: "SPEAKERS",
      icon: Volume2,
      color: "bg-gradient-to-r from-cyan-700 to-blue-800",
      tagColor: "bg-cyan-100 text-cyan-950 border-cyan-200",
      desc: "Develops public speaking, debate skills, executive presentation confidence, and corporate communication effectiveness.",
      route: null
    },
    {
      name: "Business Insights Club",
      dept: "MBA",
      tag: "INSIGHTS",
      icon: TrendingUp,
      color: "bg-gradient-to-r from-emerald-700 to-teal-800",
      tagColor: "bg-emerald-100 text-emerald-950 border-emerald-200",
      desc: "Improves understanding of global market trends, case studies analysis, and corporate business strategy development.",
      route: null
    },
    {
      name: "Marketing Club",
      dept: "MBA",
      tag: "MARKETING",
      icon: Target,
      color: "bg-gradient-to-r from-rose-700 to-pink-800",
      tagColor: "bg-rose-100 text-rose-950 border-rose-200",
      desc: "Builds brand positioning, digital marketing strategies, market research, and promotion management skills.",
      route: null
    },
    {
      name: "Finance Management Club",
      dept: "MBA",
      tag: "FINANCE",
      icon: BarChart3,
      color: "bg-gradient-to-r from-green-700 to-teal-800",
      tagColor: "bg-green-100 text-green-950 border-green-200",
      desc: "Enhances financial planning, stock market trading concepts, investment analysis, and corporate finance proficiency.",
      route: null
    },
    {
      name: "HR Management Club",
      dept: "MBA",
      tag: "HR CLUB",
      icon: Users,
      color: "bg-gradient-to-r from-purple-700 to-indigo-800",
      tagColor: "bg-purple-100 text-purple-950 border-purple-200",
      desc: "Develops talent acquisition, employee engagement, organizational behavior, and modern HR management practices.",
      route: null
    },
    {
      name: "Smart Operations and Logistics Club",
      dept: "MBA",
      tag: "LOGISTICS",
      icon: Package,
      color: "bg-gradient-to-r from-sky-700 to-blue-900",
      tagColor: "bg-sky-100 text-sky-950 border-sky-200",
      desc: "Focuses on supply chain optimization, smart inventory management, logistics planning, and operational efficiency.",
      route: null
    }
  ];

  const filteredClubs = clubs.filter(club => {
    const matchesDept = selectedDept === 'ALL' || club.dept.toUpperCase().includes(selectedDept);
    
    if (!searchQuery.trim()) return matchesDept;

    const query = searchQuery.toLowerCase().trim();
    const matchesQuery = 
      club.name.toLowerCase().includes(query) ||
      club.dept.toLowerCase().includes(query) ||
      club.tag.toLowerCase().includes(query) ||
      club.desc.toLowerCase().includes(query);

    return matchesDept && matchesQuery;
  });

  return (
    <div className="bg-[#f8fafc] text-slate-900 min-h-screen font-['Graphik',sans-serif] pb-16">
      {/* HERO SECTION - LIGHT THEME, COMPACT */}
      <section className="bg-gradient-to-br from-[#f5f7fb] via-[#eef2f8] to-slate-100 pt-8 pb-6 border-b border-slate-200">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="text-center max-w-3xl mx-auto"
          >
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-[#224292] text-xs font-medium uppercase tracking-wider mb-2.5">
              <Sparkles size={13} className="text-[#ffc107]" />
              <span>KIOT Student Life</span>
            </div>

            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-[#224292] font-['Graphik-Medium',sans-serif] tracking-tight mb-2">
              Technical & Co-Curricular <span className="text-[#ffc107]">Clubs</span>
            </h1>

            <p className="text-xs sm:text-sm text-slate-700 font-normal leading-relaxed max-w-2xl mx-auto">
              Domain-specific innovation cells, coding forums, EV labs, robotics cells, and specialized departmental clubs at Knowledge Institute of Technology.
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
                  className={`p-4 rounded-2xl bg-white border border-slate-100 shadow-[0_10px_25px_rgba(0,0,0,0.05)] hover:shadow-lg hover:shadow-slate-200/60 transition-all duration-300 flex items-start gap-3.5`}
                >
                  <div className={`w-9 h-9 rounded-xl ${item.iconBg} flex items-center justify-center shrink-0`}>
                    <Icon size={18} />
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-slate-900 font-['Graphik-Medium',sans-serif] mb-0.5">{item.title}</h3>
                    <p className="text-xs text-slate-600 font-normal leading-normal">{item.desc}</p>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* MAIN TWO-COLUMN LAYOUT (LEFT SIDEBAR DEPARTMENTS, RIGHT CONTENT CLUBS) */}
      <section className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col lg:flex-row gap-6 items-start">
          
          {/* LEFT SIDEBAR: DEPARTMENT SELECTION MENU */}
          <div className="w-full lg:w-[360px] shrink-0 bg-white rounded-2xl border border-slate-100 p-4 shadow-[0_10px_30px_rgba(0,0,0,0.06)] space-y-2 sticky lg:top-24">
            
            {/* SIDEBAR HEADER */}
            <div className="flex items-center gap-2 pb-3 border-b border-slate-100 text-[#224292] font-['Graphik-Medium',sans-serif] font-semibold text-xs uppercase tracking-wider">
              <Layers size={16} className="text-amber-500" />
              <span>Departments</span>
            </div>

            {/* DEPARTMENTS LIST */}
            <div className="space-y-1 max-h-[70vh] overflow-y-auto pr-0.5">
              {departmentsList.map((dept) => {
                const isActive = selectedDept === dept.id;
                return (
                  <button
                    key={dept.id}
                    onClick={() => {
                      setSelectedDept(dept.id);
                    }}
                    className={`w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl text-xs sm:text-sm font-normal transition-all duration-200 text-left ${
                      isActive
                        ? "bg-[#224292] text-white font-['Graphik'] shadow-sm"
                        : "text-slate-700 hover:bg-slate-50 hover:text-[#224292]"
                    }`}
                  >
                    <span className="leading-snug pr-2 font-['Graphik',sans-serif]">{dept.name}</span>
                    <span className={`text-[10px] px-2 py-0.5 rounded-md shrink-0 font-medium ${
                      isActive
                        ? 'bg-amber-400 text-[#224292] font-semibold'
                        : 'bg-slate-100 text-slate-500'
                    }`}>
                      {dept.tag}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* RIGHT CONTENT: CLUBS GRID & SEARCH HEADER */}
          <div className="flex-1 w-full space-y-6">
            
            {/* TOP BAR: SECTION TITLE & INTERACTIVE SEARCH */}
            <div className="bg-white rounded-2xl border border-slate-100 p-4 sm:p-5 shadow-[0_10px_30px_rgba(0,0,0,0.06)] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div>
                <h2 className="text-lg sm:text-xl font-semibold text-[#224292] font-['Graphik-Medium',sans-serif]">
                  {selectedDept === 'ALL' ? 'All Technical Clubs' : departmentsList.find(d => d.id === selectedDept)?.name}
                </h2>
                <p className="text-xs text-slate-500 font-normal">
                  Showing {filteredClubs.length} of {clubs.length} technical innovation cells
                </p>
              </div>

              {/* SEARCH INPUT */}
              <div className="relative w-full sm:w-80">
                <Search size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search club name, dept, BDBI, EV, IoT, CSE..."
                  className="w-full pl-9 pr-8 py-2 rounded-xl bg-slate-50 border border-slate-200 text-xs sm:text-sm font-normal text-slate-800 placeholder:text-slate-400 focus:outline-none focus:border-[#224292] focus:bg-white transition-all"
                />
                {searchQuery && (
                  <button
                    onClick={() => setSearchQuery('')}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600"
                  >
                    <X size={14} />
                  </button>
                )}
              </div>
            </div>

            {/* CLUBS GRID */}
            {filteredClubs.length === 0 ? (
              <div className="bg-white rounded-2xl border border-slate-100 p-12 text-center shadow-[0_10px_30px_rgba(0,0,0,0.06)]">
                <p className="text-slate-500 text-sm font-normal">No technical clubs found matching "{searchQuery}"</p>
                <button
                  onClick={() => { setSearchQuery(''); setSelectedDept('ALL'); }}
                  className="mt-3 text-xs text-[#224292] font-semibold hover:underline"
                >
                  Clear search filters
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                {filteredClubs.map((club, idx) => {
                  const Icon = club.icon;
                  const isClickable = Boolean(club.route);

                  return (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3, delay: idx * 0.03 }}
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
            )}
          </div>

        </div>
      </section>
    </div>
  );
}
