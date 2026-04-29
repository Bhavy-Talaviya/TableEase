import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const Topbar = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [notifCount, setNotifCount] = useState(0);
  
  const pathnames = location.pathname.split('/').filter(x => x);
  let currentPage = 'Dashboard';
  if (pathnames.length > 1) {
    const lastPath = pathnames[pathnames.length - 1];
    currentPage = lastPath.charAt(0).toUpperCase() + lastPath.slice(1);
  }

  const currentUser = JSON.parse(localStorage.getItem('currentUser') || '{}');

  useEffect(() => {
    const updateCount = () => {
      const notifications = JSON.parse(localStorage.getItem('notifications') || '[]');
      setNotifCount(notifications.length);
    };

    updateCount();
    window.addEventListener('storage', updateCount);
    
    // Also poll every 2 seconds for same-tab updates
    const interval = setInterval(updateCount, 2000);
    
    return () => {
      window.removeEventListener('storage', updateCount);
      clearInterval(interval);
    };
  }, []);

  const goToProfile = () => {
    navigate('/dashboard/profile');
  };

  return (
    <header className="dashboard-topbar">
      <div className="topbar-left">
        <div className="breadcrumb">
          <span className="text-muted">Pages</span>
          <span className="separator">›</span>
          <span className="current-page">{currentPage === 'Profile' ? 'User Profile' : currentPage}</span>
        </div>
      </div>
      <div className="topbar-right">
        <div className="search-container">
          <svg className="search-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="11" cy="11" r="8"></circle>
            <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
          </svg>
          <input type="text" className="search-input" placeholder="Search..." />
        </div>
        
        <div className="topbar-actions">
          <button className="icon-btn" onClick={() => navigate('/dashboard/notifications')}>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path>
              <path d="M13.73 21a2 2 0 0 1-3.46 0"></path>
            </svg>
            {notifCount > 0 && <span className="badge">{notifCount}</span>}
          </button>
          <button className="icon-btn" onClick={goToProfile} title="Profile Settings">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="3"></circle>
              <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path>
            </svg>
          </button>
        </div>

        <div className="user-profile-dropdown" onClick={goToProfile} style={{ cursor: 'pointer' }}>
          <div className="user-info-text">
            <span className="user-name">{currentUser.name || 'User'}</span>
            <span className="user-role">{currentUser.role || 'User'}</span>
          </div>
          <div className="user-avatar-container">
            <img src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${currentUser.name || 'User'}&backgroundColor=e65c00`} alt="User Profile" className="user-avatar" />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Topbar;
