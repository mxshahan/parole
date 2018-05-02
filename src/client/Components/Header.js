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
      <Link to="/"><img src="/images/logo.png" title="logo" /></Link>
    </div>
    {/* End-Logo */}
    {/* start-top-nav */}
    <div className="top-nav">
      <ul>
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/category">Categories</NavLink></li>
        <li><NavLink to="/about">About</NavLink></li>
        <li><NavLink to="/contact">Contact</NavLink></li>
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
