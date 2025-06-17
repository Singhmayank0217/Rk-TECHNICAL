import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Navbar from "./components/layout/Navbar"
import Footer from "./components/layout/Footer"
import Home from "./pages/Home"
import About from "./pages/About"
import Services from "./pages/Services"
import Contact from "./pages/Contact"
import CompletedProjects from "./pages/portfolio/CompletedProjects"
import OngoingProjects from "./pages/portfolio/OngoingProjects"
import "./App.css"

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/portfolio/completed" element={<CompletedProjects />} />
          <Route path="/portfolio/ongoing" element={<OngoingProjects />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  )
}

export default App
