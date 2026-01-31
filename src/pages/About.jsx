import React from 'react';
import SectionWrapper from '../components/SectionWrapper';
import './About.css';

const About = () => {
  const values = [
    {
      title: 'Purpose-Driven',
      description: 'We believe every individual has a unique purpose, and discovering it is the foundation for a meaningful life.',
      icon: '🎯'
    },
    {
      title: 'Transformation',
      description: 'We are committed to facilitating deep, sustainable personal transformation that creates lasting impact.',
      icon: '🦋'
    },
    {
      title: 'Excellence',
      description: 'We pursue excellence in all our programs, ensuring the highest quality experience for every participant.',
      icon: '⭐'
    },
    {
      title: 'Community',
      description: 'We build supportive communities where individuals can grow, learn, and inspire one another.',
      icon: '🤝'
    },
    {
      title: 'Integrity',
      description: 'We operate with transparency, honesty, and authenticity in all our interactions and programs.',
      icon: '💎'
    },
    {
      title: 'Impact',
      description: 'We measure success by the positive, lasting impact we create in individuals, families, and communities.',
      icon: '🌟'
    }
  ];

  return (
    <div className="about">
      {/* Hero Section */}
      <div className="about-hero">
        <div className="about-hero__content container">
          <h1 className="about-hero__title">About ASOR Culture International</h1>
          <p className="about-hero__subtitle">
            Empowering Purpose. Transforming Lives. Building Communities.
          </p>
        </div>
      </div>

      {/* Organization Overview */}
      <SectionWrapper variant="light" title="Our Story" subtitle="Who We Are">
        <div className="story-section">
          <div className="story-section__image">
            <div className="image-placeholder">[Organization Photo]</div>
          </div>
          <div className="story-section__content">
            <p className="story-section__text">
              ASOR Culture International was founded on the belief that every person has a unique 
              purpose waiting to be discovered. What began as a passionate vision to help individuals 
              find clarity and direction in their lives has evolved into a comprehensive organization 
              that transforms communities through purpose-driven personal development.
            </p>
            <p className="story-section__text">
              Over the years, we have developed innovative programs and methodologies that guide 
              individuals through the journey of self-discovery, helping them uncover their innate 
              gifts, passions, and calling. Our approach combines proven personal development 
              principles with practical tools and supportive community structures.
            </p>
            <p className="story-section__text">
              Today, ASOR Culture International stands as a beacon of hope and transformation, 
              having impacted hundreds of lives across diverse communities. We continue to expand 
              our reach and refine our programs, always staying true to our core mission of helping 
              people discover and live their purpose.
            </p>
          </div>
        </div>
      </SectionWrapper>

      {/* Mission & Vision */}
      <SectionWrapper variant="default">
        <div className="mission-vision">
          <div className="mission-vision__card mission-vision__card--mission">
            <div className="mission-vision__icon">🎯</div>
            <h3 className="mission-vision__title">Our Mission</h3>
            <p className="mission-vision__text">
              To empower individuals to discover their unique purpose, develop their potential, 
              and live intentionally impactful lives that transform families, workplaces, and 
              communities.
            </p>
          </div>
          <div className="mission-vision__card mission-vision__card--vision">
            <div className="mission-vision__icon">🌍</div>
            <h3 className="mission-vision__title">Our Vision</h3>
            <p className="mission-vision__text">
              A world where every individual lives a purpose-driven life, creating ripple effects 
              of positive transformation across generations and communities worldwide.
            </p>
          </div>
        </div>
      </SectionWrapper>

      {/* Core Values */}
      <SectionWrapper 
        variant="light" 
        title="Our Core Values" 
        subtitle="What Drives Us"
      >
        <div className="values-grid">
          {values.map((value, index) => (
            <div key={index} className="value-card">
              <div className="value-card__icon">{value.icon}</div>
              <h4 className="value-card__title">{value.title}</h4>
              <p className="value-card__description">{value.description}</p>
            </div>
          ))}
        </div>
      </SectionWrapper>

      {/* Impact Section */}
      <SectionWrapper variant="dark" title="Our Impact" subtitle="Making a Difference">
        <div className="impact-section">
          <div className="impact-stats">
            <div className="impact-stat">
              <div className="impact-stat__number">500+</div>
              <div className="impact-stat__label">Lives Transformed</div>
              <p className="impact-stat__description">
                Individuals who have completed our programs and experienced lasting transformation
              </p>
            </div>
            <div className="impact-stat">
              <div className="impact-stat__number">10+</div>
              <div className="impact-stat__label">Years of Service</div>
              <p className="impact-stat__description">
                Dedicated to purpose discovery and personal development excellence
              </p>
            </div>
            <div className="impact-stat">
              <div className="impact-stat__number">50+</div>
              <div className="impact-stat__label">Communities Reached</div>
              <p className="impact-stat__description">
                Diverse communities impacted across multiple regions
              </p>
            </div>
            <div className="impact-stat">
              <div className="impact-stat__number">95%</div>
              <div className="impact-stat__label">Satisfaction Rate</div>
              <p className="impact-stat__description">
                Participants who report significant positive life changes
              </p>
            </div>
          </div>
        </div>
      </SectionWrapper>

      {/* Approach Section */}
      <SectionWrapper variant="default" title="Our Approach" subtitle="How We Work">
        <div className="approach-section">
          <div className="approach-card">
            <div className="approach-card__number">01</div>
            <h4 className="approach-card__title">Discovery</h4>
            <p className="approach-card__text">
              We begin with guided self-discovery processes that help individuals uncover 
              their unique gifts, passions, and purpose through proven assessment tools and 
              reflective exercises.
            </p>
          </div>
          <div className="approach-card">
            <div className="approach-card__number">02</div>
            <h4 className="approach-card__title">Development</h4>
            <p className="approach-card__text">
              We provide structured programs and resources that develop the skills, mindset, 
              and strategies needed to align daily life with discovered purpose.
            </p>
          </div>
          <div className="approach-card">
            <div className="approach-card__number">03</div>
            <h4 className="approach-card__title">Deployment</h4>
            <p className="approach-card__text">
              We support individuals in taking practical action, implementing their purpose 
              in real-world contexts, and creating measurable impact in their spheres of 
              influence.
            </p>
          </div>
          <div className="approach-card">
            <div className="approach-card__number">04</div>
            <h4 className="approach-card__title">Sustainability</h4>
            <p className="approach-card__text">
              We build supportive communities and provide ongoing resources to ensure 
              transformation is sustained over time, creating lasting legacy.
            </p>
          </div>
        </div>
      </SectionWrapper>
    </div>
  );
};

export default About;
