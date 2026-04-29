import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const CustomerDashboard = () => {
  const [visibleCount, setVisibleCount] = useState(9);
  const navigate = useNavigate();

  const handleBookClick = (restaurantName) => {
    navigate('/dashboard/reservations', { state: { restaurantName } });
  };

  const restaurants = [
    {
      id: 1,
      name: 'The Rustic Spoons',
      image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      description: 'Experience fine dining with a rustic charm. Farm-to-table ingredients prepared with passion.',
      rating: 4.8,
      cuisine: 'Italian'
    },
    {
      id: 2,
      name: 'Ocean Breeze Grill',
      image: 'https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      description: 'Fresh seafood caught daily, served with breathtaking ocean views and premium cocktails.',
      rating: 4.6,
      cuisine: 'Seafood'
    },
    {
      id: 3,
      name: 'Spice Route',
      image: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      description: 'A culinary journey through authentic Asian spices and modern fusion dishes.',
      rating: 4.9,
      cuisine: 'Asian Fusion'
    },
    {
      id: 4,
      name: 'La Petit Bistro',
      image: 'https://images.unsplash.com/photo-1551632436-cbf8dd35adfa?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      description: 'Intimate French dining experience featuring classic recipes and a world-class wine list.',
      rating: 4.7,
      cuisine: 'French'
    },
    {
      id: 5,
      name: 'Tokyo Nights',
      image: 'https://images.unsplash.com/photo-1579871494447-9811cf80d66c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      description: 'Experience the finest sushi and modern Japanese delicacies in an immersive neon-lit atmosphere.',
      rating: 4.8,
      cuisine: 'Japanese'
    },
    {
      id: 6,
      name: 'El Camino Steakhouse',
      image: 'https://images.unsplash.com/photo-1594041680534-e8c8cdebd659?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      description: 'Premium cuts of dry-aged beef paired with fine wines and artisanal sides in a classic setting.',
      rating: 4.7,
      cuisine: 'Steakhouse'
    },
    {
      id: 7,
      name: 'Vegan Delights',
      image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      description: 'Plant-based gastronomy redefining healthy eating without compromising on flavor or presentation.',
      rating: 4.9,
      cuisine: 'Vegan'
    },
    {
      id: 8,
      name: 'Tuscan Villa',
      image: 'https://images.unsplash.com/photo-1537047902294-62a40c20a6ae?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      description: 'Authentic wood-fired pizzas and handmade pastas crafted with love in a warm, family-friendly environment.',
      rating: 4.5,
      cuisine: 'Italian'
    },
    {
      id: 9,
      name: 'The Golden Wok',
      image: 'https://images.unsplash.com/photo-1563245372-f21724e3856d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      description: 'Authentic Chinese cuisine featuring hand-pulled noodles and dim sum.',
      rating: 4.6,
      cuisine: 'Chinese'
    },
    {
      id: 10,
      name: 'Bavarian Brewhaus',
      image: 'https://images.unsplash.com/photo-1578474846511-04ba529f0b88?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      description: 'Traditional German sausages, pretzels, and an extensive selection of craft beers.',
      rating: 4.5,
      cuisine: 'German'
    },
    {
      id: 11,
      name: 'Mumbai Spices',
      image: 'https://images.unsplash.com/photo-1585937421612-70a008356fbe?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      description: 'Rich curries, tandoori specialties, and fresh naan straight from the oven.',
      rating: 4.7,
      cuisine: 'Indian'
    },
    {
      id: 12,
      name: 'Taco Fiesta',
      image: 'https://images.unsplash.com/photo-1551504734-5ee1c4a1479b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      description: 'Vibrant Mexican street food with zesty margaritas in a festive atmosphere.',
      rating: 4.8,
      cuisine: 'Mexican'
    },
    {
      id: 13,
      name: 'Athens Taverna',
      image: 'https://images.unsplash.com/photo-1515003197210-e0cd71810b5f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      description: 'Classic Greek Mediterranean dishes including moussaka and fresh souvlaki.',
      rating: 4.6,
      cuisine: 'Greek'
    },
    {
      id: 14,
      name: 'Seoul BBQ',
      image: 'https://images.unsplash.com/photo-1580651315530-69c8e0026377?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      description: 'Interactive Korean barbecue experience with premium marinated meats and banchan.',
      rating: 4.9,
      cuisine: 'Korean'
    },
    {
      id: 15,
      name: 'The French Quarter',
      image: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      description: 'Creole and Cajun inspired dishes bringing the soul of New Orleans to your table.',
      rating: 4.7,
      cuisine: 'Cajun'
    }
  ];

  return (
    <div className="dashboard-page">
      <div className="dashboard-section-title">
        <h2>Featured Restaurants</h2>
        <button className="btn-near-me">
          <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
            <circle cx="12" cy="10" r="3"></circle>
          </svg>
          Near Me Restaurants
        </button>
      </div>

      <div className="restaurant-grid">
        {restaurants.slice(0, visibleCount).map(restaurant => (
          <div key={restaurant.id} className="restaurant-card">
            <div className="restaurant-image">
              <img src={restaurant.image} alt={restaurant.name} />
              <div className="restaurant-badge">{restaurant.cuisine}</div>
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
