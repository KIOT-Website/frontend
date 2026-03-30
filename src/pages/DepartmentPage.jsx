import React, { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowLeft, FileText, Download, Building2, AlertCircle } from 'lucide-react'

const API_BASE = 'http://127.0.0.1:8000'

const DepartmentPage = () => {
  const { deptName: departmentName } = useParams()
  const [records, setRecords] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

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
          <Link to="/placement-records" className="inline-flex items-center gap-2 text-white/70 hover:text-[#ffc107] font-bold text-sm mb-8 transition-colors group">
            <ArrowLeft size={18} className="transition-transform group-hover:-translate-x-1" /> Back to Records
          </Link>
          <div className="flex items-center gap-4 mb-6">
            <div className="h-14 w-14 rounded-2xl bg-[#ffc107] flex items-center justify-center shadow-lg shadow-[#ffc107]/20">
              <Building2 size={24} className="text-[#18357a]" />
            </div>
            <h1 className="text-4xl md:text-5xl font-black uppercase tracking-tighter">
              {departmentName}
            </h1>
          </div>
          <p className="max-w-2xl text-white/60 text-lg font-medium leading-relaxed">
            Archive of yearly placement performance reports and student record statistics specifically for the {departmentName} department.
          </p>
        </div>
      </div>

      {/* Records Section */}
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-20 -mt-10 relative z-20">
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
          <div className="bg-white rounded-[2rem] p-20 text-center shadow-2xl border border-[#D5E2F4]/30">
            <FileText size={52} className="mx-auto text-[#64779F]/30 mb-4" />
            <h3 className="text-2xl font-black text-[#18357a]">No reports found</h3>
            <p className="text-[#64779F] font-bold mt-2">Annual reports are currently being updated by the placement cell.</p>
          </div>
        ) : (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {records
              .filter(r => r.batch_year !== 'DEPT_INTERNAL' && r.pdf_url)
              .sort((a,b) => a.serial_number - b.serial_number)
              .map((record) => {
                // Force Cloudinary download by adding fl_attachment transformation
                const downloadUrl = record.pdf_url.replace('/upload/', '/upload/fl_attachment/');
                
                return (
                  <motion.div 
                    key={record.id}
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    onClick={() => window.open(record.pdf_url, '_blank')}
                    className="group relative bg-white border border-[#D5E2F4]/50 rounded-[1.5rem] p-6 hover:shadow-xl hover:border-[#18357a]/20 transition-all cursor-pointer"
                  >
                    <div className="flex items-center gap-4 mb-4">
                        <div className="h-12 w-12 rounded-xl bg-[#18357a]/8 text-[#18357a] flex items-center justify-center shrink-0 group-hover:bg-[#ffc107] transition-all duration-300">
                          <FileText size={24} />
                        </div>
                        <div className="text-left">
                            <h3 className="text-lg font-black text-[#18357a] group-hover:text-[#18357a] transition-colors leading-tight">BATCH {record.batch_year}</h3>
                            <p className="text-[#64779F] font-black uppercase text-[10px] tracking-widest leading-none mt-1">PLACEMENT PDF ARCHIVE</p>
                        </div>
                    </div>
                    
                    <a 
                      href={downloadUrl}
                      onClick={(e) => e.stopPropagation()} // Prevent opening in new tab when clicking download
                      className="flex items-center justify-center gap-2 py-3 bg-[#F8FAFC] border border-[#D5E2F4] rounded-xl text-xs font-black text-[#64779F] hover:bg-[#18357a] hover:!text-white hover:border-[#18357a] transition-all transform active:scale-95 shadow-sm shadow-[#18357a]/5"
                    >
                      <Download size={14} /> DOWNLOAD REPORT
                    </a>
                  </motion.div>
                );
              })}
          </div>
        )}
      </div>
    </div>
  )
}

export default DepartmentPage
