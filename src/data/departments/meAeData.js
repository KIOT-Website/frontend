import { Car, Cpu, Terminal, Settings, Building2 } from 'lucide-react'
import eceShanmugaSundaramImage from '../../assets/Faculity/ECE/Dr. P. Shanmuga Sundaram.webp'
import eceArunImage from '../../assets/Faculity/ECE/Mr. A. Arun.webp'

export const meAeData = {
  name: 'M.E Automotive Electronics',
    short: 'M.E AE',
    duration: '2 Years (4 Semesters)',
    intake: 18,
    affiliation: 'Anna University',
    accreditation: 'Postgraduate Program',
    placement: '92%',
    avgPackage: '5.5 LPA',
    topPackage: '15 LPA',
    icon: Car,
    color: '#18357a',
    tagline: 'Driving Innovation in Vehicle Intelligence.',
    overview: [
      'The M.E. Automotive Electronics program is a two-year postgraduate course designed to equip students with advanced knowledge and practical skills in modern automotive technologies. The curriculum emphasizes the design, analysis, development, and optimization of automotive systems, integrating mechanical engineering principles with emerging technologies such as electric mobility, intelligent transportation systems, autonomous driving, connected vehicles, and automotive electronics.',
      'Students gain expertise in vehicle dynamics, powertrain systems, electric and hybrid vehicles, automotive safety, manufacturing technologies, embedded control systems, and computer-aided engineering (CAE). The program also provides hands-on experience through laboratory work, simulation tools, industry-oriented projects, internships, and research activities, preparing graduates to address the evolving challenges of the automotive sector.',
      'Graduates are well-prepared for careers in automotive design, research and development, vehicle testing, manufacturing, quality assurance, and mobility innovation, as well as for higher research and doctoral studies.'
    ],
    whyChoose: [
      'Focus on Electric Vehicles (EVs), Hybrid Vehicles, Autonomous and Connected Vehicles.',
      'Connected & Smart Mobility Technologies including IoT, V2X communication, and intelligent transportation.',
      'Highly qualified faculty with postgraduate and doctoral specializations.'
    ],
    curriculum: [{ year: 'Year 1', semesters: ['Automotive Embedded Systems', 'Vehicle Dynamics', 'Sensor Technology'] }],
    faculty: [
      {
        name: 'Dr. P. Shanmuga Sundaram',
        designation: 'Associate Professor & Director - Outreach and Admissions (OA)',
        joiningDate: '02.06.2010',
        qualification: 'B.E., M.E., (Ph.D)',
        association: 'Regular',
        experience: 'Teaching: 17 Yrs Research: 8.0Yrs Industry 6 Yrs',
        specialization: 'Medical Image Processing',
        email: 'psece@kiot.ac.in',
        publications: 'IJ: 8 NJ: 1 IC: 8 NC 18',
        image: eceShanmugaSundaramImage
      },
      {
        name: 'Mr. A. Arun',
        designation: 'Assistant Professor',
        joiningDate: '11.06.2018',
        qualification: 'B.E., M.E., (Ph.D)',
        association: 'Regular',
        experience: 'Teaching: 12 Years Research: 4 Years',
        specialization: 'Image Processing., Analog Electronics',
        email: 'aaece@kiot.ac.in',
        publications: 'IJ: 08 IC: 09 NC: 08',
        image: eceArunImage
      }
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
        name: 'Automotive Embedded Hardware Design Laboratory',
        equipments: ['ARM Trainer Boards (STM32)', 'Standalone desktops PC', 'STM CUBE IDE'],
        incharge: 'Mr.V.Vimalraj, AP/ECE',
        icon: Cpu
      },
      {
        name: 'Embedded C Programming Laboratory',
        equipments: ['Standalone desktops PC', 'Keil µVision 4'],
        incharge: 'Mr.A.Silambarasan, AP/ECE',
        icon: Terminal
      },
      {
        name: 'Testing and Simulations of Automotive ECUs Laboratory',
        equipments: ['Standalone desktops PC', 'TS Master'],
        incharge: 'Mr. M. Chandraman, AP/ECE',
        icon: Settings
      }
    ],
    placementStats: { placed: '92%', avg: '5.5 LPA', top: '15 LPA', companies: '25+' },
};
