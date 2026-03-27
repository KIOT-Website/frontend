import { useEffect, useState } from 'react'
import { motion, AnimatePresence, useScroll, useSpring } from 'framer-motion'
import { ChevronUp } from 'lucide-react'

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false)
  const { scrollYProgress } = useScroll()
  
  // Smooth spring for the circle filling
  const pathLength = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  })

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 400) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
    }

    window.addEventListener('scroll', toggleVisibility)
    return () => window.removeEventListener('scroll', toggleVisibility)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, scale: 0.5, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.5, y: 20 }}
          className="fixed bottom-6 right-6 z-[9999]"
        >
          <button
            onClick={scrollToTop}
            className="group relative flex h-11 w-11 items-center justify-center rounded-full bg-white shadow-[0_15px_40px_rgba(34,66,146,0.15)] transition-all hover:bg-[#18357a] hover:shadow-[0_20px_50px_rgba(34,66,146,0.25)]"
          >
            {/* SVG Progress Circle */}
            <svg className="absolute h-full w-full -rotate-90 p-1">
              <circle
                cx="50%"
                cy="50%"
                r="46%"
                fill="none"
                strokeWidth="2"
                className="stroke-[#18357a]/5"
              />
              <motion.circle
                cx="50%"
                cy="50%"
                r="46%"
                fill="none"
                strokeWidth="3"
                className="stroke-[#ffc107]"
                style={{ 
                  pathLength: pathLength,
                  strokeLinecap: "round"
                }}
              />
            </svg>

            {/* Icon */}
            <ChevronUp 
              className="relative z-10 h-5 w-5 text-[#18357a] transition-all group-hover:scale-125 group-hover:text-white" 
            />
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default ScrollToTop
