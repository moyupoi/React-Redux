import React, { Component } from 'react'

import s from '../assets/Vitae.scss'
import state3 from '../assets/state3.png'

class Vitae extends Component {
  constructor (props) {
    super(props)
    this.state = {
      vitaes: []
    }
  }

  componentDidMount () {

  }

  componentWillUnmount () {

  }

  componentWillReceiveProps (nextProps) {

  }

  render () {
    console.log(s)
    return (
      <div className={s.vitaeContain}>
        测试
        <img src={state3} />
      </div>
    )
  }
}

export default Vitae
