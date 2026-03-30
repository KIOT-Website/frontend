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
        <motion.div animate={{ rotate: 360 }} transition={{ duration: 1, repeat: Infinity, ease: 'linear' }} className="w-12 h-12 border-4 border-[#18357a] border-t-[#ffc107] rounded-full" />
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
    <div className="mb-20">
      <div className="text-center mb-10">
        <h2 className="text-3xl md:text-4xl font-black text-[#18357a] uppercase tracking-tighter">
          Placement detailes (year)
        </h2>
      </div>
      <div className="max-w-6xl mx-auto">
        {data.length === 0 ? (
          <div className="bg-white rounded-[2rem] border border-[#D5E2F4]/50 shadow-sm p-12 text-center text-[#64779F] font-bold">
            <p>Annual placement reports are currently being updated.</p>
          </div>
        ) : (
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {data.map((record) => (
              <a
                key={record.id}
                href={record.pdf_url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center justify-center p-8 bg-white border border-[#D5E2F4]/50 rounded-[2rem] hover:border-[#ffc107] hover:shadow-2xl transition-all group relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-24 h-24 bg-[#ffc107]/5 rounded-bl-full group-hover:bg-[#ffc107]/10 transition-colors" />
                
                <div className="h-16 w-16 mb-6 rounded-2xl bg-[#18357a]/5 text-[#18357a] flex items-center justify-center group-hover:bg-[#ffc107] transition-all duration-500">
                  <Calendar size={32} />
                </div>
                
                <p className="text-xl font-black text-[#18357a] mb-2">{record.batch_year}</p>
                <p className="text-xs font-bold text-[#64779F] uppercase tracking-widest text-center">Placement Report</p>
                
                <div className="mt-8 h-10 w-10 rounded-full bg-[#18357a]/5 flex items-center justify-center group-hover:bg-[#18357a] group-hover:text-white transition-all transform group-hover:scale-110">
                  <Download size={20} />
                </div>
              </a>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

export default PlacementDetailsYearSection
