import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Header.css';
import logo from '../assets/images/logo.png';


const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About' },
    { path: '/programs', label: 'Programs' },
    { path: '/founder', label: 'Founder' },
    { path: '/contact', label: 'Contact' },
  ];

  return (
    <header className={`header ${isScrolled ? 'header--scrolled' : ''}`}>
      <div className="header__container container">
        <Link to="/" className="header__logo">
          <div className="header__logo-text">
            <span className="header__logo-image">
              <img src={logo} alt="ASOR logo" />
            </span>

            <div className="header__logo-text-text">
              <span className="header__logo-primary">ASOR</span>
              <span className="header__logo-secondary">Culture International</span>
            </div>
          </div>
        </Link>

        <nav className={`header__nav ${isMobileMenuOpen ? 'header__nav--open' : ''}`}>
          <ul className="header__nav-list">
            {navLinks.map((link) => (
              <li key={link.path} className="header__nav-item">
                <Link
                  to={link.path}
                  className={`header__nav-link ${location.pathname === link.path ? 'header__nav-link--active' : ''}`}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <button
          className={`header__mobile-toggle ${isMobileMenuOpen ? 'header__mobile-toggle--open' : ''}`}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </header>
  );
};

export default Header;
