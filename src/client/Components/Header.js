import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import { connect } from 'react-redux'
import { LogoutUser } from '../Actions/auth';
const Header = ({isAuthenticated, LogoutUser, ...props}) => (
  // start-Header
  <div className="header">
    {isAuthenticated ?
    <div className="auth">
      <Link to="/dashboard">Dashboard</Link>
      <Link to="#" onClick={() => {
        localStorage.clear();
        LogoutUser();
      }}>Logout</Link>
    </div>
    :
    <div className="auth">
      <Link to="/login">Login</Link>
      <Link to="/register">Register</Link>
    </div> 
    }
    {/* start-Logo */}
    <div className="logo">
      <Link to="/"><img src="/public/images/logo.png" title="logo" /></Link>
    </div>
    {/* End-Logo */}
    {/* start-top-nav */}
    <div className="top-nav">
      <ul>
        <li><NavLink activeClassName="active" to="/">Home</NavLink>
          <p>Homepage</p>
        </li>
        <li><NavLink activeClassName="active" to="/category">Categories</NavLink>
          <p>All Categories</p>
        </li>
        <li><NavLink activeClassName="active" to="/about">About</NavLink>
          <p>About US</p>
        </li>
        <li><NavLink activeClassName="active" to="/contact">Contact</NavLink>
          <p>Contact Us</p>
        </li>
        <li><NavLink activeClassName="active" to="/order">Order Now</NavLink>
          <p>Order Custom Video</p>
        </li>
      </ul>
    </div>
    <div className="clear"> </div>
    {/* End-top-nav */}
  </div>
  // End-Header
)
const mapStateToProps = (state) => ({
  isAuthenticated: !!state.auth.token
})

const mapDispatchToProps = (dispatch) => ({
  LogoutUser: () => dispatch(LogoutUser())
})
export default connect(mapStateToProps, mapDispatchToProps)(Header)
