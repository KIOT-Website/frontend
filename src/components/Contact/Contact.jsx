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
    <section className="relative py-12 lg:py-16 bg-[#FCFDFD] overflow-hidden" id="contact">
      
      {/* Background Decor */}
      <div className="absolute top-0 left-0 w-full h-[600px] bg-gradient-to-b from-[#224292]/5 to-transparent -z-10" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-10">
        
        {/* HEADER */}
        <div className="max-w-3xl mb-16 mx-auto text-center">
           <motion.div
             initial={{ opacity: 0, y: -10 }}
             whileInView={{ opacity: 1, y: 0 }}
             className="inline-flex items-center gap-2 mb-4 bg-[#224292]/5 px-4 py-1.5 rounded-full border border-[#224292]/10"
           >
             <div className="h-1.5 w-1.5 rounded-full bg-[#ffc107] animate-pulse" />
             <span className="text-[10px] font-semibold tracking-[0.1em] text-[#224292]">Support Center</span>
           </motion.div>
           <h2 className="text-4xl lg:text-5xl font-semibold text-[#224292] mb-6">
             Get in Touch <span className="text-[#ffc107]">With Us</span>
           </h2>
           <p className="text-base lg:text-lg font-medium text-[#64779F] leading-relaxed max-w-xl mx-auto">
             Whether you're an aspirant, a parent, or a hiring partner, reach the right department instantly. We're here to help you.
           </p>
        </div>

        {/* MAIN LAYOUT */}
        <div className="max-w-4xl mx-auto">
           
           {/* CENTERED: CONTACT DIRECTORY */}
           <div className="space-y-8">
              
              {/* Directory Search */}
              <div className="relative group max-w-md mx-auto">

                 <div className="relative flex items-center bg-white border border-[#D5E2F4] rounded-2xl w-full p-1 shadow-sm">
                    <div className="pl-4 pr-3 text-[#64779F]">
                       <Search size={18} />
                    </div>
                    <input 
                      type="text" 
                      placeholder="Search department, hostel, etc..."
                      className="bg-transparent border-none outline-none flex-1 py-3 text-sm font-bold text-[#224292] placeholder:text-[#64779F]/40"
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
                     className="bg-white p-6 rounded-2xl shadow-xl shadow-black/10 border-2 border-transparent hover:border-[#ffc107]/30 transition-all flex flex-col justify-between"
                   >
                      <div>
                         <div className="h-12 w-12 rounded-2xl bg-[#224292]/5 flex items-center justify-center text-[#ffc107] mb-5">
                           <c.icon size={24} />
                         </div>
                         <h4 className="text-lg font-semibold text-[#224292] mb-2">{c.title}</h4>
                         <p className="text-[10px] font-medium text-[#64779F] leading-relaxed mb-6 tracking-wide">{c.desc}</p>
                      </div>

                      <div className="space-y-3">
                         <a href={`tel:${c.phone.replace(/\s/g, '')}`} className="flex items-center gap-3 text-sm font-black text-[#224292] group">
                           <Phone size={14} className="text-[#ffc107]" />
                           <span className="group-hover:translate-x-1 transition-transform">{c.phone}</span>
                         </a>
                         <a href={`mailto:${c.email}`} className="flex items-center gap-3 text-[11px] font-bold text-[#64779F] hover:text-[#224292] transition-colors truncate">
                           <Mail size={14} className="text-[#ffc107]/40" />
                           {c.email}
                         </a>

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
                       className="bg-white border border-[#D5E2F4] rounded-xl overflow-hidden"
                     >
                        <button 
                          onClick={() => setOpenAccordion(openAccordion === idx ? null : idx)}
                          className="w-full flex items-center justify-between p-6 text-left hover:bg-[#224292]/5 transition-colors"
                        >
                           <h5 className="text-sm font-semibold tracking-wide text-[#224292]">{cat.title}</h5>
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
                                        <p className="text-[13px] font-semibold text-[#224292] mb-2">{item.name}</p>
                                        <div className="flex flex-col gap-1.5">
                                           <a href={`tel:${item.phone}`} className="flex items-center gap-2 text-[11px] font-bold text-[#64779F] hover:text-[#224292]">
                                              <Phone size={12} className="text-[#ffc107]" />
                                              {item.phone}
                                           </a>
                                           <a href={`mailto:${item.email}`} className="flex items-center gap-2 text-[11px] font-bold text-[#64779F] hover:text-[#224292]">
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



        </div>

        {/* LOCATION SECTION */}
        <div className="mt-16">
           <div className="bg-white p-8 lg:p-12 rounded-2xl border border-[#D5E2F4] shadow-xl shadow-black/5 flex flex-col lg:flex-row gap-12 items-center">
              <div className="flex-1 w-full h-[300px] rounded-xl overflow-hidden border border-[#D5E2F4]/60 shadow-inner bg-slate-100 relative">
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
                    <h3 className="text-3xl font-semibold text-[#224292]">Find Us on Campus</h3>
                    <div className="flex items-start gap-4">
                       <MapPin size={24} className="text-[#ffc107] shrink-0" />
                       <p className="text-sm lg:text-base font-bold text-black leading-relaxed">
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
                      className="group flex items-center gap-2 px-6 py-3 bg-[#ffc107] text-[#224292] hover:bg-white text-[11px] font-black uppercase tracking-widest rounded-xl transition-all shadow-lg shadow-[#ffc107]/20 border border-transparent hover:border-[#D5E2F4] hover:shadow-xl"
                    >
                       <Navigation size={16} className="text-[#224292]" />
                       <span className="relative z-10">Get Directions</span>
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
