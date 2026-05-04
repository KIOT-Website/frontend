import React, { useState } from 'react';
import "./studentLife.css";
import { ArrowUpRight, X } from 'lucide-react';

// Image Imports
import asset4 from '../assets/student life/Asset 4.png';
import asset5 from '../assets/student life/Asset 5.png';
import asset12 from '../assets/student life/Asset 12.png';
import asset13 from '../assets/student life/Asset 13.png';
import asset14 from '../assets/student life/Asset 14.png';
import asset20 from '../assets/student life/Asset 20.png';
import asset21 from '../assets/student life/Asset 21 (2).png';
import asset22 from '../assets/student life/Asset 22 (2).png';
import asset23 from '../assets/student life/Asset 23 (3).png';
import asset24 from '../assets/student life/Asset 24.png';
import asset25 from '../assets/student life/Asset 25 (2).png';
import asset26 from '../assets/student life/Asset 26.png';

export default function StudentLifePage() {
  const [activeTab, setActiveTab] = useState("Department Associations");
  const [selectedImage, setSelectedImage] = useState(null);

  const tabs = [
    "Department Associations",
    "Technical Clubs / Co-Curricular Clubs",
    "Professional Society Linked Clubs",
    "Social Clubs",
    "Extra-Curricular / Cultural Clubs",
    "College Level / Common Centers & Forums",
    "i-Can Club"
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

    // College Level / Common Centers & Forums
    { category: "College Level / Common Centers & Forums", name: "Centre for Foreign Languages (CFL)", dept: "CFL", desc: "Enhances foreign language skills for global communication and career opportunities" },
    { category: "College Level / Common Centers & Forums", name: "Human Resource Development (HRD) Cell", dept: "HRD", desc: "Strengthens faculty development through training, skill enhancement, and professional growth" },
    { category: "College Level / Common Centers & Forums", name: "Outreach and Admission Committee", dept: "Adm", desc: "Promotes institutional outreach, student engagement, and admission-related activities" },
    { category: "College Level / Common Centers & Forums", name: "Higher Education Cell (India)", dept: "HEC", desc: "Guides students for higher studies opportunities within India" },
    { category: "College Level / Common Centers & Forums", name: "Higher Education Cell (Abroad)", dept: "HEC", desc: "Supports students in pursuing international education and global career pathways" },
    { category: "College Level / Common Centers & Forums", name: "Competitive Examinations Guidance Cell", dept: "Exam", desc: "Provides training and guidance for competitive exams and career advancement" },
    { category: "College Level / Common Centers & Forums", name: "Corporate Contest Cell", dept: "Contest", desc: "Encourages participation in hackathons, innovation challenges, and competitions" },

    // i-Can Club
    { category: "i-Can Club", name: "i-Can Club for Slow Learners", dept: "i-Can", desc: "Supports slow learners through mentoring, confidence building, and academic success" }
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

    {/* FILTERABLE CLUBS & ASSOCIATIONS */}
    <section className="filter-section">
      <div className="filter-tabs">
        {tabs.map((tab, i) => (
          <button 
            key={i} 
            className={`filter-tab ${activeTab === tab ? 'active' : ''}`}
            onClick={() => setActiveTab(tab)}
          >
            {tab}
          </button>
        ))}
      </div>
      
      {(activeTab === "Technical Clubs / Co-Curricular Clubs" || 
        activeTab === "Professional Society Linked Clubs" || 
        activeTab === "Social Clubs") ? (
        <div className="clubs-table-container">
          <table className="clubs-table">
            <thead>
              <tr>
                <th style={{width: '15%'}}>Department</th>
                <th style={{width: '35%'}}>Clubs</th>
                <th style={{width: '50%'}}>Description</th>
              </tr>
            </thead>
            <tbody>
              {filteredOrgs.map((org, i) => (
                <tr key={i}>
                  <td className="dept-cell">{org.dept}</td>
                  <td className="name-cell">{org.name}</td>
                  <td>{org.desc}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <div className="associations-grid">
          {filteredOrgs.length > 0 ? (
            filteredOrgs.map((org, i) => (
              <div key={i} className="association-card">
                {activeTab === "Department Associations" && (
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
            ))
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
