import React from 'react';
import Axios from 'axios';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';

import Grid from '../Components/Grids/Grid';
import Sidebar from '../Components/Sidebar';
import { setContent } from '../Actions/content';

class Homepage extends React.Component{
  state = {
    content: false,
    data: ''
  }

  componentDidMount() {
    Axios.get('/api/content/').then((res) => {
      this.props.setContent(res.data);
      this.setState({
        content: true
      })
    }).catch((e) => {
      console.log('error found in ./api/content/', e);
    })
  }

  render(){
    return (
    <div className="content">
        <div className="left-content">
          <div className="searchbar">
            <div className="search-left">
              <p>Latest Video Form VideosTube</p>
            </div>
            {/* <div className="search-right">
              <form>
                <input type="text"/>
                <button onClick={(e) => {
                  e.preventDefault()
                }}><i className="fa fa-search"></i></button>
              </form>
            </div> */}
            <div className="clear"> </div>
          </div>
        {this.state.content ? 
          <div className="box">
            <div className="grids">
            {this.props.allContent.map((content, key) => {
              return <Grid content={content} key={content._id}/>
            }) }
            </div>
          </div>
        : 'Loading...'}
          {/* <div className="clear"> </div>
            <ul className="dc_pagination dc_paginationA dc_paginationA03">
              <li><a href="#" className="first">First</a></li>
              <li><a href="#" className="previous">Previous</a></li>
              <li><NavLink to="/?p=1" activeClassName="current">1</NavLink></li>
              <li><NavLink to="/?p=2" activeClassName="current">2</NavLink></li>
              <li><NavLink to="" activeClassName="current">3</NavLink></li>
              <li><NavLink to="" activeClassName="current">4</NavLink></li>
              <li><a href="#" className="next">Next</a></li>
              <li><a href="#" className="last">Last</a></li>
            </ul>
          */}
          <div className="clear"> </div> 
        </div>
      <Sidebar/>
      <div className="clear"> </div>  
    </div>
    )
  }
}
const mapStateToProps = (state) => ({
  allContent: state.content.all
})

const mapDispatchToProps = (dispatch) => ({
  setContent: (body) => dispatch(setContent(body))
})

export default connect(mapStateToProps, mapDispatchToProps)(Homepage)

