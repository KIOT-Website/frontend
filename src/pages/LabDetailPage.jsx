import { useParams, useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowLeft, Wrench, Users, FlaskConical, X, CheckCircle } from 'lucide-react'
import { courseData } from '../data/courseData'

export default function LabDetailPage() {
  const { courseId, labIndex } = useParams()
  const navigate = useNavigate()
  const course = courseData[courseId]
  const idx = parseInt(labIndex)
  const lab = course?.labs[idx]

  if (!course || !lab) {
    return (
      <div className="min-h-screen flex items-center justify-center text-[#224292] flex-col gap-4">
        <h2 className="text-2xl font-black uppercase">Laboratory Not Found</h2>
        <button onClick={() => navigate('/academics')} className="px-6 py-2 bg-[#224292] text-white rounded-xl font-bold">Back to Academics</button>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-[#F8FAFC]" style={{ fontFamily: "'Inter', 'Outfit', sans-serif" }}>
      {/* Hero Header */}
      <section className="bg-[#224292] pt-12 pb-24 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10" style={{
          backgroundImage: 'radial-gradient(circle at 70% 80%, #ffc107 1.5px, transparent 1.5px)',
          backgroundSize: '48px 48px'
        }} />
         <div className="absolute -right-32 -top-32 w-[600px] h-[600px] rounded-full bg-[#ffc107]/5 pointer-events-none blur-3xl" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <button
            onClick={() => navigate(-1)}
            className="mb-8 inline-flex items-center gap-2 text-white/50 hover:text-white transition-all font-bold text-xs uppercase tracking-widest"
          >
            <ArrowLeft size={16} /> Back to Course
          </button>

          <div className="flex flex-col md:flex-row items-center gap-10">
            <div className="w-24 h-24 md:w-36 md:h-36 rounded-[2.5rem] bg-white/10 flex items-center justify-center shrink-0 border border-white/20 backdrop-blur-md shadow-2xl relative">
              <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent rounded-[2.5rem]" />
              <lab.icon size={64} className="text-[#ffc107] relative z-10" />
            </div>
            <div className="text-center md:text-left">
              <div className="flex flex-wrap justify-center md:justify-start gap-3 mb-4">
                <span className="px-3 py-1 rounded-lg bg-[#ffc107]/20 border border-[#ffc107]/30 text-[#ffc107] text-[10px] font-black uppercase tracking-widest">
                  Department of {course.short}
                </span>
                <span className="px-3 py-1 rounded-lg bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-[10px] font-black uppercase tracking-widest">
                  Verified Facility
                </span>
              </div>
              <h1 className="text-3xl md:text-5xl font-black text-white mb-3 uppercase tracking-tight leading-[1.1]">
                {lab.name}
              </h1>
            </div>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 relative z-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Left Column: Equipments */}
            <div className="lg:col-span-2">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-white rounded-[3rem] shadow-2xl shadow-blue-900/5 border border-[#E5EDF8] p-8 md:p-14"
              >
                <div className="flex items-center gap-5 mb-14">
                  <div className="w-14 h-14 rounded-2xl bg-[#224292] flex items-center justify-center shadow-lg shadow-blue-900/20">
                    <Wrench size={28} className="text-[#ffc107]" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-black text-[#224292] uppercase leading-none tracking-tight">Technical Inventory</h2>
                    <p className="text-[#64779F] mt-2 text-sm font-semibold">Major industrial equipments and software tools</p>
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-5">
                  {lab.equipments?.map((item, idx) => (
                    <motion.div
                      key={item}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: idx * 0.05 }}
                      className="flex items-center gap-4 p-5 rounded-2xl bg-[#F8FAFC] border border-[#E5EDF8] hover:border-[#224292]/20 hover:shadow-lg hover:shadow-blue-900/5 transition-all group"
                    >
                      <div className="w-1.5 h-1.5 rounded-full bg-[#ffc107] group-hover:scale-150 transition-transform" />
                      <span className="text-[14px] font-bold text-[#224292] leading-snug group-hover:text-[#224292] transition-colors">{item}</span>
                    </motion.div>
                  ))}
                  {(!lab.equipments || lab.equipments.length === 0) && (
                    <div className="col-span-2 py-12 text-center border-2 border-dashed border-[#E5EDF8] rounded-[2rem]">
                      <FlaskConical size={40} className="mx-auto text-[#A9B1C3] mb-4 opacity-30" />
                      <p className="text-[#64779F] font-bold italic uppercase tracking-wider text-xs">Detailed Inventory Tracking Under Process</p>
                    </div>
                  )}
                </div>
              </motion.div>
            </div>

            {/* Right Column: Incharges & Meta */}
            <div className="space-y-8">
              {/* Personnel */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                className="bg-white rounded-[3rem] shadow-xl shadow-blue-900/5 border border-[#E5EDF8] p-10 overflow-hidden relative"
              >
                <div className="absolute top-0 right-0 w-40 h-40 bg-[#ffc107]/5 rounded-full -mr-16 -mt-16 blur-3xl" />
                
                <h3 className="text-[10px] font-black uppercase tracking-[0.25em] text-[#A9B1C3] mb-10">Laboratory Personnel</h3>
                
                <div className="space-y-10">
                  <div className="relative pl-8 border-l-4 border-[#ffc107]">
                    <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-white border-4 border-[#224292] shadow-sm" />
                    <p className="text-[10px] font-black uppercase tracking-[0.1em] text-[#64779F] mb-2">Lab In-Charge</p>
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-[#224292]/5 flex items-center justify-center">
                        <Users size={18} className="text-[#224292]" />
                      </div>
                      <p className="text-[#224292] font-black text-lg leading-tight">{lab.incharge || 'Prof. Faculty Name'}</p>
                    </div>
                  </div>

                  <div className="relative pl-8 border-l-4 border-[#224292]">
                    <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-white border-4 border-[#ffc107] shadow-sm" />
                    <p className="text-[10px] font-black uppercase tracking-[0.1em] text-[#64779F] mb-2">Lab Technician</p>
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-[#ffc107]/5 flex items-center justify-center">
                        <Wrench size={16} className="text-[#224292]" />
                      </div>
                      <p className="text-[#224292] font-black text-lg leading-tight">{lab.technician || 'Mr. Technical Staff'}</p>
                    </div>
                  </div>
                </div>
              </motion.div>

            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
