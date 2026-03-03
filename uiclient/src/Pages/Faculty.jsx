import React, { useState, useEffect } from 'react'

const Faculty = () => {
  const [faculties, setFaculties] = useState([])
  const [loading, setLoading] = useState(true)
  const [selectedFaculty, setSelectedFaculty] = useState(null)

  useEffect(() => {
    // Simulate faculty data fetch - replace with your API
    const facultyData = [
      {
        id: 1,
        name: 'Dr. Priya Sharma',
        designation: 'Principal & Professor',
        qualification: 'M.Sc. Nursing, Ph.D.',
        experience: '18+ Years',
        specialization: 'Nursing Education & Administration',
        image: '/faculty/priya-sharma.jpg',
        shortBio: 'Dynamic leader with 18 years of teaching and administrative experience.',
        awards: ['Best Nursing Educator 2024', 'MUHS Excellence Award'],
        email: 'priya.sharma@snc.edu',
        expertise: ['Curriculum Development', 'Academic Leadership', 'Nursing Research']
      },
      {
        id: 2,
        name: 'Prof. Anita Desai',
        designation: 'Vice Principal & Professor',
        qualification: 'M.Sc. Nursing (Obstetrics)',
        experience: '15 Years',
        specialization: 'Maternal & Child Health',
        image: '/faculty/anita-desai.jpg',
        shortBio: 'Renowned expert in obstetrics and neonatal care.',
        awards: ['State Nursing Excellence Award'],
        email: 'anita.desai@snc.edu',
        expertise: ['Maternal Care', 'Neonatal Nursing', 'Midwifery']
      },
      {
        id: 3,
        name: 'Dr. Rahul Patel',
        designation: 'Professor (Medical-Surgical)',
        qualification: 'M.Sc. Nursing, Ph.D.',
        experience: '12 Years',
        specialization: 'Critical Care Nursing',
        image: '/faculty/rahul-patel.jpg',
        shortBio: 'Specialist in ICU management and emergency care.',
        awards: ['Research Publication Award'],
        email: 'rahul.patel@snc.edu',
        expertise: ['Critical Care', 'Emergency Nursing', 'ICU Management']
      },
      {
        id: 4,
        name: 'Ms. Sneha More',
        designation: 'Associate Professor',
        qualification: 'M.Sc. Nursing (Community Health)',
        experience: '10 Years',
        specialization: 'Community Health Nursing',
        image: '/faculty/sneha-more.jpg',
        shortBio: 'Passionate about rural health and preventive care.',
        awards: ['Community Service Award'],
        email: 'sneha.more@snc.edu',
        expertise: ['Community Health', 'Rural Healthcare', 'Preventive Medicine']
      },
      {
        id: 5,
        name: 'Mr. Vikram Jadhav',
        designation: 'Assistant Professor',
        qualification: 'M.Sc. Nursing (Mental Health)',
        experience: '8 Years',
        specialization: 'Psychiatric Nursing',
        image: '/faculty/vikram-jadhav.jpg',
        shortBio: 'Expert in mental health counseling and therapy.',
        awards: [],
        email: 'vikram.jadhav@snc.edu',
        expertise: ['Mental Health', 'Counseling', 'Therapy']
      },
      {
        id: 6,
        name: 'Mrs. Pooja Rane',
        designation: 'Tutor',
        qualification: 'B.Sc. Nursing',
        experience: '5 Years',
        specialization: 'Fundamentals of Nursing',
        image: '/faculty/pooja-rane.jpg',
        shortBio: 'Dedicated clinical instructor with excellent teaching skills.',
        awards: [],
        email: 'pooja.rane@snc.edu',
        expertise: ['Clinical Teaching', 'Basic Nursing', 'Patient Care']
      }
    ]
    setFaculties(facultyData)
    setLoading(false)
  }, [])

  const stats = [
    { label: 'Professors', value: faculties.filter(f => f.designation.includes('Professor')).length, color: 'bg-blue-50 text-blue-700' },
    { label: 'Ph.D. Holders', value: faculties.filter(f => f.qualification.includes('Ph.D')).length, color: 'bg-purple-50 text-purple-700' },
    { label: 'Avg Experience', value: '12+ Years', color: 'bg-emerald-50 text-emerald-700' },
    { label: 'Publications', value: '50+', color: 'bg-amber-50 text-amber-700' }
  ]

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Hero - Clean and Professional */}
      <section className="bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-24">
          <div className="max-w-3xl">
            <span className="inline-flex items-center px-4 py-2 rounded-full bg-pink-50 text-pink-700 text-sm font-semibold mb-6 border border-pink-200">
              Our Team
            </span>
            <h1 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6 leading-tight">
              Distinguished Faculty & Mentors
            </h1>
            <p className="text-lg lg:text-xl text-slate-600 leading-relaxed">
              Our faculty combines academic excellence with extensive clinical experience 
              to provide students with the best nursing education.
            </p>
          </div>
        </div>
      </section>

      {/* Stats - Clean Metrics */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8">
        <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className={`text-3xl font-bold ${stat.color.split(' ')[1]} mb-2`}>
                  {stat.value}
                </div>
                <div className="text-sm text-slate-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Faculty Grid - Professional Cards */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
        {loading ? (
          <div className="text-center py-20">
            <div className="inline-block animate-spin rounded-full h-8 w-8 border-2 border-slate-300 border-t-pink-600"></div>
            <p className="text-slate-500 mt-4">Loading faculty profiles...</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {faculties.map((faculty) => (
              <div
                key={faculty.id}
                className="group bg-white rounded-xl border border-slate-200 hover:border-pink-200 hover:shadow-lg transition-all duration-300 overflow-hidden"
              >
                {/* Image Container */}
                <div className="relative h-64 overflow-hidden bg-slate-100">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10" />
                  <img
                    src={faculty.image}
                    alt={faculty.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    onError={(e) => {
                      e.target.onerror = null
                      e.target.src = `https://ui-avatars.com/api/?name=${faculty.name.replace(' ', '+')}&size=200&background=random`
                    }}
                  />
                  {/* Awards Badge */}
                  {faculty.awards.length > 0 && (
                    <div className="absolute top-3 right-3 z-20">
                      <span className="inline-flex items-center px-2 py-1 bg-amber-50 text-amber-700 text-xs font-medium rounded border border-amber-200">
                        <span className="mr-1">🏆</span>
                        {faculty.awards.length} Award{faculty.awards.length > 1 ? 's' : ''}
                      </span>
                    </div>
                  )}
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="mb-4">
                    <h3 className="text-xl font-bold text-slate-900 mb-1">
                      {faculty.name}
                    </h3>
                    <p className="text-sm font-medium text-pink-600">
                      {faculty.designation}
                    </p>
                  </div>

                  <p className="text-sm text-slate-600 mb-4 line-clamp-2">
                    {faculty.shortBio}
                  </p>

                  {/* Qualifications */}
                  <div className="space-y-2 mb-4">
                    <div className="flex items-center text-xs">
                      <span className="w-20 text-slate-500">Qualification</span>
                      <span className="text-slate-900 font-medium">{faculty.qualification}</span>
                    </div>
                    <div className="flex items-center text-xs">
                      <span className="w-20 text-slate-500">Experience</span>
                      <span className="text-slate-900 font-medium">{faculty.experience}</span>
                    </div>
                    <div className="flex items-center text-xs">
                      <span className="w-20 text-slate-500">Specialization</span>
                      <span className="text-slate-900 font-medium">{faculty.specialization}</span>
                    </div>
                  </div>

                  {/* Expertise Tags */}
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {faculty.expertise.slice(0, 3).map((item, idx) => (
                      <span
                        key={idx}
                        className="px-2 py-1 bg-slate-100 text-slate-600 text-xs rounded-md"
                      >
                        {item}
                      </span>
                    ))}
                  </div>

                  {/* Email */}
                  <div className="flex items-center text-xs text-slate-500 border-t border-slate-100 pt-3">
                    <svg className="w-3.5 h-3.5 mr-1.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    {faculty.email}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </section>

      {/* Faculty Excellence Section */}
      <section className="bg-white border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="inline-flex items-center px-4 py-2 rounded-full bg-emerald-50 text-emerald-700 text-sm font-semibold mb-4 border border-emerald-200">
              Excellence in Education
            </span>
            <h2 className="text-3xl font-bold text-slate-900 mb-4">
              Why Our Faculty Stands Out
            </h2>
            <p className="text-lg text-slate-600">
              Our educators bring real-world experience and academic rigor to every classroom.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-6">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-slate-900 mb-2">Clinical Experience</h3>
              <p className="text-sm text-slate-600">Average 12+ years of clinical practice in top healthcare institutions.</p>
            </div>

            <div className="p-6">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-slate-900 mb-2">Research Publications</h3>
              <p className="text-sm text-slate-600">50+ research papers published in national and international journals.</p>
            </div>

            <div className="p-6">
              <div className="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-slate-900 mb-2">Mentorship Excellence</h3>
              <p className="text-sm text-slate-600">Personalized guidance and career mentorship for every student.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Join Our Team CTA */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="bg-slate-900 rounded-2xl p-12 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Join Our Faculty</h2>
          <p className="text-lg text-slate-300 mb-8 max-w-2xl mx-auto">
            We're always looking for passionate educators to join our team.
          </p>
          <a
            href="/careers"
            className="inline-flex items-center px-8 py-4 bg-white text-slate-900 font-semibold rounded-xl hover:bg-slate-100 transition-colors"
          >
            View Open Positions
            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </section>
    </div>
  )
}

export default Faculty