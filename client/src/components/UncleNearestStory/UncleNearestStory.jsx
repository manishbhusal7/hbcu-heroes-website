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
          lead="Founded on the legacy of Nearest Green, the first known African-American master distiller, Uncle Nearest honors history while building the future."
        />
<div className="story-content">
          <motion.div 
            className="video-container"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, ease: [0.6, -0.05, 0.01, 0.99] }}
            whileHover={{ scale: 1.02 }}
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
          <motion.div 
            className="story-text"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, ease: [0.6, -0.05, 0.01, 0.99] }}
            whileHover={{ scale: 1.02 }}
          >
            <p>
              Since 2016, the Nearest Green Foundation has provided full scholarships to Nearest Green's descendants attending HBCUs including Fisk University, Spelman College, and Clark Atlanta University.
            </p>
            <p>
              Now, we're expanding our impact to every accredited HBCU in America—and we need your help.
            </p>
          </motion.div>
        </div>
      </Container>
    </Section>
  )
}

export default UncleNearestStory

