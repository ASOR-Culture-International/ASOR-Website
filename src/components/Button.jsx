import React from 'react';
import './Button.css';

const Button = ({ 
  children, 
  variant = 'primary', 
  size = 'medium', 
  onClick, 
  href,
  type = 'button',
  className = '',
  ...props 
}) => {
  const baseClass = `btn btn--${variant} btn--${size} ${className}`;

  if (href) {
    return (
      <a href={href} className={baseClass} {...props}>
        {children}
      </a>
    );
  }

  return (
    <button type={type} className={baseClass} onClick={onClick} {...props}>
      {children}
    </button>
  );
};

export default Button;
