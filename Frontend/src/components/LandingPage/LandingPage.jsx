import React from 'react';
import Navbar from './Navbar';
import Hero from './Hero';
import HowItWorks from './HowItWorks';
import FeaturedDishes from './FeaturedDishes';
import Stats from './Stats';
import Testimonials from './Testimonials';
import CTA from './CTA';
import Footer from './Footer';

const LandingPage = () => {
  return (
    <div className="landing-page">
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
