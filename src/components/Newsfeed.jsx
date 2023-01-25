import React from 'react'
import Linegraph from './Linegraph'
import "./Newsfeed.css"
import Timeline from './Timeline'

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
            <Timeline />
          </div>
        </div>
        <div className="newsfeed-buying-section">
          <h2>Buying Power</h2>
          <h2>$4.11</h2>
        </div>
        <div className='newsfeed-market-section'>
          <div className="newsfeed-market-box">
            <p>Markets Closed</p>
            <h1>Check back here for updates on the market!</h1>
          </div>
          </div>
      </div>
      </div>
  )
}

