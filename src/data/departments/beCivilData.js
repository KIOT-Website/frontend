import { Wrench, Layers, Building2, Compass, Droplets, FlaskConical, Monitor } from 'lucide-react'
import sathishKumarImage from '../../assets/Faculity/civil/B.SATHISH KUMAR.webp'
import prasathImage from '../../assets/Faculity/civil/Dr.P.PRASATH.webp'
import krishnanImage from '../../assets/Faculity/civil/L.KRISHNAN.webp'
import nirmalImage from '../../assets/Faculity/civil/L.M.NIRMAL.webp'
import selvakumarImage from '../../assets/Faculity/civil/P.SELVAKUMAR.webp'
import elavarasanImage from '../../assets/Faculity/civil/R.ELAVARASAN.webp'
import arulkesavanImage from '../../assets/Faculity/civil/S.ARULKESAVAN.webp'
import kaalijoothiImage from '../../assets/Faculity/civil/S.J.KAALIJOOTHI.webp'
import rajeshkumarImage from '../../assets/Faculity/civil/S.RAJESHKUMAR.webp'
import sasikumarImage from '../../assets/Faculity/civil/S.SASI KUMAR.webp'
import senthilkumarImage from '../../assets/Faculity/civil/S.SENTHIL KUMAR.webp'
import balamuruganImage from '../../assets/Faculity/civil/U.BALAMURUGAN.webp'

export const beCivilData = {
  name: 'B.E Civil Engineering',
    short: 'Civil Engineering',
    bannerImage: '/banners/civil_banner.png',
    duration: '4 Years (8 Semesters)',
    intake: 60,
    affiliation: 'Anna University',
    accreditation: 'Undergraduate Program',
    placement: '88%',
    avgPackage: '3.8 LPA',
    topPackage: '10 LPA',
    icon: Layers,
    color: '#18357a',
    tagline: 'Constructing Sustainable Future.',
    overview: [
      "The Department of Civil Engineering at the Knowledge Institute of Technology (KIOT), established in 2010–11, is committed to developing competent engineers capable of contributing to a sustainable built environment. The department focuses on delivering strong technical knowledge and industrial exposure through various Department Industrial Vertical (DIV) courses that are designed by leading construction companies. Alongside technical expertise, equal emphasis is placed on building interpersonal and professional skills to prepare students for the demands of a fast-paced global environment. Students are encouraged to undergo industrial training and actively participate in co-curricular and extracurricular activities, ensuring well-rounded development and enhanced career readiness.",
      "The department is supported by well-qualified and experienced faculty specializing in key domains such as Structural Engineering, Infrastructure Engineering and Construction Engineering and Management. Faculty members actively contribute to research through publications, patents and conference presentations. The laboratories are equipped with modern, state-of-the-art facilities to support advanced learning and experimentation. Students also gain a competitive edge through certificate courses in Building Information Modelling (BIM) and modern surveying along with regular seminars, workshops, and conferences that provide valuable exposure to emerging technologies, industry practices, and recent advancements in civil engineering."
    ],
    vision: "To impart quality Civil Engineering education to young minds and make them into competent professionals with social and ethical values",
    mission: "M1- To impart new knowledge in Civil Engineering through innovative teaching and skill based training using the state-of-the art facilities aligned with industry.\nM2- To nurture technical and entrepreneurship skills, ethics and social values among the students and to develop them into globally competitive engineering graduates\nM3 - To provide sustainable development solutions in civil engineering through continuous engagement and collaboration with industry, academia, and society.",
    peo: "PEO1: Design, simulate and execute the Civil Engineering projects using fundamental knowledge and modern engineering tools\n\nPEO2: Analyze, solve and deliver the appropriate solution for construction industry problems using professional knowledge\n\nPEO3: Work in projects as employees or entrepreneurs demonstrating administrative and communication skills with professional ethics.",
    po: "PO-1: Engineering Knowledge: Apply the knowledge of mathematics, science, engineering fundamentals, and an engineering specialization to the solution of complex engineering problems.\n\nPO-2: Problem analysis: Identify, formulate, review research literature, and analyze complex engineering problems reaching substantiated conclusions using first principles of mathematics, natural sciences, and engineering sciences.\n\nPO-3: Design/development of solutions: Design solutions for complex engineering problems and design system components or processes that meet the specified needs with appropriate consideration for the public health and safety, and the cultural, societal, and environmental considerations.\n\nPO-4: Conduct investigations of complex problems: Use research-based knowledge and research methods including design of experiments, analysis and interpretation of data, and synthesis of the information to provide valid conclusions.\n\nPO-5: Modern tool usage: Create, select, and apply appropriate techniques, resources, and modern engineering and IT tools including prediction and modeling to complex engineering activities with an understanding of the limitations.\n\nPO-6: The engineer and society: Apply reasoning informed by the contextual knowledge to assess societal, health, safety, legal and cultural issues and the consequent responsibilities relevant to the professional engineering practice.\n\nPO-7: Environment and sustainability: Understand the impact of the professional engineering solutions in societal and environmental contexts, and demonstrate the knowledge of, and need for sustainable development.\n\nPO-8: Ethics: Apply ethical principles and commit to professional ethics and responsibilities and norms of the engineering practice.\n\nPO-9: Individual and team work: Function effectively as an individual, and as a member or leader in diverse teams, and in multidisciplinary settings.\n\nPO-10: Communication: Communicate effectively on complex engineering activities with the engineering community and with society at large, such as, being able to comprehend and write effective reports and design documentation, make effective presentations, and give and receive clear instructions.\n\nPO-11: Project management and finance: Demonstrate knowledge and understanding of the engineering and management principles and apply these to one’s own work, as a member and leader in a team, to manage projects and in multidisciplinary environments.\n\nPO-12: Life-long learning: Recognize the need for, and have the preparation and ability to engage in independent and life-long learning in the broadest context of technological change.",
    pso: "PSO - I: Design a cost effective and optimized solution for Civil Engineering problems by using modern techniques\n\nPSO - II: Plan, Analyze, Design and execute the Civil Engineering projects using eco-friendly construction materials with technical knowledge",
    whyChoose: ['Industry aligned Curriculum delivered by experts from industry', 'Product based learning', 'Internships at top companies', 'BIM certification', '100% placement'],
    curriculum: [{ year: 'Year 1', semesters: ['Building Materials', 'Surveying'] }],
    faculty: [
      { name: 'Dr. Prasath P', designation: 'Professor & Head', qualification: 'B.E., M.E., Ph.D.', experience: 'Teaching - 16.2 Years', specialization: 'Structural Engineering', email: 'hod.civil@kiot.ac.in', publications: 'IC-04, NC-06, INJ-06, NJ-04', rating: 5.0, image: prasathImage, association: 'Regular' },
      { name: 'Prof. Krishnan L', designation: 'Assistant Professor', qualification: 'B.E., M.E., Ph.D (Pursuing)', experience: 'Teaching - 11 Years, Industry - 2 Years', specialization: 'Structural Engineering', email: 'lkcivil@kiot.ac.in', publications: 'IJ:06, NJ:0, IC:05, NC:12', rating: 4.8, image: krishnanImage, association: 'Regular' },
      { name: 'Mr. Sathish Kumar B', designation: 'Assistant Professor', qualification: 'B.E., M.E.', experience: 'Teaching - 2.2 Years, Industry - 5.1 Years', specialization: 'Structural Engineering', email: 'bskcivil@kiot.ac.in', publications: 'IC-0, NC-0, INJ-0, NJ-0', rating: 4.7, image: sathishKumarImage, association: 'Regular' },
      { name: 'Mr. Nirmal L M', designation: 'Assistant Professor', qualification: 'B.E., M.E.', experience: 'Teaching - 2.1 Years', specialization: 'Construction Engineering and Management', email: 'lmncivil@kiot.ac.in', publications: 'IC-1, NC-0, INJ-0, NJ-0', rating: 4.7, image: nirmalImage, association: 'Regular' },
      { name: 'Mr. Selvakumar P', designation: 'Assistant Professor', qualification: 'B.E., M.E.', experience: 'Teaching - 10.3 Years', specialization: 'Infrastructure Engineering', email: 'pscivil@kiot.ac.in', publications: 'IC-1, NC-2, INJ-1', rating: 4.6, image: selvakumarImage, association: 'Regular' },
      { name: 'Mr. Elavarasan R', designation: 'Assistant Professor', qualification: 'M.E., (Ph.D).', experience: 'Teaching - 11.10 Years', specialization: 'Structural Engineering', email: 'recivil@kiot.ac.in', publications: 'IC-3, NC-2, NJ-2, INJ-2', rating: 4.6, image: elavarasanImage, association: 'Regular' },
      { name: 'Mr. Arulkesavan S', designation: 'Assistant Professor', qualification: 'M.E.', experience: 'Teaching - 8.8 Years', specialization: 'Construction Engineering and Management', email: 'sakcivil@kiot.ac.in', publications: 'IC-6, NC-1, IJ-9', rating: 4.6, image: arulkesavanImage, association: 'Regular' },
      { name: 'Mr. Kaalijoothi S J', designation: 'Assistant Professor', qualification: 'M.A., M.Phil.', experience: 'Teaching - 9 Years', specialization: 'English', email: 'sjkeng@kiot.ac.in', publications: 'N/A', rating: 4.6, image: kaalijoothiImage, association: 'Regular', category: 'S&H' },
      { name: 'Mr. Rajeshkumar S', designation: 'Assistant Professor', qualification: 'B.E., M.E.', experience: 'Teaching - 5.1 Years, Industry - 1 Year', specialization: 'Structural Engineering', email: 'srcivil@kiot.ac.in', publications: 'IC-1, NC-2, INJ-0, NJ-0', rating: 4.6, image: rajeshkumarImage, association: 'Regular' },
      { name: 'Mr. Sasi Kumar S', designation: 'Assistant Professor', qualification: 'M.Sc., M.Phil.', experience: 'Teaching - 17 Years', specialization: 'Physics', email: 'ssphy@kiot.ac.in', publications: 'N/A', rating: 4.5, image: sasikumarImage, association: 'Regular', category: 'S&H' },
      { name: 'Mr. Senthil Kumar S', designation: 'Assistant Professor', qualification: 'M.E.', experience: 'Teaching - 6.8 Years, Industry - 3.6 Years', specialization: 'Structural Engineering', email: 'sskcivil@kiot.ac.in', publications: 'IC-1, NC-3', rating: 4.5, image: senthilkumarImage, association: 'Regular' },
      { name: 'Mr. Balamurugan U', designation: 'Assistant Professor', qualification: 'M.Sc., M.Phil.', experience: 'Teaching - 11.2 Years', specialization: 'Mathematics', email: 'ubmat@kiot.ac.in', publications: 'N/A', rating: 4.5, image: balamuruganImage, association: 'Regular', category: 'S&H' },
      { name: 'Mrs. P. Sri Devi', designation: 'AP/ MAT', qualification: 'B.Sc., M.Sc., M.Phil., SET.', category: 'S&H' },
      { name: 'Dr. C. Umamaheswari', designation: 'AP/CHE', qualification: 'B.Sc., M.Sc., M.Phil., Ph.D.', category: 'S&H' }
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
        name: 'CONCRETE AND HIGHWAY ENGINEERING LABORATORY',
        incharge: 'Mr. R.Elavarasan ,AP/ Civil',
        technician: 'Mr.C.Pradeep Kumar, LT/Civil',
        area: '66 Sq.M.',
        equipments: [
          'Laboratory Area (Sq.M.): 66',
          'Los Angeles abrasion testing machine',
          'Air permeability apparatus',
          'Universal penetrometer',
          'Ring and ball apparatus',
          'Ductility testing machine',
          'Standard tar viscometer',
          'Analogue compression testing machine',
          'Flexure testing machine',
          'Longitudinal compressometer',
          'Lateral extensometer analogue',
          'Slump test apparatus',
          'Consistometer',
          'Flow table motorized',
          'Compaction factor apparatus',
          'Vibrating table',
          'Aggregate impact test',
          'Density basket',
          'Crushing value apparatus',
          'Slump cone',
          'CBR apparatus',
          'Marshall stability test apparatus',
          'Centrifuge extractor capacity 1500g',
          'Air permeability Apparatus',
          'Automatic compactor bitumen mixer',
          'Los angles abrasion testing machine senser(spares)'
        ],
        icon: Building2
      },
      {
        name: 'SURVEYING LABORATORY',
        incharge: 'Mr. S.Arulkesavan ,AP/ Civil',
        technician: 'Mr.S.Selvaraj, LT/Civil',
        area: '66 Sq.M.',
        equipments: [
          'Laboratory Area (Sq.M.): 66',
          'Dumpy Level',
          'Measuring Chain (30 Mtrs) with arrows',
          'Measuring Chain (20 Mtrs) with arrows',
          'Plane Table With Accessories',
          'Prismatic Compass',
          'Pocket Stereoscope',
          'Pentase Total Station with all Standard accessories',
          'Standard Vernier Theodolite',
          'Gramin GPS Entern 30 Model',
          'Surveyor Compass'
        ],
        icon: Compass
      },
      {
        name: 'FLUID MECHANICS AND HYDRAULIC MACHINERY LABORATORY',
        incharge: 'Mr. B.Sathish Kumar ,AP/ Civil',
        technician: 'Mr.S.Selvaraj, LT/Civil',
        area: '66 Sq.M.',
        equipments: [
          'Laboratory Area (Sq.M.): 66',
          'Venturimeter Apparatus',
          'Orificemeter Apparatus',
          'Pipe Friction Apparatus',
          'Rotometer Apparatus',
          'Multispeed Reciprocating Pump',
          'Multispeed Centrifugal Pump',
          'Pelton Wheel Turbine- Test Rig',
          'Francis Turbine- Test Rig',
          'Kaplan Turbine',
          'Gear Oil Pump',
          "Bernoulli's Theorem Apparatus",
          'Notch Tank Apparatus',
          'Minor Loss Apparatus',
          'Pitot Tube Apparatus',
          'Submersible Pump',
          'Flow Through Orifice Apparatus',
          'Metacentric Height',
          'Jet Pump Test Rig (Closed Circuit)',
          'Multistage Centrifugal Pump Test Rig - Constant Speed Apparatus',
          'Impact of Jet on Vanes',
          'Hydraulic Flume'
        ],
        icon: Droplets
      },
      {
        name: 'STRENGTH OF MATERIALS LABORATORY',
        incharge: 'Mr. L.M. Nirmal ,AP/ Civil',
        technician: 'Mr.C.Pradeep Kumar, LT/Civil',
        area: '66 Sq.M.',
        equipments: [
          'Laboratory Area (Sq.M.): 66',
          'Universal Testing machine (60T)',
          'Impact Testing Machine',
          'Brinnel Hardness Testing Machine',
          'Rockwell Hardness Testing Machine',
          'Mechanical Spring Testing Machine',
          'Metallurgical Microscope',
          'Muffle Furnace',
          'Torsion Testing Machine(100N.M)',
          'Beam Deflection Test Apparatus',
          "Vicat's Apparatus",
          'Mortor Cube Moulds',
          'Mechanical Extensometer',
          "Le Chatlier's Apparatus"
        ],
        icon: Wrench
      },
      {
        name: 'ENVIRONMENTAL ENGINEERING LABORATORY',
        incharge: 'Mr. S.Rajeshkumar ,AP/ Civil',
        technician: 'Mrs.M.Yasodha, LT/Civil',
        area: '100 Sq.M.',
        equipments: [
          'Laboratory Area (Sq.M.): 100',
          'Digital PH meter (Elico make model 120 with electrode)',
          'Electrode for Digital PH meter',
          'Digital Nephelo Turbidity meter',
          'Digital Conductivity meter',
          'B.O.D Incubator',
          'Muffle Furnace',
          'Hot Air oven',
          'C.O.D Apparatus',
          'Electronic Top Loading Balance',
          'Dissolved Oxygen Analyser',
          'Visible Spectrophotometer',
          'Digital Flame Photometer',
          'B.O.D Analyser',
          'C.O.D Analyser',
          'Atomic Absorption Spectrophotometer'
        ],
        icon: FlaskConical
      },
      {
        name: 'SOIL MECHANICS LABORATORY',
        incharge: 'Mr. P.Selvakumar, AP/ Civil',
        technician: 'Mr.C.Pradeep Kumar, LT/Civil',
        area: '66 Sq.M.',
        equipments: [
          'Laboratory Area (Sq.M.): 66',
          'Sieve Shaker Motorised',
          'Liquid Limit Device',
          'Plastic Limit Apparatus',
          'Shrinkage Limit Apparatus',
          'Proctor Compaction Apparatus',
          'Core Cutter Method',
          'Sand Pouring Cylinder',
          'Triaxial Shear Test Apparatus',
          'Pore Pressure Apparatus',
          'Relative Density Apparatus',
          'Pycnometer',
          'Permeability Test Apparatus',
          'Hot Air Oren',
          'Sieve Brass Frame',
          'Soil Hydrometer',
          'Three Gang Consolidation',
          'Unconfined Compression Tester',
          'Direct Shear test Apparatus',
          'Vane shear Apparatus'
        ],
        icon: Layers
      },
      {
        name: 'COMPUTER AIDED BUILDING DRAWING LABORATORY',
        incharge: 'Mr.S.Senthilkumar ,AP/ Civil',
        technician: 'Mr.R.Ganesh Kumar Bharath, LT/Civil',
        area: '66 Sq.M.',
        equipments: [
          'Laboratory Area (Sq.M.): 66',
          'Softwares: AutoCAD, STAADPRO, ArcGIS',
          'Hardwares:',
          'CPU i7 14th GEN 16 GB RAM -512 GB -19.5 inch FHD monitor',
          'CPU i3 14th GEN 4 GB RAM -500 GB -15.5 inch LED monitor',
          'CPU Intel Dual Core 92020 Processor 4 GB RAM -500 GB -15.5 inch LED monitor',
          'Speaker Creative Inspire T3130',
          'Civil Engineering Models',
          'Printer-Canon 2900',
          'Canon LIDE 400 Scanner',
          'PA Wireless Amplifier WP200',
          'Laptop DELL LATI 3420 i3 -1115 G4-8 GB-512 -14 HD'
        ],
        icon: Monitor
      }
    ],
    placementStats: { placed: '88%', avg: '3.8 LPA', top: '10 LPA', companies: '30+' },
    patents: [
      {
        year: '2026',
        data: [
          { inventors: 'Mr. S.Arulkesavan', title: 'Automatic Waste Sorting Apparatus', type: 'Design Patent', appNo: '202641061677 A', date: '29-05-2026', status: 'Published' },
          { inventors: 'Mr. B.Thiruselvam', title: 'Automatic Waste Sorting Apparatus', type: 'Design Patent', appNo: '202641061677 A', date: '29-05-2026', status: 'Published' },
          { inventors: 'Mr. S.P.Siranjivi', title: 'Automatic Waste Sorting Apparatus', type: 'Design Patent', appNo: '202641061677 A', date: '29-05-2026', status: 'Published' },
          { inventors: 'Mr. L.M.Nirmal', title: 'Foldable Scaffolding System for High Rise Construction', type: 'Design Patent', appNo: '493450-001', date: '03-03-2026', status: 'Published' },
          { inventors: 'Mr. R.Elavarsan', title: 'Concrete Bridge Monitoring Device', type: 'Design Patent', appNo: '476408-001', date: '10-10-2026', status: 'Published' },
        ]
      },
      {
        year: '2025',
        data: [
          { inventors: 'Mr. B.Sathish Kumar', title: 'Concrete Structure for Impact Resistance', type: 'Design Patent', appNo: '202441103932 A', date: '03-01-2025', status: 'Published' },
        ]
      },
      {
        year: '2024',
        data: [
          { inventors: 'Mr. S.Senthil Kumar', title: 'Water Penetrating Paver Block', type: 'Design Patent', appNo: '202441092973 A', date: '06-12-2024', status: 'Published' },
          { inventors: 'Mr. S.Arulkesavan', title: 'Water Penetrating Paver Block', type: 'Design Patent', appNo: '202441092973 A', date: '06-12-2024', status: 'Published' },
          { inventors: 'Mr. R.Elavarsan', title: 'Water Penetrating Paver Block', type: 'Design Patent', appNo: '202441092973 A', date: '06-12-2024', status: 'Published' },
          { inventors: 'Mr. S.Rajesh Kumar', title: 'Water Penetrating Paver Block', type: 'Design Patent', appNo: '202441092973 A', date: '06-12-2024', status: 'Published' },
          { inventors: 'Mr. L.M.Nirmal', title: 'Compressed Recycled Plastic Aggregate and Manufacturing Method', type: 'Design Patent', appNo: '202441092231 A', date: '29-11-2024', status: 'Published' },
          { inventors: 'Ms. C.Dharshini', title: 'Compressed Recycled Plastic Aggregate and Manufacturing Method', type: 'Design Patent', appNo: '202441092231 A', date: '29-11-2024', status: 'Published' },
          { inventors: 'Ms. A.Rashieha', title: 'Compressed Recycled Plastic Aggregate and Manufacturing Method', type: 'Design Patent', appNo: '202441092231 A', date: '29-11-2024', status: 'Published' },
          { inventors: 'Mr. C.Nithish Kannan', title: 'Compressed Recycled Plastic Aggregate and Manufacturing Method', type: 'Design Patent', appNo: '202441092231 A', date: '29-11-2024', status: 'Published' },
          { inventors: 'Mr. V. Jayasurya Prakash', title: 'Compressed Recycled Plastic Aggregate and Manufacturing Method', type: 'Design Patent', appNo: '202441092231 A', date: '29-11-2024', status: 'Published' },
          { inventors: 'Mr. A.Rangaraj', title: 'Internet of Things Based Air Quality Monitoring Device', type: 'Design Patent', appNo: '427774-001', date: '21-08-2024', status: 'Published' },
          { inventors: 'Mr. P.Selvakumar', title: 'Internet of Things Based Air Quality Monitoring Device', type: 'Design Patent', appNo: '427774-001', date: '21-08-2024', status: 'Published' },
        ]
      },
      {
        year: '2023',
        data: [
          { inventors: 'Mr. B.Sathish Kumar', title: 'Real time Concrete Crack Detector', type: 'Design Patent', appNo: '401664-001', date: '08-12-2023', status: 'Published' },
          { inventors: 'Mr. S.Rajesh Kumar', title: 'Apparatus to Measure the Shear Strength of Concrete', type: 'Design Patent', appNo: '400765-001', date: '28-11-2023', status: 'Published' },
          { inventors: 'Mr. L.M.Nirmal', title: 'Apparatus to Measure the Shear Strength of Concrete', type: 'Design Patent', appNo: '400765-001', date: '28-11-2023', status: 'Published' },
          { inventors: 'Mr. S.Senthil Kumar', title: 'Apparatus to Measure the Shear Strength of Concrete', type: 'Design Patent', appNo: '400765-001', date: '28-11-2023', status: 'Published' },
          { inventors: 'Mr. S.Arulkesavan', title: 'Apparatus to Measure the Shear Strength of Concrete', type: 'Design Patent', appNo: '400765-001', date: '28-11-2023', status: 'Published' },
          { inventors: 'Mr. R.Elavarsan', title: 'Prefabricated Plastic Panels for Road Construction', type: 'Design Patent', appNo: '396000-001', date: '25-09-2023', status: 'Published' },
        ]
      }
    ],
};
