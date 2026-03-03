import React, { useState, useEffect } from 'react'
import Logo from '/Logo.png'

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

const QuoteSlider = () => {
  const [currentQuote, setCurrentQuote] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentQuote((prev) => (prev + 1) % quotes.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="relative overflow-hidden bg-gradient-to-r from-pink-100/50 via-white/80 to-orange-100/50 backdrop-blur-sm">
      <div className="relative mx-auto max-w-4xl px-4 py-12 sm:py-16 text-center">
        {/* Quote container */}
        <div className="transform transition-all duration-1000 ease-in-out">
          <div className="text-2xl sm:text-3xl lg:text-4xl font-serif font-light italic text-slate-800 max-w-3xl mx-auto leading-relaxed mb-6 px-4">
            "{quotes[currentQuote].text}"
          </div>
          <div className="text-sm sm:text-base font-semibold text-pink-700 tracking-wide">
            — {quotes[currentQuote].author}
          </div>
        </div>

        {/* Dots indicator */}
        <div className="flex justify-center gap-2 mt-8">
          {quotes.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentQuote(index)}
              className={`h-2 w-2 rounded-full transition-all duration-300 ${
                index === currentQuote
                  ? 'bg-pink-600 scale-125 shadow-md'
                  : 'bg-slate-300 hover:bg-pink-400'
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

const Home = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-50 via-white to-orange-50 text-slate-900">
      {/* Hero Section */}
      <main className="pt-24 pb-16 sm:pt-28 sm:pb-20">
        <section className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 grid gap-10 lg:grid-cols-2 items-center">
          {/* Left column */}
          <div>
            <span className="inline-flex items-center rounded-full bg-pink-100 px-3 py-1 text-xs font-semibold text-pink-700 mb-4">
              Caring Hands. Skilled Minds.
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900">
              Build a noble career
              <span className="block text-pink-600 mt-1">
                in Nursing & Healthcare
              </span>
            </h1>
            <p className="mt-4 text-sm sm:text-base text-slate-600 max-w-xl">
              Saraswati Nursing College is dedicated to nurturing competent,
              compassionate and ethically strong nursing professionals through
              quality education, clinical exposure and holistic development.
            </p>

            <div className="mt-6 flex flex-wrap items-center gap-3">
              <a
                href="#admissions"
                className="inline-flex items-center justify-center rounded-full bg-pink-600 px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-pink-300/60 hover:bg-pink-700 transition-transform hover:-translate-y-0.5"
              >
                Start Admissions Enquiry
              </a>
              <a
                href="#courses"
                className="inline-flex items-center justify-center rounded-full border border-pink-200 bg-white px-5 py-2.5 text-sm font-semibold text-pink-700 hover:bg-pink-50 transition-colors"
              >
                View Courses
              </a>
            </div>

            <div className="mt-6 grid grid-cols-3 gap-4 max-w-md text-xs sm:text-sm">
              <div className="rounded-xl bg-white/80 border border-orange-100 px-3 py-3 shadow-sm">
                <p className="font-bold text-pink-600 text-base sm:text-lg">
                  100%
                </p>
                <p className="text-slate-600">Clinical exposure</p>
              </div>
              <div className="rounded-xl bg-white/80 border border-pink-100 px-3 py-3 shadow-sm">
                <p className="font-bold text-pink-600 text-base sm:text-lg">
                  Expert
                </p>
                <p className="text-slate-600">Faculty guidance</p>
              </div>
              <div className="rounded-xl bg-white/80 border border-emerald-100 px-3 py-3 shadow-sm">
                <p className="font-bold text-pink-600 text-base sm:text-lg">
                  Modern
                </p>
                <p className="text-slate-600">Labs & library</p>
              </div>
            </div>
          </div>

          {/* Right column: Logo + card */}
          <div className="relative flex justify-center">
            {/* Gradient circle background */}
            <div className="absolute -inset-6 sm:-inset-10 bg-gradient-to-tr from-pink-200 via-orange-200 to-emerald-200 rounded-3xl blur-3xl opacity-70" />
            <div className="relative bg-white/90 border border-pink-100 rounded-3xl shadow-xl max-w-sm w-full p-6 sm:p-7">
              <div className="flex justify-center mb-4">
                <img
                  src={Logo}
                  alt="Saraswati Nursing College"
                  className="h-28 w-auto sm:h-32 drop-shadow-md"
                />
              </div>
              <h2 className="text-center text-lg sm:text-xl font-bold text-slate-900">
                Saraswati Nursing College
              </h2>
              <p className="mt-2 text-center text-xs sm:text-sm text-slate-600">
                Affiliated & committed to high standards of nursing education,
                human values and professional excellence.
              </p>

              <div className="mt-4 grid grid-cols-2 gap-3 text-xs sm:text-sm">
                <div className="rounded-xl bg-pink-50 px-3 py-3">
                  <p className="font-semibold text-pink-700">Programs</p>
                  <p className="text-slate-600 mt-1">
                    GNM, B.Sc. Nursing and more (as per institute offering).
                  </p>
                </div>
                <div className="rounded-xl bg-emerald-50 px-3 py-3">
                  <p className="font-semibold text-emerald-700">Environment</p>
                  <p className="text-slate-600 mt-1">
                    Student-centered learning with strong clinical integration.
                  </p>
                </div>
              </div>

              <div className="mt-4 flex items-center justify-between text-xs sm:text-sm text-slate-600">
                <span className="flex items-center gap-1">
                  <span className="inline-block h-2 w-2 rounded-full bg-emerald-500" />
                  Admissions Open
                </span>
                <a
                  href="#contact"
                  className="text-pink-600 font-semibold hover:underline"
                >
                  Contact Office
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Nursing Quotes Slider - right below logo section */}
        <QuoteSlider />

        {/* Simple CTA + footer area */}
        <div className="mt-16 sm:mt-20 mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-4">
              Ready to Start Your Nursing Journey?
            </h2>
            <p className="text-sm sm:text-base text-slate-600 mb-6">
              Explore our programs and take the first step toward a rewarding career in healthcare.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a
                href="/courses"
                className="inline-flex items-center justify-center rounded-full bg-pink-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-pink-300/60 hover:bg-pink-700 transition-transform hover:-translate-y-0.5"
              >
                Explore Courses
              </a>
              <a
                href="/admissions"
                className="inline-flex items-center justify-center rounded-full border-2 border-pink-200 bg-white px-6 py-3 text-sm font-semibold text-pink-700 hover:bg-pink-50 hover:border-pink-300 transition-all"
              >
                Apply Now
              </a>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-pink-100 bg-white py-6 text-center text-xs sm:text-sm text-slate-500">
        © {new Date().getFullYear()} Saraswati Nursing College. All rights reserved.
      </footer>
    </div>
  )
}

export default Home
