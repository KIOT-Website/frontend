import { useState, useRef, useEffect, useLayoutEffect, Fragment } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import {
  ChevronLeft, GraduationCap, Building2, Users, BookOpen,
  MapPin, Clock, Calendar, Award, CheckCircle2, ChevronRight,
  BarChart3, FileText, Mail, X, Target, TrendingUp, Loader2, Trophy, Plus,
  Wrench, Layers, FlaskConical, Cpu, ChevronDown, Download, ArrowLeft, Briefcase,
  Search, Microscope, Star, Globe, ShieldCheck, ArrowRight, Quote, Coins
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
import ip1 from '../../assets/be-ecx/ip1.png'
import ip2 from '../../assets/be-ecx/ip2.png'
import meAeQuiz from '../../assets/innovative_practices/ma_ae/Quiz.png'
import meAeExperiential from '../../assets/innovative_practices/ma_ae/Experiential Learning.png'
import meAePbl from '../../assets/innovative_practices/ma_ae/Project Based Learning.png'
import eceIp1 from '../../assets/innovative_practices/ece/Hands-on Experience Session.png'
import eceIp2 from '../../assets/innovative_practices/ece/Quiz.png'
import eceIp3 from '../../assets/innovative_practices/ece/Experiential Learning.png'
import eceIp4 from '../../assets/innovative_practices/ece/Roleplay.png'
import eceIp5 from '../../assets/innovative_practices/ece/Seminar.png'
import eceIp6 from '../../assets/innovative_practices/ece/Mindmap.png'
import eceIp7 from '../../assets/innovative_practices/ece/Mindmap2.jpg'
import eceIp8 from '../../assets/innovative_practices/ece/Collaborative Learning.png'
import eceIp9 from '../../assets/innovative_practices/ece/Peer Learning.jpg'
import eceIp10 from '../../assets/innovative_practices/ece/Participative Learning & Presentation.jpg'
import eceIp11 from '../../assets/innovative_practices/ece/Simulation Based Learning.png'
import eceIp12 from '../../assets/innovative_practices/ece/Workshop-Based Learning.png'
import eceIp13 from '../../assets/innovative_practices/ece/Project Based Learning.jpg'
import eceIp14 from '../../assets/innovative_practices/ece/Workshop Mode.png'
import eceIp15 from '../../assets/innovative_practices/ece/Peer Review.jpg'
import eceIp16 from '../../assets/innovative_practices/ece/Collaborative Learning2.png'
import eceIp17 from '../../assets/innovative_practices/ece/Seminar2.png'
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
import mbaDrSuganyaImgNew from '../../assets/Faculity/mba/Dr.S.SUGANYA.png'
import mbaSenchulakshmiImgNew from '../../assets/Faculity/mba/Prof.D.Senchulakshmi.png'
import mbaMusthaffaImgNew from '../../assets/Faculity/mba/Prof.A.Musthaffa.png'
import mbaManikandanImgNew from '../../assets/Faculity/mba/Prof.P.Manikandan.png'
import mbaAmbaligaImgNew from '../../assets/Faculity/mba/Dr.R.Ambaliga Bharathi Kavithai.png'
import mbaArivazhaganImgNew from '../../assets/Faculity/mba/Prof.V.Arivazhagan.png'
import ievVijayakumarImg from '../../assets/Faculity/mba iev/Dr.S.Vijaya Kumar.png'
import ievBharaniImg from '../../assets/Faculity/mba iev/Prof.M.Bharani Eswari.jpg'
import ievRubiniImg from '../../assets/Faculity/mba iev/Prof.M.Rubini.png'
import ievGowrishankarImg from '../../assets/Faculity/mba iev/Prof.M.Gowrishankar.png'
import ievSaravananImg from '../../assets/Faculity/mba iev/Prof.S.Saravanan.png'
import { getDepartmentSchematic } from './DepartmentSchematics'

import mechTeachCollab from '../../assets/mech_teachmethod/Collaborative_Learning.png'
import mechTeachCrossword from '../../assets/mech_teachmethod/Crossword_Puzzle.jpg'
import mechTeachFlipped from '../../assets/mech_teachmethod/Flipped_Classroom.png'
import mechTeachHandsOn from '../../assets/mech_teachmethod/Hands_on_training.jpg'
import mechTeachModel from '../../assets/mech_teachmethod/Model_Based_Learning.png'
import mechTeachOnline from '../../assets/mech_teachmethod/Online_Presentation.png'
import mechTeachQuiz from '../../assets/mech_teachmethod/Quiz.png'
import mechTeachRolePlay from '../../assets/mech_teachmethod/ROLE_PLAY.png'
import mechTeachSeminar from '../../assets/mech_teachmethod/SEMINAR.jpg'
import mechTeachVoiceOver from '../../assets/mech_teachmethod/VOICE_OVER_PPT.jpg'
import mechTeachVideo from '../../assets/mech_teachmethod/Video_Based_Learning.png'

const mechanicalTeachingMethods = [
  { name: 'Flipped Classroom', image: mechTeachFlipped },
  { name: 'Quiz', image: mechTeachQuiz },
  { name: 'Online Presentation', image: mechTeachOnline },
  { name: 'SEMINAR', image: mechTeachSeminar },
  { name: 'Video Based Learning', image: mechTeachVideo },
  { name: 'Crossword Puzzle', image: mechTeachCrossword },
  { name: 'VOICE OVER PPT', image: mechTeachVoiceOver },
  { name: 'Hands on training', image: mechTeachHandsOn },
  { name: 'ROLE PLAY', image: mechTeachRolePlay },
  { name: 'Collaborative Learning', image: mechTeachCollab },
  { name: 'Model Based Learning', image: mechTeachModel }
]

// Department Data Imports
import { cseStudentAchievements, cseFacultyAchievements, cseStudentAwards, cseFacultyAwards } from './departments/cse/cseData.jsx'
import { eeeStudentAchievements, eeeFacultyAchievements } from './departments/eee/eeeData.jsx'
import { aidsStudentAchievements, aidsFacultyAchievements, aidsFacultyAwards } from './departments/aids/aidsData.jsx'
import { csbsStudentAwards, csbsFacultyAwards, csbsClubsMembers, csbsClubsObjectives, csbsClubsResponsibilities } from './departments/csbs/csbsData.jsx'
import { civilStudentAwards, civilFacultyAwards, civilStudentAchievements, civilFacultyAchievements } from './departments/civil/civilData.jsx'
import { mechanicalStudentAchievements, mechanicalFacultyAchievements, mechanicalStudentAwards, mechanicalFacultyAwards } from './departments/mechanical/mechanicalData.jsx'
import { eceStudentAchievements, eceFacultyAchievements, eceStudentAwards, eceFacultyAwards, eceFacultyNptel, eceStudentNptel } from './departments/ece/eceData.jsx'
import { itStudentAchievements, itFacultyAchievements, itStudentAwards, itFacultyAwards } from './departments/it/itData.jsx'
import { ecmStudentAchievements, ecmFacultyAchievements, ecmStudentAwards, ecmFacultyAwards } from './departments/ecm/ecmData.jsx'
import { mbaGeneralStudentAchievements, mbaGeneralFacultyAchievements, mbaGeneralStudentAwards, mbaGeneralFacultyAwards } from './departments/mba-general/mbaGeneralData.jsx'
import { mbaIevStudentAchievements, mbaIevFacultyAchievements, mbaIevStudentAwards, mbaIevFacultyAwards } from './departments/mba-iev/mbaIevData.jsx'
import { mcaStudentAchievements, mcaFacultyAchievements, mcaStudentAwards, mcaFacultyAwards } from './departments/mca/mcaData.jsx'
import { phdStudentAchievements, phdFacultyAchievements, phdStudentAwards, phdFacultyAwards } from './departments/phd/phdData.jsx'
import { meIseStudentAchievements, meIseFacultyAchievements, meIseStudentAwards, meIseFacultyAwards } from './departments/me-ise/meIseData.jsx'
import { meAeStudentAchievements, meAeFacultyAchievements, meAeStudentAwards, meAeFacultyAwards } from './departments/me-ae/meAeData.jsx'
import { mePedStudentAchievements, mePedFacultyAchievements, mePedStudentAwards, mePedFacultyAwards } from './departments/me-ped/mePedData.jsx'
import { meSeStudentAchievements, meSeFacultyAchievements, meSeStudentAwards, meSeFacultyAwards } from './departments/me-se/meSeData.jsx'
import { scienceHumanitiesStudentAchievements, scienceHumanitiesFacultyAchievements, scienceHumanitiesStudentAwards, scienceHumanitiesFacultyAwards } from './departments/science-humanities/scienceHumanitiesData.jsx'

// Department Data Mapping Collections
const studentAwardsMap = {
  'be-cse': cseStudentAwards,
  'btech-csbs': csbsStudentAwards,
  'be-civil': civilStudentAwards,
  'btech-aids': [],
  'be-eee': [],
  'be-mechanical': mechanicalStudentAwards,
  'be-ece': eceStudentAwards,
  'btech-it': itStudentAwards,
  'be-ecx': ecmStudentAwards,
  'be-ecm': ecmStudentAwards,
  'mba-general': mbaGeneralStudentAwards,
  'mba-iev': mbaIevStudentAwards,
  'mca': mcaStudentAwards,
  'phd': phdStudentAwards,
  'me-ise': meIseStudentAwards,
  'me-ae': meAeStudentAwards,
  'me-ped': mePedStudentAwards,
  'me-se': meSeStudentAwards,
  'science-humanities': scienceHumanitiesStudentAwards
};

const facultyAwardsMap = {
  'be-cse': cseFacultyAwards,
  'btech-csbs': csbsFacultyAwards,
  'be-civil': civilFacultyAwards,
  'btech-aids': aidsFacultyAwards,
  'be-eee': [],
  'be-mechanical': mechanicalFacultyAwards,
  'be-ece': eceFacultyAwards,
  'btech-it': itFacultyAwards,
  'be-ecx': ecmFacultyAwards,
  'be-ecm': ecmFacultyAwards,
  'mba-general': mbaGeneralFacultyAwards,
  'mba-iev': mbaIevFacultyAwards,
  'mca': mcaFacultyAwards,
  'phd': phdFacultyAwards,
  'me-ise': meIseFacultyAwards,
  'me-ae': meAeFacultyAwards,
  'me-ped': mePedFacultyAwards,
  'me-se': meSeFacultyAwards,
  'science-humanities': scienceHumanitiesFacultyAwards
};

const studentAchievementsMap = {
  'be-cse': cseStudentAchievements,
  'be-eee': eeeStudentAchievements,
  'btech-aids': aidsStudentAchievements,
  'be-mechanical': mechanicalStudentAchievements,
  'be-ece': eceStudentAchievements,
  'btech-it': itStudentAchievements,
  'be-ecx': ecmStudentAchievements,
  'be-ecm': ecmStudentAchievements,
  'btech-csbs': [],
  'be-civil': civilStudentAchievements,
  'mba-general': mbaGeneralStudentAchievements,
  'mba-iev': mbaIevStudentAchievements,
  'mca': mcaStudentAchievements,
  'phd': phdStudentAchievements,
  'me-ise': meIseStudentAchievements,
  'me-ae': meAeStudentAchievements,
  'me-ped': mePedStudentAchievements,
  'me-se': meSeStudentAchievements,
  'science-humanities': scienceHumanitiesStudentAchievements
};

const facultyAchievementsMap = {
  'be-cse': cseFacultyAchievements,
  'be-eee': eeeFacultyAchievements,
  'btech-aids': aidsFacultyAchievements,
  'be-mechanical': mechanicalFacultyAchievements,
  'be-ece': eceFacultyAchievements,
  'btech-it': itFacultyAchievements,
  'be-ecx': ecmFacultyAchievements,
  'be-ecm': ecmFacultyAchievements,
  'btech-csbs': [],
  'be-civil': civilFacultyAchievements,
  'mba-general': mbaGeneralFacultyAchievements,
  'mba-iev': mbaIevFacultyAchievements,
  'mca': mcaFacultyAchievements,
  'phd': phdFacultyAchievements,
  'me-ise': meIseFacultyAchievements,
  'me-ae': meAeFacultyAchievements,
  'me-ped': mePedFacultyAchievements,
  'me-se': meSeFacultyAchievements,
  'science-humanities': scienceHumanitiesFacultyAchievements
};

const facultyNptelMap = {
  'be-ece': eceFacultyNptel
};

const studentNptelMap = {
  'be-ece': eceStudentNptel
};

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
import ecxPdf from '../../assets/Curriculum Syllabus/10. ECX/B.E ELECTRONICS AND COMPUTER ENGINEERING SYALLABUS(I-IV).pdf'
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
    { title: 'M.E. Automotive Engineering (I - IV SEM) Syllabus', file: ecePgPdf, year: 'Regulation 2023', sem: 'I - IV' }
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
  'be-ecx': [
    { title: 'B.E. Electronics and Computer Engineering (I - IV SEM) Syllabus', file: ecxPdf, year: 'Regulation 2025', sem: 'I - IV' }
  ],
  'be-ecm': [
    { title: 'B.E. Electronics and Computer Engineering (I - IV SEM) Syllabus', file: ecxPdf, year: 'Regulation 2025', sem: 'I - IV' }
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

const TABS = ['Overview', 'Vision & Mission', 'Syllabus', 'Faculty', 'Labs', 'Research', 'Achievements', 'Innovative Practices']

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
  'Dr. S. Suganya': mbaDrSuganyaImgNew,
  'Dr. Suganya S': mbaDrSuganyaImgNew,
  'Mr. G. Padmanaban': mbaPadmanabanImgNew,
  'Prof. G. Padmanaban': mbaPadmanabanImgNew,
  'Mrs. P. Revathi': mbaRevathiImgNew,
  'Prof. P. Revathi': mbaRevathiImgNew,
  'Mrs. S. Vimala': mbaVimalaImgNew,
  'Prof. S. Vimala': mbaVimalaImgNew,
  'Mrs. T. Suganya': mbaSuganyaImgNew,
  'Prof. T. Suganya': mbaSuganyaImgNew,
  'Mrs. D. Senchulakshmi': mbaSenchulakshmiImgNew,
  'Prof. D. Senchulakshmi': mbaSenchulakshmiImgNew,
  'Mr. A. Musthaffa': mbaMusthaffaImgNew,
  'Prof. A. Musthaffa': mbaMusthaffaImgNew,
  'Mr. P. Manikandan': mbaManikandanImgNew,
  'Prof. P. Manikandan': mbaManikandanImgNew,
  'Dr. R. Ambaliga Bharathi Kavithai': mbaAmbaligaImgNew,
  'Mr. V. Arivazhagan': mbaArivazhaganImgNew,
  'Prof. Arivazhagan Veerapandiyan': mbaArivazhaganImgNew,
  'Mrs. M. Bharani Eswari': ievBharaniImg,
  'Prof. M. Bharani Eswari': ievBharaniImg
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
export function formatFacultyName(rawName) {
  if (!rawName) return '';
  let name = rawName.trim();

  name = name.replace(/^Mrs\.?\s+/i, 'Ms. ');

  const prefixMatch = name.match(/^(Dr\.|Mr\.|Ms\.|Prof\.)\s*(.*)$/i);
  let prefix = '';
  let rest = name;

  if (prefixMatch) {
    prefix = prefixMatch[1];
    const pLower = prefix.toLowerCase();
    if (pLower.startsWith('ms')) prefix = 'Ms.';
    else if (pLower.startsWith('mr')) prefix = 'Mr.';
    else if (pLower.startsWith('dr')) prefix = 'Dr.';
    else if (pLower.startsWith('prof')) prefix = 'Prof.';

    rest = prefixMatch[2];
  } else {
    const femaleKeywords = ['sowndharya', 'anitha', 'prabha', 'manju', 'sudha', 'shanmugavalli', 'geetha', 'divya', 'saranya', 'deepa', 'ramya', 'sathiyapriya', 'gowthami', 'pushpalatha', 'kiruthika', 'eswari', 'vikneshwary', 'sowndarya', 'suveetha', 'pavithra', 'indumathi', 'preethi', 'priya', 'santhi', 'kaalijoothi', 'dheepika', 'manjula', 'rajeswari', 'ranjani', 'saritha', 'gomathi', 'sathiyapriyanka', 'madhumathi', 'swega', 'harini', 'madhumitha', 'sabana', 'revathi', 'malarmeena', 'thenmugi'];
    const isFemale = femaleKeywords.some(fn => rest.toLowerCase().includes(fn));
    prefix = isFemale ? 'Ms.' : 'Mr.';
  }

  const leadingInitialsMatch = rest.match(/^([A-Z]\.(?:\s*[A-Z]\.)*)\s+(.+)$/);
  if (leadingInitialsMatch) {
    const initials = leadingInitialsMatch[1].replace(/\.\s*/g, '').split('').join(' ');
    const mainName = leadingInitialsMatch[2];
    rest = `${mainName} ${initials}`;
  }

  return `${prefix} ${rest}`.replace(/\s+/g, ' ');
}

export function getDynamicWorkExperience(faculty) {
  if (!faculty) return null;
  if (faculty.experience) return faculty.experience;

  const dojStr = faculty.joiningDate || faculty.doj || faculty.dateOfJoining;
  const expStr = faculty.experience;

  const now = new Date();

  // Helper to parse date string (DD.MM.YYYY, DD/MM/YYYY, YYYY-MM-DD)
  const parseDate = (str) => {
    if (!str || typeof str !== 'string') return null;
    const cleanStr = str.trim();

    // Match DD.MM.YYYY or DD/MM/YYYY
    const dmyMatch = cleanStr.match(/^(\d{1,2})[./-](\d{1,2})[./-](\d{4})$/);
    if (dmyMatch) {
      const day = parseInt(dmyMatch[1], 10);
      const month = parseInt(dmyMatch[2], 10) - 1;
      const year = parseInt(dmyMatch[3], 10);
      return new Date(year, month, day);
    }

    // Match YYYY-MM-DD
    const ymdMatch = cleanStr.match(/^(\d{4})[./-](\d{1,2})[./-](\d{1,2})$/);
    if (ymdMatch) {
      const year = parseInt(ymdMatch[1], 10);
      const month = parseInt(ymdMatch[2], 10) - 1;
      const day = parseInt(ymdMatch[3], 10);
      return new Date(year, month, day);
    }

    const parsed = new Date(cleanStr);
    return isNaN(parsed.getTime()) ? null : parsed;
  };

  const calculateElapsedMonths = (startDate, endDate) => {
    let years = endDate.getFullYear() - startDate.getFullYear();
    let months = endDate.getMonth() - startDate.getMonth();
    if (endDate.getDate() < startDate.getDate()) {
      months--;
    }
    if (months < 0) {
      years--;
      months += 12;
    }
    return Math.max(0, years * 12 + months);
  };

  const formatYearsMonths = (totalMonths) => {
    const years = Math.floor(totalMonths / 12);
    const months = totalMonths % 12;

    let parts = [];
    if (years > 0) {
      parts.push(`${years} Year${years > 1 ? 's' : ''}`);
    }
    if (months > 0 || years === 0) {
      parts.push(`${months} Month${months > 1 ? 's' : ''}`);
    }
    return parts.join(' ');
  };

  let baseMonths = 0;
  let hasBaseExp = false;

  if (expStr && typeof expStr === 'string') {
    const matchYM = expStr.match(/(\d+)\s*Year[s]?\s*(\d+)?\s*Month[s]?/i);
    if (matchYM) {
      const yrs = parseInt(matchYM[1], 10);
      const mths = matchYM[2] ? parseInt(matchYM[2], 10) : 0;
      baseMonths = yrs * 12 + mths;
      hasBaseExp = true;
    } else {
      const matchDecimal = expStr.match(/(\d+(\.\d+)?)\s*Year[s]?/i);
      if (matchDecimal) {
        const numYears = parseFloat(matchDecimal[1]);
        baseMonths = Math.round(numYears * 12);
        hasBaseExp = true;
      }
    }
  }

  const startDate = parseDate(dojStr);
  if (startDate) {
    const elapsedMonths = calculateElapsedMonths(startDate, now);
    const totalMonths = baseMonths + elapsedMonths;
    return formatYearsMonths(totalMonths);
  }

  if (hasBaseExp) {
    return formatYearsMonths(baseMonths);
  }

  if (expStr) return expStr;
  return null;
}

export default function CourseDetailPage({ overrides }) {
  const { courseId: paramCourseId } = useParams()
  const courseId = overrides?.courseId || paramCourseId
  const navigate = useNavigate()
  const [activeTab, setActiveTab] = useState('Overview')
  const [outcomeTab, setOutcomeTab] = useState(null)
  const [facultySearchQuery, setFacultySearchQuery] = useState('')
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

  const courseTabs = TABS;

  const [activeObjectiveTab, setActiveObjectiveTab] = useState('PEO')
  const [activeResearchSubTab, setActiveResearchSubTab] = useState('Patents')

  const kapItems = [
    { wk: "WK1", title: "Natural Sciences", desc: "A systematic, theory-based understanding of the natural sciences applicable to the discipline and awareness of relevant social sciences.", icon: Globe },
    { wk: "WK2", title: "Mathematics", desc: "Conceptually-based mathematics, numerical analysis, data analysis, statistics and formal aspects of computer and information science to support detailed analysis and modelling applicable to the discipline.", icon: BarChart3 },
    { wk: "WK3", title: "Engineering Fundamentals", desc: "A systematic, theory-based formulation of engineering fundamentals required in the engineering discipline.", icon: Layers },
    { wk: "WK4", title: "Specialist Knowledge", desc: "Engineering specialist knowledge that provides theoretical frameworks and bodies of knowledge for the accepted practice areas in the engineering discipline; much is at the forefront of the discipline.", icon: Cpu },
    { wk: "WK5", title: "Sustainable Design & Operations", desc: "Knowledge, including efficient resource use, environmental impacts, whole-life cost, reuse of resources, net zero carbon, and similar concepts, that supports engineering design and operations in a practice area.", icon: Target },
    { wk: "WK6", title: "Engineering Practice", desc: "Knowledge of engineering practice (technology) in the practice areas in the engineering discipline.", icon: Wrench },
    { wk: "WK7", title: "Role of Engineering in Society", desc: "Knowledge of the role of engineering in society and identified issues in engineering practice in the discipline, such as the professional responsibility of an engineer to public safety and sustainable development.", icon: Building2 },
    { wk: "WK8", title: "Research Literature", desc: "Engagement with selected knowledge in the current research literature of the discipline, awareness of the power of critical thinking and creative approaches to evaluate emerging issues.", icon: Microscope },
    { wk: "WK9", title: "Ethics, Diversity & Inclusion", desc: "Ethics, inclusive behavior and conduct. Knowledge of professional ethics, responsibilities, and norms of engineering practice. Awareness of the need for diversity by reason of ethnicity, gender, age, physical ability etc. with mutual understanding and respect, and of inclusive attitudes.", icon: ShieldCheck }
  ]

  const objectiveData = [
    { id: 'PEO', icon: Target, title: 'Program Educational Objectives', content: course.peo, color: 'text-[#224292]', bg: 'bg-[#224292]/5', activeBg: 'bg-[#224292]', iconColor: 'text-[#ffc107]' },
    { id: 'PO', icon: Layers, title: 'Program Outcomes', content: course.po, color: 'text-[#224292]', bg: 'bg-[#224292]/5', activeBg: 'bg-[#224292]', iconColor: 'text-[#ffc107]' },
    { id: 'PSO', icon: Star, title: 'Program Specific Outcomes', content: course.pso, color: 'text-[#224292]', bg: 'bg-[#224292]/5', activeBg: 'bg-[#224292]', iconColor: 'text-[#ffc107]' },
    ...(courseId !== 'mba-general' && courseId !== 'mba-iev' && courseId !== 'mca' && !courseId?.startsWith('me-') ? [
      { id: 'KAP', icon: Award, title: 'Knowledge and Attitude Profile', content: 'KAP', color: 'text-[#224292]', bg: 'bg-[#224292]/5', activeBg: 'bg-[#224292]', iconColor: 'text-[#ffc107]' }
    ] : [])
  ].filter(obj => obj.content)

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

          <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 lg:items-center">
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-5 flex-wrap">
                <span className="px-3.5 py-1.5 rounded-full bg-[#ffc107]/20 border border-[#ffc107]/40 text-[#ffc107] text-xs font-bold font-graphik">
                  {course.affiliation || 'Anna University Affiliated'}
                </span>
                {(() => {
                  const nbaDepts = ['be-cse', 'be-ece', 'be-eee', 'be-mechanical'];
                  const isNba = nbaDepts.includes(courseId);
                  const isPg = courseId?.startsWith('mba') || courseId === 'mca' || courseId?.startsWith('me-');
                  const badgeText = isNba 
                    ? 'NBA Accredited' 
                    : (isPg ? 'Postgraduate Program' : 'Undergraduate Program');
                  return (
                    <span className="px-3.5 py-1.5 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-emerald-300 text-xs font-bold font-graphik">
                      {badgeText}
                    </span>
                  )
                })()}
              </div>
              <h1 className="font-bold font-graphik text-white leading-[1.15] text-2xl md:text-3xl lg:text-[2.6rem] mb-3">
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
                      <span className="text-white group-hover:text-[#224292] font-extrabold text-lg md:text-2xl lg:text-3xl tracking-tight transition-colors duration-300">
                        {courseId === 'mba-iev' ? '2nd' : '24th'}
                      </span>
                      <span className="text-white/95 group-hover:text-[#224292]/90 text-[9px] md:text-[11px] lg:text-[12px] font-bold mt-0.5 md:mt-1 leading-snug transition-colors duration-300">
                        {courseId === 'mba-iev' ? 'Position in Tamil Nadu' : 'Position in the State of Tamil Nadu'}
                      </span>
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
                      <span className="text-white group-hover:text-[#224292] font-extrabold text-lg md:text-2xl lg:text-3xl tracking-tight transition-colors duration-300">
                        {courseId === 'mba-iev' ? '2nd' : '12th'}
                      </span>
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
        <div className="flex flex-wrap justify-start gap-3 w-fit mx-auto">
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
          <div className="flex flex-wrap justify-start gap-3 lg:gap-4 w-fit max-w-7xl mx-auto">
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
                            <p className="text-[#1a1a1a] text-[15px] md:text-[16px] leading-relaxed font-semibold font-graphik text-center">
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
                      onClick={() => courseId !== 'mca' && navigate('/admissions')}
                      className="inline-flex items-center gap-3 px-10 py-5 rounded-2xl bg-[#224292] !text-white font-bold font-graphik text-[15px] hover:bg-[#ffc107] hover:!text-[#224292] transition-all duration-500 shadow-xl shadow-blue-900/10 group/btn"
                    >
                      Enroll Now {courseId !== 'mca' && <ArrowRight size={20} className="group-hover/btn:translate-x-2 transition-transform" />}
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
                          {(course.mission || 'To promote institutional excellence by fostering innovation, research, and high-quality teaching methodologies.').split('\n').filter(p => p.trim()).map((para, idx) => (
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
                          {activeObj.id === 'KAP' ? (
                            <div className="space-y-6 pt-2">
                              <div className="text-center max-w-2xl mx-auto mb-6">
                                <h4 className="text-2xl font-bold font-graphik text-[#224292]">
                                  Knowledge and <span className="text-[#ffc107]">Attitude Profile (KAP)</span>
                                </h4>
                                <p className="text-[#64779F] text-xs font-medium font-graphik mt-1">Washington Accord & NBA Graduate Attributes Framework</p>
                              </div>
                              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                {kapItems.map((item, idx) => {
                                  const ItemIcon = item.icon
                                  return (
                                    <motion.div
                                      key={item.wk}
                                      initial={{ opacity: 0, y: 15 }}
                                      animate={{ opacity: 1, y: 0 }}
                                      transition={{ delay: idx * 0.04 }}
                                      className="flex gap-4 p-5 rounded-2xl bg-white border border-slate-100 shadow-sm hover:shadow-md hover:border-blue-100 transition-all group"
                                    >
                                      <div className="shrink-0">
                                        <div className="w-10 h-10 rounded-xl bg-slate-50 flex items-center justify-center text-[#224292] group-hover:bg-[#224292] group-hover:text-white transition-colors duration-300 shadow-sm">
                                          <ItemIcon size={20} />
                                        </div>
                                      </div>
                                      <div className="space-y-1">
                                        <div className="flex items-center gap-2">
                                          <span className="inline-block px-2 py-0.5 rounded-md bg-[#224292]/5 text-[#224292] text-[10px] font-black tracking-wider uppercase font-graphik">
                                            {item.wk}
                                          </span>
                                          <h5 className="text-[14px] font-bold text-[#224292] font-graphik">{item.title}</h5>
                                        </div>
                                        <p className="text-[13px] text-slate-600 leading-relaxed text-justify font-normal font-graphik">{item.desc}</p>
                                      </div>
                                    </motion.div>
                                  )
                                })}
                              </div>
                            </div>
                          ) : (() => {
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
                                  className={`w-full h-full object-cover transition-transform duration-500 ${f.name === 'Prof. S. Vimala'
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
                                    {formatFacultyName(f.name)}
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
                    {(() => {
                      const isPopFaculty = (f) => {
                        if (f.category === 'POP' || f.category === 'PoP') return true;
                        if (!f.designation) return false;
                        const d = f.designation.toLowerCase();
                        return d.includes('pop') || d.includes('practice');
                      };

                      const isShFaculty = (f) => {
                        return f.category === 'S&H';
                      };

                      const deptFacultyList = course.faculty?.filter(f => !isPopFaculty(f) && !isShFaculty(f)) || [];
                      const popFacultyList = course.faculty?.filter(f => isPopFaculty(f)) || [];
                      const shFacultyList = course.faculty?.filter(f => isShFaculty(f)) || [];

                      const filterList = (list) => {
                        if (!facultySearchQuery.trim()) return list;
                        const q = facultySearchQuery.toLowerCase().trim();
                        return list.filter(f =>
                          f.name?.toLowerCase().includes(q) ||
                          f.designation?.toLowerCase().includes(q) ||
                          f.specialization?.toLowerCase().includes(q) ||
                          f.qualification?.toLowerCase().includes(q)
                        );
                      };

                      const filteredDeptFaculty = filterList(deptFacultyList);
                      const filteredPopFaculty = filterList(popFacultyList);
                      const filteredShFaculty = filterList(shFacultyList);

                      return (
                        <>
                          {/* Department Faculty Header & Search Bar */}
                          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6 pb-4 border-b border-[#E5EDF8]">
                            <div>
                              <div className="flex items-center gap-3 flex-wrap">
                                <h2 className="text-2xl font-extrabold font-graphik text-[#224292]">Our Faculty</h2>
                                <span className="px-3 py-1 bg-[#224292]/10 text-[#224292] font-bold font-graphik text-xs rounded-full border border-[#224292]/20">
                                  {deptFacultyList.length} Faculty Members
                                </span>
                              </div>
                              <p className="text-[#64779F] text-sm mt-0.5">Industry-experienced academics committed to your success</p>
                            </div>
                            <div className="relative w-full sm:w-72">
                              <Search size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
                              <input
                                type="text"
                                placeholder="Search faculty by name, designation..."
                                value={facultySearchQuery}
                                onChange={(e) => setFacultySearchQuery(e.target.value)}
                                className="w-full pl-9 pr-9 py-2 bg-white border-2 border-[#E5EDF8] rounded-xl text-xs sm:text-sm font-medium font-graphik text-[#224292] placeholder-slate-400 focus:outline-none focus:border-[#224292] transition-colors shadow-sm"
                              />
                              {facultySearchQuery && (
                                <button
                                  onClick={() => setFacultySearchQuery('')}
                                  className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 transition-colors"
                                >
                                  <X size={14} />
                                </button>
                              )}
                            </div>
                          </div>

                          {/* Department Faculty Cards Grid */}
                          {filteredDeptFaculty.length === 0 ? (
                            <div className="py-12 text-center bg-white rounded-2xl border-2 border-dashed border-slate-200 my-4">
                              <Users className="mx-auto text-slate-300 mb-2" size={40} />
                              <p className="text-slate-600 font-bold font-graphik text-sm">No faculty members found matching "{facultySearchQuery}"</p>
                              <button
                                onClick={() => setFacultySearchQuery('')}
                                className="mt-3 text-xs font-bold font-graphik text-[#224292] underline hover:text-[#ffc107]"
                              >
                                Clear Search
                              </button>
                            </div>
                          ) : (
                            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5">
                              {filteredDeptFaculty.map((f, i) => (
                                <motion.div
                                  key={f.name + i}
                                  initial={{ opacity: 0, y: 20 }}
                                  animate={{ opacity: 1, y: 0 }}
                                  transition={{ delay: i * 0.04 }}
                                  onClick={() => setSelectedFaculty(f)}
                                  className="bg-white group cursor-pointer border-2 border-[#E5EDF8] shadow-lg shadow-black/[0.08] hover:shadow-2xl hover:shadow-black/20 transition-all flex flex-col h-full overflow-hidden rounded-[14px] font-graphik"
                                >
                                  <div
                                    className="w-full aspect-[4/5] bg-slate-100 overflow-hidden relative"
                                    style={{ backgroundImage: `url(${facultyBg})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
                                  >
                                    {f.image ? (
                                      <img src={f.image} alt={f.name} className={`w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105 ${f.imageClass || ''}`} style={f.imageStyle || {}} />
                                    ) : (
                                      <div className="w-full h-full flex items-center justify-center text-slate-300">
                                        <GraduationCap size={44} />
                                      </div>
                                    )}
                                  </div>
                                  <div className="p-[13px] flex flex-col flex-1">
                                    <h3 className="font-bold font-graphik text-[#224292] text-[14px] mb-0.5 leading-tight group-hover:text-[#ffc107] transition-colors">
                                      {formatFacultyName(f.name)}
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
                          )}

                          {/* Professor / Associate Professor of Practice (POP) Section */}
                          {popFacultyList.length > 0 && (
                            <>
                              <div className="mb-6 mt-12 pt-6 border-t border-[#E5EDF8] flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                                <div>
                                  <div className="flex items-center gap-3 flex-wrap">
                                    <h2 className="text-2xl font-extrabold font-graphik text-[#224292]">Professor / Associate Professor of Practice</h2>
                                    <span className="px-3 py-1 bg-amber-100 text-amber-800 font-bold font-graphik text-xs rounded-full border border-amber-200">
                                      {popFacultyList.length} POP Members
                                    </span>
                                  </div>
                                  <p className="text-[#64779F] text-sm mt-0.5">Industry leaders and practitioners enriching academic learning</p>
                                </div>
                              </div>

                              {filteredPopFaculty.length === 0 && facultySearchQuery ? (
                                <div className="py-8 text-center bg-white rounded-2xl border border-slate-200 text-slate-500 text-sm font-graphik">
                                  No Professor of Practice found matching "{facultySearchQuery}"
                                </div>
                              ) : (
                                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5">
                                  {filteredPopFaculty.map((f, i) => (
                                    <motion.div
                                      key={f.name + i}
                                      initial={{ opacity: 0, y: 20 }}
                                      animate={{ opacity: 1, y: 0 }}
                                      transition={{ delay: i * 0.04 }}
                                      onClick={() => setSelectedFaculty(f)}
                                      className="bg-white group cursor-pointer border-2 border-[#E5EDF8] shadow-lg shadow-black/[0.08] hover:shadow-2xl hover:shadow-black/20 transition-all flex flex-col h-full overflow-hidden rounded-[14px] font-graphik"
                                    >
                                      <div
                                        className="w-full aspect-[4/5] bg-slate-100 overflow-hidden relative"
                                        style={{ backgroundImage: `url(${facultyBg})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
                                      >
                                        {f.image ? (
                                          <img src={f.image} alt={f.name} className={`w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105 ${f.imageClass || ''}`} style={f.imageStyle || {}} />
                                        ) : (
                                          <div className="w-full h-full flex items-center justify-center text-slate-300">
                                            <GraduationCap size={44} />
                                          </div>
                                        )}
                                      </div>
                                      <div className="p-[13px] flex flex-col flex-1">
                                        <h3 className="font-bold font-graphik text-[#224292] text-[14px] mb-0.5 leading-tight group-hover:text-[#ffc107] transition-colors">
                                          {formatFacultyName(f.name)}
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
                              )}
                            </>
                          )}

                          {/* Science & Humanities Section */}
                          {shFacultyList.length > 0 && (
                            <>
                              <div className="mb-6 mt-12 pt-6 border-t border-[#E5EDF8] flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                                <div>
                                  <div className="flex items-center gap-3 flex-wrap">
                                    <h2 className="text-2xl font-extrabold font-graphik text-[#224292]">Science & Humanities Faculty</h2>
                                    <span className="px-3 py-1 bg-emerald-100 text-emerald-800 font-bold font-graphik text-xs rounded-full border border-emerald-200">
                                      {shFacultyList.length} Faculty Members
                                    </span>
                                  </div>
                                  <p className="text-[#64779F] text-sm mt-0.5">Specialized educators supporting foundational sciences and communication skills</p>
                                </div>
                              </div>

                              {filteredShFaculty.length === 0 && facultySearchQuery ? (
                                <div className="py-8 text-center bg-white rounded-2xl border border-slate-200 text-slate-500 text-sm font-graphik">
                                  No Science & Humanities faculty found matching "{facultySearchQuery}"
                                </div>
                              ) : (
                                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5">
                                  {filteredShFaculty.map((f, i) => (
                                    <motion.div
                                      key={f.name + i}
                                      initial={{ opacity: 0, y: 20 }}
                                      animate={{ opacity: 1, y: 0 }}
                                      transition={{ delay: i * 0.04 }}
                                      onClick={() => setSelectedFaculty(f)}
                                      className="bg-white group cursor-pointer border-2 border-[#E5EDF8] shadow-lg shadow-black/[0.08] hover:shadow-2xl hover:shadow-black/20 transition-all flex flex-col h-full overflow-hidden rounded-[14px] font-graphik"
                                    >
                                      <div
                                        className="w-full aspect-[4/5] bg-slate-100 overflow-hidden relative"
                                        style={{ backgroundImage: `url(${facultyBg})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
                                      >
                                        {f.image ? (
                                          <img src={f.image} alt={f.name} className={`w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105 ${f.imageClass || ''}`} style={f.imageStyle || {}} />
                                        ) : (
                                          <div className="w-full h-full flex items-center justify-center text-slate-300">
                                            <GraduationCap size={44} />
                                          </div>
                                        )}
                                      </div>
                                      <div className="p-[13px] flex flex-col flex-1">
                                        <h3 className="font-bold font-graphik text-[#224292] text-[14px] mb-0.5 leading-tight group-hover:text-[#ffc107] transition-colors">
                                          {formatFacultyName(f.name)}
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
                              )}
                            </>
                          )}
                        </>
                      );
                    })()}
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
                          <span className="text-[13px] font-semibold font-graphik tracking-tight leading-tight flex-1">{lab.name}</span>
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
                              {activeLab.name !== 'Industrial Linked Laboratories / COEs' && (
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
                              )}
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
                          <span className="text-[13px] font-semibold font-graphik tracking-tight leading-tight flex-1">{lab.name}</span>
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
                              <div className="p-6 space-y-6">
                                <div className="flex items-center gap-3 pb-3 border-b border-slate-100">
                                  <Building2 size={14} className="text-[#ffc107]" />
                                  <p className="text-[#64779F] text-[13px] font-bold font-graphik tracking-wide">{course.name}</p>
                                </div>
                                {lab.equipments && lab.equipments.length > 0 && (
                                  <div className="grid gap-2">
                                    {lab.equipments.map((item, idx) => (
                                      <div key={idx} className="flex gap-2.5 p-3 rounded-xl bg-slate-50 border border-slate-100 items-start">
                                        <div className="w-1.5 h-1.5 rounded-full bg-[#ffc107] mt-1.5 shrink-0" />
                                        <span className="text-[13px] font-medium font-graphik text-slate-700 leading-tight">{item}</span>
                                      </div>
                                    ))}
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

            {/* --- RESEARCH & PATENTS --- */}
            {activeTab === 'Research' && (
              <div className="space-y-8">
                {/* Research Section Header & Sub-Tabs */}
                <div className="flex flex-col items-center text-center justify-center gap-6 pb-6 border-b border-slate-100">
                  <div>
                    <h2 className="text-3xl md:text-5xl font-bold font-graphik text-[#224292] tracking-tight mb-2">
                      Department <span className="text-[#ffc107]">Research & Innovations</span>
                    </h2>
                    <p className="text-[#64779F] text-xs md:text-sm font-medium font-graphik max-w-2xl mx-auto">
                      Funded Research Projects, Student Innovations & Registered Intellectual Property (Patents)
                    </p>
                  </div>

                  {/* Research 3 Sub-Tabs Header - Centered */}
                  <div className="flex flex-wrap items-center justify-center gap-2 bg-[#224292]/5 p-1.5 rounded-2xl border border-[#224292]/10 mx-auto">
                    {[
                      { id: 'Funded Projects', label: 'Funded Projects', icon: Coins },
                      { id: 'Student Projects', label: 'Student Projects', icon: Award },
                      { id: 'Patents', label: 'Patents', icon: ShieldCheck }
                    ].map((sub) => {
                      const SubIcon = sub.icon
                      const isActive = activeResearchSubTab === sub.id
                      return (
                        <button
                          key={sub.id}
                          onClick={() => setActiveResearchSubTab(sub.id)}
                          className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-bold font-graphik transition-all ${
                            isActive
                              ? 'bg-[#224292] text-white shadow-md shadow-[#224292]/20 scale-105'
                              : 'text-[#224292] hover:bg-[#224292]/10'
                          }`}
                        >
                          <SubIcon size={15} className={isActive ? 'text-[#ffc107]' : 'text-[#224292]'} />
                          {sub.label}
                        </button>
                      )
                    })}
                  </div>
                </div>

                {/* SUB-TAB 1: FUNDED PROJECTS */}
                {activeResearchSubTab === 'Funded Projects' && (
                  <div className="space-y-6">
                    <div className="bg-white rounded-2xl border border-[#E5EDF8] shadow-2xl shadow-blue-900/5 overflow-hidden">
                      <div className="bg-[#224292] px-8 py-5 flex items-center justify-between">
                        <h3 className="text-white font-bold font-graphik text-lg tracking-tight">Funded & Sponsored Research Projects</h3>
                        <span className="text-[11px] font-bold text-[#ffc107] bg-white/10 px-3 py-1 rounded-full border border-white/20 uppercase tracking-widest font-graphik">Research Grants</span>
                      </div>

                      {course.fundedProjects && course.fundedProjects.length > 0 ? (
                        <div className="overflow-x-auto">
                          <table className="w-full text-left border-collapse">
                            <thead>
                              <tr className="bg-slate-50 border-b border-slate-100">
                                <th className="px-6 py-4 text-[11px] font-black text-[#224292] uppercase tracking-widest font-graphik">Principal Investigator / Faculty</th>
                                <th className="px-6 py-4 text-[11px] font-black text-[#224292] uppercase tracking-widest font-graphik">Project Title</th>
                                <th className="px-6 py-4 text-[11px] font-black text-[#224292] uppercase tracking-widest font-graphik">Funding Agency</th>
                                <th className="px-6 py-4 text-[11px] font-black text-[#224292] uppercase tracking-widest font-graphik">Sanctioned Amount</th>
                                <th className="px-6 py-4 text-[11px] font-black text-[#224292] uppercase tracking-widest font-graphik">Period / Year</th>
                              </tr>
                            </thead>
                            <tbody className="divide-y divide-slate-100">
                              {course.fundedProjects.map((proj, pIdx) => (
                                <tr key={pIdx} className="hover:bg-blue-50/30 transition-colors">
                                  <td className="px-6 py-5">
                                    <p className="text-[13px] font-bold text-black font-graphik leading-tight">{proj.faculty || proj.investigator || 'Department Faculty'}</p>
                                  </td>
                                  <td className="px-6 py-5">
                                    <p className="text-[13px] font-medium text-black font-graphik leading-snug max-w-md">{proj.title}</p>
                                  </td>
                                  <td className="px-6 py-5">
                                    <span className="text-[11px] font-bold font-graphik text-[#224292] bg-blue-50 px-2.5 py-1 rounded-md border border-blue-100">{proj.agency || proj.sponsor}</span>
                                  </td>
                                  <td className="px-6 py-5">
                                    <span className="text-[12px] font-bold text-emerald-700 font-mono">₹ {proj.amount || proj.grant || 'Sanctioned'}</span>
                                  </td>
                                  <td className="px-6 py-5 text-xs font-medium text-slate-600 font-graphik whitespace-nowrap">{proj.period || proj.year || '2024-25'}</td>
                                </tr>
                              ))}
                            </tbody>
                          </table>
                        </div>
                      ) : (
                        <div className="p-10 text-center bg-slate-50/50">
                          <div className="w-14 h-14 rounded-2xl bg-blue-100 text-[#224292] flex items-center justify-center mx-auto mb-4 shadow-sm">
                            <Coins size={28} />
                          </div>
                          <h4 className="text-lg font-bold text-[#224292] font-graphik mb-2">Department Research Grants & Funded Projects</h4>
                          <p className="text-xs md:text-sm text-slate-600 font-medium font-graphik max-w-xl mx-auto leading-relaxed">
                            Faculty members actively secure sponsored research grants from government funding bodies including DST, AICTE, MSME, TNSCST, MHRD, and CSIR.
                          </p>
                        </div>
                      )}
                    </div>
                  </div>
                )}

                {/* SUB-TAB 2: STUDENT PROJECTS */}
                {activeResearchSubTab === 'Student Projects' && (
                  <div className="space-y-6">
                    <div className="bg-white rounded-2xl border border-[#E5EDF8] shadow-2xl shadow-blue-900/5 overflow-hidden">
                      <div className="bg-[#224292] px-8 py-5 flex items-center justify-between">
                        <h3 className="text-white font-bold font-graphik text-lg tracking-tight">Student Research & Innovation Projects</h3>
                        <span className="text-[11px] font-bold text-[#ffc107] bg-white/10 px-3 py-1 rounded-full border border-white/20 uppercase tracking-widest font-graphik">Student Innovations</span>
                      </div>

                      {course.studentProjects && course.studentProjects.length > 0 ? (
                        <div className="overflow-x-auto">
                          <table className="w-full text-left border-collapse">
                            <thead>
                              <tr className="bg-slate-50 border-b border-slate-100">
                                <th className="px-6 py-4 text-[11px] font-black text-[#224292] uppercase tracking-widest font-graphik">Project Title</th>
                                <th className="px-6 py-4 text-[11px] font-black text-[#224292] uppercase tracking-widest font-graphik">Student Innovators / Mentor</th>
                                <th className="px-6 py-4 text-[11px] font-black text-[#224292] uppercase tracking-widest font-graphik">Scheme / Agency</th>
                                <th className="px-6 py-4 text-[11px] font-black text-[#224292] uppercase tracking-widest font-graphik">Grant / Amount</th>
                                <th className="px-6 py-4 text-[11px] font-black text-[#224292] uppercase tracking-widest font-graphik">Academic Year</th>
                              </tr>
                            </thead>
                            <tbody className="divide-y divide-slate-100">
                              {course.studentProjects.map((sproj, sIdx) => (
                                <tr key={sIdx} className="hover:bg-blue-50/30 transition-colors">
                                  <td className="px-6 py-5">
                                    <p className="text-[13px] font-bold text-black font-graphik leading-snug max-w-md">{sproj.title}</p>
                                  </td>
                                  <td className="px-6 py-5">
                                    <p className="text-[13px] font-medium text-slate-800 font-graphik leading-tight">{sproj.mentor || sproj.students || 'Student Team'}</p>
                                  </td>
                                  <td className="px-6 py-5">
                                    <span className="text-[11px] font-bold font-graphik text-[#224292] bg-amber-50 px-2.5 py-1 rounded-md border border-amber-200">{sproj.agency || 'TNSCST / Hackathon'}</span>
                                  </td>
                                  <td className="px-6 py-5">
                                    <span className="text-[12px] font-bold text-emerald-700 font-mono">₹ {sproj.grant || sproj.amount || 'Funded'}</span>
                                  </td>
                                  <td className="px-6 py-5 text-xs font-medium text-slate-600 font-graphik whitespace-nowrap">{sproj.year || '2024-25'}</td>
                                </tr>
                              ))}
                            </tbody>
                          </table>
                        </div>
                      ) : (
                        <div className="p-10 text-center bg-slate-50/50">
                          <div className="w-14 h-14 rounded-2xl bg-amber-100 text-amber-700 flex items-center justify-center mx-auto mb-4 shadow-sm">
                            <Award size={28} />
                          </div>
                          <h4 className="text-lg font-bold text-[#224292] font-graphik mb-2">Student Innovative Projects & TNSCST Grants</h4>
                          <p className="text-xs md:text-sm text-slate-600 font-medium font-graphik max-w-xl mx-auto leading-relaxed">
                            Students execute innovative hardware and software capstone projects, receiving funding from TNSCST Student Project Scheme and winning national hackathons.
                          </p>
                        </div>
                      )}
                    </div>
                  </div>
                )}

                {/* SUB-TAB 3: PATENTS (SHOWS ALL DETAILS) */}
                {activeResearchSubTab === 'Patents' && (
                  <div className="space-y-6">
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
                                  <th className="px-6 py-4 text-[11px] font-black text-[#224292] uppercase tracking-widest font-graphik">Applicant & Inventor</th>
                                  <th className="px-6 py-4 text-[11px] font-black text-[#224292] uppercase tracking-widest font-graphik">Patent Title</th>
                                  <th className="px-6 py-4 text-[11px] font-black text-[#224292] uppercase tracking-widest font-graphik">Type</th>
                                  <th className="px-6 py-4 text-[11px] font-black text-[#224292] uppercase tracking-widest font-graphik">Application/Design No</th>
                                  <th className="px-6 py-4 text-[11px] font-black text-[#224292] uppercase tracking-widest font-graphik">Date</th>
                                  <th className="px-6 py-4 text-[11px] font-black text-[#224292] uppercase tracking-widest font-graphik">Status</th>
                                </tr>
                              </thead>
                              <tbody className="divide-y divide-slate-100">
                                {course.patents.map((yearGroup) => (
                                  yearGroup.data.map((patent, pIdx) => (
                                    <tr key={`${yearGroup.year}-${pIdx}`} className="hover:bg-blue-50/30 transition-colors group">
                                      <td className="px-6 py-5">
                                        <p className="text-[13px] font-bold text-black font-graphik leading-tight mb-1">{patent.inventors}</p>
                                      </td>
                                      <td className="px-6 py-5">
                                        <p className="text-[13px] font-medium text-black font-graphik leading-snug max-w-md">{patent.title}</p>
                                      </td>
                                      <td className="px-6 py-5">
                                        <span className="text-[11px] font-bold font-graphik text-[#64779F]">{patent.type}</span>
                                      </td>
                                      <td className="px-6 py-5">
                                        <code className="text-[12px] font-bold text-[#224292] bg-slate-100 px-2 py-1 rounded font-mono">{patent.appNo}</code>
                                      </td>
                                      <td className="px-6 py-5 text-sm font-medium text-slate-600 font-graphik whitespace-nowrap">{patent.date}</td>
                                      <td className="px-6 py-5">
                                        <span className={`inline-block px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest font-graphik ${patent.status === 'Granted' ? 'bg-emerald-100 text-emerald-700' : 'bg-blue-100 text-blue-700'
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


            {activeTab === 'Achievements' && (
              <AchievementSection courseId={courseId} courseName={course.name} />
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
                        {formatFacultyName(selectedFaculty.name)}
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
                      {getDynamicWorkExperience(selectedFaculty) && (
                        <div>
                          <p className="text-[13.5px] font-semibold font-graphik text-[#224292] mb-1">Work Experience</p>
                          <div className="flex items-center gap-2 text-black">
                            <Clock size={14} className="text-black/80" />
                            <span className="font-medium font-graphik text-[12.5px]">{getDynamicWorkExperience(selectedFaculty)}</span>
                          </div>
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
                      {selectedFaculty.association && (
                        <div>
                          <p className="text-[13.5px] font-semibold font-graphik text-[#224292] mb-1">Nature of Association</p>
                          <span className="inline-block px-3 py-1 rounded-md bg-slate-100 text-black text-[11px] font-semibold font-graphik tracking-wide">
                            {selectedFaculty.association}
                          </span>
                        </div>
                      )}
                      {(selectedFaculty.joiningDate || selectedFaculty.doj || selectedFaculty.dateOfJoining) && (
                        <div>
                          <p className="text-[13.5px] font-semibold font-graphik text-[#224292] mb-1">Date of Joining</p>
                          <p className="text-black font-medium font-graphik text-[12.5px]">
                            {selectedFaculty.joiningDate || selectedFaculty.doj || selectedFaculty.dateOfJoining}
                          </p>
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
function AwardsSection({ courseId, courseName, initialAudience }) {
  const [activeAudience, setActiveAudience] = useState(initialAudience || (courseId === 'btech-aids' ? 'FACULTY' : 'STUDENT'))

  useEffect(() => {
    if (initialAudience) {
      setActiveAudience(initialAudience)
    }
  }, [initialAudience])

  const studentAwards = studentAwardsMap[courseId] || []
  const facultyAwards = facultyAwardsMap[courseId] || []


  const visibleData = activeAudience === 'STUDENT' ? studentAwards : facultyAwards

  const levelColor = (level) => {
    if (!level) return 'bg-slate-100 text-slate-600'
    const l = level.toLowerCase()
    if (l.includes('national')) return 'bg-blue-50 text-blue-700'
    if (l.includes('international')) return 'bg-purple-50 text-purple-700'
    if (l.includes('state')) return 'bg-green-50 text-green-700'
    if (l.includes('regional')) return 'bg-orange-50 text-orange-700'
    if (l.includes('district')) return 'bg-yellow-50 text-yellow-700'
    return 'bg-slate-100 text-slate-600'
  }

  return (
    <div className="space-y-6">
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

  const studentAchievements = studentAchievementsMap[courseId] || []
  const facultyAchievements = facultyAchievementsMap[courseId] || []

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
      {/* Header & 4 Sub-Buttons - Centered */}
      <div className="flex flex-col items-center text-center justify-center gap-6 pb-6 border-b border-[#D5E2F4]/50">
        <div className="flex items-center justify-center gap-4">
          <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#224292] to-[#224292] flex items-center justify-center shadow-xl shadow-[#224292]/20">
            <Trophy size={28} className="text-[#ffc107]" />
          </div>
          <h3 className="text-3xl md:text-4xl font-bold font-graphik text-[#224292] tracking-tight leading-none">Department Honors & Awards</h3>
        </div>

        {/* 4 Sub-Buttons: Student Achievements, Faculty Achievements, Student Awards, Faculty Awards */}
        <div className="bg-[#224292]/5 p-1.5 rounded-2xl flex flex-wrap items-center justify-center gap-2 border border-[#224292]/10 mx-auto">
          {[
            { id: 'STUDENT', label: 'Student Achievements', icon: Trophy },
            { id: 'FACULTY', label: 'Faculty Achievements', icon: Star },
            { id: 'STUDENT_AWARDS', label: 'Student Awards', icon: Award },
            { id: 'FACULTY_AWARDS', label: 'Faculty Awards', icon: Award }
          ].map(tab => {
            const TabIcon = tab.icon
            const isActive = activeAudience === tab.id
            return (
              <button
                key={tab.id}
                onClick={() => setActiveAudience(tab.id)}
                className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-bold font-graphik transition-all duration-300 ${
                  isActive
                    ? 'bg-[#224292] text-white shadow-md shadow-[#224292]/20 scale-105'
                    : 'text-[#224292] hover:bg-[#224292]/10'
                }`}
              >
                <TabIcon size={15} className={isActive ? 'text-[#ffc107]' : 'text-[#224292]'} />
                {tab.label}
              </button>
            )
          })}
        </div>
      </div>

      {/* Render Student Awards / Faculty Awards / Student Achievements / Faculty Achievements */}
      {activeAudience === 'STUDENT_AWARDS' ? (
        <AwardsSection key="STUDENT_AWARDS" courseId={courseId} courseName={courseName} initialAudience="STUDENT" />
      ) : activeAudience === 'FACULTY_AWARDS' ? (
        <AwardsSection key="FACULTY_AWARDS" courseId={courseId} courseName={courseName} initialAudience="FACULTY" />
      ) : activeAudience === 'STUDENT' && visibleData.length > 0 ? (
        <div className="flex flex-col gap-8">
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
                const displayIndex = item.year ? visibleData.slice(0, idx + 1).filter(d => d.year === item.year).length : idx + 1;
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
                      <td className="px-4 py-3 text-center text-sm font-bold text-[#224292]">{displayIndex}</td>
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
        {studentNptelMap[courseId] && studentNptelMap[courseId].length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-white rounded-2xl overflow-x-auto shadow-xl shadow-black/[0.04] border border-slate-200"
          >
            <h3 className="px-6 py-4 text-lg font-bold font-graphik text-[#224292] border-b border-slate-200 bg-slate-50">NPTEL Certifications</h3>
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-[#224292] text-white">
                  <th className="px-4 py-4 text-[11px] font-semibold uppercase tracking-widest text-center">S.No</th>
                  <th className="px-4 py-4 text-[11px] font-semibold uppercase tracking-widest">Name of the Student</th>
                  <th className="px-4 py-4 text-[11px] font-semibold uppercase tracking-widest">Course Name</th>
                  <th className="px-4 py-4 text-[11px] font-semibold uppercase tracking-widest">Certification Type</th>
                </tr>
              </thead>
              <tbody>
                {studentNptelMap[courseId].map((item, idx) => (
                  <tr key={idx} className={`group transition-colors ${idx % 2 === 0 ? 'bg-black/[0.02]' : 'bg-transparent'} hover:bg-[#ffc107]/5`}>
                    <td className="px-4 py-3 text-center text-sm font-bold text-[#224292]">{item.sno}</td>
                    <td className="px-4 py-3 text-sm font-semibold text-slate-800 whitespace-pre-line">
                      {item.name.includes(' (') ? (
                        <>
                          {item.name.split(' (')[0]} <br className="hidden md:block" /><span className="font-normal text-slate-500 text-xs">({item.name.split(' (')[1]}</span>
                        </>
                      ) : (
                        item.name
                      )}
                    </td>
                    <td className="px-4 py-3 text-sm text-slate-700 whitespace-pre-line">{item.course}</td>
                    <td className="px-4 py-3 text-sm text-slate-600">{item.certificate}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </motion.div>
        )}
        </div>
      ) : activeAudience === 'FACULTY' && visibleData.length > 0 ? (
        <div className="flex flex-col gap-8">
          <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white rounded-2xl overflow-x-auto shadow-xl shadow-black/[0.04] border border-slate-200"
        >
          <table className="w-full text-left border-collapse">
            <thead>
              {courseId === 'mba-iev' || courseId === 'mba-general' ? (
                <tr className="bg-[#224292] text-white">
                  <th className="px-4 py-4 text-[11px] font-semibold uppercase tracking-widest text-center whitespace-nowrap">S.No</th>
                  <th className="px-4 py-4 text-[11px] font-semibold uppercase tracking-widest whitespace-nowrap">Name of the Faculty</th>
                  <th className="px-4 py-4 text-[11px] font-semibold uppercase tracking-widest whitespace-nowrap">Designation</th>
                  <th className="px-4 py-4 text-[11px] font-semibold uppercase tracking-widest whitespace-nowrap">Name of the Acheivements / Award</th>
                  <th className="px-4 py-4 text-[11px] font-semibold uppercase tracking-widest whitespace-nowrap">Date of receiving the award</th>
                  <th className="px-4 py-4 text-[11px] font-semibold uppercase tracking-widest whitespace-nowrap">Issued by</th>
                  <th className="px-4 py-4 text-[11px] font-semibold uppercase tracking-widest whitespace-nowrap">District/ Other State/ National</th>
                  <th className="px-4 py-4 text-[11px] font-semibold uppercase tracking-widest whitespace-nowrap">With State/ Outside State</th>
                </tr>
              ) : (
                <tr className="bg-[#224292] text-white">
                  <th className="px-4 py-4 text-[11px] font-semibold uppercase tracking-widest text-center">S.No</th>
                  <th className="px-4 py-4 text-[11px] font-semibold uppercase tracking-widest">Achiever Name and Designation</th>
                  <th className="px-4 py-4 text-[11px] font-semibold uppercase tracking-widest">Name of the Event / Achievement</th>
                  {(courseId === 'btech-aids' || courseId === 'be-cse' || courseId === 'be-ece') && (
                    <th className="px-4 py-4 text-[11px] font-semibold uppercase tracking-widest text-center">Level</th>
                  )}
                  <th className="px-4 py-4 text-[11px] font-semibold uppercase tracking-widest">Distinction / Award</th>
                  <th className="px-4 py-4 text-[11px] font-semibold uppercase tracking-widest">Title</th>
                </tr>
              )}
            </thead>
            <tbody>
              {visibleData.map((item, idx) => {
                const showYearHeader = item.year && (idx === 0 || item.year !== visibleData[idx - 1].year);
                const displayIndex = item.year ? visibleData.slice(0, idx + 1).filter(d => d.year === item.year).length : idx + 1;
                return (
                  <Fragment key={idx}>
                    {showYearHeader && (
                      <tr className="bg-slate-100">
                        <td colSpan={(courseId === 'mba-iev' || courseId === 'mba-general') ? "8" : "6"} className="px-4 py-3 text-center text-sm font-bold text-slate-800 border-y border-slate-200">
                          FACULTY ACHIEVEMENTS {item.year}
                        </td>
                      </tr>
                    )}
                    {courseId === 'mba-iev' || courseId === 'mba-general' ? (
                      <tr className={`group transition-colors ${idx % 2 === 0 ? 'bg-black/[0.02]' : 'bg-transparent'} hover:bg-[#ffc107]/5 border-t border-slate-100`}>
                        <td className="px-4 py-3 text-center text-sm font-bold text-[#224292] whitespace-nowrap">{displayIndex}</td>
                        <td className="px-4 py-3 text-sm font-semibold text-slate-800 whitespace-nowrap">{item.name}</td>
                        <td className="px-4 py-3 text-sm text-slate-600 whitespace-nowrap">{item.designation}</td>
                        <td className="px-4 py-3 text-sm text-slate-700 whitespace-pre-line">{item.achievement}</td>
                        <td className="px-4 py-3 text-sm text-slate-600 whitespace-nowrap">{item.date}</td>
                        <td className="px-4 py-3 text-sm text-slate-600 whitespace-pre-line">{item.issuedBy}</td>
                        <td className="px-4 py-3 text-sm text-slate-600 whitespace-nowrap">{item.districtOrNational}</td>
                        <td className="px-4 py-3 text-sm text-slate-600 whitespace-nowrap">{item.stateStatus}</td>
                      </tr>
                    ) : (
                      <tr className={`group transition-colors ${idx % 2 === 0 ? 'bg-black/[0.02]' : 'bg-transparent'} hover:bg-[#ffc107]/5 border-t border-slate-100`}>
                        <td className="px-4 py-3 text-center text-sm font-bold text-[#224292]">{displayIndex}</td>
                        <td className="px-4 py-3 text-sm font-semibold text-slate-800 whitespace-pre-line">{item.name}</td>
                        <td className="px-4 py-3 text-sm text-slate-600 whitespace-pre-line">{item.event}</td>
                        {(courseId === 'btech-aids' || courseId === 'be-cse' || courseId === 'be-ece') && (
                          <td className="px-4 py-3 text-center">
                            <span className={`inline-block px-3 py-1 rounded-lg text-[10px] font-bold tracking-wide ${levelColor(item.level)}`}>
                              {item.level}
                            </span>
                          </td>
                        )}
                        <td className="px-4 py-3 text-sm text-slate-700 whitespace-pre-line">{item.award}</td>
                        <td className="px-4 py-3 text-sm text-slate-600 whitespace-pre-line">{item.title}</td>
                      </tr>
                    )}
                  </Fragment>
                );
              })}
            </tbody>
          </table>
        </motion.div>
        {facultyNptelMap[courseId] && facultyNptelMap[courseId].length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mt-8 bg-white rounded-2xl overflow-x-auto shadow-xl shadow-black/[0.04] border border-slate-200"
          >
            <h3 className="px-6 py-4 text-lg font-bold font-graphik text-[#224292] border-b border-slate-200 bg-slate-50">NPTEL Certifications</h3>
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-[#224292] text-white">
                  <th className="px-4 py-4 text-[11px] font-semibold uppercase tracking-widest text-center">S.No</th>
                  <th className="px-4 py-4 text-[11px] font-semibold uppercase tracking-widest">Name of the Faculty</th>
                  <th className="px-4 py-4 text-[11px] font-semibold uppercase tracking-widest">Designation</th>
                  <th className="px-4 py-4 text-[11px] font-semibold uppercase tracking-widest">Course Name</th>
                  <th className="px-4 py-4 text-[11px] font-semibold uppercase tracking-widest">Certificate Type</th>
                </tr>
              </thead>
              <tbody>
                {facultyNptelMap[courseId].map((item, idx) => (
                  <tr key={idx} className={`group transition-colors ${idx % 2 === 0 ? 'bg-black/[0.02]' : 'bg-transparent'} hover:bg-[#ffc107]/5`}>
                    <td className="px-4 py-3 text-center text-sm font-bold text-[#224292]">{item.sno}</td>
                    <td className="px-4 py-3 text-sm font-semibold text-slate-800 whitespace-pre-line">{item.name}</td>
                    <td className="px-4 py-3 text-sm text-slate-600">{item.designation}</td>
                    <td className="px-4 py-3 text-sm text-slate-700 whitespace-pre-line">{item.course}</td>
                    <td className="px-4 py-3 text-sm text-slate-600">{item.certificate}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </motion.div>
        )}
        </div>
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
  const members = csbsClubsMembers;
  const objectives = csbsClubsObjectives;
  const responsibilities = csbsClubsResponsibilities;

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
function InnovativePracticesSection({ courseId }) {
  const imagesMap = {
    'be-ecx': [ip1, ip2],
    'be-ecm': [ip1, ip2],
  };
  const meAeDetails = [
    {
      sno: 1,
      name: 'Mr. A. Arun',
      subject: 'Electric Vehicles and Architecture',
      method: 'Quiz',
      description: "A Quiz is an interactive assessment method used to evaluate students' understanding of a topic through short questions.",
      image: meAeQuiz
    },
    {
      sno: 2,
      name: 'Mr. K. Rajesh',
      subject: 'Automotive Sensors and Systems',
      method: 'Experiential Learning',
      description: "Students learn by actively engaging in experiments, industrial visits, internships, field activities, and real-life engineering applications, enabling them to connect classroom learning with practical experiences.",
      image: meAeExperiential
    },
    {
      sno: 3,
      name: 'Mrs. T. Devika',
      subject: 'Automotive Embedded Hardware Design',
      method: 'Project Based Learning',
      description: "Students undertake individual and team-based projects to design, develop, test, and implement engineering solutions. This method promotes creativity, innovation, research aptitude, and practical application of theoretical knowledge.",
      image: meAePbl
    }
  ];

  const beEceDetails = [
    {
      sno: 1,
      name: 'Mr.K.Rajesh',
      subject: 'Electronic Devices',
      method: 'Hands-on Experience Session',
      description: "Students gain practical knowledge by performing laboratory experiments, hardware interfacing, circuit design, and simulation activities. This approach bridges the gap between theoretical concepts and real-world engineering applications.",
      image: eceIp1
    },
    {
      sno: 2,
      name: 'Mr.K.Rajesh',
      subject: 'Electronic Devices',
      method: 'Quiz',
      description: "Regular quizzes are conducted using digital and classroom-based platforms to assess students' conceptual understanding, encourage active participation, and provide immediate feedback for continuous improvement.",
      image: eceIp2
    },
    {
      sno: 3,
      name: 'Mr.K.Rajesh',
      subject: 'Low-Power VLSI Design',
      method: 'Experiential Learning',
      description: "Students learn by actively engaging in experiments, industrial visits, internships, field activities, and real-life engineering applications, enabling them to connect classroom learning with practical experiences.",
      image: eceIp3
    },
    {
      sno: 4,
      name: 'Mr.K.Rajesh',
      subject: 'Electronic Devices',
      method: 'Roleplay',
      description: "Students enact real-world engineering scenarios such as technical interviews, customer interactions, project presentations, and industrial problem-solving situations to improve communication, teamwork, and decision-making skills.",
      image: eceIp4
    },
    {
      sno: 5,
      name: 'Mr.S.Manoharan',
      subject: 'Communication Systems',
      method: 'Seminar',
      description: "Seminar is an interactive learning activity where students research a technical topic, prepare a presentation, and share their knowledge with peers.",
      image: eceIp5
    },
    {
      sno: 6,
      name: 'Mrs.M.Vasanthi',
      subject: 'VLSI Design',
      method: 'Mindmap',
      description: "A Mind Map is a visual learning technique that organizes concepts and ideas around a central topic using branches and keywords.",
      image: eceIp6
    },
    {
      sno: 7,
      name: 'Mrs.S.Elarmathi',
      subject: 'Embedded Systems and IOT',
      method: 'Mindmap',
      description: "Mind mapping techniques help students organize complex engineering concepts visually, enabling better understanding, retention, and interconnection of topics through diagrams and concept maps.",
      image: eceIp7
    },
    {
      sno: 8,
      name: 'Mr.R.Shanmugasundara',
      subject: 'Digital Signal Processing',
      method: 'Collaborative Learning',
      description: "Students work together in teams to solve engineering problems, complete assignments, conduct experiments, and develop projects, fostering teamwork, leadership, and interpersonal skills.",
      image: eceIp8
    },
    {
      sno: 9,
      name: 'Mr.S.Elarmathi',
      subject: 'Embedded Systems and IOT',
      method: 'Peer Learning',
      description: "Students learn from one another through knowledge sharing, group discussions, mentoring, and collaborative problem-solving, which strengthens conceptual understanding and builds confidence.",
      image: eceIp9
    },
    {
      sno: 10,
      name: 'Mrs.V.Vadivu',
      subject: 'Communication Systems',
      method: 'Participative Learning & Presentation',
      description: "Students actively participate in group discussions, technical presentations, demonstrations, and classroom interactions, enhancing communication skills, subject knowledge, and self-confidence.",
      image: eceIp10
    },
    {
      sno: 11,
      name: 'Mr.V.Vimalraj',
      subject: 'Automotive ESU',
      method: 'Simulation Based Learning',
      description: "Students are presented with real-world engineering problems and encouraged to analyze, research, and develop innovative solutions using scientific and engineering principles, thereby enhancing critical thinking and analytical skills.",
      image: eceIp11
    },
    {
      sno: 12,
      name: 'Mrs.V.Vadivu',
      subject: 'Analog and Digital Communication',
      method: 'Workshop-Based Learning',
      description: "Classroom sessions are conducted in the form of workshops where students engage in guided practical activities, demonstrations, tool-based learning, and interactive exercises to gain hands-on experience with emerging technologies.",
      image: eceIp12
    },
    {
      sno: 13,
      name: 'Mrs.T.Devika',
      subject: 'Embedded System Interfacing',
      method: 'Project Based Learning',
      description: "Students undertake individual and team-based projects to design, develop, test, and implement engineering solutions. This method promotes creativity, innovation, research aptitude, and practical application of theoretical knowledge.",
      image: eceIp13
    },
    {
      sno: 14,
      name: 'Mr.T.Praveenkumar',
      subject: 'Electro Magnetic Fields',
      method: 'Workshop Mode',
      description: "To foster active and collaborative learning, students were divided into groups and provided with specific reference materials. Each team analyzed the assigned content, engaged in technical discussions, and presented their insights to the class. This student-centered approach not only strengthened conceptual understanding but also enhanced communication, presentation, critical thinking, and teamwork skills.",
      image: eceIp14
    },
    {
      sno: 15,
      name: 'Mrs.S.Sasidevi',
      subject: 'Digital Electronics',
      method: 'Peer Review',
      description: "Students evaluate and provide constructive feedback on their peers' assignments, presentations, project reports, and technical work using predefined rubrics. This process promotes critical evaluation, collaborative improvement, and reflective learning.",
      image: eceIp15
    },
    {
      sno: 16,
      name: 'Ms.C.Sri kiruthika',
      subject: 'Digital Principles and Computer Organization',
      method: 'Collaborative Learning',
      description: "Students work together in teams to solve engineering problems, complete assignments, conduct experiments, and develop projects, fostering teamwork, leadership, and interpersonal skills.",
      image: eceIp16
    },
    {
      sno: 17,
      name: 'Mr.S.Sabarinathan',
      subject: 'Digital Principles and Computer Organization',
      method: 'Seminar',
      description: "Seminar is an interactive learning activity where students research a technical topic, prepare a presentation, and share their knowledge with peers.",
      image: eceIp17
    }
  ];

  const detailsMap = {
    'me-ae': meAeDetails,
    'be-ece': beEceDetails
  };

  const images = imagesMap[courseId] || [];
  const details = detailsMap[courseId] || [];

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

      {(courseId === 'mba-general' || courseId === 'mba-iev') && (
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

      {courseId === 'be-mechanical' && (
        <div className="space-y-6">
          <h4 className="text-xl font-bold font-graphik text-[#224292] flex items-center gap-2">
            <span className="w-1.5 h-6 bg-[#ffc107] rounded-full inline-block" />
            Teaching Methods Adopted
          </h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {mechanicalTeachingMethods.map((method, idx) => (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.05 }}
                key={idx}
                className="bg-white border border-[#DEE7F4] rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all group"
              >
                <div className="p-4 md:p-5 text-center border-b border-[#DEE7F4]">
                  <h3 className="font-bold text-[#224292] text-[15px] group-hover:text-[#ffc107] transition-colors uppercase tracking-wide">{method.name}</h3>
                </div>
                <div className="aspect-video w-full overflow-hidden bg-slate-50 relative">
                  <img
                    src={method.image}
                    alt={method.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      )}

      {images.length > 0 && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {images.map((img, idx) => (
            <div key={idx} className="rounded-2xl overflow-hidden shadow-lg border border-slate-200">
              <img src={img} alt={`Innovative Practice ${idx + 1}`} className="w-full h-auto object-cover" />
            </div>
          ))}
        </div>
      )}

      {details.length > 0 && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {details.map((detail, idx) => (
            <div key={idx} className="bg-white border border-slate-200 rounded-2xl p-6 shadow-lg shadow-blue-900/5 hover:shadow-xl hover:border-[#ffc107] transition-all flex flex-col h-full group">
              <div className="rounded-xl overflow-hidden mb-6 bg-slate-50 border border-slate-100 flex items-center justify-center aspect-[4/3] relative">
                <img src={detail.image} alt={detail.method} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              <div className="flex flex-col flex-grow">
                <div className="inline-flex px-3 py-1 bg-blue-50 text-[#224292] text-xs font-bold font-graphik rounded-md mb-4 self-start border border-blue-100">
                  {detail.method}
                </div>
                <h4 className="text-[17px] font-bold font-graphik text-[#224292] leading-tight mb-2 group-hover:text-[#ffc107] transition-colors">{detail.subject}</h4>
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-2 h-2 rounded-full bg-[#ffc107]" />
                  <p className="text-[13px] font-semibold text-slate-500 uppercase tracking-wide">By {detail.name}</p>
                </div>
                <p className="text-[13.5px] font-medium text-slate-600 leading-relaxed font-graphik text-justify mt-auto">
                  {detail.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      )}
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
