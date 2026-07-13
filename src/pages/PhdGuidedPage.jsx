import React from 'react'
import { motion } from 'framer-motion'
import { useParams, Link } from 'react-router-dom'
import { 
    ChevronRight, 
    Home as HomeIcon,
    Terminal,
    UserCheck,
    CheckCircle2,
    ArrowLeft,
    GraduationCap,
    Clock,
    Search
} from 'lucide-react'

const PhdGuidedPage = () => {
    const { deptName } = useParams()

    const formatDeptName = (name) => {
        if (!name) return "Departmentwise"
        return name.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')
    }

    const allGuidedScholars = {
        'mechanical-engineering': [
            { id: 1, supervisor: "Dr.PSS.Srinivasan", scholar: "Dr.S.Nithiyanandam", topic: "Studies on energy conservation aspects in industrial compressed air supply systems", university: "Anna University, Chennai", status: "Completed" },
            { id: 2, supervisor: "Dr.PSS.Srinivasan", scholar: "Dr.R.Parameshwarn", topic: "Development of an integrated closed loop performance model for service industries", university: "Anna University, Chennai", status: "Completed" },
            { id: 3, supervisor: "Dr.PSS.Srinivasan", scholar: "Dr.R.Vijayan", topic: "Studies on R22 windows air conditioner retrofitted with R407C and internal heat exchanger", university: "Anna University, Chennai", status: "Completed" },
            { id: 4, supervisor: "Dr.PSS.Srinivasan", scholar: "Dr.K.Visagavel", topic: "Analysis of solar air heater assisted ventilation system for residential buildings", university: "Anna University, Chennai", status: "Completed" },
            { id: 5, supervisor: "Dr.PSS.Srinivasan", scholar: "Dr.V.Hariharan", topic: "Study of vibration signatures of Bearings for Fault Diagnosis and condition monitoring", university: "Anna University, Chennai", status: "Completed" },
            { id: 6, supervisor: "Dr.PSS.Srinivasan", scholar: "Dr.K.Senthil Kumar", topic: "Performance analysis of centrifugal Atomizer evaporative type air cooler suitable for industrial sheds located in tropical climates", university: "Anna University, Chennai", status: "Completed" },
            { id: 7, supervisor: "Dr.PSS.Srinivasan", scholar: "Dr.P.Tamilselvan", topic: "Studies on Condensation over horizontal integral finned tubes", university: "Anna University, Chennai", status: "Completed" },
            { id: 8, supervisor: "Dr.PSS.Srinivasan", scholar: "Dr.R.Kumaravelan", topic: "Thermo-Mechanical analysis of functionally Graded material plates", university: "Anna University, Chennai", status: "Completed" },
            { id: 9, supervisor: "Dr.PSS.Srinivasan", scholar: "Dr.G.Nallakumarasamy", topic: "Optimization of operation sequencing in CAPP", university: "Anna University, Chennai", status: "Completed" },
            { id: 10, supervisor: "Dr.PSS.Srinivasan", scholar: "Dr.G.Arunkumar", topic: "Design and Analysis of complaint mechanisms using topology optimization approach", university: "Anna University, Chennai", status: "Completed" },
            { id: 11, supervisor: "Dr.PSS.Srinivasan", scholar: "Dr.K.K.Ramasamy", topic: "Design and Analysis of Solar water pump under natural convection", university: "Anna University, Chennai", status: "Completed" },
            { id: 12, supervisor: "Dr.PSS.Srinivasan", scholar: "Dr. M.Ravikumar", topic: "Analysis of natural cooling of building using phase change material", university: "Anna University, Chennai", status: "Completed" },
            { id: 13, supervisor: "Dr.PSS.Srinivasan", scholar: "Dr. P.Sathiamurthi", topic: "Waste heat recovery from air-conditioner", university: "Anna University, Chennai", status: "Completed" },
            { id: 14, supervisor: "Dr.PSS.Srinivasan", scholar: "Dr. C.Chinnaraj", topic: "Performance analysis of Electronic Expansion Valve in R22 window air-conditioner retrofitted with R407C and R290", university: "Anna University, Chennai", status: "Completed" },
            { id: 15, supervisor: "Dr.K.Visagavel", scholar: "Dr.M.Senthil", topic: "Experimental Investigation on Diesel Engine Fuelled with Catalytic Cranked Mahua Oil", university: "Anna University, Chennai", status: "Completed" },
            { id: 16, supervisor: "Dr.K.Visagavel", scholar: "Dr.S.Sudhagar", topic: "A Study on The Mechanical Properties of Natural Fiber Reinforced Polyester Composites and The Performance Behavior of the Composite Gear.", university: "Anna University, Chennai", status: "Completed" },
            { id: 17, supervisor: "Dr.K.Visagavel", scholar: "Dr.V.Mugesh Raja", topic: "Experimental Investigation and Optimization Using Meta Heuristics for Carbon Fiber Reinforced Polyester Composites of An Automobile Leaf", university: "Anna University, Chennai", status: "Completed" },
            { id: 18, supervisor: "Dr.H.Abdul Zubar", scholar: "Dr.R.Balamurugan", topic: "Prioritizing and improving Healthcare service performance using lean and predictive analytic Techniques", university: "Anna University, Chennai", status: "Completed" },
            { id: 19, supervisor: "Dr.H.Abdul Zubar", scholar: "Dr.A.Krishnaraju", topic: "An investigation on quadruped reconfigurable mechanism in surveillance application", university: "Anna University, Chennai", status: "Completed" },
            { id: 20, supervisor: "Dr.K.Visagavel", scholar: "Dr.V.Sivakumar", topic: "Analysis of ventilation system for urban building with various position and pattern of openings", university: "Anna University, Chennai", status: "Completed" }
        ],
        'electronics-&-communication-engineering': [
            { id: 1, supervisor: "Dr.N.Santhiyakumari", scholar: "S.Madhukumar", topic: "Improving Target Delineation of Tumor Edema Complex through Modified Enhancement, Restoration and Segmentation Schemes", university: "Anna University", status: "Completed" },
            { id: 2, supervisor: "Dr.N.Santhiyakumari", scholar: "P.Nithyadharshini", topic: "Analysis of hybrid approaches for efficient routing in vehicular ad hoc networks", university: "Anna University", status: "Completed" },
            { id: 3, supervisor: "Dr.N.Santhiyakumari", scholar: "S.Aruljothi", topic: "Certain investigations on VLSI architectures for image scaling and impulse denoising", university: "Anna University", status: "Completed" },
            { id: 4, supervisor: "Dr.N.Santhiyakumari", scholar: "N.Sudha", topic: "Computer-Aided Diagnosis for Bowel Images in Wireless Capsule Endoscopy", university: "Anna University", status: "Completed" },
            { id: 5, supervisor: "Dr.N.Santhiyakumari", scholar: "P.Shanmugasundaram", topic: "Certain Investigations on Computer-Aided Colon Cancer Detection in Wireless Capsule Endoscopy Images", university: "Anna University", status: "Completed" },
            { id: 6, supervisor: "Dr.N.Santhiyakumari", scholar: "V.Saravanan", topic: "Certain investigations on active noise control systems for domestic applications by developing the step size of the FxLMS algorithm", university: "Anna University", status: "Completed" },
            { id: 7, supervisor: "Dr.N.Santhiyakumari", scholar: "K.M.Majidha Fathima", topic: "Certain Investigations on Routing Optimization in Wireless Sensor Network by Improving the Quality of Service Parameters Using Modified Splay Tree Algorithm", university: "Anna University", status: "Completed" }
        ],
        'electrical-&-electronics-engineering': [
            { id: 1, supervisor: "Dr.C.Muniraj", scholar: "Mr.P.Govindaraju", topic: "High Voltage Engineering", university: "Anna University", status: "Awarded (2024)" },
            { id: 2, supervisor: "Dr.V.Kamatchi Kannan", scholar: "Mr.P.Selvabharathi", topic: "DC-DC Converter", university: "Anna University", status: "Thesis Submitted (2025)" },
            { id: 3, supervisor: "Dr.C.Muniraj", scholar: "Ms.P.Gomathi", topic: "Medical Image Processing", university: "Anna University", status: "Awarded (2023)" },
            { id: 4, supervisor: "Dr.V.Kamatchi Kannan", scholar: "Mr.S.Sathiskumar", topic: "DC-DC Converter", university: "Anna University", status: "Awarded (2024)" },
            { id: 5, supervisor: "Dr.V.Kamatchi Kannan", scholar: "Mr.S.Selvakumar", topic: "Quasi Z-Source Inverter", university: "Anna University", status: "Awarded (2022)" },
            { id: 6, supervisor: "Dr.V.Kamatchi Kannan", scholar: "Mr.F.Vijay Amirtha Raj", topic: "Permanent Magnet Synchronous Motor", university: "Anna University", status: "Awarded (2022)" },
            { id: 7, supervisor: "Dr.C.Muniraj", scholar: "Ms.N.Selvarani", topic: "Power Electronics and Drives", university: "Anna University", status: "Awarded (2021)" },
            { id: 8, supervisor: "Dr.C.Muniraj", scholar: "Ms.D.Gunapriya", topic: "Electrical Machines", university: "Anna University", status: "Awarded (2021)" }
        ],
        'computer-science-&-engineering': [
            { id: 1, supervisor: "Dr.P.Rajendran", scholar: "Selvarani S", topic: "Computer Science", university: "Anna University", status: "Synopsis Submitted" },
            { id: 2, supervisor: "Dr.P.Rajendran", scholar: "Sasikumar B", topic: "Computer Science", university: "Anna University", status: "Thesis Submitted" },
            { id: 3, supervisor: "Dr.P.Rajendran", scholar: "Sathiyapriya V", topic: "Computer Science", university: "Anna University", status: "Course Work" },
            { id: 4, supervisor: "Dr.P.Rajendran", scholar: "Brindha V", topic: "Computer Science", university: "Anna University", status: "Course Work" },
            { id: 5, supervisor: "Dr.P.Rajendran", scholar: "Lalithambikai S", topic: "Computer Science", university: "Anna University", status: "Course Work" },
            { id: 6, supervisor: "Dr.P.Rajendran", scholar: "Pushpalatha R", topic: "Computer Science", university: "Anna University", status: "Course Work" },
            { id: 7, supervisor: "Dr.P.Rajendran", scholar: "Subha N", topic: "Computer Science", university: "Anna University", status: "Course Work" },
            { id: 8, supervisor: "Dr.P.Rajendran", scholar: "Esther Rani P J", topic: "Computer Science", university: "Anna University", status: "Course Work" },
            { id: 9, supervisor: "Dr.R.Kumar", scholar: "Ashok M", topic: "Computer Science", university: "Anna University", status: "Confirmation completed" },
            { id: 10, supervisor: "Dr.R.Kumar", scholar: "Bhuvaneswari B", topic: "Computer Science", university: "Anna University", status: "Course Work" },
            { id: 11, supervisor: "Dr.R.Kumar", scholar: "Sudha S", topic: "Computer Science", university: "Anna University", status: "Course Work" },
            { id: 12, supervisor: "Dr.P.Vijayalakshmi", scholar: "Karthick R", topic: "Computer Science", university: "Anna University", status: "Course Work" },
            { id: 13, supervisor: "Dr.P.Vijayalakshmi", scholar: "Sekar A", topic: "Computer Science", university: "Anna University", status: "Course Work" },
            { id: 14, supervisor: "Dr.P.Vijayalakshmi", scholar: "Preetha B", topic: "Computer Science", university: "Anna University", status: "Course Work" },
            { id: 15, supervisor: "Dr.P.Vijayalakshmi", scholar: "Ramya D", topic: "Computer Science", university: "Anna University", status: "Course Work" }
        ],
        'artificial-intelligence-&-data-science': [
            { id: 1, supervisor: "Dr.P.Rajendran", scholar: "Sasikumar B", topic: "Image Processing", university: "Anna University", status: "Thesis Submitted" },
            { id: 2, supervisor: "Dr.S. Kumarganesh", scholar: "A.GOPALAKRISHNAN", topic: "Medical Image Processing", university: "Anna University", status: "Course Work" },
            { id: 3, supervisor: "Dr.P.Rajendran", scholar: "Brindha V", topic: "Medical Image Processing", university: "Anna University", status: "Course Work" },
            { id: 4, supervisor: "Dr.R.Kumar", scholar: "Bhuvaneswari B", topic: "Image Processing", university: "Anna University", status: "Course Work" },
            { id: 5, supervisor: "Dr.E.Sathish Kumar", scholar: "M.DEEPA", topic: "Network Security", university: "Anna University", status: "Course Work" },
            { id: 6, supervisor: "Dr.P.Rajendran", scholar: "Esther Rani P J", topic: "Wireless Sensor Network", university: "Anna University", status: "Course Work" },
            { id: 7, supervisor: "Dr.R.Kumar", scholar: "Sudha S", topic: "AI in Special Education", university: "Anna University", status: "Course Work" }
        ]
    }

    const displayScholars = allGuidedScholars[deptName?.toLowerCase()] || []

    return (
        <div className="min-h-screen bg-[#f6f9fc] font-sans pb-20">


            <div className="max-w-7xl mx-auto px-6 py-12 lg:py-16">
                
                {/* Header Section */}
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mb-12"
                >


                    <h1 className="text-3xl lg:text-5xl font-bold text-[#224292] leading-tight mb-6">
                        Scholars Successfully <span className="text-[#ffc107]">Guided</span>
                    </h1>

                    <div className="max-w-3xl border-l-4 border-[#ffc107] pl-8 py-1">
                        <p className="text-[#1e293b] text-base font-semibold leading-relaxed">
                            Official record of doctoral scholars who have successfully completed their research under the supervision of {formatDeptName(deptName)} faculty. A testament to KIOT's research impact.
                        </p>
                    </div>
                </motion.div>

                {/* Table Section */}
                <motion.div 
                    initial={{ opacity: 0, scale: 0.98 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="bg-white rounded-2xl shadow-2xl shadow-blue-900/5 border border-slate-200/60 overflow-hidden"
                >
                    <div className="overflow-x-auto">
                        <table className="w-full border-collapse">
                            <thead>
                                <tr className="text-white">
                                    <th className="bg-black px-6 py-5 text-left text-[13px] font-semibold font-graphik tracking-wider w-16">S.No.</th>
                                    <th className="bg-black px-6 py-5 text-left text-[13px] font-semibold font-graphik tracking-wider">Name of the Scholar</th>
                                    <th className="bg-black px-6 py-5 text-left text-[13px] font-semibold font-graphik tracking-wider">Title of the Thesis</th>
                                    <th className="bg-black px-6 py-5 text-left text-[13px] font-semibold font-graphik tracking-wider">Guide / Supervisor</th>
                                    <th className="bg-black px-6 py-5 text-left text-[13px] font-semibold font-graphik text-[#ffc107] tracking-wider pr-8">Affiliation</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-slate-100">
                                {displayScholars.length > 0 ? (
                                    displayScholars.map((item, idx) => (
                                        <tr 
                                            key={item.id}
                                            className="group hover:bg-[#fafcff] transition-all duration-300"
                                        >
                                            <td className="px-6 py-5">
                                                <div className="w-8 h-8 bg-blue-50/50 rounded flex items-center justify-center text-black font-black text-xs group-hover:bg-black group-hover:text-white transition-all duration-300">
                                                    {idx + 1 < 10 ? `0${idx + 1}` : idx + 1}
                                                </div>
                                            </td>
                                            <td className="px-6 py-5">
                                                <div className="flex items-center gap-3">
                                                    <div className="w-9 h-9 rounded-full bg-blue-50 flex items-center justify-center text-[#0f172a] shrink-0"><GraduationCap size={16} /></div>
                                                    <span className="text-[14px] font-bold text-[#0f172a] tracking-tight">{item.scholar}</span>
                                                </div>
                                            </td>
                                            <td className="px-6 py-5">
                                                <p className="text-[13px] font-semibold text-[#1e293b] leading-relaxed max-w-[450px]">
                                                    {item.topic}
                                                </p>
                                            </td>
                                            <td className="px-6 py-5">
                                                <span className="text-[14px] font-bold text-[#0f172a] tracking-tight">{item.supervisor}</span>
                                            </td>
                                            <td className="px-6 py-5 pr-8">
                                                <div className="flex flex-col gap-1.5">
                                                    <span className="text-[13px] font-bold text-[#334155]">{item.university}</span>
                                                    <div className="flex items-center gap-1.5 px-3 py-1 bg-green-50 rounded-full text-green-700 text-[9px] font-bold uppercase tracking-widest border border-green-100 w-fit">
                                                        <CheckCircle2 size={12} /> {item.status}
                                                    </div>
                                                </div>
                                            </td>
                                        </tr>
                                    ))
                                ) : (
                                    <tr>
                                        <td colSpan="5" className="px-6 py-20 text-center text-slate-400 font-bold uppercase text-xs">No records found for this department.</td>
                                    </tr>
                                )}
                            </tbody>
                        </table>
                    </div>
                </motion.div>

                <div className="mt-8 flex items-center gap-4">
                    <div className="px-5 py-2.5 bg-white border border-slate-200 rounded-2xl shadow-sm text-[#0f172a] text-xs font-bold uppercase flex items-center gap-3">
                        <Terminal size={14} className="text-[#ffc107]" /> {displayScholars.length} Doctorate Completions Verified
                    </div>
                </div>

            </div>
        </div>
    )
}

export default PhdGuidedPage
