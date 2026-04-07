import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { AlertCircle, ChevronRight } from 'lucide-react'

const API_BASE = 'http://localhost:8000'

const PlacementRecordsSection = () => {
  const [departments, setDepartments] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchDepartments = async () => {
      try {
        setLoading(true)
        const res = await fetch(`${API_BASE}/placement-department-list/`)
        if (!res.ok) throw new Error('Failed to load placement records')
        const data = await res.json()
        setDepartments(data)
      } catch (err) {
        setError(err.message)
      } finally {
        setLoading(false)
      }
    }
    fetchDepartments()
  }, [])

  if (loading) {
    return (
      <section className="py-24 flex items-center justify-center min-h-[30vh]">
        <motion.div animate={{ rotate: 360 }} transition={{ duration: 1, repeat: Infinity, ease: 'linear' }} className="w-12 h-12 border-4 border-[#18357a] border-t-[#ffc107] rounded-full" />
      </section>
    )
  }

  if (error) {
    return (
      <section className="py-24 px-6 max-w-4xl mx-auto text-red-600 font-bold text-center bg-red-50 rounded-3xl border border-red-200 p-10">
        <AlertCircle size={40} className="mx-auto text-red-400 mb-4" />
        <p>{error}</p>
      </section>
    )
  }

  return (
    <div className="mb-20">
      <div className="text-center mb-10">
        <h2 className="text-3xl md:text-4xl font-black text-[#18357a] uppercase tracking-tighter">
          Placement records(Department wise )
        </h2>
      </div>
      <div className="max-w-5xl mx-auto">
        {departments.length === 0 ? (
          <div className="bg-white rounded-[2rem] border border-[#D5E2F4]/50 shadow-sm p-12 text-center text-[#64779F] font-bold">
            <p>Records are currently being updated.</p>
          </div>
        ) : (
          <div className="bg-white border border-[#D5E2F4]/50 rounded-2xl overflow-hidden shadow-sm">
            {/* Header */}
            <div className="grid grid-cols-[1fr_auto] gap-4 items-center px-8 py-4 bg-[#18357a]">
              <span className="text-[10px] font-black text-white/70 uppercase tracking-widest">Department</span>
              <span className="text-[10px] font-black text-white/70 uppercase tracking-widest">Records</span>
            </div>
            {departments.map((dept) => (
              <div key={dept.name} className="border-b border-[#F1F5FB] last:border-b-0 hover:bg-[#F8FAFC] transition-colors group">
                <Link to={`/department/${encodeURIComponent(dept.name.toLowerCase())}`} className="w-full flex items-center px-8 py-5">
                  <div>
                    <span className="font-black text-[#18357a] group-hover:text-[#ffc107] transition-colors text-base tracking-tight block">
                      {dept.name}
                    </span>
                    <span className="text-[10px] font-bold text-[#64779F] uppercase tracking-widest mt-0.5 block">View Reports</span>
                  </div>
                  <ChevronRight size={20} className="ml-auto text-[#D5E2F4] group-hover:text-[#ffc107] transition-all group-hover:translate-x-1" />
                </Link>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

export default PlacementRecordsSection
