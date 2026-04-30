import React from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, Star, UserCheck, Briefcase, CheckCircle2, Trophy, FileText, Users } from 'lucide-react'

const features = [
  {
    title: "Industry-Aligned Training",
    desc: "Curriculum designed with real industry insights to build in-demand skills.",
    icon: Star,
    color: "#ffc107"
  },
  {
    title: "Dedicated Placement Support",
    desc: "Mock interviews, resume building & personalized mentoring support.",
    icon: UserCheck,
    color: "#ffc107"
  },
  {
    title: "Internships & Live Projects",
    desc: "Hands-on exposure through internships and real-world projects.",
    icon: Briefcase,
    color: "#ffc107"
  }
]

const HeaderSection = () => {
  const [isMobile, setIsMobile] = React.useState(false)

  React.useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 1024)
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  return (
    <div className="relative w-full bg-white overflow-hidden font-graphik min-h-[450px] lg:min-h-[500px] flex items-center">
      
      <div className="grid lg:grid-cols-12 w-full h-full items-center relative">
        
        {/* Left Column: Content Area */}
        <div className="lg:col-span-5 relative z-20 flex justify-end">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="max-w-xl w-full px-8 lg:px-12 py-6"
          >
            {/* Tag Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#224292]/5 border border-[#224292]/10 shadow-sm mb-4">
               <Trophy size={12} className="text-[#224292]" />
               <span className="text-[9px] font-black text-[#224292] uppercase tracking-[0.2em]">Institutional Excellence</span>
            </div>
            
            {/* Main Header */}
            <h1 className="text-4xl md:text-5xl font-black text-[#224292] mb-4 tracking-tighter leading-[0.9]">
              Placement <br/> <span className="text-[#ffc107]">Excellence</span>
            </h1>
            
            {/* Description */}
            <p className="text-black font-black text-sm md:text-base leading-tight mb-8 max-w-md">
              At KIOT, placement is a continuous journey driven by structured training, skill development, and industry alignment from day one.
            </p>

            {/* Premium Features List */}
            <div className="space-y-4 mb-8">
              {features.map((feature, idx) => (
                <motion.div 
                  key={idx}
                  className="flex gap-4 group"
                >
                  <div className={`w-10 h-10 rounded-full bg-white flex items-center justify-center shrink-0 border border-slate-100 shadow-sm transition-all`} style={{ color: feature.color }}>
                    <feature.icon size={18} />
                  </div>
                  <div className="flex items-center">
                    <h4 className="text-base font-black text-[#224292] tracking-tight">{feature.title}</h4>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Primary Action Buttons */}
            <div className="flex flex-wrap gap-4">
              <button className="px-5 py-2.5 bg-[#ffc107] text-[#224292] rounded-xl font-black text-[9px] uppercase tracking-widest flex items-center gap-2 shadow-lg shadow-[#ffc107]/20">
                <FileText size={14} />
                View Report
                <ArrowRight size={14} />
              </button>
              <button className="px-5 py-2.5 bg-white text-[#224292] border-2 border-[#224292]/10 rounded-xl font-black text-[9px] uppercase tracking-widest flex items-center gap-2">
                <Users size={14} />
                Recruiters
                <ArrowRight size={14} />
              </button>
            </div>
          </motion.div>
        </div>

        {/* Right Column: Deep S-Curve Slant Image Layout */}
        <div className="lg:col-span-7 relative h-full min-h-[450px] lg:min-h-[500px] flex items-center">
          <motion.div 
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="absolute inset-0 z-0 h-full w-full"
            style={{ 
              // Sharp geometric triangle slant for a more dynamic look - Desktop Only
              clipPath: isMobile ? 'none' : 'polygon(15% 0, 100% 0, 100% 100%, 0% 100%)',
              transform: 'scale(1.05)',
              transformOrigin: 'right center'
            }}
          >
            <img 
              src="/students_placements_discussion.png" 
              alt="Placement Students" 
              className="w-full h-full object-cover object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#224292]/40 to-transparent" />
          </motion.div>

          {/* Floating Success Overlay Card (Overlapping the deep slant) */}
          <motion.div 
            initial={{ x: 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            animate={{ 
              y: [0, -10, 0], 
            }}
            transition={{ 
              initial: { delay: 1, duration: 0.8 },
              animate: { duration: 4, repeat: Infinity, ease: "easeInOut" } 
            }}
            className="absolute top-6 -left-12 lg:-left-24 bg-white rounded-[2.5rem] p-6 shadow-[0_30px_60px_rgba(0,0,0,0.12)] border border-white/50 z-30 max-w-[280px] w-full hidden lg:block"
          >
            <div className="flex items-start gap-4 mb-4">
              <div className="w-12 h-12 rounded-full bg-[#224292] flex items-center justify-center shrink-0 shadow-xl">
                 <div className="relative">
                    <UserCheck size={24} className="text-white" />
                    <Star size={8} className="text-[#ffc107] absolute -top-0.5 -right-0.5 fill-[#ffc107]" />
                 </div>
              </div>
              <div>
                <p className="text-[7px] font-black text-slate-400 uppercase tracking-[0.4em] mb-1 leading-none">Success</p>
                <div className="bg-[#224292] p-2 px-3 rounded-lg shadow-inner">
                  <h4 className="text-[12px] font-black text-white leading-tight tracking-tight">
                    Building Careers.<br/>
                    <span className="text-[#ffc107]">Creating Futures.</span>
                  </h4>
                </div>
              </div>
            </div>

            <div className="space-y-2 pt-4 border-t border-slate-50">
              {[
                "Strong industry connections",
                "Personalized support",
                "Career-ready from day one"
              ].map((text, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div className="w-4 h-4 rounded-full bg-[#ffc107] flex items-center justify-center shrink-0 shadow-sm">
                    <CheckCircle2 size={8} className="text-[#224292]" strokeWidth={5} />
                  </div>
                  <span className="text-[10px] font-black text-black tracking-tight leading-none">{text}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

      </div>
    </div>
  )
}

export default HeaderSection
