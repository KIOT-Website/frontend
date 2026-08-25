import { Cpu, Building2 } from 'lucide-react'
import meSeVKumarImage from '../../assets/Faculity/cse/Dr.V.KUMAR.webp'
import meSeASekarImage from '../../assets/Faculity/cse/Mr.A.SEKAR.webp'

export const meSeData = {
  name: 'M.E Software Engineering',
    short: 'M.E SE',
    vision: 'To develop Software Engineers and skilled professionals who can meet evolving industry demands and global challenges along with strong social values.',
    mission: 'M1: To empower aspiring software engineers with a comprehensive education, fostering innovation, critical thinking, and ethical leadership to drive technological advancements.\nM2: To cultivate a diverse community of software engineers equipped with technical expertise, problem-solving abilities, and a commitment to creating impactful solutions that positively transform industries and communities.\nM3: To prepare skilled graduates embracing lifelong learning and adaptability that are aligned with Sustainable Development Goals.',
    peo: 'The Program Educational Objectives (PEOs) of the M.E. Software Engineering program represent major accomplishments that the graduates are expected to achieve after graduation. The Graduates of M.E. Software Engineering will be able to:\n\nPEO-1: Identify the requirements and implement reliable, innovative and appropriate software solutions for the industrial need\n\nPEO-2: Analyze and evaluate problems critically using the theoretical and technical knowledge to develop sustainable solutions and systems\n\nPEO-3: Enhance skills through lifelong learning as software professionals to progress in managerial and leadership roles.',
    po: 'Engineering Graduates will be able to:\n\nPO-1: An ability to independently carry out research / investigation and development work to solve practical problems.\n\nPO-2: An ability to write and present a substantial technical report/document.\n\nPO-3: Students should be able to demonstrate a degree of mastery over the area of Software Engineering.\n\nPO-4: Collect requirements from the stakeholders and design software engineering applications with deep understanding of best software principles and practices.\n\nPO-5: Apply software testing techniques to produce error free and reliable software and ensure Quality.\n\nPO-6: Manage software project with state of the art approaches to ensure balance in all project areas like time, cost, quality, risk and human resource.',
    duration: '2 Years (4 Semesters)',
    intake: 18,
    affiliation: 'Anna University',
    accreditation: 'Postgraduate Program',
    placement: '93%',
    avgPackage: '5.8 LPA',
    topPackage: '18 LPA',
    icon: Cpu,
    color: '#18357a',
    tagline: 'Architecting Scalable Software Solutions.',
    overview: [
      "The M.E. Software Engineering programme is a postgraduate course that provides advanced knowledge and skills in software development and engineering. The programme focuses on the design, development, testing, deployment, and maintenance of software systems to meet the demands of modern industries. Students gain expertise in software architecture, software testing and quality assurance, database technologies, advanced data structures and algorithms, and research methodologies. The curriculum combines theoretical concepts with practical learning through laboratory sessions, seminars, case studies, and project-based activities.",
      "The programme encourages innovation, critical thinking, problem-solving, teamwork, and professional ethics. Students are introduced to emerging technologies and modern software development practices, enabling them to adapt to the evolving technological landscape. Graduates are well prepared for careers as Software Engineers, Software Architects, Quality Assurance Engineers, Project Managers, Researchers, and Academicians. The programme also provides a strong foundation for higher studies and research, supporting the department’s vision of developing skilled professionals who contribute effectively to industry, academia, and society."
    ],
    whyChoose: ['Advanced software architecture', 'DevOps & Cloud focus', 'Industry-aligned projects'],
    curriculum: [{ year: 'Year 1', semesters: ['Software Architecture', 'Agile Methodologies', 'Advanced Databases'] }],
    faculty: [
      {
        name: 'Dr. Kumar V',
        vidwanId: '242498',
        designation: 'Professor & Director IM',
        doj: '04.06.2010',
        qualification: 'B.E., M.E., Ph.D., MISTE., MIEEE.',
        association: 'Regular',
        experience: 'Teaching: 22.9, Research: 19',
        specialization: 'Computer Networks',
        email: 'directorim@kiot.ac.in',
        publications: 'IJ:14, IC:07, NC:03',
        rating: 4.9,
        image: meSeVKumarImage
      },
      {
        name: 'Mr. Sekar A',
        vidwanId: '320611',
        designation: 'Assistant Professor',
        doj: '11.07.2016',
        qualification: 'B.E., M.E.',
        association: 'Regular',
        experience: 'Teaching: 13, Industry: 1.8, Research: 2',
        specialization: 'Mobile Computing, WSN',
        email: 'ascse@kiot.ac.in',
        publications: 'IJ:1, IC:2, NC:1',
        rating: 4.7,
        image: meSeASekarImage
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
      {
        name: 'Python Programming & Java Lab (CC 1)',
        equipments: [
          'System Configuration: i7 Processor, 16 GB RAM, 512 GB SSD - 70 PC\'s',
          'No. of Systems Available: 72',
          'Software Used: Code::Blocks, Visual Studio Code, Figma, node.js'
        ],
        icon: Cpu,
        incharge: 'Mr. M K Sampath',
        technician: 'Mr. R. Sabarish'
      },
      {
        name: 'Networking Lab (CC 5)',
        equipments: [
          'System Configuration: i7 Processor, 8 GB RAM, 512 GB SSD - 24 PC\'s / DC Processor, 8 GB RAM, 500 GB HDD - 16 PC\'s',
          'No. of Systems Available: 40',
          'Software Used: Oracle DB 12, MYSQL, SQL Server, Eclipse, Java 8, Apache Jmeter, MySQL Workbench, Dbeaver, Maven'
        ],
        icon: Cpu,
        incharge: 'Mr. C. Siva',
        technician: 'Mr. R. Mohanraj'
      },
      {
        name: 'Mobile Application Development Lab (CC 7)',
        equipments: [
          'System Configuration: i7 Processor, 8 GB RAM, 512 GB SSD - 40 PC\'s',
          'No. of Systems Available: 40',
          'Software Used: Eclipse, Jira, Java 8, Maven, Jenkins'
        ],
        icon: Cpu,
        incharge: 'Mrs. G. Pavithra',
        technician: 'Mrs. N. Nathiya'
      },
      {
        name: 'Software Development Lab (CC 8)',
        equipments: [
          'System Configuration: i7 Processor, 16 GB RAM, 512 GB SSD - 40 PC\'s',
          'No. of Systems Available: 40',
          'Software Used: Visual Studio Code, JDK 8, Maven'
        ],
        icon: Cpu,
        incharge: 'Mr. K. Boopathi',
        technician: 'Mr. P. Prasanth'
      },
      {
        name: 'Computer Practices Lab (CC 11)',
        equipments: [
          'System Configuration: i7 Processor, 16 GB RAM, 512 GB SSD - 40 PC\'s',
          'No. of Systems Available: 40',
          'Software Used: Microsoft Visual Studio (.NET Framework, .NET Core, .NET 5+)'
        ],
        icon: Cpu,
        incharge: 'Mr. G. Babu',
        technician: 'Mr. K. Sathyaraj'
      },
      {
        name: 'Data Structures Lab (CC 12)',
        equipments: [
          'System Configuration: 500 GB HDD - 20 PC\'s, DC Processor, 4 GB RAM',
          'No. of Systems Available: 40',
          'Software Used: Rational Rose, ArgoUML, Visual Studio Code, Code::Blocks'
        ],
        icon: Cpu,
        incharge: 'Mr. T. Palaniraja',
        technician: 'Mr. K. Sathyaraj'
      },
      {
        name: 'Intel Intelligent System Lab (IoT)',
        equipments: [
          'System Configuration: i5 Processor, 8 GB RAM, 500 GB HDD - 30 PC\'s',
          'No. of Systems Available: 30',
          'Software Used: Visual Studio Code, Maven, Jenkins, Docker, Kubernetes'
        ],
        icon: Cpu,
        incharge: 'Mr. R. Sivaguru',
        technician: 'Mr. M. Balakrishnan'
      },
      {
        name: 'Data Analytics Lab (PG Lab)',
        equipments: [
          'System Configuration: DC Processor, 8 GB RAM, 512 GB SSD - 25 PC\'s',
          'No. of Systems Available: 24',
          'Software Used: Microsoft Visual Studio, IBM Rational suite, GitLab, Visual Studio Code, Maven, Jenkins, Docker, Kubernetes, Eclipse, Java 8, Maven, Allure, Jenkins, AutoIt, SciTE'
        ],
        icon: Cpu,
        incharge: 'Mr. R. Sivaguru',
        technician: 'Mr. M. Balakrishnan'
      },
      {
        name: 'Language Laboratory (CC 2)',
        equipments: [
          'System Configuration: i7 Processor, 16 GB RAM, 512 GB SSD - 70 PC\'s',
          'No. of Systems Available: 72',
          'Software Used: English Globarena'
        ],
        icon: Cpu,
        incharge: 'Mr. Anandakumar',
        technician: 'Mr. R. Udhayaprakash'
      }
    ],
    placementStats: { placed: '93%', avg: '5.8 LPA', top: '18 LPA', companies: '40+' },
};
