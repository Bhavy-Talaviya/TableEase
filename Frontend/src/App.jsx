import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import LandingPage from './pages/LandingPage'
import OurStoryPage from './pages/OurStoryPage'
import './index.css'

function App() {
  return (
    <Router>
      <div className="app-container">
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/our-story" element={<OurStoryPage />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
