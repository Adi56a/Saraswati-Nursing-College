import React from 'react'
import { 
  FaGraduationCap, 
  FaUserNurse, 
  FaFlask,
  FaClock, 
  FaUserFriends, 
  FaRupeeSign,
  FaCheckCircle,
  FaArrowRight,
  FaHospital,
  FaChalkboardTeacher,
  FaBook,
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaAward,
  FaUsers,
  FaChartLine,
  FaStar
} from 'react-icons/fa'
import { MdHealthAndSafety, MdSchool, MdLibraryBooks } from 'react-icons/md'
import { GiNurseMale, GiStethoscope } from 'react-icons/gi'
import { IoMdHeart } from 'react-icons/io'
import { BiTimeFive } from 'react-icons/bi'
import { BsFillBriefcaseFill } from 'react-icons/bs'

const Courses = () => {
  const courses = [
    {
      title: 'B.Sc. Nursing',
      duration: '4 Years',
      eligibility: '10+2 (PCB) with 45%',
      seats: '60',
      fees: '85,000',
      period: 'per annum',
      icon: <FaGraduationCap className="w-6 h-6" />,
      color: 'rose',
      features: [
        'Comprehensive nursing foundation',
        'Clinical rotations at top hospitals',
        'Research methodology training',
        'Leadership & management skills'
      ]
    },
    {
      title: 'GNM',
      subtitle: 'General Nursing & Midwifery',
      duration: '3 Years',
      eligibility: '10+2 with 40%',
      seats: '40',
      fees: '65,000',
      period: 'per annum',
      icon: <GiNurseMale className="w-6 h-6" />,
      color: 'emerald',
      features: [
        'Midwifery & child health',
        'Community health nursing',
        'Emergency trauma care',
        'Ward administration'
      ]
    },
    {
      title: 'Post Basic B.Sc.',
      subtitle: 'For GNM graduates',
      duration: '2 Years',
      eligibility: 'GNM with registration',
      seats: '30',
      fees: '75,000',
      period: 'per annum',
      icon: <FaFlask className="w-6 h-6" />,
      color: 'blue',
      features: [
        'Advanced nursing practice',
        'Nursing education & research',
        'Clinical specialization',
        'Healthcare administration'
      ]
    }
  ]

  const getColorClasses = (color) => {
    const colors = {
      rose: {
        light: 'from-rose-50 to-pink-50',
        border: 'border-rose-200',
        text: 'text-rose-700',
        bg: 'bg-rose-500',
        gradient: 'from-rose-500 to-pink-500',
        hover: 'hover:bg-rose-50',
        badge: 'bg-rose-100 text-rose-700',
        iconBg: 'bg-rose-100'
      },
      emerald: {
        light: 'from-emerald-50 to-teal-50',
        border: 'border-emerald-200',
        text: 'text-emerald-700',
        bg: 'bg-emerald-500',
        gradient: 'from-emerald-500 to-teal-500',
        hover: 'hover:bg-emerald-50',
        badge: 'bg-emerald-100 text-emerald-700',
        iconBg: 'bg-emerald-100'
      },
      blue: {
        light: 'from-blue-50 to-indigo-50',
        border: 'border-blue-200',
        text: 'text-blue-700',
        bg: 'bg-blue-500',
        gradient: 'from-blue-500 to-indigo-500',
        hover: 'hover:bg-blue-50',
        badge: 'bg-blue-100 text-blue-700',
        iconBg: 'bg-blue-100'
      }
    }
    return colors[color]
  }

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Hero Section - Clean & Professional */}
      <section className="relative bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-rose-50 text-rose-700 text-sm font-semibold mb-6 border border-rose-200">
              <MdHealthAndSafety className="w-4 h-4" />
              MUHS Approved Programs
            </span>
            <h1 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6 leading-tight">
              Nursing Programs Designed for Excellence
            </h1>
            <p className="text-lg lg:text-xl text-slate-600 leading-relaxed max-w-2xl">
              Choose from our comprehensive range of nursing programs, each crafted to 
              develop skilled, compassionate healthcare professionals ready for modern challenges.
            </p>
          </div>
        </div>
      </section>

      {/* Courses Grid - Professional Cards */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
        <div className="grid lg:grid-cols-3 gap-8">
          {courses.map((course) => {
            const colors = getColorClasses(course.color)
            
            return (
              <div
                key={course.title}
                className="group bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-200 hover:border-transparent overflow-hidden"
              >
                {/* Card Header */}
                <div className={`p-8 bg-gradient-to-br ${colors.light} border-b ${colors.border}`}>
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-2xl font-bold text-slate-900 mb-1">
                        {course.title}
                      </h3>
                      {course.subtitle && (
                        <p className={`text-sm font-medium ${colors.text}`}>
                          {course.subtitle}
                        </p>
                      )}
                    </div>
                    <div className={`w-14 h-14 rounded-xl ${colors.iconBg} flex items-center justify-center text-2xl ${colors.text}`}>
                      {course.icon}
                    </div>
                  </div>
                  
                  {/* Quick Stats */}
                  <div className="grid grid-cols-3 gap-4 mt-6">
                    <div>
                      <div className="flex items-center gap-1 text-2xl font-bold text-slate-900">
                        <FaClock className="w-3 h-3 text-slate-400" />
                        <span>{course.duration}</span>
                      </div>
                      <p className="text-xs text-slate-500 mt-1">Duration</p>
                    </div>
                    <div>
                      <div className="flex items-center gap-1 text-2xl font-bold text-slate-900">
                        <FaUserFriends className="w-4 h-4 text-slate-400" />
                        <span>{course.seats}</span>
                      </div>
                      <p className="text-xs text-slate-500 mt-1">Seats</p>
                    </div>
                    <div>
                      <div className="flex items-center gap-1 text-2xl font-bold text-slate-900">
                        <FaRupeeSign className="w-4 h-4 text-slate-400" />
                        <span>{course.fees}</span>
                      </div>
                      <p className="text-xs text-slate-500 mt-1">{course.period}</p>
                    </div>
                  </div>
                </div>

                {/* Card Body */}
                <div className="p-8">
                  {/* Eligibility */}
                  <div className="mb-8">
                    <h4 className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-3 flex items-center gap-2">
                      <IoMdHeart className="w-4 h-4 text-rose-400" />
                      Eligibility
                    </h4>
                    <div className={`inline-flex items-center gap-2 px-4 py-2 ${colors.badge} rounded-lg text-sm font-medium`}>
                      <GiStethoscope className="w-4 h-4" />
                      {course.eligibility}
                    </div>
                  </div>

                  {/* Features */}
                  <div>
                    <h4 className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-4 flex items-center gap-2">
                      <FaStar className="w-4 h-4 text-amber-400" />
                      Program Highlights
                    </h4>
                    <ul className="space-y-3">
                      {course.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                          <FaCheckCircle className={`w-4 h-4 ${colors.text} mt-0.5 flex-shrink-0`} />
                          <span className="text-sm text-slate-600">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Apply Button */}
                  <div className="mt-8 pt-6 border-t border-slate-100">
                    <a
                      href="/admissions"
                      className={`group block w-full text-center px-6 py-3 rounded-xl border-2 ${colors.border} ${colors.text} font-semibold hover:bg-gradient-to-r ${colors.gradient} hover:text-white hover:border-transparent transition-all duration-300`}
                    >
                      <span className="flex items-center justify-center gap-2">
                        Apply Now
                        <FaArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </span>
                    </a>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </section>

      {/* Key Features - Professional Stats */}
      <section className="bg-white border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center group">
              <div className="flex justify-center mb-3">
                <FaAward className="w-8 h-8 text-amber-500 group-hover:scale-110 transition-transform" />
              </div>
              <div className="text-3xl font-bold text-slate-900 mb-2">100%</div>
              <p className="text-sm font-medium text-slate-500 uppercase tracking-wider">Placement Assistance</p>
            </div>
            <div className="text-center group">
              <div className="flex justify-center mb-3">
                <BiTimeFive className="w-8 h-8 text-emerald-500 group-hover:scale-110 transition-transform" />
              </div>
              <div className="text-3xl font-bold text-slate-900 mb-2">15+</div>
              <p className="text-sm font-medium text-slate-500 uppercase tracking-wider">Years of Excellence</p>
            </div>
            <div className="text-center group">
              <div className="flex justify-center mb-3">
                <FaUsers className="w-8 h-8 text-blue-500 group-hover:scale-110 transition-transform" />
              </div>
              <div className="text-3xl font-bold text-slate-900 mb-2">500+</div>
              <p className="text-sm font-medium text-slate-500 uppercase tracking-wider">Alumni Network</p>
            </div>
            <div className="text-center group">
              <div className="flex justify-center mb-3">
                <FaChartLine className="w-8 h-8 text-rose-500 group-hover:scale-110 transition-transform" />
              </div>
              <div className="text-3xl font-bold text-slate-900 mb-2">95%</div>
              <p className="text-sm font-medium text-slate-500 uppercase tracking-wider">Pass Rate</p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us - Professional Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-50 text-emerald-700 text-sm font-semibold mb-4 border border-emerald-200">
            <IoMdHeart className="w-4 h-4" />
            Why Choose Us
          </span>
          <h2 className="text-3xl font-bold text-slate-900 mb-4">
            Why Choose Saraswati Nursing College?
          </h2>
          <p className="text-lg text-slate-600">
            We combine academic excellence with practical training to create confident nursing professionals.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="p-6 group hover:bg-white rounded-xl transition-all duration-300">
            <div className="w-14 h-14 bg-rose-100 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <FaHospital className="w-6 h-6 text-rose-600" />
            </div>
            <h3 className="text-lg font-semibold text-slate-900 mb-2">Clinical Excellence</h3>
            <p className="text-slate-600 text-sm leading-relaxed">
              Hands-on training at leading hospitals with state-of-the-art simulation labs.
            </p>
          </div>

          <div className="p-6 group hover:bg-white rounded-xl transition-all duration-300">
            <div className="w-14 h-14 bg-emerald-100 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <FaChalkboardTeacher className="w-6 h-6 text-emerald-600" />
            </div>
            <h3 className="text-lg font-semibold text-slate-900 mb-2">Expert Faculty</h3>
            <p className="text-slate-600 text-sm leading-relaxed">
              Learn from experienced educators and practicing healthcare professionals.
            </p>
          </div>

          <div className="p-6 group hover:bg-white rounded-xl transition-all duration-300">
            <div className="w-14 h-14 bg-blue-100 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <MdLibraryBooks className="w-6 h-6 text-blue-600" />
            </div>
            <h3 className="text-lg font-semibold text-slate-900 mb-2">Modern Facilities</h3>
            <p className="text-slate-600 text-sm leading-relaxed">
              Well-equipped labs, digital library, and modern teaching aids.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section - Clean & Professional */}
      <section className="bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="max-w-3xl mx-auto text-center">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 text-white text-sm font-semibold mb-4 border border-white/20">
              <MdHealthAndSafety className="w-4 h-4" />
              Admissions Open 2024-25
            </span>
            <h2 className="text-3xl font-bold mb-4">Ready to Start Your Nursing Journey?</h2>
            <p className="text-lg text-slate-300 mb-10">
              Applications for the upcoming academic year are now open. Limited seats available.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/admissions"
                className="group inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-slate-900 font-semibold rounded-xl hover:bg-slate-100 transition-colors"
              >
                <FaGraduationCap className="w-5 h-5" />
                Apply for Admission
                <FaArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="/contact"
                className="group inline-flex items-center justify-center gap-2 px-8 py-4 border border-slate-700 text-slate-300 font-semibold rounded-xl hover:bg-slate-800 transition-colors"
              >
                <FaPhone className="w-4 h-4" />
                Contact Admissions Office
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Accreditation Footer */}
      <section className="bg-white border-t border-slate-200 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center justify-center gap-8 text-sm text-slate-500">
            <span className="flex items-center gap-2">
              <MdSchool className="w-4 h-4" />
              Approved by Indian Nursing Council
            </span>
            <span className="w-1.5 h-1.5 rounded-full bg-slate-300" />
            <span className="flex items-center gap-2">
              <FaAward className="w-4 h-4" />
              Maharashtra University of Health Sciences
            </span>
            <span className="w-1.5 h-1.5 rounded-full bg-slate-300" />
            <span className="flex items-center gap-2">
              <FaMapMarkerAlt className="w-4 h-4" />
              Recognized by Government of Maharashtra
            </span>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Courses