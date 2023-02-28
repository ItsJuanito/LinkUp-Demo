import React, { Component } from 'react'

export class Link extends Component {
    render() {
        return (
            <>
                <a 
                    className='flex w-full items-center p-1 rounded-md 
                    hover:scale-110 transition-all border border-gray-300 
                    mb-4'
                    id='link'
                    href={this.props.url}
                >
                    <div className="flex text-center w-full">
                        <img 
                            src={this.props.image}
                            alt={this.props.title}
                            width={40}
                            height={40}
                            className='rounded-sm'
                        >
                        </img>
                        <h3 
                            className='flex font-semi-bold justify-center items-center w-full text-gray-700 -ml-10'
                        >
                            {this.props.title}
                        </h3>
                    </div>
                </a>
            </>
        )
    }
}

export default Link