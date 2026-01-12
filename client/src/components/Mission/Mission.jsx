import React from 'react'
import { motion } from 'framer-motion'
import Container from '../Container/Container'
import Section from '../Section/Section'
import SectionHeading from '../SectionHeading/SectionHeading'
import './Mission.css'

const Mission = () => {
  return (
    <Section id="mission">
      <Container>
        <SectionHeading
          eyebrow="Mission"
          title="Talent Is Everywhere. Opportunity Isn't."
          lead="HBCU students are among the most talented and resilient young leaders in America. Yet too many face financial barriers that interrupt their ability to stay enrolled, gain work experience, and launch successful careers. The Cocktail Challenge was created to bridge that gap—through scholarships, career readiness, mentorship, and emergency support that helps students remain on track and step confidently into their future."
        />
        <div className="mission-cards">
          <motion.div 
            className="white-card"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            whileHover={{ scale: 1.02 }}
          >
            <h3>Our Purpose</h3>
            <p>
              When donors invest in HBCU students, they don't just change one life—they strengthen
              entire communities. This initiative turns community investment into
              scholarships, career development, and opportunities that create economic mobility and
              future leadership.
            </p>
          </motion.div>
          <motion.div 
            className="white-card"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            whileHover={{ scale: 1.02 }}
          >
            <h3>What Makes This Different</h3>
            <p>
              The Cocktail Challenge is more than a fundraising campaign—it's a premium movement
              powered by donors, hospitality partners, and purpose-led brands.
              It transforms everyday moments—cocktails, bottles, and community celebration—into
              measurable student outcomes.
            </p>
          </motion.div>
        </div>
      </Container>
    </Section>
  )
}

export default Mission

