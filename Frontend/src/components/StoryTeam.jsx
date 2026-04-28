import React from 'react';
import team1 from '../assets/team1.png';
import team2 from '../assets/team2.png';
import team3 from '../assets/team3.png';

const StoryTeam = () => {
  const team = [
    {
      name: 'Julian Thorne',
      role: 'Founder & CEO',
      image: team1
    },
    {
      name: 'Elena Rodriguez',
      role: 'Executive Chef',
      image: team2
    },
    {
      name: 'Marcus Chen',
      role: 'Restaurant Manager',
      image: team3
    }
  ];

  return (
    <section className="story-team">
      <div className="team-header">
        <span className="badge">Our People</span>
        <h2>The Faces Behind the Flavor</h2>
        <div className="header-line"></div>
        <p>A passionate team dedicated to redefining your dining experience.</p>
      </div>
      
      <div className="team-grid">
        {team.map((member, index) => (
          <div key={index} className="team-card">
            <div className="team-image">
              <img src={member.image} alt={member.name} />
              <div className="image-overlay"></div>
            </div>
            <div className="team-info">
              <h3>{member.name}</h3>
              <p className="role">{member.role}</p>
            </div>
          </div>
        ))}
        
        <div className="team-card join-card">
          <div className="join-content">
            <div className="plus-icon">+</div>
            <h3>Join Our Team</h3>
            <p>We're always looking for culinary talent.</p>
            <button className="btn-apply">View Careers</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StoryTeam;
