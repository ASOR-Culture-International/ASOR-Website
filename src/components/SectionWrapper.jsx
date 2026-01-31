import React from 'react';
import './SectionWrapper.css';

const SectionWrapper = ({ 
  children, 
  variant = 'default',
  className = '',
  id,
  title,
  subtitle
}) => {
  return (
    <section 
      id={id}
      className={`section-wrapper section-wrapper--${variant} ${className}`}
    >
      <div className="container">
        {(title || subtitle) && (
          <div className="section-wrapper__header">
            {subtitle && <p className="section-wrapper__subtitle">{subtitle}</p>}
            {title && <h2 className="section-wrapper__title">{title}</h2>}
          </div>
        )}
        
        <div className="section-wrapper__content">
          {children}
        </div>
      </div>
    </section>
  );
};

export default SectionWrapper;
