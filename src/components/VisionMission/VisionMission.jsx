import React from 'react'
import { motion } from 'framer-motion'
import { 
  Eye, Target, Sparkles, Heart, ShieldCheck, 
  Presentation, GraduationCap, Briefcase, Users, Mountain, Lightbulb, 
  Feather 
} from 'lucide-react'

const VisionMission = ({ hideHeader = false }) => {
  const valuesData = [
    {
      title: "Our Vision",
      icon: Eye,
      type: "paragraph",
      content: "To be a world-Class institution to impart value and need based professional education to the aspiring youth and carving them into disciplined world-class professionals who have the quest for excellence, achievement orientation and social responsibilities."
    },
    {
      title: "Our Mission",
      icon: Target,
      type: "list",
      content: [
        "To promote academic growth by offering state-of-the-art undergraduate, postgraduate and doctoral programmes and to generate new knowledge by engaging in cutting – edge research.",
        "To nurture talent, innovation, entrepreneurship, all-round personality and value system among the students and to foster global competitiveness among students.",
        "To pursue global standards of excellence in all our endeavours namely teaching, research, consultancy, continuing education and support functions.",
        "To undertake collaborative projects which offer opportunities for long-term interaction with academia and industry for creating a sustainable world."
      ]
    },
    {
      title: "Our Promise",
      icon: Sparkles,
      type: "list",
      content: [
        "100% Placement",
        "Ethics & Value Based Education"
      ]
    },
    {
      title: "Our Values",
      icon: Heart,
      type: "list",
      content: [
        "Stakeholder Friendly",
        "Value for Money",
        "Quality Centred",
        "Open to Innovation",
        "Ethics Driven"
      ]
    },
    {
      title: "Our Commitment",
      icon: ShieldCheck,
      type: "list",
      content: [
        "World Class Education",
        "Culture of Innovation & Creativity",
        "Degree On Time",
        "100% Placement",
        "360° Personality Development",
        "Ethics & Values Based Education"
      ]
    }
  ]

  const cardSpans = [
    "md:col-span-1 lg:col-span-1", // Vision
    "md:col-span-1 lg:col-span-2", // Mission
    "md:col-span-1 lg:col-span-1", // Promise
    "md:col-span-1 lg:col-span-1", // Values
    "md:col-span-2 lg:col-span-1"  // Commitment
  ]

  return (
    <div id="values" className="relative bg-[#fafbfe] pt-2 md:pt-4 pb-6 md:pb-8 border-t border-slate-100 mt-1 md:mt-2 overflow-hidden">
      
      {/* Subtle decorative background glow */}
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-[#224292]/5 rounded-full filter blur-[100px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-[#ffc107]/5 rounded-full filter blur-[100px] pointer-events-none" />

      <section className="relative px-4 lg:px-12 z-10 w-full max-w-7xl mx-auto">
        
        {/* Header Section */}
        {!hideHeader && (
          <div className="text-center mb-4 lg:mb-6 px-4">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex flex-col items-center"
            >
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-graphik font-semibold text-[#224292] mb-2 tracking-tighter leading-tight break-words">
                Our Institutional <span className="text-[#ffc107]">Values</span>
              </h2>
            </motion.div>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-[#555555] text-[14px] sm:text-[15px] leading-relaxed font-normal max-w-2xl mx-auto"
            >
              The core principles and aspirations that drive our commitment to academic excellence, innovative research, and student success.
            </motion.p>
          </div>
        )}

        {/* Institutional Values Cards (Reduced Spacings, Inline Heading, Modern Bullet Points, Gradient bg/shadow) */}
        <div className="w-full mx-auto py-1 lg:py-2">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {valuesData.map((val, i) => {
              const Icon = val.icon
              const cardSpan = cardSpans[i]

              return (
                <div
                  key={i}
                  className={`relative bg-white p-5 md:p-6 rounded-[2rem] border border-slate-100/80 shadow-xl shadow-black/[0.12] overflow-hidden flex flex-col justify-between ${cardSpan}`}
                >
                  {/* Glowing Gold side accent bar */}
                  <div className="absolute top-10 left-0 w-1.5 h-12 bg-gradient-to-b from-[#ffc107] to-[#D4AF37] rounded-r-full" />

                  <div>
                    {/* Inline Header Layout: Icon and Title inline, no large 01.02.03 background numbers */}
                    <div className="flex items-center gap-3.5 mb-4">
                      <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-[#224292] to-[#18357a] text-white flex items-center justify-center shadow-md shrink-0">
                        <Icon size={20} className="text-[#ffc107]" />
                      </div>
                      <h3 className="text-lg md:text-xl font-graphik font-bold text-[#224292] tracking-tight">
                        {val.title}
                      </h3>
                    </div>

                    {/* Golden Divider */}
                    <div className="h-[2.5px] w-12 bg-gradient-to-r from-[#ffc107] via-[#ffc107]/70 to-transparent mb-4 rounded-full" />

                    {/* Card Content Renderers (Normal weight with modern bullet points) */}
                    {val.type === "paragraph" ? (
                      <p className="text-[#555555] font-graphik font-normal text-[13.5px] lg:text-[14.5px] leading-[25px] text-justify">
                        {val.content}
                      </p>
                    ) : (
                      <div className="space-y-2.5">
                        {val.content.map((item, idx) => (
                          <div key={idx} className="flex items-start gap-2.5 w-full">
                            <span className="shrink-0 w-1.5 h-1.5 rounded-full bg-[#ffc107] mt-2" />
                            <p className="text-[#555555] font-graphik font-normal text-[13.5px] lg:text-[14.5px] leading-relaxed text-justify w-full">
                              {item}
                            </p>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        {/* ─── PRIME MOTTOES BANNER SECTION ─── */}
        <div className="w-full mt-4 md:mt-6">
          <div className="bg-[#224292] rounded-3xl overflow-hidden shadow-lg flex flex-col lg:flex-row items-stretch">
            
            {/* Left Block: WHITE card with Feather logo */}
            <div className="w-full lg:w-1/4 bg-white p-6 flex flex-col items-center justify-center text-center relative min-h-[180px]">
              <div className="w-14 h-14 rounded-full bg-[#224292]/10 flex items-center justify-center text-[#224292] mb-3 shadow-inner">
                <Feather size={28} className="stroke-[2.5]" />
              </div>
              <h4 className="text-xl font-extrabold text-[#224292] tracking-widest leading-tight font-graphik">
                PRIME<br />MOTTOES
              </h4>
              {/* Pointing triangle arrow to the right */}
              <div className="hidden lg:block absolute top-1/2 -right-3 -translate-y-1/2 w-0 h-0 border-y-[10px] border-y-transparent border-l-[10px] border-l-white z-20" />
            </div>

            {/* Middle Block: 2 Columns of Mottoes with Icons */}
            <div className="w-full lg:w-3/4 p-6 md:p-8 flex items-center">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-5 w-full">
                
                {/* Col 1 */}
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="w-7 h-7 rounded-lg bg-white/10 flex items-center justify-center text-white mr-3 shrink-0 mt-0.5">
                      <Presentation size={16} />
                    </div>
                    <span className="text-white font-graphik font-normal text-[15px] sm:text-[16px] leading-snug">
                      World-Class Education
                    </span>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="w-7 h-7 rounded-lg bg-white/10 flex items-center justify-center text-white mr-3 shrink-0 mt-0.5">
                      <GraduationCap size={16} />
                    </div>
                    <span className="text-white font-graphik font-normal text-[15px] sm:text-[16px] leading-snug">
                      Degree on Time
                    </span>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="w-7 h-7 rounded-lg bg-white/10 flex items-center justify-center text-white mr-3 shrink-0 mt-0.5">
                      <Briefcase size={16} />
                    </div>
                    <span className="text-white font-graphik font-normal text-[15px] sm:text-[16px] leading-snug">
                      100% Career Success
                    </span>
                  </div>
                </div>

                {/* Col 2 */}
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="w-7 h-7 rounded-lg bg-white/10 flex items-center justify-center text-white mr-3 shrink-0 mt-0.5">
                      <Users size={16} />
                    </div>
                    <span className="text-white font-graphik font-normal text-[15px] sm:text-[16px] leading-snug">
                      Ethics and Values Based Education
                    </span>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="w-7 h-7 rounded-lg bg-white/10 flex items-center justify-center text-white mr-3 shrink-0 mt-0.5">
                      <Mountain size={16} />
                    </div>
                    <span className="text-white font-graphik font-normal text-[15px] sm:text-[16px] leading-snug">
                      Overall Personality Development
                    </span>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="w-7 h-7 rounded-lg bg-white/10 flex items-center justify-center text-white mr-3 shrink-0 mt-0.5">
                      <Lightbulb size={16} />
                    </div>
                    <span className="text-white font-graphik font-normal text-[15px] sm:text-[16px] leading-snug">
                      Culture of Innovation and Creativity
                    </span>
                  </div>
                </div>

              </div>
            </div>

          </div>
        </div>


      </section>
    </div>
  )
}

export default VisionMission
