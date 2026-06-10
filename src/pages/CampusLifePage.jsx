import React, { useState, useEffect, useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'

// Animated Counter component
const Counter = ({ value }) => {
  const [count, setCount] = useState(0)
  const elementRef = useRef(null)
  const [hasStarted, setHasStarted] = useState(false)

  // Extract number, commas, and suffix (e.g. "12,000+" -> target: 12000, suffix: "+")
  const numStr = value.replace(/[^\d]/g, '')
  const target = parseInt(numStr, 10) || 0
  const suffix = value.replace(/[\d,]/g, '')
  const hasCommas = value.includes(',')

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setHasStarted(true)
          observer.disconnect()
        }
      },
      { threshold: 0.1 }
    )

    if (elementRef.current) {
      observer.observe(elementRef.current)
    }

    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    if (!hasStarted) return

    let startTime = null
    const duration = 2000 // 2 seconds

    const animate = (timestamp) => {
      if (!startTime) startTime = timestamp
      const progress = timestamp - startTime
      const progressPercentage = Math.min(progress / duration, 1)

      const easeOutQuad = (t) => t * (2 - t)
      const currentCount = Math.floor(easeOutQuad(progressPercentage) * target)

      setCount(currentCount)

      if (progressPercentage < 1) {
        requestAnimationFrame(animate)
      } else {
        setCount(target)
      }
    }

    requestAnimationFrame(animate)
  }, [hasStarted, target])

  const formatNumber = (num) => {
    if (hasCommas) {
      return num.toLocaleString()
    }
    return num.toString()
  }

  return (
    <span ref={elementRef}>
      {formatNumber(count)}{suffix}
    </span>
  )
}
import {
  Library,
  Monitor,
  Trophy,
  Compass,
  Bus,
  LayoutGrid,
  ArrowUpRight,
  Users,
  Landmark,
  CalendarDays,
  ShieldCheck,
  Video,
  Zap,
  Wifi,
  BookOpenCheck,
  X
} from 'lucide-react'

import campusTourVid from '../assets/main/campus tour.mp4'

// Local Assets for Campus Essentials (Tamil Nadu / KIOT based)
import kiotLibrary from '../assets/life@kiot/library1.webp'
import kiotSports from '../assets/main/sh-1.webp'
import kiotTransport from '../assets/life@kiot/collge bus.webp'
import kiotLab from '../assets/main/l1.webp'
import kiotCafeteria from '../assets/main/kiot_cafeteria.webp'
import kiotSymposium from '../assets/life@kiot/media center.webp'
import campusMain from '../assets/main/campus .webp'

const CAMPUS_HUBS = [
  {
    id: 'library',
    title: 'Library',
    subtitle: 'Gateway to Knowledge',
    icon: Library,
    image: kiotLibrary,
    link: '/campus-life/library',
    color: '#224292'
  },

  {
    id: 'sports',
    title: 'Sports & Games',
    subtitle: 'Excellence in Action',
    icon: Trophy,
    image: kiotSports,
    link: '/campus-life/sports',
    color: '#224292'
  },
  {
    id: 'tour',
    title: 'Campus Tour',
    subtitle: 'Explore our legacy',
    icon: Compass,
    image: campusMain,
    link: '/campus-life/tour',
    color: '#ffc107'
  },
  {
    id: 'transport',
    title: 'Transport',
    subtitle: 'Safe & Reliable Commute',
    icon: Bus,
    image: kiotTransport,
    link: '/campus-life/transport',
    color: '#224292'
  },
  {
    id: 'amenities',
    title: 'Amenities',
    subtitle: 'Campus Life Services',
    icon: LayoutGrid,
    image: kiotCafeteria,
    link: '/campus-life/amenities',
    color: '#ffc107'
  },
  {
    id: 'media',
    title: 'Media Center',
    subtitle: 'Multimedia Excellence',
    icon: Video,
    image: kiotSymposium,
    link: '/campus-life/media',
    color: '#224292'
  },
  {
    id: 'energy',
    title: 'Energy Initiatives',
    subtitle: 'Sustainable Campus',
    icon: Zap,
    image: 'https://images.unsplash.com/photo-1613665813446-82a78c468a1d?q=80&w=800&auto=format&fit=crop', // Realistic Solar Farm
    link: '/campus-life/energy',
    color: '#ffc107'
  },
  {
    id: 'internet',
    title: 'Internet & Computing',
    subtitle: '24/7 Digital Hub',
    icon: Wifi,
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=800&auto=format&fit=crop', // Kept as requested
    link: '/campus-life/internet',
    color: '#224292'
  }
]

const CampusLifePage = () => {
  const navigate = useNavigate()
  const [showVideo, setShowVideo] = useState(false)

  return (
    <div className="min-h-screen bg-white pb-24 relative">
      <AnimatePresence>
        {showVideo && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[9999] flex items-center justify-center bg-black backdrop-blur-xl p-4 md:p-10"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative w-full max-w-6xl aspect-video rounded-3xl overflow-hidden shadow-2xl border border-white/20 bg-black"
            >
              <button
                onClick={() => setShowVideo(false)}
                className="absolute top-6 right-6 z-50 w-12 h-12 rounded-full bg-white flex items-center justify-center text-[#224292] hover:bg-[#ffc107] transition-all shadow-xl"
              >
                <X size={24} strokeWidth={3} />
              </button>
              <video
                src={campusTourVid}
                className="w-full h-full object-contain"
                controls
                autoPlay
                playsInline
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="w-full px-6 lg:px-12 pt-6 md:pt-24 pb-6 md:pb-12 relative z-20">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24"
        >
          <div className="w-full lg:w-[45%] space-y-8">
            <h3 className="text-4xl md:text-6xl font-black text-[#224292] tracking-tighter leading-none">
              Building <span className="text-[#ffc107]">Legacy</span> <br />
              Through Innovation
            </h3>
            <div className="space-y-6">
              <p className="text-[#1a1a1a] text-base leading-relaxed font-bold text-justify">
                At KIOT, excellence is built through advanced infrastructure, vibrant campus life, and a strong sports culture. Smart classrooms, modern labs, and innovation-driven spaces support academic growth, while a dynamic student community encourages creativity, collaboration, and global exposure.
              </p>
              <p className="text-[#1a1a1a] text-base leading-relaxed font-bold text-justify">
                With top-tier sports facilities and professional training, students grow both physically and mentally, creating a well-rounded environment focused on performance, passion, and progress.
              </p>
            </div>
          </div>

          <div className="w-full lg:w-[55%] relative group">
            <div className="absolute -inset-4 bg-slate-100 rounded-[2rem] -rotate-1 group-hover:rotate-0 transition-transform duration-500" />
            <div
              onClick={() => setShowVideo(true)}
              className="relative rounded-2xl overflow-hidden shadow-2xl aspect-video cursor-pointer border-4 border-white group-hover:border-[#ffc107]/20 transition-all duration-500"
            >
              <img
                src={campusMain}
                alt="Campus Tour"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#224292]/60 to-transparent" />
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="w-20 h-20 rounded-full bg-white flex items-center justify-center text-[#224292] shadow-2xl group-hover:bg-[#ffc107] transition-colors duration-500"
                >
                  <Video size={32} fill="currentColor" className="ml-1" />
                </motion.div>
                <span className="mt-4 text-xs font-black text-white tracking-[4px] drop-shadow-lg uppercase">Watch Campus Tour</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      <div className="bg-[#224292] py-12 md:py-16 relative z-20 overflow-hidden">
        <div className="max-w-6xl mx-auto w-full px-6 lg:px-12 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { v: "12,000+", l: "Active Students", i: Users, d: "Diverse community of learners and achievers." },
              { v: "150+", l: "Student Clubs", i: Landmark, d: "Nurturing talents beyond the classroom walls." },
              { v: "25+", l: "Sports Teams", i: Trophy, d: "Striving for excellence in state & national levels." },
              { v: "500+", l: "Annual Events", i: CalendarDays, d: "A vibrant calendar filled with tech & culturals." }
            ].map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex flex-col bg-white rounded-2xl shadow-xl shadow-black/10 overflow-hidden group hover:-translate-y-2 transition-all duration-500 w-full max-w-[230px] mx-auto"
              >
                <div className="p-3 md:p-4 md:pb-4 flex flex-col items-center text-center space-y-2">
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center shadow-lg transition-transform group-hover:rotate-6 duration-500 bg-[#224292] text-white"
                  >
                    <stat.i size={18} />
                  </div>
                  <div className="space-y-1">
                    <p className="text-[10px] font-black text-black uppercase tracking-[3px]">{stat.l}</p>
                    <p className="text-2xl lg:text-3xl font-black text-[#224292] tracking-tighter leading-none">
                      <Counter value={stat.v} />
                    </p>
                  </div>
                </div>
                <div
                  className="h-14 flex items-center justify-center p-2 text-center mt-auto bg-[#ffc107]"
                >
                  <p className="text-[10px] font-black uppercase tracking-widest leading-normal text-[#224292]">
                    {stat.d}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      <div className="w-full px-6 lg:px-12 py-12 md:py-16 relative z-20">
        <div className="flex items-center justify-center gap-4 mb-16">
          <div className="h-[2px] w-16 bg-[#ffc107] rounded-full" />
          <h2 className="text-3xl font-black text-[#224292] tracking-tight text-center">Campus <span className="text-[#ffc107]">Essentials</span></h2>
          <div className="h-[2px] w-16 bg-[#ffc107] rounded-full" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 xl:gap-8">
          {CAMPUS_HUBS.map((hub, idx) => (
            <motion.div
              key={hub.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.05 }}
              onClick={() => navigate(hub.link)}
              className="group bg-white rounded-xl transition-all duration-500 cursor-pointer overflow-hidden flex flex-col relative shadow-md shadow-black/10 hover:shadow-xl hover:shadow-black/15 hover:-translate-y-1.5 border border-slate-100"
            >
              <div className="relative w-full h-32 md:h-40 overflow-hidden">
                <img
                  src={hub.image}
                  alt={hub.title}
                  className="w-full h-full object-cover group-hover:scale-[1.08] transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 via-slate-900/10 to-transparent" />

                {hub.icon && (
                  <div
                    className="absolute bottom-3 left-4 w-10 h-10 rounded-xl flex items-center justify-center shadow-2xl backdrop-blur-md border border-white/20 transition-all group-hover:scale-110 group-hover:rotate-3 duration-500"
                    style={{ backgroundColor: `${hub.color}CC`, color: '#fff' }}
                  >
                    <hub.icon size={20} strokeWidth={2.5} />
                  </div>
                )}
              </div>

              <div className="p-4 flex-1 flex flex-col justify-between">
                <div className="flex items-center justify-between gap-2">
                  <h4 className="text-[16px] font-semibold text-[#224292] leading-tight transition-colors duration-300 group-hover:text-[#ffc107]">{hub.title}</h4>
                  <div className="w-6 h-6 rounded-full bg-slate-50 flex items-center justify-center group-hover:bg-[#ffc107] group-hover:text-[#224292] transition-all duration-300 shadow-sm shrink-0">
                    <ArrowUpRight size={13} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" />
                  </div>
                </div>
                <p className="text-[11px] text-slate-500 font-bold leading-relaxed mt-1">{hub.subtitle}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default CampusLifePage
