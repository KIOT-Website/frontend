import { useState, useEffect } from 'react'
import ReactDOM from 'react-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { Quote, X, ChevronRight } from 'lucide-react'

// Assets
import studentImg from '../../assets/main/testi_student.webp'
import alumniImg from '../../assets/main/testi_alumni.webp'
import recruiterImg from '../../assets/main/testi_recruiter.webp'
import techMahindraLogo from '../../assets/main/tech mahendra.webp'
import itcLogo from '../../assets/main/itc.webp'
import tessolveLogo from '../../assets/main/tessolve.webp'
import kiotLogo from '../../assets/main/Kiot logo.webp'
import alaguvairavasundaramImg from '../../assets/alumni/alaguvairavasundaram.png'
import karthikRajaKarnanImg from '../../assets/alumni/karthik_raja_karnan.jpg'
import sharmilaImg from '../../assets/alumni/sharmila.jpg'
import aravindImg from '../../assets/alumni/Aravind_T.jpg'
import bhuvaneshwaranImg from '../../assets/alumni/Bhuvaneshwaran M.png'
import prabhuImg from '../../assets/alumni/Prabhu Sridhar.png'
import shabareeshImg from '../../assets/alumni/Shabareesh T P.png'
import sathishImg from '../../assets/alumni/Sathish R.png'
import hariharasudhanImg from '../../assets/alumni/M. Hariharasudhan.jpg'
import abiramiImg from '../../assets/alumni/T.Abirami.jpg'
import baraniImg from '../../assets/alumni/Barani R.png'
import ashwinImg from '../../assets/alumni/Mr. Ashwin Samuel P.jpg'
import adhithyaImg from '../../assets/alumni/Mr. B. Adhithya Sharmaa.jpg'
import balakrishnanImg from '../../assets/alumni/Mr. Balakrishnan S. M..jpg'
import kumaravelImg from '../../assets/alumni/Mr. Kumaravel V.png'
import pragatheeshImg from '../../assets/alumni/Mr. S. Pragatheesh.png'
import vigneshImg from '../../assets/alumni/Mr. Vignesh B.jpg'
import ajayImg from '../../assets/alumni/Mr.Ajay S P.jpg'
import chellapandiyanImg from '../../assets/alumni/Mr.Chellapandiyan M.jpg'
import sashirevathiImg from '../../assets/alumni/Mrs. Sashirevathi S. V..jpg'
import gayathriImg from '../../assets/alumni/Mrs.Gayathri P.jpg'
import ilavarasiImg from '../../assets/alumni/Ilavarasi R.jpg'
import karthickOcImg from '../../assets/alumni/Mr. Karthick O C.jpg'
import bharatwajImg from '../../assets/alumni/Mr.Bharatwaj V.jpg'
import venkateswaranImg from '../../assets/alumni/Mr.Venkateswaran D.jpg'
import deepaImg from '../../assets/alumni/Mrs. Deepa M.jpg'
import ramakrishnanImg from '../../assets/alumni/Ramakrishnan V.jpg'
import bavaniImg from '../../assets/alumni/S. Bavani.jpg'
import vijayakumarImg from '../../assets/alumni/VIJAYAKUMAR M.jpg'
const categories = ["Students", "Alumni", "Recruiters"]

const testimonialData = {
  Students: [
    {
      id: 1,
      name: "Sneha Reddy",
      dept: "Information Technology",
      quote: "The faculty support and hands-on lab sessions helped me transition from a beginner to an industry-ready developer in just four years.",
      email: "sneha.r@kiot.ac.in",
      image: studentImg,
      joined: "2021",
      expires: "2025"
    },
    {
      id: 2,
      name: "Karthik Raja",
      dept: "MCA 2025",
      quote: "Academic learning at KIOT is deeply rooted in practical application, giving us a competitive edge in every internship we pursue.",
      email: "karthik.k@kiot.ac.in",
      image: alumniImg,
      joined: "2023",
      expires: "2025"
    },
    {
      id: 3,
      name: "Priya Dharshini",
      dept: "Electrical & Electronics",
      quote: "The specialized training in embedded systems provided here gave me the confidence to excel in high-tech industrial projects.",
      email: "priya.d@kiot.ac.in",
      image: studentImg,
      joined: "2021",
      expires: "2025"
    },
    {
      id: 4,
      name: "Vijay Kumar",
      dept: "Mechanical Engineering",
      quote: "Participating in national level competitions through college clubs helped me develop leadership and teamwork skills early on.",
      email: "vijay.k@kiot.ac.in",
      image: alumniImg,
      joined: "2021",
      expires: "2025"
    }
  ],
  Alumni: [
    {
      id: 21,
      name: "Alaguvairavasundaram S",
      dept: "Lead Engineer, Stellantis India, Bengaluru (2015-2019)",
      quote: "KIOT nurtured my technical expertise through quality education and hands-on training. These experiences played a key role in helping me secure a rewarding career in a core engineering company.",
      image: alaguvairavasundaramImg
    },
    {
      id: 22,
      name: "Karthik Raja Karnan",
      dept: "CEO, MADique Technologies OPC Private Limited, Salem (2012-2016)",
      quote: "After completing my B.E. degree at KIOT, I was inspired to transform my ideas into reality by establishing my own company in Salem. The strong academic foundation, hands-on learning experiences, and continuous mentorship provided by KIOT equipped me with the confidence, technical expertise, and entrepreneurial mindset needed to successfully launch and lead my own company.",
      image: karthikRajaKarnanImg
    },
    {
      id: 23,
      name: "SHARMILA S",
      dept: "DESIGN ENGINEER, FUJITEC INDIA PRIVATE LTD, Chennai. (2019-2023)",
      quote: "KIOT provided me with a strong technical foundation, hands-on practical learning, and excellent placement support throughout my academic journey. The institution's emphasis on core engineering placements enabled me to secure a position as a Design Engineer in a leading core engineering company, laying a strong foundation for a successful and rewarding career in my chosen field",
      image: sharmilaImg
    },
    {
      id: 24,
      name: "Mr. S. Pragatheesh",
      dept: "Assistant Manager, Larsen & Toubro Construction, Lucknow (UG – 2018 Batch)",
      quote: "Mr. S. Pragatheesh, an alumnus of the 2018 UG batch, is working as an Assistant Manager at Larsen & Toubro Construction, one of India's largest multinational engineering and construction companies. He is involved in the planning and execution of major infrastructure projects, contributing to the successful delivery of high-quality construction works while upholding industry standards and best engineering practices.",
      image: pragatheeshImg
    },
    {
      id: 25,
      name: "Mr. B. Adhithya Sharmaa",
      dept: "Assistant Manager, L&T Energy Hydrocarbon, Panipat (UG – 2022 Batch)",
      quote: "Mr. B. Adhithya Sharmaa, a graduate of the 2022 UG batch, is serving as an Assistant Manager at L&T Energy Hydrocarbon, the energy business of Larsen & Toubro specializing in engineering, procurement, and construction solutions for the global oil and gas industry. He contributes to the execution of large-scale hydrocarbon and energy projects, supporting sustainable and innovative engineering solutions in the sector.",
      image: adhithyaImg
    },
    {
      id: 26,
      name: "Mr. Aravind T",
      dept: "Production Services Engineer, Apple, Hyderabad (UG – 2009-2013 Batch)",
      quote: "My journey at KIOT was instrumental in building a strong foundation in Electronics and Communication Engineering. The department provided me with excellent technical knowledge, practical exposure through laboratories and projects, and opportunities to enhance my analytical and problem-solving skills. The guidance and support from faculty members helped me develop the confidence required to adapt to the fast-paced technology industry.",
      image: aravindImg
    },
    {
      id: 27,
      name: "Mr. Bhuvaneshwaran M",
      dept: "Lead Test Engineer, Fiserv, Alpharetta, Georgia(US) (UG – 2009-2013 Batch)",
      quote: "My journey at Knowledge Institute of Technology (KIOT) played a significant role in shaping my professional career. The Department of Electronics and Communication Engineering provided me with a strong technical foundation, practical exposure, and the confidence to succeed. The guidance of the faculty, hands-on learning, and placement support helped me build a successful career as a Lead Test Engineer in the global financial technology industry.",
      image: bhuvaneshwaranImg
    },
    {
      id: 28,
      name: "Mr. Prabhu Sridhar",
      dept: "AUTOSAR Embedded Software Engineer, Continental, Singapore (UG – 2009-2013 Batch)",
      quote: "KIOT provided me with a strong technical foundation and the confidence to build a successful career in the embedded systems domain. The guidance of the faculty, industry-oriented learning, and hands-on laboratory experience helped me develop the skills required to work as an AUTOSAR Embedded Software Engineer in the global automotive industry. I am grateful to the management and faculty for their continuous support.",
      image: prabhuImg
    },
    {
      id: 29,
      name: "Mr. Shabareesh T P",
      dept: "Lead Technical Product Support, ADP India Pvt Ltd, USA (UG – 2010-2014 Batch)",
      quote: "KIOT played an important role in shaping my professional journey by providing a strong academic foundation and practical learning experience. The support of the faculty, industry-oriented training, and placement guidance helped me develop the technical expertise and confidence required to build a successful career as a Lead Technical Product Support professional in the global technology industry.",
      image: shabareeshImg
    },
    {
      id: 30,
      name: "Mr. Sathish R",
      dept: "Senior Associate, Cognizant Technology Solutions, Chennai (UG – 2010-2014 Batch)",
      quote: "KIOT provided me with a strong technical foundation and the practical knowledge required to build a successful career in the IT industry. The guidance of the faculty, hands-on laboratory experience, industry-oriented training, and placement support helped me develop the skills and confidence to excel as a Senior Associate at Cognizant Technology Solutions.",
      image: sathishImg
    },
    {
      id: 31,
      name: "Mr. M. Hariharasudhan",
      dept: "Senior Test Lead, Comcast, Chennai (UG – 2013-2017 Batch)",
      quote: "KIOT provided me with a strong foundation in engineering and helped me develop the technical and professional skills needed for my career. The supportive faculty, practical learning, and industry-oriented training played a key role in my professional growth. I am grateful to the management and faculty for their continuous guidance and encouragement.",
      image: hariharasudhanImg
    },
    {
      id: 32,
      name: "Ms. T. Abirami",
      dept: "Team Lead, Wipro Pvt Ltd, Coimbatore (UG – 2013-2017 Batch)",
      quote: "My role as a Team Lead at Wipro Pvt. Ltd. is a result of the strong technical foundation and practical exposure I gained at KIOT. The dedicated faculty, well-equipped laboratories, industry-oriented training, and placement support helped me develop the technical expertise, leadership qualities, and confidence required to excel in the IT industry.",
      image: abiramiImg
    },
    {
      id: 33,
      name: "Ms. Barani R",
      dept: "System Test Engineer, Lennox International, Chennai (UG – 2018-2022 Batch)",
      quote: "My role as a System Test Engineer at Lennox International is built on the strong technical foundation and practical learning I gained at KIOT. The ECE Department provided me with quality education, hands-on laboratory experience, industry-oriented training, and continuous guidance that helped me develop the technical expertise and confidence required in the engineering profession.",
      image: baraniImg
    },
    {
      id: 5,
      name: "Software Engineer",
      dept: "",
      quote: "KIOT transformed my journey from a student to a professional. The continuous technical training, coding practice, aptitude sessions, and placement support gave me the confidence to secure my dream career."
    },
    {
      id: 6,
      name: "Embedded Systems Engineer",
      dept: "",
      quote: "The industry-linked laboratories and practical learning environment at KIOT provided me with real-world exposure that significantly helped during interviews and in my professional career."
    },
    {
      id: 7,
      name: "Senior Software Developer",
      dept: "",
      quote: "Beyond academics, KIOT helped me build communication skills, leadership qualities, and problem-solving abilities. These experiences continue to help me grow in the corporate world."
    },
    {
      id: 8,
      name: "Design Engineer",
      dept: "",
      quote: "Faculty members always encouraged innovation and innovation-based learning. The guidance received during internships and final-year projects played a crucial role in shaping my career."
    },
    {
      id: 17,
      name: "Project Engineer",
      dept: "",
      quote: "KIOT's placement training is one of its strengths. The structured preparation in aptitude, programming, communication, and mock interviews helped me confidently face campus recruitment."
    },
    {
      id: 18,
      name: "Business Analyst",
      dept: "",
      quote: "The multidisciplinary curriculum and exposure to emerging technologies prepared me to adapt quickly to industry requirements. KIOT gave me both knowledge and confidence."
    },
    {
      id: 19,
      name: "Entrepreneur",
      dept: "",
      quote: "The innovation ecosystem, incubation support, and entrepreneurial mindset encouraged at KIOT inspired me to build my own startup. The institution nurtures creativity and practical thinking."
    },
    {
      id: 20,
      name: "Systems Engineer",
      dept: "",
      quote: "The opportunities to interact with industry experts, participate in technical clubs, and work on live projects made learning enjoyable and career-focused."
    },
    {
      id: 34,
      name: "Mrs. Gayathri P",
      dept: "Noise Shield Design Engineer, Valvo Trucks India, Bengaluru (UG – 2019-2023 Batch)",
      quote: "My journey at KIOT has been a valuable learning experience that helped me build a strong technical foundation and professional confidence. The support of the faculty, practical learning environment, and placement guidance prepared me well for my career. I am grateful to the management and faculty for their constant encouragement. I encourage students to utilize every opportunity at KIOT to enhance their knowledge, skills, and career prospects.",
      image: gayathriImg
    },
    {
      id: 35,
      name: "Mr. Chellapandiyan M",
      dept: "Senior Design Engineer, Siemens AG (Siemens Technology and Service Pvt. Ltd.), Chennai (UG – 2009-2013 Batch)",
      quote: "My journey at Knowledge Institute of Technology played a vital role in shaping my professional career in the core engineering sector. The Department of Mechanical Engineering provided strong technical knowledge, practical exposure, and confidence to face industrial challenges. The guidance and support from faculty members helped me build a successful career as a Process Engineer in the automobile manufacturing industry. I am proud to be a KIOT alumnus and thankful to the Institution for laying a strong foundation for my growth and achievements.",
      image: chellapandiyanImg
    },
    {
      id: 36,
      name: "Mr. Kumaravel V",
      dept: "Vice President, BNY Mellon Technology Pvt. Ltd., Chennai (UG – 2009-2013 Batch)",
      quote: "KIOT provided me with a strong technical foundation and the confidence to build a successful career. The guidance of the faculty, industry-focused learning, and skill development programs prepared me well for the corporate world. I am grateful to the management and faculty for their continuous support. I encourage students to make the most of the opportunities at KIOT and keep learning to achieve their career goals.",
      image: kumaravelImg
    },
    {
      id: 37,
      name: "Mr. Vignesh B",
      dept: "Aerospace Design Engineer, Airbus Group India Pvt. Ltd., Chennai (UG – 2018-2022 Batch)",
      quote: "KIOT played a vital role in shaping my career by providing a strong academic foundation and practical learning experience. The faculty's guidance, industry-oriented training, and placement support helped me build the skills and confidence required to excel in the aerospace industry. I am thankful to the management and faculty for their continuous encouragement. I encourage students to make the best use of the opportunities at KIOT and strive for excellence in their careers.",
      image: vigneshImg
    },
    {
      id: 38,
      name: "Mr. Ajay S P",
      dept: "Senior Design Engineer, Siemens Technology and Service Pvt. Ltd., Chennai (UG – 2014-2018 Batch)",
      quote: "KIOT provided me with a strong technical foundation and the practical skills needed to succeed in the automotive industry. The guidance of the faculty, hands-on learning, and career support helped me build confidence and prepare for professional challenges. I sincerely thank the management and faculty for their continuous support. I encourage students to make the most of the opportunities at KIOT and continuously enhance their knowledge and skills.",
      image: ajayImg
    },
    {
      id: 39,
      name: "Mr. Balakrishnan S. M.",
      dept: "Safety Officer, Royal Enfield, Chennai (UG – 2013-2017 Batch)",
      quote: "KIOT provided me with a strong foundation in engineering and helped me develop the technical and professional skills needed for my career. The supportive faculty, practical learning, and industry-oriented training played a key role in my professional growth. I am grateful to the management and faculty for their continuous guidance and encouragement. I encourage students to make the best use of the learning opportunities at KIOT and stay committed to achieving their career goals.",
      image: balakrishnanImg
    },
    {
      id: 40,
      name: "Mrs. Sashirevathi S. V.",
      dept: "Associate Project Engineer, Hitachi Energy, Chennai",
      quote: "My current role as an Associate Project Engineer at Hitachi Energy is the result of the strong technical education, practical exposure, and placement support I received at KIOT. The institution helped me build the confidence, technical competence, and professional skills required to excel in the global energy sector. I am grateful to KIOT for being the foundation of my successful career.",
      image: sashirevathiImg
    },
    {
      id: 41,
      name: "Mr. Ashwin Samuel P",
      dept: "Senior Staff Associate, AT&T Inc. (AT&T Global Network Services), Prague, Czech Republic",
      quote: "My current position as a Senior Staff Associate at AT&T Global Network Services reflects the strong technical education, practical exposure, and career guidance I received at KIOT. The institution equipped me with the knowledge, confidence, and professional skills required to succeed in the global telecommunications industry. I am proud to be a KIOT alumnus and grateful for the opportunities that laid the foundation for my international career.",
      image: ashwinImg
    },
    {
      id: 42,
      name: "Mr. Venkateswaran D",
      dept: "Senior Software Engineer, Honeywell Technology Solution Lab, Bangalore (UG – 2009-2013 Batch)",
      quote: "My time at KIOT has been one of the most valuable phases of my life. The Department of Computer Science and Engineering provided me with a strong academic foundation and practical exposure. The guidance of dedicated faculty members helped me build confidence and technical expertise. The learning environment encouraged innovation and problem-solving. Every experience at KIOT contributed to my professional growth. I am proud to be a part of this wonderful institution and wish it continued success in nurturing future engineers.",
      image: venkateswaranImg
    },
    {
      id: 43,
      name: "Mrs. Deepa M",
      dept: "Manager, Tata Consultancy Services, Chennai (UG – 2010-2014 Batch)",
      quote: "KIOT played a vital role in shaping my professional journey and personal growth. The supportive faculty and industry-oriented curriculum prepared me to face real-world challenges with confidence. The opportunities to participate in technical and extracurricular activities enhanced my leadership skills. The values and discipline I learned here continue to guide me in my career. I cherish the memories, friendships, and experiences I gained during my college days. I am grateful to my alma mater for its constant encouragement. I wish the institution greater heights of success in the years ahead.",
      image: deepaImg
    },
    {
      id: 44,
      name: "Mr. Bharatwaj V",
      dept: "Senior Application Developer, IBM, Bangalore (UG – 2010-2014 Batch)",
      quote: "Studying at KIOT was a transformative experience that prepared me for the ever-evolving IT industry. The department encouraged curiosity, creativity, and continuous learning throughout my academic journey. The faculty members inspired me to think beyond textbooks and apply knowledge to practical problems. The technical events and hands-on learning strengthened my confidence and skills. The education I received continues to support my professional success. I am proud to represent KIOT in the corporate world. My sincere wishes to the faculty and students for continued excellence.",
      image: bharatwajImg
    },
    {
      id: 45,
      name: "Mr. Karthick O C",
      dept: "Site Reliability Engineer, Bank of America, Chennai (UG – 2010-2014 Batch)",
      quote: "KIOT gave me the knowledge, confidence, and determination to build a successful career in technology. The department's commitment to quality education and practical learning prepared me for industry expectations. Faculty members were always approachable and motivated us to achieve our best. The collaborative learning environment encouraged teamwork and innovation. The experiences I gained continue to benefit me in my professional journey. I am thankful to my mentors and classmates for their support. I will always be proud to be a KIOT alumnus.",
      image: karthickOcImg
    },
    {
      id: 46,
      name: "Mrs. Ilavarasi R",
      dept: "Senior Analyst, Accenture, Chennai (UG – 2013-2017 Batch)",
      quote: "My journey at KIOT has been filled with meaningful learning experiences and unforgettable memories. The department provided an excellent platform to strengthen both technical and interpersonal skills. The faculty consistently encouraged us to explore new ideas and improve ourselves. The practical approach to education helped me transition smoothly into the corporate world. I am grateful for the knowledge, values, and confidence I gained during my time here. Being a KIOT alumna is a matter of pride for me. I wish the institution continued growth and success.",
      image: ilavarasiImg
    },
    {
      id: 47,
      name: "Mr. VIJAYAKUMAR M",
      dept: "Technology Analyst, Infosys, Bangalore (UG – 2013-2017 Batch)",
      quote: "KIOT has been the foundation of my professional journey and personal development. The department nurtured my technical abilities while encouraging creativity and innovation. The faculty's continuous guidance helped me build confidence and prepare for industry challenges. The academic environment motivated me to become a lifelong learner. The skills and values I acquired continue to support my career growth. I remain thankful to my teachers for their encouragement and mentorship. I am proud to be associated with KIOT and its vibrant alumni community.",
      image: vijayakumarImg
    },
    {
      id: 48,
      name: "Ms. S. Bavani",
      dept: "Senior Software Engineer, Cognizant Technology Solutions, Chennai (UG – 2011-2015 Batch)",
      quote: "The education I received at KIOT has been instrumental in shaping my career and personality. The Department of Computer Science and Engineering provided excellent learning opportunities and practical exposure. The faculty encouraged us to think independently and solve problems with confidence. The campus environment fostered teamwork, discipline, and continuous improvement. The experiences and friendships I built here remain truly memorable. I sincerely thank my mentors for their unwavering support throughout my journey. I am proud to be a KIOT alumna and wish the institution every success.",
      image: bavaniImg
    },
    {
      id: 49,
      name: "Mr. Ramakrishnan V",
      dept: "Project Manager, Wipro Technologies, Bangalore (PG – 2012-2014 Batch)",
      quote: "KIOT has been the cornerstone of my academic and professional success. The department equipped me with the technical knowledge and leadership skills needed to excel in the IT industry. The faculty members were dedicated mentors who always inspired us to achieve our goals. The emphasis on innovation and lifelong learning made a lasting impact on my career. I cherish the values and experiences I gained during my time at KIOT. It is a privilege to be part of such a prestigious institution. I wish the department and its students continued achievements and success.",
      image: ramakrishnanImg
    }
  ],
  Recruiters: [
    {
      id: 9,
      name: "Puritha Nagarajan",
      dept: "Head – Talent Acquisition, Zuci Systems, Chennai",
      quote: "KIOT students consistently demonstrate excellent professionalism, a positive attitude, and strong industry readiness. The Placement & Industry Relations team ensures seamless coordination throughout the recruitment process, making KIOT a reliable and preferred academic partner for campus hiring."
    },
    {
      id: 10,
      name: "Ramji Murthy",
      dept: "Regional Head – Academic Alliances, Tata Consultancy Services (TCS)",
      quote: "KIOT stands apart through its strong institutional values, visionary leadership, and unwavering commitment to nurturing future-ready professionals. The institution provides an excellent ecosystem that bridges academic excellence with industry expectations."
    },
    {
      id: 11,
      name: "K. Balaji",
      dept: "Vice President – Talent Acquisition, Creative Synergies Group",
      quote: "The visionary leadership, industry-driven Centres of Excellence, state-of-the-art infrastructure, and strong emphasis on communication and employability skills together create a vibrant learning ecosystem. KIOT is preparing graduates who are truly ready for the future of engineering and technology."
    },
    {
      id: 12,
      name: "Saravana Manikandan S.",
      dept: "Senior Program Manager, Intelsat",
      quote: "KIOT is an inspiring institution built upon strong core values, academic excellence, and visionary leadership. Its focus on innovation, discipline, and holistic student development equips graduates to excel in the global technology landscape."
    },
    {
      id: 13,
      name: "Prof. Dr. Goh Khang Wen",
      dept: "Pro Vice Chancellor, INTI International University, Malaysia",
      quote: "KIOT demonstrates excellence through its outstanding placement achievements, experienced faculty, student-centric curriculum, and strong industry engagement. The institution is creating globally competent graduates equipped for lifelong success."
    },
    {
      id: 14,
      name: "S. Venkatachalam Ramakrishnan",
      dept: "Head – Services, Prodapt",
      quote: "The enthusiasm, commitment, and engagement demonstrated by both students and faculty members are truly commendable. KIOT has cultivated a collaborative academic environment that encourages continuous learning, innovation, and professional growth."
    },
    {
      id: 15,
      name: "S. Shaneshkumar",
      dept: "Vice President – Engineering, HCLTech",
      quote: "KIOT reflects energetic leadership, strategic vision, and a strong commitment to continuous improvement. The institution's industry-focused approach and emphasis on emerging technologies prepare students to thrive in a rapidly evolving global workforce."
    },
    {
      id: 16,
      name: "Dinesh Kumar T.K.",
      dept: "Head – Human Resources, Aspire Systems",
      quote: "KIOT students possess sound technical knowledge, practical problem-solving abilities, and a strong willingness to learn. Their industry exposure, professional attitude, and adaptability enable them to contribute effectively from the very beginning of their careers."
    }
  ]
}

export const TestimonialCard = ({ testi, isTextOnly }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const isLongQuote = testi.quote && testi.quote.length > 95;

  return (
    <>
      <div 
        className="relative w-[270px] sm:w-[285px] h-[340px] bg-white rounded-[1.25rem] shadow-[0_15px_35px_rgba(34,66,146,0.08)] border border-slate-200/80 overflow-hidden flex flex-col transition-all duration-300 hover:shadow-2xl hover:scale-[1.02] group shrink-0"
      >
        {/* Top Header Banner */}
        <div className="relative h-14 bg-[#224292] overflow-hidden shrink-0">
          <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(255,255,255,0.1),transparent)]" />
          <div className="absolute top-0 right-0 w-1/2 h-full bg-[#ffc107] skew-x-[-30deg] translate-x-12 opacity-90" />
        </div>

        {/* Profile Avatar */}
        <div className="flex justify-center -mt-9 relative z-10 shrink-0">
          <div className="w-16 h-16 rounded-full p-0.5 bg-white shadow-md">
            <div className="w-full h-full rounded-full overflow-hidden bg-slate-100 border-2 border-white shadow-inner flex items-center justify-center">
              {testi.image ? (
                <img src={testi.image} alt={testi.name} className="w-full h-full object-cover" />
              ) : (
                <span className="text-xl font-black font-graphik text-[#224292]">
                  {testi.name ? testi.name.charAt(0).toUpperCase() : 'K'}
                </span>
              )}
            </div>
          </div>
        </div>

        {/* Name Section */}
        <div className="text-center px-3 mt-1 shrink-0 h-[38px] flex items-center justify-center">
          <h4 className="text-[13.5px] font-black font-graphik text-[#224292] leading-tight line-clamp-2">
            {testi.name}
          </h4>
        </div>

        {/* Designation / Department Section */}
        <div className="text-center px-3 shrink-0 h-[34px] flex items-center justify-center">
          {testi.dept ? (
            <p className="text-[10px] font-bold text-slate-500 uppercase tracking-[0.02em] leading-tight line-clamp-2">
              {testi.dept}
            </p>
          ) : (
            <span className="text-[10px] font-bold text-[#ffc107] uppercase tracking-wider">KIOT Alumnus</span>
          )}
        </div>

        {/* Quote Container (Fixed height & flex structure) */}
        <div className="flex-1 flex flex-col px-3.5 mb-3 mt-1">
          <div className="p-2.5 bg-[#224292]/[0.03] rounded-xl border border-[#224292]/10 h-full flex flex-col justify-between relative group-hover:bg-[#224292]/[0.06] transition-colors">
            <p className="text-[11.5px] font-semibold text-slate-700 italic leading-snug line-clamp-3 text-center">
              "{testi.quote}"
            </p>

            {isLongQuote ? (
              <button
                onClick={() => setIsModalOpen(true)}
                className="mt-1 text-[10.5px] font-black text-[#224292] hover:text-[#d4a017] flex items-center justify-center gap-1 transition-colors self-center bg-white/90 px-3 py-0.5 rounded-full border border-[#224292]/15 shadow-sm hover:border-[#ffc107]"
              >
                <span>Read More</span>
                <ChevronRight size={11} />
              </button>
            ) : (
              <div className="h-4" />
            )}
          </div>
        </div>

        {/* Bottom Accent Decor */}
        <div className="absolute bottom-0 right-0 w-10 h-10 bg-[#224292] skew-x-[-45deg] translate-x-5 translate-y-5 z-0 shrink-0 opacity-80" />
      </div>

      {/* READ MORE POPUP MODAL (Portal to document.body to break out of CSS transform/marquee container) */}
      {typeof document !== 'undefined' && ReactDOM.createPortal(
        <AnimatePresence>
          {isModalOpen && (
            <div 
              className="fixed inset-0 z-[99999] bg-black/60 backdrop-blur-md flex items-center justify-center p-4"
              onClick={() => setIsModalOpen(false)}
            >
              <motion.div
                initial={{ scale: 0.9, opacity: 0, y: 20 }}
                animate={{ scale: 1, opacity: 1, y: 0 }}
                exit={{ scale: 0.9, opacity: 0, y: 20 }}
                onClick={(e) => e.stopPropagation()}
                className="bg-white max-w-lg w-full rounded-3xl shadow-2xl overflow-hidden relative border border-slate-100 flex flex-col"
              >
                {/* Modal Top Header */}
                <div className="bg-[#224292] p-6 text-white relative overflow-hidden">
                  {/* Close Button */}
                  <button
                    onClick={() => setIsModalOpen(false)}
                    className="absolute top-4 right-4 z-20 w-8 h-8 rounded-full bg-white/20 hover:bg-white/30 text-white flex items-center justify-center transition-colors"
                    aria-label="Close modal"
                  >
                    <X size={18} />
                  </button>

                  <div className="flex items-center gap-4 relative z-10 pr-8">
                    <div className="w-16 h-16 rounded-full p-0.5 bg-white shadow-md shrink-0">
                      <div className="w-full h-full rounded-full overflow-hidden bg-slate-100 flex items-center justify-center">
                        {testi.image ? (
                          <img src={testi.image} alt={testi.name} className="w-full h-full object-cover" />
                        ) : (
                          <span className="text-xl font-black text-[#224292]">
                            {testi.name ? testi.name.charAt(0).toUpperCase() : 'K'}
                          </span>
                        )}
                      </div>
                    </div>
                    <div>
                      <h3 className="text-lg font-black text-white leading-snug">
                        {testi.name}
                      </h3>
                      {testi.dept && (
                        <p className="text-xs text-slate-200 font-semibold mt-1 leading-normal">
                          {testi.dept}
                        </p>
                      )}
                    </div>
                  </div>
                </div>

                {/* Modal Content Body */}
                <div className="p-6 sm:p-8 space-y-4 max-h-[60vh] overflow-y-auto">
                  <div className="flex items-center gap-2 text-[#224292]">
                    <Quote size={24} className="text-[#ffc107] rotate-180 shrink-0" />
                    <span className="text-xs font-black uppercase tracking-widest text-[#224292]">Success Story & Experience</span>
                  </div>

                  <p className="text-slate-800 text-sm sm:text-[15px] font-medium leading-relaxed text-justify whitespace-pre-line italic">
                    "{testi.quote}"
                  </p>
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>,
        document.body
      )}
    </>
  );
};

const Testimonials = () => {
  const [activeTab, setActiveTab] = useState("Students")
  const [activeCardIndex, setActiveCardIndex] = useState(0)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768)
    }
    handleResize()
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  useEffect(() => {
    setActiveCardIndex(0)
  }, [activeTab])

  useEffect(() => {
    if (isMobile) {
      const timer = setTimeout(() => {
        setActiveCardIndex((prevIndex) => {
          const listLength = testimonialData[activeTab].length
          return (prevIndex + 1) % listLength
        })
      }, 4000)
      return () => clearTimeout(timer)
    } else {
      // Desktop: Switch tab after one full marquee scroll.
      // We set the animation speed to 8 seconds per card, so wait (length * 8000) ms.
      const listLength = testimonialData[activeTab].length
      const timer = setTimeout(() => {
        setActiveTab((prevTab) => {
          const currentIndex = categories.indexOf(prevTab)
          const nextIndex = (currentIndex + 1) % categories.length
          return categories[nextIndex]
        })
      }, listLength * 8000)
      return () => clearTimeout(timer)
    }
  }, [activeTab, activeCardIndex, isMobile])

  return (
    <section className="relative py-8 lg:py-12 bg-[#FCFDFD] overflow-hidden">
      
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#224292]/5 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-10">
        
        {/* Section Header */}
        <div className="text-center mb-8 lg:mb-10">
           <h2 className="text-3xl lg:text-5xl font-semibold text-[#224292] font-graphik">
             Success Stories & <span className="text-[#ffc107]">Experiences</span>
           </h2>
        </div>

        {/* CATEGORY TABS */}
        <div className="flex justify-center mb-10 lg:mb-12">
           <div className="flex flex-col md:flex-row bg-[#224292]/5 p-2 md:p-1.5 rounded-2xl border border-[#D5E2F4]/40 w-full max-w-[280px] md:w-fit md:max-w-full space-y-1 md:space-y-0 overflow-x-auto scrollbar-hide">
              {categories.map((cat) => {
                const isActive = activeTab === cat;
                return (
                  <button
                    key={cat}
                    onClick={() => setActiveTab(cat)}
                    className={`relative w-full md:w-auto py-3.5 md:py-3 px-8 sm:px-12 text-xs sm:text-sm font-extrabold normal-case tracking-wider transition-all rounded-xl whitespace-nowrap text-center ${
                      isActive 
                        ? 'bg-[#224292] text-white md:bg-transparent md:text-[#224292] shadow-md md:shadow-none' 
                        : 'text-[#224292] md:text-[#64779F] hover:text-[#224292] bg-transparent'
                    }`}
                  >
                    {cat}
                    {isActive && (
                      <motion.div 
                        layoutId="activeTestiTab" 
                        className="hidden md:block absolute inset-0 bg-white shadow-lg -z-10 rounded-xl border border-[#224292]/5" 
                        transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                      />
                    )}
                  </button>
                )
              })}
           </div>
        </div>

        {/* TESTIMONIAL DISPLAY (MARQUEE OR MOBILE SLIDER) */}
        <div className="relative w-full overflow-hidden py-4">
          {isMobile ? (
            <div className="flex flex-col items-center gap-4">
              <div className="relative w-full max-w-[285px] mx-auto min-h-[340px] flex items-center justify-center">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={`${activeTab}-${activeCardIndex}`}
                    initial={{ opacity: 0, x: 80 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -80 }}
                    transition={{ duration: 0.4, ease: "easeInOut" }}
                    className="w-full"
                  >
                    <TestimonialCard testi={testimonialData[activeTab][activeCardIndex]} isTextOnly={activeTab === 'Recruiters'} />
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>
          ) : (
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className="flex"
              >
                 {/* Infinite Running Track */}
                 <div 
                    className="animate-marquee gap-8 py-2 hover:[animation-play-state:paused]"
                    style={{ animationDuration: `${testimonialData[activeTab].length * 8}s` }}
                 >
                    {/* Set 1 */}
                    {testimonialData[activeTab].map((testi) => (
                      <div
                        key={`set1-${testi.id}`}
                        className="shrink-0 py-2 flex justify-center"
                      >
                         <TestimonialCard testi={testi} isTextOnly={activeTab === 'Recruiters'} />
                      </div>
                    ))}
                    {/* Set 2 */}
                    {testimonialData[activeTab].map((testi) => (
                      <div
                        key={`set2-${testi.id}`}
                        className="shrink-0 py-2 flex justify-center"
                      >
                         <TestimonialCard testi={testi} isTextOnly={activeTab === 'Recruiters'} />
                      </div>
                    ))}
                 </div>
              </motion.div>
            </AnimatePresence>
          )}
        </div>

      </div>
    </section>
  )
}

export default Testimonials
export { testimonialData }
