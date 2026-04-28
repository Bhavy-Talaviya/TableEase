import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ReviewHero from '../components/ReviewHero';
import ReviewStats from '../components/ReviewStats';
import ReviewList from '../components/ReviewList';

const ReviewsPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="reviews-page">
      <Navbar />
      <ReviewHero />
      <div className="reviews-content-wrapper">
        <ReviewStats />
        <ReviewList />
      </div>
      <Footer />
    </div>
  );
};

export default ReviewsPage;
