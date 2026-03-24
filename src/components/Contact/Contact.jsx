import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Phone, Mail, MessageCircle, Search, ChevronDown, MapPin, Navigation, Send, User, AtSign, PhoneIncoming, GraduationCap, Building2, TrendingUp } from 'lucide-react'

const priorityContacts = [
  {
    id: 'adm',
    title: "Admission Enquiries",
    phone: "98947 01234",
    email: "admissions@kiot.ac.in",
    isPriority: true,
    whatsapp: "https://wa.me/919894701234",
    icon: GraduationCap,
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
    <section className="relative py-20 lg:py-28 bg-[#FCFDFD] overflow-hidden" id="contact">
      
      {/* Background Decor */}
      <div className="absolute top-0 left-0 w-full h-[600px] bg-gradient-to-b from-[#18357a]/5 to-transparent -z-10" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-10">
        
        {/* HEADER */}
        <div className="max-w-3xl mb-16 lg:mb-24">
           <motion.div
             initial={{ opacity: 0, x: -10 }}
             whileInView={{ opacity: 1, x: 0 }}
             className="inline-flex items-center gap-2 mb-4 bg-[#18357a]/5 px-4 py-1.5 rounded-full border border-[#18357a]/10"
           >
             <div className="h-1.5 w-1.5 rounded-full bg-[#ffc107] animate-pulse" />
             <span className="text-[10px] font-black uppercase tracking-[0.3em] text-[#18357a]">Support Center</span>
           </motion.div>
           <h2 className="text-4xl lg:text-5xl font-black text-[#18357a] font-display mb-6">
             Get in Touch <span className="text-[#ffc107]">With Us</span>
           </h2>
           <p className="text-base lg:text-lg font-medium text-[#64779F] leading-relaxed max-w-xl">
             Whether you're an aspirant, a parent, or a hiring partner, reach the right department instantly. We're here to help you.
           </p>
        </div>

        {/* MAIN LAYOUT */}
        <div className="grid lg:grid-cols-[1.4fr_0.8fr] gap-12 items-start">
           
           {/* LEFT: CONTACT DIRECTORY */}
           <div className="space-y-8 lg:pr-10">
              
              {/* Directory Search */}
              <div className="relative group max-w-md">
                 <div className="absolute inset-0 bg-[#ffc107]/20 blur-xl opacity-0 group-focus-within:opacity-100 transition-opacity" />
                 <div className="relative flex items-center bg-white border border-[#D5E2F4] rounded-2xl w-full p-1 shadow-sm">
                    <div className="pl-4 pr-3 text-[#64779F]">
                       <Search size={18} />
                    </div>
                    <input 
                      type="text" 
                      placeholder="Search department, hostel, etc..."
                      className="bg-transparent border-none outline-none flex-1 py-3 text-sm font-bold text-[#18357a] placeholder:text-[#64779F]/40"
                      value={search}
                      onChange={(e) => setSearch(e.target.value.toLowerCase())}
                    />
                 </div>
              </div>

              {/* Priority Cards */}
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
                 {priorityContacts.filter(c => 
                   c.title.toLowerCase().includes(search) || 
                   c.desc.toLowerCase().includes(search)
                 ).map((c) => (
                   <motion.div
                     key={c.id}
                     layout
                     initial={{ opacity: 0, scale: 0.9 }}
                     animate={{ opacity: 1, scale: 1 }}
                     whileHover={{ y: -5 }}
                     className="bg-white p-6 rounded-[32px] shadow-[0_20px_40px_rgba(34,66,146,0.06)] border-2 border-transparent hover:border-[#ffc107]/30 transition-all flex flex-col justify-between"
                   >
                      <div>
                         <div className="h-12 w-12 rounded-2xl bg-[#18357a]/5 flex items-center justify-center text-[#ffc107] mb-5">
                           <c.icon size={24} />
                         </div>
                         <h4 className="text-lg font-black text-[#18357a] font-display mb-2">{c.title}</h4>
                         <p className="text-[10px] font-bold text-[#64779F] leading-relaxed mb-6 uppercase tracking-wider">{c.desc}</p>
                      </div>

                      <div className="space-y-3">
                         <a href={`tel:${c.phone.replace(/\s/g, '')}`} className="flex items-center gap-3 text-sm font-black text-[#18357a] group">
                           <Phone size={14} className="text-[#ffc107]" />
                           <span className="group-hover:translate-x-1 transition-transform">{c.phone}</span>
                         </a>
                         <a href={`mailto:${c.email}`} className="flex items-center gap-3 text-[11px] font-bold text-[#64779F] hover:text-[#18357a] transition-colors truncate">
                           <Mail size={14} className="text-[#ffc107]/40" />
                           {c.email}
                         </a>
                         {c.whatsapp && (
                           <a href={c.whatsapp} target="_blank" className="inline-flex items-center gap-2 mt-4 px-4 py-2 bg-green-50 text-green-700 rounded-full text-[10px] font-black uppercase tracking-widest hover:bg-green-100 transition-colors">
                              <MessageCircle size={14} />
                              Chat on WhatsApp
                           </a>
                         )}
                      </div>
                   </motion.div>
                 ))}
              </div>

              {/* Accordion Directory */}
              <div className="space-y-4">
                 {categories.map((cat, idx) => {
                   const filteredItems = cat.items.filter(item => 
                     item.name.toLowerCase().includes(search) || 
                     cat.title.toLowerCase().includes(search)
                   )

                   if (search && filteredItems.length === 0) return null

                   return (
                     <motion.div 
                       key={idx} 
                       layout
                       initial={{ opacity: 0 }}
                       animate={{ opacity: 1 }}
                       className="bg-white border border-[#D5E2F4] rounded-3xl overflow-hidden"
                     >
                        <button 
                          onClick={() => setOpenAccordion(openAccordion === idx ? null : idx)}
                          className="w-full flex items-center justify-between p-6 text-left hover:bg-[#18357a]/5 transition-colors"
                        >
                           <h5 className="text-sm font-black uppercase tracking-[0.2em] text-[#18357a]">{cat.title}</h5>
                           <ChevronDown size={20} className={`text-[#64779F] transition-transform duration-500 ${openAccordion === idx ? 'rotate-180' : ''}`} />
                        </button>
                        <AnimatePresence>
                           {(openAccordion === idx || (search && filteredItems.length > 0)) && (
                             <motion.div
                               initial={{ height: 0 }}
                               animate={{ height: "auto" }}
                               exit={{ height: 0 }}
                               className="overflow-hidden border-t border-[#D5E2F4]/60"
                             >
                                <div className="p-4 bg-[#FCFDFD] grid md:grid-cols-2 gap-2">
                                   {filteredItems.map((item, i) => (
                                     <div key={i} className="p-4 hover:bg-white rounded-2xl transition-all border border-transparent hover:border-[#D5E2F4]/60 hover:shadow-sm">
                                        <p className="text-[13px] font-black text-[#18357a] mb-2">{item.name}</p>
                                        <div className="flex flex-col gap-1.5">
                                           <a href={`tel:${item.phone}`} className="flex items-center gap-2 text-[11px] font-bold text-[#64779F] hover:text-[#18357a]">
                                              <Phone size={12} className="text-[#ffc107]" />
                                              {item.phone}
                                           </a>
                                           <a href={`mailto:${item.email}`} className="flex items-center gap-2 text-[11px] font-bold text-[#64779F] hover:text-[#18357a]">
                                              <Mail size={12} className="text-[#ffc107]/40" />
                                              {item.email}
                                           </a>
                                        </div>
                                     </div>
                                   ))}
                                </div>
                             </motion.div>
                           )}
                        </AnimatePresence>
                     </motion.div>
                   )
                 })}
              </div>

           </div>

           {/* RIGHT SIDE: ENQUIRY FORM */}
           <div className="sticky top-32">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                className="bg-[#18357a] p-8 lg:p-10 rounded-[40px] text-white shadow-2xl relative overflow-hidden"
              >
                 {/* Decor */}
                 <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
                 
                 <h3 className="text-2xl lg:text-3xl font-black font-display mb-2">Admission Enquiry</h3>
                 <p className="text-white/60 text-[11px] font-bold uppercase tracking-widest mb-8">Start your journey with KIOT</p>

                 <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                    <div className="space-y-1.5">
                       <label className="text-[10px] uppercase font-black tracking-widest text-[#ffc107]">Full Name</label>
                       <div className="relative">
                          <User size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-white/30" />
                          <input type="text" placeholder="John Doe" className="w-full bg-white/5 border border-white/10 rounded-2xl py-3.5 pl-12 pr-4 text-sm font-bold focus:border-[#ffc107] transition-all outline-none" />
                       </div>
                    </div>
                    
                    <div className="space-y-1.5">
                       <label className="text-[10px] uppercase font-black tracking-widest text-[#ffc107]">Phone Number</label>
                       <div className="relative">
                          <PhoneIncoming size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-white/30" />
                          <input type="tel" placeholder="+91 98765 43210" className="w-full bg-white/5 border border-white/10 rounded-2xl py-3.5 pl-12 pr-4 text-sm font-bold focus:border-[#ffc107] transition-all outline-none" />
                       </div>
                    </div>

                    <div className="space-y-1.5">
                       <label className="text-[10px] uppercase font-black tracking-widest text-[#ffc107]">Email Address</label>
                       <div className="relative">
                          <AtSign size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-white/30" />
                          <input type="email" placeholder="john@example.com" className="w-full bg-white/5 border border-white/10 rounded-2xl py-3.5 pl-12 pr-4 text-sm font-bold focus:border-[#ffc107] transition-all outline-none" />
                       </div>
                    </div>

                    <div className="space-y-1.5 pt-2">
                       <label className="text-[10px] uppercase font-black tracking-widest text-[#ffc107]">Program Interest</label>
                       <select className="w-full bg-white/5 border border-white/10 rounded-2xl py-3.5 px-4 text-sm font-bold focus:border-[#ffc107] transition-all outline-none appearance-none cursor-pointer">
                          <option className="text-slate-800">UG Engineering (B.E/B.Tech)</option>
                          <option className="text-slate-800">PG Engineering (M.E)</option>
                          <option className="text-slate-800">Management (MBA)</option>
                          <option className="text-slate-800">Applications (MCA)</option>
                       </select>
                    </div>

                    <div className="pt-6">
                       <button className="w-full relative group">
                          <div className="absolute inset-0 bg-[#ffc107] blur-lg opacity-40 group-hover:opacity-60 transition-opacity" />
                          <div className="relative flex items-center justify-center gap-3 bg-[#ffc107] hover:bg-white text-[#18357a] py-5 rounded-2xl font-black uppercase tracking-[0.2em] text-xs transition-colors">
                             Request a Call Back
                             <Send size={16} />
                          </div>
                       </button>
                    </div>
                 </form>
              </motion.div>
           </div>

        </div>

        {/* LOCATION SECTION */}
        <div className="mt-32">
           <div className="bg-white p-8 lg:p-12 rounded-[40px] border border-[#D5E2F4] flex flex-col lg:flex-row gap-12 items-center">
              <div className="flex-1 w-full h-[300px] rounded-[32px] overflow-hidden border border-[#D5E2F4]/60 shadow-inner bg-slate-100 relative">
                 <iframe 
                   title="KIOT Salem Campus"
                   src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3908.9691540888566!2d78.0190263!3d11.554069!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3babe40754d8480f%3A0x4bf024dfe3e621ec!2sKnowledge%20Institute%20of%20Technology%20(KIOT)!5e0!3m2!1sen!2sin!4v1774031087222!5m2!1sen!2sin" 
                   className="w-full h-full border-none"
                   allowFullScreen="" 
                   loading="lazy"
                   referrerPolicy="no-referrer-when-downgrade"
                 ></iframe>
              </div>
              <div className="lg:w-1/3 space-y-8">
                 <div className="space-y-4">
                    <div className="h-14 w-1 flex bg-[#ffc107] rounded-full" />
                    <h3 className="text-3xl font-black text-[#18357a] font-display">Campus Location</h3>
                    <div className="flex items-start gap-4">
                       <MapPin size={24} className="text-[#ffc107] shrink-0" />
                       <p className="text-sm lg:text-base font-bold text-[#64779F] leading-relaxed">
                          Knowledge Institute of Technology,<br />
                          KIOT Campus, Kakapalayam (PO),<br />
                          Salem - 637 504, Tamil Nadu, India.
                       </p>
                    </div>
                 </div>

                 <div className="flex flex-wrap gap-4 pt-4">
                    <a 
                      href="https://www.google.com/maps/dir/?api=1&destination=Knowledge+Institute+of+Technology+(KIOT),+Salem" 
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex items-center gap-2 px-6 py-3 bg-[#ffc107] text-[#18357a] hover:bg-white text-[11px] font-black uppercase tracking-widest rounded-xl transition-all shadow-lg shadow-[#ffc107]/20 border border-transparent hover:border-[#D5E2F4] hover:shadow-xl"
                    >
                       <Navigation size={16} className="text-[#18357a]" />
                       <span className="relative z-10">Get Directions</span>
                    </a>
                    <a 
                      href="https://www.google.com/maps/search/?api=1&query=Knowledge+Institute+of+Technology+(KIOT),+Salem" 
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-6 py-3 border border-[#D5E2F4] text-[#64779F] text-[11px] font-black uppercase tracking-widest rounded-xl bg-white hover:bg-[#18357a]/5 hover:text-[#18357a] transition-all"
                    >
                       Open in Maps
                    </a>
                 </div>
              </div>
           </div>
        </div>

      </div>

    </section>
  )
}

export default Contact
