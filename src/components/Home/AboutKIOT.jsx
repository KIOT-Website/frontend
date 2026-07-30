import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'
import { ArrowRight, Download } from 'lucide-react'
import campusImage from '../../assets/main/home 1.webp'
import handbookPdf from '../../assets/HANDBOOK.pdf'
import brochurePdf from '../../assets/KIOT Brochure 2026 copy.pdf'
import prospectsPdf from '../../assets/KIOT Prospects MAY 2026 .pdf'

const AboutKIOT = () => {
  const navigate = useNavigate()
  return (
    <section className="relative py-12 bg-white overflow-hidden" id="about-kiot">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Left Side: Image Holder */}
          <motion.div 
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-5 relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src={campusImage} 
                alt="KIOT Campus" 
                className="w-full h-[260px] sm:h-[380px] lg:h-[400px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#224292]/30 to-transparent" />
            </div>
          </motion.div>

          {/* Right Side: Content */}
          <motion.div 
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-7 space-y-6"
          >
            <div>
              <span className="inline-block px-4 py-1.5 rounded-full bg-[#224292]/5 text-[#224292] text-[10px] font-black uppercase tracking-widest mb-3">
                About the Institution
              </span>
              <h2 className="text-xl sm:text-2xl lg:text-[27px] xl:text-3xl font-semibold text-[#224292] font-graphik leading-tight mb-4 whitespace-nowrap">
                Knowledge Institute of Technology (KIOT)
              </h2>
            </div>

            <div className="text-[13px] lg:text-[14px] text-slate-600 leading-relaxed font-graphik text-justify">
              <p>
                Knowledge Institute of Technology (KIOT) was established by Knowledge Institute of Technology Trust (KIOT Trust) in 2009. 
                <span className="font-bold text-[#224292]"> Dr. PSS. Srinivasan</span> is the Founder of the Trust. The KIOT Trust is a 41-member team: 
                20 of them are professors in engineering education and 21 of them are budding entrepreneurs.
                The Founder and President of the Trust, <span className="font-bold text-[#224292]">Dr. PSS. Srinivasan</span>, is an IITian with 30+ years of 
                rich academic, administrative and research experience and a recipient of Best Engineering College Principal Award from ISTE New Delhi and CSI Mumbai Chapter. 
                He has visited 30+ Foreign Universities and 100+ Indian Institutions and has Global Exposure in Higher Education.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-2 border-t border-slate-100">
              <motion.button
                whileHover={{ x: 5 }}
                onClick={() => navigate('/about/about-us')}
                className="group flex items-center gap-2 text-[#224292] font-bold text-xs uppercase tracking-widest shrink-0"
              >
                Read More <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </motion.button>

              <div className="flex flex-wrap items-center gap-3">
                <a
                  href={handbookPdf}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-[#224292] text-white hover:bg-[#ffc107] hover:text-[#07163c] font-bold text-[11px] sm:text-xs uppercase tracking-wider transition-all duration-300 shadow-sm hover:shadow-md border border-[#224292] group shrink-0"
                >
                  <Download size={14} className="text-[#ffc107] group-hover:text-[#07163c] transition-colors" />
                  <span>KIOT Handbook</span>
                </a>
                <a
                  href={brochurePdf}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-[#224292] text-white hover:bg-[#ffc107] hover:text-[#07163c] font-bold text-[11px] sm:text-xs uppercase tracking-wider transition-all duration-300 shadow-sm hover:shadow-md border border-[#224292] group shrink-0"
                >
                  <Download size={14} className="text-[#ffc107] group-hover:text-[#07163c] transition-colors" />
                  <span>KIOT Brochure</span>
                </a>
                <a
                  href={prospectsPdf}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-[#224292] text-white hover:bg-[#ffc107] hover:text-[#07163c] font-bold text-[11px] sm:text-xs uppercase tracking-wider transition-all duration-300 shadow-sm hover:shadow-md border border-[#224292] group shrink-0"
                >
                  <Download size={14} className="text-[#ffc107] group-hover:text-[#07163c] transition-colors" />
                  <span>KIOT Prospects</span>
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default AboutKIOT
