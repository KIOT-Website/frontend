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
  School
} from 'lucide-react';
import "./studentLife.css";

export default function HigherEducationIndiaPage() {
  const [activeTab, setActiveTab] = useState('all');

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
      title: "Awareness & Opportunities",
      desc: "To create awareness among students about higher education opportunities, postgraduate programs, research pathways, and career prospects available in premier institutions across India.",
      icon: Target,
      color: "from-blue-500/10 to-blue-100/50",
      iconColor: "text-[#224292]"
    },
    {
      title: "Mentorship & Guidance",
      desc: "To guide and mentor students in choosing suitable universities, institutions, and academic programs based on their interests, aptitude, and long-term career goals.",
      icon: GraduationCap,
      color: "from-yellow-400/10 to-yellow-100/50",
      iconColor: "text-[#d4a017]"
    },
    {
      title: "National Exam Coaching",
      desc: "To support students in preparing for national-level entrance examinations such as GATE, CAT, JAM, CEED, TANCET, CUET (PG), UGC-NET, CSIR-NET, and other competitive examinations.",
      icon: BookOpen,
      color: "from-purple-500/10 to-purple-100/50",
      iconColor: "text-purple-600"
    }
  ];

  const additionalObjectives = [
    "To provide information and assistance regarding admission procedures, eligibility criteria, scholarships, fellowships, internships, research opportunities, and financial support offered by various institutions and government agencies.",
    "To organize awareness programs, expert talks, counseling sessions, workshops, alumni interactions, and university connect initiatives that motivate students to pursue higher education, research, innovation, and lifelong learning."
  ];

  const facultyMembers = [
    { name: "Mrs. N. Subha", dept: "AP/CSE", role: "Coordinator", phone: "9159147273", email: "nscse@kiot.ac.in" },
    { name: "Mrs. A. Elavarasi", dept: "AP/MECH", role: "Coordinator", phone: "9894461464", email: "aemech@kiot.ac.in" },
    { name: "Mrs. S. Sasidevi", dept: "AP/ECE", role: "Member", phone: "9538968805", email: "ssdece@kiot.ac.in" },
    { name: "Mrs. P. Rekha", dept: "AP/EEE", role: "Member", phone: "9789913095", email: "preee@kiot.ac.in" },
    { name: "Mr. S. Arulkesavan", dept: "AP/CIVIL", role: "Member", phone: "9787751075", email: "sakcivil@kiot.ac.in" },
    { name: "Mrs. V. Rajapriya", dept: "AP/IT", role: "Member", phone: "8056910240", email: "rvit@kiot.ac.in" },
    { name: "Mr. B. Venkata Ramanen", dept: "AP/CSBS", role: "Member", phone: "8428781084", email: "bvcsbs@kiot.ac.in" },
    { name: "Mr. B. Gunasekar", dept: "AP/AIDS", role: "Member", phone: "7845544603", email: "bgaids@kiot.ac.in" }
  ];

  const activities = [
    {
      sno: 1,
      year: "2025-2026",
      date: "10.09.2025",
      event: "Awareness Program on GATE- JAM 2026",
      guest: "Dr. A. Arockiarajan, Professor, Dept. of Applied Mechanics, IIT Madras",
      participants: 300
    },
    {
      sno: 2,
      year: "2025-2026",
      date: "28.01.2026",
      event: "Awareness Program on GATE Preparation Strategies",
      guest: "Mr. S. Shanmugam, Professor of Practice, Mechanical Engineering, KIOT, Salem",
      participants: 70
    },
    {
      sno: 3,
      year: "2024-2025",
      date: "25.09.2024",
      event: "Awareness Program on GATE 2025 and JAM 2025 Examinations",
      guest: "Dr. Rayala Suresh Kumar, Chairman, GATE / JAM, IIT Madras",
      participants: 250
    },
    {
      sno: 4,
      year: "2024-2025",
      date: "17.10.2024",
      event: 'Awareness program on "Job Opportunities in Government Sectors"',
      guest: "1. Mr. M. Krishnakumar (Administrator), 2. Mr. A. Premkumar (Marketing Manager, Future Vision Study center, Salem)",
      participants: 200
    },
    {
      sno: 5,
      year: "2023-2024",
      date: "02.09.2023",
      event: "Higher Education Conclave & Expo",
      guest: "1. Ms. Kavitha Senthilkumar (Lugar Academy), 2. Ms. Priyagayathri Vivek (Bluestone Overseas), 3. Mr. Anish Antony (Trinity), 4. Mr. P. G. Rizwan Khan (RR Overseas), 5. Mr. K. Pranav (ETS), 6. Mr. Sivaraman Kumar (IDP IELTS), 7. Dr. R. Shruthi (Shankar IAS), 8. Mr. V R D M. Kausik Agastyaraj (ACE Engg)",
      participants: 350
    }
  ];

  const studentsList = [
    { sno: 1, name: "J.Koushik", year: "2021-2025", course: "MTech - Cloud", college: "SRM University", admissionYear: "2025" },
    { sno: 2, name: "Mahalinkan K S", year: "2021-2025", course: "The Graduate Marine Engineering (GME)", college: "AMET University, Chengalpattu", admissionYear: "2025" },
    { sno: 3, name: "Thanigaivelan R", year: "2021-2025", course: "M.E. ISE", college: "Knowledge Institute of Technology, Salem", admissionYear: "2025" },
    { sno: 4, name: "Hemanth S", year: "2021-2025", course: "M.E. Engineering Design", college: "SONA College of Technology, Salem", admissionYear: "2025" },
    { sno: 5, name: "Kavi Krishnan B", year: "2021-2025", course: "MBA", college: "Sathyabama Institute of Science and Technology, Chennai", admissionYear: "2025" },
    { sno: 6, name: "Sogul R", year: "2021-2025", course: "M.E. CAD/CAM", college: "Muthayammal Engineering College, Namakkal", admissionYear: "2025" },
    { sno: 7, name: "Manikandan V C", year: "2021-2025", course: "MBA", college: "Knowledge Institute of Technology, Salem", admissionYear: "2025" },
    { sno: 8, name: "Priyadharasan L R", year: "2021-2025", course: "M.E", college: "Knowledge Institute of Technology", admissionYear: "2025" },
    { sno: 9, name: "Surendhar K", year: "2020-2024", course: "M.E. ISE", college: "Knowledge Institute of Technology, Salem", admissionYear: "2024" },
    { sno: 10, name: "Dilip Kumar S", year: "2020-2024", course: "M.E. ISE", college: "Knowledge Institute of Technology, Salem", admissionYear: "2024" },
    { sno: 11, name: "Guruganapathi P", year: "2020-2024", course: "M.Plan", college: "Anna University, Chennai", admissionYear: "2024" },
    { sno: 12, name: "Sanjay S.M", year: "2020-2024", course: "M.E", college: "Excel Engineering College", admissionYear: "2024" },
    { sno: 13, name: "Yogeswaran M", year: "2020-2024", course: "M.E", college: "Excel Engineering College", admissionYear: "2024" },
    { sno: 14, name: "Monish S", year: "2019-2023", course: "The Graduate Marine Engineering (GME)", college: "AMET University", admissionYear: "2023" },
    { sno: 15, name: "Priyadharsan A", year: "2017-2021", course: "Master of Science in Business and Management", college: "University of Exeter Business School, UK", admissionYear: "2023" },
    { sno: 16, name: "Barath Kumar V", year: "2015-2019", course: "M.Tech. Data Science & Engineering", college: "BITS Pilani", admissionYear: "2023" },
    { sno: 17, name: "Aswinn S", year: "2019-2023", course: "IQTS", college: "University Industrial Collaborative Programme", admissionYear: "2023" },
    { sno: 18, name: "Infant Raj F", year: "2016-2020", course: "M.E (EST)", college: "Knowledge Institute of Technology", admissionYear: "2023" },
    { sno: 19, name: "Ruba Sri D R", year: "2018-2022", course: "M.E (EST)", college: "Knowledge Institute of Technology", admissionYear: "2023" },
    { sno: 20, name: "Shanmuga Priya S R", year: "2018-2022", course: "M.E (EST)", college: "Knowledge Institute of Technology", admissionYear: "2023" },
    { sno: 21, name: "Vaiishnavi R R", year: "2018-2022", course: "M.E (EST)", college: "Knowledge Institute of Technology", admissionYear: "2023" },
    { sno: 22, name: "Vallimayil", year: "2009-2013", course: "M.E (EST)", college: "Knowledge Institute of Technology", admissionYear: "2023" },
    { sno: 23, name: "Franklin Viyan D", year: "2018-2022", course: "MBA", college: "St. Joseph's Institute of Management, Trichy", admissionYear: "2023" },
    { sno: 24, name: "Veerammal S", year: "2019-2023", course: "MBA", college: "Periyar University", admissionYear: "2023" },
    { sno: 25, name: "Venkatalakshmi J", year: "2019-2023", course: "MBA", college: "Bharathidasan University", admissionYear: "2023" },
    { sno: 26, name: "Sathyasree R", year: "2019-2023", course: "M.E. – CSE", college: "Sona College of Technology", admissionYear: "2023" }
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
            <h1 className="font-['Graphik-Bold',sans-serif] font-black tracking-tight leading-none mb-3 text-amber-400" style={{ fontSize: 'clamp(1.8rem, 4.5vw, 2.8rem)' }}>
              Higher Education Cell (India)
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
          className="bg-white rounded-[1.5rem] sm:rounded-[2.5rem] border border-slate-100 p-5 sm:p-8 lg:p-14"
          style={{ boxShadow: '0 50px 100px -20px rgba(10,26,63,0.08)' }}
        >
          <div className="space-y-6">
            <div className="inline-flex items-center gap-1.5 uppercase font-black text-xs" style={{ letterSpacing: '0.15em', color: '#224292' }}>
              <Sparkles size={14} style={{ color: '#ffc107' }} />
              About Higher Education Cell (India)
            </div>

            <h2 className="font-['Graphik-Bold',sans-serif] font-extrabold tracking-tight leading-tight text-xl sm:text-2xl" style={{ color: '#224292' }}>
              Empowering Students to Pursue Higher Education in Premier Indian Institutions
            </h2>

            <div className="space-y-4 text-[14px] font-normal text-slate-800 leading-[25.2px] text-justify">
              <p>
                The Higher Education Cell (India) is established to support and guide students who aspire to pursue higher studies at premier institutions across India. The cell serves as a platform to provide information on postgraduate programs, admission procedures, entrance examinations, scholarships, fellowships, research opportunities, and career prospects in higher education.
              </p>
              <p>
                It organizes awareness programs, counseling sessions, seminars, workshops, and interactions with academicians, researchers, alumni, and experts to help students make informed decisions about their academic future. The cell also assists students in identifying suitable institutions and programs based on their academic interests and career aspirations, motivating them to pursue advanced studies, research, and innovation.
              </p>
            </div>
          </div>
        </motion.div>
      </div>

      {/* ─── OBJECTIVES SECTION ─── */}
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-10 mt-12">
        <div className="text-center max-w-2xl mx-auto mb-8">
          <h2 className="font-['Graphik-Bold',sans-serif] font-black tracking-tight text-2xl sm:text-3xl" style={{ color: '#224292' }}>
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
                <h3 className="font-['Graphik-Bold',sans-serif] font-bold text-base mb-2" style={{ color: '#224292' }}>
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

      {/* ─── FACULTY INCHARGE TABLE ─── */}
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-10 mt-14">
        <div className="text-center max-w-2xl mx-auto mb-8">
          <h2 className="font-['Graphik-Bold',sans-serif] font-black tracking-tight text-2xl sm:text-3xl" style={{ color: '#224292' }}>
            Faculty Coordinators & Committee Members
          </h2>
          <p className="text-slate-500 text-xs sm:text-sm mt-1">Staff Coordinator: Mrs. N. Subha, Assistant Professor / CSE</p>
          <div className="w-20 h-1.5 rounded-full mx-auto mt-3" style={{ backgroundColor: '#ffc107' }} />
        </div>

        <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm max-w-6xl mx-auto">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-[#224292] text-white text-xs sm:text-sm font-bold uppercase">
                  <th className="py-3.5 px-5 border-b border-blue-900 w-16 text-center">S.No</th>
                  <th className="py-3.5 px-5 border-b border-blue-900">Name of Faculty</th>
                  <th className="py-3.5 px-5 border-b border-blue-900">Affiliation</th>
                  <th className="py-3.5 px-5 border-b border-blue-900">Position</th>
                  <th className="py-3.5 px-5 border-b border-blue-900">Contact Details</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-xs sm:text-sm font-medium text-slate-700">
                {facultyMembers.map((fac, idx) => (
                  <tr key={idx} className="hover:bg-slate-50 transition-colors">
                    <td className="py-3.5 px-5 font-bold text-slate-500 text-center">{idx + 1}</td>
                    <td className="py-3.5 px-5 font-bold text-[#224292]">{fac.name}</td>
                    <td className="py-3.5 px-5 font-semibold text-slate-700">{fac.dept}</td>
                    <td className="py-3.5 px-5">
                      <span className={`inline-block px-2.5 py-0.5 rounded-full font-bold text-[10px] uppercase ${fac.role === 'Coordinator' ? 'bg-amber-100 text-amber-900 border border-amber-300' : 'bg-blue-50 text-[#224292] border border-blue-200'}`}>
                        {fac.role}
                      </span>
                    </td>
                    <td className="py-3.5 px-5 text-slate-600 whitespace-nowrap">
                      <span className="flex items-center gap-1.5 text-xs">
                        <Phone size={12} className="text-slate-400" /> {fac.phone}
                      </span>
                      <span className="flex items-center gap-1.5 text-xs text-blue-700 mt-0.5">
                        <Mail size={12} className="text-slate-400" /> {fac.email}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* ─── DETAILS OF ACTIVITY TABLE ─── */}
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-10 mt-14">
        <div className="text-center max-w-2xl mx-auto mb-8">
          <h2 className="font-['Graphik-Bold',sans-serif] font-black tracking-tight text-2xl sm:text-3xl" style={{ color: '#224292' }}>
            Details of Activities
          </h2>
          <p className="text-slate-500 text-xs sm:text-sm mt-1">GATE/JAM awareness programs, government job opportunities, and Higher Education Expos</p>
          <div className="w-20 h-1.5 rounded-full mx-auto mt-3" style={{ backgroundColor: '#ffc107' }} />
        </div>

        <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm max-w-6xl mx-auto">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-[#224292] text-white text-xs sm:text-sm font-bold uppercase">
                  <th className="py-3.5 px-4 border-b border-blue-900 w-14 text-center">S.No</th>
                  <th className="py-3.5 px-4 border-b border-blue-900 w-28">Academic Year</th>
                  <th className="py-3.5 px-4 border-b border-blue-900 w-28">Date</th>
                  <th className="py-3.5 px-4 border-b border-blue-900">Event Name</th>
                  <th className="py-3.5 px-4 border-b border-blue-900">Guest Name & Designation</th>
                  <th className="py-3.5 px-4 border-b border-blue-900 w-28 text-center">Participants</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-xs sm:text-sm font-medium text-slate-700">
                {activities.map((act, idx) => (
                  <tr key={idx} className="hover:bg-slate-50 transition-colors">
                    <td className="py-4 px-4 font-bold text-slate-500 text-center">{act.sno}</td>
                    <td className="py-4 px-4 whitespace-nowrap font-bold text-slate-600">{act.year}</td>
                    <td className="py-4 px-4 whitespace-nowrap font-semibold text-slate-800">{act.date}</td>
                    <td className="py-4 px-4 font-bold text-[#224292]">{act.event}</td>
                    <td className="py-4 px-4 text-xs leading-relaxed text-slate-600">{act.guest}</td>
                    <td className="py-4 px-4 text-center">
                      <span className="inline-block px-2.5 py-1 rounded-full bg-amber-100 text-amber-900 border border-amber-300 font-bold text-xs">
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

      {/* ─── STUDENTS PURSUING HIGHER STUDIES ─── */}
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-10 mt-14">
        <div className="text-center max-w-2xl mx-auto mb-8">
          <h2 className="font-['Graphik-Bold',sans-serif] font-black tracking-tight text-2xl sm:text-3xl" style={{ color: '#224292' }}>
            Students Pursuing Higher Studies
          </h2>
          <p className="text-slate-500 text-xs sm:text-sm mt-1">Record of KIOT alumni admitted into premier M.E., M.Tech, MBA, and PhD programs across India & Abroad</p>
          <div className="w-20 h-1.5 rounded-full mx-auto mt-3" style={{ backgroundColor: '#ffc107' }} />
        </div>

        {/* YEARLY SUMMARY BADGES */}
        <div className="flex justify-center gap-4 mb-6">
          <div className="px-4 py-2 bg-white border border-slate-200 rounded-xl shadow-xs text-center">
            <p className="text-[10px] uppercase font-bold text-slate-500">2025 – 2026</p>
            <p className="text-lg font-black text-[#224292]">8 Students</p>
          </div>
          <div className="px-4 py-2 bg-white border border-slate-200 rounded-xl shadow-xs text-center">
            <p className="text-[10px] uppercase font-bold text-slate-500">2024 – 2025</p>
            <p className="text-lg font-black text-[#224292]">5 Students</p>
          </div>
          <div className="px-4 py-2 bg-white border border-slate-200 rounded-xl shadow-xs text-center">
            <p className="text-[10px] uppercase font-bold text-slate-500">2023 – 2024</p>
            <p className="text-lg font-black text-[#224292]">13 Students</p>
          </div>
        </div>

        <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm max-w-6xl mx-auto">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-[#224292] text-white text-xs sm:text-sm font-bold uppercase">
                  <th className="py-3.5 px-4 border-b border-blue-900 w-14 text-center">S.No</th>
                  <th className="py-3.5 px-4 border-b border-blue-900">Name of Student</th>
                  <th className="py-3.5 px-4 border-b border-blue-900 w-32">Graduating Year</th>
                  <th className="py-3.5 px-4 border-b border-blue-900">Course Admitted</th>
                  <th className="py-3.5 px-4 border-b border-blue-900">College / University</th>
                  <th className="py-3.5 px-4 border-b border-blue-900 w-28 text-center">Admission Year</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-xs sm:text-sm font-medium text-slate-700">
                {studentsList.map((st, idx) => (
                  <tr key={idx} className="hover:bg-slate-50 transition-colors">
                    <td className="py-3.5 px-4 font-bold text-slate-500 text-center">{st.sno}</td>
                    <td className="py-3.5 px-4 font-bold text-[#224292]">{st.name}</td>
                    <td className="py-3.5 px-4 text-slate-600 whitespace-nowrap">{st.year}</td>
                    <td className="py-3.5 px-4 font-semibold text-slate-800">{st.course}</td>
                    <td className="py-3.5 px-4 text-slate-700">{st.college}</td>
                    <td className="py-3.5 px-4 text-center font-bold text-amber-700">{st.admissionYear}</td>
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
