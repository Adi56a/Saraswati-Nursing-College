import React, { useState, useEffect } from 'react'

const About = () => {
  const [images, setImages] = useState([])
  const [loading, setLoading] = useState(true)
  const [activeTab, setActiveTab] = useState('history')

  useEffect(() => {
    const loadImages = async () => {
      try {
        const modules = import.meta.glob('../assets/about/*.{jpg,jpeg,png,gif,webp,svg}')
        
        const imagePromises = Object.entries(modules).map(async ([path, importFunction]) => {
          const module = await importFunction()
          const fullPath = path.split('/')
          const filenameWithExt = fullPath[fullPath.length - 1]
          const filename = filenameWithExt.split('.')[0]
          
          return {
            url: module.default,
            name: filename,
            caption: getCaptionFromName(filename)
          }
        })

        const loadedImages = await Promise.all(imagePromises)
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

  const getCaptionFromName = (filename) => {
    return filename
      .split(/[-_]/)
      .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
      .join(' ')
  }

  const milestones = [
    { year: '2010', event: 'Establishment of ANM Program' },
    { year: '2015', event: 'GNM Program Introduced' },
    { year: '2021', event: 'B.Sc Nursing Program Started' },
    { year: '2024', event: 'State-of-the-Art Simulation Lab' }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-white to-orange-50">
      {/* Hero Banner with Parallax Effect */}
      <section className="relative bg-gradient-to-r from-pink-600 via-pink-500 to-orange-500 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/20" />
        <div className="absolute inset-0 bg-[url('/noise.svg')] opacity-10" />
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
          <div className="max-w-3xl mx-auto text-center">
            <span className="inline-flex items-center rounded-full bg-white/20 backdrop-blur-sm px-4 py-2 text-sm font-semibold mb-6 border border-white/30 animate-fade-in">
              Established 2010
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight animate-slide-up">
              About Saraswati Nursing College
            </h1>
            <p className="text-xl sm:text-2xl text-white/90 leading-relaxed animate-slide-up animation-delay-200">
              Nurturing compassionate healers, shaping healthcare leaders since 2010.
            </p>
          </div>
        </div>
        
        {/* Animated Wave Divider */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 120L60 105C120 90 240 60 360 45C480 30 600 30 720 37.5C840 45 960 60 1080 67.5C1200 75 1320 75 1380 75L1440 75V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" 
              className="fill-white/10" />
          </svg>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-12 relative z-10">
        
        {/* Institution Overview Card */}
        <div className="bg-white/90 backdrop-blur-sm rounded-3xl shadow-2xl border border-pink-100 p-8 lg:p-12 mb-20 transform hover:-translate-y-1 transition-all duration-500">
          <div className="grid lg:grid-cols-3 gap-8 items-start">
            {/* Logo and Basic Info */}
            <div className="lg:col-span-1 text-center lg:text-left">
              <div className="inline-block p-4 bg-gradient-to-br from-pink-100 to-orange-100 rounded-2xl mb-4">
                <span className="text-5xl">🏥</span>
              </div>
              <h2 className="text-2xl font-bold text-slate-900 mb-2">Saraswati Nursing College</h2>
              <p className="text-pink-600 font-semibold mb-4">Constituent Unit of Vitthal Multipurpose Charitable Society</p>
              <div className="space-y-2 text-sm text-slate-600">
                <p className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-pink-500 rounded-full"></span>
                  Approved by Government of Maharashtra
                </p>
                <p className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-pink-500 rounded-full"></span>
                  Indian Nursing Council
                </p>
                <p className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-pink-500 rounded-full"></span>
                  Maharashtra Nursing Council
                </p>
                <p className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-pink-500 rounded-full"></span>
                  Affiliated to MUHS, Nashik
                </p>
              </div>
            </div>

            {/* Description */}
            <div className="lg:col-span-2">
              <p className="text-lg text-slate-700 leading-relaxed mb-6">
                Saraswati Nursing College situated at, Khamgaon, was started in the year 2010 with 
                Auxiliary Nursing Midwifery (ANM) followed by General Nursing Midwifery (GNM) and 
                B.Sc Nursing programme started in the year 2021. The curriculum has been planned to 
                provide in-depth knowledge to enable the graduates to function effectively in various 
                nursing situations, also prepare to assume the role of teacher, supervisor and manager 
                in clinical/public health setting.
              </p>
              <p className="text-lg text-slate-700 leading-relaxed italic border-l-4 border-pink-400 pl-4">
                We give personal attention to each student and emphasize on etiquettes, maintain high 
                degree of discipline and abide the code of conduct which reflects the dignifying behavior 
                in the campus.
              </p>
            </div>
          </div>
        </div>

        {/* Milestones Timeline */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <span className="inline-flex items-center rounded-full bg-pink-100 px-4 py-2 text-sm font-semibold text-pink-700 mb-4">
              Our Journey
            </span>
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">
              Milestones of Excellence
            </h2>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {milestones.map((item, index) => (
              <div 
                key={index}
                className="group relative bg-white rounded-2xl p-6 border border-pink-100 hover:border-pink-300 hover:shadow-xl transition-all duration-500 hover:-translate-y-2"
              >
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-12 h-12 bg-gradient-to-r from-pink-500 to-orange-500 rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg group-hover:scale-110 transition-transform">
                  {index + 1}
                </div>
                <div className="mt-8 text-center">
                  <div className="text-2xl font-bold text-pink-600 mb-2">{item.year}</div>
                  <p className="text-slate-700 font-medium">{item.event}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Dynamic Image Gallery with Tabs */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <span className="inline-flex items-center rounded-full bg-pink-100 px-4 py-2 text-sm font-semibold text-pink-700 mb-4">
              Campus Life
            </span>
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">
              Our Campus & Facilities
            </h2>
          </div>

          {/* Category Tabs */}
          <div className="flex flex-wrap gap-2 justify-center mb-8">
            {['all', 'campus', 'lab', 'library', 'events'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-6 py-2 rounded-full text-sm font-semibold transition-all duration-300 ${
                  activeTab === tab
                    ? 'bg-gradient-to-r from-pink-500 to-orange-500 text-white shadow-lg'
                    : 'bg-white text-slate-600 hover:bg-pink-50 border border-pink-200'
                }`}
              >
                {tab.charAt(0).toUpperCase() + tab.slice(1)}
              </button>
            ))}
          </div>

          {loading ? (
            <div className="text-center py-20">
              <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-pink-600 mx-auto mb-4"></div>
              <p className="text-slate-500">Loading campus photos...</p>
            </div>
          ) : images.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {images.map((image, index) => (
                <div
                  key={index}
                  className="group relative overflow-hidden rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 cursor-pointer"
                >
                  <div className="aspect-w-16 aspect-h-12 overflow-hidden">
                    <img
                      src={image.url}
                      alt={image.caption}
                      className="w-full h-72 object-cover group-hover:scale-110 transition-transform duration-700"
                      loading="lazy"
                    />
                  </div>
                  
                  {/* Overlay with gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500">
                    <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-6 group-hover:translate-y-0 transition-transform duration-500">
                      <h3 className="text-white font-bold text-xl mb-2">{image.caption}</h3>
                      <p className="text-white/80 text-sm">
                        {image.name.includes('lab') ? 'State-of-the-art nursing lab' :
                         image.name.includes('library') ? 'Digital library with e-resources' :
                         image.name.includes('campus') ? 'Beautiful campus view' :
                         'Modern facility for students'}
                      </p>
                    </div>
                  </div>

                  {/* Category Badge */}
                  <span className="absolute top-4 left-4 px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-xs text-white border border-white/30">
                    {image.name.includes('lab') ? 'Lab' :
                     image.name.includes('library') ? 'Library' :
                     image.name.includes('campus') ? 'Campus' : 'Facility'}
                  </span>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-20 bg-white/50 rounded-3xl border-2 border-dashed border-pink-200">
              <div className="w-24 h-24 bg-gradient-to-br from-pink-100 to-orange-100 rounded-3xl flex items-center justify-center mx-auto mb-6">
                <span className="text-4xl">📸</span>
              </div>
              <h4 className="text-2xl font-bold text-slate-700 mb-3">Gallery Coming Soon</h4>
              <p className="text-slate-600">Add your campus images to showcase our facilities</p>
            </div>
          )}
        </section>

        {/* Mission Vision with Flip Cards */}
        <section className="grid md:grid-cols-2 gap-8 lg:gap-12 mb-20">
          <div className="group perspective">
            <div className="relative preserve-3d group-hover:rotate-y-180 transition-all duration-1000 cursor-pointer">
              {/* Front */}
              <div className="backface-hidden bg-white/90 backdrop-blur-sm rounded-3xl p-8 sm:p-10 border border-pink-100 shadow-xl">
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
              
              {/* Back */}
              <div className="absolute inset-0 backface-hidden rotate-y-180 bg-gradient-to-br from-pink-600 to-orange-600 rounded-3xl p-8 sm:p-10 shadow-xl flex items-center">
                <div className="text-white text-center">
                  <div className="text-4xl mb-4">✨</div>
                  <h4 className="text-xl font-bold mb-3">Vision in Action</h4>
                  <p className="text-white/90">
                    Creating leaders who transform healthcare through compassion and excellence.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="group perspective">
            <div className="relative preserve-3d group-hover:rotate-y-180 transition-all duration-1000 cursor-pointer">
              {/* Front */}
              <div className="backface-hidden bg-white/90 backdrop-blur-sm rounded-3xl p-8 sm:p-10 border border-emerald-100 shadow-xl">
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
              
              {/* Back */}
              <div className="absolute inset-0 backface-hidden rotate-y-180 bg-gradient-to-br from-emerald-600 to-teal-600 rounded-3xl p-8 sm:p-10 shadow-xl flex items-center">
                <div className="text-white text-center">
                  <div className="text-4xl mb-4">⭐</div>
                  <h4 className="text-xl font-bold mb-3">Our Commitment</h4>
                  <p className="text-white/90">
                    Excellence in education, compassion in care, innovation in practice.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Us - Enhanced */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <span className="inline-flex items-center rounded-full bg-pink-100 px-4 py-2 text-sm font-semibold text-pink-700 mb-4">
              Our Strengths
            </span>
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">
              Why Choose Us?
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              We provide an environment that nurtures excellence and builds character
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="group relative p-8 bg-white rounded-2xl border border-pink-100 hover:border-pink-300 hover:shadow-xl transition-all duration-500 hover:-translate-y-2 overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-pink-200/30 to-orange-200/30 rounded-full -mr-16 -mt-16 group-hover:scale-150 transition-transform duration-700"></div>
              <div className="relative">
                <div className="w-16 h-16 bg-gradient-to-br from-pink-500 to-pink-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <span className="text-2xl">🏆</span>
                </div>
                <h4 className="text-xl font-bold text-slate-900 mb-3">
                  Accredited Programs
                </h4>
                <p className="text-slate-600">
                  Approved by MUHS and Indian Nursing Council with full recognition.
                </p>
                <div className="mt-4 flex items-center text-pink-600 text-sm font-semibold opacity-0 group-hover:opacity-100 transition-opacity">
                  <span>Learn more</span>
                  <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </div>

            <div className="group relative p-8 bg-white rounded-2xl border border-emerald-100 hover:border-emerald-300 hover:shadow-xl transition-all duration-500 hover:-translate-y-2 overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-emerald-200/30 to-teal-200/30 rounded-full -mr-16 -mt-16 group-hover:scale-150 transition-transform duration-700"></div>
              <div className="relative">
                <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <span className="text-2xl">👩‍⚕️</span>
                </div>
                <h4 className="text-xl font-bold text-slate-900 mb-3">
                  Expert Faculty
                </h4>
                <p className="text-slate-600">
                  Experienced educators with advanced degrees and clinical practice.
                </p>
                <div className="mt-4 flex items-center text-emerald-600 text-sm font-semibold opacity-0 group-hover:opacity-100 transition-opacity">
                  <span>Meet our team</span>
                  <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </div>

            <div className="group relative p-8 bg-white rounded-2xl border border-orange-100 hover:border-orange-300 hover:shadow-xl transition-all duration-500 hover:-translate-y-2 overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-orange-200/30 to-amber-200/30 rounded-full -mr-16 -mt-16 group-hover:scale-150 transition-transform duration-700"></div>
              <div className="relative">
                <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <span className="text-2xl">🩺</span>
                </div>
                <h4 className="text-xl font-bold text-slate-900 mb-3">
                  Clinical Exposure
                </h4>
                <p className="text-slate-600">
                  Hands-on training at leading hospitals with modern simulation labs.
                </p>
                <div className="mt-4 flex items-center text-orange-600 text-sm font-semibold opacity-0 group-hover:opacity-100 transition-opacity">
                  <span>View facilities</span>
                  <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </div>

            <div className="group relative p-8 bg-white rounded-2xl border border-blue-100 hover:border-blue-300 hover:shadow-xl transition-all duration-500 hover:-translate-y-2 overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-200/30 to-indigo-200/30 rounded-full -mr-16 -mt-16 group-hover:scale-150 transition-transform duration-700"></div>
              <div className="relative">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <span className="text-2xl">📚</span>
                </div>
                <h4 className="text-xl font-bold text-slate-900 mb-3">
                  Digital Library
                </h4>
                <p className="text-slate-600">
                  Extensive collection of nursing journals, e-books, and research papers.
                </p>
              </div>
            </div>

            <div className="group relative p-8 bg-white rounded-2xl border border-purple-100 hover:border-purple-300 hover:shadow-xl transition-all duration-500 hover:-translate-y-2 overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-purple-200/30 to-pink-200/30 rounded-full -mr-16 -mt-16 group-hover:scale-150 transition-transform duration-700"></div>
              <div className="relative">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <span className="text-2xl">🎭</span>
                </div>
                <h4 className="text-xl font-bold text-slate-900 mb-3">
                  Extracurricular Activities
                </h4>
                <p className="text-slate-600">
                  NSS, Blood Donation, Health Days, Sports, and Cultural Competitions.
                </p>
              </div>
            </div>

            <div className="group relative p-8 bg-white rounded-2xl border border-amber-100 hover:border-amber-300 hover:shadow-xl transition-all duration-500 hover:-translate-y-2 overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-amber-200/30 to-yellow-200/30 rounded-full -mr-16 -mt-16 group-hover:scale-150 transition-transform duration-700"></div>
              <div className="relative">
                <div className="w-16 h-16 bg-gradient-to-br from-amber-500 to-yellow-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <span className="text-2xl">🌟</span>
                </div>
                <h4 className="text-xl font-bold text-slate-900 mb-3">
                  Personal Attention
                </h4>
                <p className="text-slate-600">
                  Individual guidance, discipline, and character development focus.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Statistics Banner */}
        <section className="bg-gradient-to-r from-pink-600 via-purple-600 to-orange-600 rounded-3xl p-12 mb-20 shadow-2xl">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            <div className="group">
              <div className="text-4xl lg:text-5xl font-bold text-white mb-3 group-hover:scale-110 transition-transform">15+</div>
              <p className="text-white/90 font-semibold">Years of Excellence</p>
            </div>
            <div className="group">
              <div className="text-4xl lg:text-5xl font-bold text-white mb-3 group-hover:scale-110 transition-transform">5000+</div>
              <p className="text-white/90 font-semibold">Alumni Network</p>
            </div>
            <div className="group">
              <div className="text-4xl lg:text-5xl font-bold text-white mb-3 group-hover:scale-110 transition-transform">100%</div>
              <p className="text-white/90 font-semibold">Clinical Exposure</p>
            </div>
            <div className="group">
              <div className="text-4xl lg:text-5xl font-bold text-white mb-3 group-hover:scale-110 transition-transform">50+</div>
              <p className="text-white/90 font-semibold">Partner Hospitals</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}

export default About