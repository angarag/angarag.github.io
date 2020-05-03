import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore } from "redux";
import counter from "./reducer";
import Root from "./Root";
import Clock from "./Clock";
import TodoList from "./TodoList";
import Main from "./Main";
var store = createStore(counter);
ReactDOM.render(
  <>
    <Provider store={store}>
      <Main />
    </Provider>
  </>,
  document.getElementById("container")
);
