import React from 'react'
import HeaderSection from './HeaderSection'
import PillarsSection from './PillarsSection'
import TeamSection from './TeamSection'

const PlacementOverview = () => {
  return (
    <div className="relative bg-white pt-24 pb-32 min-h-screen overflow-hidden">
      
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-bl from-[#18357a]/5 to-transparent rounded-bl-full pointer-events-none" />

      <section className="relative px-6 sm:px-10 lg:px-20 z-10 max-w-7xl mx-auto">
        <HeaderSection />
        <PillarsSection />
        <TeamSection />
      </section>
    </div>
  )
}

export default PlacementOverview
