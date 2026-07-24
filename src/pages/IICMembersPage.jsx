import { motion } from 'framer-motion'
import { ArrowLeft, Users } from 'lucide-react'
import { useNavigate } from 'react-router-dom'

const IICMembersPage = () => {
    const navigate = useNavigate()

    return (
        <div className="min-h-screen bg-[#F8FAFC] font-graphik pb-20 pt-8">
            <div className="max-w-7xl mx-auto px-6 lg:px-10">
                
                {/* Back Button */}
                <div className="mb-8">
                    <button 
                        onClick={() => navigate('/research-innovation/iic')}
                        className="inline-flex items-center gap-2 text-slate-500 hover:text-[#224292] font-black text-[11px] uppercase tracking-widest transition-colors group"
                    >
                        <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
                        Back to IIC Portal
                    </button>
                </div>

                {/* Header Section */}
                <div className="flex flex-col gap-2 mb-12">
                    <div className="flex items-center gap-4">
                        <div className="w-1.5 h-10 bg-[#ffc107] rounded-full" />
                        <h1 className="text-4xl font-black text-[#224292] tracking-tighter">
                            Students Institute Innovation Council Members List <span className="text-[#ffc107]">AY 2025-26</span>
                        </h1>
                    </div>
                    <p className="text-slate-500 font-bold text-sm pl-5">
                        Meet the active student members steering innovation and startup culture within our campus.
                    </p>
                </div>

                {/* Desktop View (Side by Side) */}
                <div className="hidden lg:grid lg:grid-cols-2 gap-12">
                    {/* Table 1 (1-15) */}
                    <div className="overflow-hidden rounded-2xl shadow-sm bg-white border border-slate-100">
                        <table className="w-full text-left">
                            <thead className="bg-[#224292] text-white">
                                <tr>
                                    <th className="px-6 py-4 font-black text-[11px] uppercase tracking-wider h-14">Students Name, Dept./Year</th>
                                    <th className="px-6 py-4 font-black text-[11px] uppercase tracking-wider h-14">Role</th>
                                </tr>
                            </thead>
                            <tbody>
                                {[
                                    ["Haritha O, III/CSBS", "Student Convener"],
                                    ["Vigneshwaran J.V, II/EEE", "Member"],
                                    ["Monika S, II/CSBS", "Member"],
                                    ["Geethi Priyanka R K, II/IT", "Member"],
                                    ["Risikeash V S, II/Civil", "Member"],
                                    ["Aswika N, III/ECE", "Startup Coordinator"],
                                    ["Deepak P S, III/AIDS", "Member"],
                                    ["Tirisigha.R, II/CSBS", "Member"],
                                    ["Vinodhini M, II/ECE", "Member"],
                                    ["Kaarthik Krishnan S, II/EEE", "Member"],
                                    ["Nagalogesh M.M, III/Civil", "IPR Coordinator"],
                                    ["Tamizharasi K, III/CSBS", "Member"],
                                    ["Rithika M, II/CSBS", "Member"],
                                    ["Lalith Sanjay.S, III/IT", "Member"],
                                    ["Sachin J P, II/EEE", "Member"]
                                ].map(([name, role], i) => (
                                    <tr key={i} className={`hover:bg-[#ffc107]/10 transition-colors h-14 ${i % 2 === 1 ? 'bg-slate-100/80' : 'bg-white'}`}>
                                        <td className="px-6 py-3 text-black font-bold text-xs">{name}</td>
                                        <td className="px-6 py-3">
                                            <span className={`px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-tight ${
                                                role === "Member" ? "bg-white text-slate-500 shadow-sm border border-slate-100" : "bg-[#ffc107]/20 text-[#224292]"
                                            }`}>
                                                {role}
                                            </span>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>

                    {/* Table 2 (16-30) */}
                    <div className="overflow-hidden rounded-2xl shadow-sm bg-white border border-slate-100">
                        <table className="w-full text-left">
                            <thead className="bg-[#224292] text-white">
                                <tr>
                                    <th className="px-6 py-4 font-black text-[11px] uppercase tracking-wider h-14">Students Name, Dept./Year</th>
                                    <th className="px-6 py-4 font-black text-[11px] uppercase tracking-wider h-14">Role</th>
                                </tr>
                            </thead>
                            <tbody>
                                {[
                                    ["Haja Mohideen, II/EEE", "Internship Coordinator"],
                                    ["Anushya PB, III CSBS", "Member"],
                                    ["Salman Khan S, II/Civil", "Member"],
                                    ["Sriamirthaa D.G, II/CSE", "Member"],
                                    ["Diwakar A M, II/CSBS", "Member"],
                                    ["Karthiga Sree Suresh, II/IT", "Social Media Coordinator"],
                                    ["Ashiq S, III/CSBS", "Member"],
                                    ["Vaishanavi M, II/ECE", "Member"],
                                    ["Mohanavel KS, II/CSBS", "Member"],
                                    ["Swathy Shree, II/CSE", "Member"],
                                    ["Sonal M B, II/CSE", "Innovation Coordinator"],
                                    ["Shalini S, II/ECE", "Member"],
                                    ["Dharshini T, II/CSBS", "Member"],
                                    ["Rajvenkadam S, II/IT", "Member"],
                                    ["Naga Prasad M, II/CSBS", "Member"]
                                ].map(([name, role], i) => (
                                    <tr key={i} className={`hover:bg-[#ffc107]/10 transition-colors h-14 ${i % 2 === 1 ? 'bg-slate-100/80' : 'bg-white'}`}>
                                        <td className="px-6 py-3 text-black font-bold text-xs">{name}</td>
                                        <td className="px-6 py-3">
                                            <span className={`px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-tight ${
                                                role === "Member" ? "bg-white text-slate-500 shadow-sm border border-slate-100" : "bg-[#ffc107]/20 text-[#224292]"
                                            }`}>
                                                {role}
                                            </span>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>

                {/* Mobile View (Single Table) */}
                <div className="lg:hidden">
                    <div className="overflow-hidden rounded-2xl shadow-sm bg-white border border-slate-100">
                        <table className="w-full text-left">
                            <thead className="bg-[#224292] text-white">
                                <tr>
                                    <th className="px-4 py-4 font-black text-[10px] uppercase tracking-wider h-14">Students Name, Dept./Year</th>
                                    <th className="px-4 py-4 font-black text-[10px] uppercase tracking-wider h-14">Role</th>
                                </tr>
                            </thead>
                            <tbody>
                                {[
                                    ["Haritha O, III/CSBS", "Student Convener"],
                                    ["Vigneshwaran J.V, II/EEE", "Member"],
                                    ["Monika S, II/CSBS", "Member"],
                                    ["Geethi Priyanka R K, II/IT", "Member"],
                                    ["Risikeash V S, II/Civil", "Member"],
                                    ["Aswika N, III/ECE", "Startup Coordinator"],
                                    ["Deepak P S, III/AIDS", "Member"],
                                    ["Tirisigha.R, II/CSBS", "Member"],
                                    ["Vinodhini M, II/ECE", "Member"],
                                    ["Kaarthik Krishnan S, II/EEE", "Member"],
                                    ["Nagalogesh M.M, III/Civil", "IPR Coordinator"],
                                    ["Tamizharasi K, III/CSBS", "Member"],
                                    ["Rithika M, II/CSBS", "Member"],
                                    ["Lalith Sanjay.S, III/IT", "Member"],
                                    ["Sachin J P, II/EEE", "Member"],
                                    ["Haja Mohideen, II/EEE", "Internship Coordinator"],
                                    ["Anushya PB, III CSBS", "Member"],
                                    ["Salman Khan S, II/Civil", "Member"],
                                    ["Sriamirthaa D.G, II/CSE", "Member"],
                                    ["Diwakar A M, II/CSBS", "Member"],
                                    ["Karthiga Sree Suresh, II/IT", "Social Media Coordinator"],
                                    ["Ashiq S, III/CSBS", "Member"],
                                    ["Vaishanavi M, II/ECE", "Member"],
                                    ["Mohanavel KS, II/CSBS", "Member"],
                                    ["Swathy Shree, II/CSE", "Member"],
                                    ["Sonal M B, II/CSE", "Innovation Coordinator"],
                                    ["Shalini S, II/ECE", "Member"],
                                    ["Dharshini T, II/CSBS", "Member"],
                                    ["Rajvenkadam S, II/IT", "Member"],
                                    ["Naga Prasad M, II/CSBS", "Member"]
                                ].map(([name, role], i) => (
                                    <tr key={i} className={`transition-colors h-14 ${i % 2 === 1 ? 'bg-slate-100/80' : 'bg-white'}`}>
                                        <td className="px-4 py-3 text-black font-bold text-[10px] leading-tight">{name}</td>
                                        <td className="px-4 py-3">
                                            <span className={`px-2 py-0.5 rounded-full text-[9px] font-black uppercase tracking-tight inline-block ${
                                                role === "Member" ? "bg-white text-slate-500 shadow-sm border border-slate-100" : "bg-[#ffc107]/20 text-[#224292]"
                                            }`}>
                                                {role}
                                            </span>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default IICMembersPage
