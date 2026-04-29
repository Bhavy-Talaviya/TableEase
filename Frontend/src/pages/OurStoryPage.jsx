import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import StoryHero from '../components/StoryHero';
import StoryValues from '../components/StoryValues';
import StoryTeam from '../components/StoryTeam';
import StoryPhilosophy from '../components/StoryPhilosophy';
import StoryContact from '../components/StoryContact';

import SEO from '../components/SEO';

const OurStoryPage = () => {
  return (
    <div className="page-container">
      <SEO 
        title="Our Story" 
        description="Learn about TableEase's mission to revolutionize the dining experience. Our philosophy, our values, and the team behind your favorite reservation platform."
      />
      <Navbar />
      <main className="our-story-page">
        <StoryHero />
        <StoryValues />
        <StoryTeam />
        <StoryPhilosophy />
        <StoryContact />
      </main>
      <Footer />
    </div>
  );
};

export default OurStoryPage;
