import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Quote, Sparkles, Star, ChevronRight, UserCircle2, GraduationCap, Building2 } from 'lucide-react'

// Assets
import studentImg from '../../assets/testi_student.png'
import alumniImg from '../../assets/testi_alumni.png'
import recruiterImg from '../../assets/testi_recruiter.png'
import techMahindraLogo from '../../assets/tech mahendra.png'
import itcLogo from '../../assets/itc.png'
import tessolveLogo from '../../assets/tessolve.png'

const categories = ["Students", "Alumni", "Recruiters"]

const testimonialData = {
  Students: [
    {
      id: 1,
      name: "Sneha Reddy",
      dept: "Information Technology",
      quote: "The faculty support and hands-on lab sessions helped me transition from a beginner to an industry-ready developer in just four years.",
      outcome: "Placed at TCS with ₹5.5 LPA",
      image: studentImg,
      company: techMahindraLogo,
      tags: ["Student Experience", "Skill Development"]
    },
    {
      id: 2,
      name: "Karthik Raja",
      dept: "MCA 2025",
      quote: "Academic learning at KIOT is deeply rooted in practical application, giving us a competitive edge in every internship we pursue.",
      outcome: "Interned @ SAP Labs",
      image: alumniImg,
      company: tessolveLogo,
      tags: ["Practical Learning"]
    }
  ],
  Alumni: [
    {
      id: 3,
      name: "Arun Kumar",
      dept: "CSE Class of 2024",
      quote: "The fundamentals I built during my final year projects at KIOT were crucial for my entry into Amazon as an SDE.",
      outcome: "Software Development Engineer @ Amazon",
      image: alumniImg,
      company: techMahindraLogo,
      tags: ["Career Growth", "Global Impact"]
    }
  ],
  Recruiters: [
    {
      id: 4,
      name: "Suresh Menon",
      dept: "HR Manager, TCS",
      quote: "Highly skilled and industry-ready graduates. We consistently find that KIOT students adapt faster to professional environments.",
      outcome: "Trusted Strategic Hiring Partner",
      image: recruiterImg,
      company: techMahindraLogo,
      tags: ["Corporate Choice"]
    },
    {
      id: 5,
      name: "Lakshmi Narayanan",
      dept: "Talent Acquisition, ITC",
      quote: "The technical depth and problem-solving mindset of the candidates here is truly commendable year after year.",
      outcome: "Key Recruitment Campus",
      image: recruiterImg,
      company: itcLogo,
      tags: ["Industry Ready"]
    }
  ]
}

const Testimonials = () => {
  const [activeTab, setActiveTab] = useState("Students")

  return (
    <section className="relative py-12 lg:py-20 bg-[#FCFDFD] overflow-hidden">
      
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#18357a]/5 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-10">
        
        {/* Section Header */}
        <div className="text-center mb-16 lg:mb-24">
           <motion.div
             initial={{ opacity: 0, scale: 0.9 }}
             whileInView={{ opacity: 1, scale: 1 }}
             className="inline-flex items-center gap-2 mb-4 px-4 py-1.5 rounded-full bg-[#18357a]/5 border border-[#18357a]/10"
           >
             <Star size={14} className="text-[#ffc107] fill-[#ffc107]" />
             <span className="text-[10px] font-black uppercase tracking-[0.3em] text-[#18357a]">Voice of Success</span>
           </motion.div>
           <h2 className="text-3xl lg:text-5xl font-black text-[#18357a] font-display">
             Success Stories & <span className="text-[#ffc107]">Experiences</span>
           </h2>
        </div>

        {/* CATEGORY TABS (Option 2: Smart + Clean) */}
        <div className="flex justify-center mb-12 lg:mb-16">
           <div className="flex bg-[#18357a]/5 p-2 rounded-2xl border border-[#D5E2F4]/40 w-fit">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveTab(cat)}
                  className={`relative py-3.5 px-8 md:px-12 text-xs font-black uppercase tracking-[0.2em] transition-all rounded-xl ${activeTab === cat ? 'text-[#18357a]' : 'text-[#64779F] hover:text-[#18357a]'}`}
                >
                  {cat}
                  {activeTab === cat && (
                    <motion.div 
                      layoutId="activeTestiTab" 
                      className="absolute inset-0 bg-white shadow-xl -z-10 rounded-xl" 
                      transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                    />
                  )}
                </button>
              ))}
           </div>
        </div>

        {/* TESTIMONIAL GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 items-start max-w-5xl mx-auto">
           <AnimatePresence mode="wait">
              {testimonialData[activeTab].map((testi, idx) => (
                <motion.div
                  key={testi.id}
                  initial={{ opacity: 0, y: 20, rotateX: -10 }}
                  animate={{ opacity: 1, y: 0, rotateX: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="group relative bg-white p-6 lg:p-8 rounded-3xl shadow-[0_20px_50px_rgba(34,66,146,0.06)] border border-[#D5E2F4]/40 flex flex-col justify-between h-full"
                >
                   {/* Top Bar with Icon & Quote */}
                   <div className="flex items-start justify-between mb-6">
                      <div className="h-10 w-1 flex bg-[#ffc107] rounded-full group-hover:h-12 transition-all duration-500" />
                      <Quote size={36} className="text-[#18357a]/5 group-hover:text-[#ffc107]/20 transition-colors" />
                   </div>

                   {/* The Content */}
                   <div className="space-y-5">
                      <div className="flex flex-wrap gap-2">
                         {testi.tags.map(tag => (
                           <span key={tag} className="px-3 py-1 bg-[#18357a]/5 text-[9px] font-black uppercase tracking-[0.1em] text-[#18357a] rounded-full">
                              {tag}
                           </span>
                         ))}
                      </div>

                      <p className="text-base lg:text-lg font-bold text-[#18357a] leading-relaxed italic pr-4">
                        "{testi.quote}"
                      </p>

                      <div className="py-3 px-5 bg-[#18357a]/5 rounded-xl flex items-center justify-between group-hover:bg-[#ffc107]/10 transition-colors">
                         <div className="flex items-center gap-2">
                            <span className="text-[9px] font-black uppercase tracking-[0.1em] text-[#18357a]">Outcome:</span>
                            <span className="text-[11px] font-black text-[#18357a]">{testi.outcome}</span>
                         </div>
                         <img src={testi.company} alt="Logo" className="h-4 opacity-40 group-hover:opacity-100 transition-opacity grayscale group-hover:grayscale-0" />
                      </div>
                   </div>

                   {/* The Profile Part */}
                   <div className="mt-8 pt-6 border-t border-[#D5E2F4]/60 flex items-center gap-4">
                      <div className="h-14 w-14 lg:h-16 lg:w-16 rounded-full overflow-hidden border-4 border-[#18357a]/5 shadow-inner flex-shrink-0">
                         <img src={testi.image} alt={testi.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                      </div>
                      <div>
                         <h4 className="text-lg font-black text-[#18357a] font-display">{testi.name}</h4>
                         <p className="text-[10px] lg:text-xs font-bold text-[#64779F] uppercase tracking-[0.1em] mt-0.5">{testi.dept}</p>
                      </div>
                   </div>

                   {/* Subtle interactive hover light */}
                   <div className="absolute top-0 right-8 w-16 h-1 bg-[#ffc107] rounded-b-full scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
                </motion.div>
              ))}
           </AnimatePresence>
        </div>

        {/* View More Button */}
        <div className="mt-16 text-center">
           <button className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-[0.2em] text-[#64779F] hover:text-[#18357a] transition-colors group">
              Explore All Stories
              <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform" />
           </button>
        </div>

      </div>

    </section>
  )
}

export default Testimonials
