import React from 'react'
import CountUp from 'react-countup';

class CounterCard extends React.Component{
  render(){
    const props = this.props;    
    return (
      <div className="col-md-3 text-center">
        <div className="counter card p-2">
          <i className={`fa fa-${props.icon} fa-2x p-3`}></i>
          <h2 className="timer count-title count-number">
            <CountUp start={props.start} end={props.end} />
          </h2>
          <p className="count-text ">{props.title}</p>
        </div>
      </div>
    )
  }
}

export default CounterCard;