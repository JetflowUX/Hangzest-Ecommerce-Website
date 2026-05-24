import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '../components/ui/Button';
import { Link } from 'react-router-dom';
export function About() {
  return (
    <div className="bg-offwhite pt-24 pb-16">
      {/* Hero */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24 text-center">
        <motion.h1
          initial={{
            opacity: 0,
            y: 20
          }}
          animate={{
            opacity: 1,
            y: 0
          }}
          className="font-display text-5xl md:text-7xl lg:text-8xl text-navy mb-6 uppercase">
          
          Built for the <br />
          <span className="text-blue">Relentless</span>
        </motion.h1>
        <motion.p
          initial={{
            opacity: 0,
            y: 20
          }}
          animate={{
            opacity: 1,
            y: 0
          }}
          transition={{
            delay: 0.1
          }}
          className="text-xl text-gray-600 max-w-2xl mx-auto font-body">
          
          We didn't start Hangzest to make another sugary sports drink. We built
          it because hard work demands real hydration.
        </motion.p>
      </section>

      {/* Story */}
      <section className="bg-navy text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{
                opacity: 0,
                x: -30
              }}
              whileInView={{
                opacity: 1,
                x: 0
              }}
              viewport={{
                once: true
              }}>
              
              <img
                src="https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                alt="Construction worker drinking water"
                className="rounded-2xl shadow-2xl object-cover h-[600px] w-full" />
              
            </motion.div>
            <motion.div
              initial={{
                opacity: 0,
                x: 30
              }}
              whileInView={{
                opacity: 1,
                x: 0
              }}
              viewport={{
                once: true
              }}
              className="space-y-6">
              
              <h2 className="font-display text-4xl md:text-5xl text-citrus">
                Our Story
              </h2>
              <p className="text-lg text-gray-300 font-body leading-relaxed">
                Hangzest was born on a job site, not in a boardroom. After years
                of watching crews rely on neon-colored sugar water that left
                them crashing by 2 PM, we knew there had to be a better way.
              </p>
              <p className="text-lg text-gray-300 font-body leading-relaxed">
                We worked with sports nutritionists to formulate a hydration mix
                that actually replenishes what you lose when you sweat. No
                fillers. No artificial junk. Just the exact ratio of sodium,
                potassium, and magnesium your body needs to keep firing on all
                cylinders.
              </p>
              <p className="text-lg text-gray-300 font-body leading-relaxed">
                Whether you're framing houses in the summer heat, pulling a
                double shift, or pushing your limits in the gym, Hangzest is
                built to keep you going.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl md:text-5xl text-navy">
            No Compromises
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
          {
            title: 'Premium Ingredients',
            desc: 'Sourced for maximum absorption and efficacy. Nothing artificial.'
          },
          {
            title: 'Built for Real Work',
            desc: 'Formulated for high-sweat environments and demanding physical labor.'
          },
          {
            title: 'Zero Sugar Crash',
            desc: 'Sweetened naturally. No sugar spikes, no mid-afternoon crashes.'
          },
          {
            title: 'Performance First',
            desc: 'Every ingredient serves a purpose to keep you operating at your peak.'
          }].
          map((value, idx) =>
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
            
              <h3 className="font-display text-2xl text-blue mb-4">
                {value.title}
              </h3>
              <p className="text-gray-600 font-body">{value.desc}</p>
            </motion.div>
          )}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-blue py-20 text-center px-4">
        <h2 className="font-display text-4xl md:text-5xl text-white mb-8">
          Ready to upgrade your hydration?
        </h2>
        <Link to="/product">
          <Button variant="citrus" size="lg">
            Shop Hangzest Now
          </Button>
        </Link>
      </section>
    </div>);

}