import React, { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowLeft, FileText, Download, Building2, AlertCircle } from 'lucide-react'
import { courseData } from '../data/courseData'

const API_BASE = import.meta.env.VITE_API_URL || 'http://localhost:8000'

const DepartmentPage = () => {
  const { deptName: departmentName } = useParams()
  const [records, setRecords] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  // Map department URL name to courseData key
  const getCourseId = (name) => {
    const n = name.toLowerCase()
    if (n.includes('mechanical') || n.includes('mech')) return 'be-mechanical'
    if (n.includes('computer') || n === 'cse') return 'be-cse'
    if (n.includes('electronics') || n === 'ece') return 'be-ece'
    if (n.includes('information') || n === 'it') return 'btech-it'
    if (n.includes('ai') || n.includes('data')) return 'btech-aids'
    if (n.includes('electrical') || n === 'eee') return 'be-eee'
    return null
  }

  const courseId = getCourseId(departmentName)
  const deptInfo = courseData[courseId]

  useEffect(() => {
    window.scrollTo(0, 0)
    const fetchRecords = async () => {
      try {
        setLoading(true)
        const res = await fetch(`${API_BASE}/placement-department-records/${encodeURIComponent(departmentName)}`)
        if (!res.ok) throw new Error('Failed to load department records')
        const data = await res.json()
        setRecords(data)
      } catch (err) {
        setError(err.message)
      } finally {
        setLoading(false)
      }
    }
    fetchRecords()
  }, [departmentName])

  return (
    <div className="min-h-screen bg-[#F8FAFC] pb-24 font-['Inter']">
      {/* Dynamic Hero Header */}
      <div className="relative overflow-hidden group">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <img 
            src={deptInfo?.bannerImage || "https://images.unsplash.com/photo-1562774053-701939374585?q=80&w=1920&auto=format&fit=crop"} 
            className="w-full h-full object-cover transform scale-110 group-hover:scale-100 transition-transform duration-1000 ease-out"
            alt={departmentName}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#224292]/95 via-[#224292]/80 to-transparent" />
          <div className="absolute inset-0 bg-[#224292]/40" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto pt-24 pb-16 px-6 sm:px-10 lg:px-20">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
          >
            <Link to="/records" className="inline-flex items-center gap-2 !text-white hover:text-[#ffc107] font-black text-sm mb-8 transition-colors group/back drop-shadow-md">
              <ArrowLeft size={20} className="transition-transform group-hover/back:-translate-x-1" /> Back to Outcomes
            </Link>
            <div className="flex items-center gap-6 mb-6">
              <div className="h-16 w-16 rounded-2xl bg-[#ffc107] flex items-center justify-center shadow-2xl shadow-[#ffc107]/20 rotate-3 group-hover:rotate-0 transition-all">
                {deptInfo?.icon ? React.createElement(deptInfo.icon, { size: 32, className: "text-[#224292]" }) : <Building2 size={32} className="text-[#224292]" />}
              </div>
              <div>
                <h1 className="text-4xl md:text-6xl font-black uppercase tracking-tighter text-white leading-tight">
                  {departmentName}
                </h1>
                <p className="text-[#ffc107] font-black uppercase tracking-[0.3em] text-sm mt-3 flex items-center gap-2">
                  <span className="w-8 h-[2px] bg-[#ffc107]/30" /> Department of Engineering
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>



      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-20 mt-20 space-y-20 relative z-10">
        {/* ─── RECORDS SECTION ─── */}
        <div>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div>
              <h2 className="text-3xl font-black text-[#224292] flex items-center gap-3 uppercase tracking-tighter">
                  <div className="w-10 h-10 rounded-xl bg-[#ffc107] flex items-center justify-center shadow-lg shadow-[#ffc107]/20">
                    <FileText size={20} className="text-[#224292]" />
                  </div>
                  Placement Archive
              </h2>
              <p className="text-slate-400 font-bold text-sm mt-3 uppercase tracking-widest ml-13">Verified Batch-wise Performance Reports</p>
            </div>
          </div>

          {loading ? (
            <div className="bg-white rounded-[3rem] p-40 flex flex-col items-center justify-center shadow-2xl border border-slate-100">
              <motion.div animate={{ rotate: 360 }} transition={{ duration: 1, repeat: Infinity, ease: 'linear' }} className="w-16 h-16 border-4 border-slate-100 border-t-[#224292] rounded-full mb-6" />
              <p className="font-black text-[#224292] text-xs uppercase tracking-widest animate-pulse">Synchronizing Database...</p>
            </div>
          ) : error ? (
            <div className="bg-red-50 border-2 border-red-100 rounded-[3rem] p-24 text-center shadow-xl">
              <div className="w-20 h-20 bg-red-100 rounded-3xl flex items-center justify-center mx-auto mb-6">
                <AlertCircle size={40} className="text-red-500" />
              </div>
              <h3 className="text-2xl font-black text-red-600 uppercase mb-2">Sync Error</h3>
              <p className="text-red-400 font-bold">{error}</p>
            </div>
          ) : records.filter(r => r.batch_year !== 'DEPT_INTERNAL' && r.pdf_url).length === 0 ? (
            <div className="bg-white border-2 border-dashed border-slate-200 rounded-[3rem] p-32 text-center">
              <div className="w-24 h-24 bg-slate-50 rounded-full flex items-center justify-center mx-auto mb-8 text-slate-200">
                <FileText size={48} strokeWidth={1} />
              </div>
              <h3 className="text-2xl font-black text-[#224292] uppercase mb-3">No Reports Indexed</h3>
              <p className="text-slate-400 font-bold max-w-md mx-auto">Electronic reports for {departmentName} are currently being processed by the administrative department.</p>
            </div>
          ) : (
            <div className="bg-white border border-slate-100 rounded-2xl overflow-hidden shadow-lg">
              {/* List Header */}
              <div className="grid grid-cols-[1fr_auto] gap-4 items-center px-8 py-4 bg-[#224292]">
                <span className="text-[10px] font-black text-white/70 uppercase tracking-widest">Batch Year</span>
                <span className="text-[10px] font-black text-white/70 uppercase tracking-widest">Report</span>
              </div>

              {records
                .filter(r => r.batch_year !== 'DEPT_INTERNAL' && r.pdf_url)
                .sort((a, b) => (a.serial_number || 0) - (b.serial_number || 0))
                .map((record, idx) => (
                  <motion.div
                    key={record.id}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.05 }}
                    className="grid grid-cols-[1fr_auto] gap-4 items-center px-8 py-5 border-b border-slate-50 last:border-b-0 hover:bg-[#F8FAFC] transition-colors group"
                  >
                    {/* Info */}
                    <div>
                      <p className="text-base font-black text-[#224292] uppercase tracking-tight group-hover:text-[#ffc107] transition-colors">
                        Batch {record.batch_year}
                      </p>
                      <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mt-0.5">Placement Report</p>
                    </div>

                    {/* Actions */}
                    <div className="flex items-center">
                      <a
                        href={record.pdf_url?.replace('/upload/', '/upload/fl_attachment/')}
                        target="_blank"
                        rel="noreferrer"
                        className="p-2.5 rounded-xl bg-[#ffc107]/20 text-[#224292] hover:bg-[#ffc107] hover:shadow-lg transition-all transform active:scale-95 shadow-sm"
                        title="Download Report"
                      >
                        <Download size={16} />
                      </a>
                    </div>
                  </motion.div>
                ))}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default DepartmentPage
