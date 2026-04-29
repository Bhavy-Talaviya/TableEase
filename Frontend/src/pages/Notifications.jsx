import React, { useState, useEffect } from 'react';

const Notifications = () => {
  const [notifications, setNotifications] = useState([]);

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem('notifications') || '[]');
    setNotifications(saved);
  }, []);

  const handleClearAll = () => {
    localStorage.removeItem('notifications');
    setNotifications([]);
  };

  return (
    <div className="dashboard-page">
      <div className="dashboard-header" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '30px' }}>
        <h1 style={{ margin: 0 }}>My Notifications</h1>
        {notifications.length > 0 && (
          <button 
            onClick={handleClearAll}
            className="btn-clear-all"
            style={{
              padding: '10px 20px',
              background: '#FFF0F0',
              color: '#FF4D4D',
              border: '1px solid #FFDADA',
              borderRadius: '10px',
              fontWeight: '700',
              cursor: 'pointer',
              transition: 'all 0.2s'
            }}
            onMouseOver={(e) => e.target.style.background = '#FFE0E0'}
            onMouseOut={(e) => e.target.style.background = '#FFF0F0'}
          >
            Clear All
          </button>
        )}
      </div>

      <div className="notifications-container">
        {notifications.length === 0 ? (
          <div className="no-notifications" style={{ textAlign: 'center', padding: '60px', background: 'white', borderRadius: '24px', boxShadow: '0 4px 20px rgba(0,0,0,0.05)' }}>
            <div style={{ fontSize: '48px', marginBottom: '20px' }}>🔔</div>
            <h3 style={{ color: '#1A1A1A', marginBottom: '10px' }}>All caught up!</h3>
            <p style={{ color: '#999', fontSize: '16px' }}>No new notifications. Your fresh start begins here.</p>
          </div>
        ) : (
          notifications.map(notif => (
            <div key={notif.id} className="notification-card">
              <div className="notification-header">
                <div className="notification-title-group">
                  <h3 style={{ color: 'var(--primary)', marginBottom: '8px' }}>{notif.restaurantName}</h3>
                  <h3>{notif.title}</h3>
                  <span className="notification-time">Received on {notif.date}</span>
                </div>
                <span className="status-badge ready">{notif.status}</span>
              </div>

              <div className="notification-body">
                <p>{notif.message}</p>
              </div>

              <div className="notification-details">
                <div className="detail-item">
                  <span className="detail-label">Booking Date</span>
                  <span className="detail-value">{notif.bookingDate}</span>
                </div>
                <div className="detail-item">
                  <span className="detail-label">Reservation Time</span>
                  <span className="detail-value">{notif.time}</span>
                </div>
                <div className="detail-item">
                  <span className="detail-label">Guests</span>
                  <span className="detail-value">{notif.details.guests} People</span>
                </div>
                <div className="detail-item">
                  <span className="detail-label">Table Type</span>
                  <span className="detail-value">{notif.details.table}</span>
                </div>
              </div>

              <div className="notification-footer">
                <div className="ready-timer">
                  <span className="timer-icon">🕒</span>
                  <span>Table will be ready at {notif.time}</span>
                </div>
                <button 
                  className="btn-view-details" 
                  style={{ background: 'transparent', color: 'var(--primary)', fontWeight: '700', fontSize: '14px', cursor: 'pointer' }}
                  onClick={() => alert("Reservation ID: " + notif.id + "\nRestaurant: " + notif.restaurantName)}
                >
                  View Details
                </button>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Notifications;
