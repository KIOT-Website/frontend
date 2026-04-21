import { useState, useEffect } from 'react'
import { useParams, Link, useNavigate } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { 
    Calendar, Clock, User, ArrowLeft, Share2, 
    MessageSquare, Bookmark, ChevronRight, 
    Facebook, Twitter, Linkedin, Link as LinkIcon,
    AlertCircle, Loader2
} from 'lucide-react'
import axios from 'axios'

const API_BASE_URL = 'http://localhost:8000'

const BlogDetailPage = () => {
    const { slug } = useParams()
    const navigate = useNavigate()
    const [blog, setBlog] = useState(null)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(false)
    const [showShareTooltip, setShowShareTooltip] = useState(false)

    useEffect(() => {
        window.scrollTo(0, 0)
        fetchBlog()
    }, [slug])

    const fetchBlog = async () => {
        setLoading(true)
        setError(false)
        try {
            const res = await axios.get(`${API_BASE_URL}/api/blogs`)
            const found = res.data.find(b => b.slug === slug && b.status === 'Published' && !b.in_trash)
            
            if (found) {
                setBlog(found)
            } else {
                setError(true)
            }
        } catch (err) {
            console.error("Failed to fetch blog details:", err)
            setError(true)
        } finally {
            setLoading(false)
        }
    }

    const shareUrl = window.location.href

    const copyToClipboard = () => {
        navigator.clipboard.writeText(shareUrl)
        setShowShareTooltip(true)
        setTimeout(() => setShowShareTooltip(false), 2000)
    }

    if (loading) {
        return (
            <div className="min-h-screen flex flex-col items-center justify-center bg-white">
                <Loader2 size={48} className="animate-spin text-[#18357a] mb-6" />
                <p className="text-[10px] font-black uppercase tracking-[0.4em] text-[#18357a]">Loading Story...</p>
            </div>
        )
    }

    if (error || !blog) {
        return (
            <div className="min-h-screen flex flex-col items-center justify-center bg-[#FCFDFD] p-6 text-center">
                <AlertCircle size={64} className="text-slate-100 mb-6" />
                <h2 className="text-3xl font-black text-[#18357a] mb-4 uppercase tracking-tighter">Story Not Found</h2>
                <p className="text-slate-500 mb-10 max-w-md mx-auto">The article you are looking for might have been moved or is no longer available.</p>
                <Link to="/resources/blogs" className="inline-flex items-center gap-3 bg-[#18357a] text-white px-10 py-4 rounded-[2rem] font-black text-[10px] uppercase tracking-widest hover:bg-[#ffc107] hover:text-[#18357a] transition-all shadow-xl shadow-[#18357a]/20">
                    <ArrowLeft size={16} /> Back to Stories
                </Link>
            </div>
        )
    }

    return (
        <div className="min-h-screen bg-white font-graphik overflow-hidden selection:bg-[#ffc107]/20">
            {/* ─── Reading Progress Bar ─── */}
            <motion.div 
                className="fixed top-0 left-0 right-0 h-1.5 bg-[#ffc107] z-[100] origin-left"
                initial={{ scaleX: 0 }}
                style={{ scaleX: 0 }} // Corrected via scroll hook later if needed
            />

            {/* ─── Navigation & Header ─── */}
            <div className="max-w-4xl mx-auto px-6 lg:px-10 pt-12 pb-20">
                <Link 
                    to="/resources/blogs" 
                    className="inline-flex items-center gap-3 mb-12 text-[#18357a] hover:text-[#ffc107] transition-all text-[11px] font-black uppercase tracking-widest group"
                >
                    <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" /> Back to Stories
                </Link>

                <div className="flex flex-wrap items-center gap-4 mb-8">
                    <span className="px-5 py-1.5 bg-[#18357a]/5 rounded-full text-[10px] font-black text-[#18357a] uppercase tracking-widest">
                        {blog.category || 'Technology'}
                    </span>
                    <div className="flex items-center gap-2 text-slate-400">
                        <Calendar size={14} />
                        <span className="text-[10px] font-black uppercase tracking-widest">{blog.publish_date}</span>
                    </div>
                </div>

                <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-[#18357a] mb-10 leading-[1.1] tracking-tight">
                    {blog.title}
                </h1>

                <div className="flex flex-wrap items-center justify-between gap-8 pb-12 border-b border-slate-100">
                    <div className="flex items-center gap-4">
                        <div className="w-14 h-14 rounded-2xl bg-[#ffc107] flex items-center justify-center text-[#18357a] font-black text-lg">
                            {blog.author?.[0] || 'K'}
                        </div>
                        <div>
                            <p className="text-sm font-black text-[#18357a] uppercase tracking-wider">{blog.author || 'Institutional Admin'}</p>
                            <p className="text-[10px] font-semibold text-slate-400 uppercase tracking-widest">Thought Leadership Team</p>
                        </div>
                    </div>

                    <div className="flex items-center gap-3">
                        <button 
                            onClick={copyToClipboard}
                            className="w-12 h-12 flex items-center justify-center rounded-2xl bg-slate-50 text-slate-400 hover:bg-[#18357a] hover:text-white transition-all relative"
                            title="Copy link"
                        >
                            <LinkIcon size={18} />
                            <AnimatePresence>
                                {showShareTooltip && (
                                    <motion.div 
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: 10 }}
                                        className="absolute -top-12 left-1/2 -translate-x-1/2 bg-[#18357a] text-white text-[9px] font-black uppercase px-3 py-1.5 rounded-lg whitespace-nowrap shadow-xl shadow-black/20"
                                    >
                                        Linked Copied!
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </button>
                        <a 
                            href={`https://twitter.com/intent/tweet?url=${shareUrl}`} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="w-12 h-12 flex items-center justify-center rounded-2xl bg-slate-50 text-slate-400 hover:bg-[#00acee] hover:text-white transition-all"
                        >
                            <Twitter size={18} />
                        </a>
                        <a 
                            href={`https://www.linkedin.com/sharing/share-offsite/?url=${shareUrl}`} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="w-12 h-12 flex items-center justify-center rounded-2xl bg-slate-50 text-slate-400 hover:bg-[#0077b5] hover:text-white transition-all"
                        >
                            <Linkedin size={18} />
                        </a>
                    </div>
                </div>
            </div>

            {/* ─── Featured Image ─── */}
            {(blog.featured_image || blog.image) && (
                <div className="max-w-6xl mx-auto px-6 mb-20">
                    <motion.div 
                        initial={{ opacity: 0, scale: 0.98 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="w-full aspect-[21/9] rounded-[3rem] overflow-hidden shadow-2xl relative"
                    >
                        <img 
                            src={blog.featured_image || blog.image} 
                            alt={blog.featured_image_alt || blog.title} 
                            className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-at from-black/20 to-transparent" />
                    </motion.div>
                    {blog.featured_image_alt && (
                        <p className="mt-6 text-center text-[10px] font-black text-slate-300 uppercase tracking-widest">{blog.featured_image_alt}</p>
                    )}
                </div>
            )}

            {/* ─── Article Body ─── */}
            <div className="max-w-4xl mx-auto px-6 lg:px-10 pb-32">
                <article 
                    className="prose prose-lg md:prose-xl max-w-none prose-slate prose-headings:font-black prose-headings:text-[#18357a] prose-p:text-[#333] prose-p:leading-[1.8] prose-p:font-medium prose-a:text-[#ffc107] prose-img:rounded-[2rem] prose-img:shadow-xl"
                    dangerouslySetInnerHTML={{ __html: blog.content }}
                />

                {/* Second Featured Image Interaction if present */}
                {blog.second_image && (
                   <div className="my-20 p-8 md:p-12 bg-slate-50 rounded-[3rem] border border-slate-100 flex flex-col md:flex-row gap-12 items-center">
                     <div className="w-full md:w-1/2 aspect-square rounded-[2rem] overflow-hidden shadow-lg border-4 border-white">
                        <img src={blog.second_image} alt={blog.second_image_alt || "Research context"} className="w-full h-full object-cover" />
                     </div>
                     <div className="w-full md:w-1/2">
                        <h3 className="text-2xl font-black text-[#18357a] mb-6 uppercase tracking-tighter leading-tight">{blog.second_image_title || "Deep Tech Context"}</h3>
                        <p className="text-slate-500 font-medium leading-relaxed italic border-l-4 border-[#ffc107] pl-6 mb-8 text-[15px]">
                            {blog.second_image_caption || "Visualising technical data helps in better understanding the innovation roadmap at KIOT."}
                        </p>
                     </div>
                   </div>
                )}

                {/* Tags */}
                {blog.tags && (
                    <div className="mt-20 pt-12 border-t border-slate-100 flex flex-wrap gap-3">
                        {blog.tags.split(',').map(tag => (
                            <span key={tag} className="px-5 py-2 bg-slate-100 rounded-xl text-[10px] font-black text-[#64779F] uppercase tracking-widest">
                                # {tag.trim()}
                            </span>
                        ))}
                    </div>
                )}

                {/* Footer Section - Call to Action */}
                <div className="mt-24 p-12 lg:p-16 bg-[#18357a] rounded-[4rem] text-white flex flex-col items-center justify-center text-center relative overflow-hidden group shadow-2xl">
                    <div className="absolute inset-0 bg-gradient-to-br from-[#18357a] via-[#1a3a8a] to-[#ffc107]/10" />
                    <div className="relative z-10 w-full">
                        <h4 className="text-3xl font-black mb-6 tracking-tight leading-tight uppercase">Enjoyed this story?</h4>
                        <p className="text-white/60 font-medium mb-10 max-w-lg mx-auto">Stay connected with our technical insights and institutional updates. Share this with your fellow researchers and friends.</p>
                        <div className="flex flex-wrap justify-center gap-6">
                            <Link to="/resources/blogs" className="px-10 py-4 bg-white text-[#18357a] rounded-[2rem] font-black text-[10px] uppercase tracking-widest hover:bg-[#ffc107] transition-all shadow-xl shadow-black/10">
                                Explore All Stories
                            </Link>
                            <button 
                                onClick={copyToClipboard}
                                className="px-10 py-4 bg-white/10 border border-white/20 text-white rounded-[2rem] font-black text-[10px] uppercase tracking-widest hover:bg-white/20 transition-all"
                            >
                                Share Article
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BlogDetailPage
