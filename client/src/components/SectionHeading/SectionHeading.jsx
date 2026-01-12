import React from 'react'
import './SectionHeading.css'

const SectionHeading = ({ eyebrow, title, lead, className = '' }) => {
  return (
    <div className={className}>
      {eyebrow && <div className="eyebrow">{eyebrow}</div>}
      {title && <h2>{title}</h2>}
      {lead && <p className="lead">{lead}</p>}
    </div>
  )
}

export default SectionHeading

