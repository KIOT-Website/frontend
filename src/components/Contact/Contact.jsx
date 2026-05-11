import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  Phone, 
  Mail, 
  MessageCircle, 
  Search, 
  ChevronDown, 
  MapPin, 
  Navigation, 
  Send, 
  User, 
  AtSign, 
  PhoneIncoming, 
  GraduationCap, 
  Building2, 
  TrendingUp,
  Clock,
  ShieldCheck,
  Users,
  Home as HomeIcon
} from 'lucide-react'

const priorityContacts = [
  {
    id: 'adm',
    title: "Admission Enquiries",
    phone: "98947 01234",
    email: "admissions@kiot.ac.in",
    isPriority: true,
    whatsapp: "https://wa.me/919894701234",
    icon: GraduationCap,
    illustration: "/contact_assets/admission_3d_icon.png",
    desc: "Reach our dedicated counselors for admission help."
  },
  {
    id: 'pat',
    title: "Placement & Training",
    phone: "0427 2433917",
    email: "pat@kiot.ac.in",
    isPriority: true,
    whatsapp: "https://wa.me/914272433917",
    icon: TrendingUp,
    illustration: "/contact_assets/placement_3d_icon.png",
    desc: "Career opportunities and industry collaborations."
  },
  {
    id: 'pri',
    title: "Principal Desk",
    phone: "95009 41414",
    email: "principal@kiot.ac.in",
    isPriority: true,
    whatsapp: "https://wa.me/919500941414",
    icon: User,
    illustration: "/contact_assets/principal_3d_icon.png",
    desc: "Institutional administration and academic leadership."
  }
]

const categories = [
  {
    title: "Academic Departments (HODs)",
    items: [
      { name: "Mechanical Engineering", phone: "0427 2433931", email: "hod.mech@kiot.ac.in" },
      { name: "Computer Science (CSE)", phone: "0427 2433946", email: "hod.cse@kiot.ac.in" },
      { name: "Electronics & Communication", phone: "0427 2433958", email: "hod.ece@kiot.ac.in" },
      { name: "Electrical & Electronics", phone: "0427 2433961", email: "hod.eee@kiot.ac.in" },
      { name: "Civil Engineering", phone: "0427 2433991", email: "hod.civil@kiot.ac.in" },
      { name: "Information Technology (IT)", phone: "0427 2433921", email: "hod.it@kiot.ac.in" },
      { name: "CSBS Department", phone: "0427 2433930", email: "hod.csbs@kiot.ac.in" },
      { name: "AI & Data Science", phone: "0427 2433981", email: "hod.aids@kiot.ac.in" },
      { name: "Management Studies (MBA)", phone: "0427 2433976", email: "hod.mba@kiot.ac.in" },
      { name: "Science & Humanities", phone: "0427 2433900", email: "hod.snh@kiot.ac.in" }
    ]
  },
  {
    title: "Campus Accommodations",
    items: [
      { name: "Gents Hostel Office", phone: "0427 2433984", email: "gh@kiot.ac.in" },
      { name: "Ladies Hostel Office", phone: "0427 2433990", email: "lh@kiot.ac.in" }
    ]
  },
  {
    title: "Administrative Offices",
    items: [
      { name: "Director - Administration", phone: "97900 18181", email: "ao@kiot.ac.in" },
      { name: "A.O General Office", phone: "0427 2433906", email: "ao@kiot.ac.in" },
      { name: "Transport Office", phone: "97900 19191", email: "transport@kiot.ac.in" },
      { name: "COE (Exams)", phone: "90878 14141", email: "coe@kiot.ac.in" },
      { name: "Library Enquiries", phone: "0427 2433913", email: "librarian@kiot.ac.in" }
    ]
  }
]

const Contact = () => {
  const [search, setSearch] = useState("")
  const [openAccordion, setOpenAccordion] = useState(0)

  return (
    <section className="relative bg-[#FCFDFD] overflow-hidden font-sans" id="contact">
      
      {/* Hero Section */}
      <div className="relative pt-20 pb-16 lg:pt-32 lg:pb-24 overflow-hidden">
        {/* Abstract Background Decor */}
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-blue-50 rounded-full blur-[120px] -z-10 translate-x-1/3 -translate-y-1/4 opacity-60" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-blue-50 rounded-full blur-[100px] -z-10 -translate-x-1/4 translate-y-1/4 opacity-40" />

        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            
            {/* Left Column: Text & Search */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center gap-2 mb-6 bg-blue-50 px-5 py-2 rounded-full border border-blue-100 shadow-sm">
                <div className="h-2 w-2 rounded-full bg-[#ffc107] animate-pulse" />
                <span className="text-[11px] font-black uppercase tracking-[0.2em] text-[#224292]">Support Center</span>
              </div>
              
              <h1 className="text-5xl lg:text-7xl font-bold text-[#224292] leading-[1.1] mb-8">
                Get in Touch <br />
                <span className="text-[#ffc107]">With Us</span>
              </h1>
              
              <p className="text-lg lg:text-xl font-medium text-[#64779F] leading-relaxed max-w-xl mb-12">
                Whether you're an aspirant, a parent, or a hiring partner, reach the right department instantly. We're here to help you.
              </p>

              {/* Enhanced Search Bar */}
              <div className="relative max-w-xl group">
                <div className="absolute inset-y-0 left-6 flex items-center pointer-events-none text-slate-400 group-focus-within:text-[#224292] transition-colors">
                  <Search size={24} />
                </div>
                <input
                  type="text"
                  placeholder="Search department, hostel, etc..."
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  className="w-full bg-white border-2 border-slate-100 rounded-3xl py-6 pl-16 pr-8 text-lg font-bold text-[#0f172a] shadow-2xl shadow-blue-900/5 outline-none focus:border-[#224292]/20 transition-all placeholder:text-slate-300"
                />
              </div>
            </motion.div>

            {/* Right Column: Hero Illustration */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="relative hidden lg:block"
            >
              <img 
                src="/contact_assets/contact_hero_illustration.png" 
                alt="Contact Illustration" 
                className="w-full h-auto drop-shadow-[0_35px_35px_rgba(34,66,146,0.15)]"
              />
            </motion.div>
          </div>
        </div>
      </div>

      {/* Priority Contact Cards */}
      <div className="max-w-7xl mx-auto px-6 lg:px-10 pb-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {priorityContacts.map((contact, idx) => (
            <motion.div
              key={contact.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.15 }}
              viewport={{ once: true }}
              className="group relative bg-white rounded-[3rem] p-8 border border-slate-100 shadow-xl shadow-blue-900/5 hover:shadow-2xl hover:shadow-blue-900/10 hover:-translate-y-2 transition-all duration-500 overflow-hidden flex flex-col min-h-[520px]"
            >
              {/* Card Header */}
              <div className="flex items-center gap-5 mb-6">
                <div className="w-14 h-14 rounded-2xl bg-blue-50 flex items-center justify-center text-[#224292] group-hover:bg-[#224292] group-hover:text-white transition-all duration-500 shadow-inner">
                  <contact.icon size={28} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[#224292] leading-tight">{contact.title}</h3>
                </div>
              </div>

              {/* Card Description */}
              <p className="text-sm font-bold text-black mb-8 leading-relaxed">
                {contact.desc}
              </p>

              {/* 3D Illustration - Centered and non-overlapping */}
              <div className="flex-1 flex items-center justify-center mb-8 relative z-10">
                <img 
                  src={contact.illustration} 
                  alt={contact.title} 
                  className="w-48 h-48 object-contain group-hover:scale-110 group-hover:rotate-3 transition-transform duration-700" 
                />
              </div>

              {/* Contact Info */}
              <div className="relative z-20 mt-auto">
                <a 
                  href={`tel:${contact.phone.replace(/\s/g, '')}`}
                  className="inline-flex items-center gap-3 px-8 py-4 bg-[#224292] rounded-2xl text-white hover:bg-[#ffc107] hover:text-[#224292] transition-all duration-300 shadow-xl shadow-blue-900/10 group/btn"
                >
                  <Phone size={18} className="text-[#ffc107] group-hover/btn:text-[#224292] transition-colors" />
                  <span className="text-base font-black tracking-tight text-white group-hover/btn:text-[#224292] transition-colors">{contact.phone}</span>
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>


      {/* Detailed Listings (Accordions) */}
      <div className="max-w-4xl mx-auto px-6 py-20">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-[#224292] uppercase tracking-tight mb-4">Directory Listings</h2>
          <div className="h-1.5 w-20 bg-[#ffc107] mx-auto rounded-full" />
        </div>

        <div className="space-y-4">
          {categories.map((category, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-3xl border border-slate-100 shadow-sm overflow-hidden"
            >
              <button
                onClick={() => setOpenAccordion(openAccordion === idx ? -1 : idx)}
                className="w-full px-8 py-6 flex items-center justify-between text-left hover:bg-slate-50 transition-colors"
              >
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-xl bg-[#224292]/5 flex items-center justify-center text-[#224292]">
                    {idx === 0 ? <Building2 size={20} /> : idx === 1 ? <HomeIcon size={20} /> : <Navigation size={20} />}
                  </div>
                  <span className="text-lg font-black text-[#224292] uppercase tracking-tight">{category.title}</span>
                </div>
                <ChevronDown 
                  className={`text-[#64779F] transition-transform duration-300 ${openAccordion === idx ? 'rotate-180' : ''}`} 
                  size={24} 
                />
              </button>

              <AnimatePresence>
                {openAccordion === idx && (
                  <motion.div
                    initial={{ height: 0 }}
                    animate={{ height: "auto" }}
                    exit={{ height: 0 }}
                    className="overflow-hidden"
                  >
                    <div className="px-8 pb-8 grid grid-cols-1 md:grid-cols-2 gap-4">
                      {category.items.filter(item => 
                        item.name.toLowerCase().includes(search.toLowerCase()) || 
                        category.title.toLowerCase().includes(search.toLowerCase())
                      ).map((item, itemIdx) => (
                        <div key={itemIdx} className="p-5 rounded-2xl bg-slate-50/50 border border-slate-100 hover:border-[#224292]/20 hover:bg-white hover:shadow-xl hover:shadow-blue-900/5 transition-all group">
                          <h4 className="text-[14px] font-black text-[#224292] uppercase mb-3 leading-tight tracking-tight">{item.name}</h4>
                          <div className="flex flex-col gap-2">
                            <a href={`tel:${item.phone}`} className="flex items-center gap-2 text-xs font-bold text-[#64779F] hover:text-[#ffc107] transition-colors">
                              <Phone size={12} /> {item.phone}
                            </a>
                            <a href={`mailto:${item.email}`} className="flex items-center gap-2 text-xs font-bold text-[#64779F] hover:text-[#224292] transition-colors">
                              <Mail size={12} /> {item.email}
                            </a>
                          </div>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Map Section */}
      <div className="max-w-7xl mx-auto px-6 lg:px-10 pb-20">
        <div className="bg-white rounded-[3rem] border border-slate-100 shadow-2xl shadow-blue-900/5 overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-3">
            {/* Address Column */}
            <div className="p-12 lg:border-r border-slate-100 flex flex-col justify-center">
              <div className="w-16 h-16 rounded-2xl bg-blue-50 flex items-center justify-center text-[#224292] mb-8 shadow-inner">
                <MapPin size={32} />
              </div>
              <h2 className="text-3xl font-bold text-[#224292] uppercase tracking-tight mb-4">Our Campus</h2>
              <div className="space-y-1 mb-8">
                <p className="text-lg font-bold text-[#224292] leading-tight">Knowledge Institute of Technology</p>
                <p className="text-sm font-bold text-[#64779F] leading-relaxed italic">
                  KIOT Campus, Kakapalayam,<br />
                  Salem - 637 504, Tamil Nadu.
                </p>
              </div>
              <a 
                href="https://maps.app.goo.gl/uXvE2YmXyXnXZXkX9" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 text-[#224292] font-black uppercase tracking-widest text-xs hover:text-[#ffc107] transition-colors"
              >
                Open in Google Maps <Navigation size={14} />
              </a>
            </div>
            
            {/* Map Column */}
            <div className="lg:col-span-2 h-[400px] lg:h-auto min-h-[450px] relative">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3910.366258414457!2d77.98188167586561!3d11.597371141315993!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bab96193796695b%3A0x7d013063f91851e0!2sKnowledge%20Institute%20of%20Technology!5e0!3m2!1sen!2sin!4v1715408800000!5m2!1sen!2sin"
                className="absolute inset-0 w-full h-full border-0 grayscale hover:grayscale-0 transition-all duration-700"
                allowFullScreen="" 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="KIOT Salem Map"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
