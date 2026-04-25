import React from 'react'
import { motion } from 'framer-motion'
import { FileText, ShieldCheck, ChevronRight, Download, ExternalLink, Award, Calendar, Users } from 'lucide-react'
import { Link } from 'react-router-dom'

// Import PDF Resources
import ugcFile from '../assets/resources/UGC-CONFIRMENT.pdf'
import auFile from '../assets/resources/ANNA-UNIVERSITY.pdf'
import mechBos from '../assets/resources/1.-MECH-BOS-Committee-Members.pdf'
import eceBos from '../assets/resources/2.-ECE-BOS-Composition.pdf'
import eeeBos from '../assets/resources/3.-EEE-BOS-Members.pdf'
import cseBos from '../assets/resources/4.-CSE-BOS-Compositions.pdf'
import civilBos from '../assets/resources/5.-Civil-BOS-Committee-Members-list.pdf'
import shBos from '../assets/resources/6.-SH-BOS-Members-list.pdf'
import mbaBos from '../assets/resources/7.-MBA-BOS-Members-list.pdf'
import campusImg from '../assets/main/kiot-campus.webp'

const AutonomousPage = () => {
    const [schedules, setSchedules] = React.useState([])
    const [loadingSchedules, setLoadingSchedules] = React.useState(true)

    React.useEffect(() => {
        const fetchSchedules = async () => {
            try {
                const response = await fetch('http://127.0.0.1:8000/curriculum-records/?category=Academic Schedule&department=INSTITUTIONAL')
                if (response.ok) {
                    const data = await response.json()
                    setSchedules(data)
                }
            } catch (error) {
                console.error('Error fetching schedules:', error)
            } finally {
                setLoadingSchedules(false)
            }
        }
        fetchSchedules()
    }, [])

    const handleDownload = async (e, url, title) => {
        e.stopPropagation()
        try {
            const response = await fetch(url)
            if (!response.ok) throw new Error('Download failed')
            const blob = await response.blob()
            const blobUrl = window.URL.createObjectURL(blob)
            const link = document.createElement('a')
            link.href = blobUrl
            link.download = `${title.replace(/\s+/g, '_')}.pdf`
            document.body.appendChild(link)
            link.click()
            document.body.removeChild(link)
            window.URL.revokeObjectURL(blobUrl)
        } catch (error) {
            console.error('Download error:', error)
            window.open(url, '_blank')
        }
    }

  return (
    <div className="min-h-screen bg-white font-graphik">
      {/* ─── MODERN HERO SECTION ─── */}
      <section className="relative h-[25vh] lg:h-[32vh] flex items-center justify-center overflow-hidden bg-[#0A1A3F]">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0">
          <motion.img 
            animate={{ scale: [1, 1.1] }}
            transition={{ duration: 10, repeat: Infinity, repeatType: "mirror", ease: "easeInOut" }}
            src={campusImg} 
            alt="KIOT Campus" 
            className="w-full h-full object-cover opacity-50 mix-blend-overlay"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0A1A3F]/80 via-[#0A1A3F]/30 to-[#0A1A3F]/85" />
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#ffc107]/10 rounded-full blur-[120px] -mr-48 -mt-48" />
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-white/5 rounded-full blur-[100px] -ml-32 -mb-32" />
          <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:24px_24px]" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
            >
                <div className="inline-flex items-center gap-3 px-4 py-2 bg-white/10 rounded-full mb-6 backdrop-blur-md border border-white/10 text-[#ffc107] text-[13px] font-graphik font-bold tracking-widest">
                    <ShieldCheck size={16} className="text-[#ffc107]" />
                    <span>Institutional Status</span>
                </div>
                
                <h1 className="text-3xl md:text-5xl lg:text-6xl font-graphik font-black text-white tracking-tighter leading-none mb-6">
                    Autonomous <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ffc107] via-[#fff1cc] to-[#ffc107] animate-gradient">Portal</span>
                </h1>

            </motion.div>
        </div>
      </section>

      {/* ─── CORE CONTENT SECTION ─── */}
      <section className="relative py-24 px-6 overflow-hidden bg-white">
        <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-20 items-start">
                {/* LEFT COLUMN: INSTITUTIONAL EVOLUTION */}
                <div className="space-y-12">
                    <div className="space-y-6">
                        <div className="inline-flex items-center gap-3 px-3 py-1 bg-[#18357a]/5 rounded-full">
                            <ShieldCheck size={14} className="text-[#18357a]" />
                            <span className="text-[9px] font-graphik font-bold text-[#18357a] tracking-widest leading-none">Journey of Excellence</span>
                        </div>
                        <h2 className="text-3xl font-graphik font-semibold text-[#18357a] tracking-tight leading-none">
                            Institutional <span className="text-[#ffc107]">Evolution</span>
                        </h2>
                        <div className="w-16 h-1.5 bg-[#ffc107] rounded-full" />
                    </div>

                    <div className="space-y-8">
                        <p className="font-graphik text-[16px] leading-[1.8] text-[#333333] font-normal text-justify">
                            Knowledge Institute of Technology (KIOT) is a self-financing engineering institution established in 2009. KIOT is approved by AICTE, New Delhi and affiliated to Anna University, Chennai. The college is accredited with NAAC with ‘A’ Grade and B.E. MECH, ECE, EEE and CSE programs are accredited by NBA.
                        </p>

                        <p className="font-graphik text-[16px] leading-[1.8] text-[#333333] font-normal text-justify">
                            KIOT has reached a significant milestone in its journey of academic excellence by becoming an <span className="font-semibold text-[#18357a]">Autonomous institution</span> from the academic year <span className="text-[#ffc107] font-semibold">2022-2023</span>. This transformation empowers us to define innovative curricula and educational frameworks aligned with global industrial standards.
                        </p>
                    </div>
                </div>

                {/* RIGHT COLUMN: AUTONOMOUS APPROVAL */}
                <div className="space-y-12">
                    <div className="space-y-6">
                        <div className="inline-flex items-center gap-3 px-3 py-1 bg-[#ffc107]/10 rounded-full">
                            <FileText size={14} className="text-[#18357a]" />
                            <span className="text-[9px] font-graphik font-bold text-[#18357a] tracking-widest leading-none">Formal Certification</span>
                        </div>
                        <h3 className="text-3xl font-graphik font-semibold text-[#18357a] tracking-tight leading-none">
                            Autonomous <span className="text-[#ffc107]">Approval</span>
                        </h3>
                        <div className="w-16 h-1.5 bg-[#ffc107] rounded-full" />
                    </div>

                    <div className="grid gap-4">
                        {[
                            { title: 'UGC Approval', desc: 'University Grants Commission Certification', file: ugcFile },
                            { title: 'Anna University Approval', desc: 'Affiliated University Clearance', file: auFile }
                        ].map((doc, idx) => (
                            <motion.div 
                                key={idx}
                                whileHover={{ x: 10 }}
                                className="p-6 rounded-[2rem] bg-white border border-slate-100 shadow-xl shadow-slate-200/20 group hover:border-[#ffc107] transition-all duration-500 relative overflow-hidden max-w-md"
                            >
                                <div className="flex items-center gap-5">
                                    <div className="w-14 h-14 bg-slate-50 rounded-2xl flex items-center justify-center group-hover:bg-[#18357a] group-hover:text-white transition-all shadow-inner shrink-0">
                                        <FileText size={24} />
                                    </div>
                                     <div className="flex-1">
                                        <h4 className="text-[15px] font-graphik font-bold text-[#18357a] tracking-tight mb-1 group-hover:text-[#ffc107] transition-colors">{doc.title}</h4>
                                        <p className="text-[11px] font-graphik font-bold text-black/60 leading-none">{doc.desc}</p>
                                    </div>
                                </div>
                                
                                <div className="mt-6 flex gap-3">
                                    <button 
                                        onClick={(e) => handleDownload(e, doc.file, doc.title)}
                                        className="w-52 h-12 bg-slate-50 hover:bg-[#18357a] text-[#18357a] hover:text-white rounded-xl flex items-center justify-center gap-2 transition-all duration-300 font-graphik font-semibold text-[10px] tracking-wider shadow-sm group/btn"
                                    >
                                        <Download size={14} className="group-hover/btn:text-white transition-colors" />
                                        <span className="group-hover/btn:text-white transition-colors">Download PDF</span>
                                    </button>
                                    <a 
                                        href={doc.file} 
                                        target="_blank" 
                                        rel="noopener noreferrer"
                                        className="w-12 h-12 bg-[#ffc107] hover:bg-[#18357a] text-[#18357a] hover:text-white rounded-xl flex items-center justify-center transition-all duration-300 shadow-lg shadow-[#ffc107]/20 active:scale-95 text-center group/ext"
                                    >
                                        <ExternalLink size={18} className="group-hover/ext:text-white transition-colors" />
                                    </a>
                                </div>

                                {/* Watermark Sequential Number */}
                                <div className="absolute top-1/2 -right-4 -translate-y-1/2 text-7xl font-black text-[#18357a]/[0.02] pointer-events-none select-none italic group-hover:text-[#ffc107]/5 transition-colors">
                                    0{idx + 1}
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>

            {/* ─── ACADEMIC SCHEDULE SECTION ─── */}
            {/* ─── STATUTORY RECORDS GRID (SCHEDULE & BOS) ─── */}
            <div className="mt-12 pt-12 border-t border-slate-100">
                <div className="grid lg:grid-cols-2 gap-12 items-start">
                    {/* LEFT COLUMN: ACADEMIC SCHEDULE */}
                    <div className="space-y-8">
                        <div className="flex items-center gap-4">
                             <div className="w-10 h-10 bg-[#18357a] rounded-xl flex items-center justify-center text-[#ffc107]">
                                <Calendar size={20} />
                             </div>
                             <div>
                                <h3 className="text-xl font-graphik font-semibold text-[#18357a] tracking-tight">Academic <span className="text-[#ffc107]">Schedule</span></h3>
                             </div>
                        </div>

                        <div className="overflow-hidden rounded-xl border border-slate-100 shadow-xl shadow-slate-200/10 bg-white">
                            <table className="w-full text-center border-collapse">
                                <thead>
                                    <tr className="bg-[#18357a]">
                                        <th className="px-4 py-4 text-[10px] font-graphik font-semibold text-white tracking-[1.5px] text-center">Academic Year</th>
                                        <th className="px-4 py-4 text-[10px] font-graphik font-semibold text-white tracking-[1.5px] text-center">Semester</th>
                                        <th className="px-4 py-4 text-[10px] font-graphik font-semibold text-white tracking-[1.5px] text-center">Schedule</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-slate-50">
                                    {loadingSchedules ? (
                                        <tr>
                                            <td colSpan="3" className="px-8 py-8 text-center">
                                                <div className="flex items-center justify-center gap-2 text-[#18357a] font-black text-[9px] tracking-widest animate-pulse">
                                                    <div className="w-1.5 h-1.5 bg-[#ffc107] rounded-full animate-bounce" />
                                                    Synchronizing...
                                                </div>
                                            </td>
                                        </tr>
                                    ) : schedules.length > 0 ? (
                                        schedules.map((row, i) => (
                                            <tr 
                                                key={i} 
                                                onClick={() => window.open(row.pdf_url, '_blank')}
                                                className={`group transition-all duration-300 cursor-pointer hover:bg-[#18357a]/5 ${i % 2 === 1 ? 'bg-[#18357a]/[0.06]' : 'bg-white'}`}
                                            >
                                                <td className="px-4 py-4 text-center">
                                                    <span className="text-[13px] font-graphik font-semibold text-black tracking-tight group-hover:text-[#ffc107] transition-all">
                                                        {row.year_or_version}
                                                    </span>
                                                </td>
                                                <td className="px-4 py-4 text-center">
                                                    <span className="text-[11px] font-graphik font-semibold text-black/60 tracking-widest group-hover:text-[#ffc107] transition-all">
                                                        {row.semester}
                                                    </span>
                                                </td>
                                                <td className="px-4 py-4 text-center flex items-center justify-center">
                                                    <button 
                                                        onClick={(e) => handleDownload(e, row.pdf_url, `Academic_Schedule_${row.year_or_version}_${row.semester}`)}
                                                        className="w-8 h-8 rounded-lg bg-slate-50 flex items-center justify-center text-[#18357a]/40 group-hover:bg-[#ffc107] group-hover:text-[#18357a] transition-all shadow-inner relative z-10"
                                                        title="Download PDF"
                                                    >
                                                        <Download size={14} />
                                                    </button>
                                                </td>
                                            </tr>
                                        ))
                                    ) : (
                                        <tr>
                                            <td colSpan="3" className="px-8 py-20 text-center text-slate-300 font-bold text-xs tracking-widest bg-slate-50/30">
                                                Timeline preparation in progress.
                                            </td>
                                        </tr>
                                    )}
                                </tbody>
                            </table>
                        </div>
                    </div>

                    {/* RIGHT COLUMN: BOARD OF STUDIES */}
                    <div className="space-y-8">
                         <div className="flex items-center gap-4">
                             <div className="w-10 h-10 bg-[#ffc107] rounded-xl flex items-center justify-center text-[#18357a]">
                                <Users size={20} />
                             </div>
                             <div>
                                <h3 className="text-xl font-graphik font-semibold text-[#18357a] tracking-tight">Board of Studies <span className="text-[#ffc107]">(BoS)</span></h3>
                             </div>
                        </div>

                        <div className="overflow-hidden rounded-xl border border-slate-100 shadow-xl shadow-slate-200/10 bg-white">
                            <table className="w-full text-center border-collapse">
                                <thead>
                                    <tr className="bg-[#18357a]">
                                        <th className="px-4 py-5 text-[10px] font-graphik font-semibold text-white tracking-[2px] w-20 text-center">S.No</th>
                                        <th className="px-4 py-5 text-[10px] font-graphik font-semibold text-white tracking-[2px] text-center">Board of Studies (BoS)</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-slate-50">
                                    {[
                                        { name: "Mechanical Engineering", file: mechBos },
                                        { name: "Electronics and Communication Engineering", file: eceBos },
                                        { name: "Electrical and Electronics Engineering", file: eeeBos },
                                        { name: "Computer Science and Engineering", file: cseBos },
                                        { name: "Civil Engineering", file: civilBos },
                                        { name: "Science and Humanities", file: shBos },
                                        { name: "Management Studies", file: mbaBos }
                                    ].map((faculty, idx) => (
                                        <tr 
                                            key={idx} 
                                            onClick={() => window.open(faculty.file, '_blank')}
                                            className={`group transition-all duration-300 cursor-pointer hover:bg-[#18357a]/5 ${idx % 2 === 1 ? 'bg-[#18357a]/[0.06]' : 'bg-white'}`}
                                        >
                                            <td className="px-4 py-4 text-center">
                                                <span className="text-[14px] font-graphik font-semibold text-black/50 transition-all">
                                                    {idx + 1}
                                                </span>
                                            </td>
                                            <td className="px-4 py-4 text-center">
                                                <span className="text-[13px] font-graphik font-semibold text-black tracking-tight group-hover:text-[#ffc107] transition-all text-left">
                                                    {faculty.name}
                                                </span>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>

                <div className="mt-12 p-8 rounded-[2rem] bg-[#18357a] relative overflow-hidden group">
                     <div className="absolute inset-0 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:20px_20px] opacity-[0.03]" />
                     <div className="relative z-10 text-center md:text-left">
                        <div>
                             <h4 className="text-white font-graphik font-semibold text-lg tracking-tight mb-2">Academic CDDA Integration</h4>
                             <p className="text-white/60 text-[13px] font-graphik font-medium leading-relaxed max-w-2xl">
                                 The Board of Studies ensures academic excellence through rigorous curriculum review and industry-aligned committee supervision.
                             </p>
                        </div>
                     </div>
                </div>
            </div>
        </div>
      </section>

    </div>
  )
}

export default AutonomousPage
