import React, { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import { ArrowLeft, Users, FileText, Download, Loader2, AlertCircle } from 'lucide-react'

const API_BASE = import.meta.env.VITE_API_URL || 'http://localhost:8000'

const StudentsAdmittedDepartmentPage = () => {
  const { deptName } = useParams()
  const decodedName = decodeURIComponent(deptName)

  const [department, setDepartment] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    // Scroll to top immediately to prevent layout jumping
    window.scrollTo(0, 0)
    
    const fetchDepartmentDetails = async () => {
      try {
        setLoading(true)
        setError(null)
        // Fetch via name using the students admitted endpoint
        const res = await fetch(`${API_BASE}/students-admitted-departments/name/${encodeURIComponent(decodedName)}`)
        if (!res.ok) {
          if (res.status === 404) throw new Error('Department not found')
          throw new Error('Failed to load department data')
        }
        const data = await res.json()
        setDepartment(data)
      } catch (err) {
        setError(err.message)
      } finally {
        setLoading(false)
      }
    }

    if (decodedName) {
      fetchDepartmentDetails()
    }
  }, [decodedName])

  return (
    <div className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 min-h-[60vh] flex flex-col items-center animate-in fade-in duration-500">
      <div className="text-center w-full">
        <div className="inline-flex h-20 w-20 items-center justify-center rounded-2xl bg-emerald-50 text-emerald-600 mb-8 border border-emerald-100">
          <Users size={40} />
        </div>
        
        <h1 className="text-4xl md:text-5xl font-black text-[#224292] mb-6 uppercase tracking-tight">
          {department?.name || decodedName}
        </h1>
        
        <p className="text-lg text-[#64779F] mb-12 max-w-2xl mx-auto">
          Welcome to the {department?.name || decodedName} department page. Below are the placement records specifically for students admitted.
        </p>

        {/* Section: Placement Records */}
        <div className="w-full max-w-5xl mx-auto mb-16 text-left">
          <h2 className="text-2xl font-bold text-[#224292] mb-6 border-b border-[#D5E2F4] pb-4">
            Students Admitted Records
          </h2>
          
          <div className="min-h-[200px] w-full relative">
            {loading ? (
              <div className="absolute inset-0 flex items-center justify-center">
                <Loader2 size={40} className="animate-spin text-emerald-600" />
              </div>
            ) : error ? (
              <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
                <AlertCircle size={40} className="text-red-400 mb-4" />
                <p className="text-red-600 font-bold text-lg">{error}</p>
              </div>
            ) : (
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {department?.yearly_records && department.yearly_records.length > 0 ? (
                  department.yearly_records.map((record) => (
                    <a
                      key={record.id}
                      href={record.pdf_url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-between p-5 bg-white border border-[#D5E2F4] rounded-2xl hover:border-emerald-600 hover:shadow-xl transition-all group"
                    >
                      <div className="flex items-center gap-4">
                        <div className="h-12 w-12 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center group-hover:bg-emerald-600 group-hover:text-white transition-colors">
                          <FileText size={24} />
                        </div>
                        <div>
                          <p className="text-sm font-black text-[#224292] uppercase tracking-wider">{record.batch_year}</p>
                          <p className="text-xs font-bold text-[#64779F]">Admissions Report</p>
                        </div>
                      </div>
                      <div className="h-8 w-8 rounded-full bg-emerald-50 flex items-center justify-center group-hover:bg-emerald-100 transition-colors">
                        <Download size={16} className="text-emerald-700" />
                      </div>
                    </a>
                  ))
                ) : (
                  <div className="col-span-full py-12 px-6 bg-gray-50 rounded-2xl border border-gray-100 text-center">
                    <FileText size={32} className="mx-auto text-gray-400 mb-3" />
                    <p className="text-[#64779F] font-bold">No placement records available for this department yet.</p>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>

        <Link
          to="/records"
          className="inline-flex items-center gap-2 bg-[#ffc107] text-[#224292] font-bold px-8 py-4 rounded-xl hover:bg-[#224292] hover:text-white transition-colors shadow-lg hover:shadow-xl group"
        >
          <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
          Back to Records
        </Link>
      </div>
    </div>
  )
}

export default StudentsAdmittedDepartmentPage
