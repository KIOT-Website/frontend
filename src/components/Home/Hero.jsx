import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronLeft, ChevronRight } from 'lucide-react'

// Slide images from main folder
import slide1 from '../../assets/banner/update-home.webp'
import slide2 from '../../assets/banner/web-02.webp'
import slide3 from '../../assets/banner/web-03.webp'
import slide4 from '../../assets/banner/web-04.webp'
import slide5 from '../../assets/banner/web-05.webp'
import slide6 from '../../assets/banner/web-06.webp'
import slide7 from '../../assets/banner/web-07.webp'
import slide8 from '../../assets/banner/web-08.webp'

const slides = [
  {
    image: slide1,
    title: "Shape Your Future",
    highlight: "KIOT Salem",
    desc: "A Premier Autonomous Institution committed to excellence in engineering and management education."
  },
  {
    image: slide2,
    title: "Innovative Learning",
    highlight: "Advanced Labs",
    desc: "Experience world-class infrastructure and industry-standard research facilities."
  },
  {
    image: slide3,
    title: "Gateway to Your",
    highlight: "Dream Career",
    desc: "We bridge the gap between academia and industry with intensive placement training."
  },
  {
    image: slide4,
    title: "Vibrant Campus",
    highlight: "Student Life",
    desc: "Beyond academics, we nurture talent through cultural events and symposiums."
  },
  {
    image: slide5,
    title: "Research & Development",
    highlight: "Innovation",
    desc: "Empowering innovation through dedicated R&D centers and patent development."
  },
  {
    image: slide6,
    title: "Global Reach",
    highlight: "Success",
    desc: "Where your potential finds wings through international collaborations."
  },
  {
    image: slide7,
    title: "Academic Excellence",
    highlight: "Education",
    desc: "Comprehensive curriculum designed for future-ready engineers."
  },
  {
    image: slide8,
    title: "Industry Partnerships",
    highlight: "Placements",
    desc: "Top-tier recruiters and extensive industry-ready training programs."
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
    <section className="relative w-full h-[300px] sm:h-[430px] lg:h-[600px] xl:h-[650px] 2xl:h-[720px] min-[2500px]:h-[800px] overflow-hidden bg-white pt-0 pb-0 group">
      
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
            {/* Using object-fill to ensure all text/content in banner images is visible at any resolution */}
            <img 
              src={slides[current].image} 
              alt={slides[current].title + " - " + slides[current].highlight} 
              className="w-full h-full object-fill"
              loading="eager"
            />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* NAVIGATION ARROWS */}
      <div className="absolute inset-0 z-10 flex items-center justify-between px-4 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <button
          onClick={() => move(-1)}
          className="pointer-events-auto flex h-12 w-12 items-center justify-center rounded-full bg-white/70 text-[#224292] backdrop-blur-md transition-all hover:bg-white/90 hover:scale-110 active:scale-95 shadow-md group/btn"
          aria-label="Previous slide"
        >
          <ChevronLeft size={28} strokeWidth={2.5} className="group-hover/btn:-translate-x-0.5 transition-transform" />
        </button>
        <button
          onClick={() => move(1)}
          className="pointer-events-auto flex h-12 w-12 items-center justify-center rounded-full bg-white/70 text-[#224292] backdrop-blur-md transition-all hover:bg-white/90 hover:scale-110 active:scale-95 shadow-md group/btn"
          aria-label="Next slide"
        >
          <ChevronRight size={28} strokeWidth={2.5} className="group-hover/btn:translate-x-0.5 transition-transform" />
        </button>
      </div>

    </section>
  )
}

export default Hero
