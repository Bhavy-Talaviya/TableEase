import React, { useState } from 'react';

const ReviewList = () => {
  const allReviews = [
    {
      id: 1,
      name: 'Sarah Miller',
      role: 'Food Critic',
      image: 'https://randomuser.me/api/portraits/women/44.jpg',
      stars: 5,
      date: 'Oct 15, 2025',
      title: 'Seamless and Perfect',
      content: 'TableEase made our anniversary reservation seamless. The restaurant was perfectly prepared for our arrival, and the special requests we added through the app were executed flawlessly. Highly recommended for special occasions!'
    },
    {
      id: 2,
      name: 'James Wilson',
      role: 'Tech Executive',
      image: 'https://randomuser.me/api/portraits/men/32.jpg',
      stars: 5,
      date: 'Oct 10, 2025',
      title: 'The best way to find new spots',
      content: 'The user interface is so clean and easy to use. I travel frequently for work and relying on TableEase to find top-rated local restaurants has never failed me. The instant confirmation feature is a lifesaver.'
    },
    {
      id: 3,
      name: 'Elena Rodriguez',
      role: 'Marketing Director',
      image: 'https://randomuser.me/api/portraits/women/68.jpg',
      stars: 4,
      date: 'Sep 28, 2025',
      title: 'Great app, saves time',
      content: 'No more waiting on hold for a table. TableEase is a game changer for busy weekend nights. I knocked off one star because I wish they had more casual dining options, but for fine dining, it is unbeatable.'
    },
    {
      id: 4,
      name: 'Michael Chang',
      role: 'Food Blogger',
      image: 'https://randomuser.me/api/portraits/men/46.jpg',
      stars: 5,
      date: 'Sep 15, 2025',
      title: 'Unbelievably convenient',
      content: 'As someone who dines out 4-5 times a week, I can say this is the best reservation app on the market. The loyalty points program is fantastic and the recommendations are always spot on.'
    },
    {
      id: 5,
      name: 'Jessica Taylor',
      role: 'Event Planner',
      image: 'https://randomuser.me/api/portraits/women/22.jpg',
      stars: 5,
      date: 'Aug 30, 2025',
      title: 'Incredible group booking experience',
      content: 'Booking for large groups is usually a nightmare, but TableEase makes it so simple. The ability to coordinate with the restaurant directly through the app is a huge plus.'
    },
    {
      id: 6,
      name: 'David Smith',
      role: 'Local Guide',
      image: 'https://randomuser.me/api/portraits/men/15.jpg',
      stars: 4,
      date: 'Aug 12, 2025',
      title: 'Very reliable',
      content: 'Solid app. Sometimes the map view can be a bit glitchy on older phones, but the core reservation system is incredibly robust and reliable.'
    }
  ];

  const [visibleReviews, setVisibleReviews] = useState(3);

  const handleLoadMore = () => {
    setVisibleReviews(prev => prev + 3);
  };

  return (
    <div className="review-list-section">
      <div className="review-list-header">
        <h2>Recent Reviews</h2>
        <div className="filter-sort">
          <select defaultValue="recent">
            <option value="recent">Most Recent</option>
            <option value="highest">Highest Rated</option>
            <option value="lowest">Lowest Rated</option>
          </select>
        </div>
      </div>

      <div className="review-items-container">
        {allReviews.slice(0, visibleReviews).map(review => (
          <div key={review.id} className="review-item-card">
            <div className="review-item-header">
              <div className="reviewer-profile">
                <img src={review.image} alt={review.name} />
                <div className="reviewer-info">
                  <h4>{review.name}</h4>
                  <span>{review.role} • {review.date}</span>
                </div>
              </div>
              <div className="review-item-stars">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} width="16" height="16" viewBox="0 0 24 24" fill={i < review.stars ? "#FF6B35" : "#E5E5E5"} stroke={i < review.stars ? "#FF6B35" : "#E5E5E5"}>
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                  </svg>
                ))}
              </div>
            </div>
            <div className="review-item-body">
              <h3 className="review-title">"{review.title}"</h3>
              <p className="review-content">{review.content}</p>
            </div>
            <div className="review-item-actions">
              <button className="btn-helpful">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3zM7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3"></path>
                </svg>
                Helpful
              </button>
            </div>
          </div>
        ))}
      </div>

      {visibleReviews < allReviews.length && (
        <div className="load-more-container">
          <button className="btn-load-more" onClick={handleLoadMore}>
            Load More Reviews
          </button>
        </div>
      )}
    </div>
  );
};

export default ReviewList;
