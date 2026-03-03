import React from 'react'
import { 
  FaFacebookF, 
  FaTwitter, 
  FaInstagram, 
  FaYoutube, 
  FaLinkedinIn, 
  FaPhoneAlt, 
  FaEnvelope 
} from 'react-icons/fa'

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 text-white">
      {/* Main footer - good height */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          
          {/* College Info */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <img
                src="/Logo.png"
                alt="Saraswati Nursing College"
                className="h-12 w-12 rounded-full shadow-2xl"
              />
              <div>
                <h3 className="text-lg font-bold text-pink-400">
                  Saraswati Nursing College
                </h3>
                <p className="text-xs sm:text-sm text-slate-300">
                  S.M.M.B.S.
                </p>
              </div>
            </div>
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed mb-4">
              Committed to excellence in nursing education, producing compassionate
              and skilled healthcare professionals for a healthier tomorrow.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4 tracking-wide">
              Quick Links
            </h4>
            <ul className="space-y-2">
              <li>
                <a href="/" className="text-sm text-slate-300 hover:text-pink-400 hover:underline transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="/about" className="text-sm text-slate-300 hover:text-pink-400 hover:underline transition-colors">
                  About
                </a>
              </li>
              <li>
                <a href="/courses" className="text-sm text-slate-300 hover:text-pink-400 hover:underline transition-colors">
                  Courses
                </a>
              </li>
              <li>
                <a href="/admissions" className="text-sm text-slate-300 hover:text-pink-400 hover:underline transition-colors">
                  Admissions
                </a>
              </li>
              <li>
                <a href="/contact" className="text-sm text-slate-300 hover:text-pink-400 hover:underline transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4 tracking-wide">
              Contact Info
            </h4>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <FaPhoneAlt className="text-pink-400 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-sm font-medium text-slate-200">Phone</p>
                  <a href="tel:+912223456789" className="text-sm text-slate-300 hover:text-pink-400">
                    +91 22 2345 6789
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <FaEnvelope className="text-pink-400 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-sm font-medium text-slate-200">Email</p>
                  <a href="mailto:info@saraswatinursingcollege.in" className="text-sm text-slate-300 hover:text-pink-400">
                    info@saraswatinursingcollege.in
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-emerald-400 rounded-full mt-2 flex-shrink-0" />
                <div>
                  <p className="text-sm font-medium text-slate-200">Location</p>
                  <p className="text-sm text-slate-300">
                    Kalyan, Maharashtra<br />
                    India - 421301
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Social Media */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4 tracking-wide">
              Follow Us
            </h4>
            <div className="flex flex-wrap gap-2 mb-6">
              <a
                href="#"
                className="w-12 h-12 rounded-2xl bg-slate-800/50 hover:bg-pink-600/90 group flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-2xl hover:shadow-pink-500/25"
                aria-label="Facebook"
              >
                <FaFacebookF className="text-slate-300 group-hover:text-white text-lg" />
              </a>
              <a
                href="#"
                className="w-12 h-12 rounded-2xl bg-slate-800/50 hover:bg-sky-500/90 group flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-2xl hover:shadow-sky-500/25"
                aria-label="Twitter"
              >
                <FaTwitter className="text-slate-300 group-hover:text-white text-lg" />
              </a>
              <a
                href="#"
                className="w-12 h-12 rounded-2xl bg-slate-800/50 hover:bg-gradient-to-br from-pink-500 to-purple-600/90 group flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-2xl hover:shadow-pink-500/25"
                aria-label="Instagram"
              >
                <FaInstagram className="text-slate-300 group-hover:text-white text-lg" />
              </a>
              <a
                href="#"
                className="w-12 h-12 rounded-2xl bg-slate-800/50 hover:bg-red-500/90 group flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-2xl hover:shadow-red-500/25"
                aria-label="YouTube"
              >
                <FaYoutube className="text-slate-300 group-hover:text-white text-lg" />
              </a>
              <a
                href="#"
                className="w-12 h-12 rounded-2xl bg-slate-800/50 hover:bg-blue-600/90 group flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-2xl hover:shadow-blue-500/25"
                aria-label="LinkedIn"
              >
                <FaLinkedinIn className="text-slate-300 group-hover:text-white text-lg" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Map Section */}
      <div className="border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div>
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-4">
                📍 Find Us on Map
              </h3>
              <p className="text-sm sm:text-base text-slate-300 mb-6 leading-relaxed">
                Visit our campus or get directions to Saraswati Nursing College.
                Easily accessible location with excellent connectivity.
              </p>
              <div className="flex items-center gap-4 text-sm text-slate-400">
                <span className="inline-flex items-center gap-2">
                  <FaPhoneAlt className="text-pink-400" />
                  +91 22 2345 6789
                </span>
                <span className="inline-flex items-center gap-2">
                  <FaEnvelope className="text-pink-400" />
                  info@saraswatinursingcollege.in
                </span>
              </div>
            </div>

            {/* Google Map - Replace with your location */}
            <div className="rounded-2xl overflow-hidden shadow-2xl shadow-black/30">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3771.255013872!2d73.123456!3d19.234567!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjnCsDE0JzA2LjQiTiA3M8KwMDcnMjQuNSJF!5e0!3m2!1sen!2sin!4v1709500000000!5m2!1sen!2sin"
                width="100%"
                height="300"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Saraswati Nursing College Location"
                className="w-full h-full"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-slate-800 bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-6 text-center">
          <p className="text-xs sm:text-sm text-slate-400">
            © {new Date().getFullYear()} Saraswati Nursing College (S.M.M.B.S.). 
            All rights reserved. | Designed for excellence in nursing education.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
