import React from 'react';

const Navbar = () => {
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
      
      <div className="nav-links">
        <a href="#home" className="nav-link active">Home</a>
        <a href="#story" className="nav-link">Our Story</a>
        <a href="#reviews" className="nav-link">Reviews</a>
      </div>
      
      <div className="nav-actions">
        <button className="btn-login">Login</button>
        <button className="btn-book">Book a Table</button>
      </div>
    </nav>
  );
};

export default Navbar;
