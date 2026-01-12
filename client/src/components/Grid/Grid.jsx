import React from 'react'
import './Grid.css'

const Grid = ({ children, columns = 2, className = '' }) => {
  const gridClass = `grid-${columns}`
  return (
    <div className={`${gridClass} ${className}`.trim()}>
      {children}
    </div>
  )
}

export default Grid

