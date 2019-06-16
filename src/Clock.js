import React, { Component } from "react";

class Clock extends Component {
  constructor(props) {
    super(props);
    this.state = {
      time: new Date().toLocaleString()
    };
    console.log(this.state.time);
    this.tick = this.tick.bind(this);
    setInterval(() => {
      this.tick();
    }, 1000);
  }
  tick() {
    this.setState({
      time: new Date().toLocaleString()
    });
  }
  render() {
    return (
      <>
        <div>Time is {this.state.time}</div>
      </>
    );
  }
}

export default Clock;
