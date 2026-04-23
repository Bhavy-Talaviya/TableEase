import React, { useState } from 'react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="nav-logo">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M3 2v7c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2V2" />
          <path d="M7 2v20" />
          <path d="M21 15V2v0a5 5 0 0 0-5 5v6c0 1.1.9 2 2 2h3Zm0 0v7" />
        </svg>
        TableEase
      </div>
      
      {/* Desktop Links */}
      <div className="nav-links">
        <a href="#home" className="nav-link active">Home</a>
        <a href="#story" className="nav-link">Our Story</a>
        <a href="#reviews" className="nav-link">Reviews</a>
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
        <a href="#home" className="mobile-link" onClick={() => setIsMenuOpen(false)}>Home</a>
        <a href="#story" className="mobile-link" onClick={() => setIsMenuOpen(false)}>Our Story</a>
        <a href="#reviews" className="mobile-link" onClick={() => setIsMenuOpen(false)}>Reviews</a>
        <div className="mobile-actions">
          <button className="btn-login" onClick={() => setIsMenuOpen(false)}>Login</button>
          <button className="btn-book" onClick={() => setIsMenuOpen(false)}>Book a Table</button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
