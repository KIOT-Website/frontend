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
          <h2 className="text-sm font-black text-[#ffc107] uppercase tracking-[0.4em] mb-4">Community Feedback</h2>
          <h3 className="text-4xl lg:text-5xl font-black text-[#18357a] tracking-tighter">Alumni Voices</h3>
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
              className="relative p-10 group"
            >
              {/* The Styled Card Background and Border */}
              <div className="absolute inset-x-4 top-0 bottom-12 bg-white border-[3px] border-black rounded-[2rem] rounded-bl-sm shadow-[10px_10px_0px_rgba(0,0,0,0.05)] -z-10" />
              
              {/* The Tail - carefully crafted to match the image */}
              <div className="absolute left-4 bottom-0 w-16 h-12 -z-10">
                <svg viewBox="0 0 100 100" className="w-full h-full text-black" preserveAspectRatio="none">
                  <path 
                    d="M0 0 V60 L50 100 L100 60 H0" 
                    fill="white" 
                    stroke="currentColor" 
                    strokeWidth="8" 
                  />
                </svg>
                {/* Visual fix for the join */}
                <div className="absolute top-0 left-[2px] right-[2px] h-2 bg-white" />
              </div>

              {/* Top Quote Icon */}
              <div className="text-black mb-6">
                <Quote size={50} fill="currentColor" stroke="none" className="opacity-90" />
              </div>

              {/* Title */}
              <h4 className="text-2xl font-black text-black mb-6 font-graphik">Testimonial</h4>

              {/* Content */}
              <div className="min-h-[140px]">
                <p className="text-black/80 font-medium leading-relaxed font-graphik text-base">
                  {item.quote}
                </p>
              </div>

              {/* Footer Name with Line */}
              <div className="mt-8 flex items-center gap-4">
                <div className="w-12 h-[2px] bg-[#ffc107]" />
                <span className="text-[#18357a] font-black uppercase text-sm tracking-tight">{item.name}</span>
              </div>

              {/* Closing Quote Icon - bottom right */}
              <div className="absolute bottom-4 right-8 text-black/90 rotate-180">
                <Quote size={60} fill="currentColor" stroke="none" className="opacity-90" />
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  )
}

export default AlumniVoices
