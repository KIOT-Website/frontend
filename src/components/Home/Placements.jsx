import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'
import { TrendingUp, GraduationCap, Building2, UserCheck, Briefcase, Download } from 'lucide-react'
import brochurePdf from '../../assets/KIOT Brochure 2026 copy.pdf'
import prospectsPdf from '../../assets/KIOT Prospects MAY 2026 .pdf'

// Recruiter Logos
import infineonLogo from '../../assets/placements/our_recuiters/infineon.png'
import hcltechLogo from '../../assets/placements/our_recuiters/hcltech.png'
import nuvoaiLogo from '../../assets/placements/our_recuiters/nuvoai.png'
import tcsLogo from '../../assets/placements/our_recuiters/tcs.png'
import businessGatewayLogo from '../../assets/placements/our_recuiters/business_gateway.jpg'
import zohoLogo from '../../assets/placements/our_recuiters/zoho.png'
import kaarLogo from '../../assets/placements/our_recuiters/kaar.png'
import cyientLogo from '../../assets/placements/our_recuiters/cyient.png'
import avasoftLogo from '../../assets/placements/our_recuiters/avasoft.png'
import threephaseLogo from '../../assets/placements/our_recuiters/3phase.png'
import ctrlsLogo from '../../assets/placements/our_recuiters/ctrls.png'
import indiumLogo from '../../assets/placements/our_recuiters/indium.png'
import autolivLogo from '../../assets/placements/our_recuiters/autoliv.png'
import cognizantLogo from '../../assets/placements/our_recuiters/cognizant.png'
import itcInfotechLogo from '../../assets/placements/our_recuiters/itc_infotech.png'
import tessolveLogo from '../../assets/placements/our_recuiters/tessolve.png'
import hexawareLogo from '../../assets/placements/our_recuiters/hexaware.png'
import thinkInnovLogo from '../../assets/placements/our_recuiters/think_innov.png'
import vvdnLogo from '../../assets/placements/our_recuiters/vvdn.png'
import vinsinfoLogo from '../../assets/placements/our_recuiters/vinsinfo.png'
import expleoLogo from '../../assets/placements/our_recuiters/expleo.png'
import codingmartLogo from '../../assets/placements/our_recuiters/codingmart.png'
import archeLogo from '../../assets/placements/our_recuiters/arche.png'
import simpsonLogo from '../../assets/placements/our_recuiters/simpson.png'
import haritaLogo from '../../assets/placements/our_recuiters/harita.jpg'
import exoticLogo from '../../assets/placements/our_recuiters/exotic.png'

const stats = [
  {
    label: "Highest Salary",
    value: "13.00 Lakhs",
    icon: TrendingUp
  },
  {
    label: "Average Salary",
    value: "4.10 Lakhs",
    icon: Building2
  },
  {
    label: "Companies Visited",
    value: "150+",
    icon: Briefcase
  },
  {
    label: "% Placement",
    value: "95%",
    icon: GraduationCap
  }
]

const recruiterData = [
  { name: "Infineon Technologies", lpa: "13.00 LPA", count: 1, logo: infineonLogo },
  { name: "HCL Tech", lpa: "4.50 LPA", count: 35, logo: hcltechLogo },
  { name: "Nuvo AI Pvt. Ltd.", lpa: "8.00-10.00 LPA", count: 1, logo: nuvoaiLogo },
  { name: "TCS (Prime)", lpa: "9.09 LPA", count: 11, logo: tcsLogo },
  { name: "Business Gateways International", lpa: "7.45 LPA", count: 1, logo: businessGatewayLogo },
  { name: "Zoho Corporation", lpa: "7.00 LPA", count: 1, logo: zohoLogo },
  { name: "Kaar Technologies", lpa: "6.50 LPA", count: 8, logo: kaarLogo },
  { name: "Cyient", lpa: "6.00 LPA", count: 1, logo: cyientLogo },
  { name: "AVA SOFTWARE Pvt. Ltd.", lpa: "6.00 LPA", count: 1, logo: avasoftLogo },
  { name: "3Phase Engineering Solutions Pvt.Ltd.", lpa: "5.10 LPA", count: 8, logo: threephaseLogo },
  { name: "CTRLS", lpa: "5.00 LPA", count: 2, logo: ctrlsLogo },
  { name: "Indium Software (India) Limited", lpa: "5.00 LPA", count: 2, logo: indiumLogo },
  { name: "Autoliv", lpa: "5.00 LPA", count: 1, logo: autolivLogo },
  { name: "Cognizant (Japanese Hiring)", lpa: "4.76 LPA", count: 3, logo: cognizantLogo },
  { name: "ITC Infotech", lpa: "4.25 LPA", count: 35, logo: itcInfotechLogo },
  { name: "Tessolve Semiconductor Pvt. Ltd.", lpa: "4.13 LPA", count: 3, logo: tessolveLogo },
  { name: "Hexaware Technologies", lpa: "4.00 LPA", count: 34, logo: hexawareLogo },
  { name: "Think Innov Solutions", lpa: "4.00 LPA", count: 10, logo: thinkInnovLogo },
  { name: "VVDN Technologies", lpa: "4.00 LPA", count: 10, logo: vvdnLogo },
  { name: "Think Innov Solutions", lpa: "4.00 LPA", count: 4, logo: thinkInnovLogo },
  { name: "Vinsinfo", lpa: "4.00 LPA", count: 9, logo: vinsinfoLogo },
  { name: "Expleo", lpa: "4.00 LPA", count: 30, logo: expleoLogo },
  { name: "Codingmart Technologies", lpa: "4.00 LPA", count: 4, logo: codingmartLogo },
  { name: "Arche Global", lpa: "4.00 LPA", count: 16, logo: archeLogo },
  { name: "Simpson & Co. Ltd.", lpa: "3.50 LPA", count: 14, logo: simpsonLogo },
  { name: "Harita TechServ", lpa: "3.50 LPA", count: 17, logo: haritaLogo },
  { name: "Exotic Innovation", lpa: "3.50 LPA", count: 9, logo: exoticLogo }
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
          <div className="space-y-6 lg:pl-4">
            <div className="text-center lg:text-left">
              <h2 className="text-3xl lg:text-4xl font-semibold font-graphik leading-[1.1] text-white">
                Where Talent <br />
                <span className="text-[#ffc107]">Meets Opportunity</span>
              </h2>
            </div>

            <div className="grid grid-cols-2 lg:grid-cols-1 gap-y-8 lg:gap-y-4">
              {stats.map((stat, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.1 }}
                  className="flex flex-col items-center lg:flex-row lg:items-start gap-2 lg:gap-4 text-center lg:text-left"
                >
                   <div className="h-10 w-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-[#ffc107]">
                      <stat.icon className="w-5 h-5 lg:w-6 lg:h-6" />
                   </div>
                   <div>
                      <div className="flex items-baseline justify-center lg:justify-start gap-1.5">
                        {stat.label.includes('Salary') && <span className="text-white/40 text-[10px] font-black uppercase -mt-0.5">₹</span>}
                      <p className="text-2xl lg:text-3xl font-bold font-graphik tracking-tight text-white">{stat.value}</p>
                    </div>
                    <p className="text-[10px] lg:text-[12px] font-semibold text-white uppercase tracking-wider opacity-80">{stat.label}</p>
                   </div>
                </motion.div>
              ))}
            </div>

            <div className="grid sm:grid-cols-2 gap-4 pt-2">
              <div className="h-14 bg-white/5 border border-white/10 rounded-2xl flex items-center gap-3 justify-center text-center px-4">
                <div className="h-8 w-8 rounded-full bg-[#ffc107] flex items-center justify-center text-[#224292] shrink-0">
                    <UserCheck size={16} />
                </div>
                <p className="text-[10px] font-black text-white uppercase tracking-widest leading-tight">Quality Placements <br className="hidden sm:block" /> Are Our Motto</p>
              </div>

              <button 
                onClick={() => navigate('/placement-overview')}
                className="group relative h-14 bg-[#ffc107] text-[#224292] rounded-2xl font-black uppercase tracking-[0.2em] text-[10px] overflow-hidden shadow-2xl hover:bg-white transition-all flex items-center justify-center gap-3"
              >
                 Explore Placements
                 <TrendingUp size={16} className="group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>

          {/* RIGHT SIDE: Recruiter Slide (Infinite Loop) */}
          <div className="relative">
             <div className="mb-6 text-center lg:text-left">
                <h3 className="text-lg lg:text-xl font-semibold font-graphik mb-1 text-white tracking-tight">Our Top Hiring Partners</h3>
                <div className="h-1 w-12 bg-[#ffc107] mb-4 mx-auto lg:mx-0 rounded-full" />
             </div>

             <div className="relative h-[380px] w-full overflow-hidden mask-fade-vertical group/marquee">
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
                              <div className="flex items-center gap-4 text-white text-[11px] uppercase font-black tracking-widest">
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

              {/* Brochure & Prospects Buttons */}
              <div className="grid sm:grid-cols-2 gap-4 mt-6">
                  <a 
                      href={brochurePdf}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="h-14 bg-[#ffc107] text-[#224292] hover:bg-white rounded-2xl font-black uppercase tracking-[0.2em] text-[10px] shadow-2xl transition-all flex items-center justify-center gap-3 w-full"
                      style={{ color: '#224292' }}
                  >
                      <Download size={16} /> Brochure
                  </a>
                  <a 
                      href={prospectsPdf}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="h-14 bg-white/10 text-white hover:bg-white/20 border border-white/20 rounded-2xl font-black uppercase tracking-[0.2em] text-[10px] shadow-2xl transition-all flex items-center justify-center gap-3 w-full"
                      style={{ color: 'white' }}
                  >
                      <Download size={16} /> Prospects
                  </a>
              </div>
          </div>

        </div>
      </motion.div>

    </section>
  )
}

export default Placements
