import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowRight, ChevronLeft, ChevronRight, Award, Trophy, Users, Star } from 'lucide-react'

// Slide images
import slide1 from '../../assets/slide1.webp'
import slide2 from '../../assets/slide2.webp'
import slide3 from '../../assets/slide3.webp'
import slide4 from '../../assets/slide4.webp'
import slide5 from '../../assets/slide5.webp'
import slide6 from '../../assets/slide6.webp'

const slides = [
  {
    image: slide1,
    title: "Shape Your Future at",
    highlight: "KIOT Salem",
    desc: "A Premier Autonomous Institution committed to excellence in engineering and management education.",
    stats: [
      { icon: Award, label: "NAAC A+ accredited" },
      { icon: Trophy, label: "95% Placement Rate" }
    ]
  },
  {
    image: slide2,
    title: "Innovative Learning",
    highlight: "Advanced Labs",
    desc: "Experience world-class infrastructure and industry-standard research facilities designed for practical mastery.",
    stats: [
      { icon: Star, label: "Top-Tier Faculty" },
      { icon: Users, label: "100+ Hiring Partners" }
    ]
  },
  {
    image: slide3,
    title: "Gateway to Your",
    highlight: "Dream Career",
    desc: "We bridge the gap between academia and industry with intensive placement training and placement records.",
    stats: [
      { icon: Award, label: "Highest Package 12.5 LPA" },
      { icon: Trophy, label: "ISO Certified Excellence" }
    ]
  },
  {
    image: slide4,
    title: "Vibrant Campus",
    highlight: "Student Life",
    desc: "Beyond academics, we nurture talent through cultural events, symposiums, and a wide array of student clubs.",
    stats: [
      { icon: Star, label: "Active Student Community" },
      { icon: Users, label: "50+ Student Clubs" }
    ]
  },
  {
    image: slide5,
    title: "Research & Development",
    highlight: "Center of Excellence",
    desc: "Empowering innovation through dedicated R&D centers and patent development support for all departments.",
    stats: [
      { icon: Award, label: "R&D Focused Environment" },
      { icon: Star, label: "Industry Collaboration" }
    ]
  },
  {
    image: slide6,
    title: "Global Reach",
    highlight: "Limitless Success",
    desc: "Where your potential finds wings through international collaborations and global placement opportunities.",
    stats: [
      { icon: Trophy, label: "Globally Recognized" },
      { icon: Star, label: "Alumni Success" }
    ]
  }
]

const Hero = () => {
  const [current, setCurrent] = useState(0)
  const [direction, setDirection] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      move(1)
    }, 4000)
    return () => clearInterval(timer)
  }, [current])

  const move = (step) => {
    setDirection(step)
    setCurrent((prev) => (prev + step + slides.length) % slides.length)
  }

  const variants = {
    enter: (direction) => ({
      scale: 1.4,
      opacity: 0,
      zIndex: 1,
      filter: "blur(10px)"
    }),
    center: {
      zIndex: 1,
      scale: 1,
      opacity: 1,
      filter: "blur(0px)",
      transition: {
        scale: { duration: 1.2, ease: [0.22, 1, 0.36, 1] },
        opacity: { duration: 0.8 },
        filter: { duration: 0.8 }
      }
    },
    exit: (direction) => ({
      zIndex: 0,
      scale: 0.85,
      opacity: 0,
      filter: "blur(5px)",
      transition: {
        scale: { duration: 0.8, ease: "easeInOut" },
        opacity: { duration: 0.6 }
      }
    })
  }

  return (
    <section className="relative w-full h-[200px] sm:h-[450px] lg:h-[620px] overflow-hidden bg-white pt-0 pb-0">
      
      {/* BACKGROUND SLIDER */}
      <div className="absolute inset-0 z-0 bg-white">
        <AnimatePresence initial={false} custom={direction}>
          <motion.div
            key={current}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            className="absolute inset-0 w-full h-full bg-white flex items-center justify-center shadow-inner"
          >
            <img 
              src={slides[current].image} 
              alt={slides[current].title + " - " + slides[current].highlight} 
              className="w-full h-full object-fill"
              loading="eager" // Keep hero eager for LCP
            />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* NAVIGATION ARROWS */}
      <div className="absolute inset-0 z-10 hidden items-center justify-between px-4 sm:flex pointer-events-none">
        <button
          onClick={() => move(-1)}
          className="pointer-events-auto flex h-12 w-12 items-center justify-center rounded-full bg-white/70 text-[#18357a] backdrop-blur-md transition-all hover:bg-white/90 hover:scale-110 active:scale-95 shadow-md group/btn"
          aria-label="Previous slide"
        >
          <ChevronLeft size={28} strokeWidth={2.5} className="group-hover/btn:-translate-x-0.5 transition-transform" />
        </button>
        <button
          onClick={() => move(1)}
          className="pointer-events-auto flex h-12 w-12 items-center justify-center rounded-full bg-white/70 text-[#18357a] backdrop-blur-md transition-all hover:bg-white/90 hover:scale-110 active:scale-95 shadow-md group/btn"
          aria-label="Next slide"
        >
          <ChevronRight size={28} strokeWidth={2.5} className="group-hover/btn:translate-x-0.5 transition-transform" />
        </button>
      </div>

      {/* FLOATING TRUST BADGES (Overlay design) */}
      <div className="absolute inset-x-0 bottom-0 top-0 z-20 pointer-events-none p-6 lg:p-12 hidden md:block">
        <div className="relative w-full h-full">
            {/* NAAC A Grade Card */}
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1, duration: 0.8 }}
              className="absolute bottom-10 right-0 bg-white/95 backdrop-blur-md p-4 lg:p-6 rounded-[2rem] shadow-[0_20px_50px_rgba(0,0,0,0.15)] border border-white/50 flex flex-col items-center min-w-[140px] group overflow-hidden"
            >
                <div className="absolute inset-0 bg-[#ffc107]/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="relative z-10 w-12 h-12 bg-[#ffc107]/10 rounded-2xl flex items-center justify-center text-[#ffc107] mb-3 shadow-inner">
                    <Trophy size={24} />
                </div>
                <div className="relative z-10 text-center">
                    <span className="text-[10px] font-black text-[#18357a] uppercase tracking-[3px] block mb-1">Accredited</span>
                    <h3 className="text-2xl font-black text-[#18357a] leading-none uppercase tracking-tighter">A <span className="text-[#ffc107]">Grade</span></h3>
                    <p className="text-[9px] font-bold text-slate-400 mt-2 uppercase tracking-widest">Valid upto 2028</p>
                </div>
            </motion.div>

            {/* Placements Stats Card */}
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1.2, duration: 0.8 }}
              className="absolute top-10 left-0 bg-white/95 backdrop-blur-md px-6 py-4 rounded-[1.5rem] shadow-[0_15px_40px_rgba(34,66,146,0.1)] border border-white/50 flex items-center gap-4"
            >
                 <div className="w-10 h-10 bg-[#18357a] rounded-xl flex items-center justify-center text-white shadow-lg">
                    <Users size={20} />
                 </div>
                 <div>
                    <h4 className="text-[18px] font-black text-[#18357a] leading-none">95% +</h4>
                    <p className="text-[9px] font-black text-[#64779F] uppercase tracking-widest mt-1">Placement Score</p>
                 </div>
            </motion.div>
        </div>
      </div>

    </section>
  )
}

export default Hero
