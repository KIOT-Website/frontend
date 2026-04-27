import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { 
  Users, 
  Trophy, 
  Music, 
  Palette, 
  Code, 
  ShieldCheck, 
  ArrowLeft,
  ChevronRight,
  Sparkles,
  Heart,
  Globe
} from 'lucide-react';

import campusLifeImg from '../assets/main/campus .webp';

const StudentLifePage = () => {
    const navigate = useNavigate();

    const sections = [
        {
            title: "Dynamic Ecosystem",
            desc: "A vibrant blend of learning, creativity, and personal growth defining the KIOT experience.",
            icon: Sparkles,
            color: "#18357a"
        },
        {
            title: "Holistic Development",
            desc: "Beyond academics, engaging in activities that build skills, confidence, and lifelong friendships.",
            icon: Heart,
            color: "#ffc107"
        },
        {
            title: "Inclusive Community",
            desc: "An environment where every individual can explore interests and showcase unique talents.",
            icon: Globe,
            color: "#18357a"
        }
    ];

    return (
        <div className="min-h-screen bg-[#FCFDFD] pb-24">
            {/* 🔷 Hero Section */}
            <div className="relative h-[50vh] flex items-center justify-center overflow-hidden bg-[#18357a]">
                <div className="absolute inset-0">
                    <img 
                        src={campusLifeImg} 
                        className="w-full h-full object-cover object-center opacity-100 scale-110 transition-transform duration-1000" 
                        alt="Student Life"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-[#18357a]/90 via-[#18357a]/70 to-transparent" />
                </div>
                
                <div className="relative z-10 text-center px-6">
                    <motion.div
                        initial={{ y: 30, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.8 }}
                    >
                        <h1 className="text-3xl md:text-5xl font-black text-white tracking-tighter leading-none mb-6">
                            Student <span className="text-[#ffc107]">Life</span>
                        </h1>
                        <p className="text-white font-bold text-sm md:text-base max-w-2xl mx-auto tracking-[4px] leading-loose uppercase">
                            Vibrant. Dynamic. Inclusive.
                        </p>
                    </motion.div>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-6 py-20 relative z-20">
                {/* 🔷 Initial Content Block */}
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="max-w-4xl mx-auto text-center space-y-8 mb-24"
                >
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#18357a]/5 border border-[#18357a]/10 text-[#18357a] text-xs font-black uppercase tracking-widest mb-4">
                        <Sparkles size={14} />
                        <span>The KIOT Experience</span>
                    </div>
                    <h2 className="text-3xl md:text-5xl font-black text-[#18357a] tracking-tighter leading-[1.1]">
                        Embracing a <span className="text-[#ffc107]">Dynamic Academic</span> Ecosystem
                    </h2>
                    <p className="text-lg md:text-xl font-bold text-slate-700 leading-relaxed text-justify md:text-center">
                        Student life at Knowledge Institute of Technology is a vibrant blend of learning, creativity, and personal growth. Beyond academics, students engage in a wide range of activities that build skills, confidence, and lifelong friendships. The campus provides an environment where every individual can explore their interests, showcase their talents, and be part of a dynamic and inclusive community.
                    </p>
                </motion.div>
            </div>
        </div>
    );
};

export default StudentLifePage;
