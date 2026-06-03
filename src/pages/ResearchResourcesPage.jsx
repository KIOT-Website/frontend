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
import vijayalakshmiImg from '../assets/Faculity/cse/Dr.P.VIJAYALAKSHMI.png'
import rajendranImg from '../assets/placements/placement team/Placement-Director.webp'
import kumarImg from '../assets/Faculity/cse/Dr.R.KUMAR.png'
import vKumarImg from '../assets/Faculity/cse/Dr.V.KUMAR.png'
import rajeshImg from '../assets/placements/placement team/Mr.I.Rajesh M.E.,Ph.D.webp'
import malarvizhiImg from '../assets/Faculity/cse/Mrs.P.MALARVIZHI.png'
import sakthivelImg from '../assets/Faculity/cse/Dr.S.SAKTHIVEL.png'

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
        guided: "8",
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
        guided: "0",
        guiding: "4",
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
        researchArea: "E-Learning, Knowledge Engineering",
        supervisorId: "2840019",
        email: "rkumarnkl@gmail.com",
        guided: "0",
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
        topic: "Poultry Meat Quality Assessment using Image Mining",
        year: "2025",
        university: "Anna University",
        irins: "https://kiot.irins.org/profile/304521",
        image: rajeshImg,
        publications: { ij: 0, ic: 0, nj: 0, nc: 0 }
    },
    {
        id: 8,
        name: "Dr. P. Malarvizhi",
        topic: "Energy Efficient Routing for Lifetime Maximization in WSN",
        year: "2025",
        university: "Anna University",
        irins: "https://kiot.irins.org/profile/320616",
        image: malarvizhiImg,
        publications: { ij: 0, ic: 0, nj: 0, nc: 0 }
    },
    {
        id: 9,
        name: "Dr. M. Lakshaga jyothi",
        topic: "",
        year: "",
        university: "",
        irins: "https://kiot.irins.org",
        image: null,
        publications: { ij: 0, ic: 0, nj: 0, nc: 0 }
    }
];

const cseResearchAreas = [
    "Wireless Sensor Networks & IoT",
    "Data Mining & Machine Learning",
    "Image Processing & Medical Imaging",
    "Image Mining & Computer Vision",
    "Big Data Analytics & Cloud Computing",
    "Information Security & Network Security"
];

const cseFacilities = [
    {
        name: "Advanced Research & IoT Laboratory",
        description: "Equipped with state-of-the-art IoT gateway kits, Raspberry Pi modules, Arduino development boards, sensor nodes, and software tools for research in wireless sensor networks and smart cyber-physical systems.",
        infrastructure: "IoT Kits, Sensor Modules, High-speed Computing Systems"
    },
    {
        name: "Data Analytics & Machine Learning Lab",
        description: "High-performance GPU-powered computing workstations configured with Python, TensorFlow, PyTorch, R Studio, and major data analysis environments for image mining and big data investigations.",
        infrastructure: "NVIDIA RTX GPUs, High-Performance Workstations, Cloud Server Access"
    }
];

const cseFacultyPursuing = [
    { name: "Mrs. V. Sathyapriya", topic: "Computer Science", supervisor: "Dr. P. Rajendran", university: "Anna University", registration: "23244697170", status: "Course work Pursuing" },
    { name: "Mrs. N. Subha", topic: "Computer Science", supervisor: "Dr. P. Rajendran", university: "Anna University", registration: "24244691328", status: "Course work Pursuing" },
    { name: "Mrs. R. Pushpalatha", topic: "Computer Science", supervisor: "Dr. P. Rajendran", university: "Anna University", registration: "24234691437", status: "Course work Pursuing" }
];

const cseGuidedScholars = [
    { scholar: "Selvarani S", topic: "Computer Science", supervisor: "Dr. P. Rajendran", university: "Anna University", status: "Synopsis Submitted" },
    { scholar: "Sasikumar B", topic: "Computer Science", supervisor: "Dr. P. Rajendran", university: "Anna University", status: "Thesis Submitted" },
    { scholar: "Sathiyapriya V", topic: "Computer Science", supervisor: "Dr. P. Rajendran", university: "Anna University", status: "Course Work" }
];

// SVG Donut Chart Helper with built-in margins to prevent label clipping
const DonutChart = ({ segments, total, label }) => {
    // Standard internal size guarantees constant dimensions and unclipped safety margins
    const internalSize = 220;
    const cx = internalSize / 2;
    const cy = internalSize / 2;
    
    // Core geometry
    const r = 56;
    const strokeWidth = 24;

    let cumulative = 0;
    const paths = segments.map((seg, i) => {
        const startAngle = (cumulative / 100) * 360 - 90;
        const endAngle = ((cumulative + seg.percent) / 100) * 360 - 90;
        const midAngle = (startAngle + endAngle) / 2;
        const midRad = (midAngle * Math.PI) / 180;

        // Draw label inside the segment if it has a large enough share (>= 12%)
        const isInside = seg.percent >= 12;
        // Outside labels are pushed outwards by 8px for beautiful unclipped spacing
        const labelR = isInside ? r : (r + strokeWidth / 2 + 8);
        const lx = cx + labelR * Math.cos(midRad);
        const ly = cy + labelR * Math.sin(midRad);

        const startRad = (startAngle * Math.PI) / 180;
        const endRad = (endAngle * Math.PI) / 180;
        const x1 = cx + r * Math.cos(startRad);
        const y1 = cy + r * Math.sin(startRad);
        const x2 = cx + r * Math.cos(endRad);
        const y2 = cy + r * Math.sin(endRad);
        const largeArc = endAngle - startAngle > 180 ? 1 : 0;

        const path = `M ${x1} ${y1} A ${r} ${r} 0 ${largeArc} 1 ${x2} ${y2}`;
        cumulative += seg.percent;

        return { 
            path, 
            color: seg.color, 
            percent: seg.percent, 
            lx, 
            ly, 
            label: seg.shortLabel || `${seg.percent.toFixed(1)}%`,
            textColor: isInside ? '#ffffff' : '#1e3a8a',
            fontSize: isInside ? '10px' : '9.5px',
            fontWeight: '900'
        };
    });

    return (
        <svg 
            viewBox={`0 0 ${internalSize} ${internalSize}`} 
            width="100%" 
            height="100%" 
            style={{ 
                overflow: 'visible', 
                display: 'block' 
            }}
        >
            <defs>
                <filter id="dshadow" x="-20%" y="-20%" width="140%" height="140%">
                    <feDropShadow dx="0" dy="2" stdDeviation="3" floodColor="#00000015" />
                </filter>
            </defs>
            {/* Segments */}
            {paths.map((p, i) => (
                <path
                    key={i}
                    d={p.path}
                    fill="none"
                    stroke={p.color}
                    strokeWidth={strokeWidth}
                    strokeLinecap="butt"
                    filter="url(#dshadow)"
                />
            ))}
            {/* White Center Circle */}
            <circle cx={cx} cy={cy} r={r - strokeWidth / 2} fill="white" />
            <text x={cx} y={cy - 4} textAnchor="middle" fontSize="26" fontWeight="900" fill="#1e3a8a">{total}</text>
            <text x={cx} y={cy + 14} textAnchor="middle" fontSize="10" fontWeight="800" fill="#94a3b8" letterSpacing="1">{label}</text>
            
            {/* Labels */}
            {paths.filter(p => p.percent >= 2).map((p, i) => (
                <text 
                    key={i} 
                    x={p.lx} 
                    y={p.ly} 
                    textAnchor="middle" 
                    dominantBaseline="middle" 
                    fontSize={p.fontSize} 
                    fontWeight={p.fontWeight} 
                    fill={p.textColor}
                >
                    {p.label}
                </text>
            ))}
        </svg>
    );
};// Interactive Infographic Component
const ResearchSummaryDashboard = () => {
    const pubSegments = [
        { percent: 18.10, color: '#1e3a8a', shortLabel: '18.1%' },
        { percent: 14.03, color: '#3b82f6', shortLabel: '14.0%' },
        { percent: 40.72, color: '#15803d', shortLabel: '40.7%' },
        { percent: 6.79,  color: '#7c3aed', shortLabel: '6.8%' },
        { percent: 7.24,  color: '#ea580c', shortLabel: '7.2%' },
        { percent: 13.12, color: '#8b5cf6', shortLabel: '13.1%' },
    ];
    const patentSegments = [
        { percent: 37.50, color: '#15803d', shortLabel: '37.5%' },
        { percent: 37.50, color: '#3b82f6', shortLabel: '37.5%' },
        { percent: 25.00, color: '#ea580c', shortLabel: '25.0%' },
    ];
    const pubLegend = [
        { color: '#1e3a8a', name: 'Journal Publications',        count: 40 },
        { color: '#3b82f6', name: 'Other Journal Publications',   count: 31 },
        { color: '#15803d', name: 'Conference Proceedings',       count: 90 },
        { color: '#7c3aed', name: 'Patents Published / Granted',  count: 15 },
        { color: '#ea580c', name: 'Book / Book Chapters',         count: 16 },
        { color: '#8b5cf6', name: 'Student Publications',         count: 29 },
    ];
    const patentLegend = [
        { color: '#15803d', name: 'Patents Filed',     count: '03' },
        { color: '#3b82f6', name: 'Patents Published', count: '03' },
        { color: '#ea580c', name: 'Patents Granted',   count: '02' },
    ];
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
                <div style={{ display:'flex', alignItems:'center', gap:'6px', background:'white', padding:'4px 12px', borderRadius:'5px', fontSize:'11px', fontWeight:700, color:'#1e3a8a', whiteSpace:'nowrap', border:'1px solid #1e3a8a' }}>
                    <span>📅</span>
                    <span>PERIOD: 01.08.2024 to 31.03.2026</span>
                </div>
            </div>

            {/* ── KPI ROW ── */}
            <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr 1fr', borderBottom:'2px solid #1e3a8a', background:'white' }}>
                {/* Publications */}
                <div style={{ display:'flex', alignItems:'center', gap:'14px', padding:'14px 20px', borderRight:'1px solid #e2e8f0' }}>
                    <div style={{ background:'#1e3a8a', borderRadius:'50%', width:'60px', height:'60px', display:'flex', alignItems:'center', justifyContent:'center', flexShrink:0 }}>
                        <BookOpen color="white" size={28} />
                    </div>
                    <div>
                        <div style={{ color:'#1e3a8a', fontWeight:800, fontSize:'11px', textTransform:'uppercase', letterSpacing:'1px' }}>Publications</div>
                        <div style={{ color:'#1e3a8a', fontWeight:900, fontSize:'46px', lineHeight:1 }}>221</div>
                        <div style={{ color:'#64748b', fontWeight:600, fontSize:'10px' }}>Total Publications</div>
                    </div>
                </div>
                {/* Patents */}
                <div style={{ display:'flex', alignItems:'center', gap:'14px', padding:'14px 20px', borderRight:'1px solid #e2e8f0' }}>
                    <div style={{ background:'#15803d', borderRadius:'50%', width:'60px', height:'60px', display:'flex', alignItems:'center', justifyContent:'center', flexShrink:0 }}>
                        <span style={{ color:'white', fontWeight:900, fontSize:'24px' }}>P</span>
                    </div>
                    <div>
                        <div style={{ color:'#15803d', fontWeight:800, fontSize:'11px', textTransform:'uppercase', letterSpacing:'1px' }}>Patents</div>
                        <div style={{ color:'#15803d', fontWeight:900, fontSize:'46px', lineHeight:1 }}>08</div>
                        <div style={{ color:'#64748b', fontWeight:600, fontSize:'10px' }}>Total Patents Filed / Published / Granted</div>
                    </div>
                </div>
                {/* Grants */}
                <div style={{ display:'flex', alignItems:'center', gap:'14px', padding:'14px 20px' }}>
                    <div style={{ background:'#4c1d95', borderRadius:'50%', width:'60px', height:'60px', display:'flex', alignItems:'center', justifyContent:'center', flexShrink:0 }}>
                        <Handshake color="white" size={28} />
                    </div>
                    <div>
                        <div style={{ color:'#4c1d95', fontWeight:800, fontSize:'11px', textTransform:'uppercase', letterSpacing:'1px' }}>Grants Received</div>
                        <div style={{ color:'#4c1d95', fontWeight:900, fontSize:'46px', lineHeight:1 }}>12</div>
                        <div style={{ color:'#64748b', fontWeight:600, fontSize:'10px' }}>Projects / Consultancy Completed</div>
                    </div>
                </div>
            </div>

            {/* ── DETAIL ROW ── */}
            <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr 1fr' }}>

                {/* ── PUBLICATIONS PANEL ── */}
                <div style={{ borderRight:'1px solid #1e3a8a', display:'flex', flexDirection:'column' }}>
                    <div style={{ background:'#1e3a8a', color:'white', fontWeight:800, fontSize:'12px', textTransform:'uppercase', letterSpacing:'2px', textAlign:'center', padding:'7px' }}>
                        Publications
                    </div>
                    {/* Donut LEFT  |  Table RIGHT */}
                    <div style={{ display:'flex', alignItems:'center', padding:'12px 8px 10px 18px', gap:'8px', flex:1 }}>
                        <div style={{ flexShrink:0, width:'145px', height:'145px' }}>
                            <DonutChart segments={pubSegments} total="221" label="Total" />
                        </div>
                        <div style={{ flex:1, minWidth:0, overflow:'hidden' }}>
                            <table style={{ width:'100%', borderCollapse:'collapse', tableLayout:'fixed' }}>
                                <colgroup>
                                    <col style={{ width: 'auto' }} />
                                    <col style={{ width: '45px' }} />
                                </colgroup>
                                <thead>
                                    <tr><th style={th}>Category</th><th style={thC}>Count</th></tr>
                                </thead>
                                <tbody>
                                    {pubLegend.map((row, i) => (
                                        <tr key={i} style={{ background: i%2===0 ? 'white' : '#f8fafc' }}>
                                            <td style={td}>
                                                <div style={{ display:'flex', alignItems:'flex-start', gap:'5px' }}>
                                                    <span style={{ width:'8px', height:'8px', borderRadius:'50%', background:row.color, flexShrink:0, marginTop:'2px', display:'inline-block' }} />
                                                    <span style={{ lineHeight:1.3 }}>{row.name}</span>
                                                </div>
                                            </td>
                                            <td style={tdC}>{row.count}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div style={{ background:'#dbeafe', borderTop:'1px solid #1e3a8a', padding:'6px 14px', display:'flex', justifyContent:'space-between', alignItems:'center' }}>
                        <span style={{ color:'#1e3a8a', fontWeight:700, fontSize:'11px' }}>Total Publications:</span>
                        <span style={{ color:'#1e3a8a', fontWeight:900, fontSize:'16px' }}>221</span>
                    </div>
                </div>

                {/* ── PATENTS PANEL ── */}
                <div style={{ borderRight:'1px solid #1e3a8a', display:'flex', flexDirection:'column' }}>
                    <div style={{ background:'#15803d', color:'white', fontWeight:800, fontSize:'12px', textTransform:'uppercase', letterSpacing:'2px', textAlign:'center', padding:'7px' }}>
                        Patents
                    </div>
                    {/* Donut LEFT  |  Table RIGHT */}
                    <div style={{ display:'flex', alignItems:'center', padding:'12px 8px 10px 8px', gap:'8px', flex:1 }}>
                        <div style={{ flexShrink:0, width:'145px', height:'145px' }}>
                            <DonutChart segments={patentSegments} total="08" label="Total" />
                        </div>
                        <div style={{ flex:1, minWidth:0, overflow:'hidden' }}>
                            <table style={{ width:'100%', borderCollapse:'collapse', tableLayout:'fixed' }}>
                                <colgroup>
                                    <col style={{ width: 'auto' }} />
                                    <col style={{ width: '45px' }} />
                                </colgroup>
                                <thead>
                                    <tr><th style={th}>Category</th><th style={thC}>Count</th></tr>
                                </thead>
                                <tbody>
                                    {patentLegend.map((row, i) => (
                                        <tr key={i} style={{ background: i%2===0 ? 'white' : '#f8fafc' }}>
                                            <td style={td}>
                                                <div style={{ display:'flex', alignItems:'center', gap:'5px' }}>
                                                    <span style={{ width:'8px', height:'8px', borderRadius:'50%', background:row.color, flexShrink:0, display:'inline-block' }} />
                                                    <span>{row.name}</span>
                                                </div>
                                            </td>
                                            <td style={{ ...tdC, color: row.color }}>{row.count}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div style={{ background:'#dcfce7', borderTop:'1px solid #15803d', padding:'6px 14px', display:'flex', justifyContent:'space-between', alignItems:'center' }}>
                        <span style={{ color:'#15803d', fontWeight:700, fontSize:'11px' }}>Total Patents:</span>
                        <span style={{ color:'#15803d', fontWeight:900, fontSize:'16px' }}>08</span>
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
                                        <tr style={{ borderBottom: '1px solid #e2e8f0' }}>
                                            <td style={{ padding:'3px 4px', color:'#475569', fontWeight:600, width: '75%' }}>AICTE</td>
                                            <td style={{ padding:'3px 4px', fontWeight:800, color:'#4c1d95', textAlign:'center', width: '25%' }}>01</td>
                                        </tr>
                                        <tr style={{ borderBottom: '1px solid #e2e8f0' }}>
                                            <td style={{ padding:'3px 4px', color:'#475569', fontWeight:600, lineHeight: 1.1 }}>Science & Engg. Research Board (SERB)</td>
                                            <td style={{ padding:'3px 4px', fontWeight:800, color:'#4c1d95', textAlign:'center' }}>04</td>
                                        </tr>
                                        <tr style={{ borderBottom: '1px solid #e2e8f0' }}>
                                            <td style={{ padding:'3px 4px', color:'#475569', fontWeight:600 }}>National Mission</td>
                                            <td style={{ padding:'3px 4px', fontWeight:800, color:'#4c1d95', textAlign:'center' }}>01</td>
                                        </tr>
                                        <tr>
                                            <td style={{ padding:'3px 4px', color:'#475569', fontWeight:600 }}>Institutional Grants</td>
                                            <td style={{ padding:'3px 4px', fontWeight:800, color:'#4c1d95', textAlign:'center' }}>06</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>

                            {/* Table 2: By Department */}
                            <div style={{ flex:1, border:'1px solid #cbd5e1', borderRadius:'6px', overflow:'hidden', display: 'flex', flexDirection: 'column' }}>
                                <div style={{ background:'#ede9fe', color:'#4c1d95', fontSize:'9px', fontWeight:800, textTransform:'uppercase', textAlign:'center', padding:'4px 2px', borderBottom:'1px solid #cbd5e1', whiteSpace:'nowrap' }}>
                                    By Department / Section
                                </div>
                                <table style={{ width:'100%', borderCollapse:'collapse', fontSize:'8px', flex:1, tableLayout:'fixed' }}>
                                    <tbody>
                                        <tr style={{ borderBottom: '1px solid #e2e8f0' }}>
                                            <td style={{ padding:'2px 4px', color:'#475569', fontWeight:600, width: '75%' }}>Applied Sciences</td>
                                            <td style={{ padding:'2px 4px', fontWeight:800, color:'#4c1d95', textAlign:'center', width: '25%' }}>02</td>
                                        </tr>
                                        <tr style={{ borderBottom: '1px solid #e2e8f0' }}>
                                            <td style={{ padding:'2px 4px', color:'#475569', fontWeight:600 }}>Civil</td>
                                            <td style={{ padding:'2px 4px', fontWeight:800, color:'#4c1d95', textAlign:'center' }}>01</td>
                                        </tr>
                                        <tr style={{ borderBottom: '1px solid #e2e8f0' }}>
                                            <td style={{ padding:'2px 4px', color:'#475569', fontWeight:600 }}>Electrical</td>
                                            <td style={{ padding:'2px 4px', fontWeight:800, color:'#4c1d95', textAlign:'center' }}>03</td>
                                        </tr>
                                        <tr style={{ borderBottom: '1px solid #e2e8f0' }}>
                                            <td style={{ padding:'2px 4px', color:'#475569', fontWeight:600 }}>Mechanical</td>
                                            <td style={{ padding:'2px 4px', fontWeight:800, color:'#4c1d95', textAlign:'center' }}>05</td>
                                        </tr>
                                        <tr>
                                            <td style={{ padding:'2px 4px', color:'#475569', fontWeight:600 }}>Computer Science</td>
                                            <td style={{ padding:'2px 4px', fontWeight:800, color:'#4c1d95', textAlign:'center' }}>01</td>
                                        </tr>
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
                                        <td style={{ padding:'3px 0', fontWeight:900, color:'#4c1d95', textAlign:'right', paddingRight: '4px' }}>01</td>
                                    </tr>
                                    <tr>
                                        <td style={{ padding:'3px 0', color:'#475569', fontWeight:700 }}>Sponsored Research</td>
                                        <td style={{ padding:'3px 0', fontWeight:900, color:'#4c1d95', textAlign:'right', paddingRight: '4px' }}>11</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                    </div>

                    <div style={{ background:'#ede9fe', borderTop:'1px solid #4c1d95', padding:'6px 14px', display:'flex', justifyContent:'space-between', alignItems:'center' }}>
                        <span style={{ color:'#4c1d95', fontWeight:700, fontSize:'10px' }}>Total Projects / Consultancy Completed:</span>
                        <span style={{ color:'#4c1d95', fontWeight:900, fontSize:'16px' }}>12</span>
                    </div>
                </div>

            </div>
        </div>
    )
}

const ResearchResourcesPage = () => {
    const { deptName } = useParams()
    const navigate = useNavigate()

    // Interactive States for CSE Single Page view
    const [activeTab, setActiveTab] = useState('supervisors')
    const [selectedSuper, setSelectedSuper] = useState(null)

    const formatDeptName = (name) => {
        if (!name) return 'Departmentwise'
        const decoded = decodeURIComponent(name).toLowerCase()
        if (decoded === 'computer-science-&-business-systems' || decoded === 'computer-science-and-business-systems') {
            return 'Computer Science & Business Systems'
        }
        return decodeURIComponent(name)
            .split('-')
            .map((word) => {
                if (word === '&') return '&'
                return word.charAt(0).toUpperCase() + word.slice(1)
            })
            .join(' ')
    }

    const isCSE = deptName?.toLowerCase() === 'computer-science-&-engineering'

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
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#eef2ff] rounded-full text-[#1e4a76] text-[11px] font-black tracking-wider mb-3">
                        <Search size={14} />
                        <span>Research & Doctoral Initiatives</span>
                    </div>

                    <h1 className="text-2xl lg:text-3xl font-bold text-[#224292] leading-tight mb-3">
                        <span className="text-[#ffc107]">Research in</span> {formatDeptName(deptName)}
                    </h1>

                    <div className="max-w-3xl py-0.5">
                        <p className="text-black text-xs font-semibold leading-relaxed">
                            Comprehensive academic documentation - Ph.D supervision, research areas, publications, facilities, and sponsored projects at a glance.
                        </p>
                    </div>
                </motion.div>

                {/* ─── CSE EXCLUSIVE SINGLE-PAGE DASHBOARD VIEW ─── */}
                {isCSE ? (
                    <div>
                        {/* Infographic Dashboard Panel */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 }}
                        >
                            <ResearchSummaryDashboard />
                        </motion.div>

                        {/* Interactive Navigation Tabs */}
                        <div className="flex flex-wrap gap-2 mb-10 border-b border-slate-200 pb-5">
                            {[
                                { id: 'supervisors', label: 'Ph.D Supervisors', icon: Users },
                                { id: 'phdCompleted', label: 'Our Wings', icon: Award },
                                { id: 'areasFacilities', label: 'Infrastructure & Areas', icon: Microscope },
                                { id: 'scholars', label: 'Scholars & Pursuing', icon: GraduationCap }
                            ].map((tab) => (
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
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                        {cseSupervisors.map((superv) => (
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
                                                    <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-2xl overflow-hidden shrink-0 border-2 border-slate-100 group-hover:border-[#ffc107] shadow-md transition-all">
                                                        <img src={superv.image} alt={superv.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
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
                                )}

                                {/* ─── TAB 2: Ph.D Completed Directory ─── */}
                                {activeTab === 'phdCompleted' && (
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                        {csePhdHolders.map((holder) => (
                                            <div
                                                key={holder.id}
                                                className="bg-white rounded-3xl p-6 border border-slate-200 shadow-xl hover:border-[#ffc107] hover:shadow-2xl transition-all duration-300 relative group overflow-hidden"
                                            >
                                                <div className="absolute -right-2 -top-6 text-[110px] font-black text-slate-50 opacity-40 select-none">
                                                    {holder.id < 10 ? '0' + holder.id : holder.id}
                                                </div>

                                                <div className="flex flex-col sm:flex-row gap-6 relative z-10">
                                                    {/* Doctorate Holder Photo */}
                                                    <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-2xl overflow-hidden shrink-0 border-2 border-slate-100 group-hover:border-[#ffc107] shadow-md transition-all flex items-center justify-center bg-slate-50">
                                                        {holder.image ? (
                                                            <img src={holder.image} alt={holder.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                                                        ) : (
                                                            <Users size={32} className="text-slate-300" />
                                                        )}
                                                    </div>

                                                    <div className="flex-1 space-y-4">
                                                        <div>
                                                            <button
                                                                onClick={() => window.open(holder.irins, '_blank')}
                                                                className="text-lg font-black text-[#224292] hover:text-[#ffc107] transition-colors text-left flex items-center gap-1.5 leading-tight focus:outline-none"
                                                            >
                                                                {holder.name}
                                                                <ExternalLink size={14} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                                                            </button>
                                                            {(holder.year || holder.university) && (
                                                                <p className="text-[11px] font-bold text-slate-400 mt-1">
                                                                    {holder.year}{holder.year && holder.university ? ' | ' : ''}{holder.university}
                                                                </p>
                                                            )}
                                                        </div>

                                                        {/* Research Topic */}
                                                        {holder.topic && (
                                                            <div className="p-3 bg-slate-50 rounded-xl border border-slate-100/60 text-xs font-semibold text-[#4a627a] leading-relaxed italic">
                                                                {holder.topic}
                                                            </div>
                                                        )}
                                                    </div>
                                                </div>

                                                {/* Metrics */}
                                                <div className="mt-5 pt-4 border-t border-slate-100 grid grid-cols-4 gap-2 text-center relative z-10">
                                                    <div>
                                                        <div className="text-sm font-black text-[#224292]">{holder.publications.ij}</div>
                                                        <div className="text-[8px] font-bold text-slate-400 uppercase tracking-widest mt-0.5">Int. Journal</div>
                                                    </div>
                                                    <div className="border-l border-slate-100">
                                                        <div className="text-sm font-black text-[#224292]">{holder.publications.ic}</div>
                                                        <div className="text-[8px] font-bold text-slate-400 uppercase tracking-widest mt-0.5">Int. Conf.</div>
                                                    </div>
                                                    <div className="border-l border-slate-100">
                                                        <div className="text-sm font-black text-[#224292]">{holder.publications.nj}</div>
                                                        <div className="text-[8px] font-bold text-slate-400 uppercase tracking-widest mt-0.5">Nat. Journal</div>
                                                    </div>
                                                    <div className="border-l border-slate-100">
                                                        <div className="text-sm font-black text-[#224292]">{holder.publications.nc}</div>
                                                        <div className="text-[8px] font-bold text-slate-400 uppercase tracking-widest mt-0.5">Nat. Conf.</div>
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                )}

                                {/* ─── TAB 3: Infrastructure & Research Areas ─── */}
                                {activeTab === 'areasFacilities' && (
                                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
                                        {/* Research Areas */}
                                        <div className="space-y-6">
                                            <div className="flex items-center gap-3 border-b border-slate-200 pb-3">
                                                <Target className="text-[#ffc107]" size={20} />
                                                <h2 className="text-lg font-black text-[#224292] uppercase tracking-wide">Major Research Focus</h2>
                                            </div>
                                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                                {cseResearchAreas.map((area, idx) => (
                                                    <div
                                                        key={idx}
                                                        className="bg-white p-4.5 rounded-2xl border border-slate-200/80 shadow-sm hover:shadow-lg transition-all duration-300 flex items-center gap-4"
                                                    >
                                                        <div className="w-10 h-10 bg-[#eef2ff] rounded-xl flex items-center justify-center text-[#224292] shrink-0 shadow-inner font-black text-xs">
                                                            0{idx + 1}
                                                        </div>
                                                        <h3 className="text-xs font-black text-[#224292] uppercase leading-tight tracking-tight">{area}</h3>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>

                                        {/* Infrastructure / Laboratories */}
                                        <div className="space-y-6">
                                            <div className="flex items-center gap-3 border-b border-slate-200 pb-3">
                                                <Microscope className="text-[#ffc107]" size={20} />
                                                <h2 className="text-lg font-black text-[#224292] uppercase tracking-wide">Research Labs & Infrastructure</h2>
                                            </div>
                                            <div className="space-y-5">
                                                {cseFacilities.map((fac, idx) => (
                                                    <div key={idx} className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm space-y-3">
                                                        <h3 className="text-sm font-black text-[#224292] uppercase tracking-tight flex items-center gap-2">
                                                            <span className="w-2 h-2 rounded-full bg-[#ffc107]" />
                                                            {fac.name}
                                                        </h3>
                                                        <p className="text-xs font-medium text-[#4a627a] leading-relaxed">{fac.description}</p>
                                                        <div className="px-3.5 py-2.5 bg-slate-50 border border-slate-100 rounded-xl flex items-center gap-3">
                                                            <Database size={14} className="text-[#ffc107]" />
                                                            <span className="text-[10px] font-bold text-slate-500 uppercase tracking-wider">Specs: {fac.infrastructure}</span>
                                                        </div>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                )}

                                {/* ─── TAB 4: Active Scholars & Pursuing Faculty ─── */}
                                {activeTab === 'scholars' && (
                                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
                                        {/* Faculty Pursuing PhD */}
                                        <div className="space-y-6">
                                            <div className="flex items-center gap-3 border-b border-slate-200 pb-3">
                                                <GraduationCap className="text-[#ffc107]" size={20} />
                                                <h2 className="text-lg font-black text-[#224292] uppercase tracking-wide">Faculty Pursuing Ph.D</h2>
                                            </div>
                                            <div className="space-y-4">
                                                {cseFacultyPursuing.map((fac, idx) => (
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
                                                        </div>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>

                                        {/* Scholars Guided */}
                                        <div className="space-y-6">
                                            <div className="flex items-center gap-3 border-b border-slate-200 pb-3">
                                                <UserCheck className="text-[#ffc107]" size={20} />
                                                <h2 className="text-lg font-black text-[#224292] uppercase tracking-wide">Scholars Guided</h2>
                                            </div>
                                            <div className="space-y-4">
                                                {cseGuidedScholars.map((sch, idx) => (
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
