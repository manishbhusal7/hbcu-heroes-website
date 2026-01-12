import React from 'react'
import { motion } from 'framer-motion'
import { VolunteerActivism, LocalBar, Store, School } from '@mui/icons-material'
import Container from '../Container/Container'
import Section from '../Section/Section'
import SectionHeading from '../SectionHeading/SectionHeading'
import Card from '../Card/Card'
import Button from '../Button/Button'
import './HowItWorks.css'

const HowItWorks = () => {
  const steps = [
    {
      number: 1,
      title: 'Donors Give',
      description: 'Support scholarships, career readiness, mentorship, and student success nationwide.',
      icon: <VolunteerActivism sx={{ fontSize: 40 }} />
    },
    {
      number: 2,
      title: 'Partners Pour',
      description: 'Bars, restaurants, hotels, and venues donate $1 per featured Uncle Nearest cocktail sold (or a custom amount).',
      icon: <LocalBar sx={{ fontSize: 40 }} />
    },
    {
      number: 3,
      title: 'Retailers Activate',
      description: 'Retailers and stores participate through bottle activations and per-bottle contributions that drive measurable impact.',
      icon: <Store sx={{ fontSize: 40 }} />
    },
    {
      number: 4,
      title: 'Students Thrive',
      description: 'HBCU Heroes delivers funding and programming that keeps students enrolled and career-ready helping them graduate, get hired,thrive, and lead.',
      icon: <School sx={{ fontSize: 40 }} />
    }
  ]

  return (
    <Section id="how">
      <Container>
        <SectionHeading
          eyebrow="How It Works"
          title="How the Cocktail Challenge Creates Impact"
          lead="The Cocktail Challenge turns everyday moments—cocktails, bottles, and community celebration—into scholarship funding and career support for HBCU students. Donors and partners nationwide activate the campaign, and HBCU Heroes deploys the funds to support students where the need is greatest."
        />
        <div className="steps-grid">
          {steps.map((step, idx) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ 
                duration: 0.6, 
                delay: idx * 0.15,
                ease: [0.6, -0.05, 0.01, 0.99]
              }}
            >
              <div className="white-how-card">
                <div className="step-header">
                  <div className="step-num">{step.number}</div>
                  <div className="step-icon">{step.icon}</div>
                  <h3>{step.title}</h3>
                </div>
                <p>{step.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
        <motion.div 
          className="donation-buttons" 
          style={{ marginTop: '22px' }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.7 }}
        >
          <Button variant="primary" href="#donate">Donate Now</Button>
          <Button variant="secondary" href="#partners">Become a Partner</Button>
        </motion.div>
      </Container>
    </Section>
  )
}

export default HowItWorks
