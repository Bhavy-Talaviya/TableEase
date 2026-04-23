import React from 'react';

const Stats = () => {
  const stats = [
    { number: '500+', label: 'RESTAURANTS' },
    { number: '12k+', label: 'RESERVATIONS' },
    { number: '25', label: 'CITIES' },
    { number: '98%', label: 'HAPPY DINERS' }
  ];

  return (
    <section className="stats-section">
      <div className="stats-container">
        {stats.map((stat, index) => (
          <div key={index} className="stat-item">
            <div className="stat-number">{stat.number}</div>
            <div className="stat-label">{stat.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Stats;
