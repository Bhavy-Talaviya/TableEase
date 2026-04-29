import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import HowItWorks from '../components/HowItWorks';
import FeaturedDishes from '../components/FeaturedDishes';
import Stats from '../components/Stats';
import Testimonials from '../components/Testimonials';
import CTA from '../components/CTA';
import Footer from '../components/Footer';

import SEO from '../components/SEO';

const LandingPage = () => {
  return (
    <div className="landing-page">
      <SEO 
        title="Seamless Restaurant Reservations" 
        description="Discover and book the best restaurants in your city with TableEase. Real-time availability and premium dining experiences."
      />
      <Navbar />
      <main>
        <Hero />
        <HowItWorks />
        <FeaturedDishes />
        <Stats />
        <Testimonials />
        <CTA />
      </main>
      <Footer />
    </div>
  );
};

export default LandingPage;
