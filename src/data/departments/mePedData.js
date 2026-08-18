import { Zap, Building2 } from 'lucide-react'
import eeeKamatchiKannanImage from '../../assets/Faculity/eee/kamatchi_kannan.webp'
import eeeMurthyImage from '../../assets/Faculity/eee/murthy.webp'

export const mePedData = {
    name: 'M.E Power Electronics and Drives',
    short: 'M.E PED',
    duration: '2 Years (4 Semesters)',
    intake: 18,
    affiliation: 'Anna University',
    accreditation: 'Postgraduate Program',
    placement: '91%',
    avgPackage: '5.0 LPA',
    topPackage: '14 LPA',
    icon: Zap,
    color: '#18357a',
    tagline: 'Efficient Energy Conversion for the Future.',
    overview: [
      'The Master of Engineering (M.E.) in Power Electronics and Drives at Knowledge Institute of Technology (KIOT) is a specialized postgraduate program designed to meet the growing global demand for advanced energy conversion, electric mobility, and smart power management technologies. Offered by the NBA-accredited Department of Electrical and Electronics Engineering (EEE)—a recognized Anna University Research Centre—the program bridges deep theoretical knowledge with  industrial applications.',
      'Engineered to prepare students for high-impact roles in research, design, and development, the curriculum focuses heavily on high-efficiency power converters, smart grid architectures, and motor drive controls. Driven by Outcome-Based Education (OBE) and project-led learning, students gain hands-on expertise to solve real-world engineering challenges.'
    ],
    whyChoose: ['Renewable energy focus', 'Electric Drives specialization', 'Modern power labs'],
    curriculum: [{ year: 'Year 1', semesters: ['Analysis of Electrical Machines', 'Power Converters', 'Solid State Drives'] }],
    faculty: [
      { name: 'Dr. Kamatchi Kannan V', designation: 'Professor & HOD', qualification: 'B.E. (EEE)., M.E., (PED)., PhD. (EE)', specialization: 'Power Electronics and Drives', phone: '9944374946', email: 'hod.eee@kiot.ac.in', association: 'Regular', image: eeeKamatchiKannanImage },
      { name: 'Mr. Murthy S E', designation: 'Assistant Professor', qualification: 'B.E. (EEE)., M.E. (PED)', specialization: 'Power Electronics & Drives', phone: '9790556454', email: 'semeee@kiot.ac.in', association: 'Regular', image: eeeMurthyImage, imageStyle: { transform: 'translateY(15px)' } }
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
{ name: 'Power Electronics Lab', equipment: 'Inverters, Speed Control Drives', icon: Zap }],
    placementStats: { placed: '91%', avg: '5.0 LPA', top: '14 LPA', companies: '20+' },
};
