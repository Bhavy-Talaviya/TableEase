import React from 'react';

const ReviewStats = () => {
  const ratingDistribution = [
    { stars: 5, percentage: 85 },
    { stars: 4, percentage: 10 },
    { stars: 3, percentage: 3 },
    { stars: 2, percentage: 1 },
    { stars: 1, percentage: 1 },
  ];

  return (
    <div className="review-stats-section">
      <div className="review-stats-container">
        <div className="overall-rating">
          <h2>4.9</h2>
          <div className="stars">
            {[...Array(5)].map((_, i) => (
              <svg key={i} width="28" height="28" viewBox="0 0 24 24" fill="#FF6B35" stroke="#FF6B35">
                <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
              </svg>
            ))}
          </div>
          <p>Based on 12,458 reviews</p>
          <button className="btn-write-review">Write a Review</button>
        </div>
        
        <div className="rating-bars">
          {ratingDistribution.map((item, index) => (
            <div key={index} className="rating-bar-row">
              <span className="star-label">{item.stars} Stars</span>
              <div className="bar-track">
                <div className="bar-fill" style={{ width: `${item.percentage}%` }}></div>
              </div>
              <span className="percent-label">{item.percentage}%</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ReviewStats;
