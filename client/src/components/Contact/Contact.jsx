import React, { useState } from 'react'
import { motion } from 'framer-motion'
import Container from '../Container/Container'
import Section from '../Section/Section'
import Button from '../Button/Button'
import './Contact.css'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle form submission
    console.log('Form submitted:', formData)
  }

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  return (
    <Section id="contact">
      <Container>
        <motion.div 
          className="contact-container"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="contact-header">
            <p className="contact-eyebrow">CONTACT</p>
            <h2>Get In Touch</h2>
            <p className="contact-lead">
              Have questions about donating, partnerships, or how you can support HBCU students? Send us a message and we'll get back to you.
            </p>
          </div>

          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-row">
              <div className="form-group">
                <label>Your Name *</label>
                <input
                  type="text"
                  name="name"
                  placeholder="Manish"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <label>Email Address *</label>
                <input
                  type="email"
                  name="email"
                  placeholder="your@email.com"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            <div className="form-group">
              <label>Subject *</label>
              <select
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
              >
                <option value="">Select a topic...</option>
                <option value="partnership">Partnership Inquiry</option>
                <option value="donation">Donation Question</option>
                <option value="toolkit">Request Partner Toolkit</option>
                <option value="general">General Question</option>
                <option value="other">Other</option>
              </select>
            </div>

            <div className="form-group">
              <label>Message *</label>
              <textarea
                name="message"
                placeholder="Tell us how we can help..."
                value={formData.message}
                onChange={handleChange}
                rows="4"
                required
              />
            </div>

            <Button variant="primary" type="submit" style={{ width: '100%', padding: '12px 20px', fontSize: '15px' }}>
              Send Message
            </Button>
          </form>
        </motion.div>
      </Container>
    </Section>
  )
}

export default Contact

