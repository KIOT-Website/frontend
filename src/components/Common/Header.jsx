import { useEffect, useState, useRef } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import {
  ChevronDown,
  ChevronRight,
  ChevronsRight,
  Facebook,
  Instagram,
  Linkedin,
  MapPin,
  Menu,
  Phone,
  Search,
  Twitter,
  X,
  Youtube,
  Building2,
  Target,
  Users,
  GraduationCap,
  Calendar,
  FileText,
  ShieldCheck,
  Briefcase,
  LayoutGrid,
  FlaskConical,
  Cpu,
  Wrench,
  Layers,
  Globe,
  BookOpen,
  Download,
  Microscope,
  Award,
  Trophy,
  ArrowRight,
  Bell,
  CheckCircle2
} from 'lucide-react'
import logo from '../../assets/main/main-logo.webp'
import naacLogo from '../../assets/main/NAAC-Logo.webp'
import qsLogo from '../../assets/QS-I-GAUG/qs logo.png'
import qsGaugePdf from '../../assets/QS-I-GAUG/QS-I-GAUGE-Certificateet.pdf'
import codeLogo from '../../assets/main/2653 code.webp'

const navLinks = [
  { 
    name: 'Home', 
    href: '', 
    hasDropdown: false 
  },
  {
    name: 'About',
    href: '#',
    hasDropdown: true,
    subLinks: [
      { name: 'About Us', href: 'about/about-us', icon: Building2 },
      { name: 'Promoters', href: 'about/promoters', icon: Users },
      { name: "Leadership", href: 'about/leadership', icon: Users },
      { name: 'Governing Council', href: 'about/governing-council', icon: ShieldCheck },
      { name: 'Institutional Policies', href: 'about/institutional-policies', icon: FileText },
      { name: 'Accreditation & Ranking', href: 'about/accreditation-ranking', icon: FileText },
      { name: 'College Rules', href: 'about/college-rules', icon: BookOpen }
    ]
  },
  {
    name: 'Academics',
    href: '#',
    hasDropdown: true,
    subLinks: [
      { name: 'Undergraduate (UG)', href: 'academics/undergraduate', icon: GraduationCap },
      { name: 'Postgraduate (PG)', href: 'academics/postgraduate', icon: GraduationCap },
      { name: 'Autonomous', href: 'academics/autonomous', icon: ShieldCheck },
    ]
  },
  {
    name: 'Admissions',
    href: 'admissions',
    hasDropdown: false,
  },
  { 
    name: 'Placements', 
    href: '#',
    hasDropdown: true,
    subLinks: [
      { name: 'Placement', href: 'placements/placement', icon: Building2 },
      { name: 'Training', href: 'placements/training', icon: BookOpen },
      { name: 'Outcomes', href: 'placements/outcomes', icon: Target },
    ]
  },
  { 
    name: 'Research & Innovations', 
    href: '#',
    hasDropdown: true,
    subLinks: [
      { name: 'Research', href: 'research-innovation/research', icon: Microscope },
      { name: 'AICTE Idea Lab', href: 'research-innovation/aicte-idea-lab', icon: Wrench },
      { name: 'Corporate Contest Cell', href: 'research-innovation/iic', icon: Trophy },
      { name: 'iStart', href: 'research-innovation/istart', icon: Cpu },
    ]
  },
  { 
    name: 'Exams', 
    href: '#',
    hasDropdown: true,
    subLinks: [
      { name: 'About COE', href: 'exams/about-coe', icon: Building2 },
      { name: 'Circulars', href: 'exams/circulars', icon: Bell },
      { name: 'Exam Schedules', href: 'exams/schedules', icon: Calendar },
      { name: 'Results', href: 'https://coe.kiot.ac.in/', icon: CheckCircle2 },
      { name: 'Downloads', href: 'exams/downloads', icon: Download }
    ]
  },
  { 
    name: 'Resources', 
    href: '#', 
    hasDropdown: true,
    subLinks: [
      { name: 'IQAC', href: '/resources/iqac', icon: ShieldCheck },
      { name: 'Campus Life', href: '/resources/campus-life', icon: Building2 },
      { name: 'Student Life', href: '/resources/student-life', icon: Users },
      { name: 'Alumni', href: '/resources/alumni', icon: GraduationCap },
      { name: 'Blogs', href: '/resources/blogs', icon: FileText }
    ]
  },
  { 
    name: 'Online Payment', 
    href: 'https://formbuilder.ccavenue.com/live/city-union-bank/knowledge-institute-of-technology', 
    hasDropdown: false 
  },
  { name: 'Contact', href: 'contact' },
]

const socialLinks = [
  { name: 'Facebook', href: 'https://www.facebook.com/Kiotkbs/', icon: Facebook },
  { name: 'Instagram', href: 'https://www.instagram.com/infokiot/', icon: Instagram },
  { name: 'Twitter', href: 'https://x.com/infokiot', icon: X },
  { name: 'LinkedIn', href: 'https://www.linkedin.com/school/infokiot/', icon: Linkedin },
  { name: 'YouTube', href: 'https://www.youtube.com/@infokiot', icon: Youtube },
]

const searchableItems = [
  // Core pages
  { title: 'Home', type: 'Page', path: '/' },
  { title: 'Admissions & Registration', type: 'Admissions', path: '/admissions' },
  { title: 'UG Registration Application', type: 'Admissions', path: '/admissions/ug-registration' },
  { title: 'PG Registration Application', type: 'Admissions', path: '/admissions/pg-registration' },
  { title: 'Contact Us / Location', type: 'Page', path: '/contact' },
  
  // About section sublinks
  { title: 'About Us & History', type: 'About', path: '/about/about-us' },
  { title: 'Promoters & Trustees', type: 'About', path: '/about/promoters' },
  { title: 'Leadership & Executives', type: 'About', path: '/about/leadership' },
  { title: 'Governing Council Members', type: 'About', path: '/about/governing-council' },
  { title: 'Institutional Policies & Guidelines', type: 'About', path: '/about/institutional-policies' },
  { title: 'Accreditation, Rankings & NAAC', type: 'About', path: '/about/accreditation-ranking' },
  
  // Academics section
  { title: 'Undergraduate Programmes (B.E / B.Tech)', type: 'Academics', path: '/academics/undergraduate' },
  { title: 'Postgraduate Programmes (M.E / MBA / MCA)', type: 'Academics', path: '/academics/postgraduate' },
  { title: 'Science & Humanities Department', type: 'Academics', path: '/academics/science-humanities' },
  { title: 'Academic Autonomy Overview', type: 'Academics', path: '/academics/autonomous' },
  { title: 'Academic Schedule & Calendar', type: 'Academics', path: '/academics/autonomous#schedule' },
  { title: 'Academic Regulations', type: 'Academics', path: '/academics/autonomous#regulations' },
  
  // Placement section
  { title: 'Placement Cell Highlights', type: 'Placements', path: '/placements/placement' },
  { title: 'Placement Training & CDT Programs', type: 'Placements', path: '/placements/training' },
  { title: 'Placement Outcomes & Salary Statistics', type: 'Placements', path: '/placements/outcomes' },
  
  // Research & Innovations
  { title: 'Research & Development (R&D)', type: 'Research', path: '/research-innovation/research' },
  { title: 'AICTE Idea Lab Facility', type: 'Research', path: '/research-innovation/aicte-idea-lab' },
  { title: 'Corporate Contest Cell (IIC)', type: 'Research', path: '/research-innovation/iic' },
  { title: 'iStart & Innovation Cell', type: 'Research', path: '/research-innovation/istart' },
  
  // Exams section
  { title: 'About COE (Controller of Examinations)', type: 'Exams', path: '/exams/about-coe' },
  { title: 'Exams Circulars & Announcements', type: 'Exams', path: '/exams/circulars' },
  { title: 'Exam Schedules & Timetables', type: 'Exams', path: '/exams/schedules' },
  { title: 'Exam Results Portal', type: 'Exams', path: 'https://coe.kiot.ac.in/' },
  { title: 'Exam Downloads & Applications', type: 'Exams', path: '/exams/downloads' },
  
  // Resources
  { title: 'Internal Quality Assurance Cell (IQAC)', type: 'Resources', path: '/resources/iqac' },
  { title: 'Campus Life & Infrastructure', type: 'Resources', path: '/resources/campus-life' },
  { title: 'Student Life, Clubs & Forums', type: 'Resources', path: '/resources/student-life' },
  { title: 'Alumni Association & Outcomes', type: 'Resources', path: '/resources/alumni' },
  { title: 'Blogs & Articles', type: 'Resources', path: '/resources/blogs' },
  
  // Campus Life detailed sections
  { title: 'Library & E-Resources Access', type: 'Campus Life', path: '/campus-life/library' },
  { title: 'Library Books Collections', type: 'Campus Life', path: '/campus-life/library/collections' },
  { title: 'Library Journals & Magazines', type: 'Campus Life', path: '/campus-life/library/journals' },
  { title: 'Sports Facilities & Faculty', type: 'Campus Life', path: '/campus-life/sports' },
  { title: 'Smart Classrooms', type: 'Campus Life', path: '/campus-life/classroom' },
  { title: 'Virtual Campus Tour', type: 'Campus Life', path: '/campus-life/tour' },
  { title: 'Transport & Bus Route Details', type: 'Campus Life', path: '/campus-life/transport' },
  { title: 'Student Insurance Policies', type: 'Campus Life', path: '/campus-life/insurance' },
  { title: 'Media Center', type: 'Campus Life', path: '/campus-life/media' },
  
  // Departments
  { title: 'Mechanical Engineering (MECH)', type: 'Department', path: '/academics/course/be-mechanical' },
  { title: 'Computer Science and Engineering (CSE)', type: 'Department', path: '/academics/course/be-cse' },
  { title: 'Electronics and Communication (ECE)', type: 'Department', path: '/academics/course/be-ece' },
  { title: 'Information Technology (IT)', type: 'Department', path: '/academics/course/btech-it' },
  { title: 'Artificial Intelligence & Data Science (AI & DS)', type: 'Department', path: '/academics/course/btech-aids' },
  { title: 'Electrical and Electronics (EEE)', type: 'Department', path: '/academics/course/be-eee' },
]

const Header = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState(null)
  const [activeSubDropdown, setActiveSubDropdown] = useState(null)
  const navigate = useNavigate()
  const location = useLocation()
  const [searchQuery, setSearchQuery] = useState('')
  const [showSuggestions, setShowSuggestions] = useState(false)
  const [isSearchExpanded, setIsSearchExpanded] = useState(false)
  const searchRef = useRef(null)
  const inputRef = useRef(null)

  // Mobile search state
  const [mobileSearchQuery, setMobileSearchQuery] = useState('')
  const [showMobileSuggestions, setShowMobileSuggestions] = useState(false)
  const [isMobileSearchExpanded, setIsMobileSearchExpanded] = useState(false)
  const mobileSearchRef = useRef(null)
  const mobileInputRef = useRef(null)

  const handleSearchSubmit = (e) => {
    e.preventDefault()
    if (!searchQuery.trim()) return
    const matches = searchableItems.filter(item => 
      item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.type.toLowerCase().includes(searchQuery.toLowerCase())
    )
    if (matches.length > 0) {
      handleSuggestionClick(e, matches[0])
    }
  }

  const handleSuggestionClick = (e, item) => {
    e.preventDefault()
    setSearchQuery('')
    setShowSuggestions(false)
    if (item.path.startsWith('http')) {
      window.open(item.path, '_blank', 'noopener,noreferrer')
      return
    }
    handleNavClick(e, item.title, item.path.replace(/^\//, ''))
  }

  const handleMobileSearchSubmit = (e) => {
    e.preventDefault()
    if (!mobileSearchQuery.trim()) return
    const matches = searchableItems.filter(item => 
      item.title.toLowerCase().includes(mobileSearchQuery.toLowerCase()) ||
      item.type.toLowerCase().includes(mobileSearchQuery.toLowerCase())
    )
    if (matches.length > 0) {
      handleMobileSuggestionClick(e, matches[0])
    }
  }

  const handleMobileSuggestionClick = (e, item) => {
    e.preventDefault()
    setMobileSearchQuery('')
    setShowMobileSuggestions(false)
    setIsMobileSearchExpanded(false)
    if (item.path.startsWith('http')) {
      window.open(item.path, '_blank', 'noopener,noreferrer')
      return
    }
    handleNavClick(e, item.title, item.path.replace(/^\//, ''))
  }

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (searchRef.current && !searchRef.current.contains(e.target)) {
        setShowSuggestions(false)
        setIsSearchExpanded(false)
      }
      if (mobileSearchRef.current && !mobileSearchRef.current.contains(e.target)) {
        setShowMobileSuggestions(false)
        setIsMobileSearchExpanded(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : ''

    if (!isOpen) {
      setActiveDropdown(null)
      setActiveSubDropdown(null)
    }

    return () => {
      document.body.style.overflow = ''
    }
  }, [isOpen])

  const handleNavClick = (e, linkName, href) => {
    if (href && (href.startsWith('http://') || href.startsWith('https://'))) {
      e.preventDefault()
      window.open(href, '_blank', 'noopener,noreferrer')
      setIsOpen(false)
      return
    }
    if (linkName === 'Contact') {
      e.preventDefault()
      navigate('/contact')
      window.scrollTo(0, 0)
      setIsOpen(false)
    } else if (linkName === 'Home') {
      e.preventDefault()
      navigate('/')
      window.scrollTo(0, 0)
      setIsOpen(false)
    } else {
      e.preventDefault()
      if (href && href.startsWith('#')) {
        if (location.pathname !== '/') {
          navigate('/')
          setTimeout(() => {
            const el = document.querySelector(href)
            if (el) el.scrollIntoView({ behavior: 'smooth' })
          }, 150)
        } else {
          const el = document.querySelector(href)
          if (el) el.scrollIntoView({ behavior: 'smooth' })
        }
      } else if (href && href.includes('#')) {
        const [path, hash] = href.split('#');
        const targetPath = '/' + (path || '');
        const currentPath = location.pathname;

        if (targetPath === currentPath) {
          // Internal page scroll - Update Hash and Scroll
          window.location.hash = hash;
          const el = document.getElementById(hash);
          if (el) {
            const offset = 120;
            const elementPosition = el.getBoundingClientRect().top + window.pageYOffset;
            window.scrollTo({ top: elementPosition - offset, behavior: 'smooth' });
          }
        } else {
          // Cross-page navigation with Hash - Include hash in URL
          navigate(targetPath + '#' + hash);
          setTimeout(() => {
            const el = document.getElementById(hash);
            if (el) {
              const offset = 120;
              const elementPosition = el.getBoundingClientRect().top + window.pageYOffset;
              window.scrollTo({ top: elementPosition - offset, behavior: 'smooth' });
            }
          }, 200);
        }
      } else {
        navigate('/' + (href || ''))
        window.scrollTo(0, 0)
      }
      setIsOpen(false)
    }
  }

  const filteredSuggestions = searchQuery.trim()
    ? searchableItems.filter(item => 
        item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.type.toLowerCase().includes(searchQuery.toLowerCase())
      ).slice(0, 6)
    : []

  const filteredMobileSuggestions = mobileSearchQuery.trim()
    ? searchableItems.filter(item => 
        item.title.toLowerCase().includes(mobileSearchQuery.toLowerCase()) ||
        item.type.toLowerCase().includes(mobileSearchQuery.toLowerCase())
      ).slice(0, 5)
    : []

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div className="border-b border-[#A9B1C3]/20 bg-white/92 shadow-[0_20px_60px_rgba(34,66,146,0.14)] backdrop-blur">
        <div className="flex items-stretch">
          <div
            className="z-10 relative hidden shrink-0 overflow-hidden xl:flex xl:w-[320px]"
            style={{ clipPath: 'polygon(0 0, 85% 0, 100% 100%, 0 100%)' }}
          >
            <div className="absolute inset-0 bg-white" />
            {/* Thick Slanted Accent Line (Divider) */}
            <div
              className="absolute inset-0 bg-[#ffc107] z-20"
              style={{ clipPath: 'polygon(82% 0, 85% 0, 100% 100%, 97% 100%)' }}
            />

            <a
              href="#top"
              onClick={(e) => handleNavClick(e, 'Home')}
              className="relative flex w-full items-center pl-3 pr-10 py-2 xl:pl-4 xl:pr-12 group/logo hover:opacity-90 transition-opacity"
            >
              <img
                src={logo}
                alt="Knowledge Institute of Technology"
                className="h-[60px] w-auto max-w-[250px] object-contain"
              />
            </a>
          </div>

          <div className="min-w-0 flex-1 ml-0 xl:-ml-[136px]">
            <div className="flex h-[32px] items-center bg-[#224292] md:hidden overflow-hidden">
              <div
                className="flex items-center gap-10 whitespace-nowrap px-4 text-[12px] font-bold text-white animate-marquee hover:[animation-play-state:paused]"
                style={{ animationDuration: '10s' }}
              >
                <div className="flex items-center gap-1.5">
                  <span className="text-[#ffc107]">Contact:</span>
                  <span>9600541414</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="text-[#ffc107]">Admission:</span>
                  <span>98947 01234</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="text-[#ffc107]">Placement:</span>
                  <span>98947 90284</span>
                </div>
                {/* Duplicate for loop */}
                <div className="flex items-center gap-1.5">
                  <span className="text-[#ffc107]">Contact:</span>
                  <span>9600541414</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="text-[#ffc107]">Admission:</span>
                  <span>98947 01234</span>
                </div>
              </div>
            </div>
            <div className="hidden h-[28px] items-stretch bg-[#ffc107] xl:flex">
              <div 
                className="flex flex-1 items-stretch overflow-hidden bg-[#224292] pl-32 pr-10"
                style={{ clipPath: 'polygon(0 0, 89% 0, 93% 100%, 0 100%)' }}
              >
                <div
                  className="flex items-center gap-16 whitespace-nowrap text-[12px] font-medium text-white/95 xl:text-[13px] animate-marquee hover:[animation-play-state:paused]"
                >
                  {/* First Set */}
                  <div className="flex items-center gap-16">
                    <div className="flex items-center gap-1.5">
                       <span className="font-bold text-[#ffc107]">Contact:</span>
                       <span>9600541414</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                       <span className="font-bold text-[#ffc107]">Admission:</span>
                       <span>+91 98947 01234</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                       <span className="font-bold text-[#ffc107]">Placement:</span>
                       <span>+91 98947 90284, 86084 85944</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                       <span className="font-bold text-[#ffc107]">Email:</span>
                       <a href="mailto:info@kiot.ac.in" className="hover:text-[#ffc107] transition-colors">info@kiot.ac.in</a>
                    </div>
                  </div>
                  {/* Second Set (Duplicate for seamless loop) */}
                  <div className="flex items-center gap-16 pr-16">
                    <div className="flex items-center gap-1.5">
                       <span className="font-bold text-[#ffc107]">Contact:</span>
                       <span>9600541414</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                       <span className="font-bold text-[#ffc107]">Admission:</span>
                       <span>+91 98947 01234</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                       <span className="font-bold text-[#ffc107]">Placement:</span>
                       <span>+91 98947 90284, 86084 85944</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                       <span className="font-bold text-[#ffc107]">Email:</span>
                       <a href="mailto:info@kiot.ac.in" className="hover:text-[#ffc107] transition-colors">info@kiot.ac.in</a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex shrink-0 items-center justify-end pr-10">
                {/* Social Icons (on the left side) */}
                <div className="flex items-center gap-2 mr-4 translate-y-[-0.5px]">
                    {socialLinks.map((social) => (
                      <a 
                        key={social.name} 
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group flex h-[24px] w-[24px] items-center justify-center rounded-lg bg-[#224292]/10 text-[#224292] transition-all duration-300 hover:bg-white hover:scale-110 active:scale-95 shadow-sm hover:shadow-md"
                        title={social.name}
                      >
                        <social.icon size={11} strokeWidth={2.5} />
                      </a>
                    ))}
                </div>

                {/* Compact Top-Bar Search (on the right side) */}
                <form onSubmit={handleSearchSubmit} ref={searchRef} className="relative flex items-center">
                  {/* Search Icon Trigger */}
                  <button 
                    type="button"
                    onClick={() => {
                      if (!isSearchExpanded) {
                        setIsSearchExpanded(true);
                        setTimeout(() => inputRef.current?.focus(), 100);
                      } else {
                        setIsSearchExpanded(false);
                        setShowSuggestions(false);
                      }
                    }}
                    className="flex h-[24px] w-[24px] items-center justify-center rounded-lg bg-[#224292]/10 text-[#224292] transition-all duration-300 hover:bg-white hover:scale-110 active:scale-95 shadow-sm hover:shadow-md shrink-0"
                    title="Search"
                  >
                    <Search size={11} strokeWidth={2.5} />
                  </button>

                  <input 
                    ref={inputRef}
                    type="text" 
                    placeholder="Search..." 
                    value={searchQuery}
                    onChange={(e) => {
                      setSearchQuery(e.target.value)
                      setShowSuggestions(true)
                    }}
                    onFocus={() => {
                      setIsSearchExpanded(true)
                      setShowSuggestions(true)
                    }}
                    className={`h-[20px] bg-transparent border rounded-md text-[10px] font-bold text-[#224292] placeholder-[#224292]/60 focus:outline-none transition-all duration-300 ${
                      isSearchExpanded 
                        ? 'w-36 pl-2 pr-2 ml-1.5 border-[#224292] opacity-100' 
                        : 'w-0 pl-0 pr-0 ml-0 border-transparent opacity-0 pointer-events-none'
                    }`}
                  />

                  {/* Suggestions Dropdown */}
                  {showSuggestions && searchQuery.trim() && (
                    <div className="absolute top-full right-0 mt-2 w-64 bg-white border border-[#224292]/20 rounded-xl shadow-[0_20px_50px_rgba(34,66,146,0.12)] z-[999] overflow-hidden py-1.5 max-h-60 overflow-y-auto">
                      {filteredSuggestions.map((item, idx) => (
                        <button
                          key={idx}
                          type="button"
                          onClick={(e) => handleSuggestionClick(e, item)}
                          className="w-full text-left px-4 py-2 hover:bg-[#224292]/5 transition-colors flex flex-col gap-0.5 border-b border-[#224292]/5 last:border-b-0"
                        >
                          <span className="text-[11px] font-bold text-[#224292] leading-snug">{item.title}</span>
                          <span className="text-[8px] font-black uppercase tracking-wider text-[#224292]/60">{item.type}</span>
                        </button>
                      ))}
                      {filteredSuggestions.length === 0 && (
                        <div className="px-4 py-3 text-center">
                          <span className="text-[9px] font-bold text-[#224292]/50 uppercase tracking-widest">No matching content</span>
                        </div>
                      )}
                    </div>
                  )}
                </form>
              </div>
            </div>

            <nav className="relative flex h-[76px] py-0.5 items-center justify-between bg-white px-2 sm:px-6 xl:pl-36 xl:pr-10 lg:pl-6 lg:pr-6">
              <div className="flex items-center gap-2 xl:hidden">
                <a
                  href="#top"
                  onClick={(e) => handleNavClick(e, 'Home')}
                  className="flex items-center"
                >
                  <img
                    src={logo}
                    alt="Knowledge Institute of Technology"
                    className="h-[44px] sm:h-[54px] w-auto max-w-[160px] sm:max-w-[210px] object-contain"
                  />
                </a>
              </div>

              {/* Mobile Search Overlay */}
              <AnimatePresence>
                {isMobileSearchExpanded && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.2 }}
                    className="absolute inset-0 z-50 flex items-center bg-white px-4 xl:hidden"
                  >
                    <form 
                      onSubmit={handleMobileSearchSubmit} 
                      ref={mobileSearchRef} 
                      className="flex flex-1 items-center gap-3"
                    >
                      <button
                        type="button"
                        onClick={() => {
                          setIsMobileSearchExpanded(false)
                          setShowMobileSuggestions(false)
                        }}
                        className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#224292]/5 text-[#224292] active:scale-95 transition-transform"
                      >
                        <X size={18} strokeWidth={2.5} />
                      </button>
                      <div className="relative flex-1">
                        <input
                          ref={mobileInputRef}
                          type="text"
                          placeholder="Search course, departments, events..."
                          value={mobileSearchQuery}
                          onChange={(e) => {
                            setMobileSearchQuery(e.target.value)
                            setShowMobileSuggestions(true)
                          }}
                          onFocus={() => setShowMobileSuggestions(true)}
                          className="w-full h-10 px-4 rounded-xl border border-[#224292]/20 bg-[#224292]/5 text-[14px] font-semibold text-[#224292] placeholder-[#224292]/50 focus:outline-none focus:border-[#224292] focus:bg-white transition-all"
                        />
                        {/* Mobile Suggestions Dropdown */}
                        {showMobileSuggestions && mobileSearchQuery.trim() && (
                          <div className="absolute top-full left-0 right-0 mt-2 bg-white border border-[#224292]/20 rounded-2xl shadow-[0_20px_50px_rgba(34,66,146,0.15)] z-[999] overflow-hidden py-2 max-h-60 overflow-y-auto">
                            {filteredMobileSuggestions.map((item, idx) => (
                              <button
                                key={idx}
                                type="button"
                                onClick={(e) => handleMobileSuggestionClick(e, item)}
                                className="w-full text-left px-5 py-3 hover:bg-[#224292]/5 transition-colors flex flex-col gap-1 border-b border-[#224292]/5 last:border-b-0"
                              >
                                <span className="text-[13px] font-bold text-[#224292]">{item.title}</span>
                                <span className="text-[10px] font-black uppercase tracking-wider text-[#224292]/60">{item.type}</span>
                              </button>
                            ))}
                            {filteredMobileSuggestions.length === 0 && (
                              <div className="px-5 py-4 text-center">
                                <span className="text-[11px] font-bold text-[#224292]/50 uppercase tracking-widest">No matching content</span>
                              </div>
                            )}
                          </div>
                        )}
                      </div>
                    </form>
                  </motion.div>
                )}
              </AnimatePresence>

              <ul className="hidden xl:flex xl:items-center xl:gap-3 2xl:gap-6">
                {navLinks.map((link) => {
                  const isActive = (link.name === 'Home' && location.pathname === '/') || (link.name === 'Contact' && location.pathname === '/contact')

                  return (
                    <li key={link.name} className="group relative">
                      <a
                        href={link.href}
                        onClick={(e) => {
                          if (link.subLinks) e.preventDefault();
                          else handleNavClick(e, link.name, link.href);
                        }}
                        className={`inline-flex items-center gap-1.5 text-[12px] xl:text-[12.5px] 2xl:text-[13.5px] font-semibold transition-colors whitespace-nowrap py-5 ${
                            isActive
                              ? 'text-[#224292]'
                              : 'text-[#64779F] hover:text-[#224292]'
                        }`}
                      >
                        <span>{link.name}</span>
                      </a>
                      <span
                        className={`absolute bottom-3 left-0 h-[2.5px] rounded-full bg-[#ffc107] transition-all duration-300 ${
                          isActive
                            ? 'w-full'
                            : 'w-0 group-hover:w-full'
                        }`}
                      />
                      
                      {/* Desktop Dropdown: Regular subLinks */}
                      {link.subLinks && (
                        <div className="absolute top-[100%] left-0 w-64 bg-white rounded-2xl shadow-[0_20px_60px_rgba(34,66,146,0.15)] border-r-4 border-[#224292] p-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0 z-[100] before:content-[''] before:absolute before:top-[-15px] before:left-0 before:w-full before:h-[15px]">
                          {link.subLinks.map(sub => (
                            <div key={sub.name} className="relative group/sub">
                              <a
                                href={sub.href}
                                onClick={(e) => handleNavClick(e, sub.name, sub.href)}
                                className="group/subitem relative flex items-center gap-4 px-4 py-2.5 mb-1 last:mb-0 rounded-xl bg-transparent hover:bg-[#224292] transition-all duration-300"
                              >
                                {sub.icon && (
                                  <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-[#224292]/5 group-hover/subitem:bg-white/20 transition-colors">
                                    <sub.icon size={16} className="text-[#224292] group-hover/subitem:text-white transition-colors" />
                                  </div>
                                )}
                                <span className="text-[14px] font-semibold text-[#64779F] group-hover/subitem:text-white transition-colors">{sub.name}</span>
                              </a>

                              {/* Nested Level (Desktop) */}
                              {sub.subLinks && (
                                <div className="absolute left-[100%] top-0 ml-1 w-64 bg-white rounded-2xl shadow-[0_20px_60px_rgba(34,66,146,0.15)] border-r-4 border-[#224292] p-2 opacity-0 invisible group-hover/sub:opacity-100 group-hover/sub:visible transition-all duration-300 transform translate-x-2 group-hover/sub:translate-x-0 z-[110]">
                                  {sub.subLinks.map(nested => (
                                    <a
                                      key={nested.name}
                                      href={nested.href}
                                      onClick={(e) => handleNavClick(e, nested.name, nested.href)}
                                      className="group/nested relative flex items-center px-5 py-3 mb-1 last:mb-0 rounded-xl bg-transparent hover:bg-[#224292] transition-all duration-300"
                                    >
                                      <span className="text-[14.5px] font-semibold text-[#64779F] group-hover/nested:text-white transition-colors pr-12">{nested.name}</span>
                                      <div className="absolute right-5 flex items-center justify-center w-5 h-5">
                                         {nested.icon && (
                                           <nested.icon 
                                             size={16} 
                                             className="text-[#A9B1C3] group-hover/nested:text-[#ffc107] transition-all duration-300 transform group-hover/nested:scale-110" 
                                           />
                                         )}
                                      </div>
                                    </a>
                                  ))}
                                </div>
                              )}
                            </div>
                          ))}
                        </div>
                      )}
                    </li>
                  )
                })}
              </ul>

              <div className="flex shrink-0 items-center gap-1.5 sm:gap-2 xl:gap-3 pr-4 lg:pr-0 translate-y-[1.5px]">
                <a
                  href="/pdfs/NAAC-A-GRADE-UPTO-2028.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hidden md:flex shrink-0 items-center justify-center h-11 w-11 md:h-13 md:w-13 xl:h-16 xl:w-16 2xl:h-[70px] 2xl:w-[70px]"
                  title="NAAC Accreditation"
                >
                  <img
                    src={naacLogo}
                    alt="NAAC Logo"
                    className="max-h-full max-w-full object-contain hover:scale-105 transition-transform drop-shadow-sm"
                  />
                </a>
                <a
                  href={qsGaugePdf}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hidden md:flex shrink-0 items-center justify-center h-11 w-11 md:h-13 md:w-13 xl:h-16 xl:w-16 2xl:h-[70px] 2xl:w-[70px]"
                  title="QS I-GAUGE Rating"
                >
                  <img
                    src={qsLogo}
                    alt="QS I-GAUGE"
                    className="max-h-full max-w-full object-contain hover:scale-105 transition-transform drop-shadow-sm rounded-sm"
                  />
                </a>
                <div className="hidden md:flex shrink-0 items-center justify-center h-11 w-11 md:h-13 md:w-13 xl:h-16 xl:w-16 2xl:h-[70px] 2xl:w-[70px]">
                  <img
                    src={codeLogo}
                    alt="Code Logo"
                    className="max-h-full max-w-full object-contain hover:scale-105 transition-transform drop-shadow-sm"
                  />
                </div>
                
                {/* Mobile Search Trigger */}
                <button
                  type="button"
                  onClick={() => {
                    setIsMobileSearchExpanded(true)
                    setTimeout(() => mobileInputRef.current?.focus(), 150)
                  }}
                  className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#224292]/5 text-[#224292] hover:bg-[#224292]/10 active:scale-95 transition-all xl:hidden"
                  title="Search"
                >
                  <Search size={18} strokeWidth={2.5} />
                </button>

                <button
                  type="button"
                  onClick={() => setIsOpen((open) => !open)}
                  className="ml-1 sm:ml-2 relative flex h-11 w-11 items-center justify-center rounded-full text-[#224292] hover:bg-[#224292]/5 transition-all active:scale-95 xl:hidden"
                  aria-label={isOpen ? 'Close menu' : 'Open menu'}
                >
                   <div className="relative flex h-6 w-6 flex-col items-center justify-center">
                     <span className={`absolute h-[2px] w-6 bg-[#224292] transition-all duration-300 ${isOpen ? 'rotate-45' : '-translate-y-2'}`} />
                     <span className={`absolute h-[2px] w-4 translate-x-1 bg-[#224292] transition-all duration-300 ${isOpen ? 'opacity-0 translate-x-10' : ''}`} />
                     <span className={`absolute h-[2px] w-6 bg-[#224292] transition-all duration-300 ${isOpen ? '-rotate-45' : 'translate-y-2'}`} />
                   </div>
                </button>
              </div>
            </nav>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 z-[100] bg-[#224292]/40 backdrop-blur-sm xl:hidden"
            />
            
            {/* Left Side Drawer */}
            <motion.div
              initial={{ x: '-100%' }}
              animate={{ x: 0 }}
              exit={{ x: '-100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed left-0 top-0 bottom-0 z-[101] w-[85%] max-w-[360px] bg-white shadow-2xl flex flex-col xl:hidden"
            >
              {/* Drawer Header */}
              <div className="flex items-center justify-between px-6 py-4">
                <img
                  src={logo}
                  alt="KIOT"
                  className="h-11 w-auto object-contain"
                />
                <button
                  onClick={() => setIsOpen(false)}
                  className="h-9 w-9 grid place-items-center rounded-xl bg-[#224292]/5 text-[#224292]"
                >
                  <X size={18} />
                </button>
              </div>
              
              {/* Navigation Links */}
              <div className="flex-1 overflow-y-auto px-6 py-2">
                <div className="space-y-1">
                  {navLinks.map((link, idx) => {
                    const isActive = (link.name === 'Home' && location.pathname === '/') || (link.name === 'Contact' && location.pathname === '/contact')
                    
                    return (
                      <motion.div
                        key={link.name}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.1 + idx * 0.05 }}
                      >
                        <>
                          <a
                            href={link.href}
                            onClick={(e) => {
                               if (link.subLinks) {
                                 e.preventDefault();
                                 setActiveDropdown(activeDropdown === link.name ? null : link.name);
                               } else {
                                 handleNavClick(e, link.name, link.href);
                               }
                            }}
                            className={`flex items-center justify-between px-4 py-2.5 text-[15px] font-semibold transition-all ${
                              isActive 
                                ? 'text-[#224292]' 
                                : 'text-[#64779F] hover:text-[#224292]'
                            }`}
                          >
                            <span>{link.name}</span>
                            {link.hasDropdown && (
                              <ChevronDown className={`h-4 w-4 transition-transform duration-300 ${activeDropdown === link.name ? 'rotate-180' : ''} ${isActive ? 'text-[#ffc107]' : 'text-[#A9B1C3]'}`} />
                            )}
                          </a>
                          
                           <AnimatePresence>
                            {link.subLinks && activeDropdown === link.name && (
                              <motion.div 
                                initial={{ height: 0, opacity: 0 }} 
                                animate={{ height: 'auto', opacity: 1 }} 
                                exit={{ height: 0, opacity: 0 }} 
                                className="overflow-hidden mx-6 mb-3 bg-[#224292]/5 rounded-2xl border border-[#224292]/5"
                              >
                                 <div className="py-2">
                                   {link.subLinks.map(sub => (
                                     <div key={sub.name}>
                                       <a 
                                         href={sub.href} 
                                         onClick={(e) => {
                                           if (sub.subLinks) {
                                             e.preventDefault();
                                             setActiveSubDropdown(activeSubDropdown === sub.name ? null : sub.name);
                                           } else {
                                             handleNavClick(e, sub.name, sub.href);
                                           }
                                         }} 
                                         className={`flex items-center justify-between px-6 py-2 text-[13px] font-semibold transition-all group/subitem ${
                                            activeSubDropdown === sub.name ? 'text-[#224292] bg-[#224292]/5' : 'text-[#64779F] hover:text-[#224292] hover:bg-white/50'
                                         }`}
                                       >
                                         <div className="flex items-center gap-4">
                                           {sub.icon && (
                                             <div className={`w-8 h-8 rounded-lg flex items-center justify-center shrink-0 border transition-all ${
                                                activeSubDropdown === sub.name ? 'bg-[#224292] border-[#224292] text-white' : 'bg-white/80 border-[#224292]/5 text-[#224292]'
                                             }`}>
                                               <sub.icon size={14} />
                                             </div>
                                           )}
                                           {!sub.icon && <div className="w-1.5 h-1.5 rounded-full bg-[#ffc107] group-hover/subitem:scale-125 transition-transform" />}
                                           <span>{sub.name}</span>
                                         </div>
                                         {sub.subLinks && (
                                           <ChevronDown size={14} className={`transition-transform duration-300 ${activeSubDropdown === sub.name ? 'rotate-180' : ''}`} />
                                         )}
                                       </a>

                                       <AnimatePresence>
                                          {sub.subLinks && activeSubDropdown === sub.name && (
                                            <motion.div
                                              initial={{ height: 0, opacity: 0 }}
                                              animate={{ height: 'auto', opacity: 1 }}
                                              exit={{ height: 0, opacity: 0 }}
                                              className="overflow-hidden bg-[#224292]/[0.02]"
                                            >
                                              {sub.subLinks.map(nested => (
                                                <a
                                                  key={nested.name}
                                                  href={nested.href}
                                                  onClick={(e) => handleNavClick(e, nested.name, nested.href)}
                                                  className="flex items-center gap-4 pl-16 pr-6 py-1.5 text-[12.5px] font-semibold text-[#64779F] hover:text-[#224292] transition-all"
                                                >
                                                  <div className="w-1.5 h-1.5 rounded-full bg-[#ffc107]/40" />
                                                  <span>{nested.name}</span>
                                                </a>
                                              ))}
                                            </motion.div>
                                          )}
                                       </AnimatePresence>
                                     </div>
                                   ))}
                                 </div>
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </>
                      </motion.div>
                    )
                  })}
                </div>
              </div>

              {/* Compliance/Accreditation Logos at the Bottom */}
              <div className="p-3 pt-6 pb-4 flex items-center justify-center gap-3 border-t border-[#D5E2F4]/50 bg-[#F8FAFC]/30 mt-auto">
                <a href="/pdfs/NAAC-A-GRADE-UPTO-2028.pdf" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center h-14 w-14 shrink-0">
                  <img src={naacLogo} alt="NAAC" className="max-h-full max-w-full object-contain drop-shadow-sm" />
                </a>
                <a href={qsGaugePdf} target="_blank" rel="noopener noreferrer" title="QS I-GAUGE Rating" className="flex items-center justify-center h-14 w-14 shrink-0">
                  <img src={qsLogo} alt="QS I-GAUGE" className="max-h-full max-w-full object-contain rounded-sm drop-shadow-sm" />
                </a>
                <div className="flex items-center justify-center h-14 w-14 shrink-0">
                  <img src={codeLogo} alt="Code" className="max-h-full max-w-full object-contain drop-shadow-sm" />
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  )
}

export default Header
