import React from 'react';
import { Link } from 'react-router-dom'
// import Model from './Model';

const Card = ({ data }) => (
  <div className="card bg-light text-center mb-4" id="card">
    <div className="card-body p-0">
      <img src="/images/g5.jpg" className="img-fluid" alt="Video"/>
    </div> 
    <div id="preview">
      <span><i className="fas fa-play-circle fa-3x"></i></span>
    </div>
  </div>
)

export default Card;