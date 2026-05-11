import React from 'react'
import { motion } from 'framer-motion'
import { useParams, Link } from 'react-router-dom'
import { 
    ChevronRight, 
    ArrowLeft,
    Handshake,
    ShieldCheck,
    Coins,
    Calendar,
    Award,
    Briefcase,
    Globe
} from 'lucide-react'

const SponsoredProjectsPage = () => {
    const { deptName } = useParams()

    const formatDeptName = (name) => {
        if (!name) return "Departmentwise"
        return name.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')
    }

    const allMhrdPrograms = {
        'mechanical-engineering': [
            { id: 1, title: "Research Methodologies", agency: "MHRD", duration: "25.06.2012 to 04.07.2012", fund: "1,42,719" },
            { id: 2, title: "Engineering Thermodynamics", agency: "MHRD", duration: "11.12.2012 to 21.12.2012", fund: "2,44,685" },
            { id: 3, title: "Research Methods in Education Technology", agency: "MHRD", duration: "02.02.2013 & 09.02.2013", fund: "7,000" },
            { id: 4, title: "Database Management Systems", agency: "MHRD", duration: "21.05.2013 to 31.05.2013", fund: "1,31,616" },
            { id: 5, title: "Analog Electronics", agency: "MHRD", duration: "04.06.2013 to 14.06.2013", fund: "1,61,578" },
            { id: 6, title: "Green Building Awareness", agency: "MHRD", duration: "24.08.2013", fund: "3,000" },
            { id: 7, title: "Engineering Mechanics", agency: "MHRD", duration: "26.11.2013 to 06.11.2013", fund: "1,95,706" },
            { id: 8, title: "Signals & Systems", agency: "MHRD", duration: "02.01.2014 to 12.01.2014", fund: "1,55,073" },
            { id: 9, title: "Fluid Mechanics", agency: "MHRD", duration: "20.05.2014 to 30.05.2014", fund: "2,07,001" },
            { id: 10, title: "Computer Programming", agency: "MHRD", duration: "16.06.2014 to 21.06.2014", fund: "81,422" },
            { id: 11, title: "Computer Networking", agency: "MHRD", duration: "30.06.2014 to 05.07.2014", fund: "96,886" },
            { id: 12, title: "Cyber Security", agency: "MHRD", duration: "10.07.2014 to 20.07.2014", fund: "1,64,626" },
            { id: 13, title: "Control Systems", agency: "MHRD", duration: "02.12.2014 to 12.12.2014", fund: "1,76,970" },
            { id: 14, title: "Pedagogy for Effective use of ICT in Engineering Education", agency: "MHRD", duration: "05.01.2015 to 07.01.2015 & 19.01.2015 to 21.01.2015", fund: "71,330" },
            { id: 15, title: "Introduction to Design of Algorithms", agency: "MHRD", duration: "25.05.2015 to 30.05.2015", fund: "88,600" },
            { id: 16, title: "Environmental Studies", agency: "MHRD", duration: "02.06.2015 to 12.06.2015", fund: "2,02,000" },
            { id: 17, title: "Technical Communication", agency: "MHRD", duration: "30.11.2015 to 05.12.2015", fund: "-" },
            { id: 18, title: "Engineering Physics", agency: "MHRD", duration: "08.12.2015 to 18.12.2015", fund: "1,41,099" },
            { id: 19, title: "Introduction to Structural Engineering", agency: "MHRD", duration: "04.01.2016 to 09.01.2016", fund: "91,000" },
            { id: 20, title: "Usage of ICT in Education for Online and Blended Learning", agency: "MHRD", duration: "02.05.2016 to 10.07.2016", fund: "-" },
            { id: 21, title: "College to Corporate", agency: "MHRD", duration: "26.11.2016", fund: "-" },
            { id: 22, title: "CMOS, Mixed Signal RF, VLSI Design", agency: "MHRD", duration: "30.01.2017 To 04.02.2017", fund: "87,680" },
            { id: 23, title: "AICTE-ISTE Online Teaching and Learning Pedagogy - Phase I", agency: "AICTE-ISTE", duration: "01.03.2021 to 06.03.2021", fund: "93,000" },
            { id: 24, title: "AICTE-ISTE Online Teaching and Learning Pedagogy - Phase II", agency: "AICTE-ISTE", duration: "05.04.2021 to 12.04.2021", fund: "93,000" },
            { id: 25, title: "AICTE-ISTE Online Teaching and Learning Pedagogy - Phase III", agency: "AICTE-ISTE", duration: "03.05.2021 to 08.05.2021", fund: "93,000" },
            { id: 26, title: "FDTP on ME8391- Engineering Thermodynamics", agency: "Anna University", duration: "12.07.2021-17.07.2021", fund: "30,000" }
        ],
        'artificial-intelligence-&-data-science': [
            { id: 1, title: "Research Methodologies", agency: "MHRD", duration: "25.06.2012 to 04.07.2012", fund: "1,42,719" },
            { id: 2, title: "Engineering Thermodynamics", agency: "MHRD", duration: "11.12.2012 to 21.12.2012", fund: "2,44,685" },
            { id: 3, title: "Research Methods in Education Technology", agency: "MHRD", duration: "02.02.2013 & 09.02.2013", fund: "7,000" },
            { id: 4, title: "Database Management Systems", agency: "MHRD", duration: "21.05.2013 to 31.05.2013", fund: "1,31,616" },
            { id: 5, title: "Analog Electronics", agency: "MHRD", duration: "04.06.2013 to 14.06.2013", fund: "1,61,578" },
            { id: 6, title: "Green Building Awareness", agency: "MHRD", duration: "24.08.2013", fund: "3,000" },
            { id: 7, title: "Engineering Mechanics", agency: "MHRD", duration: "26.11.2013 to 06.11.2013", fund: "1,95,706" },
            { id: 8, title: "Signals & Systems", agency: "MHRD", duration: "02.01.2014 to 12.01.2014", fund: "1,55,073" },
            { id: 9, title: "Fluid Mechanics", agency: "MHRD", duration: "20.05.2014 to 30.05.2014", fund: "2,07,001" },
            { id: 10, title: "Computer Programming", agency: "MHRD", duration: "16.06.2014 to 21.06.2014", fund: "81,422" },
            { id: 11, title: "Computer Networking", agency: "MHRD", duration: "30.06.2014 to 05.07.2014", fund: "96,886" },
            { id: 12, title: "Cyber Security", agency: "MHRD", duration: "10.07.2014 to 20.07.2014", fund: "1,64,626" },
            { id: 13, title: "Control Systems", agency: "MHRD", duration: "02.12.2014 to 12.12.2014", fund: "1,76,970" },
            { id: 14, title: "Pedagogy for Effective use of ICT in Engineering Education", agency: "MHRD", duration: "05.01.2015 to 07.01.2015 & 19.01.2015 to 21.01.2015", fund: "71,330" },
            { id: 15, title: "Introduction to Design of Algorithms", agency: "MHRD", duration: "25.05.2015 to 30.05.2015", fund: "88,600" },
            { id: 16, title: "Environmental Studies", agency: "MHRD", duration: "02.06.2015 to 12.06.2015", fund: "2,02,000" },
            { id: 17, title: "Technical Communication", agency: "MHRD", duration: "30.11.2015 to 05.12.2015", fund: "-" },
            { id: 18, title: "Engineering Physics", agency: "MHRD", duration: "08.12.2015 to 18.12.2015", fund: "1,41,099" },
            { id: 19, title: "Introduction to Structural Engineering", agency: "MHRD", duration: "04.01.2016 to 09.01.2016", fund: "91,000" },
            { id: 20, title: "Usage of ICT in Education for Online and Blended Learning", agency: "MHRD", duration: "02.05.2016 to 10.07.2016", fund: "-" },
            { id: 21, title: "College to Corporate", agency: "MHRD", duration: "26.11.2016", fund: "-" },
            { id: 22, title: "CMOS, Mixed Signal RF, VLSI Design", agency: "MHRD", duration: "30.01.2017 To 04.02.2017", fund: "87,680" },
            { id: 23, title: "AICTE-ISTE Online Teaching and Learning Pedagogy - Phase I", agency: "AICTE-ISTE", duration: "01.03.2021 to 06.03.2021", fund: "93,000" },
            { id: 24, title: "AICTE-ISTE Online Teaching and Learning Pedagogy - Phase II", agency: "AICTE-ISTE", duration: "05.04.2021 to 12.04.2021", fund: "93,000" },
            { id: 25, title: "AICTE-ISTE Online Teaching and Learning Pedagogy - Phase III", agency: "AICTE-ISTE", duration: "03.05.2021 to 08.05.2021", fund: "93,000" },
            { id: 26, title: "FDTP on ME8391- Engineering Thermodynamics", agency: "Anna University", duration: "12.07.2021-17.07.2021", fund: "30,000" }
        ],
        'electronics-&-communication-engineering': [
            { id: 1, year: "2024-2025", faculty: "Mr. K. Rajesh", agency: "MSME Idea Hackathon 4.0", title: "Landslide Monitoring and Warning System", date: "27.06.2025", amount: "9,00,000" },
            { id: 2, year: "2024-2025", faculty: "Mr. A. Silambarasan", agency: "MSME Idea Hackathon 4.0", title: "TonoLITE", date: "27.06.2025", amount: "8,50,000" },
            { id: 3, year: "2024-2025", faculty: "Mrs. V. Vadivu", agency: "TNSCST", title: "Air and Water quality index and Environment monitoring system", date: "13.05.2025", amount: "7,500" },
            { id: 4, year: "2024-2025", faculty: "Mr.M.Chandraman", agency: "TNSDC NIRAL THIRUVIZHA 2.0", title: "IoT-Based Public Toilets Monitoring System", date: "05.03.2025", amount: "10,000" },
            { id: 5, year: "2024-2025", faculty: "Mr.S.Premkumar", agency: "TNSDC NIRAL THIRUVIZHA 2.0", title: "Medicine Supply Management System", date: "05.03.2025", amount: "10,000" },
            { id: 6, year: "2023-2024", faculty: "Mr.T.Praveen Kumar", agency: "TNSCST", title: "Login to windows computer using RFID tag and arduino", date: "01.10.2024", amount: "7,500" },
            { id: 7, year: "2018-2019", faculty: "Dr.N.Santhiyakumari", agency: "AICTE", title: "Modernization of Embedded Lab using IoT", date: "16.05.2019", amount: "12,93,210" },
            { id: 8, year: "2018-2019", faculty: "Mr.M.CHANDRAMAN", agency: "TNSCST", title: "Remote monitoring system for wildlife using IoT", date: "18.02.2019", amount: "7,500" },
            { id: 10, year: "2012-2013", faculty: "Dr.N.Santhiyakumari", agency: "AICTE", title: "Implementation of medical Decision System for CV & CB Disease", date: "21.03.2013", amount: "10,63,650" }
        ]
    }

    const allSponsoredProjects = {
        'mechanical-engineering': [
            { id: 1, faculty: "Mr.K.Mugundhan", title: "Commercialicing Sustainable Bio-Energy Technologies", agency: "CSIR", amount: "30,000", period: "08.03.2013 to 09.03.2013" },
            { id: 2, faculty: "Mr.T.Dheenathayalan", title: "Environmental Health and safety in Organisation", agency: "CSIR", amount: "30,000", period: "14.03.2013 to 15.03.2013" },
            { id: 3, faculty: "Mr.S.Sathyanathan & Mr.N.Kamalakkannan", title: "Seminar on Sustainable Composites", agency: "IET", amount: "6,000", period: "20.01.2018" },
            { id: 4, faculty: "Dr.K.Visagavel & Mr.N.Kamalakkannan", title: "Seminar on Industrial Internet of Things in manufacturing", agency: "IET", amount: "10,000", period: "19.07.2018" },
            { id: 5, faculty: "Dr.M. Ilangkumaran, Dr. V. Sivakumar, Dr.N.Panneerselvam", title: "Current Trends in Recycling of Textile / Apparel Waste in Eco - Sustainable Aspects", agency: "CSIR", amount: "20,000", period: "05.08.2022 to 06.08.2022" }
        ],
        'artificial-intelligence-&-data-science': [
            { id: 1, faculty: "Mr.K.Mugundhan", title: "Commercialicing Sustainable Bio-Energy Technologies", agency: "CSIR", amount: "30,000", period: "08.03.2013 to 09.03.2013" },
            { id: 2, faculty: "Mr.T.Dheenathayalan", title: "Environmental Health and safety in Organisation", agency: "CSIR", amount: "30,000", period: "14.03.2013 to 15.03.2013" },
            { id: 3, faculty: "Mr.S.Sathyanathan & Mr.N.Kamalakkannan", title: "Seminar on Sustainable Composites", agency: "IET", amount: "6,000", period: "20.01.2018" },
            { id: 4, faculty: "Dr.K.Visagavel & Mr.N.Kamalakkannan", title: "Seminar on Industrial Internet of Things in manufacturing", agency: "IET", amount: "10,000", period: "19.07.2018" },
            { id: 5, faculty: "Dr.M. Ilangkumaran, Dr. V. Sivakumar, Dr.N.Panneerselvam", title: "Current Trends in Recycling of Textile / Apparel Waste in Eco - Sustainable Aspects", agency: "CSIR", amount: "20,000", period: "05.08.2022 to 06.08.2022" }
        ],
        'electronics-&-communication-engineering': [
            { id: 101, faculty: "Dr.N.Santhiyakumari", title: "Advanced Medical Imaging and Signal Processing Initiative", agency: "Institutional", amount: "In-Progress", period: "2024" }
        ],
        'civil-engineering': [
            { id: 1, faculty: "Dr.P.M.Shanmugavadivu", title: "Application of Geo spatial technology on impact of Climate changes in water resources", agency: "Ministry of Earth sciences", amount: "1,00,000", period: "Feb-15" }
        ]
    }

    const allTnscstProjects = {
        'mechanical-engineering': [
            { id: 1, year: "2019-2020", title: "Quad – copter UAV assisted fertilizer and pesticide spraying system", mentor: "Mr.D.Manikandan", agency: "TNSCST", grant: "7,500", duration: "12 Months" },
            { id: 2, year: "2019-2020", title: "Smart helmet – an accident preventer", mentor: "Mr.M.A.Rajeshkumar", agency: "TNSCST", grant: "7,500", duration: "12 Months" },
            { id: 3, year: "2017-2018", title: "Portable crop cutting machine", mentor: "Mr.P.Kalaiselvan", agency: "TNSCST", grant: "8,400", duration: "12 Months" },
            { id: 4, year: "2017-2018", title: "Design and fabrication of mobile bucket milking machine with aid of solar system", mentor: "Mr.M.Loganathan", agency: "TNSCST", grant: "4,900", duration: "12 Months" },
            { id: 5, year: "2017-2018", title: "Tonic gas defender in automobile", mentor: "Mr.M.A.Rajesh Kumar", agency: "TNSCST", grant: "8,300", duration: "12 Months" },
            { id: 6, year: "2017-2018", title: "Design and Implementation of low cost intelligent wheelchair", mentor: "Mr.N.Kamalakannan", agency: "TNSCST", grant: "9,100", duration: "12 Months" },
            { id: 7, year: "2016-2017", title: "Fabrication and performance measurement of manually powered fodder cutter", mentor: "Mr.P.Kalaiselvan", agency: "TNSCST", grant: "10,000", duration: "12 Months" },
            { id: 8, year: "2016-2017", title: "Fabrication of semi-automated multipurpose wheel hoe with aid of Solar system for agriculture", mentor: "Mr.M.Loganathan", agency: "TNSCST", grant: "10,000", duration: "12 Months" },
            { id: 9, year: "2016-2017", title: "Smart Helmet with Alcohol detection", mentor: "Mr.C.Eswaramoorthy", agency: "TNSCST", grant: "10,000", duration: "12 Months" }
        ],
        'artificial-intelligence-&-data-science': [
            { id: 1, year: "2019-2020", title: "Quad – copter UAV assisted fertilizer and pesticide spraying system", mentor: "Mr.D.Manikandan", agency: "TNSCST", grant: "7,500", duration: "12 Months" },
            { id: 2, year: "2019-2020", title: "Smart helmet – an accident preventer", mentor: "Mr.M.A.Rajeshkumar", agency: "TNSCST", grant: "7,500", duration: "12 Months" },
            { id: 3, year: "2017-2018", title: "Portable crop cutting machine", mentor: "Mr.P.Kalaiselvan", agency: "TNSCST", grant: "8,400", duration: "12 Months" },
            { id: 4, year: "2017-2018", title: "Design and fabrication of mobile bucket milking machine with aid of solar system", mentor: "Mr.M.Loganathan", agency: "TNSCST", grant: "4,900", duration: "12 Months" },
            { id: 5, year: "2017-2018", title: "Tonic gas defender in automobile", mentor: "Mr.M.A.Rajesh Kumar", agency: "TNSCST", grant: "8,300", duration: "12 Months" },
            { id: 6, year: "2017-2018", title: "Design and Implementation of low cost intelligent wheelchair", mentor: "Mr.N.Kamalakannan", agency: "TNSCST", grant: "9,100", duration: "12 Months" },
            { id: 7, year: "2016-2017", title: "Fabrication and performance measurement of manually powered fodder cutter", mentor: "Mr.P.Kalaiselvan", agency: "TNSCST", grant: "10,000", duration: "12 Months" },
            { id: 8, year: "2016-2017", title: "Fabrication of semi-automated multipurpose wheel hoe with aid of Solar system for agriculture", mentor: "Mr.M.Loganathan", agency: "TNSCST", grant: "10,000", duration: "12 Months" },
            { id: 9, year: "2016-2017", title: "Smart Helmet with Alcohol detection", mentor: "Mr.C.Eswaramoorthy", agency: "TNSCST", grant: "10,000", duration: "12 Months" }
        ],
        'electronics-&-communication-engineering': [
            { id: 101, year: "2023-2024", title: "AI-driven emergency response systems for enhanced vehicle safety", mentor: "Dr.S. Kumarganesh", agency: "TNSCST", grant: "Ongoing", duration: "12 Months" }
        ]
    }

    const allConsultancyWork = {
        'mechanical-engineering': [
            { id: 1, title: "Implementation of Total Quality Management", client: "Spintec Enterprises Private Limited, Coimbatore", faculty: "Dr.V.Sivakumar, Mr.A.Selvakumar", amount: "25,000", period: "Nov-21" },
            { id: 2, title: "Implementation of Total Quality Management", client: "Fluid Engineering Works, Coimbatore", faculty: "Dr.M.Ilangkumaran, Mr.S.Nandha Kumar", amount: "25,000", period: "Jan-22" },
            { id: 3, title: "Training on Total Quality Management and 5S System", client: "Sri Pone Arasalamman Battery Works, Dharmapuri", faculty: "Mr.A.Selvakumar, Mr.J.Prakash", amount: "25,000", period: "Apr-22" },
            { id: 4, title: "Training on Total Quality Management and 5S System", client: "RnGn Batteries Private Limited, Dharmapuri", faculty: "Mr.A.Selvakumar, Mr.J.Prakash", amount: "25,000", period: "Apr-22" },
            { id: 5, title: "Safety Audit", client: "Vijay Blue Metal, Salem", faculty: "Dr.K.S.Prabhakaran, Mr.G.Thangaraj", amount: "25,000", period: "Oct-22" },
            { id: 6, title: "Safety Audit", client: "Senthil Blue Metals, Salem", faculty: "Dr.N.Panneerselvam, Mr.G.Thangaraj", amount: "25,000", period: "Nov-22" },
            { id: 7, title: "Design and Fabrication of Pick and Place Robot Arm", client: "Kaapi Stop, Salem", faculty: "Mr.A.Selvakumar, Mr.J.Prakash", amount: "1,47,950", period: "Ongoing" }
        ],
        'artificial-intelligence-&-data-science': [
            { id: 1, title: "Implementation of Total Quality Management", client: "Spintec Enterprises Private Limited, Coimbatore", faculty: "Dr.V.Sivakumar, Mr.A.Selvakumar", amount: "25,000", period: "Nov-21" },
            { id: 2, title: "Implementation of Total Quality Management", client: "Fluid Engineering Works, Coimbatore", faculty: "Dr.M.Ilangkumaran, Mr.S.Nandha Kumar", amount: "25,000", period: "Jan-22" },
            { id: 3, title: "Training on Total Quality Management and 5S System", client: "Sri Pone Arasalamman Battery Works, Dharmapuri", faculty: "Mr.A.Selvakumar, Mr.J.Prakash", amount: "25,000", period: "Apr-22" },
            { id: 4, title: "Training on Total Quality Management and 5S System", client: "RnGn Batteries Private Limited, Dharmapuri", faculty: "Mr.A.Selvakumar, Mr.J.Prakash", amount: "25,000", period: "Apr-22" },
            { id: 5, title: "Safety Audit", client: "Vijay Blue Metal, Salem", faculty: "Dr.K.S.Prabhakaran, Mr.G.Thangaraj", amount: "25,000", period: "Oct-22" },
            { id: 6, title: "Safety Audit", client: "Senthil Blue Metals, Salem", faculty: "Dr.N.Panneerselvam, Mr.G.Thangaraj", amount: "25,000", period: "Nov-22" },
            { id: 7, title: "Design and Fabrication of Pick and Place Robot Arm", client: "Kaapi Stop, Salem", faculty: "Mr.A.Selvakumar, Mr.J.Prakash", amount: "1,47,950", period: "Ongoing" }
        ]
    }

    const mhrdPrograms = allMhrdPrograms[deptName?.toLowerCase()] || []
    const sponsoredProjects = allSponsoredProjects[deptName?.toLowerCase()] || []
    const tnscstProjects = allTnscstProjects[deptName?.toLowerCase()] || []
    const consultancyWork = allConsultancyWork[deptName?.toLowerCase()] || []

    const getMhrdSummary = () => {
        return mhrdPrograms.reduce((acc, curr) => {
            const valStr = curr.amount || curr.fund || "0"
            return acc + (parseInt(valStr.toString().replace(/,/g, '')) || 0)
        }, 0).toLocaleString()
    }

    return (
        <div className="min-h-screen bg-[#f6f9fc] font-sans pb-20">


            <div className="max-w-7xl mx-auto px-6 py-12 lg:py-16">
                
                {/* Header Section */}
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mb-16"
                >


                    <h1 className="text-3xl lg:text-5xl font-bold text-[#224292] uppercase leading-tight mb-6">
                        Research & <span className="text-[#ffc107]">Grant Ecosystem</span>
                    </h1>

                    <div className="max-w-3xl border-l-4 border-[#ffc107] pl-8 py-1">
                        <p className="text-[#1e293b] text-base font-semibold leading-relaxed">
                            A comprehensive overview of {formatDeptName(deptName)}'s externally funded projects, MHRD collaborations, TNSCST student grants, and industrial consultancy initiatives.
                        </p>
                    </div>
                </motion.div>

                {/* MHRD Sponsored Programs */}
                <section className="mb-20">
                    <div className="flex items-center gap-4 mb-8">
                        <div className="w-12 h-12 bg-white rounded-2xl shadow-sm border border-slate-100 flex items-center justify-center text-[#ffc107]">
                            <Globe size={24} />
                        </div>
                        <div>
                            <h2 className="text-2xl font-bold text-[#0f172a] uppercase tracking-tight">MHRD Sponsored Programs</h2>
                            <p className="text-[10px] font-bold text-[#64779F] tracking-widest leading-none mt-1">Remote Centre Coordination: Dr. K. Visagavel</p>
                        </div>
                    </div>

                    <div className="bg-white rounded-2xl shadow-2xl shadow-blue-900/5 border border-slate-200/60 overflow-hidden">
                        <div className="overflow-x-auto">
                            <table className="w-full border-collapse">
                                <thead>
                                    <tr className="text-white">
                                        <th className="bg-[#0f172a] px-6 py-5 text-left text-[10px] font-black uppercase tracking-[2px] w-16 border-r border-white/5">S.No.</th>
                                        <th className="bg-[#0f172a] px-6 py-5 text-left text-[10px] font-black uppercase tracking-[2px] border-r border-white/5">Workshop / Program Title</th>
                                        <th className="bg-[#0f172a] px-6 py-5 text-left text-[10px] font-black uppercase tracking-[2px] border-r border-white/5">Duration</th>
                                        <th className="bg-[#0f172a] px-6 py-5 text-right text-[10px] font-black text-[#ffc107] uppercase tracking-[2px] pr-8">Grant (Rs)</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-slate-100 italic font-semibold text-[#1e293b]">
                                    {mhrdPrograms.map((item, idx) => (
                                        <tr key={item.id} className="group hover:bg-[#fafcff] transition-all duration-300">
                                            <td className="px-6 py-5 border-r border-slate-50">
                                                <div className="w-10 h-10 bg-[#224292]/5 rounded-xl flex items-center justify-center text-[#224292] font-black text-xs group-hover:bg-[#ffc107] group-hover:text-[#224292] transition-all duration-300 shadow-inner">
                                                    {idx + 1 < 10 ? `0${idx + 1}` : idx + 1}
                                                </div>
                                            </td>
                                            <td className="px-6 py-5 text-[13px] uppercase tracking-tight group-hover:text-[#224292] transition-colors">{item.title}</td>
                                            <td className="px-6 py-5 text-xs font-bold text-slate-500 uppercase tracking-widest">{item.duration}</td>
                                            <td className="px-6 py-5 text-right pr-8">
                                                <span className="text-[14px] font-black text-[#0f172a] tracking-tight group-hover:text-[#ffc107] transition-colors">₹ {item.amount || item.fund}</span>
                                            </td>
                                        </tr>
                                    ))}
                                    {mhrdPrograms.length > 0 && (
                                        <tr className="bg-slate-50/80">
                                            <td colSpan="3" className="px-6 py-5 text-right text-xs font-black text-[#0f172a] uppercase tracking-[2px]">Total Grant Received</td>
                                            <td className="px-6 py-5 text-right pr-8 text-base font-black text-[#ffc107] tracking-tighter">₹ {getMhrdSummary()}</td>
                                        </tr>
                                    )}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </section>

                {/* CSIR / Sponsored Projects */}
                <section className="mb-20">
                    <div className="flex items-center gap-4 mb-8">
                        <div className="w-12 h-12 bg-white rounded-2xl shadow-sm border border-slate-100 flex items-center justify-center text-[#ffc107]">
                            <Handshake size={24} />
                        </div>
                        <h2 className="text-2xl font-bold text-[#0f172a] uppercase tracking-tight">CSIR & Institutional Projects</h2>
                    </div>

                    <div className="bg-white rounded-[2rem] shadow-2xl shadow-blue-900/5 border border-slate-200/60 overflow-hidden">
                        <div className="overflow-x-auto">
                            <table className="w-full border-collapse text-left">
                                <thead>
                                    <tr className="text-white italic">
                                        <th className="bg-[#0f172a] px-6 py-5 text-[10px] font-black uppercase tracking-[2px] w-16 border-r border-white/5">S.No</th>
                                        <th className="bg-[#0f172a] px-6 py-5 text-[10px] font-black uppercase tracking-[2px] border-r border-white/5">Project Details & Faculty</th>
                                        <th className="bg-[#0f172a] px-6 py-5 text-center text-[10px] font-black uppercase tracking-[2px] border-r border-white/5">Timeline / Year</th>
                                        <th className="bg-[#0f172a] px-6 py-5 text-right text-[10px] font-black text-[#ffc107] uppercase tracking-[2px] pr-8">Sanctioned Amount</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-slate-100">
                                    {sponsoredProjects.length > 0 ? sponsoredProjects.map((item, idx) => (
                                        <tr key={item.id} className="hover:bg-[#fafcff] transition-all group">
                                            <td className="px-6 py-5 align-top pt-6 border-r border-slate-50">
                                                <div className="w-10 h-10 bg-[#224292]/5 rounded-xl flex items-center justify-center text-[#224292] font-black text-xs group-hover:bg-[#ffc107] group-hover:text-[#224292] transition-all duration-300 shadow-inner">
                                                    {idx + 1 < 10 ? `0${idx + 1}` : idx + 1}
                                                </div>
                                            </td>
                                            <td className="px-6 py-5 max-w-sm">
                                                <p className="text-[13px] font-black text-[#224292] uppercase leading-tight mb-2 italic group-hover:text-[#ffc107] transition-colors">"{item.title}"</p>
                                                <div className="flex flex-col gap-1">
                                                    <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">{item.agency}</p>
                                                    {item.faculty && (
                                                        <p className="text-[10px] font-bold text-[#ffc107] italic bg-[#ffc107]/5 px-2 py-0.5 rounded w-fit">PI: {item.faculty}</p>
                                                    )}
                                                </div>
                                            </td>
                                            <td className="px-6 py-5 text-center border-x border-slate-50">
                                                <div className="flex flex-col items-center gap-1">
                                                    <span className="inline-flex items-center px-3 py-1 bg-[#0f172a] text-[#ffc107] text-[9px] font-black uppercase rounded-full border border-black/10 italic">
                                                        {item.year || item.period}
                                                    </span>
                                                    {item.date && (
                                                        <span className="text-[8px] font-bold text-slate-300 uppercase tracking-widest mt-1">{item.date}</span>
                                                    )}
                                                </div>
                                            </td>
                                            <td className="px-6 py-5 text-right pr-8">
                                                <span className="text-[14px] font-black text-[#0f172a] tracking-tight group-hover:text-[#ffc107] transition-colors">₹ {item.amount || item.fund}</span>
                                            </td>
                                        </tr>
                                    )) : (
                                        <tr>
                                            <td colSpan="4" className="px-6 py-10 text-center text-slate-400 font-bold uppercase text-xs tracking-widest italic">No Sponsored Projects Indexed for {formatDeptName(deptName)}</td>
                                        </tr>
                                    )}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </section>

                {/* consultancy projects */}
                <section className="mb-20">
                    <div className="flex items-center gap-4 mb-8">
                        <div className="w-12 h-12 bg-white rounded-2xl shadow-sm border border-slate-100 flex items-center justify-center text-[#ffc107]">
                            <Briefcase size={24} />
                        </div>
                        <h2 className="text-2xl font-bold text-[#0f172a] uppercase tracking-tight">Industrial Consultancy Work</h2>
                    </div>

                    <div className="bg-white rounded-2xl shadow-2xl shadow-blue-900/5 border border-slate-200/60 overflow-hidden">
                        <div className="overflow-x-auto">
                            <table className="w-full border-collapse">
                                <thead>
                                    <tr className="text-white">
                                        <th className="bg-[#0f172a] px-6 py-5 text-left text-[10px] font-black uppercase tracking-[2px] w-16 border-r border-white/5">S.No.</th>
                                        <th className="bg-[#0f172a] px-6 py-5 text-left text-[10px] font-black uppercase tracking-[2px] border-r border-white/5">Project & Client</th>
                                        <th className="bg-[#0f172a] px-6 py-5 text-left text-[10px] font-black tracking-[2px] border-r border-white/5">Faculty in Charge</th>
                                        <th className="bg-[#0f172a] px-6 py-5 text-right text-[10px] font-black text-[#ffc107] uppercase tracking-[2px] pr-8">Consultancy Fee</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-slate-100">
                                    {consultancyWork.length > 0 ? consultancyWork.map((item, idx) => (
                                        <tr key={item.id} className="hover:bg-[#fafcff] transition-all group">
                                            <td className="px-6 py-5 border-r border-slate-50">
                                                <div className="w-10 h-10 bg-[#224292]/5 rounded-xl flex items-center justify-center text-[#224292] font-black text-xs group-hover:bg-[#ffc107] group-hover:text-[#224292] transition-all duration-300 shadow-inner">
                                                    {idx + 1 < 10 ? `0${idx + 1}` : idx + 1}
                                                </div>
                                            </td>
                                            <td className="px-6 py-5">
                                                <div className="text-[13px] font-bold text-[#0f172a] uppercase leading-tight mb-1 group-hover:text-[#224292] transition-colors italic">"{item.title}"</div>
                                                <div className="text-[10px] font-bold text-[#64779F] uppercase tracking-widest line-clamp-1">{item.client}</div>
                                            </td>
                                            <td className="px-6 py-5 text-[11px] font-black text-[#1e293b] italic border-x border-slate-50">{item.faculty}</td>
                                            <td className="px-6 py-5 text-right pr-8">
                                                <div className="text-[14px] font-black text-[#0f172a] group-hover:text-[#ffc107] transition-colors">₹ {item.amount}</div>
                                                <div className="text-[9px] font-bold text-slate-400 uppercase tracking-widest mt-0.5">{item.period}</div>
                                            </td>
                                        </tr>
                                    )) : (
                                        <tr>
                                            <td colSpan="4" className="px-6 py-10 text-center text-slate-400 font-bold uppercase text-xs tracking-widest italic">No Active Consultancy work recorded for {formatDeptName(deptName)}</td>
                                        </tr>
                                    )}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </section>

                {/* TNSCST Projects */}
                <section>
                    <div className="flex items-center gap-4 mb-8">
                        <div className="w-12 h-12 bg-white rounded-2xl shadow-sm border border-slate-100 flex items-center justify-center text-[#ffc107]">
                            <Award size={24} />
                        </div>
                        <h2 className="text-2xl font-bold text-[#0f172a] uppercase tracking-tight">TNSCST Funded Student Projects</h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {tnscstProjects.map((item) => (
                            <motion.div 
                                whileHover={{ y: -5 }}
                                key={item.id}
                                className="bg-white p-6 rounded-[2rem] border border-slate-200 shadow-xl shadow-blue-900/5 hover:border-[#ffc107] transition-all"
                            >
                                <div className="flex justify-between items-start mb-4">
                                    <span className="px-3 py-1 bg-blue-50 text-[#224292] text-[9px] font-bold uppercase tracking-widest rounded-full">{item.year}</span>
                                    <span className="text-[14px] font-bold text-[#ffc107]">₹ {item.grant}</span>
                                </div>
                                <h3 className="text-sm font-bold text-[#224292] uppercase leading-tight mb-4 italic line-clamp-3">"{item.title}"</h3>
                                <div className="pt-4 border-t border-slate-50 flex items-center gap-3">
                                    <div className="w-8 h-8 rounded-full bg-slate-50 flex items-center justify-center text-[#224292] font-bold text-[10px]">M</div>
                                    <div>
                                        <p className="text-[10px] font-bold text-slate-400 tracking-widest">Mentor</p>
                                        <p className="text-[11px] font-bold text-black leading-none">{item.mentor}</p>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </section>

            </div>
        </div>
    )
}

export default SponsoredProjectsPage
