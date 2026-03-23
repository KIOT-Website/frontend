import { motion } from 'framer-motion'
import { HardHat, Wrench, ArrowLeft, Home } from 'lucide-react'
import { useNavigate } from 'react-router-dom'

const UnderConstruction = () => {
  const navigate = useNavigate()

  return (
    <div className="min-h-screen bg-[#FCFDFD] flex items-center justify-center pt-24 pb-16 px-6 overflow-hidden relative">
      
      {/* Decorative Brand Background */}
      <div className="absolute top-1/4 right-1/4 w-[600px] h-[600px] bg-[#ffc107]/10 rounded-full blur-[120px] pointer-events-none -z-10" />
      <div className="absolute bottom-1/4 left-1/4 w-[600px] h-[600px] bg-[#18357a]/5 rounded-full blur-[100px] pointer-events-none -z-10" />

      {/* Repeating abstract striped background pattern */}
      <div className="absolute inset-0 opacity-[0.02] bg-[radial-gradient(#18357a_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none -z-20" />

      <div className="max-w-2xl w-full text-center relative z-10">
        
        {/* Animated Construction Icons */}
        <div className="flex justify-center items-center gap-6 mb-10 relative">
          
          <motion.div
            initial={{ y: 0 }}
            animate={{ y: [-15, 0, -15] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="w-24 h-24 rounded-[32px] shadow-sm bg-white border border-[#D5E2F4]/50 flex items-center justify-center z-10"
          >
             <HardHat className="w-12 h-12 text-[#ffc107]" strokeWidth={1.5} />
          </motion.div>

          {/* Floating Wrench behind */}
          <motion.div
            initial={{ rotate: -20, scale: 0.9 }}
            animate={{ rotate: 10, scale: 1 }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", repeatType: "mirror" }}
            className="absolute -top-6 -right-2 w-14 h-14 bg-white/40 backdrop-blur-md rounded-2xl flex items-center justify-center shadow-lg -z-10"
          >
             <Wrench className="w-6 h-6 text-[#18357a]/40" />
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
            <span className="text-xs font-black uppercase tracking-[0.2em] text-[#b38600]">Work In Progress</span>
          </div>

          <h1 className="text-4xl md:text-5xl font-black text-[#18357a] font-display leading-[1.1] tracking-tight mb-6">
            Page Under <span className="text-[#ffc107]">Construction</span>
          </h1>
          
          <p className="text-[#64779F] text-lg font-medium leading-relaxed mb-10 max-w-lg mx-auto">
            We're currently building something amazing here. Please check back later or explore the rest of our website in the meantime.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button 
              onClick={() => navigate(-1)}
              className="group flex items-center gap-2 px-8 py-4 bg-white border border-[#D5E2F4] text-[#18357a] rounded-xl font-bold uppercase tracking-wider text-sm transition-all hover:bg-[#F8FAFC] hover:border-[#18357a]/20 shadow-sm w-full sm:w-auto justify-center"
            >
              <ArrowLeft size={18} className="transition-transform group-hover:-translate-x-1" />
              Go Back
            </button>
            <button 
              onClick={() => navigate('/')}
              className="group flex items-center gap-2 px-8 py-4 bg-[#18357a] text-white rounded-xl font-bold uppercase tracking-wider text-sm transition-all hover:bg-[#224292] hover:shadow-lg hover:shadow-[#18357a]/20 w-full sm:w-auto justify-center"
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

export default UnderConstruction
