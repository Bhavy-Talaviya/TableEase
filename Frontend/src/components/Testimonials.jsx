import React from 'react';

const Testimonials = () => {
  const reviews = [
    {
      name: 'Sarah Miller',
      role: 'Food Critic',
      image: 'https://randomuser.me/api/portraits/women/44.jpg',
      stars: 5,
      quote: '"TableEase made our anniversary reservation seamless. The restaurant was perfectly prepared for our arrival."'
    },
    {
      name: 'James Wilson',
      role: 'Tech Executive',
      image: 'https://randomuser.me/api/portraits/men/32.jpg',
      stars: 5,
      quote: '"The best way to find new spots in the city. The user interface is so clean and easy to use."'
    },
    {
      name: 'Elena Rodriguez',
      role: 'Marketing Director',
      image: 'https://randomuser.me/api/portraits/women/68.jpg',
      stars: 5,
      quote: '"No more waiting on hold for a table. TableEase is a game changer for busy weekend nights."'
    }
  ];

  return (
    <section className="testimonials-section">
      <div className="section-header">
        <h2>Our Diners Speak</h2>
        <div className="underline"></div>
      </div>

      <div className="testimonials-grid">
        {reviews.map((review, index) => (
          <div key={index} className="testimonial-card">
            <div className="stars">
              {[...Array(review.stars)].map((_, i) => (
                <svg key={i} width="18" height="18" viewBox="0 0 24 24" fill="#FF6B35" stroke="#FF6B35">
                  <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                </svg>
              ))}
            </div>
            <p className="testimonial-quote">{review.quote}</p>
            <div className="testimonial-user">
              <img src={review.image} alt={review.name} />
              <div className="user-info">
                <h4>{review.name}</h4>
                <span>{review.role}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
