import React from 'react'
import { GiRobinHoodHat } from 'react-icons/gi'
import "./Header.css"

export default function Header() {
  return (
    <div className='header-wrapper'>
      {/* logo */}
      <div className=' header-logo'>
        <GiRobinHoodHat className='logo' />
      </div>
      {/* search */}
      <div className='header-search'>
        <div className='header-search-container'>
          <input type="text" placeholder='Search...' className='search-box' />
        </div>
      </div>
      {/* menu items */}
      <div className='header-menu-items'>
        <a href='#' className='stock-item'>Free Stocks</a>
        <a href='#'>Portfolio</a>
        <a href='#'>Cash</a>
        <a href='#'>Messages</a>
        <a href='#'>Account</a>
      </div>
    </div>
  )
}

