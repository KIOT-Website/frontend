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
    <div className="min-h-screen bg-white">
      {/* ─── MODERN HERO SECTION ─── */}
      <section className="relative h-[45vh] lg:h-[55vh] flex items-center justify-center overflow-hidden bg-[#18357a]">
        {/* Abstract Background Design */}
        <div className="absolute inset-0 z-0">
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
                <div className="inline-flex items-center gap-3 px-4 py-2 bg-white/10 rounded-full mb-6 backdrop-blur-md border border-white/20">
                    <ShieldCheck size={16} className="text-[#ffc107]" />
                    <span className="text-[10px] font-black text-white uppercase tracking-[4px]">Institutional Status</span>
                </div>
                
                <h1 className="text-4xl md:text-6xl font-black text-white uppercase tracking-tighter leading-none mb-6 font-display">
                    AUTONOMOUS <span className="text-[#ffc107]">PORTAL</span>
                </h1>

                {/* Breadcrumbs */}
                <div className="flex items-center justify-center gap-4 text-white/60 text-[10px] font-black uppercase tracking-[2px]">
                   <Link to="/" className="hover:text-[#ffc107] transition-colors">Home</Link>
                   <ChevronRight size={14} className="opacity-40" />
                   <span className="text-[#ffc107]">Autonomous</span>
                </div>
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
                            <span className="text-[9px] font-black text-[#18357a] uppercase tracking-widest leading-none">Journey of Excellence</span>
                        </div>
                        <h2 className="text-3xl font-black text-[#18357a] uppercase tracking-tight leading-none">
                            Institutional <span className="text-[#ffc107]">Evolution</span>
                        </h2>
                        <div className="w-16 h-1.5 bg-[#ffc107] rounded-full" />
                    </div>

                    <div className="space-y-10">
                        <div className="relative p-8 bg-slate-50 rounded-[2.5rem] border border-slate-100 group hover:bg-white hover:shadow-2xl hover:shadow-[#18357a]/10 transition-all duration-700">
                            <div className="absolute top-6 left-6 w-10 h-10 bg-white rounded-xl shadow-lg flex items-center justify-center text-[#ffc107]">
                                <Award size={20} />
                            </div>
                            <p className="font-inter text-[16px] leading-[1.8] text-[#333333] font-normal italic pl-4 border-l-4 border-[#ffc107] pt-10">
                                Knowledge Institute of Technology (KIOT) is a self-financing engineering institution established in 2009. KIOT is approved by AICTE, New Delhi and affiliated to Anna University, Chennai. The college is accredited with NAAC with ‘A’ Grade and B.E. MECH, ECE, EEE and CSE programs are accredited by NBA.
                            </p>
                        </div>

                        <p className="font-inter text-[16px] leading-[1.8] text-[#333333] font-normal px-4">
                            KIOT has reached a significant milestone in its journey of academic excellence by becoming an <span className="font-black text-[#18357a]">Autonomous institution</span> from the academic year <span className="text-[#ffc107] font-black">2022-2023</span>. This transformation empowers us to define innovative curricula and educational frameworks aligned with global industrial standards.
                        </p>
                    </div>
                </div>

                {/* RIGHT COLUMN: AUTONOMOUS APPROVAL */}
                <div className="space-y-12">
                    <div className="space-y-6">
                        <div className="inline-flex items-center gap-3 px-3 py-1 bg-[#ffc107]/10 rounded-full">
                            <FileText size={14} className="text-[#18357a]" />
                            <span className="text-[9px] font-black text-[#18357a] uppercase tracking-widest leading-none">Formal Certification</span>
                        </div>
                        <h3 className="text-3xl font-black text-[#18357a] uppercase tracking-tight leading-none">
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
                                className="p-6 rounded-[2rem] bg-white border border-slate-100 shadow-xl shadow-slate-200/20 group hover:border-[#ffc107] transition-all duration-500 relative overflow-hidden"
                            >
                                <div className="flex items-center gap-5">
                                    <div className="w-14 h-14 bg-slate-50 rounded-2xl flex items-center justify-center group-hover:bg-[#18357a] group-hover:text-white transition-all shadow-inner shrink-0">
                                        <FileText size={24} />
                                    </div>
                                    <div className="flex-1">
                                        <h4 className="text-[13px] font-black text-[#18357a] uppercase tracking-tight mb-0.5 group-hover:text-[#ffc107] transition-colors">{doc.title}</h4>
                                        <p className="text-[9px] font-bold text-slate-400 uppercase tracking-widest leading-none">{doc.desc}</p>
                                    </div>
                                </div>
                                
                                <div className="mt-6 flex gap-3">
                                    <button 
                                        onClick={(e) => handleDownload(e, doc.file, doc.title)}
                                        className="flex-1 h-12 bg-slate-50 hover:bg-[#18357a] text-[#18357a] hover:text-white rounded-xl flex items-center justify-center gap-3 transition-all duration-300 font-black text-[9px] uppercase tracking-[2px] shadow-sm group/btn"
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
            <div className="mt-24 pt-16 border-t border-slate-100">
                <div className="max-w-4xl mx-auto">
                    <div className="flex items-center gap-4 mb-8">
                         <div className="w-10 h-10 bg-[#18357a] rounded-xl flex items-center justify-center text-[#ffc107]">
                            <Calendar size={20} />
                         </div>
                         <div>
                            <h3 className="text-xl font-black text-[#18357a] uppercase tracking-tight">Academic <span className="text-[#ffc107]">Schedule</span></h3>
                            <p className="text-[9px] font-black text-slate-400 uppercase tracking-[3px]">Historical Timeline</p>
                         </div>
                    </div>

                    <div className="overflow-hidden rounded-[2.5rem] border border-slate-100 shadow-xl shadow-slate-200/10 bg-white">
                        <table className="w-full text-center border-collapse">
                            <thead>
                                <tr className="bg-[#18357a]">
                                    <th className="px-8 py-4 text-[10px] font-black text-white uppercase tracking-[1.5px] text-center">Academic Year</th>
                                    <th className="px-8 py-4 text-[10px] font-black text-white uppercase tracking-[1.5px] text-center">Semester</th>
                                    <th className="px-8 py-4 text-[10px] font-black text-white uppercase tracking-[1.5px] text-center">Schedule</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-slate-50">
                                {loadingSchedules ? (
                                    <tr>
                                        <td colSpan="3" className="px-8 py-8 text-center">
                                            <div className="flex items-center justify-center gap-2 text-[#18357a] font-black text-[9px] uppercase tracking-widest animate-pulse">
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
                                            <td className="px-8 py-4 text-center">
                                                <span className="text-[13px] font-black text-[#18357a] uppercase tracking-tight group-hover:text-[#ffc107] transition-all">
                                                    {row.year_or_version}
                                                </span>
                                            </td>
                                            <td className="px-8 py-4 text-center">
                                                <span className="text-[11px] font-black text-[#18357a]/50 uppercase tracking-widest group-hover:text-[#ffc107] transition-all">
                                                    {row.semester}
                                                </span>
                                            </td>
                                            <td className="px-8 py-4 text-center flex items-center justify-center">
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
                                        <td colSpan="3" className="px-8 py-20 text-center text-slate-300 font-bold text-xs uppercase tracking-widest bg-slate-50/30">
                                            Timeline preparation in progress.
                                        </td>
                                    </tr>
                                )}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>

            {/* ─── BOARD OF STUDIES (BOS) SECTION ─── */}
            <div className="mt-24 pt-16 border-t border-slate-100">
                <div className="max-w-4xl mx-auto">
                    <div className="flex items-center gap-4 mb-10">
                         <div className="w-10 h-10 bg-[#ffc107] rounded-xl flex items-center justify-center text-[#18357a]">
                            <Users size={20} />
                         </div>
                         <div>
                            <h3 className="text-xl font-black text-[#18357a] uppercase tracking-tight">Board of Studies <span className="text-[#ffc107]">(BoS)</span></h3>
                            <p className="text-[9px] font-black text-slate-400 uppercase tracking-[3px]">Statutory Committees & Members</p>
                         </div>
                    </div>

                    <div className="overflow-hidden rounded-[2rem] border border-slate-100 shadow-xl shadow-slate-200/10 bg-white">
                        <table className="w-full text-center border-collapse">
                            <thead>
                                <tr className="bg-[#18357a]">
                                    <th className="px-8 py-5 text-[10px] font-black text-white uppercase tracking-[2px] w-24 text-center">S.No</th>
                                    <th className="px-8 py-5 text-[10px] font-black text-white uppercase tracking-[2px] text-center">Board of Studies (BoS)</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-slate-50">
                                {[
                                    { name: "Faculty of Mechanical Engineering (MECH)", file: mechBos },
                                    { name: "Faculty of Electronics and Communication Engineering (ECE)", file: eceBos },
                                    { name: "Faculty of Electrical Engineering (EEE)", file: eeeBos },
                                    { name: "Faculty of Computer Science and Engineering (CSE+)", file: cseBos },
                                    { name: "Faculty of Civil Engineering", file: civilBos },
                                    { name: "Faculty of Science and Humanities", file: shBos },
                                    { name: "Faculty of Management Sciences", file: mbaBos }
                                ].map((faculty, idx) => (
                                    <tr 
                                        key={idx} 
                                        onClick={() => window.open(faculty.file, '_blank')}
                                        className={`group transition-all duration-300 cursor-pointer hover:bg-[#18357a]/5 ${idx % 2 === 1 ? 'bg-[#18357a]/[0.06]' : 'bg-white'}`}
                                    >
                                        <td className="px-8 py-4 text-center">
                                            <span className="text-[14px] font-black text-[#18357a]/40 transition-all">
                                                {idx + 1}
                                            </span>
                                        </td>
                                        <td className="px-8 py-4 text-center">
                                            <span className="text-[13px] font-black text-[#18357a] uppercase tracking-tight group-hover:text-[#ffc107] transition-all">
                                                {faculty.name}
                                            </span>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>

                    <div className="mt-12 p-8 rounded-[2rem] bg-[#18357a] relative overflow-hidden group">
                         <div className="absolute inset-0 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:20px_20px] opacity-[0.03]" />
                         <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
                            <div>
                                <h4 className="text-white font-black text-lg uppercase tracking-tight mb-2">Academic CDDA Integration</h4>
                                <p className="text-white/60 text-xs font-bold uppercase tracking-widest max-w-xl leading-relaxed">
                                    The Board of Studies ensures academic excellence through rigorous curriculum review and industry-aligned committee supervision.
                                </p>
                            </div>
                            <button className="px-8 py-4 bg-[#ffc107] text-[#18357a] rounded-2xl font-black text-[10px] uppercase tracking-[2px] shadow-xl shadow-black/10 hover:translate-y-[-2px] transition-all">
                                View Full Directory
                            </button>
                         </div>
                    </div>
                </div>
            </div>
        </div>
      </section>

      {/* ─── DECORATIVE BOTTOM DESIGN ─── */}
      <div className="h-24 bg-gradient-to-t from-slate-50 to-white" />
    </div>
  )
}

export default AutonomousPage
