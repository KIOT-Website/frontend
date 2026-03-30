import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { AlertCircle } from 'lucide-react'

const API_BASE = 'http://localhost:8000'

const PlacementRecordsStudentsAdmittedSection = () => {
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true)
        const res = await fetch(`${API_BASE}/students-admitted-data/`)
        if (!res.ok) throw new Error('Failed to load placement records for students admitted')
        const result = await res.json()
        setData(result)
      } catch (err) {
        setError(err.message)
      } finally {
        setLoading(false)
      }
    }
    fetchData()
  }, [])

  if (loading) {
    return (
      <section className="py-24 flex items-center justify-center min-h-[30vh]">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
          className="w-12 h-12 border-4 border-[#18357a] border-t-[#ffc107] rounded-full"
        />
      </section>
    )
  }

  if (error) {
    return (
      <section className="py-24 px-6 max-w-4xl mx-auto">
        <div className="bg-red-50 border border-red-200 rounded-[2rem] p-10 text-center">
          <AlertCircle size={40} className="mx-auto text-red-400 mb-4" />
          <p className="text-red-600 font-bold text-lg">{error}</p>
        </div>
      </section>
    )
  }

  return (
    <div className="mb-20">
      <div className="text-center mb-10">
        <h2 className="text-3xl md:text-4xl font-black text-[#18357a] uppercase tracking-tighter">
          Placement Records (Students Admitted)
        </h2>
      </div>
      <div className="max-w-6xl mx-auto">
        {data.length === 0 ? (
          <div className="bg-white rounded-[2rem] border border-[#D5E2F4]/50 shadow-sm p-12 text-center">
            <p className="text-[#64779F] font-bold text-lg">Records are currently being updated.</p>
          </div>
        ) : (
          <div className="overflow-x-auto">
            <div className="min-w-[800px]">
              {/* Table Header */}
              <div className="grid grid-cols-5 bg-[#18357a] text-white px-8 py-5 rounded-t-[2rem] text-[10px] md:text-xs font-black uppercase tracking-[0.2em]">
                <span className="text-left">Academic Year</span>
                <span className="text-center">Total No.of Students Opted</span>
                <span className="text-center">Total No.of Students Placed</span>
                <span className="text-center">Total No.of Companies</span>
                <span className="text-center">Percentage</span>
              </div>

              {/* Data List */}
              <div className="bg-white rounded-b-[2rem] border-x border-b border-[#D5E2F4]/50 shadow-2xl shadow-[#18357a]/5">
                {data.map((item) => (
                  <div key={item.id} className="grid grid-cols-5 items-center px-8 py-6 border-b border-[#D5E2F4]/30 last:border-0 hover:bg-[#F8FAFC] transition-colors group">
                    <span className="font-extrabold text-[#18357a] text-base md:text-lg tracking-tight">
                      {item.academic_year}
                    </span>
                    <span className="text-center text-[#64779F] font-bold text-base md:text-lg">
                      {item.students_opted}
                    </span>
                    <span className="text-center text-[#64779F] font-bold text-base md:text-lg">
                      {item.students_placed}
                    </span>
                    <span className="text-center text-[#64779F] font-bold text-base md:text-lg">
                      {item.companies_count}
                    </span>
                    <span className="text-center flex justify-center">
                      <span className="inline-flex items-center justify-center px-4 py-1.5 bg-emerald-100 text-emerald-800 font-black rounded-xl text-sm border border-emerald-200 shadow-sm">
                        {item.percentage}%
                      </span>
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default PlacementRecordsStudentsAdmittedSection
