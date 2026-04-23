import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import HowItWorks from './components/HowItWorks'
import FeaturedDishes from './components/FeaturedDishes'
import Stats from './components/Stats'
import Testimonials from './components/Testimonials'
import './index.css'

function App() {
  return (
    <div className="app-container">
      <Navbar />
      <main>
        <Hero />
        <HowItWorks />
        <FeaturedDishes />
        <Stats />
        <Testimonials />
      </main>
    </div>
  )
}

export default App
