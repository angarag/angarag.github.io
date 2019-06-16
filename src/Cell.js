import React, { Component } from "react";
import "./css/tictactoe.css";

class Cell extends Component {
  constructor(props) {
    super(props);
    this.state = {
      clicked: false
    };
    this.click = this.click.bind(this);
  }
  click() {
    this.setState({
      clicked: true
    });
    //    console.log(this.props.index);
    this.props.onClick(this.props.index);
  }
  shouldComponentUpdate(newProps, newState) {
    if (this.props.is_reset !== newProps.is_reset) {
      this.setState({
        clicked: false
      });
      return true;
    }
    if (this.state.clicked !== newState.clicked) return true;
    if (this.props.has_winner !== newProps.has_winner) return true;
    return false;
  }

  render() {
    console.log("Rendering: Cell", this.props.index);
    return (
      <button
        onClick={this.click}
        className={
          this.state.clicked === true || this.props.has_winner === true
            ? "clicked"
            : ""
        }
      >
        {this.props.children}
      </button>
    );
  }
}

export default Cell;
