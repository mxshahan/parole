import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => (
<div className="footer">
  <div className="wrap"> 
    <div className="box1">
      <h4>Ur's Account</h4>
      <ul>
        <li><Link to="#">My Channel</Link></li>
        <li><Link to="#">Subscription</Link></li>
        <li><Link to="#">Locations</Link></li>
        <li><Link to="#">Favourites</Link></li>
        <li><Link to="#">Add</Link></li>
        <li><Link to="#">Ur-specials</Link></li>
        <li><Link to="#">Submission Rules</Link></li>
      </ul>
    </div>
    <div className="box1">
      <h4>Policy & Terms</h4>
      <ul>
        <li><Link to="#">Terms & Conditions</Link></li>
        <li><Link to="#">Privacy Policy</Link></li>
        <li><Link to="#">Submission Rules</Link></li>
        <li><Link to="#">Company Buzz</Link></li>
        <li><Link to="#">My Staff</Link></li>
        <li><Link to="#">Moodle Hosting</Link></li>
        <li><Link to="#">OpenCart Hosting</Link></li>
      </ul>
    </div>
    <div className="box1">
      <h4>Community</h4>
      <ul>
        <li><Link to="#">Standard Support</Link></li>
        <li><Link to="#">Premier Support</Link></li>
        <li><Link to="#">Support Center</Link></li>
        <li><Link to="#">Host Affiliate</Link></li>
        <li><Link to="#">Infographics</Link></li>
        <li><Link to="#">indian Hosting</Link></li>
        <li><Link to="#">Green Web Hosting</Link></li>
      </ul>
    </div>
    <div className="box1">
      <div className="hide-box">
        <h4>About Us</h4>
        <ul>
          <li><Link to="#">Contact Us</Link></li>
          <li><Link to="#">Terms of Service</Link></li>
          <li><Link to="#">Privacy Policy</Link></li>
          <li><Link to="#">Blog</Link></li>
          <li><Link to="#">Guarantee</Link></li>
          <li><Link to="#">Link to Us</Link></li>
          <li><Link to="#">We're Hiring</Link></li>
        </ul>
      </div>
    </div>
    <div className="box1">
      <h4>Stay in touch on</h4>
      <ul className="social">
        <li><img src="images/facebook.png" title="facebook"/><Link to="#">Facebook</Link></li>
        <li><img src="images/twitter.png" title="twitter"/><Link to="#">Twitter</Link></li>
        <li><img src="images/gplus.png" title="google+"/><Link to="#">Google+</Link></li>
      </ul>
    </div>
    <div className="clear"> </div>
	</div> {/* End of Wrap */}
</div> /*End of Footer*/
)

export default Footer
