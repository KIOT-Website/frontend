import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, X, Send, User, Bot, ChevronRight } from 'lucide-react';
import studentAvatar from '../../assets/main/chatbot_avatar.png';

const ChatBot = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState([
        { id: 1, type: 'bot', text: 'Hello! Welcome to KIOT. How can I help you today?' }
    ]);
    const [inputValue, setInputValue] = useState('');
    const scrollRef = useRef(null);

    const quickActions = [
        { id: 'admission', text: 'Admission Details', response: 'For admission details, please visit our Admissions portal or contact us at +91 98947 01234.' },
        { id: 'courses', text: 'Courses Offered', response: 'We offer various UG and PG courses in Engineering, Technology, and Management. Which department are you interested in?' },
        { id: 'placement', text: 'Placement Records', response: 'KIOT has an excellent placement record with 500+ recruiters. Our highest package is 12 LPA.' },
        { id: 'contact', text: 'Contact Office', response: 'You can reach our main office at info@kiot.ac.in or call 0427-2430399.' }
    ];

    useEffect(() => {
        if (scrollRef.current) {
            scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
        }
    }, [messages]);

    const handleSend = (text) => {
        if (!text.trim()) return;

        // Add user message
        const userMsg = { id: Date.now(), type: 'user', text };
        setMessages(prev => [...prev, userMsg]);
        setInputValue('');

        // Simulate Bot Response
        setTimeout(() => {
            let botResponse = "I'm sorry, I don't have information on that yet. Please contact our support team.";
            
            // Basic matching for demo
            const lowerText = text.toLowerCase();
            if (lowerText.includes('admission')) botResponse = quickActions[0].response;
            else if (lowerText.includes('course')) botResponse = quickActions[1].response;
            else if (lowerText.includes('placement')) botResponse = quickActions[2].response;
            else if (lowerText.includes('contact')) botResponse = quickActions[3].response;

            setMessages(prev => [...prev, { id: Date.now() + 1, type: 'bot', text: botResponse }]);
        }, 1000);
    };

    return (
        <div className="fixed bottom-20 right-6 z-[9998] font-graphik">
            {/* Chat Window */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8, y: 50, transformOrigin: 'bottom right' }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.8, y: 50 }}
                        className="absolute bottom-16 right-0 w-[320px] sm:w-[380px] h-[500px] bg-white rounded-3xl shadow-[0_20px_50px_rgba(34,66,146,0.2)] border border-slate-100 overflow-hidden flex flex-col"
                    >
                        {/* Header */}
                        <div className="bg-[#224292] p-4 flex items-center justify-between text-white">
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 rounded-full bg-white overflow-hidden flex items-center justify-center border border-white/20">
                                    <img src={studentAvatar} alt="Avatar" className="w-full h-full object-cover" />
                                </div>
                                <div>
                                    <h3 className="font-bold text-sm">KIOT Assistant</h3>
                                    <div className="flex items-center gap-1.5">
                                        <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                                        <span className="text-[10px] text-white/70">Online</span>
                                    </div>
                                </div>
                            </div>
                            <button 
                                onClick={() => setIsOpen(false)}
                                className="p-2 hover:bg-white/10 rounded-full transition-colors"
                            >
                                <X size={20} />
                            </button>
                        </div>

                        {/* Messages Area */}
                        <div 
                            ref={scrollRef}
                            className="flex-1 overflow-y-auto p-4 space-y-4 bg-slate-50/50"
                        >
                            {messages.map((msg) => (
                                <motion.div
                                    initial={{ opacity: 0, x: msg.type === 'bot' ? -10 : 10 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    key={msg.id}
                                    className={`flex ${msg.type === 'bot' ? 'justify-start' : 'justify-end'}`}
                                >
                                    <div className={`max-w-[80%] p-3 rounded-2xl text-xs font-medium leading-relaxed shadow-sm ${
                                        msg.type === 'bot' 
                                        ? 'bg-white text-slate-700 rounded-tl-none border border-slate-100' 
                                        : 'bg-[#224292] text-white rounded-tr-none'
                                    }`}>
                                        {msg.text}
                                    </div>
                                </motion.div>
                            ))}
                            
                            {/* Quick Actions */}
                            {messages.length === 1 && (
                                <div className="grid grid-cols-1 gap-2 pt-2">
                                    <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1">Quick Links</p>
                                    {quickActions.map((action) => (
                                        <button
                                            key={action.id}
                                            onClick={() => handleSend(action.text)}
                                            className="flex items-center justify-between p-3 bg-white border border-slate-100 rounded-xl text-left hover:border-[#ffc107] hover:bg-[#ffc107]/5 transition-all group"
                                        >
                                            <span className="text-xs font-bold text-[#224292]">{action.text}</span>
                                            <ChevronRight size={14} className="text-slate-300 group-hover:text-[#ffc107] transition-colors" />
                                        </button>
                                    ))}
                                </div>
                            )}
                        </div>

                        {/* Input Area */}
                        <div className="p-4 bg-white border-t border-slate-100">
                            <form 
                                onSubmit={(e) => { e.preventDefault(); handleSend(inputValue); }}
                                className="flex items-center gap-2"
                            >
                                <input 
                                    type="text"
                                    value={inputValue}
                                    onChange={(e) => setInputValue(e.target.value)}
                                    placeholder="Type your message..."
                                    className="flex-1 bg-slate-100 border-none rounded-xl px-4 py-3 text-xs font-medium focus:ring-2 focus:ring-[#224292] outline-none"
                                />
                                <button 
                                    type="submit"
                                    disabled={!inputValue.trim()}
                                    className="p-3 bg-[#224292] text-white rounded-xl hover:bg-[#224292]/90 transition-all disabled:opacity-50 shadow-lg shadow-[#224292]/20"
                                >
                                    <Send size={18} />
                                </button>
                            </form>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Floating Toggle Button */}
            <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setIsOpen(!isOpen)}
                className={`w-14 h-14 rounded-full flex items-center justify-center shadow-2xl transition-all duration-300 overflow-hidden ${
                    isOpen ? 'bg-white text-[#224292]' : 'bg-[#224292] text-white'
                }`}
            >
                {isOpen ? <X size={28} /> : <img src={studentAvatar} alt="Chat" className="w-full h-full object-cover" />}
                
                {/* Notification Badge */}
                {!isOpen && (
                    <span className="absolute top-0 right-0 w-4 h-4 bg-[#ffc107] rounded-full border-2 border-white animate-bounce" />
                )}
            </motion.button>
        </div>
    );
};

export default ChatBot;
