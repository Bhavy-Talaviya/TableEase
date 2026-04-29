import React, { useState } from 'react';

const UserProfile = () => {
  const [currentUser, setCurrentUser] = useState(JSON.parse(localStorage.getItem('currentUser') || '{}'));
  const [isEditing, setIsEditing] = useState(false);
  const [editData, setEditData] = useState({ ...currentUser });

  const handleSave = () => {
    // Update current user
    localStorage.setItem('currentUser', JSON.stringify(editData));
    setCurrentUser(editData);
    
    // Update in the main users list too
    const users = JSON.parse(localStorage.getItem('users') || '[]');
    const updatedUsers = users.map(u => u.email === editData.email ? { ...u, ...editData } : u);
    localStorage.setItem('users', JSON.stringify(updatedUsers));
    
    setIsEditing(false);
    
    // Notify other components (like Topbar) to update
    window.dispatchEvent(new Event('storage'));
    alert("Profile updated successfully!");
  };

  const userDetails = [
    { label: 'Full Name', key: 'name', value: currentUser.name || 'Not Provided' },
    { label: 'Email Address', key: 'email', value: currentUser.email || 'Not Provided', readonly: true },
    { label: 'Phone Number', key: 'phone', value: currentUser.phone || '+1 (555) 123-4567' },
    { label: 'Location', key: 'location', value: currentUser.location || 'New York, USA' },
    { label: 'Member Since', key: 'memberSince', value: currentUser.memberSince || 'October 2026', readonly: true },
    { label: 'Account Status', key: 'status', value: currentUser.status || 'Verified Premium', readonly: true }
  ];

  return (
    <div className="dashboard-page">
      <div className="profile-container">
        <div className="profile-main-card">
          <div className="profile-banner"></div>
          <div className="profile-info-section">
            <div className="profile-avatar-wrapper">
              <div className="profile-avatar">
                {currentUser.name ? currentUser.name.charAt(0) : 'U'}
              </div>
            </div>
            
            <div className="profile-header-content">
              <div className="profile-name-group">
                {isEditing ? (
                  <input 
                    type="text" 
                    className="edit-profile-input"
                    value={editData.name} 
                    onChange={(e) => setEditData({...editData, name: e.target.value})}
                    style={{ fontSize: '24px', fontWeight: '800', border: '1px solid #ddd', borderRadius: '8px', padding: '5px 10px' }}
                  />
                ) : (
                  <h2>{currentUser.name || 'User Profile'}</h2>
                )}
                <span className="profile-role-badge">{currentUser.role || 'User'}</span>
              </div>
              {isEditing ? (
                <div style={{ display: 'flex', gap: '10px' }}>
                  <button className="btn-edit-profile" onClick={handleSave} style={{ background: '#28a745' }}>Save Changes</button>
                  <button className="btn-edit-profile" onClick={() => setIsEditing(false)} style={{ background: '#6c757d' }}>Cancel</button>
                </div>
              ) : (
                <button className="btn-edit-profile" onClick={() => { setEditData({...currentUser}); setIsEditing(true); }}>Edit Profile</button>
              )}
            </div>

            <div className="profile-details-grid">
              {userDetails.map((detail, index) => (
                <div key={index} className="profile-detail-item">
                  <span className="profile-detail-label">{detail.label}</span>
                  {isEditing && !detail.readonly ? (
                    <input 
                      type="text" 
                      className="edit-profile-field"
                      value={editData[detail.key] || ''}
                      onChange={(e) => setEditData({...editData, [detail.key]: e.target.value})}
                      style={{ border: '1px solid #ddd', borderRadius: '6px', padding: '8px', marginTop: '5px' }}
                    />
                  ) : (
                    <span className="profile-detail-value">{detail.value}</span>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
