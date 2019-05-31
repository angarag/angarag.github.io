import React, { Component } from "react";
import "./css/menuButton.css";
class MenuButton extends Component {
  render() {
    console.log("MenuButton: render");
    return <button id="roundButton" onMouseDown={this.props.handleMouseDown} />;
  }
}

export default MenuButton;
