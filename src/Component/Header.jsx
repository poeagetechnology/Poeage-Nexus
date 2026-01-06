import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaBars, FaTimes, FaPhone, FaChevronDown } from 'react-icons/fa';
import Logo from '../Asset/NEXUS.png';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const location = useLocation();

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMenuOpen(false);
    setServicesOpen(false);
  }, [location]);

  // Check if link is active
  const isActive = (path) => location.pathname === path;

  const navLinkClass = (path) => `
    relative group font-medium transition
    ${isActive(path) ? 'text-blue-600' : 'text-gray-700 hover:text-blue-600'}
  `;

  return (
    <header className={`bg-white sticky top-0 z-50 px-6 py-3 transition-shadow duration-300 ${scrolled ? 'shadow-lg' : 'shadow-md'}`}>
      <nav className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <Link to="/"><img src={Logo} alt="Poeage Logo" className="w-36" /></Link>
          <span className="font-[cursive] text-lg text-gray-800">Nexus</span>
        </div>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-6">
          <Link to="/about" className={navLinkClass('/about')}>
            About Us
            <span className={`absolute left-0 -bottom-1 h-0.5 bg-blue-600 transition-all duration-300 ${isActive('/about') ? 'w-full' : 'w-0 group-hover:w-full'}`}></span>
          </Link>

          {/* Services Dropdown */}
          <div className="relative group"
            onMouseEnter={() => setServicesOpen(true)}
            onMouseLeave={() => setServicesOpen(false)}
          >
            <button className={`flex items-center gap-1 font-medium transition ${isActive('/services') ? 'text-blue-600' : 'text-gray-700 hover:text-blue-600'}`}>
              Services <FaChevronDown className={`text-xs transition-transform ${servicesOpen ? 'rotate-180' : ''}`} />
            </button>
            <div className={`absolute top-full left-0 mt-2 w-64 bg-white rounded-xl shadow-xl border border-gray-100 overflow-hidden transition-all duration-300 ${servicesOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-2'}`}>
              <Link to="/services" className="block px-4 py-3 hover:bg-blue-50 text-gray-700 hover:text-blue-600 border-b border-gray-100">
                <span className="font-medium">All Services</span>
                <p className="text-xs text-gray-500 mt-1">View all our service offerings</p>
              </Link>
              <Link to="/services#manpower" className="block px-4 py-3 hover:bg-blue-50 text-gray-700 hover:text-blue-600">Manpower Supply</Link>
              <Link to="/services#staffing" className="block px-4 py-3 hover:bg-blue-50 text-gray-700 hover:text-blue-600">Contract Staffing</Link>
              <Link to="/services#hr" className="block px-4 py-3 hover:bg-blue-50 text-gray-700 hover:text-blue-600">HR Outsourcing</Link>
            </div>
          </div>

          <Link to="/work" className={navLinkClass('/work')}>
            How It Works
            <span className={`absolute left-0 -bottom-1 h-0.5 bg-blue-600 transition-all duration-300 ${isActive('/work') ? 'w-full' : 'w-0 group-hover:w-full'}`}></span>
          </Link>

          <Link to="/jobs" className={navLinkClass('/jobs')}>
            Jobs
            <span className={`absolute left-0 -bottom-1 h-0.5 bg-blue-600 transition-all duration-300 ${isActive('/jobs') ? 'w-full' : 'w-0 group-hover:w-full'}`}></span>
          </Link>

          <Link to="/clients" className={navLinkClass('/clients')}>
            Clients
            <span className={`absolute left-0 -bottom-1 h-0.5 bg-blue-600 transition-all duration-300 ${isActive('/clients') ? 'w-full' : 'w-0 group-hover:w-full'}`}></span>
          </Link>

          <Link to="/projects" className={navLinkClass('/projects')}>
            Projects
            <span className={`absolute left-0 -bottom-1 h-0.5 bg-blue-600 transition-all duration-300 ${isActive('/projects') ? 'w-full' : 'w-0 group-hover:w-full'}`}></span>
          </Link>

          {/* Phone Number */}
          <a href="tel:+918056889616" className="flex items-center gap-2 text-gray-600 hover:text-blue-600 transition">
            <FaPhone className="text-blue-600" />
            <span className="text-sm font-medium">+91 805-688-9616</span>
          </a>

          <Link to="/hire" className="px-4 py-2 rounded-lg font-medium text-white bg-gradient-to-r from-blue-600 to-cyan-500 hover:shadow-lg hover:scale-105 transition-all duration-300">
            Hire Workers
          </Link>

          <Link to="/contact" className="px-4 py-2 rounded-lg font-medium text-blue-600 border-2 border-blue-600 hover:bg-blue-600 hover:text-white transition-all duration-300">
            Contact Us
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden text-2xl text-gray-700 transition-transform duration-300"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
        >
          <span className={`${menuOpen ? 'rotate-180 scale-110' : 'rotate-0'} inline-block transition-all duration-300`}>
            {menuOpen ? <FaTimes /> : <FaBars />}
          </span>
        </button>
      </nav>

      {/* Mobile Dropdown */}
      <div
        className={`lg:hidden flex flex-col gap-4 mt-3 px-4 pb-4 bg-white shadow-md rounded-md overflow-hidden transition-all duration-500 ${
          menuOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <Link to="/about" className={`font-medium transition ${isActive('/about') ? 'text-blue-600' : 'text-gray-700 hover:text-blue-600'}`}>About Us</Link>
        <Link to="/services" className={`font-medium transition ${isActive('/services') ? 'text-blue-600' : 'text-gray-700 hover:text-blue-600'}`}>Services</Link>
        <Link to="/work" className={`font-medium transition ${isActive('/work') ? 'text-blue-600' : 'text-gray-700 hover:text-blue-600'}`}>How It Works</Link>
        <Link to="/jobs" className={`font-medium transition ${isActive('/jobs') ? 'text-blue-600' : 'text-gray-700 hover:text-blue-600'}`}>Jobs</Link>
        <Link to="/clients" className={`font-medium transition ${isActive('/clients') ? 'text-blue-600' : 'text-gray-700 hover:text-blue-600'}`}>Clients</Link>
        <Link to="/projects" className={`font-medium transition ${isActive('/projects') ? 'text-blue-600' : 'text-gray-700 hover:text-blue-600'}`}>Projects</Link>
        
        <a href="tel:+918056889616" className="flex items-center gap-2 text-gray-600">
          <FaPhone className="text-blue-600" />
          <span className="font-medium">+91 805-688-9616</span>
        </a>

        <Link to="/hire" className="px-4 py-2 rounded-lg font-medium text-white bg-gradient-to-r from-blue-600 to-cyan-500 text-center">
          Hire Workers
        </Link>
        <Link to="/contact" className="px-4 py-2 rounded-lg font-medium text-blue-600 border-2 border-blue-600 text-center hover:bg-blue-600 hover:text-white transition">
          Contact Us
        </Link>
      </div>
    </header>
  );
}
