import React, { Component } from 'react'
import api from '../../services/api'
import logo from '../../assets/logo.svg'

import { MdInsertDriveFile } from 'react-icons/md'
import socket from 'socket.io-client'
import Dropzone from 'react-dropzone'
import './styles.css'

export default class Box extends Component {
  constructor (props) {
    super(props)
    this.state = {
      box: {}
    }
  }

  async componentDidMount () {
    this.subscribeToNewFiles()

    const box = this.props.match.params.id
    const response = await api.get(`boxes/${box}`)

    this.setState({
      box: response.data
    })
  }
  subscribeToNewFiles = () => {
    const box = this.props.match.params.id
    const io = socket('https://omni-06-reactbox.herokuapp.com')

    io.emit('connectRoom', box)
    io.on('file', data => {
      this.setState({
        box:{...this.state.box, files: [data, ...this.state.box.files, ]}
      })
    })
  }

  handleUpload = (files) => {
    files.forEach(file => {
      const data = new FormData()
      const box = this.props.match.params.id

      data.append('file', file)

      api.post(`boxes/${box}/files`, data)
    })
  }

  render () {
    return (
      <div id='box__container'>
        <header>
          <img src={logo} alt='logo' />
          <h1>{this.state.box.title}</h1>
        </header>

        <Dropzone onDropAccepted={this.handleUpload}>
          {({ getRootProps, getInputProps }) => (
            <div className='upload' {...getRootProps()}>
              <input {...getInputProps()} />
              <p>Arraste arquivos ou clique aqui...</p>
            </div>
          )}
        </Dropzone>

        <ul>
          {this.state.box.files &&
            this.state.box.files.map(file => (
              <li key={file._id}>
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
