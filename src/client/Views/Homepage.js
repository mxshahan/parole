import React from 'react'
import Grid from '../Components/Grids/Grid';
import Sidebar from '../Components/Sidebar';

const Homepage = () => (
<div className="content">
  <div className="left-content">
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
    <div className="box">
      <div className="grids">
        <Grid/>
        <Grid/>
        <Grid/>
        <Grid/>
        <Grid/>
      </div>
    </div>
    <div className="clear"> </div>
      <ul className="dc_pagination dc_paginationA dc_paginationA03">
        <li><a href="#" className="first">First</a></li>
        <li><a href="#" className="previous">Previous</a></li>
        <li><a href="#">1</a></li>
        <li><a href="#">2</a></li>
        <li><a href="#" className="current">3</a></li>
        <li><a href="#">4</a></li>
        <li><a href="#">5</a></li>
        <li><a href="#" className="next">Next</a></li>
        <li><a href="#" className="last">Last</a></li>
      </ul>
    <div className="clear"> </div>
  </div>
  <Sidebar/>
  <div className="clear"> </div>  
</div>
)
export default Homepage
