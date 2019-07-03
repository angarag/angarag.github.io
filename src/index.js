import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore } from "redux";
import counter from "./reducer";
import Root from "./Root";
import Clock from "./Clock";
import TodoList from "./TodoList";
var store = createStore(counter);
ReactDOM.render(
  <>
    <Provider store={store}>
      <Root />
      <Clock />
      <TodoList />
    </Provider>
  </>,
  document.getElementById("container")
);
