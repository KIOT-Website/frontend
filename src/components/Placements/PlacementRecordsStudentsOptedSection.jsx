import React from 'react'

const PlacementRecordsStudentsOptedSection = () => {
  const data = [
    { id: 1, academic_year: '2025 - 2026', students_opted: 718, students_placed: 679, companies_count: 155, percentage: 94 },
    { id: 2, academic_year: '2024 - 2025', students_opted: 769, students_placed: 735, companies_count: 137, percentage: 95 },
    { id: 3, academic_year: '2023 - 2024', students_opted: 609, students_placed: 568, companies_count: 135, percentage: 93 },
    { id: 4, academic_year: '2022 - 2023', students_opted: 426, students_placed: 398, companies_count: 128, percentage: 93 },
    { id: 5, academic_year: '2021 - 2022', students_opted: 375, students_placed: 355, companies_count: 118, percentage: 94 },
    { id: 6, academic_year: '2020 - 2021', students_opted: 515, students_placed: 489, companies_count: 117, percentage: 95 },
    { id: 7, academic_year: '2019 - 2020', students_opted: 486, students_placed: 461, companies_count: 95, percentage: 94 },
    { id: 8, academic_year: '2018 - 2019', students_opted: 559, students_placed: 521, companies_count: 88, percentage: 93 },
    { id: 9, academic_year: '2017 - 2018', students_opted: 571, students_placed: 530, companies_count: 129, percentage: 93 },
    { id: 10, academic_year: '2016 - 2017', students_opted: 580, students_placed: 549, companies_count: 124, percentage: 95 },
    { id: 11, academic_year: '2015 - 2016', students_opted: 494, students_placed: 470, companies_count: 122, percentage: 95 },
    { id: 12, academic_year: '2014 - 2015', students_opted: 385, students_placed: 368, companies_count: 108, percentage: 96 }
  ]

  return (
    <div className="mb-20">
      <div className="text-center mb-10 h-24 flex items-center justify-center">
        <h2 className="text-xl md:text-3xl font-semibold text-[#224292] flex flex-wrap items-center justify-center gap-2 tracking-tighter">
          Placement Records <span className="text-[#ffc107]">(Students Opted for Placement)</span>
        </h2>
      </div>
      <div className="max-w-6xl mx-auto">
        <div className="overflow-x-auto">
          <div className="min-w-[800px] bg-white border border-[#D5E2F4]/50 rounded-2xl overflow-hidden shadow-sm">
            {/* Table Header */}
            <div className="grid grid-cols-5 bg-[#224292] text-white px-8 py-4 text-[10px] font-medium uppercase tracking-widest">
              <span className="text-left">Academic Year</span>
              <span className="text-center">Total No.of Students Opted</span>
              <span className="text-center">Total No.of Students Placed</span>
              <span className="text-center">Total No.of Companies</span>
              <span className="text-center">% of Placement</span>
            </div>

            {/* Data List */}
            <div>
              {data.map((item) => (
                <div key={item.id} className="grid grid-cols-5 items-center px-8 py-5 border-b border-[#F1F5FB] last:border-0 hover:bg-[#F8FAFC] transition-colors group">
                  <span className="font-medium text-[#224292] text-sm md:text-base tracking-tight group-hover:text-[#ffc107] transition-colors">
                    {item.academic_year}
                  </span>
                  <span className="text-center text-black font-medium text-sm md:text-base">
                    {item.students_opted}
                  </span>
                  <span className="text-center text-black font-medium text-sm md:text-base">
                    {item.students_placed}
                  </span>
                  <span className="text-center text-black font-medium text-sm md:text-base">
                    {item.companies_count}
                  </span>
                  <span className="text-center flex justify-center">
                    <span className="inline-flex items-center justify-center px-4 py-1.5 bg-emerald-100 text-emerald-800 font-medium rounded-xl text-sm border border-emerald-200 shadow-sm">
                      {item.percentage}%
                    </span>
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PlacementRecordsStudentsOptedSection
