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
import labImg from '../../assets/life@kiot/image.png'
import cafeteriaImg from '../../assets/life@kiot/cafetaria.png'
import hostelImg from '../../assets/life@kiot/hostal.webp'
import sportsImg from '../../assets/life@kiot/sports.png'
import trainingImg from '../../assets/life@kiot/training.webp'
import transportImg from '../../assets/life@kiot/transport.png'
import gymImg from '../../assets/life@kiot/gym.png'
import istartImg from '../../assets/life@kiot/istart.webp'
import campusMainImg from '../../assets/main/campus .webp'

const facilities = [
  { id: 1, title: "Sports", image: sportsImg, tag: "Life@KIOT", link: "/campus-life/sports" },
  { id: 2, title: "Gym", image: gymImg, tag: "Life@KIOT", link: "/campus-life/amenities" },
  { id: 3, title: "Transport", image: transportImg, tag: "Life@KIOT", link: "/campus-life/transport" },
  { id: 4, title: "Cafeteria", image: cafeteriaImg, tag: "Life@KIOT", link: "/campus-life/amenities" },
  { id: 5, title: "Lab", image: labImg, tag: "Life@KIOT", link: "/campus-life/classroom" },
  { id: 6, title: "Hostel", image: hostelImg, tag: "Life@KIOT", link: "/campus-life/amenities" },
  { id: 7, title: "Training", image: trainingImg, tag: "Life@KIOT", link: "/training" },
  { id: 8, title: "iStart", image: istartImg, tag: "Life@KIOT", link: "/aicte-idea-lab" }
]

const CampusLife = () => {
  return (
    <section className="relative py-8 lg:py-12 bg-[#FCFDFD] overflow-hidden">
      
      {/* 🔷 SECTION HERO: "Life@KIOT" */}
      <div className="mx-auto max-w-7xl px-6 lg:px-10 mb-10 lg:mb-12">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6 lg:space-y-8"
          >
            <div className="inline-flex items-center gap-3 px-4 py-1.5 rounded-full bg-[#18357a]/5 border border-[#18357a]/10">
              <Sparkles size={14} className="text-[#ffc107]" />
              <span className="text-[10px] font-black uppercase tracking-[0.3em] text-black">Life@KIOT</span>
            </div>
            
            <h2 className="text-3xl lg:text-5xl font-semibold text-[#18357a] font-graphik leading-tight tracking-tight">
              A Vibrant <span className="text-[#ffc107]">Ecosystem</span> for <br />
              Holistic Growth.
            </h2>
            
            <p className="text-base lg:text-lg text-black font-medium leading-relaxed max-w-xl">
              Beyond standard academics, KIOT offers an inspiring campus life designed to nurture your physical, social, and creative potential. Explore a world where excellence meets everyday living.
            </p>

            <Link 
              to="/campus-life"
              className="inline-flex items-center gap-4 px-8 py-4 bg-[#18357a] !text-white rounded-2xl font-bold uppercase tracking-widest text-xs hover:bg-[#ffc107] hover:!text-[#18357a] transition-all shadow-xl shadow-[#18357a]/20"
            >
              Explore Full Campus
              <ArrowUpRight size={18} />
            </Link>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative lg:mt-0"
          >
            {/* Background shadow removed as requested */}
            <div className="relative rounded-[2.5rem] lg:rounded-[3.5rem] overflow-hidden border-8 border-white shadow-2xl aspect-[4/3] sm:aspect-[16/10] lg:aspect-[4/3]">
              <img src={sportsImg} alt="Life@KIOT" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#18357a]/20 to-transparent" />
            </div>
          </motion.div>
        </div>
      </div>

      {/* 🔷 AMENITY GRID - 8 Cards Version */}
      <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 lg:gap-6">
          {facilities.map((fac, idx) => (
            <Link to={fac.link} key={fac.id}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.05 }}
                className="group relative h-48 lg:h-64 rounded-[1.5rem] lg:rounded-[2rem] overflow-hidden shadow-md hover:shadow-xl transition-all duration-500 cursor-pointer"
              >
                <img src={fac.image} alt={fac.title} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#18357a]/90 via-[#18357a]/40 to-transparent opacity-80 transition-opacity duration-500 group-hover:opacity-100" />
                
                <div className="absolute inset-0 p-4 lg:p-6 flex flex-col justify-end">
                  <h3 className="text-sm lg:text-lg font-bold text-white mb-1 font-graphik leading-tight transition-transform duration-500 group-hover:-translate-y-1">{fac.title}</h3>
                  <span className="text-[8px] lg:text-[10px] font-bold text-white/60 uppercase tracking-widest transition-transform duration-500 group-hover:-translate-y-1">{fac.tag}</span>
                </div>
              </motion.div>
            </Link>
          ))}
        </div>
      </div>

    </section>
  )
}

export default CampusLife
