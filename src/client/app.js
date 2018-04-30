import React from 'react'
import ReactDOM from 'react-dom'
import Axios from 'axios'

class App extends React.Component {
  state = {
    data: 'hi'
  }
  componentDidMount () {
    const a = this.state
    Axios.get('./user').then((res) => {
      console.log(res)
    }).catch((e) => {
      console.log(e)
    })
  }

  render () {
    return (
      <div>
        {this.state.data}
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'))
