import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
export function RelatedProducts() {
  const products = [
  {
    name: 'Berry Blast',
    price: '$39.99',
    color: 'bg-navy'
  },
  {
    name: 'Salt & Lime',
    price: '$39.99',
    color: 'bg-green'
  },
  {
    name: 'Variety Pack',
    price: '$45.00',
    color: 'bg-gray-800'
  }];

  return (
    <section className="py-16 border-t border-gray-200">
      <h2 className="font-display text-4xl text-navy mb-10 text-center">
        YOU MIGHT ALSO LIKE
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {products.map((product, idx) =>
        <Link key={idx} to="/product" className="group block">
            <motion.div
            whileHover={{
              y: -5
            }}
            className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100 transition-all group-hover:shadow-md">
            
              <div
              className={`w-full aspect-square rounded-xl ${product.color} mb-6 flex items-center justify-center relative overflow-hidden`}>
              
                <div className="absolute inset-0 bg-noise opacity-30 mix-blend-overlay"></div>
                <span className="font-display text-2xl text-white transform -rotate-12">
                  {product.name.split(' ')[0].toUpperCase()}
                </span>
              </div>
              <div className="text-center">
                <h3 className="font-display text-2xl text-navy mb-1 group-hover:text-blue transition-colors">
                  {product.name}
                </h3>
                <p className="text-gray-500 font-body font-medium">
                  {product.price}
                </p>
              </div>
            </motion.div>
          </Link>
        )}
      </div>
    </section>);

}