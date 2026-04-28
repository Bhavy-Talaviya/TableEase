import React from 'react';

const ReviewHero = () => {
  return (
    <div className="review-hero">
      <div className="review-hero-content">
        <h1>See What Our Diners Are Saying</h1>
        <p>Discover why thousands of food lovers choose TableEase for their dining experiences.</p>
        <div className="review-hero-rating">
          <div className="hero-stars">
            {[...Array(5)].map((_, i) => (
              <svg key={i} width="24" height="24" viewBox="0 0 24 24" fill="#FF6B35" stroke="#FF6B35">
                <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
              </svg>
            ))}
          </div>
          <span>4.9 / 5 from over 10,000 reviews</span>
        </div>
      </div>
    </div>
  );
};

export default ReviewHero;
