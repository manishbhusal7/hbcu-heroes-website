import React from 'react'
import { motion } from 'framer-motion'
import './Card.css'

const Card = ({ children, className = '', style = {}, hover = true }) => {
  const cardContent = (
    <div className={`card ${className}`.trim()} style={style}>
      {children}
    </div>
  )

  if (hover) {
    return (
      <motion.div
        whileHover={{ y: -4, scale: 1.01 }}
        transition={{ duration: 0.3, ease: [0.6, -0.05, 0.01, 0.99] }}
      >
        {cardContent}
      </motion.div>
    )
  }

  return cardContent
}

export default Card
