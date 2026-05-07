import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Star, Mail, Phone, Calendar, User } from 'lucide-react'

// Assets
import studentImg from '../../assets/main/testi_student.webp'
import alumniImg from '../../assets/main/testi_alumni.webp'
import recruiterImg from '../../assets/main/testi_recruiter.webp'
import techMahindraLogo from '../../assets/main/tech mahendra.webp'
import itcLogo from '../../assets/main/itc.webp'
import tessolveLogo from '../../assets/main/tessolve.webp'
import kiotLogo from '../../assets/main/Kiot logo.webp'

const categories = ["Students", "Alumni", "Recruiters"]

const testimonialData = {
  Students: [
    {
      id: 1,
      name: "Sneha Reddy",
      dept: "Information Technology",
      quote: "The faculty support and hands-on lab sessions helped me transition from a beginner to an industry-ready developer in just four years.",
      email: "sneha.r@kiot.ac.in",
      image: studentImg,
      joined: "2021",
      expires: "2025"
    },
    {
      id: 2,
      name: "Karthik Raja",
      dept: "MCA 2025",
      quote: "Academic learning at KIOT is deeply rooted in practical application, giving us a competitive edge in every internship we pursue.",
      email: "karthik.k@kiot.ac.in",
      image: alumniImg,
      joined: "2023",
      expires: "2025"
    },
    {
      id: 3,
      name: "Priya Dharshini",
      dept: "Electrical & Electronics",
      quote: "The specialized training in embedded systems provided here gave me the confidence to excel in high-tech industrial projects.",
      email: "priya.d@kiot.ac.in",
      image: studentImg,
      joined: "2021",
      expires: "2025"
    },
    {
      id: 4,
      name: "Vijay Kumar",
      dept: "Mechanical Engineering",
      quote: "Participating in national level competitions through college clubs helped me develop leadership and teamwork skills early on.",
      email: "vijay.k@kiot.ac.in",
      image: alumniImg,
      joined: "2021",
      expires: "2025"
    }
  ],
  Alumni: [
    {
      id: 5,
      name: "Arun Kumar",
      dept: "CSE Class of 2024",
      quote: "The fundamentals I built during my final year projects at KIOT were crucial for my entry into Amazon as an SDE.",
      email: "arun.k@alumni.kiot.ac.in",
      image: alumniImg,
      joined: "2020",
      expires: "2024"
    },
    {
      id: 6,
      name: "Deepika S",
      dept: "ECE Class of 2023",
      quote: "KIOT's placement cell works tirelessly. Their guidance was instrumental in securing my position at Texas Instruments.",
      email: "deepika.s@alumni.kiot.ac.in",
      image: studentImg,
      joined: "2019",
      expires: "2023"
    },
    {
      id: 7,
      name: "Rajesh Kannan",
      dept: "Civil Class of 2022",
      quote: "The industry visits and site training provided at KIOT were far ahead of the standard curriculum, helping me land a top role.",
      email: "rajesh.k@alumni.kiot.ac.in",
      image: alumniImg,
      joined: "2018",
      expires: "2022"
    },
    {
      id: 8,
      name: "Meera Jasmine",
      dept: "BME Class of 2024",
      quote: "The interdisciplinary research culture at KIOT allowed me to work on innovative healthcare solutions that got published.",
      email: "meera.j@alumni.kiot.ac.in",
      image: studentImg,
      joined: "2020",
      expires: "2024"
    }
  ],
  Recruiters: [
    {
      id: 9,
      name: "Suresh Menon",
      dept: "HR Manager, TCS",
      quote: "Highly skilled and industry-ready graduates. We consistently find that KIOT students adapt faster to professional environments.",
      email: "suresh.m@tcs.com",
      image: recruiterImg,
      joined: "Partner Since 2018",
      expires: "Active"
    },
    {
      id: 10,
      name: "Lakshmi Narayanan",
      dept: "Talent Acquisition, ITC",
      quote: "The technical depth and problem-solving mindset of the candidates here is truly commendable year after year.",
      email: "lakshmi.n@itc.in",
      image: recruiterImg,
      joined: "Partner Since 2020",
      expires: "Active"
    },
    {
      id: 11,
      name: "Ramesh Babu",
      dept: "Tech Lead, Zoho",
      quote: "We've been recruiting from KIOT for years. The students possess a unique blend of technical curiosity and humility.",
      email: "ramesh.b@zoho.com",
      image: recruiterImg,
      joined: "Partner Since 2015",
      expires: "Active"
    },
    {
      id: 12,
      name: "Anjali Devi",
      dept: "Principal, Cognizant",
      quote: "The soft skills and communication abilities of KIOT graduates set them apart during our rigorous selection process.",
      email: "anjali.d@cts.com",
      image: recruiterImg,
      joined: "Partner Since 2019",
      expires: "Active"
    }
  ]
}

const Testimonials = () => {
  const [activeTab, setActiveTab] = useState("Students")

  return (
    <section className="relative py-16 lg:py-24 bg-[#FCFDFD] overflow-hidden">
      
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#224292]/5 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-10">
        
        {/* Section Header */}
        <div className="text-center mb-12 lg:mb-16">
           <h2 className="text-3xl lg:text-5xl font-semibold text-[#224292] font-graphik">
             Success Stories & <span className="text-[#ffc107]">Experiences</span>
           </h2>
        </div>

        {/* CATEGORY TABS */}
        <div className="flex justify-center mb-16 lg:mb-24">
           <div className="flex bg-[#224292]/5 p-1.5 rounded-2xl border border-[#D5E2F4]/40 w-fit max-w-full overflow-x-auto scrollbar-hide">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveTab(cat)}
                  className={`relative py-3 px-8 sm:px-12 text-[10px] sm:text-xs font-black uppercase tracking-[0.2em] transition-all rounded-xl whitespace-nowrap ${activeTab === cat ? 'text-[#224292]' : 'text-[#64779F] hover:text-[#224292]'}`}
                >
                  {cat}
                  {activeTab === cat && (
                    <motion.div 
                      layoutId="activeTestiTab" 
                      className="absolute inset-0 bg-white shadow-lg -z-10 rounded-xl border border-[#224292]/5" 
                      transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                    />
                  )}
                </button>
              ))}
           </div>
        </div>

        {/* TESTIMONIAL GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6 items-stretch max-w-[1400px] mx-auto px-4">
           <AnimatePresence mode="wait">
              {testimonialData[activeTab].map((testi, idx) => (
                <motion.div
                  key={testi.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="flex flex-col group relative h-full"
                >
                   {/* The ID Card */}
                   <div className="relative w-full max-w-[280px] mx-auto bg-white rounded-[1.2rem] shadow-[0_20px_50px_rgba(34,66,146,0.1)] border border-slate-200 overflow-hidden flex flex-col h-full transition-all duration-500 hover:scale-[1.02]">
                      
                      {/* Top Header */}
                      <div className="relative h-24 bg-[#224292] overflow-hidden shrink-0">
                         <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(255,255,255,0.1),transparent)]" />
                         <div className="absolute top-0 right-0 w-1/2 h-full bg-[#ffc107] skew-x-[-30deg] translate-x-24" />
                         
                         {/* Empty Header - Diagonal Style Only */}
                      </div>

                      {/* Profile Image */}
                      <div className="flex justify-center -mt-16 relative z-10 shrink-0">
                         <div className="w-24 h-24 rounded-full p-1 bg-white shadow-2xl">
                            <div className="w-full h-full rounded-full overflow-hidden bg-white border-4 border-white shadow-inner">
                               <img src={testi.image} alt={testi.name} className="w-full h-full object-cover" />
                            </div>
                         </div>
                      </div>

                      {/* Name & Designation */}
                      <div className="text-center mt-4 px-4 shrink-0">
                         <h4 className="text-xl font-black font-graphik text-[#224292] leading-tight">
                            {testi.name.split(' ').slice(0, -1).join(' ')} <span className="text-[#ffc107]">{testi.name.split(' ').slice(-1)}</span>
                         </h4>
                         <p className="text-[13px] font-black text-[#224292] uppercase tracking-[0.1em] mt-1 mb-4">
                            {testi.dept}
                         </p>
                      </div>

                      <div className="flex-1 flex flex-col px-4 mb-4">
                         <div className="p-3 bg-[#224292]/5 rounded-xl border border-[#224292]/10 text-center h-full flex items-center justify-center relative">
                            <p className="text-[12px] font-black text-black italic leading-relaxed">
                               "{testi.quote}"
                            </p>
                         </div>
                      </div>

                      {/* Bottom Triangle Decor */}
                      <div className="absolute bottom-0 right-0 w-16 h-16 bg-[#224292] skew-x-[-45deg] translate-x-10 translate-y-10 z-0 shrink-0" />
                   </div>
                </motion.div>
              ))}
           </AnimatePresence>
        </div>

      </div>

    </section>
  )
}

export default Testimonials
