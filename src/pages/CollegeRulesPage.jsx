import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { 
  ShieldCheck, 
  AlertTriangle, 
  FileCheck, 
  UserCheck, 
  CalendarCheck, 
  Search, 
  BookOpen, 
  AlertCircle,
  Award
} from 'lucide-react'

const CollegeRulesPage = () => {
  const [searchTerm, setSearchTerm] = useState('')

  useEffect(() => {
    document.title = 'College Rules & Regulations | Knowledge Institute of Technology (KIOT)'
  }, [])

  const sections = [
    {
      id: 'conduct',
      title: 'Rules of Conduct & Discipline',
      shortTitle: 'Conduct & Discipline',
      icon: ShieldCheck,
      color: 'from-blue-600 to-indigo-700',
      badgeColor: 'bg-blue-50 text-blue-700 border-blue-200',
      description: 'General conduct guidelines, campus decorum, discipline and behavioral standards for all students.',
      rules: [
        "Students are expected to maintain behavior that upholds the dignity and reputation of the institution, both on and off campus.",
        "College hours are from 9:00 am to 4:40 pm. Students must arrive on time and are not permitted to leave class without faculty approval.",
        "Wearing the college Identity Card is mandatory within the campus and while commuting on the college bus.",
        "Students are expected to maintain strict discipline in classrooms, laboratories, seminar halls and during all college-related events.",
        "The use of mobile phones is strictly prohibited in classrooms, laboratories and during important events like seminars, trainings, etc.",
        "All Saturdays are considered holidays for students, except when training sessions are scheduled.",
        "Students are encouraged to communicate exclusively in English with peers and faculty, as part of an initiative to enhance their English communication skills for personal and professional growth.",
        "Students must bring necessary materials such as calculators, drawing instruments, charts, and observation notebooks for laboratory sessions, in accordance with the academic schedule.",
        "Students are expected to check the department notice board, e-mail, WhatsApp group regularly to stay informed about programs, announcements and notifications.",
        "Loitering in corridors, under trees, sitting on staircases, or roaming outside classrooms during class hours is strictly prohibited.",
        "Students must dispose the waste properly by using the dustbins placed at all places.",
        "Students are advised to switch off fans and lights when leaving classrooms and laboratories to conserve energy.",
        "Classroom furniture must not be damaged, moved, or displaced. Overhead or LCD projectors installed in classrooms should not be tampered with.",
        "Acts such as scribbling or defacing walls, college buses, doors, or damaging furniture are considered serious disciplinary violations and are strictly prohibited.",
        "Students are encouraged to contribute to maintaining the cleanliness, beauty and greenery of the campus environment.",
        "Entertaining or bringing outsiders into the college premises without prior approval from the appropriate authorities is not permitted. If brought, they will be sent out of the campus immediately. Further, the incident might be noted on the student's conduct, which can affect future academic or professional opportunities.",
        "Participation in intercollegiate programs, whether within the city or outside, requires prior approval from the class advisor and Head of the Department.",
        "Students are expected to uphold decency and decorum while participating in any program, both on and off campus.",
        "Students should take responsibility for their personal belongings and valuables.",
        "Students are encouraged to actively contribute to the academic, social and environmental initiatives organized by the college.",
        "Students are prohibited from entering the college premises under the influence of alcohol or any intoxicants, and from possessing such substances.",
        "Students should avoid using disrespectful, provocative, or threatening language when interacting with faculty members or fellow students.",
        "Students are not permitted to visit the hostels of the opposite gender.",
        "Day scholars are not permitted to enter the hostel without prior approval from the warden or deputy warden.",
        "Any unhealthy relationships between students that could impact their academic performance, invade personal boundaries, or harm the institution's reputation will be addressed with strict measures.",
        "Groupism or any unwelcome behavior that disrupt the harmony of the institution is strictly prohibited.",
        "Day scholars using two-wheelers must have a valid driving license, wear helmets and park their vehicles only in the designated parking areas within the campus.",
        "Two wheelers without a silencer or muffler are not allowed inside the campus. It is not advisable and safe to ride three on a single bike.",
        "Day scholars using transport services must board the college bus assigned to them. They are required to wear their ID card while boarding the bus and keep it on until they disembark in the evening. Boarding any bus other than the assigned one is prohibited.",
        "Ragging is strictly prohibited and any form of ragging is banned within the college campus, hostels, and buses. Ragging means, any conduct by words spoken or written or by an act, which has the effect of teasing, treating with rudeness or any undisciplined activities that cause physical or psychological harm to others. Students found guilty of this offense will be expelled from the college and handed over to the police for further action, in accordance with government regulations."
      ]
    },
    {
      id: 'ragging',
      title: 'Prohibition of Ragging',
      shortTitle: 'Anti-Ragging Regulations',
      icon: AlertTriangle,
      color: 'from-rose-600 to-red-700',
      badgeColor: 'bg-rose-50 text-rose-700 border-rose-200',
      description: 'Zero tolerance policy towards ragging. Mandatory compliance under Government of Tamil Nadu Act No. 7.',
      rules: [
        "The college is committed to creating a safe and respectful environment for all students. Ragging is a serious offense and is strictly prohibited on the college campus, including hostels, college buses and any other institution-related areas.",
        "As per Act No. 7 by the Government of Tamil Nadu, ragging is prohibited under law. Students found guilty of ragging will face serious consequences, including:",
        "Immediate expulsion from the college.",
        "A police complaint will be lodged in accordance with Supreme Court directives.",
        "Legal action, including imprisonment and fines."
      ]
    },
    {
      id: 'undertaking',
      title: 'Online Anti-Ragging Undertaking',
      shortTitle: 'Anti-Ragging Pledge',
      icon: FileCheck,
      color: 'from-amber-600 to-[#e0a800]',
      badgeColor: 'bg-amber-50 text-amber-800 border-amber-200',
      description: 'Mandatory online anti-ragging undertaking required for all students every academic year.',
      rules: [
        "All students are required to submit an online Anti-Ragging Undertaking as part of their commitment to maintaining a safe and respectful environment on campus.",
        "The form must be filled out and submitted by every student at the time of admission or at the beginning of each academic year.",
        "Submitting this form is mandatory for all students and failure to do so may result in delays or complications in the registration process.",
        "Students will pledge to refrain from engaging in any form of ragging or harassment, either physical or mental, towards fellow students.",
        "Students will commit to reporting any incidents of ragging to the authorities immediately.",
        "The undertaking ensures students are aware of the legal consequences, including expulsion and legal action.",
        "The form also acknowledges that the student understands the college's anti-ragging policies and will comply with the guidelines set by the institution and the Government of Tamil Nadu."
      ]
    },
    {
      id: 'dresscode',
      title: 'Dress Code & Appearance',
      shortTitle: 'Dress Code',
      icon: UserCheck,
      color: 'from-emerald-600 to-teal-700',
      badgeColor: 'bg-emerald-50 text-emerald-800 border-emerald-200',
      description: 'Formal attire guidelines, lab uniforms, ID card compliance and personal presentation on campus.',
      rules: [
        "All students are expected to comply with the established dress code. This includes wearing a formal attire.",
        "Male students are required to maintain a clean-shaven or neatly trimmed facial appearance; beards of any form are not permitted.",
        "Female students must wear only churidars with a dupatta appropriately pinned on both sides. The girl students shall wear half-sarees, sarees and any decent dresses only on special celebrations like Pongal, New Year, etc.",
        "Students are required to wear their lab uniforms and appropriate footwear for all practical laboratory sessions.",
        "For safety during workshop practicals, students are advised against wearing loose-fitting shirts or pants.",
        "Furthermore, students are required to wear their ID cards visibly at all times while on campus, in classrooms and while utilizing the college bus, to ensure adherence to regulations and maintain discipline."
      ]
    },
    {
      id: 'attendance',
      title: 'Attendance & Leave Policy',
      shortTitle: 'Attendance & Leave',
      icon: CalendarCheck,
      color: 'from-sky-600 to-blue-700',
      badgeColor: 'bg-sky-50 text-sky-800 border-sky-200',
      description: 'Minimum 75% attendance requirement, medical certificate submission and prior leave approval procedures.',
      rules: [
        "Students are expected to maintain regular attendance. An attendance of 75% is required to appear for the end-of-semester examinations.",
        "In case of illness, a medical certificate from a registered medical practitioner must be submitted.",
        "Students are not allowed to miss classes without prior approval from the concerned class advisor. Leave should be requested in advance from the Class Advisor or Head of the Department.",
        "In cases of illness or unexpected absence, parents need to inform the class advisor about their ward's absence."
      ]
    },
    {
      id: 'tests',
      title: 'Tests & Internal Evaluations',
      shortTitle: 'Tests & Evaluation',
      icon: Award,
      color: 'from-purple-600 to-indigo-700',
      badgeColor: 'bg-purple-50 text-purple-800 border-purple-200',
      description: 'Internal assessment attendance, Regulation 2023 non-test assessments (NTA), and academic integrity standards.',
      rules: [
        "Students are expected to attend all internal assessments and maintain satisfactory academic progress. Regular attendance at all internal assessments is required and students must demonstrate good academic progress.",
        "Under Regulation 2023, the assessment strategy has expanded beyond conventional examinations to include non-test assessments (NTA) for comprehensive evaluations.",
        "Eligibility to appear for the End Semester Examinations in each semester necessitates consistent participation in internal assessments and a satisfactory level of academic achievement.",
        "Any instance of academic dishonesty during internal assessments or the End Semester Examinations will be monitored strictly and taken immediate action.",
        "The Head of the Institution presides over the parent-teacher meetings periodically to communicate the institution's advancements. During these meetings, class advisors will inform the parents about the academic standing of their wards."
      ]
    }
  ]

  const filteredSections = sections.map(sec => {
    if (!searchTerm.trim()) return sec
    const matchingRules = sec.rules.filter(rule => 
      rule.toLowerCase().includes(searchTerm.toLowerCase())
    )
    if (matchingRules.length === 0 && !sec.title.toLowerCase().includes(searchTerm.toLowerCase())) return null
    return { ...sec, rules: matchingRules.length > 0 ? matchingRules : sec.rules }
  }).filter(Boolean)

  return (
    <div className="min-h-screen bg-[#F8FAFC] font-graphik text-slate-800 pb-24 selection:bg-[#ffc107]/20">
      
      {/* Hero Header Section */}
      <div className="relative bg-[#224292] text-white pt-6 pb-9 px-6 md:px-12 rounded-b-3xl overflow-hidden shadow-lg">
        {/* Background Overlay Elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#ffc107]/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-white/5 rounded-full blur-2xl pointer-events-none" />
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none"
             style={{ backgroundImage: 'radial-gradient(white 1px, transparent 1px)', backgroundSize: '24px 24px' }} />

        <div className="relative z-10 max-w-6xl mx-auto text-center space-y-2.5">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/10 border border-white/20 text-[#ffc107] text-[11px] font-bold tracking-widest uppercase backdrop-blur-sm">
            <BookOpen size={13} /> Academic Regulations
          </div>
          
          <h1 className="text-2xl md:text-4xl font-extrabold tracking-tight leading-tight">
            College <span className="text-[#ffc107]">Rules & Regulations</span>
          </h1>

          <p className="text-blue-100/90 text-xs md:text-sm max-w-3xl mx-auto font-normal leading-relaxed">
            General Academic and Conduct Regulations for Students at Knowledge Institute of Technology. Ensuring academic excellence, personal safety, mutual respect, and campus discipline.
          </p>

          {/* Quick Search Bar */}
          <div className="pt-1.5 max-w-2xl mx-auto">
            <div className="relative flex items-center">
              <Search className="absolute left-4 text-slate-400" size={16} />
              <input
                type="text"
                placeholder="Search rules, attendance, dress code, anti-ragging policies..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-11 pr-4 py-2.5 bg-white text-slate-900 rounded-xl shadow-lg focus:outline-none focus:ring-2 focus:ring-[#ffc107] text-xs md:text-sm font-medium transition-all"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Main Content Sections */}
      <div className="max-w-6xl mx-auto px-6 mt-6 space-y-10">
        {filteredSections.length === 0 ? (
          <div className="bg-white rounded-2xl p-12 text-center border border-slate-200 shadow-sm max-w-lg mx-auto">
            <AlertCircle size={40} className="text-amber-500 mx-auto mb-3" />
            <h3 className="text-lg font-bold text-slate-800">No matching regulations found</h3>
            <p className="text-sm text-slate-500 mt-1">Try searching with a different keyword.</p>
            <button 
              onClick={() => setSearchTerm('')}
              className="mt-4 px-4 py-2 bg-[#224292] text-white rounded-xl text-xs font-bold hover:bg-[#1a3478]"
            >
              Reset Search
            </button>
          </div>
        ) : (
          filteredSections.map((sec) => {
            const Icon = sec.icon
            return (
              <motion.div
                key={sec.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
                className="bg-white rounded-2xl border border-slate-200/90 shadow-sm overflow-hidden"
              >
                {/* Section Header */}
                <div className={`p-6 border-b border-slate-100 flex flex-col md:flex-row md:items-center justify-between gap-4 bg-gradient-to-r ${sec.color} text-white`}>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center shrink-0">
                      <Icon size={24} className="text-[#ffc107]" />
                    </div>
                    <div>
                      <h2 className="text-xl md:text-2xl font-bold tracking-tight">{sec.title}</h2>
                      <p className="text-xs md:text-sm text-white/80 font-normal mt-0.5">{sec.description}</p>
                    </div>
                  </div>
                </div>

                {/* Section Rules List */}
                <div className="p-6 md:p-8 space-y-3.5 bg-white">
                  {sec.rules.map((rule, rIdx) => {
                    const isWarning = rule.toLowerCase().includes('strictly prohibited') || 
                                      rule.toLowerCase().includes('expelled') || 
                                      rule.toLowerCase().includes('serious consequences') ||
                                      rule.toLowerCase().includes('banned')

                    const isHighlight = rule.includes('Ragging') || 
                                        rule.startsWith('As per Act No. 7') || 
                                        rule.includes('Immediate expulsion')

                    return (
                      <div
                        key={rIdx}
                        className={`p-4 rounded-xl transition-all border ${
                          isHighlight 
                            ? 'bg-rose-50/80 border-rose-200 text-rose-950 font-medium' 
                            : isWarning 
                              ? 'bg-amber-50/40 border-amber-200/80 text-slate-900' 
                              : 'bg-slate-50/50 border-slate-100 text-slate-800 hover:bg-slate-50'
                        }`}
                      >
                        <div className="flex items-start gap-3">
                          <div className={`w-6 h-6 rounded-full flex items-center justify-center shrink-0 mt-0.5 text-xs font-bold ${
                            isHighlight ? 'bg-rose-600 text-white' : 'bg-[#224292]/10 text-[#224292]'
                          }`}>
                            {rIdx + 1}
                          </div>
                          <p className="text-xs md:text-[13.5px] leading-relaxed font-graphik text-justify">
                            {rule}
                          </p>
                        </div>
                      </div>
                    )
                  })}
                </div>
              </motion.div>
            )
          })
        )}
      </div>

      {/* Important Autonomous Regulations Note Banner */}
      <div className="max-w-6xl mx-auto px-6 mt-8">
        <div className="bg-amber-50 border-l-4 border-amber-500 rounded-2xl p-5 md:p-6 shadow-sm border border-amber-200/80 flex items-start gap-4">
          <AlertCircle className="text-amber-600 shrink-0 mt-0.5" size={24} />
          <div>
            <h4 className="text-xs font-bold text-amber-900 uppercase tracking-widest mb-1 font-graphik">
              Important Note
            </h4>
            <p className="text-xs md:text-sm text-amber-950 font-medium leading-relaxed font-graphik">
              For the latest guidelines, students are required to refer to the applicable Autonomous Regulations (B.E./B.Tech., M.E./M.Tech., MBA & MCA) of the institution.
            </p>
          </div>
        </div>
      </div>

    </div>
  )
}

export default CollegeRulesPage
