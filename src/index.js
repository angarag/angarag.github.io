import React from "react";
import ReactDOM from "react-dom";
import "./css/index.css";
import Main from "./Main";
import { Provider } from "react-redux";
import { createStore } from "redux";
import counter from "./reducer";
import App from "./App";
var store = createStore(counter);
ReactDOM.render(
  <>
    <Provider store={store}>
      <Main />
      <App />
    </Provider>
  </>,
  document.getElementById("container")
);
