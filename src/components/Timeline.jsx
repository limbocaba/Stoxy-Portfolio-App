import React from 'react'
import "./Timeline.css"

function Timeline() {
  return (
    <div className='timeline-container'>
      <div className="timeline-buttons-container"></div>
      <div className="timeline-button">LIVE</div>
      <div className="timeline-button">1D</div>
      <div className="timeline-button">1W</div>
      <div className="timeline-button">3M</div>
      <div className="timeline-button">1Y</div>
      <div className="timeline-button">ALL</div>
    </div>
  )
}

export default Timeline