import React from 'react'
import ImpactDistribution from './ImpactDistribution'
import PlacementRecordsSection from '../PlacementRecordsSection'
import PlacementRecordsStudentsAdmittedSection from '../PlacementRecordsStudentsAdmittedSection'
import PlacementDetailsYearSection from '../PlacementDetailsYearSection'


const OutcomesOverview = () => {
  return (
    <div className="relative pb-20 overflow-hidden">
      <section className="relative px-6 sm:px-10 lg:px-20 z-10 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-8 mb-20">
          <PlacementRecordsSection />
          <PlacementDetailsYearSection />
        </div>
        <PlacementRecordsStudentsAdmittedSection />
      </section>


      <section className="relative px-6 sm:px-10 lg:px-20 z-10 max-w-7xl mx-auto">
        <ImpactDistribution />
      </section>
    </div>
  )
}

export default OutcomesOverview
