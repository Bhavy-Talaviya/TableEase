import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const ForgotPassword = () => {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email) {
      setIsSubmitted(true);
    }
  };

  return (
    <div className="login-container">
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

      {/* Right side: Forgot Password Form */}
      <div className="login-form-section">
        <div className="form-wrapper register-wrapper">
          <div className="form-header">
            <h1>Reset Password</h1>
            <p style={{ marginTop: '10px' }}>Enter your email address and we'll send you a link to reset your password.</p>
          </div>

          {!isSubmitted ? (
            <form className="login-form" onSubmit={handleSubmit}>
              <div className="input-group">
                <label htmlFor="email">Email Address</label>
                <div className="input-icon-wrapper">
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
                    required
                  />
                </div>
              </div>

              <button type="submit" className="btn-signin btn-register">
                Send Reset Link
              </button>

              <div className="register-link login-redirect">
                Remember your password? <Link to="/login" className="link-orange">Login here</Link>
              </div>
            </form>
          ) : (
            <div className="success-message-container" style={{ textAlign: 'center', padding: '20px 0' }}>
              <div style={{ width: '60px', height: '60px', borderRadius: '50%', backgroundColor: '#E8F5E9', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 20px auto' }}>
                <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="#4CAF50" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                  <polyline points="22 4 12 14.01 9 11.01"></polyline>
                </svg>
              </div>
              <h3 style={{ fontSize: '20px', marginBottom: '10px' }}>Check your email</h3>
              <p style={{ color: '#666', marginBottom: '25px', lineHeight: '1.5' }}>
                We've sent password reset instructions to<br/> <strong>{email}</strong>
              </p>
              <Link to="/login" style={{ display: 'inline-block', backgroundColor: 'var(--primary)', color: 'white', padding: '12px 24px', borderRadius: '12px', textDecoration: 'none', fontWeight: '600' }}>
                Back to Login
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
