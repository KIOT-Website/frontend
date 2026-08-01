import { Cpu, BookOpen, Building2 } from 'lucide-react'
import mcaMohanapriyaImage from '../../assets/Faculity/mca/Dr. S. Mohanapriya.webp';
import mcaNethajiImage from '../../assets/Faculity/mca/Dr.V.Nethaji.webp';
import mcaKarimullaImage from '../../assets/Faculity/mca/Mr.K.Karimulla Sheriff.webp';
import mcaSowndaryaImage from '../../assets/Faculity/mca/Mrs.G.Sowndarya.webp';

export const mcaData = {
  name: 'Master of Computer Applications',
    short: 'MCA',
    duration: '2 Years (4 Semesters)',
    intake: 60,
    affiliation: 'Anna University',
    accreditation: 'Postgraduate Program',
    placement: '90%',
    avgPackage: '4.5 LPA',
    topPackage: '12 LPA',
    icon: BookOpen,
    color: '#224292',
    tagline: 'Fostering Excellence in Computer Applications.',
    overview: [
      "The Department of Master of Computer Applications (MCA) at the Knowledge Institute of Technology (KIOT) was established to prepare next-generation software professionals, developers, and system analysts. The postgraduate curriculum is aligned with contemporary industry needs, covering topics from full-stack development, Advanced Database Management Systems, Data Analytics and Artificial Intelligence.",
      "Through hands-on projects, industry workshops, and professional training in advanced computing labs, MCA students gain the expertise and confidence required to excel in the global IT sectors."
    ],
    vision: "To be a state-of-the-art Department of Computer Applications that produces competent professionals with social, ethical, and environmental values.",
    mission: "Provide advanced postgraduate education in Computer Applications integrating emerging technologies and best industry practices.\nCultivate professional ethics, leadership qualities and lifelong learning commitment.\nEmpower students for successful careers and entrepreneurship through comprehensive skill and personality development.\nFoster innovation, research aptitude and problem-solving through academic–industry collaboration.",
    peo: "PEO 1: Develop professional expertise in advanced computer applications and software development to solve complex computational and industrial problems.\n\nPEO 2: Cultivate analytical thinking, research aptitude and lifelong learning for leadership roles and higher education.\n\nPEO 3: Encourage ethical practices, innovation and entrepreneurship to design sustainable computing solutions addressing societal and industrial needs.",
    po: "MCA Graduates will be able to:\n\nPO1: Foundation Knowledge: Apply knowledge of mathematics, programming logic and coding fundamentals for ability to Computer Applications.\n\nPO2: Problem Analysis: Identify, formulate and analysis problems based on customer requirements.\n\nPO3: Development of Solutions: Design and develop efficient computer solutions and algorithms.\n\nPO4: Modern Tool Usage: Select, adapt and apply modern computational tools for application development.\n\nPO5: Project Management and Finance: Ability to understand and apply the concepts of Project Management and finance.\n\nPO6: Communication and Presentation: Ability to make effective presentations and prepare reports and documents.\n\nPO7: Individual and Teamwork: Ability to perform as an individual and as a members of a team.\n\nPO8: Ethics: Commit to professional ethics, environment and sustainable practices in managing software projects.\n\nPO9: Life-long learning: Ability to learn, keep up with contemporary technologies and ways of working continuously.",
    whyChoose: [
      'Hands-on full-stack development training',
      'Advanced computing lab with high-speed internet',
      'Strong internship and placement opportunities',
      'Mentoring from industry-certified trainers',
      'Industry-Aligned Curriculum with AI, DevOps, and Data Analytics'
    ],
    curriculum: [
      { year: 'Year 1 – Advanced Software Engineering', semesters: ['Advanced Data Structures', 'Database Management Systems', 'Java Programming', 'Operating Systems', 'Web Application Development Lab', 'Software Architecture'] },
      { year: 'Year 2 – Emerging Tech & Capstone', semesters: ['Cloud Computing', 'Mobile Application Development', 'Big Data Analytics', 'Information Security', 'Comprehensive Project / Internship', 'Professional Seminar'] }
    ],
    faculty: [
      { 
        name: 'Dr. S. Mohanapriya', 
        designation: 'Professor & Head', 
        qualification: 'MCA., Ph.D.', 
        specialization: 'Computer Applications', 
        email: 'hod.mca@kiot.ac.in', 
        experience: '18 Years', 
        rating: 5.0,
        image: mcaMohanapriyaImage
      },
      { 
        name: 'Dr. V. Nethaji', 
        designation: 'Assistant Professor', 
        qualification: 'MCA., Ph.D.', 
        specialization: 'Computer Applications', 
        email: 'vne.mca@kiot.ac.in', 
        experience: '10 Years', 
        rating: 4.8,
        image: mcaNethajiImage
      },
      { 
        name: 'Mr. K. Karimulla Sheriff', 
        designation: 'Assistant Professor', 
        qualification: 'MCA.', 
        specialization: 'Computer Applications', 
        email: 'kks.mca@kiot.ac.in', 
        experience: '8 Years', 
        rating: 4.7,
        image: mcaKarimullaImage
      },
      { 
        name: 'Mrs. G. Sowndarya', 
        designation: 'Assistant Professor', 
        qualification: 'MCA.', 
        specialization: 'Computer Applications', 
        email: 'gso.mca@kiot.ac.in', 
        experience: '6 Years', 
        rating: 4.6,
        image: mcaSowndaryaImage
      }
    ],
    labs: [
      {
        name: 'Industrial Linked Laboratories / COEs',
        equipments: [
          'Agile Testing & Automation - Expleo Solutions',
          'Agile Methodology with DevOps Program - L&T EduTech',
          'Cyber Security - K7 Computing',
          'Data Driven AI Solutions - PUNCHBIZ',
          'Front End Development - UI/UX Technologies - Tech Mahindra',
          'Full Stack Development & Automation - HCL Technologies',
          'Low-Code Application Development-Mendix Platform - MxTechies',
          'Networking and Cloud - Arche Global',
          'ServiceNow and Salesforce - SmartBridge',
          'SQL and JAVA Certification: Oracle Academy - Oracle',
          'Programming & Tech Skill Acceleration - GUVI – An HCL Initiative',
          'Programming with Core Java - SmartCliff',
          'SEGUE Program - Hexaware Technologies',
          'Software Technology – Java & Dot Net - Aspire Systems',
          'CRM and HRM - ZOHO',
          'Japanese Language Centre - iTokyo'
        ],
        icon: Building2
      },

      { name: 'Advanced Software Development Lab', equipment: 'High-performance workstations with modern development frameworks and servers', icon: Cpu }
    ],
    placementStats: { placed: '90%', avg: '4.5 LPA', top: '12 LPA', companies: '30+' }
};
