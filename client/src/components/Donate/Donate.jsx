import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Lock } from '@mui/icons-material'
import Container from '../Container/Container'
import Section from '../Section/Section'
import Button from '../Button/Button'
import './Donate.css'

const Donate = () => {
  const [selectedAmount, setSelectedAmount] = useState(100)
  const [customAmount, setCustomAmount] = useState('')

  const amounts = [25, 50, 100, 250, 500, 1000]

  return (
    <Section id="donate">
      <Container>
        <div className="donate-header">
          <h2 className="donate-main-title">Support HBCU Students Today</h2>
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
          <h3>Donate Now</h3>
          <p>Support HBCU students with a personal contribution. Every dollar makes a difference in a student's journey.</p>
          
          <div className="amount-selection">
            <div className="amount-grid">
              {amounts.map((amount) => (
                <button
                  key={amount}
                  className={`amount-btn ${selectedAmount === amount && !customAmount ? 'active' : ''}`}
                  onClick={() => {
                    setSelectedAmount(amount)
                    setCustomAmount('')
                  }}
                >
                  ${amount}
                </button>
              ))}
            </div>
            <input
              type="number"
              placeholder="Custom amount"
              value={customAmount}
              onChange={(e) => {
                setCustomAmount(e.target.value)
                if (e.target.value) setSelectedAmount(null)
              }}
              className="custom-amount-input"
              min="1"
            />
          </div>

          <Button variant="primary" href="#stripe-checkout" style={{ width: '100%', marginTop: '16px', padding: '14px 24px', fontSize: '16px' }}>
            Donate Now
          </Button>

          <div className="secure-info">
            <Lock sx={{ fontSize: 16 }} />
            <span>Secure payment via Stripe</span>
          </div>
        </motion.div>
      </Container>
    </Section>
  )
}

export default Donate
