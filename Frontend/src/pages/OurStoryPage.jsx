import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import StoryHero from '../components/StoryHero';
import StoryValues from '../components/StoryValues';
import StoryTeam from '../components/StoryTeam';
import StoryPhilosophy from '../components/StoryPhilosophy';
import StoryContact from '../components/StoryContact';

const OurStoryPage = () => {
  return (
    <div className="page-container">
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
