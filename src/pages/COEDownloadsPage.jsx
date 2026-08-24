import React from 'react'
import { motion } from 'framer-motion'
import { Download, FileText, Search, ArrowLeft, Calendar } from 'lucide-react'
import { useNavigate } from 'react-router-dom'

// COE PDFs served from public/ — NOT bundled as JS imports
const duplicateGSCGSPdf = '/assets/COE/SR_02_Application_for_Duplicate_GS_CGS.pdf'
const eseCourseWithdrawalPdf = '/assets/COE/SR_03_ESE_Course_Withdrawal.pdf'
const cgpaToPercentagePdf = '/assets/COE/CGPA_to_Percentage.pdf'

const COEDownloadsPage = () => {
    const navigate = useNavigate();
    const [searchTerm, setSearchTerm] = React.useState('')

    const downloadItems = [
        {
            id: 1,
            title: "Application for Grade Sheet Correction",
            category: "EXAMINATION FORMS",
            fileSize: "156 KB",
            updatedDate: "2024-25",
            file: null
        },
        {
            id: 2,
            title: "Application for duplicate Grade Sheet / Consolidated Grade Sheet",
            category: "EXAMINATION FORMS",
            fileSize: "182 KB",
            updatedDate: "2024-25",
            file: duplicateGSCGSPdf
        },
        {
            id: 3,
            title: "Application for transcripts",
            category: "EXAMINATION FORMS",
            fileSize: "144 KB",
            updatedDate: "2024-25",
            file: null
        },
        {
            id: 4,
            title: "Certificate for CGPA to percentage of marks",
            category: "EXAMINATION FORMS",
            fileSize: "128 KB",
            updatedDate: "2024-25",
            file: cgpaToPercentagePdf
        },
        {
            id: 5,
            title: "Application for withdrawal of courses from ESE",
            category: "EXAMINATION FORMS",
            fileSize: "165 KB",
            updatedDate: "2024-25",
            file: eseCourseWithdrawalPdf
        }
    ]

    const filteredDownloads = downloadItems.filter(item => 
        item.title.toLowerCase().includes(searchTerm.toLowerCase())
    )

    return (
        <div className="min-h-screen bg-[#F4F7FE] pt-12 pb-24 font-graphik">
            <div className="max-w-7xl mx-auto px-6">
                
                {/* ─── HEADER ─── */}
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-12">
                    <div className="max-w-2xl">
                        <h1 className="text-4xl lg:text-5xl font-black text-[#224292] tracking-tight leading-tight">
                            Exams <span className="text-[#ffc107]">Downloads</span>
                        </h1>
                    </div>

                    <div className="flex items-center gap-3">
                        <div className="relative group self-end">
                            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-[#224292]/30 group-focus-within:text-[#224292] transition-colors" size={18} />
                            <input 
                                type="text" 
                                placeholder="Search forms..." 
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                                className="pl-12 pr-6 py-3.5 bg-white rounded-2xl border border-slate-200/60 shadow-xl shadow-blue-900/5 focus:ring-2 focus:ring-[#224292]/5 focus:border-[#224292]/20 outline-none w-full md:w-80 font-bold text-xs"
                            />
                        </div>
                    </div>
                </div>

                {/* ─── DOWNLOADS GRID ─── */}
                <div className="flex flex-wrap justify-center gap-4 md:gap-8">
                    {filteredDownloads.map((item, idx) => (
                        <motion.div
                            key={item.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: idx * 0.1 }}
                            onClick={() => item.file && window.open(item.file, '_blank')}
                            className={`group bg-white rounded-[1.5rem] md:rounded-[2rem] p-6 md:p-8 border border-slate-100 shadow-xl shadow-blue-900/5 hover:shadow-2xl hover:shadow-blue-900/10 transition-all cursor-pointer relative overflow-hidden flex flex-col w-full md:w-[calc(33.33%-2rem)] lg:max-w-[380px] min-h-[160px] md:min-h-[220px] ${!item.file ? 'opacity-60 cursor-not-allowed' : ''}`}
                        >
                            <div className="absolute top-0 right-0 w-24 h-24 bg-red-500/[0.02] rounded-bl-full -mr-12 -mt-12 group-hover:bg-red-500/5 transition-colors" />
                            
                            <div className="space-y-4 relative z-10 flex-1 flex flex-col justify-between">
                                <h3 className="text-[14px] md:text-[15px] font-black text-black leading-snug tracking-tight">
                                    {item.title}
                                </h3>

                                <button 
                                    disabled={!item.file}
                                    className={`w-full mt-4 md:mt-6 py-2.5 md:py-3 rounded-xl md:rounded-2xl font-black text-[9px] md:text-[10px] uppercase tracking-[0.1em] flex items-center justify-center gap-2 md:gap-3 transition-all ${
                                        item.file 
                                        ? 'bg-[#224292] text-white shadow-lg shadow-blue-900/20 hover:bg-[#ffc107] hover:text-[#224292] active:scale-95 group/btn' 
                                        : 'bg-slate-100 text-slate-400 border border-slate-200 cursor-not-allowed'
                                    }`}
                                >
                                    <div className={`flex items-center justify-center w-5 h-5 md:w-6 md:h-6 rounded-lg ${item.file ? 'bg-white/10 group-hover/btn:bg-[#224292]/10' : 'bg-slate-200'}`}>
                                        <FileText size={12} className={item.file ? 'text-red-400 group-hover/btn:text-red-600' : 'text-slate-300'} />
                                    </div>
                                    <span>{item.file ? 'Download PDF' : 'Not Available'}</span>
                                </button>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {filteredDownloads.length === 0 && (
                    <div className="py-24 flex flex-col items-center text-center">
                        <FileText size={64} className="text-slate-100 mb-6" />
                        <h3 className="text-2xl font-black text-[#224292] uppercase mb-2">No Forms Found</h3>
                        <p className="text-[#64779F] font-bold text-xs uppercase tracking-widest">Adjust your search to find the application you need.</p>
                    </div>
                )}

            </div>
        </div>
    )
}

export default COEDownloadsPage
