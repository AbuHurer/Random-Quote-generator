import React from 'react';
import { ButtonProps } from '../types/button';

const ActionButton: React.FC<ButtonProps> = ({ 
  onClick, 
  children, 
  icon, 
  variant = 'primary',
  disabled = false,
  className = ''
}) => {
  const baseStyles = "flex items-center justify-center gap-2 py-2 px-4 rounded-md font-medium transition-all duration-200 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2";
  
  const variantStyles = {
    primary: "bg-teal-600 text-white hover:bg-teal-700 focus:ring-teal-500",
    secondary: "bg-amber-500 text-white hover:bg-amber-600 focus:ring-amber-400",
    outline: "bg-white text-gray-700 border border-gray-300 hover:bg-gray-50 focus:ring-gray-400"
  };
  
  const disabledStyles = disabled ? "opacity-50 cursor-not-allowed" : "cursor-pointer";
  
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`${baseStyles} ${variantStyles[variant]} ${disabledStyles} ${className}`}
    >
      {icon && <span>{icon}</span>}
      {children}
    </button>
  );
};

export default ActionButton;