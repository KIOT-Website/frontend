import React from 'react'
import { motion } from 'framer-motion'
import { Home, ArrowLeft, HardHat } from 'lucide-react'
import { useNavigate } from 'react-router-dom'

const NotFoundPage = () => {
  const navigate = useNavigate()

  return (
    <div className="min-h-screen bg-[#FCFDFD] flex items-center justify-center pt-24 pb-16 px-6 overflow-hidden relative">
      
      {/* Decorative Brand Background */}
      <div className="absolute top-1/4 right-1/4 w-[600px] h-[600px] bg-[#ffc107]/5 rounded-full blur-[120px] pointer-events-none -z-10" />
      <div className="absolute bottom-1/4 left-1/4 w-[600px] h-[600px] bg-[#224292]/5 rounded-full blur-[100px] pointer-events-none -z-10" />

      <div className="max-w-2xl w-full text-center relative z-10">
        
        <div className="flex justify-center items-center mb-10">
          <motion.div
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, type: "spring" }}
            className="w-32 h-32 rounded-[40px] shadow-xl bg-white border border-[#D5E2F4]/50 flex items-center justify-center relative overflow-hidden"
          >
             <div className="absolute inset-0 bg-[#ffc107]/10 animate-pulse" />
             <HardHat className="w-16 h-16 text-[#224292]" strokeWidth={1.5} />
          </motion.div>
        </div>

        <motion.div
           initial={{ opacity: 0, scale: 0.95, y: 30 }}
           animate={{ opacity: 1, scale: 1, y: 0 }}
           transition={{ duration: 0.6, type: "spring", bounce: 0.3 }}
           className="bg-white/80 backdrop-blur-xl p-10 lg:p-14 rounded-[40px] shadow-[0_30px_60px_rgba(34,66,146,0.06)] border border-white"
        >
          <div className="inline-flex items-center gap-2 mb-6 bg-[#ffc107]/10 px-4 py-1.5 rounded-full border border-[#ffc107]/20">
            <div className="w-1.5 h-1.5 bg-[#ffc107] rounded-full animate-ping" />
            <span className="text-xs font-black uppercase tracking-[0.2em] text-[#1a1a1a]">Work in Progress</span>
          </div>

          <h1 className="text-4xl md:text-5xl font-black text-[#224292] font-display leading-[1.1] tracking-tight mb-6">
            Under <span className="text-[#ffc107]">Construction</span>
          </h1>
          
          <p className="text-[#64779F] text-lg font-medium leading-relaxed mb-10 max-w-lg mx-auto">
            We are currently building this page to bring you the best experience. Please check back soon or visit our homepage.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button 
              onClick={() => navigate(-1)}
              className="group flex items-center gap-2 px-8 py-4 bg-white border border-[#D5E2F4] text-[#224292] rounded-xl font-bold uppercase tracking-wider text-sm transition-all hover:bg-[#F8FAFC] hover:border-[#224292]/20 shadow-sm w-full sm:w-auto justify-center"
            >
              <ArrowLeft size={18} className="transition-transform group-hover:-translate-x-1" />
              Go Back
            </button>
            <button 
              onClick={() => navigate('/')}
              className="group flex items-center gap-2 px-8 py-4 bg-[#224292] text-white rounded-xl font-bold uppercase tracking-wider text-sm transition-all hover:bg-[#224292] hover:shadow-lg hover:shadow-[#224292]/20 w-full sm:w-auto justify-center"
            >
              <Home size={18} className="transition-transform group-hover:scale-110" />
              Homepage
            </button>
          </div>
        </motion.div>

      </div>
    </div>
  )
}

export default NotFoundPage
