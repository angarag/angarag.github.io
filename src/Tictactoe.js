import React, { Component } from "react";
import Cell from "./Cell";
import "./css/tictactoe.css";
class Tictactoe extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPlayer: "X",
      cells: this.props.cells ? this.props.cells : new Array(9),
      winner_combinations: [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
      ],
      is_reset: false,
    };
    this.buttonClick = this.buttonClick.bind(this);
    this.hasWinner = this.hasWinner.bind(this);
    this.reset = this.reset.bind(this);
  }
  reset() {
    this.setState({
      currentPlayer: "X",
      cells: new Array(9),
      is_reset: !this.state.is_reset,
    });
  }
  buttonClick(item) {
    let ccells = this.state.cells;
    ccells[item] = this.state.currentPlayer;
    console.log(ccells);
    if (!this.hasWinner())
      if (ccells.includes(undefined))
        this.setState({
          currentPlayer: this.state.currentPlayer === "X" ? "O" : "X",
          cells: ccells,
        });
      else
        this.setState({
          currentPlayer: "Noone wins",
        });
    else {
      this.setState({
        currentPlayer: this.state.currentPlayer + " wins",
      });
    }
  }
  hasWinner() {
    const Xs = this.state.cells.filter((i) => i === "X");
    const Os = this.state.cells.filter((i) => i === "O");
    const arr = {
      X: [],
      O: [],
    };
    let result = false;
    if (Xs.length > 2 || Os.length > 2) {
      for (let i in this.state.cells)
        if (this.state.cells[i] !== undefined)
          arr[this.state.cells[i]].push(parseInt(i));
      console.log("Winner detection is running", Xs, Os, arr);
      for (let i of this.state.winner_combinations) {
        let count = 0;
        for (let x of arr.X) {
          if (i.includes(x)) count++;
        }
        if (count === 3) {
          console.log("X wins");
          return true;
        }
        count = 0;
        for (let o of arr.O) {
          if (i.includes(o)) {
            count++;
          }
        }
        if (count === 3) {
          console.log("O wins");
          return true;
        }
      }
      console.log(arr);
    }
    return result;
  }

  render() {
    console.log("Rendering: Tictactoe");
    let result = [];
    for (let i = 0; i < 9; i++) {
      result.push(
        <div className="grid-item">
          <Cell
            onClick={this.buttonClick}
            index={i}
            key={i}
            has_winner={
              this.state.currentPlayer.indexOf("wins") !== -1 ? true : false
            }
            is_reset={this.state.is_reset}
          >
            {this.state.cells[i]}
          </Cell>
        </div>
      );
    }

    return (
      <>
        <div className="header">
          <div>Player: {this.state.currentPlayer}</div>
          <button onClick={this.reset}>Reset</button>
        </div>
        <div className="grid">{result}</div>
        {this.props.aCell}
      </>
    );
  }
}

export default Tictactoe;
