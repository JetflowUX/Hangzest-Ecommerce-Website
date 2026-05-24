import React from 'react';
import { motion } from 'framer-motion';
export function WhyHangzest() {
  return (
    <section className="py-24 bg-navy text-white relative overflow-hidden">
      <div className="absolute top-0 right-0 w-1/2 h-full bg-blue/10 transform skew-x-12 translate-x-32"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="font-display text-5xl md:text-6xl text-white mb-6">
            THE HIGHER STANDARD
          </h2>
          <p className="text-xl text-gray-300 font-body max-w-2xl mx-auto">
            We looked at the sports drink aisle and saw nothing but sugar and
            food coloring. So we built something better.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <motion.div
            initial={{
              opacity: 0,
              y: 20
            }}
            whileInView={{
              opacity: 1,
              y: 0
            }}
            viewport={{
              once: true
            }}
            className="text-center">
            
            <div className="font-display text-7xl text-blue mb-4">3X</div>
            <h3 className="font-display text-2xl text-white mb-3">
              More Electrolytes
            </h3>
            <p className="text-gray-400 font-body">
              Compared to traditional sports drinks. We give you the actual
              dosage required to rehydrate.
            </p>
          </motion.div>

          <motion.div
            initial={{
              opacity: 0,
              y: 20
            }}
            whileInView={{
              opacity: 1,
              y: 0
            }}
            viewport={{
              once: true
            }}
            transition={{
              delay: 0.2
            }}
            className="text-center">
            
            <div className="font-display text-7xl text-citrus mb-4">0g</div>
            <h3 className="font-display text-2xl text-white mb-3">
              Sugar & Junk
            </h3>
            <p className="text-gray-400 font-body">
              No sugar crashes. No artificial dyes. Just clean ingredients that
              your body actually needs.
            </p>
          </motion.div>

          <motion.div
            initial={{
              opacity: 0,
              y: 20
            }}
            whileInView={{
              opacity: 1,
              y: 0
            }}
            viewport={{
              once: true
            }}
            transition={{
              delay: 0.4
            }}
            className="text-center">
            
            <div className="font-display text-7xl text-green mb-4">100%</div>
            <h3 className="font-display text-2xl text-white mb-3">
              Performance Focus
            </h3>
            <p className="text-gray-400 font-body">
              Every ingredient serves a purpose. Formulated for hard workers,
              athletes, and adventurers.
            </p>
          </motion.div>
        </div>
      </div>
    </section>);

}