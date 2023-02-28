import React, { Component } from 'react'
import profile from './profile.jpg'

export class Info extends Component {
  render() {
    return (
      <div className=''>
        <div className='m-7 flex justify-center text-center'>
          <img
          className='avatar-img'
          alt={this.props.name}
          src={profile}></img>
        </div>
        <div className='mb-2 flex justify-center text-center text-lg text-white font-semi-bold'>
          <h1>@{this.props.uname}</h1>
        </div>
      </div>
    )
  }
}

export default Info