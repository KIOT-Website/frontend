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
import labImg from '../../assets/life@kiot/image.webp'
import cafeteriaImg from '../../assets/life@kiot/caf.png'
import hostelImg from '../../assets/life@kiot/hostal.webp'
import sportsImg from '../../assets/life@kiot/sports ground.png'
import homeLifeImg from '../../assets/main/home-life.webp'
import trainingImg from '../../assets/life@kiot/training.webp'
import transportImg from '../../assets/life@kiot/collge bus.png'
import gymImg from '../../assets/life@kiot/gym.png'
import istartImg from '../../assets/life@kiot/istart.webp'
import campusMainImg from '../../assets/main/campus .webp'

const facilities = [
  { id: 1, title: "Sports", image: sportsImg, link: "/campus-life/sports" },
  { id: 2, title: "Gym", image: gymImg, link: "/campus-life/amenities" },
  { id: 3, title: "Transport", image: transportImg, link: "/campus-life/transport" },
  { id: 4, title: "Cafeteria", image: cafeteriaImg, link: "/campus-life/amenities" },
  { id: 5, title: "Lab", image: labImg, link: "/campus-life/classroom" },
  { id: 6, title: "Hostel", image: hostelImg, link: "/campus-life/amenities" },
  { id: 7, title: "Training", image: trainingImg, link: "/training" },
  { id: 8, title: "iStart", image: istartImg, link: "/aicte-idea-lab" }
]

const CampusLife = () => {
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
            
            <h2 className="text-3xl lg:text-[42px] xl:text-5xl font-semibold text-[#224292] font-graphik leading-tight tracking-tight">
              A Vibrant <span className="text-[#ffc107]">Ecosystem</span> <br className="hidden lg:block" />
              for Holistic Growth.
            </h2>
            
            <p className="text-sm lg:text-[15px] text-black font-medium leading-relaxed max-w-xl text-justify">
              Beyond standard academics, KIOT offers an inspiring campus life designed to nurture your physical, social, and creative potential. Explore a world where excellence meets everyday living.
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

        {/* Mobile Centered Button */}
        <div className="mt-8 flex justify-center lg:hidden">
          <Link 
            to="/campus-life"
            className="inline-flex items-center gap-4 px-8 py-4 bg-[#224292] !text-white rounded-2xl font-bold uppercase tracking-widest text-xs hover:bg-[#ffc107] hover:!text-[#224292] transition-all shadow-xl shadow-[#224292]/20"
          >
            Explore Full Campus
            <ArrowUpRight size={18} />
          </Link>
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
                className="group relative h-48 lg:h-64 rounded-xl lg:rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-500 cursor-pointer border-l-[3px] border-b-[3px] border-[#224292]"
              >
                {/* Yellow Borders (Top & Right) */}
                <div className="absolute top-0 left-0 w-full h-[3px] bg-[#ffc107] z-30" />
                <div className="absolute top-0 right-0 h-full w-[3px] bg-[#ffc107] z-30" />

                <img src={fac.image} alt={fac.title} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#224292]/90 via-[#224292]/40 to-transparent opacity-80 transition-opacity duration-500 group-hover:opacity-100" />
                
                <div className="absolute inset-0 p-4 lg:p-6 flex flex-col justify-end">
                  <h3 className="text-sm lg:text-lg font-bold text-white mb-1 font-graphik leading-tight transition-transform duration-500 group-hover:-translate-y-1">{fac.title}</h3>
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
