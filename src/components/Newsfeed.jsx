import React from 'react'
import Linegraph from './Linegraph'
import "./Newsfeed.css"

export default function Newsfeed() {
  return (
    <div className=' newsfeed'>
      <div className=' newsfeed-container'>
        <div className='newsfeed-chart-section'>
          <div className='newsfeed-portfolio'>
            <h1>$121,596</h1>
            <p>$37.83 (+0.08%) Today</p>
          </div>
          <div className=' newsfeed-chart'>
            <Linegraph />
          </div>
        </div>

      </div>
      </div>
  )
}

