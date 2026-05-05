import React from 'react'
import AnalyticsCharts from './AnalyticsCharts'
import ImpactDistribution from './ImpactDistribution'
import HiringPartners from './HiringPartners'
import PlacementRecordsSection from '../PlacementRecordsSection'
import PlacementRecordsStudentsAdmittedSection from '../PlacementRecordsStudentsAdmittedSection'
import PlacementDetailsYearSection from '../PlacementDetailsYearSection'

const statsData = [
  { year: "2013-14", lpa: 1.85 }, { year: "2014-15", lpa: 2.01 }, { year: "2015-16", lpa: 2.16 },
  { year: "2016-17", lpa: 2.43 }, { year: "2017-18", lpa: 2.57 }, { year: "2018-19", lpa: 2.82 },
  { year: "2019-20", lpa: 3.02 }, { year: "2020-21", lpa: 3.02 }, { year: "2021-22", lpa: 3.58 },
  { year: "2022-23", lpa: 3.68 }, { year: "2023-24", lpa: 3.72 }, { year: "2024-25", lpa: 4.05 }
];

const efficiencyData = [
  { year: "2014-15", opted: 385, placed: 368 }, { year: "2016-17", opted: 580, placed: 549 },
  { year: "2018-19", opted: 559, placed: 521 }, { year: "2020-21", opted: 515, placed: 489 },
  { year: "2022-23", opted: 426, placed: 398 }, { year: "2024-25", opted: 674, placed: 610 }
];

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

      <AnalyticsCharts statsData={statsData} efficiencyData={efficiencyData} />

      <section className="relative px-6 sm:px-10 lg:px-20 z-10 max-w-7xl mx-auto">
        <ImpactDistribution />
        <HiringPartners />
      </section>
    </div>
  )
}

export default OutcomesOverview
