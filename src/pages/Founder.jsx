import React from 'react';
import SectionWrapper from '../components/SectionWrapper';
import Button from '../components/Button';
import './Founder.css';

const Founder = () => {
  const achievements = [
    {
      year: '2015',
      title: 'Founded ASOR Culture International',
      description: 'Established the organization with a vision to transform lives through purpose discovery'
    },
    {
      year: '2017',
      title: 'Launched Purpose Discovery Hub',
      description: 'Developed the flagship program that has helped hundreds find their calling'
    },
    {
      year: '2019',
      title: 'Expanded to Youth Development',
      description: 'Created Purposeful Teens program to empower the next generation'
    },
    {
      year: '2021',
      title: 'Community Impact Award',
      description: 'Recognized for outstanding contribution to personal development and community transformation'
    },
    {
      year: '2023',
      title: 'International Speaker',
      description: 'Featured speaker at multiple international conferences on purpose and transformation'
    }
  ];

  const expertise = [
    'Purpose Discovery & Life Coaching',
    'Personal Development & Transformation',
    'Leadership Development',
    'Youth Empowerment',
    'Organizational Culture Building',
    'Public Speaking & Training'
  ];

  return (
    <div className="founder">
      {/* Hero Section */}
      <div className="founder-hero">
        <div className="founder-hero__content container">
          <p className="founder-hero__label">Meet the Founder</p>
          <h1 className="founder-hero__title">Temitope Momoh</h1>
          <p className="founder-hero__subtitle">
            Purpose Advocate • Transformation Coach • Community Builder
          </p>
        </div>
      </div>

      {/* Bio Section */}
      <SectionWrapper variant="light">
        <div className="founder-bio">
          <div className="founder-bio__image">
            <div className="image-placeholder">[Founder Photo]</div>
            <div className="founder-bio__quote">
              <svg width="40" height="40" viewBox="0 0 40 40" fill="currentColor" opacity="0.2">
                <path d="M10 20c0-5.523 4.477-10 10-10v6c-2.209 0-4 1.791-4 4h4v10H10V20zm16 0c0-5.523 4.477-10 10-10v6c-2.209 0-4 1.791-4 4h4v10H26V20z"/>
              </svg>
              <p>
                "Every person has a unique purpose waiting to be discovered. My mission is to 
                help you uncover yours and live it fully."
              </p>
            </div>
          </div>
          <div className="founder-bio__content">
            <h2 className="founder-bio__title">About Temitope</h2>
            <p className="founder-bio__text">
              Temitope Momoh is a passionate advocate for purpose-driven living and 
              personal transformation. With over a decade of experience in personal development, 
              coaching, and organizational training, she has dedicated her career to helping 
              individuals and organizations discover their unique calling and maximize their potential.
            </p>
            <p className="founder-bio__text">
              Her journey began with a personal quest to understand her own purpose, which led 
              to years of study, training, and practical application in the field of personal 
              development. This transformative experience ignited a passion to help others 
              navigate their own purpose discovery journey.
            </p>
            <p className="founder-bio__text">
              As the founder of ASOR Culture International, Temitope has created comprehensive 
              programs that combine proven methodologies with innovative approaches to facilitate 
              deep, sustainable transformation. Her work has impacted hundreds of individuals 
              across diverse communities, helping them transition from confusion to clarity, 
              from potential to purpose.
            </p>
            <p className="founder-bio__text">
              Beyond her role at ASOR Culture International, Temitope is a sought-after speaker, 
              trainer, and consultant. She has facilitated workshops and training sessions for 
              various organizations, schools, and community groups, sharing insights on purpose 
              discovery, leadership development, and personal excellence.
            </p>

            <div className="founder-bio__expertise">
              <h4>Areas of Expertise</h4>
              <div className="expertise-grid">
                {expertise.map((area, index) => (
                  <div key={index} className="expertise-item">
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                      <path d="M13.4 5L6.4 12L2.6 8.2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    {area}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </SectionWrapper>

      {/* Achievements Timeline */}
      <SectionWrapper 
        variant="default" 
        title="Journey of Impact" 
        subtitle="Milestones & Achievements"
      >
        <div className="achievements-timeline">
          {achievements.map((achievement, index) => (
            <div key={index} className="timeline-item">
              <div className="timeline-item__year">{achievement.year}</div>
              <div className="timeline-item__content">
                <h4 className="timeline-item__title">{achievement.title}</h4>
                <p className="timeline-item__description">{achievement.description}</p>
              </div>
            </div>
          ))}
        </div>
      </SectionWrapper>

      {/* Philosophy Section */}
      <SectionWrapper variant="dark" title="Leadership Philosophy">
        <div className="philosophy-section">
          <div className="philosophy-card">
            <div className="philosophy-card__icon">🎯</div>
            <h3 className="philosophy-card__title">Purpose-Centered</h3>
            <p className="philosophy-card__text">
              I believe that discovering and living one's purpose is the foundation for a 
              meaningful life. Every decision, program, and initiative at ASOR Culture is 
              designed to facilitate this discovery and activation.
            </p>
          </div>
          <div className="philosophy-card">
            <div className="philosophy-card__icon">👥</div>
            <h3 className="philosophy-card__title">People-First</h3>
            <p className="philosophy-card__text">
              Transformation happens in community. I am committed to creating safe, supportive 
              spaces where individuals can explore, grow, and transform alongside others on 
              similar journeys.
            </p>
          </div>
          <div className="philosophy-card">
            <div className="philosophy-card__icon">📈</div>
            <h3 className="philosophy-card__title">Growth-Oriented</h3>
            <p className="philosophy-card__text">
              Personal development is a lifelong journey. I advocate for continuous learning, 
              intentional growth, and the courage to evolve beyond comfort zones into new 
              levels of impact and influence.
            </p>
          </div>
        </div>
      </SectionWrapper>

      {/* CTA Section */}
      <SectionWrapper variant="light">
        <div className="founder-cta">
          <h2 className="founder-cta__title">Work With Temitope</h2>
          <p className="founder-cta__text">
            Interested in booking Temitope for speaking engagements, consulting, or training? 
            Get in touch to discuss how she can contribute to your organization or event.
          </p>
          <div className="founder-cta__buttons">
            <Button variant="primary" size="large" href="/contact">
              Book a Speaking Engagement
            </Button>
            <Button variant="secondary" size="large" href="/programs">
              Join a Program
            </Button>
          </div>
        </div>
      </SectionWrapper>
    </div>
  );
};

export default Founder;
