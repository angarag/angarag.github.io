import React, { Component } from "react";
import HelloWorld from "./HelloWorld";

class Container extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ip: "",
    };
  }
  componentDidMount() {
    console.log("Container: component did mount");
    this.setState({
      ip: "99.88.77.66",
    });
  }
  componentDidUpdate() {
    console.log("Container: component did update");
  }
  render() {
    console.log("Container: render");
    return (
      <div>
        <HelloWorld ip={this.state.ip} />
      </div>
    );
  }
}

export default Container;
