import React from 'react';
import Container from '../Components/Container';
import Search from '../Components/Videos/Search';
import Row from '../Components/Row';
import Contents from '../Components/Videos/Content';
import FeatureNav from '../Components/Homepage/FeatureNav';
import Counter from '../Components/Homepage/Counter';

class Videos extends React.Component{

  render(){
    return (
    <div className="content"> 
      <section className="videos">
        <Container>
          <Search/>
          <Row>
            <div className="col-md-3">
              <FeatureNav/>
            </div>
            <div className="col-md-9">
              <Contents/>
            </div>
          </Row>
        </Container>
      </section>
      <Counter/>
    </div>
    )
  }
}

export default (Videos)

