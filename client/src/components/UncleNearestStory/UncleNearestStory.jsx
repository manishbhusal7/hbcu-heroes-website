import React from 'react'
import { motion } from 'framer-motion'
import Container from '../Container/Container'
import Section from '../Section/Section'
import SectionHeading from '../SectionHeading/SectionHeading'
import './UncleNearestStory.css'

const UncleNearestStory = () => {
  return (
    <Section id="story" tight>
      <Container>
        <SectionHeading
          eyebrow="The Uncle Nearest Story"
          title="Founded on Legacy, Building the Future"
        />
        <p style={{ fontSize: '17px', lineHeight: '1.7', marginBottom: '32px', textAlign: 'left', color: 'rgba(255, 255, 255, 0.9)' }}>
          <a href="https://unclenearest.com" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--gold)', textDecoration: 'underline', fontWeight: '600' }}>Uncle Nearest Premium Whiskey</a> honors the world's first-known African American master distiller, Nearest Green. It was the first spirits brand in the world to be named after a Black American. The portfolio is the World's Most Awarded Straight Bourbon and Tennessee Whiskey of 2019 to 2025.
        </p>
        <div className="video-wrapper-full">
          <motion.div 
            className="video-container"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, ease: [0.6, -0.05, 0.01, 0.99] }}
          >
            <iframe
              src="https://player.vimeo.com/video/989034284?h=a0b1c2d3e4&title=0&byline=0&portrait=0"
              width="100%"
              height="100%"
              frameBorder="0"
              allow="autoplay; fullscreen; picture-in-picture"
              allowFullScreen
              title="Uncle Nearest x HBCU Heroes | Cocktail Challenge"
            ></iframe>
          </motion.div>
        </div>
      </Container>
    </Section>
  )
}

export default UncleNearestStory

