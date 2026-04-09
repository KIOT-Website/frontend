import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { useParams, Link } from 'react-router-dom'
import { 
    ChevronRight, 
    ArrowLeft,
    BookOpen,
    Search,
    Filter,
    FileText,
    ExternalLink,
    Calendar,
    Users
} from 'lucide-react'

const InternationalPublicationsPage = () => {
    const { deptName } = useParams()
    const [searchTerm, setSearchTerm] = useState('')

    const formatDeptName = (name) => {
        if (!name) return "Departmentwise"
        return name.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')
    }

    const publications = [
        { id: 1, author: "Dr.PSS.Srinivasan", title: "Kirloskar TV – I Engine performance and emission characteristicsof methyl ester Mahua (Madhuca Indica) & Red Mud transesterified Mahua oil/diesel blends", journal: "International Journal of Applied Engineering Research, ISSN 0973-4562", year: "2015, 10,50,1323-1328" },
        { id: 2, author: "Dr.PSS.Srinivasan", title: "Reduction of Filling Time in Injection Moulding Machine by Using Hydraulic System", journal: "International Journal of Applied Engineering Research, ISSN 0973-4562", year: "2015, 10, 50, 155-158" },
        { id: 3, author: "P.Murugesan, K.Mayilsamy, S.Suresh, PSS.Srinivasan", title: "Heat transfer and pressure drop characteristics in a circular tube fitted with and without V-cut twisted tape insert", journal: "International Communications in Heat and Mass Transfer", year: "2011, 38 (3), 329-334, 68" },
        { id: 4, author: "P.Murugesan, K.Mayilsamy, S.Suresh, PSS.Srinivasan", title: "Heat transfer and pressure drop characteristics of Turbulent flow in a tube fitted with trapezoidalcut Twisted tape insert", journal: "International journal of academic research", year: "2009, 1 (1), 38" },
        { id: 5, author: "M.Ravikumar, PSS.Srinivasan", title: "Phase change material as a thermal energy storage Material for cooling of building", journal: "Journal of Theoretical & Applied Information Technology", year: "2008, 4 (6), 36" },
        { id: 6, author: "KCK.Vijaykumar, PSS.Srinivasan, S.Dhandapani", title: "A performance of hollow clay tile (HCT) laid reinforced cement concrete (RCC) roof for tropical summer climates", journal: "Energy and Buildings", year: "2007, 39 (8), 886-892, 36" },
        { id: 7, author: "G.Nallakumarasamy, PSS.Srinivasan, KV.Raja, R.Malayalamurthi", title: "Optimization of operation sequencing in CAPP using simulated annealing technique (SAT)", journal: "The International Journal of Advanced Manufacturing Technology", year: "2011, 54 (58), 721-728, 23" },
        { id: 8, author: "S.Senthilkumar, K.Perumal, PSS.Srinivasan, Sadhana", title: "Optical and thermal performance of a three dimensional compound parabolic concentrator for spherical absorber", journal: "Sadhana", year: "2009, 34 (3), 369-380, 18" },
        { id: 9, author: "R.Parameshwaran, PSS.Srinivasan, M.Punniyamoorthy", title: "Integrating fuzzy analytical hierarchy process and data envelopment analysis for performance management in automobile repair shops", journal: "European Journal of Industrial Engineering", year: "2009, 3 (4), 450-467, 15" },
        { id: 10, author: "C.Jegadheesan, VP.Arunachalam, SR.Devadasan, PSS.Srinivasan", title: "Design and development of modified service failure mode and effects analysis model", journal: "International Journal of Services and Operations Management", year: "2006, 3 (1), 111-126, 11" },
        { id: 11, author: "PSS.Srinivasan, M.Punniyamoorthy", title: "An integrated approach for performance enhancement in automobile repair shops, R Parameshwaran", journal: "International Journal of Business Excellence", year: "2009, (1), 77-104, 10" },
        { id: 12, author: "R.Parameshwaran, PSS.Srinivasan", title: "An integrated closed loop model for service performance management", journal: "International Journal of Services and Operations Management", year: "2008, 4 (1), 34-55, 10" },
        { id: 13, author: "G.Nallakumarasamy, PSS.Srinivasan, KV.Raja, R.Malayalamurthi", title: "Optimization of operation sequencing in CAPP using superhybrid genetic algorithms simulated annealing technique", journal: "ISRN Mechanical Engineering", year: "2011, 897498, 7" },
        { id: 14, author: "R.Parameshwaran, PSS.Srinivasan, M.Punniyamoorthy", title: "Modified closed loop model for service performance management", journal: "International Journal of Quality & Reliability Management", year: "2009, 26 (8), 795-816, 7" },
        { id: 15, author: "KK.Ramsamy, P.Srinivasan", title: "Wind Assisted Domestic Solar Hot Water System–A Novel Approach", journal: "European Journal of Scientific Research", year: "2011, 49 (1), 132-141, 6" },
        { id: 16, author: "M.Ravikumar, PSS.Srinivasan", title: "Heat transfer analysis in PCM filled RCC roof for thermal management", journal: "Journal of Engineering and Applied Sciences", year: "2006, 7, 6" },
        { id: 17, author: "A.Somasundaram, PSS.Srinivasan", title: "Design optimization of dosa making workstation for smooth ergonomic interface", journal: "Journal of Scientific and Industrial Research", year: "2010, 69 (3), 221-224, 5" },
        { id: 18, author: "K.Tamilarasan, K.Perumal, PSS.Srinivasan", title: "Performance of forced and wind assisted domestic solar hot water systems–a comparative experimental study", journal: "Journal of Scientific and Industrial Research", year: "2008, 67, 717-723, 5" },
        { id: 19, author: "M.Ravikumar, PSS.Srinivasan", title: "Analysis of Heat Transfer Across Building Roof with Phase Change Material", journal: "Journal of Computational Information Systems", year: "2012, (4), 1497-1505, 4" },
        { id: 20, author: "K.Senthilkumar, PSS.Srinivasan", title: "Application of Taguchi method for the optimization of system parameters of centrifugal evaporative air cooler", journal: "Journal of Thermal Science", year: "19 (5), 473-479" },
        { id: 21, author: "K.Visagavel, PSS.Srinivasan", title: "Experimental investigation on solar air heater assisted natural ventilation in single sided ventilated room", journal: "Indian Journal of Science and Technology", year: "2010, 3 (7), 803-807, 4" },
        { id: 22, author: "G.Arunkumar, PSS.Srinivasan", title: "Design of displacement amplifying compliant mechanisms with integrated strain actuator using topology optimization", journal: "Proceedings of the Institution of Mechanical Engineers", year: "2006, 4" },
        { id: 23, author: "PSS.Srinivasan, PP.Sethusundaram, KCK.Vijakumar, R.Deivasigamani", title: "Hollow Clay Tiled RCC Roofs foR Human Comfort and Energy Savings", journal: "Renewable Energy Technology for the New Millennium", year: "Proceedings, 4, 2000" },
        { id: 24, author: "R.Vijayan, PSS.Srinivasan", title: "Experimental evaluation of internal heat exchanger influence on R22 window air conditioner retrofitted with R407C", journal: "Thermal Science", year: "2010, 14 (1), 39-47, 3" },
        { id: 25, author: "R.Vijayan, PSS.Srinivasan", title: "Influence of internal heat exchanger on performance of window AC retrofitted with R407C", journal: "Journal of Scientific and Industrial Research", year: "2009, 68 (2), 153, 3" },
        { id: 26, author: "M.Ravikumar, PSS.Srinivasan", title: "Natural Cooling of Building using Phase Change Material", journal: "International Journal of Engineering and Technology", year: "2008, 5 (1), 110, 3" },
        { id: 27, author: "S.Senthilkumar, K.Perumal, PSS.Srinivasan", title: "Construction and performance analysis of a three dimensional compound parabolic concentrator for a spherical absorber", journal: "Journal of Scientific and Industrial Research", year: "2007, 66 (7), 558, 3" },
        { id: 28, author: "K.Visagavel, PSS.Srinivasan", title: "Analysis of Cross and Single Sided Naturally Ventilated Rooms Using CFD", journal: "American Journal of Environmental Sciences", year: "2007, (4), 188-192, 2" },
        { id: 29, author: "P.Navaneethakrishnan, PSS.Srinivasan, S.Dhandapani", title: "Effect of heating coil in commercial shop display cabinet", journal: "Journal of the Indian Institute of Science", year: "2013, 86 (5), 457, 1" },
        { id: 30, author: "K.Senthilkumar, PSS.Srinivasan", title: "Experimental study of centrifugal humidifier fitted in an industrial shed located in tropical climates", journal: "Thermal Science", year: "2011, 15 (2), 467-475, 1" },
        { id: 31, author: "P.Navaneethakrishnan, PSS.Srinivasan, S.Dhandapani", title: "Numerical and experimental investigation of temperature distribution inside a heating oven", journal: "Journal of food processing and preservatio", year: "2010, 34 (2), 275-288, 1" },
        { id: 32, author: "M.Ravikumar, PSS.Srinivasan", title: "Analysis of natural cooling of building using phase change materials", journal: "International Journal of Engineering and Technology", year: "5, 1, 1-10, 2008" },
        { id: 33, author: "R.Kumaravelan, PSS.Srinivasan, P.Tamilselvam, M.Madhan", title: "Intensification of the Subsisting Methodology to Enhance DFM without Discretization", journal: "Journal of Engineering and Technology", year: "2012, 2 (2), 87" },
        { id: 34, author: "K.Senthilkumar, PSS.Srinivasan", title: "A Parametric and Experimental Study of a Centrifugal Atomizer Fitted in an Industrial Shed Located in a Tropical Climate", journal: "Arabian Journal for Science and Engineering", year: "2012, 37 (4), 1089-1100" },
        { id: 35, author: "M.Ravikumar, PSS.Srinivasan", title: "Analysis of heat transfer across phase change material filled reinforced cement concrete roof for thermal management", journal: "Proceedings of the Institution of Mechanical Engineers", year: "Part C, 2012" },
        { id: 36, author: "KK.Ramasamy, PSS.Srinivasan", title: "Experimental investigation of forced and wind assisted domestic solar hot water systems", journal: "Proceedings of the Institution of Mechanical Engineers", year: "Part C, 2011" },
        { id: 37, author: "KK.Ramasamy, PSS.Srinivasan", title: "Enhancement of natural circulation type domestic solar hot water system performance by using a wind turbine", journal: "Journal of Thermal Science", year: "2011, 20 (4), 371-376" },
        { id: 38, author: "GA.Kumar, PSS.Srinivasan", title: "Design of Compliant Mechanisms A Topology Optimization Approach for New Age Industries and Engineering Support", journal: "CURIE Journal", year: "2010, 3" },
        { id: 39, author: "P.Srinivasan, P.Palanichamy", title: "Applications of topology in automobile engineering", journal: "Journal of Experimental Sciences", year: "2010, 1 (1)" },
        { id: 40, author: "Senthilkumar Krishnasamy, PSS Srinivasan", title: "Optimizing Process Parameters of Centrifugal Evaporative Air Cooler", journal: "International J. of Recent Trends in Engineering and Technology", year: "2010, 3 (6)" },
        { id: 41, author: "AG.Kumar, PSS.Srinivasan", title: "Design of Force and Displacement Amplifying Compliant Mechanisms A Multicriteria Optimization Approach", journal: "CURIE Journal", year: "2009, 2 (3)" },
        { id: 42, author: "PSS.Srinivasan, S.Nithiyanandam", title: "Energy Savings in Compressed Air Supply System using Dynamic Controller", journal: "Journal of Energy Heat And Mass Transfer", year: "2008, 30 (1), 89" },
        { id: 43, author: "K.Vijaykumar, S.Dhandapani, PSS.Srinivasan", title: "Energy Efficient Ecofriendly (E^ 3) Roof A Transient Thermal Analysis", journal: "Journal of Energy Heat And Mass Transfer", year: "2007, 29 (1), 27" },
        { id: 44, author: "S.Senthilkumar, K.Perumal, PSS.Srinivasan", title: "Performance Analysis of a Three Dimensional Compound Parabolic Concentrator", journal: "Journal of Energy Heat And Mass Transfer", year: "2007, 29 (3), 241" },
        { id: 45, author: "KCK.Vijaykumar, PSS.Srinivasan, S.Dhandapani", title: "Transient thermal analysis of hollow clay tiled concrete roof for energy conservation and comfort", journal: "Journal of Scientific And Industrial Research", year: "2006, 65 (8), 670" },
        { id: 46, author: "GA.Kumar, PSS.Srinivasan", title: "Topology Optimisation of Compliant Mechanisms for Displacement Amplification in Strain Actuators", journal: "Journal of the Institution of Engineers(India)", year: "2006, Part MC, Mechanical" },
        { id: 47, author: "P.Navaneethakrishnan, PSS.Srinivasan, S.Dhandapani", title: "Numerical and Experimental Investigation of Heating Ovens", journal: "Journal of Energy Heat And Mass Transfer", year: "2006, 28 (4), 251" },
        { id: 48, author: "Mathi Arasu, A.Geddam, PSS.Srinivasan, DGH Samuel", title: "Computer Aided Ergonomic Design of Helmets Using Biomodelling", journal: "Computer Aided Design and Applications", year: "2004, 1 (14), 641-647" },
        { id: 49, author: "N.MathiArasu, PSS.Srinivasan, KCK.Vijayakumar", title: "Trend Predictions in Effect of Spoilers for a Mini Car: A Low Cost Solution", journal: "ASME/JSME 2003 4th Joint Fluids Summer Engineering Conference", year: "2003, 1255-1260" },
        { id: 50, author: "Palanivelu Rajmohan, Dr.PSS.Srinivasan", title: "Studies on Safety Practices in Indian Industries Through The Use Of Working Groups", journal: "Safety Science", year: "2019" },
        { id: 51, author: "Dr.K.Visagavel", title: "Analysis of single side ventilated and cross ventilated rooms by varying the width of the window opening using CFD", journal: "Solar Energy", year: "2009, 83 (1), 2-5" },
        { id: 52, author: "Dr.K.Visagavel", title: "Experimental investigation on solar air heater assisted natural ventilation in single-sided ventilated room", journal: "Indian Journal of Science and Technology", year: "2010, 3 (7), 803-807" },
        { id: 53, author: "Dr.K.Visagavel", title: "Analysis of cross and single sided naturally ventilated rooms using CFD", journal: "American Journal of Environmental Sciences", year: "2007, 3 (4), 188-192" },
        { id: 54, author: "Dr.K.Visagavel", title: "Risk Assessment for Blast Furnace Using FMEA", journal: "International Journal of Research in Engineering and Technology", year: "2014, 3, 27-31" },
        { id: 55, author: "Dr.K.Visagavel", title: "Occupational Health and Safety Management in Manufacturing Industries", journal: "Journal of Scientific & Industrial Research", year: "2014, 73, 381-386" },
        { id: 56, author: "Dr.K.Visagavel", title: "Failure mode and effect analysis using fuzzy analytic hierarchy process", journal: "International Journal of Productivity and Quality Management", year: "2014,14 (3), 296-313" },
        { id: 57, author: "Dr.K.Visagavel", title: "Fire accident prevention system in heavy vehicles", journal: "NCAMESHE 2014", year: "2014,03(11) ,220-221" },
        { id: 58, author: "Dr.K.Visagavel", title: "Development of biodegradable baby diapers", journal: "NCAMESHE 2014", year: "2014,03(11) ,186-191" },
        { id: 59, author: "Dr.K.Visagavel", title: "Studying the thermal behaviour of concrete structure Using nanoencapsulated phase change materials", journal: "NCAMESHE 2014", year: "2014,03(11) ,107-111" },
        { id: 60, author: "Dr.K.Visagavel", title: "Fabrication and testing of refrigeration using engine Waste heat", journal: "NCAMESHE 2014", year: "2014,03(11) ,299-304" },
        { id: 61, author: "Dr.K.Visagavel", title: "Effective Use Of Bio Waste In Institutions", journal: "NCAMESHE 2014", year: "2014,03(11) ,202-204" },
        { id: 62, author: "Dr.K.Visagavel", title: "Exposure hazard analysis in cement fiber sheet Manufacturing industry", journal: "NCAMESHE 2014", year: "2014,03(11) ,76-80" },
        { id: 63, author: "Dr.K.Visagavel", title: "Characteristic data analysis of occupational accident in heavy engineering industry", journal: "NCAMESHE 2014", year: "2014,03(11) ,102-106" },
        { id: 64, author: "Dr.K.Visagavel", title: "Assessment of indoor air quality in an automobile Industry", journal: "NCAMESHE 2014", year: "2014,03(11) ,265-272" },
        { id: 65, author: "Dr.K.Visagavel", title: "Evaluvation of noise level and its adverse effect in metal Die manufacuturing industry", journal: "NCAMESHE 2014", year: "2014,03(11) ,252-255" },
        { id: 66, author: "Dr.K.Visagavel", title: "Applying fuzzy ahp to evaluate the carbon foot print on the workplace in educational institutions", journal: "NCAMESHE 2014", year: "2014,03(11) ,124-129" },
        { id: 67, author: "M.Senthil, Dr.K.Visagavel, CG. Saravanan, Karthick Rajendran", title: "Investigations of red mud as a catalyst in Mahua oil biodiesel production and its engine performance", journal: "Fuel Processing Technology", year: "149, 2016, 7-14" },
        { id: 68, author: "M.Senthil, Dr.K.Visagavel, Avinash A", title: "Effects of exhaust gas recirculation on emission characteristics of Mahua (Madhuca Indica) biodiesel using red mud as catalyst", journal: "Energy Source Part A: Recovery, Utilization, and Environmental Effects", year: "Volume 38, 2016 - Issue 6" },
        { id: 69, author: "P.Parthiban, H.Abdul Zubar, Pravin Katakar", title: "Vendor selection problem: A multi-criteria approach based on strategic decisions", journal: "International Journal of Production Research", year: "2013,Volume 51, Issue 5" },
        { id: 70, author: "P.Parthiban, H.Abdul Zubar", title: "An integrated multi objective decision making process for the performance evaluation of the vendors", journal: "International Journal of Production Research", year: "2013,Volume 51 Issue 13" },
        { id: 100, author: "P Navaneethakrishnan, TP Sathishkumar, S Ramakrishnan", title: "Mechanical behaviours of aluminium filler and jute fibre mat reinforced epoxy hybrid composites", journal: "Hybrid Natural Fibre Composites (Book chapter)", year: "21-40, 2021" },
        { id: 131, author: "Shyjith, Kailas, Ilangkumaran, Maari Kumanan, Sabhya", title: "Multi Criteria decision making approach to evaluate optimum maintenance strategy in textile Industry", journal: "Journal of Quality in Maintenance Engineering", year: "14, 4, 375-386, 2008" },
        { id: 150, author: "Sakthivel, G, Nagarajan, G, Ilangkumaran, M, Gaikwad, Aditya Bajirao", title: "Comparative analysis of performance, emission and combustion parameters of diesel engine fuelled with ethyl ester of fish oil and its diesel blends", journal: "Fuel", year: "132, 116-124, 2014" },
        { id: 200, author: "A. Godwin Antony, V. Sivakumar, K.Visagavel", title: "Enhancement of induced natural ventilation using various ventilator configuration in single side ventilated building using CFD", journal: "Indian Journal of Geo Marine Sciences", year: "49 (03), 2020, 503-506" },
        { id: 207, author: "Panneerselvam N, Murugesan A, Vijayakumar C, Subramaniam D", title: "Optimization of biodiesel produced from watermelon (Citrullus Vulgaris) by using batch type production unit", journal: "Energy Sources, Part A: Recovery, Utilization, andEnvironmental Effects", year: "38, 16, 2343-2348, 2016" }
    ]

    const filteredPublications = publications.filter(pub => 
        pub.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
        pub.author.toLowerCase().includes(searchTerm.toLowerCase()) ||
        pub.journal.toLowerCase().includes(searchTerm.toLowerCase())
    )

    const isMechanical = deptName?.toLowerCase() === 'mechanical-engineering'

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
                                    Comprehensive archive of 200+ scholarly articles published by {formatDeptName(deptName)} faculty in high-impact international journals and peer-reviewed periodicals.
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
                                    <th className="bg-black px-6 py-5 text-[11px] font-bold uppercase tracking-[2px] w-16">#</th>
                                    <th className="bg-black px-6 py-5 text-[11px] font-bold uppercase tracking-[2px]">Scholarly Article Detail</th>
                                    <th className="bg-black px-6 py-5 text-[11px] font-bold uppercase tracking-[2px]">Source & Citation</th>
                                    <th className="bg-black px-6 py-5 text-right text-[11px] font-bold text-[#ffc107] uppercase tracking-[2px] pr-8">Timeline</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-slate-100">
                                {isMechanical && filteredPublications.length > 0 ? (
                                    filteredPublications.map((pub, idx) => (
                                        <tr key={pub.id} className="group hover:bg-[#fafcff] transition-all duration-300">
                                            <td className="px-6 py-8 align-top">
                                                <div className="w-8 h-8 bg-blue-50/50 rounded flex items-center justify-center text-black font-black text-xs group-hover:bg-black group-hover:text-white transition-all duration-300">
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
