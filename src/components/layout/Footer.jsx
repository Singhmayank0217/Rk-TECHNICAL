import { Link } from "react-router-dom"
import { Phone, Mail, MapPin, Facebook, Linkedin, Instagram } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="bg-red-500 text-white px-4 py-2 transform -skew-x-12 inline-block mb-4">
              <span className="font-bold transform skew-x-12 block">RK TECHNICAL</span>
            </div>
            <p className="text-gray-300 mb-4">
              Leading provider of safety and security system installations with 14+ years of experience in delivering
              professional technical solutions.
            </p>
            <div className="flex space-x-4">
              <Facebook className="w-5 h-5 hover:text-red-500 cursor-pointer transition-colors duration-300" />
              <Linkedin className="w-5 h-5 hover:text-red-500 cursor-pointer transition-colors duration-300" />
              <Instagram className="w-5 h-5 hover:text-red-500 cursor-pointer transition-colors duration-300" />
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-300 hover:text-red-500 transition-colors duration-300">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-300 hover:text-red-500 transition-colors duration-300">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-300 hover:text-red-500 transition-colors duration-300">
                  Services
                </Link>
              </li>
              <li>
                <Link
                  to="/portfolio/completed"
                  className="text-gray-300 hover:text-red-500 transition-colors duration-300"
                >
                  Portfolio
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-red-500 transition-colors duration-300">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Our Services</h3>
            <ul className="space-y-2 text-gray-300">
              <li>CCTV Installation</li>
              <li>Fire Safety Systems</li>
              <li>Access Control</li>
              <li>Security Alarms</li>
              <li>Network Solutions</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Contact Info</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-red-500" />
                <span className="text-gray-300">+91 9874020650</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-red-500" />
                <span className="text-gray-300">rk.technical@hotmail.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="w-5 h-5 text-red-500" />
                <span className="text-gray-300">Howrah, West Bengal, India</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="container py-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © {new Date().getFullYear()} RK Technical Support. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-2 md:mt-0">
              <Link to="/privacy" className="text-gray-400 hover:text-red-500 text-sm transition-colors duration-300">
                Privacy Policy
              </Link>
              <Link to="/terms" className="text-gray-400 hover:text-red-500 text-sm transition-colors duration-300">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
