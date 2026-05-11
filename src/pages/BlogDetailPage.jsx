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
    const [comments, setComments] = useState([])
    const [commentData, setCommentData] = useState({ name: '', email: '', message: '' })
    const [submittingComment, setSubmittingComment] = useState(false)
    const [commentSuccess, setCommentSuccess] = useState(false)

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
                fetchComments(found.id)
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

    const fetchComments = async (blogId) => {
        try {
            const res = await axios.get(`${API_BASE_URL}/api/blogs/${blogId}/comments`)
            // Only show approved comments
            setComments(res.data.filter(c => c.status === 'approved'))
        } catch (err) {
            console.error("Failed to fetch comments:", err)
        }
    }

    const handleCommentSubmit = async (e) => {
        e.preventDefault()
        setSubmittingComment(true)
        try {
            await axios.post(`${API_BASE_URL}/api/blogs/${blog.id}/comments`, commentData)
            setCommentSuccess(true)
            setCommentData({ name: '', email: '', message: '' })
            setTimeout(() => setCommentSuccess(false), 5000)
        } catch (err) {
            console.error("Failed to post comment:", err)
            alert("Failed to post comment. Please try again.")
        } finally {
            setSubmittingComment(false)
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
                <Loader2 size={48} className="animate-spin text-black mb-6" />
                <p className="text-[10px] font-black uppercase tracking-[0.4em] text-black">Loading Story...</p>
            </div>
        )
    }

    if (error || !blog) {
        return (
            <div className="min-h-screen flex flex-col items-center justify-center bg-[#FCFDFD] p-6 text-center">
                <AlertCircle size={64} className="text-slate-100 mb-6" />
                <h2 className="text-3xl font-black text-black mb-4 uppercase tracking-tighter">Story Not Found</h2>
                <p className="text-slate-500 mb-10 max-w-md mx-auto">The article you are looking for might have been moved or is no longer available.</p>
                <Link to="/resources/blogs" className="inline-flex items-center gap-3 bg-black text-white px-10 py-4 rounded-[2rem] font-black text-[10px] uppercase tracking-widest hover:bg-[#ffc107] hover:text-black transition-all shadow-xl shadow-black/20">
                    <ArrowLeft size={16} /> Back to Stories
                </Link>
            </div>
        )
    }

    return (
        <div className="min-h-screen bg-white font-graphik font-sans overflow-hidden selection:bg-[#ffc107]/20">
            {/* ─── Reading Progress Bar ─── */}
            <motion.div 
                className="fixed top-0 left-0 right-0 h-1.5 bg-[#ffc107] z-[100] origin-left"
                initial={{ scaleX: 0 }}
                style={{ scaleX: 0 }} // Corrected via scroll hook later if needed
            />

            {/* ─── Navigation & Header ─── */}
            <div className="max-w-4xl mx-auto px-6 lg:px-10 pt-12">
                <Link 
                    to="/resources/blogs" 
                    className="inline-flex items-center gap-3 mb-10 text-black hover:text-[#ffc107] transition-all text-[11px] font-black uppercase tracking-widest group"
                >
                    <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" /> Back to Stories
                </Link>
            </div>

            {/* ─── Featured Image ─── */}
            {(blog.featured_image || blog.image) && (
                <div className="max-w-4xl mx-auto px-6 lg:px-10 mb-16">
                    <div className="overflow-hidden rounded-[2.5rem] shadow-2xl border border-slate-100 bg-white" style={{ width: `${blog.featured_image_width || 100}%` }}>
                        <img 
                            src={blog.featured_image || blog.image} 
                            alt={blog.featured_image_alt || blog.title} 
                            className="w-full block"
                            style={{ 
                                height: blog.featured_image_height && blog.featured_image_height !== 'auto' 
                                    ? (blog.featured_image_height.includes('px') ? blog.featured_image_height : `${blog.featured_image_height}px`) 
                                    : 'auto',
                                objectFit: 'contain'
                            }}
                        />
                    </div>
                </div>
            )}

            {/* ─── Title & Metadata ─── */}
            <div className="max-w-4xl mx-auto px-6 lg:px-10 mb-12">
                <div className="flex items-center gap-2 text-black mb-6">
                    <Calendar size={14} className="text-black" />
                    <span className="text-[10px] font-black uppercase tracking-widest">{blog.publish_date}</span>
                </div>

                <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-black mb-0 leading-[1.1] tracking-tight">
                    {blog.title}
                </h1>
            </div>

            {/* ─── Article Body ─── */}
            <div className="max-w-4xl mx-auto px-6 lg:px-10 pb-32">
                <article 
                    className="prose prose-lg md:prose-xl max-w-none text-black prose-headings:text-black prose-p:text-black prose-p:leading-[1.8] prose-p:font-bold prose-a:text-black prose-strong:text-black prose-li:text-black prose-img:rounded-xl prose-img:shadow-lg prose-img:w-full prose-img:h-auto prose-img:object-contain"
                    dangerouslySetInnerHTML={{ __html: blog.content }}
                />

                {/* Second Featured Image Interaction if present */}
                 {blog.second_image && (
                    <div className="my-20 p-8 md:p-12 bg-slate-50 rounded-2xl border border-slate-100 flex flex-col md:flex-row gap-12 items-center">
                      <div className="w-full md:w-1/2 rounded-xl overflow-hidden shadow-lg border-4 border-white">
                         <img src={blog.second_image} alt={blog.second_image_alt || "Research context"} className="w-full h-auto block" />
                      </div>
                     <div className="w-full md:w-1/2">
                        <h3 className="text-2xl font-black text-black mb-6 uppercase tracking-tighter leading-tight">{blog.second_image_title || "Deep Tech Context"}</h3>
                        <p className="text-slate-500 font-medium leading-relaxed italic border-l-4 border-[#ffc107] pl-6 mb-8 text-[15px]">
                            {blog.second_image_caption || "Visualising technical data helps in better understanding the innovation roadmap at KIOT."}
                        </p>
                     </div>
                   </div>
                )}

                {/* Tags */}
                {blog.tags && (
                    <div className="mt-12 pt-10 border-t border-slate-100 flex flex-wrap gap-3">
                        {blog.tags.split(',').map(tag => (
                            <span key={tag} className="px-5 py-2 bg-slate-100 rounded-xl text-[10px] font-black text-black uppercase tracking-widest">
                                # {tag.trim()}
                            </span>
                        ))}
                    </div>
                )}
                
                {/* ─── Comment Section ─── */}
                <div className="mt-12 pt-10 border-t border-slate-100 w-full">
                    {/* Comment List */}
                    {comments.length > 0 ? (
                        <div className="space-y-6 mb-20 max-w-2xl">
                            {comments.map((c, idx) => (
                                <motion.div 
                                    initial={{ opacity: 0, scale: 0.98 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{ delay: idx * 0.1 }}
                                    key={c.id} 
                                    className="p-5 bg-slate-50/50 rounded-2xl border border-slate-100"
                                >
                                    <div className="flex gap-5 items-start">
                                        <div className="w-10 h-10 rounded-xl bg-black text-white flex items-center justify-center font-black text-xs shrink-0 shadow-lg shadow-black/10">
                                            {c.name?.[0] || 'G'}
                                        </div>
                                        <div className="flex-1 min-w-0">
                                            <div className="flex items-center justify-between mb-1.5">
                                                <h4 className="text-xs font-black text-black uppercase tracking-widest truncate">{c.name}</h4>
                                                <span className="text-[8px] font-bold text-slate-400 uppercase tracking-[0.2em] shrink-0">
                                                    {new Date(c.created_at).toLocaleDateString()}
                                                </span>
                                            </div>
                                            <p className="text-black leading-relaxed font-bold text-[13px]">{c.message}</p>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    ) : (
                        <div className="py-12 px-8 bg-slate-50 rounded-2xl border border-slate-100 text-center mb-16">
                            <p className="text-[13px] font-bold text-slate-400 uppercase tracking-widest">No discussion yet. Be the first to share your thoughts.</p>
                        </div>
                    )}

                    {/* Comment Form */}
                    <div className="bg-white rounded-[2rem] p-8 md:p-12 border border-slate-100 shadow-xl shadow-slate-100/50 max-w-2xl">
                        <h4 className="text-2xl font-black text-black mb-10">Leave a Comment</h4>
                        
                        {commentSuccess ? (
                            <motion.div 
                                initial={{ opacity: 0, scale: 0.95 }}
                                animate={{ opacity: 1, scale: 1 }}
                                className="p-8 bg-green-50 border border-green-100 rounded-2xl text-center"
                            >
                                <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg shadow-green-200">
                                    <Clock className="text-white" size={24} />
                                </div>
                                <h5 className="text-green-800 font-black text-base uppercase tracking-tight mb-2">Comment Received!</h5>
                                <p className="text-green-600/80 font-bold text-xs uppercase tracking-wider">Awaiting moderation approval.</p>
                            </motion.div>
                        ) : (
                            <form onSubmit={handleCommentSubmit} className="space-y-8">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                    <div className="space-y-3">
                                        <label className="text-[13px] font-black text-black">Name <span className="text-red-500">*</span></label>
                                        <input 
                                            required
                                            type="text" 
                                            value={commentData.name}
                                            onChange={(e) => setCommentData({...commentData, name: e.target.value})}
                                            className="w-full px-5 py-4 bg-white border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-black/5 focus:border-black transition-all font-bold text-sm text-black"
                                            placeholder="Your name"
                                        />
                                    </div>
                                    <div className="space-y-3">
                                        <label className="text-[13px] font-black text-black">Email <span className="text-red-500">*</span></label>
                                        <input 
                                            required
                                            type="email" 
                                            value={commentData.email}
                                            onChange={(e) => setCommentData({...commentData, email: e.target.value})}
                                            className="w-full px-5 py-4 bg-white border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-black/5 focus:border-black transition-all font-bold text-sm text-black"
                                            placeholder="your@email.com"
                                        />
                                    </div>
                                </div>
                                <div className="space-y-3">
                                    <label className="text-[13px] font-black text-black">Message <span className="text-red-500">*</span></label>
                                    <textarea 
                                        required
                                        rows="6"
                                        value={commentData.message}
                                        onChange={(e) => setCommentData({...commentData, message: e.target.value})}
                                        className="w-full px-5 py-4 bg-white border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-black/5 focus:border-black transition-all font-bold text-sm text-black resize-none"
                                        placeholder="Write your comment here..."
                                    ></textarea>
                                </div>
                                <button 
                                    disabled={submittingComment}
                                    type="submit" 
                                    className="px-10 py-5 bg-black text-white rounded-xl font-black text-[10px] uppercase tracking-[0.3em] hover:bg-[#ffc107] hover:text-black transition-all flex items-center justify-center gap-4 disabled:opacity-50"
                                >
                                    {submittingComment ? (
                                        <Loader2 size={16} className="animate-spin" />
                                    ) : (
                                        "Post Comment"
                                    )}
                                </button>
                            </form>
                        )}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BlogDetailPage
