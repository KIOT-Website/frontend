import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

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
      name: "Software Engineer",
      dept: "",
      quote: "KIOT transformed my journey from a student to a professional. The continuous technical training, coding practice, aptitude sessions, and placement support gave me the confidence to secure my dream career."
    },
    {
      id: 6,
      name: "Embedded Systems Engineer",
      dept: "",
      quote: "The industry-linked laboratories and practical learning environment at KIOT provided me with real-world exposure that significantly helped during interviews and in my professional career."
    },
    {
      id: 7,
      name: "Senior Software Developer",
      dept: "",
      quote: "Beyond academics, KIOT helped me build communication skills, leadership qualities, and problem-solving abilities. These experiences continue to help me grow in the corporate world."
    },
    {
      id: 8,
      name: "Design Engineer",
      dept: "",
      quote: "Faculty members always encouraged innovation and innovation-based learning. The guidance received during internships and final-year projects played a crucial role in shaping my career."
    },
    {
      id: 17,
      name: "Project Engineer",
      dept: "",
      quote: "KIOT's placement training is one of its strengths. The structured preparation in aptitude, programming, communication, and mock interviews helped me confidently face campus recruitment."
    },
    {
      id: 18,
      name: "Business Analyst",
      dept: "",
      quote: "The multidisciplinary curriculum and exposure to emerging technologies prepared me to adapt quickly to industry requirements. KIOT gave me both knowledge and confidence."
    },
    {
      id: 19,
      name: "Entrepreneur",
      dept: "",
      quote: "The innovation ecosystem, incubation support, and entrepreneurial mindset encouraged at KIOT inspired me to build my own startup. The institution nurtures creativity and practical thinking."
    },
    {
      id: 20,
      name: "Systems Engineer",
      dept: "",
      quote: "The opportunities to interact with industry experts, participate in technical clubs, and work on live projects made learning enjoyable and career-focused."
    }
  ],
  Recruiters: [
    {
      id: 9,
      name: "Puritha Nagarajan",
      dept: "Head – Talent Acquisition, Zuci Systems, Chennai",
      quote: "KIOT students consistently demonstrate excellent professionalism, a positive attitude, and strong industry readiness. The Placement & Industry Relations team ensures seamless coordination throughout the recruitment process, making KIOT a reliable and preferred academic partner for campus hiring."
    },
    {
      id: 10,
      name: "Ramji Murthy",
      dept: "Regional Head – Academic Alliances, Tata Consultancy Services (TCS)",
      quote: "KIOT stands apart through its strong institutional values, visionary leadership, and unwavering commitment to nurturing future-ready professionals. The institution provides an excellent ecosystem that bridges academic excellence with industry expectations."
    },
    {
      id: 11,
      name: "K. Balaji",
      dept: "Vice President – Talent Acquisition, Creative Synergies Group",
      quote: "The visionary leadership, industry-driven Centres of Excellence, state-of-the-art infrastructure, and strong emphasis on communication and employability skills together create a vibrant learning ecosystem. KIOT is preparing graduates who are truly ready for the future of engineering and technology."
    },
    {
      id: 12,
      name: "Saravana Manikandan S.",
      dept: "Senior Program Manager, Intelsat",
      quote: "KIOT is an inspiring institution built upon strong core values, academic excellence, and visionary leadership. Its focus on innovation, discipline, and holistic student development equips graduates to excel in the global technology landscape."
    },
    {
      id: 13,
      name: "Prof. Dr. Goh Khang Wen",
      dept: "Pro Vice Chancellor, INTI International University, Malaysia",
      quote: "KIOT demonstrates excellence through its outstanding placement achievements, experienced faculty, student-centric curriculum, and strong industry engagement. The institution is creating globally competent graduates equipped for lifelong success."
    },
    {
      id: 14,
      name: "S. Venkatachalam Ramakrishnan",
      dept: "Head – Services, Prodapt",
      quote: "The enthusiasm, commitment, and engagement demonstrated by both students and faculty members are truly commendable. KIOT has cultivated a collaborative academic environment that encourages continuous learning, innovation, and professional growth."
    },
    {
      id: 15,
      name: "S. Shaneshkumar",
      dept: "Vice President – Engineering, HCLTech",
      quote: "KIOT reflects energetic leadership, strategic vision, and a strong commitment to continuous improvement. The institution's industry-focused approach and emphasis on emerging technologies prepare students to thrive in a rapidly evolving global workforce."
    },
    {
      id: 16,
      name: "Dinesh Kumar T.K.",
      dept: "Head – Human Resources, Aspire Systems",
      quote: "KIOT students possess sound technical knowledge, practical problem-solving abilities, and a strong willingness to learn. Their industry exposure, professional attitude, and adaptability enable them to contribute effectively from the very beginning of their careers."
    }
  ]
}

const TestimonialCard = ({ testi }) => {
  const isTextOnly = !testi.image;
  return (
    <div className="relative w-full max-w-[280px] mx-auto bg-white rounded-[1.2rem] shadow-[0_20px_50px_rgba(34,66,146,0.1)] border border-slate-200 overflow-hidden flex flex-col h-full transition-all duration-500 hover:scale-[1.02]">
      
      {/* Top Header */}
      {isTextOnly ? (
        <div className="relative h-2 bg-[#224292] overflow-hidden shrink-0">
            <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(255,255,255,0.1),transparent)]" />
            <div className="absolute top-0 right-0 w-8 h-full bg-[#ffc107] skew-x-[-30deg] translate-x-4" />
        </div>
      ) : (
        <div className="relative h-24 bg-[#224292] overflow-hidden shrink-0">
            <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(255,255,255,0.1),transparent)]" />
            <div className="absolute top-0 right-0 w-1/2 h-full bg-[#ffc107] skew-x-[-30deg] translate-x-24" />
        </div>
      )}

      {/* Profile Image */}
      {testi.image ? (
        <div className="flex justify-center -mt-16 relative z-10 shrink-0">
            <div className="w-24 h-24 rounded-full p-1 bg-white shadow-2xl">
              <div className="w-full h-full rounded-full overflow-hidden bg-white border-4 border-white shadow-inner">
                  <img src={testi.image} alt={testi.name} className="w-full h-full object-cover" />
              </div>
            </div>
        </div>
      ) : (
        <div className="h-6 shrink-0" />
      )}

      {/* Name & Designation */}
      <div className={`text-center px-4 shrink-0 ${testi.image ? 'mt-4' : 'mt-2'}`}>
          {isTextOnly ? (
            <h4 className="text-[13px] lg:text-[14px] font-black font-graphik text-[#224292] leading-tight mb-2">
              {testi.name}
            </h4>
          ) : (
            <h4 className="text-lg lg:text-xl font-semibold font-graphik text-[#224292] leading-tight">
              {testi.name.split(' ').slice(0, -1).join(' ')} <span className="text-[#ffc107]">{testi.name.split(' ').slice(-1)}</span>
            </h4>
          )}
          {testi.dept ? (
            <p className="text-[10px] lg:text-[11px] font-bold text-[#224292] uppercase tracking-[0.05em] mt-1 mb-4">
              {testi.dept}
            </p>
          ) : null}
      </div>

      <div className="flex-1 flex flex-col px-4 mb-4">
          <div className="p-3 bg-[#224292]/5 rounded-xl border border-[#224292]/10 text-center h-full flex items-center justify-center relative">
            <p className="text-[12px] font-black text-black italic leading-relaxed">
                "{testi.quote}"
            </p>
          </div>
      </div>

      {/* Bottom Triangle Decor */}
      {!isTextOnly && (
        <div className="absolute bottom-0 right-0 w-16 h-16 bg-[#224292] skew-x-[-45deg] translate-x-10 translate-y-10 z-0 shrink-0" />
      )}
    </div>
  );
};

const Testimonials = () => {
  const [activeTab, setActiveTab] = useState("Students")
  const [activeCardIndex, setActiveCardIndex] = useState(0)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768)
    }
    handleResize()
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  useEffect(() => {
    setActiveCardIndex(0)
  }, [activeTab])

  useEffect(() => {
    if (isMobile) {
      const timer = setTimeout(() => {
        setActiveCardIndex((prevIndex) => {
          const listLength = testimonialData[activeTab].length
          return (prevIndex + 1) % listLength
        })
      }, 4000)
      return () => clearTimeout(timer)
    } else {
      const timer = setTimeout(() => {
        setActiveTab((prevTab) => {
          const currentIndex = categories.indexOf(prevTab)
          const nextIndex = (currentIndex + 1) % categories.length
          return categories[nextIndex]
        })
      }, 6000)
      return () => clearTimeout(timer)
    }
  }, [activeTab, activeCardIndex, isMobile])

  return (
    <section className="relative py-8 lg:py-12 bg-[#FCFDFD] overflow-hidden">
      
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#224292]/5 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-10">
        
        {/* Section Header */}
        <div className="text-center mb-8 lg:mb-10">
           <h2 className="text-3xl lg:text-5xl font-semibold text-[#224292] font-graphik">
             Success Stories & <span className="text-[#ffc107]">Experiences</span>
           </h2>
        </div>

        {/* CATEGORY TABS */}
        <div className="flex justify-center mb-10 lg:mb-12">
           <div className="flex flex-col md:flex-row bg-[#224292]/5 p-2 md:p-1.5 rounded-2xl border border-[#D5E2F4]/40 w-full max-w-[280px] md:w-fit md:max-w-full space-y-1 md:space-y-0 overflow-x-auto scrollbar-hide">
              {categories.map((cat) => {
                const isActive = activeTab === cat;
                return (
                  <button
                    key={cat}
                    onClick={() => setActiveTab(cat)}
                    className={`relative w-full md:w-auto py-3.5 md:py-3 px-8 sm:px-12 text-xs sm:text-sm font-extrabold normal-case tracking-wider transition-all rounded-xl whitespace-nowrap text-center ${
                      isActive 
                        ? 'bg-[#224292] text-white md:bg-transparent md:text-[#224292] shadow-md md:shadow-none' 
                        : 'text-[#224292] md:text-[#64779F] hover:text-[#224292] bg-transparent'
                    }`}
                  >
                    {cat}
                    {isActive && (
                      <motion.div 
                        layoutId="activeTestiTab" 
                        className="hidden md:block absolute inset-0 bg-white shadow-lg -z-10 rounded-xl border border-[#224292]/5" 
                        transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                      />
                    )}
                  </button>
                )
              })}
           </div>
        </div>

        {/* TESTIMONIAL DISPLAY (MARQUEE OR MOBILE SLIDER) */}
        <div className="relative w-full overflow-hidden py-4">
          {isMobile ? (
            <div className="flex flex-col items-center gap-4">
              <div className="relative w-full max-w-[280px] mx-auto min-h-[340px] flex items-center justify-center">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={`${activeTab}-${activeCardIndex}`}
                    initial={{ opacity: 0, x: 80 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -80 }}
                    transition={{ duration: 0.4, ease: "easeInOut" }}
                    className="w-full"
                  >
                    <TestimonialCard testi={testimonialData[activeTab][activeCardIndex]} />
                  </motion.div>
                </AnimatePresence>
              </div>
              
              {/* Pagination Dots */}
              <div className="flex items-center gap-2 mt-2">
                {testimonialData[activeTab].map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveCardIndex(idx)}
                    className={`h-2 rounded-full transition-all duration-300 ${
                      activeCardIndex === idx 
                        ? 'w-6 bg-[#224292]' 
                        : 'w-2 bg-[#224292]/20 hover:bg-[#224292]/40'
                    }`}
                    aria-label={`Go to slide ${idx + 1}`}
                  />
                ))}
              </div>
            </div>
          ) : (
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className="flex"
              >
                 {/* Infinite Running Track */}
                 <div className="animate-marquee gap-8 py-2">
                    {/* Set 1 */}
                    {testimonialData[activeTab].map((testi) => (
                      <div
                        key={`set1-${testi.id}`}
                        className="w-[280px] md:w-[320px] shrink-0"
                      >
                         <TestimonialCard testi={testi} />
                      </div>
                    ))}
                    {/* Set 2 */}
                    {testimonialData[activeTab].map((testi) => (
                      <div
                        key={`set2-${testi.id}`}
                        className="w-[280px] md:w-[320px] shrink-0"
                      >
                         <TestimonialCard testi={testi} />
                      </div>
                    ))}
                 </div>
              </motion.div>
            </AnimatePresence>
          )}
        </div>

      </div>

    </section>
  )
}

export default Testimonials
