import React from 'react';
import './ProgramCard.css';

const ProgramCard = ({ 
  title, 
  description, 
  features = [], 
  icon,
  imageUrl,
  className = '' 
}) => {
  return (
    <div className={`program-card ${className}`}>
      {imageUrl && (
        <div className="program-card__image">
          <img src={imageUrl} alt={title} />
        </div>
      )}
      
      <div className="program-card__content">
        {icon && (
          <div className="program-card__icon">
            {icon}
          </div>
        )}
        
        <h3 className="program-card__title">{title}</h3>
        <p className="program-card__description">{description}</p>
        
        {features.length > 0 && (
          <ul className="program-card__features">
            {features.map((feature, index) => (
              <li key={index} className="program-card__feature">
                <span className="program-card__feature-icon">✓</span>
                {feature}
              </li>
            ))}
          </ul>
        )}
      </div>
      
      <div className="program-card__footer">
        <a href="#learn-more" className="program-card__link">
          Learn More
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path d="M6 3L11 8L6 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </a>
      </div>
    </div>
  );
};

export default ProgramCard;
