import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const CustomerDashboard = () => {
  const [visibleCount, setVisibleCount] = useState(9);
  const [restaurants, setRestaurants] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    // Load restaurants from localStorage or use defaults
    const saved = JSON.parse(localStorage.getItem('restaurants') || '[]');
    if (saved.length === 0) {
      const defaultRestaurants = [
        { id: 1, name: 'The Rustic Spoons', cuisine: 'Italian', rating: 4.8, image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', description: 'Fine dining with rustic charm.', waitTime: '15 mins' },
        { id: 2, name: 'Ocean Breeze Grill', cuisine: 'Seafood', rating: 4.6, image: 'https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', description: 'Fresh seafood with ocean views.', waitTime: '20 mins' },
        { id: 3, name: 'Spice Route', cuisine: 'Asian Fusion', rating: 4.9, image: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', description: 'Authentic Asian fusion dishes.', waitTime: '10 mins' }
      ];
      setRestaurants(defaultRestaurants);
      localStorage.setItem('restaurants', JSON.stringify(defaultRestaurants));
    } else {
      setRestaurants(saved);
    }
  }, []);

  const handleBookClick = (restaurantName) => {
    navigate('/dashboard/reservations', { state: { restaurantName } });
  };

  return (
    <div className="dashboard-page">
      <div style={{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexWrap: 'nowrap',
        gap: '10px',
        marginBottom: '1.5rem',
      }}>
        <h2 style={{
          fontSize: '1.1rem',
          fontWeight: '700',
          color: '#212529',
          margin: 0,
          whiteSpace: 'nowrap',
          flexShrink: 1,
          minWidth: 0,
        }}>Featured Restaurants</h2>
        <button className="btn-near-me" style={{ flexShrink: 0, whiteSpace: 'nowrap' }}>
          <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
            <circle cx="12" cy="10" r="3"></circle>
          </svg>
          Near Me
        </button>
      </div>

      <div className="restaurant-grid">
        {restaurants.slice(0, visibleCount).map(restaurant => (
          <div key={restaurant.id} className="restaurant-card">
            <div className="restaurant-image">
              <img src={restaurant.image} alt={restaurant.name} />
              <div className="restaurant-badge">{restaurant.cuisine}</div>
              <div className="wait-time-badge" style={{ position: 'absolute', top: '10px', right: '10px', background: 'rgba(0,0,0,0.6)', color: 'white', padding: '4px 10px', borderRadius: '15px', fontSize: '11px', fontWeight: '700' }}>
                ⏳ {restaurant.waitTime || '15 mins'} wait
              </div>
            </div>
            <div className="restaurant-info">
              <div className="restaurant-title-row">
                <h3>{restaurant.name}</h3>
                <div className="restaurant-rating">
                  <svg viewBox="0 0 24 24" fill="#FFC107" stroke="#FFC107" strokeWidth="2">
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                  </svg>
                  <span>{restaurant.rating}</span>
                </div>
              </div>
              <p className="restaurant-desc">{restaurant.description}</p>
              <button className="book-btn" onClick={() => handleBookClick(restaurant.name)}>Reserve a Table</button>
            </div>
          </div>
        ))}
      </div>

      {visibleCount < restaurants.length && (
        <div className="load-more-container">
          <button className="load-more-btn" onClick={() => setVisibleCount(prev => prev + 3)}>
            Load More Restaurants
          </button>
        </div>
      )}
    </div>
  );
};

export default CustomerDashboard;
