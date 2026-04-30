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
import OurValuesPage from './pages/OurValuesPage'
import LeadershipPage from './pages/LeadershipPage'
import HeadOfDepartmentPage from './pages/HeadOfDepartmentPage'
import AccreditationPage from './pages/AccreditationPage'
import GoverningCouncilPage from './pages/GoverningCouncilPage'
import GuidelinesPage from './pages/GuidelinesPage'
import IQACPage from './pages/IQACPage'
import UnderConstruction from './components/UnderConstruction/UnderConstruction'
import PlacementOverviewPage from './pages/PlacementOverviewPage'
import { GraduationCap, X } from 'lucide-react'
import { useNavigate } from 'react-router-dom'
import TrainingOverviewPage from './pages/TrainingOverviewPage'
import RecruitmentProcessPage from './pages/RecruitmentProcessPage'
import OutcomesOverviewPage from './pages/OutcomesOverviewPage'
import AcademicsPageWrapper from './pages/AcademicsPage'
import CourseDetailPageWrapper from './pages/CourseDetailPageWrapper'

const RecruitmentPage = lazy(() => import('./pages/Recruitment'))
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
const SportsFacultyPage = lazy(() => import('./pages/SportsFacultyPage'))
const SportsFacilitiesPage = lazy(() => import('./pages/SportsFacilitiesPage'))
const AutonomousPage = lazy(() => import('./pages/AutonomousPage'))
const COEPage = lazy(() => import('./pages/COEPage'))
const ExamSchedulesPage = lazy(() => import('./pages/ExamSchedulesPage'))
const CircularsPage = lazy(() => import('./pages/CircularsPage'))
const AboutCOEPage = lazy(() => import('./pages/AboutCOEPage'))
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
const MedicalImagingPage = lazy(() => import('./pages/MedicalImagingPage'))
const NonIndexedPublicationsPage = lazy(() => import('./pages/NonIndexedPublicationsPage'))
const ConferencesPage = lazy(() => import('./pages/ConferencesPage'))
const ResearchProposalsPage = lazy(() => import('./pages/ResearchProposalsPage'))
const ConsultancyPage = lazy(() => import('./pages/ConsultancyPage'))
const EventDetailPage = lazy(() => import('./pages/EventDetailPage'))
const LibraryPage = lazy(() => import('./pages/LibraryPage'))
const SportsPage = lazy(() => import('./pages/SportsPage'))
const SportsDetailPage = lazy(() => import('./pages/SportsDetailPage'))
const ClassroomPage = lazy(() => import('./pages/ClassroomPage'))
const TourPage = lazy(() => import('./pages/TourPage'))
const TransportPage = lazy(() => import('./pages/TransportPage'))
const AmenitiesPage = lazy(() => import('./pages/AmenitiesPage'))
const InsurancePage = lazy(() => import('./pages/InsurancePage'))
const MediaCenterPage = lazy(() => import('./pages/MediaCenterPage'))
const EnergyPage = lazy(() => import('./pages/EnergyPage'))
const InternetPage = lazy(() => import('./pages/InternetPage'))
const StudentLifePage = lazy(() => import('./pages/StudentLifePage'))
const AicteIdeaLabPage = lazy(() => import('./pages/AicteIdeaLabPage'))
const IStartPage = lazy(() => import('./pages/IStartPage'))
const BlogsPage = lazy(() => import('./pages/BlogsPage'))
const BlogDetailPage = lazy(() => import('./pages/BlogDetailPage'))
const AlumniPage = lazy(() => import('./pages/AlumniPage'))
const NewsEventsPage = lazy(() => import('./pages/NewsEventsPage'))



// Simple Loading Fallback
const PageLoader = () => (
  <div className="flex items-center justify-center min-h-[60vh] text-[#224292]">
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
    if (location.hash) {
      const id = location.hash.replace('#', '')
      setTimeout(() => {
        const element = document.getElementById(id)
        if (element) {
          const offset = 120
          const bodyRect = document.body.getBoundingClientRect().top
          const elementRect = element.getBoundingClientRect().top
          const elementPosition = elementRect - bodyRect
          window.scrollTo({
            top: elementPosition - offset,
            behavior: 'smooth'
          })
        }
      }, 100)
    } else {
      window.scrollTo(0, 0)
    }
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
                  <Route path="/about/about-us" element={<AboutUsPage />} />
                  <Route path="/about/our-values" element={<OurValuesPage />} />
                  <Route path="/about/leadership" element={<LeadershipPage />} />
                  <Route path="/about/head-of-the-department" element={<HeadOfDepartmentPage />} />
                  <Route path="/about/guidelines" element={<GuidelinesPage />} />
                  <Route path="/about/accreditation-ranking" element={<AccreditationPage />} />
                  <Route path="/about/governing-council" element={<GoverningCouncilPage />} />
                  <Route path="/about-us" element={<AboutUsPage />} />
                  <Route path="/our-values" element={<OurValuesPage />} />
                  <Route path="/leadership" element={<LeadershipPage />} />
                  <Route path="/guidelines" element={<GuidelinesPage />} />
                  <Route path="/accreditation-ranking" element={<AccreditationPage />} />
                  <Route path="/governing-council" element={<GoverningCouncilPage />} />
                  
                  {/* Placement Pages */}
                  <Route path="/placements" element={<UnderConstruction />} />
                  <Route path="/placements/overview" element={<PlacementOverviewPage />} />
                  <Route path="/placements/training" element={<TrainingOverviewPage />} />
                  <Route path="/placements/outcomes" element={<OutcomesOverviewPage />} />
                  <Route path="/placements/recruitment" element={<OutcomesOverviewPage />} />
                  <Route path="/placements/records" element={<OutcomesOverviewPage />} />
                  <Route path="/placement-overview" element={<PlacementOverviewPage />} />
                  <Route path="/training" element={<TrainingOverviewPage />} />
                  <Route path="/recruitment" element={<RecruitmentPage />} />
                  <Route path="/records" element={<OutcomesOverviewPage />} />
                  <Route path="/outcomes" element={<OutcomesOverviewPage />} />

                  {/* Academics Pages */}
                  <Route path="/academics/undergraduate" element={<AcademicsPageWrapper />} />
                  <Route path="/academics/postgraduate" element={<AcademicsPageWrapper />} />
                  <Route path="/academics/autonomous" element={<AutonomousPage />} />
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
                   <Route path="/research-innovation/research" element={<ResearchPage />} />
                   <Route path="/research" element={<ResearchPage />} />
                   <Route path="/research-innovation/aicte-idea-lab" element={<AicteIdeaLabPage />} />
                   <Route path="/aicte-idea-lab" element={<AicteIdeaLabPage />} />
                   <Route path="/research-innovation/istart" element={<IStartPage />} />
                   <Route path="/istart" element={<IStartPage />} />

                   <Route path="/research/:deptName" element={<ResearchResourcesPage />} />
                   <Route path="/research/:deptName/phd-supervisors" element={<PhdSupervisorsPage />} />
                   <Route path="/research/:deptName/research-areas" element={<ResearchAreasPage />} />
                   <Route path="/research/:deptName/phd-holders" element={<PhdHoldersPage />} />
                   <Route path="/research/:deptName/pursuing-phd" element={<FacultyPursuingPhdPage />} />
                   <Route path="/research/:deptName/guided-scholars" element={<PhdGuidedPage />} />
                   <Route path="/research/:deptName/facilities" element={<ResearchFacilitiesPage />} />
                   <Route path="/research/:deptName/sponsored-projects" element={<SponsoredProjectsPage />} />
                   <Route path="/research/:deptName/international-publications" element={<InternationalPublicationsPage />} />
                   <Route path="/research/:deptName/medical-imaging" element={<MedicalImagingPage />} />
                   <Route path="/research/:deptName/publications-non-indexed" element={<NonIndexedPublicationsPage />} />
                   <Route path="/research/:deptName/conferences" element={<ConferencesPage />} />
                   <Route path="/research/:deptName/research-proposals" element={<ResearchProposalsPage />} />
                   <Route path="/research/:deptName/consultancy" element={<ConsultancyPage />} />
                   <Route path="/resources/iqac" element={<IQACPage />} />
                   <Route path="/resources/campus-life" element={<CampusLifePage />} />
                    <Route path="/resources/student-life" element={<StudentLifePage />} />
                    <Route path="/resources/alumni" element={<AlumniPage />} />
                    <Route path="/resources/news-events" element={<NewsEventsPage />} />
                    <Route path="/resources/blogs" element={<BlogsPage />} />
                    <Route path="/resources" element={<UnderConstruction />} />
                  <Route path="/autonomous" element={<AutonomousPage />} />
                  <Route path="/exams" element={<COEPage />} />
                  <Route path="/coe" element={<COEPage />} />
                  <Route path="/exams/about-coe" element={<AboutCOEPage />} />
                  <Route path="/exams/schedules" element={<ExamSchedulesPage />} />
                  <Route path="/exams/circulars" element={<CircularsPage />} />
                  <Route path="/exams/circular" element={<CircularsPage />} />
                  <Route path="/campus-life" element={<CampusLifePage />} />
              <Route path="/campus-life/library" element={<LibraryPage />} />
              <Route path="/campus-life/sports" element={<SportsPage />} />
              <Route path="/campus-life/sports/achievements/:category" element={<SportsDetailPage />} />
              <Route path="/campus-life/classroom" element={<ClassroomPage />} />
              <Route path="/campus-life/tour" element={<TourPage />} />
              <Route path="/campus-life/transport" element={<TransportPage />} />
              <Route path="/campus-life/amenities" element={<AmenitiesPage />} />
              <Route path="/campus-life/insurance" element={<InsurancePage />} />
              <Route path="/campus-life/media" element={<MediaCenterPage />} />
              <Route path="/campus-life/energy" element={<EnergyPage />} />
              <Route path="/campus-life/internet" element={<InternetPage />} />
                  <Route path="/campus-life/library/access" element={<LibraryAccessPage />} />
                  <Route path="/campus-life/library/collections" element={<LibraryBooksPage />} />
                  <Route path="/campus-life/library/journals" element={<LibraryJournalsPage />} />
                  <Route path="/campus-life/library/achievements" element={<LibraryMagazinesPage />} />
                  <Route path="/campus-life/sports/faculty" element={<SportsFacultyPage />} />
                  <Route path="/campus-life/sports/facilities" element={<SportsFacilitiesPage />} />
                  <Route path="/bus-routes" element={<BusRoutesPage />} />
                  <Route path="/student-life" element={<StudentLifePage />} />
                  <Route path="/alumni" element={<AlumniPage />} />
                  <Route path="/news-events" element={<NewsEventsPage />} />
                  <Route path="/blogs" element={<BlogsPage />} />
                  <Route path="/blog/:slug" element={<BlogDetailPage />} />

                  <Route path="/events" element={<EventsPage />} />
                  <Route path="/events/:eventSlug" element={<EventDetailPage />} />
                  <Route path="*" element={<NotFoundPage />} />
                </Routes>
              </Suspense>
            </AnimatePresence>
          </main>

          <Footer />
          <ScrollToTop />

          {/* ─── GLOBAL ADMISSIONS POPUP - COMPACT VERSION ─── */}
          <AnimatePresence>
            {showGlobalPopup && (
              <motion.div 
                initial={{ x: -100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: -100, opacity: 0 }}
                className="fixed bottom-6 left-6 z-[3000] w-[260px] bg-white rounded-2xl shadow-[0_20px_70px_rgba(10,26,63,0.25)] overflow-hidden border border-slate-100 flex flex-col font-graphik"
              >
                <div className="bg-[#224292] p-5 pb-6 flex flex-col items-center text-center relative">
                    <button 
                      onClick={handleClosePopup}
                      className="absolute top-3 right-3 w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white hover:text-[#224292] transition-all z-20"
                    >
                      <X size={16} />
                    </button>
                    <div className="w-12 h-12 bg-[#ffc107] rounded-xl flex items-center justify-center text-[#224292] mb-4 shadow-lg relative z-10">
                        <GraduationCap size={24} />
                    </div>
                    <h2 className="text-white text-[11px] font-black uppercase tracking-[0.2em] mb-1 relative z-10 opacity-80">Admissions</h2>
                    <h3 className="text-white text-3xl font-black tracking-tighter leading-none relative z-10">2026-27</h3>
                </div>
                <div className="p-5 pt-0 -mt-4 relative z-20">
                    <div className="bg-white rounded-2xl p-4 shadow-xl border border-slate-50 flex flex-col items-center text-center">
                        <p className="text-[#224292] text-[13px] font-black leading-tight mb-3">
                            Applications are now open for all departments.
                        </p>
                        <button 
                          onClick={() => { handleClosePopup(); navigate('/admissions'); }}
                          className="w-full py-3 bg-[#ffc107] text-[#224292] rounded-xl font-black text-[13px] uppercase tracking-[0.1em] hover:bg-[#224292] hover:text-white transition-all shadow-md flex items-center justify-center gap-2"
                        >
                          Apply Now
                        </button>
                    </div>
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
