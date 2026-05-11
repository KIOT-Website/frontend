import React from 'react'
import { motion } from 'framer-motion'
import { useParams, Link } from 'react-router-dom'
import { 
    ChevronRight, 
    FlaskConical,
    ShieldCheck,
    Cpu,
    ArrowLeft,
    Microscope,
    Box,
    HardHat
} from 'lucide-react'

const ResearchFacilitiesPage = () => {
    const { deptName } = useParams()

    const formatDeptName = (name) => {
        if (!name) return "Departmentwise"
        return name.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')
    }

    const allFacilities = {
        'mechanical-engineering': [
            {
                id: 1,
                lab: "Composite Research Centre for Product Design, Digital Manufacturing and Technical Documentation",
                equipment: "Catia v6, Delmia V5 and 3DVia",
                domain: "Design",
                icon: Cpu
            },
            {
                id: 2,
                lab: "Centre for Environmental Health and safety",
                equipment: "Vibration test facility, Whirling speed of shaft, Exhaust gas analyzer, Smoke meter, Friction tester, Impact tester, High volume sampler",
                domain: "Industrial Safety Engg.",
                icon: ShieldCheck
            }
        ],
        'electronics-&-communication-engineering': [
            {
                id: 101,
                lab: "Centre for Medical Imaging",
                equipment: "Advanced Signal Processing Kits, Medical Image Analysis Software, Virtual Reality Simulation for Medical Diagnostics",
                domain: "Medical Research",
                icon: FlaskConical
            },
            {
                id: 102,
                lab: "Signal Processing & Communication Lab",
                equipment: "Digital Storage Oscilloscopes, Spectrum Analyzers, FPGA Kits, MATLAB with Toolbox",
                domain: "Communication",
                icon: Cpu
            },
            {
                id: 103,
                lab: "Embedded Systems & VLSI Design Lab",
                equipment: "Xilinx Vivado, Cadence Tools, Microcontroller Development Boards (ARM, AVR, PIC)",
                domain: "VLSI Design",
                icon: Microscope
            }
        ],
        'electrical-&-electronics-engineering': [
            { id: 1, lab: "SIEMENS CoE's", equipment: "Siemens S7 200 Smart PLC Trainer", domain: "Control & Instrumentation", icon: Box },
            { id: 2, lab: "SIEMENS CoE's", equipment: "Siemens S7 200 Smart PLC with RTD trainer kit", domain: "Control & Instrumentation", icon: Box },
            { id: 3, lab: "SIEMENS CoE's", equipment: "Siemens S7 200 Smart PLC with VFD", domain: "Control & Instrumentation", icon: Box },
            { id: 4, lab: "SIEMENS CoE's", equipment: "Siemens S7 200 Smart PLC with Servo Drive", domain: "Control & Instrumentation", icon: Box },
            { id: 5, lab: "Power Electronics and Drives Lab", equipment: "DSP Controlled BLDC Drive", domain: "PED & Electrical Machines", icon: Cpu },
            { id: 6, lab: "Power Electronics and Drives Lab", equipment: "DSP Controlled DC Drive", domain: "PED & Electrical Machines", icon: Cpu },
            { id: 7, lab: "Power Electronics and Drives Lab", equipment: "DSP Controlled IM Drive", domain: "PED & Electrical Machines", icon: Cpu },
            { id: 8, lab: "Robotics Lab", equipment: "Modelling 2D/3D Simulation Software", domain: "Electric Vehicle", icon: Microscope },
            { id: 9, lab: "Robotics Lab", equipment: "Grid Connected Battery Charging Station", domain: "Electric Vehicle", icon: HardHat },
            { id: 10, lab: "Robotics Lab", equipment: "Battery Performance Testing unit", domain: "Electric Vehicle", icon: HardHat },
            { id: 11, lab: "Robotics Lab", equipment: "Axial Flex EV Motor Drive", domain: "Electric Vehicle", icon: Cpu },
            { id: 12, lab: "Robotics Lab", equipment: "Axial Switched Reluctance Motor Drive", domain: "Electric Vehicle", icon: Cpu },
            { id: 13, lab: "Robotics Lab", equipment: "dSpace Electric Test Bench", domain: "Electric Vehicle", icon: FlaskConical },
            { id: 14, lab: "Robotics Lab", equipment: "dSpace real-time model for autonomous system", domain: "Electric Vehicle", icon: FlaskConical }
        ],
        'computer-science-&-engineering': [
            { id: 1, lab: "Big Data Advanced Analytics Lab", equipment: "HADOOP Ecosystem", domain: "Big Data Analytics", icon: Cpu },
            { id: 2, lab: "IOT Lab", equipment: "Intel Galileo Kit", domain: "Internet of Things", icon: Box }
        ],
        'civil-engineering': [
            {
                id: 1,
                lab: "Concrete and Highway Engineering Laboratory",
                equipment: "Compression Testing Machine (2000kN), Universal Testing Machine (1000kN), Ultrasonic Pulse Velocity Tester, Rebound Hammer, Los Angeles Abrasion Testing Machine.",
                domain: "Structural & Material Research",
                icon: HardHat
            }
        ],
        'artificial-intelligence-&-data-science': [
            {
                id: 1,
                lab: "Composite Research Centre for Product Design, Digital Manufacturing and Technical Documentation",
                equipment: "Catia v6, Delmia V5 and 3DVia",
                domain: "Design",
                icon: Cpu
            },
            {
                id: 2,
                lab: "Centre for Environmental Health and safety",
                equipment: "Vibration test facility, Whirling speed of shaft, Exhaust gas analyzer, Smoke meter, Friction tester, Impact tester, High volume sampler",
                domain: "Industrial Safety Engg.",
                icon: ShieldCheck
            }
        ]
    }

    const displayFacilities = allFacilities[deptName?.toLowerCase()] || []

    return (
        <div className="min-h-screen bg-[#f6f9fc] font-sans pb-20">


            <div className="max-w-6xl mx-auto px-6 py-12 lg:py-16">
                
                {/* Header Section */}
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mb-12 text-center md:text-left"
                >


                    <h1 className="text-3xl lg:text-5xl font-bold text-[#224292] uppercase leading-tight mb-6">
                        Advanced <span className="text-[#ffc107]">Research Facilities</span>
                    </h1>

                    <div className="max-w-3xl border-l-4 border-[#ffc107] pl-8 py-1">
                        <p className="text-[#1e293b] text-base font-semibold leading-relaxed">
                            KIOT's {formatDeptName(deptName)} is equipped with specialized R&D centers and cutting-edge laboratory facilities to support high-impact technical investigations and product development.
                        </p>
                    </div>
                </motion.div>

                {/* Facilities List */}
                <div className="space-y-6">
                    {displayFacilities.length > 0 ? (
                        displayFacilities.map((facility, idx) => (
                            <motion.div
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: idx * 0.1 }}
                                key={facility.id}
                                className="group bg-white rounded-2xl border border-slate-200/60 shadow-xl shadow-blue-900/5 hover:border-[#ffc107] transition-all duration-300 overflow-hidden"
                            >
                                <div className="flex flex-col md:flex-row divide-y md:divide-y-0 md:divide-x divide-slate-100">
                                    <div className="p-8 md:w-3/5">
                                        <div className="flex items-start gap-5 mb-6">
                                            <div className="w-14 h-14 bg-slate-50 rounded-2xl flex items-center justify-center text-[#ffc107] shadow-inner group-hover:bg-[#0f172a] transition-all">
                                                <facility.icon size={28} />
                                            </div>
                                            <div>
                                                <span className="text-[10px] font-bold text-[#ffc107] uppercase tracking-[2px] block mb-2">Centre of Excellence 0{idx + 1}</span>
                                                <h3 className="text-xl font-bold text-[#0f172a] uppercase leading-tight">{facility.lab}</h3>
                                            </div>
                                        </div>
                                        <div className="bg-slate-50/50 rounded-xl p-5 border border-slate-100">
                                            <span className="text-[10px] font-bold text-[#1e293b] uppercase tracking-wider block mb-3 opacity-60">High-End Equipment & Software</span>
                                            <p className="text-[14px] font-semibold text-[#334155] leading-relaxed">
                                                {facility.equipment}
                                            </p>
                                        </div>
                                    </div>
                                    <div className="p-8 md:w-2/5 flex flex-col justify-center bg-[#fafcff]">
                                        <span className="text-[10px] font-bold text-[#64779F] uppercase tracking-widest block mb-4">Core Research Domain</span>
                                        <div className="flex items-center gap-4">
                                            <div className="w-10 h-10 rounded-xl bg-white border border-slate-200 flex items-center justify-center text-[#0f172a] shadow-sm">
                                                <Microscope size={20} />
                                            </div>
                                            <span className="text-lg font-bold text-[#224292] uppercase tracking-tight italic">"{facility.domain}"</span>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        ))
                    ) : (
                        <div className="bg-white rounded-[2rem] p-20 text-center border border-slate-200 shadow-sm">
                            <Box size={40} className="mx-auto text-slate-200 mb-4" />
                            <p className="text-[#0f172a] font-bold uppercase text-xs">Facility Data Coming Soon</p>
                        </div>
                    )}
                </div>

            </div>
        </div>
    )
}

export default ResearchFacilitiesPage
