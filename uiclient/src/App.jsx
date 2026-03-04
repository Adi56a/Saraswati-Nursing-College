import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import Home from './Pages/Home'
import Navbar from './Components/Navbar'
import Footer from './Components/Footer'
import About from './Pages/About'
import Courses from './Pages/Courses'
import Facility from './Pages/Facilities'
import Admission from './Pages/Admission'
import Faculty from './Pages/Faculty'
import Gallery from './Pages/Gallary'
import Contact from './Pages/Contact'
import MuHSMandiate from './Pages/MuHSMandiate'

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen flex flex-col">
        {/* Navbar - top */}
        <Navbar />

        {/* Main content - fills space */}
        <div className="flex-1 pt-16">
          <Routes>
            <Route path="/" element={<Home />} />
            {/* Uncomment as you create pages */}
            <Route path="/about" element={<About />} />
            <Route path="/muhs-mandiate" element={<MuHSMandiate />} />
            <Route path="/courses" element={<Courses />} />
            <Route path="/facilities" element={<Facility />} />
            <Route path="/admissions" element={<Admission />} />
            <Route path="/faculty" element={<Faculty />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/contact" element={<Contact />} />

            <Route path="*" element={<h1>Page Not Found</h1>} />
          </Routes>
        </div>

        {/* Footer - always at bottom */}
        <Footer />
      </div>
    </BrowserRouter>
  )
}

export default App
