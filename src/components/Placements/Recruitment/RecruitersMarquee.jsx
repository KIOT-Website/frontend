import React from 'react'
import { Building2 } from 'lucide-react'

// Company Logos
import codingmartLogo from '../../../assets/main/codingmart.webp'
import ecpleoLogo from '../../../assets/main/ecpleo.webp'
import haritaLogo from '../../../assets/main/harita.webp'
import hexawareLogo from '../../../assets/main/hexaware.webp'
import raplLogo from '../../../assets/main/rapl.webp'
import techMahindraLogo from '../../../assets/main/tech mahendra.webp'
import tessolveLogo from '../../../assets/main/tessolve.webp'

// New Section Logos
import tcsLogo from '../../../assets/company logo/tcs.webp'
import zohoLogo from '../../../assets/company logo/zoho.webp'
import virtusaLogo from '../../../assets/company logo/virtusa.webp'
import cognizantLogo from '../../../assets/company logo/cognizant.webp'
import accentureLogo from '../../../assets/company logo/accenture.webp'
import ibmLogo from '../../../assets/company logo/ibm.webp'
import lumenLogo from '../../../assets/company logo/lumen.webp'
import amiLogo from '../../../assets/company logo/ami.webp'
import aspireLogo from '../../../assets/company logo/aspire.webp'
import softsquareLogo from '../../../assets/company logo/softsquare.webp'
import embedurLogo from '../../../assets/company logo/embedur.webp'
import brakesindiaLogo from '../../../assets/company logo/brakesindia.webp'
import fujitecLogo from '../../../assets/company logo/fujitec.webp'
import montbleuLogo from '../../../assets/company logo/montbleu.webp'
import edveonLogo from '../../../assets/company logo/edveon.webp'
import hirotecLogo from '../../../assets/company logo/hirotec.webp'
import spicLogo from '../../../assets/company logo/spic.webp'
import infoedgeLogo from '../../../assets/company logo/infoedge.webp'
import danaLogo from '../../../assets/company logo/dana.webp'
import arunexcelloLogo from '../../../assets/company logo/arunexcello.webp'
import ujjivanbankLogo from '../../../assets/company logo/ujjivanbank.webp'
import veritasfinanceLogo from '../../../assets/company logo/veritasfinance.webp'
import viLogo from '../../../assets/company logo/vi.webp'
import koneLogo from '../../../assets/company logo/kone.webp'
import aggregateintelLogo from '../../../assets/company logo/aggregateintel.webp'

const MarqueeItem = ({ item }) => (
    <div className="group bg-white h-24 w-44 rounded-2xl border border-[#D5E2F4]/60 hover:border-[#ffc107]/50 shadow-sm hover:shadow-xl transition-all duration-500 flex flex-col items-center justify-center p-6 shrink-0 transform hover:-translate-y-1">
       {item.logo ? (
          <img src={item.logo} alt={item.name} className="max-h-12 w-full object-contain transition-all duration-500 transform group-hover:scale-110" />
       ) : (
          <span className="text-[#18357a] font-black text-xs uppercase tracking-tighter text-center leading-tight">
             {item.name}
          </span>
       )}
    </div>
);

const RecruitersMarquee = () => {
  return (
    <div className="space-y-24 md:space-y-40 max-w-full overflow-hidden pt-10 md:pt-20 border-t border-[#D5E2F4]/40 pb-32 bg-white md:bg-[#f8fafc]/20 transition-colors">
      {/* IT Recruiters */}
      <div className="space-y-8">
        <div className="max-w-7xl mx-auto px-6 mb-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>
              <div className="flex items-center gap-3 text-[#18357a] font-black text-[10px] uppercase tracking-[0.3em] mb-3">
                <span className="w-10 h-[2px] bg-[#18357a]" /> Technology Sector
              </div>
              <h2 className="text-3xl md:text-4xl font-black text-[#18357a] tracking-tighter uppercase leading-none">Key Recruiters <br /><span className="px-5 py-1.5 bg-[#18357a] text-white rounded-xl inline-block mt-2">IT</span></h2>
            </div>
            <div className="px-6 py-4 bg-white rounded-2xl border border-[#D5E2F4]/50 shadow-sm backdrop-blur-md">
              <span className="text-[#64779F] text-[10px] uppercase font-black tracking-widest block mb-1">Salary Range</span>
              <span className="text-[#18357a] font-extrabold text-lg md:text-xl tracking-tight">₹3.75 to ₹12.75 <span className="text-xs uppercase font-bold text-[#64779F]">LPA</span></span>
            </div>
          </div>
        </div>
        <div className="relative group/marquee select-none space-y-4 md:space-y-6">
          <div className="flex overflow-hidden gap-6 mask-fade-edges">
            <div className="flex flex-nowrap gap-6 min-w-max px-3 animate-marquee-slower hover:pause">
              {[...Array(2)].map((_, idx) => (
                <div key={idx} className="flex gap-6">
                  {[
                    { name: "Zoho Corporation", logo: zohoLogo },
                    { name: "Virtusa Consulting", logo: virtusaLogo },
                    { name: "Tech Mahindra", logo: techMahindraLogo },
                    { name: "American Megatrends", logo: amiLogo },
                    { name: "Aspire Systems", logo: aspireLogo },
                    { name: "Cognizant", logo: cognizantLogo },
                    { name: "IBM", logo: ibmLogo },
                    { name: "iNeuron" },
                    { name: "Codingmart Technologies", logo: codingmartLogo },
                  ].map((c, i) => <MarqueeItem key={i} item={c} />)}
                </div>
              ))}
            </div>
          </div>
          <div className="flex overflow-hidden gap-6 mask-fade-edges">
            <div className="flex flex-nowrap gap-6 min-w-max px-3 animate-marquee-reverse-slower hover:pause">
              {[...Array(2)].map((_, idx) => (
                <div key={idx} className="flex gap-6">
                  {[
                    { name: "Lumen Technologies", logo: lumenLogo },
                    { name: "RapL Technologies", logo: raplLogo },
                    { name: "Hexaware Technologies", logo: hexawareLogo },
                    { name: "TCS", logo: tcsLogo },
                    { name: "Softsquare", logo: softsquareLogo },
                    { name: "Flowserv" },
                    { name: "Expleo Solutions", logo: ecpleoLogo },
                    { name: "Think Innov Solutions" },
                    { name: "Jasmin Infotech" },
                    { name: "Accenture", logo: accentureLogo },
                  ].map((c, i) => <MarqueeItem key={i} item={c} />)}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Core Recruiters */}
      <div className="space-y-8">
        <div className="max-w-7xl mx-auto px-6 mb-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>
              <div className="flex items-center gap-3 text-[#4666B4] font-black text-[10px] uppercase tracking-[0.3em] mb-3">
                <span className="w-10 h-[2px] bg-[#4666B4]" /> Engineering Services
              </div>
              <h2 className="text-3xl md:text-4xl font-black text-[#18357a] tracking-tighter uppercase leading-none">Key Recruiters <br /><span className="px-5 py-1.5 bg-[#4666B4] text-white rounded-xl inline-block mt-2">Core</span></h2>
            </div>
            <div className="px-6 py-4 bg-white rounded-2xl border border-[#D5E2F4]/50 shadow-sm backdrop-blur-md">
              <span className="text-[#64779F] text-[10px] uppercase font-black tracking-widest block mb-1">Salary Range</span>
              <span className="text-[#18357a] font-extrabold text-lg md:text-xl tracking-tight">₹3.00 to ₹8.50 <span className="text-xs uppercase font-bold text-[#64779F]">LPA</span></span>
            </div>
          </div>
        </div>
        <div className="relative group/marquee select-none space-y-4 md:space-y-6">
          <div className="flex overflow-hidden gap-6 mask-fade-edges">
            <div className="flex flex-nowrap gap-6 min-w-max px-3 animate-marquee-reverse-slower hover:pause">
              {[...Array(2)].map((_, idx) => (
                <div key={idx} className="flex gap-6">
                  {[
                    { name: "EmbedUR", logo: embedurLogo },
                    { name: "Harita Techserv", logo: haritaLogo },
                    { name: "Renault Nissan" },
                    { name: "Tessolve Semiconductor", logo: tessolveLogo },
                    { name: "Brakes India Pvt. Ltd.", logo: brakesindiaLogo },
                    { name: "VVDN Technologies" },
                    { name: "Montbleu", logo: montbleuLogo },
                  ].map((c, i) => <MarqueeItem key={i} item={c} />)}
                </div>
              ))}
            </div>
          </div>
          <div className="flex overflow-hidden gap-6 mask-fade-edges">
            <div className="flex flex-nowrap gap-6 min-w-max px-3 animate-marquee-slower hover:pause">
              {[...Array(2)].map((_, idx) => (
                <div key={idx} className="flex gap-6">
                  {[
                    { name: "Fujitec", logo: fujitecLogo },
                    { name: "Bonfiglioli" },
                    { name: "Edveon Technologies", logo: edveonLogo },
                    { name: "Hirotec", logo: hirotecLogo },
                    { name: "Southern Petrochemical", logo: spicLogo },
                    { name: "BMS Engineering Pvt. Ltd." },
                    { name: "Expleo Solutions", logo: ecpleoLogo },
                  ].map((c, i) => <MarqueeItem key={i} item={c} />)}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* MBA Recruiters */}
      <div className="space-y-8">
        <div className="max-w-7xl mx-auto px-6 mb-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>
              <div className="flex items-center gap-3 text-emerald-600 font-black text-[10px] uppercase tracking-[0.3em] mb-3">
                <span className="w-10 h-[2px] bg-emerald-600" /> Management Sector
              </div>
              <h2 className="text-3xl md:text-4xl font-black text-[#18357a] tracking-tighter uppercase leading-none">Key Recruiters <br /><span className="px-5 py-1.5 bg-emerald-600 text-white rounded-xl inline-block mt-2">MBA</span></h2>
            </div>
            <div className="px-6 py-4 bg-white rounded-2xl border border-[#D5E2F4]/50 shadow-sm backdrop-blur-md">
              <span className="text-[#64779F] text-[10px] uppercase font-black tracking-widest block mb-1">Salary Range</span>
              <span className="text-[#18357a] font-extrabold text-lg md:text-xl tracking-tight">₹3.00 to ₹10.00 <span className="text-xs uppercase font-bold text-[#64779F]">LPA</span></span>
            </div>
          </div>
        </div>
        <div className="relative group/marquee select-none space-y-4 md:space-y-6">
          <div className="flex overflow-hidden gap-6 mask-fade-edges">
            <div className="flex flex-nowrap gap-6 min-w-max px-3 animate-marquee-slower hover:pause">
              {[...Array(2)].map((_, idx) => (
                <div key={idx} className="flex gap-6">
                  {[
                    { name: "City Union Bank" },
                    { name: "Ramco Cements" },
                    { name: "Info Edge", logo: infoedgeLogo },
                    { name: "Dana Corporations", logo: danaLogo },
                    { name: "Arun Excello", logo: arunexcelloLogo },
                    { name: "Flipkart" },
                    { name: "Mahindra Rural Home Finance" },
                  ].map((c, i) => <MarqueeItem key={i} item={c} />)}
                </div>
              ))}
            </div>
          </div>
          <div className="flex overflow-hidden gap-6 mask-fade-edges">
            <div className="flex flex-nowrap gap-6 min-w-max px-3 animate-marquee-reverse-slower hover:pause">
              {[...Array(2)].map((_, idx) => (
                <div key={idx} className="flex gap-6">
                  {[
                    { name: "Ujjivan Small Finance Bank", logo: ujjivanbankLogo },
                    { name: "Veritas Finance", logo: veritasfinanceLogo },
                    { name: "Dialogy Solutions" },
                    { name: "Nebula Cloud Technologies" },
                    { name: "Rinex Technologies" },
                    { name: "Vodafone Idea", logo: viLogo },
                    { name: "PENTOZ Technology" },
                  ].map((c, i) => <MarqueeItem key={i} item={c} />)}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Internships */}
      <div className="space-y-8">
        <div className="max-w-7xl mx-auto px-6 mb-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>
              <div className="flex items-center gap-3 text-indigo-600 font-black text-[10px] uppercase tracking-[0.3em] mb-3">
                <span className="w-10 h-[2px] bg-indigo-600" /> Industry Training
              </div>
              <h2 className="text-3xl md:text-4xl font-black text-[#18357a] tracking-tighter uppercase leading-none">Companies Offered <br /><span className="px-5 py-1.5 bg-indigo-600 text-white rounded-xl inline-block mt-2">Internships</span></h2>
            </div>
            <div className="px-6 py-4 bg-white rounded-2xl border border-[#D5E2F4]/50 shadow-sm backdrop-blur-md">
              <span className="text-[#64779F] text-[10px] uppercase font-black tracking-widest block mb-1">Impact Record</span>
              <span className="text-[#18357a] font-extrabold text-lg md:text-xl tracking-tight">50+ Global <span className="text-xs uppercase font-bold text-[#64779F]">Partners</span></span>
            </div>
          </div>
        </div>
        <div className="relative group/marquee select-none space-y-4 md:space-y-6">
          <div className="flex overflow-hidden gap-6 mask-fade-edges">
            <div className="flex flex-nowrap gap-6 min-w-max px-3 animate-marquee-reverse-slower hover:pause">
              {[...Array(2)].map((_, idx) => (
                <div key={idx} className="flex gap-6">
                  {[
                    { name: "CISCO" },
                    { name: "Hyundai" },
                    { name: "Simpson" },
                    { name: "Aggregate Intelligence", logo: aggregateintelLogo },
                    { name: "Kone Elevators", logo: koneLogo },
                    { name: "Celebrare" },
                    { name: "Ashok Leyland" },
                    { name: "Robert Bosch" },
                    { name: "R R Electronics" },
                  ].map((c, i) => <MarqueeItem key={i} item={c} />)}
                </div>
              ))}
            </div>
          </div>
          <div className="flex overflow-hidden gap-6 mask-fade-edges">
            <div className="flex flex-nowrap gap-6 min-w-max px-3 animate-marquee-slower hover:pause">
              {[...Array(2)].map((_, idx) => (
                <div key={idx} className="flex gap-6">
                  {[
                    { name: "Zoho Corporation", logo: zohoLogo },
                    { name: "VVDN Technologies" },
                    { name: "American Megatrends", logo: amiLogo },
                    { name: "Virtusa Corporation", logo: virtusaLogo },
                    { name: "Aspire Systems", logo: aspireLogo },
                    { name: "Concert IDC" },
                    { name: "Skysolar" },
                    { name: "Cygnus Marketing" },
                  ].map((c, i) => <MarqueeItem key={i} item={c} />)}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        .mask-fade-edges {
           mask-image: linear-gradient(to right, transparent, black 15%, black 85%, transparent);
           -webkit-mask-image: linear-gradient(to right, transparent, black 15%, black 85%, transparent);
        }
        @keyframes marquee { 0% { transform: translateX(0); } 100% { transform: translateX(-50%); } }
        @keyframes marquee-reverse { 0% { transform: translateX(-50%); } 100% { transform: translateX(0); } }
        .animate-marquee-slower { animation: marquee 35s linear infinite; }
        .animate-marquee-reverse-slower { animation: marquee-reverse 40s linear infinite; }
        .pause:hover { animation-play-state: paused; }
      `}} />
    </div>
  )
}

export default RecruitersMarquee
