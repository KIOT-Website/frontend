import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useParams, useNavigate, Link } from 'react-router-dom'
import {
    Users,
    GraduationCap,
    BookOpen,
    ArrowRight,
    Search,
    Target,
    Award,
    UserCheck,
    Microscope,
    Handshake,
    Stethoscope,
    FileText,
    Presentation,
    FileEdit,
    CheckCircle2,
    ChevronRight,
    X,
    ExternalLink,
    Database,
    Mail,
    Fingerprint,
    Info
} from 'lucide-react'

// Import CSE Faculty/Supervisor Images
import vijayalakshmiImg from '../assets/Faculity/cse/Dr.P.VIJAYALAKSHMI.webp'
import rajendranImg from '../assets/placements/placement team/Placement-Director.webp'
import kumarImg from '../assets/Faculity/cse/Dr.R.KUMAR.webp'
import vKumarImg from '../assets/Faculity/cse/Dr.V.KUMAR.webp'
import rajeshImg from '../assets/placements/placement team/Mr.I.Rajesh M.E.,Ph.D.webp'
import malarvizhiImg from '../assets/Faculity/cse/Mrs.P.MALARVIZHI.webp'
import sakthivelImg from '../assets/Faculity/cse/Dr.S.SAKTHIVEL.webp'

// Import EEE Faculty/Supervisor Images
import munirajImg from '../assets/Faculity/eee/muniraj.webp'
import kamatchiKannanImg from '../assets/Faculity/eee/kamatchi_kannan.webp'
import gowriSankarImg from '../assets/Faculity/eee/gowri_sankar.webp'
import kalpanadevi_eeeImg from '../assets/Faculity/eee/kalpanadevi.webp'
import karthikeyan_eeeImg from '../assets/Faculity/eee/karthikeyan.webp'
import manjula_eeeImg from '../assets/Faculity/eee/manjula.webp'
import rajeswari_eeeImg from '../assets/Faculity/eee/rajeswari.webp'
import sugan_eeeImg from '../assets/Faculity/eee/sugan.webp'

// Import MECH Faculty/Supervisor Images
import srinivasanMechImg from '../assets/dir and hod/Dr. PSS. Srinivasan.jpg'
import visagavelMechImg from '../assets/dir and hod/Principal.png'
import navaneethakrishnanMechImg from '../assets/Faculity/MECH/Dr. P. Navaneethakrishnan.webp'
import ilangkumaranMechImg from '../assets/Faculity/MECH/Dr. M. Ilangkumaran.webp'
import panneerselvamMechImg from '../assets/Faculity/MECH/Dr.N.Panneer Selvam.webp'

// Import S&H Faculty/Supervisor Images
import venkateshShImg from '../assets/Faculity/aids/venkatesh.webp'

// Import ECE Faculty/Supervisor Images
import santhiyakumariEceImg from '../assets/Faculity/ECE/Dr. N. Santhiyakumari.webp'
import kumarganeshEceImg from '../assets/Faculity/ECE/Dr. S. Kumarganesh.webp'

// CSE-Specific Unified Datasets
const cseSupervisors = [
    {
        id: 1,
        name: "Dr. P. Rajendran",
        role: "Professor & Director - Placement & III",
        university: "Anna University",
        department: "CSE",
        researchArea: "Image Mining, Data Mining",
        supervisorId: "2340253",
        email: "peerajendran@gmail.com",
        guided: "9",
        guiding: "8",
        irins: "https://kiot.irins.org/profile/304511",
        image: rajendranImg,
        publications: [
            {
                title: "Analysis of Computational Methods for Diagnosis of Cervical Cancer – A Review",
                journal: "Applied Mathematics & Information Sciences",
                year: "July 2024",
                authors: "T Senthil Kumar, P Rajendran, N Santhiyakumari, S Kumarganesh et al."
            },
            {
                title: "Machine Learning Techniques for Comparing Time-Frequency of P-QRS-T Signal Wave for Diagnosing Induction Motor Fault Under Environmental Impact",
                journal: "Scientific Bulgarian Communication (Vol. 24, No 7 / ISSN 1311-5065)",
                year: "2023",
                authors: "B. Sasikumar, K. Venkatasalam, P. Rajendran"
            },
            {
                title: "Decision Support System For Brain Tumor using Image Mining",
                journal: "International Journal of Medical Systems & Research",
                year: "2011",
                authors: "Dr.P.Rajendran"
            }
        ]
    },
    {
        id: 2,
        name: "Dr. P. Vijayalakshmi",
        role: "Professor / CSE",
        university: "Anna University",
        department: "CSE",
        researchArea: "Wireless Sensor Networks",
        supervisorId: "4140063",
        email: "vijii_s@yahoo.co.in",
        guided: "-",
        guiding: "5",
        irins: "https://kiot.irins.org/profile/320595",
        image: vijayalakshmiImg,
        publications: [
            {
                title: "Performance analysis of image retrieval system using deep learning techniques",
                journal: "Network: Computation in Neural Systems",
                year: "Jan 2025",
                authors: "B. Selvalakshmi, K. Hemalatha, S. Kumarganesh, P. Vijayalakshmi"
            },
            {
                title: "A Strong Password Manager Using Multiple Encryption Techniques",
                journal: "Journal of The Institution of Engineers (India): Series B",
                year: "Sept 2024",
                authors: "K Baskar, K Muthumanickam, P Vijayalakshmi, S Kumarganesh"
            },
            {
                title: "Topologically Adaptive Authorized Routing in WSN",
                journal: "International Journal of Distributed Sensor Networks",
                year: "2018",
                authors: "Dr.P.Vijayalakshmi"
            }
        ]
    },
    {
        id: 3,
        name: "Dr. R. Kumar",
        role: "Professor / CSE",
        university: "Anna University",
        department: "CSE",
        researchArea: "E-Learning, Knowledge Engineering, Knowledge Management, Knowledge Assessment",
        supervisorId: "2840019",
        email: "rkumarnkl@gmail.com",
        guided: "-",
        guiding: "3",
        irins: "https://kiot.irins.org",
        image: kumarImg,
        publications: [
            {
                title: "Concept Map Based Formative Knowledge Assessment and Adaptive Learning Path Recommendation",
                journal: "Journal of Computer Assisted Learning",
                year: "2014",
                authors: "Dr.R.Kumar"
            },
            {
                title: "An Intelligent E-Learning System for Automated Knowledge Engineering and Cognitive Load Assessment",
                journal: "International Journal of Artificial Intelligence in Education",
                year: "2022",
                authors: "Dr.R.Kumar, S. Divya"
            },
            {
                title: "Knowledge Graph Representation for Adaptive Curriculum Mapping in Engineering Education",
                journal: "IEEE Transactions on Learning Technologies",
                year: "2023",
                authors: "Dr.R.Kumar"
            }
        ]
    }
];

const csePhdHolders = [
    {
        id: 1,
        name: "Dr. V. Kumar",
        topic: "Design Of An Efficient MAC Protocol For Wireless Networks",
        year: "2011",
        university: "Anna University, Coimbatore",
        irins: "https://kiot.irins.org/profile/242498",
        image: vKumarImg,
        publications: { ij: 0, ic: 0, nj: 0, nc: 0 }
    },
    {
        id: 2,
        name: "Dr. P. Rajendran",
        topic: "Decision Support System For Brain Tumor using Image Mining",
        year: "2011",
        university: "Anna University, Coimbatore",
        irins: "https://kiot.irins.org/profile/304511",
        image: rajendranImg,
        publications: { ij: 48, ic: 52, nj: 0, nc: 49 }
    },
    {
        id: 3,
        name: "Dr. R. Kumar",
        topic: "Concept Map Based Formative Knowledge Assessment",
        year: "2014",
        university: "Anna University, Chennai",
        irins: "https://kiot.irins.org",
        image: kumarImg,
        publications: { ij: 4, ic: 4, nj: 0, nc: 0 }
    },
    {
        id: 4,
        name: "Dr. M. Sakthivel",
        topic: "Agile Principles for Risk Reduction in Software Development",
        year: "2018",
        university: "Anna University, Chennai",
        irins: "https://kiot.irins.org",
        image: null,
        publications: { ij: 5, ic: 5, nj: 0, nc: 0 }
    },
    {
        id: 5,
        name: "Dr. P. Vijayalakshmi",
        topic: "Topologically Adaptive Authorized Routing in WSN",
        year: "2018",
        university: "Anna University, Chennai",
        irins: "https://kiot.irins.org/profile/320595",
        image: vijayalakshmiImg,
        publications: { ij: 34, ic: 28, nj: 8, nc: 18 }
    },
    {
        id: 6,
        name: "Dr. S. Sakthivel",
        topic: "Diagnosis of Adenomyosis using Automated MRI Diagnosis Model",
        year: "2020",
        university: "Anna University, Chennai",
        irins: "https://kiot.irins.org",
        image: sakthivelImg,
        publications: { ij: 0, ic: 0, nj: 0, nc: 0 }
    },
    {
        id: 7,
        name: "Dr. I. Rajesh",
        topic: "Certain Investigations on Poultry Meat Quality Assesment using Grabcut and image mining techniques",
        year: "2025",
        university: "Anna University",
        irins: "https://kiot.irins.org/profile/304521",
        image: rajeshImg,
        publications: { ij: 0, ic: 0, nj: 0, nc: 0 }
    },
    {
        id: 8,
        name: "Dr. P. Malarvizhi",
        topic: "Energy Efficient Routing for Lifetime Maximization in mobile wireless sensor Network based on Optimization Algorithm",
        year: "2025",
        university: "Anna University",
        irins: "https://kiot.irins.org/profile/320616",
        image: malarvizhiImg,
        publications: { ij: 0, ic: 0, nj: 0, nc: 0 }
    },
    {
        id: 9,
        name: "Dr. M. Lakshagajothi",
        topic: "Investigation on enabling intelligence using deep Learning on IoT systems in classroom environment.",
        year: "",
        university: "Deemed to be university.",
        irins: "https://kiot.irins.org",
        image: null,
        publications: { ij: 0, ic: 0, nj: 0, nc: 0 }
    }
];

const cseResearchAreas = [
    "Wireless Sensor Networks & IoT",
    "Data Mining, Image Processing",
    "Cloud & Security",
    "Artificial Intelligence with Machine Learning and Deep Learning."
];

const cseFacilities = [
    {
        name: "Advanced Research & IoT Laboratory",
        description: "Equipped with state-of-the-art IoT gateway kits, Raspberry Pi modules, Arduino development boards, sensor nodes, and software tools for research in wireless sensor networks and smart cyber-physical systems.",
        infrastructure: "IoT Kits, Sensor Modules, High-speed Computing Systems"
    },
    {
        name: "Burp Suite",
        description: "Burp Suite is a popular web application security testing tool used by security professionals. It helps identify vulnerabilities such as SQL injection, XSS, and authentication flaws.",
        infrastructure: "Web Security Suite, Testing Workstations"
    }
];

const cseFacultyPursuing = [
    { name: "Prof. T. Karthikeyan", topic: "Data Minining", supervisor: "Dr. T. Sitamahalakshmi", university: "GITAM University", registration: "-", status: "Pursuing" },
    { name: "Mrs. V. Sathiyapriya", topic: "Artificial Intelligence and Machine Learning", supervisor: "Dr. P. Rajendran", university: "Knowledge Institute of Technology, Salem & Anna University", registration: "23244697170", status: "Pursuing" },
    { name: "Mr. Sivaguru", topic: "Artificial Intelligence", supervisor: "Dr. R. Thangarajan (Kongu Engineering College)", university: "Anna University", registration: "21144697479", status: "Pursuing" },
    { name: "Mrs. N. Subha", topic: "Imaging and Machine Learning.", supervisor: "Dr. P. Rajendran", university: "Knowledge Institute of Technology, Salem", registration: "24244691328", status: "Pursuing" },
    { name: "Mrs. R. Pushpalatha", topic: "Deep Learning", supervisor: "Dr. P. Rajendran", university: "Knowledge Institute of Technology, Salem", registration: "24234691437", status: "Pursuing" },
    { name: "Mr. A. Sekar", topic: "Artificial Intelligence and Deep Learning.", supervisor: "Dr. P. Vijayalakshmi", university: "Knowledge Institute of Technology, Salem", registration: "24144691403", status: "Pursuing" },
    { name: "Mrs. D. Ramya", topic: "Security", supervisor: "Dr. P. Vijayalakshmi", university: "Knowledge Institute of Technology, Salem", registration: "24244697415", status: "Pursuing" },
    { name: "Mrs. G. Eswari @ Petchiammal", topic: "Social Network Analysis", supervisor: "Dr. P. Pabitha (MIT, Chennai)", university: "Anna University", registration: "23244397295", status: "Pursuing" },
    { name: "Mr. P. Nareshkumar", topic: "Machine Learning", supervisor: "Dr. M. Kumaresan (Associate Professor/CSE, JAIN University)", university: "JAIN University, Bangalore", registration: "JU2025RPHD10492", status: "Pursuing" },
    { name: "Mrs. E. Kiruthika", topic: "Machine Learning.", supervisor: "Dr. P. Rajendran", university: "Knowledge Institute of Technology, Salem", registration: "26234691281", status: "Pursuing" }
];

const cseGuidedScholars = [
    { scholar: "Dr. S. Kalpana Devi", topic: "Design of High-Gain Multi-input Single-Output switched Quast-Z source converter for the integration of multiple renewable energy sources.", supervisor: "Dr. P. Rajendran", university: "Anna University", status: "Guided" },
    { scholar: "Dr. P. Malarvizhi", topic: "Energy Efficient Routing for Lifetime Maximization in mobile wireless sensor Network based on Optimization Algorithm", supervisor: "Dr. Kavitha G", university: "Anna University", status: "Guided" },
    { scholar: "Dr. I. Rajesh", topic: "Certain Investigations on Poultry Meat Quality Assesment using Grabcut and image mining techniques", supervisor: "Dr. P. Rajendran", university: "Anna University", status: "Guided" },
    { scholar: "Dr. M. Lakshagajothi", topic: "Investigation on enabling intelligence using deep Learning on IoT systems in classroom environment.", supervisor: "Dr. R. Shanmuga Sundram", university: "Deemed to be university.", status: "Guided" },
    { scholar: "Dr. B. Sasikumar", topic: "Certain Investigations on Fault detection in induction motor using infra-red thermography with machine learning and time frequency and signal analysis.", supervisor: "Dr. P. Rajendran", university: "Anna University", status: "Guided" }
];


const aidsSupervisors = [];
const aidsPhdHolders = [];
const aidsResearchAreas = [
    "Medical Image Processing",
    "Machine Learning",
    "Deep Learning",
    "Natural Language Processing"
];
const aidsFacilities = [
    {
        name: "Advanced AI Research Laboratory",
        description: "A specialized laboratory facility equipped with advanced computing systems and frameworks to conduct research and projects in Artificial Intelligence, Deep Learning, and Machine Learning.\n\nOur Wings:\nDr.B.Sasikumar (Experience : 22 Years)\nDr.A.Gomathi (Experience : 21 Years)",
        infrastructure: "High-Speed Computing Workstations, AI/ML software frameworks"
    }
];
const aidsFacultyPursuing = [
    { name: "Mr. A. Gopalakrishnan", topic: "Medical Image Processing", supervisor: "Dr. S. Kumarganesh (Professor / ECE, Knowledge Institute of Technology)", university: "Anna University", registration: "23144697372", status: "Pursuing" },
    { name: "Mrs. V. Brindha", topic: "Machine Learning", supervisor: "Dr. P. Rajendran (Professor & Director PAT(III) / CSE, Knowledge Institute of Technology, Salem)", university: "Anna University", registration: "24234691121", status: "Pursuing" },
    { name: "Mrs. P. J. Esther Rani", topic: "Wireless Sensor Network", supervisor: "Dr. P. Rajendran (Professor / CSE, Knowledge Institute of Technology)", university: "Anna University", registration: "24254697160", status: "Pursuing" },
    { name: "Mrs. B. Bhuvaneswari", topic: "Deep Learning", supervisor: "Dr. R. Kumar (Professor / CSE, Knowledge Institute of Technology, Salem)", university: "Anna University", registration: "24244697246", status: "Pursuing" },
    { name: "Mrs. S. Sudha", topic: "Natural Language Processing", supervisor: "Dr. R. Kumar (Professor / CSE, Knowledge Institute of Technology, Salem)", university: "Anna University", registration: "25244691194", status: "Pursuing" },
    { name: "Mrs. M. Deepa", topic: "Machine Learning", supervisor: "Dr. E. Sathishkumar (Associate Professor, Department of ECE, Gnanamani College of Technology, Namakkal)", university: "Anna University", registration: "24234691207", status: "Pursuing" },
    { name: "Mrs. N. Savitha", topic: "Artificial Intelligence", supervisor: "Dr. M. Jayaprakash, Saveetha School of Engineering, Saveetha Deemed to be University, Thandalam, Chennai.", university: "Saveetha Deemed to be University, Chennai.", registration: "162419204", status: "Pursuing" }
];
const aidsGuidedScholars = [];

const civilSupervisors = [];
const civilPhdHolders = [];
const civilResearchAreas = [
    "Concrete Structures"
];
const civilFacilities = [
    {
        name: "Concrete & Highway Laboratory",
        description: "Equipped with machinery for testing properties of fresh and hardened concrete, soil mechanics, and highway engineering materials to support structural studies.",
        infrastructure: "Compression Testing Machine, Universal Testing Machine, Compaction Factor apparatus"
    }
];
const civilFacultyPursuing = [
    { name: "Mr. L. Krishnan", topic: "Concrete structures", supervisor: "Dr. MNA. GulshanTaj (Professor, Department of Civil Engineering, Sona College of Technology, Salem)", university: "Anna University", registration: "20131691103", status: "Pursuing" },
    { name: "Mr. R. Elavarasan", topic: "Concrete structures", supervisor: "Dr. T. Magesh Kumar (Associate Professor, Civil Engineering, KSR College of Technology, Namakkal)", university: "Anna University", registration: "20131691103", status: "Pursuing" },
    { name: "Mr. S. Arulkesavan", topic: "Concrete structures", supervisor: "Dr. S. Ramesh (Professor, Civil Engineering, KSR College of Technology, Namakkal)", university: "Anna University", registration: "20131691103", status: "Pursuing" },
    { name: "Mr. L. M. Nirmal", topic: "Concrete structures", supervisor: "Dr. T. Magesh Kumar (Associate Professor, Civil Engineering, KSR College of Technology, Namakkal)", university: "Anna University", registration: "20131691103", status: "Pursuing" }
];
const civilGuidedScholars = [];

const csbsSupervisors = [];
const csbsPhdHolders = [];
const csbsResearchAreas = [
    "Internet of Things",
    "Data Security"
];
const csbsFacilities = [];
const csbsFacultyPursuing = [
    { name: "Mr. R. Karthick", topic: "Internet of Things", supervisor: "Dr. P. Vijayalakshmi (ASP/CSE, Knowledge Institute of Technology)", university: "Anna University, Chennai", registration: "24144691347", status: "Pursuing" },
    { name: "Mrs. C. Nithya", topic: "Data Security", supervisor: "Dr. S. Kumarganesh (Professor / ECE, Knowledge Institute of Technology)", university: "Anna University, Chennai", registration: "25244691265", status: "Pursuing" }
];
const csbsGuidedScholars = [];

// ─── EEE (Electrical & Electronics Engineering) Data ───
const eeeSupervisors = [
    {
        id: 1,
        name: "Dr. C. Muniraj",
        role: "Director - Academics / EEE",
        university: "Anna University",
        department: "EEE",
        researchArea: "AC Drives and High Voltage Engineering",
        supervisorId: "2230136",
        email: "directoracademics@kiot.ac.in",
        guided: "05",
        guiding: "06",
        irins: "https://kiot.irins.org",
        image: munirajImg,
        publications: []
    },
    {
        id: 2,
        name: "Dr. V. Kamatchi Kannan",
        role: "Professor / EEE",
        university: "Anna University",
        department: "EEE",
        researchArea: "Power Quality, Renewable Energy Sources, DC-DC Converters and Intelligent Techniques",
        supervisorId: "2330080",
        email: "vkkeee@kiot.ac.in",
        guided: "04",
        guiding: "03",
        irins: "https://kiot.irins.org",
        image: kamatchiKannanImg,
        publications: []
    },
    {
        id: 3,
        name: "Dr. P. A. Gowrisankar",
        role: "Professor / EEE",
        university: "Anna University",
        department: "EEE",
        researchArea: "Control and Instrumentation",
        supervisorId: "2830026",
        email: "pagseee@kiot.ac.in",
        guided: "-",
        guiding: "-",
        irins: "https://kiot.irins.org",
        image: gowriSankarImg,
        publications: []
    }
];

const eeePhdHolders = [
    {
        id: 1,
        name: "Dr. C. Muniraj",
        topic: "AC Drives and High Voltage Engineering",
        year: "-",
        university: "Anna University",
        irins: "https://kiot.irins.org",
        image: munirajImg,
        publications: { ij: 0, ic: 0, nj: 0, nc: 0 }
    },
    {
        id: 2,
        name: "Dr. V. Kamatchi Kannan",
        topic: "Power Quality & Renewable Energy Systems",
        year: "-",
        university: "Anna University",
        irins: "https://kiot.irins.org",
        image: kamatchiKannanImg,
        publications: { ij: 0, ic: 0, nj: 0, nc: 0 }
    },
    {
        id: 3,
        name: "Dr. P. A. Gowrisankar",
        topic: "Control and Instrumentation",
        year: "-",
        university: "Anna University",
        irins: "https://kiot.irins.org",
        image: gowriSankarImg,
        publications: { ij: 0, ic: 0, nj: 0, nc: 0 }
    }
];

const eeeResearchAreas = [
    "High Voltage Engineering",
    "Image Processing",
    "Power Electronics and Drives",
    "Electrical Machines"
];

const eeeFacilities = [
    {
        name: "E-Mobility Design and Development",
        description: "• BLDC Motor Driver spring balance load setup with Hall Sensor (1500W, 48V)\n• SRM Motor Drive with spring balance load setup\n• 1 HP Axial Flux SRM Motor\n• Three Phase IGBT based power study module\n• Lithium Iron Battery Charger setup with BMS 2 KWh / 60V\n• FPGA (VPE Spartan 6 board)\n• Battery Hi-Tester with Test Probes & Temperature Probe\n• Digital Storage Oscilloscope 400MHZ, 4 Channel\n• Electric Test Bench Model Research and Development Work\n• Fluke Energy Meter - 1773 Digital Meter",
        infrastructure: "BLDC Driver, SRM Motor, IGBT module, Battery Charger with BMS, FPGA, DSO, Test Bench, Fluke Energy Meter"
    },
    {
        name: "Renewable Energy Laboratory",
        description: "• 1kWp Solar PV System\n• Micro Wind Energy Generator\n• Hybrid (Solar-Wind) Power System\n• Solar PV Emulator",
        infrastructure: "Solar PV, Wind Generator, Hybrid Power System, PV Emulator"
    }
];

const eeeFacultyPursuing = [
    { name: "Mrs. K. Manjula", topic: "Renewable Energy Sources", supervisor: "Dr. V. Kamatchi Kannan (Professor / EEE, Knowledge Institute of Technology)", university: "Anna University", registration: "-", status: "Pursuing" },
    { name: "Mrs. R. Rajeswari", topic: "Power Quality", supervisor: "Dr. V. Kamatchi Kannan (Professor / EEE, Knowledge Institute of Technology)", university: "Anna University", registration: "-", status: "Pursuing" },
    { name: "Mrs. P. Rekha", topic: "Intelligent Techniques", supervisor: "Dr. P. A. Gowrisankar (Professor / EEE, Knowledge Institute of Technology)", university: "Anna University", registration: "-", status: "Pursuing" },
    { name: "Mr. M. Sugan", topic: "Control Systems", supervisor: "Dr. P. A. Gowrisankar (Professor / EEE, Knowledge Institute of Technology)", university: "Anna University", registration: "-", status: "Pursuing" },
    { name: "Mr. T. Karthikeyan", topic: "High Voltage Engineering", supervisor: "Dr. C. Muniraj (Director Academics / EEE, Knowledge Institute of Technology)", university: "Anna University", registration: "-", status: "Pursuing" },
    { name: "Mr. G. Karthikeyan", topic: "Power Electronics", supervisor: "Dr. A. Jagadeeshwaran, Associate Professor / EEE, Sona College of Technology, Salem", university: "Anna University", registration: "202012123", status: "Pursuing" },
    { name: "Mr. R. Kathiresan", topic: "Electric Vehicle", supervisor: "Dr. C. Govindaraju, Associate Professor / EEE, Government College of Engineering, Salem", university: "Anna University", registration: "2214707145", status: "Pursuing" },
    { name: "Mr. B. Dhinesh", topic: "Electric Vehicle", supervisor: "Dr. C. Muniraj, Professor & Head / EEE, Knowledge Institute of Technology, Salem", university: "Anna University", registration: "22143697123", status: "Pursuing" },
    { name: "Mr. S. E. Murthy", topic: "Electric Vehicle", supervisor: "Dr. C. Muniraj, Professor & Head / EEE, Knowledge Institute of Technology, Salem", university: "Anna University", registration: "2317511425", status: "Pursuing" },
    { name: "Mr. M. Jagadeeshraja", topic: "Embedded Systems", supervisor: "Dr. C. Muniraj, Professor & Head / EEE, Knowledge Institute of Technology, Salem", university: "Anna University", registration: "23133697118", status: "Pursuing" },
    { name: "Mr. M. Rajkumar", topic: "Power Systems", supervisor: "Dr. C. Muniraj, Professor & Head / EEE, Knowledge Institute of Technology, Salem", university: "Anna University", registration: "23133697123", status: "Pursuing" },
    { name: "Mr. P. Balaji", topic: "Power Electronics", supervisor: "Dr. P. Rajalakshmy, Associate Professor, Robotics Engineering, Karunya University, Coimbatore", university: "Karunya University", registration: "236000168", status: "Pursuing" },
    { name: "Mr. R. Madhanraj", topic: "Control & Instrumentation", supervisor: "Dr. P. Anantha Christu Raj, Research Supervisor, Assistant Professor (SG), Robotics Engineering, Karunya University, Coimbatore", university: "Karunya University", registration: "236000087", status: "Pursuing" },
    { name: "Mrs. N. Divya", topic: "Power Electronics", supervisor: "Dr. V. Kamatchi Kannan, Professor / EEE, Knowledge Institute of Technology, Salem", university: "Anna University", registration: "24233691184", status: "Pursuing" },
    { name: "Mrs. P. Rekha", topic: "Embedded Systems", supervisor: "Dr. V. Kamatchi Kannan, Professor / EEE, Knowledge Institute of Technology, Salem", university: "Anna University", registration: "24239691279", status: "Pursuing" },
    { name: "Mr. Andril Alagusabai", topic: "Power Systems", supervisor: "Dr. J. Senthil Kumar, Bannari Amman Institute of Technology, Salem", university: "Anna University", registration: "20233691153", status: "Pursuing" }
];

const eeeGuidedScholars = [
    { scholar: "Mr. P. Govindaraju", topic: "High Voltage Engineering", supervisor: "Dr. C. Muniraj", university: "Anna University", status: "Awarded (2024)" },
    { scholar: "Ms. P. Gomathi", topic: "Image Processing", supervisor: "Dr. C. Muniraj", university: "Anna University", status: "Awarded (2023)" },
    { scholar: "Ms. N. Selvarani", topic: "Power Electronics and Drives", supervisor: "Dr. C. Muniraj", university: "Anna University", status: "Awarded (2021)" },
    { scholar: "Ms. D. Gunapriya", topic: "Electrical Machines", supervisor: "Dr. C. Muniraj", university: "Anna University", status: "Awarded (2021)" },
    { scholar: "Mrs. V. Jamuna", topic: "Electrical Machines", supervisor: "Dr. C. Muniraj", university: "Anna University", status: "Guided" },
    { scholar: "Mr. S. Sathiskumar", topic: "DC-DC Converter", supervisor: "Dr. V. Kamatchi Kannan", university: "Anna University", status: "Awarded (2024)" },
    { scholar: "Mr. S. Selvakumar", topic: "Quasi Z-Source Inverter", supervisor: "Dr. V. Kamatchi Kannan", university: "Anna University", status: "Awarded (2022)" },
    { scholar: "Mr. F. Vijay Amirtha Raj", topic: "Permanent Magnet Synchronous Motor", supervisor: "Dr. V. Kamatchi Kannan", university: "Anna University", status: "Awarded (2022)" },
    { scholar: "Mr. P. Selvabharathi", topic: "DC - DC Converter", supervisor: "Dr. V. Kamatchi Kannan", university: "Anna University", status: "Thesis Submitted (2025)" }
];

// ─── MCA (Master of Computer Applications) Data ───
const mcaSupervisors = [];
const mcaPhdHolders = [];
const mcaResearchAreas = [
    "Internet of Things",
    "Artificial Intelligence",
    "Cyber Security"
];
const mcaFacilities = [];
const mcaFacultyPursuing = [];
const mcaGuidedScholars = [];

// ─── MECH (Mechanical Engineering) Data ───
const mechSupervisors = [
    {
        id: 1,
        name: "Dr. PSS. Srinivasan",
        role: "Executive Chairman",
        university: "Anna University",
        department: "MECH",
        researchArea: "Heat transfer, CFD",
        supervisorId: "9920479",
        email: "chairman@kiot.ac.in",
        guided: "15",
        guiding: "01",
        irins: "https://kiot.irins.org",
        image: srinivasanMechImg,
        publications: []
    },
    {
        id: 2,
        name: "Dr. K. Visagavel",
        role: "Professor & Principal",
        university: "Anna University",
        department: "MECH",
        researchArea: "Heat Transfer, CFD and Solar Energy",
        supervisorId: "2420553",
        email: "principal@kiot.ac.in",
        guided: "07",
        guiding: "04",
        irins: "https://kiot.irins.org",
        image: visagavelMechImg,
        publications: []
    },
    {
        id: 3,
        name: "Dr. P. Navaneethakrishnan",
        role: "Professor / MECH",
        university: "Anna University",
        department: "MECH",
        researchArea: "Design, Composite Materials",
        supervisorId: "2220288",
        email: "pnkmech@kiot.ac.in",
        guided: "08",
        guiding: "0",
        irins: "https://kiot.irins.org",
        image: navaneethakrishnanMechImg,
        publications: []
    },
    {
        id: 4,
        name: "Dr. M. Ilangkumaran",
        role: "Professor & COE",
        university: "Anna University",
        department: "MECH",
        researchArea: "Maintenance, Supply Chain Management",
        supervisorId: "2120119",
        email: "mikmech@kiot.ac.in",
        guided: "09",
        guiding: "05",
        irins: "https://kiot.irins.org",
        image: ilangkumaranMechImg,
        publications: []
    },
    {
        id: 5,
        name: "Dr. N. Panneerselvam",
        role: "Associate Professor & DCOE",
        university: "Anna University",
        department: "MECH",
        researchArea: "Bio Diesel, Alternative fuels",
        supervisorId: "4120109",
        email: "npsmech@kiot.ac.in",
        guided: "-",
        guiding: "01",
        irins: "https://kiot.irins.org",
        image: panneerselvamMechImg,
        publications: []
    }
];

const mechPhdHolders = [
    {
        id: 1,
        name: "Dr. PSS. Srinivasan",
        topic: "Heat transfer, CFD",
        year: "-",
        university: "Anna University",
        irins: "https://kiot.irins.org",
        image: srinivasanMechImg,
        publications: { ij: 0, ic: 0, nj: 0, nc: 0 }
    },
    {
        id: 2,
        name: "Dr. K. Visagavel",
        topic: "Heat Transfer, CFD and Solar Energy",
        year: "-",
        university: "Anna University",
        irins: "https://kiot.irins.org",
        image: visagavelMechImg,
        publications: { ij: 0, ic: 0, nj: 0, nc: 0 }
    },
    {
        id: 3,
        name: "Dr. P. Navaneethakrishnan",
        topic: "Design, Composite Materials",
        year: "-",
        university: "Anna University",
        irins: "https://kiot.irins.org",
        image: navaneethakrishnanMechImg,
        publications: { ij: 0, ic: 0, nj: 0, nc: 0 }
    },
    {
        id: 4,
        name: "Dr. M. Ilangkumaran",
        topic: "Maintenance, Supply Chain Management",
        year: "-",
        university: "Anna University",
        irins: "https://kiot.irins.org",
        image: ilangkumaranMechImg,
        publications: { ij: 0, ic: 0, nj: 0, nc: 0 }
    },
    {
        id: 5,
        name: "Dr. N. Panneerselvam",
        topic: "Bio Diesel, Alternative fuels",
        year: "-",
        university: "Anna University",
        irins: "https://kiot.irins.org",
        image: panneerselvamMechImg,
        publications: { ij: 0, ic: 0, nj: 0, nc: 0 }
    }
];

const mechResearchAreas = [
    "Materials",
    "Surface Engineering"
];

const mechFacilities = [];

const mechFacultyPursuing = [
    { name: "Mr. S. Naveen Kumar", topic: "Indoor Air Quality", supervisor: "Dr. K. Visagavel (Professor & Principal)", university: "Knowledge Institute of Technology & Anna University", registration: "23142697213", status: "Pursuing" , doj: "16.07.2021", vidwanId: "320743" },
    { name: "Mr. P. Karthikeyan", topic: "Surface Engineering", supervisor: "Dr. K. Visagavel (Professor & Principal)", university: "Knowledge Institute of Technology & Anna University", registration: "23142697217", status: "Pursuing" },
    { name: "Mr. M. Vinoth", topic: "EV Battery – Thermal Management", supervisor: "Dr. K. Visagavel (Professor & Principal)", university: "Knowledge Institute of Technology & Anna University", registration: "23122697215", status: "Pursuing" },
    { name: "Mr. S. RajeshKnna", topic: "Composite Materials", supervisor: "Dr. M. Ilangkumaran (Professor & COE)", university: "Knowledge Institute of Technology & Anna University", registration: "24132697200", status: "Pursuing" },
    { name: "Mr. A. KamalakKannan", topic: "Composite Materials", supervisor: "Dr. M. Ilangkumaran (Professor & COE)", university: "Knowledge Institute of Technology & Anna University", registration: "24132697207", status: "Pursuing" },
    { name: "Mrs. A. Elavarasi", topic: "Composite Materials", supervisor: "Dr. M. Ilangkumaran (Professor & COE)", university: "Knowledge Institute of Technology & Anna University", registration: "24222691184", status: "Pursuing" },
    { name: "Mr. S. Dheepak", topic: "Bio- Implant materials", supervisor: "Dr. N. Panneerselvam (Associate Professor & DCOE)", university: "Knowledge Institute of Technology & Anna University", registration: "24122697203", status: "Pursuing" },
    { name: "Mr. S. Surendar", topic: "Thermal Engineering", supervisor: "Dr. K. Visagavel (Professor & Principal)", university: "Knowledge Institute of Technology & Anna University", registration: "25142697171", status: "Pursuing" }
];

const mechGuidedScholars = [
    { scholar: "Krishnakumar S", topic: "Performance Analysis of Automobile Brakepad Comprising of Bagasse and Palm Kernel Fibre Reinforced Vinylester Composite", supervisor: "Dr. M. Ilangkumaran", university: "Anna University", status: "Guided" },
    { scholar: "Raghavendra Prabhu S", topic: "Selection of 3D Printer for Automobile Spoilers Using Hybrid MCDM Techniques", supervisor: "Dr. M. Ilangkumaran", university: "Anna University", status: "Guided" },
    { scholar: "Kandasamy R", topic: "Durability, Lube Oil Contamination and Ferrography Study on Diesel Engine Fuelled with Distilled Tyre Oil", supervisor: "Dr. M. Ilangkumaran", university: "Anna University", status: "Guided" },
    { scholar: "Suresh Balaji S", topic: "Optimization of Different Types of Layout Problems Using Meta-Heuristic Algorithms", supervisor: "Dr. K. Visagavel", university: "Anna University", status: "Guided" },
    { scholar: "Baskar R", topic: "Reutilization of Silver-Impregnated Activated Carbon (SAC) Cartridges with Surface Modification for Supercapacitor Electrodes for Large-Scale Energy-Storage Applications", supervisor: "Dr. K. Visagavel", university: "Anna University", status: "Guided" }
];

// ─── Science & Humanities (S&H) Data ───
const shSupervisors = [
    {
        id: 1,
        name: "Dr. G. Venkatesh",
        role: "Associate Professor / Chemistry",
        university: "Anna University",
        department: "S&H",
        researchArea: "Supramolecular Nanomaterials",
        supervisorId: "2970011",
        email: "gvchem@kiot.ac.in",
        guided: "0",
        guiding: "0",
        irins: "https://kiot.irins.org",
        image: venkateshShImg,
        publications: []
    }
];

const shPhdHolders = [];

const shResearchAreas = [
    "Nanomaterials",
    "Applied Mathematics",
    "Sensor Development"
];

const shFacilities = [];

const shFacultyPursuing = [
    { name: "Mr. K. Anand Kumar", topic: "English Language Teaching (S&H - English - Mech)", supervisor: "Dr. R. Vennila Nancy Christina (ASP/English, Sree Saraswathi Thiagraja College)", university: "Bharathiyar University", registration: "B1/ENG25PJULY0462/2025", status: "Pursuing" },
    { name: "Mr. M. Sivaperumal", topic: "Nanomaterials (S&H - Chemistry - IT)", supervisor: "Dr. G. Raja (Professor/Chemistry, Paavai Engineering College)", university: "Anna University", registration: "23147691151", status: "Pursuing" },
    { name: "Mr. M. Prasath", topic: "Inventory Control Theory (S&H - Maths - EEE)", supervisor: "Dr. R. Vijaykrishnaraj (AP/Maths, Bharath Institute of Higher Education and Research)", university: "Bharath Institute of Higher Education and Research", registration: "D25SH027", status: "Pursuing" },
    { name: "Mrs. A. Preethi", topic: "Nano Particles (S&H - Chemistry - ECE)", supervisor: "Dr. K. Balachandran (ASP/Chemistry, Vivekanandha College of Engineering for Women)", university: "Anna University", registration: "21237697164", status: "Pursuing" , doj: "23.06.2025", vidwanId: "703524" },
    { name: "Mr. T. Raja", topic: "Decision Making using Fuzzy Logic (S&H - Maths - ECE)", supervisor: "Dr. S. Thilagavathi (AP/Maths, Erode Arts and Science College)", university: "Bharathiar University", registration: "B1/MAT24PJuly0919/2024", status: "Pursuing" , doj: "02.06.2015", vidwanId: "321631" },
    { name: "Mr. S. Sasi Kumar", topic: "Thin Film Technology (S&H - Physics - Civil)", supervisor: "Dr. K. S. Mohan (ASP/Physics, Nandha Engineering College)", university: "Anna University", registration: "25147691163", status: "Pursuing" },
    { name: "Mrs. S. Geetha", topic: "Graph Theory (S&H - Maths - CSE)", supervisor: "Dr. S. Manimekalai (AP/Maths, Dr. N.G.P. Arts & Science College)", university: "Bharathiar University", registration: "B1/MAT24PJULY1102/2024", status: "Pursuing" },
    { name: "Mrs. S. Saranya", topic: "Fuzzy graphs (S&H - Maths - ECE)", supervisor: "Dr. B. Ramesh kumar (ASP/Maths, Vel Tech Rangarajan Dr. Sagunthala R&D Institute of Science and Technology)", university: "Vel Tech Rangarajan Dr. Sagunthala R&D Institute of Science and Technology", registration: "VTDWS2025625", status: "Pursuing" , doj: "25.11.2021", vidwanId: "321588" },
    { name: "Dhineshkumar P", topic: "Molecular Spectroscopy", supervisor: "Dr. G. Thilagavathi (AP/Physics, Nehru Memorial College)", university: "Bharathidasan University", registration: "40008/Ph.D K3/Physics /Part-time /05.02.2026", status: "Pursuing" },
    { name: "Priya P", topic: "Topology", supervisor: "Dr. V. Ramesh (AP/Maths, Kandasamy Kandar's College, P.velur)", university: "Periyar University", registration: "PUAD250271413", status: "Pursuing" }
];

const shGuidedScholars = [];


// ─── ECX (Electronics & Computer Engineering) Data ───
const ecxSupervisors = [];
const ecxPhdHolders = [
    { id: 1, name: "Dr. S.Maragatharaj", topic: "-", year: "-", university: "-", publications: { ij: "-", ic: "-", nj: "-", nc: "-" }, guided: "-", beingGuided: "-", vidwanId: "321065", doj: "15.07.2022" },
    { id: 2, name: "Dr. S.Masilamani", topic: "-", year: "-", university: "-", publications: { ij: "-", ic: "-", nj: "-", nc: "-" }, guided: "-", beingGuided: "-", vidwanId: "725746", doj: "01.07.2026" },
    { id: 3, name: "Dr. K.Priya Mol", topic: "-", year: "-", university: "-", publications: { ij: "-", ic: "-", nj: "-", nc: "-" }, guided: "-", beingGuided: "-", vidwanId: "720361", doj: "09.06.2025" },
    { id: 4, name: "Dr. T.Madhumathi", topic: "-", year: "-", university: "-", publications: { ij: "-", ic: "-", nj: "-", nc: "-" }, guided: "-", beingGuided: "-", vidwanId: "720670", doj: "04.06.2025" }
];
const ecxResearchAreas = [];
const ecxFacilities = [];
const ecxFacultyPursuing = [
    { name: "Mrs. G.Valarmathi", topic: "-", supervisor: "-", university: "-", registration: "-", status: "Pursuing", vidwanId: "720364", doj: "16.03.2026" },
    { name: "Mrs. M.Iswarya", topic: "-", supervisor: "-", university: "-", registration: "-", status: "Pursuing", vidwanId: "719975", doj: "19.06.2026" },
    { name: "Ms. O.Vivedhini", topic: "-", supervisor: "-", university: "-", registration: "-", status: "Pursuing", vidwanId: "720371", doj: "01.06.2026" }
];
const ecxGuidedScholars = [];

// ─── ECE (Electronics & Communication Engineering) Data ───
const eceSupervisors = [
    { id: 1, name: "Dr. N.Santhiyakumari", role: "Professor & Director - R&D", university: "Anna University", department: "ECE", researchArea: "Biomedical Image Processing", supervisorId: "2340297", email: "dirrd@kiot.ac.in", guided: "6", guiding: "6", irins: "https://kiot.irins.org", image: santhiyakumariEceImg, publications: [] , doj: "03.05.2010", vidwanId: "313132" },
    { id: 2, name: "Dr. Kumarganesh S", role: "Professor / ECE", university: "Anna University", department: "ECE", researchArea: "Signal Processing and Communication", supervisorId: "3340060", email: "skgece@kiot.ac.in", guided: "-", guiding: "6", irins: "https://kiot.irins.org", image: kumarganeshEceImg, publications: [] , doj: "04.08.2021", vidwanId: "321603" }
];
const ecePhdHolders = [
    { id: 1, name: "Dr. N.Santhiyakumari", topic: "Implementation of Medical Decision Making System by classification of Ultrasound common Carotid Carotid Artery Images using Intima media thickness measurement", year: "2008", university: "Anna University, Chennai", publications: { ij: 48, ic: 52, nj: "-", nc: 49 , doj: "03.05.2010", vidwanId: "313132" }, guided: "6", beingGuided: "6" },
    { id: 2, name: "Dr. M.Thangavel", topic: "Investigation on Carotid Wall Motion and Texture Classification of Plaques Using Multi-resolution Features", year: "2016", university: "Anna University, Chennai", publications: { ij: 8, ic: 3, nj: "-", nc: 15 , doj: "02.05.2011", vidwanId: "322240" }, guided: "-", beingGuided: "-" },
    { id: 3, name: "Dr. Vijayaraghavan R", topic: "Temporal Analysis of Remote Sensing Data for Identification of Some Tree and Shrub Species in Semiarid Region", year: "2008", university: "Jai Narain Vyas University Jodhpur", publications: { ij: 1, ic: "-", nj: "-", nc: 6 }, guided: "-", beingGuided: "-" },
    { id: 4, name: "Dr. Kumarganesh S", topic: "Certain Investigations on Segmentation and Compression of Brain Tumor Image", year: "2018", university: "Anna University, Chennai", publications: { ij: 41, ic: 19, nj: "-", nc: 5 , doj: "04.08.2021", vidwanId: "321603" }, guided: "-", beingGuided: "6" },
    { id: 5, name: "Dr. Shanmugasundaram P", topic: "Certain Investigations on Computer Aided Colon Cancer Detection in Wireless Capsule Endoscopy Images", year: "2021", university: "Anna University, Chennai", publications: { ij: 9, ic: 8, nj: 1, nc: 19 }, guided: "-", beingGuided: "-" },
    { id: 6, name: "Dr. V.Saravanan", topic: "Certain investigations on active noise control systems for domestic applications by developing the step size of the FxLMS algorithm", year: "2022", university: "Anna University, Chennai", publications: { ij: 8, ic: 6, nj: "-", nc: 11 , doj: "18.05.2011", vidwanId: "305065" }, guided: "-", beingGuided: "-" },
    { id: 7, name: "Dr. G.Rajamanickam", topic: "Wireless Communication", year: "2024", university: "Anna University, Chennai", publications: { ij: 4, ic: 2, nj: 1, nc: 2 , doj: "26.11.2019", vidwanId: "320491" }, guided: "-", beingGuided: "-" },
    { id: 8, name: "Dr. S.Maragatharaj", topic: "Low Power VLSI", year: "2024", university: "Anna University, Chennai", publications: { ij: 11, ic: "-", nj: "-", nc: 9 }, guided: "-", beingGuided: "-" },
    { id: 9, name: "Dr. Santhi T K", topic: "Womanism in the Select Works of Alice Walker", year: "2014", university: "Mother Teresa Women's University, Kodaikanal", publications: { ij: 2, ic: 4, nj: "-", nc: 6 }, guided: "-", beingGuided: "-" },
    { id: 10, name: "Dr. Priya Mol K", topic: "The Brutality of Civilization and the Struggle for Survival: A Study of Jack London’s Select Novels.", year: "2022", university: "Manonmaniam Sundaranar University", publications: { ij: 2, ic: 3, nj: 1, nc: 2 }, guided: "-", beingGuided: "-" }
];
const eceResearchAreas = [ "Signal & Image Processing", "VLSI & Circuit design", "Biomedical Imaging and Sensing", "Wireless Sensor Networks", "Artificial Intelligence" ];
const eceFacilities = [
    { name: "Centre for Medical Imaging", description: "Advanced Signal Processing Kits, Medical Image Analysis Software, Virtual Reality Simulation for Medical Diagnostics", infrastructure: "Virtual Reality headsets, Medical imaging toolkits" },
    { name: "Signal Processing & Communication Lab", description: "Digital Storage Oscilloscopes, Spectrum Analyzers, FPGA Kits, MATLAB with Toolbox", infrastructure: "Oscilloscopes, Spectrum Analyzers, MATLAB licences" },
    { name: "Embedded Systems & VLSI Design Lab", description: "Xilinx Vivado, Cadence Tools, Microcontroller Development Boards (ARM, AVR, PIC)", infrastructure: "Vivado software, Cadence licenses, MCU development boards" }
];
const eceFacultyPursuing = [
    { name: "Mr. S.Premkumar", topic: "Medical Image Processing", supervisor: "Dr. N.Santhiyakumari", university: "Anna University", registration: "Jul & 2023", status: "Pursuing" , doj: "13.06.2019", vidwanId: "320492" },
    { name: "Mr. M.Dineshkumar", topic: "Data Security", supervisor: "Dr. N.Santhiyakumari", university: "Anna University", registration: "Jul & 2023", status: "Pursuing" , doj: "14.12.2020", vidwanId: "320606" },
    { name: "Ms. T.Devika", topic: "Internet of Things", supervisor: "Dr. N.Santhiyakumari", university: "Anna University", registration: "Jul & 2023", status: "Pursuing" },
    { name: "Mr. S.Veerakumar", topic: "Internet of Things", supervisor: "Dr. N.Santhiyakumari", university: "Anna University", registration: "Jul & 2023", status: "Pursuing" , doj: "04.06.2012", vidwanId: "322089" },
    { name: "Mr. M.Chandraman", topic: "Medical Image Processing", supervisor: "Dr. N.Santhiyakumari", university: "Anna University", registration: "Jul & 2023", status: "Pursuing" , doj: "09.06.2011", vidwanId: "321069" },
    { name: "Mr. A.Arun", topic: "Image Retrieval Algorithms", supervisor: "Dr. Nirmala Devi P", university: "Anna University", registration: "Jan & 2018", status: "Pursuing" , doj: "11.06.2018", vidwanId: "321079" },
    { name: "Mr. T.Raja", topic: "Intuitionistic Fuzzy Sets", supervisor: "Dr. S.Thilagavathy", university: "Bharathiar University", registration: "Jan & 2024", status: "Pursuing" , doj: "02.06.2015", vidwanId: "321631" },
    { name: "Mr. A.Tamilselvan", topic: "Configuration of SOC in IoT Industry", supervisor: "Dr. J.Samson Immanuel", university: "Karunya University", registration: "Jan & 2024", status: "Pursuing" , doj: "09.07.2021", vidwanId: "320615" },
    { name: "Mr. K.Rajesh", topic: "Low Power VLSI Design", supervisor: "Dr. H.Victor Du John", university: "Karunya University", registration: "Jan & 2024", status: "Pursuing" , doj: "01.06.2023", vidwanId: "570736" },
    { name: "Mr. S.Elarmathi", topic: "Image Processing", supervisor: "Dr. S.Kumarganesh", university: "Anna University", registration: "Jan & 2025", status: "Pursuing" },
    { name: "Ms. Preethi A", topic: "Nanoparticles -Supercapacitor application", supervisor: "Dr. K.Balachandran", university: "Anna University", registration: "Jan & 2021", status: "Pursuing" }
];
const eceGuidedScholars = [
    { scholar: "S.Madhukumar", topic: "Improving Target Delineation of Tumor Edema Complex through Modified Enhancement, Restoration and Segmentation Schemes", supervisor: "Dr. N.Santhiyakumari", university: "Anna University", status: "Completed" },
    { scholar: "P.Nithyadharshini", topic: "Analysis of hybrid approaches for efficient routing in vehicular ad hoc networks", supervisor: "Dr. N.Santhiyakumari", university: "Anna University", status: "Completed" },
    { scholar: "S.Aruljothi", topic: "Certain investigations on VLSI architectures for image scaling and impulse denoising", supervisor: "Dr. N.Santhiyakumari", university: "Anna University", status: "Completed" },
    { scholar: "N.Sudha", topic: "Computer-Aided Diagnosis for Bowel Images in Wireless Capsule Endoscopy", supervisor: "Dr. N.Santhiyakumari", university: "Anna University", status: "Completed" },
    { scholar: "P.Shanmugasundaram", topic: "Certain Investigations on Computer-Aided Colon Cancer Detection in Wireless Capsule Endoscopy Images", supervisor: "Dr. N.Santhiyakumari", university: "Anna University", status: "Completed" },
    { scholar: "V.Saravanan", topic: "Certain investigations on active noise control systems for domestic applications by developing the step size of the FxLMS algorithm", supervisor: "Dr. N.Santhiyakumari", university: "Anna University", status: "Completed" },
    { scholar: "K.M.Majidha Fathima", topic: "Certain Investigations on Routing Optimization in Wireless Sensor Network by Improving the Quality of Service Parameters Using Modified Splay Tree Algorithm", supervisor: "Dr. N.Santhiyakumari", university: "Anna University", status: "Completed" }
];

// ─── IT (Information Technology) Data ───
const itSupervisors = [];
const itPhdHolders = [];
const itResearchAreas = [ "Wireless Sensor Networks", "Machine Learning", "Information Retrieval", "Data Science and Analytics" ];
const itFacilities = [];
const itFacultyPursuing = [
    { name: "Ms. R.V.Sudha", topic: "Wireless sensor Network", supervisor: "Dr. S.Sakthivel", university: "Anna University", registration: "24121691132", status: "Pursuing" },
    { name: "Ms. S.Lalithambikai", topic: "Wireless sensor Network", supervisor: "Dr. P.Rajendran", university: "Anna University", registration: "24234691278", status: "Pursuing" },
    { name: "Ms. B.Manjubashini", topic: "Wireless Sensor Network", supervisor: "Dr. Murali babu", university: "Anna University", registration: "22244697187", status: "Pursuing" }
];
const itGuidedScholars = [];

// ─── MBA (Management Sciences) Data ───
const mbaSupervisors = [];
const mbaPhdHolders = [];
const mbaResearchAreas = [ "Operations Research", "Finance Analytics", "HR Tech" ];
const mbaFacilities = [];
const mbaFacultyPursuing = [];
const mbaGuidedScholars = [];



// Responsive Horizontal Bar Graph component replacing the Donut chart for better fluid layout
const MiniBarGraph = ({ items, total }) => {
    return (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '9px', width: '100%' }}>
            {items.map((item, idx) => {
                const count = parseInt(item.count, 10);
                const isNum = !isNaN(count);
                const percent = isNum ? ((count / total) * 100).toFixed(1) : "0.0";
                return (
                    <div key={idx} style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: '9.5px', fontWeight: 'bold', color: '#1e3a8a' }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
                                <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: item.color, flexShrink: 0 }} />
                                <span style={{ color: '#475569' }}>{item.name}</span>
                            </div>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                                <span style={{ fontWeight: 800 }}>{item.count}</span>
                                {isNum && (
                                    <span style={{ fontSize: '8.5px', color: '#94a3b8', fontWeight: 600 }}>({percent}%)</span>
                                )}
                            </div>
                        </div>
                        <div style={{ width: '100%', height: '6px', background: '#f1f5f9', borderRadius: '3px', overflow: 'hidden' }}>
                            <div style={{ width: `${percent}%`, height: '100%', background: item.color, borderRadius: '3px' }} />
                        </div>
                    </div>
                );
            })}
        </div>
    );
};

// Interactive Infographic Component
const ResearchSummaryDashboard = ({ deptName }) => {
    const isAIDS = deptName?.toLowerCase() === 'artificial-intelligence-&-data-science' || deptName?.toLowerCase() === 'artificial-intelligence-and-data-science';
    const isCivil = deptName?.toLowerCase() === 'civil-engineering';
    const isCSBS = deptName?.toLowerCase() === 'computer-science-&-business-systems' || deptName?.toLowerCase() === 'computer-science-and-business-systems';
    const isCSE = deptName?.toLowerCase() === 'computer-science-&-engineering';
    const isEEE = deptName?.toLowerCase() === 'electrical-&-electronics-engineering' || deptName?.toLowerCase() === 'electrical-electronics-engineering';
    const isMCA = deptName?.toLowerCase() === 'master-of-computer-applications' || deptName?.toLowerCase() === 'mca';
    const isMech = deptName?.toLowerCase() === 'mechanical-engineering';
    const isSH = deptName?.toLowerCase() === 'science-&-humanities' || deptName?.toLowerCase() === 'science-and-humanities';
    const isECE = deptName?.toLowerCase() === 'electronics-&-communication-engineering' || deptName?.toLowerCase() === 'electronics-and-communication-engineering';
    const isIT = deptName?.toLowerCase() === 'information-technology';
    const isMBA = deptName?.toLowerCase() === 'management-sciences' || deptName?.toLowerCase() === 'mba' || deptName?.toLowerCase() === 'mba-general' || deptName?.toLowerCase() === 'mba-iev'
    const isECX = deptName?.toLowerCase() === 'electronics-&-computer-engineering' || deptName?.toLowerCase() === 'electronics-and-computer-engineering' || deptName?.toLowerCase() === 'ecx' || deptName?.toLowerCase() === 'ecm';

    const periodText = '01.06.2023 to 31.05.2026';
    const totalPubs = isCivil ? 56 : (isAIDS ? 113 : (isCSBS ? 64 : (isCSE ? 400 : (isEEE ? 110 : (isMCA ? 56 : (isMech ? 79 : (isSH ? 19 : (isECE ? 134 : (isIT ? 13 : (isMBA ? '-' : 221))))))))));
    const totalPatentsText = isCivil ? '08' : (isAIDS ? '07' : (isCSBS ? '05' : (isCSE ? '11' : (isEEE ? '15' : (isMCA ? '00' : (isMech ? '10' : (isSH ? '03' : (isECE ? '08' : (isIT ? '-' : (isMBA ? '-' : '08'))))))))));
    const totalGrantsText = isCivil ? '11' : (isAIDS ? '02' : (isCSBS ? '01' : (isCSE ? '02' : (isEEE ? '08' : (isMCA ? '00' : (isMech ? '02' : (isSH ? '00' : (isECE ? '02' : (isIT ? '-' : (isMBA ? '-' : '12'))))))))));
    const totalGrantsLabel = 'Projects / Consultancy Completed';

    const pubLegend = isCivil ? [
        { color: '#1e3a8a', name: 'Journal Publications',        count: 11 },
        { color: '#3b82f6', name: 'Other Journal Publications',   count: 2 },
        { color: '#15803d', name: 'Conference Proceedings',       count: 24 },
        { color: '#7c3aed', name: 'Patents Published / Granted',  count: 7 },
        { color: '#ea580c', name: 'Book / Book Chapters',         count: 4 },
        { color: '#8b5cf6', name: 'Student Publications',         count: 8 },
    ] : (isSH ? [
        { color: '#1e3a8a', name: 'Journal Publications',        count: 12 },
        { color: '#3b82f6', name: 'Other Journal Publications',   count: 0 },
        { color: '#15803d', name: 'Conference Proceedings',       count: 0 },
        { color: '#7c3aed', name: 'Patents Published / Granted',  count: 3 },
        { color: '#ea580c', name: 'Book / Book Chapters',         count: 4 },
        { color: '#8b5cf6', name: 'Student Publications',         count: 0 },
    ] : (isECE ? [
        { color: '#1e3a8a', name: 'Journal Publications',        count: 48 },
        { color: '#3b82f6', name: 'Other Journal Publications',   count: 8 },
        { color: '#15803d', name: 'Conference Proceedings',       count: 52 },
        { color: '#7c3aed', name: 'Patents Published / Granted',  count: 8 },
        { color: '#ea580c', name: 'Book / Book Chapters',         count: '-' },
        { color: '#8b5cf6', name: 'Student Publications',         count: 18 },
    ] : (isIT ? [
        { color: '#1e3a8a', name: 'Journal Publications',        count: '-' },
        { color: '#3b82f6', name: 'Other Journal Publications',   count: '-' },
        { color: '#15803d', name: 'Conference Proceedings',       count: '-' },
        { color: '#7c3aed', name: 'Patents Published / Granted',  count: '-' },
        { color: '#ea580c', name: 'Book / Book Chapters',         count: '-' },
        { color: '#8b5cf6', name: 'Student Publications',         count: '-' },
    ] : (isMBA ? [
        { color: '#1e3a8a', name: 'Journal Publications',        count: '-' },
        { color: '#3b82f6', name: 'Other Journal Publications',   count: '-' },
        { color: '#15803d', name: 'Conference Proceedings',       count: '-' },
        { color: '#7c3aed', name: 'Patents Published / Granted',  count: '-' },
        { color: '#ea580c', name: 'Book / Book Chapters',         count: '-' },
        { color: '#8b5cf6', name: 'Student Publications',         count: '-' },
    ] : (isAIDS ? [
        { color: '#1e3a8a', name: 'Journal Publications',        count: 19 },
        { color: '#3b82f6', name: 'Other Journal Publications',   count: 27 },
        { color: '#15803d', name: 'Conference Proceedings',       count: 33 },
        { color: '#7c3aed', name: 'Patents Published / Granted',  count: 7 },
        { color: '#ea580c', name: 'Book / Book Chapters',         count: 8 },
        { color: '#8b5cf6', name: 'Student Publications',         count: 19 },
    ] : (isCSBS ? [
        { color: '#1e3a8a', name: 'Journal Publications',        count: 5 },
        { color: '#3b82f6', name: 'Other Journal Publications',   count: 10 },
        { color: '#15803d', name: 'Conference Proceedings',       count: 36 },
        { color: '#7c3aed', name: 'Patents Published / Granted',  count: 3 },
        { color: '#ea580c', name: 'Book / Book Chapters',         count: 2 },
        { color: '#8b5cf6', name: 'Student Publications',         count: 8 },
    ] : (isEEE ? [
        { color: '#1e3a8a', name: 'Journal Publications',        count: 8 },
        { color: '#3b82f6', name: 'Other Journal Publications',   count: 10 },
        { color: '#15803d', name: 'Conference Proceedings',       count: 27 },
        { color: '#7c3aed', name: 'Patents Published / Granted',  count: 15 },
        { color: '#ea580c', name: 'Book / Book Chapters',         count: 2 },
        { color: '#8b5cf6', name: 'Student Publications',         count: 65 },
    ] : (isMCA ? [
        { color: '#1e3a8a', name: 'Journal Publications',        count: 1 },
        { color: '#3b82f6', name: 'Other Journal Publications',   count: 1 },
        { color: '#15803d', name: 'Conference Proceedings',       count: 8 },
        { color: '#7c3aed', name: 'Patents Published / Granted',  count: 0 },
        { color: '#ea580c', name: 'Book / Book Chapters',         count: 0 },
        { color: '#8b5cf6', name: 'Student Publications',         count: 46 },
    ] : (isMech ? [
        { color: '#1e3a8a', name: 'Journal Publications',        count: 33 },
        { color: '#3b82f6', name: 'Other Journal Publications',   count: 26 },
        { color: '#15803d', name: 'Conference Proceedings',       count: 26 },
        { color: '#7c3aed', name: 'Patents Published / Granted',  count: 11 },
        { color: '#ea580c', name: 'Book / Book Chapters',         count: 7 },
        { color: '#8b5cf6', name: 'Student Publications',         count: 20 },
    ] : [
        { color: '#1e3a8a', name: 'Journal Publications',        count: 23 },
        { color: '#3b82f6', name: 'Other Journal Publications',   count: 79 },
        { color: '#15803d', name: 'Conference Proceedings',       count: 176 },
        { color: '#7c3aed', name: 'Patents Published / Granted',  count: 11 },
        { color: '#ea580c', name: 'Book / Book Chapters',         count: 20 },
        { color: '#8b5cf6', name: 'Student Publications',         count: 91 },
    ])))))))));

    const patentLegend = isCivil ? [
        { color: '#15803d', name: 'Patents Filed',     count: '01' },
        { color: '#3b82f6', name: 'Patents Published', count: '07' },
        { color: '#ea580c', name: 'Patents Granted',   count: '-' },
    ] : (isSH ? [
        { color: '#15803d', name: 'Patents Filed',     count: '-' },
        { color: '#3b82f6', name: 'Patents Published', count: '03' },
        { color: '#ea580c', name: 'Patents Granted',   count: '-' },
    ] : (isECE ? [
        { color: '#15803d', name: 'Patents Filed',     count: '08' },
        { color: '#3b82f6', name: 'Patents Published', count: '08' },
        { color: '#ea580c', name: 'Patents Granted',   count: '-' },
    ] : (isIT ? [
        { color: '#15803d', name: 'Patents Filed',     count: '-' },
        { color: '#3b82f6', name: 'Patents Published', count: '-' },
        { color: '#ea580c', name: 'Patents Granted',   count: '-' },
    ] : (isMBA ? [
        { color: '#15803d', name: 'Patents Filed',     count: '-' },
        { color: '#3b82f6', name: 'Patents Published', count: '-' },
        { color: '#ea580c', name: 'Patents Granted',   count: '-' },
    ] : (isAIDS ? [
        { color: '#15803d', name: 'Patents Filed',     count: '01' },
        { color: '#3b82f6', name: 'Patents Published', count: '06' },
        { color: '#ea580c', name: 'Patents Granted',   count: '-' },
    ] : (isCSBS ? [
        { color: '#15803d', name: 'Patents Filed',     count: '08' },
        { color: '#3b82f6', name: 'Patents Published', count: '05' },
        { color: '#ea580c', name: 'Patents Granted',   count: '-' },
    ] : (isEEE ? [
        { color: '#15803d', name: 'Patents Filed',     count: '15' },
        { color: '#3b82f6', name: 'Patents Published', count: '15' },
        { color: '#ea580c', name: 'Patents Granted',   count: '08' },
    ] : (isMCA ? [
        { color: '#15803d', name: 'Patents Filed',     count: '-' },
        { color: '#3b82f6', name: 'Patents Published', count: '-' },
        { color: '#ea580c', name: 'Patents Granted',   count: '-' },
    ] : (isMech ? [
        { color: '#15803d', name: 'Patents Filed',     count: '10' },
        { color: '#3b82f6', name: 'Patents Published', count: '10' },
        { color: '#ea580c', name: 'Patents Granted',   count: '01' },
    ] : [
        { color: '#15803d', name: 'Patents Filed',     count: '11' },
        { color: '#3b82f6', name: 'Patents Published', count: '11' },
        { color: '#ea580c', name: 'Patents Granted',   count: '-' },
    ])))))))));
    // shared inline style shortcuts
    const th  = { color:'#1e3a8a', fontWeight:700, fontSize:'9px', padding:'4px 6px', borderBottom:'1px solid #cbd5e1', textAlign:'left',   whiteSpace:'nowrap' };
    const thC = { ...th, textAlign:'center' };
    const td  = { padding:'3px 6px', fontSize:'9px', color:'#334155', verticalAlign:'middle', lineHeight:1.3 };
    const tdC = { padding:'3px 6px', fontSize:'10px', fontWeight:800,  color:'#1e3a8a', textAlign:'center', verticalAlign:'middle' };

    return (
        <div style={{ fontFamily:"'Arial',sans-serif", border:'2px solid #1e3a8a', borderRadius:'10px', overflow:'hidden', marginBottom:'48px', background:'white', boxShadow:'0 8px 40px rgba(30,58,138,.12)' }}>

            {/* ── HEADER ── */}
            <div style={{ background:'#1e3a8a', padding:'10px 20px', display:'flex', alignItems:'center', justifyContent:'space-between', gap:'12px', flexWrap:'wrap' }}>
                <h2 style={{ color:'white', fontWeight:900, fontSize:'15px', letterSpacing:'2px', textTransform:'uppercase', margin:0, lineHeight:1.2 }}>
                    Summary of Research and Consultancy Activities
                </h2>
                {false && (
                    <div style={{ display:'flex', alignItems:'center', gap:'6px', background:'white', padding:'4px 12px', borderRadius:'5px', fontSize:'11px', fontWeight:700, color:'#1e3a8a', whiteSpace:'nowrap', border:'1px solid #1e3a8a' }}>
                        <span>📅</span>
                        <span>PERIOD: {periodText}</span>
                    </div>
                )}
            </div>

            {/* ── KPI ROW ── */}
            <div className="grid grid-cols-1 md:grid-cols-3 border-b-2 border-[#1e3a8a] bg-white">
                {/* Publications */}
                <div className="flex items-center gap-14 p-[14px] px-5 border-b md:border-b-0 md:border-r border-[#cbd5e1] md:border-[#e2e8f0]">
                    <div style={{ background:'#1e3a8a', borderRadius:'50%', width:'60px', height:'60px', display:'flex', alignItems:'center', justifyContent:'center', flexShrink:0 }}>
                        <BookOpen color="white" size={28} />
                    </div>
                    <div>
                        <div style={{ color:'#1e3a8a', fontWeight:800, fontSize:'11px', textTransform:'uppercase', letterSpacing:'1px' }}>Publications</div>
                        <div style={{ color:'#1e3a8a', fontWeight:900, fontSize:'46px', lineHeight:1 }}>{totalPubs}</div>
                        <div style={{ color:'#64748b', fontWeight:600, fontSize:'10px' }}>Total Publications</div>
                    </div>
                </div>
                {/* Patents */}
                <div className="flex items-center gap-14 p-[14px] px-5 border-b md:border-b-0 md:border-r border-[#cbd5e1] md:border-[#e2e8f0]">
                    <div style={{ background:'#15803d', borderRadius:'50%', width:'60px', height:'60px', display:'flex', alignItems:'center', justifyContent:'center', flexShrink:0 }}>
                        <span style={{ color:'white', fontWeight:900, fontSize:'24px' }}>P</span>
                    </div>
                    <div>
                        <div style={{ color:'#15803d', fontWeight:800, fontSize:'11px', textTransform:'uppercase', letterSpacing:'1px' }}>Patents</div>
                        <div style={{ color:'#15803d', fontWeight:900, fontSize:'46px', lineHeight:1 }}>{totalPatentsText}</div>
                        <div style={{ color:'#64748b', fontWeight:600, fontSize:'10px' }}>Total Patents Filed / Published / Granted</div>
                    </div>
                </div>
                {/* Grants */}
                <div className="flex items-center gap-14 p-[14px] px-5">
                    <div style={{ background:'#4c1d95', borderRadius:'50%', width:'60px', height:'60px', display:'flex', alignItems:'center', justifyContent:'center', flexShrink:0 }}>
                        <Handshake color="white" size={28} />
                    </div>
                    <div>
                        <div style={{ color:'#4c1d95', fontWeight:800, fontSize:'11px', textTransform:'uppercase', letterSpacing:'1px' }}>Grants Received</div>
                        <div style={{ color:'#4c1d95', fontWeight:900, fontSize:'46px', lineHeight:1 }}>{totalGrantsText}</div>
                        <div style={{ color:'#64748b', fontWeight:600, fontSize:'10px' }}>{totalGrantsLabel}</div>
                    </div>
                </div>
            </div>

            {/* ── DETAIL ROW ── */}
            <div className="grid grid-cols-1 md:grid-cols-3 bg-white">

                {/* ── PUBLICATIONS PANEL ── */}
                <div className="border-b md:border-b-0 md:border-r border-[#1e3a8a] flex flex-col">
                    <div style={{ background:'#1e3a8a', color:'white', fontWeight:800, fontSize:'12px', textTransform:'uppercase', letterSpacing:'2px', textAlign:'center', padding:'7px' }}>
                        Publications
                    </div>
                    <div style={{ display:'flex', flexDirection:'column', padding: '16px 20px', flex: 1, justifyContent: 'center' }}>
                        <MiniBarGraph items={pubLegend} total={totalPubs} />
                    </div>
                    <div style={{ background:'#dbeafe', borderTop:'1px solid #1e3a8a', padding:'6px 14px', display:'flex', justifyContent:'space-between', alignItems:'center' }}>
                        <span style={{ color:'#1e3a8a', fontWeight:700, fontSize:'11px' }}>Total Publications:</span>
                        <span style={{ color:'#1e3a8a', fontWeight:900, fontSize:'16px' }}>{totalPubs}</span>
                    </div>
                </div>

                {/* ── PATENTS PANEL ── */}
                <div className="border-b md:border-b-0 md:border-r border-[#1e3a8a] flex flex-col">
                    <div style={{ background:'#15803d', color:'white', fontWeight:800, fontSize:'12px', textTransform:'uppercase', letterSpacing:'2px', textAlign:'center', padding:'7px' }}>
                        Patents
                    </div>
                    <div style={{ display:'flex', flexDirection:'column', padding: '16px 20px', flex: 1, justifyContent: 'center' }}>
                        <MiniBarGraph items={patentLegend} total={isAIDS ? 7 : (isCSBS ? 13 : (isCSE ? 22 : (isEEE ? 38 : (isSH ? 3 : 8))))} />
                    </div>
                    <div style={{ background:'#dcfce7', borderTop:'1px solid #15803d', padding:'6px 14px', display:'flex', justifyContent:'space-between', alignItems:'center' }}>
                        <span style={{ color:'#15803d', fontWeight:700, fontSize:'11px' }}>Total Patents:</span>
                        <span style={{ color:'#15803d', fontWeight:900, fontSize:'16px' }}>{totalPatentsText}</span>
                    </div>
                </div>

                {/* ── GRANTS PANEL ── */}
                <div style={{ display:'flex', flexDirection:'column' }}>
                    <div style={{ background:'#4c1d95', color:'white', fontWeight:800, fontSize:'12px', textTransform:'uppercase', letterSpacing:'2px', textAlign:'center', padding:'7px' }}>
                        Grants Received
                    </div>
                    <div style={{ flex:1, display:'flex', flexDirection:'column', padding:'8px', gap:'8px', background:'white' }}>
                        
                        {/* Two side-by-side tables */}
                        <div style={{ display:'flex', gap:'8px', flex:1 }}>
                            {/* Table 1: By Source */}
                            <div style={{ flex:1, border:'1px solid #cbd5e1', borderRadius:'6px', overflow:'hidden', display: 'flex', flexDirection: 'column' }}>
                                <div style={{ background:'#ede9fe', color:'#4c1d95', fontSize:'9px', fontWeight:800, textTransform:'uppercase', textAlign:'center', padding:'4px 2px', borderBottom:'1px solid #cbd5e1', whiteSpace:'nowrap' }}>
                                    By Source ( Funding Agency )
                                </div>
                                <table style={{ width:'100%', borderCollapse:'collapse', fontSize:'8px', flex:1, tableLayout:'fixed' }}>
                                    <tbody>
                                        {isCivil ? (
                                            <>
                                                <tr style={{ borderBottom: '1px solid #e2e8f0' }}>
                                                    <td style={{ padding:'3px 4px', color:'#475569', fontWeight:600, width: '75%' }}>AICTE</td>
                                                    <td style={{ padding:'3px 4px', fontWeight:800, color:'#4c1d95', textAlign:'center', width: '25%' }}>-</td>
                                                </tr>
                                                <tr style={{ borderBottom: '1px solid #e2e8f0' }}>
                                                    <td style={{ padding:'3px 4px', color:'#475569', fontWeight:600 }}>SERB</td>
                                                    <td style={{ padding:'3px 4px', fontWeight:800, color:'#4c1d95', textAlign:'center' }}>-</td>
                                                </tr>
                                                <tr style={{ borderBottom: '1px solid #e2e8f0' }}>
                                                    <td style={{ padding:'3px 4px', color:'#475569', fontWeight:600 }}>National Mission</td>
                                                    <td style={{ padding:'3px 4px', fontWeight:800, color:'#4c1d95', textAlign:'center' }}>-</td>
                                                </tr>
                                                <tr>
                                                    <td style={{ padding:'3px 4px', color:'#475569', fontWeight:600 }}>Institutional Grants</td>
                                                    <td style={{ padding:'3px 4px', fontWeight:800, color:'#4c1d95', textAlign:'center' }}>-</td>
                                                </tr>
                                            </>
                                        ) : isSH ? (
                                            <>
                                                <tr style={{ borderBottom: '1px solid #e2e8f0' }}>
                                                    <td style={{ padding:'3px 4px', color:'#475569', fontWeight:600, width: '75%' }}>AICTE</td>
                                                    <td style={{ padding:'3px 4px', fontWeight:800, color:'#4c1d95', textAlign:'center', width: '25%' }}>-</td>
                                                </tr>
                                                <tr style={{ borderBottom: '1px solid #e2e8f0' }}>
                                                    <td style={{ padding:'3px 4px', color:'#475569', fontWeight:600 }}>SERB</td>
                                                    <td style={{ padding:'3px 4px', fontWeight:800, color:'#4c1d95', textAlign:'center' }}>-</td>
                                                </tr>
                                                <tr style={{ borderBottom: '1px solid #e2e8f0' }}>
                                                    <td style={{ padding:'3px 4px', color:'#475569', fontWeight:600 }}>National Mission</td>
                                                    <td style={{ padding:'3px 4px', fontWeight:800, color:'#4c1d95', textAlign:'center' }}>-</td>
                                                </tr>
                                                <tr>
                                                    <td style={{ padding:'3px 4px', color:'#475569', fontWeight:600 }}>Institutional Grants</td>
                                                    <td style={{ padding:'3px 4px', fontWeight:800, color:'#4c1d95', textAlign:'center' }}>-</td>
                                                </tr>
                                            </>
                                        ) : isAIDS ? (
                                            <>
                                                <tr style={{ borderBottom: '1px solid #e2e8f0' }}>
                                                    <td style={{ padding:'3px 4px', color:'#475569', fontWeight:600, width: '75%' }}>AICTE</td>
                                                    <td style={{ padding:'3px 4px', fontWeight:800, color:'#4c1d95', textAlign:'center', width: '25%' }}>2</td>
                                                </tr>
                                                <tr style={{ borderBottom: '1px solid #e2e8f0' }}>
                                                    <td style={{ padding:'3px 4px', color:'#475569', fontWeight:600, lineHeight: 1.1 }}>SERB</td>
                                                    <td style={{ padding:'3px 4px', fontWeight:800, color:'#4c1d95', textAlign:'center' }}>-</td>
                                                </tr>
                                                <tr style={{ borderBottom: '1px solid #e2e8f0' }}>
                                                    <td style={{ padding:'3px 4px', color:'#475569', fontWeight:600 }}>National Mission</td>
                                                    <td style={{ padding:'3px 4px', fontWeight:800, color:'#4c1d95', textAlign:'center' }}>-</td>
                                                </tr>
                                                <tr>
                                                    <td style={{ padding:'3px 4px', color:'#475569', fontWeight:600 }}>Institutional Grants</td>
                                                    <td style={{ padding:'3px 4px', fontWeight:800, color:'#4c1d95', textAlign:'center' }}>1</td>
                                                </tr>
                                            </>
                                        ) : isCSBS ? (
                                            <>
                                                <tr style={{ borderBottom: '1px solid #e2e8f0' }}>
                                                    <td style={{ padding:'3px 4px', color:'#475569', fontWeight:600, width: '75%' }}>AICTE</td>
                                                    <td style={{ padding:'3px 4px', fontWeight:800, color:'#4c1d95', textAlign:'center', width: '25%' }}>-</td>
                                                </tr>
                                                <tr style={{ borderBottom: '1px solid #e2e8f0' }}>
                                                    <td style={{ padding:'3px 4px', color:'#475569', fontWeight:600, lineHeight: 1.1 }}>SERB</td>
                                                    <td style={{ padding:'3px 4px', fontWeight:800, color:'#4c1d95', textAlign:'center' }}>-</td>
                                                </tr>
                                                <tr style={{ borderBottom: '1px solid #e2e8f0' }}>
                                                    <td style={{ padding:'3px 4px', color:'#475569', fontWeight:600 }}>National Mission</td>
                                                    <td style={{ padding:'3px 4px', fontWeight:800, color:'#4c1d95', textAlign:'center' }}>-</td>
                                                </tr>
                                                <tr>
                                                    <td style={{ padding:'3px 4px', color:'#475569', fontWeight:600 }}>Institutional Grants</td>
                                                    <td style={{ padding:'3px 4px', fontWeight:800, color:'#4c1d95', textAlign:'center' }}>-</td>
                                                </tr>
                                            </>
                                        ) : isEEE ? (
                                            <>
                                                <tr style={{ borderBottom: '1px solid #e2e8f0' }}>
                                                    <td style={{ padding:'3px 4px', color:'#475569', fontWeight:600, width: '75%' }}>IEEE - Power Electronics</td>
                                                    <td style={{ padding:'3px 4px', fontWeight:800, color:'#4c1d95', textAlign:'center', width: '25%' }}>₹1,00,000</td>
                                                </tr>
                                                <tr style={{ borderBottom: '1px solid #e2e8f0' }}>
                                                    <td style={{ padding:'3px 4px', color:'#475569', fontWeight:600, lineHeight: 1.1 }}>AICTE</td>
                                                    <td style={{ padding:'3px 4px', fontWeight:800, color:'#4c1d95', textAlign:'center' }}>-</td>
                                                </tr>
                                                <tr style={{ borderBottom: '1px solid #e2e8f0' }}>
                                                    <td style={{ padding:'3px 4px', color:'#475569', fontWeight:600 }}>SERB</td>
                                                    <td style={{ padding:'3px 4px', fontWeight:800, color:'#4c1d95', textAlign:'center' }}>-</td>
                                                </tr>
                                                <tr>
                                                    <td style={{ padding:'3px 4px', color:'#475569', fontWeight:600 }}>Institutional Grants</td>
                                                    <td style={{ padding:'3px 4px', fontWeight:800, color:'#4c1d95', textAlign:'center' }}>-</td>
                                                </tr>
                                            </>
                                        ) : isMCA ? (
                                            <>
                                                <tr style={{ borderBottom: '1px solid #e2e8f0' }}>
                                                    <td style={{ padding:'3px 4px', color:'#475569', fontWeight:600, width: '75%' }}>AICTE</td>
                                                    <td style={{ padding:'3px 4px', fontWeight:800, color:'#4c1d95', textAlign:'center', width: '25%' }}>-</td>
                                                </tr>
                                                <tr style={{ borderBottom: '1px solid #e2e8f0' }}>
                                                    <td style={{ padding:'3px 4px', color:'#475569', fontWeight:600, lineHeight: 1.1 }}>SERB</td>
                                                    <td style={{ padding:'3px 4px', fontWeight:800, color:'#4c1d95', textAlign:'center' }}>-</td>
                                                </tr>
                                                <tr style={{ borderBottom: '1px solid #e2e8f0' }}>
                                                    <td style={{ padding:'3px 4px', color:'#475569', fontWeight:600 }}>National Mission</td>
                                                    <td style={{ padding:'3px 4px', fontWeight:800, color:'#4c1d95', textAlign:'center' }}>-</td>
                                                </tr>
                                                <tr>
                                                    <td style={{ padding:'3px 4px', color:'#475569', fontWeight:600 }}>Institutional Grants</td>
                                                    <td style={{ padding:'3px 4px', fontWeight:800, color:'#4c1d95', textAlign:'center' }}>-</td>
                                                </tr>
                                            </>
                                        ) : isMech ? (
                                            <>
                                                <tr style={{ borderBottom: '1px solid #e2e8f0' }}>
                                                    <td style={{ padding:'3px 4px', color:'#475569', fontWeight:600, width: '75%' }}>AICTE</td>
                                                    <td style={{ padding:'3px 4px', fontWeight:800, color:'#4c1d95', textAlign:'center', width: '25%' }}>-</td>
                                                </tr>
                                                <tr style={{ borderBottom: '1px solid #e2e8f0' }}>
                                                    <td style={{ padding:'3px 4px', color:'#475569', fontWeight:600, lineHeight: 1.1 }}>SERB</td>
                                                    <td style={{ padding:'3px 4px', fontWeight:800, color:'#4c1d95', textAlign:'center' }}>-</td>
                                                </tr>
                                                <tr style={{ borderBottom: '1px solid #e2e8f0' }}>
                                                    <td style={{ padding:'3px 4px', color:'#475569', fontWeight:600 }}>National Mission</td>
                                                    <td style={{ padding:'3px 4px', fontWeight:800, color:'#4c1d95', textAlign:'center' }}>-</td>
                                                </tr>
                                                <tr>
                                                    <td style={{ padding:'3px 4px', color:'#475569', fontWeight:600 }}>Institutional Grants</td>
                                                    <td style={{ padding:'3px 4px', fontWeight:800, color:'#4c1d95', textAlign:'center' }}>-</td>
                                                </tr>
                                            </>
                                        ) : (isIT || isMBA) ? (
                                            <>
                                                <tr style={{ borderBottom: '1px solid #e2e8f0' }}>
                                                    <td style={{ padding:'3px 4px', color:'#475569', fontWeight:600, width: '75%' }}>AICTE</td>
                                                    <td style={{ padding:'3px 4px', fontWeight:800, color:'#4c1d95', textAlign:'center', width: '25%' }}>-</td>
                                                </tr>
                                                <tr style={{ borderBottom: '1px solid #e2e8f0' }}>
                                                    <td style={{ padding:'3px 4px', color:'#475569', fontWeight:600, lineHeight: 1.1 }}>SERB</td>
                                                    <td style={{ padding:'3px 4px', fontWeight:800, color:'#4c1d95', textAlign:'center' }}>-</td>
                                                </tr>
                                                <tr style={{ borderBottom: '1px solid #e2e8f0' }}>
                                                    <td style={{ padding:'3px 4px', color:'#475569', fontWeight:600 }}>National Mission</td>
                                                    <td style={{ padding:'3px 4px', fontWeight:800, color:'#4c1d95', textAlign:'center' }}>-</td>
                                                </tr>
                                                <tr>
                                                    <td style={{ padding:'3px 4px', color:'#475569', fontWeight:600 }}>Institutional Grants</td>
                                                    <td style={{ padding:'3px 4px', fontWeight:800, color:'#4c1d95', textAlign:'center' }}>-</td>
                                                </tr>
                                            </>
                                        ) : (
                                            <>
                                                <tr style={{ borderBottom: '1px solid #e2e8f0' }}>
                                                    <td style={{ padding:'3px 4px', color:'#475569', fontWeight:600, width: '75%' }}>AICTE</td>
                                                    <td style={{ padding:'3px 4px', fontWeight:800, color:'#4c1d95', textAlign:'center', width: '25%' }}>6.5 Lakhs (1)</td>
                                                </tr>
                                                <tr style={{ borderBottom: '1px solid #e2e8f0' }}>
                                                    <td style={{ padding:'3px 4px', color:'#475569', fontWeight:600, lineHeight: 1.1 }}>SERB</td>
                                                    <td style={{ padding:'3px 4px', fontWeight:800, color:'#4c1d95', textAlign:'center' }}>-</td>
                                                </tr>
                                                <tr style={{ borderBottom: '1px solid #e2e8f0' }}>
                                                    <td style={{ padding:'3px 4px', color:'#475569', fontWeight:600 }}>National Mission</td>
                                                    <td style={{ padding:'3px 4px', fontWeight:800, color:'#4c1d95', textAlign:'center' }}>-</td>
                                                </tr>
                                                <tr>
                                                    <td style={{ padding:'3px 4px', color:'#475569', fontWeight:600 }}>Institutional Grants</td>
                                                    <td style={{ padding:'3px 4px', fontWeight:800, color:'#4c1d95', textAlign:'center' }}>2.5 Lakhs</td>
                                                </tr>
                                            </>
                                        )}
                                    </tbody>
                                </table>
                            </div>

                            {/* Table 2: By Department or Detail */}
                            <div style={{ flex:1, border:'1px solid #cbd5e1', borderRadius:'6px', overflow:'hidden', display: 'flex', flexDirection: 'column' }}>
                                <div style={{ background:'#ede9fe', color:'#4c1d95', fontSize:'9px', fontWeight:800, textTransform:'uppercase', textAlign:'center', padding:'4px 2px', borderBottom:'1px solid #cbd5e1', whiteSpace:'nowrap' }}>
                                    {isCivil || isAIDS || isCSBS || isCSE || isEEE || isMCA || isSH || isECE || isIT || isMBA ? "Project Detail" : "By Department / Section"}
                                </div>
                                <table style={{ width:'100%', borderCollapse:'collapse', fontSize:'8px', flex:1, tableLayout:'fixed' }}>
                                    <tbody>
                                        {isCivil ? (
                                            <>
                                                <tr style={{ borderBottom: '1px solid #e2e8f0' }}>
                                                    <td style={{ padding:'2px 4px', color:'#475569', fontWeight:600, width: '75%', lineHeight: 1.1 }}>Sponsored Projects</td>
                                                    <td style={{ padding:'2px 4px', fontWeight:800, color:'#4c1d95', textAlign:'center', width: '25%' }}>-</td>
                                                </tr>
                                                <tr style={{ borderBottom: '1px solid #e2e8f0' }}>
                                                    <td style={{ padding:'2px 4px', color:'#475569', fontWeight:600, lineHeight: 1.1 }}>Consultancy</td>
                                                    <td style={{ padding:'2px 4px', fontWeight:800, color:'#4c1d95', textAlign:'center' }}>11</td>
                                                </tr>
                                                <tr>
                                                    <td style={{ padding:'2px 4px', color:'#475569', fontWeight:600, lineHeight: 1.1 }}>Collaborative</td>
                                                    <td style={{ padding:'2px 4px', fontWeight:800, color:'#4c1d95', textAlign:'center' }}>-</td>
                                                </tr>
                                            </>
                                        ) : isSH ? (
                                            <>
                                                <tr style={{ borderBottom: '1px solid #e2e8f0' }}>
                                                    <td style={{ padding:'2px 4px', color:'#475569', fontWeight:600, width: '75%', lineHeight: 1.1 }}>Sponsored Projects</td>
                                                    <td style={{ padding:'2px 4px', fontWeight:800, color:'#4c1d95', textAlign:'center', width: '25%' }}>-</td>
                                                </tr>
                                                <tr style={{ borderBottom: '1px solid #e2e8f0' }}>
                                                    <td style={{ padding:'2px 4px', color:'#475569', fontWeight:600, lineHeight: 1.1 }}>Consultancy</td>
                                                    <td style={{ padding:'2px 4px', fontWeight:800, color:'#4c1d95', textAlign:'center' }}>-</td>
                                                </tr>
                                                <tr>
                                                    <td style={{ padding:'2px 4px', color:'#475569', fontWeight:600, lineHeight: 1.1 }}>Collaborative</td>
                                                    <td style={{ padding:'2px 4px', fontWeight:800, color:'#4c1d95', textAlign:'center' }}>-</td>
                                                </tr>
                                            </>
                                        ) : isAIDS ? (
                                            <>
                                                <tr style={{ borderBottom: '1px solid #e2e8f0' }}>
                                                    <td style={{ padding:'2px 4px', color:'#475569', fontWeight:600, width: '75%', lineHeight: 1.1 }}>GOC & RPS (AICTE)</td>
                                                    <td style={{ padding:'2px 4px', fontWeight:800, color:'#4c1d95', textAlign:'center', width: '25%' }}>2</td>
                                                </tr>
                                                <tr style={{ borderBottom: '1px solid #e2e8f0' }}>
                                                    <td style={{ padding:'2px 4px', color:'#475569', fontWeight:600, lineHeight: 1.1 }}>URP (Institutional)</td>
                                                    <td style={{ padding:'2px 4px', fontWeight:800, color:'#4c1d95', textAlign:'center' }}>1</td>
                                                </tr>
                                                <tr>
                                                    <td style={{ padding:'2px 4px', color:'#475569', fontWeight:600, lineHeight: 1.1 }}>Consultancy</td>
                                                    <td style={{ padding:'2px 4px', fontWeight:800, color:'#4c1d95', textAlign:'center' }}>-</td>
                                                </tr>
                                            </>
                                        ) : isCSBS ? (
                                            <>
                                                <tr style={{ borderBottom: '1px solid #e2e8f0' }}>
                                                    <td style={{ padding:'2px 4px', color:'#475569', fontWeight:600, width: '75%', lineHeight: 1.1 }}>Sponsored Projects</td>
                                                    <td style={{ padding:'2px 4px', fontWeight:800, color:'#4c1d95', textAlign:'center', width: '25%' }}>-</td>
                                                </tr>
                                                <tr style={{ borderBottom: '1px solid #e2e8f0' }}>
                                                    <td style={{ padding:'2px 4px', color:'#475569', fontWeight:600, lineHeight: 1.1 }}>Consultancy</td>
                                                    <td style={{ padding:'2px 4px', fontWeight:800, color:'#4c1d95', textAlign:'center' }}>01</td>
                                                </tr>
                                                <tr>
                                                    <td style={{ padding:'2px 4px', color:'#475569', fontWeight:600, lineHeight: 1.1 }}>Collaborative</td>
                                                    <td style={{ padding:'2px 4px', fontWeight:800, color:'#4c1d95', textAlign:'center' }}>-</td>
                                                </tr>
                                            </>
                                        ) : isEEE ? (
                                            <>
                                                <tr style={{ borderBottom: '1px solid #e2e8f0' }}>
                                                    <td style={{ padding:'2px 4px', color:'#475569', fontWeight:600, width: '75%', lineHeight: 1.1 }}>Consultancy</td>
                                                    <td style={{ padding:'2px 4px', fontWeight:800, color:'#4c1d95', textAlign:'center', width: '25%' }}>₹5,43,045</td>
                                                </tr>
                                                <tr style={{ borderBottom: '1px solid #e2e8f0' }}>
                                                    <td style={{ padding:'2px 4px', color:'#475569', fontWeight:600, lineHeight: 1.1 }}>Sponsored Research</td>
                                                    <td style={{ padding:'2px 4px', fontWeight:800, color:'#4c1d95', textAlign:'center' }}>IEEE ₹1,00,000</td>
                                                </tr>
                                                <tr>
                                                    <td style={{ padding:'2px 4px', color:'#475569', fontWeight:600, lineHeight: 1.1 }}>Collaborative</td>
                                                    <td style={{ padding:'2px 4px', fontWeight:800, color:'#4c1d95', textAlign:'center' }}>-</td>
                                                </tr>
                                            </>
                                        ) : isMCA ? (
                                            <>
                                                <tr style={{ borderBottom: '1px solid #e2e8f0' }}>
                                                    <td style={{ padding:'2px 4px', color:'#475569', fontWeight:600, width: '75%', lineHeight: 1.1 }}>Sponsored Projects</td>
                                                    <td style={{ padding:'2px 4px', fontWeight:800, color:'#4c1d95', textAlign:'center', width: '25%' }}>-</td>
                                                </tr>
                                                <tr style={{ borderBottom: '1px solid #e2e8f0' }}>
                                                    <td style={{ padding:'2px 4px', color:'#475569', fontWeight:600, lineHeight: 1.1 }}>Consultancy</td>
                                                    <td style={{ padding:'2px 4px', fontWeight:800, color:'#4c1d95', textAlign:'center' }}>-</td>
                                                </tr>
                                                <tr>
                                                    <td style={{ padding:'2px 4px', color:'#475569', fontWeight:600, lineHeight: 1.1 }}>Collaborative</td>
                                                    <td style={{ padding:'2px 4px', fontWeight:800, color:'#4c1d95', textAlign:'center' }}>-</td>
                                                </tr>
                                            </>
                                        ) : isMech ? (
                                            <>
                                                <tr style={{ borderBottom: '1px solid #e2e8f0' }}>
                                                    <td style={{ padding:'2px 4px', color:'#475569', fontWeight:600, width: '75%', lineHeight: 1.1 }}>Sponsored Projects</td>
                                                    <td style={{ padding:'2px 4px', fontWeight:800, color:'#4c1d95', textAlign:'center', width: '25%' }}>Nil</td>
                                                </tr>
                                                <tr style={{ borderBottom: '1px solid #e2e8f0' }}>
                                                    <td style={{ padding:'2px 4px', color:'#475569', fontWeight:600, lineHeight: 1.1 }}>Consultancy</td>
                                                    <td style={{ padding:'2px 4px', fontWeight:800, color:'#4c1d95', textAlign:'center' }}>₹9,00,000</td>
                                                </tr>
                                                <tr>
                                                    <td style={{ padding:'2px 4px', color:'#475569', fontWeight:600, lineHeight: 1.1 }}>Collaborative</td>
                                                    <td style={{ padding:'2px 4px', fontWeight:800, color:'#4c1d95', textAlign:'center' }}>-</td>
                                                </tr>
                                            </>
                                        ) : (isIT || isMBA) ? (
                                            <>
                                                <tr style={{ borderBottom: '1px solid #e2e8f0' }}>
                                                    <td style={{ padding:'2px 4px', color:'#475569', fontWeight:600, width: '75%', lineHeight: 1.1 }}>Sponsored Projects</td>
                                                    <td style={{ padding:'2px 4px', fontWeight:800, color:'#4c1d95', textAlign:'center', width: '25%' }}>-</td>
                                                </tr>
                                                <tr style={{ borderBottom: '1px solid #e2e8f0' }}>
                                                    <td style={{ padding:'2px 4px', color:'#475569', fontWeight:600, lineHeight: 1.1 }}>Consultancy</td>
                                                    <td style={{ padding:'2px 4px', fontWeight:800, color:'#4c1d95', textAlign:'center' }}>-</td>
                                                </tr>
                                                <tr>
                                                    <td style={{ padding:'2px 4px', color:'#475569', fontWeight:600, lineHeight: 1.1 }}>Collaborative</td>
                                                    <td style={{ padding:'2px 4px', fontWeight:800, color:'#4c1d95', textAlign:'center' }}>-</td>
                                                </tr>
                                            </>
                                        ) : (
                                            <>
                                                <tr style={{ borderBottom: '1px solid #e2e8f0' }}>
                                                    <td style={{ padding:'2px 4px', color:'#475569', fontWeight:600, width: '75%', lineHeight: 1.1 }}>Sponsored Projects</td>
                                                    <td style={{ padding:'2px 4px', fontWeight:800, color:'#4c1d95', textAlign:'center', width: '25%' }}>1 Proj, 1 FDP, 1 Conf</td>
                                                </tr>
                                                <tr style={{ borderBottom: '1px solid #e2e8f0' }}>
                                                    <td style={{ padding:'2px 4px', color:'#475569', fontWeight:600, lineHeight: 1.1 }}>Consultancy</td>
                                                    <td style={{ padding:'2px 4px', fontWeight:800, color:'#4c1d95', textAlign:'center' }}>1.5 Lakhs (2)</td>
                                                </tr>
                                                <tr>
                                                    <td style={{ padding:'2px 4px', color:'#475569', fontWeight:600, lineHeight: 1.1 }}>Collaborative</td>
                                                    <td style={{ padding:'2px 4px', fontWeight:800, color:'#4c1d95', textAlign:'center' }}>-</td>
                                                </tr>
                                            </>
                                        )}
                                    </tbody>
                                </table>
                            </div>
                        </div>

                        {/* Bottom Row with Rupee Bag and Table */}
                        <div style={{ border:'1px solid #cbd5e1', borderRadius:'6px', overflow:'hidden', background: '#f8fafc', padding: '6px 10px', display: 'flex', alignItems: 'center', gap: '16px' }}>
                            <div style={{ width:'36px', height:'36px', borderRadius:'50%', background:'#4c1d95', display:'flex', alignItems:'center', justifyContent:'center', flexShrink:0, boxShadow: '0 2px 8px rgba(76,29,149,0.2)' }}>
                                <span style={{ color:'white', fontSize:'20px', fontWeight:'bold' }}>₹</span>
                            </div>
                            <table style={{ flex:1, borderCollapse:'collapse', fontSize:'9px', tableLayout: 'fixed' }}>
                                <tbody>
                                    <tr style={{ borderBottom: '1px solid #e2e8f0' }}>
                                        <td style={{ padding:'3px 0', color:'#475569', fontWeight:700 }}>Consultancy</td>
                                        <td style={{ padding:'3px 0', fontWeight:900, color:'#4c1d95', textAlign:'right', paddingRight: '4px' }}>{isCivil ? "11" : (isAIDS ? "2" : (isCSBS ? "01" : (isEEE ? "₹5,43,045" : (isMCA ? "-" : (isMech ? "₹9,00,000" : (isSH ? "-" : (isECE ? "1.5 Lakhs (2)" : (isIT || isMBA ? "-" : "1.5 Lakhs (2)"))))))))}</td>
                                    </tr>
                                    <tr>
                                        <td style={{ padding:'3px 0', color:'#475569', fontWeight:700 }}>Sponsored Research</td>
                                        <td style={{ padding:'3px 0', fontWeight:900, color:'#4c1d95', textAlign:'right', paddingRight: '4px' }}>{isCivil ? "-" : (isAIDS ? "3" : (isCSBS ? "-" : (isEEE ? "₹1,00,000" : (isMCA ? "-" : (isMech ? "-" : (isSH ? "-" : (isECE ? "6.5 Lakhs (1)" : (isIT || isMBA ? "-" : "6.5 Lakhs (1)"))))))))}</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                    </div>

                    <div style={{ background:'#ede9fe', borderTop:'1px solid #4c1d95', padding:'6px 14px', display:'flex', justifyContent:'space-between', alignItems:'center' }}>
                        <span style={{ color:'#4c1d95', fontWeight:700, fontSize:'10px' }}>Total Projects / Consultancy Completed:</span>
                        <span style={{ color:'#4c1d95', fontWeight:900, fontSize:'16px' }}>{isCivil ? "11" : (isAIDS ? "02" : (isCSBS ? "01" : (isEEE ? "08" : (isMCA ? "Nil" : (isMech ? "02" : (isSH ? "Nil" : (isECE ? "2" : (isIT || isMBA ? "-" : "2"))))))))}</span>
                    </div>

                </div>

            </div>
        </div>
    );
};

// Reusable Empty State component for empty tab panels
const EmptyState = ({ message, icon: Icon }) => {
    return (
        <div className="col-span-full w-full bg-white rounded-3xl p-12 border border-slate-200 shadow-lg flex flex-col items-center justify-center text-center max-w-xl mx-auto my-6">
            <div className="w-16 h-16 bg-[#eef2ff] rounded-2xl flex items-center justify-center text-[#224292] mb-6 shadow-sm border border-slate-100">
                <Icon size={30} className="text-[#224292]" />
            </div>
            <h3 className="text-base font-black text-[#224292] uppercase tracking-wider mb-2">No Registered Records</h3>
            <p className="text-xs font-semibold text-slate-400 max-w-md leading-relaxed">{message}</p>
        </div>
    )
}

const ResearchResourcesPage = () => {
    const { deptName } = useParams()
    const navigate = useNavigate()

    const isCSE = deptName?.toLowerCase() === 'computer-science-&-engineering'
    const isAIDS = deptName?.toLowerCase() === 'artificial-intelligence-&-data-science' || deptName?.toLowerCase() === 'artificial-intelligence-and-data-science'
    const isCivil = deptName?.toLowerCase() === 'civil-engineering'
    const isCSBS = deptName?.toLowerCase() === 'computer-science-&-business-systems' || deptName?.toLowerCase() === 'computer-science-and-business-systems'
    const isEEE = deptName?.toLowerCase() === 'electrical-&-electronics-engineering' || deptName?.toLowerCase() === 'electrical-electronics-engineering'
    const isMCA = deptName?.toLowerCase() === 'master-of-computer-applications' || deptName?.toLowerCase() === 'mca'
    const isMech = deptName?.toLowerCase() === 'mechanical-engineering'
    const isSH = deptName?.toLowerCase() === 'science-&-humanities' || deptName?.toLowerCase() === 'science-and-humanities'
    const isECE = deptName?.toLowerCase() === 'electronics-&-communication-engineering' || deptName?.toLowerCase() === 'electronics-and-communication-engineering'
    const isIT = deptName?.toLowerCase() === 'information-technology'
    const isMBA = deptName?.toLowerCase() === 'management-sciences' || deptName?.toLowerCase() === 'mba' || deptName?.toLowerCase() === 'mba-general' || deptName?.toLowerCase() === 'mba-iev'
    const isECX = deptName?.toLowerCase() === 'electronics-&-computer-engineering' || deptName?.toLowerCase() === 'electronics-and-computer-engineering' || deptName?.toLowerCase() === 'ecx' || deptName?.toLowerCase() === 'ecm'
    const isSinglePageDashboard = true

    const supervisors = isCivil ? civilSupervisors : (isAIDS ? aidsSupervisors : (isCSBS ? csbsSupervisors : (isEEE ? eeeSupervisors : (isMCA ? mcaSupervisors : (isMech ? mechSupervisors : (isSH ? shSupervisors : (isECE ? eceSupervisors : (isIT ? itSupervisors : (isMBA ? mbaSupervisors : (isECX ? ecxSupervisors : cseSupervisors))))))))))
    const phdHolders = isCivil ? civilPhdHolders : (isAIDS ? aidsPhdHolders : (isCSBS ? csbsPhdHolders : (isEEE ? eeePhdHolders : (isMCA ? mcaPhdHolders : (isMech ? mechPhdHolders : (isSH ? shPhdHolders : (isECE ? ecePhdHolders : (isIT ? itPhdHolders : (isMBA ? mbaPhdHolders : (isECX ? ecxPhdHolders : csePhdHolders))))))))))
    const researchAreas = isCivil ? civilResearchAreas : (isAIDS ? aidsResearchAreas : (isCSBS ? csbsResearchAreas : (isEEE ? eeeResearchAreas : (isMCA ? mcaResearchAreas : (isMech ? mechResearchAreas : (isSH ? shResearchAreas : (isECE ? eceResearchAreas : (isIT ? itResearchAreas : (isMBA ? mbaResearchAreas : (isECX ? ecxResearchAreas : cseResearchAreas))))))))))
    const facilities = isCivil ? civilFacilities : (isAIDS ? aidsFacilities : (isCSBS ? csbsFacilities : (isEEE ? eeeFacilities : (isMCA ? mcaFacilities : (isMech ? mechFacilities : (isSH ? shFacilities : (isECE ? eceFacilities : (isIT ? itFacilities : (isMBA ? mbaFacilities : (isECX ? ecxFacilities : cseFacilities))))))))))
    const facultyPursuing = isCivil ? civilFacultyPursuing : (isAIDS ? aidsFacultyPursuing : (isCSBS ? csbsFacultyPursuing : (isEEE ? eeeFacultyPursuing : (isMCA ? mcaFacultyPursuing : (isMech ? mechFacultyPursuing : (isSH ? shFacultyPursuing : (isECE ? eceFacultyPursuing : (isIT ? itFacultyPursuing : (isMBA ? mbaFacultyPursuing : (isECX ? ecxFacultyPursuing : cseFacultyPursuing))))))))))
    const guidedScholars = isCivil ? civilGuidedScholars : (isAIDS ? aidsGuidedScholars : (isCSBS ? csbsGuidedScholars : (isEEE ? eeeGuidedScholars : (isMCA ? mcaGuidedScholars : (isMech ? mechGuidedScholars : (isSH ? shGuidedScholars : (isECE ? eceGuidedScholars : (isIT ? itGuidedScholars : (isMBA ? mbaGuidedScholars : (isECX ? ecxGuidedScholars : cseGuidedScholars))))))))))

    // Interactive States for CSE Single Page view
    const [activeTab, setActiveTab] = useState(isAIDS || isCivil || isCSBS || isMCA || isIT || isMBA ? 'scholars' : 'supervisors')
    const [selectedSuper, setSelectedSuper] = useState(null)

    const formatDeptName = (name) => {
        if (!name) return 'Departmentwise'
        const decoded = decodeURIComponent(name).toLowerCase()
        if (decoded === 'computer-science-&-business-systems' || decoded === 'computer-science-and-business-systems') {
            return 'Computer Science & Business Systems'
        }
        if (decoded === 'master-of-computer-applications' || decoded === 'mca') {
            return 'Master of Computer Applications'
        }
        if (decoded === 'science-&-humanities' || decoded === 'science-and-humanities') {
            return 'Science & Humanities'
        }
        return decodeURIComponent(name)
            .split('-')
            .map((word) => {
                if (word === '&') return '&'
                return word.charAt(0).toUpperCase() + word.slice(1)
            })
            .join(' ')
    }

    const getResourceItems = () => {
        const lowerDept = deptName?.toLowerCase()

        if (lowerDept === 'mechanical-engineering') {
            return [
                { id: 1, title: 'List of Ph.D Supervisors', icon: Users, path: 'phd-supervisors' },
                { id: 2, title: 'Major Research Areas', icon: Target, path: 'research-areas' },
                { id: 3, title: 'List of Ph.Ds in the Department', icon: Award, path: 'phd-holders' },
                { id: 4, title: 'List of Faculty pursuing Ph.D', icon: GraduationCap, path: 'pursuing-phd' },
                { id: 5, title: 'List of Ph.D Scholars Guided', icon: UserCheck, path: 'guided-scholars' },
                { id: 6, title: 'Research Facilities', icon: Microscope, path: 'facilities' },
                { id: 7, title: 'Sponsored Research Projects', icon: Handshake, path: 'sponsored-projects' },
                { id: 8, title: 'Publication in International Journal', icon: FileText, path: 'international-publications' },
            ]
        }

        if (lowerDept === 'electronics-&-communication-engineering') {
            return [
                { id: 1, title: 'List of Ph.D Supervisors', icon: Users, path: 'phd-supervisors' },
                { id: 2, title: 'Major Research Areas', icon: Target, path: 'research-areas' },
                { id: 3, title: 'List of Ph.Ds in the Department', icon: Award, path: 'phd-holders' },
                { id: 4, title: 'List of Faculty pursuing Ph.D', icon: GraduationCap, path: 'pursuing-phd' },
                { id: 5, title: 'List of Ph.D Scholars Guided', icon: UserCheck, path: 'guided-scholars' },
                { id: 6, title: 'Research Facilities', icon: Microscope, path: 'facilities' },
                { id: 7, title: 'Centre for Medical Imaging', icon: Stethoscope, path: 'medical-imaging' },
                { id: 8, title: 'Publication in Indexed Journal', icon: FileText, path: 'international-publications' },
                { id: 9, title: 'Publication in Non Indexed Journal', icon: FileText, path: 'publications-non-indexed' },
                { id: 10, title: 'Publication in Conference', icon: Presentation, path: 'conferences' },
                { id: 11, title: 'Research Proposal', icon: FileEdit, path: 'research-proposals' },
                { id: 12, title: 'Consultancy', icon: Handshake, path: 'consultancy' },
                { id: 13, title: 'Projects Sanctioned', icon: CheckCircle2, path: 'sponsored-projects' },
            ]
        }

        if (lowerDept === 'electrical-&-electronics-engineering') {
            return [
                { id: 1, title: 'List of Ph.D Supervisors', icon: Users, path: 'phd-supervisors' },
                { id: 2, title: 'Major Research Areas', icon: Target, path: 'research-areas' },
                { id: 3, title: 'List of Ph.Ds in the Department', icon: Award, path: 'phd-holders' },
                { id: 4, title: 'List of Faculty pursuing Ph.D', icon: GraduationCap, path: 'pursuing-phd' },
                { id: 5, title: 'List of Ph.D Scholars Guided by the Department Supervisors', icon: UserCheck, path: 'guided-scholars' },
                { id: 6, title: 'Facilities for doing Research', icon: Microscope, path: 'facilities' },
                { id: 7, title: 'List of Publications', icon: FileText, path: 'international-publications' },
            ]
        }

        if (lowerDept === 'civil-engineering') {
            return [
                { id: 1, title: 'Major Research Areas', icon: Target, path: 'research-areas' },
                { id: 2, title: 'List of Ph.Ds In Civil Engineering Department', icon: Award, path: 'phd-holders' },
                { id: 3, title: 'List of Civil Faculty Pursuing Ph.D', icon: GraduationCap, path: 'pursuing-phd' },
                { id: 4, title: 'Facilities for doing Research', icon: Microscope, path: 'facilities' },
                { id: 5, title: 'List of Sponsored Projects', icon: Handshake, path: 'sponsored-projects' },
                { id: 6, title: 'List of Publications by Civil Faculties', icon: FileText, path: 'international-publications' },
            ]
        }

        if (lowerDept === 'information-technology') {
            return [
                { id: 1, title: 'Major Research Areas of the Department', icon: Target, path: 'research-areas' },
                { id: 2, title: 'List of Ph.Ds in the Department', icon: Award, path: 'phd-holders' },
                { id: 3, title: 'List of Faculty pursuing Ph.D', icon: GraduationCap, path: 'pursuing-phd' },
                { id: 4, title: 'List of Publications - International Journals', icon: BookOpen, path: 'international-publications' },
            ]
        }

        return [
            { id: 1, title: 'List of Ph.D Supervisors', icon: Users, path: 'phd-supervisors' },
            { id: 2, title: 'Major Research Areas of the Department', icon: Target, path: 'research-areas' },
            { id: 3, title: 'List of Ph.Ds in the Department', icon: Award, path: 'phd-holders' },
            { id: 4, title: 'List of Faculty pursuing Ph.D', icon: GraduationCap, path: 'pursuing-phd' },
            { id: 5, title: 'List of Ph.D Scholars Guided', icon: UserCheck, path: 'guided-scholars' },
            { id: 6, title: 'Facilities for doing Research', icon: Microscope, path: 'facilities' },
            { id: 7, title: 'List of Sponsored Projects', icon: Handshake, path: 'sponsored-projects' },
            { id: 8, title: 'List of Publications - International Journals', icon: BookOpen, path: 'international-publications' },
        ]
    }

    const resourceItems = getResourceItems()

    return (
        <div className="min-h-screen bg-[#f6f9fc] font-sans pb-20">
            <div className="max-w-6xl mx-auto px-6 pt-4 pb-6 lg:pt-6 lg:pb-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mb-6"
                >
                    {false && (
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#eef2ff] rounded-full text-[#1e4a76] text-[11px] font-black tracking-wider mb-3">
                            <Search size={14} />
                            <span>Research & Doctoral Initiatives</span>
                        </div>
                    )}

                    <h1 className="text-2xl lg:text-3xl font-bold text-[#224292] leading-tight mb-3">
                        <span className="text-[#ffc107]">Research in</span> {formatDeptName(deptName)}
                    </h1>

                    <div className="max-w-3xl py-0.5">
                        <p className="text-black text-xs font-semibold leading-relaxed">
                            Comprehensive academic documentation - Ph.D supervision, research areas, publications, facilities, and sponsored projects at a glance.
                        </p>
                    </div>
                </motion.div>

                {/* ─── EXCLUSIVE SINGLE-PAGE DASHBOARD VIEW ─── */}
                {isSinglePageDashboard ? (
                    <div>
                        {/* Infographic Dashboard Panel */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 }}
                        >
                            <ResearchSummaryDashboard deptName={deptName} />
                        </motion.div>

                        {/* Interactive Navigation Tabs */}
                        <div className="flex flex-wrap gap-2 mb-10 border-b border-slate-200 pb-5">
                            {[
                                { id: 'supervisors', label: 'Ph.D Supervisors', icon: Users, show: supervisors.length > 0 || isECX },
                                { id: 'areasFacilities', label: 'Infrastructure & Areas', icon: Microscope, show: researchAreas.length > 0 || facilities.length > 0 || isECX },
                                { id: 'scholars', label: isAIDS || isCivil || isCSBS || isMCA || isSH ? 'Faculty Pursuing Ph.D' : 'Scholars & Pursuing', icon: GraduationCap, show: facultyPursuing.length > 0 || guidedScholars.length > 0 || isECX }
                            ]
                            .filter(tab => tab.show)
                            .map((tab) => (
                                <button
                                    key={tab.id}
                                    onClick={() => setActiveTab(tab.id)}
                                    className={`flex items-center gap-2.5 px-6 py-3.5 rounded-xl font-bold text-xs uppercase tracking-wider transition-all duration-300 shadow-sm ${
                                        activeTab === tab.id
                                            ? 'bg-[#224292] text-white shadow-md'
                                            : 'bg-white border border-slate-200 text-[#4a627a] hover:bg-slate-50'
                                    }`}
                                >
                                    <tab.icon size={16} className={activeTab === tab.id ? 'text-[#ffc107]' : 'text-slate-400'} />
                                    {tab.label}
                                </button>
                            ))}
                        </div>

                        {/* Tab Contents */}
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={activeTab}
                                initial={{ opacity: 0, y: 15 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -15 }}
                                transition={{ duration: 0.3 }}
                            >
                                {/* ─── TAB 1: PhD Supervisors Registry ─── */}
                                {activeTab === 'supervisors' && (
                                    supervisors.length > 0 ? (
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                            {supervisors.map((superv) => (
                                                <div
                                                    key={superv.id}
                                                    className="bg-white rounded-3xl p-6 border border-slate-200 shadow-xl hover:border-[#ffc107] hover:shadow-2xl transition-all duration-300 relative group overflow-hidden"
                                                >
                                                    {/* Super Background Decorative Number */}
                                                    <div className="absolute -right-2 -top-6 text-[110px] font-black text-slate-50 opacity-40 select-none group-hover:scale-110 transition-transform duration-500">
                                                        0{superv.id}
                                                    </div>

                                                    <div className="flex flex-col sm:flex-row gap-6 relative z-10">
                                                        {/* Supervisor Image */}
                                                        <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-2xl overflow-hidden shrink-0 border-2 border-slate-100 group-hover:border-[#ffc107] shadow-md transition-all bg-gradient-to-br from-[#224292] to-[#18357a] flex items-center justify-center">
                                                            {superv.image ? (
                                                                <img
                                                                    src={superv.image}
                                                                    alt={superv.name}
                                                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                                                    onError={(e) => {
                                                                        e.target.style.display = 'none';
                                                                        if (e.target.nextSibling) e.target.nextSibling.style.display = 'flex';
                                                                    }}
                                                                />
                                                            ) : null}
                                                            <div className={`w-full h-full flex flex-col items-center justify-center text-white font-bold ${superv.image ? 'hidden' : ''}`}>
                                                                <Users size={32} className="text-[#ffc107] mb-1" />
                                                            </div>
                                                        </div>

                                                        <div className="flex-1 space-y-4">
                                                            <div>
                                                                <button
                                                                    onClick={() => window.open(superv.irins, '_blank')}
                                                                    className="text-lg font-black text-[#224292] hover:text-[#ffc107] transition-colors text-left flex items-center gap-1.5 leading-tight focus:outline-none"
                                                                >
                                                                    {superv.name}
                                                                    <ExternalLink size={14} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                                                                </button>
                                                                <p className="text-[11px] font-bold text-slate-400 mt-1">{superv.role}</p>
                                                            </div>

                                                            {/* Supervisor Info Metadata */}
                                                            <div className="space-y-2">
                                                                <div className="flex items-center gap-2 text-xs font-bold text-[#4a627a]">
                                                                    <Fingerprint size={13} className="text-[#ffc107]" />
                                                                    <span>ID: {superv.supervisorId}</span>
                                                                </div>
                                                                {superv.doj && (
                                                                    <div className="flex items-center gap-2 text-xs font-bold text-[#4a627a]">
                                                                        <span>DOJ: {superv.doj}</span>
                                                                    </div>
                                                                )}
                                                                {superv.vidwanId && (
                                                                    <div className="flex items-center gap-2 text-xs font-bold text-[#4a627a]">
                                                                        <span>Vidwan ID: {superv.vidwanId}</span>
                                                                    </div>
                                                                )}
                                                                <div className="flex items-center gap-2 text-xs font-bold text-[#4a627a]">
                                                                    <Mail size={13} className="text-[#ffc107]" />
                                                                    <span className="truncate max-w-[180px]">{superv.email}</span>
                                                                </div>
                                                                <div className="flex items-center gap-2 text-xs font-bold text-[#4a627a]">
                                                                    <Target size={13} className="text-[#ffc107]" />
                                                                    <span className="uppercase tracking-tight text-[11px]">{superv.researchArea}</span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>

                                                    {/* Supervisor Actions & Metrics */}
                                                    <div className="mt-6 pt-5 border-t border-slate-100 flex items-center justify-between gap-4 relative z-10">
                                                        <div className="flex gap-6">
                                                            <div className="text-center">
                                                                <div className="text-lg font-black text-[#224292] leading-none">{superv.guided}</div>
                                                                <p className="text-[9px] font-bold text-slate-400 uppercase tracking-widest mt-1">Guided</p>
                                                            </div>
                                                            <div className="text-center border-l border-slate-200 pl-6">
                                                                <div className="text-lg font-black text-[#ffc107] leading-none">{superv.guiding}</div>
                                                                <p className="text-[9px] font-bold text-slate-400 uppercase tracking-widest mt-1">Guiding</p>
                                                            </div>
                                                        </div>

                                                        <button
                                                            onClick={() => setSelectedSuper(superv)}
                                                            className="px-5 py-2.5 bg-[#eef2ff] hover:bg-[#ffc107] hover:text-[#224292] text-[#224292] font-black text-[10px] uppercase tracking-wider rounded-xl transition-all shadow-sm flex items-center gap-2"
                                                        >
                                                            <BookOpen size={13} />
                                                            Publications
                                                        </button>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    ) : (
                                        <EmptyState message="There are currently no registered Ph.D. supervisors in this department." icon={Users} />
                                    )
                                )}

                                {/* ─── TAB 3: Infrastructure & Research Areas ─── */}
                                {activeTab === 'areasFacilities' && (
                                    <div className={facilities.length > 0 || isMech || isSH ? "grid grid-cols-1 lg:grid-cols-2 gap-10" : "grid grid-cols-1 gap-10"}>
                                        {/* Research Areas */}
                                        <div className="space-y-6">
                                            <div className="flex items-center gap-3 border-b border-slate-200 pb-3">
                                                <Target className="text-[#ffc107]" size={20} />
                                                <h2 className="text-lg font-black text-[#224292] uppercase tracking-wide">Major Research Focus</h2>
                                            </div>
                                            <div className={facilities.length > 0 || isMech || isSH ? "grid grid-cols-1 sm:grid-cols-2 gap-4" : "grid grid-cols-1 sm:grid-cols-3 gap-4"}>
                                                {researchAreas.map((area, idx) => (
                                                    <div
                                                        key={idx}
                                                        className="bg-white p-4.5 rounded-2xl border border-slate-200/80 shadow-sm hover:shadow-lg transition-all duration-300 flex items-center gap-4"
                                                    >
                                                        <div className="w-10 h-10 bg-[#eef2ff] rounded-xl flex items-center justify-center text-[#224292] shrink-0 shadow-inner font-black text-xs">
                                                            0{idx + 1}
                                                        </div>
                                                        <h3 className="text-xs font-semibold text-[#224292] leading-tight tracking-tight">{area}</h3>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>

                                        {/* Infrastructure / Laboratories */}
                                        {(facilities.length > 0 || isMech || isSH) && (
                                            <div className="space-y-6">
                                                <div className="flex items-center gap-3 border-b border-slate-200 pb-3">
                                                    <Microscope className="text-[#ffc107]" size={20} />
                                                    <h2 className="text-lg font-black text-[#224292] uppercase tracking-wide">Research Labs & Infrastructure</h2>
                                                </div>
                                                <div className="space-y-5">
                                                    {(isMech || isSH) && facilities.length === 0 ? (
                                                        <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm text-center py-8">
                                                            <Microscope size={24} className="mx-auto text-slate-300 mb-2" />
                                                            <p className="text-xs font-bold text-slate-400">Nil</p>
                                                        </div>
                                                    ) : (
                                                        facilities.map((fac, idx) => (
                                                            <div key={idx} className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm space-y-3">
                                                                <h3 className="text-sm font-black text-[#224292] uppercase tracking-tight flex items-center gap-2">
                                                                    <span className="w-2 h-2 rounded-full bg-[#ffc107]" />
                                                                    {fac.name}
                                                                </h3>
                                                                <p className="text-xs font-medium text-[#4a627a] leading-relaxed whitespace-pre-line">{fac.description}</p>
                                                                <div className="px-3.5 py-2.5 bg-slate-50 border border-slate-100 rounded-xl flex items-center gap-3">
                                                                    <Database size={14} className="text-[#ffc107]" />
                                                                    <span className="text-[10px] font-bold text-slate-500 uppercase tracking-wider">Specs: {fac.infrastructure}</span>
                                                                </div>
                                                            </div>
                                                        ))
                                                    )}
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                )}

                                {/* ─── TAB 4: Active Scholars & Pursuing Faculty ─── */}
                                {activeTab === 'scholars' && (
                                    <div className={`grid grid-cols-1 ${guidedScholars.length > 0 ? 'lg:grid-cols-2' : ''} gap-10`}>
                                        {/* Faculty Pursuing PhD */}
                                        <div className="space-y-6">
                                            <div className="flex items-center gap-3 border-b border-slate-200 pb-3">
                                                <GraduationCap className="text-[#ffc107]" size={20} />
                                                <h2 className="text-lg font-black text-[#224292] uppercase tracking-wide">Faculty Pursuing Ph.D</h2>
                                            </div>
                                            {facultyPursuing.length > 0 ? (
                                                <div className={guidedScholars.length > 0 ? "space-y-4" : "grid grid-cols-1 md:grid-cols-2 gap-6"}>
                                                    {facultyPursuing.map((fac, idx) => (
                                                        <div key={idx} className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm space-y-3 hover:border-blue-300 transition-colors">
                                                            <div className="flex items-center justify-between gap-3 flex-wrap">
                                                                <h3 className="text-sm font-black text-[#224292]">{fac.name}</h3>
                                                                <span className="px-3 py-1 bg-amber-50 border border-amber-100 text-amber-700 text-[9px] font-black uppercase tracking-wider rounded-full">{fac.status}</span>
                                                            </div>
                                                            <div className="grid grid-cols-2 gap-3 pt-2 text-[11px] font-semibold text-[#4a627a] border-t border-slate-50">
                                                                <div>
                                                                    <span className="block text-[9px] text-slate-400 uppercase tracking-widest font-bold">Research Domain</span>
                                                                    {fac.topic}
                                                                </div>
                                                                <div>
                                                                    <span className="block text-[9px] text-slate-400 uppercase tracking-widest font-bold">Supervisor</span>
                                                                    {fac.supervisor}
                                                                </div>
                                                                <div className="col-span-2">
                                                                    <span className="block text-[9px] text-slate-400 uppercase tracking-widest font-bold">Registration / Affiliation</span>
                                                                    {fac.registration} ({fac.university})
                                                                </div>
                                                                {fac.doj && (
                                                                    <div>
                                                                        <span className="block text-[9px] text-slate-400 uppercase tracking-widest font-bold">DOJ</span>
                                                                        {fac.doj}
                                                                    </div>
                                                                )}
                                                                {fac.vidwanId && (
                                                                    <div>
                                                                        <span className="block text-[9px] text-slate-400 uppercase tracking-widest font-bold">Vidwan ID</span>
                                                                        {fac.vidwanId}
                                                                    </div>
                                                                )}
                                                            </div>
                                                        </div>
                                                    ))}
                                                </div>
                                            ) : (
                                                <EmptyState message="There are currently no faculty members pursuing a Ph.D. in this department." icon={GraduationCap} />
                                            )}
                                        </div>

                                        {/* Scholars Guided */}
                                        {guidedScholars.length > 0 && (
                                            <div className="space-y-6">
                                                <div className="flex items-center gap-3 border-b border-slate-200 pb-3">
                                                    <UserCheck className="text-[#ffc107]" size={20} />
                                                    <h2 className="text-lg font-black text-[#224292] uppercase tracking-wide">Scholars Guided</h2>
                                                </div>
                                                <div className="space-y-4">
                                                    {guidedScholars.map((sch, idx) => (
                                                        <div key={idx} className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm space-y-3 hover:border-amber-300 transition-colors">
                                                            <div className="flex items-center justify-between gap-3 flex-wrap">
                                                                <h3 className="text-sm font-black text-[#224292]">{sch.scholar}</h3>
                                                                <span className="px-3 py-1 bg-blue-50 border border-blue-100 text-[#224292] text-[9px] font-black uppercase tracking-wider rounded-full">{sch.status}</span>
                                                            </div>
                                                            <div className="grid grid-cols-2 gap-3 pt-2 text-[11px] font-semibold text-[#4a627a] border-t border-slate-50">
                                                                <div>
                                                                    <span className="block text-[9px] text-slate-400 uppercase tracking-widest font-bold">Thesis Topic</span>
                                                                    {sch.topic}
                                                                </div>
                                                                <div>
                                                                    <span className="block text-[9px] text-slate-400 uppercase tracking-widest font-bold">Guide / Supervisor</span>
                                                                    {sch.supervisor}
                                                                </div>
                                                                <div className="col-span-2">
                                                                    <span className="block text-[9px] text-slate-400 uppercase tracking-widest font-bold">Affiliation</span>
                                                                    {sch.university}
                                                                </div>
                                                            </div>
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                )}
                            </motion.div>
                        </AnimatePresence>
                    </div>
                ) : (
                    /* ─── STANDARD COMPATIBILITY ROUTE FOR OTHER DEPARTMENTS ─── */
                    <div>
                        {/* standalone supervisor section */}
                        {resourceItems.find(item => item.path === 'phd-supervisors') && (
                            <motion.div
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                className="mb-10"
                            >
                                <div
                                    onClick={() => navigate(`/research/${deptName}/phd-supervisors`)}
                                    className="group cursor-pointer bg-white p-1 rounded-[2rem] border border-slate-200 shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden"
                                >
                                    <div className="bg-[#224292] p-6 sm:p-7 rounded-[1.8rem] flex flex-col sm:flex-row items-center justify-between gap-8 relative">
                                        <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
                                        
                                        <div className="flex items-center gap-6 relative z-10">
                                            <div className="w-14 h-14 sm:w-16 sm:h-16 bg-white/10 rounded-[1.5rem] flex items-center justify-center text-[#ffc107] group-hover:scale-110 transition-transform duration-500">
                                                <Users size={28} />
                                            </div>
                                            <div className="space-y-2">
                                                <h2 className="text-white text-2xl sm:text-3xl font-black tracking-tight leading-tight">
                                                    List of <span className="text-[#ffc107]">Ph.D Supervisors</span>
                                                </h2>
                                                <p className="text-white/60 text-xs sm:text-sm font-bold tracking-[0.2em]">Academic Leadership & Mentorship</p>
                                            </div>
                                        </div>

                                        <div className="relative z-10 shrink-0">
                                            <div className="bg-[#ffc107] text-[#224292] px-8 py-4 rounded-2xl font-black text-sm uppercase tracking-widest flex items-center gap-3 group-hover:bg-white transition-all shadow-xl">
                                                View Supervisors
                                                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        )}

                        <motion.div
                            initial={{ opacity: 0, scale: 0.98 }}
                            animate={{ opacity: 1, scale: 1 }}
                            className="bg-white rounded-[2rem] shadow-2xl shadow-blue-900/5 border border-slate-200/60 overflow-hidden"
                        >
                            <table className="w-full border-collapse">
                                <thead>
                                    <tr>
                                        <th className="bg-black px-4 sm:px-8 py-5 text-left text-[11px] font-black text-white tracking-[2px] w-12 sm:w-24 hidden sm:table-cell rounded-tl-[2rem]">S.No.</th>
                                        <th className="bg-black px-4 sm:px-8 py-5 text-left text-[11px] font-black text-white tracking-[2px]">Other Research Details</th>
                                        <th className="bg-black px-4 sm:px-8 py-5 text-left text-[11px] font-black text-[#ffc107] tracking-[2px] text-right rounded-tr-[2rem]">Access</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-[#eef3fa]">
                                    {resourceItems
                                        .filter(item => item.path !== 'phd-supervisors')
                                        .map((item, idx) => (
                                            <tr
                                                key={item.id}
                                                className="group hover:bg-[#fafcff] transition-all duration-300"
                                            >
                                                <td className="px-4 sm:px-8 py-5 hidden sm:table-cell">
                                                    <div className="w-8 h-8 bg-blue-50/50 rounded flex items-center justify-center text-black font-black text-xs group-hover:bg-black group-hover:text-white transition-all duration-300">
                                                        {idx + 1 < 10 ? `0${idx + 1}` : idx + 1}
                                                    </div>
                                                </td>
                                                <td className="px-4 sm:px-8 py-3">
                                                    <div className="flex items-center gap-3 sm:gap-4">
                                                        <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-slate-50 flex items-center justify-center text-slate-400 group-hover:text-[#0f172a] transition-colors shrink-0">
                                                            <item.icon size={14} className="sm:w-[16px] sm:h-[16px]" />
                                                        </div>
                                                        <span className="text-[11px] sm:text-[14px] font-bold text-[#0f172a] tracking-tight group-hover:translate-x-1 transition-transform leading-tight">
                                                            {item.title}
                                                        </span>
                                                    </div>
                                                </td>
                                                <td className="px-4 sm:px-8 py-3 text-right">
                                                    <button
                                                        onClick={() => navigate(`/research/${deptName}/${item.path}`)}
                                                        className="inline-flex items-center gap-2 px-3 sm:px-6 py-2 sm:py-2.5 bg-white border border-slate-200 rounded-lg text-[#0f172a] text-[10px] font-bold uppercase tracking-wider hover:bg-[#ffc107] hover:border-[#ffc107] transition-all shadow-sm active:scale-95 group/btn"
                                                    >
                                                        <span className="hidden sm:inline">Click Here</span>
                                                        <ArrowRight size={14} className="group-hover/btn:translate-x-1 transition-transform" />
                                                    </button>
                                                </td>
                                            </tr>
                                        ))}
                                </tbody>
                            </table>
                        </motion.div>
                    </div>
                )}
            </div>

            {/* ─── PUBLICATIONS HOVER MODAL / OVERLAY BOX ─── */}
            <AnimatePresence>
                {selectedSuper && (
                    <div className="fixed inset-0 z-[5000] flex items-center justify-center px-4">
                        {/* Overlay backdrop */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setSelectedSuper(null)}
                            className="absolute inset-0 bg-[#0f172a]/60 backdrop-blur-md"
                        />

                        {/* Modal content */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95, y: 30 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.95, y: 30 }}
                            transition={{ type: 'spring', damping: 25, stiffness: 250 }}
                            className="bg-white rounded-[2rem] max-w-2xl w-full max-h-[85vh] overflow-hidden shadow-2xl relative border border-slate-100 flex flex-col z-10 font-sans"
                        >
                            {/* Modal Header */}
                            <div className="bg-[#224292] p-6 text-white flex items-center justify-between shrink-0">
                                <div className="space-y-1">
                                    <h3 className="text-lg font-black tracking-tight uppercase">Journal Publications</h3>
                                    <p className="text-[10px] font-bold text-white/70 uppercase tracking-widest">Research Profile for {selectedSuper.name}</p>
                                </div>
                                <button
                                    onClick={() => setSelectedSuper(null)}
                                    className="w-10 h-10 rounded-full bg-white/10 hover:bg-[#ffc107] hover:text-[#224292] flex items-center justify-center text-white transition-all focus:outline-none"
                                >
                                    <X size={18} />
                                </button>
                            </div>

                            {/* Modal Body */}
                            <div className="p-6 overflow-y-auto space-y-5 divide-y divide-slate-100">
                                {selectedSuper.publications.map((pub, idx) => (
                                    <div
                                        key={idx}
                                        className={`pt-5 first:pt-0 group flex gap-4 ${
                                            idx === 0 ? '' : 'border-t border-slate-100'
                                        }`}
                                    >
                                        <div className="w-8 h-8 rounded-lg bg-[#eef2ff] group-hover:bg-[#ffc107] text-[#224292] flex items-center justify-center font-black text-xs shrink-0 transition-colors shadow-inner">
                                            0{idx + 1}
                                        </div>

                                        <div className="space-y-2">
                                            <h4 className="text-xs font-black text-[#0f172a] uppercase leading-tight tracking-tight italic">
                                                "{pub.title}"
                                            </h4>
                                            <div className="flex flex-wrap gap-x-4 gap-y-1.5 text-[10px] font-bold text-slate-400">
                                                <div className="flex items-center gap-1.5">
                                                    <Users size={11} className="text-slate-300" />
                                                    <span className="uppercase text-slate-500">{pub.authors}</span>
                                                </div>
                                                <div className="flex items-center gap-1.5">
                                                    <BookOpen size={11} className="text-[#ffc107]" />
                                                    <span className="italic font-bold text-[#224292] truncate max-w-[280px]">{pub.journal}</span>
                                                </div>
                                                <div className="flex items-center gap-1.5 px-2 py-0.5 bg-slate-100 rounded-md text-[#224292] text-[9px] font-black uppercase">
                                                    {pub.year}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}

                                {selectedSuper.publications.length === 0 && (
                                    <div className="py-12 text-center text-slate-300 font-bold uppercase text-xs tracking-wider">
                                        No publications records registered in global index.
                                    </div>
                                )}
                            </div>

                            {/* Modal Footer */}
                            <div className="px-6 py-4 bg-slate-50 border-t border-slate-100 shrink-0 flex items-center justify-between">
                                <div className="flex items-center gap-2 text-[10px] font-bold text-slate-400 uppercase tracking-wider">
                                    <Info size={12} className="text-[#ffc107]" />
                                    Synchronized with Anna University Registry
                                </div>
                                <button
                                    onClick={() => setSelectedSuper(null)}
                                    className="px-5 py-2 bg-[#224292] text-white hover:bg-[#ffc107] hover:text-[#224292] text-[10px] font-black uppercase tracking-wider rounded-lg transition-colors focus:outline-none shadow-sm"
                                >
                                    Close Window
                                </button>
                            </div>
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>
        </div>
    )
}

export default ResearchResourcesPage
