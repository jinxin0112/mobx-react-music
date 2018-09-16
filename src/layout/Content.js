import React, { Component } from 'react';
export default class Content extends Component {
    render(){
        return (
            <div>
                {this.props.content}
            </div>
        )
    }    
}