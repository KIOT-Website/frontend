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
import AccreditationPage from './pages/AccreditationPage'
import GoverningCouncilPage from './pages/GoverningCouncilPage'
import GuidelinesPage from './pages/GuidelinesPage'
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
                   <Route path="/resources/campus-life" element={<CampusLifePage />} />
                    <Route path="/resources/student-life" element={<StudentLifePage />} />
                    <Route path="/resources/alumni" element={<AlumniPage />} />
                    <Route path="/resources/news-events" element={<UnderConstruction />} />
                    <Route path="/resources/blogs" element={<BlogsPage />} />
                    <Route path="/resources" element={<UnderConstruction />} />
                  <Route path="/autonomous" element={<AutonomousPage />} />
                  <Route path="/exams" element={<COEPage />} />
                  <Route path="/exams/schedules" element={<ExamSchedulesPage />} />
                  <Route path="/coe" element={<COEPage />} />
                  <Route path="/coe/exam-schedules" element={<ExamSchedulesPage />} />
                  <Route path="/campus-life" element={<CampusLifePage />} />
              <Route path="/campus-life/library" element={<LibraryPage />} />
              <Route path="/campus-life/sports" element={<SportsPage />} />
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
                  <Route path="/news-events" element={<UnderConstruction />} />
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

          {/* ─── GLOBAL ADMISSIONS POPUP ─── */}
          <AnimatePresence>
            {showGlobalPopup && (
              <motion.div 
                initial={{ y: 100, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                exit={{ y: 100, opacity: 0 }}
                className="fixed bottom-4 left-4 z-[3000] w-[190px] md:w-[260px] bg-white rounded-xl md:rounded-2xl shadow-[0_15px_40px_rgba(10,26,63,0.25)] md:shadow-[0_20px_60px_rgba(10,26,63,0.3)] overflow-hidden p-5 md:p-8 border border-slate-100 flex flex-col items-center text-center md:bottom-10 md:left-10"
              >
                <button 
                  onClick={handleClosePopup}
                  className="absolute top-4 right-4 w-7 h-7 rounded-full bg-slate-50 flex items-center justify-center text-slate-400 hover:bg-[#18357a] hover:text-white transition-all"
                >
                  <X size={16} />
                </button>

                {/* Decorative Dots */}
                <div className="absolute top-4 left-6 flex gap-1.2 opacity-20">
                   <div className="w-1.5 h-1.5 rounded-full bg-[#18357a]" />
                   <div className="w-1.5 h-1.5 rounded-full bg-[#18357a]" />
                </div>

                <div className="mb-4 mt-2 w-full">
                   <span className="text-red-600 font-black text-[10px] md:text-[11px] uppercase tracking-[0.3em] block mb-1">ADMISSION</span>
                   <h2 className="text-4xl md:text-5xl font-black text-[#18357a] uppercase tracking-tighter leading-none mb-6">
                     Open
                   </h2>
                   
                   <button 
                     onClick={() => { handleClosePopup(); navigate('/admissions'); }}
                     className="w-full py-4 bg-[#18357a] text-white rounded-xl font-black text-[11px] md:text-[12px] uppercase tracking-[0.2em] hover:bg-[#ffc107] hover:text-[#18357a] transition-all shadow-lg shadow-[#18357a]/20"
                   >
                     Apply Now
                   </button>
                </div>

                <p className="text-black font-black text-[9px] md:text-[10px] uppercase tracking-[0.25em] opacity-80">
                  Academic Session 2026-27
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      )}
    </div>
  )
}

export default App
