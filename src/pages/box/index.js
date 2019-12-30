import React, { Component } from 'react'

import logo from '../../assets/logo.svg'
import { MdInsertDriveFile } from 'react-icons/md'
import './styles.css'

export default class Box extends Component {
  render () {
    return (
      <div id='box__container'>
        <header>
          <img src={logo} alt='logo' />
          <h1>TESTE</h1>
        </header>
        <ul>
          <li>
            <a className='file__info' href="">
              <MdInsertDriveFile size={24} color='#A5Cfff' />
              <strong>desafio.pdf</strong>
            </a>
            <span>há 3 minutos atrás</span>
          </li>
          <li>
            <a className='file__info' href="">
              <MdInsertDriveFile size={24} color='#A5Cfff' />
              <strong>desafio.pdf</strong>
            </a>
            <span>há 3 minutos atrás</span>
          </li>
        </ul>
      </div>
    )
  }
}
