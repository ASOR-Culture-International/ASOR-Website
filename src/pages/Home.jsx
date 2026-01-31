import React from 'react';
import { Link } from 'react-router-dom';
import SectionWrapper from '../components/SectionWrapper';
import ProgramCard from '../components/ProgramCard';
import Button from '../components/Button';
import './Home.css';

const Home = () => {
  const programs = [
    {
      title: 'Purpose Discovery Hub',
      description: 'Uncover your unique purpose and design a life aligned with your calling through guided discovery sessions.',
      features: [
        'Personal purpose assessment',
        'One-on-one coaching',
        'Action plan development'
      ]
    },
    {
      title: 'Transformation',
      description: 'A comprehensive annual program designed to facilitate deep personal transformation and sustainable growth.',
      features: [
        'Year-long structured curriculum',
        'Community support',
        'Measurable milestones'
      ]
    },
    {
      title: 'Purposeful Teens',
      description: 'Empowering the next generation to discover their purpose early and navigate life with clarity and confidence.',
      features: [
        'Age-appropriate workshops',
        'Mentorship programs',
        'Skills development'
      ]
    },
    {
      title: 'JCI Training',
      description: 'Professional development training programs designed to build leadership capacity and organizational excellence.',
      features: [
        'Leadership fundamentals',
        'Team building',
        'Strategic thinking'
      ]
    }
  ];

  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero__overlay"></div>
        <div className="hero__content container">
          <h1 className="hero__title">
            Transform Your Life Through
            <span className="hero__title-highlight"> Purpose Discovery</span>
          </h1>
          <p className="hero__subtitle">
            Empowering individuals and communities to live intentionally, 
            discover their purpose, and create lasting impact in the world.
          </p>
          <div className="hero__cta">
            <Button variant="primary" size="large" href="#programs">
              Explore Programs
            </Button>
            <Button variant="outline" size="large" href="/about">
              Our Story
            </Button>
          </div>
        </div>
        <div className="hero__scroll">
          <span>Scroll to explore</span>
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
            <path d="M10 4V16M10 16L4 10M10 16L16 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
      </section>

      {/* About Preview Section */}
      <SectionWrapper 
        variant="light" 
        title="Who We Are" 
        subtitle="About ASOR Culture"
      >
        <div className="about-preview">
          <div className="about-preview__content">
            <p className="about-preview__text">
              ASOR Culture International is a transformative organization dedicated to 
              helping individuals discover their purpose and live lives of intentional impact. 
              Through our comprehensive programs and community-driven approach, we facilitate 
              deep personal transformation that creates ripple effects in families, workplaces, 
              and communities.
            </p>
            <p className="about-preview__text">
              We believe that every person has a unique purpose, and when that purpose is 
              discovered and activated, it has the power to transform not just individual 
              lives but entire communities. Our programs are designed to guide this discovery 
              and support sustainable personal growth.
            </p>
            <div className="about-preview__stats">
              <div className="stat">
                <div className="stat__number">500+</div>
                <div className="stat__label">Lives Transformed</div>
              </div>
              <div className="stat">
                <div className="stat__number">10+</div>
                <div className="stat__label">Years of Impact</div>
              </div>
              <div className="stat">
                <div className="stat__number">4</div>
                <div className="stat__label">Core Programs</div>
              </div>
            </div>
            <Button variant="secondary" size="medium" href="/about">
              Learn More About Us
            </Button>
          </div>
          <div className="about-preview__image">
            <div className="image-placeholder">
              [Organization Image]
            </div>
          </div>
        </div>
      </SectionWrapper>

      {/* Programs Overview */}
      <SectionWrapper 
        id="programs"
        variant="default" 
        title="Our Programs" 
        subtitle="Pathways to Purpose"
      >
        <div className="programs-grid">
          {programs.map((program, index) => (
            <ProgramCard 
              key={index}
              title={program.title}
              description={program.description}
              features={program.features}
            />
          ))}
        </div>
        <div className="programs-cta">
          <Link to="/programs">
            <Button variant="primary" size="large">
              View All Programs
            </Button>
          </Link>
        </div>
      </SectionWrapper>

      {/* Founder Highlight Preview */}
      <SectionWrapper variant="dark">
        <div className="founder-preview">
          <div className="founder-preview__image">
            <div className="image-placeholder">
              [Founder Photo]
            </div>
          </div>
          <div className="founder-preview__content">
            <p className="founder-preview__label">Meet Our Founder</p>
            <h2 className="founder-preview__name">Temitope Elizabeth Momoh</h2>
            <p className="founder-preview__bio">
              A passionate advocate for purpose-driven living, Temitope Elizabeth Momoh 
              has dedicated her career to helping individuals and organizations discover 
              their unique calling and maximize their potential. With over a decade of 
              experience in personal development and organizational transformation, she 
              has impacted hundreds of lives across communities.
            </p>
            <Button variant="outline" size="medium" href="/founder">
              Read Full Story
            </Button>
          </div>
        </div>
      </SectionWrapper>

      {/* Final CTA Section */}
      <SectionWrapper variant="light">
        <div className="final-cta">
          <h2 className="final-cta__title">Ready to Discover Your Purpose?</h2>
          <p className="final-cta__text">
            Join hundreds of individuals who have transformed their lives through our programs. 
            Your journey to purposeful living starts here.
          </p>
          <div className="final-cta__buttons">
            <Button variant="primary" size="large" href="/contact">
              Get Started Today
            </Button>
            <Button variant="secondary" size="large" href="/programs">
              Browse Programs
            </Button>
          </div>
        </div>
      </SectionWrapper>
    </div>
  );
};

export default Home;
