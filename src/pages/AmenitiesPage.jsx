import React from 'react'
import { motion } from 'framer-motion'
import { 
  ShieldCheck, 
  Printer, 
  Dumbbell, 
  Coffee, 
  Bus, 
  Sun, 
  HeartPulse, 
  Home, 
  Users, 
  Sparkles, 
  Cpu, 
  Share2,
  CheckCircle2
} from 'lucide-react'

const AMENITIES = [
  {
    title: "Food Court / Fresh Juice Corner",
    category: "Dining & Refreshment",
    description: "A food court and a cafeteria, covering a 10,000 sq.ft. area within the college premises, provide hygienic and appetizing food items at nominal prices to students, faculty members, and visitors. Both the cafeteria and food court are open on all working days, providing tasty food and variety meals.\n\nMoreover, a fresh juice shop at the campus offers a variety of healthy and refreshing beverages. These drinks are crafted mainly from various fruits, ensuring a wide array of flavours and nutritional benefits. It serves as an excellent source for natural, wholesome drinks, promoting wellness.",
    icon: Coffee,
    badgeColor: "bg-amber-50 text-amber-700 border-amber-200",
    themeColor: "#224292"
  },
  {
    title: "Transportation Services",
    category: "Campus Mobility",
    description: "KIOT offers a convenient and safe transportation service with its fleet of new buses, covering a 60 km radius in Salem, Namakkal, Dharmapuri, and Erode. The drivers possess over 10 years of extensive experience and prioritize the safety and well-being of commuters. This bus facility is also available for candidates visiting KIOT for off-campus recruitment and is extended for evening training programs, NSS camps, and field trips.",
    icon: Bus,
    badgeColor: "bg-blue-50 text-blue-700 border-blue-200",
    themeColor: "#ffc107"
  },
  {
    title: "Solar Power Plant",
    category: "Green Initiative",
    description: "A solar power plant at KIOT campus utilizes sunlight to generate clean electricity on a large scale. It converts solar energy, either directly using photovoltaic (PV) panels or indirectly through concentrated solar power (CSP) to heat fluid for turbines. This plant significantly reduces reliance on fossil fuels, cutting greenhouse gas emissions and combating climate change. The plant provides a sustainable and renewable energy source for the entire campus, ensuring a stable power supply, lower electricity bills, and a reduced carbon footprint. This demonstrates KIOT's strong commitment to sustainability and sets an important eco-friendly example. Ultimately, this contributes to both energy independence and environmental protection.",
    icon: Sun,
    badgeColor: "bg-emerald-50 text-emerald-700 border-emerald-200",
    themeColor: "#224292"
  },
  {
    title: "Wellness & Comprehensive Care",
    category: "Health & Medical",
    description: "Recognizing the importance of holistic well-being, the institution offers comprehensive physical and mental care on campus. A medical center within the premises caters to the basic medical needs of students, faculty, and staff. A visiting doctor provides consultations twice weekly, and the center is stocked with necessary medications for general health concerns. Furthermore, a round-the-clock (24/7) ambulance service is available on campus for emergency medical situations.",
    icon: HeartPulse,
    badgeColor: "bg-rose-50 text-rose-700 border-rose-200",
    themeColor: "#ffc107"
  },
  {
    title: "Insurance for Students & Staff",
    category: "Financial Protection",
    description: "KIOT has partnered with a leading insurance company to offer benefits to both students and employees. The management covers the premium for a group health insurance policy, which plays a crucial role in safeguarding the well-being of students and employees by providing financial support in the event of an accident. Additionally, staff members are covered under the Employees’ State Insurance (ESI) scheme, which provides protection against specific health-related issues, such as temporary or permanent disability and illness, extending coverage to both the insured individual and their family members.",
    icon: ShieldCheck,
    badgeColor: "bg-indigo-50 text-indigo-700 border-indigo-200",
    themeColor: "#224292"
  },
  {
    title: "Printing Resource Centre",
    category: "Academic Support",
    description: "For the convenience of students and faculty, a reprographic centre located on campus provides a wide range of stationery items. Additionally, it offers essential services such as binding, scanning, colour printing, and photocopying.",
    icon: Printer,
    badgeColor: "bg-[#ffc107]/10 text-[#224292] border-[#ffc107]/30",
    themeColor: "#ffc107"
  },
  {
    title: "Hostel & Mess Facility",
    category: "Residential Living",
    description: "The institution ensures a cozy and safe living experience for its students with separate hostels for men and women. These hostels are designed to feel like home and provide essential amenities such as separate messes with modern cooking facilities, solar hot water, computer labs with Wi-Fi access, and conducive reading rooms. Faculty members also have the option to stay in the hostels. The Chief Warden regularly meets to review and understand student needs, driving continuous improvements to the hostel services.",
    icon: Home,
    badgeColor: "bg-purple-50 text-purple-700 border-purple-200",
    themeColor: "#224292"
  },
  {
    title: "Seminar Halls",
    category: "Events & Learning",
    description: "The college is equipped with multiple well-furnished seminar halls designed to host seminars, conferences, workshops, and various other events. These facilities are also made available to the public and government for organizing developmental programs.",
    icon: Users,
    badgeColor: "bg-teal-50 text-teal-700 border-teal-200",
    themeColor: "#ffc107"
  },
  {
    title: "Sports & Fitness Center",
    category: "Athletics & Gym",
    description: "The campus provides a supportive environment for both indoor and outdoor sports with its comprehensive facilities. The institution emphasizes physical well-being and sportsmanship through diverse athletic opportunities. The Department of Physical Education actively promotes student involvement by organizing separate intramural tournaments for men and women to identify and develop their sporting talents. The department also conducts selection trials to create strong university teams that compete in inter-university and other tournaments. Students' achievements at district, state, and national levels underscore the department's effectiveness. The campus also hosts various inter-university, state, and national-level tournaments every year. Additionally, a fully equipped gymnasium is available on campus for both men and women, featuring treadmills, strength training equipment, and other fitness apparatus.",
    icon: Dumbbell,
    badgeColor: "bg-[#224292]/10 text-[#224292] border-[#224292]/20",
    themeColor: "#224292"
  },
  {
    title: "Yoga and Meditation",
    category: "Mindfulness & Wellness",
    description: "To promote inner peace and well-being, the institution features a distinct Yoga and Meditation Club with a calming environment for students and faculty members. Through its partnership with the World Community Service Centre (Manavalakai Mandram), the club conducts frequent yoga programs and in-depth practice sessions. Regular weekly group meditation sessions are available to students and faculty members. Furthermore, the club regularly organizes stress management sessions for the entire campus community, including students, faculty, and staff members.",
    icon: Sparkles,
    badgeColor: "bg-orange-50 text-orange-700 border-orange-200",
    themeColor: "#ffc107"
  },
  {
    title: "ERP & COXCO Software",
    category: "Digital Campus",
    description: "Enterprise Resource Planning (ERP) is a comprehensive campus management software designed to provide real-time online access to academic information related to the institution, faculty, and students. As an autonomous institution, KIOT utilizes COXCO, a specialized web-based application tailored for the Office of the Controller of Examinations. This platform enables users to manage a wide range of academic data, including program structures, syllabus details, student profiles with photographs, question banks, hourly attendance, internal assessment marks, faculty information, and other academic records.",
    icon: Cpu,
    badgeColor: "bg-[#224292]/10 text-[#224292] border-[#224292]/20",
    themeColor: "#224292"
  },
  {
    title: "Social Networking",
    category: "Digital Connect",
    description: "College events and announcements are regularly updated across the official website, YouTube channel, Facebook page, and other social media platforms. Highlights and snapshots of all events are also featured on the college website.",
    icon: Share2,
    badgeColor: "bg-sky-50 text-sky-700 border-sky-200",
    themeColor: "#ffc107"
  }
]

const AmenitiesPage = () => {
  return (
    <div className="min-h-screen bg-[#F8FAFC] font-graphik pb-24">
      {/* 🔷 Hero Section */}
      <section className="relative overflow-hidden bg-[#224292] py-16 md:py-24">
        {/* Subtle Background Pattern */}
        <div className="absolute inset-0 z-0 pointer-events-none opacity-20">
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#ffc107] rounded-full filter blur-[120px]" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-white rounded-full filter blur-[140px]" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/20 text-[#ffc107] font-bold text-xs uppercase tracking-widest mb-4">
              <CheckCircle2 size={14} /> World-Class Infrastructure
            </div>
            <h1 className="text-3xl md:text-5xl font-black text-white tracking-tight leading-tight mb-4">
              Campus <span className="text-[#ffc107]">Amenities & Facilities</span>
            </h1>
            <p className="text-white/80 font-medium text-sm md:text-base max-w-2xl mx-auto leading-relaxed">
              Comprehensive student support, wellness centers, modern dining, green initiatives, and digital campus infrastructure at KIOT.
            </p>
          </motion.div>
        </div>
      </section>

      {/* 🔷 Grid Cards Container */}
      <div className="max-w-7xl mx-auto px-6 py-16 relative z-20">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {AMENITIES.map((service, i) => {
            const IconComponent = service.icon
            return (
              <motion.div
                key={service.title + i}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
                className="group relative bg-white rounded-3xl p-7 md:p-8 border border-slate-200/80 shadow-lg shadow-blue-900/5 hover:shadow-2xl hover:border-[#ffc107]/60 transition-all duration-300 flex flex-col justify-between"
              >
                {/* Top Accent Line */}
                <div className="absolute top-0 left-8 right-8 h-1 bg-gradient-to-r from-[#224292] to-[#ffc107] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                <div>
                  {/* Category Badge & Icon */}
                  <div className="flex items-center justify-between gap-4 mb-6">
                    <div 
                      className="w-14 h-14 rounded-2xl flex items-center justify-center shadow-inner group-hover:scale-110 transition-transform duration-300 shrink-0" 
                      style={{ backgroundColor: `${service.themeColor}12`, color: service.themeColor }}
                    >
                      <IconComponent size={28} />
                    </div>
                    <span className={`px-3 py-1 text-[11px] font-extrabold uppercase tracking-wider rounded-full border ${service.badgeColor}`}>
                      {service.category}
                    </span>
                  </div>

                  {/* Title & Description */}
                  <h3 className="text-xl font-bold font-graphik text-[#224292] tracking-tight mb-3 group-hover:text-[#ffc107] transition-colors">
                    {service.title}
                  </h3>

                  <div className="space-y-3">
                    {service.description.split('\n\n').map((paragraph, pIdx) => (
                      <p key={pIdx} className="text-slate-600 font-medium font-graphik text-[13.5px] md:text-[14px] leading-relaxed text-justify">
                        {paragraph}
                      </p>
                    ))}
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default AmenitiesPage
