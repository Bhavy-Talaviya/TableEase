import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ReviewHero from '../components/ReviewHero';
import ReviewStats from '../components/ReviewStats';
import ReviewList from '../components/ReviewList';

import SEO from '../components/SEO';

const ReviewsPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="reviews-page">
      <SEO 
        title="Customer Reviews" 
        description="Read authentic dining experiences from our community. See what people are saying about their favorite restaurants on TableEase."
      />
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
