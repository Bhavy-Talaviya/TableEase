import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import LandingPage from './pages/LandingPage'
import OurStoryPage from './pages/OurStoryPage'
import ReviewsPage from './pages/ReviewsPage'
import LoginPage from './pages/LoginPage'
import RegisterPage from './pages/RegisterPage'
import ForgotPasswordPage from './pages/ForgotPasswordPage'
import DashboardLayout from './components/DashboardLayout'
import CustomerDashboard from './pages/CustomerDashboard'
import UserProfile from './pages/UserProfile'
import Reservations from './pages/Reservations'
import Notifications from './pages/Notifications'
import './index.css'

function App() {
  return (
    <Router>
      <div className="app-container">
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/our-story" element={<OurStoryPage />} />
          <Route path="/reviews" element={<ReviewsPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/forgot-password" element={<ForgotPasswordPage />} />
          
          <Route path="/dashboard" element={<DashboardLayout />}>
            <Route index element={<CustomerDashboard />} />
            <Route path="profile" element={<UserProfile />} />
            <Route path="reservations" element={<Reservations />} />
            <Route path="notifications" element={<Notifications />} />
          </Route>
        </Routes>
      </div>
    </Router>
  )
}

export default App
