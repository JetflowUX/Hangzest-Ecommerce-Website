import React from 'react';
import { Star } from 'lucide-react';
export function Reviews() {
  const reviews = [
  {
    name: 'John D.',
    rating: 5,
    date: '2 weeks ago',
    title: 'Best hydration on the market',
    content:
    'I work construction in Florida. This is the only thing that keeps me from cramping up at 3 PM. Tastes great, not too sweet.'
  },
  {
    name: 'Alex M.',
    rating: 5,
    date: '1 month ago',
    title: 'Game changer for recovery',
    content:
    'I use this after heavy lifting sessions. The sodium hit is exactly what my body craves. Citrus Storm is the best flavor.'
  },
  {
    name: 'Chris P.',
    rating: 4,
    date: '2 months ago',
    title: 'Solid product',
    content:
    'Works exactly as advertised. Only giving 4 stars because I wish they had a bigger bulk option.'
  }];

  return (
    <section className="py-16 border-t border-gray-200">
      <h2 className="font-display text-4xl text-navy mb-10">
        CUSTOMER REVIEWS
      </h2>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
        {/* Stats */}
        <div className="lg:col-span-1">
          <div className="flex items-center space-x-4 mb-6">
            <div className="font-display text-6xl text-navy">4.9</div>
            <div>
              <div className="flex text-citrus mb-1">
                {[...Array(5)].map((_, i) =>
                <Star key={i} size={20} fill="currentColor" />
                )}
              </div>
              <p className="text-gray-500 font-body text-sm">
                Based on 1,284 reviews
              </p>
            </div>
          </div>

          <div className="space-y-3">
            {[5, 4, 3, 2, 1].map((star) =>
            <div key={star} className="flex items-center text-sm font-body">
                <span className="w-12 text-gray-600">{star} Stars</span>
                <div className="flex-grow mx-4 h-2 bg-gray-200 rounded-full overflow-hidden">
                  <div
                  className="h-full bg-citrus"
                  style={{
                    width:
                    star === 5 ?
                    '85%' :
                    star === 4 ?
                    '10%' :
                    star === 3 ?
                    '3%' :
                    '1%'
                  }}>
                </div>
                </div>
                <span className="w-8 text-right text-gray-500">
                  {star === 5 ?
                '85%' :
                star === 4 ?
                '10%' :
                star === 3 ?
                '3%' :
                '<1%'}
                </span>
              </div>
            )}
          </div>
        </div>

        {/* Review List */}
        <div className="lg:col-span-2 space-y-8">
          {reviews.map((review, idx) =>
          <div
            key={idx}
            className="border-b border-gray-100 pb-8 last:border-0">
            
              <div className="flex items-center justify-between mb-2">
                <div className="flex text-citrus">
                  {[...Array(review.rating)].map((_, i) =>
                <Star key={i} size={16} fill="currentColor" />
                )}
                </div>
                <span className="text-gray-400 text-sm font-body">
                  {review.date}
                </span>
              </div>
              <h4 className="font-bold text-navy font-body text-lg mb-2">
                {review.title}
              </h4>
              <p className="text-gray-600 font-body mb-4">{review.content}</p>
              <p className="text-sm text-gray-500 font-body font-medium">
                {review.name}{' '}
                <span className="text-green ml-2">✓ Verified Buyer</span>
              </p>
            </div>
          )}
        </div>
      </div>
    </section>);

}