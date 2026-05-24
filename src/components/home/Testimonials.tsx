import React from 'react';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';
export function Testimonials() {
  const reviews = [
  {
    name: 'Mike T.',
    role: 'Construction Foreman',
    quote:
    'Working 10-hour days in the Texas heat used to destroy me. Hangzest completely changed the game. No more afternoon cramps or brain fog.',
    avatar:
    'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80'
  },
  {
    name: 'Sarah L.',
    role: 'CrossFit Coach',
    quote:
    'I recommend this to all my athletes. The sodium profile is perfect for heavy sweaters, and the Citrus Storm flavor is incredibly refreshing.',
    avatar:
    'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80'
  },
  {
    name: 'Dave R.',
    role: 'Offshore Angler',
    quote:
    'Out on the boat all day, you forget to drink water. I mix two packets of Berry Blast in my jug and it keeps me sharp from sunrise to dock.',
    avatar:
    'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80'
  }];

  return (
    <section className="py-24 bg-offwhite">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-display text-5xl md:text-6xl text-navy mb-4">
            FIELD TESTED
          </h2>
          <p className="text-xl text-gray-600 font-body">
            Don't just take our word for it.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((review, idx) =>
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
              delay: idx * 0.1
            }}
            className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
            
              <div className="flex space-x-1 mb-6 text-citrus">
                {[...Array(5)].map((_, i) =>
              <Star key={i} size={20} fill="currentColor" />
              )}
              </div>
              <p className="text-gray-700 font-body text-lg italic mb-8 leading-relaxed">
                "{review.quote}"
              </p>
              <div className="flex items-center">
                <img
                src={review.avatar}
                alt={review.name}
                className="w-12 h-12 rounded-full object-cover mr-4" />
              
                <div>
                  <h4 className="font-bold text-navy font-body">
                    {review.name}
                  </h4>
                  <p className="text-sm text-gray-500 font-body">
                    {review.role}
                  </p>
                </div>
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </section>);

}