import React, { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowLeft, FileText, Download, Building2, AlertCircle, ArrowRight } from 'lucide-react'
import { courseData } from '../data/courseData'

const API_BASE = 'http://localhost:8000'

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
    <div className="min-h-screen bg-[#F8FAFC] pb-24">
      {/* Hero Header */}
      <div className="bg-[#18357a] text-white pt-32 pb-20 px-6 sm:px-10 lg:px-20 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#ffc107]/5 rounded-full blur-3xl -mr-64 -mt-64" />
        <div className="relative z-10 max-w-7xl mx-auto">
          <Link to="/records" className="inline-flex items-center gap-2 text-white/70 hover:text-[#ffc107] font-bold text-sm mb-8 transition-colors group">
            <ArrowLeft size={18} className="transition-transform group-hover:-translate-x-1" /> Back to Outcomes
          </Link>
          <div className="flex items-center gap-4 mb-6">
            <div className="h-14 w-14 rounded-2xl bg-[#ffc107] flex items-center justify-center shadow-lg shadow-[#ffc107]/20">
              <Building2 size={24} className="text-[#18357a]" />
            </div>
            <h1 className="text-4xl md:text-5xl font-black uppercase tracking-tighter">
              {departmentName}
            </h1>
          </div>
          <p className="max-w-2xl text-white/60 text-lg font-medium leading-relaxed uppercase tracking-wider">
             Department of Engineering & Technology
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-20 mt-12 space-y-16 relative z-20">
        {/* ─── RECORDS SECTION ─── */}
        <div>
          <h2 className="text-2xl font-black text-[#18357a] mb-8 flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-[#ffc107] flex items-center justify-center shadow-sm">
                <FileText size={18} className="text-[#18357a]" />
              </div>
              PLACEMENT RECORDS ARCHIVE
          </h2>

          {loading ? (
            <div className="bg-white rounded-[2rem] p-24 flex items-center justify-center shadow-2xl">
              <motion.div animate={{ rotate: 360 }} transition={{ duration: 1, repeat: Infinity, ease: 'linear' }} className="w-12 h-12 border-4 border-[#18357a] border-t-[#ffc107] rounded-full" />
            </div>
          ) : error ? (
            <div className="bg-red-50 border border-red-200 rounded-[2rem] p-20 text-center shadow-lg">
              <AlertCircle size={48} className="mx-auto text-red-400 mb-4" />
              <p className="text-red-600 font-black text-xl">{error}</p>
            </div>
          ) : records.filter(r => r.batch_year !== 'DEPT_INTERNAL' && r.pdf_url).length === 0 ? (
            <div className="bg-slate-50 border border-[#D5E2F4] rounded-[2rem] p-20 text-center shadow-inner">
              <FileText size={52} className="mx-auto text-[#64779F]/30 mb-4" />
              <h3 className="text-2xl font-black text-[#18357a]">No reports found</h3>
              <p className="text-[#64779F] font-bold mt-2">Departmental reports for {departmentName.toUpperCase()} are currently being updated.</p>
            </div>
          ) : (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {records
                .filter(r => r.batch_year !== 'DEPT_INTERNAL' && r.pdf_url)
                .sort((a,b) => (a.serial_number || 0) - (b.serial_number || 0))
                .map((record) => {
                  return (
                    <motion.div 
                      key={record.id}
                      initial={{ opacity: 0, y: 15 }}
                      whileHover={{ y: -5 }}
                      onClick={() => window.open(record.pdf_url, '_blank')}
                      className="group relative bg-white border border-[#D5E2F4]/50 rounded-[2rem] p-8 hover:shadow-2xl hover:border-[#18357a]/20 transition-all cursor-pointer"
                    >
                      <div className="flex items-center gap-5 mb-6">
                          <div className="h-14 w-14 rounded-2xl bg-[#18357a]/5 text-[#18357a] flex items-center justify-center shrink-0 group-hover:bg-[#ffc107] transition-all duration-300">
                            <FileText size={28} />
                          </div>
                          <div className="text-left">
                              <h3 className="text-xl font-black text-[#18357a] group-hover:text-[#18357a] transition-colors leading-tight uppercase">BATCH {record.batch_year}</h3>
                              <p className="text-[#A9B1C3] font-black uppercase text-[10px] tracking-[0.2em] leading-none mt-2">PDF ARCHIVE</p>
                          </div>
                      </div>
                      
                      <a 
                        href={record.pdf_url}
                        onClick={(e) => e.stopPropagation()}
                        className="flex items-center justify-center gap-2 py-4 bg-[#F8FAFC] border border-[#D5E2F4] rounded-2xl text-[11px] font-black text-[#64779F] hover:bg-[#18357a] hover:!text-white hover:border-[#18357a] transition-all transform active:scale-95 shadow-sm"
                      >
                        <FileText size={16} /> VIEW REPORT
                      </a>
                    </motion.div>
                  );
                })}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default DepartmentPage
