import React from 'react';
import { motion } from 'framer-motion';
export function LifestyleGallery() {
  const images = [
  {
    src: 'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    label: 'Worksite'
  },
  {
    src: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    label: 'Outdoors'
  },
  {
    src: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    label: 'Gym'
  },
  {
    src: 'https://images.unsplash.com/photo-1520255870062-bd79d3865de7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    label: 'Boating'
  }];

  return (
    <section className="py-24 bg-navy text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12">
          <div>
            <h2 className="font-display text-5xl md:text-7xl text-white uppercase mb-4">
              Built For <br />
              <span className="text-blue">Your Arena</span>
            </h2>
            <p className="text-gray-300 font-body text-lg max-w-md">
              Wherever you push your limits, Hangzest is there to keep you
              moving forward.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {images.map((img, idx) =>
          <motion.div
            key={idx}
            initial={{
              opacity: 0,
              scale: 0.95
            }}
            whileInView={{
              opacity: 1,
              scale: 1
            }}
            viewport={{
              once: true
            }}
            transition={{
              delay: idx * 0.1
            }}
            className="relative group overflow-hidden rounded-2xl aspect-[4/5]">
            
              <img
              src={img.src}
              alt={img.label}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
            
              <div className="absolute inset-0 bg-gradient-to-t from-navy/90 via-navy/20 to-transparent opacity-80"></div>
              <div className="absolute bottom-6 left-6">
                <span className="font-display text-2xl tracking-wide text-white">
                  {img.label}
                </span>
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </section>);

}