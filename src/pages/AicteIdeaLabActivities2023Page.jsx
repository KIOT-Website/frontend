import React, { useEffect } from 'react'
import { ArrowLeft } from 'lucide-react'
import { useNavigate } from 'react-router-dom'

const activities2023Data = [
  { sNo: 1, dates: '26.02.2024 & 27.02.2024', title: 'Two day Hands on Training Program on "PCB Design and Manufacturing Technology"', resourcePerson: ['Dr.K.Visagavel, Coordinator, IDEA Lab, Dean Academics & Vice-Principal, KIOT.', 'Dr.N.Santhiyakumari, Co-Coordinator IDEA Lab, Director R&D, KIOT.', 'Mr.M.Jagadeeshraja, Faculty Coordinator - IDEA Lab, AP/EEE.', 'Mr.M.Dinesh Kumar, Faculty Coordinator - IDEA Lab, AP/ECE.', 'Mr.A.Selvakumar, Faculty Coordinator - IDEA Lab, AP/MECH.'], remarks: 'KIOT Faculty Members' },
  { sNo: 2, dates: '28.02.2024 to 01.03.2024', title: '"PCB Design and Manufacturing Technology (Engineering Clinic I)"', resourcePerson: ['Mr.A.Selvakumar, Faculty Coordinator - IDEA Lab, AP/MECH.', 'Mr.A. Gajendran, Tech Guru - IDEA Lab, AP/MECH.', 'Mr.V.Karthikeyan,AP/MECH', 'Mr.C.Eswaramoorthi,AP/MECH', 'Mrs.A.Elavarasi,AP/MECH'], remarks: 'I Year - Mechanical Engineering (A Section Students)' },
  { sNo: 3, dates: '06.03.2024 to 08.03.2024', title: '"PCB Design and Manufacturing Technology (Engineering Clinic I)"', resourcePerson: ['Mr.A.Selvakumar, Faculty Coordinator - IDEA Lab, AP/MECH.', 'Mr.A. Gajendran, Tech Guru - IDEA Lab, AP/MECH.', 'Mr.R Vinoth Kumar, AP/MECH', 'Mr.T.Dheenathayalan, AP/MECH'], remarks: 'I Year - Mechanical Engineering (B Section Students)' },
  { sNo: 4, dates: '20.03.2024 - 22.03.2024', title: '"PCB Design and Manufacturing Technology (Engineering Clinic I)"', resourcePerson: ['Mr.M.Dinesh Kumar, Faculty Coordinator - IDEA Lab, AP/ECE.', 'Mr.A.Silambarasan , Tech Guru - IDEA Lab, AP/ECE.', 'Mr.M.Chandraman, AP/ECE', 'Mrs.L.Chitirap paavai, AP/ECE', 'Mrs.S.Sasidevi, AP/ECE'], remarks: 'I Year - Electronics and Communication Engineering (B Section Students)' },
  { sNo: 5, dates: '25.03.2024 - 27.03.2024', title: 'Hackathon (48 Hours)', resourcePerson: ['Dr.A.Apdhul Kathar, District Coordinator, EDII-TN, DIC Office, Salem.', 'Mr.Vijayakumar Manickavasagam, Technology Analyst, Infosys, Bangalore.', 'Mr.R.Kathirvel Murugan, Founder & Senior Innovation Manager, Chief Promoting Officer.com, Salem', 'Mr.A.Jeevan, Embedded System Engineer, Lab2Life, Salem'], remarks: 'KIOT Students' },
  { sNo: 6, dates: '20.03.2024 - 22.03.2024', title: '"PCB Design and Manufacturing Technology (Engineering Clinic I)"', resourcePerson: ['Mr.M.Jagadeeshraja, Faculty Coordinator - IDEA Lab, AP/EEE.', 'Mr.M.Rajkumar, Tech Guru - IDEA Lab, AP/EEE.', 'Ms.P.Srinithi, AP/EEE.'], remarks: 'I Year - Electrical and Electronics Engineering' },
  { sNo: 7, dates: '03.04.2024 to 05.04.2024', title: '"PCB Design and Manufacturing Technology (Engineering Clinic I)"', resourcePerson: ['Mrs. B. Ashwini, Tech Guru - IDEA Lab, AP/CSE.', 'Mr.G.Abdulkalamazad, AP/CSE', 'Mr.P.Nareshkumar, AP/CSE', 'Ms. A.Anitha, AP/CSE'], remarks: 'I Year - Computer Science and Engineering (A Section Students)' },
  { sNo: 8, dates: '15.04.2024 to 17.04.2024', title: '"PCB Design and Manufacturing Technology (Engineering Clinic I)"', resourcePerson: ['Mr.M.Dinesh Kumar, Faculty Coordinator - IDEA Lab, AP/ECE.', 'Mr.A.Silambarasan , Tech Guru - IDEA Lab, AP/ECE.', 'Mr.M.Chandraman, AP/ECE', 'Mrs.L.Chitirap paavai, AP/ECE', 'Mrs.S.Sasidevi, AP/ECE'], remarks: 'I Year - Electronics and Communication Engineering (A Section Students)' },
  { sNo: 9, dates: '06.05.2024 to 08.05.2024', title: '"PCB Design and Manufacturing Technology (Engineering Clinic I)"', resourcePerson: ['Mrs. B. Ashwini, Tech Guru - IDEA Lab, AP/CSE.', 'Mrs.E.Kiruthika, AP/CSE', 'MrsS.Deepa, AP/CSE'], remarks: 'I Year - Computer Science and Engineering (B Section Students)' },
  { sNo: 10, dates: '15.04.2024 to 17.04.2024', title: '"PCB Design and Manufacturing Technology (Engineering Clinic I)"', resourcePerson: ['Mr.S.Arulkesavan, Techguru - KIOT IDEA Lab, AP/Civil'], remarks: 'I Year - Civil Engineering' },
  { sNo: 11, dates: '20.05.2024 to 22.05.2024', title: '"PCB Design and Manufacturing Technology (Engineering Clinic I)"', resourcePerson: ['Mrs. B. Ashwini, Tech Guru - IDEA Lab, AP/CSE.', 'Mr.K.Boopathi, AP/CSE', 'Mr.R.Sivaguru, AP/CSE', 'Mrs.R.Saranya, AP/CSE'], remarks: 'I Year - Computer Science and Engineering (C Section Students)' },
  { sNo: 12, dates: '23.05. 2024 to 25.05.2024', title: '"PCB Design and Manufacturing Technology (Engineering Clinic I)"', resourcePerson: ['Mr. M.Gopikumaran, Techguru - KIOT IDEA Lab, AP/CSBS.', 'Mr.B.Venkata Ramanen,AP/CSBS'], remarks: 'I Year - Computer Science and Business Systems' },
  { sNo: 13, dates: '27.05. 2024 to 29.05.2024', title: '"PCB Design and Manufacturing Technology (Engineering Clinic I)"', resourcePerson: ['Mrs.V.Brindha, AP/AI&DS', 'Mr.S.Jayaprakash, AP/AI&DS'], remarks: 'I Year - Artificial Intelligence and Data Science' },
  { sNo: 14, dates: '30.05. 2024 to 03.06.2024', title: '"PCB Design and Manufacturing Technology (Engineering Clinic I)"', resourcePerson: ['Mr.R.Iyappan, Techguru - KIOT IDEA Lab, AP/IT.', 'Mr.T.Bhuveneshwaran, AP/IT', 'Ms.M.Priya, AP/IT'], remarks: 'I Year - Information Technology' }
];

const AicteIdeaLabActivities2023Page = () => {
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
                        Academic Year 2023-2024
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
                            {activities2023Data.map((act) => (
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

export default AicteIdeaLabActivities2023Page
