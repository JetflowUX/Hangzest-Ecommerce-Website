import React from 'react';
export function TrustBar() {
  const items = [
  'PREMIUM ELECTROLYTES',
  'NO SUGAR',
  'MADE FOR HARD WORK',
  'FAST SHIPPING',
  'SCIENCE BACKED',
  'ZERO FILLERS'];

  return (
    <div className="bg-blue py-3 overflow-hidden whitespace-nowrap flex items-center">
      <div className="animate-marquee inline-block">
        {[...items, ...items, ...items].map((item, index) =>
        <span
          key={index}
          className="font-display text-white text-xl tracking-widest mx-8 inline-flex items-center">
          
            {item}
            <span className="mx-8 text-citrus">•</span>
          </span>
        )}
      </div>
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-33.33%); }
        }
        .animate-marquee {
          animation: marquee 20s linear infinite;
        }
      `}</style>
    </div>);

}