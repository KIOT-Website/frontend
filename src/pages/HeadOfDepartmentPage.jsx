import { motion } from 'framer-motion'
import { Hammer } from 'lucide-react'

export default function HeadOfDepartmentPage() {
  return (
    <div className="min-h-screen bg-[#F8FAFC] font-graphik flex flex-col items-center justify-center p-6 text-center">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        className="max-w-xl"
      >
        <div className="w-24 h-24 rounded-full bg-[#224292]/5 flex items-center justify-center text-[#224292] mx-auto mb-8 animate-bounce">
          <Hammer size={48} />
        </div>
        <h1 className="text-4xl md:text-5xl font-black text-[#224292] mb-6 tracking-tight">
          Under <span className="text-[#ffc107]">Construction</span>
        </h1>
        <p className="text-[#64779F] text-lg font-medium leading-relaxed">
          We are currently updating the Head of the Department information to reflect our latest academic structure. 
          Please check back soon for the updated directory.
        </p>
        <div className="mt-12 flex justify-center items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-[#ffc107]" />
          <div className="w-12 h-1 bg-[#224292]/10 rounded-full" />
          <div className="w-2 h-2 rounded-full bg-[#ffc107]" />
        </div>
      </motion.div>
    </div>
  )
}
