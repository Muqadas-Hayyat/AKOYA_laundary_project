import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Menu, X } from 'lucide-react' // hamburger & close icons
import './Navbar.css'

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false)
  const [lightBg, setLightBg] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false) // 🔥 mobile menu toggle

  useEffect(() => {
    const handleScroll = () => {
      const y = window.scrollY
      setScrolled(y > 10)
      setLightBg(y >= 500)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav
      className={`
        fixed top-0 left-0 w-[100%] z-50
        transition-all duration-300 box-border
        ${
          lightBg
            ? 'bg-black/20 backdrop-blur-lg shadow-md'
            : scrolled
            ? 'backdrop-blur-sm border-b border-gray-500/40'
            : 'bg-transparent'
        }
      `}
      data-aos="fade-down" data-aos-delay="0"
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-3">
        {/* Logo */}
        <Link to="/" className="w-[93px] h-[55px] mt-[10px]">
          <img
            className="w-full h-full"
            src="/images/Akoya-logo.png"
            alt="Logo"
          />
        </Link>

        {/* Desktop Nav Links (only show at lg and above) */}
        <ul className="hidden lg:flex items-center gap-x-8 text-gray-200 font-semibold text-sm tracking-wider">
          <Link to="/">
            <li className="cursor-pointer hover:text-white transition transform hover:scale-105">
              HOME
            </li>
          </Link>
          <Link to="/services">
            <li className="cursor-pointer hover:text-white transition transform hover:scale-105">
              SERVICES
            </li>
          </Link>
          <Link to="/about">
            <li className="cursor-pointer hover:text-white transition transform hover:scale-105">
              ABOUT
            </li>
          </Link>
          <Link to="/contact">
            <li className="cursor-pointer hover:text-white transition transform hover:scale-105">
              CONTACT
            </li>
          </Link>
        </ul>

        {/* Desktop Buttons (only show at lg and above) */}
        <div className="hidden lg:flex items-center gap-3">
          <button
            className={`px-4 py-2 text-sm font-semibold rounded-3xl outline-none transition duration-300 hover:scale-105 hover:backdrop-blur-lg
              ${
                lightBg
                  ? 'border border-gray-400 text-white'
                  : 'border border-[#d4af37] text-white'
              }`}
          >
            العربية
          </button>
          <Link to="/login">
            <button
              className={`px-5 py-2 text-sm font-semibold rounded-3xl outline-none transition duration-300 hover:scale-105 hover:backdrop-blur-lg
                ${
                  lightBg
                    ? 'border border-gray-400 text-white'
                    : 'border border-[#d4af37] text-white'
                }`}
            >
              Client Login
            </button>
          </Link>

          <Link to="/book-now">
            <button className="px-6 py-2 text-sm font-semibold bg-[#d4af37] text-black rounded-3xl hover:bg-[#b8962e] hover:scale-105 transition duration-300 outline-none">
              Book Now
            </button>
          </Link>
        </div>

        {/* Mobile Hamburger Button (show below lg) */}
        <button
          className="lg:hidden text-white"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu (show below lg) */}
      {menuOpen && (
        <div
          className="w-[87%] sm:w-[80%] mx-auto lg:hidden fixed top-[70px] left-4 right-4 
                     rounded-2xl bg-black/80 backdrop-blur-lg px-6 py-8 flex flex-col gap-3
                     text-gray-200 font-semibold text-lg shadow-lg border border-gray-600/40 
                     max-h-screen box-border "
        >
          {/* Nav links */}
          <Link
            to="/"
            onClick={() => setMenuOpen(false)}
            className="w-full px-5 py-3 rounded-lg transition-all duration-300 
                       hover:text-white group flex justify-between items-center 
                       hover:bg-[#d4af37]/20"
          >
            <div className="flex-1">Home</div>
            <div className="opacity-0 group-hover:opacity-100 text-[#d4af37] transition-all duration-300">
              →
            </div>
          </Link>

          <Link
            to="/services"
            onClick={() => setMenuOpen(false)}
            className="w-full px-5 py-3 rounded-lg transition-all duration-300 
                       hover:text-white group flex justify-between items-center 
                       hover:bg-[#d4af37]/20"
          >
            <div className="flex-1">Services</div>
            <div className="opacity-0 group-hover:opacity-100 text-[#d4af37] transition-all duration-300">
              →
            </div>
          </Link>

          <Link
            to="/about"
            onClick={() => setMenuOpen(false)}
            className="w-full px-5 py-3 rounded-lg transition-all duration-300 
                       hover:text-white group flex justify-between items-center 
                       hover:bg-[#d4af37]/20"
          >
            <div className="flex-1">About</div>
            <div className="opacity-0 group-hover:opacity-100 text-[#d4af37] transition-all duration-300">
              →
            </div>
          </Link>

          <Link
            to="/contact"
            onClick={() => setMenuOpen(false)}
            className="w-full px-5 py-3 rounded-lg transition-all duration-300 
                       hover:text-white group flex justify-between items-center 
                       hover:bg-[#d4af37]/20"
          >
            <div className="flex-1">Contact</div>
            <div className="opacity-0 group-hover:opacity-100 text-[#d4af37] transition-all duration-300">
              →
            </div>
          </Link>

          {/* Divider */}
          <div className="w-full h-px my-2 bg-gradient-to-r from-white/0 via-[#d4af37] to-white/0"></div>

          {/* Buttons inside menu */}
          <Link to="/login" onClick={() => setMenuOpen(false)} className="w-full">
            <button className="w-full px-4 py-4 text-sm font-semibold rounded-xl border-2 border-[#D4A537] text-white hover:bg-[#d4af37]/20 transition duration-150 ">
              Client Login
            </button>
          </Link>

          <Link to="/book-now" onClick={() => setMenuOpen(false)} className="w-full">
            <button className="w-full px-4 py-4 text-sm font-semibold rounded-xl bg-[#d4af37] text-black hover:bg-[#b8962e] transition hover:scale-105">
              Book Now
            </button>
          </Link>

          <button className="w-full px-4 py-4 text-sm font-semibold rounded-xl border-2 border-[#d4af37] bg-transparent text-white transition hover:bg-[#d4af37]/20 duration-150">
            العربية
          </button>
        </div>
      )}
    </nav>
  )
}

export default Navbar
