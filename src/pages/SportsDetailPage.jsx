import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Trophy, ArrowLeft, Calendar, MapPin, User, Medal, Star, Award, Users, Flag, ArrowUpRight } from 'lucide-react';

const ACHIEVEMENTS_DATA = {
    'achievements': {
        title: 'Sports Achievements',
        subtitle: 'Official Records (2025-26)',
        icon: <Trophy className="text-[#ffc107]" size={32} />,
        sections: [
            {
                title: 'Anna University Level / ALL INDIA LEVEL (2025-26)',
                type: 'table',
                headers: ['S.NO.', 'NAME OF THE GAME', 'DATE', 'VENUE', 'STUDENTS DETAILS'],
                rows: [
                    ['1', 'WUSHU', '04.05.2026-09.05.2026', 'UNIVERSITY OF KASHMIR, SRINAGAR', 'A. PARTHIPAN, I-MBA'],
                    ['2', 'NETBALL', '09.03.2026-13.03.2026', 'SANJEEV AGARWAL GLOBAL EDUCATIONAL UNIVERSITY, BHOPAL', 'V. HARISH, I-BE-IT']
                ]
            },
            {
                title: 'INTER ZONE LEVEL (2025-26)',
                type: 'table',
                headers: ['S.NO.', 'NAME OF THE GAME', 'DATE', 'VENUE', 'STUDENTS DETAILS', 'POSITION'],
                rows: [
                    ['1', 'BOXING (MEN)', '10.11.2025', 'GOVERNMENT ENGINEERING COLLEGE, BARGUR', '1. A. LOKESH, I-MBA-IEV\n2. S. PRIYADHARSAN, II-CSE\n3. A.R. GOWTHAM PRIYAN, III-CSE', 'III']
                ]
            },
            {
                title: 'ZONE LEVEL (2025-26)',
                type: 'table',
                headers: ['S.NO', 'NAME OF THE SPORTS & GAMES', 'DATE', 'VENUE', 'PARTICIPATION', 'POSITION'],
                rows: [
                    ['1', 'CHESS (M)', '02.09.2025 - 03.09.2025', 'R.P. SARATHY INSTITUTE OF TECHNOLOGY, SALEM', '6', '2nd Place'],
                    ['2', 'CHESS (W)', '-', '-', '6', '2nd Place'],
                    ['3', 'HOCKEY (M)', '14.09.2025-15.09.2025', 'ADHIYAMAAN COLLEGE OF ENGINEERING, HOSUR', '18', '3rd Place'],
                    ['4', 'FOOTBALL (M)', '16.09.2025-17.09.2025', 'ADHIYAMAAN COLLEGE OF ENGINEERING, HOSUR', '22', '2nd Place'],
                    ['5', 'TABLE TENNIS (M)', '19.09.2025-20.09.2025', 'DHIRAJLAL GANDHI COLLEGE TECHNOLOGY, SALEM', '5', '1st Place'],
                    ['6', 'BADMINTON (M)', '22.09.2025-23.09.2025', 'MAHENDRA ENGINEERING COLLEGE, MALLASAMUDRAM', '7', '1st Place'],
                    ['7', 'BADMINTON (w)', '-', '-', '5', '3rd Place'],
                    ['8', 'TABLE TENNIS (W)', '10.10.2025-11.10.2025', 'GOVERNMENT COLLEGE OF ENGINEERING, BARGUR', '5', '1st Place'],
                    ['9', 'HANDBALL (M)', '15.10.2025-16.10.2025', 'DHIRAJLAL GANDHI COLLEGE TECHNOLOGY, SALEM', '16', '3rd Place'],
                    ['10', 'ATHLETICS (M)', '31.10.2025-01.11.2025', 'ADHIYAMAAN COLLEGE OF ENGINEERING, HOSUR', 'MEN:\ni. Hammer Throw (1st Place)\nii. Half Marathon (2nd Place)\niii. 20 Km. Walk (3rd Place)\niv. 400 mts. Hurdles (3rd Place)\nv. 5000 mts. (3rd Place)', 'Multiple'],
                    ['11', 'ATHLETICS (W)', '-', '-', 'WOMEN:\ni. Shot Put (1st Place)\nii. Hammer Throw (3rd Place)', 'Multiple'],
                    ['12', 'BASKETBALL (W)', '06.11.2025-07.11.2025', 'GOVERNMENT COLLEGE OF ENGINEERING, BARGUR', '12', '1st Place']
                ]
            },
            {
                title: 'OPEN TOURNAMENTS - INTERNATIONAL LEVEL (2025-26)',
                type: 'table',
                headers: ['S.NO.', 'NAME OF THE GAME', 'DATE', 'VENUE', 'STUDENTS DETAILS', 'POSITION'],
                rows: [
                    ['1', 'KICK BOXING (MEN) - 5th WAKO INDIA OPEN', '04.02.2026-08.02.2026', 'KD JADHAV INDOOR STADIUM, NEW DELHI', 'A. PARTHIPAN, I-MBA', 'I-PLACE'],
                    ['2', 'HANDBALL (MEN) - INDO NEPAL CHAMPIONSHIP', '04.11.2025-07.11.2025', 'RANGASHALA STADIUM, POKHARA, NEPAL', 'M. TAMILARASAN, III-MECH', 'I-PLACE'],
                    ['3', 'CHESS (MEN) - 23rd RCC INTERNATIONAL', '27.09.2025-28.09.2025', 'SHARADA VIDHYALAIYA, MANGALURU', 'G. MATHAN, I-IT', '4th PLACE']
                ]
            },
            {
                title: 'OPEN TOURNAMENTS - NATIONAL LEVEL (2025-26)',
                type: 'table',
                headers: ['S.NO.', 'NAME OF THE GAME', 'DATE', 'VENUE', 'STUDENTS DETAILS', 'POSITION'],
                rows: [
                    ['1', 'HANDBALL (MEN) - 7th ISA NATIONAL GAME', '15.01.2026-18.01.2026', 'TATYA TOPE STADIUM, BHOPAL', 'M. TAMILARASAN, III-MECH', 'I-PLACE'],
                    ['2', 'HANDBALL (MEN) - SCHOOL GAMES FOUNDATION', '04.10.2025-06.10.2025', 'PRATAP SPORTS SCHOOL, HARYANA', 'M. TAMILARASAN, III-MECH', 'I-PLACE'],
                    ['3', 'CHESS (MEN) - 4th CHECK MATE ALL INDIA', '21.09.2025', 'LOTUS CONENTION CENTRE, BENGALORE', 'G. MATHAN, I-IT', 'I-PLACE']
                ]
            },
            {
                title: 'STATE LEVEL (2025-26)',
                type: 'table',
                headers: ['S.NO.', 'NAME OF THE GAME', 'DATE', 'VENUE', 'STUDENTS DETAILS', 'POSITION'],
                rows: [
                    ['1', 'CHESS (WOMEN) - 7th BATTLE FIELD', '21.12.2025', 'AVS COLLEGE, SALEM', 'M. KIRUTHIGA, II-CSE', 'III-PLACE'],
                    ['2', 'CHESS (MEN) - 1st TAMILNADU STATE LEVEL', '02.11.2025', 'SRI VIDYA MANDIR SCHOOL, SALEM', 'G. MATHAN, IT', 'I-PLACE'],
                    ['3', 'POWER LIFTING (MEN) - STATE CLASSIC', '26.09.2025-28.09.2025', 'SUGUNA AUDITORIUM, COIMBATORE', 'V. MADHAVAN, II-MECH', 'II-PLACE'],
                    ['4', 'CHESS (MEN) - 2nd BATTLE FIELD INTERNATIONAL', '14.09.2025', 'AVS COLLEGE, SALEM', 'G. MATHAN, I-IT', 'III-PLACE'],
                    ['5', 'POWERLIFTING (MEN) - STATE EQUIPPED', '26.04.2025-27.04.2025', 'KPRIET, COIMBATORE', 'V. MADHAVAN, II-MECH', 'II-PLACE']
                ]
            },
            {
                title: 'DISTRICT LEVEL (2025-26)',
                type: 'table',
                headers: ['S.NO.', 'NAME OF THE GAME', 'DATE', 'VENUE', 'STUDENTS DETAILS', 'POSITION'],
                rows: [
                    ['1', 'BOXING (MEN) - NAMAKKAL DISTRICT', '22.02.2026', 'SHINE HILL ACADEMY, VALAYAPATTI', '1. JERICK, I-CSE\n2. M. KARTHIKEYAN, I-IT\n3. G. HARIHARAN, I-CSE\n4. K. VISHNU, II-CSE\n5. S. SESHATHRI, II-CSE\n6. V.G. GIRIVASAN, I-ECE', 'Multiple 1st & 2nd Places'],
                    ['2', 'BADMINTON (MEN) DOUBLES - SALEM DISTRICT', '14.01.2026', 'BAY BADMINTON ACADEMY, SALEM', 'NATHAN SHIEH, III-CSE\nM NAGAPRASAD, II-CSBS', 'II-PLACE'],
                    ['3', 'JUDO (MEN) - SALEM DISTRICT', '14.12.2025', 'DHIRAJLAL GANDHI COLLEGE OF TECHNOLOGY, SALEM', 'M. MAGINAV, I-CSBS', 'I-PLACE'],
                    ['4', 'BOXING (MEN) - TIRUPUR DISTRICT', '14.12.2025', 'A.V.P COLLEGE, TIRUPUR', 'A. PARTHIPAN, I-MBA (I-PLACE)\nG. HARIRAM, I-CSE (III-PLACE)', 'Multiple'],
                    ['5', 'TABLE TENNIS (SALEM DISTRICT)', '06.09.2025-07.09.2025', 'SKJ ACADEMY, SALEM', 'N. MOULIKA, III-CSE\nV.P. SUBHASHREE, III-CSE\nV. SOUNDARYA, III-AI&DS\nVASUNDRARAJI R, II-AI&DS', 'Multiple II & III Places'],
                    ['6', 'POWERLIFTING (SALEM WEST DISTRICT)', '17.08.2025', 'JAYARANI COLLEGE, SALEM', 'S. GOWTHAM, III-AI&DS', 'Dead Lift II, Bench Press II'],
                    ['7', 'POWERLIFTING (SALEM DISTRICT BENCH PRESS)', '15.06.2025', 'SALEM', 'S. GOWTHAM, III-AI&DS\nV. MADHAVAN, II-MECH', 'II & III Places'],
                    ['8', 'BADMINTON (SALEM DISTRICT CHAMPIONSHIP)', '08.05.2025', 'PIONEER CLUB, SALEM', 'NATHAN SHIEH, II-CSE', 'III PLACE'],
                    ['9', 'BADMINTON (1st GCE TROPHY)', '08.05.2025', 'GCE SALEM', 'Multiple Students', 'II-PLACE']
                ]
            },
            {
                title: 'CM TROPHY SALEM DISTRICT LEVEL (2025-26)',
                type: 'table',
                headers: ['S.NO.', 'NAME OF THE GAME', 'DATE', 'VENUE', 'STUDENTS DETAILS', 'POSITION'],
                rows: [
                    ['1', 'BADMINTON (MEN) DOUBLES', '28.08.2025-29.08.2025', 'BAY BADMINTON ACADEMY, SALEM', 'NATHAN SHIEH, III-CSE\nM NAGAPRASAD, II-CSBS', 'II-PLACE'],
                    ['2', 'BADMINTON (MEN) SINGLES', '28.08.2025-29.08.2025', 'BAY BADMINTON ACADEMY, SALEM', 'NATHAN SHIEH, III-CSE', 'I-PLACE'],
                    ['3', 'BADMINTON (WOMEN) DOUBLES', '28.08.2025-29.08.2025', 'BAY BADMINTON ACADEMY, SALEM', 'N. MOSIKA, II-CSE\nM. KAIYALVIZHI, II-CSE', 'II-PLACE'],
                    ['4', 'CHESS (WOMEN)', '28.08.2025-29.08.2025', 'ST. JOHNS SCHOOL, SALEM', 'M. KIRUTHIGA, II-CSE (I-PLACE)\nP.S. AATHMIKA, I-CSBS (II-PLACE)', 'Multiple'],
                    ['5', 'TABLE TENNIS (WOMEN)', '28.08.2025-29.08.2025', 'SKJ TABLE TENNIS ACADMY, SALEM', 'N. MOULIKA, III-CSE\nV.P. SUBHASHREE, III-CSE', 'III-PLACE']
                ]
            }
        ]
    },
    'zone-level': {
        title: 'Zone Level',
        subtitle: 'Official Records (2025-26)',
        icon: <Medal className="text-[#ffc107]" size={32} />,
        sections: [
            {
                title: 'ANNA UNIVERSITY ZONE VII PARTICIPATION DETAILS (2025-26)',
                type: 'table',
                headers: ['S.NO.', 'NAME OF THE SPORTS & GAMES', 'DATE', 'VENUE', 'TOTAL PARTICIPATION', 'POSITION'],
                rows: [
                    ['1', 'KABADDI (M)', '11.09.2025-12.09.2025', 'ADHIYAMAAN COLLEGE OF ENGINEERING, HOSUR', '12', 'Participation'],
                    ['2', 'CRICKET (M)', '24.09.2025-26.09.2025', 'ADHIYAMAAN COLLEGE OF ENGINEERING, HOSUR', '16', 'Semi Final'],
                    ['3', 'BASKETBALL (M)', '29.09.2025-30.09.2025', 'DHIRAJLAL GANDHI COLLEGE TECHNOLOGY, SALEM', '12', 'Semi Final'],
                    ['4', 'TENNIS (M)', '10.10.2025-11.10.2025', 'GOVERNMENT COLLEGE OF ENGINEERING, BARGUR', '5', 'Participation'],
                    ['5', 'BALL BADMINTON (M)', '16.10.2025-17.10.2025', 'SENGUNTHAR ENGINEERING COLLEGE. TIRUCHENGODE', '10', 'Participation'],
                    ['6', 'BALL BADMINTON (W)', '-', '-', '10', 'Participation'],
                    ['7', 'ATHLETICS (M)', '31.10.2025-01.11.2025', 'ADHIYAMAAN COLLEGE OF ENGINEERING, HOSUR', '22', 'Participation'],
                    ['8', 'ATHLETICS (W)', '-', '-', '3', 'Participation'],
                    ['9', 'VOLLEYBALL (M)', '02.11.2025-03.11.2025', 'ER. PERUMAL MANIMEGALAI COLLEGE OF TECHNOLOGY, HOSUR', '12', 'Participation'],
                    ['10', 'KHO-KHO (M)', '06.12.2025-07.12.2025', 'GOVERNMENT COLLEGE OF ENGINEERING, BARGUR', '15', 'Participation']
                ]
            },
            {
                title: 'INTER ZONE LEVEL PARTICIPATION (2025-26)',
                type: 'table',
                headers: ['S.NO.', 'NAME OF THE GAME', 'DATE', 'VENUE', 'NO OF STUDENTS'],
                rows: [
                    ['1', 'POWERLIFTING (MEN)', '17.04.2026-18.04.2026', 'INDIAN INSTITUTE OF HANDLOOM TECHNOLOGY, SALEM', '6'],
                    ['2', 'WUSHU (MEN)', '16.03.2026-17.03.2026', 'BHARATH NIKENDAN ENGINEERING COLLEGE, THENI', '7'],
                    ['3', 'NETBALL (M)', '09.03.2026-13.03.2026', 'SANJEEV AGARWAL GLOBAL EDUCATIONAL UNIVERSITY, BHOPAL', '1'],
                    ['4', 'BODYBUILDING', '03.02.2026', 'INDIAN INSTITUTE OF HANDLOOM TECHNOLOGY, SALEM', '6'],
                    ['5', 'ATHLETICS (MEN & WOMEN)', '29.11.2025-30.11.2025', 'KONGU NADU ENGINEERING & TECHNOLOGY, THOTTIAM', '1+1'],
                    ['6', 'BASKETBALL (WOMEN)', '15.11.2025-16.11.2025', 'DR. MAHALINGAM COLLEGE OF ENGINEERING & TECHNOLOGY, POLLACHI', '12'],
                    ['7', 'JUDO (MEN & WOMEN)', '14.11.2025', 'PAAVAI ENGINEERING COLLEGE, NAMAKKAL', '2+1'],
                    ['8', 'BOXING (MEN)', '10.11.2025', 'GOVERNMENT ENGINEERING COLLEGE, BARGUR', '8'],
                    ['9', 'TABLE TENNIS (MEN & WOMEN)', '31.10.2025-01.10.2025', 'RAJALAKSHI ENGINEERING COLLEGE, CHENNAI', '5+5'],
                    ['10', 'BADMMINTON (MEN)', '15.10.2025-17.10.2025', 'KAMARAJAR COLLEGE OF ENGINEERING, VIRUDUNAGAR', '7']
                ]
            }
        ]
    },
    'open-tournaments': {
        title: 'Open Tournaments (Faculty)',
        subtitle: 'Official Records (2025-26)',
        icon: <Users className="text-[#ffc107]" size={32} />,
        sections: [
            {
                title: 'KIT TROPHY FACULTY MEET 2026 (STATE LEVEL)',
                type: 'table',
                headers: ['S.NO.', 'GAME', 'DATE', 'VENUE', 'FACULTY DETAILS', 'POSITION'],
                rows: [
                    ['1', 'TABLE TENNIS (WOMEN)', '14.02.2026', 'KALAIGNARKARUNANIDHI INSTITUTE OF TECHNOLOGY', 'R.DEVI-PD', 'I-PLACE'],
                    ['2', 'CHESS (MEN)', '-', '-', 'R.KARTHIK-AP/CSBS', 'III-PLACE'],
                    ['3', 'CARROM (MEN)', '-', '-', 'R.RAVIKUMAR-ASP/CSE, P.SAKTHIVEL-ASST.LIB.', 'III-PLACE']
                ]
            },
            {
                title: 'NEC SILVER JUBILEE STATE LEVEL FACULTY TOURNAMENT 2026',
                type: 'table',
                headers: ['S.NO.', 'GAME / CATEGORY', 'DATE', 'VENUE', 'FACULTY DETAILS', 'POSITION'],
                rows: [
                    ['1', 'TABLE TENNIS (WOMEN - 3 MEMBERS)', '04.04.2026', 'NANDHA ENGINEERING COLLEGE, ERODE', 'R.DEVI-PD, J.SARITHA-AP/MATHS, V.VADIVU-AP/ECE', 'I-PLACE'],
                    ['2', 'BADMINTON (WOMEN DOUBLES)', '04.04.2026', 'NANDHA ENGINEERING COLLEGE, ERODE', 'R.DEVI-PD, V.VADIVU-AP/ECE, S.REKHA-ASP/S&H, I.POONGODI-LT/ECE', 'II-PLACE'],
                    ['3', 'THROWBALL (WOMEN - 12 MEMBERS)', '04.04.2026', 'NANDHA ENGINEERING COLLEGE, ERODE', 'V.VADIVU, M.DEEPA, V.GOMATHI, S.SARANYA, T.RANJANI, D.RAMYA, G.PAVITHRA, M.SARANYA, C.NITHYA, S.REKHA, I.POONGODI, P.REKHA, J.SARITHA', 'Participation'],
                    ['4', 'CHESS (WOMEN)', '04.04.2026', 'NANDHA ENGINEERING COLLEGE, ERODE', 'J.SARITHA-AP/MATHS, M.SARANYA-AP/CSE', 'Participation'],
                    ['5', 'TABLE TENNIS (MEN - 3 MEMBERS)', '04.04.2026', 'NANDHA ENGINEERING COLLEGE, ERODE', 'P.MANIKANDAN-PD, B.DINESH-AP/EEE, KARTHIKEYAN-AP/EEE', 'Participation'],
                    ['6', 'BADMINTON (MEN DOUBLES)', '04.04.2026', 'NANDHA ENGINEERING COLLEGE, ERODE', 'M.K.SAMPATH-AP, B.DINESH-AP/EEE, MOHANRAJ-LT/CSE, V.KRISHNAN-LT/EEE', 'Participation'],
                    ['7', 'CRICKET (MEN - 15 MEMBERS)', '04.04.2026', 'NANDHA ENGINEERING COLLEGE, ERODE', 'P.MANIKANDAN-PD, K.N.KARTHICK, T.VENKATACHALAM, S.NAVEENKUMAR, T.RAJA, P.MANIKANDAN-MBA, P.DINESH, KARTHICK, KARTHICK-IDEA, ARUL KUMAR, GANESH, R.GOPI, S.SELVARAJ, MOHAN-LT/CSE', 'Participation']
                ]
            }
        ]
    },
    'organized-tournaments': {
        title: 'Organized Tournaments',
        subtitle: 'Events Hosted @ KIOT (2025-26)',
        icon: <Calendar className="text-[#ffc107]" size={32} />,
        sections: [
            {
                title: '6th KIOT TROPHY (2025-26) - DISTRICT LEVEL',
                type: 'table',
                headers: ['S.NO.', 'ASSOCIATION', 'GAME', 'VENUE', 'DATE', 'PARTICIPATION'],
                rows: [
                    ['1', 'Salem District Football Association', 'FOOTBALL (Boys)', 'KIOT Football Field', '01.08.2025-04.08.2025', '12 Schools, 240 Players'],
                    ['2', 'Salem District Basketball Association', 'BASKETBALL (Boys)', 'KIOT Basketball Court', '01.08.2025-04.08.2025', '12 Schools, 144 Players'],
                    ['3', 'Salem District Basketball Association', 'BASKETBALL (Girls)', 'KIOT Basketball Court', '-', '8 Schools, 96 Players'],
                    ['4', 'Salem District Ball Badminton Association', 'BALL BADMINTON (Boys)', 'KIOT Basketball Court Near', '01.08.2025-04.08.2025', '14 Schools, 140 Players'],
                    ['5', 'Salem District Ball Badminton Association', 'BALL BADMINTON (Girls)', 'KIOT Girls Play Area', '01.08.2025-04.08.2025', '8 Schools, 80 Players'],
                    ['6', 'Salem District Table Tennis Association', 'TABLE TENNIS (Boys)', 'E-Block Seminar Hall', '01.08.2025-04.08.2025', '11 Schools, 55 Players'],
                    ['7', 'Salem District Table Tennis Association', 'TABLE TENNIS (Girls)', 'E-Block Seminar Hall', '-', '8 Schools, 40 Players'],
                    ['8', 'Salem District Volleyball Association', 'VOLLEYBALL (Boys)', 'KIOT Volleyball Court', '01.08.2025-04.08.2025', '12 Schools, 168 Players'],
                    ['9', 'Salem District Volleyball Association', 'VOLLEYBALL (Girls)', 'KIOT Girls Play Area', '-', '5 Schools, 60 Players']
                ]
            },
            {
                title: '8TH BATTLE FIELD TAMILNADU STATE LEVEL CHESS (2026)',
                type: 'table',
                headers: ['S.NO.', 'ASSOCIATION', 'GAME', 'VENUE', 'DATE', 'PARTICIPATION'],
                rows: [
                    ['1', 'Tamilnadu Chess & Salem District Association', 'CHESS (Open)', 'A-Block Seminar Hall & Indoor Room', '15.03.2026', '450 Players']
                ]
            }
        ]
    },
    'cm-trophy': {
        title: 'CM Trophy',
        subtitle: 'Salem District Level (2025-26)',
        icon: <Award className="text-[#ffc107]" size={32} />,
        sections: [
            {
                title: 'CM TROPHY SALEM DISTRICT LEVEL RECORDS',
                type: 'table',
                headers: ['S.NO.', 'NAME OF THE GAME', 'DATE', 'VENUE', 'STUDENTS DETAILS', 'POSITION'],
                rows: [
                    ['1', 'BADMINTON (MEN) DOUBLES', '28.08.2025-29.08.2025', 'BAY BADMINTON ACADEMY, SALEM', 'NATHAN SHIEH, III-CSE\nM NAGAPRASAD, II-CSBS', 'II-PLACE'],
                    ['2', 'BADMINTON (MEN) SINGLES', '28.08.2025-29.08.2025', 'BAY BADMINTON ACADEMY, SALEM', 'NATHAN SHIEH, III-CSE', 'I-PLACE'],
                    ['3', 'BADMINTON (WOMEN) DOUBLES', '28.08.2025-29.08.2025', 'BAY BADMINTON ACADEMY, SALEM', 'N. MOSIKA, II-CSE\nM. KAIYALVIZHI, II-CSE', 'II-PLACE'],
                    ['4', 'CHESS (WOMEN)', '28.08.2025-29.08.2025', 'ST. JOHNS MATRIUCLATION SCHOOL, SALEM', 'M. KIRUTHIGA, II-CSE (I-PLACE)\nP.S. AATHMIKA, I-CSBS (II-PLACE)', 'Multiple'],
                    ['5', 'TABLE TENNIS (WOMEN)', '28.08.2025-29.08.2025', 'SKJ TABLE TENNIS ACADMY, SALEM', 'N. MOULIKA, III-CSE\nV.P. SUBHASHREE, III-CSE', 'III-PLACE']
                ]
            }
        ]
    }
};

const SportsDetailPage = () => {
    const { category } = useParams();
    const navigate = useNavigate();
    
    // Select data based on category
    const categoryKey = category ? category.toLowerCase() : 'achievements';
    const data = ACHIEVEMENTS_DATA[categoryKey] || ACHIEVEMENTS_DATA['achievements'];

    // Categories that have their own data sets
    const validCategories = ['achievements', 'zone-level', 'open-tournaments', 'organized-tournaments', 'cm-trophy'];
    const filteredSections = validCategories.includes(categoryKey) 
        ? data.sections 
        : [];

    return (
        <div className="min-h-screen bg-[#FCFDFD] font-sans pb-20">
            {/* Hero Header */}
            <div className="bg-[#224292] pt-12 pb-6 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-96 h-96 bg-[#ffc107]/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
                <div className="max-w-7xl mx-auto px-6 relative z-10">
                    <button 
                        onClick={() => navigate('/campus-life/sports')}
                        className="flex items-center gap-2 text-white/70 hover:text-[#ffc107] transition-colors mb-4 group"
                    >
                        <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
                        <span className="text-[9px] font-black uppercase tracking-[0.2em]">Back to Sports</span>
                    </button>
                    
                    <div className="flex items-center gap-5">
                        <div className="w-14 h-14 rounded-lg bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center shadow-2xl">
                            {data.icon}
                        </div>
                        <div>
                            <h1 className="text-2xl md:text-3xl font-black text-white uppercase mb-0.5">
                                {category ? category.replace(/-/g, ' ') : data.title}
                            </h1>
                            <p className="text-[#ffc107] font-black uppercase text-[11px] tracking-wider">
                                {data.subtitle}
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Content Section */}
            <div className="max-w-7xl mx-auto px-6 py-12 relative z-20">
                <div className="space-y-16">
                    {filteredSections.length > 0 ? filteredSections.map((section, sIdx) => (
                        <motion.div 
                            key={sIdx}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: sIdx * 0.05 }}
                            className="overflow-hidden"
                        >
                            {section.title && (
                                <div className="mb-6 text-center">
                                    <h3 className="text-xl md:text-2xl font-black text-[#224292] uppercase relative inline-block">
                                        {section.title}
                                        <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-16 h-1 bg-[#ffc107] rounded-full" />
                                    </h3>
                                </div>
                            )}
                            
                            <div className="bg-white rounded-xl shadow-2xl border border-slate-100 overflow-hidden">
                                <div className="overflow-x-auto">
                                    <table className="w-full text-left border-collapse min-w-[800px]">
                                    <thead>
                                        <tr className="bg-[#224292]">
                                            {section.headers.map((header, hIdx) => (
                                                <th key={hIdx} className="px-6 py-5 text-[10px] font-black text-white uppercase text-center border-r border-white/10 last:border-0">
                                                    {header}
                                                </th>
                                            ))}
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {section.rows.map((row, rIdx) => (
                                            <tr 
                                                key={rIdx} 
                                                className={`group transition-colors ${rIdx % 2 === 0 ? 'bg-[#f2f2f2]' : 'bg-white'}`}
                                            >
                                                {row.map((cell, cIdx) => (
                                                    <td key={cIdx} className="px-6 py-4 border-b border-slate-100 last:border-b-0">
                                                        <span className={`text-[13px] text-slate-800 font-bold uppercase leading-relaxed whitespace-pre-line ${cIdx === 0 ? 'text-center block' : ''}`}>
                                                            {cell}
                                                        </span>
                                                    </td>
                                                ))}
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                        </motion.div>
                    )) : (
                        <div className="text-center py-20">
                            <p className="text-slate-400 font-bold uppercase tracking-widest text-xs">No records found for this category.</p>
                        </div>
                    )}
                </div>
            </div>

        </div>
    );
};

export default SportsDetailPage;
