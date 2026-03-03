import React, { useState, useEffect } from 'react'

const About = () => {
  const [images, setImages] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const loadImages = async () => {
      try {
        // This returns an object with keys as paths and values as import functions
        const modules = import.meta.glob('../assets/about/*.{jpg,jpeg,png,gif,webp,svg}')
        
        // Convert the object to an array of promises
        const imagePromises = Object.entries(modules).map(async ([path, importFunction]) => {
          // Wait for the image to be imported
          const module = await importFunction()
          
          // Extract filename without extension
          const fullPath = path.split('/')
          const filenameWithExt = fullPath[fullPath.length - 1]
          const filename = filenameWithExt.split('.')[0]
          
          return {
            url: module.default, // The image URL
            name: filename,
            caption: getCaptionFromName(filename)
          }
        })

        // Wait for all images to load
        const loadedImages = await Promise.all(imagePromises)
        console.log('Loaded images:', loadedImages.length) // This should show 3
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

  // Generate caption from filename
  const getCaptionFromName = (filename) => {
    return filename
      .split(/[-_]/)
      .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
      .join(' ')
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-white to-orange-50 text-slate-900">
      {/* Hero Banner */}
      <section className="relative bg-gradient-to-r from-pink-600 via-pink-500 to-orange-500 text-white py-20 sm:py-28 overflow-hidden">
        <div className="absolute inset-0 bg-black/20" />
        <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            About Saraswati Nursing College
          </h1>
          <p className="text-lg sm:text-xl max-w-2xl mx-auto leading-relaxed">
            Nurturing compassionate healers, shaping healthcare leaders.
          </p>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
        {/* College Overview */}
        <section className="text-center mb-20">
          <div className="max-w-4xl mx-auto">
            <span className="inline-flex items-center rounded-full bg-pink-100 px-4 py-2 text-sm font-semibold text-pink-700 mb-6">
              Our Legacy
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
              Excellence in Nursing Education
            </h2>
            <p className="text-lg sm:text-xl text-slate-600 leading-relaxed max-w-3xl mx-auto">
              Saraswati Nursing College, affiliated with S.M.M.B.S., is committed to 
              producing competent, compassionate, and ethically sound nursing 
              professionals equipped to meet the healthcare challenges of tomorrow.
            </p>
          </div>
        </section>

        {/* Dynamic Image Gallery */}
        <section className="mb-20">
          <div className="flex items-center justify-between mb-8">
            <h3 className="text-2xl sm:text-3xl font-bold text-slate-900">
              Our Campus & Facilities
            </h3>
            {!loading && images.length > 0 && (
              <span className="text-sm text-slate-500 bg-white px-4 py-2 rounded-full shadow-sm">
                {images.length} Photo{images.length !== 1 ? 's' : ''}
              </span>
            )}
          </div>
          
          {loading ? (
            <div className="text-center py-20">
              <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-pink-600 mx-auto mb-4"></div>
              <p className="text-slate-500">Loading campus photos...</p>
            </div>
          ) : images.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
              {images.map((image, index) => (
                <div
                  key={index}
                  className="group relative overflow-hidden rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
                >
                  <img
                    src={image.url}
                    alt={image.caption}
                    className="w-full h-64 sm:h-72 object-cover group-hover:scale-110 transition-transform duration-700"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                    <div>
                      <p className="text-white font-semibold text-sm sm:text-base drop-shadow-lg">
                        {image.caption}
                      </p>
                      <p className="text-white/80 text-xs mt-1">
                        Photo {index + 1} of {images.length}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-20 bg-white/50 rounded-3xl border-2 border-dashed border-pink-200">
              <div className="w-24 h-24 bg-gradient-to-br from-pink-100 to-orange-100 rounded-3xl flex items-center justify-center mx-auto mb-6">
                <span className="text-4xl">📁</span>
              </div>
              <h4 className="text-2xl font-bold text-slate-700 mb-3">
                No Images Found
              </h4>
              <p className="text-slate-600 mb-4 max-w-md mx-auto">
                Add your campus images to:{' '}
                <code className="bg-slate-100 px-3 py-1 rounded font-mono text-sm">
                  src/assets/about/
                </code>
              </p>
            </div>
          )}
        </section>

        {/* Mission Vision */}
        <section className="grid md:grid-cols-2 gap-12 lg:gap-16 mb-20">
          <div className="bg-white/70 backdrop-blur-sm rounded-3xl p-8 sm:p-10 lg:p-12 border border-pink-100 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-1">
            <div className="w-16 h-16 bg-gradient-to-br from-pink-500 to-orange-500 rounded-2xl flex items-center justify-center mb-6 mx-auto">
              <span className="text-2xl">🎯</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-4 text-center">
              Our Vision
            </h3>
            <p className="text-lg text-slate-700 leading-relaxed text-center">
              To be a premier institution producing globally competent nursing 
              professionals who excel in patient care, leadership, and innovation.
            </p>
          </div>

          <div className="bg-white/70 backdrop-blur-sm rounded-3xl p-8 sm:p-10 lg:p-12 border border-emerald-100 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-1">
            <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-2xl flex items-center justify-center mb-6 mx-auto">
              <span className="text-2xl">💡</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-4 text-center">
              Our Mission
            </h3>
            <p className="text-lg text-slate-700 leading-relaxed text-center">
              Provide quality nursing education through innovative teaching, 
              clinical excellence, research, and holistic development of students.
            </p>
          </div>
        </section>

        {/* Key Highlights */}
        <section>
          <h3 className="text-2xl sm:text-3xl font-bold text-center text-slate-900 mb-12">
            Why Choose Us?
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="group text-center p-6 rounded-2xl bg-white/80 border border-pink-100 hover:border-pink-200 hover:shadow-xl transition-all duration-300">
              <div className="w-20 h-20 bg-gradient-to-br from-pink-500 to-pink-600 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <span className="text-2xl">🏆</span>
              </div>
              <h4 className="text-xl font-semibold text-slate-900 mb-3">
                Accredited Programs
              </h4>
              <p className="text-slate-600">
                Approved by Maharashtra University of Health Sciences (MUHS) 
                and Indian Nursing Council.
              </p>
            </div>

            <div className="group text-center p-6 rounded-2xl bg-white/80 border border-emerald-100 hover:border-emerald-200 hover:shadow-xl transition-all duration-300">
              <div className="w-20 h-20 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <span className="text-2xl">👩‍⚕️</span>
              </div>
              <h4 className="text-xl font-semibold text-slate-900 mb-3">
                Expert Faculty
              </h4>
              <p className="text-slate-600">
                Experienced nursing educators with advanced degrees and 
                extensive clinical practice.
              </p>
            </div>

            <div className="group text-center p-6 rounded-2xl bg-white/80 border border-orange-100 hover:border-orange-200 hover:shadow-xl transition-all duration-300">
              <div className="w-20 h-20 bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <span className="text-2xl">🩺</span>
              </div>
              <h4 className="text-xl font-semibold text-slate-900 mb-3">
                Clinical Exposure
              </h4>
              <p className="text-slate-600">
                Partnerships with leading hospitals for hands-on clinical 
                training and internships.
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}

export default About