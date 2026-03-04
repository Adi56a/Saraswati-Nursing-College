import React, { useState, useEffect } from 'react'

// Sample facility images - you can replace these with your actual images
const facilityImages = {
  clinical: [
    'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=2053&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1586773860418-d37222d8fce3?q=80&w=2073&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1629909613654-28e377c37b09?q=80&w=2068&auto=format&fit=crop'
  ],
  labs: [
    'https://images.unsplash.com/photo-1581093588401-fbb62a02f120?q=80&w=2070&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1581093450021-4a7360e9a6b5?q=80&w=2070&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1576675466969-38eeae4b41f6?q=80&w=2064&auto=format&fit=crop'
  ],
  library: [
    'https://images.unsplash.com/photo-1568667256549-094345857637?q=80&w=2015&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?q=80&w=2070&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1507842217343-583bb7270b66?q=80&w=2070&auto=format&fit=crop'
  ],
  hostel: [
    'https://images.unsplash.com/photo-1555854877-bab0e564b8d5?q=80&w=2069&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?q=80&w=2071&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1556911220-bff31c812dba?q=80&w=2168&auto=format&fit=crop'
  ],
  transport: [
    'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?q=80&w=2069&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1494412574643-ff11b0a5c1c3?q=80&w=2070&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1494783367193-149034c05e8f?q=80&w=2070&auto=format&fit=crop'
  ],
  support: [
    'https://images.unsplash.com/photo-1521791136064-7986c2920216?q=80&w=2069&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?q=80&w=2069&auto=format&fit=crop'
  ]
}

const facilities = [
  {
    id: 'clinical',
    title: 'Clinical Training Hospitals',
    icon: '🏥',
    short: 'Tie-ups with multi-speciality hospitals for real-time clinical exposure.',
    long: `Students are posted in reputed multi-speciality hospitals and community health centres for hands-on clinical training under supervision of experienced nursing and medical faculty. Rotations include Medical–Surgical, Pediatrics, Obstetrics & Gynaecology, Psychiatry, ICU, OT, and Community Health, ensuring exposure to diverse patient care situations and protocols.`,
    highlights: [
      '5+ Partner Hospitals',
      'ICU & OT Rotations',
      'Community Health Centers',
      'Expert Supervision'
    ]
  },
  {
    id: 'labs',
    title: 'Modern Nursing Labs',
    icon: '🩺',
    short: 'Well-equipped labs replicating real hospital set-ups for skill practice.',
    long: `Fully equipped Nursing Foundation, Community Health, OBG, Pediatric and Simulation labs with mannequins, procedure models, vital-sign equipment and emergency response kits. Students practice all core procedures in a safe environment before performing them in hospitals, building confidence and competence.`,
    highlights: [
      'Simulation Labs',
      'ICU Mock Setup',
      'Emergency Response Kits',
      '24/7 Practice Access'
    ]
  },
  {
    id: 'library',
    title: 'Library & E-Resources',
    icon: '📚',
    short: 'Rich collection of nursing books, journals and online databases.',
    long: `The central library hosts an extensive nursing and medical collection with national and international journals, recent editions of textbooks, reference materials, and previous university question papers. Digital access to e-books and online databases is provided along with a quiet reading hall and dedicated research corner.`,
    highlights: [
      '10,000+ Books',
      '50+ Journals',
      'Digital Library Access',
      'Research Corner'
    ]
  },
  {
    id: 'hostel',
    title: 'Hostel & Mess',
    icon: '🏡',
    short: 'Safe, hygienic and disciplined hostel facilities for outstation students.',
    long: `Separate hostels for girls and boys with 24×7 security, wardens, CCTV surveillance, RO drinking water and regular housekeeping. The mess provides nutritious vegetarian meals planned by dieticians. Study rooms, Wi‑Fi, recreation spaces and quiet hours support focused learning.`,
    highlights: [
      'Separate Girls & Boys Hostel',
      '24/7 Security',
      'Nutritious Meals',
      'Wi-Fi Enabled'
    ]
  },
  {
    id: 'transport',
    title: 'College Transport',
    icon: '🚌',
    short: 'Own buses for clinical postings and daily commuting from key locations.',
    long: `Well-maintained buses operate on fixed routes covering major parts of the city and nearby areas. Transport is provided for clinical postings, community visits, educational tours, and co-curricular activities, ensuring safe and punctual travel for students and staff.`,
    highlights: [
      '5+ Bus Routes',
      'GPS Tracked',
      'Female Attendants',
      'Emergency Transport'
    ]
  },
  {
    id: 'support',
    title: 'Student Support & Activities',
    icon: '🤝',
    short: 'Mentorship, counseling and vibrant co‑curricular activities.',
    long: `Each student is allotted a faculty mentor for academic and personal guidance. Regular counseling sessions, personality development workshops, SNA activities, sports, cultural fests, health camps, and community outreach programs help in holistic development and leadership building.`,
    highlights: [
      'Faculty Mentorship',
      'Counseling Services',
      'Cultural Events',
      'Health Camps'
    ]
  },
]

const FacilityCard = ({ facility, isExpanded, onToggle }) => {
  const [currentImage, setCurrentImage] = useState(0)
  const images = facilityImages[facility.id] || facilityImages.clinical

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div 
      className={`group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden ${
        isExpanded ? 'ring-2 ring-pink-500 ring-offset-2' : ''
      }`}
    >
      {/* Image Slider */}
      <div className="relative h-48 overflow-hidden">
        {images.map((img, index) => (
          <img
            key={index}
            src={img}
            alt={`${facility.title} - ${index + 1}`}
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
              index === currentImage ? 'opacity-100' : 'opacity-0'
            }`}
          />
        ))}
        
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
        
        {/* Icon Badge */}
        <div className="absolute top-4 left-4 w-12 h-12 rounded-2xl bg-white/20 backdrop-blur-sm border border-white/30 flex items-center justify-center text-2xl">
          {facility.icon}
        </div>

        {/* Image Indicators */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-1.5">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentImage(index)}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                index === currentImage 
                  ? 'w-6 bg-white' 
                  : 'w-1.5 bg-white/50 hover:bg-white/80'
              }`}
            />
          ))}
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <div className="flex items-start justify-between mb-3">
          <h3 className="text-xl font-bold text-slate-900">{facility.title}</h3>
          <span className="text-3xl opacity-50 group-hover:opacity-100 transition-opacity">
            {facility.icon}
          </span>
        </div>

        <p className="text-slate-600 mb-4">{facility.short}</p>

        {/* Highlights */}
        <div className="flex flex-wrap gap-2 mb-4">
          {facility.highlights.map((highlight, idx) => (
            <span
              key={idx}
              className="px-3 py-1 bg-gradient-to-r from-pink-50 to-orange-50 text-pink-700 text-xs font-medium rounded-full border border-pink-200"
            >
              {highlight}
            </span>
          ))}
        </div>

        {/* Expandable Details */}
        <div className={`transition-all duration-500 overflow-hidden ${
          isExpanded ? 'max-h-96 opacity-100 mb-4' : 'max-h-0 opacity-0'
        }`}>
          <div className="p-4 bg-gradient-to-br from-pink-50 to-orange-50 rounded-xl border border-pink-200">
            <p className="text-sm text-slate-700 leading-relaxed">
              {facility.long}
            </p>
          </div>
        </div>

        {/* Action Button */}
        <button
          onClick={onToggle}
          className="inline-flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-pink-600 to-orange-600 text-white font-semibold rounded-xl hover:from-pink-700 hover:to-orange-700 transition-all hover:-translate-y-0.5 shadow-lg"
        >
          <span>{isExpanded ? 'Show Less' : 'Explore More'}</span>
          <svg
            className={`w-4 h-4 transition-transform duration-300 ${
              isExpanded ? 'rotate-180' : ''
            }`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </button>
      </div>
    </div>
  )
}

const Facility = () => {
  const [expandedId, setExpandedId] = useState(null)
  const [filter, setFilter] = useState('all')

  const toggleFacility = (id) => {
    setExpandedId((prev) => (prev === id ? null : id))
  }

  const categories = [
    { id: 'all', label: 'All Facilities', icon: '🏛️' },
    { id: 'clinical', label: 'Clinical', icon: '🏥' },
    { id: 'labs', label: 'Labs', icon: '🩺' },
    { id: 'library', label: 'Library', icon: '📚' },
    { id: 'hostel', label: 'Hostel', icon: '🏡' }
  ]

  const filteredFacilities = filter === 'all' 
    ? facilities 
    : facilities.filter(f => f.id === filter)

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-white to-orange-50">
      {/* Hero Section with Parallax */}
      <section className="relative bg-gradient-to-r from-pink-600 via-purple-600 to-orange-600 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/20" />
        <div className="absolute inset-0 bg-[url('/noise.svg')] opacity-10" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
          <div className="max-w-3xl mx-auto text-center">
            <span className="inline-flex items-center rounded-full bg-white/20 backdrop-blur-sm px-4 py-2 text-sm font-semibold mb-6 border border-white/30">
              🏆 World-Class Infrastructure
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              State-of-the-Art Facilities
            </h1>
            <p className="text-xl text-white/90 max-w-2xl mx-auto">
              Experience excellence in nursing education with our modern infrastructure,
              advanced labs, and student-centric amenities.
            </p>
          </div>
        </div>

        {/* Wave Divider */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 120L60 105C120 90 240 60 360 45C480 30 600 30 720 37.5C840 45 960 60 1080 67.5C1200 75 1320 75 1380 75L1440 75V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" 
              className="fill-white" />
          </svg>
        </div>
      </section>

      {/* Category Filter */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-12 relative z-10">
        <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl p-4 mb-12">
          <div className="flex flex-wrap gap-2 justify-center">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setFilter(cat.id)}
                className={`flex items-center gap-2 px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
                  filter === cat.id
                    ? 'bg-gradient-to-r from-pink-600 to-orange-600 text-white shadow-lg scale-105'
                    : 'bg-slate-100 text-slate-600 hover:bg-pink-100 hover:text-pink-600'
                }`}
              >
                <span>{cat.icon}</span>
                <span>{cat.label}</span>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Facilities Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredFacilities.map((facility) => (
            <FacilityCard
              key={facility.id}
              facility={facility}
              isExpanded={expandedId === facility.id}
              onToggle={() => toggleFacility(facility.id)}
            />
          ))}
        </div>

        {/* Stats Section */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="group bg-white rounded-2xl p-6 text-center border border-pink-100 hover:border-pink-300 hover:shadow-xl transition-all hover:-translate-y-1">
            <div className="text-4xl mb-3 group-hover:scale-110 transition-transform">🏥</div>
            <div className="text-2xl font-bold text-pink-600 mb-1">5+</div>
            <div className="text-sm text-slate-600">Partner Hospitals</div>
          </div>
          <div className="group bg-white rounded-2xl p-6 text-center border border-emerald-100 hover:border-emerald-300 hover:shadow-xl transition-all hover:-translate-y-1">
            <div className="text-4xl mb-3 group-hover:scale-110 transition-transform">🔬</div>
            <div className="text-2xl font-bold text-emerald-600 mb-1">8</div>
            <div className="text-sm text-slate-600">Specialized Labs</div>
          </div>
          <div className="group bg-white rounded-2xl p-6 text-center border border-orange-100 hover:border-orange-300 hover:shadow-xl transition-all hover:-translate-y-1">
            <div className="text-4xl mb-3 group-hover:scale-110 transition-transform">📚</div>
            <div className="text-2xl font-bold text-orange-600 mb-1">10k+</div>
            <div className="text-sm text-slate-600">Library Books</div>
          </div>
          <div className="group bg-white rounded-2xl p-6 text-center border border-purple-100 hover:border-purple-300 hover:shadow-xl transition-all hover:-translate-y-1">
            <div className="text-4xl mb-3 group-hover:scale-110 transition-transform">👥</div>
            <div className="text-2xl font-bold text-purple-600 mb-1">500+</div>
            <div className="text-sm text-slate-600">Hostel Capacity</div>
          </div>
        </div>

        {/* Virtual Tour CTA */}
        <div className="mt-20 relative bg-gradient-to-r from-pink-600 to-orange-600 rounded-3xl overflow-hidden">
          <div className="absolute inset-0 bg-black/20" />
          <div className="absolute inset-0 bg-[url('/noise.svg')] opacity-10" />
          <div className="relative px-8 py-12 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">
              Want to See More?
            </h2>
            <p className="text-lg text-white/90 mb-6 max-w-2xl mx-auto">
              Take a virtual tour of our campus and facilities from the comfort of your home.
            </p>
            <button className="inline-flex items-center gap-2 px-8 py-4 bg-white text-pink-600 font-semibold rounded-xl hover:bg-slate-100 transition-all hover:-translate-y-1 shadow-2xl">
              <span>Launch Virtual Tour</span>
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Facility