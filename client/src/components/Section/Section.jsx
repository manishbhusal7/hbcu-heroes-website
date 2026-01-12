import React from 'react'
import './Section.css'

const Section = ({ 
  children, 
  id, 
  className = '', 
  tight = false, 
  noBorder = false 
}) => {
  const classes = [
    'section',
    tight && 'tight',
    noBorder && 'no-border',
    className
  ].filter(Boolean).join(' ')

  return (
    <section id={id} className={classes}>
      {children}
    </section>
  )
}

export default Section

