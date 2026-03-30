import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Building2, FileText, Loader2, AlertCircle, ChevronDown, Download, Calendar } from 'lucide-react'

const API_BASE = 'http://localhost:8000'

const PlacementRecordsSection = () => {
  const [departments, setDepartments] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [expandedId, setExpandedId] = useState(null)

  useEffect(() => {
    const fetchDepartments = async () => {
      try {
        setLoading(true)
        const res = await fetch(`${API_BASE}/departments/`)
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

  const toggleExpand = (id) => {
    setExpandedId(expandedId === id ? null : id)
  }

  if (loading) {
    return (
      <section className="py-24 flex items-center justify-center min-h-[50vh]">
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

  if (departments.length === 0) return null

  return (
    <div className="mb-20">
      <div className="max-w-5xl mx-auto">
        {/* Table Header */}
        <div className="hidden md:grid grid-cols-[80px_1fr_100px] bg-[#18357a] text-white px-8 py-5 rounded-t-[2rem] text-xs font-black uppercase tracking-[0.2em]">
          <span>S.No</span>
          <span>Department Name</span>
          <span className="text-right">Batches</span>
        </div>

        {/* Department List */}
        <div className="bg-white rounded-b-[2rem] md:rounded-t-none md:border-x md:border-b border-[#D5E2F4]/50 shadow-2xl shadow-[#18357a]/5 overflow-hidden">
          {departments.map((dept, idx) => (
            <div key={dept.id} className="border-b border-[#D5E2F4]/30 last:border-0 hover:bg-[#F8FAFC] transition-colors">
              {/* Row Header */}
              <button 
                onClick={() => toggleExpand(dept.id)}
                className="w-full grid grid-cols-[60px_1fr_40px] md:grid-cols-[80px_1fr_100px] items-center px-6 md:px-8 py-6 text-left"
              >
                <span className="h-9 w-9 flex items-center justify-center rounded-xl bg-[#18357a]/5 text-[#18357a] font-black text-sm">
                  {dept.serial_number}
                </span>
                <span className="font-extrabold text-[#18357a] text-base md:text-lg tracking-tight">
                  {dept.name}
                </span>
                <div className="flex items-center justify-end gap-3">
                  <span className="hidden md:block text-[10px] font-black text-emerald-600 bg-emerald-50 px-2 py-1 rounded-md uppercase">
                    {dept.yearly_records?.length || 0} Years
                  </span>
                  <motion.div
                    animate={{ rotate: expandedId === dept.id ? 180 : 0 }}
                    className="text-[#A9B1C3]"
                  >
                    <ChevronDown size={20} />
                  </motion.div>
                </div>
              </button>

              {/* Expandable Section */}
              <AnimatePresence>
                {expandedId === dept.id && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="overflow-hidden bg-[#F8FAFC]/50"
                  >
                    <div className="px-8 pb-8 pt-2 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                      {dept.yearly_records && dept.yearly_records.length > 0 ? (
                        dept.yearly_records.map((record) => (
                          <a
                            key={record.id}
                            href={record.pdf_url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center justify-between p-4 bg-white border border-[#D5E2F4] rounded-2xl hover:border-[#18357a] hover:shadow-lg transition-all group"
                          >
                            <div className="flex items-center gap-3">
                              <div className="h-10 w-10 rounded-xl bg-[#18357a]/5 text-[#18357a] flex items-center justify-center group-hover:bg-[#18357a] group-hover:text-white transition-colors">
                                <FileText size={18} />
                              </div>
                              <div>
                                <p className="text-xs font-black text-[#18357a] uppercase tracking-wider">{record.batch_year}</p>
                                <p className="text-[10px] font-bold text-[#64779F]">Placement Report</p>
                              </div>
                            </div>
                            <Download size={16} className="text-[#A9B1C3] group-hover:text-[#ffc107] transition-colors" />
                          </a>
                        ))
                      ) : (
                        <div className="col-span-full py-6 text-center text-[#64779F] font-bold text-xs italic">
                          No reports available for this department yet.
                        </div>
                      )}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default PlacementRecordsSection
