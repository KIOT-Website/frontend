import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { FileText, Download, Loader2, AlertCircle, Calendar } from 'lucide-react'

const API_BASE = import.meta.env.VITE_API_URL || 'http://localhost:8000'

const PlacementDetailsYearSection = () => {
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true)
        const res = await fetch(`${API_BASE}/placement-details-year/`)
        if (!res.ok) throw new Error('Failed to load placement details (year)')
        const result = await res.json()
        const sortedResult = [...result].sort((a, b) => b.batch_year.localeCompare(a.batch_year))
        setData(sortedResult)
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
        <motion.div animate={{ rotate: 360 }} transition={{ duration: 1, repeat: Infinity, ease: 'linear' }} className="w-12 h-12 border-4 border-[#224292] border-t-[#ffc107] rounded-full" />
      </section>
    )
  }

  if (error) {
    return (
      <section className="py-24 px-6 max-w-4xl mx-auto">
        <div className="bg-red-50 border border-red-200 rounded-[2rem] p-10 text-center text-red-600 font-bold">
          <AlertCircle size={40} className="mx-auto text-red-400 mb-4" />
          <p>{error}</p>
        </div>
      </section>
    )
  }

  return (
    <div className="">
      <div className="text-center mb-10 h-24 flex items-center justify-center">
        <h2 className="text-xl md:text-3xl font-semibold text-[#224292] flex flex-wrap items-center justify-center gap-2 tracking-tighter">
          Placement Details <span className="text-[#ffc107]">(Batch Year)</span>
        </h2>
      </div>
      <div className="max-w-7xl mx-auto">
        {data.length === 0 ? (
          <div className="bg-white rounded-[2rem] border border-[#D5E2F4]/50 shadow-sm p-12 text-center text-black font-semibold min-h-[200px] flex items-center justify-center">
            <p>Annual placement reports are currently being updated.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">


            {data.map((record, idx) => (
              <motion.a
                href={record.pdf_url}
                target="_blank"
                rel="noopener noreferrer"
                key={record.id}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.05 }}
                className="grid grid-cols-[1fr_auto] gap-4 items-center px-8 py-3.5 bg-white border border-slate-100 rounded-xl shadow-sm hover:shadow-md hover:border-[#224292]/10 transition-all group cursor-pointer"
              >
                {/* Info */}
                <div>
                  <p className="text-base font-medium text-[#224292] tracking-tight group-hover:text-[#ffc107] transition-colors">
                    {record.batch_year}
                  </p>
                  <p className="text-[10px] font-medium text-black uppercase tracking-widest mt-0.5">Placement Report</p>
                </div>

                {/* Actions */}
                <div className="flex items-center">
                  <div
                    className="px-4 py-2 rounded-xl bg-[#ffc107]/20 text-[#224292] group-hover:bg-[#ffc107] group-hover:shadow-lg transition-all transform group-active:scale-95 shadow-sm"
                    title="View Report"
                  >
                    <span className="text-xs font-bold uppercase tracking-wider">View</span>
                  </div>
                </div>
              </motion.a>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

export default PlacementDetailsYearSection
