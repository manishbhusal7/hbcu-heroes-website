import React from 'react'
import { motion } from 'framer-motion'
import { School, Work, LocalHospital } from '@mui/icons-material'
import Container from '../Container/Container'
import Section from '../Section/Section'
import SectionHeading from '../SectionHeading/SectionHeading'
import Card from '../Card/Card'
import Button from '../Button/Button'
import './WhereYourGiftGoes.css'

const WhereYourGiftGoes = () => {
  const giftAreas = [
    {
      title: 'Scholarships',
      description: 'Scholarships and legacy scholarship opportunities that support enrollment and completion.',
      icon: <School sx={{ fontSize: 40, color: 'var(--gold)' }} />
    },
    {
      title: 'Career Readiness',
      description: 'Professional development programming, career prep webinars, and real-world preparation for success.',
      icon: <Work sx={{ fontSize: 40, color: 'var(--gold)' }} />
    },
    {
      title: 'Gap Funding & Essentials',
      description: 'Emergency support for critical needs—helping students stay stable, focused, and enrolled.',
      icon: <LocalHospital sx={{ fontSize: 40, color: 'var(--gold)' }} />
    }
  ]

  return (
    <Section id="gift" tight>
      <Container>
        <SectionHeading
          eyebrow="Where Your Gift Goes"
          title="Your Donation Fuels Student Success"
          lead="Every gift helps remove barriers and accelerate opportunity for HBCU students. Donations support micro-scholarships, career prep, mentorship, emergency gap funding, internship readiness, and essential resources that keep students on track."
        />
        <div className="gift-grid">
          {giftAreas.map((area, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: idx * 0.15 }}
            >
              <div className="white-gift-card">
                <div className="gift-header">
                  <div className="gift-icon">{area.icon}</div>
                  <h3>{area.title}</h3>
                </div>
                <p>{area.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </Section>
  )
}

export default WhereYourGiftGoes
