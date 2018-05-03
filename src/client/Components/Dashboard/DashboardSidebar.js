import React from 'react';
import { Link } from 'react-router-dom'

const DashboardSidebar = () => (
    <div className="content-sidebar">
      <h4><img src="/images/fi.png" alt="" />Member Area</h4>
      <ul> 
        <li><Link to="/dashboard">Dashboard</Link></li>
        <li><Link to="/dashboard/post">Add New Content</Link></li>
        <li><Link to="/dashboard/account">Account Setting</Link></li>
        <li><Link to="/dashboard/mycontent">My Content</Link></li>
      </ul>
    </div>
)

export default DashboardSidebar;