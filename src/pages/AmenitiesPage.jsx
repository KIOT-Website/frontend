import React from 'react'
import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'
import { 
  ArrowLeft, 
  ShieldCheck, 
  PenTool, 
  Dumbbell, 
  CreditCard, 
  Coffee, 
  Milk,
  Zap
} from 'lucide-react'

const AMENITIES = [
    {
        t: "Security / CCTV",
        d: "Video surveillance is an invaluable tool, allowing students to wander under the safe watch of campus security cameras. Footage from cameras throughout the campus can be viewed online from any computer with an internet connection and access to the network.",
        i: ShieldCheck,
        c: "#224292"
    },
    {
        t: "Stationery / Reprography",
        d: "Stationery consistently maintains its product quality standards that include eye catching & educative cover designs and other students’ supplies at affordable cost. As a part of it, photocopier facility is available to the students on all working days.",
        i: PenTool,
        c: "#ffc107"
    },
    {
        t: "Gym",
        d: "A Healthy Body bears a Healthy Mind. Keeping in mind the health and fitness of students and staff, Knowledge Institute of Technology provides a state-of-the-art gymnasium, fully-equipped with the latest equipment within the campus. One can avail this facility either in the morning or in the evening as per the convenience.",
        i: Dumbbell,
        c: "#224292"
    },
    {
        t: "ATM",
        d: "The college has 24*7 Corporation Bank ATM facility inside the college premises. All the students as well as the staff members of the institute have the privilege to it.",
        i: CreditCard,
        c: "#ffc107"
    },
    {
        t: "Cafeteria",
        d: "Spacious, airy & trendy cafeteria offers students to break free from their arduous schedules and enjoy appetizing food in an extremely pleasant ambience. The cafeteria is open on all working days. The homely atmosphere and aroma of delicious food permeates the air as they eat, drink and chat. It remains a focal place of the students for rest and refreshment. A variety of hygienic food and savories are provided in the cafeteria. These serve wholesome cuisine for the health consciousness and fast food for those intended in quick bite between classes.",
        i: Coffee,
        c: "#224292"
    },
    {
        t: "Fresh Juice Corner",
        d: "Students and Faculty members enjoy relishing juice in the juice corner in the college premises. Palatable and delectable juices of different flavors are available on all working days.",
        i: Milk,
        c: "#ffc107"
    }
]

const AmenitiesPage = () => {
    const navigate = useNavigate();

    return (
        <div className="min-h-screen bg-[#FCFDFD] font-graphik pb-24">
            {/* 🔷 Shared Hero Section */}
            <div className="relative h-[35vh] flex items-center justify-center overflow-hidden bg-[#224292]">
                <div className="absolute inset-0">
                    <img 
                        src="https://images.unsplash.com/photo-1541339907198-e08756eaa539?q=80&w=1920&auto=format&fit=crop" 
                        className="w-full h-full object-cover opacity-40" 
                        alt="Amenities"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-[#224292]/80 via-[#224292]/60 to-transparent" />
                </div>
                
                <div className="relative z-10 text-center px-6">
                    <motion.div
                        initial={{ y: 30, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.8 }}
                    >

                        <h1 className="text-3xl md:text-5xl font-black text-white tracking-tight leading-none mb-3">
                            Campus <span className="text-[#ffc107]">Amenities</span>
                        </h1>
                        <p className="text-white/60 font-medium text-[12px] md:text-sm max-w-2xl mx-auto tracking-widest leading-loose">
                            Life Services & Essential Support Infrastructure
                        </p>
                    </motion.div>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-6 py-16 relative z-20">
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {AMENITIES.map((service, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className="group p-8 bg-white rounded-[2rem] border border-slate-100 shadow-xl shadow-slate-200/20 hover:border-[#224292]/20 transition-all flex flex-col"
                        >
                            <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-8 shadow-inner transition-transform group-hover:scale-110 duration-500`} style={{ backgroundColor: `${service.c}10`, color: service.c }}>
                                <service.i size={28} />
                            </div>
                            <div className="space-y-4 flex-1">
                                <h3 className="text-xl font-black text-[#224292] tracking-tight">{service.t}</h3>
                                <p className="text-sm font-black text-black leading-relaxed text-justify">
                                    {service.d}
                                </p>
                            </div>
                            <div className="mt-8 pt-6 border-t border-slate-50 flex items-center justify-between">
                                <div className="flex items-center gap-2">
                                    <div className="w-1.5 h-1.5 rounded-full bg-[#ffc107]" />
                                    <span className="text-[11px] font-black text-slate-400 tracking-widest">Campus Service</span>
                                </div>
                                <Zap size={14} className="text-[#ffc107] opacity-0 group-hover:opacity-100 transition-opacity" />
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default AmenitiesPage
