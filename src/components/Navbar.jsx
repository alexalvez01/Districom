import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import './Navbar.css';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);

  const handleDropdownClick = (e, hash) => {
    e.preventDefault();
    closeMenu();
    window.location.hash = hash;
    const section = document.getElementById('about');
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
        <div className="navbar-container">
          <a href="#home" className="navbar-logo" onClick={closeMenu}>
            <img src="/districomlogo.webp" alt="Districom Logo" />
          </a>
          
          <div className={`menu-icon ${menuOpen ? 'open' : ''}`} onClick={toggleMenu}>
            {menuOpen ? (
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            ) : (
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="3" y1="12" x2="21" y2="12"></line>
                <line x1="3" y1="6" x2="21" y2="6"></line>
                <line x1="3" y1="18" x2="21" y2="18"></line>
              </svg>
            )}
          </div>

          <ul className={`nav-menu ${menuOpen ? 'active' : ''}`}>
            <li className="nav-item">
              <a href="#home" className="nav-links" onClick={closeMenu}>Inicio</a>
            </li>
            <li className="nav-item dropdown">
              <a href="#about" className="nav-links" onClick={closeMenu}>
                Nosotros 
                <svg 
                  className="dropdown-arrow" 
                  width="16" height="16" viewBox="0 0 24 24" fill="none" 
                  stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                >
                  <polyline points="6 9 12 15 18 9"></polyline>
                </svg>
              </a>
              <ul className="dropdown-menu">
                <li><a href="#who-we-are" className="dropdown-link" onClick={(e) => handleDropdownClick(e, 'who-we-are')}>¿Quiénes Somos?</a></li>
                <li><a href="#objectives" className="dropdown-link" onClick={(e) => handleDropdownClick(e, 'objectives')}>Objetivos</a></li>
              </ul>
            </li>
            <li className="nav-item">
              <a href="#services" className="nav-links" onClick={closeMenu}>Servicios</a>
            </li>
            <li className="nav-item">
              <a href="#contact" className="nav-links" onClick={closeMenu}>Contacto</a>
            </li>
          </ul>
        </div>
      </nav>
    );
};

export default Navbar;
