import React from 'react';
import { Accordion } from '../ui/Accordion';
import { Button } from '../ui/Button';
import { Link } from 'react-router-dom';
export function FaqPreview() {
  const faqs = [
  {
    q: 'How many packets should I drink a day?',
    a: 'For most active individuals, 1-2 packets per day is ideal. If you are working in extreme heat or doing intense training, you may need 3-4 packets.'
  },
  {
    q: 'Does Hangzest contain sugar?',
    a: 'No. Hangzest is completely sugar-free. We use a natural stevia blend that provides a clean taste without the insulin spike.'
  },
  {
    q: 'What electrolytes are in it?',
    a: 'Each packet contains 1000mg Sodium, 200mg Potassium, and 60mg Magnesium—the optimal ratio for fluid balance.'
  },
  {
    q: 'Is it vegan and gluten-free?',
    a: 'Yes, Hangzest is 100% vegan, gluten-free, paleo-friendly, and keto-friendly.'
  }];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="font-display text-5xl text-navy mb-4">
            GOT QUESTIONS?
          </h2>
        </div>

        <div className="space-y-2 mb-12">
          {faqs.map((faq, idx) =>
          <Accordion key={idx} title={faq.q}>
              {faq.a}
            </Accordion>
          )}
        </div>

        <div className="text-center">
          <Link to="/faq">
            <Button variant="outline">See All FAQs</Button>
          </Link>
        </div>
      </div>
    </section>);

}