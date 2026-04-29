import React, { useState, useEffect } from 'react';

const ManagerDashboard = () => {
  const [restaurants, setRestaurants] = useState([]);
  const [reservations, setReservations] = useState([]);
  const [newRestaurant, setNewRestaurant] = useState({ name: '', cuisine: '', description: '', image: '', rating: 5.0 });
  const [showAddForm, setShowAddForm] = useState(false);

  const fetchData = () => {
    const savedRestaurants = JSON.parse(localStorage.getItem('restaurants') || '[]');
    const savedReservations = JSON.parse(localStorage.getItem('notifications') || '[]');
    setRestaurants(savedRestaurants);
    setReservations(savedReservations);
  };

  useEffect(() => {
    fetchData();
    const interval = setInterval(fetchData, 2000);
    window.addEventListener('storage', fetchData);
    return () => {
      clearInterval(interval);
      window.removeEventListener('storage', fetchData);
    };
  }, []);

  const handleAddRestaurant = (e) => {
    e.preventDefault();
    const updated = [...restaurants, { ...newRestaurant, id: Date.now() }];
    setRestaurants(updated);
    localStorage.setItem('restaurants', JSON.stringify(updated));
    setNewRestaurant({ name: '', cuisine: '', description: '', image: '', rating: 5.0 });
    setShowAddForm(false);
    alert("Restaurant added successfully!");
  };

  const updateReservationStatus = (id, newStatus) => {
    const updated = reservations.map(res =>
      res.id === id ? { ...res, status: newStatus } : res
    );
    setReservations(updated);
    localStorage.setItem('notifications', JSON.stringify(updated));
  };

  const deleteRestaurant = (id) => {
    const updated = restaurants.filter(r => r.id !== id);
    setRestaurants(updated);
    localStorage.setItem('restaurants', JSON.stringify(updated));
  };

  return (
    <div className="dashboard-page manager-dashboard">
      <div className="manager-header">
        <h1>Manager Control Center</h1>
        <button
          className="btn-add-restaurant"
          onClick={() => setShowAddForm(!showAddForm)}
        >
          {showAddForm ? '✕ Cancel' : '+ Add New Restaurant'}
        </button>
      </div>

      {showAddForm && (
        <div className="add-restaurant-form bw-card">
          <h3 style={{ marginBottom: '20px' }}>Restaurant Details</h3>
          <form onSubmit={handleAddRestaurant} className="add-restaurant-form-grid">
            <div className="bw-input-group">
              <label>Restaurant Name</label>
              <input
                type="text"
                required
                value={newRestaurant.name}
                onChange={(e) => setNewRestaurant({ ...newRestaurant, name: e.target.value })}
                placeholder="e.g. The Italian Garden"
              />
            </div>
            <div className="bw-input-group">
              <label>Cuisine Type</label>
              <input
                type="text"
                required
                value={newRestaurant.cuisine}
                onChange={(e) => setNewRestaurant({ ...newRestaurant, cuisine: e.target.value })}
                placeholder="e.g. Italian, Sushi, BBQ"
              />
            </div>
            <div className="bw-input-group">
              <label>Initial Rating (1-5)</label>
              <input
                type="number"
                step="0.1"
                min="1"
                max="5"
                required
                value={newRestaurant.rating}
                onChange={(e) => setNewRestaurant({ ...newRestaurant, rating: e.target.value })}
                placeholder="4.5"
              />
            </div>
            <div className="bw-input-group form-full-span">
              <label>Description</label>
              <textarea
                required
                value={newRestaurant.description}
                onChange={(e) => setNewRestaurant({ ...newRestaurant, description: e.target.value })}
                placeholder="Tell customers about your place..."
              ></textarea>
            </div>
            <div className="bw-input-group form-full-span">
              <label>Image URL</label>
              <input
                type="url"
                required
                value={newRestaurant.image}
                onChange={(e) => setNewRestaurant({ ...newRestaurant, image: e.target.value })}
                placeholder="https://images.unsplash.com/..."
              />
            </div>
            <button type="submit" className="bw-btn next form-full-span">Publish Restaurant</button>
          </form>
        </div>
      )}

      <div className="manager-grid">
        <div className="manager-section">
          <h3 style={{ marginBottom: '20px' }}>Live Reservations & Queue</h3>
          <div className="reservations-list" style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
            {reservations.length === 0 ? (
              <p style={{ color: '#999' }}>No active bookings yet.</p>
            ) : (
              reservations.map(res => (
                <div key={res.id} className="notification-card" style={{ padding: '20px' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '10px' }}>
                    <strong>{res.details.name}</strong>
                    <span className={`status-badge ${res.status === 'Table Ready' ? 'ready' : res.status === 'Dinner Complete' ? 'seated' : ''}`}
                      style={{
                        background: res.status === 'Table Ready' ? '#E6FFFA' : res.status === 'Dinner Complete' ? '#FEF2F2' : '#FFFBEB',
                        color: res.status === 'Table Ready' ? '#047481' : res.status === 'Dinner Complete' ? '#991B1B' : '#B45309'
                      }}>
                      {res.status}
                    </span>
                  </div>
                  <p style={{ fontSize: '14px', color: '#666' }}>{res.restaurantName} | {res.bookingDate} at {res.time}</p>
                  <p style={{ fontSize: '14px', color: '#666' }}>{res.details.guests} Guests | {res.details.table}</p>
                  <div style={{ marginTop: '15px', display: 'flex', gap: '10px' }}>
                    <button
                      onClick={() => updateReservationStatus(res.id, 'Table Ready')}
                      style={{ fontSize: '12px', padding: '6px 12px', background: '#E6FFFA', color: '#047481', borderRadius: '6px' }}
                    >
                      Mark as Ready
                    </button>
                    <button
                      onClick={() => updateReservationStatus(res.id, 'Seated')}
                      style={{ fontSize: '12px', padding: '6px 12px', background: '#F0F9FF', color: '#0369A1', borderRadius: '6px' }}
                    >
                      Seated
                    </button>
                    <button
                      onClick={() => updateReservationStatus(res.id, 'Dinner Complete')}
                      style={{ fontSize: '12px', padding: '6px 12px', background: '#FEF2F2', color: '#991B1B', borderRadius: '6px' }}
                    >
                      Dinner Complete
                    </button>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>

        <div className="manager-section">
          <h3 style={{ marginBottom: '20px' }}>My Restaurants</h3>
          <div className="restaurants-list" style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
            {restaurants.length === 0 ? (
              <p style={{ color: '#999' }}>No restaurants added yet.</p>
            ) : (
              restaurants.map(rest => (
                <div key={rest.id} className="bw-card" style={{ padding: '15px', display: 'flex', gap: '15px', alignItems: 'center' }}>
                  <img src={rest.image} alt={rest.name} style={{ width: '60px', height: '60px', borderRadius: '10px', objectFit: 'cover' }} />
                  <div style={{ flex: 1 }}>
                    <h4 style={{ margin: 0 }}>{rest.name}</h4>
                    <p style={{ fontSize: '12px', color: '#999', margin: 0 }}>{rest.cuisine}</p>
                  </div>
                  <button onClick={() => deleteRestaurant(rest.id)} style={{ color: '#FF4D4D', background: 'none' }}>🗑️</button>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ManagerDashboard;
