import { motion, useScroll, useSpring, AnimatePresence } from 'framer-motion'
import { useState, useEffect, lazy, Suspense } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import Lenis from 'lenis'
import 'lenis/dist/lenis.css'

// Common Components
import Header from './components/Common/Header'
import ScrollToTop from './components/Common/ScrollToTop'
import Preloader from './components/Common/Preloader'
import Footer from './components/Common/Footer'
import ChatBot from './components/Common/ChatBot'

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
const COEDownloadsPage = lazy(() => import('./pages/COEDownloadsPage'))
const IICPage = lazy(() => import('./pages/IICPage'))
const StartupTNPage = lazy(() => import('./pages/StartupTNPage'))
const MSMEBIPage = lazy(() => import('./pages/MSMEBIPage'))
const MXIncubatorPage = lazy(() => import('./pages/MXIncubatorPage'))
const FlamePage = lazy(() => import('./pages/FlamePage'))
const IntecPage = lazy(() => import('./pages/IntecPage'))
const VibesPage = lazy(() => import('./pages/VibesPage'))
const PacePage = lazy(() => import('./pages/PacePage'))
const AmberzPage = lazy(() => import('./pages/AmberzPage'))



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
    // Force documentElement to visible overflow to prevent scroll-locking issues
    document.documentElement.style.overflowX = 'visible';
    document.documentElement.style.height = 'initial';
  }, [])

  useEffect(() => {
    // Deactivate Lenis completely to ensure native browser scrolling works on all viewports and avoids scroll-lock bugs
    return;
    const lenis = new Lenis({
      duration: 0.9,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1.1,
      smoothTouch: false,
      infinite: false,
    })

    window.lenis = lenis

    let rafId
    function raf(time) {
      lenis.raf(time)
      rafId = requestAnimationFrame(raf)
    }

    rafId = requestAnimationFrame(raf)

    // Globally intercept window.scrollTo and Element.prototype.scrollIntoView when Lenis is running
    const originalScrollTo = window.scrollTo
    window.scrollTo = (optionsOrX, y) => {
      if (typeof optionsOrX === 'object') {
        const { top = 0, behavior } = optionsOrX
        if (behavior === 'smooth') {
          lenis.scrollTo(top, { duration: 0.9 })
        } else {
          lenis.scrollTo(top, { immediate: true })
        }
      } else {
        const topVal = y !== undefined ? y : optionsOrX
        lenis.scrollTo(topVal, { immediate: true })
      }
    }

    const originalScrollIntoView = Element.prototype.scrollIntoView
    Element.prototype.scrollIntoView = function (options) {
      if (options && typeof options === 'object') {
        const { behavior } = options
        if (behavior === 'smooth') {
          lenis.scrollTo(this, { offset: options.block === 'start' ? -120 : 0 })
          return
        }
      }
      originalScrollIntoView.call(this, options)
    }

    return () => {
      lenis.destroy()
      cancelAnimationFrame(rafId)
      window.scrollTo = originalScrollTo
      Element.prototype.scrollIntoView = originalScrollIntoView
      window.lenis = null
    }
  }, [])

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
      setTimeout(() => {
        window.scrollTo(0, 0)
      }, 10)
    }
  }, [location])

  useEffect(() => {
    // Preserves default homepage meta title as requested
    if (location.pathname === '/') {
      document.title = "KIOT | Knowledge Institute of Technology";
      const metaDesc = document.querySelector('meta[name="description"]');
      if (metaDesc) {
        metaDesc.setAttribute("content", "Knowledge Institute of Technology (KIOT) - An autonomous institution committed to technical excellence, global placements, and innovative engineering education in Salem.");
      }
      return;
    }

    const staticMeta = {
      "/contact": {
        title: "Contact Us | KIOT Salem",
        desc: "Get in touch with Knowledge Institute of Technology (KIOT) in Salem. Find contact details, location map, and enquiry forms for admissions."
      },
      "/about/about-us": {
        title: "About KIOT | Knowledge Institute of Technology",
        desc: "Learn about KIOT, a leading autonomous engineering college in Salem, Tamil Nadu, committed to technical excellence and placements."
      },
      "/about-us": {
        title: "About KIOT | Knowledge Institute of Technology",
        desc: "Learn about KIOT, a leading autonomous engineering college in Salem, Tamil Nadu, committed to technical excellence and placements."
      },
      "/about/our-values": {
        title: "Vision, Mission & Values | KIOT",
        desc: "Explore the core values, vision, and mission that drive Knowledge Institute of Technology towards academic and engineering excellence."
      },
      "/our-values": {
        title: "Vision, Mission & Values | KIOT",
        desc: "Explore the core values, vision, and mission that drive Knowledge Institute of Technology towards academic and engineering excellence."
      },
      "/about/promoters": {
        title: "Promoters & Founders | KIOT",
        desc: "Meet the visionary promoters and founders of Knowledge Institute of Technology (KIOT) driving quality education in Salem."
      },
      "/promoters": {
        title: "Promoters & Founders | KIOT",
        desc: "Meet the visionary promoters and founders of Knowledge Institute of Technology (KIOT) driving quality education in Salem."
      },
      "/about/leadership": {
        title: "Leadership & Administration | KIOT",
        desc: "Meet the administrative leadership, principal, and heads of departments guiding Knowledge Institute of Technology."
      },
      "/leadership": {
        title: "Leadership & Administration | KIOT",
        desc: "Meet the administrative leadership, principal, and heads of departments guiding Knowledge Institute of Technology."
      },
      "/about/institutional-policies": {
        title: "Institutional Policies | KIOT",
        desc: "Read the guidelines, code of conduct, and institutional policies of Knowledge Institute of Technology for students and faculty."
      },
      "/institutional-policies": {
        title: "Institutional Policies | KIOT",
        desc: "Read the guidelines, code of conduct, and institutional policies of Knowledge Institute of Technology for students and faculty."
      },
      "/about/accreditation-ranking": {
        title: "Accreditations & Rankings | KIOT",
        desc: "Discover KIOT's NAAC accreditations, NBA status, rankings, and certifications highlighting our commitment to quality education."
      },
      "/accreditation-ranking": {
        title: "Accreditations & Rankings | KIOT",
        desc: "Discover KIOT's NAAC accreditations, NBA status, rankings, and certifications highlighting our commitment to quality education."
      },
      "/about/governing-council": {
        title: "Governing Council Members | KIOT",
        desc: "Meet the distinguished academic and industry leaders forming the Governing Council of Knowledge Institute of Technology."
      },
      "/governing-council": {
        title: "Governing Council Members | KIOT",
        desc: "Meet the distinguished academic and industry leaders forming the Governing Council of Knowledge Institute of Technology."
      },
      "/resources/iqac": {
        title: "IQAC Cell | Internal Quality Assurance",
        desc: "Internal Quality Assurance Cell (IQAC) at KIOT ensures continuous improvement in academic and administrative performance."
      },
      "/placements": {
        title: "Placement Cell & Overview | KIOT",
        desc: "Explore placement records, top recruiters, and career development initiatives at Knowledge Institute of Technology, Salem."
      },
      "/placements/placement": {
        title: "Placement Cell & Overview | KIOT",
        desc: "Explore placement records, top recruiters, and career development initiatives at Knowledge Institute of Technology, Salem."
      },
      "/placement-overview": {
        title: "Placement Cell & Overview | KIOT",
        desc: "Explore placement records, top recruiters, and career development initiatives at Knowledge Institute of Technology, Salem."
      },
      "/placements/training": {
        title: "Career Development & Training | KIOT",
        desc: "Learn about training modules, soft skills, aptitude development, and technical coaching for KIOT students."
      },
      "/cdt": {
        title: "Career Development & Training | KIOT",
        desc: "Learn about training modules, soft skills, aptitude development, and technical coaching for KIOT students."
      },
      "/placements/outcomes": {
        title: "Placement Records & Outcomes | KIOT",
        desc: "View the placement achievements, packages, list of placed students, and placement statistics of KIOT."
      },
      "/records": {
        title: "Placement Records & Outcomes | KIOT",
        desc: "View the placement achievements, packages, list of placed students, and placement statistics of KIOT."
      },
      "/outcomes": {
        title: "Placement Records & Outcomes | KIOT",
        desc: "View the placement achievements, packages, list of placed students, and placement statistics of KIOT."
      },
      "/placements/recruitment": {
        title: "Placement Records & Outcomes | KIOT",
        desc: "View the placement achievements, packages, list of placed students, and placement statistics of KIOT."
      },
      "/placements/records": {
        title: "Placement Records & Outcomes | KIOT",
        desc: "View the placement achievements, packages, list of placed students, and placement statistics of KIOT."
      },
      "/recruitment": {
        title: "Recruitment Portal | KIOT Salem",
        desc: "Apply for careers, faculty positions, and student recruitment programs at Knowledge Institute of Technology."
      },
      "/academics/undergraduate": {
        title: "Undergraduate Engineering Programs | KIOT",
        desc: "Explore B.E. and B.Tech undergraduate courses offered by Knowledge Institute of Technology in various engineering branches."
      },
      "/ug-programs": {
        title: "Undergraduate Engineering Programs | KIOT",
        desc: "Explore B.E. and B.Tech undergraduate courses offered by Knowledge Institute of Technology in various engineering branches."
      },
      "/academics/postgraduate": {
        title: "Postgraduate Engineering Programs | KIOT",
        desc: "Discover M.E. postgraduate engineering courses and MBA programs at Knowledge Institute of Technology."
      },
      "/pg-programs": {
        title: "Postgraduate Engineering Programs | KIOT",
        desc: "Discover M.E. postgraduate engineering courses and MBA programs at Knowledge Institute of Technology."
      },
      "/academics/autonomous": {
        title: "Autonomous Regulations & Syllabus | KIOT",
        desc: "View the autonomous academic regulations, curriculum, and course syllabi of Knowledge Institute of Technology."
      },
      "/autonomous": {
        title: "Autonomous Regulations & Syllabus | KIOT",
        desc: "View the autonomous academic regulations, curriculum, and course syllabi of Knowledge Institute of Technology."
      },
      "/admissions": {
        title: "Admissions 2026-27 | KIOT Salem",
        desc: "Apply for B.E., B.Tech, M.E., and MBA admissions. Find eligibility criteria, application process, and fee details."
      },
      "/admissions/ug-registration": {
        title: "UG Admission Registration | KIOT",
        desc: "Register online for B.E. & B.Tech undergraduate admissions at Knowledge Institute of Technology."
      },
      "/admissions/pg-registration": {
        title: "PG Admission Registration | KIOT",
        desc: "Register online for M.E. and MBA postgraduate admissions at Knowledge Institute of Technology."
      },
      "/research-innovation/research": {
        title: "Research & Development Cell | KIOT",
        desc: "Discover research projects, patents, supervisor details, and funding received by Knowledge Institute of Technology."
      },
      "/research": {
        title: "Research & Development Cell | KIOT",
        desc: "Discover research projects, patents, supervisor details, and funding received by Knowledge Institute of Technology."
      },
      "/research-innovation/aicte-idea-lab": {
        title: "AICTE IDEA Lab | Innovation Center",
        desc: "Explore the state-of-the-art AICTE IDEA Lab at KIOT for hands-on prototyping, design thinking, and product development."
      },
      "/aicte-idea-lab": {
        title: "AICTE IDEA Lab | Innovation Center",
        desc: "Explore the state-of-the-art AICTE IDEA Lab at KIOT for hands-on prototyping, design thinking, and product development."
      },
      "/research-innovation/istart": {
        title: "iStart Innovation Portal | KIOT",
        desc: "Learn about entrepreneurship support, start-up incubation, and innovation funding opportunities at KIOT Salem."
      },
      "/istart": {
        title: "iStart Innovation Portal | KIOT",
        desc: "Learn about entrepreneurship support, start-up incubation, and innovation funding opportunities at KIOT Salem."
      },
      "/research-innovation/iic": {
        title: "Institution's Innovation Council | KIOT",
        desc: "Explore Innovation activities, entrepreneurship drives, and start-up initiatives managed by IIC at KIOT."
      },
      "/research-innovation/startuptn": {
        title: "StartupTN Hub | Incubation & Ventures",
        desc: "Discover start-up resources, government schemes, and business incubation support through StartupTN hub at KIOT."
      },
      "/research-innovation/msme-bi": {
        title: "MSME Business Incubator | KIOT",
        desc: "Support for innovative projects, funding schemes, and technology start-ups at MSME Business Incubator in KIOT."
      },
      "/research-innovation/mx-incubator": {
        title: "MX Incubation Center | KIOT Salem",
        desc: "Grow your start-up with mentorship, space, and investor access at MX Incubator in Knowledge Institute of Technology."
      },
      "/exams": {
        title: "Controller of Examinations (COE) | KIOT",
        desc: "Access exams portals, notifications, rules and regulations under the Controller of Examinations at KIOT."
      },
      "/coe": {
        title: "Controller of Examinations (COE) | KIOT",
        desc: "Access exams portals, notifications, rules and regulations under the Controller of Examinations at KIOT."
      },
      "/exams/about-coe": {
        title: "About COE Office | KIOT Salem",
        desc: "Learn about the Controller of Examinations office, evaluation policies, and academic calendars at KIOT."
      },
      "/exams/schedules": {
        title: "Exam Schedules & Timetables | KIOT",
        desc: "View current semester exam schedules, timetables, and seating arrangements for KIOT autonomous examinations."
      },
      "/exams/circulars": {
        title: "Exam Circulars & Notifications | KIOT",
        desc: "Stay updated with exam circulars, fee deadlines, hall ticket downloads, and results notifications at KIOT."
      },
      "/exams/circular": {
        title: "Exam Circulars & Notifications | KIOT",
        desc: "Stay updated with exam circulars, fee deadlines, hall ticket downloads, and results notifications at KIOT."
      },
      "/exams/downloads": {
        title: "COE Downloads & Forms | KIOT",
        desc: "Download application forms for revaluation, transcripts, duplicate marksheets, and COE documents at KIOT."
      },
      "/campus-life": {
        title: "Campus Life & Facilities | KIOT Salem",
        desc: "Explore campus infrastructure, hostels, smart classrooms, transport, green initiatives, and amenities at KIOT."
      },
      "/resources/campus-life": {
        title: "Campus Life & Facilities | KIOT Salem",
        desc: "Explore campus infrastructure, hostels, smart classrooms, transport, green initiatives, and amenities at KIOT."
      },
      "/campus-life/library": {
        title: "Central Library & Resources | KIOT",
        desc: "Access digital library, online journals, books, publications, and study spaces at KIOT Central Library."
      },
      "/campus-life/sports": {
        title: "Sports & Physical Education | KIOT",
        desc: "Discover sports achievements, indoor/outdoor sports facilities, gymnasiums, and athletic events at KIOT."
      },
      "/campus-life/classroom": {
        title: "Smart Classrooms & Audio-Visuals | KIOT",
        desc: "Experience smart learning with modern AV equipment, high-speed Wi-Fi, and interactive lecture halls at KIOT."
      },
      "/campus-life/tour": {
        title: "Virtual Campus Tour | KIOT Salem",
        desc: "Take a virtual tour of the KIOT campus. Explore labs, library, hostel, cafeteria, and engineering blocks."
      },
      "/campus-life/transport": {
        title: "Campus Transport & Bus Routes | KIOT",
        desc: "Access KIOT transport facilities, bus routes covering Salem and neighboring districts, and schedules."
      },
      "/campus-life/amenities": {
        title: "Student Amenities & Infrastructure | KIOT",
        desc: "Explore dining halls, cafeteria, medical center, bank ATMs, and daily student amenities at KIOT campus."
      },
      "/campus-life/insurance": {
        title: "Student Insurance Policies | KIOT",
        desc: "Find details about health insurance, safety coverage, and emergency medical policies for KIOT students."
      },
      "/campus-life/media": {
        title: "Media Center & Press Gallery | KIOT",
        desc: "Check latest news, media coverage, newsletters, photo galleries, and press releases about KIOT Salem."
      },
      "/campus-life/energy": {
        title: "Energy Initiatives & Solar Power | KIOT",
        desc: "Explore sustainable energy, rooftop solar plants, waste management, and green campus policies at KIOT."
      },
      "/campus-life/internet": {
        title: "Wi-Fi & IT Infrastructure | KIOT",
        desc: "Learn about high-speed internet, campus-wide Wi-Fi, digital servers, and computer laboratories at KIOT."
      },
      "/campus-life/library/access": {
        title: "Library Access & Membership | KIOT",
        desc: "Find library opening hours, borrowing rules, OPAC access, and membership details for KIOT library."
      },
      "/campus-life/library/collections": {
        title: "Library Books Collections | KIOT",
        desc: "Search titles, reference books, encyclopedias, text-books, and reference lists at KIOT library."
      },
      "/campus-life/library/journals": {
        title: "e-Journals & Publications | KIOT Library",
        desc: "Browse IEEE, Springer, Elsevier e-journals and standard print periodicals available at KIOT Library."
      },
      "/campus-life/library/achievements": {
        title: "Library Milestones & Highlights | KIOT",
        desc: "Explore special achievements, NDLI club activities, and digital milestones of KIOT library."
      },
      "/campus-life/sports/faculty": {
        title: "Physical Education Department | KIOT",
        desc: "Meet the physical directors and sports trainers coaching students at Knowledge Institute of Technology."
      },
      "/campus-life/sports/facilities": {
        title: "Sports Infrastructure & Ground | KIOT",
        desc: "Explore basketball courts, cricket turf, football ground, and indoor games facilities at KIOT."
      },
      "/bus-routes": {
        title: "Transport Bus Routes & Stops | KIOT",
        desc: "Find dynamic bus routes, stops, pick-up timings, and transport pass info for KIOT college buses."
      },
      "/resources/student-life": {
        title: "Student Clubs & Activities | KIOT",
        desc: "Discover technical clubs, cultural societies, NSS, NCC, and student development activities at KIOT."
      },
      "/student-life": {
        title: "Student Clubs & Activities | KIOT",
        desc: "Discover technical clubs, cultural societies, NSS, NCC, and student development activities at KIOT."
      },
      "/student-life/flame": {
        title: "FLAME Literary & Fine Arts Club | KIOT",
        desc: "Explore literary activities, debating, public speaking, drawing, and fine arts events by FLAME Club at KIOT."
      },
      "/resources/student-life/flame": {
        title: "FLAME Literary & Fine Arts Club | KIOT",
        desc: "Explore literary activities, debating, public speaking, drawing, and fine arts events by FLAME Club at KIOT."
      },
      "/student-life/intec": {
        title: "INTEC Information Technology Club | KIOT",
        desc: "Join hackathons, coding contests, app development drives, and tech talks by INTEC club at KIOT."
      },
      "/resources/student-life/intec": {
        title: "INTEC Information Technology Club | KIOT",
        desc: "Join hackathons, coding contests, app development drives, and tech talks by INTEC club at KIOT."
      },
      "/student-life/vibes": {
        title: "VIBES Cultural & Dance Club | KIOT",
        desc: "Discover cultural events, music bands, traditional festivals, and dance achievements by VIBES club."
      },
      "/resources/student-life/vibes": {
        title: "VIBES Cultural & Dance Club | KIOT",
        desc: "Discover cultural events, music bands, traditional festivals, and dance achievements by VIBES club."
      },
      "/student-life/pace": {
        title: "PACE Professional Association | KIOT",
        desc: "Participate in leadership summits, business plans, and corporate skills training by PACE association at KIOT."
      },
      "/resources/student-life/pace": {
        title: "PACE Professional Association | KIOT",
        desc: "Participate in leadership summits, business plans, and corporate skills training by PACE association at KIOT."
      },
      "/student-life/amberz": {
        title: "AMBERZ Science & Innovation Club | KIOT",
        desc: "Fostering scientific temper with science fairs, innovative projects, and tech quizzes by AMBERZ club at KIOT."
      },
      "/resources/student-life/amberz": {
        title: "AMBERZ Science & Innovation Club | KIOT",
        desc: "Fostering scientific temper with science fairs, innovative projects, and tech quizzes by AMBERZ club at KIOT."
      },
      "/resources/alumni": {
        title: "Alumni Network & Portal | KIOT Salem",
        desc: "Connect with global KIOT alumni. Join alumni chapters, mentorship programs, and annual meets."
      },
      "/alumni": {
        title: "Alumni Network & Portal | KIOT Salem",
        desc: "Connect with global KIOT alumni. Join alumni chapters, mentorship programs, and annual meets."
      },
      "/blogs": {
        title: "KIOT Blogs & Articles Portal",
        desc: "Read the latest articles, academic insights, technical innovations, and stories written by KIOT faculty & students."
      },
      "/resources/blogs": {
        title: "KIOT Blogs & Articles Portal",
        desc: "Read the latest articles, academic insights, technical innovations, and stories written by KIOT faculty & students."
      },
      "/events": {
        title: "KIOT Events & Conferences Agenda",
        desc: "Stay updated with technical symposiums, workshops, guest lectures, and cultural events at KIOT Salem."
      }
    };

    let matched = staticMeta[location.pathname];

    // Handle dynamic path matching
    if (!matched) {
      const path = location.pathname;
      if (path.startsWith('/academics/course/') || path.startsWith('/academics/undergraduate/') || path.startsWith('/academics/postgraduate/')) {
        const parts = path.split('/');
        const id = parts[parts.length - 1];
        const courseMap = {
          'be-cse': 'B.E. Computer Science & Engineering',
          'be-ece': 'B.E. Electronics & Communication',
          'be-eee': 'B.E. Electrical & Electronics',
          'be-mech': 'B.E. Mechanical Engineering',
          'be-civil': 'B.E. Civil Engineering',
          'btech-it': 'B.Tech Information Technology',
          'btech-aids': 'B.Tech AI & Data Science',
          'btech-csbs': 'B.Tech CS & Business Systems',
          'science-humanities': 'Science & Humanities'
        };
        const courseName = courseMap[id] || id.replace(/-/g, ' ').replace(/\b\w/g, c => c.toUpperCase());
        matched = {
          title: `${courseName} Course Info | KIOT`,
          desc: `Find details about the ${courseName} course at KIOT, including curriculum, syllabus, eligibility, laboratory facilities, and placement stats.`
        };
      } else if (path.startsWith('/department/') || path.startsWith('/students-admitted-department/')) {
        const parts = path.split('/');
        const id = parts[parts.length - 1].toLowerCase();
        const deptNames = {
          'cse': 'Computer Science & Engineering',
          'ece': 'Electronics & Communication',
          'eee': 'Electrical & Electronics',
          'mech': 'Mechanical Engineering',
          'civil': 'Civil Engineering',
          'it': 'Information Technology',
          'aids': 'Artificial Intelligence & Data Science',
          'csbs': 'Computer Science & Business Systems'
        };
        const dept = deptNames[id] || id.toUpperCase();
        matched = {
          title: `${dept} Department | KIOT`,
          desc: `Explore the ${dept} department at Knowledge Institute of Technology. Learn about faculty, laboratory labs, syllabus, and student achievements.`
        };
      } else if (path.startsWith('/research/')) {
        const parts = path.split('/');
        const sub = parts[parts.length - 1];
        const subId = parts[2]?.toLowerCase() || '';
        const deptNames = {
          'cse': 'Computer Science & Engineering',
          'ece': 'Electronics & Communication',
          'eee': 'Electrical & Electronics',
          'mech': 'Mechanical Engineering',
          'civil': 'Civil Engineering',
          'it': 'Information Technology'
        };
        const dept = deptNames[subId] || subId.toUpperCase();
        const type = sub.replace(/-/g, ' ').replace(/\b\w/g, c => c.toUpperCase());
        matched = {
          title: `${dept} ${type} | KIOT`,
          desc: `Explore the ${type} and innovation projects within the ${dept} department at Knowledge Institute of Technology, Salem.`
        };
      } else if (path.startsWith('/blog/')) {
        matched = {
          title: "KIOT Blog Post - Read Article",
          desc: "Read this academic and technical article from the Knowledge Institute of Technology (KIOT) community blogs."
        };
      } else if (path.startsWith('/events/')) {
        matched = {
          title: "KIOT Event Details",
          desc: "View details about upcoming and past academic, sports, and cultural events hosted at KIOT Salem."
        };
      } else if (path.startsWith('/campus-life/sports/achievements/')) {
        matched = {
          title: "Sports Achievements | KIOT",
          desc: "View dynamic sports awards, championship trophies, and athletic tournament achievements of KIOT students."
        };
      }
    }

    if (!matched) {
      matched = {
        title: "Page Not Found | KIOT Salem",
        desc: "The page you are looking for does not exist on the Knowledge Institute of Technology (KIOT) website. Go back or visit our homepage."
      };
    }

    // Apply limits: title < 60 characters, description < 160 characters
    document.title = matched.title.substring(0, 60);
    const descriptionElement = document.querySelector('meta[name="description"]');
    if (descriptionElement) {
      descriptionElement.setAttribute("content", matched.desc.substring(0, 160));
    }

    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) ogTitle.setAttribute("content", matched.title.substring(0, 60));
    
    const ogDesc = document.querySelector('meta[property="og:description"]');
    if (ogDesc) ogDesc.setAttribute("content", matched.desc.substring(0, 160));

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
                  <Route path="/about/promoters" element={<LeadershipPage />} />
                  <Route path="/about/leadership" element={<HeadOfDepartmentPage />} />
                  <Route path="/about/institutional-policies" element={<GuidelinesPage />} />
                  <Route path="/about/accreditation-ranking" element={<AccreditationPage />} />
                  <Route path="/about/governing-council" element={<GoverningCouncilPage />} />
                  <Route path="/about-us" element={<AboutUsPage />} />
                  <Route path="/our-values" element={<OurValuesPage />} />
                  <Route path="/promoters" element={<LeadershipPage />} />
                  <Route path="/leadership" element={<HeadOfDepartmentPage />} />
                  <Route path="/institutional-policies" element={<GuidelinesPage />} />
                  <Route path="/accreditation-ranking" element={<AccreditationPage />} />
                  <Route path="/governing-council" element={<GoverningCouncilPage />} />
                  
                  {/* Placement Pages */}
                  <Route path="/placements" element={<UnderConstruction />} />
                  <Route path="/placements/placement" element={<PlacementOverviewPage />} />
                  <Route path="/placements/training" element={<TrainingOverviewPage />} />
                  <Route path="/placements/outcomes" element={<OutcomesOverviewPage />} />
                  <Route path="/placements/recruitment" element={<OutcomesOverviewPage />} />
                  <Route path="/placements/records" element={<OutcomesOverviewPage />} />
                  <Route path="/placement-overview" element={<PlacementOverviewPage />} />
                  <Route path="/cdt" element={<TrainingOverviewPage />} />
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
                  <Route path="/academics/science-humanities" element={<CourseDetailPageWrapper key={location.pathname} overrides={{ courseId: 'science-humanities' }} />} />
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
                   <Route path="/research-innovation/iic" element={<IICPage />} />
                   <Route path="/research-innovation/startuptn" element={<StartupTNPage />} />
                   <Route path="/research-innovation/msme-bi" element={<MSMEBIPage />} />
                   <Route path="/research-innovation/mx-incubator" element={<MXIncubatorPage />} />

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
                    <Route path="/resources/blogs" element={<BlogsPage />} />
                    <Route path="/resources" element={<UnderConstruction />} />
                  <Route path="/autonomous" element={<AutonomousPage />} />
                  <Route path="/exams" element={<COEPage />} />
                  <Route path="/coe" element={<COEPage />} />
                  <Route path="/exams/about-coe" element={<AboutCOEPage />} />
                  <Route path="/exams/schedules" element={<ExamSchedulesPage />} />
                  <Route path="/exams/circulars" element={<CircularsPage />} />
                  <Route path="/exams/downloads" element={<COEDownloadsPage />} />
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
                  <Route path="/student-life/flame" element={<FlamePage />} />
                  <Route path="/resources/student-life/flame" element={<FlamePage />} />
                  <Route path="/student-life/intec" element={<IntecPage />} />
                  <Route path="/resources/student-life/intec" element={<IntecPage />} />
                  <Route path="/student-life/vibes" element={<VibesPage />} />
                  <Route path="/resources/student-life/vibes" element={<VibesPage />} />
                  <Route path="/student-life/pace" element={<PacePage />} />
                  <Route path="/resources/student-life/pace" element={<PacePage />} />
                  <Route path="/student-life/amberz" element={<AmberzPage />} />
                  <Route path="/resources/student-life/amberz" element={<AmberzPage />} />
                  <Route path="/alumni" element={<AlumniPage />} />
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

          <ChatBot />

          {/* ─── GLOBAL ADMISSIONS POPUP - COMPACT VERSION ─── */}
          <AnimatePresence>
            {showGlobalPopup && (
              <motion.div 
                initial={{ x: -100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: -100, opacity: 0 }}
                className="fixed bottom-4 left-4 sm:bottom-6 sm:left-6 z-[3000] w-[180px] sm:w-[220px] bg-white rounded-xl sm:rounded-2xl shadow-[0_20px_70px_rgba(10,26,63,0.25)] overflow-hidden border border-slate-100 flex flex-col font-graphik"
              >
                <div className="bg-[#224292] p-3 pb-4 sm:p-4 sm:pb-5 flex flex-col items-center text-center relative">
                    <button 
                      onClick={handleClosePopup}
                      className="absolute top-2 right-2 w-6 h-6 sm:top-3 sm:right-3 sm:w-7 sm:h-7 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white hover:text-[#224292] transition-all z-20"
                    >
                      <X size={12} className="sm:hidden" />
                      <X size={14} className="hidden sm:block" />
                    </button>
                    <div className="w-8 h-8 sm:w-10 sm:h-10 bg-[#ffc107] rounded-lg sm:rounded-xl flex items-center justify-center text-[#224292] mb-2 sm:mb-3 shadow-lg relative z-10">
                        <GraduationCap size={16} className="sm:hidden" />
                        <GraduationCap size={20} className="hidden sm:block" />
                    </div>
                    <h2 className="text-white text-[8px] sm:text-[9.5px] font-black uppercase tracking-[0.2em] mb-0.5 sm:mb-1 relative z-10 opacity-80">Admissions</h2>
                    <h3 className="text-white text-xl sm:text-2xl font-black tracking-tighter leading-none relative z-10">2026-27</h3>
                </div>
                <div className="p-3 pt-0 -mt-2 sm:p-4 sm:pt-0 sm:-mt-3 relative z-20">
                    <div className="bg-white rounded-xl sm:rounded-2xl p-2.5 sm:p-3 shadow-xl border border-slate-50 flex flex-col items-center text-center">
                        <p className="text-[#224292] text-[10px] sm:text-[11.5px] font-black leading-tight mb-2 sm:mb-2.5">
                            Applications are now open for all departments.
                        </p>
                        <button 
                          onClick={() => { handleClosePopup(); navigate('/admissions'); }}
                          className="w-full py-2 sm:py-2.5 bg-[#ffc107] text-[#224292] rounded-lg sm:rounded-xl font-black text-[10px] sm:text-[11px] uppercase tracking-[0.1em] hover:bg-[#224292] hover:text-white transition-all shadow-md flex items-center justify-center gap-1.5 sm:gap-2"
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
