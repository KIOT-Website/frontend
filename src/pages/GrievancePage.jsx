import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  CheckCircle2, 
  ArrowLeft, 
  Send,
  User,
  Calendar,
  ChevronDown,
  Users,
  CreditCard,
  AlertCircle,
  HelpCircle,
  FileText,
  Phone,
  Mail,
  MessageSquare,
  GraduationCap,
  Building2,
  Layers
} from 'lucide-react'
import { useNavigate } from 'react-router-dom'
import logo from '../assets/main/logo.webp'

const CATEGORIES = [
  'Student',
  'Faculty',
  'Staffs',
  'Parent',
  'Alumni'
]

const NATURE_OF_COMPLAINTS = [
  'Admission',
  'Reservation',
  'Harassment',
  'Hostel',
  'Others'
]

const YEARS = [
  'I Year',
  'II Year',
  'III Year',
  'IV Year'
]

const DEPARTMENTS = [
  'B.E. Computer Science and Engineering (CSE)',
  'B.Tech. Information Technology (IT)',
  'B.Tech. Artificial Intelligence and Data Science (AI&DS)',
  'B.Tech. Computer Science and Business Systems (CSBS)',
  'B.E. Electronics and Communication Engineering (ECE)',
  'B.E. Electrical and Electronics Engineering (EEE)',
  'B.E. Electronics and Computer Engineering (ECX)',
  'B.E. Mechanical Engineering (MECH)',
  'B.E. Civil Engineering (CIVIL)',
  'Master of Business Administration (MBA - General)',
  'MBA - Innovation, Entrepreneurship and Venture Development (MBA IEV)',
  'Master of Computer Applications (MCA)',
  'M.E. Industrial Safety Engineering (M.E. ISE)',
  'M.E. Automotive Electronics (M.E. AE)',
  'M.E. Power Electronics and Drives (M.E. PED)',
  'M.E. Software Engineering (M.E. SE)',
  'Science and Humanities (S&H)'
]

const SECTIONS = [
  'A',
  'B',
  'C'
]

// ─── Standard, Reliable Field Validators ───
const validateName = (name) => {
  if (!name || !name.trim()) return 'Name is required.'
  if (name.trim().length < 2) return 'Please enter at least 2 characters for name.'
  return ''
}

const validateAadhaar = (aadhaar) => {
  const raw = aadhaar ? aadhaar.replace(/\D/g, '') : ''
  if (!raw) return 'Aadhaar number is required.'
  if (raw.length !== 12) return 'Aadhaar number must be 12 digits.'
  return ''
}

const validatePhone = (phone) => {
  if (!phone || !phone.trim()) return 'Phone number is required.'
  const digits = phone.replace(/\D/g, '')
  if (digits.length < 10) return 'Please enter a valid 10-digit phone number.'
  return ''
}

const validateEmail = (email) => {
  if (!email || !email.trim()) return 'Email address is required.'
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  if (!emailRegex.test(email.trim())) {
    return 'Please enter a valid email address (e.g. john@doe.com).'
  }
  return ''
}

const validateGrievanceDetail = (detail) => {
  if (!detail || !detail.trim()) return 'Grievance detail is required.'
  if (detail.trim().length < 5) return 'Please write your grievance detail (minimum 5 characters).'
  return ''
}

const validateOtherNature = (other) => {
  if (!other || !other.trim()) return 'Please specify the nature of complaint.'
  return ''
}

const CustomSelect = ({ label, value, options, onChange, icon: Icon, placeholder = 'Select', required, error }) => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="relative group">
      <label className="text-xs font-bold text-slate-800 flex items-center gap-2 mb-2 ml-1">
        {Icon && <Icon size={14} className="text-[#ffc107]" />} {label} {required && '*'}
      </label>
      <div 
        onClick={() => setIsOpen(!isOpen)}
        className={`w-full px-4 py-3.5 sm:px-5 sm:py-4 bg-slate-50 border transition-all rounded-xl text-sm font-bold flex items-center justify-between cursor-pointer ${
          error 
            ? 'border-red-400 bg-red-50/20' 
            : isOpen 
              ? 'border-[#224292] bg-white ring-4 ring-[#224292]/5' 
              : 'border-slate-200 hover:border-slate-300'
        } ${value ? 'text-[#224292]' : 'text-slate-400'}`}
      >
        <span className="truncate pr-4 font-bold">{value || placeholder}</span>
        <ChevronDown size={18} className={`transition-transform duration-300 text-[#224292] shrink-0 ${isOpen ? 'rotate-180' : ''}`} />
      </div>

      {error && (
        <p className="text-red-500 text-xs font-bold mt-1.5 ml-1 flex items-center gap-1">
          <AlertCircle size={13} className="shrink-0" /> {error}
        </p>
      )}

      <AnimatePresence>
        {isOpen && (
          <>
            <div className="fixed inset-0 z-40" onClick={() => setIsOpen(false)} />
            <motion.div 
              initial={{ opacity: 0, y: -8, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -8, scale: 0.98 }}
              className="absolute left-0 right-0 top-[calc(100%+6px)] bg-white border border-slate-200 rounded-2xl shadow-[0_20px_60px_rgba(24,53,122,0.2)] z-[100] overflow-hidden"
            >
              <div className="max-h-56 overflow-y-auto py-2 divide-y divide-slate-100">
                {options.map((option) => (
                  <div 
                    key={option} 
                    onClick={() => {
                      onChange(option)
                      setIsOpen(false)
                    }}
                    className={`px-6 py-3.5 text-xs font-bold transition-colors cursor-pointer border-l-4 ${
                      value === option 
                        ? 'bg-[#224292]/5 text-[#224292] border-[#ffc107]' 
                        : 'text-slate-600 border-transparent hover:bg-slate-50 hover:text-[#224292]'
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
  )
}

export default function GrievancePage() {
  const navigate = useNavigate()
  const [formSubmitted, setFormSubmitted] = useState(false)
  const [ticketId, setTicketId] = useState('')
  const [hasSubmitted, setHasSubmitted] = useState(false) // Errors only show after clicking Submit
  const [formData, setFormData] = useState({
    name: '',
    aadhaarNumber: '',
    dateOfComplaint: new Date().toISOString().split('T')[0],
    category: '',
    year: '',
    department: '',
    section: '',
    natureOfComplaint: '',
    otherNature: '',
    phone: '',
    email: '',
    grievanceDetail: ''
  })
  const [errors, setErrors] = useState({})
  const [submitting, setSubmitting] = useState(false)
  const [submitError, setSubmitError] = useState(null)

  const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:8000'

  useEffect(() => {
    document.title = 'Grievance Form | Knowledge Institute of Technology (KIOT)'
    window.scrollTo({ top: 0, behavior: 'instant' })
  }, [])

  // Aadhaar input formatting (XXXX XXXX XXXX)
  const handleAadhaarChange = (e) => {
    const rawVal = e.target.value.replace(/\D/g, '').slice(0, 12)
    const formatted = rawVal.replace(/(\d{4})(?=\d)/g, '$1 ')
    setFormData(prev => ({ ...prev, aadhaarNumber: formatted }))
    
    if (hasSubmitted) {
      setErrors(prev => ({ ...prev, aadhaarNumber: validateAadhaar(formatted) }))
    }
  }

  const validateAll = () => {
    const newErrors = {}
    
    const nameErr = validateName(formData.name)
    if (nameErr) newErrors.name = nameErr

    const aadhaarErr = validateAadhaar(formData.aadhaarNumber)
    if (aadhaarErr) newErrors.aadhaarNumber = aadhaarErr

    if (!formData.category) {
      newErrors.category = 'Please select a category.'
    }

    if (formData.category === 'Student') {
      if (!formData.year) newErrors.year = 'Please select your Year.'
      if (!formData.department) newErrors.department = 'Please select your Department.'
      // Section is optional
    }

    if (!formData.natureOfComplaint) {
      newErrors.natureOfComplaint = 'Please select nature of complaint.'
    }

    if (formData.natureOfComplaint === 'Others') {
      const otherErr = validateOtherNature(formData.otherNature)
      if (otherErr) newErrors.otherNature = otherErr
    }

    const phoneErr = validatePhone(formData.phone)
    if (phoneErr) newErrors.phone = phoneErr

    const emailErr = validateEmail(formData.email)
    if (emailErr) newErrors.email = emailErr

    const grievanceErr = validateGrievanceDetail(formData.grievanceDetail)
    if (grievanceErr) newErrors.grievanceDetail = grievanceErr

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setHasSubmitted(true)
    setSubmitError(null)

    const isValid = validateAll()
    if (!isValid) {
      setSubmitError('Please check the required fields highlighted above.')
      return
    }

    setSubmitting(true)

    try {
      const payload = {
        name: formData.name.trim(),
        aadhaar_number: formData.aadhaarNumber.trim(),
        date_of_complaint: formData.dateOfComplaint,
        category: formData.category,
        year: formData.category === 'Student' ? formData.year : null,
        department: formData.category === 'Student' ? formData.department : null,
        section: formData.category === 'Student' ? (formData.section || null) : null,
        nature_of_complaint: formData.natureOfComplaint,
        other_nature: formData.natureOfComplaint === 'Others' ? formData.otherNature.trim() : null,
        phone: formData.phone.trim(),
        email: formData.email.trim(),
        grievance_detail: formData.grievanceDetail.trim()
      }

      const response = await fetch(`${API_URL}/grievances/`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(payload)
      })

      if (!response.ok) {
        const errData = await response.json().catch(() => ({}))
        throw new Error(errData.detail || 'Server error while saving grievance.')
      }

      const result = await response.json()
      setTicketId(result.ticket_id || (`KIOT-GRC-${new Date().getFullYear()}-0001`))
      setFormSubmitted(true)
      window.scrollTo({ top: 0, behavior: 'smooth' })
    } catch (err) {
      console.error('Grievance submission error:', err)
      setSubmitError(err.message || 'Submission failed. Please try again.')
    } finally {
      setSubmitting(false)
    }
  }

  const inputClass = (hasError) => 
    `w-full px-4 py-3.5 sm:px-5 sm:py-4 bg-slate-50 border rounded-xl text-sm font-bold focus:outline-none transition-all shadow-sm placeholder:text-slate-400 ${
      hasError 
        ? 'border-red-400 bg-red-50/20 focus:border-red-500 focus:bg-white' 
        : 'border-slate-200 focus:border-[#224292] focus:bg-white'
    }`

  const labelClass = "text-xs font-bold text-slate-800 flex items-center gap-2 mb-2 ml-1"

  return (
    <div className="min-h-screen bg-[#FDFEFE] font-sans relative overflow-hidden pb-20">
      
      {/* ─── Header / Banner (Matching UG Registration Theme) ─── */}
      <div className="relative h-44 sm:h-48 md:h-64 bg-[#224292] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 opacity-10 pointer-events-none z-0">
          <div 
            className="absolute inset-0" 
            style={{ 
              backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
              backgroundSize: '32px 32px'
            }} 
          />
        </div>
        
        {/* Layered Curves */}
        <svg className="absolute bottom-[-1px] left-0 w-full h-20 sm:h-24 md:h-40 text-[#ffc107] fill-current" viewBox="0 0 1000 100" preserveAspectRatio="none">
          <path d="M0 100C300 0 700 100 1000 0V100H0Z" />
        </svg>
        <svg className="absolute bottom-[-1px] left-0 w-full h-14 sm:h-16 md:h-32 text-[#FDFEFE] fill-current" viewBox="0 0 1000 100" preserveAspectRatio="none">
          <path d="M0 100C250 10 750 90 1000 0V100H0Z" />
        </svg>

        <div className="relative z-10 text-center px-4 sm:px-6 -mt-6 sm:-mt-8 md:-mt-20">
          <img src={logo} alt="KIOT" className="h-10 sm:h-12 md:h-20 w-auto mx-auto mb-3 sm:mb-4 md:mb-8 invert brightness-0" />
          <div className="space-y-1">
            <h1 className="text-2xl sm:text-3xl md:text-6xl font-black text-white tracking-wider leading-none font-display">
              GRIEVANCE FORM
            </h1>
          </div>
        </div>

        <div className="absolute top-4 left-4 sm:top-6 sm:left-6 md:top-10 md:left-10 z-20">
          <button 
            onClick={() => navigate('/')} 
            className="flex items-center gap-2 md:gap-3 text-white/70 hover:text-white transition-all font-black uppercase text-[9px] md:text-[10px] tracking-[2px] md:tracking-[4px] group"
          >
            <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" /> 
            <span className="hidden xs:inline">Back to home</span>
          </button>
        </div>
      </div>

      {/* ─── Form Card Container (Widened for Mobile) ─── */}
      <div className="max-w-5xl mx-auto px-3 sm:px-6 -mt-3 sm:-mt-4 relative z-20">
        <AnimatePresence mode="wait">
          {formSubmitted ? (
            <motion.div 
              initial={{ scale: 0.95, opacity: 0 }} 
              animate={{ scale: 1, opacity: 1 }} 
              className="bg-white rounded-2xl sm:rounded-[2.5rem] md:rounded-[3rem] shadow-2xl p-6 sm:p-10 md:p-20 text-center border border-slate-100"
            >
              <div className="w-20 h-20 sm:w-24 sm:h-24 bg-green-50 rounded-full flex items-center justify-center mx-auto mb-6 sm:mb-8">
                <CheckCircle2 size={48} className="text-green-600 sm:w-14 sm:h-14" />
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-[#224292] uppercase mb-3 sm:mb-4 tracking-tighter font-display">
                Grievance Submitted
              </h2>
              <p className="text-[#64779F] font-bold text-sm sm:text-base md:text-lg max-w-md mx-auto mb-6">
                Thank you, <strong>{formData.name}</strong> ({formData.category}{formData.category === 'Student' && formData.department ? ` - ${formData.year}, ${formData.department}` : ''}). Your grievance regarding <strong>{formData.natureOfComplaint === 'Others' ? formData.otherNature : formData.natureOfComplaint}</strong> registered on <strong>{formData.dateOfComplaint}</strong> has been received and saved successfully.
              </p>

              <div className="p-4 bg-slate-50 rounded-2xl border border-slate-200 max-w-xs mx-auto mb-8">
                <span className="text-[10px] font-black uppercase tracking-widest text-slate-400 block mb-1">
                  Ticket Reference ID
                </span>
                <span className="text-xl font-mono font-black text-[#224292]">
                  {ticketId}
                </span>
              </div>

              <div className="flex flex-wrap items-center justify-center gap-4">
                <button 
                  onClick={() => {
                    setFormSubmitted(false)
                    setHasSubmitted(false)
                    setFormData({
                      name: '',
                      aadhaarNumber: '',
                      dateOfComplaint: new Date().toISOString().split('T')[0],
                      category: '',
                      year: '',
                      department: '',
                      section: '',
                      natureOfComplaint: '',
                      otherNature: '',
                      phone: '',
                      email: '',
                      grievanceDetail: ''
                    })
                    setErrors({})
                  }} 
                  className="px-6 sm:px-8 py-3.5 bg-slate-100 text-[#224292] rounded-xl font-black uppercase text-[10px] sm:text-[11px] tracking-widest hover:bg-slate-200 transition-all"
                >
                  Submit Another
                </button>
                <button 
                  onClick={() => navigate('/')} 
                  className="px-6 sm:px-8 py-3.5 bg-[#224292] text-white rounded-xl font-black uppercase text-[10px] sm:text-[11px] tracking-widest hover:bg-[#ffc107] hover:text-[#224292] transition-all"
                >
                  Go Back to Home
                </button>
              </div>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} noValidate className="bg-white rounded-2xl sm:rounded-[2.5rem] md:rounded-[3rem] shadow-2xl border border-slate-100 relative">
              
              {/* Section: Basic Details */}
              <div className="p-5 sm:p-8 md:p-14">
                <div className="flex items-center gap-3 sm:gap-4 mb-6 sm:mb-10">
                  <div className="w-1.5 h-8 sm:h-10 bg-[#ffc107] rounded-full" />
                  <h3 className="text-xl sm:text-2xl font-black text-[#224292] uppercase tracking-tight font-display">
                    Basic Details
                  </h3>
                </div>

                <div className="grid md:grid-cols-2 gap-x-10 gap-y-5 sm:gap-y-8">
                  
                  {/* Field 1: Name */}
                  <div className="md:col-span-2">
                    <label className={labelClass}>
                      <User size={14} className="text-[#ffc107]" /> Name *
                    </label>
                    <input 
                      type="text" 
                      className={inputClass(hasSubmitted && errors.name)} 
                      placeholder="Full Name" 
                      value={formData.name} 
                      onChange={e => {
                        const val = e.target.value
                        setFormData({ ...formData, name: val })
                        if (hasSubmitted) setErrors(prev => ({ ...prev, name: validateName(val) }))
                      }}
                    />
                    {hasSubmitted && errors.name && (
                      <p className="text-red-500 text-xs font-bold mt-1.5 ml-1 flex items-center gap-1">
                        <AlertCircle size={13} className="shrink-0" /> {errors.name}
                      </p>
                    )}
                  </div>

                  {/* Field 2: Aadhaar Number */}
                  <div className="md:col-span-2">
                    <label className={labelClass}>
                      <CreditCard size={14} className="text-[#ffc107]" /> Aadhaar Number *
                    </label>
                    <input 
                      type="text" 
                      maxLength={14} // 12 digits + 2 spaces
                      className={inputClass(hasSubmitted && errors.aadhaarNumber)}
                      placeholder="XXXX XXXX XXXX (12 Digit Number)" 
                      value={formData.aadhaarNumber} 
                      onChange={handleAadhaarChange} 
                    />
                    {hasSubmitted && errors.aadhaarNumber && (
                      <p className="text-red-500 text-xs font-bold mt-1.5 ml-1 flex items-center gap-1">
                        <AlertCircle size={13} className="shrink-0" /> {errors.aadhaarNumber}
                      </p>
                    )}
                  </div>

                  {/* Field 3: Date of Complaint */}
                  <div>
                    <label className={labelClass}>
                      <Calendar size={14} className="text-[#ffc107]" /> Date of Complaint * (dd-MM-yyyy)
                    </label>
                    <input 
                      type="date" 
                      className={inputClass(false)} 
                      value={formData.dateOfComplaint} 
                      max={new Date().toISOString().split('T')[0]}
                      onChange={e => setFormData({ ...formData, dateOfComplaint: e.target.value })} 
                    />
                  </div>

                  {/* Field 4: Category Dropdown */}
                  <div>
                    <CustomSelect 
                      label="Category"
                      required
                      icon={Users}
                      value={formData.category}
                      options={CATEGORIES}
                      error={hasSubmitted && errors.category}
                      onChange={val => {
                        setFormData({ 
                          ...formData, 
                          category: val,
                          year: val === 'Student' ? formData.year : '',
                          department: val === 'Student' ? formData.department : '',
                          section: val === 'Student' ? formData.section : ''
                        })
                        if (hasSubmitted) setErrors(prev => ({ ...prev, category: '' }))
                        setSubmitError(null)
                      }}
                      placeholder="Select Category"
                    />
                  </div>

                  {/* Conditional Fields: When Category === 'Student' */}
                  <AnimatePresence>
                    {formData.category === 'Student' && (
                      <>
                        {/* Year */}
                        <motion.div 
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -10 }}
                          className="md:col-span-1"
                        >
                          <CustomSelect 
                            label="Year"
                            required
                            icon={GraduationCap}
                            value={formData.year}
                            options={YEARS}
                            error={hasSubmitted && errors.year}
                            onChange={val => {
                              setFormData({ ...formData, year: val })
                              if (hasSubmitted) setErrors(prev => ({ ...prev, year: '' }))
                            }}
                            placeholder="Select Year"
                          />
                        </motion.div>

                        {/* Section (Optional) */}
                        <motion.div 
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -10 }}
                          className="md:col-span-1"
                        >
                          <CustomSelect 
                            label="Section"
                            required={false}
                            icon={Layers}
                            value={formData.section}
                            options={SECTIONS}
                            onChange={val => {
                              setFormData({ ...formData, section: val })
                            }}
                            placeholder="Select Section (Optional)"
                          />
                        </motion.div>

                        {/* Department */}
                        <motion.div 
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -10 }}
                          className="md:col-span-2"
                        >
                          <CustomSelect 
                            label="Department"
                            required
                            icon={Building2}
                            value={formData.department}
                            options={DEPARTMENTS}
                            error={hasSubmitted && errors.department}
                            onChange={val => {
                              setFormData({ ...formData, department: val })
                              if (hasSubmitted) setErrors(prev => ({ ...prev, department: '' }))
                            }}
                            placeholder="Select Department"
                          />
                        </motion.div>
                      </>
                    )}
                  </AnimatePresence>

                  {/* Field 5: Nature of Complaint Dropdown */}
                  <div className={formData.natureOfComplaint === 'Others' ? 'md:col-span-1' : 'md:col-span-2'}>
                    <CustomSelect 
                      label="Nature of Complaint"
                      required
                      icon={HelpCircle}
                      value={formData.natureOfComplaint}
                      options={NATURE_OF_COMPLAINTS}
                      error={hasSubmitted && errors.natureOfComplaint}
                      onChange={val => {
                        setFormData({ ...formData, natureOfComplaint: val })
                        if (hasSubmitted) setErrors(prev => ({ ...prev, natureOfComplaint: '' }))
                        setSubmitError(null)
                      }}
                      placeholder="Select Nature of Complaint"
                    />
                  </div>

                  {/* Field 5 (Sub-field): If Others is selected, Manual Text Input */}
                  {formData.natureOfComplaint === 'Others' && (
                    <motion.div 
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="md:col-span-1"
                    >
                      <label className={labelClass}>
                        <FileText size={14} className="text-[#ffc107]" /> Specify Nature of Complaint *
                      </label>
                      <input 
                        type="text" 
                        className={inputClass(hasSubmitted && errors.otherNature)} 
                        placeholder="Please type your complaint nature" 
                        value={formData.otherNature} 
                        onChange={e => {
                          const val = e.target.value
                          setFormData({ ...formData, otherNature: val })
                          if (hasSubmitted) setErrors(prev => ({ ...prev, otherNature: validateOtherNature(val) }))
                        }}
                      />
                      {hasSubmitted && errors.otherNature && (
                        <p className="text-red-500 text-xs font-bold mt-1.5 ml-1 flex items-center gap-1">
                          <AlertCircle size={13} className="shrink-0" /> {errors.otherNature}
                        </p>
                      )}
                    </motion.div>
                  )}

                  {/* Field 6: Phone */}
                  <div className="md:col-span-2">
                    <label className={labelClass}>
                      <Phone size={14} className="text-[#ffc107]" /> Phone *
                    </label>
                    <input 
                      type="tel" 
                      className={inputClass(hasSubmitted && errors.phone)} 
                      placeholder="E.g. +1 300 400 5000 or 9876543210" 
                      value={formData.phone} 
                      onChange={e => {
                        const val = e.target.value
                        setFormData({ ...formData, phone: val })
                        if (hasSubmitted) setErrors(prev => ({ ...prev, phone: validatePhone(val) }))
                      }}
                    />
                    {hasSubmitted && errors.phone && (
                      <p className="text-red-500 text-xs font-bold mt-1.5 ml-1 flex items-center gap-1">
                        <AlertCircle size={13} className="shrink-0" /> {errors.phone}
                      </p>
                    )}
                  </div>

                  {/* Field 7: Email Address */}
                  <div className="md:col-span-2">
                    <label className={labelClass}>
                      <Mail size={14} className="text-[#ffc107]" /> Email Address *
                    </label>
                    <input 
                      type="email" 
                      className={inputClass(hasSubmitted && errors.email)} 
                      placeholder="E.g. john@doe.com" 
                      value={formData.email} 
                      onChange={e => {
                        const val = e.target.value
                        setFormData({ ...formData, email: val })
                        if (hasSubmitted) setErrors(prev => ({ ...prev, email: validateEmail(val) }))
                      }}
                    />
                    {hasSubmitted && errors.email && (
                      <p className="text-red-500 text-xs font-bold mt-1.5 ml-1 flex items-center gap-1">
                        <AlertCircle size={13} className="shrink-0" /> {errors.email}
                      </p>
                    )}
                  </div>

                  {/* Field 8: Grievance Detail */}
                  <div className="md:col-span-2">
                    <label className={labelClass}>
                      <MessageSquare size={14} className="text-[#ffc107]" /> Grievance Detail *
                    </label>
                    <textarea 
                      rows={5}
                      className={`${inputClass(hasSubmitted && errors.grievanceDetail)} resize-y min-h-[120px]`}
                      placeholder="E.g. Write your Grievance in detail" 
                      value={formData.grievanceDetail} 
                      onChange={e => {
                        const val = e.target.value
                        setFormData({ ...formData, grievanceDetail: val })
                        if (hasSubmitted) setErrors(prev => ({ ...prev, grievanceDetail: validateGrievanceDetail(val) }))
                      }}
                    />
                    {hasSubmitted && errors.grievanceDetail && (
                      <p className="text-red-500 text-xs font-bold mt-1.5 ml-1 flex items-center gap-1">
                        <AlertCircle size={13} className="shrink-0" /> {errors.grievanceDetail}
                      </p>
                    )}
                  </div>

                </div>

                {submitError && (
                  <div className="mt-6 p-4 rounded-xl bg-red-50 text-red-600 text-xs font-bold flex items-center gap-2">
                    <AlertCircle size={15} className="shrink-0" />
                    <span>{submitError}</span>
                  </div>
                )}

                {/* Submit Action */}
                <div className="mt-10 pt-6 border-t border-slate-100 flex items-center justify-end">
                  <button
                    type="submit"
                    disabled={submitting}
                    className="w-full sm:w-auto px-10 py-4 bg-[#224292] text-white rounded-2xl font-black uppercase text-[11px] tracking-widest hover:bg-[#ffc107] hover:text-[#224292] shadow-xl hover:shadow-2xl transition-all flex items-center justify-center gap-3 disabled:opacity-50"
                  >
                    {submitting ? (
                      <>
                        <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                        <span>Submitting...</span>
                      </>
                    ) : (
                      <>
                        <Send size={15} />
                        <span>Submit Grievance</span>
                      </>
                    )}
                  </button>
                </div>
              </div>

            </form>
          )}
        </AnimatePresence>
      </div>

    </div>
  )
}
