import { motion } from 'framer-motion'
import { 
    Target, Users, Lightbulb, Zap, CreditCard, ArrowRight, Building2, 
    Search, FileText, Download, Eye, ShieldCheck, Rocket, Calendar, 
    GraduationCap, Building 
} from 'lucide-react'
import { useNavigate } from 'react-router-dom'

import ist2Logo from '../assets/iStart/ist2.webp'
const sanctionOrderPdf = '/assets/iStart/Sanction order.pdf'
import tnstart1 from '../assets/iStart/tnstart1.webp'
import tnstart2 from '../assets/iStart/tnstart2.webp'
import icon1 from '../assets/iStart/icon1.webp'
import iicLogo from '../assets/iStart/iic.webp'
import istart1 from '../assets/iStart/istart (1).webp'

const StartupTNPage = () => {
    const navigate = useNavigate()


    return (
        <div className="min-h-screen bg-[#F8FAFC] font-graphik pb-12">
            <div className="max-w-7xl mx-auto px-6 lg:px-10 py-10">
                <div className="space-y-12">
                    {/* Hero Section */}
                    <div className="space-y-4">
                        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
                            {/* Left Content */}
                            <div className="space-y-8">
                                <div className="space-y-3">
                                    <h1 className="text-4xl lg:text-5xl font-black text-[#224292] leading-[1.2] tracking-tighter">
                                        StartupTN <br />
                                        <span className="text-[#ffc107]">Pre-Incubation Centre</span>
                                    </h1>
                                </div>

                                <div className="space-y-5">
                                    <p className="text-black/70 text-lg font-bold leading-relaxed text-justify">
                                        Startup ecosystem plays a crucial role in fostering innovation, transforming creative ideas into successful ventures, and building an environment that supports aspiring entrepreneurs. It serves as a vital bridge between academic learning and real-world business applications by providing essential resources, guidance, and opportunities that help students overcome the challenges of launching a startup.
                                    </p>
                                    <p className="text-black/60 text-[15px] font-bold leading-relaxed text-justify">
                                        To unlock and nurture the startup potential of our students, KIOT has been actively organizing a wide range of entrepreneurial initiatives such as Bootcamps, Ideathons, Thinkathons, and Hackathons.
                                    </p>
                                </div>
                            </div>

                            {/* Right Content */}
                            <div className="relative flex flex-col items-center">
                                {/* Institutional Logos - Increased width/size */}
                                <div className="w-full mb-6 flex flex-col items-center lg:items-center lg:pr-12">
                                    <img src={ist2Logo} alt="KIOT iStart & IIC" className="h-24 lg:h-32 w-auto object-contain" />
                                </div>
                                
                                <div className="relative h-[450px] w-full flex flex-col items-center justify-center">
                                    <div className="relative w-full h-[350px] flex items-center justify-center scale-90 lg:scale-100">
                                        <div className="relative z-20 w-28 h-28 lg:w-36 lg:h-36">
                                            <div className="absolute inset-0 bg-white rounded-full flex items-center justify-center p-5 border border-slate-100 shadow-xl">
                                                <img src={icon1} alt="Innovation" className="w-full h-full object-contain" />
                                            </div>
                                        </div>

                                        <motion.div 
                                            initial={{ opacity: 0, x: -40, y: -40 }}
                                            animate={{ opacity: 1, x: -110, y: -130 }}
                                            className="absolute p-5 lg:p-6 bg-[#224292] rounded-2xl border border-white/10 w-40 lg:w-48 space-y-3 z-10 shadow-2xl"
                                        >
                                            <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center text-white">
                                                <Lightbulb size={20} />
                                            </div>
                                            <div className="space-y-1.5">
                                                <h3 className="text-base font-black text-white">Validate</h3>
                                                <div className="w-5 h-0.5 bg-[#ffc107]"></div>
                                                <p className="text-[10px] font-bold text-white/90 leading-tight">Rigorous idea testing to refine your concept.</p>
                                            </div>
                                        </motion.div>

                                        <motion.div 
                                            initial={{ opacity: 0, x: 40, y: -40 }}
                                            animate={{ opacity: 1, x: 110, y: -130 }}
                                            className="absolute p-5 lg:p-6 bg-white rounded-2xl border border-slate-100 w-40 lg:w-48 space-y-3 z-10 shadow-2xl"
                                        >
                                            <div className="w-10 h-10 rounded-lg bg-[#ffc107]/10 flex items-center justify-center text-[#ffc107]">
                                                <Users size={20} />
                                            </div>
                                            <div className="space-y-1.5">
                                                <h3 className="text-base font-black text-[#224292]">Mentor</h3>
                                                <div className="w-5 h-0.5 bg-[#ffc107]"></div>
                                                <p className="text-[10px] font-bold text-black/60 leading-tight">Connect with global industry experts.</p>
                                            </div>
                                        </motion.div>

                                        <motion.div 
                                            initial={{ opacity: 0, y: 40 }}
                                            animate={{ opacity: 1, x: 40, y: 130 }}
                                            className="absolute p-5 lg:p-6 bg-[#224292] rounded-2xl border border-white/10 w-52 lg:w-60 space-y-3 z-10 shadow-2xl"
                                        >
                                            <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center text-white">
                                                <ShieldCheck size={20} />
                                            </div>
                                            <div className="space-y-1.5">
                                                <h3 className="text-base font-black text-white">Support</h3>
                                                <div className="w-5 h-0.5 bg-[#ffc107]"></div>
                                                <p className="text-[10px] font-bold text-white/90 leading-tight">End-to-end support for prototype development.</p>
                                            </div>
                                        </motion.div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Equal Height Highlight Cards */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
                        <div className="flex flex-col h-full p-8 bg-[#224292]/5 rounded-[2rem] border border-[#224292]/10 relative overflow-hidden group hover:bg-[#224292]/10 transition-colors">
                            <div className="flex gap-8 items-start relative z-10">
                                <div className="w-16 h-16 rounded-2xl bg-white flex items-center justify-center shrink-0 border border-slate-100 shadow-sm">
                                    <Building2 className="text-[#224292]" size={32} />
                                </div>
                                <div className="space-y-3">
                                    <h4 className="text-xl font-black text-[#224292] tracking-tight leading-tight">Pre-Incubation and Test Bed Centre</h4>
                                    <div className="space-y-2 text-black/60 text-[14px] font-bold leading-relaxed">
                                        <p>• Inaugurated on <span className="text-[#224292]">14th August 2025</span> at KIOT, under the <span className="text-[#224292]">StartupTN Mission</span> (Dept. of MSME, Govt. of Tamil Nadu).</p>
                                        <p>• Graced by <span className="text-[#224292]">Thiru. Sivarajah Ramanathan</span>, Mission Director & CEO, StartupTN.</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="flex flex-col h-full p-8 bg-[#ffc107]/10 rounded-[2rem] border border-[#ffc107]/20 relative overflow-hidden group hover:bg-[#ffc107]/15 transition-colors">
                            <div className="flex gap-8 items-start relative z-10">
                                <div className="w-16 h-16 rounded-2xl bg-white flex items-center justify-center shrink-0 border border-slate-100 shadow-sm">
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


                    {/* Sanction Order Section */}
                    <div className="pt-8 border-t border-slate-200">
                        <div className="bg-[#224292] rounded-[2rem] p-8 lg:p-12 text-center lg:text-left relative overflow-hidden">
                            <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -mr-32 -mt-32 blur-3xl"></div>
                            
                            <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-8">
                                <div className="space-y-4">
                                    <h3 className="text-3xl font-black text-white tracking-tight">Sanction Order</h3>
                                    <p className="text-white/70 font-bold max-w-xl">
                                        Download the official sanction order documentation for the StartupTN Pre-Incubation Centre.
                                    </p>
                                </div>
                                <a 
                                    href={sanctionOrderPdf} 
                                    download="Sanction_Order.pdf" 
                                    className="inline-flex items-center gap-4 px-8 py-4 bg-[#ffc107] text-[#224292] rounded-2xl font-black text-[16px] hover:bg-white transition-all shadow-xl active:scale-95 group/btn"
                                >
                                    <div className="w-10 h-10 rounded-xl bg-[#224292]/10 flex items-center justify-center group-hover/btn:bg-[#224292]/5">
                                        <Download size={20} />
                                    </div>
                                    Download Document (PDF)
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default StartupTNPage
