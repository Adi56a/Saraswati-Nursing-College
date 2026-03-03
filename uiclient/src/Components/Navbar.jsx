import React, { useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'

const navItems = [
  { label: 'Home', path: '/' },
  { label: 'About', path: '/about' },
  { label: 'MuHS Mandiate', path: '/muhs-mandiate' },
  { label: 'Courses', path: '/courses' },
  { label: 'Facilities', path: '/facilities' },
  { label: 'Admissions', path: '/admissions' },
  { label: 'Faculty', path: '/faculty' },
  { label: 'Gallery', path: '/gallery' },
  { label: 'Contact', path: '/contact' },
]

const Navbar = () => {
  const [open, setOpen] = useState(false)
  const navigate = useNavigate()

  const handleApplyNow = () => {
    navigate('/admissions')
    setOpen(false)
  }

  const baseLinkClasses = 'px-2 py-1 text-xs lg:text-sm font-medium transition-colors'
  const desktopInactive = 'text-slate-700 hover:text-pink-600'
  const desktopActive = 'text-pink-600 font-semibold'

  return (
    <header className="fixed top-0 inset-x-0 z-30 bg-white/95 backdrop-blur-xl border-b border-pink-100 shadow-sm">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        {/* Logo + name - single line, responsive */}
        <div className="flex items-center gap-2 sm:gap-3 min-w-0">
          <img
            src="/Logo.png"
            alt="Saraswati Nursing College Logo"
            className="h-9 w-9 sm:h-10 sm:w-10 lg:h-18 lg:w-18 rounded-full shadow-lg flex-shrink-0"
          />
          <div className="truncate">
            <p className="text-xs sm:text-sm font-bold text-pink-600 tracking-tight leading-tight">
              S.M.M.B.S.
            </p>
            <p className="text-xs sm:text-sm font-extrabold text-slate-900 leading-tight tracking-tight">
              Saraswati Nursing
            </p>
          </div>
        </div>

        {/* Desktop nav - single line, tighter spacing */}
        <nav className="hidden lg:flex items-center gap-1">
          {navItems.map(item => (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) =>
                [
                  baseLinkClasses,
                  isActive ? desktopActive : desktopInactive,
                ].join(' ')
              }
            >
              {item.label}
            </NavLink>
          ))}

          <button
            onClick={handleApplyNow}
            className="ml-2 inline-flex items-center rounded-full bg-gradient-to-r from-pink-600 to-orange-500 px-3 py-1.5 lg:px-4 lg:py-2 text-xs lg:text-sm font-bold text-white shadow-lg shadow-pink-300/50 hover:shadow-xl hover:-translate-y-px hover:from-pink-700 hover:to-orange-600 transition-all duration-200"
          >
            Apply Now
          </button>
        </nav>

        {/* Mobile controls */}
        <div className="flex items-center gap-1 lg:hidden">
          <button
            onClick={handleApplyNow}
            className="inline-flex items-center rounded-full bg-gradient-to-r from-pink-600 to-orange-500 px-2.5 py-1.5 text-xs font-bold text-white shadow-lg shadow-pink-300/50 hover:shadow-xl hover:-translate-y-px hover:from-pink-700 hover:to-orange-600 transition-all duration-200"
          >
            Apply
          </button>
          <button
            onClick={() => setOpen(o => !o)}
            className="inline-flex items-center justify-center rounded-lg p-1.5 lg:p-2 text-slate-700 hover:bg-pink-50 hover:text-pink-700 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:ring-offset-2 transition-all duration-200"
            aria-label="Toggle navigation"
          >
            <svg
              className="h-5 w-5 lg:h-6 lg:w-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              {open ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu - slide down */}
      {open && (
        <div className="lg:hidden border-t border-pink-100 bg-white/95 backdrop-blur-xl shadow-lg">
          <nav className="mx-auto max-w-7xl px-4 py-2">
            <div className="grid grid-cols-2 gap-2 text-sm">
              {navItems.slice(0, 5).map(item => (
                <NavLink
                  key={item.path}
                  to={item.path}
                  onClick={() => setOpen(false)}
                  className={({ isActive }) =>
                    [
                      'block rounded-lg px-3 py-2 font-medium transition-colors text-center',
                      isActive
                        ? 'bg-gradient-to-r from-pink-600 to-orange-500 text-white shadow-lg'
                        : 'text-slate-700 hover:bg-pink-50 hover:text-pink-700',
                    ].join(' ')
                  }
                >
                  {item.label}
                </NavLink>
              ))}
              {navItems.slice(5).map(item => (
                <NavLink
                  key={item.path}
                  to={item.path}
                  onClick={() => setOpen(false)}
                  className={({ isActive }) =>
                    [
                      'block rounded-lg px-3 py-2 font-medium transition-colors text-center',
                      isActive
                        ? 'bg-gradient-to-r from-pink-600 to-orange-500 text-white shadow-lg'
                        : 'text-slate-700 hover:bg-pink-50 hover:text-pink-700',
                    ].join(' ')
                  }
                >
                  {item.label}
                </NavLink>
              ))}
            </div>

            <button
              onClick={handleApplyNow}
              className="mt-3 w-full rounded-full bg-gradient-to-r from-pink-600 to-orange-500 px-6 py-3 text-base font-bold text-white shadow-xl hover:shadow-2xl hover:-translate-y-px transition-all duration-200"
            >
              Apply Now
            </button>
          </nav>
        </div>
      )}
    </header>
  )
}

export default Navbar
