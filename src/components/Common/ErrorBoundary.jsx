import React from 'react'
import { RefreshCw, Home, AlertTriangle } from 'lucide-react'

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props)
    this.state = { hasError: false, error: null, isChunkError: false }
  }

  static getDerivedStateFromError(error) {
    const isChunkError =
      error?.name === 'ChunkLoadError' ||
      error?.message?.includes('Failed to fetch dynamically imported module') ||
      error?.message?.includes('Importing a module script failed') ||
      error?.message?.includes('error loading dynamically imported module')

    return { hasError: true, error, isChunkError }
  }

  componentDidCatch(error, errorInfo) {
    console.error('ErrorBoundary caught an unhandled error:', error, errorInfo)

    const isChunkError =
      error?.name === 'ChunkLoadError' ||
      error?.message?.includes('Failed to fetch dynamically imported module') ||
      error?.message?.includes('Importing a module script failed') ||
      error?.message?.includes('error loading dynamically imported module')

    if (isChunkError) {
      const lastReload = sessionStorage.getItem('eb_chunk_reload')
      const now = Date.now()
      if (!lastReload || now - parseInt(lastReload, 10) > 15000) {
        sessionStorage.setItem('eb_chunk_reload', String(now))
        window.location.reload()
      }
    }
  }

  handleReload = () => {
    try {
      sessionStorage.clear()
    } catch (_) {}
    window.location.reload()
  }

  handleGoHome = () => {
    window.location.href = '/'
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-[70vh] bg-slate-50 flex items-center justify-center p-6 font-graphik">
          <div className="bg-white max-w-lg w-full rounded-3xl p-8 md:p-10 shadow-2xl border border-slate-100 text-center space-y-6">
            <div className="w-16 h-16 bg-[#224292]/10 text-[#224292] rounded-2xl flex items-center justify-center mx-auto shadow-inner">
              <AlertTriangle size={32} className="text-[#ffc107]" />
            </div>

            <div className="space-y-2">
              <h2 className="text-2xl font-bold text-[#224292]">
                {this.state.isChunkError ? 'New Update Available' : 'Something Went Wrong'}
              </h2>
              <p className="text-slate-600 text-sm leading-relaxed">
                {this.state.isChunkError
                  ? 'We updated the portal with new enhancements. Please refresh to load the latest version.'
                  : 'An unexpected issue occurred while displaying this page. Please refresh or return to home.'}
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 justify-center pt-2">
              <button
                onClick={this.handleReload}
                className="flex items-center justify-center gap-2 px-6 py-3 bg-[#224292] hover:bg-[#1a3370] text-white font-bold rounded-xl text-sm transition-all shadow-md hover:shadow-lg active:scale-95 cursor-pointer"
              >
                <RefreshCw size={16} />
                Refresh Page
              </button>
              <button
                onClick={this.handleGoHome}
                className="flex items-center justify-center gap-2 px-6 py-3 bg-slate-100 hover:bg-slate-200 text-[#224292] font-bold rounded-xl text-sm transition-all active:scale-95 cursor-pointer"
              >
                <Home size={16} />
                Back to Home
              </button>
            </div>
          </div>
        </div>
      )
    }

    return this.props.children
  }
}

export default ErrorBoundary
