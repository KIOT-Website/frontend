import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import {
  Sparkles,
  Trophy,
  Award,
  Calendar,
  Users,
  Target,
  Medal,
  Zap,
  Globe,
  Flag,
  CheckCircle2
} from 'lucide-react';
import "./studentLife.css";

export default function CorporateContestCellPage() {
  const [levelTab, setLevelTab] = useState('state'); // 'state' | 'national'
  const [yearTab, setYearTab] = useState('2025-2026'); // '2025-2026' | '2024-2025'

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

  // State Level Contests
  const stateContests = {
    '2025-2026': {
      summary: { contests: 18, students: 966, achievements: 12 },
      list: [
        { sno: 1, name: "Engineers Day Contest 2025", organized: "Imagecon India", outcome: "First Place and received Cash Prize Rs 20,000 also got Rs 7000/- free course offer." },
        { sno: 2, name: "CognitiveX GenAI Hackathon (Internal Mode-KIOT)", organized: "IBM Skillsbuild in collaboration with SmartBridge", outcome: "Three teams received Cash Prize Rs 15000/-" },
        { sno: 3, name: "CODEZAP 25 Hackathon", organized: "Descience Open-Source Club", outcome: "Won First Prize & Received Industrial Visit offer at Singapore" },
        { sno: 4, name: "Aarvam 2025 Hackathon", organized: "Cybernaut Edtech Pvt Ltd", outcome: "Team Secured Special Prize with a Cash award of Rs 2500/-" },
        { sno: 5, name: "GCC X Shift Hackathon", organized: "Guidance Tamil Nadu, 6S Consulting and KPR Institute of Engineering & Technology", outcome: "One team Won Best Solution in Task Tracking Award and received a Cash Prize of Rs 25,000/-" },
        { sno: 6, name: "Build Expo 2026", organized: "Salem Civil Engineers Association", outcome: "Won First Prize and Received Cash Prize of Rs 15,000/-" },
        { sno: 7, name: "BIM Contest 2025", organized: "Autodesk & L&T EduTech", outcome: "Got Merit Team Award along with Cash Prize Rs 15,000/-" },
        { sno: 8, name: "Neura Code 2.0 Hackathon", organized: "KSR College of Engineering", outcome: "Won Second Prize and received Cash Prize Rs 3000/-" },
        { sno: 9, name: "VIBE CODE - 24 Hour Hackathon", organized: "KSR College of Engineering", outcome: "Won Third Prize and Cash Prize Rs 5000/-" },
        { sno: 10, name: "Datathon 2.0", organized: "SRM Institute of Technology", outcome: "Won First Prize and Received Cash Prize of Rs 25,000/-" },
        { sno: 11, name: "Techzeal Hackathon", organized: "Sona College of Technology, Salem", outcome: "Won Second Prize and received a Cash Prize Rs 5,000/-" },
        { sno: 12, name: "Vector India Hackathon (Circuit C Sprint 2026)", organized: "Vector India Pvt Ltd, Chennai", outcome: "ECE-Won First Prize (Rs 30,000/-), EEE-Won Second Prize (Rs 20,000/-)" }
      ]
    },
    '2024-2025': {
      summary: { contests: 14, students: 516, achievements: 11 },
      list: [
        { sno: 1, name: "PES NEXUS Hackathon", organized: "Power & Energy Society Jeppiaar in collab with IEEE MAS YP", outcome: "Won First Prize" },
        { sno: 2, name: "Salem Build Expo", organized: "Salem Civil Engineering Association", outcome: "Team won third prize and received cash prize of INR 5000/-." },
        { sno: 3, name: "Engineer's Day Contest", organized: "Imagecon Academy", outcome: "Team secured 5th place with Rs 7000 free course offer." },
        { sno: 4, name: "Freshers Codewar Coding Contest", organized: "Park College of Engineering and Technology, Coimbatore", outcome: "Won Second Prize and received Cash Prize Rs 5000/-" },
        { sno: 5, name: "23rd ISTE – TN Section Annual Students' Convention 2025", organized: "Adhiyamaan College of Engineering", outcome: "Team won Second place in Hackathon" },
        { sno: 6, name: "ISTE Hackathon", organized: "Adhiyamaan College of Engineering", outcome: "Team secured the 3rd Runner-Up position" },
        { sno: 7, name: "IDEATHON 2K25 – Innovation Contest", organized: "RVS College of Engineering & Technology, Coimbatore", outcome: "Won Second Runner-Up and got Best Project Award." },
        { sno: 8, name: "Gen Brainiacs 24hrs Hackathon", organized: "PSNA College of Engineering and Technology, Dindigul", outcome: "Team won Runner up with a cash prize of Rs 6,000/-" },
        { sno: 9, name: "VIHANSA 2K25 Hackathon (48 Hours)", organized: "Sri Ramakrishna Institute of Technology, Coimbatore", outcome: "Team got best project award with a cash prize of ₹2,500" },
        { sno: 10, name: "Brainwave showcase test", organized: "Sengunthar Engineering College", outcome: "Team won First prize and received cash prize of INR 1000/-" },
        { sno: 11, name: "SINDHANAI'25 24hrs Hackathon", organized: "SRM TRP Engineering College, Trichy", outcome: "Team got Runner up with a cash prize of ₹5,000" }
      ]
    }
  };

  // National Level Contests
  const nationalContests = {
    '2025-2026': {
      summary: { contests: 42, students: 3726, achievements: 15 },
      list: [
        { sno: 1, name: "World Skills 2026 Competition (TN Skills 2025)", organized: "TNSDC under Naan Mudhalvan", outcome: "Won Third Prize and awarded Bronze Medal along with Cash Prize Rs 25,000/-" },
        { sno: 2, name: "Smart India Hackathon 2025 (8th Edition)", organized: "Ministry of Education", outcome: "Two teams reached Grand Finale at National Level (ECE & IT) and received certificates" },
        { sno: 3, name: "SAE India National Level Competition Embedded Systems", organized: "Christ College of Engineering, Kerala", outcome: "Overall 3rd Place (Rs 3000/-) & Best Hardware Design Award (Rs 1500/-)" },
        { sno: 4, name: "National Level Electric & Dirt Bike Design Racing Challenge", organized: "Karpagam College with Motor Sports Union, Coimbatore", outcome: "One team Won First Place and Received Cash Prize Rs 15,000/-" },
        { sno: 5, name: "National-Level Electric Bike Design Challenge 2025", organized: "Sri Ramakrishna Institute of Technology, Coimbatore", outcome: "Won First Place and Received Cash Prize Rs 50,000/-" },
        { sno: 6, name: "National Level Bicycle Design Challenge 2025", organized: "Prathyusha Engineering College, Chennai", outcome: "One team Won Third Place and Received Cash Prize Rs 5,000/-" },
        { sno: 7, name: "Indian E-Bike Championship", organized: "RPM International Circuit, Bhopal, MP", outcome: "Overall Winner from Tamil Nadu - Top 2 Position in National Level" },
        { sno: 8, name: "Electric Four Wheeler Design Challenge", organized: "SAE in association with SASTRA University, Thanjavur", outcome: "Team Won Third Place and Received Cash Prize Rs 25,000/-" },
        { sno: 9, name: "Code Sangram Hackathon", organized: "Alliance University, Bangalore", outcome: "Won Third Prize and received a Cash Prize Rs 30,000/-" },
        { sno: 10, name: "Electric Two Wheeler Design Challenge", organized: "Rajalakshmi Engineering College, Chennai", outcome: "Won First Prize" },
        { sno: 11, name: "Rallarz Dirt Bike Challenge", organized: "Rajalakshmi Engineering College, Chennai", outcome: "Won First Prize and received Best Innovation Award" },
        { sno: 12, name: "Quest Global Ingenium Contest 2026", organized: "Quest Global", outcome: "Team 1: Best Sustainable Project Award; Team 2: Popular Choice Award" },
        { sno: 13, name: "Electric and Dirt Bike Design Challenge 2026", organized: "Karpagam Institute of Technology, Coimbatore", outcome: "Won First Prize and received a Cash Prize Rs 15,000/-" },
        { sno: 14, name: "E-KART Endurance Event 2026", organized: "KPR Institute of Technology, Coimbatore", outcome: "Won Second Prize and received Cash Prize Rs 50,000/-" },
        { sno: 15, name: "Bicycle Design Challenge (8th Edition)", organized: "TKM College of Engineering, Kollam, Kerala", outcome: "Team 1: First Prize (Rs 8000/-); Team 2: First Prize (Rs 7500/-)" }
      ]
    },
    '2024-2025': {
      summary: { contests: 36, students: 6052, achievements: 17 },
      list: [
        { sno: 1, name: "ETHKL", organized: "Ethereum Foundation", outcome: "Winner of Worldcoin & Won pool prize from Scroll." },
        { sno: 2, name: "Electric Bike Design Challenge", organized: "Sri Ramakrishna Institute of Technology, Coimbatore", outcome: "Team got Rs 10,000 Cash prize & Best Manoeuvrability People's Choice." },
        { sno: 3, name: "Bicycle Design Challenge Competition", organized: "SAEISS", outcome: "Team got Rs 20,000 Cash prize & Best Design & Presentation Award." },
        { sno: 4, name: "Srushti Sangamam", organized: "ACIC, CBIT", outcome: "Team won First prize in Hackathon & received cash prize of INR 15,000/-" },
        { sno: 5, name: "Smart India Hackathon", organized: "Ministry of Education's Innovation Cell", outcome: "Team Mech Space got Rs 50,000/- Cash Prize & Internship Offers" },
        { sno: 6, name: "ZOHO Cliqtrix", organized: "ZOHO Corporation", outcome: "Got Internship Offer" },
        { sno: 7, name: "Electric Two Wheeler Design Challenge", organized: "SAEISS", outcome: "Team got Rs 7000 Cash prize & Best Maneuverability Award." },
        { sno: 8, name: "TCS Codevita Season 12", organized: "Tata Consultancy Services", outcome: "Got Placement Offer with 4.5 LPA" },
        { sno: 9, name: "Power Point Presentation", organized: "SLIDE MASTER, Salem", outcome: "Best Presentation award with Cash prize Rs 5000 & Rs 7000 course offer." },
        { sno: 10, name: "Infineon Hackathon", organized: "Infineon", outcome: "Got Internship (40K/11 Months) and Placement Offer with 13 LPA" },
        { sno: 11, name: "Design & Innovation Clinic 2025", organized: "CMTI – Central Manufacturing Tech Institute, Bengaluru", outcome: "Team Secured First Runner-Up with cash prize of Rs 20,000/-" },
        { sno: 12, name: "Design & Innovation Clinic 2025", organized: "CMTI – Central Manufacturing Tech Institute, Bengaluru", outcome: "Team Secured 3rd Runner-Up position with cash prize of ₹10,000/-" },
        { sno: 13, name: "National Autosports Mega E Bike Challenge 2025", organized: "Autosports India", outcome: "Team got Rs 15,000 Cash Prize & Best Maneuverability Award." },
        { sno: 14, name: "Electric Bike Design Challenge", organized: "Karpagam College of Engineering, Coimbatore", outcome: "Team got Rs 5000 Cash prize & Best Innovation Award." },
        { sno: 15, name: "National Level Electric Bike Designing & Racing", organized: "Karpagam College of Engineering, Coimbatore", outcome: "Team Secured Overall Second Prize with cash award of Rs 10,000/-" },
        { sno: 16, name: "Pentathon 2025", organized: "NCIIPC-AICTE", outcome: "Selected for Cybersecurity Internship Opportunity among Top 40 Finalists" },
        { sno: 17, name: "ALLIANCE ONE 3.0 [Code Sangram] (30 Hours)", organized: "Alliance University, Bangalore", outcome: "Won First Prize and awarded cash prize of INR 1 Lakh." }
      ]
    }
  };

  const activeData = levelTab === 'state' ? stateContests[yearTab] : nationalContests[yearTab];

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
              Corporate Contest Cell (CCC)
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
              About Corporate Contest Cell
            </div>

            <h2 className="font-['Graphik-Bold',sans-serif] font-extrabold tracking-tight leading-tight text-xl sm:text-2xl" style={{ color: '#224292' }}>
              Innovation & Hackathon Achievements – "Innovation Runs in the DNA of KIOTians!"
            </h2>

            <div className="space-y-4 text-[14px] font-normal text-slate-800 leading-[25.2px] text-justify">
              <p>
                Hackathons or Contests are an integral part of the innovation ecosystem at Knowledge Institute of Technology. These exciting events bring together a diverse set of students to tackle specific challenges or develop new products within a compressed time frame.
              </p>
              <p>
                By participating in corporate hackathons and national design challenges, students gain tremendous exposure, networking opportunities with peers, mentorship from senior industry professionals, internship offers, and early placement opportunities. At KIOT, winning hackathons and contests isn't just an achievement—it’s a tradition!
              </p>
            </div>
          </div>
        </motion.div>
      </div>

      {/* ─── LEVEL FILTER & GRAPHIC HEADERS ─── */}
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-10 mt-12">
        {/* LEVEL SWITCHER (STATE VS NATIONAL) */}
        <div className="flex justify-center mb-8">
          <div className="inline-flex p-1.5 rounded-2xl bg-slate-200 border border-slate-300 gap-2">
            <button
              onClick={() => setLevelTab('state')}
              className={`flex items-center gap-2 px-6 py-3 rounded-xl font-['Graphik-Bold',sans-serif] text-xs sm:text-sm font-bold transition-all duration-300 ${
                levelTab === 'state'
                  ? 'bg-[#224292] text-white shadow-md'
                  : 'text-slate-700 hover:text-[#224292]'
              }`}
            >
              <Flag size={16} className={levelTab === 'state' ? 'text-amber-400' : 'text-slate-500'} />
              State Level Contests
            </button>
            <button
              onClick={() => setLevelTab('national')}
              className={`flex items-center gap-2 px-6 py-3 rounded-xl font-['Graphik-Bold',sans-serif] text-xs sm:text-sm font-bold transition-all duration-300 ${
                levelTab === 'national'
                  ? 'bg-[#224292] text-white shadow-md'
                  : 'text-slate-700 hover:text-[#224292]'
              }`}
            >
              <Globe size={16} className={levelTab === 'national' ? 'text-amber-400' : 'text-slate-500'} />
              National Level Contests
            </button>
          </div>
        </div>

        {/* YEAR SWITCHER (2025-2026 VS 2024-2025) */}
        <div className="flex justify-center gap-3 mb-8">
          {['2025-2026', '2024-2025'].map((yr) => (
            <button
              key={yr}
              onClick={() => setYearTab(yr)}
              className={`px-4 py-2 rounded-xl text-xs font-bold border transition-all ${
                yearTab === yr
                  ? 'bg-amber-400 text-[#224292] border-amber-500 font-extrabold shadow-sm'
                  : 'bg-white text-slate-600 border-slate-200 hover:border-blue-300'
              }`}
            >
              AY {yr}
            </button>
          ))}
        </div>

        {/* SUMMARY STATS CARDS */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-4xl mx-auto mb-10"
        >
          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm text-center">
            <div className="w-10 h-10 rounded-xl bg-blue-50 text-[#224292] flex items-center justify-center mx-auto mb-2">
              <Calendar size={20} />
            </div>
            <p className="text-xs uppercase font-bold text-slate-500">Number of Contests</p>
            <p className="text-2xl font-black text-[#224292] mt-1">{activeData.summary.contests}</p>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm text-center">
            <div className="w-10 h-10 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center mx-auto mb-2">
              <Users size={20} />
            </div>
            <p className="text-xs uppercase font-bold text-slate-500">Students Participated</p>
            <p className="text-2xl font-black text-amber-600 mt-1">{activeData.summary.students}</p>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm text-center">
            <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center mx-auto mb-2">
              <Trophy size={20} />
            </div>
            <p className="text-xs uppercase font-bold text-slate-500">Major Achievements</p>
            <p className="text-2xl font-black text-emerald-600 mt-1">{activeData.summary.achievements}</p>
          </div>
        </motion.div>

        {/* DETAILED CONTESTS TABLE */}
        <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm max-w-6xl mx-auto">
          <div className="p-4 bg-slate-50 border-b border-slate-200 flex items-center justify-between">
            <h3 className="font-['Graphik-Bold',sans-serif] font-bold text-sm sm:text-base text-[#224292]">
              {levelTab === 'state' ? 'State Level' : 'National Level'} Major Achievement List ({yearTab})
            </h3>
            <span className="text-xs font-bold px-2.5 py-1 rounded bg-blue-100 text-[#224292]">
              {activeData.list.length} Featured Winners
            </span>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-[#224292] text-white text-xs sm:text-sm font-bold uppercase">
                  <th className="py-3.5 px-4 border-b border-blue-900 w-14 text-center">S.No</th>
                  <th className="py-3.5 px-4 border-b border-blue-900">Name of the Contest / Hackathon</th>
                  <th className="py-3.5 px-4 border-b border-blue-900">Organized By</th>
                  <th className="py-3.5 px-4 border-b border-blue-900">Major Outcome / Award & Cash Prize</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-xs sm:text-sm font-medium text-slate-700">
                {activeData.list.map((c, idx) => (
                  <tr key={idx} className="hover:bg-slate-50 transition-colors">
                    <td className="py-3.5 px-4 font-bold text-slate-500 text-center">{c.sno}</td>
                    <td className="py-3.5 px-4 font-bold text-[#224292]">{c.name}</td>
                    <td className="py-3.5 px-4 text-slate-700 font-semibold">{c.organized}</td>
                    <td className="py-3.5 px-4 font-bold text-emerald-800 leading-relaxed bg-emerald-50/40">
                      {c.outcome}
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
