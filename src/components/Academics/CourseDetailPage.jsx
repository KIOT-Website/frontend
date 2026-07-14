import { useState, useRef, useEffect, useLayoutEffect, Fragment } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import {
  ChevronLeft, GraduationCap, Building2, Users, BookOpen,
  MapPin, Clock, Calendar, Award, CheckCircle2, ChevronRight,
  BarChart3, FileText, Mail, X, Target, TrendingUp, Loader2, Trophy, Plus,
  Wrench, Layers, FlaskConical, Cpu, ChevronDown, Download, ArrowLeft, Briefcase,
  Microscope, Star, Globe, ShieldCheck, ArrowRight, Quote
} from 'lucide-react';
import facultyBg from '../../assets/Faculity/background faculty.webp';
import stephenImg from '../../assets/dir and hod/MBA Director.png';
import venkatesanImg from '../../assets/dir and hod/Dr.T.Venkatesan.webp';
import srinivasanImg from '../../assets/dir and hod/Dr. PSS. Srinivasan.jpg';
import secretaryImg from '../../assets/main/Secretarys-Message-KIOTT.webp';
import principalImg from '../../assets/dir and hod/Principal.png';
import placementImmanuelImg from '../../assets/placements/placement team/Dr.D.Immanuel, MBA., Ph.D..webp';
import placementPadmanabanImg from '../../assets/placements/placement team/Prof.G.Padmanaban, MBA., (PhD),.webp';
import placementMusthaffaImg from '../../assets/placements/placement team/Mr.A.Musthaffa, MBA., M.Phil..webp';
import placementRajendranImg from '../../assets/dir and hod/Dr. P. Rajendran.png';
import placementBalachandranImg from '../../assets/placements/placement team/Balachandran B.Sc.,M.A.,.webp';
import { courseData } from '../../data/courseData'
import cseImage from '../../assets/main/CSE .webp'
import mbaHomeImg from '../../assets/main/mba home.png'
import mbaPicture1 from '../../assets/Mba/Picture1.png'
import mbaPicture2 from '../../assets/Mba/Picture2.png'
import mbaPicture3 from '../../assets/Mba/Picture3.png'
import mbaPicture4 from '../../assets/Mba/Picture4.png'
import mbaPicture5 from '../../assets/Mba/Picture5.png'
import mbaPicture6 from '../../assets/Mba/Picture6.png'
import mbaPicture7 from '../../assets/Mba/Picture7.png'
import mbaPicture8 from '../../assets/Mba/Picture8.png'
import mbaPicture9 from '../../assets/Mba/Picture9.png'
import mbaPicture10 from '../../assets/Mba/Picture10.png'
import mbaPicture11 from '../../assets/Mba/Picture11.png'
import mbaPicture12 from '../../assets/Mba/Picture12.png'
import mbaPicture13 from '../../assets/Mba/Picture13.png'
import mbaDirectorImgNew from '../../assets/Faculity/mba/MBA Director.jpg.png'
import mbaVenkatesanImgNew from '../../assets/Faculity/mba/Dr.T.Venkatesan.png'
import mbaRameshImgNew from '../../assets/Faculity/mba/Dr.R.Ramesh.png'
import mbaPadmanabanImgNew from '../../assets/Faculity/mba/Prof.G.Padmanaban.png'
import mbaRevathiImgNew from '../../assets/Faculity/mba/Prof.P.Revathi.png'
import mbaVimalaImgNew from "../../assets/Faculity/mba/Prof.S.Vimala.png"
import mbaSuganyaImgNew from '../../assets/Faculity/mba/Prof.T.Suganya.png'
import mbaSenchulakshmiImgNew from '../../assets/Faculity/mba/Prof.D.Senchulakshmi.png'
import mbaMusthaffaImgNew from '../../assets/Faculity/mba/Prof.A.Musthaffa.png'
import mbaManikandanImgNew from '../../assets/Faculity/mba/Prof.P.Manikandan.png'
import mbaAmbaligaImgNew from '../../assets/Faculity/mba/Dr.R.Ambaliga Bharathi Kavithai.png'
import mbaArivazhaganImgNew from '../../assets/Faculity/mba/Prof.V.Arivazhagan.png'
import ievVijayakumarImg from '../../assets/Faculity/mba iev/dr.s vijayakuamar.png'
import ievBharaniImg from '../../assets/Faculity/mba iev/Prof.M. Bharani Eswari.png'
import ievRubiniImg from '../../assets/Faculity/mba iev/Prof.M. Rubini.png'
import ievGowrishankarImg from '../../assets/Faculity/mba iev/Prof.M.Gowrishankar.png'
import ievSaravananImg from '../../assets/Faculity/mba iev/Prof.S.Saravanan.png'
import { getDepartmentSchematic } from './DepartmentSchematics'

// Syllabus PDF Imports
import mechUgPdf from '../../assets/Curriculum Syllabus/1. MECH/UG - MECH R23 - I - VI SEM - Syllabus.pdf'
import mechPgPdf from '../../assets/Curriculum Syllabus/1. MECH/PG - M.E.-ISE I-IV SEM (New).pdf'
import eceUgPdf from '../../assets/Curriculum Syllabus/2. ECE/UG - ECE - I - VI SEM- Syllabus.pdf'
import ecePgPdf from '../../assets/Curriculum Syllabus/2. ECE/PG - AE SYLLABUS (I - IV SEM).pdf'
import eeeUgPdf from '../../assets/Curriculum Syllabus/3. EEE/UG - EEE - I - VI SEM Syllabus.pdf'
import eeePgPdf from '../../assets/Curriculum Syllabus/3. EEE/PG - PED - I - IV SEM SYLLABUS.pdf'
import cseUgPdf from '../../assets/Curriculum Syllabus/4. CSE/UG - CSE - I - VI SEM Syllabus.pdf'
import sePgPdf from '../../assets/Curriculum Syllabus/4. CSE/PG- SE - I - IV SEM SYLLABUS.pdf'
import civilUgPdf from '../../assets/Curriculum Syllabus/5. CIVIL/CIVIL - I - VI SEM SYLLABUS.pdf'
import itUgPdf from '../../assets/Curriculum Syllabus/6. IT/IT - I - VI SEM SYLLABUS.pdf'
import csbsUgPdf from '../../assets/Curriculum Syllabus/7. CSBS/CSBS - I - VI SEM SYLLABUS.pdf'
import aidsUgPdf from '../../assets/Curriculum Syllabus/8. AI&DS/AI&DS I - VI SEM SYLLABUS.pdf'
import mbaIevPdf from '../../assets/Curriculum Syllabus/9. MBA (IEV)/MBA (IEV) - I - IV SEM SYLLABUS.pdf'
import ecxPdf from '../../assets/Curriculum Syllabus/10. ECX/ECX - I- II SEM SYLLABUS.pdf'
import mbaGenPdf from '../../assets/Curriculum Syllabus/11. MBA(General)/MBA (General ) - I - IV SEM SYLLABUS.pdf'
import mcaPdf from '../../assets/Curriculum Syllabus/12. M.C.A/MCA - I - II SEM SYLLABUS.pdf'

const SYLLABUS_PDF_MAP = {
  'be-mechanical': [
    { title: 'B.E. Mechanical Engineering (I - VI SEM) Syllabus', file: mechUgPdf, year: 'Regulation 2023', sem: 'I - VI' }
  ],
  'me-ise': [
    { title: 'M.E. Industrial Safety Engineering (I - IV SEM) Syllabus', file: mechPgPdf, year: 'Regulation 2023', sem: 'I - IV' }
  ],
  'be-ece': [
    { title: 'B.E. Electronics and Communication Engineering (I - VI SEM) Syllabus', file: eceUgPdf, year: 'Regulation 2023', sem: 'I - VI' }
  ],
  'me-ae': [
    { title: 'M.E. Applied Electronics (I - IV SEM) Syllabus', file: ecePgPdf, year: 'Regulation 2023', sem: 'I - IV' }
  ],
  'be-eee': [
    { title: 'B.E. Electrical and Electronics Engineering (I - VI SEM) Syllabus', file: eeeUgPdf, year: 'Regulation 2023', sem: 'I - VI' }
  ],
  'me-ped': [
    { title: 'M.E. Power Electronics and Drives (I - IV SEM) Syllabus', file: eeePgPdf, year: 'Regulation 2023', sem: 'I - IV' }
  ],
  'be-cse': [
    { title: 'B.E. Computer Science and Engineering (I - VI SEM) Syllabus', file: cseUgPdf, year: 'Regulation 2023', sem: 'I - VI' }
  ],
  'me-se': [
    { title: 'M.E. Software Engineering (I - IV SEM) Syllabus', file: sePgPdf, year: 'Regulation 2023', sem: 'I - IV' }
  ],
  'be-civil': [
    { title: 'B.E. Civil Engineering (I - VI SEM) Syllabus', file: civilUgPdf, year: 'Regulation 2023', sem: 'I - VI' }
  ],
  'btech-it': [
    { title: 'B.Tech Information Technology (I - VI SEM) Syllabus', file: itUgPdf, year: 'Regulation 2023', sem: 'I - VI' }
  ],
  'btech-csbs': [
    { title: 'B.Tech Computer Science and Business Systems (I - VI SEM) Syllabus', file: csbsUgPdf, year: 'Regulation 2023', sem: 'I - VI' }
  ],
  'btech-aids': [
    { title: 'B.Tech Artificial Intelligence and Data Science (I - VI SEM) Syllabus', file: aidsUgPdf, year: 'Regulation 2023', sem: 'I - VI' }
  ],
  'mba-iev': [
    { title: 'MBA Innovation, Entrepreneurship and Venture Development (IEV) (I - IV SEM) Syllabus', file: mbaIevPdf, year: 'Regulation 2023', sem: 'I - IV' }
  ],
  'be-ecm': [
    { title: 'B.E. Electronics and Computer Engineering (I - II SEM) Syllabus', file: ecxPdf, year: 'Regulation 2025', sem: 'I - II' }
  ],
  'mba-general': [
    { title: 'MBA General (I - IV SEM) Syllabus', file: mbaGenPdf, year: 'Regulation 2023', sem: 'I - IV' }
  ],
  'mca': [
    { title: 'MCA (I - II SEM) Syllabus', file: mcaPdf, year: 'Regulation 2023', sem: 'I - II' }
  ]
}

const API_BASE = import.meta.env.VITE_API_URL || 'http://localhost:8000'

const ACHIEVEMENT_DEPARTMENT_OVERRIDES = {
  'be-mechanical': 'B.E. MECHANICAL ENGINEERING',
  'be-cse': 'B.E. COMPUTER SCIENCE AND ENGINEERING',
  'be-ece': 'B.E. ELECTRONICS AND COMMUNICATION ENGINEERING',
  'btech-it': 'B.TECH INFORMATION TECHNOLOGY',
  'btech-aids': 'B.TECH ARTIFICIAL INTELLIGENCE AND DATA SCIENCE',
  'be-eee': 'B.E. ELECTRICAL AND ELECTRONICS ENGINEERING',
  'btech-csbs': 'B.TECH COMPUTER SCIENCE AND BUSINESS SYSTEMS',
  'be-civil': 'B.E. CIVIL ENGINEERING',
}

const getAchievementDepartmentName = (courseId, courseName) => {
  if (ACHIEVEMENT_DEPARTMENT_OVERRIDES[courseId]) {
    return ACHIEVEMENT_DEPARTMENT_OVERRIDES[courseId]
  }

  return courseName
    .toUpperCase()
    .replace(/^B\.?\s*E\.?\s+/, 'B.E. ')
    .replace(/^B\.?\s*TECH\.?\s+/, 'B.TECH ')
    .replace(/\s*&\s*/g, ' AND ')
    .replace(/\s+/g, ' ')
    .trim()
}

// Fallback for courses without full data
const defaultCourse = (id) => ({
  name: id.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' '),
  short: 'Engineering Program',
  duration: '4 Years (8 Semesters)',
  intake: 60,
  affiliation: 'Anna University',
  accreditation: 'NBA Accredited',
  placement: '92%',
  avgPackage: '4.8 LPA',
  topPackage: '20 LPA',
  icon: BookOpen,
  color: '#224292',
  tagline: 'Learn. Grow. Succeed.',
  overview: 'This program offers a rigorous academic curriculum combined with industry-relevant hands-on training, preparing students for high-impact careers.',
  whyChoose: ['NBA Accredited', 'Experienced faculty', 'Industry partnerships', 'Placement assistance'],
  curriculum: [
    { year: 'Year 1 â€“ Foundation', semesters: ['Mathematics', 'Physics', 'Engineering Graphics', 'Programming Basics'] },
    { year: 'Year 2 â€“ Core', semesters: ['Core Subject I', 'Core Subject II', 'Core Subject III', 'Core Subject IV'] },
    { year: 'Year 3 â€“ Specialisation', semesters: ['Advanced Core I', 'Advanced Core II', 'Electives', 'Mini Project'] },
    { year: 'Year 4 â€“ Capstone', semesters: ['Internship', 'Final Project', 'Advanced Electives', 'Industry Training'] },
  ],
  faculty: [
    { name: 'Dr. Faculty 1', designation: 'HoD & Professor', experience: '18 Years', specialization: 'Core Domain', rating: 4.8 },
    { name: 'Mrs. Faculty 2', designation: 'Associate Professor', experience: '10 Years', specialization: 'Applied Domain', rating: 4.6 },
  ],
  labs: [
    { name: 'Core Lab', equipment: 'Modern equipment and instruments', icon: FlaskConical },
    { name: 'Specialization Lab', equipment: 'Advanced domain-specific tools', icon: Cpu },
  ],
  companies: ['TCS', 'Infosys', 'Wipro', 'L&T', 'HCLTech'],
  placementStats: { placed: '90%', avg: '4.5 LPA', top: '15 LPA', companies: '50+' },
  projects: ['Industry-sponsored Capstone Project', 'Research & Innovation Project', 'Mini Project (Sem 6)'],
  eligibility: ['10+2 with PCM / relevant subjects', 'Minimum 50% aggregate', 'TNEA rank required'],
})

const TABS = ['Overview', 'Vision & Mission', 'Syllabus', 'Faculty', 'Labs', 'Patents', 'Achievements', 'Awards', 'Innovative Practices']

const eventsList = [
  { name: "CMLR", url: "https://kbss.kiot.ac.in/case-method-of-learning-reflection/", course: "Both" },
  { name: "Inauguration 2025", url: "https://kbss.kiot.ac.in/mba-iev-inauguration-2025/", course: "Both" },
  { name: "Inauguration 2024", url: "https://kbss.kiot.ac.in/mba-iev-inauguration-2024/", course: "Both" },
  { name: "Explore to Evolve 2024", url: "https://kbss.kiot.ac.in/explore-to-evolve-2024/", course: "Both" },
  { name: "Induction Programme 2025", url: "https://kbss.kiot.ac.in/induction-programme-2025/", course: "Both" },
  { name: "Induction Programme 2024", url: "https://kbss.kiot.ac.in/induction-programme-2024/", course: "Both" },
  { name: "Induction Programme 2023", url: "https://kbss.kiot.ac.in/induction-programme-2023/", course: "Both" },
  { name: "Induction Programme 2022", url: "https://kbss.kiot.ac.in/induction-programme-2022/", course: "Both" },
  { name: "Outbound Training Yercaud 2025", url: "https://kbss.kiot.ac.in/outbound-training-yercaud-2025/", course: "Both" },
  { name: "Outbound Training Yercaud 2024", url: "https://kbss.kiot.ac.in/outbound-training-yercaud-2024/", course: "Both" },
  { name: "Orientation on Digital Marketing", url: "https://kbss.kiot.ac.in/digital-marketing/", course: "Both" },
  { name: "Orientation Programme 2025", url: "https://kbss.kiot.ac.in/orientation-programme-2025/", course: "Both" },
  { name: "TN Global Startup Summit 2025", url: "https://kbss.kiot.ac.in/global-startup-summit-2025/", course: "MBA-IEV" },
  { name: "Newsletter – GLIMPSE", url: "https://kbss.kiot.ac.in/newsletter/", course: "Both" },
  { name: "International Connect", url: "https://kbss.kiot.ac.in/international-connect/", course: "Both" },
  { name: "International Conference 2025", url: "https://kbss.kiot.ac.in/international-conference-2025/", course: "Both" },
  { name: "Frolics", url: "https://kbss.kiot.ac.in/frolics/", course: "MBA" },
  { name: "Abhiyantri", url: "https://kbss.kiot.ac.in/abhiyantri/", course: "MBA" },
  { name: "Advik", url: "https://kbss.kiot.ac.in/advik/", course: "MBA" },
  { name: "Impact i 2026", url: "https://kbss.kiot.ac.in/impacti-2026/", course: "MBA-IEV" },
  { name: "Fiducia", url: "https://kbss.kiot.ac.in/fiducia/", course: "MBA" },
  { name: "Market Survey", url: "https://kbss.kiot.ac.in/market-survey/", course: "MBA" },
  { name: "Freshers Day 2019", url: "https://kbss.kiot.ac.in/freshers-day-2019/", course: "MBA" },
  { name: "EDC", url: "https://kbss.kiot.ac.in/edc/", course: "MBA-IEV" },
  { name: "Recast Your Career", url: "https://kbss.kiot.ac.in/recast-your-career/", course: "Both" },
  { name: "TANCET", url: "https://kbss.kiot.ac.in/tancet/", course: "Both" },
  { name: "Career Guidance Cell", url: "https://kbss.kiot.ac.in/career-guidance-and-higher-education-cell/", course: "Both" },
  { name: "Clubs & Forums", url: "https://kbss.kiot.ac.in/clubs-forums/", course: "Both" },
  { name: "FDP", url: "https://kbss.kiot.ac.in/fdp/", course: "Both" },
  { name: "Webinar", url: "https://kbss.kiot.ac.in/webinar/", course: "Both" },
  { name: "News", url: "https://kbss.kiot.ac.in/news-media/", course: "Both" },
  { name: "Engagement Column", url: "https://kbss.kiot.ac.in/engagement-column/", course: "Both" }
]


const leadershipData = [
  {
    id: 'chairman',
    title: "Executive Chairman's Message",
    name: "Dr. PSS. Srinivasan",
    designation: "Founder & Executive Chairman, KIOT Trust",
    credentials: "B.E., M.Tech.(IIT-B), Ph.D., MISTE., ISHMT., FMFPI",
    image: srinivasanImg,
    email: "chairman@kiot.ac.in",
    paragraphs: [
      "Greetings!",
      "I believe that there are FIVE BIG PROBLEMS that confront us:\n1. Energy\n2. Water\n3. Food\n4. Healthcare\n5. Environment",
      "One cannot solve all of them, but everyone has a capacity to solve a bit of them. To solve the above said problem, the role of Technology and Management are 50% – 50%. You as a management graduate has a major role here.",
      "I strongly believe there are FOUR O’s that will rule the forthcoming two-decades: NanO, BiO, EnvirO, and CEO (the MBAs). The first 3 Os (Nano, Bio, and Environmental) are the technological solutions. The CEOs (the MBAs) have a significant role to play.",
      "We, at MBA@KIOT, will provide you n-number of opportunities for you to Aware, Associate and Achieve."
    ],
    signature: "Dr. PSS. Srinivasan"
  },
  {
    id: 'secretary',
    title: "Secretary's Message",
    name: "Dr. J. Kumar",
    designation: "Secretary, KIOTT",
    credentials: "B.E., M.Tech. (IIT-M), Ph.D. , FIE.",
    image: secretaryImg,
    email: "secretary@kiot.ac.in",
    paragraphs: [
      "Greetings!",
      "We are dedicated to providing our students with a world-class learning experience that prepares them for the challenges ahead, in addition to delivering a superior education. Through our collaborations with universities worldwide, we have come to understand education as a journey that goes beyond just academic achievement.",
      "The latest curriculum, paired with modern insights into engineering, technology, and research, along with innovative facilities, ensures that each student gains a substantial edge in advanced technical expertise and competencies. I extend a warm welcome to you at KIOT and all the opportunities it presents. Join us and immerse yourself in the KIOT experience!",
      "With best wishes,"
    ],
    signature: "Dr. J. Kumar"
  },
  {
    id: 'principal',
    title: "Principal's Message",
    name: "Dr. K. Visagavel",
    designation: "Principal, KIOT",
    credentials: "B.E., M.E., Ph.D., FIE.",
    image: principalImg,
    email: "principal@kiot.ac.in",
    paragraphs: [
      "Greetings!\nDear Students,",
      "Welcome to the Knowledge Institute of Technology, Salem!",
      "At KIOT, we aim to provide transformative education that blends academic rigor with practical skills to shape the leaders of tomorrow. Our MBA programs, including the General Management track and the Innovation, Entrepreneurship, and Venture Development (IEV) specialization, are thoughtfully designed to equip you with the expertise and vision to excel in a dynamic global business environment.",
      "The MBA General Management program lays a solid foundation in critical business disciplines, fostering analytical thinking and decision-making capabilities. With opportunities to learn from experienced faculty, engage in real-world projects, and develop leadership skills, this program prepares you to excel across industries and functions.",
      "The MBA IEV program caters to aspiring entrepreneurs and innovators, providing a unique platform to turn ideas into impactful ventures. It encourages creativity, critical thinking, and hands-on learning through incubation opportunities and mentorship from industry leaders. This program not only nurtures entrepreneurial potential but also empowers you to contribute to society through sustainable and innovative solutions.",
      "We at KIOT are committed to fostering a holistic learning environment, enriched by state-of-the-art infrastructure, industry collaborations, and extracurricular opportunities. I encourage you to actively participate in academic and co-curricular activities, network with peers and mentors, and embrace the culture of continuous learning.",
      "Remember, your journey at KIOT is not just about earning a degree; it is about transforming your potential into purpose. Together, let us strive to make a positive difference in our communities and the world.",
      "Wishing you a fulfilling and successful academic journey ahead!",
      "Warm regards,"
    ],
    signature: "Dr. K. Visagavel"
  },
  {
    id: 'director',
    title: "Director's Message",
    name: "Dr. A. Stephen",
    designation: "Director – MBA-General & MBA-IEV",
    credentials: "BA., MA., MBA., M.Phil., PGDHRM, Ph.D.",
    image: stephenImg,
    email: "directorkbs@kiot.ac.in",
    paragraphs: [
      "Dear Students,",
      "Welcome to the MBA and MBA IEV programs!",
      "We are happy to have you on this transformative journey.",
      "Our carefully designed curriculum will equip you with essential skills in Management, Leadership, and Entrepreneurship.",
      "The MBA General Management program established in the year 2011, focuses on enhancing your strategic decision-making and leadership abilities through case studies and group projects. Our experienced faculty and visiting faculty from industry, will guide you in applying theory to real-world situations.",
      "The MBA IEV program emphasizes innovation and entrepreneurial thinking. You’ll work on real start-up projects and collaborate with incubation centres, preparing you to identify opportunities and create successful ventures.",
      "We encourage you to engage actively with your peers and society. Building relationships and participating in discussions will enrich your experience and contribute to your success.",
      "Your enthusiasm for learning and willingness to tackle real-world challenges will be key to your growth. Embrace every opportunity to develop personally and professionally. May you find inspiration and forge lasting connections.",
      "Wishing to Succeed.",
      "Warm Regards,"
    ],
    signature: "Dr. A. Stephen"
  }
];

const mbaFacultyImages = {
  'Dr. A. Stephen': mbaDirectorImgNew,
  'Dr. T. Venkatesan': mbaVenkatesanImgNew,
  'Dr. R. Ramesh': mbaRameshImgNew,
  'Prof. G. Padmanaban': mbaPadmanabanImgNew,
  'Prof. P. Revathi': mbaRevathiImgNew,
  'Prof. S. Vimala': mbaVimalaImgNew,
  'Prof. T. Suganya': mbaSuganyaImgNew,
  'Prof. D. Senchulakshmi': mbaSenchulakshmiImgNew,
  'Prof. A. Musthaffa': mbaMusthaffaImgNew,
  'Prof. P. Manikandan': mbaManikandanImgNew,
  'Dr. R. Ambaliga Bharathi Kavithai': mbaAmbaligaImgNew,
  'Prof. Arivazhagan Veerapandiyan': mbaArivazhaganImgNew
};

const mbaIevFacultyImages = {
  'Dr. S. Vijayakumar': ievVijayakumarImg,
  'Prof. M. Bharani Eswari': ievBharaniImg,
  'Prof. M. Rubini': ievRubiniImg,
  'Prof. M. Gowrishankar': ievGowrishankarImg,
  'Prof. S. Saravanan': ievSaravananImg
};

// â”€â”€â”€ Accordion Item â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
function AccordionItem({ title, children, defaultOpen = false }) {
  const [open, setOpen] = useState(defaultOpen)
  return (
    <div className="border border-[#E5EDF8] rounded-2xl overflow-hidden">
      <button
        onClick={() => setOpen(o => !o)}
        className="w-full flex items-center justify-between p-5 bg-white hover:bg-[#F8FAFC] transition-colors text-left"
      >
        <span className="font-bold font-graphik text-[#224292] text-[15px]">{title}</span>
        <ChevronDown size={18} className={`text-[#ffc107] transition-transform duration-300 ${open ? 'rotate-180' : ''}`} />
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0 }}
            animate={{ height: 'auto' }}
            exit={{ height: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <div className="border-t border-[#E5EDF8] bg-[#F8FAFC] px-5 py-4">
              {children}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

// â”€â”€â”€ Main Component â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
export default function CourseDetailPage({ overrides }) {
  const { courseId: paramCourseId } = useParams()
  const courseId = overrides?.courseId || paramCourseId
  const navigate = useNavigate()
  const [activeTab, setActiveTab] = useState('Overview')
  const [outcomeTab, setOutcomeTab] = useState(null)
  const [selectedFaculty, setSelectedFaculty] = useState(null)
  const selectedFacultyImage = selectedFaculty
    ? (courseId === 'mba-general'
        ? (mbaFacultyImages[selectedFaculty.name] || selectedFaculty.image)
        : courseId === 'mba-iev'
          ? (mbaIevFacultyImages[selectedFaculty.name] || selectedFaculty.image)
          : selectedFaculty.image)
    : null;
  const [openLabIndices, setOpenLabIndices] = useState([0])
  const [selectedLeaderId, setSelectedLeaderId] = useState('chairman')
  const tabsRef = useRef(null)
  const labsDetailRef = useRef(null)

  const course = courseData[courseId] || defaultCourse(courseId)
  const Icon = course.icon

  const courseTabs = courseId === 'be-eee'
    ? ['Overview', 'Vision & Mission', 'Knowledge and Attitude Profile', 'Syllabus', 'Faculty', 'Labs', 'Patents', 'Achievements', 'Awards', 'Innovative Practices']
    : (courseId === 'btech-csbs'
        ? ['Overview', 'Vision & Mission', 'Syllabus', 'Faculty', 'Labs', 'Patents', 'Awards', 'Clubs', 'Innovative Practices']
        : TABS);

  const [activeObjectiveTab, setActiveObjectiveTab] = useState('PEO')

  const objectiveData = [
    { id: 'PEO', icon: Target, title: 'Program Educational Objectives', content: course.peo, color: 'text-[#224292]', bg: 'bg-[#224292]/5', activeBg: 'bg-[#224292]', iconColor: 'text-[#ffc107]' },
    { id: 'PO', icon: Layers, title: 'Program Outcomes', content: course.po, color: 'text-[#ffc107]', bg: 'bg-[#ffc107]/5', activeBg: 'bg-[#ffc107]', iconColor: 'text-[#224292]' },
    { id: 'PSO', icon: Star, title: 'Program Specific Outcomes', content: course.pso, color: 'text-[#224292]', bg: 'bg-[#224292]/5', activeBg: 'bg-[#224292]', iconColor: 'text-[#ffc107]' }
  ]

  // Force window to scroll to absolute top on initial page load and course change
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
    setActiveTab('Overview'); // Reset to first tab for new departments

    // Safety delay to override any browser-native scroll restoration
    const timer = setTimeout(() => {
      window.scrollTo(0, 0);
    }, 5);
    return () => clearTimeout(timer);
  }, [courseId]);

  const activeObj = objectiveData.find(o => o.id === activeObjectiveTab)

  // Ensure tab content always scrolls to top when switching
  const isFirstMount = useRef(true);

  // Handle scroll to tabs ONLY when the user clicks a tab manually
  useEffect(() => {
    // If it's the first time the department loads, OR we are just on 'Overview', don't scroll down
    if (isFirstMount.current || activeTab === 'Overview') {
      isFirstMount.current = false;
      return;
    }

    if (tabsRef.current) {
      const headerOffset = 150;
      const element = tabsRef.current;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });

      setTimeout(() => {
        const currentTop = element.getBoundingClientRect().top + window.pageYOffset - headerOffset;
        if (Math.abs(window.pageYOffset - currentTop) > 10) {
          window.scrollTo({ top: currentTop, behavior: 'instant' });
        }
      }, 300);
    }
  }, [activeTab]);

  return (
    <div className="min-h-screen bg-[#F8FAFC] font-graphik text-[#333333]">

      {/* Hero */}
      <section className="relative overflow-hidden bg-[#224292] pt-4 pb-6 md:pt-8 md:pb-10">
        {/* Tech Lining / Circuit Background Layer */}
        <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
          <svg width="100%" height="100%" className="absolute inset-0">
            <defs>
              <linearGradient id="lineGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#ffffff" stopOpacity="0.05" />
                <stop offset="50%" stopColor="#ffc107" stopOpacity="0.25" />
                <stop offset="100%" stopColor="#ffffff" stopOpacity="0.05" />
              </linearGradient>
              <filter id="glow">
                <feGaussianBlur stdDeviation="2.5" result="coloredBlur" />
                <feMerge>
                  <feMergeNode in="coloredBlur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
            </defs>

            {/* Branched Circuit Lines - Bottom Focus */}
            <g stroke="url(#lineGrad)" strokeWidth="1" fill="none" className="opacity-30">
              <path d="M-100 280 L200 280 L240 240 L600 240 L640 280 L1400 280" />
              <path d="M-100 320 L150 320 L200 370 L500 370 L550 320 L1400 320" />
              <path d="M0 380 L400 380 L440 420 L900 420 L940 380 L1400 380" />
              <path d="M-100 150 L100 150 L140 110 L400 110" />
              <path d="M1400 150 L1100 150 L1060 110 L800 110" />
            </g>
          </svg>
        </div>

        <div className="absolute -right-32 -top-32 w-[500px] h-[500px] rounded-full bg-[#ffc107]/5 blur-[100px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Back button */}
          {!(courseId === 'mba-general' || courseId === 'mba-iev') && (
            <button
              onClick={() => {
                const category = (courseId === 'science-humanities') ? 'undergraduate' : ((courseId && (courseId.startsWith('be-') || courseId.startsWith('btech-'))) ? 'undergraduate' : 'postgraduate');
                navigate(`/academics/${category}`);
              }}
              className="mb-4 inline-flex items-center gap-2 text-white/60 hover:text-white text-[13px] font-bold font-graphik transition-colors"
            >
              <ArrowLeft size={15} /> Back to Academics
            </button>
          )}

          <div className={`flex flex-col lg:flex-row gap-8 lg:gap-12 ${(courseId === 'mba-general' || courseId === 'mba-iev') ? 'lg:items-end' : 'lg:items-center'
            }`}>
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-5 flex-wrap">
                <span className="px-3.5 py-1.5 rounded-full bg-[#ffc107]/20 border border-[#ffc107]/40 text-[#ffc107] text-xs font-bold font-graphik">
                  {course.affiliation}
                </span>
                {course.accreditation && (
                  <span className="px-3.5 py-1.5 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-emerald-300 text-xs font-bold font-graphik">
                    {course.accreditation}
                  </span>
                )}
              </div>
              <h1 className={`font-bold font-graphik text-white leading-[1.15] ${courseId === 'mba-general' || courseId === 'mba-iev'
                ? 'text-xl md:text-xl lg:text-[1.75rem] mb-4 mt-6'
                : 'text-2xl md:text-3xl lg:text-[2.6rem] mb-3'
                }`}>
                {course.name}
              </h1>
              {!(courseId === 'mba-general' || courseId === 'mba-iev') && (
                <p className="text-[#ffc107] font-semibold font-graphik text-base md:text-lg mb-6">{course.tagline}</p>
              )}

              {/* Course CTA Buttons */}
              {!(courseId === 'mba-general' || courseId === 'mba-iev') && (
                <div className="flex flex-wrap gap-4">
                  {course.quickApply ? (
                    <a
                      href={course.quickApply}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-[#ffc107] text-[#224292] font-bold font-graphik text-[14px] hover:bg-[#ffca2c] hover:shadow-xl transition-all shadow-lg shadow-[#ffc107]/25 hover:scale-[1.02]"
                    >
                      Quick Apply <ArrowRight size={15} />
                    </a>
                  ) : (
                    <button
                      onClick={() => navigate('/admissions')}
                      className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-[#ffc107] text-[#224292] font-bold font-graphik text-[14px] hover:bg-[#ffca2c] hover:shadow-xl transition-all shadow-lg shadow-[#ffc107]/25 hover:scale-[1.02]"
                    >
                      Quick Apply <ArrowRight size={15} />
                    </button>
                  )}
                  {course.brochure && (
                    <a
                      href={course.brochure}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-white text-[#224292] font-bold font-graphik text-[14px] hover:bg-slate-100 hover:shadow-xl transition-all shadow-lg hover:scale-[1.02]"
                    >
                      Brochure <Download size={15} />
                    </a>
                  )}
                </div>
              )}
            </div>

            {/* Right Column: Rounded Rectangle Image with Gold Border or Stats for MBA */}
            <div className="lg:w-[480px] xl:w-[520px] flex flex-col gap-6 shrink-0 relative">
              {courseId === 'mba-general' || courseId === 'mba-iev' ? (
                <>
                  <div className="grid grid-cols-2 gap-4 relative z-10">
                    {/* Card 1 */}
                    <motion.div
                      initial={{ opacity: 0, y: 60 }}
                      animate={{
                        opacity: 1,
                        y: [0, -10, 0]
                      }}
                      whileHover={{ scale: 1.05 }}
                      transition={{
                        opacity: { duration: 0.8 },
                        y: {
                          repeat: Infinity,
                          duration: 4,
                          ease: "easeInOut"
                        },
                        scale: { duration: 0.2 }
                      }}
                      className="bg-white/10 backdrop-blur-md border-2 border-[#ffc107]/80 text-white hover:bg-[#ffc107] hover:text-[#224292] rounded-2xl p-3 md:p-5 flex flex-col items-center text-center justify-center transition-all duration-300 hover:shadow-[0_0_35px_rgba(255,193,7,0.35)] group min-h-[110px] md:min-h-[150px] cursor-pointer"
                    >
                      <Trophy className="text-[#ffc107] group-hover:text-[#224292] mb-1.5 md:mb-2 w-5 h-5 md:w-7 md:h-7 group-hover:animate-bounce transition-colors duration-300" />
                      <span className="text-white group-hover:text-[#224292] font-extrabold text-lg md:text-2xl lg:text-3xl tracking-tight transition-colors duration-300">1st</span>
                      <span className="text-white/95 group-hover:text-[#224292]/90 text-[9px] md:text-[11px] lg:text-[12px] font-bold mt-0.5 md:mt-1 leading-snug transition-colors duration-300">Position Among in Salem – Namakkal Region</span>
                    </motion.div>
                    {/* Card 2 */}
                    <motion.div
                      initial={{ opacity: 0, y: -60 }}
                      animate={{
                        opacity: 1,
                        y: [0, -14, 0]
                      }}
                      whileHover={{ scale: 1.05 }}
                      transition={{
                        opacity: { duration: 0.8, delay: 0.1 },
                        y: {
                          repeat: Infinity,
                          duration: 4.6,
                          ease: "easeInOut",
                          delay: 0.2
                        },
                        scale: { duration: 0.2 }
                      }}
                      className="bg-white/10 backdrop-blur-md border-2 border-[#ffc107]/80 text-white hover:bg-[#ffc107] hover:text-[#224292] rounded-2xl p-3 md:p-5 flex flex-col items-center text-center justify-center transition-all duration-300 hover:shadow-[0_0_35px_rgba(255,193,7,0.35)] group min-h-[110px] md:min-h-[150px] cursor-pointer"
                    >
                      <Award className="text-[#ffc107] group-hover:text-[#224292] mb-1.5 md:mb-2 w-5 h-5 md:w-7 md:h-7 group-hover:animate-pulse transition-colors duration-300" />
                      <span className="text-white group-hover:text-[#224292] font-extrabold text-lg md:text-2xl lg:text-3xl tracking-tight transition-colors duration-300">24th</span>
                      <span className="text-white/95 group-hover:text-[#224292]/90 text-[9px] md:text-[11px] lg:text-[12px] font-bold mt-0.5 md:mt-1 leading-snug transition-colors duration-300">Position in the State of Tamil Nadu</span>
                    </motion.div>
                    {/* Card 3 */}
                    <motion.div
                      initial={{ opacity: 0, y: 60 }}
                      animate={{
                        opacity: 1,
                        y: [0, -12, 0]
                      }}
                      whileHover={{ scale: 1.05 }}
                      transition={{
                        opacity: { duration: 0.8, delay: 0.2 },
                        y: {
                          repeat: Infinity,
                          duration: 4.3,
                          ease: "easeInOut",
                          delay: 0.4
                        },
                        scale: { duration: 0.2 }
                      }}
                      className="bg-white/10 backdrop-blur-md border-2 border-[#ffc107]/80 text-white hover:bg-[#ffc107] hover:text-[#224292] rounded-2xl p-3 md:p-5 flex flex-col items-center text-center justify-center transition-all duration-300 hover:shadow-[0_0_35px_rgba(255,193,7,0.35)] group min-h-[110px] md:min-h-[150px] cursor-pointer"
                    >
                      <Star className="text-[#ffc107] group-hover:text-[#224292] mb-1.5 md:mb-2 w-5 h-5 md:w-7 md:h-7 group-hover:rotate-12 transition-transform transition-colors duration-300" />
                      <span className="text-white group-hover:text-[#224292] font-extrabold text-lg md:text-2xl lg:text-3xl tracking-tight transition-colors duration-300">6th</span>
                      <span className="text-white/95 group-hover:text-[#224292]/90 text-[9px] md:text-[11px] lg:text-[12px] font-bold mt-0.5 md:mt-1 leading-snug transition-colors duration-300">Position in Coimbatore Region</span>
                    </motion.div>
                    {/* Card 4 */}
                    <motion.div
                      initial={{ opacity: 0, y: -60 }}
                      animate={{
                        opacity: 1,
                        y: [0, -8, 0]
                      }}
                      whileHover={{ scale: 1.05 }}
                      transition={{
                        opacity: { duration: 0.8, delay: 0.3 },
                        y: {
                          repeat: Infinity,
                          duration: 3.8,
                          ease: "easeInOut",
                          delay: 0.1
                        },
                        scale: { duration: 0.2 }
                      }}
                      className="bg-white/10 backdrop-blur-md border-2 border-[#ffc107]/80 text-white hover:bg-[#ffc107] hover:text-[#224292] rounded-2xl p-3 md:p-5 flex flex-col items-center text-center justify-center transition-all duration-300 hover:shadow-[0_0_35px_rgba(255,193,7,0.35)] group min-h-[110px] md:min-h-[150px] cursor-pointer"
                    >
                      <TrendingUp className="text-[#ffc107] group-hover:text-[#224292] mb-1.5 md:mb-2 w-5 h-5 md:w-7 md:h-7 group-hover:translate-y-[-2px] transition-transform transition-colors duration-300" />
                      <span className="text-white group-hover:text-[#224292] font-extrabold text-lg md:text-2xl lg:text-3xl tracking-tight transition-colors duration-300">90%</span>
                      <span className="text-white/95 group-hover:text-[#224292]/90 text-[9px] md:text-[11px] lg:text-[12px] font-bold mt-0.5 md:mt-1 leading-snug transition-colors duration-300">Placement Consistently</span>
                    </motion.div>
                  </div>

                  {/* MBA CTA Buttons */}
                  <div className="flex flex-wrap gap-4 justify-center relative z-10 mt-2">
                    {course.quickApply ? (
                      <a
                        href={course.quickApply}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-[#ffc107] text-[#224292] font-bold font-graphik text-[14px] hover:bg-[#ffca2c] hover:shadow-xl transition-all shadow-lg shadow-[#ffc107]/25 hover:scale-[1.02]"
                      >
                        Quick Apply <ArrowRight size={15} />
                      </a>
                    ) : (
                      <button
                        onClick={() => navigate('/admissions')}
                        className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-[#ffc107] text-[#224292] font-bold font-graphik text-[14px] hover:bg-[#ffca2c] hover:shadow-xl transition-all shadow-lg shadow-[#ffc107]/25 hover:scale-[1.02]"
                      >
                        Quick Apply <ArrowRight size={15} />
                      </button>
                    )}
                    {course.brochure && (
                      <a
                        href={course.brochure}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-white text-[#224292] font-bold font-graphik text-[14px] hover:bg-slate-100 hover:shadow-xl transition-all shadow-lg hover:scale-[1.02]"
                      >
                        Brochure <Download size={15} />
                      </a>
                    )}
                  </div>
                </>
              ) : (
                <div className="relative group">
                  {/* Glow effect behind image */}
                  <div className="absolute -inset-3 bg-[#ffc107]/15 rounded-[2rem] blur-2xl opacity-0 group-hover:opacity-100 transition-all duration-700" />
                  <div className="relative h-[260px] lg:h-[320px] w-full rounded-[1.5rem] overflow-hidden border-[3px] border-[#ffc107]/80 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.4)] transition-transform duration-700 hover:scale-[1.02]">
                    <img
                      src={course.bannerImage || "https://images.unsplash.com/photo-1562774053-701939374585?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"}
                      alt={course.name}
                      className="w-full h-full object-cover scale-105 group-hover:scale-100 transition-transform duration-1000"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0a1a40]/40 via-transparent to-transparent" />
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
        {/* Hand-drawn department-specific schematic/pencil drawing at the bottom left of the hero, or MBA background image */}
        {(courseId === 'mba-general' || courseId === 'mba-iev') ? (
          <div className="absolute inset-y-0 left-0 w-full lg:w-[60%] opacity-[0.75] pointer-events-none z-0 overflow-hidden hidden lg:block">
            <img src={mbaHomeImg} className="w-full h-full object-cover object-left" alt="" />
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#224292]/40 to-[#224292]" />
          </div>
        ) : (
          <div className="absolute bottom-[-10px] left-[18%] w-full lg:w-[60%] max-w-[750px] h-[130px] opacity-[0.24] pointer-events-none z-0">
            {getDepartmentSchematic(courseId)}
          </div>
        )}
      </section>

      {/* --- MOBILE TAB NAVIGATION (Pill Style) --- */}
      <div className="md:hidden bg-[#224292] py-8 px-6 border-t border-white/10">
        <div className="flex flex-wrap justify-center gap-3">
          {courseTabs.map(tab => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-5 py-2.5 rounded-full text-[12px] font-bold font-graphik transition-all border-2 ${activeTab === tab
                ? 'bg-[#ffc107] border-[#ffc107] text-[#224292] shadow-lg shadow-[#ffc107]/20 scale-105'
                : 'bg-white/5 border-white/20 text-white hover:bg-white/10'
                }`}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>

      {/* --- DESKTOP TAB NAVIGATION (Pill Design) --- */}
      <div ref={tabsRef} className="hidden md:block sticky top-[104px] z-30 bg-[#224292] border-b border-white/10 shadow-xl">
        <div className="w-full px-6 lg:px-12 py-5">
          <div className="flex flex-wrap justify-center gap-3 lg:gap-4 max-w-7xl mx-auto">
            {courseTabs.map(tab => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`whitespace-nowrap px-6 py-2.5 text-[13px] font-black font-graphik transition-all rounded-full border-2 tracking-wide ${activeTab === tab
                  ? 'bg-[#ffc107] border-[#ffc107] text-[#224292] shadow-lg shadow-[#ffc107]/20 scale-105'
                  : 'bg-transparent border-white/20 text-white hover:border-white/50 hover:bg-white/5'
                  }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Tab Content */}
      <div className="w-full px-4 md:px-12 py-10">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.3 }}
          >
            {/* --- OVERVIEW --- */}
            {activeTab === 'Overview' && (
              <div className="space-y-8">
                {/* Full Width About Section */}
                <div className="bg-transparent md:bg-white md:rounded-[2.5rem] md:border md:border-[#DEE7F4] p-0 md:p-14 md:shadow-2xl md:shadow-blue-900/5 transition-all relative overflow-hidden group">
                  {/* Decorative Background Pattern */}
                  <div className="absolute top-0 right-0 w-64 h-64 bg-slate-50 rounded-full -mr-32 -mt-32 blur-3xl group-hover:bg-blue-50 transition-colors duration-700" />
                  <div className="absolute bottom-0 left-0 w-32 h-32 bg-[#ffc107]/5 rounded-full -ml-16 -mb-16 blur-2xl" />



                  <h2 className="text-2xl md:text-3xl font-bold font-graphik mb-8 flex items-center gap-3 tracking-tighter not-italic normal-case">
                    {courseId === 'mba-general' || courseId === 'mba-iev' ? (
                      <>
                        <span className="text-[#224292]">Welcome to</span> <span className="text-[#ffc107]">MBA</span>
                      </>
                    ) : (
                      <>
                        <span className="text-[#224292]">About the</span> <span className="text-[#ffc107]">Program</span>
                      </>
                    )}
                  </h2>

                  <div className="relative z-10 mb-12">
                    {Array.isArray(course.overview) ? (
                      <div className="space-y-6">
                        {course.overview.map((para, idx) => (
                          <p key={idx} className="text-black leading-relaxed text-[16px] font-normal font-graphik text-justify not-italic">
                            {para}
                          </p>
                        ))}
                      </div>
                    ) : (
                      <p className="text-black leading-relaxed text-[16px] font-normal font-graphik text-justify not-italic">
                        {course.overview}
                      </p>
                    )}
                  </div>

                  {/* Integrated Quick Insight Metrics - 4 Column Row */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 pt-10 border-t border-slate-100">
                    {[
                      { label: 'Timeframe', value: course.duration, icon: Clock, color: 'text-blue-600', bg: 'bg-blue-100' },
                      { label: 'Intake', value: `${course.intake} Students`, icon: Users, color: 'text-amber-600', bg: 'bg-amber-100' },
                      { label: 'Affiliations', value: course.affiliation, icon: Building2, color: 'text-emerald-600', bg: 'bg-emerald-100' },
                      { label: 'Standard', value: course.accreditation, icon: Award, color: 'text-purple-600', bg: 'bg-purple-100' },
                    ].map(item => (
                      <div key={item.label} className="group p-6 rounded-xl border border-slate-200 bg-slate-50/50 hover:bg-white hover:border-[#ffc107] hover:shadow-xl transition-all duration-300 flex flex-col justify-between">
                        <div>
                          <p className="text-black font-black text-[9px] tracking-[0.2em] mb-4 opacity-40 group-hover:opacity-100 transition-opacity">{item.label}</p>
                          <div className="flex items-center gap-4">
                            <div className={`w-10 h-10 rounded-lg ${item.bg} flex items-center justify-center ${item.color} group-hover:bg-[#ffc107] group-hover:text-[#224292] transition-all duration-500`}>
                              <item.icon size={20} />
                            </div>
                            <span className="text-black font-bold font-graphik text-[14px] leading-tight">{item.value}</span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Uniqueness of MBA (for MBA) or Key Features (for other courses) */}
                {courseId === 'mba-general' || courseId === 'mba-iev' ? (
                  <div className="bg-white rounded-[2rem] border border-[#DEE7F4] p-8 md:p-12 shadow-xl shadow-blue-900/5">
                    <h2 className="text-2xl font-bold font-graphik text-[#224292] mb-6 flex items-center gap-3">
                      <span className="w-1.5 h-6 bg-[#ffc107] rounded-full inline-block" />
                      Uniqueness of MBA
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                      {[
                        "Course delivery through a unique blend of novel teaching methodologies",
                        "Emphasis on applied learning through market study and other slew of activities",
                        "Exposure to contemporary practices in industry through weekly Executive Interaction Programme",
                        "Project internship with a stipend of Rs.5000 to Rs.15000, for deserving students",
                        "Key courses handled by experts from relevant industries",
                        "300 hours of structured training to hone functional and life skills",
                        "Career Guidance and Counseling through professional counselors and faculty mentors",
                        "Over 13 associations, forum, cell and club for nurturing individual talents, foster innovativeness and overall self-development",
                        "Entire afternoon sessions are earmarked for experiential learning",
                        "Value added certification courses",
                        "Exclusive placement officer, round the year placement",
                        "Smart classrooms, Wi-Fi Computer Centre, Exclusive Seminar Hall and Dedicated Digital Library"
                      ].map((item, idx) => (
                        <motion.div
                          key={idx}
                          initial={{ opacity: 0, y: 20 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: idx * 0.05 }}
                          className="relative group bg-white rounded-2xl p-6 shadow-md border border-slate-100 hover:shadow-xl transition-all duration-500 overflow-hidden text-center flex flex-col items-center justify-center h-full hover:scale-[1.02]"
                        >
                          <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-[#224292] to-[#ffc107]" />
                          <div className="relative z-10 flex flex-col items-center">
                            <div className="w-10 h-10 rounded-full bg-[#224292]/5 flex items-center justify-center text-[#224292] mb-3 group-hover:bg-[#224292] group-hover:text-white transition-colors duration-300">
                              <CheckCircle2 size={20} />
                            </div>
                            <div className="w-10 h-1 bg-[#ffc107] mb-4 rounded-full group-hover:w-16 transition-all duration-500" />
                            <p className="text-[#1a1a1a] text-[13.5px] leading-relaxed font-semibold font-graphik text-center">
                              {item}
                            </p>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                ) : (
                  course.whyChoose && course.whyChoose.length > 0 && (
                    <div className="bg-white rounded-[2rem] border border-[#DEE7F4] p-8 md:p-12 shadow-xl shadow-blue-900/5">
                      <h2 className="text-2xl font-bold font-graphik text-[#224292] mb-6 flex items-center gap-3">
                        <span className="w-1.5 h-6 bg-[#ffc107] rounded-full inline-block" />
                        Key Features
                      </h2>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {course.whyChoose.map((item, idx) => (
                          <motion.div
                            key={idx}
                            whileHover={{ x: 6 }}
                            className="flex gap-3 items-start p-4 rounded-xl bg-slate-50 border border-slate-100 hover:border-[#ffc107] hover:shadow-md transition-all"
                          >
                            <CheckCircle2 size={18} className="text-[#224292] mt-0.5 shrink-0" />
                            <p className="text-[#333333] font-medium font-graphik text-[14px] leading-relaxed">{item}</p>
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  )
                )}

                {courseId === 'mba-general' && (
                  <div className="space-y-8">
                    {/* General Teaching Methodology Description */}
                    <div className="bg-white rounded-[2rem] border border-[#DEE7F4] p-8 md:p-12 shadow-xl shadow-blue-900/5">
                      <h2 className="text-2xl font-bold font-graphik text-[#224292] mb-6 flex items-center gap-3">
                        <span className="w-1.5 h-6 bg-[#ffc107] rounded-full inline-block" />
                        Teaching Methodology
                      </h2>
                      <p className="text-[#333333] leading-relaxed text-[15px] md:text-[16px] font-normal font-graphik text-justify">
                        The term teaching method refers to the general principles, pedagogy and management strategies used for classroom instruction. Teaching methodology can be organized into two major parameters: a teacher-centered approach and a student-centered approach. At MBA@KIOT we focus on conceptual clarity, experiential learning and the ability to apply the concepts learnt in real time situations through case studies and Business simulations. This paves way for students to be nurtured as an efficient manager. The teaching learning process is carried out by resourceful faculty team with varied expertise that has imbibed rich cumulative academic and industrial experience. The persistent and enduring academic rigor is inculcated in each student which elevates them to be a dynamic manager.
                      </p>
                    </div>

                    {/* Methodologies Adopted Section */}
                    <div className="bg-white rounded-[2rem] border border-[#DEE7F4] p-8 md:p-12 shadow-xl shadow-blue-900/5 space-y-12">
                      <div>
                        <h3 className="text-xl md:text-2xl font-bold font-graphik text-[#224292] mb-8 flex items-center gap-3">
                          <span className="w-1.5 h-6 bg-[#ffc107] rounded-full inline-block" />
                          Some of the methodologies adopted by us are listed
                        </h3>

                        {/* Methodology 1: Activity-based learning */}
                        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
                          {/* Picture Column */}
                          <div className="lg:col-span-6 flex flex-col">
                            <div className="relative group w-full h-full flex flex-col">
                              <div className="absolute -inset-2 bg-gradient-to-r from-[#224292] to-[#ffc107] rounded-2xl blur-lg opacity-10 group-hover:opacity-20 transition duration-500" />
                              <div className="relative bg-white p-2 rounded-2xl border border-slate-100 shadow-md flex-1 flex flex-col">
                                <img
                                  src={mbaPicture1}
                                  alt="Methodologies Adopted - Activity-Based Learning"
                                  className="w-full h-full rounded-xl object-cover shadow-sm min-h-[200px] lg:min-h-0 lg:h-full flex-1"
                                />
                              </div>
                            </div>
                          </div>

                          {/* Content Column (Wrapped in matching card) */}
                          <div className="lg:col-span-6 flex flex-col">
                            <div className="relative bg-white p-6 md:p-8 rounded-2xl border border-slate-100 shadow-md flex-1 flex flex-col justify-center">
                              <div className="space-y-4">
                                <h4 className="text-lg font-bold font-graphik text-[#224292] flex items-center gap-2">
                                  <span className="w-2 h-2 rounded-full bg-[#ffc107]" />
                                  Activity-based learning:
                                </h4>
                                <p className="text-[#333333] leading-relaxed text-[15px] md:text-[16px] font-normal font-graphik text-justify">
                                  Activity-based learning is the process of learning by doing. As opposed to asking students to simply listen and take notes, activity-based learning encourages students to actively participate in their own learning experience through practical activities such as problem-solving and independent investigation.
                                </p>
                                <p className="text-[#333333] leading-relaxed text-[15px] md:text-[16px] font-normal font-graphik text-justify">
                                  By encouraging students to explore experiment and learn independently through activity-based techniques, KBSS equip students with skills in problem-solving, critical analysis and creativity.
                                </p>
                              </div>

                              <div className="pt-4 border-t border-slate-100 mt-4">
                                <p className="font-bold text-[#224292] text-[15px] mb-3">We offer interactive learning forums based around:</p>
                                <ul className="space-y-3">
                                  {[
                                    { title: "Exploration", desc: "gathering knowledge and acquiring skills through active investigation." },
                                    { title: "Experimentation", desc: "gathering knowledge through experience." },
                                    { title: "Expression", desc: "encouraging to express their views through presentation." }
                                  ].map((item, idx) => (
                                    <li key={idx} className="flex items-start gap-3">
                                      <div className="w-6 h-6 rounded-full bg-[#ffc107]/20 flex items-center justify-center text-[#224292] shrink-0 mt-0.5 font-bold text-xs">
                                        {idx + 1}
                                      </div>
                                      <p className="text-[#333333] text-[14px] md:text-[15px] leading-relaxed font-graphik">
                                        <strong className="text-[#224292]">{item.title}</strong> – {item.desc}
                                      </p>
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Divider line between methodologies */}
                      <div className="h-px bg-slate-100 w-full" />

                      {/* Methodology 2: Group Activities */}
                      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
                        {/* Content Column (Wrapped in matching card) */}
                        <div className="lg:col-span-6 flex flex-col order-2 lg:order-1">
                          <div className="relative bg-white p-6 md:p-8 rounded-2xl border border-slate-100 shadow-md flex-1 flex flex-col justify-center">
                            <div className="space-y-4">
                              <h4 className="text-lg font-bold font-graphik text-[#224292] flex items-center gap-2">
                                  <span className="w-2 h-2 rounded-full bg-[#ffc107]" />
                                  Group Activities:
                              </h4>
                              <p className="text-[#333333] leading-relaxed text-[15px] md:text-[16px] font-normal font-graphik text-justify">
                                Student’s interactions and discussions with fellow classmates allow the group to construct new knowledge, place it within a conceptual framework of existing knowledge, and then refine and assess what they know and do not know. Group activities create more opportunities for critical thinking and can promote student learning and achievement.
                              </p>
                              <p className="text-[#333333] leading-relaxed text-[15px] md:text-[16px] font-normal font-graphik text-justify">
                                Group activities gives students the opportunity to engage in processing information, evaluating and solving problems, as well as management skills through the use of roles within groups, and assessment skills involved in assessing options to make decisions about their group’s final answer.
                              </p>
                            </div>
                          </div>
                        </div>

                        {/* Picture Column */}
                        <div className="lg:col-span-6 flex flex-col order-1 lg:order-2">
                          <div className="relative group w-full h-full flex flex-col">
                            <div className="absolute -inset-2 bg-gradient-to-r from-[#224292] to-[#ffc107] rounded-2xl blur-lg opacity-10 group-hover:opacity-20 transition duration-500" />
                            <div className="relative bg-white p-2 rounded-2xl border border-slate-100 shadow-md flex-1 flex flex-col">
                              <img
                                src={mbaPicture2}
                                alt="Methodologies Adopted - Group Activities"
                                className="w-full h-full rounded-xl object-cover shadow-sm min-h-[200px] lg:min-h-0 lg:h-full flex-1"
                              />
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Divider line between methodologies */}
                      <div className="h-px bg-slate-100 w-full" />

                      {/* Methodology 3: Seminar */}
                      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
                        {/* Picture Column */}
                        <div className="lg:col-span-6 flex flex-col">
                          <div className="relative group w-full h-full flex flex-col">
                            <div className="absolute -inset-2 bg-gradient-to-r from-[#224292] to-[#ffc107] rounded-2xl blur-lg opacity-10 group-hover:opacity-20 transition duration-500" />
                            <div className="relative bg-white p-2 rounded-2xl border border-slate-100 shadow-md flex-1 flex flex-col">
                              <img
                                src={mbaPicture3}
                                alt="Methodologies Adopted - Seminar"
                                className="w-full h-full rounded-xl object-cover shadow-sm min-h-[200px] lg:min-h-0 lg:h-full flex-1"
                              />
                            </div>
                          </div>
                        </div>

                        {/* Content Column (Wrapped in matching card) */}
                        <div className="lg:col-span-6 flex flex-col">
                          <div className="relative bg-white p-6 md:p-8 rounded-2xl border border-slate-100 shadow-md flex-1 flex flex-col justify-center">
                            <div className="space-y-4">
                              <h4 className="text-lg font-bold font-graphik text-[#224292] flex items-center gap-2">
                                <span className="w-2 h-2 rounded-full bg-[#ffc107]" />
                                Seminar:
                              </h4>
                              <p className="text-[#333333] leading-relaxed text-[15px] md:text-[16px] font-normal font-graphik text-justify">
                                A seminar presentation brings out the inner confidence within the student which results in the outcomes including improving communication skills, gaining expert knowledge, and renewing motivation.
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Divider line between methodologies */}
                      <div className="h-px bg-slate-100 w-full" />

                      {/* Methodology 4: Peer Learning */}
                      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
                        {/* Content Column (Wrapped in matching card) */}
                        <div className="lg:col-span-6 flex flex-col order-2 lg:order-1">
                          <div className="relative bg-white p-6 md:p-8 rounded-2xl border border-slate-100 shadow-md flex-1 flex flex-col justify-center">
                            <div className="space-y-4">
                              <h4 className="text-lg font-bold font-graphik text-[#224292] flex items-center gap-2">
                                <span className="w-2 h-2 rounded-full bg-[#ffc107]" />
                                Peer Learning:
                              </h4>
                              <p className="text-[#333333] leading-relaxed text-[15px] md:text-[16px] font-normal font-graphik text-justify">
                                Peer learning refers to students learning with and from each other as fellow learners without any implied authority to any individual, based on the principle that Students learn a great deal by explaining their ideas to others and by participating in activities in which they can learn from their peers.
                              </p>
                            </div>
                          </div>
                        </div>

                        {/* Picture Column */}
                        <div className="lg:col-span-6 flex flex-col order-1 lg:order-2">
                          <div className="relative group w-full h-full flex flex-col">
                            <div className="absolute -inset-2 bg-gradient-to-r from-[#224292] to-[#ffc107] rounded-2xl blur-lg opacity-10 group-hover:opacity-20 transition duration-500" />
                            <div className="relative bg-white p-2 rounded-2xl border border-slate-100 shadow-md flex-1 flex flex-col">
                              <img
                                src={mbaPicture4}
                                alt="Methodologies Adopted - Peer Learning"
                                className="w-full h-full rounded-xl object-cover shadow-sm min-h-[200px] lg:min-h-0 lg:h-full flex-1"
                              />
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Divider line between methodologies */}
                      <div className="h-px bg-slate-100 w-full" />

                      {/* Methodology 5: Experiential Learning */}
                      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
                        {/* Picture Column */}
                        <div className="lg:col-span-6 flex flex-col">
                          <div className="relative group w-full h-full flex flex-col">
                            <div className="absolute -inset-2 bg-gradient-to-r from-[#224292] to-[#ffc107] rounded-2xl blur-lg opacity-10 group-hover:opacity-20 transition duration-500" />
                            <div className="relative bg-white p-2 rounded-2xl border border-slate-100 shadow-md flex-1 flex flex-col">
                              <img
                                src={mbaPicture5}
                                alt="Methodologies Adopted - Experiential Learning"
                                className="w-full h-full rounded-xl object-cover shadow-sm min-h-[200px] lg:min-h-0 lg:h-full flex-1"
                              />
                            </div>
                          </div>
                        </div>

                        {/* Content Column (Wrapped in matching card) */}
                        <div className="lg:col-span-6 flex flex-col">
                          <div className="relative bg-white p-6 md:p-8 rounded-2xl border border-slate-100 shadow-md flex-1 flex flex-col justify-center">
                            <div className="space-y-4">
                              <h4 className="text-lg font-bold font-graphik text-[#224292] flex items-center gap-2">
                                <span className="w-2 h-2 rounded-full bg-[#ffc107]" />
                                Experiential Learning:
                              </h4>
                              <p className="text-[#333333] leading-relaxed text-[15px] md:text-[16px] font-normal font-graphik text-justify">
                                One of the more truly immersive teaching methods is experiential learning. This method allows students to operate within a specific topical area as real time market survey and entrepreneurship classes. Also, many internship programs fall into this category. This method is all about learning while doing, At KBSS this trend that continues to grow.
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Divider line between methodologies */}
                      <div className="h-px bg-slate-100 w-full" />

                      {/* Methodology 6: Real Time Projects & Assignments */}
                      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
                        {/* Content Column (Wrapped in matching card) */}
                        <div className="lg:col-span-6 flex flex-col order-2 lg:order-1">
                          <div className="relative bg-white p-6 md:p-8 rounded-2xl border border-slate-100 shadow-md flex-1 flex flex-col justify-center">
                            <div className="space-y-4">
                              <h4 className="text-lg font-bold font-graphik text-[#224292] flex items-center gap-2">
                                <span className="w-2 h-2 rounded-full bg-[#ffc107]" />
                                Real Time Projects & Assignments:
                              </h4>
                              <p className="text-[#333333] leading-relaxed text-[15px] md:text-[16px] font-normal font-graphik text-justify">
                                Real time projects & assignments type of learning is an instructional approach designed to give students the opportunity to develop knowledge and skills through engaging projects set around challenges and problems they may face in the real world.
                              </p>
                            </div>
                          </div>
                        </div>

                        {/* Picture Column */}
                        <div className="lg:col-span-6 flex flex-col order-1 lg:order-2">
                          <div className="relative group w-full h-full flex flex-col">
                            <div className="absolute -inset-2 bg-gradient-to-r from-[#224292] to-[#ffc107] rounded-2xl blur-lg opacity-10 group-hover:opacity-20 transition duration-500" />
                            <div className="relative bg-white p-2 rounded-2xl border border-slate-100 shadow-md flex-1 flex flex-col">
                              <img
                                src={mbaPicture6}
                                alt="Methodologies Adopted - Real Time Projects & Assignments"
                                className="w-full h-full rounded-xl object-cover shadow-sm min-h-[200px] lg:min-h-0 lg:h-full flex-1"
                              />
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Divider line between methodologies */}
                      <div className="h-px bg-slate-100 w-full" />

                      {/* Methodology 7: Case Discussion */}
                      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
                        {/* Picture Column */}
                        <div className="lg:col-span-6 flex flex-col">
                          <div className="relative group w-full h-full flex flex-col">
                            <div className="absolute -inset-2 bg-gradient-to-r from-[#224292] to-[#ffc107] rounded-2xl blur-lg opacity-10 group-hover:opacity-20 transition duration-500" />
                            <div className="relative bg-white p-2 rounded-2xl border border-slate-100 shadow-md flex-1 flex flex-col">
                              <img
                                src={mbaPicture7}
                                alt="Methodologies Adopted - Case Discussion"
                                className="w-full h-full rounded-xl object-cover shadow-sm min-h-[200px] lg:min-h-0 lg:h-full flex-1"
                              />
                            </div>
                          </div>
                        </div>

                        {/* Content Column (Wrapped in matching card) */}
                        <div className="lg:col-span-6 flex flex-col">
                          <div className="relative bg-white p-6 md:p-8 rounded-2xl border border-slate-100 shadow-md flex-1 flex flex-col justify-center">
                            <div className="space-y-4">
                              <h4 className="text-lg font-bold font-graphik text-[#224292] flex items-center gap-2">
                                <span className="w-2 h-2 rounded-full bg-[#ffc107]" />
                                Case Discussion:
                              </h4>
                              <p className="text-[#333333] leading-relaxed text-[15px] md:text-[16px] font-normal font-graphik text-justify">
                                Case studies are used as a tool to facilitate learning on the part of the student by the faculty in the session. Case studies portray real life situations involving decision making by participantson either a set of questions or through an open-ended discussion in the classroom.Usually case studies are presented in a session by dividing the Participants into groups. Thisenables the Participants to have a thorough analysis and understanding of the case.The case study format involves a professor leading students through a historical analysis of a business situation. Cases are commonly used as the driver for interactive classroom discussions and there is an expectation of strong class participation from all students.
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Divider line between methodologies */}
                      <div className="h-px bg-slate-100 w-full" />

                      {/* Methodology 8: Field Exercise */}
                      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
                        {/* Content Column (Wrapped in matching card) */}
                        <div className="lg:col-span-6 flex flex-col order-2 lg:order-1">
                          <div className="relative bg-white p-6 md:p-8 rounded-2xl border border-slate-100 shadow-md flex-1 flex flex-col justify-center">
                            <div className="space-y-4">
                              <h4 className="text-lg font-bold font-graphik text-[#224292] flex items-center gap-2">
                                <span className="w-2 h-2 rounded-full bg-[#ffc107]" />
                                Field Exercise:
                              </h4>
                              <p className="text-[#333333] leading-relaxed text-[15px] md:text-[16px] font-normal font-graphik text-justify">
                                Field exercise refers to any component of the curriculum that involves leaving the classroom and learning through firsthand experience. Most instructors incorporate fieldwork to help students understand theory, develop skills, integrate knowledge, build implied knowledge, develop meaning in places, and work with peers.
                              </p>
                            </div>
                          </div>
                        </div>

                        {/* Picture Column */}
                        <div className="lg:col-span-6 flex flex-col order-1 lg:order-2">
                          <div className="relative group w-full h-full flex flex-col">
                            <div className="absolute -inset-2 bg-gradient-to-r from-[#224292] to-[#ffc107] rounded-2xl blur-lg opacity-10 group-hover:opacity-20 transition duration-500" />
                            <div className="relative bg-white p-2 rounded-2xl border border-slate-100 shadow-md flex-1 flex flex-col">
                              <img
                                src={mbaPicture8}
                                alt="Methodologies Adopted - Field Exercise"
                                className="w-full h-full rounded-xl object-cover shadow-sm min-h-[200px] lg:min-h-0 lg:h-full flex-1"
                              />
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Divider line between methodologies */}
                      <div className="h-px bg-slate-100 w-full" />

                      {/* Methodology 9: Movie Review */}
                      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
                        {/* Picture Column */}
                        <div className="lg:col-span-6 flex flex-col">
                          <div className="relative group w-full h-full flex flex-col">
                            <div className="absolute -inset-2 bg-gradient-to-r from-[#224292] to-[#ffc107] rounded-2xl blur-lg opacity-10 group-hover:opacity-20 transition duration-500" />
                            <div className="relative bg-white p-2 rounded-2xl border border-slate-100 shadow-md flex-1 flex flex-col">
                              <img
                                src={mbaPicture9}
                                alt="Methodologies Adopted - Movie Review"
                                className="w-full h-full rounded-xl object-cover shadow-sm min-h-[200px] lg:min-h-0 lg:h-full flex-1"
                              />
                            </div>
                          </div>
                        </div>

                        {/* Content Column (Wrapped in matching card) */}
                        <div className="lg:col-span-6 flex flex-col">
                          <div className="relative bg-white p-6 md:p-8 rounded-2xl border border-slate-100 shadow-md flex-1 flex flex-col justify-center">
                            <div className="space-y-4">
                              <h4 className="text-lg font-bold font-graphik text-[#224292] flex items-center gap-2">
                                <span className="w-2 h-2 rounded-full bg-[#ffc107]" />
                                Movie Review:
                              </h4>
                              <p className="text-[#333333] leading-relaxed text-[15px] md:text-[16px] font-normal font-graphik text-justify">
                                The objective of this movie review activity for MBA graduates is to enhance their critical thinking, analytical, and communication skills by evaluating a movie from a business perspective. This activity will also encourage teamwork and collaboration as participants discuss and debate their views.
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Divider line between methodologies */}
                      <div className="h-px bg-slate-100 w-full" />

                      {/* Methodology 10: Outbound Training */}
                      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
                        {/* Content Column (Wrapped in matching card) */}
                        <div className="lg:col-span-6 flex flex-col order-2 lg:order-1">
                          <div className="relative bg-white p-6 md:p-8 rounded-2xl border border-slate-100 shadow-md flex-1 flex flex-col justify-center">
                            <div className="space-y-4">
                              <h4 className="text-lg font-bold font-graphik text-[#224292] flex items-center gap-2">
                                <span className="w-2 h-2 rounded-full bg-[#ffc107]" />
                                Outbound Training:
                              </h4>
                              <p className="text-[#333333] leading-relaxed text-[15px] md:text-[16px] font-normal font-graphik text-justify">
                                Outbound training focuses on team building, leadership development, and effective communication. It aims to enhance problem-solving, decision-making, and time management skills. Additionally, it emphasizes conflict resolution and trust building among peers. The outcomes include increased self-awareness, improved interpersonal relationships, heightened confidence, and a sense of accomplishment. These experiences offer valuable insights applicable in their future managerial roles and professional settings.
                              </p>
                            </div>
                          </div>
                        </div>

                        {/* Picture Column */}
                        <div className="lg:col-span-6 flex flex-col order-1 lg:order-2">
                          <div className="relative group w-full h-full flex flex-col">
                            <div className="absolute -inset-2 bg-gradient-to-r from-[#224292] to-[#ffc107] rounded-2xl blur-lg opacity-10 group-hover:opacity-20 transition duration-500" />
                            <div className="relative bg-white p-2 rounded-2xl border border-slate-100 shadow-md flex-1 flex flex-col">
                              <img
                                src={mbaPicture10}
                                alt="Methodologies Adopted - Outbound Training"
                                className="w-full h-full rounded-xl object-cover shadow-sm min-h-[200px] lg:min-h-0 lg:h-full flex-1"
                              />
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Divider line between methodologies */}
                      <div className="h-px bg-slate-100 w-full" />

                      {/* Methodology 11: Business Simulation */}
                      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
                        {/* Picture Column */}
                        <div className="lg:col-span-6 flex flex-col">
                          <div className="relative group w-full h-full flex flex-col">
                            <div className="absolute -inset-2 bg-gradient-to-r from-[#224292] to-[#ffc107] rounded-2xl blur-lg opacity-10 group-hover:opacity-20 transition duration-500" />
                            <div className="relative bg-white p-2 rounded-2xl border border-slate-100 shadow-md flex-1 flex flex-col">
                              <img
                                src={mbaPicture11}
                                alt="Methodologies Adopted - Business Simulation"
                                className="w-full h-full rounded-xl object-cover shadow-sm min-h-[200px] lg:min-h-0 lg:h-full flex-1"
                              />
                            </div>
                          </div>
                        </div>

                        {/* Content Column (Wrapped in matching card) */}
                        <div className="lg:col-span-6 flex flex-col">
                          <div className="relative bg-white p-6 md:p-8 rounded-2xl border border-slate-100 shadow-md flex-1 flex flex-col justify-center">
                            <div className="space-y-4">
                              <h4 className="text-lg font-bold font-graphik text-[#224292] flex items-center gap-2">
                                <span className="w-2 h-2 rounded-full bg-[#ffc107]" />
                                Business Simulation:
                              </h4>
                              <p className="text-[#333333] leading-relaxed text-[15px] md:text-[16px] font-normal font-graphik text-justify">
                                Simulations are probably one of the least common, but still prevalent, teaching methods. This teaching method primarily uses technology recreations of common business scenarios. One of the most popular is the simulation used in marketing strategy courses. The teaching methods at KBSS are as diverse as the programs.
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Divider line between methodologies */}
                      <div className="h-px bg-slate-100 w-full" />

                      {/* Methodology 12: Group Discussion */}
                      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
                        {/* Content Column (Wrapped in matching card) */}
                        <div className="lg:col-span-6 flex flex-col order-2 lg:order-1">
                          <div className="relative bg-white p-6 md:p-8 rounded-2xl border border-slate-100 shadow-md flex-1 flex flex-col justify-center">
                            <div className="space-y-4">
                              <h4 className="text-lg font-bold font-graphik text-[#224292] flex items-center gap-2">
                                <span className="w-2 h-2 rounded-full bg-[#ffc107]" />
                                Group Discussion:
                              </h4>
                              <p className="text-[#333333] leading-relaxed text-[15px] md:text-[16px] font-normal font-graphik text-justify">
                                Group discussion (GD), by asset of the term, means exchange of views by participants on a given subject. The whole idea is to bring together a set of people on a common platform to share their ideas, thereby giving an opportunity to exhibit not only their knowledge, but also to understand and enhance their learning by absorbing the thoughts of other people.
                              </p>
                            </div>
                          </div>
                        </div>

                        {/* Picture Column */}
                        <div className="lg:col-span-6 flex flex-col order-1 lg:order-2">
                          <div className="relative group w-full h-full flex flex-col">
                            <div className="absolute -inset-2 bg-gradient-to-r from-[#224292] to-[#ffc107] rounded-2xl blur-lg opacity-10 group-hover:opacity-20 transition duration-500" />
                            <div className="relative bg-white p-2 rounded-2xl border border-slate-100 shadow-md flex-1 flex flex-col">
                              <img
                                src={mbaPicture12}
                                alt="Methodologies Adopted - Group Discussion"
                                className="w-full h-full rounded-xl object-cover shadow-sm min-h-[200px] lg:min-h-0 lg:h-full flex-1"
                              />
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Divider line between methodologies */}
                      <div className="h-px bg-slate-100 w-full" />

                      {/* Methodology 13: Industrial visits */}
                      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
                        {/* Picture Column */}
                        <div className="lg:col-span-6 flex flex-col">
                          <div className="relative group w-full h-full flex flex-col">
                            <div className="absolute -inset-2 bg-gradient-to-r from-[#224292] to-[#ffc107] rounded-2xl blur-lg opacity-10 group-hover:opacity-20 transition duration-500" />
                            <div className="relative bg-white p-2 rounded-2xl border border-slate-100 shadow-md flex-1 flex flex-col">
                              <img
                                src={mbaPicture13}
                                alt="Methodologies Adopted - Industrial visits"
                                className="w-full h-full rounded-xl object-cover shadow-sm min-h-[200px] lg:min-h-0 lg:h-full flex-1"
                              />
                            </div>
                          </div>
                        </div>

                        {/* Content Column (Wrapped in matching card) */}
                        <div className="lg:col-span-6 flex flex-col">
                          <div className="relative bg-white p-6 md:p-8 rounded-2xl border border-slate-100 shadow-md flex-1 flex flex-col justify-center">
                            <div className="space-y-4">
                              <h4 className="text-lg font-bold font-graphik text-[#224292] flex items-center gap-2">
                                <span className="w-2 h-2 rounded-full bg-[#ffc107]" />
                                Industrial visits:
                              </h4>
                              <p className="text-[#333333] leading-relaxed text-[15px] md:text-[16px] font-normal font-graphik text-justify">
                                The objective of an industrial visit is to provide an insight regarding internal working of companies. We understand that theoretical knowledge is not enough for a successful professional career. With an aim to go beyond academics, industrial visit provides students a practical perspective of the work place. It provides an opportunity to learn practically through interaction, working methods and employment practices. It gives an exposure to current work practices being taught at college. Industrial visits provide an excellent opportunity to interact with industries and know more about industrial environment.
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {/* Career Prospects — show when careerProspects data exists */}
                {course.careerProspects && course.careerProspects.length > 0 && courseId !== 'mba-iev' && (
                  <div className="bg-[#224292] rounded-[2rem] p-8 md:p-12 shadow-xl">
                    <h2 className="text-2xl font-bold font-graphik text-white mb-6 flex items-center gap-3">
                      <Briefcase size={22} className="text-[#ffc107]" />
                      Career Prospects
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {course.careerProspects.map((item, idx) => (
                        <div
                          key={idx}
                          className="flex gap-3 items-start p-4 rounded-xl bg-white/10 border border-white/20 hover:bg-white/20 transition-all"
                        >
                          <ArrowRight size={16} className="text-[#ffc107] mt-0.5 shrink-0" />
                          <p className="text-white font-medium font-graphik text-[14px] leading-relaxed">{item}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Enrollment CTA */}
                <div className="flex justify-center pt-4">
                  {course.quickApply ? (
                    <a
                      href={course.quickApply}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-3 px-10 py-5 rounded-2xl bg-[#224292] !text-white font-bold font-graphik text-[15px] hover:bg-[#ffc107] hover:!text-[#224292] transition-all duration-500 shadow-xl shadow-blue-900/10 group/btn"
                    >
                      Enroll Now <ArrowRight size={20} className="group-hover/btn:translate-x-2 transition-transform" />
                    </a>
                  ) : (
                    <button
                      onClick={() => navigate('/admissions')}
                      className="inline-flex items-center gap-3 px-10 py-5 rounded-2xl bg-[#224292] !text-white font-bold font-graphik text-[15px] hover:bg-[#ffc107] hover:!text-[#224292] transition-all duration-500 shadow-xl shadow-blue-900/10 group/btn"
                    >
                      Enroll Now <ArrowRight size={20} className="group-hover/btn:translate-x-2 transition-transform" />
                    </button>
                  )}
                </div>
              </div>
            )}

            {/* --- VISION & MISSION --- */}
            {activeTab === 'Vision & Mission' && (
              <>
                <div className="space-y-8 py-8">
                  <div className="grid lg:grid-cols-2 gap-8">
                    {/* Vision Card */}
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      className="group relative rounded-[2rem] p-10 bg-white border border-slate-100 shadow-xl shadow-black/5 overflow-hidden transition-all duration-500 hover:border-[#224292]/30"
                    >
                      <div className="relative z-10 flex flex-col h-full">
                        <h3 className="text-2xl font-bold font-graphik text-[#224292] mb-6 flex items-center gap-3">
                          <div className="w-1.5 h-6 bg-[#ffc107] rounded-full" />
                          Our Vision
                        </h3>

                        <div className="space-y-6 flex-grow">
                          <p className="text-[#333333] leading-relaxed text-[16px] font-normal font-graphik text-justify not-italic">
                            {course.vision || 'To provide a world-class academic environment for creating global leaders.'}
                          </p>
                        </div>
                      </div>
                    </motion.div>

                    {/* Mission Card */}
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.1 }}
                      className="group relative bg-white rounded-[2rem] p-10 shadow-xl shadow-black/5 border border-slate-100 overflow-hidden transition-all duration-500 hover:border-[#ffc107]/30"
                    >
                      <div className="relative z-10 flex flex-col h-full">
                        <h3 className="text-2xl font-bold font-graphik text-[#ffc107] mb-6 flex items-center gap-3">
                          <div className="w-1.5 h-6 bg-[#224292] rounded-full" />
                          Our Mission
                        </h3>

                        <div className="space-y-6 flex-grow">
                          {(course.mission || 'To promote institutional excellence by fostering innovation, research, and high-quality teaching methodologies.').split('\n').map((para, idx) => (
                            <div key={idx} className="flex gap-4 items-start">
                              <div className="w-6 h-6 rounded-lg bg-[#224292]/5 flex items-center justify-center shrink-0 mt-0.5 group-hover:bg-[#ffc107]/20 transition-colors">
                                <CheckCircle2 size={14} className="text-[#224292] transition-colors" />
                              </div>
                              <p className="text-[#333333] leading-relaxed text-[15px] md:text-[16px] font-normal font-graphik text-justify not-italic flex-1">
                                {para.trim().replace(/^M\d+:\s*/i, '')}
                              </p>
                            </div>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  </div>
                </div>

                <div className="px-2 py-8 sm:px-10 md:p-14 overflow-hidden mt-8">
                  <div className="flex flex-col xl:flex-row xl:items-end justify-between gap-10 mb-12 px-2">
                    <div>
                      <h2 className="text-2xl md:text-3xl font-bold font-graphik text-[#224292] tracking-tighter">Academic Objectives</h2>
                    </div>

                    <div className="grid grid-cols-3 md:flex md:items-center gap-2 md:gap-3 bg-slate-50/50 p-1.5 md:p-2 rounded-2xl md:rounded-[2rem] border border-slate-100">
                      {objectiveData.map((obj) => (
                        <button
                          key={obj.id}
                          onClick={() => setActiveObjectiveTab(obj.id)}
                          className={`px-2 md:px-8 py-3 md:py-4 rounded-xl md:rounded-[1.5rem] flex items-center justify-center md:justify-start gap-1.5 md:gap-3 text-[8px] md:text-[10px] font-bold font-graphik uppercase tracking-tight md:tracking-[0.2em] transition-all duration-500 shadow-sm ${activeObjectiveTab === obj.id
                            ? `${obj.activeBg} text-white shadow-xl shadow-blue-900/10 scale-[1.03] translate-y-[-2px]`
                            : 'bg-white text-[#224292] hover:bg-white/80'
                            }`}
                        >
                          <obj.icon size={14} className={activeObjectiveTab === obj.id ? obj.iconColor : 'text-[#224292]/60'} />
                          {obj.id}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="relative min-h-[300px]">
                    <AnimatePresence mode="wait">
                      <motion.div
                        key={activeObjectiveTab}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                        transition={{ duration: 0.4 }}
                        className="py-4 group"
                      >
                        <div className="space-y-4 font-graphik">
                          {(() => {
                            const text = activeObj.content || 'Data current being optimized for digital view.';
                            const lines = text.split('\n').map(l => l.trim()).filter(l => l.length > 0);

                            // Detect if first line is a preamble
                            const hasPreamble = lines.length > 1 && (lines[0].endsWith(':') || lines[0].includes('will be able to') || lines[0].includes('completion of'));
                            const preamble = hasPreamble ? lines[0] : null;
                            const rawPoints = hasPreamble ? lines.slice(1) : lines;

                            return (
                              <div className="space-y-4">
                                {preamble && (
                                  <p className="px-4 text-[#64779F] font-bold text-[13px] mb-6 italic leading-relaxed">{preamble}</p>
                                )}
                                {rawPoints.map((point, idx) => {
                                  const match = point.match(/^((?:PEO|PO|PSO|M)\s*[-]?\s*(?:\d+|[IVXLC]+):?)\s*(.*)/i);
                                  const label = match ? match[1] : '';
                                  const description = match ? match[2] : point;

                                  return (
                                    <motion.div
                                      key={idx}
                                      whileHover={{ x: 10 }}
                                      className="flex gap-3 md:gap-5 px-4 py-5 md:p-6 rounded-2xl bg-white border border-slate-100 shadow-sm hover:shadow-xl hover:border-blue-100 transition-all group/point"
                                    >
                                      <div className="flex-shrink-0 mt-1">
                                        <div className="w-8 h-8 rounded-lg bg-blue-50 flex items-center justify-center group-hover/point:bg-[#ffc107]/10 transition-colors">
                                          <CheckCircle2 size={16} className="text-[#224292] group-hover/point:text-[#ffc107] transition-colors" />
                                        </div>
                                      </div>
                                      <div className="space-y-1 flex-1">
                                        {label && (
                                          <span className="block text-[11px] font-black font-graphik text-[#224292] uppercase tracking-[0.2em]">
                                            {label.replace(':', '')}
                                          </span>
                                        )}
                                        <p className="text-[#333333] font-medium font-graphik leading-relaxed text-[14px] sm:text-[16px] text-justify">
                                          {description}
                                        </p>
                                      </div>
                                    </motion.div>
                                  );
                                })}
                              </div>
                            );
                          })()}
                        </div>
                      </motion.div>
                    </AnimatePresence>
                  </div>
                </div>
              </>
            )}

            {/* --- LEADERSHIP MESSAGE --- */}
            {activeTab === 'Leadership Message' && (
              <div className="space-y-8 py-8">
                {/* Section Title */}
                <div className="text-center max-w-3xl mx-auto mb-10">
                  <h2 className="text-3xl md:text-4xl font-extrabold text-[#224292] tracking-tight font-graphik">
                    Leadership <span className="text-[#ffc107]">Message</span>
                  </h2>
                  <div className="flex items-center justify-center gap-2 mt-3">
                    <div className="w-12 h-[1px] bg-[#ffc107]" />
                    <div className="w-2 h-2 rounded-full bg-[#ffc107]" />
                    <div className="w-12 h-[1px] bg-[#ffc107]" />
                  </div>
                </div>

                {/* Sub-tab Pill Navigation inside Leadership Message */}
                <div className="flex flex-wrap justify-center gap-3 max-w-3xl mx-auto mb-10">
                  {leadershipData.map(leader => (
                    <button
                      key={leader.id}
                      onClick={() => setSelectedLeaderId(leader.id)}
                      className={`px-5 py-3 rounded-xl text-[10px] sm:text-xs font-black uppercase tracking-wider transition-all duration-300 ${selectedLeaderId === leader.id
                        ? 'bg-[#ffc107] text-[#224292] shadow-lg shadow-[#ffc107]/25 scale-[1.02] border border-[#ffc107]'
                        : 'bg-[#224292] text-white border border-[#224292]/10 hover:bg-[#224292]/90'
                        }`}
                    >
                      {leader.id === 'chairman' ? 'Executive Chairman' : leader.id === 'secretary' ? 'Secretary' : leader.id === 'principal' ? 'Principal' : 'Director'}
                    </button>
                  ))}
                </div>

                {/* Render Selected Leader Content */}
                {(() => {
                  const leader = leadershipData.find(l => l.id === selectedLeaderId);
                  if (!leader) return null;
                  return (
                    <motion.div
                      key={leader.id}
                      initial={{ opacity: 0, y: 15 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3 }}
                      className="bg-white rounded-2xl border border-[#DEE7F4] p-8 md:p-12 shadow-2xl shadow-black/10 max-w-5xl mx-auto flex flex-col lg:flex-row gap-8 lg:gap-12 relative overflow-hidden group"
                    >
                      {/* Decorative elements */}
                      <div className="absolute top-0 right-0 w-48 h-48 bg-[#224292]/5 rounded-full -mr-24 -mt-24 blur-3xl group-hover:bg-[#ffc107]/5 transition-colors duration-700 pointer-events-none" />
                      <div className="absolute bottom-0 left-0 w-32 h-32 bg-[#ffc107]/5 rounded-full -ml-16 -mb-16 blur-2xl pointer-events-none" />

                      {/* Profile / Details Panel */}
                      <div className="w-full lg:w-[32%] shrink-0 flex flex-col items-center text-center lg:text-left lg:items-start border-b lg:border-b-0 lg:border-r border-slate-100 pb-8 lg:pb-0 lg:pr-8">
                        <div className="relative group/img flex items-center justify-center mb-6">
                          {/* Inner gold frame */}
                          <div className="relative w-36 h-36 rounded-full p-1 bg-gradient-to-tr from-[#ffc107] to-[#e0a800] shadow-md z-10 overflow-hidden group-hover/img:scale-[1.02] transition-transform duration-500">
                            <div className="w-full h-full rounded-full overflow-hidden bg-white border-2 border-white shadow-inner">
                              <img
                                src={leader.image}
                                alt={leader.name}
                                className="w-full h-full object-cover object-top"
                              />
                            </div>
                          </div>
                        </div>

                        <div className="space-y-2">
                          <h3 className="text-xl md:text-2xl font-bold font-graphik text-[#224292] tracking-tight">{leader.name}</h3>
                          <p className="text-[12px] font-extrabold text-slate-500 uppercase tracking-widest leading-snug">{leader.designation}</p>
                          <p className="text-[11px] font-bold text-slate-400 leading-normal">{leader.credentials}</p>
                          {leader.email && (
                            <a href={`mailto:${leader.email}`} className="inline-flex items-center gap-1.5 text-[12px] text-[#224292] hover:underline font-bold mt-2">
                              <Mail size={13} className="text-[#ffc107]" /> {leader.email}
                            </a>
                          )}
                        </div>
                      </div>

                      {/* Message Body Panel */}
                      <div className="flex-1 text-left relative min-h-[300px]">
                        <Quote size={60} className="absolute -top-6 -left-4 text-[#224292]/5 pointer-events-none" />
                        <h4 className="text-lg font-bold font-graphik text-[#224292] mb-6 flex items-center gap-2">
                          <span className="w-1.5 h-5 bg-[#ffc107] rounded-full inline-block" />
                          {leader.title}
                        </h4>

                        <div className="text-slate-600 text-[14.5px] leading-relaxed text-justify space-y-5 font-normal relative z-10 pl-6">
                          {leader.paragraphs.map((para, pIdx) => {
                            // Format sub-items if paragraphs contain lists (specifically five big problems)
                            if (para.includes('\n')) {
                              return (
                                <div key={pIdx} className="space-y-3 font-normal">
                                  {para.split('\n').map((subLine, sIdx) => {
                                    if (subLine.match(/^\d+\./)) {
                                      return (
                                        <p key={sIdx} className="pl-6 font-bold text-[#224292] flex items-center gap-2">
                                          <span className="w-1.5 h-1.5 rounded-full bg-[#ffc107] inline-block" />
                                          {subLine}
                                        </p>
                                      );
                                    }
                                    return <p key={sIdx}>{subLine}</p>;
                                  })}
                                </div>
                              );
                            }
                            return (
                              <p key={pIdx}>
                                {para}
                              </p>
                            );
                          })}
                        </div>

                        {/* Signature */}
                        <div className="mt-8 pt-4 border-t border-slate-100 flex flex-col items-end self-end">
                          <span className="signature-font text-2xl text-[#224292] font-semibold border-b border-[#ffc107] pb-0.5 px-3 leading-none">
                            {leader.signature}
                          </span>
                        </div>
                      </div>
                    </motion.div>
                  );
                })()}
              </div>
            )}

            {/* --- KNOWLEDGE AND ATTITUDE PROFILE (be-eee only) --- */}
            {activeTab === 'Knowledge and Attitude Profile' && (
              <div className="space-y-12">
                <div className="text-center max-w-3xl mx-auto mb-8">
                  <h2 className="text-3xl md:text-4xl font-extrabold text-[#224292] tracking-tight">
                    Knowledge and <span className="text-[#ffc107]">Attitude Profile</span>
                  </h2>
                </div>

                <div className="max-w-4xl mx-auto space-y-6">
                  {[
                    { wk: "WK1", title: "Natural Sciences", desc: "A systematic, theory-based understanding of the natural sciences applicable to the discipline and awareness of relevant social sciences.", icon: Globe },
                    { wk: "WK2", title: "Mathematics", desc: "Conceptually-based mathematics, numerical analysis, data analysis, statistics and formal aspects of computer and information science to support detailed analysis and modelling applicable to the discipline.", icon: BarChart3 },
                    { wk: "WK3", title: "Engineering Fundamentals", desc: "A systematic, theory-based formulation of engineering fundamentals required in the engineering discipline.", icon: Layers },
                    { wk: "WK4", title: "Specialist Knowledge", desc: "Engineering specialist knowledge that provides theoretical frameworks and bodies of knowledge for the accepted practice areas in the engineering discipline; much is at the forefront of the discipline.", icon: Cpu },
                    { wk: "WK5", title: "Sustainable Design & Operations", desc: "Knowledge, including efficient resource use, environmental impacts, whole-life cost, reuse of resources, net zero carbon, and similar concepts, that supports engineering design and operations in a practice area.", icon: Target },
                    { wk: "WK6", title: "Engineering Practice", desc: "Knowledge of engineering practice (technology) in the practice areas in the engineering discipline.", icon: Wrench },
                    { wk: "WK7", title: "Role of Engineering in Society", desc: "Knowledge of the role of engineering in society and identified issues in engineering practice in the discipline, such as the professional responsibility of an engineer to public safety and sustainable development.", icon: Building2 },
                    { wk: "WK8", title: "Research Literature", desc: "Engagement with selected knowledge in the current research literature of the discipline, awareness of the power of critical thinking and creative approaches to evaluate emerging issues.", icon: Microscope },
                    { wk: "WK9", title: "Ethics, Diversity & Inclusion", desc: "Ethics, inclusive behavior and conduct. Knowledge of professional ethics, responsibilities, and norms of engineering practice. Awareness of the need for diversity by reason of ethnicity, gender, age, physical ability etc. with mutual understanding and respect, and of inclusive attitudes.", icon: ShieldCheck }
                  ].map((item, idx) => (
                    <motion.div
                      key={item.wk}
                      initial={{ opacity: 0, y: 15 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: idx * 0.05 }}
                      className="flex gap-4 p-6 rounded-2xl bg-white border border-slate-100 shadow-sm hover:shadow-md hover:border-blue-100 transition-all group"
                    >
                      <div className="shrink-0">
                        <div className="w-12 h-12 rounded-xl bg-slate-50 flex items-center justify-center text-[#224292] group-hover:bg-[#224292] group-hover:text-white transition-colors duration-300 shadow-sm">
                          <item.icon size={22} />
                        </div>
                      </div>
                      <div className="space-y-1">
                        <div className="flex items-center gap-2">
                          <span className="inline-block px-2.5 py-0.5 rounded-md bg-[#224292]/5 text-[#224292] text-[10px] font-black tracking-wider uppercase">
                            {item.wk}
                          </span>
                          <h4 className="text-[15px] font-bold text-[#224292]">{item.title}</h4>
                        </div>
                        <p className="text-[13.5px] text-slate-600 leading-relaxed text-justify font-normal">{item.desc}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            )}

            {/* --- SYLLABUS --- */}
            {activeTab === 'Syllabus' && (
              <CurriculumSection courseId={courseId} />
            )}

            {/* --- TEACHING METHODOLOGY --- */}
            {activeTab === 'Teaching Methodology' && (
              <div className="space-y-8 py-8 max-w-5xl mx-auto">
                {/* Intro Card */}
                <div className="bg-white rounded-[2rem] border border-[#DEE7F4] p-8 md:p-12 shadow-xl shadow-blue-900/5 relative overflow-hidden group">
                  <div className="absolute top-0 right-0 w-64 h-64 bg-[#224292]/5 rounded-full -mr-32 -mt-32 blur-3xl pointer-events-none" />
                  <div className="absolute bottom-0 left-0 w-32 h-32 bg-[#ffc107]/5 rounded-full -ml-16 -mb-16 blur-2xl pointer-events-none" />

                  <h2 className="text-2xl md:text-3xl font-bold font-graphik mb-6 text-[#224292] flex items-center gap-3">
                    <span className="w-1.5 h-6 bg-[#ffc107] rounded-full inline-block" />
                    Pedagogy
                  </h2>
                  <p className="text-slate-600 leading-relaxed text-[15px] md:text-[16px] font-normal font-graphik text-justify">
                    At MBA@KIOT, the teaching and learning process is designed to foster conceptual understanding, innovation, entrepreneurial thinking, and practical business acumen. The programme emphasizes experiential and application-oriented learning, enabling students to connect theoretical concepts with real-world business challenges. Through a blend of classroom instruction, case-based discussions, business simulations, industry interactions, and venture development activities, students gain the confidence and competence required to become successful entrepreneurs and business leaders. The learning environment is supported by a team of experienced faculty members with strong academic and industry backgrounds, ensuring that students develop critical thinking, problem-solving abilities, leadership skills, and a dynamic managerial mindset.
                  </p>
                </div>

                {/* Pedagogical Practices Table/List Card */}
                <div className="space-y-6">
                  <h2 className="text-2xl md:text-3xl font-bold font-graphik text-[#224292] flex items-center gap-3">
                    <span className="w-1.5 h-6 bg-[#ffc107] rounded-full inline-block" />
                    Pedagogical Practices
                  </h2>
                  <p className="text-slate-600 leading-relaxed text-[15px] md:text-[16px] font-normal font-graphik text-justify">
                    The MBA programme adopts a diverse range of teaching-learning methods to create an engaging and outcome-oriented learning experience. These include:
                  </p>

                  <div className="border border-[#DEE7F4] rounded-2xl overflow-hidden shadow-sm bg-white">
                    <table className="w-full text-left font-graphik text-[14px]">
                      <thead>
                        <tr className="bg-[#224292] text-white">
                          <th className="py-4 px-4 md:px-6 font-bold uppercase tracking-wider text-[13px] md:text-[14px] w-1/3">
                            Methodology
                          </th>
                          <th className="py-4 px-4 md:px-6 font-bold uppercase tracking-wider text-[13px] md:text-[14px]">
                            Description
                          </th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-[#DEE7F4]">
                        {[
                          { title: "Activity-Based Learning", desc: "Learning through exploration, experimentation, and hands-on activities." },
                          { title: "Group Activities", desc: "Collaborative exercises that enhance teamwork, critical thinking, and decision-making skills." },
                          { title: "Seminars", desc: "Student presentations that build confidence, communication skills, and domain expertise." },
                          { title: "Peer Learning", desc: "Knowledge sharing and collaborative learning among students." },
                          { title: "Experiential Learning", desc: "Learning through real-world exposure, entrepreneurship activities, and practical experiences." },
                          { title: "Real-Time Projects and Assignments", desc: "Industry-relevant projects that address real business challenges." },
                          { title: "Case Discussions", desc: "Analysis of business situations to strengthen analytical and strategic thinking." },
                          { title: "Field Exercises", desc: "First-hand learning experiences outside the classroom environment." },
                          { title: "Movie Reviews", desc: "Critical evaluation of business themes and managerial concepts through films." },
                          { title: "Outbound Training", desc: "Activities focused on leadership, team building, communication, and problem-solving." },
                          { title: "Business Simulations", desc: "Technology-enabled simulations that replicate real business scenarios and decision-making environments." },
                          { title: "Group Discussions", desc: "Interactive forums for exchanging ideas, enhancing knowledge, and developing communication skills." },
                          { title: "Industrial Visits", desc: "Exposure to organizational practices, industrial operations, and workplace realities." },
                          { title: "Simulation Games", desc: "Active learning exercises that provide a risk-free environment for developing managerial and entrepreneurial competencies." }
                        ].map((practice, idx) => (
                          <tr key={idx} className={`${idx % 2 === 0 ? 'bg-[#E5EDF8]/20' : 'bg-white'} hover:bg-[#E5EDF8]/40 transition-colors`}>
                            <td className="py-4 px-4 md:px-6 font-bold text-[#224292] text-[14px] leading-tight">
                              {practice.title}
                            </td>
                            <td className="py-4 px-4 md:px-6 text-slate-700 font-medium text-[13.5px] md:text-[14px] leading-relaxed">
                              {practice.desc}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>

                  <p className="mt-6 text-slate-600 leading-relaxed text-[14px] md:text-[15px] font-medium font-graphik text-justify italic">
                    Together, these pedagogical practices ensure that students are equipped with the knowledge, skills, and entrepreneurial mindset required to create, manage, and scale innovative ventures in a rapidly evolving business landscape.
                  </p>
                </div>
              </div>
            )}

            {/* --- FACULTY --- */}
            {activeTab === 'Faculty' && (
              <div>
                {courseId === 'mba-general' || courseId === 'mba-iev' ? (
                  <div className="py-8 max-w-7xl mx-auto">
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
                      {course.faculty.map((f, i) => {
                        const customImage = courseId === 'mba-general'
                          ? (mbaFacultyImages[f.name] || f.image)
                          : (mbaIevFacultyImages[f.name] || f.image);
                        return (
                          <motion.div
                            key={f.name + i}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.04 }}
                            onClick={() => setSelectedFaculty(f)}
                            className="bg-white group cursor-pointer border border-[#E5EDF8] shadow-md hover:shadow-xl transition-all flex flex-col h-full overflow-hidden rounded-[20px] font-graphik"
                          >
                            <div
                              className="w-full aspect-[3/4] bg-slate-100 overflow-hidden relative flex items-center justify-center animate-fadeIn"
                              style={{ backgroundImage: `url(${facultyBg})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
                            >
                              {customImage ? (
                                <img
                                  src={customImage}
                                  alt={f.name}
                                  className={`w-full h-full object-cover transition-transform duration-500 ${
                                    f.name === 'Prof. S. Vimala'
                                      ? 'scale-[1.05] group-hover:scale-[1.1]'
                                      : 'group-hover:scale-105'
                                  }`}
                                />
                              ) : (
                                <div className="w-full h-full flex items-center justify-center text-slate-300">
                                  <GraduationCap size={60} />
                                </div>
                              )}
                            </div>
                            <div className="p-4 sm:p-5 flex flex-col flex-1">
                              <h3 className="font-extrabold font-graphik text-[#224292] text-[14px] sm:text-[15px] mb-1 leading-tight transition-colors">
                                {f.name}
                              </h3>
                              <p className="text-slate-500 text-[11px] sm:text-[12px] font-semibold font-graphik leading-snug mb-4 flex-grow line-clamp-2">
                                {f.designation}
                              </p>
                              <div className="mt-auto">
                                <span className="inline-block text-[9px] font-extrabold font-graphik uppercase tracking-widest text-[#224292] bg-[#F1F5F9] px-3.5 py-1.5 rounded-[6px] group-hover:bg-[#224292] group-hover:text-white transition-colors duration-300">
                                  VIEW BIO
                                </span>
                              </div>
                            </div>
                          </motion.div>
                        );
                      })}
                    </div>
                  </div>
                ) : courseId === 'science-humanities' ? (
                  // ── S&H: Subject-grouped sections ──
                  <div className="space-y-14">
                    {['Mathematics', 'English', 'Physics', 'Chemistry', 'Tamil'].map((subject) => {
                      const subjectFaculty = course.faculty.filter(f => f.subject === subject)
                      if (!subjectFaculty.length) return null

                      const subjectConfig = {
                        Mathematics: { emoji: '∑', color: 'from-blue-600 to-indigo-700', light: 'bg-blue-50 border-blue-100', badge: 'bg-blue-100 text-blue-800' },
                        English: { emoji: '✍', color: 'from-emerald-600 to-teal-700', light: 'bg-emerald-50 border-emerald-100', badge: 'bg-emerald-100 text-emerald-800' },
                        Physics: { emoji: '⚛', color: 'from-purple-600 to-violet-700', light: 'bg-purple-50 border-purple-100', badge: 'bg-purple-100 text-purple-800' },
                        Chemistry: { emoji: '⚗', color: 'from-orange-500 to-amber-600', light: 'bg-orange-50 border-orange-100', badge: 'bg-orange-100 text-orange-800' },
                        Tamil: { emoji: '📖', color: 'from-rose-500 to-red-600', light: 'bg-rose-50 border-rose-100', badge: 'bg-rose-100 text-rose-800' },
                      }
                      const cfg = subjectConfig[subject]

                      return (
                        <div key={subject}>
                          {/* Subject Heading */}
                          <div className={`flex items-center gap-4 mb-6 pb-4 border-b-2 ${cfg.light.split(' ')[1]}`}>
                            <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${cfg.color} flex items-center justify-center text-white text-2xl font-bold shadow-lg`}>
                              {cfg.emoji}
                            </div>
                            <div>
                              <h2 className="text-xl font-black font-graphik text-[#224292] tracking-tight">
                                Faculty of {subject}
                              </h2>
                              <p className="text-[#64779F] text-sm font-medium">
                                {subjectFaculty.length} faculty member{subjectFaculty.length !== 1 ? 's' : ''}
                              </p>
                            </div>
                            <span className={`ml-auto px-3 py-1 rounded-full text-xs font-black uppercase tracking-widest ${cfg.badge}`}>
                              {subject}
                            </span>
                          </div>

                          {/* Faculty Cards Grid */}
                          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
                            {subjectFaculty.map((f, i) => (
                              <motion.div
                                key={f.name + i}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: i * 0.04 }}
                                onClick={() => setSelectedFaculty(f)}
                                className="bg-white group cursor-pointer border-2 border-[#E5EDF8] shadow-lg shadow-black/[0.08] hover:shadow-2xl hover:shadow-black/20 transition-all flex flex-col h-full overflow-hidden rounded-[14px] font-graphik"
                              >
                                <div
                                  className="w-full aspect-square bg-slate-100 overflow-hidden relative"
                                  style={{ backgroundImage: `url(${facultyBg})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
                                >
                                  {f.image ? (
                                    <img src={f.image} alt={f.name} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                                  ) : (
                                    <div className="w-full h-full flex items-center justify-center text-slate-300">
                                      <GraduationCap size={44} />
                                    </div>
                                  )}
                                </div>
                                <div className="p-[13px] flex flex-col flex-1">
                                  <h3 className="font-bold font-graphik text-[#224292] text-[13px] mb-0.5 leading-tight group-hover:text-[#ffc107] transition-colors">
                                    {f.name}
                                  </h3>
                                  <p className="text-slate-500 text-[11.5px] font-semibold font-graphik leading-tight mb-2.5 line-clamp-2">
                                    {f.designation}
                                  </p>
                                  <div className="mt-auto">
                                    <span className="inline-block text-[8.5px] font-medium font-graphik uppercase tracking-[0.1em] text-[#224292] group-hover:text-[#ffc107] transition-all bg-[#224292]/5 px-2 py-0.5 rounded">
                                      View Bio
                                    </span>
                                  </div>
                                </div>
                              </motion.div>
                            ))}
                          </div>
                        </div>
                      )
                    })}
                  </div>
                ) : (
                  // ── Other departments: original flat layout ──
                  <div>
                    <div className="mb-6">
                      <h2 className="text-2xl font-extrabold font-graphik text-[#224292] mb-1">Our Faculty</h2>
                      <p className="text-[#64779F]">Industry-experienced academics committed to your success</p>
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5">
                      {course.faculty.filter(f => f.category !== 'S&H').map((f, i) => (
                        <motion.div
                          key={f.name}
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: i * 0.05 }}
                          onClick={() => setSelectedFaculty(f)}
                          className="bg-white group cursor-pointer border-2 border-[#E5EDF8] shadow-lg shadow-black/[0.08] hover:shadow-2xl hover:shadow-black/20 transition-all flex flex-col h-full overflow-hidden rounded-[14px] font-graphik"
                        >
                          <div
                            className="w-full aspect-[4/5] bg-slate-100 overflow-hidden relative"
                            style={{ backgroundImage: `url(${facultyBg})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
                          >
                            {f.image ? (
                              <img src={f.image} alt={f.name} className="w-full h-full object-contain object-bottom transition-transform duration-500 group-hover:scale-105" />
                            ) : (
                              <div className="w-full h-full flex items-center justify-center text-slate-300">
                                <GraduationCap size={44} />
                              </div>
                            )}
                          </div>
                          <div className="p-[13px] flex flex-col flex-1">
                            <h3 className="font-bold font-graphik text-[#224292] text-[14px] mb-0.5 leading-tight group-hover:text-[#ffc107] transition-colors">
                              {f.name}
                            </h3>
                            <p className="text-slate-500 text-[12.5px] font-semibold font-graphik leading-tight mb-2.5 line-clamp-2">
                              {f.designation}
                            </p>
                            <div className="mt-auto">
                              <span className="inline-block text-[8.5px] font-medium font-graphik uppercase tracking-[0.1em] text-[#224292] group-hover:text-[#ffc107] transition-all bg-[#224292]/5 px-2 py-0.5 rounded">
                                View Bio
                              </span>
                            </div>
                          </div>
                        </motion.div>
                      ))}
                    </div>

                    {course.faculty.some(f => f.category === 'S&H') && (
                      <>
                        <div className="mb-6 mt-12 pt-6 border-t border-[#E5EDF8]">
                          <h2 className="text-2xl font-extrabold font-graphik text-[#224292] mb-1">Science & Humanities Faculty</h2>
                          <p className="text-[#64779F]">Specialized educators supporting foundational sciences and communication skills</p>
                        </div>
                        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5">
                          {course.faculty.filter(f => f.category === 'S&H').map((f, i) => (
                            <motion.div
                              key={f.name}
                              initial={{ opacity: 0, y: 20 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ delay: i * 0.05 }}
                              onClick={() => setSelectedFaculty(f)}
                              className="bg-white group cursor-pointer border-2 border-[#E5EDF8] shadow-lg shadow-black/[0.08] hover:shadow-2xl hover:shadow-black/20 transition-all flex flex-col h-full overflow-hidden rounded-[14px] font-graphik"
                            >
                              <div
                                className="w-full aspect-[4/5] bg-slate-100 overflow-hidden relative"
                                style={{ backgroundImage: `url(${facultyBg})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
                              >
                                {f.image ? (
                                  <img src={f.image} alt={f.name} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                                ) : (
                                  <div className="w-full h-full flex items-center justify-center text-slate-300">
                                    <GraduationCap size={44} />
                                  </div>
                                )}
                              </div>
                              <div className="p-[13px] flex flex-col flex-1">
                                <h3 className="font-bold font-graphik text-[#224292] text-[14px] mb-0.5 leading-tight group-hover:text-[#ffc107] transition-colors">
                                  {f.name}
                                </h3>
                                <p className="text-slate-500 text-[12.5px] font-semibold font-graphik leading-tight mb-2.5 line-clamp-2">
                                  {f.designation}
                                </p>
                                <div className="mt-auto">
                                  <span className="inline-block text-[8.5px] font-medium font-graphik uppercase tracking-[0.1em] text-[#224292] group-hover:text-[#ffc107] transition-all bg-[#224292]/5 px-2 py-0.5 rounded">
                                    View Bio
                                  </span>
                                </div>
                              </div>
                            </motion.div>
                          ))}
                        </div>
                      </>
                    )}
                  </div>
                )}
              </div>
            )}

            {/* --- PLACEMENT --- */}
            {activeTab === 'Placement' && (
              <div className="space-y-8 py-8">
                {/* Placement Philosophy Card */}
                <div className="bg-white rounded-[2rem] border border-[#DEE7F4] p-8 md:p-12 shadow-xl shadow-blue-900/5 relative overflow-hidden group">
                  <div className="absolute top-0 right-0 w-64 h-64 bg-[#224292]/5 rounded-full -mr-32 -mt-32 blur-3xl pointer-events-none" />
                  <div className="absolute bottom-0 left-0 w-32 h-32 bg-[#ffc107]/5 rounded-full -ml-16 -mb-16 blur-2xl pointer-events-none" />

                  <h2 className="text-2xl md:text-3xl font-bold font-graphik mb-6 text-[#224292] flex items-center gap-3">
                    <span className="w-1.5 h-6 bg-[#ffc107] rounded-full inline-block" />
                    Placement Philosophy
                  </h2>
                  <p className="text-slate-600 leading-relaxed text-[15px] md:text-[16px] font-normal font-graphik text-justify">
                    The Placement and Training cell at MBA@KIOT operates with the aim of nurturing industry ready students. MBA@KIOT evolves as a predominant hub in providing students to the industry who have the mental disposition of comprehending requirement of industry and the market reality. They are also well equipped with the required capabilities to manage the market forces and to face the challenge of the corporate world. Adequate and suitable intervention in this regard and student engagement is designed with this framework of mind and training offered to students from the day one of the academic life at MBA@KIOT. In order to attain sustainable capability building process customized attention is given to students taking into consideration their diverse nature to attain formidable progress.
                  </p>
                </div>

                {/* Placement Team */}
                <div className="space-y-6 mt-10">
                  <h2 className="text-2xl md:text-3xl font-bold font-graphik text-[#224292] flex items-center gap-3">
                    <span className="w-1.5 h-6 bg-[#ffc107] rounded-full inline-block" />
                    Placement Team
                  </h2>

                  {/* Desktop view table */}
                  <div className="hidden md:block border border-[#DEE7F4] rounded-2xl overflow-hidden shadow-sm bg-white">
                    <table className="w-full text-left border-collapse">
                      <thead>
                        <tr className="bg-[#224292] text-white">
                          <th className="px-8 py-5 text-[11px] font-bold font-graphik uppercase tracking-[0.2em] text-white">Name & Qualification</th>
                          <th className="px-6 py-5 text-[11px] font-bold font-graphik uppercase tracking-[0.2em] text-white">Designation</th>
                          <th className="px-6 py-5 text-[11px] font-bold font-graphik uppercase tracking-[0.2em] text-white">Mobile</th>
                          <th className="px-6 py-5 text-[11px] font-bold font-graphik uppercase tracking-[0.2em] text-white">Email</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-[#DEE7F4]">
                        {[
                          {
                            name: "Dr. D. Immanuel",
                            qualification: "B.B.A., M.B.A., Ph.D.",
                            designation: "Senior Manager – Placement & Industry Relations",
                            mobile: "+91 76392 45777",
                            email: "placement.kbss@kiot.ac.in",
                            image: placementImmanuelImg
                          },
                          {
                            name: "Prof. G. Padmanaban",
                            qualification: "BE, MBA, UGC-NET, (PhD)",
                            designation: "Manager – Placement & Industry Relations",
                            mobile: "+91 88256 21808",
                            email: "padmanaban@kiot.ac.in",
                            image: placementPadmanabanImg
                          },
                          {
                            name: "Prof. A. Musthaffa",
                            qualification: "MBA., M.Phil.,",
                            designation: "Placement Coordinator",
                            mobile: "+91 81108 90181",
                            email: "po.kbss@kiot.ac.in",
                            image: placementMusthaffaImg
                          },
                          {
                            name: "Dr. P. Rajendran",
                            qualification: "M.E., Ph.D., MISTE.,",
                            designation: "Director – Placement, KIOT",
                            mobile: "+91 99941 33333",
                            email: "pat@kiot.ac.in",
                            image: placementRajendranImg
                          },
                          {
                            name: "Mr. N. C. Balachandran",
                            qualification: "B.Sc., M.A.,",
                            designation: "Senior Placement Consultant",
                            mobile: "—",
                            email: "scpat@kiot.ac.in",
                            image: placementBalachandranImg
                          }
                        ].map((member, idx) => (
                          <tr key={idx} className={`${idx % 2 === 0 ? 'bg-[#E5EDF8]/20' : 'bg-white'} hover:bg-[#E5EDF8]/40 transition-colors`}>
                            <td className="px-8 py-5">
                              <div className="flex items-center gap-4">
                                <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-[#ffc107] bg-slate-50 shrink-0">
                                  {member.image ? (
                                    <img src={member.image} alt={member.name} className="w-full h-full object-cover object-top" />
                                  ) : (
                                    <div className="w-full h-full flex items-center justify-center text-slate-300">
                                      <Users size={20} />
                                    </div>
                                  )}
                                </div>
                                <div>
                                  <div className="font-bold text-[#224292] text-[15px]">{member.name}</div>
                                  <div className="text-xs font-semibold text-slate-500">{member.qualification}</div>
                                </div>
                              </div>
                            </td>
                            <td className="px-6 py-5 text-[#333333] font-semibold text-[14px] leading-snug">
                              {member.designation}
                            </td>
                            <td className="px-6 py-5 text-[#333333] font-bold text-[14px] whitespace-nowrap">
                              {member.mobile}
                            </td>
                            <td className="px-6 py-5">
                              <a href={`mailto:${member.email}`} className="text-[#224292] hover:underline font-bold text-[14px] flex items-center gap-1.5">
                                <Mail size={14} className="text-[#ffc107]" /> {member.email}
                              </a>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>

                  {/* Mobile view cards */}
                  <div className="md:hidden space-y-4">
                    {[
                      {
                        name: "Dr. D. Immanuel",
                        qualification: "B.B.A., M.B.A., Ph.D.",
                        designation: "Senior Manager – Placement & Industry Relations",
                        mobile: "+91 76392 45777",
                        email: "placement.kbss@kiot.ac.in",
                        image: placementImmanuelImg
                      },
                      {
                        name: "Prof. G. Padmanaban",
                        qualification: "BE, MBA, UGC-NET, (PhD)",
                        designation: "Manager – Placement & Industry Relations",
                        mobile: "+91 88256 21808",
                        email: "padmanaban@kiot.ac.in",
                        image: placementPadmanabanImg
                      },
                      {
                        name: "Prof. A. Musthaffa",
                        qualification: "MBA., M.Phil.,",
                        designation: "Placement Coordinator",
                        mobile: "+91 81108 90181",
                        email: "po.kbss@kiot.ac.in",
                        image: placementMusthaffaImg
                      },
                      {
                        name: "Dr. P. Rajendran",
                        qualification: "M.E., Ph.D., MISTE.,",
                        designation: "Director – Placement, KIOT",
                        mobile: "+91 99941 33333",
                        email: "pat@kiot.ac.in",
                        image: placementRajendranImg
                      },
                      {
                        name: "Mr. N. C. Balachandran",
                        qualification: "B.Sc., M.A.,",
                        designation: "Senior Placement Consultant",
                        mobile: "—",
                        email: "scpat@kiot.ac.in",
                        image: placementBalachandranImg
                      }
                    ].map((member, idx) => (
                      <div key={idx} className="bg-slate-50 rounded-2xl border border-[#DEE7F4] p-5 space-y-4 shadow-sm hover:border-[#ffc107] transition-all">
                        <div className="flex items-center gap-4 pb-3 border-b border-[#DEE7F4]/60">
                          <div className="w-14 h-14 rounded-full overflow-hidden border-2 border-[#ffc107] bg-white shrink-0">
                            {member.image ? (
                              <img src={member.image} alt={member.name} className="w-full h-full object-cover object-top" />
                            ) : (
                              <div className="w-full h-full flex items-center justify-center text-slate-300">
                                <Users size={24} />
                              </div>
                            )}
                          </div>
                          <div>
                            <div className="font-bold text-[#224292] text-[15px]">{member.name}</div>
                            <div className="text-xs font-semibold text-slate-500">{member.qualification}</div>
                          </div>
                        </div>
                        <div className="space-y-2 text-[13px]">
                          <div>
                            <span className="font-black text-[10px] tracking-wider text-slate-400 uppercase block">Designation</span>
                            <span className="font-bold text-slate-700 leading-snug">{member.designation}</span>
                          </div>
                          <div className="grid grid-cols-2 gap-4">
                            <div>
                              <span className="font-black text-[10px] tracking-wider text-slate-400 uppercase block">Mobile</span>
                              <span className="font-bold text-slate-700">{member.mobile}</span>
                            </div>
                            <div>
                              <span className="font-black text-[10px] tracking-wider text-slate-400 uppercase block">Email</span>
                              <a href={`mailto:${member.email}`} className="font-bold text-[#224292] hover:underline block truncate">
                                {member.email}
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* --- PLACEMENT DIRECTORY LINKS --- */}
                <div className="space-y-6 mt-12">
                  <h2 className="text-2xl md:text-3xl font-bold font-graphik text-[#224292] flex items-center gap-3">
                    <span className="w-1.5 h-6 bg-[#ffc107] rounded-full inline-block" />
                    Placements & Career Resources
                  </h2>
                  <p className="text-slate-600 leading-relaxed text-[15px] md:text-[16px] font-normal font-graphik mb-4">
                    Access specialized portals for the Placement Cell, career training modules, recruiter lists, and details regarding internships and campus placements.
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
                    {[
                      { title: "Placement Cell", url: "https://kbss.kiot.ac.in/placement-cell/", desc: "Overview and activities of our dedicated cell.", icon: Building2 },
                      { title: "Career Development and Training", url: "https://kbss.kiot.ac.in/placement-training/", desc: "Structured programs to enhance employability skills.", icon: GraduationCap },
                      { title: "Recruiters", url: "https://kbss.kiot.ac.in/recruiters/", desc: "View our list of premier hiring and placement partners.", icon: Users },
                      { title: "Placement Details", url: "https://kbss.kiot.ac.in/placement-details/", desc: "Year-on-year placement records and packages.", icon: BarChart3 },
                      { title: "Internship", url: "https://kbss.kiot.ac.in/internship/", desc: "Opportunities and guidelines for student internships.", icon: Briefcase }
                    ].map((btn, idx) => (
                      <a
                        key={idx}
                        href={btn.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex flex-col p-6 rounded-2xl bg-white border border-[#ffc107] hover:border-[#224292] hover:shadow-xl transition-all duration-300 group/btn shadow-sm"
                      >
                        <div className="w-12 h-12 rounded-xl bg-[#224292]/5 flex items-center justify-center text-[#224292] group-hover/btn:bg-[#ffc107] group-hover/btn:text-[#224292] mb-4 transition-colors">
                          <btn.icon size={22} />
                        </div>
                        <h3 className="font-bold text-base text-[#224292] mb-2 group-hover/btn:text-[#ffc107] transition-colors leading-tight">{btn.title}</h3>
                        <p className="text-xs text-slate-500 leading-relaxed mb-4 flex-grow">{btn.desc}</p>
                        <span className="inline-flex items-center gap-1.5 text-xs font-bold text-[#224292] group-hover/btn:underline mt-auto">
                          Visit Page <ExternalLink size={12} />
                        </span>
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* --- LABS --- */}
            {activeTab === 'Labs' && (
              <div className="w-full">
                {/* DESKTOP VIEW: Sidebar + Detail Panel (Visible only on lg and above) */}
                <div className="hidden lg:flex flex-row gap-8">
                  {/* Left Sidebar: Lab List */}
                  <div className="lg:w-1/3 xl:w-1/4 space-y-3 max-h-[750px] overflow-y-auto px-4 py-2 pr-2">
                    <div className="mb-6 px-1">
                      <h2 className="text-xl font-bold font-graphik text-[#224292] tracking-tight mb-1">Labs & Facilities</h2>
                      <p className="text-[#64779F] text-xs font-bold font-graphik leading-relaxed">Select a facility to view full technical specifications.</p>
                    </div>
                    {course.labs.map((lab, i) => {
                      const LabIcon = lab.icon;
                      const isDesktopSelected = openLabIndices[0] === i;
                      return (
                        <button
                          key={lab.name}
                          onClick={() => setOpenLabIndices([i])}
                          className={`w-full p-4 rounded-2xl border-2 transition-all flex items-center gap-4 text-left group ${isDesktopSelected
                            ? 'bg-[#224292] border-[#224292] text-white shadow-xl shadow-[#224292]/20'
                            : 'bg-white border-[#E5EDF8] text-[#224292] hover:border-[#224292]/30'
                            }`}
                        >
                          <div className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 transition-all ${isDesktopSelected ? 'bg-[#ffc107] text-[#224292]' : 'bg-[#224292]/5 text-[#224292] group-hover:bg-[#224292] group-hover:text-white'
                            }`}>
                            {LabIcon && <LabIcon size={20} />}
                          </div>
                          <span className="text-[14px] font-bold font-graphik tracking-tight leading-tight flex-1">{lab.name}</span>
                          <ChevronRight size={14} className={isDesktopSelected ? 'text-[#ffc107]' : 'text-[#64779F] opacity-40'} />
                        </button>
                      );
                    })}
                  </div>

                  {/* Right Panel: Lab Details (Desktop only shows the first active index) */}
                  <div ref={labsDetailRef} className="flex-1">
                    <AnimatePresence mode="wait">
                      {openLabIndices[0] !== null && course.labs[openLabIndices[0]] && (() => {
                        const activeLab = course.labs[openLabIndices[0]];
                        return (
                          <motion.div
                            key={openLabIndices[0]}
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -20 }}
                            className="bg-white rounded-2xl border border-[#DEE7F4] shadow-2xl shadow-blue-900/5 overflow-hidden flex flex-col"
                          >
                            {/* Lab Header */}
                            <div className="bg-[#224292] p-3 md:p-4 relative overflow-hidden shrink-0">
                              <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -mr-32 -mt-32 blur-3xl" />
                              <div className="relative z-10 flex flex-col md:flex-row items-center gap-5">
                                <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl bg-white/10 flex items-center justify-center border border-white/20">
                                  {activeLab.icon && (
                                    (() => {
                                      const LargeIcon = activeLab.icon;
                                      return <LargeIcon size={22} className="text-[#ffc107]" />;
                                    })()
                                  )}
                                </div>
                                <div className="text-center md:text-left">
                                  <h3 className="text-lg md:text-xl font-bold font-graphik text-white tracking-tight mb-0.5">{activeLab.name}</h3>
                                </div>
                              </div>
                            </div>

                            {/* Lab Content Scrollable Area */}
                            <div className="p-8 md:p-12 space-y-10 overflow-y-auto custom-scrollbar">
                              {/* Inventory / Equipment */}
                              <div>
                                <div className="flex items-center gap-3 mb-6">
                                  <div className="w-1.5 h-6 bg-[#ffc107] rounded-full" />
                                  <h4 className="text-[14px] font-bold font-graphik text-[#64779F] tracking-[0.1em]">Technical Inventory & Tools</h4>
                                </div>
                                <div className="grid sm:grid-cols-2 gap-3">
                                  {activeLab.equipments?.map((item, idx) => (
                                    <div key={idx} className="flex gap-3 p-4 rounded-2xl bg-slate-50 border border-slate-100 items-start group hover:bg-white hover:border-[#ffc107]/20 transition-all">
                                      <div className="w-2 h-2 rounded-full bg-[#ffc107] mt-1.5 shrink-0 group-hover:scale-125 transition-all" />
                                      <span className="text-[14px] font-medium font-graphik text-slate-600 leading-tight tracking-tight">{item}</span>
                                    </div>
                                  )) || (
                                      <p className="text-[#64779F] italic text-sm">Main specialized equipment list is being updated.</p>
                                    )}
                                </div>
                              </div>

                              {/* Personnel / Staff */}
                              <div className="pt-10 border-t border-slate-100 grid md:grid-cols-2 gap-8">
                                <div className="bg-[#224292]/5 p-6 rounded-2xl border border-[#224292]/10">
                                  <p className="text-[14px] font-bold font-graphik tracking-widest text-[#64779F] mb-3">Facility In-Charge</p>
                                  <p className="text-[#224292] font-bold font-graphik text-[14px]">{activeLab.incharge || 'Department HOD'}</p>
                                </div>
                                <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200">
                                  <p className="text-[14px] font-bold font-graphik tracking-widest text-[#64779F] mb-3">Technical Staff</p>
                                  <p className="text-[#224292] font-bold font-graphik text-[14px]">{activeLab.technician || 'Engineering Technician'}</p>
                                </div>
                              </div>
                            </div>
                          </motion.div>
                        );
                      })()}
                    </AnimatePresence>
                  </div>
                </div>

                {/* MOBILE VIEW: Multi-Expandable Accordion List (Visible only below lg) */}
                <div className="lg:hidden space-y-4 px-2 pb-10">
                  <div className="mb-6 px-1">
                    <h2 className="text-xl font-bold font-graphik text-[#224292] tracking-tight mb-1">Labs & Facilities</h2>
                    <p className="text-[#64779F] text-xs font-bold font-graphik leading-relaxed">Expand Multiple facilities to compare inventory.</p>
                  </div>
                  {course.labs.map((lab, i) => {
                    const LabIcon = lab.icon;
                    const isOpen = openLabIndices.includes(i);
                    return (
                      <div key={lab.name} className="flex flex-col">
                        <button
                          onClick={(e) => {
                            if (isOpen) {
                              // Close it
                              setOpenLabIndices(prev => prev.filter(idx => idx !== i));
                            } else {
                              // Open it (Add to set, so others don't close)
                              setOpenLabIndices(prev => [...prev, i].sort());
                              // Also scroll it into view after a tiny moment
                              setTimeout(() => {
                                e.currentTarget.scrollIntoView({ behavior: 'smooth', block: 'start' });
                              }, 100);
                            }
                          }}
                          className={`w-full p-4 rounded-2xl border-2 transition-all flex items-center gap-4 text-left ${isOpen
                            ? 'bg-[#224292] border-[#224292] text-white shadow-xl shadow-[#224292]/20 rounded-b-none'
                            : 'bg-white border-[#E5EDF8] text-[#224292] hover:border-[#224292]/30'
                            }`}
                        >
                          <div className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 transition-all ${isOpen ? 'bg-[#ffc107] text-[#224292]' : 'bg-[#224292]/5 text-[#224292]'
                            }`}>
                            {LabIcon && <LabIcon size={20} />}
                          </div>
                          <span className="text-[14px] font-bold font-graphik tracking-tight leading-tight flex-1">{lab.name}</span>
                          <ChevronDown size={18} className={`transition-transform duration-300 ${isOpen ? 'rotate-180 text-[#ffc107]' : 'text-[#64779F] opacity-40'}`} />
                        </button>

                        <AnimatePresence>
                          {isOpen && (
                            <motion.div
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: "auto", opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              className="bg-white border-2 border-t-0 border-[#224292] rounded-b-2xl overflow-hidden"
                            >
                              <div className="p-6 space-y-8">
                                {/* Mobile Content Display */}
                                <div className="flex items-center gap-3 pb-4 border-b border-slate-100">
                                  <Building2 size={14} className="text-[#ffc107]" />
                                  <p className="text-[#64779F] text-[14px] font-bold font-graphik tracking-widest">{course.name}</p>
                                </div>

                                <div>
                                  <div className="flex items-center gap-2 mb-4">
                                    <div className="w-1 h-4 bg-[#ffc107] rounded-full" />
                                    <h4 className="text-[14px] font-bold font-graphik text-[#64779F] tracking-wider">Inventory & Tools</h4>
                                  </div>
                                  <div className="grid gap-2">
                                    {lab.equipments?.map((item, idx) => (
                                      <div key={idx} className="flex gap-3 p-3 rounded-xl bg-slate-50 border border-slate-100 items-start">
                                        <div className="w-1.5 h-1.5 rounded-full bg-[#ffc107] mt-1.5 shrink-0" />
                                        <span className="text-[14px] font-medium font-graphik text-slate-600 leading-tight tracking-tight">{item}</span>
                                      </div>
                                    ))}
                                  </div>
                                </div>

                                {courseId !== 'be-cse' && (
                                  <div className="grid gap-3 pt-4 border-t border-slate-100">
                                    <div className="bg-[#224292]/5 p-4 rounded-xl border border-[#224292]/10">
                                      <p className="text-[14px] font-bold font-graphik uppercase tracking-widest text-[#64779F] mb-1">In-Charge</p>
                                      <p className="text-[#224292] font-bold font-graphik text-[14px]">{lab.incharge}</p>
                                    </div>
                                    <div className="bg-slate-50 p-4 rounded-xl border border-slate-200">
                                      <p className="text-[14px] font-bold font-graphik uppercase tracking-widest text-[#64779F] mb-1">Technician</p>
                                      <p className="text-[#224292] font-bold font-graphik text-[14px]">{lab.technician}</p>
                                    </div>
                                  </div>
                                )}
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    );
                  })}
                </div>
              </div>
            )}

            {/* --- PATENTS --- */}
            {activeTab === 'Patents' && (
              <div className="space-y-10">
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-slate-100">
                  <div>
                    <h2 className="text-3xl md:text-5xl font-bold font-graphik text-[#224292] tracking-tight mb-2">
                      Department <span className="text-[#ffc107]">Patents</span>
                    </h2>
                  </div>
                  <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#224292]/5 rounded-xl border border-[#224292]/10 text-[#224292] text-[10px] font-bold font-graphik uppercase tracking-widest">
                    <ShieldCheck size={14} /> Registered Assets
                  </div>
                </div>

                {course.patents && course.patents.length > 0 ? (
                  <div className="space-y-12">
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      className="bg-white rounded-2xl border border-[#E5EDF8] shadow-2xl shadow-blue-900/5 overflow-hidden"
                    >
                      <div className="bg-[#224292] px-8 py-5 flex items-center justify-between">
                        <h3 className="text-white font-bold font-graphik text-lg tracking-tight">Official Department Patents</h3>
                      </div>

                      <div className="overflow-x-auto">
                        <table className="w-full text-left border-collapse">
                          <thead>
                            <tr className="bg-slate-50 border-b border-slate-100">
                              <th className="px-6 py-4 text-[11px] font-black text-[#224292] uppercase tracking-widest">Applicant & Inventor</th>
                              <th className="px-6 py-4 text-[11px] font-black text-[#224292] uppercase tracking-widest">Patent Title</th>
                              <th className="px-6 py-4 text-[11px] font-black text-[#224292] uppercase tracking-widest">Type</th>
                              <th className="px-6 py-4 text-[11px] font-black text-[#224292] uppercase tracking-widest">Application/Design No</th>
                              <th className="px-6 py-4 text-[11px] font-black text-[#224292] uppercase tracking-widest">Date</th>
                              <th className="px-6 py-4 text-[11px] font-black text-[#224292] uppercase tracking-widest">Status</th>
                            </tr>
                          </thead>
                          <tbody className="divide-y divide-slate-100">
                            {course.patents.map((yearGroup) => (
                              yearGroup.data.map((patent, pIdx) => (
                                <tr key={`${yearGroup.year}-${pIdx}`} className="hover:bg-blue-50/30 transition-colors group">
                                  <td className="px-6 py-5">
                                    <p className="text-[13px] font-bold text-black leading-tight mb-1">{patent.inventors}</p>
                                  </td>
                                  <td className="px-6 py-5">
                                    <p className="text-[13px] font-medium text-black leading-snug max-w-md">{patent.title}</p>
                                  </td>
                                  <td className="px-6 py-5">
                                    <span className="text-[11px] font-bold text-[#64779F]">{patent.type}</span>
                                  </td>
                                  <td className="px-6 py-5">
                                    <code className="text-[12px] font-bold text-[#224292] bg-slate-100 px-2 py-1 rounded">{patent.appNo}</code>
                                  </td>
                                  <td className="px-6 py-5 text-sm font-medium text-slate-600 whitespace-nowrap">{patent.date}</td>
                                  <td className="px-6 py-5">
                                    <span className={`inline-block px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest ${patent.status === 'Granted' ? 'bg-emerald-100 text-emerald-700' : 'bg-blue-100 text-blue-700'
                                      }`}>
                                      {patent.status}
                                    </span>
                                  </td>
                                </tr>
                              ))
                            ))}
                          </tbody>
                        </table>
                      </div>
                    </motion.div>
                  </div>
                ) : courseId === 'be-civil' ? null : (
                  <div className="grid lg:grid-cols-2 gap-8">
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      whileHover={{ y: -10, scale: 1.01 }}
                      viewport={{ once: true }}
                      className="group relative bg-white p-7 rounded-2xl border border-[#E5EDF8] shadow-2xl shadow-blue-900/5 flex flex-col items-center text-center transition-all duration-500"
                    >
                      <div className="absolute top-0 left-0 w-8 h-8 border-t-4 border-l-4 border-dashed border-[#224292]/20 rounded-tl-2xl" />
                      <div className="w-16 h-16 rounded-2xl bg-[#224292]/5 border border-[#224292]/10 flex items-center justify-center mb-6 group-hover:bg-[#224292] group-hover:text-white transition-all duration-500">
                        <FileText size={32} className="text-[#224292] group-hover:text-white transition-colors" />
                      </div>
                      <h3 className="text-lg font-bold font-graphik text-[#224292] mb-3">Official Patents</h3>
                      <p className="text-[#64779F] text-sm font-medium font-graphik leading-relaxed">
                        Our faculty and students are actively involved in research leading to patents. Detailed patent registrations for this department are currently being updated.
                      </p>
                      <div className="mt-6 pt-5 border-t border-slate-50 w-full text-[9px] font-bold font-graphik text-[#A9B1C3] uppercase tracking-[0.2em]">
                        Academic Year 2024-25
                      </div>
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      whileHover={{ y: -10, scale: 1.01 }}
                      transition={{ delay: 0.1 }}
                      viewport={{ once: true }}
                      className="group bg-gradient-to-br from-[#224292] to-[#224292] rounded-2xl p-7 text-white shadow-2xl shadow-blue-900/20 relative overflow-hidden transition-all duration-500"
                    >
                      <div className="absolute -bottom-1 -right-1 w-12 h-12 border-b-4 border-r-4 border-dashed border-[#ffc107]/30 rounded-br-2xl" />
                      <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full -mr-16 -mt-16 blur-2xl" />
                      <div className="relative z-10">
                        <div className="w-14 h-14 rounded-xl bg-white/10 flex items-center justify-center mb-6 border border-white/20 group-hover:border-[#ffc107] transition-all">
                          <Award size={28} className="text-[#ffc107]" />
                        </div>
                        <h3 className="text-lg font-bold font-graphik mb-3 tracking-tight">Research Excellence</h3>
                        <p className="text-white/70 text-sm font-medium font-graphik leading-relaxed mb-6">
                          We foster innovation. All patent applications and IPR are managed through the Institutional Research & Development Cell.
                        </p>
                        <button className="flex items-center gap-3 px-5 py-2.5 bg-white/10 hover:bg-white/20 border border-white/20 rounded-xl text-[9px] font-bold font-graphik uppercase tracking-widest transition-all">
                          Contact R&D <ArrowRight size={14} />
                        </button>
                      </div>
                    </motion.div>
                  </div>
                )}
              </div>
            )}

            {/* --- INDUSTRY CONNECT (MBA & MBA-IEV ONLY) --- */}
            {activeTab === 'Industry' && (
              <div className="space-y-10 py-8">
                {/* Header Section */}
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-slate-100">
                  <div>
                    <h2 className="text-3xl md:text-5xl font-bold font-graphik text-[#224292] tracking-tight mb-2">
                      Industry <span className="text-[#ffc107]">Connect</span>
                    </h2>
                    <p className="text-slate-600 leading-relaxed text-[15px] md:text-[16px] font-normal font-graphik max-w-2xl">
                      Explore our active collaborations, executive leadership programs, professional society affiliations, and corporate connect initiatives at MBA@KIOT.
                    </p>
                  </div>
                  <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#224292]/5 rounded-xl border border-[#224292]/10 text-[#224292] text-[10px] font-bold font-graphik uppercase tracking-widest shrink-0">
                    <ShieldCheck size={14} /> Corporate Linkages
                  </div>
                </div>

                {/* Main Industry Links (MoUs, Leadership, Alumni, etc.) */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {[
                    { title: "MoU(s)", url: "https://kbss.kiot.ac.in/signing-of-mou/", desc: "Strategic partnerships and agreements of understanding with leading industries.", icon: FileText },
                    { title: "Leadership Forum", url: "https://kbss.kiot.ac.in/executive-interaction-programme/", desc: "Executive interaction programmes and expert forums.", icon: Users },
                    { title: "Alumni Retrospection", url: "https://kbss.kiot.ac.in/alumni-retrospection/", desc: "Networking and sharing sessions with our accomplished alumni network.", icon: GraduationCap },
                    { title: "CEO of the Month", url: "https://kbss.kiot.ac.in/ceo-of-the-month/", desc: "Regular interactive interactions with industry chief executive officers.", icon: Trophy },
                    { title: "Corporate Scholarship", url: "https://kbss.kiot.ac.in/corporate-scholarship/", desc: "Sponsorship and scholarship programs funded by our corporate partners.", icon: Award },
                    { title: "Industrial Visit", url: "https://kbss.kiot.ac.in/industrial-visit/", desc: "Experiential learning trips and observational visits to premier organizations.", icon: MapPin }
                  ].map((btn, idx) => (
                    <a
                      key={idx}
                      href={btn.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex flex-col p-6 rounded-2xl bg-white border border-[#ffc107] hover:border-[#224292] hover:shadow-xl transition-all duration-300 group/btn shadow-sm"
                    >
                      <div className="w-12 h-12 rounded-xl bg-[#224292]/5 flex items-center justify-center text-[#224292] group-hover/btn:bg-[#ffc107] group-hover/btn:text-[#224292] mb-4 transition-colors">
                        <btn.icon size={22} />
                      </div>
                      <h3 className="font-bold text-lg text-[#224292] mb-2 group-hover/btn:text-[#ffc107] transition-colors leading-tight">{btn.title}</h3>
                      <p className="text-xs text-slate-500 leading-relaxed mb-4 flex-grow">{btn.desc}</p>
                      <span className="inline-flex items-center gap-1.5 text-xs font-bold text-[#224292] group-hover/btn:underline mt-auto">
                        Visit Page <ExternalLink size={12} />
                      </span>
                    </a>
                  ))}
                </div>

                {/* Subcategory: Professional Societies */}
                <div className="pt-10 border-t border-slate-100 space-y-6">
                  <h3 className="text-2xl font-bold font-graphik text-[#224292] flex items-center gap-3">
                    <span className="w-1.5 h-6 bg-[#ffc107] rounded-full inline-block" />
                    Professional Societies
                  </h3>
                  <p className="text-slate-600 leading-relaxed text-[15px] md:text-[16px] font-normal font-graphik mb-4">
                    Active student chapters and memberships in premier professional management and industry bodies.
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {[
                      { title: "Madras Management Association (MMA)", url: "https://kbss.kiot.ac.in/madras-management-association/", desc: "Access to MMA learning networks and management programs.", icon: Building2 },
                      { title: "CII", url: "https://kbss.kiot.ac.in/cii/", desc: "Confederation of Indian Industry association activities.", icon: Briefcase },
                      { title: "Rotaract Club", url: "https://kbss.kiot.ac.in/rotaract-club/", desc: "Community leadership and youth service engagement club.", icon: Globe },
                      { title: "NIPM", url: "https://kbss.kiot.ac.in/national-institute-of-personnel-management/", desc: "National Institute of Personnel Management chapter relations.", icon: ShieldCheck }
                    ].map((btn, idx) => (
                      <a
                        key={idx}
                        href={btn.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex flex-col p-6 rounded-2xl bg-white border border-[#ffc107] hover:border-[#224292] hover:shadow-xl transition-all duration-300 group/btn shadow-sm"
                      >
                        <div className="w-12 h-12 rounded-xl bg-[#224292]/5 flex items-center justify-center text-[#224292] group-hover/btn:bg-[#ffc107] group-hover/btn:text-[#224292] mb-4 transition-colors">
                          <btn.icon size={22} />
                        </div>
                        <h3 className="font-bold text-base text-[#224292] mb-2 group-hover/btn:text-[#ffc107] transition-colors leading-tight">{btn.title}</h3>
                        <p className="text-xs text-slate-500 leading-relaxed mb-4 flex-grow">{btn.desc}</p>
                        <span className="inline-flex items-center gap-1.5 text-xs font-bold text-[#224292] group-hover/btn:underline mt-auto">
                          Visit Page <ExternalLink size={12} />
                        </span>
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            )}


            {activeTab === 'Achievements' && (courseId === 'be-cse' || courseId === 'be-eee' || courseId === 'btech-aids') && (
              <AchievementSection courseId={courseId} courseName={course.name} />
            )}

            {activeTab === 'Awards' && (courseId === 'be-cse' || courseId === 'btech-csbs' || courseId === 'be-civil' || courseId === 'btech-aids') && (
              <AwardsSection courseId={courseId} courseName={course.name} />
            )}

            {activeTab === 'Clubs' && courseId === 'btech-csbs' && (
              <ClubsSection />
            )}

            {/* --- EVENTS --- */}
            {activeTab === 'Events' && (
              <div className="space-y-8 py-8 max-w-3xl mx-auto">
                {/* Table Header */}
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                  <div>
                    <h2 className="text-3xl font-bold font-graphik text-[#224292] flex items-center gap-3">
                      <span className="w-1.5 h-8 bg-[#ffc107] rounded-full inline-block" />
                      Events & Student Activities
                    </h2>
                    <p className="text-slate-500 text-sm mt-1">
                      A list of events, workshops, guest lectures, and student activities.
                    </p>
                  </div>
                </div>

                {/* Events Table */}
                <div className="border border-[#DEE7F4] rounded-2xl overflow-hidden shadow-sm bg-white">
                  <table className="w-full text-left border-collapse">
                    <thead>
                      <tr className="bg-[#224292] text-white">
                        <th className="px-6 py-4 text-[11px] font-bold font-graphik uppercase tracking-[0.2em] text-white w-[15%]">S.No</th>
                        <th className="px-6 py-4 text-[11px] font-bold font-graphik uppercase tracking-[0.2em] text-white">Event / Activity Name</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-[#DEE7F4]">
                      {eventsList
                        .filter(event => {
                          if (event.course === 'Both') return true;
                          if (courseId === 'mba-general' && event.course === 'MBA') return true;
                          if (courseId === 'mba-iev' && event.course === 'MBA-IEV') return true;
                          return false;
                        })
                        .map((event, idx) => (
                          <tr key={idx} className={`${idx % 2 === 0 ? 'bg-[#E5EDF8]/10' : 'bg-white'} hover:bg-[#E5EDF8]/30 transition-colors text-[14px]`}>
                            <td className="px-6 py-4 font-bold text-slate-500 w-[15%]">
                              {idx + 1}
                            </td>
                            <td className="px-6 py-4 pr-8">
                              <a
                                href={event.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center justify-between w-full font-bold text-[#224292] hover:text-[#ffc107] hover:underline transition-colors leading-tight group"
                              >
                                <span>{event.name}</span>
                                <ArrowRight size={14} className="shrink-0 text-[#224292] group-hover:text-[#ffc107] group-hover:translate-x-1 transition-all ml-4" />
                              </a>
                            </td>
                          </tr>
                        ))}
                    </tbody>
                  </table>
                </div>
              </div>
            )}

            {activeTab === 'Innovative Practices' && (
              <InnovativePracticesSection courseId={courseId} courseName={course.name} />
            )}

            {/* --- CONTACT & ADMISSION --- */}
            {activeTab === 'Contact & Admission' && (
              <div className="space-y-8 py-8 max-w-4xl mx-auto">
                <div className="bg-white rounded-[2rem] border border-[#DEE7F4] p-8 md:p-12 shadow-xl shadow-blue-900/5 overflow-hidden">
                  <h2 className="text-2xl font-bold font-graphik text-[#224292] mb-6 flex items-center gap-3">
                    <span className="w-1.5 h-6 bg-[#ffc107] rounded-full inline-block" />
                    Contact & Admission
                  </h2>
                  <div className="border border-[#DEE7F4] rounded-2xl overflow-hidden shadow-sm">
                    <table className="w-full text-left font-graphik text-[14px]">
                      <tbody className="divide-y divide-[#DEE7F4]">
                        <tr className="bg-[#E5EDF8]/20 hover:bg-[#E5EDF8]/40 transition-colors">
                          <td className="py-4 px-6 font-bold text-[#333333] w-1/3">Landline</td>
                          <td className="py-4 px-6 text-slate-700 font-medium">0427-2433971, 2433972</td>
                        </tr>
                        <tr className="bg-white hover:bg-slate-50 transition-colors">
                          <td className="py-4 px-6 font-bold text-[#333333]">Mobile</td>
                          <td className="py-4 px-6 text-slate-700 font-medium">+91 96009 91166, +91 97877 35666</td>
                        </tr>
                        <tr className="bg-[#E5EDF8]/20 hover:bg-[#E5EDF8]/40 transition-colors">
                          <td className="py-4 px-6 font-bold text-[#333333]">Email</td>
                          <td className="py-4 px-6 text-slate-700 font-medium">
                            <a href="mailto:mba@kiot.ac.in" className="text-[#224292] hover:underline font-bold">
                              mba@kiot.ac.in
                            </a>
                          </td>
                        </tr>
                        <tr className="bg-white hover:bg-slate-50 transition-colors">
                          <td className="py-4 px-6 font-bold text-[#333333]">Counselling Code</td>
                          <td className="py-4 px-6 text-[#224292] font-black">2653</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            )}

            {/* --- ADMISSIONS --- */}
            {activeTab === 'Admissions' && (
              <div className="grid md:grid-cols-2 gap-8">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="relative group"
                >
                  <div className="absolute inset-0 border-2 border-[#224292]/10 rotate-[4deg] rounded-[2rem] pointer-events-none" />
                  <div className="relative bg-white rounded-2xl border border-[#E5EDF8] p-8 shadow-xl shadow-blue-900/5 z-10">
                    <div className="absolute top-0 left-0 -translate-x-1/4 -translate-y-1/2 px-6 py-2 bg-[#224292] text-white rounded-full text-[9px] font-bold font-graphik uppercase tracking-widest shadow-lg">
                      Eligibility
                    </div>
                    <ul className="space-y-4 mt-4">
                      {course.eligibility.map(item => (
                        <li key={item} className="flex items-start gap-4 p-4 rounded-xl bg-slate-50/50 hover:bg-white hover:shadow-md transition-all border border-transparent hover:border-slate-100">
                          <CheckCircle size={18} className="text-[#ffc107] mt-0.5 shrink-0" />
                          <span className="text-[14px] font-bold font-graphik text-[#224292] leading-relaxed">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
                <div className="space-y-4">
                  <div className="bg-[#224292] rounded-2xl p-6 text-white">
                    <h3 className="font-extrabold font-graphik text-lg mb-3">Ready to Apply?</h3>
                    <p className="text-white/70 text-[14px] mb-5">Join thousands of students building their future at KIOT.</p>
                    <button
                      onClick={() => navigate('/admissions')}
                      className="w-full flex items-center justify-center gap-2 py-3.5 rounded-xl bg-[#ffc107] text-[#224292] font-bold font-graphik hover:bg-[#ffca2c] transition-all"
                    >
                      Start Application <ArrowRight size={15} />
                    </button>
                  </div>
                  <div className="bg-white rounded-2xl border border-[#E5EDF8] p-6">
                    <h3 className="font-extrabold font-graphik text-[#224292] mb-3">Need Help?</h3>
                    <p className="text-[#64779F] text-[13px] mb-4">Our admissions team is here to guide you through the process.</p>
                    <a href="tel:9894701234" className="flex items-center gap-2 text-[#224292] font-bold font-graphik text-[14px] hover:text-[#ffc107] transition-colors">
                      <MapPin size={15} className="text-[#ffc107]" /> +91 98947 01234
                    </a>
                  </div>
                </div>
              </div>
            )}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Faculty Profile Modal */}
      <AnimatePresence>
        {selectedFaculty && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[300] bg-black/60 backdrop-blur-md flex items-center justify-center p-4"
            onClick={() => setSelectedFaculty(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              onClick={e => e.stopPropagation()}
              className="bg-white w-full max-w-2xl rounded-lg shadow-2xl overflow-hidden max-h-[90vh] flex flex-col"
            >
              <div className="overflow-y-auto scrollbar-hide flex-1 pb-10">
                <div className="bg-[#224292] p-3 md:p-4 relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-64 h-64 bg-[#ffc107]/5 rounded-full -mr-20 -mt-20 blur-3xl" />

                  {/* Top Right Close Button */}
                  <button
                    onClick={() => setSelectedFaculty(null)}
                    className="absolute top-3 right-3 z-20 w-7 h-7 flex items-center justify-center rounded-md bg-white/10 text-white/70 hover:bg-white/20 hover:text-white transition-all backdrop-blur-sm border border-white/10"
                  >
                    <X size={14} />
                  </button>

                  <div className="relative z-10 flex flex-col md:flex-row items-center gap-4">
                    <div
                      className="w-14 h-14 md:w-16 md:h-16 rounded-md bg-white/10 flex items-center justify-center shrink-0 border border-white/20 overflow-hidden"
                      style={{
                        backgroundImage: `url(${facultyBg})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center'
                      }}
                    >
                      {selectedFacultyImage ? (
                        <img src={selectedFacultyImage} alt={selectedFaculty.name} className="w-full h-full object-cover" />
                      ) : (
                        <GraduationCap size={28} className="text-[#ffc107]" />
                      )}
                    </div>
                    <div className="text-center md:text-left">
                      <h2 className="text-lg md:text-xl font-bold font-graphik text-white mb-1 leading-tight tracking-tight">
                        {selectedFaculty.name}
                      </h2>
                      <p className="text-[#ffc107] font-bold font-graphik text-xs md:text-sm">{selectedFaculty.designation}</p>
                    </div>
                  </div>
                </div>

                <div className="p-6 md:p-8">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
                    <div className="space-y-4">
                      {selectedFaculty.qualification && (
                        <div>
                          <p className="text-[13.5px] font-semibold font-graphik text-[#224292] mb-1">Academic Credentials</p>
                          <p className="text-black font-medium font-graphik text-[12.5px]">{selectedFaculty.qualification}</p>
                        </div>
                      )}
                      {selectedFaculty.specialization && selectedFaculty.specialization !== 'N/A' && (
                        <div>
                          <p className="text-[13.5px] font-semibold font-graphik text-[#224292] mb-1">Area of Specialization</p>
                          <p className="text-black font-medium font-graphik text-[12.5px]">{selectedFaculty.specialization}</p>
                        </div>
                      )}
                      {selectedFaculty.experience && (
                        <div>
                          <p className="text-[13.5px] font-semibold font-graphik text-[#224292] mb-1">Work Experience</p>
                          <div className="flex items-center gap-2 text-black">
                            <Clock size={14} className="text-black/80" />
                            <span className="font-medium font-graphik text-[12.5px]">{selectedFaculty.experience}</span>
                          </div>
                        </div>
                      )}
                      {(selectedFaculty.joiningDate || selectedFaculty.doj) && (
                        <div>
                          <p className="text-[13.5px] font-semibold font-graphik text-[#224292] mb-1">Date of Joining</p>
                          <p className="text-black font-medium font-graphik text-[12.5px]">{selectedFaculty.joiningDate || selectedFaculty.doj}</p>
                        </div>
                      )}
                    </div>

                    <div className="space-y-4">
                      {selectedFaculty.email && selectedFaculty.email !== 'N/A' && (
                        <div>
                          <p className="text-[13.5px] font-semibold font-graphik text-[#224292] mb-1">E-Mail Address</p>
                          <a href={`mailto:${selectedFaculty.email}`} className="flex items-center gap-2 text-black font-medium font-graphik text-[12.5px] hover:text-[#224292] transition-colors">
                            <Mail size={14} className="text-black/80" />
                            {selectedFaculty.email}
                          </a>
                        </div>
                      )}
                      {selectedFaculty.phone && (
                        <div>
                          <p className="text-[13.5px] font-semibold font-graphik text-[#224292] mb-1">Contact Number</p>
                          <a href={`tel:${selectedFaculty.phone}`} className="flex items-center gap-2 text-black font-medium font-graphik text-[12.5px] hover:text-[#224292] transition-colors">
                            <MapPin size={14} className="text-black/80" />
                            {selectedFaculty.phone}
                          </a>
                        </div>
                      )}
                      {selectedFaculty.association && (
                        <div>
                          <p className="text-[13.5px] font-semibold font-graphik text-[#224292] mb-1">Nature of Association</p>
                          <span className="inline-block px-3 py-1 rounded-md bg-slate-100 text-black text-[11px] font-semibold font-graphik tracking-wide">
                            {selectedFaculty.association}
                          </span>
                        </div>
                      )}
                    </div>
                  </div>

                  {selectedFaculty.publications && (
                    <div className="mt-8 pt-8 border-t border-[#E5EDF8]">
                      <p className="text-[15px] font-semibold font-graphik text-[#224292] mb-2">Research & Publications</p>
                      <div className="p-5 bg-slate-50 border border-slate-200 rounded-xl">
                        <p className="text-black font-medium font-graphik text-[13px] leading-relaxed italic">
                          {selectedFaculty.publications}
                        </p>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

// ─── Awards Section Component ───────────────────────────────────────────────
function AwardsSection({ courseId, courseName }) {
  const [activeAudience, setActiveAudience] = useState(courseId === 'btech-aids' ? 'FACULTY' : 'STUDENT')

  const cseStudentAwards = [
    { sno: 1,  name: 'P. Praveen\nIV Year CSE',             event: 'ISTE Tamilnadu Section',                              level: 'State',    award: 'Best Student Award',                                        title: 'ISTE' },
    { sno: 2,  name: 'M. Ramesh\nIV Year CSE',              event: 'ISTE Tamilnadu Section',                              level: 'State',    award: 'Best Student Award',                                        title: 'ISTE' },
    { sno: 3,  name: 'Vigneshwaran V\nIV Year CSE',         event: 'ISTE Tamilnadu Section',                              level: 'State',    award: 'Best Student Award',                                        title: 'ISTE' },
    { sno: 4,  name: 'Pramoth R\nIV Year CSE',              event: 'ISTE Tamilnadu Section',                              level: 'State',    award: 'Best Student Award',                                        title: 'ISTE' },
    { sno: 5,  name: 'Srinithi E\nIII Year CSE',            event: 'Dr. Kalam Young Achiever Award',                      level: 'National', award: 'Award',                                                     title: 'World Youth Federation' },
    { sno: 6,  name: 'Yuganthika P\nIII Year CSE',          event: 'Dr. Kalam Young Achiever Award',                      level: 'National', award: 'Award',                                                     title: 'World Youth Federation' },
    { sno: 7,  name: 'K. Vaishnavi\nIII Year CSE',          event: 'Designathon & Hackathon',                             level: 'National', award: 'Special Award',                                             title: "Aarvam'25, Cybernaut Edtech Pvt Ltd" },
    { sno: 8,  name: 'K. Atshaya\nIII Year CSE',            event: 'Designathon & Hackathon',                             level: 'National', award: 'Special Award',                                             title: "Aarvam'25, Cybernaut Edtech Pvt Ltd" },
    { sno: 9,  name: 'Abdul Ameer\nIII Year CSE',           event: 'Designathon & Hackathon',                             level: 'National', award: 'Special Award',                                             title: "Aarvam'25, Cybernaut Edtech Pvt Ltd" },
    { sno: 10, name: 'V.A. Vinodhan\nIII Year CSE',         event: 'Designathon & Hackathon',                             level: 'National', award: 'Special Award',                                             title: "Aarvam'25, Cybernaut Edtech Pvt Ltd" },
    { sno: 11, name: 'Karthick V\nII Year CSE',             event: 'Tholkappiyar Award \u2013 Dr. A.P.J. Abdul Kalam',         level: 'State',    award: 'Prestigious Award',                                         title: 'Vaagai Tamil Sangam' },
    { sno: 12, name: 'Balasubramaiyam S\nII Year CSE',      event: 'Tholkappiyar Award \u2013 Dr. A.P.J. Abdul Kalam Award',   level: 'State',    award: 'Prestigious Award',                                         title: 'Vaagai Tamil Sangam' },
  ]

  const csbsStudentAwards = [
    { sno: 1,  name: 'Bavishri M\nB.Tech-II year CSBS',         event: 'Hackathon',                  level: 'National',    award: 'Selected for Final Round', title: 'TechSpirint Hackathon by Google' },
    { sno: 2,  name: 'Tirisigha R\nB.Tech-II year CSBS',        event: 'ICT ACADEMY YouthTalk 2025', level: 'State Level', award: 'Selected for Final Round', title: 'Youth Talk 2025' },
    { sno: 3,  name: 'Akash V\nB.Tech-III year CSBS',           event: 'Hackathon',                  level: 'National',    award: 'First Prize',              title: 'INNOVATIVE-X 2K25 for the project "Deepfake Detection Using AI"' },
    { sno: '', name: 'Akash V\nB.Tech-III year CSBS',           event: 'Hackathon',                  level: 'National',    award: 'Man of the series',        title: "Cyber T20 V5 - India's Premier Cybersecurity Series" },
    { sno: 4,  name: 'Anusuya P B\nB.Tech-III year CSBS',       event: '24 Hours Hackathon',         level: 'State Level', award: '2nd Prize',                title: "Hack IT on'25" },
    { sno: 5,  name: 'Deepak Kumar G S\nB.Tech-III year CSBS',  event: 'Ideathon',                   level: 'National',    award: '2nd prize',                title: "Spring fest'25" },
    { sno: '', name: 'Deepak Kumar G S\nB.Tech-III year CSBS',  event: 'Hackathon',                  level: 'National',    award: 'Selected for Final Round', title: 'Shine Healthcare Hackathon 2025' },
    { sno: '', name: 'Deepak Kumar G S\nB.Tech-III year CSBS',  event: 'Hackathon',                  level: 'National',    award: 'Selected for Final Round', title: 'Sakthi Hackathon - Fintech' },
    { sno: 6,  name: 'Dhivisha S\nB.Tech-III year CSBS',        event: 'Design Patent',              level: 'National',    award: 'Granted',                  title: 'Industrial Image Processing Camera for Defect Identification' },
    { sno: 7,  name: 'Janani T\nB.Tech-III year CSBS',          event: 'Design Patent',              level: 'National',    award: 'Granted',                  title: 'Industrial Image Processing Camera for Defect Identification' },
    { sno: 8,  name: 'Madhumita R\nB.Tech-III year CSBS',       event: 'Design Patent',              level: 'National',    award: 'Granted',                  title: 'Industrial Image Processing Camera for Defect Identification' },
    { sno: 9,  name: 'Samyuktha sri H M\nB.Tech-III year CSBS', event: 'Ideathon',                   level: 'National',    award: '2nd prize',                title: "Spring fest' 25" },
    { sno: 10, name: 'Shobana B\nB.Tech-III year CSBS',         event: 'Design Patent',              level: 'National',    award: 'Granted',                  title: 'Industrial Image Processing Camera for Defect Identification' },
    { sno: 11, name: 'Gayathri R\nB.Tech-IV year CSBS',         event: 'Oracle Fusion Cloud Applications', level: 'International', award: 'Domain Certification', title: 'Participated in Oracle Fusion Cloud Applications HCM' },
    { sno: 12, name: 'Nithyashree S\nB.Tech-IV Year CSBS',      event: 'Oracle Fusion Cloud Applications', level: 'International', award: 'Certified',            title: 'Participated in Oracle Fusion Cloud Applications HCM' },
    { sno: 13, name: 'Sumitha S\nB.Tech-IV year CSBS',          event: 'Japanese Exam N4',                 level: 'International', award: 'Completed with Elite', title: 'N4 level Japanese certificated/NPTEL business Japanese certificated' },
    { sno: 14, name: 'Shobika S\nB.Tech-IV year CSBS',          event: 'Design & Innovation Clinic 2025',  level: 'National',      award: '3rd Runner-up',        title: 'AGROSENSE : A Smart Rover For Precision Agriculture' },
    { sno: '', name: 'Shobika S\nB.Tech-IV year CSBS',          event: 'Hackathon',                        level: 'National',      award: 'Selected for Final Round', title: 'Shine Healthcare Hackathon 2025' },
    { sno: '', name: 'Shobika S\nB.Tech-IV year CSBS',          event: 'Hackathon',                        level: 'National',      award: 'Selected for Final Round', title: "'AI to Glow' Hackathon" },
    { sno: 15, name: 'Surendar R V\nB.Tech-IV Year CSBS',       event: 'Completion of DBMS final exam Conducted by ORACLE Certification', level: 'International', award: 'Domain Certification', title: 'Database Foundations at Oracle academy' },
    { sno: 16, name: 'Vaishnavi V\nB.Tech-IV Year CSBS',        event: 'Oracle Fusion Cloud Applications', level: 'International', award: 'Certified',            title: 'Participated in Oracle Fusion Cloud Applications HCM' },
  ]

  const civilStudentAwards = [
    { year: '2025-2026', sno: 1, name: 'V.SivaSanjay -IV Year CIVIL', event: 'BUILD EXPO 2025-26', level: 'State', award: 'FIRST PRIZE & CASH PRIZE OF Rs.15000/-', title: '"EMERGING ENGINEERS"' },
    { year: '2025-2026', sno: 2, name: 'S.Vijay Sarathy -III Year CIVIL\nK.Prem kumar -III Year CIVIL\nV.Boominathan Narasimman -III Year CIVIL\nP.Ashon -III Year CIVIL', event: 'L&T EDUTECH', level: 'National', award: 'CERTIFICATION OF MERIT TEAM & CASH PRIZE OF Rs.15000/-', title: 'BIM CONTEST2025' },
    { year: '2025-2026', sno: 3, name: 'P.Srinivasa Perumal-III Year CIVIL\nC.Premalatha-III Year CIVIL\nP.Pradeep-II Year CIVIL\nK.Prem kumar-III Year CIVIL\nM.M.Nagaloges-III Year CIVIL\nK.Priyadharshini-II Year CIVIL', event: 'ADANI CEMENTS', level: 'National', award: 'CASH PRIZE OF Rs.7500/-& CASH PRIZE OF Rs.5000/-', title: 'FIBRE REINFORCED CONCRETE BOWLING' },
    { year: '2024-2025', sno: 1, name: 'SanthoshRaj.R\nJayasuryaprakash V,\nSandeep R\nSrinivasan Perumal.P\nPravin.K\nB.E. IIInd & IInd Year CIVIL', event: '"EMERGING ENGINEERS" Contest in BUILD EXPO 2024-25', level: 'State', award: 'THIRD PRIZE & CASH PRIZE OF Rs.5000/-', title: 'CAUVERY CONFLUENCE' },
    { year: '2024-2025', sno: 2, name: 'V.Siva sanjay (Team Lead)\nB.E. IIInd Year CIVIL', event: 'HACKXELERATE\'25( KPR Institute of Engineering and Technology)', level: 'State', award: 'PRESTIGIOUS PROJECT AWARD & CASH PRIZE OF Rs.2000/-', title: 'SAVIOURZ' },
    { year: '2023-2024', sno: 1, name: 'C.Dharshini\nJ.B.Dheeshith\nS.K.Sujan\nP.C.Nithish Kannan\nB.E. II Year CIVIL', event: '"EMERGING ENGINEERS" Contest in BUILD EXPO 2023-24', level: 'State', award: 'THIRD PRIZE & CASH PRIZE OF Rs.5000/-', title: 'Thirumanimutharu Regeneration Process' },
    { year: '2023-2024', sno: 2, name: 'Thiruselvam B\nNijanthan S\nManoj A\nSandeep R\nB.E. IInd Year CIVIL', event: 'XTURCTURA 1.0 miniature Model Making Contest "HERITAGE AND CULTURE"', level: 'State', award: 'SECOND PRIZE & CASH PRIZE OF Rs.2000/-', title: 'Heritage and Culture' },
    { year: '2022-2023', sno: 1, name: 'C.Dharshini\nJ.B.Dheeshith\nS.K.Sujan\nB.Thiruselvam\nP.C.Nithish Kannan\nG.Bharath\nB.E. Ist Year CIVIL', event: '"EMERGING ENGINEERS" Contest in BUILD EXPO 2022-23', level: 'State', award: 'FIRST PRIZE & CASH PRIZE OF Rs.10000/-', title: 'Traffic Free Salem' },
    { year: '2022-2023', sno: 2, name: 'S.Naveen kumar\nV.Keerthi vasan\nV.Sugumar\nS.M.Sanjay\nR.Rishikesevan\nV.G.Arvinth\nP.Guruganapathi\nS.Kowshick\nB.E. IIIrd Year CIVIL', event: 'IITB-FOSSEE MAPATHON', level: 'National', award: '2 TEAMS RECEIVED NOTABLE PARTICIPANTS AWARD', title: 'TRANSPORT & CASE STUDY WITH POLICY MPACTS' },
  ]

  const studentAwards = courseId === 'be-cse' ? cseStudentAwards : (courseId === 'btech-csbs' ? csbsStudentAwards : (courseId === 'be-civil' ? civilStudentAwards : (courseId === 'btech-aids' ? [] : [])))

  const csbsFacultyAwards = [
    { sno: 1,  name: 'Dr.M.Ram kumar,\nHOD/CSBS',     event: 'Paper Publication', level: 'International', award: 'SCI', title: 'Enhancing Healthcare Monitoring through Wearable Computing and Massive MIMO Technology in 5G IoT Networks' },
    { sno: '', name: 'Dr.M.Ram kumar,\nHOD/CSBS',     event: 'Paper Publication', level: 'International', award: 'SCOPUS', title: 'Enhancing Brain Tumor Diagnosis With Hybrid Transfer Learning: A High-Precision Mri-Based Segmentation Model Using Mask R-Cnn' },
    { sno: 2,  name: 'Mrs.C.Nithya\nAP/CSBS',         event: 'Utility Patent',    level: 'National',      award: 'Patent Published', title: 'Identification of Skin Pathology Using Deep Learning' },
    { sno: 3,  name: 'Mrs.C.Vanitha,\nAP/CSBS',       event: 'Design Patent',     level: 'National',      award: 'Patent Published Patent Filled', title: 'Artificial Intelligence Based Usb Device For Managing Multiple Smart Devices' },
    { sno: 4,  name: 'Mrs.R.Yudhayapriya\nAP/CSBS',   event: 'Design Patent',     level: 'National',      award: 'Patent Granted', title: 'Industrial Image Processing Camera For Defect Identification' },
    { sno: 5,  name: 'Mrs.P.Raga Keerthana\nAP/CSBS', event: 'Design Patent',     level: 'National',      award: 'Patent Granted', title: 'Industrial Image Processing Camera For Defect Identification' },
  ]

  const cseFacultyAwards = [
    { sno: 1,  name: 'Mrs.R.Saranya', event: '-', level: '-', award: 'Best Faculty', title: '-' },
    { sno: 2,  name: 'Mrs.K.Saranya', event: '-', level: '-', award: 'Best Faculty', title: '-' },
    { sno: 3,  name: 'Mrs.D.Ramya',   event: '-', level: '-', award: 'Best Faculty', title: '-' },
  ]

  const civilFacultyAwards = [
    { sno: 1, name: 'Dr.P.Prasath', event: 'ECO Journey Award', level: '-', award: 'Second/B+ Brilliant Perfomance', title: 'Greenvio Solutions (GVSN),Maharashtra ,India' },
    { sno: 2, name: 'Mr.P.Selvakumar', event: 'ECO Journey Award', level: '-', award: 'Second/B+ Brilliant Perfomance', title: 'Greenvio Solutions (GVSN),Maharashtra ,India' },
    { sno: 3, name: 'Mr.S.Arulkesavan', event: 'Best Engineer Award', level: '-', award: 'Junior Level', title: 'Institute of Engineers India' },
    { sno: '', name: 'Mr.S.Arulkesavan', event: 'NPTEL – Topper Award', level: '-', award: 'Topper 1%', title: 'Indian Institute of Technology, Indore' },
    { sno: 4, name: 'Mr.B.Sathish kumar', event: 'BIM Contest 2025', level: '-', award: 'Top 10', title: 'L&T EDUTECH,Chennai' },
    { sno: 5, name: 'Mr. R.Elavarasan', event: 'BIM Contest 2025', level: '-', award: 'Expert Guidance and Mentor', title: 'L&T EDUTECH,Chennai' },
    { sno: 6, name: 'Mr. L.M.Nirmal', event: 'BIM Contest 2025', level: '-', award: 'Expert Guidance and Mentor', title: 'L&T EDUTECH,Chennai' },
    { sno: 7, name: 'Mr. S.Senthil Kumar', event: 'NEXUS Catalyst Award', level: '-', award: 'Token of Appreciation', title: 'L&T EDUTECH,Chennai' },
  ]

  const aidsFacultyAwards = [
    {
      sno: 1,
      name: 'Mrs. B. Bhuvaneswari\nAssistant Professor',
      event: 'International Journal (SCIE)',
      level: 'International',
      award: 'Best Faculty',
      title: 'Deep sight: Transformer‐based prediction of diabetic retinopathy using Py-Torch'
    },
    {
      sno: 2,
      name: 'Dr. A. Gomathi\nAssociate Professor',
      event: 'NPTEL',
      level: 'National',
      award: 'Star Award',
      title: 'NPTL DISCIPLINE STAR'
    },
    {
      sno: 3,
      name: 'Dr. B. Sasikumar\nAssociate Professor & Head',
      event: 'National Award Ceremony',
      level: 'National',
      award: 'Best Research Grant Award',
      title: 'National Technology Day Higher Education Award 2026'
    }
  ]

  const facultyAwards = courseId === 'btech-csbs'
    ? csbsFacultyAwards
    : (courseId === 'be-cse'
        ? cseFacultyAwards
        : (courseId === 'be-civil'
            ? civilFacultyAwards
            : (courseId === 'btech-aids' ? aidsFacultyAwards : [])))

  const visibleData = activeAudience === 'STUDENT' ? studentAwards : facultyAwards

  const levelColor = (level) => {
    if (!level) return 'bg-slate-100 text-slate-600'
    const l = level.toLowerCase()
    if (l.includes('national'))      return 'bg-blue-50 text-blue-700'
    if (l.includes('international')) return 'bg-purple-50 text-purple-700'
    if (l.includes('state'))         return 'bg-green-50 text-green-700'
    if (l.includes('regional'))      return 'bg-orange-50 text-orange-700'
    if (l.includes('district'))      return 'bg-yellow-50 text-yellow-700'
    return 'bg-slate-100 text-slate-600'
  }

  return (
    <div className="space-y-10">
      {/* Header */}
      <div className="flex flex-col xl:flex-row xl:items-end justify-between gap-8 pb-8 border-b border-[#D5E2F4]/50">
        <div>
          <div className="flex items-center gap-4 mb-4">
            <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#ffc107] to-[#e0a800] flex items-center justify-center shadow-xl shadow-[#ffc107]/20">
              <Award size={28} className="text-[#224292]" />
            </div>
            <div>
              <h3 className="text-4xl font-bold font-graphik text-[#224292] tracking-tight leading-none mb-1">Department Awards</h3>
              <p className="text-black font-medium font-graphik text-sm tracking-wide">Recognising outstanding contributions and excellence</p>
            </div>
          </div>
          <p className="text-[#A9B1C3] text-[11px] font-bold font-graphik tracking-[0.2em]">Department of {courseName.replace(/^B\.?E\.?\s*/i, '')}</p>
        </div>
        {/* Student / Faculty toggle */}
        <div className="bg-white p-1 rounded-2xl flex self-start w-fit border border-[#D5E2F4] shadow-xl shadow-blue-900/5">
          {[{ id: 'STUDENT', label: 'Student' }, { id: 'FACULTY', label: 'Faculty' }].map(tab => (
            <button
              key={tab.id}
              onClick={() => setActiveAudience(tab.id)}
              className={`px-8 py-3 rounded-xl text-[10px] font-bold font-graphik tracking-[0.2em] transition-all duration-300 ${activeAudience === tab.id ? 'bg-[#ffc107] text-[#224292] shadow-lg shadow-[#ffc107]/20 translate-y-[-1px]' : 'text-[#64779F] hover:bg-slate-50 hover:text-[#224292]'}`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {visibleData.length > 0 ? (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white rounded-2xl overflow-hidden shadow-xl shadow-black/[0.04] border border-slate-200"
        >
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-[#ffc107]">
                <th className="px-4 py-4 text-[11px] font-semibold uppercase tracking-widest text-[#224292] text-center">S.No</th>
                <th className="px-4 py-4 text-[11px] font-semibold uppercase tracking-widest text-[#224292]">{activeAudience === 'STUDENT' ? 'Name of the Student' : 'Name of the Faculty'}</th>
                {!(activeAudience === 'FACULTY' && courseId === 'be-cse') && (
                  <th className="px-4 py-4 text-[11px] font-semibold uppercase tracking-widest text-[#224292]">Name of the Event</th>
                )}
                {!(activeAudience === 'FACULTY' && (courseId === 'be-cse' || courseId === 'be-civil')) && (
                  <th className="px-4 py-4 text-[11px] font-semibold uppercase tracking-widest text-[#224292] text-center">Level</th>
                )}
                <th className="px-4 py-4 text-[11px] font-semibold uppercase tracking-widest text-[#224292]">Distinction / Award</th>
                {!(activeAudience === 'FACULTY' && courseId === 'be-cse') && (
                  <th className="px-4 py-4 text-[11px] font-semibold uppercase tracking-widest text-[#224292]">Title</th>
                )}
              </tr>
            </thead>
            <tbody>
              {visibleData.map((item, idx) => {
                const showYearHeader = activeAudience === 'STUDENT' && item.year && (idx === 0 || item.year !== visibleData[idx - 1].year);
                return (
                  <Fragment key={idx}>
                    {showYearHeader && (
                      <tr className="bg-slate-100">
                        <td colSpan="6" className="px-4 py-3 text-center text-sm font-bold text-slate-800 border-y border-slate-200">
                          STUDENTS AWARDS {item.year}
                        </td>
                      </tr>
                    )}
                    <tr
                      className={`group transition-colors ${idx % 2 === 0 ? 'bg-black/[0.02]' : 'bg-transparent'} hover:bg-[#ffc107]/5`}
                    >
                      <td className="px-4 py-3 text-center text-sm font-bold text-[#224292]">{activeAudience === 'FACULTY' ? (idx + 1) : (item.sno || (idx + 1))}</td>
                      <td className="px-4 py-3 text-sm font-semibold text-slate-800 whitespace-pre-line">{item.name}</td>
                      {!(activeAudience === 'FACULTY' && courseId === 'be-cse') && (
                        <td className="px-4 py-3 text-sm text-slate-700">{item.event}</td>
                      )}
                      {!(activeAudience === 'FACULTY' && (courseId === 'be-cse' || courseId === 'be-civil')) && (
                        <td className="px-4 py-3 text-center">
                          <span className={`inline-block px-3 py-1 rounded-lg text-[10px] font-bold tracking-wide ${levelColor(item.level)}`}>
                            {item.level}
                          </span>
                        </td>
                      )}
                      <td className="px-4 py-3 text-sm text-slate-700 whitespace-pre-line">{item.award}</td>
                      {!(activeAudience === 'FACULTY' && courseId === 'be-cse') && (
                        <td className="px-4 py-3 text-sm text-slate-600 whitespace-pre-line">{item.title}</td>
                      )}
                    </tr>
                  </Fragment>
                );
              })}
            </tbody>
          </table>
        </motion.div>
      ) : (
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="py-24 px-8 rounded-[3rem] bg-white border border-[#D5E2F4]/50 shadow-2xl shadow-blue-900/5 flex flex-col items-center text-center"
        >
          <div className="w-24 h-24 rounded-3xl bg-[#F8FAFC] border border-[#E5EDF8] flex items-center justify-center mb-8">
            <Award size={48} className="text-[#A9B1C3]/40" />
          </div>
          <h4 className="text-xl font-bold font-graphik text-[#224292] mb-3">No {activeAudience === 'STUDENT' ? 'Student' : 'Faculty'} Awards Yet</h4>
          <p className="text-[#64779F] font-bold font-graphik text-sm">Awards will be updated soon.</p>
        </motion.div>
      )}
    </div>
  )
}

function AchievementSection({ courseId, courseName }) {
  const [activeAudience, setActiveAudience] = useState(courseId === 'btech-aids' ? 'FACULTY' : 'STUDENT')

  const eeeStudentAchievements = [
    { sno: 1,  name: 'Nirmal Kumar K\nII Year\nB.E. - EEE',     event: 'Hackathon',                                                                                                          level: 'National',                    award: 'Won 1st Place with the cash prize of Rs.5000/-',                                                     title: 'Animal Detection using ML' },
    { sno: 2,  name: 'Mathavaa Krishna S\nII Year\nB.E. - EEE', event: 'Hackathon',                                                                                                          level: 'National',                    award: 'Won 1st Place with the cash prize of Rs.5000/-',                                                     title: 'Animal Detection using ML' },
    { sno: 3,  name: 'Naveenkumar R\nIII Year\nB.E. - EEE',    event: 'SAE INDIA Electric Four Wheeler Design Challenge 2025',                                                               level: 'National',                    award: 'Won 3rd place with cash prize 25000/-',                                                              title: 'SAE EFWDC 2025' },
    { sno: 4,  name: 'Srinath K\nIII Year\nB.E. - EEE',        event: 'SAE INDIA Electric Four Wheeler Design Challenge 2025',                                                               level: 'National',                    award: 'Won 3rd place with cash prize 25000/-',                                                              title: 'SAE EFWDC 2025' },
    { sno: 5,  name: 'Shivasurya K A\nIII Year\nB.E. - EEE',   event: '1. SAE INDIA Electric Four Wheeler Design Challenge 2025\n2. SAE Embedded system 2025\n3. Nptel Topper and Winter Internship', level: 'National',             award: '1. Won 3rd place with cash prize 25000/-\n2. Won 3rd place with cash prize 3000/-\n3. Three months paid Internship', title: '1. SAE EFWDC 2025\n2. SAE Embedded system\n3. NPTEL – Introduction to Industry 4.0 and Industrial IoT' },
    { sno: 6,  name: 'Anuvarshan M\nIII Year\nB.E. - EEE',     event: 'SAE INDIA Electric Four Wheeler Design Challenge 2025',                                                               level: 'National',                    award: 'Won 3rd place with cash prize 25000/-',                                                              title: 'SAE EFWDC 2025' },
    { sno: 7,  name: 'Nithish Kumar R\nIII Year\nB.E. - EEE',  event: 'SAE INDIA Electric Four Wheeler Design Challenge 2025',                                                               level: 'National',                    award: 'Won 3rd place with cash prize 25000/-',                                                              title: 'SAE EFWDC 2025' },
    { sno: 8,  name: 'Manikandan M\nIII Year\nB.E. - EEE',     event: 'SAE INDIA Electric Four Wheeler Design Challenge 2025',                                                               level: 'National',                    award: 'Won 3rd place with cash prize 25000/-',                                                              title: 'SAE EFWDC 2025' },
    { sno: 9,  name: 'Gowtham S S\nIII Year\nB.E. - EEE',      event: 'SAE INDIA Electric Four Wheeler Design Challenge 2025',                                                               level: 'National',                    award: 'Won 3rd place with cash prize 25000/-',                                                              title: 'SAE EFWDC 2025' },
    { sno: 10, name: 'Diwakar P\nIII Year\nB.E. - EEE',        event: 'Indian E-Bike Championship, Bhopal',                                                                                 level: 'National & International',    award: 'Won team cash price of Rs. 15000/-',                                                                 title: 'Four Wheeler Design' },
    { sno: 11, name: 'Vikram S\nIII Year\nB.E. - EEE',         event: 'Indian E-Bike Championship, Bhopal',                                                                                 level: 'National',                    award: 'Won team cash price of Rs.15000/-',                                                                  title: 'E-Bike Design' },
    { sno: 12, name: 'Sureshraj M R\nIII Year\nB.E. - EEE',    event: 'Indian E-Bike Championship, Bhopal',                                                                                 level: 'National',                    award: 'Won team cash price of Rs.15000/-',                                                                  title: 'E-Bike Design' },
    { sno: 13, name: 'Megavarnan V K\nIII Year\nB.E. - EEE',   event: 'Indian E-Bike Championship, Bhopal',                                                                                 level: 'National',                    award: 'Won team cash price of Rs.15000/-',                                                                  title: 'E-Bike Design' },
    { sno: 14, name: 'Gokulraj G\nIII Year\nB.E. - EEE',       event: 'Indian E-Bike Championship, Bhopal',                                                                                 level: 'National',                    award: 'Won team cash price of Rs.15000/-',                                                                  title: 'E-Bike Design' },
    { sno: 15, name: 'Gopinath S\nIII Year\nB.E. - EEE',       event: 'Indian E-Bike Championship, Bhopal',                                                                                 level: 'National',                    award: 'Won team cash price of Rs.15000/-',                                                                  title: 'E-Bike Design' },
    { sno: 16, name: 'Adhithiyaa G J\nIII Year\nB.E. - EEE',   event: 'Indian E-Bike Championship, Bhopal',                                                                                 level: 'National',                    award: 'Won team cash price of Rs.15000/-',                                                                  title: 'E-Bike Design' },
    { sno: 17, name: 'Sachin S\nIII Year\nB.E. - EEE',         event: 'Indian E-Bike Championship, Bhopal',                                                                                 level: 'National',                    award: 'Won team cash price of Rs.15000/-',                                                                  title: 'E-Bike Design' },
    { sno: 18, name: 'Mahalakshmi D\nIII Year\nB.E. - EEE',    event: '24-hrs. Non-Stop Hackathon organized by KIOT Institution Council, AICTE Idea Lab & iStart in association with Startup TN', level: 'National',               award: 'Secured Third prize with cash prize of Rs.5000/-',                                                   title: 'Wireless Power Transmission for Electric Vehicle' },
    { sno: 19, name: 'Nisha S\nIII Year\nB.E. - EEE',          event: '24-hrs. Non-Stop Hackathon organized by KIOT Institution Council, AICTE Idea Lab & iStart in association with Startup TN', level: 'National',               award: 'Secured Third prize with cash prize of Rs.5000/-',                                                   title: 'Wireless Power Transmission for Electric Vehicle' },
    { sno: 20, name: 'Ashwin Sivakumar\nIII Year\nB.E. - EEE', event: 'SAE Embedded system 2025 – 3rd Edition National Level Competition on Embedded Systems 2025',                          level: 'National',                    award: 'Won Best Hardware Design Award and 3rd place with cash prize 1500/-',                                 title: 'Smart Energy Meter' },
    { sno: 21, name: 'Varsha V\nIII Year\nB.E. - EEE',         event: '24 hrs. Hackathon in association with IEEE – Information Theory Society',                                              level: 'National',                    award: 'Won 2nd Prize with a Cash Award of Rs. 4000',                                                        title: 'Wireless Power Transmission for Electric Vehicle' },
    { sno: 22, name: 'Tharuneswaran S R\nIV Year\nB.E. - EEE', event: 'SAE Embedded system 2025- 3rd Edition National Level Competition on Embedded Systems 2025', level: 'National', award: 'Secured 2nd runner up with the cash prize of Rs.3000/-', title: 'Weather monitoring station' },
    { sno: 23, name: 'Pradheeba C\nIV Year\nB.E. - EEE', event: 'SAE Embedded system 2025- 3rd Edition National Level Competition on Embedded Systems 2025', level: 'National', award: 'Won Best Hardware Design Award and 3rd place with cash prize 1500/-', title: 'Smart Energy Meter' },
    { sno: 24, name: 'Kamalesh S K\nIV Year\nB.E. - EEE', event: 'SAE Embedded system 2025- 3rd Edition National Level Competition on Embedded Systems 2025', level: 'National', award: 'Secured 2nd runner up with the cash prize of Rs.3000/-', title: 'Weather monitoring station' },
    { sno: 25, name: 'Kavin E\nIV Year\nB.E. - EEE', event: 'SAE Embedded system 2025- 3rd Edition National Level Competition on Embedded Systems 2025', level: 'National', award: 'Secured 2nd runner up with the cash prize of Rs.3000/-', title: 'Weather monitoring station' },
    { sno: 26, name: 'Roopika S\nIV Year\nB.E. - EEE', event: 'SAE Embedded system 2025- 3rd Edition National Level Competition on Embedded Systems 2025', level: 'National', award: 'Won Best Hardware Design Award and 3rd place with cash prize 1500/-', title: 'Smart Energy Meter' },
    { sno: 27, name: 'Sangeetha H\nIV Year\nB.E. - EEE', event: 'L&T ideation challenge season 2', level: 'National', award: 'Selected among top 15 teams in national level with paid internship', title: 'AI based SLD design automation' },
    { sno: 28, name: 'Lenin John Paul A\nIV Year\nB.E. - EEE', event: '1. Design and innovation clinic 2025 CMTI\n2. L&T ideation challenge season 2\n3. SAE electric four wheeler design challenge season 2025', level: 'National', award: '1. Secured 3rd runner up with cash prize of ₹10,000\n2. Selected among top 15 teams in national level with Paid internship\n3. Secured 3rd prize with cash prize of ₹25,000', title: '1. Smart rover for precision agriculture\n2. AI based SLD design automation\n3. Electric four wheeler' },
    { sno: 29, name: 'Deenathayal V\nIV Year\nB.E. - EEE', event: 'SAE Electric four wheeler design challenge season 2025', level: 'National', award: 'Secured 3rd prize with cash prize of ₹25,000', title: 'Electric four wheeler' },
    { sno: 30, name: 'Naveen C\nIV Year\nB.E. - EEE', event: 'SAE Embedded system 2025- 3rd Edition National Level Competition on Embedded Systems 2025', level: 'National', award: 'Won Best Hardware Design Award and 3rd place with cash prize 1500/-', title: 'Smart Energy Meter' },
    { sno: 31, name: 'Heema Gouri T\nIV Year\nB.E. - EEE', event: 'NCIIPC-AICTE Pentathon', level: 'National', award: 'Secured AIR 47 among national-level participants and won Internship for 6 Months.', title: 'Cybersecurity' },
    { sno: 32, name: 'Nagakeerthiga R\nIV Year\nB.E. - EEE', event: '1. Patent Filed\n2. Design and innovation clinic 2025 CMTI', level: 'National', award: '1. Patent Filed\n2. Awarded First Runner-Up and received a ₹20,000 cash prize.', title: '1. Design and Development of a Terracotta Tube-Based Eco-Friendly Air Cooler.\n2. Green Breeze Cooler – An innovative eco-friendly air cooling solution.' }
  ]

  const aidsStudentAchievements = [
    { name: 'Kirutheen Kumar. R\nB. Tech-II year - A\nAI&DS', event: 'National Level Hackathon', level: 'National', award: 'Received the Appreciation Prize of Rs. 10000 Cash award', title: 'AI-Assisted Smart Electric Fence System' },
    { name: 'Kirutheen Kumar. R\nB. Tech-II year - A\nAI&DS', event: 'Nxtwave openAI hackathon', level: 'State', award: 'Shortlisted at the state level Buildathon', title: 'AI-assisted medic bot' },
    { name: 'Kirutheen Kumar. R\nB. Tech-II year - A\nAI&DS', event: 'Zonal-level basketball Tournament', level: 'Zonal', award: 'Winner', title: 'Zonal-level basketball' },
    { name: 'Kannadhasan. V\nB. Tech-II year - A\nAI&DS', event: 'Electric Bike Design Challenge', level: 'National', award: 'Won the overall champions award', title: 'National-level Electric Bike Design Challenge' },
    { name: 'Balaji V\nB. Tech-II year - A\nAI&DS', event: 'Paper presentation , Project Expo', level: 'National', award: '3rd Prize', title: 'Threads 25 Sona College of Engineering, Vyugam 26 AVS college of Engineering' },
    { name: 'Karthik V\nB. Tech-II Year\nAI & DS - A', event: 'Hackathon - Call Of Query', level: 'National', award: '1st Prize', title: "TEKHORA'26 MIT Campus, Anna University" },
    { name: 'Mohammed Armaan M S\nB. Tech-II Year\nAI & DS - A', event: 'Hackathon - Call Of Query', level: 'National', award: '1st Prize', title: "TEKHORA'26 MIT Campus, Anna University" },
    { name: 'Jitheeshwaran S\nB. Tech-II Year\nAI & DS - A', event: 'Hackathon - Call Of Query', level: 'National', award: '1st Prize', title: "TEKHORA'26 MIT Campus, Anna University" },
    { name: 'Deva Dharshini S\nB. Tech-II Year\nAI & DS - A', event: 'NPTEL', level: 'National', award: 'Elite', title: 'Programming, Data Structures and Algorithms Using Python' },
    { name: 'Laksshitha Sri T E\nB. Tech-II Year\nAI & DS - A', event: 'NPTEL', level: 'National', award: 'Elite', title: 'Programming in Java' },
    { name: 'Devasena K\nB. Tech-II Year\nAI & DS - A', event: 'NPTEL', level: 'National', award: 'Elite', title: 'E-Business' },
    { name: 'Kavinaya R\nB. Tech-II Year\nAI & DS - A', event: 'Hackathon', level: 'National', award: 'Special category Winners-Best IOT project', title: "Innovate India'2047" },
    { name: 'Harshini K\nB. Tech-II Year\nAI & DS - A', event: 'Hackathon', level: 'National', award: 'Special category Winners-Best IOT project', title: "Innovate India'2047" },
    { name: 'Aarthi S\nB. Tech-II Year\nAI & DS - A', event: 'Hackathon', level: 'National', award: 'Special category Winners-Best IOT project', title: "Innovate India'2047" },
    { name: 'Hariram K V\nB. Tech-II year\nAI & DS', event: 'Paper Presentation', level: 'National', award: '2nd prize', title: 'Aventuro 2k24, ISTE student chapter Kongu Engineering College, Perundurai' },
    { name: 'Bharath A\nB. Tech-II year\nAI & DS', event: 'Paper Presentation', level: 'National', award: '2nd prize', title: 'Aventuro 2k24, ISTE student chapter Kongu Engineering College, Perundurai' },
    { name: 'Geetha M\nB. Tech-II year\nAI & DS', event: 'NPTEL', level: 'National', award: 'Elite', title: 'E-Business' },
    { name: 'Bharathi V\nB.Tech-II Year\nAI & DS - A', event: 'paper presentation', level: 'National', award: '2nd Prize', title: 'Aventuro 2k24, ISTE student chapter Kongu Engineering College, Perundurai' },
    { name: 'Shobika R\nB. Tech-II year - B\nAI&DS', event: 'National Hackathon on wildlife coexistence', level: 'National', award: 'Top 12 finalists across India with an Appreciation prize and a cash prize', title: 'Smart Automated electric fence system for wildlife and human safety (Wildlife Institute of India, Dehradun)' },
    { name: 'Shobika R\nB. Tech-II year - B\nAI&DS', event: 'Next Wave Open AI hackathon', level: 'State', award: 'Shortlisted at the state level Buildathon', title: 'AI-assisted medic bot' },
    { name: 'Shobika R\nB. Tech-II year - B\nAI&DS', event: 'Hackathon', level: 'National', award: 'Top 25 finalist for the 24-hour hackathon', title: 'Smart Automated electric fence system for wildlife and human safety (K. Ramakrishnan College of Technology, Trichy)' },
    { name: 'Tharshini A\nB. Tech-II year - B\nAI&DS', event: 'Hackathon', level: 'National', award: 'Top 25 finalists for the 24-hour hackathon', title: 'Smart Automated electric fence system for wildlife and human safety (K. Ramakrishnan College of Technology, Trichy)' },
    { name: 'Yukesh Kumar T\nB. Tech-II year - B\nAI&DS', event: 'THREADS’25 Symposium', level: 'National', award: '1st Place in Paper Presentation with cash prize', title: 'Gas Leakage detection at IOT (Sona College of Technology)' },
    { name: 'Suseel P S\nB. Tech-II year - B\nAI&DS', event: 'THREADS’25 Symposium', level: 'National', award: '1st Place in Paper Presentation with cash prize', title: 'Gas Leakage detection at IOT (Sona College of Technology)' },
    { name: 'Suseel P S\nB. Tech-II year - B\nAI&DS', event: 'NPTEL Online Certification', level: 'National', award: 'Elite', title: 'Business to Business B2B' },
    { name: 'Yashvanth Suriya M\nB. Tech-II year - B\nAI&DS', event: 'NPTEL Online Certification', level: 'National', award: 'Elite', title: 'Business to Business B2B' },
    { name: 'Sri Sanchive Kumar\nB. Tech-II year - B\nAI&DS', event: 'NPTEL Online Certification', level: 'National', award: 'Elite', title: 'Business to Business B2B' },
    { name: 'Poomiha M\nB. Tech-II year - B\nAI&DS', event: 'NPTEL Online Certification', level: 'National', award: 'Elite', title: 'Business to Business B2B' },
    { name: 'Jayashree N\nB. Tech - III year\nAI&DS', event: '24-hrs Non-Stop Women Hackathon', level: 'National', award: '3rd Place with case prize', title: 'Rising Child Anemia in rural blocks' },
    { name: 'Jayashree N\nB. Tech - III year\nAI&DS', event: 'GCC × SHIFT Hackathon', level: 'National', award: 'Finalist', title: 'Multi-Tenant Task Tracker' },
    { name: 'Madhu Shree. M\nB. Tech - III year\nAI&DS', event: '24-hrs Non-Stop Women Hackathon', level: 'National', award: '3rd Place with case prize', title: 'Rising Child Anemia in rural blocks' },
    { name: 'Madhu Shree. M\nB. Tech - III year\nAI&DS', event: 'GCC × SHIFT Hackathon', level: 'National', award: 'Finalist', title: 'Multi-Tenant Task Tracker' },
    { name: 'Rajamurugan MA\nB.Tech – III year\nAI&DS', event: 'Football Tournament', level: 'Zonal', award: 'Second Prize', title: 'Anna University Zonal Football Tournament held at Adhiyamaan College of Engineering, Hosur' },
    { name: 'Karthickraja G\nB.Tech – III year\nAI & DS', event: 'Hockey Tournament', level: 'Zonal', award: 'Third Prize', title: 'Anna University zonal level tournament at Adiyamaan College of Engineering, Hosur' },
    { name: 'Barathkumar SM\nB.Tech – III year\nAI & DS', event: 'Handball', level: 'Zonal', award: 'Third Prize', title: 'Anna University Zonal Handball Tournament held at Adhiyamaan College of Engineering, Hosur' },
    { name: 'Barathkumar SM\nB.Tech – III year\nAI & DS', event: 'Hockey', level: 'Zonal', award: 'Third Prize', title: 'Anna University Zonal Hockey Tournament held at Adhiyamaan College of Engineering, Hosur' },
    { name: 'Barathkumar SM\nB.Tech – III year\nAI & DS', event: 'Tennis', level: 'Zonal', award: 'Fourth prize', title: 'Anna University Zonal Tennis Tournament held at Adhiyamaan College of Engineering, Hosur' },
    { name: 'Barathkumar SM\nB.Tech – III year\nAI & DS', event: 'Symposium', level: 'National', award: 'First Prize', title: 'IPL Auction' },
    { name: 'Barathkumar SM\nB.Tech – III year\nAI & DS', event: 'Discuss Throw', level: 'Inter College', award: 'First Prize', title: 'Sports Day' },
    { name: 'Barathkumar SM\nB.Tech – III year\nAI & DS', event: 'Cricket', level: 'Inter College', award: 'First Prize', title: 'Sports Day' },
    { name: 'Barathkumar SM\nB.Tech – III year\nAI & DS', event: 'Kabadi', level: 'Inter College', award: 'Second Prize', title: 'Sports Day' },
    { name: 'Barathkumar SM\nB.Tech – III year\nAI & DS', event: 'Sports', level: 'Inter College', award: 'best vice caption of the college', title: 'Sports Day' },
    { name: 'Barathkumar SM\nB.Tech – III year\nAI & DS', event: 'Football', level: 'Inter College', award: 'Second Prize', title: 'Sports Day' },
    { name: 'V.Ramya\nB. Tech - III year\nAI&DS', event: 'CCL 12-hrs Coding Challenge', level: 'National', award: '2nd Place with case prize', title: 'Campus Coders League' },
    { name: 'Deepak PS\nB. Tech - III year\nAI&DS', event: 'Innovative idea contest', level: 'Zonal', award: 'First prize with Award', title: 'Maximizing productivity in MSMEs (Salem Zonal)' },
    { name: 'Deepak PS\nB. Tech - III year\nAI&DS', event: '12 hrs Coding Challenge', level: 'Internal College', award: 'Special prize for achieving highest individual score percentage', title: 'CAMPUS CODERS LEAGUE (12 HRS)' },
    { name: 'Kaviya. A\nB. Tech - III year\nAI&DS', event: 'CCL 12-hrs Coding Challenge', level: 'National', award: '2nd Place with case prize', title: 'Campus Coders League' },
    { name: 'Soundharya. V\nB. Tech - III year\nAI&DS', event: 'UI/UX Designathon', level: 'National', award: 'Special Prize with case prize', title: 'Government police website recreation' },
    { name: 'Soundharya. V\nB. Tech - III year\nAI&DS', event: 'Odoo X SNS Hackathon', level: 'National', award: 'Finalist', title: 'E-Learning Platform' },
    { name: 'Soundharya. V\nB. Tech - III year\nAI&DS', event: '24-hrs Non-Stop Women Hackathon', level: 'National', award: 'Finalist', title: 'BananaMart' },
    { name: 'Soundharya. V\nB. Tech - III year\nAI&DS', event: 'Table tennis', level: 'Zonal', award: 'First Prize', title: 'Anna University Zonal Table Tennis Tournament held at Govt. College of Bargur' },
    { name: 'Soundharya. V\nB. Tech - III year\nAI&DS', event: 'Table tennis', level: 'State', award: 'Third Prize', title: 'SKJ Table Tennis Academy State Level Match' },
    { name: 'Soundharya. V\nB. Tech - III year\nAI&DS', event: 'Hand Ball', level: 'Inter College', award: 'First Prize', title: 'Sports Day' },
    { name: 'Soundharya. V\nB. Tech - III year\nAI&DS', event: 'Throw Ball', level: 'Inter College', award: 'First Prize', title: 'Sports Day' },
    { name: 'Soundharya. V\nB. Tech - III year\nAI&DS', event: 'Table Tennis', level: 'Inter College', award: 'Second Prize', title: 'Sports Day' },
    { name: 'Soundharya. V\nB. Tech - III year\nAI&DS', event: 'Tennis', level: 'Inter College', award: 'Second Prize', title: 'Sports Day' },
    { name: 'Soundharya. V\nB. Tech - III year\nAI&DS', event: 'Shotput', level: 'Inter College', award: 'Third Prize', title: 'Sports Day' },
    { name: 'Soundharya. V\nB. Tech - III year\nAI&DS', event: 'Badminton', level: 'Inter College', award: 'Third Prize', title: 'Sports Day' },
    { name: 'Soundharya. V\nB. Tech - III year\nAI&DS', event: 'Kho Kho', level: 'Inter College', award: 'Third Prize', title: 'Sports Day' },
    { name: 'Soundharya. V\nB. Tech - III year\nAI&DS', event: 'Table Tennis', level: 'District', award: 'Third Prize', title: 'District level at Coimbatore Institute of Technology' },
    { name: 'Soundharya. V\nB. Tech - III year\nAI&DS', event: 'Table tennis', level: 'Zonal', award: 'First Prize', title: 'Anna University Zonal Table Tennis Tournament held at Govt. College of Bargur' },
    { name: 'Umamaheswari. A\nB. Tech - III year\nAI&DS', event: '24-hrs Non-Stop Women Hackathon', level: 'National', award: '3rd Place with cash prize', title: 'Wireless Power Charging for EV vehicles' },
    { name: 'Padma Sree R\nB. Tech - III year\nAI&DS', event: '24-hrs Non-Stop Women Hackathon', level: 'National', award: '3rd Place with cash prize', title: 'Wireless Power Charging for EV vehicles' },
    { name: 'Padma Sree R\nB. Tech - III year\nAI&DS', event: 'Symposium', level: 'National', award: 'Best event organizer certification', title: 'NextGen Talks Paper Presentation' },
    { name: 'Midhun Haridharan\nB. Tech - III year\nAI&DS', event: 'Symposium', level: 'District', award: 'First Prize', title: 'BUILD EXPO 2025-2026' },
    { name: 'Arun Prakash A\nB. Tech - III year\nAI&DS', event: 'Symposium', level: 'District', award: 'First Prize', title: 'BUILD EXPO 2025-2026' },
    { name: 'Vishveswar M\nB. Tech - III year\nAI&DS', event: 'International Conference', level: 'International', award: 'Best Paper Award', title: 'RAG-Based AI for Accurate, Explainable, and Safe Legal Judgement Prediction in the Indian Constitution' },
    { name: 'K. Haris Kumar\nB. Tech - IV year\nAI&DS', event: 'L&T Ideation Challenge 2025', level: 'International', award: 'Secured a stipend internship', title: 'AI-Enabled Data Interpretation & Validation System for SLD Creation.' },
    { name: 'Varsini. S\nB. Tech - IV year\nAI&DS', event: 'SindhanAI\'25 Hackathon', level: 'National', award: '1st Runner-up with cash prize', title: 'AI-Assisted Travel Planning System.' },
    { name: 'Sudarsan. K\nB. Tech - IV year\nAI&DS', event: 'SindhanAI\'25 Hackathon', level: 'National', award: '1st Runner-up with cash prize', title: 'AI-Assisted Travel Planning System.' },
    { name: 'Prasanna. B\nB. Tech - IV year\nAI&DS', event: 'SindhanAI\'25 Hackathon', level: 'National', award: '1st Runner-up with cash prize', title: 'AI-Assisted Travel Planning System.' },
    { name: 'Haris. K. N\nB. Tech - IV year\nAI&DS', event: 'SindhanAI\'25 Hackathon', level: 'National', award: '1st Runner-up with cash prize', title: 'AI-Assisted Travel Planning System.' },
    { name: 'Haris. K. N\nB. Tech - IV year\nAI&DS', event: 'GCC × SHIFT Hackathon', level: 'National', award: 'Winner', title: 'Multi-Tenant Task Tracker' },
    { name: 'Haris. K. N\nB. Tech - IV year\nAI&DS', event: 'Code-zap hackathon 2025', level: 'National', award: 'Finalist', title: 'AI-Assisted Travel Planning System.' },
    { name: 'Maharaj. P. S\nB. Tech - IV year\nAI&DS', event: 'Code-zap hackathon 2025', level: 'National', award: 'Won an educational trip to Singapore', title: 'AI-Based Resume Screener' },
    { name: 'Suberna. R. S\nB. Tech - IV year\nAI&DS', event: 'DigiTechCon25', level: 'National', award: 'Best Paper Award', title: 'Smart Traffic Management System using AI and IOT' },
    { name: 'Suberna. R. S\nB. Tech - IV year\nAI&DS', event: 'Engineers Build Expo 2025-2026', level: 'National', award: 'Won first place with a cash prize of Rs:15,000', title: 'Disaster Management System using AI' },
    { name: 'Suberna. R. S\nB. Tech - IV year\nAI&DS', event: 'Hack-Xelerator', level: 'National', award: 'Special prize with a cash prize of Rs. 2000', title: 'Building Collapse and Disaster Prediction System Using AI and IoT' },
    { name: 'Guna Sree R\nB. Tech - IV year\nAI&DS', event: 'GCC × SHIFT Hackathon', level: 'State', award: 'Winner with cash prize Rs. 25000', title: 'Multi-Tenant Task Tracker' },
    { name: 'Methun. M\nB. Tech - IV year\nAI&DS', event: 'Gen Brainiacs\'25 hackathon', level: 'National', award: '2nd price', title: 'Gamified Tutor' },
    { name: 'Krishna. J\nB. Tech - IV year\nAI&DS', event: 'IIT Kharagpur Summer Internship', level: 'National', award: 'Completed Summer Internship 25', title: 'Summer Internship at IIT Kharagpur' },
    { name: 'Divyadharshini. Y\nB. Tech - IV year\nAI&DS', event: 'Japanese Exam', level: 'National', award: 'Completed Japanese JLPT N5', title: 'Japanese JLPT N5 / N4' },
    { name: 'Murali Prasath. K\nB. Tech - IV year\nAI&DS', event: 'NPTEL Online Certification', level: 'National', award: 'NPTEL Believer award and NPTEL Discipline Star award', title: 'NPTEL' },
    { name: 'Vasudevan. M\nB. Tech - IV year\nAI&DS', event: 'NPTEL Online Certification', level: 'National', award: 'NPTEL Discipline Star Award', title: 'NPTEL' },
    { name: 'Vijay Vignesh K U\nB. Tech - IV year\nAI&DS', event: 'GCC × SHIFT Hackathon', level: 'National', award: 'Winner with a cash prize of 25000 rupees', title: 'Multi-Tenant Task Tracker' },
    { name: 'Ranjith Kumar. A\nB. Tech - IV year\nAI&DS', event: 'NPTEL Online Certification', level: 'National', award: 'Achieved Top 5% (Silver category)', title: 'Programming in Java' }
  ]

  const studentAchievements = courseId === 'be-eee'
    ? eeeStudentAchievements
    : (courseId === 'btech-aids' ? aidsStudentAchievements : [
    // Page 1 – Rows 1–15 (previously 13–27)
    { sno: 1,  name: 'Ashvant Narayan\nIV Year CSE',        event: 'IEEE Paper Presentation Contest 2026',                 level: 'National',       award: 'III Prize',                                                                                               title: 'IEEE Computer Society-Anna University' },
    { sno: 2,  name: 'Dhivesh Y S\nIV Year CSE',            event: 'IEEE Paper Presentation Contest 2026',                 level: 'National',       award: 'III Prize',                                                                                               title: 'IEEE Computer Society-Anna University' },
    { sno: 3,  name: 'Homeashwaraa Parvathan P\nIII Year CSE', event: 'Hackathon 2025',                                   level: 'District',       award: 'Secured II Prize with a cash award of ₹5,000',                                                      title: 'GEN AI - IBM Hackathon 2025' },
    { sno: 4,  name: 'NaveenPrasath\nIII Year CSE',         event: 'Hackathon 2025',                                       level: 'District',       award: 'Secured II Prize with a cash award of ₹5,000',                                                      title: 'GEN AI - IBM Hackathon 2025' },
    { sno: 5,  name: 'Pranesh S\nIII Year CSE',             event: 'Hackathon 2025',                                       level: 'District',       award: 'Secured II Prize with a cash award of ₹5,000',                                                      title: 'GEN AI - IBM Hackathon 2025' },
    { sno: 6,  name: 'Sivaranjan S\nIII Year CSE',          event: 'Hackathon 2025',                                       level: 'District',       award: 'Secured II Prize with a cash award of ₹5,000',                                                      title: 'GEN AI - IBM Hackathon 2025' },
    { sno: 7,  name: 'Vinodhan V A\nIII Year CSE',          event: 'Code Sangam Hackathon',                                level: 'State Level',    award: 'Got Second Runner Up with Cash prize 30000 and Ethical Hacking Essentials Ebook and Recorded Training Videos', title: 'Alliance University - Code Sangam Hackathon' },
    { sno: 8,  name: 'Sudharsana K\nIII Year CSE',          event: 'Code Sangam Hackathon',                                level: 'State Level',    award: 'Got Second Runner Up with Cash prize 30000 and Ethical Hacking Essentials Ebook and Recorded Training Videos', title: 'Alliance University - Code Sangam Hackathon' },
    { sno: 9,  name: 'Thamarai Selvan S\nIII Year CSE',     event: 'Code Sangam Hackathon',                                level: 'State Level',    award: 'Got Second Runner Up with Cash prize 30000 and Ethical Hacking Essentials Ebook and Recorded Training Videos', title: 'Alliance University - Code Sangam Hackathon' },
    { sno: 10, name: 'Danusa Sri M S\nIII Year CSE',        event: 'Code Sangam Hackathon',                                level: 'State Level',    award: 'Got Second Runner Up with Cash prize 30000 and Ethical Hacking Essentials Ebook and Recorded Training Videos', title: 'Alliance University - Code Sangam Hackathon' },
    { sno: 11, name: 'Gowri R\nIII Year CSE',               event: 'Code Sangam Hackathon',                                level: 'State Level',    award: 'Got Second Runner Up with Cash prize 30000 and Ethical Hacking Essentials Ebook and Recorded Training Videos', title: 'Alliance University - Code Sangam Hackathon' },
    { sno: 12, name: 'Badri Narayanan B R\nIII Year CSE',   event: 'Code Sangam Hackathon',                                level: 'State Level',    award: 'Got Second Runner Up with Cash prize 30000 and Ethical Hacking Essentials Ebook and Recorded Training Videos', title: 'Alliance University - Code Sangam Hackathon' },
    { sno: 13, name: 'Damodharan Prakash P\nIII Year CSE',  event: 'Hackathon',                                            level: 'College Level',  award: 'Got special Prize with 2000',                                                                             title: 'GEN AI' },
    { sno: 14, name: 'Harini M\nIII Year CSE',              event: 'Hackathon',                                            level: 'College Level',  award: 'Got special Prize with 2000',                                                                             title: 'GEN AI' },
    { sno: 15, name: 'Brindha S\nIII Year CSE',             event: 'Hackathon',                                            level: 'College Level',  award: 'Got special Prize with 2000',                                                                             title: 'GEN AI' },
    // Page 2 – Rows 16–25 (previously 28–37)
    { sno: 16, name: 'Navashree R K\nIII Year CSE',         event: 'Hackathon',                                            level: 'National',       award: 'I Prize',                                                                                                 title: "KIOT, Institution's Innovation Council" },
    { sno: 17, name: 'Shailashree S\nIII Year CSE',         event: 'IEEE Conference Paper Presentation',                   level: 'National',       award: 'III Prize',                                                                                               title: 'ICSCDS-2025, Adaptive Multimodel Emotion Recognition using Contextual Attention and Task Gated Learning, Sengunthar Engineering college' },
    { sno: 18, name: 'Suganya K A\nIII Year CSE',           event: 'IEEE Conference Paper Presentation',                   level: 'National',       award: 'III Prize',                                                                                               title: 'ICSCDS-2025, Adaptive Multimodel Emotion Recognition using Contextual Attention and Task Gated Learning, Sengunthar Engineering college' },
    { sno: 19, name: 'Vaishnavi K\nIII Year CSE',           event: 'IEEE Conference Paper Presentation',                   level: 'National',       award: 'III Prize',                                                                                               title: 'ICSCDS-2025, Adaptive Multimodel Emotion Recognition using Contextual Attention and Task Gated Learning, Sengunthar Engineering college' },
    { sno: 20, name: 'Vinodhan V A\nIII Year CSE',          event: 'IEEE Conference Paper Presentation',                   level: 'National',       award: 'III Prize',                                                                                               title: 'ICSCDS-2025, Adaptive Multimodel Emotion Recognition using Contextual Attention and Task Gated Learning, Sengunthar Engineering college' },
    { sno: 21, name: 'Jaganathan V\nII Year CSE',           event: 'TN Skills 2025 / INDIA Skills Regional Competition 2025-26', level: 'State / Regional', award: 'II Place, Silver Medal, ₹10,000 cash / III Place, Bronze Medal, ₹25,000 cash',     title: 'TN Skills 2025, State Government / Skill India' },
    { sno: 22, name: 'Akshaya P\nII Year CSE',              event: 'Engineers Day Contest',                                level: 'District Level', award: 'Received a cash award of ₹15,000',                                                                  title: 'Engineers Day' },
    { sno: 23, name: 'JayaVighnesh B K\nII Year CSE',       event: 'Smart Bridge (Internal Hackathon)',                    level: 'College Level',  award: 'Won I Prize with cash award of 5,000',                                                                    title: 'IBM Gen AI' },
    { sno: 24, name: 'Jeevadharshini V\nII Year CSE',       event: 'Smart Bridge (Internal Hackathon)',                    level: 'College Level',  award: 'Won I Prize with cash award of 5,000',                                                                    title: 'IBM Gen AI' },
    { sno: 25, name: 'Kathir S\nII Year CSE',               event: 'Smart Bridge (Internal Hackathon)',                    level: 'College Level',  award: 'Won I Prize with cash award of 5,000',                                                                    title: 'IBM Gen AI' },
    // Page 3 – Rows 26–44 (previously 38–56)
    { sno: 26, name: 'Haasini R\nII Year CSE',              event: 'Smart Bridge (Internal Hackathon)',                    level: 'College Level',  award: 'Won II Prize with cash award of 3000',                                                                    title: 'IBM Gen AI' },
    { sno: 27, name: 'Eniya V G\nII Year CSE',              event: 'Smart Bridge (Internal Hackathon)',                    level: 'College Level',  award: 'Won II Prize with cash award of 3000',                                                                    title: 'IBM Gen AI' },
    { sno: 28, name: 'Gunavathi K L\nII Year CSE',          event: 'Smart Bridge (Internal Hackathon)',                    level: 'College Level',  award: 'Won II Prize with cash award of 3000',                                                                    title: 'IBM Gen AI' },
    { sno: 29, name: 'Dhaksana R\nII Year CSE',             event: 'Smart Bridge (Internal Hackathon)',                    level: 'College Level',  award: 'Won III Prize with cash award of 2500',                                                                   title: 'IBM Gen AI' },
    { sno: 30, name: 'Desika S\nII Year CSE',               event: 'Smart Bridge (Internal Hackathon)',                    level: 'College Level',  award: 'Won III Prize with cash award of 2500',                                                                   title: 'IBM Gen AI' },
    { sno: 31, name: 'Akshaya P\nII Year CSE',              event: 'Smart Bridge (Internal Hackathon)',                    level: 'College Level',  award: 'Won III Prize with cash award of 2500',                                                                   title: 'IBM Gen AI' },
    { sno: 32, name: 'Dharanya M\nII Year CSE',             event: 'Smart Bridge (Internal Hackathon)',                    level: 'College Level',  award: 'Won III Prize with cash award of 2500',                                                                   title: 'IBM Gen AI' },
    { sno: 33, name: 'Dharshini T K\nII Year CSE',          event: 'Smart Bridge (Internal Hackathon)',                    level: 'College Level',  award: 'Won III Prize with cash award of 2500',                                                                   title: 'IBM Gen AI' },
    { sno: 34, name: 'Jaganathan V\nII Year CSE',           event: 'Smart Bridge (Internal Hackathon)',                    level: 'College Level',  award: 'Won Special Prize',                                                                                       title: 'IBM Gen AI' },
    { sno: 35, name: 'Kowshick R\nII Year CSE',             event: 'Smart Bridge (Internal Hackathon)',                    level: 'College Level',  award: 'Won Special Prize',                                                                                       title: 'IBM Gen AI' },
    { sno: 36, name: 'Mosika N\nII Year CSE',               event: 'Smart Bridge (Internal Hackathon)',                    level: 'College Level',  award: 'Won Special Prize',                                                                                       title: 'IBM Gen AI' },
    { sno: 37, name: 'Jhanani S R\nII Year CSE',            event: 'Smart Bridge (Internal Hackathon)',                    level: 'College Level',  award: 'Won Special Prize',                                                                                       title: 'IBM Gen AI' },
    { sno: 38, name: 'Meenatchi K\nII Year CSE',            event: 'Smart Bridge (Internal Hackathon)',                    level: 'College Level',  award: 'Won Special Prize',                                                                                       title: 'IBM Gen AI' },
    { sno: 39, name: 'Kawsika S\nII Year CSE',              event: 'Smart Bridge (Internal Hackathon)',                    level: 'College Level',  award: 'Won Special Prize',                                                                                       title: 'IBM Gen AI' },
    { sno: 40, name: 'Ramya S\nII Year CSE',                event: 'Smart Bridge (Internal Hackathon)',                    level: 'College Level',  award: 'Won Special Prize',                                                                                       title: 'IBM Gen AI' },
    { sno: 41, name: 'Prabhuram B\nII Year CSE',            event: 'Smart Bridge (Internal Hackathon)',                    level: 'College Level',  award: 'Won Special Prize',                                                                                       title: 'IBM Gen AI' },
    { sno: 42, name: 'Naveen Adhithya S\nII Year CSE',      event: 'Smart Bridge (Internal Hackathon)',                    level: 'College Level',  award: 'Won Special Prize',                                                                                       title: 'IBM Gen AI' },
    { sno: 43, name: 'Dharanya M\nII Year CSE',             event: 'Smart Bridge (Internal Hackathon)',                    level: 'College Level',  award: 'Won Special Prize',                                                                                       title: 'IBM Gen AI' },
    { sno: 44, name: 'Dharshini T K\nII Year CSE',          event: 'Smart Bridge (Internal Hackathon)',                    level: 'College Level',  award: 'Won Special Prize',                                                                                       title: 'IBM Gen AI' },
    // Page 4 – Rows 45–66 (previously 57–78)
    { sno: 45, name: 'Bhavana J\nII Year CSE',              event: 'Hackathon',                                            level: 'College Level',  award: 'Secured I Prize with a cash award of ₹25,000',                                                      title: 'Team stratz' },
    { sno: 46, name: 'Inbhatamizhan V\nII Year CSE',        event: 'Hackathon',                                            level: 'College Level',  award: 'Poster Presentation I Prize cash award 1500, Paper Presentation III Prize cash award 500',                title: "Q'QUEST 2026" },
    { sno: 47, name: 'Jeeva P\nII Year CSE',                event: 'Hackathon',                                            level: 'College Level',  award: 'Poster Presentation I Prize cash award 1500, Paper Presentation III Prize cash award 500',                title: "Q'QUEST 2026" },
    { sno: 48, name: 'Vasantharaj G\nII Year CSE',          event: 'Hackathon',                                            level: 'College Level',  award: 'Poster Presentation I Prize cash award 1500, Paper Presentation III Prize cash award 500',                title: "Q'QUEST 2026" },
    { sno: 49, name: 'Kiruthiga M\nII Year CSE',            event: 'Sports / Chess',                                       level: 'District',       award: 'Gold',                                                                                                    title: 'Sports Development Authority of Tamil Nadu' },
    { sno: 50, name: 'Ijaz Ahamed A\nII Year CSE',          event: 'UI/UX Design Challenge',                               level: 'National',       award: 'I Prize',                                                                                                 title: 'SPRING FEST 2K25' },
    { sno: 51, name: 'Jayavighnesh B K\nII Year CSE',       event: 'Code Debugging',                                       level: 'National',       award: 'I Prize',                                                                                                 title: 'SPRING FEST 2K25' },
    { sno: 52, name: 'Karthick Raja S\nII Year CSE',        event: 'Code Debugging',                                       level: 'National',       award: 'I Prize',                                                                                                 title: 'SPRING FEST 2K25' },
    { sno: 53, name: 'Harini E\nII Year CSE',               event: 'Symposium',                                            level: 'National',       award: 'I Prize',                                                                                                 title: 'AUXESIS 2K26' },
    { sno: 54, name: 'Naveen S\nII Year CSE',               event: 'Sports / Ball Badminton',                              level: 'National',       award: 'I Prize',                                                                                                 title: 'Knowledge Institute of Technology' },
    { sno: 55, name: 'Vijay Sai Sree S\nII Year CSE',       event: 'Symposium',                                            level: 'National',       award: 'I Prize',                                                                                                 title: 'NOVITAS 2K26' },
    { sno: 56, name: 'Dilipkumar S\nII Year CSE',           event: 'Pictowords',                                           level: 'National',       award: 'I Prize',                                                                                                 title: 'NOVITAS 2K26' },
    { sno: 57, name: 'Chandru K\nII Year CSE',              event: 'Hack Fusion',                                          level: 'National',       award: 'I Prize',                                                                                                 title: "CYPHORIA'26" },
    { sno: 58, name: 'Karthick V\nII Year CSE',             event: 'Cyber Canvas',                                         level: 'National',       award: 'I Prize',                                                                                                 title: "CYPHORIA'26" },
    { sno: 59, name: 'Boobalan L\nII Year CSE',             event: 'Beyond Belief',                                        level: 'National',       award: 'II Prize',                                                                                                title: 'NOVITAS 2K26' },
    { sno: 60, name: 'Kiruthiga M\nII Year CSE',            event: 'Bug Buster',                                           level: 'National',       award: 'III Prize',                                                                                               title: "SYMTRON'25 & SILIZIUM'25" },
    { sno: 61, name: 'Mosika N\nII Year CSE',               event: 'Bug Buster',                                           level: 'National',       award: 'III Prize',                                                                                               title: "SYMTRON'25 & SILIZIUM'25" },
    { sno: 62, name: 'Sowmiya J\nII Year CSE',              event: 'Paper Presentation',                                   level: 'National',       award: 'III Prize',                                                                                               title: "TECHFINIX'25" },
    { sno: 63, name: 'Suriyakala B\nII Year CSE',           event: 'Paper Presentation',                                   level: 'National',       award: 'III Prize',                                                                                               title: "TECHFINIX'25" },
    { sno: 64, name: 'Yamuna R\nII Year CSE',               event: 'Paper Presentation',                                   level: 'National',       award: 'III Prize',                                                                                               title: "TECHFINIX'25" },
    { sno: 65, name: 'Barathkumar S\nII Year CSE',          event: 'Bug Hunt',                                             level: 'National',       award: 'III Prize',                                                                                               title: 'Dhirajlal Gandhi College of Technology' },
    { sno: 66, name: 'Avishsharan S A\nII Year CSE',        event: 'Sports, Techno & Cultural Fest',                       level: 'National',       award: 'III Prize',                                                                                               title: "VARNAM'26" },

    // Additional entries (Rows 67–76 from upload)
    { sno: 67, name: 'Priyadharshan S\nII Year CSE',      event: 'Sports / Boxing',                    level: 'International', award: 'III Prize', title: 'Anna University Sports Board' },
    { sno: 68, name: 'Siva Shree K V S\nII Year CSE',    event: 'Technical Thesis Paper Presentation', level: 'National',      award: 'III Prize', title: 'INNOVATIX' },
    { sno: 69, name: 'Vishnu S M\nII Year CSE',           event: 'Technical Thesis Paper Presentation', level: 'National',      award: 'III Prize', title: 'INNOVATIX' },
    { sno: 70, name: 'Rithik Aswin A J\nII Year CSE',    event: 'Paper Presentation',                  level: 'National',      award: 'III Prize', title: "CRENNOVA'25" },
    { sno: 71, name: 'Madhurithan M\nI Year CSE',         event: 'Sports / Team KATA',                  level: 'International', award: 'I Prize',   title: 'Rising Goju Karate School' },
    { sno: 72, name: 'Syedabrar R\nI Year CSE',           event: 'Paper Presentation',                  level: 'National',      award: 'I Prize',   title: 'TENET 2K26' },
    { sno: 73, name: 'Bharanidharan P\nI Year CSE',       event: 'Paper Presentation',                  level: 'National',      award: 'I Prize',   title: 'ELECTRIC INTELLIGENZ' },
    { sno: 74, name: 'Sivamanikandan R\nI Year CSE',      event: 'Paper Presentation',                  level: 'National',      award: 'I Prize',   title: 'ELECTRIC INTELLIGENZ' },
    { sno: 75, name: 'Keerthana T\nI Year CSE',           event: 'Paper Presentation',                  level: 'National',      award: 'II Prize',  title: "INNOTECH'26" },
    { sno: 76, name: 'Nitharsana R\nI Year CSE',          event: 'Paper Presentation',                  level: 'National',      award: 'II Prize',  title: "INNOTECH'26" },
  ])

  const eeeFacultyAchievements = [
    {
      sno: 1,
      name: 'Dr.C.Muniraj\nHOD – EEE',
      event: '1. IEEE MDI Fund & IEEE PES Award\n2. L&T ideation challenge season 2\n3. Journal Publications',
      award: '1. IEEE PES MDI Fund 1240 USD from USA\nIEEE PES Best Student Chapter Award 2025\n2. Best Project Guide\n3. Published article in Scopus Indexed Journal\nPaper got Accepted in SCI',
      title: '1. Received “IEEE PES MDI Fund 1240 USD” from USA for organizing two days workshop.\nReceived “IEEE PES Best Student Chapter Award 2025” from IEEE PES Madras Chapter\n2. AI Based SLD Design Automation - Students team was selected one among top 15 teams in national level with paid internship.\n3. Paper Published in Scopus indexed Journal in the title:\n- Design and FPGA Based Realization of an SMC-ESO Enhanced Nonlinear Fractional Order PID Controller for BLDC Motor Speed Control.\n- Electric Vehicle Induction Motor Fault Classifications Using Thermal Image Temperature Matrix Index and Machine Learning.\nPaper got accepted in SCI Journal in the title:\nArtificial Intelligence-Driven Optimal Charging Strategy for EV with Integrated Power Quality Enhancement in Electric Power Grids'
    },
    {
      sno: 2,
      name: 'Dr.V.Kamatchi Kannan\nProf. – EEE',
      event: '1. Patent Granted\n2. Journal Publication',
      award: '1. Indian Patent Office\n2. Scopus indexed Journal and Conferences',
      title: '1. Automatic System For Electrolyte Level Detection And Corrosion Prevention In Lead-Acid Batteries\n2. African Buffalo Optimized Generative Mamdani Fuzzy Controller Based Deep Belief Network for Efficient Speed Control in Permanent Magnet Synchronous Motor\nPresented three Scopus indexed IEEE Conference papers'
    },
    {
      sno: 3,
      name: 'Dr.S.Kalpana Devi\nAssoc. Prof. – EEE',
      event: '1. Best Faculty Award\n2. Journal Publication',
      award: '1. Best Faculty Award\n2. SCI journal and Scopus Conferences',
      title: '1. Ananta Acharya Award\n2. Robust Energy Management Strategy for Fuel Cell Hybrid Electric Vehicles Based on the RPO-DTRN Framework'
    },
    {
      sno: 4,
      name: 'Dr.P.A.Gowri Sankar\nAssoc. Prof. – EEE',
      event: '1. Journal Publication\n2. NPTEL Course',
      award: '1. Scopus Indexed Journal\n2. Elite + Silver',
      title: '1. Published Scopus indexed Journal on Recent Advances of Artificial Intelligence Techniques for Wind Energy Operation and Control Problems\nPublished Scopus indexed Journal on Electric Vehicle Battery Management System: A Comprehensive Review\n2. Teaching and Learning in Engineering (TALE)'
    },
    {
      sno: 5,
      name: 'Mrs.N.Divya\nAsst. Prof. – EEE',
      event: '1. Best Faculty Award\n2. Journal Publications',
      award: '1. Received Best Faculty Award\n2. Published article in Scopus Indexed Journal and Scopus Indexed IEEE International Conferences',
      title: '1. Received Best Faculty Award from National Scientific Research Forum\n2. 1. Published Scopus indexed Journal in the title of Design and FPGA Based Realization of an SMC-ESO Enhanced Nonlinear Fractional Order PID Controller for BLDC Motor Speed Control\n2. Electric Vehicle Induction Motor Fault Classifications Using Thermal Image Temperature Matrix Index and Machine Learning.\n3. Published Scopus indexed IEEE International Conference in the titles:\n- Four Port Isolated PV based EV Charger supports AC and DC Charging\n- A Robust Fuzzy based SOC Estimation and charging method optimization of Lithium Ion battery\n- Design and Implementation of single phase five level Multilevel inverter for EV applications.'
    },
    {
      sno: 6,
      name: 'Mr.M.Jagedeesh raja\nAsst. Prof. – EEE',
      event: '1. Techfest Event\n2. IEEE Conference',
      award: '1. Shortlisted for the final round and presented the best projects developed at IDEA Lab.\n2. Two Scopus-indexed IEEE Conference papers',
      title: '1. AICTE - IDEA Lab Tech Fest event at AICTE HQ, New Delhi\n2. Presented and published the International Conference with the title:\n- Design and Implementation of Cotton Fiber Collector System for Textile Industry.\n- Modelling and Simulation of Five-Level H-Bridge Multilevel Inverter for Grid Connected System.'
    },
    {
      sno: 7,
      name: 'Mrs.P.Rekha\nAsst. Prof. – EEE',
      event: '1. Award IE(I) Engineers Day Celebration\n2. IEEE MDI Fund & IEEE PES Award\n3. Journal Publication\n4. NPTEL',
      award: '1. Best Woman Engineer Award\n2. IEEE PES MDI Fund 1240 USD from USA & IEEE PES Best Student Chapter Award 2025\n3. Paper Published in international Journal and Conferences\n4. NPTEL - Elite+Silver',
      title: '1. Received "Best Woman Engineer Award" from The Institution of Engineers (India) on Sep.2025\n2. Received "IEEE PES MDI Fund 1240 USD" from USA for organizing two days workshop & Received "IEEE PES Best Student Chapter Award 2025" from IEEE PES Madras Chapter.\n3. - Paper Published in Scopus indexed international Journal in the title "Design and FPGA Based Realization of an SMC-ESO Enhanced Nonlinear Fractional Order PID Controller for BLDC Motor Speed Control" in the year 2025.\n- Paper Published in Scopus indexed IEEE international Conference on "An IoT Based hybrid Electric vehicle with wireless charging Technology" in the year 2025.\n4. Completed NPTEL course "Introduction to IoT" and secured 86% - Elite + Silver'
    },
    {
      sno: 8,
      name: 'Mr.P.Balaji\nAsst. Prof. – EEE',
      event: '1. Award IE(I) Engineers Day Celebration\n2. NPTEL\n3. Journal Publication',
      award: '1. Best Engineer Award & Scopus indexed Journal\n2. Elite + Silver\n3. Paper Published in Scopus indexed international Journal',
      title: '1. Best Engineer Award from The Institution of Engineers (India)\n2. Faculty Domain-Advanced Certification from NPTEL\n3. Paper Published in Scopus indexed international Journal in the title "Design and FPGA Based Realization of an SMC-ESO Enhanced Nonlinear Fractional Order PID Controller for BLDC Motor Speed Control" in the year 2025.'
    },
    {
      sno: 9,
      name: 'Mr.G.Karthikeyan\nAsst. Prof. – EEE',
      event: '1. Journal Publication\n2. NPTEL',
      award: '1. Published article in Scopus Indexed Journal and Scopus Indexed IEEE International Conferences\n2. Elite with Silver',
      title: '1. - Published Scopus indexed Journal on Environmental investigation of operating parameters affecting biogas yield- a lab-scale study.\n- Published Scopus indexed IEEE International Conference on the titles:\n  - Automated Dust detection in Solar Panel using Deep learning Architecture.\n  - Variable frequency carrier based modulation scheme.\n2. Design Thinking a Primer'
    },
    {
      sno: 10,
      name: 'Ms.P.Srinithi\nAsst. Prof. – EEE',
      event: '1. NPTEL',
      award: '1. Elite+ Silver (3 courses)\nElite + Gold',
      title: '1. Embedded System with ARM (80%)\n2. Foundation of Cloud IoT Edge ML (77%)\n3. Sensors and Actuators (81%)\n4. Electronic Systems for Cancer Diagnosis (91%-Topper 5%)'
    },
    {
      sno: 11,
      name: 'Mr.M.Rajkumar\nAsst. Prof. – EEE',
      event: '1. Journal Publication\n2. NPTEL',
      award: '1. Scopus indexed international journal papers\n2. Elite With Silver',
      title: '1. - Published Scopus indexed international Journal paper on Environmental investigation of operating parameters affecting biogas yield- a lab-scale study\n- Published Scopus indexed international Journal paper on Recent Advances of Artificial Intelligence Techniques for Wind Energy Operation and Control Problems\n2. Completed NPTEL Course Teaching and Learning in Engineering (TALE) with 75%'
    }
  ]

  const aidsFacultyAchievements = [
    {
      sno: 1,
      name: 'Dr. B. Sasikumar\nAssoc. Prof. & Head',
      event: 'International Conference',
      level: 'International',
      award: '-',
      title: 'Digital Twin Framework with XAI-Explainable AI for Lifestyle-Based Type 2 Diabetes Reversal Prediction'
    },
    {
      sno: 1,
      name: 'Dr. B. Sasikumar\nAssoc. Prof. & Head',
      event: 'Scopus',
      level: 'Scopus',
      award: '-',
      title: 'ICESSM - AI-driven adaptive market learning indicator for automated stock prediction and trading using machine learning'
    },
    {
      sno: 1,
      name: 'Dr. B. Sasikumar\nAssoc. Prof. & Head',
      event: 'Reviewer for IEEE International Conference',
      level: 'Reviewer',
      award: 'Reviewer for IEEE',
      title: 'Reviewer for IEEE International Conference: organized by K J College of Engineering and Management Research, Pune'
    },
    {
      sno: 1,
      name: 'Dr. B. Sasikumar\nAssoc. Prof. & Head',
      event: 'TIDCO\n(Sponsored Research Project) Granted',
      level: 'Govt.',
      award: 'Fund',
      title: 'Automated Tyre Wear and Damage Detection System\n(Rs.24,00,000/-)'
    },
    {
      sno: 1,
      name: 'Dr. B. Sasikumar\nAssoc. Prof. & Head',
      event: 'AICTE – RPS\n(Sponsored Research Project) Granted',
      level: 'Govt.',
      award: 'Fund',
      title: 'Early Fall Risk Prediction System for Elderly People using\nAI and ML Tools\n(Rs.44,00,000/-)'
    },
    {
      sno: 1,
      name: 'Dr. B. Sasikumar\nAssoc. Prof. & Head',
      event: 'Membership',
      level: 'International',
      award: 'Lifetime',
      title: 'Achieved lifetime memberships in MISTE and AMIEE'
    },
    {
      sno: 2,
      name: 'Dr. A. Gomathi\nAssociate Professor',
      event: 'International Conference',
      level: 'International',
      award: '-',
      title: 'Enhanced Handwritten Digit Classification Accuracy with CNNs: A Study using MNIST Dataset'
    },
    {
      sno: 2,
      name: 'Dr. A. Gomathi\nAssociate Professor',
      event: 'International Conference',
      level: 'International',
      award: '-',
      title: 'Intelligent Digitization of Heterogeneous Handwritten Documents using Deep Learning Models'
    },
    {
      sno: 2,
      name: 'Dr. A. Gomathi\nAssociate Professor',
      event: 'International Journal (UGC Care I)',
      level: 'International',
      award: '-',
      title: 'Cluster-Aware Multimodal Transformer System'
    },
    {
      sno: 2,
      name: 'Dr. A. Gomathi\nAssociate Professor',
      event: 'NPTEL',
      level: 'National',
      award: '-',
      title: 'NPTEL DISCIPLINE STAR'
    },
    {
      sno: 2,
      name: 'Dr. A. Gomathi\nAssociate Professor',
      event: 'AICTE – RPS\n(Sponsored Research Project) Granted',
      level: 'Govt.',
      award: 'Fund',
      title: 'Early Fall Risk Prediction System for Elderly People using\nAI and ML Tools\n(Rs.44,00,000/-)'
    },
    {
      sno: 2,
      name: 'Dr. A. Gomathi\nAssociate Professor',
      event: 'AICTE-AQIS-GOC\n(Sponsored Research Project) Granted',
      level: 'Govt.',
      award: 'Fund',
      title: 'International Conference on Computing Business Intelligence and Engineering Technologies\n(Rs.3,00,000/-)'
    },
    {
      sno: 2,
      name: 'Dr. A. Gomathi\nAssociate Professor',
      event: 'NC Publishers',
      level: 'National',
      award: 'Book Chapter',
      title: 'Using Deep Learning for Forecasting in Operations and Logistics'
    },
    {
      sno: 2,
      name: 'Dr. A. Gomathi\nAssociate Professor',
      event: 'Protek Publications, Chennai',
      level: 'National',
      award: 'Book',
      title: 'Smart Systems Engineering: Design and Development in the Internet of Things Era'
    },
    {
      sno: 2,
      name: 'Dr. A. Gomathi\nAssociate Professor',
      event: 'Reviewer for IEEE International Conference',
      level: 'International',
      award: 'Reviewer for IEEE',
      title: 'Reviewer for IEEE International Conference: organized by K J College of Engineering and Management Research, Pune'
    },
    {
      sno: 2,
      name: 'Dr. A. Gomathi\nAssociate Professor',
      event: 'Membership',
      level: 'National',
      award: 'Lifetime',
      title: 'Lifetime membership in ISTE'
    },
    {
      sno: 3,
      name: 'Mr. A. Gopalakrishnan\nAssistant Professor',
      event: 'International Conference',
      level: 'International',
      award: '-',
      title: 'High-Performance Multi-Class Brain Tumor Classification and Analysis Using Optimized Convolutional Neural Networks'
    },
    {
      sno: 3,
      name: 'Mr. A. Gopalakrishnan\nAssistant Professor',
      event: 'International Conference',
      level: 'International',
      award: '-',
      title: 'Enhancing Optical Sensor Image Classification Through Deep Learning with Convolutional Neural Network'
    },
    {
      sno: 3,
      name: 'Mr. A. Gopalakrishnan\nAssistant Professor',
      event: 'International Conference',
      level: 'International',
      award: '-',
      title: 'Design and Development of Sympto Medai: A Symptom-Based Disease Prediction System Using Machine Learning'
    },
    {
      sno: 4,
      name: 'Mrs. V. Brindha\nAssistant Professor',
      event: 'International Conference',
      level: 'International',
      award: '-',
      title: 'Unified AI-Driven complaint communication Dashboard for real-time resolution of omnichannel customer complaints'
    },
    {
      sno: 4,
      name: 'Mrs. V. Brindha\nAssistant Professor',
      event: 'International Conference',
      level: 'International',
      award: '-',
      title: 'AI-Powered faculty Assistant'
    },
    {
      sno: 5,
      name: 'Mr. S. Jayaprakash\nAssistant Professor',
      event: 'International Conference',
      level: 'International',
      award: '-',
      title: 'Chatbot for Supporting Small-Scale farmers (icraisetm-2026)'
    },
    {
      sno: 6,
      name: 'Mrs. P.J. Esther Rani\nAssistant Professor',
      event: 'International Journal',
      level: 'International',
      award: 'SCI',
      title: 'Cognifed Framework for Recovery Guided Federated Intelligence in Academic Cognitive Computing'
    },
    {
      sno: 6,
      name: 'Mrs. P.J. Esther Rani\nAssistant Professor',
      event: 'International Journal',
      level: 'International',
      award: 'SCI',
      title: 'Ethi core AI: Trust Driven Cognitive Intelligence with Emotion Awareness and Transparent Decision making'
    },
    {
      sno: 6,
      name: 'Mrs. P.J. Esther Rani\nAssistant Professor',
      event: 'International Conference',
      level: 'International',
      award: '-',
      title: 'Physionet-x: a lightweight, secure WSN protocol for privacy-preserving patient monitoring'
    },
    {
      sno: 6,
      name: 'Mrs. P.J. Esther Rani\nAssistant Professor',
      event: 'National Conference',
      level: 'National',
      award: '-',
      title: 'Early Risk Detection of Silent Hypothyroidism using Smart Health AI (Hardware-free), National Conference on Innovations in Management, Anna University, Chennai'
    },
    {
      sno: 7,
      name: 'Mrs. B. Bhuvaneswari\nAssistant Professor',
      event: 'International Journal (SCIE)',
      level: 'International',
      award: 'SCIE',
      title: 'Deep sight: Transformer‐based prediction of diabetic retinopathy using Py-Torch'
    },
    {
      sno: 7,
      name: 'Mrs. B. Bhuvaneswari\nAssistant Professor',
      event: 'International Conference (IEEE)',
      level: 'International',
      award: '-',
      title: 'Enhanced Network Performance in WSNs through the Improved PSO-MBO Coverage Algorithm'
    },
    {
      sno: 7,
      name: 'Mrs. B. Bhuvaneswari\nAssistant Professor',
      event: 'National Conference',
      level: 'National',
      award: '-',
      title: 'AI One Step Personalized Career and Education Advisor'
    },
    {
      sno: 8,
      name: 'Mrs. S. Sudha\nAssistant Professor',
      event: 'International Conference',
      level: 'International',
      award: 'IEEE',
      title: 'A Multi-Layer Edge-Cloud Intelligence Framework for Predictive Zoonotic Risk Modeling in Smart Farming Ecosystems'
    },
    {
      sno: 8,
      name: 'Mrs. S. Sudha\nAssistant Professor',
      event: 'International Conference',
      level: 'International',
      award: '-',
      title: 'AI, Robotics, and Quantum Computing in Special Needs Education and Diagnosis: A Survey'
    },
    {
      sno: 8,
      name: 'Mrs. S. Sudha\nAssistant Professor',
      event: 'International Conference',
      level: 'International',
      award: '-',
      title: 'Bone Fracture detection using the yolov8 Algorithm: An automated Deep Learning approach'
    },
    {
      sno: 8,
      name: 'Mrs. S. Sudha\nAssistant Professor',
      event: 'Membership',
      level: 'International',
      award: 'Lifetime',
      title: 'Membership of AMIEE (Artificial Intelligence, Machine Learning, Innovative Entrepreneurs, and Engineers Association)'
    },
    {
      sno: 9,
      name: 'Ms. Selvi M\nAssistant Professor',
      event: 'International Conference',
      level: 'International',
      award: '-',
      title: 'A Digital Learning Twin (DLT) Framework For Predictive And Personalized Student Learning'
    },
    {
      sno: 9,
      name: 'Ms. Selvi M\nAssistant Professor',
      event: 'International Conference',
      level: 'International',
      award: '-',
      title: 'Sense bridge: An offline multimodal mobile application for accessibility using Artificial Intelligence'
    },
    {
      sno: 9,
      name: 'Ms. Selvi M\nAssistant Professor',
      event: 'NPTEL',
      level: 'National',
      award: 'Elite',
      title: 'Introduction to Internet of Things'
    },
    {
      sno: 9,
      name: 'Ms. Selvi M\nAssistant Professor',
      event: 'Membership',
      level: 'International',
      award: 'Lifetime',
      title: 'Membership of AMIEE (Artificial Intelligence, Machine Learning, Innovative Entrepreneurs, and Engineers Association)'
    },
    {
      sno: 10,
      name: 'Mr. Gunasekar B\nAssistant Professor',
      event: 'International Conference',
      level: 'International',
      award: '-',
      title: 'Skillsync Intelligent Resume Builder and Skill Gap Analyzer'
    },
    {
      sno: 10,
      name: 'Mr. Gunasekar B\nAssistant Professor',
      event: 'NPTEL',
      level: 'National',
      award: 'Elite',
      title: 'E - Business'
    },
    {
      sno: 10,
      name: 'Mr. Gunasekar B\nAssistant Professor',
      event: 'NPTEL',
      level: 'National',
      award: 'Elite',
      title: 'Artificial Intelligence (AI) for Management'
    },
    {
      sno: 11,
      name: 'Mr. R. Rameshkumar\nAssistant Professor',
      event: 'International Journal',
      level: 'International',
      award: 'SCI',
      title: 'An AI-powered smart travel companion APP with AR Navigation and real-time itinerary planning'
    },
    {
      sno: 11,
      name: 'Mr. R. Rameshkumar\nAssistant Professor',
      event: 'International Conference',
      level: 'International',
      award: '-',
      title: 'Wandermate: An AI-Powered Smart Travel Companion APP with AR Navigation and Real-time Itinerary Planning'
    },
    {
      sno: 12,
      name: 'Mrs. M. Deepa\nAssistant Professor',
      event: 'International Conference',
      level: 'International',
      award: 'IEEE',
      title: 'Twin Aware Predictive Carbon-Efficient Scheduling for Workload Intelligence Routing in Multi-Region Computing Ecosystem'
    },
    {
      sno: 12,
      name: 'Mrs. M. Deepa\nAssistant Professor',
      event: 'International Conference',
      level: 'International',
      award: '-',
      title: 'An Intelligent System for Bean Leaf Disease Detection In Smart Agriculture'
    },
    {
      sno: 12,
      name: 'Mrs. M. Deepa\nAssistant Professor',
      event: 'International Conference',
      level: 'International',
      award: '-',
      title: 'AI-Powered Low-Code/No-Code Development Platform'
    },
    {
      sno: 12,
      name: 'Mrs. M. Deepa\nAssistant Professor',
      event: 'International Conference',
      level: 'International',
      award: 'IEEE',
      title: 'A Multi-Layer Edge-Cloud Intelligence Framework for Predictive Zoonotic Risk Modeling in Smartfarming Ecosystems'
    },
    {
      sno: 12,
      name: 'Mrs. M. Deepa\nAssistant Professor',
      event: 'Membership',
      level: 'International',
      award: 'Lifetime',
      title: 'Membership of AMIEE (Artificial Intelligence, Machine Learning, Innovative Entrepreneurs, and Engineers Association)'
    },
    {
      sno: 13,
      name: 'Ms. Ranitha N.M\nAssistant Professor',
      event: 'International Journal',
      level: 'International',
      award: 'SCI',
      title: 'AI-driven smart energy scheduling for telecom microgrids using demand forecasting and outage prediction'
    },
    {
      sno: 13,
      name: 'Ms. Ranitha N.M\nAssistant Professor',
      event: 'International Conference',
      level: 'International',
      award: '-',
      title: 'AI-driven adaptive market learning indicator for automated stock prediction and trading using machine learning'
    },
    {
      sno: 14,
      name: 'Mrs. V. Gomathi\nAssistant Professor',
      event: 'International Conference',
      level: 'International',
      award: '-',
      title: 'AI-driven graph-theoretic approaches for disease detection and healthcare analytics on building a sustainable future with recent trends in science and technology'
    },
    {
      sno: 15,
      name: 'Dr. S. Manivel\nAssistant Professor',
      event: 'International Journal',
      level: 'International',
      award: 'SCI',
      title: 'Synthesis, Absorption and Emission Behaviour, Solvation, AIM, Topology, and Docking Studies on 4-(((perfluorophenyl) methylene) amino)-N-(thiazol-2-yl) Benzene Sulfonamide'
    },
    {
      sno: 15,
      name: 'Dr. S. Manivel\nAssistant Professor',
      event: 'National Conference',
      level: 'International',
      award: '-',
      title: 'FTIR and FT-Raman Spectroscopic, NLO Properties, NBO and HOMO-LUMO analyses of 3-methyl Pyrazole'
    },
    {
      sno: 16,
      name: 'Dr. G. Venkatesh\nProfessor',
      event: 'International Journal',
      level: 'International',
      award: 'SCI',
      title: 'PICT Effects and Anticancer Potential on Rosaniline and Spectral Characterisation of Rosaniline/ Cyclodextrin Covered ZnO/ Nanocrystals'
    },
    {
      sno: 16,
      name: 'Dr. G. Venkatesh\nProfessor',
      event: 'International Journal',
      level: 'International',
      award: 'SCI',
      title: 'Azo-Imino Tautomerism in Sudan Red 7B/Cyclodextrin Coated ZnO Nanocomposites: Evidence by Spectral and Microscopic Perspectives'
    },
    {
      sno: 16,
      name: 'Dr. G. Venkatesh\nProfessor',
      event: 'International Journal',
      level: 'International',
      award: 'SCI',
      title: 'Synthesis and Characterisation of Methyl Violet/Cyclodextrin Doped ZnO Nanocrystals'
    },
    {
      sno: 16,
      name: 'Dr. G. Venkatesh\nProfessor',
      event: 'International Journal',
      level: 'International',
      award: 'SCI',
      title: 'Synthesis and Characterisation of Sudan Red-G/Cyclodextrin Doped ZnO Nanocrystals'
    },
    {
      sno: 16,
      name: 'Dr. G. Venkatesh\nProfessor',
      event: 'International Journal',
      level: 'International',
      award: 'SCI',
      title: 'Supramolecular self-assembly and theoretical studies of α-cyclodextrin with 3,5-dihydroxybenzoic acid host: guest inclusion complexes'
    },
    {
      sno: 16,
      name: 'Dr. G. Venkatesh\nProfessor',
      event: 'National Conference',
      level: 'International',
      award: '-',
      title: 'National conference on Energy materials and AI-enabled sustainability solutions'
    },
    {
      sno: 16,
      name: 'Dr. G. Venkatesh\nProfessor',
      event: 'National Conference',
      level: 'National',
      award: '-',
      title: 'National conference on Atom-by-Atom Engineering in clusters'
    },
    {
      sno: 16,
      name: 'Dr. G. Venkatesh\nProfessor',
      event: 'Membership',
      level: 'International',
      award: 'Lifetime',
      title: 'Life membership National Institute for Technical Training & Skill Development'
    }
  ]

  const facultyAchievements = courseId === 'be-eee'
    ? eeeFacultyAchievements
    : (courseId === 'btech-aids' ? aidsFacultyAchievements : [])

  const visibleData = activeAudience === 'STUDENT' ? studentAchievements : facultyAchievements

  const levelColor = (level) => {
    if (!level) return 'bg-slate-100 text-slate-600'
    const l = level.toLowerCase()
    if (l.includes('national')) return 'bg-blue-50 text-blue-700'
    if (l.includes('international')) return 'bg-purple-50 text-purple-700'
    if (l.includes('state')) return 'bg-green-50 text-green-700'
    if (l.includes('regional')) return 'bg-orange-50 text-orange-700'
    if (l.includes('scopus')) return 'bg-amber-50 text-amber-700'
    if (l.includes('reviewer')) return 'bg-teal-50 text-teal-700'
    if (l.includes('govt')) return 'bg-rose-50 text-rose-700'
    return 'bg-slate-100 text-slate-600'
  }

  return (
    <div className="space-y-10">
      {/* Header */}
      <div className="flex flex-col xl:flex-row xl:items-end justify-between gap-8 pb-8 border-b border-[#D5E2F4]/50">
        <div>
          <div className="flex items-center gap-4 mb-4">
            <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#224292] to-[#224292] flex items-center justify-center shadow-xl shadow-[#224292]/20">
              <Trophy size={28} className="text-[#ffc107]" />
            </div>
            <div>
              <h3 className="text-4xl font-bold font-graphik text-[#224292] tracking-tight leading-none mb-1">Department Honors</h3>
              <p className="text-black font-medium font-graphik text-sm tracking-wide">Celebrating academic and professional milestones</p>
            </div>
          </div>
          <p className="text-[#A9B1C3] text-[11px] font-bold font-graphik tracking-[0.2em]">Department of {courseName.replace(/^B\.?E\.?\s*/i, '')}</p>
        </div>

        {/* Student / Faculty toggle */}
        <div className="bg-white p-1 rounded-2xl flex self-start w-fit border border-[#D5E2F4] shadow-xl shadow-blue-900/5">
          {[{ id: 'STUDENT', label: 'Student' }, { id: 'FACULTY', label: 'Faculty' }].map(tab => (
            <button
              key={tab.id}
              onClick={() => setActiveAudience(tab.id)}
              className={`px-8 py-3 rounded-xl text-[10px] font-bold font-graphik tracking-[0.2em] transition-all duration-300 ${activeAudience === tab.id ? 'bg-[#224292] text-white shadow-lg shadow-[#224292]/20 translate-y-[-1px]' : 'text-[#64779F] hover:bg-slate-50 hover:text-[#224292]'}`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* Table */}
      {activeAudience === 'STUDENT' && visibleData.length > 0 ? (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white rounded-2xl overflow-hidden shadow-xl shadow-black/[0.04] border border-slate-200"
        >
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-[#224292] text-white">
                <th className="px-4 py-4 text-[11px] font-semibold uppercase tracking-widest text-center">S.No</th>
                <th className="px-4 py-4 text-[11px] font-semibold uppercase tracking-widest">Name of the Student</th>
                <th className="px-4 py-4 text-[11px] font-semibold uppercase tracking-widest">Name of the Event</th>
                <th className="px-4 py-4 text-[11px] font-semibold uppercase tracking-widest text-center">Level</th>
                <th className="px-4 py-4 text-[11px] font-semibold uppercase tracking-widest">Distinction / Award</th>
                <th className="px-4 py-4 text-[11px] font-semibold uppercase tracking-widest">Title</th>
              </tr>
            </thead>
            <tbody>
              {visibleData.map((item, idx) => {
                const showYearHeader = item.year && (idx === 0 || item.year !== visibleData[idx - 1].year);
                return (
                  <Fragment key={idx}>
                    {showYearHeader && (
                      <tr className="bg-slate-100">
                        <td colSpan="6" className="px-4 py-3 text-center text-sm font-bold text-slate-800 border-y border-slate-200">
                          STUDENTS AWARDS {item.year}
                        </td>
                      </tr>
                    )}
                    <tr
                      className={`group transition-colors ${idx % 2 === 0 ? 'bg-black/[0.02]' : 'bg-transparent'} hover:bg-[#ffc107]/5`}
                    >
                      <td className="px-4 py-3 text-center text-sm font-bold text-[#224292]">{idx + 1}</td>
                      <td className="px-4 py-3 text-sm font-semibold text-slate-800 whitespace-pre-line">{item.name}</td>
                      <td className="px-4 py-3 text-sm text-slate-600 whitespace-pre-line">{item.event}</td>
                      <td className="px-4 py-3 text-center">
                        <span className={`inline-block px-3 py-1 rounded-lg text-[10px] font-bold tracking-wide ${levelColor(item.level)}`}>
                          {item.level}
                        </span>
                      </td>
                      <td className="px-4 py-3 text-sm text-slate-700 whitespace-pre-line">{item.award}</td>
                      <td className="px-4 py-3 text-sm text-slate-600 whitespace-pre-line">{item.title}</td>
                    </tr>
                  </Fragment>
                );
              })}
            </tbody>
          </table>
        </motion.div>
      ) : activeAudience === 'FACULTY' && visibleData.length > 0 ? (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white rounded-2xl overflow-hidden shadow-xl shadow-black/[0.04] border border-slate-200"
        >
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-[#224292] text-white">
                <th className="px-4 py-4 text-[11px] font-semibold uppercase tracking-widest text-center">S.No</th>
                <th className="px-4 py-4 text-[11px] font-semibold uppercase tracking-widest">Achiever Name and Designation</th>
                <th className="px-4 py-4 text-[11px] font-semibold uppercase tracking-widest">Name of the Event / Achievement</th>
                {courseId === 'btech-aids' && (
                  <th className="px-4 py-4 text-[11px] font-semibold uppercase tracking-widest text-center">Level</th>
                )}
                <th className="px-4 py-4 text-[11px] font-semibold uppercase tracking-widest">Distinction / Award</th>
                <th className="px-4 py-4 text-[11px] font-semibold uppercase tracking-widest">Title</th>
              </tr>
            </thead>
            <tbody>
              {visibleData.map((item, idx) => (
                <tr
                  key={idx}
                  className={`group transition-colors ${idx % 2 === 0 ? 'bg-black/[0.02]' : 'bg-transparent'} hover:bg-[#ffc107]/5 border-t border-slate-100`}
                >
                  <td className="px-4 py-3 text-center text-sm font-bold text-[#224292]">{idx + 1}</td>
                  <td className="px-4 py-3 text-sm font-semibold text-slate-800 whitespace-pre-line">{item.name}</td>
                  <td className="px-4 py-3 text-sm text-slate-600 whitespace-pre-line">{item.event}</td>
                  {courseId === 'btech-aids' && (
                    <td className="px-4 py-3 text-center">
                      <span className={`inline-block px-3 py-1 rounded-lg text-[10px] font-bold tracking-wide ${levelColor(item.level)}`}>
                        {item.level}
                      </span>
                    </td>
                  )}
                  <td className="px-4 py-3 text-sm text-slate-700 whitespace-pre-line">{item.award}</td>
                  <td className="px-4 py-3 text-sm text-slate-600 whitespace-pre-line">{item.title}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </motion.div>
      ) : activeAudience === 'FACULTY' ? (
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="py-24 px-8 rounded-[3rem] bg-white border border-[#D5E2F4]/50 shadow-2xl shadow-blue-900/5 flex flex-col items-center text-center"
        >
          <div className="w-24 h-24 rounded-3xl bg-[#F8FAFC] border border-[#E5EDF8] flex items-center justify-center mb-8">
            <Users size={48} className="text-[#A9B1C3]/40" />
          </div>
          <h4 className="text-xl font-bold font-graphik text-[#224292] mb-3">No Faculty Records Yet</h4>
          <p className="text-[#64779F] font-bold font-graphik text-sm">Faculty achievements will be updated soon.</p>
        </motion.div>
      ) : null}
    </div>
  );
}

// ─── Clubs Section Component ───────────────────────────────────────────────
function ClubsSection() {
  const members = [
    { sno: 1, name: 'Mrs. P. Raga Keerthana', affiliation: 'Assistant Professor', position: 'Technical Club In-charge' },
    { sno: 2, name: 'P. Divya', affiliation: 'II CSBS Student', position: 'Student Ambassador' },
    { sno: 3, name: 'R. Keerthi', affiliation: 'II CSBS Student', position: 'Student Ambassador' },
    { sno: 4, name: 'R. Kowshika', affiliation: 'II CSBS Student', position: 'Student Ambassador' },
    { sno: 5, name: 'M. Hasini', affiliation: 'II CSBS Student', position: 'Student Ambassador' },
    { sno: 6, name: 'R. S. Madhumithaa', affiliation: 'II CSBS Student', position: 'Student Ambassador' },
  ];

  const objectives = [
    "Ensure real-time monitoring of environmental conditions in cold chain systems.",
    "Ensure regulatory compliance.",
    "Manage environmental risks effectively.",
    "Optimize energy usage through continuous monitoring."
  ];

  const responsibilities = [
    {
      title: "Planning & Coordination",
      icon: Calendar,
      items: [
        "Plan club activities related to pollutant monitoring.",
        "Organize awareness programmes and technical sessions."
      ]
    },
    {
      title: "Monitoring",
      icon: Target,
      items: [
        "Monitor pollutants using sensors and modern technologies.",
        "Maintain monitoring records and reports."
      ]
    },
    {
      title: "Technical Activities",
      icon: Wrench,
      items: [
        "Encourage innovative monitoring solutions.",
        "Promote practical learning in cold chain technology."
      ]
    }
  ];

  return (
    <div className="space-y-12 py-6">
      {/* Club Overview Card */}
      <div className="bg-[#224292] text-white rounded-3xl p-8 shadow-xl relative overflow-hidden">
        <div className="absolute right-0 bottom-0 translate-x-12 translate-y-12 opacity-10">
          <Cpu size={250} />
        </div>
        <div className="relative z-10">
          <div className="inline-block bg-[#ffc107] text-[#224292] font-black text-[10px] uppercase tracking-widest px-3 py-1 rounded-full mb-4">
            Technical Club
          </div>
          <h4 className="text-2xl md:text-3xl font-bold font-graphik mb-2">
            Technology for Continuous Monitoring (For Pollutants Cold Chain)
          </h4>
          <p className="text-white/80 font-medium font-graphik text-sm">
            Academic Period: <span className="text-[#ffc107] font-bold">June 2024 – May 2025</span>
          </p>
        </div>
      </div>

      {/* Objectives Section */}
      <div className="bg-slate-50 border border-slate-200/60 rounded-3xl p-8">
        <h5 className="text-xl font-bold font-graphik text-[#224292] mb-6 flex items-center gap-2">
          <span className="w-1 h-5 bg-[#ffc107] rounded-full inline-block" />
          Club Objectives
        </h5>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {objectives.map((obj, i) => (
            <div key={i} className="flex items-start gap-3 bg-white p-4 rounded-xl shadow-sm border border-slate-100">
              <CheckCircle2 size={18} className="text-[#224292] shrink-0 mt-0.5" />
              <p className="text-slate-700 text-sm font-medium leading-relaxed">{obj}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Roles & Responsibilities Section */}
      <div>
        <h5 className="text-xl font-bold font-graphik text-[#224292] mb-6 flex items-center gap-2">
          <span className="w-1 h-5 bg-[#ffc107] rounded-full inline-block" />
          Roles & Responsibilities
        </h5>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {responsibilities.map((resp, i) => {
            const Icon = resp.icon;
            return (
              <div key={i} className="bg-white border border-slate-200/80 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
                <div className="w-10 h-10 rounded-xl bg-slate-50 border border-slate-200/60 flex items-center justify-center mb-4 text-[#224292]">
                  <Icon size={20} />
                </div>
                <h6 className="text-[15px] font-bold font-graphik text-[#224292] mb-3">{resp.title}</h6>
                <ul className="space-y-2.5">
                  {resp.items.map((item, idx) => (
                    <li key={idx} className="text-xs text-slate-600 font-medium leading-relaxed flex items-start gap-2">
                      <span className="w-1.5 h-1.5 bg-[#ffc107] rounded-full shrink-0 mt-1.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>

      {/* Committee Members Table */}
      <div>
        <h5 className="text-xl font-bold font-graphik text-[#224292] mb-6 flex items-center gap-2">
          <span className="w-1 h-5 bg-[#ffc107] rounded-full inline-block" />
          Committee Members
        </h5>
        <div className="bg-white rounded-2xl overflow-hidden shadow-xl shadow-black/[0.03] border border-slate-200">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-[#224292] text-white">
                  <th className="px-6 py-4 text-[11px] font-semibold uppercase tracking-widest text-center w-[10%]">S.No</th>
                  <th className="px-6 py-4 text-[11px] font-semibold uppercase tracking-widest">Member Name</th>
                  <th className="px-6 py-4 text-[11px] font-semibold uppercase tracking-widest">Affiliation</th>
                  <th className="px-6 py-4 text-[11px] font-semibold uppercase tracking-widest">Position</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {members.map((member, idx) => (
                  <tr
                    key={idx}
                    className={`group transition-colors ${idx % 2 === 0 ? 'bg-black/[0.01]' : 'bg-transparent'} hover:bg-[#ffc107]/5`}
                  >
                    <td className="px-6 py-3.5 text-center text-sm font-bold text-[#224292]">{member.sno}</td>
                    <td className="px-6 py-3.5 text-sm font-semibold text-slate-800">{member.name}</td>
                    <td className="px-6 py-3.5 text-sm text-slate-600 font-medium">{member.affiliation}</td>
                    <td className="px-6 py-3.5 text-sm font-bold text-[#224292]">{member.position}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}


// ─── Innovative Practices Section Component ──────────────────────────────────
function InnovativePracticesSection() {
  return (
    <div className="space-y-12">
      <div className="flex flex-col xl:flex-row xl:items-end justify-between gap-8 pb-8 border-b border-[#D5E2F4]/50">
        <div>
          <div className="flex items-center gap-4 mb-4">
            <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#224292] to-[#224292] flex items-center justify-center shadow-xl shadow-[#224292]/20">
              <Star size={28} className="text-[#ffc107]" />
            </div>
            <div>
              <h3 className="text-4xl font-bold font-graphik text-[#224292] tracking-tight leading-none mb-1">Innovative Practices</h3>
              <p className="text-black font-medium font-graphik text-sm tracking-wide">Modern pedagogical methodologies and active learning strategies</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function CurriculumSection({ courseId }) {
  const records = SYLLABUS_PDF_MAP[courseId] || []

  return (
    <div className="max-w-6xl mx-auto px-4 md:px-0">
      <div className="flex flex-col md:flex-row md:items-center justify-between mb-12 gap-8 pb-8 border-b border-[#D5E2F4]/50">
        <div>
          <div className="flex items-center gap-4 mb-2">
            <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#224292] to-[#224292] flex items-center justify-center shadow-lg shadow-[#224292]/20">
              <BookOpen size={24} className="text-[#ffc107]" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold font-graphik text-[#224292] tracking-tight">Academic <span className="text-[#ffc107]">Syllabus</span></h2>
          </div>
        </div>
      </div>

      {records.length === 0 ? (
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="py-20 px-8 rounded-[3rem] bg-white border border-[#D5E2F4]/50 shadow-2xl shadow-blue-900/5 flex flex-col items-center text-center">
          <div className="w-20 h-20 rounded-[2rem] bg-[#F8FAFC] flex items-center justify-center mb-8">
            <FileText size={40} className="text-[#A9B1C3]/30" />
          </div>
          <h4 className="text-xl font-bold font-graphik text-[#224292] uppercase mb-2">No Syllabus Found</h4>
          <p className="text-[#64779F] font-bold font-graphik text-sm">Official syllabus documentation is being updated.</p>
        </motion.div>
      ) : (
        <div className="space-y-6">
          {/* Desktop Table View (Visible on Medium screens and above) */}
          <div className="hidden md:block bg-white border border-[#D5E2F4]/80 rounded-xl overflow-hidden shadow-sm">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-[#224292] border-b border-[#224292]">
                  <th className="px-8 py-5 text-[10px] font-bold font-graphik uppercase tracking-[0.2em] text-white">Document Info</th>
                  <th className="px-6 py-5 text-[10px] font-bold font-graphik uppercase tracking-[0.2em] text-white">Regulation</th>
                  <th className="px-6 py-5 text-[10px] font-bold font-graphik uppercase tracking-[0.2em] text-white">Semesters Covered</th>
                  <th className="px-8 py-5 text-[10px] font-bold font-graphik uppercase tracking-[0.2em] text-white text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#D5E2F4]/40">
                {records.map((item, i) => (
                  <motion.tr
                    key={i}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05 }}
                    className="hover:bg-[#ffc107]/5 transition-colors group"
                  >
                    <td className="px-5 py-3.5">
                      <div className="flex items-center gap-3">
                        <div className="w-9 h-9 rounded-lg flex items-center justify-center shrink-0 bg-blue-50 text-[#224292]">
                          <FileText size={18} />
                        </div>
                        <span className="text-sm font-bold font-graphik text-black transition-colors">{item.title}</span>
                      </div>
                    </td>
                    <td className="px-3 py-3.5">
                      <div className="flex items-center gap-2">
                        <Calendar size={12} className="text-[#ffc107]" />
                        <span className="text-[10px] font-bold font-graphik uppercase tracking-widest text-black">{item.year}</span>
                      </div>
                    </td>
                    <td className="px-3 py-3.5">
                      <span className="px-2.5 py-1 rounded-md bg-slate-50 border border-slate-100 text-sm font-bold font-graphik text-[#224292] group-hover:bg-[#224292] group-hover:text-white transition-all">
                        Semesters {item.sem}
                      </span>
                    </td>
                    <td className="px-5 py-3.5 text-right">
                      <div className="flex items-center justify-end">
                        <button
                          onClick={() => {
                            window.open(item.file, '_blank');
                          }}
                          className="p-2.5 rounded-xl bg-[#ffc107]/20 text-[#224292] hover:bg-[#ffc107] transition-all transform active:scale-95 shadow-sm"
                          title="View Syllabus"
                        >
                          <Download size={16} />
                        </button>
                      </div>
                    </td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Mobile List View (Visible only on mobile) */}
          <div className="md:hidden space-y-4">
            {records.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.05 }}
                className="bg-white border border-[#D5E2F4] rounded-2xl p-5 shadow-sm active:scale-[0.98] transition-transform"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-11 h-11 rounded-xl flex items-center justify-center shrink-0 bg-blue-50 text-[#224292]">
                      <FileText size={20} />
                    </div>
                    <div className="space-y-1">
                      <h4 className="text-[14px] font-bold font-graphik text-black leading-tight">{item.title}</h4>
                      <div className="flex items-center gap-2">
                        <Calendar size={11} className="text-[#ffc107]" />
                        <span className="text-[10px] font-bold font-graphik uppercase tracking-widest text-black/50">{item.year}</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex items-center pt-4 border-t border-slate-50 gap-4">
                  <span className="px-3 py-1 rounded-lg bg-slate-50 border border-slate-100 text-sm font-bold font-graphik text-[#224292]">
                    Semesters {item.sem}
                  </span>
                  <div className="flex items-center ml-auto">
                    <button
                      onClick={() => {
                        window.open(item.file, '_blank');
                      }}
                      className="flex items-center gap-2 px-4 py-2.5 bg-[#ffc107] text-[#224292] rounded-xl text-[10px] font-bold font-graphik uppercase tracking-wider shadow-sm shadow-[#ffc107]/20"
                    >
                      View Syllabus <Download size={14} />
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}
