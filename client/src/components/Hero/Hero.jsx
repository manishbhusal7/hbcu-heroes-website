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
            <motion.div 
              className="kicker"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              Honoring a Legacy, Empowering Tomorrow.
            </motion.div>
            <div className="hero-title-section">
              <motion.div 
                className="hero-logos"
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.1 }}
              >
                {/* <img src="/unlogo.png" alt="Uncle Nearest" className="hero-brand-logo" /> */}
                {/* <span className="hero-logo-separator">×</span> */}
                {/* <img src="/hbcu-heroes-logo.jpg" alt="HBCU Heroes" className="hero-brand-logo" /> */}
              </motion.div>
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                Raise A Glass. <span className="title-highlight">Raise A Generation.</span>
              </motion.h1>
              <motion.div 
                className="hero-bottles"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1, delay: 0.3 }}
                whileHover={{ scale: 1.02 }}
              >
                <motion.img 
                  src="/group.png" 
                  alt="Uncle Nearest Whiskey Collection" 
                  className="bottles-image"
                  whileHover={{ y: -8, scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                />
                <motion.img 
                  src="/cocktailchallenge.png" 
                  alt="Cocktail Challenge Logo" 
                  className="cocktail-challenge-logo"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.5 }}
                  whileHover={{ scale: 1.05 }}
                />
              </motion.div>
            </div>
            <motion.p
              className="hero-highlight-text"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              The <strong>Uncle Nearest HBCU Cocktail Challenge X HBCU Heroes nitiative</strong> unites donors,
              hospitality partners, and purpose-driven brands to fund <strong>scholarships, career readiness, and real-world
              opportunity</strong> for HBCU students nationwide.
            </motion.p>
            <motion.p
              className="hero-highlight-text"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              In just two campaign years, this movement helped raise <strong>$2.4M+</strong> to
              support HBCU students—and in 2026, we're returning stronger than ever.
            </motion.p>
            <motion.div 
              className="hero-actions"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <Button variant="primary" href="#donate">Donate Now as an Individual</Button>
              <Button variant="secondary" href="#contact">Donate Now as a Partner</Button>
            </motion.div>
            <motion.div 
              className="microcopy tax-deductible-notice"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              <strong>Donations are processed through HBCU Heroes, a 501(c)(3) nonprofit organization, and are tax-deductible to the extent allowed by law.</strong>
            </motion.div>
            <motion.div 
              className="trustbar"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.9 }}
            >
              {trustItems.map((item, idx) => (
                <motion.div
                  key={idx}
                  className="chip"
                  whileHover={{ scale: 1.02, y: -4 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="chip-icon">{item.icon}</div>
                  <strong>{item.title}</strong>
                  <span>{item.description}</span>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </motion.div>
      </Container>
    </Section>
  )
}

export default Hero
