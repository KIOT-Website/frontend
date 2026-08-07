import { Cpu, Building2 } from 'lucide-react'
import ecxPriyaMolImage from '../../assets/Faculity/ecx/Dr. K. Priya Mol.png'
import ecxMaragatharajImage from '../../assets/Faculity/ecx/Dr. S. Maragatharaj.png'
import ecxMadhumathiImage from '../../assets/Faculity/ecx/Dr. T. Madhumathi.png'
import ecxValarmathiImage from '../../assets/Faculity/ecx/Mrs. G. Valarmathi.png'

export const beEcmData = {
  name: 'B.E Electronics and Computer Engineering',
    short: 'ECM',
    bannerImage: '/banners/ecx_banner.png',
    duration: '4 Years (8 Semesters)',
    intake: 60,
    affiliation: 'Anna University',
    accreditation: 'Undergraduate Program',
    placement: '90%',
    avgPackage: '4.5 LPA',
    topPackage: '18 LPA',
    icon: Cpu,
    color: '#18357a',
    tagline: 'Bridging Hardware and Software.',
    overview: [
      "Department of Electronics and Computer Engineering (ECX) at the Knowledge Institute of Technology (KIOT), established in 2025, is a forward-looking initiative positioned at the intersection of electronics and computing. The programme is designed to build strong foundations in electronics while developing computational thinking, enabling students to meet the evolving demands of a technology-driven world. With a focused alignment to India’s Semiconductor Mission, the curriculum equips students with both theoretical and practical expertise in areas such as chip design, embedded systems, and semiconductor technologies. It also emphasizes emerging domains like Cyber-Physical Systems, preparing graduates to design and develop intelligent, interconnected systems for the future.",
      "Driven by a commitment to academic excellence and innovation, the department is supported by experienced faculty who adopt modern teaching methodologies and actively contribute to research. Students are encouraged to enhance their professional skills through workshops, symposiums, guest lectures, and participation in professional bodies such as ISTE, SAE, and IEEE. As a newly established department, ECX offers a unique opportunity for students to be part of its formative journey, take on leadership roles, and shape its culture. With a clear vision and strong academic focus, the department aims to nurture competent engineers ready for industry and research. The programme offered is B.E in Electronics and Computer Engineering (4 years)."
    ],
    vision: "To produce competent, industry-relevant engineering professionals, blending expertise in electronic hardware and software development with strong ethical values and social responsibility",
    mission: "To provide quality technical education in Electronics and Computer Engineering through well-equipped infrastructure and innovative teaching\nTo equip students with industry relevant skills and emerging technologies by collaborating with industries\nTo foster professional culture, research aptitude and entrepreneurial abilities among students",
    peo: "PEO – 1: Graduates will demonstrate strong technical skills in digital computing technologies and software systems\n\nPEO – 2: Graduates will engage in professional practice and apply expertise in cyber physical systems to solve real world engineering problems\n\nPEO – 3: Graduates will demonstrate professional culture, research aptitude and entrepreneurial skills to drive technological innovation",
    po: "PO – 1: Engineering Knowledge: Apply knowledge of mathematics, natural science, computing, engineering fundamentals and an engineering specialization as specified in respectively to develop to the solution of complex engineering problems.\n\nPO – 2: Problem analysis: Identify, formulate, review research literature and analyze complex engineering problems reaching substantiated conclusions with consideration for sustainable development.\n\nPO – 3: Design/development of solutions: Design creative solutions for complex engineering problems and design/develop systems/components/processes to meet identified needs with consideration for the public health and safety, whole-life cost, net zero carbon, culture, society and environment as required.\n\nPO – 4: Conduct investigations of complex problems: Conduct investigations of complex engineering problems using research-based knowledge including design of experiments, modelling, analysis & interpretation of data to provide valid conclusions.\n\nPO – 5: Modern Tool Usage: Create, select and apply appropriate techniques, resources and modern engineering & IT tools, including prediction and modelling recognizing their limitations to solve complex engineering problems.\n\nPO – 6: The engineer and society: Analyze and evaluate societal and environmental aspects while solving complex engineering problems for its impact on sustainability with reference to economy, health, safety, legal framework, culture and environment.\n\nPO – 7: Ethics: Apply ethical principles and commit to professional ethics, human values, diversity and inclusion; adhere to national & international laws.\n\nPO – 8: Individual and Team Work: Function effectively as an individual, and as a member or leader in diverse/multi-disciplinary teams.\n\nPO – 9: Communication: Communicate effectively and inclusively within the engineering community and society at large, such as being able to comprehend and write effective reports and design documentation, make effective presentations considering cultural, language, and learning differences.\n\nPO – 10: Project Management and Finance: Apply knowledge and understanding of engineering management principles and economic decision-making and apply these to one’s own work, as a member and leader in a team, and to manage projects and in multidisciplinary environments.\n\nPO – 11: Life-Long Learning: Recognize the need for and have the preparation and ability for i)independent and life-long learning ii) adaptability to new and emerging technologies and iii) critical thinking in the broadest context of technological change.",
    pso: "PSO – 1: Apply concepts of digital architecture to build efficient hardware- software integrated solutions.\n\nPSO – 2: Develop and analyze software applications using embedded platforms and operating system frameworks for reliable computing solutions.\n\nPSO – 3: Develop and analyze cyber physical systems to address contemporary engineering challenges.",
    whyChoose: ['Dual domain expertise', 'Modern embedded labs'],
    curriculum: [{ year: 'Year 1', semesters: ['Network Analysis', 'Data Structures'] }],
    faculty: [
      { name: 'Dr. Maragatharaj S', designation: 'Associate Professor & Head of the Department', joiningDate: '15.07.2022', qualification: 'B.E., M.E., Ph.D.', association: 'Regular', experience: 'Teaching: 12.09 Years', specialization: 'VLSI Design', email: 'hod.ecx@kiot.ac.in', publications: 'IJ: 12 IC:14 NC: 9', rating: 5.0, image: ecxMaragatharajImage },
      { name: 'Ms. Valarmathi G', designation: 'Assistant Professor', joiningDate: '16.03.2026', qualification: 'B.E., M.E.', association: 'Regular', experience: 'Teaching: 8 Years', specialization: 'Wireless Technologies', email: 'gvalarmathime@gmail.com', publications: 'IC:02', rating: 4.7, image: ecxValarmathiImage },
      { name: 'Dr. Madhumathi T', designation: 'Assistant Professor', joiningDate: '04.06.2025', qualification: 'M.Sc., M.Phil., Ph.D.', association: 'Regular', experience: 'Teaching: 1.7 Years', specialization: 'Topology', email: 'tmmat@kiot.ac.in', publications: 'IJ: 9 NJ: - IC: 5 NC:1', rating: 4.8, image: ecxMadhumathiImage, category: 'S&H' },
      { name: 'Dr. Priya Mol K', designation: 'Assistant Professor', joiningDate: '09.06.2025', qualification: 'M.A., B.Ed., M.Phil., Ph.D.', association: 'Regular', experience: 'Teaching: 1 Year', specialization: 'American Literature', email: 'priyamolalvin@gmail.com', publications: 'IJ:2, IC:3, NJ:1, NC:2', rating: 4.6, image: ecxPriyaMolImage, category: 'S&H' },
      { name: 'Mrs. M. Iswarya', designation: 'Assistant Professor', joiningDate: '19.06.2026', qualification: 'B.E., M.E., Pursuing Ph.D.', association: 'Regular', experience: '3.5 Years', specialization: 'VLSI Design', email: 'miecx@kiot.ac.in', publications: 'IJ: 3, IC:4, NC: 3', rating: 4.8 },
      { name: 'Ms. O. Vivedhini', designation: 'Assistant Professor', joiningDate: '01.06.2026', qualification: 'B.E., M.E.', association: 'Regular', experience: '1.5 Years', specialization: 'VLSI Design', email: 'ovecx@kiot.ac.in', publications: 'IJ: - nil, IC:- nil, NC: -nil', rating: 4.7 },
      // Science & Humanities Faculty
      { name: 'Dr. S. Masilamani', designation: 'Assistant Professor', joiningDate: '01.07.2026', qualification: 'B.Sc., M.Sc., Ph.D.', association: 'Regular', experience: '25 Years', specialization: 'Physics (Crystallography)', email: 'smphy@kiot.ac.in', publications: 'IJ: 11, IC: 8', rating: 4.8, category: 'S&H' }
    ],
    labs: [
      {
        name: 'Industrial Linked Laboratories / COEs',
        equipments: [
          'Advanced Construction Management - L&T EduTech',
          'Automotive Technology - Ashok Leyland',
          'AI-driven Engineering Solutions - Creative Synergies Group',
          'CAD & Digital Manufacturing - Harita TechServ',
          'Energy Audit Centre - Sinetec Automation',
          'Embedded Technology - Firmware - American Megatrends International-AMI',
          'e-Yantra Robotics Lab - IIT – Bombay',
          'Software Defined Systems / ADAS with AUTOSAR - ANCIT / Harita Techserv',
          'Piping and Plant Design - Image Grafix',
          'Quality Engineering- Mech. - Nathan & Nathan Global Inc.',
          'Texas Instruments (TI) Innovation Lab - STEPS',
          'VLSI Testing & Post-Silicon Validation (PSV) - Tessolve Semiconductor',
          'Intelligent Elevator Systems and Industry 4.0 - KONE Elevators',
          'Industrial Automation: PLC & SCADA - GENN Automation',
          'Industry 4.0 - Delphi TVS',
          'CRM and HRM - ZOHO',
          'Japanese Language Centre - iTokyo'
        ],
        icon: Building2
      },

      
      {
        name: 'Analog and Digital Electronics Laboratory',
        equipments: [
          'Digital Storage Oscilloscopes',
          'Function Generators',
          'Digital LCR Meter',
          'IC Trainer Kit',
          '8086 Microprocessor trainer kit',
          'Embedded trainer kits with ARM cortex core',
          'LTSPICE, Digital circuit simulators',
          'Microprocessor Emulator Tool',
          'Keil software',
          'Quartus Software'
        ],
        icon: Cpu,
        incharge: 'Mrs. M. Iswarya',
        technician: 'Mr. E. Sridhar'
      },
      {
        name: 'Data structures and Python Programming Laboratory',
        equipments: [
          'Area: 88.9 Sq.m.',
          'Workstations: 37',
          'Python 3.7',
          'Dev C++ / Eclipse CDT / Code Blocks / CodeLite',
          'Java JDK 21'
        ],
        icon: Cpu,
        incharge: 'Ms. O. Vivedhini',
        technician: 'Mr. E. Sridhar'
      }
    ],
    placementStats: { placed: '90%', avg: '4.5 LPA', top: '18 LPA', companies: '35+' },
};
