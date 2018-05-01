import React from 'react'
import Grid from '../Components/Grids/Grid'
import CategoryList from '../Components/Categories/CategoryList';

const Category = () => (
  <div className="content">
  <div className="categories">
    <CategoryList/>
    <div className="categories-types">
      <div className="recent-videos">
        <h5><img src="/images/recent.png" alt="" />Recent-videos</h5>
        <div className="grids grids2">
          <Grid/>
          <Grid/>
          <Grid/>
          <Grid/>
          <Grid/>
        </div>

      </div>
      <div className="recent-videos">
        <h5><img src="/images/recent.png" alt="" />Most-View-videos</h5>
        <div className="grids">
          <Grid/>
          <Grid/>
          <Grid/>
        </div>
      </div>
    </div>
  </div>
  <div className="clear"> </div>
  </div>
)

export default Category
