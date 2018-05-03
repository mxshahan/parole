import React from 'react';
import Axios from 'axios';
import { connect } from 'react-redux';
import { myContent } from '../../Actions/content';
import Grid from '../Grids/Grid';

class MyContent extends React.Component{
  state = {
    content: false
  }

  componentDidMount() {
    Axios({
      method: 'get',
      url: `/api/content/my`,
      headers: {
        'authorization': localStorage.getItem('auth')
      }
    }).then((res) => {
      // console.log(res.data)
      this.props.myContent(res.data);
      this.setState({
        content: true
      })
      
    }).catch((e) => {
      console.log(e)
    })
  }

  render(){
    console.log(this.props.contents, this.state.content)
    return (
      <div className="content">
        <div className="left-content">
          {this.state.content ? 
            <div className="box">
              <div className="grids">
              {this.props.contents.map((content, key) => {
                return <Grid content={content} key={content._id}/>
              }) }
              </div>
            </div>
          : 'Loading...'}
        </div>
      </div>
    )
  }
}
const mapStateToProps = (state) => ({
  contents: state.content.mycontent
})

const mapDispatchToProps = (dispatch) => ({
  myContent: (data) => dispatch(myContent(data))
})

export default connect(mapStateToProps, mapDispatchToProps)(MyContent);