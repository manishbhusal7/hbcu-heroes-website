import React from 'react'
import { motion } from 'framer-motion'
import { TrendingUp, School, Public, Handshake } from '@mui/icons-material'
import Container from '../Container/Container'
import Section from '../Section/Section'
import Button from '../Button/Button'
import './Hero.css'

const Hero = () => {
  const trustItems = [
    { 
      title: '$2.4M+ Raised', 
      description: 'Across two campaign years (2023–2024).',
      icon: <TrendingUp sx={{ fontSize: 30, color: 'var(--gold)' }} />
    },
    { 
      title: 'Student Success', 
      description: 'Scholarships, career readiness, mentorship, and gap funding.',
      icon: <School sx={{ fontSize: 28, color: 'var(--gold)' }} />
    },
    { 
      title: 'Nationwide Impact', 
      description: 'Support delivered where the need is greatest.',
      icon: <Public sx={{ fontSize: 28, color: 'var(--gold)' }} />
    },
    { 
      title: 'Partner-Driven', 
      description: 'Hospitality & retail activations powered by the community.',
      icon: <Handshake sx={{ fontSize: 28, color: 'var(--gold)' }} />
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.6, -0.05, 0.01, 0.99]
      }
    }
  }

  return (
    <Section id="top" className="hero" noBorder>
      <div className="hero-media"></div>
      <div className="hero-bg"></div>
      <Container>
        <motion.div 
          className="hero-content"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div variants={itemVariants} className="hero-main">
            <div className="hero-title-section">
              <motion.div 
                className="hero-logos"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8 }}
              >
                <img src="/cocktailchallenge.png" alt="Uncle Nearest HBCU Cocktail Challenge" className="hero-logo-cocktail" />
                <span className="plus-sign">+</span>
                <img src="/hbcu-heroes-logo.jpg" alt="HBCU Heroes" className="hero-logo-hbcu" />
              </motion.div>
              <motion.div 
                className="hero-bottles"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1, delay: 0.2 }}
              >
                <img 
                  src="/group.png" 
                  alt="Uncle Nearest Whiskey Collection" 
                  className="bottles-image"
                />
              </motion.div>
              <motion.div
                className="hero-banner"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                HONORING A LEGACY, EMPOWERING TOMORROW.<br />
                JOIN UNCLE NEAREST IN SUPPORTING HBCU HEROES.
              </motion.div>
            </div>
            <motion.div 
              className="hero-actions"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <Button variant="primary" href="#donate">Donate Now</Button>
            </motion.div>
            <motion.p
              className="partner-link"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.7 }}
            >
              <a href="#contact">Partner Account? Click here to donate now.</a>
            </motion.p>
            <motion.div 
              className="tax-notice-hero"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              Donations are processed through HBCU Heroes, a 501(c)(3) nonprofit organization, and are tax-deductible to the extent allowed by law.
            </motion.div>
          </motion.div>
        </motion.div>
      </Container>
    </Section>
  )
}

export default Hero
