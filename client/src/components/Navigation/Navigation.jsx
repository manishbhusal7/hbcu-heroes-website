import React from 'react'
import { motion } from 'framer-motion'
import Container from '../Container/Container'
import Button from '../Button/Button'
import './Navigation.css'

const Navigation = () => {
  const handleSmoothScroll = (e, targetId) => {
    e.preventDefault()
    const element = document.querySelector(targetId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  return (
    <motion.nav 
      className="nav"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: [0.6, -0.05, 0.01, 0.99] }}
    >
      <Container className="nav-inner">
        <motion.div 
          className="brand"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
        >
          <img src="/unlogo.png" alt="Uncle Nearest" className="brand-logo uncle-nearest-logo" />
          <span className="brand-separator">×</span>
          <img src="/hbcu-heroes-logo.jpg" alt="HBCU Heroes" className="brand-logo hbcu-logo" />
        </motion.div>
        <div className="nav-links">
          <a href="#story" onClick={(e) => handleSmoothScroll(e, '#story')}>Our Story</a>
          <a href="#impact" onClick={(e) => handleSmoothScroll(e, '#impact')}>Impact</a>
          <a href="#how" onClick={(e) => handleSmoothScroll(e, '#how')}>How It Works</a>
          <a href="#partners" onClick={(e) => handleSmoothScroll(e, '#partners')}>Partners</a>
        </div>
        <div className="nav-cta">
          <Button variant="secondary" href="#partners" onClick={(e) => handleSmoothScroll(e, '#partners')}>Become a Partner</Button>
          <Button variant="primary" href="#donate" onClick={(e) => handleSmoothScroll(e, '#donate')}>Donate Now</Button>
        </div>
      </Container>
    </motion.nav>
  )
}

export default Navigation

