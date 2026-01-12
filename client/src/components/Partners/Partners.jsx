import React from 'react'
import Container from '../Container/Container'
import Section from '../Section/Section'
import SectionHeading from '../SectionHeading/SectionHeading'
import Card from '../Card/Card'
import Button from '../Button/Button'
import './Partners.css'

const Partners = () => {
  return (
    <Section id="partners">
      <Container>
        <SectionHeading
          eyebrow="Partners"
          title="Join Uncle Nearest in Supporting HBCU Heroes Scholarship Funds."
        />
        <p style={{ fontSize: '18px', lineHeight: '1.7', marginBottom: '32px', textAlign: 'center', color: 'rgba(255, 255, 255, 0.9)' }}>
          Thank you for being a partner to Uncle Nearest and providing your support by donating to HBCU Heroes. Haven't signed up yet, please <a href="https://docs.google.com/forms/d/e/1FAIpQLSdvW-5yji2Xx5Geq5AycGgCpOfP8tNGPV9mC2r_N0hIwV24_Q/viewform" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--gold)', textDecoration: 'underline' }}>click here for the sign up form</a>.
        </p>
        <div className="partner-button-wrapper">
          <Button variant="primary" href="#contact">Partner Donation</Button>
        </div>
      </Container>
    </Section>
  )
}

export default Partners

