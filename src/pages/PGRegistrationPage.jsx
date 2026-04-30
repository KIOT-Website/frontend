import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  CheckCircle2, 
  ArrowLeft, 
  Send,
  User,
  Phone,
  Mail,
  Search,
  GraduationCap,
  Calendar,
  ShieldCheck,
  ChevronDown,
  Building2,
  BookOpen,
  MapPin,
  Globe,
  Star,
  Users,
  Target
} from 'lucide-react'
import { useNavigate } from 'react-router-dom'
import logo from '../assets/main/logo.webp'
import ugBanner from '../assets/main/ug banner .webp'

const PG_COURSES = [
  'MBA - GENERAL',
  'MBA (IEV)',
  'MASTER OF COMPUTER APPLICATIONS (MCA)',
  'M.E. INDUSTRIAL SAFETY ENGINEERING (M.E. ISE)',
  'M.E. AUTOMOTIVE ELECTRONICS (M.E. AE)',
  'M.E. POWER ELECTRONICS AND DRIVES (M.E. PED)',
  'M.E. SOFTWARE ENGINEERING (M.E. SE)'
]

const COMMUNITIES = ['OC', 'BC', 'BCM', 'MBC', 'DNC', 'SC', 'SCA', 'ST']
const RELIGIONS = ['Hindu', 'Muslim', 'Christian', 'Sikh', 'Jain', 'Other']
const NATIONALITIES = ['Indian', 'NRI', 'Foreign National']
const BOARDS = ['State Board', 'CBSE', 'ICSE', 'Other']
const GENDERS = ['Male', 'Female', 'Transgender']
const CATEGORIES = ['Engineering (M.E)', 'Management (MBA)', 'Applications (MCA)']
const TN_DISTRICTS = ['Ariyalur', 'Chengalpattu', 'Chennai', 'Coimbatore', 'Cuddalore', 'Dharmapuri', 'Dindigul', 'Erode', 'Kallakurichi', 'Kanchipuram', 'Kanyakumari', 'Karur', 'Krishnagiri', 'Madurai', 'Mayiladuthurai', 'Nagapattinam', 'Namakkal', 'Nilgiris', 'Perambalur', 'Pudukkottai', 'Ramanathapuram', 'Ranipet', 'Salem', 'Sivaganga', 'Tenkasi', 'Thanjavur', 'Theni', 'Thoothukudi', 'Tiruchirappalli', 'Tirunelveli', 'Tirupathur', 'Tiruppur', 'Tiruvallur', 'Tiruvannamalai', 'Tiruvarur', 'Vellore', 'Viluppuram', 'Virudhunagar', 'Other State']

const CustomSelect = ({ label, value, options, onChange, icon: Icon, placeholder = 'Select', required }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
      <div className="relative group">
        <label className="text-[10px] font-black text-black uppercase tracking-widest flex items-center gap-2 mb-2 ml-1">
            {Icon && <Icon size={14} className="text-[#ffc107]" />} {label} {required && '*'}
        </label>
        <div 
            onClick={() => setIsOpen(!isOpen)}
            className={`w-full px-5 py-4 bg-slate-50 border transition-all rounded-2xl text-[11px] font-black uppercase tracking-widest flex items-center justify-between cursor-pointer ${
                isOpen ? 'border-[#224292] bg-white ring-4 ring-[#224292]/5' : 'border-slate-200'
            } ${value ? 'text-[#224292]' : 'text-slate-400'}`}
        >
            <span className="truncate pr-4">{value || placeholder}</span>
            <ChevronDown size={18} className={`transition-transform duration-300 text-[#224292] shrink-0 ${isOpen ? 'rotate-180' : ''}`} />
        </div>

        <AnimatePresence>
            {isOpen && (
                <>
                    <div className="fixed inset-0 z-40" onClick={() => setIsOpen(false)} />
                    <motion.div 
                        initial={{ opacity: 0, y: -10, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: -10, scale: 0.95 }}
                        className="absolute left-0 right-0 top-[calc(100%+12px)] bg-white border border-slate-100 rounded-[2.5rem] shadow-[0_30px_60px_rgba(24,53,122,0.15)] z-50 overflow-hidden"
                    >
                        <div className="max-h-64 overflow-y-auto scrollbar-hide py-2">
                            {options.map((option) => (
                                <div 
                                    key={option} 
                                    onClick={() => {
                                        onChange(option);
                                        setIsOpen(false);
                                    }}
                                    className={`px-8 py-4 text-[10px] font-black uppercase tracking-[0.1em] transition-colors cursor-pointer border-l-4 ${
                                        value === option 
                                        ? 'bg-[#224292]/5 text-[#224292] border-[#ffc107]' 
                                        : 'text-slate-500 border-transparent hover:bg-slate-50 hover:text-[#224292]'
                                    }`}
                                >
                                    {option}
                                </div>
                            ))}
                        </div>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
      </div>
    );
};

const PGRegistrationPage = () => {
    const navigate = useNavigate()
    const [formSubmitted, setFormSubmitted] = useState(false)
    const [formData, setFormData] = useState({
        studentName: '',
        email: '',
        fatherName: '',
        motherName: '',
        gender: '',
        dob: '',
        community: '',
        religion: '',
        caste: '',
        nationality: 'Indian',
        address: '',
        district: '',
        fatherMobile: '',
        motherMobile: '',
        studentMobile: '',
        percentage10: '',
        percentage12: '',
        ugPercentage: '',
        ugCollegeName: '',
        ugCollegeDistrict: '',
        ugUniversity: '',
        plus2RollNo: '',
        plus2Board: '',
        courseCategory: '',
        pref1: ''
    })

    const [submitting, setSubmitting] = useState(false)
    const [submitError, setSubmitError] = useState(null)

    const handleSubmit = async (e) => {
        e.preventDefault()
        setSubmitting(true)
        setSubmitError(null)
        try {
            const payload = {
                full_name: formData.studentName,
                email: formData.email,
                phone: formData.studentMobile || formData.fatherMobile,
                dob: formData.dob,
                gender: formData.gender,
                address: formData.address,
                city: formData.district,
                state: '',
                pincode: '',
                category: formData.courseCategory,
                community: formData.community,
                religion: formData.religion,
                caste: formData.caste,
                nationality: formData.nationality,
                ug_college: formData.ugCollegeName,
                ug_degree: formData.ugUniversity,
                ug_branch: '',
                ug_percentage: formData.ugPercentage,
                year_of_passing: '',
                entrance_exam: '',
                entrance_score: '',
                preferred_course1: formData.pref1,
                preferred_course2: '',
                preferred_course3: '',
                aadhar_number: '',
                parent_name: formData.fatherName,
                parent_phone: formData.fatherMobile,
                mother_name: formData.motherName,
                mother_phone: formData.motherMobile,
                parent_occupation: '',
                annual_income: '',
                work_experience: '',
                plus2_roll_no: formData.plus2RollNo,
                board: formData.plus2Board,
                created_at: new Date().toISOString()
            }
            const res = await fetch('http://localhost:8000/admission/pg-registrations/', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(payload)
            })
            if (!res.ok) throw new Error('Submission failed')

            // Success validation for phone length
            if ((payload.phone && payload.phone.length !== 10) || (payload.parent_phone && payload.parent_phone.length !== 10)) {
               throw new Error('Please enter valid 10-digit mobile numbers')
            }

            setFormSubmitted(true)
            window.scrollTo({ top: 0, behavior: 'smooth' })
        } catch (err) {
            setSubmitError('Submission failed. Please try again.')
        } finally {
            setSubmitting(false)
        }
    }

    const inputClass = "w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-xl text-sm font-bold focus:outline-none focus:border-[#224292] focus:bg-white transition-all shadow-sm placeholder:text-slate-300 uppercase"
    const labelClass = "text-[10px] font-black text-black uppercase tracking-widest flex items-center gap-2 mb-2 ml-1"

    return (
        <div className="min-h-screen bg-[#FDFEFE] font-sans relative overflow-hidden pb-20">
            {/* Header / Banner (Invoice Theme) */}
            <div className="relative h-48 md:h-64 bg-[#224292] flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 opacity-10 pointer-events-none z-0">
                    <div className="absolute inset-0" style={{ 
                        backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
                        backgroundSize: '32px 32px'
                    }} />
                </div>
                
                {/* Layered Invoice Curves - Adjusted for better mobile blending */}
                <svg className="absolute bottom-[-1px] left-0 w-full h-24 md:h-40 text-[#ffc107] fill-current" viewBox="0 0 1000 100" preserveAspectRatio="none">
                    <path d="M0 100C300 0 700 100 1000 0V100H0Z" />
                </svg>
                <svg className="absolute bottom-[-1px] left-0 w-full h-16 md:h-32 text-[#FDFEFE] fill-current" viewBox="0 0 1000 100" preserveAspectRatio="none">
                    <path d="M0 100C250 10 750 90 1000 0V100H0Z" />
                </svg>

                <div className="relative z-10 text-center px-6 -mt-8 md:-mt-20">
                    <img src={logo} alt="KIOT" className="h-12 md:h-20 w-auto mx-auto mb-4 md:mb-8 invert brightness-0" />
                    <div className="space-y-1">
                        <h1 className="text-3xl md:text-6xl font-black text-white uppercase tracking-wider leading-none font-display">PG ENQUIRY FORM</h1>
                    </div>
                </div>

                <div className="absolute top-6 left-6 md:top-10 md:left-10">
                    <button onClick={() => navigate('/admissions')} className="flex items-center gap-2 md:gap-3 text-white/40 hover:text-white transition-all font-black uppercase text-[9px] md:text-[10px] tracking-[2px] md:tracking-[4px] group">
                        <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" /> <span className="hidden xs:inline">Back to portal</span>
                    </button>
                </div>
            </div>

            <div className="max-w-5xl mx-auto px-6 -mt-4 relative z-20">
                <AnimatePresence mode="wait">
                    {formSubmitted ? (
                        <motion.div initial={{ scale: 0.95, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} className="bg-white rounded-[3rem] shadow-2xl p-20 text-center border border-slate-100">
                            <div className="w-24 h-24 bg-[#224292]/5 rounded-full flex items-center justify-center mx-auto mb-8 shadow-inner">
                                <CheckCircle2 size={56} className="text-[#224292]" />
                            </div>
                            <h2 className="text-4xl font-black text-[#224292] uppercase mb-4 tracking-tighter">Enquiry Received</h2>
                            <p className="text-[#64779F] font-bold text-lg max-w-md mx-auto mb-10">Thank you, <strong>{formData.studentName}</strong>. Your postgraduate enquiry for 2026 has been successfully registered. Our graduate admissions cell will contact you shortly.</p>
                            <button onClick={() => navigate('/admissions')} className="px-10 py-4 bg-[#224292] text-white rounded-xl font-black uppercase text-[11px] tracking-widest transition-all">Go Back</button>
                        </motion.div>
                    ) : (
                        <form onSubmit={handleSubmit} className="bg-white rounded-[3rem] shadow-2xl overflow-hidden border border-slate-100">
                            {/* Section 1: Basic Details */}
                            <div className="p-10 md:p-16 border-b border-slate-50">
                                <div className="flex items-center gap-4 mb-12">
                                    <div className="w-1.5 h-10 bg-[#ffc107] rounded-full" />
                                    <h3 className="text-2xl font-black text-[#224292] uppercase tracking-tight font-display">Basic Details</h3>
                                </div>
                                <div className="grid md:grid-cols-2 gap-x-10 gap-y-8">
                                    <div className="md:col-span-2">
                                        <label className={labelClass}><User size={14} className="text-[#ffc107]" /> Name of the student (in capital letters) *</label>
                                        <input required type="text" className={inputClass} placeholder="Full Name" value={formData.studentName} onChange={e => setFormData({...formData, studentName: e.target.value.toUpperCase()})} />
                                    </div>
                                    <div className="md:col-span-2">
                                        <label className={labelClass}><Mail size={14} className="text-[#ffc107]" /> Email address *</label>
                                        <input required type="email" className={inputClass} placeholder="Email" value={formData.email} onChange={e => setFormData({...formData, email: e.target.value})} />
                                    </div>
                                    <div>
                                        <label className={labelClass}>Name of the Father / Guardian *</label>
                                        <input required type="text" className={inputClass} value={formData.fatherName} onChange={e => setFormData({...formData, fatherName: e.target.value})} />
                                    </div>
                                    <div>
                                        <label className={labelClass}>Name of the Mother</label>
                                        <input type="text" className={inputClass} value={formData.motherName} onChange={e => setFormData({...formData, motherName: e.target.value})} />
                                    </div>
                                    <CustomSelect 
                                        label="Gender" 
                                        required 
                                        value={formData.gender} 
                                        options={GENDERS} 
                                        onChange={val => setFormData({...formData, gender: val})} 
                                        placeholder="Select Gender"
                                    />
                                    <div>
                                        <label className={labelClass}><Calendar size={14} className="text-[#ffc107]" /> Date of Birth * (dd-MM-yyyy)</label>
                                        <input required type="date" className={inputClass} value={formData.dob} onChange={e => setFormData({...formData, dob: e.target.value})} />
                                    </div>
                                    <CustomSelect 
                                        label="Community" 
                                        required 
                                        value={formData.community} 
                                        options={COMMUNITIES} 
                                        onChange={val => setFormData({...formData, community: val})} 
                                        placeholder="Select Community"
                                    />
                                    <CustomSelect 
                                        label="Religion" 
                                        required 
                                        value={formData.religion} 
                                        options={RELIGIONS} 
                                        onChange={val => setFormData({...formData, religion: val})} 
                                        placeholder="Select Religion"
                                    />
                                    <div>
                                        <label className={labelClass}>Caste (Select/Type) *</label>
                                        <input required type="text" className={inputClass} value={formData.caste} onChange={e => setFormData({...formData, caste: e.target.value})} />
                                    </div>
                                    <CustomSelect 
                                        label="Nationality" 
                                        required 
                                        icon={Globe}
                                        value={formData.nationality} 
                                        options={NATIONALITIES} 
                                        onChange={val => setFormData({...formData, nationality: val})} 
                                        placeholder="Select Nationality"
                                    />
                                </div>
                            </div>

                            {/* Section 2: Communication Details */}
                            <div className="p-10 md:p-16 bg-[#F8FAFC]">
                                <div className="flex items-center gap-4 mb-12">
                                    <div className="w-1.5 h-10 bg-[#224292] rounded-full" />
                                    <h3 className="text-2xl font-black text-[#224292] uppercase tracking-tight font-display">Communication Details</h3>
                                </div>
                                <div className="grid md:grid-cols-2 gap-x-10 gap-y-8">
                                    <div className="md:col-span-2">
                                        <label className={labelClass}><MapPin size={14} className="text-[#224292]" /> Address for Communication *</label>
                                        <textarea required rows={4} className={inputClass} style={{ resize: 'none' }} value={formData.address} onChange={e => setFormData({...formData, address: e.target.value})} />
                                    </div>
                                    <CustomSelect 
                                         label="District" 
                                         required 
                                         value={formData.district} 
                                         options={TN_DISTRICTS} 
                                         onChange={val => setFormData({...formData, district: val})} 
                                         placeholder="Select District"
                                     />
                                    <div>
                                        <label className={labelClass}><Phone size={14} className="text-[#224292]" /> Mobile Number of Father *</label>
                                        <input required type="tel" maxLength={10} className={inputClass} value={formData.fatherMobile} onChange={e => setFormData({...formData, fatherMobile: e.target.value.replace(/\D/g, '').slice(0, 10)})} />
                                    </div>
                                    <div>
                                        <label className={labelClass}><Phone size={14} className="text-[#224292]" /> Mobile Number of Mother *</label>
                                        <input required type="tel" maxLength={10} className={inputClass} value={formData.motherMobile} onChange={e => setFormData({...formData, motherMobile: e.target.value.replace(/\D/g, '').slice(0, 10)})} />
                                    </div>
                                    <div>
                                        <label className={labelClass}>Mobile Number of Student (If any)</label>
                                        <input type="tel" maxLength={10} className={inputClass} value={formData.studentMobile} onChange={e => setFormData({...formData, studentMobile: e.target.value.replace(/\D/g, '').slice(0, 10)})} />
                                    </div>
                                </div>
                            </div>

                            {/* Section 3: Educational Details */}
                            <div className="p-10 md:p-16">
                                <div className="flex items-center gap-4 mb-12">
                                    <div className="w-1.5 h-10 bg-[#ffc107] rounded-full" />
                                    <h3 className="text-2xl font-black text-[#224292] uppercase tracking-tight font-display">Educational Details</h3>
                                </div>
                                <div className="grid md:grid-cols-2 gap-x-10 gap-y-8">
                                    <div>
                                        <label className={labelClass}>10th Percentage *</label>
                                        <input required type="text" className={inputClass} value={formData.percentage10} onChange={e => setFormData({...formData, percentage10: e.target.value.replace(/[^0-9.]/g, '')})} />
                                    </div>
                                    <div>
                                        <label className={labelClass}>12th or Diploma Percentage *</label>
                                        <input required type="text" className={inputClass} value={formData.percentage12} onChange={e => setFormData({...formData, percentage12: e.target.value.replace(/[^0-9.]/g, '')})} />
                                    </div>
                                    <div>
                                        <label className={labelClass}><GraduationCap size={14} className="text-[#ffc107]" /> UG Percentage / Marks *</label>
                                        <input required type="text" className={inputClass} value={formData.ugPercentage} onChange={e => setFormData({...formData, ugPercentage: e.target.value.replace(/[^0-9.]/g, '')})} />
                                    </div>
                                    <div>
                                        <label className={labelClass}>UG College Name *</label>
                                        <input required type="text" className={inputClass} value={formData.ugCollegeName} onChange={e => setFormData({...formData, ugCollegeName: e.target.value})} />
                                    </div>
                                    <CustomSelect 
                                         label="UG College District" 
                                         required 
                                         value={formData.ugCollegeDistrict} 
                                         options={TN_DISTRICTS} 
                                         onChange={val => setFormData({...formData, ugCollegeDistrict: val})} 
                                         placeholder="Select District"
                                     />
                                    <div>
                                        <label className={labelClass}>UG College Affiliated University *</label>
                                        <input required type="text" className={inputClass} value={formData.ugUniversity} onChange={e => setFormData({...formData, ugUniversity: e.target.value})} />
                                    </div>
                                    <div>
                                        <label className={labelClass}>+2 Roll Number (Hall ticket Number)</label>
                                        <input type="text" className={inputClass} value={formData.plus2RollNo} onChange={e => setFormData({...formData, plus2RollNo: e.target.value})} />
                                    </div>
                                    <CustomSelect 
                                        label="Board studied in +2" 
                                        required 
                                        value={formData.plus2Board} 
                                        options={BOARDS} 
                                        onChange={val => setFormData({...formData, plus2Board: val})} 
                                        placeholder="Select Board"
                                    />
                                </div>
                            </div>

                            {/* Section 4: Admission Enquiry */}
                            <div className="p-10 md:p-16 bg-[#224292]/5">
                                <div className="flex items-center gap-4 mb-12">
                                    <div className="w-1.5 h-10 bg-[#224292] rounded-full" />
                                    <h3 className="text-2xl font-black text-[#224292] uppercase tracking-tight font-display">Admission Enquiry</h3>
                                </div>
                                <div className="grid md:grid-cols-2 gap-x-10 gap-y-8">
                                    <CustomSelect 
                                        label="Select Course Category"
                                        required 
                                        icon={Star}
                                        value={formData.courseCategory} 
                                        options={CATEGORIES} 
                                        onChange={val => setFormData({...formData, courseCategory: val})} 
                                        placeholder="Select Category"
                                    />
                                    <CustomSelect 
                                        label="Preference of the Course (Choice 1)"
                                        required 
                                        icon={Target}
                                        value={formData.pref1} 
                                        options={PG_COURSES} 
                                        onChange={val => setFormData({...formData, pref1: val})} 
                                        placeholder="Select Choice 1"
                                    />
                                </div>
                            </div>

                            <div className="p-12 md:p-16 text-center">
                                {submitError && (
                                    <div className="mb-6 px-6 py-4 bg-red-50 border border-red-200 rounded-2xl text-red-600 font-bold text-sm">
                                        {submitError}
                                    </div>
                                )}
                                <button type="submit" disabled={submitting} className="w-full max-w-md mx-auto py-6 bg-[#ffc107] text-[#224292] rounded-[2rem] font-black uppercase text-[14px] tracking-[5px] hover:bg-[#224292] hover:text-white transition-all shadow-2xl active:scale-95 flex items-center justify-center gap-4 group disabled:opacity-60 disabled:cursor-not-allowed">
                                     {submitting ? 'Submitting...' : 'SUBMIT'} <Send size={20} className="group-hover:translate-x-2 transition-transform" />
                                </button>
                                <p className="mt-8 text-[10px] font-black text-slate-400 uppercase tracking-[2px] flex items-center justify-center gap-2">
                                    <ShieldCheck size={14} className="text-[#ffc107]" /> SECURE DATA ENCRYPTION ENABLED
                                </p>
                            </div>
                        </form>
                    )}
                </AnimatePresence>
            </div>
        </div>
    )
}

export default PGRegistrationPage
