import React, { Component } from 'react'

export default class BoxClass extends Component {

  // lifecycle 시험
  componentWillUnmount() {
    console.log("BYE~");
  }
  render() {
    return (
      <div>
        Box{this.props.num}
      </div>
    )
  }
}
