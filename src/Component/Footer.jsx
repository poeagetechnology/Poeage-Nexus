import React, { useState } from "react";
import { Link } from "react-router-dom";
import { 
  Facebook, Instagram, Linkedin, Twitter, Youtube,
  Mail, Phone, MapPin, Clock, Send, CheckCircle, ArrowRight
} from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import Logo from "../Asset/NEXUS.png";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email) {
      // Here you would integrate with your newsletter service
      setSubscribed(true);
      setEmail("");
      setTimeout(() => setSubscribed(false), 3000);
    }
  };

  const quickLinks = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "How It Works", path: "/work" },
    { name: "Jobs", path: "/jobs" },
    { name: "Contact", path: "/contact" },
  ];

  const serviceLinks = [
    { name: "Manpower Supply", path: "/services#manpower" },
    { name: "Contract Staffing", path: "/services#staffing" },
    { name: "HR Outsourcing", path: "/services#hr" },
    { name: "Payroll Management", path: "/services#payroll" },
    { name: "Background Verification", path: "/services#verification" },
  ];

  const legalLinks = [
    { name: "Privacy Policy", path: "/privacy" },
    { name: "Terms & Conditions", path: "/terms" },
  ];

  const socialLinks = [
    { icon: <Facebook size={18} />, href: "#", label: "Facebook" },
    { icon: <Instagram size={18} />, href: "#", label: "Instagram" },
    { icon: <Linkedin size={18} />, href: "#", label: "LinkedIn" },
    { icon: <Twitter size={18} />, href: "#", label: "Twitter" },
    { icon: <Youtube size={18} />, href: "#", label: "YouTube" },
  ];

  return (
    <footer className="w-full bg-gray-900 text-gray-300">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <img src={Logo} alt="Poeage Nexus" className="w-32 brightness-0 invert" />
              <span className="font-[cursive] text-xl text-white">Nexus</span>
            </div>
            <p className="text-gray-400 mb-6 max-w-sm">
              Providing trusted workforce solutions for industries across India. 
              Skilled, certified, and reliable professionals for every operational need.
            </p>

            {/* Social Links */}
            <div className="flex items-center gap-3 mb-6">
              {socialLinks.map((social, index) => (
                <a 
                  key={index}
                  href={social.href} 
                  aria-label={social.label}
                  className="p-2.5 bg-gray-800 rounded-lg hover:bg-blue-600 transition-colors"
                >
                  {social.icon}
                </a>
              ))}
            </div>

            {/* WhatsApp Button */}
            <a 
              href="https://wa.me/918056889616?text=Hello! I'm interested in your workforce solutions."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2.5 bg-green-600 hover:bg-green-700 rounded-lg transition-colors text-white font-medium"
            >
              <FaWhatsapp size={20} />
              Chat on WhatsApp
            </a>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-5">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <Link 
                    to={link.path} 
                    className="text-gray-400 hover:text-white transition-colors flex items-center gap-2 group"
                  >
                    <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-5">Our Services</h3>
            <ul className="space-y-3">
              {serviceLinks.map((link, index) => (
                <li key={index}>
                  <Link 
                    to={link.path} 
                    className="text-gray-400 hover:text-white transition-colors flex items-center gap-2 group"
                  >
                    <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-5">Contact Us</h3>
            <ul className="space-y-4">
              <li>
                <a href="mailto:contact@poeagenexus.com" className="flex items-start gap-3 text-gray-400 hover:text-white transition-colors">
                  <Mail size={18} className="mt-0.5 flex-shrink-0" />
                  <span>contact@poeagenexus.com</span>
                </a>
              </li>
              <li>
                <a href="tel:+918056889616" className="flex items-start gap-3 text-gray-400 hover:text-white transition-colors">
                  <Phone size={18} className="mt-0.5 flex-shrink-0" />
                  <span>+91 805-688-9616</span>
                </a>
              </li>
              <li className="flex items-start gap-3 text-gray-400">
                <MapPin size={18} className="mt-0.5 flex-shrink-0" />
                <span>Tamil Nadu, India</span>
              </li>
              <li className="flex items-start gap-3 text-gray-400">
                <Clock size={18} className="mt-0.5 flex-shrink-0" />
                <span>Mon - Sat: 9AM - 6PM</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Newsletter Section */}
        <div className="mt-12 pt-10 border-t border-gray-800">
          <div className="max-w-xl mx-auto text-center">
            <h3 className="text-white font-semibold text-lg mb-2">Subscribe to Our Newsletter</h3>
            <p className="text-gray-400 text-sm mb-4">
              Get the latest job openings and industry updates delivered to your inbox.
            </p>
            <form onSubmit={handleSubscribe} className="flex gap-3">
              <div className="flex-1 relative">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  required
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-blue-500"
                />
              </div>
              <button
                type="submit"
                className="px-6 py-3 bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-medium rounded-lg hover:opacity-90 transition-opacity flex items-center gap-2"
              >
                {subscribed ? (
                  <>
                    <CheckCircle size={18} />
                    Subscribed
                  </>
                ) : (
                  <>
                    <Send size={18} />
                    Subscribe
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-6 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-500 text-sm text-center md:text-left">
              © {new Date().getFullYear()} Poeage Nexus. A subsidiary of Poeage Groups. All rights reserved.
            </p>
            <div className="flex items-center gap-6">
              {legalLinks.map((link, index) => (
                <Link 
                  key={index}
                  to={link.path} 
                  className="text-gray-500 hover:text-white text-sm transition-colors"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
