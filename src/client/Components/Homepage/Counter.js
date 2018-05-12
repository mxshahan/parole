import React from 'react';
import '../../Styles/counter.scss';
import Container from '../Container';
import Row from '../Row';
import CounterCard from './CounterCard';
import conf from '../../config';


class Counter extends React.Component{
  render(){
    return (
      <section className="py-5 bg-blue">
        <div className="wrapper">
        <Container>
          <Row>
            <CounterCard start={2000} end={18000} title="Subject Matter Expertise" icon="code"/>
            <CounterCard start={2100} end={32000} title="New Videos Daily" icon="video"/>
            <CounterCard start={2400} end={50000} title="Gif's/Meme Daily" icon="spinner"/>
            <CounterCard start={2100} end={100000} title="Shares Per Day" icon="share-alt"/>
          </Row>
        </Container>
        </div> 
      </section>
    )
  }
}

export default Counter;