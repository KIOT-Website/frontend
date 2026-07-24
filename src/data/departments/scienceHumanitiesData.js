import { BookOpen, FlaskConical, Microscope, Flame } from 'lucide-react'
import kaalijoothiImage from '../../assets/Faculity/civil/S.J.KAALIJOOTHI.webp'
import sasikumarImage from '../../assets/Faculity/civil/S.SASI KUMAR.webp'
import balamuruganImage from '../../assets/Faculity/civil/U.BALAMURUGAN.webp'
import dheepikaImage from '../../assets/Faculity/csbs/dheepika.webp'
import madheswaranImage from '../../assets/Faculity/csbs/madheswaran.webp'
import noorulAmeenImage from '../../assets/Faculity/csbs/noorul_ameen.webp'
import sambathkumarImage from '../../assets/Faculity/csbs/sambathkumar.webp'
import aidsManivelImage from '../../assets/Faculity/aids/manivel.webp'
import aidsVenkateshImage from '../../assets/Faculity/aids/venkatesh.webp'
import aidsVenkatachalamImage from '../../assets/Faculity/aids/venkatachalam.webp'
import aidsGomathiShImage from '../../assets/Faculity/aids/gomathi_sh.webp'
import eeeRekhaSImage from '../../assets/Faculity/eee/rekha_s.webp'
import eeeManjulaImage from '../../assets/Faculity/eee/manjula.webp'
import eeePrasathMImage from '../../assets/Faculity/eee/prasath_m.webp'
import eeeRajeswariImage from '../../assets/Faculity/eee/rajeswari.webp'
import naveenkumarImage from '../../assets/Faculity/MECH/Mr. S. Naveenkumar.webp'
import geethaImage from '../../assets/Faculity/MECH/Dr.K.Geetha.webp'
import vinothkumarKTamilImage from '../../assets/Faculity/MECH/Dr.K.Vinothkumar.webp'
import sindhuImage from '../../assets/Faculity/MECH/Dr.M.Sindhu.webp'
import sathiyaImage from '../../assets/Faculity/MECH/Dr.S.Sathiya.webp'
import anandKumarImage from '../../assets/Faculity/MECH/Mr.K.Anand Kumar.webp'
import indumathiImage from '../../assets/Faculity/MECH/Mrs.B.Indumathi.webp'
import eceSanthiImage from '../../assets/Faculity/ECE/Dr. T.K Santhi.webp'
import eceRajaImage from '../../assets/Faculity/ECE/Mr. T. Raja.webp'
import eceSaranyaImage from '../../assets/Faculity/ECE/Mrs. S. Saranya.webp'
import eceDhineshkumarImage from '../../assets/Faculity/ECE/Mr. P. Dhineshkumar.webp'
import ecePriyaImage from '../../assets/Faculity/ECE/Mrs. P. Priya.webp'
import ecePreethiImage from '../../assets/Faculity/ECE/Mrs. A. Preethi.webp'
import cseKSudhaImage from '../../assets/Faculity/cse/Mrs.K.SUDHA.webp'
import cseRShanmugavalliImage from '../../assets/Faculity/cse/Mrs.R.SHANMUGAVALLI.webp'
import cseSGeethaImage from '../../assets/Faculity/cse/Mrs.S.GEETHA.webp'
import cseTSrinivasarajaImage from '../../assets/Faculity/cse/Mr.T.SRINIVASARAJA.webp'
import cseGDivyaImage from '../../assets/Faculity/cse/Mrs.G.DIVYA.webp'

export const scienceHumanitiesData = {
  name: 'Department of Science & Humanities',
    short: 'S&H',
    duration: 'Foundation Department',
    intake: 'N/A',
    affiliation: 'Anna University',
    accreditation: 'Core Foundation',
    placement: 'N/A',
    avgPackage: 'N/A',
    topPackage: 'N/A',
    icon: FlaskConical,
    color: '#224292',
    tagline: 'Empowering engineering minds with scientific rigor.',
    overview: [
      'The department of Science and Humanities aims at providing competitive quality education and support the students to lay basic profound foundation in all the branches of Engineering. The motto of the department is to impart the best teaching methodologies which prepare competent professionals able to independently apply knowledge to become a successful engineer.',
      'Department of Science and Humanities comprises of Mathematics, Physics, Chemistry and English language. Science laboratories are well equipped to cater the needs of students. The Department is adorned with adequate dedicated experienced faculty with specialization in diverse fields to impart knowledge and enhance skills. Department organizes periodic guest lectures, faculty development programme, Science Carnival, Intra paper Presentation and Industrial Visits to inculcate Science in Engineering approach.',
      'The department of Science and Humanities has an exclusive Language Laboratory. It aims to promote writing, reading, listening and speaking skills of students. It also tenaciously adopts innovative teaching methods to tackle students (a) with rural background (b) lacking fluency in English (c) whose medium of instruction has been the regional language.'
    ],
    whyChoose: [
      'Highly qualified faculty members with Ph.D. and rich research experience.',
      'State-of-the-art Physics and Chemistry laboratories.',
      'Advanced Communication Skills Lab to enhance student proficiency.',
      'Specialized bridge courses and personalized student mentoring.'
    ],
    curriculum: [
      { year: 'Semester 1', semesters: ['Engineering Mathematics I', 'Engineering Physics', 'Engineering Chemistry', 'Problem Solving and Python Programming', 'Physics and Chemistry Laboratory'] },
      { year: 'Semester 2', semesters: ['Engineering Mathematics II', 'Physics for Information Science', 'Basic Electrical and Electronics Engineering', 'Technical English', 'Communication Skills Laboratory'] }
    ],
    faculty: [
      // ── Mathematics ──
      { name: 'Ms. Sudha K', designation: 'Assistant Professor', qualification: 'M.Sc., M.Phil., B.Ed.', experience: '19.11 Years', specialization: 'Differential Equations', email: 'sudharmsc@gmail.com', publications: '-', rating: 4.8, image: cseKSudhaImage, subject: 'Mathematics', category: 'S&H' },
      { name: 'Ms. Geetha S', designation: 'Assistant Professor', qualification: 'M.Sc., M.Phil.', experience: '13.02 Years', specialization: 'Differential Equations', email: 'sgeetha.maths@gmail.com', publications: '-', rating: 4.7, image: cseSGeethaImage, subject: 'Mathematics', category: 'S&H' },
      { name: 'Mr. Karthi P R', designation: 'Assistant Professor', qualification: 'M.Sc., M.Phil.', experience: '8.10 Years', specialization: 'Partial Differential Equations', email: 'prkmat@kiot.ac.in', publications: '-', rating: 4.6, subject: 'Mathematics', category: 'S&H' },
      { name: 'Ms. Shanmugavalli R', designation: 'Assistant Professor', qualification: 'M.Sc., M.Phil., B.Ed.', experience: '11.8 Years', specialization: 'Differential Equations', email: 'sangeesweety26@gmail.com', publications: '-', rating: 4.6, image: cseRShanmugavalliImage, subject: 'Mathematics', category: 'S&H' },
      { name: 'Mr. Saravanan J', designation: 'Assistant Professor', qualification: 'M.sc., M.Phil., (Maths)', experience: 'Teaching: 9 Yrs', specialization: 'Linear Algebra', email: 'jsamat@kiot.ac.in', publications: 'Nil', rating: 4.5, subject: 'Mathematics', category: 'S&H' },
      { name: 'Mr. Madheswaran P', designation: 'Assistant Professor', qualification: 'B.Sc., M.Sc., B.Ed., M.Phil., MISTE., D.M.E.', experience: 'Teaching: 21.5 Years, Industry: 7 Years', specialization: 'Ordinary Differential Equations', email: 'pmmat@kiot.ac.in', publications: '-', rating: 4.8, image: madheswaranImage, subject: 'Mathematics', category: 'S&H' },
      { name: 'Ms. Saranya S', designation: 'Assistant Professor', qualification: 'M.sc., M.Phil.', experience: 'Teaching: 12 Years', specialization: 'Differential Equation', email: 'ssmat@kiot.ac.in', publications: 'NIL', rating: 4.6, image: eceSaranyaImage, subject: 'Mathematics', category: 'S&H' },
      { name: 'Ms. P.Priya', designation: 'Assistant Professor', qualification: 'M.Sc., M.Ed., M.Phil.', experience: 'Teaching: 10 Years', specialization: 'Topology, Diffrential Equations', email: 'ppmat@kiot.ac.in', publications: 'NIL', rating: 4.6, image: ecePriyaImage, subject: 'Mathematics', category: 'S&H' },
      { name: 'Mr. Raja T', designation: 'Assistant Professor', qualification: 'B.Sc (maths)., M.Sc(Maths)', experience: 'Teaching: 13 yrs', specialization: 'Fluid Dynamics, Partial Differential Equation', email: 'trjmat@kiot.ac.in', publications: 'IJ: 01 NC: 01', rating: 4.7, image: eceRajaImage, subject: 'Mathematics', category: 'S&H' },
      { name: 'Dr. M.Sindhu', designation: 'Associate Professor', qualification: 'M.Sc., M.Phil.,Ph.D', experience: 'Teaching: 8.5 Research: 4', specialization: 'Graph Theory', email: 'msmat@kiot.ac.in', publications: 'IJ:12,IC:10,NC:08', rating: 4.8, image: sindhuImage, subject: 'Mathematics', category: 'S&H' },
      { name: 'Mr. U.Balamurugan', designation: 'Assistant Professor', qualification: 'M.Sc., M.Phil.', experience: 'Teaching - 11.2 Years', specialization: 'Mathematics', email: 'ubmat@kiot.ac.in', publications: 'N/A', rating: 4.5, image: balamuruganImage, subject: 'Mathematics', category: 'S&H' },
      { name: 'Mr. B.Ganeshkumar', designation: 'Assistant Professor', qualification: 'M.Sc., M.Phil.', experience: 'Teaching – 5 Years', specialization: 'Mathematics Science', email: 'N/A', publications: '-', rating: 4.6, subject: 'Mathematics', category: 'S&H' },
      { name: 'Ms. B.Rajeswari', designation: 'Assistant Professor', qualification: 'M.Sc., M.Phil.', experience: 'Teaching: 16.4 Yrs.', specialization: 'Boolean Algebra', email: 'brmat@kiot.ac.in', publications: 'NC: 0', rating: 4.8, image: eeeRajeswariImage, subject: 'Mathematics', category: 'S&H' },
      { name: 'Mr. M.Prasath', designation: 'Assistant Professor', qualification: 'M.Sc., M.Phil.', experience: 'Teaching: 17.6 Yrs.', specialization: 'Operation Research', email: 'mpmat@kiot.ac.in', publications: 'NC: 01', rating: 4.8, image: eeePrasathMImage, subject: 'Mathematics', category: 'S&H' },
      { name: 'Ms. T.Ranjani', designation: 'Assistant Professor', qualification: 'M.Sc., M.Phil.', experience: 'Teaching – 5 Years', specialization: 'Mathematics Science', email: 'N/A', publications: '-', rating: 4.6, subject: 'Mathematics', category: 'S&H' },
      { name: 'Ms. J.Saritha', designation: 'Assistant Professor', qualification: 'M.sc., M.Phil., (Maths)', experience: 'Teaching: 14 Yrs', specialization: 'Algebra', email: 'jsmat@kiot.ac.in', publications: 'Nil', rating: 4.6, subject: 'Mathematics', category: 'S&H' },
      { name: 'Ms. V.Gomathi', designation: 'Assistant Professor', qualification: 'M.Sc., M.Phil.', experience: '8 Yrs 4 Months', specialization: 'Differential Equations', email: 'gomathivvs@gmail.com', publications: '-', rating: 4.6, image: aidsGomathiShImage, subject: 'Mathematics', category: 'S&H' },
      { name: 'Dr. G.Sathiyapriyanka', designation: 'Assistant Professor', qualification: 'M.Sc., Ph.D.', experience: 'Teaching – 5 Years', specialization: 'Mathematics Science', email: 'N/A', publications: '-', rating: 4.6, subject: 'Mathematics', category: 'S&H' },
      { name: 'Dr. T.Madhumathi', designation: 'Assistant Professor', qualification: 'M.Sc., M.Phil., Ph.D.', experience: 'Teaching: 1.7 Years', specialization: 'Topology', email: 'tmmat@kiot.ac.in', publications: 'IJ: 9 NJ: - IC: 5 NC:1', rating: 4.8, subject: 'Mathematics', category: 'S&H' },
      { name: 'Dr. K.Geetha', designation: 'Assistant Professor', qualification: 'M.SC., M.Phil.,Ph.D.', experience: 'Teaching: 12 years. Research:4 years', specialization: 'Fuzzy Algebra', email: 'N/A', publications: 'IJ: 6 , NJ: 2 IC: 9 NC', rating: 4.7, image: geethaImage, subject: 'Mathematics', category: 'S&H' },
      { name: 'Mr. K.Manikandan', designation: 'Assistant Professor', qualification: 'M.Sc., M.Phil.', experience: 'Teaching – 5 Years', specialization: 'Mathematics Science', email: 'N/A', publications: '-', rating: 4.6, subject: 'Mathematics', category: 'S&H' },
      { name: 'Mr. S.Ramesh', designation: 'Assistant Professor', qualification: 'M.Sc., M.Phil.', experience: 'Teaching: 11 Years 09 Months', specialization: 'Differential Equations', email: 'srmat@kiot.ac.in', publications: '-', rating: 4.7, subject: 'Mathematics', category: 'S&H' },
      // ── English ──
      { name: 'Dr. T.K.Santhi', designation: 'Associate Professor', qualification: 'BA(Eng)., MA(Eng)., M. Phil (Eng) Ph.D(AAL)', experience: 'Teaching: 23 Years Research: 7 Years', specialization: 'Indian writing in English, Afro- American Lit & ELT', email: 'tkseng@kiot.ac.in', publications: 'IJ: 02 IC: 04 NC: 04', rating: 5.0, image: eceSanthiImage, subject: 'English', category: 'S&H' },
      { name: 'Dr. T.Priya Mol', designation: 'Assistant Professor', qualification: 'M.A., Ph.D.', experience: 'Teaching – 5 Years', specialization: 'English Literature', email: 'N/A', publications: '-', rating: 4.6, subject: 'English', category: 'S&H' },
      { name: 'Mr. K.Anand Kumar', designation: 'Assistant Professor', qualification: 'M.A., M.PHIL', experience: 'Teaching : 20 years', specialization: 'ELT, Phonetics', email: 'kakeng@kiot.ac.in', publications: 'IJ - 2', rating: 4.8, image: anandKumarImage, subject: 'English', category: 'S&H' },
      { name: 'Ms. K.V.Manjula', designation: 'Assistant Professor', qualification: 'M.A., M.Phil.', experience: 'Teaching: 7.0 Yrs.', specialization: 'Feminine Literature', email: 'kvmeng@kiot.ac.in', publications: 'NC: 02', rating: 4.7, image: eeeManjulaImage, subject: 'English', category: 'S&H' },
      { name: 'Mr. T.Srinivasaraja', designation: 'Assistant Professor', qualification: 'M.A., B.Ed., M.Phil', experience: '9.3 Years', specialization: 'British Literature', email: 'tseng@kiot.ac.in', publications: 'IJ:02, IC:03, NC:03', rating: 4.6, image: cseTSrinivasarajaImage, subject: 'English', category: 'S&H' },
      { name: 'Ms. A.Dheepika', designation: 'Assistant Professor', qualification: 'B.A., M.A., M.Phil., B.Ed.', experience: '11 Years', specialization: 'English Language Teaching', email: 'adeng@kiot.ac.in', publications: '-', rating: 4.7, image: dheepikaImage, subject: 'English', category: 'S&H' },
      { name: 'Mr. T.Venkatachalam', designation: 'Assistant Professor', qualification: 'M.A., M.Phil., B.Ed.', experience: '12 Yrs 6 Months', specialization: 'Language and Linguistics', email: 'venkatachalamteng@kiot.ac.in', publications: 'IC:01', rating: 4.7, image: aidsVenkatachalamImage, subject: 'English', category: 'S&H' },
      { name: 'Mr. K.Karthick', designation: 'Assistant Professor', qualification: 'M.A., B.Ed., M.Phil.(English)', experience: 'Teaching: 9 Yrs', specialization: 'English Literature', email: 'kkit@kiot.ac.in', publications: 'IJ:1, IC:3, NC:1', rating: 4.5, subject: 'English', category: 'S&H' },
      { name: 'Mr. S.Dineshkumar', designation: 'Assistant Professor', qualification: 'M.A., M.Phil.', experience: 'Teaching – 5 Years', specialization: 'English Literature', email: 'N/A', publications: '-', rating: 4.6, subject: 'English', category: 'S&H' },
      { name: 'Ms. S.J.Kaalijoothi', designation: 'Assistant Professor', qualification: 'M.A., M.Phil.', experience: 'Teaching - 9 Years', specialization: 'English', email: 'sjkeng@kiot.ac.in', publications: 'N/A', rating: 4.6, image: kaalijoothiImage, subject: 'English', category: 'S&H' },
      { name: 'Ms. Hemalatha Madhu', designation: 'Assistant Professor', qualification: 'M.A., M.Phil.', experience: 'Teaching – 5 Years', specialization: 'English Literature', email: 'N/A', publications: '-', rating: 4.6, subject: 'English', category: 'S&H' },
      // ── Physics ──
      { name: 'Dr. S.Sugan', designation: 'Associate Professor', qualification: 'M.Sc., Ph.D.', experience: 'Teaching – 5 Years', specialization: 'Physics Science', email: 'N/A', publications: '-', rating: 4.6, subject: 'Physics', category: 'S&H' },
      { name: 'Dr. C.Sambathkumar', designation: 'Assistant Professor', qualification: 'M.Sc., M.Phil., Ph.D.', experience: 'Research: 6 Years', specialization: 'Nanomaterials for Energy Storage Application', email: 'sambath7593@gmail.com', publications: 'IJ: 15, IC: 02, NJ: 02', rating: 4.8, image: sambathkumarImage, subject: 'Physics', category: 'S&H' },
      { name: 'Mr. S.Sasikumar', designation: 'Assistant Professor', qualification: 'M.Sc., M.Phil.', experience: 'Teaching - 17 Years', specialization: 'Physics', email: 'ssphy@kiot.ac.in', publications: 'N/A', rating: 4.5, image: sasikumarImage, subject: 'Physics', category: 'S&H' },
      { name: 'Ms. B.Indumathi', designation: 'Assistant Professor', qualification: 'M.Sc., M.Phil.', experience: 'Teaching : 16.10 Years', specialization: 'LASER', email: 'biphy@kiot.ac.in', publications: '-', rating: 4.7, image: indumathiImage, subject: 'Physics', category: 'S&H' },
      { name: 'Ms. P.Shyamala Devi', designation: 'Assistant Professor', qualification: 'M.sc., M.Phil., (Physics)', experience: 'Teaching: 14.3 Yrs', specialization: 'Spectroscopy, Ultrasonics', email: 'psphy@kiot.ac.in', publications: 'Nil', rating: 4.6, subject: 'Physics', category: 'S&H' },
      { name: 'Ms. G.Divya', designation: 'Assistant Professor', qualification: 'B.Sc., M.Sc., M.Phil', experience: '7.2 Years', specialization: 'Physics (Spectroscopy)', email: 'gdphy@kiot.ac.in', publications: '-', rating: 4.6, image: cseGDivyaImage, subject: 'Physics', category: 'S&H' },
      { name: 'Mr. P.Dhineshkumar', designation: 'Assistant Professor', qualification: 'M.sc., M.Phil., (Physics)', experience: 'Teaching: 2.7 Years', specialization: 'Vibrational Spectroscopy', email: 'pdphy@kiot.ac.in', publications: 'NIL', rating: 4.3, image: eceDhineshkumarImage, subject: 'Physics', category: 'S&H' },
      { name: 'Dr. S.Manivel', designation: 'Associate Professor', qualification: 'M.sc., Ph.D.', experience: '9 Yrs 10 Months', specialization: 'vibrational spectroscopy', email: 'smvphy@kiot.ac.in', publications: 'IJ:6, NJ:6', rating: 4.7, image: aidsManivelImage, subject: 'Physics', category: 'S&H' },
      { name: 'Dr. T.Aruna Christy', designation: 'Associate Professor', qualification: 'M.Sc., Ph.D.', experience: 'Teaching – 5 Years', specialization: 'Physics Science', email: 'N/A', publications: '-', rating: 4.6, subject: 'Physics', category: 'S&H' },
      { name: 'Dr. T.Masilamani', designation: 'Professor', qualification: 'M.Sc., Ph.D.', experience: 'Teaching – 5 Years', specialization: 'Physics Science', email: 'N/A', publications: '-', rating: 4.6, subject: 'Physics', category: 'S&H' },
      // ── Chemistry ──
      { name: 'Dr. S.Rekha', designation: 'Associate Professor', qualification: 'M.Sc., M.Phil., Ph.D.', experience: 'Teaching: 14.10 Yrs.', specialization: 'Electro Chemistry', email: 'srchem@kiot.ac.in', publications: 'IJ: 06 & IC: 01 & NC: 01', rating: 5.0, image: eeeRekhaSImage, subject: 'Chemistry', category: 'S&H' },
      { name: 'Mr. M.Sivaperumal', designation: 'Assistant Professor', qualification: 'M.Sc.,B. Ed., M.Phil., MISTE.,', experience: 'Teaching :10.8 Years', specialization: 'Organic Chemistry, Nanochemistry', email: 'mschem@kiot.ac.in', publications: 'IJ:02', rating: 4.6, subject: 'Chemistry', category: 'S&H' },
      { name: 'Mr. S.Naveen Kumar', designation: 'Assistant Professor', qualification: 'B.E., M.E. (Ph.D).', experience: 'Teaching : 10.2 Years', specialization: 'Engineering Design', email: 'snmech@kiot.ac.in', publications: 'IJ: 09; IC:01', rating: 4.6, image: naveenkumarImage, subject: 'Chemistry', category: 'S&H' },
      { name: 'Dr. G.Venkatesh', designation: 'Associate Professor', qualification: 'M.Sc., M.Phil., Ph.D.', experience: '10.6 years, Research: 14.8 yrs', specialization: 'Supramolecular Nano materials', email: 'gvchem@kiot.ac.in', publications: 'IJ: 24, NJ: 04, IC: 05, NC: 14', rating: 5.0, image: aidsVenkateshImage, subject: 'Chemistry', category: 'S&H' },
      { name: 'Dr. S.Sathiya', designation: 'Assistant Professor', qualification: 'M.Sc., M.Phil.,Ph.D', experience: 'Teaching: 4,Research: 4', specialization: 'Electrochemistry', email: 'sschem@kiot.ac.in', publications: 'IJ:4,IC:05,NC:06', rating: 4.6, image: sathiyaImage, subject: 'Chemistry', category: 'S&H' },
      { name: 'Mr. J.Noorulameen', designation: 'Assistant Professor', qualification: 'B.Sc., M.Sc., M.Phil.', experience: '11.9 Years', specialization: 'Natural Products and Nano Technology', email: 'jnchem@kiot.ac.in', publications: 'IJ: 02', rating: 4.7, image: noorulAmeenImage, subject: 'Chemistry', category: 'S&H' },
      { name: 'Ms. A.Preethi', designation: 'Assistant Professor', qualification: 'B.sc., M.sc., M.Phil., B.Ed., (PhD).', experience: 'Teaching: 17 Years', specialization: 'Chemistry', email: 'preethiyasini@gmail.com', publications: 'IJ:3', rating: 4.7, image: ecePreethiImage, subject: 'Chemistry', category: 'S&H' },
      { name: 'Dr. R.Manikandan', designation: 'Associate Professor', qualification: 'M.Sc., Ph.D.', experience: 'Teaching – 5 Years', specialization: 'Chemistry Science', email: 'N/A', publications: '-', rating: 4.6, subject: 'Chemistry', category: 'S&H' },
      // ── Tamil ──
      { name: 'Dr. K.Vinodhkumar', designation: 'Associate Professor', qualification: 'B.A., M.A., B.Ed., Ph.D., NET', experience: 'Teaching : 13 Years', specialization: 'Sangam Literature', email: 'kvtamil@kiot.ac.in', publications: 'IJ: 03', rating: 4.7, image: vinothkumarKTamilImage, subject: 'Tamil', category: 'S&H' },
      { name: 'Mr. K.Vasanthakumar', designation: 'Assistant Professor', qualification: 'M.A., M.Phil.', experience: 'Teaching – 5 Years', specialization: 'Tamil Literature', email: 'N/A', publications: '-', rating: 4.6, subject: 'Tamil', category: 'S&H' },
    ],
    labs: [
      {
        name: 'Chemistry Laboratory',
        equipment: 'Calomel electrode, Flame photometer, Conductivity meter, pH meter, Potentiometer, Spectrophotometer, Distillation unit, Electronic balance, and more.',
        icon: FlaskConical,
        equipments: [
          'Calomel Electrode',
          'Digital Flame Photometer',
          'Digital Conductivity Meter with Conductivity Cell',
          'Digital pH Meter with Electrode',
          'Digital Potentiometer',
          'Digital Visible Spectrophotometer',
          'Distillation Unit',
          'Electronic Balance Top Loading',
          'Hotplate 10" × 12"',
          'Ostwald Viscometer (Glass)',
          'Platinum Electrode',
          'Quartz / Glass Cuvette',
          'Recev Stop Watch',
        ],
      },
      {
        name: 'Physics Laboratory',
        equipment: 'Spectrometer, Carey Foster\'s Meter Bridge, Ultrasonic Interferometer, Laser Kit, Band Gap Kit, Travelling Microscope, Lee\'s Disc, Torsional Pendulum.',
        icon: FlaskConical,
        equipments: [
          'Spectrometer (Qty: 10)',
          "Carey Foster's Meter Bridge (Qty: 10)",
          'Ultrasonic Interferometer (Qty: 10)',
          'Laser Kit (Qty: 10)',
          'Band Gap Kit (Qty: 10)',
          'Traveling Microscope (Qty: 10)',
          "Lee's Disc (Qty: 10)",
          'Torsional Pendulum (Qty: 10)',
        ],
      },
      {
        name: 'Communication Skills Laboratory',
        equipment: 'Interactive computer systems with specialized language learning software, audio-visual tools, and headphones for phonetic training.',
        icon: BookOpen,
        equipments: [
          'Computer Systems with Language Learning Software',
          'Audio-Visual Tools & Projector',
          'Headphones for Phonetic Training',
          'Interactive Smart Board',
          'Recording & Playback System',
        ],
      },
    ]
};
