import React from 'react'

const HeaderSection = () => {
  return (
    <div className="text-center mb-12">
      <div className="flex flex-col items-center">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-[#D5E2F4] shadow-sm mb-6">
          <span className="text-[10px] font-black text-[#18357a] uppercase tracking-[0.25em]">Placement Ecosystem</span>
        </div>
        <h1 className="text-4xl md:text-5xl lg:text-[3.5rem] font-black text-[#18357a] mb-8 tracking-tighter leading-[1.1]">
          Recruitment <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#18357a] via-[#224292] to-[#ffc107] uppercase">Pathway</span>
        </h1>
        <div className="max-w-2xl mx-auto p-6 rounded-[2.5rem] bg-white border-2 border-transparent border-l-4 border-l-[#ffc107] shadow-xl relative mt-4 hover:border-[#ffc107] transition-all duration-500 group">
          <p className="text-[#64779F] font-bold text-sm md:text-base leading-relaxed text-left italic">
            A precision-engineered journey transforming academic potential into professional excellence, step by step.
          </p>
        </div>
      </div>
    </div>
  )
}

export default HeaderSection
