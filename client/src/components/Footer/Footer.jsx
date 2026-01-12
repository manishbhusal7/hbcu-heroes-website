import React from 'react'
import Container from '../Container/Container'
import './Footer.css'

const Footer = () => {
  return (
    <footer>
      <Container>
        <div className="footer-grid">
          <div>
            <div className="brand" style={{ marginBottom: '16px' }}>
              <img src="/unlogo.png" alt="Uncle Nearest" className="brand-logo uncle-nearest-logo" />
              <span className="brand-separator">×</span>
              <img src="/hbcu-heroes-logo.jpg" alt="HBCU Heroes" className="brand-logo hbcu-logo" />
            </div>
            <p className="footer-tax-notice">
              <strong>Donations are processed through HBCU Heroes, a 501(c)(3) nonprofit organization, and are tax-deductible to the extent allowed by law.</strong>
            </p>
          </div>
          <div className="foot-links">
            <a href="#mission">Mission</a>
            <a href="#impact">Impact</a>
            <a href="#how">How It Works</a>
            <a href="#stories">Student Stories</a>
            <a href="#partners">Partners</a>
            <a href="#donate">Donate</a>
          </div>
        </div>
      </Container>
    </footer>
  )
}

export default Footer

