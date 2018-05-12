import React from 'react';
import Row from '../Row';
import ImageCard from './Image.Card';
import Card from '../Card';

class ImageContents extends React.Component{
  render(){
    return (
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
    )
  }
}

export default ImageContents;