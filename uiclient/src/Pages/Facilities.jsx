import React, { useState } from 'react'

const facilities = [
  {
    id: 'clinical',
    title: 'Clinical Training Hospitals',
    icon: '🏥',
    short:
      'Tie-ups with multi-speciality hospitals for real-time clinical exposure.',
    long: `Students are posted in reputed multi-speciality hospitals and community health centres for hands-on clinical training under supervision of experienced nursing and medical faculty. Rotations include Medical–Surgical, Pediatrics, Obstetrics & Gynaecology, Psychiatry, ICU, OT, and Community Health, ensuring exposure to diverse patient care situations and protocols.`,
  },
  {
    id: 'labs',
    title: 'Modern Nursing Labs',
    icon: '🩺',
    short:
      'Well-equipped labs replicating real hospital set-ups for skill practice.',
    long: `Fully equipped Nursing Foundation, Community Health, OBG, Pediatric and Simulation labs with mannequins, procedure models, vital-sign equipment and emergency response kits. Students practice all core procedures in a safe environment before performing them in hospitals, building confidence and competence.`,
  },
  {
    id: 'library',
    title: 'Library & E-Resources',
    icon: '📚',
    short:
      'Rich collection of nursing books, journals and online databases.',
    long: `The central library hosts an extensive nursing and medical collection with national and international journals, recent editions of textbooks, reference materials, and previous university question papers. Digital access to e-books and online databases is provided along with a quiet reading hall and dedicated research corner.`,
  },
  {
    id: 'hostel',
    title: 'Hostel & Mess',
    icon: '🏡',
    short:
      'Safe, hygienic and disciplined hostel facilities for outstation students.',
    long: `Separate hostels for girls (and boys if applicable) with 24×7 security, wardens, CCTV surveillance, RO drinking water and regular housekeeping. The mess provides nutritious vegetarian/non-vegetarian meals planned by dieticians. Study rooms, Wi‑Fi, recreation spaces and quiet hours support focused learning.`,
  },
  {
    id: 'transport',
    title: 'College Transport',
    icon: '🚌',
    short:
      'Own buses for clinical postings and daily commuting from key locations.',
    long: `Well-maintained buses operate on fixed routes covering major parts of the city and nearby areas. Transport is provided for clinical postings, community visits, educational tours, and co-curricular activities, ensuring safe and punctual travel for students and staff.`,
  },
  {
    id: 'support',
    title: 'Student Support & Activities',
    icon: '🤝',
    short:
      'Mentorship, counseling and vibrant co‑curricular activities.',
    long: `Each student is allotted a faculty mentor for academic and personal guidance. Regular counseling sessions, personality development workshops, SNA activities, sports, cultural fests, health camps, and community outreach programs help in holistic development and leadership building.`,
  },
]

const Facility = () => {
  const [expandedId, setExpandedId] = useState(null)

  const toggleFacility = (id) => {
    setExpandedId((prev) => (prev === id ? null : id))
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-white to-orange-50 text-slate-900">
      {/* Hero */}
      <section className="relative bg-gradient-to-r from-pink-600 via-rose-500 to-orange-500 text-white py-16 sm:py-20 overflow-hidden">
        <div className="absolute inset-0 bg-black/20" />
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            College Facilities
          </h1>
          <p className="text-sm sm:text-base lg:text-lg max-w-2xl mx-auto leading-relaxed text-pink-50">
            Well‑planned infrastructure and student‑centric facilities to support
            quality nursing education and holistic development.
          </p>
        </div>
      </section>

      {/* Facilities cards */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
        <div className="grid gap-6 sm:gap-8 md:grid-cols-2">
          {facilities.map((facility) => {
            const isExpanded = expandedId === facility.id

            return (
              <div
                key={facility.id}
                className="group bg-white/90 border border-pink-100 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden"
              >
                <div className="flex items-start gap-4 p-4 sm:p-5">
                  {/* Icon */}
                  <div className="flex-shrink-0 w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-gradient-to-br from-pink-100 to-orange-100 flex items-center justify-center text-2xl">
                    {facility.icon}
                  </div>

                  {/* Text area */}
                  <div className="flex-1 min-w-0">
                    <h2 className="text-base sm:text-lg font-semibold text-slate-900 mb-1">
                      {facility.title}
                    </h2>
                    <p className="text-sm text-slate-600">
                      {facility.short}
                    </p>
                  </div>
                </div>

                {/* Read more / less section */}
                {isExpanded && (
                  <div className="px-4 sm:px-5 pb-4 sm:pb-5 pt-1">
                    <div className="mt-2 rounded-xl bg-pink-50/70 border border-pink-100 px-3 sm:px-4 py-3">
                      <p className="text-sm text-slate-700 leading-relaxed">
                        {facility.long}
                      </p>
                    </div>
                  </div>
                )}

                <div className="px-4 sm:px-5 pb-4">
                  <button
                    onClick={() => toggleFacility(facility.id)}
                    className="inline-flex items-center text-xs sm:text-sm font-semibold rounded-full px-4 py-2 bg-pink-600 text-white hover:bg-pink-700 transition-colors"
                  >
                    {isExpanded ? 'Hide details' : 'Read more'}
                    <span className="ml-1 text-base">
                      {isExpanded ? '▲' : '▼'}
                    </span>
                  </button>
                </div>
              </div>
            )
          })}
        </div>
      </section>
    </div>
  )
}

export default Facility
