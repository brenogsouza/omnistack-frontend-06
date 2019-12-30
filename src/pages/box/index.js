import React, { Component } from 'react'
import api from '../../services/api'
import logo from '../../assets/logo.svg'

import { MdInsertDriveFile } from 'react-icons/md'
import './styles.css'

export default class Box extends Component {
  constructor (props) {
    super(props)
    this.state = {
      box: {}
    }
  }

  async componentDidMount () {
    const box = this.props.match.params.id
    const response = await api.get(`boxes/${box}`)

    this.setState({
      box: response.data
    })
  }

  render () {
    return (
      <div id='box__container'>
        <header>
          <img src={logo} alt='logo' />
          <h1>{this.state.box.title}</h1>
        </header>
        <ul>
          {this.state.box.files &&
            this.state.box.files.map(file => (
              <li>
                <a href={file.url} className='file__info' target='_blank'>
                  <MdInsertDriveFile size={24} color='#A5Cfff' />
                  <strong>{file.title}</strong>
                </a>{' '}
                <span>{file.createdAt}</span>
              </li>
            ))}
        </ul>
      </div>
    )
  }
}
