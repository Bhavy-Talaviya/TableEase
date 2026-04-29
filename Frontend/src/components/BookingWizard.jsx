import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

const BookingProgress = ({ currentStep }) => {
  const steps = ['Date & Time', 'Table', 'Details', 'Review', 'Payment'];
  return (
    <div className="bw-progress">
      {steps.map((label, index) => {
        const stepNum = index + 1;
        const isActive = stepNum === currentStep;
        const isPast = stepNum < currentStep;
        return (
          <div key={label} className={`bw-step ${isActive ? 'active' : ''} ${isPast ? 'past' : ''}`}>
            <div className="bw-circle">{isPast ? '✓' : stepNum}</div>
            <div className="bw-label">{label}</div>
          </div>
        );
      })}
      <div className="bw-line" style={{ width: `${((currentStep - 1) / 4) * 100}%` }}></div>
      <div className="bw-line-bg"></div>
    </div>
  );
};

const BookingStep1 = ({ data, updateData, nextStep, restaurantName }) => {
  const days = ['S', 'M', 'T', 'W', 'T', 'F', 'S'];
  const dates = Array.from({ length: 31 }, (_, i) => i + 1);
  const times = ["17:00", "17:30", "18:00", "18:30", "19:00", "19:30", "20:00", "20:30", "21:00"];

  return (
    <div>
      {restaurantName && <h2 style={{ textAlign: 'center', marginBottom: '20px', color: 'var(--primary)' }}>Booking for: {restaurantName}</h2>}
      <div className="bw-grid">
        <div className="bw-card">
          <h3 className="bw-card-title">Select Date</h3>
          <div className="bw-cal-grid">
            {days.map((d, i) => <div key={i} className="bw-cal-day">{d}</div>)}
            {dates.map(date => (
              <div
                key={date}
                className={`bw-cal-date ${data.date === date ? 'selected' : ''}`}
                onClick={() => updateData({ date })}
              >
                {date}
              </div>
            ))}
          </div>
        </div>

        <div className="bw-card">
          <h3 className="bw-card-title">Available Time</h3>
          <div className="bw-time-grid">
            {times.map(time => (
              <div
                key={time}
                className={`bw-time-slot ${data.time === time ? 'selected' : ''}`}
                onClick={() => updateData({ time })}
              >
                {time}
              </div>
            ))}
          </div>

          <h3 className="bw-card-title" style={{ marginTop: '30px' }}>Party Size</h3>
          <div className="bw-guest-ctrl">
            <button className="bw-guest-btn" onClick={() => updateData({ guests: Math.max(1, data.guests - 1) })}>-</button>
            <div className="bw-guest-count">
              <span>{data.guests}</span>
              <small>Guests</small>
            </div>
            <button className="bw-guest-btn" onClick={() => updateData({ guests: data.guests + 1 })}>+</button>
          </div>
        </div>
      </div>

      <div className="bw-actions">
        <button className="bw-btn next" onClick={nextStep} disabled={!data.date || !data.time}>
          Next: Choose Table &rarr;
        </button>
      </div>
    </div>
  );
};

const BookingStep2 = ({ data, updateData, nextStep, prevStep }) => {
  const tables = [
    { id: 'standard', name: 'Standard Table', desc: 'Comfortable seating in our main dining area.' },
    { id: 'window', name: 'Window Seat', desc: 'Enjoy a beautiful view with your meal.' },
    { id: 'booth', name: 'Cozy Booth', desc: 'Perfect for a more private dining experience.' },
    { id: 'outdoor', name: 'Outdoor Patio', desc: 'Dine al fresco under the stars.' }
  ];

  return (
    <div>
      <h3 className="bw-card-title" style={{ textAlign: 'center', marginBottom: '30px' }}>Where would you like to sit?</h3>
      <div className="bw-table-grid">
        {tables.map(table => (
          <div
            key={table.id}
            className={`bw-table-card ${data.tableType === table.name ? 'selected' : ''}`}
            onClick={() => updateData({ tableType: table.name })}
          >
            <h4>{table.name}</h4>
            <p>{table.desc}</p>
          </div>
        ))}
      </div>
      <div className="bw-actions">
        <button className="bw-btn back" onClick={prevStep}>&larr; Back</button>
        <button className="bw-btn next" onClick={nextStep} disabled={!data.tableType}>
          Next: Your Details &rarr;
        </button>
      </div>
    </div>
  );
};

const BookingStep3 = ({ data, updateData, nextStep, prevStep }) => {
  const handleChange = (e) => {
    updateData({ [e.target.name]: e.target.value });
  };

  return (
    <div>
      <h3 className="bw-card-title">Reservation Details</h3>
      <div className="bw-form">
        <div className="bw-input-group">
          <label>Full Name</label>
          <input type="text" name="name" value={data.name} onChange={handleChange} placeholder="John Doe" />
        </div>
        <div className="bw-input-group">
          <label>Phone Number</label>
          <input type="tel" name="phone" value={data.phone} onChange={handleChange} placeholder="+1 (555) 000-0000" />
        </div>
        <div className="bw-input-group full">
          <label>Email Address</label>
          <input type="email" name="email" value={data.email} onChange={handleChange} placeholder="john@example.com" />
        </div>
        <div className="bw-input-group full">
          <label>Special Requests</label>
          <textarea name="requests" value={data.requests} onChange={handleChange} placeholder="Anniversary, dietary restrictions, etc." rows="3"></textarea>
        </div>
      </div>
      <div className="bw-actions">
        <button className="bw-btn back" onClick={prevStep}>&larr; Back</button>
        <button className="bw-btn next" onClick={nextStep} disabled={!data.name || !data.phone || !data.email}>
          Review Booking &rarr;
        </button>
      </div>
    </div>
  );
};

const BookingStep4 = ({ data, prevStep, nextStep, restaurantName }) => {
  return (
    <div>
      <div className="bw-summary">
        <h3 className="bw-card-title" style={{ color: 'white' }}>Review Your Reservation</h3>
        {restaurantName && (
          <div className="bw-sum-row">
            <span className="bw-sum-label">Restaurant</span>
            <span className="bw-sum-val">{restaurantName}</span>
          </div>
        )}
        <div className="bw-sum-row">
          <span className="bw-sum-label">Date & Time</span>
          <span className="bw-sum-val">Oct {data.date}, 2026 at {data.time}</span>
        </div>
        <div className="bw-sum-row">
          <span className="bw-sum-label">Party Size</span>
          <span className="bw-sum-val">{data.guests} Guests</span>
        </div>
        <div className="bw-sum-row">
          <span className="bw-sum-label">Table Preference</span>
          <span className="bw-sum-val">{data.tableType}</span>
        </div>
        <div className="bw-sum-row">
          <span className="bw-sum-label">Guest Details</span>
          <span className="bw-sum-val" style={{ textAlign: 'right' }}>{data.name}<br />{data.phone}</span>
        </div>
      </div>
      <div className="bw-actions">
        <button className="bw-btn back" onClick={prevStep}>&larr; Back</button>
        <button className="bw-btn next" onClick={nextStep} style={{ background: '#28a745' }}>
          Continue to Payment &rarr;
        </button>
      </div>
    </div>
  );
};

const BookingStep5 = ({ data, prevStep, restaurantName }) => {
  const navigate = useNavigate();
  const reservationFee = 20; // $20 per guest
  const totalAmount = data.guests * reservationFee;

  const handleFinish = () => {
    // Create notification data
    const notification = {
      id: Date.now(),
      title: "Reservation Confirmed!",
      restaurantName: restaurantName || "TableEase Restaurant",
      message: `Your booking for ${data.guests} at ${restaurantName || "our restaurant"} is confirmed for Oct ${data.date} at ${data.time}.`,
      date: new Date().toLocaleDateString(),
      time: data.time,
      bookingDate: `Oct ${data.date}, 2026`,
      details: {
        guests: data.guests,
        table: data.tableType,
        name: data.name
      },
      status: "Ready soon"
    };

    // Save to localStorage
    const existingNotifications = JSON.parse(localStorage.getItem('notifications') || '[]');
    localStorage.setItem('notifications', JSON.stringify([notification, ...existingNotifications]));

    alert("Payment successful! Your booking is confirmed. Check your notifications for details.");
    navigate("/dashboard/notifications");
  };

  return (
    <div className="bw-payment-container">
      <div className="bw-payment-card">
        <div className="bw-payment-header">
          <h3 className="bw-card-title">Secure Payment</h3>
          <p>Scan the QR code below to complete your reservation fee.</p>
        </div>

        <div className="bw-payment-body">
          <div className="bw-amount-box">
            <span className="bw-amount-label">Amount Due</span>
            <h2 className="bw-amount-total">${totalAmount.toFixed(2)}</h2>
            <p className="bw-amount-subtext">Includes reservation fee for {data.guests} guests</p>
          </div>

          <div className="bw-qr-container">
            <div className="bw-qr-frame">
              <img src="/payment_qr.png" alt="Payment QR Code" className="bw-qr-image" />
              <div className="bw-qr-overlay">
                <span className="bw-qr-scan-line"></span>
              </div>
            </div>
            <p className="bw-qr-help">Open your banking app to scan</p>
          </div>
        </div>

        <div className="bw-payment-footer">
          <div className="bw-security-badge">
            <span className="security-icon">🔒</span>
            <span>Secure 256-bit SSL encrypted payment</span>
          </div>
        </div>
      </div>

      <div className="bw-actions">
        <button className="bw-btn back" onClick={prevStep}>&larr; Back</button>
        <button className="bw-btn next" onClick={handleFinish} style={{ background: '#28a745' }}>
          I have paid ✓
        </button>
      </div>
    </div>
  );
};

const BookingWizard = () => {
  const [step, setStep] = useState(1);
  const location = useLocation();
  const restaurantName = location.state?.restaurantName || "";

  const [bookingData, setBookingData] = useState({
    date: 15,
    time: '19:00',
    guests: 2,
    tableType: '',
    name: '',
    email: '',
    phone: '',
    requests: ''
  });

  const updateData = (newData) => setBookingData(prev => ({ ...prev, ...newData }));
  const nextStep = () => setStep(prev => Math.min(prev + 1, 5));
  const prevStep = () => setStep(prev => Math.max(prev - 1, 1));

  return (
    <div className="bw-container">
      <BookingProgress currentStep={step} />

      {step === 1 && <BookingStep1 data={bookingData} updateData={updateData} nextStep={nextStep} restaurantName={restaurantName} />}
      {step === 2 && <BookingStep2 data={bookingData} updateData={updateData} nextStep={nextStep} prevStep={prevStep} />}
      {step === 3 && <BookingStep3 data={bookingData} updateData={updateData} nextStep={nextStep} prevStep={prevStep} />}
      {step === 4 && <BookingStep4 data={bookingData} prevStep={prevStep} nextStep={nextStep} restaurantName={restaurantName} />}
      {step === 5 && <BookingStep5 data={bookingData} prevStep={prevStep} restaurantName={restaurantName} />}
    </div>
  );
};

export default BookingWizard;
