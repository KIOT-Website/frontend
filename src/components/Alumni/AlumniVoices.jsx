import React from 'react'
import { motion } from 'framer-motion'
import { Quote } from 'lucide-react'

const testimonials = [
  {
    quote: "KIOT transformed my journey from a student to a professional. The continuous technical training, coding practice, aptitude sessions, and placement support gave me the confidence to secure my dream career.",
    name: "Software Engineer",
    role: ""
  },
  {
    quote: "The industry-linked laboratories and practical learning environment at KIOT provided me with real-world exposure that significantly helped during interviews and in my professional career.",
    name: "Embedded Systems Engineer",
    role: ""
  },
  {
    quote: "Beyond academics, KIOT helped me build communication skills, leadership qualities, and problem-solving abilities. These experiences continue to help me grow in the corporate world.",
    name: "Senior Software Developer",
    role: ""
  },
  {
    quote: "Faculty members always encouraged innovation and innovation-based learning. The guidance received during internships and final-year projects played a crucial role in shaping my career.",
    name: "Design Engineer",
    role: ""
  },
  {
    quote: "KIOT's placement training is one of its strengths. The structured preparation in aptitude, programming, communication, and mock interviews helped me confidently face campus recruitment.",
    name: "Project Engineer",
    role: ""
  },
  {
    quote: "The multidisciplinary curriculum and exposure to emerging technologies prepared me to adapt quickly to industry requirements. KIOT gave me both knowledge and confidence.",
    name: "Business Analyst",
    role: ""
  },
  {
    quote: "The innovation ecosystem, incubation support, and entrepreneurial mindset encouraged at KIOT inspired me to build my own startup. The institution nurtures creativity and practical thinking.",
    name: "Entrepreneur",
    role: ""
  },
  {
    quote: "The opportunities to interact with industry experts, participate in technical clubs, and work on live projects made learning enjoyable and career-focused.",
    name: "Systems Engineer",
    role: ""
  }
]

const marqueeStyle = `
@keyframes marquee {
  0% { transform: translateX(0); }
  100% { transform: translateX(-50%); }
}
.animate-marquee {
  display: flex;
  width: max-content;
  animation: marquee 35s linear infinite;
}
.animate-marquee:hover {
  animation-play-state: paused;
}
`;

const AlumniVoices = () => {
  const doubleTestimonials = [...testimonials, ...testimonials];

  return (
    <section className="py-8 md:py-10 bg-white overflow-hidden">
      <style>{marqueeStyle}</style>
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        
        {/* Section Heading */}
        <div className="text-center mb-12">
          <h2 className="text-sm font-black text-[#ffc107] tracking-[0.4em] mb-4">Community Feedback</h2>
          <h3 className="text-4xl lg:text-5xl font-black text-[#224292] tracking-tighter">Alumni Voices</h3>
          <div className="mt-4 w-12 h-1.5 bg-[#ffc107] mx-auto rounded-full" />
        </div>

        {/* Marquee Wrapper */}
        <div className="relative w-full overflow-hidden py-4">
          {/* Fading gradient edges */}
          <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-white via-white/80 to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-white via-white/80 to-transparent z-10 pointer-events-none" />

          <div className="animate-marquee gap-8 md:gap-12 flex">
            {doubleTestimonials.map((item, idx) => (
              <div
                key={idx}
                className="relative w-[300px] md:w-[350px] p-5 md:p-6 bg-white border-[3px] border-[#224292] rounded-[2rem] rounded-bl-sm shadow-[10px_10px_0px_#ffc107] group flex-shrink-0"
              >
                {/* Top Quote Icon */}
                <div className="text-[#224292] mb-3">
                  <Quote size={32} fill="currentColor" stroke="none" />
                </div>

                {/* Content */}
                <div className="min-h-[100px] flex items-center mb-4">
                  <p className="text-black font-bold leading-relaxed font-graphik text-[13px]">
                    "{item.quote}"
                  </p>
                </div>

                {/* Footer Name with Line */}
                <div className="mt-5 flex flex-col gap-0.5">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-[2px] bg-[#ffc107]" />
                    <span className="text-[#224292] font-black text-[11px] tracking-tight">{item.name}</span>
                  </div>
                  {item.role && (
                    <span className="text-slate-400 font-bold text-[9px] uppercase tracking-wide pl-11">{item.role}</span>
                  )}
                </div>

                {/* Closing Quote Icon - bottom right */}
                <div className="absolute bottom-4 right-8 text-[#ffc107]">
                  <Quote size={60} fill="currentColor" stroke="none" className="opacity-40" />
                </div>

                {/* The Tail - speech bubble effect */}
                <div className="absolute -bottom-[28px] left-0 w-12 h-8">
                  <svg viewBox="0 0 100 100" className="w-full h-full text-[#224292]" preserveAspectRatio="none">
                    <path 
                      d="M0 0 L0 100 L100 0 Z" 
                      fill="#224292" 
                    />
                  </svg>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}

export default AlumniVoices
