import React from 'react';
import philosophyBg from '../assets/philosophy_bg.png';

const StoryPhilosophy = () => {
  return (
    <section className="story-philosophy" style={{ backgroundImage: `linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url(${philosophyBg})` }}>
      <div className="philosophy-content">
        <span className="badge">Our Vision</span>
        <h2>"Exceptional dining is more than just food; it's the rhythm of the room, the warmth of the service, and the stories shared over every plate."</h2>
        <div className="philosophy-author">
          <div className="line"></div>
          <p>The TableEase Philosophy</p>
        </div>
      </div>
    </section>
  );
};

export default StoryPhilosophy;
