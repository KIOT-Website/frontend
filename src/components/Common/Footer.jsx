import { Facebook, Instagram, Linkedin, Twitter, Youtube, Phone, Mail, ArrowRight, ArrowUpRight, GraduationCap } from 'lucide-react'
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'
import logoBlue from '../../assets/Kiot logo.webp'

const Footer = () => {
  const socialLinks = [
    { name: 'Facebook', href: 'https://www.facebook.com/Kiotkbs/', icon: Facebook },
    { name: 'Instagram', href: 'https://www.instagram.com/infokiot/', icon: Instagram },
    { name: 'Twitter', href: 'https://x.com/infokiot', icon: Twitter },
    { name: 'LinkedIn', href: 'https://www.linkedin.com/school/infokiot/', icon: Linkedin },
    { name: 'YouTube', href: 'https://www.youtube.com/@infokiot', icon: Youtube },
  ]

  const navigate = useNavigate()

  const menuSections = {
    'Explore': [
      { name: 'About Us', href: '/about-us' },
      { name: 'Vision & Mission', href: '/vision-mission' },
      { name: 'Leadership & Council', href: '/leadership' },
      { name: 'Accreditation', href: '/accreditation-ranking' },
      { name: 'Governing Council', href: '/governing-council' },
      { name: 'Programs Offered', href: '/academics' },
      { name: 'Contact Institution', href: '/contact' },
    ],
    'Resources': [
      { name: 'Placement Overview', href: '/placement-overview' },
      { name: 'Training & Skills', href: '/training' },
      { name: 'Recruitment Process', href: '/recruitment' },
      { name: 'Outcomes & Records', href: '/records' },
      { name: 'Institutional Achievements', href: '/achievements' },
      { name: 'Events & Media', href: '/events' },
    ],
    'Admissions': [
      { name: 'Admission Overview', href: '/admissions' },
      { name: 'UG Registration', href: '/admissions/ug-registration' },
      { name: 'PG Registration', href: '/admissions/pg-registration' },
      { name: 'Enquiry Form', href: '/admissions#enquiry' },
      { name: 'Contact Admissions', href: '/contact' },
    ]
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
    <footer className="relative pt-40 pb-12 px-6 lg:px-12 overflow-hidden bg-white">
      {/* Straight Institutional Border - Clean Transition */}
      <div className="absolute top-0 left-0 w-full h-[8px] bg-[#ffc107] z-20 shadow-[0_4px_20px_rgba(255,193,7,0.3)]" />

      <div className="absolute inset-x-0 bottom-0 top-0 bg-[#18357a] z-0" />

      {/* Academic Dot Pattern Texture */}
      <div className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:20px_20px]" />

      {/* Overlapping Institutional Accent - Graduation Cap */}
      <div className="absolute top-48 right-0 lg:right-40 w-[500px] h-[500px] text-white/[0.08] pointer-events-none transform -rotate-12 z-20 hidden lg:block opacity-60">
          <GraduationCap size={500} strokeWidth={0.5} />
      </div>

      {/* Creative Signature Footer Card - Expanded Yellow Mode */}
      <div className="max-w-7xl mx-auto bg-[#0d1c43]/60 backdrop-blur-3xl rounded-[3rem_2rem_3rem_2rem] shadow-[0_40px_100px_rgba(0,0,0,0.5)] overflow-hidden relative flex flex-col lg:flex-row border border-white/5 min-h-[580px] z-10 transition-all duration-700">
        
        {/* Branding & Media Section (Left - Top Aligned) */}
        <div className="relative lg:w-[32%] p-10 flex flex-col items-center justify-start overflow-hidden border-r border-white/5 bg-[#ffc107]/5">
          <div className="relative z-10 w-full flex flex-col items-center gap-10 pt-4">
            {/* Rectangle Logo Frame - Resized Smaller */}
            <div className="w-full bg-white rounded-3xl p-8 py-10 shadow-[0_20px_50px_rgba(0,0,0,0.3)] relative flex items-center justify-center group overflow-hidden border-4 border-[#ffc107]/30 hover:border-[#ffc107] transition-all duration-700">
               <div className="absolute inset-0 bg-gradient-to-br from-white via-white to-slate-50" />
               <img 
                  src={logoBlue} 
                  alt="KIOT Branding" 
                  className="w-10/12 h-auto object-contain relative z-10 group-hover:scale-105 transition-transform duration-700"
               />
               <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-[#ffc107] rounded-tr-3xl" />
               <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-[#ffc107] rounded-bl-3xl" />
            </div>

            {/* Institutional Address Details */}
            <div className="w-full space-y-2 pt-2">
              <p className="text-white font-black text-[13px] leading-tight tracking-tight uppercase border-l-2 border-[#ffc107] pl-4">
                Knowledge Institute of Technology
              </p>
              <div className="text-white/80 font-medium text-[11px] leading-relaxed pl-4 border-l-2 border-white/10 group-hover:border-white transition-colors duration-500">
                KIOT-Campus, NH544, Kakapalayam,<br />
                Salem, Tamilnadu – 637504 India.
              </div>
            </div>

            {/* Apply Now Button - Vivid Yellow */}
            <Link 
              to="/admissions" 
              className="w-full bg-[#ffc107] text-[#18357a] py-5 rounded-2xl font-black text-xs uppercase tracking-[0.2em] shadow-xl hover:bg-white hover:shadow-[#ffc107]/20 transition-all duration-500 flex items-center justify-center gap-3 active:scale-95 group mb-8"
            >
              Apply Now 2026-27 <ArrowUpRight size={16} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </Link>

            {/* Integrated Contact Section (Moved to Left Column) */}
            <div className="w-full space-y-6 pt-6 border-t border-white/10">
               <div className="flex items-center gap-4 group/info">
                 <div className="w-9 h-9 rounded-xl bg-[#ffc107] flex items-center justify-center text-[#18357a] transition-all shadow-lg scale-90">
                   <Phone size={16} />
                 </div>
                 <div className="flex flex-col">
                   <span className="text-[9px] font-black text-[#ffc107] uppercase tracking-wider">Direct Line</span>
                   <span className="text-white font-black text-xs tracking-tight">+91 96005 41414</span>
                 </div>
               </div>
               <div className="flex items-center gap-4 group/info">
                 <div className="w-9 h-9 rounded-xl bg-[#ffc107] flex items-center justify-center text-[#18357a] transition-all shadow-lg scale-90">
                   <Mail size={16} />
                 </div>
                 <div className="flex flex-col">
                   <span className="text-[9px] font-black text-[#ffc107] uppercase tracking-wider">Email Us</span>
                   <span className="text-white font-black text-xs underline underline-offset-4 decoration-[#ffc107]/40 decoration-2">info@kiot.ac.in</span>
                 </div>
               </div>
            </div>
          </div>
        </div>

        {/* Multi-Section Information Grid (Center & Right) - Static Multi-Column */}
        <div className="flex-1 p-10 lg:p-14 flex flex-col justify-center">
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-14 h-full">
            
            {/* Render all categories as distinct static columns */}
            {Object.keys(menuSections).map((category) => (
              <div key={category} className="space-y-6">
                <div className="flex items-center gap-3 mb-8">
                   <div className="w-2 h-6 bg-[#ffc107] rounded-full" />
                   <h4 className="text-[#ffc107] font-black text-[10px] uppercase tracking-[0.4em] font-['Inter']">
                      {category}
                   </h4>
                </div>
                
                <ul className="grid gap-4">
                  {menuSections[category].map((link) => (
                    <li key={link.name}>
                      <Link 
                        to={link.href} 
                        onClick={(e) => handleLinkClick(e, link.href)}
                        className="!text-white font-semibold text-[14px] hover:text-[#ffc107] transition-all flex items-center gap-2 group/item"
                      >
                         <ArrowRight size={14} className="opacity-0 -translate-x-2 group-hover/item:opacity-100 group-hover/item:translate-x-0 transition-all text-[#ffc107] shrink-0" />
                         <span className="group-hover/item:translate-x-1 transition-transform">{link.name}</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}

          </div>
        </div>

        {/* Global Accent Bottom Strip */}
        <div className="absolute bottom-0 right-0 w-32 h-32 bg-white/5 opacity-40 rounded-tl-full" />
      </div>

      {/* Modern Micro Footer */}
      <div className="max-w-7xl mx-auto px-6 lg:px-16 py-10 flex flex-col md:flex-row items-center justify-between text-white/50 gap-6 text-[11px] font-black uppercase tracking-widest relative z-10">
          <div className="flex items-center gap-6">
            <span>&copy; {new Date().getFullYear()} KIOT ADMISSIONS</span>
            <span className="hidden md:block w-1.5 h-1.5 rounded-full bg-[#ffc107]" />
            <Link to="/accreditation-ranking" className="hover:text-[#ffc107]">Policy & Ranking</Link>
          </div>
          <p className="flex items-center gap-2">
             <span className="opacity-40">Developed by</span>
             <a href="https://www.kanavu.org/" target="_blank" rel="noopener noreferrer" className="text-white font-black hover:text-[#ffc107] transition-colors border-b-2 border-white/10 pb-0.5">KANAVU TECH</a>
          </p>
      </div>
    </footer>
  )
}

export default Footer
