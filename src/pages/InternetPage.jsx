import React from 'react'
import { useNavigate } from 'react-router-dom'
import { 
  Wifi, 
  ArrowLeft,
  Monitor,
  Server,
  Laptop,
  Cpu,
  Zap,
  Network,
  Globe2,
  Table as TableIcon
} from 'lucide-react'
import { motion } from 'framer-motion'

const InternetPage = () => {
    const navigate = useNavigate();

    const labFacilities = [
        { sno: '1', cc: 'CC1', name: 'Computer Aided Machine Drawing Laboratory', area: '160.69 Sq.m', dept: 'MECH', systems: '72' },
        { sno: '2', cc: 'CC2', name: 'Language Laboratory', area: '160.69 Sq.m', dept: 'CSE', systems: '72' },
        { sno: '3', cc: 'CC3', name: 'DSP Laboratory', area: '83.10 Sq.m', dept: 'ECE', systems: '37' },
        { sno: '4', cc: 'CC4', name: 'Networks Laboratory (ECE)', area: '78.06 Sq.m', dept: 'ECE', systems: '36' },
        { sno: '5', cc: 'CC5', name: 'Networks Laboratory (IT)', area: '74.76 Sq.m', dept: 'IT', systems: '40' },
        { sno: '6', cc: 'CC6', name: 'Database Management System Laboratory', area: '93.59 Sq.m', dept: 'CSBS', systems: '40' },
        { sno: '7', cc: 'CC7', name: 'Mobile Application Development Laboratory', area: '95.43 Sq.m', dept: 'CSE', systems: '40' },
        { sno: '8', cc: 'CC8', name: 'Software Development Laboratory', area: '75.49 Sq.m', dept: 'CSE', systems: '40' },
        { sno: '9', cc: 'CC9', name: 'Data Science Laboratory', area: '103.05 Sq.m', dept: 'AI & DS', systems: '40' },
        { sno: '10', cc: 'CC10', name: 'CAD Laboratory', area: '132.74 Sq.m', dept: 'CIVIL', systems: '40' },
        { sno: '11', cc: 'CC11', name: 'Computer Practices Laboratory', area: '65.91 Sq.m', dept: 'CSE', systems: '40' },
        { sno: '12', cc: 'CC12', name: 'Data Structures Laboratory', area: '65.91 Sq.m', dept: 'CSE', systems: '40' },
        { sno: '13', cc: '-', name: 'Communication Skills Laboratory', area: '74.70 Sq.m', dept: 'MBA', systems: '61' },
        { sno: '14', cc: '-', name: 'Business Software Laboratory', area: '74.70 Sq.m', dept: 'MBA', systems: '60' },
        { sno: '15', cc: '-', name: 'PG - CSE Laboratory I', area: '42.20 Sq.m', dept: 'CSE', systems: '24' },
        { sno: '16', cc: '-', name: 'PG - CSE Laboratory II', area: '76.58 Sq.m', dept: 'CSE', systems: '30' },
        { sno: '17', cc: '-', name: 'PG -VLSI Laboratory I', area: '85.00 Sq.m', dept: 'ECE', systems: '20' },
        { sno: '18', cc: '-', name: 'PG -VLSI Laboratory II', area: '85.00 Sq.m', dept: 'ECE', systems: '20' },
        { sno: '19', cc: '-', name: 'CAD Laboratory', area: '132.85 Sq.m', dept: 'MECH', systems: '48' },
        { sno: '20', cc: '-', name: 'PG - MECH Laboratory I', area: '79.71 Sq.m', dept: 'MECH', systems: '26' },
        { sno: '21', cc: '-', name: 'PG - MECH Laboratory II', area: '79.71 Sq.m', dept: 'MECH', systems: '12' },
        { sno: '22', cc: '-', name: 'PG Embedded System Laboratory', area: '64.44 Sq.m', dept: 'EEE', systems: '22' },
        { sno: '23', cc: '-', name: 'PG Research Laboratory', area: '55.5 Sq.m', dept: 'EEE', systems: '14' },
        { sno: '24', cc: '-', name: 'Power System Simulation Laboratory', area: '81.88 Sq.m', dept: 'EEE', systems: '24' }
    ];

    const configs = [
        { id: 'A', name: 'ACER DUAL CORE', ram: '2GB RAM' },
        { id: 'B', name: 'ACER I3', ram: '4GB RAM', hdd: '500GB HDD' },
        { id: 'C', name: 'ACER I3', ram: '2GB RAM', hdd: '500GB HDD' },
        { id: 'D', name: 'HCL INTEL CORE I3', ram: '2GB DDR3 RAM', hdd: '320GB HDD' },
        { id: 'E', name: 'ZENITH INTEL DUAL CORE', ram: '2GB RAM', hdd: '500GB HDD' },
        { id: 'F', name: 'HCL INTEL DUAL CORE', ram: '2GB RAM', hdd: '320GB HDD' },
        { id: 'G', name: 'ACER I5', ram: '8GB RAM', hdd: '500GB HDD' },
        { id: 'H', name: 'ZENITH INTEL DUAL CORE', ram: '2GB RAM', hdd: '250GB HDD' }
    ];

    const isps = [
        { name: 'RAILTEL', speed: '300Mbps' },
        { name: 'READYLINK INTERNET SERVICES LIMITED', speed: '150Mbps' },
        { name: 'MINNAL', speed: '50Mbps' }
    ];

    return (
        <div className="min-h-screen bg-[#FCFDFD] pb-24">
            {/* 🔷 Hero Section */}
            <div className="relative h-[32vh] flex items-center justify-center overflow-hidden bg-[#224292]">
                <div className="absolute inset-0">
                    <img 
                        src="https://images.unsplash.com/photo-1544197150-b99a580bb7a8?q=80&w=1920&auto=format&fit=crop" 
                        className="w-full h-full object-cover opacity-100 scale-110 transition-transform duration-1000" 
                        alt="Network Infrastructure"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-[#224292]/90 via-[#224292]/70 to-transparent" />
                </div>
                
                <div className="relative z-10 text-center px-6">
                    <motion.div
                        initial={{ y: 30, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.8 }}
                    >

                        <h1 className="text-3xl md:text-5xl font-black text-white tracking-tighter leading-none mb-3">
                            Internet & <span className="text-[#ffc107]">Computing Facilities</span>
                        </h1>
                    </motion.div>
                </div>
            </div>  

            <div className="max-w-7xl mx-auto px-6 py-16 relative z-20 space-y-24">
                
                {/* 🌐 ISP & Bandwidth Section */}
                <div className="grid lg:grid-cols-3 gap-8">
                    <div className="lg:col-span-1 bg-[#224292] rounded-[2.5rem] p-10 text-white relative overflow-hidden group shadow-2xl">
                        <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-bl-[5rem] group-hover:scale-110 transition-transform duration-700" />
                        <div className="relative z-10 space-y-8">
                            <div className="w-14 h-14 bg-[#ffc107] rounded-2xl flex items-center justify-center text-[#224292] shadow-xl">
                                <Zap size={28} />
                            </div>
                            <div>
                                <h2 className="text-3xl font-black tracking-tighter leading-none mb-2">Total <br/> <span className="text-[#ffc107]">Bandwidth</span></h2>
                                <div className="text-6xl font-black text-[#ffc107] tracking-tighter">500<span className="text-2xl ml-1">Mbps</span></div>
                            </div>
                            <div className="pt-6 space-y-4">
                                {isps.map((isp, i) => (
                                    <div key={i} className="flex items-center justify-between border-b border-white/10 pb-3">
                                        <span className="text-xs font-black uppercase tracking-widest text-white/80">{isp.name}</span>
                                        <span className="text-sm font-black text-[#ffc107]">{isp.speed}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    <div className="lg:col-span-2 space-y-8">
                         <div className="flex items-center gap-6">
                            <h2 className="text-3xl md:text-5xl font-black text-[#224292] tracking-tighter">Institutional <br/> <span className="text-[#ffc107]">Computing Hub</span></h2>
                        </div>
                        <p className="text-black text-[15px] font-bold leading-[1.8] tracking-tight text-left">
                            KIOT maintains a robust digital ecosystem with over 898 systems distributed across 24 specialized laboratories. 
                            Our infrastructure is engineered for high-performance computing, academic research, and seamless global connectivity.
                        </p>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                            {[
                                { l: "Total Labs", v: "24" },
                                { l: "Total Systems", v: "898" },
                                { l: "Total Servers", v: "10" },
                                { l: "Total Laptops", v: "75" }
                            ].map((stat, i) => (
                                <div key={i} className="bg-white p-6 rounded-3xl border border-slate-100 shadow-lg text-center">
                                    <div className="text-xs font-black text-slate-500 uppercase tracking-widest mb-1">{stat.l}</div>
                                    <div className="text-2xl font-black text-[#224292]">{stat.v}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* 🖥️ Laboratory Table */}
                <div className="space-y-8">
                    <div className="flex items-center gap-4">
                        <TableIcon className="text-[#ffc107]" />
                        <h3 className="text-2xl font-black text-[#224292] tracking-tighter">Laboratory Directory</h3>
                    </div>
                    
                    <div className="overflow-hidden rounded-xl md:rounded-[2.5rem] border border-slate-200 bg-white shadow-2xl">
                        <div className="overflow-x-auto">
                            <table className="w-full text-left border-collapse min-w-[800px]">
                                <thead className="bg-[#224292]">
                                    <tr>
                                        <th className="px-6 py-5 text-xs font-black text-white uppercase tracking-[2px] w-16">S.No</th>
                                        <th className="px-6 py-5 text-xs font-black text-white uppercase tracking-[2px] w-20">Code</th>
                                        <th className="px-6 py-5 text-xs font-black text-white uppercase tracking-[2px]">Laboratory Name</th>
                                        <th className="px-6 py-5 text-xs font-black text-white uppercase tracking-[2px]">Area</th>
                                        <th className="px-6 py-5 text-xs font-black text-white uppercase tracking-[2px] w-24">Dept</th>
                                        <th className="px-6 py-5 text-xs font-black text-white uppercase tracking-[2px] text-right w-24">Systems</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-slate-100">
                                    {labFacilities.map((lab, i) => (
                                        <tr key={i} className="hover:bg-slate-50 transition-colors">
                                            <td className="px-6 py-4 text-[13px] font-black text-[#224292]">{lab.sno}</td>
                                            <td className="px-6 py-4 text-[13px] font-black text-slate-500 font-mono">{lab.cc}</td>
                                            <td className="px-6 py-4 text-[13px] font-bold text-black tracking-tight">{lab.name}</td>
                                            <td className="px-6 py-4 text-xs font-bold text-slate-700 whitespace-nowrap">{lab.area}</td>
                                            <td className="px-6 py-4">
                                                <span className="px-3 py-1 bg-slate-100 rounded-full text-[11px] font-black text-[#224292]">{lab.dept}</span>
                                            </td>
                                            <td className="px-6 py-4 text-[14px] font-black text-black text-right">{lab.systems}</td>
                                        </tr>
                                    ))}
                                    <tr className="bg-slate-50">
                                        <td colSpan="5" className="px-6 py-5 text-xs font-black text-[#224292] uppercase text-right">Total Computing Power</td>
                                        <td className="px-6 py-5 text-xl font-black text-[#224292] text-right">898</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>

                {/* 🔌 Configurations & Hardware Section */}
                <div className="grid lg:grid-cols-2 gap-12">
                    <div className="space-y-8">
                        <div className="flex items-center gap-4">
                            <Cpu className="text-[#ffc107]" />
                            <h3 className="text-2xl font-black text-[#224292] tracking-tighter">System Configurations</h3>
                        </div>
                        <div className="grid sm:grid-cols-2 gap-4">
                            {configs.map((cfg, i) => (
                                <div key={i} className="p-6 bg-white rounded-3xl border border-slate-100 shadow-lg hover:border-[#ffc107]/40 transition-all group">
                                    <div className="text-xs font-black text-[#ffc107] uppercase tracking-widest mb-1">Config {cfg.id}</div>
                                    <div className="text-sm font-black text-[#224292] tracking-tight group-hover:text-black transition-colors">{cfg.name}</div>
                                    <div className="text-[11px] font-bold text-slate-600 mt-2">{cfg.ram} {cfg.hdd && ` | ${cfg.hdd}`}</div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="space-y-12">
                         {/* Servers Table Style */}
                         <div className="space-y-6">
                            <div className="flex items-center gap-4">
                                <Server className="text-[#ffc107]" />
                                <h3 className="text-2xl font-black text-[#224292] tracking-tighter">Server Infrastructure</h3>
                            </div>
                            <div className="bg-[#224292] rounded-[2rem] p-8 text-white space-y-6 shadow-xl">
                                {[
                                    { q: "4", d: "IBM Server X3200 M3, Intel Xeon E3430 2.40GHz" },
                                    { q: "3", d: "IBM Server X3200 M3 + LG 18.5” TFT Monitor" },
                                    { q: "1", d: "Intel Core I5 – 3450 3.10GHz + 24X DVD Writer" },
                                    { q: "1", d: "IBM Server X3100 M4-2582, 4GB RAM, 1TB HDD" },
                                    { q: "1", d: "Acer Veriton M200 I7 8GB DDR3 2TB HDD" }
                                ].map((srv, i) => (
                                    <div key={i} className="flex gap-6 items-start border-b border-white/10 pb-4 last:border-0">
                                        <div className="text-2xl font-black text-[#ffc107] w-8">{srv.q}</div>
                                        <div className="text-[13px] font-bold text-white leading-relaxed">{srv.d}</div>
                                    </div>
                                ))}
                            </div>
                         </div>

                         {/* Laptops Visual Grid */}
                         <div className="space-y-6">
                            <div className="flex items-center gap-4">
                                <Laptop className="text-[#ffc107]" />
                                <h3 className="text-2xl font-black text-[#224292] tracking-tighter">Mobile Computing (Laptops)</h3>
                            </div>
                            <div className="grid grid-cols-3 gap-3">
                                {[
                                    { b: "TOSHIBA", q: "30" },
                                    { b: "SAMSUNG", q: "25" },
                                    { b: "DELL", q: "6" },
                                    { b: "LENOVO", q: "13" },
                                    { b: "APPLE", q: "1" }
                                ].map((lap, i) => (
                                    <div key={i} className="bg-slate-50 p-4 rounded-2xl border border-slate-100 flex flex-col items-center text-center">
                                        <div className="text-xs font-black text-slate-500 uppercase tracking-widest">{lap.b}</div>
                                        <div className="text-xl font-black text-[#224292]">{lap.q}</div>
                                    </div>
                                ))}
                            </div>
                         </div>
                    </div>
                </div>

                {/* Footer Insight */}
                <div className="bg-[#224292] rounded-[3rem] p-12 text-center relative overflow-hidden shadow-2xl">
                    <div className="absolute inset-0 opacity-10">
                        <Network className="w-96 h-96 -translate-x-1/2 -translate-y-1/2 absolute top-1/2 left-1/2 text-white" />
                    </div>
                    <div className="relative z-10 space-y-6">
                        <h4 className="text-white text-3xl font-black tracking-tighter leading-none">Global Connectivity <span className="text-[#ffc107]">Standards</span></h4>
                        <p className="text-white text-xs font-black uppercase tracking-[4px]">Ensuring Academic Excellence Through Digital Empowerment</p>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default InternetPage
