import React, { Component } from "react";
import Cell from "./Cell";
import "./css/tictactoe.css";
class Tictactoe extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPlayer: "X",
      cells: new Array(9),
      winner_combinations: [
        "012",
        "345",
        "678",
        "036",
        "147",
        "258",
        "048",
        "246"
      ]
    };
    this.buttonClick = this.buttonClick.bind(this);
    this.hasWinner = this.hasWinner.bind(this);
    this.reset = this.reset.bind(this);
  }
  reset() {
    this.setState({
      currentPlayer: "X",
      cells: new Array(9)
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
          cells: ccells
        });
      else
        this.setState({
          currentPlayer: "Noone won"
        });
    else {
      this.setState({
        currentPlayer: this.state.currentPlayer + " won"
      });
    }
  }
  hasWinner() {
    let Xs = this.state.cells.filter(x => x === "X");
    let Os = this.state.cells.filter(x => x === "O");
    let result = false;
    if (Xs.length > 2 || Os.length > 2) {
      console.log("winner detection running");
      const set = {
        X: [],
        O: [],
        undefined: []
      };
      for (let i = 0; i < this.state.cells.length; i++) {
        const tmp = this.state.cells[i];
        set[tmp].push(i);
      }
      let Xstr = set["X"]
        .toString()
        .split(",")
        .join("");
      let Ostr = set["O"]
        .toString()
        .split(",")
        .join("");
      console.log(Xstr, Ostr);
      let winner = null;
      for (let i = 0; i < this.state.winner_combinations.length; i++) {
        const item = this.state.winner_combinations[i];
        if (helper(Xstr, item)) {
          winner = "X";
          break;
        } else if (helper(Ostr, item)) {
          winner = "Y";
          break;
        }
      }
      console.log("winner", winner);
      if (winner != null) {
        result = true;
      }
      function helper(str, sub) {
        let count = 0;
        for (let c of sub) if (str.indexOf(c) != -1) count++;
        return count === sub.length;
      }
    }
    return result;
  }
  render() {
    console.log("Rendering: Tictactoe");
    let result = [];
    for (let i = 0; i < 9; i++) {
      result.push(
        <div className="cell">
          <Cell
            onClick={this.buttonClick}
            entry={this.state.cells[i]}
            index={i}
            key={i}
            has_winner={
              this.state.currentPlayer.indexOf("won") !== -1 ? true : false
            }
          />
        </div>
      );
      if ((i + 1) % 3 === 0) result.push(<div className="clearfix" />);
    }

    return (
      <>
        <div className="header">
          <span onClick={this.reset}>Player: {this.state.currentPlayer}</span>
        </div>
        <div className="row">{result}</div>
      </>
    );
  }
}

export default Tictactoe;
