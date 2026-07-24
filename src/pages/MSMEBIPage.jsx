import { motion } from 'framer-motion'
import { 
    Target, Users, Lightbulb, Zap, CreditCard, ArrowRight, Building2, 
    Search, FileText, Download, Eye, ShieldCheck, Rocket, Calendar, 
    GraduationCap, Building, Settings, Banknote
} from 'lucide-react'
import { useNavigate } from 'react-router-dom'

import ist2Logo from '../assets/iStart/ist2.webp'
import istart1 from '../assets/iStart/istart (1).webp'
import msmiImg from '../assets/iStart/msmi.webp'
import msmeImg from '../assets/iStart/msme.png'
import certImg from '../assets/iStart/image.jpg'

const MSMEBIPage = () => {
    const navigate = useNavigate()

    const highlights = [
        { label: "No. of Program Conducted (July 2025 – Feb 2026)", details: "21 Programs" },
        { label: "No. of Ideas Identified and on-boarded as Preincubatee", details: "13 Preincubatee" },
        { label: "No of Smart Card Received", details: "13 Cards" },
        { label: "Grant Received [ StartupTN (7.5L) , MSME (27.5 L), IVP (3.00 L) ]", details: "38 Lakhs" },
        { label: "TNGSS (10 Delegate Passes; Incubator Stall)", details: "02 Startup Displayed" },
        { label: "Participated in HNI Meet with Mr.Sivarajah Ramananthan", details: "04 Members Participated" },
        { label: "Grant Support for Students Prototype Development (so far)", details: "Rs. 1.70 Lakh" },
        { label: "Patent Support Institution Contribution (16 Patents Identified filing)", details: "Rs. 4.00 Lakh" }
    ]


    return (
        <div className="min-h-screen bg-[#F8FAFC] font-graphik pb-20">
            <div className="max-w-7xl mx-auto px-6 lg:px-10 py-16">
                
                <div className="space-y-16">
                    {/* Hero Section */}
                    <div className="grid lg:grid-cols-2 gap-16 items-stretch">
                        {/* Left Content */}
                        <div className="space-y-10">
                            <div className="space-y-6">
                                <img src={msmeImg} alt="MSME Logo" className="w-full max-w-sm md:max-w-md object-contain" />
                                <h1 className="text-5xl lg:text-7xl font-black text-[#224292] leading-[1.1] tracking-tighter hidden">
                                    MSME – <span className="text-[#ffc107]">BI</span>
                                </h1>
                            </div>

                            <div className="space-y-6">
                                <p className="text-black text-[16px] font-bold leading-relaxed text-justify">
                                    Knowledge Institute of Technology (KIOT) has established Ministry of Micro, Small & Medium Enterprises Business Incubator (MSME BI) as per the approval Reference No. <span className="text-[#224292]">HIBITN008899</span> under Ministry of MSME.
                                </p>
                                <p className="text-black text-[16px] font-bold leading-relaxed text-justify">
                                    The vision of the KIOT MSME BI to promote and support untapped creativity of individual by adopting latest technologies in manufacturing as well as knowledge based innovative MSMEs.
                                </p>
                                <p className="text-black text-[16px] font-bold leading-relaxed text-justify">
                                    We provide the space, equipment's, lab and all the auxiliary support to the incubates for nurturing of their ideas for their Startup dreams.
                                </p>
                                <p className="text-black text-[16px] font-bold leading-relaxed text-justify">
                                    KIOT MSME BIs is selected for the grant of up to <span className="text-[#224292]">Rs. 1.00 Cr.</span> for procurement and installation of relevant plant and machines including hardware and software etc. in order to strengthen the technology related R&D activities and common facilities for incubates.
                                </p>
                            </div>
                        </div>

                        {/* Right Image */}
                        <div className="relative group lg:pl-10 flex flex-col gap-6 h-full">
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[110%] h-[110%] bg-[#224292]/5 rounded-full blur-3xl -z-10" />
                            <div className="relative rounded-2xl overflow-hidden shadow-2xl border-8 border-white bg-white h-full min-h-[400px]">
                                <img 
                                    src={certImg} 
                                    alt="Certificate" 
                                    className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-[#224292]/10 to-transparent pointer-events-none" />
                            </div>
                        </div>
                    </div>

                    {/* Table Section: Key Highlights */}
                    <div className="space-y-8 pt-10">
                        <div className="flex items-center gap-4">
                            <h2 className="text-3xl font-black text-[#224292] tracking-tighter uppercase">
                                Key Highlights
                            </h2>
                        </div>

                        <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-xl shadow-slate-200/50">
                            <div className="overflow-x-auto">
                                <table className="w-full text-left border-collapse">
                                    <thead>
                                        <tr className="bg-[#224292] text-white">
                                            <th className="px-6 py-5 text-[11px] font-black tracking-widest uppercase align-middle">Key Highlights / Summary</th>
                                            <th className="px-6 py-5 text-[11px] font-black tracking-widest uppercase align-middle">Details</th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-slate-100">
                                        {highlights.map((item, idx) => (
                                            <tr key={idx} className="even:bg-[#224292]/[0.04] hover:bg-[#224292]/[0.08] transition-colors group">
                                                <td className="px-6 py-5 text-xs font-bold text-black align-middle">{item.label}</td>
                                                <td className="px-6 py-5 text-xs font-black text-[#224292] align-middle">{item.details}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default MSMEBIPage
