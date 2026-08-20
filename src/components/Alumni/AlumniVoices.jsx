import React from 'react'
import { motion } from 'framer-motion'
import { Quote } from 'lucide-react'

import { testimonialData, TestimonialCard } from '../Home/Testimonials'

const testimonials = testimonialData.Alumni;


const marqueeStyle = `
@keyframes marquee {
  0% { transform: translateX(0); }
  100% { transform: translateX(-50%); }
}
.animate-marquee {
  display: flex;
  width: max-content;
  animation-name: marquee;
  animation-timing-function: linear;
  animation-iteration-count: infinite;
}
.animate-marquee:hover {
  animation-play-state: paused;
}
`;

const AlumniVoices = () => {
  const doubleTestimonials = [...testimonials, ...testimonials];

  return (
    <section className="pt-2 pb-10 md:pt-4 md:pb-12 bg-white overflow-hidden">
      <style>{marqueeStyle}</style>
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        
        {/* Section Heading */}
        <div className="text-center mb-6 md:mb-8">
          <h3 className="text-3xl lg:text-5xl font-bold text-[#224292] font-graphik tracking-tight">
            Alumni <span className="text-[#ffc107]">Voices</span>
          </h3>
          <div className="mt-3 w-14 h-1 bg-[#ffc107] mx-auto rounded-full" />
        </div>

        {/* Marquee Wrapper */}
        <div className="relative w-full overflow-hidden py-4">
          {/* Fading gradient edges */}
          <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-white via-white/80 to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-white via-white/80 to-transparent z-10 pointer-events-none" />

          <div className="animate-marquee gap-8 md:gap-12 flex" style={{ animationDuration: `${testimonials.length * 8}s` }}>
            {doubleTestimonials.map((item, idx) => (
              <div
                key={idx}
                className="shrink-0 py-4 flex justify-center"
              >
                 <TestimonialCard testi={item} isTextOnly={false} />
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}

export default AlumniVoices
