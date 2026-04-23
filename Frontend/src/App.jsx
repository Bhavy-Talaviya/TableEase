import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import HowItWorks from './components/HowItWorks'
import FeaturedDishes from './components/FeaturedDishes'
import Stats from './components/Stats'
import Testimonials from './components/Testimonials'
import CTA from './components/CTA'
import Footer from './components/Footer'
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
        <CTA />
      </main>
      <Footer />
    </div>
  )
}

export default App
