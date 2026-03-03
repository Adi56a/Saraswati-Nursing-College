import React, { useState, useEffect, useCallback } from 'react'

const Gallery = () => {
  const [images, setImages] = useState([])
  const [loading, setLoading] = useState(true)
  const [lightboxOpen, setLightboxOpen] = useState(false)
  const [selectedImage, setSelectedImage] = useState(null)
  const [filter, setFilter] = useState('all')
  const [categories, setCategories] = useState([])

  useEffect(() => {
    // Dynamically import all images from src/assets/gallery/
    const loadImages = async () => {
      try {
        // Using Vite's import.meta.glob to get all images
        const imageModules = import.meta.glob('../assets/gallery/*.{jpg,jpeg,png,gif,webp,svg}')
        
        const imagePromises = Object.entries(imageModules).map(async ([path, importFunction]) => {
          const module = await importFunction()
          
          // Extract filename without extension
          const fullPath = path.split('/')
          const filenameWithExt = fullPath[fullPath.length - 1]
          const filename = filenameWithExt.split('.')[0]
          
          return {
            url: module.default,
            name: filename,
            category: getCategoryFromFilename(filename)
          }
        })

        const loadedImages = await Promise.all(imagePromises)
        
        // Extract unique categories
        const uniqueCategories = ['all', ...new Set(loadedImages.map(img => img.category))]
        setCategories(uniqueCategories)
        setImages(loadedImages)
      } catch (error) {
        console.error('Error loading images:', error)
        setImages([])
      } finally {
        setLoading(false)
      }
    }

    loadImages()
  }, [])

  const getCategoryFromFilename = (filename) => {
    const name = filename.toLowerCase()
    if (name.includes('campus')) return 'campus'
    if (name.includes('event') || name.includes('celebration') || name.includes('annual') || name.includes('day')) return 'events'
    if (name.includes('lab') || name.includes('laboratory')) return 'labs'
    if (name.includes('student')) return 'students'
    if (name.includes('faculty') || name.includes('teacher')) return 'faculty'
    if (name.includes('library')) return 'library'
    if (name.includes('hostel')) return 'hostel'
    if (name.includes('sports') || name.includes('ground')) return 'sports'
    return 'other'
  }

  const getImageTitle = (filename) => {
    return filename
      .split(/[-_]/)
      .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
      .join(' ')
  }

  const filteredImages = filter === 'all' 
    ? images 
    : images.filter(img => img.category === filter)

  const openLightbox = useCallback((image, index) => {
    setSelectedImage({ ...image, index })
    setLightboxOpen(true)
  }, [])

  const closeLightbox = () => {
    setLightboxOpen(false)
    setSelectedImage(null)
  }

  const navigateLightbox = (direction) => {
    if (!selectedImage) return
    const currentIndex = selectedImage.index
    const newIndex = currentIndex + direction
    if (newIndex >= 0 && newIndex < filteredImages.length) {
      setSelectedImage({ ...filteredImages[newIndex], index: newIndex })
    }
  }

  const handleKeyDown = useCallback((e) => {
    if (!lightboxOpen) return
    if (e.key === 'Escape') closeLightbox()
    if (e.key === 'ArrowLeft') navigateLightbox(-1)
    if (e.key === 'ArrowRight') navigateLightbox(1)
  }, [lightboxOpen, selectedImage])

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [handleKeyDown])

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-pink-50 flex items-center justify-center">
        <div className="text-center">
          <div className="relative">
            <div className="w-20 h-20 border-4 border-pink-200 border-t-pink-600 rounded-full animate-spin mx-auto mb-6"></div>
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-2xl">📸</span>
            </div>
          </div>
          <p className="text-xl font-semibold text-slate-700 mb-2">Loading Gallery</p>
          <p className="text-sm text-slate-500">Discovering campus moments...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-pink-50">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-pink-600 via-purple-600 to-indigo-600 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/20" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
          <div className="max-w-3xl">
            <span className="inline-flex items-center px-4 py-2 rounded-full bg-white/20 backdrop-blur-sm text-sm font-semibold mb-6 border border-white/30">
              📸 Campus Gallery
            </span>
            <h1 className="text-4xl lg:text-5xl font-bold mb-6 leading-tight">
              Memories & Moments
            </h1>
            <p className="text-lg lg:text-xl text-white/90 leading-relaxed max-w-2xl">
              Explore the vibrant life at Saraswati Nursing College through our gallery. 
              From academic excellence to cultural celebrations.
            </p>
            <div className="flex flex-wrap gap-4 mt-8">
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full border border-white/20">
                <span className="text-lg">📷</span>
                <span className="text-sm font-medium">{images.length} Photo{images.length !== 1 ? 's' : ''}</span>
              </div>
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full border border-white/20">
                <span className="text-lg">🏷️</span>
                <span className="text-sm font-medium">{categories.length - 1} Categorie{categories.length - 1 !== 1 ? 's' : ''}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Content */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
        {images.length === 0 ? (
          <div className="text-center py-20">
            <div className="w-32 h-32 bg-gradient-to-br from-pink-100 to-orange-100 rounded-3xl flex items-center justify-center mx-auto mb-8 border-4 border-white shadow-xl">
              <span className="text-5xl">🖼️</span>
            </div>
            <h2 className="text-3xl font-bold text-slate-900 mb-4">No Images Found</h2>
            <p className="text-lg text-slate-600 mb-8 max-w-md mx-auto">
              Add your images to the gallery folder to display them here.
            </p>
            <div className="bg-slate-100 rounded-2xl p-6 max-w-lg mx-auto text-left">
              <p className="text-sm font-semibold text-slate-700 mb-3">📁 Folder Structure:</p>
              <pre className="text-xs bg-white p-3 rounded-lg text-slate-600 overflow-x-auto">
                src/
                ├── assets/
                │   └── gallery/     ← Place your images here
                │       ├── campus-1.jpg
                │       ├── event-annual-day.png
                │       ├── nursing-lab.webp
                │       └── students-group.jpg
                └── pages/
                    └── Gallery.jsx  ← You are here
              </pre>
              <p className="text-xs text-slate-500 mt-3">
                Supported formats: JPG, JPEG, PNG, GIF, WEBP, SVG
              </p>
            </div>
          </div>
        ) : (
          <>
            {/* Category Filter */}
            {categories.length > 1 && (
              <div className="flex flex-wrap gap-2 justify-center mb-12">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setFilter(category)}
                    className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                      filter === category
                        ? 'bg-gradient-to-r from-pink-600 to-purple-600 text-white shadow-lg shadow-pink-500/25'
                        : 'bg-white text-slate-600 hover:bg-pink-50 hover:text-pink-600 border border-slate-200 hover:border-pink-200'
                    }`}
                  >
                    {category.charAt(0).toUpperCase() + category.slice(1)}
                    {category !== 'all' && (
                      <span className="ml-2 text-xs opacity-75">
                        ({images.filter(img => img.category === category).length})
                      </span>
                    )}
                  </button>
                ))}
              </div>
            )}

            {/* Image Grid */}
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 lg:gap-6">
              {filteredImages.map((image, index) => (
                <div
                  key={image.url}
                  onClick={() => openLightbox(image, index)}
                  className="group relative aspect-square overflow-hidden rounded-xl bg-slate-100 cursor-pointer hover:shadow-2xl transition-all duration-500 hover:-translate-y-1"
                >
                  <img
                    src={image.url}
                    alt={getImageTitle(image.name)}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    loading="lazy"
                  />
                  
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-0 left-0 right-0 p-4">
                      <p className="text-white text-sm font-medium line-clamp-2">
                        {getImageTitle(image.name)}
                      </p>
                      <span className="inline-block mt-2 px-2 py-1 bg-white/20 backdrop-blur-sm rounded text-xs text-white">
                        {image.category}
                      </span>
                    </div>
                  </div>

                  {/* View Button */}
                  <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="w-8 h-8 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                      <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                      </svg>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Image Count */}
            <div className="mt-12 text-center text-sm text-slate-500">
              Showing {filteredImages.length} of {images.length} image{images.length !== 1 ? 's' : ''}
            </div>
          </>
        )}
      </section>

      {/* Lightbox Modal */}
      {lightboxOpen && selectedImage && (
        <div className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center">
          {/* Close Button */}
          <button
            onClick={closeLightbox}
            className="absolute top-6 right-6 z-50 w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center text-white transition-all duration-300 border border-white/20"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          {/* Navigation */}
          {filteredImages.length > 1 && (
            <>
              <button
                onClick={() => navigateLightbox(-1)}
                className="absolute left-6 z-50 w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center text-white transition-all duration-300 border border-white/20 disabled:opacity-50 disabled:cursor-not-allowed"
                disabled={selectedImage.index === 0}
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <button
                onClick={() => navigateLightbox(1)}
                className="absolute right-6 z-50 w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center text-white transition-all duration-300 border border-white/20 disabled:opacity-50 disabled:cursor-not-allowed"
                disabled={selectedImage.index === filteredImages.length - 1}
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </>
          )}

          {/* Image Container */}
          <div className="relative max-w-7xl mx-auto px-4 w-full h-full flex items-center justify-center">
            <div className="relative max-h-[90vh] max-w-[90vw]">
              <img
                src={selectedImage.url}
                alt={getImageTitle(selectedImage.name)}
                className="max-h-[90vh] max-w-[90vw] object-contain rounded-lg"
              />
              
              {/* Image Info */}
              <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent">
                <div className="flex items-center justify-between text-white">
                  <div>
                    <h3 className="text-xl font-semibold mb-1">
                      {getImageTitle(selectedImage.name)}
                    </h3>
                    <p className="text-sm text-white/80">
                      {selectedImage.category} • {selectedImage.index + 1} of {filteredImages.length}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default Gallery