import React, { useEffect } from 'react'
import { ArrowLeft } from 'lucide-react'
import { useNavigate } from 'react-router-dom'

const activities2024Data = [
  { sNo: 1, dates: '23.7.2024', title: 'Open Day for School Students "Exploring the facilities at KIOT IDEA Lab"', resourcePerson: ['Mr.M.Dinesh Kumar, Faculty Coordinator - IDEA Lab, AP/ECE.', 'Mr.A.Silambarasan, Tech Guru - IDEA Lab, AP/ECE.', 'Mr.B.S.T.Ragu, Faculty Incharge, KIOT IDEA Lab, AP/ECE'], remarks: 'VC Hr. Sec. School, Omalur.' },
  { sNo: 2, dates: '24.7.2024', title: 'Open Day for School Students "Exploring the facilities at KIOT IDEA Lab"', resourcePerson: ['Mr.M.Jagadeeshraja, Faculty Coordinator - IDEA Lab, AP/EEE.', 'Mr.M.Rajkumar, Tech Guru - IDEA Lab, AP/EEE', 'Mr.R.Ayyappan, Techguru - KIOT IDEA Lab, AP/IT.'], remarks: 'PV Matric Hr. Sec. School, Sivadhapuram.' },
  { sNo: 3, dates: '25.7.2024', title: 'Open Day for School Students "Exploring the facilities at KIOT IDEA Lab"', resourcePerson: ['Mr.M.Jagadeeshraja, Faculty Coordinator - IDEA Lab, AP/EEE.', 'Mr.M.Rajkumar, Tech Guru - IDEA Lab, AP/EEE', 'Mr.R.Ayyappan, Techguru - KIOT IDEA Lab, AP/IT.'], remarks: 'PV Matric Hr. Sec. School, Sivadhapuram.' },
  { sNo: 4, dates: '26.7.2024', title: 'Open Day for School Students "Exploring the facilities at KIOT IDEA Lab"', resourcePerson: ['Mr.A.Selvakumar, Faculty Coordinator - IDEA Lab, AP/MECH.', 'Mr.A.Gajendran, Tech Guru - IDEA Lab, AP/MECH.', 'Mrs.B.Ashwini, Tech Guru - IDEA Lab, AP/CSE'], remarks: 'Kalaimagal Vidhyashram Matric Hr. Sec. School, Eddappadi' },
  { sNo: 5, dates: '27.7.2024', title: 'Open Day for School Students "Exploring the facilities at KIOT IDEA Lab"', resourcePerson: ['Mr.B.S.T.Ragu, Faculty Incharge, KIOT IDEA Lab, AP/ECE', 'Mr.M.Gopikumaran, Techguru - KIOT IDEALab, AP/CSBS', 'Mr.R.Rameshkumar, Tech Guru - IDEA Lab, AP/AI&DS'], remarks: 'Jothi Vidyalaya Matriculation Hr. Sec. School, Elampillai.' },
  { sNo: 6, dates: '08.07.2024 to 12.07.2024', title: 'A Five day Faculty Development Programme on "Role on 3D Printing in IoT"', resourcePerson: ['Mr.V.Prabhu, Technical consultant, Artiwiz Technologies, Coimbatore.', 'Mr.A.Prabhakaran, University relations partner, ZED Digital, Coimbatore.'], remarks: 'Internal Faculty members' },
  { sNo: 7, dates: '1.8.2024 to 5.8.2024', title: 'IoT Design and 3D Printing Technology (Engineering Clinic II) Phase I Series 1', resourcePerson: ['Mr.R.Ayyappan, Techguru - KIOT IDEA Lab, AP/IT.', 'Mr.T.Bhuveneshwaran, AP/IT', 'Ms.M.Priya, AP/IT'], remarks: 'II year IT Students' },
  { sNo: 8, dates: '9.8.2024', title: 'Open Day for School Students "Exploring the facilities at KIOT IDEA Lab"', resourcePerson: ['Mr.R.Ayyappan, Techguru - KIOT IDEA Lab, AP/IT.', 'Mr.T.Bhuveneshwaran, AP/IT', 'Ms.M.Priya, AP/IT'], remarks: 'Dhaarus Salaam Matriculation Hr. Sec. School, Salam.' },
  { sNo: 9, dates: '12.8.2024 to 14.8.2024', title: 'IoT Design and 3D Printing Technology (Engineering Clinic II) Phase I Series 2', resourcePerson: ['Mr.M.Jagadeeshraja, Faculty Coordinator - IDEA Lab, AP/EEE.', 'Mr.M.Rajkumar, Tech Guru - IDEA Lab, AP/EEE.', 'Ms.P.Srinithi, AP/EEE.'], remarks: 'II year EEE Students' },
  { sNo: 10, dates: '19.8.2024 to 21.8.2024', title: 'IoT Design and 3D Printing Technology (Engineering Clinic II) Phase I Series 3', resourcePerson: ['Mrs.V.Brindha, AP/AI&DS', 'Mr.R.Rameshkumar, Tech Guru - IDEA Lab, AP/AI&DS'], remarks: 'II year AI&DS Students' },
  { sNo: 11, dates: '22.8.2024 to 26.8.2024', title: 'IoT Design and 3D Printing Technology (Engineering Clinic II) Phase I Series 4', resourcePerson: ['Mr.M.Gopikumaran, Techguru - KIOT IDEALab, AP/CSBS.', 'Mr.B.Venkataramanen, AP/CSBS', 'Mrs.K.Reena, AP/CSBS'], remarks: 'II year CSBS Students' },
  { sNo: 12, dates: '28.8.2024 to 30.8.2024', title: 'Three day Hands on Training Program on "IoT Design & 3D Printing Technology" (Engineering Clinic - II) Phase I Series 5', resourcePerson: ['Mrs.B.Ashwini, Tech Guru - IDEA Lab, AP/CSE.', 'Mr.G.Abdulkalamazad, AP/CSE', 'Ms.A.Anitha, AP/CSE'], remarks: 'II Year - Computer Science and Engineering (A Section Students)' },
  { sNo: 13, dates: '3.9.2024 to 5.9.2024', title: 'Three day Hands on Training Program on "IoT Design & 3D Printing Technology" (Engineering Clinic - II) Phase I Series 6', resourcePerson: ['Mr.S.Arulkesavan, Techguru - IDEA Lab, AP/Civil', 'Mr.S.Rajesh kumar, AP/Civil'], remarks: 'II Year - Civil Engineering Students' },
  { sNo: 14, dates: '30.9.2024 to 3.10.2024', title: 'Three day Hands on Training Program on "IoT Design & 3D Printing Technology" (Engineering Clinic - II) Phase I Series 7', resourcePerson: ['Mrs.B.Ashwini, Tech Guru - IDEA Lab, AP/CSE.', 'Mrs.E.Kiruthika, AP/CSE', 'Mrs.S.Deepa, AP/CSE'], remarks: 'II Year - Computer Science and Engineering (B Section Students)' },
  { sNo: 15, dates: '7.10.2024 to 9.10.2024', title: 'Three day Hands on Training Program on "IoT Design & 3D Printing Technology" (Engineering Clinic - II) Phase I Series 8', resourcePerson: ['Mr.A.Selvakumar, Faculty Coordinator - IDEA Lab, AP/MECH.', 'Mr.A.Gajendran, Tech Guru - IDEA Lab, AP/MECH.', 'Mr.V.Karthikeyan, AP/MECH', 'Mr.T.Dheenathayalan, AP/MECH'], remarks: 'II Year - Mechanical Engineering (A Section Students)' },
  { sNo: 16, dates: '14.10.2024 to 16.10.2024', title: 'Three day Hands on Training Program on "IoT Design & 3D Printing Technology" (Engineering Clinic - II) Phase I Series 9', resourcePerson: ['Mrs.B.Ashwini, Tech Guru - IDEA Lab, AP/CSE.', 'Mr.K.Boopathi, AP/CSE', 'Mrs.R.Saranya, AP/CSE'], remarks: 'II Year - Computer Science and Engineering (C Section Students)' },
  { sNo: 17, dates: '17.10.2024, 18.10.2024 & 21.10.2024', title: 'Three day Hands on Training Program on "IoT Design & 3D Printing Technology" (Engineering Clinic - II) Phase I Series 10', resourcePerson: ['Mr.M.Dinesh Kumar, Faculty Coordinator - IDEA Lab, AP/ECE.', 'Mr.A.Silambarasan, Tech Guru - IDEA Lab, AP/ECE.', 'Mr.M.Chandraman, AP/ECE', 'Mrs.L.Chitirappaavai, AP/ECE', 'Mrs.S.Sasidevi, AP/ECE'], remarks: 'II Year - Electronics and Communication Engineering (A Section Students)' },
  { sNo: 18, dates: '23.10.2024 to 25.10.2024', title: 'Three day Hands on Training Program on "IoT Design & 3D Printing Technology" (Engineering Clinic - II) Phase I Series 11', resourcePerson: ['Mr.M.Dinesh Kumar, Faculty Coordinator - IDEA Lab, AP/ECE.', 'Mr.A.Silambarasan, Tech Guru - IDEA Lab, AP/ECE.', 'Mr.M.Chandraman, AP/ECE', 'Mrs.L.Chitirappaavai, AP/ECE', 'Mrs.S.Sasidevi, AP/ECE'], remarks: 'II Year - Electronics and Communication Engineering (B Section Students)' },
  { sNo: 19, dates: '28.10.2024', title: 'A one dayWorkshop on "IoT application using Raspberry Pi"', resourcePerson: ['Mr.M.Jagadeeshraja, Faculty Coordinator - IDEA Lab, AP/EEE'], remarks: 'II Year and III Year IEEE Students' },
  { sNo: 20, dates: '5.11.2024 to 7.11.2024', title: 'Three day Hands on Training Program on "IoT Design & 3D Printing Technology" (Engineering Clinic - II) Phase I Series 12', resourcePerson: ['Mr.A.Selvakumar, Faculty Coordinator - IDEA Lab, AP/MECH.', 'Mr.A.Gajendran, Tech Guru - IDEA Lab, AP/MECH.', 'Mr.V.Karthikeyan, AP/MECH', 'Mr.T.Dheenathayalan, AP/MECH', 'Mr.S.Santhosh, AP/MECH'], remarks: 'II Year - Mechanical Engineering (B Section Students)' },
  { sNo: 21, dates: '15.11.2024 to 16.11.2024', title: 'Knowledge Fest - 2K24', resourcePerson: ['Mr.M.Dinesh Kumar, Faculty Coordinator - IDEA Lab, AP/ECE.', 'Mr.M.Chandraman, AP/ECE', 'Mr.T.Praveenkumar, AP/ECE'], remarks: 'School Students' },
  { sNo: 22, dates: '08.11.2024', title: 'Puthulir 2024 - TN School Innovation & Ideation Challenge', resourcePerson: ['Mr.M.Jagadeeshraja, Faculty Coordinator - IDEA Lab, AP/EEE', 'Mr.M. Dinesh Kumar, Faculty Coordinator - IDEA Lab, AP/ECE'], remarks: 'School Students' },
  { sNo: 23, dates: '11.12.2024 to 13.12.2024', title: 'Three day Faculty development program on "PCB Design and manufacturing technology".', resourcePerson: ['Mr.A.Silambarasan, Tech Guru - IDEA Lab,AP/ECE.', 'Mr.M.Rajkumar, Tech Guru - IDEA Lab,AP/ECE.', 'Mr.B.S.T.Ragu, Faculty incharge - IDEA Lab, AP/ECE.'], remarks: 'Internal Faculty Members' },
  { sNo: 24, dates: '30.12.2024', title: 'Awareness Program for School Teacher', resourcePerson: ['Dr.K.Visagavel, Principal, Coordinator - IDEA Lab.', 'Dr.P.Sanmugasundaram, Dir-Outreach', 'Mr.M.Jagadeeshraja, Faculty Coordinator - IDEA Lab, AP/EEE', 'Mr.M. Dinesh Kumar, Faculty Coordinator - IDEA Lab, AP/ECE'], remarks: 'School Teachers' },
  { sNo: 25, dates: '06.02.2025 to 07.02.2025', title: 'Skill development program on " PCB Design and manufacturing technology".', resourcePerson: ['Mr.M.Jagadeeshraja, Faculty Coordinator - IDEA Lab, AP/EEE.', 'Mr.M. Dinesh Kumar, Faculty Coordinator - IDEA Lab, AP/ECE', 'Mr.B.S.T.Ragu, Faculty incharge - IDEA Lab. AP/ECE'], remarks: 'I Year Student Ambassadors' },
  { sNo: 26, dates: '12.02.2025 to 14.02.2025', title: 'A skill development program on "PCB Design and manufacturing technology" (Engineering Clinic - I) Phase II Series1', resourcePerson: ['Mr. A. Gajendran, Tech guru - IDEA Lab, AP/Mech.', 'Mr. C.Eswaramoorthy AP/Mech.', 'Mr. R.Vinothkumar AP/Mech'], remarks: 'I Year Mechanical Engineering (A Section Students)' },
  { sNo: 27, dates: '17.02.2025 to 19.02.2025', title: 'A skill development program on "PCB Design and manufacturing technology" (Engineering Clinic - I) Phase II Series2', resourcePerson: ['Mr. A. Gajendran, Tech guru - IDEA Lab, AP/Mech.', 'Mr.M. Vinoth AP/Mech.', 'Mr. R.Vinothkumar AP/Mech'], remarks: 'I Year Mechanical Engineering (B Section Students)' },
  { sNo: 28, dates: '20.02.2025 to 21.02.2025', title: 'A skilling program on "PCB Design and Digital manufacturing technology"', resourcePerson: ['Mr.M.Jagadeeshraja, Faculty Coordinator - IDEA Lab, AP/EEE', 'Mr.M. Dinesh Kumar, Faculty Coordinator - IDEA Lab, AP/ECE', 'Mr.B.S.T.Ragu, Faculty incharge - IDEA Lab. AP/ECE', 'Mr. A.Gajendran, Tech guru - IDEA Lab, AP/ Mech.', 'Mr.A.Sekar, Head - Incubation, iStart.'], remarks: 'Govt. Polytechnic Students, Vanavasi.' },
  { sNo: 29, dates: '24.02.2025 to 26.02.2025', title: 'A skill development program on "PCB Design and manufacturing technology" (Engineering Clinic - I) Phase II Series3', resourcePerson: ['Mr. R.Rameshkumar, Tech guru - IDEA Lab, AP/AI&DS.', 'Mrs.P.J. Esther Rani, AP/AI&DS.', 'Ms. M. Selvi, AP/AI&DS.'], remarks: 'I Year AI&DS (A Section Students)' },
  { sNo: 30, dates: '27.02.2025 to 03.03.2025', title: 'A skill development program on "PCB Design and manufacturing technology" (Engineering Clinic - I)Phase II Series4', resourcePerson: ['Mr.M.Rajkumar, Tech guru - IDEA Lab, AP/EEE.', 'Ms. P. Srinithi, AP/EEE'], remarks: 'I Year - EEE Students' },
  { sNo: 31, dates: '17.02.2025 to 19.03.2025', title: 'A skill development program on "PCB Design and manufacturing technology" (Engineering Clinic - I) Phase II Series5', resourcePerson: ['Mr. R Ayappan AP/IT, Tech guru-IDEALab.', 'M Rubiga AP/IT.', 'Mr. Dhamodharan AP/IT'], remarks: 'I Year IT (B Section Students)' },
  { sNo: 32, dates: '20.02.2025 to 21.03.2025 & 24.3.2025', title: 'A skill development program on "PCB Design and manufacturing technology" (Engineering Clinic - I) Phase II Series6', resourcePerson: ['Mr. S Arulkesavan AP/ Civil, Tech guru - IDEA Lab.', 'Mr. S.Rajeshkumar AP/ CIVIL'], remarks: 'I Year Civil' },
  { sNo: 33, dates: '07.04.2025 to 09.04.2025', title: 'A skill development program on "PCB Design and manufacturing technology" (Engineering Clinic - I)Phase II Series7', resourcePerson: ['Mr. M .Gopikumaran, Tech guru - IDEA Lab, AP/CSBS.', 'Mr. B Venkata Ramanen, AP/ CSBS.', 'Mrs. RV Sudha, AP/ CSBS'], remarks: 'I Year CSBS' },
  { sNo: 34, dates: '15.04.2025 to 23.04.2025', title: 'Skilling Program on "PCB Design andDigital Manufacturing (Engineering Clinic - I)"', resourcePerson: ['Mrs.S.Sasidevi, AP/ ECE, Tech guru-IDEALab.', 'Mr.M. Duraisamy, AP/ECE.', 'Mr.S. Sabarinathan, AP/ECE'], remarks: 'I Year ECE (A section Students)' },
  { sNo: 35, dates: '21.04.2025 to 26.04.2025', title: 'Skilling Program on "PCB Design andDigital Manufacturing (Engineering Clinic - I)"', resourcePerson: ['Mrs.S.Sasidevi, AP/ ECE, Tech guru-IDEALab.', 'Mr.V. Vimalraj, AP/ECE.', 'Mrs.V. Vadivu , AP/ECE'], remarks: 'I Year ECE (B section Students)' },
  { sNo: 36, dates: '24.04.2025 to 30.04.2025', title: 'Skilling Program on "PCB Design andDigital Manufacturing (Engineering Clinic - I)"', resourcePerson: ['Mrs.S.Sasidevi, AP/ ECE, Tech guru-IDEALab.', 'Mrs.T. Devika, AP/ECE.', 'Mrs.R. Hemalatha, AP/ECE'], remarks: 'I Year ECE (C section Students)' },
  { sNo: 37, dates: '29.04.2025 to 06.05.2025', title: 'Skilling Program on "PCB Design andDigital Manufacturing (Engineering Clinic - I)"', resourcePerson: ['Mr. R.Rameshkumar, Tech guru - IDEA Lab, AP/AI&DS.', 'Mrs.M. Deepa, AP/AI&DS.', 'Mr. B. Gunasekar, AP/AI&DS.'], remarks: 'I Year AI & DS (B section Students)' },
  { sNo: 38, dates: '03.05.24', title: 'One day Hands on Training Program on "Open day for College students (Exploring the facilities of KIOT IDEA Lab)"', resourcePerson: ['Mr.M.Jagadeeshraja, Faculty Coordinator - IDEA Lab, AP/EEE', 'Mr.M. Dinesh Kumar, Faculty Coordinator - IDEA Lab, AP/ECE', 'Mr.B.S.T.Ragu, Faculty incharge - IDEA Lab. AP/ECE'], remarks: 'Dhirajlal Gandhi College of Technology, Salem.' },
  { sNo: 39, dates: '05.05.2025 to 10.05.2025', title: 'Skilling Program on "PCB Design andDigital Manufacturing (Engineering Clinic - I)"', resourcePerson: ['Mr.R.Sivaguru, AP/ CSE, Tech guru-IDEALab.', 'Ms.Vikneshwary, AP/CSE.', 'Mrs.R. Kamali, AP/CSE'], remarks: 'I Year CSE (A section Students)' },
  { sNo: 40, dates: '08.05.2025 to 14.05.2025', title: 'Skilling Program on "PCB Design andDigital Manufacturing (Engineering Clinic - I)"', resourcePerson: ['Mr.R.Sivaguru, AP/ CSE,Tech guru-IDEALab.', 'Mrs. V.Sathyapriya, AP/CSE.', 'Mrs.R. Eshwari, AP/CSE'], remarks: 'I Year CSE (B section Students)' },
  { sNo: 41, dates: '12.05.2025 to 17.05.2025', title: 'Skilling Program on "PCB Design andDigital Manufacturing (Engineering Clinic - I)"', resourcePerson: ['Mr.R.Sivaguru, AP/ CSE, Tech guru IDEALab.', 'Mrs. K.Gowthami, AP/CSE.', 'Mrs.M. Saranya, AP/CSE'], remarks: 'I Year CSE (C section Students)' },
  { sNo: 42, dates: '19.05.2025 to 24.05.2025', title: 'Skilling Program on "PCB Design andDigital Manufacturing (Engineering Clinic - I)"', resourcePerson: ['Mr.R.Sivaguru, AP/ CSE, Tech guru IDEALab.', 'Mrs. N. Subha, AP/CSE', 'Mrs.U.K. Balaji saravanan, AP/CSE'], remarks: 'I Year CSE (D section Students)' },
  { sNo: 43, dates: '22.05.2025 to 28.05.2025', title: 'Skilling Program on "PCB Design andDigital Manufacturing (Engineering Clinic - I)"', resourcePerson: ['Mr.R.Ayyappan, Techguru - KIOT IDEA Lab, AP/IT.', 'Mr.T.Bhuveneshwaran, AP/IT', 'Ms.M.Priya, AP/IT'], remarks: 'I Year IT (A section Students)' }
];

const AicteIdeaLabActivities2024Page = () => {
    const navigate = useNavigate()

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return (
        <div className="min-h-screen bg-slate-50 pt-24 pb-12">
            <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
                {/* Back Button */}
                <button 
                    onClick={() => navigate('/research-innovation/aicte-idea-lab')}
                    className="flex items-center gap-2 text-slate-500 hover:text-[#224292] font-semibold mb-8 transition-colors group"
                >
                    <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
                    Back to AICTE IDEA Lab
                </button>

                {/* Header */}
                <div className="mb-10 text-center">
                    <h1 className="text-3xl md:text-4xl font-extrabold text-[#224292] font-graphik tracking-tight mb-4">
                        Details of Activities Carried Out
                    </h1>
                    <div className="inline-block bg-[#ffc107] text-[#224292] font-bold px-4 py-1 rounded-full shadow-sm">
                        Academic Year 2024-2025
                    </div>
                </div>

                {/* Detailed Table */}
                <div className="overflow-x-auto bg-white rounded-2xl border border-slate-200 shadow-sm">
                    <table className="w-full text-left border-collapse text-black">
                        <thead>
                            <tr className="bg-[#224292] text-white">
                                <th className="py-4 px-5 font-bold text-sm tracking-wider uppercase border-r border-white/20 whitespace-nowrap">S.No.</th>
                                <th className="py-4 px-5 font-bold text-sm tracking-wider uppercase border-r border-white/20 whitespace-nowrap">Date of the Event</th>
                                <th className="py-4 px-5 font-bold text-sm tracking-wider uppercase border-r border-white/20">Program Title</th>
                                <th className="py-4 px-5 font-bold text-sm tracking-wider uppercase border-r border-white/20">Name of the Guest</th>
                                <th className="py-4 px-5 font-bold text-sm tracking-wider uppercase border-r border-white/20">Target Audience</th>
                                <th className="py-4 px-5 font-bold text-sm tracking-wider uppercase">Number of participants attended</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-100">
                            {activities2024Data.map((act) => (
                                <tr key={act.sNo} className="hover:bg-slate-50 transition-colors bg-white">
                                    <td className="py-4 px-5 text-sm font-medium border-r border-slate-100 text-slate-600">{act.sNo}</td>
                                    <td className="py-4 px-5 text-sm font-medium border-r border-slate-100 text-slate-700 whitespace-nowrap">{act.dates}</td>
                                    <td className="py-4 px-5 text-sm font-medium border-r border-slate-100 text-slate-800 leading-relaxed max-w-sm">{act.title}</td>
                                    <td className="py-4 px-5 text-sm border-r border-slate-100 text-slate-700 max-w-sm">
                                        <ul className="space-y-1 list-disc pl-4">
                                            {act.resourcePerson.map((person, i) => (
                                                <li key={i}>{person}</li>
                                            ))}
                                        </ul>
                                    </td>
                                    <td className="py-4 px-5 text-sm font-medium border-r border-slate-100 text-slate-700 max-w-xs">{act.remarks}</td>
                                    <td className="py-4 px-5 text-sm font-semibold text-center text-slate-800">-</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default AicteIdeaLabActivities2024Page
