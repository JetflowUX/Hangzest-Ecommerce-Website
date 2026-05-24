import React from 'react';
import { motion } from 'framer-motion';
import { Droplets, Activity, Zap, Shield } from 'lucide-react';
export function BenefitsGrid() {
  const benefits = [
  {
    icon: <Droplets size={40} className="text-blue" />,
    title: 'Deep Hydration',
    desc: '3x the electrolytes of traditional sports drinks to replenish what you sweat out.'
  },
  {
    icon: <Activity size={40} className="text-green" />,
    title: 'Fast Recovery',
    desc: 'Optimal sodium-to-potassium ratio prevents cramping and speeds up muscle recovery.'
  },
  {
    icon: <Zap size={40} className="text-citrus" />,
    title: 'Clean Energy',
    desc: 'Zero sugar means zero crash. Sustained energy without the artificial jitters.'
  },
  {
    icon: <Shield size={40} className="text-navy" />,
    title: 'Peak Performance',
    desc: 'Formulated to keep your nervous system firing and your focus sharp all day.'
  }];

  return (
    <section className="py-24 bg-offwhite">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl md:text-6xl text-navy uppercase">
            Formulated to Dominate
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, idx) =>
          <motion.div
            key={idx}
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
              delay: idx * 0.1,
              duration: 0.5
            }}
            className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow border border-gray-100 flex flex-col items-center text-center">
            
              <div className="mb-6 p-4 bg-gray-50 rounded-full">
                {benefit.icon}
              </div>
              <h3 className="font-display text-2xl text-navy mb-3">
                {benefit.title}
              </h3>
              <p className="text-gray-600 font-body leading-relaxed">
                {benefit.desc}
              </p>
            </motion.div>
          )}
        </div>
      </div>
    </section>);

}