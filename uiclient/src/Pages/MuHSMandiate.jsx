import React, { useState, useEffect } from 'react'

const MuHSMandiate = () => {
  const [pdfs, setPdfs] = useState([])
  const [selectedPdf, setSelectedPdf] = useState(null)
  const [loading, setLoading] = useState(true)
  const [searchTerm, setSearchTerm] = useState('')
  const [viewMode, setViewMode] = useState('grid') // 'grid' or 'list'

  // Utility: build clean title from filename
  const getTitleFromPath = (path) => {
    const file = path.split('/').pop() || ''
    const name = file.replace(/\.pdf$/i, '').replace(/[-_]/g, ' ')
    return name.charAt(0).toUpperCase() + name.slice(1)
  }

  // Generate random pastel color for book spine
  const getBookColor = (index) => {
    const colors = [
      'from-pink-200 to-pink-300',
      'from-orange-200 to-orange-300',
      'from-emerald-200 to-emerald-300',
      'from-blue-200 to-blue-300',
      'from-purple-200 to-purple-300',
      'from-rose-200 to-rose-300',
      'from-amber-200 to-amber-300',
      'from-teal-200 to-teal-300',
      'from-indigo-200 to-indigo-300',
      'from-fuchsia-200 to-fuchsia-300'
    ]
    return colors[index % colors.length]
  }

  // Handle ESC key press
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === 'Escape') {
        setSelectedPdf(null)
      }
    }
    window.addEventListener('keydown', handleEsc)
    return () => window.removeEventListener('keydown', handleEsc)
  }, [])

  useEffect(() => {
    // Using Vite's import.meta.glob to get all PDFs from src/assets/MUSH/
    const loadPdfs = async () => {
      try {
        // This finds all PDF files in the src/assets/MUSH/ directory
        const pdfModules = import.meta.glob('../assets/MUSH/*.pdf')
        
        const pdfPromises = Object.entries(pdfModules).map(async ([path, importFunction], index) => {
          const module = await importFunction()
          
          // Extract filename from path
          const fullPath = path.split('/')
          const filenameWithExt = fullPath[fullPath.length - 1]
          
          return {
            id: index,
            url: module.default, // The PDF URL
            name: filenameWithExt,
            title: getTitleFromPath(filenameWithExt),
            color: getBookColor(index)
          }
        })

        const loadedPdfs = await Promise.all(pdfPromises)
        
        // Sort PDFs by filename
        const sortedPdfs = loadedPdfs.sort((a, b) => a.name.localeCompare(b.name))
        
        setPdfs(sortedPdfs)
      } catch (error) {
        console.error('Error loading PDFs:', error)
        setPdfs([])
      } finally {
        setLoading(false)
      }
    }

    loadPdfs()
  }, [])

  // Filter PDFs based on search
  const filteredPdfs = pdfs.filter(pdf => 
    pdf.title.toLowerCase().includes(searchTerm.toLowerCase())
  )

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-pink-50 to-orange-50">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-pink-600 via-purple-600 to-indigo-600 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/20" />
        <div className="absolute inset-0 bg-[url('/noise.svg')] opacity-10" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
          <div className="max-w-3xl mx-auto text-center">
            <span className="inline-flex items-center rounded-full bg-white/20 backdrop-blur-sm px-4 py-2 text-sm font-semibold mb-6 border border-white/30">
              📚 MUHS Digital Library
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              MUHS Mandate & Documents
            </h1>
            <p className="text-xl text-white/90 max-w-2xl mx-auto mb-8">
              Official MUHS-related documents, mandates, and guidelines for Saraswati Nursing College.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full border border-white/30">
                <span className="text-lg">📚</span>
                <span className="text-sm font-medium">{pdfs.length} Documents</span>
              </div>
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full border border-white/30">
                <span className="text-lg">📁</span>
                <span className="text-sm font-medium">MUHS Archives</span>
              </div>
            </div>
          </div>
        </div>

        {/* Wave Divider */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 120L60 105C120 90 240 60 360 45C480 30 600 30 720 37.5C840 45 960 60 1080 67.5C1200 75 1320 75 1380 75L1440 75V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" 
              className="fill-white/10" />
          </svg>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-12 relative z-10">
        {loading ? (
          <div className="bg-white/90 backdrop-blur-sm rounded-3xl shadow-2xl p-20 text-center">
            <div className="relative inline-block">
              <div className="w-20 h-20 border-4 border-pink-200 border-t-pink-600 rounded-full animate-spin"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-2xl">📚</span>
              </div>
            </div>
            <p className="text-lg text-slate-600 mt-6">Loading MUHS documents...</p>
            <p className="text-sm text-slate-500 mt-2">Building digital library</p>
          </div>
        ) : pdfs.length === 0 ? (
          <div className="bg-white/90 backdrop-blur-sm rounded-3xl shadow-2xl p-16 text-center border-2 border-dashed border-pink-300">
            <div className="w-28 h-28 bg-gradient-to-br from-pink-100 to-orange-100 rounded-3xl flex items-center justify-center mx-auto mb-6">
              <span className="text-5xl">📚</span>
            </div>
            <h2 className="text-3xl font-bold text-slate-900 mb-4">No Documents Found</h2>
            <p className="text-lg text-slate-600 mb-6 max-w-2xl mx-auto">
              Please add PDF files to build your digital library:
            </p>
            <div className="bg-slate-100 rounded-2xl p-6 max-w-lg mx-auto">
              <pre className="text-sm bg-white p-4 rounded-xl text-slate-700 font-mono overflow-x-auto">
                src/
                ├── assets/
                │   └── MUSH/     ← Add your PDFs here
                │       ├── muhs-mandate-2024.pdf
                │       ├── bsc-nursing-guidelines.pdf
                │       └── academic-calendar.pdf
                └── pages/
                    └── MushMandiate.jsx
              </pre>
            </div>
          </div>
        ) : (
          <>
            {/* Search and Filter Bar */}
            <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl p-6 mb-8">
              <div className="flex flex-col lg:flex-row gap-4 items-center justify-between">
                <div className="relative flex-1 w-full">
                  <input
                    type="text"
                    placeholder="Search documents..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-12 pr-4 py-3 rounded-xl border border-slate-200 focus:border-pink-300 focus:ring-2 focus:ring-pink-200 outline-none transition-all"
                  />
                  <svg className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-sm text-slate-500">View:</span>
                  <div className="flex gap-1 bg-slate-100 p-1 rounded-xl">
                    <button
                      onClick={() => setViewMode('grid')}
                      className={`px-4 py-2 rounded-lg font-medium transition-all ${
                        viewMode === 'grid'
                          ? 'bg-gradient-to-r from-pink-600 to-orange-600 text-white shadow-lg'
                          : 'text-slate-600 hover:text-pink-600'
                      }`}
                    >
                      <span className="flex items-center gap-2">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
                        </svg>
                        Grid
                      </span>
                    </button>
                    <button
                      onClick={() => setViewMode('list')}
                      className={`px-4 py-2 rounded-lg font-medium transition-all ${
                        viewMode === 'list'
                          ? 'bg-gradient-to-r from-pink-600 to-orange-600 text-white shadow-lg'
                          : 'text-slate-600 hover:text-pink-600'
                      }`}
                    >
                      <span className="flex items-center gap-2">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                        List
                      </span>
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Books Grid */}
            {viewMode === 'grid' ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                {filteredPdfs.map((pdf) => (
                  <div
                    key={pdf.id}
                    onClick={() => setSelectedPdf(pdf)}
                    className="group relative cursor-pointer transform hover:-translate-y-2 transition-all duration-300"
                  >
                    {/* Book Container */}
                    <div className="relative perspective">
                      {/* Book Cover */}
                      <div className="relative bg-white rounded-xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300">
                        {/* Book Spine Effect */}
                        <div className={`absolute left-0 top-0 bottom-0 w-4 bg-gradient-to-r ${pdf.color} shadow-inner`} />
                        
                        {/* Main Cover */}
                        <div className="ml-4 p-6">
                          {/* Decorative Lines */}
                          <div className="flex gap-1 mb-4">
                            <div className="w-2 h-2 rounded-full bg-pink-400"></div>
                            <div className="w-2 h-2 rounded-full bg-orange-400"></div>
                            <div className="w-2 h-2 rounded-full bg-emerald-400"></div>
                          </div>

                          {/* Icon */}
                          <div className="mb-4">
                            <span className="text-5xl block transform group-hover:scale-110 transition-transform">
                              📘
                            </span>
                          </div>

                          {/* Title */}
                          <h3 className="font-bold text-lg text-slate-900 mb-2 line-clamp-2">
                            {pdf.title}
                          </h3>

                          {/* Metadata */}
                          <div className="space-y-2 text-sm">
                            <div className="flex items-center gap-2 text-slate-600">
                              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                              </svg>
                              <span>MUHS Document</span>
                            </div>
                          </div>

                          {/* View Button */}
                          <div className="mt-4 opacity-0 group-hover:opacity-100 transition-opacity">
                            <span className="inline-flex items-center gap-2 text-pink-600 font-semibold text-sm">
                              Read Document
                              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                              </svg>
                            </span>
                          </div>
                        </div>

                        {/* Page Effect */}
                        <div className="absolute right-0 top-2 bottom-2 w-2 bg-gradient-to-l from-slate-300 to-transparent rounded-r-xl" />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              /* List View */
              <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl overflow-hidden">
                <div className="divide-y divide-slate-200">
                  {filteredPdfs.map((pdf) => (
                    <div
                      key={pdf.id}
                      onClick={() => setSelectedPdf(pdf)}
                      className="flex items-center gap-4 p-4 hover:bg-gradient-to-r hover:from-pink-50 hover:to-orange-50 cursor-pointer transition-all group"
                    >
                      <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${pdf.color} flex items-center justify-center`}>
                        <span className="text-2xl">📘</span>
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold text-slate-900 mb-1">{pdf.title}</h3>
                        <div className="flex items-center gap-4 text-xs text-slate-500">
                          <span>MUHS Document</span>
                        </div>
                      </div>
                      <span className="text-pink-600 opacity-0 group-hover:opacity-100 transition-opacity">
                        View →
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* PDF Modal */}
            {selectedPdf && (
              <div className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4">
                {/* Modal Header with Controls */}
                <div className="absolute top-4 right-4 flex gap-3">
                  {/* Open in New Tab Button */}
                  <button
                    onClick={() => window.open(selectedPdf.url, '_blank')}
                    className="flex items-center gap-2 px-4 py-2 bg-white/10 hover:bg-white/20 rounded-lg text-white transition-all backdrop-blur-sm border border-white/20"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                    <span>Open in New Tab</span>
                  </button>
                  
                  {/* Download Button */}
                  <button
                    onClick={() => {
                      const link = document.createElement('a')
                      link.href = selectedPdf.url
                      link.download = selectedPdf.name
                      link.click()
                    }}
                    className="flex items-center gap-2 px-4 py-2 bg-white/10 hover:bg-white/20 rounded-lg text-white transition-all backdrop-blur-sm border border-white/20"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                    </svg>
                    <span>Download</span>
                  </button>

                  {/* Close Button */}
                  <button
                    onClick={() => setSelectedPdf(null)}
                    className="w-10 h-10 bg-white/10 hover:bg-white/20 rounded-lg text-white transition-all backdrop-blur-sm border border-white/20 flex items-center justify-center"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>

                {/* PDF Title Bar */}
                <div className="absolute top-4 left-4 text-white">
                  <h2 className="text-xl font-semibold mb-1">{selectedPdf.title}</h2>
                  <p className="text-sm text-white/70">MUHS Document</p>
                </div>

                {/* PDF Viewer */}
                <div className="w-full h-full max-w-6xl max-h-[85vh] mt-16 bg-white rounded-xl overflow-hidden shadow-2xl">
                  <iframe
                    src={selectedPdf.url}
                    title={selectedPdf.title}
                    className="w-full h-full"
                  />
                </div>

                {/* Keyboard shortcut hint */}
                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-xs text-white/50 bg-black/20 px-3 py-1 rounded-full backdrop-blur-sm">
                  Press ESC to close
                </div>
              </div>
            )}

            {/* Footer Stats */}
            <div className="mt-8 flex items-center justify-between bg-white/80 backdrop-blur-sm rounded-xl p-4">
              <div className="flex items-center gap-3 text-sm text-slate-600">
                <span className="flex items-center gap-1">
                  <span className="text-lg">📚</span>
                  <span>{filteredPdfs.length} of {pdfs.length} documents</span>
                </span>
                <span className="w-px h-4 bg-slate-300"></span>
                <span className="flex items-center gap-1">
                  <span className="text-lg">📁</span>
                  <span>src/assets/MUSH/</span>
                </span>
              </div>
              <div className="text-sm text-pink-600 font-semibold">
                MUHS Digital Library
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  )
}

export default MuHSMandiate