import React, { useState } from 'react'
import { Search } from 'lucide-react'
import { placementData2026 } from './placement_data_2026'

const PlacementRecordsStudentsOptedSection = () => {
  const [activeTab, setActiveTab] = useState('summary')
  const [searchTerm, setSearchTerm] = useState('')

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

  const renderSummaryTable = () => {
    return (
      <table className="w-full border-collapse text-left text-xs md:text-sm">
        <thead>
          <tr className="bg-[#224292] text-white text-[10px] uppercase tracking-wider font-semibold">
            <th className="p-3 pl-5 border border-slate-200 text-left">Category / Branch</th>
            <th className="p-3 border border-slate-200 text-center">CSE</th>
            <th className="p-3 border border-slate-200 text-center">IT</th>
            <th className="p-3 border border-slate-200 text-center">CSBS</th>
            <th className="p-3 border border-slate-200 text-center">AI&DS</th>
            <th className="p-3 border border-slate-200 text-center">ECE</th>
            <th className="p-3 border border-slate-200 text-center">EEE</th>
            <th className="p-3 border border-slate-200 text-center">MECH</th>
            <th className="p-3 border border-slate-200 text-center">CIVIL</th>
            <th className="p-3 pr-5 border border-slate-200 text-center">Total</th>
          </tr>
        </thead>
        <tbody>
          {placementData2026.summary.map((row, idx) => {
            const isPercent = row.title.includes('%');
            return (
              <tr key={idx} className={`${isPercent ? 'bg-amber-50 font-bold' : 'even:bg-[#f8fafc] odd:bg-white'} hover:bg-slate-50 transition-colors`}>
                <td className="p-3 pl-5 border border-slate-200 font-semibold text-[#224292]">{row.title}</td>
                <td className="p-3 border border-slate-200 text-center">{row.cse}</td>
                <td className="p-3 border border-slate-200 text-center">{row.it}</td>
                <td className="p-3 border border-slate-200 text-center">{row.csbs}</td>
                <td className="p-3 border border-slate-200 text-center">{row.aids}</td>
                <td className="p-3 border border-slate-200 text-center">{row.ece}</td>
                <td className="p-3 border border-slate-200 text-center">{row.eee}</td>
                <td className="p-3 border border-slate-200 text-center">{row.mech}</td>
                <td className="p-3 border border-slate-200 text-center">{row.civil}</td>
                <td className="p-3 pr-5 border border-slate-200 text-center font-bold text-[#224292]">{row.total}{isPercent && '%'}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    );
  };

  const renderCompanyTable = (list) => {
    const filtered = list.filter(item => 
      item.company.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.it_core.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const formatValue = (val) => (val === 0 || val === '0' ? '*' : (val || '-'));

    return (
      <div className="w-full">
        <table className="w-full border-collapse text-left text-xs">
          <thead>
            <tr className="bg-[#224292] text-white uppercase text-[9px] tracking-wider font-semibold">
              <th rowSpan="2" className="p-3 border border-slate-200 text-center align-middle whitespace-nowrap">Date</th>
              <th rowSpan="2" className="p-3 border border-slate-200 text-left align-middle min-w-[200px]">Name of the Company</th>
              <th rowSpan="2" className="p-3 border border-slate-200 text-center align-middle">IT / Core</th>
              <th rowSpan="2" className="p-3 border border-slate-200 text-center align-middle whitespace-nowrap">Salary (LPA)</th>
              <th colSpan="8" className="p-2 border border-slate-200 text-center">No. of Students Selected</th>
              <th rowSpan="2" className="p-3 border border-slate-200 text-center align-middle whitespace-nowrap">Single Offer</th>
              <th rowSpan="2" className="p-3 border border-slate-200 text-center align-middle whitespace-nowrap">Total Offer</th>
            </tr>
            <tr className="bg-[#224292] text-white text-[9px] uppercase tracking-wider font-semibold">
              <th className="p-2 border border-slate-200 text-center">CSE</th>
              <th className="p-2 border border-slate-200 text-center">IT</th>
              <th className="p-2 border border-slate-200 text-center">CSBS</th>
              <th className="p-2 border border-slate-200 text-center">AI&DS</th>
              <th className="p-2 border border-slate-200 text-center">ECE</th>
              <th className="p-2 border border-slate-200 text-center">EEE</th>
              <th className="p-2 border border-slate-200 text-center">MECH</th>
              <th className="p-2 border border-slate-200 text-center">CIVIL</th>
            </tr>
          </thead>
          <tbody>
            {filtered.length === 0 ? (
              <tr>
                <td colSpan="14" className="p-6 text-center text-slate-500 font-medium bg-slate-50">
                  No matching records found.
                </td>
              </tr>
            ) : (
              filtered.map((item, idx) => (
                <tr key={idx} className="even:bg-[#f8fafc] odd:bg-white hover:bg-slate-50 transition-colors">
                  <td className="p-2.5 border border-slate-200 text-center text-slate-600 whitespace-nowrap">{item.date || '-'}</td>
                  <td className="p-2.5 border border-slate-200 font-semibold text-[#224292]">{item.company}</td>
                  <td className="p-2.5 border border-slate-200 text-center">
                    <span className={`px-2 py-0.5 rounded text-[10px] font-bold ${
                      item.it_core === 'CORE' 
                        ? 'bg-orange-50 text-orange-700 border border-orange-100' 
                        : item.it_core === 'IT'
                        ? 'bg-blue-50 text-blue-700 border border-blue-100'
                        : 'bg-slate-100 text-slate-700'
                    }`}>
                      {item.it_core}
                    </span>
                  </td>
                  <td className="p-2.5 border border-slate-200 text-center font-bold text-slate-700">{item.lpa}</td>
                  <td className="p-2.5 border border-slate-200 text-center">{formatValue(item.cse)}</td>
                  <td className="p-2.5 border border-slate-200 text-center">{formatValue(item.it)}</td>
                  <td className="p-2.5 border border-slate-200 text-center">{formatValue(item.csbs)}</td>
                  <td className="p-2.5 border border-slate-200 text-center">{formatValue(item.aids)}</td>
                  <td className="p-2.5 border border-slate-200 text-center font-semibold text-indigo-600">{formatValue(item.ece)}</td>
                  <td className="p-2.5 border border-slate-200 text-center">{formatValue(item.eee)}</td>
                  <td className="p-2.5 border border-slate-200 text-center">{formatValue(item.mech)}</td>
                  <td className="p-2.5 border border-slate-200 text-center">{formatValue(item.civil)}</td>
                  <td className="p-2.5 border border-slate-200 text-center font-bold text-[#224292] bg-[#f8fafc]/50">{formatValue(item.single)}</td>
                  <td className="p-2.5 border border-slate-200 text-center font-bold text-emerald-700 bg-emerald-50/20">{formatValue(item.total)}</td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    );
  };

  return (
    <div className="mb-20">
      <div className="text-center mb-10 h-24 flex items-center justify-center">
        <h2 className="text-xl md:text-3xl font-semibold text-[#224292] flex flex-wrap items-center justify-center gap-2 tracking-tighter">
          Placement Records <span className="text-[#ffc107]">(Students Opted for Placement)</span>
        </h2>
      </div>
      <div className="max-w-7xl mx-auto">
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

      {/* 2026 Batch Placement Details Section */}
      <div className="max-w-7xl mx-auto mt-20 pt-10 border-t border-slate-200">
        <div className="text-center mb-8">
          <h3 className="text-xl md:text-2xl font-bold text-[#224292] tracking-tight uppercase">
            2026 Batch Placement Record
          </h3>
          <p className="text-xs md:text-sm text-[#ffc107] font-semibold mt-1">
            Centre for Placement and Industry Relations | Data as on 14.07.2026
          </p>
        </div>

        {/* Tabs Control */}
        <div className="flex flex-wrap justify-center gap-2 mb-6">
          {[
            { id: 'summary', label: 'Placement Summary' },
            { id: 'placed', label: `Placed Companies (${placementData2026.placed.length})` },
            { id: 'opps', label: `Opportunities Given (${placementData2026.opps.length})` }
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => { setActiveTab(tab.id); setSearchTerm(''); }}
              className={`px-5 py-2 rounded-xl text-xs md:text-sm font-bold transition-all duration-300 ${
                activeTab === tab.id
                  ? 'bg-[#224292] text-white shadow-md'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Search input for company tables */}
        {activeTab !== 'summary' && (
          <div className="max-w-md mx-auto mb-6 relative">
            <input
              type="text"
              placeholder="Search by Company Name or IT/Core..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-slate-200 rounded-xl text-xs focus:outline-none focus:border-[#224292] transition-colors"
            />
            <Search className="absolute left-3.5 top-2.5 text-slate-400" size={16} />
          </div>
        )}

        <div className="overflow-x-auto bg-white border border-[#D5E2F4]/50 rounded-2xl overflow-hidden shadow-sm">
          {activeTab === 'summary' && renderSummaryTable()}
          {activeTab === 'placed' && renderCompanyTable(placementData2026.placed)}
          {activeTab === 'opps' && renderCompanyTable(placementData2026.opps)}
        </div>
      </div>
    </div>
  )
}

export default PlacementRecordsStudentsOptedSection
