import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore } from "redux";
import counter from "./reducer";
import Tictactoe from "./Tictactoe";
import Clock from "./Clock"
var store = createStore(counter);
ReactDOM.render(
  <>
    <Provider store={store}>
      <Tictactoe />
      <Clock />
    </Provider>
  </>,
  document.getElementById("container")
);
