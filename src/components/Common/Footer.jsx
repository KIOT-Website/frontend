import { 
  Facebook, 
  Instagram, 
  Linkedin, 
  Youtube, 
  Phone, 
  Mail, 
  MapPin, 
  ChevronRight, 
  ArrowUpRight, 
  Compass, 
  BookOpen, 
  GraduationCap 
} from 'lucide-react'
import { Link } from 'react-router-dom'
import logoBlue from '../../assets/main/main-logo.webp'
import naacLogo from '../../assets/main/NAAC-Logo.webp'
import nirfLogo from '../../assets/main/nirf.webp'
import nbaLogo from '../../assets/main/NBA1 (1).webp'
import codeLogo from '../../assets/main/2653 code.jpeg'

const Footer = () => {
  const socialLinks = [
    { name: 'Facebook', href: 'https://www.facebook.com/Kiotkbs/', icon: Facebook },
    { name: 'Instagram', href: 'https://www.instagram.com/infokiot/', icon: Instagram },
    { name: 'LinkedIn', href: 'https://www.linkedin.com/school/infokiot/', icon: Linkedin },
    { name: 'YouTube', href: 'https://www.youtube.com/@infokiot', icon: Youtube },
  ]

  const menuSections = {
    'EXPLORE': {
      icon: Compass,
      links: [
        { name: 'About Us', href: '/about/about-us' },
        { name: 'Promoters & Council', href: '/about/promoters' },
        { name: 'Accreditation', href: '/about/accreditation-ranking' },
        { name: 'Governing Council', href: '/about/governing-council' },
        { name: 'Institutional Policies', href: '/about/institutional-policies' },
        { name: 'Programs Offered', href: '/academics/undergraduate' },
      ]
    },
    'RESOURCES': {
      icon: BookOpen,
      links: [
        { name: 'Placement Overview', href: '/placements/placement' },
        { name: 'Training & Skills', href: '/placements/training' },
        { name: 'Placement Outcomes', href: '/placements/outcomes' },
      ]
    },
    'ADMISSIONS': {
      icon: GraduationCap,
      links: [
        { name: 'Admission Overview', href: '/admissions' },
        { name: 'UG Registration', href: '/admissions/ug-registration' },
        { name: 'PG Registration', href: '/admissions/pg-registration' },
        { name: 'Contact', href: '/contact' },
      ]
    },
    'QUICK LINKS': {
      icon: Phone,
      links: [
        { name: 'Academics', href: '/academics/undergraduate' },
        { name: 'Admissions', href: '/admissions' },
        { name: 'Placements', href: '/placements/placement' },
        { name: 'Exams', href: '/coe' },
        { name: 'Research & Innovations', href: '/research-innovation/research' },
      ]
    }
  }

  const handleLinkClick = (e, linkHref) => {
    if (linkHref && linkHref.includes('#')) {
      const parts = linkHref.split('#');
      const targetPath = parts[0] || '/';
      const hash = parts[1];
      
      if (window.location.pathname === targetPath) {
        e.preventDefault();
        const element = document.getElementById(hash);
        if (element) {
          window.scrollTo({
            top: element.offsetTop - 100,
            behavior: 'smooth'
          });
        }
      }
    }
  }

  return (
    <footer className="relative w-full bg-[#0c2152] text-white overflow-hidden border-b-[8px] border-[#ffc107]">
      <div className="relative w-full pt-12 pb-10">
        {/* Blue Grid/Dot Accent Pattern Top-Right */}
        <div className="absolute top-10 right-10 z-0 opacity-20 pointer-events-none hidden md:block">
          <div className="grid grid-cols-10 gap-2">
            {Array.from({ length: 50 }).map((_, i) => (
              <div key={i} className="w-1.5 h-1.5 rounded-full bg-blue-400" />
            ))}
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-12 gap-12 relative z-10">
        {/* Left Column: Logo & Contact Info */}
        <div className="lg:col-span-4 flex flex-col items-center text-center lg:items-start lg:text-left">
          <img 
            src={logoBlue} 
            alt="KIOT Logo" 
            className="h-16 w-auto object-contain mb-6 mx-auto lg:mx-0 rounded-xl"
          />
          <p className="text-gray-300 text-sm leading-relaxed mb-6 max-w-sm mx-auto lg:mx-0">
            Empowering young minds with quality education, innovation and values to build a better tomorrow.
          </p>

          <div className="space-y-4 w-full">
            {/* Address */}
            <div className="flex flex-col items-center lg:flex-row lg:items-start gap-4">
              <div className="w-9 h-9 rounded-full bg-[#ffc107]/10 border border-[#ffc107]/20 flex items-center justify-center text-[#ffc107] shrink-0 shadow-md">
                <MapPin size={16} />
              </div>
              <p className="text-gray-300 text-[13px] leading-relaxed">
                KIOT Campus, NH544, Kakapalayam, Salem, Tamil Nadu – 637504 India.
              </p>
            </div>

            {/* Phone */}
            <div className="flex flex-col items-center lg:flex-row lg:items-start gap-4">
              <div className="w-9 h-9 rounded-full bg-[#ffc107]/10 border border-[#ffc107]/20 flex items-center justify-center text-[#ffc107] shrink-0 shadow-md">
                <Phone size={16} />
              </div>
              <a href="tel:+919600541414" className="text-gray-300 hover:text-[#ffc107] text-[13px] font-normal transition-colors">
                +91 96005 41414
              </a>
            </div>

            {/* Email */}
            <div className="flex flex-col items-center lg:flex-row lg:items-start gap-4">
              <div className="w-9 h-9 rounded-full bg-[#ffc107]/10 border border-[#ffc107]/20 flex items-center justify-center text-[#ffc107] shrink-0 shadow-md">
                <Mail size={16} />
              </div>
              <a href="mailto:info@kiot.ac.in" className="text-gray-300 hover:text-[#ffc107] text-[13px] font-normal transition-colors">
                info@kiot.ac.in
              </a>
            </div>
          </div>

          {/* Apply Now Button */}
          <Link 
            to="/admissions" 
            className="inline-flex items-center justify-between bg-[#ffc107] text-[#07163c] font-black text-sm uppercase px-6 py-3.5 rounded-lg hover:bg-white hover:text-[#224292] transition-all duration-300 group shadow-md hover:shadow-lg w-[240px] tracking-wider mt-8"
          >
            <span className="text-[#07163c] group-hover:text-[#224292] transition-colors duration-300">APPLY NOW 2026-27</span>
            <ArrowUpRight size={18} className="text-[#07163c] group-hover:text-[#224292] transition-colors duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </Link>
        </div>

        {/* Right Columns: Menu items (2 columns on mobile, 4 on desktop) */}
        <div className="lg:col-span-8 grid grid-cols-2 md:grid-cols-4 gap-8">
          {Object.entries(menuSections).map(([sectionName, sectionData]) => {
            const Icon = sectionData.icon;
            return (
              <div key={sectionName} className="flex flex-col items-start text-left">
                <div className="flex items-center gap-3 mb-6 relative">
                  <div className="w-10 h-10 rounded-full bg-[#ffc107]/10 border border-[#ffc107]/20 flex items-center justify-center text-[#ffc107] shrink-0 shadow-lg shadow-black/20">
                    <Icon size={18} />
                  </div>
                  <div className="relative">
                    <h4 className="text-white font-bold text-sm tracking-wider uppercase">
                      {sectionName}
                    </h4>
                    <div className="w-12 h-[2px] bg-[#ffc107] mt-1" />
                  </div>
                </div>

                <ul className="space-y-3.5 w-full">
                  {sectionData.links.map((link) => (
                    <li key={link.name}>
                      <Link
                        to={link.href}
                        onClick={(e) => handleLinkClick(e, link.href)}
                        className="text-gray-300 hover:text-[#ffc107] text-[13px] font-normal transition-colors flex items-center gap-2 group/link"
                      >
                        <ChevronRight size={14} className="text-[#ffc107] transition-transform duration-300 group-hover/link:translate-x-1 shrink-0" />
                        <span>{link.name}</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            )
          })}
        </div>
      </div>
      {/* College structure outline (drawn via inline SVG) */}
      <div className="absolute bottom-[-19px] right-0 w-full lg:w-[65%] max-w-[800px] h-[120px] opacity-[0.25] pointer-events-none z-0">
        <svg 
          viewBox="0 0 1050 160" 
          preserveAspectRatio="xMaxYMax meet"
          className="w-full h-full text-white" 
          fill="none" 
          stroke="currentColor" 
          strokeWidth="1.0"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          {/* Ground Line */}
          <line x1="50" y1="135" x2="1000" y2="135" strokeWidth="1.2" />
          <line x1="45" y1="137" x2="1005" y2="137" strokeWidth="0.8" className="opacity-70" />

          {/* Left Trees */}
          {/* Tree 1: Round leafy tree with puffs (x=90) */}
          <line x1="90" y1="135" x2="90" y2="95" />
          <line x1="90" y1="115" x2="80" y2="105" />
          <line x1="90" y1="110" x2="100" y2="100" />
          <circle cx="80" cy="105" r="7" />
          <circle cx="100" cy="100" r="7" />
          <circle cx="90" cy="85" r="10" />

          {/* Tree 2: Conifer (x=120) */}
          <line x1="120" y1="135" x2="120" y2="75" />
          <path d="M120,55 L112,70 L116,70 L108,90 L118,90 L102,115 L138,115 L122,90 L132,90 L124,70 L128,70 Z" />

          {/* Tree 3: Round tree with branch lines and puff canopy (x=155) */}
          <line x1="155" y1="135" x2="155" y2="85" />
          <line x1="155" y1="112" x2="142" y2="98" />
          <line x1="155" y1="107" x2="168" y2="92" />
          <circle cx="142" cy="98" r="8" />
          <circle cx="168" cy="92" r="9" />
          <circle cx="155" cy="80" r="11" />

          {/* Tree 4: Small conifer (x=185) */}
          <line x1="185" y1="135" x2="185" y2="95" />
          <path d="M185,80 L179,93 L182,93 L175,108 L183,108 L170,125 L200,125 L187,108 L195,108 L188,93 L191,93 Z" />

          {/* Tree 5: Small conifer (x=210) */}
          <line x1="210" y1="135" x2="210" y2="105" />
          <path d="M210,95 L206,103 L208,103 L202,115 L208,115 L198,128 L222,128 L212,115 L218,115 L212,103 L214,103 Z" />

          {/* Tree 6: Small round bush (x=235) */}
          <path d="M235,135 C228,135 225,128 230,122 C228,115 238,110 242,118 C245,112 252,115 250,122 C255,125 252,135 245,135 Z" />

          {/* Building Facade (x=270 to 780) */}
          {/* Main walls */}
          <rect x="270" y="65" width="510" height="70" />
          <line x1="270" y1="100" x2="780" y2="100" />
          {/* Roof double line */}
          <line x1="270" y1="65" x2="780" y2="65" />
          <line x1="270" y1="62" x2="780" y2="62" className="opacity-60" />

          {/* Left-most Wing Windows (x=270 to 345) */}
          {[285, 315].map((x) => (
            <g key={`win-lm-${x}`}>
              <rect x={x} y="75" width="12" height="16" rx="0.5" />
              <line x1={x + 6} y1="75" x2={x + 6} y2="91" className="opacity-50" />
              <rect x={x} y="108" width="12" height="16" rx="0.5" />
              <line x1={x + 6} y1="108" x2={x + 6} y2="124" className="opacity-50" />
            </g>
          ))}

          {/* Left Portico (x=345 to 375) */}
          <polygon points="345,65 360,50 375,65" />
          <polygon points="345,100 360,90 375,100" />
          <line x1="349" y1="65" x2="349" y2="135" />
          <line x1="371" y1="65" x2="371" y2="135" />
          <rect x="354" y="100" width="12" height="35" />

          {/* Middle-Left Wing Windows (x=385 to 495) */}
          {[400, 422, 444, 466].map((x) => (
            <g key={`win-ml-${x}`}>
              <rect x={x} y="75" width="12" height="16" rx="0.5" />
              <line x1={x + 6} y1="75" x2={x + 6} y2="91" className="opacity-50" />
              <rect x={x} y="108" width="12" height="16" rx="0.5" />
              <line x1={x + 6} y1="108" x2={x + 6} y2="124" className="opacity-50" />
            </g>
          ))}

          {/* Center Block & Tower (x=495 to 555) */}
          {/* Main center section facade walls */}
          <rect x="495" y="65" width="60" height="70" />
          
          {/* Center Portico */}
          <polygon points="495,65 525,48 555,65" />
          <polygon points="495,100 525,88 555,100" />
          {/* Colonnade pillars */}
          <line x1="504" y1="65" x2="504" y2="135" />
          <line x1="512" y1="65" x2="512" y2="135" />
          <line x1="538" y1="65" x2="538" y2="135" />
          <line x1="546" y1="65" x2="546" y2="135" />
          {/* Archway Door */}
          <path d="M518,135 L518,106 A7,7 0 0,1 532,106 L532,135" />

          {/* Center Tower body above the main block */}
          <rect x="510" y="20" width="30" height="45" />
          <path d="M510,20 C510,8 540,8 540,20" />
          <line x1="525" y1="8" x2="525" y2="0" strokeWidth="1.2" /> {/* Spire */}
          {/* Clock circle */}
          <circle cx="525" cy="32" r="6" />
          <line x1="525" y1="32" x2="525" y2="28" />
          <line x1="525" y1="32" x2="529" y2="32" />
          
          {/* Center Tower arched windows */}
          <path d="M515,53 L515,47 A3,3 0 0,1 521,47 L521,53 Z" />
          <path d="M529,53 L529,47 A3,3 0 0,1 535,47 L535,53 Z" />

          {/* Middle-Right Wing Windows (x=555 to 665) */}
          {[584, 606, 628, 650].map((x) => (
            <g key={`win-mr-${x}`}>
              <rect x={x} y="75" width="12" height="16" rx="0.5" />
              <line x1={x + 6} y1="75" x2={x + 6} y2="91" className="opacity-50" />
              <rect x={x} y="108" width="12" height="16" rx="0.5" />
              <line x1={x + 6} y1="108" x2={x + 6} y2="124" className="opacity-50" />
            </g>
          ))}

          {/* Right Portico (x=675 to 705) */}
          <polygon points="675,65 690,50 705,65" />
          <polygon points="675,100 690,90 705,100" />
          <line x1="679" y1="65" x2="679" y2="135" />
          <line x1="701" y1="65" x2="701" y2="135" />
          <rect x="684" y="100" width="12" height="35" />

          {/* Right-most Wing Windows (x=705 to 780) */}
          {[725, 755].map((x) => (
            <g key={`win-rm-${x}`}>
              <rect x={x} y="75" width="12" height="16" rx="0.5" />
              <line x1={x + 6} y1="75" x2={x + 6} y2="91" className="opacity-50" />
              <rect x={x} y="108" width="12" height="16" rx="0.5" />
              <line x1={x + 6} y1="108" x2={x + 6} y2="124" className="opacity-50" />
            </g>
          ))}

          {/* Roof rails/balustrades details */}
          <line x1="270" y1="60" x2="345" y2="60" />
          {Array.from({ length: 8 }).map((_, i) => (
            <line key={`bal-lm-${i}`} x1={272 + i * 10} y1="60" x2={272 + i * 10} y2="65" className="opacity-80" />
          ))}
          
          <line x1="385" y1="60" x2="495" y2="60" />
          {Array.from({ length: 12 }).map((_, i) => (
            <line key={`bal-ml-${i}`} x1={387 + i * 9} y1="60" x2={387 + i * 9} y2="65" className="opacity-80" />
          ))}
          
          <line x1="555" y1="60" x2="665" y2="60" />
          {Array.from({ length: 12 }).map((_, i) => (
            <line key={`bal-mr-${i}`} x1={557 + i * 9} y1="60" x2={557 + i * 9} y2="65" className="opacity-80" />
          ))}
          
          <line x1="705" y1="60" x2="780" y2="60" />
          {Array.from({ length: 8 }).map((_, i) => (
            <line key={`bal-rm-${i}`} x1={707 + i * 10} y1="60" x2={707 + i * 10} y2="65" className="opacity-80" />
          ))}

          {/* Right Trees */}
          {/* Tree 7: Small conifer (x=805) */}
          <line x1="805" y1="135" x2="805" y2="105" />
          <path d="M805,95 L801,103 L803,103 L797,115 L803,115 L793,128 L817,128 L807,115 L813,115 L807,103 L809,103 Z" />

          {/* Tree 8: Conifer (x=830) */}
          <line x1="830" y1="135" x2="830" y2="95" />
          <path d="M830,80 L824,93 L827,93 L820,108 L828,108 L815,125 L845,125 L832,108 L840,108 L833,93 L836,93 Z" />

          {/* Tree 9: Round tree with branch lines and puff canopy (x=860) */}
          <line x1="860" y1="135" x2="860" y2="85" />
          <line x1="860" y1="112" x2="847" y2="98" />
          <line x1="860" y1="107" x2="873" y2="92" />
          <circle cx="847" cy="98" r="8" />
          <circle cx="873" cy="92" r="9" />
          <circle cx="860" cy="80" r="11" />

          {/* Tree 10: Tall conifer (x=895) */}
          <line x1="895" y1="135" x2="895" y2="65" />
          <path d="M895,45 L887,60 L891,60 L880,80 L890,80 L870,110 L887,110 L860,135 L930,135 L903,110 L920,110 L900,80 L910,80 L899,60 L903,60 Z" />

          {/* Tree 11: Conifer (x=925) */}
          <line x1="925" y1="135" x2="925" y2="75" />
          <path d="M925,55 L917,70 L921,70 L913,90 L923,90 L907,115 L943,115 L927,90 L937,90 L929,70 L933,70 Z" />

          {/* Tree 12: Round leafy tree with puffs (x=955) */}
          <line x1="955" y1="135" x2="955" y2="95" />
          <line x1="955" y1="115" x2="945" y2="105" />
          <line x1="955" y1="110" x2="965" y2="100" />
          <circle cx="945" cy="105" r="7" />
          <circle cx="965" cy="100" r="7" />
          <circle cx="955" cy="85" r="10" />
        </svg>
      </div>
    </div>

    {/* Bottom section with dark background */}
    <div className="bg-[#06163a] border-t border-white/10 relative z-10 w-full">
        {/* Accreditation strip */}
        <div className="pt-5 pb-3">
          <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col xl:flex-row items-center justify-between gap-8">
            {/* Accreditations list (2x2 grid on mobile, row on desktop) */}
            <div className="grid grid-cols-2 md:flex md:flex-row md:flex-wrap lg:flex-nowrap items-center justify-center xl:justify-start gap-y-6 gap-x-4 lg:gap-x-6 w-full md:w-auto">
              {/* NAAC */}
              <div className="flex items-center gap-3 justify-start w-full max-w-[185px] mx-auto md:mx-0">
                <img src={naacLogo} alt="NAAC" className="h-10 w-auto object-contain bg-white rounded p-1" />
                <div className="text-left">
                  <div className="text-xs font-black text-white tracking-wider">NAAC 'A' GRADE</div>
                  <div className="text-[10px] text-gray-400 font-medium uppercase">Accredited Institution</div>
                </div>
              </div>

              {/* Divider */}
              <div className="hidden md:block h-8 w-[1px] bg-white/10" />

              {/* NIRF */}
              <div className="flex items-center gap-3 justify-start w-full max-w-[185px] mx-auto md:mx-0">
                <img src={nirfLogo} alt="NIRF" className="h-10 w-auto object-contain bg-white rounded p-1" />
                <div className="text-left">
                  <div className="text-xs font-black text-white tracking-wider">NIRF 2025</div>
                  <div className="text-[10px] text-gray-400 font-medium uppercase">Ranked Institute</div>
                </div>
              </div>

              {/* Divider */}
              <div className="hidden md:block h-8 w-[1px] bg-white/10" />

              {/* NBA */}
              <div className="flex items-center gap-3 justify-start w-full max-w-[185px] mx-auto md:mx-0">
                <img src={nbaLogo} alt="NBA" className="h-8 w-auto object-contain bg-white rounded p-1" />
                <div className="text-left">
                  <div className="text-xs font-black text-white tracking-wider">NBA ACCREDITED</div>
                  <div className="text-[10px] text-gray-400 font-medium uppercase">CSE | ECE | EEE | MECH</div>
                </div>
              </div>

              {/* Divider */}
              <div className="hidden md:block h-8 w-[1px] bg-white/10" />

              {/* Counselling Code */}
              <div className="flex items-center gap-3 justify-start w-full max-w-[185px] mx-auto md:mx-0">
                <img src={codeLogo} alt="Counselling Code 2653" className="h-10 w-auto object-contain bg-white rounded p-1" />
                <div className="text-left">
                  <div className="text-[10px] text-gray-400 font-medium uppercase tracking-wider">Counselling Code</div>
                  <div className="text-lg font-black text-[#ffc107]">2653</div>
                </div>
              </div>
            </div>

            {/* Follow us block */}
            <div className="flex items-center gap-4">
              <span className="text-[11px] font-black text-gray-400 uppercase tracking-widest">Follow Us</span>
              <div className="flex items-center gap-3">
                {socialLinks.map((social) => {
                  const Icon = social.icon
                  return (
                    <a
                      key={social.name}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-9 h-9 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white hover:bg-[#ffc107] hover:text-[#07163c] transition-all duration-300"
                    >
                      <Icon size={16} />
                    </a>
                  )
                })}
              </div>
            </div>
          </div>
        </div>

        {/* Copyright Footer */}
        <div className="border-t border-white/10 pt-4 pb-5">
          <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center justify-between text-gray-400 text-xs gap-4">
            <div>
              © 2026 Knowledge Institute of Technology. All Rights Reserved.
            </div>
            <div>
              Powered by <a href="https://www.kanavu.org/" target="_blank" rel="noopener noreferrer" className="hover:underline hover:text-white transition-colors">Kanavu Technologies</a> and KIOT
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
