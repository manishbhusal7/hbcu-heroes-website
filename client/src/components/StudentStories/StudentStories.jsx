import React from 'react'
import { motion } from 'framer-motion'
import { FormatQuote } from '@mui/icons-material'
import Container from '../Container/Container'
import Section from '../Section/Section'
import SectionHeading from '../SectionHeading/SectionHeading'
import Card from '../Card/Card'
import Button from '../Button/Button'
import './StudentStories.css'

const StudentStories = () => {
  const [currentIndex, setCurrentIndex] = React.useState(0)
  
  const testimonials = [
    {
      name: 'Manish Bhusal',
      role: 'Senior, Computer Science Major - Fisk University',
      image: 'headshot.jpg',
      alt: 'Manish Bhusal, Fisk University student and scholarship recipient',
      quote: "Receiving a scholarship through the Uncle Nearest HBCU Cocktail Challenge in 2024 was more than financial support it was a powerful reminder that my future matters.",
      story: "Because of the generosity of donors and brand partners who fueled this initiative, I gained access to critical career development resources, mentorship, and professional preparation opportunities that strengthened my technical skills and helped me step into the workforce with confidence. As an HBCU student in Tennessee, home of the distillery, I've seen firsthand how programs like this don't just help students survive — they help us thrive. This scholarship is proof that when people invest in HBCU students, they invest in the next generation of innovators, leaders, and changemakers. I'm deeply grateful to every supporter who gave, and to Uncle Nearest and HBCU Heroes for creating a platform that turns community investment into real opportunity — because this support is truly changing lives."
    },
    {
      name: 'Amir Long',
      role: 'Senior, Business Major - Clark Atlanta University',
      image: 'amir.jpg',
      alt: 'Amir Long, Clark Atlanta University student and scholarship recipient',
      quote: "As a graduating senior, I've learned that success isn't just about what you study, it's about having the resources, guidance, and preparation to translate your education into real-world opportunity.",
      story: "Receiving a scholarship through the Uncle Nearest HBCU Cocktail Challenge helped me stay focused and empowered during one of the most important transitions of my life: preparing to step from the classroom into my career. Because of the generosity of donors and partners who support this initiative, I gained access to professional development resources and opportunities that strengthened my confidence and readiness for what's next. This program doesn't just help students get through college, it helps us walk into the next chapter equipped, prepared, and proud of who we are. What makes this experience even more meaningful is that it inspires me to pay it forward. I want to be part of the next generation of leaders who don't just succeed, we reach back. I'm deeply grateful to everyone who contributes to this campaign that turns community investment into lasting impact. I've got next!"
    },
    {
      name: 'Payton Garcia',
      role: 'Junior, Economics Major - Howard University',
      image: 'Payton.png',
      alt: 'Payton Garcia, Howard University student and scholarship recipient',
      quote: "Receiving a scholarship through the Uncle Nearest HBCU Cocktail Challenge wasn't just financial support, it felt like recognition.",
      story: "I've made it a priority to show up consistently for HBCU Heroes career prep webinars and professional development sessions because I'm committed to becoming the strongest version of myself academically, professionally, and personally. This scholarship reminded me that hard work doesn't go unnoticed, and that there are donors and partners willing to invest in students who are actively doing the work to prepare for success. That kind of support gives you momentum, it helps you stay focused, keep building, and move forward with confidence. I'm grateful to everyone who contributes to this initiative, and to Uncle Nearest and HBCU Heroes for creating a campaign that doesn't just provide scholarships, it rewards commitment and helps students turn preparation into opportunity."
    }
  ]

  const currentTestimonial = testimonials[currentIndex]

  return (
    <Section id="stories">
      <Container>
        <SectionHeading
          eyebrow="Student Stories"
          title="Impact Stories: What Your Support Makes Possible"
        />
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -50 }}
          transition={{ duration: 0.5 }}
        >
          <Card className="testimonial" hover={false}>
            <div className="quote-icon">
              <FormatQuote sx={{ fontSize: 48, color: 'rgba(200, 163, 90, 0.3)' }} />
            </div>
            <div className="t-head">
              <div className="t-avatar">
                <img src={currentTestimonial.image} alt={currentTestimonial.alt} />
              </div>
              <div className="t-meta">
                <strong>{currentTestimonial.name}</strong>
                <span>{currentTestimonial.role}</span>
              </div>
            </div>
            <div className="pull">{currentTestimonial.quote}</div>
            <div className="t-body">{currentTestimonial.story}</div>
          </Card>
        </motion.div>
        <div className="carousel-dots">
          {testimonials.map((_, idx) => (
            <button
              key={idx}
              className={`dot ${idx === currentIndex ? 'active' : ''}`}
              onClick={() => setCurrentIndex(idx)}
              aria-label={`Go to story ${idx + 1}`}
            />
          ))}
        </div>
      </Container>
    </Section>
  )
}

export default StudentStories
