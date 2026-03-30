import { useEffect, useState } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import {
  ChevronDown,
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
  Award
} from 'lucide-react'
import logo from '../../assets/logo.webp'
import naacLogo from '../../assets/NAAC-Logo.png'
import nirfLogo from '../../assets/nirf.webp'
import nbaLogo from '../../assets/NBA1 (1).webp'
import codeLogo from '../../assets/counciling code.png'

const navLinks = [
  {
    name: 'About',
    href: 'about',
    hasDropdown: true,
    subLinks: [
      { name: 'About Us', href: 'about-us', icon: Building2 },
      { name: 'Vision & Mission', href: 'vision-mission', icon: Target },
      { name: 'Leadership', href: 'leadership', icon: Users },
      { name: 'Governing Council', href: 'governing-council', icon: ShieldCheck },
      { name: 'Accreditation & Ranking', href: 'accreditation-ranking', icon: FileText },
      { name: 'Achievements', href: 'achievements', icon: GraduationCap }
    ]
  },
  {
    name: 'Academics',
    href: 'academics',
    hasDropdown: true,
    subLinks: [
      { name: 'Undergraduate (UG)', href: 'academics?tab=Programs&program=UG', icon: GraduationCap },
      { name: 'Postgraduate (PG)', href: 'academics?tab=Programs&program=PG', icon: GraduationCap },
    ]
  },
  {
    name: 'Admissions',
    href: 'admissions',
    hasDropdown: true,
    subLinks: [
      { name: 'Eligibility', href: 'admissions', icon: ShieldCheck },
      { name: 'How to Apply', href: 'admissions', icon: FileText },
      { name: 'Fees & Scholarships', href: 'admissions', icon: Target },
    ],
  },
  { 
    name: 'Placements', 
    href: 'placements',
    hasDropdown: true,
    subLinks: [
      { name: 'Overview', href: 'placement-overview', icon: Building2 },
      { name: 'Training', href: 'training', icon: BookOpen },
      { name: 'Recruitment', href: 'recruitment', icon: Users },
      { name: 'Records', href: 'records', icon: Target },
    ]
  },
  { name: 'Research & Innovations', href: 'research' },
  { 
    name: 'Resources', 
    href: 'resources', 
    hasDropdown: true,
    subLinks: [
      { name: 'Campus Life', href: 'campus-life', icon: Building2 },
      { name: 'Student Life', href: 'student-life', icon: Users },
      { name: 'Alumni', href: 'alumni', icon: GraduationCap },
      { name: 'News & Events', href: 'news-events', icon: Calendar },
      { name: 'Blogs', href: 'blogs', icon: FileText }
    ]
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

const Header = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState(null)
  const navigate = useNavigate()
  const location = useLocation()

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : ''

    return () => {
      document.body.style.overflow = ''
    }
  }, [isOpen])

  const handleNavClick = (e, linkName, href) => {
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
        // e.g., 'about-us#vision-mission'
        const [path, hash] = href.split('#');
        navigate('/' + path);
        setTimeout(() => {
          const el = document.querySelector('#' + hash)
          if (el) el.scrollIntoView({ behavior: 'smooth' })
        }, 150)
      } else {
        navigate('/' + (href || ''))
        window.scrollTo(0, 0)
      }
      setIsOpen(false)
    }
  }

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div className="border-b border-[#A9B1C3]/20 bg-white/92 shadow-[0_20px_60px_rgba(34,66,146,0.14)] backdrop-blur">
        <div className="flex items-stretch">
          <div
            className="z-10 relative hidden shrink-0 overflow-hidden lg:flex lg:w-[280px]"
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
              className="relative flex w-full items-center pl-6 pr-10 py-2 xl:pl-8 xl:pr-12 group/logo hover:opacity-90 transition-opacity"
            >
              <img
                src={logo}
                alt="Knowledge Institute of Technology"
                className="h-[60px] w-auto max-w-[220px] object-contain"
              />
            </a>
          </div>

          <div className="min-w-0 flex-1 ml-0 lg:-ml-24">
            <div className="flex h-[32px] items-center bg-[#18357a] md:hidden overflow-hidden">
              <div
                className="flex items-center gap-10 whitespace-nowrap px-4 text-[12px] font-bold text-white animate-marquee hover:[animation-play-state:paused]"
                style={{ animationDuration: '10s' }}
              >
                <div className="flex items-center gap-1.5">
                  <span className="text-[#ffc107]">CONTACT:</span>
                  <span>9600541414</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="text-[#ffc107]">ADMISSION:</span>
                  <span>98947 01234</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="text-[#ffc107]">PLACEMENT:</span>
                  <span>98947 90284</span>
                </div>
                {/* Duplicate for loop */}
                <div className="flex items-center gap-1.5">
                  <span className="text-[#ffc107]">CONTACT:</span>
                  <span>9600541414</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="text-[#ffc107]">ADMISSION:</span>
                  <span>98947 01234</span>
                </div>
              </div>
            </div>
            <div className="hidden h-[28px] items-stretch bg-[#ffc107] lg:flex overflow-hidden">
              <div 
                className="flex flex-1 items-stretch overflow-hidden bg-[#18357a] pl-32 pr-10"
                style={{ clipPath: 'polygon(0 0, 92% 0, 100% 100%, 0 100%)' }}
              >
                <div
                  className="flex items-center gap-16 whitespace-nowrap text-[12px] font-medium text-white/95 xl:text-[13px] animate-marquee hover:[animation-play-state:paused]"
                >
                  {/* First Set */}
                  <div className="flex items-center gap-16">
                    <div className="flex items-center gap-1.5">
                       <span className="font-bold text-[#ffc107]">CONTACT:</span>
                       <span>9600541414</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                       <span className="font-bold text-[#ffc107]">ADMISSION:</span>
                       <span>+91 98947 01234</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                       <span className="font-bold text-[#ffc107]">PLACEMENT:</span>
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
                       <span className="font-bold text-[#ffc107]">CONTACT:</span>
                       <span>9600541414</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                       <span className="font-bold text-[#ffc107]">ADMISSION:</span>
                       <span>+91 98947 01234</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                       <span className="font-bold text-[#ffc107]">PLACEMENT:</span>
                       <span>+91 98947 90284, 86084 85944</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                       <span className="font-bold text-[#ffc107]">Email:</span>
                       <a href="mailto:info@kiot.ac.in" className="hover:text-[#ffc107] transition-colors">info@kiot.ac.in</a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex shrink-0 items-center justify-end pr-10 overflow-hidden">
                <div className="flex items-center gap-2 ml-8 translate-y-[-0.5px]">
                   {socialLinks.map((social) => (
                     <a 
                       key={social.name} 
                       href={social.href}
                       target="_blank"
                       rel="noopener noreferrer"
                       className="group flex h-[24px] w-[24px] items-center justify-center rounded-lg bg-[#18357a]/10 text-[#18357a] transition-all duration-300 hover:scale-110 active:scale-95 shadow-sm hover:shadow-md"
                       title={social.name}
                     >
                       <social.icon size={11} strokeWidth={2.5} />
                     </a>
                   ))}
                </div>
              </div>
            </div>

            <nav className="relative flex h-[76px] py-0.5 items-center justify-between bg-white px-2 sm:px-6 lg:pl-28 lg:pr-10">
              <a
                href="#top"
                onClick={(e) => handleNavClick(e, 'Home')}
                className="flex items-center lg:hidden"
              >
                <img
                  src={logo}
                  alt="Knowledge Institute of Technology"
                  className="h-[54px] w-auto max-w-[210px] object-contain"
                />
              </a>

              <ul className="hidden lg:flex lg:items-center lg:gap-3 xl:gap-6">
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
                        className={`inline-flex items-center gap-1 text-[14.5px] font-bold transition-colors whitespace-nowrap py-5 ${
                            isActive
                              ? 'text-[#18357a]'
                              : 'text-[#64779F] hover:text-[#18357a]'
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
                        <div className="absolute top-[100%] left-0 w-56 bg-white rounded-2xl shadow-[0_20px_60px_rgba(34,66,146,0.15)] border border-[#D5E2F4]/60 p-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0 z-[100] before:content-[''] before:absolute before:top-[-15px] before:left-0 before:w-full before:h-[15px]">
                          {link.subLinks.map(sub => (
                            <a
                              key={sub.name}
                              href={sub.href}
                              onClick={(e) => handleNavClick(e, sub.name, sub.href)}
                              className="group/sub relative flex items-center px-5 py-3 mb-1 last:mb-0 rounded-xl bg-transparent hover:bg-[#18357a] transition-all duration-300"
                            >
                              <span className="text-[14.5px] font-bold text-[#64779F] group-hover/sub:text-white transition-colors">{sub.name}</span>
                              <div className="absolute right-5 flex items-center justify-center w-5 h-5">
                                 {sub.icon && (
                                   <sub.icon 
                                     size={16} 
                                     className="text-[#A9B1C3] group-hover/sub:text-[#ffc107] transition-all duration-300 transform group-hover/sub:scale-110" 
                                   />
                                 )}
                              </div>
                            </a>
                          ))}
                        </div>
                      )}
                    </li>
                  )
                })}
              </ul>

              <div className="flex items-center gap-2.5 sm:gap-4 lg:gap-6 pr-4 lg:pr-0 translate-y-[1.5px]">
                <a href="/pdfs/NAAC-A-GRADE-UPTO-2028.pdf" target="_blank" rel="noopener noreferrer" className="hidden md:block">
                  <img
                    src={naacLogo}
                    alt="NAAC Logo"
                    className="h-[120px] max-h-none w-auto md:w-20 lg:h-[94px] lg:w-[100px] translate-y-0 md:translate-y-1 object-contain hover:scale-105 transition-transform drop-shadow-sm"
                  />
                </a>
                <img
                  src={nirfLogo}
                  alt="NIRF Logo"
                  className="hidden md:block h-[52px] w-auto md:h-16 md:w-16 lg:h-[72px] lg:w-[72px] object-contain"
                />
                <a href="/pdfs/NBA-Accreditation-2025.pdf.pdf" target="_blank" rel="noopener noreferrer" className="hidden md:block">
                  <img
                    src={nbaLogo}
                    alt="NBA Logo"
                    className="h-14 w-14 md:h-16 md:w-16 lg:h-[72px] lg:w-[72px] object-contain hover:scale-105 transition-transform drop-shadow-sm"
                  />
                </a>
                <img
                  src={codeLogo}
                  alt="Code Logo"
                  className="hidden md:block h-[110px] w-auto md:h-[72px] md:w-[72px] lg:h-[76px] lg:w-[76px] object-contain"
                />
                
                <button
                  type="button"
                  onClick={() => setIsOpen((open) => !open)}
                  className="ml-1 sm:ml-2 relative flex h-11 w-11 items-center justify-center rounded-full text-[#18357a] hover:bg-[#18357a]/5 transition-all active:scale-95 lg:hidden"
                  aria-label={isOpen ? 'Close menu' : 'Open menu'}
                >
                   <div className="relative flex h-6 w-6 flex-col items-center justify-center">
                     <span className={`absolute h-[2px] w-6 bg-[#18357a] transition-all duration-300 ${isOpen ? 'rotate-45' : '-translate-y-2'}`} />
                     <span className={`absolute h-[2px] w-4 translate-x-1 bg-[#18357a] transition-all duration-300 ${isOpen ? 'opacity-0 translate-x-10' : ''}`} />
                     <span className={`absolute h-[2px] w-6 bg-[#18357a] transition-all duration-300 ${isOpen ? '-rotate-45' : 'translate-y-2'}`} />
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
              className="fixed inset-0 z-[100] bg-[#18357a]/40 backdrop-blur-sm lg:hidden"
            />
            
            {/* Left Side Drawer */}
            <motion.div
              initial={{ x: '-100%' }}
              animate={{ x: 0 }}
              exit={{ x: '-100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed left-0 top-0 bottom-0 z-[101] w-[85%] max-w-[360px] bg-white shadow-2xl flex flex-col lg:hidden"
            >
              {/* Drawer Header */}
              <div className="flex items-center justify-between p-6">
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
              <div className="flex-1 overflow-y-auto px-6 py-6">
                <div className="space-y-2">
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
                            className={`flex items-center justify-between px-4 py-4 text-[15px] font-bold transition-all ${
                              isActive 
                                ? 'text-[#18357a]' 
                                : 'text-[#64779F] hover:text-[#18357a]'
                            }`}
                          >
                            <span>{link.name}</span>
                            {link.hasDropdown ? (
                              <ChevronDown className={`h-4 w-4 transition-transform duration-300 ${activeDropdown === link.name ? 'rotate-180' : ''} ${isActive ? 'text-[#ffc107]' : 'text-[#A9B1C3]'}`} />
                            ) : (
                              <ChevronsRight className={`h-4 w-4 ${isActive ? 'text-[#ffc107]' : 'text-[#A9B1C3]'}`} />
                            )}
                          </a>
                          
                           <AnimatePresence>
                            {link.subLinks && activeDropdown === link.name && (
                              <motion.div 
                                initial={{ height: 0, opacity: 0 }} 
                                animate={{ height: 'auto', opacity: 1 }} 
                                exit={{ height: 0, opacity: 0 }} 
                                className="overflow-hidden mx-6 mb-3 bg-[#18357a]/5 rounded-2xl border border-[#18357a]/5"
                              >
                                 <div className="py-2">
                                   {link.subLinks.map(sub => (
                                     <a 
                                       key={sub.name} 
                                       href={sub.href} 
                                       onClick={(e) => handleNavClick(e, sub.name, sub.href)} 
                                       className="flex items-center gap-4 px-6 py-3.5 text-[13px] font-bold text-[#64779F] hover:text-[#18357a] hover:bg-white/50 transition-all group/subitem"
                                     >
                                       {sub.icon && (
                                         <div className="w-8 h-8 rounded-lg bg-white/80 shadow-sm flex items-center justify-center shrink-0 border border-[#18357a]/5">
                                           <sub.icon size={14} className="text-[#18357a]" />
                                         </div>
                                       )}
                                       {!sub.icon && <div className="w-1.5 h-1.5 rounded-full bg-[#ffc107] group-hover/subitem:scale-125 transition-transform" />}
                                       <span>{sub.name}</span>
                                     </a>
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
                <img src={naacLogo} alt="NAAC" className="h-[64px] w-auto object-contain shrink-0 drop-shadow-sm" />
                <img src={nirfLogo} alt="NIRF" className="h-[46px] w-auto object-contain shrink-0 drop-shadow-sm" />
                <img src={nbaLogo} alt="NBA" className="h-[46px] w-auto object-contain shrink-0 drop-shadow-sm" />
                <img src={codeLogo} alt="Code" className="h-[52px] w-auto object-contain shrink-0 drop-shadow-sm" />
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  )
}

export default Header
