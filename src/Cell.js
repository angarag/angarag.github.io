import React, { PureComponent } from "react";
import "./css/tictactoe.css";

class Cell extends PureComponent {
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
        {this.props.entry}
      </button>
    );
  }
}

export default Cell;
