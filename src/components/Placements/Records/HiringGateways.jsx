import React from 'react'
import { motion } from 'framer-motion'
import { ShieldCheck } from 'lucide-react'

const HiringGateways = () => {
  return (
    <>
      <div className="max-w-7xl mx-auto mb-40 px-6">
        <div className="bg-white rounded-[2rem] p-12 md:p-20 shadow-xl shadow-slate-200/50 border border-[#D5E2F4]/50 flex flex-col md:flex-row gap-16 md:items-center relative overflow-hidden">
          <div className="md:w-5/12 relative z-10">
            <div className="flex items-center gap-2 mb-4">
              <div className="h-px w-8 bg-[#224292]" />
              <span className="text-[10px] font-black uppercase tracking-[0.4em] text-[#224292]">Strategic Access</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-[#224292] tracking-tighter uppercase mb-6 leading-[0.9]">Hiring Gateways</h2>
            <p className="text-black text-base font-black leading-relaxed italic">
              Proprietary hiring frameworks engineered to bridge the gap between academic brilliance and global corporate mandates.
            </p>
          </div>
          <div className="md:w-7/12 flex flex-wrap gap-4 relative z-10">
            {[
              "On-Campus / Off-Campus Hiring",
              "Contest-Based Hiring",
              "Bilingual Hiring (Global)",
              "Internship-Based Placement",
              "COE-Based Exclusive Hiring"
            ].map((model, i) => (
              <motion.div 
                  key={i} 
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: i * 0.1 }}
                  className="px-8 py-5 rounded-xl border border-[#224292]/10 bg-white text-xs font-black uppercase tracking-widest text-[#224292] hover:bg-[#224292] hover:text-white transition-all cursor-default shadow-sm"
              >
                {model}
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      <div className="text-center">
        <motion.div initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} className="inline-block px-12 py-6 rounded-2xl bg-[#224292] text-white shadow-xl relative group overflow-hidden">
          <p className="relative z-10 font-bold uppercase tracking-widest text-[10px] md:text-xs flex items-center gap-5">
            <ShieldCheck size={20} className="text-[#ffc107]" />
            Transforming Potential into Institutional Legacy since inception.
          </p>
        </motion.div>
      </div>
    </>
  )
}

export default HiringGateways
