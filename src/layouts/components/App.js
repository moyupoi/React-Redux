import React, { Component } from 'react'

class App extends Component {
  render () {
    return (
      <div>
        <div>App</div>
        <div className='container content'>
          {this.props.children}
        </div>
      </div>
    )
  }
}

export default App
