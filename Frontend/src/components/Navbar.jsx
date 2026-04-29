import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleBookClick = () => {
    alert('First login then Book Table');
    navigate('/login');
    setIsMenuOpen(false);
  };

  return (
    <nav className="navbar">
      {/* Logo */}
      <Link to="/" className="nav-logo">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M3 2v7c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2V2" />
          <path d="M7 2v20" />
          <path d="M21 15V2v0a5 5 0 0 0-5 5v6c0 1.1.9 2 2 2h3Zm0 0v7" />
        </svg>
        TableEase
      </Link>

      {/* Desktop Nav Links */}
      {!isMobile && (
        <div className="nav-links">
          <Link to="/" className={`nav-link ${location.pathname === '/' ? 'active' : ''}`}>Home</Link>
          <Link to="/our-story" className={`nav-link ${location.pathname === '/our-story' ? 'active' : ''}`}>Our Story</Link>
          <Link to="/reviews" className={`nav-link ${location.pathname === '/reviews' ? 'active' : ''}`}>Reviews</Link>
        </div>
      )}

      {/* Desktop Actions */}
      {!isMobile && (
        <div className="nav-actions">
          <Link to="/login" className="btn-login">Login</Link>
          <button className="btn-book" onClick={handleBookClick}>Book a Table</button>
        </div>
      )}

      {/* Mobile: Login + Hamburger side by side */}
      {isMobile && (
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginLeft: 'auto' }}>
          {/* Login button — visible next to hamburger */}
          <Link
            to="/login"
            style={{
              padding: '8px 18px',
              borderRadius: '10px',
              border: '1.5px solid var(--primary)',
              color: 'var(--primary)',
              fontWeight: '700',
              fontSize: '13px',
              textDecoration: 'none',
              display: 'inline-flex',
              alignItems: 'center',
            }}
          >
            Login
          </Link>

          {/* Hamburger button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            style={{
              background: 'transparent',
              border: 'none',
              cursor: 'pointer',
              padding: '4px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#1A1A1A',
              minHeight: 'unset',
            }}
          >
            {isMenuOpen ? (
              <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            ) : (
              <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="3" y1="12" x2="21" y2="12" />
                <line x1="3" y1="6" x2="21" y2="6" />
                <line x1="3" y1="18" x2="21" y2="18" />
              </svg>
            )}
          </button>
        </div>
      )}

      {/* Mobile Full-Screen Menu */}
      {isMobile && (
        <div
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            height: '100vh',
            background: 'white',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            gap: '30px',
            zIndex: 9999,
            transform: isMenuOpen ? 'translateY(0)' : 'translateY(-110%)',
            transition: 'transform 0.35s cubic-bezier(0.4,0,0.2,1)',
            pointerEvents: isMenuOpen ? 'all' : 'none',
          }}
        >
          {/* Close Button */}
          <button
            onClick={() => setIsMenuOpen(false)}
            style={{
              position: 'absolute',
              top: '20px',
              right: '24px',
              background: 'transparent',
              border: 'none',
              cursor: 'pointer',
              minHeight: 'unset',
            }}
          >
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#1A1A1A" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>

          <Link to="/" className="mobile-link" onClick={() => setIsMenuOpen(false)}>Home</Link>
          <Link to="/our-story" className="mobile-link" onClick={() => setIsMenuOpen(false)}>Our Story</Link>
          <Link to="/reviews" className="mobile-link" onClick={() => setIsMenuOpen(false)}>Reviews</Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
