import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ShoppingCart, Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [cartCount] = useState(2); // Mock cart count
  const location = useLocation();
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);
  const navLinks = [
  {
    name: 'Shop',
    path: '/product'
  },
  {
    name: 'About',
    path: '/about'
  },
  {
    name: 'FAQ',
    path: '/faq'
  },
  {
    name: 'Contact',
    path: '/contact'
  }];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white/95 backdrop-blur-md shadow-sm py-3' : 'bg-transparent py-5'}`}>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex-shrink-0 z-50">
            <span
              className={`font-display text-3xl tracking-wider ${isScrolled || isMobileMenuOpen ? 'text-navy' : 'text-navy lg:text-white'}`}>
              
              HANGZEST
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) =>
            <Link
              key={link.name}
              to={link.path}
              className={`font-display text-lg tracking-wide hover:text-blue transition-colors ${isScrolled ? 'text-navy' : 'text-navy lg:text-white'}`}>
              
                {link.name}
              </Link>
            )}
          </nav>

          {/* Actions */}
          <div className="flex items-center space-x-4 z-50">
            <button
              className={`relative p-2 hover:text-blue transition-colors ${isScrolled || isMobileMenuOpen ? 'text-navy' : 'text-navy lg:text-white'}`}>
              
              <ShoppingCart size={24} />
              {cartCount > 0 &&
              <span className="absolute top-0 right-0 bg-citrus text-navy text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center transform translate-x-1 -translate-y-1">
                  {cartCount}
                </span>
              }
            </button>
            <button
              className={`md:hidden p-2 ${isScrolled || isMobileMenuOpen ? 'text-navy' : 'text-navy'}`}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
              
              {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen &&
        <motion.div
          initial={{
            opacity: 0,
            y: -20
          }}
          animate={{
            opacity: 1,
            y: 0
          }}
          exit={{
            opacity: 0,
            y: -20
          }}
          className="absolute top-full left-0 right-0 bg-white shadow-lg border-t border-gray-100 md:hidden">
          
            <div className="px-4 pt-2 pb-6 space-y-1 flex flex-col">
              {navLinks.map((link) =>
            <Link
              key={link.name}
              to={link.path}
              className="block px-3 py-4 text-2xl font-display text-navy border-b border-gray-100 hover:text-blue">
              
                  {link.name}
                </Link>
            )}
            </div>
          </motion.div>
        }
      </AnimatePresence>
    </header>);

}