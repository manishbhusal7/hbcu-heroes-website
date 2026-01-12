import React from 'react'
import { motion } from 'framer-motion'
import Container from '../Container/Container'
import Section from '../Section/Section'
import SectionHeading from '../SectionHeading/SectionHeading'
import './ProvenPartnership.css'

const ProvenPartnership = () => {
  const years = [
    {
      year: '2023 — Year 1',
      description: '$1M raised to support HBCU student success.'
    },
    {
      year: '2024 — Year 2',
      description: '$1.4M raised through national donor and partner activation.'
    },
    {
      year: '2026 — Year 3',
      description: 'Relaunching nationwide to fuel even greater impact.'
    }
  ]

  return (
    <Section id="proven" tight>
      <Container>
        <SectionHeading
          eyebrow="Proven Partnership"
          title="A Proven Partnership. A Powerful Return."
          lead="In just two campaign years, the Uncle Nearest HBCU Cocktail Challenge X HBCU Heroes helped raise $2.4M+ to support HBCU students through scholarships, career readiness, and real-world opportunity. In 2026, the movement returns with expanded national impact and renewed momentum."
        />
        <div className="timeline-cards">
          {years.map((year, idx) => (
            <motion.div
              key={idx}
              className="timeline-card"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: idx * 0.15 }}
              whileHover={{ scale: 1.05 }}
            >
              <h3>{year.year}</h3>
              <p>{year.description}</p>
            </motion.div>
          ))}
        </div>
        <motion.div 
          className="summary-card"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, delay: 0.5 }}
        >
          <h3>Over $2.4M raised. Countless futures strengthened.</h3>
          <p>
            This initiative is powered by donors, hospitality partners, and supporters who believe in
            investing in the next generation of innovators, leaders, and changemakers.
          </p>
        </motion.div>
      </Container>
    </Section>
  )
}

export default ProvenPartnership

