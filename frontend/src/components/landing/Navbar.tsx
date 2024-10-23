import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-sm fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <motion.span 
                className="text-2xl font-bold text-indigo-600"
                whileHover={{ scale: 1.05 }}
              >
                HRMS
              </motion.span>
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-4">
            <Link to="/features" className="text-gray-600 hover:text-indigo-600 px-3 py-2">
              Features
            </Link>
            <Link to="/pricing" className="text-gray-600 hover:text-indigo-600 px-3 py-2">
              Pricing
            </Link>
            <Link to="/login" className="text-gray-600 hover:text-indigo-600 px-3 py-2">
              Login
            </Link>
            <Link 
              to="/signup" 
              className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition-colors"
            >
              Get Started
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <motion.div 
        className={`md:hidden ${isOpen ? 'block' : 'hidden'}`}
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <Link to="/features" className="block px-3 py-2 text-gray-600 hover:text-indigo-600">
            Features
          </Link>
          <Link to="/pricing" className="block px-3 py-2 text-gray-600 hover:text-indigo-600">
            Pricing
          </Link>
          <Link to="/login" className="block px-3 py-2 text-gray-600 hover:text-indigo-600">
            Login
          </Link>
          <Link to="/signup" className="block px-3 py-2 text-gray-600 hover:text-indigo-600">
            Get Started
          </Link>
        </div>
      </motion.div>
    </nav>
  );
};

export default Navbar;