import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '../ui/Button';
import { Link } from 'react-router-dom';
import { Check } from 'lucide-react';
export function FeaturedProduct() {
  return (
    <section className="py-24 bg-offwhite overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl shadow-xl border border-gray-100 overflow-hidden flex flex-col lg:flex-row">
          {/* Product Image Side */}
          <div className="w-full lg:w-1/2 bg-gray-50 p-12 flex items-center justify-center relative">
            <div className="absolute inset-0 bg-noise opacity-30 mix-blend-overlay"></div>
            <motion.div
              initial={{
                opacity: 0,
                y: 50
              }}
              whileInView={{
                opacity: 1,
                y: 0
              }}
              viewport={{
                once: true
              }}
              className="relative z-10 w-64 h-96 bg-blue rounded-xl shadow-2xl flex items-center justify-center transform rotate-3 hover:rotate-0 transition-transform duration-500">
              
              {/* CSS Mockup of a Can/Pouch */}
              <div className="text-center px-4">
                <h3 className="font-display text-4xl text-white transform -rotate-90 whitespace-nowrap absolute -left-16 top-1/2 tracking-widest">
                  HANGZEST
                </h3>
                <div className="bg-citrus text-navy font-display px-3 py-1 rounded-full text-sm inline-block mb-4">
                  CITRUS STORM
                </div>
                <p className="text-white/80 font-display text-xl">
                  1000mg SODIUM
                </p>
              </div>
            </motion.div>
          </div>

          {/* Product Info Side */}
          <div className="w-full lg:w-1/2 p-12 lg:p-16 flex flex-col justify-center">
            <div className="inline-block bg-green/10 text-green font-display px-4 py-1 rounded-full text-sm mb-6 w-max">
              BEST SELLER
            </div>
            <h2 className="font-display text-5xl md:text-6xl text-navy mb-2">
              CITRUS STORM
            </h2>
            <p className="text-2xl font-body text-gray-500 mb-8">
              $39.99 <span className="text-sm text-gray-400">/ 30-Pack</span>
            </p>

            <p className="text-gray-600 font-body text-lg mb-8 leading-relaxed">
              Our flagship flavor. A bold, refreshing hit of citrus that cuts
              through the heat and instantly replenishes your core. Perfect for
              hot days on the site or intense training sessions.
            </p>

            <ul className="space-y-4 mb-10">
              {[
              '1000mg Sodium, 200mg Potassium, 60mg Magnesium',
              'Zero Sugar, Zero Artificial Colors',
              'Informed Sport Certified',
              'Dissolves instantly in cold water'].
              map((item, i) =>
              <li
                key={i}
                className="flex items-center text-navy font-body font-medium">
                
                  <span className="bg-blue/10 p-1 rounded-full mr-4">
                    <Check size={16} className="text-blue" />
                  </span>
                  {item}
                </li>
              )}
            </ul>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/product" className="flex-1">
                <Button className="w-full" size="lg">
                  Add to Cart
                </Button>
              </Link>
              <Link to="/product" className="flex-1">
                <Button variant="outline" className="w-full" size="lg">
                  View Details
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>);

}