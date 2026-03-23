import { motion, useScroll, useSpring, AnimatePresence } from 'framer-motion'
import Header from './components/Header'
import Hero from './components/Hero'
import Stats from './components/Stats'
import Programs from './components/Programs'
import Placements from './components/Placements'
import CampusLife from './components/CampusLife'
import Achievers from './components/Achievers'
import Testimonials from './components/Testimonials'
import Events from './components/Events'
import Contact from './components/Contact'
import EventsPage from './components/EventsPage'
import AboutUs from './components/AboutUs'
import VisionMission from './components/VisionMission'
import Leadership from './components/Leadership'
import ScrollToTop from './components/ScrollToTop'
import Preloader from './components/Preloader'
import Footer from './components/Footer'
import UnderConstruction from './components/UnderConstruction'
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
                <Route path="/" element={
                  <motion.div
                    key="home"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.4 }}
                  >
                    <Hero />
                    <Stats />
                    <Programs />
                    <Placements />
                    <CampusLife />
                    <Achievers />
                    <Events />
                    <Testimonials />
                  </motion.div>
                } />
                
                <Route path="/contact" element={
                  <motion.div
                    key="contact"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.4 }}
                  >
                    <Contact />
                  </motion.div>
                } />

                <Route path="/about-us" element={
                  <motion.div
                    key="aboutUs"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.4 }}
                  >
                    <AboutUs />
                  </motion.div>
                } />

                <Route path="/vision-mission" element={
                  <motion.div
                    key="visionMission"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.4 }}
                  >
                    <VisionMission />
                  </motion.div>
                } />

                <Route path="/leadership" element={
                  <motion.div
                    key="leadership"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.4 }}
                  >
                    <Leadership />
                  </motion.div>
                } />
                
                <Route path="/events" element={
                  <motion.div
                    key="events"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.4 }}
                  >
                    <EventsPage />
                  </motion.div>
                } />
                
                {/* 404 / Under Construction Route */}
                <Route path="*" element={
                  <motion.div
                    key="construction"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                  >
                    <UnderConstruction />
                  </motion.div>
                } />
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
