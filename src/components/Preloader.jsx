import { motion, AnimatePresence } from 'framer-motion'
import { useEffect, useState } from 'react'
import logo from '../assets/logo.png'

const Preloader = ({ onComplete }) => {
  const text = "KNOWLEDGE INSTITUTE OF TECHNOLOGY"
  const words = text.split(" ")

  // Let's use internal state to trigger the final bar after logo reveal
  const [showProgress, setShowProgress] = useState(false)

  const containerVariants = {
    exit: { 
      y: "-100%", // Slide up to hide the preloader
      opacity: 0,
      transition: { 
        duration: 0.8, 
        ease: [0.76, 0, 0.24, 1] // Custom quint-like easing for premium feel
      }
    }
  }

  const letterVariants = {
    initial: () => ({
      opacity: 0,
      x: Math.random() * 600 - 300,
      y: Math.random() * 600 - 300,
      rotate: Math.random() * 720,
      scale: 0.1
    }),
    animate: {
      opacity: 1,
      x: 0,
      y: 0,
      rotate: 0,
      scale: 1,
      transition: {
        type: "spring",
        damping: 20,
        stiffness: 40,
        duration: 3
      }
    }
  }

  return (
    <motion.div
      variants={containerVariants}
      exit="exit"
      className="fixed inset-0 z-[99999] flex flex-col items-center justify-center bg-white"
    >
      {/* Scattered Text Container */}
      <div className="flex flex-wrap justify-center gap-x-4 px-6 mb-12 max-w-4xl text-center">
        {words.map((word, wordIdx) => (
          <div key={wordIdx} className="flex whitespace-nowrap">
            {word.split("").map((letter, letterIdx) => (
              <motion.span
                key={letterIdx}
                custom={letterIdx}
                variants={letterVariants}
                initial="initial"
                animate="animate"
                className="text-2xl md:text-5xl font-black text-[#18357a] font-display"
              >
                {letter}
              </motion.span>
            ))}
          </div>
        ))}
      </div>

      {/* Ultra-Fast Logo Fade In */}
      <motion.div
        initial={{ opacity: 0, y: 30, scale: 0.85 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ delay: 1.5, duration: 1, ease: "easeOut" }}
        onAnimationComplete={onComplete} // Proceed to main content once logo is revealed
        className="flex flex-col items-center"
      >
        <img src={logo} alt="KIOT Logo" className="h-20 md:h-28 w-auto object-contain mb-4" />
      </motion.div>
    </motion.div>
  )
}

export default Preloader
