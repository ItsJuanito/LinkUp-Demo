import React, { Component } from 'react'
import Link from './Link.js'

export class List extends Component {
  render() {
    return (
      <div className='bg-inherit'>
            {this.props.links.map((link) =>
                    <Link 
                    title={link.title}
                    url={link.url}
                    image={link.image}
                    />
            )}
      </div>
    )
  }
}

export default List