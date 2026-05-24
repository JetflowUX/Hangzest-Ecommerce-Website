import React from 'react';
import { motion } from 'framer-motion';
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'citrus' | 'white';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
}
export function Button({
  variant = 'primary',
  size = 'md',
  children,
  className = '',
  ...props
}: ButtonProps) {
  const baseStyles =
  'inline-flex items-center justify-center font-display tracking-wide uppercase rounded-full transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue';
  const variants = {
    primary: 'bg-blue text-white hover:bg-navy',
    secondary: 'bg-navy text-white hover:bg-blue',
    citrus: 'bg-citrus text-navy hover:bg-[#FCE76C]',
    outline: 'border-2 border-navy text-navy hover:bg-navy hover:text-white',
    white: 'bg-white text-navy hover:bg-gray-100'
  };
  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-8 py-3 text-lg',
    lg: 'px-10 py-4 text-xl'
  };
  return (
    <motion.button
      whileHover={{
        scale: 1.02
      }}
      whileTap={{
        scale: 0.98
      }}
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}>
      
      {children}
    </motion.button>);

}