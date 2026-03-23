import { motion, useScroll, useSpring, AnimatePresence } from 'framer-motion'
import Header from './components/Common/Header'
import ScrollToTop from './components/Common/ScrollToTop'
import Preloader from './components/Common/Preloader'
import Footer from './components/Common/Footer'
import Home from './pages/Home'
import AboutUsPage from './pages/AboutUsPage'
import VisionMissionPage from './pages/VisionMissionPage'
import LeadershipPage from './pages/LeadershipPage'
import ContactPage from './pages/ContactPage'
import EventsPage from './pages/EventsPage'
import NotFoundPage from './pages/NotFoundPage'

import { useState, useEffect } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'

function App() {
  const [loading, setLoading] = useState(true)
  const location = useLocation()
  
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  })

  // Block scroll while loading
  useEffect(() => {
    if (loading) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => { document.body.style.overflow = '' }
  }, [loading])

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [location.pathname])

  return (
    <div className="min-h-screen bg-[#FCFDFD] text-[#224292] overflow-x-hidden">
      
      {/* Institutional Preloader */}
      <AnimatePresence mode="wait">
        {loading && <Preloader onComplete={() => setLoading(false)} />}
      </AnimatePresence>

      {!loading && (
        <motion.div
           initial={{ opacity: 0 }}
           animate={{ opacity: 1 }}
           transition={{ duration: 0.5 }}
        >
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="fixed top-0 left-0 right-0 h-1 bg-[#ffc107] origin-left z-[9999]"
            style={{ scaleX }}
          />
          
          {/* Header without old manual navigation mapping */}
          <Header />

          <main className="pt-[114px]" id="top">
            <AnimatePresence mode="wait">
              <Routes location={location} key={location.pathname}>
                <Route path="/" element={<Home />} />
                <Route path="/contact" element={<ContactPage />} />
                <Route path="/about-us" element={<AboutUsPage />} />
                <Route path="/vision-mission" element={<VisionMissionPage />} />
                <Route path="/leadership" element={<LeadershipPage />} />
                <Route path="/events" element={<EventsPage />} />
                <Route path="*" element={<NotFoundPage />} />
              </Routes>
            </AnimatePresence>
          </main>

          {/* Site Footer */}
          <Footer />

          {/* Global Scroll to Top Button */}
          <ScrollToTop />
        </motion.div>
      )}
    </div>
  )
}

export default App
