import React from 'react'

const Admission = () => {
  const programs = [
    {
      name: 'B.Sc. Nursing',
      duration: '4 Years',
      eligibility: '10+2 with Physics, Chemistry, Biology (PCB) - 45% aggregate',
      age: '17-35 years',
      seats: '60',
      entrance: 'NEET (preferred) / College Entrance / Merit',
      documents: [
        '10th & 12th Mark sheets',
        'Transfer Certificate',
        'Migration Certificate (Non-Maharashtra)',
        'Domicile Certificate',
        'Caste Certificate (if applicable)',
        'Gap Certificate (if applicable)'
      ]
    },
    {
      name: 'G.N.M.',
      duration: '3 Years + 6 Months Internship',
      eligibility: '10+2 any stream - 40% aggregate',
      age: '17-35 years',
      seats: '40',
      entrance: 'Merit Based / College Entrance Test',
      documents: [
        '10th & 12th Mark sheets',
        'Transfer Certificate',
        'Character Certificate',
        'Medical Fitness Certificate'
      ]
    },
    {
      name: 'Post Basic B.Sc. Nursing',
      duration: '2 Years',
      eligibility: 'G.N.M. Diploma + Maharashtra Nursing Council Registration',
      age: 'No upper age limit',
      seats: '30',
      entrance: 'Written Test + Interview',
      documents: [
        'G.N.M. Diploma & Mark sheets',
        'MNC Registration Certificate',
        'Experience Certificate (if any)',
        '10th & 12th Mark sheets'
      ]
    }
  ]

  const admissionProcess = [
    {
      step: 1,
      title: 'Application',
      desc: 'Fill online/offline application form with required documents.',
      icon: '📝'
    },
    {
      step: 2,
      title: 'Entrance Test',
      desc: 'Appear for college entrance test or use NEET/merit scores.',
      icon: '✏️'
    },
    {
      step: 3,
      title: 'Document Verification',
      desc: 'Verification of academic certificates and eligibility.',
      icon: '✅'
    },
    {
      step: 4,
      title: 'Counseling & Selection',
      desc: 'Personal interview and merit list publication.',
      icon: '🎯'
    },
    {
      step: 5,
      title: 'Fee Payment & Admission',
      desc: 'Pay fees and complete admission formalities.',
      icon: '💰'
    }
  ]

  const faqs = [
    {
      question: 'What is the last date to apply?',
      answer: 'Applications are accepted throughout the year. However, for the main academic session, the deadline is usually 31st May. Please check the official website for exact dates.'
    },
    {
      question: 'Is hostel facility available?',
      answer: 'Yes, separate hostel facilities are available for boys and girls with 24/7 security, nutritious food, and all modern amenities.'
    },
    {
      question: 'Can I apply for multiple programs?',
      answer: 'Yes, you can apply for multiple programs. However, separate application forms need to be submitted for each program.'
    },
    {
      question: 'What is the scholarship criteria?',
      answer: 'Scholarships are available for meritorious students, reserved categories, and economically weaker sections as per government norms.'
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-white to-orange-50">
      {/* Hero */}
      <section className="relative bg-gradient-to-r from-pink-600 via-rose-500 to-emerald-500 text-white py-20 sm:py-28 overflow-hidden">
        <div className="absolute inset-0 bg-black/20" />
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 drop-shadow-2xl">
            Admissions Open
          </h1>
          <p className="text-lg sm:text-xl max-w-3xl mx-auto mb-8 drop-shadow-lg">
            Secure your seat in our world-class nursing programs. Limited seats available.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#apply"
              className="inline-flex items-center bg-white text-pink-600 font-bold px-8 py-4 rounded-2xl shadow-2xl hover:shadow-3xl hover:-translate-y-1 transition-all text-lg"
            >
              Apply Now
            </a>
            <a
              href="#criteria"
              className="inline-flex items-center border-2 border-white/50 bg-white/10 backdrop-blur-sm font-bold px-8 py-4 rounded-2xl hover:bg-white/20 transition-all text-lg"
            >
              View Eligibility
            </a>
          </div>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24 -mt-12">
        {/* Admission Process Timeline */}
        <section id="process" className="mb-20">
          <h2 className="text-3xl sm:text-4xl font-bold text-center text-slate-900 mb-4">
            Simple 5-Step Admission Process
          </h2>
          <p className="text-lg text-slate-600 text-center max-w-3xl mx-auto mb-16">
            Transparent and student-friendly admission process.
          </p>

          <div className="grid md:grid-cols-5 gap-6">
            {admissionProcess.map((step) => (
              <div key={step.step} className="group text-center">
                <div className="relative">
                  <div className="w-20 h-20 mx-auto mb-4 bg-gradient-to-br from-pink-500 to-orange-500 rounded-2xl flex items-center justify-center text-3xl shadow-xl group-hover:shadow-2xl transition-all group-hover:scale-110">
                    {step.icon}
                  </div>
                  <div className="hidden md:block absolute top-10 left-[60%] w-full h-0.5 bg-gradient-to-r from-pink-200 to-transparent" />
                </div>
                <div className="bg-white/80 backdrop-blur-sm p-6 rounded-2xl border border-pink-100 shadow-lg hover:shadow-xl hover:-translate-y-2 transition-all">
                  <div className="font-bold text-2xl text-pink-600 mb-2">
                    {step.step}
                  </div>
                  <h4 className="font-bold text-xl text-slate-900 mb-3">
                    {step.title}
                  </h4>
                  <p className="text-sm text-slate-700 leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Eligibility Criteria Table */}
        <section id="criteria" className="mb-20">
          <h2 className="text-3xl sm:text-4xl font-bold text-center text-slate-900 mb-4">
            Program-wise Eligibility
          </h2>
          <p className="text-lg text-slate-600 text-center mb-12">
            Check your eligibility and required documents for each program.
          </p>

          <div className="bg-white/90 backdrop-blur-sm rounded-3xl shadow-2xl border border-pink-100 overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="bg-gradient-to-r from-pink-600 to-orange-500 text-white">
                    <th className="px-6 py-4 text-left text-sm font-bold uppercase tracking-wider">
                      Program
                    </th>
                    <th className="px-6 py-4 text-left text-sm font-bold uppercase tracking-wider">
                      Duration
                    </th>
                    <th className="px-6 py-4 text-left text-sm font-bold uppercase tracking-wider">
                      Eligibility
                    </th>
                    <th className="px-6 py-4 text-left text-sm font-bold uppercase tracking-wider">
                      Age Limit
                    </th>
                    <th className="px-6 py-4 text-left text-sm font-bold uppercase tracking-wider">
                      Seats
                    </th>
                    <th className="px-6 py-4 text-left text-sm font-bold uppercase tracking-wider">
                      Entrance
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-pink-100">
                  {programs.map((program, index) => (
                    <tr 
                      key={program.name}
                      className="hover:bg-pink-50/50 transition-colors group"
                    >
                      <td className="px-6 py-5 font-semibold text-slate-900">
                        {program.name}
                      </td>
                      <td className="px-6 py-5">
                        <span className="inline-flex items-center px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-sm font-medium">
                          {program.duration}
                        </span>
                      </td>
                      <td className="px-6 py-5 text-sm text-slate-700">
                        {program.eligibility}
                      </td>
                      <td className="px-6 py-5">
                        <span className="inline-flex items-center px-3 py-1 rounded-full bg-blue-100 text-blue-800 text-sm font-medium">
                          {program.age}
                        </span>
                      </td>
                      <td className="px-6 py-5">
                        <span className="inline-flex items-center px-3 py-1 rounded-full bg-orange-100 text-orange-800 text-sm font-bold">
                          {program.seats}
                        </span>
                      </td>
                      <td className="px-6 py-5 text-sm font-medium text-slate-800">
                        {program.entrance}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Required Documents */}
          <div className="mt-16">
            <h3 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-2">
              <span className="text-3xl">📋</span>
              Required Documents for All Programs
            </h3>
            
            <div className="grid md:grid-cols-3 gap-6">
              {programs.map((program) => (
                <div key={program.name} className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-pink-100 shadow-lg">
                  <h4 className="font-bold text-lg text-slate-900 mb-4 pb-2 border-b border-pink-100">
                    {program.name}
                  </h4>
                  <ul className="space-y-3">
                    {program.documents.map((doc, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-sm">
                        <span className="text-pink-500 mt-1 flex-shrink-0">•</span>
                        <span className="text-slate-700">{doc}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            <div className="mt-8 p-6 bg-blue-50/80 backdrop-blur-sm rounded-2xl border border-blue-100">
              <p className="text-sm text-blue-800 flex items-start gap-3">
                <span className="text-xl">ℹ️</span>
                <span>All documents should be self-attested. Bring original documents for verification along with 2 sets of Xerox copies. Recent passport size photographs (6 copies) are also required.</span>
              </p>
            </div>
          </div>
        </section>

        {/* Important Dates */}
        <section className="mb-20">
          <h2 className="text-3xl sm:text-4xl font-bold text-center text-slate-900 mb-12">
            Important Dates
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white/80 backdrop-blur-sm p-6 rounded-2xl border border-pink-100 shadow-lg text-center">
              <div className="text-4xl mb-3">📅</div>
              <h4 className="font-bold text-lg text-slate-900 mb-2">Application Starts</h4>
              <p className="text-2xl font-bold text-pink-600">1st Jan 2024</p>
            </div>
            <div className="bg-white/80 backdrop-blur-sm p-6 rounded-2xl border border-pink-100 shadow-lg text-center">
              <div className="text-4xl mb-3">⏰</div>
              <h4 className="font-bold text-lg text-slate-900 mb-2">Last Date</h4>
              <p className="text-2xl font-bold text-orange-600">31st May 2024</p>
            </div>
            <div className="bg-white/80 backdrop-blur-sm p-6 rounded-2xl border border-pink-100 shadow-lg text-center">
              <div className="text-4xl mb-3">✏️</div>
              <h4 className="font-bold text-lg text-slate-900 mb-2">Entrance Test</h4>
              <p className="text-2xl font-bold text-emerald-600">15th June 2024</p>
            </div>
            <div className="bg-white/80 backdrop-blur-sm p-6 rounded-2xl border border-pink-100 shadow-lg text-center">
              <div className="text-4xl mb-3">🎯</div>
              <h4 className="font-bold text-lg text-slate-900 mb-2">Merit List</h4>
              <p className="text-2xl font-bold text-purple-600">30th June 2024</p>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="mb-20">
          <h2 className="text-3xl sm:text-4xl font-bold text-center text-slate-900 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-slate-600 text-center mb-12">
            Got questions? We've got answers.
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-pink-100 shadow-lg hover:shadow-xl transition-all">
                <h3 className="font-bold text-lg text-slate-900 mb-3 flex items-center gap-2">
                  <span className="w-6 h-6 rounded-full bg-pink-100 text-pink-600 flex items-center justify-center text-sm">Q</span>
                  {faq.question}
                </h3>
                <p className="text-slate-700 pl-8 text-sm leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section id="apply" className="relative bg-gradient-to-r from-pink-600 via-rose-500 to-emerald-500 rounded-3xl overflow-hidden shadow-2xl">
          <div className="absolute inset-0 bg-black/20" />
          <div className="relative z-10 px-8 py-16 text-center text-white">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Ready to Begin Your Nursing Journey?
            </h2>
            <p className="text-lg sm:text-xl max-w-2xl mx-auto mb-8 opacity-90">
              Take the first step towards a rewarding career in healthcare. 
              Limited seats available for the academic year 2024-25.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/apply-now"
                className="inline-flex items-center bg-white text-pink-600 font-bold px-10 py-5 rounded-2xl shadow-2xl hover:shadow-3xl hover:-translate-y-1 transition-all text-lg"
              >
                Apply Online Now
                <span className="ml-2 text-xl">→</span>
              </a>
              <a
                href="/contact"
                className="inline-flex items-center border-2 border-white/50 bg-white/10 backdrop-blur-sm font-bold px-10 py-5 rounded-2xl hover:bg-white/20 transition-all text-lg"
              >
                Download Brochure
                <span className="ml-2 text-xl">📄</span>
              </a>
            </div>
            <p className="mt-8 text-sm opacity-75">
              For any admission queries, call: <strong>+91 98765 43210</strong> or email: <strong>admissions@snc.edu</strong>
            </p>
          </div>
        </section>
      </div>
    </div>
  )
}

export default Admission