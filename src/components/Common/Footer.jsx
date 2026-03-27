import { Facebook, Instagram, Linkedin, Twitter, Youtube, MapPin, Phone, Mail, ArrowRight, ArrowUpRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import logo from '../../assets/logo.webp'

const Footer = () => {
  const socialLinks = [
    { name: 'Facebook', href: 'https://www.facebook.com/Kiotkbs/', icon: Facebook },
    { name: 'Instagram', href: 'https://www.instagram.com/infokiot/', icon: Instagram },
    { name: 'Twitter', href: 'https://x.com/infokiot', icon: Twitter },
    { name: 'LinkedIn', href: 'https://www.linkedin.com/school/infokiot/', icon: Linkedin },
    { name: 'YouTube', href: 'https://www.youtube.com/@infokiot', icon: Youtube },
  ]

  const quickLinks = [
    { name: 'About Us', href: '/about' },
    { name: 'Vision & Mission', href: '/vision-mission' },
    { name: 'Programs Offered', href: '/#academics' },
    { name: 'Campus Life', href: '/#campus' },
    { name: 'Contact Us', href: '/contact' },
  ]

  const resources = [
    { name: 'Student Portal', href: '/student-portal' },
    { name: 'Alumni Network', href: '/alumni' },
    { name: 'Career Opportunities', href: '/careers' },
    { name: 'Grievance Redressal', href: '/grievance' },
    { name: 'Privacy Policy', href: '/privacy' },
  ]

  const handleLinkClick = (e, linkHref) => {
    if (linkHref.includes('#')) {
      const targetPath = linkHref.split('#')[0] || '/';
      const hash = linkHref.split('#')[1];
      if (window.location.pathname === targetPath || (window.location.pathname === '/' && targetPath === '/')) {
        e.preventDefault();
        document.getElementById(hash)?.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }

  return (
    <footer className="relative bg-[#0d1c43] text-white mt-16 md:mt-24 lg:mt-32">
      
      {/* Floatin Call-To-Action Card (Unique Design Element) */}
      <div className="absolute left-0 right-0 top-0 -translate-y-1/2 px-5 sm:px-10 z-30 flex justify-center">
        <div className="w-full max-w-4xl bg-gradient-to-r from-[#ffc107] via-[#f7cd44] to-[#ffc107] rounded-3xl p-8 md:p-10 shadow-[0_25px_60px_rgba(255,193,7,0.25)] border-[5px] border-[#FCFDFD] flex flex-col md:flex-row items-center justify-between gap-6 md:gap-10 group relative overflow-hidden">
          
          {/* Subtle animated background shapes inside CTA */}
          <div className="absolute top-0 right-0 w-48 h-48 bg-white/20 rounded-full blur-2xl transform group-hover:scale-150 transition-transform duration-1000 -translate-y-1/2 translate-x-1/3 pointer-events-none" />
          
          <div className="relative z-10 text-center md:text-left w-full">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-[#18357a] font-display mb-2 tracking-tight">
              Ready to Shape Your Future?
            </h2>
            <p className="font-bold text-[#18357a]/75 text-base md:text-lg">
              Join KIOT and start your journey today.
            </p>
          </div>
          
          <div className="relative z-10 w-full md:w-auto flex-shrink-0 flex justify-center md:justify-end">
            <Link to="/admissions" className="flex items-center justify-center gap-3 w-full md:w-auto bg-[#18357a] text-white px-8 py-4 rounded-xl font-black tracking-widest uppercase text-xs lg:text-sm hover:bg-white hover:text-[#18357a] hover:shadow-[0_10px_25px_rgba(24,53,122,0.15)] transition-all duration-300 transform hover:-translate-y-1">
              Apply Now <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </div>

      {/* Spacing to handle the floating CTA card (-translate-y-1/2) */}
      <div className="pt-40 md:pt-48 lg:pt-56 pb-16 lg:pb-24 px-5 sm:px-10 lg:px-20 relative overflow-hidden z-20">
        
        {/* Giant Watermark Typography Background */}
        <div className="absolute top-[30%] left-1/2 -translate-x-1/2 -translate-y-1/2 text-[25vw] font-black font-display text-white/[0.02] pointer-events-none whitespace-nowrap tracking-tighter w-full text-center mix-blend-overlay select-none">
          KIOT
        </div>

        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-[1fr_0.8fr_0.8fr] gap-12 lg:gap-24 relative z-10">
          
          {/* Column 1: Brand Identifier */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <div className="bg-white px-5 py-4 rounded-2xl w-max mb-8 shadow-sm">
               <img src={logo} alt="KIOT Logo" className="h-[40px] lg:h-[48px] w-auto object-contain" />
            </div>
            <p className="text-[15px] lg:text-[16px] text-[#A9B1C3] leading-relaxed mb-8 max-w-sm">
              Creating world-class professionals through cutting-edge education, ethical values, and holistic development since inception.
            </p>
            <div className="flex flex-col gap-4 w-full">
               <a href="mailto:info@kiot.ac.in" className="flex items-center justify-center md:justify-start gap-4 p-4 rounded-xl bg-white/5 border border-white/5 hover:bg-white/10 hover:border-white/10 transition-colors group">
                  <div className="w-10 h-10 rounded-full bg-[#ffc107] flex items-center justify-center text-[#18357a] group-hover:scale-110 transition-transform">
                     <Mail size={16} />
                  </div>
                  <div className="flex flex-col">
                     <span className="text-[10px] font-black uppercase tracking-[0.2em] text-[#A9B1C3] mb-0.5">Email Us</span>
                     <span className="text-sm font-bold tracking-wide">info@kiot.ac.in</span>
                  </div>
               </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="text-center md:text-left flex flex-col items-center md:items-start">
            <h3 className="text-white text-lg font-black tracking-widest uppercase mb-8 opacity-90">Company</h3>
            <ul className="space-y-5 w-full">
              {quickLinks.map((link) => (
                <li key={link.name} className="flex justify-center md:justify-start">
                  <Link 
                    to={link.href}
                    onClick={(e) => handleLinkClick(e, link.href)}
                    className="group inline-flex items-center gap-3 text-[15px] font-medium text-[#A9B1C3] hover:text-[#ffc107] transition-all"
                  >
                    <ArrowUpRight size={14} className="opacity-0 -translate-x-2 translate-y-2 group-hover:opacity-100 group-hover:translate-x-0 group-hover:translate-y-0 text-[#ffc107] transition-all duration-300 absolute" />
                    <span className="group-hover:translate-x-6 transition-transform duration-300 inline-block">{link.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Resources & Location */}
          <div className="text-center md:text-left flex flex-col items-center md:items-start shrink-0">
            <h3 className="text-white text-lg font-black tracking-widest uppercase mb-8 opacity-90">Locations</h3>
            <div className="text-[#A9B1C3] text-[15px] leading-relaxed space-y-4 mb-8">
               <div className="flex items-start gap-3 justify-center md:justify-start">
                 <MapPin className="text-[#ffc107] shrink-0 mt-1" size={18} />
                 <p className="max-w-[250px]">
                   Knowledge Institute of Technology,<br />
                   KIOT Campus, Kakapalayam (PO),<br />
                   Salem - 637 504.
                 </p>
               </div>
               <div className="flex items-start gap-3 justify-center md:justify-start">
                 <Phone className="text-[#ffc107] shrink-0 mt-1" size={18} />
                 <p>+91 96005 41414 <br/> +91 98947 01234</p>
               </div>
            </div>
            
            {/* Social Links Layout */}
            <h3 className="text-white text-[11px] font-black tracking-[0.2em] uppercase mb-4 opacity-70">Follow Us</h3>
            <div className="flex flex-wrap items-center justify-center md:justify-start gap-3">
              {socialLinks.map((social) => (
                <a 
                  key={social.name} 
                  href={social.href} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center hover:bg-[#ffc107] hover:border-[#ffc107] hover:text-[#18357a] text-white transition-all transform hover:-translate-y-1 shadow-sm"
                >
                  <social.icon size={18} />
                </a>
              ))}
            </div>
          </div>

        </div>
      </div>

      {/* Micro Footer Bottom Bar */}
      <div className="border-t border-white/5 bg-[#09132e] py-6 relative z-30">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 flex flex-col md:flex-row items-center justify-center text-center">
            <p className="text-[12px] md:text-[13px] text-[#A9B1C3] font-medium tracking-wide flex flex-col md:flex-row items-center gap-1 md:gap-2">
               <span>&copy; {new Date().getFullYear()} <span className="text-white font-bold">Knowledge Institute of Technology</span>. All rights reserved.</span>
               <span className="hidden md:inline text-white/20">|</span>
               <span>Powered by <a href="https://www.kanavu.org/" target="_blank" rel="noopener noreferrer" className="text-white font-bold hover:text-[#ffc107] transition-colors underline decoration-[#ffc107]/30 underline-offset-4">Kanavu Technologies</a></span>
            </p>
        </div>
      </div>

    </footer>
  )
}

export default Footer
