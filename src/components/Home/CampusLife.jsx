import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { 
  Trophy, Home, Utensils, Bus, ArrowUpRight, 
  Sparkles, Dumbbell, Zap, GraduationCap, FlaskConical,
  Microscope,
  Cpu,
  Coffee,
  Building,
  Activity
} from 'lucide-react'
import React from 'react'

// Asset imports
import labImg from '../../assets/main/l1.webp'
import cafeteriaImg from '../../assets/life@kiot/caf.webp'
import hostelImg from '../../assets/main/hostel1.webp'
import sportsImg from '../../assets/main/sh-1.webp'
import homeLifeImg from '../../assets/main/home-life.webp'
import trainingImg from '../../assets/life@kiot/smart classrooms.webp'
import transportImg from '../../assets/life@kiot/collge bus.webp'
import gymImg from '../../assets/life@kiot/gym.webp'
import istartImg from '../../assets/main/istart1.webp'
import campusMainImg from '../../assets/main/campus .webp'

const facilities = [
  { id: 5, title: "Lab", image: labImg, link: "/campus-life/classroom" },
  { id: 7, title: "Training", image: trainingImg, link: "/placements/training" },
  { id: 2, title: "Gym", image: gymImg, link: "/campus-life/amenities" },
  { id: 1, title: "Sports", image: sportsImg, link: "/campus-life/sports" },
  { id: 8, title: "iStart", image: istartImg, link: "/research-innovation/istart" },
  { id: 3, title: "Transport", image: transportImg, link: "/campus-life/transport" },
  { id: 4, title: "Cafeteria", image: cafeteriaImg, link: "/campus-life/amenities" },
  { id: 6, title: "Hostel", image: hostelImg, link: "/campus-life/amenities" }
]

const CampusLife = () => {
  const renderCard = (fac, idx) => (
    <Link to={fac.link} key={fac.id} onClick={() => window.scrollTo(0, 0)} className="w-full">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: idx * 0.05 }}
        className="group bg-white rounded-xl overflow-hidden flex flex-col relative shadow-[0_4px_16px_rgba(0,0,0,0.05)] hover:shadow-[0_12px_32px_rgba(34,66,146,0.08)] hover:-translate-y-1.5 transition-all duration-500 cursor-pointer border border-slate-100 h-full"
      >
        <div className="relative w-full h-32 lg:h-44 overflow-hidden">
          <img src={fac.image} alt={fac.title} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-[1.08]" />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900/30 to-transparent" />
        </div>
        
        <div className="p-4 lg:p-5 flex-1 flex flex-col justify-center bg-white transition-colors duration-500 group-hover:bg-[#FCFDFD]">
          <div className="flex items-center justify-between gap-3">
            <h3 className="text-sm lg:text-[16px] font-semibold text-[#224292] leading-tight transition-colors duration-300 group-hover:text-[#ffc107]">{fac.title}</h3>
            <div className="w-6 h-6 lg:w-7 lg:h-7 rounded-full bg-slate-50 flex items-center justify-center group-hover:bg-[#ffc107] group-hover:text-[#224292] transition-all duration-300 shadow-sm shrink-0">
              <ArrowUpRight size={13} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" />
            </div>
          </div>
        </div>
      </motion.div>
    </Link>
  );

  return (
    <section className="relative py-8 lg:py-12 bg-[#FCFDFD] overflow-hidden">
      
      {/* 🔷 SECTION HERO: "Life@KIOT" */}
      <div className="mx-auto max-w-7xl px-6 lg:px-10 mb-10 lg:mb-12">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-5 space-y-6 lg:space-y-8"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: 'backOut' }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#224292]/5 border border-[#224292]/10 mb-2"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-[#ffc107] animate-pulse" />
              <span className="text-[10px] font-black uppercase tracking-[0.25em] text-[#224292]">
                Life @ KIOT
              </span>
              <span className="w-1.5 h-1.5 rounded-full bg-[#224292] animate-pulse" />
            </motion.div>

            <h2 className="text-3xl lg:text-5xl font-semibold text-[#224292] font-graphik leading-tight tracking-tight">
              A Vibrant <span className="text-[#ffc107]">Ecosystem</span> <br className="hidden lg:block" />
              for Holistic Growth.
            </h2>
            
            <p className="text-xs lg:text-sm text-black font-medium leading-relaxed max-w-xl text-justify">
              Beyond academics, KIOT creates a vibrant campus experience that shapes confident, creative, and future-ready individuals. From modern infrastructure and student clubs to sports, innovation spaces, and cultural activities, every corner of campus is designed to support growth beyond the classroom. Experience a dynamic environment where learning, leadership, and everyday life come together seamlessly.
            </p>
 
            <Link 
              to="/campus-life"
              className="hidden lg:inline-flex items-center gap-4 px-8 py-4 bg-[#224292] !text-white rounded-2xl font-bold uppercase tracking-widest text-xs hover:bg-[#ffc107] hover:!text-[#224292] transition-all shadow-xl shadow-[#224292]/20"
            >
              Explore Full Campus
              <ArrowUpRight size={18} />
            </Link>
          </motion.div>
 
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="lg:col-span-7 relative lg:mt-0 lg:-mr-10 xl:-mr-24 flex justify-end items-center"
          >
            <div className="w-full">
              <img src={homeLifeImg} alt="Life@KIOT" className="w-full h-auto object-contain drop-shadow-2xl" />
            </div>
          </motion.div>
        </div>

      </div>

      {/* 🔷 AMENITY GRID - 8 Cards Version */}
      <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
        {/* Mobile & Tablet grid (under 1024px width) */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:hidden gap-4 lg:gap-6">
          {facilities.map((fac, idx) => renderCard(fac, idx))}
        </div>

        {/* Desktop grid layout (1024px and up width) */}
        <div className="hidden lg:flex flex-col gap-6">
          {/* Row 1: 3 cards */}
          <div className="grid grid-cols-3 gap-6">
            {facilities.slice(0, 3).map((fac, idx) => renderCard(fac, idx))}
          </div>
          
          {/* Row 2: 2 cards with increased width */}
          <div className="grid grid-cols-2 gap-6 w-full">
            {facilities.slice(3, 5).map((fac, idx) => renderCard(fac, idx + 3))}
          </div>

          {/* Row 3: 3 cards */}
          <div className="grid grid-cols-3 gap-6">
            {facilities.slice(5, 8).map((fac, idx) => renderCard(fac, idx + 5))}
          </div>
        </div>

        {/* Mobile Centered Button - Now at the Bottom */}
        <div className="mt-10 flex justify-center lg:hidden">
          <Link 
            to="/campus-life"
            className="inline-flex items-center gap-4 px-8 py-4 bg-[#224292] !text-white rounded-2xl font-bold uppercase tracking-widest text-xs hover:bg-[#ffc107] hover:!text-[#224292] transition-all shadow-xl shadow-[#224292]/20"
          >
            Explore Full Campus
            <ArrowUpRight size={18} />
          </Link>
        </div>
      </div>

    </section>
  )
}

export default CampusLife
