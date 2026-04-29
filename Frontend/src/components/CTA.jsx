import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const CTA = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const user = localStorage.getItem('currentUser');
    setIsLoggedIn(!!user);
  }, []);

  const handleBookClick = () => {
    alert('First login then Book Table');
    navigate('/login');
  };

  const handleBrowseClick = () => {
    if (isLoggedIn) {
      navigate('/dashboard');
    } else {
      navigate('/reviews');
    }
  };

  return (
    <section className="cta-section">
      <div className="cta-content">
        <h2>Ready to reserve your table?</h2>
        <div className="cta-actions">
          <button className="btn-cta-primary" onClick={handleBookClick}>Book a Table Now</button>
          <button className="btn-cta-secondary" onClick={handleBrowseClick}>Browse Restaurants</button>
        </div>
      </div>
    </section>
  );
};

export default CTA;
