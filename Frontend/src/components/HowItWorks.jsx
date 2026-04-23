import React from 'react';

const HowItWorks = () => {
  const steps = [
    {
      number: '01',
      title: 'Choose Restaurant',
      description: 'Browse through our curated list of top-rated local gems and fine dining establishments.'
    },
    {
      number: '02',
      title: 'Select Time',
      description: 'Pick your preferred date and time. We handle the real-time availability for you.'
    },
    {
      number: '03',
      title: 'Instant Confirmation',
      description: 'Receive an instant booking confirmation and prepare for your culinary journey.'
    }
  ];

  return (
    <section className="how-it-works">
      <div className="section-header">
        <h2>How it Works</h2>
        <div className="underline"></div>
      </div>
      
      <div className="steps-grid">
        {steps.map((step, index) => (
          <div key={index} className="step-card">
            <div className="step-number">
              <span>{step.number}</span>
            </div>
            <h3>{step.title}</h3>
            <p>{step.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HowItWorks;
