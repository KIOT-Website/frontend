import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { FileText, Download, Loader2, AlertCircle, Calendar } from 'lucide-react'

const API_BASE = 'http://localhost:8000'

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
      <div className="max-w-6xl mx-auto">
        {data.length === 0 ? (
          <div className="bg-white rounded-[2rem] border border-[#D5E2F4]/50 shadow-sm p-12 text-center text-black font-semibold min-h-[200px] flex items-center justify-center">
            <p>Annual placement reports are currently being updated.</p>
          </div>
        ) : (
          <div className="bg-white border border-[#D5E2F4]/50 rounded-2xl overflow-hidden shadow-sm">
            {/* Header */}
            <div className="grid grid-cols-[1fr_auto] gap-4 items-center px-8 py-4 bg-[#224292]">
              <span className="text-[10px] font-semibold text-white/70 uppercase tracking-widest">Batch Year</span>
              <span className="text-[10px] font-semibold text-white/70 uppercase tracking-widest">Report</span>
            </div>

            {data.map((record, idx) => (
              <motion.div
                key={record.id}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.05 }}
                className="grid grid-cols-[1fr_auto] gap-4 items-center px-8 py-5 border-b border-[#F1F5FB] last:border-b-0 hover:bg-[#F8FAFC] transition-colors group"
              >
                {/* Info */}
                <div>
                  <p className="text-base font-medium text-[#224292] tracking-tight group-hover:text-[#ffc107] transition-colors">
                    {record.batch_year}
                  </p>
                  <p className="text-[10px] font-medium text-black uppercase tracking-widest mt-0.5">Placement Report</p>
                </div>

                {/* Actions */}
                <div className="flex items-center gap-2">
                  <a
                    href={record.pdf_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ backgroundColor: '#ffc107', color: '#224292' }}
                    onMouseEnter={e => { e.currentTarget.style.backgroundColor = '#224292'; e.currentTarget.style.color = '#ffc107' }}
                    onMouseLeave={e => { e.currentTarget.style.backgroundColor = '#ffc107'; e.currentTarget.style.color = '#224292' }}
                    className="flex items-center gap-2 px-5 py-2.5 text-[10px] font-medium uppercase tracking-widest rounded-xl transition-all active:scale-95 shadow-sm"
                  >
                    View
                  </a>
                  <a
                    href={record.pdf_url?.replace('/upload/', '/upload/fl_attachment/')}
                    className="p-2.5 bg-slate-50 border border-slate-100 text-slate-400 hover:text-[#224292] hover:border-[#224292]/20 rounded-xl transition-all"
                    title="Download"
                  >
                    <Download size={15} />
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

export default PlacementDetailsYearSection
