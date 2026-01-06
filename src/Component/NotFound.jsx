import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import { Home, Search, ArrowLeft, Mail, Phone } from "lucide-react";

export default function NotFound() {
  const quickLinks = [
    { name: "Home", path: "/", icon: <Home className="w-4 h-4" /> },
    { name: "Services", path: "/services" },
    { name: "Jobs", path: "/jobs" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <>
      <Helmet>
        <title>404 - Page Not Found | Poeage Nexus</title>
        <meta name="description" content="The page you're looking for doesn't exist. Navigate back to Poeage Nexus homepage or explore our services." />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-cyan-50 flex items-center justify-center px-6 py-12">
        <div className="max-w-2xl w-full text-center">
          {/* Animated 404 */}
          <motion.div
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="relative mb-8"
          >
            <motion.h1 
              className="text-[150px] md:text-[200px] font-extrabold text-gray-200 leading-none select-none"
              animate={{ 
                textShadow: [
                  "0 0 20px rgba(59, 130, 246, 0)",
                  "0 0 40px rgba(59, 130, 246, 0.3)",
                  "0 0 20px rgba(59, 130, 246, 0)"
                ]
              }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              404
            </motion.h1>
            
            {/* Animated Worker Icon */}
            <motion.div
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <div className="w-24 h-24 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-full flex items-center justify-center shadow-xl">
                <Search className="w-12 h-12 text-white" />
              </div>
            </motion.div>
          </motion.div>

          {/* Message */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              Oops! Page Not Found
            </h2>
            <p className="text-gray-600 mb-8 max-w-md mx-auto">
              The page you're looking for seems to have wandered off. 
              Don't worry, let's get you back on track.
            </p>
          </motion.div>

          {/* Search Bar (Visual) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="mb-8"
          >
            <div className="flex items-center bg-white rounded-xl border border-gray-200 shadow-lg max-w-md mx-auto overflow-hidden">
              <Search className="w-5 h-5 text-gray-400 ml-4" />
              <input
                type="text"
                placeholder="What are you looking for?"
                className="flex-1 p-4 outline-none text-gray-700"
              />
              <button className="px-6 py-4 bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-medium hover:opacity-90 transition-opacity">
                Search
              </button>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="mb-8"
          >
            <p className="text-gray-500 mb-4">Quick Links:</p>
            <div className="flex flex-wrap gap-3 justify-center">
              {quickLinks.map((link, index) => (
                <Link
                  key={index}
                  to={link.path}
                  className="flex items-center gap-2 px-5 py-2.5 bg-white rounded-lg border border-gray-200 text-gray-700 hover:border-blue-500 hover:text-blue-600 transition-colors shadow-sm"
                >
                  {link.icon}
                  {link.name}
                </Link>
              ))}
            </div>
          </motion.div>

          {/* Go Home Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
          >
            <Link
              to="/"
              className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl hover:scale-105 transition-all"
            >
              <ArrowLeft className="w-5 h-5" />
              Back to Home
            </Link>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="mt-12 pt-8 border-t border-gray-200"
          >
            <p className="text-gray-500 mb-4">Need help? Contact us:</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+918056889616"
                className="flex items-center gap-2 text-gray-700 hover:text-blue-600"
              >
                <Phone className="w-4 h-4" />
                +91 805-688-9616
              </a>
              <a
                href="mailto:contact@poeagenexus.com"
                className="flex items-center gap-2 text-gray-700 hover:text-blue-600"
              >
                <Mail className="w-4 h-4" />
                contact@poeagenexus.com
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </>
  );
}
