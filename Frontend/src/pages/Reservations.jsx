import React from 'react';
import BookingWizard from '../components/BookingWizard';

const Reservations = () => {
  return (
    <div className="dashboard-page" style={{ padding: '20px' }}>
      <div className="dashboard-header" style={{ textAlign: 'center', marginBottom: '20px' }}>
        <h1>Book a Table</h1>
        <p>Complete your reservation in five simple steps.</p>
      </div>
      <BookingWizard />
    </div>
  );
};

export default Reservations;
