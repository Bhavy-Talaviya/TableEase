import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Register = () => {
  const navigate = useNavigate();
  const [role, setRole] = useState('customer');
  const [showPassword, setShowPassword] = useState(false);
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [fullName, setFullName] = useState('');
  const [agreed, setAgreed] = useState(false);
  const [error, setError] = useState('');

  const handleRegister = (e) => {
    e.preventDefault();
    setError('');
    
    if (!fullName || !email || !password) {
      setError('Please fill in all fields.');
      return;
    }
    if (!agreed) {
      setError('You must agree to the Terms of Service.');
      return;
    }

    const users = JSON.parse(localStorage.getItem('users')) || [];
    if (users.find(u => u.email === email)) {
      setError('Email already exists. Please login instead.');
      return;
    }

    const newUser = { 
      id: Date.now(), 
      role, 
      name: fullName, 
      email, 
      password 
    };
    
    users.push(newUser);
    localStorage.setItem('users', JSON.stringify(users));
    
    localStorage.setItem('currentUser', JSON.stringify(newUser));
    navigate('/dashboard');
  };

  // Simple password strength calculator
  const calculateStrength = (pass) => {
    let strength = 0;
    if (pass.length > 5) strength += 1;
    if (pass.length > 8) strength += 1;
    if (/[A-Z]/.test(pass)) strength += 1;
    if (/[0-9]/.test(pass)) strength += 1;
    if (/[^A-Za-z0-9]/.test(pass)) strength += 1;
    return Math.min(strength, 4);
  };

  const strength = calculateStrength(password);
  const getStrengthLabel = () => {
    if (password.length === 0) return '';
    if (strength <= 1) return 'Weak';
    if (strength === 2) return 'Fair';
    if (strength === 3) return 'Good';
    return 'Strong';
  };

  const getStrengthColor = () => {
    if (strength <= 1) return '#FF4D4D'; // Red
    if (strength === 2) return '#FFA64D'; // Orange
    if (strength === 3) return '#4DFF4D'; // Light Green
    return '#00CC00'; // Strong Green
  };

  const isEmailValid = email.length > 5 && email.includes('@');

  return (
    <div className="register-container login-container">
      {/* Left side: Orange Banner and Typography */}
      <div className="register-banner-section">
        <div className="decorative-circle circle-1"></div>
        <div className="decorative-circle circle-2"></div>
        <div className="decorative-circle circle-3"></div>

        <div className="login-brand">
          <Link to="/">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="brand-icon">
              <path d="M3 2v7c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2V2" />
              <path d="M7 2v20" />
              <path d="M21 15V2v0a5 5 0 0 0-5 5v6c0 1.1.9 2 2 2h3Zm0 0v7" />
            </svg>
            TableEase
          </Link>
        </div>

        <div className="register-banner-content">
          <h2 className="quote-text">
            "The best<br />
            memories are<br />
            made gathered<br />
            around the table."
          </h2>
          <div className="quote-footer">
            <div className="divider-line"></div>
            <span>PREMIUM DINING RESERVATIONS</span>
          </div>
        </div>
      </div>

      {/* Right side: Register Form */}
      <div className="login-form-section">
        <div className="form-wrapper register-wrapper">
          <div className="role-toggle">
            <button
              className={`role-btn ${role === 'customer' ? 'active' : ''}`}
              onClick={() => setRole('customer')}
            >
              Customer
            </button>
            <button
              className={`role-btn ${role === 'manager' ? 'active' : ''}`}
              onClick={() => setRole('manager')}
            >
              Manager
            </button>
          </div>

          <form className="login-form" onSubmit={handleRegister}>
            {error && <div className="error-message" style={{ color: '#FF4D4D', marginBottom: '1rem', fontSize: '0.875rem' }}>{error}</div>}

            {role === 'manager' && (
              <div className="input-group">
                <label htmlFor="restaurantName">Restaurant Name</label>
                <div className="input-icon-wrapper">
                  <svg className="input-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M3 21h18"></path><path d="M5 21V7l8-4v18"></path><path d="M19 21V11l-6-3"></path><path d="M9 9v.01"></path><path d="M9 12v.01"></path><path d="M9 15v.01"></path><path d="M9 18v.01"></path>
                  </svg>
                  <input type="text" id="restaurantName" placeholder="The Grand Bistro" />
                </div>
              </div>
            )}

            <div className="input-group">
              <label htmlFor="fullName">{role === 'manager' ? 'Manager Name' : 'Full Name'}</label>
              <div className="input-icon-wrapper">
                <svg className="input-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                  <circle cx="12" cy="7" r="4"></circle>
                </svg>
                <input 
                  type="text" 
                  id="fullName" 
                  placeholder="John Doe" 
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                />
              </div>
            </div>

            <div className="input-group">
              <label htmlFor="email">Email Address</label>
              <div className={`input-icon-wrapper ${isEmailValid ? 'valid-email-wrapper' : ''}`}>
                <svg className="input-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                  <polyline points="22,6 12,13 2,6"></polyline>
                </svg>
                <input
                  type="email"
                  id="email"
                  placeholder="alex.smith@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                {isEmailValid && (
                  <svg className="valid-icon" width="20" height="20" viewBox="0 0 24 24" fill="#00CC00">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"></path>
                  </svg>
                )}
              </div>
              {isEmailValid && <span className="email-status">Email is available</span>}
            </div>

            <div className="input-group">
              <label htmlFor="password">Password</label>
              <div className="input-icon-wrapper">
                <svg className="input-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
                  <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
                </svg>
                <input
                  type={showPassword ? "text" : "password"}
                  id="password"
                  placeholder="PremiumDining2024!"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <button
                  type="button"
                  className="password-toggle"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? (
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"></path>
                      <line x1="1" y1="1" x2="23" y2="23"></line>
                    </svg>
                  ) : (
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                      <circle cx="12" cy="12" r="3"></circle>
                    </svg>
                  )}
                </button>
              </div>

              {/* Password Strength Indicator */}
              {password.length > 0 && (
                <div className="password-strength-container">
                  <div className="strength-labels">
                    <span style={{ color: getStrengthColor() }}>{getStrengthLabel()}</span>
                    <span className="strength-muted">Password Strength</span>
                  </div>
                  <div className="strength-bars">
                    {[1, 2, 3, 4].map(level => (
                      <div
                        key={level}
                        className="strength-bar"
                        style={{
                          backgroundColor: strength >= level ? getStrengthColor() : '#E5E5E5',
                          opacity: strength >= level ? 1 : 0.5
                        }}
                      ></div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <div className="form-actions terms-action">
              <label className="remember-me checkbox-label">
                <input
                  type="checkbox"
                  checked={agreed}
                  onChange={(e) => setAgreed(e.target.checked)}
                />
                <span className="terms-text">
                  I agree to the <a href="#" className="link-orange">Terms of Service</a> and <a href="#" className="link-orange">Privacy Policy</a>.
                </span>
              </label>
            </div>

            <button type="submit" className="btn-signin btn-register">Create Account</button>
          </form>

          <div className="register-link login-redirect">
            Already have an account? <Link to="/login">Login</Link>
          </div>

          <div className="social-login-container register-social">
            <div className="social-divider">
              <span>OR CONTINUE WITH</span>
            </div>
            <div className="social-buttons">
              <button className="btn-social">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="#4285F4">
                  <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                  <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
                  <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" />
                  <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
                </svg>
                Google
              </button>
              <button className="btn-social">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M16.6 8.9c-.1-.1-1.3-.8-1.3-2.4 0-1.9 1.6-2.8 1.7-2.9-1-1.5-2.6-1.7-3.2-1.7-1.4-.1-2.7.9-3.4.9-.7 0-1.8-.8-2.9-.8-1.5 0-2.9.9-3.7 2.2-1.6 2.8-.4 6.9 1.2 9.2.8 1.1 1.7 2.3 2.9 2.3 1.1 0 1.6-.7 2.9-.7 1.3 0 1.8.7 3 .7 1.2 0 2-1.1 2.8-2.3.9-1.3 1.3-2.6 1.3-2.7-.1 0-2.5-1-2.5-3.9 0-2 .1-3.4 1.2-4l-.1.1zM11.9 5.8c.6-.7 1-1.6 1-2.6 0-.1 0-.2 0-.3-.9.1-1.9.6-2.6 1.3-.5.6-1 1.6-1 2.5 0 .1 0 .2 0 .3 1-.1 1.9-.5 2.6-1.2z" />
                </svg>
                Apple
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
