import React from 'react'
import HeaderSection from './HeaderSection'
import ProcessFlow from './ProcessFlow'
import RecruitersMarquee from './RecruitersMarquee'

const RecruitmentProcess = () => {
  return (
    <div className="pt-20 pb-0 bg-white relative overflow-hidden">
      {/* Abstract Background Accents */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-gradient-to-bl from-[#18357a]/5 to-transparent rounded-full -translate-y-1/2 translate-x-1/2 pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <HeaderSection />
        <ProcessFlow />
      </div>
      
      <RecruitersMarquee />
    </div>
  )
}

export default RecruitmentProcess
