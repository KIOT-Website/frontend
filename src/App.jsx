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
import GuidelinesPage from './pages/GuidelinesPage'
import AchievementsPage from './pages/AchievementsPage'
import UnderConstruction from './components/UnderConstruction/UnderConstruction'
import PlacementOverviewPage from './pages/PlacementOverviewPage'
import { GraduationCap, X } from 'lucide-react'
import { useNavigate } from 'react-router-dom'
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
const AdmissionsPageWrapper = lazy(() => import('./pages/AdmissionsPage'))
const UGRegistrationPage = lazy(() => import('./pages/UGRegistrationPage'))
const PGRegistrationPage = lazy(() => import('./pages/PGRegistrationPage'))
const CampusLifePage = lazy(() => import('./pages/CampusLifePage'))
const BusRoutesPage = lazy(() => import('./pages/BusRoutesPage'))
const LibraryAccessPage = lazy(() => import('./pages/LibraryAccessPage'))
const LibraryBooksPage = lazy(() => import('./pages/LibraryBooksPage'))
const LibraryJournalsPage = lazy(() => import('./pages/LibraryJournalsPage'))
const LibraryMagazinesPage = lazy(() => import('./pages/LibraryMagazinesPage'))
const AutonomousPage = lazy(() => import('./pages/AutonomousPage'))
const COEPage = lazy(() => import('./pages/COEPage'))
const ExamSchedulesPage = lazy(() => import('./pages/ExamSchedulesPage'))
const ResearchPage = lazy(() => import('./pages/ResearchPage'))
const ResearchResourcesPage = lazy(() => import('./pages/ResearchResourcesPage'))
const PhdSupervisorsPage = lazy(() => import('./pages/PhdSupervisorsPage'))
const ResearchAreasPage = lazy(() => import('./pages/ResearchAreasPage'))
const PhdHoldersPage = lazy(() => import('./pages/PhdHoldersPage'))
const FacultyPursuingPhdPage = lazy(() => import('./pages/FacultyPursuingPhdPage'))
const PhdGuidedPage = lazy(() => import('./pages/PhdGuidedPage'))
const ResearchFacilitiesPage = lazy(() => import('./pages/ResearchFacilitiesPage'))
const SponsoredProjectsPage = lazy(() => import('./pages/SponsoredProjectsPage'))
const InternationalPublicationsPage = lazy(() => import('./pages/InternationalPublicationsPage'))


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

  // Global Admissions Popup
  const [showGlobalPopup, setShowGlobalPopup] = useState(false)
  const navigate = useNavigate()

  useEffect(() => {
    // Show after 1 second on every load (removed sessionStorage for easier verification)
    const timer = setTimeout(() => {
      setShowGlobalPopup(true)
    }, 1000)
    return () => clearTimeout(timer)
  }, [])

  const handleClosePopup = () => {
    setShowGlobalPopup(false)
  }

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
  }, [location])

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
                  <Route path="/our-values" element={<VisionMissionPage />} />
                  <Route path="/leadership" element={<LeadershipPage />} />
                  <Route path="/guidelines" element={<GuidelinesPage />} />
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
                  <Route path="/academics/undergraduate" element={<AcademicsPageWrapper />} />
                  <Route path="/academics/postgraduate" element={<AcademicsPageWrapper />} />
                  <Route path="/ug-programs" element={<AcademicsPageWrapper />} />
                  <Route path="/pg-programs" element={<AcademicsPageWrapper />} />
                  <Route path="/academics/course/:courseId" element={<CourseDetailPageWrapper key={location.pathname} />} />
                  <Route path="/academics/undergraduate/:courseId" element={<CourseDetailPageWrapper key={location.pathname} />} />
                  <Route path="/academics/postgraduate/:courseId" element={<CourseDetailPageWrapper key={location.pathname} />} />
                  <Route path="/academics/course/:courseId/lab/:labIndex" element={<LabDetailPage />} />
                  <Route path="/department/:deptName" element={<DepartmentPage />} />
                  <Route path="/students-admitted-department/:deptName" element={<StudentsAdmittedDepartmentPage />} />

                  <Route path="/admissions" element={<AdmissionsPageWrapper />} />
                  <Route path="/admissions/ug-registration" element={<UGRegistrationPage />} />
                  <Route path="/admissions/pg-registration" element={<PGRegistrationPage />} />
                   <Route path="/research" element={<ResearchPage />} />
                   <Route path="/research/:deptName" element={<ResearchResourcesPage />} />
                   <Route path="/research/:deptName/phd-supervisors" element={<PhdSupervisorsPage />} />
                   <Route path="/research/:deptName/research-areas" element={<ResearchAreasPage />} />
                   <Route path="/research/:deptName/phd-holders" element={<PhdHoldersPage />} />
                   <Route path="/research/:deptName/pursuing-phd" element={<FacultyPursuingPhdPage />} />
                   <Route path="/research/:deptName/guided-scholars" element={<PhdGuidedPage />} />
                   <Route path="/research/:deptName/facilities" element={<ResearchFacilitiesPage />} />
                   <Route path="/research/:deptName/sponsored-projects" element={<SponsoredProjectsPage />} />
                   <Route path="/research/:deptName/international-publications" element={<InternationalPublicationsPage />} />
                   <Route path="/resources" element={<UnderConstruction />} />
                  <Route path="/autonomous" element={<AutonomousPage />} />
                  <Route path="/coe" element={<COEPage />} />
                  <Route path="/coe/exam-schedules" element={<ExamSchedulesPage />} />
                  <Route path="/campus-life" element={<CampusLifePage />} />
                  <Route path="/campus-life/library/access" element={<LibraryAccessPage />} />
                  <Route path="/campus-life/library/collections" element={<LibraryBooksPage />} />
                  <Route path="/campus-life/library/journals" element={<LibraryJournalsPage />} />
                  <Route path="/campus-life/library/achievements" element={<LibraryMagazinesPage />} />
                  <Route path="/bus-routes" element={<BusRoutesPage />} />
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

          {/* ─── GLOBAL ADMISSIONS POPUP ─── */}
          <AnimatePresence>
            {showGlobalPopup && (
              <motion.div 
                initial={{ y: 100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: 100, opacity: 0 }}
                className="fixed bottom-6 left-6 right-6 md:right-auto md:bottom-10 md:left-10 z-[3000] md:w-[310px] bg-white rounded-[2rem] shadow-[0_20px_50px_rgba(10,26,63,0.3)] overflow-hidden p-6 border-2 border-[#18357a]/10"
              >
                <button 
                  onClick={handleClosePopup}
                  className="absolute top-5 right-5 w-7 h-7 rounded-lg bg-slate-50 flex items-center justify-center text-[#18357a] hover:bg-[#18357a] hover:text-white transition-all shadow-sm"
                >
                  <X size={14} />
                </button>

                <div className="flex items-center gap-4 mb-5">
                  <div className="w-12 h-12 bg-[#ffc107] rounded-2xl flex items-center justify-center shadow-lg shadow-[#ffc107]/30 shrink-0">
                    <GraduationCap size={24} className="text-[#18357a]" />
                  </div>
                  <div>
                    <span className="text-[#ffc107] font-black text-[8px] uppercase tracking-[2px] block mb-0.5">KIOT Admission</span>
                    <h2 className="text-lg font-black text-[#18357a] uppercase tracking-tight leading-none">
                      Open 2026-27
                    </h2>
                  </div>
                </div>

                <p className="text-[#64779F] font-bold text-[11px] leading-relaxed mb-6">
                  Join a community of innovators. Applications are now live for all engineering programs.
                </p>

                <div className="grid grid-cols-2 gap-3">
                  <button 
                    onClick={() => { handleClosePopup(); navigate('/admissions'); }}
                    className="py-2.5 bg-[#18357a] text-white rounded-xl font-black text-[9px] uppercase tracking-[1px] hover:bg-[#1d3a82] transition-all active:scale-95"
                  >
                    Apply Now
                  </button>
                  <button 
                    onClick={handleClosePopup}
                    className="py-2.5 bg-slate-50 text-[#64779F] rounded-xl font-black text-[9px] uppercase tracking-[1px] hover:bg-slate-100 transition-all font-bold"
                  >
                    Later
                  </button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      )}
    </div>
  )
}

export default App
