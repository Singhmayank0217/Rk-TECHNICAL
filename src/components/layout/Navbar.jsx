"use client";

import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  Menu,
  X,
  ChevronUp,
  ChevronDown ,
  Phone,
  Facebook,
  Linkedin,
  Instagram,
} from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isPortfolioOpen, setIsPortfolioOpen] = useState(false);
  const location = useLocation();

  const isActive = (path) => {
    return location.pathname === path;
  };

  const isPortfolioActive = () => {
    return location.pathname.startsWith("/portfolio");
  };

  return (
    <>
      {/* Top Bar */}
      <div className="bg-blue-900 text-white py-3">
        <div className="container flex justify-between items-center text-sm">
          <div className="flex items-center font-tinos font-medium sm:text-sm space-x-4">
            <span>Follow Us:</span>
            <div className="flex space-x-2 sm:gap-1 md:gap-2">
              <Facebook className="sm:w-5 sm:h-5 h-4 w-4  hover:text-red-500 cursor-pointer transition-colors duration-300" />
              <Linkedin className="sm:w-5 sm:h-5 h-4 w-4 hover:text-red-500 cursor-pointer transition-colors duration-300" />
              <Instagram className="sm:w-5 sm:h-5 h-4 w-4 hover:text-red-500 cursor-pointer transition-colors duration-300" />
            </div>
          </div>
          <div className="flex items-center space-x-2 bg-red-600 text-white px-4 py-2 rounded font-newsreader">
            <Phone className="w-4 h-4" />
            <span>Call Us: +91 9874020650</span>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="bg-white shadow-lg sticky top-0 z-50">
        <div className="container">
          <div className="flex justify-between items-center py-4">
            {/* Logo */}
            <div className="flex items-center">
              <Link
                to="/"
                className="bg-red-600 text-white px-7 py-3 transform -skew-x-12 hover:bg-red-800 transition-colors duration-300"
              >
                <span className="font-bold text-xl transform skew-x-12 block font-tinos">
                  R K TECHNICAL SUPPORT
                </span>
              </Link>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8">
              <Link
                to="/"
                className={`font-semibold text-xl font-tinos transition-colors duration-300 ${
                  isActive("/")
                    ? "text-red-600"
                    : "text-gray-700 hover:text-red-800"
                }`}
              >
                Home
              </Link>
              <Link
                to="/about"
                className={`font-semibold text-xl font-tinos transition-colors duration-300 ${
                  isActive("/about")
                    ? "text-red-600"
                    : "text-gray-700 hover:text-red-800"
                }`}
              >
                About
              </Link>

              {/* Portfolio Dropdown */}
              <div className="relative">
                <button
                  onClick={() => setIsPortfolioOpen(!isPortfolioOpen)}
                  className={`flex items-center font-semibold text-xl font-tinos transition-colors duration-300 ${
                    isPortfolioActive()
                    ? "text-red-600"
                    : "text-gray-700 hover:text-red-800"
                  }`}
                >
                  Portfolio
                  <ChevronDown className="ml-1 w-5 h-5" />
                </button>
                {isPortfolioOpen && (
                  <div className="absolute top-full -left-10 mt-2 w-48 bg-white rounded-md shadow-lg py-2 z-50">
                    <Link
                      to="/portfolio/ongoing"
                      className="block px-4 py-2 font-semibold text-base font-tinos text-gray-700 hover:bg-red-50 hover:text-red-500 transition-colors duration-300"
                      onClick={() => setIsPortfolioOpen(false)}
                    >
                      Ongoing Projects
                    </Link>
                    <Link
                      to="/portfolio/completed"
                      className="block px-4 py-2 font-semibold text-base font-tinos text-gray-700 hover:bg-red-50 hover:text-red-500 transition-colors duration-300"
                      onClick={() => setIsPortfolioOpen(false)}
                    >
                      Completed Projects
                    </Link>
                  </div>
                )}
              </div>

              <Link
                to="/services"
                className={`font-semibold text-xl font-tinos transition-colors duration-300 ${
                  isActive("/services")
                    ? "text-red-600"
                    : "text-gray-700 hover:text-red-800"
                }`}
              >
                Services
              </Link>
              <Link
                to="/contact"
                className={`font-semibold text-xl font-tinos transition-colors duration-300 ${
                  isActive("/contact")
                    ? "text-red-600"
                    : "text-gray-700 hover:text-red-800"
                }`}
              >
                Contact
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden text-gray-700"
            >
              {isOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>

          {isOpen && (
            <div className="md:hidden py-4 border-t">
              <div className="flex flex-col space-y-4">
                <Link
                  to="/"
                  className="text-gray-700 font-semibold text-xl font-tinos hover:text-red-500  transition-colors duration-300"
                  onClick={() => setIsOpen(false)}
                >
                  Home
                </Link>

                <Link
                  to="/about"
                  className="text-gray-700 hover:text-red-500 font-semibold text-xl font-tinos transition-colors duration-300"
                  onClick={() => setIsOpen(false)}
                >
                  About
                </Link>

                {/* Portfolio Dropdown */}
                <button
                  className="text-gray-700 hover:text-red-500 font-semibold text-xl font-tinos transition-colors duration-300 flex justify-between items-center"
                  onClick={() => setIsPortfolioOpen(!isPortfolioOpen)}
                >
                  <span>Portfolio</span>
                  {isPortfolioOpen ? (
                    <ChevronUp size={18} />
                  ) : (
                    <ChevronDown size={18} />
                  )}
                </button>

                {isPortfolioOpen && (
                  <div className="pl-4 flex flex-col space-y-2">
                    <Link
                      to="/portfolio/ongoing"
                      className="text-gray-600 font-semibold  font-tinos hover:text-red-500 text-sm transition-colors duration-300"
                      onClick={() => {
                        setIsOpen(false);
                        setIsPortfolioOpen(false);
                      }}
                    >
                      Ongoing Projects
                    </Link>
                    <Link
                      to="/portfolio/completed"
                      className="text-gray-600 hover:text-red-500 font-semibold font-tinos text-sm transition-colors duration-300"
                      onClick={() => {
                        setIsOpen(false);
                        setIsPortfolioOpen(false);
                      }}
                    >
                      Completed Projects
                    </Link>
                  </div>
                )}

                <Link
                  to="/services"
                  className="text-gray-700 hover:text-red-500 font-semibold text-xl font-tinos transition-colors duration-300"
                  onClick={() => setIsOpen(false)}
                >
                  Services
                </Link>

                <Link
                  to="/contact"
                  className="text-gray-700 hover:text-red-500 font-semibold text-xl font-tinos transition-colors duration-300"
                  onClick={() => setIsOpen(false)}
                >
                  Contact
                </Link>
              </div>
            </div>
          )}
        </div>
      </nav>
    </>
  );
}
