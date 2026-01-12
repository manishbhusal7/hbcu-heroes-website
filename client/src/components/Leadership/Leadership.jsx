import React from 'react'
import { motion } from 'framer-motion'
import Container from '../Container/Container'
import Section from '../Section/Section'
import SectionHeading from '../SectionHeading/SectionHeading'
import './Leadership.css'

const Leadership = () => {
  const leaders = [
    {
      name: 'Fawn Weaver',
      title: 'Co-Founder, Owner & CEO',
      organization: 'Uncle Nearest Premium Whiskey',
      description: '',
      image: 'fawn-weaver.jpg',
      alt: 'Fawn Weaver, Co-Founder, Owner & CEO of Uncle Nearest Premium Whiskey'
    },
    {
      name: 'Tracey Pennywell',
      title: 'CEO & Co-Founder',
      organization: 'HBCU Heroes',
      description: '',
      image: 'Tracey.jpg',
      alt: 'Tracey Pennywell, CEO & Co-Founder of HBCU Heroes'
    },
    {
      name: 'George Lynch',
      title: 'Co-Founder & NBA Veteran',
      organization: 'HBCU Heroes',
      description: '',
      image: 'George.JPG',
      alt: 'George Lynch, Co-Founder of HBCU Heroes and NBA Veteran'
    }
  ]

  return (
    <Section id="leadership" tight>
      <Container>
        <SectionHeading
          eyebrow="Leadership"
          title="The Leaders Behind the Movement"
          lead="A premium brand and a purpose-led nonprofit—united to create measurable outcomes for HBCU students nationwide."
        />
        <div className="leaders-grid">
          {leaders.map((leader, idx) => (
            <motion.div
              key={idx}
              className="leader-card"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ 
                duration: 0.6, 
                delay: idx * 0.15,
                ease: [0.6, -0.05, 0.01, 0.99]
              }}
            >
              <motion.div 
                className="leader-image-container"
                whileHover={{ scale: 1.03 }}
                transition={{ duration: 0.3 }}
              >
                <img src={leader.image} alt={leader.alt} className="leader-image" />
                <div className="leader-overlay"></div>
              </motion.div>
              <div className="leader-info">
                <h3>{leader.name}</h3>
                <div className="leader-title">{leader.title}</div>
                {leader.organization && <div className="leader-org">{leader.organization}</div>}
                <p className="leader-description">{leader.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </Section>
  )
}

export default Leadership
