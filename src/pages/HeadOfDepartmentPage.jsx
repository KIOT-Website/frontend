import { useState } from 'react'
import { motion } from 'framer-motion'
import srinivasanImg from '../assets/dir and hod/Dr. PSS. Srinivasan.jpg'
import principalImg from '../assets/dir and hod/Principal.png'
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
import vijayakumarImg from '../assets/dir and hod/Dr. S. Vijayakumar.png'
import mohanapriyaImg from '../assets/dir and hod/Dr. S. Mohanapriya.webp'

// Director Image Imports
import thangavelImg from '../assets/dir and hod/Dr. M. Thangavel.webp'
import stephenImg from '../assets/dir and hod/MBA Director.png'
import rajendranImg from '../assets/dir and hod/Dr. P. Rajendran.png'
import bgFacultyImg from '../assets/Faculity/background faculty.webp'
import navaneethankrishnanImg from '../assets/dir and hod/Dr.P.Navaneethankrishnan.webp'
import rkumarImg from '../assets/dir and hod/Dr. R. Kumar.jpg'
import ilangkumaranImg from '../assets/dir and hod/Dr.M.Ilangkumaran.webp'
import kalpanadeviImg from '../assets/dir and hod/Dr.S.Kalpanadevi.webp'
import shanmugasundaramImg from '../assets/dir and hod/Dr. P. Shanmuga Sundaram.webp'
import santhiyakumariImg from '../assets/dir and hod/Dr. N. Santhiyakumari.webp'
import vkumarImg from '../assets/dir and hod/Dr. V. Kumar.jpg'
import sathyanathanImg from '../assets/dir and hod/Dr.M.Sathyanathan.webp'
import munirajImg from '../assets/dir and hod/Dr.C.Muniraj.webp'
import sakthivelImg from '../assets/dir and hod/Mr.D.Sakthivel.webp'

const directors = [
  { name: "Dr. Thangavel M", role: "Director – CDT", image: thangavelImg, initials: "MT" },
  { name: "Dr. Stephen A", role: "Director – MBA", image: stephenImg, initials: "AS" },
  { name: "Dr. Rajendran P", role: "Director – Placement & III", image: rajendranImg, initials: "PR" },
  { name: "Dr. Navaneethankrishnan P", role: "Director – Student Affairs", image: navaneethankrishnanImg, initials: "PN" },
  { name: "Dr. Kumar R", role: "Director – CDDA", image: rkumarImg, initials: "RK" },
  { name: "Dr. Ilangkumaran M", role: "Controller of Examinations", image: ilangkumaranImg, initials: "MI" },
  { name: "Dr. Kalpanadevi S", role: "Director – CDDA", image: kalpanadeviImg, initials: "SK" },
  { name: "Dr. Shanmuga Sundaram P", role: "Director – Outreach & Admissions", image: shanmugasundaramImg, initials: "PS" },
  { name: "Dr. Santhiyakumari N", role: "Director – WE, HE & CE", image: santhiyakumariImg, initials: "NS" },
  { name: "Dr. Kumar V", role: "Director – Infra. Management", image: vkumarImg, initials: "VK" },
  { name: "Dr. Sathyanathan M", role: "Director – IQAC", image: sathyanathanImg, initials: "MS" },
  { name: "Dr. Muniraj C", role: "Director – Academics", image: munirajImg, initials: "CM" },
  { name: "Mr. Sakthivel D", role: "Director – Administration", image: sakthivelImg, initials: "DS" }
];

const hods = [
  { name: "Dr. Prabhakaran K S", role: "HOD – MECH", category: "ug", image: prabhakaranImg, initials: "KP" },
  { name: "Dr. Saravanan V", role: "HOD – ECE", category: "ug", image: saravananImg, initials: "VS" },
  { name: "Dr. Kamatchi Kannan V", role: "HOD – EEE", category: "ug", image: kamatchiKannanImg, initials: "VK" },
  { name: "Dr. Prasath P", role: "HOD – CIVIL", category: "ug", image: prasathCivilImg, initials: "PP" },
  { name: "Dr. Sachidhanandam P", role: "HOD – IT", category: "ug", image: sachidhanandamImg, initials: "PS" },
  { name: "Dr. Sasikumar B", role: "HOD – AI & DS", category: "ug", image: sasikumarImg, initials: "BS" },
  { name: "Dr. Ramkumar M", role: "HOD – CSBS", category: "ug", image: ramkumarImg, initials: "MR" },
  { name: "Mr. Karthikeyan T", role: "HOD – CSE", category: "ug", image: karthikeyanImg, initials: "TK" },
  { name: "Dr. Maragatharaj S", role: "HOD – ECX", category: "ug", image: maragatharajImg, initials: "SM" },
  { name: "Dr. Venkatesan T", role: "HOD – MBA", category: "pg", image: venkatesanImg, initials: "TV" },
  { name: "Dr. Vijayakumar S", role: "HOD – Incharge / MBA-IEV", category: "pg", image: vijayakumarImg, initials: "SV" },
  { name: "Dr. Mohanapriya S", role: "HOD – MCA", category: "pg", image: mohanapriyaImg, initials: "SM" }
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

      <div className="max-w-7xl mx-auto px-6 lg:px-8 space-y-20 relative z-10">
        
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
              <div className="absolute w-56 h-56 rounded-full border border-dashed border-[#ffc107]/30 group-hover/img:rotate-45 transition-transform duration-[15s] ease-linear pointer-events-none" />
              <div className="absolute w-48 h-48 rounded-full border border-dashed border-white/10 group-hover/img:-rotate-45 transition-transform duration-[15s] ease-linear pointer-events-none" />
              
              {/* Profile Image Frame */}
              <div className="relative w-40 h-40 md:w-44 md:h-44 rounded-full p-1 bg-gradient-to-tr from-[#ffc107] to-[#e0a800] shadow-[0_12px_28px_rgba(0,0,0,0.25)] z-10 overflow-hidden group-hover/img:scale-[1.02] transition-transform duration-500">
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
              <div className="text-white text-[8px] font-bold tracking-wider">KIOT, Salem, Tamil Nadu</div>
            </div>
          </div>

          {/* Right Panel: Content Details */}
          <div className="flex-1 p-6 lg:p-8 flex flex-col justify-center text-left">
            <div>
              <h2 className="text-2xl font-bold text-[#224292] tracking-tight">
                Dr. PSS. Srinivasan
              </h2>
              <div className="flex flex-col sm:flex-row sm:items-center gap-1.5 mt-0.5">
                <span className="text-[13px] font-bold text-slate-500">Executive Chairman</span>
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
              <div className="absolute w-56 h-56 rounded-full border border-dashed border-[#ffc107]/30 group-hover/img:rotate-45 transition-transform duration-[15s] ease-linear pointer-events-none" />
              <div className="absolute w-48 h-48 rounded-full border border-dashed border-white/10 group-hover/img:-rotate-45 transition-transform duration-[15s] ease-linear pointer-events-none" />
              
              {/* Profile Image Frame */}
              <div className="relative w-40 h-40 md:w-44 md:h-44 rounded-full p-1 bg-gradient-to-tr from-[#224292] to-[#1e3a8a] shadow-[0_12px_28px_rgba(0,0,0,0.25)] z-10 overflow-hidden group-hover/img:scale-[1.02] transition-transform duration-500">
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
              <div className="text-white text-[8px] font-bold tracking-wider">KIOT, Salem, Tamil Nadu</div>
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

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-6">
            {directors.map((director, idx) => (
              <motion.div
                key={director.role}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: (idx % 4) * 0.05 }}
                className="bg-white rounded-[1.25rem] border border-slate-100 shadow-sm flex flex-col overflow-hidden hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group"
              >
                {/* Image Section */}
                <div 
                  className="relative w-full h-[170px] sm:h-[200px] md:h-[240px] overflow-hidden"
                >
                  {director.image ? (
                    <img 
                      src={director.image} 
                      alt={director.name} 
                      className="w-full h-full object-cover object-top relative z-10" 
                    />
                  ) : (
                    <div className="w-full h-full bg-gradient-to-br from-[#224292] to-[#122b68] flex items-center justify-center text-white font-bold text-2xl select-none shadow-inner">
                      {director.initials}
                    </div>
                  )}
                </div>

                {/* Content Section */}
                <div className="p-3 md:p-5 flex flex-col items-start text-left bg-white relative z-20">
                  <h4 className="text-[14px] md:text-[16px] font-bold text-[#224292] leading-tight mb-1 font-graphik">{director.name}</h4>
                  <p className="text-[11px] md:text-[13px] font-medium text-slate-500 mb-1 md:mb-2">{director.role}</p>
                </div>
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
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-6 min-h-[800px] lg:min-h-[1100px] items-start content-start">
            {hods.filter(h => activeFilter === 'all' || h.category === activeFilter).map((hod) => (
              <motion.div
                key={hod.role}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
                className="bg-white rounded-[1.25rem] border border-slate-100 shadow-sm flex flex-col overflow-hidden hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group"
              >
                {/* Image Section */}
                <div 
                  className="relative w-full h-[170px] sm:h-[200px] md:h-[240px] overflow-hidden"
                  style={{ backgroundImage: `url("${bgFacultyImg}")`, backgroundSize: 'cover', backgroundPosition: 'center' }}
                >
                  {hod.image ? (
                    <img 
                      src={hod.image} 
                      alt={hod.name} 
                      className={`w-full h-full object-contain object-bottom relative z-10 origin-bottom ${
                        ["Dr. Prabhakaran K S", "Dr. Sasikumar B", "Dr. Ramkumar M", "Dr. Maragatharaj S", "Dr. Vijayakumar S"].includes(hod.name) 
                          ? "scale-[1.15] translate-y-6" 
                          : "scale-[1.2]"
                      }`} 
                    />
                  ) : (
                    <div className="w-full h-full bg-gradient-to-br from-[#224292] to-[#122b68] flex items-center justify-center text-white font-bold text-2xl select-none shadow-inner">
                      {hod.initials}
                    </div>
                  )}
                </div>

                {/* Content Section */}
                <div className="p-3 md:p-5 flex flex-col items-start text-left bg-white relative z-20">
                  <h4 className="text-[14px] md:text-[16px] font-bold text-[#224292] leading-tight mb-1 font-graphik">{hod.name}</h4>
                  <p className="text-[11px] md:text-[13px] font-medium text-slate-500 mb-1 md:mb-2">{hod.role}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </div>
  )
}
