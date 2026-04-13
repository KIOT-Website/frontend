import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { useParams, Link } from 'react-router-dom'
import { 
    ChevronRight, 
    ArrowLeft,
    BookOpen,
    Search,
    FileText,
    Calendar,
    Users,
    Terminal
} from 'lucide-react'

const InternationalPublicationsPage = () => {
    const { deptName } = useParams()
    const [searchTerm, setSearchTerm] = useState('')

    const formatDeptName = (name) => {
        if (!name) return "Departmentwise"
        return name.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')
    }

    const allPublications = {
        'mechanical-engineering': [
            { id: 1, author: "Dr.PSS.Srinivasan", title: "Kirloskar TV – I Engine performance and emission characteristicsof methyl ester Mahua (Madhuca Indica) & Red Mud transesterified Mahua oil/diesel blends", journal: "International Journal of Applied Engineering Research, ISSN 0973-4562", year: "2015" },
            { id: 2, author: "Dr.PSS.Srinivasan", title: "Reduction of Filling Time in Injection Moulding Machine by Using Hydraulic System", journal: "International Journal of Applied Engineering Research, ISSN 0973-4562", year: "2015" },
            { id: 3, author: "P.Murugesan, K.Mayilsamy, S.Suresh, PSS.Srinivasan", title: "Heat transfer and pressure drop characteristics in a circular tube fitted with and without V-cut twisted tape insert", journal: "International Communications in Heat and Mass Transfer", year: "2011" },
            { id: 4, author: "P.Murugesan, K.Mayilsamy, S.Suresh, PSS.Srinivasan", title: "Heat transfer and pressure drop characteristics of Turbulent flow in a tube fitted with trapezoidalcut Twisted tape insert", journal: "International journal of academic research", year: "2009" },
            { id: 5, author: "M.Ravikumar, PSS.Srinivasan", title: "Phase change material as a thermal energy storage Material for cooling of building", journal: "Journal of Theoretical & Applied Information Technology", year: "2008" },
            { id: 6, author: "KCK.Vijaykumar, PSS.Srinivasan, S.Dhandapani", title: "A performance of hollow clay tile (HCT) laid reinforced cement concrete (RCC) roof for tropical summer climates", journal: "Energy and Buildings", year: "2007" },
            { id: 7, author: "G.Nallakumarasamy, PSS.Srinivasan, KV.Raja, R.Malayalamurthi", title: "Optimization of operation sequencing in CAPP using simulated annealing technique (SAT)", journal: "The International Journal of Advanced Manufacturing Technology", year: "2011" },
            { id: 8, author: "S.Senthilkumar, K.Perumal, PSS.Srinivasan, Sadhana", title: "Optical and thermal performance of a three dimensional compound parabolic concentrator for spherical absorber", journal: "Sadhana", year: "2009" },
            { id: 9, author: "R.Parameshwaran, PSS.Srinivasan, M.Punniyamoorthy", title: "Integrating fuzzy analytical hierarchy process and data envelopment analysis for performance management in automobile repair shops", journal: "European Journal of Industrial Engineering", year: "2009" },
            { id: 10, author: "C.Jegadheesan, VP.Arunachalam, SR.Devadasan, PSS.Srinivasan", title: "Design and development of modified service failure mode and effects analysis model", journal: "International Journal of Services and Operations Management", year: "2006" }
        ],
        'electronics-&-communication-engineering': [
            // 2024-25
            { id: 101, author: "V. Saravanan, N. Santhiyakumari, M. Thangavel, R. Hemalatha", title: "Dynamic step-size normalized LMS algorithm for alpha-stable impulsive noise control and peak tracking", journal: "Signal, Image and Video Processing - Springer Nature", year: "May 2025" },
            { id: 102, author: "V. Saravanan, N. Santhiyakumari, P. Shanmuga Sundaram", title: "Reducing impulsive noise in active noise control systems using FxLMS algorithm based on soft thresholding techniques", journal: "Analog Integrated Circuits and Signal Processing - Springer Nature", year: "March 2025" },
            { id: 103, author: "C. Sreedhar, K. Mahesh babu, Suresh Kallam, G.S. Pradeep, S. Anthoniraj, S. Kumarganesh", title: "Enhancing healthcare data security using RFE and CRHSM for big data", journal: "Computers in Biology and Medicine", year: "May 2025" },
            { id: 104, author: "M. Sahaya Sheela, S. Kumarganesh, Binay Kumar Pandey, Mesfin Esayas Lelisho", title: "Integration of silver nanostructures in wireless sensor networks for enhanced biochemical sensing", journal: "Discover Nano", year: "Jan 2025" },
            { id: 105, author: "K Jayaram, S Kumarganesh, A Immanuvel, C Ganesh", title: "Classifications of meningioma brain images using the novel Convolutional Fuzzy C Means (CFCM) architecture and performance analysis of hardware incorporated tumor segmentation module", journal: "Network: Computation in Neural Systems – Taylor & Francis", year: "Apr 2025" },
            { id: 106, author: "B. Selvalakshmi, K. Hemalatha, S. Kumarganesh, P. Vijayalakshmi", title: "Performance analysis of image retrieval system using deep learning techniques", journal: "Network: Computation in Neural Systems", year: "Jan 2025" },
            { id: 107, author: "M Tamilarasi, S Kumarganesh, K Martin Sagayam, J Andrew", title: "Detection and Segmentation of Glioma Tumors Utilizing a UNet Convolutional Neural Network Approach with Non-Subsampled Shearlet Transform", journal: "Journal of Computational Biology", year: "June 2024" },
            { id: 108, author: "S. Elarmathi, P. Rishabavarthani, M. Sindhuja, P. Elayaraja, Malathi Murugesan, S. Kumarganesh et al.", title: "Novel manufacturing systems for cancer diagnosis using ultra-sensitive photonic crystal fiber biosensor with dual-functionalized aptamer-nanocavity", journal: "Microsystem Technologies", year: "Dec 2024" },
            { id: 109, author: "S Kumarganesh, Malathi Murugesan, C Ganesh, N Santhiyakumari, M Thangavel et al.", title: "Hybrid Plasmonic Biosensors with Deep Learning for Colorectal Cancer Detection", journal: "Plasmonics", year: "Nov 2024" },
            { id: 110, author: "R Uma Maheshwari, S Kumarganesh, Shree KVM, A Gopalakrishnan et al.", title: "Advanced plasmonic resonance-enhanced biosensor for comprehensive real-time detection and analysis of deepfake content", journal: "Plasmonics", year: "July 2024" },
            { id: 111, author: "N. Satheesh, N. Gopisankar, S. Kumarganesh, S. Anthoniraj et al.", title: "Advanced AI-driven emergency response systems for enhanced vehicle and human safety", journal: "Iran Journal of Computer Science", year: "Jan 2025" },
            { id: 112, author: "K Baskar, K Muthumanickam, P Vijayalakshmi, S Kumarganesh", title: "A Strong Password Manager Using Multiple Encryption Techniques", journal: "Journal of The Institution of Engineers (India): Series B", year: "Sept 2024" },
            { id: 113, author: "B Thiyaneswaran, S Kumarganesh, M Dharmalingam, PN Palanisamy et al.", title: "Environmental Pollution and Weather Data Monitoring Using Lora Low Power VLSI Solution", journal: "ICONSTEM - IEEE", year: "June 2024" },
            
            // 2023-24
            { id: 114, author: "K.M. Majidha Fathima, M. Suganthi, N. Santhiyakumari", title: "Enhancing the Quality of Service by GBSO Splay Tree Routing Framework in Wireless Sensor Network", journal: "KSII Transactions on Internet and Information Systems", year: "Aug 2023" },
            { id: 115, author: "P. Elayaraja, S. Kumarganesh, K Martin Sagayam, J. Andrew", title: "An automated cervical cancer diagnosis using genetic algorithm and CANFIS approaches", journal: "Technology and Health Care", year: "July 2024" },
            { id: 116, author: "B Thiyaneswaran, S Kumarganesh, K Martin Sagayam, H Dang", title: "An effective model for the iris regional characteristics and classification using deep learning alex network", journal: "IET Image Processing", year: "Sept 2023" },
            { id: 117, author: "B. V. Prakash, A. Rajiv Kannan, N. Santhiyakumari, S. Kumarganesh et al.", title: "Meningioma brain tumor detection and classification using hybrid CNN method and RIDGELET transform", journal: "Scientific Reports", year: "Sept 2023" },
            { id: 118, author: "S. Sasidevi, S. Kumarganesh, S. Saranya, B. Thiyaneswaran et al.", title: "Design of Surface Plasmon Resonance (SPR) Sensors for Highly Sensitive Biomolecular Detection in Cancer Diagnostics", journal: "Plasmonics", year: "May 2024" },
            { id: 119, author: "D. Siva Sundhara Raja, D. Rajesh Kumar, N. Santhiyakumari, S. Kumarganesh et al.", title: "A compact dual‐feed wide‐band slotted antenna for future wireless applications", journal: "Analog Integrated Circuits and Signal Processing", year: "Jan 2024" },
            { id: 120, author: "N. Sugirtham, R. Sherine Jenny, B. Thiyaneswaran, S. Kumarganesh et al.", title: "Modified Play fair for Text File Encryption and Meticulous Decryption with Arbitrary Fillers", journal: "International Journal of Networked and Distributed Computing", year: "Feb 2024" },
            { id: 121, author: "T Senthil Kumar, P Rajendran, N Santhiyakumari, S Kumarganesh et al.", title: "Analysis of Computational Methods for Diagnosis of Cervical Cancer–A Review", journal: "Applied Mathematics & Information Sciences", year: "July 2024" },
            { id: 122, author: "V Rama Lahari, B Anusha, Shaik Hasane, A Immanuvel, S Kumarganesh et al.", title: "Sign Language Classification Using Deep Learning Convolution Neural Networks Algorithm", journal: "Journal of The Institution of Engineers (India): Series B", year: "March 2024" },
            { id: 123, author: "Chairman M, Deepak M, Priyatharsini S, Maragatharaj S", title: "FPGA Based Efficient Detection of Blood Group and Hb-anemic Using Image Processing-VLSI Approach", journal: "International Research Journal of Multidisciplinary Scope", year: "April 2024" },
            { id: 124, author: "A. Gopalakrishnan, S. Kumarganesh, Divya Bharathi G, S. Anthoniraj et al.", title: "Performance Analysis of Health Care Expense Anticipation using Computational Intelligence", journal: "ICIESTR - IEEE", year: "May 2024" },
            { id: 125, author: "Ahmed A Elngar, B Thiyaneswaran, K Anguraj, S Kumarganesh et al.", title: "IOT based smart cold chain temperature monitoring with alert system for vaccination container", journal: "AIP Conference Proceedings", year: "Sept 2023" },

            // 2022-23
            { id: 126, author: "T. Senthilkumar, S. Kumarganesh, P. Sivakumar, K. Periyarselvam", title: "Primitive detection of Alzheimer’s disease using neuroimaging: A progression model", journal: "Journal of Intelligent & Fuzzy Systems", year: "Aug 2022" },
            { id: 127, author: "P Elayaraja, S Kumarganesh, K Martin Sagayam, Hien Dang, Marc Pomplun", title: "An efficient approach for detection and classification of cancer regions in cervical images using optimization-based CNN", journal: "Journal of Intelligent & Fuzzy Systems", year: "Aug 2022" },
            { id: 128, author: "S Kumarganesh, S Anthoniraj, T Senthil Kumar, P Elayaraja et al.", title: "A Novel Analytical Framework is Developed for Wireless Heterogeneous Networks for Video Streaming Applications", journal: "Journal of Mathematics", year: "Sept 2022" },
            { id: 129, author: "B. Thiyaneswaran, K. Anguraj, S. Kumarganesh, K. Martin Sagayam et al.", title: "IOT based smart cold chain temperature monitoring and alert system for vaccination container", journal: "Przegląd Elektrotechniczny", year: "2022" },
            { id: 130, author: "G Rajamanickam, G Ravi", title: "Evaluation of Codebook Design Using SCMA Scheme Based on An and Dn Lattices", journal: "Intelligent Automation and Soft Computing", year: "Jan 2023" }
        ],
        'electrical-&-electronics-engineering': [
            // 2023-24
            { id: 1, author: "P. Gomathi, C. Muniraj, P.S. Periasamy", title: "Digital infrared thermal imaging system based breast cancer diagnosis using 4D U-Net segmentation", journal: "Biomedical Signal Processing and Control (Elsevier)", year: "2023" },
            { id: 2, author: "N Rajasekaran, C Muniraj, T Venkatesan, A Kumaravel", title: "Analysis of electrical behavior in LDPE/BaTiO3 ceramic filler nanocomposites for cable insulation", journal: "Journal of Ceramic Processing Research", year: "2023" },
            { id: 3, author: "S. Sathishkumar, V. Kamatchi Kannan et al.", title: "High gain novel two input two output buck-boost converter for EV applications", journal: "International Journal of Electronics (Taylor & Francis)", year: "2023" },
            { id: 4, author: "P.A. Gowrisankar", title: "Analysis and Controlling of Uncertainty in BLDC Motor Using Optimal Hybrid Algorithm in State Space", journal: "Electric Power Components and Systems", year: "2023" },
            { id: 5, author: "P.A.Gowri Sankar", title: "Simulation and Electrification of a Conventional Vehicle Into A Battery Electric Vehicle", journal: "Energy Sources (Taylor & Francis)", year: "May-24" },
            { id: 6, author: "G.Karthikeyan & A. Jagadeeshwaran", title: "Machine Learning-Based PV Prediction and Fault Analysis System for Real-Time Tracking", journal: "Electric Power Components and Systems", year: "Dec 2023" },
            { id: 7, author: "R.Sundar, G.Vijayakumar, R.Raja et al.", title: "Reduced switch cascaded asymmetrical 27 level inverter-STATCOM with fuzzy logic controller", journal: "Indonesian Journal of Electrical Engineering", year: "Dec 2023" },
            { id: 8, author: "V.Prasanna Moorthy, S.Kalpana Devi et al.", title: "Investigation On Dielectric Properties Of Bio-Transol For Transformer Insulation", journal: "Journal Of Environmental Protection And Ecology", year: "Dec 2023" },

            // 2022-23
            { id: 101, author: "P. Gomathi, C. Muniraj, PS.Periasamy", title: "Micro Calcification Detection in Mammogram Images Using Contiguous CNN Algorithm", journal: "Computer Systems Science & Engineering", year: "2023" },
            { id: 102, author: "V. Jamuna, C. Muniraj PS.Periasamy", title: "Fault detection for PV panels by linear iterative fault diagnosis based on thermal imaging", journal: "Journal of Electrical Engineering & Technology", year: "2023" },
            { id: 103, author: "Kalpanadevi Subramaniam, Suganthi Muthusamy et al.", title: "A high-gain multi-input single-output switched quasi-Zsource converter for renewable integration", journal: "International Journal of Circuit Theory", year: "2022" },

            // 2021-22
            { id: 201, author: "P Govindaraju, C Muniraj, PS Periyasamy", title: "Environmental Impact Of High Voltage Insulator Quality Analysis Using Improved Deep Learning", journal: "Journal of environmental protection and ecology", year: "2022" },
            { id: 202, author: "Gunapriya, D, Muniraj, C, Lakshmi, K", title: "Integrated PCA and FIS approach to mechanical fault classification of induction motor", journal: "Journal of Intelligent & Fuzzy Systems", year: "2022" },
            { id: 203, author: "Gunapriya D, Muniraj C & Lakshmi K", title: "Detection and classification of mechanical faults via thermal image pixels analysis and ANFIS", journal: "Journal of Ambient Intelligence and Humanized Computing", year: "2021" }
        ],
        'civil-engineering': [
            { id: 1, author: "Dr.P.M.Shanmugavadivu", title: "Effects of chloride attack on concrete with the replacement of natural sand by manufactured sand as fine aggregate", journal: "Journal of structural Engineering", year: "Dec 2012-Jan 2013" },
            { id: 2, author: "Dr.P.M.Shanmugavadivu", title: "Effect of physical properties of manufactured sand as fine aggregate in elastic and shrinkage properties of concrete and mortar", journal: "International Journal of Advanced Materials Research", year: "2012" },
            { id: 3, author: "Dr.P.M.Shanmugavadivu", title: "Effect of Fineness modulus and Specific gravity of manufactured sand as fine aggregate in Mix Proportioning of Concrete", journal: "International Journal of Earth Science & Engineering", year: "2010" },
            { id: 4, author: "Dr.P.M.Shanmugavadivu", title: "The relationship between the Mechanical properties of Concrete with Manufactured sand is used as fine aggregate", journal: "International Journal of Emerging Technologies and Applications", year: "2010" },
            { id: 5, author: "Dr.P.M.Shanmugavadivu", title: "The Durability Properties of Concrete with Manufactured Sand", journal: "International Journal of Earth Science & Engineering", year: "2010" },
            { id: 6, author: "Dr.P.M.Shanmugavadivu", title: "A comparative study on Mechanical Properties of Concrete with Manufactured sand", journal: "International Journal, The Technology World, Malaysia", year: "2009" },
            { id: 7, author: "Dr.P.M.Shanmugavadivu", title: "An Experimental Investigation On Energy Efficient Light Transmitting Concrete", journal: "Research in Civil and Environmental Engineering", year: "2014" },
            { id: 8, author: "Dr.P.M.Shanmugavadivu", title: "Corrosion Behavior of Concrete with Partial Replacement of Cement with Rice Husk Ash", journal: "Advances in Materials and Corrosion", year: "2014" },
            { id: 9, author: "K. Uma shankar", title: "Experimental Study on Compressive Strength of Self Compacting Concrete", journal: "BEST: IJMITE", year: "2013" },
            { id: 10, author: "K. Uma shankar", title: "Durability Study of Structural Elements Using Fly Ash Aggregates", journal: "BEST: IJMITE", year: "2014" },
            { id: 11, author: "K. Uma shankar", title: "Experimental Analysis on Effective Utilization of Industrial Waste Materials of Egg Shell, GGBS and Saw Dust Ash", journal: "BEST: IJMITE", year: "2014" },
            { id: 12, author: "K. Uma shankar", title: "Rehabilitation and Retrofitting of Building Structures", journal: "BEST: IJMITE", year: "2015" },
            { id: 13, author: "K. Uma shankar", title: "Experimental study on Jute fibre and Banana fibre in Fly ash bricks", journal: "International Journal of Research (IJR)", year: "2015" },
            { id: 14, author: "K. Uma shankar", title: "Hazardous of waste water disposal", journal: "International Journal of Research (IJR)", year: "2015" },
            { id: 15, author: "K. Uma shankar", title: "Utilization of textile cloth waste in clay brick", journal: "International Journal of Research (IJR)", year: "2015" },
            { id: 16, author: "K. Uma shankar", title: "Expansive soil stabilization using waste from sugarcane industry", journal: "International Journal of Futuristic trends in Engineering and Technology", year: "2015" },
            { id: 17, author: "K. Uma shankar", title: "Feasibility studies of acid resistant bricks using raw and waste materials", journal: "International Journal of Research (IJR)", year: "2015" },
            { id: 18, author: "K. Arunprakash", title: "Experimental Study on Compressive Strength of Self Compacting Concrete", journal: "BEST: IJMITE", year: "2013" },
            { id: 19, author: "T. Sarathivelan", title: "INNOVATIVE BRICK MATERIAL", journal: "IJRASET", year: "2015" },
            { id: 20, author: "V. Scindhuja", title: "An Experimental Study on Granite Dust", journal: "IJAER journal", year: "2015" },
            { id: 21, author: "G. Siva Natarajan", title: "Two-dimensional Modelling of Flood Inundation in Parts of Kundah River", journal: "International Journal of Research (IJR)", year: "2014" },
            { id: 22, author: "J.Vidya Nandhini", title: "An experimental investigations on Replacement of sand by Bottom Ash from Mettur and Neyveli thermal power stations", journal: "IJAER journal", year: "2015" },
            { id: 23, author: "S. Pradeep Kumar", title: "Self closing flood barrier a preventive system to defense extreme high flood events", journal: "IJERT", year: "2015" }
        ]
    }

    const currentPublications = allPublications[deptName?.toLowerCase()] || []

    const filteredPublications = currentPublications.filter(pub => 
        pub.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
        pub.author.toLowerCase().includes(searchTerm.toLowerCase()) ||
        pub.journal.toLowerCase().includes(searchTerm.toLowerCase())
    )

    return (
        <div className="min-h-screen bg-[#f6f9fc] font-sans pb-20">
            {/* Breadcrumbs */}
            <div className="bg-white border-b border-slate-200 py-4">
                <div className="max-w-6xl mx-auto px-6 flex items-center gap-4">
                    <Link to="/research" className="text-slate-400 hover:text-[#0f172a] text-xs font-bold uppercase tracking-wider transition-colors pt-0.5">
                        Research Initiatives
                    </Link>
                    <ChevronRight size={14} className="text-slate-300" />
                    <Link to={`/research/${deptName}`} className="text-slate-400 hover:text-[#0f172a] text-xs font-bold uppercase tracking-wider transition-colors pt-0.5">
                        {deptName?.toUpperCase()}
                    </Link>
                    <ChevronRight size={14} className="text-slate-300" />
                    <span className="text-[#0f172a] text-xs font-bold uppercase tracking-wider pt-0.5">
                        International Journals
                    </span>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-6 py-12 lg:py-16">
                
                {/* Header Section */}
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mb-12"
                >
                    <Link 
                        to={`/research/${deptName}`}
                        className="inline-flex items-center gap-2 text-[#0f172a] font-bold text-[10px] uppercase tracking-wider mb-6 hover:translate-x-[-4px] transition-transform"
                    >
                        <ArrowLeft size={14} /> Back to Repository
                    </Link>

                    <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8">
                        <div>
                            <h1 className="text-3xl lg:text-5xl font-bold text-[#18357a] uppercase leading-tight mb-6">
                                International <span className="text-[#ffc107]">Publications</span>
                            </h1>
                            <div className="max-w-2xl border-l-4 border-[#ffc107] pl-8 py-1">
                                <p className="text-[#1e293b] text-base font-semibold leading-relaxed">
                                    Comprehensive archive of scholarly articles published by {formatDeptName(deptName)} faculty in high-impact international journals and peer-reviewed periodicals.
                                </p>
                            </div>
                        </div>

                        {/* Search Bar */}
                        <div className="relative group min-w-[320px]">
                            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-[#ffc107] transition-colors" size={18} />
                            <input 
                                type="text"
                                placeholder="Search Author, Title or Journal..."
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                                className="w-full bg-white border border-slate-200 rounded-2xl py-4 pl-12 pr-6 text-sm font-semibold text-[#0f172a] focus:ring-2 focus:ring-[#ffc107]/20 focus:border-[#ffc107] outline-none transition-all shadow-xl shadow-blue-900/5 placeholder:text-slate-300"
                            />
                        </div>
                    </div>
                </motion.div>

                {/* Publications Table */}
                <motion.div 
                    initial={{ opacity: 0, scale: 0.98 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="bg-white rounded-[2rem] shadow-2xl shadow-blue-900/5 border border-slate-200/60 overflow-hidden"
                >
                    <div className="overflow-x-auto">
                        <table className="w-full border-collapse text-left">
                            <thead>
                                <tr className="text-white">
                                    <th className="bg-[#0f172a] px-6 py-5 text-[10px] font-black uppercase tracking-[2px] w-16 border-r border-white/5">#</th>
                                    <th className="bg-[#0f172a] px-6 py-5 text-[10px] font-black uppercase tracking-[2px]">Scholarly Article Detail</th>
                                    <th className="bg-[#0f172a] px-6 py-5 text-[10px] font-black uppercase tracking-[2px]">Source & Citation</th>
                                    <th className="bg-[#0f172a] px-6 py-5 text-right text-[10px] font-black text-[#ffc107] uppercase tracking-[2px] pr-8">Timeline</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-slate-100 italic">
                                {filteredPublications.length > 0 ? (
                                    filteredPublications.map((pub, idx) => (
                                        <tr key={pub.id} className="group hover:bg-[#fafcff] transition-all duration-300">
                                            <td className="px-6 py-8 align-top border-r border-slate-50">
                                                <div className="w-8 h-8 bg-[#18357a]/5 rounded-lg flex items-center justify-center text-[#18357a] font-black text-xs group-hover:bg-[#ffc107] group-hover:text-[#18357a] transition-all duration-300 shadow-inner">
                                                    {idx + 1 < 10 ? `0${idx + 1}` : idx + 1}
                                                </div>
                                            </td>
                                            <td className="px-6 py-8">
                                                <div className="flex flex-col gap-4">
                                                    <div className="flex items-start gap-4">
                                                        <div className="w-10 h-10 rounded-xl bg-slate-50 flex items-center justify-center text-[#ffc107] shrink-0 border border-slate-100">
                                                            <FileText size={18} />
                                                        </div>
                                                        <h3 className="text-[14px] font-bold text-[#0f172a] uppercase leading-tight italic tracking-tight">
                                                            "{pub.title}"
                                                        </h3>
                                                    </div>
                                                    <div className="flex items-center gap-2 pl-14">
                                                        <Users size={14} className="text-slate-300" />
                                                        <span className="text-[11px] font-bold text-[#64779F] uppercase tracking-wider">{pub.author}</span>
                                                    </div>
                                                </div>
                                            </td>
                                            <td className="px-6 py-8 max-w-xs">
                                                <div className="flex items-start gap-3">
                                                    <BookOpen size={16} className="text-[#ffc107] shrink-0 mt-0.5" />
                                                    <p className="text-[12px] font-bold text-[#1e293b] leading-tight">
                                                        {pub.journal}
                                                    </p>
                                                </div>
                                            </td>
                                            <td className="px-6 py-8 text-right pr-8">
                                                <div className="flex flex-col items-end gap-1.5">
                                                    <div className="flex items-center gap-2 px-3 py-1 bg-slate-50 rounded-full text-[#0f172a] text-[10px] font-bold uppercase border border-slate-100 italic">
                                                        <Calendar size={12} className="text-[#ffc107]" /> {pub.year}
                                                    </div>
                                                </div>
                                            </td>
                                        </tr>
                                    ))
                                ) : (
                                    <tr>
                                        <td colSpan="4" className="px-6 py-32 text-center text-slate-300 font-bold uppercase text-sm tracking-widest">
                                            No publications found matching your search
                                        </td>
                                    </tr>
                                )}
                            </tbody>
                        </table>
                    </div>
                </motion.div>

                {/* Performance Info */}
                <div className="mt-8 flex flex-wrap items-center gap-6">
                    <div className="px-5 py-3 bg-[#0f172a] rounded-2xl text-white text-[10px] font-bold uppercase tracking-widest flex items-center gap-3 shadow-lg shadow-blue-900/20">
                        <BookOpen size={16} className="text-[#ffc107]" /> {filteredPublications.length} Journals Indexed
                    </div>
                    <p className="text-xs font-semibold text-slate-400">Archival data synchronized with Global Citation Index 2024</p>
                </div>

            </div>
        </div>
    )
}

export default InternationalPublicationsPage
