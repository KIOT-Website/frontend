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
                    ['1', 'Wushu', '04.05.2026-09.05.2026', 'University of Kashmir, Srinagar', 'A. Parthipan, I-MBA'],
                    ['2', 'Netball', '09.03.2026-13.03.2026', 'Sanjeev Agarwal Global Educational University, Bhopal', 'V. Harish, I-BE-IT']
                ]
            },
            {
                title: 'INTER ZONE LEVEL (2025-26)',
                type: 'table',
                headers: ['S.NO.', 'NAME OF THE GAME', 'DATE', 'VENUE', 'STUDENTS DETAILS', 'POSITION'],
                rows: [
                    ['1', 'Boxing (Men)', '10.11.2025', 'Government Engineering College, Bargur', '1. A. Lokesh, I-MBA-IEV\n2. S. Priyadharsan, II-CSE\n3. A.R. Gowtham Priyan, III-CSE', 'III']
                ]
            },
            {
                title: 'ZONE LEVEL (2025-26)',
                type: 'table',
                headers: ['S.NO', 'NAME OF THE SPORTS & GAMES', 'DATE', 'VENUE', 'PARTICIPATION', 'POSITION'],
                rows: [
                    ['1', 'Chess (M)', '02.09.2025 - 03.09.2025', 'R.P. Sarathy Institute of Technology, Salem', '6', '2nd Place'],
                    ['2', 'Chess (W)', '-', '-', '6', '2nd Place'],
                    ['3', 'Hockey (M)', '14.09.2025-15.09.2025', 'Adhiyamaan College of Engineering, Hosur', '18', '3rd Place'],
                    ['4', 'Football (M)', '16.09.2025-17.09.2025', 'Adhiyamaan College of Engineering, Hosur', '22', '2nd Place'],
                    ['5', 'Table Tennis (M)', '19.09.2025-20.09.2025', 'Dhirajlal Gandhi College of Technology, Salem', '5', '1st Place'],
                    ['6', 'Badminton (M)', '22.09.2025-23.09.2025', 'Mahendra Engineering College, Mallasamudram', '7', '1st Place'],
                    ['7', 'Badminton (W)', '-', '-', '5', '3rd Place'],
                    ['8', 'Table Tennis (W)', '10.10.2025-11.10.2025', 'Government College of Engineering, Bargur', '5', '1st Place'],
                    ['9', 'Handball (M)', '15.10.2025-16.10.2025', 'Dhirajlal Gandhi College of Technology, Salem', '16', '3rd Place'],
                    ['10', 'Athletics (M)', '31.10.2025-01.11.2025', 'Adhiyamaan College of Engineering, Hosur', 'Men:\ni. Hammer Throw (1st Place)\nii. Half Marathon (2nd Place)\niii. 20 Km. Walk (3rd Place)\niv. 400 mts. Hurdles (3rd Place)\nv. 5000 mts. (3rd Place)', 'Multiple'],
                    ['11', 'Athletics (W)', '-', '-', 'Women:\ni. Shot Put (1st Place)\nii. Hammer Throw (3rd Place)', 'Multiple'],
                    ['12', 'Basketball (W)', '06.11.2025-07.11.2025', 'Government College of Engineering, Bargur', '12', '1st Place']
                ]
            },
            {
                title: 'OPEN TOURNAMENTS - INTERNATIONAL LEVEL (2025-26)',
                type: 'table',
                headers: ['S.NO.', 'NAME OF THE GAME', 'DATE', 'VENUE', 'STUDENTS DETAILS', 'POSITION'],
                rows: [
                    ['1', 'Kick Boxing (Men) - 5th WAKO India Open', '04.02.2026-08.02.2026', 'KD Jadhav Indoor Stadium, New Delhi', 'A. Parthipan, I-MBA', 'I-Place'],
                    ['2', 'Handball (Men) - Indo Nepal Championship', '04.11.2025-07.11.2025', 'Rangashala Stadium, Pokhara, Nepal', 'M. Tamilarasan, III-Mech', 'I-Place'],
                    ['3', 'Chess (Men) - 23rd RCC International', '27.09.2025-28.09.2025', 'Sharada Vidhyalaiya, Mangaluru', 'G. Mathan, I-IT', '4th Place']
                ]
            },
            {
                title: 'OPEN TOURNAMENTS - NATIONAL LEVEL (2025-26)',
                type: 'table',
                headers: ['S.NO.', 'NAME OF THE GAME', 'DATE', 'VENUE', 'STUDENTS DETAILS', 'POSITION'],
                rows: [
                    ['1', 'Handball (Men) - 7th ISA National Game', '15.01.2026-18.01.2026', 'Tatya Tope Stadium, Bhopal', 'M. Tamilarasan, III-Mech', 'I-Place'],
                    ['2', 'Handball (Men) - School Games Foundation', '04.10.2025-06.10.2025', 'Pratap Sports School, Haryana', 'M. Tamilarasan, III-Mech', 'I-Place'],
                    ['3', 'Chess (Men) - 4th Check Mate All India', '21.09.2025', 'Lotus Convention Centre, Bangalore', 'G. Mathan, I-IT', 'I-Place']
                ]
            },
            {
                title: 'STATE LEVEL (2025-26)',
                type: 'table',
                headers: ['S.NO.', 'NAME OF THE GAME', 'DATE', 'VENUE', 'STUDENTS DETAILS', 'POSITION'],
                rows: [
                    ['1', 'Chess (Women) - 7th Battle Field', '21.12.2025', 'AVS College, Salem', 'M. Kiruthiga, II-CSE', 'III-Place'],
                    ['2', 'Chess (Men) - 1st Tamilnadu State Level', '02.11.2025', 'Sri Vidya Mandir School, Salem', 'G. Mathan, IT', 'I-Place'],
                    ['3', 'Power Lifting (Men) - State Classic', '26.09.2025-28.09.2025', 'Suguna Auditorium, Coimbatore', 'V. Madhavan, II-Mech', 'II-Place'],
                    ['4', 'Chess (Men) - 2nd Battle Field International', '14.09.2025', 'AVS College, Salem', 'G. Mathan, I-IT', 'III-Place'],
                    ['5', 'Powerlifting (Men) - State Equipped', '26.04.2025-27.04.2025', 'KPRIET, Coimbatore', 'V. Madhavan, II-Mech', 'II-Place']
                ]
            },
            {
                title: 'DISTRICT LEVEL (2025-26)',
                type: 'table',
                headers: ['S.NO.', 'NAME OF THE GAME', 'DATE', 'VENUE', 'STUDENTS DETAILS', 'POSITION'],
                rows: [
                    ['1', 'Boxing (Men) - Namakkal District', '22.02.2026', 'Shine Hill Academy, Valayapatti', '1. Jerick, I-CSE\n2. M. Karthikeyan, I-IT\n3. G. Hariharan, I-CSE\n4. K. Vishnu, II-CSE\n5. S. Seshathri, II-CSE\n6. V.G. Girivasan, I-ECE', 'Multiple 1st & 2nd Places'],
                    ['2', 'Badminton (Men) Doubles - Salem District', '14.01.2026', 'Bay Badminton Academy, Salem', 'Nathan Shieh, III-CSE\nM Nagaprasad, II-CSBS', 'II-Place'],
                    ['3', 'Judo (Men) - Salem District', '14.12.2025', 'Dhirajlal Gandhi College of Technology, Salem', 'M. Maginav, I-CSBS', 'I-Place'],
                    ['4', 'Boxing (Men) - Tirupur District', '14.12.2025', 'A.V.P College, Tirupur', 'A. Parthipan, I-MBA (I-Place)\nG. Hariram, I-CSE (III-Place)', 'Multiple'],
                    ['5', 'Table Tennis (Salem District)', '06.09.2025-07.09.2025', 'SKJ Academy, Salem', 'N. Moulika, III-CSE\nV.P. Subhashree, III-CSE\nV. Soundarya, III-AI&DS\nVasundraraji R, II-AI&DS', 'Multiple II & III Places'],
                    ['6', 'Powerlifting (Salem West District)', '17.08.2025', 'Jayarani College, Salem', 'S. Gowtham, III-AI&DS', 'Dead Lift II, Bench Press II'],
                    ['7', 'Powerlifting (Salem District Bench Press)', '15.06.2025', 'Salem', 'S. Gowtham, III-AI&DS\nV. Madhavan, II-Mech', 'II & III Places'],
                    ['8', 'Badminton (Salem District Championship)', '08.05.2025', 'Pioneer Club, Salem', 'Nathan Shieh, II-CSE', 'III Place'],
                    ['9', 'Badminton (1st GCE Trophy)', '08.05.2025', 'GCE Salem', 'Multiple Students', 'II-Place']
                ]
            },
            {
                title: 'CM TROPHY SALEM DISTRICT LEVEL (2025-26)',
                type: 'table',
                headers: ['S.NO.', 'NAME OF THE GAME', 'DATE', 'VENUE', 'STUDENTS DETAILS', 'POSITION'],
                rows: [
                    ['1', 'Badminton (Men) Doubles', '28.08.2025-29.08.2025', 'Bay Badminton Academy, Salem', 'Nathan Shieh, III-CSE\nM Nagaprasad, II-CSBS', 'II-Place'],
                    ['2', 'Badminton (Men) Singles', '28.08.2025-29.08.2025', 'Bay Badminton Academy, Salem', 'Nathan Shieh, III-CSE', 'I-Place'],
                    ['3', 'Badminton (Women) Doubles', '28.08.2025-29.08.2025', 'Bay Badminton Academy, Salem', 'N. Mosika, II-CSE\nM. Kaiyalvizhi, II-CSE', 'II-Place'],
                    ['4', 'Chess (Women)', '28.08.2025-29.08.2025', 'St. Johns School, Salem', 'M. Kiruthiga, II-CSE (I-Place)\nP.S. Aathmika, I-CSBS (II-Place)', 'Multiple'],
                    ['5', 'Table Tennis (Women)', '28.08.2025-29.08.2025', 'SKJ Table Tennis Academy, Salem', 'N. Moulika, III-CSE\nV.P. Subhashree, III-CSE', 'III-Place']
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
    'open-tournaments-faculty': {
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
    'open-tournaments-students': {
        title: 'Open Tournaments (Students)',
        subtitle: 'Official Records (2025-26)',
        icon: <Users className="text-[#ffc107]" size={32} />,
        sections: [
            {
                title: 'NATIONAL LEVEL PARTICIPATION (2025-26)',
                type: 'table',
                headers: ['S.NO.', 'NAME OF THE GAME', 'DATE OF THE TOURNAMENT', 'VENUE', 'NO OF STUDENTS'],
                rows: [
                    ['1', 'SHOOTING BALL (MEN) - 5th SOUTH ZONE SHOOTING BALL CHAMPIONSHIP 2026', '07.02.2026-08.02.2026', 'NILGIRIS BADMINTON ACADEMY, ERODE', '1'],
                    ['2', 'BADMINTON (MEN) - SKM BEST OPEN BADMINTON TOURNAMENT 2026', '13.02.2026-15.02.2026', 'BANGALORE', '1'],
                    ['3', 'BADMINTON (MEN) - YONEX SUNRISE ALL INDIA SENIOR RANKING BADMINTON TOURNAMENT 2026', '30.08.2025', 'SPORTS ACTIVITY CENTRE, COIMBATORE', '1'],
                    ['4', 'TABLE TENNIS (MEN) - 24th KONGU TROPHY 2025-26', '26.09.2025-28.09.2025', 'KONGU ENGINEERING COLLEGE, PERUNDURAI, ERODE', '3']
                ]
            },
            {
                title: 'STATE LEVEL PARTICIPATION (2025-26)',
                type: 'table',
                headers: ['S.NO.', 'NAME OF THE GAME', 'DATE OF THE TOURNAMENT', 'VENUE', 'NO OF STUDENTS'],
                rows: [
                    ['1', 'BADMINTON (MEN) - TAMILNADU STATE SENIOR RANKING BADMINTON TOURNAMENT', '17.01.2026', 'SDAT INDOOR STADIUM, NAMAKKAL', '1'],
                    ['2', 'POWERLIFTING (MEN) - TAMILNADU STATE EQUIPPED AND CLASSIC BENCHPRESS CHAMPIONSHIP 2025', '06.11.2025-07.11.2025', 'SUGUNA AUDITORIUM, COIMBATORE', '1'],
                    ['3', 'CHESS (MEN) - 2nd STATE LEVEL CHILDREN\'S OPEN CATEGORY 2025', '05.10.2025', 'VELSAMY MUTHALIYAR CINNAMMAL KALYANA MANDABAM, THIRUCHENGODE', '1'],
                    ['4', 'CHESS (MEN & WOMEN) - TAMILNADU STATE LEVEL CHESS TOURNAMENT 2025', '29.09.2025', 'AVS ARTS & SCIENCE COLLEGE, SALEM', '3+1'],
                    ['5', 'CHESS (WOMEN) - WOMEN\'S STATE LEVEL CHESS CHAMPIONSHIP 2026', '07.09.2025', 'AVS ENGINEERING COLLEGE, SALEM', '1'],
                    ['6', 'BADMINTON (MEN) - OPEN BADMINTON CHAMPIONSHIP FOR JUNIORS & SENIORS 2025', '30.08.2025', 'SPORTS ACTIVITY CENTRE, COIMBATORE', '1'],
                    ['7', 'BADMINTON (MEN) - CM TROPHY TAMILNADU STATE LEVEL 2025', '08.10.2025-11.10.2025', 'TAMILNADU PHYSICAL EDUCATION SPORTS UNIVERSITY, CHENNAI', '1']
                ]
            },
            {
                title: 'DISTRICT LEVEL PARTICIPATION (2025-26)',
                type: 'table',
                headers: ['S.NO.', 'NAME OF THE GAME', 'DATE OF THE TOURNAMENT', 'VENUE', 'NO OF STUDENTS'],
                rows: [
                    ['1', 'TABLE TENNIS (MEN & WOMEN) - 2nd SALEM DISTRICT RANKING & OPEN STATE TABLE TENNIS TOURNAMENT 2025', '04.10.2025-05.10.2025', 'SKJ TABLE TENNIS ACADEMY, SALEM', '4+5'],
                    ['2', 'TABLE TENNIS (MEN & WOMEN) - 1st SALEM DISTRICT RANKING & OPEN STATE TABLE TENNIS TOURNAMENT 2025', '06.09.2025-07.09.2025', 'SKJ TABLE TENNIS ACADEMY, SALEM', '3+5'],
                    ['3', 'CRICKET (MEN) - 3rd GCE CRICKET TROPHY 2025', '21.04.2025-29.04.2025', 'GOVERNMENT COLLEGE OF ENGINEERING, KARUPUR, SALEM', '15']
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
        subtitle: 'State & District Participation (2025-26)',
        icon: <Award className="text-[#ffc107]" size={32} />,
        sections: [
            {
                title: 'CM TROPHY TAMILNADU STATE LEVEL PARTICIPATION (2025-26)',
                type: 'table',
                headers: ['S.NO.', 'NAME OF THE GAME', 'DATE OF THE TOURNAMENT', 'VENUE', 'STUDENTS DETAILS'],
                rows: [
                    ['1', 'BADMINTON (MEN) SINGLES', '08.10.2025-11.10.2025', 'TAMILNADU PHYSICAL EDUCATION SPORTS UNIVERSITY, CHENNAI', 'NATHAN SHIEH, III-CSE\nM NAGAPRASAD, II-CSBS'],
                    ['2', 'CHESS (WOMEN)', '08.10.2025-11.10.2025', 'NEHRU KALAIARANGAM, SALEM', 'M. KIRUTHIGA, II-CSE']
                ]
            },
            {
                title: 'CM TROPHY SALEM DISTRICT LEVEL PARTICIPATION (2025-26)',
                type: 'table',
                headers: ['S.NO.', 'NAME OF THE GAME', 'DATE OF THE TOURNAMENT', 'VENUE', 'NO OF STUDENTS'],
                rows: [
                    ['1', 'CHESS (MEN)', '28.08.2025-29.08.2025', 'ST. JOHNS MATRICULATION HR. SEC. SCHOOL, SALEM', '8'],
                    ['2', 'CHESS (WOMEN)', '28.08.2025-29.08.2025', 'ST. JOHNS MATRICULATION HR. SEC. SCHOOL, SALEM', '6'],
                    ['3', 'BADMINTON (MEN SINGLES)', '28.08.2025-29.08.2025', 'BAY BADMINTON ACADEMY, SALEM', '7'],
                    ['4', 'BADMINTON (MEN DOUBLES)', '28.08.2025-29.08.2025', 'BAY BADMINTON ACADEMY, SALEM', '6'],
                    ['5', 'BADMINTON (WOMEN SINGLES)', '28.08.2025-29.08.2025', 'BAY BADMINTON ACADEMY, SALEM', '4'],
                    ['6', 'BADMINTON (WOMEN DOUBLES)', '28.08.2025-29.08.2025', 'BAY BADMINTON ACADEMY, SALEM', '4'],
                    ['7', 'TABLE TENNIS (MEN SINGLES)', '28.08.2025-29.08.2025', 'SKJ TABLE TENNIS, SALEM', '5'],
                    ['8', 'TABLE TENNIS (MEN DOUBLES)', '28.08.2025-29.08.2025', 'SKJ TABLE TENNIS, SALEM', '4'],
                    ['9', 'TABLE TENNIS (WOMEN SINGLES)', '28.08.2025-29.08.2025', 'SKJ TABLE TENNIS, SALEM', '5'],
                    ['10', 'TABLE TENNIS (WOMEN DOUBLES)', '28.08.2025-29.08.2025', 'SKJ TABLE TENNIS, SALEM', '4'],
                    ['11', 'BASKETBALL (MEN)', '28.08.2025-29.08.2025', 'GANDHI STADIUM, SALEM', '12'],
                    ['12', 'BASKETBALL (WOMEN)', '28.08.2025-29.08.2025', 'GANDHI STADIUM, SALEM', '12'],
                    ['13', 'VOLLEYBALL (MEN)', '28.08.2025-29.08.2025', 'GANDHI STADIUM, SALEM', '14'],
                    ['14', 'FOOTBALL (MEN)', '28.08.2025-29.08.2025', 'ST. PAULS MATRICULATION HR. SEC. SCHOOL, SALEM', '22'],
                    ['15', 'ATHLETICS (MEN & WOMEN)', '28.08.2025-29.08.2025', 'GANDHI STADIUM, SALEM', '3+2'],
                    ['16', 'CRICKET (MEN)', '28.08.2025-29.08.2025', 'GOVERNMENT COLLEGE OF ENGINEERING, KARUPUR, SALEM', '16'],
                    ['17', 'HANDBALL (MEN)', '28.08.2025-29.08.2025', 'JAIRANI MATRICULATION HR. SEC. SCHOOL, SALEM', '14'],
                    ['18', 'KABADDI (MEN)', '28.08.2025-29.08.2025', 'GANDHI STADIUM, SALEM', '12']
                ]
            }
        ]
    },
    'sports-day': {
        title: 'Sports Day',
        subtitle: 'Students & Faculty / Staff Events (2025-26)',
        icon: <Calendar className="text-[#ffc107]" size={32} />,
        sections: [
            {
                title: 'SPORTS DAY STUDENTS BOYS EVENTS (2025-26)',
                type: 'table',
                headers: ['S.NO', 'NAME OF THE GAME', 'S.NO', 'NAME OF THE GAME'],
                rows: [
                    ['1', 'Kho-Kho', '7', 'Chess, Tennis'],
                    ['2', 'Handball', '8', 'Ball Badminton'],
                    ['3', 'Carrom', '9', 'Kabaddi'],
                    ['4', 'Football', '10', 'Badminton'],
                    ['5', 'Volley Ball', '11', 'Table Tennis'],
                    ['6', 'Basket Ball', '12', 'Cricket'],
                    ['13-22', 'ATHLETICS: 100M, 200M, Shot Put, Javelin, 1500M, 400M, 4 X 100M Relay, Hammer Throw, 800M, Discuss throw', '', '']
                ]
            },
            {
                title: 'SPORTS DAY STUDENTS GIRLS EVENTS (2025-26)',
                type: 'table',
                headers: ['S.NO', 'NAME OF THE GAME', 'S.NO', 'NAME OF THE GAME'],
                rows: [
                    ['1', 'Handball', '7', 'Volley Ball'],
                    ['2', 'Kho-Kho', '8', 'Throw Ball'],
                    ['3', 'Table Tennis', '9', 'Badminton'],
                    ['4', 'Chess', '10', 'Ball Badminton'],
                    ['5', 'Tennis', '11', 'Basket Ball'],
                    ['6', 'Cricket', '12', 'Carrom'],
                    ['13-22', 'ATHLETICS: 100M, 200M, Shot Put, Javelin, 1500M, 400M, 4 X 100M Relay, Hammer Throw, 800M, Discuss throw', '', '']
                ]
            },
            {
                title: 'SPORTS DAY FACULTY & STAFF EVENTS (2025-26)',
                type: 'table',
                headers: ['S.NO', 'MEN FACULTY & STAFF EVENTS', 'WOMEN FACULTY & STAFF EVENTS'],
                rows: [
                    ['1', 'Cricket', 'Table Tennis'],
                    ['2', 'Volleyball', 'Chess'],
                    ['3', 'Basketball', 'Carrom'],
                    ['4', 'Badminton', 'Tenni Coit'],
                    ['5', 'Chess', 'Badminton'],
                    ['6', 'Table tennis', 'Throw Ball'],
                    ['7', 'Carrom', '']
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
    const resolvedKey = categoryKey === 'open-tournaments' ? 'open-tournaments-faculty' : categoryKey;
    const data = ACHIEVEMENTS_DATA[resolvedKey] || ACHIEVEMENTS_DATA['achievements'];

    // Categories that have their own data sets
    const validCategories = [
        'achievements', 
        'zone-level', 
        'open-tournaments', 
        'open-tournaments-faculty', 
        'open-tournaments-students', 
        'organized-tournaments', 
        'cm-trophy',
        'sports-day'
    ];
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
                        <span className="text-[9px] font-black tracking-[0.2em]">Back to Sports</span>
                    </button>
                    
                    <div className="flex items-center gap-5">
                        <div className="w-14 h-14 rounded-lg bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center shadow-2xl">
                            {data.icon}
                        </div>
                        <div>
                            <h1 className="text-2xl md:text-3xl font-black text-white mb-0.5">
                                {data.title}
                            </h1>
                            <p className="text-[#ffc107] font-black text-[11px] tracking-wider">
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
                                    <h3 className="text-xl md:text-2xl font-black text-[#224292] relative inline-block">
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
                                                <th key={hIdx} className="px-6 py-5 text-[10px] font-black text-white text-center border-r border-white/10 last:border-0">
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
                                                        <span className={`text-[13px] text-slate-800 font-bold leading-relaxed whitespace-pre-line ${cIdx === 0 ? 'text-center block' : ''}`}>
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
