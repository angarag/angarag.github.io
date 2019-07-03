import React, { Component } from "react";
import Tictactoe from "./Tictactoe";
import Cell from "./Cell";
class Root extends Component {
  render() {
    let cells = new Array(9);
    cells[Math.floor(Math.random() * 8)] = "X";
    console.log("Main: render");
    const aCellComp = <Cell>haha</Cell>;
    return (
      <div>
        <Tictactoe cells={cells} aCell={aCellComp} />
      </div>
    );
  }
}

export default Root;
