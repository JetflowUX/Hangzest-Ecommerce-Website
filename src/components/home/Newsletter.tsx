import React from 'react';
import { Button } from '../ui/Button';
export function Newsletter() {
  return (
    <section className="py-24 bg-blue relative overflow-hidden">
      <div className="absolute inset-0 bg-noise opacity-20 mix-blend-overlay"></div>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <h2 className="font-display text-5xl md:text-7xl text-white mb-6">
          JOIN THE CREW
        </h2>
        <p className="text-xl text-white/90 font-body mb-10 max-w-2xl mx-auto">
          Sign up for exclusive drops, hydration tips, and 10% off your first
          order. No spam, just performance.
        </p>

        <form
          className="flex flex-col sm:flex-row max-w-lg mx-auto gap-4"
          onSubmit={(e) => e.preventDefault()}>
          
          <input
            type="email"
            placeholder="Enter your email"
            className="flex-grow px-6 py-4 rounded-full font-body text-lg outline-none focus:ring-4 focus:ring-navy/20 border-none"
            required />
          
          <Button
            variant="navy"
            type="submit"
            className="bg-navy text-white hover:bg-gray-900">
            
            Subscribe
          </Button>
        </form>
      </div>
    </section>);

}