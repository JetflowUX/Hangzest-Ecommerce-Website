import React, { useState } from 'react';
import { Button } from '../ui/Button';
import { Star, ShieldCheck, Plus, Minus } from 'lucide-react';
import { Accordion } from '../ui/Accordion';
export function ProductInfo() {
  const [qty, setQty] = useState(1);
  const [flavor, setFlavor] = useState('Citrus Storm');
  const [pack, setPack] = useState('30-Pack');
  const flavors = [
  'Citrus Storm',
  'Berry Blast',
  'Salt & Lime',
  'Tropical Surge'];

  const packs = [
  {
    name: 'Single Box',
    price: '$45.00',
    desc: '30 Packets'
  },
  {
    name: 'Subscribe & Save',
    price: '$39.99',
    desc: 'Delivered Monthly'
  }];

  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <div className="flex items-center space-x-4 mb-2">
          <div className="flex text-citrus">
            {[...Array(5)].map((_, i) =>
            <Star key={i} size={18} fill="currentColor" />
            )}
          </div>
          <span className="text-gray-500 font-body text-sm">1,284 Reviews</span>
        </div>
        <h1 className="font-display text-5xl md:text-6xl text-navy mb-2">
          HANGZEST ELECTROLYTES
        </h1>
        <p className="text-2xl font-body text-gray-600 font-medium">
          $39.99 - $45.00
        </p>
      </div>

      <p className="text-gray-600 font-body text-lg leading-relaxed">
        A science-backed electrolyte ratio designed for hard workers and high
        performers. Zero sugar, zero artificial ingredients, maximum hydration.
      </p>

      {/* Flavor Selector */}
      <div>
        <h3 className="font-display text-xl text-navy mb-3">
          Flavor: <span className="text-blue">{flavor}</span>
        </h3>
        <div className="flex flex-wrap gap-3">
          {flavors.map((f) =>
          <button
            key={f}
            onClick={() => setFlavor(f)}
            className={`px-4 py-2 rounded-full font-body font-medium border-2 transition-all ${flavor === f ? 'border-blue bg-blue/5 text-blue' : 'border-gray-200 text-gray-600 hover:border-gray-300'}`}>
            
              {f}
            </button>
          )}
        </div>
      </div>

      {/* Pack Selector */}
      <div>
        <h3 className="font-display text-xl text-navy mb-3">Purchase Type</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {packs.map((p) =>
          <button
            key={p.name}
            onClick={() => setPack(p.name)}
            className={`p-4 rounded-xl border-2 text-left transition-all ${pack === p.name ? 'border-blue bg-blue/5' : 'border-gray-200 hover:border-gray-300'}`}>
            
              <div className="font-bold text-navy font-body">{p.name}</div>
              <div className="text-blue font-bold font-body">{p.price}</div>
              <div className="text-sm text-gray-500 font-body mt-1">
                {p.desc}
              </div>
            </button>
          )}
        </div>
      </div>

      {/* Actions */}
      <div className="flex flex-col sm:flex-row gap-4 pt-4 border-t border-gray-200">
        <div className="flex items-center border-2 border-gray-200 rounded-full px-4 py-2 w-full sm:w-auto justify-between">
          <button
            onClick={() => setQty(Math.max(1, qty - 1))}
            className="text-gray-500 hover:text-navy p-1">
            
            <Minus size={20} />
          </button>
          <span className="font-display text-xl w-12 text-center">{qty}</span>
          <button
            onClick={() => setQty(qty + 1)}
            className="text-gray-500 hover:text-navy p-1">
            
            <Plus size={20} />
          </button>
        </div>
        <Button className="flex-grow" size="lg">
          Add to Cart - $
          {(qty * (pack === 'Single Box' ? 45 : 39.99)).toFixed(2)}
        </Button>
      </div>

      {/* Square Badge */}
      <div className="flex items-center justify-center space-x-2 text-gray-500 bg-gray-100 py-3 rounded-lg">
        <ShieldCheck size={18} className="text-green" />
        <span className="font-body text-sm font-medium">
          Secure checkout powered by Square
        </span>
      </div>

      {/* Accordions */}
      <div className="pt-6">
        <Accordion title="Benefits" defaultOpen>
          <ul className="list-disc pl-5 space-y-2">
            <li>Rapid rehydration with 3x the electrolytes of sports drinks</li>
            <li>Zero sugar, zero artificial colors or flavors</li>
            <li>Prevents muscle cramps and fatigue</li>
            <li>Supports nerve function and mental clarity</li>
          </ul>
        </Accordion>
        <Accordion title="Ingredients">
          <p className="mb-2">
            <strong>Active Ingredients:</strong> Sodium Chloride (1000mg),
            Potassium Chloride (200mg), Magnesium Malate (60mg).
          </p>
          <p>
            <strong>Other Ingredients:</strong> Citric Acid, Natural Flavors,
            Stevia Leaf Extract.
          </p>
        </Accordion>
        <Accordion title="How to Use">
          <p>
            Mix one packet with 16-32 oz of cold water. Shake well. Drink
            before, during, or after intense physical activity or whenever you
            need a hydration boost.
          </p>
        </Accordion>
      </div>
    </div>);

}