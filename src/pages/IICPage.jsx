import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Lightbulb, ArrowLeft, Users, Target, Rocket, Star, ArrowRight, X as CloseIcon } from 'lucide-react'
import { useNavigate, Link } from 'react-router-dom'
import iicImg from '../assets/iStart/iic.webp'
import certImg from '../assets/iStart/IIC-certificate.webp'

const IICPage = () => {
    const navigate = useNavigate()
    const [showCert, setShowCert] = useState(false)
    const [openYears, setOpenYears] = useState({ '2025-26': false, '2024-25': false, '2023-24': false })
    const toggleYearDetails = (year) => {
        setOpenYears(prev => ({ ...prev, [year]: !prev[year] }))
    }
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
            <section className="py-24 bg-[#224292] border-t border-white/10 relative overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,193,7,0.08),transparent)] pointer-events-none" />
                <div className="max-w-7xl mx-auto px-6 lg:px-10 relative z-10">
                    <div className="max-w-3xl mx-auto text-center space-y-6">
                        <div className="flex items-center justify-center gap-4 mb-2">
                            <div className="w-1.5 h-10 bg-[#ffc107] rounded-full" />
                            <h2 className="text-4xl font-black text-white tracking-tighter">
                                Students Institute Innovation Council Members
                            </h2>
                        </div>
                        <p className="text-white/80 font-bold text-sm">
                            Click below to view the full list of our active student members for the Academic Year 2025-26.
                        </p>
                        <div className="inline-block mt-4">
                            <Link to="/research-innovation/iic/members" className="group flex items-center gap-6 bg-white hover:bg-[#ffc107] p-8 rounded-3xl border border-white/20 transition-all duration-500 hover:shadow-2xl hover:scale-105">
                                <div className="w-16 h-16 rounded-2xl bg-[#224292] group-hover:bg-[#224292] flex items-center justify-center text-white transition-colors shadow-md">
                                    <Users size={32} />
                                </div>
                                <div className="text-left">
                                    <span className="block text-4xl font-black text-[#224292] leading-none mb-1">
                                        30
                                    </span>
                                    <span className="block text-xs font-bold text-slate-500 uppercase tracking-widest">
                                        Total Active Members
                                    </span>
                                </div>
                                <div className="w-10 h-10 rounded-full bg-[#ffc107]/10 group-hover:bg-[#224292]/10 flex items-center justify-center text-[#224292] transition-colors">
                                    <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                                </div>
                            </Link>
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
            <section className="py-16 lg:py-24 bg-white border-t border-slate-100">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-10">
                    <div className="flex items-center justify-center gap-4 mb-12 text-center">
                        <div className="w-1.5 h-10 bg-[#ffc107] rounded-full" />
                        <h2 className="text-4xl font-black text-[#224292] tracking-tighter">
                            IIC <span className="text-[#ffc107]">ACTIVITIES</span>
                        </h2>
                        <div className="w-1.5 h-10 bg-[#ffc107] rounded-full" />
                    </div>
                    
                    {/* Unified Activities Display */}
                    {(() => {
                        const activitiesData = {
                            '2025-26': [{"date": "17.02.2025", "activity": "Workshop on Effective Sales and Marketing Strategies for Entrepreneurs /Startups", "participants": "45"}, {"date": "20.02.2025 & 21.02.2025", "activity": "Session on transforming Idea to Product Development", "participants": "45"}, {"date": "21.02.2025", "activity": "Session on Intellectual Property Rights", "participants": "45"}, {"date": "20.02.2025 & 21.02.2025 & 24.02.2025", "activity": "Three Days Hackathon on \"Best Innovation using PCB Design\"", "participants": "45"}, {"date": "22.02.2025 & 27.02.2025", "activity": "Make A Product Road Show", "participants": "42"}, {"date": "22.02.2025", "activity": "Idea Ignition-Technical event in Arivili'25", "participants": "50"}, {"date": "27.02.2025 & 28.02.2025", "activity": "Kongu TBI Visit MOU exchange cum Orientation Session", "participants": "46"}, {"date": "28.02.2025", "activity": "Conduct a Session on Achieving Problem-Solution Fit and Product-Market Fit", "participants": "44"}, {"date": "03.03.2025", "activity": "National Science Day", "participants": "46"}, {"date": "04.03.2025", "activity": "Workshop on Prototype/Process Design and Development.", "participants": "55"}, {"date": "08.03.2025", "activity": "International Womens Day", "participants": "45"}, {"date": "21.03.2025 & 22.03.2025", "activity": "WILD Frontiers'25", "participants": "133"}, {"date": "02.04.2025", "activity": "Session on \u201cHow to plan for Start-up and legal & Ethical Steps\u201d", "participants": "45"}, {"date": "09.04.2025", "activity": "Workshop on \u201cRaising Capital and Managing Finance for Startups\u201d", "participants": "45"}, {"date": "16.04.2025", "activity": "Awarness Session on MSME for Faculty &Student Members", "participants": "48"}, {"date": "21.04.2025", "activity": "Celebration of World Creativity and Innovation Day", "participants": "45"}, {"date": "21.04.2025 & 26.04.2025", "activity": "IP UTSAV", "participants": "48"}, {"date": "25.04.2025", "activity": "Significance of IP Protection and Commercialization", "participants": "53"}, {"date": "26.04.2025", "activity": "World Intellectual Property Day", "participants": "53"}, {"date": "07.05.2025 & 08.05.2025 & 09.05.2025", "activity": "iStart Hackathon & YUKTI Submission", "participants": "60"}, {"date": "11.05.2025", "activity": "National Technology Day", "participants": "63"}, {"date": "12.05.2025", "activity": "Awarness Session on Business Model and Entrepreneuship for Faculty Members", "participants": "53"}, {"date": "12.05.2025", "activity": "Interactive Session with Successful Entrepreneurs - My Story", "participants": "45"}, {"date": "05.06.2025", "activity": "World Environment Day", "participants": "45"}, {"date": "27.06.2025", "activity": "Session on Accelerators/Incubation -Opportunities for Students & Faculties \u2013 Early-Stage Entrepreneurs", "participants": "52"}, {"date": "04.07.2025", "activity": "\u201cRashtra Pratham\u201d and \u201cCelebrating Failures\u201d", "participants": "68"}, {"date": "04.07.2025", "activity": "Awarness session on Innovation and design thinking second Years", "participants": "45"}, {"date": "15.07.2025 & 19.08.2025", "activity": "FDP Program-Wadhwani Foundation", "participants": "29"}, {"date": "25.07.2025", "activity": "Orientation Session on \"Government Bodies and Policy for supporting Entrepreneurship\"", "participants": "60"}, {"date": "25.07.2025", "activity": "Innovation Week (Idea Pitching, Poster Presentation,Product Demo)", "participants": "81"}, {"date": "29.07.2025", "activity": "5th Anniversary of NEP 2020", "participants": "63"}, {"date": "30.07.2025 & 31.07.2025", "activity": "Organize an Inter/Intra Institutional Start-up Competition and Reward the Best Start-ups and deposition in the Institution\u2019s YUKTI Innovation Repository", "participants": "88"}, {"date": "08.08.2025", "activity": "My Story \u2013 Motivational Session by Successful Entrepreneur / Start-up Founder", "participants": "55"}, {"date": "12.08.2025", "activity": "Organize Session on \u201cLean Start-up & Minimum Viable Product/Business\u201d- Boot Camp (or) Mentoring Session", "participants": "44"}, {"date": "14.08.2025", "activity": "Session/ Panel discussion with innovation and Start-up Ecosystem Enablers from the region/state/national level", "participants": "220"}, {"date": "14.08.2025", "activity": "Interactive Session by Successful Entrepreneurs \u2013 My Story", "participants": "55"}, {"date": "15.08.2025", "activity": "Independence Day \u2013Celebrating Aazadi Ka Amritkal", "participants": "66"}, {"date": "20.08.2025 & 21.08.2005", "activity": "Organizing Innovation & Entrepreneurship Outreach Program by involving ATLs/SICs in Schools", "participants": "66"}, {"date": "21.08.2025", "activity": "World Entrepreneurs Day", "participants": "33"}, {"date": "28.08.2025", "activity": "Session on Converting Innovation into a Start-up", "participants": "48"}, {"date": "12.08.2025", "activity": "Session on Angel Investment/VC Funding Opportunity for Early-Stage Entrepreneurs.", "participants": "48"}, {"date": "10.09.2025", "activity": "Capacity Building Programme: Workshop on Design Thinking", "participants": "40"}, {"date": "15.09.2025", "activity": "Celebration of Engineers Day", "participants": "45"}, {"date": "15.09.2025", "activity": "Smart India Internal Hackathon", "participants": "328"}, {"date": "19.09.2025", "activity": "Capacity Building Programme: Workshop on Design Thinking", "participants": "40"}, {"date": "20.09.2025", "activity": "CognitiveX:IBM GenAI Hackathon", "participants": "368"}, {"date": "22.09.2025", "activity": "Awarness Session on Smart India Hackathon (Online Mode)", "participants": "65"}, {"date": "26.09.2025", "activity": "An Interactive Session on Idea to Impact: Shaping Student & Faculty Entrepreneurs", "participants": "60"}, {"date": "28.09.2025", "activity": "2025 WEI Business Pitch Competition", "participants": "45"}, {"date": "29.09.2025", "activity": "Workshop on \u201cEntrepreneurship and Innovation\u201d as a Career Opportunity", "participants": "45"}, {"date": "30.09.2025", "activity": "My Story - Motivational Session by Successful Innovators", "participants": "45"}, {"date": "30.09.2025", "activity": "From Idea to Impact - Motivational Session by Successful Entrepreneur/Start-up Founder", "participants": "45"}, {"date": "30.09.2025", "activity": "IIC Annual Report 2025", "participants": "0"}, {"date": "09.10.2025 & 10.10.2025", "activity": "StartupTN Global Startup Summit-2025 - TNGSS (Distrupt To Rise)", "participants": "120"}, {"date": "15.10.2025", "activity": "Innovation Day Celebration - Innovation Insights by Student Innovators", "participants": "65"}, {"date": "22.10.2025", "activity": "Orientation Session on IIC 8.0 Calendar & R&D Cell Activities for AY 2025\u201326", "participants": "88"}, {"date": "30.10.2025", "activity": "Product Market fit;Prototype/Process Design and MVP Development", "participants": "45"}, {"date": "06.11.2025", "activity": "Session on the \u201cBasics of Intellectual Property Rights and its Importance for Innovators and Entrepreneurs\u201d.", "participants": "45"}, {"date": "07.11.2025", "activity": "Ask Me Anything", "participants": "114"}, {"date": "11.11.2025", "activity": "National Education Day", "participants": "45"}, {"date": "15.11.2025", "activity": "Workshop on AI and I4.0 Tools for Innovators and Entrepreneurs", "participants": "46"}, {"date": "18.11.2025", "activity": "National Entrepreneurship Day", "participants": "45"}, {"date": "02.12.2025", "activity": "National Pollution Control Day", "participants": "56"}, {"date": "05.12.2025", "activity": "Workshop on Design Thinking, Critical thinking and Innovation Design", "participants": "60"}, {"date": "13.12.2025", "activity": "Innovation & Entrepreneurship Outreach Program in Schools", "participants": "130"}, {"date": "14.12.2026", "activity": "National Energy Conservation Day (India)", "participants": "45"}, {"date": "12.01.2026", "activity": "National Youth Day", "participants": "60"}, {"date": "16.01.2026", "activity": "National Startup Day", "participants": "73"}, {"date": "30.01.2026", "activity": "My Story \u2013 Motivational Session by Successful Entrepreneur / Start-up Founder", "participants": "43"}, {"date": "02.02.2026", "activity": "World Wet Land Day", "participants": "103"}],
                            '2024-25': [{"date": "27.09.2024", "activity": "Workshop on \u201cEntrepreneurship and Innovation\u201d as a Career Opportunity", "participants": "N/A"}, {"date": "18.10.2024", "activity": "Session on My Story-Motivational Session by Successful Entrepreneur/Startup Founder", "participants": "N/A"}, {"date": "07.11.2024", "activity": "Session on My Story-Motivational Session by Successful Entrepreneur/Startup Founder", "participants": "N/A"}, {"date": "27.11.2024 & 28.11.2024", "activity": "Session on Startup Ecosystems: India and Global Perspectives", "participants": "N/A"}, {"date": "28.10.2024", "activity": "Session on the \u201cBasics of Intellectual Property Rights and its Importance for Innovators and Entrepreneurs\u201d.", "participants": "N/A"}, {"date": "25.11.2024", "activity": "Visit to \"AIC RAISE Incubation Centre", "participants": "N/A"}, {"date": "29.10.2024", "activity": "Pitch Perfect - Idea Presentation", "participants": "N/A"}, {"date": "01.11.2024", "activity": "Puthulir 2024 - TN School Innovation & Ideation Challenge", "participants": "N/A"}, {"date": "15.10.2024", "activity": "One Day Workshop -\"Entrepreneur-Overcoming Challenges with Embracing Opportunity\"", "participants": "N/A"}, {"date": "07.11.2024", "activity": "One Day Expert Talk on -\"Business Idea & Problem Solution fit\"", "participants": "N/A"}, {"date": "09.11.2024", "activity": "One Day Expert Talk on \"Steps Behind My Success\"", "participants": "N/A"}, {"date": "11.11.2024 & 12.11.2024", "activity": "Four Days Hands on Workshop - \"Lean Canvas Business Model\"", "participants": "N/A"}, {"date": "16.11.2024", "activity": "Two Days Expert Talk on \"Essential Financial Insights for Entrepreneurial Success\"", "participants": "N/A"}, {"date": "08.11.2024", "activity": "Live Session on MIC Programmes & Schemes", "participants": "N/A"}, {"date": "15.10.2024", "activity": "Institution's Innovation Day (Dr APJ Abdul Kalam's birth anniversary)", "participants": "N/A"}, {"date": "09.11.2024", "activity": "National Entrepreneurship Day", "participants": "N/A"}, {"date": "11.11.2024", "activity": "National Education Day", "participants": "N/A"}, {"date": "05.12.2024 - 07.12.2024", "activity": "Workshop on Design Thinking, Critical thinking and Innovation Design", "participants": "N/A"}, {"date": "20.02.2025 & 21.02.2025", "activity": "Session on transforming Idea to Product Development", "participants": "N/A"}, {"date": "21.02.2025", "activity": "Session on Intellectual Property Rights", "participants": "N/A"}, {"date": "17.02.2025", "activity": "Workshop on Effective Sales and Marketing Strategies for Entrepreneurs /Startups", "participants": "N/A"}, {"date": "28.02.2025", "activity": "Conduct a Session on Achieving Problem-Solution Fit and Product-Market Fit", "participants": "N/A"}, {"date": "27.02.2025 & 28.02.2025", "activity": "Kongu TBI Visit MOU exchange cum Orientation Session", "participants": "N/A"}, {"date": "20.02.2025, 21.02.2025, 24.02.2025", "activity": "Three Days Hackathon on \"Best Innovation using PCB Design\"", "participants": "N/A"}, {"date": "22.02.2025 & 27.02.2025", "activity": "MAKE A PRODUCT ROAD SHOW", "participants": "N/A"}, {"date": "02.12.2024", "activity": "One day Expert Talk on \"Entrepreneurial Eco System\"", "participants": "N/A"}, {"date": "24.01.2025", "activity": "My Story \u2013 Motivational Session by Successful Entrepreneur / Start-up Founder", "participants": "N/A"}, {"date": "22.02.2025", "activity": "Idea Ignition-Technical event in Arivili'25", "participants": "N/A"}, {"date": "30.12.2024", "activity": "Session on \u201cDesign Thinking and Innovation for School Teachers\u201d", "participants": "N/A"}, {"date": "03.01.2025 & 04.01.2025", "activity": "Startup TN Two-Day Investment Ready Bootcamp", "participants": "N/A"}, {"date": "15.01.2025", "activity": "Quiz Program", "participants": "N/A"}, {"date": "14.12.2024", "activity": "Session on National Energy Conservation Day", "participants": "N/A"}, {"date": "23.01.2025", "activity": "Poster Presentation", "participants": "N/A"}, {"date": "16.01.2025", "activity": "Idea Pitching Competition", "participants": "N/A"}, {"date": "03.03.2025", "activity": "Engineering Clinic I", "participants": "N/A"}, {"date": "04.03.2025 & 05.03.2025", "activity": "Workshop on Prototype/Process Design and Development.", "participants": "N/A"}, {"date": "22.04.2025", "activity": "Session/ Workshop on Business Model Canvas (BMC)", "participants": "N/A"}, {"date": "18.03.2025", "activity": "Field/Exposure Visit to Incubation Unit/Patent Facilitation Centre", "participants": "N/A"}, {"date": "09.04.2025", "activity": "Overview of Intellectual Property Rights(IPRs)", "participants": "N/A"}, {"date": "23.04.2025", "activity": "Workshop on \u201cRaising Capital and Managing Finance for Startups\u201d", "participants": "N/A"}, {"date": "22.04.2025", "activity": "Workshop on \u201cProtecting IPRs and IP Management for Startups\u201d", "participants": "N/A"}, {"date": "07.05.25 - 09.05.25", "activity": "Internal iStart Hackathon for First Year Students", "participants": "N/A"}, {"date": "21.03.2025 & 22.03.2025", "activity": "WILD Frontiers'25", "participants": "N/A"}, {"date": "16.04.2025", "activity": "Awarness Session on MSME for Faculty & Student Members", "participants": "N/A"}, {"date": "12.05.2025", "activity": "Interactive Session with Successful Entrepreneurs - My Story", "participants": "N/A"}, {"date": "12.05.2025", "activity": "Faculty Development Program on Innovation & Entrepreneurship", "participants": "N/A"}, {"date": "21.04.2025", "activity": "Inauguration of IP UTSAV and World Creativity Day", "participants": "N/A"}, {"date": "22.04.2025", "activity": "IP UTSAV \u2013 Discover more with Design Registrations", "participants": "N/A"}, {"date": "23.04.2025", "activity": "IP UTSAV \u2013 Copy That! Copyrights Uncovered", "participants": "N/A"}, {"date": "24.04.2025", "activity": "IP UTSAV \u2013 Trademarks Talk: Masterclass", "participants": "N/A"}, {"date": "25.04.2025", "activity": "IP UTSAV \u2013 Significance of IP Protection", "participants": "N/A"}, {"date": "26.04.2025", "activity": "IP UTSAV \u2013 Patent to Product", "participants": "N/A"}, {"date": "20.05.2025", "activity": "Building YUKTHI Innovation Repositories", "participants": "N/A"}, {"date": "15.05.2025", "activity": "National Technology Day", "participants": "N/A"}, {"date": "26.04.2025", "activity": "World IP Day-Innovation and Technology Transfer", "participants": "N/A"}, {"date": "21.04.2025", "activity": "Celebration of World Creativity and Innovation Day", "participants": "N/A"}, {"date": "08.03.2025", "activity": "International Womens Day", "participants": "N/A"}, {"date": "28.08.2025", "activity": "Session on Converting Innovation into a Start-up", "participants": "N/A"}, {"date": "27.06.2025", "activity": "Session on Accelerators/Incubation -Opportunities", "participants": "N/A"}, {"date": "12.08.2025", "activity": "Organize Session on \u201cLean Start-up & MVP\u201d", "participants": "N/A"}, {"date": "29.08.2025", "activity": "Session on Angel Investment/VC Funding Opportunity", "participants": "N/A"}, {"date": "14.08.2025", "activity": "Session with Innovation Ecosystem Enablers", "participants": "N/A"}, {"date": "20.08.2025 & 21.08.2005", "activity": "I&E Outreach Program in Schools", "participants": "N/A"}, {"date": "30.07.2025 & 31.07.2025", "activity": "24Hrs Non-stop Women\u2019s Hackathon", "participants": "N/A"}, {"date": "25.07.2025", "activity": "Innovation Week (Idea Pitching, Poster Presentation, Demo)", "participants": "N/A"}, {"date": "04.07.2025", "activity": "\u201cRashtra Pratham\u201d and \u201cCelebrating Failures\u201d", "participants": "N/A"}, {"date": "30.09.2025", "activity": "IIC Annual Report 2025", "participants": "N/A"}, {"date": "14.08.2025", "activity": "Interactive Session by Successful Entrepreneurs \u2013 My Story", "participants": "N/A"}, {"date": "08.08.2025", "activity": "My Story \u2013 Motivational Session by Startup Founder", "participants": "N/A"}, {"date": "25.07.2025", "activity": "Orientation Session on Government Policies", "participants": "N/A"}, {"date": "15.07.2025 - 19.08.2025", "activity": "FDP Program-Wadhwani Foundation", "participants": "N/A"}, {"date": "04.07.2025", "activity": "Awarness session on Innovation second Years", "participants": "N/A"}, {"date": "05.06.2025", "activity": "World Environment Day", "participants": "N/A"}, {"date": "29.07.2025", "activity": "5th Anniversary of NEP 2020", "participants": "N/A"}, {"date": "15.08.2025", "activity": "Independence Day \u2013Celebrating Aazadi Ka Amritkal", "participants": "N/A"}, {"date": "21.08.2025", "activity": "World Entrepreneurs Day", "participants": "N/A"}],
                            '2023-24': [{"date": "08/12/2023", "activity": "Workshop on \u201cEntrepreneurship and Innovation\u201d as Career Opportunity", "participants": "50"}, {"date": "1/9/2023 to 25/09/2023", "activity": "Internal Hackathon for SIH 2023", "participants": "258"}, {"date": "09/09/2023 to 10.09.2023", "activity": "Exposure and field visit (Yercard Hills)", "participants": "100"}, {"date": "20/10/2023", "activity": "My Story - Motivational Session by Startup founder", "participants": "70"}, {"date": "11/10/2023", "activity": "Awarness Workshop on iStart Ecosystem", "participants": "40"}, {"date": "01/09/2023", "activity": "Funding Opportunities through Govt for Entrepreneurs", "participants": "43"}, {"date": "01/12/2023", "activity": "Awarness on Startup Ecosystem for Students", "participants": "60"}, {"date": "29/11/2023", "activity": "Importance of MIC - YUKTI & KAPILA", "participants": "15"}, {"date": "4/11/2023", "activity": "IIC Regional Meet 2023-24", "participants": "6"}, {"date": "11/11/2023", "activity": "National Education Day", "participants": "63"}, {"date": "9/11/2023", "activity": "National Entrepreneurship Day", "participants": "61"}, {"date": "14/11/2023", "activity": "Innovation Day", "participants": "60"}, {"date": "20.05.2024", "activity": "Workshop on Prototype/Process Design and Development.", "participants": "40"}, {"date": "14.06.2024", "activity": "Exposure Visit to Incubation Unit - AIC Raise, Coimbatore", "participants": "54"}, {"date": "31.05.2024", "activity": "Session on \u201cHow to plan for Start-up and legal & Ethical Steps\u201d", "participants": "55"}, {"date": "25.03.2024 - 27.03.2024", "activity": "iStart Hackathon : 48 hrs Non-Stop Project Competition", "participants": "180"}, {"date": "24.05.2024", "activity": "Workshop on Intellectual Property Rights (IPRs)", "participants": "59"}, {"date": "25.03.2024", "activity": "Orientation Session on Govt Policies for Entrepreneurship", "participants": "60"}, {"date": "12.04.2024", "activity": "Interactive Session with Successful Entrepreneurs - My Story", "participants": "70"}, {"date": "07.03.2024", "activity": "Workshop on \"Funding Proposal Writing for start-Ups\"", "participants": "70"}, {"date": "10.03.2024", "activity": "Motivation Session - MilkyMist Journey", "participants": "2000"}, {"date": "10.03.2024", "activity": "Utilization of Incubation Space to Start-Up Career", "participants": "1600"}, {"date": "11.05.2025", "activity": "National Technology Day", "participants": "42"}, {"date": "21.04.2025", "activity": "World Creativity and Innovation Day", "participants": "45"}, {"date": "08.03.2025", "activity": "International Women's Day", "participants": "45"}]
                        };
                        
                        return (
                            <div className="space-y-6">
                                {['2025-26', '2024-25', '2023-24'].map((year) => {
                                    const currentData = activitiesData[year] || [];
                                    const isOpen = openYears[year];
                                    
                                    return (
                                        <div key={year} className="bg-white rounded-xl shadow-md border border-slate-100 p-4 sm:p-6">
                                            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                                                <div className="flex items-center gap-3">
                                                    <div className="text-lg md:text-xl font-black text-[#224292]">
                                                        AY {year}
                                                    </div>
                                                </div>
                                                <div>
                                                    <button 
                                                        onClick={() => toggleYearDetails(year)}
                                                        className="text-[#224292] hover:text-[#ffc107] font-bold text-sm underline cursor-pointer transition-colors"
                                                    >
                                                        Total Number of Activities: {currentData.length}
                                                    </button>
                                                </div>
                                            </div>
                                            
                                            {isOpen && (
                                                <div className="overflow-hidden rounded-xl border border-slate-200 mt-6 animate-in fade-in slide-in-from-top-4 duration-500 shadow-sm">
                                                    <div className="overflow-x-auto">
                                                        <table className="w-full text-left border-collapse min-w-[600px]">
                                                            <thead className="bg-[#224292] text-white">
                                                                <tr>
                                                                    <th className="px-3 sm:px-6 py-3 sm:py-4 font-black text-[11px] sm:text-[12px] uppercase tracking-wider h-12 sm:h-14 whitespace-nowrap w-16">S.No</th>
                                                                    <th className="px-3 sm:px-6 py-3 sm:py-4 font-black text-[11px] sm:text-[12px] uppercase tracking-wider h-12 sm:h-14 whitespace-nowrap w-32">Date</th>
                                                                    <th className="px-3 sm:px-6 py-3 sm:py-4 font-black text-[11px] sm:text-[12px] uppercase tracking-wider h-12 sm:h-14">Name of the Activity</th>
                                                                    <th className="px-3 sm:px-6 py-3 sm:py-4 font-black text-[11px] sm:text-[12px] uppercase tracking-wider h-12 sm:h-14 whitespace-nowrap text-center w-32">Number of Participants</th>
                                                                </tr>
                                                            </thead>
                                                            <tbody className="divide-y divide-slate-100">
                                                                {currentData.map((row, i) => (
                                                                    <tr key={i} className={`hover:bg-[#ffc107]/10 transition-colors ${i % 2 === 1 ? 'bg-slate-50' : 'bg-white'}`}>
                                                                        <td className="px-3 sm:px-6 py-3 sm:py-4 text-[#224292] font-black text-[12px] sm:text-[13px] whitespace-nowrap">{i + 1}</td>
                                                                        <td className="px-3 sm:px-6 py-3 sm:py-4 text-black font-bold text-[12px] sm:text-[13px] whitespace-nowrap">{row.date}</td>
                                                                        <td className="px-3 sm:px-6 py-3 sm:py-4 text-black font-bold text-[12px] sm:text-[13px] leading-relaxed">{row.activity}</td>
                                                                        <td className="px-3 sm:px-6 py-3 sm:py-4 text-black font-black text-[12px] sm:text-[13px] text-center whitespace-nowrap">{row.participants}</td>
                                                                    </tr>
                                                                ))}
                                                            </tbody>
                                                        </table>
                                                    </div>
                                                </div>
                                            )}
                                        </div>
                                    );
                                })}
                            </div>
                        );
                    })()}
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
