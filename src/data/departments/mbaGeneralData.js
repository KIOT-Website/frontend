import { Cpu, Award, Monitor, Building2 } from 'lucide-react'
import mbaDirectorImg from '../../assets/Faculity/mba/Dr.A.Stephen.png'
import mbaVenkatesanImg from '../../assets/Faculity/mba/Dr.T.Venkatesan.png'
import mbaRameshImg from '../../assets/Faculity/mba/Dr.R.Ramesh.png'
import mbaPadmanabanImg from '../../assets/Faculity/mba/Prof.G.Padmanaban.png'
import mbaRevathiImg from '../../assets/Faculity/mba/Prof.P.Revathi.png'
import mbaVimalaImg from '../../assets/Faculity/mba/Prof.S.Vimala.png'
import mbaSuganyaImg from '../../assets/Faculity/mba/Prof.T.Suganya.png'
import mbaDrSuganyaImg from '../../assets/Faculity/mba/Dr.S.SUGANYA.png'
import mbaSenchulakshmiImg from '../../assets/Faculity/mba/Prof.D.Senchulakshmi.png'
import mbaMusthaffaImg from '../../assets/Faculity/mba/Prof.A.Musthaffa.png'
import mbaManikandanImg from '../../assets/Faculity/mba/Prof.P.Manikandan.png'
import mbaAmbaligaImg from '../../assets/Faculity/mba/Dr.R.Ambaliga Bharathi Kavithai.png'
import mbaArivazhaganImg from '../../assets/Faculity/mba/Prof.V.Arivazhagan.png'
import mbaBharaniEswariImg from '../../assets/Faculity/mba/Prof.M.Bharani Eswari.jpg'
import mbaBrochurePdf from '../../assets/Mba/MBA (GENERAL) - E BROCHURE 2026.pdf'

export const mbaGeneralData = {
  name: 'Master of Business Administration',
    short: 'MBA - General',
    duration: '2 Years (4 Semesters)',
    intake: 120,
    affiliation: 'Anna University',
    accreditation: 'Postgraduate Program',
    placement: '89%',
    avgPackage: '5.2 LPA',
    topPackage: '14 LPA',
    icon: Award,
    color: '#224292',
    tagline: 'Nurturing Global Business Leaders.',
    quickApply: 'https://forms.gle/PdcnrWRN8ZQV6hJV6',
    brochure: mbaBrochurePdf,
    brochureLabel: 'MBA Brochure',
    overview: [
      "Master of Business Administration (MBA) was established in the year 2011 by Knowledge Institute of Technology Trust (KIOTT), Kakapalayam (PO), Salem – 637 504, Tamilnadu, India. The trust consists of 42 Eminent Professors from Leading Engineering Colleges, Management schools and Budding Entrepreneurs with a vision to build our Nation through quality education.",
      "Master of Business Administration (MBA), a part of Knowledge Institute of Technology (KIOT) and offers Two years MBA programme with an intake of 120 students. MBA@KIOT is known for its Quality Placements, Inspiring Faculty, Project with Stipend, Industrial Consultancy and Joy of Learning. The core strengths of MBA are its faculty team with diverse expertise and vibrant students.",
      "Apart from offering quality education to students, MBA@KIOT offers Industrial Consultancy and Management Development Programmes (MDPs) to various industries. As a part of its Corporate Social Responsibility and service to academia, MBA@KIOT organizes Skill Development Programmes for faculty members of different educational institutions in association with Confederation of Indian Industry (CII-Salem). MBA@KIOT is driven with a vision to produce global leaders to manage enterprises in a challenging and highly competitive world through incorporation of domain expertise coupled with high ethical standards. These initiatives have made MBA, a preferred destination for management education in this region within a short span of time."
    ],
    vision: "To produce managers and entrepreneurs who are business relevant, innovative and socially responsible.",
    mission: "M1: To offer state-of-the-art management programs and carry out research and consultancy.\nM2: To nurture students with industry-relevant skills and knowledge with leadership and entrepreneurial capabilities.\nM3: To collaborate with industries and academic for academics and collaborative research and training.",
    peo: "PEO 1: Graduates to be imparted with fundamental and specialized skills, in order to manage enterprises that operate in an arena of complexity.\n\nPEO 2: Graduates to be nurtured with good leadership and learning, through faculty who are thought leaders and being exposed to the scope of continuous industry interactions.\n\nPEO 3: Graduates to be equipped to pursue the opportunities beyond the level of resources available, to explore new ventures in entrepreneurship and sustainable innovation.",
    po: "PO 1: Apply knowledge of management theories and practices to solve business problems.\n\nPO 2: Foster analytical and critical thinking abilities for data-based decision making.\n\nPO 3: Ability to develop value based leadership ability.\n\nPO 4: Ability to understand, analyze and communicate global, economic, legal, and ethical aspects of business.\n\nPO 5: Ability to lead themselves and others in the achievement of organizational goals, contributing effectively to a team environment.\n\nPO 6: Ability to apply professional ethics and enhance business quality through lifelong learning.",
    pso: "PSO – 1: Design and execute marketing, financial, and operational strategies for diverse business models.\n\nPSO – 2: Leverage modern analytical tools and software to interpret market trends and business data.\n\nPSO – 3: Formulate business solutions aligning with ethical practices and environmental sustainability.",
    whyChoose: [
      'Dual specialisations in core domains',
      'Experienced faculty with corporate backgrounds',
      'Excellent track record of placements',
      'State-of-the-art Case Study room',
      'Dedicated business incubator support'
    ],
    curriculum: [
      { year: 'Year 1 – Core Foundations', semesters: ['Management Principles', 'Organizational Behavior', 'Managerial Economics', 'Financial Accounting', 'Marketing Management', 'Human Resource Management', 'Quantitative Techniques'] },
      { year: 'Year 2 – Specialisation & Strategy', semesters: ['Strategic Management', 'Business Analytics', 'Elective I (Specialisation)', 'Elective II (Specialisation)', 'Elective III (Specialisation)', 'Summer Internship Project', 'Professional Development Seminar'] }
    ],
    faculty: [
      { name: 'Dr. Stephen A', designation: 'Professor & Director', qualification: 'BA., MA., MBA., M.Phil., PGDHRM, Ph.D.', specialization: 'HR & Marketing', email: 'directorkbs@kiot.ac.in', experience: 'Teaching: 22.11 Years, Industry: 1.7 Years', publications: 'IJ: 17, IC: 05, NC: 02', image: mbaDirectorImg, rating: 5.0 },
      { name: 'Dr. Venkatesan T', designation: 'Associate Professor & HOD', qualification: 'B.Com, M.Com, MBA, M.Phil. M.A (Public Admin), Ph.D.', specialization: 'Finance & Marketing', email: 'tvmba@kiot.ac.in', experience: 'Teaching: 16 Years', publications: 'IC: 17, NC: 10, IJ: 19, NJ: 05', image: mbaVenkatesanImg, rating: 4.9 },
      { name: 'Dr. Ramesh R', designation: 'Associate Professor', qualification: 'M.B.A., M.S.W., M.Phil., Ph.D.', specialization: 'Marketing & HR', email: 'rrmba@kiot.ac.in', experience: 'Teaching: 9.6 Years, Industry: 3.1 Years', publications: 'IJ: 14, NJ: 5, NC: 12', image: mbaRameshImg, rating: 4.8 },
      { name: 'Dr. S. Suganya', designation: 'Assistant Professor', qualification: 'B.E (IT)., MBA., M.E (CSE)., Ph.D.', specialization: 'Finance & Marketing', email: 'suganyasellamuthu@gmail.com', experience: 'Teaching: 12 Years, Industry: 2 Years', publications: 'IC: 04, NC: 04, IJ: 02', image: mbaDrSuganyaImg, rating: 4.8 },
      { name: 'Mr. G. Padmanaban', designation: 'Assistant Professor', qualification: 'BE, MBA, UGC-NET, (PhD)', specialization: 'Human Resource Management', email: 'Padybangalore@gmail.com', experience: 'Teaching: 15 Years, Industry: 10 Years', image: mbaPadmanabanImg, rating: 4.7 },
      { name: 'Ms. Revathi P', designation: 'Assistant Professor', qualification: 'B.Com(CA), MBA, M.Com(Banking), (PhD)', specialization: 'Finance & Marketing', email: 'prmba@kiot.ac.in', experience: 'Teaching: 12.11 Years', publications: 'IC: 03, NC: 04, IJ: 01, NJ: 01', image: mbaRevathiImg, rating: 4.6 },
      { name: 'Ms. Vimala S', designation: 'Assistant Professor', qualification: 'B.Com, MBA, M.Phil., (Ph.D)', specialization: 'Finance & HR', email: 'svmba@kiot.ac.in', experience: 'Teaching: 16.7 Years', publications: 'IC: 03, NC: 04, IJ: 02', rating: 4.6, image: mbaVimalaImg },
      { name: 'Ms. Suganya T', designation: 'Assistant Professor', qualification: 'MBA', specialization: 'Marketing and Finance', email: 'tsmba@kiot.ac.in', experience: 'Teaching: 4.11 Years, Industry: 3.3 Years', publications: 'NC: 01', image: mbaSuganyaImg, rating: 4.5 },
      { name: 'Ms. Senchulakshmi D', designation: 'Assistant Professor', qualification: 'B.Sc. (CS) & MBA', specialization: 'HR & Marketing', email: 'dsmba@kiot.ac.in', experience: 'Teaching: 4.6 Years, Industry: 0.5 Months', image: mbaSenchulakshmiImg, rating: 4.5 },
      { name: 'Mr. Arivazhagan V', designation: 'Assistant Professor', qualification: 'MBA, M.Phil., (Ph.D)', specialization: 'Finance & Operations', email: 'vamba@kiot.ac.in', experience: 'Teaching: 11 Years, Industry: 4 Years', publications: 'IC:02, NC:05, IJ:03', image: mbaArivazhaganImg, rating: 4.8 },
      { name: 'Mr. Saravanan N', designation: 'Assistant Professor', qualification: 'B.E., MBA', specialization: 'Operations & Systems', email: 'nsmba@kiot.ac.in', experience: 'Teaching: 6.8 Years, Industry: 2.2 Years', publications: 'NC: 02', rating: 4.6 },
      { name: 'Ms. Bharani Eswari M', designation: 'Assistant Professor', qualification: 'B.Com, MBA., (Ph.D)', specialization: 'Finance & Marketing', email: 'bharanieswarimba@gmail.com', experience: 'Teaching: 9 Years, Industry: 4 Years', publications: 'IC:01, NC:02, IJ:04, NJ:03', image: mbaBharaniEswariImg, rating: 4.7 }
    ],
    labs: [
      {
        name: 'Industrial Linked Laboratories / COEs',
        equipments: [
          'CRM and HRM - ZOHO',
          'Japanese Language Centre - iTokyo'
        ],
        icon: Building2
      },

      

      {
        name: "Data Analysis and Business Modeling Lab",
        icon: Cpu,
        equipments: [
          "Area: 149.40 Sq.m",
          "Capacity: 55 Systems",
          "Hardware Details: Intel Pentium 3.2 GHz Processor, IPX41-R3 Chipset Motherboard, 8 GB DDR3 SDRAM, 128 GB SATA SSD HDD, 19” LCD Wide Screen Monitor, USB 107 Keys Keyboard, USB Optical Scroll Mouse, ATX Cabinet",
          "Software: IBM SPSS STATISTICS 19.0 (BASE, ADVANCED, REGRESSION) - 30 Users License",
          "English Software: Hi - Class Software, Learn to English, Advanced Grammar in Use, Group Discussion - 55 Users License",
          "Accounting Pack: Tally ERP 9 GOLD (Education Pack)",
          "Office Suite: MS Office 2019 (Campus Agreement)"
        ]
      }
    ],
    placementStats: { placed: '89%', avg: '5.2 LPA', top: '14 LPA', companies: '40+' },
    patents: [
      {
        year: "Department Patents",
        data: [
          {
            inventors: "Prof. M. Bharani Eswari",
            title: "A Personalized Customer Experience System using Machine Learning (ML) and Natural Language Processing (NLP)",
            type: "Design",
            appNo: "-",
            date: "3/14/2026",
            status: "APPLIED"
          },
          {
            inventors: "Prof. M. Bharani Eswari",
            title: "Financial Risk Assessment Device",
            type: "Design",
            appNo: "469755-001",
            date: "11/6/2025",
            status: "Published"
          },
          {
            inventors: "Prof. M. Bharani Eswari",
            title: "Micro Fluidic Hemo Analyser Using Biosensor",
            type: "Design",
            appNo: "202441017675",
            date: "3/13/2024",
            status: "Applied"
          },
          {
            inventors: "Mrs. D. Senchulakshmi",
            title: "Device to Identify Financial Loan Eligibility of a Person",
            type: "Design",
            appNo: "393345-001",
            date: "8/22/2023",
            status: "Published"
          },
          {
            inventors: "Prof. P. Manikandan",
            title: "Financial Risk Assessment Device",
            type: "Design",
            appNo: "469755-001",
            date: "11/6/2025",
            status: "Published"
          },
          {
            inventors: "Mrs. S. Vimala",
            title: "Impact of Capital Marketing in Economic Development Country",
            type: "Utility Patent",
            appNo: "202521045360",
            date: "5/10/2025",
            status: "Published"
          },
          {
            inventors: "Dr. R. Ambaliga Bharathi Kavithai",
            title: "The Role of Performance-Based Budgeting in Financial Planning Management",
            type: "Utility Patent",
            appNo: "1243184",
            date: "3/16/2026",
            status: "Applied"
          },
          {
            inventors: "Dr. R. Ambaliga Bharathi Kavithai",
            title: "Impact of Advantages of Performance- Based Budgeting in Optimizing Financial Planning and Management",
            type: "Utility Patent",
            appNo: "E-12/1636/2026/CHE",
            date: "2/6/2026",
            status: "Published"
          }
        ]
      }
    ]
};
