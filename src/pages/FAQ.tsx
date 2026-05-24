import React from 'react';
import { motion } from 'framer-motion';
import { Accordion } from '../components/ui/Accordion';
import { Search } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '../components/ui/Button';
const faqs = {
  'Product Usage': [
  {
    q: 'How many packets should I drink a day?',
    a: 'For most active individuals, 1-2 packets per day is ideal. If you are working in extreme heat, sweating heavily, or doing intense endurance training, you may need 3-4 packets to properly replenish lost electrolytes.'
  },
  {
    q: 'When is the best time to drink Hangzest?',
    a: 'Drink it first thing in the morning to rehydrate after sleep, during intense physical labor or workouts, or anytime you feel fatigued and need a clean energy boost.'
  },
  {
    q: 'Can I mix it with hot water?',
    a: 'Yes! While most prefer it ice cold, our Citrus Storm and Berry Blast flavors taste great warm and can be soothing during colder outdoor work.'
  }],

  Ingredients: [
  {
    q: 'Does Hangzest contain sugar?',
    a: 'No. Hangzest is completely sugar-free. We use a natural, proprietary stevia blend that provides a clean taste without the bitter aftertaste or insulin spike.'
  },
  {
    q: 'What electrolytes are in it?',
    a: 'Each packet contains 1000mg Sodium, 200mg Potassium, and 60mg Magnesium. This ratio is scientifically proven to optimize fluid balance and nerve function.'
  },
  {
    q: 'Is it vegan and gluten-free?',
    a: 'Yes, Hangzest is 100% vegan, gluten-free, paleo-friendly, and keto-friendly.'
  }],

  'Shipping & Returns': [
  {
    q: 'How fast is shipping?',
    a: 'We process orders within 24 hours. Standard shipping takes 3-5 business days. Expedited 2-day shipping is available at checkout.'
  },
  {
    q: 'Do you ship internationally?',
    a: 'Currently, we only ship within the United States and Canada. We are working hard to expand our shipping zones soon.'
  },
  {
    q: 'What is your return policy?',
    a: "We offer a 30-day money-back guarantee. If you don't love your first box of Hangzest, let us know and we'll refund you completely—no questions asked."
  }],

  Payment: [
  {
    q: 'What payment methods do you accept?',
    a: 'We accept all major credit cards (Visa, Mastercard, Amex, Discover), Apple Pay, and Google Pay. Our secure checkout is powered by Square.'
  },
  {
    q: 'Can I buy in bulk or wholesale?',
    a: 'Yes! We offer discounted pricing for crews, gyms, and retail partners. Please contact our wholesale team via the Contact page.'
  }]

};
export function FAQ() {
  return (
    <div className="bg-offwhite pt-24 pb-20 min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <motion.h1
            initial={{
              opacity: 0,
              y: 20
            }}
            animate={{
              opacity: 1,
              y: 0
            }}
            className="font-display text-5xl md:text-6xl text-navy mb-6">
            
            FREQUENTLY ASKED QUESTIONS
          </motion.h1>

          <motion.div
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
            className="relative max-w-xl mx-auto">
            
            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
              <Search className="text-gray-400" size={20} />
            </div>
            <input
              type="text"
              placeholder="Search for answers..."
              className="w-full pl-12 pr-4 py-4 rounded-full border-2 border-gray-200 focus:border-blue focus:ring-0 outline-none font-body text-lg transition-colors" />
            
          </motion.div>
        </div>

        <div className="space-y-12">
          {Object.entries(faqs).map(([category, questions], idx) =>
          <motion.div
            key={category}
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
            className="bg-white rounded-2xl p-6 md:p-8 shadow-sm border border-gray-100">
            
              <h2 className="font-display text-3xl text-blue mb-6 border-b border-gray-100 pb-4">
                {category}
              </h2>
              <div className="space-y-2">
                {questions.map((q, i) =>
              <Accordion key={i} title={q.q}>
                    {q.a}
                  </Accordion>
              )}
              </div>
            </motion.div>
          )}
        </div>

        <div className="mt-16 text-center bg-navy rounded-2xl p-10 text-white">
          <h3 className="font-display text-3xl mb-4 text-citrus">
            Still have questions?
          </h3>
          <p className="font-body text-gray-300 mb-8">
            Our support team is ready to help you out.
          </p>
          <Link to="/contact">
            <Button variant="citrus">Contact Support</Button>
          </Link>
        </div>
      </div>
    </div>);

}