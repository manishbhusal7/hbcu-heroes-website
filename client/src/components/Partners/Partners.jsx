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
          title="Turn Your Drinks Into A Scholarship Fund."
          lead="Own a bar, restaurant, hotel, venue, or retail account? Join the Cocktail Challenge and donate through featured Uncle Nearest cocktails and activations. We provide the toolkit, campaign messaging, and reporting—you activate and pour with purpose."
        />
        <div className="partner-cta">
          <Card>
            <h3>Hospitality Partners</h3>
            <p>
              Donate <strong>$1 per featured Uncle Nearest cocktail</strong> (or a custom amount).
              Turn your customer experience into measurable impact for students nationwide.
            </p>
            <div className="donation-buttons">
              <Button variant="primary" href="#contact">Become a Partner</Button>
              <Button variant="secondary" href="#contact">Download Partner Toolkit</Button>
            </div>
          </Card>
          <Card>
            <h3>Retail & Brand Partners</h3>
            <p>
              Activate in-store, online, or through customer promotions. Align your brand with a proven
              impact campaign and help fund scholarships and career readiness.
            </p>
            <div className="donation-buttons">
              <Button variant="primary" href="#contact">Partner Interest Form</Button>
              <Button variant="secondary" href="#contact">Request Partner Deck</Button>
            </div>
          </Card>
        </div>
        <Card style={{ marginTop: '18px' }}>
          <h3>Partner Benefits</h3>
          <p>
            Partners receive premium impact affiliation, campaign messaging, promotional support,
            and the opportunity to help fund scholarships and student success programs nationwide.
          </p>
        </Card>
      </Container>
    </Section>
  )
}

export default Partners

