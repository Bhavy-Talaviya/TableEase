import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
  const [role, setRole] = useState('customer');
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="login-container">
      {/* Left side: Image and Branding */}
      <div className="login-image-section">
        <div className="login-image-overlay"></div>
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
        <div className="login-image-content">
          <h2>Elevating every meal into an unforgettable memory.</h2>
          <div className="divider"></div>
        </div>
        <div className="login-copyright">
          &copy; {new Date().getFullYear()} TableEase. All rights reserved.
        </div>
      </div>

      {/* Right side: Login Form */}
      <div className="login-form-section">
        <div className="form-wrapper">
          <div className="form-header">
            <h1>Welcome Back</h1>
            <p>Please enter your details to sign in.</p>
          </div>

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

          <form className="login-form" onSubmit={(e) => e.preventDefault()}>
            <div className="input-group">
              <label htmlFor="email">Email Address</label>
              <div className="input-icon-wrapper">
                <svg className="input-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                  <polyline points="22,6 12,13 2,6"></polyline>
                </svg>
                <input type="email" id="email" placeholder="name@example.com" />
              </div>
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
                  placeholder="••••••••" 
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
            </div>

            <div className="form-actions">
              <label className="remember-me">
                <input type="checkbox" />
                <span className="checkmark"></span>
                Remember me
              </label>
              <a href="#" className="forgot-password">Forgot Password?</a>
            </div>

            <button type="submit" className="btn-signin">Sign In</button>
          </form>

          <div className="social-login-container">
            <div className="social-divider">
              <span>or sign in with</span>
            </div>
            <div className="social-buttons">
              <button className="btn-social">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                  <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                  <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
                  <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
                </svg>
                Google
              </button>
              <button className="btn-social">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M16.6 8.9c-.1-.1-1.3-.8-1.3-2.4 0-1.9 1.6-2.8 1.7-2.9-1-1.5-2.6-1.7-3.2-1.7-1.4-.1-2.7.9-3.4.9-.7 0-1.8-.8-2.9-.8-1.5 0-2.9.9-3.7 2.2-1.6 2.8-.4 6.9 1.2 9.2.8 1.1 1.7 2.3 2.9 2.3 1.1 0 1.6-.7 2.9-.7 1.3 0 1.8.7 3 .7 1.2 0 2-1.1 2.8-2.3.9-1.3 1.3-2.6 1.3-2.7-.1 0-2.5-1-2.5-3.9 0-2 .1-3.4 1.2-4l-.1.1zM11.9 5.8c.6-.7 1-1.6 1-2.6 0-.1 0-.2 0-.3-.9.1-1.9.6-2.6 1.3-.5.6-1 1.6-1 2.5 0 .1 0 .2 0 .3 1-.1 1.9-.5 2.6-1.2z"/>
                </svg>
                Apple
              </button>
            </div>
          </div>

          <div className="register-link">
            Don't have an account? <Link to="/register">Register now</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
