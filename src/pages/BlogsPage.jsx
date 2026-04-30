import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { 
  Calendar, User, Search, BookOpen, ChevronRight
} from 'lucide-react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const API_BASE_URL = 'http://localhost:8000'

const BlogsPage = () => {
    const [blogs, setBlogs] = useState([])
    const [loading, setLoading] = useState(true)
    const [searchQuery, setSearchQuery] = useState('')
    const [currentPage, setCurrentPage] = useState(1)
    const cardsPerPage = 6
    const navigate = useNavigate()

    useEffect(() => {
        window.scrollTo(0, 0)
        fetchBlogs()
    }, [])

    const fetchBlogs = async () => {
        setLoading(true)
        try {
            const res = await axios.get(`${API_BASE_URL}/api/blogs`)
            // Only show published blogs that are not in trash
            const publishedBlogs = res.data.filter(blog => 
                blog.status === 'Published' && !blog.in_trash
            )
            // Sort by Date primarily (if exists) or ID (newest first)
            setBlogs(publishedBlogs.sort((a, b) => b.id - a.id))
        } catch (err) {
            console.error("Failed to fetch blogs:", err)
        } finally {
            setLoading(false)
        }
    }

    const filteredBlogs = blogs.filter(blog => {
        const matchesSearch = blog.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                            blog.excerpt?.toLowerCase().includes(searchQuery.toLowerCase())
        return matchesSearch
    })

    // Pagination Logic
    const indexOfLastBlog = currentPage * cardsPerPage
    const indexOfFirstBlog = indexOfLastBlog - cardsPerPage
    const currentBlogs = filteredBlogs.slice(indexOfFirstBlog, indexOfLastBlog)
    const totalPages = Math.ceil(filteredBlogs.length / cardsPerPage)

    const paginate = (pageNumber) => {
        setCurrentPage(pageNumber)
        window.scrollTo({ top: 400, behavior: 'smooth' })
    }

    return (
        <div className="min-h-screen bg-[#F8F9FA] font-sans overflow-hidden">
            {/* ─── Simplified Hero Section ─── */}
            <section className="relative pt-24 pb-16 text-center">
                <div className="max-w-4xl mx-auto px-6">
                    <motion.h1
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-4xl md:text-5xl font-bold text-[#1a1a1a] mb-4 tracking-tight"
                    >
                        Our Blog
                    </motion.h1>
                    <div className="w-24 h-1 bg-[#ffc107] mx-auto mb-10 rounded-full opacity-60" />
                    
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.2 }}
                        className="text-slate-900 text-lg md:text-xl font-bold max-w-2xl mx-auto leading-relaxed px-4"
                    >
                        Discover the latest news, updates, and stories from the Knowledge Institute of Technology.
                    </motion.p>
                </div>
            </section>



            {/* ─── Blog Grid ─── */}
            <div className="max-w-[1240px] mx-auto px-6 pb-24">
                {loading ? (
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[1, 2, 3, 4, 5, 6].map(i => (
                            <div key={i} className="animate-pulse bg-white rounded-2xl p-4 shadow-sm border border-slate-100 h-[420px]">
                                <div className="aspect-[16/10] bg-slate-100 rounded-xl mb-6" />
                                <div className="h-6 bg-slate-100 rounded-full w-3/4 mb-4" />
                                <div className="space-y-3">
                                    <div className="h-3 bg-slate-100 rounded-full w-full" />
                                    <div className="h-3 bg-slate-100 rounded-full w-5/6" />
                                </div>
                            </div>
                        ))}
                    </div>
                ) : filteredBlogs.length === 0 ? (
                    <div className="py-20 text-center">
                        <BookOpen size={48} className="mx-auto text-slate-200 mb-6" />
                        <h3 className="text-xl font-bold text-[#224292] mb-2">No Articles Found</h3>
                        <p className="text-slate-400 text-sm">Try a different search term or category</p>
                    </div>
                ) : (
                    <>
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
                            {currentBlogs.map((blog, idx) => (
                                <motion.div
                                    key={blog.id}
                                    initial={{ opacity: 0, scale: 0.95 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{ delay: idx * 0.05 }}
                                    className="group bg-white rounded-2xl border border-slate-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 overflow-hidden cursor-pointer flex flex-col h-full"
                                    onClick={() => navigate(`/blog/${blog.slug}`)}
                                >
                                    {/* Image Container */}
                                    <div className="relative aspect-[16/10] overflow-hidden">
                                        {blog.featured_image || blog.image ? (
                                            <img 
                                                src={blog.featured_image || blog.image} 
                                                alt={blog.title}
                                                className="w-full h-full object-cover transition-transform duration-500"
                                            />
                                        ) : (
                                            <div className="w-full h-full bg-[#224292]/5 flex items-center justify-center">
                                                <BookOpen size={40} className="text-[#224292]/20" />
                                            </div>
                                        )}
                                        <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                                    </div>

                                    {/* Content Section */}
                                    <div className="p-6 pb-7 flex flex-col flex-1">
                                        <div className="flex items-center gap-5 text-[10px] font-black text-slate-600 uppercase tracking-widest mb-4">
                                            <div className="flex items-center gap-2">
                                                <Calendar size={13} className="text-[#ffc107]" />
                                                <span>{blog.publish_date}</span>
                                            </div>
                                        </div>

                                        <h3 className="text-xl font-black text-black mb-3 leading-[1.4] line-clamp-2 group-hover:text-[#224292] transition-colors">
                                            {blog.title}
                                        </h3>

                                        <p className="text-slate-900 text-[15px] leading-relaxed mb-6 line-clamp-3 font-bold">
                                            {blog.excerpt || (blog.content ? blog.content.replace(/<[^>]*>/g, '').substring(0, 150) + '...' : '')}
                                        </p>

                                        <div className="mt-auto flex items-center text-[#224292] font-bold text-[11px] uppercase tracking-[0.2em] gap-2 group/btn">
                                            <span>Read Story</span>
                                            <div className="w-8 h-8 rounded-full bg-[#224292]/5 flex items-center justify-center group-hover/btn:bg-[#224292] group-hover/btn:text-white transition-all">
                                                <ChevronRight size={14} className="group-hover/btn:translate-x-0.5 transition-transform" />
                                            </div>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>

                        {/* ─── Modern Pagination ─── */}
                        {totalPages > 1 && (
                            <div className="mt-20 flex items-center justify-center gap-3">
                                {[...Array(totalPages)].map((_, i) => (
                                    <button
                                        key={i + 1}
                                        onClick={() => paginate(i + 1)}
                                        className={`w-12 h-12 rounded-2xl font-bold text-xs uppercase tracking-widest transition-all ${
                                            currentPage === i + 1
                                            ? 'bg-[#224292] text-white shadow-lg shadow-[#224292]/20'
                                            : 'bg-white text-slate-400 hover:bg-slate-50 border border-slate-100 hover:border-slate-200'
                                        }`}
                                    >
                                        {i + 1}
                                    </button>
                                ))}
                            </div>
                        )}
                    </>
                )}
            </div>
        </div>
    )
}

export default BlogsPage
