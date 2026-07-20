import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import {
  Sparkles,
  Users,
  Award,
  GraduationCap,
  Calendar,
  X,
  Target,
  Wrench,
  CheckCircle2,
  Cpu
} from 'lucide-react'
import "./studentLife.css"

import { csbsClubsMembers, csbsClubsObjectives, csbsClubsResponsibilities } from '../components/Academics/departments/csbs/csbsData.jsx'

export default function ContinuousMonitoringPage() {

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' })
  }, [])

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1
      }
    }
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] }
    }
  }

  return (
    <div className="min-h-screen bg-[#F8FAFC] pb-24 selection:bg-[#ffc107]/20">

      {/* ─── HERO HEADER SECTION ─── */}
      <div
        className="relative pt-16 pb-20 overflow-hidden rounded-b-[3rem] lg:rounded-b-[4rem]"
        style={{ backgroundColor: '#224292' }}
      >
        {/* Background Grid Ornament */}
        <div className="absolute inset-0 pointer-events-none" style={{
          backgroundImage: 'linear-gradient(to right, rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.04) 1px, transparent 1px)',
          backgroundSize: '40px 40px'
        }} />

        {/* Gradient Orbs */}
        <div className="absolute -top-40 -right-40 w-96 h-96 rounded-full pointer-events-none" style={{ backgroundColor: 'rgba(34,66,146,0.3)', filter: 'blur(100px)' }} />
        <div className="absolute -bottom-40 -left-40 w-96 h-96 rounded-full pointer-events-none" style={{ backgroundColor: 'rgba(255,193,7,0.1)', filter: 'blur(100px)' }} />

        <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-10 relative z-10">
          {/* Title & Tagline */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="max-w-3xl text-center mx-auto"
          >
            <span className="inline-block bg-[#ffc107] text-[#224292] font-black text-[10px] uppercase tracking-widest px-3 py-1 rounded-full mb-4">
              Technical Club
            </span>
            <h1 className="font-black tracking-tight leading-tight mb-3 text-white" style={{ fontSize: 'clamp(1.8rem, 4vw, 2.5rem)' }}>
              Technology for Continuous Monitoring
            </h1>
            <p className="font-bold tracking-wide uppercase mb-3 text-[#ffc107]" style={{ fontSize: 'clamp(0.85rem, 1.8vw, 1.1rem)', letterSpacing: '0.05em' }}>
              For Pollutants Cold Chain (CSBS)
            </p>
            <p className="font-semibold text-white/70 text-xs sm:text-sm text-center">
              Academic Period: <span className="text-[#ffc107] font-bold">June 2024 – May 2025</span>
            </p>
          </motion.div>
        </div>
      </div>

      {/* ─── ABOUT / OVERVIEW SECTION ─── */}
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-10 -mt-12 relative z-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="bg-white rounded-[1.5rem] sm:rounded-[2.5rem] border border-slate-100 p-5 sm:p-8 lg:p-12 relative overflow-hidden"
          style={{ boxShadow: '0 50px 100px -20px rgba(10,26,63,0.08)' }}
        >
          <div className="absolute right-0 bottom-0 translate-x-12 translate-y-12 opacity-5 pointer-events-none">
            <Cpu size={250} />
          </div>
          <div className="space-y-6 relative z-10">
            <div className="inline-flex items-center gap-1.5 uppercase font-black text-[#224292]" style={{ fontSize: '0.7rem', letterSpacing: '0.15em' }}>
              <Sparkles size={14} style={{ color: '#ffc107' }} />
              About the Club
            </div>

            <h2 className="font-extrabold tracking-tight leading-tight text-[#224292]" style={{ fontSize: 'clamp(1.4rem, 2.5vw, 1.85rem)' }}>
              Empowering Smart Monitoring & Green Technologies
            </h2>

            <div className="text-[14px] font-normal text-slate-800 leading-[25.2px] text-justify">
              <p>
                The Technology for Continuous Monitoring Club (specifically focused on Pollutants Cold Chain) is a specialized initiative by the Department of Computer Science and Business Systems (CSBS). The club is dedicated to researching and developing state-of-the-art technological solutions that provide real-time environment analytics. By implementing IoT, cloud networks, and embedded sensors, students design and simulate smart systems that track and manage pollutants, ensure regulatory compliance, and optimize cold chain efficiency.
              </p>
            </div>
          </div>
        </motion.div>
      </div>

      {/* ─── OBJECTIVES SECTION ─── */}
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-10 mt-12">
        <div className="text-center max-w-2xl mx-auto mb-8">
          <h2 className="font-black tracking-tight text-[#224292]" style={{ fontSize: 'clamp(1.4rem, 3vw, 2.1rem)' }}>
            Club Objectives
          </h2>
          <div className="w-20 h-1.5 rounded-full mx-auto mt-4" style={{ backgroundColor: '#ffc107' }} />
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 sm:grid-cols-2 gap-6"
        >
          {csbsClubsObjectives.map((obj, idx) => (
            <motion.div
              key={idx}
              variants={itemVariants}
              className="bg-white rounded-2xl flex items-start gap-4 p-6 border border-slate-100 hover:shadow-lg transition-all duration-300"
              style={{ boxShadow: '0 8px 24px rgba(0,0,0,0.03)' }}
            >
              <div className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0 bg-blue-50 text-[#224292]">
                <CheckCircle2 size={20} />
              </div>
              <div>
                <h4 className="font-bold text-base text-[#224292] mb-1">Objective #{idx + 1}</h4>
                <p className="text-slate-600 text-sm font-medium leading-relaxed">{obj}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* ─── ROLES & RESPONSIBILITIES SECTION ─── */}
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-10 mt-16">
        <div className="text-center max-w-2xl mx-auto mb-8">
          <h2 className="font-black tracking-tight text-[#224292]" style={{ fontSize: 'clamp(1.4rem, 3vw, 2.1rem)' }}>
            Roles & Responsibilities
          </h2>
          <div className="w-20 h-1.5 rounded-full mx-auto mt-4" style={{ backgroundColor: '#ffc107' }} />
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {csbsClubsResponsibilities.map((resp, idx) => {
            const Icon = resp.icon;
            return (
              <motion.div
                key={idx}
                variants={itemVariants}
                className="bg-white border border-slate-100 rounded-2xl p-6 hover:shadow-xl transition-all duration-300 flex flex-col"
                style={{ boxShadow: '0 8px 24px rgba(0,0,0,0.03)' }}
              >
                <div className="w-12 h-12 rounded-2xl bg-blue-50 border border-slate-100 flex items-center justify-center mb-5 text-[#224292] shrink-0">
                  <Icon size={24} />
                </div>
                <h3 className="text-lg font-bold text-[#224292] mb-4">{resp.title}</h3>
                <ul className="space-y-3 flex-grow">
                  {resp.items.map((item, i) => (
                    <li key={i} className="text-sm text-slate-600 font-medium leading-relaxed flex items-start gap-2">
                      <span className="w-2 h-2 bg-[#ffc107] rounded-full shrink-0 mt-1.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            )
          })}
        </motion.div>
      </div>

      {/* ─── COMMITTEE MEMBERS SECTION ─── */}
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-10 mt-16">
        <div className="text-center max-w-2xl mx-auto mb-8">
          <h2 className="font-black tracking-tight text-[#224292]" style={{ fontSize: 'clamp(1.4rem, 3vw, 2.1rem)' }}>
            Committee Members
          </h2>
          <div className="w-20 h-1.5 rounded-full mx-auto mt-4" style={{ backgroundColor: '#ffc107' }} />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-xl shadow-slate-200/50"
        >
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-[#224292] text-white">
                  <th className="px-6 py-4 text-[11px] font-bold uppercase tracking-wider text-center w-20">S.No</th>
                  <th className="px-6 py-4 text-[11px] font-bold uppercase tracking-wider">Member Name</th>
                  <th className="px-6 py-4 text-[11px] font-bold uppercase tracking-wider">Affiliation</th>
                  <th className="px-6 py-4 text-[11px] font-bold uppercase tracking-wider">Position</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {csbsClubsMembers.map((member, idx) => (
                  <tr
                    key={idx}
                    className={`group transition-colors ${idx % 2 === 0 ? 'bg-black/[0.01]' : 'bg-transparent'} hover:bg-[#ffc107]/5`}
                  >
                    <td className="px-6 py-4 text-center text-sm font-bold text-[#224292]">{member.sno}</td>
                    <td className="px-6 py-4 text-sm font-semibold text-slate-800">{member.name}</td>
                    <td className="px-6 py-4 text-sm text-slate-600 font-medium">{member.affiliation}</td>
                    <td className="px-6 py-4 text-sm font-bold text-[#224292]">{member.position}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>
      </div>

    </div>
  )
}
