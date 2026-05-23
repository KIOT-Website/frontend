import { motion } from 'framer-motion'
import srinivasanImg from '../assets/main/srinivasan.webp'
import principalImg from '../assets/main/KIOT-Principal-Message-Web-2025.webp'
import { Quote, GraduationCap, Award, Sparkles } from 'lucide-react'

export default function HeadOfDepartmentPage() {
  return (
    <div className="min-h-screen bg-[#F8FAFC] font-graphik pt-10 pb-20 selection:bg-[#ffc107]/20 relative overflow-hidden">
      {/* Decorative Page Background Elements */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-to-bl from-[#224292]/3 via-transparent to-transparent rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-[20%] left-[-100px] w-[400px] h-[400px] bg-[#ffc107]/2 rounded-full blur-[80px] pointer-events-none" />
      
      {/* Subtle Grid Overlay */}
      <div className="absolute inset-0 opacity-[0.015] pointer-events-none" 
           style={{ backgroundImage: 'radial-gradient(#224292 0.5px, transparent 0.5px)', backgroundSize: '35px 35px' }} />

      <div className="max-w-5xl mx-auto px-6 lg:px-8 space-y-12 relative z-10">
        
        {/* Page Hero Header */}
        <motion.div 
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto space-y-3 mb-6"
        >
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-graphik font-semibold text-[#224292] mb-4 tracking-tighter leading-tight">
            Institutional <span className="text-[#ffc107]">Leadership</span>
          </h1>

          <div className="flex items-center justify-center gap-2 mb-6 md:mb-8">
            <div className="w-12 h-[1px] bg-[#ffc107]" />
            <div className="w-2 h-2 rounded-full bg-[#ffc107]" />
            <div className="w-12 h-[1px] bg-[#ffc107]" />
          </div>

          <p className="text-sm md:text-[15px] text-slate-500 leading-relaxed max-w-2xl mx-auto font-normal">
            Meet the distinguished visionaries driving academic excellence, administrative rigour, and future-focused professional development at the Knowledge Institute of Technology.
          </p>
        </motion.div>

        {/* 1. Executive Chairman: Dr. PSS. Srinivasan */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-white rounded-2xl shadow-[0_15px_40px_rgba(34,66,146,0.04)] border border-slate-100 p-6 lg:p-10 relative overflow-hidden group/card hover:shadow-[0_20px_50px_rgba(34,66,146,0.06)] transition-all duration-500"
        >
          {/* Decorative Corner Accent */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-[#ffc107]/3 rounded-bl-full pointer-events-none" />
          
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Left Column: Image with premium design */}
            <div className="lg:col-span-5 flex justify-center relative">
              <div className="relative group/img flex items-center justify-center p-2">
                {/* Dashed outer rings rotating on hover */}
                <div className="absolute w-56 h-56 rounded-full border border-dashed border-[#ffc107]/30 group-hover/img:rotate-45 transition-transform duration-1000 pointer-events-none" />
                <div className="absolute w-50 h-50 rounded-full border border-dashed border-[#224292]/15 group-hover/img:-rotate-45 transition-transform duration-1000 pointer-events-none" />
                
                {/* Glow behind image */}
                <div className="absolute w-44 h-44 rounded-full bg-gradient-to-tr from-[#224292]/5 to-[#ffc107]/5 blur-lg pointer-events-none" />
                
                {/* Main image container */}
                <div className="relative w-44 h-44 md:w-48 md:h-48 rounded-full p-2 bg-gradient-to-tr from-[#ffc107] to-[#e0a800] shadow-[0_15px_35px_rgba(0,0,0,0.1)] z-10 overflow-hidden group-hover/img:scale-[1.02] transition-transform duration-500">
                  <div className="w-full h-full rounded-full overflow-hidden bg-white border-2 border-white shadow-inner">
                    <img 
                      src={srinivasanImg} 
                      alt="Dr. P.S.S. Srinivasan" 
                      className="w-full h-full object-cover transition-transform duration-700 group-hover/img:scale-105"
                    />
                  </div>
                </div>
                
                {/* Floating Role Pill */}
                <div className="absolute -bottom-1 z-20 bg-gradient-to-r from-[#224292] to-[#1e3a8a] text-white px-4 py-2 rounded-full border-2 border-white shadow-md text-[9px] font-black uppercase tracking-[0.1em] flex items-center gap-1.5 whitespace-nowrap">
                  <Sparkles className="w-3 h-3 text-[#ffc107]" />
                  Executive Chairman
                </div>
              </div>
            </div>

            {/* Right Column: Text & Content */}
            <div className="lg:col-span-7 space-y-4 flex flex-col justify-center text-left">
              <div>
                <h2 className="text-2xl md:text-3xl font-semibold text-[#224292] tracking-tight">
                  Dr. PSS. Srinivasan
                </h2>
                <p className="text-xs font-bold text-black mt-1 uppercase tracking-wider leading-relaxed">
                  Founder & President <span className="text-[#ffc107] font-black">|</span> B.E., M.Tech. (IIT-B), Ph.D., MISTE., ISHMT., FMFPI.
                </p>
              </div>

              {/* Styled Welcome Header */}
              <h3 className="text-lg md:text-xl font-semibold text-[#224292] tracking-tight leading-snug">
                Welcome to the <span className="text-[#ffc107]">Trend Setters’ Paradise</span>
              </h3>

              {/* Quote Card */}
              <div className="relative bg-gradient-to-r from-[#ffc107]/5 to-transparent p-4 rounded-xl border-l-4 border-[#ffc107] text-left">
                <Quote className="absolute top-1.5 right-3 w-10 h-10 text-[#ffc107]/8 rotate-180" />
                <p className="text-black font-semibold text-[13.5px] sm:text-[14.5px] leading-relaxed italic relative z-10">
                  "God has created the earth, you and me create a heaven on it. Every individual has innate talents. It is only our attitude that decides outcome."
                </p>
              </div>

              {/* Message Description */}
              <div className="text-slate-700 text-[13.5px] sm:text-[14px] leading-relaxed text-justify space-y-3 font-normal">
                <p>
                  Yes, we at KIOT have got rich experience on Engineering Education in India and abroad. We know the art of identifying individual talents, nurture them as talented engineers and professionals and make them world class professionals. If you are prepared to be a path breaking professionals poised to make miracles on the earth, the right destination is KIOT. Learn from the masters who know nothing less than excellence. Come on; let us all make a happy heaven on the earth.
                </p>
              </div>

              {/* Sign-off Details */}
              <div className="pt-3 border-t border-slate-100 flex flex-col items-start">
                <span className="text-[#224292] font-semibold italic text-[13px]">With love and affection,</span>
                <span className="font-bold text-[#224292] text-sm mt-0.5">Dr. PSS. Srinivasan</span>
              </div>
            </div>

          </div>
        </motion.div>

        {/* 2. Principal: Dr. K. Visagavel */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-white rounded-2xl shadow-[0_15px_40px_rgba(34,66,146,0.04)] border border-slate-100 p-6 lg:p-10 relative overflow-hidden group/card hover:shadow-[0_20px_50px_rgba(34,66,146,0.06)] transition-all duration-500"
        >
          {/* Decorative Corner Accent */}
          <div className="absolute top-0 left-0 w-32 h-32 bg-[#224292]/3 rounded-br-full pointer-events-none" />
          
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Left Column: Text & Content (desktop ordered first) */}
            <div className="lg:col-span-7 lg:order-1 order-2 space-y-4 flex flex-col justify-center text-left">
              <div>
                <h2 className="text-2xl md:text-3xl font-semibold text-[#224292] tracking-tight">
                  Dr. K. Visagavel
                </h2>
                <p className="text-xs font-bold text-black mt-1 uppercase tracking-wider leading-relaxed">
                  Principal <span className="text-[#ffc107] font-black">|</span> B.E., M.E., Ph.D.
                </p>
              </div>

              {/* Styled Welcome Header */}
              <h3 className="text-lg md:text-xl font-semibold text-[#224292] tracking-tight leading-snug">
                Shaping the <span className="text-[#ffc107]">Leaders of Tomorrow</span>
              </h3>

              {/* Quote Card */}
              <div className="relative bg-gradient-to-r from-[#224292]/4 to-transparent p-4 rounded-xl border-l-4 border-[#224292] text-left">
                <Quote className="absolute top-1.5 right-3 w-10 h-10 text-[#224292]/8 rotate-180" />
                <p className="text-black font-semibold text-[13.5px] sm:text-[14.5px] leading-relaxed italic relative z-10">
                  "Your journey at KIOT is not just about earning a degree; it is about transforming your potential into purpose."
                </p>
              </div>

              {/* Message Description */}
              <div className="text-slate-700 text-[13.5px] sm:text-[14px] leading-relaxed text-justify space-y-3 font-normal">
                <p>
                  Dear Students, Welcome to the Knowledge Institute of Technology, Salem! At KIOT, we aim to provide a transformative education that blends academic rigor with practical skills to shape the leaders of tomorrow.
                </p>
                <p>
                  We are committed to fostering a holistic learning environment, enriched by state-of-the-art infrastructure, industry collaborations, and extracurricular opportunities. I encourage you to actively participate in academic and co-curricular activities, network with peers and mentors, and embrace the culture of continuous learning.
                </p>
                <p>
                  Together, let us strive to make a positive difference in our communities and the world. Wishing you a fulfilling and successful academic journey ahead!
                </p>
              </div>

              {/* Sign-off Details */}
              <div className="pt-3 border-t border-slate-100 flex flex-col items-start">
                <span className="text-[#224292] font-semibold italic text-[13px]">Warm Regards,</span>
                <span className="font-bold text-[#224292] text-sm mt-0.5">Dr. K. Visagavel</span>
              </div>
            </div>

            {/* Right Column: Image (desktop ordered second) */}
            <div className="lg:col-span-5 lg:order-2 order-1 flex justify-center relative">
              <div className="relative group/img flex items-center justify-center p-2">
                {/* Dashed outer rings rotating on hover */}
                <div className="absolute w-56 h-56 rounded-full border border-dashed border-[#ffc107]/30 group-hover/img:rotate-[60deg] transition-transform duration-1000 pointer-events-none" />
                <div className="absolute w-50 h-50 rounded-full border border-dashed border-[#224292]/15 group-hover/img:-rotate-[60deg] transition-transform duration-1000 pointer-events-none" />
                
                {/* Glow behind image */}
                <div className="absolute w-44 h-44 rounded-full bg-gradient-to-tr from-[#224292]/5 to-[#ffc107]/5 blur-lg pointer-events-none" />
                
                {/* Main image container */}
                <div className="relative w-44 h-44 md:w-48 md:h-48 rounded-full p-2 bg-gradient-to-tr from-[#224292] to-[#1e3a8a] shadow-[0_15px_35px_rgba(0,0,0,0.1)] z-10 overflow-hidden group-hover/img:scale-[1.02] transition-transform duration-500">
                  <div className="w-full h-full rounded-full overflow-hidden bg-white border-2 border-white shadow-inner">
                    <img 
                      src={principalImg} 
                      alt="Dr. K. Visagavel" 
                      className="w-full h-full object-cover transition-transform duration-700 group-hover/img:scale-105"
                      style={{ objectPosition: 'center 15%' }}
                    />
                  </div>
                </div>
                
                {/* Floating Role Pill */}
                <div className="absolute -bottom-1 z-20 bg-gradient-to-r from-[#ffc107] to-[#e0a800] text-[#224292] px-4 py-2 rounded-full border-2 border-white shadow-md text-[9px] font-black uppercase tracking-[0.1em] flex items-center gap-1.5 whitespace-nowrap">
                  <GraduationCap className="w-3 h-3 text-[#224292]" />
                  Principal
                </div>
              </div>
            </div>

          </div>
        </motion.div>

      </div>
    </div>
  )
}
