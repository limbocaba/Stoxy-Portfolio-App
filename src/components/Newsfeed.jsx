import React from 'react'
import Linegraph from './Linegraph'
import "./Newsfeed.css"
import Timeline from './Timeline'
import { RiMacbookFill } from 'react-icons/ri'
import { BiMovie } from 'react-icons/bi'
import { FaCannabis, FaBitcoin } from 'react-icons/fa'
import { AiOutlineStock } from 'react-icons/ai'

export default function Newsfeed() {
  const popularTopics = [
    "Technology",
    "Top Movies",
    "Upcoming Earnings",
    "Crypto",
    "Cannabis",
    "Healthcare Supplies",
    "Index ETFs",
    "China",
    "Pharma",
  ]
  
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
          <h2>My Wallet</h2>
          <h2>$4.11</h2>
        </div>
        <div className='newsfeed-market-section'>
          <div className="newsfeed-market-box">
            <p>Markets Closed</p>
            <h1>Check back here for updates on the market!</h1>
          </div>
        </div>
        <div className="newsfeed-popularlists-section">
          <div className="newsfeed-popularlists-intro">
            <h1>Popular Lists</h1>
            <p>Show More</p>
          </div>
          <div className="popular-cards">
          <div className='popular-card'>
            <RiMacbookFill className='popular-card-icon' /> 
            <p>Technology</p>
            </div>
            <div className='popular-card'>
              <BiMovie className='popular-card-icon' />
              <p>Top Movies</p>
            </div>
              <div className='popular-card'>
                <FaCannabis className='popular-card-icon' />
                <p>Cannabis</p>
            </div>
              <div className='popular-card'>
                <FaBitcoin className='popular-card-icon' />
                <p>Crypto</p>
            </div>
              <div className='popular-card'>
                <AiOutlineStock className='popular-card-icon' />
                <p>Upcoming Earnings</p>
              </div>
            </div>
          </div>
        </div>
      </div>
  )
}

