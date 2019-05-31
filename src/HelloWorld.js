import React, { Component } from "react";
import "./css/helloworld.css";

class HelloWorld extends Component {
  componentDidMount() {
    console.log("Child: component did mount");
  }
  componentDidUpdate() {
    console.log("Child: component did update");
  }

  render() {
    console.log("Child: render");
    return (
      <div className="mars">
        <h1>Hello visitor, I'm Mars</h1>
        <h2>Your IP address is probably {this.props.ip}</h2>
      </div>
    );
  }
}

export default HelloWorld;
