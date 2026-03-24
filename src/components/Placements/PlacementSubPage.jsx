import React from 'react'
import { motion } from 'framer-motion'
import { Briefcase, Building2, GraduationCap, Users, FileText, ArrowRight, ArrowLeft } from 'lucide-react'
import { Link, useLocation } from 'react-router-dom'

const PlacementSubPage = () => {
  const location = useLocation();
  const path = location.pathname.split('/').pop() || 'overview';
  
  const categories = {
    'placement-overview': {
      title: 'Placement Overview',
      subtitle: 'Insight into our career excellence infrastructure',
      icon: Building2,
      subItems: ['Placement Overview', 'Placement Team']
    },
    'training': {
      title: 'Training Division',
      subtitle: 'Empowering students with industry-ready skills',
      icon: GraduationCap,
      subItems: ['Training Programs', 'Training Team', 'Foreign Language Training', 'Training Achievements']
    },
    'recruitment': {
      title: 'Recruitment Hub',
      subtitle: 'Connecting talent with global giants',
      icon: Users,
      subItems: ['Our Recruiters', 'Placement Process', 'Placement Day']
    },
    'outcomes': {
      title: 'Placement Outcomes',
      subtitle: 'Celebrating our consistent record of success',
      icon: FileText,
      subItems: ['Placement Statistics', 'Placement Records']
    }
  };

  const currentCategory = categories[path] || categories['placement-overview'];

  return (
    <div className="relative bg-[#FCFDFD] pt-24 pb-32 min-h-screen overflow-hidden">
      
      {/* Background Graphic elements */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-bl from-[#18357a]/5 to-transparent rounded-bl-full pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-gradient-to-tr from-[#ffc107]/5 to-transparent rounded-tr-full pointer-events-none" />

      <section className="relative px-6 sm:px-10 lg:px-20 z-10 max-w-7xl mx-auto">
        
        {/* Standardized Header */}
        <div className="text-center mb-24">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="inline-flex items-center gap-2.5 px-6 py-2.5 rounded-full bg-white border border-[#D5E2F4]/80 shadow-sm mb-8 hover:shadow-md transition-shadow cursor-default group">
               <span className="relative flex h-3.5 w-3.5">
                 <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#ffc107] opacity-60"></span>
                 <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-[#e0a800]"></span>
               </span>
               <span className="text-sm font-black text-[#18357a] uppercase tracking-[0.2em]">Training & Placement</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-[4rem] font-black text-[#18357a] mb-8 tracking-tighter leading-tight uppercase">
              {currentCategory.title.split(' ')[0]} <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#18357a] via-[#4666B4] to-[#ffc107]">{currentCategory.title.split(' ').slice(1).join(' ')}</span>
            </h1>
            
            <p className="text-[#64779F] text-xl md:text-2xl font-medium max-w-3xl mx-auto leading-relaxed border-l-4 border-[#ffc107] pl-8 py-4 bg-[#18357a]/5 rounded-r-2xl text-left hidden md:block italic">
              {currentCategory.subtitle}
            </p>
          </motion.div>
        </div>

        {/* Dynamic Category Content (The 11 Items inside Page) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
           {currentCategory.subItems.map((item, idx) => (
              <motion.div 
                 key={idx}
                 initial={{ opacity: 0, y: 20 }}
                 whileInView={{ opacity: 1, y: 0 }}
                 viewport={{ once: true }}
                 transition={{ delay: idx * 0.1, duration: 0.6 }}
                 className="group relative bg-white rounded-[2rem] p-8 md:p-10 border border-[#D5E2F4]/50 shadow-[0_20px_50px_rgba(24,53,122,0.03)] hover:shadow-[0_30px_70px_rgba(24,53,122,0.08)] transition-all duration-500 overflow-hidden"
              >
                  {/* Subtle Background Accent */}
                  <div className="absolute top-0 right-0 w-32 h-32 bg-[#18357a]/[0.02] rounded-bl-[4rem] group-hover:bg-[#ffc107]/5 transition-colors" />
                  
                  <div className="relative z-10">
                    <div className="w-14 h-14 rounded-2xl bg-[#18357a]/5 flex items-center justify-center text-[#18357a] mb-6 group-hover:bg-[#18357a] group-hover:text-white transition-all duration-500">
                       <currentCategory.icon size={26} className="group-hover:scale-110 transition-transform" />
                    </div>
                    
                    <h3 className="text-2xl font-black text-[#18357a] mb-4 tracking-tight uppercase group-hover:text-[#4666B4] transition-colors leading-tight">
                       {item}
                    </h3>
                    
                    <p className="text-[#64779F] font-semibold text-sm mb-8 leading-relaxed">
                       Comprehensive details and resources for {item.toLowerCase()} are currently being updated to provide the latest information.
                    </p>
                    
                    <div className="flex items-center gap-3 text-[#ffc107] text-[11px] font-black uppercase tracking-widest group-hover:gap-5 transition-all">
                       <span>Exploring Soon</span>
                       <ArrowRight size={14} />
                    </div>
                  </div>
              </motion.div>
           ))}
        </div>

        {/* Action Link back to home or top */}
        <div className="mt-24 text-center">
           <Link 
             to="/"
             className="inline-flex items-center gap-3 text-[#18357a] font-black uppercase text-xs tracking-[0.2em] hover:gap-5 transition-all border-b-2 border-[#ffc107] pb-2"
           >
              <ArrowLeft size={16} />
              Return to Placements Home
           </Link>
        </div>

      </section>
    </div>
  )
}

export default PlacementSubPage
