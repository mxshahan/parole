import React from 'react';
import Row from '../Row';
import MyImageCard from './MyImage.Card';
import Loader from '../Loader';
import Card from '../Card';


class MyVideos extends React.Component{
  render(){
    return (
      <div className="col-md-9">
        <Row>
          <div className="col-md-4">
            <Card/>
          </div>
          <div className="col-md-4">
            <Card/>
          </div>
          <div className="col-md-4">
            <Card/>
          </div>
          <div className="col-md-4">
            <Card/>
          </div>
          <div className="col-md-4">
            <Card/>
          </div>
          <div className="col-md-4">
            <Card/>
          </div>
        </Row>
        <Loader/>
      </div>
    )
  }
}

export default MyVideos;