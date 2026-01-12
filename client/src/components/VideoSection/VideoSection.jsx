import React from 'react'
import { motion } from 'framer-motion'
import Container from '../Container/Container'
import Section from '../Section/Section'
import './VideoSection.css'

const VideoSection = () => {
  return (
    <Section id="bottom-video" className="video-section-wrapper">
      <Container>
        <motion.div 
          className="bottom-video-container"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h2 
            className="video-section-title"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            See Our Impact in Action
          </motion.h2>
          <motion.div 
            className="video-wrapper-bottom"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <iframe
              src="https://player.vimeo.com/video/989034284?h=a0b1c2d3e4&title=0&byline=0&portrait=0"
              width="100%"
              height="100%"
              frameBorder="0"
              allow="autoplay; fullscreen; picture-in-picture"
              allowFullScreen
              title="Uncle Nearest x HBCU Heroes Video"
            ></iframe>
          </motion.div>
        </motion.div>
      </Container>
    </Section>
  )
}

export default VideoSection

