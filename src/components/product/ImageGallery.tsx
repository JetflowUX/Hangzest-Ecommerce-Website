import React, { useState } from 'react';
import { motion } from 'framer-motion';
export function ImageGallery() {
  const [activeImage, setActiveImage] = useState(0);
  // Using solid colors with text to mock product renders since we can't guarantee specific Unsplash product shots
  const images = [
  {
    color: 'bg-blue',
    text: 'CITRUS STORM'
  },
  {
    color: 'bg-navy',
    text: 'BACK LABEL'
  },
  {
    color: 'bg-green',
    text: 'LIFESTYLE'
  },
  {
    color: 'bg-citrus',
    text: 'POWDER'
  }];

  return (
    <div className="space-y-6">
      {/* Main Image */}
      <motion.div
        key={activeImage}
        initial={{
          opacity: 0
        }}
        animate={{
          opacity: 1
        }}
        className={`w-full aspect-square rounded-3xl ${images[activeImage].color} flex items-center justify-center shadow-lg relative overflow-hidden`}>
        
        <div className="absolute inset-0 bg-noise opacity-30 mix-blend-overlay"></div>
        <h2 className="font-display text-5xl text-white transform -rotate-12 tracking-widest relative z-10">
          {images[activeImage].text}
        </h2>
      </motion.div>

      {/* Thumbnails */}
      <div className="grid grid-cols-4 gap-4">
        {images.map((img, idx) =>
        <button
          key={idx}
          onClick={() => setActiveImage(idx)}
          className={`aspect-square rounded-xl ${img.color} flex items-center justify-center relative overflow-hidden transition-all ${activeImage === idx ? 'ring-4 ring-blue ring-offset-2' : 'opacity-70 hover:opacity-100'}`}>
          
            <div className="absolute inset-0 bg-noise opacity-30 mix-blend-overlay"></div>
            <span className="font-display text-xs text-white tracking-wider z-10">
              {img.text.split(' ')[0]}
            </span>
          </button>
        )}
      </div>
    </div>);

}