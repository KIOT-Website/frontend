import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Phone, Mail, MessageCircle, Search, ChevronDown, MapPin, Navigation, Send, User, AtSign, PhoneIncoming, GraduationCap, Building2, TrendingUp, Clock, CheckCircle2, Sparkles, HelpCircle } from 'lucide-react'

const priorityContacts = [
  {
    id: 'adm',
    title: "Admission Enquiries",
    phone: "+91 98947 01234",
    email: "admissions@kiot.ac.in",
    whatsapp: "https://wa.me/919894701234",
    icon: GraduationCap,
    desc: "Reach our dedicated counselors for UG & PG admission help.",
    badge: "Fast Response"
  },
  {
    id: 'pat',
    title: "Placement & Training",
    phone: "0427 2433917",
    email: "pat@kiot.ac.in",
    whatsapp: "https://wa.me/914272433917",
    icon: TrendingUp,
    desc: "Career opportunities, campus drives, and industry tie-ups.",
    badge: "Recruiters"
  },
  {
    id: 'pri',
    title: "Principal's Office",
    phone: "+91 95009 41414",
    email: "principal@kiot.ac.in",
    whatsapp: "https://wa.me/919500941414",
    icon: User,
    desc: "Institutional administration and academic leadership.",
    badge: "Administration"
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

  const handleFormSubmit = (e) => {
    e.preventDefault()
    setSubmitting(true)
    setTimeout(() => {
      setSubmitting(false)
      setFormSubmitted(true)
      setFormData({ name: '', email: '', phone: '', category: 'Admissions', message: '' })
      setTimeout(() => setFormSubmitted(false), 5000)
    }, 800)
  }

  return (
    <section className="relative py-12 lg:py-16 bg-[#FCFDFD] overflow-hidden" id="contact">
      {/* Background Decor */}
      <div className="absolute top-0 left-0 w-full h-[600px] bg-gradient-to-b from-[#224292]/5 via-transparent to-transparent -z-10" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-10">
        
        {/* HEADER */}
        <div className="max-w-3xl mb-12 mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 mb-4 bg-[#224292]/5 px-4 py-1.5 rounded-full border border-[#224292]/10"
          >
            <div className="h-1.5 w-1.5 rounded-full bg-[#ffc107] animate-pulse" />
            <span className="text-[11px] font-bold tracking-[0.15em] uppercase text-[#224292]">Campus Support & Enquiries</span>
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl lg:text-5xl font-semibold text-[#224292] mb-5 tracking-tight"
          >
            Get in Touch <span className="text-[#ffc107]">With Us</span>
          </motion.h2>

          <motion.p 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-base lg:text-lg font-medium text-[#64779F] leading-relaxed max-w-xl mx-auto"
          >
            Whether you're an aspirant, parent, student, or industry partner, reach our campus administrative teams and academic departments instantly.
          </motion.p>
        </div>

        {/* PRIORITY CARDS GRID */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {priorityContacts.map((c) => (
            <motion.div
              key={c.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              whileHover={{ y: -6 }}
              transition={{ duration: 0.3 }}
              className="bg-white p-7 rounded-2xl border border-slate-200/80 hover:border-[#ffc107] shadow-lg shadow-slate-100 transition-all duration-300 flex flex-col justify-between group relative overflow-hidden"
            >
              <div className="absolute top-4 right-4">
                <span className="text-[9px] font-black uppercase tracking-wider bg-[#224292]/5 text-[#224292] px-2.5 py-1 rounded-full border border-[#224292]/10">
                  {c.badge}
                </span>
              </div>

              <div>
                <div className="h-13 w-13 rounded-2xl bg-[#224292] flex items-center justify-center text-[#ffc107] mb-6 shadow-md shadow-[#224292]/20 group-hover:scale-105 transition-transform">
                  <c.icon size={26} />
                </div>
                <h3 className="text-xl font-bold text-[#224292] mb-2">{c.title}</h3>
                <p className="text-xs text-[#64779F] leading-relaxed mb-6 font-medium">{c.desc}</p>
              </div>

              <div className="space-y-3 pt-4 border-t border-slate-100">
                <a 
                  href={`tel:${c.phone.replace(/\s/g, '')}`} 
                  className="flex items-center justify-between p-3 rounded-xl bg-slate-50 hover:bg-[#224292] text-[#224292] hover:text-white transition-all font-bold text-sm group/call"
                >
                  <span className="flex items-center gap-2.5">
                    <Phone size={15} className="text-[#ffc107]" />
                    {c.phone}
                  </span>
                  <span className="text-[10px] font-black uppercase tracking-wider opacity-0 group-hover/call:opacity-100 transition-opacity">Call</span>
                </a>
                
                <a 
                  href={`mailto:${c.email}`} 
                  className="flex items-center gap-2.5 px-3 py-2 text-xs font-semibold text-[#64779F] hover:text-[#224292] transition-colors truncate"
                >
                  <Mail size={14} className="text-[#ffc107] shrink-0" />
                  <span className="truncate">{c.email}</span>
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        {/* MAIN TWO-COLUMN SECTION: INQUIRY FORM (LEFT) + CAMPUS ADDRESS & MAP (RIGHT) */}
        <div className="grid lg:grid-cols-12 gap-8 items-start mb-16">
          
          {/* LEFT: Quick Inquiry Form */}
          <div className="lg:col-span-7 bg-white p-7 lg:p-9 rounded-2xl border border-slate-200/90 shadow-xl shadow-slate-100 relative">
            <div className="flex items-center justify-between mb-6">
              <div>
                <span className="text-[10px] font-black uppercase tracking-widest text-[#ffc107] block mb-1">Quick Message</span>
                <h3 className="text-2xl lg:text-3xl font-bold text-[#224292]">Send Us an Inquiry</h3>
              </div>
              <div className="w-10 h-10 rounded-xl bg-[#224292]/5 flex items-center justify-center text-[#224292]">
                <Send size={18} />
              </div>
            </div>

            {formSubmitted ? (
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="p-8 rounded-xl bg-emerald-50 border border-emerald-200 text-center space-y-3 my-6"
              >
                <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                  <CheckCircle2 size={24} />
                </div>
                <h4 className="text-lg font-bold text-emerald-900">Message Sent Successfully!</h4>
                <p className="text-xs text-emerald-700 max-w-md mx-auto">
                  Thank you for reaching out to KIOT Salem. Our team will get back to you shortly.
                </p>
              </motion.div>
            ) : (
              <form onSubmit={handleFormSubmit} className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-[#224292] uppercase tracking-wider mb-2">Your Full Name *</label>
                    <div className="relative">
                      <User size={16} className="absolute left-3.5 top-3.5 text-slate-400" />
                      <input 
                        type="text" 
                        required
                        placeholder="e.g. Rahul Sharma"
                        className="w-full pl-10 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm font-semibold text-[#224292] placeholder:text-slate-400 focus:outline-none focus:border-[#224292] focus:bg-white transition-all"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-[#224292] uppercase tracking-wider mb-2">Email Address *</label>
                    <div className="relative">
                      <AtSign size={16} className="absolute left-3.5 top-3.5 text-slate-400" />
                      <input 
                        type="email" 
                        required
                        placeholder="rahul@example.com"
                        className="w-full pl-10 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm font-semibold text-[#224292] placeholder:text-slate-400 focus:outline-none focus:border-[#224292] focus:bg-white transition-all"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      />
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-[#224292] uppercase tracking-wider mb-2">Phone Number *</label>
                    <div className="relative">
                      <Phone size={16} className="absolute left-3.5 top-3.5 text-slate-400" />
                      <input 
                        type="tel" 
                        required
                        placeholder="+91 98765 43210"
                        className="w-full pl-10 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm font-semibold text-[#224292] placeholder:text-slate-400 focus:outline-none focus:border-[#224292] focus:bg-white transition-all"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-[#224292] uppercase tracking-wider mb-2">Enquiry Category</label>
                    <select 
                      className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm font-semibold text-[#224292] focus:outline-none focus:border-[#224292] focus:bg-white transition-all cursor-pointer"
                      value={formData.category}
                      onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                    >
                      <option value="Admissions">UG / PG Admissions</option>
                      <option value="Placement">Placement & Industry Drive</option>
                      <option value="Academic">Academic Department Query</option>
                      <option value="Hostel">Hostel & Accommodation</option>
                      <option value="General">General Campus Enquiry</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#224292] uppercase tracking-wider mb-2">Your Message *</label>
                  <textarea 
                    rows={4}
                    required
                    placeholder="Write your inquiry or question here..."
                    className="w-full p-4 bg-slate-50 border border-slate-200 rounded-xl text-sm font-semibold text-[#224292] placeholder:text-slate-400 focus:outline-none focus:border-[#224292] focus:bg-white transition-all resize-none"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  />
                </div>

                <button
                  type="submit"
                  disabled={submitting}
                  className="w-full py-4 bg-[#224292] hover:bg-[#ffc107] text-white hover:text-[#224292] font-black text-xs uppercase tracking-[0.2em] rounded-xl shadow-lg shadow-[#224292]/15 transition-all duration-300 flex items-center justify-center gap-2 group active:scale-[0.99]"
                >
                  {submitting ? (
                    <span>Sending Inquiry...</span>
                  ) : (
                    <>
                      <span>Submit Inquiry</span>
                      <Send size={14} className="group-hover:translate-x-1 transition-transform" />
                    </>
                  )}
                </button>
              </form>
            )}
          </div>

          {/* RIGHT: Campus Address & Live Map */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Address Card */}
            <div className="bg-white p-7 rounded-2xl border border-slate-200/90 shadow-xl shadow-slate-100 space-y-5">
              <div className="flex items-center gap-3 pb-4 border-b border-slate-100">
                <div className="w-10 h-10 rounded-xl bg-[#ffc107]/15 flex items-center justify-center text-[#224292]">
                  <MapPin size={22} className="text-[#224292]" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[#224292]">Campus Location</h3>
                  <span className="text-xs text-slate-500 font-semibold">Salem, Tamil Nadu</span>
                </div>
              </div>

              <div className="space-y-3 text-sm text-slate-700 font-medium">
                <p className="font-bold text-[#224292] text-base leading-snug">
                  Knowledge Institute of Technology (KIOT)
                </p>
                <p className="text-slate-600 leading-relaxed">
                  KIOT Campus, Kakapalayam (PO),<br />
                  Salem – 637 504, Tamil Nadu, India.
                </p>

                <div className="pt-2 flex items-center gap-3 text-xs font-semibold text-slate-500">
                  <Clock size={15} className="text-[#ffc107] shrink-0" />
                  <span>Office Hours: Mon – Sat (9:00 AM – 5:00 PM)</span>
                </div>
              </div>

              {/* Map Iframe */}
              <div className="w-full h-56 rounded-xl overflow-hidden border border-slate-200 bg-slate-100 relative shadow-inner">
                <iframe 
                  title="KIOT Salem Campus"
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
                className="group flex items-center justify-center gap-2.5 p-3.5 bg-[#ffc107] hover:bg-[#224292] text-[#224292] hover:text-white text-xs font-black uppercase tracking-widest rounded-xl transition-all shadow-md shadow-[#ffc107]/20 w-full"
              >
                <Navigation size={16} />
                <span>Get Directions on Google Maps</span>
              </a>
            </div>

          </div>

        </div>

        {/* SEARCHABLE DEPARTMENT & OFFICE DIRECTORY */}
        <div className="mt-16 bg-white p-7 lg:p-9 rounded-2xl border border-slate-200/90 shadow-xl shadow-slate-100">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8 pb-6 border-b border-slate-100">
            <div>
              <span className="text-[10px] font-black uppercase tracking-widest text-[#ffc107] block mb-1">Full Directory</span>
              <h3 className="text-2xl font-bold text-[#224292]">Department & Office Contacts</h3>
            </div>

            {/* Instant Filter Search */}
            <div className="relative w-full md:w-80">
              <Search size={16} className="absolute left-3.5 top-3.5 text-slate-400" />
              <input 
                type="text" 
                placeholder="Search department, HOD, hostel..."
                className="w-full pl-10 pr-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs font-semibold text-[#224292] placeholder:text-slate-400 focus:outline-none focus:border-[#224292] focus:bg-white transition-all"
                value={search}
                onChange={(e) => setSearch(e.target.value.toLowerCase())}
              />
            </div>
          </div>

          {/* Directory Accordions */}
          <div className="space-y-4">
            {categories.map((cat, idx) => {
              const filteredItems = cat.items.filter(item => 
                item.name.toLowerCase().includes(search) || 
                cat.title.toLowerCase().includes(search)
              )

              if (search && filteredItems.length === 0) return null

              return (
                <div 
                  key={idx} 
                  className="border border-slate-200/80 rounded-xl overflow-hidden bg-white shadow-sm"
                >
                  <button 
                    onClick={() => setOpenAccordion(openAccordion === idx ? null : idx)}
                    className="w-full flex items-center justify-between p-5 text-left bg-slate-50/60 hover:bg-[#224292]/5 transition-colors"
                  >
                    <span className="text-sm font-bold text-[#224292]">{cat.title} ({filteredItems.length})</span>
                    <ChevronDown size={18} className={`text-[#224292] transition-transform duration-300 ${openAccordion === idx || search ? 'rotate-180' : ''}`} />
                  </button>

                  <AnimatePresence>
                    {(openAccordion === idx || (search && filteredItems.length > 0)) && (
                      <motion.div
                        initial={{ height: 0 }}
                        animate={{ height: "auto" }}
                        exit={{ height: 0 }}
                        className="overflow-hidden border-t border-slate-200/60"
                      >
                        <div className="p-4 bg-white grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                          {filteredItems.map((item, i) => (
                            <div key={i} className="p-4 bg-slate-50/70 rounded-xl border border-slate-200/60 hover:border-[#224292]/30 hover:bg-white transition-all">
                              <p className="text-xs font-bold text-[#224292] mb-3">{item.name}</p>
                              <div className="space-y-1.5 text-[11px] font-semibold">
                                <a href={`tel:${item.phone.replace(/\s/g, '')}`} className="flex items-center gap-2 text-slate-600 hover:text-[#224292] transition-colors">
                                  <Phone size={13} className="text-[#ffc107] shrink-0" />
                                  <span>{item.phone}</span>
                                </a>
                                <a href={`mailto:${item.email}`} className="flex items-center gap-2 text-slate-600 hover:text-[#224292] transition-colors truncate">
                                  <Mail size={13} className="text-[#ffc107] shrink-0" />
                                  <span className="truncate">{item.email}</span>
                                </a>
                              </div>
                            </div>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              )
            })}
          </div>
        </div>

      </div>
    </section>
  )
}

export default Contact
