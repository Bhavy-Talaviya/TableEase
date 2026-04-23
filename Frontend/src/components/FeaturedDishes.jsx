import React from 'react';
import dish1 from '../assets/dish1.png';
import dish2 from '../assets/dish2.png';
import dish3 from '../assets/dish3.png';

const FeaturedDishes = () => {
  const dishes = [
    {
      image: dish1,
      category: 'ITALIAN',
      price: '$24',
      title: 'Tuscan Harvest Bowl',
      description: 'Roasted seasonal vegetables, quinoa, and our signature balsamic reduction.'
    },
    {
      image: dish2,
      category: 'PREMIUM',
      price: '$48',
      title: 'Midnight Wagyu Ribeye',
      description: 'Dry-aged for 45 days, served with truffle mash and seasonal asparagus.'
    },
    {
      image: dish3,
      category: 'WOOD-FIRED',
      price: '$19',
      title: 'Heritage Margherita',
      description: 'San Marzano tomatoes, buffalo mozzarella, and fresh garden basil.'
    }
  ];

  return (
    <section className="featured-dishes">
      <div className="section-top">
        <div className="title-group">
          <h2>Featured Dishes</h2>
          <p>Taste the most popular recipes from our partners</p>
        </div>
        <a href="#menu" className="view-menu">
          View Full Menu 
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="5" y1="12" x2="19" y2="12" />
            <polyline points="12 5 19 12 12 19" />
          </svg>
        </a>
      </div>

      <div className="dishes-grid">
        {dishes.map((dish, index) => (
          <div key={index} className="dish-card">
            <div className="dish-image">
              <img src={dish.image} alt={dish.title} />
              <div className="category-badge">{dish.category}</div>
              <div className="price-badge">{dish.price}</div>
            </div>
            <div className="dish-info">
              <h3>{dish.title}</h3>
              <p>{dish.description}</p>
              <button className="btn-book-dish">Book a Table</button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeaturedDishes;
