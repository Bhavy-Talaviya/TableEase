import React from 'react';

const UserProfile = () => {
  const currentUser = JSON.parse(localStorage.getItem('currentUser') || '{}');
  
  const userDetails = [
    { label: 'Full Name', value: currentUser.name || 'Not Provided' },
    { label: 'Email Address', value: currentUser.email || 'Not Provided' },
    { label: 'Phone Number', value: currentUser.phone || '+1 (555) 123-4567' },
    { label: 'Location', value: 'New York, USA' },
    { label: 'Member Since', value: 'October 2026' },
    { label: 'Account Status', value: 'Verified Premium' }
  ];


  return (
    <div className="dashboard-page">
      <div className="profile-container">
        {/* Main Info Card */}
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
                <h2>{currentUser.name || 'User Profile'}</h2>
                <span className="profile-role-badge">Customer</span>
              </div>
              <button className="btn-edit-profile">Edit Profile</button>
            </div>

            <div className="profile-details-grid">
              {userDetails.map((detail, index) => (
                <div key={index} className="profile-detail-item">
                  <span className="profile-detail-label">{detail.label}</span>
                  <span className="profile-detail-value">{detail.value}</span>
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
