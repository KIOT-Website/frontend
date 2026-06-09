import { useState } from 'react'
import { motion } from 'framer-motion'
import srinivasanImg from '../assets/main/srinivasan.webp'
import principalImg from '../assets/main/KIOT-Principal-Message-Web-2025.webp'
import secretaryImg from '../assets/main/Secretarys-Message-KIOTT.webp'
import treasurerImg from '../assets/main/Mr.V.Sureshkumar, Treasurer.webp'
import { Quote, GraduationCap, Sparkles } from 'lucide-react'

// HOD Image Imports
import prabhakaranImg from '../assets/dir and hod/Dr.K.S.Prabhakaran.webp'
import saravananImg from '../assets/dir and hod/Dr. V. Saravanan.webp'
import kamatchiKannanImg from '../assets/dir and hod/Dr.Kamatchi Kannan V.webp'
import prasathCivilImg from '../assets/dir and hod/Dr.P.PRASATH.webp'
import sachidhanandamImg from '../assets/dir and hod/Dr.P.Sachidhanandam.webp'
import sasikumarImg from '../assets/dir and hod/Dr. B. Sasikumar AIDS - HOD.webp'
import ramkumarImg from '../assets/dir and hod/Dr.M.Ramkumar.webp'
import karthikeyanImg from '../assets/dir and hod/Mr.T.KARTHIKEYAN.webp'
import maragatharajImg from '../assets/dir and hod/Dr. S. Maragatharaj.webp'
import venkatesanImg from '../assets/dir and hod/Dr.T.Venkatesan.webp'
import vijayakumarImg from '../assets/dir and hod/Dr.S.Vijaya Kumar.webp'
import mohanapriyaImg from '../assets/dir and hod/Dr. S. Mohanapriya.webp'

// Director Image Imports
import thangavelImg from '../assets/dir and hod/Dr. M. Thangavel.webp'
import stephenImg from '../assets/dir and hod/MAHE2266.webp'
import rajendranImg from '../assets/dir and hod/Dr. P. Rajendran.png'
import bgFacultyImg from '../assets/Faculity/background faculty.webp'
import navaneethankrishnanImg from '../assets/dir and hod/Dr.P.Navaneethankrishnan.webp'
import rkumarImg from '../assets/Faculity/cse/Dr.R.KUMAR.webp'
import ilangkumaranImg from '../assets/dir and hod/Dr.M.Ilangkumaran.webp'
import kalpanadeviImg from '../assets/dir and hod/Dr.S.Kalpanadevi.webp'
import shanmugasundaramImg from '../assets/dir and hod/Dr. P. Shanmuga Sundaram.webp'
import santhiyakumariImg from '../assets/dir and hod/Dr. N. Santhiyakumari.webp'
import vkumarImg from '../assets/Faculity/cse/Dr.V.KUMAR.webp'
import sathyanathanImg from '../assets/dir and hod/Dr.M.Sathyanathan.webp'
import munirajImg from '../assets/dir and hod/Dr.C.Muniraj.webp'
import sakthivelImg from '../assets/dir and hod/Mr.D.Sakthivel.webp'

const directors = [
  { name: "Dr. M. Thangavel", role: "Director / CDT, KIOT", image: thangavelImg, initials: "MT" },
  { name: "Dr. A. Stephen", role: "Director / MBA, KIOT", image: stephenImg, initials: "AS" },
  { name: "Dr. P. Rajendran", role: "Director / Placement & III, KIOT", image: rajendranImg, initials: "PR" },
  { name: "Dr. P. Navaneethankrishnan", role: "Director / Student Affairs, KIOT", image: navaneethankrishnanImg, initials: "PN" },
  { name: "Dr. R. Kumar", role: "Director / CDDA, KIOT", image: rkumarImg, initials: "RK" },
  { name: "Dr. M. Ilangkumaran", role: "Controller of Examination, KIOT", image: ilangkumaranImg, initials: "MI" },
  { name: "Dr. S. Kalpanadevi", role: "Director – CDDA, KIOT", image: kalpanadeviImg, initials: "SK" },
  { name: "Dr. P. Shanmuga Sundaram", role: "Director – Outreach & Admissions, KIOT", image: shanmugasundaramImg, initials: "PS" },
  { name: "Dr. N. Santhiyakumari", role: "Director – WE, HE & CE", image: santhiyakumariImg, initials: "NS" },
  { name: "Dr. V. Kumar", role: "Director – Infra. Management", image: vkumarImg, initials: "VK" },
  { name: "Dr. M. Sathyanathan", role: "Director - IQAC", image: sathyanathanImg, initials: "MS" },
  { name: "Dr. C. Muniraj", role: "Director - Academics", image: munirajImg, initials: "CM" },
  { name: "Mr. D. Sakthivel", role: "Administrative Director, KIOT", image: sakthivelImg, initials: "DS" }
];

const hods = [
  { name: "Dr. K.S. Prabhakaran", role: "HOD / Mech., KIOT", qualification: "M.E., Ph.D.", category: "ug", image: prabhakaranImg, initials: "KP" },
  { name: "Dr. V. Saravanan", role: "HOD / ECE, KIOT", qualification: "M.E., Ph.D.", category: "ug", image: saravananImg, initials: "VS" },
  { name: "Dr. V. Kamatchi Kannan", role: "HOD / EEE, KIOT", qualification: "M.E., Ph.D.", category: "ug", image: kamatchiKannanImg, initials: "VK" },
  { name: "Dr. P. Prasath", role: "HOD / Civil, KIOT", qualification: "M.E., Ph.D.", category: "ug", image: prasathCivilImg, initials: "PP" },
  { name: "Dr. P. Sachidhanandam", role: "HOD / IT, KIOT", qualification: "M.E., Ph.D.", category: "ug", image: sachidhanandamImg, initials: "PS" },
  { name: "Dr. B. Sasikumar", role: "HOD / AI & DS, KIOT", qualification: "M.E., (Ph.D.)", category: "ug", image: sasikumarImg, initials: "BS" },
  { name: "Dr. M. Ramkumar", role: "HOD / CSBS, KIOT", qualification: "M.E., Ph.D.", category: "ug", image: ramkumarImg, initials: "MR" },
  { name: "Mr. T. Karthikeyan", role: "HOD / CSE, KIOT", qualification: "M.E., (Ph.D.)", category: "ug", image: karthikeyanImg, initials: "TK" },
  { name: "Dr. S. Maragatharaj", role: "HOD / ECX, KIOT", qualification: "B.E., M.E., Ph.D.", category: "ug", image: maragatharajImg, initials: "SM" },
  { name: "Dr. T. Venkatesan", role: "HOD / MBA, KIOT", qualification: "MBA, Ph.D.", category: "pg", image: venkatesanImg, initials: "TV" },
  { name: "Dr. S. Vijayakumar", role: "HOD – Incharge / MBA- IEV, KIOT", qualification: "MBA, Ph.D.", category: "pg", image: vijayakumarImg, initials: "SV" },
  { name: "Dr. S. Mohanapriya", role: "HOD / MCA, KIOT", qualification: "MCA, Ph.D.", category: "pg", image: mohanapriyaImg, initials: "SM" }
];

export default function HeadOfDepartmentPage() {
  const [activeFilter, setActiveFilter] = useState('all')

  return (
    <div className="min-h-screen bg-[#F8FAFC] font-graphik pt-10 pb-20 selection:bg-[#ffc107]/20 relative overflow-hidden">
      {/* Decorative Page Background Elements */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-to-bl from-[#224292]/3 via-transparent to-transparent rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-[20%] left-[-100px] w-[400px] h-[400px] bg-[#ffc107]/2 rounded-full blur-[80px] pointer-events-none" />
      
      {/* Subtle Grid Overlay */}
      <div className="absolute inset-0 opacity-[0.015] pointer-events-none" 
           style={{ backgroundImage: 'radial-gradient(#224292 0.5px, transparent 0.5px)', backgroundSize: '35px 35px' }} />

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Great+Vibes&display=swap');
        .signature-font {
          font-family: 'Great Vibes', cursive;
        }
      `}</style>

      <div className="max-w-5xl mx-auto px-6 lg:px-8 space-y-20 relative z-10">
        
        {/* Page Hero Header */}
        <motion.div 
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto space-y-3 mb-6"
        >
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-graphik font-semibold text-[#224292] mb-4 tracking-tighter leading-tight">
            Heads of the <span className="text-[#ffc107]">Institution</span>
          </h1>

          <div className="flex items-center justify-center gap-2 mb-6 md:mb-8">
            <div className="w-12 h-[1px] bg-[#ffc107]" />
            <div className="w-2 h-2 rounded-full bg-[#ffc107]" />
            <div className="w-12 h-[1px] bg-[#ffc107]" />
          </div>

          <p className="text-sm md:text-[15px] text-slate-500 leading-relaxed max-w-2xl mx-auto font-normal">
            Meet the distinguished visionaries driving academic excellence, administrative rigour, and future-focused professional development at the Knowledge Institute of Technology.
          </p>
        </motion.div>

        {/* 1. Executive Chairman: Dr. PSS. Srinivasan */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-white rounded-[1.75rem] shadow-[0_15px_40px_rgba(34,66,146,0.05)] border border-slate-100 flex flex-col lg:flex-row overflow-hidden group/card hover:shadow-[0_25px_55px_rgba(34,66,146,0.08)] transition-all duration-500"
        >
          {/* Left Panel: Graphic Background and Image */}
          <div className="w-full lg:w-[35%] bg-gradient-to-b from-[#224292] to-[#122b68] relative flex flex-col items-center justify-center p-6 lg:p-8 overflow-hidden shrink-0 min-h-[290px]">
            {/* Grid Pattern Overlay */}
            <div 
              className="absolute inset-0 opacity-[0.08] pointer-events-none" 
              style={{ backgroundImage: 'radial-gradient(white 1px, transparent 1px)', backgroundSize: '16px 16px' }}
            />
            {/* Curved background shapes */}
            <div className="absolute -left-10 -bottom-10 w-36 h-36 rounded-full bg-white/5 blur-xl pointer-events-none" />
            <div className="absolute -right-10 -top-10 w-36 h-36 rounded-full bg-[#ffc107]/10 blur-xl pointer-events-none" />
            
            <div className="relative group/img flex items-center justify-center">
              {/* Outer rotating/dashed rings */}
              <div className="absolute w-44 h-44 rounded-full border border-dashed border-[#ffc107]/30 group-hover/img:rotate-45 transition-transform duration-[15s] ease-linear pointer-events-none" />
              <div className="absolute w-38 h-38 rounded-full border border-dashed border-white/10 group-hover/img:-rotate-45 transition-transform duration-[15s] ease-linear pointer-events-none" />
              
              {/* Profile Image Frame */}
              <div className="relative w-32 h-32 md:w-34 md:h-34 rounded-full p-1 bg-gradient-to-tr from-[#ffc107] to-[#e0a800] shadow-[0_12px_28px_rgba(0,0,0,0.25)] z-10 overflow-hidden group-hover/img:scale-[1.02] transition-transform duration-500">
                <div className="w-full h-full rounded-full overflow-hidden bg-white border-2 border-white shadow-inner">
                  <img 
                    src={srinivasanImg} 
                    alt="Dr. P.S.S. Srinivasan" 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover/img:scale-105"
                  />
                </div>
              </div>
            </div>

            {/* Floating Role Pill */}
            <div className="mt-5 z-20 bg-gradient-to-r from-[#1e3a8a]/90 to-[#122b68]/95 backdrop-blur-sm px-5 py-1.5 rounded-xl border border-white/10 shadow-[0_8px_20px_rgba(0,0,0,0.2)] text-center max-w-[240px]">
              <div className="text-[#ffc107] text-[9px] font-black uppercase tracking-[0.2em] mb-0.5">EXECUTIVE CHAIRMAN</div>
              <div className="text-white/70 text-[8px] font-bold tracking-wider">KIOT, Salem, Tamil Nadu</div>
            </div>
          </div>

          {/* Right Panel: Content Details */}
          <div className="flex-1 p-6 lg:p-8 flex flex-col justify-center text-left">
            <div>
              <h2 className="text-2xl font-bold text-[#224292] tracking-tight">
                Dr. PSS. Srinivasan
              </h2>
              <div className="flex flex-col sm:flex-row sm:items-center gap-1.5 mt-0.5">
                <span className="text-[13px] font-bold text-slate-500">Founder & President</span>
                <span className="hidden sm:inline text-slate-300">|</span>
                <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">B.E., M.Tech. (IIT-B), Ph.D., MISTE., ISHMT., FMFPI.</span>
              </div>
            </div>


            {/* Message Description */}
            <p className="text-slate-600 text-[13px] sm:text-[13.5px] leading-relaxed text-justify font-normal">
              At KIOT, we have rich experience in Engineering Education in India and abroad. We believe in identifying individual talents, nurturing them and transforming them into world class engineers and professionals. If you are prepared to be a path breaking professional poised to make miracles on the earth, the right destination is KIOT. Learn from the masters who know nothing less than excellence. Come on; let us all make a happy heaven on the earth.
            </p>

            {/* Signature */}
            <div className="mt-4 pt-2 border-t border-slate-100 flex flex-col items-end self-end">
              <span className="signature-font text-2xl text-[#224292] font-semibold border-b border-[#ffc107] pb-0.5 px-3 leading-none">
                Dr. PSS. Srinivasan
              </span>
            </div>
          </div>
        </motion.div>

        {/* 2. Principal: Dr. K. Visagavel */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-white rounded-[1.75rem] shadow-[0_15px_40px_rgba(34,66,146,0.05)] border border-slate-100 flex flex-col lg:flex-row-reverse overflow-hidden group/card hover:shadow-[0_25px_55px_rgba(34,66,146,0.08)] transition-all duration-500"
        >
          {/* Left Panel: Graphic Background and Image */}
          <div className="w-full lg:w-[35%] bg-gradient-to-b from-[#224292] to-[#122b68] relative flex flex-col items-center justify-center p-6 lg:p-8 overflow-hidden shrink-0 min-h-[290px]">
            {/* Grid Pattern Overlay */}
            <div 
              className="absolute inset-0 opacity-[0.08] pointer-events-none" 
              style={{ backgroundImage: 'radial-gradient(white 1px, transparent 1px)', backgroundSize: '16px 16px' }}
            />
            {/* Curved background shapes */}
            <div className="absolute -left-10 -bottom-10 w-36 h-36 rounded-full bg-white/5 blur-xl pointer-events-none" />
            <div className="absolute -right-10 -top-10 w-36 h-36 rounded-full bg-[#ffc107]/10 blur-xl pointer-events-none" />
            
            <div className="relative group/img flex items-center justify-center">
              {/* Outer rotating/dashed rings */}
              <div className="absolute w-44 h-44 rounded-full border border-dashed border-[#ffc107]/30 group-hover/img:rotate-45 transition-transform duration-[15s] ease-linear pointer-events-none" />
              <div className="absolute w-38 h-38 rounded-full border border-dashed border-white/10 group-hover/img:-rotate-45 transition-transform duration-[15s] ease-linear pointer-events-none" />
              
              {/* Profile Image Frame */}
              <div className="relative w-32 h-32 md:w-34 md:h-34 rounded-full p-1 bg-gradient-to-tr from-[#224292] to-[#1e3a8a] shadow-[0_12px_28px_rgba(0,0,0,0.25)] z-10 overflow-hidden group-hover/img:scale-[1.02] transition-transform duration-500">
                <div className="w-full h-full rounded-full overflow-hidden bg-white border-2 border-white shadow-inner">
                  <img 
                    src={principalImg} 
                    alt="Dr. K. Visagavel" 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover/img:scale-105"
                    style={{ objectPosition: 'center 15%' }}
                  />
                </div>
              </div>
            </div>

            {/* Floating Role Pill */}
            <div className="mt-5 z-20 bg-gradient-to-r from-[#1e3a8a]/90 to-[#122b68]/95 backdrop-blur-sm px-5 py-1.5 rounded-xl border border-white/10 shadow-[0_8px_20px_rgba(0,0,0,0.2)] text-center max-w-[240px]">
              <div className="text-[#ffc107] text-[9px] font-black uppercase tracking-[0.2em] mb-0.5">PRINCIPAL</div>
              <div className="text-white/70 text-[8px] font-bold tracking-wider">KIOT, Salem, Tamil Nadu</div>
            </div>
          </div>

          {/* Right Panel: Content Details */}
          <div className="flex-1 p-6 lg:p-8 flex flex-col justify-center text-left">
            <div>
              <h2 className="text-2xl font-bold text-[#224292] tracking-tight">
                Dr. K. Visagavel
              </h2>
              <div className="flex flex-col sm:flex-row sm:items-center gap-1.5 mt-0.5">
                <span className="text-[13px] font-bold text-slate-500">Principal</span>
                <span className="hidden sm:inline text-slate-300">|</span>
                <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">B.E., M.E., Ph.D.</span>
              </div>
            </div>


            {/* Message Description */}
            <div className="text-slate-600 text-[13px] sm:text-[13.5px] leading-relaxed text-justify space-y-2 font-normal">
              <p>
                Dear Students, Welcome to the Knowledge Institute of Technology, Salem! At KIOT, we aim to provide a transformative education that blends academic rigor with practical skills to shape the leaders of tomorrow.
              </p>
              <p>
                We are committed to fostering a holistic learning environment, enriched by state-of-the-art infrastructure, industry collaborations, and extracurricular opportunities. I encourage you to actively participate in academic and co-curricular activities, network with peers and mentors, and embrace the culture of continuous learning.
              </p>
              <p>
                Together, let us strive to make a positive difference in our communities and the world. Wishing you a fulfilling and successful academic journey ahead!
              </p>
            </div>

            {/* Signature */}
            <div className="mt-4 pt-2 border-t border-slate-100 flex flex-col items-end self-end">
              <span className="signature-font text-2xl text-[#224292] font-semibold border-b border-[#ffc107] pb-0.5 px-3 leading-none">
                Dr. K. Visagavel
              </span>
            </div>
          </div>
        </motion.div>

        {/* 3. Board of Directors Section */}
        <div className="space-y-8 pt-6">
          <div className="text-center">
            <h2 className="text-3xl font-semibold text-[#224292] tracking-tighter">
              Board of <span className="text-[#ffc107]">Directors</span>
            </h2>
            <div className="flex items-center justify-center gap-2 mt-2">
              <div className="w-12 h-[1px] bg-[#ffc107]" />
              <div className="w-2 h-2 rounded-full bg-[#ffc107]" />
              <div className="w-12 h-[1px] bg-[#ffc107]" />
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Secretary: Dr. J. Kumar */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-white rounded-[1.5rem] shadow-[0_15px_40px_rgba(34,66,146,0.04)] border border-slate-100 flex flex-col sm:flex-row overflow-hidden group hover:shadow-[0_25px_50px_rgba(34,66,146,0.08)] transition-all duration-500"
            >
              {/* Left Panel: Graphic Background and Image */}
              <div className="w-full sm:w-[40%] bg-gradient-to-b from-[#224292] to-[#122b68] relative flex flex-col items-center justify-center p-6 overflow-hidden shrink-0 min-h-[220px]">
                <div className="absolute inset-0 opacity-[0.08] pointer-events-none" style={{ backgroundImage: 'radial-gradient(white 1px, transparent 1px)', backgroundSize: '16px 16px' }} />
                <div className="relative w-28 h-28 rounded-full p-1 bg-gradient-to-tr from-[#ffc107] to-[#e0a800] shadow-lg overflow-hidden">
                  <div className="w-full h-full rounded-full overflow-hidden bg-white border border-white shadow-inner">
                    <img src={secretaryImg} alt="Dr. J. Kumar" className="w-full h-full object-cover" />
                  </div>
                </div>
                <div className="mt-4 z-20 bg-gradient-to-r from-[#1e3a8a]/90 to-[#122b68]/95 px-4 py-1 rounded-xl border border-white/10 shadow text-center">
                  <div className="text-[#ffc107] text-[8px] font-black uppercase tracking-wider">SECRETARY</div>
                  <div className="text-white/70 text-[7px] font-bold tracking-wider">KIOTT, Salem</div>
                </div>
              </div>
              {/* Right Panel: Content */}
              <div className="flex-1 p-6 flex flex-col justify-center text-left">
                <h3 className="text-xl font-bold text-[#224292] leading-tight">Dr. J. Kumar</h3>
                <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mt-0.5">B.E., M.Tech. (IIT-M), Ph.D., FIE.</p>
                <p className="text-slate-600 text-[12.5px] leading-relaxed text-justify mt-3 font-normal line-clamp-5">
                  Greetings! We are dedicated to providing our students with a world-class learning experience that prepares them for the challenges ahead, in addition to delivering a superior education. Through our collaborations with universities worldwide, we have come to understand education as a journey that goes beyond just academic achievement.
                </p>
              </div>
            </motion.div>

            {/* Treasurer: Mr. V. Sureshkumar */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="bg-white rounded-[1.5rem] shadow-[0_15px_40px_rgba(34,66,146,0.04)] border border-slate-100 flex flex-col sm:flex-row overflow-hidden group hover:shadow-[0_25px_50px_rgba(34,66,146,0.08)] transition-all duration-500"
            >
              {/* Left Panel: Graphic Background and Image */}
              <div className="w-full sm:w-[40%] bg-gradient-to-b from-[#224292] to-[#122b68] relative flex flex-col items-center justify-center p-6 overflow-hidden shrink-0 min-h-[220px]">
                <div className="absolute inset-0 opacity-[0.08] pointer-events-none" style={{ backgroundImage: 'radial-gradient(white 1px, transparent 1px)', backgroundSize: '16px 16px' }} />
                <div className="relative w-28 h-28 rounded-full p-1 bg-gradient-to-tr from-[#ffc107] to-[#e0a800] shadow-lg overflow-hidden">
                  <div className="w-full h-full rounded-full overflow-hidden bg-white border border-white shadow-inner">
                    <img src={treasurerImg} alt="Mr. V. Sureshkumar" className="w-full h-full object-cover" />
                  </div>
                </div>
                <div className="mt-4 z-20 bg-gradient-to-r from-[#1e3a8a]/90 to-[#122b68]/95 px-4 py-1 rounded-xl border border-white/10 shadow text-center">
                  <div className="text-[#ffc107] text-[8px] font-black uppercase tracking-wider">TREASURER</div>
                  <div className="text-white/70 text-[7px] font-bold tracking-wider">KIOTT, Salem</div>
                </div>
              </div>
              {/* Right Panel: Content */}
              <div className="flex-1 p-6 flex flex-col justify-center text-left">
                <h3 className="text-xl font-bold text-[#224292] leading-tight">Mr. V. Sureshkumar</h3>
                <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mt-0.5">B.E.</p>
                <p className="text-slate-600 text-[12.5px] leading-relaxed text-justify mt-3 font-normal line-clamp-5">
                  Greetings! We are dedicated to providing our students with a world-class learning experience that prepares them for the challenges ahead, in addition to delivering a superior education. Through our collaborations with universities worldwide, we have come to understand education as a journey that goes beyond just academic achievement.
                </p>
              </div>
            </motion.div>
          </div>
        </div>

        {/* 4. Institutional Directors Section */}
        <div className="space-y-8 pt-6">
          <div className="text-center">
            <h2 className="text-3xl font-semibold text-[#224292] tracking-tighter">
              Institutional <span className="text-[#ffc107]">Directors</span>
            </h2>
            <div className="flex items-center justify-center gap-2 mt-2">
              <div className="w-12 h-[1px] bg-[#ffc107]" />
              <div className="w-2 h-2 rounded-full bg-[#ffc107]" />
              <div className="w-12 h-[1px] bg-[#ffc107]" />
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {directors.map((director, idx) => (
              <motion.div
                key={director.role}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: (idx % 4) * 0.05 }}
                className="bg-white p-5 rounded-2xl border border-slate-100 shadow-sm flex flex-col items-center text-center hover:shadow-md hover:border-[#224292]/25 transition-all duration-300 group"
              >
                <div 
                  className="relative w-44 h-44 mb-4 group-hover:scale-105 transition-transform duration-300 rounded-2xl overflow-hidden"
                  style={{ backgroundImage: `url("${bgFacultyImg}")`, backgroundSize: 'cover', backgroundPosition: 'center' }}
                >
                  {director.image ? (
                    <img src={director.image} alt={director.name} className="w-full h-full object-contain relative z-10" />
                  ) : (
                    <div className="w-full h-full rounded-full bg-gradient-to-br from-[#224292] to-[#122b68] flex items-center justify-center text-white font-bold text-lg select-none shadow-inner">
                      {director.initials}
                    </div>
                  )}
                </div>

                <h4 className="text-[14px] font-bold text-[#224292] leading-tight group-hover:text-[#ffc107] transition-colors font-graphik">{director.name}</h4>
                <span className="mt-3 px-3 py-1 bg-[#224292]/5 text-[#224292] text-[10px] font-black tracking-wider uppercase rounded-lg font-graphik">
                  {director.role}
                </span>
              </motion.div>
            ))}
          </div>
        </div>

        {/* 5. Head of the Departments Section */}
        <div className="space-y-8 pt-6">
          <div className="text-center">
            <h2 className="text-3xl font-semibold text-[#224292] tracking-tighter">
              Head of the <span className="text-[#ffc107]">Departments</span>
            </h2>
            <div className="flex items-center justify-center gap-2 mt-2">
              <div className="w-12 h-[1px] bg-[#ffc107]" />
              <div className="w-2 h-2 rounded-full bg-[#ffc107]" />
              <div className="w-12 h-[1px] bg-[#ffc107]" />
            </div>
          </div>

          {/* Filter Tabs */}
          <div className="flex flex-wrap justify-center gap-2 md:gap-3 px-2">
            {['all', 'ug', 'pg'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveFilter(tab)}
                className={`px-4 py-2 md:px-6 md:py-2.5 rounded-full text-[10px] sm:text-xs font-black uppercase tracking-widest transition-all duration-300 border shrink-0 ${
                  activeFilter === tab
                  ? 'bg-[#224292] text-white border-[#224292] shadow-md shadow-[#224292]/20'
                  : 'bg-white text-[#224292] border-slate-200 hover:border-[#224292] hover:bg-[#224292]/5'
                }`}
              >
                {tab === 'all' ? 'All Departments' : tab === 'ug' ? 'Undergraduate (UG)' : 'Postgraduate (PG)'}
              </button>
            ))}
          </div>

          {/* HOD Cards Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {hods.filter(h => activeFilter === 'all' || h.category === activeFilter).map((hod) => (
              <motion.div
                key={hod.role}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4 }}
                className="bg-white p-5 rounded-2xl border border-slate-100 shadow-sm flex flex-col items-center text-center hover:shadow-md hover:border-[#224292]/25 transition-all duration-300 group"
              >
                {/* Image/Avatar Frame */}
                <div 
                  className="relative w-44 h-44 mb-4 group-hover:scale-105 transition-transform duration-300 rounded-2xl overflow-hidden"
                  style={{ backgroundImage: `url("${bgFacultyImg}")`, backgroundSize: 'cover', backgroundPosition: 'center' }}
                >
                  {hod.image ? (
                    <img src={hod.image} alt={hod.name} className="w-full h-full object-contain relative z-10" />
                  ) : (
                    <div className="w-full h-full rounded-full bg-gradient-to-br from-[#224292] to-[#122b68] flex items-center justify-center text-white font-bold text-lg select-none shadow-inner">
                      {hod.initials}
                    </div>
                  )}
                </div>

                <h4 className="text-[14px] font-bold text-[#224292] leading-tight group-hover:text-[#ffc107] transition-colors">{hod.name}</h4>
                <p className="text-[10px] text-slate-400 font-bold uppercase tracking-wider mt-0.5">{hod.qualification}</p>
                
                <span className="mt-3 px-3 py-1 bg-[#224292]/5 text-[#224292] text-[10px] font-black tracking-wider uppercase rounded-lg">
                  {hod.role}
                </span>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </div>
  )
}
