import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Trophy, ArrowLeft, Calendar, MapPin, User, Medal, Star, Award, Users, Flag, ArrowUpRight } from 'lucide-react';

const ACHIEVEMENTS_DATA = {
    'achievements': {
        title: 'Institutional Sports Excellence',
        subtitle: 'Official Records (2025-26)',
        icon: <Trophy className="text-[#ffc107]" size={32} />,
        sections: [
            {
                title: 'Anna University & All India Level',
                type: 'table',
                headers: ['S.NO.', 'GAME', 'DATE', 'VENUE', 'STUDENT DETAILS'],
                rows: [
                    ['1', 'WUSHU', '04.05.2026 - 09.05.2026', 'UNIVERSITY OF KASHMIR, SRINAGAR', 'A. PARTHIPAN, I-MBA'],
                    ['2', 'NETBALL', '09.03.2026 - 13.03.2026', 'SANJEEV AGARWAL GLOBAL EDUCATIONAL UNIVERSITY, BHOPAL', 'V. HARISH, I-BE-IT']
                ]
            },
            {
                title: 'Inter Zone Level',
                type: 'table',
                headers: ['S.NO.', 'GAME', 'DATE', 'VENUE', 'STUDENT DETAILS', 'POSITION'],
                rows: [
                    ['1', 'BOXING (MEN)', '10.11.2025', 'GOVERNMENT ENGINEERING COLLEGE, BARGUR', '1. A. LOKESH (I-MBA-IEV)\n2. S. PRIYADHARSAN (II-CSE)\n3. A.R. GOWTHAM PRIYAN (III-CSE)', 'III']
                ]
            },
            {
                title: 'Zone Level',
                type: 'table',
                headers: ['S.NO', 'SPORTS & GAMES', 'DATE', 'VENUE', 'PARTICIPATION', 'POSITION'],
                rows: [
                    ['1', 'CHESS (M)', '02.09.2025 - 03.09.2025', 'R.P. SARATHY INSTITUTE OF TECHNOLOGY, SALEM', '6', '2nd Place'],
                    ['2', 'CHESS (W)', '-', '-', '6', '2nd Place'],
                    ['3', 'HOCKEY (M)', '14.09.2025 - 15.09.2025', 'ADHIYAMAAN COLLEGE OF ENGINEERING, HOSUR', '18', '3rd Place'],
                    ['4', 'FOOTBALL (M)', '16.09.2025 - 17.09.2025', 'ADHIYAMAAN COLLEGE OF ENGINEERING, HOSUR', '22', '2nd Place'],
                    ['5', 'TABLE TENNIS (M)', '19.09.2025 - 20.09.2025', 'DHIRAJLAL GANDHI COLLEGE TECHNOLOGY, SALEM', '5', '1st Place'],
                    ['6', 'BADMINTON (M)', '22.09.2025 - 23.09.2025', 'MAHENDRA ENGINEERING COLLEGE, MALLASAMUDRAM', '7', '1st Place'],
                    ['7', 'BADMINTON (W)', '-', '-', '5', '3rd Place'],
                    ['8', 'TABLE TENNIS (W)', '10.10.2025 - 11.10.2025', 'GOVERNMENT COLLEGE OF ENGINEERING, BARGUR', '5', '1st Place'],
                    ['9', 'HANDBALL (M)', '15.10.2025 - 16.10.2025', 'DHIRAJLAL GANDHI COLLEGE TECHNOLOGY, SALEM', '16', '3rd Place'],
                    ['10', 'ATHLETICS (M)', '31.10.2025 - 01.11.2025', 'ADHIYAMAAN COLLEGE OF ENGINEERING, HOSUR', 'i. Hammer Throw\nii. Half Marathon\niii. 20 Km. Walk\niv. 400 mts. Hurdles\nv. 5000 mts.', '1st Place\n2nd Place\n3rd Place\n3rd Place\n3rd Place'],
                    ['11', 'ATHLETICS (W)', '-', '-', 'i. Shot Put\nii. Hammer Throw', '1st Place\n3rd Place'],
                    ['12', 'BASKETBALL (W)', '06.11.2025 - 07.11.2025', 'GOVERNMENT COLLEGE OF ENGINEERING, BARGUR', '12', '1st Place']
                ]
            },
            {
                title: 'Open Tournaments (International & National)',
                type: 'table',
                headers: ['S.NO.', 'GAME', 'DATE', 'VENUE', 'STUDENT DETAILS'],
                rows: [
                    ['1', 'KICK BOXING (MEN)', '04.02.2026 - 08.02.2026', 'KD JADHAV INDOOR STADIUM, NEW DELHI', 'A. PARTHIPAN, I-MBA (I-PLACE)'],
                    ['2', 'HANDBALL (MEN)', '04.11.2025 - 07.11.2025', 'RANGASHALA STADIUM, POKHARA, NEPAL', 'M. TAMILARASAN, III-MECH (I-PLACE)'],
                    ['3', 'CHESS (MEN)', '27.09.2025 - 28.09.2025', 'SHARADA VIDHYALAIYA, MANGALURU', 'G. MATHAN, I-IT (4th PLACE)'],
                    ['4', 'HANDBALL (MEN) - NATIONAL', '15.01.2026 - 18.01.2026', 'TATYA TOPE STADIUM, BHOPAL', 'M. TAMILARASAN, III-MECH (I-PLACE)']
                ]
            },
            {
                title: 'State & District Level',
                type: 'table',
                headers: ['S.NO.', 'GAME', 'DATE', 'VENUE', 'STUDENT DETAILS'],
                rows: [
                    ['1', 'CHESS (WOMEN)', '21.12.2025', 'AVS COLLEGE, SALEM', 'M. KIRUTHIGA, II-CSE (III-PLACE)'],
                    ['2', 'POWER LIFTING (MEN)', '26.09.2025 - 28.09.2025', 'SUGUNA AUDITORIUM, COIMBATORE', 'V. MADHAVAN, II-MECH (II-PLACE)'],
                    ['3', 'BOXING (MEN) - DISTRICT', '22.02.2026', 'SHINE HILL ACADEMY, VALAYAPATTI', 'Multiple Students (1st & 2nd Places)'],
                    ['4', 'JUDO (MEN)', '14.12.2025', 'DGCT, SALEM', 'M. MAGINAV, I-CSBS (I-PLACE)']
                ]
            },
            {
                title: 'CM Trophy',
                type: 'table',
                headers: ['S.NO.', 'GAME', 'DATE', 'VENUE', 'STUDENT DETAILS', 'POSITION'],
                rows: [
                    ['1', 'BADMINTON (MEN)', '28.08.2025 - 29.08.2025', 'BAY BADMINTON ACADEMY, SALEM', 'NATHAN SHIEH & M NAGAPRASAD', 'I & II-PLACE'],
                    ['2', 'CHESS (WOMEN)', '28.08.2025 - 29.08.2025', 'ST. JOHNS SCHOOL, SALEM', 'M. KIRUTHIGA (I PLACE), P.S. AATHMIKA (II PLACE)', '-'],
                    ['3', 'TABLE TENNIS (WOMEN)', '28.08.2025 - 29.08.2025', 'SKJ ACADEMY, SALEM', 'N. MOULIKA, V.P. SUBHASHREE', 'III-PLACE']
                ]
            }
        ]
    }
};

const SportsDetailPage = () => {
    const { category } = useParams();
    const navigate = useNavigate();
    const data = ACHIEVEMENTS_DATA['achievements'];

    return (
        <div className="min-h-screen bg-[#FCFDFD] font-sans pb-20">
            {/* Hero Header */}
            <div className="bg-[#18357a] pt-28 pb-10 relative overflow-hidden">
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
                            <h1 className="text-2xl md:text-3xl font-black text-white tracking-tighter uppercase mb-0.5">
                                {data.title}
                            </h1>
                            <p className="text-[#ffc107] font-black tracking-[0.3em] uppercase text-[9px]">
                                {data.subtitle}
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Content Section */}
            <div className="max-w-7xl mx-auto px-6 py-12 relative z-20">
                <div className="space-y-16">
                    {data.sections.map((section, sIdx) => (
                        <motion.div 
                            key={sIdx}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: sIdx * 0.05 }}
                            className="overflow-hidden"
                        >
                            {section.title && (
                                <div className="mb-6 text-center">
                                    <h3 className="text-xl md:text-2xl font-black text-[#18357a] uppercase tracking-widest relative inline-block">
                                        {section.title}
                                        <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-16 h-1 bg-[#ffc107] rounded-full" />
                                    </h3>
                                </div>
                            )}
                            
                            <div className="bg-white rounded-xl shadow-2xl border border-slate-100 overflow-hidden">
                                <table className="w-full text-left border-collapse table-auto">
                                    <thead>
                                        <tr className="bg-[#18357a]">
                                            {section.headers.map((header, hIdx) => (
                                                <th key={hIdx} className="px-6 py-5 text-[10px] font-black text-white uppercase tracking-[0.2em] text-center border-r border-white/10 last:border-0">
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
                                                        <span className={`text-[13px] text-slate-800 font-bold uppercase tracking-tight leading-relaxed whitespace-pre-line ${cIdx === 0 ? 'text-center block' : ''}`}>
                                                            {cell}
                                                        </span>
                                                    </td>
                                                ))}
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Bottom Footer Callout */}
            <div className="max-w-7xl mx-auto px-6 mt-16 text-center">
                <div className="inline-flex items-center gap-3 px-5 py-2.5 bg-[#18357a]/5 rounded-lg border border-[#18357a]/10">
                    <Flag size={14} className="text-[#18357a]" />
                    <span className="text-[9px] font-black text-[#18357a] uppercase tracking-[0.2em]">
                        Official Academic Year 2025-26 Records
                    </span>
                </div>
            </div>
        </div>
    );
};

export default SportsDetailPage;
