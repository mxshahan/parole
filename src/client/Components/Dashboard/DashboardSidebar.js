import React from 'react';
import { NavLink } from 'react-router-dom'

const DashboardSidebar = () => (
    <div className="content-sidebar">
      <h4><img src="/public/images/fi.png" alt="" />Member Area</h4>
      <ul> 
        <li><NavLink exact={true} activeClassName="active" to="/dashboard">Dashboard</NavLink></li>
        <li><NavLink activeClassName="active"  to="/dashboard/post">Add New Content</NavLink></li>
        <li><NavLink activeClassName="active" to="/dashboard/account">Account Setting</NavLink></li>
        <li><NavLink activeClassName="active" to="/dashboard/mycontent">My Content</NavLink></li>
      </ul>
    </div>
)

export default DashboardSidebar;