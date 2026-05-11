import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowRight, BookOpen, Clock, Users, ShieldCheck, Mail, MapPin, Phone, Sparkle } from 'lucide-react'

import structureImg from '../assets/main/Strcutre .webp'
import governanceImg from '../assets/main/governance_meeting.webp'

const GuidelinesPage = () => {
  const [activeSection, setActiveSection] = useState('administrators')

  const sections = [
    { id: 'administrators', label: 'Administrators' },
    { id: 'faculty', label: 'Faculty & Staff' },
    { id: 'leave', label: 'Leave Provisions' },
    { id: 'vacation', label: 'Vacation' },
    { id: 'onduty', label: 'On-Duty' },
    { id: 'students', label: 'Students' }
  ]

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200
      sections.forEach(section => {
        const element = document.getElementById(section.id)
        if (element) {
          const { offsetTop, offsetHeight } = element
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section.id)
          }
        }
      })
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToContent = (id) => {
    const element = document.getElementById(id)
    if (element) {
      const headerOffset = 120
      const elementPosition = element.getBoundingClientRect().top
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      })
    }
  }

  return (
    <div className="bg-[#FCFDFD] min-h-screen font-graphik selection:bg-[#ffc107]/20">
      
      {/* 🔷 1. TOP SECTION (IMAGE + INTRO) */}
      <section className="relative pt-12 lg:pt-20 pb-6 border-b border-slate-100 font-graphik">
        <div className="w-full px-4 lg:px-12 font-graphik">
          <div className="grid lg:grid-cols-2 gap-8 items-center font-graphik">
            <motion.div 
               initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              className="space-y-6 font-graphik"
            >
              {/* Badge Removed per request */}
              
              <h1 className="text-4xl md:text-5xl lg:text-[4rem] font-graphik font-bold text-[#224292] mb-4 tracking-tighter leading-tight">
                Governance & <span className="text-[#ffc107]">Policies</span>
              </h1>
              <div className="space-y-4 max-w-2xl font-graphik">
                <p className="text-[#333333] text-base leading-[1.8] font-graphik font-medium text-justify">
                  The Institution has established a code of conduct for students, staff, faculty, and administrators to maintain discipline and integrity. These guidelines promote professionalism and responsible behavior across the campus. They ensure a respectful, safe, and productive academic environment for everyone.
                </p>
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="relative aspect-video rounded-[3rem] overflow-hidden bg-slate-50 border border-slate-100 shadow-2xl shadow-[#224292]/10"
            >
               <img 
                 src={governanceImg} 
                 alt="Institutional Governance Meeting" 
                 className="w-full h-full object-cover"
               />
               <div className="absolute inset-0 bg-gradient-to-t from-[#224292]/20 to-transparent" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* 🔷 2. MAIN SECTION (FULL WIDTH CONTENT) */}
      <section className="w-full px-4 lg:px-12 pt-4 lg:pt-10 pb-10">
        <div className="max-w-5xl mx-auto">
          <main className="space-y-8 pb-8 font-graphik">
          
          {/* Section: Administrators */}
          <section id="administrators" className="scroll-mt-32">
            <h2 className="text-2xl lg:text-4xl font-bold text-[#224292] tracking-tight mb-8 font-graphik">
              Roles and Responsibilities of <span className="text-[#ffc107]">Administrators</span>
            </h2>
            
            <div className="space-y-8 font-graphik">
              {[

                { title: "Vice Principal", content: "Works in consultation with the principal and the management in administering the academic and administrative activities." },
                { title: "Directors - Placement and Training (PAT)", content: "Planning and execution of various training programs for the students, liaising with companies, arranging various industry institute interaction programs, industry linked labs/COEs, arranging ON/OFF campus placements for the students." },
                { title: "Head of the Department (HOD)", content: "Takes care of academic and administrative responsibilities of the department under his preview. HoD has to take care of establishing and maintaining laboratories, teaching, research, consultancy and extension activities, faculty and supporting staff development as per the direction of the principal and management." },
                { title: "Examination Management System (EMS)", content: "Ensures smooth conduct of Internal Assessment Test (IAT)s, Model examinations, university theory and practical examinations and related activities." },
                { title: "Library", content: "Purchase, maintenance and monitoring the issue and return of books, journals, e-journals, CDs and other services to the students and faculty." },
                { title: "Equipment and Facilities Maintenance Department (EFMD)", content: "The department takes care of maintenance of all equipment and facilities in the college except those specific to the department laboratories." },
                { title: "Transport Manager", content: "Overall in charge for operation and maintenance of college buses, cars, and related activities." },
                { title: "Hostel Residential Warden", content: "Overall in charge for hostel facilities, hostel mess, students discipline in the hostel, and medical needs of hostel students during their stay in the hostel." }
              ].map((role, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="space-y-4"
                >
                  <h3 className="text-xl font-bold text-[#224292] font-graphik">{role.title}</h3>
                  <p className="text-[#333333] font-graphik font-medium leading-[1.8] text-justify">{role.content}</p>
                  <div className="w-12 h-0.5 bg-slate-100 rounded-full" />
                </motion.div>
              ))}
            </div>
          </section>

          {/* Section: Faculty & Staff */}
          <section id="faculty" className="scroll-mt-32 pt-8 border-t border-slate-100">
            <h2 className="text-2xl lg:text-4xl font-bold text-[#224292] tracking-tight mb-6 font-graphik">
              Code of Conduct for <span className="text-[#ffc107]">Faculty and Staff</span>
            </h2>
            
            <div className="space-y-4">
              {[
                "College working hours is 9.00 AM to 4.50 PM for faculty, staff and students.",
                "Faculty should sign in the attendance register twice a day (8.45 AM – 09.00 AM in the morning and 4.45 PM – 5.15 PM in the evening) at the Department Office.",
                "All staff members should be available in the Institute during working hours and follow the dress code prescribed by the Principal / Management.",
                "Faculty should handle the theory, laboratory and other classes for the full duration.",
                "University Examination work is mandatory for faculty as per Anna University Regulations.",
                "The faculty in the college will be relieved from his duties on his request either by submitting three months’ notice or on payment of three months’ salary under unavoidable circumstances subject to the decision of the management. The relieving will be considered only at the end of the academic year.",
                "The promotion to higher cadre depends on Vacancy opening for the position, Faculty Performance Appraisal Score, Teaching, Research and Satisfactory performance in academic and other related activities in the college.",
                "The faculty / staff should abide by the rules and regulations of the institution framed from time to time for the effective functioning.",
                "The faculty and staff members shall not engage themselves either directly or indirectly in conduct of any business or trade, part time job in other concerns, etc.",
                "The faculty and staff members shall not involve themselves in activities not related to their allotted work, during working hours.",
                "The faculty members shall not engage in private tuition. In exceptional cases, the prior permission of the Principal should be obtained.",
                "The faculty and Staff members are encouraged to take up consultancy projects, however, with the knowledge of the management.",
                "The faculty and staff members should not accept valuable gifts in any form from the students / parents / companies having business transactions with the college.",
                "The faculty and staff members shall not interfere in any matter not connected to their job requirements.",
                "The details of student feedback and performance appraisal reports given by the superiors shall be treated as confidential.",
                "All correspondence to the Management should be routed through proper channel (HOD, Principal and to the Management).",
                "Faculty members should take active participation in co-curricular and extra-curricular activities.",
                "Faculty should take active participation in conducting value added courses to the students to enhance their employability skills.",
                "All the faculty should continuously update their knowledge by attending Seminars /Workshops etc., and by using library.",
                "Each teaching staff with teaching experience of more than 3 years is expected to publish at least one technical paper per year. The technical paper may be an outcome of research / student project work.",
                "Faculty promotions are considered during September each year considering his educational qualifications, experience, score in the Faculty Performance Appraisal and AICTE and University guidelines."
              ].map((rule, idx) => (
                <div key={idx} className="flex gap-4 group">
                   <Sparkle size={14} className="text-[#ffc107] shrink-0 mt-1.5 fill-[#ffc107]/20" />
                   <p className="text-[#333333] font-graphik font-medium leading-[1.8] text-justify">{rule}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Section: Leave Provisions */}
          <section id="leave" className="scroll-mt-32 pt-8 border-t border-slate-100">
            <h2 className="text-2xl lg:text-4xl font-bold text-[#224292] tracking-tight mb-6 font-graphik">
              Leave <span className="text-[#ffc107]">Provisions</span>
            </h2>
            
            <div className="space-y-4">
              {[
                "Central and State Government holidays will be holidays for the institution, in general.",
                "Faculty/Staff is eligible for 12 days Casual Leave (CL) per academic year and 08 days Medical Leave per academic year. Medical Leave can be taken as Casual Leave as well.",
                "Faculty/Staff should take leave with prior permission from HOD and Principal after proper alternate arrangement. Leave can also be informed over phone only in case of emergency.",
                "Lady faculty/staff can avail 6 months maternity leave",
                "Faculty/Staff can avail one hour permission twice a month. However, such a facility should be used only for essential needs.",
                "Leaves cannot be accumulated and carried forward to the next academic year, in general."
              ].map((rule, idx) => (
                <div key={idx} className="flex gap-4 group">
                   <Sparkle size={14} className="text-[#ffc107] shrink-0 mt-1.5 fill-[#ffc107]/20" />
                   <p className="text-[#333333] font-graphik font-medium leading-[1.8] text-justify">{rule}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Section: Vacation */}
          <section id="vacation" className="scroll-mt-32 pt-8 border-t border-slate-100">
            <h2 className="text-2xl lg:text-4xl font-bold text-[#224292] tracking-tight mb-6 font-graphik">
              Vacation <span className="text-[#ffc107]">Policy</span>
            </h2>
            
            <div className="space-y-4">
              {[
                "Teaching staff are normally eligible for three weeks’ vacation per academic year, one week in winter and two weeks in summer, or three weeks in the summer.",
                "Non-teaching staff are normally eligible for 10 days’ vacation per year.",
                "The Principal has the right to prevent any staff member from availing a portion or the whole of vacation if the services of the particular individual are considered essential.",
                "Only staff members who have completed 10 months of service, as on the date of commencement of the vacation period, are entitled for full vacation. Proportionate days will be granted if the service is 6 – 10 months.",
                "No leave can be combined with the vacation. The staff member should be present on the last working day before the vacation and also on the first working day after the vacation to become eligible to draw the vacation salary.",
                "Personal On-Duties / leave will not be adjusted in the vacation in general. However Principal may permit based on genuine needs (like serious health issues, marriage)."
              ].map((rule, idx) => (
                <div key={idx} className="flex gap-4 group">
                   <Sparkle size={14} className="text-[#ffc107] shrink-0 mt-1.5 fill-[#ffc107]/20" />
                   <p className="text-[#333333] font-graphik font-medium leading-[1.8] text-justify">{rule}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Section: On-Duty */}
          <section id="onduty" className="scroll-mt-32 pt-8 border-t border-slate-100">
            <h2 className="text-2xl lg:text-4xl font-bold text-[#224292] tracking-tight mb-6 font-graphik">
              On–Duty <span className="text-[#ffc107]">Provisions</span>
            </h2>
            
            <div className="space-y-4">
              {[
                "On-Duty (OD) permission can be availed for official work (assigned by the college), Career Development Programs (FDP, Conferences, Workshops, Research Work, Course work examinations, STTP and others), and Anna University Examination Duty (AUR, Invigilation, Practical Examinations and Valuations).",
                "Prior permission from the HOD and Principal with proper alternate arrangement is essential.",
                "A faculty can avail OD upto 10 working days per semester for university examinations related works. Based on special requests from University, Principal can permit the faculty additionally.",
                "In general, faculty shall not be eligible for OD for the examination related works of other universities"
              ].map((rule, idx) => (
                <div key={idx} className="flex gap-4 group">
                   <Sparkle size={14} className="text-[#ffc107] shrink-0 mt-1.5 fill-[#ffc107]/20" />
                   <p className="text-[#333333] font-graphik font-medium leading-[1.8] text-justify">{rule}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Section: Students */}
          <section id="students" className="scroll-mt-32 pt-8 border-t border-slate-100">
            <h2 className="text-2xl lg:text-4xl font-bold text-[#224292] tracking-tight mb-6 font-graphik">
              Code of Conduct for <span className="text-[#ffc107]">Students</span>
            </h2>
            
            <div className="space-y-4">
              {[
                "Usage of cell phones inside the classrooms is not permitted.",
                "Students shall not enter the college premises in intoxicated state and should not possess such materials.",
                "No student is allowed to entertain outsiders inside the premises of the college without prior permission from the college authorities.",
                "Students should use dustbins for throwing garbage and any unwanted material.",
                "Student should keep the class rooms and college premises absolutely neat and clean. Disfiguring and scribbling on the walls, college buses and doors or breaking the furniture is a violation of discipline and will be severely punished.",
                "During class hours, students are not permitted to visit office, Principal, HoD or Class Advisors.",
                "No student should be seen outside the class room or out of the college during class hours.",
                "Students should acquaint themselves in time with the notifications put up on the Notice Board.",
                "Students should be punctual to classes and attend their work with devotion.",
                "During laboratory classes, students should wear their lab uniforms properly.",
                "Girls should wear chudidhars with dupatta pinned on either sides of the shoulder.",
                "Boys should wear only formal shirts and tuck-in their shirts when they are inside the campus. Wearing jeans, T-shirts and shirts with tattoos and any other form of symbols are strictly prohibited inside the campus.",
                "Students should maintain absolute discipline inside the class rooms as well as the college premises.",
                "Students should wear their I.D. Cards in the campus and in the college bus compulsorily.",
                "Students should converse only in English inside the campus.",
                "Students should reach the college on time.",
                "Special emphasis is put on maintaining the discipline and good conduct in the institution and students should abide by it.",
                "Students are subject to rules of conduct and behavior framed by the authorities of the College.",
                "If a student’s behavior goes wrong, the parent of the student concerned should come and meet the Class Advisor and the Head of the Department.",
                "Boys and girls interaction on personal grounds is strictly not permitted.",
                "There should not be exchange of greetings, photos, gift articles or letters between boys and girls.",
                "Students are not allowed to visit the residents of the students of opposite gender.",
                "Day-Scholars are not allowed to enter the Hostel without prior permission from the Principal.",
                "Students are not allowed to form any type of unauthorized union / meeting and not allowed to celebrate birthday and any form of parties.",
                "If a student is found guilty of indiscipline, the College reserves the right to take disciplinary action against him/her and inform the Parents/Guardians about the action taken."
              ].map((rule, idx) => (
                <div key={idx} className="flex gap-4 group">
                   <Sparkle size={14} className="text-[#ffc107] shrink-0 mt-1.5 fill-[#ffc107]/20" />
                   <p className="text-[#333333] font-graphik font-medium leading-[1.8] text-justify">{rule}</p>
                </div>
              ))}
            </div>
          </section>
        </main>
      </div>

      <section id="structure" className="scroll-mt-32 pt-12 font-graphik w-full">
            <div className="mb-10">
              <h2 className="text-2xl lg:text-4xl font-bold text-[#224292] tracking-tight mb-6 font-graphik">
                Organizational <span className="text-[#ffc107]">Structure</span>
              </h2>
            </div>
            
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="relative rounded-xl sm:rounded-[3rem] overflow-hidden shadow-[0_40px_100px_rgba(24,53,122,0.08)] border border-slate-100 bg-white"
            >
               <img 
                 src={structureImg} 
                 alt="KIOT Organizational Structure" 
                 className="w-full h-auto object-contain"
               />
            </motion.div>
            
          </section>
      </section>

    </div>
  )
}

export default GuidelinesPage
