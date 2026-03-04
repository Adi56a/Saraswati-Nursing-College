import React, { useState, useEffect } from 'react'
import Logo from '/Logo.png'

// Image slider data
const sliderImages = [
  {
    url: 'https://images.unsplash.com/photo-1576495199011-eb94736d05d6?q=80&w=1172&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    title: 'State-of-the-Art Campus',
    description: 'Modern infrastructure designed for excellence in nursing education'
  },
  {
    url: 'https://images.unsplash.com/photo-1581093577421-f561a654a353?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    title: 'Advanced Nursing Labs',
    description: 'Hands-on training with latest medical equipment'
  },
  {
    url: 'https://images.unsplash.com/photo-1770307939909-f27b8e4ae9c9?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    title: 'Digital Library',
    description: 'Extensive collection of nursing journals and e-resources'
  },
  {
    url: 'https://images.unsplash.com/photo-1506869640319-fe1a24fd76dc?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    title: 'Student Life',
    description: 'Vibrant campus community and cultural activities'
  },
  {
    url: 'https://plus.unsplash.com/premium_photo-1663050616218-32dd74da8b2a?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    title: 'Clinical Training',
    description: 'Real-world experience at partner hospitals'
  }
]

const quotes = [
  {
    text: "Save one life, you're a hero. Save 100 lives, you're a nurse.",
    author: "Unknown",
  },
  {
    text: "Nurses dispense comfort, compassion, and caring without even a prescription.",
    author: "Val Saintsbury",
  },
  {
    text: "Nursing is an art: and if it can be made an art, it requires an exclusive devotion as hard a preparation, as any painter or sculptor's or musician's enthusiasm.",
    author: "Florence Nightingale",
  },
  {
    text: "Constant attention by a good nurse may be just as important as a major operation by a surgeon.",
    author: "Dag Hammarskjöld",
  },
  {
    text: "A nurse will always give us hope, an angel with a stethoscope.",
    author: "Carrie Latet",
  },
]

const ImageSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  useEffect(() => {
    let interval
    if (isAutoPlaying) {
      interval = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % sliderImages.length)
      }, 5000)
    }
    return () => clearInterval(interval)
  }, [isAutoPlaying])

  const goToSlide = (index) => {
    setCurrentSlide(index)
  }

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % sliderImages.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + sliderImages.length) % sliderImages.length)
  }

  return (
    <div 
      className="relative h-[500px] lg:h-[600px] w-full overflow-hidden group"
      onMouseEnter={() => setIsAutoPlaying(false)}
      onMouseLeave={() => setIsAutoPlaying(true)}
    >
      {/* Slides */}
      {sliderImages.map((image, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-all duration-1000 ease-in-out transform ${
            index === currentSlide
              ? 'opacity-100 scale-100'
              : 'opacity-0 scale-105'
          }`}
        >
          {/* Background Image with Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900/70 via-slate-900/50 to-transparent z-10" />
          <img
            src={image.url}
            alt={image.title}
            className="w-full h-full object-cover"
          />
          
          {/* Slide Content */}
          <div className="absolute inset-0 z-20 flex items-center">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
              <div className="max-w-2xl">
                <div className="transform transition-all duration-1000 delay-300 translate-y-0 opacity-100">
                  <span className="inline-block px-4 py-2 rounded-full bg-pink-600/20 backdrop-blur-sm text-pink-200 text-sm font-semibold mb-4 border border-pink-500/30">
                    Saraswati Nursing College
                  </span>
                  <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4 leading-tight">
                    {image.title}
                  </h2>
                  <p className="text-lg text-white/90 mb-8 max-w-xl">
                    {image.description}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-30 w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 text-white hover:bg-white/40 transition-all opacity-0 group-hover:opacity-100 duration-300"
      >
        <svg className="w-6 h-6 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-30 w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 text-white hover:bg-white/40 transition-all opacity-0 group-hover:opacity-100 duration-300"
      >
        <svg className="w-6 h-6 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>

      {/* Dots Indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-30 flex gap-2">
        {sliderImages.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`h-2 rounded-full transition-all duration-300 ${
              index === currentSlide
                ? 'w-8 bg-pink-500'
                : 'w-2 bg-white/50 hover:bg-white/80'
            }`}
          />
        ))}
      </div>
    </div>
  )
}

const QuoteSlider = () => {
  const [currentQuote, setCurrentQuote] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentQuote((prev) => (prev + 1) % quotes.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="relative overflow-hidden bg-gradient-to-r from-pink-500 via-purple-400 to-indigo-300">
      <div className="absolute inset-0 bg-[url('/noise.svg')] opacity-10" />
      <div className="relative mx-auto max-w-4xl px-4 py-16 sm:py-20 text-center">
        {/* Quote icon */}
        <div className="text-5xl mb-6 opacity-50 text-white">"</div>
        
        {/* Quote container */}
        <div className="transform transition-all duration-1000 ease-in-out">
          <div className="text-xl sm:text-2xl lg:text-3xl font-light text-white max-w-3xl mx-auto leading-relaxed mb-6 px-4 italic">
            "{quotes[currentQuote].text}"
          </div>
          <div className="text-sm sm:text-base font-semibold text-pink-200 tracking-wide">
            — {quotes[currentQuote].author}
          </div>
        </div>

        {/* Dots indicator */}
        <div className="flex justify-center gap-2 mt-8">
          {quotes.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentQuote(index)}
              className={`h-2 rounded-full transition-all duration-300 ${
                index === currentQuote
                  ? 'w-8 bg-white'
                  : 'w-2 bg-white/40 hover:bg-white/60'
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

const FounderSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="inline-flex items-center px-4 py-2 rounded-full bg-pink-100 text-pink-700 text-sm font-semibold mb-4 border border-pink-200">
            Our Founder
          </span>
          <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">
            Visionary Leadership
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Driven by compassion and a vision to transform healthcare education
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Founder Image */}
          <div className="relative group">
            <div className="absolute -inset-4 bg-gradient-to-r from-pink-200 to-orange-200 rounded-3xl blur-2xl opacity-70 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://plus.unsplash.com/premium_photo-1661331661403-c6e9e7355b65?q=80&w=1222&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Founder"
                className="w-full h-[500px] object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                <h3 className="text-2xl font-bold mb-2"> Shri. Rajendra Patil</h3>
                <p className="text-white/90">Founder & Visionary</p>
              </div>
            </div>
          </div>

          {/* Founder Description */}
          <div className="space-y-6">
            <div className="bg-gradient-to-r from-pink-50 to-orange-50 rounded-2xl p-8 border border-pink-100">
              <p className="text-lg text-slate-700 leading-relaxed">
                "Our institution was founded with a simple yet powerful belief: 
                that every student deserves access to quality nursing education 
                that combines academic excellence with human compassion."
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              <div className="p-6 bg-white rounded-xl border border-slate-200 hover:border-pink-200 transition-all hover:-translate-y-1">
                <div className="w-12 h-12 bg-pink-100 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-pink-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                </div>
                <h4 className="font-semibold text-slate-900 mb-2">25+ Years</h4>
                <p className="text-sm text-slate-600">Of excellence in nursing education</p>
              </div>

              <div className="p-6 bg-white rounded-xl border border-slate-200 hover:border-pink-200 transition-all hover:-translate-y-1">
                <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h4 className="font-semibold text-slate-900 mb-2">5000+ Alumni</h4>
                <p className="text-sm text-slate-600">Serving worldwide in top healthcare institutions</p>
              </div>
            </div>

            <div className="p-6 bg-gradient-to-br from-slate-50 to-white rounded-xl border border-slate-200">
              <h4 className="font-semibold text-slate-900 mb-3">Founder's Vision</h4>
              <p className="text-sm text-slate-600 leading-relaxed">
                To create an institution that doesn't just produce nurses, but nurtures 
                compassionate healers who understand the profound responsibility of 
                patient care. Our founder believed that nursing is not just a profession, 
                but a calling that requires dedication, empathy, and continuous learning.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

const Home = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-50 via-white to-orange-50 text-slate-900">
      {/* Image Slider - Full width under navbar */}
      <ImageSlider />

      {/* Logo & Introduction Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left column with big logo */}
            <div className="relative flex justify-center">
              <div className="absolute -inset-10 bg-gradient-to-r from-pink-200 via-orange-200 to-emerald-200 rounded-full blur-3xl opacity-70 animate-pulse" />
              <div className="relative bg-white/90 backdrop-blur-sm border-4 border-pink-100 rounded-3xl shadow-2xl max-w-md w-full p-10 transform hover:scale-105 transition-transform duration-500">
                <img
                  src={Logo}
                  alt="Saraswati Nursing College"
                  className="h-40 w-auto mx-auto drop-shadow-xl"
                />
                <h2 className="text-center text-2xl font-bold text-slate-900 mt-6">
                  Saraswati Nursing College
                </h2>
                <p className="mt-3 text-center text-sm text-slate-600">
                  Affiliated to Maharashtra University of Health Sciences
                </p>
                <div className="mt-6 flex justify-center">
                  <span className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-pink-500 to-orange-500 text-white text-sm font-semibold">
                    Est. 1998
                  </span>
                </div>
              </div>
            </div>

            {/* Right column with college intro */}
            <div>
              <span className="inline-flex items-center rounded-full bg-pink-100 px-4 py-2 text-sm font-semibold text-pink-700 mb-6">
                Welcome to Excellence
              </span>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mb-6 leading-tight">
                Nurturing Compassionate
                <span className="block text-pink-600 mt-2">
                  Healthcare Leaders
                </span>
              </h1>
              <p className="text-lg text-slate-600 leading-relaxed mb-8">
                Saraswati Nursing College stands as a beacon of quality nursing education, 
                committed to producing skilled, compassionate, and ethically sound nursing 
                professionals who make a difference in healthcare.
              </p>

              <div className="grid grid-cols-3 gap-4">
                <div className="text-center p-4 bg-gradient-to-b from-pink-50 to-white rounded-xl border border-pink-100">
                  <p className="text-2xl font-bold text-pink-600">100%</p>
                  <p className="text-xs text-slate-600 mt-1">Clinical Training</p>
                </div>
                <div className="text-center p-4 bg-gradient-to-b from-orange-50 to-white rounded-xl border border-orange-100">
                  <p className="text-2xl font-bold text-orange-600">15:1</p>
                  <p className="text-xs text-slate-600 mt-1">Student-Faculty Ratio</p>
                </div>
                <div className="text-center p-4 bg-gradient-to-b from-emerald-50 to-white rounded-xl border border-emerald-100">
                  <p className="text-2xl font-bold text-emerald-600">95%</p>
                  <p className="text-xs text-slate-600 mt-1">Pass Rate</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quote Slider */}
      <QuoteSlider />

      {/* Founder Section */}
      <FounderSection />

      {/* Stats Section */}
      <section className="py-16 bg-gradient-to-r from-pink-600 via-purple-600 to-indigo-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            <div className="group">
              <div className="text-4xl lg:text-5xl font-bold text-white mb-3 group-hover:scale-110 transition-transform">
                25+
              </div>
              <h4 className="text-lg font-semibold text-white/90 mb-2">Years of Excellence</h4>
            </div>
            <div className="group">
              <div className="text-4xl lg:text-5xl font-bold text-white mb-3 group-hover:scale-110 transition-transform">
                5000+
              </div>
              <h4 className="text-lg font-semibold text-white/90 mb-2">Alumni Network</h4>
            </div>
            <div className="group">
              <div className="text-4xl lg:text-5xl font-bold text-white mb-3 group-hover:scale-110 transition-transform">
                50+
              </div>
              <h4 className="text-lg font-semibold text-white/90 mb-2">Partner Hospitals</h4>
            </div>
            <div className="group">
              <div className="text-4xl lg:text-5xl font-bold text-white mb-3 group-hover:scale-110 transition-transform">
                100%
              </div>
              <h4 className="text-lg font-semibold text-white/90 mb-2">Placement Assistance</h4>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">
            Ready to Begin Your Nursing Journey?
          </h2>
          <p className="text-lg text-slate-600 mb-8 max-w-2xl mx-auto">
            Take the first step towards a rewarding career in healthcare. 
            Join thousands of successful nursing professionals who started here.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/admissions"
              className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-pink-600 to-purple-600 text-white font-semibold rounded-xl hover:from-pink-700 hover:to-purple-700 hover:-translate-y-1 transition-all shadow-xl"
            >
              Apply for Admission
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
            <a
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-4 border-2 border-pink-200 text-pink-600 font-semibold rounded-xl hover:bg-pink-50 hover:border-pink-300 transition-all"
            >
              Contact Admissions Office
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-pink-100 bg-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-3">
              <img src={Logo} alt="Logo" className="h-10 w-auto" />
              <span className="text-sm text-slate-600">Saraswati Nursing College</span>
            </div>
            <div className="text-sm text-slate-500">
              © {new Date().getFullYear()} All rights reserved.
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Home