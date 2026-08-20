import React from 'react'
import { motion } from 'framer-motion'
import { Users, User, UserCheck, PieChart } from 'lucide-react'

const ugStats = [
  { dept: "B.E. - Civil", male: 438, female: 133, total: 571 },
  { dept: "B.E. - CSE", male: 807, female: 703, total: 1510 },
  { dept: "B.E. - ECE", male: 779, female: 640, total: 1419 },
  { dept: "B.E. - EEE", male: 730, female: 366, total: 1096 },
  { dept: "B.E. - MECH", male: 2023, female: 59, total: 2082 },
  { dept: "B.Tech. - CSBS", male: 68, female: 40, total: 108 },
  { dept: "B.Tech. - IT", male: 75, female: 46, total: 121 },
  { dept: "B.Tech. - AI&DS", male: 50, female: 15, total: 65 },
]

const pgStats = [
  { dept: "MBA", male: 654, female: 462, total: 1116 },
  { dept: "M.E. - CSE", male: 42, female: 85, total: 127 },
  { dept: "M.E. - EST", male: 37, female: 36, total: 73 },
  { dept: "M.E. - ISE", male: 265, female: 9, total: 274 },
  { dept: "M.E. - VLSI", male: 44, female: 68, total: 112 },
]

const summaryStats = [
  { label: "Total alumni", value: "8,674", icon: Users, color: "bg-blue-500" },
  { label: "Male Students", value: "6,012", sub: "69%", icon: User, color: "bg-[#224292]" },
  { label: "Female Students", value: "2,662", sub: "31%", icon: UserCheck, color: "bg-[#ffc107]" },
]

const AlumniInsights = () => {
  return (
    <section className="pt-8 pb-4 md:pt-12 md:pb-6 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        
        {/* Heading */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-sm font-black text-[#ffc107] uppercase tracking-[0.4em] mb-3">Insights & Analytics</h2>
          <h3 className="text-3xl md:text-5xl font-black text-[#224292] tracking-tight mb-3 font-graphik">
            Alumni Statistics <span className="text-[#ffc107]">Report</span>
          </h3>
          <p className="text-slate-600 font-bold uppercase tracking-widest text-[11px] font-graphik">BATCH 2013 - BATCH 2025</p>
          <div className="mt-4 w-16 h-1 bg-[#ffc107] mx-auto rounded-full" />
        </div>

        {/* Summary Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6 mb-12 md:mb-14">
          {summaryStats.map((stat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-gradient-to-br from-[#18357a] via-[#1e3e8f] to-[#122759] p-6 sm:p-7 rounded-2xl shadow-xl shadow-[#18357a]/15 border border-[#18357a]/20 flex items-center justify-between group hover:scale-[1.02] transition-all duration-300"
            >
              <div>
                <p className="text-[10.5px] font-bold text-slate-200/80 uppercase tracking-widest mb-1.5">{stat.label}</p>
                <div className="flex items-baseline gap-2.5">
                  <h4 className="text-3xl sm:text-4xl font-black text-white tracking-tight">{stat.value}</h4>
                  {stat.sub && (
                    <span className="text-xs font-black text-[#ffc107] bg-white/10 px-2 py-0.5 rounded-full border border-white/10">
                      {stat.sub}
                    </span>
                  )}
                </div>
              </div>
              <div className="w-13 h-13 sm:w-14 sm:h-14 rounded-xl bg-white/10 backdrop-blur-md flex items-center justify-center text-[#ffc107] border border-white/20 shadow-inner shrink-0">
                <stat.icon size={26} />
              </div>
            </motion.div>
          ))}
        </div>

        {/* UG Stats Table */}
        <div className="mb-10 md:mb-12">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-2.5 h-6 bg-[#ffc107] rounded-full" />
            <h4 className="text-lg md:text-xl font-bold text-[#18357a] uppercase tracking-tight font-graphik">
              Undergraduate Programs (B.E. & B.Tech.)
            </h4>
          </div>
          
          <div className="overflow-x-auto rounded-2xl border border-slate-200/90 shadow-xl shadow-slate-900/5 bg-white">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-[#18357a] text-white border-b border-[#18357a]">
                  <th className="px-6 py-4 text-xs font-semibold uppercase tracking-wider font-graphik w-1/2">Course / Department</th>
                  <th className="px-4 py-4 text-xs font-semibold uppercase tracking-wider text-center font-graphik whitespace-nowrap">Male</th>
                  <th className="px-4 py-4 text-xs font-semibold uppercase tracking-wider text-center font-graphik whitespace-nowrap">Female</th>
                  <th className="px-6 py-4 text-xs font-semibold uppercase tracking-wider text-center font-graphik whitespace-nowrap bg-[#122759]">Total Alumni</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {ugStats.map((row, idx) => (
                  <tr 
                    key={idx} 
                    className={`transition-colors hover:bg-blue-50/70 ${idx % 2 === 1 ? 'bg-slate-50/70' : 'bg-white'}`}
                  >
                    <td className="px-6 py-3.5 font-semibold text-slate-800 font-graphik text-sm">{row.dept}</td>
                    <td className="px-4 py-3.5 text-center text-slate-600 font-medium font-graphik text-sm">{row.male}</td>
                    <td className="px-4 py-3.5 text-center text-slate-600 font-medium font-graphik text-sm">{row.female}</td>
                    <td className="px-6 py-3.5 text-center font-semibold text-[#18357a] bg-[#18357a]/[0.03] font-graphik text-sm">{row.total}</td>
                  </tr>
                ))}
                <tr className="bg-slate-100/90 border-t-2 border-slate-200">
                  <td className="px-6 py-4 font-bold uppercase tracking-wider text-xs sm:text-sm font-graphik text-[#18357a]">Total UG Alumni</td>
                  <td className="px-4 py-4 text-center font-semibold text-base sm:text-lg font-graphik text-slate-800">4,970</td>
                  <td className="px-4 py-4 text-center font-semibold text-base sm:text-lg font-graphik text-slate-800">2,002</td>
                  <td className="px-6 py-4 text-center font-bold text-lg sm:text-xl text-[#18357a] bg-slate-200/70 font-graphik">6,972</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* PG Stats Table */}
        <div className="mb-4">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-2.5 h-6 bg-[#ffc107] rounded-full" />
            <h4 className="text-lg md:text-xl font-bold text-[#18357a] uppercase tracking-tight font-graphik">
              Postgraduate Programs (MBA & M.E.)
            </h4>
          </div>
          
          <div className="overflow-x-auto rounded-2xl border border-slate-200/90 shadow-xl shadow-slate-900/5 bg-white">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-[#18357a] text-white border-b border-[#18357a]">
                  <th className="px-6 py-4 text-xs font-semibold uppercase tracking-wider font-graphik w-1/2">Course / Department</th>
                  <th className="px-4 py-4 text-xs font-semibold uppercase tracking-wider text-center font-graphik whitespace-nowrap">Male</th>
                  <th className="px-4 py-4 text-xs font-semibold uppercase tracking-wider text-center font-graphik whitespace-nowrap">Female</th>
                  <th className="px-6 py-4 text-xs font-semibold uppercase tracking-wider text-center font-graphik whitespace-nowrap bg-[#122759]">Total Alumni</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {pgStats.map((row, idx) => (
                  <tr 
                    key={idx} 
                    className={`transition-colors hover:bg-blue-50/70 ${idx % 2 === 1 ? 'bg-slate-50/70' : 'bg-white'}`}
                  >
                    <td className="px-6 py-3.5 font-semibold text-slate-800 font-graphik text-sm">{row.dept}</td>
                    <td className="px-4 py-3.5 text-center text-slate-600 font-medium font-graphik text-sm">{row.male}</td>
                    <td className="px-4 py-4 text-center text-slate-600 font-medium font-graphik text-sm">{row.female}</td>
                    <td className="px-6 py-3.5 text-center font-semibold text-[#18357a] bg-[#18357a]/[0.03] font-graphik text-sm">{row.total}</td>
                  </tr>
                ))}
                <tr className="bg-slate-100/90 border-t-2 border-slate-200">
                  <td className="px-6 py-4 font-bold uppercase tracking-wider text-xs sm:text-sm font-graphik text-[#18357a]">Total PG Alumni</td>
                  <td className="px-4 py-4 text-center font-semibold text-base sm:text-lg font-graphik text-slate-800">1,042</td>
                  <td className="px-4 py-4 text-center font-semibold text-base sm:text-lg font-graphik text-slate-800">660</td>
                  <td className="px-6 py-4 text-center font-bold text-lg sm:text-xl text-[#18357a] bg-slate-200/70 font-graphik">1,702</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

      </div>
    </section>
  )
}

export default AlumniInsights
