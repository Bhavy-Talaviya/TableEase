import React from 'react';
import ourStoryImg from '../assets/our_story.png';

const StoryHero = () => {
  return (
    <section className="story-hero">
      <div className="story-image-container">
        <img src={ourStoryImg} alt="Our Story" />
      </div>
      <div className="story-content">
        <div className="content-wrapper">
          <h1 className="story-title">Our Story</h1>
          <div className="title-underline"></div>
          
          <div className="story-text">
            <p className="highlight">
              TableEase was born from a simple belief: that the most
              memorable moments happen around a table, and getting
              there should be effortless.
            </p>
            
            <p>
              Since our inception, we've dedicated ourselves to bridging
              the gap between world-class culinary destinations and the
              diners who love them. We don't just book tables; we curate
              the beginning of your next great story. From intimate
              anniversaries to celebratory banquets, we ensure your
              seat is waiting.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StoryHero;
