import React from 'react'
import { Link, NavLink } from 'react-router-dom'

const Header = () => (
  // start-Header
  <div className="header">
    {/* start-Logo */}
    <div className="logo">
      <Link to="index.html"><img src="images/logo.png" title="logo" /></Link>
    </div>
    {/* End-Logo */}
    {/* start-top-nav */}
    <div className="top-nav">
      <ul>
        <li><NavLink to="/">Home</NavLink><p>My Frontpage</p></li>
        <li><NavLink to="/about">About</NavLink><p>About this blog</p></li>
        <li><NavLink to="/category">Categories</NavLink><p>Be Ur Self</p></li>
        <li><NavLink to="/">Economics</NavLink><p>Human Needs</p></li>
        <li><NavLink to="/">Health</NavLink><p>Take A Trip</p></li>
        <li><NavLink to="/">Contact</NavLink><p>Leave Messages</p></li>
      </ul>
    </div>
    <div className="clear"> </div>
    {/* End-top-nav */}
  </div>
  // End-Header
)

export default Header