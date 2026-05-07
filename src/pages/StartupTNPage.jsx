import { motion } from 'framer-motion'
import { 
    Target, Users, Lightbulb, Zap, CreditCard, ArrowRight, Building2, 
    Search, FileText, Download, Eye, ShieldCheck, Rocket, Calendar, 
    GraduationCap, Building 
} from 'lucide-react'
import { useNavigate } from 'react-router-dom'

import ist2Logo from '../assets/iStart/ist2.png'
import sanctionOrderPdf from '../assets/iStart/Sanction order.pdf'
import tnstart1 from '../assets/iStart/tnstart1.png'
import tnstart2 from '../assets/iStart/tnstart2.png'
import icon1 from '../assets/iStart/icon1.png'
import iicLogo from '../assets/iStart/iic.png'
import istart1 from '../assets/iStart/istart (1).jpg'

const StartupTNPage = () => {
    const navigate = useNavigate()

    const smartCards = [
        { id: "ASN 1863", company: "DroneTribes", student: "Guna P", details: "Custom Drone Manufacturing, Identify the defects in Power Plants" },
        { id: "ASN 1864", company: "Visecure", student: "Viyasan S", details: "Cyber Security Platform" },
        { id: "ASN 3682", company: "Systematic Squad", student: "Tamilselvan C", details: "Landside Monitoring Robot" },
        { id: "ASN 3683", company: "Tono_Lite", student: "Govarthanahari N", details: "Portal Device for Glaucoma Patient" },
        { id: "ASN 3684", company: "Agrixnova", student: "Devisubaa S", details: "Software application for coconut farming and data analysis and prediction" },
        { id: "ASN 1909", company: "eNowatiX Technologies", student: "Aswika. N", details: "Embedded Technology Solution for Industry and academia" },
        { id: "ASN 3676", company: "Falcon Fleet", student: "Shahana Sri K S", details: "Eagle eye: Multispectral imaging smart drone for orchard management" },
        { id: "ASN 3677", company: "Hemotexhh", student: "Dharshini S", details: "Non-Invasive Blood Group Prediction and Health Monitoring System" },
        { id: "ASN 3678", company: "Automaters", student: "Nisha S", details: "Dynamic wireless power transmission for e-vehicle" },
        { id: "ASN 3679", company: "Mindmesh", student: "Jayashree N", details: "Rising child anemia cases in rural blocks" },
        { id: "ASN 3680", company: "Neural Ninjas", student: "Sudharsana K", details: "Let AI speak to your money / AI Monitored Digital Payments" },
        { id: "ASN 3681", company: "InnovateX", student: "Dhaksana R", details: "Climatic GenAI: An AI-Driven System for Predicting Wildlife Migration" },
        { id: "ASN 3685", company: "Ryzaq Innovators", student: "Kishore Kumar S", details: "Alternate Medium for Wifi / Bluetooth - Data Transmission" }
    ]

    return (
        <div className="min-h-screen bg-[#F8FAFC] font-graphik pb-20">
            <div className="max-w-7xl mx-auto px-6 lg:px-10 py-16">
                
                <div className="space-y-16">
                    {/* New Hero Section: Reference Layout */}
                    <div className="space-y-4">
                        {/* Top Logos Row */}
                        <div className="flex items-center justify-between">
                            <img src={ist2Logo} alt="KIOT iStart & IIC" className="h-28 lg:h-36 object-contain" />
                            <img src={istart1} alt="iStart Logo" className="h-40 lg:h-64 object-contain" />
                        </div>

                        <div className="grid lg:grid-cols-2 gap-16 items-center">
                            {/* Left Content */}
                            <div className="space-y-10">
                                <div className="space-y-4">
                                    <h1 className="text-4xl lg:text-5xl font-black text-[#224292] leading-[1.2] tracking-tighter">
                                        StartupTN <br />
                                        <span className="text-[#ffc107]">Pre-Incubation Centre</span>
                                    </h1>
                                </div>

                                <div className="space-y-6">
                                    <p className="text-black/70 text-lg font-bold leading-relaxed text-justify">
                                        Startup ecosystem plays a crucial role in fostering innovation, transforming creative ideas into successful ventures, and building an environment that supports aspiring entrepreneurs. It serves as a vital bridge between academic learning and real-world business applications by providing essential resources, guidance, and opportunities that help students overcome the challenges of launching a startup.
                                    </p>
                                    <p className="text-black/60 text-[15px] font-bold leading-relaxed text-justify">
                                        To unlock and nurture the startup potential of our students, KIOT has been actively organizing a wide range of entrepreneurial initiatives such as Bootcamps, Ideathons, Thinkathons, and Hackathons.
                                    </p>
                                </div>

                                {/* Highlight Cards - Vertical Stack */}
                                <div className="space-y-6 pt-4">
                                    {/* Inauguration Highlight */}
                                    <div className="p-8 bg-[#224292]/5 rounded-3xl border border-[#224292]/10 relative overflow-hidden group">
                                        <div className="flex gap-8 items-start relative z-10">
                                            <div className="w-16 h-16 rounded-2xl bg-white flex items-center justify-center shrink-0 border border-slate-100">
                                                <Building2 className="text-[#224292]" size={32} />
                                            </div>
                                            <div className="space-y-3">
                                                <h4 className="text-xl font-black text-[#224292] tracking-tight leading-tight">Pre-Incubation and Test Bed Centre</h4>
                                                <div className="space-y-2 text-black/60 text-[14px] font-bold leading-relaxed">
                                                    <p>• Inaugurated on <span className="text-[#224292]">14th August 2025</span> at Knowledge Institute of Technology, under the <span className="text-[#224292]">StartupTN Mission</span> (Dept. of MSME, Govt. of Tamil Nadu).</p>
                                                    <p>• Graced by <span className="text-[#224292]">Thiru. Sivarajah Ramanathan</span>, Mission Director & CEO, StartupTN.</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Smart Card Highlight */}
                                    <div className="p-8 bg-[#ffc107]/10 rounded-3xl border border-[#ffc107]/20 relative overflow-hidden group">
                                        <div className="flex gap-8 items-start relative z-10">
                                            <div className="w-16 h-16 rounded-2xl bg-white flex items-center justify-center shrink-0 border border-slate-100">
                                                <CreditCard className="text-[#ffc107]" size={32} />
                                            </div>
                                            <div className="space-y-3">
                                                <h4 className="text-xl font-black text-[#224292] tracking-tight leading-tight">Smart Card Achievement</h4>
                                                <p className="text-black/60 text-[14px] font-bold leading-relaxed">
                                                    As a proud achievement, <span className="text-[#224292]">13 student teams</span> from our institution have received the StartupTN Start-Step Smart Card, providing access to renowned service providers at subsidized rates.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Right Content: Staggered Floating Cards + Sanction Order */}
                            <div className="relative h-[700px] flex flex-col items-center justify-center">
                                {/* Floating Cards Group */}
                                <div className="relative w-full h-[500px] flex items-center justify-center">
                                    {/* Central Icon Section */}
                                    <div className="relative z-20 w-32 h-32 lg:w-40 lg:h-40">
                                        <div className="absolute inset-0 bg-white rounded-full flex items-center justify-center p-6 border border-slate-100">
                                            <img src={icon1} alt="Innovation" className="w-full h-full object-contain" />
                                        </div>
                                    </div>

                                    {/* Validate Card */}
                                    <motion.div 
                                        initial={{ opacity: 0, x: -60, y: -60 }}
                                        animate={{ opacity: 1, x: -140, y: -160 }}
                                        className="absolute p-6 lg:p-8 bg-white rounded-3xl border border-slate-100 w-52 lg:w-60 space-y-4 z-10"
                                    >
                                        <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center text-blue-600">
                                            <Lightbulb size={24} />
                                        </div>
                                        <div className="space-y-2">
                                            <h3 className="text-lg font-black text-[#224292]">Validate</h3>
                                            <div className="w-6 h-0.5 bg-[#224292]/20" />
                                            <p className="text-[12px] font-bold text-black leading-relaxed">Rigorous idea testing to refine and validate your startup concept.</p>
                                        </div>
                                    </motion.div>

                                    {/* Mentor Card */}
                                    <motion.div 
                                        initial={{ opacity: 0, x: 60, y: -60 }}
                                        animate={{ opacity: 1, x: 140, y: -160 }}
                                        className="absolute p-6 lg:p-8 bg-white rounded-3xl border border-slate-100 w-52 lg:w-60 space-y-4 z-10"
                                    >
                                        <div className="w-12 h-12 rounded-xl bg-orange-50 flex items-center justify-center text-orange-600">
                                            <Users size={24} />
                                        </div>
                                        <div className="space-y-2">
                                            <h3 className="text-lg font-black text-[#224292]">Mentor</h3>
                                            <div className="w-6 h-0.5 bg-orange-600/20" />
                                            <p className="text-[12px] font-bold text-black leading-relaxed">Connect with industry experts and experienced mentors.</p>
                                        </div>
                                    </motion.div>

                                    {/* Support Card */}
                                    <motion.div 
                                        initial={{ opacity: 0, y: 60 }}
                                        animate={{ opacity: 1, x: 50, y: 160 }}
                                        className="absolute p-6 lg:p-8 bg-white rounded-3xl border border-slate-100 w-64 lg:w-72 space-y-4 z-10"
                                    >
                                        <div className="w-12 h-12 rounded-xl bg-green-50 flex items-center justify-center text-green-600">
                                            <ShieldCheck size={24} />
                                        </div>
                                        <div className="space-y-2">
                                            <h3 className="text-lg font-black text-[#224292]">Support</h3>
                                            <div className="w-6 h-0.5 bg-green-600/20" />
                                            <p className="text-[12px] font-bold text-black leading-relaxed">Get end-to-end support including prototype development and more.</p>
                                        </div>
                                    </motion.div>
                                </div>

                                {/* Sanction Order Section (Below Cards) */}
                                <div className="mt-16 w-full max-w-sm text-center lg:text-left lg:pl-12">
                                    <div className="space-y-6">
                                        <h3 className="text-2xl font-black text-[#224292] tracking-tight">Sanction Order</h3>
                                        <a 
                                            href={sanctionOrderPdf} 
                                            download="Sanction_Order.pdf" 
                                            className="inline-flex items-center gap-3 px-6 py-3 bg-[#224292] text-white rounded-xl font-bold text-[13px] hover:bg-[#ffc107] hover:text-[#224292] transition-all shadow-lg active:scale-95 group/btn"
                                        >
                                            <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center group-hover/btn:bg-[#224292]/10">
                                                <Download size={16} />
                                            </div>
                                            Download Sanction Order (PDF)
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                    {/* Table Section: Smart Card Holders */}
                    <div className="space-y-8">
                        <div className="flex items-center gap-4">
                            <div className="w-1.5 h-10 bg-[#ffc107] rounded-full" />
                            <h2 className="text-3xl font-black text-[#224292] tracking-tighter">
                                List of <span className="text-[#ffc107]">Smart Card Holders</span>
                            </h2>
                        </div>

                        <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-xl shadow-slate-200/50">
                            <div className="overflow-x-auto">
                                <table className="w-full text-left border-collapse">
                                    <thead>
                                        <tr className="bg-[#224292] text-white">
                                            <th className="px-6 py-5 text-[11px] font-black tracking-widest border-r border-white/10">Smart Card No.</th>
                                            <th className="px-6 py-5 text-[11px] font-black tracking-widest border-r border-white/10">Company Name</th>
                                            <th className="px-6 py-5 text-[11px] font-black tracking-widest border-r border-white/10">Student Name</th>
                                            <th className="px-6 py-5 text-[11px] font-black tracking-widest">Idea / Product Details</th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-slate-100">
                                        {smartCards.map((item, idx) => (
                                            <tr key={idx} className="hover:bg-slate-50 transition-colors group">
                                                <td className="px-6 py-4 text-sm font-black text-[#224292] border-r border-slate-50">{item.id}</td>
                                                <td className="px-6 py-4 text-sm font-bold text-black border-r border-slate-50">{item.company}</td>
                                                <td className="px-6 py-4 text-sm font-bold text-black border-r border-slate-50">{item.student}</td>
                                                <td className="px-6 py-4 text-xs font-bold text-black/70 leading-relaxed">{item.details}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
    )
}

export default StartupTNPage
