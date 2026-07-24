import React, { useEffect } from 'react'
import { ArrowLeft } from 'lucide-react'
import { useNavigate } from 'react-router-dom'
import { activitiesData } from './AicteIdeaLabPage'

const AicteIdeaLabActivities2025Page = () => {
    const navigate = useNavigate()

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return (
        <div className="min-h-screen bg-slate-50 pt-24 pb-12">
            <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
                {/* Back Button */}
                <button 
                    onClick={() => navigate('/research-innovation/aicte-idea-lab')}
                    className="flex items-center gap-2 text-slate-500 hover:text-[#224292] font-semibold mb-8 transition-colors group"
                >
                    <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
                    Back to AICTE IDEA Lab
                </button>

                {/* Header */}
                <div className="mb-10 text-center">
                    <h1 className="text-3xl md:text-4xl font-extrabold text-[#224292] font-graphik tracking-tight mb-4">
                        Details of Activities Carried Out
                    </h1>
                    <div className="inline-block bg-[#ffc107] text-[#224292] font-bold px-4 py-1 rounded-full shadow-sm">
                        Academic Year 2025-2026
                    </div>
                </div>

                {/* Detailed Table */}
                <div className="overflow-x-auto bg-white rounded-2xl border border-slate-200 shadow-sm">
                    <table className="w-full text-left border-collapse text-black">
                        <thead>
                            <tr className="bg-[#224292] text-white">
                                <th className="py-4 px-5 font-bold text-sm tracking-wider uppercase border-r border-white/20 whitespace-nowrap">S.No.</th>
                                <th className="py-4 px-5 font-bold text-sm tracking-wider uppercase border-r border-white/20 whitespace-nowrap">Date of the Event</th>
                                <th className="py-4 px-5 font-bold text-sm tracking-wider uppercase border-r border-white/20">Program Title</th>
                                <th className="py-4 px-5 font-bold text-sm tracking-wider uppercase border-r border-white/20">Name of the Guest</th>
                                <th className="py-4 px-5 font-bold text-sm tracking-wider uppercase border-r border-white/20">Target Audience</th>
                                <th className="py-4 px-5 font-bold text-sm tracking-wider uppercase">Number of participants attended</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-100">
                            {activitiesData.slice(0, 27).map((act) => (
                                <tr key={act.sNo} className="hover:bg-slate-50 transition-colors bg-white">
                                    <td className="py-4 px-5 text-sm font-medium border-r border-slate-100 text-slate-600">{act.sNo}</td>
                                    <td className="py-4 px-5 text-sm font-medium border-r border-slate-100 text-slate-700 whitespace-nowrap">{act.dates}</td>
                                    <td className="py-4 px-5 text-sm font-medium border-r border-slate-100 text-slate-800 leading-relaxed max-w-sm">{act.title}</td>
                                    <td className="py-4 px-5 text-sm border-r border-slate-100 text-slate-700 max-w-sm">
                                        <ul className="space-y-1 list-disc pl-4">
                                            {act.resourcePerson.map((person, i) => (
                                                <li key={i}>{person}</li>
                                            ))}
                                        </ul>
                                    </td>
                                    <td className="py-4 px-5 text-sm font-medium border-r border-slate-100 text-slate-700 max-w-xs">{act.remarks}</td>
                                    <td className="py-4 px-5 text-sm font-semibold text-center text-slate-800">
                                        {(parseInt(act.studentsParticipated?.internal) || 0) + 
                                         (parseInt(act.studentsParticipated?.external) || 0) + 
                                         (parseInt(act.facultyBenefited?.internal) || 0) + 
                                         (parseInt(act.facultyBenefited?.external) || 0) || '-'}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default AicteIdeaLabActivities2025Page
