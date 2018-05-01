import React from 'react';
import { Link } from 'react-router-dom'


const Grid = () => (
  <div className="grid">
  <h3>Consectetur adipisicing elit</h3>
  <Link to={"/single/121212"}><img src="/images/g1 copy.png" title="video-name" /></Link>
  <div className="time">
    <span>00:10</span>
  </div>
  <div className="grid-info">
    <div className="video-share">
      <ul>
        <li><Link to="#"><img src="/images/likes.png" title="links" /></Link></li>
        <li><Link to="#"><img src="/images/link.png" title="Link" /></Link></li>
        <li><Link to="#"><img src="/images/views.png" title="Views" /></Link></li>
      </ul>
    </div>
    <div className="video-watch">
      <Link to="single.html">Watch Now</Link>
    </div>
    <div className="clear"> </div>
    <div className="lables">
      <p>Labels:<Link to="categories.html">Lorem</Link></p>
    </div>
  </div>
</div>
)

export default Grid
