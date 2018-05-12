import React from 'react';
import { NavLink } from 'react-router-dom';

const FeatureNav = () => (
  <ul className="nav flex-column bg-white feature-nav px-2 py-4">
    <li className="nav-item">
      <NavLink activeClassName="active" className="nav-link text-dark" to="#">Real Estate</NavLink>
    </li>
    <li className="nav-item">
      <NavLink activeClassName="active" className="nav-link text-dark" to="#">Education</NavLink>
    </li>
    <li className="nav-item">
      <NavLink activeClassName="active" className="nav-link text-dark" to="#">Entertainment</NavLink>
    </li>
    <li className="nav-item">
      <NavLink activeClassName="active" className="nav-link text-dark" to="#">Health/Fitness</NavLink>
    </li>
    <li className="nav-item">
      <NavLink activeClassName="active" className="nav-link text-dark" to="#">Entertainment</NavLink>
    </li>
    <li className="nav-item">
      <NavLink activeClassName="active" className="nav-link text-dark" to="#">IT/Technology</NavLink>
    </li>
    <li className="nav-item">
      <NavLink activeClassName="active" className="nav-link text-dark" to="#">Finance/Investment</NavLink>
    </li>
    <li className="nav-item">
      <NavLink activeClassName="active" className="nav-link text-dark" to="#">Others</NavLink>
    </li>
  </ul>
)

export default FeatureNav;