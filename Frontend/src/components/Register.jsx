import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Register = () => {
  const navigate = useNavigate();
  const [role, setRole] = useState('customer');
  const [showPassword, setShowPassword] = useState(false);
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [fullName, setFullName] = useState('');
  const [restaurantName, setRestaurantName] = useState('');
  const [agreed, setAgreed] = useState(false);
  const [error, setError] = useState('');

  const handleRegister = (e) => {
    e.preventDefault();
    setError('');
    if (!fullName || !email || !password) { setError('Please fill in all fields.'); return; }
    if (!agreed) { setError('You must agree to the Terms of Service.'); return; }
    const users = JSON.parse(localStorage.getItem('users')) || [];
    if (users.find(u => u.email === email)) { setError('Email already exists. Please login instead.'); return; }
    const newUser = { id: Date.now(), role, name: fullName, email, password };
    users.push(newUser);
    localStorage.setItem('users', JSON.stringify(users));
    localStorage.setItem('currentUser', JSON.stringify(newUser));
    navigate('/dashboard');
  };

  const calculateStrength = (pass) => {
    let s = 0;
    if (pass.length > 5) s++;
    if (pass.length > 8) s++;
    if (/[A-Z]/.test(pass)) s++;
    if (/[0-9]/.test(pass)) s++;
    if (/[^A-Za-z0-9]/.test(pass)) s++;
    return Math.min(s, 4);
  };

  const strength = calculateStrength(password);
  const strengthLabel = ['', 'Weak', 'Fair', 'Good', 'Strong'][strength] || '';
  const strengthColor = ['#ccc', '#FF4D4D', '#FFA64D', '#4DFF4D', '#00CC00'][strength];
  const isEmailValid = email.length > 5 && email.includes('@');

  return (
    <div style={{
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #fff5f0 0%, #fff 100%)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '20px',
      fontFamily: 'var(--font-main)',
    }}>
      <div style={{
        width: '100%',
        maxWidth: '480px',
        background: 'white',
        borderRadius: '28px',
        boxShadow: '0 20px 60px rgba(0,0,0,0.08)',
        overflow: 'hidden',
      }}>
        {/* Header Banner */}
        <div style={{
          background: 'linear-gradient(135deg, #FF6B35 0%, #FF8C61 100%)',
          padding: '32px 28px 28px',
          color: 'white',
        }}>
          <Link to="/" style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            color: 'rgba(255,255,255,0.85)',
            textDecoration: 'none',
            fontSize: '13px',
            fontWeight: '600',
            marginBottom: '20px',
          }}>
            ← Back to Home
          </Link>
          <h1 style={{ fontSize: '26px', fontWeight: '800', margin: '0 0 4px' }}>Create Account</h1>
          <p style={{ fontSize: '14px', opacity: 0.85, margin: 0 }}>Join TableEase and start reserving tables</p>
        </div>

        {/* Form Body */}
        <div style={{ padding: '28px' }}>
          {/* Role Toggle */}
          <div style={{
            display: 'flex',
            background: '#f5f5f5',
            borderRadius: '14px',
            padding: '4px',
            marginBottom: '24px',
          }}>
            {['customer', 'manager'].map(r => (
              <button
                key={r}
                onClick={() => setRole(r)}
                style={{
                  flex: 1,
                  padding: '11px',
                  borderRadius: '11px',
                  border: 'none',
                  cursor: 'pointer',
                  fontWeight: '700',
                  fontSize: '14px',
                  transition: 'all 0.25s',
                  background: role === r ? 'white' : 'transparent',
                  color: role === r ? 'var(--primary)' : '#999',
                  boxShadow: role === r ? '0 2px 10px rgba(0,0,0,0.08)' : 'none',
                }}
              >
                {r.charAt(0).toUpperCase() + r.slice(1)}
              </button>
            ))}
          </div>

          {/* Error */}
          {error && (
            <div style={{
              background: '#FFF0F0', color: '#D32F2F', padding: '12px 16px',
              borderRadius: '12px', fontSize: '13px', marginBottom: '16px',
              border: '1px solid #FFCDD2',
            }}>
              ⚠️ {error}
            </div>
          )}

          <form onSubmit={handleRegister} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            {/* Restaurant Name (Manager only) */}
            {role === 'manager' && (
              <div>
                <label style={{ display: 'block', fontSize: '13px', fontWeight: '700', color: '#1A1A1A', marginBottom: '8px' }}>
                  Restaurant Name
                </label>
                <div style={{ position: 'relative' }}>
                  <span style={{ position: 'absolute', left: '14px', top: '50%', transform: 'translateY(-50%)', color: '#ccc' }}>🏢</span>
                  <input
                    type="text"
                    placeholder="The Grand Bistro"
                    value={restaurantName}
                    onChange={e => setRestaurantName(e.target.value)}
                    style={inputStyle}
                  />
                </div>
              </div>
            )}

            {/* Full Name */}
            <div>
              <label style={labelStyle}>{role === 'manager' ? 'Manager Name' : 'Full Name'}</label>
              <div style={{ position: 'relative' }}>
                <span style={iconStyle}>👤</span>
                <input
                  type="text"
                  placeholder="John Doe"
                  value={fullName}
                  onChange={e => setFullName(e.target.value)}
                  style={inputStyle}
                />
              </div>
            </div>

            {/* Email */}
            <div>
              <label style={labelStyle}>Email Address</label>
              <div style={{ position: 'relative' }}>
                <span style={iconStyle}>✉️</span>
                <input
                  type="email"
                  placeholder="alex.smith@example.com"
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  style={{ ...inputStyle, borderColor: isEmailValid ? '#00CC00' : '#E5E5E5' }}
                />
                {isEmailValid && (
                  <span style={{ position: 'absolute', right: '14px', top: '50%', transform: 'translateY(-50%)', color: '#00CC00', fontSize: '18px' }}>✓</span>
                )}
              </div>
              {isEmailValid && <span style={{ fontSize: '12px', color: '#00CC00', marginTop: '4px', display: 'block' }}>Email is available</span>}
            </div>

            {/* Password */}
            <div>
              <label style={labelStyle}>Password</label>
              <div style={{ position: 'relative' }}>
                <span style={iconStyle}>🔒</span>
                <input
                  type={showPassword ? 'text' : 'password'}
                  placeholder="Min 8 characters"
                  value={password}
                  onChange={e => setPassword(e.target.value)}
                  style={inputStyle}
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  style={{ position: 'absolute', right: '14px', top: '50%', transform: 'translateY(-50%)', background: 'none', border: 'none', cursor: 'pointer', color: '#999', fontSize: '16px', padding: '4px', minHeight: 'unset' }}
                >
                  {showPassword ? '🙈' : '👁️'}
                </button>
              </div>
              {/* Strength bars */}
              {password.length > 0 && (
                <div style={{ marginTop: '8px' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '12px', fontWeight: '600', marginBottom: '6px' }}>
                    <span style={{ color: strengthColor }}>{strengthLabel}</span>
                    <span style={{ color: '#A0A0A0' }}>Password Strength</span>
                  </div>
                  <div style={{ display: 'flex', gap: '4px' }}>
                    {[1, 2, 3, 4].map(l => (
                      <div key={l} style={{ flex: 1, height: '4px', borderRadius: '2px', background: strength >= l ? strengthColor : '#E5E5E5', transition: 'all 0.3s' }} />
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Terms */}
            <label style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', cursor: 'pointer' }}>
              <input
                type="checkbox"
                checked={agreed}
                onChange={e => setAgreed(e.target.checked)}
                style={{ marginTop: '3px', accentColor: 'var(--primary)', width: '16px', height: '16px', flexShrink: 0 }}
              />
              <span style={{ fontSize: '13px', color: '#555', lineHeight: '1.5' }}>
                I agree to the{' '}
                <a href="#" style={{ color: 'var(--primary)', textDecoration: 'underline' }}>Terms of Service</a>
                {' '}and{' '}
                <a href="#" style={{ color: 'var(--primary)', textDecoration: 'underline' }}>Privacy Policy</a>.
              </span>
            </label>

            {/* Submit Button */}
            <button type="submit" style={{
              width: '100%',
              height: '54px',
              background: 'linear-gradient(135deg, #FF6B35, #FF8C61)',
              color: 'white',
              border: 'none',
              borderRadius: '16px',
              fontSize: '16px',
              fontWeight: '700',
              cursor: 'pointer',
              boxShadow: '0 6px 20px rgba(255,107,53,0.35)',
              transition: 'all 0.2s',
              marginTop: '4px',
              letterSpacing: '0.3px',
            }}>
              Create Account
            </button>
          </form>

          {/* Login Link */}
          <p style={{ textAlign: 'center', marginTop: '20px', fontSize: '14px', color: '#666' }}>
            Already have an account?{' '}
            <Link to="/login" style={{ color: 'var(--primary)', fontWeight: '700', textDecoration: 'none' }}>Login</Link>
          </p>

          {/* Social Divider */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', margin: '20px 0 16px' }}>
            <div style={{ flex: 1, height: '1px', background: '#E5E5E5' }} />
            <span style={{ fontSize: '12px', color: '#999', fontWeight: '700', letterSpacing: '0.5px' }}>OR CONTINUE WITH</span>
            <div style={{ flex: 1, height: '1px', background: '#E5E5E5' }} />
          </div>

          {/* Social Buttons */}
          <div style={{ display: 'flex', gap: '12px' }}>
            {[
              { label: 'Google', icon: '🇬' },
              { label: 'Apple', icon: '🍎' },
            ].map(({ label, icon }) => (
              <button key={label} style={{
                flex: 1,
                height: '48px',
                background: 'white',
                border: '1.5px solid #E5E5E5',
                borderRadius: '14px',
                fontSize: '14px',
                fontWeight: '600',
                color: '#1A1A1A',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '8px',
                transition: 'all 0.2s',
              }}>
                {label === 'Google' ? (
                  <svg width="18" height="18" viewBox="0 0 24 24">
                    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
                    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
                    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" />
                    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
                  </svg>
                ) : (
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M16.6 8.9c-.1-.1-1.3-.8-1.3-2.4 0-1.9 1.6-2.8 1.7-2.9-1-1.5-2.6-1.7-3.2-1.7-1.4-.1-2.7.9-3.4.9-.7 0-1.8-.8-2.9-.8-1.5 0-2.9.9-3.7 2.2-1.6 2.8-.4 6.9 1.2 9.2.8 1.1 1.7 2.3 2.9 2.3 1.1 0 1.6-.7 2.9-.7 1.3 0 1.8.7 3 .7 1.2 0 2-1.1 2.8-2.3.9-1.3 1.3-2.6 1.3-2.7-.1 0-2.5-1-2.5-3.9 0-2 .1-3.4 1.2-4l-.1.1z" />
                  </svg>
                )}
                {label}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

// Reusable style constants
const labelStyle = {
  display: 'block',
  fontSize: '13px',
  fontWeight: '700',
  color: '#1A1A1A',
  marginBottom: '8px',
};

const inputStyle = {
  width: '100%',
  height: '52px',
  paddingLeft: '44px',
  paddingRight: '16px',
  border: '1.5px solid #E5E5E5',
  borderRadius: '14px',
  fontSize: '15px',
  fontFamily: 'var(--font-main)',
  background: '#FAFAFA',
  outline: 'none',
  transition: 'border-color 0.2s',
  boxSizing: 'border-box',
};

const iconStyle = {
  position: 'absolute',
  left: '14px',
  top: '50%',
  transform: 'translateY(-50%)',
  fontSize: '16px',
  pointerEvents: 'none',
};

export default Register;
