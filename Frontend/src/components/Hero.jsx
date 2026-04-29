import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Hero = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const user = localStorage.getItem('currentUser');
    setIsLoggedIn(!!user);
  }, []);

  const handleSearchClick = () => {
    alert('First login then Book Table');
    navigate('/login');
  };

  return (
    <section className="hero-section">
      <div className="hero-content">
        <h1>Experience the Art of Fine Dining</h1>
        <p>Discover handpicked culinary experiences and reserve your perfect table in seconds.</p>

        <div className="booking-widget">
          <div className="input-group">
            <label>Date</label>
            <div className="input-wrapper">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#FF6B35" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                <line x1="16" y1="2" x2="16" y2="6" />
                <line x1="8" y1="2" x2="8" y2="6" />
                <line x1="3" y1="10" x2="21" y2="10" />
              </svg>
              <input type="text" placeholder="Pick a date" onFocus={(e) => e.target.type = 'date'} />
            </div>
          </div>

          <div className="input-group">
            <label>Guests</label>
            <div className="input-wrapper">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#FF6B35" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                <circle cx="9" cy="7" r="4" />
                <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                <path d="M16 3.13a4 4 0 0 1 0 7.75" />
              </svg>
              <select defaultValue="2">
                <option value="1">1 Person</option>
                <option value="2">2 People</option>
                <option value="3">3 People</option>
                <option value="4">4 People</option>
                <option value="5">5+ People</option>
              </select>
            </div>
          </div>

          <button className="btn-search" onClick={handleSearchClick}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="11" cy="11" r="8" />
              <line x1="21" y1="21" x2="16.65" y2="16.65" />
            </svg>
            Find a Table
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
