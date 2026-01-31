import React from 'react';
import SectionWrapper from '../components/SectionWrapper';
import Button from '../components/Button';
import './Programs.css';

const Programs = () => {
  const programs = [
    {
      id: 'purpose-discovery',
      title: 'Purpose Discovery Hub',
      tagline: 'Uncover Your Unique Calling',
      description: 'A comprehensive program designed to help you discover your unique purpose through guided assessments, reflective exercises, and personalized coaching.',
      features: [
        'Personal purpose assessment and analysis',
        'One-on-one coaching sessions with certified facilitators',
        'Purpose discovery workbook and resources',
        'Action plan development and goal setting',
        'Ongoing support and accountability',
        'Community of purpose-driven individuals'
      ],
      duration: '8 Weeks',
      format: 'Hybrid (Online + In-Person)',
      ideal: 'Individuals seeking clarity on their life purpose and direction'
    },
    {
      id: 'transformation',
      title: 'Transformation Program',
      tagline: 'A Year of Deep Personal Growth',
      description: 'Our flagship annual program that facilitates comprehensive personal transformation through structured learning, community support, and practical application.',
      features: [
        'Year-long structured curriculum covering all aspects of personal development',
        'Monthly workshops and training sessions',
        'Quarterly retreats and immersive experiences',
        'Personal growth tracking and milestone celebrations',
        'Access to expert facilitators and mentors',
        'Lifetime alumni network and continued support'
      ],
      duration: '12 Months',
      format: 'Blended (Monthly In-Person + Weekly Online)',
      ideal: 'Individuals committed to deep, sustainable personal transformation'
    },
    {
      id: 'purposeful-teens',
      title: 'Purposeful Teens',
      tagline: 'Empowering the Next Generation',
      description: 'An age-appropriate program designed to help teenagers discover their purpose early, build confidence, and develop essential life skills for success.',
      features: [
        'Teen-friendly purpose discovery activities',
        'Skills development workshops (communication, leadership, critical thinking)',
        'Mentorship from successful young adults and professionals',
        'Peer support groups and accountability partners',
        'Parent engagement sessions and family integration',
        'College and career readiness preparation'
      ],
      duration: '6 Months',
      format: 'In-Person (Weekend Sessions)',
      ideal: 'Teenagers aged 13-19 seeking purpose clarity and personal development'
    },
    {
      id: 'jci-training',
      title: 'JCI Training',
      tagline: 'Building Organizational Excellence',
      description: 'Professional development training programs focused on leadership capacity building, team effectiveness, and organizational transformation.',
      features: [
        'Leadership fundamentals and advanced strategies',
        'Team building and collaborative excellence',
        'Strategic thinking and decision making',
        'Organizational culture transformation',
        'Performance optimization techniques',
        'Customizable training modules for organizations'
      ],
      duration: 'Flexible (1-Day to 3-Month Programs)',
      format: 'Customizable (On-Site or Virtual)',
      ideal: 'Organizations, teams, and professionals seeking leadership development'
    }
  ];

  return (
    <div className="programs">
      {/* Hero Section */}
      <div className="programs-hero">
        <div className="programs-hero__content container">
          <h1 className="programs-hero__title">Our Programs</h1>
          <p className="programs-hero__subtitle">
            Transformative pathways designed to help you discover purpose, 
            develop potential, and create lasting impact
          </p>
        </div>
      </div>

      {/* Programs List */}
      {programs.map((program, index) => (
        <SectionWrapper
          key={program.id}
          id={program.id}
          variant={index % 2 === 0 ? 'light' : 'default'}
        >
          <div className={`program-detail ${index % 2 === 1 ? 'program-detail--reverse' : ''}`}>
            <div className="program-detail__image">
              <div className="image-placeholder">[{program.title} Image]</div>
            </div>
            <div className="program-detail__content">
              <h2 className="program-detail__title">{program.title}</h2>
              <p className="program-detail__tagline">{program.tagline}</p>
              <p className="program-detail__description">{program.description}</p>
              
              <div className="program-detail__meta">
                <div className="program-meta">
                  <div className="program-meta__icon">⏱️</div>
                  <div>
                    <div className="program-meta__label">Duration</div>
                    <div className="program-meta__value">{program.duration}</div>
                  </div>
                </div>
                <div className="program-meta">
                  <div className="program-meta__icon">📍</div>
                  <div>
                    <div className="program-meta__label">Format</div>
                    <div className="program-meta__value">{program.format}</div>
                  </div>
                </div>
              </div>

              <div className="program-detail__section">
                <h4 className="program-detail__section-title">What You'll Get</h4>
                <ul className="program-detail__features">
                  {program.features.map((feature, idx) => (
                    <li key={idx} className="program-detail__feature">
                      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                        <path d="M16.7 6.3L8.7 14.3L4.3 9.9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="program-detail__ideal">
                <strong>Ideal for:</strong> {program.ideal}
              </div>

              <div className="program-detail__cta">
                <Button variant="primary" size="medium" href="/contact">
                  Enroll Now
                </Button>
                <Button variant="secondary" size="medium" href="#learn-more">
                  Download Brochure
                </Button>
              </div>
            </div>
          </div>
        </SectionWrapper>
      ))}

      {/* CTA Section */}
      <SectionWrapper variant="dark">
        <div className="programs-cta">
          <h2 className="programs-cta__title">Ready to Begin Your Transformation?</h2>
          <p className="programs-cta__text">
            Choose the program that aligns with your goals and start your journey today. 
            Our team is here to help you find the perfect fit.
          </p>
          <div className="programs-cta__buttons">
            <Button variant="primary" size="large" href="/contact">
              Get Started
            </Button>
            <Button variant="outline" size="large" href="#schedule">
              Schedule a Consultation
            </Button>
          </div>
        </div>
      </SectionWrapper>
    </div>
  );
};

export default Programs;
