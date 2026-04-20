import React from 'react'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

const HeaderSection = () => {
  return (
    <div className="max-w-7xl mx-auto px-6 mb-24">
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center gap-2.5 px-5 py-1.5 rounded-full bg-[#18357a]/5 border border-[#18357a]/10 shadow-sm mb-6">
              <span className="text-[10px] font-semibold text-[#18357a] tracking-[0.1em]">Institutional Excellence</span>
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-5xl font-bold text-black mb-8 tracking-tighter leading-tight">
            Placement <span className="text-[#ffc107]">Overview</span>
          </h1>
          
          <div className="relative pl-8 border-l-4 border-[#ffc107] max-w-xl">
            <p className="text-black font-semibold text-lg md:text-xl leading-relaxed mb-6 text-justify">
              Training and placement at KIOT is not a final step—it’s a continuous journey.
            </p>
            <p className="text-black font-medium text-base leading-relaxed opacity-70 text-justify">
              From first year to graduation, students are guided, trained, and aligned with industry expectations.
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="relative group lg:mt-0 mt-12"
        >
          <div className="absolute top-0 right-0 w-32 h-32 bg-[#18357a]/5 rounded-full -mr-16 -mt-16 blur-2xl" />
          
          <div className="relative rounded-2xl overflow-hidden border-4 border-white shadow-xl shadow-black/10 transform hover:scale-[1.01] transition-all duration-700">
             <img 
               src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=1200&auto=format&fit=crop" 
               alt="Successful KIOT Students" 
               className="w-full h-[400px] object-cover group-hover:scale-110 transition-transform duration-1000"
             />
             <div className="absolute inset-0 bg-gradient-to-tr from-[#18357a]/20 to-transparent" />
             
             {/* Stats Overlay */}
             <div className="absolute bottom-6 left-6 p-4 bg-white/95 backdrop-blur-md rounded-2xl border border-white shadow-lg">
                <p className="text-[10px] font-bold text-black/40 uppercase tracking-widest mb-1">Success Rate</p>
                <p className="text-2xl font-bold text-black">91% <span className="text-[#ffc107]">Placed</span></p>
             </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default HeaderSection
