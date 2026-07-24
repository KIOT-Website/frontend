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
    <section className="py-8 md:py-10 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        
        {/* Heading */}
        <div className="text-center mb-20">
          <h2 className="text-sm font-black text-[#ffc107] uppercase tracking-[0.4em] mb-4">Insights & Analytics</h2>
          <h3 className="text-4xl md:text-5xl font-black text-[#224292] tracking-tight mb-6">
            Alumni Statistics Report
          </h3>
          <p className="text-black font-black uppercase tracking-widest text-[11px] font-graphik">BATCH 2013 - BATCH 2025</p>
          <div className="mt-4 w-20 h-1.5 bg-[#ffc107] mx-auto rounded-full" />
        </div>

        {/* Summary Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
          {summaryStats.map((stat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-[#224292] p-8 rounded-[2rem] shadow-xl shadow-[#224292]/20 flex items-center justify-between group transition-all duration-500"
            >
              <div>
                <p className="text-[10px] font-black text-white/70 uppercase tracking-widest mb-1">{stat.label}</p>
                <div className="flex items-baseline gap-2">
                  <h4 className="text-4xl font-black text-white">{stat.value}</h4>
                  {stat.sub && <span className="text-sm font-black text-[#ffc107]">{stat.sub}</span>}
                </div>
              </div>
              <div className={`w-14 h-14 rounded-2xl bg-white/10 backdrop-blur-md flex items-center justify-center text-white border border-white/20`}>
                <stat.icon size={24} />
              </div>
            </motion.div>
          ))}
        </div>

        {/* UG Stats Table */}
        <div className="mb-16">
          <div className="mb-6">
            <h4 className="text-xl md:text-2xl font-black text-[#224292] uppercase tracking-tighter font-graphik">UG / B.E. & B.Tech.</h4>
          </div>
          
          <div className="overflow-x-auto rounded-xl border border-slate-100 shadow-xl bg-slate-50/50">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-white">
                  <th className="px-6 py-5 text-[10px] font-black text-black uppercase tracking-[0.2em] font-graphik w-1/2">Course / Dept.</th>
                  <th className="px-4 py-5 text-[10px] font-black text-black uppercase tracking-[0.2em] text-center font-graphik whitespace-nowrap">Male</th>
                  <th className="px-4 py-5 text-[10px] font-black text-black uppercase tracking-[0.2em] text-center font-graphik whitespace-nowrap">Female</th>
                  <th className="px-4 py-5 text-[10px] font-black text-[#224292] uppercase tracking-[0.2em] text-center bg-slate-100 font-graphik whitespace-nowrap">Total</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {ugStats.map((row, idx) => (
                  <tr key={idx} className="hover:bg-white transition-colors">
                    <td className="px-6 py-4 font-bold text-black font-graphik text-sm">{row.dept}</td>
                    <td className="px-4 py-4 text-center text-black font-bold font-graphik text-sm">{row.male}</td>
                    <td className="px-4 py-4 text-center text-black font-bold font-graphik text-sm">{row.female}</td>
                    <td className="px-4 py-4 text-center font-black text-[#224292] bg-slate-50/30 font-graphik text-sm">{row.total}</td>
                  </tr>
                ))}
                <tr className="bg-[#224292] text-white">
                  <td className="px-6 py-5 font-black uppercase tracking-widest text-[10px] font-graphik">Total UG Alumni</td>
                  <td className="px-4 py-5 text-center font-black text-lg font-graphik">4970</td>
                  <td className="px-4 py-5 text-center font-black text-lg font-graphik">2002</td>
                  <td className="px-4 py-5 text-center font-black text-xl bg-[#ffc107] text-[#224292] font-graphik">6972</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* PG Stats Table */}
        <div>
          <div className="mb-6">
            <h4 className="text-xl md:text-2xl font-black text-[#224292] uppercase tracking-tighter font-graphik">PG / MBA & M.E.</h4>
          </div>
          
          <div className="overflow-x-auto rounded-xl border border-slate-100 shadow-xl bg-slate-50/50">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-white">
                  <th className="px-6 py-5 text-[10px] font-black text-black uppercase tracking-[0.2em] font-graphik w-1/2">Course / Dept.</th>
                  <th className="px-4 py-5 text-[10px] font-black text-black uppercase tracking-[0.2em] text-center font-graphik whitespace-nowrap">Male</th>
                  <th className="px-4 py-5 text-[10px] font-black text-black uppercase tracking-[0.2em] text-center font-graphik whitespace-nowrap">Female</th>
                  <th className="px-4 py-4 text-[10px] font-black text-[#224292] uppercase tracking-[0.2em] text-center bg-slate-100 font-graphik whitespace-nowrap">Total</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {pgStats.map((row, idx) => (
                  <tr key={idx} className="hover:bg-white transition-colors">
                    <td className="px-6 py-4 font-bold text-black font-graphik text-sm">{row.dept}</td>
                    <td className="px-4 py-4 text-center text-black font-bold font-graphik text-sm">{row.male}</td>
                    <td className="px-4 py-4 text-center text-black font-bold font-graphik text-sm">{row.female}</td>
                    <td className="px-4 py-4 text-center font-black text-[#224292] bg-slate-50/30 font-graphik text-sm">{row.total}</td>
                  </tr>
                ))}
                <tr className="bg-[#224292] text-white">
                  <td className="px-6 py-5 font-black uppercase tracking-widest text-[10px] font-graphik">Total PG Alumni</td>
                  <td className="px-4 py-5 text-center font-black text-lg font-graphik">1042</td>
                  <td className="px-4 py-5 text-center font-black text-lg font-graphik">660</td>
                  <td className="px-4 py-5 text-center font-black text-xl bg-[#ffc107] text-[#224292] font-graphik">1702</td>
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
