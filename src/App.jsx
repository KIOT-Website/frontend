import { motion, useScroll, useSpring, AnimatePresence } from 'framer-motion'
import { useState, useEffect, lazy, Suspense } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'

// Common Components
import Header from './components/Common/Header'
import ScrollToTop from './components/Common/ScrollToTop'
import Preloader from './components/Common/Preloader'
import Footer from './components/Common/Footer'

// Page Components
const Home = lazy(() => import('./pages/Home'))
import AboutUsPage from './pages/AboutUsPage'
import VisionMissionPage from './pages/VisionMissionPage'
import LeadershipPage from './pages/LeadershipPage'
import AccreditationPage from './pages/AccreditationPage'
import GoverningCouncilPage from './pages/GoverningCouncilPage'
import AchievementsPage from './pages/AchievementsPage'
import UnderConstruction from './components/UnderConstruction/UnderConstruction'
import PlacementOverviewPage from './pages/PlacementOverviewPage'
import TrainingOverviewPage from './pages/TrainingOverviewPage'
import RecruitmentProcessPage from './pages/RecruitmentProcessPage'
import OutcomesOverviewPage from './pages/OutcomesOverviewPage'
import AcademicsPageWrapper from './pages/AcademicsPage'
import CourseDetailPageWrapper from './pages/CourseDetailPageWrapper'

const ContactPage = lazy(() => import('./pages/ContactPage'))
const EventsPage = lazy(() => import('./pages/EventsPage'))
const DepartmentPage = lazy(() => import('./pages/DepartmentPage'))
const LabDetailPage = lazy(() => import('./pages/LabDetailPage'))
const StudentsAdmittedDepartmentPage = lazy(() => import('./pages/StudentsAdmittedDepartmentPage'))
const NotFoundPage = lazy(() => import('./pages/NotFoundPage'))

// Simple Loading Fallback
const PageLoader = () => (
  <div className="flex items-center justify-center min-h-[60vh] text-[#18357a]">
    <motion.div
      animate={{ rotate: 360 }}
      transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
      className="w-12 h-12 border-4 border-[#ffc107] border-t-transparent rounded-full"
    />
  </div>
)

function App() {
  const [loading, setLoading] = useState(true)
  const location = useLocation()
  
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  })

  useEffect(() => {
    if (loading) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => { document.body.style.overflow = '' }
  }, [loading])

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [location.pathname])

  return (
    <div className="min-h-screen bg-[#FCFDFD] text-[#224292] font-sans selection:bg-[#ffc107]/20">
      
      <AnimatePresence mode="wait">
        {loading && <Preloader onComplete={() => setLoading(false)} />}
      </AnimatePresence>

      {!loading && (
        <motion.div
           initial={{ opacity: 0 }}
           animate={{ opacity: 1 }}
           transition={{ duration: 0.5 }}
           className="relative"
        >
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="fixed top-0 left-0 right-0 h-1 bg-[#ffc107] origin-left z-[9999]"
            style={{ scaleX }}
          />
          
          <Header />

          <main className="pt-[108px] md:pt-[108px] lg:pt-[104px] min-h-screen" id="top">
            <AnimatePresence mode="wait">
              <Suspense fallback={<PageLoader />}>
                <Routes location={location} key={location.pathname}>
                  <Route path="/" element={<Home />} />
                  <Route path="/contact" element={<ContactPage />} />
                  <Route path="/about-us" element={<AboutUsPage />} />
                  <Route path="/vision-mission" element={<VisionMissionPage />} />
                  <Route path="/leadership" element={<LeadershipPage />} />
                  <Route path="/accreditation-ranking" element={<AccreditationPage />} />
                  <Route path="/governing-council" element={<GoverningCouncilPage />} />
                  <Route path="/awards-recognition" element={<AchievementsPage />} />
                  <Route path="/achievements" element={<AchievementsPage />} />
                  
                  {/* Placement Pages */}
                  <Route path="/placements" element={<UnderConstruction />} />
                  <Route path="/placement-overview" element={<PlacementOverviewPage />} />
                  <Route path="/training" element={<TrainingOverviewPage />} />
                  <Route path="/recruitment" element={<RecruitmentProcessPage />} />
                  <Route path="/records" element={<OutcomesOverviewPage />} />

                  {/* Academics Pages */}
                  <Route path="/academics" element={<AcademicsPageWrapper />} />
                  <Route path="/academics/course/:courseId" element={<CourseDetailPageWrapper />} />
                  <Route path="/academics/course/:courseId/lab/:labIndex" element={<LabDetailPage />} />
                  <Route path="/department/:deptName" element={<DepartmentPage />} />
                  <Route path="/students-admitted-department/:deptName" element={<StudentsAdmittedDepartmentPage />} />

                  <Route path="/admissions" element={<UnderConstruction />} />
                  <Route path="/research" element={<UnderConstruction />} />
                  <Route path="/resources" element={<UnderConstruction />} />
                  <Route path="/campus-life" element={<UnderConstruction />} />
                  <Route path="/student-life" element={<UnderConstruction />} />
                  <Route path="/alumni" element={<UnderConstruction />} />
                  <Route path="/news-events" element={<UnderConstruction />} />
                  <Route path="/blogs" element={<UnderConstruction />} />

                  <Route path="/events" element={<EventsPage />} />
                  <Route path="*" element={<NotFoundPage />} />
                </Routes>
              </Suspense>
            </AnimatePresence>
          </main>

          <Footer />
          <ScrollToTop />
        </motion.div>
      )}
    </div>
  )
}

export default App
