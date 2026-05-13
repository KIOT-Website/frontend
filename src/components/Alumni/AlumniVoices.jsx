import React from 'react'
import { motion } from 'framer-motion'
import { Quote } from 'lucide-react'

const testimonials = [
  {
    quote: "KIOT provided the foundation for my career as a Lead Engineer at Google. The faculty and community remain family.",
    name: "Rajesh Kumar",
    batch: "Class of 2015",
    role: "Senior Software Engineer"
  },
  {
    quote: "The Alumni network helped me secure my first internship at Microsoft. Once KIOT, Always KIOT is not just a slogan, it's a reality.",
    name: "Sneha S.",
    batch: "Class of 2018",
    role: "Product Manager"
  },
  {
    quote: "Leading a startup wouldn't be possible without the mentorship I received here. Grateful to be part of this legacy.",
    name: "Arun Vignesh",
    batch: "Class of 2014",
    role: "Founder, TechFlow"
  }
]

const AlumniVoices = () => {
  return (
    <section className="py-8 md:py-10 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        
        {/* Section Heading */}
        <div className="text-center mb-20">
          <h2 className="text-sm font-black text-[#ffc107] tracking-[0.4em] mb-4">Community Feedback</h2>
          <h3 className="text-4xl lg:text-5xl font-black text-[#224292] tracking-tighter">Alumni Voices</h3>
          <div className="mt-4 w-12 h-1.5 bg-[#ffc107] mx-auto rounded-full" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16">
          {testimonials.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="relative p-6 md:p-8 bg-white border-[3px] border-[#224292] rounded-[2rem] rounded-bl-sm shadow-[10px_10px_0px_#ffc107] group transition-all hover:-translate-y-1 hover:shadow-[15px_15px_0px_#ffc107]"
            >
              {/* Top Quote Icon */}
              <div className="text-[#224292] mb-4">
                <Quote size={40} fill="currentColor" stroke="none" />
              </div>

              {/* Title */}
              <h4 className="text-xl font-black text-[#224292] mb-4 font-graphik">Testimonial</h4>

              {/* Content */}
              <div className="min-h-[100px]">
                <p className="text-black font-bold leading-relaxed font-graphik text-[13.5px]">
                  {item.quote}
                </p>
              </div>

              {/* Footer Name with Line */}
              <div className="mt-6 flex items-center gap-3">
                <div className="w-10 h-[3px] bg-[#ffc107]" />
                <span className="text-[#224292] font-black text-xs tracking-tight">{item.name}</span>
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
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  )
}

export default AlumniVoices
