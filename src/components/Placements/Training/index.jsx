import React from 'react'
import HeaderSection from './HeaderSection'
import EmployabilitySection from './EmployabilitySection'
import LifeSkillsSection from './LifeSkillsSection'
import FeaturesSection from './FeaturesSection'
import TrainingTeamSection from './TrainingTeamSection'

const TrainingOverview = () => {
  return (
    <div className="relative bg-[#F8FAFC] py-8 min-h-screen overflow-hidden font-graphik">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-gradient-to-bl from-[#224292]/5 via-transparent to-transparent rounded-full blur-3xl pointer-events-none" />
      
      <section className="relative z-10 max-w-7xl mx-auto">
        <HeaderSection />
        <EmployabilitySection />
        <LifeSkillsSection />
        <FeaturesSection />
        <TrainingTeamSection />
      </section>
    </div>
  )
}

export default TrainingOverview
