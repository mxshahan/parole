import React from 'react';
import { Link } from 'react-router-dom'

const Single = () => (
<div className="content">
  <div className="inner-page">
    <div className="searchbar">
      <div className="search-left">
        <p>Latest Video Form VideosTube</p>
      </div>
      <div className="search-right">
        <form>
          <input type="text"/><input type="submit" value="" />
        </form>
      </div>
      <div className="clear"> </div>
    </div>
    <div className="title">
      <h3>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </h3>
      <ul>
        <li><h4>By:</h4></li>
        <li><Link to="#">Author</Link></li>
        <li><Link to="#"><img src="/images/sub.png" title="subscribe" />subscribe</Link></li>
      </ul>
    </div>
    <div className="video-inner">
      <Link to="#"><img src="/images/b11.png" title="videoname" /><span>10:00</span></Link>
    </div>
    <div className="viwes">
      <div className="view-links">
        <ul>
          <li><h4>Share on:</h4></li>
          <li><Link to="#"><img src="/images/f1.png" title="facebook" /></Link></li>
          <li><Link to="#"><img src="/images/t1.png" title="Twitter" /></Link></li>
          <li><Link to="#"><img src="/images/s1.png" title="Google+" /></Link></li>
        </ul>
        <ul className="comment1">
          <li><Link to="#">Comment(1)</Link></li>
          <li><Link to="#"><img src="/images/re.png" title="report" /><span>Report</span></Link></li>
        </ul>
      </div>
      <div className="views-count">
        <p><span>2,500</span> Views</p>
      </div>
      <div className="clear"> </div>
    </div>
    <div className="clear"> </div>
    <div className="video-details">
      <ul>
        <li><p>Uploaded on <Link to="#">June 21, 2013</Link> by <Link to="#">Lorem</Link></p></li>
        <li><span>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</span></li>
      </ul>
      <ul className="other-links">
        <li><Link to="#">youtube.com/videos-tube</Link></li>
        <li><Link to="#">facebook.com/videos-tube</Link></li>
        <li><Link to="#">Twitter.com/videos-tube</Link></li>
      </ul>
    </div>
    <div className="clear"> </div>
    <div className="tags">
      <ul>
        <li><h3>Tags:</h3></li>
        <li><Link to="#">Games</Link> ,</li>
        <li><Link to="#">HD-Videos</Link></li>
      </ul>
    </div>
    <div className="clear"> </div>
    <div className="related-videos">
      <h6>Related-Videos</h6>
    <div className="grids">
      <div className="grid">
        <h3>Consectetur adipisicing elit</h3>
        <Link to="#"><img src="/images/g3.jpg" title="video-name"/></Link>
        <div className="time">
          <span>2:30</span>
        </div>
        <div className="grid-info">
          <div className="video-share">
            <ul>
              <li><Link to="#"><img src="/images/likes.png" title="links"/></Link></li>
              <li><Link to="#"><img src="/images/link.png" title="Link"/></Link></li>
              <li><Link to="#"><img src="/images/views.png" title="Views"/></Link></li>
            </ul>
          </div>
          <div className="video-watch">
            <Link to="#">Watch Now</Link>
          </div>
          <div className="clear"> </div>
          <div className="lables">
            <p>Labels:<Link to="#">Lorem</Link></p>
          </div>
        </div>
      </div>
      <div className="grid">
        <h3>Consectetur adipisicing elit</h3>
        <Link to="#"><img src="/images/g5.jpg" title="video-name"/></Link>
        <div className="time">
          <span>5:10</span>
        </div>
        <div className="grid-info">
          <div className="video-share">
            <ul>
              <li><Link to="#"><img src="/images/likes.png" title="links"/></Link></li>
              <li><Link to="#"><img src="/images/link.png" title="Link"/></Link></li>
              <li><Link to="#"><img src="/images/views.png" title="Views"/></Link></li>
            </ul>
          </div>
          <div className="video-watch">
            <Link to="#">Watch Now</Link>
          </div>
          <div className="clear"> </div>
          <div className="lables">
            <p>Labels:<Link to="#">Lorem</Link></p>
          </div>
        </div>
      </div>
      <div className="grid">
        <h3>Consectetur adipisicing elit</h3>
        <Link to="#"><img src="/images/g4.jpg" title="video-name"/></Link>
        <div className="time">
          <span>2:00</span>
        </div>
        <div className="grid-info">
          <div className="video-share">
            <ul>
              <li><Link to="#"><img src="/images/likes.png" title="links"/></Link></li>
              <li><Link to="#"><img src="/images/link.png" title="Link"/></Link></li>
              <li><Link to="#"><img src="/images/views.png" title="Views"/></Link></li>
            </ul>
          </div>
          <div className="video-watch">
            <Link to="#">Watch Now</Link>
          </div>
          <div className="clear"> </div>
          <div className="lables">
            <p>Labels:<Link to="#">Lorem</Link></p>
          </div>
        </div>
      </div>
    </div>
    </div>
    <div className="clear"> </div>
  </div>
  <div className="right-content">
    <div className="popular">
      <h3>Popular Videos</h3>
      <p><img src="/images/l1.png" title="likes" /> 10,000</p>
      <div className="clear"> </div>
    </div>
    <div className="grid1">
      <h3>Consectetur adipisicing elit</h3>
      <Link to="#"><img src="/images/g7.jpg" title="video-name" /></Link>
      <div className="time1">
        <span>2:50</span>
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
          <Link to="#">Watch Now</Link>
        </div>
        <div className="clear"> </div>
        <div className="lables">
          <p>Labels:<Link to="#">Lorem</Link></p>
        </div>
      </div>
    </div>
        <div className="clear"> </div>
  </div>
  <div className="clear"> </div>
</div>
)

export default Single
