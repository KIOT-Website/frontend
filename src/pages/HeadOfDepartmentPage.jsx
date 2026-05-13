import { motion } from 'framer-motion'
import srinivasanImg from '../assets/main/srinivasan.webp'

export default function HeadOfDepartmentPage() {
  return (
    <div className="min-h-screen bg-[#F8FAFC] font-graphik pt-10 pb-10 selection:bg-[#ffc107]/20">
      <div className="max-w-5xl mx-auto px-6 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="bg-white rounded-[3rem] shadow-[0_40px_100px_-20px_rgba(34,66,146,0.12)] border border-slate-100 p-8 lg:pt-16 lg:px-16 lg:pb-10 flex flex-col items-center text-center relative overflow-hidden"
        >
          {/* Decorative Corner Accent */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-[#ffc107]/5 rounded-bl-full -z-0" />
          
          <div className="relative z-10 flex flex-col items-center w-full">
            {/* Principal/HOD Image */}
            <div className="relative mb-12">
              <div className="absolute -inset-10 bg-[#224292]/10 rounded-full blur-[60px] -z-10" />
              <div className="w-64 h-64 lg:w-72 lg:h-72 rounded-full p-2 bg-[#ffc107] shadow-[0_30px_60px_-15px_rgba(0,0,0,0.3)] relative overflow-hidden transition-all duration-500 hover:shadow-[0_40px_80px_-20px_rgba(0,0,0,0.4)]">
                  <div className="w-full h-full rounded-full overflow-hidden bg-white border-4 border-white shadow-inner">
                      <img 
                        src={srinivasanImg} 
                        alt="Dr. P.S. Srinivasan" 
                        className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
                      />
                  </div>
              </div>
              {/* Decorative Badge - Centered Bottom */}
              <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 bg-[#224292] text-white px-8 py-3 rounded-full border-4 border-white shadow-xl text-[12px] font-black uppercase tracking-[0.05em] whitespace-nowrap z-20">
                Dr.PSS.Srinivasan, Executive Chairman
              </div>
            </div>

            {/* Heading */}
            <h1 className="text-2xl md:text-3xl lg:text-[36px] font-semibold text-black mb-12 tracking-tight leading-tight max-w-3xl">
              Welcome to the <br />
              <span className="text-[#ffc107]">Trend Setters’ Paradise</span>
            </h1>

            {/* Message Body */}
            <div className="space-y-12 max-w-3xl w-full">
              <p className="text-sm lg:text-[16px] font-medium text-black leading-relaxed italic text-center px-8">
                "God has created the earth, you and me create a heaven on it. Every individual has innate talents. It is only our attitude that decides outcome."
              </p>

              <div className="text-black font-medium text-sm lg:text-[16px] leading-[1.8] text-justify">
                <p>
                  Yes, we at KIOT have got rich experience on Engineering Education in India and abroad. We know the art of identifying individual talents, nurture them as talented engineers and professionals and make them world class professionals. If you are prepared to be a path breaking professionals poised to make miracles on the earth, the right destination is KIOT. Learn from the masters who know nothing less than excellence. Come on; let us all make a happy heaven on the earth.
                </p>
              </div>
            </div>
            </div>
          </motion.div>
        </div>
      </div>
    )
}
