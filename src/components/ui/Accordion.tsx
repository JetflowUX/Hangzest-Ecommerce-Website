import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
interface AccordionProps {
  title: string;
  children: React.ReactNode;
  defaultOpen?: boolean;
}
export function Accordion({
  title,
  children,
  defaultOpen = false
}: AccordionProps) {
  const [isOpen, setIsOpen] = useState(defaultOpen);
  return (
    <div className="border-b border-gray-200 py-4">
      <button
        className="flex w-full items-center justify-between text-left focus:outline-none group"
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}>
        
        <span className="font-display text-xl text-navy group-hover:text-blue transition-colors">
          {title}
        </span>
        <motion.div
          animate={{
            rotate: isOpen ? 180 : 0
          }}
          transition={{
            duration: 0.2
          }}
          className="text-navy">
          
          <ChevronDown size={24} />
        </motion.div>
      </button>
      <AnimatePresence initial={false}>
        {isOpen &&
        <motion.div
          initial={{
            height: 0,
            opacity: 0
          }}
          animate={{
            height: 'auto',
            opacity: 1
          }}
          exit={{
            height: 0,
            opacity: 0
          }}
          transition={{
            duration: 0.3,
            ease: 'easeInOut'
          }}
          className="overflow-hidden">
          
            <div className="pt-4 pb-2 text-gray-600 font-body leading-relaxed">
              {children}
            </div>
          </motion.div>
        }
      </AnimatePresence>
    </div>);

}