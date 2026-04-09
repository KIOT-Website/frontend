import React, { useState, useEffect } from 'react'
import { Link, useNavigate, useSearchParams } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  Bus, 
  Home, 
  Utensils, 
  Library, 
  ShieldCheck, 
  Activity,
  UserCheck,
  Briefcase,
  Phone,
  Monitor,
  Trophy,
  Compass,
  Clock,
  Users,
  CheckCircle,
  ExternalLink,
  Eye,
  Target,
  BookOpen,
  Search,
  VolumeX,
  Smartphone,
  IdCard,
  Fingerprint,
  PenTool,
  Sofa,
  Handshake,
  Backpack,
  ArrowUpRight
} from 'lucide-react'

const LibrarySectionContent = () => {
    const [activeSubTab, setActiveSubTab] = useState(null)
    const navigate = useNavigate();

    return (
      <div className="space-y-8 pb-12">
        {/* Header Introduction Card */}
        <div className="relative p-10 bg-white rounded-[2.5rem] border border-slate-100 shadow-2xl shadow-[#18357a]/5 overflow-hidden">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-3 px-4 py-2 bg-[#18357a]/5 rounded-full">
                <Library size={14} className="text-[#18357a]" />
                <span className="text-[10px] font-black text-[#18357a] uppercase tracking-widest leading-none">Gateway to Knowledge</span>
              </div>
              <h2 className="text-4xl font-black text-[#18357a] uppercase tracking-tight leading-none font-display">
                KIOT <span className="text-[#ffc107]">Central Library</span>
              </h2>
              <p className="text-[#64779F] text-lg leading-relaxed">
                The Library plays a vital role in enhancing subject knowledge, research orientation, life skills, and awareness of social and political developments.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="p-6 bg-white rounded-[1.5rem] border border-slate-100 shadow-xl shadow-[#18357a]/5 hover:shadow-[#18357a]/10 transition-all duration-500 group/v">
                    <div className="flex items-center gap-3 mb-3 text-[#18357a]">
                        <div className="w-8 h-8 rounded-lg bg-[#18357a]/5 flex items-center justify-center group-hover/v:bg-[#18357a] group-hover/v:text-white transition-all">
                            <Eye size={18} />
                        </div>
                        <span className="text-[11px] font-black uppercase tracking-[2px]">Vision</span>
                    </div>
                    <p className="text-[13px] text-slate-500 leading-relaxed">To nurture research scholars and promote continuous knowledge enrichment aligned with international standards.</p>
                </div>
                <div className="p-6 bg-white rounded-[1.5rem] border border-slate-100 shadow-xl shadow-[#18357a]/5 hover:shadow-[#18357a]/10 transition-all duration-500 group/m">
                    <div className="flex items-center gap-3 mb-3 text-[#18357a]">
                        <div className="w-8 h-8 rounded-lg bg-[#18357a]/5 flex items-center justify-center group-hover/m:bg-[#18357a] group-hover/m:text-white transition-all">
                            <Target size={18} />
                        </div>
                        <span className="text-[11px] font-black uppercase tracking-[2px]">Mission</span>
                    </div>
                    <p className="text-[13px] text-slate-500 leading-relaxed">To provide world-class knowledge across academic and non-academic domains for holistic excellence.</p>
                </div>
              </div>
            </div>
            <div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl group/img border-4 border-white">
               <div className="aspect-video relative overflow-hidden">
                  <img src="https://images.unsplash.com/photo-1521587760476-6c12a4b040da?q=80&w=1200&auto=format&fit=crop" className="w-full h-full object-cover transition-transform duration-1000 group-hover/img:scale-110" alt="Library Infrastructure" />
                  <div className="absolute inset-0 bg-[#18357a]/40 group-hover/img:bg-[#18357a]/20 transition-all duration-500" />
               </div>
               
               <div className="relative p-10 bg-white/95 backdrop-blur-xl rounded-b-[2rem] border-t border-slate-100 shadow-2xl transition-all duration-500">
                  <div className="flex items-center justify-between">
                     <div className="space-y-1">
                        <div className="flex items-center gap-2">
                             <div className="w-1.5 h-1.5 rounded-full bg-[#ffc107] animate-pulse" />
                             <p className="text-[10px] font-black text-[#18357a] uppercase tracking-[3px]">Web OPAC Access</p>
                        </div>
                        <p className="text-[11px] text-slate-400 uppercase tracking-widest leading-none">Search resources online</p>
                     </div>
                      <a 
                         href="http://115.244.103.83/webopac" 
                         target="_blank" 
                         rel="noreferrer" 
                         className="w-12 h-12 bg-[#ffc107] hover:bg-[#18357a] flex items-center justify-center rounded-2xl shadow-lg transition-all duration-300 hover:scale-110 active:scale-95 group/btn"
                       >
                         <ExternalLink size={20} className="text-[#18357a] group-hover/btn:text-white transition-colors duration-300" strokeWidth={2.5} />
                      </a>
                  </div>
               </div>
            </div>
          </div>
        </div>

        {/* Core Collections Consolidated Portal - Clean Flat Design */}
        <div className="relative py-20 px-6 bg-white overflow-hidden">
            <div className="relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {[
                    { id: 'access', title: 'Library Access', sub: 'ILMS & Open Access Systems', icon: ShieldCheck },
                    { id: 'books', title: 'Books & Collections', sub: 'Physical Library & Rare Reports', icon: BookOpen },
                    { id: 'journals', title: 'Journals & Digital Resources', sub: 'Research & E-Resource Assets', icon: Monitor },
                    { id: 'magazines', title: 'Magazines & Achievements', sub: 'Periodicals & Student Honors', icon: Trophy }
                ].map((cat, i) => (
                    <div 
                        key={i} 
                        onClick={() => {
                            if (cat.id === 'access') {
                                navigate('/campus-life/library/access');
                            } else if (cat.id === 'books') {
                                navigate('/campus-life/library/collections');
                            } else if (cat.id === 'journals') {
                                navigate('/campus-life/library/journals');
                            } else if (cat.id === 'magazines') {
                                navigate('/campus-life/library/achievements');
                            }
                        }}
                        className="p-10 rounded-3xl bg-white border-2 border-white/20 flex flex-col items-center justify-center text-center group transition-all duration-700 cursor-pointer overflow-hidden relative translate-y-0 hover:-translate-y-2 shadow-[0_15px_50px_rgba(24,53,122,0.12)] hover:shadow-2xl hover:shadow-[#18357a]/20 w-full max-w-xs mx-auto lg:max-w-none"
                    >
                        {/* Status / Indicator Arrow */}
                        <div className="absolute top-8 right-8 w-10 h-10 rounded-xl bg-white/50 flex items-center justify-center text-[#18357a] group-hover:bg-[#ffc107] group-hover:text-[#18357a] group-hover:rotate-45 transition-all duration-500 shadow-sm border border-white">
                            <ArrowUpRight size={18} strokeWidth={3} />
                        </div>
                        
                        <div className="w-20 h-20 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-all duration-500 bg-white shadow-inner group-hover:bg-[#18357a] text-[#18357a] group-hover:text-white border border-slate-50">
                            <cat.icon size={32} strokeWidth={2.5} />
                        </div>
                        
                        <h3 className="text-[15px] font-black uppercase tracking-tight leading-none mb-3 duration-500 text-[#18357a]">{cat.title}</h3>
                        
                        <p className="text-[10px] font-bold uppercase tracking-[3px] leading-tight duration-500 text-slate-400 group-hover:text-[#18357a]/60">{cat.sub}</p>
                    </div>
                ))}
            </div>
        </div>

        {/* Dynamic Dual Context: Team & Eligibility */}
        <div className="grid lg:grid-cols-2 gap-8">
            {/* Library Team */}
            <div className="bg-white p-8 md:p-10 rounded-[2.5rem] border border-slate-100 shadow-xl shadow-slate-200/20">
                <div className="flex items-center gap-4 mb-8">
                    <div className="w-12 h-12 bg-slate-50 text-[#18357a] rounded-2xl flex items-center justify-center">
                        <Users size={24} />
                    </div>
                    <div>
                        <h3 className="text-xl font-black text-[#18357a] uppercase tracking-tight">Library Team</h3>
                        <p className="text-[10px] font-black text-[#ffc107] uppercase tracking-[3px]">Expert Management</p>
                    </div>
                </div>
                <div className="overflow-hidden rounded-2xl border border-slate-100">
                        <table className="w-full text-left">
                            <thead>
                                <tr className="bg-[#18357a] border-b border-[#18357a]/10 shadow-md">
                                    <th className="px-6 py-4 text-[11px] font-black text-white uppercase tracking-[2px]">S.No</th>
                                    <th className="px-6 py-4 text-[11px] font-black text-white uppercase tracking-[2px]">Name</th>
                                    <th className="px-6 py-4 text-[11px] font-black text-white uppercase tracking-[2px]">Designation</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-slate-50">
                                {[
                                    { s: '1', n: 'MR. M. GUNASEKARAN', d: 'Librarian' },
                                    { s: '2', n: 'MR. C. RAMESH', d: 'Assistant Librarian' },
                                    { s: '3', n: 'MRS. N. INDUMATHI', d: 'Library Assistant' },
                                    { s: '4', n: 'MRS. T. BANUMATHI', d: 'Library Assistant' },
                                    { s: '5', n: 'MR. P. SAKTHIVEL', d: 'Library Assistant' }
                                ].map((row, i) => (
                                    <tr key={i} className="hover:bg-[#18357a]/5 transition-colors group even:bg-slate-50/50">
                                        <td className="px-6 py-4 text-[11px] font-black text-slate-300 group-hover:text-[#ffc107] transition-colors">{row.s}</td>
                                        <td className="px-6 py-4 text-[12px] font-black text-[#18357a] uppercase tracking-tight">{row.n}</td>
                                        <td className="px-6 py-4 text-[11px] font-bold text-slate-400 uppercase tracking-widest leading-none">{row.d}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                </div>
            </div>

            {/* Borrowing Eligibility */}
            <div className="bg-white p-8 md:p-10 rounded-[2.5rem] border border-slate-100 shadow-xl shadow-slate-200/20">
                <div className="flex items-center gap-4 mb-8">
                    <div className="w-12 h-12 bg-slate-50 text-[#18357a] rounded-2xl flex items-center justify-center">
                        <BookOpen size={24} />
                    </div>
                    <div>
                        <h3 className="text-xl font-black text-[#18357a] uppercase tracking-tight">Borrowing Logic</h3>
                        <p className="text-[10px] font-black text-[#ffc107] uppercase tracking-[3px]">Eligibility Guide</p>
                    </div>
                </div>
                <div className="overflow-hidden rounded-2xl border border-slate-100">
                        <table className="w-full text-left">
                            <thead>
                                <tr className="bg-[#18357a] border-b border-[#18357a]/10 shadow-md">
                                    <th className="px-6 py-4 text-[11px] font-black text-white uppercase tracking-[2px]">Category</th>
                                    <th className="px-6 py-4 text-[11px] font-black text-white uppercase tracking-[2px] text-center">Books</th>
                                    <th className="px-6 py-4 text-[11px] font-black text-white uppercase tracking-[2px] text-right">Duration</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-slate-50">
                                {[
                                    { c: 'UG STUDENTS', b: '3', d: '15 Days' },
                                    { c: 'PG STUDENTS', b: '5', d: '15 Days' },
                                    { c: 'FACULTY', b: '5', d: '6 Months' },
                                    { c: 'STAFF', b: '1', d: '15 Days' },
                                    { c: 'MAGAZINES', b: '2', d: '7 Days' }
                                ].map((row, i) => (
                                    <tr key={i} className="hover:bg-[#18357a]/5 transition-colors group even:bg-slate-50/50">
                                        <td className="px-6 py-4 text-[12px] font-black text-[#18357a] uppercase tracking-tight">{row.c}</td>
                                        <td className="px-6 py-4 text-center text-lg font-black text-[#18357a] group-hover:text-[#ffc107] transition-all">{row.b}</td>
                                        <td className="px-6 py-4 text-right text-[11px] font-bold text-slate-400 uppercase tracking-[2px]">{row.d}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                </div>
            </div>
        </div>

        {/* Detailed Library Rules & Code of Conduct */}
        <div className="bg-white p-10 rounded-[2.5rem] border border-slate-100 shadow-xl shadow-slate-200/20">
            <div className="flex items-center gap-4 mb-10">
                <div className="w-12 h-12 bg-slate-50 text-[#18357a] rounded-2xl flex items-center justify-center">
                    <ShieldCheck size={24} />
                </div>
                <div>
                    <h3 className="text-2xl font-black text-[#18357a] uppercase tracking-tight">Code <span className="text-[#ffc107]">of Conduct</span></h3>
                    <p className="text-[10px] font-black text-[#ffc107] uppercase tracking-[4px]">Mandatory Library Regulations</p>
                </div>
            </div>
            <div className="grid md:grid-cols-2 gap-x-12 gap-y-8">
                {[
                    { i: VolumeX, t: 'Users should maintain absolute silence inside premises.' },
                    { i: Smartphone, t: 'Mobile Phones are strictly not permitted in the library.' },
                    { i: IdCard, t: 'Identity Card is mandatory for library access and usage.' },
                    { i: Fingerprint, t: 'Users must sign the Electronic Gate Entry Register upon entry.' },
                    { i: PenTool, t: 'Resources must be returned in time without disfiguring or ink marks.' },
                    { i: Sofa, t: 'Furniture should not be disturbed from its original position.' },
                    { i: Monitor, t: 'Digital Library is strictly for academic research & resource browsing.' },
                    { i: Library, t: 'Reference Books are not allowed to be taken out of the library.' },
                    { i: Handshake, t: 'Users must follow all rules and co-operate with library staff.' },
                    { i: Backpack, t: 'Non-library materials are not allowed; utilize the Property Counter.' }
                ].map((rule, idx) => (
                    <div key={idx} className="flex gap-5 text-sm font-bold text-[#18357a] items-start group">
                        <div className="p-3 bg-slate-50 rounded-xl text-[#ffc107] border border-slate-100 shadow-sm group-hover:bg-[#18357a] group-hover:text-white transition-all duration-300">
                            <rule.i size={18} strokeWidth={2.5} />
                        </div>
                        <p className="leading-relaxed pt-1">{rule.t}</p>
                    </div>
                ))}
            </div>
        </div>

        {/* Global Resource Inventory & Features */}
        <div className="bg-white p-10 rounded-[2.5rem] border border-slate-100 shadow-xl">
             <div className="grid lg:grid-cols-3 gap-12 text-sm">
                <div className="lg:col-span-1 space-y-8">
                    <div>
                        <h3 className="text-2xl font-black text-[#18357a] uppercase tracking-tight">Institutional <span className="text-[#ffc107]">Wealth</span></h3>
                        <p className="text-[10px] font-black text-slate-400 uppercase tracking-[3px] mt-1">Resource Highlights</p>
                    </div>
                    <div className="grid grid-cols-1 gap-2">
                        {[
                            { l: 'Project Reports Archive', v: '4,118+' },
                            { l: 'Printed Research Journals', v: '114' },
                            { l: 'Subject Magazines', v: '42+' },
                            { l: 'Newspapers (Eng & Tam)', v: '9' }
                        ].map((row, i) => (
                            <div key={i} className="flex items-center justify-between py-2 border-b border-slate-50">
                                <span className="text-xs font-bold text-slate-500 uppercase tracking-tight">{row.l}</span>
                                <span className="text-[13px] font-black text-[#18357a]">{row.v}</span>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="lg:col-span-2">
                    <div className="grid md:grid-cols-2 gap-10">
                        <div className="space-y-6 text-sm">
                            <h4 className="text-[10px] font-black text-[#ffc107] uppercase tracking-[4px]">Advanced Facilities</h4>
                            <ul className="space-y-3">
                                {[
                                    'AC Reference Section (Dedicated)',
                                    'AC Digital Library + 30 Headsets',
                                    '30 High-Performance Workstations',
                                    'Electronic Gate Entry System',
                                    'DDC 21st Edition Classification',
                                    'Library Mgmt Soft-Application',
                                    'Plagiarism Checking Tool (DrillBit)'
                                ].map((item, idx) => (
                                    <li key={idx} className="font-bold text-[#18357a] flex items-center gap-3">
                                        <div className="w-1.5 h-1.5 rounded-full bg-[#ffc107]" />
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="space-y-6 text-sm">
                            <h4 className="text-[10px] font-black text-[#ffc107] uppercase tracking-[4px]">Access Points</h4>
                            <ul className="space-y-3">
                                {[
                                    'Back Volumes Backup (Since 2009)',
                                    'University Question Papers (Since 2009)',
                                    'OPAC (Online Access Catalogue)',
                                    'Reprography & High-Speed Scanning',
                                    'Exhaustive Stack Room Archive',
                                    'Periodical Circulation Desk'
                                ].map((item, idx) => (
                                    <li key={idx} className="font-bold text-slate-500 flex items-center gap-3">
                                        <CheckCircle size={14} className="text-slate-300" />
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
             </div>
        </div>
      </div>
    )
}

const CAMPUS_SECTIONS = [
  {
    id: 'library',
    title: 'Library',
    icon: Library,
    subtitle: 'Gateway to Knowledge',
    image: 'https://images.unsplash.com/photo-1521587760476-6c12a4b040da?q=80&w=1920&auto=format&fit=crop',
    content: <LibrarySectionContent />
  },
  {
    id: 'classroom',
    title: 'Smart Classroom',
    icon: Monitor,
    subtitle: 'Future Ready Learning',
    image: 'https://images.unsplash.com/photo-1577891729319-3359938c8230?q=80&w=1920&auto=format&fit=crop',
    content: (
        <div className="space-y-8 pb-12">
            <div className="p-12 bg-white rounded-[2.5rem] border border-slate-100 shadow-2xl shadow-[#18357a]/5">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    <div className="space-y-8">
                        <div className="inline-flex items-center gap-3 px-4 py-2 bg-[#ffc107]/10 rounded-full">
                            <Monitor size={14} className="text-[#18357a]" />
                            <span className="text-[10px] font-black text-[#18357a] uppercase tracking-widest leading-none">Smart Learning Ecosystem</span>
                        </div>
                        <h2 className="text-4xl font-black text-[#18357a] uppercase tracking-tight leading-none font-display">
                            Smart <span className="text-[#ffc107]">Classrooms</span>
                        </h2>
                        <p className="text-[#64779F] font-bold text-lg leading-relaxed">
                            We are integrating state-of-the-art interactive displays and lecture capture systems to create a truly future-ready academic environment.
                        </p>
                        <div className="grid grid-cols-2 gap-6">
                            {[
                                { t: 'Projection', d: 'Ultra Short Throw UHD' },
                                { t: 'Audio', d: 'Surround Sound Grid' },
                                { t: 'Capture', d: 'Auto-tracking Cameras' },
                                { t: 'Connect', d: 'Gigabit Fiber Uplink' }
                            ].map((feat, i) => (
                                <div key={i} className="space-y-1">
                                    <p className="text-[11px] font-black uppercase text-[#ffc107] tracking-widest">{feat.t}</p>
                                    <p className="text-sm font-bold text-[#18357a]">{feat.d}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="bg-[#18357a]/5 rounded-[2.5rem] p-12 text-center space-y-4 border-2 border-dashed border-[#18357a]/10">
                        <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mx-auto shadow-xl">
                            <Monitor size={40} className="text-[#18357a]/20" />
                        </div>
                        <div>
                            <h3 className="text-[#18357a] font-black uppercase tracking-tight">System Update</h3>
                            <p className="text-slate-400 font-bold text-[11px] max-w-xs mx-auto italic uppercase tracking-[2px] mt-2">Digital classroom features are being synchronized...</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
  },
  {
    id: 'sports',
    title: 'Sports & Games',
    icon: Trophy,
    subtitle: 'Excellence in Action',
    image: 'https://images.unsplash.com/photo-1517649763962-0c623066013b?q=80&w=1920&auto=format&fit=crop',
    content: (
        <div className="space-y-8 pb-12">
            <div className="p-12 bg-white rounded-[2.5rem] border border-slate-100 shadow-2xl shadow-[#18357a]/5">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    <div className="space-y-8">
                        <div className="inline-flex items-center gap-3 px-4 py-2 bg-[#ffc107]/10 rounded-full">
                            <Trophy size={14} className="text-[#18357a]" />
                            <span className="text-[10px] font-black text-[#18357a] uppercase tracking-widest leading-none">Athletic Excellence</span>
                        </div>
                        <h2 className="text-4xl font-black text-[#18357a] uppercase tracking-tight leading-none font-display">
                            Sports <span className="text-[#ffc107]">Arena</span>
                        </h2>
                        <p className="text-[#64779F] font-bold text-lg leading-relaxed">
                            From international-standard basketball courts to dedicated indoor complexes, our arena promotes physical wellness and competitive spirit.
                        </p>
                        <div className="flex flex-wrap gap-3">
                            {['Basketball', 'Volleyball', 'Badminton', 'Gymnasium', 'Athletics'].map((sport, i) => (
                                <span key={i} className="px-5 py-2 bg-slate-50 border border-slate-100 rounded-xl text-sm font-black text-[#18357a] uppercase tracking-wider">{sport}</span>
                            ))}
                        </div>
                    </div>
                    <div className="bg-[#18357a] p-12 rounded-[2.5rem] text-white space-y-6 relative overflow-hidden shadow-2xl">
                        <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-bl-[100%] translate-x-10 -translate-y-10" />
                        <div className="relative z-10 space-y-4">
                            <h3 className="text-2xl font-black uppercase tracking-tighter">Achievement Portal</h3>
                            <p className="text-white/70 font-bold text-sm leading-relaxed">We are migrating our sports archives and trophy records to the new portal.</p>
                            <div className="pt-4">
                                <button className="px-8 py-3 bg-[#ffc107] text-[#18357a] rounded-xl text-sm font-black uppercase tracking-widest shadow-lg">Archive In Progress</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
  },
  {
    id: 'tour',
    title: 'Campus Tour',
    icon: Compass,
    subtitle: 'Explore our legacy',
    image: 'https://images.unsplash.com/photo-1541339907198-e08756eaa539?q=80&w=1920&auto=format&fit=crop',
    content: (
        <div className="space-y-8 pb-12">
            <div className="p-12 bg-white rounded-[2.5rem] border border-slate-100 shadow-2xl shadow-[#18357a]/5 text-center">
                <div className="inline-flex items-center gap-3 px-4 py-2 bg-[#18357a]/5 rounded-full mb-8">
                    <Compass size={14} className="text-[#18357a]" />
                    <span className="text-[10px] font-black text-[#18357a] uppercase tracking-widest leading-none">Virtual Experience</span>
                </div>
                <h2 className="text-4xl font-black text-[#18357a] uppercase tracking-tight leading-none font-display mb-6">
                    360° Campus <span className="text-[#ffc107]">Navigation</span>
                </h2>
                <div className="max-w-2xl mx-auto space-y-8">
                    <p className="text-[#64779F] font-bold text-lg leading-relaxed">
                        Prepare for a fully immersive virtual tour. Our team is capturing 4K panoramic views of every department, hub, and facility within the KIOT campus.
                    </p>
                    <div className="grid md:grid-cols-3 gap-6">
                        <div className="p-6 bg-slate-50 rounded-2xl border border-slate-100 flex flex-col items-center gap-2">
                            <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-[#18357a] shadow-md"><Monitor size={20} /></div>
                            <span className="text-[11px] font-black text-[#18357a] uppercase tracking-widest">VR Ready</span>
                        </div>
                        <div className="p-6 bg-slate-50 rounded-2xl border border-slate-100 flex flex-col items-center gap-2">
                            <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-[#18357a] shadow-md"><ShieldCheck size={20} /></div>
                            <span className="text-[11px] font-black text-[#18357a] uppercase tracking-widest">Guided Info</span>
                        </div>
                        <div className="p-6 bg-slate-50 rounded-2xl border border-slate-100 flex flex-col items-center gap-2">
                            <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-[#18357a] shadow-md"><Compass size={20} /></div>
                            <span className="text-[11px] font-black text-[#18357a] uppercase tracking-widest">Multi-View</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
  },
  {
    id: 'transport',
    title: 'Transport',
    icon: Bus,
    subtitle: 'Safe & Reliable Commute',
    image: 'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?q=80&w=1920&auto=format&fit=crop',
    content: (
      <div className="space-y-8">
        <div className="relative p-10 bg-white rounded-[2.5rem] border border-slate-100 shadow-2xl shadow-[#18357a]/5 overflow-hidden">
          <div className="relative z-10 grid lg:grid-cols-2 gap-12 items-start">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-3 px-4 py-2 bg-[#ffc107]/10 rounded-full">
                <div className="w-2 h-2 rounded-full bg-[#ffc107] animate-pulse" />
                <span className="text-[10px] font-black text-[#18357a] uppercase tracking-widest leading-none">Official KIOT Transport</span>
              </div>
              
              <h2 className="text-4xl font-black text-[#18357a] uppercase tracking-tight leading-none font-display">
                KIOT <span className="text-[#ffc107]">Transport</span>
              </h2>
              
              <div className="space-y-4">
                  <p className="text-[#64779F] font-bold text-lg leading-relaxed">
                    KIOT operates extensive bus services for students and faculty, covering an 80 km radius across Salem, Namakkal, Dharmapuri, and Erode districts.
                  </p>
              </div>

                <div className="pt-6">
                  <Link to="/bus-routes" className="inline-flex items-center gap-4 px-8 py-5 bg-[#18357a] rounded-2xl group hover:bg-[#ffc107] transition-all shadow-xl shadow-[#18357a]/20">
                      <Bus size={20} className="text-[#ffc107] group-hover:text-[#18357a] transition-colors" />
                      <span className="text-sm font-black uppercase tracking-[2px] text-white group-hover:text-[#18357a] transition-colors">
                        View Bus Routes
                      </span>
                      <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-[#18357a]/10">
                          <motion.div
                              animate={{ rotate: 360 }}
                              transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                          >
                              <Compass size={14} className="text-white group-hover:text-[#18357a] transition-colors" />
                          </motion.div>
                      </div>
                  </Link>
                </div>
            </div>

            <div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl group border-4 border-white">
               <div className="aspect-video relative overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?q=80&w=1200&auto=format&fit=crop" 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                    alt="KIOT Transport Fleet" 
                  />
                  <div className="absolute inset-0 bg-[#18357a]/20 group-hover:bg-transparent transition-colors" />
               </div>
               
               <div className="relative p-10 bg-white/90 backdrop-blur-md rounded-b-[2rem] border-t border-white/20 shadow-2xl">
                  <div className="flex items-center justify-between">
                     <div>
                        <p className="text-[10px] font-black text-[#18357a] uppercase tracking-[2px]">Campus Fleet</p>
                        <p className="text-[11px] font-bold text-slate-500 uppercase tracking-widest leading-none">Premium Commute Experience</p>
                     </div>
                     <div className="w-10 h-10 bg-[#ffc107] rounded-full flex items-center justify-center">
                        <Bus size={18} className="text-[#18357a]" />
                     </div>
                  </div>
               </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
]

const CampusLifePage = () => {
    const [searchParams] = useSearchParams()
    const [activeSection, setActiveSection] = useState('library')

    useEffect(() => {
        const section = searchParams.get('section')
        if (section && CAMPUS_SECTIONS.find(s => s.id === section)) {
            setActiveSection(section)
            // Scroll to the content area if a section is specified
            window.scrollTo({ top: 300, behavior: 'smooth' })
        } else {
            // Default to library when no section is specified in URL
            setActiveSection('library')
        }
    }, [searchParams])

    const activeData = CAMPUS_SECTIONS.find(s => s.id === activeSection)

    return (
        <div className="min-h-screen bg-white font-sans pb-24">
            {/* Dynamic Hero Header */}
            <div className="relative h-[40vh] md:h-[60vh] flex items-center justify-center overflow-hidden">
                <AnimatePresence mode="wait">
                    <motion.div 
                        key={activeSection}
                        initial={{ opacity: 0, scale: 1.1 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.9 }}
                        transition={{ duration: 0.8 }}
                        className="absolute inset-0 z-0"
                    >
                        <img 
                            src={activeData.image} 
                            className="w-full h-full object-cover" 
                            alt={activeData.title}
                        />
                        <div className="absolute inset-0 bg-gradient-to-b from-[#18357a]/80 via-[#18357a]/60 to-transparent" />
                    </motion.div>
                </AnimatePresence>

                <div className="relative z-10 text-center px-6">
                    <motion.div
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                    >
                        <span className="text-[#ffc107] font-black text-[10px] uppercase tracking-[6px] mb-4 block">Institutional Facilities</span>
                        <h1 className="text-4xl md:text-8xl font-black text-white uppercase tracking-tighter leading-none mb-4 font-display">
                            CAMPUS <span className="text-[#ffc107]">LIFE</span>
                        </h1>
                    </motion.div>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-6 -mt-32 relative z-20">
                {/* Section Navigation Horizontal */}
                <div className="grid grid-cols-2 md:flex md:flex-row md:overflow-x-auto gap-4 p-4 no-scrollbar mb-12 md:justify-center">
                    {CAMPUS_SECTIONS.map((section) => (
                        <button
                            key={section.id}
                            onClick={() => setActiveSection(section.id)}
                            className={`p-5 rounded-[1.5rem] border transition-all relative overflow-hidden group ${
                                activeSection === section.id 
                                    ? 'bg-[#18357a] border-[#18357a] text-white shadow-xl shadow-[#18357a]/20' 
                                    : 'bg-white border-slate-100 text-[#64779F] hover:bg-slate-50'
                            }`}
                        >
                            <div className={`w-10 h-10 rounded-xl mb-3 flex items-center justify-center transition-all ${
                                activeSection === section.id 
                                    ? 'bg-[#ffc107] text-[#18357a] scale-110 shadow-lg shadow-[#ffc107]/20' 
                                    : 'bg-slate-50 text-[#18357a] group-hover:scale-105'
                            }`}>
                                <section.icon size={18} />
                            </div>
                            <h4 className={`text-sm font-black uppercase tracking-tight mb-1 ${activeSection === section.id ? 'text-white' : 'text-[#18357a]'}`}>
                                {section.title}
                            </h4>
                            <p className={`text-[8px] font-black uppercase tracking-[1px] opacity-60 ${activeSection === section.id ? 'text-white' : 'text-[#64779F]'}`}>
                                {section.subtitle}
                            </p>
                            
                            {activeSection === section.id && (
                                <motion.div layoutId="activeTab" className="absolute bottom-0 left-0 w-full h-1 bg-[#ffc107]" />
                            )}
                        </button>
                    ))}
                </div>

                {/* Content Area */}
                <AnimatePresence mode="wait">
                    <motion.div
                        key={activeSection}
                        initial={{ opacity: 0, x: 50, scale: 0.98 }}
                        animate={{ opacity: 1, x: 0, scale: 1 }}
                        exit={{ opacity: 0, x: -50, scale: 0.98 }}
                        transition={{ duration: 0.5, ease: "circOut" }}
                    >
                        {activeData.content}
                    </motion.div>
                </AnimatePresence>
            </div>
        </div>
    )
}

export default CampusLifePage
