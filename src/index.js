import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore } from "redux";
import counter from "./reducer";
import Tictactoe from "./Tictactoe";
var store = createStore(counter);
ReactDOM.render(
  <>
    <Provider store={store}>
      <Tictactoe />
    </Provider>
  </>,
  document.getElementById("container")
);
