import React, { Component } from "react";

class Counter extends Component {
  render() {
    console.log("Rendering: Counter");
    return (
      <div>
        <button onClick={this.props.inc}>+</button>
        <span>Mars:{this.props.count}</span>
        <button onClick={this.props.dec}>-</button>
      </div>
    );
  }
}

export default Counter;
