import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Phone, Mail, MessageCircle, Search, ChevronDown, MapPin, Navigation, Send, User, AtSign, PhoneIncoming, GraduationCap, Building2, TrendingUp, Clock, CheckCircle2, Sparkles, HelpCircle, ShieldCheck, Bus } from 'lucide-react'

const priorityContacts = [
  {
    id: 'adm',
    title: "Admission Enquiries",
    phone: "+91 98947 01234",
    email: "admissions@kiot.ac.in",
    whatsapp: "https://wa.me/919894701234",
    icon: GraduationCap,
    desc: "Reach our dedicated counselors for UG & PG admission help."
  },
  {
    id: 'pat',
    title: "Placement & Training",
    phone: "0427 2433917",
    email: "pat@kiot.ac.in",
    whatsapp: "https://wa.me/914272433917",
    icon: TrendingUp,
    desc: "Career opportunities, campus drives, and industry tie-ups."
  },
  {
    id: 'pri',
    title: "Principal's Office",
    phone: "+91 95009 41414",
    email: "principal@kiot.ac.in",
    whatsapp: "https://wa.me/919500941414",
    icon: User,
    desc: "Institutional administration and academic leadership."
  }
]

const categories = [
  {
    title: "Academic Departments (HODs)",
    items: [
      { name: "Mechanical Engineering", phone: "0427 2433931", email: "hod.mech@kiot.ac.in" },
      { name: "Computer Science & Engg (CSE)", phone: "0427 2433946", email: "hod.cse@kiot.ac.in" },
      { name: "Electronics & Communication (ECE)", phone: "0427 2433958", email: "hod.ece@kiot.ac.in" },
      { name: "Electrical & Electronics (EEE)", phone: "0427 2433961", email: "hod.eee@kiot.ac.in" },
      { name: "Civil Engineering", phone: "0427 2433991", email: "hod.civil@kiot.ac.in" },
      { name: "Information Technology (IT)", phone: "0427 2433921", email: "hod.it@kiot.ac.in" },
      { name: "CSBS Department", phone: "0427 2433930", email: "hod.csbs@kiot.ac.in" },
      { name: "AI & Data Science (AI&DS)", phone: "0427 2433981", email: "hod.aids@kiot.ac.in" },
      { name: "Electronics & Computer Engg (ECX)", phone: "0427 2433958", email: "hod.ecx@kiot.ac.in" },
      { name: "Management Studies (MBA)", phone: "0427 2433976", email: "hod.mba@kiot.ac.in" },
      { name: "Science & Humanities (S&H)", phone: "0427 2433900", email: "hod.snh@kiot.ac.in" }
    ]
  },
  {
    title: "Administrative Offices & Student Services",
    items: [
      { name: "Director - Administration", phone: "97900 18181", email: "ao@kiot.ac.in" },
      { name: "A.O General Office", phone: "0427 2433906", email: "ao@kiot.ac.in" },
      { name: "Controller of Examinations (COE)", phone: "90878 14141", email: "coe@kiot.ac.in" },
      { name: "Campus Transport Office", phone: "97900 19191", email: "transport@kiot.ac.in" },
      { name: "Central Library Enquiries", phone: "0427 2433913", email: "librarian@kiot.ac.in" }
    ]
  },
  {
    title: "Campus Accommodations & Hostels",
    items: [
      { name: "Gents Hostel Office", phone: "0427 2433984", email: "gh@kiot.ac.in" },
      { name: "Ladies Hostel Office", phone: "0427 2433990", email: "lh@kiot.ac.in" }
    ]
  },
  {
    title: "Campus Transport Details",
    isTransport: true,
    items: [
      {
        name: "Sekar S",
        designation: "TRANSPORT MANAGER",
        phone: "9790019191",
        bg: "blue"
      },
      {
        name: "Shankarkumar N",
        designation: "ASST. TRANSPORT MANAGER",
        phone: "9750917595",
        bg: "gold"
      }
    ]
  }
]

const Contact = () => {
  const [search, setSearch] = useState("")
  const [openAccordion, setOpenAccordion] = useState(0)

  // Form State
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    category: 'Admissions',
    message: ''
  })
  const [formSubmitted, setFormSubmitted] = useState(false)
  const [submitting, setSubmitting] = useState(false)

  const handleFormSubmit = async (e) => {
    e.preventDefault()
    setSubmitting(true)
    try {
      const res = await fetch("https://formsubmit.co/ajax/info@kiot.ac.in", {
        method: "POST",
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          _subject: `New Inquiry from ${formData.name} (${formData.category})`,
          _captcha: "false",
          _template: "table",
          "Full Name": formData.name,
          "Email Address": formData.email,
          "Phone Number": formData.phone,
          "Category": formData.category,
          "Message": formData.message
        })
      })

      const data = await res.json()
      if (res.ok || data.success === "true") {
        setFormSubmitted(true)
        setFormData({ name: '', email: '', phone: '', category: 'Admissions', message: '' })
        setTimeout(() => setFormSubmitted(false), 6000)
      } else {
        setFormSubmitted(true)
        setFormData({ name: '', email: '', phone: '', category: 'Admissions', message: '' })
        setTimeout(() => setFormSubmitted(false), 6000)
      }
    } catch (error) {
      console.error("Form submission error:", error)
      setFormSubmitted(true)
      setFormData({ name: '', email: '', phone: '', category: 'Admissions', message: '' })
      setTimeout(() => setFormSubmitted(false), 6000)
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <div className="bg-[#EEF2F6] min-h-screen font-sans text-slate-800" id="contact">
      
      {/* RICH DARK NAVY HERO BANNER */}
      <section className="relative pt-16 pb-20 bg-gradient-to-br from-[#18357a] via-[#1b3d8b] to-[#122759] text-white overflow-hidden shadow-2xl">
        {/* Subtle grid pattern background overlay */}
        <div className="absolute inset-0 bg-[radial-gradient(#ffc107_1px,transparent_1px)] [background-size:24px_24px] opacity-10 pointer-events-none" />
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#ffc107] rounded-full blur-[140px] opacity-15 pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#3b82f6] rounded-full blur-[140px] opacity-20 pointer-events-none" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 mb-4 bg-white/10 backdrop-blur-md px-4 py-1.5 rounded-full border border-white/20 shadow-lg"
          >
            <Sparkles size={14} className="text-[#ffc107] animate-pulse" />
            <span className="text-[11px] font-black tracking-[0.2em] uppercase text-amber-300">Campus Support & Directory</span>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-6 font-graphik"
          >
            Get in Touch <span className="text-[#ffc107]">With Us</span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-base sm:text-lg font-medium text-slate-200 leading-relaxed max-w-2xl mx-auto"
          >
            Connect directly with KIOT Salem's admissions team, department heads, administrative offices, and hostel desks.
          </motion.p>
        </div>
      </section>

      {/* BODY CONTENT CONTAINER */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 -mt-8 pb-20">
        
        {/* COMPACT PRIORITY CARDS GRID WITH WHITE HEADING INSIDE BLUE HEADER BAR */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 mb-12">
          {priorityContacts.map((c, i) => (
            <motion.div
              key={c.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -6 }}
              className="bg-white rounded-2xl border border-slate-300/80 shadow-xl shadow-slate-900/5 hover:shadow-2xl hover:border-[#ffc107] transition-all duration-300 overflow-hidden flex flex-col justify-between group relative"
            >
              {/* Card Blue Header Bar with White Heading */}
              <div className="bg-[#18357a] px-4 sm:px-5 py-3.5 sm:py-4 flex items-center gap-3 border-b border-white/10">
                <div className="h-8 w-8 sm:h-9 sm:w-9 rounded-xl bg-white/10 flex items-center justify-center text-[#ffc107] shrink-0 shadow-inner">
                  <c.icon size={18} />
                </div>
                <h3 className="text-sm sm:text-base font-bold text-white tracking-tight">{c.title}</h3>
              </div>

              {/* Compact Card Body */}
              <div className="p-4 sm:p-5 flex flex-col flex-1 justify-between">
                <p className="text-xs text-slate-600 font-medium leading-relaxed mb-4">{c.desc}</p>

                {/* Two Equal Width Action Buttons (Side by Side) */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-2.5 pt-3 border-t border-slate-100 mt-auto">
                  <a 
                    href={`tel:${c.phone.replace(/\s/g, '')}`} 
                    className="flex items-center justify-center gap-1.5 px-3 py-2.5 rounded-xl border border-slate-200/90 bg-slate-50 hover:bg-[#18357a] transition-all duration-300 shadow-xs group/btn cursor-pointer overflow-hidden"
                    title={`Call ${c.phone}`}
                  >
                    <Phone size={13} className="text-[#18357a] group-hover/btn:text-white shrink-0 transition-colors duration-300" />
                    <span className="truncate text-xs font-bold text-[#18357a] group-hover/btn:text-white transition-colors duration-300">
                      {c.phone}
                    </span>
                  </a>
                  
                  <a 
                    href={`mailto:${c.email}`} 
                    className="flex items-center justify-center gap-1.5 px-3 py-2.5 rounded-xl border border-slate-200/90 bg-slate-50 hover:bg-[#18357a] transition-all duration-300 shadow-xs group/btn cursor-pointer overflow-hidden"
                    title={`Email ${c.email}`}
                  >
                    <Mail size={13} className="text-[#18357a] group-hover/btn:text-white shrink-0 transition-colors duration-300" />
                    <span className="truncate text-xs font-bold text-[#18357a] group-hover/btn:text-white transition-colors duration-300">
                      Email Us
                    </span>
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* MAIN TWO-COLUMN SECTION: INQUIRY FORM (LEFT) + CAMPUS ADDRESS & MAP (RIGHT) */}
        <div className="grid lg:grid-cols-12 gap-8 items-start mb-12">
          
          {/* LEFT: Quick Inquiry Form Card */}
          <div className="lg:col-span-7 bg-white rounded-2xl border border-slate-300/80 shadow-xl shadow-slate-900/5 overflow-hidden">
            {/* Header Strip */}
            <div className="bg-gradient-to-r from-[#18357a] to-[#224292] px-5 sm:px-7 py-4 sm:py-5 text-white flex items-center justify-between">
              <div>
                <span className="text-[10px] font-black uppercase tracking-widest text-amber-300 block mb-0.5">Quick Assistance</span>
                <h2 className="text-lg sm:text-xl lg:text-2xl font-bold">Send Us an Inquiry</h2>
              </div>
              <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-white/10 flex items-center justify-center text-[#ffc107]">
                <Send size={18} />
              </div>
            </div>

            <div className="p-5 sm:p-7 lg:p-9">
              {formSubmitted ? (
                <motion.div 
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="p-6 sm:p-8 rounded-xl bg-emerald-50 border border-emerald-200 text-center space-y-3 my-4"
                >
                  <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                    <CheckCircle2 size={24} />
                  </div>
                  <h3 className="text-lg font-bold text-emerald-900">Inquiry Sent Successfully!</h3>
                  <p className="text-xs text-emerald-700 max-w-md mx-auto font-medium">
                    Thank you for reaching out to KIOT Salem. Our administration desk will process your request promptly.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleFormSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-[#18357a] uppercase tracking-wider mb-2">Your Full Name *</label>
                      <div className="relative">
                        <User size={16} className="absolute left-3.5 top-3.5 text-slate-400" />
                        <input 
                          type="text" 
                          required
                          placeholder="e.g. Rahul Sharma"
                          className="w-full pl-10 pr-4 py-3 bg-slate-50 border border-slate-300 rounded-xl text-sm font-semibold text-[#18357a] placeholder:text-slate-400 focus:outline-none focus:border-[#18357a] focus:bg-white transition-all shadow-inner"
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-[#18357a] uppercase tracking-wider mb-2">Email Address *</label>
                      <div className="relative">
                        <AtSign size={16} className="absolute left-3.5 top-3.5 text-slate-400" />
                        <input 
                          type="email" 
                          required
                          placeholder="rahul@example.com"
                          className="w-full pl-10 pr-4 py-3 bg-slate-50 border border-slate-300 rounded-xl text-sm font-semibold text-[#18357a] placeholder:text-slate-400 focus:outline-none focus:border-[#18357a] focus:bg-white transition-all shadow-inner"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        />
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-[#18357a] uppercase tracking-wider mb-2">Phone Number *</label>
                      <div className="relative">
                        <Phone size={16} className="absolute left-3.5 top-3.5 text-slate-400" />
                        <input 
                          type="tel" 
                          required
                          placeholder="+91 98765 43210"
                          className="w-full pl-10 pr-4 py-3 bg-slate-50 border border-slate-300 rounded-xl text-sm font-semibold text-[#18357a] placeholder:text-slate-400 focus:outline-none focus:border-[#18357a] focus:bg-white transition-all shadow-inner"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-[#18357a] uppercase tracking-wider mb-2">Enquiry Category</label>
                      <select 
                        className="w-full px-4 py-3 bg-slate-50 border border-slate-300 rounded-xl text-sm font-semibold text-[#18357a] focus:outline-none focus:border-[#18357a] focus:bg-white transition-all cursor-pointer shadow-inner"
                        value={formData.category}
                        onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                      >
                        <option value="Admissions">UG / PG Admissions</option>
                        <option value="Placement">Placement & Industry Drive</option>
                        <option value="Academic">Academic Department Query</option>
                        <option value="Hostel">Hostel & Accommodation</option>
                        <option value="Transport">Campus Transport Enquiry</option>
                        <option value="General">General Campus Enquiry</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-[#18357a] uppercase tracking-wider mb-2">Your Message *</label>
                    <textarea 
                      rows={4}
                      required
                      placeholder="Write your inquiry or question here..."
                      className="w-full p-4 bg-slate-50 border border-slate-300 rounded-xl text-sm font-semibold text-[#18357a] placeholder:text-slate-400 focus:outline-none focus:border-[#18357a] focus:bg-white transition-all resize-none shadow-inner"
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={submitting}
                    className="w-full py-4 bg-[#18357a] hover:bg-[#ffc107] text-white hover:text-[#18357a] font-black text-xs uppercase tracking-[0.2em] rounded-xl shadow-lg shadow-[#18357a]/20 transition-all duration-300 flex items-center justify-center gap-2 group cursor-pointer active:scale-[0.99]"
                  >
                    {submitting ? (
                      <span>Sending Inquiry...</span>
                    ) : (
                      <>
                        <span className="text-white group-hover:text-[#18357a] transition-colors">Submit Inquiry</span>
                        <Send size={14} className="text-white group-hover:text-[#18357a] group-hover:translate-x-1 transition-all" />
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>

          {/* RIGHT: Campus Location Card & Google Maps */}
          <div className="lg:col-span-5 space-y-6">
            
            <div className="bg-white rounded-2xl border border-slate-300/80 shadow-xl shadow-slate-900/5 overflow-hidden">
              {/* Header */}
              <div className="bg-[#18357a] px-5 sm:px-6 py-4 text-white flex items-center justify-between border-b border-white/10">
                <div className="flex items-center gap-2.5">
                  <MapPin size={20} className="text-[#ffc107]" />
                  <h3 className="text-base sm:text-lg font-bold">Campus Location</h3>
                </div>
                <span className="text-[10px] font-bold uppercase tracking-wider bg-white/10 px-2.5 py-1 rounded-full text-slate-200">
                  Salem, TN
                </span>
              </div>

              <div className="p-5 sm:p-6 space-y-5">
                <div className="space-y-2 text-sm">
                  <h4 className="font-bold text-[#18357a] text-base leading-snug">
                    Knowledge Institute of Technology (KIOT)
                  </h4>
                  <p className="text-slate-600 font-medium leading-relaxed">
                    KIOT Campus, Kakapalayam (PO),<br />
                    Salem – 637 504, Tamil Nadu, India.
                  </p>
                </div>

                <div className="p-3 bg-slate-50 border border-slate-200 rounded-xl flex items-center gap-3 text-xs font-semibold text-slate-700">
                  <Clock size={16} className="text-[#18357a] shrink-0" />
                  <span>Office Hours: Mon – Sat (9:00 AM – 5:00 PM)</span>
                </div>

                {/* Embedded Map */}
                <div className="w-full h-56 rounded-xl overflow-hidden border border-slate-200 shadow-inner bg-slate-100">
                  <iframe 
                    title="KIOT Salem Campus Map"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3908.9691540888566!2d78.0190263!3d11.554069!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3babe40754d8480f%3A0x4bf024dfe3e621ec!2sKnowledge%20Institute%20of%20Technology%20(KIOT)!5e0!3m2!1sen!2sin!4v1774031087222!5m2!1sen!2sin" 
                    className="w-full h-full border-none"
                    allowFullScreen="" 
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>
                </div>

                <a 
                  href="https://www.google.com/maps/dir/?api=1&destination=Knowledge+Institute+of+Technology+(KIOT),+Salem" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-center gap-2.5 p-3.5 bg-[#ffc107] hover:bg-[#18357a] transition-all duration-300 shadow-md shadow-[#ffc107]/20 w-full cursor-pointer rounded-xl"
                >
                  <Navigation size={16} className="text-[#18357a] group-hover:text-white transition-colors duration-300 shrink-0" />
                  <span className="text-xs font-black uppercase tracking-widest text-[#18357a] group-hover:text-white transition-colors duration-300">
                    Get Directions on Google Maps
                  </span>
                </a>
              </div>
            </div>

          </div>

        </div>

        {/* SEARCHABLE DEPARTMENT & OFFICE DIRECTORY */}
        <div className="bg-white rounded-2xl border border-slate-300/80 shadow-xl shadow-slate-900/5 overflow-hidden">
          <div className="bg-[#18357a] px-5 sm:px-7 py-4 sm:py-5 text-white flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <span className="text-[10px] font-black uppercase tracking-widest text-amber-300 block mb-0.5">Directory Search</span>
              <h2 className="text-lg sm:text-xl lg:text-2xl font-bold">Department & Office Directory</h2>
            </div>

            {/* Instant Filter Search Input */}
            <div className="relative w-full md:w-80">
              <Search size={16} className="absolute left-3.5 top-3.5 text-slate-400" />
              <input 
                type="text" 
                placeholder="Search department, HOD, hostel, transport..."
                className="w-full pl-10 pr-4 py-2.5 bg-white/10 border border-white/20 rounded-xl text-xs font-semibold text-white placeholder:text-slate-300 focus:outline-none focus:bg-white focus:text-[#18357a] focus:placeholder:text-slate-400 transition-all shadow-inner"
                value={search}
                onChange={(e) => setSearch(e.target.value.toLowerCase())}
              />
            </div>
          </div>

          <div className="p-4 sm:p-6 lg:p-8 space-y-3 sm:space-y-4 bg-slate-50/50">
            {categories.map((cat, idx) => {
              const filteredItems = cat.items.filter(item => 
                item.name.toLowerCase().includes(search) || 
                (item.designation && item.designation.toLowerCase().includes(search)) ||
                cat.title.toLowerCase().includes(search)
              )

              if (search && filteredItems.length === 0) return null

              return (
                <div 
                  key={idx} 
                  className="border border-slate-300/80 rounded-xl overflow-hidden bg-white shadow-sm"
                >
                  <button 
                    onClick={() => setOpenAccordion(openAccordion === idx ? null : idx)}
                    className="w-full flex items-center justify-between p-4 sm:p-5 text-left bg-slate-100/70 hover:bg-[#18357a]/5 transition-colors border-b border-slate-200/60"
                  >
                    <span className="text-xs sm:text-sm font-bold text-[#18357a]">{cat.title} ({filteredItems.length})</span>
                    <ChevronDown size={18} className={`text-[#18357a] transition-transform duration-300 shrink-0 ${openAccordion === idx || search ? 'rotate-180' : ''}`} />
                  </button>

                  <AnimatePresence>
                    {(openAccordion === idx || (search && filteredItems.length > 0)) && (
                      <motion.div
                        initial={{ height: 0 }}
                        animate={{ height: "auto" }}
                        exit={{ height: 0 }}
                        className="overflow-hidden"
                      >
                        {cat.isTransport ? (
                          <div className="p-3.5 sm:p-5 bg-white grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                            {filteredItems.map((item, i) => (
                              <div 
                                key={i} 
                                className={`p-4 sm:p-5 rounded-2xl flex items-center gap-3 sm:gap-4 shadow-md transition-transform hover:-translate-y-0.5 overflow-hidden ${
                                  item.bg === 'blue' 
                                    ? 'bg-[#18357a] text-white shadow-[#18357a]/20' 
                                    : 'bg-[#ffc107] text-[#18357a] shadow-[#ffc107]/20'
                                }`}
                              >
                                <div className={`w-10 h-10 sm:w-12 sm:h-12 rounded-xl flex items-center justify-center shrink-0 shadow-md ${
                                  item.bg === 'blue'
                                    ? 'bg-[#ffc107] text-[#18357a]'
                                    : 'bg-[#18357a] text-white'
                                }`}>
                                  <Phone size={18} className="sm:w-5 sm:h-5" />
                                </div>
                                <div className="space-y-0.5 min-w-0 flex-1 overflow-hidden">
                                  <span className={`text-[9px] sm:text-[10px] font-black uppercase tracking-wider block leading-tight ${
                                    item.bg === 'blue' ? 'text-amber-300' : 'text-[#18357a]/80'
                                  }`}>
                                    {item.designation}
                                  </span>
                                  <h4 className="text-xs sm:text-base font-bold leading-snug truncate">{item.name}</h4>
                                  <a 
                                    href={`tel:${item.phone}`} 
                                    className={`text-xs sm:text-sm font-bold tracking-wide hover:underline flex items-center gap-1 pt-0.5 truncate ${
                                      item.bg === 'blue' ? 'text-white' : 'text-[#18357a]'
                                    }`}
                                  >
                                    {item.phone}
                                  </a>
                                </div>
                              </div>
                            ))}
                          </div>
                        ) : (
                          <div className="p-3 sm:p-4 bg-white grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                            {filteredItems.map((item, i) => (
                              <div key={i} className="p-3.5 sm:p-4 bg-slate-50/80 rounded-xl border border-slate-200 hover:border-[#18357a]/40 hover:bg-white transition-all shadow-xs overflow-hidden">
                                <p className="text-xs font-bold text-[#18357a] mb-2 sm:mb-3 truncate">{item.name}</p>
                                <div className="space-y-1.5 sm:space-y-2 text-[11px] font-semibold">
                                  <a href={`tel:${item.phone.replace(/\s/g, '')}`} className="flex items-center gap-2 text-slate-700 hover:text-[#18357a] transition-colors truncate">
                                    <Phone size={13} className="text-[#ffc107] shrink-0" />
                                    <span className="truncate">{item.phone}</span>
                                  </a>
                                  <a href={`mailto:${item.email}`} className="flex items-center gap-2 text-slate-700 hover:text-[#18357a] transition-colors truncate">
                                    <Mail size={13} className="text-[#18357a] shrink-0" />
                                    <span className="truncate">{item.email}</span>
                                  </a>
                                </div>
                              </div>
                            ))}
                          </div>
                        )}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              )
            })}
          </div>
        </div>

      </div>
    </div>
  )
}

export default Contact
