import React from 'react';
import { Link } from 'react-router-dom';
import {
  Instagram,
  Facebook,
  Youtube,
  Twitter,
  ShieldCheck } from
'lucide-react';
export function Footer() {
  return (
    <footer className="bg-navy text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="space-y-4">
            <Link
              to="/"
              className="font-display text-3xl tracking-wider text-white block">
              
              HANGZEST
            </Link>
            <p className="text-gray-300 font-body leading-relaxed max-w-xs">
              Hydration that works as hard as you do. Premium electrolytes built
              for the relentless.
            </p>
            <div className="flex space-x-4 pt-2">
              <a
                href="#"
                className="text-gray-300 hover:text-citrus transition-colors">
                
                <Instagram size={24} />
              </a>
              <a
                href="#"
                className="text-gray-300 hover:text-citrus transition-colors">
                
                <Facebook size={24} />
              </a>
              <a
                href="#"
                className="text-gray-300 hover:text-citrus transition-colors">
                
                <Youtube size={24} />
              </a>
              <a
                href="#"
                className="text-gray-300 hover:text-citrus transition-colors">
                
                <Twitter size={24} />
              </a>
            </div>
          </div>

          {/* Shop */}
          <div>
            <h4 className="font-display text-xl mb-6 text-citrus">Shop</h4>
            <ul className="space-y-3 font-body text-gray-300">
              <li>
                <Link
                  to="/product"
                  className="hover:text-white transition-colors">
                  
                  All Products
                </Link>
              </li>
              <li>
                <Link
                  to="/product"
                  className="hover:text-white transition-colors">
                  
                  Citrus Storm
                </Link>
              </li>
              <li>
                <Link
                  to="/product"
                  className="hover:text-white transition-colors">
                  
                  Berry Blast
                </Link>
              </li>
              <li>
                <Link
                  to="/product"
                  className="hover:text-white transition-colors">
                  
                  Variety Pack
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-display text-xl mb-6 text-citrus">Company</h4>
            <ul className="space-y-3 font-body text-gray-300">
              <li>
                <Link
                  to="/about"
                  className="hover:text-white transition-colors">
                  
                  Our Story
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="hover:text-white transition-colors">
                  
                  Mission
                </Link>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Careers
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Wholesale
                </a>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="font-display text-xl mb-6 text-citrus">Support</h4>
            <ul className="space-y-3 font-body text-gray-300">
              <li>
                <Link to="/faq" className="hover:text-white transition-colors">
                  FAQ
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="hover:text-white transition-colors">
                  
                  Contact Us
                </Link>
              </li>
              <li>
                <Link to="/faq" className="hover:text-white transition-colors">
                  Shipping & Returns
                </Link>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Track Order
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-8 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-gray-400 text-sm font-body">
            &copy; {new Date().getFullYear()} Hangzest. All rights reserved.
          </p>

          <div className="flex items-center space-x-2 text-gray-400 text-sm">
            <ShieldCheck size={16} className="text-green" />
            <span>Secure checkout powered by Square</span>
          </div>

          <div className="flex space-x-4 text-sm text-gray-400 font-body">
            <a href="#" className="hover:text-white transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>);

}