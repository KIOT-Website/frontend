import React from 'react'
import { ClipboardList, Brain, Target, Cpu, Users, FileCheck, GraduationCap, Building2, ShieldCheck } from 'lucide-react'

const steps = [
  {
    title: "Registration",
    desc: "Enroll with the placement cell.",
    icon: <ClipboardList size={18} className="text-[#18357a]" />,
    color: "#ffc107"
  },
  {
    title: "Training",
    desc: "Aptitude & Technical sessions.",
    icon: <Brain size={18} className="text-[#18357a]" />,
    color: "#18357a"
  },
  {
    title: "Aptitude",
    desc: "Analytical & Problem solving.",
    icon: <Target size={18} className="text-[#18357a]" />,
    color: "#ffc107"
  },
  {
    title: "Technical",
    desc: "Practical subject assessment.",
    icon: <Cpu size={18} className="text-[#18357a]" />,
    color: "#18357a"
  },
  {
    title: "HR",
    desc: "Confidence & Fitment evaluation.",
    icon: <Users size={18} className="text-[#18357a]" />,
    color: "#ffc107"
  },
  {
    title: "Offer Letter",
    desc: "Final selection & issuance.",
    icon: <FileCheck size={18} className="text-[#18357a]" />,
    color: "#18357a"
  }
];

const ProcessFlow = () => {
  return (
    <>
      <div className="relative mt-40 md:mt-72 mb-40 md:mb-64 max-w-6xl mx-auto px-10 md:px-0">
        <div className="absolute top-1/2 left-0 w-full h-[6px] md:h-[4px] bg-[#18357a]/10 -translate-y-1/2 rounded-full overflow-hidden">
          <div className="h-full w-full bg-gradient-to-r from-[#18357a] via-[#ffc107] to-[#18357a] shadow-[0_0_20px_rgba(255,193,7,0.4)]" />
        </div>

        <div className="absolute left-[-20px] md:left-[-50px] top-1/2 -translate-y-1/2 z-10 flex flex-col items-center">
          <div className="p-1.5 md:p-2 rounded-lg bg-white border border-[#18357a]/10 shadow-sm">
            <GraduationCap size={16} className="text-[#18357a]" />
          </div>
          <span className="text-[8px] md:text-[9px] font-black uppercase text-[#18357a] mt-1 tracking-widest">KIOT</span>
        </div>

        <div className="absolute right-[-20px] md:right-[-50px] top-1/2 -translate-y-1/2 z-10 flex flex-col items-center">
          <div className="p-1.5 md:p-2 rounded-lg bg-white border border-[#18357a]/10 shadow-sm">
            <Building2 size={16} className="text-[#18357a]" />
          </div>
          <span className="text-[8px] md:text-[9px] font-black uppercase text-[#18357a] mt-1 tracking-widest">COMPANY</span>
        </div>

        <div className="relative flex justify-between items-center z-10">
          {steps.map((step, i) => (
            <div key={i} className="flex-1 relative flex flex-col items-center group">
              <div className={`w-10 h-10 md:w-12 md:h-12 rounded-full bg-white shadow-lg border-2 flex items-center justify-center relative z-20 transition-all duration-500 group-hover:scale-110 ${i % 2 === 0 ? 'border-[#ffc107]' : 'border-[#18357a]'}`}>
                <div className="scale-75 md:scale-95 group-hover:scale-110 transition-transform duration-300">
                  {step.icon}
                </div>
              </div>

              <div className={`absolute ${i % 2 === 0 ? 'bottom-full mb-6 md:mb-8 -translate-y-1/2' : 'top-full mt-6 md:mt-8 translate-y-1/2'} w-[70px] xs:w-24 md:w-56 bg-white/95 backdrop-blur-2xl px-2 py-3 md:px-5 md:py-4 rounded-xl md:rounded-[1.5rem] shadow-xl border border-[#D5E2F4] z-50 overflow-hidden text-center hover:scale-105 transition-all`}>
                <h3 className={`text-[8px] md:text-base font-black leading-tight uppercase tracking-tighter text-center ${i % 2 === 0 ? 'text-[#ffc107] md:text-[#18357a]' : 'text-[#18357a]'}`}>
                  {step.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-10 mb-24 text-center">
        <div className="inline-block px-10 py-5 rounded-[2rem] bg-[#18357a] text-white shadow-2xl relative overflow-hidden group">
          <div className="absolute inset-0 bg-[#ffc107]/10 translate-x-full group-hover:translate-x-0 transition-transform duration-700" />
          <p className="relative z-10 font-black uppercase tracking-widest text-[10px] flex items-center gap-4">
            <ShieldCheck size={18} className="text-[#ffc107]" />
            Each stage is designed to progressively prepare students for real-world recruitment.
          </p>
        </div>
      </div>
    </>
  )
}

export default ProcessFlow
