import React, { useEffect, useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Warning, TrendingUp, AttachMoney, LocalHospital, Assessment } from '@mui/icons-material'
import Container from '../Container/Container'
import Section from '../Section/Section'
import SectionHeading from '../SectionHeading/SectionHeading'
import Card from '../Card/Card'
import './Impact.css'

const Impact = () => {
  const stats = [
    { 
      value: '50%', 
      description: 'of HBCU students experience food insecurity.',
      icon: <Warning sx={{ fontSize: 32, color: 'var(--gold)' }} />
    },
    { 
      value: '70%', 
      description: 'rely on Pell Grants to stay enrolled.',
      icon: <TrendingUp sx={{ fontSize: 32, color: 'var(--gold)' }} />
    },
    { 
      value: '$5k', 
      description: 'average unmet financial need each year after aid runs out.',
      icon: <AttachMoney sx={{ fontSize: 32, color: 'var(--gold)' }} />
    },
    { 
      value: '48%', 
      description: 'experience a financial emergency during the academic year.',
      icon: <LocalHospital sx={{ fontSize: 32, color: 'var(--gold)' }} />
    },
    { 
      value: '75%', 
      description: 'navigate significant financial strain while pursuing a degree.',
      icon: <Assessment sx={{ fontSize: 32, color: 'var(--gold)' }} />
    }
  ]

  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <Section id="impact" tight>
      <Container>
        <SectionHeading
          eyebrow="The Need"
          title="The Reality Facing HBCU Students"
          lead="The brilliance is there. The drive is there. But the resources often are not. Your support bridges the gap between potential and opportunity."
        />
        <div className="stats" ref={ref}>
          {stats.map((stat, idx) => (
            <motion.div
              key={idx}
              className="stat"
              initial={{ opacity: 0, y: 30, scale: 0.9 }}
              animate={isInView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 30, scale: 0.9 }}
              transition={{ 
                duration: 0.6, 
                delay: idx * 0.1,
                ease: [0.6, -0.05, 0.01, 0.99]
              }}
              whileHover={{ 
                scale: 1.05, 
                y: -8,
                transition: { duration: 0.3 }
              }}
            >
              <div className="stat-icon">{stat.icon}</div>
              <strong>{stat.value}</strong>
              <span>{stat.description}</span>
            </motion.div>
          ))}
        </div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <div className="white-impact-card" style={{ marginTop: '22px' }}>
            <h3>What These Numbers Mean</h3>
            <p>
              These aren't just statistics...they are dreams at risk. Your donation helps turn hardship
              into momentum and pressure into possibility.
              It supports students through scholarships, career readiness, and the critical resources
              that make graduation, success, and a brighter future more attainable.
            </p>
          </div>
        </motion.div>
      </Container>
    </Section>
  )
}

export default Impact
