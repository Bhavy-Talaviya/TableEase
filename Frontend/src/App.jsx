import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import HowItWorks from './components/HowItWorks'
import FeaturedDishes from './components/FeaturedDishes'
import './index.css'

function App() {
  return (
    <div className="app-container">
      <Navbar />
      <main>
        <Hero />
        <HowItWorks />
        <FeaturedDishes />
      </main>
    </div>
  )
}

export default App
