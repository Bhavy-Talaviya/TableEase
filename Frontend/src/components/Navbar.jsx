import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  return (
    <nav className="navbar">
      <Link to="/" className="nav-logo">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M3 2v7c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2V2" />
          <path d="M7 2v20" />
          <path d="M21 15V2v0a5 5 0 0 0-5 5v6c0 1.1.9 2 2 2h3Zm0 0v7" />
        </svg>
        TableEase
      </Link>
      
      {/* Desktop Links */}
      <div className="nav-links">
        <Link to="/" className={`nav-link ${location.pathname === '/' ? 'active' : ''}`}>Home</Link>
        <Link to="/our-story" className={`nav-link ${location.pathname === '/our-story' ? 'active' : ''}`}>Our Story</Link>
        <Link to="/reviews" className={`nav-link ${location.pathname === '/reviews' ? 'active' : ''}`}>Reviews</Link>
      </div>
      
      <div className="nav-actions">
        <button className="btn-login">Login</button>
        <button className="btn-book">Book a Table</button>
      </div>

      {/* Mobile Menu Toggle */}
      <button className="mobile-menu-btn" onClick={() => setIsMenuOpen(!isMenuOpen)}>
        {isMenuOpen ? (
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        ) : (
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="3" y1="12" x2="21" y2="12" />
            <line x1="3" y1="6" x2="21" y2="6" />
            <line x1="3" y1="18" x2="21" y2="18" />
          </svg>
        )}
      </button>

      {/* Mobile Menu Overlay */}
      <div className={`mobile-menu ${isMenuOpen ? 'open' : ''}`}>
        <Link to="/" className="mobile-link" onClick={() => setIsMenuOpen(false)}>Home</Link>
        <Link to="/our-story" className="mobile-link" onClick={() => setIsMenuOpen(false)}>Our Story</Link>
        <Link to="/reviews" className="mobile-link" onClick={() => setIsMenuOpen(false)}>Reviews</Link>
        <div className="mobile-actions">
          <button className="btn-login" onClick={() => setIsMenuOpen(false)}>Login</button>
          <button className="btn-book" onClick={() => setIsMenuOpen(false)}>Book a Table</button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
