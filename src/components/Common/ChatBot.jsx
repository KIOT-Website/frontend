import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  MessageCircle, X, Send, User, Bot, ChevronRight, 
  ArrowLeft, Search, Phone, Mail, MapPin, GraduationCap,
  Building2, Trophy, Bus, BookOpen, Coffee
} from 'lucide-react';
import chatbotMan from '../../assets/main/chatbot_man.webp';
import chatbotRobot from '../../assets/main/chatbot_robot.webp';
import chatbotFull from '../../assets/main/chatbot_full.webp';
import studentAvatar from '../../assets/main/chatbot_avatar.webp';

const FAQ_DATA = {
  categories: [
    { id: 'admissions', label: 'Admissions', icon: GraduationCap, color: '#ffc107' },
    { id: 'courses', label: 'Courses', icon: BookOpen, color: '#224292' },
    { id: 'placements', label: 'Placements', icon: Trophy, color: '#10b981' },
    { id: 'hostel', label: 'Hostel & Food', icon: Coffee, color: '#f59e0b' },
    { id: 'transport', label: 'Transport', icon: Bus, color: '#6366f1' },
    { id: 'contact', label: 'Contact Us', icon: Phone, color: '#ef4444' }
  ],
  questions: {
    admissions: [
      { q: 'How to apply for admission?', a: 'You can apply online via our Admissions Portal at /admissions or visit the campus directly with your original documents.' },
      { q: 'Tell me about admissions', a: 'Admissions for 2026-27 are open. We offer UG and PG programs. You can apply online or visit our office for counseling.' },
      { q: 'What is the eligibility criteria?', a: 'Eligibility depends on the course. For B.E/B.Tech, a pass in 12th Std with Physics, Chemistry, and Maths is required.' },
      { q: 'What is the application last date?', a: 'The last date for applications for the 2026-27 session is expected to be in June. Please check the portal regularly for updates.' },
      { q: 'Are scholarships available?', a: 'Yes! We offer Merit Scholarships, Sports Scholarships, and First Graduate concessions as per government norms.' },
      { q: 'How to apply?', a: 'Visit /admissions to register online, upload documents, and pay the application fee. You can also visit our campus for offline support.' }
    ],
    courses: [
      { q: 'What courses are available?', a: 'We offer UG programs in CSE, IT, ECE, EEE, MECH, CIVIL, AI&DS, and CSBS, along with PG programs like MBA and MCA.' },
      { q: 'Is AI & DS available?', a: 'Yes, B.E. Artificial Intelligence and Data Science is one of our top-performing emerging departments.' },
      { q: 'Do you offer MBA / MCA?', a: 'Yes, we offer both MBA and MCA programs with specialized training for industry readiness.' }
    ],
    placements: [
      { q: 'Placement details', a: 'KIOT has a 95%+ placement record. Our students are placed in top companies like TCS, Wipro, and ZOHO with packages up to ₹12 LPA.' },
      { q: 'What is the highest package?', a: 'Our highest package offered to date is ₹12 LPA, with an average package of ₹4.5 LPA across departments.' },
      { q: 'Placement percentage?', a: 'We maintain a consistent 95%+ placement record with students placed in top-tier global companies.' },
      { q: 'Top recruiting companies?', a: 'Our recruiters include TCS, CTS, Wipro, ZOHO, Tech Mahindra, ITC, and many more.' }
    ],
    hostel: [
      { q: 'Hostel facilities', a: 'We provide separate, secure hostels for boys and girls with multi-cuisine food, WiFi, gym, and 24/7 medical support.' },
      { q: 'What is the fee structure?', a: 'Tuition fees start from ₹85,000/year, and Hostel fees from ₹75,000/year. Please contact admissions for a detailed PDF.' },
      { q: 'Hostel fees?', a: 'Hostel fees start from approximately ₹75,000 per year, covering both accommodation and healthy multi-cuisine food.' },
      { q: 'AC/non-AC rooms?', a: 'Both AC and non-AC rooms are available with modern amenities, study tables, and high-speed WiFi.' }
    ],
    transport: [
      { q: 'Bus routes available?', a: 'We operate 50+ buses covering Salem, Namakkal, Erode, and Dharmapuri districts. Check /campus-life/transport for routes.' },
      { q: 'Nearby railway station?', a: 'The nearest railway station is Salem Junction, which is approximately 15km from the campus.' },
      { q: 'Where is the college located?', a: 'KIOT is located at Kakapalayam, Salem, Tamil Nadu - 637504. You can find our location map on the Contact page.' }
    ],
    contact: [
      { q: 'Contact details', a: 'You can contact us at info@kiot.ac.in or call our admission cell at +91 98947 01234.' },
      { q: 'Campus facilities', a: 'Our campus features smart classrooms, advanced laboratories, a digital library, sports complexes, and 24/7 security.' },
      { q: 'Admission office number', a: 'You can reach our admission cell at +91 98947 01234 or +91 86084 85944.' },
      { q: 'Principal contact', a: 'Office of the Principal: 0427-2430399. Email: principal@kiot.ac.in.' }
    ]
  }
};

const ChatBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { id: 1, type: 'bot', text: '👋 Hi! Welcome to KIOT. How can I help you today?' }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [currentCategory, setCurrentCategory] = useState(null);
  const scrollRef = useRef(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isTyping]);

  const GREETINGS = {
    hi: 'Hello! I\'m your KIOT virtual assistant. How can I help you today?',
    hello: 'Hi there! Welcome to KIOT. What can I help you with?',
    hey: 'Hey! I\'m here to help. Feel free to ask about admissions, courses, or placements.',
    bye: 'Goodbye! Have a wonderful day. Come back anytime!',
    goodbye: 'Bye! It was a pleasure helping you. Have a great day ahead.',
    thanks: 'You\'re very welcome! I\'m glad I could help.',
    'thank you': 'My pleasure! Let me know if you need anything else.',
    who: 'I\'m the KIOT AI assistant, designed to help you navigate our campus resources and information.',
    'how are you': 'I\'m doing great, thank you for asking! Ready to help you with anything related to KIOT.',
    'how are yuo': 'I\'m doing great, thank you for asking! Ready to help you with anything related to KIOT.',
    'what can you do': 'I can help you with admissions, course details, placement records, hostel information, and more.',
    'ok': 'Perfect! Let me know if you have any questions.',
    'good morning': 'Good morning! Hope you have a productive day at KIOT.',
    'good afternoon': 'Good afternoon! How is your day going?',
    'good evening': 'Good evening! Is there anything I can help with?',
    'good night': 'Good night! Sleep well. See you tomorrow!',
    'gund night': 'Good night! Sleep well. See you tomorrow!',
    'night': 'Good night! Feel free to ask more tomorrow.'
  };

  const [suggestions, setSuggestions] = useState([]);

  useEffect(() => {
    if (inputValue.trim().length > 1) {
      const lowerInput = inputValue.toLowerCase();
      const allQuestions = Object.values(FAQ_DATA.questions).flat();
      const filtered = allQuestions.filter(item => 
        item.q.toLowerCase().includes(lowerInput)
      ).slice(0, 3);
      setSuggestions(filtered);
    } else {
      setSuggestions([]);
    }
  }, [inputValue]);

  const handleSend = (text, directResponse = null) => {
    if (!text.trim()) return;

    setMessages(prev => [...prev, { id: Date.now(), type: 'user', text }]);
    setInputValue('');
    setSuggestions([]);
    setIsTyping(true);

    setTimeout(() => {
      let reply = directResponse;
      
      if (!reply) {
        const lower = text.toLowerCase().trim();
        
        // 1. Check for greetings
        const greetingKey = Object.keys(GREETINGS).find(key => lower.includes(key));
        
        if (greetingKey) {
          reply = GREETINGS[greetingKey];
        } else {
          // 2. Check if it's a category name
          const matchedCat = FAQ_DATA.categories.find(c => lower.includes(c.label.toLowerCase()) || c.id.includes(lower));
          
          if (matchedCat) {
            setCurrentCategory(matchedCat.id);
            reply = `I found some information related to ${matchedCat.label}. Please select a specific question below! 👇`;
          } else {
            // 3. Exact/Partial Question Match
            const allQA = Object.values(FAQ_DATA.questions).flat();
            const found = allQA.find(item => lower.includes(item.q.toLowerCase()) || item.q.toLowerCase().includes(lower));
            
            if (found) {
              reply = found.a;
            } else {
              reply = "I didn't quite catch that. Could you rephrase? You can ask about: • **Admissions** • **Placements** • **Fees** • **Hostel** • Or specific courses like **CSE, ECE, B.Sc.**";
            }
          }
        }
      }

      setMessages(prev => [...prev, { id: Date.now() + 1, type: 'bot', text: reply }]);
      setIsTyping(false);
    }, 800);
  };

  return (
    <div className="fixed bottom-20 right-4 sm:bottom-24 sm:right-6 z-[9998] font-graphik">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 50, transformOrigin: 'bottom right' }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 50 }}
            className="absolute bottom-14 sm:bottom-18 right-0 w-[290px] sm:w-[380px] h-[400px] sm:h-[480px] bg-white rounded-3xl shadow-[0_20px_50px_rgba(34,66,146,0.2)] border border-slate-100 overflow-hidden flex flex-col"
          >
            {/* Header */}
            <div className="bg-[#224292] p-3 sm:p-4 flex items-center justify-between text-white shrink-0">
              <div className="flex items-center gap-2 sm:gap-3">
                <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-white overflow-hidden border border-white/20">
                  <img src={studentAvatar} alt="Avatar" className="w-full h-full object-cover" />
                </div>
                <div>
                  <h3 className="font-black text-xs sm:text-sm tracking-tight">KIOT Assistant</h3>
                </div>
              </div>
              <button onClick={() => setIsOpen(false)} className="p-1.5 sm:p-2 hover:bg-white/10 rounded-full transition-colors">
                <X size={16} className="sm:hidden" />
                <X size={20} className="hidden sm:block" />
              </button>
            </div>

            {/* Chat Area */}
            <div ref={scrollRef} className="flex-1 overflow-y-auto p-3 sm:p-4 space-y-3 sm:space-y-4 bg-slate-50/50 scroll-smooth">
              {messages.map((msg) => (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  key={msg.id}
                  className={`flex ${msg.type === 'bot' ? 'justify-start' : 'justify-end'}`}
                >
                  <div className={`max-w-[85%] p-2.5 sm:p-3.5 rounded-2xl text-[12px] sm:text-[13px] font-bold leading-relaxed shadow-sm ${
                    msg.type === 'bot' 
                    ? 'bg-[#F1F5F9] text-slate-800 rounded-tl-none border border-slate-200' 
                    : 'bg-[#224292] text-white rounded-tr-none'
                  }`}>
                    {msg.text.split('**').map((part, i) => (
                      i % 2 === 1 ? <span key={i} className="font-black text-[#224292]">{part}</span> : part
                    ))}
                  </div>
                </motion.div>
              ))}

              {isTyping && (
                <div className="flex justify-start">
                  <div className="bg-white p-2.5 sm:p-3 rounded-2xl rounded-tl-none border border-slate-200 flex gap-1 items-center">
                    <span className="w-1.5 h-1.5 bg-[#224292]/40 rounded-full animate-bounce" />
                    <span className="w-1.5 h-1.5 bg-[#224292]/40 rounded-full animate-bounce [animation-delay:0.2s]" />
                    <span className="w-1.5 h-1.5 bg-[#224292]/40 rounded-full animate-bounce [animation-delay:0.4s]" />
                  </div>
                </div>
              )}

              {/* Questions Area (Only show when a category is selected via search/type) */}
              {currentCategory && (
                <div className="space-y-1.5 sm:space-y-2 pt-1 sm:pt-2">
                  <button 
                    onClick={() => setCurrentCategory(null)}
                    className="flex items-center gap-1.5 sm:gap-2 text-[9px] sm:text-[10px] font-black text-[#224292] uppercase tracking-widest mb-2 sm:mb-3 hover:text-[#ffc107] transition-colors"
                  >
                    <ArrowLeft size={12} className="sm:hidden" />
                    <ArrowLeft size={14} className="hidden sm:block" /> Back to Search
                  </button>
                  {FAQ_DATA.questions[currentCategory].map((item, idx) => (
                    <button
                      key={idx}
                      onClick={() => handleSend(item.q, item.a)}
                      className="w-full text-left p-2.5 sm:p-3 bg-white border border-slate-200 rounded-xl hover:border-[#224292] transition-all group flex items-center justify-between shadow-sm"
                    >
                      <span className="text-[11px] sm:text-[12px] font-bold text-slate-700">{item.q}</span>
                      <ChevronRight size={12} className="text-slate-300 group-hover:text-[#224292] sm:hidden" />
                      <ChevronRight size={14} className="text-slate-300 group-hover:text-[#224292] hidden sm:block" />
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Suggestions Overlay */}
            <AnimatePresence>
              {suggestions.length > 0 && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  className="px-3 py-1.5 sm:px-4 sm:py-2 bg-white border-t border-slate-100 space-y-1 sm:space-y-1.5 shadow-[0_-10px_20px_rgba(0,0,0,0.05)]"
                >
                  <p className="text-[8px] sm:text-[9px] font-black text-slate-400 uppercase tracking-widest px-1">Suggested Questions</p>
                  {suggestions.map((item, i) => (
                    <button
                      key={i}
                      onClick={() => handleSend(item.q, item.a)}
                      className="w-full text-left p-1.5 sm:p-2 bg-slate-50 hover:bg-[#ffc107]/10 rounded-lg text-[10px] sm:text-[11px] font-bold text-[#224292] transition-colors flex items-center gap-1.5 sm:gap-2"
                    >
                      <Search size={10} className="text-[#ffc107] sm:hidden" />
                      <Search size={12} className="text-[#ffc107] hidden sm:block" />
                      <span className="truncate">{item.q}</span>
                    </button>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>

            {/* Input */}
            <div className="p-3 sm:p-4 bg-white border-t border-slate-100 shrink-0">
              <form 
                onSubmit={(e) => { e.preventDefault(); handleSend(inputValue); }}
                className="flex items-center gap-1.5 sm:gap-2 bg-slate-100 p-0.5 sm:p-1 rounded-2xl border border-slate-200"
              >
                <input 
                  type="text"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  placeholder="Ask about admissions, fees, hostel..."
                  className="flex-1 bg-transparent border-none px-3 py-1.5 sm:px-4 sm:py-2 text-[12px] sm:text-[13px] font-bold text-[#224292] outline-none placeholder:text-slate-400"
                />
                <button 
                  type="submit"
                  disabled={!inputValue.trim()}
                  className="p-2 sm:p-3 bg-[#224292] text-white rounded-xl hover:bg-[#224292]/90 disabled:opacity-50 transition-all shadow-lg"
                >
                  <Send size={14} className="sm:hidden" />
                  <Send size={18} className="hidden sm:block" />
                </button>
              </form>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* FAB */}
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsOpen(!isOpen)}
        className={`relative w-12 h-12 sm:w-16 sm:h-16 rounded-full flex items-center justify-center shadow-[0_15px_40px_rgba(34,66,146,0.3)] transition-all duration-500 overflow-hidden ${
          isOpen ? 'bg-white border-2 border-[#224292]' : 'bg-[#224292]'
        }`}
      >
        {isOpen ? (
          <X className="w-5 h-5 sm:w-7 sm:h-7 text-[#224292]" />
        ) : (
          <>
            <img src={studentAvatar} alt="Chat" className="w-full h-full object-cover scale-110" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#224292]/40 to-transparent pointer-events-none" />
          </>
        )}
        {!isOpen && (
          <span className="absolute top-0.5 right-0.5 w-3 h-3 sm:top-1 sm:right-1 sm:w-4 sm:h-4 bg-[#ffc107] rounded-full border-2 border-white animate-bounce shadow-md" />
        )}
      </motion.button>
    </div>
  );
};

export default ChatBot;

