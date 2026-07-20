import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import "./studentLife.css";
import { ArrowUpRight, X } from 'lucide-react';

// Image Imports
import asset4 from '../assets/student life/Asset 4.webp';
import asset5 from '../assets/student life/Asset 5.webp';
import asset12 from '../assets/student life/Asset 12.webp';
import asset13 from '../assets/student life/Asset 13.webp';
import asset14 from '../assets/student life/Asset 14.webp';
import asset20 from '../assets/student life/Asset 20.webp';
import asset21 from '../assets/student life/Asset 21 (2).webp';
import asset22 from '../assets/student life/Asset 22 (2).webp';
import asset23 from '../assets/student life/Asset 23 (3).webp';
import asset24 from '../assets/student life/Asset 24.webp';
import asset25 from '../assets/student life/Asset 25 (2).webp';
import asset26 from '../assets/student life/Asset 26.webp';

export default function StudentLifePage() {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("Department Associations");
  const [selectedImage, setSelectedImage] = useState(null);

  const handleTabSelect = (tab) => {
    setActiveTab(tab);
    setTimeout(() => {
      const element = document.getElementById("slc-results-section");
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }, 100);
  };

  const tabs = [
    "Department Associations",
    "Technical Clubs / Co-Curricular Clubs",
    "Professional Society Linked Clubs",
    "Social Clubs",
    "Extra-Curricular / Cultural Clubs",
    "College Level / Common Centers & Forums"
  ];

  const galleryImages = [
    { src: asset4, title: "Campus Activity" },
    { src: asset5, title: "Student Interaction" },
    { src: asset12, title: "Technical Workshop" },
    { src: asset13, title: "Cultural Event" },
    { src: asset14, title: "Student Community" },
    { src: asset20, title: "Campus Life" },
    { src: asset21, title: "Academic Excellence" },
    { src: asset22, title: "Event Celebration" },
    { src: asset23, title: "Learning Hub" },
    { src: asset24, title: "Innovation Cell" },
    { src: asset25, title: "Library & Research" },
    { src: asset26, title: "Future Leaders" }
  ];

  const organizations = [
    // Department Associations
    { category: "Department Associations", name: "FLAME", dept: "MECH", desc: "Promotes innovation, technical skills, and teamwork among mechanical engineering students" },
    { category: "Department Associations", name: "INTEC", dept: "ECE", desc: "Enhances electronics knowledge, communication skills, and technical excellence in ECE" },
    { category: "Department Associations", name: "AMBER'Z", dept: "EEE", desc: "Encourages creativity and practical learning in electrical and electronics engineering" },
    { category: "Department Associations", name: "SCINTEL", dept: "CSE", desc: "Develops programming, problem-solving, and innovation skills among computer science students" },
    { category: "Department Associations", name: "PACE", dept: "CIVIL", desc: "Strengthens civil engineering knowledge through projects, seminars, and teamwork" },
    { category: "Department Associations", name: "TECHTASTIC", dept: "IT", desc: "Supports IT students in emerging technologies, coding, and technical learning" },
    { category: "Department Associations", name: "ACID", dept: "CSBS", desc: "Builds analytical thinking and innovation in computer science and business systems" },
    { category: "Department Associations", name: "VIBES", dept: "AI&DS", desc: "Promotes AI and data science learning through practical and research activities" },
    { category: "Department Associations", name: "MBA", dept: "MBA", desc: "Develops leadership, management skills, and professional networking opportunities" },

    // Technical Clubs / Co-Curricular Clubs
    { category: "Technical Clubs / Co-Curricular Clubs", name: "Sustainable Engineering Club", dept: "MECH", desc: "Encourages eco-friendly engineering solutions for sustainable industrial development" },
    { category: "Technical Clubs / Co-Curricular Clubs", name: "Agricultural Automation Club", dept: "MECH", desc: "Promotes smart farming technologies using automation and modern engineering tools" },
    { category: "Technical Clubs / Co-Curricular Clubs", name: "Environmental Health and Safety (EHS) Club", dept: "MECH", desc: "Creates awareness on workplace safety, health, and environmental protection" },
    { category: "Technical Clubs / Co-Curricular Clubs", name: "Robotics, Automation and Industry 4.0 Club", dept: "MECH", desc: "Develops robotics skills and industrial automation knowledge for future industries" },
    { category: "Technical Clubs / Co-Curricular Clubs", name: "Software Defined Vehicle", dept: "ECE", desc: "Explores intelligent vehicle systems and software-driven automotive innovations" },
    { category: "Technical Clubs / Co-Curricular Clubs", name: "IoT Club", dept: "ECE", desc: "Enhances learning in connected devices, sensors, and smart applications" },
    { category: "Technical Clubs / Co-Curricular Clubs", name: "Systems on Chip (SoC) Club", dept: "ECE", desc: "Promotes VLSI design and embedded system development using SoC concepts" },
    { category: "Technical Clubs / Co-Curricular Clubs", name: "Technology for Elderly Care and Child Care", dept: "ECE", desc: "Develops assistive technologies for elderly support and child safety solutions" },
    { category: "Technical Clubs / Co-Curricular Clubs", name: "Wearable Devices and Health Monitoring Club", dept: "ECE", desc: "Focuses on smart wearable systems for health tracking and patient monitoring" },
    { category: "Technical Clubs / Co-Curricular Clubs", name: "Robotics and Intelligence Machines (RlM) Club", dept: "EEE", desc: "Encourages intelligent robotics design and automation-based engineering solutions" },
    { category: "Technical Clubs / Co-Curricular Clubs", name: "Electric Vehicles (EV) Club", dept: "EEE", desc: "Promotes EV technology awareness, design, and sustainable transportation solutions" },
    { category: "Technical Clubs / Co-Curricular Clubs", name: "Energy Management Club", dept: "EEE", desc: "Focuses on efficient energy usage and sustainable power management systems" },
    { category: "Technical Clubs / Co-Curricular Clubs", name: "Drone Club", dept: "EEE", desc: "Promotes drone design, innovation, and applications in surveillance and technology" },
    { category: "Technical Clubs / Co-Curricular Clubs", name: "Big Data Big Insights (BDBI) Club", dept: "CSE", desc: "Enhances knowledge in big data analysis and intelligent decision-making" },
    { category: "Technical Clubs / Co-Curricular Clubs", name: "Code ware Development Club", dept: "CSE", desc: "Promotes software development skills through coding practice and project building" },
    { category: "Technical Clubs / Co-Curricular Clubs", name: "Cloud Computing Tech Club", dept: "CSE", desc: "Develops cloud platform knowledge and modern computing infrastructure skills" },
    { category: "Technical Clubs / Co-Curricular Clubs", name: "KIOT CISCO Network Academy", dept: "CSE", desc: "Provides networking knowledge and industry certification-based technical training" },
    { category: "Technical Clubs / Co-Curricular Clubs", name: "KIOT Oracle Academy", dept: "CSE", desc: "Enhances database management and enterprise software learning through Oracle technologies" },
    { category: "Technical Clubs / Co-Curricular Clubs", name: "Web and Mobile App Developers Club", dept: "CSE", desc: "Encourages app development and modern web technology innovation skills" },
    { category: "Technical Clubs / Co-Curricular Clubs", name: "Creative Media Club", dept: "CSE", desc: "Promotes creativity in digital design, multimedia, and content development" },
    { category: "Technical Clubs / Co-Curricular Clubs", name: "Social Media Club", dept: "CSE", desc: "Builds communication and branding skills through digital media engagement" },
    { category: "Technical Clubs / Co-Curricular Clubs", name: "Smart and Sustainable Living Club", dept: "CIVIL", desc: "Promotes smart infrastructure and sustainable living practices for better communities" },
    { category: "Technical Clubs / Co-Curricular Clubs", name: "Technology for Waste Management", dept: "CIVIL", desc: "Focuses on innovative waste handling and environmental sustainability solutions" },
    { category: "Technical Clubs / Co-Curricular Clubs", name: "Technology for Urban Traffic Management", dept: "CIVIL", desc: "Develops smart traffic solutions for safe and efficient urban mobility" },
    { category: "Technical Clubs / Co-Curricular Clubs", name: "Technology for Education", dept: "IT", desc: "Promotes innovative tools and technologies for effective learning environments" },
    { category: "Technical Clubs / Co-Curricular Clubs", name: "AR/VR Club", dept: "IT/AI&DS", desc: "Explores immersive technologies for education, design, and industrial applications" },
    { category: "Technical Clubs / Co-Curricular Clubs", name: "Technology for continuous Monitoring", dept: "CSBS", desc: "Supports pollutant tracking and cold chain monitoring using smart technologies" },
    { category: "Technical Clubs / Co-Curricular Clubs", name: "Image and Video Analytics Club", dept: "AI&DS", desc: "Develops AI-based solutions using image processing and video analytics" },
    { category: "Technical Clubs / Co-Curricular Clubs", name: "Leadership Forum", dept: "MBA", desc: "Enhances leadership qualities, teamwork, and decision-making among students" },
    { category: "Technical Clubs / Co-Curricular Clubs", name: "Business Analytics Club", dept: "MBA", desc: "Promotes data-driven business decision-making and analytical problem-solving skills" },
    { category: "Technical Clubs / Co-Curricular Clubs", name: "Speakers Forum", dept: "MBA", desc: "Develops public speaking, presentation confidence, and communication effectiveness" },
    { category: "Technical Clubs / Co-Curricular Clubs", name: "Business Insights Club", dept: "MBA", desc: "Improves understanding of market trends and business strategy development" },
    { category: "Technical Clubs / Co-Curricular Clubs", name: "Marketing Club", dept: "MBA", desc: "Builds branding, promotion, and strategic marketing skills for business growth" },
    { category: "Technical Clubs / Co-Curricular Clubs", name: "Finance Management Club", dept: "MBA", desc: "Enhances financial planning, investment knowledge, and business finance skills" },
    { category: "Technical Clubs / Co-Curricular Clubs", name: "HR Management Club", dept: "MBA", desc: "Develops people management, recruitment, and organizational behaviour understanding" },
    { category: "Technical Clubs / Co-Curricular Clubs", name: "Smart Operations and Logistics club", dept: "MBA", desc: "Focuses on supply chain efficiency and smart logistics management practices" },

    // Professional Society Linked Clubs
    { category: "Professional Society Linked Clubs", name: "Confederation of Indian Industry (CII)", dept: "CII", desc: "Promotes industry collaboration, leadership, and professional growth among students" },
    { category: "Professional Society Linked Clubs", name: "Salem Productivity Council (SPC)", dept: "SPC", desc: "Enhances productivity awareness and industrial efficiency through practical learning" },
    { category: "Professional Society Linked Clubs", name: "The Indian Chamber of Commerce & Industry (ICCI)", dept: "ICCI", desc: "Encourages business knowledge, entrepreneurship, and industry networking opportunities" },
    { category: "Professional Society Linked Clubs", name: "Society of Automotive Engineers (SAE)", dept: "SAE", desc: "Supports automotive innovation, design skills, and technical project development" },
    { category: "Professional Society Linked Clubs", name: "ISTE - Faculty Chapter", dept: "ISTE", desc: "Strengthens teaching excellence, research, and professional development for faculty" },
    { category: "Professional Society Linked Clubs", name: "Standards Club", dept: "BIS", desc: "Promotes awareness of quality standards and best engineering practices" },
    { category: "Professional Society Linked Clubs", name: "ISHRAE", dept: "ISHRAE", desc: "Develops HVAC knowledge and sustainable environmental engineering practices" },
    { category: "Professional Society Linked Clubs", name: "Quality Circle Forum of India (QCFI)", dept: "QCFI", desc: "Encourages quality improvement, teamwork, and problem-solving in engineering practices" },
    { category: "Professional Society Linked Clubs", name: "National Safety Council (NSC)", dept: "NSC", desc: "Creates awareness on safety practices and accident prevention in workplaces" },
    { category: "Professional Society Linked Clubs", name: "The Institution of Engineers (India)", dept: "IEI", desc: "Enhances professional engineering knowledge and technical competency among students" },
    { category: "Professional Society Linked Clubs", name: "ISTE - Student Chapter", dept: "ISTE", desc: "Develops technical skills, innovation, and professional growth among students" },
    { category: "Professional Society Linked Clubs", name: "IEEE Student Branch", dept: "IEEE", desc: "Promotes advanced technology learning, research, and global technical networking" },
    { category: "Professional Society Linked Clubs", name: "IEEE Circuits and Systems Society", dept: "IEEE", desc: "Promotes circuit design, system innovation, and advanced electronics learning" },
    { category: "Professional Society Linked Clubs", name: "IEEE Computer Society", dept: "IEEE", desc: "Enhances computing knowledge, software skills, and technology-driven innovation" },
    { category: "Professional Society Linked Clubs", name: "IEEE Power and Energy Society", dept: "IEEE", desc: "Focuses on power systems, energy solutions, and electrical engineering advancements" },
    { category: "Professional Society Linked Clubs", name: "Association for Computing Machinery (ACM)", dept: "ACM", desc: "Fosters advanced coding thinking, Raspberry Pi workshops, database contests, and IoT hardware seminars" },
    { category: "Professional Society Linked Clubs", name: "ICT Academy (ICTACT)", dept: "ICTACT", desc: "Provides industry-focused skill development and technology-based professional training" },
    { category: "Professional Society Linked Clubs", name: "Madras Management Association (MMA)", dept: "MMA", desc: "Enhances management knowledge, leadership skills, and professional business exposure" },

    // Social Clubs
    { category: "Social Clubs", name: "NSS", dept: "NSS", desc: "Encourages social service, community development, and student civic responsibility" },
    { category: "Social Clubs", name: "YRC & RRC", dept: "YRC", desc: "Encourages social responsibility, service activities, and humanitarian values" },
    { category: "Social Clubs", name: "Unnat Barath Abhiyan (UBA)", dept: "UBA", desc: "Connects students with rural development and community empowerment initiatives" },
    { category: "Social Clubs", name: "Women Empowerment Cell (WEC)", dept: "WEC", desc: "Promotes gender equality, confidence, and leadership among women students" },
    { category: "Social Clubs", name: "Universal Human Values (UHV) Cell", dept: "UHV", desc: "Develops ethical values, responsibility, and harmony in personal life" },
    { category: "Social Clubs", name: "Yoga and Meditation Club", dept: "Yoga", desc: "Promotes mental wellness, physical fitness, and stress-free healthy living" },
    { category: "Social Clubs", name: "Rotaract Club", dept: "Rotary", desc: "Builds leadership through community service and social development activities" },
    { category: "Social Clubs", name: "Frontier Area Awareness Club", dept: "FAAC", desc: "Creates awareness about recent trends in Engineering and Technology" },

    // Extra-Curricular / Cultural Clubs
    { category: "Extra-Curricular / Cultural Clubs", name: "KIOT Fine Arts Club", dept: "Arts", desc: "Encourages creativity and talent in music, dance, and fine arts" },
    { category: "Extra-Curricular / Cultural Clubs", name: "Tamil Mandram", dept: "Tamil", desc: "Promotes Tamil language, literature, culture, and traditional values" },
    { category: "Extra-Curricular / Cultural Clubs", name: "i-Can Club for Slow Learners", dept: "i-Can", desc: "Supports slow learners through mentoring, confidence building, and academic success" },

    // College Level / Common Centers & Forums
    { category: "College Level / Common Centers & Forums", name: "Centre for Foreign Languages (CFL)", dept: "CFL", desc: "Enhances foreign language skills for global communication and career opportunities" },
    { category: "College Level / Common Centers & Forums", name: "Human Resource Development (HRD) Cell", dept: "HRD", desc: "Strengthens faculty development through training, skill enhancement, and professional growth" },
    { category: "College Level / Common Centers & Forums", name: "Outreach and Admission Committee", dept: "Adm", desc: "Promotes institutional outreach, student engagement, and admission-related activities" },
    { category: "College Level / Common Centers & Forums", name: "Higher Education Cell (India)", dept: "HEC", desc: "Guides students for higher studies opportunities within India" },
    { category: "College Level / Common Centers & Forums", name: "Higher Education Cell (Abroad)", dept: "HEC", desc: "Supports students in pursuing international education and global career pathways" },
    { category: "College Level / Common Centers & Forums", name: "Competitive Examinations Guidance Cell", dept: "Exam", desc: "Provides training and guidance for competitive exams and career advancement" },
    { category: "College Level / Common Centers & Forums", name: "Corporate Contest Cell", dept: "Contest", desc: "Encourages participation in hackathons, innovation challenges, and competitions" }
  ];

  const filteredOrgs = organizations.filter(org => org.category === activeTab);

  return (
    <>
      <section className="student-life">
        <div className="container-custom">

          {/* LEFT CONTENT */}
          <div className="left-content">
            <h1 className="title-custom">
              <span className="title-main-custom">Student</span>
              <span className="title-accent-custom"> Life</span>
            </h1>

            <p className="desc-custom">
              Explore a dynamic network of over 70+ Clubs and Forums that inspire students interests
              and enhance the abilities in Technical, Professional and Research focused activities
              beyond the classroom.
            </p>

            {/* FEATURES */}
            <div className="features-custom">
              <div className="feature-custom">
                <div className="icon-custom">👥</div>
                <div>
                  <h4>Connect</h4>
                  <p>Build strong networks</p>
                </div>
              </div>

              <div className="feature-custom">
                <div className="icon-custom">🎓</div>
                <div>
                  <h4>Grow</h4>
                  <p>Learn new skills</p>
                </div>
              </div>

              <div className="feature-custom">
                <div className="icon-custom">✨</div>
                <div>
                  <h4>Explore</h4>
                  <p>Join clubs & events</p>
                </div>
              </div>

              <div className="feature-custom">
                <div className="icon-custom">❤️</div>
                <div>
                  <h4>Belong</h4>
                  <p>Be part of community</p>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT IMAGES */}
          <div className="right-content">
            <div className="grid-wrapper">
              <div className="decor-blue"></div>
              <div className="decor-yellow"></div>
              <div className="grid-custom">
                <img src={asset14} alt="Student Life 1" />
                <img src={asset5} alt="Student Life 2" />
                <img src={asset12} alt="Student Life 3" />
                <img src={asset13} alt="Student Life 4" />
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* STUDENT LIFE & CLUBS - Unified Grid */}
      <section className="filter-section">
        <div className="slc-header">
          <div className="slc-header-decor">
            <span className="slc-line"></span>
            <span className="slc-dot"></span>
          </div>
          <h2 className="slc-title">Student Life & Clubs</h2>
          <div className="slc-header-decor">
            <span className="slc-dot"></span>
            <span className="slc-line"></span>
          </div>
        </div>
        <p className="slc-subtitle">Empowering talent, building leaders, and creating memories beyond the classroom.</p>

        <div className="slc-grid">
          {/* Category filter tabs */}
          {tabs.map((tab, i) => (
            <button
              key={i}
              className={`slc-card ${activeTab === tab ? 'slc-card-active' : ''}`}
              onClick={() => handleTabSelect(tab)}
            >
              <span className="slc-card-icon">
                {tab === "Department Associations" && (
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
                )}
                {tab === "Technical Clubs / Co-Curricular Clubs" && (
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z"/></svg>
                )}
                {tab === "Professional Society Linked Clubs" && (
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="7" width="20" height="14" rx="2" ry="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/></svg>
                )}
                {tab === "Social Clubs" && (
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
                )}
                {tab === "Extra-Curricular / Cultural Clubs" && (
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2L2 7l10 5 10-5-10-5z"/><path d="M2 17l10 5 10-5"/><path d="M2 12l10 5 10-5"/></svg>
                )}
                {tab === "College Level / Common Centers & Forums" && (
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>
                )}
              </span>
              <span className="slc-card-label">{tab}</span>
              {activeTab === tab && <span className="slc-card-underline"></span>}
            </button>
          ))}

          {/* Club navigation buttons */}
          <button className="slc-card" onClick={() => navigate('/resources/student-life/bdbi')}>
            <span className="slc-card-icon"><svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/><polyline points="3.27 6.96 12 12.01 20.73 6.96"/><line x1="12" y1="22.08" x2="12" y2="12"/></svg></span>
            <span className="slc-card-label">Big Data Big Insights Club</span>
          </button>
          <button className="slc-card" onClick={() => navigate('/resources/student-life/cegc')}>
            <span className="slc-card-icon"><svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/></svg></span>
            <span className="slc-card-label">Competitive Examinations Guidance Cell</span>
          </button>
          <button className="slc-card" onClick={() => navigate('/resources/student-life/oracle-academy')}>
            <span className="slc-card-icon"><svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"/><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"/></svg></span>
            <span className="slc-card-label">KIOT - Oracle Academy</span>
          </button>
          <button className="slc-card" onClick={() => navigate('/resources/student-life/ieee')}>
            <span className="slc-card-icon"><svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg></span>
            <span className="slc-card-label">IEEE Student Branch</span>
          </button>
          <button className="slc-card" onClick={() => navigate('/resources/student-life/ieee-pes')}>
            <span className="slc-card-icon"><svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="1" y="6" width="18" height="12" rx="2" ry="2"/><line x1="23" y1="13" x2="23" y2="11"/></svg></span>
            <span className="slc-card-label">IEEE PES</span>
          </button>
          <button className="slc-card" onClick={() => navigate('/resources/student-life/scintel')}>
            <span className="slc-card-icon"><svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="4" y="4" width="16" height="16" rx="2" ry="2"/><rect x="9" y="9" width="6" height="6"/><line x1="9" y1="1" x2="9" y2="4"/><line x1="15" y1="1" x2="15" y2="4"/><line x1="9" y1="20" x2="9" y2="23"/><line x1="15" y1="20" x2="15" y2="23"/><line x1="20" y1="9" x2="23" y2="9"/><line x1="20" y1="14" x2="23" y2="14"/><line x1="1" y1="9" x2="4" y2="9"/><line x1="1" y1="14" x2="4" y2="14"/></svg></span>
            <span className="slc-card-label">SCINTEL Association</span>
          </button>
          <button className="slc-card" onClick={() => navigate('/resources/student-life/sae')}>
            <span className="slc-card-icon"><svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M14 16H9m10 0h3v-3.15a1 1 0 0 0-.84-.99L16 11l-2.7-3.6a1 1 0 0 0-.8-.4H5.24a2 2 0 0 0-1.8 1.1l-.8 1.63A6 6 0 0 0 2 12.42V16h2"/><circle cx="6.5" cy="16.5" r="2.5"/><circle cx="16.5" cy="16.5" r="2.5"/></svg></span>
            <span className="slc-card-label">SAE</span>
          </button>
          <button className="slc-card" onClick={() => navigate('/resources/student-life/soc-club')}>
            <span className="slc-card-icon"><svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="4" y="4" width="16" height="16" rx="2" ry="2"/><rect x="9" y="9" width="6" height="6"/><line x1="9" y1="1" x2="9" y2="4"/><line x1="15" y1="1" x2="15" y2="4"/><line x1="9" y1="20" x2="9" y2="23"/><line x1="15" y1="20" x2="15" y2="23"/><line x1="20" y1="9" x2="23" y2="9"/><line x1="20" y1="14" x2="23" y2="14"/><line x1="1" y1="9" x2="4" y2="9"/><line x1="1" y1="14" x2="4" y2="14"/></svg></span>
            <span className="slc-card-label">SoC Club</span>
          </button>
          <button className="slc-card" onClick={() => navigate('/resources/student-life/elderly-childcare')}>
            <span className="slc-card-icon"><svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg></span>
            <span className="slc-card-label">Technology for Elderlycare and Childcare Club</span>
          </button>
          <button className="slc-card" onClick={() => navigate('/resources/student-life/continuous-monitoring')}>
            <span className="slc-card-icon"><svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg></span>
            <span className="slc-card-label">Technology for Continuous Monitoring</span>
          </button>
          <button className="slc-card" onClick={() => navigate('/resources/student-life/acm')}>
            <span className="slc-card-icon"><svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg></span>
            <span className="slc-card-label">ACF (ACM)</span>
          </button>
          <button className="slc-card" onClick={() => navigate('/resources/student-life/higher-education-abroad')}>
            <span className="slc-card-icon"><svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg></span>
            <span className="slc-card-label">Higher Education Cell (Abroad)</span>
          </button>
        </div>

        {/* Anchor point for scrolling */}
        <div id="slc-results-section" style={{ scrollMarginTop: '100px' }}></div>

        {(activeTab === "Technical Clubs / Co-Curricular Clubs" ||
          activeTab === "Professional Society Linked Clubs" ||
          activeTab === "Social Clubs") ? (
          <div className="clubs-table-container">
            <table className="clubs-table">
              <thead>
                <tr>
                  <th style={{ width: '15%' }}>Department</th>
                  <th style={{ width: '35%' }}>Clubs</th>
                  <th style={{ width: '50%' }}>Description</th>
                </tr>
              </thead>
              <tbody>
                {filteredOrgs.map((org, i) => (
                  <tr key={i}>
                    <td className="dept-cell">{org.dept}</td>
                    <td className="name-cell">
                      {org.name === "Big Data Big Insights (BDBI) Club" ? (
                        <button
                          onClick={() => navigate('/resources/student-life/bdbi')}
                          className="text-[#224292] hover:text-[#ffc107] font-bold text-left flex items-center gap-1.5 transition-colors cursor-pointer group"
                        >
                          {org.name}
                          <ArrowUpRight size={14} className="opacity-70 group-hover:opacity-100 transition-opacity" />
                        </button>
                      ) : org.name === "KIOT Oracle Academy" ? (
                        <button
                          onClick={() => navigate('/resources/student-life/oracle-academy')}
                          className="text-[#224292] hover:text-[#ffc107] font-bold text-left flex items-center gap-1.5 transition-colors cursor-pointer group"
                        >
                          {org.name}
                          <ArrowUpRight size={14} className="opacity-70 group-hover:opacity-100 transition-opacity" />
                        </button>
                      ) : org.name === "IEEE Student Branch" ? (
                        <button
                          onClick={() => navigate('/resources/student-life/ieee')}
                          className="text-[#224292] hover:text-[#ffc107] font-bold text-left flex items-center gap-1.5 transition-colors cursor-pointer group"
                        >
                          {org.name}
                          <ArrowUpRight size={14} className="opacity-70 group-hover:opacity-100 transition-opacity" />
                        </button>
                      ) : org.name === "IEEE Power and Energy Society" ? (
                        <button
                          onClick={() => navigate('/resources/student-life/ieee-pes')}
                          className="text-[#224292] hover:text-[#ffc107] font-bold text-left flex items-center gap-1.5 transition-colors cursor-pointer group"
                        >
                          {org.name}
                          <ArrowUpRight size={14} className="opacity-70 group-hover:opacity-100 transition-opacity" />
                        </button>
                      ) : org.name === "Society of Automotive Engineers (SAE)" ? (
                        <button
                          onClick={() => navigate('/resources/student-life/sae')}
                          className="text-[#224292] hover:text-[#ffc107] font-bold text-left flex items-center gap-1.5 transition-colors cursor-pointer group"
                        >
                          {org.name}
                          <ArrowUpRight size={14} className="opacity-70 group-hover:opacity-100 transition-opacity" />
                        </button>
                      ) : org.name === "Systems on Chip (SoC) Club" ? (
                        <button
                          onClick={() => navigate('/resources/student-life/soc-club')}
                          className="text-[#224292] hover:text-[#ffc107] font-bold text-left flex items-center gap-1.5 transition-colors cursor-pointer group"
                        >
                          {org.name}
                          <ArrowUpRight size={14} className="opacity-70 group-hover:opacity-100 transition-opacity" />
                        </button>
                      ) : org.name === "Technology for Elderly Care and Child Care" ? (
                        <button
                          onClick={() => navigate('/resources/student-life/elderly-childcare')}
                          className="text-[#224292] hover:text-[#ffc107] font-bold text-left flex items-center gap-1.5 transition-colors cursor-pointer group"
                        >
                          {org.name}
                          <ArrowUpRight size={14} className="opacity-70 group-hover:opacity-100 transition-opacity" />
                        </button>
                      ) : org.name === "Technology for continuous Monitoring" ? (
                        <button
                          onClick={() => navigate('/resources/student-life/continuous-monitoring')}
                          className="text-[#224292] hover:text-[#ffc107] font-bold text-left flex items-center gap-1.5 transition-colors cursor-pointer group"
                        >
                          {org.name}
                          <ArrowUpRight size={14} className="opacity-70 group-hover:opacity-100 transition-opacity" />
                        </button>
                      ) : org.name === "Association for Computing Machinery (ACM)" ? (
                        <button
                          onClick={() => navigate('/resources/student-life/acm')}
                          className="text-[#224292] hover:text-[#ffc107] font-bold text-left flex items-center gap-1.5 transition-colors cursor-pointer group"
                        >
                          {org.name}
                          <ArrowUpRight size={14} className="opacity-70 group-hover:opacity-100 transition-opacity" />
                        </button>
                      ) : (
                        org.name
                      )}
                    </td>
                    <td>{org.desc}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : (
          <div className="associations-grid">
            {filteredOrgs.length > 0 ? (
              filteredOrgs.map((org, i) => {
                const isClickable = org.name === 'FLAME' || 
                                    org.name === 'INTEC' || 
                                    org.name === 'VIBES' || 
                                    org.name === 'PACE' || 
                                    org.name === "AMBER'Z" || 
                                    org.name === 'SCINTEL' ||
                                    org.name === 'Higher Education Cell (Abroad)';
                return (
                  <div
                    key={i}
                    className={`association-card ${isClickable ? 'cursor-pointer hover:border-[#ffc107] transition-all duration-300' : ''}`}
                    onClick={() => {
                      if (!isClickable) return;
                      if (org.name === 'FLAME') {
                        navigate('/resources/student-life/flame');
                      } else if (org.name === 'INTEC') {
                        navigate('/resources/student-life/intec');
                      } else if (org.name === 'VIBES') {
                        navigate('/resources/student-life/vibes');
                      } else if (org.name === 'PACE') {
                        navigate('/resources/student-life/pace');
                      } else if (org.name === "AMBER'Z") {
                        navigate('/resources/student-life/amberz');
                      } else if (org.name === 'SCINTEL') {
                        navigate('/resources/student-life/scintel');
                      } else if (org.name === 'Higher Education Cell (Abroad)') {
                        navigate('/resources/student-life/higher-education-abroad');
                      }
                    }}
                  >
                    {isClickable && (
                      <div className="assoc-arrow">
                        <ArrowUpRight size={18} />
                      </div>
                    )}
                    <span className="assoc-tag">{org.dept}</span>
                    <div>
                      <h3 className="assoc-name">{org.name}</h3>
                    </div>
                    <p className="assoc-desc">{org.desc}</p>
                  </div>
                );
              })
            ) : (
              <div className="col-span-full py-20 text-center">
                <p className="text-slate-400 font-bold">Content for this category is coming soon...</p>
              </div>
            )}
          </div>
        )}
      </section>

      {/* GALLERY SECTION (LAST SECTION) */}
      <section className="gallery-section">
        <div className="gallery-header">
          <h2>Campus Moments</h2>
          <p>Glimpses of the vibrant life, events, and memories at Knowledge Institute of Technology.</p>
        </div>

        <div className="gallery-grid">
          {galleryImages.map((img, i) => (
            <div key={i} className="gallery-item" onClick={() => setSelectedImage(img.src)}>
              <img src={img.src} alt={img.title} />
            </div>
          ))}
        </div>
      </section>

      {/* LIGHTBOX POPUP */}
      {selectedImage && (
        <div className="lightbox-overlay" onClick={() => setSelectedImage(null)}>
          <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
            <button className="lightbox-close" onClick={() => setSelectedImage(null)}>
              <X size={24} />
            </button>
            <img src={selectedImage} alt="Full View" className="lightbox-img" />
          </div>
        </div>
      )}
    </>
  );
}
