import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline';
  withArrow?: boolean;
  href?: string;
  children?: React.ReactNode;
  className?: string;
  type?: "button" | "submit" | "reset";
}

export function Button({ variant = 'primary', withArrow, children, href, className = '', disabled, ...props }: ButtonProps) {
  const baseStyle = "inline-flex items-center justify-center gap-2 px-6 py-4 min-h-[64px] font-display text-xl tracking-wide transition-all duration-200 rounded-sm text-center leading-tight whitespace-normal cursor-pointer";
  
  const variants = {
    primary: "bg-accent text-ink hover:brightness-95 hover:scale-[1.02]",
    secondary: "bg-bg text-ink hover:bg-dust",
    outline: "border-2 border-accent text-accent hover:bg-accent hover:text-ink hover:scale-[1.02]"
  };

  const disabledStyle = "opacity-50 cursor-not-allowed grayscale hover:scale-100 hover:brightness-100 hover:bg-transparent hover:text-accent pointer-events-none";

  const content = (
    <>
      {children}
      {withArrow && <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1 flex-shrink-0" />}
    </>
  );

  if (href && !disabled) {
    return (
      <motion.a 
        href={href} 
        className={`${baseStyle} ${variants[variant]} group ${className}`}
        whileHover={{ scale: 1.03, y: -2 }}
        whileTap={{ scale: 0.98 }}
        transition={{ type: "spring", stiffness: 400, damping: 25 }}
      >
        {content}
      </motion.a>
    );
  }

  return (
    <motion.button 
      whileHover={disabled ? {} : { scale: 1.03, y: -2 }}
      whileTap={disabled ? {} : { scale: 0.98 }}
      transition={{ type: "spring", stiffness: 400, damping: 25 }}
      className={`${baseStyle} ${variants[variant]} ${disabled ? disabledStyle : ''} group ${className}`} 
      disabled={disabled}
      {...props}
    >
      {content}
    </motion.button>
  );
}
