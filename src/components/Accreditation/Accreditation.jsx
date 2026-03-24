import React, { useRef } from 'react'
import { motion, useScroll, useTransform, useInView } from 'framer-motion'
import { Award, ShieldCheck, Landmark, Trophy, CheckCircle2, Star, Target, FileCheck } from 'lucide-react'

const AccreditationItem = ({ title, description, icon: Icon, delay }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: -20 }}
      animate={isInView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.6, delay }}
      className="relative pl-12 pb-16 last:pb-0 group"
    >
      {/* Vertical Indicator Line */}
      <div className="absolute left-0 top-0 bottom-0 w-px bg-[#E2E8F0] overflow-hidden">
        <motion.div 
          initial={{ height: 0 }}
          animate={isInView ? { height: '100%' } : {}}
          transition={{ duration: 0.8, delay }}
          className="w-full bg-[#18357a]"
        />
      </div>

      {/* Bullet Dot / Icon */}
      <div className="absolute left-[-16px] top-0 w-8 h-8 rounded-full bg-white border border-[#18357a]/20 flex items-center justify-center shadow-sm z-10 transition-all duration-300 group-hover:scale-110 group-hover:border-[#ffc107] group-hover:bg-[#ffc107]/5">
        <Icon size={14} className="text-[#18357a] group-hover:text-[#ffc107] transition-colors" />
      </div>

      {/* Content */}
      <div className="space-y-3">
        <h3 className="text-2xl lg:text-3xl font-black text-[#18357a] tracking-tight hover:translate-x-1 transition-transform">
          {title}
        </h3>
        <p className="text-[#64779F] font-medium leading-relaxed max-w-2xl text-lg">
          {description}
        </p>
        
        {/* Subtle horizontal line for separation */}
        <div className="w-12 h-px bg-[#18357a]/10 group-hover:w-24 transition-all duration-500" />
      </div>
    </motion.div>
  );
};

const Accreditation = () => {
  const mainRef = useRef(null);

  const accreditations = [
    {
      title: "AICTE Approval",
      description: "Knowledge Institute of Technology is approved by the All India Council for Technical Education (AICTE), New Delhi, ensuring compliance with national standards for technical education.",
      icon: ShieldCheck
    },
    {
      title: "NAAC Accreditation",
      description: "Accredited by the National Assessment and Accreditation Council (NAAC) with an 'A' Grade, reflecting our commitment to quality in teaching, research, and infrastructure.",
      icon: Award
    },
    {
      title: "University Affiliation",
      description: "Permanently affiliated to Anna University, Chennai, one of India's leading technical universities, ensuring academic excellence and recognized degree standards.",
      icon: Landmark
    },
    {
      title: "National & Global Rankings",
      description: "Consistent performance in NIRF rankings and recognized by various ranking agencies as a premier destination for technical education in the region.",
      icon: Trophy
    }
  ];

  return (
    <div className="relative bg-[#FCFDFD] pt-16 pb-32 min-h-screen overflow-hidden" ref={mainRef}>
      
      {/* Decorative Background Elements */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-to-bl from-[#18357a]/5 to-transparent rounded-bl-full pointer-events-none" />
      <div className="absolute -top-10 -left-10 w-40 h-40 bg-[radial-gradient(#18357a_2px,transparent_2px)] [background-size:16px_16px] opacity-10" />

      {/* Floating Authority Icons - Extremely Subtle */}
      <motion.div 
        animate={{ y: [0, -20, 0], rotate: [0, 5, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/4 right-10 opacity-[0.03] pointer-events-none hidden xl:block"
      >
        <Star size={240} className="text-[#18357a]" />
      </motion.div>
      <motion.div 
        animate={{ y: [0, 20, 0], rotate: [0, -5, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-1/4 left-10 opacity-[0.03] pointer-events-none hidden xl:block"
      >
        <ShieldCheck size={280} className="text-[#ffc107]" />
      </motion.div>

      <section className="relative px-6 sm:px-10 lg:px-20 z-10 max-w-7xl mx-auto">
        
        {/* Simplified Header */}
        <div className="text-center mb-24">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <div className="inline-flex items-center gap-2.5 px-6 py-2.5 rounded-full bg-white border border-[#D5E2F4]/80 shadow-sm mb-8 hover:shadow-md transition-shadow cursor-default group">
               <div className="w-2 h-2 rounded-full bg-[#ffc107] animate-pulse" />
               <span className="text-sm font-black text-[#18357a] uppercase tracking-[0.2em]">Quality Assurance</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-[3.5rem] font-black text-[#18357a] mb-6 tracking-tighter leading-tight relative inline-block group">
              Accreditation & <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#18357a] via-[#4666B4] to-[#ffc107] uppercase">Ranking</span>
              <span className="absolute -bottom-2 left-0 w-0 h-1 bg-[#ffc107] transition-all duration-700 group-hover:w-full" />
            </h1>
            
            <p className="text-[#64779F] text-xl lg:text-2xl max-w-2xl mx-auto font-medium leading-relaxed mt-4 opacity-80">
              Upholding the highest standards of academic excellence through rigorous national and global certifications.
            </p>
          </motion.div>
        </div>

        {/* Vertical Flow Section */}
        <div className="max-w-4xl mx-auto mb-28">
           <div className="relative">
              {accreditations.map((item, index) => (
                <AccreditationItem 
                  key={index}
                  title={item.title}
                  description={item.description}
                  icon={item.icon}
                  delay={index * 0.15}
                />
              ))}
           </div>
        </div>

        {/* Feature Section - Highlight Strip */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto max-w-4xl"
        >
          <div className="relative group overflow-hidden bg-white rounded-[2.5rem] p-10 lg:p-14 shadow-[0_40px_100px_rgba(24,53,122,0.06)] border border-[#D5E2F4]/40 flex flex-col md:flex-row items-center gap-10">
             {/* Left Border Accent */}
             <div className="absolute left-0 top-0 bottom-0 w-2 bg-[#ffc107]" />
             
             <div className="w-24 h-24 rounded-3xl bg-[#18357a]/5 flex items-center justify-center text-[#ffc107] shrink-0 group-hover:scale-110 transition-transform">
                <Target size={44} />
             </div>
             
             <div className="flex-1 space-y-4">
                <div className="inline-block px-4 py-1.5 rounded-full bg-[#ffc107]/10 text-[#e0a800] text-xs font-black uppercase tracking-widest">
                  Key Feature
                </div>
                <h2 className="text-3xl lg:text-4xl font-black text-[#18357a] font-display">Badge Style Layout</h2>
                <p className="text-[#64779F] text-lg font-medium leading-relaxed max-w-2xl">
                   Strategic and modern classification system that ensures institutional information is digestible, elegant, and authority-focused.
                </p>
             </div>
             
             <div className="flex shrink-0 gap-4">
                <div className="w-12 h-12 rounded-full border-2 border-[#ffc107] flex items-center justify-center text-[#ffc107] animate-pulse">
                   <CheckCircle2 size={24} />
                </div>
             </div>
          </div>
        </motion.div>

      </section>
    </div>
  )
}

export default Accreditation
