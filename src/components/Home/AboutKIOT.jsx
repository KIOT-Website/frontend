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
    <section className="relative py-10 sm:py-14 bg-white overflow-hidden" id="about-kiot">
      <div className="mx-auto max-w-[1440px] px-4 sm:px-8 lg:px-12 xl:px-16">
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 xl:gap-16 items-center">
          
          {/* Left Side: Image Holder */}
          <motion.div 
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-5 relative h-full flex items-center"
          >
            <div className="relative w-full rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src={campusImage} 
                alt="KIOT Campus" 
                className="w-full h-[260px] sm:h-[360px] lg:h-[420px] object-cover"
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
            className="lg:col-span-7 space-y-5 sm:space-y-6"
          >
            <div className="text-left">
              <span className="inline-block px-4 py-1.5 rounded-full bg-[#224292]/5 text-[#224292] text-[10px] font-black uppercase tracking-widest mb-3">
                About the Institution
              </span>
              <h2 className="text-xl sm:text-2xl lg:text-[28px] xl:text-[32px] font-bold text-[#224292] font-graphik leading-tight mb-3">
                Knowledge Institute of Technology (KIOT)
              </h2>
            </div>

            <div className="text-[13.5px] sm:text-[14px] lg:text-[14.5px] text-slate-600 leading-relaxed font-graphik text-justify">
              <p>
                Knowledge Institute of Technology (KIOT) was established by Knowledge Institute of Technology Trust (KIOT Trust) in 2009. 
                <span className="font-bold text-[#224292]"> Dr. PSS. Srinivasan</span> is the Founder of the Trust. The KIOT Trust is a 41-member team: 
                20 of them are professors in engineering education and 21 of them are budding entrepreneurs.
                The Founder and President of the Trust, <span className="font-bold text-[#224292]">Dr. PSS. Srinivasan</span>, is an IITian with 30+ years of 
                rich academic, administrative and research experience and a recipient of Best Engineering College Principal Award from ISTE New Delhi and CSI Mumbai Chapter. 
                He has visited 30+ Foreign Universities and 100+ Indian Institutions and has Global Exposure in Higher Education.{' '}
                <motion.button
                  whileHover={{ x: 3 }}
                  onClick={() => navigate('/about/about-us')}
                  className="inline-flex items-center gap-1 text-[#224292] font-bold text-xs uppercase tracking-widest hover:text-[#ffc107] transition-colors ml-1 align-baseline"
                >
                  Read More <ArrowRight size={14} className="transition-transform" />
                </motion.button>
              </p>
            </div>

            <div className="pt-2">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 w-full">
                <a
                  href={brochurePdf}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-[#ffc107] text-[#224292] hover:bg-[#e5ad00] font-bold text-xs uppercase tracking-wider transition-all duration-200 shadow-sm hover:shadow-md border border-[#ffc107] w-full text-center"
                >
                  <Download size={15} className="text-[#224292]" />
                  <span>KIOT Brochure</span>
                </a>
                <a
                  href={prospectsPdf}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-[#ffc107] text-[#224292] hover:bg-[#e5ad00] font-bold text-xs uppercase tracking-wider transition-all duration-200 shadow-sm hover:shadow-md border border-[#ffc107] w-full text-center"
                >
                  <Download size={15} className="text-[#224292]" />
                  <span>KIOT Prospects</span>
                </a>
                <a
                  href={handbookPdf}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-[#ffc107] text-[#224292] hover:bg-[#e5ad00] font-bold text-xs uppercase tracking-wider transition-all duration-200 shadow-sm hover:shadow-md border border-[#ffc107] w-full text-center"
                >
                  <Download size={15} className="text-[#224292]" />
                  <span>KIOT Handbook</span>
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
