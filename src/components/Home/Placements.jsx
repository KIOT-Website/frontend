import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'
import { TrendingUp, GraduationCap, Building2, UserCheck, Briefcase } from 'lucide-react'

// Recruiter Logos
import techMahindraLogo from '../../assets/main/tech mahendra.webp'
import expleoLogo from '../../assets/main/ecpleo.webp'
import codingmartLogo from '../../assets/main/codingmart.webp'
import haritaLogo from '../../assets/main/harita.webp'
import hexawareLogo from '../../assets/main/hexaware.webp'
import itcLogo from '../../assets/main/itc.webp'
import neyesLogo from '../../assets/main/neyes.webp'
import raplLogo from '../../assets/main/rapl.webp'
import tefologicLogo from '../../assets/main/tefologic.webp'
import tessolveLogo from '../../assets/main/tessolve.webp'

const stats = [
  {
    label: "Highest Salary",
    value: "12.00 Lakhs",
    sub: "By Top Industry Leaders",
    icon: TrendingUp
  },
  {
    label: "Average Salary",
    value: "4.30 Lakhs",
    sub: "Industry competitive",
    icon: Building2
  },
  {
    label: "Companies Visited",
    value: "150+",
    sub: "Top tier corporates",
    icon: Briefcase
  },
  {
    label: "% Placement",
    value: "95%",
    sub: "Across all streams",
    icon: GraduationCap
  }
]

const recruiterData = [
  { name: "Tefologic", lpa: "12.50 LPA", count: 9, logo: tefologicLogo },
  { name: "Neyes Infotech", lpa: "8.00 LPA", count: 2, logo: neyesLogo },
  { name: "Rapid RL", lpa: "5.67 LPA", count: 2, logo: raplLogo },
  { name: "Tech Mahindra", lpa: "5.50 LPA", count: 37, logo: techMahindraLogo },
  { name: "ITC Infotech", lpa: "4.25 LPA", count: 36, logo: itcLogo },
  { name: "Codingmart", lpa: "4.20 LPA", count: 3, logo: codingmartLogo },
  { name: "Expleo", lpa: "4.00 LPA", count: 24, logo: expleoLogo },
  { name: "Hexaware", lpa: "4.00 LPA", count: 4, logo: hexawareLogo },
  { name: "Tessolve", lpa: "4.00 LPA", count: 20, logo: tessolveLogo },
  { name: "Harita Techserv", lpa: "3.00 LPA", count: 19, logo: haritaLogo }
]

const Placements = () => {
  const navigate = useNavigate()
  return (
    <section className="relative py-6 lg:py-8 bg-[#224292] overflow-hidden text-white" id="placements">
      
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute top-[10%] left-[-5%] w-[500px] h-[500px] bg-white rounded-full blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-5%] w-[400px] h-[400px] bg-[#ffc107] rounded-full blur-[150px]" />
      </div>

      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative z-10 mx-auto max-w-7xl px-6 lg:px-10"
      >
        <div className="grid lg:grid-cols-[0.45fr_0.55fr] gap-12 lg:gap-20 items-center">
          
          {/* LEFT SIDE: Big Numbers */}
          <div className="space-y-10 lg:pl-4">
            <div>
              <h2 className="text-3xl lg:text-5xl font-semibold font-graphik leading-[1.1] text-white">
                Where Talent <br />
                <span className="text-[#ffc107]">Meets Opportunity</span>
              </h2>
            </div>

            <div className="space-y-8">
              {stats.map((stat, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.1 }}
                  className="flex items-start gap-4"
                >
                   <div className="h-10 w-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-[#ffc107]">
                      <stat.icon className="w-5 h-5 lg:w-6 lg:h-6" />
                   </div>
                   <div>
                      <div className="flex items-baseline gap-1.5">
                        {stat.label.includes('Salary') && <span className="text-white/40 text-[10px] font-black uppercase -mt-0.5">₹</span>}
                        <p className="text-3xl lg:text-4xl font-black font-display tracking-tight text-white">{stat.value}</p>
                      </div>
                      <p className="text-[13px] font-bold uppercase tracking-[0.2em] text-[#A9B1C3]">{stat.label}</p>
                      <p className="text-[13px] font-bold text-[#ffc107]/60 mt-0.5">{stat.sub}</p>
                   </div>
                </motion.div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-6 pt-4">
              <div className="p-4 bg-white/5 border border-white/10 rounded-2xl flex items-center gap-3 w-fit">
                <div className="h-8 w-8 rounded-full bg-[#ffc107] flex items-center justify-center text-[#224292]">
                   <UserCheck size={16} />
                </div>
                <p className="text-[12px] font-black text-white/70 uppercase tracking-widest leading-none">Quality Placements <br/> Are Our Motto</p>
              </div>

              <button 
                onClick={() => navigate('/placement-overview')}
                className="group relative px-10 py-5 bg-[#ffc107] text-[#224292] rounded-2xl font-black uppercase tracking-[0.2em] text-[12px] overflow-hidden shadow-2xl hover:bg-white transition-all flex items-center gap-3"
              >
                 Explore Placements
                 <TrendingUp size={16} className="group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>

          {/* RIGHT SIDE: Recruiter Slide (Infinite Loop) */}
          <div className="relative">
             <div className="mb-10 text-center lg:text-left">
                <h3 className="text-2xl lg:text-3xl font-semibold font-graphik mb-1 text-white tracking-tight">Our Top Hiring Partners</h3>
                <div className="h-1 w-12 bg-[#ffc107] mb-4 mx-auto lg:mx-0 rounded-full" />
             </div>

             <div className="relative h-[440px] w-full overflow-hidden mask-fade-vertical group/marquee">
                {/* Vertical Infinite Marquee - CSS Based for Pause on Hover */}
                <div className="flex flex-col gap-4 animate-marquee-vertical hover:[animation-play-state:paused]">
                    {[...recruiterData, ...recruiterData, ...recruiterData].map((rec, i) => (
                     <div
                        key={i}
                        className="p-5 bg-white/5 border border-white/10 rounded-2xl flex items-center justify-between group h-24 transition-all hover:bg-white/10 hover:border-[#ffc107]/50"
                     >
                        <div className="flex items-center gap-5">
                           {/* Enlarged Logo Slot */}
                           <div className="h-16 w-16 lg:h-20 lg:w-20 rounded-2xl bg-white p-2.5 flex items-center justify-center shrink-0 shadow-sm border border-white/10 group-hover:scale-105 transition-transform duration-500">
                              {rec.logo ? (
                                <img src={rec.logo} alt={rec.name + " corporate hiring partner logo"} className="max-h-full max-w-full object-contain" loading="lazy" />
                              ) : (
                                <div className="text-[#224292]/20 font-black text-[9px] text-center leading-none uppercase pr-1 italic">Logo Req.</div>
                              )}
                           </div>
                           
                           <div className="flex flex-col">
                              <span className="font-display font-black text-sm lg:text-base text-white/90 group-hover:text-white transition-colors mb-1">
                                {rec.name}
                              </span>
                              <div className="flex items-center gap-4 text-white/40 text-[11px] uppercase font-black tracking-widest">
                                 <span className="flex items-center gap-1.5"><TrendingUp size={12} className="text-[#ffc107]" /> {rec.lpa}</span>
                                 <span className="flex items-center gap-1.5"><UserCheck size={12} className="text-[#ffc107]/50" /> {rec.count} Placed</span>
                              </div>
                           </div>
                        </div>
                        <div className="flex items-center gap-2">
                           <div className="h-1 w-6 bg-[#ffc107]/20 rounded-full group-hover:bg-[#ffc107] transition-all" />
                           <Briefcase size={16} className="text-white/20 group-hover:text-[#ffc107] transition-colors" />
                        </div>
                     </div>
                   ))}
                </div>

                <style>{`
                  @keyframes marquee-v {
                    0% { transform: translateY(0); }
                    100% { transform: translateY(-50%); }
                  }
                  .animate-marquee-vertical {
                    animation: marquee-v 40s linear infinite;
                  }
                  .animate-marquee-vertical:hover {
                    animation-play-state: paused !important;
                  }
                `}</style>

                {/* Vertical Fade Effect Overlay */}
                <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-[#224292] to-transparent z-10" />
                <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[#224292] to-transparent z-10" />
             </div>
          </div>

        </div>
      </motion.div>

    </section>
  )
}

export default Placements
