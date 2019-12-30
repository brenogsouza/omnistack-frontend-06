import React, { Component } from 'react'

import logo from '../../assets/logo.svg'
import './styles.css'
import api from '../../services/api'

export default class Main extends Component {
  constructor(props) {
    super(props)
    this.state = {
      newBox: ''  
    }
  }

  handleSubmit = async e => {
    e.preventDefault()
    const response = await api.post('boxes', {
      title: this.state.newBox
    })
    console.log(response.data)
  }

  handleInputChange = e => {
    this.setState({
      newBox: e.target.value
    })
  }

  render () {
    return (
      <div id='main__container'>
        <form onSubmit={this.handleSubmit}>
          <img src={logo} alt='logo' />
          <input 
            placeholder='Criar um box' 
            onChange={this.handleInputChange}
            value={this.state.newBox}
          />
          <button type='submit'>Criar</button>
        </form>
      </div>
    )
  }
}
