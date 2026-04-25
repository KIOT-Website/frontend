import React from 'react'
import HeaderSection from './HeaderSection'
import TeamSection from './TeamSection'

const PlacementOverview = () => {
  return (
    <div className="relative overflow-hidden">
      <HeaderSection />
      
      <section className="relative px-6 sm:px-10 lg:px-20 z-10 max-w-7xl mx-auto py-24 pb-32">
        <TeamSection />
      </section>
    </div>
  )
}

export default PlacementOverview
