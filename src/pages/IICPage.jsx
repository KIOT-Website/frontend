import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Lightbulb, ArrowLeft, Users, Target, Rocket, Star, ArrowRight, X as CloseIcon } from 'lucide-react'
import { useNavigate } from 'react-router-dom'
import iicImg from '../assets/iStart/iic.png'
import certImg from '../assets/iStart/IIC-certificate.jpg'

const IICPage = () => {
    const navigate = useNavigate()
    const [showCert, setShowCert] = useState(false)
    const [activeYear, setActiveYear] = useState('2025-26')
    const [activeQuarter, setActiveQuarter] = useState('Semester 1')

    return (
        <div className="min-h-screen bg-[#F8FAFC] font-graphik pb-20">


            <div className="max-w-7xl mx-auto px-6 lg:px-10 py-16">
                <div className="mb-10">
                    <h1 className="text-4xl font-black text-[#224292] tracking-tighter">
                        IIC - <span className="text-[#ffc107]">Institution's Innovation Council</span>
                    </h1>
                </div>


                <div className="grid lg:grid-cols-2 gap-16">
                    {/* Left Column: About IIC */}
                    <div className="space-y-10">
                        <div>
                            <p className="text-black text-[15px] font-bold leading-relaxed mb-8 text-justify">
                                The Institution's Innovation Council (IIC) is committed to fostering a culture of innovation, creativity, and entrepreneurship among both students and faculty members. It serves as a platform to inspire fresh ideas, encourage creative thinking, and strengthen problem-solving skills within the institution.
                            </p>
                        </div>

                        {/* List of Points */}
                        <div className="space-y-8">
                            {[
                                {
                                    icon: Users,
                                    color: "#3b82f6",
                                    text: "The IIC also plays an important role in building meaningful connections between the college and industry experts by facilitating interactions, collaborations, and knowledge-sharing opportunities."
                                },
                                {
                                    icon: Target,
                                    color: "#ffc107",
                                    text: "In addition, it offers valuable resources, mentorship, and continuous support for students and faculty interested in developing start-up ideas and entrepreneurial ventures."
                                },
                                {
                                    icon: Lightbulb,
                                    color: "#10b981",
                                    text: "At our institution, the IIC provides a well-structured framework to promote innovation-driven activities and entrepreneurial initiatives, ensuring the sustainable growth of an innovative and enterprising ecosystem within the campus."
                                },
                                {
                                    icon: Star,
                                    color: "#ffc107",
                                    text: "Our KIOT has been awarded a 3.5-Star Rating by the Innovation Cell, Ministry of Education, Government of India, in recognition of its Innovation and Start-up activities during the IIC calendar year 2023-24."
                                }
                            ].map((point, i) => (
                                <div 
                                    key={i} 
                                    className={`flex gap-6 transition-all ${
                                        i === 3 ? 'bg-[#ffc107]/10 p-6 rounded-[2rem] border border-[#ffc107]/20 shadow-sm' : ''
                                    }`}
                                >
                                    <div className="w-12 h-12 rounded-full flex items-center justify-center shrink-0 shadow-sm border border-slate-100 bg-white" style={{ color: point.color }}>
                                        <point.icon size={22} className={point.icon === Star ? "fill-current" : ""} />
                                    </div>
                                    <div className="flex flex-col gap-4">
                                        <p className="text-black text-[14px] font-bold leading-relaxed text-justify">
                                            {point.text}
                                        </p>
                                        {i === 3 && (
                                            <div className="flex">
                                                <button 
                                                    onClick={() => setShowCert(true)}
                                                    className="flex items-center gap-2 px-6 py-2.5 bg-[#224292] text-white rounded-full font-black text-[11px] uppercase tracking-widest hover:bg-[#ffc107] hover:text-[#224292] transition-all shadow-lg shadow-blue-900/20 group">
                                                    View certificate
                                                    <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                                                </button>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Right Column: Image & Grid */}
                    <div className="space-y-12 -mt-16">
                        {/* Illustration */}
                        <div className="relative">
                            <div className="absolute -top-10 -right-10 w-64 h-64 bg-[#224292]/5 rounded-full blur-3xl" />
                            <img 
                                src={iicImg} 
                                alt="IIC Illustration" 
                                className="w-full h-auto relative z-10 drop-shadow-2xl"
                            />
                        </div>

                        {/* 4-Card Grid */}
                        <div className="grid grid-cols-2 gap-6">
                            {[
                                { title: "Inspire", desc: "Encouraging creativity and innovative thinking among students and faculty.", color: "#3b82f6", icon: Rocket },
                                { title: "Connect", desc: "Building strong industry-institute collaborations and partnerships.", color: "#f59e0b", icon: Users },
                                { title: "Support", desc: "Providing resources, mentorship and guidance for startups and innovators.", color: "#10b981", icon: Lightbulb },
                                { title: "Innovate", desc: "Creating a thriving ecosystem for innovation and entrepreneurship.", color: "#8b5cf6", icon: Target }
                            ].map((card, i) => (
                                <div key={i} className="bg-white p-6 rounded-3xl shadow-xl shadow-slate-200/50 border border-slate-50">
                                    <div className="w-12 h-12 rounded-2xl flex items-center justify-center mb-4 shadow-sm border border-slate-50 bg-white" style={{ color: card.color }}>
                                        <card.icon size={24} />
                                    </div>
                                    <h3 className="text-xl font-black text-black mb-2">{card.title}</h3>
                                    <p className="text-black text-xs font-bold leading-relaxed">{card.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* Student Members Section */}
            <section className="py-24 bg-white border-t border-slate-100">
                <div className="max-w-7xl mx-auto px-6 lg:px-10">
                    <div className="mb-16">
                        <div className="flex items-center gap-4 mb-2">
                            <div className="w-1.5 h-10 bg-[#ffc107] rounded-full" />
                            <h2 className="text-4xl font-black text-[#224292] tracking-tighter">
                                Students Institute Innovate Council Members List <span className="text-[#ffc107]">AY 2025-26</span>
                            </h2>
                        </div>
                    </div>

                    {/* Desktop View (Side by Side) */}
                    <div className="hidden lg:grid lg:grid-cols-2 gap-12">
                        {/* Table 1 (1-15) */}
                        <div className="overflow-hidden rounded-2xl shadow-sm bg-white">
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
                        <div className="overflow-hidden rounded-2xl shadow-sm bg-white">
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
                        <div className="overflow-hidden rounded-2xl shadow-sm bg-white">
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
                                        ["Deepak P P S, III/AIDS", "Member"],
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
            </section>

            {/* Innovation Ambassador Faculty Namelist Section */}
            <section className="py-24 bg-[#F8FAFC]">
                <div className="max-w-7xl mx-auto px-6 lg:px-10">
                    <div className="mb-16">
                        <div className="flex items-center gap-4 mb-2">
                            <div className="w-1.5 h-10 bg-[#ffc107] rounded-full" />
                            <h2 className="text-4xl font-black text-[#224292] tracking-tighter">
                                Innovation Ambassador <span className="text-[#ffc107]">Faculty Namelist</span>
                            </h2>
                        </div>
                    </div>
                    
                    {/* Faculty Namelist Grid */}
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-7 gap-4">
                        {[
                            { name: "Ms. P. Vikneshwary", dept: "AP/CSE" },
                            { name: "Mrs. Vasanthi", dept: "AP/ECE" },
                            { name: "Mrs. V. Vadivu", dept: "AP/ECE" },
                            { name: "Mrs. Sasidevi", dept: "AP/ECE" },
                            { name: "Mrs. S. Sowndarya", dept: "AP/CSE" },
                            { name: "Mrs. R. Saranya", dept: "AP/CSE" },
                            { name: "Mrs. P. Raga Keerthana", dept: "AP/CSBS" },
                            { name: "Mr. S. Surendar", dept: "AP/MECH" },
                            { name: "Mr. S. Senthilkumar", dept: "AP/CIVIL" },
                            { name: "Mr. S. Rajeshkanna", dept: "AP/CIVIL" },
                            { name: "Mr. S. E. Murthy", dept: "AP/EEE" },
                            { name: "Mr. R. Kathiresan", dept: "AP/EEE" },
                            { name: "Mr. P. Balaji", dept: "AP/EEE" },
                            { name: "Dr. P. Malarvizhi", dept: "AP/CSE" }
                        ].map((faculty, i) => (
                            <motion.div 
                                key={i}
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ delay: i * 0.05 }}
                                className="bg-white py-10 px-4 rounded-xl border border-slate-100 shadow-sm hover:shadow-md hover:border-[#224292]/20 transition-all text-center group"
                            >
                                <h4 className="text-black font-black text-[11px] sm:text-[12px] leading-tight mb-2 group-hover:text-[#ffc107] transition-colors">{faculty.name}</h4>
                                <p className="text-black font-black text-[10px] uppercase tracking-tighter">{faculty.dept}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Achievements Section */}
            <section className="py-24 bg-white border-t border-slate-100">
                <div className="max-w-7xl mx-auto px-6 lg:px-10">
                    <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-8 mb-16">
                        <div className="flex items-center gap-4">
                            <div className="w-1.5 h-10 bg-[#ffc107] rounded-full" />
                            <h2 className="text-4xl font-black text-[#224292] tracking-tighter">
                                IIC <span className="text-[#ffc107]">ACTIVITIES</span>
                            </h2>
                        </div>

                        <div className="flex flex-wrap items-center gap-3">
                            {['2025-26', '2024-25', '2023-24'].map((year) => (
                                <button
                                    key={year}
                                    onClick={() => setActiveYear(year)}
                                    className={`px-6 py-2.5 rounded-xl font-black text-[10px] uppercase tracking-widest transition-all duration-300 ${
                                        activeYear === year 
                                        ? "bg-[#224292] text-white shadow-lg shadow-blue-900/20" 
                                        : "bg-slate-100 text-slate-400 hover:bg-slate-200"
                                    }`}
                                >
                                    {year}
                                </button>
                            ))}
                        </div>
                    </div>
                    
                    {/* Activities Table for 2025-26 */}
                    {activeYear === '2025-26' && (
                        <div className="overflow-hidden rounded-2xl shadow-sm bg-white border border-slate-100">
                            <div className="overflow-x-auto">
                                <table className="w-full text-left border-collapse">
                                    <thead className="bg-[#224292] text-white">
                                        <tr>
                                            <th className="px-6 py-4 font-black text-[12px] uppercase tracking-wider h-14 whitespace-nowrap">Date</th>
                                            <th className="px-6 py-4 font-black text-[12px] uppercase tracking-wider h-14">Dept.</th>
                                            <th className="px-6 py-4 font-black text-[12px] uppercase tracking-wider h-14">Category</th>
                                            <th className="px-6 py-4 font-black text-[12px] uppercase tracking-wider h-14">Activities</th>
                                            <th className="px-6 py-4 font-black text-[12px] uppercase tracking-wider h-14 text-center">Participants</th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-slate-50">
                                        {[
                                            ["17.02.2025", "iStart", "College", "Workshop on Effective Sales and Marketing Strategies for Entrepreneurs /Startups", "45"],
                                            ["20.02.2025 & 21.02.2025", "iStart", "College", "Session on transforming Idea to Product Development", "45"],
                                            ["21.02.2025", "iStart", "College", "Session on Intellectual Property Rights", "45"],
                                            ["20.02.2025 & 21.02.2025 & 24.02.2025", "iStart", "College", "Three Days Hackathon on \"Best Innovation using PCB Design\"", "45"],
                                            ["22.02.2025 & 27.02.2025", "iStart", "College", "Make A Product Road Show", "42"],
                                            ["22.02.2025", "iStart", "College", "Idea Ignition-Technical event in Arivili'25", "50"],
                                            ["27.02.2025 & 28.02.2025", "iStart", "College", "Kongu TBI Visit MOU exchange cum Orientation Session", "46"],
                                            ["28.02.2025", "iStart", "College", "Conduct a Session on Achieving Problem-Solution Fit and Product-Market Fit", "44"],
                                            ["03.03.2025", "iStart", "College", "National Science Day", "46"],
                                            ["04.03.2025", "iStart", "College", "Workshop on Prototype/Process Design and Development.", "55"],
                                            ["08.03.2025", "iStart", "College", "International Womens Day", "45"],
                                            ["21.03.2025 & 22.03.2025", "iStart", "College", "WILD Frontiers'25", "133"],
                                            ["02.04.2025", "iStart", "College", "Session on “How to plan for Start-up and legal & Ethical Steps”", "45"],
                                            ["09.04.2025", "iStart", "College", "Workshop on “Raising Capital and Managing Finance for Startups”", "45"],
                                            ["16.04.2025", "iStart", "College", "Awarness Session on MSME for Faculty &Student Members", "48"],
                                            ["21.04.2025", "iStart", "College", "Celebration of World Creativity and Innovation Day", "45"],
                                            ["21.04.2025 & 26.04.2025", "iStart", "College", "IP UTSAV", "48"],
                                            ["25.04.2025", "iStart", "College", "Significance of IP Protection and Commercialization", "53"],
                                            ["26.04.2025", "iStart", "College", "World Intellectual Property Day", "53"],
                                            ["07.05.2025 & 08.05.2025 & 09.05.2025", "iStart", "College", "iStart Hackathon & YUKTI Submission", "60"],
                                            ["11.05.2025", "iStart", "College", "National Technology Day", "63"],
                                            ["12.05.2025", "iStart", "College", "Awarness Session on Business Model and Entrepreneuship for Faculty Members", "53"],
                                            ["12.05.2025", "iStart", "College", "Interactive Session with Successful Entrepreneurs - My Story", "45"],
                                            ["05.06.2025", "iStart", "College", "World Environment Day", "45"],
                                            ["27.06.2025", "iStart", "College", "Session on Accelerators/Incubation -Opportunities for Students & Faculties – Early-Stage Entrepreneurs", "52"],
                                            ["04.07.2025", "iStart", "College", "“Rashtra Pratham” and “Celebrating Failures”", "68"],
                                            ["04.07.2025", "iStart", "College", "Awarness session on Innovation and design thinking second Years", "45"],
                                            ["15.07.2025 & 19.08.2025", "iStart", "College", "FDP Program-Wadhwani Foundation", "29"],
                                            ["25.07.2025", "iStart", "College", "Orientation Session on \"Government Bodies and Policy for supporting Entrepreneurship\"", "60"],
                                            ["25.07.2025", "iStart", "College", "Innovation Week (Idea Pitching, Poster Presentation,Product Demo)", "81"],
                                            ["29.07.2025", "iStart", "College", "5th Anniversary of NEP 2020", "63"],
                                            ["30.07.2025 & 31.07.2025", "iStart", "College", "Organize an Inter/Intra Institutional Start-up Competition and Reward the Best Start-ups and deposition in the Institution’s YUKTI Innovation Repository", "88"],
                                            ["08.08.2025", "iStart", "College", "My Story – Motivational Session by Successful Entrepreneur / Start-up Founder", "55"],
                                            ["12.08.2025", "iStart", "College", "Organize Session on “Lean Start-up & Minimum Viable Product/Business”- Boot Camp (or) Mentoring Session", "44"],
                                            ["14.08.2025", "iStart", "College", "Session/ Panel discussion with innovation and Start-up Ecosystem Enablers from the region/state/national level", "220"],
                                            ["14.08.2025", "iStart", "College", "Interactive Session by Successful Entrepreneurs – My Story", "55"],
                                            ["15.08.2025", "iStart", "College", "Independence Day –Celebrating Aazadi Ka Amritkal", "66"],
                                            ["20.08.2025 & 21.08.2005", "iStart", "College", "Organizing Innovation & Entrepreneurship Outreach Program by involving ATLs/SICs in Schools", "66"],
                                            ["21.08.2025", "iStart", "College", "World Entrepreneurs Day", "33"],
                                            ["28.08.2025", "iStart", "College", "Session on Converting Innovation into a Start-up", "48"],
                                            ["12.08.2025", "iStart", "College", "Session on Angel Investment/VC Funding Opportunity for Early-Stage Entrepreneurs.", "48"],
                                            ["10.09.2025", "iStart", "College", "Capacity Building Programme: Workshop on Design Thinking", "40"],
                                            ["15.09.2025", "iStart", "College", "Celebration of Engineers Day", "45"],
                                            ["15.09.2025", "iStart", "College", "Smart India Internal Hackathon", "328"],
                                            ["19.09.2025", "iStart", "College", "Capacity Building Programme: Workshop on Design Thinking", "40"],
                                            ["20.09.2025", "iStart", "College", "CognitiveX:IBM GenAI Hackathon", "368"],
                                            ["22.09.2025", "iStart", "College", "Awarness Session on Smart India Hackathon (Online Mode)", "65"],
                                            ["26.09.2025", "iStart", "College", "An Interactive Session on Idea to Impact: Shaping Student & Faculty Entrepreneurs", "60"],
                                            ["28.09.2025", "iStart", "College", "2025 WEI Business Pitch Competition", "45"],
                                            ["29.09.2025", "iStart", "College", "Workshop on “Entrepreneurship and Innovation” as a Career Opportunity", "45"],
                                            ["30.09.2025", "iStart", "College", "My Story - Motivational Session by Successful Innovators", "45"],
                                            ["30.09.2025", "iStart", "College", "From Idea to Impact - Motivational Session by Successful Entrepreneur/Start-up Founder", "45"],
                                            ["30.09.2025", "iStart", "College", "IIC Annual Report 2025", "0"],
                                            ["09.10.2025 & 10.10.2025", "iStart", "College", "StartupTN Global Startup Summit-2025 - TNGSS (Distrupt To Rise)", "120"],
                                            ["15.10.2025", "iStart", "College", "Innovation Day Celebration - Innovation Insights by Student Innovators", "65"],
                                            ["22.10.2025", "iStart", "College", "Orientation Session on IIC 8.0 Calendar & R&D Cell Activities for AY 2025–26", "88"],
                                            ["30.10.2025", "iStart", "College", "Product Market fit;Prototype/Process Design and MVP Development", "45"],
                                            ["06.11.2025", "iStart", "College", "Session on the “Basics of Intellectual Property Rights and its Importance for Innovators and Entrepreneurs”.", "45"],
                                            ["07.11.2025", "iStart", "College", "Ask Me Anything", "114"],
                                            ["11.11.2025", "iStart", "College", "National Education Day", "45"],
                                            ["15.11.2025", "iStart", "College", "Workshop on AI and I4.0 Tools for Innovators and Entrepreneurs", "46"],
                                            ["18.11.2025", "iStart", "College", "National Entrepreneurship Day", "45"],
                                            ["02.12.2025", "iStart", "College", "National Pollution Control Day", "56"],
                                            ["05.12.2025", "iStart", "College", "Workshop on Design Thinking, Critical thinking and Innovation Design", "60"],
                                            ["13.12.2025", "iStart", "College", "Innovation & Entrepreneurship Outreach Program in Schools", "130"],
                                            ["14.12.2026", "iStart", "College", "National Energy Conservation Day (India)", "45"],
                                            ["12.01.2026", "iStart", "College", "National Youth Day", "60"],
                                            ["16.01.2026", "iStart", "College", "National Startup Day", "73"],
                                            ["30.01.2026", "iStart", "College", "My Story – Motivational Session by Successful Entrepreneur / Start-up Founder", "43"],
                                            ["02.02.2026", "iStart", "College", "World Wet Land Day", "103"]
                                        ].map(([date, dept, cat, activity, part], i) => (
                                            <tr key={i} className={`hover:bg-[#ffc107]/10 transition-colors ${i % 2 === 1 ? 'bg-slate-100/80' : 'bg-white'}`}>
                                                <td className="px-6 py-4 text-black font-bold text-[13px] whitespace-nowrap">{date}</td>
                                                <td className="px-6 py-4 text-black font-bold text-[13px] uppercase tracking-tighter">{dept}</td>
                                                <td className="px-6 py-4 text-black font-bold text-[13px]">{cat}</td>
                                                <td className="px-6 py-4 text-black font-bold text-[13px] leading-relaxed">{activity}</td>
                                                <td className="px-6 py-4 text-black font-black text-[13px] text-center">{part}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    )}

                    {/* Activities Table for 2024-25 */}
                    {activeYear === '2024-25' && (
                        <div className="overflow-hidden rounded-2xl shadow-sm bg-white border border-slate-100">
                            <div className="overflow-x-auto">
                                <table className="w-full text-left border-collapse">
                                    <thead className="bg-[#224292] text-white">
                                        <tr>
                                            <th className="px-6 py-4 font-black text-[12px] uppercase tracking-wider h-14 whitespace-nowrap">Date & Duration</th>
                                            <th className="px-6 py-4 font-black text-[12px] uppercase tracking-wider h-14">KIOT Activity Executed</th>
                                            <th className="px-6 py-4 font-black text-[12px] uppercase tracking-wider h-14">Guest Details / Partnered Organizer</th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-slate-50">
                                        {[
                                            ["27.09.2024", "Workshop on “Entrepreneurship and Innovation” as a Career Opportunity", "Mr.A.Sekar, Assistant Professor/CSE, Head-Incubations, Knowledge Institute of Technology, Salem"],
                                            ["18.10.2024", "Session on My Story-Motivational Session by Successful Entrepreneur/Startup Founder", "Mr.Deepan Chakaravarthy, Founder & CEO, Deecodes.io, Salem"],
                                            ["07.11.2024", "Session on My Story-Motivational Session by Successful Entrepreneur/Startup Founder", "Mr.Sasi Varna Kumar, Founder & CEO, TealOrca Software Solutions Pvt Ltd, Coimbatore."],
                                            ["27.11.2024 & 28.11.2024", "Session on Startup Ecosystems: India and Global Perspectives", "Dr.K.Visagavel, Vice Principal & Dean -Academic, Knowledge Institute of Technology-Salem."],
                                            ["28.10.2024", "Session on the “Basics of Intellectual Property Rights and its Importance for Innovators and Entrepreneurs”.", "Mr.M.K.Sampath, AP/CSE, YUKTI Coordinator, Mr.S.Santhosh, AP/MECH, KAPILA/IPR Coordinator"],
                                            ["25.11.2024", "Visit to \"AIC RAISE Incubation Centre", "Field Visit to AIC Raise - Coimbatore"],
                                            ["29.10.2024", "Pitch Perfect - Idea Presentation", "Mr.A.Sekar, Assistant Professor/CSE, Head-Incubations, KIOT, Mr.R.Madhan Raj, AP/EEE"],
                                            ["01.11.2024", "Puthulir 2024 - TN School Innovation & Ideation Challenge", "Innovation Ambassadors & School Students"],
                                            ["15.10.2024", "One Day Workshop -\"Entrepreneur-Overcoming Challenges with Embracing Opportunity\"", "Mr. K. Senthilkumar, Advisor, Association for Rubber Innovation and Start-up Entrepreneurship"],
                                            ["07.11.2024", "One Day Expert Talk on -\"Business Idea & Problem Solution fit\"", "Mr. D.Balaguru, Assistant Director, PPDC, Ministry of MSME, Coimbatore."],
                                            ["09.11.2024", "One Day Expert Talk on \"Steps Behind My Success\"", "Mr. R. Gowri Shankar, Managing Director, Raja Agencies, Salem."],
                                            ["11.11.2024 & 12.11.2024", "Four Days Hands on Workshop - \"Lean Canvas Business Model\"", "Mr S Saravanan, Master Trainer - EDII, Chennai"],
                                            ["16.11.2024", "Two Days Expert Talk on \"Essential Financial Insights for Entrepreneurial Success\"", "Mr.Kamalakkannan Srinivasan, Senior Manager, Kotak Mahindra Bank, Salem."],
                                            ["08.11.2024", "Live Session on MIC Programmes & Schemes", "Dr.Abhay Jere, VCM, AICTE & CIO, MoE's Innovation Cell"],
                                            ["15.10.2024", "Institution's Innovation Day (Dr APJ Abdul Kalam's birth anniversary)", "Mr.Arulkesavan, Dept iStart Coordinator, KIOT"],
                                            ["09.11.2024", "National Entrepreneurship Day", "Mr.Arulkesavan, Dept iStart Coordinator/CIVIL, KIOT"],
                                            ["11.11.2024", "National Education Day", "Mr.R.Ayyappan, Dept iStart Coordinator/IT, KIOT"],
                                            ["05.12.2024 - 07.12.2024", "Workshop on Design Thinking, Critical thinking and Innovation Design", "Mr.M.K.Sampath (CSE), Mr.R.Ayappan (IT), Mr.B.Venkata Ramanen (CSBS), Mr.R.Ramesh Kumar (AIDS)"],
                                            ["20.02.2025 & 21.02.2025", "Session on transforming Idea to Product Development", "1.Mr.R.Ayyappan, 2.Mr.B.S.T.Ragu"],
                                            ["21.02.2025", "Session on Intellectual Property Rights", "Mr.Jothimurugan, IPR Agent"],
                                            ["17.02.2025", "Workshop on Effective Sales and Marketing Strategies for Entrepreneurs /Startups", "Mr. K. Senthilkumar, Advisor, ARISE"],
                                            ["28.02.2025", "Conduct a Session on Achieving Problem-Solution Fit and Product-Market Fit", "Mr. K. Senthilkumar, Advisor, ARISE"],
                                            ["27.02.2025 & 28.02.2025", "Kongu TBI Visit MOU exchange cum Orientation Session", "R.AMBALIGA BHARATHI KAVITHAI – MBA IEV - KIOT"],
                                            ["20.02.2025, 21.02.2025, 24.02.2025", "Three Days Hackathon on \"Best Innovation using PCB Design\"", "Prof B.Sasikumar (HOD AI&DS), Mr.R.Ramesh Kumar (iStart)"],
                                            ["22.02.2025 & 27.02.2025", "MAKE A PRODUCT ROAD SHOW", "Mr.S.Santhosh (IPR Coord), Mr.A.Silambarasan (IIC Convenor)"],
                                            ["02.12.2024", "One day Expert Talk on \"Entrepreneurial Eco System\"", "Mr. K. Senthilkumar, Advisor, ARISE"],
                                            ["24.01.2025", "My Story – Motivational Session by Successful Entrepreneur / Start-up Founder", "Mr. Mitesh Thakkar, Founder – NetZero Living"],
                                            ["22.02.2025", "Idea Ignition-Technical event in Arivili'25", "Mr.Premkumar (ECE), Mr.R.Madhanraj (EEE), Mr.Eswaramoorthy (Mech), Mr.Rajeshkumar (Civil)"],
                                            ["30.12.2024", "Session on “Design Thinking and Innovation for School Teachers”", "Dr.K.Visagavel, Principal, KIOT, Salem"],
                                            ["03.01.2025 & 04.01.2025", "Startup TN Two-Day Investment Ready Bootcamp", "Mr.Premnath, Founder & CEO, Star Insights"],
                                            ["15.01.2025", "Quiz Program", "Department Level"],
                                            ["14.12.2024", "Session on National Energy Conservation Day", "Department Level"],
                                            ["23.01.2025", "Poster Presentation", "Jury: Mr.A.Sekar, Mr.A.Silambarasan, Mr.Rameshkumar"],
                                            ["16.01.2025", "Idea Pitching Competition", "Jury: Mr.A.Sekar, Mr.R.Ayyappan"],
                                            ["03.03.2025", "Engineering Clinic I", "Jury: Mr.A.Silambarasan, Mr.B.S.T.Ragu"],
                                            ["04.03.2025 & 05.03.2025", "Workshop on Prototype/Process Design and Development.", "Mr.R.Ayyappan (IT), Mr.B.S.T.Ragu (Idea Lab)"],
                                            ["22.04.2025", "Session/ Workshop on Business Model Canvas (BMC)", "Mr. K. Senthilkumar, Advisor, ARISE"],
                                            ["18.03.2025", "Field/Exposure Visit to Incubation Unit/Patent Facilitation Centre", "Mr.K.Kannan, Manager Kongu TBI"],
                                            ["09.04.2025", "Overview of Intellectual Property Rights(IPRs)", "Mr.R.Anandasivaraj, Manager-IP, AICTE Indovation Centre"],
                                            ["23.04.2025", "Workshop on “Raising Capital and Managing Finance for Startups”", "Mr. K. Senthilkumar, Advisor, ARISE"],
                                            ["22.04.2025", "Workshop on “Protecting IPRs and IP Management for Startups”", "Mr.Jothi Murugan, Patent Attorney, INVENIRE"],
                                            ["07.05.25 - 09.05.25", "Internal iStart Hackathon for First Year Students", "Mr.A.Sekar, Mrs.V.Sathyapriya, Mr.A.Silambarasan"],
                                            ["21.03.2025 & 22.03.2025", "WILD Frontiers'25", "Mr.Kashyap Shashank Ravi (IFS), Dr.R.Brawin Kumar, Mrs.R.Veeramani"],
                                            ["16.04.2025", "Awarness Session on MSME for Faculty & Student Members", "Mr.Rajendran, Assistant Director, MSME, Coimbatore."],
                                            ["12.05.2025", "Interactive Session with Successful Entrepreneurs - My Story", "Hari Prasanna V, Proprietor, P2G tech"],
                                            ["12.05.2025", "Faculty Development Program on Innovation & Entrepreneurship", "Mr. Arun Raaj Manikaraj, AVP-Investments, AIC Raise"],
                                            ["21.04.2025", "Inauguration of IP UTSAV and World Creativity Day", "Dr. Sacha Wunsch-Vincent (WIPO), Prof. (Dr). Unnat P. Pandit (CGPDTM)"],
                                            ["22.04.2025", "IP UTSAV – Discover more with Design Registrations", "Prof. Gauri Gargate (IIT Kharagpur), Dr. Chakravarthy (Mahindra University)"],
                                            ["23.04.2025", "IP UTSAV – Copy That! Copyrights Uncovered", "Ms. Anooja Padhee (K&S Partners), Dr. Hemant Khosla (Deputy Registrar Copyrights)"],
                                            ["24.04.2025", "IP UTSAV – Trademarks Talk: Masterclass", "Dr. Rahul Taneja, Scientist B, HSCST"],
                                            ["25.04.2025", "IP UTSAV – Significance of IP Protection", "Dr. Sripathi Rao Kulkarni, CSIR Innovation Complex"],
                                            ["26.04.2025", "IP UTSAV – Patent to Product", "Dr. Dara Ajay, Head - TTO IIT Madras"],
                                            ["20.05.2025", "Building YUKTHI Innovation Repositories", "Mr.Dipan Sahu, Asst Innovation Director, MIC"],
                                            ["15.05.2025", "National Technology Day", "Mr.Rameshkumar (AI&DS), Mr.B.S.T.Ragu (Idea Lab)"],
                                            ["26.04.2025", "World IP Day-Innovation and Technology Transfer", "Mr.S.Santhosh, IPR Coordinator, KIOT"],
                                            ["21.04.2025", "Celebration of World Creativity and Innovation Day", "Dr. Sacha Wunsch-Vincent, Prof. (Dr). Unnat P. Pandit"],
                                            ["08.03.2025", "International Womens Day", "Mrs.Mahalakshmi Saravanan, Founder-WEI"],
                                            ["28.08.2025", "Session on Converting Innovation into a Start-up", "Mr.K.Senthilkumar, Advisor, ARISE"],
                                            ["27.06.2025", "Session on Accelerators/Incubation -Opportunities", "Mr.A.Sekar M.E(Ph.D), Head – Incubations, KIOT"],
                                            ["12.08.2025", "Organize Session on “Lean Start-up & MVP”", "Mr. S. Saravanan, EDI – Master Trainer"],
                                            ["29.08.2025", "Session on Angel Investment/VC Funding Opportunity", "Mr.K.Senthilkumar, Advisor, ARISE"],
                                            ["14.08.2025", "Session with Innovation Ecosystem Enablers", "Thiru. Sivarajah Ramanathan, CEO, Startup TN"],
                                            ["20.08.2025 & 21.08.2005", "I&E Outreach Program in Schools", "Magudanchavadi Hr Sec School, Pudur School"],
                                            ["30.07.2025 & 31.07.2025", "24Hrs Non-stop Women’s Hackathon", "Institutional Start-up Competition"],
                                            ["25.07.2025", "Innovation Week (Idea Pitching, Poster Presentation, Demo)", "Mr.M.Dineshkumar, Mr.A.Silambarasan, Mr.S.Arulkesavan, Mr.M.K.Sampath"],
                                            ["04.07.2025", "“Rashtra Pratham” and “Celebrating Failures”", "Ashish Chauhan, MD&CEO of NSE India"],
                                            ["30.09.2025", "IIC Annual Report 2025", "Institution EDC Activity Report"],
                                            ["14.08.2025", "Interactive Session by Successful Entrepreneurs – My Story", "Mr. Viyasan, Alumni-KIOT"],
                                            ["08.08.2025", "My Story – Motivational Session by Startup Founder", "Mr. Sankaranarayanan Ravichandran, Founder & CEO Magnertia"],
                                            ["25.07.2025", "Orientation Session on Government Policies", "Ms.Ponni Velmurugan, AVP StartupTN"],
                                            ["15.07.2025 - 19.08.2025", "FDP Program-Wadhwani Foundation", "Dr. R. Sujatha, Principal Entrepreneur Education"],
                                            ["04.07.2025", "Awarness session on Innovation second Years", "Mrs. P. Raga Keerthana, AP/CSBS, KIOT."],
                                            ["05.06.2025", "World Environment Day", "Thiru.G.Garthikeyan, Head Master"],
                                            ["29.07.2025", "5th Anniversary of NEP 2020", "Mr.S.Santhosh, IPR Coordinator, KIOT"],
                                            ["15.08.2025", "Independence Day –Celebrating Aazadi Ka Amritkal", "Mr.R.Ayyappan, iStart Coordinator"],
                                            ["21.08.2025", "World Entrepreneurs Day", "Mr.A.Sekar, Head-Incubation, iStart."]
                                        ].map(([date, activity, guest], i) => (
                                            <tr key={i} className={`hover:bg-[#ffc107]/10 transition-colors ${i % 2 === 1 ? 'bg-slate-100/80' : 'bg-white'}`}>
                                                <td className="px-6 py-4 text-black font-bold text-[13px] whitespace-nowrap">{date}</td>
                                                <td className="px-6 py-4 text-black font-bold text-[13px] leading-relaxed">{activity}</td>
                                                <td className="px-6 py-4 text-black font-bold text-[13px] leading-relaxed">{guest}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    )}

                    {/* Content for 2023-24 with Semesters */}
                    {activeYear === '2023-24' && (
                        <div className="space-y-12">
                            <div className="flex justify-center gap-4">
                                {['Semester 1', 'Semester 2'].map((sem) => (
                                    <button
                                        key={sem}
                                        onClick={() => setActiveQuarter(sem)}
                                        className={`px-8 py-3 rounded-2xl font-black text-xs uppercase tracking-widest transition-all duration-300 ${
                                            activeQuarter === sem 
                                            ? "bg-[#ffc107] text-[#224292] shadow-xl shadow-yellow-500/20" 
                                            : "bg-slate-100 text-slate-400 hover:bg-slate-200"
                                        }`}
                                    >
                                        {sem}
                                    </button>
                                ))}
                            </div>

                            {/* Semester 1 Table - Full Details */}
                            {activeQuarter === 'Semester 1' && (
                                <div className="overflow-hidden rounded-2xl shadow-sm bg-white border border-slate-100">
                                    <div className="overflow-x-auto">
                                        <table className="w-full text-left border-collapse">
                                            <thead className="bg-[#224292] text-white">
                                                <tr>
                                                    <th className="px-4 py-4 font-black text-[12px] uppercase tracking-wider h-14 whitespace-nowrap">Activity Type</th>
                                                    <th className="px-4 py-4 font-black text-[12px] uppercase tracking-wider h-14 whitespace-nowrap">Program ID</th>
                                                    <th className="px-4 py-4 font-black text-[12px] uppercase tracking-wider h-14 whitespace-nowrap">IIC Suggested Activity</th>
                                                    <th className="px-4 py-4 font-black text-[12px] uppercase tracking-wider h-14 whitespace-nowrap">KIOT Activity Executed</th>
                                                    <th className="px-4 py-4 font-black text-[12px] uppercase tracking-wider h-14 whitespace-nowrap text-center">Dept</th>
                                                    <th className="px-4 py-4 font-black text-[12px] uppercase tracking-wider h-14 text-center">Level</th>
                                                    <th className="px-4 py-4 font-black text-[12px] uppercase tracking-wider h-14 whitespace-nowrap">Date & Duration</th>
                                                    <th className="px-4 py-4 font-black text-[12px] uppercase tracking-wider h-14">Guest Details / Partnered Organizer</th>
                                                    <th className="px-4 py-4 font-black text-[12px] uppercase tracking-wider h-14 whitespace-nowrap">Type</th>
                                                    <th className="px-4 py-4 font-black text-[12px] uppercase tracking-wider h-14">Targeted Participants</th>
                                                    <th className="px-4 py-4 font-black text-[12px] uppercase tracking-wider h-14 text-center">Students</th>
                                                    <th className="px-4 py-4 font-black text-[12px] uppercase tracking-wider h-14 text-center">Faculty</th>
                                                    <th className="px-4 py-4 font-black text-[12px] uppercase tracking-wider h-14">Venue</th>
                                                    <th className="px-4 py-4 font-black text-[12px] uppercase tracking-wider h-14 text-center">Status</th>
                                                </tr>
                                            </thead>
                                            <tbody className="divide-y divide-slate-50">
                                                {[
                                                    ["IIC Calender Activity", "ICA Q1-01", "Workshop on “Entrepreneurship and Innovation” as Career Opportunity", "Workshop on “Entrepreneurship and Innovation” as Career Opportunity", "EEE", "2", "08/12/2023", "Mr.M.Rajasekar & Mr.A.Sekar, MOE IIC Innovation Ambassador, KIOT", "Regular", "I Year Selected Students", "50", "NIL", "A-block SH", "Completed"],
                                                    ["IIC Calender Activity", "ICA Q1-02", "Idea Competition/Challenge/Hackathon", "Internal Hackathon for SIH 2023", "SIH-SPOC", "4", "1/9/2023 to 25/09/2023", "Jury: Mr.M.K.Sampath, Mr.A.Silambarasan, Mr.R.Ayyappan, etc.", "Regular", "All Year Selected Students", "258", "8", "E-block SH", "Completed"],
                                                    ["IIC Calender Activity", "ICA Q1-03", "Exposure and field visit for problem identification", "Exposure and field visit (Yercard Hills)", "Mech (SAE)", "3", "09/09/2023 to 10.09.2023", "Accompanied by: Mr.Naveen Kumar, MOE IIC Innovation Ambassador, KIOT", "Regular", "III Year Selected Students", "100", "5", "A-block SH", "Completed"],
                                                    ["IIC Calender Activity", "ICA Q1-04", "My Story - Motivational Session by Startup founder", "My Story - Motivational Session by Startup founder", "CSBS", "1", "20/10/2023", "Mr.Jeeva Aravindh, Centre Head, STACK-QUEUE, Salem", "Regular", "II Year Selected Students", "70", "NIL", "MBA Block", "Completed"],
                                                    ["Self Drive Activity", "SDA Q1-01", "Awarness Workshop on iStart Ecosystem", "Awarness Workshop on iStart Ecosystem", "MBA", "2", "11/10/2023", "Mr.M.Rajasekar, MoE Innovation Ambassadors, KIOT", "Regular", "I Year MBA Students", "40", "3", "A-block SH", "Completed"],
                                                    ["Self Drive Activity", "SDA Q1-02", "Funding Opportunities through Govt", "Funding Opportunities through Govt for Entrepreneurs", "AI&DS", "2", "01/09/2023", "Dr.Apdul Kathar, District Coordinator, EDII,TN, Salem.", "Prime", "III Year Selected Students", "43", "8", "Collector Office, Salem", "Completed"],
                                                    ["Self Drive Activity", "SDA Q1-03", "Awarness on Startup Ecosystem", "Awarness on Startup Ecosystem for Students", "IT", "2", "01/12/2023", "Mr.A.Sekar, MoE Innovation Ambassadors, KIOT", "Regular", "All I Year B.E./B.Tech Students", "60", "NIL", "E-block SH", "Completed"],
                                                    ["Self Drive Activity", "SDA Q1-04", "Importance of MIC - YUKTI & KAPILA", "Importance of MIC - YUKTI & KAPILA", "CSE", "2", "29/11/2023", "Mr.M.K.Sampath, iStart Dept Coordinator, KIOT", "Prime", "All Years Selected Students", "15", "NIL", "A-block SH", "Completed"],
                                                    ["MIC Driven Activity", "MIC Q1-01", "IIC Regional Meet 2023-24", "IIC Regional Meet 2023-24", "ECE", "2", "4/11/2023", "-", "Regular", "All Years Selected Students", "6", "3", "Nehru Group, Coimbatore", "Completed"],
                                                    ["Celebration Activity", "CA Q1-01", "National Education Day", "National Education Day", "Mech", "2", "11/11/2023", "-", "Regular", "All Years", "63", "5", "-", "Completed"],
                                                    ["Celebration Activity", "CA Q1-02", "National Entrepreneurship Day", "National Entrepreneurship Day", "Mech", "2", "9/11/2023", "-", "Regular", "All Years", "61", "3", "-", "Completed"],
                                                    ["Celebration Activity", "CA Q1-03", "Innovation Day", "Innovation Day", "Mech", "2", "14/11/2023", "-", "Regular", "All Years", "60", "5", "-", "Completed"]
                                                ].map((row, i) => (
                                                    <tr key={i} className={`hover:bg-[#ffc107]/10 transition-colors ${i % 2 === 1 ? 'bg-slate-100/80' : 'bg-white'}`}>
                                                        {row.map((cell, cellIdx) => (
                                                            <td key={cellIdx} className={`px-4 py-4 text-black font-bold text-[13px] leading-relaxed ${[4, 5, 10, 11, 13].includes(cellIdx) ? 'text-center' : ''}`}>
                                                                {cellIdx === 13 ? (
                                                                    <span className="px-2 py-0.5 rounded-full bg-green-100 text-green-700 font-black text-[10px] uppercase tracking-tighter">
                                                                        {cell}
                                                                    </span>
                                                                ) : cell}
                                                            </td>
                                                        ))}
                                                    </tr>
                                                ))}
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            )}

                            {/* Semester 2 Table - Full Details */}
                            {activeQuarter === 'Semester 2' && (
                                <div className="overflow-hidden rounded-2xl shadow-sm bg-white border border-slate-100">
                                    <div className="overflow-x-auto">
                                        <table className="w-full text-left border-collapse">
                                            <thead className="bg-[#224292] text-white">
                                                <tr>
                                                    <th className="px-4 py-4 font-black text-[12px] uppercase tracking-wider h-14 whitespace-nowrap">Activity Type</th>
                                                    <th className="px-4 py-4 font-black text-[12px] uppercase tracking-wider h-14 whitespace-nowrap">Program ID</th>
                                                    <th className="px-4 py-4 font-black text-[12px] uppercase tracking-wider h-14 whitespace-nowrap">IIC Suggested Activity</th>
                                                    <th className="px-4 py-4 font-black text-[12px] uppercase tracking-wider h-14 whitespace-nowrap">KIOT Activity Executed</th>
                                                    <th className="px-4 py-4 font-black text-[12px] uppercase tracking-wider h-14 whitespace-nowrap text-center">Dept</th>
                                                    <th className="px-4 py-4 font-black text-[12px] uppercase tracking-wider h-14 text-center">Level</th>
                                                    <th className="px-4 py-4 font-black text-[12px] uppercase tracking-wider h-14 whitespace-nowrap">Date & Duration</th>
                                                    <th className="px-4 py-4 font-black text-[12px] uppercase tracking-wider h-14">Guest Details / Partnered Organizer</th>
                                                    <th className="px-4 py-4 font-black text-[12px] uppercase tracking-wider h-14 whitespace-nowrap">Type</th>
                                                    <th className="px-4 py-4 font-black text-[12px] uppercase tracking-wider h-14">Targeted Participants</th>
                                                    <th className="px-4 py-4 font-black text-[12px] uppercase tracking-wider h-14 text-center">Students</th>
                                                    <th className="px-4 py-4 font-black text-[12px] uppercase tracking-wider h-14 text-center">Faculty</th>
                                                    <th className="px-4 py-4 font-black text-[12px] uppercase tracking-wider h-14 text-center">Expenditure</th>
                                                    <th className="px-4 py-4 font-black text-[12px] uppercase tracking-wider h-14">Venue</th>
                                                    <th className="px-4 py-4 font-black text-[12px] uppercase tracking-wider h-14 text-center">Status</th>
                                                </tr>
                                            </thead>
                                            <tbody className="divide-y divide-slate-50">
                                                {[
                                                    ["IIC Calender Activity", "ICA Q3-01", "Workshop on Prototype/Process Design and Development.", "Workshop on Prototype/Process Design and Development.", "CIVIL", "3", "20.05.2024", "Mr.M.Rajasekar & Mr.A.Sekar, MOE IIC Innovation Ambassador, KIOT", "Prime", "I Year Members", "40", "NIL", "4000 INR", "iStart Workspace", "Completed"],
                                                    ["IIC Calender Activity", "ICA Q3-02", "Field Visit to Incubation Unit/Patent Facilitation Centre", "Exposure Visit to Incubation Unit - AIC Raise, Coimbatore", "EEE", "3", "14.06.2024", "Field Visit - Coimbatore", "Prime", "All Year Selected Students", "54", "3", "20,000 INR", "AIC Raise, Coimbatore", "Completed"],
                                                    ["IIC Calender Activity", "ICA Q3-03", "Session on “How to plan for Start-up and legal & Ethical Steps”", "Session on “How to plan for Start-up and legal & Ethical Steps”", "CSBS", "1", "31.05.2024", "Mr. Ajith Selvaraju, CEO & Founder, N’kisi Institute of Training", "Prime", "I Year Members", "55", "NIL", "4000 INR", "iStart Workspace", "Completed"],
                                                    ["IIC Calender Activity", "ICA Q3-04", "Institutional Business Plan Competition", "iStart Hackathon : 48 hrs Non-Stop Project Competition", "ECE", "4", "25.03.2024 - 27.03.2024", "1) Dr.A.Apdhul Kathar (EDII-TN), 2) Mr.Vijayakumar (Infosys), 3) Mr.Kathirvel (CPO), 4) Mr.Jeevan (Lab2Life)", "Regular", "All Year Selected Students", "180", "30", "2.50 Lakh INR", "iStart Workspace", "Completed"],
                                                    ["IIC Calender Activity", "ICA Q3-05", "Workshop on Intellectual Property Rights (IPRs)", "Workshop on Intellectual Property Rights (IPRs)", "MECH", "2", "24.05.2024", "Mr. Jothi Murugan, Patent Agent, INVENIRE, Coimbatore", "Regular", "II Year members", "59", "10", "10,000 INR", "MBA Block", "Completed"],
                                                    ["Self Drive Activity", "SDA Q3-01", "Orientation Session on Govt Policies for Entrepreneurship", "Orientation Session on Govt Policies for Entrepreneurship", "IT", "2", "25.03.2024", "Dr.A.Apdhul Kathar, District Coordinator, EDII-TN, Salem", "Prime", "II Year members", "60", "2", "2,000 INR", "E-block SH", "Completed"],
                                                    ["Self Drive Activity", "SDA Q3-02", "Interactive Session with Successful Entrepreneurs - My Story", "Interactive Session with Successful Entrepreneurs - My Story", "CSBS", "1", "12.04.2024", "Mr. G. Jayasurya, CEO & Founder, Cybernaut, Karur", "Prime", "III Year Selected Students", "70", "NIL", "7,000 INR", "A-block SH", "Completed"],
                                                    ["Self Drive Activity", "SDA Q3-03", "Workshop on \"Funding Proposal Writing for start-Ups\"", "Workshop on \"Funding Proposal Writing for start-Ups\"", "ECE", "3", "07.03.2024", "Mr.M.Rajasekar & Mr.A.Sekar, MOE IIC Innovation Ambassador, KIOT", "Regular", "All I Year B.E./B.Tech Students", "70", "NIL", "NIL", "E-block SH", "Completed"],
                                                    ["Self Drive Activity", "SDA Q3-04", "Motivation Session - MilkyMist Journey", "Motivation Session - MilkyMist Journey", "CSE", "2", "10.03.2024", "Mr.T.Sathishkumar, Founder & MD, Milky Mist Diary Foods", "Regular", "All Years", "2000", "150", "20,000 INR", "Open Stadium", "Completed"],
                                                    ["Self Drive Activity", "SDA Q3-05", "Utilization of Incubation Space to Start-Up Career", "Utilization of Incubation Space to Start-Up Career", "CIVIL", "2", "10.03.2024", "Dr.R.Velraj, Vice Chancellor, Anna University, Chennai", "Regular", "All Years", "1600", "150", "20,000 INR", "Open Stadium", "Completed"],
                                                    ["Celebration Activity", "CA Q3-01", "National Technology Day", "National Technology Day", "Mech", "2", "11.05.2025", "-", "Regular", "All Years selected students", "42", "NIL", "1,000 INR", "iStart Workspace", "Completed"],
                                                    ["Celebration Activity", "CA Q3-02", "World Creativity and Innovation Day", "World Creativity and Innovation Day", "Mech", "2", "21.04.2025", "-", "Regular", "All Years selected students", "45", "NIL", "1,000 INR", "iStart Workspace", "Completed"],
                                                    ["Celebration Activity", "CA Q3-03", "International Women's Day", "International Women's Day", "Mech", "2", "08.03.2025", "-", "Regular", "All Years selected students", "45", "NIL", "1,000 INR", "iStart Workspace", "Completed"]
                                                ].map((row, i) => (
                                                    <tr key={i} className={`hover:bg-[#ffc107]/10 transition-colors ${i % 2 === 1 ? 'bg-slate-100/80' : 'bg-white'}`}>
                                                        {row.map((cell, cellIdx) => (
                                                            <td key={cellIdx} className={`px-4 py-4 text-black font-bold text-[13px] leading-relaxed ${[4, 5, 10, 11, 12, 14].includes(cellIdx) ? 'text-center' : ''}`}>
                                                                {cellIdx === 14 ? (
                                                                    <span className="px-2 py-0.5 rounded-full bg-green-100 text-green-700 font-black text-[10px] uppercase tracking-tighter">
                                                                        {cell}
                                                                    </span>
                                                                ) : cell}
                                                            </td>
                                                        ))}
                                                    </tr>
                                                ))}
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            )}
                        </div>
                    )}
                </div>
            </section>

            {/* Lightbox Modal for Certificate */}
            <AnimatePresence>
                {showCert && (
                    <div className="fixed inset-0 z-[200] flex items-center justify-center p-4 md:p-10">
                        <motion.div 
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setShowCert(false)}
                            className="absolute inset-0 bg-black/95 backdrop-blur-md"
                        />
                        <motion.button
                            initial={{ opacity: 0, scale: 0.5 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.5 }}
                            onClick={() => setShowCert(false)}
                            className="absolute top-6 right-6 z-[210] w-10 h-10 flex items-center justify-center rounded-full bg-white/10 text-white hover:bg-[#ffc107] hover:text-[#224292] transition-all"
                        >
                            <CloseIcon size={20} />
                        </motion.button>
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9, y: 20 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.9, y: 20 }}
                            className="relative z-[205] max-w-5xl max-h-full overflow-hidden rounded-2xl shadow-2xl bg-white p-2"
                        >
                            <img 
                                src={certImg} 
                                alt="IIC Certificate"
                                className="max-w-full max-h-[85vh] object-contain mx-auto rounded-lg"
                            />
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>
        </div>
    )
}

export default IICPage
