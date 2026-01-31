import React from 'react'
import { motion } from 'framer-motion'
import Container from '../Container/Container'
import Section from '../Section/Section'
import Button from '../Button/Button'
import './Donate.css'

const Donate = () => {
  return (
    <Section id="donate">
      <Container>
        <div className="donate-header">
          <h2 className="donate-main-title">Thank you for partnering with Uncle Nearest on the HBCU Challenge and supporting HBCU Students today!</h2>
          <p className="donate-lead">
            Every donation goes directly to HBCU Heroes to support all accredited Historically Black Colleges and Universities nationwide.
          </p>
          <p className="donate-tax-info">
            All donations are tax-deductible. EIN: 81-4213776
          </p>
        </div>

        <motion.div 
          className="simple-donate-card"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="donate-buttons">
            <Button
              variant="primary"
              href="https://donate.stripe.com/bJefZhetD0XsdP9cvCfbq04"
              target="_blank"
              rel="noopener noreferrer"
              style={{ flex: 1, padding: '14px 24px', fontSize: '16px' }}
            >
              Donate with Stripe
            </Button>
            <Button
              variant="secondary"
              href="https://www.paypal.com/donate/?hosted_button_id=MAX2CY6YJSQFN"
              target="_blank"
              rel="noopener noreferrer"
              style={{ flex: 1, padding: '14px 24px', fontSize: '16px' }}
            >
              Donate with PayPal
            </Button>
          </div>
        </motion.div>
      </Container>
    </Section>
  )
}

export default Donate
