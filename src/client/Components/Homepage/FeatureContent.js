import React, {Component} from 'react';
import OwlCarousel from 'react-owl-carousel';
import Container from '../Container';
import Row from '../Row';
import Card from '../Card';
import FeatureNav from './FeatureNav';

const FeatureContent = () => (
  <section className="normal bg-light py-5 feature-content">
  <Container>
    <Row>
      <div className="col-md-3">
        <FeatureNav/>
      </div>
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
      </div>
    </Row>
    <div className="text-center">
      <button className="btn btn-pri mt-4 px-4">Start Sharing Now</button>
    </div>
  </Container>
</section>
)
export default FeatureContent;