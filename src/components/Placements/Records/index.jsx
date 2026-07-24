import React from 'react'
import ImpactDistribution from './ImpactDistribution'
import PlacementRecordsStudentsAdmittedSection from '../PlacementRecordsStudentsAdmittedSection'
import PlacementRecordsStudentsOptedSection from '../PlacementRecordsStudentsOptedSection'
import PlacementDetailsYearSection from '../PlacementDetailsYearSection'


const OutcomesOverview = () => {
  return (
    <div className="relative pb-20 overflow-hidden">
      <section className="relative px-4 sm:px-6 lg:px-10 z-10 w-full">
        <div className="mb-20">
          <PlacementDetailsYearSection />
        </div>
        <PlacementRecordsStudentsAdmittedSection />
        <PlacementRecordsStudentsOptedSection />
      </section>


      <section className="relative px-6 sm:px-10 lg:px-20 z-10 max-w-7xl mx-auto">
        <ImpactDistribution />
      </section>
    </div>
  )
}

export default OutcomesOverview
